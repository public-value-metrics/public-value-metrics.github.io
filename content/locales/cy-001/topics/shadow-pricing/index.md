# Prisio Cysgodol

Pris cysgodol yw gwerth amcangyfrifedig a neilltuir i nwydd, adnodd, neu allanoldeb nad oes ganddo
bris marchnad arsylwadwy, neu y mae ei bris marchnad wedi'i wyro ac nad yw'n adlewyrchu ei wir werth
cymdeithasol. Mae arfarnu'r llywodraeth yn dibynnu ar set fach o brisiau cysgodol swyddogol — carbon,
amser di-waith, llafur di-waith — a gyhoeddir yn ganolog fel bod pob adran yn defnyddio'r un rhif.

## Pam mae hyn yn bwysig

Mae prisiau cysgodol yn bodoli am na all
[dadansoddiad cost-budd cymdeithasol](../social-cost-benefit-analysis/) weithredu heb werth ariannol
ar gyfer pob cost a budd, ac mae gan sawl un o'r rhai mwyaf arwyddocaol — tunnell o garbon a ryddhawyd,
awr o amser cymudwr, awr o lafur na fyddai fel arall yn cael ei gyflogi — ddim pris marchnad o gwbl,
neu bris marchnad sy'n camgynrychioli eu gwir gost gymdeithasol. Mae Trysorlys EM a'r Department for
Energy Security and Net Zero yn cyd-gyhoeddi'r pris cysgodol carbon a ddefnyddir ar draws pob arfarniad
llywodraeth y DU
(<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>),
wedi'i seilio nid ar unrhyw bris marchnad carbon ond ar ddull sy'n gyson â tharged: gosodir gwerth
carbon ar y gost ymatal ymylol sydd ei angen i gyrraedd cyllidebau carbon deddfwriaethol y DU, sy'n
rhesymeg hollol wahanol i arsylwi'r hyn y mae carbon yn ei fasnachu amdano mewn gwirionedd ar Gynllun
Masnachu Allyriadau'r UE neu'r DU.

Mae'r gyfradd cyflog cysgodol yn dilyn rhesymeg debyg ar ochr llafur. Nid yw cyflogi rhywun a fyddai
fel arall wedi bod yn ddi-waith yn costio i gymdeithas ei gyflog llawn — mae rhan o'r cyflog hwnnw'n
drosglwyddiad o daliadau budd-daliadau na chânt eu talu mwyach a chyfle hamdden/chwilio a gollwyd yn
hytrach na thynnu net newydd ar adnoddau cymdeithas — felly mae canllawiau'r Llyfr Gwyrdd yn gosod
pris cysgodol islaw'r cyflog marchnad ar gyfer llafur a dynnir o ddiweithdra, gan adlewyrchu gwir gost
gyfle'r llafur hwnnw (gweler
[cost gyfle mewn gwariant cyhoeddus](../opportunity-cost-in-public-spending/)) yn hytrach na'i bris
marchnad.

## Y fathemateg

```
Pris cysgodol carbon (strwythur darluniadol, ffigurau cyfredol o offeryn
gwerthoedd carbon swyddogol BEIS/DESNZ — peidiwch â defnyddio ffigurau hen):
  Gwerth sector a fasnachwyd: wedi'i lywio gan lwybrau pris lwfans ETS
  Gwerth sector heb ei fasnachu (yn gyson â tharged): wedi'i osod ar gost
    ymylol ymatal sydd ei angen i gyrraedd cyllidebau carbon deddfwriaethol,
    yn codi dros amser wrth i opsiynau ymatal haws gael eu disbyddu
  Wedi'i gymhwyso fel: £/tunnell CO2e × tunelli a ryddhawyd neu a ataliwyd
    gan yr opsiwn, wedi'i ddisgowntio ar y gyfradd ddisgowntio gymdeithasol
    ar gyfer blynyddoedd i ddod

Cyfradd cyflog cysgodol (SWR):
  SWR = Cyflog marchnad − (gwerth y cyfle hamdden/chwilio a arbedwyd
                            + gwerth taliadau lles na chânt eu talu mwyach)
  Fel arfer yn cael ei fynegi fel cyfran o'r cyflog marchnad (e.e. SWR = 0.6
    × cyflog marchnad mewn ardal â diweithdra uchel, yn unol â chanllawiau
    Atodiad A y Llyfr Gwyrdd ar farchnadoedd llafur â chapasiti sbâr)
```

Confensiynau polisi a osodwyd yn ganolog yw'r ddau ffigur, nid arsylwadau marchnad empirig — pwynt
cyfan pris cysgodol yw dirprwyo ar gyfer marchnad sydd ar goll neu wedi'i gwyro, felly rhaid i
arfarniad sy'n defnyddio un ddyfynnu'r ffynhonnell swyddogol gyfredol yn hytrach na deillio ei ffigur
ei hun, yn union fel bod arfarniad pob adran yn gymaradwy.

## Enghraifft waith

**Llywodraeth genedlaethol**: mae arfarniad cynllun amddiffyn rhag llifogydd yn amcangyfrif ei fod yn
osgoi 400 tunnell o allyriadau CO2e y flwyddyn (drwy lai o ddefnydd o offer brys a llai o garbon
ymgorfforedig o ailadeiladu a osgowyd) dros oes arfarnu 30 mlynedd, o'i gymharu â llinell sylfaen
"gwneud y lleiaf".

```
Pris cysgodol carbon darluniadol: £280/tunnell CO2e (blwyddyn 1, yn codi dros
  gyfnod yr arfarniad yn unol â'r amserlen werthoedd carbon heb ei fasnachu swyddogol)
Budd carbon blwyddyn 1 = 400 × £280 = £112,000
```

Am fod gan yr amserlen swyddogol werth carbon sy'n *codi* dros gyfnod yr arfarniad (yn adlewyrchu
cyllidebau carbon sy'n tynhau), rhaid i'r dadansoddwr gymhwyso'r gwerth cywir penodol i'r flwyddyn ar
gyfer pob blwyddyn o'r llif 30 mlynedd, nid cyfradd wastad — byddai defnyddio gwerth blwyddyn 1 drwy
gydol yn tanddatgan buddion blynyddoedd diweddarach ac yn ystumio'r graddio yn erbyn dyluniadau
amddiffyn rhag llifogydd eraill â phroffiliau carbon gwahanol.

**Awdurdod lleol**: mae rhaglen cymorth cyflogaeth cyngor ar gyfer trigolion di-waith hirdymor yn
lleoli 150 o bobl mewn swyddi'n talu £11/awr. Byddai prisio hyn gan ddefnyddio'r cyflog marchnad llawn
yn credydu'r rhaglen â £11 × oriau a weithiwyd fel budd cymdeithasol, ond mae'r dull cyfradd cyflog
cysgodol yn cydnabod nad gweithwyr a dynnwyd o swyddi eraill oedd y rhain — roedd gwir gost gyfle eu
llafur cyn y rhaglen yn isel.

```
Cyflog marchnad: £11.00/awr
Cyfradd cyflog cysgodol (darluniadol, diweithdra lleol uchel): 0.6 × cyflog marchnad = £6.60/awr
Budd cymdeithasol net fesul awr a weithiwyd ≈ £11.00 − £6.60 = £4.40/awr
  (y gwerth "ychwanegol" a grëwyd drwy symud llafur segur go iawn i mewn i
   gynhyrchiad, yn wahanol i'r cyflog ei hun, sy'n bennaf yn drosglwyddiad)
```

Dyna pam y gall arfarniadau rhaglenni cyflogaeth mewn ardaloedd â diweithdra uchel ddangos gwerth
cymdeithasol net cadarnhaol hyd yn oed pan na fyddai'r un rhaglen, wedi'i rhedeg mewn ardal cyflogaeth
lawn lle byddai llafur wedi'i ddadleoli'n cael ei dynnu'n syml o swyddi eraill, yn gwneud hynny.

## Cysylltiad peirianneg feddalwedd

Yn anaml y mae prisio cysgodol yn cyffwrdd â chyflenwi meddalwedd yn uniongyrchol, ond mae'n bwysig
pryd bynnag y mae achos busnes yn hawlio budd carbon neu gymdeithasol o newid TG — rhaid i gyfuniad
canolfannau data sy'n hawlio arbedion carbon, neu wasanaeth di-bapur sy'n hawlio carbon argraffu a
phostio a osgowyd, ddefnyddio'r pris cysgodol carbon swyddogol cyfredol yn hytrach na ffigur
dyfeisiedig, a chymhwyso'r amserlen gywir flwyddyn-wrth-flwyddyn yn hytrach na chyfradd wastad, yn
union fel gydag unrhyw fewnbwn arfarniad Llyfr Gwyrdd arall. Gweler
[cost cyfan perchnogaeth mewn TG llywodraeth](../total-cost-of-ownership-in-government-it/) a
[gwerth seiberddiogelwch sector cyhoeddus](../public-sector-cybersecurity-value/), sydd ill dau'n aml
angen pris cysgodol ar gyfer mewnbwn anodd ei brisio (risg toriad, amser segur) ochr yn ochr ag eitemau
wedi'u costio'n uniongyrchol.

## Peryglon

- **Defnyddio ffigur carbon neu gyflog hen.** Mae'r ddau werth yn cael eu diwygio'n gyfnodol gan
  ganllawiau canolog; ni fydd arfarniad wedi'i adeiladu ar ffigur a ddisodlwyd yn goroesi craffu'r
  Trysorlys.
- **Cymhwyso pris carbon cysgodol gwastad ar draws arfarniad aml-ddegawd.** Mae'r amserlen swyddogol
  yn codi dros amser; mae defnyddio gwerth blwyddyn 1 drwy gydol yn camddisgrifio proffil y buddion
  neu'r costau.
- **Cymysgu'r cyflog cysgodol â disgownt ar gyflog gwirioneddol y gweithiwr.** Mae'r gyfradd cyflog
  cysgodol yn addasu prisiad y llafur *gan yr arfarniad*, nid y cyflog y mae'r gweithiwr yn ei dderbyn
  mewn gwirionedd — mae cymysgu'r ddau yn gwahodd cyfiawnhau (yn anghywir) cyflog islaw'r farchnad.
- **Deillio pris cysgodol pwrpasol yn lle defnyddio'r un swyddogol.** Confensiynau polisi yw prisiau
  cysgodol yn union fel bod arfarniadau'n gymaradwy ar draws adrannau; mae ffigur a ddyfeisiwyd yn
  lleol, ni waeth pa mor rhesymol, yn torri'r gymaroldeb honno.

## Ffynonellau

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
