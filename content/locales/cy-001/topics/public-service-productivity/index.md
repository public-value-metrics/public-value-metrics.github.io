# Cynhyrchiant Gwasanaethau Cyhoeddus

Mae cynhyrchiant gwasanaethau cyhoeddus yn mesur pa mor effeithlon y mae gwariant cyhoeddus yn
trosi mewnbynnau (staff, cyfalaf, nwyddau a gwasanaethau) yn allbynnau wedi'u haddasu o ran ansawdd,
ar gyfer gwasanaethau — iechyd, addysg, plismona, gofal cymdeithasol — nad oes ganddynt bris marchnad
ac felly dim ffigur refeniw i rannu costau ynddo. Mae Swyddfa Ystadegau Gwladol y DU (ONS) wedi
cyhoeddi'r gyfres hon ers canol y 2000au ac mae'n parhau i fod yr ymgais genedlaethol fwyaf datblygedig
yn fethodolegol i ateb "a yw'r llywodraeth yn gwella neu'n gwaethygu wrth drosi arian yn wasanaethau
cyhoeddus?"

## Pam mae hyn yn bwysig

Mewn marchnad, cynhyrchiant yw (gwerth allbwn) / (cost mewnbwn), ac mae gwerth allbwn yn arsylladwy
oherwydd bod rhywun yn talu amdano. Nid oes gan lawdriniaeth clun newydd, lle mewn ysgol, na phatrôl
heddlu bris gwerthu, felly'n naïf gallwch ond mesur *mewnbynnau* (yr hyn a wariwyd) — sy'n temtio
sylwebyddion i drin gwariant cyhoeddus cynyddol fel rhywbeth sy'n ddrwg yn awtomatig, gan fod mwy o
fewnbwn gyda gweithgaredd pennawd gwastad yn edrych fel cynhyrchiant sy'n gostwng. Mae methodoleg ONS,
a nodir yn ei chyhoeddiadau "Sources and Methods" ar gyfer cynhyrchiant gwasanaethau cyhoeddus, yn
datrys hyn drwy lunio mynegai *allbwn* o gyfeintiau gweithgaredd (llawdriniaethau a gyflawnwyd, disgyblion
a addysgwyd, troseddau a ymchwiliwyd) ac yna *addasu ansawdd* y mynegai allbwn hwnnw — ar gyfer iechyd,
gan ymgorffori cyfraddau goroesi ac amseroedd aros; ar gyfer addysg, gan ymgorffori cyrhaeddiad; ar
gyfer plismona, gan ymgorffori canlyniadau fel datrys achosion — fel bod gwasanaeth sy'n cyflawni'r un
nifer o lawdriniaethau ond yn cyflawni cyfraddau goroesi gwell yn cofrestru fel un mwy cynhyrchiol,
nid yn fwy costus yn unig. Mae'r canfyddiad pennawd sy'n ailddigwydd ar draws cyhoeddiadau ONS yn
sobreiddiol i'r sector: gostyngodd cynhyrchiant gwasanaethau cyhoeddus y DU yn sydyn yn ystod pandemig
COVID-19 ac, erbyn cyhoeddiadau canol y 2020au ONS ei hun, nid oedd wedi adfer i lefelau 2019 mewn sawl
is-sector gan gynnwys gofal iechyd, hyd yn oed wrth i wariant godi — bwlch sy'n ail-fframio "mwy o
gyllid" a "mwy o gynhyrchiant" fel dau gwestiwn cwbl ar wahân.

## Y fathemateg

```
Mynegai allbwn (cyfaint) = Σ (gweithgaredd_i × pwysau cost uned gymharol_i), wedi'i bwysoli yn ôl
                            blwyddyn sylfaen ar draws holl weithgareddau'r gwasanaeth (e.e.
                            llawdriniaethau clun, llawdriniaethau cataract, ymgynghoriadau meddyg
                            teulu), yn debyg i fynegai cyfaint Laspeyres/Paasche

Addasiad ansawdd          = mynegai allbwn × ffactor addasu ansawdd
                            (e.e. yn ymgorffori newid mewn cyfraddau goroesi, amseroedd aros,
                            cyrhaeddiad, neu aildroseddu fel lluosydd ar gyfaint amrwd)

Mynegai mewnbwn           = Σ (oriau llafur × pwysau cost llafur) + (cost nwyddau/gwasanaethau,
                            wedi'i datchwyddo) + (traul cyfalaf)

Twf cynhyrchiant ffactorau cyfan = % newid ym mynegai allbwn wedi'i addasu am ansawdd
                                    − % newid ym mynegai mewnbwn
```

## Enghraifft waith

**Cyfrifiad cynhyrchiant sector acíwt y GIG darluniadol** (mae'r strwythur yn dilyn methodoleg ONS):

```
Blwyddyn 1: mynegai cyfaint allbwn = 100.0 (blwyddyn sylfaen), mynegai mewnbwn = 100.0
            → mynegai cynhyrchiant = 100.0

Blwyddyn 2: mae cyfaint gweithgaredd yn codi 3.0% (mwy o lawdriniaethau, mwy o apwyntiadau)
            ond mae amser aros cyfartalog yn gwaethygu, gan gymhwyso disgownt addasu ansawdd
            o −1.0%
            Mynegai allbwn wedi'i addasu am ansawdd = 100 × 1.030 × 0.990 = 101.97

            Mae mewnbynnau'n codi: niferoedd staff +4.0%, costau eraill (wedi'u datchwyddo) +1.5%,
            mynegai mewnbwn pwysoledig = 100 × 1.032 = 103.2

Twf cynhyrchiant = (101.97 / 100 − 1) − (103.2 / 100 − 1)
                  = 1.97% − 3.2% = −1.23 pwynt canran

Dehongliad: cododd gweithgaredd, ond cododd mewnbynnau'n gyflymach a gostyngodd ansawdd ychydig,
felly gostyngodd cynhyrchiant — allbwn fesul uned mewnbwn — er bod "mwy o ofal wedi'i gyflenwi."
```

Dyma'r union batrwm y mae cyhoeddiadau ONS wedi'i adrodd dro ar ôl tro ar gyfer rhannau o'r GIG ar ôl
y pandemig: gwariant cynyddol a gweithgaredd amrwd cynyddol yn cyd-fodoli â chynhyrchiant a fesurwyd
yn gostwng unwaith y caiff addasiad ansawdd a thwf mewnbynnau eu cyfrif ill dau.

## Cysylltiad peirianneg feddalwedd

Mae cynhyrchiant gwasanaethau cyhoeddus yn gyfochrog lefel-poblogaeth â dadleuon cynhyrchiant
peirianneg (pwyntiau stori a gyflenwyd yn erbyn [mesurau DORA](../dora-metrics-for-public-value/)
yn erbyn [mesurau llif](../flow-metrics-in-government-delivery/)): mae trwybwn amrwd heb addasiad
ansawdd yr un mor gamarweiniol mewn ysbyty ag y mae "llinellau cod a gyflenwyd" ar dîm meddalwedd.
Dylai timau sy'n adeiladu piblinellau data perfformiad ar gyfer adrannau drin addasiad ansawdd fel
cam trawsnewid cyntaf-ddosbarth, wedi'i fersiynu, nid troednodyn — oherwydd bod hygrededd ONS ei hun
yn dibynnu ar i'r addasiad hwnnw fod yn dryloyw, yn atgynyrchadwy, ac yn cael ei ddiwygio wrth i ddata
ansawdd gwell gyrraedd (mae ONS yn diwygio amcangyfrifon cynhyrchiant blynyddoedd blaenorol wrth i
ddata ansawdd sylfaenol — e.e. cyfraddau goroesi — gael ei gwblhau, felly rhaid i unrhyw system i lawr
yr afon sy'n defnyddio'r ystadegau hyn drin diwygiadau ôl-ddyddiedig, nid dim ond atodi cyfnodau newydd).
Mae hefyd yn croesi'n uniongyrchol â
[chyfanswm cost perchnogaeth](../total-cost-of-ownership-in-government-it/) a
[chynhyrchiant AI yn y sector cyhoeddus](../ai-productivity-in-the-public-sector/): nid yw system sy'n
cynyddu cyfaint gweithgaredd amrwd heb wella na chynnal ansawdd yn welliant cynhyrchiant, yn ôl
diffiniad ONS ei hun.

## Peryglon

- **Trin twf mewnbwn fel twf cynhyrchiant**: mae mwy o wariant yn ariannu mwy o staff yn cynhyrchu mwy
  o *weithgaredd*, nid mwy o *gynhyrchiant*, oni bai bod allbwn fesul uned mewnbwn hefyd yn codi — mae'r
  ddau'n cael eu cymysgu'n rheolaidd mewn sylwebaeth wleidyddol.
- **Anwybyddu addasiad ansawdd yn gyfan gwbl**: bydd mynegai allbwn wedi'i adeiladu o gyfrifon
  gweithgaredd amrwd yn unig yn dangos "enillion cynhyrchiant" o wneud mwy o rywbeth is-werth neu
  is-ansawdd; mae addasiad ansawdd ONS yn bodoli'n benodol i ddal hyn.
- **Cymharu mynegeion cynhyrchiant ar draws is-sectorau heb baru hen ddull methodoleg**: mae
  cynhyrchiant iechyd, addysg, a phlismona bob un wedi'u hadeiladu o ffynonellau data gweithgaredd ac
  ansawdd gwahanol ar gylchoedd diwygio gwahanol — mae cymhariaeth draws-sector naïf yn cymharu offerynnau
  anghydnaws.
- **Darllen gostyngiad cynhyrchiant un flwyddyn fel tuedd barhaol**: mae ffigurau cynhyrchiant cyfnod y
  pandemig ac ôl-bandemig wedi dangos anwadalrwydd blwyddyn-ar-flwyddyn sylweddol wrth i ddata ansawdd
  (e.e. rhestrau aros, adferiad ethol) ei hun symud; mae ONS yn rhybuddio'n gyson yn erbyn
  gor-ddehongli symudiadau un flwyddyn.

## Ffynonellau

- Office for National Statistics, cyfres "Public Service Productivity."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
