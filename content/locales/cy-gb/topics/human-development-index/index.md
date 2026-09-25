# Mynegai Datblygiad Dynol (HDI)

Y Mynegai Datblygiad Dynol (HDI) yw dewis amgen pennaf y Cenhedloedd Unedig yn lle graddio
gwledydd yn ôl incwm yn unig: mae'n cyfuno disgwyliad oes, addysg, ac incwm yn un rhif rhwng 0 ac
1, ar y sail — a ddadleuwyd gan yr economegydd Amartya Sen ac a ddatblygwyd i'r Cenhedloedd Unedig
gan Mahbub ul Haq — bod datblygiad yn ymwneud ag ehangu'r hyn y gall pobl ei wneud a bod, nid dim
ond yr hyn y maent yn ei ennill. Cyhoeddwyd ef yn flynyddol yn Adroddiad Datblygiad Dynol Rhaglen
Datblygu'r Cenhedloedd Unedig (UNDP) ers 1990.

## Pam mae hyn yn bwysig

Cyn y HDI, mesurwyd "datblygiad" bron yn gyfan gwbl gan GNP y pen, nad yw'n dweud dim am a yw twf
yn cyrraedd iechyd nac addysg pobl gyffredin. Ail-luniodd dull galluoedd Sen ddatblygiad fel ehangu
rhyddidau go iawn, a throdd ul Haq hynny'n fynegai cyhoeddadwy y gallai'r UNDP raddio pob gwlad
wrtho, gan orfodi llywodraethau a dyfodd yn gyfoethog ar incwm yn unig ond a esgeulusodd iechyd neu
addysg i wynebu rhestriad gwaeth nag y byddai eu CDG yn ei awgrymu (mae gwladwriaethau olew'r
Gwlff a rhai economïau echdynnol yn enghreifftiau safonol). Mae strwythur tair-ffordd y HDI hefyd
yn hynafiad methodolegol uniongyrchol i'r
[Mynegai Tlodi Amlddimensiynol](../multidimensional-poverty-index/): mae'r ddau'n gwrthod gadael i
un dimensiwn brynu'n ôl ddiffyg mewn dimensiwn arall, gan ddefnyddio cymedr geometregol yn hytrach
na chymedr rhifyddol. Mae'r UNDP yn cyhoeddi nodiadau technegol llawn a'r data sylfaenol ar gyfer
pob argraffiad (<https://hdr.undp.org/data-center/human-development-index>), sef y ffynhonnell
ganonaidd i unrhyw un sy'n adeiladu ar y mynegai yn hytrach na'i ail-ddeillio.

## Y fathemateg

```
Mynegai Disgwyliad Oes (LEI)             = (DO − 20) / (85 − 20)

Mynegai Cyfartaledd Blynyddoedd Addysg   = cyfartaledd blynyddoedd addysg / 15
Mynegai Blynyddoedd Addysg Disgwyliedig  = blynyddoedd addysg disgwyliedig / 18
Mynegai Addysg (EI)                      = (Mynegai Cyfartaledd + Mynegai Disgwyliedig) / 2

Mynegai Incwm (II)                       = (ln(GNI y pen) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [cymedr geometregol y tri is-fynegai]
```

Mae'r cymedr geometregol yn fwriadol: gan ei fod yn lluosi yn hytrach na chyfartaleddu, ni all
sgôr uchel iawn mewn un dimensiwn wrthbwyso'n llawn sgôr isel iawn mewn dimensiwn arall —
dyluniad a fabwysiadwyd gan yr UNDP yn 2010 yn benodol i gosbi anghydbwysedd, gan ddisodli'r
fformiwla cymedr rhifyddol flaenorol.

## Enghraifft waith

**Gwlad incwm canolig**: disgwyliad oes 72 mlynedd, cyfartaledd blynyddoedd addysg 8, blynyddoedd
addysg disgwyliedig 13, GNI y pen $12,000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0.800
MYSI = 8 / 15                                        = 0.533
EYSI = 13 / 18                                       = 0.722
EI = (0.533 + 0.722) / 2                             = 0.628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9.393 − 4.605) / (11.225 − 4.605)
   = 4.788 / 6.620                                   = 0.723

HDI = (0.800 × 0.628 × 0.723) ^ (1/3)
    = (0.363) ^ (1/3)                                ≈ 0.713
```

Mae HDI o 0.713 yn disgyn i fand "datblygiad dynol uchel" yr UNDP (0.700–0.799); mae "uchel iawn"
yn dechrau ar 0.800. Sylwch pa mor sensitif yw'r canlyniad i'r is-fynegai gwannaf: pe bai
cyfartaledd blynyddoedd addysg yn 4 yn hytrach na 8 (MYSI = 0.267, EI = 0.494), byddai HDI yn
gostwng i (0.800 × 0.494 × 0.723)^(1/3) ≈ 0.639 — gan ostwng band cyfan — er na newidiodd dim byd
arall.

## Cysylltiad peirianneg feddalwedd

- Mae'r patrwm cymedr geometregol yn uniongyrchol ailddefnyddiadwy ar gyfer unrhyw sgôr cyfansawdd
  gwasanaeth neu gynnyrch lle nad ydych am i un dimensiwn cryf guddio un gwan sy'n hollbwysig —
  e.e. cyfuno sgorau hygyrchedd, perfformiad, a dibynadwyedd ar gyfer gwasanaeth digidol cyhoeddus
  yn lluosol yn hytrach nag fel cyfartaledd pwysol, fel na all gwasanaeth sy'n gyflym ond yn
  anhygyrch sgorio'n "dda".
- Mae trawsffurfiad logarithmig incwm HDI (gwerth ymylol lleihaol punt ychwanegol) yr un rhesymeg
  â [phwysoliad dosbarthiadol](../distributional-weighting/) mewn arfarniad: mae $1,000 ychwanegol
  yn golygu llawer mwy i aelwyd dlawd nag i un gyfoethog, ac mae trin y ddwy'n llinol yn cambrisio
  effaith.
- Dylai unrhyw ddangosfwrdd sy'n adrodd un sgôr gyfunol "cynhwysiant digidol" neu "ganlyniadau
  dinasyddion" ddogfennu ei fformiwla gyfuno mor eglur â nodiadau technegol yr UNDP — gweler
  [DPA sector cyhoeddus](../public-sector-kpis/) a
  [cherdyn sgôr gwerth cyhoeddus](../public-value-scorecard/).

## Peryglon

- **Cyfartaleddu yn hytrach na defnyddio'r cymedr geometregol** — mae cymedr rhifyddol yn gadael i
  incwm uchel guddio iechyd neu addysg wael yn llwyr; holl bwynt newid methodoleg 2010 oedd rhoi
  stop ar y math hwnnw o eilyddio.
- **Cymharu HDI o flwyddyn i flwyddyn fel pe bai'n CDG wedi'i addasu ar gyfer chwyddiant** — mae'r
  UNDP yn ail-linio'r mynegai o bryd i'w gilydd (ffiniau isafswm/uchafswm newydd, capiau addysg
  wedi'u diwygio), felly gall newid mewn rhestriad adlewyrchu diweddariad methodolegol, nid newid
  gwirioneddol; gwiriwch bob amser pa argraffiad o'r Adroddiad Datblygiad Dynol y daw ffigwr ohono.
- **Trin HDI fel mesur tlodi** — cyfartaledd cenedlaethol ydyw ac nid yw'n dweud dim am
  ddosbarthiad o fewn gwlad; ar gyfer hynny, defnyddiwch y
  [Mynegai Tlodi Amlddimensiynol](../multidimensional-poverty-index/) neu HDI wedi'i Addasu ar
  gyfer Anghydraddoldeb, ar wahân, gan yr UNDP.

## Ffynonellau

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
