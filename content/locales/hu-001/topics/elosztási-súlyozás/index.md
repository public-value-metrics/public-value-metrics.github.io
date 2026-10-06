# Elosztási súlyozás

Az elosztási súlyozás egy költség vagy haszon pénzbeli értékét aszerint igazítja, hogy ki kapja, azon az elven, hogy egy további font többet ér egy szegény háztartásnak, mint egy gazdagnak. A HM Treasury Green Bookja kifejezett módszert ad ennek a súlyozásnak az alkalmazására, a jövedelem csökkenő határhasznára építve, hogy az értékelések ne kezeljék csendben egyenértékűnek azt a fontot, amelyet a leggazdagabb decilis kap, azzal, amelyet a legszegényebb.

## Miért fontos

A standard költség-haszon elemzés fontokat ad össze anélkül, hogy megkérdezné, kiké ezek a fontok, ami hallgatólagosan azt feltételezi, hogy egy font mindenkinek ugyanannyit ér — ezt a feltevést a közgazdászok régóta hamisnak tudják. Az évi 15 000 £-ot kereső háztartás egy 1000 £-os nyereséget egészen másképp él meg, mint az évi 150 000 £-ot kereső, mert a jövedelem határhasznossága a jövedelem növekedésével csökken. Súlyozás nélkül a standard értékelés rendszerszerűen azokat a beavatkozásokat részesíti előnyben, amelyek a gazdagabb, már eleve jobb helyzetű csoportoknak kedveznek, mert nagyobb vásárlóerejük felfújja az őket elérő hasznok pénzbeli értékelését (egy parkfelújítás drága lakások közelében nagyobb ingatlanérték-hasznot „mutat”, mint ugyanaz az olcsó lakások közelében, pusztán azért, mert az árak magasabbak, nem azért, mert a jóléti nyereség nagyobb).

A Green Book elosztási elemzésre vonatkozó kiegészítő útmutatója, amelyet megerősített, hogy a Treasury 2020-as felülvizsgálata reagált a kritikára, miszerint az értékelési módszertan rendszerszerűen Londont és a délkeleti régiót részesítette előnyben, formális súlyozási megközelítést ad meg, amely a jövedelem határhaszon-rugalmasságának feltételezett, nagyjából 1,3-as értékére épül — vagyis a jövedelem megduplázása nagyjából megfelezi (pontosabban 2^-1,3 ≈ 0,41-szeresére csökkenti) egy további font határértékét. Ez nem kerekítési korrekció: alkalmazása megváltoztathatja, hogy két versengő program közül melyik mutat magasabb nettó jelenértéket, főleg ha egy hátrányos helyzetű területre koncentrált beavatkozást hasonlítanak össze az általános népességben szétterülővel.

## A matematika

A Green Book elosztási súlya egy y jövedelmi szintű háztartásnak jutó fontnyi haszonra, a nemzeti átlagjövedelem ȳ szintjén lévő fonthoz viszonyítva:

```
Súly(y) = (ȳ / y)^e

ahol:
  y  = a háztartás jövedelme (vagy az érintett csoport jövedelme)
  ȳ  = az átlagos (referencia) háztartási jövedelem
  e  = a jövedelem határhaszon-rugalmassága (Green Book: nagyjából 1,3)
```

A súlyok alkalmazása a nettó hasznokra:

```
Súlyozott haszon = Σ [az i csoport súlyozatlan haszna × Súly(y_i)]
```

A nemzeti átlag felét kereső csoport (y = 0,5ȳ) súlya (1/0,5)^1,3 = 2^1,3 ≈ 2,46 — az e csoportnak jutó minden font haszon nagyjából 2,46 fontot ér egy átlagjövedelmű háztartáséhoz képest.

## Kidolgozott példa

**Két versengő helyi program**, mindkettő súlyozatlan nettó haszna évi 2 millió £, ugyanazért a regionális növekedési alapért versenyez:

- *A program*: üzleti támogatási program egy virágzó városban, átlagos háztartási jövedelem 45 000 £ (kb. 1,3-szorosa a feltételezett 35 000 £-os nemzeti átlagnak).
- *B program*: készségfejlesztési program egy hátrányos helyzetű városrészben, átlagos háztartási jövedelem 18 000 £ (kb. 0,51-szerese a nemzeti átlagnak).

```
Súly(A) = (35 000 / 45 000)^1,3 = (0,778)^1,3 ≈ 0,72
Súly(B) = (35 000 / 18 000)^1,3 = (1,944)^1,3 ≈ 2,53

Súlyozott haszon A = 2 000 000 £ × 0,72 = 1,44 millió £
Súlyozott haszon B = 2 000 000 £ × 2,53 = 5,06 millió £
```

Súlyozatlanul a két program döntetlen. Az elosztási hatásra súlyozva a B program haszna több mint háromszor nagyobb — olyan eredmény, amely megfordítja a finanszírozási javaslatot, és tükrözi a Green Book kifejezett célját, amikor a súlyozás megmutatását kéri, nem csak a súlyozatlan haszon-költség arányt.

**Jótékonysági támogatás elosztása**: az a támogató, amely egy 500 000 £-os támogatást, amely 1000 alacsony jövedelmű háztartást ér el (súly ≈ 2,0, súlyozott érték 1 millió £-nak megfelelő), összehasonlít ugyanazzal az 500 000 £-gal, amely 1000 közepes jövedelmű háztartást ér el (súly ≈ 1,0, súlyozott érték 500 000 £-nak megfelelő), az elosztási érvet kifejezetten mutassa meg a testületi anyagában, ne bízza a következtetésre.

## Kapcsolat a szoftverfejlesztéssel

Az elosztási súlyozás ritkán jelenik meg közvetlenül a szoftverszállítási mutatókban, de alakítania kell, hogyan tervezik a mérnöki és adatcsapatok a mérést és a célzást:

- Hatásmérő irányítópult vagy ellátás-kalkulátor építésekor tegyék láthatóvá az érintettek jövedelmi vagy hátrányos helyzeti profilját, ne csak egy összesített hasznot — az elosztási bontás nélküli összesítések éppen a fent bemutatott fordulatot rejtik el.
- Kössék a szolgáltatástervezés célzási logikáját ugyanazokhoz a hátrányos helyzeti adatokhoz, amelyeket a Green Book is használ — lásd [Többszörös Hátrányos Helyzet Indexe](../többszörös-hátrányos-helyzet-indexe/) —, hogy egy digitális szolgáltatás elérését a méltányosság, ne csak a hatékonyság szempontjából lehessen értékelni (az [érték a pénzért](../érték-a-pénzért/) vitatott negyedik E-je).
- Ha egy algoritmus szűkös erőforrást oszt (időpontok, ügyintézői idő, támogatás), egy súlyozatlan „maximalizáld az összhasznot” célfüggvény konstrukciójából adódóan újratermeli ugyanazt a torzítást, amelyet a Green Book súlyozása korrigálni hivatott — optimalizálás előtt jelezzék ezt kifejezetten a szakpolitikai tulajdonosoknak.

## Buktatók

- **Az elosztási súlyok következetlen alkalmazása egy portfólión belül.** Egy program hasznainak súlyozása, de összehasonlítási alapjáé nem, elfogult, nem igazságosabb összehasonlítást ad; a Green Book azonos elbánást kér.
- **Ingatlan- vagy piaci értékek használata a jólét helyettesítőjeként korrekció nélkül.** A piaci árakat maga a meglévő jövedelmi egyenlőtlenség torzítja, éppen azt, amit az elosztási súlyozás korrigálni hivatott — a korrigálatlan piaci értékek használata kétszer is megszámolhatja a torzítást.
- **A csoporton belüli változatosság figyelmen kívül hagyása.** A területi átlagjövedelem szerinti súlyozás (pl. egy Többszörös Hátrányos Helyzet Indexe-decilis) félreértelmezheti azokat az egyéneket, akik nem felelnek meg területük átlagának; használják az ésszerűen elérhető legfinomabb jövedelmi adatot.
- **Az 1,3-as rugalmasság univerzális állandóként kezelése.** Maga a Green Book jegyzi meg, hogy ez hihető tartománnyal rendelkező becslés; a jelentős döntéseket tesztelják alternatív rugalmasságokkal szemben, ne kezeljék az 1,3-at pontosnak.

## Források

- HM Treasury, „The Green Book: Central Government Guidance on Appraisal and Evaluation” és az elosztási hatásokról szóló kiegészítő útmutató (2022-es kiadás). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, „Green Book Review 2020: Findings and Response” (a regionális torzítás kritikájára adott válasz). <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. „Valuation Techniques for Social Cost-Benefit Analysis.” HM Treasury/DWP, 2011 (háttér a jövedelem határhaszon-rugalmassági becsléseihez).
