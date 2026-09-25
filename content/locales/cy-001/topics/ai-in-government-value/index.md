# Gwerth AI mewn Llywodraeth

Gwerth AI mewn llywodraeth yw'r gofyniad bod system AI a ddefnyddir mewn gwasanaeth cyhoeddus yn clirio'r un trothwy gwerth am arian a gwerth cyhoeddus ag unrhyw benderfyniad gwariant arall — nid trothwy is am ei bod yn newydd, ac nid un uwch am ei bod yn destun ofn. Dyma'r cwestiwn y mae'n rhaid i dîm cyflenwi allu ei ateb cyn i nodwedd AI gael ei lansio, nid ar ei hôl: a yw hyn yn cynhyrchu mwy o werth nag y mae'n ei gostio, unwaith y caiff sicrwydd, goruchwyliaeth a risg eu prisio'n onest?

## Pam mae hyn yn bwysig

Cyhoeddodd Swyddfa Ddigidol a Data Ganolog y DU (CDDO) ei Fframwaith AI Cynhyrchiol ar gyfer y Llywodraeth yn 2024, gan adeiladu ar ganllawiau interim cynharach o Fehefin 2023, a'i strwythuro o amgylch deg egwyddor yn cwmpasu beth yw AI cynhyrchiol, ei oblygiadau moesegol, diogelwch offer, rheolaethau sicrhau ansawdd, rheoli cylch bywyd llawn AI cynhyrchiol, nodi achosion defnydd gwirioneddol, cydweithredu traws-lywodraethol, tryloywder, sgiliau, a llywodraethu. Mae taerineb y fframwaith ar "reolaeth ddynol ystyrlon" a rheolaeth cylch bywyd llawn yn bodoli am fod gan achosion busnes prosiectau AI fodd methu penodol nad oes gan wariant TG arall: mae rhif cynhyrchedd blaenllaw prosiect peilot yn hawdd ei gynhyrchu a'i orbwysleisio, gan ei fod yn cael ei fesur cyn i'r baich dilysu, cywiro a goruchwylio y mae'r offeryn yn ei greu gael ei gyfrif. Ochr yn ochr â'r fframwaith, mae'r Safon Cofnodi Tryloywder Algorithmig (ATRS) yn ei gwneud yn ofynnol i gyrff cyhoeddus gyhoeddi cofnod safonol — pwrpas, data a ddefnyddiwyd, perfformiad, profi tegwch, trefniadau goruchwylio dynol — ar gyfer offer algorithmig sydd â dylanwad sylweddol ar benderfyniadau ynghylch unigolion, sy'n gwneud cost sicrwydd system AI yn fater o gofnod cyhoeddus, nid amcangyfrif mewnol y gall tîm ei osgoi'n ddistaw.

## Y fathemateg

Caiff mabwysiadu AI ei asesu fel ychwanegiad at arfarniad safonol [gwerth am arian](../value-for-money/), nid yn lle un, gyda'r termau penodol i AI wedi'u gwneud yn eglur yn hytrach na'u plygu i mewn i un rhif "enillion cynhyrchedd":

```
Gwerth net system AI =
    enillion cynhyrchedd (amser a arbedwyd × cost staff wedi'i lwytho)
  − cost trwydded/cyfrifiadura
  − cost dilysu a goruchwylio dynol (gwirio allbwn AI cyn iddo gael
    ei weithredu — nid yw hyn yn crebachu i sero hyd yn oed ar gyfer
    offer aeddfed)
  − cost dogfennu ATRS a monitro parhaus
  − cost wedi'i haddasu ar gyfer risg o niwed o wallau, tuedd, neu
    rithdybio, wedi'i phwysoli yn ôl pwy sy'n dwyn y niwed hwnnw
    (pwysoli dosbarthiadol)

Nid yw ffigwr cynhyrchedd peilot sy'n hepgor y term goruchwylio yn
gymharadwy â llinell sylfaen cost busnes-fel-arfer sydd eisoes yn
cynnwys adolygiad dynol cyfatebol — gweler ai-productivity-in-the-public-sector
am y ddisgyblaeth mesur cynhyrchedd fwy cyflawn y mae hyn yn benthyca ohoni.
```

## Enghraifft waith

**Awdurdod lleol yn defnyddio offeryn AI cynhyrchiol i lunio ymatebion cyntaf i ymholiadau treth cyngor rheolaidd**: 25,000 o ymholiadau/blwyddyn, wedi'u trin yn flaenorol yn gyfan gwbl gan weithwyr achos ar gyfartaledd o 14 munud/ymholiad, cost staff wedi'i lwytho £34/awr.

```
Cost llinell sylfaen (dim AI):
  25,000 × (14/60) × £34 = £198,333/blwyddyn

Hawliad blaenllaw peilot: mae AI yn llunio ymateb mewn 90 eiliad,
gweithiwr achos "yn dim ond adolygu ac anfon" — yr amser newydd a
hawlir yw 3 munud
  25,000 × (3/60) × £34 = £42,500/blwyddyn
  → arbediad a hawlir £155,833/blwyddyn (yn edrych yn drawsnewidiol)

Ffigwr wedi'i lwytho'n llawn, wedi'i fesur ar ôl 3 mis yn fyw yn
hytrach nag yn achosion prawf a ddewiswyd â llaw'r peilot:
  Amser adolygu a chywiro gwirioneddol fesul ymateb: 6 munud (mae
  drafftiau angen golygu gwirioneddol ar gyfer ymholiadau cymhleth
  neu emosiynol sensitif)
  25,000 × (6/60) × £34 = £85,000/blwyddyn
  Cost trwydded/cyfrifiadura: £38,000/blwyddyn
  Dogfennu ATRS a monitro chwarterol ansawdd/tuedd: £14,000/blwyddyn
  Cyfanswm cost = 85,000 + 38,000 + 14,000 = £137,000/blwyddyn

Arbediad gwirioneddol = 198,333 − 137,000 = £61,333/blwyddyn —
gwirioneddol ac yn werth ei gadw, ond ymhell islaw hanner hawliad
blaenllaw'r peilot, ac roedd angen mesuriad amser goruchwylio onest,
nid un gorau-posibl y peilot, i'w ganfod.
```

## Cysylltiad peirianneg feddalwedd

Dyma lle mae [ai-productivity-in-the-public-sector](../ai-productivity-in-the-public-sector/) a'r pwnc hwn yn cwrdd: mae gan dimau peirianneg sy'n adeiladu nodweddion AI i mewn i wasanaethau cyhoeddus berchnogaeth ar yr offeryniad sy'n gwneud y ffigwr "gwirioneddol" yn yr enghraifft waith yn bosibl — cofnodi amser adolygu gwirioneddol, pellter golygu rhwng drafft ac ymateb a anfonwyd, a chyfradd uwchgyfeirio, yn hytrach nag ymddiried yng nghyflwr demo'r peilot. Dylid asesu nodweddion AI yn erbyn pwynt 9 [Safon Gwasanaeth Digidol](../digital-service-standard/) (gwasanaeth diogel, preifatrwydd defnyddwyr) a'u croesgyfeirio â [gwerth seiberddiogelwch y sector cyhoeddus](../public-sector-cybersecurity-value/) lle mae'r offeryn yn cyffwrdd â data dinasyddion, ac mae angen cofnod ATRS ar unrhyw system AI sydd â dylanwad sylweddol ar benderfyniadau ynghylch unigolion cyn y gellir ei hystyried yn barod i'w hasesu, yn yr un modd ag y mae angen i wasanaeth basio asesiad [Safon Gwasanaeth Digidol](../digital-service-standard/) cyn mynd yn fyw.

## Peryglon

- **AI-olchi**: ail-labelu awtomeiddio seiliedig-ar-reolau presennol fel "AI" er mwyn cael gafael ar gyllid neu sylw a glustnodwyd ar gyfer mabwysiadu AI, heb y risgiau cywirdeb neu duedd sydd mewn gwirionedd yn cyfiawnhau craffu ychwanegol y fframwaith.
- **Mesur cynhyrchedd peilot, nid cynhyrchedd cynhyrchu**: mae peilotiaid yn rhedeg ar achosion prawf wedi'u curadu gydag adolygwyr ymgysylltiedig, sylwgar; mae cynhyrchu'n rhedeg ar y gymysgedd achosion lawn, flêr gydag adolygwyr sydd, dros amser, yn datblygu tuedd awtomeiddio ac yn tan-wirio allbynnau — mae'r ddau'n ystumio'r ffigwr cost goruchwylio onest.
- **Hepgor cofrestru ATRS am nad yw'r offeryn "yn wirioneddol yn wneud penderfyniadau awtomataidd"**: mae trothwy'r safon yn ddylanwad sylweddol ar benderfyniad ynghylch unigolyn, y mae'r rhan fwyaf o offer llunio neu drefnu blaenoriaeth AI sy'n wynebu dinasyddion yn ei fodloni hyd yn oed pan fydd person yn arwyddo i ffwrdd yn dechnegol.
- **Anwybyddu effaith ddosbarthiadol gwallau**: gall cyfradd gwall system AI, wedi'i chyfartaleddu ar draws pob defnyddiwr, guddio cyfradd gwall neu duedd llawer uwch ar gyfer grwpiau penodol; dylid cymhwyso [pwysoli dosbarthiadol](../distributional-weighting/) i'r term niwed wedi'i addasu ar gyfer risg, nid dim ond y ffigwr cywirdeb cyfanredol.

## Ffynonellau

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
