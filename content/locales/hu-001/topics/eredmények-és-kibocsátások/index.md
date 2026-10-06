# Eredmények és kibocsátások

A kibocsátás (output) egy tevékenység közvetlen, megszámlálható terméke — abban a pillanatban létezik, amikor a szállítás megtörténik, függetlenül attól, milyen hatása van. Az eredmény (outcome) az a változás, amely ezt követően az érintett embereknél, helyen vagy rendszerben bekövetkezik. „500 ember vett részt egy álláskeresési workshopon” kibocsátás: akkor is igaz, ha egyikük sem talál munkát. „500 ember elhelyezkedési esélyei javultak” eredményállítás, és a változás bizonyítékát igényli, nem csupán a részvételét — éppen ez az összekeverés okozza a szektorban a legtöbb félrevezető támogatási jelentést a mérési hibák közül szinte bármelyiknél gyakrabban.

## Miért fontos

A HM Treasury Magenta Bookja és az olyan finanszírozók, mint a National Lottery Community Fund, kifejezetten azért követelik meg az eredményjelentést, mert a programok alapértelmezetten kibocsátásokról számolnak be: olcsó megszámolni őket, mindig elérhetők, és mindig pozitívnak látszanak. A kibocsátásszám szó szerint soha nem csökkenhet amiatt, hogy a program kudarcot vall — több lebonyolított alkalom mindig „több”, míg egy eredmény felfedheti, hogy a program nem működik. A National Audit Office ismételten bírálta a kormányzati programokat, amiért a tevékenységi szinteket a siker bizonyítékaként jelentették; az a szoftverrendszer, amely csak a kibocsátások jelentését könnyíti meg, ezt alapértelmezetten megerősíti, mert a kibocsátásokhoz nem kell utánkövetési adatgyűjtés, az eredményekhez igen.

## A matematika

Nincs képlet, de van megbízható próba egy mutató besorolására:

```
Kibocsátás-próba: megszámlálható-e a szállítás pontján, és igaz-e akkor is, ha a címzettet nem érinti?
Eredmény-próba:   kell-e hozzá előtte/utána vagy beavatkozással/anélkül összehasonlítás ahhoz, hogy értelmes legyen?

Ha egy szám igaz lehet úgy is, hogy senkinek nincs haszna belőle, akkor kibocsátás.
```

Ez a tágabb [logikai modell](../logikai-modell/) láncán belül helyezkedik el, és a [változáselméletben](../változáselmélet/) meghatározott eredmény-láncszemekre támaszkodik; az eredmény pénzre váltásához a [társadalmi megtérülés](../társadalmi-megtérülés/) módszerei szolgálnak.

## Kidolgozott példa

**Helyi önkormányzat (foglalkoztatási támogatás)**: kibocsátás — 500 ember vett részt álláskeresési workshopokon. Eredmény — a 12 hónapos utánkövetésnél ezek közül az 500-ból 140 (28%) tartós (6+ hónapos) foglalkoztatásban van. A hasonló jellemzőkkel rendelkező, de a programhoz hozzáférést nem kapó összehasonlító csoport foglalkoztatási alaparánya ugyanabban az időszakban 15%. Nettó eredményjavulás: 28% − 15% = 13 százalékpont, vagyis becslés szerint 500 × 0,13 = 65 további ember dolgozik, akik egyébként nem dolgoznának — ez a tulajdonítható eredmény, amely különbözik mind az 500-as részvételi számtól, mind a 140-es nyers foglalkoztatási számtól.

**Jótékonysági szervezet (olvasástámogató)**: kibocsátás — 1200 olvasási alkalom 300 gyermeknek. Eredmény — az átlagos olvasási kor 6 hónap alatt 8 hónappal javult, a várt természetes 6 hónapos fejlődési alapszinttel szemben. Nettó eredménynyereség: 8 − 6 = 2 hónap többlet-olvasáskor-javulás gyermekenként, amely a programnak tulajdonítható, nem a teljes 8 hónapos szám.

## Kapcsolat a szoftverfejlesztéssel

Az eseménynaplók és tranzakciós rendszerek a kibocsátásokat szinte automatikusan műszerezik — oldalmegtekintések, munkamenetek, lezárt jegyek, lefoglalt időpontok —, mert a rendszer a dolga végzése közben állítja elő őket. Az eredményekhez olyan adatmodell kell, amely ugyanazt az egyént egy későbbi időpontban rögzíti egy alapszinttel vagy összehasonlítással szemben, ezt pedig szándékosan kell beépíteni: utánkövető felmérések, összekapcsolt adminisztratív nyilvántartások vagy összehasonlító kohorsz. Az a jelentéskészítő eszköz, amely csak az előbbit támogatja, észrevétlenül a kibocsátás-alapú jelentés felé tereli a szervezetet, bármit kért is a finanszírozó. Az eredmények elszámoltathatósági láncban elfoglalt helyéről lásd a [logikai modellt](../logikai-modell/), e megkülönböztetés egységköltség-mutatóvá alakításáról a [költség eredményenként](../költség-eredményenként/) témát, a mutatóválasztás tágabb mintájáról pedig a [közszféra-KPI-ket](../közszféra-kpi-k/).

## Buktatók

- **Kibocsátások jelentése eredményként.** Az „500 ember részt vett” hasznot sugall anélkül, hogy bizonyítaná; a részvételt kifejezetten kibocsátásként címkézzék.
- **Nincs alapszint vagy összehasonlító csoport.** Az olyan eredményszám, amely mögött nincs kontrafaktuális — lásd [kontrafaktuális elemzés](../kontrafaktuális-elemzés/) —, nem tudja elkülöníteni a program hatását attól, ami úgyis megtörtént volna.
- **A finanszírozott mutatóra optimalizálás.** Ha a finanszírozás a kibocsátás volumenéhez kötött, a szállító csapatok racionálisan a részvételt maximalizálják a tartós változás helyett, ami a Goodhart-törvény szerinti hibamód.
- **Eredménymosás.** Egy kibocsátási mutató átcímkézése eredményhangzású nyelvezettel („bevonódási eredmények: 500 résztvevő”) anélkül, hogy bármilyen utánkövető mérés állna mögötte.

## Források

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, az eredményjelentésről szóló útmutató. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, az érték a pénzért jelentések módszertana. <https://www.nao.org.uk/>
