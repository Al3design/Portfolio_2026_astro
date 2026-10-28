// Bump this version whenever the offline document, its tokens or fonts change.
const CACHE_PREFIX = 'al3design-offline-';
const CACHE_NAME = `${CACHE_PREFIX}v1`;
const OFFLINE_URL = '/offline/';

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.add(new Request(OFFLINE_URL, { cache: 'reload' }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  // Only public HTML navigations; never intercept CMS, preview or asset requests.
  if (request.mode !== 'navigate' || request.method !== 'GET' || url.origin !== self.location.origin || /^\/(admin|revision)(\/|$)/.test(url.pathname)) return;

  event.respondWith((async () => {
    try {
      // Actual HTTP errors (including 404) remain actual HTTP responses.
      return await fetch(request);
    } catch {
      const cache = await caches.open(CACHE_NAME);
      const fallback = await cache.match(OFFLINE_URL);
      if (!fallback) return Response.error();
      // Do not let crawlers interpret the fallback as the requested article.
      return new Response(fallback.body, {
        status: 503,
        statusText: 'Service Unavailable',
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-store',
          'X-Robots-Tag': 'noindex, nofollow',
        },
      });
    }
  })());
});
