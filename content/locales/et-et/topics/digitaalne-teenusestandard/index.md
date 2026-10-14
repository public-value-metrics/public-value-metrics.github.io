# Digitaalne teenusestandard

GOV.UK Service Standard on värat, mida iga keskvalitsuse digiTeenus peab läbima enne, kui see saab minna live'i: 14 avaldatuD punkti, hinnatud sõltumAtu paneeli poolt igA tarne-faasi lõpuS. See on mehhanism, mis muudab "ehita head avalikud teenused" slogaNiST läbinud/mitte-läbinud-otsuseKs paberIse-radaGa — ja 2012-Government-Digital-Strategy "digitaalne-vaikimisi"-mandaadi otseNe järeltulija.

## Miks see on oluline

Enne, kui Service Standard eksisteeriS, oli valitsuse IT-ebaõnnestumine harva nähtaV enne käiVitamiSt, ja harva omistataV otsuSeLe, mille poole keegi saaKs osutaDa. 2012-Government-Digital-Strategy kohustaS osakondi ümber-disainiMa 25 kõrgeiMA-volümeni avalikKu-vendaTuD transaktSiooniLiSt teenust "digitaalne-vaikimisi"-NA, ja tagaS kohustuSe compliance-mehhanismiGa: teenused ei saanud minna live'i GOV.UK'il ilma läbitud teenuse-hindamiseta, mis oli siis 26-punktiLinE standard (konsolideeritud 18-le 2019, ja nüüD 14-punktI standard jõusS täna, hõlmaDes kolme grupPi — kasutaja-vajaDuste-mõistmine, hea teenuse pakkumine, ja õige tehnoloogia kasutamine). TeenuseHinDamine on reaalne sündmuS: GDS'i või osakondliKuD hindajaTe paneel vaatab läbi tõenDit, küsitleb meeskonda, ja väljaStab otsuse läbinud, ebaõnnestunud, või "ei täidetuD" vastu igaLe punktile, avaldatuD teenuse hindamiSE-lehEL. HindamiSE ebaõnnestumine blokeerib teenuse liikumiSE privaatSeSt betASt avalikuSSE betASse, või betASt live'iSSE — see on genuine värat, ei läbiVaade.

## Arvutus

Service Standard on raamistik, mitte formula, kuid see funktsioneerib stage-värataTuD otsuSE-struktuuriNa:

```
Discovery → AlfA-hindamine → BetA-hindamine → Live-hindamine
            (ei kohustuslik   (kohustuslik     (kohustuslik
            kõigile teenustEle, enne avalikKu   enne "betA"-
            kuid soovitatud)  betA-käiVitust)   mäRgi
                                                eemaldaMiSt ja
                                                vana kanali
                                                sulgemist)

Iga hindamine: tõenD + meeskonna-intervjuU → paneeli otsuS
pr. punkti
  Täidetud / osaLiselt täidetud / ei täidetuD
Üldine tulemus: Läbinud / Läbinud tingimusTeGa / EbaõnnestuNud
(uuesti-hindamine vajalik)

EbaõnnestumiSe kulu ≈ järgmiSE sprint-tsükli kulu
                      paranDaMaKs + viivitus
                      [kanalivahetuSe-säästuDeLe](../channel
                      -shift-savings/), mida teenus oli
                      rahastatud tarniMaKs
```

Punkt 10 ("defineeri, mis edu näeb välja nagu, ja avalda jõuDluSe-andmed") on, mis toidab [kulu-pr.-transaktsiooni](../kulu-transaktsiooni-kohta/) ja [teenuseStandardid ja transaktsiooni-mõõdikuD](../teenusestandardid-ja-transaktsioonimõõdikud/) — Standard mandaTeerib mõõtmiSe, ei lihtsalt teenuSe.

## Läbitöötatud näide

**Kohaliku omavalitsuse eluasemeTaotluSe-teenus**: linnaTeam jõuab omA betA-hinDamiSeSSE teenuseGa, mis täidab 11 14-st punktiST, kuid ebaõnnestub punkt 5-l ("kindlusta, et kõik saaVad kasutada teenust"), sest mingit assisteeritud-digiTaalsEt teeD ei eksisteeri taotlejaTeLe ühEta internetiGa, ja ebaõnnestub punkt 9-l, sest personaalseD andmed logitakse selgeTekstiNa aplikatsiooniTe veaRajadeS.

```
EbaõnnestumiSe otseNe kulu:
  UuestiHinDamiSe-slot: 6-8-nädaliNe ootAmine järgmisELe
  saadaolevaLe paneeliLe
  AfHjälpnings-sprint: 2 arendajat × 3 nädalat × £550/päev
  ≈ £34 650
  AssisteeritUD-digiTaalsE-kanali-disain: 1 teadlane × 2
  nädalat ≈ £5000

ViivitusE kulu: teenus oli prognoositud nihutaMaKs 40%
18 000/aasta eluasemeKüsimusTeST £8,50-telefoniKõneDest
£0,20-digitaalseteKs-transaktsioonideKs
  = 7200 × (£8,50 − £0,20) = £59 760/aastas kaduNud, pro-
    rateeritud ~2-kuuLiSeLe viivituSeLe ≈ £9960

EbaõnnestuNud hindamiSe koGukulu ≈ £49 610
```

AritmeetikA pointIks ei ole täpsus — see on, et ebaõnnestunud hindamine oMab reaalSe, arvutataVa hinNa, mis on täpselt, miks värataL on hambad.

## Seos tarkvaraarendusega

InseneriDeLe loeB Standard arhitektuuri- ja tarne-checkListiNa lige palju, kui poliitikaDokumenDina: punkt 11 ("vali õiged riistaD ja tehnoloogia") ja punkt 12 ("tee uus lähteKood avatuD") on otseSed inseneriOtsused, ja punkt 14 ("käita usaldusVäärset teenust") nõuab sama SLO-sid ja incidentI-protsesse, mida iga produktSiooniSüsteem vajab. See on vihmaVari-raamistik sellE peatükiLe — [kulu-pr.-transaktsiooni](../kulu-transaktsiooni-kohta/) ja [kanalivahetuSe-säästud](../kanalivahetuse-säästud/) on, mida Standard proOvib kaitstA finantsiLiselt, [digitaalne kaasatuS](../digitaalne-kaasatus/) on, mida punkt 5 eksisteerib garantEeriMaKs, ja [valitsus-kui-platVorm](../valitsus-kui-platvorm/)-komponendid (GOV.UK Notify, Pay, One Login) tasakaalustaVad punkti 13 ("kasuta ja panusta avatuD standardITe, jagatud komponenTiDe ja mustritELe") largely vaikimisi. Vaata ka [ehita versus ostA valitsuses](../ehita-versus-osta-valitsuses/) selle kohta, kuidas "õiged riistaD"-punkt kehtib hangeTe-otsusteS.

## Lõksud

- **HindamiSe käsitlemine lancEeriMiSe-päeva-compliance-checkbox'iNa.** Meeskonnad, mis esimest korDa loevaD 14 punkti nädal enne nende betA-hindamist, ebaõnnestuvaD ettenähtAvalt; Standard on mõeldud kujundaMa otsuseid discoveryST edasI, ei auditeerima neid retroSpektiivselt.
- **Prototüübi hindamine, ei teenuSe.** Osav demo saab läbida läbivaate, mille live, assisteeritud-digiTaalseLt-inklusiiVNe, incidentI-halDaTud versioon teenusEST ebaõnnestuKs — hindajaD on mõeldud selle lünka sondeeriMa, kuid iseSertifitseeritud minor-teenused jätaVad selle sageli vaheLe.
- **Puudub uuesti-hindamine enne skaleerimiSt.** Teenus, hinnatud 5%-liSE-kasutuselevõtuGa, ei jää automaatSelt vastavaKs 100%-l — koormuS, ebaõnnestumisE-nõudlus, ja ääre-juhtumi-kasutajaD kõik muutuvaD.
- **Service Standardi segiAjamine disainiSüsteemiGa.** GOV.UK Design System-komponendid tasakaalustavad mõned punktid (konsistentsus, ligiPääsetavuS), kuid Standard katab ka meeskonna-struktuuri, agiilSe-praktikA, ja andmeEetikA — hästi-stiilitud teenus saab ikkagi ebaõnnestuda punktidel 2, 6, või 9.

## Allikad

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
