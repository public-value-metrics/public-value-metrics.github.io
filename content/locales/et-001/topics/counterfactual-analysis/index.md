# Kontrafaktuaalne analüüs

Kontrafaktuaal on hinnang selle kohta, mis oleks juhtunud interventsiooni puudumisel. Selle puudumisel ei saa vaadeldud muutust programmi käivitamise järel eristada muutusest, mis oleks juhtunud niikuinii — ei kontrafaktuaali, ei efekti tõendIt, ükskõik kui veenvad enne-ja-pärast numbrid näivad. HM Treasury Magenta Book käsitleb usutava kontrafaktuaali konstrueerimist mõjuHindamise kesksE metodoloogilisE ülesandeNa, olulisema kui mistahes muu üksik disainiValik.

## Miks see on oluline

"Kuritegevus langes 15% aastal pärast programmi sisseViimist" ei ole tõend, et programm töötas, kui sa ei tea, mis oleks kuritegevusega juhtunud ilma selleta — kuritegevus võis langeda 20% niikuinii seoseta majanduslike või demograafiliste trendide tõttu, mis tähendab, et programm tegelikult tegi asjad halvemaks kontrafaktuaali suhtes, hoolimata raw numbri paranemisest. See on üks levinum analüütiline viga avaliku sektori ja sotsiaalsektori mõjuVäidetes: enne/pärast võrdluse eksitav käsitlemine põhjuslikkuse tõendina. Magenta Book on selgeSõnaline, et mõjuHindamine eksisteerib kontrafaktuaalse küsimuse vastamiseks — "mis erinevuse see interventsioon tegi?" — ja selle vastamine nõuab hindamist, mitte ainult kirjeldamist, maailmast, mis ei juhtunud.

Erinevad meetodid konstrueerivad kontrafaktuaali erineva usalduseAstmega, ja valitsuse hindamisJuhend rangjastab need vastavalt. JuhuslikustatuD KontrollituD Katsed (RCT-d), kus indiviidid või alad on juhuslikult määratud interventsiooni saama või mitte, toodavad tugevaimA kontrafaktuaali, sest juhuslikustamine kindlustab, et ravi- ja kontrollGrupid erinevad, keskmiselt, ainult interventsiooni saamise osas. Cabinet Office ja What Works Network on propageerinud RCT-sid üle Ühendkuningriigi avaliku poliitika alates 2012. aasta "Test, Learn, Adapt" raportist Behavioural Insights Team'ilt, täpselt sellepärast, et nõrgemad disainid on tundlikud segavaTeguriteLe — vaadeldud erinevus võib peegeldada, kes otsustas osaleda, mitte programmi efekti. Kus juhuslikustamine on ebaPraktiline või ebaEetiline (nagu see sageli on statutoorse õigustatuSE programmide puhul, või kogu-populatsiooni poliitikaMuutuste puhul), sätestab Magenta Book selgeSõnalise hierarhia nõrgematest, kuid ikkagi kasulikuST alternatiividest: sobitatud võrdlusGrupid, erinevuste-erinevuste (difference-in-differences) disainid, regressiooni-katkevus (regression discontinuity) sobivuSPiiride ümber, ja, viimase abinõuna, lihtne enne/pärast võrdlus — selgeLt märgistatud nõrgimA tõendiVormiNa, kalduv segama programmi efekti kõige muu efektiGa, mis muutus samal ajal.

## Arvutus

Kontrafaktuaalne raamistus, rakendatav kõigi meetodite üle:

```
Hinnatud mõju = Tulemus(interventsiooniga) −
                Tulemus(kontrafaktuaal: interventsioonita)

EI:
Hinnatud mõju ≠ Tulemus(pärast) − Tulemus(enne)   [segab
                                   aega raviga]
```

Erinevuste-erinevuste (difference-in-differences), üks levinumaiD kvaSi-eksperimentaalseiD disainE valitsuse hindamises, isoleerib raviEfekti lahutaDES võrdlusGrupi oma enne/pärast muutuse:

```
DiD hinnang = [Tulemus(ravitud, pärast) − Tulemus(ravitud,
              enne)] − [Tulemus(võrdlus, pärast) −
              Tulemus(võrdlus, enne)]
```

See eemaldab mistahes trendi, mis on mõlemale grupile ühine (nt riiklik majandusNihe, mis mõjutab kõiki), jättes alles ainult diferentsiaalse muutuse, mis on omistatav interventsioonile.

## Läbitöötatud näide

**TööHõiveProgramm, enne/pärast (nõrk disain)**: tööToetusSkeem raporteerib, et osaleja tööHõive tõusis 40%-lt 55%-le üle aasta — naiivne järeldus "+15 protsendipunkti programmi tõttu."

**Sama programm, erinevuste-erinevused (tugevam disain)**: sobitatud võrdlusGrupp sarnasest mitte-osalejatest, võetud samaSt kohalikuSt tööTuruSt, näitab tööHõivet tõusvaNa 38%-lt 47%-le samal aastal (riiklik majanduse taastumine oli käimas).

```
Ravitud grupi muutus:  55% − 40% = +15 protsendipunkti
Võrdlus grupi muutus:  47% − 38% = +9 protsendipunkti

DiD hinnang (tõeline programmEfekt) = 15 − 9 = +6
                                      protsendipunkti
```

Aus omistatav efekt on 6 protsendipunkti, mitte 15 — rohkem kui pool ilmsest enne/pärast paranemisest oleks juhtunud programmist sõltumata, mida veab sama majanduse-taastumine, mis tõstis võrdlusGruppi.

**Regressiooni-katkevus, sobivuSPiir**: toetusSkeem on saadaval ainult ettevõtetele alla 50 töötajaga. Tulemuste võrdlemine ettevõtteteLe vahetult alla piiri (45-49 töötajat, sobivad) nende vastu vahetult üle sellE (50-54 töötajat, mitteSobivad) annab usutava kontrafaktuaali, sest ettevõtted mõlemal pool arbitraarset administratiivset lõiKEpunkti on muidu sarnased — piir, mitte mingi alusOlev ettevõtteOmadus, määrab sobivuse. 2000 £ keskmine tulemuse erinevus kahe grupi vahel, vaadeldud ainult piiri juures, on omistatav toetuSeLe palju suurema usaldusega kui lihtne kõigi sobivate versus kõigi mitteSobivate ettevõtete võrdlus (mis erinevad süstemaatiliselt suuruseS).

## Seos tarkvaraarendusega

Kontrafaktuaalne mõtlemine peaks kujundama, kuidas mõjuJälgimisSüsteemid ja hindamisTorustikud valitsuse ja sotsiaalsektori tarkvara jaoks on disainitud:

- Ehita võrdlusGrupi jäädvustamine süsteemi algusest peale — registreerides, kes olid sobivad, kuid mitte registreeritud, või sobitatud mitte-osaleja kohort — selle retroFitteerimisE asemel pärast, kui programm on juba jooksnud ja ainult enne/pärast andmed eksisteerivad.
- Kus juhuslikustamine on teostatav (faaSiline käivitamine, digiTeenus, mis on lubatud mõnele kasutajaLe enne teisi), instrumenteeri süsteem, et säilitada juhuslik määramine päritavaNa väljaNa; faaSiline käivitamine hävitab kogemata oma hindamisVäärtuse, kui määramisJärjekorda ei logita.
- See on fundamentaalne meetod [mõjuHindamisMeetodite](../impact-evaluation-methods/) taga ja on, mis eraldab seda [mõjuHindamisest versus protsessiHindamisest](../impact-evaluation-vs-process-evaluation/), millest viimane küsib, kas programm tarnitud kavatsetUd viisil, mitte kas see põhjustas efekti.
- [Täiendavus ja surnud kaal](../additionality-and-deadweight/) ja [nihutamine ja omistamine](../displacement-and-attribution/) on mõlemad, oma tuumas, kontrafaktuaalsed küsimused — surnudKaal on "mis oleks see konkreetne tulemus olnud ilma interventsioonita", rakendatud kohanduse tasandil, mitte täieliku hindamisDisaini tasandil.

## Lõksud

- **Enne/pärast käsitlemine põhjuslikkuse tõendiNa.** See on levinuM ja kõige tagajärJEkaM viga avaliku ja sotsiaalsektori mõjuRaporteerimises; enne/pärast muutus segab programmi efekti kõige muuga, mis muutus samal perioodil.
- **VõrdlusGrupi kasutamine, mis erineb süstemaatiliselt ravitud grupist.** Sobitatud võrdlusGrupp peab olema tõepoolest sarnane asjakohaseL omadusteL (vaata [kontrafaktuaalse analüüsi](../counterfactual-analysis/) meetodite hierarhiat Magenta Bookis); programmi osalejate (kes liitusid, ja on sageli motiveeritumad) võrdlemine mitte-osalejateGa (kes ei liitunud) riskib valikuKallutatuseGa, mis maskeerub programmi efektiNa.
- **JuhuslikustamisE võimaluste hävitamine halva tarneDisainiga.** FaaSiline või juhuslikustatud käivitamine säilitab oma hindamisVäärtuse ainult, kui määramine on tõepoolest juhuslik ja registreeritud — kohalikele juhtidele valiku lubamine, kes läheb esimesena, kaotab eesmärgi.
- **Üle-väitmine täpsuseSt nõrgaSt disainiSt.** Enne/pärast hinnang peaks olema esitatud indikatiivseNa, mitte mõõdetud efektiSuurusNa; Magenta Booki tõendusHierarhia eksisteerib, et väite tugevus vastaks disaini tugevuSele, mis selle tootsid.

## Allikad

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
