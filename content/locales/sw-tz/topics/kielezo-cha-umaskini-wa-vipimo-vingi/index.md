# Kielezo cha Umaskini wa Vipimo Vingi (MPI)

MPI hupima umaskini kama ukosefu unaoingiliana ambao mtu anaupitia kwa wakati mmoja — katika afya, elimu, na viwango vya maisha — badala ya kipato pekee kushuka chini ya mstari. Kilitengenezwa na Oxford Poverty and Human Development Initiative (OPHI) pamoja na Sabina Alkire na James Foster, na kimechapishwa kwa pamoja na UNDP katika kila Human Development Report tangu 2010, pamoja na [Kielezo cha Maendeleo ya Binadamu (HDI)](../kielezo-cha-maendeleo-ya-binadamu/).

## Kwa nini ni muhimu

Mistari ya umaskini wa kipato hukosa watu wenye fedha taslimu za kutosha lakini wanaokosa maji safi, masomo, au wamepoteza mtoto — na hukosa ukweli kwamba ukosefu hukusanyika: kaya isiyo na umeme ina uwezekano mkubwa isivyo kawaida wa kukosa pia vyoo na kuwa na mtoto mwenye utapiamlo. Mbinu ya Alkire-Foster, ambayo MPI imejengwa juu yake, huhesabu ukosefu wa kila mtu katika viashiria kumi vilivyopangwa katika vipimo vitatu vyenye uzito sawa — afya, elimu, viwango vya maisha — na humwainisha mtu kama "maskini wa MPI" tu ikiwa alama yake ya ukosefu yenye uzito inavuka kizingiti kisichobadilika, ikinasa mwingiliano ambao seti ya takwimu tofauti za kiashiria kimoja haiwezi. OPHI huchapisha mbinu kamili na data ya nchi kwenye <https://ophi.org.uk/multidimensional-poverty-index/>; MPI ya kimataifa inayodumisha pamoja na UNDP sasa inahusu nchi zaidi ya 110. Kwa programu iliyojengwa kwa ajili ya programu za kupambana na umaskini — uhamisho wa fedha, upangaji wa huduma za kijamii, ulengaji wa misaada — seti ya viashiria ya MPI mara nyingi ndiyo kitu kilicho karibu zaidi na schema sanifu ya ukosefu iliyothibitishwa tayari katika ofisi nyingi za takwimu za kitaifa.

## Hisabati

```
Viashiria 10, vipimo 3, kila kipimo kina uzito wa 1/3:

Afya (1/3):               lishe (1/6), vifo vya watoto (1/6)
Elimu (1/3):              miaka ya masomo (1/6), mahudhurio ya shule (1/6)
Viwango vya maisha (1/3): mafuta ya kupikia, vyoo, maji ya kunywa,
                           umeme, makazi, mali (1/18 kila kimoja)

alama ya ukosefu (c) = jumla ya uzito wa viashiria ambavyo mtu hana

mtu ni "maskini wa MPI" ikiwa c ≥ 1/3 (mstari wa umaskini, k = 33%)

H (uwiano wa hesabu ya vichwa) = idadi ya maskini wa MPI / jumla ya idadi ya watu
A (ukali)                       = wastani wa alama ya ukosefu kati ya maskini wa MPI pekee

MPI = H × A
```

Kwa sababu MPI huzidisha *sehemu* ya walio maskini kwa *kiasi gani* ni maskini, kanda mbili zenye uwiano sawa wa hesabu ya vichwa zinaweza kuwa na alama tofauti sana za MPI ikiwa ukosefu ni mkali zaidi katika moja — mantiki ileile ya "hakuna ubadilishanaji kati ya vipimo" iliyo nyuma ya wastani wa kijiometri wa HDI.

## Mfano uliokokotolewa

**Utafiti wa kitaifa wa watu 1,000**: 350 wanatambuliwa kama maskini wa vipimo vingi (alama ya ukosefu ≥ 33%). Kati ya watu hao 350 maskini pekee, wastani wa alama ya ukosefu ni 45%.

```
H = 350 / 1000                = 0.350
A = 0.45
MPI = H × A = 0.350 × 0.45    = 0.1575
```

**Kulinganisha wilaya mbili zenye hesabu sawa ya vichwa**: Wilaya A ina H = 0.30 na A = 0.40 (maskini wengi, wenye ukosefu wa wastani); Wilaya B ina H = 0.30 na A = 0.60 (idadi ileile ya maskini, lakini wenye ukosefu mkali zaidi — wanakosa umeme *na* vyoo *na* mahudhurio ya shule kwa wakati mmoja).

```
MPI_A = 0.30 × 0.40 = 0.120
MPI_B = 0.30 × 0.60 = 0.180
```

Uwiano ule ule wa hesabu ya vichwa, MPI ya juu kwa 50% katika Wilaya B — mfumo wa ulengaji unaotegemea umaskini wa hesabu ya vichwa pekee ungeorodhesha wilaya hizo mbili sawa na kukosa kwamba Wilaya B inahitaji uingiliaji wa kina zaidi.

## Uhusiano na uhandisi wa programu

- Mifumo ya usimamizi wa kesi na ya kustahili kwa programu za kijamii mara nyingi tayari huhifadhi baadhi ya viashiria kumi (makazi, mahudhurio ya shule, alama za afya) katika silo tofauti; mbinu ya kuhesabu ya Alkire-Foster ni schema iliyo tayari ya kuviunganisha kuwa alama moja ya ukosefu badala ya kujenga modeli maalum ya alama kuanzia mwanzo.
- Mgawanyo wa hesabu ya vichwa/ukali (H × A) ni mchoro unaofaa kwa ujumla kwa dashibodi yoyote inayoripoti "wangapi wameathirika" pamoja na "kwa ubaya kiasi gani" — kuvipunguza vyote viwili kuwa namba moja, kama takwimu ghafi za kuenea zinavyofanya, huficha hasa kesi inayohitaji rasilimali nyingi zaidi.
- Dashibodi za viashiria vya mtindo wa MPI huoanishwa kwa asili na kuripoti [gharama kwa kila mnufaika](../gharama-kwa-kila-mnufaika/) kwa programu za kupambana na umaskini: gharama kwa kila pointi ya kupungua kwa MPI ni kitengo kinachotetewa cha kulinganisha afua tofauti sana (uhamisho wa fedha dhidi ya miundombinu ya vyoo).

## Mitego

- **Kuchukulia viashiria kumi kama vya ulimwengu mzima** — viashiria vya MPI ya kimataifa vya OPHI vimerekebishwa kwa uwezo wa kulinganisha kati ya nchi; MPI za kitaifa (nchi nyingi, ikiwemo kadhaa za Asia Kusini na Afrika, huchapisha zao) hurekebisha viashiria na uzito kwa muktadha wa ndani, na hizi mbili hazilinganishwi moja kwa moja.
- **Kuripoti H pekee** — uwiano wa hesabu ya vichwa hupuuza ukali kabisa; ripoti au kokotoa A kila wakati pamoja nao, au MPI yenyewe.
- **Kudhani maskini wa MPI na maskini wa kipato ni idadi ileile ya watu** — muhtasari wa nchi wa OPHI wenyewe kwa kawaida huonyesha mwingiliano wa sehemu tu kati ya hizo mbili; programu inayolenga maskini wa kipato pekee itakosa kwa utaratibu sehemu kubwa ya maskini wa vipimo vingi.

## Vyanzo

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
