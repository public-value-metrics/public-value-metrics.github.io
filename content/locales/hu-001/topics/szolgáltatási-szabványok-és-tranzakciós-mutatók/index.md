# Szolgáltatási szabványok és tranzakciós mutatók

A GOV.UK Service Standard az Egyesült Királyság kormányának 14 pontos ellenőrzőlistája egy közszolgáltatási digitális szolgáltatás építéséhez és működtetéséhez, és mellé tartozik egy kis, kötelező kvantitatív tranzakciós mutatókészlet — tranzakciónkénti költség, befejezési arány, digitális igénybevétel és felhasználói elégedettség —, amelyet minden élő központi kormányzati szolgáltatásnál közzé kell tennie a csapatoknak. A szabvány és a mutatók együtt az ebben az adattárban szereplő tágabb közérték- és KPI-keretrendszerek operatív, mindennapi specializációja, kifejezetten a szoftverszállító csapatoknak szánva.

## Miért fontos

A GOV.UK service manualjában gondozott Service Standard megköveteli, hogy egy kormányzati digitális szolgáltatás minden időponthoz kötött értékelése (alfa, béta, élő) — 14 pontja között — igazolja, hogy a csapat érti a felhasználók szükségleteit, multidiszciplináris csapatban dolgozik, gyakran iterál és fejlődik, és *értékeli az eszközöket, rendszereket és munkamódszereket*. Történetileg ez egy nyilvános Performance Platform mellett állt, ahol minden élő szolgáltatás nyíltan közzétette tranzakciós adatait; ez a platform azóta megszűnt, de e négy alapmutató mérésének és közzétételének mögöttes kötelezettsége a service manual „measuring success” útmutatóján keresztül fennmarad. Az ok, amiért ez különbözik egy általános szoftver-KPI irányítópulttól, az, hogy e mutatókat kifejezetten egyetlen összekapcsolt gazdasági modellként tervezték, nem négy független pontszámként: a digitális kormányzat teljes megtakarítási érve — a Government Digital Service Digital Efficiency Reportja a digitális tranzakciókat nagyjából 20-szor olcsóbbnak találta a telefonosnál és nagyjából 50-szer olcsóbbnak az összehasonlítható helyi önkormányzati szolgáltatások személyes ügyintézésénél — csak akkor valósul meg, ha a befejezési arány magas marad és a digitális igénybevétel valóban nő, nem pusztán egy olcsó csatorna hozzáadása egy változatlan, drága mellé.

## A matematika

```
Tranzakciónkénti költség = a szolgáltatás összes működési költsége / befejezett tranzakciók száma
Befejezési arány         = befejezett tranzakciók / megkezdett tranzakciók × 100
Digitális igénybevétel   = digitális csatornás tranzakciók / összes csatornás tranzakció × 100
Felhasználói elégedettség = % elégedett + nagyon elégedett, szolgáltatáson belüli 5 pontos felmérés

Csatornaváltási megtakarítás = tranzakciós volumen × igénybevételi eltolódás × (a régi csatornán
                                a tranzakciónkénti költség − a digitális tranzakciónkénti költség)

Hibakereslet-költség = (1 − befejezési arány) × digitálisan megkísérelt tranzakciók ×
                       annak a tartalék csatornának a költsége, amelyet e felhasználók helyette használnak
```

## Kidolgozott példa

**Szemléltető központi kormányzati engedély-megújítási szolgáltatás**, évi 2 millió tranzakció, jelenleg 65% telefon (3,00 £/tranzakció) és 35% digitális (0,30 £/tranzakció), befejezési arány 80%. A 14 pontos Service Standard szerinti újratervezés a digitális igénybevételt 60%-ra, a befejezést 92%-ra emeli:

```
Igénybevételi eltolódás megtakarítása = 2 000 000 × 0,25 × (3,00 − 0,30) = 1 350 000 £/év

Hibakereslet-költség, előtte:
  2 000 000 × 0,35 × (1 − 0,80) × 3,00 £ = 420 000 £/év (a lemorzsolódók telefonra térnek vissza)

Hibakereslet-költség, utána:
  2 000 000 × 0,60 × (1 − 0,92) × 3,00 £ = 288 000 £/év

Nettó hibakereslet-megtakarítás = 420 000 £ − 288 000 £ = 132 000 £/év

Teljes éves megtakarítás ≈ 1 350 000 £ + 132 000 £ = 1 482 000 £/év
```

A számtan kifejezetté teszi, miért nem másodlagos mutató a befejezési arány: a 80%-ról 92%-ra javulás nélkül az igénybevételi eltolódás megtakarítását részben visszavenné a hibakereslet, amely a frusztrált digitális felhasználókat egyenesen vissza a drága telefoncsatornára irányítja.

## Kapcsolat a szoftverfejlesztéssel

E négy mutató a költség–következmény irányítópult működő példája: egy költségmutató elkülönítve három eredmény-/minőségmutatótól, szándékosan soha nem egyetlen pontszámmá sűrítve — ugyanaz a fegyelem, amelyet a [közszféra-KPI-k](../közszféra-kpi-k/) érvelnek. A mérnökök számára ez konkrét, birtokolható munkává bomlik: a befejezési arány tölcsér-műszerezési probléma, és az út minden lemorzsolódási pontja elvileg megtalálható és javítható; a tranzakciónkénti költséghez valódi egységköltség-számvitel kell, beleértve a személyzettel támogatott és papíralapú csatornák költségeit, nem csak a felhőtárhely-kiadást (lásd [tranzakciónkénti költség](../tranzakciónkénti-költség/) és [teljes birtoklási költség a kormányzati IT-ban](../teljes-birtoklási-költség-a-kormányzati-it-ban/)); a digitális igénybevétel pedig hatékonysági jelmezbe bújtatott méltányossági mutató — azok az állampolgárok, akik nem tudnak vagy nem akarnak csatornát váltani, aránytalanul idősek, fogyatékkal élők vagy digitálisan kirekesztettek, így az agresszív csatornabezárás a „megtakarítást” hozzáférési sérelemmé alakítja (lásd [digitális befogadás](../digitális-befogadás/) és [csatornaváltási megtakarítások](../csatornaváltási-megtakarítások/)). A 14 pontos szabvány maga a számok mögötti folyamatspecifikáció — a teljes szabványról lásd a [digitális szolgáltatási szabványt](../digitális-szolgáltatási-szabvány/), az itteni elégedettségi szám tágabb bizalommérésihez viszonyáról pedig az [állampolgári elégedettségi mutatókat](../állampolgári-elégedettségi-mutatók/).

## Buktatók

- **Az alternatív csatorna bezárásával elért igénybevétel**: egy telefonvonal bezárása számtanilag emeli a digitális igénybevételi százalékot, miközben a hibakeresletet arra a csatornára szórja, amely megmarad (gyakran drágább támogatott digitális vagy személyes útvonal); mindig a teljes rendszerköltséget mérjék, ne csak az arányt.
- **A befejezési arány mérése a tölcsér második lépésétől**: a „megkezdett” szám indítása az első valódi lemorzsolódási pont után hízelgi a befejezési arányt, és elrejti a legnagyobb javítható veszteséget.
- **A tranzakciónkénti költség a támogatott digitális segítségnyújtás nélkül**: egy csak digitális egységköltség, amely figyelmen kívül hagyja a személyzet által az önkiszolgálásra képtelen felhasználók segítésére fordított időt, alábecsüli a csatorna valódi költségét.
- **Mutatók közzététele a szolgáltatások közötti közös definíció nélkül**: a „tranzakció” és a „befejezett” különböző szolgáltatási csapatoknál mást jelent, hacsak a definíciókat nem szabványosítják és verziózzák, ami megbízhatatlanná teszi a szolgáltatások közötti összehasonlítást.

## Források

- GOV.UK Service Manual, „The Service Standard.” <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, „Measuring Success — Data You Must Publish.”
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, „Digital Efficiency Report.”
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
