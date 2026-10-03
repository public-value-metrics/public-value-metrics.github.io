# Sotsiaalse kulu-kasu-analüüs (SCBA)

Sotsiaalse kulu-kasu-analüüs konverteerib iga poliitika või programmi kulu ja kasu — turu- ja mitte-turu — ühiseKs rahaühikuKs, diskonteerib tuleviku rahaVood tänapäeva väärtuseKs, ja netteerib need kokku, tootaDES ühe numbri: muudab see ettepanek ühiskonna paremaKs, ja kui palju?

## Miks see on oluline

SCBA on vaikimisi kvantitatiivne meetod [Green Book hinnangu](../green-book-appraisal/) majanduslikus juhtumis: HM Treasury juhend nõuab ettepanekutelt positiivse neto-tänapäeva-sotsiaalse-väärtuse (NPSV) demonstreerimist, kus kasusid saab usutavalt monetiseerida, kasutaDES maksmisValmidust basisPrintsiibiKs mitte-turu kaupadele (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Peatükk 5). DistsipliIn, mida see jõustab, on, et "sotsiaalne" kulu-kasu-analüüs ei ole sama harjutus kui eraSektori investeeringuHindamine: see peab sisaldama kulusid ja kasusid, mis langevad kolmandatele osapoolteLe, kes ei ole tehingu osapooled (eksternaalsused), see peab kasutama [sotsiaalset diskontomäärA](../social-discount-rate/) mitte kommertsliKKu kapitaliKulu, ja see peaks rakendama [jaotuslikKu kaalumist](../distributional-weighting/), kus nael loeb rohkem vaesemale leibkonnale kui rikkamale.

Kus SCBA kokkuVariseb, on täpselt see, kus selle kriitikud ootavad: kaubad, millel pole turuAnaloogi — puhas õhk, sotsiaalne kokKuHoidvus, päästetud elu väärtus — peavad olema monetiseeritud, kasutaDES [stated preference](../stated-preference-valuation/) või [revealed preference](../revealed-preference-valuation/) meetodeid, või [varjuHind](../shadow-pricing/) peab olema konstrueeritud. Kui monetiseerimine on vaieldav, mitte lihtsalt raske, soovitab Green Book ise tagasi langeda [kuluefektiivsuse-analüüsi](../cost-effectiveness-analysis-in-government/) või [multikriteeriumi-otsuste-analüüsi](../multi-criteria-decision-analysis/), mitte sundiDES numbrit, mida keegi ei usu.

## Arvutus

```
NPSV = Σ [t=0 kuni T] (Kasu_t − Kulu_t) / (1 + r)^t

kus:
  Kasu_t = kõik monetiseeritud kasud aastal t, sealhulgas
           mitte-turu kaubad väärtustatud stated/revealed
           preference või varjuHinnA kaudu
  Kulu_t = kõik monetiseeritud kulud aastal t, sealhulgas
           ressursside alternatiivKulu (vaata
           ../opportunity-cost-in-public-spending/)
  r      = sotsiaalne diskontomäär (HM Treasury seab 3,5%,
           langedes madalaMAteLe määrAdeLe pärast aastat 30,
           Green Book Lisa A kohaselt)
  T      = hindamisPerIood

Kasu-kulu-suhe (BCR) = Σ PV(Kasud) / Σ PV(Kulud)
```

BCR üle 1 (või NPSV üle nulli) näitab netoSotsiaalset väärtust. Green Booki value-for-money kategooriad (kasutusel transPordi ja infrastruktuuri hindamises) märgistavad BCR-vahemikke: alla 1,0 on halb väärtus, 1,0-1,5 on madal, 1,5-2,0 on keskmine, 2,0-4,0 on kõrge, ja üle 4,0 on väga kõrge. TundlikkuseAnalüüs — NPSV uuesti käivitamine pessimistlikE ja optimistlikE eeldusteGa — on kohustuslik, mitte valikuline, sest monetiseeritud mitte-turu kasud kannavad laiaD ebaKindlusVahemikkE.

## Läbitöötatud näide

**Kohalik omavalitsus**: linnavalitsus hindab 3m£ investeeringut uude jalgrattaGA- ja jalgSi-liikumise võrgustikKu üle 20-aastaSe hindamisPerIoodi 3,5% diskontomäärAGa.

```
Kulud: 3m£ kapital aastal 0, 50 000 £/aastas hooldus
(aastad 1-20)
PV(hooldus) ≈ 50 000 £ × 14,2 (20-aastane annuiteediFaktor
3,5% juures) ≈ 710 000 £
KoguPV(kulud) ≈ 3,71m£

Kasud (kõik monetiseeritud avaldatuD DfT/WHO
väärtustamisRiistadega):
  Tervise-kasu suurenenud füüsilisest aktiivsusest:
  180 000 £/aastas
  PuudumisE vähenemine: 40 000 £/aastas
  Dekongestioon (vähem autoSõite): 60 000 £/aastas
  KoguKasuVoog: 280 000 £/aastas
PV(kasud) ≈ 280 000 £ × 14,2 ≈ 3,98m£

NPSV = 3,98m£ − 3,71m£ = +0,27m£
BCR = 3,98 / 3,71 = 1,07 → "madal" value for money
```

Skeem läbib lati, kuid ainult napiLt; tundlikkuseKäivitus 20% madalaMA tervise-kasu hinnanguGa (peegeldaDES tõelist ebaKindlust füüsilise-aktiivsuse väärtustamises) pöörab BCR alla 1,0, mis on täpselt, miks Green Book nõuab tundlikkuseTabeli avaldamist koos pealKirjaNumbriGa, mitte ainult keskSE hinnangu.

**Heategevusorganisatsioon**: imikuSuremuse-ennetamise programm, mis maksab 500 000 £/aastas, on hinnatud kasutaDES statistilise-elu-väärtust (VSL) — varjuHinD, mitte vaadeldav turuHinD — ligikaudu 2,1m£ (HM Treasury 2023. aastal-uuendatud näitaja, ise tuletatud stated-preference-uuringuteSt). Ühe imikuSuremuse vältimine aastas 500 000 £ kulu vastu annab BCR 4,2, mugavalt "väga kõrge" väärtuse — kuid kogu tulemus toetub VSL-näitajale, mis on, miks mistahes SCBA, mis kasutab VSL, peab selle avaldama eeldusEna, mitte faktiNa.

## Seos tarkvaraarendusega

SCBA on loomulik raamistik platVormi- ja infrastruktuuri-investeerimis-otsuste jaoks valitsuse tarkvaras — jagatud identiteediPlatVormi võrdlemine osakondlike punktLahendusteGa, näiteks, nõuab kasude monetiseerimist nagu vähendatud duplikaat-pardale-mineku-kulu, vähendatud pettus, ja kiirem teenuseni-jõudmise-aeg, millel ei ole turuHinda iseEnesest. Insenerid, kes ehitavad aluseOlevat teenust, peaksid eeldama, et programmiJuhid küsivad sisendeid sellele analüüsile: transaktsioonide ühikuKulud (vaata [kulu transaktsiooni kohta](../cost-per-transaction/)), oodatud mahud, ja degradatsiooni/seisakuKulud. DistsipliIn, mida on kõige olulisem importida: diskonteeri tuleviku kasud, nimeta kontrafaktuaalne baasJoon selgeSõnaliselt (vaata [kontrafaktuaalne analüüs](../counterfactual-analysis/)), ja esita kunagi ühte punktHinnangut selle tundlikkuseVahemikuta.

## Lõksud

- **Kasude topelt-arvestamine.** Nii "säästetud aja" kui "selleSt ajaSt saadud tootlikkuse" arvestamine eraldi kasuReaDeNa ülehindab juhtumit; säästetud aeg on kasu, selle edasine kasutus ei ole täiendav, kui see ei ole sõltumatult tõendatud.
- **Nihutatud kulude vahele jätmine.** Skeem, mis liigutab trängi ühelt teelt teisele, või liigutab pettust ühest kanalist teise, ei ole loonud netoKasu, mida selle pealKirjaNPSV implitseerib — vaata [nihutamine ja omistamine](../displacement-and-attribution/).
- **ERA diskontomäärA kasutamine.** KommertsliKu kapitaliKulu (ütleme 8-10%) rakendamine sotsiaalseS diskontomäärAs asemel alaHindab süstemaatiliselt pikaHorisondiliste avalikuDE kasuDE, nagu tervise- ja keskkonna-kasusid — vaata [sotsiaalne diskontomäär](../social-discount-rate/).
- **VaieldAmatu monetiseerimine ja vaieldAVA käega-viipAmine.** Kui kaks-kolmandikku ettepaneku kasust on kindlalt monetiseeritud efektiivsusSääst ja üks-kolmandik on nõrgalt monetiseeritud heaoluKasv, segab pealKirjaNPSV vaikselt kõva numbri pehmeGa; raporteeri need eraldi.

## Allikad

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
