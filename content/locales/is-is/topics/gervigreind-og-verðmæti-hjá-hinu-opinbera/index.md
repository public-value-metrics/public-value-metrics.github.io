# Gervigreind og verðmæti hjá hinu opinbera

Verðmæti gervigreindar hjá hinu opinbera er krafan um að gervigreindarkerfi sem notað er í opinberri þjónustu uppfylli sömu kröfur um hagkvæmni útgjalda og opinbert verðmæti og hver önnur útgjaldaákvörðun — ekki lægri kröfur vegna þess að það er nýtt, og ekki hærri vegna þess að það vekur ótta. Þetta er spurningin sem afhendingarteymi verður að geta svarað áður en gervigreindareiginleiki fer í loftið, ekki eftir á: skapar þetta meira verðmæti en það kostar, þegar trygging, eftirlit og áhætta hafa verið verðlögð af hreinskilni?

## Hvers vegna það skiptir máli

Central Digital and Data Office (CDDO) í Bretlandi gaf út Generative AI Framework for Government árið 2024, byggðan á fyrri bráðabirgðaleiðbeiningum frá júní 2023, og skipulagði hann í kringum tíu meginreglur sem ná yfir hvað skapandi gervigreind er, siðferðileg áhrif hennar, öryggi verkfæra, gæðatryggingarstýringar, stjórnun alls lífsferils skapandi gervigreindar, að greina raunveruleg notkunartilvik, samstarf þvert á ríkisstjórnina, gagnsæi, færni og stjórnarhætti. Áhersla rammans á „marktæka mannlega stjórn“ og stjórnun alls lífsferilsins er til komin vegna þess að viðskiptarök gervigreindarverkefna hafa sérstakan bilunarham sem önnur upplýsingatækniútgjöld hafa ekki: fyrirsagnartala tilraunaverkefnis um framleiðni er auðveld í framleiðslu og auðvelt að ofmeta, því hún er mæld áður en tekið er tillit til þeirrar sannprófunar-, leiðréttingar- og eftirlitsbyrði sem verkfærið skapar. Samhliða rammanum krefst Algorithmic Transparency Recording Standard (ATRS) þess að opinberir aðilar birti staðlaða skrá — tilgang, gögn sem notuð eru, frammistöðu, sanngirnisprófanir, fyrirkomulag mannlegs eftirlits — fyrir reiknirit sem hafa veruleg áhrif á ákvarðanir um einstaklinga, sem gerir tryggingarkostnað gervigreindarkerfis að opinberu skjali, ekki innra mati sem teymi getur hljóðlega sleppt.

## Stærðfræðin

Innleiðing gervigreindar er metin sem viðbót við, ekki í stað, hefðbundins mats á [hagkvæmni útgjalda](../hagkvæmni-útgjalda/), þar sem liðir sértækir fyrir gervigreind eru gerðir skýrir í stað þess að blandast í eina tölu um „framleiðniaukningu“:

```
Nettóverðmæti gervigreindarkerfis =
    framleiðniaukning (tími sem sparast × fullur launakostnaður)
  − leyfis-/reikniafls kostnaður
  − kostnaður við mannlega sannprófun og eftirlit (að athuga úttak
    gervigreindar áður en brugðist er við því — þetta minnkar ekki niður í núll,
    jafnvel hjá þroskuðum verkfærum)
  − ATRS-skjölun og áframhaldandi vöktunarkostnaður
  − áhættuleiðréttur kostnaður tjóns vegna villna, hlutdrægni eða ofskynjana,
    vigtaður eftir því hver ber tjónið (dreifingarvigtun)

Framleiðnitala úr tilraunaverkefni sem sleppir eftirlitsliðnum er ekki
sambærileg við venjulegan kostnaðargrunn sem þegar inniheldur
jafngildi mannlegrar yfirferðar — sjá framleiðni gervigreindar í opinbera geiranum
fyrir nánari aga við mælingu framleiðni sem þetta byggir á.
```

## Dæmi útreiknað

**Sveitarfélag sem notar skapandi gervigreindartól til að semja fyrstu svör við venjulegum fyrirspurnum um útsvar**: 25.000 fyrirspurnir á ári, áður afgreiddar alfarið af málsmeðhöndlurum að meðaltali á 14 mínútum hver, fullur launakostnaður 34 £ á klukkustund.

```
Grunnkostnaður (án gervigreindar):
  25.000 × (14/60) × 34 £ = 198.333 £/ár

Fullyrðing úr tilraunaverkefni: gervigreind semur svar á 90 sekúndum,
málsmeðhöndlari „fer bara yfir og sendir“ — fullyrtur nýr tími er 3 mínútur
  25.000 × (3/60) × 34 £ = 42.500 £/ár
  → fullyrtur sparnaður 155.833 £/ár (lítur byltingarkenndur út)

Fullur kostnaður, mældur eftir 3 mánuði í rekstri frekar en í
handvöldum prófunartilvikum tilraunaverkefnisins:
  Raunverulegur yfirferðar- og leiðréttingartími á hvert svar: 6 mínútur (drög
  þarfnast raunverulegrar ritstýringar fyrir flóknar eða tilfinningalega viðkvæmar fyrirspurnir)
  25.000 × (6/60) × 34 £ = 85.000 £/ár
  Leyfis-/reikniaflskostnaður: 38.000 £/ár
  ATRS-skjölun og ársfjórðungsleg vöktun á hlutdrægni/gæðum: 14.000 £/ár
  Heildarkostnaður = 85.000 + 38.000 + 14.000 = 137.000 £/ár

Raunverulegur sparnaður = 198.333 − 137.000 = 61.333 £/ár — raunverulegur og
þess virði að halda, en vel innan við helmingur af fyrirsagnartölu tilraunaverkefnisins,
og það þurfti hreinskilna mælingu á eftirlitstíma, ekki bestu tilvikin
úr tilraunaverkefninu, til að finna hann.
```

## Tengsl við hugbúnaðarverkfræði

Hér mætast [framleiðni gervigreindar í opinbera geiranum](../framleiðni-gervigreindar-í-opinbera-geiranum/) og þetta efni: verkfræðiteymi sem smíða gervigreindareiginleika í opinbera þjónustu eiga mælitækin sem gera „raunverulegu“ töluna í dæminu mögulega — skráning raunverulegs yfirferðartíma, breytingafjarlægðar milli draga og sendra svara og stigmögnunarhlutfalls, í stað þess að treysta sýningarskilyrðum tilraunaverkefnisins. Meta ætti gervigreindareiginleika gagnvart lið 9 í [staðli um stafræna þjónustu](../staðall-um-stafræna-þjónustu/) (örugg þjónusta, persónuvernd notenda) og vísa til [verðmæti netöryggis í opinbera geiranum](../verðmæti-netöryggis-í-opinbera-geiranum/) þar sem verkfærið snertir gögn borgara, og öll gervigreindarkerfi sem hafa veruleg áhrif á ákvarðanir um einstaklinga þurfa ATRS-skrá áður en þau teljast tilbúin til úttektar, á sama hátt og þjónusta þarf staðist úttekt samkvæmt [staðli um stafræna þjónustu](../staðall-um-stafræna-þjónustu/) áður en hún fer í loftið.

## Gildrur

- **Gervigreindarþvottur**: að endurmerkja fyrirliggjandi reglubundna sjálfvirkni sem „gervigreind“ til að fá aðgang að fjármögnun eða athygli sem ætluð er innleiðingu gervigreindar, án þeirrar nákvæmni- eða hlutdrægniáhættu sem raunverulega réttlætir aukið eftirlit rammans.
- **Að mæla framleiðni tilraunaverkefnis, ekki framleiðni í rekstri**: tilraunaverkefni keyra á völdum prófunartilvikum með áhugasömum og athugulum yfirferðarmönnum; rekstur keyrir á öllu óskipulega tilvikasafninu með yfirferðarmönnum sem með tímanum þróa sjálfvirknihlutdrægni og skoða úttak of lítið — hvort tveggja skekkir hreinskilna tölu um eftirlitskostnað.
- **Að sleppa ATRS-skráningu því verkfærið sé „ekki í raun sjálfvirk ákvarðanataka“**: viðmið staðalsins er veruleg áhrif á ákvörðun um einstakling, sem flest gervigreindartól til að semja drög eða flokka mál fyrir borgara uppfylla, jafnvel þegar manneskja undirritar tæknilega.
- **Að hunsa dreifingaráhrif villna**: villuhlutfall gervigreindarkerfis, meðaltal yfir alla notendur, getur falið mun hærra villu- eða hlutdrægnihlutfall fyrir tiltekna hópa; beita ætti [dreifingarvigtun](../dreifingarvigtun/) á áhættuleiðrétta tjónsliðinn, ekki aðeins á heildarnákvæmni.

## Heimildir

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
