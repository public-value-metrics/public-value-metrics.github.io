# Põlvkondadevaheline õiglus ja jätkusuutlikkuse diskonteerimine

Tuleviku kulude ja kasude diskonteerimine tagasi tänapäeva väärtuseKs on standardPraktikA avalikus hindamiseS — vaata [sotsiaalne diskontomäär](../social-discount-rate/) — kuid mistahes positiivne diskontomäär, liitKasvanuD üle dekaadiDe või sajandiDe, kahandab kauGE tuleviku nulLiLe lähedaseKs tänapäeva termineiS. OtsusteLe tagajärGedeGa sajand või rohkem edasI — kliimaMuutuS, tuumaJäätmed, bioDiversiteedi-kadu, pensiOnide-jätkusuutlikuS — saaB see matemaatiline fakt eetiliseKs üheKs: standardnE diskonteerimine saaB muudaMa katastroOfilisE kahju tuleviku-generatSiooniDeLe näivaKs, tänapäeva-väärtuse-termineiS, vaevalt väärT väldiTaKs.

## Miks see on oluline

Ramsey-võrdsus, tuletatuD Frank Ramsey'i poolt 1928, dekomponeerib diskontomäärA kahE komponendiKs: puhas ajaPreferents (δ, kui palju me lihtsalt eelistame nüüD hiljemaLe, rikkusEst sõltumaTa) ja rikkuse-kasvu-efekt (η×g, kui palju me diskonteerime, sest tulevaseD generatsioonid eeldatavasti oMavaD rohkem rikkust, nii et ekstrA nael tähendab vähem neiLe). Ühendkuningriigi Green Book standardsE pikaAjalisE diskontomäärA on ehitatud selle võrdsuse peal ja järgib *langevat* skeemi, ei flat'i määrA — disain juuRdunuD Martin Weitzman'i tööS "gamma-diskonteerimiseST," mis näitab, et kui tuleviku diskontomäär ise on ebaKindel, langeb kinDluSe-ekvivalentNe määr, mida peaks rakendama, matemaatiLiselt aja jooksul, sest madalA-määrA-stsenaariuMid tuleVad domineeriMa, kauGemale, kui vaataD. Stern Review on the Economics of Climate Change (2006), juhiTuD Sir Nicholas Stern'i poolt, viiS eetiliseD debatti edasI: Stern argumenteeriS, et puhas ajaPreferents peaks olema seaTud ligiDale nulliLe (ta kasutaS δ ≈ 0,1%, peegeldaDes ainult väikseT tõenäosust tsivilisatsiooni-lõpetavA katastroFiST, ei genuine preferentsi olevikuLe üle tuleviku), produtseeriDes palju madalaMA efektiivse diskontomäärA, kui konventSionaalne Green-Book-praktikA, ja korresponDeerivalt, palju suuremA tänapäeva-sagaD kliima-tegevuseLe. KriitikuD (eriti William Nordhaus) argumenteerisiD, et Stern'i nulLi-ligiDane määr oli eetiliSelt kaitstAv, kuid inkonsistentne tegeliku vaadeldAva opSäästmise- ja investeerimiS-käitumiSeGa. VasTuolu ei ole tehniliNe märkuS — see on üksiK suurimA põhjus, miks kaks võrdSelt range ekonomisti saaVaD jõuDa wildLy erinevateLe järeldustELe sellE kohta, kui palju praegune generatsioon peaks sacrifitseerimA tulevikule, ja see on põhjuS, miks software, mis toetab pika-horisondi avalikuT investeeringu-hindamist, peab eksponeeriMa oma diskonteerimisE-eeldusi, ei maTma neid arvutustabeli vaikeVäärtuseSSE.

## Arvutus

```
Ramsey-võrdsus:   r = δ + η·g

  r = sotsiaalne diskontomäär
  δ = puhas ajaPreferents (kärsituSE-määr, rikkuseST
      sõltumaTa)
  η = tarbimise marginaalse kasulikkuse elastsus
  g = elanikU-kohase tarbimise oodatav kasvuMäär

Green Booki langev pikaAjaline skeem (illustratiivne,
praegused avaldatuD bänDid):
  Aastad 0-30:    3,5%
  Aastad 31-75:   3,0%
  Aastad 76-125:  2,5%
  Aastad 126-200: 2,0%
  Aastad 201-300: 1,5%
  Aastad 301+:    1,0%

Stern-Review-parameetriD: δ ≈ 0,1%, η = 1, g ≈ 1,3%  →
r ≈ 1,4%
```

## Läbitöötatud näide

**Tänapäeva väärtus £1 väldituD kahjuSt 100 aasta pärast**, kolmE diskonteerimiS-regiimi all:

```
Flat Green-Book-lühiAjalinE määr (3,5%, hoitud konstantSeNa
100 aastaks):
  PV = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ £0,032   (3,2 penni)

Green-Book-langev skeem (3,5% aastateks 1-30, 3,0% aastateks
31-75, 2,5% aastateks 76-100):
  faktor(1-30)  = 1,035^30  ≈ 2,807
  faktor(31-75) = 1,03^45   ≈ 3,782
  faktor(76-100)= 1,025^25  ≈ 1,854
  koGu faktor ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  PV = 1 / 19,68 ≈ £0,051   (5,1 penni)

Stern-stiiLinE-nulLi-ligiDane-puhas-ajaPreferents (r ≈ 1,4%
flat):
  PV = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ £0,250   (25,0 penni)
```

Sama £1 kahjuST, välditud sajandi pärast täna, on väärT 3,2p, 5,1p, või 25p täna, sõltuVaLt puhTaLt, millinE diskonteerimiS-konventsioon kasutatakse — ligi-kaheksa-kordnE vahemik, mis veaB, kas kliimaMildenduSSkeem kõrgeGa esiKuluGa ja tasuvuSeGa sajandi pärast klaarib positiivsE-NPV-bari üldSe. See on mehhanism kapitlI keskse hoiatuSE taga: mistahes meaningful-positiivsel flat-määral, piisavalt kauGE tuleviku-kahju on aritmeetiLiselt kustutatuD hindamiseST, selle tõeliseST tõsiduSeST sõltumaTa.

## Seos tarkvaraarendusega

- Mistahes pika-horisondi hindamis- või äriJuhtumi-riist (infrastruktuur, kliimaAdaptatsioon, pensioni-modelleerimine) peaks implementeerima Green Booki *langeva* skeemi, ei üksikut flat-määra — flat-määra vaikeVäärtus manustab vaikselt palju tugevaMA anti-tuleviku-kallutatuSe, kui praegune britI valitsuse juhend spetsifitseerib.
- DiskontomäärA ja horisont peaksid olema alati eksponeeritud nähtavateKs, auditeeritavateKs parameetriteKs hindamiStarkvaraS, nende tundlikKusEGa arvutuseL näidatuD selgeSõnaliselt (nagu läbitöötatud näiteS ülal) — määrA maTmine konfiguratSiooni-faili inviteerib täpselt sedA "peidetud-eetilinE-valik"-situatsiooni, mida Stern-Nordhause-debatt hoiatab vastu; see paarIStub transparentsuSE-pointiGa, mis on tehtud [looDusKapitali-arvestuseS](../natural-capital-accounting/) ja aluStab [sotsiaalse diskontomäärA](../social-discount-rate/)-teemat üldiselt.
- Kus programmi kasud on explicit põlvkondadevaheliseD (üleujutusKaitse, looDusKapitali-taastamine, pikaAjaline digitaalne infrastruktuur), peaks [sotsiaalne kulu-kasu-analüüs](../social-cost-benefit-analysis/) raporteerima tulemusi vähemalt kahE diskonteerimiS-eeldusE all (Green-Book-standard ja madalA-määrA-tundlikKuse-juhtum), selle asemel, et kasutada üksikut punkt-hinnangut, nii et otsuSeTegejaD näevaD, kuidas diskontomäärA-valik üksi liigutab vastust.

## Lõksud

- **Üksiku diskonteeritud NPV esitlemine ühEta tundlikKuse-vahemikuTa.** Arvestades, kui palju diskontomäär üksi muudab vastust pika-horisondi projektiDeLe, üleHindab üksik-määra-NPV materiaalSelt täpsust; raporteeri alati vahemik, mis katab vähemalt Green-Book-standarD ja madalA-määrA-stsenaariumI.
- **LühiAjalisE flat-määrA (3,5%) rakendamine multi-sajandi-hindamiseLe.** Green Booki oma juhend spetsifitseerib langeva skeemi täpselt sellepärast, et flat-määr hinnataKse sobimaTuKs rohkemaKs, kui roughLy 30 aastat; selle kasutamine ikkagi alaHindab pikaAjaliSi kulusid.
- **δ (puhta ajaPreferentsi) käsitlemine puhTalt tehniliSe parameetriNa.** Sterni nulLi-ligiDane väärtus ja Green Booki kõrgeM implitsiitne väärtus on mõlemad kaitstAvaD ainult eetiliseKs positsioonideKs sellE kohta, kui palju kaalu praegune peaB tuleviku, ei empiiriLiselt "korrektseD" või "ebaKorrektseD" numbrid; software peaks tegema eeldusE nähtavaKs, selle asemel, et esitleda üksT figuuri objektiivselT õigeKs.

## Allikad

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
