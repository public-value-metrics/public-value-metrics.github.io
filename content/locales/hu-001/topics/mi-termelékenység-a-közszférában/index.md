# MI-termelékenység a közszférában

Az MI-alapú kódolási segítség tényleges mérnöki teljesítményre gyakorolt hatásának mutatói — javaslat-elfogadási arányok, kontrollált vizsgálati gyorsulások, PR-áteresztőképesség és kódmegtartás — még a közszféra-korlátok hozzáadása előtt is valóban ellentmondásos bizonyítékbázist hordoznak: az adatosztályozás korlátozza, hogy az örökölt állomány mely részeihez érhet hozzá egyáltalán egy MI-eszköz, a beszerzési ciklusok azt jelentik, hogy az értékelt eszköz gyakran egy modellgenerációval a jelenlegi képesség mögött jár, a biztonsági tisztasági követelmények pedig szabályozzák, ki használhatja mire.

## Miért fontos

A két legtöbbet idézett kontrollált vizsgálat ellentétes irányba mutat. Peng és munkatársai 2023-as GitHub Copilot RCT-je azt találta, hogy a fejlesztők 55,8%-kal gyorsabban fejeztek be egy zöldmezős HTTP-szerver feladatot a Copilottal (1h11m vs 2h41m, n=95). A METR 2025-ös RCT-je azt találta, hogy a *saját érett repozitóriumaikon* dolgozó tapasztalt nyílt forráskódú fejlesztők 19%-kal lassabbak voltak a 2025 eleji MI-eszközökkel, miközben azt hitték, nagyjából 20%-kal gyorsabbak. Mindkét vizsgálat megalapozott; az ellentmondás maga a megállapítás — a zöldmezős feladat hatékonysága nem vihető át az érett kódbázis eredményességére, és a kormányzati mérnöki munka nagy része érett kódbázison végzett munka, olyan állományokon, amelyek régebbiek és sajátosabbak, mint a medián kereskedelmi repozitórium. A Central Digital and Data Office Generative AI Framework for HMG (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) dokumentuma éppen azért fekteti le a felelős bevezetés alapelveit, mert ez a bizonyítékbázis nem importálható egyszerűen szállítói bemutatókból; a tárcáktól elvárják, hogy az eszközöket a bevezetés előtt a saját adatkezelési és biztonsági követelményeikhez mérve értékeljék.

## A matematika

```
Elfogadási arány  = elfogadott javaslatok / megjelenített javaslatok
Megtartási arány  = a merge-ig túlélő MI-kód / elfogadott MI-kód
Gyorsulás         = (t_kontroll − t_MI) / t_kontroll  (KIZÁRÓLAG kontrollált összehasonlításból)
Áteresztőképesség-delta = Δ merge-elt PR-ek/fejlesztő/hét

Közszféra-lefedettségi tényező:
  jogosult kódbázis-részarány = a rendszereken lévő LOC, ahol az osztályozás
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) egyáltalán megengedi az eszközt

Értékmodell = fejlesztők × jogosult-lefedettség × megtakarított idő × terhelt ráta × kihasználtság
             — minden tag helyi mérést igényel, és a lefedettségi tényezőnek
             nincs magánszektorbeli megfelelője
```

## Kidolgozott példa

Egy kormányzati tárca MI-kódolási asszisztenst kísérletez 300 fejlesztőn, de csak az OFFICIAL osztályozású rendszerek jogosultak az eszközhasználatra — az állomány 70%-a a létszám-allokáció szerint, a maradék 30% (magasabb osztályozású rendszerek) teljesen kizárva.

```
Jogosult fejlesztők = 300 × 0,70 = 210

Kísérleti eredmény: önjelentett megtakarított idő 40 perc/nap;
                    mért feladatszintű megtakarítás 12 perc/nap (0,2 óra)
                    — a METR észlelési rés, élesben reprodukálva

A MÉRT számot értékelik:
  210 × 0,2 óra × 220 nap × 55 £/óra terhelt × 0,6 kihasználtság
  = 210 × 44 óra × 55 £ × 0,6
  = 9240 óra × 55 £ × 0,6 ≈ 304 920 £/év kapacitás

Költség: 210 licencelt hely × 22 £/hó × 12 ≈ 55 440 £/év

Nettó kapacitásarány ≈ 304 920 / 55 440 ≈ 5,5:1
```

Az önjelentett haszon nagyjából egyharmadán finanszírozható, és csak az osztályozási plafon alkalmazása után — mind a 300 fejlesztő licencelése az önjelentett szám alapján túlbecsülte volna mind a jogosult populációt, mind a valódi megtakarítást.

## Kapcsolat a szoftverfejlesztéssel

A közvetlenül átvihető fegyelmek: futtassanak **pragmatikus kísérleteket** a tárca saját kódbázisán és valódi jegyein, nem szállítói bemutatófeladatokon, mert a METR-eredmény kifejezetten érett kódbázisra vonatkozó megállapítás; kezeljék az **elfogadási arányt helyettesítőként, nem eredményként** — a magas elfogadás alacsony megtartással a túldiagnosztizálás szoftveres megfelelője; párosítsanak minden áteresztőképességi állítást **stabilitás-ellenőrzéssel**, mert a DORA 2025-ös jelentése szerint az MI-bevezetés növeli az áteresztőképességet, de rontja a változtatási stabilitást, ami éppen az a nettó haszon-elemzés, amelyet a [DORA-mutatók a közértékért](../dora-mutatók-a-közértékért/) futtatni hivatott; és legyenek őszinték abban, hogy az MI-eszközök tágíthatják, nem szűkíthetik a rést a [technikai adósság](../technikai-adósság-mint-közérték-erózió/)-terhes örökölt állományokon, mert a tanítóadatok alulreprezentálják a kormányzatban gyakori COBOL, 4GL és egyedi mainframe kódot, így a javaslatok minősége éppen azokon a rendszereken a leggyengébb, amelyeknek a legnagyobb szükségük van a segítségre. Ez a tágabb [MI értéke a kormányzatban](../mi-értéke-a-kormányzatban/) kérdés mellett áll, és ugyanazok a [közszféra kiberbiztonságának értéke](../a-közszféra-kiberbiztonságának-értéke/) korlátok kell, hogy szabályozzák, amelyek behatárolják, hol láthat bármely harmadik fél eszköz egyáltalán kódot vagy adatot.

## Buktatók

- **Szállítói vizsgálat átültetése**: a zöldmezős RCT-gyorsulások alkalmazása örökölt integrációs munkára pontosan az a hiba, amelyet a METR-vizsgálat leleplezett.
- **Önjelentés mérésként**: a 20 százalékpontos észlelés-versus-mért rés a legnagyobb ismert torzítás ebben az irodalomban, és felfújja a kizárólag fejlesztői felmérésekre támaszkodó üzleti eseteket.
- **Az osztályozási plafon figyelmen kívül hagyása**: a teljes létszámra, nem a jogosult, osztályozás szerint tisztázott részhalmazra épülő licencelési és értékmodellek rendszerszerűen túlbecsülik mind a költséghatékonyságot, mind az elérhető lefedettséget.
- **Beszerzési ciklus késése**: a keretszerződés alapú eszközbeszerzés azt jelentheti, hogy egy kísérlet olyan modellgenerációt értékel, amely a teljes bevezetés idejére 12–18 hónappal elmarad a nyilvánosan elérhetőtől, így az eredeti üzleti eset gyorsulási feltevése még az élesbe lépés előtt elavul.

## Források

- Peng S, et al., „The Impact of AI on Developer Productivity: Evidence from GitHub Copilot”, 2023. <https://arxiv.org/abs/2302.06590>
- METR, „Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity”, 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
