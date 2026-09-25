# Cyfanswm Cost Perchnogaeth (TCO) mewn TG y Llywodraeth

Cyfanswm cost perchnogaeth yw cost gylchred oes lawn system — caffael ynghyd â phob blwyddyn o'i rhedeg — wedi'i disgowntio i ddyddiad cyffredin. Mewn TG llywodraeth, y gwall rhagolygu mwyaf dibynadwy yw cymharu cyflenwyr neu opsiynau ar sail pris caffael yn unig, pan fo gweithrediadau a chynnal a chadw fel arfer yn cyfrif am rywle rhwng hanner a phedwar rhan o bump o'r bil gydol oes.

## Pam mae hyn yn bwysig

Mae'n ofynnol i Lyfr Gwyrdd Trysorlys EF fod yr achos ariannol yn unrhyw achos busnes Model y Pum Achos yn cwmpasu costau gydol oes, nid gwariant cyfalaf yn unig — ac eto mae'r Swyddfa Archwilio Genedlaethol wedi canfod dro ar ôl tro fod adrannau'n cymeradwyo buddsoddiadau TG yn erbyn rhagolwg cost redeg anghyflawn neu optimistaidd, dim ond i ddarganfod y gwir gost weithredu unwaith y bydd y system yn fyw a llinell y gyllideb gyfalaf wedi cau. Mae Cod Ymarfer Technoleg y Government Digital Service a'r Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) yn gwthio adrannau tuag at gwmwl a lletya nwyddau'n rhannol am ei fod yn gwneud y gost barhaus yn weladwy ac yn gymharadwy, yn hytrach na'i chladdu y tu mewn i un ffigur caffael cyfalaf sy'n edrych yn ddeniadol o isel adeg cymeradwyo ac yn ddrud o anghywir dair blynedd yn ddiweddarach.

## Y fathemateg

```
TCO = Cost caffael + Σ(t=1..N) Cost weithredu flynyddol_t / (1+r)^t
      − gwerth gweddilliol (wedi'i ddisgowntio)

r = cyfradd ddisgowntio gymdeithasol safonol Llyfr Gwyrdd Trysorlys EF, 3.5%/flwyddyn
    (amserlen gyfradd sy'n gostwng ar gyfer gorwelion y tu hwnt i 30 mlynedd)

Cydrannau cost weithredu: lletya/trwyddedu, cymorth a chynnal a chadw,
clytio diogelwch a chydymffurfio, amser staff, adnewyddu/mudo wedi'i gynllunio
```

Gweler [cyfradd ddisgowntio gymdeithasol](../social-discount-rate/) am pam mae'r ffactor disgowntio'n bwysig dros oes system nodweddiadol o 5–10 mlynedd, a [adeiladu neu brynu mewn llywodraeth](../build-vs-buy-in-government/) am sut mae TCO yn bwydo penderfyniad adeiladu/prynu.

## Enghraifft waith

Mae adran yn cymharu dwy system rheoli achosion dros orwel o 5 mlynedd wrth gyfradd ddisgowntio 3.5% y Llyfr Gwyrdd.

```
System A: capex £3,500,000, opex £250,000/flwyddyn
System B: capex £1,800,000 (yn edrych yn rhatach), opex £650,000/flwyddyn
          (baich cymorth gwerthwr ac integreiddio trymach)

Cymhariaeth naïf ar capex yn unig: B sy'n ennill, £1.8M < £3.5M.

Swm ffactor disgowntio, 5 mlynedd ar 3.5%: 0.966+0.934+0.902+0.871+0.842 ≈ 4.515

TCO_A = 3,500,000 + 250,000 × 4.515 = 3,500,000 + 1,128,750 = £4,628,750
TCO_B = 1,800,000 + 650,000 × 4.515 = 1,800,000 + 2,934,750 = £4,734,750
```

Mae TCO yn troi'r penderfyniad naïf ar ei ben: mae System B ychydig yn ddrutach dros bum mlynedd unwaith y bydd y gost weithredu wedi'i disgowntio a'i chrynhoi, gan fod ei chyfran opex o'r gost gydol oes yn 62% (2,934,750 / 4,734,750) o gymharu â 24% System A — enghraifft bendant o'r canfyddiad "cynnal a chadw yw'r rhan fwyaf o'r bil", wedi'i guddio'n llwyr wrth gymharu prisiau label.

## Cysylltiad peirianneg feddalwedd

TCO yw'r rhif a ddylai ddisgyblu pob penderfyniad [adeiladu neu brynu](../build-vs-buy-in-government/) a phob achos ad-dalu [dyled dechnegol](../technical-debt-as-public-value-erosion/), gan fod llog dyled a chynnal a chadw gohiriedig ill dau'n llinellau cost weithredu sy'n perthyn i'r un cyfanswm disgowntiedig, p'un a oes unrhyw un wedi bod yn eu holrhain ai peidio. Dylai peirianwyr sy'n cynnig llwyfan neu ddewis gwerthwr gyflwyno'r tabl TCO llawn, nid y pris caffael, gan mai'r pris caffael yn union yw'r rhif y cynlluniwyd achos ariannol y Llyfr Gwyrdd i atal adrannau rhag dibynnu arno'n unig. TCO hefyd yw'r enwadur gonest ar gyfer dyfarniadau [gwerth am arian](../value-for-money/) — mae gwerth am arian yn cymharu budd â chost, ac mae llinell gost wedi'i thanamcangyfrif yn chwyddo pob cymhareb gwerth am arian yn yr achos busnes.

## Peryglon

- **Cymhariaeth capex yn unig**: y gwall caffael mwyaf cyffredin — cymharu prisiau rhestr cyflenwyr heb ragolwg cost weithredu cyfatebol ar gyfer pob opsiwn.
- **Eithrio costau ymadael a mudo**: mae echdynnu data diwedd contract, ail-lwyfannu, a chosbau clymu gwerthwr yn llinellau TCO real sy'n anaml yn ymddangos yn yr achos busnes gwreiddiol.
- **Eithrio cost diogelwch a chydymffurfio**: mae cyflymder clytio, adnewyddu achrediad, a chost archwilio'n graddio yn ôl oedran a chymhlethdod system — gweler [gwerth seiberddiogelwch sector cyhoeddus](../public-sector-cybersecurity-value/) — ac fe'u gadewir allan yn rheolaidd o'r rhagolwg opex.
- **Cymhariaeth heb ddisgowntio ar draws opsiynau â phroffiliau cost gwahanol**: mae cymharu opsiwn trwm ar capex ag un trwm ar opex heb ddisgowntio yn ffafrio'n systematig pa bynnag opsiwn sy'n digwydd gohirio mwy o gost i flynyddoedd diweddarach.

## Ffynonellau

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
