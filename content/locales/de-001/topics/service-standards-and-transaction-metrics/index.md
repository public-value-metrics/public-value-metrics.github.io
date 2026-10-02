# Servicestandards und Transaktionskennzahlen

Der GOV.UK Service Standard ist die 14-Punkte-Checkliste der britischen Regierung zum Bau und
Betrieb eines öffentlichen digitalen Dienstes, und er wird mit einem kleinen, verpflichtenden Set
quantitativer Transaktionskennzahlen gepaart — Kosten pro Transaktion, Abschlussrate, digitale
Nutzungsrate und Nutzerzufriedenheit —, die Teams für jeden laufenden Dienst der Zentralregierung
veröffentlichen müssen. Zusammen sind der Standard und die Kennzahlen die operative,
tagtägliche Spezialisierung der breiteren Rahmenwerke zu öffentlichem Wert und KPIs in diesem
Repository, direkt auf Softwareliefer-Teams ausgerichtet.

## Warum das wichtig ist

Der Service Standard, gepflegt im GOV.UK-Service-Manual, verlangt, dass jede Zeitpunktbewertung
(Alpha, Beta, Live) eines digitalen Regierungsdienstes — unter seinen 14 Punkten — nachweist, dass
das Team Nutzerbedürfnisse versteht, in einem multidisziplinären Team arbeitet, häufig iteriert und
verbessert und *Werkzeuge, Systeme und Arbeitsweisen bewertet*. Historisch stand dies neben einer
öffentlichen Performance Platform, auf der jeder laufende Dienst seine Transaktionsdaten offen
veröffentlichte; diese Plattform wurde inzwischen eingestellt, aber die zugrunde liegende Pflicht,
diese vier Kernkennzahlen zu messen und zu veröffentlichen, besteht über die Leitlinie "Measuring
Success" des Service Manual fort. Der Grund, warum sich dies von einem generischen
Software-KPI-Dashboard unterscheidet, ist, dass diese Kennzahlen ausdrücklich als ein verknüpftes
ökonomisches Modell entworfen wurden, nicht als vier unabhängige Werte: Der gesamte Einsparungsfall
für digitale Regierung — der Digital Efficiency Report des Government Digital Service fand digitale
Transaktionen etwa 20-mal günstiger als telefonisch und etwa 50-mal günstiger als persönlich für
vergleichbare kommunale Dienste — materialisiert sich nur, wenn die Abschlussrate hoch bleibt und
die digitale Nutzungsrate wirklich steigt, statt lediglich einen billigen Kanal neben einem
unveränderten teuren hinzuzufügen.

## Die Berechnung

```
Kosten pro Transaktion = Gesamtbetriebskosten des Dienstes / Anzahl
                          abgeschlossener Transaktionen
Abschlussrate            = abgeschlossene Transaktionen / begonnene
                          Transaktionen × 100
Digitale Nutzungsrate    = Transaktionen im digitalen Kanal / alle
                          Kanal-Transaktionen × 100
Nutzerzufriedenheit      = % zufrieden + sehr zufrieden, dienstinterne
                          5-Punkte-Erhebung

Kanalverlagerungs-Einsparung = Transaktionsvolumen × Nutzungsverlagerung
                          × (Kosten pro Transaktion im alten Kanal −
                          Kosten pro Transaktion digital)

Kosten durch Fehlbedarf   = (1 − Abschlussrate) × digital versuchte
                          Transaktionen × Kosten des Ausweichkanals,
                          den diese Nutzenden stattdessen verwenden
```

## Beispielrechnung

**Illustrativer Lizenzverlängerungsdienst der Zentralregierung**, 2 Millionen Transaktionen/Jahr,
derzeit 65 % Telefon (3,00 £/Transaktion) und 35 % digital (0,30 £/Transaktion), Abschlussrate
80 %. Eine Neugestaltung gemäß dem 14-Punkte-Service-Standard hebt die digitale Nutzungsrate auf
60 % und den Abschluss auf 92 %:

```
Einsparung durch Nutzungsverlagerung = 2.000.000 × 0,25 × (3,00 − 0,30)
                                       = 1.350.000 £/Jahr

Kosten durch Fehlbedarf, vorher:
  2.000.000 × 0,35 × (1 − 0,80) × 3,00 £ = 420.000 £/Jahr (Abbrecher
  weichen auf Telefon aus)

Kosten durch Fehlbedarf, nachher:
  2.000.000 × 0,60 × (1 − 0,92) × 3,00 £ = 288.000 £/Jahr

Netto-Einsparung durch Fehlbedarf = 420.000 £ − 288.000 £ = 132.000 £/Jahr

Gesamte Jahreseinsparung ≈ 1.350.000 £ + 132.000 £ = 1.482.000 £/Jahr
```

Die Rechnung macht ausdrücklich, warum die Abschlussrate keine Nebenkennzahl ist: Ohne die
Verbesserung von 80 % auf 92 % würde die Einsparung durch Nutzungsverlagerung teilweise
zurückgeholt, weil Fehlbedarf frustrierte digitale Nutzende direkt zurück in den teuren
Telefonkanal leitet.

## Bezug zur Softwareentwicklung

Diese vier Kennzahlen sind ein funktionierendes Beispiel für ein Kosten-Konsequenz-Dashboard: eine
Kostenkennzahl, getrennt von drei Ergebnis-/Qualitätskennzahlen gehalten, absichtlich nie zu einem
einzigen Wert verdichtet — dieselbe Disziplin, für die in [KPIs im öffentlichen Sektor](../public-sector-kpis/)
argumentiert wird. Für Ingenieurinnen und Ingenieure zerfällt dies in konkrete, übernehmbare
Arbeit: Die Abschlussrate ist ein Trichter-Instrumentierungsproblem, und jeder Abbruchpunkt in der
Reise ist im Prinzip auffindbar und behebbar; Kosten pro Transaktion erfordern echte
Stückkostenrechnung einschließlich personalunterstützter und Papierkanalkosten, nicht nur
Cloud-Hosting-Ausgaben (siehe [Kosten pro Transaktion](../cost-per-transaction/) und
[Gesamtbetriebskosten in der öffentlichen IT](../total-cost-of-ownership-in-government-it/)); und
die digitale Nutzungsrate ist eine Fairnesskennzahl im Kostüm einer Effizienzkennzahl — die
Bürgerinnen und Bürger, die den Kanal nicht wechseln können oder wollen, sind überproportional
älter, behindert oder digital ausgeschlossen, sodass aggressive Kanalschließung eine "Einsparung" in
einen Zugangsschaden verwandelt (siehe [digitale Inklusion](../digital-inclusion/) und
[Kanalverlagerungs-Einsparungen](../channel-shift-savings/)). Der 14-Punkte-Standard selbst ist die
Prozessspezifikation hinter diesen Zahlen — siehe [Digitaler Servicestandard](../digital-service-standard/)
für den vollständigen Standard, und [Metriken zur Bürgerzufriedenheit](../citizen-satisfaction-metrics/)
dazu, wie sich der Zufriedenheitswert hier zur breiteren Vertrauensmessung verhält.

## Fallstricke

- **Nutzungsrate durch Schließung des Alternativkanals gewonnen**: Eine Telefonleitung zu schließen,
  hebt den digitalen Nutzungsratenprozentsatz arithmetisch, während Fehlbedarf auf den
  verbleibenden Kanal abgeladen wird (oft ein teurerer unterstützter digitaler oder persönlicher
  Weg); messen Sie stets die Gesamtsystemkosten, nicht nur das Verhältnis.
- **Abschlussrate ab Schritt zwei des Trichters messen**: Den "begonnen"-Zähler erst nach dem
  ersten echten Abbruchpunkt zu starten, schönt die Abschlussrate und verbirgt den größten
  behebbaren Verlust.
- **Kosten pro Transaktion ohne unterstützte digitale Hilfe**: Eine nur-digitale Stückkostenrechnung,
  die die für Nutzende ohne Selbstbedienungsfähigkeit aufgewendete Personalzeit ignoriert,
  unterschätzt die wahren Kosten des Kanals.
- **Kennzahlen ohne geteilte Definition über Dienste hinweg veröffentlichen**: "Transaktion" und
  "abgeschlossen" bedeuten je nach Diensteteam Unterschiedliches, sofern die Definitionen nicht
  standardisiert und versioniert sind, was den dienstübergreifenden Vergleich unzuverlässig macht.

## Quellen

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
