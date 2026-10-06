# Kontrafaktische Analyse

Ein Kontrafaktum ist eine Schätzung dessen, was ohne eine Intervention geschehen wäre. Ohne ein
solches lässt sich eine beobachtete Veränderung nach dem Start eines Programms nicht von einer
Veränderung unterscheiden, die ohnehin eingetreten wäre — kein Kontrafaktum, kein Wirkungsnachweis,
so überzeugend die Vorher-Nachher-Zahlen auch aussehen. HM Treasurys Magenta Book behandelt die
Konstruktion eines glaubwürdigen Kontrafaktums als die zentrale methodische Aufgabe der
Wirkungsevaluation, wichtiger als jede andere einzelne Designentscheidung.

## Warum das wichtig ist

"Die Kriminalität sank im Jahr nach Einführung des Programms um 15 %" ist kein Beleg dafür, dass
das Programm gewirkt hat, sofern Sie nicht wissen, was mit der Kriminalität ohne es geschehen wäre
— sie könnte ohnehin um 20 % gesunken sein, bedingt durch unabhängige wirtschaftliche oder
demografische Trends, was bedeutet, dass das Programm die Lage relativ zum Kontrafaktum tatsächlich
verschlechtert hat, trotz der sich verbessernden Rohzahl. Dies ist der häufigste analytische Fehler
bei Wirkungsbehauptungen im öffentlichen und sozialen Sektor: einen Vorher-Nachher-Vergleich mit
einem Kausalitätsnachweis zu verwechseln. Das Magenta Book stellt ausdrücklich klar, dass
Wirkungsevaluation existiert, um eine kontrafaktische Frage zu beantworten — "welchen Unterschied
hat diese Intervention gemacht?" — und dass ihre Beantwortung erfordert, die nicht eingetretene
Welt zu schätzen, nicht nur zu beschreiben.

Unterschiedliche Methoden konstruieren das Kontrafaktum mit unterschiedlicher Verlässlichkeit, und
staatliche Evaluationsleitlinien ordnen sie entsprechend ein. Randomisierte kontrollierte Studien
(RCTs), bei denen Personen oder Gebiete zufällig einer Intervention zugewiesen werden oder nicht,
erzeugen das stärkste Kontrafaktum, weil die Randomisierung sicherstellt, dass sich Behandlungs- und
Kontrollgruppe im Durchschnitt nur darin unterscheiden, ob sie die Intervention erhalten haben. Das
Cabinet Office und das What Works Network fördern RCTs in der britischen öffentlichen Politik seit
dem "Test, Learn, Adapt"-Bericht des Behavioural Insights Team von 2012, genau weil schwächere
Designs anfällig für Störfaktoren sind — der beobachtete Unterschied könnte widerspiegeln, wer sich
zur Teilnahme entschieden hat, nicht die Wirkung des Programms. Wo Randomisierung unpraktikabel oder
unethisch ist (was bei Programmen mit gesetzlichem Anspruch oder bei
Politikänderungen für die Gesamtbevölkerung oft der Fall ist), legt das Magenta Book eine
ausdrückliche Hierarchie schwächerer, aber weiterhin nützlicher Alternativen fest: gematchte
Vergleichsgruppen, Differenz-von-Differenzen-Designs, Regressionsdiskontinuität um
Anspruchsschwellen und, als letztes Mittel, einfacher Vorher-Nachher-Vergleich — ausdrücklich als
schwächste Evidenzform gekennzeichnet, anfällig dafür, die Wirkung des Programms mit der Wirkung
von allem anderen zu verwechseln, das sich im selben Zeitraum verändert hat.

## Die Berechnung

Die kontrafaktische Rahmung, anwendbar über alle Methoden hinweg:

```
Geschätzte Wirkung = Ergebnis(mit Intervention) − Ergebnis(Kontrafaktum: ohne Intervention)

NICHT:
Geschätzte Wirkung ≠ Ergebnis(nachher) − Ergebnis(vorher)   [vermischt Zeit mit Behandlung]
```

Differenz-von-Differenzen, eines der häufigsten quasi-experimentellen Designs in der staatlichen
Evaluation, isoliert den Behandlungseffekt, indem die eigene Vorher-Nachher-Veränderung der
Vergleichsgruppe abgezogen wird:

```
DiD-Schätzung = [Ergebnis(behandelt, nachher) − Ergebnis(behandelt, vorher)]
              − [Ergebnis(Vergleich, nachher) − Ergebnis(Vergleich, vorher)]
```

Dies entfernt jeden Trend, der beiden Gruppen gemeinsam ist (z. B. eine nationale wirtschaftliche
Verschiebung, die alle betrifft), und lässt nur die differenzielle, der Intervention zurechenbare
Veränderung übrig.

## Beispielrechnung

**Beschäftigungsprogramm, Vorher-Nachher (schwaches Design)**: Ein Arbeitsvermittlungsprogramm
berichtet, dass die Beschäftigung der Teilnehmenden im Jahresverlauf von 40 % auf 55 % stieg — eine
naive Schlussfolgerung von "+15 Prozentpunkte durch das Programm".

**Dasselbe Programm, Differenz-von-Differenzen (stärkeres Design)**: Eine gematchte Vergleichsgruppe
ähnlicher Nicht-Teilnehmender aus demselben lokalen Arbeitsmarkt zeigt einen Beschäftigungsanstieg
von 38 % auf 47 % im selben Jahr (eine nationale wirtschaftliche Erholung war im Gange).

```
Veränderung der behandelten Gruppe:    55 % − 40 % = +15 Prozentpunkte
Veränderung der Vergleichsgruppe:      47 % − 38 % = +9 Prozentpunkte

DiD-Schätzung (wahre Programmwirkung) = 15 − 9 = +6 Prozentpunkte
```

Die ehrlich zurechenbare Wirkung beträgt 6 Prozentpunkte, nicht 15 — mehr als die Hälfte der
scheinbaren Vorher-Nachher-Verbesserung wäre unabhängig vom Programm eingetreten, getragen von
derselben wirtschaftlichen Erholung, die auch die Vergleichsgruppe anhob.

**Regressionsdiskontinuität, Anspruchsschwelle**: Ein Förderprogramm steht nur Unternehmen mit
weniger als 50 Beschäftigten offen. Der Vergleich der Ergebnisse von Unternehmen knapp unter der
Schwelle (45–49 Beschäftigte, anspruchsberechtigt) mit solchen knapp darüber (50–54 Beschäftigte,
nicht anspruchsberechtigt) liefert ein glaubwürdiges Kontrafaktum, weil sich Unternehmen auf beiden
Seiten einer willkürlichen administrativen Grenze ansonsten ähneln — die Schwelle, nicht ein
zugrunde liegendes Unternehmensmerkmal, bestimmt die Anspruchsberechtigung. Ein durchschnittlicher
Ergebnisunterschied von 2.000 £ zwischen den beiden Gruppen, nur an der Schwelle beobachtet, ist mit
weit mehr Zuversicht dem Zuschuss zurechenbar als ein einfacher Vergleich aller anspruchsberechtigten
gegenüber allen nicht anspruchsberechtigten Unternehmen (die sich systematisch in der Größe
unterscheiden).

## Bezug zur Softwareentwicklung

Kontrafaktisches Denken sollte prägen, wie Wirkungsverfolgungssysteme und Evaluations-Pipelines für
staatliche und soziale Software gestaltet werden:

- Bauen Sie die Erfassung von Vergleichsgruppen von Anfang an in ein System ein — erfassen Sie, wer
  anspruchsberechtigt war, aber nicht eingeschrieben wurde, oder eine gematchte Nicht-Teilnehmer-
  Kohorte —, statt dies nachträglich einzubauen, nachdem ein Programm bereits gelaufen ist und nur
  Vorher-Nachher-Daten existieren.
- Wo Randomisierung machbar ist (eine gestaffelte Einführung, ein digitaler Dienst, der für manche
  Nutzenden vor anderen freigeschaltet wird), instrumentieren Sie das System so, dass die zufällige
  Zuweisung als abfragbares Feld erhalten bleibt; eine gestaffelte Einführung zerstört versehentlich
  ihren eigenen Evaluationswert, wenn die Zuweisungsreihenfolge nicht protokolliert wird.
- Dies ist die grundlegende Methode hinter [Methoden der Wirkungsevaluation](../methoden-der-wirkungsevaluation/)
  und unterscheidet sie von [Wirkungsevaluation vs. Prozessevaluation](../wirkungsevaluation-vs-prozessevaluation/),
  bei der gefragt wird, ob ein Programm wie beabsichtigt umgesetzt wurde, statt ob es eine Wirkung
  verursacht hat.
- [Additionalität und Mitnahmeeffekte](../additionalität-und-mitnahmeeffekte/) und
  [Verdrängung und Zurechnung](../verdrängung-und-zurechnung/) sind im Kern beide
  kontrafaktische Fragen — der Mitnahmeeffekt ist "was wäre dieses spezifische Ergebnis ohne die
  Intervention gewesen", angewandt auf Ebene der Anpassung statt des vollständigen
  Evaluationsdesigns.

## Fallstricke

- **Vorher-Nachher als Kausalitätsnachweis behandeln.** Dies ist der häufigste und
  folgenreichste Fehler in der öffentlichen und sozialen Wirkungsberichterstattung; eine
  Vorher-Nachher-Veränderung vermischt die Wirkung des Programms mit allem anderen, das sich im
  selben Zeitraum verändert hat.
- **Eine Vergleichsgruppe verwenden, die sich systematisch von der behandelten Gruppe unterscheidet.**
  Eine gematchte Vergleichsgruppe muss in relevanten Merkmalen wirklich ähnlich sein (siehe die
  Methodenhierarchie der kontrafaktischen Analyse im Magenta Book); Programmteilnehmende (die sich
  freiwillig angemeldet haben und oft motivierter sind) mit Nicht-Teilnehmenden (die dies nicht
  taten) zu vergleichen, birgt das Risiko, dass sich Selektionsverzerrung als Programmwirkung
  ausgibt.
- **Randomisierungsmöglichkeiten durch schlechtes Umsetzungsdesign zerstören.** Eine gestaffelte
  oder randomisierte Einführung behält ihren Evaluationswert nur, wenn die Zuweisung wirklich
  zufällig ist und erfasst wird — lokale Führungskräfte auswählen zu lassen, wer zuerst kommt,
  untergräbt den Zweck.
- **Zu hohe Präzision aus einem schwachen Design behaupten.** Eine Vorher-Nachher-Schätzung sollte
  als indikativ dargestellt werden, nicht als gemessene Effektgröße; die Evidenzhierarchie des
  Magenta Book existiert, damit die Stärke einer Behauptung zur Stärke des Designs passt, das sie
  hervorgebracht hat.

## Quellen

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
