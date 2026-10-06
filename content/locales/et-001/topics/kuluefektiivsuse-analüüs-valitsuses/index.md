# Kuluefektiivsuse analüüs valitsuses

Kuluefektiivsuse analüüs (CEA) võrdleb alternatiivsete viisiDE kulusid *sama* tulemuse saavutamiseks, väljendatuNa naturaalseteS ühikuteS — kulu tänaValmagaja kohta, kes on majutatud, kulu õpilase kohta, kes on viidud oodatuD standardiNi, kulu CO2 tonni kohta, mis on vähendatud — konverteerimata tulemust ise rahaKs.

## Miks see on oluline

Green Book käsitleb CEA-d tagaVaruD meetodiNa, kui [sotsiaalse kulu-kasu-analüüsi](../sotsiaalse-kulu-kasu-analüüs/) nõue iga kasu monetiseerida muutub mitte ainult raskeKs, vaid ebaausaKs — kus usutava hinna panemine tulemuSeLe nõuaks eeldusi, mida keegi tegelikult ei omA (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Peatükk 5, variantideHindamisest, kus tulemused ei ole kergesti monetiseeritavaD). CEA on meetod, mis on otseSeMalt laenatud tervishoiuEkonoomikaSt — see on struktuuriLiselt identiline sellega, kuidas NICE võrdleb ravisid, kasutaDES kulu Quality-Adjusted-Life-Year kohta — kuid rakendatud mitte-tervishoiuListeLe avaLikELe programmidEle: haridusInterventsioonid õpilase-tulemuse-punkti kohta, eluasemeProgrammid leibkonna kohta, mis on hoitud kodutuSeSt, tööHõiveProgrammid püsiva tööTulemuse kohta.

Põhjus, miks CEA väärib oma kohta SCBA kõrval, mitte selle alla kuuludeS, on, et rahaLise väärtuse sundimine mõneLe tulemuSeLe toodab numbri, mis on piisavalt täpne näivaKs autoriteetseKs ja piisavalt vaieldav, et olla väärtuSetu avalikus debatiS — hinna panemine "lapse lugemine oodatuD standardiL" kutsub esile täpselt sellise väljaKutse, mis rikub äriJuhtumi select committee'S. CEA väldib vaidlust, keeldudeS selle pidamiSest: see rangjastab variandid kulu *tulemuse ise* ühiku kohta, jättes eraldi poliitiliseS hinnanguSe selle kohta, kas tulemus on üldse väärt taotlemist, strateegiliSe juhtumi kätte.

## Arvutus

```
Kuluefektiivsuse-suhe (keskmine) = Kogu kulu / Kogu saavutatud
                                   tulemuse-ühikud

Lisanduv kuluefektiivsuse-suhe (ICER), võrreldaDES variant A
variandiga B:
ICER = (Kulu_A − Kulu_B) / (Tulemus_A − Tulemus_B)

Protseduur:
1. Fikseeri tulemuse-ühik ja mõõtmisMeetod kõigi võrreldavate
   variantide üle.
2. Kuluta iga variant sama aluseL (vaata
   ../green-book-appraisal/, finantsJuhtum) üle sama
   ajaHorisondi.
3. Loobu domineeritud variantideSt: iga variant, mis maksab
   rohkem ühiku kohta kui odavaM alternatiiv, mis saavutab
   sama või parema tulemuse, kukutatakse.
4. Rangjasta allesJäänud variandid lisanduva, mitte keskmise,
   kuluefektiivsuse-suhteGa.
```

CEA ei saa, iseEnesest, öelda, kas programm on üldse rahastamist väärt — ainult, kumb mitmest lähenemiseSt samaLe eesmärgiLe on odavAm ühiku kohta. Otsustamine, kas eesmärk ise on kulutust väärt, nõuab kas tagasi-konverteerimist SCBA-ks (kui usutav väärtustamine eksisteerib) või poliitiList/strateegiList hinnangut väljaspool matemaatikat. Kus tulemused tõepoolest ei saa redutseerida ühte ühikuKs — sest programm toodab mitu tulemust, mis loevad erinevaTeL viisidel — kasuta [multikriteeriumi-otsuste-analüüsi](../multikriteeriumi-otsuste-analüüs/) selle asemel.

## Läbitöötatud näide

**Kohalik omavalitsus**: linnavalitsus võrdleb kolme lähenemist tänaValmagamise vähendamiseKs, igaüks kuluArVutatuD üle ühe aasta tulemuse "indiviidid, kes on liikunud püsivaSSE elamispinnaSSE 6+ kuuks" vastu:

```
Variant                        Kulu       Saavutatud      Keskmine
                                           tulemused       CER
Housing First (intensiivne)    900 000£   60              15 000£/
                                                            tulemus
Hostel + edasi-liikumise
toetus                         600 000£   50              12 000£/
                                                            tulemus
Outreach + privaatne
rendiSektor                    350 000£   20              17 500£/
                                                            tulemus

ICER, Hostel vs Outreach:  (600k−350k)/(50−20) = 8333£
lisanduva tulemuse kohta
ICER, Housing First vs Hostel: (900k−600k)/(60−50) = 30 000£
lisanduva tulemuse kohta
```

Outreach on keskmiselt domineeritud Hosteli poolt, kuid *lisanduv* astE Outreach'ilt Hostelile maksab vaid 8333£ lisanduva majutatud inimese kohta — odav suhteliselt Housing First astmeKs, mis maksab 30 000£ iga lisanduva inimese eest üle sellE, mida Hostel saavutab. EelArveLiselt-piiratud asutus, kes skaleerib, peaks eelistama Hosteli laiendamist enne Housing First'i, isegi kui Housing First näeb paremana välja oma keskmise suhte põhjal.

**Riiklik valitsus**: kirjaOskuse-järeleAitamise programm on võrreldud üle kolme tarneModeli "kulu õpilase kohta, kes jõuab vanusele-oodatuD lugemiSStandardiLe": üks-ühele-korrepetiitorlus (1800£/õpilane), väikse-grupi-korrepetiitorlus (700£/õpilane), ja kunoDigitaalne-interventsioon (150£/õpilane, kuid ainult 40% väikse-grupi-korrepetiitorluSe tulemuse-määraSt õpilase kohta, kui kohandatud osaleMisE languSe eest). Kord kohandatud tegelikuLe lõpetamiseLe, maksab kunoDigitaalne 375£ õpilase kohta, kes jõuab standardiLe — ikka odavaim, kuid CEA ei saa öelda, kas väiksem absoluutne arv õpilasi, keda kunoDigitaalne aitab, kui tarnitud samaL eelArveL kui väike-grupp, on vastuVõetav vahetus väikseMa arvu õpilaste aitamise vastu suuremaL sügavuseL; see on jaotuslik hinnang, mille CEA annab tagasi otsuseTegijaTeLe.

## Seos tarkvaraarendusega

CEA on õige raamistik, kui inseneriMeeskonnad hindavad tarneLähenemisi *samale* teenuseTulemuseLe — kulu edukalt-verifitseeritud identiteedi kohta üle kolme identiteediVerifikatsiooniTarnija, kulu korrektselt-triaaziTuD juhtumi kohta üle kahe juhtumiTöö-automatiseerimisDisaini, kulu lahendatud tugevuse-defekti kohta üle maja-sisese versus lepingulisE remediatsiooni. DistsipliIn, mida see otseSeLt importib: defineeri tulemuse ühik enne kulude võrdlemist (mitte "suletuD piletid" — väljund — vaid "kasutajaBehov tegelikult lahendatud"), ja arvuta alati lisanduv suhe live süsteemi ja pakutuD asendusE vahel, mitte igaüheL süsteemiL keskmine kulu isoleeritult. Vaata [tulemused versus väljundid](../tulemused-versus-väljundid/) ja [kulu tulemuse kohta](../kulu-tulemuse-kohta/).

## Lõksud

- **Keskmise, mitte lisanduva, suhte võrdlemine laienDuse otsustamisel.** Nagu tänaValmagamise näide näitab, ei ole parimA keskmiSE suhteGA variant alati odavAm järgmine tulemuse ühik ostmiseKs.
- **TulemuSe ühiku valimine, mis tegelikult on väljund.** "Tehtud suunamised" või "tarnitud sessioonid" mõõdavad tegevust, mitte tulemust, mida programm eksisteerib tootma; CEA väljunditeL toodab enesekindlalt näivaD numbri, mis vastab valele küsimuSele.
- **Võrdlemine üle tõepoolest erineva tulemuSte.** CEA on valiiD ainult, kui iga variant sihib sama tulemust, mõõdeTuNa samal viisil; "kulu tänaValmagaja kohta, kes on majutatud" võrdlemine "kulu hoolDeLt-lahkuja kohta stabiilseS üürisuhtEs" vajab generiList tulemusMõõdikut või [multikriteeriumi-otsuste-analüüsi](../multikriteeriumi-otsuste-analüüs/), mitte CEA.
- **TulemuSe vastupidavuse ignoreerimine.** OdavAm variant, mis toodab tulemusi, mis ei püsi (õpilane, kes regresseerub pärast interventsiooni lõppu), ei ole tegelikult kuluEfektiivseM, kord mõõdetuNa üle võrreldava horisondi; sobita jälgiMisPerIood üle võrreldavate variantide.

## Allikad

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
