# Költség eredményenként

A költség eredményenként a program teljes kiadása osztva azoknak az embereknek a számával, akik körülményeikben meghatározott, érdemi változást érnek el — nem azokéval, akik pusztán megkapták a szolgáltatást. Ez a legélesebb hatékonysági mutató, amelyet egy finanszírozó vagy szállító csapat használhat, mert egy olyan előzetes kérdést kényszerít ki, amelyet a legtöbb jótékonysági szervezet elkerül: pontosan mi számít sikernek?

## Miért fontos

Egy élelmiszerbank ugyanazon év könyvelésből két nagyon különböző számot jelenthet. Az egy kiosztott élelmiszercsomagra jutó költség lehet 15 £. Az egy olyan háztartásra jutó költség, amely élelmezésbiztonságot ér el — már nem szorul sürgősségi élelmiszersegélyre, egy utánkövetési ponton igazolva —, lehet 340 £. Mindkettő igaz. Csak az egyik mondja meg a finanszírozónak, hogy működik-e a pénz. A kettő közötti rés a kibocsátás és az eredmény közötti rés: a kiosztott csomag kibocsátás; az a háztartás, amely már nincs válságban, eredmény. Lásd [eredmények és kibocsátások](../eredmények-és-kibocsátások/).

A brit harmadik szektor két évtizede épít infrastruktúrát e megkülönböztetés kikényszerítésére. A New Philanthropy Capital „négy pillér megközelítése” a jótékonysági hatékonysághoz kifejezetten azt kéri a szervezetektől, hogy kibocsátásaik előtt nyilatkozzanak eredményeikről, az Inspiring Impact — az Egyesült Királyság finanszírozói támogatású hatásmérési együttműködése — pedig Outcomes Matrixot tesz közzé, amelynek kitöltését sok támogatási pályázat ma megköveteli a jótékonysági szervezetektől. A Trussell Trust éves „State of Hunger” kutatási programja, amelyet a Heriot-Watt Universityvel közösen vezet, éppen azért létezik, mert a csomagszámok önmagukban semmit nem mondanak arról, hogy az emberek kikerülnek-e az élelmiszer-bizonytalanságból.

A költség eredményenként csak akkor jelent bármit, ha a kontrafaktuális rögzített: egy „úgyis” elért eredmény nem olyan eredmény, amelyet a program megvásárolt. Lásd [kontrafaktuális elemzés](../kontrafaktuális-elemzés/) és [kiszorítás és tulajdonítás](../kiszorítás-és-tulajdonítás/).

## A matematika

```
Költség eredményenként = A program teljes költsége / A meghatározott eredményt elérő kedvezményezettek száma

ahol:
  A program teljes költsége = közvetlen szállítási költség + a rezsi méltányos része
  Meghatározott eredmény    = előre meghatározott, mérhető állapotváltozás
                              (pl. „élelmezésbiztonságban él a 6 hónapos utánkövetéskor”,
                              nem „kapott egy élelmiszercsomagot”)
```

Hasonlítsák az [egységköltség-adatbázisokhoz](../egységköltség-adatbázisok/) (pl. ágazatspecifikus egységköltség-viszonyítási értékek), hogy megítéljék, egy adott költség eredményenként jó, átlagos vagy gyenge-e az összehasonlítható beavatkozásokhoz képest.

## Kidolgozott példa

**Élelmiszerbank, egy év**:

- A program teljes költsége: 450 000 £
- Kiosztott csomagok: 30 000
- Költség csomagonként (kibocsátási mutató): 450 000 £ / 30 000 = **15 £**

A jótékonysági szervezet hat hónapos utánkövetési felmérést is végez háztartások mintáján, amely szerint a három vagy több csomagot kapó háztartások 35%-a jelenti, hogy már nem szorul sürgősségi élelmiszersegélyre, és egy szabványos élelmezésbiztonsági felmérési modulon az élelmezésbiztonsági küszöb felett pontoz. Az abban az évben három vagy több csomagot kapó 1800 háztartásból 630 éri el ezt az eredményt.

```
Költség eredményenként = 450 000 £ / 630 = 714 £ élelmezésbiztonságot elérő háztartásonként
```

Ezt a 714 £-os számot kell használnia annak a finanszírozónak, aki ezt a jótékonysági szervezetet egy készpénzátutalási kísérlettel vagy egy adósságtanácsadó szolgáltatással hasonlítja össze — nem a 15 £-ot. Ha egy összehasonlítható készpénzátutalási program ugyanabban a régióban háztartásonként 500 £-ért ér el élelmezésbiztonságot, az élelmiszerbank nem nyilvánvalóan a hatékonyabb út ugyanahhoz az eredményhez, még ha a csomagonkénti költsége olcsónak is látszik.

## Kapcsolat a szoftverfejlesztéssel

A legtöbb ügykezelő rendszert kibocsátások naplózására építik, mert a kibocsátások azok, amelyek a tranzakción belül történnek (egy csomagot átadnak, egy űrlapot beküldenek). Az eredmények általában később, gyakran a rendszer szokásos rögzítési ablakán kívül következnek be, és tudatos tervezési döntést igényelnek: építsenek utánkövetési mechanizmust (felmérés-indítót, újrakapcsolatfelvételi munkafolyamatot, adat-összekapcsolási gyakorlatot) elsőrangú funkcióként, nem utólag, egy éves jelentéshez hozzácsavarozva. Az ágazat számára támogatáskezelő vagy ügykezelő platformokat építő mérnököknek azt a kérdést, hogy „mi az eredményesemény, és hogyan figyeljük meg”, követelménykérdésként kell kezelniük, amelyet az adatmodell rögzítése előtt tesznek fel — sokkal nehezebb utólag eredménymezőt beépíteni, mint kibocsátás-számlálót. A követelménybeszélgetés felépítéséről lásd az [eredmények és kibocsátások](../eredmények-és-kibocsátások/) és a [logikai modell](../logikai-modell/) témát, a gyorsabb, nyersebb mutatóról pedig, amelyhez a csapatok nyúlnak, amikor az eredménykövetés még nincs kiépítve, a [költség kedvezményezettenként](../költség-kedvezményezettenként/) témát.

## Buktatók

- **Eredménynek öltöztetett kibocsátások jelentése.** Az „elért emberek” nem „megsegített emberek”. Ha a mutatót utánkövetési kapcsolatfelvétel nélkül egy rendszernapló is előállíthatja, szinte biztosan kibocsátás.
- **Nevező-kijátszás.** Az eredménypopuláció szűkítése „a programot befejezőkre” csendben kihagyja a lemorzsolódókat — gyakran a legnehezebb eseteket —, és felfújja a látszólagos arányt. A nevezőt mindenki legyen, aki elkezdte, ne mindenki, aki befejezte.
- **Nincs kontrafaktuális.** Mindenki beszámítása, aki elérte az eredményt, azokat is, akik úgyis elérték volna, túlbecsüli azt, amit a program megvásárolt. Lásd [kontrafaktuális elemzés](../kontrafaktuális-elemzés/).
- **Összehasonlítás összeegyeztethetetlen eredménydefiníciók között.** Az érvényesített felmérési modullal mért „élelmezésbiztonságban él” nem összehasonlítható az elégedettségi űrlapon önjelentett „élelmezésbiztonságban él” állapottal; a költség eredményenként ranglista csak akkor őszinte, ha az eredménydefiníciók egyeznek.

## Források

- New Philanthropy Capital (NPC), „Four Pillar Approach” a jótékonysági hatékonysághoz. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix és hatásmérési források. <https://inspiringimpact.org/>
- Trussell Trust és Heriot-Watt University, „State of Hunger” kutatási program. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, „Our criteria” (a költséghatékonyság mint vezető kritérium a jótékonysági szervezetek ajánlásánál). <https://www.givewell.org/how-we-work/our-criteria>
