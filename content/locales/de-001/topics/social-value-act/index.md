# Gesetz über sozialen Wert (Social Value Act)

Der Public Services (Social Value) Act 2012 ist eine britische gesetzliche Pflicht, die öffentliche
Stellen in England und Wales verpflichtet, zu berücksichtigen, wie eine Beschaffung das
wirtschaftliche, soziale und ökologische Wohlergehen des betroffenen Gebiets verbessern könnte, und
zu erwägen, hierzu zu konsultieren, bevor ein Beschaffungsverfahren für Verträge über öffentliche
Dienstleistungen beginnt. Er trat im Januar 2013 als relativ leichte "zu berücksichtigen"-Pflicht in
Kraft und wurde durch die Procurement Policy Note (PPN) 06/20 im Januar 2021 erheblich verschärft,
die von Verträgen der Zentralregierung verlangt, sozialen Wert ausdrücklich zu bewerten — nicht nur
zu berücksichtigen —, mit einer Mindestgewichtung in den Vergabekriterien.

## Warum das wichtig ist

Vor PPN 06/20 konnte "Berücksichtigung" von sozialem Wert dadurch erfüllt werden, dass eine
Auftraggeberin oder ein Auftraggeber vermerkte, darüber nachgedacht zu haben, ohne dass dies die
Vergabeentscheidung beeinflussen musste — eine Pflicht, die auf dem Papier leicht zu erfüllen und in
der Praxis leicht zu ignorieren war. PPN 06/20 schloss diese Lücke für Beschaffungen der
Zentralregierung: Sie verlangt, dass sozialer Wert als Teil der Angebotsbewertung bewertet wird,
organisiert um fünf nationale Prioritätsthemen — Erholung von COVID-19, Bekämpfung wirtschaftlicher
Ungleichheit, Bekämpfung des Klimawandels, Chancengleichheit und Wohlergehen — und üblicherweise
gemessen mittels des National-TOMs-Rahmenwerks (Themes, Outcomes, Measures), gepflegt vom Social
Value Portal. Für eine Softwareentwicklerin oder einen Softwareentwickler, die oder der
Beschaffungs-, Vertragsmanagement- oder Angebotsunterstützungswerkzeuge für den öffentlichen Sektor
baut, ist dies die rechtliche Grundlage, gegen die Ihr Kunde bauen muss, kein optionales Extra.

## Die Berechnung

Sozialer Wert ist ein rahmenwerkförmiges Thema; seine "Berechnung" ist die Bewertungsstruktur, die
die meisten Behörden verwenden:

```
Gesamtangebotsbewertung = Preis-/Kostengewichtung + Qualitätsgewichtung
                            + Gewichtung des sozialen Werts

PPN 06/20 (Zentralregierung): Gewichtung des sozialen Werts ≥ 10 % der
Gesamtbewertung

Themen des sozialen Werts (PPN 06/20):
 1. Erholung von COVID-19
 2. Bekämpfung wirtschaftlicher Ungleichheit
 3. Bekämpfung des Klimawandels
 4. Chancengleichheit
 5. Wohlergehen
```

Bieter monetarisieren ihre Zusagen gegen diese Themen typischerweise mittels
[Unit-Cost-Datenbanken](../unit-cost-databases/), und dieselbe Monetarisierungslogik, die in
[sozialer Kapitalrendite](../social-return-on-investment/) verwendet wird, gilt: Eine Zusage sollte
belegt, dem Vertrag zurechenbar und nicht mit anderer Förderung doppelt gezählt sein.

## Beispielrechnung

**IT-Vertrag einer Kommunalverwaltung**: Ein 3-Jahres-Vertrag über 2 Millionen £ wird mit 60 %
Qualität, 30 % Preis, 10 % sozialem Wert bewertet. Bieter A sagt 2 Ausbildungsplätze, 150.000 £
lokale Unterauftragsausgaben und 200 Stunden ehrenamtliches Digitalkompetenztraining für eine lokale
Schule zu, monetarisiert mittels Stellvertreterwerten aus einer Unit-Cost-Datenbank mit
kombinierten 90.000 £ zusätzlichem sozialem Wert. Bieter B sagt ein kleineres Paket zu,
monetarisiert mit 40.000 £. Wenn die Behörde sozialen Wert proportional zum stärksten Angebot
bewertet, erhält Bieter A die vollen 10 Punkte; Bieter B erhält 10 × (40.000 £ ÷ 90.000 £) = 4,4
Punkte — eine Lücke von 5,6 Punkten, die den Vertrag entscheiden kann, selbst wenn Qualität und
Preis nah beieinanderliegen.

**Bieter aus dem gemeinnützigen Sektor**: Eine kleine VCSE-Organisation (freiwillige,
gemeinschaftliche und soziale Einrichtung), die sich um einen Grünflächenpflegevertrag gegen einen
kommerziellen Mitbewerber bewirbt, kann nicht allein über den Stückpreis konkurrieren, nutzt aber
Global-Value-Exchange-Stellvertreterwerte, um ihre bestehenden gemeinschaftlichen Beschäftigungs- und
Ehrenamtszusagen zu monetarisieren und einen belegten Fall für sozialen Wert zu machen, der neben
Preis und Qualität bewertet wird.

## Bezug zur Softwareentwicklung

Ein Angebot mit monetarisierten Zusagen zu sozialem Wert zu gewinnen, schafft eine Verpflichtung,
die Lieferung gegen diese durch Vertragsmanagement zu belegen — Werkzeuge, die begonnene
Ausbildungsplätze, lokale Ausgaben und Schulungsstunden gegen die im Angebot bewerteten spezifischen
Zusagen protokollieren, die in Vertragsprüfungssitzungen einfließen, statt nach Vertragsunterzeichnung
vergessen zu werden. G-Cloud- und Digital-Marketplace-Einträge verlangen zunehmend Erklärungen zum
sozialen Wert bereits beim Eintrag. Siehe [soziale Kapitalrendite](../social-return-on-investment/)
für die den Zusagen zugrunde liegende Bewertungsmethode, [Unit-Cost-Datenbanken](../unit-cost-databases/)
für die von Bietern genutzten Stellvertreterwerte, und [Ergebnisse vs. Leistungen](../outcomes-vs-outputs/),
um sicherzustellen, dass gelieferte Zusagen Ergebnisse sind, nicht nur Aktivitätszahlen.

## Fallstricke

- **Social-Washing-Angebote.** Vage Zusagen ("wir unterstützen die lokale Gemeinschaft"), die
  während des Vertragsmanagements weder gemessen noch eingefordert werden können, werden gut
  bewertet, liefern aber nichts Überprüfbares.
- **Sozialen Wert als Tie-Breaker behandeln.** PPN 06/20 verlangt, dass sozialer Wert ausdrücklich
  innerhalb der Vergabekriterien bewertet wird, nicht informell verwendet wird, um einen
  Gleichstand zwischen ansonsten gleichwertigen Angeboten zu entscheiden.
- **Keine Nachverfolgung im Vertragsmanagement.** Im Angebot bewertete Zusagen werden während der
  Lieferung häufig nie nachverfolgt — siehe [Nutzenrealisierung](../benefits-realization/).
- **Inkonsistente Messrahmen über Verträge hinweg.** Unterschiedliche Stellvertreterwertquellen für
  ähnliche Zusagen bei verschiedenen Verträgen zu verwenden, macht den Vergleich auf Portfolioebene
  bedeutungslos — weshalb gemeinsame Rahmenwerke wie National TOMs und geteilte
  Unit-Cost-Datenbanken existieren.

## Quellen

- Public Services (Social Value) Act 2012. <https://www.legislation.gov.uk/ukpga/2012/3/contents>
- Cabinet Office, Procurement Policy Note 06/20, "Taking Account of Social Value in the Award of
  Central Government Contracts." <https://www.gov.uk/government/publications/procurement-policy-note-0620-taking-account-of-social-value-in-the-award-of-central-government-contracts>
- Social Value Portal, National TOMs Framework. <https://socialvalueportal.com/national-toms/>
