# Kostnaðarhagkvæmnigreining hjá hinu opinbera

Kostnaðarhagkvæmnigreining (CEA) ber saman kostnað við mismunandi leiðir til að ná *sömu* útkomu, gefna upp í náttúrulegum einingum — kostnaður á hvern húsnæðislausan einstakling sem fær húsnæði, kostnaður á hvern nemanda sem nær tilætluðu viðmiði, kostnaður á hvert tonn af CO2 sem dregið er úr — án þess að umbreyta útkomunni sjálfri í peninga.

## Hvers vegna það skiptir máli

Green Book lítur á CEA sem varaaðferð þegar krafa [samfélagslegrar kostnaðar- og ábatagreiningar](../samfélagsleg-kostnaðar-og-ábatagreining/) um að meta allan ávinning til fjár verður ekki aðeins erfið heldur óheiðarleg — þar sem trúverðug verðlagning útkomunnar myndi krefjast forsendna sem enginn aðhyllist í raun (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, kafli 5, um valkostamat þar sem útkoma er ekki auðveld til fjárhagslegs mats). CEA er sú aðferð sem tekin er beinast úr heilsuhagfræði — hún er byggingarlega eins og NICE ber saman meðferðir með kostnaði á hvert gæðaleiðrétt lífsár — en beitt á áætlanir utan heilbrigðismála: menntunarúrræði á hvern stigafjölda nemanda, húsnæðisáætlanir á hvert heimili sem bjargað er frá húsnæðisleysi, atvinnuáætlanir á hverja varanlega vinnuútkomu.

Ástæðan fyrir því að CEA á sér sæti við hlið SCBA fremur en að falla undir hana er að það að þvinga peningalegt verðmæti á sumar útkomur gefur tölu sem er nógu nákvæm til að líta út fyrir að vera marktæk og nógu umdeild til að vera einskis virði í opinberri umræðu — að setja verð á „barn sem les á tilætluðu stigi“ býður einmitt upp á þá gagnrýni sem fellir viðskiptarök í þingnefnd. CEA sneiðir hjá deilunni með því að neita að eiga í henni: hún raðar valkostum eftir kostnaði á einingu *útkomunnar sjálfrar* og skilur eftir hinn aðskilda pólitíska dóm um hvort útkoman sé yfirhöfuð þess virði að sækjast eftir fyrir stefnumótandi tilvikið.

## Stærðfræðin

```
Kostnaðarhagkvæmnihlutfall (meðaltal) = Heildarkostnaður / Heildarfjöldi útkomueininga sem næst

Stigvaxandi kostnaðarhagkvæmnihlutfall (ICER), A borið saman við B:
ICER = (Kostnaður_A − Kostnaður_B) / (Útkoma_A − Útkoma_B)

Aðferð:
1. Festu útkomueininguna og mæliaðferðina fyrir alla valkosti sem bornir eru saman.
2. Kostnaðarmettu hvern valkost á sama grunni (sjá ../green-book-appraisal/, fjárhagstilvik)
   yfir sama tímabil.
3. Hafnaðu yfirskyggðum valkostum: hver valkostur sem kostar meira á einingu en ódýrari
   valkostur sem nær sömu eða betri útkomu er felldur brott.
4. Raðaðu þeim valkostum sem eftir eru eftir stigvaxandi, ekki meðal-,
   kostnaðarhagkvæmnihlutfalli.
```

CEA getur ekki, ein og sér, sagt hvort áætlun sé yfirhöfuð þess virði að fjármagna — aðeins hver af nokkrum leiðum að sama markmiði er ódýrust á einingu. Til að ákveða hvort markmiðið sjálft sé útgjaldanna virði þarf annaðhvort að umbreyta aftur í SCBA (ef trúverðugt verðmat er til) eða pólitískan/stefnumótandi dóm utan stærðfræðinnar. Þar sem ekki er hægt að þjappa útkomum í eina einingu — því áætlun skilar nokkrum útkomum sem skipta máli á ólíkan hátt — skal nota [fjölviðmiðagreining ákvarðana](../fjölviðmiðagreining-ákvarðana/) í staðinn.

## Dæmi útreiknað

**Sveitarfélag**: sveitarfélag ber saman þrjár leiðir til að fækka þeim sem sofa á götunni, hver kostnaðarmetin yfir eitt ár gagnvart útkomunni „einstaklingar fluttir í fast húsnæði í 6+ mánuði“:

```
Valkostur                       Kostnaður  Útkoma sem næst   Meðal-CER
Housing First (ákaft)           900.000 £  60                15.000 £/útkoma
Gistiskýli + stuðningur við flutning 600.000 £ 50            12.000 £/útkoma
Vettvangsstarf + einkaleigumarkaður 350.000 £ 20             17.500 £/útkoma

ICER, gistiskýli á móti vettvangsstarfi:  (600k−350k)/(50−20) = 8.333 £ á hverja viðbótarútkomu
ICER, Housing First á móti gistiskýli: (900k−600k)/(60−50) = 30.000 £ á hverja viðbótarútkomu
```

Vettvangsstarf er yfirskyggt á meðalkostnaði af gistiskýli, en *stigvaxandi* skrefið frá vettvangsstarfi til gistiskýlis kostar aðeins 8.333 £ á hvern viðbótareinstakling sem fær húsnæði — ódýrt miðað við Housing First skrefið, sem kostar 30.000 £ fyrir hvern viðbótareinstakling umfram það sem gistiskýli nær. Sveitarfélag með takmarkað fjármagn sem stækkar starfsemina ætti að kjósa að stækka gistiskýli á undan Housing First, jafnvel þótt Housing First líti betur út á eigin meðalhlutfalli.

**Ríkisstjórn**: lestrarátak er borið saman milli þriggja afhendingarleiða á „kostnaði á hvern nemanda sem nær aldurssvarandi lestrarviðmiði“: einstaklingskennsla (1.800 £/nemanda), smáhópakennsla (700 £/nemanda) og eingöngu stafrænt úrræði (150 £/nemanda, en aðeins 40% af útkomuhlutfalli smáhópakennslu á hvern skráðan nemanda þegar leiðrétt er fyrir brottfalli þátttöku). Þegar leiðrétt er fyrir raunverulegri lokun kostar eingöngu stafrænt 375 £ á hvern nemanda sem nær viðmiði — enn ódýrast, en CEA getur ekki sagt hvort minni heildarfjöldi nemenda sem fær hjálp með eingöngu stafrænu úrræði, ef það er afhent á sama fjármagni og smáhópakennsla, sé ásættanleg málamiðlun gegn því að ná til færri nemenda af meiri dýpt; það er dreifingardómur sem CEA skilar aftur til ákvörðunaraðila.

## Tengsl við hugbúnaðarverkfræði

CEA er rétta rammann hvenær sem verkfræðiteymi meta afhendingarleiðir fyrir *sömu* þjónustuútkomu — kostnaður á hverja árangursríka auðkennisstaðfestingu hjá þremur auðkennisstaðfestingarseljendum, kostnaður á hvert mál sem flokkað er rétt í tveimur hönnunum á sjálfvirkni málsmeðferðar, kostnaður á hverja aðgengisgalla sem leyst er innanhúss á móti aðkeyptri úrbótavinnu. Agarnir sem hún flytur beint: skilgreindu útkomueininguna áður en kostnaður er borinn saman (ekki „lokaðar verkbeiðnir“ — afurð — heldur „þörf notanda sem í raun var leyst“), og reiknaðu alltaf stigvaxandi hlutfallið milli kerfisins í rekstri og fyrirhugaðs arftaka, ekki meðalkostnað hvers kerfis fyrir sig. Sjá [útkoma og afurðir](../útkoma-og-afurðir/) og [kostnaður á hverja útkomu](../kostnaður-á-hverja-útkomu/).

## Gildrur

- **Að bera saman meðal- en ekki stigvaxandi hlutföll þegar ákveðið er að stækka.** Eins og dæmið um húsnæðislausa sýnir er valkosturinn með besta meðalhlutfallið ekki alltaf ódýrasta næsta eining útkomu til að kaupa.
- **Að velja útkomueiningu sem er í raun afurð.** „Tilvísanir sem gerðar eru“ eða „fundir sem haldnir eru“ mæla starfsemi, ekki útkomuna sem áætlunin er til fyrir að skila; CEA á afurðir gefur sjálfsörugga tölu sem svarar röngu spurningunni.
- **Að bera saman milli raunverulega ólíkra útkoma.** CEA gildir aðeins þegar allir valkostir miða á sömu útkomu mælda á sama hátt; að bera saman „kostnað á hvern húsnæðislausan sem fær húsnæði“ og „kostnað á hvern ungmenni úr barnavernd í stöðugri leigu“ krefst almenns útkomumælikvarða eða [fjölviðmiðagreining ákvarðana](../fjölviðmiðagreining-ákvarðana/), ekki CEA.
- **Að hunsa varanleika útkomu.** Ódýrari valkostur sem skilar útkomu sem endist ekki (nemandi sem fer aftur á bak eftir að inngripi lýkur) er í raun ekki kostnaðarhagkvæmari þegar mælt er yfir sambærilegt tímabil; samræmdu eftirfylgnitímabil milli valkosta sem bornir eru saman.

## Heimildir

- HM Treasury. „The Green Book: appraisal and evaluation in central government.“ 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. „Developing NICE guidelines: the manual“ —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
