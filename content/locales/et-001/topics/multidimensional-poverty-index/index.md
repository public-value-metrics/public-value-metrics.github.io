# Multidimensional Poverty Index (MPI)

MPI mõõdab vaesust kattuVaTe puuduSteNa, mida isik kogeb samaAegSelt — tervises, hariduSeS, ja elamisStandardites — selle asemel, et seda mõõdetaKs ainult sissetulekuGa, mis langeb alla joonE. Selle väljaTöötaS Oxford Poverty and Human Development Initiative (OPHI) Sabina Alkire'i ja James Foster'i poolt, ja seda on avaldatuD koos UNDP'GA igAS Human Development Report'is alates 2010, koos [Human Development Index'iGa](../human-development-index/).

## Miks see on oluline

SissetulekU-vaesuSE-joonED missiVaD inimesed, kes oMavaD piisavalt kontant-sissetulekut, kuid kelLel puudub puhas vesi, koolihariDus, või kes elavaD üle lapse surma — ja need missiVaD faktI, et puudused klastEruvaD: leibkond ühEta elektriTa on disproportsionaalSelt tõenäoliseLt ka ühEta sanitatSiooniTa ja oMab allToitunuD lapse. Alkire-Foster-meetod, millE peal MPI on ehitatud, loeB igA isikU puudusi üle kümnE indikaatori, grupeeritud kolmEks võrdSelt kaalutuD dimensiooniKs — tervis, haridus, elamisStandardid — ja klasseFitseerib isiku "MPI-vaeseKs" ainult, kui nendE kaalutuD puudusE-skoor ületab fikseeritud tärskli, fikseeriDes kattuvuSt, mida komplekt eraldi üksik-indikaatori-statistikuid ei saaKs. OPHI avaldab täieliku metodoloogia ja riigi-andmed <https://ophi.org.uk/multidimensional-poverty-index/>-s; globAalnE MPI, millE see vedaB koos UNDP'GA, katab nüüD üle 110 riigi. Tarkvara jaoks, mis on ehitatud anti-vaesuSE-programmidELe — kontant-ülekanDed, sotsiaalhoolDuse-triaazh, abi-sihtimine — on MPI indikaatori-sett sageli lähim asi standardiseeritud puudusE-skeemiLe, mis on juba valideeritud dusinaTE rahVuslikKu statistikaAmeti poolt.

## Arvutus

```
10 indikaatorit, 3 dimensiooni, kumbki dimensioon kaalutuD
1/3-GA:

Tervis (1/3):            toiTumine (1/6), lasteSuremuS (1/6)
Haridus (1/3):            koolihariDuse-aastaD (1/6),
                         kooliKohalKäimine (1/6)
ElamisStandardid (1/3):   küpsetamise-kütus, sanitatsioon,
                         joogiVesi, elektriSus, elamispind,
                         varad (1/18 igaüKs)

PuudusE-skoor (c) = indikaatorite kaalude summA, millES
                   isik on puudulik

isik on "MPI-vaene", kui c ≥ 1/3 (vaesuSE-lõiKEpunkt,
k = 33%)

H (hulgaSuhe) = MPI-vaeste arv / koGu populatsioon
A (intensiivsus)       = keskmine puudusE-skoor ainult MPI-
                        vaesTe seas

MPI = H × A
```

Sest MPI multipliTseerib *osakaalu*, mis on vaesEd, sellEGa, *kui* vaeSEd nad on, saaVaD kaks regiooni samaGa hovedTellinG-suhteGa omaDa väga erinevaid MPI-skoore, kui puudused on raskeMaD üheS — sama "ei substitUtsiooni üle dimensioonide"-loogika, mis on HDI geomeetrilise keskmise taga.

## Läbitöötatud näide

**1000-inimese rahVuslik uuring**: 350 identifitseeritaKse multidimensiOnaalSelt vaeseKs (puudusE-skoor ≥ 33%). Nende 350 vaese indiviidi seaS, on keskmine puudusE-skoor 45%.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Kahe distriktI võrdlemine võrdSe hulgaSuheGa**: Distrikt A oMab H = 0,30 ja A = 0,40 (palju vaeseid, moderaatSelt puudulikud); Distrikt B oMab H = 0,30 ja A = 0,60 (sama arv vaeseid, kuid raskeMalt puudulikuD — puudub elektriSus *ja* sanitatsioon *ja* kooliKohalKäimine samAAegSelt).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Sama hulgaSuhe, 50% kõrgEM MPI Distriktis B — sihtimiSsüsteem, baseeritud vaid hulgaSuhe-vaesuSel, rangjastaKs kahte distrikti identiLiselt ja missiKs, et Distrikt B vajab sügavaMat interventsiooni.

## Seos tarkvaraarendusega

- SotsiaalseteLe programmidELe juhtumiHalDuSe- ja õigustatuSe-süsteemid säilitaVaD sageli juba mitmed kümneST indikaatoriST (elamispind, kooliKohalKäimine, tervise-markerid) eraldi siloDes; Alkire-Foster-tellimiSE-meetod on valmiS skeem nende kombineerimiSeKs üheKs puudusE-skooriKs, selle asemel, et ehitada skräddersyd skoorimis-mudel algusest peale.
- HulgaSuhe-/intensiivsuSe-jaotuS (H × A) on üldiselt kasulik mustEr igaLe dashboardile, mis raporteerib "kui palju on mõjutatuD" koos "kui tõsiselT" — mõlema kollapseerimine üheKs numbriKs, nagu toores-prevalentsi-statistikaD teevaD, peidaB täpselt sedA sihtGruppi, mis vajab kõige rohkem ressursSi.
- MPI-stiiLiSed indikaatori-dashboardid koMpoNeeruvaD naturaalSelt [kulu-abiSaaja-kohta](../kulu-abisaaja-kohta/)-raporteerimiSeGa anti-vaesuSE-programmidELe: kulu MPI-vähenemiSe-punkti kohta on kaitstAv ühik erinevaTe interventsioonide võrdlemiSeKs (kontant-ülekanne vs. sanitatSiooniInfrastruktuur).

## Lõksud

- **Kümne indikaatori käsitlemine universaalseteNa.** OPHI globAalseD MPI-indikaatorid on kalibreeritud tvär-riigi-võrreldAvuSeKs; rahVuslikud MPId (palju riike, sealhulgas mitu LõuNa-AasiaS ja AafrikaS, avaldavaD oma) kohandavaD indikaatoreid ja kaalud lokaalSeLe kontekstiLe, ja need kaks ei ole otse võrreldAvad.
- **H raporteerimine üksi.** HulgaSuhe ignoreerib intensiivsust täielikult; raporteeri alati A koos sellEGa, või MPI ise.
- **Eeldamine, et MPI-vaene ja sissetulek-vaene on sama populatsioon.** OPHI oma riigi-brieFid näitaVad tüüpiliselt ainult osaLiSt kattuvust nendE kahE vahel; programm, mis sihib ainult sissetulek-vaeseid, missiB süstemaatiLiselt meaningful osa multidimensiOnaalSelt vaestEst.

## Allikad

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
