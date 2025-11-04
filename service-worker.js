self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('centrafocus-cache').then(cache => {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './assets/centrafocus.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
