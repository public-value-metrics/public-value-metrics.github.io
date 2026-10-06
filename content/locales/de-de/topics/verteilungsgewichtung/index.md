# Verteilungsgewichtung

Verteilungsgewichtung passt den Geldwert eines Kosten- oder Nutzenpostens danach an, wer ihn
erhält, nach dem Prinzip, dass ein zusätzliches Pfund für einen armen Haushalt mehr wert ist als für
einen reichen. HM Treasurys Green Book liefert eine ausdrückliche Methode zur Anwendung dieser
Gewichtung, aufgebaut auf dem abnehmenden Grenznutzen des Einkommens, sodass Bewertungen nicht
stillschweigend ein Pfund Gewinn beim reichsten Dezil als gleichwertig mit einem Pfund Gewinn beim
ärmsten behandeln.

## Warum das wichtig ist

Die Standard-Kosten-Nutzen-Analyse summiert Pfund, ohne zu fragen, wessen Pfund es sind, was implizit
annimmt, ein Pfund sei für alle gleich viel wert — eine Annahme, von der Ökonomen seit Langem wissen,
dass sie falsch ist. Ein Haushalt mit 15.000 £/Jahr Einkommen erlebt einen Gewinn von 1.000 £ ganz
anders als ein Haushalt mit 150.000 £/Jahr, weil der Grenznutzen des Einkommens mit steigendem
Einkommen sinkt. Ungewichtet bevorzugt die Standardbewertung systematisch Interventionen, die
wohlhabenderen, bereits besser gestellten Gruppen nutzen, weil deren höhere Kaufkraft die
Geldbewertung der sie erreichenden Nutzen aufbläht (eine Parkaufwertung in der Nähe teurer
Wohnungen "zeigt" einen größeren Immobilienwert-Nutzen als dieselbe Aufwertung in der Nähe billiger
Wohnungen, rein weil die Preise höher sind, nicht weil der Wohlfahrtsgewinn größer ist).

Die ergänzende Leitlinie des Green Book zur Verteilungsanalyse, verstärkt nach der Überprüfung des
Treasury 2020 als Reaktion auf Kritik, dass die Bewertungsmethodik systematisch London und den
Südosten bevorzuge, legt einen formalen Gewichtungsansatz fest, der auf einer angenommenen
Elastizität des Grenznutzens des Einkommens von etwa 1,3 basiert — was bedeutet, dass eine
Verdopplung des Einkommens den Grenzwert eines zusätzlichen Pfunds ungefähr halbiert (genauer:
2^-1,3 ≈ das 0,41-Fache). Dies ist keine Rundungsanpassung: Ihre Anwendung kann ändern, welches von
zwei konkurrierenden Programmen den höheren Kapitalwert zeigt, besonders beim Vergleich einer in
einem benachteiligten Gebiet konzentrierten Intervention mit einer über die Gesamtbevölkerung
verteilten.

## Die Berechnung

Das Verteilungsgewicht des Green Book für ein Pfund Nutzen, das einem Haushalt auf Einkommensniveau
y zufließt, relativ zu einem Pfund auf dem durchschnittlichen nationalen Einkommensniveau ȳ:

```
Gewicht(y) = (ȳ / y)^e

wobei:
  y  = Haushaltseinkommen (oder Einkommen der betroffenen Gruppe)
  ȳ  = durchschnittliches (Referenz-)Haushaltseinkommen
  e  = Elastizität des Grenznutzens des Einkommens (Green Book: etwa 1,3)
```

Anwendung der Gewichte auf Nettonutzen:

```
Gewichteter Nutzen = Σ [ungewichteter Nutzen für Gruppe i × Gewicht(y_i)]
```

Eine Gruppe mit der Hälfte des nationalen Durchschnitts (y = 0,5ȳ) erhält ein Gewicht von
(1/0,5)^1,3 = 2^1,3 ≈ 2,46 — jedes Pfund Nutzen für diese Gruppe zählt als etwa das 2,46-Fache
eines Pfunds für einen Haushalt mit Durchschnittseinkommen.

## Beispielrechnung

**Zwei konkurrierende lokale Programme**, jedes mit einem ungewichteten Nettonutzen von 2 Millionen
£/Jahr, die um denselben regionalen Wachstumsfonds konkurrieren:

- *Programm A*: ein Unternehmensförderungsprogramm in einer wohlhabenden Stadt, durchschnittliches
  Haushaltseinkommen 45.000 £ (etwa das 1,3-Fache des angenommenen nationalen Durchschnitts von
  35.000 £).
- *Programm B*: ein Qualifizierungsprogramm in einem benachteiligten Stadtteil, durchschnittliches
  Haushaltseinkommen 18.000 £ (etwa das 0,51-Fache des nationalen Durchschnitts).

```
Gewicht(A) = (35.000 / 45.000)^1,3 = (0,778)^1,3 ≈ 0,72
Gewicht(B) = (35.000 / 18.000)^1,3 = (1,944)^1,3 ≈ 2,53

Gewichteter Nutzen A = 2.000.000 £ × 0,72 = 1,44 Millionen £
Gewichteter Nutzen B = 2.000.000 £ × 2,53 = 5,06 Millionen £
```

Ungewichtet liegen die beiden Programme gleichauf. Gewichtet nach Verteilungswirkung ist der Nutzen
von Programm B mehr als dreimal so groß — ein Ergebnis, das die Förderempfehlung umkehrt und den
ausdrücklichen Zweck des Green Book widerspiegelt, die Gewichtung offenzulegen, nicht nur das
ungewichtete Nutzen-Kosten-Verhältnis.

**Zuschussvergabe einer Wohltätigkeitsorganisation**: Ein Geldgeber, der einen Zuschuss von
500.000 £, der 1.000 einkommensschwache Haushalte erreicht (Gewicht ≈ 2,0, gewichteter Wert
entspricht 1 Million £), mit demselben Zuschuss von 500.000 £, der 1.000 Haushalte mittleren
Einkommens erreicht (Gewicht ≈ 1,0, gewichteter Wert entspricht 500.000 £), vergleicht, sollte den
Verteilungsfall in seinem Vorstandspapier ausdrücklich darstellen, statt ihn erraten zu lassen.

## Bezug zur Softwareentwicklung

Verteilungsgewichtung taucht selten direkt in Softwareliefermetriken auf, sollte aber prägen, wie
technische und Datenteams Messung und Zielsetzung gestalten:

- Beim Bau eines Wirkungsdashboards oder Leistungsrechners das Einkommens- oder
  Benachteiligungsprofil der Betroffenen offenlegen, nicht nur eine aggregierte Nutzensumme —
  aggregierte Zahlen ohne Verteilungsaufschlüsselung verbergen genau die oben gezeigte Umkehrung.
- Zielsetzungslogik im Servicedesign mit denselben Benachteiligungsdaten verknüpfen, die das Green
  Book verwendet — siehe [Index der Mehrfachbenachteiligung](../index-der-mehrfachbenachteiligung/) —,
  damit die Reichweite eines digitalen Dienstes auf Fairness bewertet werden kann, nicht nur auf
  Effizienz (das umstrittene vierte E in [Wirtschaftlichkeit](../wirtschaftlichkeit/)).
- Wenn ein Algorithmus eine knappe Ressource verteilt (Terminplätze, Sachbearbeiterzeit, einen
  Zuschuss), reproduziert eine ungewichtete Zielfunktion "Gesamtnutzen maximieren" konstruktionsbedingt
  genau die Verzerrung, die die Gewichtung des Green Book korrigieren soll — weisen Sie
  Politikverantwortliche vor der Optimierung ausdrücklich darauf hin.

## Fallstricke

- **Verteilungsgewichte innerhalb eines Portfolios inkonsistent anwenden.** Den Nutzen eines
  Programms zu gewichten, den seines Vergleichsprogramms aber nicht, erzeugt einen verzerrten, nicht
  einen faireren Vergleich; das Green Book verlangt eine Gleichbehandlung.
- **Immobilien- oder Marktwerte unangepasst als Wohlfahrtsstellvertreter verwenden.** Marktpreise
  sind selbst durch bestehende Einkommensungleichheit verzerrt — genau das, wofür
  Verteilungsgewichtung korrigieren soll; unangepasste Marktwerte zu verwenden, kann die
  Verzerrung doppelt zählen.
- **Variation innerhalb einer Gruppe ignorieren.** Eine Gewichtung nach Gebiets-Durchschnittseinkommen
  (z. B. einem Dezil des Index der Mehrfachbenachteiligung) kann Einzelpersonen falsch darstellen,
  die nicht dem Durchschnitt ihres Gebiets entsprechen; verwenden Sie die feinstmöglich verfügbaren
  Einkommensdaten.
- **Die Elastizität von 1,3 als universelle Konstante behandeln.** Das Green Book selbst merkt an,
  dies sei eine Schätzung mit einer plausiblen Bandbreite; testen Sie wichtige Entscheidungen
  sensitivitätsbezogen gegen alternative Elastizitäten, statt 1,3 als exakt zu behandeln.

## Quellen

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
