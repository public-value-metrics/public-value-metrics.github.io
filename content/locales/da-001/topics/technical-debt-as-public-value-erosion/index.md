# Teknisk gæld som offentlig-værdi-erosion

Teknisk gæld er Ward Cunninghams 1992-metafor for den impliceret fremtidige kostpris af expedient tidligere kode-beslutninger: en **hovedStol** (afHjælpnings-arbejdet skyldt) og en **rente** (det løbende træk, det udøver på levering). I en legacy statslig IT-ejendom betales den rente direkte ud af offentlig værdi — langsommere statutorisk-ændring-levering, højere fejlRater på borgerVendte tjenester, og en skrumpende pool af mennesker, der sikkert kan røre systemet overHovedet.

## Hvorfor det betyder noget

Legacy mainframe- og COBOL-æra-systemer over britiske statslige departementer — HMRC og DWP blandt de mest citerede — bærer en veldokumenteret og eskalerende risiko, National Audit Office har flaget gentagne gange, inklusive i sin rapport *Digital Transformation in Government* (<https://www.nao.org.uk/>): ældende platforme, der er dyre at ændre, i stigende grad svære at sikre, og afhængige af en specialist-arbejdsStyrke, der pensionerer hurtigere, end den erstattes. I modsætning til en privat-sektor-bunke sidder denne gæld direkte mellem borgere og deres statutoriske berettigelser — en ydelses-beregnings-motor, der ikke kan ændres sikkert, er en politik-leverings-begrænsning, ikke blot en ingeniør-uBekvemmelighed. 2013-genStarten af Universal-Credit-IT-programmet, da National Audit Office fandt, det oprindelige byg ikke ville levere value-for-money, og en substantiel del af software-aktivet skulle afSkrives, er et canonisk eksempel på uPrisSat teknisk gæld, der indHenter et live, ministerielt synligt offentligt program.

## Beregningen

```
SQALE-hovedStol = Σ over violationer (afHjælpnings-tid) ×
                  udvikler-kostprisRate
Teknisk-gæld-rate (TDR) = afHjælpnings-kostpris / genUd-
                  viklings-kostpris × 100
                  (SonarQube-grader: A ≤5%, B ≤10%, C ≤20%,
                  D ≤50%)

Rente (tallet, der retfærdiggør afBetaling):
  rente/år = Δ leverings-hastighed × værdi pr. enhed hastighed
           + Δ borgerVendt-incident-rate × kostpris pr.
             incident
           + specialist-færdigheder-præmie × påVirket
             hovedTælling
AfBetalings-case = PV(rente undgået over horisont) −
                   afHjælpnings-kostpris
                   (diskonteret ved Green-Book-social-diskon-
                   teringsRate, se social-discount-rate.md)
```

HovedStol angiver forpligtelsen; rente er, hvad gør investerings-casen til en offentlig-regnskaber-udvalg.

## Gennemregnet eksempel

En 250.000-linje krav-behandlings-motor skrevet i en legacy 4GL. Ved brug af CAST-Appmarq-benchmarket på groft $3,61 teknisk-gæld-hovedStol pr. linje kode (≈£2,85 ved typisk konvertering):

```
HovedStol ≈ 250.000 × £2,85 ≈ £712.500
TDR ≈ 16% (grad C)
```

Målt rente: departementet beholder tre specialist-kontraktAnsatte ved en 40%-dagRate-præmie over standard-senior-ingeniør-rater, fordi inHouse-færdigheder er attritede — en ekstra £180.000/år på et seks-persons-team. Systemet forårsager også fire major-behandlings-udFald/år, hver suspenderende beslutninger for omkring 5.000 krævere og redirecterende dem til kontaktCentret ved groft £25/opkald:

```
Rente ≈ £180.000 (færdigheder-præmie)
      + 4 × 5.000 × £25 = £500.000 (redirecteret-kontakt-
        kostpris)
      ≈ £680.000/år
```

Målrettet afHjælpning af de værst-præsterende moduler kostpris-sætter £1.200.000 og er modelleret at skære rente med 70%:

```
Rente-reduktion = 0,70 × 680.000 = £476.000/år
Payback ≈ 1.200.000 / 476.000 ≈ 2,5 år
```

Målretningen betyder noget: at afHjælpe sjældent-rørt kode køber intet, fordi rente koncentrerer sig, hvor ændrings-frekvens og gæld-densitet begge topper.

## Forbindelse til softwareudvikling

Den offentlig-værdi-rammeSætning, der opGraderer en teknisk-gæld-sag forbi "koden er gammel": udTryk den legacy-ejendom som et inventar over, hvor tabt leverings-kapacitet koncentrerer sig, og forbind det explicit til [samlet ejerskabsKostpris](../total-cost-of-ownership-in-government-it/), da rente er en driftsKostpris, der tilhører TCO-linjen, uanset om finans nogensinde har spurgt om det. Gæld-tunge systemer bærer også disproportional [cybersikkerheds](../public-sector-cybersecurity-value/)-eksponering, fordi patch-kadence og gæld-densitet er korrelerede — et uPatchbart legacy-system er teknisk gæld, hvis rente betales i incident-risiko snarere end pund. Og hver afHjælpnings-versus-funktion-afVejning er selv en [kostpris-af-forsinkelse](../cost-of-delay-in-public-programmes/)-beslutning: at betale gæld ned forsinker den næste statutoriske ændring, som har sin egen CoD, der skal afVejes mod renten sparet.

## Faldgruber

- **HovedStol-kun-rapportering.** Et stort, skræmmende afHjælpnings-estimat uden en rente-figur retfærdiggør intet til en udgifts-godKender.
- **Redskabs-genererede gæld-figurer taget litteralt.** SQALE-stil-skannere tæller regel-violationer; de misser den dyre type gæld — arkitektur-beslutninger og uDokumenterede legacy-forretningsRegler — mens de flager trivia.
- **"GenSkrivningen undgår det alt sammen."** ErstatningsProgrammer skal klare samme disciplin som enhver anden business-case — kontrafaktuel kostpris, succes-sandsynlighed, og diskontering — ikke en undtagelse fra det, som 2013-Universal-Credit-genStarten demonstrerede.
- **Gæld-nul-utopisme.** Det optimale gæld-niveau er ikke nul; gæld er leverage, der købte tidligere levering. Det live spørgsmål er altid renteSatsen, ikke om gæld eksisterer overHovedet.

## Kilder

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
