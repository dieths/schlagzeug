# Drum Notes – Anleitung

Drum Notes ist eine Web-App zum Schreiben, Üben und Drucken von Schlagzeugnoten. Sie läuft im Browser auf Handy, Tablet und Rechner, funktioniert offline und gleicht alle Songs über den eigenen Server ab.

---

## Inhalt

1. [Überblick über die Oberfläche](#1-überblick-über-die-oberfläche)
2. [Noten schreiben](#2-noten-schreiben)
3. [Takte bearbeiten und strukturieren](#3-takte-bearbeiten-und-strukturieren)
4. [Üben und Abspielen](#4-üben-und-abspielen)
5. [Aufnahme mit dem E-Drum (MIDI)](#5-aufnahme-mit-dem-e-drum-midi)
6. [Bibliothek: Songs und Ordner](#6-bibliothek-songs-und-ordner)
7. [Export: PDF, MIDI, MusicXML](#7-export-pdf-midi-musicxml)
8. [Speichern, Offline und Synchronisation](#8-speichern-offline-und-synchronisation)
9. [Als App auf dem Gerät installieren](#9-als-app-auf-dem-gerät-installieren)
10. [Betrieb auf dem eigenen Server](#10-betrieb-auf-dem-eigenen-server)
11. [Fehlerbehebung](#11-fehlerbehebung)
12. [Kurzreferenz](#12-kurzreferenz)

---

## 1. Überblick über die Oberfläche

Die App ist von oben nach unten aufgebaut:

| Bereich | Inhalt |
|---|---|
| **Kopfzeile** | Songname (antippen zum Umbenennen), Statuspunkt für die Synchronisation, **⇩ Export**, **📁 Songs** |
| **Notenansicht** | Das ganze Stück als Notenbild. Ein Tipp auf einen Takt wählt ihn zum Bearbeiten aus. |
| **Editor** | Takt-Navigation, Taktart, Takt-Optionen, Werkzeuge und der vergrößerte Noteneditor des gewählten Takts |
| **Üben & Einstellungen** | Aufklappbar: Abspielbereich, Tempo-Trainer, Swing, E-Drum, Lautstärke, Klang |
| **Transportleiste** (unten) | ▶ Abspielen/Stopp, Tempo (−, Zahl, +), Tap, Klick an/aus, Drums an/aus |

Alles wird automatisch gespeichert. Es gibt keinen Speichern-Knopf.

---

## 2. Noten schreiben

### 2.1 Takt auswählen

- In der Notenansicht auf den Takt tippen, oder
- im Editor mit **◀** und **▶** blättern.

Der gewählte Takt ist farbig hinterlegt und erscheint vergrößert im Noteneditor.

### 2.2 Taktart

Unter **Taktart** Zähler (1–16) und Nenner (2, 4, 8) wählen. Jeder Takt hat seine eigene Taktart, Taktwechsel sind also einfach möglich (z. B. 4/4 → 7/8 → 3/4). Beim Ändern bleiben vorhandene Noten an ihrer zeitlichen Position, soweit sie noch in den Takt passen.

> Das Tempo bezieht sich immer auf Viertel (♩). Bei x/8-Takten klickt das Metronom auf jede Achtel und betont den Beginn jeder Gruppe (z. B. 2+2+3 bei 7/8).

### 2.3 Raster (Unterteilung)

Das Raster bestimmt, auf welche Positionen Noten gesetzt werden können.

- **Raster (alle):** setzt die Unterteilung für alle Schläge des Takts.
- **Raster pro Schlag:** Über jedem Schlag im Noteneditor sitzt ein eigenes Auswahlfeld. So lassen sich Unterteilungen innerhalb eines Takts mischen.

| Auswahl (x/4) | Bedeutung |
|---|---|
| ♩ | Viertel |
| 8tel | Achtel |
| Tri | Achtel-Triole |
| 16tel | Sechzehntel |
| Quint | Quintole |
| Sext | Sextole |
| 32tel | Zweiunddreißigstel |
| **½ + ½** | Schlag in zwei Hälften teilen, jede Hälfte mit eigenem Raster |
| **⅓ ⅓ ⅓** | Schlag in drei Triolen-Drittel teilen, jedes mit eigenem Raster |

**Beispiel: Achtel + 16tel-Triole in einem Schlag**

1. Über dem Schlag **½ + ½** wählen.
2. In der Zeile darunter die erste Hälfte auf **8tel**, die zweite auf **16tel-Tri** stellen.

Die Notation zeigt die Tuplet-Zahl (3, 5, 6) automatisch über der betreffenden Gruppe.

### 2.4 Werkzeuge

Erst ein Werkzeug wählen, dann in die Noten tippen. Ein zweiter Tipp an dieselbe Stelle nimmt die Eingabe wieder weg.

| Werkzeug | Wirkung | Instrumente |
|---|---|---|
| ● **Schlag** | normaler Schlag setzen/entfernen | alle |
| **> Akzent** | Akzent | alle außer HH-Fuß |
| **( ) Ghost** | Ghost-Note (leise, in Klammern) | Snare, Toms |
| **Flam** | Vorschlag mit einer Note | Snare, Toms |
| **Drag** | Vorschlag mit zwei Noten | Snare, Toms |
| **z Buzz-Wirbel** | Presswirbel (z am Notenhals) | Snare, Toms |
| **o Hi-Hat offen** | offene Hi-Hat (o über der Note) | Hi-Hat |
| **⌫ Löschen** | Note an dieser Stelle entfernen | alle |

### 2.5 Direkt in die Noten tippen

Im Noteneditor gilt:

- **Waagerechte Position:** Zählzeit
- **Senkrechte Position:** Instrument (nach üblicher Schlagzeugnotation)

**So geht's:** Finger auf das Notensystem legen, gedrückt halten und verschieben. Eine Vorschau zeigt z. B. „Snare · 2 e · setzen“. Beim Loslassen wird gesetzt. Mit der Maus erscheint die Vorschau schon beim Darüberfahren.

**Tipp für Handys:** Im Feld **Instrument** z. B. **Nur Snare** wählen. Dann zählt nur noch die waagerechte Position – ideal für Snare-Etüden.

**Positionen im Notensystem**

| Instrument | Position | Notenkopf | Hals |
|---|---|---|---|
| Crash | Hilfslinie über dem System | x | oben |
| Hi-Hat | Zwischenraum über dem System | x | oben |
| Ride | oberste Linie | x | oben |
| Tom 1 | oberster Zwischenraum | ● | oben |
| Tom 2 | vierte Linie | ● | oben |
| Snare | dritter Zwischenraum | ● | oben |
| Standtom | zweiter Zwischenraum | ● | oben |
| Bassdrum | unterster Zwischenraum | ● | unten |
| HH-Fuß | unter dem System | x | unten |

### 2.6 Raster-Ansicht (Tabelle)

Unter **Raster-Ansicht** (aufklappbar) lassen sich Noten wie in einem Step-Sequencer setzen: eine Zeile pro Instrument, eine Spalte pro Rasterposition. Die Werkzeuge gelten hier genauso. **Nur Snare** blendet alle anderen Zeilen aus und vergrößert die Felder.

### 2.7 Sticking (Handsatz)

- **Von Hand:** In die Sticking-Zeile unter dem Notensystem tippen. Jeder Tipp wechselt zwischen R, L und leer.
- **Automatisch:** **✋ Handsatz** öffnen:
  - **Nach Raster:** Jede Rasterposition hat eine feste Hand, die Führhand liegt immer auf dem Schlag. Gut für Grooves, weil die Hände durch Pausen weiterlaufen.
  - **Wechselschlag:** Jeder gespielte Schlag wechselt die Hand. Gut für Rudiments und Fills.
  - **Führhand:** Rechts oder Links.
  - **Bereich:** aktueller Takt oder ganzer Song.
  - Optional Hi-Hat, Ride und Crash einbeziehen (sonst nur Snare und Toms).

Wo beide Hände gleichzeitig spielen, bleibt das Feld leer. Einzelne Felder lassen sich danach von Hand korrigieren.

---

## 3. Takte bearbeiten und strukturieren

### 3.1 Grundfunktionen

| Knopf | Wirkung |
|---|---|
| **＋ Takt** | Leeren Takt mit gleicher Taktart nach dem aktuellen einfügen |
| **⧉ Duplizieren** | Kopie direkt dahinter einfügen |
| **Leeren** | Alle Noten entfernen (Markierungen bleiben) |
| **Löschen** | Takt entfernen |
| **⇠ ⇢** | Takt nach links/rechts verschieben |
| **↶ Zurück** | Letzte Änderung rückgängig (bis zu 100 Schritte) |

### 3.2 Mehrere Takte auf einmal

1. Ersten Takt auswählen.
2. **⬚ Bereich** tippen.
3. In der Notenansicht auf den letzten Takt des Bereichs tippen. Angezeigt wird z. B. „Takte 5–8 markiert (4)“.

Jetzt wirken **Duplizieren**, **Leeren**, **Löschen**, **Kopieren** und **Ausschneiden** auf den ganzen Bereich.

**Kopieren und Einfügen**

1. Bereich (oder einzelnen Takt) markieren → **Kopieren**.
2. Den Takt wählen, *hinter* dem eingefügt werden soll → **Einfügen (n)**.

Die Zwischenablage bleibt erhalten, auch wenn du einen anderen Song öffnest.

### 3.3 Faulenzer (Wiederholungszeichen für Takte)

Im Feld **Faulenzer**:

- **1 Takt wiederholen:** Der Takt spielt den vorherigen Takt. Im Notenbild steht das Zeichen ⁒.
- **2 Takte wiederholen:** Dieser und der folgende Takt wiederholen die beiden Takte davor. Das Zeichen mit der „2“ steht über dem Taktstrich, die beiden Takte bleiben in einer Zeile.

Faulenzer übernehmen die Taktart der Vorlage automatisch und spielen beim Abspielen deren Noten – auch wenn die Vorlage selbst ein Faulenzer ist.

Im Noteneditor eines Faulenzer-Takts:

- **Ausschreiben:** setzt die Noten als echte Kopie ein, danach normal bearbeitbar.
- **Faulenzer entfernen:** macht wieder einen leeren Takt daraus.

### 3.4 Wiederholungen mit Klammern

| Bedienelement | Wirkung |
|---|---|
| **𝄆 Anfang** | Wiederholung beginnt mit diesem Takt (Doppelstrich mit Punkten) |
| **𝄇 Ende (2×/3×/4×)** | Wiederholung endet hier, Anzahl der Durchgänge |
| **Klammer: 1./2./3.** | Takt gehört zur 1., 2. oder 3. Klammer (Volta) |

**Beispiel:** `|: A B |1. C :|2. D` einrichten

1. Takt A: **𝄆 Anfang**
2. Takt C: **1. Klammer** und **𝄇 Ende (2×)**
3. Takt D: **2. Klammer**

Gespielt wird A B C A B D. Ohne 𝄆 Anfang springt die Wiederholung zum Stückanfang bzw. hinter das vorige Wiederholungsende.

### 3.5 Taktnummer markieren und Beschriftungen

- **▢ Nr. markieren:** Die Taktnummer steht fett im Rahmen über dem Takt (Orientierungsmarke, z. B. „Ab Takt 33“).
- **Beschriftung:** Freitext über dem Takt, z. B. „Intro“, „Teil B“, „Song 2: Highway“. Ideal für Medleys.

Beides wird im PDF immer gedruckt, auch wenn die übrigen Taktnummern ausgeblendet sind.

---

## 4. Üben und Abspielen

### 4.1 Transportleiste

| Element | Funktion |
|---|---|
| **▶ / ■** | Abspielen / Stopp (am Rechner auch Leertaste) |
| **− / +** | Tempo ändern; gedrückt halten für schnelles Ändern |
| **Zahl** | Tempo direkt eingeben (30–300, Viertel pro Minute) |
| **Tap** | Mehrmals im gewünschten Tempo tippen |
| **Klick** | Metronom an/aus |
| **Drums** | Drum-Sounds an/aus (aus = nur Metronom, zum Mitspielen) |

Während der Wiedergabe läuft eine Markierung durch die Noten. Die Statuszeile zeigt Takt und Durchlauf.

### 4.2 Üben & Einstellungen

| Einstellung | Wirkung |
|---|---|
| **Abspielen** | *Ganzer Song* (mit Wiederholungen), *Nur aktueller Takt* oder *Takt-Bereich* von–bis |
| **Endlos wiederholen** | Schleife statt Stopp am Ende |
| **1 Takt einzählen** | Metronom zählt einen Takt vor |
| **Editor läuft mit** | Der Editor springt zum gerade gespielten Takt |
| **Swing** | Off-Beats Richtung Triole verschieben (0–100 %, auf 8tel oder 16tel). Die Noten bleiben gerade notiert. |
| **Tempo-Trainer** | Erhöht das Tempo um x BPM alle n Durchläufe bis zum Zielwert |
| **Lautstärke** | Drums und Metronom getrennt |
| **Klang** | *Echtes Drumset* (Aufnahmen) oder *Synthesizer*; **Raumklang** regelbar |

**Übungsideen**

- **Langsam steigern:** Takt-Bereich wählen, Endlos an, Tempo-Trainer z. B. +5 BPM alle 2 Durchläufe bis 120.
- **Selbst spielen:** **Drums** aus – nur das Metronom läuft, du spielst die Noten.
- **Shuffle-Gefühl:** Groove gerade notieren und Swing auf 60–100 % stellen.

> Am iPhone den Lautlos-Schalter ausschalten, sonst bleibt die App stumm.

---

## 5. Aufnahme mit dem E-Drum (MIDI)

Ein E-Drum mit USB-MIDI kann Noten direkt ins Raster einspielen.

**Voraussetzungen:** Chrome (Android, Windows, macOS, Linux). Safari/iPhone unterstützt kein Web-MIDI. In der Vorschau-Version innerhalb von Claude funktioniert MIDI nicht, auf dem eigenen Server schon.

**So geht's**

1. E-Drum per USB anschließen (am Tablet mit USB-C-OTG-Adapter).
2. **Üben & Einstellungen → E-Drum → Verbinden**, Zugriff erlauben. Der Gerätename erscheint, der Punkt blinkt bei jedem Schlag.
3. Im Song den Bereich und das **passende Raster** einstellen (z. B. 16tel). Jeder Schlag landet auf der nächstgelegenen Rasterposition.
4. **Aufnahme** anhaken.
5. **▶** starten (mit Einzählen) und mitspielen. Die Statuszeile zeigt „● Aufnahme“.
6. Stoppen. Gefällt es nicht: **↶ Zurück** nimmt die ganze Aufnahme zurück.

**Details**

- **Zuordnung:** nach General MIDI (Roland, Yamaha, Alesis u. a.): Kick, Snare (auch Rimshot/Cross-Stick), Hi-Hat zu/offen/Fuß, Toms, Crash, Ride, Ride-Glocke (wird zum Ride-Akzent).
- **Anschlagstärke:** sehr leise (< 45) → Ghost-Note, sehr fest (≥ 105) → Akzent.
- **Latenz:** Die Verzögerung der Tonausgabe wird automatisch ausgeglichen.
- **Vorhandene Noten** bleiben erhalten; an derselben Position wird überschrieben.
- **Monitor:** „Schläge auch über die App hörbar machen“ nur einschalten, wenn das Modul selbst keinen Ton ausgibt.

---

## 6. Bibliothek: Songs und Ordner

Über **📁 Songs** öffnet sich die Bibliothek.

| Funktion | Bedienung |
|---|---|
| **Song öffnen** | Antippen |
| **Ordner öffnen** | Antippen; zurück über die Pfadleiste (🏠 Bibliothek › …) |
| **＋ Ordner** | Neuen Ordner im aktuellen Ordner anlegen |
| **＋ Song** | Neuen Song aus einer Vorlage im aktuellen Ordner anlegen |
| **Suchen** | Durchsucht alle Ordner nach Songname und Urheber |
| **A–Z / Neueste** | Sortierung |
| **⋯** an jedem Eintrag | Umbenennen, Verschieben, Duplizieren, Papierkorb |
| **Auswählen** | Mehrere Einträge abhaken, dann gemeinsam verschieben oder löschen |
| **Drag & Drop** | Am Rechner Einträge auf Ordner oder die Pfadleiste ziehen |
| **🗑 Papierkorb** | Gelöschtes wiederherstellen oder endgültig löschen |

Ordner kommen mit ihrem gesamten Inhalt in den Papierkorb und werden auch komplett wiederhergestellt.

**Vorlagen:** Snare-Etüde (Rudiments & Tuplets), Taktwechsel-Übung, Rock-Beat, 16tel-Groove mit Fill, Shuffle, 6/8-Groove, Leeres Blatt.

**Teilen / Sichern:** Unten in der Bibliothek lässt sich der aktuelle Song als Text kopieren (z. B. zum Weitergeben) und ein eingefügter Text als neuer Song laden.

---

## 7. Export: PDF, MIDI, MusicXML

Über **⇩ Export**.

### 7.1 PDF-Notenblatt

**Angaben** (werden mit dem Song gespeichert)

| Feld | Erscheint |
|---|---|
| Titel, Untertitel | groß und mittig auf Seite 1 |
| Musik / Urheber | rechts oben |
| Arrangement / Transkription | rechts oben |
| Tempo- / Stilangabe | links oben, zusammen mit ♩ = Tempo |
| Copyright-Zeile | unten mittig auf Seite 1 |
| Spielhinweise | nach den Noten |

**Layout**

| Option | Wirkung |
|---|---|
| **Notengröße** | 100 % bis 50 % |
| **Takte pro Zeile** | automatisch oder fest 2–8 |
| **Taktnummern** | bei jedem Takt, am Zeilenanfang oder keine |
| **Mehrtaktpausen** | Leere Taktfolgen als ein Balken mit Anzahl |
| **Legende** | Zeigt, welche Position welches Instrument ist (nur genutzte Instrumente) |
| **Sticking drucken** | Handsatz unter den Noten ein/aus |

Unter den Layout-Optionen steht eine Schätzung wie „110 Takte in 26 Zeilen → etwa 3 Seiten“.

> **Viele Takte auf wenige Seiten:** Notengröße 60 %, 4 Takte pro Zeile, Taktnummern am Zeilenanfang. So passen rund 110 Takte auf 3 Seiten.

### 7.2 MIDI (.mid)

Drumspur auf Kanal 10 (General MIDI) mit Tempo, Taktwechseln, ausgeschriebenen Wiederholungen und Faulenzern, Swing, Flams, Drags und Buzz-Wirbeln. Für DAWs (GarageBand, Cubase, Logic …) oder zum Abspielen über ein E-Drum-Modul.

### 7.3 MusicXML

Notenbild zum Weiterbearbeiten in MuseScore, Sibelius, Dorico u. a. Enthalten sind Taktarten, Tuplets (3, 5, 6, 7), Akzente, Ghost-Notes, Vorschläge, Buzz-Wirbel, offene Hi-Hat, Sticking (als Text unter den Noten), Wiederholungen mit Klammern, markierte Taktnummern und Beschriftungen. Faulenzer werden ausgeschrieben.

> In der Vorschau-Version innerhalb von Claude kommen MIDI und MusicXML als ZIP-Datei.

---

## 8. Speichern, Offline und Synchronisation

- **Automatisch:** Jede Änderung wird sofort auf dem Gerät gespeichert und – wenn ein Server erreichbar ist – nach etwa einer Sekunde übertragen.
- **Offline:** Die App startet auch ohne Netz. Änderungen werden übertragen, sobald der Server wieder erreichbar ist.
- **Mehrere Geräte:** Alle Geräte sehen dieselben Songs und Ordner. Wurde ein Song auf zwei Geräten bearbeitet, gilt die neuere Änderung.

**Statuspunkt in der Kopfzeile**

| Farbe | Bedeutung |
|---|---|
| 🟢 grün | Mit dem Server synchronisiert |
| 🟠 orange | Server gerade nicht erreichbar, Änderungen warten |
| 🔴 rot | Anmeldung abgelaufen oder Passwort nötig – antippen zum Neu-Anmelden |
| ⚪ grau | Nur auf diesem Gerät gespeichert (kein Server) |

> Jede Adresse hat im Browser ihren eigenen lokalen Speicher. Deshalb immer **dieselbe Adresse** verwenden (z. B. immer die Cloudflare-Adresse, auch im Heimnetz).

---

## 9. Als App auf dem Gerät installieren

**iPhone / iPad (Safari):** Seite öffnen und anmelden → Teilen-Symbol → **Zum Home-Bildschirm**. Die Home-Bildschirm-App hat ihre eigene Anmeldung; beim ersten Start einmal anmelden.

**Android (Chrome):** Seite öffnen und anmelden → Menü ⋮ → **App installieren**. Ist der Punkt ausgegraut, siehe [Fehlerbehebung](#11-fehlerbehebung).

**Rechner (Chrome/Edge):** Installieren-Symbol in der Adressleiste.

---

## 10. Betrieb auf dem eigenen Server

Kurzfassung – Details stehen in der [README](../README.md).

### 10.1 Installation

```sh
sudo git clone https://github.com/dieths/schlagzeug.git /opt/schlagzeug
cd /opt/schlagzeug
sudo cp .env.example .env
sudo chmod 600 .env
sudo nano .env      # TUNNEL_TOKEN eintragen, APP_PASSWORD leer lassen
sudo docker compose --profile tunnel up -d --build
```

### 10.2 Cloudflare Zero Trust

1. **Tunnel:** Networks → Tunnels → Tunnel anlegen, Token in `.env` (`TUNNEL_TOKEN=eyJ…`).
2. **Route (Published application):** Hostname, Service `http://localhost:8080`.
3. **Access-Anwendung** für die Domain: Policy *Allow* für deine E-Mail, Session Duration z. B. 1 Monat.
4. **Zweite Access-Anwendung (Bypass, Everyone)** nur für die Pfade `manifest.webmanifest`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` – sonst lässt sich die App nicht installieren.

### 10.3 Update und Datensicherung

```sh
cd /opt/schlagzeug && sudo ./update.sh
```

Die Songs liegen als JSON-Dateien im Docker-Volume `schlagzeug_drum-notes-data`:

```sh
docker run --rm -v schlagzeug_drum-notes-data:/data -v "$PWD":/backup alpine \
  tar czf /backup/drum-notes-backup.tgz -C /data .
```

---

## 11. Fehlerbehebung

| Problem | Lösung |
|---|---|
| **Kein Ton am iPhone** | Lautlos-Schalter aus, Lautstärke hoch. Ton startet erst nach dem ersten Tipp auf ▶. |
| **Erster Start dauert** | Beim ersten Abspielen wird das Drumset (ca. 2,3 MB) geladen, danach liegt es offline vor. |
| **Punkt rot: „Anmeldung abgelaufen“** | Punkt antippen → Seite lädt neu → anmelden. Nichts geht verloren. |
| **Punkt orange** | Server/Internet nicht erreichbar. Weiterarbeiten, wird später übertragen. |
| **„App installieren“ ausgegraut (Android)** | Access-Bypass für Manifest und Icons einrichten (Abschnitt 10.2), Seite neu laden. Bleibt es grau, verhindert ein Profil oder eine Geräteverwaltung die Installation. |
| **E-Drum wird nicht erkannt** | Chrome verwenden; USB-Kabel/OTG-Adapter prüfen; „Verbinden“ erneut tippen. |
| **Aufgenommene Schläge liegen daneben** | Passendes Raster vor der Aufnahme einstellen; mit Einzählen starten. |
| **Song fehlt auf einem Gerät** | Statuspunkt prüfen (grün?), gleiche Adresse verwenden. |
| **502 Bad Gateway (Cloudflare)** | Route muss auf `http://localhost:8080` zeigen; `docker compose logs cloudflared` prüfen. |
| **Etwas kaputt gemacht** | **↶ Zurück** (oder Strg/⌘ + Z). Gelöschte Songs liegen im Papierkorb. |

---

## 12. Kurzreferenz

**Tastatur (Rechner)**

| Taste | Funktion |
|---|---|
| Leertaste | Abspielen / Stopp |
| Strg/⌘ + Z | Rückgängig |
| Enter | Umbenennen bzw. neuen Ordner bestätigen |

**Typische Abläufe**

| Ziel | Schritte |
|---|---|
| Neuen Groove schreiben | 📁 Songs → ＋ Song → Leeres Blatt → Raster wählen → Werkzeug Schlag → in die Noten tippen |
| Fill aus 16tel-Triolen | Takt wählen → Raster pro Schlag auf Tri bzw. Sext → Snare/Toms setzen → ✋ Handsatz → Wechselschlag |
| Chorus wiederholen | Erster Takt 𝄆 Anfang → letzter Takt 𝄇 Ende (2×) |
| Groove 7× wiederholen | Groove-Takt → nächster Takt Faulenzer 1 Takt → ⬚ Bereich → Kopieren → Einfügen |
| Medley-Teil markieren | Takt wählen → ▢ Nr. markieren → Beschriftung „Song 2“ |
| Kompaktes Notenblatt | ⇩ Export → Notengröße 60 %, 4 Takte pro Zeile, Mehrtaktpausen an → PDF erstellen |

---

*Drum-Aufnahmen: [Versilian Community Sample Library](https://github.com/sgossner/VCSL), CC0 (gemeinfrei).*
