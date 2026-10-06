# Tranzakciónkénti költség

A tranzakciónkénti költség a kormányzati digitális szolgáltatások fő egységgazdasági mutatója: egy csatorna működtetésének teljes költsége osztva a rajta keresztül befejezett tranzakciók számával. Ez volt a régi GOV.UK Performance Platform zászlóshajó-adata, és ez az a szám, amely egy évtizednyi „digital by default” befektetést finanszírozott — éppen ezért ez a leginkább kijátszásra hajlamos mutató is.

## Miért fontos

A Cabinet Office 2012-es Digital Efficiency Reportja olyan megfogalmazásban adta a csatornaköltség-összehasonlítást, amely megragadt: a digitális tranzakciókat nagyjából 20-szor olcsóbbnak találták a telefonosnál és nagyjából 50-szer olcsóbbnak a személyes ügyintézésnél, szemléltető helyi önkormányzati számokkal, nagyjából 0,15 £ webes tranzakciónként 2,83 £ telefonos és 8,62 £ személyes ügyintézéssel szemben. Ez az egyetlen összehasonlítás vált a Government Digital Strategy-ben megnevezett 25 mintaszolgáltatás újratervezésének, és minden azóta csatornaváltási megtakarításra hivatkozó tárcai üzleti esetnek az indoklásává. A szám valóban hasznos nagyságrendi jelzés, de az arány teljes egészében azon múlik, mit számolnak mindkét oldalon: a tisztességes telefoncsatorna-költség tartalmazza a call center személyzetét, a telefonszerződést, a képzést és az ingatlant; a tisztességes digitális költség tartalmazza a tárhelyet, a folyamatos termékcsapat-béreket, a sikertelen utakhoz tartozó ügyfélszolgálati időt és a [digitális szolgáltatási szabvány](../digitális-szolgáltatási-szabvány/) 5. pontja által megkövetelt támogatott digitális csatornát. Ha ezekből elég sokat kihagynak a digitális oldalról, bármely szolgáltatás olcsónak látszik.

## A matematika

```
Tranzakciónkénti költség = a csatornához rendelt teljes költség / befejezett tranzakciók

A csatornához rendelt teljes költségnek tartalmaznia kell:
  + tárhelyet és infrastruktúrát
  + termék-/mérnöki/támogató csapat költségét (amortizálva)
  + tartalom- és szolgáltatástervezési költséget (amortizálva)
  + támogatott digitális / akadálymentességi támogatás költségét
  + hibakereslet-költséget (a digitálisan elbukó, és telefonra visszatérő felhasználók)
  − az egyszeri építési költséget a várt szolgáltatási élettartamra amortizálják,
    nem teljes egészében az első évre számolják el

A gyakori számviteli trükk:
  A „határköltség tranzakciónként” (csak a tárhely, miután megépült) úgy idézik,
  mintha „átlagos költség tranzakciónként” lenne (a teljes költség, beleértve azt a csapatot,
  amely tovább építi és üzemelteti). A kettő 10-szeres vagy nagyobb mértékben különbözhet
  egy nagy, aktív szállító csapattal rendelkező szolgáltatásnál.
```

## Kidolgozott példa

**Gépjárműadó-megújítási szolgáltatás**: évi 4 millió tranzakció.

```
Csak határköltség (a trükk):
  Csak tárhely + fizetésfeldolgozás = 180 000 £/év
  Tranzakciónkénti költség = 180 000 / 4 000 000 = 0,045 £
  → az üzleti esetben idézett főcímszám

Teljes költségű (az őszinte) szám:
  Tárhely + fizetés                    180 000 £
  Termék-/mérnöki csapat (8 FTE)       720 000 £
  Ügyfélszolgálat (sikertelen/lekérdezett tranz.) 310 000 £
  Támogatott digitális telefonvonal    140 000 £
  Összesen                           1 350 000 £
  Tranzakciónkénti költség = 1 350 000 / 4 000 000 = 0,3375 £

A teljes költségű szám még mindig nagyjából 8-szor olcsóbb a Digital Efficiency Report
2,83 £-os telefoncsatorna-összehasonlító értékénél — valódi és védhető megtakarítás —,
de 7,5-szer magasabb, mint a rövidített változatban idézett csak határköltség szám.
Mindkét szám „igaz”; csak az egyik összehasonlítható azzal a telefoncsatorna-költséggel,
amellyel szembeállítják.
```

## Kapcsolat a szoftverfejlesztéssel

A tranzakciónkénti költség az a hely, ahol az architektúra-döntések pénzügyi számmá válnak: az a szolgáltatás, amely tisztán automatikusan skálázódik és kevés kézi beavatkozást igényel, idővel lefelé hajtja ezt a számot; az, amely zavaros hibaállapotokból magas ügyfélszolgálati jegyvolument generál, felfelé hajtja, a tárhely-hatékonyságtól függetlenül. Természetes kísérőmutatója a [digitális szolgáltatási szabvány](../digitális-szolgáltatási-szabvány/) 10. pontjának („határozza meg, hogyan néz ki a siker, és tegyen közzé teljesítményadatokat”) és a [szolgáltatási szabványok és tranzakciós mutatók](../szolgáltatási-szabványok-és-tranzakciós-mutatók/) témának, amely a teljesebb KPI-készletet adja, amelybe ez a szám illeszkedik. Közvetlenül táplálja a [csatornaváltási megtakarítások](../csatornaváltási-megtakarítások/) számításait, és egyeztetni kell a [teljes birtoklási költséggel a kormányzati IT-ban](../teljes-birtoklási-költség-a-kormányzati-it-ban/), hogy a platform és a megosztott szolgáltatási rezsi ne kerüljön csendben kihagyásra.

## Buktatók

- **Átlagköltségnek álcázott határköltség**: a csak tárhelyköltség idézése, miután egy szolgáltatás megépült, kihagyva a folyamatosan karbantartó, iteráló és támogató csapatot — lásd a fenti kidolgozott példát.
- **A támogatott digitális költség kihagyása**: egy csatorna nem „digital by default”-megfelelő, és valódi költsége nem rögzített, ha a [digitális befogadás](../digitális-befogadás/) által megkövetelt telefon-/papír-tartalék külön költségezett vagy figyelmen kívül hagyott.
- **A hibakereslet figyelmen kívül hagyása**: a digitálisan induló és elbukó tranzakciók, amelyek mégis telefonhívást vagy papírűrlapot generálnak, a digitális csatorna költsége, nem azé a csatornáé, amely elkapja a hibát.
- **Különböző összetettségű tranzakciók összehasonlítása csatornák között**: a telefonhívások aránytalanul a nehéz eseteket kezelik (több eltartott, hibajavítás, kiszolgáltatott kérelmezők); egy átlagos telefonköltség és egy átlagos digitális költség összehasonlítása túlbecsüli az arányt, hacsak a tranzakciók összetételét nem illesztik.

## Források

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, 10. pont: határozza meg, hogyan néz ki a siker. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
