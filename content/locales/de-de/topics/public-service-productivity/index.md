# Produktivität öffentlicher Dienste

Die Produktivität öffentlicher Dienste misst, wie effizient öffentliche Ausgaben Inputs (Personal,
Kapital, Waren und Dienstleistungen) in qualitätsbereinigte Outputs umwandeln, für Dienste —
Gesundheit, Bildung, Polizei, Sozialpflege —, die keinen Marktpreis haben und daher keine
Umsatzzahl, durch die Kosten geteilt werden könnten. Das britische Office for National Statistics
veröffentlicht diese Reihe seit Mitte der 2000er Jahre, und sie bleibt der methodisch am weitesten
entwickelte nationale Versuch, die Frage "wird die Regierung besser oder schlechter darin, Geld in
öffentliche Dienste umzuwandeln?" zu beantworten.

## Warum das wichtig ist

In einem Markt ist Produktivität (Outputwert) / (Inputkosten), und der Outputwert ist beobachtbar,
weil jemand dafür bezahlt. Eine Hüftoperation, ein Schulplatz und eine Polizeistreife haben keinen
Verkaufspreis, sodass Sie naiv nur die *Inputs* (was ausgegeben wurde) messen können — was
Kommentatoren dazu verleitet, steigende öffentliche Ausgaben automatisch als schlecht zu behandeln,
da mehr Input bei gleichbleibender Schlagzeilen-Aktivität wie sinkende Produktivität aussieht. Die
ONS-Methodik, dargelegt in ihren "Sources and Methods"-Veröffentlichungen zur Produktivität
öffentlicher Dienste, löst dies, indem sie einen *Output*-Index aus Aktivitätsvolumina konstruiert
(durchgeführte Operationen, unterrichtete Schülerinnen und Schüler, untersuchte Straftaten) und
diesen Output-Index dann *qualitätsbereinigt* — für Gesundheit unter Einbeziehung von
Überlebensraten und Wartezeiten; für Bildung unter Einbeziehung von Lernerfolg; für Polizeiarbeit
unter Einbeziehung von Ergebnissen wie Fallaufklärung —, sodass ein Dienst, der dieselbe Anzahl von
Operationen durchführt, aber bessere Überlebensraten erreicht, als produktiver registriert wird,
nicht nur als teurer. Der Befund, der sich über ONS-Veröffentlichungen hinweg wiederholt, ist
ernüchternd für den Sektor: Die Produktivität öffentlicher Dienste im Vereinigten Königreich fiel
während der COVID-19-Pandemie stark und hatte sich nach den eigenen Veröffentlichungen des ONS
Mitte der 2020er Jahre in mehreren Teilsektoren einschließlich Gesundheitswesen noch nicht auf das
Niveau von 2019 erholt, selbst während die Ausgaben stiegen — eine Lücke, die "mehr Finanzierung"
und "mehr Produktivität" als zwei völlig getrennte Fragen neu rahmt.

## Die Berechnung

```
Output-Index (Volumen) = Σ (Aktivität_i × relatives Stückkostengewicht_i),
                          basisjahrgewichtet über alle Diensttätigkeiten
                          (z. B. Hüftoperationen, Kataraktoperationen,
                          Hausarztkonsultationen), analog zu einem
                          Laspeyres-/Paasche-Volumenindex

Qualitätsanpassung     = Output-Index × Qualitätsanpassungsfaktor
                          (z. B. unter Einbeziehung einer Veränderung
                          der Überlebensraten, Wartezeiten,
                          Lernerfolge oder Rückfälligkeit als
                          Multiplikator auf das Rohvolumen)

Input-Index            = Σ (Arbeitsstunden × Arbeitskostengewicht) +
                          (Waren-/Dienstleistungskosten, deflationiert)
                          + (Kapitalverbrauch)

Wachstum der totalen Faktorproduktivität = % Veränderung des
                          qualitätsbereinigten Output-Index − %
                          Veränderung des Input-Index
```

## Beispielrechnung

**Illustrative Produktivitätsberechnung für den NHS-Akutsektor** (Struktur folgt der ONS-Methodik):

```
Jahr 1: Output-Volumenindex = 100,0 (Basisjahr), Input-Index = 100,0
        → Produktivitätsindex = 100,0

Jahr 2: Aktivitätsvolumen steigt um 3,0 % (mehr Operationen, mehr
        Termine), aber die durchschnittliche Wartezeit verschlechtert
        sich, was einen Qualitätsanpassungsabschlag von −1,0 % ergibt
        Qualitätsbereinigter Output-Index = 100 × 1,030 × 0,990 = 101,97

        Inputs steigen: Personalzahl +4,0 %, andere Kosten
        (deflationiert) +1,5 %, gewichteter Input-Index = 100 × 1,032
        = 103,2

Produktivitätswachstum = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                        = 1,97 % − 3,2 % = −1,23 Prozentpunkte

Interpretation: Die Aktivität stieg, aber die Inputs stiegen schneller
und die Qualität sank leicht, sodass die Produktivität — Output pro
Inputeinheit — zurückging, obwohl "mehr Versorgung geleistet wurde."
```

Dies ist genau das Muster, das ONS-Veröffentlichungen wiederholt für Teile des NHS nach der
Pandemie berichtet haben: steigende Ausgaben und steigende Rohaktivität koexistieren mit sinkender
gemessener Produktivität, sobald sowohl Qualitätsanpassung als auch Inputwachstum berücksichtigt
werden.

## Bezug zur Softwareentwicklung

Die Produktivität öffentlicher Dienste ist das bevölkerungsweite Gegenstück zu
Ingenieursproduktivitätsdebatten (gelieferte Story Points gegenüber [DORA-Metriken](../dora-metrics-for-public-value/)
gegenüber [Flow-Metriken](../flow-metrics-in-government-delivery/)): rohe Durchsatzmenge ohne
Qualitätsanpassung ist in einem Krankenhaus genauso irreführend wie "gelieferte Codezeilen" in einem
Software-Team. Teams, die Leistungsdaten-Pipelines für Behörden bauen, sollten Qualitätsanpassung
als erstklassige, versionierte Transformationsstufe behandeln, nicht als Fußnote — weil die eigene
Glaubwürdigkeit des ONS darauf beruht, dass diese Anpassung transparent, reproduzierbar und
überarbeitet wird, sobald bessere Qualitätsdaten eintreffen (das ONS überarbeitet
Produktivitätsschätzungen vergangener Jahre, sobald zugrunde liegende Qualitätsdaten — z. B.
Überlebensraten — final festgestellt werden, sodass jedes nachgelagerte System, das diese
Statistiken konsumiert, rückdatierte Überarbeitungen verarbeiten muss, nicht nur neue Perioden
anhängen darf). Dies berührt auch direkt [Gesamtbetriebskosten](../total-cost-of-ownership-in-government-it/)
und [KI-Produktivität im öffentlichen Sektor](../ai-productivity-in-the-public-sector/): Ein System,
das das rohe Aktivitätsvolumen erhöht, ohne Qualität zu verbessern oder zu erhalten, ist nach der
eigenen Definition des ONS keine Produktivitätsverbesserung.

## Fallstricke

- **Inputwachstum mit Produktivitätswachstum verwechseln**: Mehr Ausgaben, die mehr Personal
  finanzieren, erzeugen mehr *Aktivität*, nicht mehr *Produktivität*, sofern nicht auch der Output
  pro Inputeinheit steigt — beides wird in politischer Kommentierung routinemäßig vermischt.
- **Qualitätsanpassung vollständig ignorieren**: Ein Output-Index, der nur aus rohen
  Aktivitätszahlen gebildet wird, zeigt "Produktivitätsgewinne" durch mehr von etwas
  Geringwertigerem oder Minderwertigerem; die Qualitätsanpassung des ONS existiert genau, um dies
  zu erfassen.
- **Produktivitätsindizes über Teilsektoren hinweg ohne passende Methodikversion vergleichen**:
  Gesundheits-, Bildungs- und Polizeiproduktivität werden jeweils aus unterschiedlichen
  Aktivitäts- und Qualitätsdatenquellen mit unterschiedlichen Überarbeitungszyklen gebildet — ein
  naiver sektorübergreifender Vergleich vergleicht inkompatible Instrumente.
- **Einen einzelnen Jahresrückgang der Produktivität als dauerhaften Trend lesen**: Pandemie- und
  Post-Pandemie-Produktivitätszahlen haben erhebliche Jahr-für-Jahr-Volatilität gezeigt, während
  sich Qualitätsdaten (z. B. Wartelisten, elektive Erholung) selbst veränderten; das ONS mahnt
  konsequent davor, Einzeljahresbewegungen zu überinterpretieren.

## Quellen

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
