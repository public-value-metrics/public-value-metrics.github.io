# Mynegai Amddifadedd Lluosog (IMD)

Yr IMD yw'r mesur swyddogol o amddifadedd cymharol ar gyfer ardaloedd bach yn Lloegr, sy'n graddio
pob un o 32,844 "Lower-layer Super Output Area" (LSOA, tua 1,500 o breswylwyr yr un) y wlad o 1
(fwyaf difreintiedig) i 32,844 (lleiaf difreintiedig). Fe'i cyhoeddir gan yr hyn sydd bellach yn
Weinyddiaeth Tai, Cymunedau a Llywodraeth Leol (MHCLG, gynt MHCLG/DCLG), yn fwyaf diweddar fel
Mynegeion Amddifadedd Lloegr 2019, ac mae'n cyfeirio'n uniongyrchol gyllid llywodraeth ganolog,
blaenoriaethu iechyd cyhoeddus, a chymhwysedd ar gyfer dwsinau o gynlluniau lleol. Mae gan Gymru ei
mynegai cyfatebol ei hun, Mynegai Amddifadedd Lluosog Cymru (MALlC), sy'n gwbl ar wahân i'r IMD
hwn.

## Pam mae hyn yn bwysig

Nid yw amddifadedd yn un peth — gall cymdogaeth fod yn dlawd o ran incwm ond yn ddiogel, neu'n
ddigonol o ran incwm ond yn dioddef canlyniadau iechyd gwael a thai gwael. Esblygodd mynegeion
rhagflaenol yr IMD (yn dyddio'n ôl i ddangosyddion amddifadedd yr Adran yr Amgylchedd yn y 1970au)
yn fodel saith-parth heddiw yn union oherwydd bod targedu un-dangosydd (cyfradd ddiweithdra yn
unig, dyweder) yn rheolaidd yn methu ag ardaloedd oedd yn ddifreintiedig mewn ffyrdd eraill. Mae
IMD 2019 yn cyfuno incwm, cyflogaeth, addysg, iechyd, trosedd, rhwystrau i dai a gwasanaethau, ac
amgylchedd byw yn un rhestriad cyfansawdd fesul LSOA, gyda phob parth wedi'i adeiladu o'i fasged ei
hun o ddangosyddion ac wedi'i bwysoli gan fethodoleg MHCLG. Gan ei fod yn gweithredu ar lefel ardal
fach (LSOA) yn hytrach na lefel awdurdod lleol, mae'n dinoethi bochau o amddifadedd sy'n guddiedig
y tu mewn i ddosbarthiadau cyfoethog fel arall — dyna pam mai'r IMD, nid cyfartaledd incwm
awdurdod lleol, yw'r hyn y mae GIG Lloegr, premiwm disgybl yr Adran Addysg, a dwsinau o fformiwlâu
ariannu awdurdodau lleol yn dibynnu arno mewn gwirionedd. Dylai meddalwedd sy'n pennu cymhwysedd,
yn blaenoriaethu allgymorth, neu'n adrodd effaith yn ôl ardal yn Lloegr drin degradd neu restriad
IMD fel mewnbwn dosbarth cyntaf, nid ôl-ystyriaeth — a lle mae rhaglen yn targedu'n fwriadol yr
ardaloedd mwyaf difreintiedig, dylai ei harfarniad gymhwyso
[pwysoliad dosbarthiadol](../distributional-weighting/) sy'n gyson â'r targedu hwnnw, yn hytrach
na phrisio punt o fudd yr un fath ni waeth ble mae'n glanio.

## Y fathemateg

```
7 parth, wedi'u pwysoli:
  Incwm                                22.5%
  Cyflogaeth                           22.5%
  Addysg, Sgiliau a Hyfforddiant       13.5%
  Amddifadedd Iechyd ac Anabledd       13.5%
  Trosedd                               9.3%
  Rhwystrau i Dai a Gwasanaethau        9.3%
  Amgylchedd Byw                        9.3%

Sgôr pob parth: dangosyddion wedi'u safoni (eu graddio, yna'u trawsffurfio
tuag at ddosraniad normal) a'u cyfuno trwy drawsffurfiad esbonyddol fel
na all amddifadedd uchel ar un dangosydd gael ei ddileu'n llwyr gan
amddifadedd isel ar rai eraill o fewn y parth hwnnw.

Sgôr gyfansawdd IMD (LSOA) = Σ (sgôr parth × pwysau parth)
Graddio LSOAs yn ôl y sgôr gyfansawdd → 1 (fwyaf difreintiedig) i 32,844 (lleiaf difreintiedig)
Degraddau: rhestriad ÷ 3,284 (bras), degradd 1 = y 10% mwyaf difreintiedig o LSOAs
```

## Enghraifft waith

**Sgôr gyfansawdd LSOA**, gan ddefnyddio sgorau parth safonedig enghreifftiol (0 = dim signal
amddifadedd, uwch = mwy difreintiedig):

```
Incwm                0.35 × 0.225 = 0.07875
Cyflogaeth           0.30 × 0.225 = 0.06750
Addysg               0.20 × 0.135 = 0.02700
Iechyd               0.15 × 0.135 = 0.02025
Trosedd              0.10 × 0.093 = 0.00930
Rhwystrau i Dai      0.05 × 0.093 = 0.00465
Amgylchedd Byw       0.08 × 0.093 = 0.00744

Sgôr gyfansawdd = 0.07875 + 0.06750 + 0.02700 + 0.02025
                + 0.00930 + 0.00465 + 0.00744  = 0.21489
```

Yna caiff y sgôr gyfansawdd honno ei graddio yn erbyn sgorau'r holl 32,844 LSOA. Os yw'n gosod yr
LSOA ar restriad 2,950, mae'n disgyn i ddegradd 1 (2,950 ÷ 3,284 ≈ 0.9, hy o fewn y 10% mwyaf
difreintiedig o gymdogaethau yn Lloegr) — sydd, ar gyfer llawer o fformiwlâu ariannu, yn drothwy
sy'n datgloi cymhwysedd, ni waeth sut mae'r awdurdod lleol cyfagos yn sgorio ar gyfartaledd.

## Cysylltiad peirianneg feddalwedd

- Gall unrhyw wasanaeth sy'n geogodio defnyddwyr i god post neu LSOA ymuno â thabl chwilio IMD
  cyhoeddedig (CSV rhad ac am ddim, wedi'i fersiynu, gan MHCLG) i ychwanegu degradd amddifadedd fel
  cyd-newidyn — ar gyfer targedu allgymorth, blaenoriaethu baich achosion, neu adrodd canlyniadau
  yn ôl band amddifadedd heb gasglu data personol newydd.
- Mae degradd IMD yn wiriad tegwch safonol ar gyfer gwasanaethau digidol cyhoeddus: mae croestablu
  derbyniad gwasanaeth, gollwng allan, neu fodlonrwydd yn ôl degradd IMD yn dod â bylchau mynediad
  i'r wyneb y mae metrig cyfanredol yn eu cuddio — gweler
  [cynhwysiant digidol](../digital-inclusion/) a
  [metrigau bodlonrwydd dinasyddion](../citizen-satisfaction-metrics/).
- Gan fod rhestriad IMD yn gymharol (mae bob amser yn crynhoi i set benodol o restriadau ar draws
  Lloegr), ni all ddangos a yw amddifadedd yn genedlaethol yn cynyddu neu'n gostwng dros amser —
  dim ond pa ardaloedd sy'n rhestru ble o'u cymharu â'i gilydd yn yr argraffiad hwnnw; peidiwch ag
  adeiladu dangosfyrddau tueddiad absoliwt ar restriad IMD crai yn unig.

## Peryglon

- **Cymharu rhestriadau IMD ar draws argraffiadau (2015 yn erbyn 2019) fel tuedd amser** — mae'r
  dangosyddion, daearyddiaethau, a methodoleg sylfaenol i gyd yn newid rhwng argraffiadau; mae
  MHCLG yn cynghori'n benodol yn erbyn defnyddio newidiadau rhestriad fel tystiolaeth bod ardal
  wedi dod yn fwy neu'n llai difreintiedig.
- **Cymhwyso IMD lefel-LSOA i unigolion** — mae LSOA yn negradd 1 yn dal i gynnwys aelwydydd nad
  ydynt yn ddifreintiedig, ac mae LSOA degradd-10 yn dal i gynnwys rhai difreintiedig; mae IMD yn
  disgrifio ardaloedd, nid pobl, ac mae ei ddefnyddio fel dirprwy cymhwysedd unigol yn camddosbarthu
  i'r ddau gyfeiriad.
- **Anwybyddu manylion lefel-parth o blaid y rhestriad cyfansawdd** — gall dau LSOA â sgorau
  cyfansawdd unfath fod â phroffiliau parth cwbl wahanol (un yn amddifadedig o ran iechyd, un o ran
  trosedd); dylai cynllun targedu sy'n anelu at un broblem ddefnyddio'r sgôr parth perthnasol, nid
  y cyfansawdd cymysg.

## Ffynonellau

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
