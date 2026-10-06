# Közszféra-KPI-k

A kulcsteljesítmény-mutató (KPI) egy kiválasztott, nyomon követett mérőszám, amely azt képviseli, hogy egy közszolgáltatás jól végzi-e a dolgát. A kormányzatban a KPI megválasztása sosem semleges: mivel a KPI-k költségvetésekhez, ranglistákhoz és karrierekhez kötődnek, egy mutató kiválasztása mindenki viselkedését alakítja, aki a hatókörébe esik, gyakran jobban, mint a szolgáltatást létrehozó szakpolitika.

## Miért fontos

Charles Goodhart 1975-ös megfigyelése a monetáris politikáról — amelyet később Marilyn Strathern népszerűsített úgy, hogy „amikor egy mérőszámból cél lesz, megszűnik jó mérőszámnak lenni” — a közszféra teljesítménymenedzsmentjének legfontosabb figyelmeztető címkéje. Az a KPI, amelyet egy rendszer *leírására* választottak, abban a pillanatban kezdi *torzítani* a rendszert, amikor erőforrás-elosztást, fizetést vagy politikai túlélést kötnek hozzá. A kanonikus példa az NHS mentők kiérkezési ideje: amikor a nyolc perces A kategóriájú kiérkezési cél kötelezővé vált, kiderült, hogy egyes trösztök a mentőket a kiérkezési idő mérőórájának hatókörén kívül „halmozták fel”, vagy átminősítették a hívásokat, hogy elérjék a számot anélkül, hogy a betegek eredményei változtak volna. Az UK National Audit Office teljesítménymutatók kiválasztásáról és használatáról szóló útmutatója — amelyet az érték a pénzért jelentései, valamint a „Performance Measurement by Regulators” és a „Choosing the Right FABRIC” keretrendszer (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) fektet le — éppen azért létezik, mert a tárcák továbbra is olyan mutatókat választottak, amelyeket könnyű jelenteni, nem olyanokat, amelyeket nehéz kijátszani. Az a szoftvermérnök, aki leszállítja azt az irányítópultot, amely alapján egy minisztert vagy igazgatót megítélnek, akarva-akaratlanul egy közintézmény ösztönzőrendszerét tervezi.

## A matematika

A KPI-tervezés keretrendszer-jellegű téma, de egy jelölt KPI *értékelése* ismételhető ellenőrzőlista, nem képlet:

```
Minden jelölt KPI-t pontozzanak az alábbiak szerint:
  Célnak megfelelő   — az eredményt méri, vagy egy több lépésre lévő helyettesítőt?
  Megfelelő          — azokhoz tartozik, akik ténylegesen befolyásolhatják?
  Kiegyensúlyozott   — párosítva van egy ellenmutatóval, amely elkapja a kijátszást?
  Robusztus          — kibírja az auditot, vagy önjelentett és ellenőrizhetetlen?
  Integrált          — illeszkedik a tágabb készletbe, vagy egy másik KPI-nek feszül?
  Költséghatékony    — a gyűjtése többe kerül, mint a döntés, amelyet tájékoztat?

Előrejelző és követő mutatók szétválasztása:
  Előrejelző mutató → megjósolja a jövőbeli eredményt, de gyakran kijátszható (pl. 60 mp-en belül
                       fogadott hívások)
  Követő mutató     → megerősíti, hogy az eredmény bekövetkezett, de túl későn érkezik az irányításhoz
                       (pl. éves elégedettségi felmérés)
  A védhető KPI-készlet célonként legalább egyet-egyet párosít.
```

## Kidolgozott példa

**Mentőtröszt**: egy tröszt az A kategóriás (életveszélyes) kiérkezési idő KPI-t „a hívások 75%-ára 8 percen belül kiérkeztek” formában jelenti. Egy negyedévben 6000 A kategóriás hívás érkezik; 4500-at teljesítenek 8 percen belül, ami 75,0% — látszólag a célon.

```
Főcím-KPI = 4500 / 6000 × 100 = 75,0%  (teljesíti a 75%-os küszöböt)
```

De a Goodhart-audit hozzáad egy ellenmutatót: a leglassabban kezelt 10% hívás átlagos kiérkezési ideje.

```
A leglassabb decilis átlagos kiérkezési ideje = 34 perc (két évvel korábbi 19 percről)
```

A tröszt eléri a célt, miközben a farok — azok a hívások, amelyek a legnagyobb valószínűséggel valóban életveszélyesek, ha a triázs tökéletlen — jóval rosszabbra fordult, mert a személyzetet a 8 perces szakadék közelében lévő hívások felé terelik a klinikai sürgősség helyett. Az egyetlen KPI hamis történetet mesélt; a párosított KPI az igazat.

## Kapcsolat a szoftverfejlesztéssel

A kormányzati teljesítmény-irányítópultokat építő mérnökök funkcionálisan a szervezet ösztönző API-ját tervezik. Gyakorlati következmények: a *nevezőt* ugyanolyan szigorúan műszerezzék, mint a számlálót (a puszta százalékként jelentett KPI a nevező kijátszására ad lehetőséget — ugyanerről a csapdáról digitális szolgáltatásoknál lásd [tranzakciónkénti költség](../tranzakciónkénti-költség/)); az ellenmutatókat ugyanabba az irányítópultba építsék, ne külön jelentésbe, amelyet senki sem olvas, hogy a kijátszás a döntés pontján látszódjon; és verziózzák a KPI-definíciót, mert egy csendes újradefiniálás (annak megváltoztatása, mi számít „hívásnak”, „ügynek” vagy „befejezésnek”) funkcionálisan egyenértékű a cél bejelentés nélküli megváltoztatásával. A [közérték-eredménylap](../közérték-eredménylap/) egy strukturált mód annak megakadályozására, hogy egyetlen KPI-t elszigetelten olvassanak, az [eredményalapú elszámoltathatóság](../eredményalapú-elszámoltathatóság/) pedig annak fegyelme, hogy olyan népességi szintű KPI-ket válasszanak, amelyeket egyetlen csapat nem tud egyoldalúan torzítani.

## Buktatók

- **A könnyen gyűjthető mutató választása a jelentéssel bíró helyett**: a hívásfogadási idő triviálisan naplózható; hogy a hívás megoldotta-e az állampolgár problémáját, nem — de csak az utóbbi az eredmény. Álljanak ellen annak, hogy alapértelmezetten azt használják, amit a rendszer már kibocsát.
- **Nincs ellenmutató**: bármely pénzhez vagy hírnévhez kötött KPI-t a határon kijátszanak; közzététel előtt szállítsák egy párosított mutatóval, amely elkapja a valószínű kijátszási vektort.
- **A mutató újradefiniálása változásnapló nélkül**: a „beérkezett hívások” „megválaszolt hívásokra” cserélése egy trend szépítésére abban a pillanatban lerombolja az idősor hitelességét, ahogy felfedezik — mindig tegyenek közzé definíciós változásnaplót a számok mellett.
- **A tevékenység összetévesztése az eredménnyel**: a befejezett ellenőrzések számlálása kibocsátás; a megfelelővé tett telephelyek számlálása közelebb áll az eredményhez (lásd [eredmények és kibocsátások](../eredmények-és-kibocsátások/)).

## Források

- National Audit Office, „Choosing the Right FABRIC: A Framework for Performance Information.”
  <https://www.nao.org.uk/>
- Marilyn Strathern, „‚Improving Ratings’: Audit in the British University System,” *Social
  Anthropology*, 1997 (a Goodhart-törvény gyakran idézett megfogalmazása).
- National Audit Office, az NHS mentőszolgálati teljesítményjelentések vizsgálatai.
  <https://www.nao.org.uk/>
