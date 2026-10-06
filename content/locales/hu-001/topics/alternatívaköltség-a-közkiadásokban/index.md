# Alternatívaköltség a közkiadásokban

Az alternatívaköltség annak a legjobb alternatívának az értéke, amelyről lemondanak, amikor egy közigazgatási szerv pénzt, munkaidőt vagy politikai tőkét az egyik változatra fordít a másik helyett. Rögzített költségvetésű tárcánál minden egyik programra elköltött font egy olyan font, amelyet nem lehet a következő legjobb programra költeni — a döntés valódi ára nem az, amit elkölt, hanem az, amit kiszorít.

## Miért fontos

A közköltségvetések a kiadási felülvizsgálati időszakon belül készpénzkorlátosak, így — a növekvő magáncéggel ellentétben — egy kormányzati tárca nem tud egyszerűen „több pénzt találni” egy jó ötletre; a finanszírozása azt jelenti, hogy valami mást nem finanszíroznak. A HM Treasury Green Bookja ezt alapvetőnek tekinti: minden értékelésnek össze kell hasonlítania a beavatkozást egy „minimum” alapszinttel *és* ugyanazon erőforrás reális alternatív felhasználásaival, éppen mert a Treasury kiadási csapata soha nem azt kérdezi, hogy „jó-e ez?”, hanem azt, hogy „jobb-e ez annál, amit mást lehetne venni ezen a pénzen?”. A Green Book alapvető értékelési elve — hogy a közforrásokat a fontonkénti legmagasabb nettó társadalmi értékű beavatkozáshoz kell irányítani — az alternatívaköltség politikaként megfogalmazva.

Ezt könnyű kimondani és nehéz alkalmazni, mert a „következő legjobb alternatíva” ritkán látszik egyetlen üzleti esetben. Egy 2 millió £-os ifjúsági foglalkoztatási támogatási programot az üzleti eset a semmittevéssel hasonlítja össze — de a tisztességes összehasonlítási alap a következő legjobb ifjúsági foglalkoztatási beavatkozás, vagy tulajdonképpen a 2 millió £ következő legjobb felhasználása bárhol a portfólióban, a nem foglalkoztatási kiadásokat is beleértve. A Magenta Book (HM Treasury, 2020) kifejezetten figyelmeztet, hogy a „beavatkozással” és a „beavatkozás nélkül” összehasonlító értékelések alulbecsülik azt a mércét, amelyet a beavatkozásnak át kell ugrania, mert a „e beavatkozás nélkül” nem ugyanaz, mint a „semmivel” — a felszabadított pénz valami mást finanszíroz.

## A matematika

```
A választás alternatívaköltsége A = a legjobb lemondott B alternatíva értéke

A nettó közérték A = érték(A) − érték(B), nem érték(A) − 0
```

Nincs univerzális képlet, mert a lemondott alternatíva kontextusfüggő, de a fegyelem általánosítható: azonosítsák ugyanazon költségvetési sor reális következő legjobb felhasználását (nem egy idealizált „semmittevést”), értékeljék ugyanazon az alapon (ahol lehet, pénzben, a [társadalmi költség-haszon elemzés](../társadalmi-költség-haszon-elemzés/) szerint), és vonják le.

## Kidolgozott példa

**Tárcai költségvetési sor**: egy 5 millió £-os digitális átalakítási alap ebben a pénzügyi évben pontosan az egyik két javaslatot finanszírozhatja.

- *A változat*: új ügykezelő platform, pénzben kifejezett haszna 7,2 millió £ 5 év alatt (hatékonysági megtakarítás plusz gyorsabb ügymegoldás).
- *B változat*: három tárca között megosztott személyazonosság-ellenőrző szolgáltatás, pénzben kifejezett haszna 6,4 millió £ 5 év alatt.

Az A-ra vonatkozó naiv üzleti eset 7,2 millió £ hasznot vet össze 5 millió £ költséggel, és 1,44:1 haszon-költség arányt jelent — látszólag erős. De mivel A és B ugyanazért az 5 millió £-ért versenyez, az A választásának alternatívaköltsége B lemondott 6,4 millió £ haszna. Az A *nettó* esete a reális alternatívával szemben csak 7,2 − 6,4 = 0,8 millió £, nem a teljes 7,2 milliós főcím. Ha egy harmadik, C változat 7,5 millió £ hasznot kínálna ugyanazért az 5 millióért, A finanszírozása C helyett 0,3 millió £ közértéket semmisítene meg, bár A saját üzleti esete elszigetelten teljesen indokoltnak látszik.

**Helyi önkormányzati munkaidő**: egy tanács háromfős adatcsapata vagy lakáslista-irányítópultot építhet (becsült évi 400 ügyintézői óra megtakarítás, 28 £/órával = 11 200 £/év), vagy járulékcsalás-szűrő eszközt (becsült évi 85 000 £ helytelen kifizetés megelőzése). Az irányítópult építésének alternatívaköltsége évi 85 000 £ lemondott haszon, nem csupán az adatcsapat bére — a „díjmentes” belső fejlesztés valódi költsége a sokkal nagyobb haszon, amelyet a csapat máshol hozhatott volna létre.

## Kapcsolat a szoftverfejlesztéssel

A mérnöki kapacitás egy közigazgatási szervezeten belül maga is korlátos költségvetés — sprintkapacitás, nem font —, és ugyanez a fegyelem közvetlenül érvényes:

- Mindig nevezzék meg az összehasonlítási alapot: egy funkció üzleti esetében szerepeljen, mit szállíthatna ugyanaz a csapat ugyanennyi hét alatt, nem csak a saját megtérülése.
- A „van szabad mérnöki kapacitásunk” egy alternatívaköltség-elemzés kezdete, nem a vége — a szabad kapacitásnak is van legjobb alternatív felhasználása, még ha az a technikai adósság törlesztése is (lásd [technikai adósság mint közérték-erózió](../technikai-adósság-mint-közérték-erózió/)).
- Kapcsolják ezt közvetlenül az [érték a pénzért](../érték-a-pénzért/) fogalmához: a VFM „gazdaságosság” próbája őszinte alternatívaköltség-összehasonlítás nélkül értelmetlen, és a [késedelem költsége a közprogramokban](../a-késedelem-költsége-a-közprogramokban/) fogalmához, amely ugyanennek a lemondott alternatíva-logikának az időbeli dimenzióját árazza.

## Buktatók

- **Összehasonlítás a „semmittevéssel” a következő legjobb alternatíva helyett.** A Green Book éppen azért kér „minimum” alapszintet, mert a valódi alternatívaköltség ritkán nulla; az az üzleti eset, amely csak a „semmittevés” mércéjét ugorja át, nem mutatta meg, hogy a reális alternatívát legyőzi.
- **A tárcák közötti verseny figyelmen kívül hagyása ugyanazért a keretért.** Az egy igazgatóságon belül elkülönítettnek látszó költségvetési sorok gyakran magasabb szinten (kiadási felülvizsgálat, beruházási program) versenyeznek, ahol a valódi alternatívaköltség realizálódik.
- **Annak feltételezése, hogy a felszabadított munkaidőnek nincs további értéke.** A „megtakarított” idő csak akkor teremt értéket, ha értékes feladatra csoportosítják át; ha az alternatív felhasználás nem létezik, a megtakarítás csak névleges.

## Források

- HM Treasury, „The Green Book: Central Government Guidance on Appraisal and Evaluation” (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, „The Magenta Book: Central Government Guidance on Evaluation” (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. „Methods for the estimation of the NICE cost-effectiveness threshold.” Health Technology Assessment, 2015;19(14) — az alternatívaköltség mint kötelező korlát kanonikus empirikus bemutatása rögzített közköltségvetésben. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
