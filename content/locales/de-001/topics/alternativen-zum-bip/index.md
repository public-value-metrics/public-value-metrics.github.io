# Alternativen zum BIP

Alternativen zum BIP sind Kennzahlen, die entwickelt wurden, um zu erfassen, was das
Bruttoinlandsprodukt strukturell ignoriert: unbezahlte Pflegearbeit, Umweltabbau,
Einkommensverteilung und ob Wachstum tatsächlich Leben verbessert. Die bekanntesten sind der Genuine
Progress Indicator (GPI) und der Gross-National-Happiness-Index (GNH) Bhutans; das Argument, sie
ernst zu nehmen, wurde am einflussreichsten von der Stiglitz-Sen-Fitoussi-Kommission 2009 vorgebracht.
Für Ingenieurinnen und Ingenieure, die Regierungsdashboards oder KPI-Systeme bauen, ist "welche Zahl
als Fortschritt zählt" eine Designentscheidung mit realen Konsequenzen dafür, was finanziert wird.

## Warum das wichtig ist

Simon Kuznets, der in den 1930er Jahren die US-Volkswirtschaftliche Gesamtrechnung aufbaute, warnte
den Kongress 1934, "das Wohlergehen einer Nation kann kaum aus einer Messung des
Volkseinkommens abgeleitet werden" — ein Vorbehalt, den die Kennzahl fast sofort überwuchs. Das
BIP zählt die Aufräumarbeiten einer Ölkatastrophe als Wachstum und die unbezahlte
Kinderbetreuung eines Elternteils als nichts; es unterscheidet nicht zwischen Ausgaben, die
dauerhaftes Wohlergehen aufbauen, und Ausgaben, die lediglich bereits geschehenen Schaden
ausgleichen. Die vom französischen Präsidenten Nicolas Sarkozy einberufene und von Joseph Stiglitz,
Amartya Sen und Jean-Paul Fitoussi geleitete Stiglitz-Sen-Fitoussi-Kommission berichtete 2009, dass
statistische Systeme den Schwerpunkt "von der Messung wirtschaftlicher Produktion zur Messung des
Wohlergehens der Menschen" verschieben sollten, und dass Nachhaltigkeit getrennt vom aktuellen
Wohlergehen verfolgt werden sollte, statt in eine Zahl gefaltet zu werden. Alternativen zum BIP
operationalisieren diese Empfehlung. Der GPI, entwickelt vom Thinktank Redefining Progress in den
1990er Jahren und aufbauend auf William Nordhaus' und James Tobins Measure of Economic Welfare von
1972, geht vom persönlichen Konsum aus (wie das BIP) und addiert dann nichtmarktbezogene Nutzen, die
das BIP auslässt (Haushaltsarbeit, Ehrenamt), während er defensive Kosten und Abbaukosten (Kriminalität,
Umweltverschmutzung, Pendeln, Ressourcenverbrauch) abzieht, die das BIP fälschlich als positiv zählt.
Der GNH-Index Bhutans, verwaltet vom GNH Centre Bhutan (<https://www.gnhcentre.bt/>), geht noch
weiter und ersetzt Wachstum als das erklärte verfassungsmäßige Ziel des Landes: Er aggregiert 33
Indikatoren über 9 Bereiche — psychisches Wohlergehen, Gesundheit, Bildung, Zeitnutzung, kulturelle
Vielfalt, Regierungsführung, Gemeinschaftsvitalität, ökologische Vielfalt und Lebensstandard — zu
einem einzigen suffizienzbasierten Wert, der direkt zur Prüfung staatlicher Politikvorschläge
verwendet wird.

## Die Berechnung

```
GPI = persönliche Konsumausgaben
      + nichtmarktbezogene Nutzen (Haushaltsarbeit, Ehrenamt, höhere
        Bildung)
      − defensive und soziale Kosten (Kriminalität, Umweltverschmutzung,
        Pendeln, Familienzerfall)
      − Abbau von Natur- und Sozialkapital (Ressourcenverbrauch,
        Ackerlandverlust)

GNH-Suffizienzwert, pro Bereich:
  eine Person ist in einem Bereich "ausreichend versorgt", sobald sie
  dessen Schwelle bei jedem Indikator überschreitet
  Glücksindex = (% der Bevölkerung ausreichend versorgt in ≥ 6 von 9
                Bereichen) + (gewichteter Durchschnittsfehlbetrag der
                "noch nicht glücklichen" Minderheit)
```

## Beispielrechnung

**Region, GPI**: Der persönliche Konsum beträgt 50 Mrd. $. Addieren Sie einen geschätzten Wert für
Haushalts- und Ehrenamtsarbeit von 12 Mrd. $ (Ersatzkosten-Lohnsätze — siehe [Wert der Zeit von
Ehrenamtlichen](../wert-der-zeit-von-ehrenamtlichen/)). Subtrahieren Sie geschätzte Jahreskosten für
Pendelstau (3 Mrd. $), Kriminalität (4 Mrd. $) und langfristigen Ressourcenabbau (6 Mrd. $):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 (Mrd. $)
```

Wenn das BIP in diesem Jahr von 50 Mrd. $ auf 55 Mrd. $ wuchs (+10 %), aber defensive Kosten und
Abbaukosten schneller wuchsen als der Konsum, kann der GPI fallen, selbst während das BIP steigt —
die "Schwellenhypothese", auf die sich GPI-Forschende für Hochlohnwirtschaften seit etwa den
1970er Jahren berufen, als das Wachstum weiter kletterte, während der GPI stagnierte.

**Bürgerin, GNH**: Eine Befragte überschreitet die Suffizienzschwelle in 7 von 9 Bereichen
(Gesundheit, Bildung, Lebensstandard, Gemeinschaftsvitalität, kulturelle Vielfalt, ökologische
Vielfalt, Zeitnutzung), bleibt aber bei psychischem Wohlergehen und Regierungsführung darunter. Da
7 ≥ 6, wird sie in der Kopfzahl als "glücklich" gezählt; der Index verfolgt separat die Tiefe ihrer
beiden Fehlbeträge, damit ein knappes Bestehen nicht von einem komfortablen ununterscheidbar ist.

## Bezug zur Softwareentwicklung

- Ein KPI-Dashboard, das nur nach Durchsatz oder Ausgaben modelliert ist (das BIP-Muster), wird
  systematisch den Schaden übersehen, der bei der Erzeugung dieses Durchsatzes entsteht —
  Support-Ticket-Volumen als "Engagement" statt als "Nutzerfrust" zu behandeln, ist die
  Software-Lieferungs-Version davon, eine Ölkatastrophe als Wachstum zu zählen.
- GPI-artige Bilanzierung ist ein nützliches Prüfmuster für jede [KPI](../kpis-im-öffentlichen-sektor/)-Suite
  im öffentlichen Sektor: Fragen Sie für jede Schlagzeilen-Output-Kennzahl, welche defensiven
  Kosten sie still verursacht (Nacharbeit, Vorfallreaktion, Ausbrennen), und rechnen Sie diese
  gegen, wie der GPI defensive Ausgaben vom Konsum abzieht.
- Die Bereichs-Suffizienz-Methode des GNH — bestehen/nicht bestehen pro Dimension, dann
  aggregieren — ist strukturell dieselbe Technik wie [Multikriterielle Entscheidungsanalyse](../multikriterielle-entscheidungsanalyse/)
  und lohnt sich zur Wiederverwendung, wo immer ein einzelner Skalarwert eine kritisch versagende
  Dimension verbergen würde.

## Fallstricke

- **Den GPI als präzise Volkswirtschaftliche Gesamtrechnung behandeln** — anders als das BIP hat
  der GPI keine einzige standardisierte Methodik; verschiedene Studien gewichten Pendelkosten,
  Ehrenamtszeit oder Ressourcenabbau unterschiedlich, sodass studienübergreifende GPI-Vergleiche
  weit unzuverlässiger sind als länderübergreifende BIP-Vergleiche.
- **GNH unangepasst in eine andere Politikkultur importieren** — seine Bereichsgewichte und
  Suffizienzschwellen wurden durch bhutanische Konsultation festgelegt; die Zahl ohne den zugrunde
  liegenden Konsultationsprozess zu kopieren, erzeugt eine hohle Kennzahl, der niemand vertraut.
- **Annehmen, eine BIP-Alternative ersetze Kosten-Nutzen-Bewertung** — dies sind diagnostische,
  gesamtwirtschaftliche Indikatoren, keine Entscheidungswerkzeuge für ein einzelnes Programm;
  verwenden Sie dafür stattdessen [soziale Kosten-Nutzen-Analyse](../soziale-kosten-nutzen-analyse/).

## Quellen

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
