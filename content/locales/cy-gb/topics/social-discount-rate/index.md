# Cyfradd Ddisgowntio Gymdeithasol

Mae'r gyfradd ddisgowntio gymdeithasol yn trosi costau a buddion y dyfodol yn werthoedd cyfredol fel
y gellir cymharu rhaglenni â thaliadau wedi'u lledaenu dros ddegawdau ar sail gyffredin. Mae Llyfr
Gwyrdd Trysorlys EF yn mynnu amserlen ostyngol wedi'i hangori ar 3.5% ar gyfer y 30 mlynedd gyntaf,
yn seiliedig ar fformiwla Ramsey — rhif penodol y gellir ei ddyfynnu sydd wedi dod yn ddadl
wleidyddol a moesegol fyw pryd bynnag y'i cymhwysir at ymrwymiadau gorwel hir fel polisi hinsawdd
neu seilwaith.

## Pam mae hyn yn bwysig

Nid yw punt o fudd a dderbynnir mewn 30 mlynedd yn werth punt o fudd a dderbynnir heddiw, am
resymau sy'n rhannol am ddewis amser pur (mae pobl a chymdeithasau'n ffafrio pethau da yn gynt) ac
yn rhannol am dwf (disgwylir i gymdeithas y dyfodol fod yn gyfoethocach, felly mae punt yn llai
pwysig iddi ar y cyrion). Mae Atodiad 6 y Llyfr Gwyrdd yn deillio cyfradd ddisgowntio safonol y DU
o fformiwla Ramsey, gan gyfuno cyfradd dewisiad amser pur â chyfradd dwf disgwyliedig traul ac
elastigedd cyfleustod ymylol traul, gan gynhyrchu'r gyfradd gyhoeddedig o 3.5% y flwyddyn ar gyfer
blynyddoedd 0–30, gan ostwng mewn amserlen gyhoeddedig ar gyfer blwyddyn 31 ymlaen (i lawr i 1% ar
gyfer blynyddoedd 301+). Mae'r amserlen hon yn bodoli'n union am y byddai 3.5% cyson wedi'i
gyfansoddi dros ganrif yn gwneud i unrhyw fudd gorwel hir bron iawn — amddiffynfa lifogydd sy'n
achub bywydau mewn 80 mlynedd, gostyngiad carbon sy'n osgoi niwed mewn 100 mlynedd — ymddangos yn
ddibwys yn nhermau gwerth presennol, y barnodd y Trysorlys ei fod yn gasgliad moesegol
annhebygol ar gyfer penderfyniadau seilwaith ac amgylcheddol sy'n wirioneddol hirhoedlog.

Mae'r gyfradd ddisgowntio'n ddadleuol yn union am nad yw'r dewis yn baramedr technegol niwtral: mae'n
amgodio barn ynghylch faint y dylai cymdeithas ei aberthu heddiw dros bobl nad ydynt eto wedi'u
geni. Defnyddiodd Adolygiad Stern ar Economeg Newid Hinsawdd (2006) gyfradd ddisgowntio agos at
sero (dewisiad amser pur o oddeutu 0.1%), gan ddadlau bod disgowntio lles cenedlaethau'r dyfodol ar
unrhyw beth tebyg i gyfraddau marchnad yn anamddiffynadwy'n foesegol pan fydd y niwed (newid
hinsawdd trychinebus) yn ddigyfnewid. Dadleuodd beirniaid — yn arbennig William Nordhaus — fod
cyfradd bron-sero Stern yn gorbwysleisio'r achos dros wariant hinsawdd ar unwaith drwy wneud i
bron unrhyw gost bresennol edrych yn gyfiawn yn erbyn budd y dyfodol y mae bron dim wedi'i
ddisgowntio ohono. Nid oedd yr anghytundeb yn ymwneud â'r fathemateg; ynghylch pwy bynnag y dylai eu
fframwaith moesegol osod y gyfradd yr oedd, ac mae'n aros yn enghraifft safonol o pam mae'r gyfradd
ddisgowntio'n ddewis polisi, nid dim ond mewnbwn actiwaraidd.

## Y fathemateg

Fformiwla Ramsey sy'n sail i gyfradd y Llyfr Gwyrdd:

```
r = ρ + η·g

lle:
  r = y gyfradd ddisgowntio gymdeithasol
  ρ = cyfradd dewisiad amser pur (diffyg amynedd + risg trychineb)
  η = elastigedd cyfleustod ymylol traul
  g = cyfradd twf blynyddol ddisgwyliedig traul y pen
```

Amserlen ostyngol y Llyfr Gwyrdd (Atodiad 6, yn ddarluniadol — gwiriwch yr argraffiad cyfredol am
y tabl cyhoeddedig union):

```
Blynyddoedd 0–30:    3.5%
Blynyddoedd 31–75:   3.0%
Blynyddoedd 76–125:  2.5%
Blynyddoedd 126–200: 2.0%
Blynyddoedd 201–300: 1.5%
Blynyddoedd 301+:    1.0%
```

Gwerth presennol o swm y dyfodol:

```
PV = FV / (1 + r)^t
```

## Enghraifft waith

**Cynllun amddiffyn rhag llifogydd**: mae prosiect yn cyflenwi £10 miliwn o niwed llifogydd a
osgowyd ym mlwyddyn 40.

Gan ddefnyddio cyfradd wastad o 3.5%: PV = 10,000,000 / (1.035)^40 ≈ £2.52 miliwn — mae'r budd yn
edrych yn fach.

Gan ddefnyddio amserlen ostyngol y Llyfr Gwyrdd (3.5% ar gyfer blynyddoedd 0–30, 3.0% wedi hynny),
mae'r cyfrifiad yn cyfansoddi ar 3.5% am y 30 mlynedd gyntaf a 3.0% ar gyfer blynyddoedd 31–40:

```
PV = 10,000,000 / [(1.035)^30 × (1.03)^10]
   = 10,000,000 / [2.807 × 1.344]
   ≈ 10,000,000 / 3.773
   ≈ £2.65 miliwn
```

Mae'r amserlen ostyngol yn codi gwerth presennol buddion gorwel hir ychydig o'i gymharu â chyfradd
wastad uchel — dyna union ddiben yr amserlen, gan y byddai 3.5% gwastad am ganrif yn disgowntio budd
o £100 miliwn ym mlwyddyn 100 i lai na £3.3 miliwn.

**Seilwaith digidol**: disgwylir i fudd-drosglwyddiad cwmwl llywodraeth sy'n costio £4 miliwn nawr
osgoi £500,000/flwyddyn o gostau cynnal etifeddol am 15 mlynedd. Ar 3.5%, gwerth presennol y
blwydd-dâl hwnnw yw oddeutu £500,000 × 11.52 (ffactor blwydd-dâl 15 mlynedd ar 3.5%) ≈ £5.76
miliwn — sy'n hawdd fwy na'r gost o £4 miliwn, achos gwerth presennol net cadarnhaol a fyddai'n
edrych yn llawer gwannach ar gyfradd uwch a ddewiswyd yn naïf (ar 7%, mae'r un ffactor blwydd-dâl yn
gostwng i tua 9.11, gan roi £4.56 miliwn, yn dal yn gadarnhaol ond gyda llawer llai o gynnwys
ymyl).

## Cysylltiad peirianneg feddalwedd

Mae'r rhan fwyaf o achosion busnes meddalwedd yn rhedeg dros 3–5 mlynedd, ymhell o fewn y band 3.5%
gwastad, felly anaml y mae'r amserlen ostyngol yn cael effaith uniongyrchol — ond mae'r ddisgyblaeth
sylfaenol yn bwysig ar gyfer unrhyw fuddsoddiad technoleg llywodraeth ag oes ased hir (platfform
cenedlaethol, rhaglen seilwaith data, cytundeb aml-ddegawd):

- Defnyddiwch gyfradd gyhoeddedig y Llyfr Gwyrdd yn hytrach na "chyfradd rwystr" fewnol wedi'i
  benthyg o gyllid preifat; bydd archwilwyr ac adolygwyr y Trysorlys yn disgwyl yr amserlen safonol.
- Ar gyfer buddion a sylweddolir flynyddoedd lawer i ffwrdd (arbedion cynnal hirdymor platfform,
  gwerth cronnol ecosystem data agored — gweler [gwerth data agored](../open-data-value/)), gall y
  dewis disgowntio droi achos busnes o gadarnhaol i negyddol; gwnewch y gyfradd a'r gorwel yn
  dybiaethau eglur, nid ragosodiadau cudd.
- Mae hyn yn bwydo'n uniongyrchol i [arfarnu'r Llyfr Gwyrdd](../green-book-appraisal/), y model pum-
  achos sy'n mynnu llif arian disgowntiedig yn ffurfiol, ac i
  [prisio llesiant](../wellbeing-valuation/), lle mae'r un cwestiwn disgowntio'n codi ar gyfer
  buddion llesiant nad ydynt yn ariannol.
- Gweler hefyd
  [tegwch rhwng cenedlaethau a disgowntio cynaliadwyedd](../intergenerational-equity-and-sustainability-discounting/)
  am ddadl Stern-yn-erbyn-Nordhaus wedi'i chymhwyso'n benodol at fuddsoddiad technoleg amgylcheddol
  a hinsawdd.

## Peryglon

- **Defnyddio cyfradd wastad ar gyfer gorwelion hir iawn.** Mae amserlen ostyngol y Llyfr Gwyrdd yn
  bodoli'n benodol am fod cyfradd gyson yn tanbrisio buddion sy'n wirioneddol hirhoedlog; gwiriwch
  pa fand sy'n gymwys yn hytrach na rhagosod 3.5% drwyddi draw.
- **Trin y gyfradd ddisgowntio fel un foesegol niwtral.** Mae dadl Stern-Nordhaus yn dangos bod y
  gyfradd yn amgodio barn werth am genedlaethau'r dyfodol; mae ei newid yn newid pa raglenni sy'n
  edrych yn gyfiawn, felly dylid ei datgan a'i hamddiffyn, nid ei chuddio mewn rhagosodiad taenlen.
- **Drysu'r gyfradd ddisgowntio gymdeithasol â chost gyfalaf breifat.** Mae costau benthyca'r
  llywodraeth a chyfraddau rwystr y sector preifat yn gysyniadau gwahanol i'r gyfradd gymdeithasol
  a ddeillir o Ramsey, a bydd amnewid un am y llall mewn arfarniad cyhoeddus fel arfer yn
  ystumio'r canlyniad i gyfeiriad ffafrio enillion tymor byr.
- **Disgowntio llifoedd arian real a henwol yn anghyson.** Mae cyfradd y Llyfr Gwyrdd yn gyfradd
  real (wedi'i haddasu am chwyddiant); mae disgowntio llifoedd arian henwol â hi yn tanbrisio
  gwerthoedd presennol yn sylweddol.

## Ffynonellau

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
