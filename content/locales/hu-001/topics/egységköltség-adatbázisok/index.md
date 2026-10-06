# Egységköltség-adatbázisok

Az egységköltség-adatbázis előre kutatott, bizonyítékokon alapuló pénzügyi helyettesítők könyvtára társadalmi eredményekhez — a munkanélküliségből foglalkoztatásba lépés, a csökkent magányosság, a stabil bérleti jogviszony értéke —, amely lehetővé teszi a gyakorló szakember számára, hogy egy eredményt pénzre váltson anélkül, hogy minden alkalommal egyedi értékelési kutatást kellene megrendelnie. Azért léteznek, hogy egy támogatási pályázatot író kis jótékonysági szervezet ugyanolyan szigorral dolgozhasson, mint egy jól ellátott tanácsadó cég, újrahasznosítva egy olyan helyettesítőt, amelyet valaki más már levezetett és közzétett.

## Miért fontos

A HACT UK Social Value Bankja, amelyet Daniel Fujiwara közgazdásszal fejlesztettek ki jóléti értékelési módszerekkel, és a Global Value Exchange, a pénzügyi helyettesítők nyílt, közösségi adatbázisa, a két legszélesebb körben használt adatbázis a brit harmadik és közszférában. Mindkettő azért létezik, mert az alapul szolgáló értékelési munka — a [jóléti értékelés](../jóléti-értékelés/) és a [kinyilvánított preferenciákon alapuló értékelés](../kinyilvánított-preferenciákon-alapuló-értékelés/) — drága, módszertanilag igényes, és lassú minden projekthez nulláról lefuttatni. A megosztott, közzétett helyettesítő-könyvtár a többhónapos kutatási feladatot kikereséssé alakítja, éppen ezért fontos mind a [társadalmi megtérülés](../társadalmi-megtérülés/) számításaihoz, mind a [Social Value Act](../társadalmi-érték-törvény/) ajánlatértékeléseihez: nélkülük a szigorú pénzre váltás csak azoknak a szervezeteknek lenne megfizethető, amelyek elég nagyok ahhoz, hogy saját tanulmányokat rendeljenek.

## A matematika

Az egységköltség-adatbázis maga nem számol semmit; egy máshol végzett számításhoz szolgáltat egy bemenetet:

```
Pénzügyi helyettesítő értéke = piaci ár, VAGY árnyékár, VAGY jóléti értékelés,
                               VAGY kinyilvánított preferenciás érték
                               az eredményváltozás egy meghatározott egységére
                               (pl. „munkanélküliségből foglalkoztatásba lépő személyenként, évente”)

Alkalmazott érték = az elért eredmények száma × egységnyi helyettesítő érték
```

Lásd az [árnyékárazást](../árnyékárazás/), hogyan építenek helyettesítőt, ha nincs piaci ár, és a [társadalmi megtérülést](../társadalmi-megtérülés/), hogyan kerül az alkalmazott érték a holtteher- és tulajdonítási korrekciók után egy arányba.

## Kidolgozott példa

**Jótékonysági szervezet (barátkozási szolgáltatás SROI)**: egy egységköltség-adatbázis „csökkent magányosság” bejegyzése szemléltető helyettesítőként személyenként évi 1100 £-ot ad. 80 kedvezményezettre alkalmazva: 80 × 1100 £ = 88 000 £ bruttó érték. Ha ugyanebben az adatbázisban van „javult mentális jólét” helyettesítő is, amely egy átfedő jóléti felmérési tételre támaszkodik, mindkét helyettesítő halmozása ugyanarra a 80 emberre ugyanannak a mögöttes változásnak egy részét kétszer számolná — az adatbázis a számot adja, de az átfedés elkerülése az elemző felelőssége.

**Helyi önkormányzat (állásklub SROI)**: egy egységköltség-adatbázis „munkanélküliségből tartós foglalkoztatásba lépés” bejegyzését 45 résztvevőre alkalmazzák személyenként évi 8500 £ szemléltető helyettesítővel: 45 × 8500 £ = 382 500 £ bruttó érték, a [társadalmi megtérülésnél](../társadalmi-megtérülés/) bemutatott holtteher- és tulajdonítási korrekciók előtt.

## Kapcsolat a szoftverfejlesztéssel

A jótékonysági szervezeteknek vagy megrendelőknek jelentéskészítő eszközöket építő csapatok számára hasznos egy belső „eredménykatalógus” — olyan tábla, amely minden eredményt, amelyet egy termék vagy szolgáltatás hihetően állíthat, egy megnevezett helyettesítőhöz, annak forrásadatbázisához, közzétételi dátumához és verzióazonosítójához rendel —, hogy a szervezet különböző csapatai ne válasszanak mind kissé eltérő értékeket ugyanahhoz az eredményhez. A Global Value Exchange nyílt adatainak egy kikereső szolgáltatás mögé csomagolása, a forrás és a dátum mindig a szám mellett megjelenítve, ellenőrizhetően tartja a helyettesítőt, ahelyett hogy egy táblázatba temetett varázsszám lenne. A két fő felhasználási helyről lásd a [társadalmi megtérülést](../társadalmi-megtérülés/) és a [Social Value Actet](../társadalmi-érték-törvény/).

## Buktatók

- **A helyettesítők pontosnak tekintése.** A legtöbb közzétett helyettesítő jóléti értékelési tanulmányokból származó modellezett átlag, széles konfidenciaintervallummal; fontra pontos idézésük túlbecsüli az alapul szolgáló kutatás által támogatott pontosságot.
- **Átfedő helyettesítők kétszeres számítása.** Az átfedő felmérési konstruktumokból származtatott helyettesítők (pl. „csökkent magányosság” és „javult mentális jólét”) kombinálása ugyanazt a mögöttes változást kétszer értékeli.
- **Kontextusból kiragadott helyettesítő korrekció nélküli használata.** Egy adott nemzeti népességre és évre kalibrált helyettesítő, inflációs vagy kontextus-korrekció nélkül máshol alkalmazva csendben félreállítja az értéket.
- **A származás ellenőrzésének elmulasztása.** A Global Value Exchange nyílt és közösségi, így a bejegyzések minősége a közreműködőtől függ; egy támogatási pályázatban vagy beszerzési beadványban számot idézve ellenőrizzék az alapul szolgáló forrást.

## Források

- HACT, „UK Social Value Bank.” <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., „The Social Impact of Housing Providers” (HACT, 2013) — az UK Social Value Bank módszertani alapja.
- Social Value UK, „A Guide to Social Return on Investment,” a pénzügyi helyettesítőkről szóló szakasz.
