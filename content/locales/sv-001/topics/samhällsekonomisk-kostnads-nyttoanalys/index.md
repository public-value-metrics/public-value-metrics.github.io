# Samhällsekonomisk kostnads-nyttoanalys (SCBA)

Samhällsekonomisk kostnads-nyttoanalys omvandlar varje kostnad och nytta av en policy eller ett program — marknads- och icke-marknadsrelaterad — till en gemensam monetär enhet, diskonterar framtida flöden till nuvärde, och nettar dem för att producera ett enda tal: gör detta förslag samhället bättre, och med hur mycket?

## Varför det spelar roll

SCBA är standardmetoden i det ekonomiska fallet i [Green Book-bedömning](../green-book-bedömning/): HM Treasurys vägledning kräver att förslag visar ett positivt nettonuvärde för samhället (NNVS) varhelst nyttor trovärdigt kan monetariseras, med betalningsvilja som grundläggande värderingsprincip för icke-marknadsvaror (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, kapitel 5). Disciplinen den tvingar fram är att "samhällelig" kostnads-nyttoanalys inte är samma övning som en privat investeringsbedömning: den måste inkludera kostnader och nyttor som faller på tredje parter som inte är part i transaktionen (externaliteter), den måste använda den [samhälleliga diskonteringsräntan](../samhällelig-diskonteringsränta/) snarare än en kommersiell kapitalkostnad, och den bör tillämpa [fördelningsviktning](../fördelningsviktning/) där en pund betyder mer för ett fattigare hushåll än ett rikare.

Där SCBA bryter samman är precis där dess kritiker förväntar sig: varor utan marknadsmotsvarighet — ren luft, social sammanhållning, värdet av ett räddat liv — måste monetariseras med metoder för [betalningsvilja](../betalningsviljevärdering/) eller [avslöjad preferens](../avslöjad-preferensvärdering/), eller ett [skuggpris](../skuggprissättning/) måste konstrueras. När monetarisering är omtvistad snarare än bara svår rekommenderar Green Book själv att man faller tillbaka på [kostnadseffektivitetsanalys](../kostnadseffektivitetsanalys-inom-staten/) eller [multikriterieanalys](../multikriterieanalys/) istället för att tvinga fram ett tal ingen tror på.

## Beräkningen

```
NNVS = Σ ［t=0 till T］ (Nytta_t − Kostnad_t) / (1 + r)^t

där:
  Nytta_t   = alla monetariserade nyttor år t, inklusive
              icke-marknadsvaror värderade via
              betalningsvilja/avslöjad preferens eller
              skuggpris
  Kostnad_t = alla monetariserade kostnader år t, inklusive
              alternativkostnad för resurser
              （se ../opportunity-cost-in-public-spending/）
  r         = samhällelig diskonteringsränta （HM Treasury
              fastställer 3,5% fallande till lägre räntor
              efter år 30, enligt Green Book Annex A）
  T         = bedömningsperiod

Nytta-kostnadsförhållande （BCR） = Σ NV（Nyttor） / Σ NV（Kostnader）
```

Ett BCR över 1 (eller NNVS över noll) indikerar nettosamhälleligt värde. Green Books kategorier för valuta för pengarna (som används inom transport- och infrastrukturbedömning) märker BCR-intervall: under 1,0 är dålig valuta för pengarna, 1,0–1,5 är låg, 1,5–2,0 är medel, 2,0–4,0 är hög, och över 4,0 är mycket hög. Känslighetsanalys — att köra om NNVS under pessimistiska och optimistiska antaganden — är obligatorisk, inte valfri, eftersom monetariserade icke-marknadsnyttor bär breda osäkerhetsintervall.

## Genomräknat exempel

**Kommun**: en kommun bedömer en investering på 3m £ i ett nytt cykel- och gångnätverk över en 20-årig bedömningsperiod till en diskonteringsränta på 3,5%.

```
Kostnader: 3m £ kapital år 0, 50 000 £/år underhåll （år 1–20）
NV（underhåll） ≈ 50 000 £ × 14,2 （20-årsannuitetsfaktorn vid
                3,5%） ≈ 710 000 £
Totalt NV（kostnader） ≈ 3,71m £

Nyttor （alla monetariserade via publicerade DfT/WHO-
värderingsverktyg）:
  Hälsonytta från ökad fysisk aktivitet: 180 000 £/år
  Minskad frånvaro: 40 000 £/år
  Minskad trängsel （färre bilresor）: 60 000 £/år
  Totalt nyttoflöde: 280 000 £/år
NV（nyttor） ≈ 280 000 £ × 14,2 ≈ 3,98m £

NNVS = 3,98m £ − 3,71m £ = +0,27m £
BCR = 3,98 / 3,71 = 1,07 → "låg" valuta för pengarna
```

Programmet klarar ribban men bara precis; en känslighetskörning med en 20% lägre hälsonyttoskattning (som speglar genuin osäkerhet i värderingen av fysisk aktivitet) vänder BCR under 1,0, vilket är precis varför Green Book kräver att känslighetstabellen publiceras tillsammans med rubrikvärdet, inte bara centraluppskattningen.

**Ideell organisation**: ett program för att förebygga spädbarnsdödlighet som kostar 500 000 £/år utvärderas med värdet av ett statistiskt liv (VSL) — ett skuggpris, inte ett observerat marknadspris — på ungefär 2,1m £ (HM Treasurys 2023-uppdaterade siffra, själv härledd från betalningsviljestudier). Att förhindra en spädbarnsdödsfall per år mot en kostnad på 500 000 £ ger ett BCR på 4,2, bekvämt "mycket hög" valuta för pengarna — men hela resultatet vilar på VSL-siffran, vilket är varför alla SCBA som använder VSL måste redovisa den som ett antagande, inte ett faktum.

## Koppling till mjukvaruutveckling

SCBA är den naturliga ramen för plattforms- och infrastrukturinvesteringsbeslut inom statlig mjukvara — att jämföra en delad identitetsplattform mot avdelningsvisa punktlösningar, till exempel, kräver att monetarisera nyttor som minskad dubblerad registreringskostnad, minskat bedrägeri och snabbare tid till tjänst som inte har något marknadspris i sig själva. Ingenjörer som bygger den underliggande tjänsten bör förvänta sig att programansvariga ber om inmatningar till denna analys: enhetskostnader för transaktioner (se [kostnad per transaktion](../kostnad-per-transaktion/)), förväntade volymer, och kostnader för försämring/driftstopp. Disciplinen som är viktigast att importera: diskontera framtida nyttor, namnge den kontrafaktiska baslinjen explicit (se [kontrafaktisk analys](../kontrafaktisk-analys/)), och presentera aldrig en enda punktuppskattning utan dess känslighetsintervall.

## Fallgropar

- **Att dubbelräkna nyttor.** Att räkna både "sparad tid" och "produktivitet vunnen från den tiden" som separata nyttoposter överdriver ärendet; sparad tid är nyttan, dess nedströms användning är inte en ytterligare nytta om den inte bevisas oberoende.
- **Att utelämna förskjutna kostnader.** Ett program som flyttar trängsel från en väg till en annan, eller flyttar bedrägeri från en kanal till en annan, har inte skapat den nettonytta dess rubrik-NNVS antyder — se [förskjutning och tillskrivning](../förskjutning-och-tillskrivning/).
- **Att använda en privat diskonteringsränta.** Att tillämpa en kommersiell kapitalkostnad (säg 8–10%) istället för den samhälleliga diskonteringsräntan systematiskt undervärderar långsiktiga offentliga nyttor som hälso- och miljövinster — se [samhällelig diskonteringsränta](../samhällelig-diskonteringsränta/).
- **Att monetarisera det oomtvistade och vifta bort det omtvistade.** Om två tredjedelar av ett förslags nytta är en tryggt monetariserad effektivitetsbesparing och en tredjedel är en skakigt monetariserad välfärdsvinst, blandar rubrik-NNVS tyst ett hårt tal med ett mjukt; rapportera dem separat.

## Källor

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
