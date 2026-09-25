# Cynhyrchedd AI yn y Sector Cyhoeddus

Mae metrigau ar gyfer yr hyn y mae cymorth codio AI yn ei wneud mewn gwirionedd i allbwn peirianneg — cyfraddau derbyn awgrymiadau, cyflymiadau astudiaeth reoledig, trwygynnyrch ceisiadau tynnu (PR), a chadw cod — yn cario sylfaen dystiolaeth sy'n wirioneddol wrthddweud ei gilydd hyd yn oed cyn ychwanegu cyfyngiadau'r sector cyhoeddus: mae dosbarthiad data'n cyfyngu pa rannau o ystad etifeddol y caiff arf AI gyffwrdd â nhw o gwbl, mae cylchoedd caffael yn golygu bod yr arf a werthusir yn aml genhedlaeth model y tu ôl i'r galluedd cyfredol, a bod gofynion clirio diogelwch yn llywodraethu pwy sy'n cael ei ddefnyddio ar beth.

## Pam mae hyn yn bwysig

Mae'r ddwy astudiaeth reoledig a ddyfynnir amlaf yn pwyntio i gyfeiriadau dirgroes. Canfu treial ar hap wedi'i reoli Peng et al. yn 2023 o GitHub Copilot fod datblygwyr wedi cwblhau tasg gweinydd HTTP maes glas 55.8% yn gyflymach gyda Copilot (1h11m yn erbyn 2h41m, n=95). Canfu treial ar hap wedi'i reoli METR yn 2025 fod datblygwyr cod agored profiadol yn gweithio ar *eu storfeydd aeddfed eu hunain* 19% yn arafach gydag offer AI dechrau 2025, tra'n credu eu bod tua 20% yn gyflymach. Mae'r ddwy astudiaeth yn gadarn; y gwrthddweud yw'r canfyddiad — nid yw effeithiolrwydd tasgau maes glas yn trosglwyddo i effeithiolrwydd cronfa god aeddfed, ac mae llawer o beirianneg y llywodraeth yn waith cronfa god aeddfed ar ystadau sy'n hŷn ac yn fwy idiosyncratig na'r storfa fasnachol ganolrifol. Mae Fframwaith AI Cynhyrchiol y Central Digital and Data Office ar gyfer Llywodraeth EF (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) yn nodi egwyddorion ar gyfer mabwysiadu cyfrifol yn union am na ellir mewnforio'r sylfaen dystiolaeth hon yn syml o arddangosiadau gwerthwyr; disgwylir i adrannau werthuso offer yn erbyn eu gofynion trin data a diogelwch eu hunain cyn cyflwyno.

## Y fathemateg

```
Cyfradd dderbyn  = awgrymiadau a dderbyniwyd / awgrymiadau a ddangoswyd
Cyfradd gadw     = cod AI sy'n goroesi i'w uno / cod AI a dderbyniwyd
Cyflymiad        = (t_rheolaeth − t_AI) / t_rheolaeth  (o gymhariaeth reoledig YN UNIG)
Newid trwygynnyrch = Δ PRs wedi'u huno/datblygwr/wythnos

Ffactor cwmpas sector cyhoeddus:
  cyfran cronfa god gymwys = LOC ar systemau lle mae'r dosbarthiad
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) yn caniatáu'r arf o gwbl

Model gwerth = datblygwyr × cwmpas cymwys × amser a arbedwyd × cyfradd lwythog × defnydd
             — mae angen mesuriad lleol ar bob term, ac nid oes gan y ffactor
             cwmpas gyfatebiaeth yn y sector preifat
```

## Enghraifft waith

Mae adran lywodraeth yn peilota cynorthwyydd codio AI ar draws 300 o ddatblygwyr, ond dim ond systemau wedi'u dosbarthu'n OFFICIAL sy'n gymwys i ddefnyddio'r arf — 70% o'r ystad yn ôl dyraniad pennau, gyda'r 30% sy'n weddill (systemau dosbarthiad uwch) wedi'u heithrio'n gyfan gwbl.

```
Datblygwyr cymwys = 300 × 0.70 = 210

Canlyniad y peilot: amser a arbedwyd yn ôl hunan-adroddiad 40 munud/dydd;
              arbediad lefel-tasg mesuredig 12 munud/dydd (0.2 awr)
              — bwlch canfyddiad METR, wedi'i atgynhyrchu yn y byd go iawn

Prisiwch y rhif MESUREDIG:
  210 × 0.2 awr × 220 diwrnod × £55/awr lwythog × 0.6 defnydd
  = 210 × 44 awr × £55 × 0.6
  = 9,240 awr × £55 × 0.6 ≈ £304,920/flwyddyn o gapasiti

Cost: 210 sedd drwyddedig × £22/mis × 12 ≈ £55,440/flwyddyn

Cymhareb capasiti net ≈ 304,920 / 55,440 ≈ 5.5:1
```

Yn ariannadwy ar oddeutu traean o'r budd a hunan-adroddwyd, a dim ond ar ôl cymhwyso'r nenfwd dosbarthiad — byddai trwyddedu'r 300 datblygwr i gyd ar sail cryfder y ffigur hunan-adroddedig wedi gorddatgan y boblogaeth gymwys a'r gwir arbediad fel ei gilydd.

## Cysylltiad peirianneg feddalwedd

Y disgyblaethau sy'n trosglwyddo'n uniongyrchol: rhedwch **dreialon pragmataidd** ar gronfa god yr adran ei hun a thocynnau real, nid tasgau arddangos gwerthwyr, gan mai canfyddiad cronfa god aeddfed yn benodol yw canlyniad METR; triniwch **cyfradd dderbyn fel dirprwy, nid canlyniad** — mae derbyn uchel gyda chadw isel yn gyfatebiaeth feddalwedd i orddiagnosio; parwch bob honiad trwygynnyrch â **gwiriad sefydlogrwydd**, gan i adroddiad DORA 2025 ganfod bod mabwysiadu AI yn codi trwygynnyrch ond yn dirywio sefydlogrwydd newid, sef yn union y dadansoddiad budd-net y mae [metrigau DORA ar gyfer gwerth cyhoeddus](../dora-metrics-for-public-value/) wedi'i adeiladu i'w redeg; a byddwch yn onest y gall offer AI ledaenu, nid culhau, y bwlch ar ystadau etifeddol trwm o [ddyled dechnegol](../technical-debt-as-public-value-erosion/), gan fod data hyfforddi'n tanamlygu'r cod COBOL, 4GL, a mainfframiau pwrpasol sy'n gyffredin yn y llywodraeth, felly mae ansawdd awgrymiadau ar yr union systemau sydd fwyaf angen cymorth yn aml wannaf. Mae hyn yn eistedd ochr yn ochr â'r cwestiwn ehangach [gwerth AI mewn llywodraeth](../ai-in-government-value/) a dylid ei lywodraethu gan yr un cyfyngiadau [gwerth seiberddiogelwch sector cyhoeddus](../public-sector-cybersecurity-value/) sy'n cyfyngu ble y caiff unrhyw arf trydydd parti weld cod neu ddata o gwbl.

## Peryglon

- **Trawsblannu astudiaethau gwerthwyr**: mae cymhwyso cyflymiadau treialon ar hap maes glas i waith integreiddio etifeddol yn union y gwall a ddatgelodd astudiaeth METR.
- **Hunan-adrodd fel mesuriad**: y bwlch canfyddiad-yn-erbyn-mesuredig o 20 pwynt canran yw'r gogwydd mwyaf hysbys yn y llenyddiaeth hon, ac mae'n chwyddo achosion busnes sy'n dibynnu ar arolygon datblygwyr yn unig.
- **Anwybyddu'r nenfwd dosbarthiad**: mae modelau trwyddedu a gwerth wedi'u hadeiladu ar gyfanswm pennau yn hytrach na'r is-set gymwys, wedi'i chlirio o ran dosbarthiad, yn gorddatgan yn systematig gost-effeithiolrwydd a chwmpas cyraeddadwy fel ei gilydd.
- **Oedi cylch caffael**: gall caffael offer sy'n seiliedig ar fframwaith olygu bod peilot yn gwerthuso cenhedlaeth model sydd 12–18 mis y tu ôl i'r hyn sydd ar gael yn gyhoeddus erbyn amser cyflwyno llawn, gan wneud tybiaeth cyflymiad yr achos busnes gwreiddiol yn hen cyn y dyddiad mynd yn fyw.

## Ffynonellau

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
