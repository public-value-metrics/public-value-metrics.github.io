# Kostnad per transaktion

Kostnad per transaktion är rubrikmåttet för enhetsekonomi för en statlig digital tjänst: total kostnad för att leverera en kanal, dividerad med antalet transaktioner slutförda genom den. Det var flaggskeppssiffran på den gamla GOV.UK Performance Platform, och det är talet som finansierade ett decennium av "digital by default"-investeringar — vilket är precis varför det också är måttet mest benäget att manipuleras.

## Varför det spelar roll

Cabinet Offices Digital Efficiency Report från 2012 satte kanalkostnadsjämförelsen i termer som fastnade: digitala transaktioner befanns kosta ungefär 20 gånger mindre än per telefon och ungefär 50 gånger mindre än ansikte mot ansikte, med illustrativa kommunala siffror på ungefär 0,15 £ per webbtransaktion mot 2,83 £ per telefon och 8,62 £ ansikte mot ansikte. Den enda jämförelsen blev motiveringen för att omdesigna de 25 exempeltjänsterna namngivna i Government Digital Strategy, och för varje departementalt affärsärende som citerat kanalskiftesbesparingar sedan dess. Siffran är genuint användbar som en storleksordningssignal, men förhållandet beror helt på vad som räknas på varje sida: en rättvis telefonkanalkostnad inkluderar callcentrets personal, telefonikontrakt, utbildning och lokaler; en rättvis digital kostnad inkluderar hosting, löpande produktteamlöner, supportdesktid för misslyckade resor, och den assisterade digitala kanalen som krävs av [digital tjänstestandard](../digital-tjänstestandard/) punkt 5. Ta bort tillräckligt av dessa från den digitala sidan och alla tjänster ser billiga ut.

## Beräkningen

```
Kostnad per transaktion = total allokerad kanalkostnad /
                          slutförda transaktioner

Total allokerad kanalkostnad bör inkludera:
  + hosting och infrastruktur
  + produkt-/tekniks-/supportteamkostnad （avskriven）
  + innehålls- och tjänstedesignkostnad （avskriven）
  + assisterad digital/tillgänglighetsstödkostnad
  + kostnad för misslyckad efterfrågan （användare som
    misslyckas digitalt och faller tillbaka på telefon）
  − engångsbyggkostnad avskrivs över förväntad
    tjänstelivslängd, inte kostnadsförs helt under år ett

Den vanliga redovisningstricket:
  "Marginell kostnad per transaktion" （endast hosting, när
  väl byggd） citeras som om det vore "genomsnittlig kostnad
  per transaktion" （total kostnad inklusive teamet som
  fortsätter bygga och driva den）. De två kan skilja sig
  med 10x eller mer för en tjänst med ett stort, aktivt
  leveransteam.
```

## Genomräknat exempel

**Tjänst för fordonsskattefönyelse**: 4 miljoner transaktioner/år.

```
Endast-marginell siffra （tricket）:
  Endast hosting + betalningsbehandling = 180 000£/år
  Kostnad per transaktion = 180 000 / 4 000 000 = 0,045£
  → rubriksiffra citerad i ett affärsärende

Fullt belastad siffra （den ärliga）:
  Hosting + betalning                    180 000£
  Produkt-/teknikteam （8 heltider）       720 000£
  Supportdesk （misslyckade/ifrågasatta
  transaktioner）                        310 000£
  Assisterad digital telefonlinje         140 000£
  Totalt                                 1 350 000£
  Kostnad per transaktion = 1 350 000 / 4 000 000 = 0,3375£

Den fullt belastade siffran är fortfarande ungefär 8x
billigare än 2,83£-telefonkanaljämförelsen från Digital
Efficiency Report — en verklig och försvarbar besparing —
men 7,5x högre än den endast-marginella siffran citerad i
genvägsversionen. Båda talen är "sanna"; endast ett är
jämförbart med den telefonkanalkostnad det ställs mot.
```

## Koppling till mjukvaruutveckling

Kostnad per transaktion är där arkitekturbeslut blir en finanssiffra: en tjänst som skalar rent automatiskt och behöver lite manuell intervention driver ner denna siffra över tid; en som genererar hög volym av supportärenden från förvirrande felstatus driver upp den oavsett hostingeffektivitet. Det är det naturliga följemåttet till [digital tjänstestandard](../digital-tjänstestandard/) punkt 10 ("definiera hur framgång ser ut, och publicera prestationsdata") och till [servicestandarder och transaktionsmått](../servicestandarder-och-transaktionsmått/), som fastställer den fullständigare KPI-uppsättningen denna siffra sitter inom. Det matar också direkt in i [kanalskiftesbesparingar](../kanalskiftesbesparingar/)-beräkningar och bör stämmas av mot [total ägandekostnad inom statlig IT](../total-ägandekostnad-inom-statlig-it/) så att plattforms- och delade tjänsters omkostnader inte tyst faller bort.

## Fallgropar

- **Marginell kostnad klädd som genomsnittskostnad**: att citera endast-hosting-kostnad när en tjänst väl byggts, och utelämna det löpande teamet som underhåller, itererar och stödjer den — se det genomräknade exemplet ovan.
- **Att exkludera assisterad digital kostnad**: en kanal är inte "digital by default"-efterlevande, och dess sanna kostnad fångas inte, om telefon-/pappersreservlösningen som krävs av [digital inkludering](../digital-inkludering/) kostnadsberäknas separat eller ignoreras.
- **Att ignorera misslyckad efterfrågan**: transaktioner som börjar digitalt och misslyckas, och genererar ett telefonsamtal eller pappersformulär ändå, är en kostnad för den digitala kanalen, inte kanalen som fångar upp misslyckandet.
- **Att jämföra transaktioner av olika komplexitet över kanaler**: telefonsamtal hanterar oproportionerligt svåra fall (flera anhöriga, felkorrigering, utsatta sökande); att jämföra en genomsnittlig telefonkostnad med en genomsnittlig digital kostnad överdriver förhållandet om inte transaktionsmixen matchas.

## Källor

- Cabinet Office, Digital Efficiency Report (2012).
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like.
  <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012).
  <https://www.gov.uk/government/publications/government-digital-strategy>
