# Wirtschaftlichkeit (Value for Money, VFM)

Value for Money (Wirtschaftlichkeit) ist der formale Test des britischen öffentlichen Sektors, ob
Ausgaben das bestmögliche Verhältnis von Kosten und Nutzen erreichen. HM Treasurys Green Book
rahmt dies durch drei "E"s — Economy (Sparsamkeit), Efficiency (Effizienz) und Effectiveness
(Wirksamkeit) —, wobei Equity (Fairness) zunehmend als umstrittenes viertes E diskutiert wird. Jeder
öffentliche Business Case, der eine Prüfung übersteht, muss alle drei ausdrücklich beantworten, nicht
nur behaupten, die Ausgabe "lohne sich".

## Warum das wichtig ist

VFM ist kein Synonym für "billig". Das Green Book (HM-Treasury-Ausgabe 2022) stellt ausdrücklich
klar, dass der Kauf der günstigsten Option (Economy), ohne zu prüfen, ob sie die beabsichtigten
Ergebnisse liefert (Effectiveness), ein häufiger und teurer Fehler ist — eine Beschaffung, die 10 %
der Stückkosten spart, aber 40 % weniger Wirkung erzielt, ist schlechtere, nicht bessere
Wirtschaftlichkeit. Das Drei-E-Rahmenwerk zwingt einen Business Case, drei tatsächlich
unterschiedliche Fehlerarten zu trennen: zu viel für Inputs zu bezahlen, Inputs bei der Umwandlung
in Outputs zu verschwenden und Outputs zu erzeugen, die sich nicht in gewünschte Ergebnisse
übersetzen. Die britischen Ausgabenkontrollen — Genehmigungspunkte des Treasury, VFM-Studien des
National Audit Office (NAO) und Bewertungen der Rechnungsführer der Ministerien — sind um genau
diesen dreiteiligen Test herum aufgebaut, sodass ein technischer Business Case, der nur die Kosten
(Economy) adressiert, die Prüfung nicht besteht, selbst wenn die Technologie solide ist.

Das "vierte E", Equity, ist umstritten, gerade weil es mit den anderen drei in Konflikt geraten
kann: Der effizienteste Weg, einen Dienst landesweit zu erbringen, ist selten der fairste, da eine
Konzentration der Erbringung dort, wo Bürgerinnen und Bürger am günstigsten zu erreichen sind, oft
bedeutet, die am schwersten Erreichbaren zu vernachlässigen. Die Überarbeitung des Green Book von
2020 reagierte auf Kritik (unter anderem vom Treasury Select Committee 2020 und von IPPR North),
dass reine Kosten-Nutzen-Verhältnisse systematisch bereits wohlhabende Regionen bevorzugten, indem
sie verlangte, dass Bewertungen die Verteilungswirkung ausdrücklich adressieren — siehe
[Verteilungsgewichtung](../distributional-weighting/).

## Die Berechnung

VFM ist kein einzelnes Verhältnis, sondern eine drei- (oder vier-)teilige Diagnose, die
nacheinander angewendet wird:

```
Economy (Sparsamkeit):     Werden Inputs zu den niedrigsten vertretbaren
                           Kosten für die erforderliche Qualität beschafft?
                           (£ pro Input-Einheit)

Efficiency (Effizienz):    Wie gut werden Inputs in Outputs umgewandelt?
                           (Outputs / Inputs, z. B. bearbeitete Fälle pro
                           Sachbearbeiterstunde)

Effectiveness (Wirksamkeit): Erzeugen die Outputs tatsächlich die
                           beabsichtigten Ergebnisse?
                           (erreichte Ergebnisse / beabsichtigte Ergebnisse)

[Equity (Fairness)]:       Werden Kosten und Nutzen fair über die
                           Bevölkerung verteilt, oder konzentrieren sie
                           sich auf jene mit dem geringsten Bedarf?
```

Ein VFM-Fehlschlag kann in jeder Phase unabhängig auftreten: sparsame Beschaffung mit ineffizienter
Erbringung; effiziente Erbringung des falschen Outputs; wirksame Ergebnisse zu überhöhten Kosten
erkauft. Siehe [KPIs im öffentlichen Sektor](../public-sector-kpis/) dazu, wie sich dies in messbare
Indikatoren übersetzt, und [Kosten-Wirksamkeits-Analyse im öffentlichen Sektor](../cost-effectiveness-analysis-in-government/)
für die formale Vergleichsmethode.

## Beispielrechnung

**Kontaktzentrum einer Kommunalverwaltung**: Eine Kommune vergleicht zwei Optionen für ein neues
Fallmanagementsystem.

- *Option A*: 600.000 £ Lizenzgebühr (günstigste verfügbare Option), aber Sachbearbeitende
  benötigen im Schnitt 22 Minuten pro Fall, weil der Arbeitsablauf manuelle Neueingaben zwischen
  Systemen erfordert — die Effizienz ist schlecht.
- *Option B*: 900.000 £ Lizenzgebühr, integrierter Arbeitsablauf, Sachbearbeitende benötigen im
  Schnitt 9 Minuten pro Fall.

Die Sparsamkeit allein spricht für A (300.000 £ günstiger). Aber bei 40.000 Fällen/Jahr kostet A
40.000 × 22/60 = 14.667 Personalstunden; B kostet 40.000 × 9/60 = 6.000 Personalstunden. Bei
vollkostenbelasteten Personalkosten von 28 £/Stunde kostet A 410.667 £/Jahr an Arbeitszeit
gegenüber 168.000 £/Jahr bei B — eine Effizienzlücke von 242.667 £/Jahr, die den anfänglichen
Sparsamkeitsvorteil von 300.000 £ innerhalb von 14 Monaten übersteigt. VFM spricht für B, sobald
die Effizienz mitgezählt wird, nicht für A.

**Zuschuss an eine Wohltätigkeitsorganisation**: Ein Geldgeber vergleicht einen Zuschuss von
50.000 £, der 200 erfolgreiche Arbeitsvermittlungen erzielt (250 £/Vermittlung — scheinbar
hervorragende Sparsamkeit), mit einem Zuschuss von 120.000 £, der 350 Vermittlungen erzielt, die
länger als 12 Monate bestehen bleiben, gegenüber dem ersten Zuschuss, bei dem die Hälfte der
Vermittlungen innerhalb von 3 Monaten wieder wegfällt. Wirksamkeit — dauerhafte Ergebnisse — kehrt
die scheinbare VFM-Rangfolge um: Die wahren Kosten pro *dauerhafter* Vermittlung betragen
250 £ ÷ 0,5 = 500 £ beim ersten Zuschuss gegenüber 120.000 £/350 ≈ 343 £ beim zweiten.

## Bezug zur Softwareentwicklung

VFM gibt technischen Teams eine Disziplin an die Hand, um technische Business Cases so zu formulieren,
wie Finanz- und Prüffunktionen sie tatsächlich lesen werden:

- Nennen Sie Sparsamkeit, Effizienz und Wirksamkeit als getrennte Posten in einem Business Case,
  nicht als eine vermischte "Wert"-Zahl — eine mit dem Green Book vertraute prüfende Person wird
  genau diese Aufschlüsselung verlangen.
- Vorsicht davor, Beschaffungskosten (Economy) auf Kosten von Integration und
  Arbeitsablauf-Effizienz zu optimieren — eine sehr häufige Scheineinsparung in der öffentlichen
  IT (siehe [Gesamtbetriebskosten in der öffentlichen IT](../total-cost-of-ownership-in-government-it/)
  und [Eigenentwicklung vs. Zukauf im öffentlichen Sektor](../build-vs-buy-in-government/)).
- Wirksamkeit erfordert Ergebnisdaten, nicht nur Output-Zählungen — verknüpfen Sie
  Leistungskennzahlen mit [Ergebnisse vs. Leistungen](../outcomes-vs-outputs/) und mit echter
  Evaluation durch [kontrafaktische Analyse](../counterfactual-analysis/), statt anzunehmen, Outputs
  implizierten Ergebnisse.
- Wenn ein System Regionen oder Bevölkerungsgruppen ungleich bedient, ist die Fairnessfrage ein
  legitimer VFM-Einwand, kein separates "nice to have" — siehe [digitale Inklusion](../digital-inclusion/).

## Fallstricke

- **VFM mit dem niedrigsten Preis gleichsetzen.** Sparsamkeit ist ein Drittel (oder Viertel) des
  Tests; das Green Book warnt ausdrücklich vor Beschaffungsregeln nach "niedrigsten Kosten", die
  Effizienz und Wirksamkeit ignorieren.
- **Outputs messen und sie Ergebnisse nennen.** Fallbearbeitungsdurchsatz (Effizienz) ist nicht
  dasselbe wie gut gelöste Fälle (Wirksamkeit); siehe [Ergebnisse vs. Leistungen](../outcomes-vs-outputs/).
- **Fairness als optional behandeln.** Seit der Aktualisierung des Green Book 2020 soll die
  Verteilungswirkung zusammen mit den traditionellen drei Es bewertet werden, nicht nachträglich
  angehängt werden; sie nachträglich einzubauen, nachdem ein Business Case genehmigt wurde, ist weit
  schwieriger, als sie von Anfang an einzubeziehen.
- **Optionen bei unterschiedlichen Mengen vergleichen, ohne zu normalisieren.** Ein
  Stückkostenvergleich der VFM über Optionen hinweg, die unterschiedliche Bevölkerungsgruppen
  bedienen, muss den Umfang kontrollieren, sonst ist der Effizienzvergleich bedeutungslos.

## Quellen

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  edition). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" and VFM study methodology.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the
  Treasury Select Committee's 2020 review of the Green Book's regional bias).
