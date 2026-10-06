# Közérték-eredménylap

A közérték-eredménylap (public value scorecard) Robert Kaplan és David Norton 1992-es kiegyensúlyozott eredménylapját (balanced scorecard) adaptálja — amelyet a pénzügyi, ügyfél-, belső folyamati és tanulási-növekedési szempontok mentén nyereséget optimalizáló cégekre építettek — olyan szervezetekre, amelyek végeredménye küldetés, nem árrés. Arra kényszeríti a közszervezetet, hogy a teljesítményt egyszerre több, egymásra vissza nem vezethető dimenzióban jelentse, ahelyett hogy mindent egyetlen számba sűrítene, amely elrejti az egymással szembeni kompromisszumokat.

## Miért fontos

Kaplan és Norton eredeti érve a Harvard Business Review-ban az volt, hogy egyetlen pénzügyi mutató követő mutató, amely semmit nem mond arról, *miért* változik a teljesítmény a következő negyedévben. A magánszektorban a megoldás négy összekapcsolt szempont volt. A kormányzatban Mark Moore „stratégiai háromszöge” (a *Creating Public Value*-ból, 1995) adja az egyenértékű szerkezetet: egy szolgáltatásnak egyszerre kell **közértéket** (a küldetés-eredményt) szállítania, **legitimitást és támogatást** (politikai és közvélemény-támogatás) fenntartania, és **működésileg megvalósíthatónak** lennie (ténylegesen rendelkezésre álló erőforrásokkal és képességekkel kivitelezhetőnek). Paul Niven *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies* (2003) című műve a gyakorlati kézikönyv Kaplan és Norton négy dobozának e háromszögre fordításához — jellemzően a „pénzügyi” szempontot „az erőforrások gondos kezelésére” átcímkézve, a „küldetést” felülre téve a „részvényesi érték” helyett alulra, az ügyfél- és érintetti szempontokat pedig a nyereségnek alárendelt helyett egyenrangúként kezelve. Azért fontos ez egy szállító csapat számára, mert az a nyilvános digitális szolgáltatás, amelyet csak pénzügyi vagy hatékonysági mutató (mondjuk tranzakciónkénti költség) alapján ítélnek meg, rendszerszerűen alul-fektet azokba a legitimitási és eredmény-dimenziókba, amelyeket a pénzügyi mutató nem lát.

## A matematika

A közérték-eredménylap keretrendszer, nem képlet, de a szerkezete rögzített, és érdemes pontosan átvenni:

```
Szempont              Közszféra-kérdés                           Példa mutató
--------------------------------------------------------------------------------
Küldetés / eredmények  Elérjük-e a közértéket, amelyet            Népességi eredménymutató
                        létrehozni létezünk?                       (lásd outcomes-vs-outputs)
Erőforrások gondos     Hatékonyan és az engedélyezett             Költség eredményenként,
  kezelése              keretek között használjuk a közpénzt?      költségvetési eltérés
Ügyfél / felhasználó   Hozzáférhetnek-e a felhasználók és         Befejezési arány, elégedettség
                        polgárok a szolgáltatáshoz és              
                        részesülhetnek-e belőle?
Legitimitás / támogatás Továbbra is támogatnak-e a politikai       Bizalmi mutatók, auditi
                        megbízók, a felügyeleti szervek és         megállapítások, megalapozott
                        a nyilvánosság?                            panaszok
Belső folyamat /       Megvan-e a képességünk és folyamatunk       Munkatársi fluktuáció,
  tanulás               a folyamatos fejlődéshez?                  átfutási idő, hátralék kora

A védhető eredménylap szempontonként 3–5 mutatót jelent, úgy választva,
hogy egyik szempont se legyen kijátszható anélkül, hogy a kár egy másikban meg ne mutatkozna.
```

## Kidolgozott példa

**Helyi önkormányzat felnőtt szociális gondozási osztálya**: egy rehabilitációs szolgáltatás (rövid távú támogatás, amely a kórházi tartózkodás után segít az önállóság visszanyerésében) eredménylapja a következőt jelenti:

```
Küldetés:       a szolgáltatás igénybevevőinek 68%-ának nincs szüksége tartós gondozásra
                6 hét után (cél 65%)
Erőforrások:    költség befejezett rehabilitációs epizódonként = 1850 £ (költségvetési feltevés 2000 £)
Ügyfél:         felhasználói elégedettség 82%, átlagos várakozás a szolgáltatás kezdetéig 4,1 nap
Legitimitás:    3 megalapozott panasz 1000 epizódra; a felnőttvédelmi testület a szolgáltatást
                „jónak” minősíti
Folyamat:       munkatársi üresedési arány 14%, átlagos ügyteher 23 (biztonságos ügyteher-plafon: 25)
```

Elszigetelten olvasva a küldetés- és az erőforrás-számok egyszerű sikertörténetnek látszanak: költségvetés alatt és az eredménycél felett. A folyamat-sorral együtt olvasva a 14%-os üresedési arány a 25-ös ügyteher-plafonnal szemben azt mutatja, hogy a jó eredményt a nem biztonságos létszám közelében való működéssel vásárolják — olyan figyelmeztetés, amelyet a küldetés-szám egyedül soha nem hozna felszínre, és éppen az a hibamód, amelyre az egyszempontú KPI (lásd [közszféra-KPI-k](../közszféra-kpi-k/)) lehetőséget ad.

## Kapcsolat a szoftverfejlesztéssel

Egy belső vagy nyilvános irányítópultot építő csapat számára az eredménylap közvetlen érv az egyetlen „állapotpontszám” widget ellen: szempontonként építsenek egy panelt, és álljanak ellen a termékoldali nyomásnak, hogy ezeket közlekedési lámpává szintetizálják, mert a szintézis lépése éppen az, ahol a kompromisszum-információ megsemmisül. Tisztán leképezhető a terméket építő csapatok OKR-szerkezetére is: egy párosított erőforrás- vagy folyamat-OKR nélküli küldetés-OKR megismétli azt az egymutatós hibamódot, amely ellen Kaplan és Norton 1992-ben írt. A küldetés-doboz tényleges tartalmáról szóló alapelméletért lásd a [közértéket](../közérték/), a legitimitás-szempont valódi, forrással ellátott mutatókkal — nem olyan helyettesítővel, amelyet senki nem tud megvédeni — való feltöltéséről pedig a [bizalmi és legitimitási mutatókat](../bizalmi-és-legitimitási-mutatók/).

## Buktatók

- **Az eredménylap egyetlen pontszámmá sűrítése**: négy szempont egyetlen számmá átlagolása újra bevezeti éppen azt a problémát — a rossz legitimitási pontszámot elfedi a jó erőforrás-pontszám —, amelyet az eredménylap megakadályozni hivatott.
- **A magánszektorbeli „pénzügyi” szempont változatlan átvétele**: a közszervezet erőforrás-kezelési szempontja az engedélyezett, gyakran elkülönített költségvetéseken belül maradásról szól, nem a bevétel maximalizálásáról — Niven átcímkézése nem kozmetikai.
- **Olyan mutatók választása, amelyeket az eredménylapot birtokló csapat egyoldalúan mozgathat**: egy ugyanattól a csapattól származó legitimitási mutató, amelyet megítél (például önjelentett panaszkezelés), nem független bizonyíték.
- **Az eredménylap egyszeri megépítése, a súlyok és mutatók soha át nem tekintése**: Kaplan és Norton éves stratégiai felülvizsgálatot szántak; az évekre befagyasztott eredménylap eltávolodik a küldetéstől, amelynek követésére épült.

## Források

- Robert S. Kaplan és David P. Norton, „The Balanced Scorecard: Measures That Drive Performance,”
  *Harvard Business Review*, 1992. január–február.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
