# Cost Fesul Trafodiad

Cost fesul trafodiad yw'r brif fetrig economeg unedol ar gyfer gwasanaeth digidol y llywodraeth: cyfanswm cost cyflenwi sianel, wedi'i rannu â nifer y trafodion a gwblhawyd drwyddi. Dyma'r ffigwr blaenllaw ar hen Lwyfan Perfformiad GOV.UK, a dyma'r rhif a ariannodd ddegawd o fuddsoddi mewn "digidol yn ddiofyn" — a dyna'n union pam mai dyma hefyd y fetrig sydd hawsaf i'w thrin i edrych yn well nag y mae mewn gwirionedd.

## Pam mae hyn yn bwysig

Cyflwynodd Adroddiad Effeithlonrwydd Digidol Swyddfa'r Cabinet (2012) y gymhariaeth cost-sianel mewn termau a lynodd: canfuwyd bod trafodion digidol tua 20 gwaith yn rhatach na thrwy'r ffôn a thua 50 gwaith yn rhatach na wyneb yn wyneb, gyda ffigurau enghreifftiol o lywodraeth leol o oddeutu £0.15 fesul trafodiad gwe o'i gymharu â £2.83 dros y ffôn ac £8.62 wyneb yn wyneb. Daeth y gymhariaeth honno, ar ei phen ei hun, yn gyfiawnhad dros ailgynllunio'r 25 gwasanaeth enghreifftiol a enwyd yn Strategaeth Ddigidol y Llywodraeth, a thros bob achos busnes adrannol sydd wedi dyfynnu arbedion sifft sianel byth ers hynny. Mae'r ffigwr yn ddefnyddiol iawn fel arwydd o raddfa fras, ond mae'r gymhareb yn dibynnu'n llwyr ar yr hyn a gyfrifir ar bob ochr: mae cost deg ar gyfer y sianel ffôn yn cynnwys staff y ganolfan alwadau, y contract telathrebu, hyfforddiant a'r ystad; mae cost ddigidol deg yn cynnwys cynnal a chadw gweinyddion, cyflogau parhaus timau cynnyrch, amser y ddesg gymorth ar gyfer teithiau a fethodd, a'r sianel ddigidol â chymorth sy'n ofynnol gan bwynt 5 [Safon Gwasanaeth Digidol](../digital-service-standard/). Diosgwch ddigon o'r rheini o'r ochr ddigidol a bydd unrhyw wasanaeth yn edrych yn rhad.

## Y fathemateg

```
Cost fesul trafodiad = cyfanswm cost sianel a ddyrannwyd / trafodion a gwblhawyd

Dylai cyfanswm cost sianel a ddyrannwyd gynnwys:
  + cynnal a chadw gweinyddion a seilwaith
  + cost tîm cynnyrch/peirianneg/cymorth (wedi'i amorteiddio)
  + cost cynnwys a dylunio gwasanaeth (wedi'i amorteiddio)
  + cost cymorth digidol â chymorth / hygyrchedd
  + cost galw methiant (defnyddwyr sy'n methu'n ddigidol ac yn troi
    at y ffôn yn lle hynny)
  − caiff cost adeiladu untro ei amorteiddio dros oes ddisgwyliedig y
    gwasanaeth, nid ei godi'n llawn ym mlwyddyn un

Y tric cyfrifyddu cyffredin:
  Dyfynnir "cost ymylol fesul trafodiad" (cynnal a chadw'n unig, ar ôl
  adeiladu) fel pe bai'n "gost gyfartalog fesul trafodiad" (cyfanswm
  cost gan gynnwys y tîm sy'n parhau i adeiladu a rhedeg y gwasanaeth).
  Gall y ddau wahaniaethu 10 gwaith neu fwy ar gyfer gwasanaeth sydd â
  thîm cyflenwi mawr, gweithredol.
```

## Enghraifft waith

**Gwasanaeth adnewyddu treth cerbyd**: 4 miliwn o drafodion/blwyddyn.

```
Ffigwr ymylol yn unig (y tric):
  Cynnal a chadw a phrosesu taliadau'n unig = £180,000/blwyddyn
  Cost fesul trafodiad = 180,000 / 4,000,000 = £0.045
  → y ffigwr blaenllaw a ddyfynnir mewn achos busnes

Ffigwr wedi'i lwytho'n llawn (yr un onest):
  Cynnal a chadw a thaliadau                £180,000
  Tîm cynnyrch/peirianneg (8 CALl)          £720,000
  Desg gymorth (trafodion a fethodd/holwyd) £310,000
  Llinell ffôn ddigidol â chymorth          £140,000
  Cyfanswm                                  £1,350,000
  Cost fesul trafodiad = 1,350,000 / 4,000,000 = £0.3375

Mae'r ffigwr wedi'i lwytho'n llawn yn dal i fod tua 8 gwaith yn rhatach
na chymharydd sianel-ffôn £2.83 yr Adroddiad Effeithlonrwydd Digidol —
arbediad gwirioneddol a chyfiawnadwy — ond 7.5 gwaith yn uwch na'r
ffigwr ymylol yn unig a ddyfynnir yn y fersiwn fyrhoedlog. Mae'r ddau
rif yn "wir"; dim ond un ohonynt sy'n gymharadwy â chost y sianel ffôn
y mae'n cael ei osod yn ei herbyn.
```

## Cysylltiad peirianneg feddalwedd

Dyma'r man lle mae penderfyniadau pensaernïol yn troi'n rif ariannol: bydd gwasanaeth sy'n graddio'n awtomatig yn lân ac angen ychydig o ymyrraeth â llaw yn gyrru'r ffigwr hwn i lawr dros amser; bydd un sy'n cynhyrchu cyfaint uchel o docynnau cymorth oherwydd cyflyrau gwall dryslyd yn ei yrru i fyny ni waeth pa mor effeithlon yw'r cynnal a chadw. Dyma'r fetrig gydymaith naturiol i bwynt 10 [Safon Gwasanaeth Digidol](../digital-service-standard/) ("diffinio sut olwg sydd ar lwyddiant, a chyhoeddi data perfformiad") ac i [service-standards-and-transaction-metrics](../service-standards-and-transaction-metrics/), sy'n gosod allan y set fwy cyflawn o ddangosyddion perfformiad allweddol y mae'r ffigwr hwn yn eistedd oddi mewn iddi. Mae hefyd yn bwydo'n uniongyrchol i mewn i gyfrifiadau [arbedion sifft sianel](../channel-shift-savings/) a dylid ei gymodi yn erbyn [total-cost-of-ownership-in-government-it](../total-cost-of-ownership-in-government-it/) fel na chaiff gorbenion llwyfannau a gwasanaethau a rennir eu gollwng yn ddistaw.

## Peryglon

- **Cost ymylol wedi'i gwisgo fel cost gyfartalog**: dyfynnu cost cynnal a chadw'n unig ar ôl i wasanaeth gael ei adeiladu, gan hepgor y tîm parhaus sy'n ei gynnal, ei ddatblygu a'i gefnogi — gweler yr enghraifft waith uchod.
- **Eithrio cost digidol â chymorth**: nid yw sianel yn cydymffurfio â "digidol yn ddiofyn", ac nid yw ei gwir gost yn cael ei chyfrif, os yw'r llwybr ffôn/papur wrth gefn sy'n ofynnol gan [cynhwysiant digidol](../digital-inclusion/) yn cael ei gostio ar wahân neu ei anwybyddu.
- **Anwybyddu galw methiant**: mae trafodion sy'n dechrau'n ddigidol ac yn methu, gan gynhyrchu galwad ffôn neu ffurflen bapur beth bynnag, yn gost i'r sianel ddigidol, nid i'r sianel sy'n dal y methiant.
- **Cymharu trafodion o wahanol gymhlethdod ar draws sianeli**: mae galwadau ffôn yn ymdrin yn anghymesur â'r achosion anodd (dibynyddion lluosog, cywiro gwallau, ymgeiswyr agored i niwed); mae cymharu cost ffôn gyfartalog â chost ddigidol gyfartalog yn gorbwysleisio'r gymhareb oni bai bod cymysgedd y trafodion yn cael ei baru.

## Ffynonellau

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
