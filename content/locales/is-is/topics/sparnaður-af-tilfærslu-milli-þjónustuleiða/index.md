# Sparnaður af tilfærslu milli þjónustuleiða

Sparnaður af tilfærslu milli þjónustuleiða er áætluð kostnaðarlækkun við að flytja færslufjölda úr dýrum leiðum — síma, afgreiðsluborðum á staðnum, pósti á pappír — yfir í ódýra stafræna sjálfsafgreiðslu. Hann er fjárhagsvél „stafrænt sem sjálfgefið“ og jafnframt sá liður í viðskiptarökum sem líklegastur er til að reynast rangur, því forsendan sem hann hvílir á — að leiðir utan nets dragist saman þegar stafræn notkun eykst — á aðeins stundum við.

## Hvers vegna það skiptir máli

Reikningsdæmið virðist óumdeilanlegt með tölum um [kostnað á hverja færslu](../kostnaður-á-hverja-færslu/) úr Digital Efficiency Report: flyttu milljón færslur úr 8,62 £ heimsókn á staðinn yfir í 0,15 £ stafræna færslu og sparnaðurinn er yfir 8 milljónir punda. En sparnaður verður aðeins að lausu fé til endurráðstöfunar ef *fast afkastageta* leiðarinnar sem skreppur saman er í raun lögð niður — símaverin, afgreiðslufólkið, mínúturnar í símasamningnum — og stafræn umbreytingarverkefni sveitarfélaga hafa ítrekað komist að því að heildarfjöldi samskipta fellur ekki í takt við stafræna notkun. Rannsóknir úr stafrænum umbreytingarverkefnum sveitarfélaga og frá aðilum á borð við Socitm og Local Government Association hafa skjalfest endurtekið mynstur: stafrænar leiðir laða að raunverulega ný samskipti (borgarar sem hefðu hvorki hringt né komið á staðinn gera það nú, því það er auðveldara), og umtalsverður hluti „stafrænna“ færslna misheppnast á miðri leið og býr til símtal hvort eð er — svo símtölum fækkar mun minna en stafræn notkun gefur til kynna, stundum alls ekki í algildum tölum þótt *hlutdeild* þeirra í heildarsamskiptum minnki.

## Stærðfræðin

```
Brúttósparnaður af tilfærslu = færður fjöldi × (kostnaður_gamla_leið − kostnaður_stafrænt)

Nettósparnaður (innleystur) = brúttósparnaður
                       − ný/skuggaeftirspurn sem auðveldari leiðin skapar
                       − kostnaður vegna bilunareftirspurnar (stafræn mistök sem
                         búa samt til símtal eða heimsókn á afgreiðsluborð)
                       − kostnaður vegna óafskrifaðrar fastrar afkastagetu (símaver
                         getur aðeins fækkað starfsfólki í aðgreindum einingum;
                         15% fækkun færslna leyfir sjaldan 15% fækkun
                         starfsfólks)

Innlausnarþröskuldur: sparnaður er aðeins tryggður þegar fjöldinn fer
niður fyrir það sem gamla leiðin getur mannað við næsta minna
aðgreinda afkastagetuþrep (t.d. að missa eina heila vakt, eitt heilt
borð, eitt samningsbundið starfsmannaþrep)
```

## Dæmi útreiknað

**Endurnýjun bláa merkisins (blue badge) hjá sýslunefnd**: 60.000 endurnýjanir á ári, áður 100% símleiðis/á pappír á 6,40 £ á færslu. Ný stafræn þjónusta fer í loftið og nær 65% stafrænni notkun innan árs, á 0,30 £ á stafræna færslu.

```
Barnalegur (brúttó) sparnaðarútreikningur:
  39.000 fluttar × (6,40 £ − 0,30 £) = 237.900 £/ár

Það sem raunverulega gerðist, samkvæmt gögnum samskiptavers sveitarfélagsins:
  Símtölum fækkaði úr 60.000/ári í 46.000/ár (−23%, ekki −65%)
  vegna þess að: 9.000 stafrænar ferðir mistókust og sköpuðu eftirfylgnisímtal
           (leki vegna bilunareftirspurnar), og 4.000 manns sem áður
           endurnýjuðu alls ekki gera það nú, eftir að hafa fundið það
           auðvelt á netinu (skuggaeftirspurn — raunveruleg aðgangsbót,
           en ekki sparnaður)

  Símaverið er mannað í þrepum af 8.000 símtölum/ársverk;
  14.000 símtala fækkun (60.000 → 46.000) losar 1,75 ársverk, rúnnað
  niður í reynd í 1 ársverk sem raunverulega er endurráðstafað = 34.000 £/ár

Innleystur sparnaður = 34.000 £/ár auk þess smíða-/rekstrarkostnaðar
  stafrænu leiðarinnar sem sparast á 39.000 færslum ≈ 34.000 £ + (39.000 × 0,30 £
  stafrænn kostnaður þegar talinn) — brot af 237.900 £ fyrirsagnartölunni,
  þótt þjónustan sé enn ótvírætt betri fyrir notendur.
```

## Tengsl við hugbúnaðarverkfræði

Lærdómur fyrir verkfræðinga er að sparnaður af tilfærslu milli þjónustuleiða innleysist með *rekstrarákvörðunum* (vaktaskrám, niðurlagningu, endursamningum), ekki með því að hugbúnaðurinn fari í loftið — teymi getur uppfyllt öll atriði [staðals um stafræna þjónustu](../staðall-um-stafræna-þjónustu/) og samt skilað engum nettósparnaði ef enginn leggur niður fasta afkastagetu gömlu leiðarinnar. Að mæla bilunareftirspurn (hvar í stafrænu ferðalagi notendur hætta við og hvað þeir gera næst) er leysanlegt trektargreiningarverkefni og það áhrifaríkasta sem verkfræðiteymi getur gert til að verja sparnaðarrökin; það er líka beina tengingin við [kostnað á hverja færslu](../kostnaður-á-hverja-færslu/), sem bilunareftirspurn blæs hljóðlega upp. Sjá [ávinningsheimta](../ávinningsheimta/) fyrir víðtækari aga við að athuga hvort sparnaður viðskiptaraka skili sér í raun, og [stafræn þátttaka](../stafræn-þátttaka/) fyrir hvers vegna leiðin utan nets getur yfirleitt ekki, og ætti ekki, að vera lögð alveg niður.

## Gildrur

- **Að gera ráð fyrir 1:1 skiptum milli leiða**: að líkana stafræna notkun sem beina frádrátt frá símtölum/afgreiðsluborði, án tillits til skuggaeftirspurnar og leka vegna bilunareftirspurnar sem skjalfest er í rannsóknum á tilfærslu milli þjónustuleiða hjá sveitarfélögum.
- **Að bóka brúttósparnað áður en lagt er niður**: að telja sparnaðinn í viðskiptarökunum það ár sem notkun eykst, ekki árið (ef nokkru sinni) sem afkastageta gömlu leiðarinnar er í raun skorin niður.
- **Að hunsa þrepaeðli mönnunarkostnaðar**: 20% fækkun færslna breytist sjaldan í 20% kostnaðarlækkun, því símaver og afgreiðsluborð eru mönnuð í aðgreindum þrepum, ekki samfellt.
- **Að líta á skuggaeftirspurn sem sóun**: ný samskipti frá notendum sem áður voru útilokaðir eða fældir frá eru raunveruleg aukning á [opinbert verðmæti](../opinbert-verðmæti/), ekki líkanvilla — hana á að tilkynna sem aðgangsútkomu, ekki draga frá sem suð.

## Heimildir

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
