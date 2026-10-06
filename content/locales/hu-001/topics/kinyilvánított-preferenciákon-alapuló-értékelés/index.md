# Kinyilvánított preferenciákon alapuló értékelés

A kinyilvánított preferenciák módszerei egy nem piaci jószág értékét úgy becslik, hogy közvetlenül megkérdezik az embereket, mennyit lennének hajlandók fizetni érte, vagy milyen kártérítést fogadnának el azért, hogy lemondjanak róla, jellemzően egy hipotetikus forgatókönyvet leíró strukturált felmérésen keresztül. A feltételes értékelés (contingent valuation) e család legismertebb technikája.

## Miért fontos

A Green Book 2. melléklete (a nem piaci hatások értékeléséről szóló kiegészítő útmutató) jóváhagyja a kinyilvánított preferenciák módszereit olyan jószágokra, amelyeknek nincs megfigyelhető piaci tranzakciója, amelyből értéket lehetne következtetni — levegőminőség, biodiverzitás, árvízvédelem, egy olyan táj létezési értéke, amelyet valaki talán soha nem látogat meg (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). A Defra saját kinyilvánított preferenciás útmutatót tett közzé a környezeti értékeléshez éppen azért, mert a környezeti érték (élőhelyvédelem, vízminőség) olyan nagy része semmilyen helyettesítő piaccal nem rendelkezik, szemben például a zajjal, amely legalább korrelál megfigyelhető lakásárakkal (lásd [feltárt preferenciákon alapuló értékelés](../feltárt-preferenciákon-alapuló-értékelés/)).

A kinyilvánított preferenciák fő vonzereje — szó szerint bármit képesek értékelni, olyan jószágokat is, amelyekkel soha senki nem kereskedett — egyben hitelességi problémájuk forrása is. Mivel a válaszadók valójában nem költenek pénzt, a feltételes értékelési felmérések sebezhetők a hipotetikus torzítással (az emberek túlbecsülik fizetési hajlandóságukat, ha nincs valódi költségvetési korlát), a beágyazási hatásokkal (ugyanazt a jószágot másképp értékelik attól függően, mi más szerepel a felmérésben) és a kiindulási pont torzításával az licitjáték-tervekben. Az 1993-as NOAA-panel a feltételes értékelésről, amelyet az Exxon Valdez olajszennyezési perek után hívtak össze, tervezési szabványokat állapított meg — bináris „fizetne-e X £-t, igen/nem” népszavazási formátumot a nyílt licit helyett, és kötelező emlékeztetőt a válaszadó tényleges költségvetési korlátjára —, amelyek a védhető felmérések referenciaszabványai maradtak.

## A matematika

```
Feltételes értékelés (népszavazási formátum):
  Bináris választást mutatnak: „fizetne-e X £-t évente az Y eredményért? igen/nem”
  Az X-et véletlenszerűen változtatják a válaszadók között.
  A fizetési hajlandóságot az igen/nem válaszarány függvényeként illesztik minden X-nél.

Átlagos WTP = a becsült keresleti görbe alatti terület
Összesített érték = Átlagos WTP × érintett népesség

Választási kísérlet (diszkrét választás modellezése) változat:
  A válaszadóknak ismételt választásokat mutatnak attribútumcsomagok között
  (köztük egy költségattribútum), és a válaszadók által feltárt
  kompromisszumokból becslik minden nem költség attribútum implicit árát.
```

A választási kísérlet változatot a jelenlegi brit gyakorlatban általában előnyben részesítik az egykérdéses feltételes értékeléssel szemben, mert a válaszadók ismételt kényszerítése több attribútum költséggel szembeni mérlegelésére belsőleg következetesebb, nehezebben manipulálható becsléseket ad, mint egyetlen igen/nem kérdés.

## Kidolgozott példa

**Nemzeti kormányzat**: a Defra feltételes értékelési felmérést rendel egy folyóvíz-minőségjavító program értékeléséhez. Egy 2000 háztartásra kiterjedő, népszavazási formátumú felmérés megállapítja, hogy 62% fizetne évi 40 £-t egy hipotetikus vízszámla-pótlékon keresztül, és a becsült keresleti görbe háztartásonként évi 28 £ átlagos fizetési hajlandóságot ad.

```
Átlagos WTP = 28 £/háztartás/év
Háztartások a vízgyűjtőn = 340 000
Összesített éves érték = 28 £ × 340 000 = 9,52 M£/év

20 éves értékelési időszakra 3,5%-os diszkontrátával (annuitási tényező ≈ 14,2):
PV(haszon) ≈ 9,52 M£ × 14,2 ≈ 135 M£
```

Ezt az összesített számot ezután a program [társadalmi költség-haszon elemzése](../társadalmi-költség-haszon-elemzés/) költségoldalával vetik össze. A Green Book megköveteli, hogy az ilyen kinyilvánított preferenciás bizonyítékot a konfidenciaintervallummal és a felmérés módszertanával együtt jelentsék, nem puszta pontbecslésként, éppen mert az alapul szolgáló szám törékenyebb egy piaci ár.

**Jótékonysági szervezet**: egy örökségvédelmi trösztök látogatókat és nem látogatókat kérdez meg a fizetési hajlandóságról egy történelmi épület bezárásának megakadályozására, amelyet egyik csoport sem feltétlenül látogat (létezési érték). Mivel a nem látogatók, akik soha nem fogják látni az épületet, mégis pozitív WTP-t jelentenek, a felmérés megragadja azt a létezési és hagyományozási értéket, amelyet a látogatói díjbevételek egyszerű számlálása (feltárt preferenciás helyettesítő) teljesen kihagyna — megmutatva a kinyilvánított preferenciák valódi előnyét ott, ahol semmilyen piaci tranzakció nem létezik, amely az értéket feltárná.

## Kapcsolat a szoftverfejlesztéssel

A kinyilvánított preferenciák módszerei ritkán alkalmazhatók közvetlenül a szoftvermérnöki munkára, de a polgári konzultációs platformokat, részvételi költségvetési eszközöket vagy nyilvános felmérési infrastruktúrát építő mérnökök gyakran azt az eszközt építik, amelytől a közgazdaságtan függ. A felmérés tervezési részleteinek helyes kialakítása — randomizált licitösszegek, bináris népszavazási keretezés a nyílt kérdések helyett, kifejezett költségvetési korlát-emlékeztetők — nem UX-finomság, hanem az, ami a kapott értékelést védhetővé teszi a vizsgálat előtt; egy rosszul tervezett alkalmazáson belüli felmérés hónapok utólagos gazdasági elemzését érvényteleníthet. Lásd [állampolgári elégedettségi mutatók](../állampolgári-elégedettségi-mutatók/) a közvéleményadatok kinyerésének általánosabb fegyelméhez, amely analitikai súlyt elbír.

## Buktatók

- **Nyílt „mennyit fizetne?” kérdések.** Sokkal hajlamosabbak a stratégiai és horgonyzási torzításra, mint a bináris népszavazási keretezés; a NOAA-panel javaslata a népszavazási formátum használatára éppen azért létezik, mert a nyílt kinyerés rosszul teljesít.
- **A válaszadó tényleges költségvetési korlátjára való emlékeztetés hiánya.** Nélküle a kinyilvánított WTP rendszeresen meghaladja, amit ugyanazok az emberek fizetnének valódi költségvetési kompromisszum esetén — hipotetikus torzítás.
- **Figyelmen kívül hagyott beágyazási hatások.** Ugyanaz a jószág önállóan, illetve egy nagyobb csomag részeként értékelve eltérő WTP-becsléseket ad; jelentsék, mi más, ha volt, a felmérés keretében.
- **Egyetlen felmérés pontbecslésének kezelése lezártként.** A Green Book gyakorlata tartományt és az ismert torzítások tárgyalását várja, nem puszta számot, amelyet úgy visznek tovább a költség-haszon táblázatba, mintha piaci ár lenne.

## Források

- HM Treasury. „The Green Book,” 2. melléklet: a nem piaci hatások értékelése. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. „Valuing environmental impacts: practical guidelines” (a feltételes értékelés és a választási kísérletek útmutatója). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. „Report of the NOAA Panel on Contingent Valuation.” Federal Register, 1993.
- Mitchell RC, Carson RT. „Using Surveys to Value Public Goods: The Contingent Valuation Method.” Resources for the Future, 1989.
