# Többdimenziós Szegénységi Index (MPI)

Az MPI a szegénységet olyan egymást átfedő megfosztottságokként méri, amelyeket egy ember egyidejűleg él át — egészségben, oktatásban és életszínvonalban —, nem csupán a jövedelem egy határ alá esésként. Az Oxford Poverty and Human Development Initiative (OPHI) fejlesztette ki Sabina Alkire és James Foster közreműködésével, és 2010 óta közösen teszik közzé az UNDP-vel minden Human Development Reportban, az [Emberi fejlettségi index](../emberi-fejlettségi-index/) mellett.

## Miért fontos

A jövedelmi szegénységi küszöbök elnézik azokat az embereket, akiknek elég készpénzjövedelmük van, de hiányzik a tiszta vizük, az iskoláztatásuk, vagy túlélték egy gyermek halálát — és elnézik azt a tényt, hogy a megfosztottságok csoportosulnak: az áram nélküli háztartásnak aránytalanul nagyobb valószínűséggel nincs szanitációja és alultáplált gyermeke is van. Az Alkire–Foster-módszer, amelyre az MPI épül, minden ember megfosztottságait tíz mutatón számolja, három egyenlő súlyú dimenzióba csoportosítva — egészség, oktatás, életszínvonal —, és csak akkor sorol valakit „MPI-szegénynek”, ha súlyozott megfosztottsági pontszáma átlép egy rögzített küszöböt, megragadva azt az átfedést, amelyet külön, egymutatós statisztikák halmaza nem tud. Az OPHI a teljes módszertant és az országadatokat a <https://ophi.org.uk/multidimensional-poverty-index/> oldalon teszi közzé; a globális MPI, amelyet az UNDP-vel közösen tart fenn, ma több mint 110 országot fed le. A szegénység elleni programokhoz — készpénzátutalások, szociális gondozási triázs, segélycélzás — épített szoftverek számára az MPI mutatókészlete gyakran a legközelebbi dolog egy szabványosított megfosztottsági sémához, amelyet már több tucat nemzeti statisztikai hivatalban validáltak.

## A matematika

```
10 mutató, 3 dimenzió, mindegyik dimenzió súlya 1/3:

Egészség (1/3):          táplálkozás (1/6), gyermekhalandóság (1/6)
Oktatás (1/3):           iskolai évek (1/6), iskolalátogatás (1/6)
Életszínvonal (1/3):     főzési tüzelőanyag, szanitáció, ivóvíz,
                         villany, lakhatás, javak (egyenként 1/18)

megfosztottsági pontszám (c) = azon mutatók súlyainak összege, amelyekben a személy megfosztott

egy személy „MPI-szegény”, ha c ≥ 1/3 (a szegénységi küszöb, k = 33%)

H (fejszámlálási arány) = MPI-szegények száma / teljes népesség
A (intenzitás)          = az átlagos megfosztottsági pontszám csak az MPI-szegények között

MPI = H × A
```

Mivel az MPI a szegények *arányát* szorozza azzal, *mennyire* szegények, két régió azonos fejszámlálási aránnyal nagyon különböző MPI-pontszámot kaphat, ha a megfosztottságok az egyikben súlyosabbak — ugyanaz a „nincs helyettesítés a dimenziók között” logika, mint a HDI mértani közepe mögött.

## Kidolgozott példa

**1000 fős országos felmérés**: 350 embert azonosítanak többdimenziósan szegényként (megfosztottsági pontszám ≥ 33%). Csak e 350 szegény egyén között az átlagos megfosztottsági pontszám 45%.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Két, azonos fejszámlálású körzet összehasonlítása**: Az A körzetben H = 0,30 és A = 0,40 (sok szegény, mérsékelten megfosztott); a B körzetben H = 0,30 és A = 0,60 (ugyanannyi szegény, de súlyosabban megfosztottak — egyszerre hiányzik az áram *és* a szanitáció *és* az iskolalátogatás).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Azonos fejszámlálási arány, 50%-kal magasabb MPI a B körzetben — a kizárólag fejszámlálási szegénységen alapuló célzórendszer a két körzetet azonosan rangsorolná, és elmulasztaná észrevenni, hogy a B körzetnek mélyebb beavatkozásra van szüksége.

## Kapcsolat a szoftverfejlesztéssel

- A szociális programok ügykezelő és jogosultsági rendszerei gyakran már tárolják a tíz mutató közül többet (lakhatás, iskolalátogatás, egészségügyi markerek) külön silókban; az Alkire–Foster-számlálási módszer kész séma ezek egyetlen megfosztottsági pontszámmá kombinálására egyedi pontozási modell nulláról építése helyett.
- A fejszámlálás/intenzitás felosztás (H × A) általánosan hasznos minta bármely irányítópulthoz, amely „hányan érintettek” mellett „mennyire súlyosan” is jelent — mindkettő egyetlen számba sűrítése, ahogy a nyers prevalencia-statisztikák teszik, éppen azt az esetet rejti el, amelynek a legtöbb erőforrásra van szüksége.
- Az MPI-stílusú mutatóirányítópultok természetesen párosulnak a [költség kedvezményezettenként](../költség-kedvezményezettenként/) jelentéssel a szegénység elleni programoknál: az MPI-csökkenés pontonkénti költsége védhető egység nagyon különböző beavatkozások (készpénzátutalás kontra szanitációs infrastruktúra) összehasonlítására.

## Buktatók

- **A tíz mutató univerzálisként kezelése** — az OPHI globális MPI-mutatói az országok közötti összehasonlíthatóságra vannak kalibrálva; a nemzeti MPI-k (sok ország, köztük több dél-ázsiai és afrikai, saját MPI-t tesz közzé) a mutatókat és súlyokat a helyi kontextushoz igazítják, és a kettő nem közvetlenül összehasonlítható.
- **Csak H jelentése** — a fejszámlálási arány teljesen figyelmen kívül hagyja az intenzitást; mindig jelentsék vagy számítsák ki az A-t mellette, vagy magát az MPI-t.
- **Annak feltételezése, hogy az MPI-szegények és a jövedelmi szegények ugyanaz a népesség** — az OPHI saját országismertetői jellemzően csak részleges átfedést mutatnak a kettő között; a csak a jövedelmi szegényeket célzó program rendszerszerűen elmulaszt a többdimenziósan szegények jelentős hányadát.

## Források

- Oxford Poverty and Human Development Initiative. „Multidimensional Poverty Index.”
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. „Counting and Multidimensional Poverty Measurement.” Journal of Public
  Economics, 2011.
- UNDP & OPHI. „Global Multidimensional Poverty Index” (éves jelentés).
