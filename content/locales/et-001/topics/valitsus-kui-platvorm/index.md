# Valitsus kui platvorm (GaaP)

Valitsus kui platVorm on strateegia jagatud, taaskasutatavaD komponenDiTe ehitamiSeKs — teadeTuS-teenus, makseTeenus, identiteediTeenus — üks korD, tsentraalSelt, nii et saDAD individuaalseD statslikuD teenused tarbivaD neid, selle asemel, et igAüKs ehitaB oma. See omaRAamib avalikKu digitaalsEt infrastruktuuri platVormi-ekonoomikA-probleemiKs: väärtus ei ole ükSiKuS integratsioonis, see on marginaalseS kuluS *järgmiSe* meeskonna jaoks, mis sellE adopteerib, läheneDes nullile.

## Miks see on oluline

GDS sätestaS strateegia formaalSelt oma 2015. aasta "Government as a Platform"-publikatsioonis, argumenteeriDes, et valitsus oli ehitanud samu võimekusi — makse-vastuVõtmine, kasutaja-teadeTamine, identiteedi-verifikatsioon, aadressi-otsiNg — eraldi teenusES teenusE järGi, igAüKs kandeS oma hankimiSE, turvalisuSE-hindamiSE, ja jooksvA toe-koormuSe. AlternatiiV oli väike arv jagatuD platVorme, ehitatuD kõrgeLe standardiLe üks korD ja taaskasutatuD kõikjaL: GOV.UK Notify emailiDe, teksti-sõnumiTe ja kirjaDe saatmiSeKs, GOV.UK Pay online-makseTe vastuVõtmiSeKs, ja GOV.UK One Login (järeltulija varaseMaLe GOV.UK Verify identiteedi-programmiLe) identiteedi-verifikatsiooniKs. SkaalA, millE need platvormid on saavutanud, on kõige selgeM evidenTS sellest, et strateegia töötaS: GOV.UK Pay on töödelnud üle £10 miljardi transaktsioonideS üle ligikaudu 1800 individuaalsE teenuSe — ja kus selleL võttis ligikaudu neli aastat töödelda esimene £1 miljard, töötleb see nüüD sama palju ligikaudu viiE kuuGa — samal ajal, kui GOV.UK Notify on saatnud rohkem kui 9 miljardit sõnumit üle 1500 statslikU organisatSiooni nimel. IgAüKs nendest adopteerivaTeST teenusteST väldiS oma makse-väravA või sõnumi-pipelineI ehitamist, turvamiSt ja hooLdamist.

## Arvutus

```
EhitusKulu teenuSe kohta (ei platVormi) = N teenust × kulu,
  et ehitaDA, turvalisuSE-hinnataDA, ja käitaDA ühT makse-/
  teadeTamise-/identiteedi-süsteemi

PlatVormI kulu = fikseeritud platVormI-ehitusKulu
               + marginaalne kulu pr. adopteerivA teenuSe
                 (integratsioon, konfiguratsioon, jooksev
                 platVormI-meeskonna-tugi)

TaaskasutuS tasub end ära, kui:
  platVormI-ehitusKulu < N × (pr.-teenuse-ehitusKulu −
  marginaalne integratSiooni-kulu)

Matuursele platVormile, läheneb marginaalne kulu pr.
lisandUva-adopteerija transaktsiooni-/sõnumi-tasuLe üksi —
fikseeritud kulu on amortiseeritud üle terve valitsuse
kinnisvara, ei ühE osakonna eelArve, mis on, miks GaaP-
komponenDid tavaliselt rahastataKse tsentraalSelt, ei
nõutuD täieliKu kulu-tagasiSaamiSeGa varasteLe
adopteerijaTele.
```

## Läbitöötatud näide

**Kohalik omavalitsus, mis adopteerib GOV.UK Pay'd makseVäravA ehitamiSe asemel**:

```
Ehita-ise-hinnang:
  PCI-DSS-compliance-töö + integratsioon + jooksev
  hooLdus ≈ £85 000 ehitus + £22 000/aastas hooLdus

GOV.UK Pay'-adoptsioon:
  Integratsiooni-jõupingutus ≈ £12 000 (arendaja-aeg)
  Transaktsiooni-tasuD: valitsuse-kodaniku-kaart-maksed,
  tüüpiliselt nõutuD väikseGa protsendiGa + fikseeritud
  tasuGa transaktsiooni kohta, mitte eraldi PCI-DSS-
  koormuSeGa omavalitsuse jaoks
  ≈ £12 000 ühekordne, jooksev kulu varieeruV volümeniGa, ei
  fikseeritud

Esimese-aasta sääst ≈ £85 000 − £12 000 = £73 000, enne
loenDamiST väldituD £22 000/aastas-hooLdust ja väldituD
compliance-riski kaart-andmete hoidmiSeST kommuuni-kõrvaL-
süsteemis üldSe — see teine kategoRia on turvalisuse-väärtus,
mida katab [statslik küberturvalisuse väärtus](../statsliku-sektori-küberturvalisuse-väärtus/).
```

Skaleeri see £73 000 üle ligikaudu 1800 teenuSe, mis nüüD kasutab GOV.UK Pay'd, ja aggregeeritud väldituD-ehitus-kulu üle valitsuSe on sadadeS miljoniteS — platVormI-ekonoomika, ei üksiK integratsioon, on, kus strateegia väärtus tegelikult istuB.

## Seos tarkvaraarendusega

Valitsus kui platVorm on otseNe argument [ehita-versus-ostA-valitsuses](../ehita-versus-osta-valitsuses/)-le: kui jagatud, hinnatud, hästi-käituD komponent eksisteerib, on skräddersyd ekvivalenDi ehitamine väga harva paremA [value-for-money](../value-for-money/)-valik, ja see ebaõnnestub [digitaalseS teenusestandardis](../digitaalne-teenusestandard/) punkt 13-l ("kasuta ja panusta avatuD standardITe, jagatud komponenTiDe ja mustritELe") peaaegu definitsiooniLt. See muudab ka kuju [koGu-omandiKulu valitsuse IT-s](../koguomandikulu-statslikus-it-s/): platVormI-adoptsioon vahetaB suurE kapitali- ja hooLduse-ridA väiksemA, kasutuSe-seotuD operatiivseKs kuluKs, mis on lihtsam prognoosiDa ja lihtsam rahastuSeST eemalDaDa, kui teenus deKommissioneeritaKse. Avatud komponentIDe taaskasutamine oMab nõbu [avatuD-andmete-väärtuSes](../avatud-andmete-väärtus/) — mõlemad on strateegiad, mis käsitlevaD midagi, mis valitsus toodab üks korD, kui jagatud infrastruktuuri, ei osakondliKku aktivaT.

## Lõksud

- **VarjuGa-uuestiEhitamine.** Meeskonnad, mis vaikselt ehitavaD oma makse- või teadeTamiSE-integratSiooni, sest platVormI onBoardimis-protsess on aeglaseM, kui see iseEnesEst teha — valitsuSe-friktsiooni-probleem, ei tehnoloogia-üks, ja see eroDeerib vaikselt taaskasutuSe-ekonoomikat, mida kogu strateegia sõltub.
- **PlatVormI-meeskonna alaRahastamine relatiivSelt väärtuSeLe, mis see loob.** VäärTus akkumuleerub tarbiva osakonna jaoks, samal ajal, kui kulu istuB platVormI-meeskonnaGa, luuDes kroonilisE alaInvesteerimiSe-riski, vÄlja arvaTud juhul, kui rahastamine on tsentraliseeritud ja kaitstuD — versioon ühisteST-ressurssiDeST-tragediaSt.
- **PlatVormI eduKuSe mõõtmine ainult kasutuseGa.** AdoptSiooni-numbrid (onBoarditud teenused, saadeTuD sõnumid) on juhtiv indikaator, ei tõenD väärtusEst; tõeline test on ülalOlev väldituD-ehitus-kulu- ja väldituD-riski-aritmeetikA.
- **"PlatVormI" käsitlemine sünonüümiKs "monoliidiGa".** GaaP-komponendid õnnestuvaD, sest igaüKs teeb ühE asja hästi kitsaGa, stabiilseGa interfeiSiGa; seostuSetute võimekuste bundlamine üheKs "platVormiKs" taasLooB skräddersyd-ehituse-probleemi teiSel skaalal.

## Allikad

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
