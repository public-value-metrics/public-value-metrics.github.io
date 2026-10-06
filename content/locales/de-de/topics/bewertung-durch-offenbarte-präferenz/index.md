# Bewertung durch offenbarte Präferenz

Methoden der offenbarten Präferenz leiten den Wert eines nichtmarktbezogenen Guts aus beobachtbarem
Verhalten in einem verwandten Markt ab, statt Menschen direkt zu fragen. Hedonische Preissetzung und
die Reisekostenmethode sind die zwei Arbeitspferde-Techniken: Beide gehen von einer realen
Transaktion aus und ermitteln daraus einen impliziten Preis für das, was nie direkt verkauft wurde.

## Warum das wichtig ist

Wo [Präferenzangabe](../präferenzangabe-bewertung/)-Methoden eine hypothetische Frage stellen,
beobachten Methoden der offenbarten Präferenz, wofür Menschen tatsächlich bezahlt haben, was das
Green Book bei sonst gleichen Bedingungen als generell glaubwürdigere Evidenz behandelt, weil sie
nicht der hypothetischen Verzerrung unterliegt — Befragte in einer hedonischen Hauspreisstudie
haben den gemessenen Auf- oder Abschlag tatsächlich bezahlt
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Anhang 2). Hedonische Preissetzung zerlegt einen Marktpreis — typischerweise Hauspreise — in
implizite Preise für jedes Attribut des Guts und erlaubt Analysten, beispielsweise den Preisaufschlag
zu isolieren, den Haushalte tatsächlich zahlen, um ruhiger oder mit besserer Luftqualität zu wohnen,
statistisch kontrolliert für jedes andere Attribut, das ebenfalls den Hauspreis beeinflusst (Größe,
Lage, Schuleinzugsgebiet). Die Reisekostenmethode tut Analoges für Erholungsgebiete ohne Eintrittsgeld:
die Zeit und das Geld, die Menschen für die Anreise zu einem Ort aufwenden, offenbart eine
Untergrenze dessen, was der Ort ihnen wert ist, weil niemand Kosten auf sich nimmt, die den Wert des
Besuchs für sie übersteigen.

Beide Methoden teilen eine strukturelle Einschränkung: Sie können nur bewerten, was in einer
bestehenden Markttransaktion eingebettet ist. Lärm in der Nähe einer Startbahn zeigt sich in
Hauspreisen, weil Menschen, denen Lärm wichtig ist, sich in ruhigeres Wohnen sortieren; der
Existenzwert einer Art, die niemand besucht oder in deren Nähe niemand lebt, zeigt sich in
überhaupt keiner Transaktion — genau die Lücke, die [Präferenzangabe](../präferenzangabe-bewertung/)-
Methoden schließen sollen.

## Die Berechnung

```
Hedonische Preissetzung:
  Hauspreis = f(bauliche Attribute, Lageattribute, interessierendes
               Umweltattribut, ...)
  Schätzung per Regression; der Koeffizient des Umweltattributs
  (bei Konstanthaltung aller anderen) ist sein impliziter Preis.

  Impliziter Preis von Attribut X = ∂(Hauspreis) / ∂X

Reisekostenmethode:
  Besuchsrate (Besuche pro Kopf aus Zone i) = f(Reisekosten aus Zone
               i, Ersatzstandorte, sozioökonomische Kontrollen)
  Eine Nachfragekurve für Besuche als Funktion der Reisekosten schätzen.
  Konsumentenrente = Fläche unter der geschätzten Nachfragekurve
                    = Wert des Standorts für Besuchende
```

Beide Methoden erfordern ein statistisch fundiertes Kontrollset — das Weglassen eines
konfundierenden Attributs (hedonisch) oder eines nahegelegenen Ersatzstandorts (Reisekosten)
verzerrt den impliziten Preis in eine Richtung, die nicht immer im Voraus offensichtlich ist,
weshalb Anhang 2 des Green Book verlangt, dass Regressionsspezifikation und Kontrollen berichtet
werden, nicht nur der Schlagzeilenkoeffizient.

## Beispielrechnung

**Nationale Regierung**: Die eigene Schattenpreis-Methodik des Green Book für CO2 stützt sich
teilweise auf hedonische Evidenz, aber ein einfacherer illustrativer Fall ist Fluglärm. Eine
hedonische Studie, die Hausverkaufspreise in einem Einflugbereich gegen entfernungsgewichtete
Lärmbelastung regressiert, kontrolliert für Größe, Alter und Schuleinzugsgebiet, findet, dass jeder
1-Dezibel-Anstieg der durchschnittlichen Lärmbelastung mit einer Reduktion des Hauspreises um 0,5 %
verbunden ist. Für ein typisches Haus im betroffenen Gebiet im Wert von 280.000 £:

```
Impliziter Preis pro Dezibel = 280.000 £ × 0,5 % = 1.400 £ pro Haushalt
Von einem 3-dB-Anstieg durch eine neue Startbahn betroffene Haushalte = 18.000
Aggregierte implizite Kosten des Lärmanstiegs = 1.400 £ × 3 × 18.000 = 75,6 Mio. £
```

Dies ist ein einmaliger kapitalisierter Kostenwert (eingebettet im Hauspreis), den die Bewertung
sorgfältig davon abgrenzen muss, nicht doppelt mit einem separat geschätzten jährlichen
Lärmbelästigungskostenstrom zu zählen.

**Wohltätigkeitsorganisation**: Eine Umweltorganisation nutzt die Reisekostenmethode, um ein
kostenlos zugängliches Naturschutzgebiet zu bewerten. Erhebungsdaten zu Postleitzahlen der
Besuchenden ergeben durchschnittliche Hin-und-Rück-Reisekosten (Zeit bewertet mit dem vom Green Book
empfohlenen Wert für Nicht-Arbeitszeit, plus Treibstoff) von 14 £ pro Besuch, bei 40.000 Besuchen
pro Jahr. Die geschätzte Nachfragekurve — sinkende Besuchsraten bei steigenden Reisekosten aus einer
Zone — impliziert eine Konsumentenrente pro Besuch, über die tatsächlich ausgegebenen 14 £ hinaus,
von etwa 9 £.

```
Gesamter Jahreswert = 40.000 Besuche × (14 £ ausgegeben + 9 £
                       Konsumentenrente)
                     = 40.000 × 23 £ ≈ 920.000 £/Jahr
```

Dies übersteigt die Einnahmen des Schutzgebiets von null Eintrittsgeld bei Weitem und liefert den
Treuhändern der Organisation eine vertretbare Zahl für den Erholungswert des Standorts bei der
Argumentation gegenüber Geldgebern.

## Bezug zur Softwareentwicklung

Denken in offenbarter Präferenz zeigt sich in der Produktanalytik des öffentlichen Sektors häufiger,
als Praktikerinnen und Praktiker erkennen: Nutzungsdaten eines kostenlosen digitalen Regierungsdienstes
sind selbst Evidenz offenbarter Präferenz für Wert (Häufigkeit, Sitzungsdauer und — am
aufschlussreichsten — wiederholte gegenüber einmaliger Nutzung können genauso analysiert werden, wie
ein Reisekostenmodell die Besuchshäufigkeit gegen Entfernung behandelt). Wo ein Dienst echte
Alternativen hat (ein Papierkanal, eine Telefonleitung), lassen sich die "Kosten", die Bürgerinnen
und Bürger auf sich nehmen, um stattdessen den digitalen Kanal zu nutzen (Zeit, Daten, ein Gerät),
schätzen und mit der Nutzung vergleichen, was direkt die Logik der Reisekostenmethode widerspiegelt.
Siehe [Digitaler Servicestandard](../digitaler-servicestandard/) und [Wert offener Daten](../wert-offener-daten/),
das genau vor diesem Bewertungsproblem für ein Gut ohne direkten Marktpreis steht.

## Fallstricke

- **Verzerrung durch ausgelassene Variablen in hedonischen Modellen.** Ein korreliertes Attribut
  wegzulassen (Schulqualität korreliert sowohl mit dem Hauspreis als auch mit der interessierenden
  Umweltvariable) verzerrt die Schätzung des impliziten Preises; die Spezifikation muss berichtet
  und geprüft werden, nicht nur das Ergebnis.
- **Ersatzstandorte in Reisekostenstudien ignorieren.** Der offenbarte Wert eines Standorts für
  Besuchende wird unterschätzt, wenn ein näherer Ersatzstandort existiert und nicht kontrolliert
  wird — sie besuchen den Ort vielleicht hauptsächlich, weil er kostenlos ist, nicht weil er
  einzigartig wertvoll ist.
- **Offenbarte Präferenz auf ein Gut anwenden, das überhaupt kein Marktecho hat.** Existenzwert,
  Optionswert und Vermächtniswert zeigen sich in keiner Transaktion und können nicht mittels
  hedonischer oder Reisekostenmethoden erfasst werden — diese Lücke gehört zur
  [Präferenzangabe-Bewertung](../präferenzangabe-bewertung/).
- **Kapitalisierten (einmaligen) Wert mit einem Jahresstrom verwechseln.** Hedonische
  Hauspreiseffekte sind typischerweise einmalige kapitalisierte Werte; sie als jährlichen
  Nutzenstrom zu behandeln, bläht die Bewertung auf.

## Quellen

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
