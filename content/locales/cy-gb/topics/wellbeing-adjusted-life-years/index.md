# Blynyddoedd bywyd wedi'u haddasu yn ôl llesiant (WELLBY)

Mae WELLBY yn un pwynt ychwanegol o fodlonrwydd bywyd, ar y raddfa lesiant safonol 0–10, i un
person am un flwyddyn. Dyma gymar strwythurol y QALY a ddefnyddir mewn economeg iechyd — uned
sengl sy'n eich galluogi i gymharu ymyriadau nad oes ganddynt ddim byd arall yn gyffredin o ran
canlyniadau — ond wedi'i adeiladu ar lesiant goddrychol yn hytrach na chyflyrau iechyd clinigol,
ac wedi'i nodi yn arweiniad Trysorlys EM "Wellbeing guidance for appraisal: supplementary Green
Book guidance" (2021).

## Pam mae hyn yn bwysig

Mae angen uned gyffredin ar arfarniad cost-budd i gymharu grant clwb ieuenctid yn erbyn cynllun
diogelwch ffyrdd yn erbyn gwasanaeth iechyd meddwl, heb yr un ohonynt yn rhannu mesur canlyniad.
Datryswyd hyn ar gyfer ymyriadau clinigol gan economeg iechyd gyda'r QALY: blwyddyn o fywyd wedi'i
haddasu yn ôl ansawdd, wedi'i phwysoli o 0 (marw) i 1 (iechyd llawn). Mae arweiniad llesiant
Trysorlys EM yn ymestyn yr un rhesymeg i wariant cyhoeddus nad yw'n ymwneud ag iechyd, gan
ddefnyddio cwestiwn bodlonrwydd bywyd cyfunol yr ONS ("Yn gyffredinol, pa mor fodlon ydych chi â'ch
bywyd y dyddiau hyn?", a atebir 0–10) fel yr ysgol ganlyniad yn hytrach na mynegai cyflwr iechyd.
Mae WELLBY o 1 yn golygu bod bodlonrwydd bywyd un person yn codi un pwynt cyfan am un flwyddyn (neu,
yn gyfwerth, fodlonrwydd deg o bobl yn codi 0.1 pwynt yr un am flwyddyn — mae WELLBYs yn crynhoi ar
draws poblogaeth yn yr un modd â QALYs). Mae arweiniad Trysorlys EM yn pennu gwerth ariannol
enghreifftiol fesul WELLBY (tua £13,000, prisiau 2019/20) sy'n deillio o gysoni data llesiant
goddrychol â dulliau eraill o werthfawrogi blwyddyn o fywyd, gan roi ffordd i arfarnwyr ariannoli
canlyniadau — lleihau unigrwydd, cydlyniant cymunedol, mynediad at fannau gwyrdd — na allai
technegau [prisio llesiant](../wellbeing-valuation/) ond eu disgrifio o'r blaen, heb allu eu
cymharu ar sail gyffredin â gwariant iechyd neu ddiogelwch.

## Y fathemateg

```
WELLBY = Δ bodlonrwydd bywyd (graddfa 0–10) × nifer y blynyddoedd y mae'r newid yn parhau
        (wedi'i grynhoi ar draws pawb yr effeithir arnynt)

Budd llesiant ariannoledig = WELLBYs a gynhyrchwyd × gwerth fesul WELLBY (gwerth cyfeirio Trysorlys EM)

cymh. QALY = Δ defnyddioldeb cyflwr iechyd (graddfa 0–1) × blynyddoedd a fyw yn y cyflwr hwnnw
```

Nid yw'r raddfa fodlonrwydd 0–10 a graddfa ddefnyddioldeb QALY 0–1 yn gyfnewidiadwy heb gam trosi;
mae arweiniad Trysorlys EM yn trafod cysoni'r ddwy fel na chaiff, er enghraifft, ymyriad iechyd a
arfarnwyd mewn QALYs ac ymyriad cymdeithasol a arfarnwyd mewn WELLBYs eu cyfrif ddwywaith yn dawel
na'u gadael yn anghymaradwy o fewn yr un [arfarniad Llyfr Gwyrdd](../green-book-appraisal/).

## Enghraifft waith

**Gwasanaeth unigrwydd awdurdod lleol**: mae cynllun cyfeillio yn gwasanaethu 400 o breswylwyr hŷn
ynysig. Mae arolygon dilynol yn dangos bod cyfartaledd bodlonrwydd bywyd yn codi o 5.2 i 6.0
(cynnydd o 0.8 pwynt), ac amcangyfrifir bod yr effaith yn parhau am 2 flynedd cyn pylu.

```
WELLBYs = 400 o bobl × 0.8 pwynt × 2 flynedd = 640 WELLBY

Gwerth ariannoledig = 640 × £13,000 = £8,320,000
```

O gymharu â chost flynyddol y rhaglen o £300,000 (£600,000 dros 2 flynedd), mae'r gymhareb
budd-cost tua 8,320,000 / 600,000 ≈ **13.9:1** — ffigwr a all bellach eistedd yn yr un tabl arfarnu
â chost-fesul-QALY-a-osgowyd cynllun iechyd neu arbedion amser teithio cynllun trafnidiaeth.

**Elusen, ar raddfa lai**: mae rhaglen gelfyddydau cymunedol yn cyrraedd 50 o gyfranogwyr gyda
chynnydd bodlonrwydd mesuredig o 0.3 pwynt, yn para 1 flwyddyn.

```
WELLBYs = 50 × 0.3 × 1 = 15 WELLBY
Gwerth ariannoledig = 15 × £13,000 = £195,000
```

## Cysylltiad peirianneg feddalwedd

- Gall unrhyw wasanaeth sy'n wynebu dinasyddion ac sydd eisoes yn casglu eitem arolwg bodlonrwydd
  bywyd neu lesiant (mae llawer o lwyfannau awdurdodau lleol ac iechyd a gofal yn gwneud hynny, gan
  ddilyn pedwar cwestiwn llesiant safonol yr ONS) gyfrifo WELLBYs yn uniongyrchol o bibelinau data
  presennol yn hytrach na chomisiynu gwerthusiad economaidd pwrpasol ar gyfer pob newid gwasanaeth.
- Mae WELLBYs yn rhoi i dimau peirianneg sy'n adeiladu ar gyfer adrodd
  [Deddf Gwerth Cymdeithasol](../social-value-act/) neu
  [enillion cymdeithasol ar fuddsoddiad](../social-return-on-investment/) enwadur wedi'i safoni'n
  genedlaethol ac wedi'i gymeradwyo gan Drysorlys EM, gan osgoi lluosogi "sgorau effaith" pwrpasol
  na ellir eu cymharu ar draws contractau neu gyflenwyr.
- Gan fod WELLBYs yn adiol ar draws pobl ac amser, maent yn cyfansoddi'n lân i'r math o olrhain
  canlyniadau ar lefel poblogaeth a ddefnyddir mewn systemau
  [atebolrwydd yn seiliedig ar ganlyniadau](../outcomes-based-accountability/) — gall dangosfwrdd
  gwasanaeth adrodd WELLBYs cronnol a gynhyrchwyd bob chwarter yn yr un modd ag y mae system iechyd
  yn adrodd QALYs a enillwyd.

## Peryglon

- **Tybio bod cynnydd bodlonrwydd hunan-adroddedig yn gwbl briodoladwy i'r ymyriad** — heb
  ffeithiol-wrthwyneb (grŵp cymharu neu ddyluniad cyn/ar ôl gyda rheolyddion), ni allwch wahanu'r
  cynnydd WELLBY oddi wrth dueddiadau cyffredinol; gweler
  [dadansoddiad ffeithiol-wrthwyneb](../counterfactual-analysis/).
- **Cymysgu WELLBYs a QALYs mewn un cyfanswm heb gysoni** — mae arweiniad Trysorlys EM yn eglur bod
  y ddau'n defnyddio graddfeydd gwahanol a damcaniaethau gwerth sylfaenol gwahanol; mae eu
  crynhoi'n ddiniwed yn cyfrif lles sy'n gorgyffwrdd ddwywaith.
- **Defnyddio'r gwerth ariannol cyfeirio yn ddigwestiwn** — amcangyfrif cyfartaledd cenedlaethol
  gyda bandiau ansicrwydd real yw'r ffigwr £-fesul-WELLBY; mae arweiniad Trysorlys EM yn argymell
  dadansoddiad sensitifrwydd, nid ei drin fel cyfradd gyfnewid sefydlog.

## Ffynonellau

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
