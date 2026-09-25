# Pwysoli Dosraniadol

Mae pwysoli dosraniadol yn addasu gwerth ariannol cost neu fudd yn ôl pwy sy'n ei dderbyn, ar yr
egwyddor bod punt ychwanegol yn werth mwy i aelwyd dlawd nag i un gyfoethog. Mae Llyfr Gwyrdd
Trysorlys EF yn cyflenwi dull penodol o gymhwyso'r pwysoli hwn, wedi'i adeiladu ar gyfleustod ymylol
lleihaol incwm, fel na fydd arfarniadau'n trin punt a enillir gan y degradd cyfoethocaf yn dawel fel
un sy'n gyfartal o ran gwerth â phunt a enillir gan y tlotaf.

## Pam mae hyn yn bwysig

Mae dadansoddiad cost-budd safonol yn crynhoi punnoedd heb ofyn pwy piau'r punnoedd hynny, sy'n
tybio'n ymhlyg fod punt yn werth yr un fath i bawb — tybiaeth y mae economegwyr wedi gwybod ers tro
ei bod hi'n anghywir. Mae aelwyd sy'n ennill £15,000/flwyddyn yn profi enillion o £1,000 mewn ffordd
wahanol iawn i aelwyd sy'n ennill £150,000/flwyddyn, am fod cyfleustod ymylol incwm yn gostwng wrth
i incwm godi. Heb ei phwysoli, mae arfarniad safonol yn ffafrio ymyriadau sy'n rhoi budd i grwpiau
cyfoethocach, sydd eisoes ar eu hennill, yn systematig, am fod eu pŵer gwario uwch yn chwyddo prisiad
ariannol y buddion sy'n eu cyrraedd (mae uwchraddiad parc ger tai drud yn "dangos" budd gwerth
eiddo mwy na'r un uwchraddiad ger tai rhad, yn syml am fod prisiau'n uwch, nid am fod yr enillion
lles yn fwy).

Mae canllawiau atodol y Llyfr Gwyrdd ar ddadansoddiad dosraniadol, a atgyfnerthwyd ar ôl i adolygiad
2020 y Trysorlys ymateb i feirniadaeth fod methodoleg arfarnu'n ffafrio Llundain a De Ddwyrain Lloegr
yn systematig, yn nodi dull pwysoli ffurfiol yn seiliedig ar elastigedd tybiedig cyfleustod ymylol
incwm o tua 1.3 — sy'n golygu bod dyblu incwm yn fras haneru (2^-1.3 ≈ 0.41 gwaith, i fod yn benodol)
gwerth ymylol punt ychwanegol. Nid addasiad talgrynnu yw hwn: gall ei gymhwyso newid pa un o ddwy
raglen sy'n cystadlu sy'n dangos y gwerth presennol net uchaf, yn arbennig wrth gymharu ymyrraeth a
ganolbwyntir mewn ardal ddifreintiedig yn erbyn un a ledaenir ar draws y boblogaeth gyffredinol.

## Y fathemateg

Pwysoliad dosraniadol y Llyfr Gwyrdd ar gyfer punt o fudd sy'n cronni i aelwyd ar lefel incwm y,
o'i chymharu â phunt ar lefel incwm gyfartalog (cyfeirnod) ȳ:

```
Pwysoliad(y) = (ȳ / y)^e

lle:
  y  = incwm yr aelwyd (neu incwm y grŵp yr effeithir arno)
  ȳ  = incwm cyfartalog (cyfeirnod) aelwyd
  e  = elastigedd cyfleustod ymylol incwm (Llyfr Gwyrdd: tua 1.3)
```

Cymhwyso pwysoliadau at fuddion net:

```
Budd wedi'i bwysoli = Σ [budd heb ei bwysoli i grŵp i × Pwysoliad(y_i)]
```

Mae grŵp sy'n ennill hanner y cyfartaledd cenedlaethol (y = 0.5ȳ) yn cael pwysoliad o
(1/0.5)^1.3 = 2^1.3 ≈ 2.46 — mae pob punt o fudd i'r grŵp hwnnw'n cyfrif yn werth tua 2.46 gwaith
punt i aelwyd ag incwm cyfartalog.

## Enghraifft waith

**Dwy raglen leol sy'n cystadlu**, pob un â budd net heb ei bwysoli o £2 filiwn/flwyddyn, yn
cystadlu am yr un gronfa dwf ranbarthol:

- *Rhaglen A*: cynllun cefnogi busnes mewn tref ffyniannus, incwm aelwyd cyfartalog £45,000 (tua
  1.3× y cyfartaledd cenedlaethol tybiedig o £35,000).
- *Rhaglen B*: rhaglen sgiliau mewn ward ddifreintiedig, incwm aelwyd cyfartalog £18,000 (tua 0.51×
  y cyfartaledd cenedlaethol).

```
Pwysoliad(A) = (35,000 / 45,000)^1.3 = (0.778)^1.3 ≈ 0.72
Pwysoliad(B) = (35,000 / 18,000)^1.3 = (1.944)^1.3 ≈ 2.53

Budd wedi'i bwysoli A = £2,000,000 × 0.72 = £1.44 miliwn
Budd wedi'i bwysoli B = £2,000,000 × 2.53 = £5.06 miliwn
```

Heb eu pwysoli, mae'r ddwy raglen yn gyfartal. Wedi'u pwysoli ar gyfer effaith ddosraniadol, mae
budd Rhaglen B fwy na theirgwaith yn fwy — canlyniad sy'n gwrthdroi'r argymhelliad ariannu ac yn
adlewyrchu diben eglur y Llyfr Gwyrdd wrth fynnu bod y pwysoliad yn cael ei ddangos, nid dim ond y
gymhareb budd-cost heb ei phwysoli.

**Dyraniad grant elusennol**: dylai cyllidwr sy'n cymharu grant o £500,000 sy'n cyrraedd 1,000 o
aelwydydd incwm isel (pwysoliad ≈ 2.0, gwerth pwysoledig gwerth £1 filiwn-cyfwerth) yn erbyn yr un
£500,000 yn cyrraedd 1,000 o aelwydydd incwm canolig (pwysoliad ≈ 1.0, gwerth pwysoledig
£500,000-cyfwerth) ddangos yr achos dosraniadol yn eglur yn ei bapur bwrdd, nid ei adael i'w
gasglu.

## Cysylltiad peirianneg feddalwedd

Anaml y bydd pwysoli dosraniadol yn ymddangos yn uniongyrchol mewn metrigau cyflenwi meddalwedd, ond
dylai lywio sut mae timau peirianneg a data'n dylunio mesur a thargedu:

- Wrth adeiladu dangosfwrdd effaith neu gyfrifiannell buddion, dangoswch broffil incwm neu
  amddifadedd y rhai yr effeithir arnynt, nid dim ond cyfanswm budd crynswth — mae ffigurau crynswth
  heb ddadansoddiad dosraniadol yn cuddio'r union wrthdroad a ddangosir uchod.
- Cysylltwch reswm targedu mewn dylunio gwasanaethau â'r un data amddifadedd y mae'r Llyfr Gwyrdd yn
  ei ddefnyddio — gweler [Mynegai Amddifadedd Lluosog](../index-of-multiple-deprivation/) — fel y
  gellir asesu cyrhaeddiad gwasanaeth digidol o ran tegwch, nid effeithlonrwydd yn unig (y bedwaredd
  E ddadleuol yn [gwerth am arian](../value-for-money/)).
- Pan fydd algorithm yn dyrannu adnodd prin (slotiau apwyntiad, amser gweithiwr achos, cymhorthdal),
  bydd swyddogaeth amcan "macsimeiddio budd cyfan" heb ei phwysoli, yn ôl ei chynllun, yn atgynhyrchu'r
  un ragfarn y mae pwysoliad y Llyfr Gwyrdd yn bodoli i'w chywiro — nodwch hyn yn eglur i berchnogion
  polisi cyn optimeiddio.

## Peryglon

- **Cymhwyso pwysoliadau dosraniadol yn anghyson ar draws portffolio.** Mae pwysoli buddion un
  rhaglen ond nid ei chymharydd yn cynhyrchu cymhariaeth ragfarnllyd, nid un decach; mae'r Llyfr
  Gwyrdd yn mynnu triniaeth debyg-am-debyg.
- **Defnyddio gwerthoedd eiddo neu farchnad fel dirprwy ar gyfer lles heb addasiad.** Mae prisiau'r
  farchnad eu hunain wedi'u hystumio gan anghydraddoldeb incwm presennol, sef yn union yr hyn y mae
  pwysoli dosraniadol i fod i'w gywiro — gall defnyddio gwerthoedd marchnad heb eu haddasu ddyblu
  cyfrif y ragfarn.
- **Anwybyddu amrywiad o fewn grŵp.** Gall pwysoli yn ôl incwm cyfartalog ardal (er enghraifft,
  degradd Mynegai Amddifadedd Lluosog) gam-gynrychioli unigolion nad ydynt yn cyfateb i gyfartaledd
  eu hardal; defnyddiwch y data incwm mwyaf manwl sydd ar gael yn rhesymol.
- **Trin yr elastigedd 1.3 fel cysonyn cyffredinol.** Mae'r Llyfr Gwyrdd ei hun yn nodi bod hwn yn
  amcangyfrif ag amrediad credadwy; profwch sensitifrwydd penderfyniadau mawr yn erbyn elastigeddau
  amgen yn hytrach na thrin 1.3 fel union.

## Ffynonellau

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
