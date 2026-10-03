# Index of Multiple Deprivation (IMD)

IMD er den officielle måling for relativ deprivation for små områder i England, og rangordner hver af landets 32.844 Lower-layer Super Output Areas (LSOA'er, hver groft 1.500 indbyggere) fra 1 (mest deprivet) til 32.844 (mindst deprivet). Det offentliggøres af, hvad nu er Ministry of Housing, Communities and Local Government (MHCLG, tidligere MHCLG/DCLG), senest som English Indices of Deprivation 2019, og det ruter direkte centralregerings-finansiering, folkeSundheds-prioritering, og berettigelse for dusinVis af lokale skemaer.

## Hvorfor det betyder noget

Deprivation er ikke en ting — et kvarter kan være indkomst-fattigt men sikkert, eller indkomst-tilstrækkeligt men lide af dårlige sundhedsResultater og dårlig bolig. IMDs forgænger-indekser (dateret tilbage til 1970'ernes Department of the Environment-deprivations-indikatorer) udviklede sig ind i nutidens syv-domæne-model netop fordi enkelt-indikator-målretning (arbejdsløshedsRate alene, for eksempel) routinemæssigt missede områder deprivede på andre måder. IMD 2019 kombinerer indkomst, beskæftigelse, uddannelse, sundhed, kriminalitet, barrierer til bolig og tjenester, og leveMiljø ind i en komposit-rangordning pr. LSOA, hver domæne bygget fra sin egen kurv af indikatorer og vægtet af MHCLGs metodologi. Fordi det opererer på lille-areal (LSOA) snarere end lokal-myndighed-niveau, eksponerer det lommer af deprivation gemt inde i ellers velHavende distrikter — grunden til, IMD, ikke gennemsnitlig lokal-myndighed-indkomst, er, hvad NHS England, Department for Educations pupil premium, og dusinVis af lokal-myndighed-finansieringsFormler faktisk nøgler af. Software, der bestemmer berettigelse, prioriterer outReach, eller rapporterer impact efter område i England, bør behandle IMD-decil eller -rangordning som et førsteKlasse-input, ikke en eftertanke — og hvor et program med vilje målretter de mest deprivede områder, bør dets vurdering anvende [distributionsVægtning](../distributional-weighting/) konsistent med den målretning, snarere end at værdiSætte et pund fordel samme, uanset hvor det lander.

## Beregningen

```
7 domæner, vægtet:
  Indkomst                              22,5%
  Beskæftigelse                         22,5%
  Uddannelse, Færdigheder og Træning     13,5%
  SundhedsDeprivation og Handicap        13,5%
  Kriminalitet                            9,3%
  Barrierer til Bolig og Tjenester        9,3%
  LeveMiljø                               9,3%

Hvert domæne-score: indikatorer standardiseret (rangordnet,
derefter transformeret mod en normal fordeling) og kombineret
ved eksponentiel transformering, sådan at høj deprivation på
en indikator ikke kan helt annulleres af lav deprivation på
andre inden i det domæne.

IMD-kompositScore (LSOA) = Σ (domæneScore × domæneVægt)
Rangordn LSOA'er efter kompositScore → 1 (mest deprivet) til
32.844 (mindst deprivet)
Deciler: rangordning ÷ 3.284 (ca.), decil 1 = mest deprivede
10% af LSOA'er
```

## Gennemregnet eksempel

**LSOA-kompositScore**, ved brug af illustrative standardiserede domæneScores (0 = intet deprivations-signal, højere = mere deprivet):

```
Indkomst               0,35 × 0,225 = 0,07875
Beskæftigelse          0,30 × 0,225 = 0,06750
Uddannelse             0,20 × 0,135 = 0,02700
Sundhed                0,15 × 0,135 = 0,02025
Kriminalitet           0,10 × 0,093 = 0,00930
Barrierer til Bolig    0,05 × 0,093 = 0,00465
LeveMiljø              0,08 × 0,093 = 0,00744

KompositScore = 0,07875 + 0,06750 + 0,02700 + 0,02025
              + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Den kompositScore rangordnes derefter mod alle 32.844 LSOA'ers scores. Hvis den placerer LSOAen ved rangordning 2.950, falder den i decil 1 (2.950 ÷ 3.284 ≈ 0,9, dvs. inden for de mest deprivede 10% af kvarterer i England) — hvilket for mange finansieringsFormler er tærsklen, der lukker berettigelse op, uanset hvordan den omGivende lokale myndighed scorer i gennemsnit.

## Forbindelse til softwareudvikling

- Enhver tjeneste, der geoKoder brugere til postNummer eller LSOA, kan joine den offentliggjorte IMD-opslagsTabel (en fri, versioneret CSV fra MHCLG) for at tilføje deprivations-decil som en kovariat — for målretning af outReach, prioritering af sagsBelastning, eller rapportering af resultater efter deprivations-bånd uden at indsamle ny personlig data.
- IMD-decil er en standard lighedsKontrol for statslige digitale tjenester: tvær-tabulering af tjeneste-optagelse, frafald, eller tilfredshed efter IMD-decil eksponerer adgangsGab, en aggregeret måling skjuler — se [digital inklusion](../digital-inclusion/) og [borgerTilfredshedsMålinger](../citizen-satisfaction-metrics/).
- Fordi IMD-rangordning er relativ (den summer altid til et fast sæt af rangordninger over England), kan den ikke vise, om deprivation nationalt stiger eller falder over tid — kun hvilke områder rangordner hvor relativt til hinanden i den udgave; byg ikke absolut-tendens-dashboards på rå IMD-rangordning alene.

## Faldgruber

- **At sammenligne IMD-rangordninger over udgaver (2015 vs. 2019) som en tidsTendens.** De underliggende indikatorer, geografier, og metodologi ændrer sig alle mellem udgaver; MHCLG rådgiver explicit mod at bruge rangordnings-ændringer som evidens, et område blev mere eller mindre deprivet.
- **At anvende LSOA-niveau-IMD på individer.** En LSOA i decil 1 indeholder stadig ikke-deprivede husholdninger, og en decil-10-LSOA indeholder stadig deprivede en; IMD beskriver områder, ikke mennesker, og at bruge den som en individuel-berettigelses-proxy misKlassificerer begge retninger.
- **At ignorere domæne-niveau-detalje i favør af komposit-rangordningen.** To LSOA'er med identiske kompositScores kan have helt forskellige domæneProfiler (en sundheds-deprivet, en kriminalitets-deprivet); et målretnings-skema siktet på et problem bør bruge den relevante domæneScore, ikke den blandede komposit.

## Kilder

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
