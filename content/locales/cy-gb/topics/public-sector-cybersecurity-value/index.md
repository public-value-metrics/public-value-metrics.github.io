# Gwerth Seiberddiogelwch y Sector Cyhoeddus

Gwerth seiberddiogelwch y sector cyhoeddus yw'r ddisgyblaeth o brisio lleihau risg: beth yw gwerth gwneud toriad i ddata dinasyddion yn llai tebygol, o ystyried nad yw gwariant diogelwch yn cynhyrchu unrhyw allbwn gweladwy pan mae'n gweithio a bod ganddo un hynod weladwy pan mae'n methu? I wasanaeth sy'n dal cofnodion budd-daliadau, data iechyd, neu gofnodion treth, dyna'n union pam mae angen dadl werth eglur arno, nid dim ond tic cydymffurfio, am fod y priodwedd "anweledig pan mae'n gweithio" ganddo.

## Pam mae hyn yn bwysig

Mae Fframwaith Asesu Seiber (CAF) Canolfan Seiberddiogelwch Genedlaethol y DU yn rhoi ffordd strwythuredig i sefydliadau'r sector cyhoeddus wneud diogelwch yn ddisgyblaeth y gellir ei hasesu, sy'n seiliedig ar ganlyniadau, yn hytrach na rhestr wirio: mae'n diffinio pedwar amcan lefel uchel (rheoli risg diogelwch, diogelu rhag ymosodiad seiber, canfod digwyddiadau seiberddiogelwch, a lleihau effaith digwyddiadau) wedi'u rhannu'n ganlyniadau cyfrannol y gellir asesu perchennog system yn eu herbyn, yn yr un ysbryd â phwynt 9 [Safon Gwasanaeth Digidol](../digital-service-standard/) ("creu gwasanaeth diogel sy'n diogelu preifatrwydd defnyddwyr"). Mae gan yr hyn y mae asesiad CAF yn diogelu yn ei erbyn bris dogfennedig: mae Adroddiad Cost Toriad Data IBM yn olrhain cost gyfartalog toriad yn ôl sector, ac wedi canfod yn gyson fod y sector cyhoeddus tuag at ben isaf yr ystod o'i gymharu â chyllid neu ofal iechyd — mae argraffiadau diweddar yn gosod cyfartaledd y sector cyhoeddus tua $2.6–2.9 miliwn fesul toriad — ond nid yw "is na chyllid" yn golygu "isel", ac mae gan doriadau'r llywodraeth gostau nad yw ffigurau'r adroddiad yn eu dal yn llawn: colli ymddiriedaeth dinasyddion mewn sianeli digidol, sy'n gostwng y [defnydd digidol](../channel-shift-savings/) y mae achosion busnes sifft sianel yn dibynnu arno, a chost wleidyddol a chyfreithiol datgelu data yr oedd y wladwriaeth wedi gorfodi dinasyddion i'w drosglwyddo yn y lle cyntaf.

## Y fathemateg

Caiff buddsoddiad diogelwch ei brisio yn yr un ffordd ag y prisir unrhyw wariant lleihau risg: fel gostyngiad colled ddisgwyliedig, gan ddefnyddio hunaniaeth glasurol rheoli risg.

```
Disgwyliad Colled Blynyddol (ALE) = Disgwyliad Colled Sengl (SLE)
                                  × Cyfradd Digwydd Flynyddol (ARO)

Gwerth rheolaeth ddiogelwch =
  ALE_cyn_rheolaeth − ALE_ar_ôl_rheolaeth − cost flynyddol y rheolaeth

Mae rheolaeth yn werth ei hariannu pan fydd:
  (ALE_cyn − ALE_ar_ôl) > cost flynyddol y rheolaeth

Nid yw asesiad CAF yn allbynnu tebygolrwydd yn uniongyrchol, ond mae
proffil canlyniadau CAF gwasanaeth (pa ganlyniadau cyfrannol sy'n
"gyflawn", "wedi'u cyflawni'n rhannol", neu "heb eu cyflawni") yn fewnbwn
dirprwy resymol i amcangyfrif ARO — mae gan system â mynediad
breintiedig heb ei reoli neu heb gynllun ymateb i ddigwyddiadau wedi'i
brofi ARO realistig sylweddol uwch nag un sydd â'r ddau yn eu lle.
```

## Enghraifft waith

**System rheoli achosion cyngor sir sy'n dal cofnodion gofal cymdeithasol ar gyfer 40,000 o drigolion**:

```
Disgwyliad Colled Sengl (cost toriad), gan ddefnyddio cyfartaledd
sector cyhoeddus o argraffiad diweddar o Adroddiad Cost Toriad Data
IBM ≈ £2.1m (ffigwr wedi'i drosi, ffigwr trefn maint — dylid bob
amser ei ail-ddeillio o'r argraffiad cyfredol o'r adroddiad yn hytrach
na hen-ddefnyddio rhif sefydlog)

ARO cyfredol (mynediad breintiedig heb ei reoli, dim ymateb i
ddigwyddiadau wedi'i brofi, yn ôl hunanasesiad CAF mewnol sy'n dangos
sawl canlyniad "heb eu cyflawni") ≈ amcangyfrif o 8% y flwyddyn
  ALE_cyn = £2.1m × 0.08 = £168,000/blwyddyn

Rheolaeth arfaethedig: rheoli mynediad breintiedig + cynllun ymateb i
ddigwyddiadau wedi'i brofi, gan symud y canlyniadau CAF perthnasol i
"cyflawn", gyda'r amcangyfrif o dorri ARO i 3%/flwyddyn
  ALE_ar_ôl = £2.1m × 0.03 = £63,000/blwyddyn

Cost flynyddol y rheolaeth (offer + proses + profi) = £45,000

Gwerth y rheolaeth = (168,000 − 63,000) − 45,000 = £60,000/blwyddyn
  yn net gadarnhaol — ei hariannu. Mae'r rhifyddeg hefyd yn dangos y
  byddai'r rheolaeth yn dal i fod yn werth ei hariannu ar bron deirgwaith
  y gost, sef y math o wiriad sensitifrwydd y dylai gyd-fynd ag
  unrhyw ffigwr ALE sy'n seiliedig ar debygolrwydd amcangyfrifedig.
```

## Cysylltiad peirianneg feddalwedd

Mae gan beirianwyr y rhan fwyaf o ysgogyddion hafaliad ALE: mae dylunio rheolaeth mynediad, hylendid dibyniaethau a chlytiau, sylw cofnodi a chanfod, ac offer ymateb i ddigwyddiadau i gyd yn symud y term ARO yn uniongyrchol, a dyna pam mae asesiad CAF yn darllen fel adolygiad pensaernïaeth dechnegol cymaint ag y mae'n archwiliad polisi. Dyma [technical-debt-as-public-value-erosion](../technical-debt-as-public-value-erosion/) ar ei ffurf fwyaf acíwt — mae systemau heb eu clytio, heb eu monitro, a heb reolaeth mynediad dda yn ddyled y mae ei thaliad llog yn risg cynffon, nid llusgiad cyson — a dylid ei chymodi yn erbyn [total-cost-of-ownership-in-government-it](../total-cost-of-ownership-in-government-it/) fel na chaiff gwariant diogelwch ei drin ar wahân i wir gost redeg y system. Mae hefyd yn fewnbwn uniongyrchol i asesiadau [gwerth am arian](../value-for-money/) o dan y Llyfr Gwyrdd: mae cost wedi'i haddasu ar gyfer risg yn rhan o ochr "cost" unrhyw arfarniad opsiynau, nid ôl-ystyriaeth wedi'i gosod ymlaen ar y diwedd.

## Peryglon

- **Trin hunanasesiad CAF fel diogelwch ei hun**: mae asesiad cyflawn yn disgrifio ystum diogelwch; nid yw'n creu un — mae'r gwerth yn y canlyniadau a gyflawnir, nid yn y ddogfen.
- **Defnyddio costau toriad cyfartalog byd-eang fel amcangyfrif lleol heb addasu**: mae ffigurau IBM yn gyfartaleddau ar draws samplau mawr, amrywiol; anaml y bydd disgwyliad colled sengl realistig awdurdod lleol bach yr un fath â disgwyliad adran lywodraeth genedlaethol.
- **Anwybyddu seicoleg risg cynffon mewn penderfyniadau buddsoddi**: mae tebygolrwydd blynyddol isel yn gwneud gwariant diogelwch yn hawdd i'w ohirio'n ddiddiwedd, hyd nes y flwyddyn nad yw'n cael ei ohirio — mae profi sensitifrwydd y cyfrifiad ALE yn erbyn ystod o werthoedd ARO, fel yn yr enghraifft waith, yn gwrthweithio hyn.
- **Cyfrif dim ond y gost toriad steil-IBM, nid y gost ymddiriedaeth**: mae toriad sy'n gostwng parodrwydd dinasyddion i ddefnyddio sianeli digidol yn erydu achos [arbedion sifft sianel](../channel-shift-savings/) am flynyddoedd wedyn, cost anaml y caiff ei chynnwys mewn amcangyfrifon cost toriad.

## Ffynonellau

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
