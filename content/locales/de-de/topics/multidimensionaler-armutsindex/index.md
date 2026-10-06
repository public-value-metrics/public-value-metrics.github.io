# Multidimensionaler Armutsindex (MPI)

Der MPI misst Armut als sich überlappende Entbehrungen, die eine Person gleichzeitig erlebt — in
Gesundheit, Bildung und Lebensstandard —, statt als allein unter eine Grenze fallendes Einkommen. Er
wurde von der Oxford Poverty and Human Development Initiative (OPHI) mit Sabina Alkire und James
Foster entwickelt und wird seit 2010 gemeinsam mit dem UNDP in jedem Human Development Report neben
dem [Index der menschlichen Entwicklung](../index-der-menschlichen-entwicklung/) veröffentlicht.

## Warum das wichtig ist

Einkommensarmutsgrenzen übersehen Menschen, die genug Bargeldeinkommen haben, aber kein sauberes
Wasser, keine Schulbildung haben oder den Tod eines Kindes überleben — und sie übersehen, dass sich
Entbehrungen häufen: Ein Haushalt ohne Elektrizität hat überproportional wahrscheinlich auch keine
Sanitäranlagen und ein unterernährtes Kind. Die Alkire-Foster-Methode, auf der der MPI aufbaut,
zählt die Entbehrungen jeder Person über zehn Indikatoren, gruppiert in drei gleich gewichtete
Dimensionen — Gesundheit, Bildung, Lebensstandard —, und stuft jemanden nur dann als "MPI-arm" ein,
wenn der gewichtete Entbehrungswert eine feste Schwelle überschreitet, und erfasst so Überlappung,
die eine Reihe separater Einzelindikator-Statistiken nicht erfassen kann. OPHI veröffentlicht die
vollständige Methodik und Länderdaten unter <https://ophi.org.uk/multidimensional-poverty-index/>;
der globale MPI, den es gemeinsam mit dem UNDP pflegt, deckt inzwischen über 110 Länder ab. Für
Software, die für Armutsbekämpfungsprogramme gebaut wird — Bargeldtransfers, Sozialpflege-Triage,
Hilfszielsetzung —, ist das Indikatorenset des MPI oft das Nächste an einem standardisierten,
bereits über Dutzende nationaler Statistikbehörden hinweg validierten Entbehrungsschema.

## Die Berechnung

```
10 Indikatoren, 3 Dimensionen, jede Dimension mit 1/3 gewichtet:

Gesundheit (1/3):          Ernährung (1/6), Kindersterblichkeit (1/6)
Bildung (1/3):              Schuljahre (1/6), Schulbesuch (1/6)
Lebensstandard (1/3):       Kochbrennstoff, sanitäre Einrichtungen,
                             Trinkwasser, Elektrizität, Wohnen,
                             Vermögenswerte (je 1/18)

Entbehrungswert (c) = Summe der Gewichte der Indikatoren, bei denen
                       eine Person entbehrt

Person ist "MPI-arm", wenn c ≥ 1/3 (die Armutsgrenze, k = 33 %)

H (Kopfzahlrate) = Anzahl der MPI-Armen / Gesamtbevölkerung
A (Intensität)    = durchschnittlicher Entbehrungswert nur unter den
                     MPI-Armen

MPI = H × A
```

Weil der MPI den *Anteil* der Armen mit *wie* arm sie sind multipliziert, können zwei Regionen mit
derselben Kopfzahlrate sehr unterschiedliche MPI-Werte haben, wenn Entbehrungen in einer schwerer
sind — dieselbe Logik "keine Substitution zwischen Dimensionen" hinter dem geometrischen Mittel des
HDI.

## Beispielrechnung

**Nationale Erhebung von 1.000 Menschen**: 350 werden als multidimensional arm identifiziert
(Entbehrungswert ≥ 33 %). Unter nur diesen 350 armen Personen beträgt der durchschnittliche
Entbehrungswert 45 %.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Vergleich zweier Bezirke mit gleicher Kopfzahl**: Bezirk A hat H = 0,30 und A = 0,40 (viele
Arme, mäßig entbehrend); Bezirk B hat H = 0,30 und A = 0,60 (gleiche Anzahl Arme, aber schwerer
entbehrend — ohne Elektrizität *und* sanitäre Einrichtungen *und* Schulbesuch gleichzeitig).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Gleiche Kopfzahlrate, 50 % höherer MPI in Bezirk B — ein Zielsystem, das allein auf
Kopfzahlarmut basiert, würde die beiden Bezirke identisch einstufen und übersehen, dass Bezirk B
tiefere Intervention braucht.

## Bezug zur Softwareentwicklung

- Fallmanagement- und Anspruchsberechtigungssysteme für Sozialprogramme speichern oft bereits
  mehrere der zehn Indikatoren (Wohnen, Schulbesuch, Gesundheitsmarker) in getrennten Silos; die
  Alkire-Foster-Zählmethode ist ein fertiges Schema, um sie zu einem Entbehrungswert zu
  kombinieren, statt ein maßgeschneidertes Bewertungsmodell von Grund auf zu bauen.
- Die Aufteilung Kopfzahl/Intensität (H × A) ist ein allgemein nützliches Muster für jedes
  Dashboard, das "wie viele sind betroffen" neben "wie schwer" berichtet — beides in eine Zahl zu
  verdichten, wie rohe Prävalenzstatistiken es tun, verbirgt genau den Fall, der die meisten
  Ressourcen braucht.
- MPI-artige Indikator-Dashboards passen natürlich zu [Kosten-pro-Begünstigtem](../kosten-pro-begünstigtem/)-Berichterstattung
  für Armutsbekämpfungsprogramme: Kosten pro Punkt MPI-Reduktion sind eine vertretbare Einheit zum
  Vergleich sehr unterschiedlicher Interventionen (Bargeldtransfer vs. sanitäre Infrastruktur).

## Fallstricke

- **Die zehn Indikatoren als universell behandeln** — die globalen MPI-Indikatoren von OPHI sind für
  länderübergreifende Vergleichbarkeit kalibriert; nationale MPIs (viele Länder, einschließlich
  mehrerer in Südasien und Afrika, veröffentlichen eigene) passen Indikatoren und Gewichte an den
  lokalen Kontext an, und beide sind nicht direkt vergleichbar.
- **Nur H berichten** — die Kopfzahlrate ignoriert Intensität vollständig; berichten oder berechnen
  Sie stets A daneben, oder den MPI selbst.
- **Annehmen, MPI-arm und einkommensarm seien dieselbe Population** — OPHIs eigene Länderberichte
  zeigen typischerweise nur teilweise Überlappung zwischen beiden; ein Programm, das nur
  Einkommensarme anvisiert, wird systematisch einen bedeutsamen Anteil der multidimensional Armen
  verfehlen.

## Quellen

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
