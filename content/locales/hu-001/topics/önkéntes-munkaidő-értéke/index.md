# Önkéntes munkaidő értéke

Az önkéntes munkaidő értéke (volunteer time value) a fizetetlen munkához rendelt pénzbeli becslés, amelyet leggyakrabban egy jótékonysági szervezet valódi gazdasági lábnyomának — számlái plusz a munka, amelyet nem kellett kifizetnie — megállapítására használnak, vagy annak igazolására, hogy egy adott beavatkozás költséghatékonyabb, mint azt a készpénz-költségvetés önmagában sugallja. Két nemzeti módszertan dominál: az Egyesült Államok Independent Sector becslése és az Egyesült Királyság Office for National Statistics / NCVO megközelítése, és ugyanazt a munkaórát meglehetősen eltérően árazzák.

## Miért fontos

Az Independent Sector a University of Maryland Do Good Institute-jával együttműködve minden évben közzéteszi az önkéntes munkaidő nemzeti óránkénti értékét, a Bureau of Labor Statistics bérdataiból építve — konkrétan a magánszektor nem mezőgazdasági bérszámfejtésén a termelési és nem felügyelői munkavállalók átlagos óránkénti keresetét, plusz egy járulékos juttatási korrekciót —, és az amerikai államok szerint lebontva. Legutóbbi kiadása az értéket **36,14 dollár/óra** értékre tette 2025-re, az előző évhez képest 3,9%-kal feljebb, az állami szintű értékek Washington DC-ben több mint 50 dollártól Puerto Ricóban 20 dollár alattiig terjednek. Az Egyesült Királyságban az Office for National Statistics külön becsülte a formális önkéntes munka pótlási költségét **14,43 £/óra** értéken (2017-es becslés), és az NCVO UK Civil Society Almanac 2024 az önkéntes részvételi adatokat — 2021–22-ben nagyjából 14,2 millió ember formális önkéntes munkája — használja a szektor teljes önkéntes hozzájárulásának nagyjából **18 milliárd £-ra** becslésére, ami az Egyesült Királyság GDP-jének körülbelül 0,8%-a.

Az ok, amiért ez a számviteli kozmetikán túl számít: az a program, amely erősen önkéntes munkára támaszkodik, drámaian olcsóbbnak látszhat tisztán készpénzes [költség eredményenként](../költség-eredményenként/) alapon, mint a fizetett munkatársakra támaszkodó, még akkor is, ha a valódi erőforrás-költség — az, amibe ennek a munkának a pótlása kerülne — hasonló vagy magasabb. Az önkéntes munkaidő értékét figyelmen kívül hagyó finanszírozók és értékelők rendszerszerűen alulszámolják az önkéntes-nehéz szállítási modellek valódi költségét, ami torzítja a hatékonysági összehasonlításokat az ugyanazt az eredményt nyújtó fizetett munkatársas modellekkel szemben.

## A matematika

```
Az önkéntes munkaidő értéke = Hozzájárult önkéntes munkaórák × óradíj

A díj megválasztása számít és megváltoztatja a választ:
  - Pótlási költség megközelítés: egy fizetett munkavállaló bére, aki ugyanazt a feladatot
    végezné (pl. egy képzett ifjúsági munkás pótlási költség-díja, nem az általános átlagbér)
    — a legvédhetőbb a feladatspecifikus értékeléshez
  - Alternatívaköltség megközelítés: az önkéntes saját elmaradt bére — a legvédhetőbb annak
    értékeléséhez, amiről az önkéntes lemondott
  - Nemzeti átlag megközelítés: az Independent Sector vagy az ONS egyetlen vegyes díja
    — a legvédhetőbb a főcím szintű, ágazatok közötti összehasonlíthatósághoz
```

A három megközelítés ugyanarra az órára nagyságrendileg is eltérhet (egy ügyvéd, aki kuratóriumi tagként önkénteskedik, nagyon más alternatívaköltség-díjjal rendelkezik, mint a nemzeti átlag), így minden jelentett számnak meg kell mondania, melyik módszer állította elő.

## Kidolgozott példa

**Egyesült királysági jótékonysági szervezet, nemzeti átlag megközelítés**: évi 5000 önkéntes óra, 14,43 £/órával értékelve (ONS pótlási költség becslés):

```
Érték = 5000 × 14,43 £ = 72 150 £
```

Ha a jótékonysági szervezet készpénzkiadása abban az évben 300 000 £ volt, valódi erőforrás-költsége — készpénz plusz önkéntes munka — 372 150 £, nagyjából 24%-kal magasabb, mint a készpénzszám önmagában sugallja. A csak a 300 000 £-os készpénzszámot használó költség eredményenként számítás ugyanennyivel alulbecsüli a valódi költséget.

**Amerikai jótékonysági szervezet, nemzeti átlag megközelítés**: 2000 önkéntes óra 36,14 dollár/órával értékelve (Independent Sector, 2025-ös kiadás):

```
Érték = 2000 × 36,14 $ = 72 280 $
```

**Ugyanaz az amerikai jótékonysági szervezet, alternatívaköltség megközelítés**: ha az önkéntesek aránytalanul nyugdíjas szakemberek, akiknek korábbi keresete átlagosan 60 dollár/óra volt, az alternatívaköltség-értékelés 120 000 dollár lenne — kétharmaddal magasabb a nemzeti átlag számnál, ami szemlélteti, miért kell kimondani a módszert.

## Kapcsolat a szoftverfejlesztéssel

Az önkéntes órákat naplózó rendszereknek (műszakbeosztó eszközök, önkéntes-kezelő platformok) feladat- vagy szerepkör-szinten kell rögzíteniük az órákat, nem csak egy összeget, hogy szerepkörönként alkalmazhassanak pótlási költség-díjat egyetlen általános nemzeti átlagdíj helyett egy vegyes önkéntes munkaerőre (egy kuratóriumi tag órája és egy felügyeleti óra nem gazdaságilag egyenértékű). A használt díj és módszertan tárolása a számított érték mellett — nem csak a végső pénznemszám — lehetővé teszi, hogy a downstream jelentés (éves beszámolók, [társadalmi megtérülés](../társadalmi-megtérülés/) számítások, finanszírozói jelentések) később reprodukálja vagy vitassa a számot, ahelyett hogy átlátszatlan állandóként kezelné. Arról, hogy az önkéntes munkaidő értékének kihagyása miért becsüli alá rendszerszerűen a valódi szállítási költséget, lásd a [költség eredményenként](../költség-eredményenként/) témát.

## Buktatók

- **Egyetlen általános díj használata szerkezetileg eltérő szerepkörökre.** Egy szakmai pro bono órára (jogi, pénzügyi, klinikai) alkalmazott nemzeti átlagbér-díj drasztikusan alulértékeli azt; ahol a feladat szakértelmet igényel, a díjat a pótolt szerepkörhöz igazítsák.
- **Kettős számítás a fizetett munkatársi költséggel szemben.** Ha az önkéntesek olyan munkát helyettesítenek, amelyet egyébként fizetnének, biztosítsák, hogy az értékelés a készpénzkiadáshoz additív, ne egy már felfújt személyzeti becslésre rétegzett.
- **Elavult díj idézése dátum nélkül.** Az Independent Sector és az ONS díjai évente változnak (vagy — az ONS esetében — csak időszakosan becsülik újra); egy dátum nélküli önkéntes munkaidő-szám egy jelentésben majdnem értelmetlen az összehasonlításhoz.
- **Az önkéntes munkaidő értékének adománygyűjtési eszközként kezelése.** Költségszámviteli korrekció a valódi erőforrás-költség megértéséhez, nem új pénz, amelyet a jótékonysági szervezet elkölthet; a kettő összekeverése félrevezeti a számlákat olvasó testületet.

## Források

- Independent Sector és a Do Good Institute (University of Maryland), „Value of Volunteer Time.” <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, a Value of Volunteer Time módszertana. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, az önkéntes munka értékelési becslése, az NCVO elemzésében idézve. <https://www.ncvo.org.uk/>
