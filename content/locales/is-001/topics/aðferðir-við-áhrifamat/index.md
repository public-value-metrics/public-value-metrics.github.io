# Aðferðir við áhrifamat

Aðferðir við áhrifamat eru tölfræðilegar og tilraunahönnun sem notaðar eru til að meta hvað stefna eða áætlun olli í raun, aðgreint frá því sem hefði gerst hvort eð er — slembiraðaðar samanburðarrannsóknir (RCT), mismunur-í-mismun, pörun eftir líkindaskori (propensity score matching) og samfelluskil í aðhvarfi (regression discontinuity) eru þær fjórar sem oftast eru notaðar í opinberri stefnumótun í Bretlandi. Þær eru til því flest inngrip hins opinbera er ekki hægt að prófa á rannsóknarstofu: þú getur ekki slembiraðað því hvaða bær fær nýja strætóleið á sama hátt og þú getur slembiraðað því hvaða sjúklingur fær lyf, svo þessar aðferðir fá að láni sömu orsakarökfræði án þess að krefjast alltaf slembiröðunar.

## Hvers vegna það skiptir máli

Magenta Book hjá HM Treasury, Annex A um hálftilraunaaðferðir, er grundvallarleiðsögn bresku ríkisstjórnarinnar um val á milli þessara hönnuna, og stofnanir á borð við Education Endowment Foundation og What Works Centre for Local Economic Growth festa í sessi sönnunargagnastigveldi byggt í kringum þær — RCT þar sem slembiröðun er framkvæmanleg og siðferðilega ásættanleg, hálftilraunahönnun þar sem hún er það ekki. Val á aðferð er ekki tæknileg eftirhugsun: það ræður því hvort mat getur svarað „olli áætlunin þessu?“ eða aðeins „gerðist þetta eftir að áætlunin hófst?“, sem er sama spurning og [mótstaðreyndagreining](../mótstaðreyndagreining/) er byggð til að neyða iðkendur til að spyrja áður en nokkurt mat er pantað.

## Stærðfræðin

```
RCT:
  Áhrif = meðaltal(útkoma | meðferðarhópur) − meðaltal(útkoma | samanburðarhópur)
  (gilt því úthlutun í meðferð er slembin)

Mismunur-í-mismun (DiD):
  Áhrif = [útkoma_eftir(meðhöndlaðir) − útkoma_fyrir(meðhöndlaðir)]
        − [útkoma_eftir(samanburður) − útkoma_fyrir(samanburður)]
  (krefst forsendu um „samsíða þróun“: meðhöndlaðir og samanburður hefðu hreyfst saman
   án inngripsins)

Pörun eftir líkindaskori (PSM):
  1. Metið P(meðferð = 1 | skýribreytur X) fyrir hverja einingu → líkindaskor
  2. Paraðu meðhöndlaðar einingar við ómeðhöndlaðar með svipuð líkindaskor
  3. Áhrif = meðaltal(útkoma | meðhöndlaðir) − meðaltal(útkoma | pöruð samanburðarviðmið)

Samfelluskil í aðhvarfi (RDD):
  Áhrif = stökk í útkomu sem sést við réttindamörkin,
          með samanburði eininga rétt fyrir ofan og rétt fyrir neðan mörkin
```

## Dæmi útreiknað

**Sveitarfélag (mismunur-í-mismun fyrir áætlun um fjölskyldur í vanda)**: útkoman er skólasókn. Meðhöndlaða svæðið fer úr 84% í 89% sókn (+5 prósentustig) yfir tímabil áætlunarinnar; sambærilegt en ómeðhöndlað svæði fer úr 85% í 87% (+2 prósentustig) á sama tíma. DiD áhrifamat: 5 − 2 = +3 prósentustig sem rekja má til áætlunarinnar. Beitt á 2.000 nemenda hóp á meðhöndlaða svæðinu samræmist þetta um það bil 60 viðbótarnemendum (3% × 2.000) sem komast í hærri sóknarflokk, framreikning sem ætti að tilkynna með fyrirvara um samsíða þróun, ekki sem nákvæma höfðatölu.

**Góðgerðarfélag (pörun eftir líkindaskori fyrir félag um atvinnuhæfni)**: 300 þátttakendur áætlunar eru paraðir við 300 einstaklinga úr stærra stjórnsýslugagnasafni með líkindaskori byggðu á aldri, fyrri atvinnusögu og menntunarstigi. Atvinnuhlutfall eftir tólf mánuði: pöruð meðhöndluð hópur 46%, pöruð samanburðarhópur 33%. PSM áhrifamat: 46% − 33% = +13 prósentustig sem rekja má til áætlunarinnar, með því skilyrði að enginn óskoðaður ruglingsþáttur (eins og hvatning) knýi bæði þátttöku og útkomu.

## Tengsl við hugbúnaðarverkfræði

Hvort einhver þessara hönnuna er framkvæmanleg síðar veltur mjög á gagnaverkfræðiákvörðunum sem teknar eru snemma. RDD þarf nákvæmlega skráða keyrslubreytu og raunverulega hreinan réttindaþröskuld; DiD þarf sambærileg pallborðsgögn yfir tíma fyrir bæði meðhöndluð svæði og samanburðarsvæði, sem þýðir samræmdar tengingar yfir kerfi og ár; PSM þarf ríkuleg grunnskýribreytugögn sem safnað er fyrir meðferð, ekki endurbyggð eftir á. Gagnalíkan hannað samhliða [breytingakenning](../breytingakenning/) og [rökvirknilíkan](../rökvirknilíkan/) frá upphafi — sem skráir grunnskýribreytur, dagsetningar og færslur gjaldgengar í samanburðarhóp — er það sem gerir strangt áhrifamat mögulegt síðar, í stað dýrs flýtis eftir á. Sjá [áhrifamat og ferlamat](../áhrifamat-og-ferlamat/) fyrir viðbótarspurninguna sem þessar aðferðir svara ekki einar og sér.

## Gildrur

- **Að þvinga fram RCT þar sem það er óframkvæmanlegt eða siðferðilega óásættanlegt**, eða öfugt að íhuga aldrei hálftilraunahönnun þegar raunverulegt tækifæri til hennar — stefnuþröskuldur, áfangaskipt útbreiðsla — var tiltækt og ónýtt.
- **Að hunsa forsenduna um samsíða þróun í DiD.** Ef samanburðarsvæðið var þegar farið að víkja frá meðhöndlaða svæðinu fyrir inngripið er tveggja punkta samanburðurinn mengaður; athugaðu þróun fyrir inngrip, ekki aðeins fyrir/eftir.
- **Að para aðeins á skoðuðum skýribreytum í PSM.** Óskoðað val, eins og hvatning þátttakenda, getur skekkt matið jafnvel þegar skoðaðar skýribreytur eru vel jafnvægar.
- **Meðhöndlun keyrslubreytu í RDD.** Ef fólk getur haft áhrif á einkunn sína til að falla rétt innan réttindaþröskulds einangrar samfellan ekki lengur orsakaáhrif.

## Heimildir

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
