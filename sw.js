/* Minimal service worker for the web panel PWA install prompt.
   Intentionally no caching: every request goes to the network, so a
   GitHub Pages redeploy is never hidden behind a stale cache. */
self.addEventListener("fetch", () => {});
