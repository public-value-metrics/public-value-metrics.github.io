# Verðmat á velferð (WELLBY)

Velferðarverðmat verðleggur áhrif stefnu beint í lífsánægju, með WELLBY (wellbeing-adjusted life year, lífsár leiðrétt fyrir velferð) sem einingu — eitt WELLBY jafngildir eins stigs breytingu á 0–10 lífsánægjukvarða, viðhaldið í eitt ár. Þetta er opinberlega samþykktur valkostur HM Treasury við að verðleggja sérhvern ávinning í gegnum greiðsluvilja.

## Hvers vegna það skiptir máli

„Wellbeing guidance for appraisal: supplementary Green Book guidance“ hjá HM Treasury (2021, <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) færði huglæg velferðargögn formlega inn í mat miðstjórnarinnar og gaf greinendum leið til að meta útkomur — félagsleg tengsl, geðheilsu, öryggi, borgaralega þátttöku — sem aðferðir [yfirlýstra óska](../verðmat-byggt-á-yfirlýstum-óskum/) og [leiddra óska](../verðmat-byggt-á-afhjúpuðum-óskum/) eiga erfitt með að verðleggja á sannfærandi hátt, því fólk spáir oft illa fyrir um hversu mikið gæði munu í raun hafa áhrif á ánægju þess með lífið. Leiðbeiningarnar, þróaðar í samstarfi við What Works Centre for Wellbeing, setja ráðlagt peningalegt verðmæti á hvert WELLBY — 13.000 £ (verðlag 2021, endurskoðað reglulega) — leitt af sambandinu sem sést í stórum velferðarkönnunum (einkum Annual Population Survey hjá ONS, sem hefur spurt fjögurra ONS4 velferðarspurninga frá 2011) milli tekna og lífsánægju, sem gefur greinendum umreikningsstuðul aftur í pund þegar þörf er á verðlögðum samanburði við önnur Green Book mat.

Aðferðin skiptir máli því hún snýr hefðbundinni verðmatsrökfræði við: í stað þess að spyrja hvað fólk myndi greiða fyrir útkomu (yfirlýstar óskir) eða álykta um verðmæti út frá skyldum markaðsviðskiptum (leiddar óskir), mælir hún áhrif útkomunnar á tilkynnta lífsánægju beint og sniðgengur bilið milli þess sem fólk segist vilja og þess sem raunverulega gerir því betur. Þetta er jafnframt aðaltakmörkun hennar — tilkynnt lífsánægja er undir áhrifum aðlögunar og rammaáhrifa sem vandvirkur iðkandi verður að stýra fyrir.

## Stærðfræðin

```
WELLBY = 1 lífsánægjustig (0-10 kvarði) viðhaldið fyrir 1 einstakling í 1 ár

Heildar-WELLBY úr stefnu =
  Σ (breyting á lífsánægjueinkunn) × (fjöldi sem verður fyrir áhrifum)
    × (tímalengd í árum, núvirt á samfélagslegum afsláttarstuðli)

Verðlagt verðmæti = Heildar-WELLBY × verðmæti á WELLBY
  (ráðlagt verðmæti HM Treasury: 13.000 £ á WELLBY, verðlag 2021,
   háð reglulegri endurskoðun — athugaðu gildandi leiðbeiningar fyrir notkun)
```

Þetta er frábrugðið heilsuhagfræðilega [lífsári leiðréttu fyrir velferð](../lífsár-leiðrétt-fyrir-velferð/), sem er venjulega fest við kvarða heilsutengdra lífsgæða (EQ-5D og áþekka) frekar en almenna lífsánægju; hvort tveggja er skylt en ekki skiptanlegt, og Green Book mat ættu að vera skýr um hvaða kvarði og aðferð við öflun liggur að baki tilkynntri WELLBY-tölu.

## Dæmi útreiknað

**Sveitarfélag**: borgarráð rekur vinaþjónustu í samfélaginu fyrir einangraða eldri íbúa, sem þjónar 400 manns. Velferðarkönnun fyrir/eftir með ONS4 lífsánægjuspurningunni sýnir að meðaleinkunn þátttakenda hækkar úr 5,8 í 6,5 — 0,7 stiga aukning — viðhaldið allan 2 ára fjármagnaðan líftíma áætlunarinnar.

```
WELLBY sem myndast = 400 manns × 0,7 stig × 2 ár = 560 WELLBY
Verðlagt verðmæti = 560 × 13.000 £ = 7,28 m£
Kostnaður áætlunar = 450.000 £ yfir 2 ár

Ábata-kostnaðarhlutfall ≈ 7,28 m£ / 0,45 m£ ≈ 16:1
```

Svo hátt hlutfall ætti að kalla á skoðun fremur en fögnuð — velferðarleiðbeiningar Green Book vara skýrt við að taka sjálftilkynntar aukningar í litlu úrtaki á nafnvirði án þess að athuga valáhrif (gengu aðeins félagslyndustu íbúarnir, þeir sem líklegastir voru til að batna, til liðs við áætlunina?) og án samanburðarhóps; vel hannað mat myndi draga frá mótstaðreyndabreytingu sem sést hjá þeim sem ekki tóku þátt, sjá [mótstaðreyndagreining](../mótstaðreyndagreining/).

**Landsstjórn**: að bera saman tvær atvinnuáætlanir með WELLBY frekar en tekjur einar nær því að atvinnuleysi hefur velferðarkostnað umfram tapaðar tekjur — bresk velferðarrannsókn finnur stöðugt að atvinnuleysi dregur úr lífsánægju meira en tekjutapið eitt myndi spá fyrir um, vegna óbeinna peningalegra áhrifa af því að missa reglu, tilgang og félagsleg samskipti. Áætlun metin eingöngu á tekjuaukningu myndi vanmeta verðmæti sitt miðað við áætlun sem er að auki metin í WELLBY.

## Tengsl við hugbúnaðarverkfræði

Velferðarverðmat nær sjaldan beint til verkfræðiteyma, en það mótar hvernig „árangur“ er skilgreindur fyrir vörur í félagsgeiranum og opinberri þjónustu — stafrænn vettvangur fyrir vinaþjónustu, forgangsröðunartól í geðheilbrigði eða samfélagsvettvangur fyrir einangraða íbúa ætti að búast við að áhrif hans verði að lokum mæld á þennan hátt, sem þýðir að vörugreining þarf að fanga *hverjir* nást og *hversu lengi*, ekki bara notkunartölur. Byggðu inn velferðarkönnunarmælitæki (ONS4 eða staðfest jafngildi) í mat á þjónustu frá upphafi frekar en að bæta þeim við eftir á; að bæta velferðargrunnlínu við eftir að þjónusta hefur farið í loftið týnir fyrir/eftir samanburðinum alveg. Sjá [útkomur og afurðir](../útkoma-og-afurðir/) og [aðferðir við áhrifamat](../aðferðir-við-áhrifamat/).

## Gildrur

- **Engin mótstaðreynd eða samanburðarhópur.** Velferðaraukning fyrir/eftir án stýringar fyrir því sem hefði gerst hvort eð er ofmetur áhrif áætlunarinnar; sjá [mótstaðreyndagreining](../mótstaðreyndagreining/) og [eiginvirði án inngrips og viðbótaráhrif](../viðbótaráhrif-og-dauðaþungi/).
- **Lítil, sjálfvalin úrtök.** Velferðarkannanir meðal þátttakenda í áætlun sem völdu að vera með eru viðkvæmar fyrir valskekkju — fólkið sem gekk til liðs og var áfram var trúlega þegar á uppleið.
- **Að líta á umreikning £ á WELLBY sem nákvæman.** Verðlagða verðmætið er stefnuvenja leidd af aðhvarfsgreiningu tekna og velferðar, ekki markaðsverð; notaðu það til samanburðar milli Green Book mata, ekki sem fullyrðingu um hvers virði velferð „er“.
- **Að blanda WELLBY saman við heilsutengd QALY.** Þetta mælir ólík hugtök á ólíkum kvörðum; sjá [lífsár leiðrétt fyrir velferð](../lífsár-leiðrétt-fyrir-velferð/) fyrir heilsuhagfræðilega afbrigðið og ekki taka meðaltal af þessu tvennu.

## Heimildir

- HM Treasury. „Wellbeing guidance for appraisal: supplementary Green Book guidance.“ 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. „Personal well-being in the UK“ (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. „Wellbeing Valuation: A Nascent Field?“ LSE / Simetrica research summaries.
