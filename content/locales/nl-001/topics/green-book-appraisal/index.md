# Green Book-beoordeling (vijfzaakmodel)

Het Green Book is de verplichte richtlijn van HM Treasury voor het beoordelen en evalueren van Britse overheidsuitgavenvoorstellen. Zijn centrale instrument, het vijfzaakmodel, dwingt een business case vijf afzonderlijke vragen te beantwoorden — is het een goed idee, levert het waarde, kan het worden aangeschaft, is het betaalbaar, en kan het worden geleverd — in plaats van alles samen te vatten in één getal dat een minister kan doorwuiven.

## Waarom het ertoe doet

Elk Brits centraaloverheidsuitgavenvoorstel boven de gedelegeerde grenzen van een departement moet Green Book-beoordeling doorlopen voordat financiering wordt vrijgegeven, en de Green Book Review 2020 van HM Treasury (gepubliceerd na kritiek dat het proces bevooroordeeld was tegen armere regio's, zie <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) verscherpte de eis dat opties worden vergeleken met een werkelijke "doe-minimum"-basislijn en dat strategische geschiktheid wordt aangetoond voordat waarde voor geld zelfs wordt beoordeeld. Het vijfzaakmodel zelf gaat aan het Green Book vooraf — het ontstond bij het Office of Government Commerce als de standaardstructuur voor business cases — maar de editie 2022 van het Green Book bedt het in als de verplichte vorm voor elke business case die goedkeuring van de Treasury zoekt: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Het punt van het vijfvoudig opsplitsen van de zaak is dat een voorstel kan falen op elke dimensie onafhankelijk van de andere. Een strategisch gezonde, kosteneffectieve IT-vervanging kan nog steeds falen bij de commerciële zaak als slechts één leverancier het kan leveren (waardoor risico op enkelvoudige aanbieding ontstaat), of falen bij de beheerzaak als het departement geen staat van dienst heeft in het leveren van programma's van die omvang. Een enkele "waarde voor geld"-score verbergt precies dit soort falen.

## De berekening

Het vijfzaakmodel is een structuur, geen formule, maar elke zaak heeft zijn eigen kwantitatieve of op bewijs gebaseerde toets:

```
1. De strategische zaak
   Bewijs van een uitgavendoel gekoppeld aan
   organisatiestrategie.
   Toets: is er überhaupt een zaak voor verandering?
   （"niets doen" is altijd een optie.）

2. De economische zaak
   Optiebeoordeling tegen een "doe-minimum"-basislijn, met
   gebruik van maatschappelijke kosten-batenanalyse of
   kosteneffectiviteitsanalyse.
   Toets: welke optie maximaliseert netto publieke waarde?
   Zie ../social-cost-benefit-analysis/ en
   ../cost-effectiveness-analysis-in-government/

3. De commerciële zaak
   Marktbetrokkenheid, aanbestedingsroute,
   risicoverdeling tussen koper en leverancier.
   Toets: is de gekozen optie aan te schaffen onder
   aanvaardbare voorwaarden?

4. De financiële zaak
   Betaalbaarheid binnen de begrotingsgrenzen van het
   departement, financieringsbron, balansbehandeling.
   Toets: kunnen we het ons veroorloven, dit jaar en elk
   jaar daarna?

5. De beheerzaak
   Governance, projectplan, plan voor batenrealisatie,
   risicoregister.
   Toets: kan deze organisatie het daadwerkelijk leveren?
   Zie ../benefits-realization/
```

De economische zaak is waar de kwantitatieve beoordeling zich bevindt: opties worden vergeleken op een netto-contantewaardegrondslag gecorrigeerd voor de [maatschappelijke discontovoet](../social-discount-rate/), met de methode van [maatschappelijke kosten-batenanalyse](../social-cost-benefit-analysis/), of, waar baten niet eerlijk kunnen worden gemonetariseerd, via [kosteneffectiviteitsanalyse](../cost-effectiveness-analysis-in-government/) of [multicriteria-analyse](../multi-criteria-decision-analysis/).

## Uitgewerkt voorbeeld

**Gemeente**: een gemeente die een IT-systeem voor woningreparaties van £12 miljoen beoordeelt, doorloopt de vijf zaken als volgt. Strategische zaak: de reparatieachterstand doorbreekt de wettelijke standaard voor behoorlijke woningen binnen 18 maanden zonder interventie. Economische zaak: drie opties berekend over een beoordelingsperiode van 10 jaar bij een discontovoet van 3,5% (volgens de standaard maatschappelijke tijdspreferentievoet van het Green Book 2022) — "doe-minimum" (lap het oude systeem, NCW −£4,1m), "kopen" (kant-en-klaar platform, NCW +£2,3m), "bouwen" (op maat gemaakt platform, NCW +£0,6m zodra een optimisme-bias van 40% voor softwareontwikkeling wordt toegepast op de ongecorrigeerde kapitaalkost, volgens Green Book Annex A). Kopen wint de economische zaak. Commerciële zaak: twee haalbare leveranciers bestaan, concurrerende aanbesteding is mogelijk — geslaagd. Financiële zaak: kapitaal beschikbaar van de Public Works Loan Board, exploitatiekosten passen binnen het middellangetermijn financiële plan — geslaagd. Beheerzaak: de gemeente heeft de afgelopen vijf jaar twee vergelijkbare systemen geleverd — geslaagd. Het voorstel gaat verder met "kopen."

**Rijksoverheid**: een voorstel met een sterke economische zaak (NCW +£40m) maar waarbij slechts één leverancier over de relevante accreditatie beschikt, faalt op de commerciële zaak-toets voor concurrentiedruk, wat dwingt tot een ontheffing voor enkelvoudige aanbieding (met zijn eigen toetsingslast) of een herontwerp van de specificatie om de markt te openen — de economische zaak alleen zou dit nooit hebben blootgelegd.

## Verband met softwareontwikkeling

Technische teams binnen de overheid of door subsidies gefinancierde organisaties zien meestal alleen de economische zaak, omdat dat het deel is waarvan product- en technisch leiderschap wordt gevraagd het te rechtvaardigen ("wat is het rendement van deze migratie?"). Maar een business case die de Treasury of een subsidiecommissie doorstaat, heeft alle vijf nodig, en engineers zijn vaak het best gepositioneerd om de commerciële zaak te beantwoorden (kan dit daadwerkelijk worden aangeschaft, of sluit het ons op in het proprietaire formaat van één leverancier?) en de beheerzaak (hebben we de leveringscapaciteit, of hangt dit af van drie specifieke mensen die niet vertrekken?). Behandel een verzoek om "alleen de cijfers van de business case" als een verzoek om een vijfde van het werkelijke besluit. Zie [waarde voor geld](../value-for-money/) voor hoe de output van de economische zaak meestal wordt samengevat, en [totale eigendomskosten](../total-cost-of-ownership-in-government-it/) voor de gebruikelijke kwantitatieve kern van de financiële zaak.

## Valkuilen

- **De economische zaak eerst schrijven en de strategische zaak daarop laten aansluiten.** De Green Book Review 2020 vond dat precies dit faalpatroon beoordelingsbias richting plaatsen en sectoren dreef die al goed onderbouwd waren, wat regionale ongelijkheid verankerde; de strategische zaak moet het doel vaststellen voordat opties worden vergeleken.
- **"Doe-minimum" behandelen als "niets doen".** De juiste basislijn is de laagst kostende optie die nog steeds minimale wettelijke of veiligheidsverplichtingen vervult, geen fantasie van nul uitgaven — vergelijken met letterlijk nul blaast de schijnbare waarde van elke optie op.
- **De commerciële en beheerzaak overslaan omdat de economische zaak sterk is.** Een voorstel met hoge NCW dat niet competitief kan worden aangeschaft of geleverd door de sponsorende organisatie is geen financierbaar voorstel; beoordelaars van de Treasury wijzen routinematig af op deze gronden, ook met een overtuigende economische zaak.
- **Het vijfzaakmodel slechts eenmaal toepassen, aan het begin.** Het Green Book vereist dat de zaak wordt heroverwogen bij elke volgende goedkeuringspoort (strategisch overzicht, overzicht-business case, volledige business case) naarmate kosten en bewijs zich vastzetten — een zaak bevroren in de overzichtsfase mist kostenstijgingen die een latere poort zou hebben opgevangen.

## Bronnen

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
