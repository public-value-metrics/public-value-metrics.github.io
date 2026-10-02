# Government as a Platform (GaaP)

Government as a Platform är strategin att bygga delade, återanvändbara komponenter — en aviseringstjänst, en betalningstjänst, en identitetstjänst — en gång, centralt, så att hundratals enskilda statliga tjänster konsumerar dem istället för att var och en bygger sina egna. Det ramar om offentlig digital infrastruktur som ett plattformsekonomiskt problem: värdet ligger inte i någon enskild integration, det ligger i att marginalkostnaden för det *nästa* teamet som antar den närmar sig noll.

## Varför det spelar roll

GDS lade fram strategin formellt i sin publikation "Government as a Platform" 2015, och hävdade att staten hade byggt samma kapaciteter — att ta emot betalningar, avisera användare, verifiera identitet, adressuppslagning — separat i tjänst efter tjänst, var och en med sin egen upphandling, säkerhetsbedömning och löpande supportbörda. Alternativet var ett litet antal delade plattformar, byggda till en hög standard en gång och återanvända överallt: GOV.UK Notify för att skicka e-post, textmeddelanden och brev, GOV.UK Pay för att ta emot onlinebetalningar, och GOV.UK One Login (efterträdare till det tidigare GOV.UK Verify-identitetsprogrammet) för identitetsverifiering. Skalan dessa plattformar nått är det tydligaste beviset på att strategin fungerade: GOV.UK Pay har behandlat över 10 miljarder £ i transaktioner över ungefär 1 800 enskilda tjänster — och där det tog ungefär fyra år att behandla dess första miljard £, behandlar den nu lika mycket på ungefär fem månader — medan GOV.UK Notify har skickat mer än 9 miljarder meddelanden på uppdrag av över 1 500 statliga organisationer. Var och en av dessa antagande tjänster undvek att bygga, säkra och underhålla sin egen betalningsgateway eller meddelandepipeline.

## Beräkningen

```
Byggkostnad per tjänst （ingen plattform） = N tjänster ×
  kostnad att bygga, säkerhetsbedöma och driva ett
  betalnings-/aviserings-/identitetssystem

Plattformskostnad = fast plattformsbyggkostnad
                   + marginalkostnad per antagande tjänst
                     （integration, konfiguration, löpande
                     plattformsteamsupport）

Återanvändning når break-even när:
  plattformsbyggkostnad < N × （byggkostnad per tjänst −
  marginell integrationskostnad）

För en mogen plattform närmar sig marginalkostnaden per
ytterligare antagare bara transaktions-/meddelandeavgiften
ensam — den fasta kostnaden avskrivs över hela det statliga
beståndet, inte ett enskilt departements budget, vilket är
varför GaaP-komponenter vanligtvis finansieras centralt
snarare än debiteras till full kostnadsåtervinning till
tidiga antagare.
```

## Genomräknat exempel

**Kommun som antar GOV.UK Pay istället för att bygga en betalningsgateway**:

```
Bygg-egen-uppskattning:
  PCI-DSS-efterlevnadsarbete + integration + löpande
  underhåll ≈ 85 000£ bygg + 22 000£/år underhåll

GOV.UK Pay-antagande:
  Integrationsarbete ≈ 12 000£ （utvecklartid）
  Transaktionsavgifter: statlig-till-medborgare-kortbetalningar
  debiteras typiskt med en liten procentsats + fast avgift
  per transaktion, ingen separat PCI-DSS-börda burits av
  kommunen ≈ 12 000£ engångs, löpande kostnad variabel med
  volym, inte fast

Förstaårsbesparing ≈ 85 000£ − 12 000£ = 73 000£, innan det
undvikna underhållet på 22 000£/år och den undvikna
efterlevnadsrisken av att alls hålla kortdata i ett
kommundrivet system räknas — denna andra kategori är
säkerhetsvärdet som täcks i
public-sector-cybersecurity-value.
```

Skala den 73 000£ över de ungefär 1 800 tjänster som nu använder GOV.UK Pay och den aggregerade undvikna byggkostnaden över staten är i hundratals miljoner — plattformsekonomin, inte någon enskild integration, är där strategins värde faktiskt ligger.

## Koppling till mjukvaruutveckling

Government as a Platform är ett direkt argument för [bygga eller köpa inom staten](../build-vs-buy-in-government/): när en delad, bedömd, väldriven komponent existerar är att bygga en skräddarsydd motsvarighet mycket sällan det bättre [valuta-för-pengarna](../value-for-money/)-valet, och det misslyckas med [digital tjänstestandard](../digital-service-standard/) punkt 13 ("använd och bidra till öppna standarder, gemensamma komponenter och mönster") nästan per definition. Det förändrar också formen på [total ägandekostnad inom statlig IT](../total-cost-of-ownership-in-government-it/): plattformsantagande byter en stor kapital- och underhållspost mot en mindre, användningskopplad driftskostnad, som är lättare att prognostisera och lättare att avfinansiera om en tjänst läggs ner. Öppen återanvändning av komponenter har en kusin i [värdet av öppna data](../open-data-value/) — båda är strategier för att behandla något staten producerar en gång som delad infrastruktur snarare än en departemental tillgång.

## Fallgropar

- **Skuggåterbygge**: team bygger tyst sin egen betalnings- eller aviseringsintegration eftersom plattformens onboardingprocess är långsammare än att göra det själva — ett styrningsfriktionsproblem, inte ett teknikproblem, och det urholkar tyst återanvändningsekonomin hela strategin är beroende av.
- **Underfinansiering av plattformsteamet i förhållande till det värde det skapar**: värde tillfaller konsumerande departement medan kostnaden ligger hos plattformsteamet, vilket skapar en kronisk underinvesteringsrisk om inte finansieringen centraliseras och skyddas — en version av allmänningens tragedi.
- **Att mäta plattformsframgång enbart genom användning**: antagandesiffror (onboardade tjänster, skickade meddelanden) är en ledande indikator, inte bevis på värde; det verkliga testet är den undvikna byggkostnads- och undvikna riskaritmetiken ovan.
- **Att behandla "plattform" som synonymt med "monolit"**: GaaP-komponenter lyckas eftersom var och en gör en sak bra med ett smalt, stabilt gränssnitt — att paketera orelaterade kapaciteter i en "plattform" återskapar det skräddarsydda byggproblemet i en annan skala.

## Källor

- Government Digital Service, Government as a Platform.
  <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going".
  <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
