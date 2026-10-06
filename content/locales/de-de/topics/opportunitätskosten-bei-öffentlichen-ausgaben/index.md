# Opportunitätskosten bei öffentlichen Ausgaben

Opportunitätskosten sind der Wert der besten aufgegebenen Alternative, wenn eine öffentliche Stelle
Geld, Personalzeit oder politisches Kapital für eine Option statt für eine andere einsetzt. In einer
Behörde mit festem Budget ist jedes Pfund, das für ein Programm ausgegeben wird, ein Pfund, das
nicht für das nächstbeste Programm ausgegeben werden kann — die wahren Kosten einer Entscheidung
sind nicht das, was sie ausgibt, sondern das, was sie verdrängt.

## Warum das wichtig ist

Öffentliche Budgets sind innerhalb einer Ausgabenüberprüfungsperiode kassenwirksam begrenzt, sodass
eine Regierungsbehörde — anders als ein wachsendes privates Unternehmen — nicht einfach "mehr Geld
finden" kann für eine gute Idee; sie zu finanzieren bedeutet, etwas anderes zu definanzieren. HM
Treasurys Green Book behandelt dies als grundlegend: Jede Bewertung muss eine Intervention sowohl
gegen eine "Minimum tun"-Basislinie *als auch* gegen realistische alternative Verwendungen derselben
Ressource vergleichen, genau weil die eigentliche Frage, die ein Ausgabenteam des Treasury stellt,
nie lautet "ist das gut?", sondern "ist das besser als das, was dieses Geld sonst kaufen könnte?".
Das Kernprinzip der Bewertung im Green Book — dass öffentliche Mittel der Intervention mit dem
höchsten sozialen Nettonutzen pro Pfund zufließen sollten — ist Opportunitätskosten als Politik
formuliert.

Das ist leicht gesagt und schwer anzuwenden, weil die "nächstbeste Alternative" in einem einzelnen
Business Case selten sichtbar ist. Ein 2-Millionen-£-Förderprogramm für Jugendbeschäftigung wird im
Business Case gegen das Nichtstun verglichen — aber der ehrliche Vergleichsmaßstab ist die
nächstbeste Jugendbeschäftigungsintervention, oder tatsächlich die nächstbeste Verwendung von 2
Millionen £ irgendwo im Portfolio, einschließlich Ausgaben außerhalb der Beschäftigungsförderung.
Das Magenta Book (HM Treasury, 2020) warnt ausdrücklich davor, dass Evaluationen, die "mit
Intervention" mit "ohne Intervention" vergleichen, die Messlatte unterschätzen, die eine
Intervention überspringen muss, weil "ohne diese Intervention" nicht dasselbe ist wie "mit gar
nichts" — freigesetztes Geld finanziert etwas anderes.

## Die Berechnung

```
Opportunitätskosten der Wahl von A = Wert der besten aufgegebenen Alternative B

Öffentlicher Nettowert von A = Wert(A) − Wert(B), nicht Wert(A) − 0
```

Es gibt keine universelle Formel, weil die aufgegebene Alternative kontextspezifisch ist, aber die
Disziplin lässt sich verallgemeinern: die realistische nächstbeste Verwendung derselben
Budgetlinie identifizieren (nicht ein idealisiertes "nichts tun"), sie auf derselben Grundlage
bewerten (soweit möglich monetarisiert, gemäß [sozialer Kosten-Nutzen-Analyse](../soziale-kosten-nutzen-analyse/))
und subtrahieren.

## Beispielrechnung

**Budgetlinie einer Behörde**: Ein Fonds für digitale Transformation in Höhe von 5 Millionen £ kann
in diesem Haushaltsjahr genau einen von zwei Vorschlägen finanzieren.

- *Option A*: eine neue Fallmanagement-Plattform, monetarisierter Nutzen 7,2 Millionen £ über 5
  Jahre (Effizienzeinsparungen plus schnellere Fallbearbeitung).
- *Option B*: ein Identitätsprüfungsdienst, der von drei Behörden gemeinsam genutzt wird,
  monetarisierter Nutzen 6,4 Millionen £ über 5 Jahre.

Ein naiver Business Case für A vergleicht 7,2 Millionen £ Nutzen mit 5 Millionen £ Kosten und
berichtet ein Nutzen-Kosten-Verhältnis von 1,44:1 — scheinbar stark. Aber weil A und B um dieselben
5 Millionen £ konkurrieren, sind die Opportunitätskosten der Wahl von A der entgangene Nutzen von B
in Höhe von 6,4 Millionen £. Der *Netto*-Fall für A gegenüber der realistischen Alternative beträgt
nur 7,2 Mio. £ − 6,4 Mio. £ = 0,8 Millionen £, nicht die vollen 7,2 Millionen £ der Schlagzeile.
Böte eine dritte Option C einen Nutzen von 7,5 Millionen £ für dieselben 5 Millionen £, würde die
Finanzierung von A statt C 0,3 Millionen £ öffentlichen Wert vernichten, obwohl der Business Case
von A für sich genommen voll gerechtfertigt aussieht.

**Personalzeit einer Kommunalverwaltung**: Das dreiköpfige Datenteam einer Kommune kann entweder
ein Dashboard für die Warteliste für Wohnungen bauen (geschätzte Einsparung von 400
Sachbearbeiterstunden/Jahr, bewertet mit 28 £/Stunde = 11.200 £/Jahr) oder ein Triage-Werkzeug
gegen Leistungsmissbrauch (geschätzt verhindert es 85.000 £/Jahr an fehlerhaften Zahlungen). Der
Bau des Dashboards hat Opportunitätskosten von 85.000 £/Jahr entgangenem Nutzen, nicht nur die
Gehaltskosten des Datenteams — die wahren Kosten des "kostenlosen" internen Baus sind der weit
größere Nutzen, den das Team andernorts hätte erzielen können.

## Bezug zur Softwareentwicklung

Technische Kapazität innerhalb einer öffentlichen Stelle ist selbst ein begrenztes Budget —
Sprint-Kapazität statt Pfund —, und dieselbe Disziplin gilt unmittelbar:

- Benennen Sie stets den Vergleichsmaßstab: Der Business Case eines Features sollte angeben, was
  sonst mit denselben Team-Wochen geliefert werden könnte, nicht nur seinen eigenen Ertrag.
- Behandeln Sie "wir haben freie technische Kapazität" als Ausgangspunkt einer
  Opportunitätskosten-Analyse, nicht als Endpunkt — freie Kapazität hat weiterhin eine beste
  Alternativverwendung, selbst wenn diese im Abbau technischer Schulden besteht (siehe
  [technische Schulden als Erosion öffentlichen Werts](../technische-schulden-als-erosion-öffentlichen-werts/)).
- Verknüpfen Sie dies direkt mit [Wirtschaftlichkeit](../wirtschaftlichkeit/): Der Sparsamkeitstest
  von VFM ist ohne einen ehrlichen Opportunitätskosten-Vergleichsmaßstab bedeutungslos, sowie mit
  [Verzögerungskosten bei öffentlichen Programmen](../verzögerungskosten-bei-öffentlichen-programmen/), die die
  Zeitdimension derselben Logik der aufgegebenen Alternative bepreisen.

## Fallstricke

- **Vergleich mit "nichts tun" statt mit der nächstbesten Alternative.** Das Green Book verlangt
  eine "Minimum tun"-Basislinie genau deshalb, weil die wahren Opportunitätskosten selten null
  sind; ein Business Case, der nur die "nichts tun"-Messlatte überspringt, hat nicht gezeigt, dass
  er die realistische Alternative schlägt.
- **Behördenübergreifende Konkurrenz um denselben Topf ignorieren.** Budgetlinien, die innerhalb
  einer Direktion abgeschottet erscheinen, konkurrieren oft auf einer höheren Ebene (eine
  Ausgabenüberprüfung, ein Investitionsprogramm), auf der die wahren Opportunitätskosten realisiert
  werden.
- **Annehmen, freigesetzte Personalzeit habe keinen weiteren Wert.** "Eingesparte" Zeit schafft nur
  dann Wert, wenn sie für etwas Wertvolles umgewidmet wird; existiert die Alternativverwendung
  nicht, ist die Einsparung nur nominell.

## Quellen

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — the canonical empirical demonstration of opportunity cost as
  a binding constraint in a fixed public budget. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
