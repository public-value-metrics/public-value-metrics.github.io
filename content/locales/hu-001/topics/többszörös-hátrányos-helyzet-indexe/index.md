# Többszörös Hátrányos Helyzet Indexe (IMD)

Az IMD a relatív hátrányos helyzet hivatalos mérőszáma Anglia kis területeire, amely az ország mind a 32 844 Lower-layer Super Output Area-ját (LSOA, egyenként nagyjából 1500 lakos) 1-től (leghátrányosabb) 32 844-ig (legkevésbé hátrányos) rangsorolja. A ma Ministry of Housing, Communities and Local Government (MHCLG, korábban MHCLG/DCLG) néven működő minisztérium teszi közzé, legutóbb az English Indices of Deprivation 2019 formájában, és közvetlenül irányítja a központi kormányzati finanszírozást, a közegészségügyi prioritásokat és több tucat helyi program jogosultságát.

## Miért fontos

A hátrányos helyzet nem egyetlen dolog — egy környék lehet jövedelmi értelemben szegény, de biztonságos, vagy jövedelmileg megfelelő, de rossz egészségügyi eredményekkel és rossz lakhatással küzdő. Az IMD elődindexei (az 1970-es évekbeli Department of the Environment hátrányos helyzeti mutatóira visszanyúlva) éppen azért fejlődtek mai hétdimenziós modellé, mert az egymutatós célzás (például csak a munkanélküliségi ráta) rutinszerűen elmulasztotta az egyéb módon hátrányos helyzetű területeket. Az IMD 2019 a jövedelmet, a foglalkoztatást, az oktatást, az egészséget, a bűnözést, a lakhatási és szolgáltatási akadályokat és a lakókörnyezetet egyetlen összetett rangsorrá egyesíti LSOA-nként, minden terület saját mutatókosárból épül, és az MHCLG módszertana szerint súlyozott. Mivel kis terület (LSOA), nem helyi önkormányzati szinten működik, felfedi az egyébként jómódú körzetekbe rejtett hátrányos helyzetű zsebeket — ezért az IMD, nem az átlagos helyi önkormányzati jövedelem az, amelyre az NHS England, az Oktatási Minisztérium pupil premiumja és több tucat helyi önkormányzati finanszírozási képlet ténylegesen támaszkodik. Az Angliában jogosultságot meghatározó, elérést priorizáló vagy területenként hatást jelentő szoftvernek az IMD decilist vagy rangot elsőrangú bemenetként kell kezelnie, nem utólagos gondolatként — és ahol egy program kifejezetten a leghátrányosabb területeket célozza, értékelésének az ezzel összhangban lévő [elosztási súlyozást](../elosztási-súlyozás/) kell alkalmaznia, ahelyett hogy egy font hasznot ugyanannyira értékelne, bárhová esik.

## A matematika

```
7 dimenzió, súlyozva:
  Jövedelem                              22,5%
  Foglalkoztatás                         22,5%
  Oktatás, készségek és képzés           13,5%
  Egészségi hátrány és fogyatékosság     13,5%
  Bűnözés                                 9,3%
  Lakhatási és szolgáltatási akadályok    9,3%
  Lakókörnyezet                           9,3%

Minden dimenziópontszám: a mutatókat standardizálják (rangsorolják, majd normális
eloszlás felé transzformálják) és exponenciális transzformációval kombinálják,
hogy bármely egyetlen mutató magas hátrányos helyzetét ne lehessen teljesen
semlegesíteni a dimenzión belüli többi alacsony hátrányos helyzetével.

IMD összetett pontszám (LSOA) = Σ (dimenziópontszám × dimenziósúly)
Az LSOA-kat az összetett pontszám szerint rangsorolják → 1 (leghátrányosabb) – 32 844 (legkevésbé hátrányos)
Decilisek: rang ÷ 3284 (kb.), 1. decilis = az LSOA-k leghátrányosabb 10%-a
```

## Kidolgozott példa

**LSOA összetett pontszám**, szemléltető standardizált dimenziópontszámokkal (0 = nincs hátrányos helyzeti jel, magasabb = hátrányosabb):

```
Jövedelem               0,35 × 0,225 = 0,07875
Foglalkoztatás          0,30 × 0,225 = 0,06750
Oktatás                 0,20 × 0,135 = 0,02700
Egészség                0,15 × 0,135 = 0,02025
Bűnözés                 0,10 × 0,093 = 0,00930
Lakhatási akadályok     0,05 × 0,093 = 0,00465
Lakókörnyezet           0,08 × 0,093 = 0,00744

Összetett pontszám = 0,07875 + 0,06750 + 0,02700 + 0,02025
                   + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Ezt az összetett pontszámot ezután az összes 32 844 LSOA pontszámához rangsorolják. Ha az LSOA a 2950. helyre kerül, az 1. decilisbe esik (2950 ÷ 3284 ≈ 0,9, vagyis Anglia környékeinek leghátrányosabb 10%-án belül) — ami sok finanszírozási képletnél a jogosultságot megnyitó küszöb, függetlenül attól, hogyan pontoz átlagosan a környező helyi önkormányzat.

## Kapcsolat a szoftverfejlesztéssel

- Bármely szolgáltatás, amely irányítószámra vagy LSOA-ra geokódolja a felhasználókat, összekapcsolhatja a közzétett IMD-kikeresési táblát (az MHCLG ingyenes, verziózott CSV-je), hogy hátrányos helyzeti decilist adjon kovariánsként — az elérés célzásához, az ügyteher priorizálásához vagy az eredmények hátrányos helyzeti sáv szerinti jelentéséhez új személyes adatok gyűjtése nélkül.
- Az IMD decilis szabványos méltányossági ellenőrzés a közszolgáltatási digitális szolgáltatásoknál: a szolgáltatás igénybevételének, lemorzsolódásának vagy elégedettségének IMD decilis szerinti keresztbontása felfedi a hozzáférési réseket, amelyeket az összesített mutató elrejt — lásd [digitális befogadás](../digitális-befogadás/) és [állampolgári elégedettségi mutatók](../állampolgári-elégedettségi-mutatók/).
- Mivel az IMD-rang relatív (mindig rögzített rangkészletet összegez Angliában), nem mutathatja meg, hogy a hátrányos helyzet országosan nő vagy csökken-e időben — csak azt, hogy mely területek hol helyezkednek el egymáshoz képest abban a kiadásban; ne építsenek abszolút trend-irányítópultokat pusztán a nyers IMD-rangra.

## Buktatók

- **Az IMD-rangok összehasonlítása kiadások (2015 vs. 2019) között időbeli trendként** — a mögöttes mutatók, földrajzi egységek és módszertan mind változnak a kiadások között; az MHCLG kifejezetten óv attól, hogy a rangváltozásokat annak bizonyítékaként használják, hogy egy terület hátrányosabbá vagy kevésbé hátrányossá vált.
- **Az LSOA-szintű IMD alkalmazása egyénekre** — az 1. decilisbe eső LSOA is tartalmaz nem hátrányos helyzetű háztartásokat, a 10. decilisbe eső pedig hátrányos helyzetűeket; az IMD területeket ír le, nem embereket, és egyéni jogosultsági helyettesítőként való használata mindkét irányba téves besorolást okoz.
- **A dimenzió-szintű részletek figyelmen kívül hagyása az összetett rang javára** — két azonos összetett pontszámú LSOA teljesen eltérő dimenzióprofillal rendelkezhet (az egyik egészségi, a másik bűnözési szempontból hátrányos); az egyetlen problémát célzó célzási rendszernek a releváns dimenziópontszámot kell használnia, nem a vegyes összetettet.

## Források

- Ministry of Housing, Communities and Local Government. „English Indices of Deprivation 2019.”
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. „The English Indices of Deprivation 2019: Technical Report.”
