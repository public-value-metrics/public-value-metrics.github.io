# Arbedion Sifft Sianel

Arbedion sifft sianel yw'r gostyngiad cost a ragwelir wrth symud cyfaint trafodion allan o sianeli drud — ffôn, cownteri wyneb yn wyneb, post papur — ac i mewn i hunanwasanaeth digidol rhad. Dyma'r peiriant ariannol y tu ôl i "digidol yn ddiofyn", a dyma hefyd yr eitem linell yn yr achos busnes sydd fwyaf tebygol o fod yn anghywir, oherwydd nad yw'r rhagdybiaeth y mae'n gorffwys arni — bod sianeli all-lein yn crebachu wrth i ddefnydd digidol godi — yn wir ond weithiau.

## Pam mae hyn yn bwysig

Mae'r rhifyddeg yn ymddangos yn ddiymwad wrth ddefnyddio ffigurau [cost fesul trafodiad](../cost-per-transaction/) yr Adroddiad Effeithlonrwydd Digidol: symudwch filiwn o drafodion o ymweliad wyneb yn wyneb £8.62 i un digidol £0.15 ac mae'r arbediad dros £8 miliwn. Ond dim ond os caiff *capasiti sefydlog* y sianel sy'n crebachu ei ddadgomisiynu mewn gwirionedd — seddi'r ganolfan alwadau, staff y cownter, munudau'r contract ffôn — y mae arbediad yn troi'n arian parod sydd ar gael i'w ailddefnyddio, ac mae rhaglenni digidol llywodraeth leol wedi canfod dro ar ôl tro nad yw cyfanswm cyfaint cyswllt yn gostwng yn unol â defnydd digidol. Mae ymchwil o raglenni trawsnewid digidol awdurdodau lleol a chyrff megis Socitm a'r Local Government Association wedi dogfennu patrwm cylchol: mae sianeli digidol yn denu cyswllt gwirioneddol newydd (mae dinasyddion na fyddent wedi ffonio neu ymweld bellach yn gwneud hynny, am ei fod yn haws), ac mae cyfran sylweddol o drafodion "digidol" yn methu hanner ffordd drwodd ac yn cynhyrchu galwad ffôn beth bynnag — felly mae cyfaint ffôn yn gostwng llawer llai na'r hyn y byddai canran y defnydd digidol yn ei awgrymu, weithiau heb ostwng o gwbl mewn termau absoliwt hyd yn oed wrth i'w *gyfran* o gyfanswm cyswllt ostwng.

## Y fathemateg

```
Arbediad sifft sianel crynswth = cyfaint a symudwyd × (cost_hen_sianel − cost_digidol)

Arbediad net (a wireddwyd) = arbediad crynswth
                       − galw newydd/cysgodol a grëwyd gan y sianel haws
                       − cost galw methiant (methiannau digidol sy'n dal
                         i gynhyrchu galwad ffôn neu ymweliad cownter)
                       − cost capasiti sefydlog na chafodd ei ddadgomisiynu
                         (dim ond mewn unedau clir y gall canolfan alwadau
                         golli staff; anaml y bydd gostyngiad cyfaint o
                         15% yn caniatáu torri 15% o'r gweithlu)

Trothwy gwireddu: dim ond pan fydd cyfaint yn gostwng islaw'r lefel y
gall yr hen sianel ei staffio ar ei cham capasiti clir nesaf sy'n llai
(e.e. colli sifft gyfan, desg gyfan, band staffio a gontractiwyd) y
mae arbedion yn dod yn arian y gellir ei fancio
```

## Enghraifft waith

**Gwasanaeth adnewyddu bathodyn glas cyngor sir**: 60,000 o adnewyddiadau/blwyddyn, yn flaenorol 100% ffôn/papur ar £6.40 fesul trafodiad. Lansir gwasanaeth digidol newydd ac mae'n cyrraedd defnydd digidol o 65% o fewn blwyddyn, ar £0.30 fesul trafodiad digidol.

```
Cyfrifiad arbediad naïf (crynswth):
  39,000 wedi'u symud × (£6.40 − £0.30) = £237,900/blwyddyn

Yr hyn a ddigwyddodd mewn gwirionedd, yn ôl data canolfan gyswllt y cyngor:
  Gostyngodd cyfaint ffôn o 60,000/blwyddyn i 46,000/blwyddyn
  (−23%, nid −65%) oherwydd: methodd 9,000 o deithiau digidol a
  chynhyrchu galwad ddilynol (gollyngiad galw methiant), a bod 4,000 o
  bobl na fu'n adnewyddu o gwbl o'r blaen bellach yn gwneud hynny, wedi
  canfod ei bod hi'n hawdd ar-lein (galw cysgodol — gwelliant mynediad
  gwirioneddol, ond nid arbediad)

Mae'r ganolfan gyswllt ffôn wedi'i staffio mewn bandiau o 8,000 o
alwadau/CALl; mae gostyngiad o 14,000 o alwadau (60,000 → 46,000) yn
rhyddhau 1.75 CALl, wedi'i dalgrynnu i lawr yn ymarferol i 1 CALl a
gafodd ei ailddefnyddio mewn gwirionedd = £34,000/blwyddyn

Arbediad a wireddwyd = £34,000/blwyddyn ynghyd â chost adeiladu/rhedeg
  y sianel ddigidol a osgowyd ar 39,000 o drafodion ≈ £34,000 +
  (39,000 × £0.30 cost ddigidol eisoes wedi'i chyfrif) — ffracsiwn o'r
  ffigwr blaenllaw o £237,900, er bod y gwasanaeth yn dal i fod yn
  ddiamheuol well i ddefnyddwyr.
```

## Cysylltiad peirianneg feddalwedd

Y wers beirianyddol yw bod arbedion sifft sianel yn cael eu gwireddu gan benderfyniadau *gweithredol* (rhestru shifftiau, dadgomisiynu, ailnegodi contractau), nid gan gyflwyno meddalwedd — gall tîm daro pob pwynt o [Safon Gwasanaeth Digidol](../digital-service-standard/) a dal i gyflawni sero o arbediad net os na fydd neb yn dadgomisiynu capasiti sefydlog yr hen sianel. Mae offeryna galw methiant (ble yn y daith ddigidol y mae defnyddwyr yn rhoi'r gorau iddi a beth maen nhw'n ei wneud nesaf) yn broblem dadansoddeg twndis y gellir ei datrys, a dyma'r peth sydd â'r effaith fwyaf y gall tîm peirianneg ei wneud i ddiogelu'r achos arbedion; dyma hefyd y cysylltiad uniongyrchol â [cost fesul trafodiad](../cost-per-transaction/), y mae galw methiant yn ei chwyddo'n ddistaw. Gweler [benefits-realization](../benefits-realization/) am y ddisgyblaeth ehangach o wirio bod arbedion achos busnes yn glanio mewn gwirionedd, a [cynhwysiant digidol](../digital-inclusion/) am y rheswm pam na all, ac na ddylai, y sianel all-lein gael ei dadgomisiynu'n llwyr fel arfer.

## Peryglon

- **Tybio amnewid sianel un-i-un**: modelu defnydd digidol fel didyniad uniongyrchol o gyfaint ffôn/cownter, gan anwybyddu'r galw cysgodol a'r gollyngiad galw methiant a ddogfennwyd mewn ymchwil sifft sianel llywodraeth leol.
- **Bancio arbedion crynswth cyn dadgomisiynu**: cyfrif yr arbediad yn yr achos busnes yn y flwyddyn y mae defnydd yn codi, nid y flwyddyn (os o gwbl) y caiff capasiti'r hen sianel ei dorri mewn gwirionedd.
- **Anwybyddu natur gam-swyddogaeth costau staffio**: anaml y bydd gostyngiad cyfaint o 20% yn trosi'n ostyngiad cost o 20%, gan fod canolfannau cyswllt a chownteri wedi'u staffio mewn bandiau clir, nid yn barhaus.
- **Trin galw cysgodol fel gwastraff**: mae cyswllt newydd gan ddefnyddwyr a oedd wedi'u heithrio neu eu rhwystro o'r blaen yn gynnydd gwirioneddol mewn [gwerth cyhoeddus](../public-value/), nid gwall modelu — dylid ei adrodd fel canlyniad mynediad, nid ei ddidynnu fel sŵn.

## Ffynonellau

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
