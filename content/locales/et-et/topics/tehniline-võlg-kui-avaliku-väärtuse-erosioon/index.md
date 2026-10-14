# Tehniline võlg kui avaliku väärtuse erosioon

TehniLine võlg on Ward Cunningham'i 1992. aasta metafoor implitseeritud tuleviku-kuluLe oportuunistlikuTeST minevikU-koodimisE-otsusteST: **põhiOsa** (võlgUD paranDuS-töö) ja **intress** (jooksev lohistus, millE see avaldab tarnele). Legacy-statslikuS IT-ejendis makstakse see intress otse avaliKuST väärtuSeST — aeglaseM statutoorse-muudatuSe-tarne, kõrgeMad ebaõnnestumisE-määrad kodanikuLe-vendaTuD teenustes, ja kahanev basseiN inimesi, kes saaVaD süsteemi üldSe ohutult puutuDA.

## Miks see on oluline

Legacy mainframe- ja COBOL-ajastU-süsteemid üle Ühendkuningriigi statslike osakondadE — HMRC ja DWP kõige tsiteeritumAte seas — kannaVaD hästi-dokumenteeritud ja eskaleeruVa riski, millE National Audit Office on flageerinud korDuvalt, sealhulgas oma raportis *Digital Transformation in Government* (<https://www.nao.org.uk/>): vananeVaD platVormid, mis on kuluKaD muuTA, üha raskeMaD turvaTA, ja sõltuVaD spetsialist-tööJõuST, mis pensioneerub kiireMini, kui sedA asendatakse. Erinevalt privaatseKtori-backLogiST, istuB see võlg otse kodanike ja nende statutoorseTE õigustE vahel — ühiKustoetuSe-arvutuSE-motoR, mida ei saaB ohutult muuTA, on poliitika-tarne-piirang, ei lihtsalt insenerI-ebameeldivuS. 2013. aasta Universal-Credit-IT-programmi restardi, mil National Audit Office leiuS, et originaalne ehitus ei tarniKs value-for-money'd ja substantsiaalne osA software-aktivaST tuliS maHaKanDaDa, on canoniline näide uPrisSetud tehniliseST võlaST, mis jõuab kätte live, ministri-nähtaVaLe avalikuLe programmiLe.

## Arvutus

```
SQALE-põhiOsa = Σ violatsioonidE üle (paranDuSe-aeg) ×
               arendaja-kulu-määr
TehniliSe-võla-suhe (TDR) = paranDuSe-kulu / taas-arendamiSe-
                           kulu × 100
                           (SonarQube-hinnangud: A ≤5%, B
                           ≤10%, C ≤20%, D ≤50%)

Intress (number, mis õigustab tagasimaksET):
  intress/aastas = Δ tarne-kiirus × väärtus ühikuLe kiirust
                  + Δ kodanikuLe-vendaTuD-incidentI-määr ×
                    kulu incidentI kohta
                  + spetsialist-oskusteGa-preemium ×
                    mõjutatuD personali-arv

TagasimaksE-casE = PV(väldituD intress üle horisondi) −
                   paranDuSe-kulu
                   (diskonteeritud Green-Book-sotsiaalseL
                   diskontomäärAl, vaata social-discount-
                   rate.md)
```

PõhiOsa väljendab vastutust; intress on number, mis teeb investeeringu-juhtumi avaliku-raamatuPidamise-komiteeLe.

## Läbitöötatud näide

250 000-reaLinE nõuDeTe-töötlemiSE-motor, kirjutatuD legacy-4GL-is. KasutaDes CAST-Appmarq-benchmarkI roughLy $3,61 tehniliSE-võla-põhiOsaST kood-rea kohta (≈£2,85 tüüpiliseL konversiooniL):

```
PõhiOsa ≈ 250 000 × £2,85 ≈ £712 500
TDR ≈ 16% (hinnang C)
```

Mõõdetud intress: osakond säilitab kolm spetsialist-kontraktoRit 40%-liSeGa päevaMäära-preemiuMiGa standardSeTE seenioR-insenerI-määraDe üle, sest majaSisesEd oskused on attriteeruNuD — ekstrA £180 000/aastas kuuE-persoNi-meeskonnaL. Süsteem põhjustab ka neli major-töötlemiSe-katkestust/aastas, kumbki suspendeeriDes otsuseid roughLy 5000 taotlejaLe ja redirecteeriDes nad kontaktiKesKusESSE roughLy £25/kõne juures:

```
Intress ≈ £180 000 (oskusteGa-preemium)
        + 4 × 5000 × £25 = £500 000 (redirecteeritud-
          kontakti-kulu)
        ≈ £680 000/aastas
```

HalveiMa-sooritajaTe-moodulite sihitud paranDuS maksab £1 200 000 ja on modelleeritud kärpiMaKs intressi 70%-GA:

```
Intressi vähenemine = 0,70 × 680 000 = £476 000/aastas
Payback ≈ 1 200 000 / 476 000 ≈ 2,5 aastat
```

Sihtimine on oluline: harva-puudutatuD koodi paranDamine ostab mitte midagi, sest intress koNtsentreerub seaL, kus muudatuSe-frekvents ja võla-densiteet mõlemad peaKivad.

## Seos tarkvaraarendusega

AvaLiku-väärtuse-omaRAamiStuS, mis opGradeerib tehniliSE-võla-juhtumi üle "kood on vana": väljenDa legacy-ejend inventariNa selleST, kuhu kaotatuD tarne-kapatsiteet koNtsentreerub, ja ühenda see explicit [koGu-omandiKuluGa valitsuse IT-s](../koguomandikulu-statslikus-it-s/), sest intress on operatiivne kulu, millE kuulub TCO-reaLe, ükskõik, kas finans on sedA kunagi küsinuD. Võla-rasKeD süsteemid kannavaD ka disproportsionaalSE [küberturvalisuSe](../statsliku-sektori-küberturvalisuse-väärtus/)-eksponeeringu, sest patch-kadents ja võla-densiteet korreleeruvaD — patchimatu legacy-süsteem on tehniline võlg, millE intress makstaKse incidentI-riskiS, ei naelDes. Ja igA paranDuS-versus-funktsioon-trade-off on ise [viivituSE-kulu](../viivituse-kulu-avalikes-programmides/)-otsus: võla tagasimaksmine viivitab järgmist statutoorSt muudatust, millEl on oma CoD, millE peab kaaluma vastu säästetud intressile.

## Lõksud

- **Ainult-põhiOsa-raporteerimine.** SuuR, hirmuTAv paranDuS-hinnang ühEta intressi-figuuriTa ei õigustA mitte midagi kulutuse-kinnitajaLe.
- **RiistaGa-genereeritud võla-figuuriD, võetud literAalSelt.** SQALE-stiiLiseD skänneriD loevaD reeglI-violatsioone; need missiVaD kuluKA võla-tüübi — arhitektuuri-otsused ja dokumenteerimaTa legacy-äriReeglid — samal ajal, kui flageerivaD triviAt.
- **"UuestiKirjutamine välDib selle kõik."** AsendusProgrammid peavaD läbima sama distsipliini, kui mistahes muu äriJuhtum — kontrafaktuaalne kulu, eduKuSe-tõenäosus, ja diskonteerimine — ei vabastust selleST, nagu 2013. aasta Universal-Credit-restart demonstreeriS.
- **Võla-null-utopism.** OptimaalnE võla-tase ei ole null; võlg on leVerage, mis ostis varaseMa tarne. LivE küsimus on alati intressi-määr, ei kas võlg eksisteerib üldSe.

## Allikad

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
