# Social avkastning på investering (SROI)

Social avkastning på investering är ett ramverk för att mäta, monetarisera och redovisa ett brett värdebegrepp — socialt, miljömässigt och ekonomiskt — och uttrycka det som ett förhållande mot de investerade resurserna, till exempel "1,44 £ av socialt värde för varje investerad £". Det utformades för att utvidga finansiell redovisningslogik till utfall marknader inte prissätter, utan att förlora redovisningens disciplin: varje tal i en SROI måste vara spårbart till ett intressentdefinierat utfall, en evidensbas och en explicit justering för vad som skulle ha hänt ändå.

## Varför det spelar roll

SROI upprätthålls av Social Value UK och Social Value International, efterföljare till SROI Network, vars "A Guide to Social Return on Investment" (2012) fortfarande är referensmetodiken. Ramverket vilar på sju principer — involvera intressenter, förstå vad som förändras, värdera det som spelar roll, inkludera endast det som är väsentligt, överdriv inte, var transparent, och verifiera resultatet — och det är princip fem, "överdriv inte", som de flesta SROI-rapporter i det vilda misslyckas med. Ett förhållande producerat genom att hoppa över justeringar för dödviktsförlust och tillskrivning är inte en SROI; det är ett marknadsföringstal klätt i SROI:s kläder. Mjukvaruingenjörer som bygger rapporteringsverktyg för ideella organisationer, sociala företag eller uppdragsgivare behöver känna till skillnaden, eftersom verktyget antingen kommer att upprätthålla disciplinen eller göra det lätt att hoppa över den.

## Beräkningen

SROI beror på en [teori om förändring](../teori-om-förändring/) för att identifiera vilka utfall som ingår i omfattningen, och uttrycker dem med samma ansvarskedja som en [logisk modell](../logisk-modell/):

```
SROI-förhållande = Nuvärde av utfall / Värde av insatser

Process:
 1. Fastställ omfattning och identifiera intressenter vars
    utfall kommer att mätas
 2. Kartlägg utfall （en teori om förändring, styrkt med
    intressenter, inte antagen）
 3. Styrk utfall och ge dem ett värde med hjälp av finansiella
    proxyvariabler
 4. Fastställ effekt: bruttovärde − dödviktsförlust −
    tillskrivning − förskjutning, applicera sedan avtagande
 5. Beräkna SROI: nettonuvärde av effekt ÷ värde av insatser
 6. Rapportera, använd och förankra — förhållandet är ett
    kommunikationsverktyg, inte slutpunkten
```

Dödviktsförlust, tillskrivning och förskjutning täcks i [additionalitet och dödviktsförlust](../additionalitet-och-dödviktsförlust/) och [förskjutning och tillskrivning](../förskjutning-och-tillskrivning/); alla tre existerar för att isolera den genuina [kontrafaktiska](../kontrafaktisk-analys/) effekten från bruttoutfallet.

## Genomräknat exempel

**Kommunalt sysselsättningsprogram**: årlig insatskostnad 250 000 £. Sextio deltagare flyttar till varaktig sysselsättning; en finansiell proxy för det utfallet (välfärdsökning, minskat bidragsberoende och skatteintäkter kombinerat) är 8 500 £ per person för det första året — se [databaser för enhetskostnader](../databaser-för-enhetskostnader/) för var sådana proxyvariabler kommer ifrån.

- Bruttoutfallsvärde: 60 × 8 500 £ = 510 000 £
- Minus dödviktsförlust (40% skulle troligen ha hittat arbete utan programmet): 510 000 £ × 0,60 = 306 000 £
- Minus tillskrivning (30% av den återstående förändringen beror på andra myndigheters stöd): 306 000 £ × 0,70 = 214 200 £
- År 2-utfall vid 30% avtagande: 214 200 £ × 0,70 = 149 940 £, diskonterat till 3,5%/år (se [samhällelig diskonteringsränta](../samhällelig-diskonteringsränta/)): 149 940 £ ÷ 1,035 = 144 870 £
- Totalt nuvärde av effekt: 214 200 £ + 144 870 £ = 359 070 £
- **SROI-förhållande: 359 070 £ ÷ 250 000 £ = 1,44**, rapporterat som "1,44 £ av socialt värde för varje investerad £"

**Ideell organisation**: en kompisservice på 60 000 £ minskar ensamhet för 80 äldre personer, värderad till en proxy på 1 100 £/person/år. Bruttovärde 88 000 £; efter 35% dödviktsförlust och 15% tillskrivning är nettoeffekten 88 000 £ × 0,65 × 0,85 = 48 620 £, ett SROI-förhållande på 0,81 — under break-even, vilket är ett legitimt och användbart resultat, inte ett misslyckande att skriva upp.

## Koppling till mjukvaruutveckling

En SROI-kalkylator som låter en användare ange utfallsantal och proxyvärden men inte har något obligatoriskt fält för dödviktsförlust, tillskrivning eller en kopplad teori om förändring kommer som standard att producera uppblåsta förhållanden, eftersom att utelämna justeringar är vägen med minst motstånd. Bygg in disciplinen i schemat: varje utfallsrad bör referera en intressentgrupp, en styrkt kvantitet, en finansiell proxy med dess källa, och icke-valfria fält för dödviktsförlust/tillskrivning. Se [utfall kontra output](../utfall-kontra-output/) för den distinktion SROI:s utfallskartläggning beror på, och [logisk modell](../logisk-modell/) för kedjan verktyget bör spegla i sin datamodell.

## Fallgropar

- **Att hoppa över dödviktsförlust och tillskrivning.** Rubrikförhållandet utan dessa justeringar är en bruttosiffra, inte en nettoeffektsiffra, och Social Value UK:s principer kräver explicit båda.
- **Att jämföra förhållanden mellan organisationer.** Ett SROI-förhållande beror på omfattnings- och proxyval gjorda från fall till fall; att behandla ett 4:1-förhållande från en rapport som "bättre" än ett 2:1-förhållande från en annan ignorerar att antagandena inte är standardiserade som ett finansiellt redovisningsnyckeltal.
- **Att dubbelräkna överlappande proxyvariabler.** Att stapla en "minskad ensamhet"-proxy med en "förbättrat mentalt välbefinnande"-proxy för samma förmånstagare kan dubbelvärdera en underliggande förändring.
- **Att hoppa över intressentengagemang.** Princip ett kräver att utfall definieras tillsammans med de människor som upplever dem, inte antas av analytikern som bygger modellen.

## Källor

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
