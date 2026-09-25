# Dyled Dechnegol fel Erydiad Gwerth Cyhoeddus

Dyled dechnegol yw trosiad Ward Cunningham o 1992 ar gyfer cost oblygedig yn y dyfodol o benderfyniadau codio hwylus yn y gorffennol: **prifswm** (y gwaith unioni sy'n ddyledus) a **llog** (y llusgiad parhaus y mae'n ei roi ar gyflenwi). Mewn ystad TG llywodraeth etifeddol, telir y llog hwnnw'n uniongyrchol o werth cyhoeddus — cyflenwi newid statudol yn arafach, cyfraddau methiant uwch ar wasanaethau sy'n wynebu dinasyddion, a chronfa sy'n crebachu o bobl a all gyffwrdd â'r system yn ddiogel o gwbl.

## Pam mae hyn yn bwysig

Mae systemau mainfframiau etifeddol a chyfnod COBOL ar draws adrannau llywodraeth y DU — CThEF a'r Adran Gwaith a Phensiynau (AGPh) ymhlith yr enwau a ddyfynnir amlaf — yn cario risg wedi'i dogfennu'n dda ac sy'n cynyddu, y mae'r Swyddfa Archwilio Genedlaethol wedi'i nodi'n ailadroddus, gan gynnwys yn ei hadroddiad *Digital Transformation in Government* (<https://www.nao.org.uk/>): llwyfannau sy'n heneiddio, yn ddrud i'w newid, yn gynyddol anodd eu diogelu, ac yn ddibynnol ar weithlu arbenigol sy'n ymddeol yn gyflymach nag y caiff ei ddisodli. Yn wahanol i ôl-groniad sector preifat, mae'r ddyled hon yn eistedd yn uniongyrchol rhwng dinasyddion a'u hawliau statudol — mae peiriant cyfrifo budd-daliadau na ellir ei newid yn ddiogel yn gyfyngiad cyflenwi polisi, nid dim ond anghyfleustra peirianneg. Mae ailgychwyn rhaglen TG Credyd Cynhwysol yn 2013, pan ganfu'r Swyddfa Archwilio Genedlaethol na fyddai'r adeilad gwreiddiol yn cyflenwi gwerth am arian a bod yn rhaid dileu cyfran sylweddol o'r ased meddalwedd, yn enghraifft ganonaidd o ddyled dechnegol na phrisiwyd yn dal i fyny â rhaglen gyhoeddus fyw a welir yn weinidogol.

## Y fathemateg

```
Prifswm SQALE = Σ dros dorriadau (amser unioni) × cyfradd gost datblygwr
Cymhareb dyled dechnegol (TDR) = cost unioni / cost ailddatblygu × 100
                    (graddau SonarQube: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Llog (y rhif sy'n cyfiawnhau ad-dalu):
  llog/blwyddyn = Δ cyflymder cyflenwi × gwerth fesul uned cyflymder
                + Δ cyfradd digwyddiadau sy'n wynebu dinasyddion × cost fesul digwyddiad
                + premiwm sgiliau arbenigol × pennau yr effeithir arnynt
Achos ad-dalu = GP(llog a osgowyd dros y gorwel) − cost unioni
               (wedi'i ddisgowntio ar gyfradd ddisgowntio gymdeithasol y Llyfr Gwyrdd, gweler
               social-discount-rate.md)
```

Mae'r prifswm yn nodi'r rhwymedigaeth; y llog yw'r hyn sy'n gwneud yr achos buddsoddi i bwyllgor cyfrifon cyhoeddus.

## Enghraifft waith

Peiriant prosesu hawliadau o 250,000 llinell wedi'i ysgrifennu mewn 4GL etifeddol. Gan ddefnyddio meincnod CAST Appmarq o oddeutu $3.61 o brifswm dyled dechnegol fesul llinell god (≈£2.85 wrth y gyfradd drosi arferol):

```
Prifswm ≈ 250,000 × £2.85 ≈ £712,500
TDR ≈ 16% (gradd C)
```

Llog wedi'i fesur: mae'r adran yn cadw tri chontractwr arbenigol ar bremiwm cyfradd ddyddiol o 40% dros gyfraddau peiriannydd uwch safonol am fod sgiliau mewnol wedi treulio i ffwrdd — £180,000/flwyddyn ychwanegol ar dîm o chwe pherson. Mae'r system hefyd yn achosi pedwar tor-allan prosesu mawr y flwyddyn, pob un yn atal penderfyniadau ar gyfer tua 5,000 o hawlwyr ac yn eu hailgyfeirio i'r ganolfan gyswllt am oddeutu £25/galwad:

```
Llog ≈ £180,000 (premiwm sgiliau)
     + 4 × 5,000 × £25 = £500,000 (cost cyswllt wedi'i ailgyfeirio)
     ≈ £680,000/flwyddyn
```

Mae unioni wedi'i dargedu ar y modiwlau sy'n perfformio waethaf yn costio £1,200,000 ac fe'i modelir i dorri'r llog o 70%:

```
Gostyngiad llog = 0.70 × 680,000 = £476,000/flwyddyn
Ad-daliad ≈ 1,200,000 / 476,000 ≈ 2.5 mlynedd
```

Mae'r targedu'n bwysig: nid yw unioni god y cyffyrddir ag ef yn anaml yn prynu dim, gan fod llog yn crynhoi lle mae amlder newid a dwysedd dyled ill dau ar eu huchaf.

## Cysylltiad peirianneg feddalwedd

Y fframio gwerth cyhoeddus sy'n uwchraddio achos dyled dechnegol y tu hwnt i "mae'r cod yn hen": mynegwch yr ystad etifeddol fel rhestr eiddo o ble mae capasiti cyflenwi coll wedi'i grynhoi, a'i gysylltu'n benodol â [chyfanswm cost perchnogaeth](../total-cost-of-ownership-in-government-it/), gan fod llog yn gost weithredu sy'n perthyn i linell TCO p'un a yw cyllid erioed wedi gofyn amdani ai peidio. Mae systemau llwythog o ddyled hefyd yn cario amlygiad [seiberddiogelwch](../public-sector-cybersecurity-value/) anghymesur, gan fod cyflymder clytio a dwysedd dyled yn gydberthynol — mae system etifeddol na ellir ei chlytio yn ddyled dechnegol y telir ei llog mewn risg digwyddiad yn hytrach na phunnoedd. Ac mae pob cyfaddawd unioni-yn-erbyn-nodwedd yn benderfyniad [cost oedi](../cost-of-delay-in-public-programmes/) ynddo'i hun: mae ad-dalu dyled yn oedi'r newid statudol nesaf, sydd â'i CoD ei hun y mae'n rhaid ei bwyso yn erbyn y llog a arbedwyd.

## Peryglon

- **Adrodd prifswm yn unig**: nid yw amcangyfrif unioni mawr, brawychus heb ffigur llog yn cyfiawnhau dim i gymeradwywr gwariant.
- **Cymryd ffigurau dyled a gynhyrchwyd gan offer yn llythrennol**: mae sganwyr ar arddull SQALE yn cyfrif torriadau rheol; maent yn colli'r math drud o ddyled — penderfyniadau pensaernïol a rheolau busnes etifeddol heb eu dogfennu — wrth nodi manion.
- **"Mae'r ailysgrifennu'n osgoi'r cyfan"**: rhaid i raglenni disodli glirio'r un ddisgyblaeth ag unrhyw achos busnes arall — cost wrthffeithiol, tebygolrwydd llwyddiant, a disgowntio — nid esemptiad ohoni, fel y dangosodd ailgychwyn Credyd Cynhwysol yn 2013.
- **Utopiaeth dim-dyled**: nid sero yw'r lefel ddyled optimaidd; mae dyled yn ysgogiad a brynodd gyflenwi cynharach. Y cwestiwn byw bob amser yw'r gyfradd log, nid a oes dyled yn bodoli o gwbl.

## Ffynonellau

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
