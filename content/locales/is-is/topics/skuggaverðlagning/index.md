# Skuggaverðlagning

Skuggaverð er áætlað virði sem gefið er vöru, auðlind eða ytri áhrifum sem hafa ekkert sjáanlegt markaðsverð, eða þar sem markaðsverðið er skekkt og endurspeglar ekki raunverulegt samfélagslegt virði. Opinbert mat byggir á litlu safni opinberra skuggaverða — kolefnis, tíma utan vinnu, atvinnulauss vinnuafls — sem birt eru miðlægt svo hvert ráðuneyti noti sömu töluna.

## Hvers vegna það skiptir máli

Skuggaverð eru til því [samfélagsleg kostnaðar- og ábatagreining](../samfélagsleg-kostnaðar-og-ábatagreining/) getur ekki starfað án peningalegs virðis fyrir hvern kostnað og ávinning, og nokkur þeirra mikilvægustu — tonn af kolefni sem losað er, klukkustund af tíma ferðalangs, klukkustund af annars atvinnulausu vinnuafli — hafa ekkert markaðsverð yfirhöfuð, eða markaðsverð sem afbakar raunverulegan samfélagslegan kostnað þeirra. HM Treasury og Department for Energy Security and Net Zero birta sameiginlega skuggaverð kolefnis sem notað er í öllu mati bresku ríkisstjórnarinnar (<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>), leitt ekki af nokkru kolefnismarkaðsverði heldur af markmiðssamræmdri nálgun: kolefnisvirðið er sett á jaðarkostnað við mótvægisaðgerðir sem þarf til að ná lögfestum kolefnisfjárlögum Bretlands, sem er grundvallarlega ólík rökfræði frá því að fylgjast með því hvað kolefni er í raun verslað á í ETS-kerfi ESB eða Bretlands.

Skuggakaupið fylgir svipaðri rökfræði á vinnuaflshliðinni. Að ráða einhvern sem annars hefði verið atvinnulaus kostar samfélagið ekki full laun hans — hluti launanna er millifærsla frá fórnuðum bótagreiðslum og glötuðum frítíma/leitartíma fremur en nýtt framlag úr auðlindum samfélagsins — svo leiðsögn Green Book setur skuggaverð undir markaðslaunum fyrir vinnuafl sem dregið er úr atvinnuleysi, sem endurspeglar raunverulegan fórnarkostnað þess vinnuafls (sjá [fórnarkostnaður í opinberum útgjöldum](../fórnarkostnaður-í-opinberum-útgjöldum/)) fremur en markaðsverð þess.

## Stærðfræðin

```
Skuggaverð kolefnis (uppbygging til skýringar, núgildandi gildi úr opinberu
kolefnisvirðatóli BEIS/DESNZ — ekki nota úrelt gildi):
  Gildi viðskiptageira: byggt á þróunarferlum verðs ETS-heimilda
  Gildi geira utan viðskipta (markmiðssamræmt): sett á jaðarkostnað
    mótvægisaðgerða sem þarf til að ná lögfestum kolefnisfjárlögum,
    hækkandi með tímanum þegar auðveldari mótvægisleiðir eru tæmdar
  Beitt sem: £/tonn CO2e × tonn sem inngripið losar eða dregur úr,
    núvirt á samfélagslegum afsláttarstuðli fyrir framtíðarár

Skuggakaupstuðull vinnuafls (SWR):
  SWR = Markaðslaun − (virði frítíma/leitartíma sem sparast
                        + virði bótagreiðslna sem ekki eru lengur greiddar)
  Venjulega gefinn upp sem brot af markaðslaunum (t.d. SWR = 0,6
    × markaðslaun á svæði með mikið atvinnuleysi, samkvæmt leiðsögn
    Annex A í Green Book um vinnumarkaði með ónýtta afkastagetu)
```

Báðar tölurnar eru stefnuvenjur settar miðlægt, ekki reynslubundnar markaðsathuganir — allur tilgangur skuggaverðs er að koma í stað vantandi eða skekkts markaðar, svo mat sem notar slíkt verður að vísa í núgildandi opinbera heimild frekar en að leiða út eigin tölu, einmitt svo mat hvers ráðuneytis sé sambærilegt.

## Dæmi útreiknað

**Ríkisstjórn**: mat á flóðavarnaframkvæmd áætlar að hún komi í veg fyrir 400 tonn af CO2e losun á ári (með minni notkun neyðartækja og minni bundnu kolefni frá afstýrðri endurbyggingu) yfir 30 ára matstíma, borið saman við „gera lágmark“ grunnlínu.

```
Skýringarskuggaverð kolefnis: 280 £/tonn CO2e (ár 1, hækkandi yfir
  matstímabilið samkvæmt opinberri áætlun um kolefnisvirði utan viðskipta)
Kolefnisávinningur árs 1 = 400 × 280 £ = 112.000 £
```

Þar sem opinbera áætlunin hefur kolefnisvirðið *hækkandi* yfir matstímabilið (sem endurspeglar þrengjandi kolefnisfjárlög), verður greinandinn að beita rétta ársbundna gildinu fyrir hvert ár 30 ára straumsins, ekki föstum stuðli — að nota gildi árs 1 allan tímann myndi vanmeta ávinning síðari ára og skekkja röðun gagnvart öðrum flóðavarnahönnunum með ólík kolefnissnið.

**Sveitarfélag**: atvinnustuðningsáætlun sveitarfélags fyrir langtímaatvinnulausa íbúa kemur 150 manns í störf á 11 £/klst. Að verðmeta þetta á fullum markaðslaunum myndi eigna áætluninni 11 £ × unnar stundir sem samfélagslegan ávinning, en skuggakaupsaðferðin viðurkennir að þetta voru ekki starfsmenn dregnir úr öðrum störfum — raunverulegur fórnarkostnaður vinnuafls þeirra fyrir áætlunina var lágur.

```
Markaðslaun: 11,00 £/klst.
Skuggakaupstuðull (til skýringar, mikið staðbundið atvinnuleysi): 0,6 × markaðslaun = 6,60 £/klst.
Hreinn samfélagslegur ávinningur sem rekja má til hverrar unninnar klukkustundar ≈ 11,00 £ − 6,60 £ = 4,40 £/klst.
  („aukalega“ virðið sem skapast með því að færa raunverulega aðgerðalaust vinnuafl í framleiðslu,
   aðgreint frá laununum sjálfum, sem eru að mestu millifærsla)
```

Þess vegna geta möt atvinnuáætlana á svæðum með mikið atvinnuleysi sýnt jákvætt hreint samfélagslegt virði jafnvel þótt sama áætlun, rekin á svæði með fulla atvinnu þar sem fært vinnuafl yrði einfaldlega dregið úr öðrum störfum, gerði það ekki.

## Tengsl við hugbúnaðarverkfræði

Skuggaverðlagning snertir sjaldan hugbúnaðarafhendingu beint, en hún skiptir máli hvenær sem viðskiptarök fullyrða um kolefnis- eða samfélagslegan ávinning af upplýsingatæknibreytingu — samþjöppun gagnavers sem fullyrðir kolefnissparnað, eða pappírslaus þjónusta sem fullyrðir afstýrð prentunar- og póstkolefni, verður að nota núgildandi opinbera skuggaverð kolefnis frekar en tilbúna tölu, og verður að beita réttri ársbundinni áætlun frekar en föstum stuðli, nákvæmlega eins og með hvert annað inntak í mat samkvæmt Green Book. Sjá [heildareignarkostnaður í upplýsingatækni hins opinbera (TCO)](../heildareignarkostnaður-í-upplýsingatækni-hins-opinbera/) og [verðmæti netöryggis í opinbera geiranum](../verðmæti-netöryggis-í-opinbera-geiranum/), sem bæði þurfa oft skuggaverð fyrir erfitt-að-verðmeta inntak (brotaáhætta, niðritími) við hlið beint kostnaðarmetinna liða.

## Gildrur

- **Að nota úrelta kolefnis- eða launatölu.** Báðar tölurnar eru endurskoðaðar reglulega af miðlægri leiðsögn; mat byggt á úreltri tölu stenst ekki skoðun Treasury.
- **Að beita föstu skuggaverði kolefnis yfir margra áratuga mat.** Opinbera áætlunin hækkar með tímanum; að nota gildi árs 1 allan tímann afbakar snið ávinnings eða kostnaðar.
- **Að rugla skuggakaupi saman við afslátt á raunverulegum launum starfsmanns.** Skuggakaupstuðullinn leiðréttir *mat* á vinnuaflsinntakinu, ekki launin sem starfsmaðurinn fær í raun — að rugla þessu tvennu býður upp á (ranga) réttlætingu undirmarkaðslauna.
- **Að leiða út sérsniðið skuggaverð í stað þess að nota hið opinbera.** Skuggaverð eru stefnuvenjur einmitt svo möt séu sambærileg milli ráðuneyta; staðbundið fundin tala, hversu vel rökstudd sem er, brýtur þá samanburðarhæfni.

## Heimildir

- HM Treasury / Department for Energy Security and Net Zero. „Valuing greenhouse gas emissions in
  policy appraisal.“ <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. „The Green Book: appraisal and evaluation in central government,“ Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. „Project Appraisal and Planning for Developing Countries.“ Heinemann,
  1974 (foundational shadow-pricing methodology).
