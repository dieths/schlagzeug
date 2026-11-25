// Offline-Cache: Online immer die neueste Version laden, offline die gespeicherte nehmen.
const CACHE = 'drum-notes-v3';
const KIT = { bd: ['s1','s2','n1','n2','a1','a2'], sn: ['s1','s2','n1','n2','a1','a2'], hh: ['s1','s2','n1','n2','a1','a2'], ho: ['n1','n2'], hf: ['n1','n2'], t1: ['s1','n1','n2','a1'], t2: ['s1','n1','n2','a1'], rd: ['n1','a1','b1'], cr: ['n1','a1'] };
const SAMPLES = Object.entries(KIT).flatMap(([g, ks]) => ks.map((k) => `samples/${g}_${k}.wav`));
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png', ...SAMPLES];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin || url.pathname.includes('/api/')) return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); }
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then((r) => r || caches.match('index.html')))
  );
});
