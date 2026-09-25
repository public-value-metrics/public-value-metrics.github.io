# Safonau Gwasanaeth a Mesurau Trafodion

Y GOV.UK Service Standard yw rhestr wirio 14 pwynt llywodraeth y DU ar gyfer adeiladu a rhedeg
gwasanaeth digidol cyhoeddus, ac mae'n dod ynghyd â set fach, orfodol o fesurau trafodion meintiol —
cost fesul trafodiad, cyfradd gwblhau, defnydd digidol, a boddhad defnyddwyr — y mae'n rhaid i dimau eu
cyhoeddi ar gyfer pob gwasanaeth byw yn y llywodraeth ganolog. Gyda'i gilydd, mae'r safon a'r mesurau'n
arbenigedd gweithredol, dydd i ddydd, o'r fframweithiau gwerth cyhoeddus a KPI ehangach yn y storfa hon,
wedi'u anelu'n union at dimau cyflenwi meddalwedd.

## Pam mae hyn yn bwysig

Mae'r Service Standard, a gynhelir yn llawlyfr gwasanaeth GOV.UK, yn mynnu bod pob asesiad pwynt-mewn-
amser (alffa, beta, byw) o wasanaeth digidol y llywodraeth yn dangos — ymhlith ei 14 pwynt — bod y tîm
yn deall anghenion defnyddwyr, yn gweithio mewn tîm amlddisgyblaethol, yn ailadrodd ac yn gwella'n
aml, ac yn *gwerthuso offer, systemau, a ffyrdd o weithio*. Yn hanesyddol, roedd hyn yn eistedd ochr yn
ochr â Performance Platform gyhoeddus lle roedd pob gwasanaeth byw'n cyhoeddi ei ddata trafodion yn
agored; mae'r platfform hwnnw bellach wedi ymddeol, ond mae'r rhwymedigaeth sylfaenol i fesur a
chyhoeddi'r pedwar mesur craidd hyn yn parhau drwy ganllawiau "mesur llwyddiant" y llawlyfr gwasanaeth.
Y rheswm bod hyn yn wahanol i ddangosfwrdd KPI meddalwedd generig yw bod y mesurau hyn wedi'u dylunio'n
benodol fel un model economaidd cysylltiedig, nid pedair sgôr annibynnol: dim ond os yw'r gyfradd
gwblhau'n aros yn uchel ac mae defnydd digidol wir yn codi, yn hytrach na dim ond ychwanegu sianel rad
ochr yn ochr â sianel ddrud sy'n ddigyfnewid, y mae'r achos arbedion cyfan dros lywodraeth ddigidol yn
gwireddu — canfu Digital Efficiency Report Government Digital Service fod trafodion digidol tua 20
gwaith yn rhatach na thros y ffôn a thua 50 gwaith yn rhatach nag wyneb yn wyneb ar gyfer gwasanaethau
llywodraeth leol cymaradwy.

## Y fathemateg

```
Cost fesul trafodiad  = cyfanswm cost redeg y gwasanaeth / nifer y trafodion a gwblhawyd
Cyfradd gwblhau        = trafodion a gwblhawyd / trafodion a ddechreuwyd × 100
Defnydd digidol         = trafodion sianel ddigidol / trafodion pob sianel × 100
Boddhad defnyddwyr      = % boddhaus + boddhaus iawn, arolwg 5-pwynt o fewn gwasanaeth

Arbediad sifft sianel = cyfaint trafodion × sifft defnydd × (cost fesul trafodiad ar
                         yr hen sianel − cost fesul trafodiad yn ddigidol)

Cost galw methiant = (1 − cyfradd gwblhau) × trafodion a geisiwyd yn ddigidol ×
                      cost y sianel wrth gefn y mae'r defnyddwyr hynny'n ei defnyddio wedyn
```

## Enghraifft waith

**Gwasanaeth adnewyddu trwydded llywodraeth ganolog darluniadol**, 2 filiwn o drafodion/blwyddyn, ar
hyn o bryd 65% dros y ffôn (£3.00/trafodiad) a 35% yn ddigidol (£0.30/trafodiad), cyfradd gwblhau
80%. Mae ailddyluniad yn erbyn y Service Standard 14 pwynt yn codi defnydd digidol i 60% a chwblhad i
92%:

```
Arbediad sifft defnydd = 2,000,000 × 0.25 × (3.00 − 0.30) = £1,350,000/blwyddyn

Cost galw methiant, cyn:
  2,000,000 × 0.35 × (1 − 0.80) × £3.00 = £420,000/blwyddyn (mae'r rhai a adawodd yn syrthio'n
  ôl at y ffôn)

Cost galw methiant, ar ôl:
  2,000,000 × 0.60 × (1 − 0.92) × £3.00 = £288,000/blwyddyn

Arbediad galw methiant net = £420,000 − £288,000 = £132,000/blwyddyn

Cyfanswm arbediad blynyddol ≈ £1,350,000 + £132,000 = £1,482,000/blwyddyn
```

Mae'r rhifyddeg yn gwneud yn glir pam nad yw cyfradd gwblhau'n fesur eilaidd: heb y gwelliant o 80% i
92%, byddai'r arbediad sifft defnydd wedi'i ddwyn yn ôl yn rhannol gan alw methiant yn cyfeirio
defnyddwyr digidol rhwystredig yn syth yn ôl at y sianel ffôn ddrud.

## Cysylltiad peirianneg feddalwedd

Mae'r pedwar mesur hyn yn enghraifft weithredol o ddangosfwrdd cost-canlyniad: un mesur cost wedi'i
gadw ar wahân i dri mesur canlyniad/ansawdd, byth wedi'u cywasgu'n fwriadol yn un sgôr — yr un
ddisgyblaeth yr ymresymir drosti yn [KPIs y sector cyhoeddus](../public-sector-kpis/). I beirianwyr,
mae hyn yn torri i lawr yn waith concrid, perchnogadwy: mae cyfradd gwblhau'n broblem offerynnu twndis,
ac mae pob pwynt gadael yn y daith yn, mewn egwyddor, yn ddarganfyddadwy ac yn drwsiadwy; mae cost
fesul trafodiad angen cyfrifyddiaeth cost uned wirioneddol gan gynnwys costau sianel-gynorthwyedig-gan-
staff a phapur, nid dim ond gwariant cynnal cwmwl (gweler
[cost fesul trafodiad](../cost-per-transaction/) a
[cyfanswm cost perchnogaeth mewn TG y llywodraeth](../total-cost-of-ownership-in-government-it/)); ac
mae defnydd digidol yn fesur tegwch mewn gwisg effeithlonrwydd — mae'r dinasyddion na allant neu na
fyddant yn newid sianel yn anghymesur o hŷn, yn anabl, neu wedi'u heithrio'n ddigidol, felly mae cau
sianel ymosodol yn troi "arbediad" yn niwed mynediad (gweler
[cynhwysiant digidol](../digital-inclusion/) ac
[arbedion sifft sianel](../channel-shift-savings/)). Y safon 14 pwynt ei hun yw'r fanyleb broses y tu
ôl i'r ffigurau hyn — gweler [safon gwasanaeth digidol](../digital-service-standard/) am y safon yn
llawn, a [mesurau boddhad dinasyddion](../citizen-satisfaction-metrics/) am sut mae'r ffigur boddhad
yma'n perthyn i fesur ymddiriedaeth ehangach.

## Peryglon

- **Enillion defnydd wedi'u cael drwy gau'r sianel amgen**: mae cau llinell ffôn yn codi'r ganran
  defnydd digidol yn rhifyddol tra'n dympio galw methiant ar ba bynnag sianel sy'n weddill (yn aml
  llwybr wyneb-yn-wyneb neu ddigidol-gynorthwyedig drutach); mesurwch gost y system gyfan bob amser,
  nid y gymhareb yn unig.
- **Mesur cyfradd gwblhau o gam dau'r twndis**: mae dechrau'r cyfrif "a ddechreuwyd" ar ôl y pwynt
  gollwng gwirioneddol cyntaf yn gwneud i'r gyfradd gwblhau edrych yn well ac yn cuddio'r golled fwyaf
  y gellir ei thrwsio.
- **Cost fesul trafodiad yn eithrio cymorth digidol-gynorthwyedig**: mae cost uned digidol-yn-unig sy'n
  anwybyddu'r amser staff a dreulir yn helpu defnyddwyr na allant hunan-wasanaethu'n tanddatgan gwir
  gost y sianel.
- **Cyhoeddi mesurau heb ddiffiniad cyffredin ar draws gwasanaethau**: mae "trafodiad" a "wedi'i gwblhau"
  yn golygu pethau gwahanol ar draws timau gwasanaeth gwahanol oni bai bod y diffiniadau'n
  safonedig ac wedi'u fersiynu, gan wneud cymhariaeth draws-wasanaeth yn annibynadwy.

## Ffynonellau

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
