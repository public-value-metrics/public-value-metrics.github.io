# Kosten van vertraging in overheidsprogramma's (CoD)

Kosten van vertraging is de public value verloren per tijdseenheid dat een programma, dienst, of systeemverandering *nog niet* geleverd is. Het is de meesterbrugmaatstaf van dit hoofdstuk: het zet "de lancering schoof zes maanden op" om in ponden per week, of in WELLBY's per week, zodat over vertraging kan worden geredetwist in dezelfde valuta als de businesscase zelf.

## Waarom het ertoe doet

De regel van Reinertsen — "als je maar één ding kwantificeert, kwantificeer de Kosten van Vertraging" — reist bijna ongewijzigd de overheid binnen, omdat publieke programma's ongewoon eraan blootgesteld zijn: businesscases worden goedgekeurd tegen een voorspelde batenstroom, maar de stroom begint alleen te vloeien bij lancering, en elke week vertraging is een week gemiste waarde die niemand prijst op het risicoregister. De herhaalde controle van het National Audit Office van de uitrol van Universal Credit (zie zijn "Rolling Out Universal Credit"-rapporten, <https://www.nao.org.uk/>) illustreert het patroon: schema-uitloop werd bijgehouden en gerapporteerd, maar de ponden-per-week-kost van het *nog niet* leveren van het hervormde systeem aan de volgende tranche aanvragers werd zelden vermeld als een kopcijfer, ondanks dat het het cijfer is dat prioritering en escalatie had moeten aandrijven. Zonder een CoD-cijfer ziet een vertraagd programma eruit als een schemaprobleem voor het leveringsbestuur; met één, is het een waardeerosieprobleem voor de accounting officer.

## De berekening

```
CoD = baat per tijdseenheid gemist terwijl ongeleverd (£/week
     of WELLBY's/week)

Totaal vertragingsverlies = CoD × vertragingsduur

Batenstromen om op te tellen voor publieke programma's:
  contant-vrijmakende besparingen (fraude-/foutvermindering,
  vermeden tijdelijke kosten)
+ niet-contante vrijgemaakte capaciteit (caseworker-/
  ambtenarenuren × belaste kosten)
+ welzijnsbaat (WELLBY's × £13.000/WELLBY, HMT Green Book
  welzijns-aanvullende-richtlijn, prijzen 2019)
```

Voor burgergerichte diensten, denomineer in welzijn net zo goed als geld — zie [welzijnsgecorrigeerde-levensjaren](../wellbeing-adjusted-life-years/) voor de onderliggende eenheid, en [opportuniteitskosten-in-publieke-uitgaven](../opportunity-cost-in-public-spending/) voor wat het vertraagde pond anders had kunnen financieren.

## Uitgewerkt voorbeeld

**Gemeente**: een upgrade van een huurtoeslagsysteem snijdt overbetalingsfout met £150/aanvraag/jaar over 20.000 live aanvragen.

```
Jaarlijkse baat = 150 × 20.000 = £3.000.000/jaar
CoD = 3.000.000 / 52 ≈ £57.700/week
Een implementatievertraging van 12 maanden kost 52 × 57.700 ≈
£3.000.000 aan vermijdbare fout.
```

**Centrale overheidsinstantie**: een dienst voor beoordeling van arbeidsongeschiktheidsuitkeringen, zes maanden (26 weken) later geleverd dan gepland, betekent dat 200.000 aanvragers/jaar gemiddeld drie weken langer wachten op een besluit. Elke extra week financiële onzekerheid wordt gemodelleerd als een −0,0018 WELLBY (levenstevredenheidspunt)-effect:

```
WELLBY-verlies per aanvrager = 3 × 0,0018 = 0,0054
Jaarlijks WELLBY-verlies = 200.000 × 0,0054 = 1.080
WELLBY's/jaar
CoD_welzijn = 1.080 / 52 ≈ 20,8 WELLBY's/week
CoD_geld = 20,8 × £13.000 ≈ £270.000/week aan welzijnswaarde
```

Een vertraging van 26 weken "kost" daarom ruwweg 540 WELLBY's — ongeveer £7 miljoen waard tegen de welzijnswaardering van het Green Book — wat een gemiste lanceringsdatum herkadert als een burgerwelzijnsgebeurtenis, geen projectbeheervoetnoot.

## Verband met softwareontwikkeling

CoD is wat [DORA-metrics](../dora-metrics-for-public-value/) en [flowmetrics](../flow-metrics-in-government-delivery/) financieel leesbaar maakt: doorlooptijd in de pijplijn × CoD is geld (of welzijn) verbrand in wachtrijen voordat het ooit een burger bereikt. Concreet:

- **Prioritering**: rangschik een backlog naar CoD ÷ duur in plaats van naar belanghebbendensenioriteit — de softwareengineeringanaloog van de Green Book-vereiste om opties te beoordelen op waarde, niet op wie vraagt.
- **Aanbesteding**: een aanbestedingscyclus van 12-18 maanden heeft een CoD; het prijzen ervan verandert de urgentiezaak voor versnelde routes, en voert direct in [build-versus-buy](../build-vs-buy-in-government/)-beslissingen waar tijd-tot-waarde een besluitsaandrijver is.
- **Batenzaak**: elk CoD-cijfer geciteerd bij goedkeuring zou moeten herverschijnen bij [batenrealisatie](../benefits-realization/) — als de vertragingskost echt was, zou de versnelde baat meetbaar moeten zijn na lancering.

## Valkuilen

- **Lineaire CoD aannemen**: sommige publieke diensten hebben deadline-gevormde waarde (een wettelijke complianc datum — CoD springt naar handhavingsrisico-niveaus na de datum, bijna nul ervoor) in plaats van een gladde wekelijkse snelheid. Classificeer het urgentieprofiel voordat je vermenigvuldigt.
- **CoD op outputs die niemand nodig heeft**: vertraging heeft alleen een kost als het ongeleverde ding waarde heeft; een systeem dat niemand zal gebruiken heeft nul CoD ongeacht hoe laat het is.
- **Vertraging en discontering dubbel tellen**: de [maatschappelijke discontovoet](../social-discount-rate/) prijst al tijd op multi-jaar-beoordelingshorizonten; CoD is de binnen-horizon, operationele versie voor weken en maanden. Gebruik CoD voor schema-uitloop, NPV-verschuiving voor multi-jaar-herfasering.

## Bronnen

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
