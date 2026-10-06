# Index of Multiple Deprivation (IMD)

IMD on ametlik relatiivsE-puudusE-mõõdik väikesteLe alaDeLe Inglismaal, rangjastaDes igA riigi 32 844 Lower-layer Super Output Area'St (LSOA, kumbki roughLy 1500 elanikuGa) 1-St (kõige puudulikuM) 32 844-ni (kõige vähem puudulik). Selle avaldab, mis on nüüD Ministry of Housing, Communities and Local Government (MHCLG, varem MHCLG/DCLG), kõige hiljutiselT, kui English Indices of Deprivation 2019, ja see ruuTib otse keskvalitsuse-rahastuSe, rahVaTervise-prioriteeDi, ja õigustatuSe duSinaTEle kohaliKuLe skeemiLe.

## Miks see on oluline

PuudusE ei ole üks asi — kvartal saab olla sissetulek-vaene, kuid turvaline, või sissetulek-piisav, kuid kannataDa halbaDe tervise-tulemusteST ja halvaST elamispinnaST. IMD eelKäiJa-indeksid (dateeritud tagasi 1970nenDateSSE Department of the Environment deprivatSiooni-indikaatoriteSSE) evolueeruSid tänaseks seitsmE-domeenI-mudeliKs täpselt sellepärast, et üksik-indikaatori-sihtimine (töötuSe-määr üksi, näiteks) routinemAiSelt missiS alaD, mis olid puudulikuD teiStel viiSidel. IMD 2019 kombineerib sissetulekut, tööHõivet, haridust, tervist, kriminAalsust, barjääRe elamispinnaLe ja teenusteLe, ja elukeskkonda üheKs komposiiTseKs rangiKs LSOA kohta, kumbki domeen ehitatud oma indikaatorite korvist ja kaalutuD MHCLG metodoloogiaGa. Sest see opereerib väikesE-ala (LSOA) tasandiL, ei kohaliku-omavalitsuse-tasandiL, eksponeerib see puudusE-tasKuid peidetud muidu-jõukatES distriktiDes — põhjuS, miks IMD, ei keskmine kohaliku-omavalitsuse-sissetulek, on, millest NHS England, Department for Education'i pupil premium, ja duSinaD kohalike-omavalitsuste-rahastuSe-formulE tegelikult sõltuvaD. SoftwareE, mis määrab õigustatuSt, prioriseerib outreachI, või raporteerib impacti ala kaupa Inglismaal, peaks käsitlema IMD detsiili või rangi esmaKlassi-sisendiNa, ei eelMõtteNa — ja kus programm sihib tahtLikuLt kõige puudulikuMAid alaSid, peaks selle hindamine rakendaMa [jaotuslikKu kaalumiSt](../jaotuslik-kaalumine/) vastaVuseS selleGa sihtimiSeGa, selle asemel, et väärtustaDA naela kasu samaKs, ükskõik, kuhu see maanDub.

## Arvutus

```
7 domeeni, kaalutuD:
  Sissetulek                           22,5%
  TööHõive                             22,5%
  Haridus, OskuSed ja Treening          13,5%
  TervisE-PuudusEd ja PuudE             13,5%
  Kriminaalsus                           9,3%
  BarjäärId ElamisPinDale ja TeenusteLe   9,3%
  ElukeskkonD                            9,3%

Igal domeenI-skooril: indikaatorid standardiseeritud
(rangjastatuD, seejärel transformeeritud normaaljaotuSeLe)
ja kombineeritud eksponentsiaalSe transformatSiooniGa, nii
et kõrgE puudus mistahes üksikuL indikaatoriL ei saaKs
täielikult tühistataD madalaST puudusESt teistEl selleS
domeeniS.

IMD komposiiTne-skoor (LSOA) = Σ (domeenI-skoor × domeenI-
                               kaal)
RangjastA LSOAd komposiiTsE-skoori järGi → 1 (kõige
puudulikuM) kuni 32 844 (kõige vähem puudulik)
DetsiilId: rang ÷ 3284 (ca.), detsiil 1 = kõige puudulikuMaD
10% LSOAST
```

## Läbitöötatud näide

**LSOA komposiiTnE-skoor**, kasutaDes illustratiivseid standardiseeritud domeenI-skoore (0 = mitte mingit puudusE-signaali, kõrgeM = rohkem puudulik):

```
Sissetulek               0,35 × 0,225 = 0,07875
TööHõive                 0,30 × 0,225 = 0,06750
Haridus                  0,20 × 0,135 = 0,02700
Tervis                   0,15 × 0,135 = 0,02025
Kriminaalsus             0,10 × 0,093 = 0,00930
BarjäärId ElamisPinDale  0,05 × 0,093 = 0,00465
ElukeskkonD              0,08 × 0,093 = 0,00744

KomposiiTnE-skoor = 0,07875 + 0,06750 + 0,02700 + 0,02025
                   + 0,00930 + 0,00465 + 0,00744 = 0,21489
```

See komposiiTnE-skoor on seejärel rangjastatuD vastu kõigi 32 844 LSOA skooriDeLe. Kui see paigutab LSOA rangiLe 2950, langeb see detsiiliLe 1 (2950 ÷ 3284 ≈ 0,9, dvs. sees kõige puudulikuMaTeST 10%-St kvartaliTeST Inglismaal) — mis mitmeLe rahastuSE-formuLiLe on tärskel, mis avaB õigustatuSe, ükskõik, kuidas ümbritsev kohaliK omavalitsuS skoorib keskmiselt.

## Seos tarkvaraarendusega

- Mistahes teenus, mis geokoDeerib kasutajaid postI-koodiLe või LSOA'le, saab liiTuDa avaldatuD IMD-opSingu-tabeliGa (tasuTA, versioneeritud CSV MHCLG'St), lisaMaKs puudusE-detsiili kovariaaDiKs — outreachI-sihtimiSeKs, juhtumiKoormuse-prioriseerimiSeKs, või tulemuste raporteerimiSeKs puudusE-bänDi kaupa, kogumaTa uuT personaalSEt andmet.
- IMD-detsiil on standard õiglusE-kontroll statslikuTeLe digiTeenustELe: teenuse-kasutuselevõtu, lahkuMisE, või rahulolu tvär-tabuleerimine IMD-detsiili kaupa eksponeerib ligiPääsu-lünGad, mida aggregeeritud mõõdik peiDaB — vaata [digitaalne kaasatuS](../digitaalne-kaasatus/) ja [kodaniku rahulolu mõõdikud](../kodaniku-rahulolu-mõõdikud/).
- Sest IMD-rang on relatiivne (see summeerub alati fikseeritud settiKs rangiDeST üle Inglismaal), ei saaB see näidaTa, kas puudus rahVuslikult tõuseb või langeb aja jooksul — ainult, millised alaD rangjastuvaD, kuS relatiivSelt üksteiseLe seL väljaanDel; ei ehita absoluutsE-trendi-dashboarde toore IMD-rangi peal üksi.

## Lõksud

- **IMD-rangiDE võrdlemine üle väljaanDete (2015 vs. 2019) ajaTrendiNa.** AlusOlevaD indikaatorid, geograafiaD, ja metodoloogia kõik muutuvaD väljaanDeTE vahel; MHCLG selgeSõnaliselt soovitab vastu rangi-muutuSte kasutamiSeLe tõenDiNa, et ala saiS rohkem või vähem puudulikuKs.
- **LSOA-tasandi-IMD rakendamine indiviidiDeLe.** LSOA detsiiliS 1 sisaldab ikka mitte-puudulikke leibkonDi, ja detsiili-10-LSOA sisaldab ikka puudulikke; IMD kirjelDab alaSid, ei inimesi, ja selle kasutamine individuaalsE-õigustatuSe-proksiNa misKlassifitseerib mõlemad suunad.
- **DomeenI-tasandi-detaili ignoreerimine komposiiTsE-rangi kasuks.** Kaks LSOAt identiliseGa komposiiTseGa skooriGa saaVaD omaDa täiesti erinevaid domeenI-profiile (üks tervise-puudulik, teine kriminaalsuse-puudulik); sihtimiSE-skeem, mis sihib üht probleemi, peaks kasutama relevantSEt domeenI-skoori, ei segatuD komposiiTi.

## Allikad

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
