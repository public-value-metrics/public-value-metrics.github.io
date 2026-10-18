# Thamani ya Data Huria

Thamani ya data huria ni tatizo la kukadiria data ya serikali na ya umma ina thamani gani wakati haina bei: haiuzwi, hivyo hakuna mstari wa mapato, hata hivyo kuitoa (rekodi za hali ya hewa, ratiba za usafiri, mipaka ya misimbo ya posta, rejista za makampuni) kunazalisha kwa uthibitisho shughuli za kiuchumi na kijamii zaidi chini ya mkondo. Kuithamini vizuri ni muhimu kwa sababu "ni bure kuitoa" na "haina thamani" yote ni makosa, na mhandisi wa programu anayeamua kama afungue API au seti ya data anahitaji hoja bora kuliko yoyote kati ya hizo.

## Kwa nini ni muhimu

Kadirio linalotajwa zaidi la juu-kwenda-chini linatoka ripoti ya McKinsey Global Institute ya 2013 "Open data: Unlocking innovation and performance with liquid information," iliyoweka thamani inayowezekana ya kila mwaka ya data huria katika nyanja saba — elimu, usafiri, bidhaa za watumiaji, umeme, mafuta na gesi, huduma za afya, na fedha za watumiaji — kuwa dola trilioni 3 hadi trilioni 5 kwa mwaka duniani kote, kupitia taratibu zikiwemo uwazi ulioongezeka, kulinganisha ugavi na mahitaji kwa ufanisi zaidi, na kuwezesha bidhaa na huduma mpya zilizojengwa juu ya data. Kielelezo hicho ni kadirio la hali dhahania, si matokeo yaliyopimwa, na mara kwa mara hunukuliwa vibaya kana kwamba ni mapato ambayo serikali inaweza kuyanasa moja kwa moja, wakati thamani kwa kiasi kikubwa huangukia wahusika wengine — biashara, watafiti, wananchi — wanaotumia data, ambayo ndiyo hoja ya kuifungua badala ya kuiuza. Open Data Institute ya Uingereza, iliyoanzishwa pamoja na Sir Tim Berners-Lee na Sir Nigel Shadbolt mwaka 2012, tangu hapo imejenga mkusanyiko wa tafiti za kesi za kina zaidi, za chini-kwenda-juu — sekta kwa sekta, seti ya data kwa seti ya data — ambazo ni muhimu zaidi sana kwa hoja halisi ya biashara kuliko namba ya kichwa cha habari ya McKinsey, kwa sababu zinaonyesha utaratibu wa uundaji wa thamani, si ukubwa wake wa jumla tu.

## Hisabati

Data huria haina bei ya soko, hivyo mbinu za kuthamini huchukua nafasi yake; mbinu tatu hujirudia, na hakuna inayotosha peke yake:

```
1. Mbinu ya gharama iliyokwepwa / gharama ya kubadilisha:
   thamani ≈ kile ambacho watumiaji wangelipa kuzalisha au kupata leseni ya
   data inayolingana wenyewe — kikomo cha chini, hupuuza thamani iliyoundwa
   na matumizi ambayo mzalishaji wa asili hakuwahi kuyatarajia

2. Mbinu ya mlinganisho wa soko / shughuli za chini ya mkondo:
   thamani ≈ mapato au akiba inayozalishwa na biashara/huduma zilizojengwa
   juu ya data (mf. programu za satnav zilizojengwa juu ya data huria ya ramani na
   trafiki) — hunasa shughuli halisi ya kiuchumi lakini ni vigumu kuihusisha
   kwa usafi na kutolewa kwa data yenyewe (tazama additionality-and-deadweight)

3. Mbinu ya kimasharti/ya mapendeleo yaliyotamkwa:
   thamani ≈ kile ambacho watumiaji wanasema wangelipa, au muda wanaosema
   inawaokolea — tazama stated-preference-valuation kwa mbinu ya jumla na
   upendeleo wake

Hakuna kati ya hizi inayozalisha kielelezo safi kama bei ya soko; hoja
za biashara za data huria zinazoaminika hulinganisha katika mbili au zaidi,
na ziko wazi kuhusu utaratibu upi unafanya kazi.
```

## Mfano uliokokotolewa

**Mfano wa kutolewa kwa data ya ramani/anwani ya taifa** (mbinu kulingana na tafiti za kesi za mtindo wa ODI, namba ni za mfano wa ukubwa unaopatikana kwa kawaida na tafiti kama hizo):

```
Kadirio la gharama iliyokwepwa:
  Biashara ambazo vinginevyo zingepata leseni ya data inayolingana ya kulinganisha
  anwani kibiashara, kwa gharama ya wastani iliyokadiriwa ya leseni ya £4,000/
  mwaka, katika SME 15,000 zilizokadiriwa zinazotumia sasa seti huria ya data ya bure
  = 15,000 × £4,000 = £60,000,000/mwaka katika gharama ya leseni iliyokwepwa pekee

Kadirio la shughuli za chini ya mkondo (la kubahatisha zaidi, linahitaji hali mbadala):
  Bidhaa mpya za uelekezaji wa utoaji na usafirishaji zilizojengwa juu ya data huria
  ambazo hazingekuwepo, au zingekuwa mbaya zaidi kwa kiasi kikubwa, bila hiyo —
  inahitaji ulinganisho dhidi ya hali mbadala ya data kubaki imefungwa au
  yenye leseni ya kibiashara (counterfactual-analysis), kwa sababu sehemu ya
  shughuli hiyo ingetokea hata hivyo kwa data inayolipiwa kwa bei ya juu zaidi, ambayo
  ni uzito mfu kwa maana ya "thamani iliyoundwa na kuifungua"

Hoja ya biashara inayotetewa huripoti kielelezo cha gharama iliyokwepwa kama
kikomo cha chini imara, na kuchukulia kielelezo cha shughuli za chini ya mkondo kama
hali dhahania ya kikomo cha juu, si ukweli.
```

## Uhusiano na uhandisi wa programu

Kwa wahandisi, swali la vitendo la thamani ya data huria kwa kawaida ni finyu zaidi kuliko takwimu za kichwa cha habari za kitaifa: je, kufungua API hii mahususi au seti ya data (badala ya kuiweka nyuma ya makubaliano ya mshirika) kunaongeza matumizi tena vya kutosha kuhalalisha gharama inayoendelea ya kuiandikia nyaraka, kuipa matoleo na kuisaidia kama kiolesura cha umma? Gharama hiyo ya matengenezo ni halisi na ni mwenzake wa uchumi wa kujenga-mara-moja-na-kutumia-tena-mara-nyingi wa [serikali kama jukwaa](../serikali-kama-jukwaa/) — mada hizi mbili ni binamu wa karibu, moja kuhusu msimbo na miundombinu ya pamoja, nyingine kuhusu data ya pamoja. Dai lolote la thamani ya data huria linapaswa kukaguliwa dhidi ya [nyongeza ya athari na uzito mfu](../nyongeza-ya-athari-na-uzito-mfu/) kabla ya kuingia kwenye hoja ya biashara: shughuli ambayo ingetokea hata hivyo, kwa data yenye leseni ya kibiashara, si thamani ambayo *kufungua* kuliunda.

## Mitego

- **Kunukuu kielelezo cha McKinsey cha dola trilioni 3–5 kama maalum kwa Uingereza au kama sehemu ya seti hii ya data**: ni kadirio la hali dhahania la kimataifa la sekta saba la 2013 — kulitumia kama kizidisho sahihi kwa seti moja ya data ya kitaifa kunapotosha kile namba hiyo ilivyo.
- **Kutokuwa na hali mbadala**: kudai sifa kwa shughuli zote za kiuchumi za chini ya mkondo zilizojengwa juu ya data huria, bila kuuliza ni kiasi gani chake kingetokea hata hivyo kwa data inayolipiwa au yenye leseni kwa bei ya juu zaidi (tazama [nyongeza ya athari na uzito mfu](../nyongeza-ya-athari-na-uzito-mfu/) na [uchambuzi wa hali mbadala](../uchambuzi-wa-hali-mbadala/)).
- **Kuchanganya gharama ya uzalishaji na thamani iliyoundwa**: seti ya data iliyokuwa ghali kukusanya haina thamani ya kuitoa moja kwa moja, na ya bei nafuu haina thamani ndogo moja kwa moja — thamani hufuata matumizi ya chini ya mkondo, si gharama ya juu ya mkondo.
- **Kupuuza gharama ya matengenezo inayoendelea ya "wazi"**: kuchapisha dondoo la CSV la mara moja si ahadi sawa na kuendesha API huria iliyoandikiwa nyaraka, yenye matoleo, na inayosaidiwa — kuipa pungufu ya ufadhili ya pili baada ya tangazo la uzinduzi ni hali ya kawaida ya kushindwa.

## Vyanzo

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
