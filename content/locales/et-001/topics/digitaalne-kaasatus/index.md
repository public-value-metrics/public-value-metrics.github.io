# Digitaalne kaasatus

Digitaalne kaasatuS on distsipliin kindlusTamaKs, et "digitaalne-vaikimisi" ei muutuKs "ainult-digitaalseKs" — et avalikud teenused, disainitud odavaimA kanali ümber, töötavaD ikka kodanikuTeLe, kes ei saa või ei taHA kasutada sedA abiTa. GDS leiuTas spetsiifilisE tarne-mehhanismi, "assisteeritud digitaalsuS," kohustuslikuKs nõudeKs igALe statslikuLe digiTeenuseLe, ei valikuliseKs lisaKs.

## Miks see on oluline

2012. aasta Government Digital Strategy seadiS ambitsiooni selgeLt: digiTeenused peaksid olema ehitatud digitaalne-vaikimisi, kuid strateegia ise tunnistaS, et ligikaudu 10% britI täiskasvanuteST ei oleKs võimelised neid kasutama abiTa, ja kohustaS osakondi pakkuma assisteeritud-digitaalsE toe — inimese-vahendatuD tee, telefoni, isiklikult, või vaheMeeste kaudu — osaNa teenuSeST, ei eraldi fallback'iNa, mis lisataKse hiljem. See kohustuS on nüüD [digitaalseS teenusestandardis](../digitaalne-teenusestandard/) punkt 5, "kindlusta, et kõik saaVad kasutada teenust." Jätkuva väljaJäetuSe skaalat jälgib Lloyds Banking Groupi aastaNe UK Consumer Digital Index: 2024. aasta väljaanne leiuD, et ligikaudu 1,6 miljonit inimest Ühendkuningriigis jäävaD offline'i, ja see grupp skewib tugevalT vanusEGrupPi 70-79, neiLe, mis teenivaD allA £35 000, ja neiLe, mis on pensioneeritud või töötud — täpselt sedA populatsiooni, mis on kõige tõenäolisemalt sõltuV avalikuTeST teenusteST, mida ümber disainitakse. SamA raport leiuS, et ainult 48% britI tööJõuST suuDaB lõpetada kõik 20 ülesanDet Essential Digital Skills-raamistikuS, mis tähendab, väljaJäetuS ei ole binaarne ühendatuS, see on spektrum oskusEst, kindlusEst, ja usaldusESt, mida lihtne "oMab lairiBa" mõõDik täielikult missiB.

## Arvutus

Digitaalne kaasatuS on raamistik ja õiglusE-kontroll, mitte üksik formula, kuid see komponeerub kvantitatiivseGa väärtuS-hindamiSeGa [jaotusliku kaalumise](../jaotuslik-kaalumine/) kaudu:

```
Naiivne kanalivahetuSE väärtus:
  väärtus = nihutatud volümen × (kulu_vana −
           kulu_digitaal)     [vaata kanalivahetuSE-säästud]

KaasatuS-kohandatuD väärtus:
  väärtus = (nihutatud volümen × kaalumata sääst)
          − (väljaJäetuD kasutajad × assisteeritud-
             digitaalsE-pakkumiSe kulu)
          − (jaotusliK-kaalu-kohandus kahjuLe väljaJäetuD
             grupiDeLe, mis kaotavaD ligiPääsu või kohtaVad
             degradeeritud teenuse-kvaliteeti)

AssisteeritUD digitaalsuS ei ole restKulu ebaõnnestumiSeST
— see on disainitud kanal oma [kulu-pr.-transaktsiooniGa](../
cost-per-transaction/), tüüpiliselt palju kõrgEmA pr.-
transaktsiooni-kuluGa, kui iseTeeninduslik digitaalsuS, kuid
siiski tavaliselt odavaM, kui legacy-kanal, mille see osaLiselt
asendab.
```

## Läbitöötatud näide

**Universal-Credit-stiiLinE rahVusLik toetusTeenus**: 2,5 miljonit taotlust/aastas, hinnatuD vajaDes assisteeritud-digitaalsE toe hinnanguliselt 10%-le taotlejateST Government Digital Strategy-planeerimiSE-eeldusE järGi.

```
VäljaJäetuD/assisteeritud-digitaalsuSE-kohort = 2 500 000 ×
                                               10% = 250 000
                                               taotlust/
                                               aastas

AssisteeritUD-digitaalsE-kanali-kulu (telefon + näost-näGu-
tugi, personaliga täidetuD vulnerabEelsusE ja kompleksSuSe
käsitlemiSeKs) ≈ £9,50/taotlus
  = 250 000 × £9,50 = £2 375 000/aastas

IseTeeninduslik digitaalsE-kulu teiStELe 90%-le ≈ £0,40/
taotlus
  = 2 250 000 × £0,40 = £900 000/aastas

SegaTuD kulu transaktsiooni kohta = (2 375 000 + 900 000) /
                                   2 500 000 = £1,31/taotlus

Disain, mis jätab assisteeritud digitaalsuSe vaheLe, tabaMaKs
madalaMA pealKirjaSE-kulu-transaktsiooni-kohta (nt £0,40
sega, ignoreeriDes 250 000 väljaJäetuD taotlejat), ei
elimineeri selle £2,375m-kulu — see konverteerib sellE
nõuamaTa-jäetud õigustusteKs, apellatsioonideKs, ja
allaVoolu-kriisi-teenuse-nõudluSeKs, mis maanDub täiesti
teisEl eelArveL.
```

## Seos tarkvaraarendusega

AssisteeritUD digitaalsuS on disainitud kanal, mis tähendab, selleL on interfeiSid, SLA'd, ja instrumenteerimine, nagu igAl teiSel: telefoni-põhine juhtumitöötaja-riist, vaheMeeste-portal Citizens Advice'iLe või kohaliKuLe omavalitsuSeLe, või isiklik kioski-voog. SellE käsitlemine eelMõtteNa — väike telefoniNumbEr väikseS kirjaS, ei kanal, mis on kaalutud discoveryST — on üksik levinuM viis, kuidas teenused ebaõnnestuvaD [digitaalseS teenusestandardis](../digitaalne-teenusestandard/) punkt 5-l hindamisel. Digitaalne kaasatuS on õiglusE-lätS igALe muuLe teemALe sellES peatükiS: see piirab, kui agressiivSelt [kanalivahetuSE-säästuD](../kanalivahetuse-säästud/) saaVaD realiseeritud olla, see on ridaPunkt, mis peab olema inkludeeritud ausalt [kulu-pr.-transaktsiooniS](../kulu-transaktsiooni-kohta/), ja see on otseNe rakendus [jaotusliku kaalumise](../jaotuslik-kaalumine/) digiTaalsETeenuste-kontekstiS — sääst, mis maanDub disproportsionaalSelt inimesteLe, mis on juba digitaalselt ja majanDusLikuLt väljaJäetuD, peaks olema kaalutuD allA, ei käsitletuD ekvivalentSeKs sääsTuGa, mis on levinud ühtlAselt üle populatsiooni.

## Lõksud

- **"DigitaalnE-vaikimisi" loeTuD "ainult-digitaalseKs".** TelefoniLiini või leti sulgemine, kord kui digitaalne-kasutuselevõtt ületab tärskli, kontrollimaTa, et allesJäänud kohort oMab genuinely kasutataVat alternatiivi.
- **KaasatuSE mõõtmine binaarSe ühendatuSeGa.** "OMab lairiBa" või "oMab nutiTelefoni" on halB proksi võimeLe lõpetada spetsiifiline transaktsioon — Essential-Digital-Skills-lünk (ainult 48% britI tööJõuST lõpetab kõik 20 ülesanDet, Lloyds 2024 järGi) näitab oskuSed ja kindlus loevaD nii palju, kui ligiPääs.
- **AssisteeritUD digitaalsuSE kulu-arVestamine ümArdamisVeaNa.** SellE budjeteerimine väikseKs kontingenTsI-reaKs, ei korralikuKs kanaliKs oma [kulu-pr.-transaktsiooniGa](../kulu-transaktsiooni-kohta/), ja seejärel üleRaskumine, kui see on alaRahastatuD ja alaPersonaliga käiVitusel.
- **UurimisE lätS ainult eduKateLe digitaalseTeLe lõpetajaTeLe.** RahuloLu- ja kasutaVuSE-uuring, mis käib täielikult teenuSe-sees, missiB inimesed, mis mitte kunagi jõudSid niiKaugelE, mis on täpselt populatsioon, mida digitaalne-kaasatuSE-töö on mõeldud kaitsmA.

## Allikad

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
