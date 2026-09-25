# Safon Gwasanaeth Digidol

Mae Safon Gwasanaeth GOV.UK yn glwyd y mae'n rhaid i bob gwasanaeth digidol gan lywodraeth ganolog fynd drwyddi cyn y gall fynd yn fyw: 14 pwynt cyhoeddedig, a asesir gan banel annibynnol ar ddiwedd pob cyfnod cyflenwi. Dyma'r mecanwaith sy'n troi "adeiladu gwasanaethau cyhoeddus da" o fod yn slogan i fod yn benderfyniad pasio/methu sydd â thrywydd papur clir y tu ôl iddo — ac mae'n ddisgynnydd uniongyrchol o fandad "digidol yn ddiofyn" Strategaeth Ddigidol y Llywodraeth (2012).

## Pam mae hyn yn bwysig

Cyn bodolaeth y Safon Gwasanaeth, prin oedd methiannau TG y llywodraeth yn weladwy tan y lansiad, a phrin oedd modd eu priodoli i unrhyw benderfyniad penodol. Ymrwymodd Strategaeth Ddigidol y Llywodraeth 2012 adrannau i ailgynllunio'r 25 gwasanaeth trafodiadol mwyaf poblogaidd sy'n wynebu'r cyhoedd fel rhai "digidol yn ddiofyn", gan ategu'r ymrwymiad hwnnw â mecanwaith cydymffurfio: ni allai gwasanaethau fynd yn fyw ar GOV.UK heb basio asesiad gwasanaeth yn erbyn yr hyn a oedd, ar y pryd, yn safon 26 pwynt (a gyfunwyd yn 18 pwynt yn 2019, a bellach yn safon 14 pwynt sydd mewn grym heddiw, yn cwmpasu tri grŵp — deall anghenion defnyddwyr, darparu gwasanaeth da, a defnyddio'r dechnoleg iawn). Mae asesiad gwasanaeth yn ddigwyddiad gwirioneddol: mae panel o aseswyr GDS neu adrannol yn adolygu tystiolaeth, yn holi'r tîm, ac yn cyhoeddi dyfarniad o basio, methu neu "heb ei fodloni" yn erbyn pob pwynt, wedi'i gyhoeddi ar dudalen asesu'r gwasanaeth. Mae methu asesiad yn rhwystro gwasanaeth rhag symud o beta preifat i beta cyhoeddus, neu o beta i fyw — mae'n glwyd wirioneddol, nid adolygiad yn unig.

## Y fathemateg

Mae'r Safon Gwasanaeth yn fframwaith, nid yn fformiwla, ond mae'n gweithredu fel strwythur penderfynu wedi'i gyfnodi'n gamau:

```
Discovery  → Asesiad Alpha  → Asesiad Beta  → Asesiad Byw
             (ddim yn         (gorfodol cyn    (gorfodol cyn
              orfodol i bob    lansio beta      tynnu'r tag
              gwasanaeth,      cyhoeddus)       "beta" a chau'r
              ond argymhellir)                  hen sianel)

Pob asesiad: tystiolaeth + cyfweliad tîm → dyfarniad panel fesul pwynt
  Bodlonwyd / Bodlonwyd yn rhannol / Ni fodlonwyd
Canlyniad cyffredinol: Pasio / Pasio ag amodau / Methu (angen ailasesu)

Cost methiant ≈ cost y cylch sbrint nesaf i unioni'r sefyllfa
              + oedi i'r [arbedion sifft sianel](../channel-shift-savings/)
                yr oedd y gwasanaeth wedi'i ariannu i'w cyflawni
```

Pwynt 10 ("diffinio sut olwg sydd ar lwyddiant, a chyhoeddi data perfformiad") sy'n bwydo i mewn i [cost fesul trafodiad](../cost-per-transaction/) ac [service-standards-and-transaction-metrics](../service-standards-and-transaction-metrics/) — mae'r Safon yn gorchymyn y mesur, nid dim ond y gwasanaeth.

## Enghraifft waith

**Gwasanaeth ceisiadau tai awdurdod lleol**: mae tîm cyngor yn cyrraedd ei asesiad beta gyda gwasanaeth sy'n bodloni 11 o'r 14 pwynt ond yn methu pwynt 5 ("sicrhau y gall pawb ddefnyddio'r gwasanaeth") am nad oes llwybr digidol â chymorth ar gael i ymgeiswyr heb fynediad i'r rhyngrwyd, ac yn methu pwynt 9 am fod data personol yn cael ei gofnodi mewn testun plaen mewn olrheiniadau gwallau'r cais.

```
Cost uniongyrchol y methiant:
  Slot ailasesu: 6-8 wythnos o aros am y panel nesaf sydd ar gael
  Sbrint unioni: 2 ddatblygwr × 3 wythnos × £550/dydd ≈ £34,650
  Cynllunio sianel ddigidol â chymorth: 1 ymchwilydd × 2 wythnos ≈ £5,000

Cost yr oedi: rhagwelwyd y byddai'r gwasanaeth yn symud 40% o'r
18,000/blwyddyn o ymholiadau tai o alwadau ffôn £8.50 i drafodion
digidol £0.20
  = 7,200 × (£8.50 − £0.20) = £59,760/blwyddyn a gollwyd, wedi'i
    bro-ratio dros yr oedi o ~2 fis ≈ £9,960

Cost gyfan yr asesiad a fethwyd ≈ £49,610
```

Nid manwl-gywirdeb y symiau yw'r pwynt — y pwynt yw bod gan asesiad a fethwyd bris gwirioneddol y gellir ei gyfrifo, a dyna'n union pam mae gan y glwyd ddannedd.

## Cysylltiad peirianneg feddalwedd

I beirianwyr, mae'r Safon yn darllen fel rhestr wirio bensaernïol a chyflenwi lawn cymaint ag y mae'n ddogfen bolisi: mae pwynt 11 ("dewis yr offer a'r dechnoleg iawn") a phwynt 12 ("gwneud cod ffynhonnell newydd yn agored") yn benderfyniadau peirianyddol uniongyrchol, ac mae pwynt 14 ("gweithredu gwasanaeth dibynadwy") yn gofyn am yr un SLOs a phrosesau digwyddiad ag y mae angen ar unrhyw system gynhyrchu. Dyma'r fframwaith ymbarél ar gyfer y bennod hon — [cost fesul trafodiad](../cost-per-transaction/) a [arbedion sifft sianel](../channel-shift-savings/) yw'r hyn y mae'r Safon yn ceisio'i ddiogelu'n ariannol, [cynhwysiant digidol](../digital-inclusion/) yw'r hyn y mae pwynt 5 yn bodoli i'w warantu, ac mae cydrannau [Llywodraeth fel Platfform](../government-as-a-platform/) (GOV.UK Notify, Pay, One Login) yn bodloni pwynt 13 ("defnyddio a chyfrannu at safonau agored, cydrannau cyffredin a phatrymau") yn ddiofyn i raddau helaeth. Gweler hefyd [build-vs-buy-in-government](../build-vs-buy-in-government/) am sut mae'r pwynt "yr offer iawn" yn chwarae allan mewn penderfyniadau caffael.

## Peryglon

- **Trin asesiad fel blwch ticio cydymffurfio diwrnod-lansio**: mae timau sy'n darllen y 14 pwynt am y tro cyntaf wythnos cyn eu hasesiad beta yn methu'n rhagweladwy; bwriad y Safon yw llywio penderfyniadau o'r cam Discovery ymlaen, nid eu harchwilio'n ôl-weithredol.
- **Asesu'r prototeip, nid y gwasanaeth**: gall demo slic basio adolygiad y byddai fersiwn fyw, gynhwysol o ran digidol â chymorth, a reolir o ran digwyddiadau, o'r un gwasanaeth yn ei fethu — mae aseswyr i fod i chwilio am y bwlch hwn, ond mae gwasanaethau bach hunan-ardystiedig yn aml yn ei osgoi.
- **Dim ailasesiad cyn graddfa fawr**: nid yw gwasanaeth a asesir ar gyfradd cyflwyno o 5% yn aros yn gydymffurfiol yn awtomatig ar 100% — mae llwyth, galw methiant, a defnyddwyr ar yr ymylon i gyd yn newid.
- **Drysu'r Safon Gwasanaeth â system ddylunio**: mae cydrannau System Ddylunio GOV.UK yn bodloni rhai pwyntiau (cysondeb, hygyrchedd) ond mae'r Safon hefyd yn cwmpasu strwythur tîm, ymarfer ystwyth, a moeseg data — gall gwasanaeth wedi'i steilio'n dda fethu o hyd ar bwyntiau 2, 6 neu 9.

## Ffynonellau

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
