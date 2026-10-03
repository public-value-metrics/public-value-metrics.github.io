# Multikriteeriumi otsuste analüüs (MCDA)

MCDA skoorib ja kaalub variante vastu mitmele distinktSeLe, kaalutuD kriteeriumiLe korraga, tootaDES rangjastatud võrdluse sundimata iga kriteeriumi ühte raha- või naturaalühikuLiseSSE skaalasSE. See on hindamisMeetod otsuste jaoks, kus olulised tulemused tõepoolest ei saa redutseeruda ühte numbriKs.

## Miks see on oluline

Green Book selgeSõnaliselt sanktsioneerib MCDA (selle Box 2 juhtumiUuring-lisA ja Lisa A käsitlevad seda mõlemad otse) hindamisteL, kus kasud on "tõepoolest mõõtmatuD" — kus kõige konverteerimine rahaKs [sotsiaalse kulu-kasu-analüüsi](../social-cost-benefit-analysis/) kaudu, või ühte tulemuSeKs [kuluefektiivsuse-analüüsi](../cost-effectiveness-analysis-in-government/) kaudu, misRepreseteeriks otsust, selle selgitamiSe asemel (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Uue vangla asukohaValik, näiteks, kaalub kapitaliKulu kogukonnaMõju, transPordiÜhendatuSE, keskkonnaEfektI, ja personaliLe-värbatavuSE vastu — kriteeriumid, mis ei jaga ühist ühikut ja kus ühise ühiku (tüüpiliselt raha) sundimine salakAubaks väärtusHinnanguga suhtelisest olulisuseSt, ütleme, keskkonnaMõju versus kulu, riietatud objektiivse aritmeetikaNa.

MCDA ausus on ka selle peamine vulnerabilitet: sest kaalud määratakse selle poolt, kes hindamist juhib (või paneeliGa), on meetod seaduspärane vaid niivõrd, kuivõrd kaalumisProtsess. Green Booki juhend on selgeSõnaline, et kriteeriumid ja kaalud peavad olema kokkuLepitud ja avaldatud *enne* variantide skoorimist, täpselt selleKs, et vältida retsensenti, kes töötab tagasi eelistatuD variandiLt kaaludeNi, mis selle õigustaVad.

## Arvutus

```
Igale variandiLe i ja kriteeriumiLe j:
  Skoor_ij   = variandi sooritus selle kriteeriumi vastu
               (sageli 0-100 või 1-10, tõendiTest, eksperdi-
               hinnanguSt, või sidusgrupi-skoorimiSeSt)
  Kaal_j     = kriteeriumi j suhteline olulisus, kaalud
               liituvad 1-ks (või 100-ks)

Variandi i kaalutud skoor = Σ_j (Skoor_ij × Kaal_j)

Protseduur:
1. Lepi kriteeriumiSte sett ja kaalud kokku ENNE mistahes
   variandi skoorimist (swing-kaalumine või paariviiSiLine
   võrdlus, nt AHP, on levinud elitsitatsiooniMeetodid).
2. Skoori iga variant iga kriteeriumi vastu ühiseL skaalaL,
   tõendiSt, kus võimalik.
3. Arvuta kaalutud summad; rangjasta variandid.
4. TundlikkuseTesti kaalud: püsib rangjastus usutava
   erimeeleSuse ees selle kohta, kui palju iga kriteerium
   peaks loema?
```

MCDA ei tooda kaitstavat absoluutset väärtust nii, kui SCBA neto-tänapäeva-väärtus — see toodab ainult rangjastuse, mis on tingimuSlik kokkuLepituD kaalude suhtes. See on omadus, kui otsus on tõepoolest mõõtmatute kaupade vahetamiseSt, ja vastutus, kui kasutatakse raskeMa monetiseerimiSe-töö vältimiSeKs, kus monetiseerimine oli tegelikult võimalik.

## Läbitöötatud näide

**Kohalik omavalitsus**: linnavalitsus, mis valib asukohta uuele leibkonnaJäätmete ümberTöötlemisKeskuseLe, skoorib kolm asukohta vastu neljale kriteeriumiLe, kaalutuNa tvär-osakondliku paneeli poolt enne mistahes asukoha-külastust:

```
Kriteeriumid (kaal):     Kapitaliu kulu (30%)  Transport-
                         ühendatus (25%)
                         KogukonnaMõju (25%)  KeskkonnaMõju
                         (20%)

Asukohta skoorid (0-100, kõrgem = parem):
Asukoht A: kulu 80, ühendus 60, kogukond 40, keskkond 70
Asukoht B: kulu 60, ühendus 90, kogukond 70, keskkond 50
Asukoht C: kulu 90, ühendus 50, kogukond 80, keskkond 60

Kaalutud summad:
Asukoht A = 80(.30) + 60(.25) + 40(.25) + 70(.20)
          = 24+15+10+14 = 63
Asukoht B = 60(.30) + 90(.25) + 70(.25) + 50(.20)
          = 18+22,5+17,5+10 = 68
Asukoht C = 90(.30) + 50(.25) + 80(.25) + 60(.20)
          = 27+12,5+20+12 = 71,5
```

Asukoht C rangjastub kõrgeiMalt. TundlikkuseKäivitus, mis nihutab kogukonnaMõju kaalu 25%-lt 35%-le (võtaDES 10 punkti kapitaliKuluSt), muudab Asukoha C summa 71,5 − 3 + 8 = 76,5 ja Asukoha B 68 − 6 + 7 = 69-ks — Asukoht C juhib ikka, nii et rangjastus on robustSe selle usutava kaalumis-erimeeleSuse ees, mis on täpselt kontroll, mida Green Book ootab raporteeritavaKs.

**Heategevusorganisatsioon**: toetust-andev fond, mis valib võlanõustamise-teenuse, toidupanga-võrgustiku, ja finantsKirjaOskuse-programmi rahastamise vahel, kasutab MCDA, mitte SROI-d (vaata [sotsiaalne tulu investeeringult](../social-return-on-investment/)) täpselt sellepärast, et usaldusMehed on heas usus erimeeleL selle kohta, kas kriisiAbi või ennetus peaks kaaluma rohkem — MCDA laseb neil kokkuLeppida erimeeleSuse *kuju* (kaalu-vahemiku), mitte teeselda, et üks SROI-suhe seda lahendab.

## Seos tarkvaraarendusega

MCDA on loomulik riist tarnija- ja arhitektuuri-valikuKs, kui kriteeriumid tõepoolest konfliktivad — pilve-majutatuD ja kohapealse juhtumiHaldusSüsteemi vahel valimine kaalub kulu, andmeSuveräänsuse-riski, kättesaadavuse, ja tarneKiiruse viisidel, mis ei redutseeru ühte numbriKs. InseneriJuhid peaksid nõudma, et kaalumine toimub enne variantide skoorimist, täpselt nagu Green Book nõuab, sest kaalumisHarjutus, mis toimub pärast shortListi näGemist, triivib usaldusVäärselt variandiLe, mida ruum juba soosiS. Vaata [ehitA versus ostA valitsuses](../build-vs-buy-in-government/) levinud MCDA-rakenduse jaoks, ja [avaliku väärtuse scorecard](../public-value-scorecard/) seotud struktureeritud-skoorimisE riista jaoks, mida kasutatakse pärast-otsust, mitte enne-otsust.

## Lõksud

- **Kaalude seadmine pärast variantide näGemist.** See on üks levinuM viis, kuidas MCDA-ga manipuleeritakse, sihilikult või mitte; avalda kaalud enne skoorimist, ja registreeri, kes need seadis.
- **Kaalutud summa käsitlemine kõvA numbriNa.** 71,5 versus 68 skoor ei ole statistiLiselt oluline erinevus, kui tundlikkuseAnalüüs ei kinnita rangjastuse stabiilsust; raporteeri vahemikke, mitte vale täpsust.
- **MCDA kasutamine monetiseerimiSe vältimiSeKs, mis oli tegelikult teostatav.** Kui enamik kriteeriumidest sai usutavalt hinnastada, kaotab vaikimisi-MCDA SCBA asemel informatsiooni, mida hindamine oleks saanud kasutada.
- **Ühe domineeriva sidusgrupi lubamine seada kõik kaalud üksi.** Green Booki hea praktika eeldab kaalude elitsitatsiooni esindusLikuLt paneeLiLt, mitte sponsoriLt direktoriLt, et vältida hindamist, mis lihtsalt taasTuletab, mida see inimene juba tahtiS.

## Allikad

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
