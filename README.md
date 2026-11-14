# Drum Notes 🥁

Web-App zum Schreiben und Üben von Schlagzeugnoten – mit Metronom, Taktwechseln, gemischten Unterteilungen (Triolen, Quintolen, Sextolen, geteilte Schläge), Flams/Drags/Buzz, Sticking, automatischem Handsatz und PDF-Notenblatt.

Läuft als Docker-Container auf dem eigenen Server. Die Songs liegen zentral auf dem Server, jedes Gerät hat eine Offline-Kopie:

- **Offline:** Die App ist eine PWA. Einmal geöffnet, startet sie auch ohne Netz. Änderungen werden lokal gespeichert und automatisch übertragen, sobald der Server wieder erreichbar ist.
- **Alle Geräte:** Handy, iPad und Rechner sehen dieselben Songs. Bei gleichzeitigen Änderungen am selben Song gewinnt die neuere.
- **Bibliothek mit Ordnern:** Unterordner, Suche, Sortierung, Umbenennen, Verschieben (auch per Drag & Drop am Rechner), Mehrfachauswahl und Papierkorb. Ordner werden wie Songs synchronisiert.
- **Statuspunkt** oben rechts: grün = synchronisiert, orange = Server nicht erreichbar (Änderungen warten), rot = Anmeldung/Passwort nötig, grau = nur lokal.

## Installation auf dem Server

```sh
sudo git clone https://github.com/dieths/schlagzeug.git /opt/schlagzeug
cd /opt/schlagzeug
sudo cp .env.example .env
sudo chmod 600 .env            # enthält den Tunnel-Token
sudo nano .env                 # Werte eintragen (siehe unten)
sudo docker compose --profile tunnel up -d --build   # mit Cloudflare Tunnel
# oder ohne Tunnel:  sudo docker compose up -d --build
```

Das Repository ist öffentlich und enthält keine Geheimnisse – Token, Passwort und Songs liegen nur auf dem Server (`.env` und Docker-Volume), nie im Repository.

Der Container ist gehärtet: läuft ohne Root, mit schreibgeschütztem Dateisystem (nur das Daten-Volume ist beschreibbar), ohne Linux-Capabilities und mit Speicherlimit. Standardmäßig ist der Port nur auf `127.0.0.1` gebunden, also von außen nicht erreichbar.

## Zugriff von außen mit Cloudflare Zero Trust

Kein Port am Router öffnen: Der Tunnel baut die Verbindung von innen zu Cloudflare auf, Cloudflare Access prüft vor jedem Zugriff, wer du bist.

### 1. Tunnel anlegen

1. [one.dash.cloudflare.com](https://one.dash.cloudflare.com) → **Networks → Tunnels → Create a tunnel** → Typ *Cloudflared*, Name z. B. `drum-notes`.
2. Bei *Install connector* den Docker-Befehl anzeigen lassen und **nur den Token** (die lange Zeichenkette nach `--token`) kopieren → in `.env` als `TUNNEL_TOKEN=...` eintragen.
3. **Public Hostname** hinzufügen: Subdomain `drums`, deine Domain, Service **HTTP** → `localhost:8080`.
   (Der Tunnel-Container teilt sich das Netzwerk mit der App, deshalb ist sie für ihn unter `localhost` erreichbar.)

> Du hast schon einen cloudflared-Container für andere Dienste? Dann den Tunnel-Teil hier weglassen (`docker compose up -d`), in `.env` `HOST_BIND=0.0.0.0` setzen und im bestehenden Tunnel einen Public Hostname auf `http://<server-ip>:8085` anlegen.

### 2. Zugriff absichern (Cloudflare Access)

**Unbedingt vor dem ersten Aufruf einrichten** – sonst ist die App öffentlich.

1. **Access → Applications → Add an application → Self-hosted**.
2. Name `Drum Notes`, Domain `drums.deinedomain.de` (ohne Pfad, gilt damit auch für `/api`).
3. **Session Duration:** z. B. *1 month*, damit du dich am Handy nicht ständig neu anmelden musst.
4. Policy: Action **Allow**, Include → **Emails** → deine E-Mail-Adresse(n).
5. Login-Methode: *One-time PIN* (Code per Mail) reicht völlig, alternativ Google/GitHub.

`APP_PASSWORD` in `.env` dann leer lassen – Cloudflare Access übernimmt die Anmeldung.

**Damit die App installierbar bleibt** (Android „App installieren“, iPhone-Icon): Chrome lädt Manifest und Icons teils ohne Anmelde-Cookie. Lege deshalb in Cloudflare Access eine zweite Self-hosted-Anwendung mit Policy-Aktion **Bypass** (Include: *Everyone*) für genau diese Pfade an. Sie enthalten keine Daten, nur das App-Symbol und den Namen:

- `drums.deinedomain.de/manifest.webmanifest`
- `drums.deinedomain.de/icon-192.png`
- `drums.deinedomain.de/icon-512.png`
- `drums.deinedomain.de/apple-touch-icon.png`

### 3. Starten und testen

```sh
docker compose --profile tunnel up -d --build
docker compose logs -f cloudflared   # sollte "Registered tunnel connection" zeigen
```

`https://drums.deinedomain.de` aufrufen → Cloudflare fragt nach der Anmeldung → App erscheint, der Punkt oben rechts wird grün.

Läuft die Anmeldung irgendwann ab, wird der Punkt rot („Anmeldung abgelaufen“). Ein Tipp darauf lädt die Seite neu und führt zum Login. Bis dahin wird alles lokal gespeichert und danach übertragen – es geht nichts verloren.

### Im Heimnetz ohne Internet?

Die App funktioniert dank Offline-Modus auch ohne Verbindung, Änderungen werden später übertragen. Wichtig: immer **dieselbe Adresse** verwenden (die Cloudflare-Adresse), denn jede Adresse hat im Browser ihren eigenen lokalen Speicher.

### Auf dem Handy installieren

`https://drums.deinedomain.de` in Safari öffnen, anmelden → Teilen → **Zum Home-Bildschirm**. (Android/Chrome: Menü → *App installieren*.) Die Home-Bildschirm-App hat auf dem iPhone ihre eigene Anmeldung – beim ersten Start einmal anmelden.

## Updates

Neue Versionen landen hier im Repository. Auf dem Server:

```sh
cd /opt/schlagzeug && sudo ./update.sh
```

Das holt den neuen Stand (`git pull`) und baut den Container neu (mit Tunnel, wenn `TUNNEL_TOKEN` gesetzt ist). Die Songs bleiben im Volume erhalten. Die Geräte laden die neue Version beim nächsten Öffnen mit Netz.

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
