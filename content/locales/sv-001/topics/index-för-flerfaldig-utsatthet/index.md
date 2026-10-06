# Index för flerfaldig utsatthet (IMD)

IMD är det officiella måttet på relativ utsatthet för småområden i England, som rangordnar alla landets 32 844 Lower-layer Super Output Areas (LSOA, var och en ungefär 1 500 invånare) från 1 (mest utsatt) till 32 844 (minst utsatt). Det publiceras av vad som nu är Ministry of Housing, Communities and Local Government (MHCLG, tidigare MHCLG/DCLG), senast som English Indices of Deprivation 2019, och det dirigerar direkt centralstatlig finansiering, folkhälsoprioritering, och behörighet för dussintals lokala program.

## Varför det spelar roll

Utsatthet är inte en sak — ett grannskap kan vara inkomstfattigt men säkert, eller inkomstmässigt tillräckligt men lida av dåliga hälsoutfall och dåligt boende. IMD:s föregångarindex (som sträcker sig tillbaka till 1970-talets Department of the Environment-utsatthetsindikatorer) utvecklades till dagens sjudomänmodell just eftersom enindikatormålinriktning (arbetslöshetsgrad ensam, säg) rutinmässigt missade områden utsatta på andra sätt. IMD 2019 kombinerar inkomst, sysselsättning, utbildning, hälsa, brottslighet, hinder för boende och tjänster, och levnadsmiljö till en sammansatt rankning per LSOA, varje domän byggd från sin egen korg av indikatorer och viktad enligt MHCLG:s metodik. Eftersom det opererar på småområdesnivå (LSOA) snarare än kommunnivå exponerar det fickor av utsatthet dolda inuti annars välmående distrikt — anledningen till att IMD, inte genomsnittlig kommunal inkomst, är vad NHS England, Department for Educations pupil premium, och dussintals kommunala finansieringsformler faktiskt bygger på. Mjukvara som avgör behörighet, prioriterar uppsökande verksamhet, eller rapporterar effekt efter område i England bör behandla IMD-decil eller rankning som en förstklassig inmatning, inte en efterhandstanke — och där ett program medvetet riktar sig till de mest utsatta områdena bör dess bedömning tillämpa [fördelningsviktning](../fördelningsviktning/) konsekvent med den målinriktningen, snarare än att värdera en pund nytta lika oavsett var den landar.

## Beräkningen

```
7 domäner, viktade:
  Inkomst                              22,5%
  Sysselsättning                       22,5%
  Utbildning, kompetens och träning    13,5%
  Hälsoutsatthet och funktionshinder   13,5%
  Brottslighet                          9,3%
  Hinder för boende och tjänster        9,3%
  Levnadsmiljö                          9,3%

Varje domänpoäng: indikatorer standardiserade （rankade, sedan
transformerade mot en normalfördelning） och kombinerade genom
exponentiell transformation så att hög utsatthet på en enskild
indikator inte helt kan uppvägas av låg utsatthet på andra
inom den domänen.

IMD sammansatt poäng （LSOA） = Σ （domänpoäng × domänvikt）
Rangordna LSOA:er efter sammansatt poäng → 1 （mest utsatt）
till 32 844 （minst utsatt）
Deciler: rankning ÷ 3 284 （ungefär）, decil 1 = mest utsatta
10% av LSOA:er
```

## Genomräknat exempel

**LSOA sammansatt poäng**, med illustrativa standardiserade domänpoäng (0 = ingen utsatthetssignal, högre = mer utsatt):

```
Inkomst              0,35 × 0,225 = 0,07875
Sysselsättning       0,30 × 0,225 = 0,06750
Utbildning           0,20 × 0,135 = 0,02700
Hälsa                0,15 × 0,135 = 0,02025
Brottslighet         0,10 × 0,093 = 0,00930
Hinder för boende    0,05 × 0,093 = 0,00465
Levnadsmiljö         0,08 × 0,093 = 0,00744

Sammansatt poäng = 0,07875 + 0,06750 + 0,02700 + 0,02025
                 + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Den sammansatta poängen rangordnas sedan mot alla 32 844 LSOA:ers poäng. Om det placerar LSOA:n på rankning 2 950, faller den i decil 1 (2 950 ÷ 3 284 ≈ 0,9, dvs. inom de mest utsatta 10% av grannskap i England) — vilket för många finansieringsformler är tröskeln som utlöser behörighet, oavsett hur den omgivande kommunen poängsätter i genomsnitt.

## Koppling till mjukvaruutveckling

- Alla tjänster som geokodar användare till postnummer eller LSOA kan koppla den publicerade IMD-uppslagstabellen (en gratis, versionshanterad CSV från MHCLG) för att lägga till utsatthetsdecil som en kovariat — för att rikta uppsökande verksamhet, prioritera ärendemängd, eller rapportera utfall efter utsatthetsband utan att samla in ny personuppgift.
- IMD-decil är en standardrättvisekontroll för offentliga digitala tjänster: att korstabulera tjänsteanvändning, avhopp, eller nöjdhet efter IMD-decil ytar tillgänglighetsklyftor ett aggregerat mått döljer — se [digital inkludering](../digital-inkludering/) och [medborgarnöjdhetsmått](../medborgarnöjdhetsmått/).
- Eftersom IMD-rankning är relativ (den summerar alltid till en fast uppsättning rankningar över England) kan den inte visa huruvida utsatthet nationellt stiger eller faller över tid — bara vilka områden som rangordnas var relativt varandra i den utgåvan; bygg inte instrumentpaneler för absoluta trender enbart på rå IMD-rankning.

## Fallgropar

- **Att jämföra IMD-rankningar mellan utgåvor (2015 kontra 2019) som en tidstrend** — de underliggande indikatorerna, geografierna och metodiken förändras alla mellan utgåvor; MHCLG avråder explicit från att använda rankningsförändringar som bevis på att ett område blev mer eller mindre utsatt.
- **Att tillämpa LSOA-nivå-IMD på individer** — en LSOA i decil 1 innehåller fortfarande icke-utsatta hushåll, och en decil-10-LSOA innehåller fortfarande utsatta sådana; IMD beskriver områden, inte människor, och att använda den som en individbehörighetsproxy felklassificerar i båda riktningarna.
- **Att ignorera domännivådetalj till förmån för den sammansatta rankningen** — två LSOA:er med identiska sammansatta poäng kan ha helt olika domänprofiler (en hälsoutsatt, en brottslighetsutsatt); ett målinriktningssystem riktat mot ett problem bör använda den relevanta domänpoängen, inte den blandade sammansatta.

## Källor

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
