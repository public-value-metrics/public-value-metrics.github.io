# AI-waarde in de overheid

AI-waarde in de overheid is de vereiste dat een AI-systeem gebruikt in een publieke dienst dezelfde value-for-money- en public-value-lat haalt als elke andere uitgavebeslissing — geen lagere omdat het nieuw is, en geen hogere omdat het gevreesd wordt. Het is de vraag die een leveringsteam moet kunnen beantwoorden voor, niet na, een AI-functie wordt gelanceerd: produceert dit meer waarde dan het kost, zodra assurantie, toezicht, en risico eerlijk worden geprijsd?

## Waarom het ertoe doet

Het Britse Central Digital and Data Office (CDDO) publiceerde zijn Generative AI Framework for Government in 2024, bouwend op eerdere tussentijdse richtlijnen van juni 2023, en structureerde het rond tien principes die dekken wat generatieve AI is, zijn ethische implicaties, hulpmiddelbeveiliging, kwaliteitsborgingscontroles, het beheren van de volledige generatieve-AI-levenscyclus, het identificeren van echte use cases, overheidsoverschrijdende samenwerking, transparantie, vaardigheden, en governance. De aandrang van het raamwerk op "betekenisvolle menselijke controle" en volledig levenscyclusbeheer bestaat omdat AI-projectbusinesscases een specifiek faalpatroon hebben dat andere IT-uitgaven niet hebben: het koptekstproductiviteitscijfer van een pilot is gemakkelijk te produceren en gemakkelijk te overdrijven, omdat het wordt gemeten voordat de verificatie-, correctie-, en toezichtslast die het hulpmiddel creëert, wordt meegenomen. Naast het raamwerk vereist de Algorithmic Transparency Recording Standard (ATRS) dat publieke lichamen een gestandaardiseerd record publiceren — doel, gebruikte gegevens, prestaties, fairness-testen, menselijke-toezichtsregelingen — voor algoritmische hulpmiddelen die significante invloed hebben op besluiten over individuen, wat de assurantiekost van een AI-systeem een zaak van openbaar record maakt, geen interne schatting die een team stilzwijgend kan overslaan.

## De berekening

AI-adoptie wordt beoordeeld als een toevoeging aan, geen vervanging van, standaard [value-for-money](../waarde-voor-geld/)-beoordeling, met de AI-specifieke termen expliciet gemaakt in plaats van samengevoegd tot één "productiviteitswinst"-cijfer:

```
Netto waarde van een AI-systeem =
    productiviteitswinst (bespaarde tijd × belast
    personeelskost)
  − licentie-/computekosten
  − menselijke-verificatie- en toezichtskosten (AI-output
    controleren voordat er naar gehandeld wordt — dit krimpt
    niet naar nul zelfs voor volwassen hulpmiddelen)
  − ATRS-documentatie- en doorlopende-monitoringkosten
  − risicogecorrigeerde kosten van schade door fouten, bias,
    of hallucinatie, gewogen naar wie die schade draagt
    (verdelingsgewicht)

Een pilot-productiviteitscijfer dat de toezichtsterm weglaat
is niet vergelijkbaar met een business-as-usual-kostenbasislijn
die al equivalente menselijke beoordeling omvat — zie
AI-productiviteit-in-de-publieke-sector voor de volledigere
productiviteitsmeetdiscipline waar dit van leent.
```

## Uitgewerkt voorbeeld

**Gemeente die een generatief AI-hulpmiddel gebruikt om eerste antwoorden op routine-gemeentebelastingverzoeken te ontwerpen**: 25.000 verzoeken/jaar, voorheen volledig behandeld door caseworkers tegen een gemiddelde van 14 minuten/verzoek, belaste personeelskost £34/uur.

```
Basislijn (geen AI) kosten:
  25.000 × (14/60) × £34 = £198.333/jaar

Pilot-kopteksterbewering: AI ontwerpt een antwoord in
90 seconden, caseworker "beoordeelt gewoon en verstuurt" —
beweerde nieuwe tijd is 3 minuten
  25.000 × (3/60) × £34 = £42.500/jaar
  → beweerde besparing £155.833/jaar (ziet transformationeel
  uit)

Volledig-belast cijfer, gemeten na 3 maanden live in plaats
van in de handgeplukte testgevallen van de pilot:
  Werkelijke beoordelings- + correctietijd per antwoord: 6
  minuten (ontwerpen hebben echte redactie nodig voor
  complexe of emotioneel gevoelige verzoeken)
  25.000 × (6/60) × £34 = £85.000/jaar
  Licentie-/computekosten: £38.000/jaar
  ATRS-documentatie en kwartaal-bias-/kwaliteitsmonitoring:
  £14.000/jaar
  Totale kosten = 85.000 + 38.000 + 14.000 = £137.000/jaar

Echte besparing = 198.333 − 137.000 = £61.333/jaar — echt
en het waard te behouden, maar ruim onder de helft van de
kopteksterbewering van de pilot, en het vereiste een eerlijke
toezichtstijdmeting, niet de best-case-meting van de pilot,
om te vinden.
```

## Verband met softwareontwikkeling

Dit is waar [AI-productiviteit-in-de-publieke-sector](../ai-productiviteit-in-de-publieke-sector/) en dit onderwerp elkaar ontmoeten: engineeringteams die AI-functies bouwen in publieke diensten bezitten de instrumentatie die het "echte" cijfer in het uitgewerkte voorbeeld mogelijk maakt — het loggen van werkelijke beoordelingstijd, bewerkingsafstand tussen ontwerp en verstuurd antwoord, en escalatiepercentage, in plaats van te vertrouwen op de demo-omstandigheden van de pilot. AI-functies zouden moeten worden beoordeeld tegen punt 9 van [digitale-dienstennorm](../digitale-dienstennorm/) (veilige dienst, gebruikersprivacy) en kruisverwezen met [cyberbeveiligingswaarde-publieke-sector](../cyberbeveiligingswaarde-publieke-sector/) waar het hulpmiddel burgergegevens aanraakt, en elk AI-systeem met significante invloed op besluiten over individuen heeft een ATRS-record nodig voordat het als beoordelingsgereed kan worden beschouwd, op dezelfde manier als een dienst een geslaagde [digitale-dienstennorm](../digitale-dienstennorm/)-beoordeling nodig heeft voor het live gaat.

## Valkuilen

- **AI-witwassen**: bestaande regelgebaseerde automatisering herbenoemen als "AI" om toegang te krijgen tot financiering of aandacht bestemd voor AI-adoptie, zonder de nauwkeurigheids- of biasrisico's die de extra controle van het raamwerk daadwerkelijk rechtvaardigen.
- **Pilotproductiviteit meten, niet productieproductiviteit**: pilots draaien op samengestelde testgevallen met betrokken, aandachtige beoordelaars; productie draait op de volledige rommelige zaakmix met beoordelaars die, in de tijd, automatiseringsbias ontwikkelen en output onder-controleren — beide vervormen het eerlijke toezichtskostencijfer.
- **ATRS-registratie overslaan omdat het hulpmiddel "niet echt geautomatiseerde besluitvorming is"**: de drempel van de standaard is significante invloed op een besluit over een individu, wat de meeste burgergerichte AI-ontwerp- of triagehulpmiddelen halen zelfs wanneer een mens technisch afgetekent.
- **Verdelingsimpact van fouten negeren**: het gemiddelde foutpercentage van een AI-systeem over alle gebruikers kan een veel hoger fout- of biaspercentage voor specifieke groepen verhullen; [verdelingsgewicht](../distributieve-weging/) zou moeten worden toegepast op de risicogecorrigeerde-schadeterm, niet alleen het geaggregeerde nauwkeurigheidscijfer.

## Bronnen

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
