# Jaotuslik kaalumine

Jaotuslik kaalumine kohandab kulu või kasu rahalist väärtust vastavalt selle saajale, printsiibil, et lisaNael on väärt rohkem vaesele leibkonnale kui rikkale. HM Treasury Green Book annab selgeSõnalise meetodi selle kaalumise rakendamiseks, mis põhineb sissetuleku langeval marginaalKasulikkusel, nii et hindamised ei käsitleks vaikselt jõukaima detsiili saadud naela võrdväärsena vaeseima saadud naelaga.

## Miks see on oluline

Standardne kulu-kasu-analüüs summeerib naelu küsimata, kelle naelad need on, mis implitsiitselt eeldab, et nael on kõigile sama väärt — eeldus, mille ekonomistid on ammu teadnud valeks olevat. Leibkond, mis teenib 15 000 £/aastas, kogeb 1000 £ kasvu väga erinevalt kui leibkond, mis teenib 150 000 £/aastas, sest sissetuleku marginaalKasulikkus langeb sissetuleku kasvades. KaalumataJäetult soosib standardHindamine süstemaatiliselt interventsioone, mis on kasulikud jõukamatele, juba parema-positsiooniga gruppidele, sest nende kõrgem kulutusVõimsus inflatsioonib neile jõudva kasu rahaliseHindamisE (pargiUuendus kalli elamispinna kõrval "näitab" suuremat kinnisvaraVäärtuse-kasu kui sama uuendus odava elamispinna kõrval, puhtalt sellepärast, et hinnad on kõrgemad, mitte sellepärast, et heaoluKasv on suurem).

Green Booki täiendavJuhend jaotusliku analüüsi kohta, mida tugevdas Treasury 2020. aasta ülevaade, mis vastas kriitikale, et hindamisMetodoloogia süstemaatiliselt soosib Londonit ja Kagu-Inglismaad, sätestab formaalse kaalumisLähenemise, mis põhineb eeldataval sissetuleku marginaalKasulikkuse elastsusel ligikaudu 1,3 — mis tähendab, et sissetuleku kahekordistumine umbes poolitab (konkreetselt, 2^-1,3 ≈ 0,41 korda) lisaNaela marginaalVäärtuse. See ei ole ümardamiskohandus: selle rakendamine võib muuta, kumb kahest konkureerivast programmist näitab kõrgemat neto-tänapäeva-väärtust, eriti kui võrreldakse interventsiooni, mis on koondunud vähemkindlustatud piirkonda, ühega, mis on levinud üldelanikkonna peale.

## Arvutus

Green Booki jaotuslik kaal naela kasu jaoks, mis läheb leibkonnale sissetulekuTasemel y, võrreldes naelaga riiklikul keskmisel sissetulekuTasemel ȳ:

```
Kaal(y) = (ȳ / y)^e

kus:
  y  = leibkonna sissetulek (või mõjutatud grupi sissetulek)
  ȳ  = keskmine (võrdlusAlane) leibkonna sissetulek
  e  = sissetuleku marginaalKasulikkuse elastsus (Green
       Book: ligikaudu 1,3)
```

Kaalude rakendamine neto kasudele:

```
Kaalutud kasu = Σ [kaalumata kasu grupile i × Kaal(y_i)]
```

Grupp, mis teenib poole riiklikust keskmisest (y = 0,5ȳ), saab kaalu (1/0,5)^1,3 = 2^1,3 ≈ 2,46 — iga sellele grupile mineva kasu nael loeb väärtustatult umbes 2,46 korda rohkem kui nael keskmise-sissetulekuga leibkonnale.

## Läbitöötatud näide

**Kaks konkureerivat kohalikku programmi**, mõlemad kaalumata neto kasuga 2 miljonit naela/aastas, konkureerivad sama regionaalse kasvuFondi eest:

- *Programm A*: äriToetusSkeem jõukas linnas, keskmine leibkonna sissetulek 45 000 £ (ligikaudu 1,3× eeldataval riiklikul keskmisel 35 000 £).
- *Programm B*: oskusteProgramm vähemkindlustatud piirkonnas, keskmine leibkonna sissetulek 18 000 £ (ligikaudu 0,51× riiklikust keskmisest).

```
Kaal(A) = (35 000 / 45 000)^1,3 = (0,778)^1,3 ≈ 0,72
Kaal(B) = (35 000 / 18 000)^1,3 = (1,944)^1,3 ≈ 2,53

Kaalutud kasu A = 2 000 000 £ × 0,72 = 1,44 miljonit naela
Kaalutud kasu B = 2 000 000 £ × 2,53 = 5,06 miljonit naela
```

KaalumataJäetult on kaks programmi võrdsed. JaotuslikuleMõjule kaalutuna on Programm B kasu rohkem kui kolm korda suurem — tulemus, mis pöörab rahastamisSoovituse ümber ja peegeldab Green Booki selgeSõnalist eesmärki nõuda kaalumise näitamist, mitte ainult kaalumata kasu-kulu-suhte.

**HeategevusToetusE eraldamine**: rahastaja, kes võrdleb 500 000 £ toetust, mis jõuab 1000 madalaSissetulekuga leibkonnani (kaal ≈ 2,0, kaalutud väärtus 1 miljon £-ekvivalenti) sama 500 000 £-ga, mis jõuab 1000 keskmiseSissetulekuga leibkonnani (kaal ≈ 1,0, kaalutud väärtus 500 000 £-ekvivalenti), peaks näitama jaotuslikku juhtumit selgeSõnaliselt oma nõukoguDokumendis, mitte jätma selle tuletamisele.

## Seos tarkvaraarendusega

Jaotuslik kaalumine ilmub harva otse tarkvaraTarneMõõdikutes, kuid see peaks kujundama, kuidas inseneri- ja andmeMeeskonnad disainivad mõõtmist ja sihtimist:

- Impact-dashboardI või kasuArvutajA ehitamisel paljasta mõjutatute sissetuleku- või deprivatsiooniProfiil, mitte ainult agregeeritud kasuSumma — agregeeritud näitajad jaotusliku lahtiJaotuseta peidavad täpselt ülalKirjeldatud pöörde.
- Ühenda teenuseDisaini sihtimisLoogika sama deprivatsiooniAndmetega, mida Green Book kasutab — vaata [mitmekordse deprivatsiooni indeks](../index-of-multiple-deprivation/) — nii et digiTeenuse ulatust saab hinnata õigluse, mitte ainult efektiivsuse jaoks (vaieldav neljas E [value for money](../value-for-money/)'s).
- Kui algoritm eraldab nappi ressurssi (vastuvõtuAegu, juhtumitöötajaAega, toetust), toodab kaalumata "maksimeeri koguKasu" eesmärgiFunktsioon konstruktsiooni poolest sama kallutatuse, mida Green Booki kaalumine eksisteerib korrigeerima — märgi see selgeSõnaliselt poliitikaOmanikele enne optimeerimist.

## Lõksud

- **Jaotuslike kaalude ebakonsistentne rakendamine üle portfelli.** Ühe programmi kasude kaalumine, kuid mitte selle võrdlusObjekti, toodab kallutatud, mitte ausama, võrdluse; Green Book nõuab võrdväärsetE käsitlust.
- **Kinnisvara- või turuVäärtuste kasutamine heaolu proxy'na kohandamata.** TuruHinnad on ise moonutatud olemasoleva sissetulekuEbavõrdsuse poolt, mis on täpselt see, mida jaotuslik kaalumine on mõeldud korrigeerima — kohandamata turuVäärtuste kasutamine võib kallutatust topelt arvestada.
- **Grupi-sisesE varieeruvuse ignoreerimine.** Kaalumine piirkonna-keskmise sissetulekuga (nt mitmekordse deprivatsiooni indeksi detsiiliga) võib valesti esitada indiviide, kes ei vasta oma piirkonna keskmisele; kasuta kõige peenema-detailsusastmega mõistlikult saadaolevaid sissetulekuAndmeid.
- **1,3 elastsuse käsitlemine universaalse konstandina.** Green Book ise märgib, et see on hinnang usutava vahemikuga; testi tundlikkust suuremate otsuste puhul alternatiivsete elastsuste vastu, mitte käsitle 1,3 täpsena.

## Allikad

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
