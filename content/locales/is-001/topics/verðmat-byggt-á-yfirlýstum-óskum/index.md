# Verðmat byggt á yfirlýstum óskum

Aðferðir yfirlýstra óska meta virði gæða utan markaðar með því að spyrja fólk beint hvað það væri tilbúið að greiða fyrir þau, eða tilbúið að þiggja í bætur fyrir að sleppa þeim, yfirleitt í gegnum skipulagða könnun sem lýsir tilgátulegri sviðsmynd. Skilyrt verðmat (contingent valuation) er þekktasta aðferðin í fjölskyldunni.

## Hvers vegna það skiptir máli

Annex 2 í Green Book (viðbótarleiðsögn um verðmat áhrifa utan markaðar) mælir með aðferðum yfirlýstra óska fyrir gæði sem hafa enga sjáanlega markaðsfærslu til að álykta virði af yfirhöfuð — loftgæði, líffræðilega fjölbreytni, flóðavarnir, tilvistarvirði landslags sem einhver kann aldrei að heimsækja (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Defra hefur gefið út eigin leiðsögn um yfirlýstar óskir fyrir umhverfismat einmitt vegna þess að svo mikið af umhverfisvirði (verndun búsvæða, vatnsgæði) hefur engan staðgengilsmarkað, ólíkt til dæmis hávaða, sem í það minnsta fylgir sjáanlegu húsnæðisverði (sjá [verðmat byggt á afhjúpuðum óskum](../verðmat-byggt-á-afhjúpuðum-óskum/)).

Meginaðdráttarafl yfirlýstra óska — þær geta metið bókstaflega hvað sem er, þar á meðal gæði sem enginn hefur nokkru sinni átt viðskipti með — er jafnframt uppspretta trúverðugleikavandans. Þar sem svarendur eyða ekki í raun fé eru skilyrt verðmatskannanir berskjaldaðar fyrir tilgátuskekkju (fólk ofmetur greiðsluvilja þegar engin raunveruleg fjárhagstakmörkun er til staðar), innfellingaráhrifum (sama gæðin eru metin ólíkt eftir því hvað annað er í könnuninni) og upphafspunktsskekkju í tilboðsleikjahönnun. NOAA-nefndin um skilyrt verðmat frá 1993, sem kölluð var saman eftir málaferli vegna Exxon Valdez olíuslyssins, setti hönnunarstaðla — tvígilt „myndir þú greiða X £, já/nei“ þjóðaratkvæðasnið fremur en opna tilboðsgjöf, og skyldubundnar áminningar um raunverulega fjárhagstakmörkun svarandans — sem eru enn viðmiðunarstaðallinn fyrir réttlætanlegar kannanir.

## Stærðfræðin

```
Skilyrt verðmat (þjóðaratkvæðasnið):
  Settu fram tvígilt val: „myndir þú greiða X £ á ári fyrir útkomu Y? já/nei“
  Breyttu X slembið milli svarenda.
  Aðhvarfaðu greiðsluvilja sem fall af já/nei svarhlutfalli við hvert X.

Meðal-WTP = flatarmál undir metnum eftirspurnarferli
Samanlagt virði = Meðal-WTP × þýði sem verður fyrir áhrifum

Afbrigði með valtilraun (discrete choice modelling):
  Settu fram endurtekin val fyrir svarendur milli knippa eiginleika
  (þar á meðal kostnaðareiginleika), metu óbeint verð fyrir hvern
  eiginleika utan kostnaðar út frá málamiðlunum sem svarendur afhjúpa.
```

Afbrigðið með valtilraun er almennt valið í núverandi breskri framkvæmd fremur en stök skilyrt verðmatsspurning, því að þvinga svarendur til að vega nokkra eiginleika gegn kostnaði ítrekað skilar innbyrðis samræmdari, erfiðara-að-hagræða mati en ein já/nei spurning.

## Dæmi útreiknað

**Ríkisstjórn**: Defra pantar skilyrta verðmatskönnun til að meta áætlun um umbætur á vatnsgæðum í á. Könnun á þjóðaratkvæðasniði meðal 2.000 heimila leiðir í ljós að 62% myndu greiða 40 £ á ári með tilgátulegri vatnsreikningsviðbót, og metni eftirspurnarferillinn gefur meðal greiðsluvilja upp á 28 £/ár á heimili.

```
Meðal-WTP = 28 £/heimili/ár
Heimili á vatnasviði = 340.000
Samanlagt árlegt virði = 28 £ × 340.000 = 9,52 m£/ár

Yfir 20 ára matstímabil á 3,5% afsláttarstuðli (árgreiðslustuðull ≈ 14,2):
PV(ávinningur) ≈ 9,52 m£ × 14,2 ≈ 135 m£
```

Þessi samanlagða tala er síðan borin saman við kostnaðarhlið [samfélagsleg kostnaðar- og ábatagreining](../samfélagsleg-kostnaðar-og-ábatagreining/) áætlunarinnar. Green Book krefst þess að slík sönnunargögn um yfirlýstar óskir séu tilkynnt ásamt öryggisbili og könnunaraðferðafræði, ekki sem ber punktmat, einmitt vegna þess að undirliggjandi tala er brothættari en markaðsverð.

**Góðgerðarfélag**: menningararfssjóður kannar gesti og þá sem ekki heimsækja um greiðsluvilja til að koma í veg fyrir lokun sögulegrar byggingar sem hvorugur hópurinn heimsækir endilega (tilvistarvirði hennar). Þar sem þeir sem ekki heimsækja og munu aldrei sjá bygginguna tilkynna samt jákvæðan greiðsluvilja, fangar könnunin tilvistar- og arfleifðarvirði sem einföld talning á aðgangseyristekjum gesta (staðgengill afhjúpaðra óska) myndi alveg missa af — sem sýnir raunverulegan kost yfirlýstra óska þar sem engin markaðsfærsla af neinu tagi er til að afhjúpa virði.

## Tengsl við hugbúnaðarverkfræði

Aðferðir yfirlýstra óska eiga sjaldan beint við í hugbúnaðarverkfræði, en verkfræðingar sem smíða samráðsvettvanga fyrir borgara, tól fyrir þátttöku í fjárhagsáætlunum eða almenna könnunarinnviði eru oft að smíða tækið sem hagfræðin veltur á. Að hafa smáatriði könnunarhönnunar rétt — slembin tilboðsupphæðir, tvígilt þjóðaratkvæðasnið fremur en opnar spurningar, skýrar áminningar um fjárhagstakmörkun — er ekki viðmótsfágun, það er það sem gerir verðmatið sem fæst réttlætanlegt undir skoðun; illa hönnuð könnun innan forrits getur ógilt mánaða síðari hagfræðigreiningu. Sjá [mælikvarðar á ánægju borgara](../mælikvarðar-á-ánægju-borgara/) fyrir almennari aga við að afla almenningsálitsgagna sem munu bera greiningarlegt vægi.

## Gildrur

- **Opnar „hve miklu myndir þú greiða?“ spurningar.** Þær eru langtum viðkvæmari fyrir áætlunar- og akkerisskekkju en tvígilt þjóðaratkvæðasnið; tilmæli NOAA-nefndarinnar um að nota þjóðaratkvæðasnið eru til einmitt vegna þess að opin öflun skilar slökum árangri.
- **Engin áminning um raunverulega fjárhagstakmörkun svarandans.** Án hennar fer yfirlýstur greiðsluvilji reglulega fram úr því sem sama fólk myndi greiða þegar raunveruleg fjárhagsleg málamiðlun er í húfi — tilgátuskekkja.
- **Innfellingaráhrif hunsuð.** Sömu gæðin metin ein og sér á móti sem hluti af stærra knippi skila ólíku mati á greiðsluvilja; tilkynntu hvað annað, ef nokkuð, var í könnunarrammanum.
- **Að líta á punktmat einnar könnunar sem endanlegt.** Venja Green Book væntir bils og umræðu um þekktar skekkjur, ekki bers tölu sem borin er áfram inn í kostnaðar- og ábatatöfluna eins og hún væri markaðsverð.

## Heimildir

- HM Treasury. „The Green Book,“ Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. „Valuing environmental impacts: practical guidelines“ (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. „Report of the NOAA Panel on Contingent Valuation.“ Federal Register, 1993.
- Mitchell RC, Carson RT. „Using Surveys to Value Public Goods: The Contingent Valuation Method.“
  Resources for the Future, 1989.
