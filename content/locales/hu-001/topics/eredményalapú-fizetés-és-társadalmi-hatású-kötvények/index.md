# Eredményalapú fizetés és társadalmi hatású kötvények (PbR/SIB)

Az eredményalapú fizetés (payment by results, PbR) a szolgáltatót az elért, ellenőrzött eredmények alapján fizeti, nem az elvégzett tevékenységek alapján. A társadalmi hatású kötvény (social impact bond, SIB) egy konkrét PbR-finanszírozási szerkezet, amelyben magán- vagy jótékonysági befektetők előre finanszírozzák a szolgáltatásnyújtást, és a kormányzati megrendelő csak akkor fizeti vissza őket — hozammal —, ha a függetlenül mért eredmények elérik a megegyezett küszöböket, a szállítási kockázatot az adófizetőről a befektetőre helyezve.

## Miért fontos

A világ első SIB-je 2010 szeptemberében indult a HMP Peterborough-ban: a Social Finance 5 millió £-ot gyűjtött 17 befektetőtől a „One Service” finanszírozására, amely rövid ítéletű (12 hónap alatti) fogvatartottakkal dolgozott az újraelkövetés csökkentésén, és az Igazságügyi Minisztérium valamint a Big Lottery Fund úgy állapodott meg, hogy csak akkor fizeti vissza a befektetőket, ha az újraelítélési események legalább 7,5%-kal csökkennek egy illesztett országos összehasonlító kohorszhoz képest. A peterborough-i kísérlet utolsó kohorsza 9,7%-os csökkenést mért az újraelítélésekben, kényelmesen a küszöb felett, és a befektetőket hozammal fizették vissza. A mechanizmus azért számított, mert egy konkrét megrendelési problémát oldott meg: a kormány eredményekért akart fizetni ráfordítások helyett, de nem tudta vállalni egy esetleg nem működő beavatkozás pénzügyi kockázatát, ezért a SIB-szerkezet ezt a kockázatot a vállalni hajlandó befektetőkre helyezte. Az oxfordi Blavatnik School of Government Government Outcomes Lab-ja (GO Lab) ma a PbR és SIB teljesítményéről a világ legteljesebb nyilvános bizonyítékbázisát tartja fenn, világszerte jóval több mint 200 hatáskötvényt követve, és közzéteszi a kutatást arról, mely tervezési jellemzők korrelálnak a sikerrel vagy kudarccal. A bizonyítékbázis ismételten visszatérő tanulsága az, hogy a *választott eredménymutató*, és az, hogy ki viseli a hiányának kockázatát, szinte mindent meghatároz abból, hogyan viselkedik ténylegesen egy PbR-szerződés.

## A matematika

```
PbR-fizetés = alapfizetés (ha van) + Σ (elért eredmény × eredményenkénti egységár)

Társadalmi hatású kötvény befektetői hozama:
  Befektetői kiadás  = a szolgáltatásnyújtást finanszírozó előzetes tőke
  Eredményfizetés    = a megrendelő csak akkor fizet, ha az eredmény ≥ küszöb, arányosan azzal,
                       hogy a teljesítmény mennyivel a küszöb felett van
  Befektetői hozam   = kapott eredményfizetések − befektetői kiadás
                       (hozamráta, gyakran plafonozott, a vállalt kockázatot tükrözve)

Kulcsfontosságú tervezési paraméterek, amelyek a teljes szerződés viselkedését meghatározzák:
  Eredménymutató        — eredménynek kell lennie, nem kibocsátásnak (lásd outcomes-vs-outputs)
  Összehasonlítás/kontrafaktuális — általában illesztett kohorsz (lásd counterfactual-analysis)
  Fizetési küszöb       — minimális javulás, amely előtt semmilyen fizetés nem indul
  Fizetési görbe        — lineáris, lépcsőzetes vagy a küszöb felett plafonozott
  Tulajdonítási/holtteher-leszámítás — lásd additionality-and-deadweight
```

## Kidolgozott példa

**Peterborough One Service** (szemléltető számok közzétett értékelésekből):

```
Összegyűjtött befektetői tőke:    5 000 000 £
Kohorsz:                          ~3000 rövid ítéletű férfi fogvatartott két kohorszban
Küszöb:                           ≥7,5%-os csökkenés az újraelítélési eseményekben az illesztett
                                  országos összehasonlító csoporthoz képest, különben nincs fizetés
1. kohorsz eredménye:             8,4%-os csökkenés — az eredeti szabályok szerint
                                  önmagában ennek a kohorsznak a szerződéses mércéje alatt
Összesített/végső kohorsz-eredmény: 9,7%-os csökkenés — küszöb felett
Eredményfizetés:                  a kormány (Igazságügyi Minisztérium / Big Lottery Fund)
                                  a küszöb feletti százalékpontonként fizet, finanszírozva
                                  a befektetői visszafizetést és a hozamot
```

**Helyi önkormányzati PbR-szerződés (szemléltető)**: egy családi beavatkozási szolgáltatást 4000 £ beutalt családonként (tevékenységi fizetés) plusz 6000 £ azon családonként rendelnek meg, amelynél a lezárás után 12 hónappal nincs további gyermekvédelmi beutalás (eredményfizetés). 200 család beutalva, 150 eset lezárva, 96 marad beutalásmentes 12 hónap után:

```
Tevékenységi fizetés = 200 × 4000 £ = 800 000 £
Eredményfizetés      = 96 × 6000 £  = 576 000 £
Teljes szerződéses költség = 1 376 000 £ 96 megerősített tartós eredményért
Költség megerősített eredményenként ≈ 14 333 £ (lásd cost-per-outcome)
```

## Kapcsolat a szoftverfejlesztéssel

Az eredményalapú fizetés előbb ösztönző-összehangolási probléma, mint adatprobléma, és az adatrendszer az a hely, ahol ez az összehangolás vagy megáll, vagy megtörik. A független, hamisítás-bizonyító eredményellenőrzés az egész játék: a megrendelőnek és a szolgáltatónak ellentétes ösztönzői vannak egy kétértelmű eset kódolásában, ezért az eredményeket rögzítő rendszernek auditnyomvonalra, a független ellenőrzővel (gyakran a szolgáltatótól eltérő szerv, néha hivatalos statisztikai szerv, amely rendőrségi vagy ellátási nyilvántartásokhoz illeszt) kötött adatmegosztási megállapodásra, és az eredménydefiníció megváltoztathatatlan verziózására van szüksége — a [közszféra-KPI-k](../közszféra-kpi-k/) „a mutató újradefiniálása” buktatójának PbR-megfelelőjére. A tulajdonítási számítások a [kontrafaktuális elemzés](../kontrafaktuális-elemzés/) illesztett kohorsz módszereire támaszkodnak, amelyekhez reprodukálható, auditálható kód kell, nem egyszeri táblázat. És maga a mutatónak valódi eredménynek kell lennie, nem helyettesítő tevékenységnek — lásd [eredmények és kibocsátások](../eredmények-és-kibocsátások/) —, mert egy kibocsátásért fizető PbR-szerződés csak átcímkézi a megszokott finanszírozást többlet tranzakciós költséggel. Ahol egy SIB társadalmi megtérülését előretekintően modellezik, ez az értékelés jellemzően közvetlenül a [társadalmi megtérülés](../társadalmi-megtérülés/) módszertanából merít.

## Buktatók

- **Könnyen kijátszható helyettesítő eredményért fizetés**: az „alkalmakon való részvétel” eredménynek öltöztetett tevékenység; követeljenek olyan mérőszámot, amely a keresett tényleges változást tükrözi (újraelkövetés, foglalkoztatás, lakhatási stabilitás).
- **Nincs hiteles kontrafaktuális**: illesztett összehasonlító csoport nélkül a javulás lehet átlaghoz való visszatérés vagy tágabb trend, nem a program hatása — lásd [kontrafaktuális elemzés](../kontrafaktuális-elemzés/) és [többlethatás és holtteher](../többlethatás-és-holtteher/).
- **A tranzakciós és értékelési költségek alábecslése**: a PbR/SIB programok független ellenőrzése, adat-összekapcsolása és szerződéskezelése rendszeresen a szerződéses érték kétszámjegyű százalékára rúg — a GO Lab bizonyítékbázisa ezt a programok megszüntetésének visszatérő okaként dokumentálja.
- **Szemezgetés vagy „parkoltatás”**: az eredményenként fizetett szolgáltatóknak közvetlen ösztönzőjük van arra, hogy azokat az ügyfeleket részesítsék előnyben, akik úgyis sikeresek lennének, és a legnehezebb eseteket háttérbe szorítsák — tervezzenek fizetési szinteket vagy esetösszetétel-korrekciót ennek ellensúlyozására.

## Források

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, „Peterborough Social Impact Bond” értékelési összefoglalók.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, „Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond.”
