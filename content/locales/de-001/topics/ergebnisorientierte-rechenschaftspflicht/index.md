# Ergebnisorientierte Rechenschaftspflicht (Outcomes-Based Accountability, OBA)

Ergebnisorientierte Rechenschaftspflicht, auch Results-Based Accountability (RBA) genannt, ist Mark
Friedmans Rahmenwerk zur Trennung zweier Fragen, die öffentliche Berichterstattung gewohnheitsmäßig
vermischt: "geht es der Bevölkerung gut?" (Bevölkerungsrechenschaft) und "läuft dieses spezifische
Programm gut?" (Leistungsrechenschaft). Beides zu vermischen ist nach Friedmans Darstellung der
häufigste Grund, warum gut geführten Programmen Bevölkerungstrends angelastet werden, die sie nie
die Macht hatten zu beeinflussen.

## Warum das wichtig ist

Friedman legte das Rahmenwerk in *Trying Hard Is Not Good Enough* (2005) dar und argumentierte,
dass die meisten öffentlichen Berichte Entscheidungsträger entweder in bevölkerungsweiten
Statistiken ertränken, die keine einzelne Behörde kontrolliert (Teenagerschwangerschaftsrate,
Arbeitslosenquote, Lebenserwartung), oder in Aktivitätszahlen auf Programmebene (betreute
Klientinnen und Klienten, erfolgte Überweisungen), die nichts darüber aussagen, ob sich jemandes
Leben verbessert hat. RBAs Beitrag ist ein kleines, diszipliniertes Vokabular, das beides
auseinanderhält: Bevölkerungsergebnisse (Wohlfahrtsbedingungen für eine ganze Bevölkerung, wie
"Kinder werden gesund geboren") gehören keiner einzelnen Behörde und erfordern viele Partner, die
sich gemeinsam bewegen; Leistungsmaße (wie gut ein spezifisches Programm seine spezifischen
Klientinnen und Klienten bedient) gehören einer Behörde und sollten nur gegen das beurteilt werden,
was diese Behörde tatsächlich beeinflussen kann. Friedmans "drei Leistungsfragen" — wie viel haben
wir getan, wie gut haben wir es getan, und geht es jemandem besser? — ist inzwischen fest verankert
in der Vergabe von Sozialdienstleistungsverträgen auf US-Bundesstaats- und Countyebene und, über die
RBA-ausgerichtete Beratungs- und Werkzeugfirma Clear Impact, weit verbreitet in der britischen und
Commonwealth-Kommunalauftragsvergabe. Die praktischen Konsequenzen sind vertraglicher Art: Ein
Wohnungsprogramm sollte nicht definanziert werden, weil die Obdachlosenquote der Stadt aus
makroökonomischen Ursachen außerhalb seiner Reichweite gestiegen ist, aber es sollte durchaus
definanziert werden, wenn seine eigenen Klientinnen und Klienten nicht untergebracht werden.

## Die Berechnung

```
Bevölkerungsrechenschaft (das "große Bild", das eine Gemeinde, Region
oder Nation teilt):
  Ergebnis      — ein Wohlfahrtszustand (z. B. "Anwohnende sind
                  wirtschaftlich abgesichert")
  Indikator(en) — ein Maß für diesen Zustand (z. B. Arbeitslosenquote,
                  mittleres Haushaltseinkommen)
  → kein einzelnes Programm besitzt den Indikator; Bewegung erfordert
    viele Beitragende

Leistungsrechenschaft (wofür ein Programm verantwortlich ist):
  Wie viel haben wir getan?     — Aktivitätsvolumen (betreute
                                   Klientinnen und Klienten, gelieferte
                                   Einheiten)
  Wie gut haben wir es getan?   — Qualität/Effizienz (% Programm-
                                   abschluss, Kosten pro Klient)
  Geht es jemandem besser?      — das relevante Ergebnis (% in
                                   Beschäftigung 6 Monate nach dem
                                   Programm, vorher/nachher oder gegen
                                   eine Vergleichsgruppe)

Ein Programm wird nach der dritten Leistungsfrage beurteilt, nie
direkt nach dem Bevölkerungsindikator, es sei denn, sein Umfang und
Design könnten ihn plausibel allein bewegen.
```

## Beispielrechnung

**Von der Stadt finanziertes Beschäftigungsförderungsprogramm**, 500 Teilnehmende/Jahr, von einer
Kommunalverwaltung unter einem RBA-artigen Leistungsrahmenwerk beauftragt:

```
Bevölkerungsindikator (Kontext, nicht die Scorecard des Programms):
  Städtische Arbeitslosenquote: 6,2 % (gegenüber 5,8 % im Vorjahr,
  getrieben von einer Fabrikschließung außerhalb der Kontrolle des
  Programms)

Leistungsmaße (die tatsächliche Rechenschaftspflicht des Programms):
  Wie viel:      500 Teilnehmende eingeschrieben (Ziel 480) — erreicht
  Wie gut:       78 % Abschlussrate; Kosten pro Absolvent = 340.000 £ /
                 390 Absolventen ≈ 872 £
  Besser dran:   von 390 Absolventen 260 nach 6 Monaten in dauerhafter
                 Beschäftigung = 66,7 % gegenüber 41 % einer gematchten
                 Vergleichsgruppe (siehe kontrafaktische Analyse)
```

Bei einer Bevölkerungsrechenschafts-Lesart sieht das Programm aus, als würde es scheitern — die
Arbeitslosenquote der Stadt stieg während seiner Laufzeit. Bei RBAs
Leistungsrechenschafts-Lesart ist das Programm erfolgreich: Es erreichte sein Volumenziel, hielt die
Qualität stabil und erzeugte ein Beschäftigungsergebnis, das 25,7 Prozentpunkte über einer
gematchten Vergleichsgruppe liegt, während sich der Bevölkerungsindikator aus Gründen (einer
Fabrikschließung) bewegte, die vollständig außerhalb der Kontrolle des Programms lagen.

## Bezug zur Softwareentwicklung

RBA passt direkt auf eine vertraute SRE-Unterscheidung: Bevölkerungsindikatoren sind wie
geschäftsweite Nordstern-Kennzahlen, die kein einzelnes technisches Team durchgängig besitzt
(Unternehmensumsatz, Marktanteil), während Leistungsmaße wie die eigenen SLOs eines Teams sind — die
Dinge, die die Designentscheidungen dieses Teams tatsächlich bewegen. Ein Dashboard, das beides
berichtet, ohne zu kennzeichnen, was was ist, lädt genau zu der Fehlzurechnung ein, die RBA
verhindern soll: eine diensthabende Ingenieurin oder ein diensthabender Ingenieur, der für eine
Kennzahl verantwortlich gemacht wird, die ein Abhängigkeitsteam kontrolliert. Bei der Beauftragung
oder dem Bau von Berichtswerkzeugen für Ergebnisverträge bauen Sie die Triade "wie viel / wie gut /
besser dran" als erstklassige, separat filterbare Felder, statt als einen einzelnen vermischten
KPI — dieselbe Disziplin wie die Trennung von Früh- und Spätindikatoren in
[KPIs im öffentlichen Sektor](../kpis-im-öffentlichen-sektor/). RBA ist auch die Rechenschaftslogik hinter
[Bezahlung nach Ergebnis und Sozialwirkungsanleihen](../bezahlung-nach-ergebnis-und-sozialwirkungsanleihen/):
Ein PbR-Vertrag kann fair nur auf das "besser dran"-Leistungsmaß zahlen, nie auf den
Bevölkerungsindikator, es sei denn, die Intervention ist wirklich dessen dominanter Treiber.

## Fallstricke

- **Ein Programm gegen einen Bevölkerungsindikator bezahlen oder bestrafen, den es nicht
  kontrollieren kann**: Dies ist genau der Fehler, den RBA verhindern soll; verfolgen Sie stets,
  ob das Programm ein wesentlicher oder geringfügiger Beitragender zum Bevölkerungsergebnis ist,
  bevor Sie Konsequenzen daran knüpfen.
- **"Wie viel" berichten, als wäre es "besser dran"**: Aktivitätszahlen (betreute Klientinnen und
  Klienten) sind die am leichtesten erhebbaren und am wenigsten aussagekräftigen Daten; bestehen
  Sie darauf, dass die Frage "geht es jemandem besser" mit echten Ergebnisdaten beantwortet wird,
  idealerweise gegen ein Kontrafaktum (siehe [kontrafaktische Analyse](../kontrafaktische-analyse/)).
- **RBA-Indikatoren als für immer festgelegt behandeln**: Friedmans Methode ist ausdrücklich
  iterativ — ein Zyklus aus "Daten, Geschichte, was wirkt, Aktionsplan" —, keine einmalige
  Scorecard-Design-Übung.
- **Keine Vergleichsgruppe für "besser dran"**: Eine Vorher-Nachher-Veränderung ohne Kontrafaktum
  vermischt die Programmwirkung mit dem Trend, den die Bevölkerung ohnehin gezeigt hätte.

## Quellen

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
