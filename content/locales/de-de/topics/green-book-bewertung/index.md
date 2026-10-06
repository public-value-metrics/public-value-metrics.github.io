# Green-Book-Bewertung (Fünf-Fälle-Modell)

Das Green Book ist HM Treasurys verpflichtende Leitlinie zur Bewertung und Evaluation britischer
Regierungsausgabenvorschläge. Sein zentrales Werkzeug, das Fünf-Fälle-Modell, zwingt einen Business
Case, fünf getrennte Fragen zu beantworten — ist es eine gute Idee, liefert es Wirtschaftlichkeit,
lässt es sich beschaffen, ist es finanzierbar und lässt es sich umsetzen —, statt alles in eine
einzige Zahl zu verdichten, die ein Ministerium einfach durchwinken kann.

## Warum das wichtig ist

Jeder britische Ausgabenvorschlag der Zentralregierung oberhalb der delegierten Grenzen der
Ministerien muss eine Green-Book-Bewertung durchlaufen, bevor Mittel freigegeben werden, und HM
Treasurys Green Book Review 2020 (veröffentlicht nach Kritik, das Verfahren sei gegenüber ärmeren
Regionen verzerrt, siehe
<https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>)
verschärfte die Anforderung, dass Optionen gegen eine echte "Minimum tun"-Basislinie verglichen
werden und die strategische Eignung nachgewiesen wird, bevor überhaupt die Wirtschaftlichkeit
bewertet wird. Das Fünf-Fälle-Modell selbst ist älter als das Green Book — es entstand beim Office
of Government Commerce als Standardstruktur für Business Cases —, aber die Green-Book-Ausgabe 2022
verankert es als verpflichtende Form für jeden Business Case, der eine Treasury-Genehmigung anstrebt:
<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Der Sinn der Aufteilung in fünf Fälle ist, dass ein Vorschlag an jeder einzelnen Dimension
scheitern kann, unabhängig von den anderen. Eine strategisch fundierte, kostenwirksame
IT-Plattformablösung kann dennoch am kommerziellen Fall scheitern, wenn nur ein Anbieter sie
liefern kann (was ein Einzelausschreibungsrisiko schafft), oder am Managementfall, wenn die Behörde
keine Erfolgsbilanz bei der Umsetzung von Programmen dieser Größe hat. Eine einzelne
"Wirtschaftlichkeits"-Bewertung verbirgt genau diese Art von Fehlschlag.

## Die Berechnung

Das Fünf-Fälle-Modell ist eine Struktur, keine Formel, aber jeder Fall hat seinen eigenen
quantitativen oder evidenzbasierten Test:

```
1. Strategischer Fall
   Nachweis eines Ausgabenziels, verknüpft mit der Organisationsstrategie.
   Test: gibt es überhaupt einen Fall für Veränderung? ("nichts tun" ist
   immer eine Option.)

2. Wirtschaftlicher Fall
   Optionsbewertung gegen eine "Minimum tun"-Basislinie, mittels
   sozialer Kosten-Nutzen-Analyse oder Kosten-Wirksamkeits-Analyse.
   Test: welche Option maximiert den öffentlichen Nettowert?
   Siehe ../social-cost-benefit-analysis/ und ../cost-effectiveness-analysis-in-government/

3. Kommerzieller Fall
   Marktbeteiligung, Beschaffungsweg, Risikoverteilung zwischen
   Käufer und Anbieter.
   Test: ist die bevorzugte Option zu akzeptablen Bedingungen beschaffbar?

4. Finanzieller Fall
   Finanzierbarkeit innerhalb der Haushaltsgrenzen der Behörde,
   Finanzierungsquelle, bilanzielle Behandlung.
   Test: können wir es uns leisten, dieses Jahr und jedes folgende Jahr?

5. Managementfall
   Governance, Projektplan, Plan zur Nutzenrealisierung, Risikoregister.
   Test: kann diese Organisation es tatsächlich umsetzen?
   Siehe ../benefits-realization/
```

Der wirtschaftliche Fall ist der Ort der quantitativen Bewertung: Optionen werden auf Basis eines um
den [sozialen Diskontsatz](../sozialer-diskontsatz/) bereinigten Kapitalwerts verglichen, mittels
der Methode der [sozialen Kosten-Nutzen-Analyse](../soziale-kosten-nutzen-analyse/), oder, wo Nutzen
nicht ehrlich monetarisiert werden können, mittels [Kosten-Wirksamkeits-Analyse](../kosten-wirksamkeits-analyse-im-öffentlichen-sektor/)
oder [Multikriterieller Entscheidungsanalyse](../multikriterielle-entscheidungsanalyse/).

## Beispielrechnung

**Kommunalverwaltung**: Eine Kommune, die ein IT-System für Wohnungsreparaturen im Wert von 12
Millionen £ bewertet, durchläuft die fünf Fälle wie folgt. Strategischer Fall: Der
Reparaturrückstand verletzt den gesetzlichen Standard für angemessenen Wohnraum innerhalb von 18
Monaten ohne Eingreifen. Wirtschaftlicher Fall: drei Optionen, kalkuliert über einen
Bewertungszeitraum von 10 Jahren bei einem Diskontsatz von 3,5 % (gemäß der Standard-Sozial-
Zeitpräferenzrate des Green Book 2022) — "Minimum tun" (Altsystem flicken, Kapitalwert −4,1 Mio. £),
"kaufen" (Standardsoftware-Plattform, Kapitalwert +2,3 Mio. £), "bauen" (maßgeschneiderte
Plattform, Kapitalwert +0,6 Mio. £, nach Anwendung eines Optimismus-Bias von 40 % für
Softwareentwicklung auf die nicht diskontierten Investitionskosten, gemäß Anhang A des Green Book).
"Kaufen" gewinnt den wirtschaftlichen Fall. Kommerzieller Fall: Zwei tragfähige Anbieter existieren,
ein wettbewerbliches Ausschreibungsverfahren ist machbar — besteht. Finanzieller Fall: Investitionsmittel
sind über den Public Works Loan Board verfügbar, laufende Kosten passen in den mittelfristigen
Finanzplan — besteht. Managementfall: Die Kommune hat in den letzten fünf Jahren zwei vergleichbare
Systeme umgesetzt — besteht. Der Vorschlag geht mit "kaufen" weiter.

**Ministerium der Zentralregierung**: Ein Vorschlag mit starkem wirtschaftlichem Fall (Kapitalwert
+40 Mio. £), bei dem aber nur ein Anbieter die relevante Akkreditierung besitzt, scheitert am
kommerziellen-Fall-Test für Wettbewerbsspannung, was entweder eine Ausnahmegenehmigung für
Einzelausschreibung (mit eigenem Prüfaufwand) oder eine Neugestaltung der Spezifikation zur
Öffnung des Markts erzwingt — der wirtschaftliche Fall allein hätte dies nie zutage gefördert.

## Bezug zur Softwareentwicklung

Technische Teams innerhalb von Regierungs- oder zuschussfinanzierten Organisationen bekommen meist
nur den wirtschaftlichen Fall zu sehen, weil das der Teil ist, den Produkt- und
Technologieleitung rechtfertigen sollen ("was ist der ROI dieser Migration?"). Aber ein Business
Case, der Treasury oder ein Zuschusskomitee überzeugen soll, braucht alle fünf, und
Ingenieurinnen und Ingenieure sind oft die am besten geeigneten Personen, um den kommerziellen Fall
(lässt sich das tatsächlich beschaffen, oder bindet es uns an das proprietäre Format eines
Anbieters?) und den Managementfall (haben wir die Umsetzungsfähigkeit, oder hängt das davon ab,
dass drei bestimmte Personen nicht kündigen?) zu beantworten. Behandeln Sie eine Anfrage nach "nur
den Business-Case-Zahlen" als Anfrage nach einem Fünftel der tatsächlichen Entscheidung. Siehe
[Wirtschaftlichkeit](../wirtschaftlichkeit/) dazu, wie das Ergebnis des wirtschaftlichen Falls
üblicherweise zusammengefasst wird, und [Gesamtbetriebskosten](../gesamtbetriebskosten-in-der-öffentlichen-it/)
für den üblichen quantitativen Kern des finanziellen Falls.

## Fallstricke

- **Zuerst den wirtschaftlichen Fall schreiben und den strategischen Fall daran anpassen.** Der
  Green Book Review 2020 fand genau dieses Fehlermuster als Treiber einer Bewertungsverzerrung zu
  bereits gut belegten Orten und Sektoren, was regionale Ungleichheit verfestigte; der strategische
  Fall sollte das Ziel festlegen, bevor Optionen verglichen werden.
- **"Minimum tun" mit "nichts tun" verwechseln.** Die korrekte Basislinie ist die
  kostengünstigste Option, die weiterhin gesetzliche oder Sicherheitspflichten erfüllt, nicht ein
  Fantasiewert von null Ausgaben — der Vergleich mit buchstäblich null bläht den scheinbaren Wert
  jeder Option auf.
- **Den kommerziellen und den Managementfall überspringen, weil der wirtschaftliche Fall stark
  ist.** Ein Vorschlag mit hohem Kapitalwert, der sich nicht wettbewerblich beschaffen lässt oder
  von der antragstellenden Organisation nicht umgesetzt werden kann, ist kein förderfähiger
  Vorschlag; Treasury-Prüfer lehnen aus diesen Gründen routinemäßig ab, selbst bei überzeugendem
  wirtschaftlichem Fall.
- **Das Fünf-Fälle-Modell nur einmal am Anfang anwenden.** Das Green Book verlangt, den Fall an
  jedem folgenden Genehmigungstor (strategischer Grobfall, Grob-Business-Case, vollständiger
  Business Case) erneut zu prüfen, sobald sich Kosten und Evidenz festigen — ein an der
  Grobfall-Stufe eingefrorener Fall übersieht Kostensteigerungen, die ein späteres Tor erfasst
  hätte.

## Quellen

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
