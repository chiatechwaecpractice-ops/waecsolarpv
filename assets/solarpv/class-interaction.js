(function () {
  const COMMENTS_KEY = "waecSolarPv.comments.v1";
  const BANS_KEY = "waecSolarPv.chatBans.v1";
  const MAX_UPLOAD_BYTES = 1024 * 1024;
  const REACTIONS = ["Helpful", "Clear", "Needs review", "Thanks"];

  let comments = readJson(COMMENTS_KEY, []);
  let bans = readJson(BANS_KEY, {});
  let pendingAttachment = null;

  document.addEventListener("DOMContentLoaded", initInteraction);
  window.addEventListener("waec-auth-change", renderInteraction);
  window.addEventListener("online", renderInteraction);
  window.addEventListener("offline", renderInteraction);

  function initInteraction() {
    const form = document.querySelector("#commentForm");
    if (!form) return;
    form.addEventListener("submit", submitComment);
    const fileInput = form.querySelector("input[type='file']");
    fileInput.addEventListener("change", handleAttachment);
    document.querySelector("#commentList").addEventListener("click", handleCommentAction);
    renderInteraction();
  }

  async function handleAttachment(event) {
    const file = event.currentTarget.files[0];
    pendingAttachment = null;
    setCommentStatus("");
    if (!file) return;
    if (file.size > MAX_UPLOAD_BYTES) {
      event.currentTarget.value = "";
      setCommentStatus("Attachment rejected. Maximum upload size is 1 MB.", true);
      return;
    }
    if (!/^image\/(png|jpeg|webp)$/.test(file.type) && file.type !== "application/pdf") {
      event.currentTarget.value = "";
      setCommentStatus("Only PNG, JPG, WebP image files or PDF files are allowed.", true);
      return;
    }
    pendingAttachment = {
      name: file.name,
      type: file.type,
      size: file.size,
      dataUrl: await readFileAsDataUrl(file)
    };
    setCommentStatus(`Attached: ${file.name}`);
  }

  function submitComment(event) {
    event.preventDefault();
    const session = getSession();
    if (!navigator.onLine) {
      setCommentStatus("Internet needed for class comments.", true);
      return;
    }
    if (!session) {
      setCommentStatus("Login is required before commenting.", true);
      return;
    }
    if (isBanned(session)) {
      setCommentStatus("Your account can read the class discussion but cannot comment. Contact admin.", true);
      return;
    }
    const form = event.currentTarget;
    const text = clean(new FormData(form).get("comment"));
    if (!text) {
      setCommentStatus("Type a comment before posting.", true);
      return;
    }
    comments.unshift(makeComment({ text, parentId: null, attachment: pendingAttachment }));
    pendingAttachment = null;
    form.reset();
    save();
    setCommentStatus("Comment posted for this device.");
    renderInteraction();
  }

  function handleCommentAction(event) {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const action = button.dataset.action;
    const id = button.dataset.id;
    if (action === "react") reactToComment(id, button.dataset.reaction);
    if (action === "reply") submitReply(id);
    if (action === "delete") deleteComment(id);
    if (action === "ban") banAuthor(id);
  }

  function submitReply(parentId) {
    const session = getSession();
    if (!navigator.onLine) {
      setCommentStatus("Internet needed for class comments.", true);
      return;
    }
    if (!session || isBanned(session)) {
      setCommentStatus("Reply not allowed for this account.", true);
      return;
    }
    const input = document.querySelector(`[data-reply-input="${cssEscape(parentId)}"]`);
    const text = clean(input && input.value);
    if (!text) {
      setCommentStatus("Type a reply before posting.", true);
      return;
    }
    comments.push(makeComment({ text, parentId, attachment: null }));
    input.value = "";
    save();
    renderInteraction();
  }

  function reactToComment(id, reaction) {
    const session = getSession();
    if (!navigator.onLine) {
      setCommentStatus("Internet needed for class comments.", true);
      return;
    }
    if (!session || isBanned(session)) {
      setCommentStatus("Reaction not allowed for this account.", true);
      return;
    }
    const comment = comments.find(item => item.id === id);
    if (!comment) return;
    const key = getChatKey(session);
    comment.reactions = comment.reactions || {};
    comment.reactions[reaction] = comment.reactions[reaction] || [];
    const list = comment.reactions[reaction];
    const index = list.indexOf(key);
    if (index >= 0) list.splice(index, 1);
    else list.push(key);
    save();
    renderInteraction();
  }

  function deleteComment(id) {
    if (!isAdmin()) return;
    comments = comments.filter(item => item.id !== id && item.parentId !== id);
    save();
    renderInteraction();
  }

  function banAuthor(id) {
    if (!isAdmin()) return;
    const comment = comments.find(item => item.id === id);
    if (!comment) return;
    bans[comment.author.key] = {
      name: comment.author.name,
      email: comment.author.email,
      bannedAt: new Date().toISOString()
    };
    saveBans();
    renderInteraction();
  }

  function makeComment({ text, parentId, attachment }) {
    const session = getSession();
    return {
      id: crypto.randomUUID ? crypto.randomUUID() : `comment-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      parentId,
      text,
      attachment,
      reactions: {},
      createdAt: new Date().toISOString(),
      author: {
        key: getChatKey(session),
        name: session.user?.name || session.user?.username || "Candidate",
        email: session.user?.email || "",
        role: session.role
      }
    };
  }

  function renderInteraction() {
    const form = document.querySelector("#commentForm");
    const list = document.querySelector("#commentList");
    if (!form || !list) return;
    const session = getSession();
    const banned = session && isBanned(session);
    const offline = !navigator.onLine;
    form.querySelectorAll("textarea, input, button").forEach(node => {
      node.disabled = !session || banned || offline;
    });
    if (offline) setCommentStatus("Internet needed for class comments.", true);
    else if (!session) setCommentStatus("Login first to join the class discussion.");
    else if (banned) setCommentStatus("You can read the class discussion, but admin has restricted this account from commenting.", true);
    else setCommentStatus("");

    const roots = comments.filter(item => !item.parentId);
    if (roots.length === 0) {
      list.innerHTML = `<div class="empty-comments">No class comments yet. Start with a clear question or useful explanation.</div>`;
      return;
    }
    list.innerHTML = roots.map(renderComment).join("");
  }

  function renderComment(comment) {
    const replies = comments.filter(item => item.parentId === comment.id);
    const bannedAuthor = Boolean(bans[comment.author.key]);
    return `
      <article class="comment-card ${bannedAuthor ? "comment-banned" : ""}">
        <div class="comment-head">
          <div>
            <strong>${escapeHtml(comment.author.name)}</strong>
            <span>${comment.author.role === "admin" ? "Admin" : "Candidate"} · ${formatDate(comment.createdAt)}${bannedAuthor ? " · chat banned" : ""}</span>
          </div>
          ${isAdmin() ? `<div class="comment-admin-actions"><button type="button" data-action="delete" data-id="${comment.id}">Delete</button><button type="button" data-action="ban" data-id="${comment.id}">Ban from chat</button></div>` : ""}
        </div>
        <p>${escapeHtml(comment.text)}</p>
        ${renderAttachment(comment.attachment)}
        <div class="reaction-row">
          ${REACTIONS.map(label => `<button type="button" data-action="react" data-id="${comment.id}" data-reaction="${escapeHtml(label)}">${label} <span>${reactionCount(comment, label)}</span></button>`).join("")}
        </div>
        <div class="reply-box">
          <input data-reply-input="${comment.id}" maxlength="500" placeholder="Reply to this class point">
          <button type="button" data-action="reply" data-id="${comment.id}">Reply</button>
        </div>
        ${replies.length ? `<div class="reply-list">${replies.map(renderReply).join("")}</div>` : ""}
      </article>
    `;
  }

  function renderReply(reply) {
    return `
      <article class="reply-card">
        <strong>${escapeHtml(reply.author.name)}</strong>
        <span>${formatDate(reply.createdAt)}</span>
        <p>${escapeHtml(reply.text)}</p>
        ${isAdmin() ? `<button type="button" data-action="delete" data-id="${reply.id}">Delete reply</button>` : ""}
      </article>
    `;
  }

  function renderAttachment(attachment) {
    if (!attachment) return "";
    if (attachment.type.startsWith("image/")) {
      return `<figure class="comment-attachment"><img src="${attachment.dataUrl}" alt="${escapeHtml(attachment.name)}"><figcaption>${escapeHtml(attachment.name)}</figcaption></figure>`;
    }
    return `<p class="comment-file"><a href="${attachment.dataUrl}" target="_blank" rel="noreferrer">${escapeHtml(attachment.name)}</a></p>`;
  }

  function reactionCount(comment, reaction) {
    return (comment.reactions && comment.reactions[reaction] ? comment.reactions[reaction].length : 0);
  }

  function getSession() {
    return window.WaecSolarPvAuth ? window.WaecSolarPvAuth.getSession() : null;
  }

  function isAdmin() {
    return window.WaecSolarPvAuth && window.WaecSolarPvAuth.isAdmin();
  }

  function isBanned(session) {
    return Boolean(bans[getChatKey(session)]);
  }

  function getChatKey(session) {
    const user = session?.user || {};
    return clean(user.email || user.pin || user.username || user.name || session?.deviceId || "guest").toLowerCase();
  }

  function save() {
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
  }

  function saveBans() {
    localStorage.setItem(BANS_KEY, JSON.stringify(bans));
  }

  function readJson(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch {
      return fallback;
    }
  }

  function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function setCommentStatus(message, isError = false) {
    const node = document.querySelector("#commentStatus");
    if (!node) return;
    node.textContent = message;
    node.classList.toggle("error", Boolean(isError));
  }

  function clean(value) {
    return String(value || "").trim();
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function cssEscape(value) {
    return window.CSS && CSS.escape ? CSS.escape(value) : String(value).replace(/"/g, '\\"');
  }

  function formatDate(value) {
    return new Date(value).toLocaleString([], { dateStyle: "medium", timeStyle: "short" });
  }
})();
