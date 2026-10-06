# Költség kedvezményezettenként

A költség kedvezményezettenként a program teljes költsége osztva azon egyedi személyek számával, akik megkaptak egy szolgáltatást — bárki, akit elértek, függetlenül attól, hogy körülményei ténylegesen megváltoztak-e. Ez a leggyorsabb hatékonysági szám, amelyet egy szervezet előállíthat, mert az „kit szolgáltunk ki” szinte mindig már az ügykezelő rendszerben van, míg a „kinek segítettünk” általában nem.

## Miért fontos

A finanszírozók állandóan kérik a költséget kedvezményezettenként, védhető okokból: azonnal elérhető, nagyon különböző programok portfóliójában összehasonlítható, és őszinte az elérésről olyan módon, ahogy az eredményállítások — amelyeket lassabb igazolni és könnyebb eltúlozni — nem. Az Egyesült Királyság Charities SORP-ja (Statement of Recommended Practice), amely az FRS 102 szerint szabályozza a jótékonysági szervezetek beszámolását, megköveteli, hogy a kuratóriumi éves jelentések leírják a célokhoz mért eredményeket, de a legtöbb kisebb jótékonysági szervezet vezetői beszámolói még mindig elérésalapú egységköltségekre állnak be alapértelmezetten, mert olcsó előállítani és auditbarát.

A veszély abban áll, hogy a költséget kedvezményezettenként úgy kezelik, mintha olyan kérdésre válaszolna, amelyre nem tud: hogy működött-e a pénz. Erre valóban válaszoló mutatóról lásd a [költség eredményenként](../költség-eredményenként/) témát, az alapul szolgáló megkülönböztetésről pedig az [eredmények és kibocsátások](../eredmények-és-kibocsátások/) témát. A költség kedvezményezettenként jogos szűrési és elérési mutató — megmondja a finanszírozónak, milyen messzire nyúlik a pénz —, de az alacsony költség kedvezményezettenként jelenthet valódi hatékonyságot, vagy olyan vékony szolgáltatást, amely semmin nem változtat.

## A matematika

```
Költség kedvezményezettenként = A program teljes költsége / A kiszolgált egyedi személyek száma

Szembeállítva:
Költség eredményenként        = A program teljes költsége / A meghatározott eredményt elérő személyek száma

A költség kedvezményezettenként mindig ≤ a költség eredményenként, mert az eredménypopuláció
a kedvezményezetti populáció részhalmaza (gyakran kis részhalmaza).
```

## Kidolgozott példa

**Élelmiszerbank, ugyanaz az év, mint a költség eredményenként példában**:

- A program teljes költsége: 450 000 £
- Kiszolgált egyedi háztartások (három vagy több csomag): 1800

```
Költség kedvezményezettenként = 450 000 £ / 1800 = 250 £ kiszolgált háztartásonként
```

Hasonlítsák össze a két mutatót egymás mellett:

| Mutató | Nevező | Eredmény |
|---|---|---|
| Költség kedvezményezettenként | 1800 kiszolgált háztartás | 250 £ |
| Költség eredményenként | 630 élelmezésbiztonságot elérő háztartás | 714 £ |

Az a finanszírozó, aki csak a 250 £-ot látja, arra következtethet, hogy ez egy rendkívül hatékony jótékonysági szervezet. Az a finanszírozó, aki mindkét számot látja, hasznosabb kérdést tehet fel: az elérés (1800) és az eredmény (630) közötti rés adatgyűjtési rés, tervezési rés, vagy őszinte tükre annak, milyen nehéz az élelmezésbiztonságot egyedül élelmiszersegéllyel elérni?

**Munkaképző jótékonysági szervezet, szemléltető**: költség kedvezményezettenként (beiratkozott) = 2000 £; költség eredményenként (tartós foglalkoztatás 6 hónap után) = 11 000 £, mert a beiratkozottaknak csak 18%-a fejezi be a programot és talál tartós munkát. A két szám ötszörös eltérése gyakori, ahol a befejezési vagy tartóssági arányok alacsonyak — egy képző jótékonysági szervezet és egy élelmiszerbank itt szerkezetileg azonos.

## Kapcsolat a szoftverfejlesztéssel

A költség kedvezményezettenként az alapértelmezett mutató a nonprofit szoftverekben, mert ez az a mutató, amely további munka nélkül kihullik egy kedvezményezetti rekordból: hozzanak létre egy esetet, naplózzanak egy szolgáltatást, számolják meg a sorokat. Olyan rendszer építése, amely a költséget eredményenként is támogatja, azt jelenti, hogy tudatosan hozzáadnak egy második elsőrangú entitást — egy dátumozott, a szolgáltatásnyújtástól függetlenül meghatározott eredményeseményt —, és ellenállnak a kísértésnek, hogy az „eset lezárva” álljon az „eredmény elérve” helyén. Támogatáskezelő vagy CRM-platform hatókörének meghatározásakor kérdezzék meg, hogy minden irányítópult e két mutató közül melyiket mutatja valójában, és ennek megfelelően címkézzék; a kettő egyetlen „hatás” csempébe keverése a szoftverszintű okok egyik leggyakoribbika az alábbi buktatóknak. Bármelyik mutató helyes címkézés utáni összehasonlításáról lásd az [egységköltség-adatbázisokat](../egységköltség-adatbázisok/).

## Buktatók

- **A költség kedvezményezettenként bemutatása hatásként.** Elérést mér, nem változást. Az irányítópultokat és jelentéseket „költség kiszolgált személyenként” címkével lássák el, ne „költség megsegített személyenként”.
- **Kettős számítás programok között.** Az a személy, aki ugyanattól a jótékonysági szervezettől élelmiszercsomagot és adósságtanácsadást is kap, egy kedvezményezett, nem kettő, ha a nevező az egyedi elérést hivatott leírni; döntsenek és dokumentálják, melyik konvenciót használják.
- **Az alacsonyabb szám mindig jobbnak tekintése.** Egy bejárós ebédklub mindig megveri az intenzív ügykezelő szolgáltatást a költségen kedvezményezettenként, mert olcsóbb valakit könnyedén érinteni. Ez semmit nem mond arról, melyik hoz tartósabb változást fontonként.
- **A nevezők csendes cseréje jelentések között.** Az egyik éves jelentésben a „beiratkozottakra”, a következőben a „befejezőkre” idézett költség kedvezményezettenként nem összehasonlítható évről évre; a nevezőt minden alkalommal tüntessék fel.

## Források

- Charity Commission for England and Wales, útmutató a jótékonysági szervezetek beszámolásáról. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), „Four Pillar Approach.” <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
