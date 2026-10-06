# Emberi fejlettségi index (HDI)

A HDI az ENSZ fő alternatívája az országok kizárólag jövedelem szerinti rangsorolására: a várható élettartamot, az oktatást és a jövedelmet egyetlen, 0 és 1 közötti számmá egyesíti, azon az előfeltevésen, amelyet Amartya Sen közgazdász érvelt és Mahbub ul Haq fejlesztett ki az ENSZ számára, hogy a fejlődés arról szól, hogy bővítsük, mit tehetnek és lehetnek az emberek, nem csupán arról, mit keresnek. Az ENSZ Fejlesztési Programjának (UNDP) Human Development Reportjában 1990 óta évente közzéteszik.

## Miért fontos

A HDI előtt a „fejlődést” szinte kizárólag az egy főre jutó GNP-vel mérték, amely semmit nem mond arról, hogy a növekedés eljut-e a hétköznapi emberek egészségéhez vagy oktatásához. Sen képességszemlélete a fejlődést a valódi szabadságok kiterjesztéseként keretezte újra, és ul Haq ezt közzétehető indexszé alakította, amellyel az UNDP minden országot rangsorolhatott, arra kényszerítve a kizárólag jövedelemmel gazdagodó, de az egészséget vagy az iskoláztatást elhanyagoló kormányokat, hogy a GDP-jük sugallta rossz rangsorral szembesüljenek (az Öböl menti olajállamok és egyes extraktív gazdaságok a szokásos példák). A HDI háromutas szerkezete egyben a [Többdimenziós Szegénységi Index](../többdimenziós-szegénységi-index/) közvetlen módszertani őse is: mindkettő megtagadja, hogy egy dimenzió visszavásárolhassa egy másikban lévő hiányt, számtani helyett mértani közepet használva. Az UNDP minden kiadáshoz közzéteszi a teljes technikai jegyzeteket és a mögöttes adatokat (<https://hdr.undp.org/data-center/human-development-index>), amelyek a kanonikus forrás mindenkinek, aki az indexre épít, ahelyett hogy újralevezetné.

## A matematika

```
Várható élettartam index (LEI)    = (LE − 20) / (85 − 20)

Átlagos iskolai évek index        = átlagos iskolai évek / 15
Várható iskolai évek index        = várható iskolai évek / 18
Oktatási index (EI)               = (Átlagos évek index + Várható évek index) / 2

Jövedelem index (II)              = (ln(egy főre jutó GNI) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [a három részindex mértani közepe]
```

A mértani közép tudatos: mivel szoroz, nem átlagol, egy dimenzió nagyon magas pontszáma nem képes teljesen kiegyenlíteni egy másik nagyon alacsony pontszámát — ezt a tervet az UNDP 2010-ben fogadta el kifejezetten az egyensúlytalanság büntetésére, a korábbi számtani közép képletet felváltva.

## Kidolgozott példa

**Közepes jövedelmű ország**: várható élettartam 72 év, átlagos iskolai évek 8, várható iskolai évek 13, egy főre jutó GNI 12 000 dollár.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
MYSI = 8 / 15                                        = 0,533
EYSI = 13 / 18                                       = 0,722
EI = (0,533 + 0,722) / 2                             = 0,628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

A 0,713-as HDI az UNDP „magas emberi fejlettség” sávjába (0,700–0,799) esik; a „nagyon magas” 0,800-nál kezdődik. Figyeljék meg, mennyire érzékeny az eredmény a leggyengébb részindexre: ha az átlagos iskolai évek 8 helyett 4 lennének (MYSI = 0,267, EI = 0,494), a HDI (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639-re esik — egy egész sávot zuhanva —, noha semmi más nem változott.

## Kapcsolat a szoftverfejlesztéssel

- A mértani közép minta közvetlenül újrahasznosítható bármely összetett szolgáltatási vagy terméktípus-pontszámhoz, ahol nem akarják, hogy egy erős dimenzió elfedjen egy kritikusan gyengét — pl. egy közszolgáltatási digitális szolgáltatás akadálymentességi, teljesítmény- és megbízhatósági pontszámainak szorzással, nem súlyozott átlaggal való kombinálása, hogy egy gyors, de nem akadálymentes szolgáltatás ne kaphasson „jó” minősítést.
- A HDI jövedelem logaritmikus transzformációja (egy további font csökkenő határértéke) ugyanaz a logika, amely az értékelésben az [elosztási súlyozás](../elosztási-súlyozás/) mögött áll: egy további 1000 dollár sokkal többet jelent egy szegény háztartásnak, mint egy gazdagnak, és mindkettő lineáris kezelése rosszul árazza a hatást.
- Minden olyan irányítópultnak, amely egyetlen vegyes „digitális befogadás” vagy „állampolgári eredmények” pontszámot jelent, ugyanolyan kifejezetten kell dokumentálnia az aggregációs képletét, ahogy az UNDP technikai jegyzetei teszik — lásd [közszféra-KPI-k](../közszféra-kpi-k/) és [közérték-eredménylap](../közérték-eredménylap/).

## Buktatók

- **Átlagolás a mértani közép helyett** — a számtani közép lehetővé teszi, hogy a magas jövedelem teljesen elfedje a rossz egészséget vagy oktatást; a 2010-es módszertani változtatás egész célja ennek a helyettesítésnek a megszüntetése volt.
- **A HDI évről évre történő összehasonlítása, mintha inflációval korrigált GDP lenne** — az UNDP időszakosan újrabázisolja az indexet (új minimum/maximum határok, módosított iskoláztatási plafonok), így egy rangváltozás módszertani frissítést tükrözhet, nem valódi eltolódást; mindig ellenőrizzék, melyik HDR-kiadásból származik egy szám.
- **A HDI kezelése szegénységi mérőszámként** — nemzeti átlag, és semmit nem mond az országon belüli eloszlásról; arra a [Többdimenziós Szegénységi Indexet](../többdimenziós-szegénységi-index/) vagy az UNDP különálló egyenlőtlenséggel korrigált HDI-jét használják.

## Források

- UNDP. „Human Development Index (HDI)” technikai jegyzetek és adatok.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (az index bevezetése).
- Sen A. „Development as Freedom.” Oxford University Press, 1999.
