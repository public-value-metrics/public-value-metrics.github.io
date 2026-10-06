# Eredményalapú elszámoltathatóság (OBA)

Az eredményalapú elszámoltathatóság (Outcomes-Based Accountability), más néven Results-Based Accountability (RBA), Mark Friedman keretrendszere két olyan kérdés szétválasztására, amelyet a közszféra jelentései rendszeresen összemosnak: „jól van-e a népesség?” (népességi elszámoltathatóság) és „jól teljesít-e ez a konkrét program?” (teljesítményi elszámoltathatóság). A kettő összekeverése Friedman szerint a legáltalánosabb oka annak, hogy jól működő programokat hibáztatnak olyan népességi trendekért, amelyek mozgatására soha nem volt hatalmuk.

## Miért fontos

Friedman a keretrendszert a *Trying Hard Is Not Good Enough* (2005) című művében fektette le, azzal érvelve, hogy a legtöbb közszféra-jelentés vagy olyan népességi szintű statisztikákkal árasztja el a döntéshozókat, amelyeket egyetlen ügynökség sem irányít (tinédzserterhességi arány, munkanélküliségi ráta, várható élettartam), vagy olyan programszintű tevékenységi számokkal (ellátott ügyfelek, megtett beutalók), amelyek semmit nem mondanak arról, hogy bárki élete javult-e. Az RBA hozzájárulása egy kis, fegyelmezett szókincs, amely a kettőt elválasztva tartja: a népességi eredmények (egy egész népesség jólétének feltételei, például „a gyermekek egészségesen születnek”) egyetlen ügynökséghez sem tartoznak, és sok partner együttes mozgását igénylik; a teljesítménymutatók (egy konkrét program mennyire jól szolgálja konkrét ügyfeleit) egyetlen ügynökséghez tartoznak, és csak azon szabad megítélni, amit az az ügynökség ténylegesen befolyásolhat. Friedman „három teljesítménykérdése” — mennyit tettünk, mennyire jól tettük, és jobban él-e valaki? — ma beágyazódott az amerikai állami és megyei humán szolgáltatási szerződéskötésbe, és az RBA-hoz igazodó Clear Impact tanácsadó cég és eszköztár révén széles körben használják a brit és Commonwealth-beli helyi önkormányzati megrendelésben. A tét szerződéses: egy lakhatási programot nem szabad leállítani azért, mert a város hajléktalansági rátája az elérési körén kívüli makrogazdasági okokból nőtt, de feltétlenül le kell állítani, ha a saját ügyfeleit nem helyezi el.

## A matematika

```
Népességi elszámoltathatóság (a „nagy kép”, amelyen egy közösség, régió vagy nemzet osztozik):
  Eredmény     — a jólét egy feltétele (pl. „a lakosok gazdaságilag biztonságban vannak”)
  Mutató(k)    — e feltétel mérőszáma (pl. munkanélküliségi ráta, medián háztartási jövedelem)
  → egyetlen program sem birtokolja a mutatót; a mozgatásához sok közreműködő kell

Teljesítményi elszámoltathatóság (amiért egy program felel):
  Mennyit tettünk?          — tevékenységi volumen (ellátott ügyfelek, szállított egységek)
  Mennyire jól tettük?      — minőség/hatékonyság (a programot befejezők %-a, költség ügyfelenként)
  Jobban él-e valaki?       — a számító eredmény (a program után 6 hónappal foglalkoztatottak %-a,
                              előtte/utána vagy összehasonlító csoporttal szemben)

A programot a harmadik teljesítménykérdés alapján ítélik meg, soha nem közvetlenül
a népességi mutató alapján, hacsak mérete és kialakítása hihetően nem mozdíthatja azt egyedül.
```

## Kidolgozott példa

**Városi finanszírozású foglalkoztatási támogatási program**, évi 500 résztvevő, helyi önkormányzat által RBA-stílusú teljesítménykerettel megrendelve:

```
Népességi mutató (kontextus, nem a program eredménylapja):
  Városi munkanélküliségi ráta: 6,2% (az előző évi 5,8%-ról, egy a programon kívüli
  gyárbezárás miatt)

Teljesítménymutatók (a program tényleges elszámoltathatósága):
  Mennyit:        500 beiratkozott résztvevő (cél 480) — teljesítve
  Mennyire jól:   78%-os befejezési arány; költség befejezőnként = 340 000 £ / 390 befejező ≈ 872 £
  Jobban él-e:    a 390 befejezőből 260 tartós foglalkoztatásban 6 hónap után = 66,7%
                  az illesztett összehasonlító csoport 41%-ával szemben (lásd counterfactual-analysis)
```

Népességi elszámoltathatósági olvasatban a program kudarcnak látszik — a város munkanélküliségi rátája az ő ügyeletük alatt nőtt. Az RBA teljesítményi elszámoltathatósági olvasatában a program sikeres: elérte volumencélját, tartotta a minőséget, és olyan foglalkoztatási eredményt hozott, amely 25,7 százalékponttal meghaladja az illesztett összehasonlító csoportét, miközben a népességi mutató a program irányításán teljesen kívül eső okokból (gyárbezárás) mozdult.

## Kapcsolat a szoftverfejlesztéssel

Az RBA közvetlenül leképezhető egy ismerős SRE-megkülönböztetésre: a népességi mutatók olyanok, mint az üzleti szintű North Star mérőszámok, amelyeket egyetlen mérnöki csapat sem birtokol elejétől végéig (vállalati bevétel, piaci részesedés), míg a teljesítménymutatók olyanok, mint egy csapat saját SLO-i — azok a dolgok, amelyeket a csapat tervezési döntései ténylegesen mozgatnak. Az az irányítópult, amely mindkettőt jelenti anélkül, hogy címkézné, melyik melyik, éppen azt a téves tulajdonítást hívja elő, amelyet az RBA megakadályozni hivatott: egy ügyeletes mérnököt hibáztatnak egy olyan mutatóért, amelyet egy függő csapat irányít. Eredményszerződésekhez jelentéskészítő eszközök megrendelésekor vagy építésekor a „mennyit / mennyire jól / jobban él-e” hármast elsőrangú, külön szűrhető mezőkként építsék be egyetlen vegyes KPI helyett — ez ugyanaz a fegyelem, mint az előrejelző és követő mutatók szétválasztása a [közszféra-KPI-kben](../közszféra-kpi-k/). Az RBA egyben az elszámoltathatósági logika az [eredményalapú fizetés és a társadalmi hatású kötvények](../eredményalapú-fizetés-és-társadalmi-hatású-kötvények/) alatt: egy PbR-szerződés csak a „jobban él-e” teljesítménymutató alapján fizethet tisztességesen, soha a népességi mutató alapján, hacsak a beavatkozás nem valóban annak domináns mozgatója.

## Buktatók

- **Egy program fizetése vagy büntetése olyan népességi mutató alapján, amelyet nem tud irányítani**: ez az az egyetlen hiba, amelyet az RBA megakadályozni hivatott; következmények csatolása előtt mindig vizsgálják meg, hogy a program a népességi eredmény jelentős vagy csekély közreműködője-e.
- **A „mennyit” jelentése úgy, mintha „jobban él-e” lenne**: a tevékenységi számok (ellátott ügyfelek) a legkönnyebben gyűjthető és legkevésbé informatív adatok; követeljék meg, hogy a „jobban él-e valaki” kérdésre valódi eredményadatokkal válaszoljanak, lehetőleg kontrafaktuálissal szemben (lásd [kontrafaktuális elemzés](../kontrafaktuális-elemzés/)).
- **Az RBA-mutatók örökre rögzítettnek tekintése**: Friedman módszere kifejezetten iteratív — „adat, történet, mi működik, cselekvési terv” ciklus —, nem egyszeri eredménylap-tervezési gyakorlat.
- **Nincs összehasonlító csoport a „jobban él-e”-hez**: az összehasonlítás nélküli előtte/utána változás összekeveri a program hatását azzal a trenddel, amelyet a népesség úgyis mutatott volna.

## Források

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, „What is Results-Based Accountability?”
  <https://clearimpact.com/results-based-accountability/>
