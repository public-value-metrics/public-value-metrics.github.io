# Flödesmått i statlig leverans

Flödesmått — Littles lag, gränser för pågående arbete (WIP), och flödeseffektivitet — beskriver hur snabbt arbete rör sig genom ett system med begränsad kapacitet. En sprinttavla är ett sådant system; en kö för bidragsanspråk, ett register för byggnadsansökningar, eller en eftersläpning av asylärenden är exakt samma matematik i en annan uniform.

## Varför det spelar roll

Statliga ärendeflöden är köningssystem, och köningssystem lyder köningslagar oavsett om någon mäter dem. Lagstadgade beslutsperioder gör detta explicit: under Town and Country Planning-regimet bär de flesta mindre byggnadsansökningar ett lagstadgat beslutsmål på 8 veckor och större ansökningar 13 veckor — ett cykeltidsåtagande inbakat direkt i lagen. Home Offices eftersläpning av asylärenden, granskad upprepade gånger av National Audit Office och Home Affairs Select Committee, är ett väldokumenterat fall av ett offentligt system där pågående arbete växte snabbare än genomströmningen under en varaktig period, vilket drev cykeltider långt bortom alla lagstadgade eller tjänsteförväntningar. Flödesmått ger både ingenjörer och ärendeledningschefer ett delat, kvantitativt vokabulär för just denna felmod, istället för att lämna det som ett kvalitativt "eftersläpningsproblem."

## Beräkningen

```
Littles lag:  WIP = Genomströmning × Cykeltid
          →   Cykeltid = WIP / Genomströmning

Flödeseffektivitet = aktiv （beröring） tid / total cykeltid
                    （Vacanti）

WIP-gränseffekt: vid fast genomströmning halverar en halvering
av WIP ungefär den genomsnittliga cykeltiden （Littles lag
omarrangerad） — spaken tillgänglig utan att lägga till
personal.
```

Se [DORA-mått för offentligt värde](../dora-metrics-for-public-value/) för motsvarande matematik tillämpad på mjukvaruutrullningspipeliner snarare än ärendehantering.

## Genomräknat exempel

**Kommunal planeringsavdelning**: 400 ansökningar öppna vid vilken tidpunkt som helst (WIP), teamet löser 50 ansökningar/vecka (genomströmning).

```
Cykeltid = WIP / Genomströmning = 400 / 50 = 8 veckor
```

Det landar exakt på det lagstadgade 8-veckorsmålet för mindre ansökningar — utan marginal, vilket betyder att all variabilitet i inkommande efterfrågan eller svarstid från remissinstanser driver beslut över den juridiska deadlinen.

**Flödeseffektivitet**: av de 8 veckorna (56 kalenderdagar) har en ansökan typiskt runt 6 timmar av faktisk handläggartid.

```
Flödeseffektivitet = 6 timmar / (56 dagar × 8 arbetstimmar/dag)
                    = 6 / 448 ≈ 1,3%
```

Vacantis benchmark för mjukvaruteam sätter typisk flödeseffektivitet till 15–20%; statlig ärendehantering, med flera lagstadgade remissinstansöverlämningar och offentliga samrådsfönster, körs ofta en storleksordning lägre. De 98,7% "väntetid" är där de åtta veckorna faktiskt tar vägen — inte i handläggarkapacitet.

**WIP-gränsintervention**: att sätta ett tak på öppna ansökningar per handläggare till 15 istället för ett obegränsat 25 (håller genomströmningen konstant) flyttar WIP från 400 till ungefär 240 över ett 16-personers team:

```
Ny cykeltid = 240 / 50 = 4,8 veckor
```

En nästan halvering av cykeltiden från en policyändring, inte en personalökning — samma spak DORA-liknande leveransteam drar när de sätter tak på sprint-WIP.

## Koppling till mjukvaruutveckling

Flödesmått är det delade språket mellan ett leveransteams kanbantavla och det ärendehanteringsgolv det bygger mjukvara för: en handläggares kö och en pull-request-kö styrs båda av Littles lag, och båda blåser sina cykeltidsmål på samma sätt — för mycket WIP i förhållande till genomströmning. Detta har direkt betydelse för [kostnad för fördröjning i offentliga program](../cost-of-delay-in-public-programmes/): cykeltid × CoD är pundet som sitter i kön i vilket ögonblick som helst, och det har betydelse för [servicestandarder och transaktionsmått](../service-standards-and-transaction-metrics/), där ett publicerat handläggningsmål är ett cykeltidsåtagande som bara flödesmått kan diagnostisera när det missas. Ett ärendehanteringssystems mjukvara bör exponera WIP och cykeltid som förstklassiga driftsmått, inte begrava dem i ett ärendehanteringssystem ingen frågar.

## Fallgropar

- **Att lägga till WIP-gränser utan att åtgärda den verkliga flaskhalsen**: om begränsningen är en extern lagstadgad remissinstans svarstid flyttar en begränsning av handläggar-WIP bara kön uppströms snarare än att förkorta den.
- **Att behandla flödeseffektivitet som ett mål att manipulera**: att skynda på de 1,3% aktiv tid rör knappt cykeltiden; hävstången ligger nästan alltid i väntetillstånden, vilket vanligtvis betyder processomdesign, inte handläggarhastighet.
- **Att ignorera variabilitet**: Littles lag beskriver genomsnitt; en ärendemängd med hög efterfrågevarians behöver buffertkapacitet, inte bara en striktare WIP-gräns, annars kommer lagstadgade deadlines fortfarande att missas i den volatila svansen även när genomsnittet förbättras.
- **Att mäta WIP inkonsekvent**: ett ärende "öppet" i registersystemet men faktiskt stillastående i väntan på en tredje part är fortfarande WIP; att exkludera det förskönar siffrorna utan att förändra den medborgarvända verkligheten.

## Källor

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press,
  2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales.
  <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation.
  <https://www.nao.org.uk/>
