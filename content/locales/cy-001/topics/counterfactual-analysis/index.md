# Dadansoddiad Gwrthffeithiol

Amcangyfrif o'r hyn a fyddai wedi digwydd heb ymyrraeth yw gwrthffeithiol. Heb un, ni ellir
gwahaniaethu rhwng newid a arsylwyd ar ôl i raglen lansio a newid a fyddai wedi digwydd beth
bynnag — dim gwrthffeithiol, dim tystiolaeth o effaith, ni waeth pa mor argyhoeddiadol yw'r rhifau
cyn-ac-ar-ôl. Mae Llyfr Magenta Trysorlys EF yn trin adeiladu gwrthffeithiol credadwy fel tasg
fethodolegol ganolog gwerthuso effaith, yn bwysicach nag unrhyw ddewis dylunio arall sengl.

## Pam mae hyn yn bwysig

Nid yw "gostyngodd trosedd 15% yn y flwyddyn ar ôl i ni gyflwyno'r rhaglen" yn dystiolaeth bod y
rhaglen wedi gweithio oni bai eich bod yn gwybod beth fyddai wedi digwydd i drosedd hebddi — gallai
trosedd fod wedi gostwng 20% beth bynnag oherwydd tueddiadau economaidd neu ddemograffig
digysylltiedig, sy'n golygu i'r rhaglen wneud pethau'n waeth mewn gwirionedd o'i chymharu â'r
gwrthffeithiol, er gwaethaf y rhif crai'n gwella. Dyma'r camgymeriad dadansoddol mwyaf cyffredin
mewn honiadau effaith sector cyhoeddus a chymdeithasol: camgymryd cymhariaeth cyn/ar-ôl am
dystiolaeth o achosiaeth. Mae'r Llyfr Magenta'n glir mai ateb cwestiwn gwrthffeithiol yw diben
gwerthuso effaith — "pa wahaniaeth a wnaeth yr ymyrraeth hon?" — a bod ei ateb yn galw am
amcangyfrif, nid dim ond disgrifiad, o'r byd na ddigwyddodd.

Mae dulliau gwahanol yn adeiladu'r gwrthffeithiol â graddau gwahanol o hyder, ac mae canllawiau
gwerthuso'r llywodraeth yn eu graddio yn unol â hynny. Mae treialon rheoledig ar hap (RCTs), lle
caiff unigolion neu ardaloedd eu neilltuo ar hap i dderbyn ymyrraeth ai peidio, yn cynhyrchu'r
gwrthffeithiol cryfaf am fod hapneilltuo'n sicrhau nad yw'r grŵp triniaeth a'r grŵp rheoli'n
gwahaniaethu, ar gyfartaledd, ond o ran derbyn yr ymyrraeth. Mae'r Swyddfa Gabinet a'r Rhwydwaith Yr
Hyn Sy'n Gweithio wedi hyrwyddo RCTs ar draws polisi cyhoeddus y DU ers adroddiad 2012 "Test, Learn,
Adapt" gan y Tîm Mewnwelediad Ymddygiadol, yn union am fod dyluniadau gwannach yn agored i
gymysgu achosion — gall y gwahaniaeth a arsylwyd adlewyrchu pwy ddewisodd gymryd rhan, nid effaith
y rhaglen. Lle mae hapneilltuo'n anymarferol neu'n anfoesegol (fel y mae'n aml ar gyfer rhaglenni â
hawl statudol, neu ar gyfer newidiadau polisi poblogaeth-gyfan), mae'r Llyfr Magenta'n nodi
hierarchaeth eglur o ddewisiadau eraill gwannach ond dal yn ddefnyddiol: grwpiau cymharu paredig,
dyluniadau gwahaniaeth-mewn-gwahaniaethau, datgysylltiad atchweliad o gwmpas trothwyon cymhwysedd,
ac, fel dewis olaf, cymhariaeth cyn/ar-ôl syml — wedi'i fflagio'n glir fel y ffurf wannaf o
dystiolaeth, sy'n dueddol o gymysgu effaith y rhaglen ag effaith popeth arall a newidiodd yr un
pryd.

## Y fathemateg

Y fframio gwrthffeithiol, sy'n gymwys ar draws pob dull:

```
Effaith a amcangyfrifwyd = Canlyniad(gyda ymyrraeth) − Canlyniad(gwrthffeithiol: heb ymyrraeth)

NID:
Effaith a amcangyfrifwyd ≠ Canlyniad(ar-ôl) − Canlyniad(cyn)   [yn cymysgu amser â thriniaeth]
```

Mae gwahaniaeth-mewn-gwahaniaethau (DiD), un o'r dyluniadau lled-arbrofol mwyaf cyffredin mewn
gwerthuso llywodraeth, yn ynysu effaith y driniaeth drwy dynnu newid cyn/ar-ôl y grŵp cymharu ei
hun:

```
Amcangyfrif DiD = [Canlyniad(triniaeth, ar-ôl) − Canlyniad(triniaeth, cyn)]
                 − [Canlyniad(cymharu, ar-ôl) − Canlyniad(cymharu, cyn)]
```

Mae hyn yn tynnu unrhyw duedd sy'n gyffredin i'r ddau grŵp (er enghraifft, sifft economaidd
genedlaethol sy'n effeithio ar bawb), gan adael dim ond y newid gwahaniaethol y gellir ei briodoli
i'r ymyrraeth.

## Enghraifft waith

**Rhaglen gyflogaeth, cyn/ar-ôl (dyluniad gwan)**: mae cynllun cefnogi swyddi'n adrodd bod
cyflogaeth cyfranogwyr wedi codi o 40% i 55% dros flwyddyn — casgliad naïf o "+15 pwynt canran
oherwydd y rhaglen."

**Yr un rhaglen, gwahaniaeth-mewn-gwahaniaethau (dyluniad cryfach)**: mae grŵp cymharu paredig o
rai tebyg nad ydynt yn gyfranogwyr, wedi'u tynnu o'r un farchnad lafur leol, yn dangos cyflogaeth yn
codi o 38% i 47% dros yr un flwyddyn (roedd adferiad economaidd cenedlaethol ar y gweill).

```
Newid y grŵp triniaeth:    55% − 40% = +15 pwynt canran
Newid y grŵp cymharu:      47% − 38% = +9 pwynt canran

Amcangyfrif DiD (gwir effaith y rhaglen) = 15 − 9 = +6 pwynt canran
```

Yr effaith briodoladwy onest yw 6 phwynt canran, nid 15 — byddai mwy na hanner y gwelliant cyn/ar-ôl
ymddangosiadol wedi digwydd beth bynnag, wedi'i yrru gan yr un adferiad economaidd yn codi'r grŵp
cymharu.

**Datgysylltiad atchweliad, trothwy cymhwysedd**: mae cynllun grant ar gael dim ond i fusnesau â
llai na 50 o weithwyr. Mae cymharu canlyniadau busnesau ychydig islaw'r trothwy (45–49 o weithwyr,
cymwys) yn erbyn busnesau ychydig uwchben (50–54 o weithwyr, anghymwys) yn rhoi gwrthffeithiol
credadwy am fod busnesau ar bob ochr i doriad gweinyddol mympwyol yn debyg fel arall — y trothwy,
nid unrhyw nodwedd fusnes sylfaenol, sy'n pennu cymhwysedd. Mae gwahaniaeth canlyniad cyfartalog o
£2,000 rhwng y ddau grŵp, a arsylwyd dim ond wrth y trothwy, i'w briodoli i'r grant â llawer mwy o
hyder na chymhariaeth syml o'r holl fusnesau cymwys yn erbyn yr holl rai anghymwys (sy'n
gwahaniaethu'n systematig o ran maint).

## Cysylltiad peirianneg feddalwedd

Dylai meddwl gwrthffeithiol lywio sut y dylunnir systemau olrhain effaith a phibellau gwerthuso ar
gyfer meddalwedd llywodraeth a'r sector cymdeithasol:

- Adeiladwch gipio grŵp cymharu i mewn i system o'r cychwyn — cofnodi pwy oedd yn gymwys ond heb
  gofrestru, neu garfan paredig nad yw'n gyfranogwyr — yn hytrach na'i ôl-ffitio ar ôl i raglen
  redeg eisoes a dim ond data cyn/ar-ôl yn bodoli.
- Lle mae hapneilltuo'n ymarferol (cyflwyniad graddol, gwasanaeth digidol wedi'i alluogi ar gyfer
  rhai defnyddwyr o flaen eraill), offeryniwch y system i gadw neilltuad ar hap fel maes y gellir ei
  holi; mae cyflwyniad graddol yn dinistrio ei werth gwerthuso ei hun yn ddamweiniol os na chaiff
  trefn y neilltuad ei chofnodi.
- Dyma'r dull sylfaenol y tu ôl i
  [ddulliau gwerthuso effaith](../impact-evaluation-methods/) a'r hyn sy'n ei wahanu oddi wrth
  [werthuso effaith yn erbyn gwerthuso proses](../impact-evaluation-vs-process-evaluation/), lle
  mae'r olaf yn gofyn a gyflenwyd rhaglen fel y bwriadwyd yn hytrach nag a achosodd effaith.
- Mae [ychwanegolrwydd a phwysau marw](../additionality-and-deadweight/) a
  [dadleoliad a phriodoliad](../displacement-and-attribution/) ill dau, yn eu craidd, yn gwestiynau
  gwrthffeithiol — pwysau marw yw "beth fyddai'r canlyniad penodol hwn wedi bod heb yr ymyrraeth",
  wedi'i gymhwyso ar lefel addasiad yn hytrach na dyluniad gwerthuso llawn.

## Peryglon

- **Trin cyn/ar-ôl fel tystiolaeth o achosiaeth.** Dyma'r camgymeriad mwyaf cyffredin a mwyaf
  canlyniadol mewn adrodd effaith sector cyhoeddus a chymdeithasol; mae newid cyn/ar-ôl yn cymysgu
  effaith y rhaglen ag effaith popeth arall a newidiodd dros yr un cyfnod.
- **Defnyddio grŵp cymharu sy'n gwahaniaethu'n systematig o'r grŵp triniaeth.** Rhaid i grŵp cymharu
  paredig fod yn wirioneddol debyg o ran nodweddion perthnasol (gweler hierarchaeth ddulliau
  [dadansoddiad gwrthffeithiol](../counterfactual-analysis/) yn y Llyfr Magenta); mae cymharu
  cyfranogwyr rhaglen (a ddewisodd gymryd rhan, ac sy'n aml yn fwy cymhellol) yn erbyn rhai nad
  ydynt yn gyfranogwyr (na wnaethant) yn peryglu tuedd dewis sy'n cuddio fel effaith rhaglen.
- **Dinistrio cyfleoedd hapneilltuo drwy ddyluniad cyflenwi gwael.** Dim ond os yw'r neilltuad yn
  wirioneddol ar hap ac wedi'i gofnodi y mae cyflwyniad graddol neu ar hap yn cadw ei werth gwerthuso
  — mae gadael i reolwyr lleol ddewis pwy sy'n mynd yn gyntaf yn chwalu'r diben.
- **Gor-hawlio manwl gywirdeb o ddyluniad gwan.** Dylid cyflwyno amcangyfrif cyn/ar-ôl fel un
  arwyddocaol, nid fel maint effaith wedi'i fesur; mae hierarchaeth dystiolaeth y Llyfr Magenta'n
  bodoli fel bod cryfder honiad yn cyfateb i gryfder y dyluniad a'i cynhyrchodd.

## Ffynonellau

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
