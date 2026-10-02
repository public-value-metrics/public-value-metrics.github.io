# Skuggprissättning

Ett skuggpris är ett uppskattat värde tilldelat en vara, resurs eller externalitet som saknar ett observerbart marknadspris, eller vars marknadspris är snedvridet och inte speglar dess verkliga samhälleliga värde. Statlig bedömning förlitar sig på en liten uppsättning officiella skuggpriser — koldioxid, icke-arbetstid, arbetslös arbetskraft — publicerade centralt så att varje departement använder samma tal.

## Varför det spelar roll

Skuggpriser existerar eftersom [samhällsekonomisk kostnads-nyttoanalys](../social-cost-benefit-analysis/) inte kan fungera utan ett monetärt värde för varje kostnad och nytta, och flera av de mest betydelsefulla — ett ton utsläppt koldioxid, en timme av en pendlares tid, en timme av annars arbetslös arbetskraft — saknar marknadspris alls, eller har ett marknadspris som felaktigt representerar deras verkliga samhälleliga kostnad. HM Treasury och Department for Energy Security and Net Zero publicerar gemensamt skuggpriset för koldioxid som används i all brittisk statlig bedömning (<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>), härlett inte från något koldioxidmarknadspris utan från ett målkonsistent tillvägagångssätt: koldioxidvärdet sätts till den marginella minskningskostnad som krävs för att nå Storbritanniens lagstadgade koldioxidbudgetar, vilket är en fundamentalt annan logik än att observera vad koldioxid faktiskt handlas för på EU:s eller Storbritanniens utsläppshandelssystem.

Skugglönen följer en liknande logik på arbetsmarknadssidan. Att anställa någon som annars skulle ha varit arbetslös kostar inte samhället deras fulla lön — en del av den lönen är en överföring från uteblivna bidragsbetalningar och förlorad fritids-/söktid snarare än en nettoökad belastning på samhällets resurser — så Green Books vägledning fastställer ett skuggpris under marknadslönen för arbetskraft hämtad från arbetslöshet, vilket speglar den verkliga alternativkostnaden för den arbetskraften (se [alternativkostnad i offentliga utgifter](../opportunity-cost-in-public-spending/)) snarare än dess marknadspris.

## Beräkningen

```
Skuggpris för koldioxid （illustrativ struktur, aktuella värden
från det officiella BEIS/DESNZ-verktyget för koldioxidvärden —
använd inte föråldrade siffror）:
  Handlat sektorsvärde: informerat av ETS-utsläppsrättspriser
    -banor
  Icke-handlad sektor （målkonsistent） värde: satt till den
    marginella minskningskostnad som krävs för att nå
    lagstadgade koldioxidbudgetar, stigande över tid när
    lättare minskningsalternativ tar slut
  Tillämpas som: £/ton CO2e × ton utsläppt eller minskat av
    alternativet, diskonterat till den samhälleliga
    diskonteringsräntan för framtida år

Skugglönesats （SWR）:
  SWR = Marknadslön − （värdet av sparad förlorad fritid/söktid
                       ＋ värdet av bidrag som inte längre
                       betalas）
  Uttrycks typiskt som en andel av marknadslönen （t.ex. SWR
    = 0,6 × marknadslön i ett område med hög arbetslöshet,
    enligt Green Book Annex A:s vägledning om arbetsmarknader
    med ledig kapacitet）
```

Båda siffrorna är centralt fastställda policykonventioner, inte empiriska marknadsobservationer — hela poängen med ett skuggpris är att ersätta en saknad eller snedvriden marknad, så en bedömning som använder ett måste citera den aktuella officiella källan snarare än att härleda en egen siffra, just så att varje departements bedömning är jämförbar.

## Genomräknat exempel

**Statlig myndighet**: en bedömning av ett översvämningsskyddsprojekt uppskattar att det undviker 400 ton CO2e-utsläpp per år (genom minskad användning av akututrustning och minskad inbäddad koldioxid från undveken återuppbyggnad) över en 30-årig bedömningslivslängd, jämfört mot en "gör minimum"-baslinje.

```
Illustrativt skuggpris för koldioxid: 280£/ton CO2e （år 1,
  stigande över bedömningsperioden enligt det officiella
  schemat för icke-handlade koldioxidvärden）
Koldioxidnytta år 1 = 400 × 280£ = 112 000£
```

Eftersom det officiella schemat har koldioxidvärdet *stigande* över bedömningsperioden (som speglar åtstramade koldioxidbudgetar), måste analytikern tillämpa det korrekta årsspecifika värdet för varje år i den 30-åriga strömmen, inte en konstant kurs — att använda år 1:s värde genomgående skulle underskatta senare års nyttor och snedvrida rangordningen mot alternativa översvämningsskyddsdesigner med olika koldioxidprofiler.

**Kommun**: en kommuns sysselsättningsstödsprogram för långtidsarbetslösa invånare placerar 150 personer i jobb som betalar 11 £/timme. Att värdera detta med den fulla marknadslönen skulle kreditera programmet med 11£ × arbetade timmar som samhällelig nytta, men skugglöneansatsen erkänner att dessa inte var arbetare hämtade från andra jobb — den verkliga alternativkostnaden för deras arbetskraft innan programmet var låg.

```
Marknadslön: 11,00£/timme
Skugglönesats （illustrativ, hög lokal arbetslöshet）:
  0,6 × marknadslön = 6,60£/timme
Nettosamhällelig nytta per arbetad timme ≈ 11,00£ − 6,60£
                                           = 4,40£/timme
  （det "extra" värde som skapas genom att flytta genuint
   overksam arbetskraft till produktion, till skillnad från
   själva lönen, som till stor del är en överföring）
```

Detta är varför bedömningar av sysselsättningsprogram i områden med hög arbetslöshet kan visa ett positivt nettosamhälleligt värde även när samma program, kört i ett område med full sysselsättning där undanträngd arbetskraft helt enkelt skulle hämtas från andra jobb, inte skulle göra det.

## Koppling till mjukvaruutveckling

Skuggprissättning berör sällan mjukvaruleverans direkt, men den spelar roll när ett affärsärende påstår en koldioxid- eller samhällelig nytta från en IT-förändring — en datacenterkonsolidering som påstår koldioxidbesparingar, eller en pappersfri tjänst som påstår undviken koldioxid från tryck och post, måste använda det aktuella officiella skuggpriset för koldioxid snarare än en påhittad siffra, och måste tillämpa det korrekta år-för-år-schemat snarare än en konstant kurs, precis som med alla andra Green Book-bedömningsinmatningar. Se [total ägandekostnad inom statlig IT](../total-cost-of-ownership-in-government-it/) och [offentlig sektors cybersäkerhetsvärde](../public-sector-cybersecurity-value/), som båda ofta behöver ett skuggpris för en svårmonetariserad inmatning (intrångsrisk, driftstopp) tillsammans med direkt kostnadsberäknade poster.

## Fallgropar

- **Att använda en föråldrad koldioxid- eller lönesiffra.** Båda värdena revideras regelbundet av central vägledning; en bedömning byggd på en föråldrad siffra kommer inte att överleva finansdepartementets granskning.
- **Att tillämpa ett konstant skuggkoldioxidpris över en flerdecennisk bedömning.** Det officiella schemat stiger över tid; att använda år 1:s värde genomgående felredovisar profilen av nyttor eller kostnader.
- **Att förväxla skugglönen med en rabatt på arbetarens faktiska lön.** Skugglönesatsen justerar *bedömningens* värdering av arbetskraftsinmatningen, inte lönen arbetaren faktiskt får — att sammanblanda de två inbjuder till att (felaktigt) motivera lön under marknadsnivå.
- **Att härleda ett skräddarsytt skuggpris istället för att använda det officiella.** Skuggpriser är policykonventioner just så att bedömningar är jämförbara mellan departement; en lokalt påhittad siffra, hur väl motiverad den än är, bryter den jämförbarheten.

## Källor

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
