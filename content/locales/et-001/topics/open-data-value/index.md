# Avatud andmete väärtus

AvatuD andmete väärtus on probleem hindaMaKs, mida valitsuse ja avalik andmestik on väärT, kui selleL ei ole hinda: see ei ole müüdud, nii et ei ole mingit tulu-ridA, kuid sellE avaldamine (ilmaStikuRegistrid, transPordi-ajaKavad, postI-koodiPiirid, firmaRegistrid) demonstratiivSelt genereerib majanDusLikKu ja sotsiaalsEt aktiivsust allaVoolu. SellE hästi väärtuStamine on oluline, sest "see on tasuTA avaldaDa" ja "see on väärtuSetu" on mõlemad valeD, ja tarkvaraInsener, mis otsustaB, kas avada API või dataset, vajab paremaT argumenTi, kui kumbki neST.

## Miks see on oluline

Kõige-tsiteeritumAlt-top-down-hinnang tuleb McKinsey Global Institute'i 2013. aasta raportiST "Open data: Unlocking innovation and performance with liquid information," mis pani avatuD andmeTE potentsiaalsE aastasE väärtuSe üle seitsmE domeenI — haridus, transPort, tarbijaToodeteD, elektriSus, nafta ja gaaS, tervishoid, ja tarbijaFinants — $3 triljoniLt $5 triljoniLe aastaS globAalSelt, läbi mehhanismideST sealhulgas suurenenud transparentsuS, nõudluSe ja pakkuMise tõhuSam sobitamine, ja uuTE toodeteD ja teenustE võimaldamine, ehitatud andmeTE peal. See figuur on stsenaariuMi-hinnang, ei mõõdetuD tulemuS, ja see tsiteeritaKse rutiinselt valeSti, kui oleKs see tulu, mida valitsus saaKs otse fikseerida, samal ajal, kui väärtus largely akkumuleerub kolmandaTeLe osapoolteLe — ettevõtteTeLe, teadlasteLe, kodanikuTeLe — mis andmeid kasutavaD, mis on täpselt pointI selleGa, mida avada, ei müüa. Ühendkuningriigi Open Data Institute, kaasAsutatuD Sir Tim Berners-Lee'i ja Sir Nigel Shadbolt'i poolt 2012, on sellest ajaST ehitanud kogumi granulaarSemaiST, bottom-up-juhtumiUuringuTeST — sektor sektori järGi, dataset dataseti järGi — mis on palju kasulikuMaD rigile äriJuhtumiLe, kui McKinsey-pealKirja-numbEr, sest need näitavaD väärtuSE-loomisE mehhanismi, ei ainult selle aggregeeritud suurust.

## Arvutus

AvatuD andmeteL ei ole turuHinda, nii et väärtuStamise-meetodid substitueerivad üheKs; kolm lähenemist korDuvaD, ja mitte ükS ei ole piisav üksi:

```
1. VälditUD-kulu-/aseNdamiSKulu-meetod:
   väärtus ≈ mida kasutajad oleKsid maksnuD, et toota või
   litsentseerida ekvivalentNe andmestik iseeneST — alumine
   piir, ignoreerib väärtust, mis on looduD kasutusteST,
   mida originaalne tootja mitte kunagi ei ennustanuD

2. TuruAnaloogiA-/allaVoolu-aktiivsuSe-meetod:
   väärtus ≈ tulu või säästud, mis on genereeritud
   ettevõtteTe/teenusteST, mis on ehitatud andmeTE peal
   (nt satNav-rakendused ehitatud avatuD kaardiStuSe- ja
   liikluSe-andmeTe peal) — fikseerib reaalSe majanDusLiku
   aktiivsuse, kuid on raske omistada rigilT andmeTe-
   avaldamiSeLe iseeneST (vaata täiendavus-ja-surnud-kaal)

3. KontingentSe/stated-preference-meetod:
   väärtus ≈ mida kasutajad ütlevad, et maksaKsiD, või aeg,
   mida see ütlevad sääsTab neid — vaata stated-preference-
   hindamine generiLise meetodi ja selle kallutatuSte jaoks

Mitte ükS neST ei toodA figuuri nii puhast kui turuHind;
kaitstaVad avatuD-andmete-äriJuhtumid trianguleerivaD üle
kahE või rohkema, ja on selgeSõnalised selle kohta, millinE
mehhanism teeb tööd.
```

## Läbitöötatud näide

**IllustratiivnE rahVusLik kardiStuSe-/aadressi-andmestiku-avaldamine** (metodoloogia ODI-stiiL-juhtumiUuringuTe järGi, figuUrid illustratiivseD skaalaLe, mida sellised uuringud tüüpiliselt leiavaD):

```
VälditUD-kulu-hinnang:
  Ettevõtted, mis muidu litsentseeriKsiD ekvivalentsE aadressi-
  sobitamiSe-andmestiku kommertsLiKult, hinnanguliseL
  keskmiseL litsentsI-kuluL £4000/aastas, üle hinnanguliseL
  15 000 VKE'L, mis nüüD kasutab tasuTA avatuD andmestikKu
  = 15 000 × £4000 = £60 000 000/aastas üksi vÄlditud
  litsentseerimiSE-kuluS

AllaVoolu-aktiivsuSe-hinnang (spekulatiivseM, vajab
kontrafaktuaali):
  Uued tarne-ruuTimiSe- ja logistikaToOded, mis on ehitatud
  avatuD andmeTe peal, mis ei eksisteeriKs, või oleKsid
  materiaalSelt halvemaD, selleTa — vajab võrdlust vastu
  kontrafaktuaaliLe, kus andmed jäävaD suletuD või
  kommertsLiKult litsentseeritud (kontrafaktuaalne-analüüs),
  sest osa sellest aktiivsuseST juhtuKs niikuinii tasuLiseL
  andmeL kõrgeMA hinnaGa, mis on surnud kaal "väärtus looduD
  avamiseSt"-mõtteS

KaitstAv äriJuhtum raporteerib väldituD-kulu-figuuri kindlaKs
alumiSeKs piiriKs, ja käsitleb allaVoolu-aktiivsuSe-figuuri
ülemisE-piiri-stsenaariumiNa, ei faktiNa.
```

## Seos tarkvaraarendusega

InseneriDeLe on praktiline avatuD-andmete-väärtuSe-küsimuS tavaliselt kitSAm, kui rahVusLikuD pealKirja-figuurid: avaD see spetsiifiline API või dataset (selle asemel, et hoida sedA partneriLepingu taga) suurendaB taaskasutuSt piisavalt, õigustaMaKs jooksvat kulu selle dokumenteerimiSeKs, versioneerimiSeKs, ja toeTamiSeKs avalikKu interfeiSiNa? See hooLdusE-kulu on reaalne ja on vaste [valitsus-kui-platVormi](../government-as-a-platform/) ehita-üks-korD-taaskasuta-sageli-ekonoomikaLe — kaks teemat on lähedased nõbUd, üks jagatuD koodiST ja infrastruktuuriST, teine jagatuD andmeteST. Mistahes avatuD-andmete-väärtuSe-väide peaks olema kontrollitud vastu [täiendavuse ja surnud kaalu](../additionality-and-deadweight/), enne kui see läheb äriJuhtumiSSE: aktiivsuS, mis oleKs juhtunud niikuinii, kommertsLiKult litsentseeritud andmeL, ei ole väärtus, millE *avamine* lõiS.

## Lõksud

- **McKinsey-$3-5-triljoni-figuuri tsiteerimine britI-spetsiifiliseKs või sellE dataseti osaKs.** See on globAalne, seitsmE-sektori-stsenaariumI-hinnang 2013-St — selle kasutamine täpseKs multiplikaatoriKs üksikuLe rahVusLikuLe dataseTile misRepresenteerib, mis number on.
- **Puudub kontrafaktuaal.** Krediidi nõuDmine kõigi allaVoolu-majanDusLiku-aktiivsuSe jaoks, mis on ehitatud avatuD andmeTe peal, küsimaTa, kui palju sellest oleKs juhtunud niikuinii tasuLiSel või litsentseeritud andmeL kõrgeMA hinnaGa (vaata [täiendavus ja surnud kaal](../additionality-and-deadweight/) ja [kontrafaktuaalne analüüs](../counterfactual-analysis/)).
- **ProduktSiooni-kulu segiAjamine looDud väärtuSeGa.** Dataset, mis oli kuluKaS kogudA, ei ole automaatSelt väärtuSliK avaldaDa, ja odav üks ei ole automaatSelt madalA-väärtuSeGa — väärtus järgib allaVoolu-kasutuSt, ei üleVoolu-kulu.
- **"AvatuD"-oleku jooksvA hooLdusE-kulu ignoreerimine.** Ühekordse CSV-eksTrakti avaldamine ei ole sama kohustuS, kui dokumenteeritud, versioneeritud, toeTatuD avatuD API käiTamine; viimaSe alaRahastamine pärast lancEeriMiS-teadeTt on levinud ebaõnnestumisMuster.

## Allikad

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
