# Árnyékárazás

Az árnyékár egy olyan jószághoz, erőforráshoz vagy externáliához rendelt becsült érték, amelynek nincs megfigyelhető piaci ára, vagy amelynek piaci ára torz és nem tükrözi valódi társadalmi értékét. A kormányzati értékelés egy kis halmaz hivatalos árnyékárra támaszkodik — szén-dioxid, nem munkaidős idő, munkanélküli munkaerő —, amelyeket központilag tesznek közzé, hogy minden tárca ugyanazt a számot használja.

## Miért fontos

Az árnyékárak azért léteznek, mert a [társadalmi költség-haszon elemzés](../társadalmi-költség-haszon-elemzés/) nem működhet minden költség és haszon pénzértéke nélkül, és a legjelentősebbek közül több — egy kibocsátott tonna szén-dioxid, egy ingázó egy órája, egy jobb híján munkanélküli munkaerő egy órája — vagy egyáltalán nem rendelkezik piaci árral, vagy olyan piaci árral, amely félreérti valódi társadalmi költségét. A HM Treasury és a Department for Energy Security and Net Zero közösen teszi közzé a teljes brit kormányzati értékelésben használt szén-dioxid-árnyékárat (<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>), amelyet nem valamely szén-dioxid-piaci árból, hanem célkonzisztens megközelítésből vezetnek le: a szén-dioxid értékét a törvényben rögzített brit szénköltségvetések eléréséhez szükséges határ csökkentési költségen állapítják meg, ami alapvetően más logika, mint annak megfigyelése, mennyiért kereskednek ténylegesen a szén-dioxiddal az uniós vagy brit kibocsátáskereskedelmi rendszerben.

Az árnyékbér hasonló logikát követ a munkaerő oldalán. Valakinek a foglalkoztatása, aki egyébként munkanélküli lett volna, nem kerül a társadalomnak a teljes bérébe — a bér egy része a kiesett juttatásokból és az elveszett szabadidőből/álláskeresési időből származó transzfer, nem a társadalom erőforrásaiból történő nettó új lehívás —, ezért a Green Book útmutatója a munkanélküliségből bevont munkaerőre a piaci bér alatti árnyékárat ír elő, amely a munka valódi alternatívaköltségét tükrözi (lásd [alternatívaköltség a közkiadásokban](../alternatívaköltség-a-közkiadásokban/)), nem piaci árát.

## A matematika

```
A szén-dioxid árnyékára (szemléltető szerkezet, az aktuális értékek a hivatalos
BEIS/DESNZ szénérték-eszközből — ne használjanak elavult számokat):
  A kereskedett szektor értéke: az ETS-kvóták árpályái által informált
  A nem kereskedett szektor (célkonzisztens) értéke: a törvényes szénköltségvetések
    teljesítéséhez szükséges határ csökkentési költségre állítva, időben
    emelkedve, ahogy a könnyebb csökkentési lehetőségek kimerülnek
  Alkalmazás: £/tonna CO2e × a változat által kibocsátott vagy elkerült tonnák,
    a jövőbeli évekre a társadalmi diszkontrátával diszkontálva

Árnyékbérráta (SWR):
  SWR = Piaci bér − (a megtakarított szabadidő/álláskeresési idő értéke
                      + a már nem fizetett jóléti kifizetések értéke)
  Jellemzően a piaci bér törtjeként kifejezve (pl. SWR = 0,6
    × piaci bér magas munkanélküliségű területen, a Green Book A. mellékletének
    a szabad kapacitású munkaerőpiacokról szóló útmutatója szerint)
```

Mindkét szám központilag megállapított szakpolitikai konvenció, nem empirikus piaci megfigyelés — az árnyékár egész lényege egy hiányzó vagy torz piac helyettesítése, ezért az azt használó értékelésnek az aktuális hivatalos forrást kell idéznie, nem saját számot levezetnie, éppen hogy minden tárca értékelése összehasonlítható legyen.

## Kidolgozott példa

**Nemzeti kormányzat**: egy árvízvédelmi program értékelése becslése szerint évi 400 tonna CO2e-kibocsátást kerül el (a szükséghelyzeti gépek csökkent használata és az elkerült újjáépítésből fakadó csökkent megtestesített szén révén) 30 éves értékelési élettartam alatt, egy „minimum” alapszinthez képest.

```
Szemléltető szén-dioxid-árnyékár: 280 £/tonna CO2e (1. év, emelkedik az
  értékelési időszak alatt a hivatalos nem kereskedett szénérték-ütemterv szerint)
1. évi szénhaszon = 400 × 280 £ = 112 000 £
```

Mivel a hivatalos ütemterv a szén értékét az értékelési időszak alatt *emelkedőnek* mutatja (a szigorodó szénköltségvetéseket tükrözve), az elemzőnek az évspecifikus helyes értéket kell alkalmaznia a 30 éves áram minden évére, nem állandó rátát — az 1. évi érték végig használata alulbecsülné a későbbi évek hasznait, és torzítaná a sorrendet a más szénprofillal rendelkező alternatív árvízvédelmi tervekkel szemben.

**Helyi önkormányzat**: egy tanács tartósan munkanélküli lakosoknak szóló foglalkoztatástámogatási programja 150 embert helyez el 11 £/órás állásokban. Az értékelés a teljes piaci bérrel a programnak 11 £ × ledolgozott óra társadalmi hasznot tulajdonítana, de az árnyékbérráta-megközelítés elismeri, hogy ezek nem más állásokból elvont munkavállalók voltak — munkájuk valódi alternatívaköltsége a program előtt alacsony volt.

```
Piaci bér: 11,00 £/óra
Árnyékbérráta (szemléltető, magas helyi munkanélküliség): 0,6 × piaci bér = 6,60 £/óra
Ledolgozott óránként tulajdonítható nettó társadalmi haszon ≈ 11,00 £ − 6,60 £ = 4,40 £/óra
  (a valóban tétlen munkaerő termelésbe állításával létrehozott „többlet” érték,
   különbözik magától a bértől, amely nagyrészt transzfer)
```

Ezért mutathatnak a magas munkanélküliségű területeken a foglalkoztatási programok értékelései pozitív nettó társadalmi értéket akkor is, amikor ugyanaz a program egy teljes foglalkoztatású területen, ahol a kiszorított munkaerőt egyszerűen más állásokból vonnák el, nem mutatna.

## Kapcsolat a szoftverfejlesztéssel

Az árnyékárazás ritkán érinti közvetlenül a szoftverszállítást, de számít, valahányszor egy üzleti eset szén- vagy társadalmi hasznot állít egy IT-változtatásból — egy adatközpont-konszolidáció, amely szénmegtakarítást állít, vagy papírmentes szolgáltatás, amely elkerült nyomtatási és postai szenet állít, az aktuális hivatalos szén-dioxid-árnyékárat kell használja, nem kitalált számot, és a helyes évenkénti ütemtervet kell alkalmaznia, nem állandó rátát, pontosan ahogy bármely más Green Book-értékelési bemenetnél. Lásd [teljes birtoklási költség a kormányzati IT-ban](../teljes-birtoklási-költség-a-kormányzati-it-ban/) és [a közszféra kiberbiztonságának értéke](../a-közszféra-kiberbiztonságának-értéke/), amelyek közül mindkettőnek gyakran szüksége van árnyékárra egy nehezen pénzre váltható bemenethez (feltörési kockázat, állásidő) a közvetlenül költségezett tételek mellett.

## Buktatók

- **Elavult szén- vagy bérszám használata.** Mindkét értéket időszakosan felülvizsgálják a központi útmutatók; az elavult számra épülő értékelés nem éli túl a Treasury vizsgálatát.
- **Állandó szén-árnyékár alkalmazása több évtizedes értékelésen.** A hivatalos ütemterv időben emelkedik; az 1. évi érték végig használata félreírja a hasznok vagy költségek profilját.
- **Az árnyékbér összetévesztése a munkavállaló tényleges fizetésének leszámításával.** Az árnyékbérráta az *értékelés* munkaerő-bemenet-értékelését igazítja, nem a munkavállaló ténylegesen fizetett bérét — a kettő összekeverése (tévesen) a piaci bér alatti fizetés igazolására csábít.
- **Testre szabott árnyékár levezetése a hivatalos használata helyett.** Az árnyékárak éppen azért szakpolitikai konvenciók, hogy az értékelések tárcák között összehasonlíthatók legyenek; egy helyben kitalált szám, bármilyen jól megindokolt is, megszakítja ezt az összehasonlíthatóságot.

## Források

- HM Treasury / Department for Energy Security and Net Zero. „Valuing greenhouse gas emissions in policy appraisal.” <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. „The Green Book: appraisal and evaluation in central government,” A. melléklet (a munka árnyékára, nem munkaidős időértékek). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. „Project Appraisal and Planning for Developing Countries.” Heinemann, 1974 (az árnyékárazás alapmódszertana).
