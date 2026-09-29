# Nutzenrealisierung

Nutzenrealisierungsmanagement ist die Disziplin, zu identifizieren, eine Basislinie zu erfassen,
nachzuverfolgen und *zu belegen*, dass die in einem Business Case versprochenen Nutzen nach dem
Livegang tatsächlich eintraten. In britischen öffentlichen Investitionen lebt sie innerhalb von HM
Treasurys Fünf-Fälle-Modell des Green Book und der eigenen Nutzenmanagement-Leitlinie der
Infrastructure and Projects Authority; ohne sie bleibt "das System sparte Sachbearbeitenden
dreißig Minuten pro Antrag" für immer eine ungeprüfte Behauptung.

## Warum das wichtig ist

Business Cases sind Versprechen; Nutzenrealisierung ist die Prüfung. Das Green Book verlangt, dass
jeder Ausgabenfall fünf Tests besteht — strategisch, wirtschaftlich, kommerziell, finanziell und
Management —, und der Managementfall muss darlegen, wie Nutzen realisiert werden, *vor der
Genehmigung*: Verantwortliche benannt, Basislinien erfasst und Messdaten festgelegt. Der Leitfaden
der Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for
Government Major Projects* (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>),
existiert, weil die eigene Portfolioberichterstattung der IPA zum Government Major Projects
Portfolio Lieferzuversicht und Nutzenrealisierung wiederholt als wiederkehrende Schwächen über
Großprogramme hinweg genannt hat. Ein Projekt kann seine Liefermeilensteine "pünktlich und im
Budget" abschließen und dennoch daran scheitern, die Nutzen zu realisieren, die die Ausgabe des
Geldes überhaupt erst rechtfertigten — eine Unterscheidung, die die Leitlinie der IPA als den
gesamten Sinn der Disziplin behandelt.

## Die Berechnung

```
Realisierungsrate = realisierter Nutzen / prognostizierter Nutzen
                     (pro Nutzen, pro Periode)

Mechanik, die sie berechenbar macht:
  Basislinie erfasst VOR dem Livegang (sonst ist die Differenz nicht
  messbar)
  jeder Nutzen: benannte verantwortliche Person, Kennzahl,
  Datenquelle, Messplan
  Prognose bei Bewertung um Optimismus-Bias angepasst (Green-Book-
  Vorgabe)
  Nutzen klassifiziert als kassenwirksam/kapazitätsfreisetzend/
  qualitativ, getrennt verfolgt und berichtet
```

## Beispielrechnung

**Kommunalverwaltung**: Der Business Case eines digitalen Bauantragsportals versprach pro Jahr:
300.000 £ Reduktion der Druck- und Postgemeinkosten (Bar), 4.500 freigesetzte Beamtenstunden
(Kapazität) und verbesserte Antragstellerzufriedenheit (qualitativ). Zwölf Monate nach dem
Livegang:

```
Nutzen              Prognose    Realisiert  Rate   Beleg
Bareinsparungen      300.000 £   210.000 £   70 %   Finanzbuch vs.
                                                     Basisjahr
Beamtenstunden       4.500       3.200       71 %   Zeit-Bewegungs-
                                                     Stichprobe
Zufriedenheit        +8 PP       +11 PP      138 %  Antragsteller-
                                                     erhebungsdaten

Maßnahmen aus der Überprüfung (der Sinn der Nutzenrealisierung):
Barfehlbetrag zurückverfolgt auf zwei Dienstbereiche, die
ausnahmsweise noch Papieranträge bearbeiten → Ausnahmeweg schließen;
Optimismus-Bias-Korrektur des nächsten Business Case von 10 % auf
25 % angehoben, basierend auf dem Prognosefehler dieses Falls.
```

Eine Realisierungsrate von 70 % ist kein Scheitern — es ist Wissen, das die nächste Prognose besser
kalibrieren lässt. Ein ungemessener Fall hätte für immer 100 % behauptet, und das Finanzteam hätte
keine Grundlage gehabt, dies anzufechten.

## Bezug zur Softwareentwicklung

Technische Organisationen genehmigen Plattform- und Werkzeuginvestitionen routinemäßig aufgrund
prognostizierten Nutzens und prüfen sie fast nie nachträglich — genau die Pathologie, die
Nutzenrealisierungsmanagement beheben soll. Die leichtgewichtige Übertragung: Jeder Vorschlag
über einer Wesentlichkeitsschwelle benennt eine verantwortliche Person für den Nutzen, eine
Basiskennzahl und ein festes Überprüfungsdatum (typischerweise sechs Monate nach Livegang), und
Realisierungsraten früherer Vorschläge sollten beeinflussen, wie sehr die Organisation der nächsten
Prognose eines Teams oder Anbieters vertraut. Dies schließt den Kreis zurück zur
[Green-Book-Bewertung](../green-book-appraisal/), die die Prognose festlegt, die diese Disziplin
prüft, und es ist dieselbe Logik hinter dem breit berichteten Befund, dass eine große Mehrheit
generativer-KI-Pilotprojekte keine messbare Rendite zeigt — siehe
[KI-Produktivität im öffentlichen Sektor](../ai-productivity-in-the-public-sector/) —, weil die
Pilotprojekte, die *doch* Wert lieferten, fast ohne Ausnahme diejenigen mit einer von Anfang an
benannten, verfolgbaren Nutzenzeile waren. Es hängt auch davon ab, zu unterscheiden, was
tatsächlich geliefert wurde, von dem, was tatsächlich realisiert wurde — siehe
[Ergebnisse vs. Leistungen](../outcomes-vs-outputs/).

## Fallstricke

- **Keine Basislinie vor Livegang**: die fatale, unbehebbare Auslassung — ohne sie kann nie eine
  Realisierungsrate berechnet werden, nur behauptet.
- **Verwaiste Nutzen**: Ein Nutzen ohne benannte verantwortliche Person hat niemanden, der die
  Daten erhebt, und jede Portfolioüberprüfung berichtet ihn standardmäßig als "grob im Plan".
- **Doppelt gezählte Nutzen über ein Programmportfolio hinweg**: zwei Projekte, die beide dieselbe
  freigesetzte Sachbearbeitungskapazität als ihren Nutzen beanspruchen — führen Sie ein einziges
  Nutzenregister über das gesamte Portfolio, um dies zu erfassen.
- **Realisierungstheater**: die leichten qualitativen Erfolge prominent messen und berichten,
  während die Bar- und Kapazitätszeilen still unbeachtet bleiben.
- **Lieferung mit Realisierung verwechseln**: Ein Projekt, das seine Meilensteine "pünktlich und im
  Budget" abschließt, sagt nichts darüber aus, ob der prognostizierte Nutzen je tatsächlich
  eintrat — die Leitlinie der IPA behandelt dies als zwei getrennte Fragen mit zwei getrennten
  Belegspuren.

## Quellen

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
