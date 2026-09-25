# Tegwch rhwng cenedlaethau a disgowntio cynaliadwyedd

Mae disgowntio costau a buddion y dyfodol yn ôl i werth presennol yn arfer safonol mewn arfarniad
cyhoeddus — gweler [cyfradd ddisgowntio gymdeithasol](../social-discount-rate/) — ond mae unrhyw
gyfradd ddisgowntio bositif, wedi'i chyfansymu dros ddegawdau neu ganrifoedd, yn crebachu'r
dyfodol pell tuag at sero yn nhermau heddiw. Ar gyfer penderfyniadau â chanlyniadau canrif neu fwy
i ffwrdd — newid hinsawdd, gwastraff niwclear, colli bioamrywiaeth, cynaliadwyedd pensiynau — mae'r
ffaith fathemategol honno'n dod yn un foesegol: gall disgowntio safonol wneud i niwed trychinebus i
genedlaethau'r dyfodol ymddangos, yn nhermau gwerth presennol, prin yn werth ei osgoi.

## Pam mae hyn yn bwysig

Mae hafaliad Ramsey, a ddeilliwyd gan Frank Ramsey yn 1928, yn dadelfennu'r gyfradd ddisgowntio yn
ddwy elfen: dewisiad amser pur (δ, faint yn syml yr ydym yn ffafrio nawr yn hytrach nag yn
ddiweddarach, yn annibynnol ar gyfoeth) a'r effaith twf-cyfoeth (η×g, faint yr ydym yn disgowntio
oherwydd y disgwylir i genedlaethau'r dyfodol fod yn gyfoethocach, felly mae punt ychwanegol yn
golygu llai iddynt). Mae cyfradd ddisgowntio hirdymor safonol Llyfr Gwyrdd y DU wedi'i hadeiladu ar
yr hafaliad hwn ac yn dilyn amserlen sy'n *gostwng* yn hytrach na chyfradd wastad — dyluniad sydd
wedi'i wreiddio yng ngwaith Martin Weitzman ar "gamma discounting," sy'n dangos, pan fo'r gyfradd
ddisgowntio yn y dyfodol ei hun yn ansicr, bod y gyfradd cyfwerth-sicrwydd y dylech ei chymhwyso yn
gostwng yn fathemategol dros amser, gan fod senarios cyfradd isel yn dod i drechu po bellaf yr
edrychwch ymlaen. Aeth Adolygiad Stern ar Economeg Newid Hinsawdd (2006), a arweiniwyd gan Syr
Nicholas Stern, â'r ddadl foesegol ymhellach: dadleuodd Stern y dylid gosod dewisiad amser pur yn
agos at sero (defnyddiodd δ ≈ 0.1%, gan adlewyrchu dim ond y tebygolrwydd bach o drychineb sy'n
dinistrio gwareiddiad, nid dewisiad gwirioneddol dros y presennol yn hytrach na'r dyfodol), gan
gynhyrchu cyfradd ddisgowntio effeithiol lawer is nag arfer confensiynol y Llyfr Gwyrdd, ac yn
gyfatebol, achos llawer mwy o blaid gweithredu ar hinsawdd heddiw. Dadleuodd beirniaid (yn arbennig
William Nordhaus) fod cyfradd agos-at-sero Stern yn amddiffynadwy'n foesegol ond yn anghyson ag
ymddygiad cynilo a buddsoddi a arsylwyd mewn gwirionedd. Nid troednodyn technegol yw'r
anghytundeb hwn — dyma'r rheswm mwyaf sengl pam y gall dau economegydd sydd yr un mor drylwyr
gyrraedd casgliadau hollol wahanol ynghylch faint y dylai'r genhedlaeth bresennol ei aberthu ar
gyfer y dyfodol, a dyna pam mae'n rhaid i feddalwedd sy'n cefnogi arfarniad buddsoddiad cyhoeddus
gorwel-hir ddatgelu ei rhagdybiaethau disgowntio yn hytrach na'u claddu mewn diofyn taenlen.

## Y fathemateg

```
Hafaliad Ramsey:   r = δ + η × g

  r = cyfradd ddisgowntio gymdeithasol
  δ = dewisiad amser pur (cyfradd diffyg amynedd, yn annibynnol ar gyfoeth)
  η = elastigedd defnyddioldeb ymylol treuliant (gwerth lleihaol treuliant
      ychwanegol wrth i bobl gyfoethogi)
  g = cyfradd twf disgwyliedig treuliant y pen

Amserlen hirdymor gostyngol y Llyfr Gwyrdd (bras, y bandiau cyhoeddedig cyfredol):
  Blynyddoedd 0–30:    3.5%
  Blynyddoedd 31–75:   3.0%
  Blynyddoedd 76–125:  2.5%
  Blynyddoedd 126–200: 2.0%
  Blynyddoedd 201–300: 1.5%
  Blynyddoedd 301+:    1.0%

Paramedrau Adolygiad Stern: δ ≈ 0.1%, η = 1, g ≈ 1.3%  → r ≈ 1.4%
```

## Enghraifft waith

**Gwerth heddiw o £1 o niwed a osgowyd mewn 100 mlynedd**, o dan dri chyfundrefn ddisgowntio:

```
Cyfradd wastad tymor byr y Llyfr Gwyrdd (3.5%, yn gyson am 100 mlynedd):
  PV = 1 / (1.035)^100 ≈ 1 / 31.19 ≈ £0.032   (3.2 ceiniog)

Amserlen ostyngol y Llyfr Gwyrdd (3.5% ar gyfer blwyddyn 1–30, 3.0% ar gyfer 31–75,
2.5% ar gyfer 76–100):
  ffactor(1–30)  = 1.035^30  ≈ 2.807
  ffactor(31–75) = 1.03^45   ≈ 3.782
  ffactor(76–100)= 1.025^25  ≈ 1.854
  cyfanswm ffactor ≈ 2.807 × 3.782 × 1.854 ≈ 19.68
  PV = 1 / 19.68 ≈ £0.051   (5.1 ceiniog)

Dewisiad amser pur agos-at-sero ar arddull Stern (r ≈ 1.4% gwastad):
  PV = 1 / (1.014)^100 ≈ 1 / 3.997 ≈ £0.250   (25.0 ceiniog)
```

Mae'r un £1 o niwed a osgowyd ganrif o nawr yn werth 3.2c, 5.1c, neu 25c heddiw yn dibynnu'n llwyr
ar ba gonfensiwn disgowntio a ddefnyddir — ystod bron-wythblyg sy'n penderfynu a yw prosiect
lliniaru hinsawdd â chost uchel ymlaen llaw a thâl allan ganrif i ffwrdd yn clirio bar NPV positif
o gwbl. Dyma'r mecanwaith y tu ôl i rybudd canolog y bennod: ar unrhyw gyfradd wastad ystyrlon o
bositif, caiff niwed y dyfodol pell ei ddileu'n fathemategol o'r arfarniad, ni waeth pa mor
ddifrifol ydyw mewn gwirionedd.

## Cysylltiad peirianneg feddalwedd

- Dylai unrhyw offeryn arfarnu neu achos busnes gorwel-hir (seilwaith, addasu i newid hinsawdd,
  modelu pensiynau) weithredu amserlen *ostyngol* y Llyfr Gwyrdd, nid un gyfradd wastad — mae
  diofyn cyfradd wastad yn ymgorffori'n dawel duedd wrth-ddyfodol lawer cryfach nag y mae arweiniad
  llywodraeth y DU cyfredol yn ei nodi.
- Dylai'r gyfradd ddisgowntio a'r gorwel gael eu datgelu bob amser fel paramedrau gweladwy,
  archwiliadwy mewn meddalwedd arfarnu, gyda sensitifrwydd y cyfrifiad iddynt yn cael ei ddangos
  yn benodol (fel yn yr enghraifft waith uchod) — mae claddu'r gyfradd mewn ffeil ffurfweddu yn
  gwahodd yn union y "dewis moesegol cudd" y mae'r ddadl Stern-Nordhaus yn rhybuddio yn ei gylch;
  mae hyn yn paru â'r pwynt tryloywder a wneir yn
  [cyfrifeg cyfalaf naturiol](../natural-capital-accounting/) ac yn sail i bwnc
  [cyfradd ddisgowntio gymdeithasol](../social-discount-rate/) yn gyffredinol.
- Lle mae buddion rhaglen yn amlwg rhwng-genedlaethol (amddiffyn rhag llifogydd, adfer cyfalaf
  naturiol, seilwaith digidol hirdymor), dylai
  [dadansoddiad cost-budd cymdeithasol](../social-cost-benefit-analysis/) adrodd canlyniadau o
  dan o leiaf dwy ragdybiaeth ddisgowntio (safon y Llyfr Gwyrdd ac achos sensitifrwydd cyfradd
  isel) yn hytrach nag un amcangyfrif pwynt sengl, fel bod gwneuthurwyr penderfyniadau'n gweld sut
  mae dewis cyfradd ddisgowntio ar ei ben ei hun yn symud yr ateb.

## Peryglon

- **Cyflwyno un NPV wedi'i ddisgowntio heb ystod sensitifrwydd** — o ystyried faint y mae'r
  gyfradd ddisgowntio ar ei ben ei hun yn newid yr ateb ar gyfer prosiectau gorwel-hir, mae NPV
  cyfradd-sengl yn gorddatgan manwl gywirdeb yn sylweddol; adroddwch ystod bob amser sy'n
  rhychwantu o leiaf safon y Llyfr Gwyrdd a senario cyfradd isel.
- **Cymhwyso'r gyfradd wastad tymor byr (3.5%) i arfarniad aml-ganrif** — mae arweiniad y Llyfr
  Gwyrdd ei hun yn nodi'r amserlen ostyngol yn union oherwydd bod y gyfradd wastad wedi'i barnu'n
  amhriodol y tu hwnt i ryw 30 mlynedd; mae ei defnyddio beth bynnag yn tanddatgan costau hirdymor.
- **Trin δ (dewisiad amser pur) fel paramedr technegol pur** — mae gwerth agos-at-sero Stern a
  gwerth ymhlyg uwch y Llyfr Gwyrdd ill dau ond yn amddiffynadwy fel safbwyntiau moesegol ynghylch
  faint o bwysau y mae'r presennol yn ei ddyled i'r dyfodol, nid rhifau empeiraidd "cywir" neu
  "anghywir"; dylai meddalwedd wneud y rhagdybiaeth yn weladwy yn hytrach na chyflwyno un ffigwr
  fel un cywir yn wrthrychol.

## Ffynonellau

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
