# Llywodraeth fel Platfform (GaaP)

Llywodraeth fel Platfform yw'r strategaeth o adeiladu cydrannau a rennir, y gellir eu hailddefnyddio — gwasanaeth hysbysu, gwasanaeth taliadau, gwasanaeth adnabod — unwaith, yn ganolog, fel bod cannoedd o wasanaethau unigol y llywodraeth yn eu defnyddio yn hytrach na phob un yn adeiladu ei fersiwn ei hun. Mae'n ail-fframio seilwaith digidol cyhoeddus fel problem economeg platfform: nid yw'r gwerth mewn unrhyw un integreiddiad, mae yn y ffaith bod cost ymylol y tîm *nesaf* sy'n ei fabwysiadu'n nesáu at sero.

## Pam mae hyn yn bwysig

Gosododd GDS y strategaeth yn ffurfiol yn ei gyhoeddiad "Government as a Platform" (2015), gan ddadlau bod y llywodraeth wedi bod yn adeiladu'r un galluoedd — cymryd taliadau, hysbysu defnyddwyr, dilysu hunaniaeth, chwilio cyfeiriadau — ar wahân mewn gwasanaeth ar ôl gwasanaeth, pob un yn cario ei faich caffael, asesu diogelwch, a chymorth parhaus ei hun. Y dewis arall oedd nifer fach o lwyfannau a rennir, wedi'u hadeiladu i safon uchel unwaith a'u hailddefnyddio ym mhobman: GOV.UK Notify ar gyfer anfon e-byst, negeseuon testun a llythyrau, GOV.UK Pay ar gyfer cymryd taliadau ar-lein, a GOV.UK One Login (olynydd i'r rhaglen adnabod GOV.UK Verify gynharach) ar gyfer dilysu hunaniaeth. Graddfa'r llwyfannau hyn yw'r dystiolaeth gliriaf fod y strategaeth wedi gweithio: mae GOV.UK Pay wedi prosesu dros £10 biliwn mewn trafodion ar draws oddeutu 1,800 o wasanaethau unigol — a lle cymerodd oddeutu pedair blynedd i brosesu ei £1 biliwn cyntaf, mae bellach yn prosesu'r un faint mewn oddeutu pum mis — tra bo GOV.UK Notify wedi anfon mwy na 9 biliwn o negeseuon ar ran dros 1,500 o sefydliadau'r llywodraeth. Osgôdd pob un o'r gwasanaethau mabwysiadu hynny adeiladu, diogelu a chynnal ei borth taliadau neu ei bibell negeseuon ei hun.

## Y fathemateg

```
Cost adeiladu fesul gwasanaeth (dim platfform) = N gwasanaeth × cost
  adeiladu, asesu diogelwch, a rhedeg un system daliadau/hysbysu/adnabod

Cost platfform = cost adeiladu sefydlog y platfform
              + cost ymylol fesul gwasanaeth sy'n mabwysiadu
                (integreiddio, cyfluniad, cymorth parhaus tîm y platfform)

Mae ailddefnyddio'n talu ei ffordd unwaith y bydd:
  cost adeiladu'r platfform < N × (cost adeiladu fesul gwasanaeth −
  cost integreiddio ymylol)

Ar gyfer platfform aeddfed, mae'r gost ymylol fesul mabwysiadwr
ychwanegol yn nesáu at y ffi drafodiad/neges yn unig — mae'r gost
sefydlog wedi'i amorteiddio ar draws ystad gyfan y llywodraeth, nid
cyllideb un adran, a dyna pam mae cydrannau GaaP fel arfer yn cael eu
hariannu'n ganolog yn hytrach na'u codi ar gost lawn ar fabwysiadwyr cynnar.
```

## Enghraifft waith

**Awdurdod lleol yn mabwysiadu GOV.UK Pay yn hytrach nag adeiladu porth taliadau ei hun**:

```
Amcangyfrif adeiladu-eich-hun:
  Gwaith cydymffurfio PCI-DSS + integreiddio + cynnal a chadw parhaus
  ≈ £85,000 adeiladu + £22,000/blwyddyn cynnal a chadw

Mabwysiadu GOV.UK Pay:
  Ymdrech integreiddio ≈ £12,000 (amser datblygwr)
  Ffioedd trafodion: caiff taliadau cerdyn llywodraeth-i-ddinesydd eu
  codi fel arfer fel canran fach ynghyd â ffi sefydlog fesul trafodiad,
  heb faich PCI-DSS ar wahân i'w gario gan y cyngor
  ≈ £12,000 untro, cost barhaus yn amrywio gyda chyfaint, nid yn sefydlog

Arbediad blwyddyn gyntaf ≈ £85,000 − £12,000 = £73,000, cyn cyfrif y
£22,000/blwyddyn o gynnal a chadw a osgowyd na'r risg cydymffurfio a
osgowyd o gadw data cerdyn mewn system a redir gan y cyngor o gwbl —
dyma'r ail gategori, sef y gwerth diogelwch a drafodir yn
public-sector-cybersecurity-value.
```

Graddiwch y £73,000 hwnnw ar draws yr oddeutu 1,800 o wasanaethau sydd bellach yn defnyddio GOV.UK Pay ac mae'r gost adeiladu gyfun a osgowyd ar draws y llywodraeth yn y cannoedd o filiynau — economeg y platfform, nid unrhyw un integreiddiad, yw lle mae gwerth y strategaeth mewn gwirionedd.

## Cysylltiad peirianneg feddalwedd

Mae Llywodraeth fel Platfform yn ddadl uniongyrchol dros [build-vs-buy-in-government](../build-vs-buy-in-government/): pan fydd cydran a rennir, wedi'i hasesu ac sy'n cael ei rhedeg yn dda yn bodoli, anaml iawn y bydd adeiladu cyfatebiaeth bwrpasol yn ddewis gwell o ran [gwerth am arian](../value-for-money/), ac mae'n methu pwynt 13 [Safon Gwasanaeth Digidol](../digital-service-standard/) ("defnyddio a chyfrannu at safonau agored, cydrannau cyffredin a phatrymau") bron drwy ddiffiniad. Mae hefyd yn newid siâp [total-cost-of-ownership-in-government-it](../total-cost-of-ownership-in-government-it/): mae mabwysiadu platfform yn cyfnewid llinell gyfalaf a chynnal a chadw fawr am gost weithredu lai, sy'n gysylltiedig â defnydd, sy'n haws ei rhagweld ac yn haws dad-ariannu os caiff gwasanaeth ei ddadgomisiynu. Mae gan ailddefnyddio agored o gydrannau gefnder yn [open-data-value](../open-data-value/) — mae'r ddau'n strategaethau ar gyfer trin rhywbeth y mae'r llywodraeth yn ei gynhyrchu unwaith fel seilwaith a rennir yn hytrach nag ased adrannol.

## Peryglon

- **Ailadeiladu cysgodol**: mae timau'n adeiladu eu hintegreiddiad taliadau neu hysbysu eu hunain yn ddistaw am fod proses ymuno'r platfform yn arafach na gwneud y gwaith eu hunain — problem ffrithiant llywodraethu, nid problem dechnoleg, ac mae'n erydu economeg ailddefnyddio'r strategaeth gyfan yn ddistaw.
- **Tanariannu'r tîm platfform o'i gymharu â'r gwerth y mae'n ei greu**: mae gwerth yn cronni i adrannau sy'n defnyddio'r platfform tra bo'r gost yn eistedd gyda thîm y platfform, gan greu risg tanfuddsoddi cronig oni bai bod cyllid wedi'i ganoli a'i ddiogelu — fersiwn o drasiedi'r comin.
- **Mesur llwyddiant platfform drwy ddefnydd yn unig**: mae rhifau mabwysiadu (gwasanaethau wedi ymuno, negeseuon a anfonwyd) yn arwydd blaenllaw, nid yn brawf o werth; y prawf gwirioneddol yw'r rhifyddeg cost adeiladu a risg a osgowyd uchod.
- **Trin "platfform" fel cyfystyr â "monolith"**: mae cydrannau GaaP yn llwyddo am fod pob un yn gwneud un peth yn dda gyda rhyngwyneb cul, sefydlog — mae bwndelu galluoedd anghysylltiedig i mewn i un "platfform" yn ail-greu'r broblem adeiladu-pwrpasol ar raddfa wahanol.

## Ffynonellau

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
