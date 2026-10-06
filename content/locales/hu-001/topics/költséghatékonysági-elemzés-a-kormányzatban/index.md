# Költséghatékonysági elemzés a kormányzatban

A költséghatékonysági elemzés (CEA) ugyanannak az eredménynek az elérésére szolgáló alternatív módok költségeit hasonlítja össze természetes egységekben kifejezve — költség egy lakhatást kapott közterületen alvóra, egy elvárt szintre felzárkóztatott tanulóra, egy elkerült tonna CO2-re — anélkül, hogy magát az eredményt pénzre váltaná.

## Miért fontos

A Green Book a CEA-t tartalék módszerként kezeli, amikor a [társadalmi költség-haszon elemzés](../társadalmi-költség-haszon-elemzés/) azon követelménye, hogy minden hasznot pénzre váltsanak, nem csupán nehézzé, hanem tisztességtelenné válik — ahol az eredményhez hiteles ár rendelése olyan feltevéseket kívánna, amelyeket valójában senki sem vall (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, 5. fejezet, a változatértékelésről, ahol az eredmények nem könnyen pénzre válthatók). A CEA a legközvetlenebbül az egészség-gazdaságtanból átvett módszer — szerkezetileg azonos azzal, ahogy a NICE a kezeléseket életminőséggel korrigált életévenkénti költséggel (QALY) hasonlítja össze —, de nem egészségügyi közprogramokra alkalmazva: oktatási beavatkozások tanulói eredménypontonként, lakhatási programok a hajléktalanságtól megvédett háztartásonként, foglalkoztatási programok tartós munkaviszonyonként.

Az ok, amiért a CEA az SCBA mellett kiérdemli a helyét, nem pedig beolvad abba, hogy bizonyos eredményekre pénzérték kényszerítése olyan számot ad, amely elég pontos ahhoz, hogy tekintélyesnek látsszon, és elég vitatott ahhoz, hogy értéktelen legyen a közvitában — az „elvárt szinten olvasó gyermek” árazása éppen az a fajta kihívás, amely egy parlamenti bizottságnál kisiklat egy üzleti esetet. A CEA azzal kerüli meg a vitát, hogy nem vállalja: a változatokat *maga az eredmény* egységére jutó költség szerint rangsorolja, és a külön politikai ítéletet arról, hogy megéri-e az eredményt egyáltalán követni, a stratégiai esetre hagyja.

## A matematika

```
Költséghatékonysági arány (átlag) = Összköltség / Az elért eredményegységek összege

Inkrementális költséghatékonysági arány (ICER), A változat és B változat összehasonlítása:
ICER = (Költség_A − Költség_B) / (Eredmény_A − Eredmény_B)

Eljárás:
1. Rögzítsék az eredményegységet és a mérési módszert minden összehasonlított változatra.
2. Költségezzék minden változatot azonos alapon (lásd ../green-book-appraisal/, pénzügyi eset)
   azonos időhorizonton.
3. Dobják el a dominált változatokat: minden olyan változatot, amely egységenként többe kerül
   egy olcsóbb, azonos vagy jobb eredményt elérő alternatívánál.
4. A megmaradt változatokat az inkrementális, nem az átlagos költséghatékonysági arány szerint rangsorolják.
```

A CEA önmagában nem mondhatja meg, hogy egy program egyáltalán megéri-e a finanszírozást — csak azt, hogy ugyanazon cél több megközelítése közül melyik a legolcsóbb egységenként. Annak eldöntése, hogy maga a cél megéri-e a kiadást, vagy az SCBA-ra való visszaváltást (ha létezik hiteles értékelés), vagy a matematikán kívüli politikai/stratégiai ítéletet kíván. Ahol az eredmények valóban nem redukálhatók egyetlen egységre — mert egy program több, különböző módon fontos eredményt hoz —, használjanak helyette [többszempontú döntéselemzést](../többszempontú-döntéselemzés/).

## Kidolgozott példa

**Helyi önkormányzat**: egy tanács három megközelítést hasonlít össze a közterületen alvók számának csökkentésére, mindegyiket egy évre költségezve a „legalább 6 hónapra stabil lakhatásba költöztetett egyének” eredményével szemben:

```
Változat                          Költség    Elért eredmény   Átl. CER
Housing First (intenzív)          900 000 £  60               15 000 £/eredmény
Szálló + továbblépési támogatás   600 000 £  50               12 000 £/eredmény
Terepmunka + magán bérlakás-szektor 350 000 £ 20              17 500 £/eredmény

ICER, Szálló vs. Terepmunka:     (600k−350k)/(50−20) = 8333 £ további eredményenként
ICER, Housing First vs. Szálló:  (900k−600k)/(60−50) = 30 000 £ további eredményenként
```

A terepmunkát az átlagköltségben a szálló dominálja, de a terepmunkától a szállóig tartó *inkrementális* lépés csupán 8333 £-ba kerül minden további elhelyezettre — olcsó a Housing First lépéséhez képest, amely 30 000 £-ba kerül minden olyan további emberért, aki a szálló által elért felett van. Egy költségvetési korlátú hatóságnak bővítéskor a szállót kell előnyben részesítenie a Housing First előtt, még ha a Housing First a saját átlagarányán jobbnak is látszik.

**Nemzeti kormányzat**: egy felzárkóztató olvasásprogramot három megvalósítási modellen hasonlítanak össze az „életkornak megfelelő olvasási szintet elérő tanulónkénti költség” alapján: egyéni korrepetálás (1800 £/tanuló), kiscsoportos korrepetálás (700 £/tanuló) és csak digitális beavatkozás (150 £/tanuló, de a kiscsoportos korrepetálás eredményarányának csak 40%-a beiratkozott tanulónként a lemorzsolódás korrigálása után). A tényleges befejezésre korrigálva a csak digitális megoldás 375 £-ba kerül a szintet elérő tanulónként — még mindig a legolcsóbb, de a CEA nem tudja megmondani, hogy a kisebb abszolút számú, a csak digitális megoldással segített tanuló, ha ugyanabból a költségvetésből, mint a kiscsoportos, elfogadható kompromisszum-e a kevesebb tanuló mélyebb elérésével szemben; ez elosztási ítélet, amelyet a CEA visszaad a döntéshozóknak.

## Kapcsolat a szoftverfejlesztéssel

A CEA a megfelelő keret, valahányszor a mérnöki csapatok ugyanazon szolgáltatási eredményre értékelnek megvalósítási megközelítéseket — költség sikeresen ellenőrzött személyazonosságonként három azonosságellenőrző szállítónál, költség helyesen szűrt ügyenként két ügyintézés-automatizálási tervnél, költség megoldott akadálymentesítési hibánként belső versus szerződéses javításnál. A fegyelem, amelyet közvetlenül importál: az eredményegységet költségek összehasonlítása előtt határozzák meg (nem „lezárt jegyek” — egy kibocsátás —, hanem „ténylegesen megoldott felhasználói szükséglet”), és mindig az üzemelő rendszer és egy javasolt csere közötti inkrementális arányt számítsák, ne az egyes rendszerek átlagköltségét elszigetelten. Lásd [eredmények és kibocsátások](../eredmények-és-kibocsátások/) és [költség eredményenként](../költség-eredményenként/).

## Buktatók

- **Átlagos, nem inkrementális arányok összehasonlítása bővítési döntésnél.** Ahogy a közterületen alvók példája mutatja, a legjobb átlagarányú változat nem mindig a következő legolcsóbb megvásárolható eredményegység.
- **Olyan eredményegység választása, amely valójában kibocsátás.** A „megtett továbbirányítások” vagy „nyújtott alkalmak” tevékenységet mérnek, nem azt az eredményt, amelyért a program létezik; a kibocsátásokon végzett CEA magabiztosnak látszó számot ad, amely rossz kérdésre válaszol.
- **Valóban különböző eredmények összehasonlítása.** A CEA csak akkor érvényes, ha minden változat ugyanazt az eredményt célozza ugyanúgy mérve; a „költség lakhatást kapott közterületen alvóra” és a „költség stabil bérleményben élő gondozásból kikerülőre” összehasonlítása általános eredménymértéket vagy [többszempontú döntéselemzést](../többszempontú-döntéselemzés/) igényel, nem CEA-t.
- **Az eredmény tartósságának figyelmen kívül hagyása.** Az olcsóbb változat, amely nem tartós eredményeket hoz (egy a beavatkozás végeztével visszaeső tanuló), összehasonlítható horizonton mérve nem költséghatékonyabb; az összehasonlított változatokra illesszék az utánkövetési időszakot.

## Források

- HM Treasury. „The Green Book: appraisal and evaluation in central government.” 2022, 5. fejezet. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. „Developing NICE guidelines: the manual” — a költséghatékonysági módszer, amelyből ez a kormányzati adaptáció merít. <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. A hajléktalanság elleni beavatkozások költséghatékonysági bizonyítékai. <https://whatworks-homelessness.org.uk/>
