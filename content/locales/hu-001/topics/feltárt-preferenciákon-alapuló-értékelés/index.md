# Feltárt preferenciákon alapuló értékelés

A feltárt preferenciák módszerei egy nem piaci jószág értékét egy kapcsolódó piacon megfigyelhető viselkedésből következtetik, ahelyett hogy közvetlenül kérdeznék az embereket. A hedonikus árazás és az utazási költség módszere a két igásló technika: mindkettő valódi tranzakcióból indul, és kiszámít egy implicit árat arra, amit soha nem adtak el közvetlenül.

## Miért fontos

Ahol a [kinyilvánított preferenciák](../kinyilvánított-preferenciákon-alapuló-értékelés/) hipotetikus kérdést tesznek fel, a feltárt preferenciák módszerei azt figyelik meg, miért fizettek az emberek ténylegesen, amit a Green Book, egyéb tényezők azonossága mellett, általában hitelesebb bizonyítéknak tekint, mert nem érzékeny a hipotetikus torzításra — a hedonikus lakásár-vizsgálat válaszadói valóban megfizették a mért felárat vagy kedvezményt (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, 2. melléklet). A hedonikus árazás egy piaci árat — jellemzően lakásárat — bont a jószág egyes attribútumainak implicit áraira, lehetővé téve az elemzőknek például azon felár elkülönítését, amelyet a háztartások ténylegesen fizetnek azért, hogy csendesebb vagy jobb levegőjű helyen éljenek, statisztikailag kontrollálva minden más, a lakásárat szintén befolyásoló attribútumot (méret, hely, iskolakörzet). Az utazási költség módszere a belépődíj nélküli rekreációs helyekre ugyanezt teszi: az idő és pénz, amelyet az emberek a hely elérésére költenek, alsó határát tárja fel annak, mennyit ér számukra a hely, mert senki nem vállal olyan költséget, amely meghaladja a látogatás számára vett értékét.

Mindkét módszernek ugyanaz a szerkezeti korlátja: csak azt tudják értékelni, ami egy létező piaci tranzakcióba be van ágyazva. A kifutópálya melletti zaj megjelenik a lakásárakban, mert akiknek számít a zaj, csendesebb lakásokba rendeződnek; egy olyan faj létezési értéke, amelyet senki nem látogat és amelynek közelében senki nem él, egyetlen tranzakcióban sem jelenik meg, éppen ez az a hiány, amelyet a [kinyilvánított preferenciák](../kinyilvánított-preferenciákon-alapuló-értékelés/) módszerei hivatottak betölteni.

## A matematika

```
Hedonikus árazás:
  Lakásár = f(szerkezeti attribútumok, elhelyezkedési attribútumok,
              a vizsgált környezeti attribútum, ...)
  Regresszióval becsülve; a környezeti attribútum együtthatója
  (minden mást állandónak tartva) az implicit ára.

  Az X attribútum implicit ára = ∂(Lakásár) / ∂X

Utazási költség módszer:
  Látogatási arány (látogatások per fő az i zónából) = f(az i zónából való utazási költség,
                   helyettesítő helyek, társadalmi-gazdasági kontrollok)
  Becsüljenek keresleti görbét a látogatásokra az utazási költség függvényében.
  Fogyasztói többlet = a becsült keresleti görbe alatti terület
                     = a hely értéke a látogatók számára
```

Mindkét módszer statisztikailag megalapozott kontrollkészletet igényel — egy zavaró attribútum (hedonikus) vagy egy közeli helyettesítő hely (utazási költség) kihagyása az implicit árat előre nem mindig nyilvánvaló irányba torzítja, ezért követeli a Green Book 2. melléklete a regressziós specifikáció és a kontrollok jelentését, nem csak a főcím-együtthatóét.

## Kidolgozott példa

**Nemzeti kormányzat**: a Green Book saját szén-dioxid-árnyékár-módszertana részben hedonikus bizonyítékokra támaszkodik, de egy egyszerűbb szemléltető eset a repülőgépzaj. Egy hedonikus tanulmány, amely egy repülési útvonal menti terület lakáseladási árait a távolsággal súlyozott zajkitettségre regresszálja, a mérettel, kor és iskolakörzettel kontrollálva, megállapítja, hogy az átlagos zajkitettség minden 1 decibeles növekedése a lakásár 0,5%-os csökkenésével jár. Egy tipikus 280 000 £-os lakásra az érintett területen:

```
Implicit ár decibelenként = 280 000 £ × 0,5% = 1400 £ háztartásonként
Egy új kifutópálya 3 dB-es növekedése által érintett háztartások = 18 000
A zajnövekedés összesített implikált költsége = 1400 £ × 3 × 18 000 = 75,6 M£
```

Ez egyszeri tőkésített költség (a lakásárba ágyazva), amelyet az értékelésnek ügyelnie kell, hogy ne számítson ki kétszer egy külön becsült éves zaj-zavarási költségáram mellett.

**Jótékonysági szervezet**: egy környezetvédő jótékonysági szervezet az utazási költség módszerével értékel egy ingyenes belépésű természetvédelmi területet. A látogatók irányítószámairól szóló felmérési adatok a oda-vissza utazás átlagos költségét (az időt a Green Book ajánlott nem munkaidős időértékén, plusz üzemanyag) látogatásonként 14 £-ra adják évi 40 000 látogatásnál. A becsült keresleti görbe — a látogatási arányok csökkenése az egyik zónából való utazási költség emelkedésével — látogatásonként, a ténylegesen elköltött 14 £ felett nagyjából 9 £ fogyasztói többletet implikál.

```
Összes éves érték = 40 000 látogatás × (14 £ elköltve + 9 £ fogyasztói többlet)
                  = 40 000 × 23 £ ≈ 920 000 £/év
```

Ez messze meghaladja a terület nulla belépődíj-bevételét, és védhető számot ad a jótékonysági szervezet kurátorainak a hely rekreációs értékéről, amikor a finanszírozók előtt érvelnek.

## Kapcsolat a szoftverfejlesztéssel

A feltárt preferenciák gondolkodása gyakrabban jelenik meg a közszféra termékanalitikájában, mint a szakemberek gondolják: egy ingyenes kormányzati digitális szolgáltatás használati adatai maguk is feltárt preferenciás bizonyítékok az értékről (a gyakoriság, a munkamenet hossza és — a leglátványosabban — az ismétlődő és az egyszeri használat mintázatai ugyanúgy elemezhetők, ahogy egy utazási költség modell kezeli a látogatási gyakoriságot a távolsággal szemben). Ahol egy szolgáltatásnak valódi helyettesítői vannak (papíralapú csatorna, telefonvonal), a „költség”, amelyet a polgárok a digitális csatorna helyettük történő használatáért vállalnak (idő, adat, eszköz), becsülhető és összevethető a használattal, közvetlenül visszhangozva az utazási költség logikáját. Lásd [digitális szolgáltatási szabvány](../digitális-szolgáltatási-szabvány/) és [nyílt adatok értéke](../nyílt-adatok-értéke/), amely pontosan ezzel az értékelési problémával néz szembe egy közvetlen piaci ár nélküli jószágnál.

## Buktatók

- **Kihagyott változó torzítás a hedonikus modellekben.** Egy korreláló attribútum kihagyása (az iskolaminőség, amely korrelál a lakásárral és a vizsgált környezeti változóval is) torzítja az implicit árbecslést; a specifikációt jelenteni és vizsgálni kell, nem csak az eredményt.
- **A helyettesítő helyek figyelmen kívül hagyása az utazási költség vizsgálatokban.** Egy hely feltárt értéke a látogató számára alulbecsült, ha létezik közelebbi helyettesítő, és nincs kontrollálva — a látogató elsősorban azért látogathatja, mert ingyenes, nem azért, mert egyedülállóan értékes.
- **Feltárt preferenciák alkalmazása olyan jószágra, amelynek nincs piaci visszhangja.** A létezési érték, az opciós érték és a hagyományozási érték egyetlen tranzakcióban sem jelenik meg, és hedonikus vagy utazási költség módszerekkel nem nyerhető vissza — ez a hiány a [kinyilvánított preferenciákon alapuló értékelésé](../kinyilvánított-preferenciákon-alapuló-értékelés/).
- **A tőkésített (egyszeri) érték összetévesztése éves árammal.** A hedonikus lakásár-hatások jellemzően egyszeri tőkésített értékek; éves haszonáramként kezelésük felfújja az értékelést.

## Források

- HM Treasury. „The Green Book,” 2. melléklet: a nem piaci hatások értékelése. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. A repülőtéri értékelésben használt repülőgépzaj-értékelési tanulmányok. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. „Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition.” Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. „Economics of Outdoor Recreation.” Johns Hopkins University Press, 1966 (az utazási költség módszer eredete).
