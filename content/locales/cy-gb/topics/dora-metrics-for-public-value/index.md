# Metrigau DORA ar gyfer Gwerth Cyhoeddus

Mae metrigau DORA (DevOps Research and Assessment) — amlder defnyddio, amser arwain ar gyfer newidiadau, cyfradd methiant newid, ac amser adfer gwasanaeth, ynghyd â dibynadwyedd fel pumed un — yn feincnodau perfformiad cyflenwi mwyaf dilysedig y diwydiant meddalwedd. Wedi'u trosi i dermau atebolrwydd y sector cyhoeddus, mae pob un yn ddirprwy uniongyrchol ar gyfer pa mor gyflym, a pha mor ddiogel, y mae gwerth cyhoeddus yn cyrraedd dinesydd.

## Pam mae hyn yn bwysig

Mae degawd o ymchwil DORA, a gyhoeddir yn flynyddol fel yr *Accelerate State of DevOps Report* (methodoleg Forsgren, Humble a Kim, a redir bellach gan Google Cloud), yn clystyru timau'n berfformwyr elitaidd, uchel, canolig ac isel. Mae timau elitaidd yn defnyddio ar alw, yn cymryd llai na diwrnod o ymrwymo i gynhyrchu, yn methu tua 5% o newidiadau, ac yn adfer mewn llai nag awr; mae perfformwyr isel yn defnyddio'n fisol neu'n llai aml, yn cymryd misoedd, yn methu tua 40% o newidiadau, ac yn adfer mewn wythnosau. Yn y llywodraeth, nid metrigau balchder peirianneg mo'r rhain: mae Safon Gwasanaeth y Government Digital Service yn ei gwneud yn ofynnol i dimau "ailadrodd a gwella'n aml" a gallu ymateb yn gyflym i angen defnyddwyr, ac mae adrannau na allant ddefnyddio'n ddiogel ac yn aml yn strwythurol analluog i fodloni'r safon honno, ni waeth beth mae eu hymchwil defnyddwyr yn ei ddweud. Canfu gwaith effeithlonrwydd digidol y Swyddfa Gabinet ei hun fod gwthio dinesydd o drafodiad digidol aflwyddiannus neu araf i sianel ffôn neu bapur yn ddrud — amcangyfrifodd Adroddiad Effeithlonrwydd Digidol 2012 GDS fod rhai trafodion digidol yn costio cyn lleied â 20c o gymharu â chysylltiadau ffôn neu wyneb yn wyneb yn costio hyd at £8.62 — felly nid yn unig y mae methiant newid mewn gwasanaeth sy'n wynebu'r cyhoedd yn costio amser peirianneg, mae'n gwthio punnoedd real ar gyllideb y ganolfan gyswllt (gweler [arbedion trosglwyddo sianel](../channel-shift-savings/)).

## Y fathemateg

```
Amlder defnyddio       = defnyddiadau cynhyrchu / amser
Amser arwain newidiadau = t(defnyddio) − t(ymrwymo), canolrif
Cyfradd methiant newid  = newidiadau aflwyddiannus / cyfanswm newidiadau × 100
Amser adfer (MTTR)      = t(adferwyd) − t(methiant), canolrif
Dibynadwyedd            = cyrhaeddiad SLO (argaeledd, oedi, cywirdeb)
```

Cyfieithiadau gwerth cyhoeddus:

```
Amser arwain     → wythnosau yn y bibell × CoD, gweler cost-of-delay-in-public-programmes
Cyfradd fethiant → cyfradd digwyddiadau sy'n wynebu dinasyddion: CFR × cost fesul galwad
                    a ailgyfeiriwyd i'r ganolfan gyswllt (neu fesul trafodiad statudol aflwyddiannus)
Amser adfer      → niwed torri gwasanaeth: MTTR × (hawliadau/ceisiadau wedi'u
                    rhwystro yr awr) × cost neu golled les ganlynol fesul uned
Dibynadwyedd     → disgownt budd: mae gwasanaeth ar 99% o argaeledd yn cyflenwi
                    ≈ 0.99 o'i fudd wedi'i fodelu — cyfatebiaeth cyflenwi i
                    ddiffyg cymryd-i-fyny neu gydymffurfio
```

## Enghraifft waith

Tîm porth hawliadau budd-daliadau awdurdod lleol, cyn ac ar ôl buddsoddiad peirianneg cyflenwi:

```
                    Cyn         Ar ôl
Defnyddio           misol       wythnosol
Amser arwain        8 wythnos   5 diwrnod
CFR                 30%         10%
MTTR                3 diwrnod   4 awr
```

Mae'r tîm yn cyflwyno oddeutu 25 o welliannau y flwyddyn, gwerth cyfartalog £8,000/wythnos ([cost oedi](../cost-of-delay-in-public-programmes/)). Mae torri'r amser arwain oddeutu 7.3 wythnos yn tynnu llif budd pob gwelliant ymlaen: 25 × 7.3 × 8,000 ≈ **£1,460,000/flwyddyn** o werth a gyflwynwyd yn gynt. O ran cyfradd fethiant: 25 × (0.30 − 0.10) = 5 yn llai o newidiadau aflwyddiannus y flwyddyn; mae pob newid aflwyddiannus ar borth cyhoeddus fel arfer yn ailgyfeirio amcangyfrif o 2,000 o ddinasyddion i'r sianel ffôn ar £8.62 yn hytrach na 20c, cost net o oddeutu £8.42 × 2,000 ≈ £16,840 fesul digwyddiad, felly mae osgoi 5 digwyddiad yn arbed ≈ **£84,200/flwyddyn**. Prisir y buddsoddiad peirianneg cyflenwi yn yr un arian ag unrhyw achos gwerth cyhoeddus arall.

## Enghraifft waith (parhad): dibynadwyedd

Os yw'r porth yn rhedeg ar 97% o argaeledd yn hytrach na tharged o 99.5%, a bod pob pwynt canran o amser segur wedi'i fodelu fel 2% o hawliadau a gollir i ymadael cyn cwblhau, mae'r gwasanaeth yn cyflenwi tua 0.975 o'i fudd wedi'i fodelu o £2M/flwyddyn — disgownt budd o £50,000/flwyddyn nad yw dangosfwrdd amser gweithredu pur byth yn ei ddatgelu.

## Cysylltiad peirianneg feddalwedd

Mae metrigau DORA yn fetrigau gweithredol gwasanaeth cyhoeddus mewn dillad gwahanol: mae amser arwain yn cyfateb i [safonau gwasanaeth a metrigau trafodiad](../service-standards-and-transaction-metrics/); mae cyfradd methiant newid yn cyfateb i gyfraddau ailwaith a chwyno; mae MTTR yn cyfateb i ba mor hir y mae gwasanaeth statudol yn anweladwy i hawlwyr. Mae technegau gwella'n trosglwyddo i'r ddau gyfeiriad gan fod y ddau'n systemau ciwio o dan gyfyngiadau atebolrwydd — gweler [metrigau llif mewn cyflenwi'r llywodraeth](../flow-metrics-in-government-delivery/) am y fathemateg giwio sylfaenol. Nodwch hefyd ganfyddiad DORA yn 2025 fod mabwysiadu AI yn cydberthyn â thrwygynnyrch uwch ond sefydlogrwydd *gwaeth* — ymyriad sydd ag effeithiolrwydd a sgil-effeithiau fel ei gilydd, sef yn union y dadansoddiad budd-net y mae pwnc [cynhyrchedd AI](../ai-productivity-in-the-public-sector/) y bennod hon yn ei weithio drwyddo.

## Peryglon

- **Gamio metrigau**: chwyddo cyfrifon defnyddio â rhyddhadau di-weithred, neu eithrio trwsiadau brys o'r cyfrif methiant newid. Diffiniwch ddigwyddiadau mor fanwl gywir ag y mae safon gwasanaeth statudol yn diffinio "trafodiad llwyddiannus".
- **Tablau cynghrair rhwng adrannau**: mae clystyrau DORA yn cymharu arferion cyflenwi, nid gwasanaethau â phroffiliau risg gwahanol; gall system talu treth a raddiwyd yn "uchel" fod yn safle cywir lle byddai "elitaidd" yn ddifeddwl o ystyried gofynion sicrwydd.
- **Optimeiddio un metrig yn unig**: mae cyflymder heb gyfradd methiant newid yn gyfaddawd trwygynnyrch-ansefydlogrwydd clasurol — adroddwch y pedwar gyda'i gilydd, nid fel un sgôr sengl.

## Ffynonellau

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
