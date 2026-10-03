# Alternatiivkulu avalikes kulutustes

AlternatiivKulu on parima alternatiivi väärtus, millest loobutakse, kui avalik organ kohustab raha, personaliAega, või poliitilist kapitali ühele variandile teise asemel. Fikseeritud eelArvega osakonnas on iga nael, mis kulutatakse ühele programmile, nael, mida ei saa kulutada järgmisele parimale programmile — otsuse tegelik kulu ei ole see, mida ta kulutab, vaid see, mida ta tõrjub.

## Miks see on oluline

Avalikud eelArved on kuluLimiteeritud kulutusÜlevaatuse perioodi jooksul, nii et — erinevalt kasvavast eraFirmast — valitsuse osakond ei saa lihtsalt "leida rohkem raha" hea idee jaoks; selle rahastamine tähendab midagi muud rahastamata jätmist. HM Treasury Green Book käsitleb seda fundamentaalsena: igat hinnangut nõutakse võrdlema interventsiooni "do minimum" (tee minimum) baasJoonega *ja* samu ressursse realistlike alternatiivKasutustega, täpselt sellepärast, et Treasury kulutusMeeskonna tegelik küsimus ei ole kunagi "on see hea?" vaid "on see parem kui mida muud saaks selle raha eest ostA?" Green Booki tuumHindamisPrintsiip — et avalikud ressursid peaksid voolama interventsiooni, millel on kõrgeim neto sotsiaalne väärtus naela kohta — on alternatiivKulu poliitikana sõnastatud.

Seda on lihtne öelda ja raske rakendada, sest "järgmine parim alternatiiv" on harva ühes äriJuhtumis nähtav. 2 miljoni naela noorteTöötusGrandiProgrammi võrreldakse äriJuhtumis millegi mittetegemisega — kuid ausa võrdlusAlusena peaks olema järgmine parim noorteTöötusInterventsioon, või tõepoolest järgmine parim 2 miljoni naela kasutus kõikjal portfellis, sealhulgas mitte-töötusega seotud kulutused. Magenta Book (HM Treasury, 2020) hoiatab selgeSõnaliselt, et hindamised, mis võrdlevad "interventsiooniga" "interventsioonita"-ga, alaHindavad latti, mille interventsioon peab läbima, sest "ilma selle interventsioonita" ei ole sama kui "ilma mitteMillegagi" — vabastatud raha rahastab midagi muud.

## Arvutus

```
A valimise alternatiivKulu = parima loobutud alternatiivi B
                             väärtus

A neto avalik väärtus = väärtus(A) − väärtus(B), mitte
                        väärtus(A) − 0
```

Universaalset formulat ei ole, sest loobutud alternatiiv on konteksti-spetsiifiline, kuid distsipliin generaliseerub: identifitseeri realistlik järgmine parim kasutus samale eelArveReale (mitte idealiseeritud "ei tee midagi"), hinda see samal alusel (monetiseeritud, kus võimalik, [sotsiaalse kulu-kasu-analüüsi](../social-cost-benefit-analysis/) kohaselt), ja lahuta.

## Läbitöötatud näide

**Osakonna eelArveRida**: 5 miljoni naela digiTransformatsiooniFond saab rahastada täpselt üht kahest ettepanekust sel majandusAastal.

- *Variant A*: uus juhtumiHaldusPlatvorm, monetiseeritud kasu 7,2 miljonit naela 5 aasta jooksul (efektiivsusSäästud pluss kiirem juhtumiLahendus).
- *Variant B*: identiteedikinnitusTeenus, mida jagavad kolm osakonda, monetiseeritud kasu 6,4 miljonit naela 5 aasta jooksul.

Naiivne äriJuhtum A jaoks võrdleb 7,2 miljoni naela kasu 5 miljoni naela kuluga ja raporteerib 1,44:1 kasu-kulu-suhte — ilmselt tugev. Kuid sest A ja B konkureerivad sama 5 miljoni naela eest, on A valimise alternatiivKulu B 6,4 miljoni naela loobutud kasu. *Neto* juhtum A kasuks üle realistliku alternatiivi on ainult 7,2m − 6,4m = 0,8 miljonit naela, mitte täis 7,2 miljoni naela pealKiri. Kui kolmas variant, C, pakuks 7,5 miljonit naela kasu sama 5 miljoni naela eest, hävitaks A rahastamine C üle 0,3 miljonit naela avalikku väärtust, isegi kui A oma äriJuhtum näeb isoleeritult täielikult õigustatud välja.

**Kohaliku omavalitsuse personaliAeg**: linna kolme-liikmeline andmeMeeskond saab ehitada kas eluasemeOotenimekirjaDashboard'i (hinnanguliselt säästab 400 ametnikuTundi/aastas, väärtustatud 28 £/tund = 11 200 £/aastas) või toetusePettuseTriaaziRiista (hinnanguliselt väldib 85 000 £/aastas valeMakseid). DashboardI ehitamisel on alternatiivKulu 85 000 £/aastas loobutud, mitte lihtsalt andmeMeeskonna palgaKulu — "tasuta" sisemise ehituse tegelik kulu on palju suurem kasu, mida meeskond oleks saanud toota mujal.

## Seos tarkvaraarendusega

InseneriKapatsiteet avalikus organis on isegi piiratud eelArve — sprindiKapatsiteet, mitte naelad — ja täpselt sama distsipliin rakendub otse:

- Nimeta alati võrdlusAlus: funktsiooni äriJuhtum peaks ütlema, mida muud samad meeskond-nädalad saaksid tarnida, mitte ainult tema oma tulu.
- Käsitle "meil on inseneriKapatsiteeti üleJäänud" alternatiivKulu-analüüsi algusena, mitte lõpuna — vaba kapatsiteet omab endiselt parimat alternatiivKasutust, isegi kui see kasutus on tehnilisteVõlgade tagasimaksmine (vaata [tehniline võlg kui avaliku väärtuse erosioon](../technical-debt-as-public-value-erosion/)).
- Ühenda see otse [value for money](../value-for-money/)'ga: VFM "economy" test on mõttetu ausa alternatiivKulu-võrdlusAluseta, ja [viivituskulu avalikes programmides](../cost-of-delay-in-public-programmes/)'ga, mis hindab samasse loobutud-alternatiivi-loogika ajaDimensiooni.

## Lõksud

- **"Ei tee midagi" võrdlemine järgmise parima alternatiivi asemel.** Green Book nõuab "do minimum" baasJoont täpselt sellepärast, et tegelik alternatiivKulu on harva null; äriJuhtum, mis läbib ainult "ei tee midagi" latti, ei ole näidanud, et see edestab realistlikku alternatiivi.
- **Osakondade-vahelise konkurentsi ignoreerimine samale potile.** EelArveReAd, mis näevad ühe direktoraadi sees piiratuna välja, konkureerivad sageli kõrgemal tasemel (kulutusÜlevaate, kapitaliProgrammi), kus tegelik alternatiivKulu realiseerub.
- **Eeldamine, et vabastatud personaliAeg omab null edasist väärtust.** "Säästetud" aeg loob väärtust ainult, kui see rakendub midagi väärtuslikku; kui alternatiivKasutus ei eksisteeri, on sääst nominaalne.

## Allikad

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — the canonical empirical demonstration of opportunity cost as
  a binding constraint in a fixed public budget. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
