# Kodaniku rahulolu mõõdikud

KodanikU rahulolu mõõdikud mõõdavad, kuidas inimesed hindavad oma otseSt kogemuSt avalikuST teenuSeST — erinev institutsioonideSSe üldiseST usaldusESt, ja erinev sellest, kas teenus tegelikult saavutaS hea tulemuse. Teenus võib olla meeldiV ja ebaEfektiivne, või efektiivne ja mitte-meeldiV; lünk nendE kahE vahel on ise diagnostiLinE informatsioon, mida tarneMeeskond peaks jälgima.

## Miks see on oluline

Rahulolu mõõdetakse kahEl erinevaL kõrguseL, mis rutiinselt kokku segatakse. TeenuSe-tasandiL nõuab Ühendkuningriigi nüüd-pensioneeritud Performance Platform ja tänapäeva GOV.UK-teenuseManuaal pr.-teenuse-rahulolu-uuringut (tüüpiliselt viie-punktiLinE "väga rahul" kuni "väga rahuloleMatu"-skaal, manustatuD transaktsiooni-punktiS) üheKs neljaST kohustuslikuST teenus-KPI'St — vaata [teenuseStandardid ja transaktsiooni-mõõdikud](../teenusestandardid-ja-transaktsioonimõõdikud/). InstitutSiooni-tasandiL mõõdab UK Civil Service People Survey töötajA-engagementi ja kogemust üle igA keskvalitsuse-osakonna aastaSelt, ja eraldi küsitleb OECD "Trust in Government"-programm avalikKu usaldust rahvusLikKu valitsuSeSSE üle liikmesRiikide, jälgiDes pikaAjaliSt languse- ja taastumise-mustrit, mida kriisid on suuresT kujundanud (2008-finantsKriis ja COVID-19-pandeemia tootsid mõlemad järSki, nähtavaId liikumisi OECD-usaldus-numbriteS). Põhjus, miks insenerid, mis ehitavad kodanikuLe-suunatuD teenuseid, vajavad hoidma rahulolu ja tulemuSe lahus, on teaDaolev ebaõnnestumisMuster teenuse-disainiS: ilusti disainitud, lihtne-kasutaDA digiVorm toetusetaotluSeLe võib skoori väga kõrgE rahulolu, samal ajal, kui alusOlev poliitika — sobivuSE-reeglid, töötlemiSe-jäRJEkorrAD, toetuSe-suurused — jätab taotlejaE mitte parema-oleKuGa. Rahulolu mõõdab interfeiSi; see ei mõõda tarnitud väärtust selle taga.

## Arvutus

```
NetoRahulolu = % rahul (või väga rahul) − % rahuloleMatu
               (või väga rahuloleMatu) (neutraalseD/ei-
               arvamuseGa vastused välJaJäetud mõlemast
               termist, kuid loeNduD vastuSE-baasiS igA
               protsendi arvutamiSeKs)

Rahulolu-tulemuse-lünk = rahulolu-skoor − tulemuse-
               saavutamiSe-skoor (mõlemad normaliseeritud
               0-100; suur positiivne lünk signaliseerib
               teenuSt, mis "tundub hea" aga alaTarnib
               sisule)

UsaldusIndeks (OECD-stiiL) = % uurinGu-respondenTideST, kes
               vastavad "jah" küsimuSeLe "kas usaldad
               [rahvuslikKu valitsuSt]?" jälgituD aja-
               seeriaNa, tüüpiliselt lahtiJaotatuD vanuSe,
               sissetuleku, ja hariduSe järGi
```

## Läbitöötatud näide

**Kohaliku omavalitsuse kinnisvaraMaksU e-arVeldamiSe teenus**: rahulolu-uuring edukaST transaktsiooniST näitab 2400 respondenti: 1650 rahul/väga rahul, 250 rahuloleMatu/väga rahuloleMatu, 500 neutraalsed.

```
NetoRahulolu = (1650/2400 × 100) − (250/2400 × 100)
             = 68,75% − 10,42%
             = +58,3 netoRahulolu
```

See näeb isoleeritult tugEv välja. Kuid uuring näidatakse ainult kasutajaTeLe, kes *edukalt* lõpetavad transaktsiooni — teaDaolev mõõtmise-bias (vaata lõksud allPool). SelleGa paarIStaDES lõpetamiSe-määra-mõõdikuGa [teenuseStandarditEst ja transaktsiooni-mõõdikuTeST](../teenusestandardid-ja-transaktsioonimõõdikud/) näitab, et lõpetamine on ainult 71%, mis tähendab:

```
Tõeline populatsiooni-rahulolu on mõõtmaTA 29%-le, kes
hüljasiD teekonna — plausibLiselt kõige rahuloleMatuM
kohort, sest hülgamine on ise tugEv negatiivne signaal,
mida uuring mitte kunagi ei fikseeri.
```

**RiikliK-tasandi illustratsioon (OECD-stiiL-usaldus-seeria struktuur)**: rahvusLik valitsuse-usaldus raporteeritud 42%-Ga Aastal 1, langedes 34%-le Aastal 2 (kriisi-aasta) ja taastudes 39%-le Aastal 3 — trajektoor tüüpiline šokiLe-ja-osalisELe-taastumiSeLe mustriL, mida OECD dokumenteerib üle liikmesRiikide pärast suuri kriise.

## Seos tarkvaraarendusega

Instrumenteeri rahulolu-uuringud igAl meaningful väljaPääsu-punktiL kasutajA-teekonnaS, mitte ainult eduKaL lõpetamiSel — kõige levinuM insenerI-viga sellES ruumIs, ja üks, mis vaikselt muudab rahulolu-mõõdiku survivorship-bias-vanitet-mõõdikuKs. Kus võimalik, paarIsta rahulolu-skoor lõpetamiSe- või tulemuSe-mõõdikuGa samal dashboardiL, nii et meeskond ei saaKs tähisTada tõuSvat rahulolu, samal ajal, kui lõpetamine vaikselt langeb (vaata [kulu transaktSiooni kohta](../kulu-transaktsiooni-kohta/) ja [digitaalne kaasatuS](../digitaalne-kaasatus/) selle kohta, kes jäetakse digiTaalseST rahulolu-samplingUST esialgu väljA — mitte-digitaalseD ja assisteerituD-digitaalseD kasutajaD on süstemaatiLiselt alaEsindatuD teenuSe-siseseteS uuringuteS). Rahulolu- ja usaldus-andmed annavad sisendi otse ka legitiimsuSe-jala [Moore'i strateegiliSeSSE kolmnurGaSSE](../avalik-väärtus/), ja kuuluvad "kliendi"- ja "legitiimsuSe"-perspektiividEle [avaLiku väärtuse scorecard'is](../avaliku-väärtuse-scorecard/) — vaata [usalduse-ja-legitiimsuse-mõõdikud](../usalduse-ja-legitiimsuse-mõõdikud/) institutSiooni-tasandi vastE jaoks sellELe teenuSe-tasandi mõõdikuLe.

## Lõksud

- **Survivorship-bias punkt-lõpetamiSe-uuringuteS.** Kasutajad, kes hülgavad teekonna, mitte kunagi ei näe uuringut, nii et kõrgE teenuSe-sisene rahulolu-skoor saab eksisteerida koos madalaGa lõpetamiSe-määrAGa ja suurE nähtamAtU populatsiooniGa rahuloleMatuTeST mitte-lõpetajateST.
- **Rahulolu käsitlemine proksi'na tulemuseLe.** Hästi-disainitud interfeiS halvasti-disainitud poliitikaLe skoorib hästi rahulolul ja halvasti tulemuSel — raporteeri alati mõlemat, mitte kunagi üht asendajaNa teisELe.
- **Väikesed, mitte-esinDavaD samplid raporteeritud vale täpsuSeGa.** Rahulolu-skoor paariSajaST iseVälJavalituD respondenDist, raporteeritud üheLe desimaalkohaLe, implitseerib usaldust, mida sample-suurus ei toeta.
- **Demograafilise lahtiJaotuSe ignoreerimine.** RiikliKuD usaldus- ja rahulolu-numbrid, mis ei ole lahtiJaotatuD vanuSe, sissetuleku, puudE, või digiTaalsE-ligiPääsu järGi, võivad maskeerida teravalT lahkneVaid kogemusi üle grupiDe — mustEr, millEle OECD oma Trust-in-Government-väljaanded explicit lahtiJaotuSe teevaD.

## Allikad

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
