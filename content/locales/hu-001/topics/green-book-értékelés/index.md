# Green Book-értékelés (ötesetes modell)

A Green Book a HM Treasury kötelező útmutatója az Egyesült Királyság kormányzati kiadási javaslatainak értékeléséhez és kiértékeléséhez. Központi eszköze, az ötesetes modell arra kényszeríti az üzleti esetet, hogy öt külön kérdésre válaszoljon — jó ötlet-e, ad-e értéket, beszerezhető-e, megfizethető-e és megvalósítható-e —, ahelyett hogy mindent egyetlen számba sűrítene, amelyet egy miniszter átnyálaz.

## Miért fontos

Az Egyesült Királyság központi kormányzatának minden, a tárcai átruházott limitek feletti kiadási javaslatának át kell mennie a Green Book-értékelésen, mielőtt a pénzeszközöket felszabadítják, és a HM Treasury Green Book Review 2020-ja (amelyet annak kritikája után tettek közzé, hogy a folyamat a szegényebb régiókkal szemben elfogult volt, lásd <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) szigorította azt az előírást, hogy a változatokat valódi „minimum” alapszinttel kell összehasonlítani, és a stratégiai illeszkedést már azelőtt bizonyítani kell, hogy az érték a pénzért kérdését egyáltalán értékelnék. Az ötesetes modell maga megelőzi a Green Booket — az Office of Government Commerce-ben keletkezett standard üzleti eset-szerkezetként —, de a 2022-es Green Book-kiadás kötelező formaként ágyazza be minden, Treasury-jóváhagyásra pályázó üzleti esetbe: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Az eset öt részre bontásának értelme, hogy egy javaslat bármely dimenzión elbukhat a többitől függetlenül. Egy stratégiailag megalapozott, költséghatékony IT-replatformálás elbukhat a kereskedelmi esetben, ha csak egy szállító tudja megvalósítani (egyszállítós beszerzési kockázat), vagy az irányítási esetben, ha a tárcának nincs tapasztalata ekkora programok szállításában. Az egyetlen „érték a pénzért” pontszám éppen az ilyen kudarcmódot rejti el.

## A matematika

Az ötesetes modell szerkezet, nem képlet, de minden esetnek megvan a saját mennyiségi vagy bizonyítási próbája:

```
1. Stratégiai eset
   A szervezeti stratégiához kötött kiadási cél bizonyítéka.
   Próba: van-e egyáltalán indok a változtatásra? („nem csinálni semmit” mindig opció.)

2. Gazdasági eset
   Változatok értékelése „minimum” alapszinttel szemben, társadalmi
   költség-haszon elemzéssel vagy költséghatékonysági elemzéssel.
   Próba: melyik változat maximalizálja a nettó közértéket?
   Lásd ../social-cost-benefit-analysis/ és ../cost-effectiveness-analysis-in-government/

3. Kereskedelmi eset
   Piaci egyeztetés, beszerzési út, kockázatmegosztás vevő és szállító között.
   Próba: beszerezhető-e a preferált változat elfogadható feltételekkel?

4. Pénzügyi eset
   Megfizethetőség a tárca költségvetési korlátain belül, finanszírozási forrás,
   mérlegkezelés.
   Próba: megengedhetjük-e magunknak ezt idén és minden következő évben?

5. Irányítási eset
   Irányítás, projektterv, haszonmegvalósítási terv, kockázati nyilvántartás.
   Próba: ténylegesen meg tudja-e ezt valósítani ez a szervezet?
   Lásd ../benefits-realization/
```

A gazdasági eset az, ahol a mennyiségi értékelés él: a változatokat a [társadalmi diszkontrátával](../társadalmi-diszkontráta/) korrigált nettó jelenérték alapján hasonlítják össze, a [társadalmi költség-haszon elemzés](../társadalmi-költség-haszon-elemzés/) módszerével, vagy ahol a hasznokat nem lehet őszintén pénzre váltani, a [költséghatékonysági elemzéssel](../költséghatékonysági-elemzés-a-kormányzatban/) vagy a [többszempontú döntéselemzéssel](../többszempontú-döntéselemzés/).

## Kidolgozott példa

**Helyi önkormányzat**: egy 12 millió £-os lakásjavítási IT-rendszert értékelő tanács a következőképp végzi az öt esetet. Stratégiai eset: a javítási hátralék beavatkozás nélkül 18 hónapon belül megsérti a törvényi megfelelő lakhatási szabványt. Gazdasági eset: három változat 10 éves értékelési időszakra, 3,5%-os diszkontrátával (a 2022-es Green Book standard társadalmi időpreferencia-rátája szerint) — „minimum” (a régi rendszer foltozása, NPV −4,1 M£), „vétel” (COTS platform, NPV +2,3 M£), „építés” (egyedi platform, NPV +0,6 M£ miután a szoftverfejlesztésre 40%-os optimizmus-torzítást alkalmaztak a diszkontálatlan beruházási költségre, a Green Book A. melléklete szerint). A vétel nyeri a gazdasági esetet. Kereskedelmi eset: két életképes szállító létezik, versenyeztetés lehetséges — teljesül. Pénzügyi eset: a tőke elérhető a Public Works Loan Boardtól, a működési költségek beférnek a középtávú pénzügyi tervbe — teljesül. Irányítási eset: a tanács az elmúlt öt évben két összehasonlítható rendszert szállított — teljesül. A javaslat a „vétellel” halad tovább.

**Központi kormányzati tárca**: az erős gazdasági esetű (NPV +40 M£) javaslat, ahol a vonatkozó akkreditációt csak egy szállító birtokolja, megbukik a kereskedelmi eset versenyfeszültségi próbáján, ami vagy egyszállítós mentességet (saját vizsgálati teherrel) vagy a specifikáció átdolgozását kényszeríti a piac megnyitására — ezt a gazdasági eset önmagában soha nem hozta volna felszínre.

## Kapcsolat a szoftverfejlesztéssel

A kormányzaton vagy támogatásból működő szervezeteken belüli mérnöki csapatok általában csak a gazdasági esetet látják, mert a termék- és mérnöki vezetéstől ezt kérik indokolni („mi ennek a migrációnak a ROI-ja?”). De a Treasury-n vagy támogatói bizottságon átmenő üzleti esetnek mind az öt kell, és a mérnökök gyakran a legjobb helyzetben vannak a kereskedelmi eset (beszerezhető-e ez valójában, vagy egy szállító saját formátumához köt?) és az irányítási eset (megvan-e a szállítási képességünk, vagy három konkrét ember ottmaradásán múlik?) megválaszolására. A „csak az üzleti eset számai” kérést a tényleges döntés egyötödének kérésként kezeljék. Lásd [érték a pénzért](../érték-a-pénzért/), hogyan szokták összegezni a gazdasági eset kimenetét, és [teljes birtoklási költség](../teljes-birtoklási-költség-a-kormányzati-it-ban/) a pénzügyi eset szokásos mennyiségi magjához.

## Buktatók

- **A gazdasági eset megírása először, és a stratégiai eset hozzáigazítása.** A Green Book Review 2020 megállapította, hogy éppen ez a kudarcmód vitte az értékelési torzítást a már jól dokumentált helyek és ágazatok felé, megszilárdítva a regionális egyenlőtlenséget; a stratégiai esetnek a változatok összehasonlítása előtt kell a célt megállapítania.
- **A „minimum” kezelése „nem csinálni semmit”-ként.** A helyes alapszint a legalacsonyabb költségű változat, amely még teljesíti a minimális jogi vagy biztonsági kötelezettségeket, nem a nulla kiadás fantáziája — a szó szerinti nullával összehasonlítás minden változat látszólagos értékét felfújja.
- **A kereskedelmi és irányítási eset kihagyása, mert a gazdasági eset erős.** A magas NPV-jű javaslat, amelyet nem lehet versenyeztetve beszerezni vagy a szponzor szervezet nem tud megvalósítani, nem finanszírozható javaslat; a Treasury-felülvizsgálók rendszeresen elutasítják ezen az alapon még meggyőző gazdasági eset mellett is.
- **Az ötesetes modell alkalmazása csak egyszer, az elején.** A Green Book megköveteli az eset újbóli megvizsgálását minden további jóváhagyási kapunál (stratégiai vázlat, előzetes üzleti eset, teljes üzleti eset), ahogy a költségek és bizonyítékok megszilárdulnak — a vázlatfázisban lefagyasztott eset elmulasztja azt a költségnövekedést, amelyet egy későbbi kapu elkapott volna.

## Források

- HM Treasury. „The Green Book: appraisal and evaluation in central government.” 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. „Green Book Review 2020: findings and response.” 2020. <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. „Guide to developing the project business case.” <https://www.gov.uk/government/publications/project-business-case-guide>
