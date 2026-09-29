# Medborgarnöjdhetsmått

Medborgarnöjdhetsmått mäter hur människor betygsätter sin direkta upplevelse av en offentlig tjänst — distinkt från förtroende för institutioner i allmänhet, och distinkt från huruvida tjänsten faktiskt uppnådde ett bra utfall. En tjänst kan vara omtyckt och ineffektiv, eller effektiv och illa omtyckt; klyftan mellan de två är i sig diagnostisk information ett leveransteam bör bevaka.

## Varför det spelar roll

Nöjdhet mäts på två olika höjder som rutinmässigt sammanblandas. På tjänstenivå kräver Storbritanniens numera nedlagda Performance Platform och dagens GOV.UK-servicemanual en nöjdhetsundersökning per tjänst (typiskt en femgradig skala "mycket nöjd" till "mycket missnöjd", administrerad vid transaktionstillfället) som ett av fyra obligatoriska tjänste-KPI:er — se [servicestandarder och transaktionsmått](../service-standards-and-transaction-metrics/). På institutionell nivå mäter Storbritanniens Civil Service People Survey medarbetarengagemang och -upplevelse över alla centralstatliga departement årligen, och separat undersöker OECD:s program "Trust in Government" allmänhetens förtroende för nationella regeringar över medlemsstater, och spårar ett långsiktigt mönster av nedgång och återhämtning starkt format av kriser (både finanskrisen 2008 och covid-19-pandemin producerade skarpa, synliga rörelser i OECD:s förtroendesiffror). Anledningen till att ingenjörer som bygger medborgarvända tjänster behöver hålla isär nöjdhet och utfall är en känd felmod i tjänstedesign: ett vackert designat, lättanvänt digitalt formulär för en bidragsansökan kan få mycket hög nöjdhet samtidigt som den underliggande policyn — behörighetsregler, handläggningskö, bidragsbelopp — lämnar den sökande inte bättre ställd. Nöjdhet mäter gränssnittet; den mäter inte värdet som levererats bakom det.

## Beräkningen

```
Nettonöjdhet = % nöjda （eller mycket nöjda） − % missnöjda
              （eller mycket missnöjda）
              （neutrala/inga åsikts-svar exkluderas från
               båda termerna, men räknas i svarsbasen för
               att beräkna varje procentsats）

Nöjdhet-utfallsgap = nöjdhetspoäng − poäng för
              utfallsuppnåelse
              （båda normaliserade 0–100; ett stort positivt
               gap signalerar en tjänst som "känns bra" men
               underpresterar i substans）

Förtroendeindex （OECD-stil） = % undersökningsrespondenter
              som svarar "ja" på "har du förtroende för
              ［nationell regering］?" spårat som en
              tidsserie, typiskt uppdelad efter ålder,
              inkomst och utbildning
```

## Genomräknat exempel

**Kommunal e-fakturering för fastighetsskatt**: en nöjdhetsundersökning vid tidpunkten för lyckad transaktion visar 2 400 respondenter: 1 650 nöjda/mycket nöjda, 250 missnöjda/mycket missnöjda, 500 neutrala.

```
Nettonöjdhet = (1 650/2 400 × 100) − (250/2 400 × 100)
             = 68,75% − 10,42%
             = +58,3 nettonöjdhet
```

Detta ser starkt ut isolerat. Men undersökningen visas endast för användare som *lyckas* slutföra transaktionen — en känd mätbias (se fallgropar nedan). Att para den med slutförandegradsmåttet från [servicestandarder och transaktionsmått](../service-standards-and-transaction-metrics/) visar att slutförandegraden endast är 71%, vilket betyder:

```
Sann befolkningsnöjdhet är omätt för de 29% som övergav
resan — troligen den mest missnöjda kohorten, eftersom
övergivandet i sig är en stark negativ signal undersökningen
aldrig fångar.
```

**Illustration på nationell nivå (struktur för en OECD-liknande förtroendeserie)**: nationellt regeringsförtroende rapporterat till 42% år 1, fallande till 34% år 2 (ett kriseår) och återhämtande sig till 39% år 3 — en bana typisk för det chock-och-partiell-återhämtningsmönster OECD dokumenterar över medlemsstater efter större kriser.

## Koppling till mjukvaruutveckling

Instrumentera nöjdhetsundersökningar vid varje meningsfull utgångspunkt i en användarresa, inte bara vid lyckat slutförande — det enskilt vanligaste tekniska misstaget i detta område, och ett som tyst omvandlar ett nöjdhetsmått till ett överlevnadsbiaserat fåfängamått. Där möjligt, para nöjdhetspoängen med ett slutförande- eller utfallsmått på samma instrumentpanel så att ett team inte kan fira stigande nöjdhet medan slutförandet tyst faller (se [kostnad per transaktion](../cost-per-transaction/) och [digital inkludering](../digital-inclusion/) för vem som från början utesluts från digital nöjdhetssampling — icke-digitala och digitalt assisterade användare är systematiskt underrepresenterade i undersökningar i tjänsten). Nöjdhets- och förtroendedata flödar också direkt in i legitimitetsbenet av [Moores strategiska triangel](../public-value/), och hör hemma på "kund"- och "legitimitets"-perspektiven i en [instrumentpanel för offentligt värde](../public-value-scorecard/) — se [förtroende- och legitimitetsmått](../trust-and-legitimacy-metrics/) för den institutionella nivåns motsvarighet till detta tjänstenivåmått.

## Fallgropar

- **Överlevnadsbias i undersökningar vid slutförandetillfället**: användare som överger en resa ser aldrig undersökningen, så en hög nöjdhetspoäng i tjänsten kan samexistera med en låg slutförandegrad och en stor osynlig population av missnöjda icke-slutförare.
- **Att behandla nöjdhet som en proxy för utfall**: ett väldesignat gränssnitt för en dåligt designad policy får bra betyg på nöjdhet och dåligt på utfall — rapportera alltid båda, aldrig en som ersättare för den andra.
- **Små, orepresentativa urval rapporterade med falsk precision**: en nöjdhetspoäng från några hundra självselekterade respondenter rapporterad till en decimal antyder en tillförsikt urvalsstorleken inte kan stödja.
- **Att ignorera demografisk uppdelning**: nationella förtroende- och nöjdhetssiffror som inte bryts ner efter ålder, inkomst, funktionsnedsättning eller digital tillgång kan dölja skarpt avvikande upplevelser mellan grupper — ett mönster OECD:s egna Trust in Government-utgåvor explicit delar upp för.

## Källor

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
