# Ychwanegolrwydd a Phwysau Marw

Mae ychwanegolrwydd yn gofyn a achosodd ymyrraeth ganlyniad na fyddai wedi digwydd fel arall. Mae
pwysau marw (*deadweight*) yn ddrych o hynny: y gyfran o ganlyniad a fyddai wedi digwydd beth
bynnag, hyd yn oed heb y rhaglen, y grant, neu'r cymhorthdal. Mae bron pob honiad effaith gan raglen
lywodraeth neu elusen yn gorddweud ei effaith nes tynnu pwysau marw ohono, a dyna pam mae canllawiau
gwerthuso'r DU yn ei drin fel yr addasiad cyntaf a phwysicaf i unrhyw ffigur pennawd.

## Pam mae hyn yn bwysig

Mae "cefnogasom 500 o fusnesau i dyfu" yn swnio fel camp, ond os byddai 300 o'r busnesau hynny wedi
tyfu beth bynnag — am fod yr economi leol yn adfer, am fod ganddynt lwybrau ariannu eraill, am eu
bod eisoes ar drywydd twf cyn i'r rhaglen ddechrau — dim ond 200, nid 500, yw cyfraniad ychwanegol
gwirioneddol y rhaglen. Mae Llyfr Magenta Trysorlys EF a'r hirsefydlog "Ganllaw Ychwanegolrwydd"
(Trysorlys EF/BIS), a ddatblygwyd yn wreiddiol ar gyfer rhaglenni datblygu a chynadfywio rhanbarthol
ac a ddefnyddir yn eang ar draws gwerthuso llywodraeth y DU byth ers hynny, yn ffurfioli pwysau marw
fel yr addasiad cychwynnol yn y dilyniant effaith net safonol: effaith crynswth minws pwysau marw,
minws dadleoliad, minws gollyngiad, wedi'i addasu am effeithiau lluosydd, sy'n hafal i effaith net
ychwanegol. Sgipio'r cam hwn yw'r ffordd fwyaf cyffredin y caiff honiadau effaith sector cyhoeddus a
chymdeithasol eu chwyddo, boed yn fwriadol ai peidio — ni all rhaglen grant nad yw ond yn mesur
canlyniadau cyfranogwyr crynswth, heb grŵp cymharu, wahaniaethu rhwng ei effaith ei hun a'r hyn a
fyddai wedi digwydd beth bynnag.

Nid canran sefydlog yw pwysau marw; mae'n dibynnu'n llwyr ar y gwrthffeithiol ar gyfer y boblogaeth
a'r ymyrraeth benodol (gweler [dadansoddiad gwrthffeithiol](../counterfactual-analysis/)). Yn
gyffredin, canfu gwerthusiadau datblygu rhanbarthol Lloegr o dan yr hen Asiantaethau Datblygu
Rhanbarthol gyfraddau pwysau marw yn yr amrediad 20–60% yn dibynnu ar y math o gefnogaeth fusnes,
sef pam mae gwerthusiadau rhaglenni credadwy'n adrodd amrediad wedi'i addasu am bwysau marw yn
hytrach na ffigur tybiedig sengl, a pham mae cyllidwyr fel y National Lottery Community Fund a Big
Society Capital yn mynnu bod deiliaid grant yn mynd i'r afael â phwysau marw'n benodol wrth adrodd
canlyniadau yn hytrach nag adrodd cyfrifon cyfranogwyr crynswth.

## Y fathemateg

Y dilyniant addasu effaith net safonol, fel y'i nodir yng nghanllawiau gwerthuso'r DU (Llyfr Magenta;
Canllaw Ychwanegolrwydd Trysorlys EF/BIS; canllawiau gwerthuso ESIF a chronfeydd strwythurol):

```
Canlyniad crynswth
  − Pwysau marw    (yr hyn a fyddai wedi digwydd beth bynnag)
  − Dadleoliad     (gweithgaredd/budd a symudwyd o rywle arall, nid a
                    grëwyd — gweler dadleoliad-a-phriodoliad)
  − Gollyngiad     (budd sy'n cronni y tu allan i'r grŵp/ardal targed)
  × Lluosydd        (gweithgarwch economaidd anuniongyrchol/anwythol
                    ychwanegol, lle mae'n gadarnhaol)
  = Effaith net ychwanegol
```

Cyfradd pwysau marw fel cyfran:

```
Cyfradd pwysau marw = canlyniadau a fyddai wedi digwydd heb yr ymyrraeth
                       / cyfanswm y canlyniadau crynswth a arsylwyd

Canlyniadau net ychwanegol = Canlyniadau crynswth × (1 − Cyfradd pwysau marw)
```

## Enghraifft waith

**Rhaglen grant cefnogi busnes**: mae cynllun grant rhanbarthol yn adrodd bod 500 o fusnesau a
gefnogwyd wedi cynyddu cyflogaeth y flwyddyn ganlynol, cyfartaledd o 3 swydd yr un — honiad crynswth
o 1,500 o swyddi.

Mae grŵp cymharu paredig o fusnesau tebyg heb eu cefnogi (gweler
[dadansoddiad gwrthffeithiol](../counterfactual-analysis/)) yn dangos y byddai 40% o dwf cyflogaeth
y busnesau a gefnogwyd wedi digwydd beth bynnag, yn seiliedig ar sut y perfformiodd y grŵp paredig
dros yr un cyfnod.

```
Cyfradd pwysau marw = 40%
Swyddi net ychwanegol = 1,500 × (1 − 0.40) = 900 o swyddi
```

Cyflawniad gonest adroddadwy'r rhaglen yw 900 o swyddi, nid 1,500 — gostyngiad o 40% yn deillio'n
llwyr o'r addasiad pwysau marw, cyn ystyried dadleoliad na gollyngiad hyd yn oed.

**Rhaglen gyflogaeth elusennol**: mae elusen yn lleoli 200 o bobl sydd wedi bod yn ddi-waith yn
hirdymor mewn swyddi am gost o £600,000 (£3,000 y lleoliad, yn grynswth). Mae data marchnad lafur
cenedlaethol yn dangos, heb unrhyw ymyrraeth, y byddai oddeutu 15% o garfan gymharol o bobl
ddi-waith hirdymor yn dod o hyd i waith o fewn yr un cyfnod drwy gylchdroi naturiol y farchnad lafur.

```
Cyfradd pwysau marw = 15%
Lleoliadau net ychwanegol = 200 × (1 − 0.15) = 170
Gwir gost y lleoliad ychwanegol = £600,000 / 170 ≈ £3,529
```

Mae'r ffigur cost-fesul-lleoliad crynswth (£3,000) yn tanbrisio gwir gost cyfraniad ychwanegol yr
elusen o oddeutu 15%.

## Cysylltiad peirianneg feddalwedd

Mae ychwanegolrwydd a phwysau marw'n bwysig yn uniongyrchol i unrhyw un sy'n adeiladu meddalwedd
mesur effaith neu reoli grantiau ar gyfer y sector cyhoeddus neu gymdeithasol:

- Dylai systemau adrodd canlyniadau gipio grŵp cymharu neu linell sylfaen yn ôl cynllun, nid dim
  ond canlyniadau cyfranogwyr — mae ôl-ffitio gwrthffeithiol ar ôl i system lansio hebddo'n llawer
  anoddach nag adeiladu'r gipiad i mewn o'r cychwyn (gweler
  [dadansoddiad gwrthffeithiol](../counterfactual-analysis/)).
- Bydd dangosfyrddau sy'n adrodd cyfrifon cyfranogwyr crynswth yn unig yn gorddweud effaith i
  gyllidwyr a chyrff trosolwg yn systematig; lle bo amcangyfrifon pwysau marw'n bodoli (o
  lenyddiaeth werthuso neu grŵp cymharu), dylai'r feddalwedd ddangos y ffigur net-o-bwysau-marw
  ochr yn ochr â'r un crynswth, nid yn ei le.
- Mae hyn yn cysylltu'n uniongyrchol ag
  [elw cymdeithasol ar fuddsoddiad (SROI)](../social-return-on-investment/),
  lle nad yw cymhareb SROI ond yn gredadwy unwaith y bydd pwysau marw (a dadleoliad) wedi'u tynnu o'r
  canlyniadau crynswth a hawlir — bydd cyfrifiannell SROI sy'n hepgor y cam hwn yn cynhyrchu
  cymarebau chwyddedig na fyddant yn goroesi craffu.

## Peryglon

- **Adrodd canlyniadau crynswth fel pe baent i gyd yn ychwanegol.** Dyma'r camgymeriad mesur effaith
  mwyaf cyffredin mewn adroddiadau grant a rhaglenni; gofynnwch bob amser "a fyddai hyn wedi digwydd
  beth bynnag?" cyn cyhoeddi ffigur pennawd.
- **Tybio bod un ganran pwysau marw'n gymwys ym mhobman.** Mae pwysau marw'n amrywio'n fawr yn ôl
  sector, poblogaeth, ac amodau economaidd lleol; defnyddiwch grŵp cymharu neu dystiolaeth sector-
  benodol yn hytrach nag ailddefnyddio ffigur o werthusiad anghysylltiedig.
- **Drysu pwysau marw â dadleoliad.** Mae pwysau marw'n ymwneud â chanlyniadau gwrthffeithiol i'r un
  cyfranogwyr; mae dadleoliad yn ymwneud ag effeithiau ar bobl neu leoedd eraill — gweler
  [dadleoliad a phriodoliad](../displacement-and-attribution/). Mae cymysgu'r ddau'n arwain at
  ddyblu cyfrif neu dan-gyfrif yr addasiad.
- **Pwysau marw hunan-adroddedig gan gyfranogwyr.** Mae gofyn i fuddiolwyr "a fyddai hyn wedi digwydd
  heb ein cymorth?" yn cynhyrchu amcangyfrifon pwysau marw sy'n systematig isel (mae cyfranogwyr yn
  tueddu i briodoli'r clod i'r rhaglen); mae grŵp cymharu annibynnol yn llawer mwy dibynadwy.

## Ffynonellau

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on deadweight, displacement, and leakage in structural-funds evaluation.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
