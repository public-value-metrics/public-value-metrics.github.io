# AI-produktivitet i den offentlige sektor

Målinger for, hvad AI-kodnings-assistance faktisk gør til ingeniør-output — forslags-accept-rater, kontrollerede-studie-hastighedsForøgelser, PR-gennemStrømning, og kode-retention — bærer en genuint kontradiktorisk evidens-base selv før offentlig-sektor-begrænsninger tilføjes: data-klassificering begrænser, hvilke dele af en legacy-ejendom et AI-redskab overHovedet må røre, indkøbs-cykler betyder, redskabet under evaluering er ofte en model-generation bag aktuel kapacitet, og sikkerheds-godKendelses-krav styrer, hvem må bruge det på hvad.

## Hvorfor det betyder noget

De to mest-citerede kontrollerede studier peger i modsatte retninger. Peng et al.'s 2023-GitHub-Copilot-RCT fandt udviklere fuldførte en greenfield-HTTP-server-opgave 55,8% hurtigere med Copilot (1t11m vs. 2t41m, n=95). METR's 2025-RCT fandt erfarne open-source-udviklere, der arbejdede på *deres egne mature repositorier*, var 19% langsommere med tidlig-2025-AI-redskaber, mens de troede, de var omkring 20% hurtigere. Begge studier er solide; kontradiktionen er fundet — greenfield-opgave-virkning overFøres ikke til mature-kodeBase-effektivitet, og meget af statslig ingeniørArbejde er mature-kodeBase-arbejde på ejendomme, der er ældre og mere idioSynkratiske end den median-kommercielle repositorium. Central Digital and Data Offices Generative AI Framework for HMG (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) fastsætter principper for ansvarlig adoption netop fordi denne evidens-base ikke simpelthen kan importeres fra leverandør-demonstrationer; departementer forventes at evaluere redskaber mod deres egne data-håndtering- og sikkerheds-krav før udRulning.

## Beregningen

```
Accept-rate      = accepterede forslag / viste forslag
Retention-rate   = AI-kode overLevende til merge / accepteret
                   AI-kode
HastighedsForøgelse = (t_kontrol − t_AI) / t_kontrol (fra
                   kontrolleret sammenligning KUN)
GennemStrømnings-delta = Δ mergede PR'er/udvikler/uge

Offentlig-sektor-dækningsFaktor:
  berettiget-kodeBase-andel = LOC på systemer, hvor klassi-
    ficeringen (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) tillader
    redskabet overHovedet

VærdiModel = udviklere × berettiget-dækning × tid sparet ×
             belastet rate × udnyttelse
             — hver term behøver lokal måling, og dæknings-
             faktoren har intet privat-sektor-ækvivalent
```

## Gennemregnet eksempel

Et statsligt departement piloterer en AI-kodnings-assistent over 300 udviklere, men kun systemer klassificeret OFFICIAL er berettiget for redskabs-brug — 70% af ejendommen efter hovedTælling-allokering, med de resterende 30% (højere-klassificerings-systemer) udeLukket helt.

```
Berettigede udviklere = 300 × 0,70 = 210

Pilot-resultat: selvRapporteret tid sparet 40 min/dag;
              målt opgave-niveau-besparelse 12 min/dag (0,2t)
              — METR-perceptions-gabet, reproduceret i det
              vilde

Værdi-sæt det MÅLTE tal:
  210 × 0,2t × 220 dage × £55/time belastet × 0,6 udnyttelse
  = 210 × 44 timer × £55 × 0,6
  = 9.240 timer × £55 × 0,6 ≈ £304.920/år kapacitet

Kostpris: 210 licenserede sæder × £22/måned × 12 ≈
£55.440/år

Netto kapacitets-ratio ≈ 304.920 / 55.440 ≈ 5,5:1
```

Finansierbart ved groft en-tredjeDel af det selvRapporterede fordel, og kun efter klassificerings-loftet er anvendt — at licensere alle 300 udviklere på styrken af det selvRapporterede tal ville have overVurderet både den berettigede befolkning og den sande besparelse.

## Forbindelse til softwareudvikling

Disciplinerne, der overFøres direkte: kør **pragmatiske forsøg** på departementets egen kodeBase og rigtige tickets, ikke leverandør-demonstrations-opgaver, fordi METR-resultatet specifikt er et mature-kodeBase-fund; behandl **accept-rate som en proxy, ikke et resultat** — høj accept med lav retention er software-ækvivalenten til overDiagnose; kobl hver gennemStrømnings-påstand med en **stabilitets-kontrol**, da DORAs 2025-rapport fandt, AI-adoption hæver gennemStrømning men degraderer ændrings-stabilitet, hvilket er netop den netto-fordel-analyse [DORA-målinger for offentlig værdi](../dora-målinger-for-offentlig-værdi/) er bygget til at køre; og vær ærlig om, at AI-redskaber kan udVide, ikke smalne, gabet på [teknisk-gæld](../teknisk-gæld-som-offentlig-værdi-erosion/)-tunge legacy-ejendomme, fordi træningsData underRepræsenterer COBOL, 4GL, og skræddersyet mainframe-kode almindelig i regeringen, så forslags-kvalitet på netop de systemer, der mest behøver hjælp, er ofte den svageste. Dette sidder sammen med det bredere [AI i regeringsVærdi](../ai-i-regeringsværdi/)-spørgsmål og bør styres af samme [statslig cybersikkerhedsVærdi](../statslig-cybersikkerhedsværdi/)-begrænsninger, der begrænser, hvor noget tredjePart-redskab overHovedet må se kode eller data.

## Faldgruber

- **Leverandør-studie-transplantering.** At anvende greenfield-RCT-hastighedsForøgelser på legacy-integrations-arbejde er netop fejlen, METR-studiet eksponerede.
- **SelvRapport som måling.** Et 20-procentpoint-perceptions-versus-målt-gab er den største kendte bias i denne litteratur, og det inflaterer business-cases, der stoler på udvikler-undersøgelser alene.
- **At ignorere klassificerings-loftet.** Licenserings- og værdi-modeller bygget på total hovedTælling snarere end den berettigede, klassificerings-godKendte delMængde, overVurderer systematisk både kostpris-effektivitet og opNåelig dækning.
- **Indkøbs-cyklus-lag.** Framework-baseret redskabs-indkøb kan betyde, en pilot evaluerer en model-generation, der er 12-18 måneder bag, hvad er offentligt tilgængeligt ved tidspunktet for fuld udRulning, hvilket gør den originale business-cases hastighedsForøgelse-antagelse forFalden før go-live.

## Kilder

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
