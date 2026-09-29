# Schattenpreisbildung

Ein Schattenpreis ist ein geschätzter Wert, der einem Gut, einer Ressource oder einer Externalität
zugewiesen wird, für die kein beobachtbarer Marktpreis existiert oder deren Marktpreis verzerrt ist
und ihren wahren sozialen Wert nicht widerspiegelt. Staatliche Bewertung stützt sich auf eine kleine
Menge offizieller Schattenpreise — CO2, Nicht-Arbeitszeit, arbeitslose Arbeitskraft —, zentral
veröffentlicht, damit jede Behörde dieselbe Zahl verwendet.

## Warum das wichtig ist

Schattenpreise existieren, weil [soziale Kosten-Nutzen-Analyse](../social-cost-benefit-analysis/)
ohne einen Geldwert für jeden Kosten- und Nutzenposten nicht funktionieren kann, und mehrere der
folgenreichsten — eine Tonne emittiertes CO2, eine Stunde der Zeit eines Pendlers, eine Stunde
ansonsten arbeitsloser Arbeitskraft — haben überhaupt keinen Marktpreis oder einen Marktpreis, der
ihre wahren sozialen Kosten falsch darstellt. HM Treasury und das Department for Energy Security and
Net Zero veröffentlichen gemeinsam den Schattenpreis für CO2, der in der gesamten britischen
Regierungsbewertung verwendet wird
(<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>),
abgeleitet nicht von einem CO2-Marktpreis, sondern von einem zielkonsistenten Ansatz: Der CO2-Wert
wird auf die Grenzvermeidungskosten gesetzt, die nötig sind, um die gesetzlich verankerten
britischen CO2-Budgets zu erreichen — eine grundlegend andere Logik als die Beobachtung dessen,
wofür CO2 tatsächlich im EU- oder britischen Emissionshandelssystem gehandelt wird.

Der Schattenlohnsatz folgt einer ähnlichen Logik auf der Arbeitsseite. Jemanden zu beschäftigen, der
sonst arbeitslos gewesen wäre, kostet die Gesellschaft nicht den vollen Lohn — ein Teil dieses
Lohns ist ein Transfer aus entfallenden Leistungszahlungen und verlorener Freizeit-/Suchzeit statt
eines Nettoneuzugriffs auf gesellschaftliche Ressourcen —, sodass die Leitlinie des Green Book einen
Schattenpreis unterhalb des Marktlohns für aus Arbeitslosigkeit gewonnene Arbeitskraft festlegt, der
die wahren Opportunitätskosten dieser Arbeitskraft widerspiegelt (siehe
[Opportunitätskosten bei öffentlichen Ausgaben](../opportunity-cost-in-public-spending/)), nicht
ihren Marktpreis.

## Die Berechnung

```
Schattenpreis für CO2 (illustrative Struktur, aktuelle Werte aus dem
offiziellen BEIS/DESNZ-Werkzeug für CO2-Werte — keine veralteten Zahlen
verwenden):
  Wert für den Emissionshandelssektor: informiert durch die
    Preisentwicklung von ETS-Zertifikaten
  Wert für den nicht dem Emissionshandel unterliegenden Sektor
    (zielkonsistent): festgelegt auf die Grenzvermeidungskosten, die
    nötig sind, um gesetzliche CO2-Budgets zu erreichen, im Zeitverlauf
    steigend, da einfachere Vermeidungsoptionen ausgeschöpft werden
  Angewendet als: £/Tonne CO2e × von der Option emittierte oder
    vermiedene Tonnen, diskontiert mit dem sozialen Diskontsatz für
    zukünftige Jahre

Schattenlohnsatz (SWR):
  SWR = Marktlohn − (Wert eingesparter entfallender Freizeit-/Suchzeit
                      + Wert nicht mehr gezahlter Sozialleistungen)
  Typischerweise ausgedrückt als Anteil des Marktlohns (z. B. SWR = 0,6
    × Marktlohn in einem Gebiet mit hoher Arbeitslosigkeit, gemäß der
    Leitlinie in Anhang A des Green Book zu Arbeitsmärkten mit freien
    Kapazitäten)
```

Beide Zahlen sind zentral festgelegte politische Konventionen, keine empirischen
Marktbeobachtungen — der ganze Sinn eines Schattenpreises ist es, einen fehlenden oder verzerrten
Markt zu ersetzen, sodass eine Bewertung, die einen verwendet, die aktuelle offizielle Quelle
zitieren muss, statt eine eigene Zahl abzuleiten, gerade damit die Bewertung jeder Behörde
vergleichbar bleibt.

## Beispielrechnung

**Nationale Regierung**: Die Bewertung eines Hochwasserschutzprogramms schätzt, dass es 400 Tonnen
CO2e-Emissionen pro Jahr vermeidet (durch reduzierten Einsatz von Notfallgerät und reduzierten
eingebetteten CO2-Ausstoß durch vermiedenen Wiederaufbau) über eine Bewertungsdauer von 30 Jahren,
verglichen mit einer "Minimum tun"-Basislinie.

```
Illustrativer Schattenpreis für CO2: 280 £/Tonne CO2e (Jahr 1, im
  Bewertungszeitraum steigend gemäß dem offiziellen Zeitplan für
  CO2-Werte außerhalb des Emissionshandels)
CO2-Nutzen in Jahr 1 = 400 × 280 £ = 112.000 £
```

Weil der offizielle Zeitplan den CO2-Wert über den Bewertungszeitraum *steigen* lässt (was
verschärfte CO2-Budgets widerspiegelt), muss die analysierende Person für jedes Jahr des
30-Jahres-Stroms den korrekten jahresspezifischen Wert anwenden, nicht einen flachen Satz — den
Wert von Jahr 1 durchgängig zu verwenden würde spätere Nutzen unterschätzen und die Rangfolge
gegenüber alternativen Hochwasserschutzdesigns mit unterschiedlichen CO2-Profilen verzerren.

**Kommunalverwaltung**: Das Beschäftigungsförderungsprogramm einer Kommune für langzeitarbeitslose
Anwohnende vermittelt 150 Personen in Arbeitsstellen mit 11 £/Stunde. Die Bewertung mit dem vollen
Marktlohn würde dem Programm 11 £ × geleistete Stunden als sozialen Nutzen anrechnen, aber der
Schattenlohnsatz-Ansatz erkennt, dass diese Personen nicht aus anderen Jobs abgezogen wurden — die
wahren Opportunitätskosten ihrer Arbeitskraft vor dem Programm waren niedrig.

```
Marktlohn: 11,00 £/Stunde
Schattenlohnsatz (illustrativ, hohe lokale Arbeitslosigkeit): 0,6 ×
  Marktlohn = 6,60 £/Stunde
Zurechenbarer sozialer Nettonutzen pro geleisteter Stunde ≈ 11,00 £ −
  6,60 £ = 4,40 £/Stunde
  (der "zusätzliche" Wert, der durch das Überführen wirklich brachliegender
   Arbeitskraft in Produktion entsteht, im Unterschied zum Lohn selbst,
   der größtenteils ein Transfer ist)
```

Das ist der Grund, warum Bewertungen von Beschäftigungsprogrammen in Gebieten mit hoher
Arbeitslosigkeit einen positiven sozialen Nettowert zeigen können, selbst wenn dasselbe Programm in
einem Gebiet mit Vollbeschäftigung, wo verdrängte Arbeitskraft einfach aus anderen Jobs gezogen
würde, dies nicht täte.

## Bezug zur Softwareentwicklung

Schattenpreisbildung berührt die Softwarelieferung selten direkt, ist aber relevant, wann immer ein
Business Case einen CO2- oder sozialen Nutzen aus einer IT-Änderung behauptet — eine
Rechenzentrumskonsolidierung, die CO2-Einsparungen behauptet, oder ein papierloser Dienst, der
vermiedenes Drucken und CO2 aus Postversand behauptet, muss den aktuellen offiziellen
Schattenpreis für CO2 verwenden statt einer erfundenen Zahl, und muss den korrekten
Jahr-für-Jahr-Zeitplan anwenden statt eines flachen Satzes, genau wie bei jedem anderen Eingabewert
einer Green-Book-Bewertung. Siehe [Gesamtbetriebskosten in der öffentlichen IT](../total-cost-of-ownership-in-government-it/)
und [Cybersicherheitswert im öffentlichen Sektor](../public-sector-cybersecurity-value/), die
beide oft einen Schattenpreis für einen schwer monetarisierbaren Eingabewert (Verstoßrisiko,
Ausfallzeit) neben direkt kalkulierten Posten benötigen.

## Fallstricke

- **Eine veraltete CO2- oder Lohnzahl verwenden.** Beide Werte werden periodisch durch zentrale
  Leitlinien überarbeitet; eine Bewertung, die auf einer überholten Zahl aufbaut, übersteht keine
  Treasury-Prüfung.
- **Einen flachen Schatten-CO2-Preis über eine mehrere Jahrzehnte umfassende Bewertung
  anwenden.** Der offizielle Zeitplan steigt im Zeitverlauf; den Wert von Jahr 1 durchgängig zu
  verwenden, stellt das Profil von Nutzen oder Kosten falsch dar.
- **Den Schattenlohn mit einem Abschlag auf die tatsächliche Bezahlung des Arbeitnehmers
  verwechseln.** Der Schattenlohnsatz passt die *Bewertung der Bewertung* des Arbeitseinsatzes an,
  nicht den Lohn, den der Arbeitnehmer tatsächlich erhält — beides zu vermischen lädt dazu ein,
  Bezahlung unter Marktniveau (fälschlich) zu rechtfertigen.
- **Einen maßgeschneiderten Schattenpreis statt des offiziellen ableiten.** Schattenpreise sind
  politische Konventionen, gerade damit Bewertungen behördenübergreifend vergleichbar sind; eine
  lokal erfundene Zahl, wie gut begründet auch immer, bricht diese Vergleichbarkeit.

## Quellen

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
