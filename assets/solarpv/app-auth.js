(function () {
  const APP_BUILD = "20260512-pin-device-lock";
  const APP_AUTH_SCRIPT = `assets/solarpv/app-auth.js?v=${APP_BUILD}`;
  const API_URL = "/.netlify/functions/auth";
  const SESSION_KEY = "waecSolarPv.session.v1";
  const DEVICE_KEY = "waecSolarPv.deviceId.v1";
  const OFFLINE_KEY = "waecSolarPv.offlineUser.v1";
  const REMEMBER_KEY = "waecSolarPv.rememberDevice.v1";
  const ADMIN_HASH_KEY = "waecSolarPv.adminHash.v1";
  const ADMIN_USER_KEY = "waecSolarPv.adminUser.v1";

  const state = {
    deviceId: getOrCreateDeviceId(),
    session: readJson(SESSION_KEY),
    installPrompt: null
  };

  window.WaecSolarPvAuth = {
    getSession: () => state.session,
    getDeviceId: () => state.deviceId,
    isAdmin: () => Boolean(state.session && state.session.role === "admin"),
    onChange: handler => {
      window.addEventListener("waec-auth-change", event => handler(event.detail.session));
    }
  };

  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    state.installPrompt = event;
    const installButton = document.querySelector("[data-install-app]");
    if (installButton) installButton.hidden = false;
  });

  document.addEventListener("DOMContentLoaded", () => {
    injectAuthShell();
    bindAuthEvents();
    registerServiceWorker();
    if (state.session) {
      unlockApp(state.session, { silent: true });
    } else {
      lockApp();
    }
  });

  function injectAuthShell() {
    document.body.insertAdjacentHTML("afterbegin", `
      <section class="auth-gate" id="authGate" aria-label="Login required">
        <div class="auth-card">
          <div class="auth-brand">
            <img src="assets/logo.png" alt="ChiaTech Solutions logo">
            <div>
              <strong>A-One Tutorial Center</strong>
            <span>CHIATECH ELECTRICAL WIRING TUTORIAL FOR WAEC 2026-2027</span>
            </div>
          </div>

          <div class="auth-tabs" role="tablist" aria-label="Login type">
            <button type="button" class="active" data-auth-tab="student">Student Login</button>
            <button type="button" data-auth-tab="admin">Admin Login</button>
          </div>

          <form class="auth-form" id="studentLoginForm" data-auth-panel="student" novalidate>
            <label>PIN <input name="pin" autocomplete="one-time-code" required></label>
            <label>Name <input name="name" autocomplete="name"></label>
            <label>Email <input name="email" type="email" autocomplete="email"></label>
            <label>Phone <input name="phone" inputmode="tel" autocomplete="tel"></label>
            <label class="auth-check"><input name="rememberDevice" type="checkbox" checked> Save access on this device for automatic offline login</label>
            <button type="submit">Unlock Tutorial</button>
          </form>

          <form class="auth-form hidden" id="adminLoginForm" data-auth-panel="admin" autocomplete="off">
            <label>Username <input name="adminUsername" autocomplete="off" autocapitalize="none" spellcheck="false" required></label>
            <label>Password <input name="password" type="password" autocomplete="current-password" required></label>
            <button type="submit">Login as Admin</button>
          </form>

          <p class="auth-status" id="authStatus" role="status"></p>
          <div class="auth-meta">
            <span id="offlineReadyTag">Secure offline access activates after first successful login on this device.</span>
          </div>
        </div>
      </section>

      <aside class="admin-drawer hidden" id="adminDrawer" aria-label="Admin panel">
        <div class="admin-drawer-head">
          <strong>Admin Console</strong>
          <button type="button" data-close-admin>Close</button>
        </div>
        <p>PIN records remain in the secure backend. This device can cache access after a successful login.</p>
        <form id="changeAdminForm" class="auth-form compact">
          <label>New private admin password <input name="newPassword" type="password" minlength="6" autocomplete="new-password" required></label>
          <button type="submit">Change Admin Password on This Device</button>
        </form>
        <div class="admin-device">
          <span>Current device</span>
          <code>${state.deviceId}</code>
        </div>
      </aside>
    `);

    const actions = document.querySelector(".topbar-inner");
    if (actions) {
      actions.insertAdjacentHTML("beforeend", `
        <div class="session-actions">
          <button type="button" data-install-app hidden>Install App</button>
          <button type="button" data-admin-open hidden>Admin</button>
          <button type="button" data-logout hidden>Logout</button>
        </div>
      `);
    }

  }

  function bindAuthEvents() {
    document.querySelectorAll("[data-auth-tab]").forEach(button => {
      button.addEventListener("click", () => switchTab(button.dataset.authTab));
    });

    const studentForm = document.querySelector("#studentLoginForm");
    const studentPinInput = studentForm.querySelector("input[name='pin']");
    studentPinInput.addEventListener("input", () => recoverSavedDetails(studentForm));
    studentForm.addEventListener("submit", async event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const payload = {
        type: "student",
        pin: clean(form.get("pin")),
        name: clean(form.get("name")),
        email: clean(form.get("email")).toLowerCase(),
        phone: normalizePhone(form.get("phone")),
        deviceId: state.deviceId,
        deviceName: getDeviceName(),
        userAgent: navigator.userAgent || ""
      };
      if (!payload.pin) {
        setStatus("Enter your PIN to continue.", true);
        return;
      }
      await recoverSavedDetails(event.currentTarget);
      payload.name = clean(event.currentTarget.elements.name && event.currentTarget.elements.name.value);
      payload.email = clean(event.currentTarget.elements.email && event.currentTarget.elements.email.value).toLowerCase();
      payload.phone = normalizePhone(event.currentTarget.elements.phone && event.currentTarget.elements.phone.value);
      setStatus(navigator.onLine ? "Checking your PIN..." : "Opening saved access on this device...");
      try {
        const result = await authenticateStudent(payload);
        if (!result.ok) throw new Error(result.message || "Login failed.");
        const user = normalizeUser(result.user, payload);
        const session = {
          role: "student",
          user,
          deviceId: state.deviceId,
          offlineAllowed: result.offlineAllowed !== false,
          localPreview: result.localPreview === true,
          loginAt: new Date().toISOString()
        };
        const rememberDevice = form.get("rememberDevice") === "on";
        localStorage.setItem(REMEMBER_KEY, rememberDevice ? "yes" : "no");
        if (rememberDevice) {
          saveJson(SESSION_KEY, session);
        } else {
          localStorage.removeItem(SESSION_KEY);
          localStorage.removeItem(OFFLINE_KEY);
        }
        if (rememberDevice && session.offlineAllowed) {
          saveJson(OFFLINE_KEY, {
            pinHash: await makeOfflinePinHash(payload.pin),
            name: user.name,
            email: user.email,
            phone: user.phone,
            deviceId: payload.deviceId,
            user,
            loginAt: session.loginAt
          });
        }
        unlockApp(session);
      } catch (error) {
        const offline = await tryOfflineStudent(payload);
        if (offline) {
          unlockApp(offline);
          return;
        }
        setStatus(friendlyLoginMessage(error), true);
      }
    });

    document.querySelector("#adminLoginForm").addEventListener("submit", async event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const username = clean(form.get("adminUsername"));
      const password = String(form.get("password") || "");
      if (!(await verifyAdmin(username, password))) {
        setStatus("Admin login failed. Check username and password.", true);
        return;
      }
      const session = {
        role: "admin",
        user: { name: "Administrator", username },
        deviceId: state.deviceId,
        offlineAllowed: true,
        loginAt: new Date().toISOString()
      };
      saveJson(SESSION_KEY, session);
      unlockApp(session);
      openAdmin();
    });

    document.querySelector("[data-logout]").addEventListener("click", logout);
    document.querySelector("[data-admin-open]").addEventListener("click", openAdmin);
    document.querySelector("[data-close-admin]").addEventListener("click", closeAdmin);
    document.querySelector("[data-install-app]").addEventListener("click", installApp);
    document.querySelector("#changeAdminForm").addEventListener("submit", changeAdminPassword);
  }

  function switchTab(tab) {
    document.querySelectorAll("[data-auth-tab]").forEach(button => button.classList.toggle("active", button.dataset.authTab === tab));
    document.querySelectorAll("[data-auth-panel]").forEach(panel => panel.classList.toggle("hidden", panel.dataset.authPanel !== tab));
    setStatus("");
  }

  async function authenticateStudent(payload) {
    if (!navigator.onLine) {
      throw new Error("Internet is required for first login on this device.");
    }

    const backendMessage = [];
    const backendResult = await authenticateFromBackend(payload, backendMessage);
    if (backendResult) return backendResult;
    throw new Error(backendMessage[0] || candidatePinSupportMessage());
  }

  async function authenticateFromBackend(payload, messages) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await readJsonResponse(response);
      if (response.ok) return result;
      if (response.status === 400 || response.status === 401) {
        return result || { ok: false, message: "PIN details were not accepted." };
      }
      if (response.status >= 500) {
        messages.push(candidatePinSupportMessage());
      } else if (result && result.message) {
        messages.push(result.message);
      }
    } catch {
      messages.push(candidatePinSupportMessage());
    }
    return null;
  }

  async function tryOfflineStudent(payload) {
    const cached = readJson(OFFLINE_KEY);
    if (!cached || cached.deviceId !== state.deviceId) return null;
    const pinMatches = cached.pinHash === await makeOfflinePinHash(payload.pin);
    const detailsMatch =
      (!payload.name || clean(cached.name).toLowerCase() === payload.name.toLowerCase()) &&
      (!payload.email || clean(cached.email).toLowerCase() === payload.email) &&
      (!payload.phone || normalizePhone(cached.phone) === payload.phone);
    const matches = pinMatches && detailsMatch;
    if (!matches) return null;
    const session = {
      role: "student",
      user: normalizeUser(cached.user, cached),
      deviceId: state.deviceId,
      offlineAllowed: true,
      loginAt: new Date().toISOString(),
      offlineLogin: true
    };
    saveJson(SESSION_KEY, session);
    return session;
  }

  async function recoverSavedDetails(form) {
    const cached = readJson(OFFLINE_KEY);
    if (!cached || cached.deviceId !== state.deviceId) return false;
    const pin = clean(form.elements.pin && form.elements.pin.value);
    if (!pin || cached.pinHash !== await makeOfflinePinHash(pin)) return false;
    const user = normalizeUser(cached.user, cached);
    if (form.elements.name && !clean(form.elements.name.value)) form.elements.name.value = user.name;
    if (form.elements.email && !clean(form.elements.email.value)) form.elements.email.value = user.email;
    if (form.elements.phone && !clean(form.elements.phone.value)) form.elements.phone.value = user.phone;
    return true;
  }

  function normalizeUser(user, fallback) {
    return {
      name: clean(user && user.name) || clean(fallback && fallback.name),
      email: clean(user && user.email).toLowerCase() || clean(fallback && fallback.email).toLowerCase(),
      phone: normalizePhone((user && user.phone) || (fallback && fallback.phone))
    };
  }

  async function verifyAdmin(username, password) {
    const storedUser = localStorage.getItem(ADMIN_USER_KEY) || "chiatech";
    const storedHash = localStorage.getItem(ADMIN_HASH_KEY);
    const hash = await sha256(password);
    if (storedHash) return username === storedUser && hash === storedHash;
    return username === "chiatech" && password === "solarpv";
  }

  async function changeAdminPassword(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const newPassword = String(form.get("newPassword") || "");
    if (newPassword.length < 6) {
      setStatus("Use at least 6 characters for the new private password.", true);
      return;
    }
    localStorage.setItem(ADMIN_USER_KEY, "chiatech");
    localStorage.setItem(ADMIN_HASH_KEY, await sha256(newPassword));
    event.currentTarget.reset();
    setStatus("Admin password changed privately on this device.");
  }

  function unlockApp(session, options = {}) {
    state.session = session;
    document.body.classList.remove("auth-pending");
    document.body.classList.add("auth-ready");
    document.querySelector("#authGate").classList.add("hidden");
    document.querySelector("[data-logout]").hidden = false;
    document.querySelector("[data-admin-open]").hidden = session.role !== "admin";
    if (session.role === "admin") document.querySelector("[data-admin-open]").hidden = false;
    warmOfflineCache();
    if (!options.silent) {
      setStatus(session.localPreview ? "Local preview access granted. Deployed access will validate through the PIN sheet." : session.offlineLogin ? "Automatic offline login restored on this device." : "Login successful. This device is now recorded for secure access.");
    }
    refreshAppUpdate();
    notifyAuthChange();
  }

  function lockApp() {
    document.body.classList.add("auth-pending");
    document.body.classList.remove("auth-ready");
    document.querySelector("#authGate").classList.remove("hidden");
    document.querySelector("[data-logout]").hidden = true;
    document.querySelector("[data-admin-open]").hidden = true;
    closeAdmin();
    notifyAuthChange();
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
    state.session = null;
    lockApp();
    setStatus("Logged out on this device.");
  }

  function openAdmin() {
    document.querySelector("#adminDrawer").classList.remove("hidden");
  }

  function closeAdmin() {
    document.querySelector("#adminDrawer").classList.add("hidden");
  }

  async function installApp() {
    if (!state.installPrompt) return;
    state.installPrompt.prompt();
    await state.installPrompt.userChoice;
    state.installPrompt = null;
    document.querySelector("[data-install-app]").hidden = true;
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("service-worker.js", { updateViaCache: "none" })
      .then(registration => {
        registration.update().catch(() => {});
        if (registration.waiting) registration.waiting.postMessage({ type: "SKIP_WAITING" });
        registration.addEventListener("updatefound", () => {
          const worker = registration.installing;
          if (!worker) return;
          worker.addEventListener("statechange", () => {
            if (worker.state === "installed" && navigator.serviceWorker.controller) {
              worker.postMessage({ type: "SKIP_WAITING" });
            }
          });
        });
      })
      .catch(error => console.warn("Service worker registration failed.", error));
  }

  function refreshAppUpdate() {
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.getRegistration().then(registration => {
      if (!registration) return;
      registration.update().catch(() => {});
      if (registration.waiting) registration.waiting.postMessage({ type: "SKIP_WAITING" });
    }).catch(() => {});
  }

  function warmOfflineCache() {
    if (!("serviceWorker" in navigator)) return;
    const collect = () => {
      const urls = new Set(["./", "waec2026solarpv.html", "style.css", "solarpv.js", APP_AUTH_SCRIPT, "assets/solarpv/extra-tests.js", "assets/solarpv/class-interaction.js", "ElectricalSymbolsGuide/Electrical Symbols Guide.pdf"]);
      document.querySelectorAll("img[src], script[src], link[href], object[data], a[href$='.pdf']").forEach(node => {
        const value = node.getAttribute("src") || node.getAttribute("href") || node.getAttribute("data");
        if (value && !value.startsWith("http")) urls.add(value);
      });
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({ type: "WARM_CACHE", urls: Array.from(urls) });
      }
    };
    if (navigator.serviceWorker.controller) collect();
    else navigator.serviceWorker.ready.then(collect).catch(() => {});
  }

  function getOrCreateDeviceId() {
    let id = localStorage.getItem(DEVICE_KEY);
    if (!id) {
      id = crypto.randomUUID ? crypto.randomUUID() : `device-${Date.now()}-${Math.random().toString(16).slice(2)}`;
      localStorage.setItem(DEVICE_KEY, id);
    }
    return id;
  }

  function getDeviceName() {
    const platform = navigator.platform || "Device";
    const mode = window.matchMedia("(display-mode: standalone)").matches ? "installed" : "browser";
    return `${platform} ${mode}`;
  }

  function notifyAuthChange() {
    window.dispatchEvent(new CustomEvent("waec-auth-change", { detail: { session: state.session } }));
  }

  async function readJsonResponse(response) {
    try {
      return await response.json();
    } catch {
      return null;
    }
  }

  function clean(value) {
    return String(value || "").trim();
  }

  function normalizePhone(value) {
    return clean(value).replace(/[^\d+]/g, "");
  }

  function setStatus(message, isError = false) {
    const status = document.querySelector("#authStatus");
    if (!status) return;
    status.textContent = message;
    status.classList.toggle("error", Boolean(isError));
  }

  function candidatePinSupportMessage() {
    return "PIN access could not be confirmed. Please contact admin on WhatsApp: 07037689917.";
  }

  function friendlyLoginMessage(error) {
    const message = clean(error && error.message);
    if (!message) return candidatePinSupportMessage();
    if (/GOOGLE_|Netlify|backend|private key|service account|environment/i.test(message)) {
      return candidatePinSupportMessage();
    }
    return message;
  }

  function readJson(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return null;
    }
  }

  function saveJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  async function sha256(value) {
    if (!crypto.subtle) {
      let hash = 0;
      for (let index = 0; index < value.length; index += 1) {
        hash = ((hash << 5) - hash) + value.charCodeAt(index);
        hash |= 0;
      }
      return `fallback-${Math.abs(hash)}`;
    }
    const data = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(digest)).map(byte => byte.toString(16).padStart(2, "0")).join("");
  }

  function makeOfflinePinHash(pin) {
    return sha256(`${state.deviceId}:${clean(pin)}`);
  }
})();
