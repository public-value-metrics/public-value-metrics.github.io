# Präferenzangabe-Bewertung

Methoden der Präferenzangabe schätzen den Wert eines nichtmarktbezogenen Guts, indem sie Menschen
direkt fragen, was sie dafür zu zahlen bereit wären oder als Entschädigung für seinen Verzicht
akzeptieren würden, typischerweise über eine strukturierte Erhebung, die ein hypothetisches
Szenario beschreibt. Die kontingente Bewertung ist die bekannteste Technik dieser Familie.

## Warum das wichtig ist

Anhang 2 des Green Book (ergänzende Leitlinie zur Bewertung nichtmarktbezogener Wirkungen) billigt
Methoden der Präferenzangabe für Güter, für die es überhaupt keine beobachtbare Markttransaktion
gibt, aus der sich der Wert ableiten ließe — Luftqualität, Biodiversität, Hochwasserschutz, der
Existenzwert einer Landschaft, die jemand vielleicht nie besucht
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Defra hat eine eigene Leitlinie zur Präferenzangabe für Umweltbewertungen veröffentlicht, gerade weil
so viel Umweltwert (Lebensraumerhalt, Wasserqualität) überhaupt keinen Ersatzmarkt hat, anders als
etwa Lärm, der zumindest mit beobachtbaren Hauspreisen korreliert (siehe
[Bewertung durch offenbarte Präferenz](../bewertung-durch-offenbarte-präferenz/)).

Der zentrale Reiz der Präferenzangabe — sie kann buchstäblich alles bewerten, auch Güter, mit denen
noch nie jemand gehandelt hat — ist auch die Quelle ihres Glaubwürdigkeitsproblems. Weil Befragte
tatsächlich kein Geld ausgeben, sind Erhebungen zur kontingenten Bewertung anfällig für
hypothetische Verzerrung (Menschen überzeichnen die Zahlungsbereitschaft, wenn keine echte
Budgetbeschränkung besteht), Einbettungseffekte (dasselbe Gut wird je nachdem, was sonst noch in
der Erhebung steht, unterschiedlich bewertet) und Ausgangspunktverzerrung bei
Bietspiel-Designs. Das NOAA-Gremium zur kontingenten Bewertung von 1993, einberufen nach dem
Rechtsstreit um die Exxon-Valdez-Ölpest, legte Designstandards fest — ein binäres
Referendumsformat "würden Sie X £, ja/nein" statt offener Gebote, und verpflichtende Erinnerungen
an die tatsächliche Budgetbeschränkung der Befragten —, die bis heute der Referenzstandard für
vertretbare Erhebungen sind.

## Die Berechnung

```
Kontingente Bewertung (Referendumsformat):
  Eine binäre Wahl vorlegen: "würden Sie X £ pro Jahr für Ergebnis Y
  zahlen? ja/nein"
  X zufällig über Befragte variieren.
  Zahlungsbereitschaft als Funktion der Ja/Nein-Antwortrate bei jedem
  X schätzen.

Mittlere Zahlungsbereitschaft = Fläche unter der geschätzten Nachfragekurve
Aggregierter Wert = mittlere Zahlungsbereitschaft × betroffene Bevölkerung

Wahlexperiment (Discrete-Choice-Modellierung), Variante:
  Befragten wiederholt Wahlmöglichkeiten zwischen Attributbündeln
  vorlegen (einschließlich eines Kostenattributs), implizite Preise
  für jedes Nicht-Kosten-Attribut aus den von Befragten offenbarten
  Abwägungen schätzen.
```

Die Wahlexperiment-Variante wird in der aktuellen britischen Praxis im Allgemeinen gegenüber der
kontingenten Bewertung mit einer einzigen Frage bevorzugt, weil das wiederholte Erzwingen einer
Abwägung mehrerer Attribute gegen Kosten intern konsistentere, schwerer manipulierbare Schätzungen
erzeugt als eine einzelne Ja/Nein-Frage.

## Beispielrechnung

**Nationale Regierung**: Defra beauftragt eine Erhebung zur kontingenten Bewertung, um ein Programm
zur Verbesserung der Flusswasserqualität zu bewerten. Eine Erhebung im Referendumsformat bei 2.000
Haushalten ergibt, dass 62 % 40 £/Jahr über einen hypothetischen Wasserrechnungszuschlag zahlen
würden, und die geschätzte Nachfragekurve ergibt eine mittlere Zahlungsbereitschaft von 28 £/Jahr
pro Haushalt.

```
Mittlere Zahlungsbereitschaft = 28 £/Haushalt/Jahr
Haushalte im Einzugsgebiet = 340.000
Aggregierter Jahreswert = 28 £ × 340.000 = 9,52 Mio. £/Jahr

Über einen Bewertungszeitraum von 20 Jahren bei 3,5 % Diskontsatz
(Annuitätsfaktor ≈ 14,2):
PV(Nutzen) ≈ 9,52 Mio. £ × 14,2 ≈ 135 Mio. £
```

Diese aggregierte Zahl wird dann mit der Kostenseite der [sozialen Kosten-Nutzen-Analyse](../soziale-kosten-nutzen-analyse/)
des Programms verglichen. Das Green Book verlangt, dass diese Art von Präferenzangabe-Evidenz
zusammen mit ihrem Konfidenzintervall und ihrer Erhebungsmethodik berichtet wird, nicht als bloße
Punktschätzung, gerade weil die zugrunde liegende Zahl fragiler ist als ein Marktpreis.

**Wohltätigkeitsorganisation**: Eine Denkmalpflegestiftung befragt Besuchende und Nicht-Besuchende
zur Zahlungsbereitschaft, die Schließung eines historischen Gebäudes zu verhindern, das keine der
beiden Gruppen zwangsläufig besucht (sein Existenzwert). Weil Nicht-Besuchende, die das Gebäude
nie sehen werden, dennoch positive Zahlungsbereitschaft angeben, erfasst die Erhebung Existenz- und
Vermächtniswert, den eine einfache Zählung von Besuchergebühreneinnahmen (ein Stellvertreter der
offenbarten Präferenz) vollständig verfehlen würde — ein Beleg für den echten Vorteil der
Präferenzangabe dort, wo überhaupt keine Markttransaktion existiert, um Wert zu offenbaren.

## Bezug zur Softwareentwicklung

Methoden der Präferenzangabe wenden sich selten direkt an die Softwareentwicklung, aber
Ingenieurinnen und Ingenieure, die Bürgerkonsultationsplattformen, Bürgerhaushalt-Werkzeuge oder
Infrastruktur für öffentliche Erhebungen bauen, bauen oft genau das Instrument, auf dem die
Ökonomie beruht. Die Erhebungsdesign-Details richtig hinzubekommen — randomisierte Gebotsbeträge,
binäres Referendumsframing statt offener Fragen, ausdrückliche Erinnerungen an die
Budgetbeschränkung — ist keine UX-Nettigkeit, sondern das, was die resultierende Bewertung unter
Prüfung vertretbar macht; eine schlecht gestaltete In-App-Erhebung kann Monate nachfolgender
ökonomischer Analyse ungültig machen. Siehe [Metriken zur Bürgerzufriedenheit](../metriken-zur-bürgerzufriedenheit/)
für die allgemeinere Disziplin, öffentliche Meinungsdaten zu erheben, die analytisches Gewicht
tragen.

## Fallstricke

- **Offene Fragen "wie viel würden Sie zahlen?".** Diese sind weit anfälliger für strategische
  Verzerrung und Ankereffekte als binäres Referendumsframing; die Empfehlung des NOAA-Gremiums, ein
  Referendumsformat zu verwenden, existiert genau deshalb, weil offene Erhebung schlecht abschneidet.
- **Keine Erinnerung an die tatsächliche Budgetbeschränkung der Befragten.** Ohne sie übersteigt die
  angegebene Zahlungsbereitschaft routinemäßig das, was dieselben Menschen zahlen würden, wenn eine
  echte Budgetabwägung im Spiel ist — hypothetische Verzerrung.
- **Einbettungseffekte ignoriert.** Dasselbe Gut, allein bewertet gegenüber als Teil eines größeren
  Bündels bewertet, erzeugt unterschiedliche Zahlungsbereitschaftsschätzungen; berichten Sie, was,
  falls überhaupt, sonst noch im Erhebungsrahmen enthalten war.
- **Die Punktschätzung einer einzelnen Erhebung als endgültig behandeln.** Die Praxis des Green Book
  erwartet eine Spanne und eine Diskussion bekannter Verzerrungen, nicht eine bloße Zahl, die
  unverändert in die Kosten-Nutzen-Tabelle übernommen wird, als wäre sie ein Marktpreis.

## Quellen

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
