# Állampolgári elégedettségi mutatók

Az állampolgári elégedettségi mutatók azt mérik, hogyan értékelik az emberek egy közszolgáltatással szerzett közvetlen tapasztalatukat — megkülönböztetve az intézményekbe vetett általános bizalomtól, és attól, hogy a szolgáltatás ténylegesen jó eredményt ért-e el. Egy szolgáltatás lehet kedvelt és hatástalan, vagy hatékony és nem kedvelt; a kettő közötti rés önmagában diagnosztikai információ, amelyet egy szállító csapatnak figyelnie kell.

## Miért fontos

Az elégedettséget két különböző magasságban mérik, amelyeket rutinszerűen összekevernek. Szolgáltatási szinten az Egyesült Királyság mára megszűnt Performance Platformja és a mai GOV.UK service manual szolgáltatásonkénti elégedettségi felmérést ír elő (jellemzően ötpontos „nagyon elégedett”-től „nagyon elégedetlen”-ig terjedő skálán, a tranzakció pontján lebonyolítva) a négy kötelező szolgáltatási KPI egyikeként — lásd [szolgáltatási szabványok és tranzakciós mutatók](../szolgáltatási-szabványok-és-tranzakciós-mutatók/). Intézményi szinten az UK Civil Service People Survey évente méri az alkalmazotti elkötelezettséget és tapasztalatot minden központi kormányzati tárcánál, külön pedig az OECD „Trust in Government” programja a nyilvános bizalmat méri a nemzeti kormányokban a tagállamok között, nyomon követve a hosszú távú csökkenési és helyreállási mintát, amelyet erősen alakítanak a válságok (a 2008-as pénzügyi válság és a COVID-19-világjárvány egyaránt éles, látható mozgásokat okozott az OECD bizalmi adataiban). Azért kell az állampolgároknak szolgáltatást építő mérnököknek az elégedettséget és az eredményt egymástól elkülönítve tartaniuk, mert ez egy ismert hibamód a szolgáltatástervezésben: egy ellátási igényléshez készült, gyönyörűen megtervezett, könnyen használható digitális űrlap nagyon magas elégedettséget érhet el, miközben a mögöttes szakpolitika — jogosultsági szabályok, feldolgozási hátralékok, megítélt összegek — az igénylőt nem juttatja jobb helyzetbe. Az elégedettség a felületet méri; nem méri a mögötte szállított értéket.

## A matematika

```
Nettó elégedettség = % elégedett (vagy nagyon elégedett) − % elégedetlen (vagy nagyon elégedetlen)
                     (a semleges/nincs-véleményem válaszokat mindkét tagból kizárják, de beszámítják
                     a válaszalapba az egyes százalékok kiszámításához)

Elégedettség–eredmény rés = elégedettségi pontszám − eredményelérési pontszám
                     (mindkettő 0–100-ra normalizálva; nagy pozitív rés olyan szolgáltatást jelez,
                     amely „jól érződik”, de a lényegben alulteljesít)

Bizalmi index (OECD-stílusú) = a felmérés válaszadóinak %-a, akik „igen”-nel válaszolnak:
                     „bízik-e a [nemzeti kormányban]?”
                     idősorként követve, jellemzően életkor, jövedelem és
                     iskolai végzettség szerint bontva
```

## Kidolgozott példa

**Helyi önkormányzati adó e-számlázási szolgáltatása**: egy sikeres tranzakció pontján végzett elégedettségi felmérés 2400 válaszadót mutat: 1650 elégedett/nagyon elégedett, 250 elégedetlen/nagyon elégedetlen, 500 semleges.

```
Nettó elégedettség = (1650/2400 × 100) − (250/2400 × 100)
                   = 68,75% − 10,42%
                   = +58,3 nettó elégedettség
```

Ez önmagában erősnek látszik. De a felmérést csak azoknak a felhasználóknak mutatják meg, akik *sikeresen* befejezik a tranzakciót — ismert mérési torzítás (lásd lent a buktatókat). A [szolgáltatási szabványok és tranzakciós mutatók](../szolgáltatási-szabványok-és-tranzakciós-mutatók/) befejezési arány mutatójával párosítva kiderül, hogy a befejezés csak 71%, ami azt jelenti:

```
A valódi népességi elégedettség a 29%-nál nem mért, akik elhagyták az utat —
valószínűleg a legelégedetlenebb kohorsz, mivel a lemorzsolódás maga is erős negatív
jel, amelyet a felmérés soha nem rögzít.
```

**Nemzeti szintű szemléltetés (egy OECD-stílusú bizalmi sorozat szerkezete)**: a nemzeti kormányba vetett bizalom az 1. évben 42%, a 2. évben (válságév) 34%-ra esik, a 3. évben 39%-ra áll helyre — az OECD által a tagállamokban nagy válságok után dokumentált sokk-és-részleges-helyreállás mintára jellemző pálya.

## Kapcsolat a szoftverfejlesztéssel

Az elégedettségi felméréseket egy felhasználói út minden érdemi kilépési pontján műszerezzék, ne csak a sikeres befejezésnél — ez a leggyakoribb mérnöki hiba ezen a területen, amely csendben túlélési torzítású hiúsági mutatóvá alakítja az elégedettségi mérőszámot. Ahol lehetséges, párosítsák az elégedettségi pontszámot befejezési vagy eredménymutatóval ugyanazon az irányítópulton, hogy egy csapat ne ünnepelhesse a növekvő elégedettséget, miközben a befejezés csendben csökken (lásd [tranzakciónkénti költség](../tranzakciónkénti-költség/) és [digitális befogadás](../digitális-befogadás/), hogy kik szorulnak ki eleve a digitális elégedettségi mintavételből — a nem digitális és a támogatott digitális felhasználók rendszerszerűen alulreprezentáltak a szolgáltatáson belüli felmérésekben). Az elégedettségi és bizalmi adatok közvetlenül táplálják [Moore stratégiai háromszögének](../közérték/) legitimitási szárát, és a [közérték-eredménylap](../közérték-eredménylap/) „ügyfél” és „legitimitás” szempontjaiba tartoznak — a szolgáltatási szintű mutató intézményi szintű megfelelőjéről lásd a [bizalmi és legitimitási mutatókat](../bizalmi-és-legitimitási-mutatók/).

## Buktatók

- **Túlélési torzítás a befejezés pontján végzett felméréseknél**: azok a felhasználók, akik elhagyják az utat, soha nem látják a felmérést, így a magas szolgáltatáson belüli elégedettségi pontszám együtt létezhet alacsony befejezési aránnyal és elégedetlen, be nem fejezők nagy, láthatatlan népességével.
- **Az elégedettség kezelése az eredmény helyettesítőjeként**: egy rosszul tervezett szakpolitika jól megtervezett felülete jól pontozódik az elégedettségen és rosszul az eredményen — mindig mindkettőt jelentsék, soha ne az egyiket a másik helyett.
- **Kis, nem reprezentatív minták hamis pontossággal jelentve**: néhány száz önkiválasztó válaszadó elégedettségi pontszáma egy tizedesjegyre jelentve olyan bizonyosságot sugall, amelyet a mintaméret nem támogat.
- **A demográfiai bontás figyelmen kívül hagyása**: az életkor, jövedelem, fogyatékosság vagy digitális hozzáférés szerint nem bontott nemzeti bizalmi és elégedettségi számok elfedhetik a csoportok közötti élesen eltérő tapasztalatokat — az OECD saját Trust in Government kiadványai kifejezetten bontanak erre.

## Források

- OECD, „Trust in Government.” <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, „Civil Service People Survey” eredmények.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, „Measuring Success.” <https://www.gov.uk/service-manual/measuring-success>
