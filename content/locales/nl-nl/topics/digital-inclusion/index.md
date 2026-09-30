# Digitale inclusie

Digitale inclusie is de discipline om ervoor te zorgen dat "digitaal bij standaard" niet "alleen digitaal" wordt — dat publieke diensten ontworpen rond het goedkoopste kanaal nog steeds werken voor de burgers die het niet zonder assistentie kunnen of willen gebruiken. GDS muntte het specifieke leveringsmechanisme, "geassisteerd digitaal", als een verplichte vereiste voor elke digitale overheidsdienst, geen optionele extra.

## Waarom het ertoe doet

De Government Digital Strategy van 2012 zette de ambitie duidelijk uiteen: digitale diensten zouden digitaal bij standaard gebouwd moeten worden, maar de strategie zelf erkende dat ongeveer 10% van de Britse volwassenen ze niet zonder hulp zou kunnen gebruiken, en verplichtte departementen tot het bieden van geassisteerd-digitale ondersteuning — een door mensen gemedieerde route, per telefoon, persoonlijk, of via een intermediair — als onderdeel van de dienst, geen apart later vastgeschroefde terugval. Die verplichting is nu punt 5 van [digitale-dienstennorm](../digital-service-standard/), "zorg dat iedereen de dienst kan gebruiken". De schaal van doorlopende uitsluiting wordt bijgehouden door de jaarlijkse UK Consumer Digital Index van Lloyds Banking Group: de editie van 2024 vond dat ongeveer 1,6 miljoen mensen in het VK offline blijven, en dat deze groep sterk scheef ligt naar mensen van 70-79 jaar, degenen die minder dan £35.000 verdienen, en degenen die met pensioen of werkloos zijn — precies de populatie die het meest waarschijnlijk afhankelijk is van de publieke diensten die worden herontworpen. Hetzelfde rapport vond dat slechts 48% van de Britse beroepsbevolking alle 20 taken op het Essential Digital Skills-raamwerk kon voltooien, wat betekent dat uitsluiting geen binaire connectiviteit is, maar een spectrum van vaardigheid, vertrouwen, en zekerheid dat een eenvoudige "heeft breedband"-maatstaf volledig mist.

## De berekening

Digitale inclusie is een raamwerk en gelijkheidscontrole in plaats van een enkele formule, maar het combineert met kwantitatieve waardebeoordeling via [verdelingsgewicht](../distributional-weighting/):

```
Naïeve kanaalverschuivingswaarde:
  waarde = verschoven volume × (kosten_oud − kosten_digitaal)
  [zie kanaalverschuivingsbesparingen]

Inclusie-aangepaste waarde:
  waarde = (verschoven volume × ongewogen besparing)
        − (uitgesloten gebruikers × kosten van geassisteerd-
          digitale voorziening)
        − (verdelingsgewichtaanpassing voor schade aan
          uitgesloten groepen die toegang verliezen of
          verminderde dienstkwaliteit ervaren)

Geassisteerd digitaal is niet de resterende kost van falen —
het is een ontworpen kanaal met zijn eigen [kosten-per-
transactie](../cost-per-transaction/), typisch veel hoger per
transactie dan zelfbedienings-digitaal maar meestal nog
steeds goedkoper dan het legacy-kanaal dat het deels vervangt.
```

## Uitgewerkt voorbeeld

**Universal Credit-achtige nationale uitkeringsdienst**: 2,5 miljoen aanvragen/jaar, beoordeeld als behoevend geassisteerd-digitale ondersteuning voor een geschatte 10% van aanvragers volgens de planningsaanname van de Government Digital Strategy.

```
Uitgesloten/geassisteerd-digitaal cohort = 2.500.000 × 10% =
250.000 aanvragen/jaar

Geassisteerd-digitaal-kanaalkosten (telefoon + persoonlijke
ondersteuning, bemand om kwetsbaarheid en complexiteit te
behandelen) ≈ £9,50/aanvraag = 250.000 × £9,50 = £2.375.000/
jaar

Zelfbedienings-digitale kosten voor de andere 90% ≈
£0,40/aanvraag = 2.250.000 × £0,40 = £900.000/jaar

Vermengde kosten per transactie = (2.375.000 + 900.000) /
2.500.000 = £1,31/aanvraag

Een ontwerp dat geassisteerd digitaal overslaat om een lager
koptekst-kosten-per-transactie te halen (bijv. £0,40 vermengd,
met negering van de 250.000 uitgesloten aanvragers) elimineert
die kost van £2,375m niet — het zet het om in niet-aangevraagde
rechten, beroepen, en stroomafwaartse crisisdienstvraag die op
een volledig ander budget terechtkomt.
```

## Verband met softwareontwikkeling

Geassisteerd digitaal is een ontworpen kanaal, wat betekent dat het interfaces, SLA's, en instrumentatie heeft zoals elk ander: een telefoonbasseerde caseworker-tool, een intermediair portaal voor Citizens Advice of een gemeente, of een persoonlijke kiosk-flow. Het behandelen als een bijzaak — een telefoonnummer in kleine letters in plaats van een kanaal overwogen vanaf discovery — is de enkele meest voorkomende manier waarop diensten falen op punt 5 van [digitale-dienstennorm](../digital-service-standard/) bij beoordeling. Digitale inclusie is de gelijkheidslens op elk ander onderwerp in dit hoofdstuk: het beperkt hoe agressief [kanaalverschuivingsbesparingen](../channel-shift-savings/) kunnen worden gerealiseerd, het is een regelpost die eerlijk moet worden meegenomen in [kosten-per-transactie](../cost-per-transaction/), en het is de directe toepassing van [verdelingsgewicht](../distributional-weighting/) op een digitale-dienstencontext — een besparing die disproportioneel terechtkomt op mensen die al digitaal en economisch uitgesloten zijn, zou lager gewogen moeten worden, niet behandeld als equivalent aan een besparing evenredig verspreid over de populatie.

## Valkuilen

- **"Digitaal bij standaard" gelezen als "alleen digitaal"**: het sluiten van de telefoonlijn of balie zodra digitale opname een drempel overschrijdt, zonder te verifiëren dat het resterende cohort een werkelijk bruikbaar alternatief heeft.
- **Inclusie meten door binaire connectiviteit**: "heeft breedband" of "heeft een smartphone" is een slechte proxy voor de vaardigheid om een specifieke transactie te voltooien — de Essential Digital Skills-kloof (slechts 48% van de Britse beroepsbevolking voltooit alle 20 taken, volgens Lloyds 2024) toont dat vaardigheden en vertrouwen net zo belangrijk zijn als toegang.
- **Geassisteerd digitaal kosten als een afrondingsfout**: het begroten als een kleine contingentieregel in plaats van een echt kanaal met zijn eigen [kosten-per-transactie](../cost-per-transaction/), en vervolgens verbaasd zijn wanneer het onderfinancierd en onderbemand is bij lancering.
- **Alleen succesvolle digitale voltooiers enquêteren**: tevredenheids- en bruikbaarheidsonderzoek volledig diensteninern uitgevoerd mist de mensen die nooit zo ver kwamen, wat precies de populatie is die digitale-inclusiewerk bedoeld is te beschermen.

## Bronnen

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
