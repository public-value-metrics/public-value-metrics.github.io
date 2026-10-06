# Támogatási eredmények jelentése (IRIS+)

A támogatási eredmények jelentése (grant outcomes reporting) az a gyakorlat, amelyben a támogatottak szabványosított, összehasonlítható eredménymutatókat jelentenek vissza a finanszírozóknak — szemben azzal, hogy minden finanszírozó saját egyedi jelentési sablont talál ki. Az IRIS+, amelyet a Global Impact Investing Network (GIIN) gondoz, a legszélesebb körben elfogadott ilyen szabvány: előre meghatározott társadalmi, környezeti és pénzügyi teljesítménymutatók katalógusa, amelynek használatát az impakt befektetők és egyre inkább a támogató alapítványok is megkövetelik vagy ajánlják a támogatottaknak.

## Miért fontos

A szabványosított jelentés előtt minden alapítvány más mutatókészletet kért a támogatottaktól más formátumban, és egy tíz finanszírozóval rendelkező közepes méretű jótékonysági szervezet tíz párhuzamos jelentési folyamatot futtathatott átfedő munkáért — jól dokumentált oka annak a jelentési tehernek, amelyet a támogatási eredmények szabványosítása csökkenteni hivatott. Az IRIS+ ezt úgy kezeli, hogy a finanszírozóknak és a támogatottaknak közös szókincset ad: témák szerint csoportosított Core Metrics Setek (pl. megfizethető lakhatás, tiszta energiához való hozzáférés, pénzügyi befogadás), minden mutató elég pontosan meghatározva ahhoz, hogy a „létrehozott munkahelyek” vagy a „kiszolgált háztartások” ugyanazt jelentse, bárki jelenti is, és az ENSZ Fenntartható Fejlődési Céljaihoz (SDG) igazítva, hogy a finanszírozó a támogatotti szintű adatokat portfólió-szintű SDG-narratívává összegezhesse. A GIIN szerint az IRIS-mutatókat az impakt befektetők nagyjából fele és a területen aktív alapkezelők, bankok és fejlesztési pénzintézetek nagy többsége használja.

A szabványosítás ott számít a legtöbbet, ahol az [eredmények és kibocsátások](../eredmények-és-kibocsátások/) témával kölcsönhatásban áll: az IRIS+ a jelentést meghatározott eredmény- és hatásmutatók felé tolja ahelyett, amit egy támogatott meglévő ügykezelő rendszere éppen naplóz, ami pontosan az a rés, amelyet a [költség eredményenként](../költség-eredményenként/) és a [költség kedvezményezettenként](../költség-kedvezményezettenként/) szembeállítása ír le.

## A matematika

A támogatási eredmények jelentése keretrendszer és folyamat, nem képlet:

```
1. A finanszírozó kiválaszt egy, a támogatás témájához releváns Core Metrics Setet
   (pl. az IRIS+ „Financial Inclusion” vagy „Sustainable Agriculture”)
2. Minden mutatónak rögzített definíciója, egysége és számítási módszere van,
   amelyet a GIIN tesz közzé — nem finanszírozónként kitalálva
3. A támogatott ugyanazon mutatódefiníciók szerint jelent minden, ezt a szabványt
   használó finanszírozójának, csökkentve a duplikált jelentési erőfeszítést
4. A finanszírozó a támogatotti szintű mutatókat portfólió-szintű jelentéssé összesíti,
   amely évről évre és a támogatottak között összehasonlítható, ugyanazt a mutatót használva
```

A hatékonyságnövekedés kombinatorikus: N finanszírozó × M támogatott közös szókincsre szabványosítása N×M egyedi jelentési kapcsolatot nagyjából N+M leképezéssé alakít egyetlen szabványhoz.

## Kidolgozott példa

**Három finanszírozóval rendelkező támogatott, szabványosítás előtt**: „kiszolgált embereket” jelent az 1. finanszírozónak fejszámlálási definícióval, „elért kedvezményezetteket” a 2. finanszírozónak háztartási definícióval, és „érintett egyéneket” a 3. finanszírozónak szolgáltatási epizód definícióval (így az, aki kétszer látogat, kétszer számít). Három jelentés, három szám, egyik sem összehasonlítható, és egyik sem összehasonlítható egy másik támogatott számaival sem ugyanazon finanszírozó portfóliójában.

**Ugyanaz a támogatott az IRIS+ alatt**: egy meghatározott IRIS+ elért-egyének mutató mellett egy meghatározott eredménymutatót jelent a releváns Core Metrics Setből, mindkettőre a GIIN közzétett számítási módszertanát használva. Mindhárom finanszírozó most ugyanazt a számot kapja, ugyanúgy számolva, és összehasonlíthatja e támogatott költségét IRIS+-meghatározott egységenként a portfóliójában lévő többi támogatottéval, azonos mutatót használva — a jelentési infrastruktúra léptékén ez egy közös [egységköltség-adatbázis](../egységköltség-adatbázisok/) megfelelője.

## Kapcsolat a szoftverfejlesztéssel

A támogatáskezelő platformoknak az IRIS+ mutatóazonosítókat idegen kulcsként kell kezelniük, nem szabad szövegként: a közzétett mutatókód tárolása a támogatott jelentett értéke mellett (egy helyben kitalált „kedvezményezettek” nevű mező helyett) teszi lehetővé a finanszírozók közötti és portfóliók közötti összesítést később adattisztítási projekt nélkül. Ahol egy platformnak olyan finanszírozókat is támogatnia kell, akik nem fogadták el az IRIS+-t, a pragmatikus terv az, hogy egy helyi mutatót a legközelebbi IRIS+ definícióhoz lehessen rendelni, ahelyett hogy minden finanszírozót azonnal a szabványra kényszerítenének — az összehasonlíthatóság fokozatosan javul, ahogy a gráf több része képeződik le közös azonosítókra. A testvértémáról, hogy mire kell felhasználni a jelentett számokat, miután begyűjtötték őket, lásd a [költség eredményenként](../költség-eredményenként/) témát.

## Buktatók

- **Az IRIS+ elfogadásának automatikus összehasonlíthatóságként kezelése.** Két támogatott jelenthet ugyanazon IRIS+ mutató szerint, és mégsem összehasonlíthatók, ha az alapul szolgáló adatminőségük vagy kontrafaktuális feltevéseik eltérnek; a szabvány a definíciókat rögzíti, nem a mérési szigort.
- **Finanszírozók által kitalált „IRIS-hez igazodó” mutatók.** Egy mutató, amelyet csak az IRIS+ nyelvezete ihletett, de nem a tényleges közzétett definíció, visszahozza azt a töredezettséget, amelyet a szabvány megoldani hivatott.
- **Jelentési fáradtság a túlzott kiválasztásból.** Ha egy támogatottat arra kötelezünk, hogy egy teljes Core Metrics Set szerint jelentsen, amikor csak két-három mutató döntésrelevánsan, az a jelentési teher problémáját szabványosított csomagolásban újrateremti.
- **Egyáltalán nincs eredménymutató.** Az IRIS+ sok tisztán kibocsátási mutatót tartalmaz (pl. kiszolgált emberek száma); ha csak ezeket választják, és egyet sem az eredményszintűek közül, az [költség kedvezményezettenként](../költség-kedvezményezettenként/) alakú jelentést eredményjelentés címke alatt állít elő.

## Források

- GIIN, IRIS+ rendszer. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
