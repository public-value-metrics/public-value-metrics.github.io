# Közszolgáltatási termelékenység

A közszolgáltatási termelékenység azt méri, mennyire hatékonyan alakítja át a közkiadás a ráfordításokat (munkaerő, tőke, áruk és szolgáltatások) minőséggel korrigált kibocsátássá olyan szolgáltatásoknál — egészségügy, oktatás, rendőrség, szociális gondozás —, amelyeknek nincs piaci áruk, és ezért nincs bevételi adatuk, amellyel a költségeket el lehetne osztani. Az Egyesült Királyság Office for National Statistics (ONS) szervezete a 2000-es évek közepe óta teszi közzé ezt a sorozatot, és ez maradt a legmódszertanilag fejlettebb nemzeti kísérlet a „jobban vagy rosszabbul alakítja-e át a kormányzat a pénzt közszolgáltatásokká?” kérdés megválaszolására.

## Miért fontos

Egy piacon a termelékenység (kibocsátás értéke) / (ráfordítás költsége), és a kibocsátás értéke megfigyelhető, mert valaki fizet érte. Egy csípőprotézisnek, egy iskolai helynek és egy rendőri járőrnek nincs eladási ára, így naivan csak a *ráfordításokat* (mit költöttek el) lehet mérni — ami arra csábítja a kommentátorokat, hogy a növekvő közkiadást automatikusan rossznak tekintsék, mivel a több ráfordítás változatlan főcím-tevékenység mellett csökkenő termelékenységnek látszik. Az ONS módszertana, amelyet a közszolgáltatási termelékenységről szóló „Sources and Methods” kiadványai írnak le, ezt úgy oldja meg, hogy *kibocsátási* indexet épít a tevékenységi volumenekből (elvégzett műtétek, tanított diákok, kivizsgált bűncselekmények), majd ezt a kibocsátási indexet *minőséggel korrigálja* — az egészségügynél a túlélési arányokat és várakozási időket, az oktatásnál az eredményességet, a rendőrségnél az olyan eredményeket, mint az ügyek lezárása, beépítve —, hogy az a szolgáltatás, amely ugyanannyi műtétet végez, de jobb túlélési arányt ér el, termelékenyebbként, nem csupán drágábbként jelenjen meg. Az ONS kiadványaiban visszatérő főcím-megállapítás józanító a szektor számára: az egyesült királysági közszolgáltatási termelékenység a COVID-19-világjárvány alatt élesen esett, és az ONS saját 2020-as évek közepi kiadásai szerint több alágazatban, köztük az egészségügyben, még mindig nem állt vissza a 2019-es szintre, annak ellenére, hogy a kiadások nőttek — ez a rés a „több finanszírozás” és a „több termelékenység” kérdését két teljesen különálló kérdésként keretezi újra.

## A matematika

```
Kibocsátási index (volumen) = Σ (tevékenység_i × relatív egységköltség-súly_i), bázisév-súlyozású
                              az összes szolgáltatási tevékenységre (pl. csípőműtétek, szürkehályog-
                              műtétek, háziorvosi konzultációk), Laspeyres/Paasche volumenindexhez hasonlóan

Minőségi korrekció          = kibocsátási index × minőségi korrekciós tényező
                              (pl. a túlélési arányok, várakozási idők, eredményesség vagy
                              újraelkövetés változásának szorzóként való beépítése a nyers volumenre)

Ráfordítási index           = Σ (munkaórák × munkaerőköltség-súly) + (áru-/szolgáltatásköltség,
                              deflálva) + (tőkefogyasztás)

Összes tényező termelékenységének növekedése = a minőséggel korrigált kibocsátási index %-os változása
                                               − a ráfordítási index %-os változása
```

## Kidolgozott példa

**Szemléltető NHS akut-szektor termelékenységi számítás** (a szerkezet az ONS módszertanát követi):

```
1. év: kibocsátási volumenindex = 100,0 (bázisév), ráfordítási index = 100,0
       → termelékenységi index = 100,0

2. év: a tevékenységi volumen 3,0%-kal nő (több műtét, több időpont),
      de az átlagos várakozási idő romlik, ami −1,0%-os minőségi
      korrekciós leszámítást alkalmaz
      Minőséggel korrigált kibocsátási index = 100 × 1,030 × 0,990 = 101,97

      A ráfordítások nőnek: létszám +4,0%, egyéb költségek (deflálva) +1,5%,
      súlyozott ráfordítási index = 100 × 1,032 = 103,2

Termelékenység-növekedés = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                         = 1,97% − 3,2% = −1,23 százalékpont

Értelmezés: a tevékenység nőtt, de a ráfordítások gyorsabban nőttek, és a minőség
kissé romlott, így a termelékenység — kibocsátás ráfordítás-egységenként — csökkent,
annak ellenére, hogy „több ellátást nyújtottak”.
```

Pontosan ez a minta, amelyet az ONS kiadásai ismételten jelentettek az NHS egyes részeire a világjárvány után: a növekvő kiadás és a növekvő nyers tevékenység együtt létezik a csökkenő mért termelékenységgel, ha mind a minőségi korrekciót, mind a ráfordítás-növekedést figyelembe veszik.

## Kapcsolat a szoftverfejlesztéssel

A közszolgáltatási termelékenység a mérnöki termelékenységi viták népességi szintű megfelelője (leszállított sztoripontok kontra [DORA-mutatók](../dora-mutatók-a-közértékért/) kontra [áramlási mutatók](../áramlási-mutatók-a-kormányzati-szállításban/)): a minőségi korrekció nélküli nyers áteresztőképesség pontosan olyan félrevezető egy kórházban, mint a „leszállított kódsorok” egy szoftvercsapatnál. A tárcáknak teljesítményadat-csővezetékeket építő csapatok a minőségi korrekciót elsőrangú, verziózott transzformációs szakaszként kezeljék, ne lábjegyzetként — mert az ONS saját hitelessége azon nyugszik, hogy ez a korrekció átlátható, reprodukálható, és felülvizsgált, ahogy jobb minőségi adatok érkeznek (az ONS felülvizsgálja a korábbi évek termelékenységi becsléseit, ahogy az alapul szolgáló minőségi adatok — pl. túlélési arányok — véglegesednek, így minden ezeket a statisztikákat fogyasztó downstream rendszernek kezelnie kell a visszamenőleges felülvizsgálatokat, nem csupán új időszakokat hozzáfűzni). Közvetlenül kapcsolódik a [teljes birtoklási költséghez](../teljes-birtoklási-költség-a-kormányzati-it-ban/) és az [MI-termelékenységhez a közszférában](../mi-termelékenység-a-közszférában/): az a rendszer, amely a nyers tevékenységi volument növeli a minőség javítása vagy megtartása nélkül, az ONS saját meghatározása szerint nem termelékenységi javulás.

## Buktatók

- **A ráfordítás-növekedés kezelése termelékenység-növekedésként**: a több személyzetet finanszírozó több kiadás több *tevékenységet* hoz, nem több *termelékenységet*, hacsak a kibocsátás ráfordítás-egységenként is nem nő — a kettőt a politikai kommentárok rutinszerűen összekeverik.
- **A minőségi korrekció teljes figyelmen kívül hagyása**: a csak nyers tevékenységszámokból épített kibocsátási index „termelékenységi nyereséget” mutat az alacsonyabb értékű vagy minőségű dolgok többszöri elvégzéséből; az ONS minőségi korrekciója kifejezetten ennek elkapására létezik.
- **Alágazatok termelékenységi indexeinek összehasonlítása a módszertani verzió egyeztetése nélkül**: az egészségügyi, oktatási és rendőrségi termelékenység mind különböző tevékenységi és minőségi adatforrásokból épül, különböző felülvizsgálati ciklusokon — a naiv ágazatok közötti összehasonlítás összeegyeztethetetlen eszközöket hasonlít össze.
- **Egyetlen év termelékenység-csökkenésének állandó trendként olvasása**: a világjárvány alatti és utáni termelékenységi számok jelentős évről évre ingadozást mutattak, ahogy maguk a minőségi adatok (pl. várólisták, halasztható ellátások behozása) eltolódtak; az ONS következetesen óv az egyéves mozgások túlértelmezésétől.

## Források

- Office for National Statistics, „Public Service Productivity” sorozat.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, „Public Service Productivity: Total, UK — Sources and Methods.”
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
