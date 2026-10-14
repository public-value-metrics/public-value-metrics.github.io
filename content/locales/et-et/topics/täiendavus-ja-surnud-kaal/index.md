# Täiendavus ja surnud kaal

Täiendavus küsib, kas interventsioon põhjustas tulemuse, mis muidu ei oleks juhtunud. SurnudKaal on selle peegel: tulemuse osa, mis oleks juhtunud niikuinii, isegi ilma programmi, toetuse, või subsiidiumita. Peaaegu iga valitsuse programmi või heategevusorganisatsiooni mõjuVäide ülehindab oma mõju, kuni surnudKaal on lahutatud, mistõttu Ühendkuningriigi hindamisJuhend käsitleb seda esimese ja kõige olulisema kohandusena igale pealKirjaNumbrile.

## Miks see on oluline

"Toetasime 500 ettevõtet kasvama" kõlab saavutuseN, kuid kui 300 neist ettevõtetest oleks kasvanud niikuinii — sest kohalik majandus taastus, sest neil olid teised rahastamisTeed, sest nad olid juba kasvuTrajektooril enne programmi algust — on programmi tegelik täiendav panus 200, mitte 500. HM Treasury Magenta Book ja kaua-kestnud HM Treasury/BIS "Additionality Guide" (algselt väljaTöötatud regionaalse arendUsE ja regeneratsiooniProgrammide jaoks, ja laialdaselt kasutatud üle Ühendkuningriigi valitsuse hindamise sellest ajast) formaliseerivad surnudKaalu esimese kohanduseNa standardses netoMõju järjestuses: brutoEfekt miinus surnudKaal, miinus nihutamine, miinus leke, kohandatud multiplikaatorEfektideks, võrdub netoTäiendav mõju. Selle sammu vaheleJätmine on üks levinum viis, kuidas avaliku ja sotsiaalsektori mõjuVäited inflatsioonitakse, kas sihilikult või mitte — toetusProgramm, mis mõõdab ainult brutoOsaleja-tulemusi, võrdluse-grupita, ei saa eristada oma mõju sellest, mis oleks niikuinii juhtunud.

SurnudKaal ei ole fikseeritud protsent; see sõltub täielikult kontrafaktuaalist konkreetse populatsiooni ja interventsiooni jaoks (vaata [kontrafaktuaalne analüüs](../kontrafaktuaalne-analüüs/)). Inglise regionaalse-arenduse hindamised varasemate Regional Development Agencies all leidsid tüüpiliselt surnudKaalu määrad vahemikus 20-60% sõltuvalt ettevõtteToetuse tüübist, mistõttu usaldusväärsed programmHindamised raporteerivad surnudKaal-kohandatud vahemiku, mitte ühte eeldatud näitajat, ja mistõttu rahastajad nagu National Lottery Community Fund ja Big Society Capital nõuavad toetuseSaajatelt surnudKaalu selgeSõnalist käsitlemist tulemusteRaportites, mitte brutoOsaleja-arvude raporteerimist.

## Arvutus

Standardne netoMõju kohandusJärjestus, nagu sätestatud Ühendkuningriigi hindamisJuhendis (Magenta Book; HM Treasury/BIS Additionality Guide; ESIF ja struktuurFondide hindamisJuhend):

```
BrutoTulemus
  − SurnudKaal       (mis oleks juhtunud niikuinii)
  − Nihutamine       (tegevus/kasu nihutatud mujalt, mitte
                      loodud — vaata nihutamine-ja-omistamine)
  − Leke             (kasu, mis jõuab sihtGrupist/alast
                      väljapoole)
  × Multiplikaator    (täiendav kaudne/indutseeritud
                      majandusTegevus, kus positiivne)
  = NetoTäiendav mõju
```

SurnudKaalu määr proportsioonina:

```
SurnudKaalu määr = tulemused, mis oleksid tekkinud ilma
                   interventsioonita / kõik vaadeldud
                   brutoTulemused

NetoTäiendavad tulemused = BrutoTulemused × (1 −
                           SurnudKaalu määr)
```

## Läbitöötatud näide

**EttevõtteToetuseGrandiProgramm**: regionaalne toetusSkeem raporteerib 500 toetatud ettevõttet suurendasid tööHõivet järgneval aastal, keskmiselt 3 töökohta igaüks — brutoVäide 1500 töökohta.

Sarnaste mitte-toetatud ettevõtete sobitatud võrdlusGrupp (vaata [kontrafaktuaalne analüüs](../kontrafaktuaalne-analüüs/)) näitab, et 40% toetatud ettevõtete tööHõiveKasvust oleks juhtunud niikuinii, põhineNa, kuidas sobitatud grupp toimis samal perioodil.

```
SurnudKaalu määr = 40%
NetoTäiendavad töökohad = 1500 × (1 − 0,40) = 900 töökohta
```

Programmi ausalt raporteeritav saavutus on 900 töökohta, mitte 1500 — 40%-line vähenemine puhtalt surnudKaalu kohandusEst, enne kui nihutamist või leket üldse arvestataksegi.

**Heategevusorganisatsiooni tööHõiveProgramm**: heategevusorganisatsioon paigutab 200 pikaAjalist töötut töökohtadele kuluga 600 000 £ (3000 £ paigutuse kohta, bruto). Riiklikud tööJõuTuruAndmed näitavad, et ilma mingi interventsioonita leiab ligikaudu 15% võrreldavaSt pikaAjaliSe töötuSe kohortiSt tööd samal perioodil loomuliku tööTuru liikumise kaudu.

```
SurnudKaalu määr = 15%
NetoTäiendavad paigutused = 200 × (1 − 0,15) = 170
Tegelik kulu täiendava paigutuse kohta = 600 000 £ / 170
                                        ≈ 3529 £
```

BrutoKulu-paigutuse-kohta näitaja (3000 £) alaHindab heategevusorganisatsiooni täiendava panuse tegelikku kulu ligikaudu 15% võrra.

## Seos tarkvaraarendusega

Täiendavus ja surnudKaal on olulised otse igaühele, kes ehitab mõjuMõõtmise- või toetusHaldusTarkvarA avalikuLe või sotsiaalsektoriLe:

- TulemusteRaporteerimisSüsteemid peaksid fikseerima võrdluse- või baasJoone-grupi disainilt, mitte ainult osaleja-tulemusi — kontrafaktuaali retroFitteerimine pärast süsteemi käivitamist ilma selleta on palju raskem kui jäädvustuse ehitamine algusest peale (vaata [kontrafaktuaalne analüüs](../kontrafaktuaalne-analüüs/)).
- Dashboardid, mis raporteerivad ainult brutoOsaleja-arve, ülehindavad süstemaatiliselt mõju rahastajateleJa järelevalveOrganiteLe; kus surnudKaalu hinnangud eksisteerivad (hindamisKirjandusest või võrdlusGrupist), peaks tarkvara esitama netoSt-surnudKaalust-näitaja koos brutoGa, mitte selle asemel.
- See ühendub otse [sotsiaalse tulu investeeringult](../sotsiaalne-tulu-investeeringult/)'ga, mille SROI-suhe on usutav ainult siis, kui surnudKaal (ja nihutamine) on lahutatud brutoVäidetud tulemustEst — SROI-kalkulaator, mis jätab selle samu vahele, toodab inflatsioonitud suhtarve, mis ei läbi kontrolli.

## Lõksud

- **BrutoTulemuste raporteerimine, nagu oleksid need kõik täiendavad.** See on üks levinum mõjuMõõtmise viga toetuse- ja programmRaporteerimises; küsi alati "oleks see juhtunud niikuinii?" enne pealKirjaNumbri avaldamist.
- **Eeldamine, et üks surnudKaalu-protsent kehtib kõikjal.** SurnudKaal varieerub tohutult sektori, populatsiooni, ja kohalike majandusTingimuste lõikes; kasuta võrdlusGruppi või sektori-spetsiifilist tõendust, mitte taaskasuta näitajat seosetuSt hindamisEst.
- **SurnudKaalu segiAjamine nihutamisega.** SurnudKaal on kontrafaktuaalsete tulemuste kohta samadele osalejatele; nihutamine on efektide kohta teistele inimestele või kohtadele — vaata [nihutamine ja omistamine](../nihutamine-ja-omistamine/). Kahe segiAjamine viib topelt-arvestamisele või alaArvestamisele kohanduses.
- **IseRaporteeritud surnudKaal osalejatelt.** Kasusaajatelt küsimine "oleks see juhtunud ilma meie abita?" toodab süstemaatiliselt madalaid surnudKaalu hinnanguid (osalejad kalduvad krediteerima programmi); sõltumatu võrdlusGrupp on palju usaldusväärsem.

## Allikad

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on deadweight, displacement, and leakage in structural-funds evaluation.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
