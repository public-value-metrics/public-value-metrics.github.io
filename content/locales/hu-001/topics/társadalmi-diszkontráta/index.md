# Társadalmi diszkontráta

A társadalmi diszkontráta a jövőbeli költségeket és hasznokat mai értékre számítja át, hogy az évtizedekre elnyúló megtérülésű programokat közös alapon lehessen összehasonlítani. A HM Treasury Green Bookja az első 30 évre 3,5%-on rögzített, csökkenő ütemtervet ír elő, amely a Ramsey-képleten alapul — egy konkrét, idézhető szám, amely élő politikai és etikai vitává vált mindenütt, ahol hosszú távú kötelezettségekre, például az éghajlat-politikára vagy az infrastruktúrára alkalmazzák.

## Miért fontos

A 30 év múlva kapott egy font haszon nem ér annyit, mint a ma kapott egy font haszon, részben a tiszta időpreferencia miatt (az emberek és társadalmak előbb szeretik a jó dolgokat), részben a növekedés miatt (egy jövőbeli társadalomról azt várják, hogy gazdagabb, így neki egy font a határon kevesebbet jelent). A Green Book 6. melléklete az Egyesült Királyság standard diszkontrátáját a Ramsey-képletből vezeti le, egyesítve a tiszta időpreferencia ütemét a fogyasztás várható növekedési ütemével és a fogyasztás határhaszon-rugalmasságával, ami évi 3,5%-os közzétett rátát ad a 0–30. évekre, amely a 31. évtől közzétett ütemterv szerint csökken (a 301. évtől 1%-ig). Ez az ütemterv éppen azért létezik, mert egy évszázadra számított állandó 3,5% szinte bármely hosszú távú hasznot — nyolcvan év múlva életeket mentő árvízvédelmet, száz év múlva kárt elkerülő szén-dioxid-csökkentést — jelenértékben jelentéktelennek mutatna, amit a Treasury hihetetlen etikai következtetésnek ítélt valóban hosszú élettartamú infrastrukturális és környezeti döntéseknél.

A diszkontráta vitatott, mert a választás nem semleges műszaki paraméter: ítéletet kódol arról, mennyit kell a társadalomnak ma feláldoznia a még meg nem született emberekért. Az éghajlatváltozás közgazdaságtanáról szóló Stern-jelentés (Stern Review, 2006) nullához közeli diszkontrátát használt (kb. 0,1%-os tiszta időpreferenciát), azzal érvelve, hogy a jövő nemzedékek jólétének a piaci rátákhoz hasonló mértékű diszkontálása etikailag védhetetlen, ha a kár (katasztrofális éghajlatváltozás) visszafordíthatatlan. A kritikusok — különösen William Nordhaus — azt állították, hogy Stern közel nulla rátája túlzottan megerősítette az azonnali éghajlati kiadások mellett szóló érvet azzal, hogy szinte bármely jelenlegi költség indokoltnak látszott egy alig diszkontált jövőbeli haszonnal szemben. A vita nem a matematikáról szólt; arról, hogy kinek az etikai keretrendszere szabja meg a rátát, és ez maradt a szokásos példa arra, hogy a diszkontráta politikai döntés, nem csupán aktuáriusi bemenet.

## A matematika

A Green Book rátája mögötti Ramsey-képlet:

```
r = ρ + η·g

ahol:
  r = társadalmi diszkontráta
  ρ = tiszta időpreferencia üteme (türelmetlenség + katasztrófakockázat)
  η = a fogyasztás határhaszon-rugalmassága
  g = az egy főre jutó fogyasztás várható éves növekedési üteme
```

A Green Book csökkenő ütemterve (6. melléklet, szemléltető — a pontos közzétett táblázatot az aktuális kiadásban ellenőrizzék):

```
0–30. év:    3,5%
31–75. év:   3,0%
76–125. év:  2,5%
126–200. év: 2,0%
201–300. év: 1,5%
301. évtől:  1,0%
```

Egy jövőbeli összeg jelenértéke:

```
PV = FV / (1 + r)^t
```

## Kidolgozott példa

**Árvízvédelmi program**: egy projekt a 40. évben 10 millió £ elkerült árvízkárt szállít.

Állandó 3,5%-os rátával: PV = 10 000 000 / (1,035)^40 ≈ 2,52 millió £ — a haszon kicsinek látszik.

A Green Book csökkenő ütemtervével (3,5% a 0–30. évekre, utána 3,0%) a számítás az első 30 évre 3,5%-kal, a 31–40. évekre 3,0%-kal kamatoz:

```
PV = 10 000 000 / [(1,035)^30 × (1,03)^10]
   = 10 000 000 / [2,807 × 1,344]
   ≈ 10 000 000 / 3,773
   ≈ 2,65 millió £
```

A csökkenő ütemterv mérsékelten növeli a hosszú távú hasznok jelenértékét az állandó magas rátához képest — ez az ütemterv kifejezett célja, mivel az évszázadra alkalmazott állandó 3,5% a 100. évben jelentkező 100 millió £ hasznot 3,3 millió £ alá diszkontálná.

**Digitális infrastruktúra**: egy most 4 millió £-ba kerülő kormányzati felhőmigráció várhatóan évi 500 000 £ örökölt karbantartási költséget kerül el 15 éven át. 3,5%-nál ennek az annuitásnak a jelenértéke nagyjából 500 000 £ × 11,52 (a 15 éves annuitási tényező 3,5%-nál) ≈ 5,76 millió £ — kényelmesen meghaladja a 4 millió £ költséget, pozitív nettó jelenértékű eset, amely naivan választott magasabb rátánál észrevehetően gyengébbnek látszana (7%-nál ugyanez a tényező kb. 9,11-re esik, 4,56 millió £-ot adva, még pozitív, de jóval vékonyabb tartalékkal).

## Kapcsolat a szoftverfejlesztéssel

A legtöbb szoftveres üzleti eset 3–5 évre fut, mélyen az állandó 3,5%-os sávon belül, így a csökkenő ütemterv ritkán érvényesül közvetlenül — de az alapul szolgáló fegyelem fontos minden hosszú eszköz-élettartamú kormányzati technológiai beruházásnál (országos platform, adatinfrastruktúra-program, több évtizedes szerződés):

- A Green Book közzétett rátáját használják, ne a magánpénzügyekből kölcsönzött belső „akadályrátát”; az ellenőrök és a Treasury-felülvizsgálók a standard ütemtervet fogják várni.
- A sok évvel későbbi hasznoknál (egy platform hosszú távú karbantartási megtakarítása, egy nyílt adat ökoszisztéma növekvő értéke — lásd [nyílt adatok értéke](../nyílt-adatok-értéke/)) a diszkontálási választás pozitívból negatívba fordíthatja az üzleti esetet; a rátát és a horizontot kifejezett feltevéssé tegyék, ne eltemetett alapértékké.
- Ez közvetlenül táplálja a [Green Book-értékelést](../green-book-értékelés/), azt az ötesetes modellt, amely formálisan diszkontált pénzáramlást kíván, és a [jóléti értékelést](../jóléti-értékelés/), ahol ugyanez a diszkontálási kérdés a nem pénzbeli jóléti hasznoknál merül fel.
- Lásd még a [nemzedékek közötti méltányosság és fenntarthatósági diszkontálás](../nemzedékek-közötti-méltányosság-és-fenntarthatósági-diszkontálás/) témát a Stern–Nordhaus-vitához, kifejezetten a környezeti és éghajlati technológiai beruházásokra alkalmazva.

## Buktatók

- **Állandó ráta használata nagyon hosszú horizontokon.** A Green Book csökkenő ütemterve éppen azért létezik, mert az állandó ráta alulbecsüli a valóban hosszú élettartamú hasznokat; ellenőrizzék, melyik sáv érvényes, ne alapértelmezetten 3,5%-ot használjanak végig.
- **A diszkontráta etikailag semlegesnek tekintése.** A Stern–Nordhaus-vita mutatja, hogy a ráta a jövő nemzedékekről szóló értékítéletet kódol; megváltoztatása megváltoztatja, mely programok látszanak indokoltnak, ezért ki kell mondani és meg kell védeni, nem táblázat-alapértékbe rejteni.
- **A társadalmi diszkontráta összetévesztése a magán tőkeköltséggel.** A kormányzati hitelfelvételi költségek és a magánszektor akadályrátái más fogalmak, mint a Ramsey-ből levezetett társadalmi ráta, és az egyik helyettesítése a másikkal a közszféra-értékelésben jellemzően a rövid távú megtérülések irányába torzítja az eredményt.
- **Reál és nominális pénzáramlások következetlen diszkontálása.** A Green Book rátája reál (inflációval korrigált) ráta; nominális pénzáramlások ezzel való diszkontálása érezhetően alulbecsüli a jelenértékeket.

## Források

- HM Treasury, „The Green Book: Central Government Guidance on Appraisal and Evaluation”, 6. melléklet (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. „The Economics of Climate Change: The Stern Review.” HM Treasury, 2006.
- Nordhaus WD. „A Review of the Stern Review on the Economics of Climate Change.” Journal of Economic Literature, 2007;45(3):686–702.
- Ramsey FP. „A Mathematical Theory of Saving.” Economic Journal, 1928;38(152):543–559.
