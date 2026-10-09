# Mbinu za Tathmini ya Athari

Mbinu za tathmini ya athari ni usanifu wa takwimu na wa majaribio unaotumika kukadiria kile ambacho sera au programu ilisababisha kweli, tofauti na kile ambacho kingetokea hata hivyo — majaribio ya kudhibitiwa yenye mgawanyo wa nasibu (RCT), tofauti-katika-tofauti, ulinganishaji wa alama ya mwelekeo (propensity score matching), na usanifu wa kutoendelea kwa urejeshaji (regression discontinuity) ndizo nne zinazotumika zaidi katika sera ya umma ya Uingereza. Zipo kwa sababu afua nyingi za serikali haziwezi kujaribiwa maabara: huwezi kugawa kwa nasibu mji upi upate njia mpya ya basi kama unavyoweza kugawa kwa nasibu mgonjwa yupi apate dawa, kwa hivyo mbinu hizi hukopa mantiki ileile ya usababishi bila kuhitaji ugawaji wa nasibu kila mara.

## Kwa nini ni muhimu

Annex A ya Magenta Book ya HM Treasury, kuhusu mbinu za nusu-majaribio, ni mwongozo rasmi wa serikali ya Uingereza wa kuchagua kati ya usanifu huu, na vyombo kama Education Endowment Foundation na What Works Centre for Local Economic Growth hurasimisha daraja la ushahidi lililojengwa kuzunguka — RCT pale ugawaji wa nasibu unapowezekana na ni wa kimaadili, usanifu wa nusu-majaribio pale haupo. Uchaguzi wa mbinu si wazo la baadaye la kiufundi: huamua kama tathmini inaweza kujibu "je, programu ilisababisha hili?" au "je, hili lilitokea baada ya programu kuanza?" tu, ambalo ni swali lilelile ambalo [uchambuzi wa hali mbadala](../uchambuzi-wa-hali-mbadala/) umejengwa kuwalazimisha watendaji kuliuliza kabla tathmini yoyote haijaagizwa.

## Hisabati

```
RCT:
  Athari = wastani(matokeo | kikundi cha matibabu) − wastani(matokeo | kikundi cha udhibiti)
  (halali kwa sababu ugawaji kwa matibabu ni wa nasibu)

Tofauti-katika-tofauti (DiD):
  Athari = [matokeo_baada(waliotibiwa) − matokeo_kabla(waliotibiwa)]
         − [matokeo_baada(udhibiti) − matokeo_kabla(udhibiti)]
  (inahitaji dhana ya "mielekeo sambamba": waliotibiwa na udhibiti wangesogea pamoja
   bila uingiliaji)

Ulinganishaji wa alama ya mwelekeo (PSM):
  1. Kadiria P(matibabu = 1 | vigezo vya ushirikiano X) kwa kila kitengo → alama ya mwelekeo
  2. Linganisha vitengo vilivyotibiwa na visivyotibiwa vyenye alama zinazofanana za mwelekeo
  3. Athari = wastani(matokeo | waliotibiwa) − wastani(matokeo | udhibiti uliolinganishwa)

Usanifu wa kutoendelea kwa urejeshaji (RDD):
  Athari = ruka katika matokeo linaloonekana kwenye kizingiti cha kustahili,
           ikilinganisha vitengo juu kidogo dhidi ya chini kidogo ya kikomo
```

## Mfano uliokokotolewa

**Mamlaka ya mtaa (tofauti-katika-tofauti kwa programu ya familia zenye matatizo)**: matokeo ni mahudhurio ya shule. Eneo lililotibiwa linatoka mahudhurio ya 84% hadi 89% (+pointi 5 za asilimia) katika kipindi cha programu; eneo linalolingana lakini lisilotibiwa linatoka 85% hadi 87% (+pointi 2 za asilimia) katika kipindi kilekile. Kadirio la athari la DiD: 5 − 2 = +pointi 3 za asilimia zinazohusishwa na programu. Likitumika kwa kundi la wanafunzi 2,000 katika eneo lililotibiwa, hili linalingana na takriban wanafunzi 60 wa ziada (3% × 2,000) wanaofikia kategoria ya juu ya mahudhurio, ukadiriaji unaopaswa kuripotiwa na tahadhari yake ya mielekeo sambamba, si kama hesabu sahihi ya vichwa.

**Shirika la hisani (ulinganishaji wa alama ya mwelekeo kwa shirika la hisani la utayari wa ajira)**: washiriki 300 wa programu wanalinganishwa na watu 300 kutoka seti kubwa ya data ya kiutawala kwa kutumia alama za mwelekeo zilizojengwa kutoka umri, historia ya awali ya ajira, na kiwango cha sifa. Kiwango cha ajira cha miezi kumi na miwili: kikundi kilichotibiwa kilicholinganishwa 46%, kikundi cha kulinganisha kilicholinganishwa 33%. Kadirio la athari la PSM: 46% − 33% = +pointi 13 za asilimia zinazohusishwa na programu, kwa sharti kwamba hakuna kigezo cha kuchanganya kisichoonekana (kama motisha) kinachoendesha ushiriki na matokeo.

## Uhusiano na uhandisi wa programu

Kama usanifu wowote kati ya hizi unawezekana baadaye hutegemea sana maamuzi ya uhandisi wa data yaliyofanywa mapema. RDD inahitaji kigezo cha kuendesha kilichorekodiwa kwa usahihi na kizingiti cha kustahili kilicho safi kweli; DiD inahitaji data ya paneli inayolingana kwa muda kwa maeneo yaliyotibiwa na ya kulinganisha, ambayo inamaanisha muunganisho thabiti kati ya mifumo na miaka; PSM inahitaji data tajiri ya vigezo vya msingi iliyonaswa kabla ya matibabu, si iliyojengwa upya baadaye. Modeli ya data iliyosanifiwa pamoja na [nadharia ya mabadiliko](../nadharia-ya-mabadiliko/) na [mfano wa mantiki](../mfano-wa-mantiki/) tangu mwanzo — ikinasa vigezo vya msingi, tarehe, na rekodi zinazostahili kikundi cha kulinganisha — ndiyo inayofanya tathmini madhubuti ya athari iwezekane baadaye, badala ya mbio za gharama kubwa za baada ya tukio. Tazama [tathmini ya athari dhidi ya tathmini ya mchakato](../tathmini-ya-athari-dhidi-ya-tathmini-ya-mchakato/) kwa swali la nyongeza ambalo mbinu hizi hazijibu peke yake.

## Mitego

- **Kulazimisha RCT pale haiwezekani au si ya kimaadili**, au kinyume chake kutowahi kuzingatia usanifu wa nusu-majaribio wakati fursa ya kweli kwake — kizingiti cha sera, usambazaji wa awamu — ilikuwepo na haikutumika.
- **Kupuuza dhana ya mielekeo sambamba katika DiD.** Ikiwa eneo la kulinganisha lilikuwa tayari linatofautiana na eneo lililotibiwa kabla ya uingiliaji, ulinganisho wa pointi mbili unachafuliwa; angalia mielekeo ya kabla, si kabla/baada tu.
- **Kulinganisha tu kwenye vigezo vinavyoonekana katika PSM.** Uteuzi usioonekana, kama motisha ya washiriki, unaweza kupotosha kadirio hata vigezo vinavyoonekana vikiwa na usawa mzuri.
- **Kuchezea kigezo cha kuendesha katika RDD.** Ikiwa watu wanaweza kuathiri alama zao ili kuanguka ndani kidogo ya kizingiti cha kustahili, kutoendelea hakutengi tena athari ya kisababishi.

## Vyanzo

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
