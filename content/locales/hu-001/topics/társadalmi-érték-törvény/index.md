# Társadalmi érték törvény (Social Value Act)

A Public Services (Social Value) Act 2012 egyesült királysági törvényi kötelezettség, amely előírja az angliai és walesi közhatóságoknak, hogy a közszolgáltatási szerződések beszerzési eljárásának megkezdése előtt mérlegeljék, hogyan javíthatná a beszerzés tárgya az érintett terület gazdasági, társadalmi és környezeti jólétét, és fontolják meg ennek egyeztetését. 2013 januárjában lépett hatályba viszonylag enyhe, „figyelembe kell venni” jellegű kötelezettségként, majd a 2021. januári PPN 06/20 beszerzéspolitikai közlemény (Procurement Policy Note) lényegesen megerősítette, amely előírja, hogy a központi kormányzati szerződéseknél a társadalmi értéket kifejezetten értékelni kell — nem csupán mérlegelni —, az odaítélési szempontok között minimális súllyal.

## Miért fontos

A PPN 06/20 előtt a társadalmi érték „mérlegelése” teljesíthető volt azzal, hogy a megrendelő feljegyezte: gondolkodott rajta, anélkül hogy ennek bármilyen hatása lett volna az odaítélési döntésre — olyan kötelezettség volt ez, amelyet papíron könnyű volt teljesíteni, a gyakorlatban pedig figyelmen kívül hagyni. A PPN 06/20 ezt a rést a központi kormányzati beszerzéseknél bezárta: előírja, hogy a társadalmi értéket az ajánlatértékelés részeként pontozni kell, öt nemzeti prioritási téma köré szervezve — a COVID-19-ből való kilábalás, a gazdasági egyenlőtlenség elleni küzdelem, az éghajlatváltozás elleni küzdelem, az egyenlő esélyek és a jólét —, és általában a Social Value Portal által fenntartott National TOMs (Themes, Outcomes, Measures) keretrendszerrel mérik. A közszféra számára beszerzési, szerződéskezelési vagy ajánlattámogató eszközöket építő szoftvermérnök számára ez az a jogi alap, amelyre az ügyfelének építenie kell, nem választható extra.

## A matematika

A társadalmi érték keretrendszer-jellegű téma; „matematikája” a legtöbb hatóság által használt pontozási szerkezet:

```
Teljes ajánlati pontszám = Ár/költség súlya + Minőség súlya + Társadalmi érték súlya

PPN 06/20 (központi kormányzat): társadalmi érték súlya ≥ a teljes pontszám 10%-a

Társadalmi érték témák (PPN 06/20):
 1. COVID-19-ből való kilábalás
 2. A gazdasági egyenlőtlenség elleni küzdelem
 3. Az éghajlatváltozás elleni küzdelem
 4. Egyenlő esélyek
 5. Jólét
```

Az ajánlattevők vállalásaikat jellemzően az [egységköltség-adatbázisok](../egységköltség-adatbázisok/) segítségével váltják pénzre ezekre a témákra, és ugyanaz a pénzre váltási logika érvényes, mint a [társadalmi megtérülésnél](../társadalmi-megtérülés/): a vállalásnak igazoltnak, a szerződésnek tulajdoníthatónak kell lennie, és nem szabad kétszer számolni más finanszírozással szemben.

## Kidolgozott példa

**Helyi önkormányzati IT-szerződés**: egy 2 millió £-os, 3 éves szerződést 60% minőség, 30% ár, 10% társadalmi érték arányban pontoznak. Az A ajánlattevő 2 gyakornoki helyet, 150 000 £ helyi alvállalkozói kiadást és 200 óra pro bono digitálisképesség-oktatást vállal egy helyi iskolának, amelyet egy egységköltség-adatbázis helyettesítőivel együttesen 90 000 £ többlet társadalmi értékre váltanak. A B ajánlattevő kisebb csomagot vállal, 40 000 £ értékben. Ha a hatóság a társadalmi értéket a legerősebb ajánlathoz arányosan pontozza, az A ajánlattevő megkapja a teljes 10 pontot; a B ajánlattevő 10 × (40 000 £ ÷ 90 000 £) = 4,4 pontot kap — 5,6 pontos különbség, amely akkor is eldöntheti a szerződést, ha a minőség és az ár közel áll egymáshoz.

**Önkéntes szektorbeli ajánlattevő**: egy kis VCSE (önkéntes, közösségi és szociális vállalkozás), amely egy kertészeti fenntartási szerződésre pályázik egy kereskedelmi versenytárssal szemben, nem tud egyedül az egységáron versenyezni, de a Global Value Exchange helyettesítőivel pénzre váltja meglévő közösségi foglalkoztatási és önkéntes vállalásait, igazolt társadalmi értékérvet állítva, amelyet az ár és a minőség mellett pontozni lehet.

## Kapcsolat a szoftverfejlesztéssel

A pénzre váltott társadalmi értékvállalásokkal megnyert ajánlat kötelezettséget teremt a teljesítés igazolására a szerződéskezelés során — olyan eszközökre van szükség, amelyek a gyakornoki kezdéseket, a helyi kiadásokat és az oktatási órákat az ajánlatnál pontozott konkrét vállalásokhoz naplózzák, és a szerződés-felülvizsgálati megbeszéléseket táplálják, ahelyett hogy a szerződés aláírása után elfelejtenék őket. A G-Cloud és a Digital Marketplace listázásai egyre gyakrabban követelnek társadalmi értékről szóló nyilatkozatot a listázás időpontjában. A vállalások mögötti értékelési módszerről lásd a [társadalmi megtérülést](../társadalmi-megtérülés/), az ajánlattevők által használt helyettesítőkről az [egységköltség-adatbázisokat](../egységköltség-adatbázisok/), annak biztosításáról pedig, hogy a teljesített vállalások eredmények, nem puszta tevékenységszámok, az [eredmények és kibocsátások](../eredmények-és-kibocsátások/) témát.

## Buktatók

- **Társadalmi értékkel való látszatkeltés az ajánlatokban.** A homályos vállalások („támogatjuk a helyi közösséget”), amelyek nem mérhetők és a szerződéskezelés során nem kérhetők számon, jól pontozódnak, de semmi ellenőrizhetőt nem teljesítenek.
- **A társadalmi érték döntetlen-feloldóként kezelése.** A PPN 06/20 előírja, hogy a társadalmi értéket az odaítélési szempontokon belül kifejezetten értékelni kell, nem informálisan használni egyébként egyenlő ajánlatok közötti döntetlen feloldására.
- **Nincs szerződéskezelési utókövetés.** Az ajánlatnál pontozott vállalásokat a teljesítés során gyakran soha nem követik nyomon — lásd [haszonmegvalósítás](../haszonmegvalósítás/).
- **Következetlen mérési keretrendszerek a szerződések között.** Hasonló vállalásokhoz különböző helyettesítő-forrásokat használni különböző szerződéseknél értelmetlenné teszi a portfólió-szintű összehasonlítást, ezért léteznek közös keretrendszerek, mint a National TOMs, és megosztott egységköltség-adatbázisok.

## Források

- Public Services (Social Value) Act 2012. <https://www.legislation.gov.uk/ukpga/2012/3/contents>
- Cabinet Office, Procurement Policy Note 06/20, „Taking Account of Social Value in the Award of
  Central Government Contracts.” <https://www.gov.uk/government/publications/procurement-policy-note-0620-taking-account-of-social-value-in-the-award-of-central-government-contracts>
- Social Value Portal, National TOMs Framework. <https://socialvalueportal.com/national-toms/>
