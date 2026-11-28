# Schlagzeugnoten – Anleitung

Schlagzeugnoten ist eine Web-App zum Schreiben, Üben und Drucken von Schlagzeugnoten. Sie läuft im Browser auf Handy, Tablet und Rechner, funktioniert offline und gleicht alle Songs über den eigenen Server ab.

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

Die App füllt immer genau den Bildschirm – nichts rutscht weg:

| Bereich | Inhalt |
|---|---|
| **Kopfzeile** | Songname (antippen zum Umbenennen), Statuspunkt, **⇩ Export**, **📁 Songs**, **⚙** (Üben & Einstellungen) |
| **Notenansicht** (oben) | Das ganze Stück. Scrollt in sich. Ein Tipp auf einen Takt wählt ihn aus. Oben rechts **− Auto +** für die Notengröße (am PC auch Strg + Mausrad). |
| **Bearbeitung** (fest darunter) | Takt-Navigation, Werkzeuge und die Instrument-Spuren des gewählten Takts. Mit **▾** einklappen, wenn du nur lesen oder üben willst. |
| **Transportleiste** (unten) | ▶ Abspielen/Stopp, Tempo (−, Zahl, +), Tap, Klick an/aus, Drums an/aus |

Die obere Zeile der Bearbeitung:

| Knopf | Funktion |
|---|---|
| **◀ Takt 3/12 ▶** | Takt wechseln |
| **▶ ab hier** | Ab diesem Takt abspielen |
| **⚙ Takt** | Takt-Optionen: Taktart, Raster, Takte einfügen/löschen/verschieben, Bereich kopieren, Faulenzer, Wiederholungen, Tempo, Beschriftung |
| **＋** | Leeren Takt dahinter einfügen |
| **⌨** | Tastatur-Kürzel (nur am Rechner) |
| **↶ / ↷** | Rückgängig / Wiederherstellen |
| **▾ / ▴** | Bearbeitung ein-/ausklappen |

Alles wird automatisch gespeichert. Es gibt keinen Speichern-Knopf.

---

## 2. Noten schreiben

### 2.1 Takt auswählen

- In der Notenansicht auf den Takt tippen, oder
- mit **◀** und **▶** blättern (am Rechner auch **↑ ↓**), oder
- am Handy/Tablet in den Spuren **nach links oder rechts wischen** (siehe 2.5).

Der gewählte Takt ist farbig hinterlegt; darunter erscheinen seine Instrument-Spuren.

### 2.2 Taktart

Unter **⚙ Takt → Taktart** Zähler (1–16) und Nenner (2, 4, 8) wählen. Jeder Takt hat seine eigene Taktart, Taktwechsel sind also einfach möglich (z. B. 4/4 → 7/8 → 3/4). Beim Ändern bleiben vorhandene Noten an ihrer zeitlichen Position, soweit sie noch in den Takt passen.

> Das Tempo bezieht sich immer auf Viertel (♩). Bei x/8-Takten klickt das Metronom auf jede Achtel und betont den Beginn jeder Gruppe (z. B. 2+2+3 bei 7/8).

### 2.3 Raster (Unterteilung)

Das Raster bestimmt, auf welche Positionen Noten gesetzt werden können.

- **Raster (alle)** (unter ⚙ Takt): setzt die Unterteilung für alle Schläge des Takts.
- **Raster pro Schlag:** Über jedem Schlag in der Bearbeitung sitzt ein eigenes Auswahlfeld. So lassen sich Unterteilungen innerhalb eines Takts mischen.

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

### 2.4 Tippen, Gedrückthalten und Werkzeuge

**Der schnelle Weg – ohne Werkzeugwechsel:** Mit dem Standardwerkzeug **● Tippen** schaltet jeder Tipp auf ein Feld weiter:

| Instrument | 1. Tipp | 2. Tipp | 3. Tipp | 4. Tipp |
|---|---|---|---|---|
| Snare, Toms | ● Schlag | > Akzent | ( ) Ghost | leer |
| Hi-Hat | × Schlag | > Akzent | o offen | leer |
| Ride, Crash, Bassdrum | Schlag | > Akzent | leer | |
| HH-Fuß | Schlag | leer | | |

**Gedrückt halten** (am Rechner: Rechtsklick) öffnet ein Menü mit allen Möglichkeiten für dieses Feld: Anschlag, Verzierung (Flam, Drag, Wirbel), Dauer (Lang, Haltebogen), Sticking R/L, Dynamik und Löschen. Mehrere Änderungen hintereinander sind möglich, **Fertig** schließt das Menü.

**Werkzeuge zum „Malen“:** Die übrigen Werkzeuge sind praktisch, wenn dieselbe Sache auf viele Noten soll (z. B. lauter Flams). Werkzeug wählen, dann nacheinander auf die Felder tippen. Ein zweiter Tipp an dieselbe Stelle nimmt die Eingabe wieder weg. Danach wieder **● Tippen** wählen.

| Werkzeug | Wirkung | Instrumente |
|---|---|---|
| ● **Tippen** | Schlag → Akzent → Ghost/offen → leer (siehe oben) | alle |
| **> Akzent** | Akzent | alle außer HH-Fuß |
| **( ) Ghost** | Ghost-Note (leise, in Klammern) | Snare, Toms |
| **Flam** | Vorschlag mit einer Note | Snare, Toms, Hi-Hat, Ride, Crash |
| **Drag** | Vorschlag mit zwei Noten | Snare, Toms, Hi-Hat, Ride, Crash |
| **z Wirbel** | Snare und Toms: Presswirbel (z am Notenhals). Becken (Crash, Ride, Hi-Hat): Beckenwirbel (drei Striche am Hals bzw. über der ganzen Note) | Snare, Toms, Hi-Hat, Ride, Crash |
| **o Hi-Hat offen** | offene Hi-Hat (o über der Note) | Hi-Hat |
| **𝅗𝅥 Lang** | Note klingt bis zum nächsten Schlag dieser Stimme: halbe, punktierte halbe oder ganze Note statt Note + Pausen | alle |
| **‿ Haltebogen** | Bindet die Note an den nächsten Schlag desselben Instruments, auch über den Taktstrich; die gebundene Note wird nicht neu angeschlagen | alle |
| **⌫ Löschen** | Note an dieser Stelle entfernen | alle |

**Lange Noten und Haltebögen – Beispiele**

- **Crash ausklingen lassen:** Crash auf die Eins setzen, Werkzeug **Lang** antippen und auf die Note tippen. Steht im Takt sonst nichts in der oberen Stimme, wird daraus eine ganze Note.
- **Halbe Noten:** Schläge auf 1 und 3 setzen, beide mit **Lang** markieren.
- **Wirbel über mehrere Takte:** Wirbel auf die Eins, mit **Lang** zur ganzen Note machen, mit **Haltebogen** an den Schlag im nächsten Takt binden. Der Wirbel klingt durch, der gebundene Schlag wird nicht neu angeschlagen.
- **Beckenwirbel über eine halbe oder ganze Note:** Crash (oder Ride) auf den Schlag setzen, Werkzeug **z Wirbel**, dann **Lang**. Steht danach nichts mehr in der oberen Stimme, wird es eine ganze Note mit Wirbelstrichen; mit einem weiteren Schlag auf der 3 eine halbe. Zusammen mit einer Crescendo-Gabel ergibt das den typischen anschwellenden Beckenwirbel (siehe 2.8).

Lange Noten gehen immer bis zum nächsten Schlag derselben Stimme (Hände bzw. Füße), höchstens bis zum Taktende.

### 2.5 Instrument-Spuren

Unter dem Raster liegt für jedes Instrument eine eigene, große Zeile – genau unter den Zählzeiten (1 e + a …). In die **Snare-Zeile** tippen setzt immer eine Snare, eine Verwechslung ist ausgeschlossen. Das Ergebnis siehst du sofort oben im Notenbild.

- Angezeigt werden Hi-Hat, Snare, Bassdrum und alle Instrumente, die im Takt (oder direkt davor/danach) vorkommen.
- **＋ Alle Instrumente** blendet die übrigen Spuren (Crash, Ride, Toms, HH-Fuß) ein.
- Die Zeile **Sticking** wechselt pro Tipp zwischen R, L und leer.
- Die unterste Zeile **Dynamik** öffnet die Auswahl für Lautstärke und Gabeln (siehe 2.8).
- **♪ Noten hier zeigen** blendet zusätzlich den vergrößerten Takt über den Spuren ein (auf großen Bildschirmen standardmäßig an, am Handy aus, weil der Takt oben schon zu sehen ist).
- **✓ Sticking** und **✓ Dynamik** blenden diese beiden Zeilen ein oder aus, wenn du sie gerade nicht brauchst. Im Notenbild bleibt alles sichtbar.
- **⧉ Takt wie vorher** übernimmt den kompletten Inhalt des vorherigen Takts (Noten, Raster, Sticking) in den aktuellen. Typischer Ablauf: **＋** (neuer Takt) → **⧉ Takt wie vorher** → abwandeln. Beschriftung, Markierung, Tempo und Dynamik des aktuellen Takts bleiben erhalten.

**Lupe für feine Raster:** Wären die Felder zu schmal zum sicheren Treffen (z. B. 16tel oder 32tel am Handy), zeigt die Bearbeitung den Takt automatisch in Teilen, etwa Schlag 1–2 und Schlag 3–4. Links oben steht, welcher Teil gerade zu sehen ist (z. B. **‹ 1/2 ›**); die Pfeile blättern. Auf Tablet und Rechner ist meist genug Platz, dann bleibt der Takt am Stück. **✓ 🔍 Lupe** schaltet das Verhalten ab bzw. wieder an.

**Mehrere Takte nebeneinander (PC, Tablet quer):** Ist der Bildschirm breit genug, zeigt die Bearbeitung zwei bis vier Takte nebeneinander. Jeder Takt hat oben seine Nummer; der gerade gewählte ist farbig umrahmt. Ein Klick in ein Feld eines anderen Takts wählt diesen Takt und setzt die Note in einem Schritt. Am Ende des Ausschnitts blättert die Ansicht automatisch weiter. Faulenzer-Takte erscheinen als **%** mit dem Knopf **Ausschreiben**. **✓ Mehrere Takte** schaltet zurück auf einen Takt.

**Mit der Maus (PC):**

| Aktion | Wirkung |
|---|---|
| Klick | wie Tippen: Schlag → Akzent → Ghost → leer |
| Gedrückt halten und über die Spur ziehen | setzt dasselbe auf alle überstrichenen Felder – auch über Taktgrenzen. Beginnt der Zug auf einem Feld, das dabei leer wird, werden die überstrichenen Felder gelöscht. |
| Rechtsklick | Menü mit allen Optionen des Felds |
| Mauszeiger über einem leeren Feld | zeigt blass, was ein Klick setzen würde |

**Wischen:** In den Spuren nach links wischen zeigt den nächsten Teil bzw. den nächsten Takt, nach rechts den vorherigen. So lässt sich ein ganzes Stück durchgehen, ohne die Knöpfe zu suchen.

### 2.6 Schreiben mit der Tastatur (Rechner)

Am Rechner geht es am schnellsten mit der Tastatur. Ein blauer **Cursor** markiert die aktuelle Position; ein Klick in eine Spur oder in die Noten setzt ihn.

| Taste | Wirkung |
|---|---|
| ← → | Cursor eine Position weiter/zurück (läuft über Taktgrenzen) |
| ⇧ + ← → | Zum nächsten/vorigen Schlag |
| ↑ ↓ | Vorheriger/nächster Takt |
| Enter | Eine Position weiter |
| H / O / P | Hi-Hat / Hi-Hat offen / Hi-Hat mit dem Fuß |
| S | Snare |
| K oder B | Bassdrum |
| 1 / 2 / 3 | Tom 1 / Tom 2 / Standtom |
| R / C | Ride / Crash |
| ⇧ + Buchstabe | mit Akzent setzen |
| A | Akzent an der Position umschalten |
| G | Ghost-Note (Snare) |
| F / D / Z | Flam / Drag / Wirbel (Snare, Toms, Becken) |
| V | Dynamik-Auswahl an der Position öffnen |
| < / > | Crescendo / Decrescendo an der Position setzen bzw. entfernen |
| L / T | Lange Note / Haltebogen umschalten |
| X | Sticking R / L / leer |
| Entf | Alles an der Position löschen |
| Leertaste | Abspielen / Stopp |
| Strg/⌘ + Z | Rückgängig |
| Strg/⌘ + Y oder ⇧ + Strg/⌘ + Z | Wiederherstellen |

**Takte bearbeiten mit der Tastatur**

| Taste | Wirkung |
|---|---|
| Tab / ⇧ + Tab | Nächster / vorheriger Takt |
| ⇧ + ↑ ↓ oder ⇧ + Klick im Notenbild | Mehrere Takte auswählen |
| Strg + A | Alle Takte auswählen |
| Esc | Auswahl aufheben |
| Strg + C / X / V | Takt(e) kopieren / ausschneiden / hinter der Auswahl einfügen |
| Strg + D | Takt(e) duplizieren |
| Strg + Enter | Neuen leeren Takt einfügen |
| Strg + Entf | Takt(e) löschen |
| Strg + Plus / Minus / 0 | Notenbild größer / kleiner / automatisch |

Ein zweiter Druck auf dieselbe Taste nimmt den Schlag wieder weg. Mehrere Instrumente an einer Position (z. B. Hi-Hat + Bassdrum): einfach nacheinander H und K drücken, dann → weiter.

**Beispiel Rock-Beat (8tel):** `H K → → H → → H S → → H → → H K → → H → → H S`

Die Übersicht gibt es jederzeit über **⌨** in der Bearbeitung.

### 2.7 Sticking (Handsatz)

- **Von Hand:** In die Sticking-Spur tippen (oder Taste X). Jeder Tipp wechselt zwischen R, L und leer.
- **Automatisch:** **✋** (rechts neben den Werkzeugen) öffnen:
  - **Nach Raster:** Jede Rasterposition hat eine feste Hand, die Führhand liegt immer auf dem Schlag. Gut für Grooves, weil die Hände durch Pausen weiterlaufen.
  - **Wechselschlag:** Jeder gespielte Schlag wechselt die Hand. Gut für Rudiments und Fills.
  - **Führhand:** Rechts oder Links.
  - **Bereich:** aktueller Takt oder ganzer Song.
  - Optional Hi-Hat, Ride und Crash einbeziehen (sonst nur Snare und Toms).

Wo beide Hände gleichzeitig spielen, bleibt das Feld leer. Einzelne Felder lassen sich danach von Hand korrigieren.

### 2.8 Dynamik: Lautstärke, Crescendo, Decrescendo

In der Spur **Dynamik** an die gewünschte Zählzeit tippen (oder Taste V). Zur Auswahl stehen:

| Zeichen | Bedeutung |
|---|---|
| **pp, p, mp, mf, f, ff** | sehr leise bis sehr laut; gilt ab dieser Stelle bis zum nächsten Zeichen |
| **sfz** | einzelner, stark betonter Schlag; danach geht es in der vorherigen Lautstärke weiter |
| **fp** | Schlag laut (forte), sofort danach leise (piano) |
| **< cresc.** | Crescendo-Gabel: wird lauter |
| **> decresc.** | Decrescendo-Gabel: wird leiser |
| **\| Ende** | beendet eine Gabel, ohne eine neue Lautstärke zu setzen |

**So laufen Gabeln:** Eine Gabel beginnt an ihrer Zählzeit und läuft bis zum **nächsten Dynamik-Zeichen** – auch über mehrere Takte und Zeilen hinweg.

- Folgt eine Lautstärke (z. B. `p` … `<` … `ff`), wird genau bis dorthin lauter bzw. leiser.
- Folgt keine Lautstärke (sondern „| Ende“, eine weitere Gabel oder gar nichts), ändert sich die Lautstärke um zwei Stufen (z. B. mf → ff).
- Ohne nachfolgendes Zeichen endet die Gabel am Ende ihres Takts.

**Beispiel – anschwellender Beckenwirbel über zwei Takte:**
1. Takt 1: Crash auf die Eins, dann **z Wirbel**, **Lang** und **Haltebogen**. Dynamik `pp` auf die 1, `<` auf die 2.
2. Takt 2: Crash auf die Eins, ebenfalls **z Wirbel** und **Lang** (damit der Wirbel nach dem Bogen weiterklingt).
3. Takt 3: Dynamik `ff` auf die 1 – dort endet die Gabel. Ohne dritten Takt stattdessen `| Ende` auf die 4 von Takt 2.

Die Dynamik wirkt beim Abspielen (leisere/lautere Aufnahmen, auch innerhalb eines Wirbels), im PDF unter den Noten, im MIDI-Export als Anschlagstärke und im MusicXML-Export. Auch auf Faulenzer-Takten lässt sich Dynamik setzen. Ohne Dynamik-Zeichen klingt alles wie bisher (mf).

---

## 3. Takte bearbeiten und strukturieren

### 3.1 Grundfunktionen

Alle folgenden Funktionen liegen unter **⚙ Takt**. Häufiges geht auch direkt: **＋** fügt einen Takt ein, **↶** macht rückgängig.


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
2. **⚙ Takt → ⬚ Bereich** tippen (das Fenster schließt sich).
3. In der Notenansicht auf den letzten Takt des Bereichs tippen. Angezeigt wird z. B. „Takte 5–8 markiert (4)“.

Jetzt wirken **Duplizieren**, **Leeren**, **Löschen**, **Kopieren** und **Ausschneiden** (unter ⚙ Takt) auf den ganzen Bereich.

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
| **\|: Anfang** | Wiederholung beginnt mit diesem Takt (Doppelstrich mit Punkten) |
| **:\| Ende (2×/3×/4×)** | Wiederholung endet hier, Anzahl der Durchgänge |
| **Klammer: 1./2./3.** | Takt gehört zur 1., 2. oder 3. Klammer (Volta) |

**Beispiel:** `|: A B |1. C :|2. D` einrichten

1. Takt A: **|: Anfang**
2. Takt C: **1. Klammer** und **:| Ende (2×)**
3. Takt D: **2. Klammer**

Gespielt wird A B C A B D. Ohne |: Anfang springt die Wiederholung zum Stückanfang bzw. hinter das vorige Wiederholungsende.

### 3.5 Tempowechsel im Stück

Unter **⚙ Takt → Tempo ab hier** ein neues Tempo eintragen, z. B. 140. Ab diesem Takt gilt das neue Tempo; im Notenbild steht „♩ = 140“.

- **sofort:** Das Tempo springt am Taktanfang.
- **allmählich über 1/2/4/8 Takte:** Das Tempo steigt bzw. fällt in den Takten davor gleichmäßig an. Im Notenbild steht „accel.“ (schneller) oder „rit.“ (langsamer) mit gestrichelter Linie.

Feld leeren entfernt den Tempowechsel. Tempoangaben hängen am Grundtempo: Wird das Stück über − / + oder den Tempo-Trainer insgesamt langsamer oder schneller, verändern sich alle Tempowechsel im gleichen Verhältnis. Während der Wiedergabe zeigt die Statuszeile das aktuelle Tempo.

### 3.6 Taktnummer markieren und Beschriftungen

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
| **Zahl** | Grundtempo direkt eingeben (30–300, Viertel pro Minute); wirkt auch während der Wiedergabe sofort |
| **Tap** | Mehrmals im gewünschten Tempo tippen |
| **Klick** | Metronom an/aus |
| **Drums** | Drum-Sounds an/aus (aus = nur Metronom, zum Mitspielen) |

Während der Wiedergabe läuft eine Markierung durch die Noten. Die Statuszeile zeigt Takt und Durchlauf.

**Ab einem bestimmten Takt abspielen**

- **▶ ab hier** im Editor (neben der Taktnummer) spielt ab dem gewählten Takt bis zum Ende – Wiederholungen ab dieser Stelle werden berücksichtigt.
- Am Rechner: **Doppelklick** auf einen Takt in der Notenansicht.
- Dauerhaft: unter **⚙ → Abspielen** **Ab ausgewähltem Takt** wählen; dann startet auch ▶ unten immer beim gewählten Takt.

### 4.2 Üben & Einstellungen

Über **⚙** in der Kopfzeile.


| Einstellung | Wirkung |
|---|---|
| **Abspielen** | *Ganzer Song* (mit Wiederholungen), *Ab ausgewähltem Takt*, *Nur aktueller Takt* oder *Takt-Bereich* von–bis |
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
2. **⚙ → E-Drum → Verbinden**, Zugriff erlauben. Der Gerätename erscheint, der Punkt blinkt bei jedem Schlag.
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

**Voreinstellung**

Damit Urheber, Arrangement und Copyright nicht bei jedem Song neu eingetippt werden müssen:

1. Im Export-Dialog die Felder und das Layout einmal so ausfüllen, wie sie meistens sein sollen.
2. **★ Als Voreinstellung speichern** tippen.

Gespeichert werden Musik / Urheber, Arrangement, Copyright-Zeile sowie alle Layout-Optionen (Notengröße, Takte pro Zeile, Taktnummern, Mehrtaktpausen, Legende, Sticking). Titel, Untertitel, Stilangabe und Spielhinweise bleiben songspezifisch.

- **Neue Songs** übernehmen die Voreinstellung automatisch.
- **Bestehende Songs:** Im Export-Dialog **Voreinstellung einsetzen** tippen. Die gespeicherten Angaben überschreiben dann die Felder des Songs.
- **{Jahr}** in der Copyright-Zeile wird beim Einsetzen durch das aktuelle Jahr ersetzt, z. B. `© {Jahr} Max Mustermann` → `© 2026 Max Mustermann`.
- Die Voreinstellung wird über den Server mit allen Geräten abgeglichen.

### 7.2 MIDI (.mid)

Drumspur auf Kanal 10 (General MIDI) mit Tempo, Taktwechseln, ausgeschriebenen Wiederholungen und Faulenzern, Swing, Flams, Drags, Wirbeln und Dynamik (als Anschlagstärke). Für DAWs (GarageBand, Cubase, Logic …) oder zum Abspielen über ein E-Drum-Modul.

### 7.3 MusicXML

Notenbild zum Weiterbearbeiten in MuseScore, Sibelius, Dorico u. a. Enthalten sind Taktarten, Tuplets (3, 5, 6, 7), Akzente, Ghost-Notes, Vorschläge, Wirbel (Snare als z, Becken mit drei Strichen), Dynamik und Gabeln, offene Hi-Hat, Sticking (als Text unter den Noten), Wiederholungen mit Klammern, markierte Taktnummern und Beschriftungen. Faulenzer werden ausgeschrieben.

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

**Tastatur (Rechner):** siehe [Abschnitt 2.6](#26-schreiben-mit-der-tastatur-rechner) oder **⌨** in der App.

**Typische Abläufe**

| Ziel | Schritte |
|---|---|
| Nur den Refrain anhören | Ersten Refrain-Takt wählen → **▶ ab hier** |
| Neuen Groove schreiben | 📁 Songs → ＋ Song → Leeres Blatt → Raster wählen → in die Spuren tippen oder mit der Tastatur schreiben |
| Fill aus 16tel-Triolen | Takt wählen → Raster pro Schlag auf Tri bzw. Sext → Snare/Toms setzen → ✋ → Wechselschlag |
| Chorus wiederholen | Erster Takt ⚙ Takt → \|: Anfang → letzter Takt :\| Ende (2×) |
| Groove 7× wiederholen | Nächster Takt → ⚙ Takt → Faulenzer 1 Takt → Kopieren → mehrmals Einfügen |
| Medley-Teil markieren | Takt wählen → ⚙ Takt → ▢ Nr. markieren → Beschriftung „Song 2“ |
| Schneller werden zum Refrain | Refrain-Takt wählen → ⚙ Takt → Tempo ab hier 140 → allmählich über 2 Takte |
| Groove variieren | ＋ (neuer Takt) → ⧉ Takt wie vorher → einzelne Felder antippen |
| Akzent oder Ghost setzen | Feld mehrfach antippen (Schlag → Akzent → Ghost → leer) |
| Flam, Wirbel, lange Note an einer Stelle | Feld gedrückt halten → Menü |
| Crescendo-Beckenwirbel | Crash gedrückt halten → z Wirbel + Lang; Dynamik-Spur: pp, dann < (siehe 2.8) |
| Kompaktes Notenblatt | ⇩ Export → Notengröße 60 %, 4 Takte pro Zeile, Mehrtaktpausen an → PDF erstellen |

---

*Drum-Aufnahmen: [Versilian Community Sample Library](https://github.com/sgossner/VCSL), CC0 (gemeinfrei).*
