// Drum Notes – kleiner Server ohne Abhängigkeiten.
// Liefert die App aus (public/) und speichert Songs als JSON-Dateien in DATA_DIR/songs.
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = Number(process.env.PORT) || 8080;
const DATA = process.env.DATA_DIR || path.join(__dirname, 'data');
const PASSWORD = process.env.APP_PASSWORD || '';
const PUB = path.join(__dirname, 'public');
const SONGS = path.join(DATA, 'songs');
const ID = /^[A-Za-z0-9-]{1,64}$/;
const MAX_BODY = 2 * 1024 * 1024;
const SEC = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'no-referrer',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

fs.mkdirSync(SONGS, { recursive: true });

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.wav': 'audio/wav',
};

function send(res, code, body, type = 'application/json; charset=utf-8') {
  res.writeHead(code, { 'Content-Type': type, 'Cache-Control': 'no-store', ...SEC });
  res.end(typeof body === 'string' || Buffer.isBuffer(body) ? body : JSON.stringify(body));
}

function authorized(req) {
  if (!PASSWORD) return true;
  const a = Buffer.from(String(req.headers['x-token'] || ''));
  const b = Buffer.from(PASSWORD);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (d) => {
      size += d.length;
      if (size > MAX_BODY) { reject(new Error('Song zu groß')); req.destroy(); } else chunks.push(d);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function readSong(id) {
  try { return JSON.parse(fs.readFileSync(path.join(SONGS, id + '.json'), 'utf8')); } catch { return null; }
}

function writeSong(song) {
  const file = path.join(SONGS, song.id + '.json');
  const tmp = file + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(song));
  fs.renameSync(tmp, file); // atomar ersetzen
}

async function api(req, res, p) {
  if (p === '/api/ping') return send(res, 200, { ok: true, auth: !!PASSWORD, authorized: authorized(req) });
  if (!authorized(req)) return send(res, 401, { error: 'Passwort falsch oder fehlt' });

  if (p === '/api/songs' && req.method === 'GET') {
    const list = fs.readdirSync(SONGS)
      .filter((f) => f.endsWith('.json'))
      .map((f) => readSong(f.slice(0, -5)))
      .filter(Boolean);
    return send(res, 200, list);
  }

  const m = p.match(/^\/api\/songs\/([^/]+)$/);
  if (m) {
    const id = m[1];
    if (!ID.test(id)) return send(res, 400, { error: 'Ungültige ID' });
    if (req.method === 'GET') {
      const s = readSong(id);
      return s ? send(res, 200, s) : send(res, 404, { error: 'Nicht gefunden' });
    }
    if (req.method === 'PUT') {
      let s;
      try { s = JSON.parse(await readBody(req)); } catch { return send(res, 400, { error: 'Kein gültiges JSON' }); }
      if (!s || s.id !== id || typeof s.updatedAt !== 'number') return send(res, 400, { error: 'Ungültiger Song' });
      const current = readSong(id);
      if (current && current.updatedAt > s.updatedAt) return send(res, 409, current); // Server hat Neueres
      writeSong(s);
      return send(res, 200, s);
    }
  }
  return send(res, 404, { error: 'Nicht gefunden' });
}

function serveStatic(req, res, p) {
  if (p === '/') p = '/index.html';
  const file = path.normalize(path.join(PUB, p));
  if (!file.startsWith(PUB + path.sep)) return send(res, 403, 'Verboten', 'text/plain');
  fs.readFile(file, (err, data) => {
    if (err) return send(res, 404, 'Nicht gefunden', 'text/plain');
    const ext = path.extname(file);
    const fresh = ['.html', '.js', '.webmanifest'].includes(ext);
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': fresh ? 'no-cache' : 'public, max-age=604800',
      ...SEC,
    });
    res.end(req.method === 'HEAD' ? undefined : data);
  });
}

http.createServer((req, res) => {
  let p;
  try { p = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); } catch { return send(res, 400, { error: 'Ungültige URL' }); }
  if (p.startsWith('/api/')) {
    api(req, res, p).catch((e) => send(res, 500, { error: String((e && e.message) || e) }));
  } else if (req.method === 'GET' || req.method === 'HEAD') {
    serveStatic(req, res, p);
  } else {
    send(res, 405, { error: 'Methode nicht erlaubt' });
  }
}).listen(PORT, () => {
  console.log(`Drum Notes läuft auf Port ${PORT} (Daten: ${DATA}${PASSWORD ? ', mit Passwort' : ''})`);
});
