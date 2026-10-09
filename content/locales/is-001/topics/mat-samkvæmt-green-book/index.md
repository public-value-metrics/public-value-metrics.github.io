# Mat samkvæmt Green Book (fimm-tilvika líkanið)

Green Book er skyldubundin leiðsögn HM Treasury um mat og úttekt á útgjaldatillögum bresku ríkisstjórnarinnar. Meginverkfæri þess, fimm-tilvika líkanið, neyðir viðskiptarök til að svara fimm aðskildum spurningum — er þetta góð hugmynd, skilar þetta verðmæti, er hægt að kaupa þetta inn, er hægt að standa straum af þessu og er hægt að afhenda þetta — í stað þess að þjappa öllu í eina tölu sem ráðherra getur samþykkt með handaslætti.

## Hvers vegna það skiptir máli

Sérhver útgjaldatillaga bresku miðstjórnarinnar yfir framseldum mörkum ráðuneytis verður að fara í gegnum mat samkvæmt Green Book áður en fé er losað, og Green Book Review 2020 hjá HM Treasury (birt eftir gagnrýni á að ferlið væri hlutdrægt gegn fátækari svæðum, sjá <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) herti kröfuna um að valkostir séu bornir saman við raunverulega „gera lágmark“ grunnlínu og að stefnumótandi samræmi sé sýnt fram á áður en hagkvæmni útgjalda er yfirhöfuð metin. Fimm-tilvika líkanið sjálft er eldra en Green Book — það varð til hjá Office of Government Commerce sem staðlað snið viðskiptarakanna — en 2022 útgáfa Green Book festir það í sessi sem skyldubundið form hverra viðskiptaraka sem leita samþykkis Treasury: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Tilgangur þess að skipta tilvikinu í fimm hluta er að tillaga getur fallið á einni vídd óháð hinum. Stefnumótandi traust og kostnaðarhagkvæm upplýsingatækniendurvörpun getur samt fallið á viðskiptalega tilvikinu ef aðeins einn seljandi getur afhent hana (sem skapar áhættu af einu tilboði), eða fallið á stjórnunartilvikinu ef ráðuneytið hefur enga afrekaskrá í að afhenda áætlanir af þeirri stærð. Ein „hagkvæmni útgjalda“-einkunn felur nákvæmlega þennan bilunarhátt.

## Stærðfræðin

Fimm-tilvika líkanið er uppbygging, ekki formúla, en hvert tilvik hefur sitt eigið megindlega eða sönnunargagnapróf:

```
1. Stefnumótandi tilvik
   Sönnunargögn um útgjaldamarkmið tengt stefnu stofnunarinnar.
   Próf: er yfirhöfuð rök fyrir breytingu? („gera ekkert“ er alltaf valkostur.)

2. Hagrænt tilvik
   Valkostamat gagnvart „gera lágmark“ grunnlínu, með
   samfélagslegri kostnaðar- og ábatagreiningu eða kostnaðarhagkvæmnigreiningu.
   Próf: hvaða valkostur hámarkar hreint opinbert verðmæti?
   Sjá ../social-cost-benefit-analysis/ og ../cost-effectiveness-analysis-in-government/

3. Viðskiptalegt tilvik
   Samráð við markað, innkaupaleið, áhættuskipting milli
   kaupanda og seljanda.
   Próf: er hægt að kaupa valinn valkost á ásættanlegum kjörum?

4. Fjárhagslegt tilvik
   Greiðslugeta innan fjárhagsmarka ráðuneytis, fjármögnunarlind,
   meðferð í efnahagsreikningi.
   Próf: höfum við efni á því, í ár og hvert ár eftir það?

5. Stjórnunartilvik
   Stjórnarhættir, verkáætlun, áætlun um ávinningsheimtu, áhættuskrá.
   Próf: getur þessi stofnun í raun afhent þetta?
   Sjá ../benefits-realization/
```

Hagræna tilvikið er þar sem megindlega matið býr: valkostir eru bornir saman á grundvelli núvirts hreins virðis leiðrétts með [samfélagslegur afsláttarstuðull](../samfélagslegur-afsláttarstuðull/), með aðferð [samfélagslegrar kostnaðar- og ábatagreiningar](../samfélagsleg-kostnaðar-og-ábatagreining/), eða, þar sem ekki er hægt að meta ávinning til fjár af heiðarleika, með [kostnaðarhagkvæmnigreiningu](../kostnaðarhagkvæmnigreining-hjá-hinu-opinbera/) eða [fjölviðmiðagreiningu ákvarðana](../fjölviðmiðagreining-ákvarðana/).

## Dæmi útreiknað

**Sveitarfélag**: sveitarfélag sem metur 12 milljóna £ upplýsingatæknikerfi fyrir húsnæðisviðgerðir fer í gegnum tilvikin fimm sem hér segir. Stefnumótandi tilvik: uppsöfnun viðgerða brýtur lögbundinn staðal um mannsæmandi húsnæði innan 18 mánaða án inngrips. Hagrænt tilvik: þrír valkostir kostnaðarmetnir yfir 10 ára matstímabil á 3,5% afsláttarstuðli (samkvæmt stöðluðum samfélagslegum tímaforgangsstuðli í Green Book 2022) — „gera lágmark“ (lappa upp á gamla kerfið, NPV −4,1 m£), „kaupa“ (COTS-vettvangur, NPV +2,3 m£), „smíða“ (sérsmíðaður vettvangur, NPV +0,6 m£ þegar bjartsýnisskekkja upp á 40% fyrir hugbúnaðarþróun er beitt á óníðurfærðan fjárfestingarkostnað, samkvæmt Annex A í Green Book). Kaup vinna hagræna tilvikið. Viðskiptalegt tilvik: tveir hæfir seljendur eru til, samkeppnisútboð er framkvæmanlegt — stenst. Fjárhagslegt tilvik: fjármagn tiltækt frá Public Works Loan Board, rekstrarkostnaður rúmast innan meðallangtíma fjármálaáætlunar — stenst. Stjórnunartilvik: sveitarfélagið hefur afhent tvö sambærileg kerfi á síðustu fimm árum — stenst. Tillagan heldur áfram með „kaupa“.

**Ráðuneyti ríkisins**: tillaga með sterkt hagrænt tilvik (NPV +40 m£) en þar sem aðeins einn seljandi hefur viðeigandi vottun fellur á prófi viðskiptalega tilviksins um samkeppnisspennu, sem þvingar fram annaðhvort undanþágu fyrir einu tilboði (með eigin skoðunarbyrði) eða endurhönnun kröfulýsingar til að opna markaðinn — hagræna tilvikið eitt hefði aldrei dregið þetta fram.

## Tengsl við hugbúnaðarverkfræði

Verkfræðiteymi innan ríkisins eða styrkfjármagnaðra stofnana sjá yfirleitt aðeins hagræna tilvikið, því það er sá hluti sem vöru- og verkfræðiforysta er beðin að rökstyðja („hver er arðsemi þessarar yfirfærslu?“). En viðskiptarök sem komast í gegnum Treasury eða styrkjanefnd þurfa öll fimm, og verkfræðingar eru oft best í stakk búnir að svara viðskiptalega tilvikinu (er hægt að kaupa þetta í raun, eða lokar það okkur inni í séreignarsniði eins seljanda?) og stjórnunartilvikinu (höfum við afhendingargetuna, eða veltur þetta á því að þrír tilteknir einstaklingar hætti ekki?). Líttu á beiðni um „bara tölurnar í viðskiptarökunum“ sem beiðni um einn fimmta af raunverulegu ákvörðuninni. Sjá [hagkvæmni útgjalda (VFM)](../hagkvæmni-útgjalda/) fyrir hvernig útkoma hagræna tilviksins er venjulega dregin saman, og [heildareignarkostnaður í upplýsingatækni hins opinbera (TCO)](../heildareignarkostnaður-í-upplýsingatækni-hins-opinbera/) fyrir hinn venjulega megindlega kjarna fjárhagslega tilviksins.

## Gildrur

- **Að skrifa hagræna tilvikið fyrst og stefnumótandi tilvikið til að passa við það.** Green Book Review 2020 leiddi í ljós að þessi bilunarháttur knúði matsskekkju í átt að stöðum og geirum sem þegar voru vel studdir sönnunargögnum og festi svæðisbundinn ójöfnuð í sessi; stefnumótandi tilvikið ætti að festa markmiðið áður en valkostir eru bornir saman.
- **Að líta á „gera lágmark“ sem „gera ekkert“.** Rétta grunnlínan er lægsti kostnaður valkostur sem enn uppfyllir lágmarkskröfur laga eða öryggis, ekki ímyndun um núll útgjöld — samanburður við bókstaflegt núll blæs upp sýnilegt virði sérhvers valkosts.
- **Að sleppa viðskiptalega og stjórnunartilvikinu af því að hagræna tilvikið er sterkt.** Tillaga með háan NPV sem ekki er hægt að kaupa í samkeppni eða afhenda af stofnuninni sem styður hana er ekki tillaga sem hægt er að fjármagna; yfirferðaraðilar Treasury hafna reglulega á þessum forsendum jafnvel með sannfærandi hagrænt tilvik.
- **Að beita fimm-tilvika líkaninu einu sinni, í upphafi.** Green Book krefst þess að tilvikið sé endurskoðað við hvert síðara samþykkishlið (stefnumótandi frumdrög, frumdrög viðskiptaraka, fullt viðskiptatilvik) þegar kostnaður og sönnunargögn skýrast — tilvik fryst á frumdragastigi missir af kostnaðaraukningu sem síðara hlið hefði gripið.

## Heimildir

- HM Treasury. „The Green Book: appraisal and evaluation in central government.“ 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. „Green Book Review 2020: findings and response.“ 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. „Guide to developing the project business
  case.“ <https://www.gov.uk/government/publications/project-business-case-guide>
