# Cost Oedi mewn Rhaglenni Cyhoeddus (CoD)

Cost Oedi yw'r gwerth cyhoeddus a gollir fesul uned amser tra nad yw rhaglen, gwasanaeth, neu newid system wedi'i gyflwyno *eto*. Dyma brif fetrig pont y bennod hon: mae'n trosi "llithrodd y dyddiad mynd yn fyw chwe mis" yn bunnoedd yr wythnos, neu'n WELLBYau yr wythnos, fel y gellir dadlau am oedi yn yr un arian â'r achos busnes ei hun.

## Pam mae hyn yn bwysig

Mae rheol Reinertsen — "os mai dim ond un peth y byddwch yn ei fesur, mesurwch y Gost Oedi" — yn trosglwyddo i'r llywodraeth bron yn ddigyfnewid, gan fod rhaglenni cyhoeddus yn arbennig o agored iddi: cymeradwyir achosion busnes yn erbyn llif budd a ragwelir, ond nid yw'r llif hwnnw'n dechrau llifo tan y dyddiad mynd yn fyw, ac mae pob wythnos o lithro yn wythnos o werth a gollwyd nad oes neb yn ei brisio ar y gofrestr risg. Mae craffu parhaus y Swyddfa Archwilio Genedlaethol (NAO) ar gyflwyno Credyd Cynhwysol (gweler ei hadroddiadau "Rolling Out Universal Credit", <https://www.nao.org.uk/>) yn dangos y patrwm hwn: cofnodwyd ac adroddwyd llithriad amserlen, ond anaml y nodwyd cost bunnoedd-yr-wythnos o *fethu* â chyflwyno'r system ddiwygiedig i'r garfan nesaf o hawlwyr fel ffigur pennawd, er mai dyna'r union rif a ddylai fod wedi llywio blaenoriaethu a graddio. Heb ffigur CoD, mae rhaglen sydd wedi'i gohirio yn edrych fel problem amserlen i'r bwrdd cyflenwi; gyda ffigur o'r fath, mae'n broblem erydu gwerth i'r swyddog cyfrifyddu.

## Y fathemateg

```
CoD = budd fesul uned amser a gollir tra heb ei gyflwyno   (£/wythnos neu WELLBYau/wythnos)

Cyfanswm colled oedi = CoD × hyd yr oedi

Llifoedd budd i'w crynhoi ar gyfer rhaglenni cyhoeddus:
  arbedion sy'n rhyddhau arian parod   (lleihau twyll/gwallau, osgoi costau dros dro)
+ capasiti di-arian a ryddhawyd        (oriau gweithiwr achos/swyddog × cost lwythog)
+ budd lles                            (WELLBYau × £13,000/WELLBY, canllawiau atodol
                                         Llyfr Gwyrdd Trysorlys EF ar les, prisiau 2019)
```

Ar gyfer gwasanaethau sy'n wynebu dinasyddion, mynegwch werth mewn lles yn ogystal ag arian — gweler [blynyddoedd bywyd wedi'u haddasu o ran lles](../wellbeing-adjusted-life-years/) am yr uned sylfaenol, a [cost cyfle mewn gwariant cyhoeddus](../opportunity-cost-in-public-spending/) am yr hyn y gallai'r bunt a oedwyd fod wedi'i ariannu fel arall.

## Enghraifft waith

**Awdurdod lleol**: mae uwchraddio system budd-dal tai yn lleihau gwallau gordalu o £150/hawliad/blwyddyn ar draws 20,000 o hawliadau byw.

```
Budd blynyddol = 150 × 20,000 = £3,000,000/flwyddyn
CoD = 3,000,000 / 52 ≈ £57,700/wythnos
Mae oedi gweithredu o 12 mis yn costio 52 × 57,700 ≈ £3,000,000 mewn gwallau y gellid bod wedi'u hosgoi.
```

**Asiantaeth llywodraeth ganolog**: mae gwasanaeth asesu budd-dal anabledd, a gyflwynir chwe mis (26 wythnos) yn hwyrach na'r bwriad, yn golygu bod 200,000 o hawlwyr y flwyddyn yn aros tair wythnos yn hwy ar gyfartaledd am benderfyniad. Modelir pob wythnos ychwanegol o ansicrwydd ariannol fel effaith −0.0018 WELLBY (pwynt boddhad bywyd):

```
Colled WELLBY fesul hawlydd = 3 × 0.0018 = 0.0054
Colled WELLBY flynyddol = 200,000 × 0.0054 = 1,080 WELLBY/flwyddyn
CoD_lles = 1,080 / 52 ≈ 20.8 WELLBY/wythnos
CoD_arian = 20.8 × £13,000 ≈ £270,000/wythnos o werth lles
```

Mae oedi o 26 wythnos, felly, yn "costio" oddeutu 540 WELLBY — gwerth tua £7 miliwn wrth brisiad lles y Llyfr Gwyrdd — gan ail-fframio dyddiad mynd yn fyw a gollwyd fel digwyddiad lles dinasyddion, nid troednodyn rheoli prosiect.

## Cysylltiad peirianneg feddalwedd

CoD yw'r hyn sy'n gwneud [metrigau DORA](../dora-metrics-for-public-value/) a [metrigau llif](../flow-metrics-in-government-delivery/) yn ddealladwy'n ariannol: mae amser arwain yn y bibell × CoD yn arian (neu les) sy'n cael ei losgi mewn ciwiau cyn iddo gyrraedd dinesydd o gwbl. Yn benodol:

- **Blaenoriaethu**: graddiwch restr waith yn ôl CoD ÷ hyd yn hytrach nag yn ôl hynafedd rhanddeiliaid — cyfatebiaeth peirianneg feddalwedd i ofyniad y Llyfr Gwyrdd i werthuso opsiynau ar sail gwerth, nid ar sail pwy sy'n gofyn.
- **Caffael**: mae gan gylch caffael fframwaith o 12–18 mis ei CoD ei hun; mae ei brisio yn newid yr achos brys dros lwybrau cyflymach, ac mae'n bwydo'n uniongyrchol i mewn i benderfyniadau [adeiladu neu brynu](../build-vs-buy-in-government/) lle mae amser-i-werth yn ffactor penderfynu.
- **Achos budd**: dylai pob ffigur CoD a ddyfynnir adeg cymeradwyo ailymddangos yn ystod [gwireddu buddion](../benefits-realization/) — os oedd cost yr oedi'n real, dylai'r budd cyflymach fod yn fesuradwy wedi'r dyddiad mynd yn fyw.

## Peryglon

- **Tybio CoD llinellol**: mae gan rai gwasanaethau cyhoeddus werth wedi'i siapio gan derfyn amser (dyddiad cydymffurfio statudol — mae CoD yn neidio i lefelau risg gorfodi ar ôl y dyddiad, ac yn agos at sero cyn hynny) yn hytrach na chyfradd wythnosol lyfn. Dosbarthwch broffil y brys cyn lluosi.
- **CoD ar allbynnau nad oes eu hangen ar neb**: dim ond os oes gwerth i'r peth sydd heb ei gyflwyno y mae gan oedi gost; mae gan system na fydd neb yn ei defnyddio CoD sero, ni waeth pa mor hwyr ydyw.
- **Cyfrif oedi a disgowntio ddwywaith**: mae'r [gyfradd ddisgowntio gymdeithasol](../social-discount-rate/) eisoes yn prisio amser dros orwelion gwerthuso aml-flwyddyn; CoD yw'r fersiwn weithredol o fewn y gorwel ar gyfer wythnosau a misoedd. Defnyddiwch CoD ar gyfer llithriad amserlen, a newid GPN (gwerth presennol net) ar gyfer ail-broffilio aml-flwyddyn.

## Ffynonellau

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
