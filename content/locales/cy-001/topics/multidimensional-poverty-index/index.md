# Mynegai Tlodi Amlddimensiynol (MPI)

Mae'r MPI yn mesur tlodi fel amddifadiadau sy'n gorgyffwrdd y mae person yn eu profi ar yr un
pryd — o ran iechyd, addysg, a safonau byw — yn hytrach nag fel incwm yn unig yn disgyn islaw
llinell. Fe'i datblygwyd gan y Sefydliad Tlodi a Datblygiad Dynol Rhydychen (OPHI) ynghyd â Sabina
Alkire a James Foster, ac mae wedi'i gyhoeddi ar y cyd â'r UNDP ym mhob Adroddiad Datblygiad Dynol
ers 2010, ochr yn ochr â'r [Mynegai Datblygiad Dynol](../human-development-index/).

## Pam mae hyn yn bwysig

Mae llinellau tlodi incwm yn methu â chynnwys pobl sydd ag incwm arian parod digonol ond sy'n brin
o ddŵr glân, addysg, neu sy'n goroesi marwolaeth plentyn — ac maent yn methu â chynnwys y ffaith
bod amddifadiadau'n clystyru: mae aelwyd heb drydan yn anghymesur o debygol o fod hefyd yn brin o
garthffosiaeth ac o gael plentyn tanfaethedig. Mae dull Alkire-Foster, y mae'r MPI wedi'i adeiladu
arno, yn cyfrif amddifadiadau pob person ar draws deg dangosydd wedi'u grwpio'n dri dimensiwn sy'n
cael eu pwysoli'n gyfartal — iechyd, addysg, safonau byw — ac ni fydd ond yn dosbarthu rhywun yn
"dlawd yn ôl yr MPI" os yw ei sgôr amddifadiad pwysol yn croesi trothwy penodol, gan ddal
gorgyffwrdd na all set o ystadegau dangosydd-sengl ar wahân ei ddal. Mae OPHI yn cyhoeddi'r
fethodoleg lawn a data gwledydd yn <https://ophi.org.uk/multidimensional-poverty-index/>; mae'r
MPI byd-eang y mae'n ei gynnal ar y cyd â'r UNDP bellach yn cwmpasu dros 110 o wledydd. Ar gyfer
meddalwedd a adeiladwyd ar gyfer rhaglenni gwrth-dlodi — trosglwyddiadau arian parod, brysbennu
gofal cymdeithasol, targedu cymorth — mae set ddangosyddion yr MPI yn aml y peth agosaf at sgema
amddifadiad safonol sydd eisoes wedi'i ddilysu ar draws dwsinau o swyddfeydd ystadegol
cenedlaethol.

## Y fathemateg

```
10 dangosydd, 3 dimensiwn, pob dimensiwn wedi'i bwysoli 1/3:

Iechyd (1/3):             maeth (1/6), marwolaethau plant (1/6)
Addysg (1/3):              blynyddoedd addysg (1/6), presenoldeb ysgol (1/6)
Safonau byw (1/3):         tanwydd coginio, carthffosiaeth, dŵr yfed,
                            trydan, tai, asedau (1/18 yr un)

sgôr amddifadiad (c) = swm pwysau'r dangosyddion y mae person yn amddifad ynddynt

mae person yn "dlawd yn ôl yr MPI" os yw c ≥ 1/3 (y trothwy tlodi, k = 33%)

H (cymhareb cyfrif pen) = nifer y bobl dlawd yn ôl yr MPI / cyfanswm y boblogaeth
A (dwyster)              = cyfartaledd sgôr amddifadiad ymhlith y bobl dlawd yn ôl yr MPI yn unig

MPI = H × A
```

Gan fod yr MPI yn lluosi'r *gyfran* sy'n dlawd â *pa mor* dlawd ydynt, gall dau ranbarth â'r un
gymhareb cyfrif pen gael sgorau MPI gwahanol iawn os yw'r amddifadiadau'n fwy difrifol mewn un —
yr un rhesymeg "dim eilyddio ar draws dimensiynau" sy'n sail i gymedr geometregol y HDI.

## Enghraifft waith

**Arolwg cenedlaethol o 1,000 o bobl**: nodwyd bod 350 yn amlddimensiynol dlawd (sgôr amddifadiad
≥ 33%). Ymhlith y 350 unigolyn tlawd hynny yn unig, mae'r cyfartaledd sgôr amddifadiad yn 45%.

```
H = 350 / 1000                = 0.350
A = 0.45
MPI = H × A = 0.350 × 0.45    = 0.1575
```

**Cymharu dau ddosbarth â'r un cyfrif pen**: mae gan Ddosbarth A H = 0.30 ac A = 0.40 (llawer yn
dlawd, wedi'u hamddifadu'n gymedrol); mae gan Ddosbarth B H = 0.30 ac A = 0.60 (yr un nifer yn
dlawd, ond wedi'u hamddifadu'n fwy difrifol — yn brin o drydan *a* charthffosiaeth *a* phresenoldeb
ysgol ar yr un pryd).

```
MPI_A = 0.30 × 0.40 = 0.120
MPI_B = 0.30 × 0.60 = 0.180
```

Yr un gymhareb cyfrif pen, ond MPI 50% yn uwch yn Nosbarth B — byddai system dargedu sy'n seiliedig
ar dlodi cyfrif pen yn unig yn graddio'r ddau ddosbarth yn union yr un fath ac yn methu â gweld bod
angen ymyrraeth ddyfnach ar Ddosbarth B.

## Cysylltiad peirianneg feddalwedd

- Mae systemau rheoli achosion a chymhwysedd ar gyfer rhaglenni cymdeithasol yn aml eisoes yn
  storio nifer o'r deg dangosydd (tai, presenoldeb ysgol, marcwyr iechyd) mewn seilos ar wahân; mae
  dull cyfrif Alkire-Foster yn sgema barod ar gyfer eu cyfuno'n un sgôr amddifadiad yn hytrach nag
  adeiladu model sgorio pwrpasol o'r dechrau.
- Mae'r hollt cyfrif pen/dwyster (H × A) yn batrwm defnyddiol yn gyffredinol i unrhyw ddangosfwrdd
  sy'n adrodd "faint sy'n cael eu heffeithio" ochr yn ochr â "pa mor ddrwg" — mae plygu'r ddau i
  mewn i un rhif, fel y mae ystadegau amlder crai yn ei wneud, yn cuddio'n union yr achos sydd angen
  y mwyaf o adnoddau.
- Mae dangosfyrddau dangosyddion ar arddull yr MPI yn paru'n naturiol ag adrodd
  [cost fesul buddiolwr](../cost-per-beneficiary/) ar gyfer rhaglenni gwrth-dlodi: mae cost fesul
  pwynt o ostyngiad MPI yn uned amddiffynadwy ar gyfer cymharu ymyriadau tra gwahanol
  (trosglwyddiad arian parod yn erbyn seilwaith carthffosiaeth).

## Peryglon

- **Trin y deg dangosydd fel rhai cyffredinol** — mae dangosyddion MPI byd-eang OPHI wedi'u
  calibradu ar gyfer cymaroldeb rhwng gwledydd; mae MPIs cenedlaethol (mae llawer o wledydd, gan
  gynnwys sawl un yn Ne Asia ac Affrica, yn cyhoeddi eu rhai eu hunain) yn addasu dangosyddion a
  phwysau i gyd-destun lleol, ac nid yw'r ddau'n uniongyrchol gymaradwy.
- **Adrodd H yn unig** — mae cymhareb cyfrif pen yn anwybyddu dwyster yn llwyr; adroddwch neu
  gyfrifwch A wrth ei ochr bob amser, neu'r MPI ei hun.
- **Tybio bod y bobl dlawd yn ôl yr MPI a'r bobl dlawd o ran incwm yr un boblogaeth** — mae
  briffiau gwlad OPHI ei hun fel arfer yn dangos gorgyffwrdd rhannol yn unig rhwng y ddwy; bydd
  rhaglen sy'n targedu'r bobl dlawd o ran incwm yn unig yn methu'n systematig â chyfran ystyrlon
  o'r bobl amlddimensiynol dlawd.

## Ffynonellau

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
