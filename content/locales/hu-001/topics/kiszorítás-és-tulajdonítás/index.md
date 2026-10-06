# Kiszorítás és tulajdonítás

Kiszorításról (displacement) akkor van szó, amikor egy program látszólagos haszna úgy keletkezik, hogy tevékenységet vagy hasznot vesz el máshonnan, ahelyett hogy újat hozna létre — a te nyereséged valaki más vesztesége. A tulajdonítás (attribution) a kapcsolódó kérdés arról, hogy egy megfigyelt eredményből mennyit követelhet joggal a beavatkozásod, amikor más szereplők és tényezők is hozzájárultak. Mindkettő standard korrekció a brit közszféra értékelési útmutatóiban a holtteher és a szivárgás mellett, és a hatásállítások rutinszerűen kihagyják őket, jóval erősebbnek látszva, mint amilyenek.

## Miért fontos

Egy önkormányzat üzleti támogatási programja, amely 50 üzletnek segít átköltözni egy megújítási zónába, jelentheti, hogy „50 támogatott vállalkozás, 200 létrehozott munkahely” — de ha ezek a vállalkozások egyszerűen egy szomszédos főutcáról költöztek át ahelyett, hogy bővültek volna, a munkahelyeket kiszorították, nem létrehozták, és a kerületi (vagy regionális) nettó hatás nullához közeli lehet. A HM Treasury Magenta Bookja és a régóta használt Additionality Guide a kiszorítást kötelező levonásként kezeli, éppen mert a helyi sikertörténetek gyakoriak akkor is, ha nem hoznak nettó nemzeti vagy regionális hasznot — az érték egyszerűen elmozdult, gyakran a területnek vagy szereplőknek a kárára, akik elvesztették. A strukturális alapok értékelési útmutatója (a korábbi EU Regionális Fejlesztési Alap programjaihoz és hazai utódaikhoz, például a UK Shared Prosperity Fundhoz használják) ezt három térbeli léptékben formalizálja: helyi kiszorítás (egy városon belül), regionális kiszorítás (egy régión belül) és országos kiszorítás (az Egyesült Királyságban), mert egy beavatkozás lehet többlethatás egy léptéken és tiszta kiszorítás egy szélesebben — egy foglalkoztatási program, amely egy szomszéd városból vonz munkaerőt, országosan semleges, még ha helyi sikernek is látszik.

A tulajdonítás a testvérprobléma a partnerségekre erősen támaszkodó szolgáltatásnyújtásban, ami ma a norma a társadalmi szektor és a tárcaközi közszolgáltatások munkájában. Amikor három szervezet közösen nyújt hajléktalanság-megelőzési szolgáltatást, minden szervezet éves jelentése függetlenül állíthatja magának ugyanazt a közterületen alvók számában bekövetkezett csökkenést — a jelentéseken összeadva az állított hatás meghaladhatja a megfigyelt valós változást, néha többszörösen. A Magenta Book hozzájárulás-elemzésről szóló útmutatója éppen azért létezik, mert a véletlenszerű tulajdonítás egyetlen szereplőnek gyakran lehetetlen a tárcaközi szolgáltatásnyújtásban, és a becsületes válasz gyakran az, hogy „hozzájárultunk ehhez az eredményhez”, nem az, hogy „mi okoztuk ezt az eredményt”.

## A matematika

A kiszorítás a standard nettóhatás-sorozat részeként (a teljes láncért lásd [többlethatás és holtteher](../többlethatás-és-holtteher/)):

```
Nettó többlethatás = Bruttó eredmény − Holtteher − Kiszorítás − Szivárgás, × Szorzó

Kiszorítási ráta = máshonnan eltérített haszon/tevékenység
                   / az összes megfigyelt bruttó haszon/tevékenység
```

A tulajdonítást, ahol több szereplő járul hozzá egy eredményhez, jellemzően hozzájárulási részesedésként fejezik ki, nem pontos százalékként, mert általában nem mérhető a kiszorításéval azonos szigorral:

```
Tulajdonítható részesedés ≈ f(az ok-okozati hozzájárulás ereje, a többi szereplő
                              hozzájárulása, külső/környezeti tényezők)

Az állított hatás soha nem haladhatja meg:
  Σ (az egyes partnerek tulajdonítható részesedése) ≤ a teljes megfigyelt eredmény 100%-a
```

## Kidolgozott példa

**Megújítási támogatás**: egy tanács főutca-támogatási programja 200 új kiskereskedelmi munkahelyet jelent a finanszírozott zónában. Utólagos felmérés kimutatja, hogy ezek közül 60 egy szomszédos, nem finanszírozott főutcáról ugyanazon kerületen belül átköltöző vállalkozásoktól származik, további 30 pedig olyan országos láncoktól, amelyek a támogatástól függetlenül nyitottak volna fiókot a régióban.

```
Állított bruttó munkahelyek = 200
Helyi kiszorítás = 60 (a kerületen belül költözött)
Regionális kiszorítás = 30 (a régióban úgyis megnyílt volna)

Nettó többlet-munkahelyek (kerületi szint) = 200 − 60 = 140
Nettó többlet-munkahelyek (regionális szint) = 200 − 60 − 30 = 110
```

A becsületes főszám azon a földrajzi léptéken múlik, amely a finanszírozót érdekli — egy országos vagy regionális szinten értékelt Treasury-üzleti esetnek 110-et kell használnia, nem a kerületi 140-et, és főleg nem a nyers 200-at.

**Tárcaközi hajléktalan-szolgáltatás**: három partnerszervezet (egy tanács, egy lakhatási jótékonysági szervezet és egy egészségügyi tröszt) közösen nyújt közterületen alvókat csökkentő szolgáltatást. A területen a közterületen alvók száma az év során 30-cal csökkent. Mindegyik szervezet éves jelentése azt állítja: „30-cal csökkentettük a közterületen alvók számát” — összeadva a három jelentés 90 megsegített embert állít, a tényleges csökkenés háromszorosát. Egy hozzájárulás-elemzés, amely minden partnernek részesedést rendel (mondjuk 40% tanács, 35% jótékonysági szervezet, 25% egészségügyi tröszt, a dokumentált szerep és független értékelés alapján), 12-t, 10,5-öt és 7,5-öt jelentene, helyesen összeadódva a megfigyelt 30-ra.

## Kapcsolat a szoftverfejlesztéssel

A kiszorítás és a tulajdonítás formálja, hogyan kell tervezni a hatáskövető és eredményjelentő rendszereket többhelyszínes vagy többpartneres szolgáltatásnyújtáshoz:

- A földrajzi és szervezeti hatókör legyen kifejezett, elsőrangú mező minden hatás-irányítópulton — a „a kerületre” és a „a régióra” jelentett ugyanaz a szám különböző számok, és az őket összemosó rendszer olyan számokat termel, amelyeket portfólió szinten nem lehet egyeztetni.
- Ahol több partner közösen szolgáltat, az eredményrendszer rögzítse a hozzájárulási részesedéseket (vagy legalább jelölje a közös tulajdonítást), ahelyett hogy minden partner jelentő moduljának hagyná függetlenül egy közös eredmény 100%-át állítani — különben a portfólió-szintű összesítések túlbecsülik az összhatást, néha súlyosan.
- Ez kapcsolódik a [társadalmi megtérüléshez](../társadalmi-megtérülés/) és a [támogatási eredmények jelentéséhez](../támogatási-eredmények-jelentése/): az a SROI- vagy IRIS+-számítás, amely figyelmen kívül hagyja a kiszorítást vagy túltulajdonítja a közös eredményeket, felfújt arányt termel, amely nem állja ki az ellenőrzést vagy a replikációt.

## Buktatók

- **Helyi siker jelentése a tágabb kiszorítás ellenőrzése nélkül.** Egy program a legkisebb jelentési léptéken nagyon sikeresnek látszhat, miközben szélesebben semleges vagy akár negatív; mindig mondják meg, melyik földrajzi léptékre vonatkozik a nettó szám.
- **Közös szolgáltatásnyújtásban minden partnernek teljes érdem engedése.** Ha a hozzájárulási részesedéseket nem egyeztetik és dokumentálják, a partnerek közötti összesítő jelentés túlbecsüli az összhatást — ellenőrizzék, hogy a partnerszintű állítások összege nem több a megfigyelt összegnél.
- **A tulajdonítás pontos százalékként kezelése, ha valójában ítélet.** A hozzájárulás-elemzés, a véletlenszerű kontrafaktuállal ellentétben, védhető becslést ad, nem mért tényt; megfelelő bizonytalansággal mutassák be, ne hamis pontossággal.
- **A kiszorítás figyelmen kívül hagyása piaci hatású beavatkozásoknál.** A vállalkozástámogatás, foglalkoztatási programok és helyszínalapú megújítás a klasszikus magas kiszorítású kategóriák; a kiszorítás-ellenőrzést ezeknél kötelezőnek, nem opcionálisnak tekintsék.

## Források

- HM Treasury, „The Magenta Book: Central Government Guidance on Evaluation” (2020), a hozzájárulás-elemzésről szóló útmutatóval. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, „Additionality Guide: A Standard Approach to Assessing the Additional Impact of Interventions” (3. kiadás).
- Európai Bizottság, „Evalsed: The Resource for the Evaluation of Socio-Economic Development” — útmutató a helyi, regionális és országos kiszorítási léptékekről.
- Mayne J. „Contribution Analysis: An Approach to Exploring Cause and Effect.” ILAC Brief No. 16, 2008.
