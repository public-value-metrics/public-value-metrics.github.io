# Cyfrifeg cyfalaf naturiol

Mae cyfrifeg cyfalaf naturiol yn rhoi'r amgylchedd ar yr un sail ag unrhyw ased cenedlaethol neu
sefydliadol arall: mae'n mesur stoc yr adnoddau naturiol (coetiroedd, priddoedd, afonydd,
gwlyptiroedd, yr atmosffer) a llif y gwasanaethau y maent yn eu cynhyrchu (dal a storio carbon,
amddiffyn rhag llifogydd, hamdden, bwyd), yn nhermau ffisegol ac ariannol fel ei gilydd, fel bod
dihysbyddu amgylcheddol yn dod i'r amlwg mewn gwneud penderfyniadau yn yr un modd ag y byddai
disbyddu cyfalaf ariannol. Mae'r DU yn un o'r llywodraethau mwyaf datblygedig o ran gwneud hyn yn
systematig, wedi'i yrru gan y Cynllun Amgylchedd 25 Mlynedd (2018) ac wedi'i weithredu trwy
gyfrifon Cyfalaf Naturiol y DU yr ONS ac arweiniad atodol Llyfr Gwyrdd Trysorlys EM.

## Pam mae hyn yn bwysig

Mae cyfrifeg gonfensiynol — corfforaethol a llywodraethol fel ei gilydd — yn trin coedwig fel un
ddiwerth nes iddi gael ei chwympo a'i gwerthu fel coed lif, ac ar y pwynt hwnnw mae'n dod yn CDG.
Mae cyfrifeg cyfalaf naturiol yn bodoli i gau'r bwlch hwnnw: ymrwymodd Cynllun Amgylchedd 25
Mlynedd y DU y llywodraeth i ymgorffori meddylfryd cyfalaf naturiol ar draws polisi, gan ddatgan
yn benodol yr uchelgais i fod "y genhedlaeth gyntaf i adael yr amgylchedd mewn cyflwr gwell nag y
cawsom ef." Ers hynny mae'r ONS wedi cyhoeddi cyfrifon Cyfalaf Naturiol blynyddol y DU
(<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>)
sy'n amcangyfrif gwerth ariannol gwasanaethau ecosystem — o hamdden coetir i fanteision iechyd
mannau gwyrdd trefol i storio carbon mewn mawndiroedd — gan ddefnyddio'r un fframwaith Cyfrifon
Cenedlaethol a ddefnyddir ar gyfer cyfalaf a gynhyrchir, fel y gall cyfalaf naturiol eistedd yn y
pen draw ar yr un fantolen â ffyrdd, adeiladau, ac offer. Mae arweiniad Enabling a Natural Capital
Approach (ENCA) Trysorlys EM, sy'n atodol i'r Llyfr Gwyrdd
(<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>),
yn nodi sut y dylai arfarnwyr werthfawrogi costau a buddion amgylcheddol mewn achosion busnes, fel
y gellir cymharu cynllun ffordd sy'n dinistrio hen goetir neu gynllun llifogydd sy'n adfer gwlyptir
ar delerau ariannol cyson yn hytrach na bod gan un rif ac un arall baragraff o rybuddion.

## Y fathemateg

```
Gwerth ased gwasanaeth ecosystem = NPV llif y gwasanaethau y mae'r ased yn eu darparu

Gwerth ased = Σ (t = 1 hyd T) [gwerth llif gwasanaeth blynyddol_t / (1 + r)^t]

lle:
  gwerth llif gwasanaeth_t = maint y gwasanaeth ym mlwyddyn t × gwerth uned
                              (e.e. ymweliadau hamdden × gwerth y pen;
                               tunelli o garbon a ddaliwyd × pris carbon)
  r = cyfradd ddisgowntio (cyfradd ddisgowntio gymdeithasol y Llyfr Gwyrdd — gweler
      [cyfradd ddisgowntio gymdeithasol](../social-discount-rate/))
  T = gorwel amser y disgwylir i'r ased ddarparu'r gwasanaeth drosto
```

Dyma'r un strwythur gwerth presennol net yn union â'r hyn a ddefnyddir i werthfawrogi cyfalaf a
gynhyrchir neu arfarnu unrhyw fuddsoddiad cyhoeddus o dan
[arfarniad Llyfr Gwyrdd](../green-book-appraisal/) — cyfraniad cyfrifeg cyfalaf naturiol yw
cyflenwi meintiau ffisegol credadwy a gwerthoedd uned ar gyfer gwasanaethau a brisiwyd yn sero
cynt.

## Enghraifft waith

**Coetir trefol, gwerth hamdden**: mae coetir 50 hectar yn derbyn amcangyfrif o 80,000 o
ymweliadau hamdden y flwyddyn, pob un wedi'i werthfawrogi (trwy'r dull cost-teithio neu ddewisiad
datganedig — gweler [prisio dewisiad datgeledig](../revealed-preference-valuation/) a
[prisio dewisiad datganedig](../stated-preference-valuation/)) ar £3 yr ymweliad. Disgwylir i'r
coetir barhau i ddarparu'r gwasanaeth hwn am 50 mlynedd, wedi'i arfarnu ar gyfradd ddisgowntio o
3.5%.

```
Gwerth hamdden blynyddol = 80,000 × £3 = £240,000/flwyddyn

NPV dros 50 mlynedd ar 3.5% ≈ £240,000 × ffactor blwydd-dal(3.5%, 50 mlynedd)
ffactor blwydd-dal(3.5%, 50) ≈ 21.4

Gwerth ased ≈ £240,000 × 21.4 ≈ £5,136,000
```

**Ychwanegu storio carbon**: mae'r un coetir yn dal ac yn storio amcangyfrif o 400 tunnell o CO2 y
flwyddyn, wedi'i werthfawrogi ar bris carbon anfasnachol y llywodraeth o oddeutu £75/tunnell
(enghreifftiol — defnyddiwch werthoedd carbon cyhoeddedig BEIS/DESNZ cyfredol ar gyfer arfarniad
byw).

```
Gwerth carbon blynyddol = 400 × £75 = £30,000/flwyddyn
NPV dros 50 mlynedd ar 3.5% ≈ £30,000 × 21.4 ≈ £642,000

Cyfanswm gwerth ased y coetir (hamdden + carbon) ≈ £5,136,000 + £642,000
                                                   ≈ £5,778,000
```

Mae hyn cyn ychwanegu gwasanaethau lliniaru llifogydd, bioamrywiaeth, neu ansawdd aer y mae
arweiniad ENCA hefyd yn gofyn i arfarnwyr eu hystyried — mae'r cyfanswm yn fwriadol yn llawr, nid
yn nenfwd.

## Cysylltiad peirianneg feddalwedd

- Gall systemau rheoli amgylcheddol ac asedau ar gyfer awdurdodau lleol ac asiantaethau (parciau,
  priffyrdd, cyrff dŵr) atodi cofrestr cyfalaf naturiol ochr yn ochr â'u cofrestr asedau ffisegol,
  gan ddefnyddio'r un patrwm llif-gwasanaeth-lluosi-gwerth-uned ag unrhyw
  [gronfa ddata cost uned](../unit-cost-databases/) arall y mae'r sefydliad yn ei chynnal.
- Gan fod NPV cyfalaf naturiol yn sensitif i'r gyfradd ddisgowntio (gweler ffactor blwydd-dal yr
  enghraifft waith), dylai unrhyw offeryn sy'n ei gyfrifo ddatgelu'r gyfradd a'r gorwel fel
  mewnbynnau gweladwy, nid eu claddu — yr un egwyddor tryloywder a drafodir o dan
  [degwch rhwng cenedlaethau a disgowntio cynaliadwyedd](../intergenerational-equity-and-sustainability-discounting/).
- Mae cyfrifon cyfalaf naturiol yn gynyddol yn fewnbwn gofynnol i adrannau effaith amgylcheddol
  achos busnes [arfarniad Llyfr Gwyrdd](../green-book-appraisal/); dylai tîm cyflenwi sy'n
  adeiladu offer achos busnes drin cyfrifon yr ONS a gwerthoedd uned ENCA fel data cyfeirio i'w
  integreiddio, nid rhywbeth y mae arfarnwyr yn ei ailgyfrifo o'r dechrau bob tro.

## Peryglon

- **Cyfrif dwywaith wasanaethau ecosystem sy'n gorgyffwrdd** — gall gwerth hamdden a gwerth
  bioamrywiaeth ar gyfer yr un safle rannu data parodrwydd-i-dalu sylfaenol; mae arweiniad ENCA yn
  rhybuddio'n benodol yn erbyn crynhoi prisiadau sy'n deillio o offerynnau arolwg sy'n gorgyffwrdd.
- **Trin gwerth ased cyfalaf naturiol fel un statig** — mae llifoedd gwasanaeth yn newid gyda
  hinsawdd, rheolaeth, a phwysau defnydd tir; nid yw gwerth carbon a lliniaru llifogydd coetir y
  degawd hwn yn eiddo parhaol i'r safle.
- **Defnyddio gwerthoedd uned cyfartaledd cenedlaethol ar gyfer penderfyniad hynod leol** — mae
  gan hectar o goetir trefol hygyrch a hectar o ucheldir anghysbell werth hamdden gwahanol iawn;
  mae arweiniad ENCA yn argymell gwerthoedd lleol neu safle-benodol lle bo ar gael, yn hytrach na
  dibynnu'n ddiofyn ar gyfartaleddau cenedlaethol.

## Ffynonellau

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
