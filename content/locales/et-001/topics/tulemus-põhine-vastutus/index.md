# Tulemus-põhine vastutus (OBA)

Tulemus-põhine vastutus, mida ka kutsutakse Results-Based Accountability (RBA), on Mark Friedmani raamistik kahe küsimuse eraldamiseks, mida avaliku sektori raporteerimine harjumuslikult kokku segab: "kas populatsioon on hästi?" (populatsiooni-vastutus) ja "kas see spetsiifiline programm toimib hästi?" (jõudlus-vastutus). Nende kahE segaMine on, Friedmani jutustuses, üks levinuM põhjus, miks hästi-juhitud programme süüDistataKse populatsiooni-trendiDeS, mida neil mitte kunagi ei olnud võimu liigutada.

## Miks see on oluline

Friedman sätestaS raamistiku *Trying Hard Is Not Good Enough* (2005), argumenteeriDES, et enamik avalikKu raporteerimiST uputab otsustajaid kas populatsiooni-tasandi statistikaSSE, mida ükski asutuS ei kontrolli (teismeliSE-raseduSe määr, töötuSe-määr, oodatav eluPikkuS), või uputab neid programmi-tasandi aktiivsuSe-loenDeSSE (kliendid nähtud, suunamised tehtud), mis ei ütle midagi selle kohta, kas kelleGi elu paranes. RBA panuS on väike, distsiplineeritud vokabulaar, mis hoiab need kaks lahus: populatsiooni-tulemused (heaolu-tingimused tervikuLe populatsioonile, nagu "lapsed sünnivad tervena") kuuluvad mitte ühELe asutuSeLe ja nõuavad mitmete partnerite koos liikumist; jõudlus-mõõdikud (kui hästi spetsiifiline programm teenindab oma spetsiifilisi kliente) kuuluvad ühele asutuSeLe ja peaksid olema hinnatud ainult sellE vastu, mida see asutus tegelikult saab mõjutada. Friedmani "kolm jõudlus-küsimust" — kui palju me tegime, kui hästi me selle tegime, ja on keegi parem-olekuS? — on nüüd manustatuD üle Ameerika osaRiigiDe ja maaKondadE inimTeenuste-kontrahEerimiSe ja, RBA-tasakaalustatud konsultatsiooni- ja tööKalu Clear Impact kaudu, laialDaseLt kasutatuD Ühendkuningriigi ja Commonwealth kohaliku-valitsuse tellimiseS. Praktilised panuSed on lepingulised: eluasemeProgrammi ei peaks rahastamaTa jätma, sest linna kodutuSe-määr tõuSiS makroEkonoomiliSteST põhjusTeST väljaspool selle ulatust, kuid see absoluutselt peaks olema rahastamaTa jäetud, kui selle enda kliente ei majutataKse.

## Arvutus

```
PopulatsiooniVastutus ("suur pilt," mida kogukond, regioon,
või rahvas jagab):
  Tulemus      — heaolu-tingimus (nt "elanikud on
                majanDusLikKu kindlustatud")
  Indikaator(id) — mõõdik sellest tingimuSest (nt
                 töötuSe-määr, keskmine leibkonna-sissetulek)
  → ükski üksik programm ei oma indikaatorit; liikumine
    nõuab mitmeid panustajaid

JõudlusVastutus (mille eest üks programm on vastutaV):
  Kui palju me tegime?      — aktiivsuSe-volümen (teenindatud
                              kliendid, tarnitud ühikud)
  Kui hästi me selle tegime? — kvaliteet/efektiivsus (%
                              programmi lõpetavaD, kulu
                              kliendi kohta)
  On keegi parem-olekuS?    — tulemus, mis loeb (% tööHõiveS
                              6 kuud pärast programmi,
                              enne/pärast või vastu
                              võrdluSGrupiLe)

Programm hinnataKse kolmanda jõudlus-küsimuse pealT, mitte
kunagi otse populatsiooni-indikaatoriL, vÄlja arvaTud juhul,
kui selle skaalA ja disain saaKs plausibLiselt liigutada
seda üksi.
```

## Läbitöötatud näide

**Linna-rahastatuD tööHõiveToetuSe programm**, 500 osalejat/aastas, kontraheeritud kohaliku omavalitsuse poolt RBA-stiiLiSe jõudlus-raamistikU all:

```
PopulatsiooniIndikaator (kontekst, ei programmi scorecard):
  LinnA töötuSe-määr: 6,2% (tõuSnud 5,8%-St eelmisel aastal,
  tingitud fabriKa-sulgemiSest väljaspool programmi kontrolli)

JõudlusMõõdikud (programmi tegelik vastutus):
  Kui palju:    500 osalejat registreeritud (eesmärk 480) —
                saavutatud
  Kui hästi:    78% lõpetamiSe-määr; kulu lõpetaja kohta =
                £340 000 / 390 lõpetajat ≈ £872
  Parem-olekuS: 390 lõpetajaST, 260 püsivaS tööHõiveS 6 kuuGa
                = 66,7% versus sobitatud võrdlusGrupi 41%
                (vaata kontrafaktuaalne-analüüs)
```

PopulatsiooniVastutuSe loeTuNa näeb programm välja, nagu see ebaõnnestuks — linna töötuSe-määr tõusiS selle vahil. RBA jõudlus-vastutuse loeTuNa õnnestub programm: see tabaS oma volümeni-eesmärgi, hoiDiS kvaliteedi stabiilsEna, ja tootiS tööHõive-tulemuSe 25,7 protsendipunkti üle sobitatud võrdlusGrupi, samal ajal, kui populatsiooni-indikaator liikuS põhjusteL (fabriKa-sulgemine) täielikult väljaspool programmi kontrolli.

## Seos tarkvaraarendusega

RBA kaardistub otse tuntud SRE-distinktsiooniLe: populatsiooni-indikaatorid on nagu äri-tasandi north-star-mõõdikud, mida mitte ükski üksik inseneriMeeskond ei oma otsa-otsaNi (firma-tulu, turuOsa), samal ajal, kui jõudlus-mõõdikud on nagu meeskonna oma SLOd — asjad, mida sEE meeskonna disainiOtsused tegelikult liigutavad. Dashboard, mis raporteerib mõlemat märgistamaTa, kumb on kumb, inviteerib täpselt sellE valeTõlgendamise, mida RBA ehitati ennetaMA: valveInsener, keda süüDistataKse mõõdikuST, mida sõltuvuSMeeskond kontrollib. Tellides või ehitaDES raporteerimisRiistaD tulemus-kontrahtideLe, ehita "kui palju/kui hästi/parem-olekuS" triAaD esmaKlassi, separately-filtreeritavaTeKs väljadeKs, selle asemel, et kasutada üksik segatuD KPI-t — see on sama distsipliin, mis on eraldaDES juhtivaD ja mahaJäävaD indikaatorid [avaliku sektori KPId'eS](../avaliku-sektori-kpid/). RBA on ka vastutuS-loogika [tasuMiSe-tulemuste-eest ja sotsiaalseD-mõju-võlakiriaD](../tasumine-tulemuste-eest-ja-sotsiaalsed-mõjuvõlakirjad/) all: PbR-leping saab fair maksta ainult "parem-olekuS"-jõudlus-mõõdikuL, mitte kunagi populatsiooni-indikaatoriL, vÄlja arvaTud juhul, kui interventsioon on genuinely domineeriv driver sellest.

## Lõksud

- **Programmi maksmine või karistamine vastu populatsiooni-indikaatoriLe, mida see ei saa kontrollida.** See on üksiK viga, mida RBA eksisteerib ennetaMa; jälgi alati, kas programm on major või minor panustaja populatsiooni-tulemusse, enne kui tagajärgi sellega seotakse.
- **"Kui palju" raporteerimine, nagu oleks see "parem-olekuS".** AktiivsuSe-loenDiD (kliendid näHtud) on lihtsaimAD andmed koguDa ja kõige vähem informatiivseD; nõua, et "on keegi parem-olekuS" küsimuSele vastatakse rigi tulemus-andmeteGa, ideaalSelt vastu kontrafaktuaaliLe (vaata [kontrafaktuaalne analüüs](../kontrafaktuaalne-analüüs/)).
- **RBA-indikaatorite käsitlemine fikseeritud igavesti.** Friedmani meetod on selgeSõnaliselt iteratiivne — "andmed, lugu, mis töötab, tegevusPlaan" tsükkel — mitte ühekordne scorecard-disaini harjutuS.
- **Puudub võrdlusGrupp "parem-olekuS" jaoks.** Enne/pärast muutuS kontrafaktuaaliTa sammutab programmi efekti trendiGa, mida populatsioon oleks näidanud niikuinii.

## Allikad

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
