# Érték a pénzért (VFM)

Az érték a pénzért (value for money) az Egyesült Királyság közszférájának hivatalos próbája arra, hogy a kiadás a költség és a haszon elérhető legjobb egyensúlyát valósítja-e meg. A HM Treasury Green Bookja három „E”-n keresztül keretezi — economy (gazdaságosság), efficiency (hatékonyság) és effectiveness (eredményesség) —, a méltányosság (equity) pedig egyre gyakrabban vitatott negyedikként szerepel. Minden, a vizsgálatot kiállni képes közszektorbeli üzleti esetnek mindháromra kifejezetten válaszolnia kell, nem elég azt állítani, hogy a kiadás „megéri”.

## Miért fontos

A VFM nem a „olcsó” szinonimája. A Green Book (HM Treasury, 2022-es kiadás) kifejezetten kimondja, hogy a legalacsonyabb költségű változat megvásárlása (gazdaságosság) anélkül, hogy ellenőriznénk, a kívánt eredményeket hozza-e (eredményesség), gyakori és költséges hiba — az a beszerzés, amely 10%-ot spórol az egységköltségen, de 40%-kal kisebb hatást ér el, rosszabb érték, nem jobb. A három E-s keret arra kényszeríti az üzleti esetet, hogy szétválassza a három valóban eltérő kudarcmódot: túl sokat fizetni a ráfordításokért, elpazarolni a ráfordításokat a kibocsátássá alakítás során, és olyan kibocsátást előállítani, amely nem fordul le olyan eredményekre, amelyeket bárki akart. Az Egyesült Királyság kormányzati kiadási ellenőrzései — a Treasury jóváhagyási pontjai, a National Audit Office (NAO) érték a pénzért vizsgálatai és a tárcák számviteli tisztviselőinek értékelései — erre a háromrészes próbára épülnek, így az a mérnöki üzleti eset, amely csak a költséggel (gazdaságossággal) foglalkozik, a vizsgálaton megbukik még akkor is, ha a technológia kifogástalan.

A „negyedik E”, a méltányosság azért vitatott, mert ütközhet a másik hárommal: egy szolgáltatás országos szinten leghatékonyabb nyújtási módja ritkán a legméltányosabb, mivel a nyújtás oda összpontosítása, ahol a polgárokat a legolcsóbb elérni, gyakran a legnehezebben elérhetők alulszolgálását jelenti. A Green Book 2020-as felülvizsgálata reagált a kritikára (köztük a Treasury Select Committee és az IPPR North 2020-as észrevételeire), hogy a tisztán költség-haszon arányok rendszerszerűen a már jómódú régiókat részesítették előnyben, azzal, hogy megköveteli az értékelésektől az elosztási hatás kifejezett kezelését — lásd [elosztási súlyozás](../elosztási-súlyozás/).

## A matematika

A VFM nem egyetlen arány, hanem háromrészes (vagy négyrészes) diagnosztika, amelyet sorban alkalmaznak:

```
Gazdaságosság: A ráfordításokat a megkövetelt minőség mellett a lehető
               legalacsonyabb ésszerű költségen szerzik be?  (£ ráfordítás-egységenként)

Hatékonyság:   Milyen jól alakulnak a ráfordítások kibocsátássá?
               (kibocsátás / ráfordítás, pl. feldolgozott ügyek ügyintézői óránként)

Eredményesség: A kibocsátások ténylegesen a szándékolt eredményeket hozzák?
               (elért eredmények / szándékolt eredmények)

[Méltányosság]: Igazságosan oszlanak-e el a költségek és a hasznok a
               lakosságban, vagy azokra koncentrálódnak, akiknek a legkevésbé van rá szükségük?
```

A VFM kudarc bármely szakaszban egymástól függetlenül előfordulhat: gazdaságos beszerzés nem hatékony szállítással; a rossz kibocsátás hatékony szállítása; eredményes kimenetek túlzott költségen megvásárolva. Lásd [közszféra-KPI-k](../közszféra-kpi-k/), hogyan fordulnak ezek mérhető mutatókra, és [költséghatékonysági elemzés a kormányzatban](../költséghatékonysági-elemzés-a-kormányzatban/) a formális összehasonlító módszerhez.

## Kidolgozott példa

**Helyi önkormányzati ügyfélközpont**: egy tanács két változatot hasonlít össze egy új ügykezelő rendszerre.

- *A változat*: 600 000 £ licenc (a legolcsóbb elérhető), de az ügyintézők még mindig átlagosan 22 percet töltenek egy üggyel, mert a munkafolyamat rendszerek közötti kézi újrabevitelt igényel — a hatékonyság gyenge.
- *B változat*: 900 000 £ licenc, integrált munkafolyamat, az ügyintézők átlagosan 9 percet töltenek egy üggyel.

A gazdaságosság egyedül A-t részesíti előnyben (300 000 £-gal olcsóbb). De évi 40 000 ügynél A 40 000 × 22/60 = 14 667 munkaórát, B 40 000 × 9/60 = 6000 munkaórát igényel. 28 £/óra teljes terhelt személyi költséggel A évi 410 667 £-ot költ munkaidőre B 168 000 £-jával szemben — évi 242 667 £ hatékonysági különbség, amely 14 hónapon belül elnyeli a kezdeti 300 000 £ gazdaságossági előnyt. A VFM a hatékonyság beszámítása után B-t, nem A-t támogatja.

**Jótékonysági megvalósítási támogatás**: egy támogató 50 000 £-os támogatást, amely 200 sikeres munkaerőpiaci elhelyezést ért el (250 £/elhelyezés — látszólag kiváló gazdaságosság), összehasonlít egy 120 000 £-os támogatással, amely 350 olyan elhelyezést ért el, amely 12 hónapnál tovább tart, míg az első támogatás elhelyezéseinek fele 3 hónapon belül megszűnik. Az eredményesség — tartós eredmények — megfordítja a látszólagos VFM-sorrendet: az első támogatásnál a *tartós* elhelyezés valós költsége 250 £ ÷ 0,5 = 500 £, a másodiknál 120 000/350 ≈ 343 £.

## Kapcsolat a szoftverfejlesztéssel

A VFM fegyelmet ad a mérnöki csapatoknak ahhoz, hogy a technológiai üzleti eseteket úgy keretezzék, ahogy a pénzügyi és ellenőrzési funkciók valójában olvasni fogják őket:

- A gazdaságosságot, a hatékonyságot és az eredményességet külön tételként tüntessék fel az üzleti esetben, ne egyetlen összemosott „érték” számként — a Green Bookon nevelkedett szakértő éppen ezt a bontást fogja kérni.
- Óvakodjanak a beszerzési költség (gazdaságosság) optimalizálásától az integráció és a munkafolyamat hatékonysága rovására, ami a kormányzati IT-ban nagyon gyakori hamis megtakarítás (lásd [teljes birtoklási költség a kormányzati IT-ban](../teljes-birtoklási-költség-a-kormányzati-it-ban/) és [építeni vagy venni a kormányzatban](../építeni-vagy-venni-a-kormányzatban/)).
- Az eredményességhez eredményadatok kellenek, nem csak kibocsátásszámok — kapcsolják a szállítási mutatókat az [eredmények és kibocsátások](../eredmények-és-kibocsátások/) fogalmához és valódi értékeléshez a [kontrafaktuális elemzés](../kontrafaktuális-elemzés/) révén, ahelyett hogy a kibocsátásból eredményre következtetnének.
- Ha egy rendszer egyenlőtlenül szolgál régiók vagy demográfiai csoportok között, a méltányosság jogos VFM-kifogás, nem különálló „jó, ha van” szempont — lásd [digitális befogadás](../digitális-befogadás/).

## Buktatók

- **A VFM azonosítása a legalacsonyabb árral.** A gazdaságosság a próba egyharmada (vagy egynegyede); a Green Book kifejezetten óv az olyan „legalacsonyabb költség” beszerzési szabályoktól, amelyek figyelmen kívül hagyják a hatékonyságot és az eredményességet.
- **Kibocsátások mérése és eredménynek nevezése.** Az ügyátbocsátás (hatékonyság) nem ugyanaz, mint a jól megoldott ügyek (eredményesség); lásd [eredmények és kibocsátások](../eredmények-és-kibocsátások/).
- **A méltányosság opcionálisként kezelése.** A Green Book 2020-as frissítése óta az elosztási hatást a hagyományos három E mellett kell értékelni, nem utólag ráerőltetni; az üzleti eset jóváhagyása utáni utólagos beépítése sokkal nehezebb, mint az elejétől fogva szerepeltetése.
- **Különböző mennyiségű változatok összehasonlítása normalizálás nélkül.** A különböző népességet kiszolgáló változatok egységenkénti VFM-összehasonlításának kontrollálnia kell a méretet, különben a hatékonysági összehasonlítás értelmetlen.

## Források

- HM Treasury, „The Green Book: Central Government Guidance on Appraisal and Evaluation” (2022-es kiadás). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, „Framework to review programmes and projects” és a VFM-tanulmányok módszertana. <https://www.nao.org.uk/>
- HM Treasury, „The Magenta Book: Central Government Guidance on Evaluation” (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, „Transport Infrastructure Investment: Determining Value for Money” (beadvány a Treasury Select Committee 2020-as Green Book regionális torzítást vizsgáló felülvizsgálatához).
