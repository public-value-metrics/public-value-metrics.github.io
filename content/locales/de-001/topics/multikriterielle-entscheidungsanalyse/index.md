# Multikriterielle Entscheidungsanalyse (MCDA)

MCDA bewertet und gewichtet Optionen gegen mehrere getrennte, gewichtete Kriterien zugleich und
erzeugt einen Rangvergleich, ohne jedes Kriterium in eine einzige Geld- oder Natureinheitenskala zu
zwingen. Sie ist die Bewertungsmethode für Entscheidungen, bei denen sich die relevanten Ergebnisse
wirklich nicht auf eine einzige Zahl reduzieren lassen.

## Warum das wichtig ist

Das Green Book billigt MCDA ausdrücklich (sowohl sein Fallstudien-Anhang Box 2 als auch Anhang A
behandeln sie direkt) für Bewertungen, bei denen Nutzen "wirklich unvergleichbar" sind — wo die
Umrechnung von allem in Geld über [soziale Kosten-Nutzen-Analyse](../soziale-kosten-nutzen-analyse/)
oder in ein Ergebnis über [Kosten-Wirksamkeits-Analyse](../kosten-wirksamkeits-analyse-im-öffentlichen-sektor/)
die Entscheidung verzerren statt klären würde
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Eine Standortauswahl für ein neues Gefängnis etwa wägt Investitionskosten gegen
Gemeinschaftswirkung, Verkehrsanbindung, Umweltwirkung und Personalgewinnbarkeit ab — Kriterien, die
keine gemeinsame Einheit teilen, und bei denen das Erzwingen einer gemeinsamen Einheit
(typischerweise Geld) ein Werturteil über die relative Wichtigkeit von etwa Umweltwirkung gegenüber
Kosten einschleusen würde, verkleidet als objektive Arithmetik.

Die Ehrlichkeit von MCDA ist auch ihre größte Schwachstelle: Weil Gewichte von wem auch immer die
Bewertung durchführt (oder von einem Gremium) vergeben werden, ist die Methode nur so legitim wie
der Gewichtungsprozess. Die Leitlinie des Green Book stellt ausdrücklich klar, dass Kriterien und
Gewichte vereinbart und veröffentlicht werden müssen, *bevor* Optionen bewertet werden, genau um zu
verhindern, dass ein Prüfer von einer bevorzugten Option rückwärts zu den sie rechtfertigenden
Gewichten arbeitet.

## Die Berechnung

```
Für jede Option i und jedes Kriterium j:
  Bewertung_ij = die Leistung der Option bei diesem Kriterium (oft 0–100
                 oder 1–10, aus Evidenz, Expertenurteil oder
                 Stakeholder-Bewertung)
  Gewicht_j    = relative Wichtigkeit von Kriterium j, Gewichte summieren
                 sich zu 1 (oder 100)

Gewichtete Bewertung von Option i = Σ_j (Bewertung_ij × Gewicht_j)

Vorgehen:
1. Kriterienset und Gewichte vereinbaren, BEVOR eine Option bewertet
   wird (Swing-Weighting oder paarweiser Vergleich, z. B. AHP, sind
   gängige Erhebungsmethoden).
2. Jede Option gegen jedes Kriterium auf einer gemeinsamen Skala
   bewerten, wo möglich anhand von Evidenz.
3. Gewichtete Summen berechnen; Optionen ordnen.
4. Gewichte sensitivitätsprüfen: übersteht die Rangfolge plausible
   Uneinigkeit darüber, wie wichtig jedes Kriterium sein sollte?
```

MCDA erzeugt keinen vertretbaren absoluten Wert, wie es der Kapitalwert der SCBA tut — sie erzeugt
nur eine Rangfolge, bedingt durch die vereinbarten Gewichte. Das ist ein Vorteil, wenn die
Entscheidung wirklich darin besteht, unvergleichbare Güter abzuwägen, und ein Nachteil, wenn sie
benutzt wird, um der schwierigeren Arbeit der Monetarisierung auszuweichen, wo Monetarisierung
tatsächlich möglich war.

## Beispielrechnung

**Kommunalverwaltung**: Eine Kommune, die einen Standort für ein neues Recyclingzentrum für
Haushaltsabfälle auswählt, bewertet drei Standorte gegen vier Kriterien, gewichtet von einem
ressortübergreifenden Gremium vor jeder Standortbesichtigung:

```
Kriterien (Gewicht):    Investitionskosten (30 %)  Verkehrsanbindung (25 %)
                         Gemeinschaftswirkung (25 %)  Umweltwirkung (20 %)

Standortbewertungen (0–100, höher = besser):
Standort A: Kosten 80, Anbindung 60, Gemeinschaft 40, Umwelt 70
Standort B: Kosten 60, Anbindung 90, Gemeinschaft 70, Umwelt 50
Standort C: Kosten 90, Anbindung 50, Gemeinschaft 80, Umwelt 60

Gewichtete Summen:
Standort A = 80(.30) + 60(.25) + 40(.25) + 70(.20) = 24+15+10+14 = 63
Standort B = 60(.30) + 90(.25) + 70(.25) + 50(.20) = 18+22,5+17,5+10 = 68
Standort C = 90(.30) + 50(.25) + 80(.25) + 60(.20) = 27+12,5+20+12 = 71,5
```

Standort C liegt vorn. Eine Sensitivitätsrechnung, die das Gewicht der Gemeinschaftswirkung von
25 % auf 35 % verschiebt (10 Punkte von den Investitionskosten nehmend), ändert die Summe von
Standort C auf 71,5 − 3 + 8 = 76,5 und die von Standort B auf 68 − 6 + 7 = 69 — Standort C führt
weiterhin, die Rangfolge ist also robust gegenüber dieser plausiblen Uneinigkeit über die
Gewichtung, genau die Prüfung, die das Green Book berichtet sehen möchte.

**Wohltätigkeitsorganisation**: Eine zuschussvergebende Stiftung, die zwischen der Förderung eines
Schuldenberatungsdiensts, eines Tafel-Netzwerks und eines Finanzbildungsprogramms wählt, verwendet
MCDA statt SROI (siehe [soziale Kapitalrendite](../soziale-kapitalrendite/)) genau deshalb,
weil die Treuhänder in gutem Glauben uneinig sind, ob Krisenhilfe oder Prävention stärker gewichtet
werden sollte — MCDA lässt sie die *Form* der Uneinigkeit (eine Gewichtsspanne) vereinbaren, statt
vorzutäuschen, ein einziges SROI-Verhältnis löse sie auf.

## Bezug zur Softwareentwicklung

MCDA ist das natürliche Werkzeug für Anbieter- und Architekturauswahl, wenn Kriterien wirklich in
Konflikt stehen — die Wahl zwischen einem cloudgehosteten und einem lokal betriebenen
Fallmanagementsystem wägt Kosten, Risiko der Datensouveränität, Barrierefreiheit und
Umsetzungsgeschwindigkeit auf eine Weise ab, die sich nicht auf eine Zahl reduzieren lässt.
Technische Leitungen sollten darauf bestehen, dass die Gewichtung stattfindet, bevor Optionen
bewertet werden, genau wie es das Green Book verlangt, weil eine nach Sichtung der engeren Auswahl
durchgeführte Gewichtungsübung zuverlässig in Richtung der Option driftet, die der Raum bereits
bevorzugte. Siehe [Eigenentwicklung vs. Zukauf im öffentlichen Sektor](../eigenentwicklung-vs-zukauf-im-öffentlichen-sektor/)
für eine häufige MCDA-Anwendung, und [Scorecard für öffentlichen Wert](../scorecard-für-öffentlichen-wert/)
für ein verwandtes strukturiertes Bewertungswerkzeug, das nach statt vor der Entscheidung
eingesetzt wird.

## Fallstricke

- **Gewichte festlegen, nachdem die Optionen bekannt sind.** Dies ist die häufigste Art, wie MCDA
  manipuliert wird, absichtlich oder nicht; veröffentlichen Sie Gewichte vor der Bewertung und
  protokollieren Sie, wer sie festgelegt hat.
- **Die gewichtete Summe als harte Zahl behandeln.** Eine Bewertung von 71,5 gegenüber 68 ist keine
  statistisch bedeutsame Lücke, sofern die Sensitivitätsanalyse nicht bestätigt, dass die Rangfolge
  stabil ist; berichten Sie Spannen, keine falsche Präzision.
- **MCDA verwenden, um tatsächlich machbare Monetarisierung zu vermeiden.** Wenn die meisten
  Kriterien glaubwürdig bepreist werden könnten, verwirft der standardmäßige Rückgriff auf MCDA
  statt [SCBA](../soziale-kosten-nutzen-analyse/) Informationen, die die Bewertung hätte nutzen
  können.
- **Einen dominanten Stakeholder allein alle Gewichte festlegen lassen.** Gute Praxis des Green Book
  erwartet, dass Gewichte von einem repräsentativen Gremium erhoben werden, nicht von der
  auftraggebenden Direktion, um zu vermeiden, dass die Bewertung einfach das ableitet, was diese
  Person ohnehin wollte.

## Quellen

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
