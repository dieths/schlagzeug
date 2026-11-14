# Drum Notes 🥁

Web-App zum Schreiben und Üben von Schlagzeugnoten – mit Metronom, Taktwechseln, gemischten Unterteilungen (Triolen, Quintolen, Sextolen, geteilte Schläge), Flams/Drags/Buzz, Sticking, automatischem Handsatz und PDF-Notenblatt.

Läuft als Docker-Container auf dem eigenen Server. Die Songs liegen zentral auf dem Server, jedes Gerät hat eine Offline-Kopie:

- **Offline:** Die App ist eine PWA. Einmal geöffnet, startet sie auch ohne Netz. Änderungen werden lokal gespeichert und automatisch übertragen, sobald der Server wieder erreichbar ist.
- **Alle Geräte:** Handy, iPad und Rechner sehen dieselben Songs. Bei gleichzeitigen Änderungen am selben Song gewinnt die neuere.
- **Bibliothek mit Ordnern:** Unterordner, Suche, Sortierung, Umbenennen, Verschieben (auch per Drag & Drop am Rechner), Mehrfachauswahl und Papierkorb. Ordner werden wie Songs synchronisiert.
- **Statuspunkt** oben rechts: grün = synchronisiert, orange = Server nicht erreichbar (Änderungen warten), rot = Passwort nötig, grau = nur lokal.

## Installation auf dem Server

```sh
git clone https://github.com/dieths/schlagzeug.git
cd schlagzeug
cp .env.example .env      # Port und optional Passwort anpassen
docker compose up -d --build
```

Danach läuft die App unter `http://<server>:8085`.

**Privates Repository?** Dann braucht der Server Lesezugriff, z. B. per Deploy-Key (GitHub → Repo → Settings → Deploy keys) und `git clone git@github.com:dieths/schlagzeug.git`.

### Passwort (optional)

In `.env` `APP_PASSWORD=...` setzen und `docker compose up -d` ausführen. Jedes Gerät fragt einmal danach und merkt es sich. Leer lassen, wenn die App nur im Heimnetz bzw. über WireGuard erreichbar ist.

### Nginx Proxy Manager (HTTPS)

HTTPS ist nötig, damit der Offline-Modus und „Zum Home-Bildschirm“ auf dem iPhone funktionieren.

1. *Hosts → Proxy Hosts → Add*: Domain z. B. `drums.example.de`, Forward `http://<server-ip>:8085`.
2. Reiter *SSL*: Let's-Encrypt-Zertifikat anfordern, *Force SSL* an.

### Auf dem Handy installieren

Seite in Safari öffnen → Teilen → **Zum Home-Bildschirm**. (Android/Chrome: Menü → *App installieren*.)

## Updates

Neue Versionen landen hier im Repository. Auf dem Server:

```sh
./update.sh
```

Das holt den neuen Stand (`git pull`) und baut den Container neu. Die Songs bleiben im Volume erhalten. Die Geräte laden die neue Version beim nächsten Öffnen mit Netz.

## Datensicherung

Die Songs liegen als einzelne JSON-Dateien im Docker-Volume `drum-notes-data` (`/data/songs`). Backup:

```sh
docker run --rm -v schlagzeug_drum-notes-data:/data -v "$PWD":/backup alpine \
  tar czf /backup/drum-notes-backup.tgz -C /data .
```

(Den genauen Volume-Namen zeigt `docker volume ls`.)

## Aufbau

| Datei | Zweck |
|---|---|
| `public/index.html` | Die komplette App (eine Datei) |
| `public/sw.js` | Service Worker für den Offline-Betrieb |
| `server.js` | Kleiner Node-Server ohne Abhängigkeiten: liefert die App aus, API `/api/songs` |
| `Dockerfile`, `docker-compose.yml` | Container |
| `update.sh` | Update vom Repository ziehen und neu bauen |

API: `GET /api/ping`, `GET /api/songs`, `GET/PUT /api/songs/:id` (bei Passwort mit Header `X-Token`).
