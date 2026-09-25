# Metrigau Llif mewn Cyflenwi'r Llywodraeth

Mae metrigau llif — Deddf Little, terfynau gwaith ar y gweill (WIP), ac effeithlonrwydd llif — yn disgrifio pa mor gyflym y mae gwaith yn symud drwy system â chapasiti cyfyngedig. Mae bwrdd sbrint yn un system o'r fath; mae ciw hawliadau budd-dal, cofrestr ceisiadau cynllunio, neu ôl-groniad achosion fisa yn union yr un fathemateg mewn gwisg wahanol.

## Pam mae hyn yn bwysig

Systemau ciwio yw baich achosion y llywodraeth, ac mae systemau ciwio'n ufuddhau i ddeddfau ciwio p'un a yw rhywun yn eu mesur ai peidio. Mae cyfnodau penderfynu statudol yn gwneud hyn yn eglur: o dan y drefn Cynllunio Gwlad a Thref, mae gan y rhan fwyaf o geisiadau cynllunio bach darged penderfynu statudol o 8 wythnos, a cheisiadau mawr 13 wythnos — ymrwymiad amser cylchred wedi'i bobi'n uniongyrchol i'r gyfraith. Mae ôl-groniad achosion lloches y Swyddfa Gartref, a graffwyd yn ailadroddus gan y Swyddfa Archwilio Genedlaethol a'r Pwyllgor Dethol Materion Cartref, yn achos wedi'i ddogfennu'n dda o system gyhoeddus lle tyfodd gwaith ar y gweill yn gyflymach na thrwygynnyrch dros gyfnod parhaus, gan yrru amseroedd cylchred ymhell y tu hwnt i unrhyw ddisgwyliad statudol neu wasanaeth. Mae metrigau llif yn rhoi geirfa feintiol gyffredin i beirianwyr a rheolwyr gwaith achosion fel ei gilydd ar gyfer yr union ddull methu hwn, yn hytrach na'i adael yn "broblem ôl-groniad" ansoddol.

## Y fathemateg

```
Deddf Little:  WIP = Trwygynnyrch × Amser Cylchred
           →   Amser Cylchred = WIP / Trwygynnyrch

Effeithlonrwydd llif = amser gweithredol (cyffwrdd) / cyfanswm amser cylchred   (Vacanti)

Effaith terfyn WIP: ar gyfer trwygynnyrch sefydlog, mae haneru WIP yn fras yn
haneru'r amser cylchred cyfartalog (Deddf Little wedi'i had-drefnu) — y lifer
sydd ar gael heb ychwanegu pennau.
```

Gweler [metrigau DORA ar gyfer gwerth cyhoeddus](../dora-metrics-for-public-value/) am y fathemateg gyfatebol wedi'i chymhwyso i biblinellau defnyddio meddalwedd yn hytrach na gwaith achosion.

## Enghraifft waith

**Adran gynllunio awdurdod lleol**: 400 o geisiadau ar agor ar unrhyw adeg (WIP), mae'r tîm yn datrys 50 cais/wythnos (trwygynnyrch).

```
Amser cylchred = WIP / Trwygynnyrch = 400 / 50 = 8 wythnos
```

Mae hynny'n glanio'n union ar y targed statudol o 8 wythnos ar gyfer ceisiadau bach — heb unrhyw lac, sy'n golygu bod unrhyw amrywioldeb yn y galw sy'n dod i mewn neu amser ymateb ymgyngoreion yn gwthio penderfyniadau y tu hwnt i'r terfyn amser cyfreithiol.

**Effeithlonrwydd llif**: o'r 8 wythnos hynny (56 diwrnod calendr), mae gan gais fel arfer tua 6 awr o amser prosesu gwaith achos gwirioneddol.

```
Effeithlonrwydd llif = 6 awr / (56 diwrnod × 8 awr waith/diwrnod)
                      = 6 / 448 ≈ 1.3%
```

Mae meincnod Vacanti ar gyfer timau meddalwedd yn gosod effeithlonrwydd llif nodweddiadol ar 15–20%; mae gwaith achosion y llywodraeth, gyda sawl trosglwyddiad ymgyngorai statudol a ffenestri ymgynghori cyhoeddus, yn aml yn rhedeg gradd maint yn is. Yn y 98.7% o amser "aros" y mae'r wyth wythnos yn mynd mewn gwirionedd — nid yng nghapasiti'r gweithiwr achos.

**Ymyriad terfyn WIP**: mae capio ceisiadau agored fesul gweithiwr achos ar 15 yn hytrach na 25 diderfyn (gan gadw trwygynnyrch yn gyson) yn symud WIP o 400 i tua 240 ar draws tîm o 16 o bobl:

```
Amser cylchred newydd = 240 / 50 = 4.8 wythnos
```

Bron â haneru'r amser cylchred o newid polisi, nid cynnydd staffio — yr un lifer y mae timau cyflenwi ar arddull DORA yn ei dynnu wrth gapio WIP sbrint.

## Cysylltiad peirianneg feddalwedd

Metrigau llif yw'r iaith gyffredin rhwng bwrdd Kanban tîm cyflenwi a llawr y gwaith achosion y mae'n adeiladu meddalwedd ar ei gyfer: llywodraethir ciw gweithiwr achos a chiw cais-tynnu (pull request) fel ei gilydd gan Ddeddf Little, ac mae'r ddau'n chwythu eu targedau amser cylchred yn yr un modd — gormod o WIP o gymharu â thrwygynnyrch. Mae hyn yn berthnasol yn uniongyrchol i [gost oedi mewn rhaglenni cyhoeddus](../cost-of-delay-in-public-programmes/): amser cylchred × CoD yw'r punnoedd sy'n eistedd yn y ciw ar unrhyw adeg, ac mae'n berthnasol i [safonau gwasanaeth a metrigau trafodiad](../service-standards-and-transaction-metrics/), lle mae targed trosiant cyhoeddedig yn ymrwymiad amser cylchred na all dim ond metrigau llif ei ddiagnosio pan gaiff ei fethu. Dylai meddalwedd system gwaith achosion ddatgelu WIP ac amser cylchred fel metrigau gweithredol dosbarth cyntaf, nid eu claddu y tu mewn i system rheoli achosion nad oes neb yn ymholi iddi.

## Peryglon

- **Ychwanegu terfynau WIP heb drwsio'r gwir dagfa**: os mai'r cyfyngiad yw amser ymateb ymgyngorai statudol allanol, mae capio WIP y gweithiwr achos ond yn symud y ciw i fyny'r afon yn hytrach na'i fyrhau.
- **Trin effeithlonrwydd llif fel targed i'w gamio**: prin fod rhuthro'r 1.3% o amser gweithredol yn symud amser cylchred; mae'r lifer bron bob amser yn y cyflyrau aros, sydd fel arfer yn golygu ailgynllunio proses, nid cyflymder gweithiwr achos.
- **Anwybyddu amrywioldeb**: mae Deddf Little yn disgrifio cyfartaleddau; mae angen capasiti byffer ar faich achosion ag amrywiant galw uchel, nid dim ond terfyn WIP tynnach, neu bydd terfynau amser statudol yn dal i gael eu methu ar y gynffon anwadal hyd yn oed wrth i'r cyfartaledd wella.
- **Mesur WIP yn anghyson**: mae achos sy'n "agored" yn y system gofnod ond mewn gwirionedd wedi'i atal yn aros am drydydd parti yn dal i fod yn WIP; mae ei eithrio'n gwneud i'r niferoedd edrych yn well heb newid y realiti i ddinasyddion.

## Ffynonellau

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
