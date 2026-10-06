# Betaling naar resultaat en sociale-impactobligaties (PbR/SIB's)

Betaling naar resultaat (payment by results, PbR) betaalt een aanbieder op basis van geverifieerde behaalde uitkomsten, niet uitgevoerde activiteiten. Een sociale-impactobligatie (social impact bond, SIB) is een specifieke PbR-financieringsstructuur waarin private of filantropische investeerders dienstlevering vooraf financieren en worden terugbetaald — met een rendement — door een overheidsopdrachtgever alleen als onafhankelijk gemeten uitkomsten overeengekomen drempels behalen, waardoor het leveringsrisico verschuift van de belastingbetaler naar de investeerder.

## Waarom het ertoe doet

De eerste SIB ter wereld lanceerde bij HMP Peterborough in september 2010: Social Finance haalde £5 miljoen op van 17 investeerders om de "One Service" te financieren, werkend met kortgestraften (onder 12 maanden) om recidive te verminderen, waarbij het Ministry of Justice en het Big Lottery Fund overeenkwamen investeerders alleen terug te betalen als herveroordelingsgebeurtenissen met ten minste 7,5% daalden tegen een gekoppeld nationaal vergelijkingscohort. Het laatste cohort van de Peterborough-pilot registreerde een vermindering van 9,7% in herveroordelingen, comfortabel boven de drempel, en investeerders werden terugbetaald met een rendement. Het mechanisme was belangrijk omdat het een specifiek aanbestedingsprobleem oploste: de overheid wilde betalen voor uitkomsten in plaats van inputs, maar kon het financiële risico van een interventie die misschien niet zou werken niet absorberen, dus verplaatste de SIB-structuur dat risico naar investeerders die bereid waren het te onderschrijven. Het Government Outcomes Lab (GO Lab) aan de Blavatnik School of Government van Oxford onderhoudt nu de meest complete publieke bewijsbasis over PbR- en SIB-prestaties wereldwijd, en traceert ruim meer dan 200 impactobligaties wereldwijd en publiceert het onderzoek over welke ontwerpkenmerken correleren met succes of falen. De les waar de bewijsbasis herhaaldelijk naar terugkeert, is dat de *gekozen uitkomstmaatstaf*, en wie het risico draagt van het missen ervan, bijna alles anders bepaalt over hoe een PbR-contract zich daadwerkelijk gedraagt in de praktijk.

## De berekening

```
PbR-betaling = basisbetaling (indien aanwezig) + Σ (behaalde
              uitkomst × eenheidsprijs per uitkomst)

Rendement van sociale-impactobligatie-investeerder:
  Investeerdersuitgave = vooraf kapitaal dat dienstlevering
                        financiert
  Uitkomstbetaling      = opdrachtgever betaalt alleen als
                        uitkomst ≥ drempel, geschaald naar hoe
                        ver boven drempel de prestatie
                        terechtkomt
  Investeerdersrendement = ontvangen uitkomstbetalingen −
                          investeerdersuitgave (een
                          rendementspercentage, vaak
                          begrensd, wat het genomen risico
                          weerspiegelt)

Belangrijke ontwerpparameters die het gedrag van het hele
contract bepalen:
  Uitkomstmaatstaf              — moet een uitkomst zijn, geen
                                  output (zie uitkomsten-
                                  versus-output)
  Vergelijking/contrafeitelijke  — meestal een gekoppeld
  situatie                       cohort (zie contrafeitelijke-
                                  analyse)
  Betalingsdrempel                — minimale verbetering
                                    voordat enige betaling
                                    wordt geactiveerd
  Betalingscurve                  — lineair, getrapt, of
                                    begrensd boven de drempel
  Toeschrijvings-/deadweight-      — zie additionaliteit-en-
  korting                          deadweight
```

## Uitgewerkt voorbeeld

**Peterborough One Service** (illustratieve cijfers ontleend aan gepubliceerde evaluaties):

```
Opgehaald investeerderskapitaal:  £5.000.000
Cohort:                          ~3.000 kortgestrafte mannelijke
                                  gevangenen over twee cohorten
Drempel:                         ≥7,5% vermindering in
                                  herveroordelingsgebeurtenissen
                                  versus gekoppelde nationale
                                  vergelijkingsgroep, of geen
                                  betaling
Resultaat cohort 1:               8,4% vermindering — onder de
                                  contractuele lat voor dat
                                  cohort alleen onder de
                                  oorspronkelijke regels
Gecombineerd/eindcohortresultaat: 9,7% vermindering — boven
                                  drempel
Uitkomstbetaling:                 overheid (Ministry of Justice
                                  / Big Lottery Fund) betaalt
                                  per procentpunt boven drempel,
                                  financiert investeerders-
                                  terugbetaling plus een
                                  rendement
```

**PbR-contract van een gemeente (illustratief)**: een gezinsinterventiedienst wordt aangevraagd tegen £4.000 per verwezen gezin (activiteitsbetaling) plus £6.000 per gezin zonder verdere kinderbeschermingsverwijzing 12 maanden na afsluiting (uitkomstbetaling). 200 verwezen gezinnen, 150 afgesloten zaken, 96 blijven verwijzingsvrij na 12 maanden:

```
Activiteitsbetaling  = 200 × £4.000 = £800.000
Uitkomstbetaling     = 96 × £6.000  = £576.000
Totale contractkosten = £1.376.000 voor 96 bevestigde
                        duurzame uitkomsten
Kosten per bevestigde uitkomst ≈ £14.333 (zie kosten-per-
uitkomst)
```

## Verband met softwareontwikkeling

Betaling naar resultaat is een prikkelafstemmingsprobleem voordat het een gegevensprobleem is, en het gegevenssysteem is waar die afstemming ofwel standhoudt of breekt. Onafhankelijke, manipulatiebestendige uitkomstverificatie is het hele spel: de opdrachtgever en aanbieder hebben tegengestelde prikkels over hoe een ambigue zaak wordt gecodeerd, dus het systeem dat uitkomsten registreert heeft een auditspoor nodig, een gegevensdelingsovereenkomst met de onafhankelijke verificateur (vaak een ander lichaam dan de aanbieder, soms een officieel statistieklichaam dat matcht tegen politie- of uitkeringsrecords), en onveranderlijke versionering van de uitkomstdefinitie — het PbR-equivalent van de "herdefiniëren van de maatstaf"-valkuil in [kerncijfers publieke sector](../kerncijfers-publieke-sector/). Toeschrijvingsberekeningen hangen af van [contrafeitelijke-analyse](../contrafeitelijke-analyse/)-methoden met gekoppelde cohorten, die reproduceerbare, controleerbare code nodig hebben, geen eenmalige spreadsheet. En de maatstaf zelf moet een echte uitkomst zijn, geen proxy-activiteit — zie [uitkomsten versus output](../uitkomsten-versus-output/) — omdat een PbR-contract dat betaalt voor een output gewoon business-as-usual-financiering herbenoemt met extra transactiekosten. Waar het sociale rendement van een SIB prospectief wordt gemodelleerd, leent die beoordeling typisch direct van [sociaal rendement op investering](../sociaal-rendement-op-investering/)-methodologie.

## Valkuilen

- **Betalen voor een gemakkelijk te manipuleren proxy-uitkomst**: "aanwezigheid bij sessies" is een activiteit verkleed als een uitkomst; sta erop dat een maatstaf de werkelijke gezochte verandering weerspiegelt (recidive, werkgelegenheid, huisvestingsstabiliteit).
- **Geen geloofwaardige contrafeitelijke situatie**: zonder een gekoppelde vergelijkingsgroep kan een verbetering regressie naar het gemiddelde zijn of een breder trend, niet het effect van het programma — zie [contrafeitelijke-analyse](../contrafeitelijke-analyse/) en [additionaliteit-en-deadweight](../additionaliteit-en-deadweight/).
- **Transactie- en evaluatiekosten onderschatten**: onafhankelijke verificatie, gegevenskoppeling, en contractadministratie voor PbR/SIB-regelingen komen routinematig in dubbele cijfers terecht als percentage van contractwaarde — de bewijsbasis van GO Lab documenteert dit als een terugkerende aandrijver van stopzetting van regelingen.
- **Krenten plukken of "parkeren"**: aanbieders betaald per uitkomst hebben een directe prikkel om cliënten te prioriteren die toch waarschijnlijk zouden slagen en de moeilijkste gevallen te deprioriteren — ontwerp betalingstiers of case-mix-aanpassing om dit tegen te gaan.

## Bronnen

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluatiesamenvattingen.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
