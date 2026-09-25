# Dadansoddiad Cost-Effeithiolrwydd yn y Llywodraeth

Mae dadansoddiad cost-effeithiolrwydd (DCE) yn cymharu costau gwahanol ffyrdd o gyflawni'r *un*
canlyniad, wedi'i fynegi mewn unedau naturiol — cost fesul person digartref a gaiff dai, cost fesul
disgybl a gyrhaeddir at y safon ddisgwyliedig, cost fesul tunnell o CO2 a leihawyd — heb drosi'r
canlyniad ei hun yn arian.

## Pam mae hyn yn bwysig

Mae'r Llyfr Gwyrdd yn trin DCE fel y dull wrth gefn pan fo gofyniad
[dadansoddiad cost-budd cymdeithasol](../social-cost-benefit-analysis/) i brisio pob budd yn mynd yn
fwy na dim ond anodd — yn anonest — lle byddai rhoi pris credadwy ar ganlyniad yn gofyn am dybiaethau
nad oes neb yn eu credu mewn gwirionedd
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Pennod 5, ar arfarnu opsiynau lle nad yw canlyniadau'n hawdd eu prisio). DCE yw'r dull sydd wedi'i
fenthyg yn fwyaf uniongyrchol o economeg iechyd — mae'n strwythurol union yr un fath â sut y mae NICE
yn cymharu triniaethau gan ddefnyddio cost fesul Blwyddyn Bywyd wedi'i Addasu o ran Ansawdd (QALY) —
ond wedi'i gymhwyso i raglenni cyhoeddus nad ydynt yn ymwneud ag iechyd: ymyriadau addysg fesul
pwynt-canlyniad disgybl, rhaglenni tai fesul aelwyd a arbedwyd rhag digartrefedd, rhaglenni
cyflogaeth fesul canlyniad swydd gynaliadwy.

Y rheswm bod DCE yn haeddu ei le ochr yn ochr â DCBC yn hytrach na chael ei lyncu ganddo yw bod
gorfodi gwerth ariannol ar rai canlyniadau yn cynhyrchu rhif sy'n ddigon manwl gywir i edrych yn
awdurdodol ac yn ddigon dadleuol i fod yn ddiwerth mewn dadl gyhoeddus — mae rhoi pris ar "blentyn yn
darllen at y safon ddisgwyliedig" yn gwahodd yn union y math o her sy'n dadreilio achos busnes gerbron
pwyllgor dethol. Mae DCE yn osgoi'r ddadl drwy wrthod ei chael: mae'n graddio opsiynau yn ôl cost
fesul uned o'r *canlyniad ei hun*, gan adael i'r achos strategol y farn wleidyddol ar wahân ynghylch
a yw'r canlyniad yn werth ei erlid o gwbl.

## Y fathemateg

```
Cymhareb cost-effeithiolrwydd (gyfartalog) = Cyfanswm cost / Cyfanswm unedau canlyniad a gyflawnwyd

Cymhareb cost-effeithiolrwydd gynyddrannol (ICER), yn cymharu opsiwn A ag opsiwn B:
ICER = (Cost_A − Cost_B) / (Canlyniad_A − Canlyniad_B)

Gweithdrefn:
1. Sefydlu uned y canlyniad a'r dull mesur yn gyson ar draws pob opsiwn a gymherir.
2. Costio pob opsiwn ar yr un sail (gweler ../green-book-appraisal/, yr achos
   ariannol) dros yr un gorwel amser.
3. Diystyru opsiynau a orchfygwyd: mae unrhyw opsiwn sy'n costio mwy fesul uned
   nag opsiwn rhatach sy'n cyflawni'r un canlyniad neu well yn cael ei ollwng.
4. Graddio'r opsiynau sy'n weddill yn ôl y gymhareb cost-effeithiolrwydd gynyddrannol,
   nid y gyfartalog.
```

Ni all DCE, ar ei ben ei hun, ddweud a yw rhaglen yn werth ei hariannu o gwbl — dim ond pa un o sawl
dull o gyrraedd yr un nod sydd rataf fesul uned. Mae penderfynu a yw'r nod ei hun yn werth y gwariant
yn gofyn naill ai am droi'n ôl at DCBC (os oes prisiad credadwy ar gael) neu am farn wleidyddol/
strategol y tu allan i'r fathemateg. Lle na ellir yn wirioneddol grynhoi canlyniadau i un uned — am
fod rhaglen yn cynhyrchu sawl canlyniad sy'n bwysig mewn gwahanol ffyrdd — defnyddiwch
[ddadansoddiad penderfynu amlfeini](../multi-criteria-decision-analysis/) yn lle hynny.

## Enghraifft waith

**Awdurdod lleol**: mae cyngor yn cymharu tri dull o leihau cysgu allan, pob un wedi'i gostio dros
flwyddyn yn erbyn y canlyniad "unigolion a symudwyd i lety sefydlog am 6 mis neu fwy":

```
Opsiwn                              Cost       Canlyniadau   CEG cyfartalog
Housing First (dwys)                £900,000   60            £15,000/canlyniad
Hostel + cymorth symud ymlaen       £600,000   50            £12,000/canlyniad
Ymgysylltu + sector rhentu preifat  £350,000   20            £17,500/canlyniad

ICER, Hostel yn erbyn Ymgysylltu: (600k−350k)/(50−20) = £8,333 fesul canlyniad ychwanegol
ICER, Housing First yn erbyn Hostel: (900k−600k)/(60−50) = £30,000 fesul canlyniad ychwanegol
```

Mae Ymgysylltu wedi'i orchfygu ar gost gyfartalog gan Hostel, ond dim ond £8,333 fesul person
ychwanegol a gafodd dai y mae'r cam *cynyddrannol* o Ymgysylltu i Hostel yn ei gostio — yn rhad o'i
gymharu â cham Housing First, sy'n costio £30,000 am bob person ychwanegol y tu hwnt i'r hyn y mae
Hostel yn ei gyflawni. Dylai awdurdod sy'n gyfyngedig o ran cyllideb ac sy'n graddio i fyny ffafrio
ehangu Hostel cyn Housing First, er bod Housing First yn edrych yn well ar ei gymhareb gyfartalog ei
hun.

**Llywodraeth genedlaethol**: cymherir rhaglen dal-i-fyny llythrennedd ar draws tri model cyflenwi ar
sail "cost fesul disgybl sy'n cyrraedd y safon ddarllen a ddisgwylir yn ôl oedran": tiwtora un-i-un
(£1,800/disgybl), tiwtora mewn grwpiau bach (£700/disgybl), ac ymyriad digidol yn unig (£150/disgybl,
ond dim ond 40% o gyfradd canlyniad tiwtora grŵp bach fesul disgybl a gofrestrwyd, unwaith y'i
haddaswyd ar gyfer gostwng ymgysylltiad). Unwaith y'i haddaswyd ar gyfer cwblhau gwirioneddol, mae
digidol-yn-unig yn costio £375 fesul disgybl sy'n cyrraedd y safon — dyma'r rhataf o hyd, ond ni all
DCE ddweud a yw'r nifer llai absoliwt o ddisgyblion a helpwyd gan ddigidol-yn-unig, os cyflenwir ar yr
un gyllideb â thiwtora grŵp bach, yn gyfnewid derbyniol yn erbyn cyrraedd llai o ddisgyblion ar
ddyfnder mwy; barn ddosbarthiadol yw honno y mae DCE yn ei throsglwyddo'n ôl i'r rhai sy'n
gwneud penderfyniadau.

## Cysylltiad peirianneg feddalwedd

DCE yw'r fframwaith cywir pryd bynnag y bydd timau peirianneg yn gwerthuso dulliau cyflenwi ar gyfer
yr *un* canlyniad gwasanaeth — cost fesul hunaniaeth a wiriwyd yn llwyddiannus ar draws tri gwerthwr
gwirio hunaniaeth, cost fesul achos a ddosbarthwyd yn gywir ar draws dau ddyluniad awtomeiddio
gwaith achos, cost fesul diffyg hygyrchedd a ddatryswyd ar draws unioni mewnol yn erbyn contract
allanol. Y ddisgyblaeth y mae'n ei mewnforio'n uniongyrchol: diffinio uned y canlyniad cyn cymharu
costau (nid "tocynnau a gaewyd" — allbwn — ond "angen defnyddiwr wedi'i ddatrys mewn gwirionedd"), a
chyfrifo'r gymhareb gynyddrannol rhwng y system fyw ac amnewidyn arfaethedig bob amser, nid cost
gyfartalog pob system ar wahân. Gweler [canlyniadau yn erbyn allbynnau](../outcomes-vs-outputs/) a
[cost fesul canlyniad](../cost-per-outcome/).

## Peryglon

- **Cymharu cymarebau cyfartalog, nid rhai cynyddrannol, wrth benderfynu ar ehangu.** Fel y dengys yr
  enghraifft cysgu allan, nid yr opsiwn â'r gymhareb gyfartalog orau yw'r uned canlyniad rataf i'w
  brynu nesaf bob amser.
- **Dewis uned canlyniad sydd mewn gwirionedd yn allbwn.** Mae "atgyfeiriadau a wnaed" neu "sesiynau
  a gyflenwyd" yn mesur gweithgarwch, nid y canlyniad y mae'r rhaglen yn bodoli i'w gynhyrchu; mae
  DCE ar allbynnau'n cynhyrchu rhif sy'n edrych yn hyderus ond sy'n ateb y cwestiwn anghywir.
- **Cymharu ar draws canlyniadau gwirioneddol wahanol.** Nid yw DCE ond yn ddilys pan fo pob opsiwn
  yn targedu'r un canlyniad wedi'i fesur yr un ffordd; mae cymharu "cost fesul person digartref a
  gaiff dai" yn erbyn "cost fesul person sy'n gadael gofal mewn tenantiaeth sefydlog" angen mesur
  canlyniad generig neu
  [ddadansoddiad penderfynu amlfeini](../multi-criteria-decision-analysis/), nid DCE.
- **Anwybyddu parhad canlyniadau.** Nid yw opsiwn rhatach sy'n cynhyrchu canlyniadau nad ydynt yn
  para (disgybl sy'n dirywio ar ôl i'r ymyriad ddod i ben) mewn gwirionedd yn fwy cost-effeithiol
  unwaith y'i mesurir dros orwel cymaradwy; cydweddwch y cyfnod dilynol ar draws yr opsiynau a
  gymherir.

## Ffynonellau

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" — y
  dull cost-effeithiolrwydd y mae'r addasiad llywodraeth hwn wedi'i fenthyg ohono.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Tystiolaeth cost-effeithiolrwydd ar ymyriadau
  digartrefedd. <https://whatworks-homelessness.org.uk/>
