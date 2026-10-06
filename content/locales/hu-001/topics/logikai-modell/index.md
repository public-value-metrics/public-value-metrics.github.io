# Logikai modell

A logikai modell (logic model) lineáris diagram, amely egy program ráfordításait, tevékenységeit, kibocsátásait, eredményeit és hatását köti össze, balról jobbra olvasva elszámoltathatósági láncként: az erőforrások bemennek, a tevékenységek megtörténnek, a kibocsátások előállnak, az eredmények megváltoznak a kedvezményezetteknél, és a hatás szélesebb vagy hosszabb időskálán jelentkezik. Ez az a szabványos szerkezet, amelynek megfelelően a finanszírozók és az auditorok elvárják egy program jelenthetőségét, és a visszafelé térképezett [változáselmélet](../változáselmélet/) előre néző társa.

## Miért fontos

A HM Treasury Magenta Bookja a logikai modellt a programértékelési terv kötelező elemeként írja elő, és az olyan finanszírozók, mint a National Lottery Community Fund, pályázati és jelentési sablonjaikat pontosan erre az ötoszlopos láncra építik. Értéke az, hogy egyetlen diagramban rákényszeríti a programot annak kimondására, mit költ, mit tesz vele, mit állít elő és — kritikus módon — minek kellene megváltoznia ennek következtében, olyan konkrétsággal, amelyet egy bekezdésnyi próza hajlamos elfedni. Az a logikai modell, amelynek ráfordítás- és tevékenységoszlopa kitöltött, de eredményoszlopa üres vagy homályos, első pillantásra diagnosztizálható, éppen ezért kérik a finanszírozók.

## A matematika

A logikai modell szerkezeti lánc, nem képlet:

```
Ráfordítások     Tevékenységek     Kibocsátások         Eredmények            Hatás
(lekötött        (amit velük       (közvetlen,          (változás a           (hosszú távú,
 erőforrások)     tesznek)          megszámlálható       kedvezménye-          népességi vagy
                                    termékek)            zetteknél)            rendszerszintű
                                                                               változás)
```

Minden oszlopnak konkrétabbnak kell lennie az előzőnél: a ráfordítások azt jelentik, amit elköltenek, a tevékenységek azt, amit tesznek, a kibocsátások azt, ami a hatástól függetlenül leszállításra kerül, az eredmények azt, ami ennek következtében megváltozik — ezt a megkülönböztetést teljes egészében az [eredmények és kibocsátások](../eredmények-és-kibocsátások/) tárgyalja —, a hatás pedig a tartós, gyakran csak részben tulajdonítható, hosszú távú változás.

## Kidolgozott példa

**Helyi önkormányzat (digitális adósságtanácsadó szolgáltatás)**:

- Ráfordítások: 180 000 £ éves költségvetés, 4,0 teljes munkaidős tanácsadó, egy ügykezelő rendszer.
- Tevékenységek: tájékoztató alkalmak, egyéni adósságtanácsadási időpontok.
- Kibocsátások: 900 lebonyolított időpont; 750 kiadott adósság- és ellátási terv.
- Eredmények: a 6 hónapos utánkövetésig eljutó ügyfelek 60%-a (750-ből 450) csökkent hátralékról számol be, ügyfelenként átlagosan 1200 £ csökkenéssel — összesen 540 000 £ hátralékcsökkenés.
- Hatás: a szolgáltatás ügyfélkörében a hajléktalansági kérelmek mérhető csökkenése két év alatt, amely más beavatkozások mellett csak részben tulajdonítható ennek a szolgáltatásnak (lásd [kontrafaktuális elemzés](../kontrafaktuális-elemzés/)).

**Jótékonysági szervezet (élelmiszerbank-beutaló partnerség)**:

- Ráfordítások: 45 000 £, 1,5 teljes munkaidős koordinátor, partnerségi megállapodások 12 beutaló szervezettel.
- Tevékenységek: beutalók szűrése, csomagok összeállítása és kiosztása.
- Kibocsátások: 5000 élelmiszercsomag kiosztva 1100 háztartásnak.
- Eredmények: a megkérdezett háztartások 68%-a (1100-ból 748) javuló élelmezésbiztonságról számol be egy 4 hetes utánkövető hívásnál.
- Hatás: hozzájárulás a helyi válságszolgáltatások iránti csökkent keresethez, amelyet csak összesített területi statisztikák igazolnak, és nem tulajdonítható egyedül ennek a jótékonysági szervezetnek.

## Kapcsolat a szoftverfejlesztéssel

A logikai modell szinte szó szerinti adatmodell egy eredményrendszer számára: a ráfordítások és tevékenységek már meglévő működési adatok (kiadások, létszám, alkalmi naplók); a kibocsátások könnyen műszerezhetők, mert a szállítás pontján megszámolhatók; az eredményekhez szándékosan megtervezett utánkövetési adatgyűjtés kell (felmérések, adminisztratív adatok összekapcsolása), amely nem létezik, ha valaki nem építi meg; a hatáshoz általában egy program rendszerein túlmutató, összekapcsolt, longitudinális vagy népességi szintű adatok kellenek. A jelentéskészítő eszközöket építő mérnököknek ösztönözniük kell a megrendelőket, hogy tervezéskor határozzák meg az eredmény- és hatásmutatókat, ahelyett hogy alapértelmezetten kibocsátás-alapú irányítópultot építenének, mert a tranzakciós adatok ezt támogatják. Az eredmény- és hatásoszlopot kifejezetten értékelő módszerről lásd a [társadalmi megtérülést](../társadalmi-megtérülés/), a hatásoszlop tényleges teljesülésének nyomon követéséről pedig a [haszonmegvalósítást](../haszonmegvalósítás/).

## Buktatók

- **Megállás a kibocsátásoknál.** Az az irányítópult, amely a lebonyolított időpontokat vagy kiosztott csomagokat jelenti, és ebből hasznot sugall, tevékenységet jelent, nem eredményt — lásd [eredmények és kibocsátások](../eredmények-és-kibocsátások/).
- **Nincs kimondott ok-okozati kapcsolat az oszlopok között.** A logikai modell kimondja a láncot, de azt nem, hogy a tevékenységeknek miért kellene kibocsátásokat, azoknak pedig eredményeket produkálniuk; ez az indoklás a [változáselméletbe](../változáselmélet/) tartozik, és az a logikai modell, amely mögött nincs ilyen, tesztelés nélküli.
- **Egyszeri pályázati dokumentumként kezelés.** Az a logikai modell, amelyet csak egy támogatási kérelem teljesítésére készítenek, és soha nem frissítenek, megszűnik tükrözni, mit csinál valójában a program.
- **Tulajdonítási csúszás a hatásoszlopnál.** Ha a népességi szintű változást kontrafaktuális nélkül egyetlen program egyedüli okozatának állítják, az túlbecsüli azt, amit a bizonyítékok alátámasztanak.

## Források

- HM Treasury, Magenta Book (2020), 3. fejezet. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, a logikai modellről szóló útmutató. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, „Logic Model Development Guide” (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
