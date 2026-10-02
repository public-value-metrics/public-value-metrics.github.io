# Bezahlung nach Ergebnis und Sozialwirkungsanleihen (PbR/SIBs)

Payment by Results (PbR, Bezahlung nach Ergebnis) bezahlt eine anbietende Stelle basierend auf
verifizierten erreichten Ergebnissen, nicht auf durchgeführten Aktivitäten. Ein Social Impact Bond
(SIB, Sozialwirkungsanleihe) ist eine spezifische PbR-Finanzierungsstruktur, bei der private oder
philanthropische Investoren die Diensterbringung im Voraus finanzieren und nur dann — mit einer
Rendite — von einem staatlichen Auftraggeber zurückgezahlt werden, wenn unabhängig gemessene
Ergebnisse vereinbarte Schwellenwerte erreichen, was das Lieferrisiko vom Steuerzahler auf die
Investoren verlagert.

## Warum das wichtig ist

Der weltweit erste SIB startete im September 2010 im HMP Peterborough: Social Finance beschaffte
5 Millionen £ von 17 Investoren, um den "One Service" zu finanzieren, der mit kurz verurteilten
Gefangenen (unter 12 Monaten) arbeitete, um Rückfälligkeit zu senken, wobei das Justizministerium und
der Big Lottery Fund vereinbarten, Investoren nur zurückzuzahlen, wenn Wiederverurteilungsereignisse
um mindestens 7,5 % gegenüber einer gematchten nationalen Vergleichskohorte sanken. Die
Abschlusskohorte des Peterborough-Pilotprojekts verzeichnete eine Reduktion der Wiederverurteilungen
um 9,7 %, komfortabel über der Schwelle, und Investoren wurden mit einer Rendite zurückgezahlt. Der
Mechanismus war wichtig, weil er ein spezifisches Beschaffungsproblem löste: Die Regierung wollte für
Ergebnisse statt für Inputs zahlen, konnte aber das finanzielle Risiko einer Intervention, die
möglicherweise nicht wirkt, nicht tragen, sodass die SIB-Struktur dieses Risiko auf Investoren
verlagerte, die bereit waren, es zu übernehmen. Das Government Outcomes Lab (GO Lab) an Oxfords
Blavatnik School of Government pflegt heute die vollständigste öffentliche Evidenzgrundlage zur
PbR- und SIB-Leistung weltweit, verfolgt weit über 200 Impact Bonds global und veröffentlicht
Forschung dazu, welche Designmerkmale mit Erfolg oder Scheitern korrelieren. Die Lektion, zu der die
Evidenzgrundlage immer wieder zurückkehrt: Die *gewählte Ergebniskennzahl* und wer das Risiko trägt,
sie zu verfehlen, bestimmt fast alles andere darüber, wie sich ein PbR-Vertrag in der Praxis
tatsächlich verhält.

## Die Berechnung

```
PbR-Zahlung = Grundzahlung (falls vorhanden) + Σ (erreichtes Ergebnis
              × Stückpreis pro Ergebnis)

Rendite des Social-Impact-Bond-Investors:
  Investoreneinsatz = im Voraus eingesetztes Kapital für die
                       Diensterbringung
  Ergebniszahlung    = Auftraggeber zahlt nur, wenn Ergebnis ≥ Schwelle,
                       skaliert danach, wie weit die Leistung über der
                       Schwelle liegt
  Investorenrendite  = erhaltene Ergebniszahlungen − Investoreneinsatz
                       (eine oft gedeckelte Rendite, die das
                       eingegangene Risiko widerspiegelt)

Zentrale Designparameter, die das Verhalten des gesamten Vertrags
bestimmen:
  Ergebniskennzahl               — muss ein Ergebnis sein, kein Output
                                    (siehe outcomes-vs-outputs)
  Vergleich/Kontrafaktum         — meist eine gematchte Kohorte (siehe
                                    counterfactual-analysis)
  Zahlungsschwelle                — Mindestverbesserung, bevor
                                    überhaupt eine Zahlung ausgelöst
                                    wird
  Zahlungskurve                    — linear, gestuft oder oberhalb der
                                    Schwelle gedeckelt
  Zurechnungs-/Mitnahmeeffekt-Abzug — siehe additionality-and-deadweight
```

## Beispielrechnung

**Peterborough One Service** (illustrative Zahlen aus veröffentlichten Evaluationen):

```
Beschafftes Investorenkapital:  5.000.000 £
Kohorte:                        ~3.000 kurz verurteilte männliche
                                 Gefangene über zwei Kohorten
Schwelle:                       ≥7,5 % Reduktion der
                                 Wiederverurteilungsereignisse gegenüber
                                 gematchter nationaler Vergleichsgruppe,
                                 sonst keine Zahlung
Ergebnis Kohorte 1:              8,4 % Reduktion — unter der
                                 vertraglichen Hürde für diese Kohorte
                                 allein nach den ursprünglichen Regeln
Kombiniertes/Abschlussergebnis: 9,7 % Reduktion — über der Schwelle
Ergebniszahlung:                 Regierung (Justizministerium / Big
                                 Lottery Fund) zahlt pro Prozentpunkt
                                 über der Schwelle, finanziert
                                 Investorenrückzahlung plus Rendite
```

**PbR-Vertrag einer Kommunalverwaltung (illustrativ)**: Ein Familieninterventionsdienst wird mit
4.000 £ pro überwiesener Familie (Aktivitätszahlung) plus 6.000 £ pro Familie ohne weitere
Kinderschutzüberweisung 12 Monate nach Abschluss (Ergebniszahlung) beauftragt. 200 Familien
überwiesen, 150 Fälle abgeschlossen, 96 bleiben nach 12 Monaten überweisungsfrei:

```
Aktivitätszahlung  = 200 × 4.000 £ = 800.000 £
Ergebniszahlung    = 96 × 6.000 £  = 576.000 £
Gesamtvertragskosten = 1.376.000 £ für 96 bestätigte dauerhafte
                        Ergebnisse
Kosten pro bestätigtem Ergebnis ≈ 14.333 £ (siehe cost-per-outcome)
```

## Bezug zur Softwareentwicklung

Bezahlung nach Ergebnis ist zunächst ein Anreizausrichtungsproblem, bevor es ein Datenproblem ist,
und das Datensystem ist der Ort, an dem diese Ausrichtung entweder hält oder bricht. Unabhängige,
manipulationssichere Ergebnisverifizierung ist der ganze Kern: Auftraggeber und anbietende Stelle
haben entgegengesetzte Anreize dafür, wie ein zweideutiger Fall kodiert wird, sodass das
Ergebniserfassungssystem eine Prüfspur, eine Datenaustauschvereinbarung mit der unabhängigen
verifizierenden Stelle (oft eine andere Stelle als die anbietende, manchmal eine amtliche
Statistikbehörde, die gegen Polizei- oder Leistungsakten abgleicht) und unveränderliche
Versionierung der Ergebnisdefinition braucht — das PbR-Äquivalent der Falle "die Kennzahl neu
definieren" in [KPIs im öffentlichen Sektor](../public-sector-kpis/). Zurechnungsberechnungen hängen
von Methoden gematchter Kohorten der [kontrafaktischen Analyse](../counterfactual-analysis/) ab, die
reproduzierbaren, prüfbaren Code brauchen, keine einmalige Tabellenkalkulation. Und die Kennzahl
selbst muss ein echtes Ergebnis sein, kein Stellvertreter-Aktivität — siehe
[Ergebnisse vs. Leistungen](../outcomes-vs-outputs/) —, weil ein PbR-Vertrag, der für einen Output
zahlt, nur Business-as-usual-Finanzierung mit zusätzlichen Transaktionskosten umbenennt. Wo die
soziale Rendite eines SIB prospektiv modelliert wird, entlehnt sich diese Bewertung typischerweise
direkt bei der Methodik der [sozialen Kapitalrendite](../social-return-on-investment/).

## Fallstricke

- **Für ein leicht manipulierbares Stellvertreterergebnis zahlen**: "Teilnahme an Sitzungen" ist
  eine als Ergebnis verkleidete Aktivität; bestehen Sie auf einem Maß, das die tatsächlich
  angestrebte Veränderung widerspiegelt (Rückfälligkeit, Beschäftigung, Wohnstabilität).
- **Kein glaubwürdiges Kontrafaktum**: Ohne gematchte Vergleichsgruppe könnte eine Verbesserung
  Regression zur Mitte oder ein breiterer Trend sein, nicht die Wirkung des Programms — siehe
  [kontrafaktische Analyse](../counterfactual-analysis/) und
  [Additionalität und Mitnahmeeffekte](../additionality-and-deadweight/).
- **Transaktions- und Evaluationskosten unterschätzen**: Unabhängige Verifizierung, Datenverknüpfung
  und Vertragsverwaltung für PbR/SIB-Programme erreichen routinemäßig zweistellige Prozentsätze des
  Vertragswerts — die Evidenzgrundlage des GO Lab dokumentiert dies als wiederkehrenden Treiber der
  Programmeinstellung.
- **Rosinenpicken oder "Parken"**: Anbietende Stellen, die pro Ergebnis bezahlt werden, haben einen
  direkten Anreiz, Klientinnen und Klienten zu priorisieren, die ohnehin am wahrscheinlichsten
  erfolgreich sind, und die schwierigsten Fälle zurückzustellen — gestalten Sie Zahlungsstufen oder
  Fallmix-Anpassung, um dem entgegenzuwirken.

## Quellen

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
