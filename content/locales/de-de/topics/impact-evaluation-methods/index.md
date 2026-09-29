# Methoden der Wirkungsevaluation

Methoden der Wirkungsevaluation sind die statistischen und experimentellen Designs, die verwendet
werden, um zu schätzen, was eine Politik oder ein Programm tatsächlich verursacht hat, im
Unterschied dazu, was ohnehin passiert wäre — randomisierte kontrollierte Studien (RCTs),
Differenz-von-Differenzen, Propensity-Score-Matching und Regressionsdiskontinuitätsdesign sind die
vier in der britischen öffentlichen Politik am häufigsten verwendeten. Sie existieren, weil sich die
meisten staatlichen Interventionen nicht in einem Labor testen lassen: Man kann nicht randomisieren,
welche Stadt eine neue Buslinie bekommt, so wie man randomisieren kann, welcher Patient ein
Medikament bekommt, sodass diese Methoden dieselbe Kausallogik übernehmen, ohne immer eine
zufällige Zuweisung zu erfordern.

## Warum das wichtig ist

HM Treasurys Magenta Book, Anhang A zu quasi-experimentellen Methoden, ist die maßgebliche
Leitlinie der britischen Regierung zur Wahl zwischen diesen Designs, und Institutionen wie die
Education Endowment Foundation und das What Works Centre for Local Economic Growth
institutionalisieren eine darauf aufbauende Evidenzhierarchie — RCTs, wo Randomisierung machbar und
ethisch ist, quasi-experimentelle Designs, wo sie es nicht ist. Die Methodenwahl ist kein
technischer Nachgedanke: Sie bestimmt, ob eine Evaluation "hat das Programm dies verursacht?" oder
nur "geschah dies, nachdem das Programm begann?" beantworten kann — dieselbe Frage, die
[kontrafaktische Analyse](../counterfactual-analysis/) Praktizierende zwingen soll zu stellen,
bevor eine Evaluation überhaupt in Auftrag gegeben wird.

## Die Berechnung

```
RCT:
  Wirkung = Mittelwert(Ergebnis | Behandlungsgruppe) − Mittelwert(Ergebnis
            | Kontrollgruppe)
  (gültig, weil die Zuweisung zur Behandlung zufällig erfolgt)

Differenz-von-Differenzen (DiD):
  Wirkung = [Ergebnis_nachher(behandelt) − Ergebnis_vorher(behandelt)]
          − [Ergebnis_nachher(Kontrolle) − Ergebnis_vorher(Kontrolle)]
  (erfordert eine Annahme "paralleler Trends": Behandlungs- und
   Kontrollgruppe hätten sich ohne die Intervention gleich entwickelt)

Propensity-Score-Matching (PSM):
  1. P(Behandlung = 1 | Kovariaten X) für jede Einheit schätzen →
     Propensity-Score
  2. Behandelte Einheiten mit unbehandelten Einheiten ähnlichen
     Propensity-Scores matchen
  3. Wirkung = Mittelwert(Ergebnis | behandelt) − Mittelwert(Ergebnis |
     gematchte Kontrolle)

Regressionsdiskontinuitätsdesign (RDD):
  Wirkung = beobachteter Sprung im Ergebnis an der Anspruchsschwelle,
            Vergleich von Einheiten knapp über vs. knapp unter der
            Grenze
```

## Beispielrechnung

**Kommunalverwaltung (Differenz-von-Differenzen für ein Programm für Problemfamilien)**: Das
Ergebnis ist Schulbesuch. Das behandelte Gebiet steigt über die Programmlaufzeit von 84 % auf 89 %
Besuchsquote (+5 Prozentpunkte); ein vergleichbares, aber unbehandeltes Gebiet steigt im selben
Zeitraum von 85 % auf 87 % (+2 Prozentpunkte). DiD-Wirkungsschätzung: 5 − 2 = +3 Prozentpunkte, dem
Programm zurechenbar. Angewendet auf eine Kohorte von 2.000 Schülern im behandelten Gebiet ist dies
konsistent mit etwa 60 zusätzlichen Schülern (3 % × 2.000), die die höhere Besuchskategorie
erreichen — eine Extrapolation, die mit ihrem Vorbehalt paralleler Trends berichtet werden sollte,
nicht als präzise Kopfzahl.

**Wohltätigkeitsorganisation (Propensity-Score-Matching für eine Beschäftigungsfähigkeits-Organisation)**:
300 Programmteilnehmende werden mit 300 Personen aus einem größeren Verwaltungsdatensatz mittels
Propensity-Scores gematcht, gebildet aus Alter, vorheriger Beschäftigungshistorie und
Qualifikationsniveau. Beschäftigungsrate nach zwölf Monaten: gematchte behandelte Gruppe 46 %,
gematchte Vergleichsgruppe 33 %. PSM-Wirkungsschätzung: 46 % − 33 % = +13 Prozentpunkte, dem
Programm zurechenbar, bedingt darauf, dass kein unbeobachteter Störfaktor (etwa Motivation) sowohl
Teilnahme als auch Ergebnis antreibt.

## Bezug zur Softwareentwicklung

Ob eines dieser Designs später machbar ist, hängt stark von früh getroffenen
Datentechnik-Entscheidungen ab. RDD braucht eine akkurat erfasste laufende Variable und eine
wirklich saubere Anspruchsschwelle; DiD braucht vergleichbare Paneldaten über die Zeit für sowohl
behandelte als auch Vergleichsgebiete, was konsistente Verknüpfungen über Systeme und Jahre hinweg
bedeutet; PSM braucht reichhaltige Basislinien-Kovariatendaten, die vor der Behandlung erfasst
wurden, nicht nachträglich rekonstruiert. Ein Datenmodell, das von Anfang an zusammen mit einer
[Theorie des Wandels](../theory-of-change/) und einem [Wirkungsmodell](../logic-model/) gestaltet
wird — das Basislinien-Kovariaten, Daten und vergleichsgruppenfähige Datensätze erfasst — macht
eine rigorose Wirkungsevaluation später möglich, statt eines teuren nachträglichen Gerangels. Siehe
[Wirkungsevaluation vs. Prozessevaluation](../impact-evaluation-vs-process-evaluation/) für die
ergänzende Frage, die diese Methoden allein nicht beantworten.

## Fallstricke

- **Ein RCT erzwingen, wo es unmachbar oder unethisch ist**, oder umgekehrt ein
  quasi-experimentelles Design nie in Betracht ziehen, wenn eine echte Gelegenheit dafür — eine
  Politikgrenze, eine gestaffelte Einführung — verfügbar war und ungenutzt blieb.
- **Die Annahme paralleler Trends bei DiD ignorieren.** Wenn sich das Vergleichsgebiet bereits vor
  der Intervention vom behandelten Gebiet unterschiedlich entwickelte, ist der Zwei-Punkt-Vergleich
  kontaminiert; prüfen Sie Vor-Trends, nicht nur Vorher/Nachher.
- **Bei PSM nur nach beobachteten Kovariaten matchen.** Unbeobachtete Selektion, etwa die
  Motivation der Teilnehmenden, kann die Schätzung verzerren, selbst wenn beobachtete Kovariaten gut
  ausgeglichen sind.
- **Manipulation der laufenden Variable bei RDD.** Wenn Menschen ihren Wert so beeinflussen können,
  dass er knapp innerhalb einer Anspruchsschwelle liegt, isoliert die Diskontinuität keinen
  kausalen Effekt mehr.

## Quellen

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
