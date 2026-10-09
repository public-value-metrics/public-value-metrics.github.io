# Kostnaður á hverja færslu

Kostnaður á hverja færslu er helsti einingarhagfræðimælikvarðinn fyrir stafræna þjónustu hins opinbera: heildarkostnaður við að afhenda þjónustuleið, deilt með fjölda færslna sem lokið er í gegnum hana. Hann var flaggskipstalan á hinum gamla GOV.UK Performance Platform, og hann er talan sem fjármagnaði áratug af fjárfestingu í „stafrænu sem sjálfgefnu“ — sem er einmitt ástæðan fyrir því að hann er líka sá mælikvarði sem hættast er við að sé hagrætt.

## Hvers vegna það skiptir máli

Digital Efficiency Report frá Cabinet Office 2012 setti samanburð á kostnaði þjónustuleiða fram á hátt sem festist í sessi: stafrænar færslur reyndust kosta um það bil 20 sinnum minna en símleiðis og um 50 sinnum minna en á staðnum, með skýringartölum frá sveitarfélögum upp á um það bil 0,15 £ á hverja vefsfærslu á móti 2,83 £ símleiðis og 8,62 £ á staðnum. Þessi eini samanburður varð réttlæting þess að endurhanna þær 25 fyrirmyndarþjónustur sem nefndar eru í Government Digital Strategy, og fyrir sérhver viðskiptarök ráðuneyta sem hafa vitnað í sparnað af tilfærslu milli þjónustuleiða síðan. Talan er raunverulega gagnleg sem vísbending um stærðargráðu, en hlutfallið ræðst alfarið af því hvað er talið hvorum megin: sanngjarn kostnaður símaleiðar felur í sér starfsfólk símavers, símasamning, þjálfun og húsnæði; sanngjarn stafrænn kostnaður felur í sér hýsingu, áframhaldandi laun vöruteymis, tíma þjónustuborðs vegna misheppnaðra ferða og aðstoðaða stafræna leið sem krafist er af lið 5 í [staðli um stafræna þjónustu](../staðall-um-stafræna-þjónustu/). Fjarlægðu nógu mikið af þessu af stafrænu hliðinni og hvaða þjónusta sem er lítur út fyrir að vera ódýr.

## Stærðfræðin

```
Kostnaður á hverja færslu = heildarúthlutaður kostnaður þjónustuleiðar / lokið færslur

Heildarúthlutaður kostnaður þjónustuleiðar ætti að innihalda:
  + hýsingu og innviði
  + kostnað vöru-/verkfræði-/stuðningsteymis (afskrifaður)
  + kostnað við efni og þjónustuhönnun (afskrifaður)
  + kostnað við aðstoðaðan stafrænan/aðgengisstuðning
  + kostnað vegna bilunareftirspurnar (notendur sem mistakast stafrænt og
    falla aftur á síma)
  − einskiptiskostnaður við smíði er afskrifaður yfir áætlaðan líftíma þjónustunnar,
    ekki gjaldfærður allur á fyrsta ári

Algengt bókhaldsbragð:
  „Jaðarkostnaður á hverja færslu“ (aðeins hýsing, þegar smíðað er) er vitnað í
  eins og hann væri „meðalkostnaður á hverja færslu“ (heildarkostnaður að
  meðtöldu teyminu sem heldur áfram að smíða og reka þjónustuna). Munurinn
  getur verið 10-faldur eða meiri fyrir þjónustu með stórt, virkt afhendingarteymi.
```

## Dæmi útreiknað

**Þjónusta við endurnýjun ökutækjaskatts**: 4 milljónir færslna á ári.

```
Aðeins jaðartala (bragðið):
  Aðeins hýsing + greiðsluvinnsla = 180.000 £/ár
  Kostnaður á hverja færslu = 180.000 / 4.000.000 = 0,045 £
  → fyrirsagnartalan sem vitnað er í í viðskiptarökum

Full tala (sú heiðarlega):
  Hýsing + greiðsla                       180.000 £
  Vöru-/verkfræðiteymi (8 ársverk)        720.000 £
  Þjónustuborð (misheppnaðar/spurðar færslur) 310.000 £
  Aðstoðuð stafræn símalína               140.000 £
  Samtals                               1.350.000 £
  Kostnaður á hverja færslu = 1.350.000 / 4.000.000 = 0,3375 £

Full talan er enn um það bil 8 sinnum ódýrari en 2,83 £ viðmiðið fyrir
símaleið úr Digital Efficiency Report — raunverulegur og réttlætanlegur
sparnaður — en 7,5 sinnum hærri en aðeins-jaðartalan sem vitnað er í
í flýtiútgáfunni. Báðar tölurnar eru „sannar“; aðeins önnur er sambærileg
við kostnað símaleiðarinnar sem hún er borin saman við.
```

## Tengsl við hugbúnaðarverkfræði

Kostnaður á hverja færslu er þar sem arkitektúrákvarðanir verða að fjármálatölu: þjónusta sem stækkar sjálfvirkt á hreinan hátt og þarfnast lítillar handvirkrar íhlutunar lækkar töluna með tímanum; þjónusta sem býr til mikinn fjölda stuðningsbeiðna vegna ruglingslegra villuástanda hækkar hana óháð hagkvæmni hýsingar. Hann er eðlilegur fylgimælikvarði við lið 10 í [staðli um stafræna þjónustu](../staðall-um-stafræna-þjónustu/) („skilgreindu hvernig árangur lítur út og birtu frammistöðugögn“) og við [þjónustustaðlar og færslumælikvarðar](../þjónustustaðlar-og-færslumælikvarðar/), sem setur fram fyllra safn lykilmælikvarða sem þessi tala situr innan. Hann nýtist einnig beint í útreikninga á [sparnaður af tilfærslu milli þjónustuleiða](../sparnaður-af-tilfærslu-milli-þjónustuleiða/) og ætti að samræma við [heildareignarkostnaður í upplýsingatækni hins opinbera (TCO)](../heildareignarkostnaður-í-upplýsingatækni-hins-opinbera/) svo rekstrarkostnaður vettvangs og sameiginlegrar þjónustu falli ekki hljóðlega út.

## Gildrur

- **Jaðarkostnaður klæddur sem meðalkostnaður**: að vitna í kostnað við hýsingu eingöngu þegar þjónusta er smíðuð, án áframhaldandi teymis sem viðheldur, þróar og styður hana — sjá dæmið hér að ofan.
- **Að útiloka kostnað við aðstoðaða stafræna leið**: þjónustuleið uppfyllir ekki „stafrænt sem sjálfgefið“, og raunverulegur kostnaður hennar er ekki fangaður, ef varaleiðin símleiðis/á pappír sem [stafræn þátttaka](../stafræn-þátttaka/) krefst er kostnaðarmetin sérstaklega eða hunsuð.
- **Að hunsa bilunareftirspurn**: færslur sem hefjast stafrænt og mistakast, og búa samt til símtal eða pappírseyðublað, eru kostnaður stafrænu leiðarinnar, ekki leiðarinnar sem grípur bilunina.
- **Að bera saman færslur af ólíkri flækju milli þjónustuleiða**: símtöl afgreiða hlutfallslega fleiri erfið tilvik (margir framfærendur, leiðréttingar á villum, viðkvæmir umsækjendur); að bera meðalkostnað síma saman við meðalkostnað stafrænnar ofmetur hlutfallið nema færslublandan sé samræmd.

## Heimildir

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
