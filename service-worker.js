const CACHE_NAME = "chiatech-electrical-wiring-waec-v11";
const CORE_ASSETS = [
  "./",
  "waec2026solarpv.html",
  "favicon.ico",
  "style.css",
  "manifest.webmanifest",
  "solarpv.js",
  "assets/logo.png",
  "assets/logo2.PNG",
  "assets/solarpv.png",
  "assets/happytutor.PNG",
  "assets/happyclass.PNG",
  "assets/CEOsQuote.PNG",
  "assets/nicetime.PNG",
  "assets/icons/icon-192.png",
  "assets/solarpv/app-auth.js?v=20260512-pin-device-lock",
  "assets/solarpv/extra-tests.js",
  "assets/solarpv/class-interaction.js",
  "ElectricalSymbolsGuide/Electrical Symbols Guide.pdf",
  "assets/solarpv/drawing-studio/1bedroomA.PNG",
  "assets/solarpv/drawing-studio/2wayswitching.PNG",
  "assets/solarpv/drawing-studio/Ringcircuitsockets.PNG",
  "assets/solarpv/drawing-studio/conduitaccessories.PNG",
  "assets/solarpv/drawing-studio/Earthing system.PNG",
  "assets/solarpv/drawing-studio/ELCB.PNG",
  "assets/solarpv/drawing-studio/3phasemotorconnection.PNG",
  "assets/solarpv/drawing-studio/lap-wave-winding-waec.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => Promise.allSettled(CORE_ASSETS.map(asset => cache.add(encodeURI(asset)))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== location.origin) return;

  const shouldPreferNetwork =
    request.mode === "navigate" ||
    [".html", ".css", ".js", ".webmanifest"].some(extension => url.pathname.endsWith(extension));

  if (shouldPreferNetwork) {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match(request).then(cached => cached || caches.match("waec2026solarpv.html")))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      const network = fetch(request)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached || Response.error());
      return cached || network;
    })
  );
});

self.addEventListener("message", event => {
  if (!event.data) return;
  if (event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
    return;
  }
  if (event.data.type !== "WARM_CACHE" || !Array.isArray(event.data.urls)) return;
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      const urls = event.data.urls.filter(url => typeof url === "string" && url && !url.startsWith("http"));
      return Promise.allSettled(urls.map(url => cache.add(encodeURI(url))));
    })
  );
});
