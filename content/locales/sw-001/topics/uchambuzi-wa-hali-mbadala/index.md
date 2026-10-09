# Uchambuzi wa Hali Mbadala

Hali mbadala (counterfactual) ni makadirio ya kile ambacho kingetokea bila uingiliaji. Bila hiyo, mabadiliko yanayoonekana baada ya programu kuanza hayawezi kutofautishwa na mabadiliko ambayo yangetokea hata hivyo — hakuna hali mbadala, hakuna ushahidi wa athari, hata namba za kabla-na-baada zinavyoonekana kuvutia kiasi gani. Magenta Book ya HM Treasury huchukulia ujenzi wa hali mbadala ya kuaminika kama kazi kuu ya kimbinu ya tathmini ya athari, muhimu zaidi kuliko uchaguzi mwingine wowote wa usanifu.

## Kwa nini ni muhimu

"Uhalifu ulipungua kwa 15% katika mwaka baada ya kuanzisha programu" si ushahidi kwamba programu ilifanya kazi isipokuwa unajua kile ambacho kingetokea kwa uhalifu bila hiyo — uhalifu ungeweza kupungua kwa 20% hata hivyo kwa sababu ya mielekeo isiyohusiana ya kiuchumi au kidemografia, ikimaanisha programu kwa kweli ilizidisha mambo ukilinganisha na hali mbadala, licha ya namba ghafi kuboreka. Hili ndilo kosa la kawaida zaidi la uchambuzi katika madai ya athari ya sekta ya umma na ya kijamii: kuchukulia ulinganisho wa kabla/baada kama ushahidi wa usababishi. Magenta Book iko wazi kwamba tathmini ya athari ipo kujibu swali la hali mbadala — "uingiliaji huu ulileta tofauti gani?" — na kwamba kulijibu kunahitaji kukadiria, si kuelezea tu, ulimwengu ambao haukutokea.

Mbinu tofauti hujenga hali mbadala kwa viwango tofauti vya uhakika, na mwongozo wa tathmini wa serikali huzipanga ipasavyo. Majaribio ya kudhibitiwa yenye mgawanyo wa nasibu (RCT), ambapo watu binafsi au maeneo hugawiwa kwa nasibu kupokea uingiliaji au la, huzalisha hali mbadala yenye nguvu zaidi kwa sababu ugawaji wa nasibu huhakikisha vikundi vya matibabu na udhibiti vinatofautiana, kwa wastani, kwa kupokea uingiliaji tu. Cabinet Office na What Works Network wamekuza RCT katika sera za umma za Uingereza tangu ripoti ya Behavioural Insights Team ya 2012 "Test, Learn, Adapt," hasa kwa sababu usanifu dhaifu zaidi unaathirika na mchanganyiko wa vigezo — tofauti inayoonekana inaweza kuakisi nani alichagua kushiriki, si athari ya programu. Pale ugawaji wa nasibu hauwezekani au si wa kimaadili (kama mara nyingi ilivyo kwa programu zenye haki ya kisheria, au kwa mabadiliko ya sera ya idadi nzima ya watu), Magenta Book inaweka daraja wazi la njia mbadala dhaifu zaidi lakini bado muhimu: vikundi vya kulinganisha vilivyolinganishwa, usanifu wa tofauti-katika-tofauti, kutoendelea kwa urejeshaji (regression discontinuity) kuzunguka vizingiti vya kustahili, na, kama suluhisho la mwisho, ulinganisho rahisi wa kabla/baada — ukiwekewa alama wazi kama aina dhaifu zaidi ya ushahidi, inayoelekea kuchanganya athari ya programu na athari ya kila kitu kingine kilichobadilika wakati huohuo.

## Hisabati

Mfumo wa hali mbadala, unaotumika katika mbinu zote:

```
Athari iliyokadiriwa = Matokeo(na uingiliaji) − Matokeo(hali mbadala: bila uingiliaji)

SIO:
Athari iliyokadiriwa ≠ Matokeo(baada) − Matokeo(kabla)   [huchanganya muda na matibabu]
```

Tofauti-katika-tofauti, mojawapo ya usanifu wa kawaida zaidi wa nusu-majaribio katika tathmini za serikali, hutenga athari ya matibabu kwa kutoa mabadiliko ya kabla/baada ya kikundi cha kulinganisha chenyewe:

```
Kadirio la DiD = [Matokeo(waliotibiwa, baada) − Matokeo(waliotibiwa, kabla)]
               − [Matokeo(kulinganisha, baada) − Matokeo(kulinganisha, kabla)]
```

Hii huondoa mwelekeo wowote unaoshirikiwa na vikundi vyote viwili (mf. badiliko la uchumi wa taifa linalowaathiri wote), ikiacha mabadiliko tofauti tu yanayohusishwa na uingiliaji.

## Mfano uliokokotolewa

**Programu ya ajira, kabla/baada (usanifu dhaifu)**: mpango wa msaada wa ajira unaripoti kuwa ajira ya washiriki ilipanda kutoka 40% hadi 55% katika mwaka — hitimisho la kijinga la "+pointi 15 za asilimia kutokana na programu."

**Programu ileile, tofauti-katika-tofauti (usanifu imara zaidi)**: kikundi cha kulinganisha kilicholinganishwa cha wasioshiriki wanaofanana, kilichochukuliwa kutoka soko lilelile la ajira la eneo, kinaonyesha ajira ikipanda kutoka 38% hadi 47% katika mwaka uleule (kupona kwa uchumi wa taifa kulikuwa kunaendelea).

```
Mabadiliko ya kikundi kilichotibiwa:   55% − 40% = +pointi 15 za asilimia
Mabadiliko ya kikundi cha kulinganisha: 47% − 38% = +pointi 9 za asilimia

Kadirio la DiD (athari halisi ya programu) = 15 − 9 = +pointi 6 za asilimia
```

Athari ya uaminifu inayoweza kuhusishwa ni pointi 6 za asilimia, si 15 — zaidi ya nusu ya uboreshaji unaoonekana wa kabla/baada ungetokea bila kujali programu, ukisukumwa na kupona kwa uchumi uleule kulikoinua kikundi cha kulinganisha.

**Kutoendelea kwa urejeshaji, kizingiti cha kustahili**: mpango wa ruzuku unapatikana kwa biashara zenye wafanyakazi chini ya 50 tu. Kulinganisha matokeo ya biashara zilizo chini kidogo ya kizingiti (wafanyakazi 45–49, wanaostahili) na biashara zilizo juu kidogo yake (wafanyakazi 50–54, wasiostahili) hutoa hali mbadala ya kuaminika kwa sababu biashara pande zote mbili za kikomo cha kiutawala cha kiholela vinginevyo hufanana — kizingiti, si tabia yoyote ya msingi ya biashara, ndicho kinachoamua kustahili. Tofauti ya wastani ya matokeo ya £2,000 kati ya vikundi viwili, inayoonekana tu kwenye kizingiti, inahusishwa na ruzuku kwa uhakika mkubwa zaidi kuliko ulinganisho rahisi wa wote wanaostahili dhidi ya wote wasiostahili (wanaotofautiana kwa utaratibu kwa ukubwa).

## Uhusiano na uhandisi wa programu

Fikra ya hali mbadala inapaswa kuunda jinsi mifumo ya kufuatilia athari na mifereji ya tathmini kwa programu za serikali na sekta ya kijamii inavyosanifiwa:

- Jenga unasaji wa kikundi cha kulinganisha ndani ya mfumo tangu mwanzo — kurekodi nani alistahili lakini hakujiandikisha, au kundi la wasioshiriki lililolinganishwa — badala ya kukiongeza baada ya programu kuwa tayari imeendeshwa na data ya kabla/baada pekee ipo.
- Pale ugawaji wa nasibu unawezekana (usambazaji wa awamu, huduma ya kidijitali iliyowashwa kwa baadhi ya watumiaji kabla ya wengine), weka vifaa vya kupimia kwenye mfumo ili kuhifadhi ugawaji wa nasibu kama sehemu inayoweza kuulizwa; usambazaji wa awamu huharibu kwa bahati mbaya thamani yake ya tathmini ikiwa mpangilio wa ugawaji haujarekodiwa.
- Hii ndiyo mbinu ya msingi nyuma ya [mbinu za tathmini ya athari](../mbinu-za-tathmini-ya-athari/) na ndiyo inayoitofautisha na [tathmini ya athari dhidi ya tathmini ya mchakato](../tathmini-ya-athari-dhidi-ya-tathmini-ya-mchakato/), ambayo ya pili huuliza kama programu ilitolewa kama ilivyokusudiwa badala ya kama ilisababisha athari.
- [Nyongeza ya athari na uzito mfu](../nyongeza-ya-athari-na-uzito-mfu/) na [uhamishaji na uhusishaji](../uhamishaji-na-uhusishaji/) zote mbili ni, kwa msingi, maswali ya hali mbadala — uzito mfu ni "matokeo haya mahususi yangekuwa nini bila uingiliaji," ukitumika katika ngazi ya marekebisho badala ya usanifu kamili wa tathmini.

## Mitego

- **Kuchukulia kabla/baada kama ushahidi wa usababishi.** Hili ndilo kosa la kawaida zaidi na lenye matokeo makubwa zaidi katika kuripoti athari ya umma na ya sekta ya kijamii; mabadiliko ya kabla/baada huchanganya athari ya programu na kila kitu kingine kilichobadilika katika kipindi hicho.
- **Kutumia kikundi cha kulinganisha kinachotofautiana kwa utaratibu na kikundi kilichotibiwa.** Kikundi cha kulinganisha kilicholinganishwa lazima kifanane kweli kwenye sifa husika (tazama daraja la mbinu katika [uchambuzi wa hali mbadala](../uchambuzi-wa-hali-mbadala/) katika Magenta Book); kulinganisha washiriki wa programu (waliochagua kujiunga, na mara nyingi wenye motisha zaidi) na wasioshiriki (ambao hawakufanya hivyo) kunahatarisha upendeleo wa uteuzi unaojifanya kuwa athari ya programu.
- **Kuharibu fursa za ugawaji wa nasibu kupitia usanifu duni wa utoaji.** Usambazaji wa awamu au wa nasibu huhifadhi thamani yake ya tathmini tu ikiwa ugawaji ni wa nasibu kweli na umerekodiwa — kuwaruhusu wasimamizi wa ndani kuchagua nani aende kwanza hushinda kusudi.
- **Kudai usahihi kupita kiasi kutoka usanifu dhaifu.** Kadirio la kabla/baada linapaswa kuwasilishwa kama kielelezo cha dalili, si ukubwa wa athari uliopimwa; daraja la ushahidi la Magenta Book lipo ili nguvu ya dai ilingane na nguvu ya usanifu uliolizalisha.

## Vyanzo

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
