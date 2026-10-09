# Skýrslugjöf um útkomu styrkja (IRIS+)

Skýrslugjöf um útkomu styrkja er sú venja að styrkþegar skili stöðluðum, sambærilegum útkomumælikvörðum til fjármögnunaraðila — öfugt við að hver fjármögnunaraðili finni upp eigið skýrslusnið. IRIS+, sem Global Impact Investing Network (GIIN) heldur utan um, er sá staðall sem víðast er tekinn upp: skrá yfir fyrirfram skilgreinda félagslega, umhverfislega og fjárhagslega frammistöðumælikvarða sem áhrifafjárfestar og, í auknum mæli, styrkveitingarsjóðir krefjast eða mæla með að styrkþegar noti.

## Hvers vegna það skiptir máli

Áður en til kom staðlað skýrslugjöf bað hver sjóður styrkþega um mismunandi safn vísa á mismunandi sniði, og meðalstórt góðgerðarfélag með tíu fjármögnunaraðila gat verið að reka tíu samhliða skýrsluferli fyrir skarast vinnu — vel skjalfestur drifkraftur þeirrar skýrslubyrði sem stöðlun útkomuskýrslugjafar er til að draga úr. IRIS+ tekur á þessu með því að gefa fjármögnunaraðilum og styrkþegum sameiginlegt orðasafn: kjarnamælikvarðasett (Core Metrics Sets) flokkuð eftir þema (t.d. hagkvæmt húsnæði, aðgengi að hreinni orku, fjármálaleg þátttaka), hver mælikvarði skilgreindur nógu nákvæmlega til þess að „störf sköpuð“ eða „heimili sem fengu þjónustu“ þýði það sama hver sem tilkynnir, og samræmdur Heimsmarkmiðum Sameinuðu þjóðanna um sjálfbæra þróun svo fjármögnunaraðili geti dregið gögn á stigi styrkþega saman í SDG-frásögn á eignasafnsstigi. GIIN tilkynnir að IRIS-mælikvarðar séu notaðir af um það bil helmingi áhrifafjárfesta og af yfirgnæfandi meirihluta sjóðsstjóra, banka og þróunarfjármálastofnana sem eru virkar á sviðinu.

Stöðlunin skiptir mestu máli þar sem hún mætir [útkoma og afurðir](../útkoma-og-afurðir/): IRIS+ ýtir skýrslugjöf í átt að skilgreindum útkomu- og áhrifamælikvörðum frekar en því sem núverandi málastjórnunarkerfi styrkþega skráir af tilviljun, sem er einmitt bilið sem [kostnaður á hverja útkomu](../kostnaður-á-hverja-útkomu/) á móti [kostnaður á hvern þiggjanda](../kostnaður-á-hvern-þiggjanda/) lýsir.

## Stærðfræðin

Skýrslugjöf um útkomu styrkja er rammi og ferli, ekki formúla:

```
1. Fjármögnunaraðili velur kjarnamælikvarðasett sem á við um þema styrksins
   (t.d. IRIS+ „Fjármálaleg þátttaka“ eða „Sjálfbær landbúnaður“)
2. Hver mælikvarði hefur fasta skilgreiningu, einingu og útreikningsaðferð
   sem GIIN birtir — ekki fundin upp fyrir hvern fjármögnunaraðila
3. Styrkþegi skilar skýrslu gegn sömu mælikvarðaskilgreiningum fyrir alla
   fjármögnunaraðila sem nota þann staðal, sem dregur úr tvítekinni skýrsluvinnu
4. Fjármögnunaraðili safnar mælikvörðum á stigi styrkþega saman í skýrslugjöf á
   eignasafnsstigi, sambærilega ár frá ári og milli styrkþega sem nota sama mælikvarða
```

Skilvirknin er samsett: að staðla N fjármögnunaraðila × M styrkþega á eitt sameiginlegt orðasafn breytir N×M sérsniðnum skýrslusamböndum í um það bil N+M varpanir gagnvart einum staðli.

## Dæmi útreiknað

**Styrkþegi með þrjá fjármögnunaraðila, fyrir stöðlun**: tilkynnir „fólk sem fékk þjónustu“ til fjármögnunaraðila 1 með höfðatöluskilgreiningu, „þiggjendur sem náðist til“ til fjármögnunaraðila 2 með heimilisskilgreiningu og „einstaklingar sem urðu fyrir áhrifum“ til fjármögnunaraðila 3 með þjónustulotuskilgreiningu (svo einn einstaklingur sem kemur tvisvar telst tvisvar). Þrjár skýrslur, þrjár tölur, engin sambærileg, og engin sambærileg við tölur annars styrkþega, jafnvel innan eignasafns sama fjármögnunaraðila.

**Sami styrkþegi með IRIS+**: tilkynnir gegn skilgreindum IRIS+ mælikvarða um einstaklinga sem náðist til ásamt skilgreindum útkomumælikvarða úr viðeigandi kjarnamælikvarðasetti, með útreikningsaðferð GIIN fyrir báða. Allir þrír fjármögnunaraðilarnir fá nú sömu töluna, reiknaða á sama hátt, og geta borið kostnað þessa styrkþega á hverja IRIS+-skilgreinda einingu saman við aðra styrkþega í eignasafni sínu með sama mælikvarða — jafngildi, á skala skýrsluinnviða, þess að hafa sameiginlegan [einingarkostnaðargrunn](../einingarkostnaðargrunnar/).

## Tengsl við hugbúnaðarverkfræði

Styrkjastjórnunarvettvangar ættu að líta á IRIS+-auðkenni mælikvarða sem aðallykil úr annarri töflu (foreign key), ekki frjálsan texta: að geyma birta mælikvarðakóðann við hlið gildis sem styrkþegi tilkynnir (frekar en staðbundið fundinn reit sem heitir „þiggjendur“) er það sem gerir samantekt milli fjármögnunaraðila og milli eignasafna mögulega síðar án gagnahreinsunarverkefnis. Þar sem vettvangur þarf að styðja fjármögnunaraðila sem ekki hafa tekið upp IRIS+ er hagnýt hönnun að leyfa að staðbundnum mælikvarða sé varpað á næstu IRIS+-skilgreiningu í stað þess að þvinga alla fjármögnunaraðila strax á staðalinn — samanburðarhæfni batnar stig af stigi eftir því sem fleiri hlutar netsins varpast á sameiginleg auðkenni. Sjá systurefnið [kostnaður á hverja útkomu](../kostnaður-á-hverja-útkomu/) fyrir hvað nota á tölurnar sem tilkynntar eru til að reikna þegar þeim hefur verið safnað.

## Gildrur

- **Að líta á upptöku IRIS+ sem sjálfvirka samanburðarhæfni.** Tveir styrkþegar geta báðir tilkynnt gegn sama IRIS+ mælikvarða og samt verið ósambærilegir ef gagnagæði þeirra eða mótstaðreyndarforsendur eru ólíkar; staðallinn festir skilgreiningar, ekki strangleika mælinga.
- **„IRIS-samræmdir“ mælikvarðar fundnir upp af fjármögnunaraðila.** Mælikvarði sem er aðeins innblásinn af IRIS+-orðalagi en er ekki hin raunverulega birta skilgreining endurvekur sundrungu sem staðallinn er til að leysa.
- **Skýrsluþreyta vegna ofvals.** Að krefjast þess að styrkþegi tilkynni gegn heilu kjarnamælikvarðasetti þegar aðeins tveir eða þrír mælikvarðar skipta máli fyrir ákvarðanir endurskapar byrðarvandann í stöðluðum umbúðum.
- **Enginn útkomumælikvarði.** IRIS+ inniheldur marga hreina afurðarmælikvarða (t.d. fjölda fólks sem fékk þjónustu); að velja aðeins þá, og engan af útkomustigi, skilar skýrslugjöf í formi [kostnaðar á hvern þiggjanda](../kostnaður-á-hvern-þiggjanda/) undir merkimiða útkomuskýrslugjafar.

## Heimildir

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
