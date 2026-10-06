# Lagen om socialt värde

Public Services (Social Value) Act 2012 är en brittisk lagstadgad skyldighet som kräver att offentliga myndigheter i England och Wales överväger hur det som upphandlas kan förbättra det relevanta områdets ekonomiska, sociala och miljömässiga välfärd, och att överväga samråd om detta, innan en upphandlingsprocess för offentliga tjänstekontrakt inleds. Den trädde i kraft i januari 2013 som en relativt lätthanterlig "ta hänsyn till"-skyldighet, och förstärktes avsevärt genom Procurement Policy Note (PPN) 06/20 i januari 2021, som kräver att statliga kontrakt explicit utvärderar — inte bara överväger — socialt värde, med en minsta viktning i tilldelningskriterierna.

## Varför det spelar roll

Före PPN 06/20 kunde "att överväga" socialt värde uppfyllas av en uppdragsgivare som noterade att de hade tänkt på det, utan krav på att det skulle påverka tilldelningsbeslutet — en skyldighet lätt att uppfylla på papper och ignorera i praktiken. PPN 06/20 stängde den luckan för central statens upphandling: den föreskriver att socialt värde poängsätts som en del av anbudsutvärderingen, organiserat kring fem nationella prioriterade teman — covid-19-återhämtning, att bekämpa ekonomisk ojämlikhet, att bekämpa klimatförändringar, lika möjligheter och välfärd — och vanligtvis mätt med hjälp av ramverket National TOMs (Themes, Outcomes, Measures) som upprätthålls av Social Value Portal. För en mjukvaruingenjör som bygger upphandlings-, kontraktshanterings- eller anbudsstödsverktyg för den offentliga sektorn är detta den juridiska grunden din klient är skyldig att bygga mot, inte en valfri trevlig-att-ha-funktion.

## Beräkningen

Socialt värde är ett ramverksformat ämne; dess "beräkning" är den poängsättningsstruktur de flesta myndigheter använder:

```
Total anbudspoäng = Pris/kostnadsviktning + Kvalitetsviktning
                   + Socialtvärdesviktning

PPN 06/20 （centralstaten）: socialtvärdesviktning ≥ 10% av
                            total poäng

Teman för socialt värde （PPN 06/20）:
 1. Covid-19-återhämtning
 2. Att bekämpa ekonomisk ojämlikhet
 3. Att bekämpa klimatförändringar
 4. Lika möjligheter
 5. Välfärd
```

Anbudsgivare monetariserar typiskt sina åtaganden mot dessa teman med [databaser för enhetskostnader](../databaser-för-enhetskostnader/), och samma monetariseringslogik som används i [social avkastning på investering](../social-avkastning-på-investering/) gäller: ett åtagande bör styrkas, tillskrivningsbart kontraktet, och inte dubbelräknas mot annan finansiering.

## Genomräknat exempel

**Kommunalt IT-kontrakt**: ett 3-årigt kontrakt på 2 miljoner £ poängsätts 60% kvalitet, 30% pris, 10% socialt värde. Anbudsgivare A åtar sig 2 lärlingsplatser, 150 000 £ i lokal underleverantörsutgift, och 200 timmar pro bono digital kompetensutbildning för en lokal skola, monetariserat med proxyvariabler från en databas för enhetskostnader till kombinerade 90 000 £ i ytterligare socialt värde. Anbudsgivare B åtar sig ett mindre paket monetariserat till 40 000 £. Om myndigheten poängsätter socialt värde proportionellt mot det starkaste anbudet får Anbudsgivare A fulla 10 poäng; Anbudsgivare B får 10 × (40 000 £ ÷ 90 000 £) = 4,4 poäng — ett gap på 5,6 poäng som kan avgöra kontraktet även där kvalitet och pris ligger nära varandra.

**Ideell sektors anbudsgivare**: en liten VCSE (frivillig-, gemenskaps- och socialt företag) som lämnar anbud på ett markskötselkontrakt mot en kommersiell konkurrent kan inte konkurrera på enhetspris ensamt, men använder Global Value Exchange-proxyvariabler för att monetarisera sina befintliga engagemang i lokal sysselsättning och volontärarbete, vilket skapar ett styrkt fall för socialt värde värt att poängsätta tillsammans med pris och kvalitet.

## Koppling till mjukvaruutveckling

Att vinna ett anbud med monetariserade åtaganden om socialt värde skapar en skyldighet att styrka leverans mot dem genom kontraktshantering — verktyg som loggar lärlingsstarter, lokal utgift och utbildningstimmar mot de specifika åtaganden som poängsattes vid upphandling, och matar in dem i kontraktsgranskningsmöten istället för att glömmas bort så snart kontraktet är undertecknat. G-Cloud- och Digital Marketplace-listningar kräver alltmer uttalanden om socialt värde vid listningstillfället. Se [social avkastning på investering](../social-avkastning-på-investering/) för värderingsmetoden bakom åtagandena, [databaser för enhetskostnader](../databaser-för-enhetskostnader/) för de proxyvariabler anbudsgivare använder, och [utfall kontra output](../utfall-kontra-output/) för att säkerställa att levererade åtaganden är utfall, inte bara aktivitetsantal.

## Fallgropar

- **Socialtvätt-anbud.** Vaga åtaganden ("vi stödjer lokalsamhället") som inte kan mätas eller hållas ansvariga för under kontraktshantering poängsätts väl men levererar ingenting verifierbart.
- **Att behandla socialt värde som en avgörare vid oavgjort.** PPN 06/20 kräver att socialt värde explicit utvärderas inom tilldelningskriterierna, inte används informellt för att bryta oavgjort mellan annars likvärdiga anbud.
- **Ingen uppföljning inom kontraktshantering.** Åtaganden poängsatta vid upphandling spåras ofta aldrig under leverans — se [nyttorealisering](../nyttorealisering/).
- **Inkonsekventa mätramverk mellan kontrakt.** Att använda olika proxykällor för liknande åtaganden på olika kontrakt gör jämförelse på portföljnivå meningslös, vilket är varför gemensamma ramverk som National TOMs och delade databaser för enhetskostnader existerar.

## Källor

- Public Services (Social Value) Act 2012. <https://www.legislation.gov.uk/ukpga/2012/3/contents>
- Cabinet Office, Procurement Policy Note 06/20, "Taking Account of Social Value in the Award of
  Central Government Contracts."
  <https://www.gov.uk/government/publications/procurement-policy-note-0620-taking-account-of-social-value-in-the-award-of-central-government-contracts>
- Social Value Portal, National TOMs Framework. <https://socialvalueportal.com/national-toms/>
