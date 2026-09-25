# Dadansoddiad Cost-Budd Cymdeithasol (DCBC)

Mae dadansoddiad cost-budd cymdeithasol yn trosi pob cost a budd sy'n deillio o bolisi neu raglen —
rhai marchnad ac an-farchnad — yn un uned ariannol gyffredin, yn disgowntio llifau'r dyfodol i'w
gwerth presennol, ac yn eu net-io i gynhyrchu un rhif: a fydd y cynnig hwn yn gwneud cymdeithas yn
well ei byd, a faint yn well?

## Pam mae hyn yn bwysig

DCBC yw'r dull meintiol rhagosodedig yn achos economaidd
[arfarniad y Llyfr Gwyrdd](../green-book-appraisal/): mae canllawiau Trysorlys EM yn ei gwneud yn
ofynnol i gynigion ddangos gwerth cymdeithasol presennol net (GCPN) cadarnhaol lle bynnag y gellir
prisio buddion yn gredadwy, gan ddefnyddio parodrwydd i dalu fel yr egwyddor brisio sylfaenol ar
gyfer nwyddau an-farchnad
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Pennod 5). Y ddisgyblaeth y mae'n ei gorfodi yw nad yr un ymarferiad yw dadansoddiad cost-budd
"cymdeithasol" ag arfarniad buddsoddi'r sector preifat: rhaid iddo gynnwys costau a buddion sy'n
disgyn ar drydydd partïon nad ydynt yn rhan o'r trafodyn (allanolderau), rhaid iddo ddefnyddio'r
[gyfradd ddisgowntio gymdeithasol](../social-discount-rate/) yn hytrach na chost cyfalaf fasnachol,
a dylai gymhwyso [pwysoli dosbarthiadol](../distributional-weighting/) lle mae punt yn cyfrif mwy i
aelwyd dlotach nag i un gyfoethocach.

Lle mae DCBC yn methu yw'n union lle mae ei beirniaid yn disgwyl: mae'n rhaid prisio nwyddau heb
gyfatebiaeth farchnad — aer glân, cydlyniant cymdeithasol, gwerth bywyd a arbedwyd — gan ddefnyddio
dulliau [dewisiadau a ddatganwyd](../stated-preference-valuation/) neu
[dewisiadau a ddatgelwyd](../revealed-preference-valuation/), neu drwy lunio
[pris cysgodol](../shadow-pricing/). Pan fo prisio'n destun dadl yn hytrach na dim ond yn anodd, mae'r
Llyfr Gwyrdd ei hun yn argymell troi at
[ddadansoddiad cost-effeithiolrwydd](../cost-effectiveness-analysis-in-government/) neu
[ddadansoddiad penderfynu amlfeini](../multi-criteria-decision-analysis/) yn hytrach na gorfodi rhif
nad oes neb yn ei gredu.

## Y fathemateg

```
GCPN = Σ [t=0 hyd T] (Budd_t − Cost_t) / (1 + r)^t

lle:
  Budd_t  = pob budd wedi'i brisio mewn blwyddyn t, gan gynnwys nwyddau
            an-farchnad wedi'u prisio drwy ddewisiadau a ddatganwyd/a
            ddatgelwyd neu bris cysgodol
  Cost_t  = pob cost wedi'i phrisio mewn blwyddyn t, gan gynnwys cost
            gyfle adnoddau (gweler ../opportunity-cost-in-public-spending/)
  r       = cyfradd ddisgowntio gymdeithasol (Trysorlys EM yn gosod 3.5%
            yn gostwng i gyfraddau is y tu hwnt i flwyddyn 30, yn unol ag
            Atodiad A y Llyfr Gwyrdd)
  T       = cyfnod arfarnu

Cymhareb budd-cost (CBC) = Σ GP(Buddion) / Σ GP(Costau)
```

Mae CBC uwch nag 1 (neu GCPN uwch na sero) yn dynodi gwerth cymdeithasol net. Mae categorïau
gwerth-am-arian y Llyfr Gwyrdd (fel y'u defnyddir mewn arfarniadau trafnidiaeth a seilwaith) yn
labelu amryw amrediadau CBC: mae is na 1.0 yn wael o ran gwerth am arian, 1.0–1.5 yn isel, 1.5–2.0
yn ganolig, 2.0–4.0 yn uchel, a thros 4.0 yn uchel iawn. Mae dadansoddiad sensitifrwydd — ailredeg y
GCPN o dan dybiaethau besimistaidd ac optimistaidd — yn orfodol, nid yn ddewisol, gan fod buddion
an-farchnad wedi'u prisio yn cario bandiau ansicrwydd eang.

## Enghraifft waith

**Awdurdod lleol**: mae cyngor yn arfarnu buddsoddiad o £3m mewn rhwydwaith beicio a cherdded newydd
dros gyfnod arfarnu o 20 mlynedd ar gyfradd ddisgownt o 3.5%.

```
Costau: £3m cyfalaf ym mlwyddyn 0, £50,000/flwyddyn cynnal a chadw (blynyddoedd 1-20)
GP(cynnal a chadw) ≈ £50,000 × 14.2 (ffactor blwydd-daliad 20 mlynedd ar 3.5%) ≈ £710,000
Cyfanswm GP(costau) ≈ £3.71m

Buddion (pob un wedi'i brisio drwy offer prisio cyhoeddedig DfT/WHO):
  Budd iechyd o fwy o weithgarwch corfforol: £180,000/flwyddyn
  Llai o absenoldeb: £40,000/flwyddyn
  Datdagfeu (llai o deithiau car): £60,000/flwyddyn
  Cyfanswm llif y buddion: £280,000/flwyddyn
GP(buddion) ≈ £280,000 × 14.2 ≈ £3.98m

GCPN = £3.98m − £3.71m = +£0.27m
CBC = 3.98 / 3.71 = 1.07 → gwerth am arian "isel"
```

Mae'r cynllun yn clirio'r bar, ond o drwch blewyn yn unig; mae rhediad sensitifrwydd ar amcangyfrif
budd-iechyd 20% yn is (yn adlewyrchu ansicrwydd gwirioneddol wrth brisio gweithgarwch corfforol) yn
troi'r CBC yn is na 1.0 — a dyna'n union pam y mae'r Llyfr Gwyrdd yn ei gwneud yn ofynnol cyhoeddi'r
tabl sensitifrwydd ochr yn ochr â'r prif rif, nid dim ond yr amcangyfrif canolog.

**Elusen**: gwerthusir rhaglen atal marwolaethau babanod sy'n costio £500,000/flwyddyn gan ddefnyddio
gwerth bywyd ystadegol (VSL) — pris cysgodol, nid pris marchnad a arsylwyd — o oddeutu £2.1m (ffigur
2023 Trysorlys EM wedi'i ddiweddaru, sydd ei hun wedi'i seilio ar astudiaethau dewisiadau a
ddatganwyd). Mae osgoi un farwolaeth babanod y flwyddyn yn erbyn cost o £500,000 yn rhoi CBC o 4.2,
sy'n gyfforddus o "uchel iawn" o ran gwerth am arian — ond mae'r canlyniad cyfan yn dibynnu ar y
ffigur VSL, a dyna pam mae'n rhaid i unrhyw DCBC sy'n defnyddio VSL ei ddatgelu fel tybiaeth, nid
fel ffaith.

## Cysylltiad peirianneg feddalwedd

DCBC yw'r fframwaith naturiol ar gyfer penderfyniadau buddsoddi mewn platfform a seilwaith mewn
meddalwedd llywodraeth — mae cymharu platfform hunaniaeth a rennir yn erbyn atebion adrannol pwrpasol,
er enghraifft, yn gofyn am brisio buddion fel llai o gost ymgofrestru dyblyg, llai o dwyll, a
gwasanaeth cyflymach, nad oes gan yr un ohonynt bris marchnad ar eu pen eu hunain. Dylai peirianwyr
sy'n adeiladu'r gwasanaeth sylfaenol ddisgwyl i arweinwyr rhaglenni ofyn am fewnbynnau i'r dadansoddiad
hwn: costau uned trafodion (gweler [cost fesul trafodyn](../cost-per-transaction/)), cyfeintiau
disgwyliedig, a chostau dirywiad/amser segur. Y ddisgyblaeth bwysicaf i'w mewnforio: disgowntio
buddion y dyfodol, enwi'r llinell sylfaen wrthffeithiol yn benodol (gweler
[dadansoddiad gwrthffeithiol](../counterfactual-analysis/)), a byth â chyflwyno un amcangyfrif pwynt
heb ei amrediad sensitifrwydd.

## Peryglon

- **Cyfrif budd ddwywaith.** Mae cyfrif "amser a arbedwyd" a "chynhyrchiant a enillwyd o'r amser
  hwnnw" fel dwy linell budd ar wahân yn gorbwysleisio'r achos; y budd yw'r amser a arbedwyd, nid
  yw ei ddefnydd dilynol yn fudd ychwanegol oni bai bod tystiolaeth annibynnol yn cadarnhau hynny.
- **Hepgor costau a ddadleolwyd.** Nid yw cynllun sy'n symud tagfa o un ffordd i un arall, neu'n
  symud twyll o un sianel i un arall, wedi creu'r budd net y mae'r GCPN pennawd yn ei awgrymu —
  gweler [dadleoli a phriodoliad](../displacement-and-attribution/).
- **Defnyddio cyfradd ddisgownt breifat.** Mae cymhwyso cost cyfalaf fasnachol (dyweder 8–10%) yn
  hytrach na'r gyfradd ddisgowntio gymdeithasol yn tanbrisio'n gyson fuddion cyhoeddus tymor hir fel
  iechyd ac enillion amgylcheddol — gweler [cyfradd ddisgowntio gymdeithasol](../social-discount-rate/).
- **Prisio'r di-ddadl a chwifio llaw at y dadleuol.** Os yw dwy ran o dair o fudd cynnig yn arbediad
  effeithlonrwydd wedi'i brisio'n hyderus, ac un rhan o dair yn enillion llesiant wedi'u prisio'n
  simsan, mae'r GCPN pennawd yn cymysgu'n dawel rif caled â rhif meddal; adroddwch hwy ar wahân.

## Ffynonellau

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
