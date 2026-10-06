# Áramlási mutatók a kormányzati szállításban

Az áramlási mutatók — a Little-törvény, a folyamatban lévő munka (WIP) korlátai és az áramlási hatékonyság — leírják, milyen gyorsan halad a munka egy korlátozott kapacitású rendszeren keresztül. Egy sprint-tábla egy ilyen rendszer; egy ellátásigénylési sor, egy tervezési engedélykérelmi nyilvántartás vagy egy vízumügyi hátralék pontosan ugyanaz a matematika, más egyenruhában.

## Miért fontos

A kormányzati ügyterhek sorbanállási rendszerek, és a sorbanállási rendszerek engedelmeskednek a sorbanállási törvényeknek, akár méri őket valaki, akár nem. A törvényi elbírálási határidők ezt kifejezetté teszik: a Town and Country Planning rendszer alatt a legtöbb kisebb tervezési kérelemhez 8 hetes, a nagyobbakhoz 13 hetes törvényi elbírálási cél tartozik — a törvénybe közvetlenül beépített átfutási idő-kötelezettség. A Home Office menekültügyi hátraléka, amelyet a National Audit Office és a Home Affairs Select Committee ismételten vizsgált, jól dokumentált példa olyan közrendszerre, ahol a folyamatban lévő munka tartósan gyorsabban nőtt, mint az áteresztőképesség, az átfutási időket messze bármely törvényi vagy szolgáltatási elvárás fölé hajtva. Az áramlási mutatók közös, kvantitatív szókincset adnak a mérnököknek és az ügyintézői vezetőknek pontosan erre a hibamódra, ahelyett hogy minőségi „hátralék-problémaként” hagynák.

## A matematika

```
Little-törvény:  WIP = Áteresztőképesség × Átfutási idő
             →   Átfutási idő = WIP / Áteresztőképesség

Áramlási hatékonyság = aktív (érintési) idő / teljes átfutási idő   (Vacanti)

WIP-korlát hatása: rögzített áteresztőképességnél a WIP felezése nagyjából
felezi az átlagos átfutási időt (átrendezett Little-törvény) — a létszámnövelés
nélkül elérhető kar.
```

Az azonos matematikáról ügyintézés helyett szoftvertelepítési csővezetékekre alkalmazva lásd a [DORA-mutatók a közértékért](../dora-mutatók-a-közértékért/) témát.

## Kidolgozott példa

**Helyi önkormányzati tervezési osztály**: egyszerre 400 kérelem van nyitva (WIP), a csapat hetente 50 kérelmet old meg (áteresztőképesség).

```
Átfutási idő = WIP / Áteresztőképesség = 400 / 50 = 8 hét
```

Ez pontosan a kisebb kérelmek törvényi 8 hetes céljánál landol — tartalék nélkül, vagyis a beérkező kereslet vagy a véleményezők válaszidejének bármilyen ingadozása a törvényi határidő fölé tolja az elbírálásokat.

**Áramlási hatékonyság**: e 8 hétből (56 naptári nap) egy kérelemnek jellemzően nagyjából 6 óra tényleges ügyintézői feldolgozási ideje van.

```
Áramlási hatékonyság = 6 óra / (56 nap × 8 munkaóra/nap)
                     = 6 / 448 ≈ 1,3%
```

Vacanti viszonyítási értéke szoftvercsapatokra a tipikus áramlási hatékonyságot 15–20%-ra teszi; a kormányzati ügyintézés, több törvényi véleményező átadással és nyilvános konzultációs ablakokkal, gyakran egy nagyságrenddel alacsonyabban fut. A „várakozási” idő 98,7%-a az, ahová a nyolc hét valójában megy — nem az ügyintézői kapacitásba.

**WIP-korlát beavatkozás**: az egy ügyintézőre jutó nyitott kérelmek 15-re korlátozása a korlátlan 25 helyett (az áteresztőképességet állandón tartva) a WIP-et 400-ról nagyjából 240-re tolja egy 16 fős csapatban:

```
Új átfutási idő = 240 / 50 = 4,8 hét
```

Az átfutási idő közel megfelezése szakpolitikai változtatásból, nem létszámnövelésből — ugyanaz a kar, amelyet a DORA-stílusú szállító csapatok húznak, amikor korlátozzák a sprint-WIP-et.

## Kapcsolat a szoftverfejlesztéssel

Az áramlási mutatók közös nyelvet adnak egy szállító csapat Kanban-táblája és az ügyintézői padló között, amelynek a szoftvert építik: egy ügyintéző sora és egy pull request-sor egyaránt a Little-törvény alatt áll, és mindkettő ugyanúgy lépi túl az átfutási időcéljait — túl sok WIP az áteresztőképességhez képest. Ez közvetlenül számít a [késedelem költsége a közprogramokban](../a-késedelem-költsége-a-közprogramokban/) témához: az átfutási idő × CoD az a font, amely bármely pillanatban a sorban ül, és a [szolgáltatási szabványok és tranzakciós mutatók](../szolgáltatási-szabványok-és-tranzakciós-mutatók/) témához, ahol egy közzétett átfutási cél átfutásiidő-kötelezettség, amelyet nem teljesülésekor csak az áramlási mutatók tudnak diagnosztizálni. Egy ügyintézési rendszer szoftverének a WIP-et és az átfutási időt elsőrangú működési mutatóként kell megjelenítenie, nem egy olyan ügykezelő rendszerbe temetnie, amelyet senki nem kérdez le.

## Buktatók

- **WIP-korlátok bevezetése a valódi szűk keresztmetszet javítása nélkül**: ha a korlát egy külső törvényi véleményező válaszideje, az ügyintézői WIP korlátozása csak felfelé tolja a sort, nem rövidíti.
- **Az áramlási hatékonyság kezelése kijátszható célként**: az aktív idő 1,3%-ának sietése alig mozdítja az átfutási időt; a kar szinte mindig a várakozási állapotokban van, ami általában folyamat-újratervezést jelent, nem ügyintézői sebességet.
- **A változékonyság figyelmen kívül hagyása**: a Little-törvény átlagokat ír le; a nagy keresletszórású ügyteher puffer-kapacitást igényel, nem csupán szorosabb WIP-korlátot, különben a törvényi határidőket az ingadozó farokban még akkor is túllépik, ha az átlag javul.
- **A WIP következetlen mérése**: a nyilvántartási rendszerben „nyitott”, de ténylegesen harmadik fél válaszára váró eset is WIP; kizárása szépíti a számokat anélkül, hogy az állampolgárok által látott valóságot megváltoztatná.

## Források

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, tervezési kérelmek törvényi határidői. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, jelentések a Home Office menekültügyi ügyintézéséről és elszállásolásáról. <https://www.nao.org.uk/>
