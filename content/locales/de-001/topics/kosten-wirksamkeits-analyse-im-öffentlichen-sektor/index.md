# Kosten-Wirksamkeits-Analyse im öffentlichen Sektor

Die Kosten-Wirksamkeits-Analyse (CEA) vergleicht die Kosten alternativer Wege, das *gleiche*
Ergebnis zu erreichen, ausgedrückt in natürlichen Einheiten — Kosten pro untergebrachtem
Obdachlosem, Kosten pro Schüler, der auf den erwarteten Standard gebracht wird, Kosten pro Tonne
vermiedenem CO2 —, ohne das Ergebnis selbst in Geld umzurechnen.

## Warum das wichtig ist

Das Green Book behandelt CEA als Rückfallmethode, wenn die Anforderung der
[sozialen Kosten-Nutzen-Analyse](../soziale-kosten-nutzen-analyse/), jeden Nutzen zu
monetarisieren, nicht nur schwierig, sondern unehrlich wird — wo ein glaubwürdiger Preis auf das
Ergebnis Annahmen erfordern würde, die niemand wirklich vertritt
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Kapitel 5, zur Optionsbewertung bei nicht ohne Weiteres monetarisierbaren Ergebnissen). CEA ist die
Methode, die am direktesten aus der Gesundheitsökonomie übernommen wurde — sie ist strukturell
identisch damit, wie NICE Behandlungen mittels Kosten pro qualitätsbereinigtem Lebensjahr
vergleicht —, aber angewandt auf nicht-gesundheitliche öffentliche Programme: Bildungsinterventionen
pro Schüler-Ergebnispunkt, Wohnungsprogramme pro vor Obdachlosigkeit bewahrtem Haushalt,
Beschäftigungsprogramme pro dauerhaftem Beschäftigungsergebnis.

Der Grund, warum CEA sich ihren Platz neben SCBA verdient, statt von ihr aufgesogen zu werden, ist,
dass das Erzwingen eines Geldwerts für manche Ergebnisse eine Zahl erzeugt, die präzise genug
aussieht, um autoritativ zu wirken, und umstritten genug ist, um in einer öffentlichen Debatte
wertlos zu sein — einem Preis auf "ein Kind, das auf erwartetem Niveau liest" zu setzen, lädt genau
zu der Art von Anfechtung ein, die einen Business Case vor einem Ausschuss entgleisen lässt. CEA
umgeht diese Auseinandersetzung, indem sie sie verweigert: Sie ordnet Optionen nach Kosten pro
Einheit des *Ergebnisses selbst*, und überlässt das getrennte politische Urteil, ob das Ergebnis
überhaupt verfolgenswert ist, dem strategischen Fall.

## Die Berechnung

```
Kosten-Wirksamkeits-Verhältnis (durchschnittlich) = Gesamtkosten / erreichte
                                                       Ergebniseinheiten

Inkrementelles Kosten-Wirksamkeits-Verhältnis (ICER), Option A vs. Option B:
ICER = (Kosten_A − Kosten_B) / (Ergebnis_A − Ergebnis_B)

Vorgehen:
1. Ergebniseinheit und Messmethode über alle verglichenen Optionen hinweg
   festlegen.
2. Jede Option auf derselben Grundlage kalkulieren (siehe
   ../green-book-appraisal/, finanzieller Fall) über denselben Zeithorizont.
3. Dominierte Optionen verwerfen: jede Option, die pro Einheit mehr kostet
   als eine günstigere Alternative mit gleichem oder besserem Ergebnis,
   wird verworfen.
4. Verbleibende Optionen nach inkrementellem, nicht durchschnittlichem,
   Kosten-Wirksamkeits-Verhältnis ordnen.
```

CEA kann für sich genommen nicht sagen, ob ein Programm überhaupt förderwürdig ist — nur, welcher
von mehreren Ansätzen für dasselbe Ziel pro Einheit am günstigsten ist. Ob das Ziel selbst die
Ausgabe wert ist, zu entscheiden, erfordert entweder die Rückkehr zu SCBA (falls eine glaubwürdige
Bewertung existiert) oder ein politisches/strategisches Urteil außerhalb der Berechnung. Wo sich
Ergebnisse wirklich nicht auf eine Einheit reduzieren lassen — weil ein Programm mehrere Ergebnisse
erzeugt, die auf unterschiedliche Weise zählen — verwenden Sie stattdessen
[Multikriterielle Entscheidungsanalyse](../multikriterielle-entscheidungsanalyse/).

## Beispielrechnung

**Kommunalverwaltung**: Eine Kommune vergleicht drei Ansätze zur Reduzierung von Obdachlosigkeit
auf der Straße, jeweils kalkuliert über ein Jahr gegen das Ergebnis "Personen, die für 6+ Monate in
dauerhafte Unterkunft gebracht wurden":

```
Option                            Kosten     Erreichte Ergebnisse   Durchschn. CER
Housing First (intensiv)          900.000 £  60                      15.000 £/Ergebnis
Wohnheim + Auszugsbegleitung       600.000 £  50                      12.000 £/Ergebnis
Aufsuchende Arbeit + privater Markt 350.000 £ 20                      17.500 £/Ergebnis

ICER, Wohnheim vs. Aufsuchende Arbeit: (600k−350k)/(50−20) = 8.333 £
pro zusätzlichem Ergebnis
ICER, Housing First vs. Wohnheim: (900k−600k)/(60−50) = 30.000 £
pro zusätzlichem Ergebnis
```

Die aufsuchende Arbeit wird beim Durchschnittspreis vom Wohnheim dominiert, aber der *inkrementelle*
Schritt von aufsuchender Arbeit zu Wohnheim kostet nur 8.333 £ pro zusätzlich untergebrachter
Person — günstig im Vergleich zum Housing-First-Schritt, der 30.000 £ für jede zusätzliche Person
über das hinaus kostet, was das Wohnheim erreicht. Eine budgetbeschränkte Behörde, die
ausweiten möchte, sollte die Erweiterung des Wohnheims vor Housing First bevorzugen, auch wenn
Housing First bei seinem eigenen Durchschnittsverhältnis besser aussieht.

**Nationale Regierung**: Ein Programm zum Aufholen von Lesekompetenz wird über drei
Umsetzungsmodelle anhand von "Kosten pro Schüler, der den altersgerechten Lesestandard erreicht"
verglichen: Einzelnachhilfe (1.800 £/Schüler), Kleingruppen-Nachhilfe (700 £/Schüler) und
rein digitale Intervention (150 £/Schüler, aber nur 40 % der Ergebnisrate der
Kleingruppen-Nachhilfe pro eingeschriebenem Schüler, nach Anpassung für nachlassendes
Engagement). Nach Anpassung für tatsächlichen Abschluss kostet die rein digitale Variante 375 £
pro Schüler, der den Standard erreicht — immer noch am günstigsten, aber die CEA kann nicht sagen,
ob die kleinere absolute Zahl der durch die rein digitale Variante geholfenen Schüler, bei
gleichem Budget wie Kleingruppen-Nachhilfe geliefert, ein akzeptabler Kompromiss gegenüber dem
Erreichen weniger Schüler mit größerer Tiefe ist; das ist ein Verteilungsurteil, das CEA an
Entscheidungsträger zurückgibt.

## Bezug zur Softwareentwicklung

CEA ist der richtige Rahmen, wann immer technische Teams Umsetzungsansätze für *dasselbe*
Serviceergebnis bewerten — Kosten pro erfolgreich verifizierter Identität über drei
Identitätsprüfungsanbieter hinweg, Kosten pro korrekt triagiertem Fall über zwei
Fallbearbeitungs-Automatisierungsdesigns hinweg, Kosten pro behobenem Barrierefreiheitsdefekt über
interne versus vertraglich vergebene Behebung hinweg. Die unmittelbar übernommene Disziplin: die
Ergebniseinheit definieren, bevor Kosten verglichen werden (nicht "geschlossene Tickets" — ein
Output —, sondern "tatsächlich gelöstes Nutzerbedürfnis"), und stets das inkrementelle Verhältnis
zwischen dem laufenden System und einem vorgeschlagenen Ersatz berechnen, nicht die
Durchschnittskosten jedes Systems isoliert. Siehe [Ergebnisse vs. Leistungen](../ergebnisse-vs-leistungen/)
und [Kosten pro Ergebnis](../kosten-pro-ergebnis/).

## Fallstricke

- **Durchschnittliche statt inkrementelle Verhältnisse vergleichen, wenn über eine Erweiterung
  entschieden wird.** Wie das Beispiel der Obdachlosigkeit zeigt, ist die Option mit dem besten
  Durchschnittsverhältnis nicht immer die günstigste nächste Ergebniseinheit, die man kaufen kann.
- **Eine Ergebniseinheit wählen, die eigentlich ein Output ist.** "Erfolgte Überweisungen" oder
  "durchgeführte Sitzungen" messen Aktivität, nicht das Ergebnis, für das das Programm existiert;
  CEA auf Outputs erzeugt eine selbstsicher aussehende Zahl, die die falsche Frage beantwortet.
- **Über wirklich unterschiedliche Ergebnisse hinweg vergleichen.** CEA ist nur gültig, wenn jede
  Option dasselbe, gleich gemessene Ergebnis anstrebt; "Kosten pro untergebrachtem Obdachlosen" mit
  "Kosten pro Pflegekind mit stabiler Wohnsituation" zu vergleichen, braucht ein generisches
  Ergebnismaß oder [Multikriterielle Entscheidungsanalyse](../multikriterielle-entscheidungsanalyse/),
  nicht CEA.
- **Ergebnisdauerhaftigkeit ignorieren.** Eine günstigere Option, die nicht dauerhafte Ergebnisse
  erzeugt (ein Schüler, der nach Ende der Intervention wieder zurückfällt), ist über einen
  vergleichbaren Zeithorizont gemessen nicht wirklich kostenwirksamer; gleichen Sie den
  Nachverfolgungszeitraum über verglichene Optionen hinweg an.

## Quellen

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
