# Gwerth Data Agored

Gwerth data agored yw'r broblem o amcangyfrif beth yw gwerth data'r llywodraeth a data cyhoeddus pan nad oes ganddo bris: nid yw'n cael ei werthu, felly nid oes llinell refeniw, ac eto mae ei ryddhau (cofnodion tywydd, amserlenni trafnidiaeth, ffiniau cod post, cofrestri cwmnïau) yn amlwg yn cynhyrchu gweithgarwch economaidd a chymdeithasol i lawr yr afon. Mae ei brisio'n dda yn bwysig oherwydd bod "mae'n rhad ac am ddim i'w ryddhau" a "does ganddo ddim gwerth" ill dau'n anghywir, ac mae angen dadl well nag un o'r ddau ar beiriannydd meddalwedd sy'n penderfynu a ddylid agor API neu set ddata.

## Pam mae hyn yn bwysig

Daw'r amcangyfrif o'r brig i lawr a ddyfynnir amlaf o adroddiad McKinsey Global Institute 2013, "Open data: Unlocking innovation and performance with liquid information", a osododd werth blynyddol posibl data agored ar draws saith maes — addysg, trafnidiaeth, cynnyrch defnyddwyr, trydan, olew a nwy, gofal iechyd, a chyllid defnyddwyr — rhwng $3 triliwn a $5 triliwn y flwyddyn yn fyd-eang, drwy fecanweithiau gan gynnwys mwy o dryloywder, paru cyflenwad â galw'n fwy effeithlon, a galluogi cynhyrchion a gwasanaethau newydd wedi'u hadeiladu ar y data. Amcangyfrif senario yw'r ffigwr hwnnw, nid canlyniad a fesurwyd, ac fe'i camddyfynnir yn rheolaidd fel pe bai'n refeniw y gallai'r llywodraeth ei gasglu'n uniongyrchol, tra bo'r gwerth yn cronni'n bennaf i drydydd partïon — busnesau, ymchwilwyr, dinasyddion — sy'n defnyddio'r data, sy'n union bwynt ei agor yn hytrach na'i werthu. Mae Open Data Institute y DU, a gyd-sefydlwyd gan Syr Tim Berners-Lee a Syr Nigel Shadbolt yn 2012, wedi adeiladu corff o astudiaethau achos mwy manwl, o'r gwaelod i fyny, ers hynny — sector wrth sector, set ddata wrth set ddata — sydd o lawer mwy o ddefnydd i achos busnes gwirioneddol na ffigwr blaenllaw McKinsey, gan eu bod yn dangos mecanwaith creu gwerth, nid dim ond ei faint cyfansawdd.

## Y fathemateg

Nid oes gan ddata agored bris marchnad, felly mae dulliau prisio'n cymryd ei le; mae tri dull yn ailymddangos, ac nid oes yr un ohonynt yn ddigonol ar ei ben ei hun:

```
1. Dull cost a osgowyd / cost amnewid:
   gwerth ≈ yr hyn y byddai defnyddwyr wedi'i dalu i gynhyrchu neu
   drwyddedu'r data cyfatebol eu hunain — terfyn isaf, yn anwybyddu
   gwerth a grëwyd gan ddefnyddiau na ragwelodd y cynhyrchydd
   gwreiddiol erioed

2. Dull cyfatebiaeth marchnad / gweithgarwch i lawr yr afon:
   gwerth ≈ refeniw neu arbedion a gynhyrchwyd gan fusnesau/gwasanaethau
   wedi'u hadeiladu ar y data (e.e. apiau llywio wedi'u hadeiladu ar
   ddata mapio a thraffig agored) — yn dal gweithgarwch economaidd
   gwirioneddol ond yn anodd ei briodoli'n lân i ryddhau'r data ei
   hun (gweler additionality-and-deadweight)

3. Dull dibynnol/dewis datganedig:
   gwerth ≈ yr hyn y mae defnyddwyr yn dweud y bydden nhw'n ei dalu,
   neu'r amser maen nhw'n dweud mae'n ei arbed iddyn nhw — gweler
   stated-preference-valuation am y dull cyffredinol a'i ragfarnau

Nid yw'r un o'r rhain yn cynhyrchu ffigwr mor lân â phris marchnad; mae
achosion busnes data agored credadwy yn triongli ar draws dau neu fwy
o'r rhain, ac yn glir ynghylch pa fecanwaith sy'n gwneud y gwaith.
```

## Enghraifft waith

**Rhyddhau data mapio/cyfeiriadau cenedlaethol enghreifftiol** (methodoleg ar ôl astudiaethau achos steil-ODI, ffigurau'n enghreifftiol o'r raddfa y mae astudiaethau o'r fath fel arfer yn ei chanfod):

```
Amcangyfrif cost a osgowyd:
  Busnesau a fyddai fel arall yn trwyddedu data paru cyfeiriadau
  cyfatebol yn fasnachol, ar gost trwydded gyfartalog amcangyfrifedig
  o £4,000/flwyddyn, ar draws amcangyfrif o 15,000 o BBaChau sydd bellach
  yn defnyddio'r set ddata agored am ddim
  = 15,000 × £4,000 = £60,000,000/blwyddyn mewn cost drwyddedu a osgowyd yn unig

Amcangyfrif gweithgarwch i lawr yr afon (mwy dyfaliadol, angen gwrthffeithiol):
  Cynhyrchion llwybro dosbarthu a logisteg newydd wedi'u hadeiladu ar
  y data agored na fyddent yn bodoli, neu a fyddai'n sylweddol
  waeth, hebddo — mae angen cymhariaeth yn erbyn y gwrthffeithiol o'r
  data'n aros ar gau neu wedi'i drwyddedu'n fasnachol
  (counterfactual-analysis), gan y byddai peth o'r gweithgarwch
  hwnnw'n digwydd beth bynnag ar ddata a dalwyd amdano am bris uwch,
  sy'n bwysau marw yn yr ystyr "gwerth a grëwyd gan ei agor"

Mae achos busnes amddiffynadwy yn adrodd y ffigwr cost a osgowyd fel y
terfyn isaf cadarn, ac yn trin y ffigwr gweithgarwch i lawr yr afon
fel senario terfyn uchaf, nid ffaith.
```

## Cysylltiad peirianneg feddalwedd

I beirianwyr, mae'r cwestiwn gwerth data agored ymarferol fel arfer yn gulach na'r ffigurau blaenllaw cenedlaethol: a yw agor yr API neu'r set ddata benodol hon (yn hytrach na'i chadw y tu ôl i gytundeb partner) yn cynyddu ailddefnydd ddigon i gyfiawnhau cost barhaus ei dogfennu, ei fersiynu a'i chynnal fel rhyngwyneb cyhoeddus? Mae'r gost cynnal a chadw honno'n wirioneddol ac yn gymar i economeg adeiladu-unwaith-ailddefnyddio'n-aml [Llywodraeth fel Platfform](../government-as-a-platform/) — mae'r ddau bwnc yn gefndryd agos, un ynghylch cod a seilwaith a rennir, y llall ynghylch data a rennir. Dylid gwirio unrhyw hawliad gwerth data agored yn erbyn [additionality-and-deadweight](../additionality-and-deadweight/) cyn iddo fynd i mewn i achos busnes: nid yw gweithgarwch a fyddai wedi digwydd beth bynnag, ar ddata wedi'i drwyddedu'n fasnachol, yn werth a grëwyd gan yr *agor* ei hun.

## Peryglon

- **Dyfynnu ffigwr $3–5 triliwn McKinsey fel un penodol i'r DU neu fel cyfran y set ddata hon**: amcangyfrif senario byd-eang, saith sector o 2013 ydyw — mae ei ddefnyddio fel lluosydd manwl ar gyfer un set ddata genedlaethol yn camliwio'r hyn y mae'r rhif yn ei olygu.
- **Dim gwrthffeithiol**: hawlio clod am yr holl weithgarwch economaidd i lawr yr afon a adeiladwyd ar ddata agored, heb ofyn faint ohono a fyddai wedi digwydd beth bynnag ar ddata a dalwyd amdano neu a drwyddedwyd am bris uwch (gweler [additionality-and-deadweight](../additionality-and-deadweight/) a [counterfactual-analysis](../counterfactual-analysis/)).
- **Drysu cost cynhyrchu â gwerth a grëwyd**: nid yw set ddata a oedd yn ddrud i'w chasglu'n awtomatig o werth i'w rhyddhau, ac nid yw un rad yn awtomatig o werth isel — mae gwerth yn dilyn defnydd i lawr yr afon, nid cost i fyny'r afon.
- **Anwybyddu cost cynnal a chadw barhaus "agored"**: nid yr un ymrwymiad yw cyhoeddi detholiad CSV untro â rhedeg API agored wedi'i dogfennu, ei fersiynu a'i gefnogi — mae tanariannu'r ail ar ôl cyhoeddiad y lansiad yn fethiant cyffredin.

## Ffynonellau

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
