# A késedelem költsége a közprogramokban (CoD)

A késedelem költsége (Cost of Delay) az az egységnyi időre jutó közérték, amelyet egy program, szolgáltatás vagy rendszerváltoztatás *még nem* szállítottsága miatt elveszítünk. Ez a témacsoport fő áthidaló mutatója: a „az élesbe lépés hat hónapot csúszott” állítást fontra hetente, vagy WELLBY-re hetente váltja, hogy a késedelemről ugyanabban a valutában lehessen érvelni, mint magáról az üzleti esetről.

## Miért fontos

Reinertsen szabálya — „ha csak egy dolgot számszerűsít, a késedelem költségét számszerűsítse” — szinte változtatás nélkül átkerül a kormányzatba, mert a közprogramok szokatlanul ki vannak téve neki: az üzleti eseteket egy előre jelzett haszonáram alapján hagyják jóvá, de az áram csak élesbe lépéskor indul meg, és a csúszás minden hete egy hétnyi elmaradt érték, amelyet senki nem áraz be a kockázati nyilvántartásban. A National Audit Office ismételt vizsgálata a Universal Credit bevezetéséről (lásd „Rolling Out Universal Credit” jelentéseit, <https://www.nao.org.uk/>) szemlélteti a mintát: az ütemezési csúszást követték és jelentették, de az átalakított rendszer *még nem* szállításának fontonként heti költségét az igénylők következő hullámának ritkán állították főcímszámként, noha éppen ez a szám kellett volna, hogy a priorizálást és az eszkalációt hajtsa. CoD-szám nélkül egy késő program ütemezési problémának látszik a szállítási testület számára; vele értékerózió-probléma a számviteli tisztviselő számára.

## A matematika

```
CoD = az elszállítatlan állapotban elmaradó haszon időegységenként   (£/hét vagy WELLBY/hét)

Teljes késedelmi veszteség = CoD × a késedelem időtartama

A közprogramoknál összegzendő haszonáramok:
  készpénzt felszabadító megtakarítások   (csalás/hiba csökkentése, elkerült ideiglenes költségek)
+ nem készpénzes felszabadított kapacitás (ügyintézői/tisztviselői órák × terhelt költség)
+ jóléti haszon                           (WELLBY-k × 13 000 £/WELLBY, HMT Green Book
                                           jóléti kiegészítő útmutató, 2019-es árak)
```

Az állampolgárokkal szembeni szolgáltatásoknál pénzben és jólétben is denominálják — az alapul szolgáló egységről lásd a [jóléttel korrigált életéveket](../jóléttel-korrigált-életévek/), arról pedig, hogy mi mást finanszírozhatott volna a késleltetett font, az [alternatívaköltséget a közkiadásokban](../alternatívaköltség-a-közkiadásokban/).

## Kidolgozott példa

**Helyi önkormányzat**: egy lakhatási támogatási rendszer frissítése igénylésenként évi 150 £-bal csökkenti a túlfizetési hibát 20 000 élő igénylésen.

```
Éves haszon = 150 × 20 000 = 3 000 000 £/év
CoD = 3 000 000 / 52 ≈ 57 700 £/hét
Egy 12 hónapos megvalósítási késedelem 52 × 57 700 ≈ 3 000 000 £ elkerülhető hibába kerül.
```

**Központi kormányzati ügynökség**: egy fogyatékossági ellátás-értékelési szolgáltatás, amelyet hat hónappal (26 héttel) a tervezettnél később szállítottak, azt jelenti, hogy évi 200 000 igénylő átlagosan három héttel tovább vár a döntésre. A pénzügyi bizonytalanság minden többlethetét −0,0018 WELLBY (életelégedettségi pont) hatásként modellezik:

```
WELLBY-veszteség igénylőnként = 3 × 0,0018 = 0,0054
Éves WELLBY-veszteség = 200 000 × 0,0054 = 1080 WELLBY/év
CoD_jólét = 1080 / 52 ≈ 20,8 WELLBY/hét
CoD_pénz = 20,8 × 13 000 £ ≈ 270 000 £/hét jóléti érték
```

Egy 26 hetes késedelem ezért nagyjából 540 WELLBY-t „költ” — a Green Book jóléti értékelésén nagyjából 7 millió £ értékben —, az elmulasztott élesbe lépési dátumot állampolgári jóléti eseményként keretezve újra, nem projektmenedzsment-lábjegyzetként.

## Kapcsolat a szoftverfejlesztéssel

A CoD teszi a [DORA-mutatókat](../dora-mutatók-a-közértékért/) és az [áramlási mutatókat](../áramlási-mutatók-a-kormányzati-szállításban/) pénzügyileg olvashatóvá: a csővezetékben töltött átfutási idő × CoD az a pénz (vagy jólét), amely a sorokban ég el, mielőtt valaha eljutna egy állampolgárhoz. Konkrétan:

- **Priorizálás**: a hátralékot CoD ÷ időtartam szerint rangsorolják, nem érdekelt felek rangja szerint — a Green Book azon követelményének szoftvermérnöki megfelelője, hogy a változatokat az érték szerint értékeljék, nem aszerint, hogy ki kéri.
- **Beszerzés**: egy 12–18 hónapos keretszerződéses beszerzési ciklusnak van CoD-je; beárazása megváltoztatja a gyorsított útvonalak sürgősségi érvét, és közvetlenül táplálja az [építeni vagy venni](../építeni-vagy-venni-a-kormányzatban/) döntéseket, ahol az értékhez jutás ideje döntési tényező.
- **Haszonesetet**: minden jóváhagyáskor idézett CoD-számnak újra meg kell jelennie a [haszonmegvalósításnál](../haszonmegvalósítás/) — ha a késedelmi költség valódi volt, a felgyorsított haszonnak mérhetőnek kell lennie az élesbe lépés után.

## Buktatók

- **Lineáris CoD feltételezése**: egyes közszolgáltatásoknak határidő-alakú értéke van (törvényi megfelelési dátum — a CoD a dátum után végrehajtási kockázati szintekre ugrik, előtte nulla közeli) sima heti ráta helyett. A szorzás előtt osztályozzák a sürgősségi profilt.
- **CoD olyan kibocsátásra, amelyre senkinek nincs szüksége**: a késedelemnek csak akkor van költsége, ha az el nem szállított dolognak van értéke; egy rendszernek, amelyet senki nem fog használni, nulla a CoD-je, bármilyen késő is.
- **A késedelem és a diszkontálás kétszeri számítása**: a [társadalmi diszkontráta](../társadalmi-diszkontráta/) már beárazza az időt a többéves értékelési horizontokon; a CoD a horizonton belüli, hetekre és hónapokra vonatkozó működési változat. A CoD-t ütemezési csúszásra, az NPV-eltolódást többéves átütemezésre használják.

## Források

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book kiegészítő útmutató: jólét. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, jelentések a Universal Credit bevezetéséről. <https://www.nao.org.uk/>
