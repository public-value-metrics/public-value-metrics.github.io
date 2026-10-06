# MI értéke a kormányzatban

Az MI értéke a kormányzatban az a követelmény, hogy egy közszolgáltatásban használt MI-rendszer ugyanazt az érték a pénzért és közérték mércét teljesítse, mint bármely más kiadási döntés — ne alacsonyabbat, mert új, és ne magasabbat, mert félnek tőle. Ez az a kérdés, amelyre a szállító csapatnak válaszolnia kell az MI-funkció kiszállítása előtt, nem utána: többet termel-e értéket, mint amennyibe kerül, ha a biztosítékot, a felügyeletet és a kockázatot őszintén beárazzák?

## Miért fontos

Az Egyesült Királyság Central Digital and Data Office (CDDO) szervezete 2024-ben tette közzé a Generative AI Framework for Government dokumentumot, a 2023. júniusi korábbi ideiglenes útmutatóra építve, és tíz alapelv köré szervezte, amelyek lefedik, mi a generatív MI, etikai vonatkozásait, az eszközök biztonságát, a minőségbiztosítási kontrollokat, a teljes generatív MI életciklus kezelését, a valódi felhasználási esetek azonosítását, a kormányzaton belüli együttműködést, az átláthatóságot, a készségeket és az irányítást. A keretrendszer „érdemi emberi kontroll” és teljes életciklus-kezelés iránti ragaszkodása azért létezik, mert az MI-projektek üzleti eseteinek van egy konkrét hibamódja, amely más IT-kiadásnak nincs: egy kísérlet főcím-termelékenységi száma könnyen előállítható és könnyen eltúlozható, mert azelőtt mérik, hogy az eszköz által teremtett ellenőrzési, javítási és felügyeleti terhet beszámítanák. A keretrendszer mellett az Algorithmic Transparency Recording Standard (ATRS) megköveteli, hogy a közintézmények szabványosított nyilvántartást tegyenek közzé — cél, felhasznált adatok, teljesítmény, méltányossági tesztelés, emberi felügyeleti megoldások — az olyan algoritmikus eszközökről, amelyek jelentős befolyással vannak az egyénekre vonatkozó döntésekre, ami az MI-rendszer biztosítási költségét nyilvános adattá teszi, nem olyan belső becslésszé, amelyet egy csapat csendben kihagyhat.

## A matematika

Az MI-bevezetést a szokásos [érték a pénzért](../érték-a-pénzért/) értékelés kiegészítéseként értékelik, nem helyettesítéseként, az MI-specifikus tagokat kifejezetté téve ahelyett, hogy egyetlen „termelékenységi nyereség” számba olvasztanák:

```
Egy MI-rendszer nettó értéke =
    termelékenységi nyereség (megtakarított idő × terhelt személyzeti költség)
  − licenc-/számítási költség
  − emberi ellenőrzési és felügyeleti költség (az MI-kimenet ellenőrzése, mielőtt
    cselekednek rá — ez még érett eszközöknél sem csökken nullára)
  − ATRS-dokumentáció és folyamatos monitorozás költsége
  − a hibákból, torzításból vagy hallucinációból eredő kár kockázattal korrigált költsége,
    súlyozva azzal, hogy ki viseli a kárt (distributional-weighting)

Az a kísérleti termelékenységi szám, amely kihagyja a felügyeleti tagot, nem összehasonlítható
olyan üzletmenet-folytonossági költségalappal, amely már tartalmaz egyenértékű emberi
felülvizsgálatot — lásd ai-productivity-in-the-public-sector a teljesebb
termelékenységmérési fegyelemhez, amelyből ez merít.
```

## Kidolgozott példa

**Helyi önkormányzat generatív MI-eszközt használ az önkormányzati adóval kapcsolatos rutin megkeresésekre adott első válaszok megfogalmazására**: évi 25 000 megkeresés, korábban teljes egészében ügyintézők kezelték átlagosan 14 perc/megkeresés mellett, terhelt személyzeti költség 34 £/óra.

```
Alapszint (MI nélkül) költsége:
  25 000 × (14/60) × 34 £ = 198 333 £/év

Kísérleti főcím-állítás: az MI 90 másodperc alatt megfogalmaz egy választ,
az ügyintéző „csak átnézi és elküldi” — az állított új idő 3 perc
  25 000 × (3/60) × 34 £ = 42 500 £/év
  → állított megtakarítás 155 833 £/év (átalakítónak látszik)

Teljes költségű szám, 3 hónapos éles üzem után mérve, nem a kísérlet
kézzel válogatott tesztesetein:
  Tényleges átnézési + javítási idő válaszonként: 6 perc (a piszkozatok valódi
  szerkesztést igényelnek az összetett vagy érzelmileg érzékeny megkeresésekhez)
  25 000 × (6/60) × 34 £ = 85 000 £/év
  Licenc-/számítási költség: 38 000 £/év
  ATRS-dokumentáció és negyedéves torzítás-/minőségmonitorozás: 14 000 £/év
  Teljes költség = 85 000 + 38 000 + 14 000 = 137 000 £/év

Valódi megtakarítás = 198 333 − 137 000 = 61 333 £/év — valódi és megéri megtartani,
de a kísérlet főcím-állításának jóval kevesebb mint fele, és ennek megtalálásához
őszinte felügyeleti idő-mérés kellett, nem a kísérlet legjobb esetű mérése.
```

## Kapcsolat a szoftverfejlesztéssel

Itt találkozik az [MI-termelékenység a közszférában](../mi-termelékenység-a-közszférában/) és ez a téma: a közszolgáltatásokba MI-funkciókat építő mérnöki csapatok birtokolják azt a műszerezést, amely a kidolgozott példa „valódi” számát lehetővé teszi — a tényleges átnézési idő, a piszkozat és az elküldött válasz közötti szerkesztési távolság és az eszkalációs arány naplózását, a kísérlet bemutató körülményeibe vetett bizalom helyett. Az MI-funkciókat a [digitális szolgáltatási szabvány](../digitális-szolgáltatási-szabvány/) 9. pontja (biztonságos szolgáltatás, felhasználói adatvédelem) szerint kell értékelni, és keresztbe hivatkozni a [közszféra kiberbiztonságának értékével](../a-közszféra-kiberbiztonságának-értéke/), ahol az eszköz állampolgári adatot érint, és minden olyan MI-rendszernek, amely jelentős befolyással van az egyénekre vonatkozó döntésekre, ATRS-nyilvántartás kell ahhoz, hogy értékelésre késznek tekinthető legyen, ugyanúgy, ahogy egy szolgáltatásnak sikeres [digitális szolgáltatási szabvány](../digitális-szolgáltatási-szabvány/) értékelés kell az élesbe lépés előtt.

## Buktatók

- **MI-mosás**: a meglévő szabályalapú automatizálás „MI”-nek átcímkézése, hogy hozzáférjenek az MI-bevezetésre elkülönített finanszírozáshoz vagy figyelemhez, az olyan pontossági vagy torzítási kockázatok nélkül, amelyek a keretrendszer többlet-vizsgálatát valóban indokolják.
- **Kísérleti, nem éles termelékenység mérése**: a kísérletek válogatott teszteseteken futnak, elkötelezett, figyelmes ellenőrökkel; az éles üzem a teljes zűrös esetkeveréken fut, olyan ellenőrökkel, akik idővel automatizálási torzítást fejlesztenek, és alulellenőrzik a kimeneteket — mindkettő torzítja az őszinte felügyeleti költség számot.
- **Az ATRS-regisztráció kihagyása, mert az eszköz „nem igazán automatizált döntéshozatal”**: a szabvány küszöbe az egyénre vonatkozó döntésre gyakorolt jelentős befolyás, amelyet a legtöbb állampolgárokkal szemben álló MI-megfogalmazó vagy szűrő eszköz teljesít, még akkor is, ha egy ember technikailag jóváhagyja.
- **A hibák elosztási hatásának figyelmen kívül hagyása**: egy MI-rendszer az összes felhasználóra átlagolt hibaaránya elrejthet egyes csoportokra sokkal magasabb hiba- vagy torzítási arányt; az [elosztási súlyozást](../elosztási-súlyozás/) a kockázattal korrigált kártagra kell alkalmazni, nem csak az összesített pontossági számra.

## Források

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
