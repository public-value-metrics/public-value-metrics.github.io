# Additionalität und Mitnahmeeffekte

Additionalität fragt, ob eine Intervention ein Ergebnis verursacht hat, das sonst nicht eingetreten
wäre. Der Mitnahmeeffekt (Deadweight) ist ihr Spiegelbild: der Anteil eines Ergebnisses, der ohnehin
eingetreten wäre, auch ohne das Programm, den Zuschuss oder die Förderung. Fast jede
Wirkungsbehauptung eines Regierungsprogramms oder einer Wohltätigkeitsorganisation überzeichnet
ihre Wirkung, solange der Mitnahmeeffekt nicht abgezogen wird — weshalb britische
Evaluationsleitlinien ihn als die erste und wichtigste Anpassung jeder Schlagzeilenzahl behandeln.

## Warum das wichtig ist

"Wir haben 500 Unternehmen beim Wachstum unterstützt" klingt nach einer Leistung, aber wenn 300
dieser Unternehmen ohnehin gewachsen wären — weil sich die lokale Wirtschaft erholte, weil sie
andere Finanzierungswege hatten, weil sie schon vor Programmbeginn auf Wachstumskurs waren —, dann
beträgt der wahre zusätzliche Beitrag des Programms 200, nicht 500. HM Treasurys Magenta Book und
der langjährige "Additionality Guide" von HM Treasury/BIS (ursprünglich für regionale
Entwicklungs- und Regenerationsprogramme entwickelt und seither in der britischen
Regierungsevaluation breit verwendet) formalisieren den Mitnahmeeffekt als die erste Anpassung in
der Standardsequenz der Nettowirkung: Bruttoeffekt minus Mitnahmeeffekt, minus Verdrängung, minus
Abfluss, angepasst um Multiplikatoreffekte, ergibt die zusätzliche Nettowirkung. Diesen Schritt zu
überspringen ist die häufigste Art und Weise, wie Wirkungsbehauptungen im öffentlichen und sozialen
Sektor aufgebläht werden, ob absichtlich oder nicht — ein Förderprogramm, das nur
Bruttoergebnisse der Teilnehmenden misst, ohne Vergleichsgruppe, kann seine eigene Wirkung nicht
von dem unterscheiden, was ohnehin eingetreten wäre.

Der Mitnahmeeffekt ist kein fester Prozentsatz; er hängt vollständig vom Kontrafaktum für die
jeweilige Population und Intervention ab (siehe [kontrafaktische Analyse](../counterfactual-analysis/)).
Englische Evaluationen der regionalen Entwicklung unter den früheren Regional Development Agencies
fanden je nach Art der Unternehmensförderung häufig Mitnahmeeffekte im Bereich von 20–60 %, weshalb
glaubwürdige Programmevaluationen eine um den Mitnahmeeffekt bereinigte Spanne berichten statt einer
einzelnen angenommenen Zahl, und weshalb Geldgeber wie der National Lottery Community Fund und Big
Society Capital von Zuschussempfängern verlangen, den Mitnahmeeffekt in der Ergebnisberichterstattung
ausdrücklich zu adressieren, statt Brutto-Teilnehmerzahlen zu melden.

## Die Berechnung

Die Standardsequenz der Nettowirkungsanpassung, wie sie in britischen Evaluationsleitlinien
festgelegt ist (Magenta Book; HM-Treasury/BIS-Additionality-Guide; ESIF- und
Strukturfonds-Evaluationsleitlinien):

```
Bruttoergebnis
  − Mitnahmeeffekt   (was ohnehin eingetreten wäre)
  − Verdrängung      (Aktivität/Nutzen von anderswo verlagert, nicht
                       neu geschaffen — siehe displacement-and-attribution)
  − Abfluss          (Nutzen, der außerhalb der Zielgruppe/des Zielgebiets anfällt)
  × Multiplikator     (zusätzliche indirekte/induzierte Wirtschaftstätigkeit, sofern positiv)
  = Zusätzliche Nettowirkung
```

Mitnahmeeffekt-Rate als Anteil:

```
Mitnahmeeffekt-Rate = Ergebnisse, die ohne die Intervention eingetreten wären
                       / gesamte beobachtete Bruttoergebnisse

Zusätzliche Nettoergebnisse = Bruttoergebnisse × (1 − Mitnahmeeffekt-Rate)
```

## Beispielrechnung

**Unternehmensförderungsprogramm**: Ein regionales Förderprogramm berichtet, dass 500 geförderte
Unternehmen im Folgejahr die Beschäftigung steigerten, im Schnitt um 3 Stellen je Unternehmen — eine
Bruttobehauptung von 1.500 Stellen.

Eine gematchte Vergleichsgruppe ähnlicher nicht geförderter Unternehmen (siehe
[kontrafaktische Analyse](../counterfactual-analysis/)) zeigt, dass 40 % des
Beschäftigungswachstums der geförderten Unternehmen ohnehin eingetreten wäre, basierend darauf, wie
sich die gematchte Gruppe im selben Zeitraum entwickelte.

```
Mitnahmeeffekt-Rate = 40 %
Zusätzliche Nettostellen = 1.500 × (1 − 0,40) = 900 Stellen
```

Die ehrlich berichtbare Leistung des Programms sind 900 Stellen, nicht 1.500 — eine Reduktion um
40 % allein durch die Mitnahmeeffekt-Anpassung, noch bevor Verdrängung oder Abfluss überhaupt
berücksichtigt werden.

**Beschäftigungsprogramm einer Wohltätigkeitsorganisation**: Eine Organisation vermittelt 200
Langzeitarbeitslose zu Kosten von 600.000 £ (3.000 £ pro Vermittlung, brutto) in Arbeit. Nationale
Arbeitsmarktdaten zeigen, dass ohne jede Intervention etwa 15 % einer vergleichbaren
Langzeitarbeitslosen-Kohorte im selben Zeitraum durch natürliche Arbeitsmarktfluktuation Arbeit
findet.

```
Mitnahmeeffekt-Rate = 15 %
Zusätzliche Nettovermittlungen = 200 × (1 − 0,15) = 170
Wahre Kosten pro zusätzlicher Vermittlung = 600.000 £ / 170 ≈ 3.529 £
```

Die Brutto-Kosten-pro-Vermittlung-Zahl (3.000 £) unterschätzt die wahren Kosten des zusätzlichen
Beitrags der Organisation um etwa 15 %.

## Bezug zur Softwareentwicklung

Additionalität und Mitnahmeeffekte sind unmittelbar relevant für alle, die Software zur
Wirkungsmessung oder Zuschussverwaltung für den öffentlichen oder sozialen Sektor bauen:

- Ergebnisberichtssysteme sollten von vornherein eine Vergleichs- oder Basisgruppe erfassen, nicht
  nur Teilnehmerergebnisse — ein Kontrafaktum nachträglich in ein System einzubauen, das ohne eines
  gestartet ist, ist weit schwieriger, als die Erfassung von Anfang an einzubauen (siehe
  [kontrafaktische Analyse](../counterfactual-analysis/)).
- Dashboards, die nur Brutto-Teilnehmerzahlen melden, überzeichnen die Wirkung gegenüber Geldgebern
  und Aufsichtsgremien systematisch; wo Schätzungen des Mitnahmeeffekts vorliegen (aus der
  Evaluationsliteratur oder einer Vergleichsgruppe), sollte die Software die um den Mitnahmeeffekt
  bereinigte Zahl neben der Bruttozahl anzeigen, nicht statt ihrer.
- Dies verknüpft sich unmittelbar mit [sozialer Kapitalrendite](../social-return-on-investment/),
  deren SROI-Verhältnis nur dann glaubwürdig ist, wenn Mitnahmeeffekt (und Verdrängung) von den
  behaupteten Bruttoergebnissen abgezogen wurden — ein SROI-Rechner, der diesen Schritt auslässt,
  erzeugt aufgeblähte Verhältnisse, die einer Prüfung nicht standhalten.

## Fallstricke

- **Bruttoergebnisse melden, als wären sie vollständig zusätzlich.** Dies ist der häufigste
  Wirkungsmessfehler in der Zuschuss- und Programmberichterstattung; fragen Sie stets "wäre das
  ohnehin passiert?", bevor Sie eine Schlagzeilenzahl veröffentlichen.
- **Annehmen, ein einzelner Mitnahmeeffekt-Prozentsatz gelte überall.** Der Mitnahmeeffekt variiert
  stark nach Sektor, Population und lokalen Wirtschaftsbedingungen; verwenden Sie eine
  Vergleichsgruppe oder sektorspezifische Evidenz, statt eine Zahl aus einer unabhängigen
  Evaluation wiederzuverwenden.
- **Mitnahmeeffekt mit Verdrängung verwechseln.** Der Mitnahmeeffekt betrifft kontrafaktische
  Ergebnisse für dieselben Teilnehmenden; Verdrängung betrifft Effekte auf andere Menschen oder
  Orte — siehe [Verdrängung und Zurechnung](../displacement-and-attribution/). Beides zu
  vermischen führt zu Doppel- oder Unterzählung der Anpassung.
- **Selbstberichteter Mitnahmeeffekt von Teilnehmenden.** Begünstigte zu fragen "wäre das ohne
  unsere Hilfe passiert?" erzeugt systematisch zu niedrige Schätzungen des Mitnahmeeffekts
  (Teilnehmende neigen dazu, das Programm anzurechnen); eine unabhängige Vergleichsgruppe ist weit
  zuverlässiger.

## Quellen

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on deadweight, displacement, and leakage in structural-funds evaluation.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
