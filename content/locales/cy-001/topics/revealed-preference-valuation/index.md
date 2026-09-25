# Prisio Dewisiadau a Ddatgelwyd

Mae dulliau dewisiadau a ddatgelwyd yn didynnu gwerth nwydd an-farchnad o ymddygiad arsylwadwy mewn
marchnad gysylltiedig, yn hytrach na gofyn i bobl yn uniongyrchol. Prisio hedonig a'r dull cost teithio
yw'r ddwy dechneg weithlwyth: mae'r ddwy'n dechrau o drafodyn gwirioneddol ac yn didynnu pris ymhlyg
ar gyfer y peth na chafodd erioed ei werthu'n uniongyrchol.

## Pam mae hyn yn bwysig

Lle mae dulliau [dewisiadau a ddatganwyd](../stated-preference-valuation/) yn gofyn cwestiwn
damcaniaethol, mae dulliau dewisiadau a ddatgelwyd yn arsylwi'r hyn y talodd pobl amdano mewn
gwirionedd, y mae'r Llyfr Gwyrdd yn ei drin fel tystiolaeth fwy credadwy ar y cyfan, popeth arall yn
gyfartal, am nad yw'n destun tueddiad damcaniaethol — talodd ymatebwyr mewn astudiaeth prisiau tai
hedonig y premiwm neu'r gostyngiad a fesurir mewn gwirionedd
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Atodiad 2). Mae prisio hedonig yn dadelfennu pris marchnad — prisiau tai fel arfer — yn brisiau ymhlyg
ar gyfer pob priodoledd o'r nwydd, gan adael i ddadansoddwyr ynysu, er enghraifft, y premiwm pris y mae
aelwydydd yn ei dalu mewn gwirionedd i fyw yn rhywle tawelach neu ag ansawdd aer gwell, gan reoli'n
ystadegol am bob priodoledd arall sydd hefyd yn effeithio ar bris tŷ (maint, lleoliad, dalgylch
ysgol). Mae'r dull cost teithio'n gwneud yr un peth cyfatebol ar gyfer safleoedd hamdden heb ffi
mynediad: mae'r amser a'r arian y mae pobl yn ei wario'n teithio i safle'n datgelu isafswm o'r hyn y
mae'r safle'n werth iddynt, am nad oes neb yn ysgwyddo cost sy'n fwy na gwerth yr ymweliad iddynt.

Mae'r ddau ddull yn rhannu cyfyngiad strwythurol: ni allant ond prisio'r hyn sydd wedi'i ymgorffori
mewn trafodyn marchnad sy'n bodoli eisoes. Mae sŵn ger maes awyr yn ymddangos mewn prisiau tai am fod
pobl sy'n poeni am sŵn yn didoli eu hunain i mewn i dai tawelach; nid yw gwerth bodolaeth rhywogaeth
nad oes neb yn ymweld â hi na'n byw yn agos ati yn ymddangos mewn unrhyw drafodyn o gwbl, a dyna'n
union y bwlch y mae dulliau
[dewisiadau a ddatganwyd](../stated-preference-valuation/) yn bodoli i'w lenwi.

## Y fathemateg

```
Prisio hedonig:
  Pris tŷ = f(priodoleddau strwythurol, priodoleddau lleoliad,
              priodoledd amgylcheddol o ddiddordeb, ...)
  Amcangyfrif drwy atchweliad; y cyfernod ar y priodoledd amgylcheddol
  (gan ddal popeth arall yn gyson) yw ei bris ymhlyg.

  Pris ymhlyg priodoledd X = ∂(Pris tŷ) / ∂X

Dull cost teithio:
  Cyfradd ymweld (ymweliadau fesul pen o barth i) = f(cost teithio o barth i,
                   safleoedd amgen, rheolyddion economaidd-gymdeithasol)
  Amcangyfrif cromlin alw ar gyfer ymweliadau fel ffwythiant o gost teithio.
  Gwarged defnyddwyr = arwynebedd o dan y gromlin alw a amcangyfrifwyd
                      = gwerth y safle i ymwelwyr
```

Mae'r ddau ddull angen set rheoli sy'n gadarn yn ystadegol — mae hepgor priodoledd drysu (hedonig) neu
safle amgen cyfagos (cost teithio) yn peri gwyredd yn y pris ymhlyg mewn cyfeiriad nad yw bob amser yn
amlwg ymlaen llaw, a dyna pam mae Atodiad 2 y Llyfr Gwyrdd yn ei gwneud yn ofynnol adrodd y fanyleb
atchweliad a'r rheolyddion, nid dim ond y cyfernod pennawd.

## Enghraifft waith

**Llywodraeth genedlaethol**: mae methodoleg pris cysgodol carbon y Llyfr Gwyrdd ei hun yn tynnu'n
rhannol ar dystiolaeth hedonig, ond achos symlach i'w ddarlunio yw sŵn awyrennau. Mae astudiaeth
hedonig sy'n atchweilio prisiau gwerthu tai mewn ardal llwybr hedfan yn erbyn amlygiad sŵn wedi'i
bwysoli yn ôl pellter, gan reoli am faint, oedran, a dalgylch ysgol, yn canfod bod pob cynnydd o 1
desibel mewn amlygiad sŵn cyfartalog yn gysylltiedig â gostyngiad o 0.5% ym mhris y tŷ. Ar gyfer tŷ
nodweddiadol gwerth £280,000 yn yr ardal yr effeithir arni:

```
Pris ymhlyg fesul desibel = £280,000 × 0.5% = £1,400 fesul aelwyd
Aelwydydd yr effeithir arnynt gan gynnydd o 3dB o faes awyr newydd = 18,000
Cost gyfun ymhlyg y cynnydd sŵn = £1,400 × 3 × 18,000 = £75.6m
```

Cost gyfalafedig un-tro yw hon (wedi'i hymgorffori ym mhris y tŷ), y mae'n rhaid i'r arfarniad ofalu
peidio â'i chyfrif ddwywaith yn erbyn llif cost blynyddol niwsans-sŵn a amcangyfrifwyd ar wahân.

**Elusen**: mae elusen amgylcheddol yn defnyddio'r dull cost teithio i brisio gwarchodfa natur â
mynediad rhad ac am ddim. Mae data arolwg ar godau post ymwelwyr yn rhoi cost teithio cylchdaith
gyfartalog (amser wedi'i brisio ar werth amser di-waith argymelledig y Llyfr Gwyrdd, ynghyd â thanwydd)
o £14 y daith, gyda 40,000 o deithiau y flwyddyn. Mae'r gromlin alw a amcangyfrifwyd — cyfraddau
ymweld yn gostwng wrth i gost teithio o barth godi — yn awgrymu gwarged defnyddwyr fesul ymweliad, y
tu hwnt i'r £14 a wariwyd mewn gwirionedd, o oddeutu £9.

```
Cyfanswm gwerth blynyddol = 40,000 taith × (£14 wedi'i wario + £9 gwarged defnyddwyr)
                           = 40,000 × £23 ≈ £920,000/flwyddyn
```

Mae hyn yn gwneud i refeniw ffi mynediad sero'r warchodfa edrych yn fach, ac yn rhoi i ymddiriedolwyr
yr elusen ffigur y gellir ei amddiffyn ar gyfer gwerth hamdden y safle wrth wneud yr achos i gyllidwyr.

## Cysylltiad peirianneg feddalwedd

Mae meddylfryd dewisiadau a ddatgelwyd yn ymddangos mewn dadansoddeg cynnyrch sector cyhoeddus yn
amlach nag y mae ymarferwyr yn ei sylweddoli: mae data defnydd o wasanaeth digidol llywodraeth am
ddim ei hun yn dystiolaeth dewisiadau a ddatgelwyd o werth (gellir dadansoddi amlder, hyd sesiwn, ac —
yn fwyaf arwyddocaol — patrymau defnydd ailadroddus yn erbyn un-tro yr un ffordd ag y mae model cost
teithio'n trin amlder ymweld yn erbyn pellter). Lle mae gan wasanaeth ddewisiadau amgen gwirioneddol
(sianel bapur, llinell ffôn), gellir amcangyfrif y "gost" y mae dinasyddion yn ei hysgwyddo i ddefnyddio'r
sianel ddigidol yn lle hynny (amser, data, dyfais) a'i chymharu â defnydd, gan adleisio rhesymeg cost
teithio'n uniongyrchol. Gweler [safon gwasanaeth digidol](../digital-service-standard/) a
[gwerth data agored](../open-data-value/), sy'n wynebu'n union yr un broblem brisio ar gyfer nwydd heb
bris marchnad uniongyrchol.

## Peryglon

- **Gwyredd newidyn hepgoriedig mewn modelau hedonig.** Mae hepgor priodoledd sy'n cydberthyn
  (ansawdd ysgol yn cydberthyn â phris tŷ a'r newidyn amgylcheddol o ddiddordeb) yn peri gwyredd i'r
  amcangyfrif pris ymhlyg; mae angen adrodd a chraffu ar y fanyleb, nid dim ond y canlyniad.
- **Anwybyddu safleoedd amgen mewn astudiaethau cost teithio.** Mae gwerth datgeledig ymwelydd ar
  gyfer safle'n cael ei danddatgan os yw safle amgen agosach yn bodoli ac heb ei reoli amdano — mae'n
  bosibl eu bod yn ymweld yn bennaf am ei fod am ddim, nid am ei fod yn unigryw werthfawr.
- **Cymhwyso dewisiadau a ddatgelwyd i nwydd heb unrhyw adlais marchnad o gwbl.** Nid yw gwerth
  bodolaeth, gwerth opsiwn, a gwerth etifeddiaeth yn ymddangos mewn unrhyw drafodyn ac ni ellir eu
  hadfer drwy ddulliau hedonig na chost teithio — mae'r bwlch hwnnw'n perthyn i
  [brisio dewisiadau a ddatganwyd](../stated-preference-valuation/).
- **Cymysgu gwerth cyfalafedig (un-tro) â llif blynyddol.** Mae effeithiau pris tŷ hedonig fel arfer
  yn werthoedd cyfalafedig un-tro; mae eu trin fel llif budd blynyddol yn chwyddo'r arfarniad.

## Ffynonellau

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
