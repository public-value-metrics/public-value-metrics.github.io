# Flowmetrics in overheidslevering

Flowmetrics — de wet van Little, werk-in-uitvoering (WIP)-limieten, en flowefficiëntie — beschrijven hoe snel werk door een systeem beweegt met beperkte capaciteit. Een sprintbord is zo'n systeem; een uitkeringsaanvraagwachtrij, een planningsaanvraagregister, of een visumcasebehandelingsachterstand is exact dezelfde wiskunde in een ander uniform.

## Waarom het ertoe doet

Overheidscaseloads zijn wachtrijsystemen, en wachtrijsystemen gehoorzamen wachtrijwetten of iemand ze meet of niet. Wettelijke bepalingsperioden maken dit expliciet: onder het Town and Country Planning-regime draagt de meeste kleine planningsaanvragen een wettelijk bepalingsdoel van 8 weken en grote aanvragen 13 weken — een cyclustijdverplichting rechtstreeks ingebakken in wet. De asielcasebehandelingsachterstand van het Home Office, herhaaldelijk onderzocht door het National Audit Office en de Home Affairs Select Committee, is een goed gedocumenteerd geval van een publiek systeem waar werk-in-uitvoering sneller groeide dan doorvoer voor een aanhoudende periode, wat cyclustijden ver voorbij enige wettelijke of dienstverwachting dreef. Flowmetrics geven ingenieurs en casebehandelingsmanagers gelijk een gedeelde, kwantitatieve woordenschat voor precies dit faalpatroon, in plaats van het te laten als een kwalitatief "achterstandsprobleem".

## De berekening

```
Wet van Little:  WIP = Doorvoer × Cyclustijd
              →  Cyclustijd = WIP / Doorvoer

Flowefficiëntie = actieve (aanraak) tijd / totale cyclustijd
                 (Vacanti)

WIP-limiet-effect: bij vaste doorvoer, het halveren van WIP
halveert ruwweg gemiddelde cyclustijd (wet van Little
herschikt) — de hefboom beschikbaar zonder personeel toe te
voegen.
```

Zie [DORA-metrics-voor-public-value](../dora-metrics-for-public-value/) voor de equivalente rekenkunde toegepast op softwaredeploymentpijplijnen in plaats van casebehandeling.

## Uitgewerkt voorbeeld

**Gemeentelijke planningsafdeling**: 400 aanvragen op elk moment open (WIP), het team behandelt 50 aanvragen/week (doorvoer).

```
Cyclustijd = WIP / Doorvoer = 400 / 50 = 8 weken
```

Dat komt precies op het wettelijke doel van 8 weken voor kleine aanvragen — zonder speling, wat betekent dat elke variabiliteit in inkomende vraag of consultatietijd van derden bepalingen over de wettelijke deadline duwt.

**Flowefficiëntie**: van die 8 weken (56 kalenderdagen) heeft een aanvraag typisch ongeveer 6 uur aan daadwerkelijke casebehandelaarsverwerkingstijd.

```
Flowefficiëntie = 6 uur / (56 dagen × 8 werkuren/dag)
                = 6 / 448 ≈ 1,3%
```

De benchmark van Vacanti voor softwareteams zet typische flowefficiëntie op 15-20%; overheidscasebehandeling, met meerdere wettelijke consultatie-overdrachten en publieke-consultatievensters, draait vaak een ordergrootte lager. De 98,7% "wacht"-tijd is waar de acht weken daadwerkelijk naartoe gaan — niet in casebehandelaarscapaciteit.

**WIP-limiet-interventie**: het beperken van open aanvragen per casebehandelaar tot 15 in plaats van een onbeperkte 25 (doorvoer constant houdend) verschuift WIP van 400 naar ruwweg 240 over een team van 16 personen:

```
Nieuwe cyclustijd = 240 / 50 = 4,8 weken
```

Een bijna-halvering van cyclustijd door een beleidswijziging, geen personeelstoename — dezelfde hefboom die DORA-achtige leveringsteams trekken wanneer ze sprint-WIP beperken.

## Verband met softwareontwikkeling

Flowmetrics zijn de gedeelde taal tussen het Kanban-bord van een leveringsteam en de casebehandelingsvloer waarvoor het software bouwt: de wachtrij van een casebehandelaar en een pull-request-wachtrij worden beide beheerst door de wet van Little, en beide blazen hun cyclustijddoelen op dezelfde manier — te veel WIP relatief tot doorvoer. Dit doet er direct toe voor [kosten-van-vertraging-in-overheidsprogramma's](../cost-of-delay-in-public-programmes/): cyclustijd × CoD is het geld dat op elk moment in de wachtrij zit, en het doet er toe voor [dienstnormen-en-transactiemaatstaven](../service-standards-and-transaction-metrics/), waar een gepubliceerd doorlooptijddoel een cyclustijdverplichting is die alleen flowmetrics kan diagnosticeren wanneer het wordt gemist. De software van een casebehandelingssysteem zou WIP en cyclustijd moeten blootleggen als eersteklas operationele maatstaven, niet ze verstoppen in een casemanagementsysteem dat niemand bevraagt.

## Valkuilen

- **WIP-limieten toevoegen zonder het echte knelpunt te repareren**: als de beperking de responstijd van een externe wettelijke consultatiepartij is, verschuift het beperken van casebehandelaars-WIP de wachtrij gewoon stroomopwaarts in plaats van het te verkorten.
- **Flowefficiëntie behandelen als een doel om te manipuleren**: de 1,3% actieve tijd overhaasten beweegt cyclustijd nauwelijks; de hefboom zit bijna altijd in de wachttoestanden, wat meestal procesherontwerp betekent, geen casebehandelaarssnelheid.
- **Variabiliteit negeren**: de wet van Little beschrijft gemiddelden; een caseload met hoge vraagvarantie heeft buffercapaciteit nodig, niet alleen een strakkere WIP-limiet, of wettelijke deadlines zullen nog steeds worden gemist op de volatiele staart zelfs terwijl het gemiddelde verbetert.
- **WIP inconsistent meten**: een zaak "open" in het registratiesysteem maar daadwerkelijk stilgevallen wachtend op een derde partij is nog steeds WIP; het uitsluiten ervan vleit de cijfers zonder de burgergerichte realiteit te veranderen.

## Bronnen

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
