# A GDP alternatívái

A GDP alternatívái olyan mutatók, amelyeket annak megragadására építettek, amit a bruttó hazai termék (GDP) szerkezetileg figyelmen kívül hagy: a fizetetlen gondozói munkát, a környezeti kimerülést, a jövedelemeloszlást, és azt, hogy a növekedés ténylegesen javítja-e az életeket. A legismertebbek a Genuine Progress Indicator (GPI) és Bhután Gross National Happiness (GNH) indexe; a komolyan vételük melletti érvet a legbefolyásosabban a 2009-es Stiglitz–Sen–Fitoussi-bizottság fogalmazta meg. A kormányzati irányítópultokat vagy KPI-rendszereket építő mérnökök számára az, hogy „melyik szám számít haladásnak”, tervezési döntés, amelynek valódi következményei vannak arra nézve, mit finanszíroznak.

## Miért fontos

Simon Kuznets, aki az 1930-as években megépítette az amerikai nemzeti számlákat, 1934-ben azt figyelmeztette a Kongresszust, hogy „egy nemzet jólétére aligha lehet következtetni a nemzeti jövedelem mérésből” — olyan fenntartás ez, amelyet a szám szinte azonnal kinőtt. A GDP egy olajszennyezés takarítását növekedésként számolja, egy szülő fizetetlen gyermekgondozását pedig semmiként; nem különbözteti meg a tartós jólétet építő kiadást attól, amely csupán a már bekövetkezett kárt ellensúlyozza. A Stiglitz–Sen–Fitoussi-bizottság, amelyet Nicolas Sarkozy francia elnök hívott össze, és amelyet Joseph Stiglitz, Amartya Sen és Jean-Paul Fitoussi vezetett, 2009-ben azt jelentette, hogy a statisztikai rendszereknek a hangsúlyt „a gazdasági termelés méréséről az emberek jólétének mérésére” kell áthelyezniük, és hogy a fenntarthatóságot a jelenlegi jólléttől külön kell követni, nem egyetlen számba olvasztva. A GDP-alternatívák ezt az ajánlást operacionalizálják. A GPI, amelyet a Redefining Progress agytröszt fejlesztett ki az 1990-es években, William Nordhaus és James Tobin 1972-es Measure of Economic Welfare-jére építve, a személyes fogyasztásból indul ki (ahogy a GDP), majd hozzáadja a GDP által kihagyott nem piaci hasznokat (háztartási munka, önkéntes munka), miközben levonja a GDP által tévesen pozitívként számolt védekező és kimerülési költségeket (bűnözés, szennyezés, ingázás, erőforrás-kimerülés). Bhután GNH-indexe, amelyet a GNH Centre Bhutan (<https://www.gnhcentre.bt/>) kezel, még tovább megy, a növekedést váltva fel az ország kimondott alkotmányos céljaként: 33 mutatót összesít 9 területen — lelki jólét, egészség, oktatás, időfelhasználás, kulturális sokszínűség, kormányzás, közösségi élénkség, ökológiai sokszínűség és életszínvonal — egyetlen, elégségességen alapuló pontszámmá, amelyet közvetlenül a kormányzati szakpolitikai javaslatok szűrésére használnak.

## A matematika

```
GPI = személyes fogyasztási kiadás
      + nem piaci hasznok (háztartási munka, önkéntes munka, felsőoktatás)
      − védekező és társadalmi költségek (bűnözés, szennyezés, ingázás, családi felbomlás)
      − a természeti és társadalmi tőke kimerülése (erőforrás-kimerülés, termőföld-vesztés)

GNH elégségességi pontszám, területenként:
  egy személy egy területen „elégséges”, ha minden mutatóján átlépi annak küszöbét
  Boldogsági index = (a népesség %-a, amely ≥ 6 a 9 területből elégséges)
                     + (a „még nem boldog” kisebbség súlyozott átlagos hiánya)
```

## Kidolgozott példa

**Régió, GPI**: a személyes fogyasztás 50 milliárd dollár. Adják hozzá a háztartási és önkéntes munka becsült 12 milliárd dolláros értékét (pótlási költség bérrátákkal — lásd [önkéntes munkaidő értéke](../önkéntes-munkaidő-értéke/)). Vonják le az ingázási torlódás (3 milliárd dollár), a bűnözés (4 milliárd dollár) és a hosszú távú erőforrás-kimerülés (6 milliárd dollár) becsült éves költségeit:

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 (milliárd dollár)
```

Ha a GDP abban az évben 50 milliárdról 55 milliárd dollárra nőtt (+10%), de a védekező és kimerülési költségek gyorsabban nőttek, mint a fogyasztás, a GPI csökkenhet, még ha a GDP emelkedik is — ez a „küszöbhipotézis”, amelyre a GPI-kutatók a magas jövedelmű gazdaságoknál nagyjából az 1970-es évek óta hivatkoznak, amikor a növekedés tovább emelkedett, míg a GPI stagnált.

**Állampolgár, GNH**: egy válaszadó a 9 területből 7-ben átlépi az elégségességi küszöböt (egészség, oktatás, életszínvonal, közösségi élénkség, kulturális sokszínűség, ökológiai sokszínűség, időfelhasználás), de elmarad a lelki jólétben és a kormányzásban. Mivel 7 ≥ 6, a fejszámlálásban „boldognak” számítják; az index külön követi a két hiány mélységét, hogy a szűk megfelelés ne legyen megkülönböztethetetlen a kényelmestől.

## Kapcsolat a szoftverfejlesztéssel

- Az a KPI-irányítópult, amely csak az áteresztőképességre vagy a kiadásra épül (a GDP-minta), rendszerszerűen elmulasztja az áteresztőképesség előállításakor okozott kárt — az „elkötelezettségként”, nem „felhasználói szorongásként” kezelt ügyfélszolgálati jegyvolumen az olajszennyezés növekedésként számolásának szoftverszállítási megfelelője.
- A GPI-stílusú számvitel hasznos auditminta bármely [közszféra-KPI](../közszféra-kpi-k/)-készlethez: minden főcím-kibocsátási mutatónál kérdezzék meg, milyen védekező költséget visel csendben (újramunkálás, incidenskezelés, kiégés), és nettósítsák le, ahogy a GPI a védekező kiadást nettósítja a fogyasztásból.
- A GNH területi elégségességi módszere — területenként megfelelt/nem felelt meg, majd összesítés — szerkezetileg azonos a [többszempontú döntéselemzés](../többszempontú-döntéselemzés/) technikájával, és érdemes újrahasználni mindenhol, ahol egyetlen skaláris pontszám elrejtene egy kritikus hiányos dimenziót.

## Buktatók

- **A GPI kezelése pontos nemzeti számlaként** — a GDP-vel ellentétben a GPI-nek nincs egyetlen szabványosított módszertana; a különböző tanulmányok eltérően súlyozzák az ingázási költségeket, az önkéntes időt vagy az erőforrás-kimerülést, így a tanulmányok közötti GPI-összehasonlítások jóval kevésbé megbízhatók, mint az országok közötti GDP-összehasonlítások.
- **A GNH teljes átvétele más szakpolitikai kultúrába** — a terület-súlyait és elégségességi küszöbeit bhutáni konzultáció során állították fel; a szám másolása a mögöttes konzultációs folyamat nélkül üres mutatót ad, amelyben senki nem bízik.
- **Annak feltételezése, hogy egy GDP-alternatíva helyettesíti a költség-haszon értékelést** — ezek diagnosztikai, gazdaság-szintű mutatók, nem egyetlen program döntési eszközei; arra a [társadalmi költség-haszon elemzést](../társadalmi-költség-haszon-elemzés/) használják.

## Források

- Stiglitz JE, Sen A, Fitoussi J-P. „Report by the Commission on the Measurement of Economic
  Performance and Social Progress.” (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. „The Genuine Progress Indicator: A Tool for Sustainable Development.”
- Nordhaus WD, Tobin J. „Is Growth Obsolete?” (1972), NBER.
