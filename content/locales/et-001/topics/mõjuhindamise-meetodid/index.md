# Mõjuhindamise meetodid

MõjuHindamise meetodid on statistiLiseD ja eksperimentaalseD disainid, mida kasutatakse hindaMaKs, mida poliitika või programm tegelikult põhjustaS, eristatuNa sellEst, mis oleks juhtunud niikuinii — juhuslikustatuD KontrollituD Katsed (RCTd), erinevuste-erinevused, propensity-score-matching, ja regressiooni-katkevusDisain on neli kõige levinumA Ühendkuningriigi avaliku poliitikaS. Need eksisteerivad, sest enamik valitsuse interventsioone ei saa testida laboratooriumiS: ei saa juhuslikustada, mis linn saab uuE bussiMarsRuudi viisil, kuidas saab juhuslikustada, mis patsient saab ravimi, nii et need meetodid laenaVad sama põhjusLiku loogika mitte alati nõudeS juhuslikku määramist.

## Miks see on oluline

HM Treasury Magenta Book, Lisa A kvaSi-eksperimentaalsETeST meetoditeST, on Ühendkuningriigi valitsuse canoniline juhend nende disainide vahel valimiSeKs, ja organid nagu Education Endowment Foundation ja What Works Centre for Local Economic Growth institutsionaliseerivad tõenDuSHierarhia, mis on ehitatud nende ümber — RCTd, kus juhuslikustamine on teostatav ja eetiline, kvaSi-eksperimentaalseD disainid, kus see ei ole. Meetodi valik ei ole tehniline eelTulemuS: see määrab, kas hindamine saab vastata "põhjustaS programm selle?" või ainult "juhtuS see pärast programmi algust?", mis on sama küsimus, mida [kontrafaktuaalne analüüs](../kontrafaktuaalne-analüüs/) on ehitatud sundimaKs praktikuid küsima enne mistahes hindamise tellimist.

## Arvutus

```
RCT:
  Mõju = keskmine(tulemus | ravi-grupp) − keskmine(tulemus |
         kontrollGrupp)
  (valiiD, sest määramine ravile on juhuslik)

Erinevuste-erinevused (DiD):
  Mõju = [tulemus_pärast(ravitud) − tulemus_enne(ravitud)]
       − [tulemus_pärast(kontroll) − tulemus_enne(kontroll)]
  (nõuab "parallelsed trendid" eeldust: ravitud ja kontroll
   oleksid liikuDanud koos interventsioonita)

Propensity-score-matching (PSM):
  1. Hinda P(ravi = 1 | kovariaaDid X) igaLe ühikuLe →
     propensity-score
  2. Sobita ravitud ühikud mitte-ravituD ühikuteGa sarnasteGa
     propensity-scoreDeGa
  3. Mõju = keskmine(tulemus | ravitud) − keskmine(tulemus |
     sobitatud kontroll)

Regressiooni-katkevus-disain (RDD):
  Mõju = vaadeldud hüpE tulemuseS sobivuSPiiriL, võrreldaDES
         ühikuid vahetult üle vastu vahetult allA lõiKEpunkti
```

## Läbitöötatud näide

**Kohalik omavalitsus (erinevuste-erinevused probleemseteLe perekonDadeLe programmiLe)**: tulemus on koolikäimine. RavitUD ala liigub 84%-lt 89%-le koolikäimises (+5 protsendipunkti) üle programmi perioodi; võrreldav, kuid mitte-ravitud ala liigub 85%-lt 87%-le (+2 protsendipunkti) samal perioodil. DiD mõjuHinnang: 5 − 2 = +3 protsendipunkti omistatav programmiLe. Rakendatud 2000-õpilaselE kohordiLe ravituD alaS, on see konsistentne ligikaudu 60 lisaõpilaseGa (3% × 2000), kes jõuavad kõrgeMaSSE koolikäimise-kategooriasse, ekstrapolatsioon, mis peaks olema raporteeritud selle parallelsed-trendid-reservatsiooniGa, mitte täpSE hovedArvuNa.

**Heategevusorganisatsioon (propensity-score-matching tööHõivatuSe-heategevusorganisatsiooniLe)**: 300 programmi osalejat on sobitatuD 300 indiviidiGa suuremaST administratiivseST andmestikuST, kasutaDES propensity-scoreDe, mis on ehitatud vanuSeST, eelneVaST tööHõiveAjaLuGuST, ja kvalifikatSiooniTaSeMest. Kaheteistkümne-kuu tööHõiveMäär: sobitatuD ravitud grupp 46%, sobitatuD võrdlusGrupp 33%. PSM mõjuHinnang: 46% − 33% = +13 protsendipunkti omistatav programmiLe, tinGimusEl, et ei ole vaaDeldAmatA segavA faktoriT (nagu motivatsioon), mis veab nii osaleMist kui tulemuSt.

## Seos tarkvaraarendusega

Kas mistahes neist disainidest on hiljem teostatav, sõltub suuresT andmeInseneriA-otsusteST, mis on tehtud varaKult. RDD vajab täpselt registreeritud käivaT muutujat ja genuinely puhtA sobivuSPiiri; DiD vajab võrreldavaid paneelAndmeid üle aja mõlemaLe ravitud ja võrdluSalaLe, mis tähendab konsistentseid liiTMisi üle süsteemide ja aastate; PSM vajab rikkalikke baasJoonE-kovariaaDi-andmeid, jäädvustatud enne ravi, mitte taaskonstrueeritud pärast. AndmeMudel, disainitud koos [muutuSe teooriaGa](../muutuse-teooria/) ja [logikMudeliGa](../logiline-mudel/) algusest peale — jäädvustaDES baasJoonE kovariaaDid, kuupäevad, ja võrdlusGrupi-sobivaD registrid — on, mis muudab range mõjuHindamise võimalikuKs hiljem, selle asemel, et olla kuluKas post-hoc rüseLuS. Vaata [mõjuHindamine versus protsessiHindamine](../mõjuhindamine-versus-protsessihindamine/) komplementaarsE küsimuSe jaoks, millele need meetodid ise ei vastA.

## Lõksud

- **RCT sundimine, kus teostamaTa või ebaEetiline**, või vastuPidi, kvaSi-eksperimentaalsE disaini mitte kunagi kaalumine, kui genuine võimalus ühELe — poliitikaLõiKEpunkt, faaSiline käivitamine — oli saadaval ja kasutamaTa.
- **Parallelsed-trendid eelDuse ignoreerimine DiD-S.** Kui võrdlusAla oli juba diverginud ravitud alaSt enne interventsiooni, on kahE-punkti-võrdlus kontaminEeritud; kontrolli enne-trendE, ei ainult enne/pärast.
- **Sobitamine ainult vaaDeldud kovariaaTideL PSM-S.** VaaDeldAmatu valik, nagu osaleja motivatsioon, saab kallutada hinnangu isegi, kui vaaDeldud kovariaaDid on hästi balanseeritud.
- **Käiva muutuja manipulatsioon RDD-S.** Kui inimesed saavad mõjutada oma skoori langema vahetult sisse sobivuSPiiri, ei isoleeri katkevus enam põhjusLikKu efekti.

## Allikad

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
