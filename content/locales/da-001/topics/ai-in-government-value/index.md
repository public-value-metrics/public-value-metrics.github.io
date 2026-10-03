# AI i regeringsværdi

AI i regeringsVærdi er kravet, at et AI-system brugt i en offentlig tjeneste klarer samme value-for-money- og offentlig-værdi-bar som enhver anden udgiftsBeslutning — ikke en lavere en, fordi det er nyt, og ikke en højere en, fordi det er frygtet. Det er spørgsmålet, et leveringsTeam skal kunne besvare før, ikke efter, en AI-funktion lanceres: producerer dette mere værdi end det koster, når assurance, tilsyn, og risiko prisSættes ærligt?

## Hvorfor det betyder noget

UK Central Digital and Data Office (CDDO) offentliggjorde sin Generative AI Framework for Government i 2024, byggende på tidligere interim-vejledning fra juni 2023, og strukturerede den omkring ti principper dækkende, hvad generativ AI er, dens etiske implikationer, redskabs-sikkerhed, kvalitets-assurance-kontroller, styring af hele den generative-AI-livscyklus, identifikation af genuine brugsSager, tvær-statslig samarbejde, transparens, færdigheder, og styring. Rammens insistering på "meningsfuld menneske-kontrol" og fuld livscyklus-styring eksisterer, fordi AI-projekt-business-cases har en specifik fejlTilstand, anden IT-udgift ikke har: en pilots overskrifts-produktivitets-tal er let at producere og let at overVurdere, fordi det måles før verifikations-, korrektions-, og tilsyns-byrden, redskabet skaber, er tagen i betragtning. Sammen med rammen kræver Algorithmic Transparency Recording Standard (ATRS), offentlige organer offentliggør en standardiseret post — formål, data brugt, præstation, fairness-testning, menneske-tilsyns-arrangementer — for algoritmiske redskaber, der har en signifikant indflydelse på beslutninger om individer, hvilket gør assurance-kostprisen af et AI-system til et offentligt register, ikke et internt estimat, et team stille kan springe over.

## Beregningen

AI-adoption vurderes som en tilføjelse til, ikke en erstatning for, standard [value-for-money](../value-for-money/)-vurdering, med de AI-specifikke termer gjort explicit snarere end foldet ind i et enkelt "produktivitetsGevinst"-tal:

```
Netto værdi af et AI-system =
    produktivitetsGevinst (tid sparet × belastet
    personaleKostpris)
  − licens-/compute-kostpris
  − menneskeVerifikations- og tilsyns-kostpris (at kontrollere
    AI-output før det handles på — dette skrumper ikke til
    nul selv for mature redskaber)
  − ATRS-dokumentations- og løbende-monitorerings-kostpris
  − risiko-justeret kostpris af skade fra fejl, bias, eller
    hallucination, vægtet af hvem bærer den skade
    (distributionsVægtning)

Et pilot-produktivitets-tal, der udeLader tilsyns-termen, er
ikke sammenligneligt med en business-as-usual-kostpris-
baseLine, der allerede inkluderer ækvivalent menneskeGennem-
syn — se AI-produktivitet-i-den-offentlige-sektor for den
fuldere produktivitets-målings-disciplin, dette låner fra.
```

## Gennemregnet eksempel

**Lokal myndighed, der bruger et generativ-AI-redskab til at udKaste første svar til routine-ejendomsSkat-forespørgsler**: 25.000 forespørgsler/år, tidligere håndteret helt af sagsBehandlere ved et gennemsnit på 14 minutter/forespørgsel, belastet personaleKostpris £34/time.

```
BaseLine (ingen AI) kostpris:
  25.000 × (14/60) × £34 = £198.333/år

Pilot-overskrifts-påstand: AI udKaster et svar på 90 sekunder,
sagsBehandler "blot gennemGår og sender" — påstået ny tid er
3 minutter
  25.000 × (3/60) × £34 = £42.500/år
  → påstået besparelse £155.833/år (ser transformativ ud)

Fuldt-belastet figur, målt efter 3 måneder live snarere end i
pilotens hånd-udVælgede test-sager:
  Faktisk gennemGangs- + korrektions-tid pr. svar: 6 minutter
  (udKast behøver rigtig redigering for komplekse eller
  emotionelt sensitive forespørgsler)
  25.000 × (6/60) × £34 = £85.000/år
  Licens-/compute-kostpris: £38.000/år
  ATRS-dokumentation og kvartalsvis bias-/kvalitets-
  monitorering: £14.000/år
  Samlet kostpris = 85.000 + 38.000 + 14.000 = £137.000/år

Rigtig besparelse = 198.333 − 137.000 = £61.333/år — genuin og
værd at beholde, men langt under halvdelen af pilotens
overskrifts-påstand, og det kraevede en ærlig tilsyns-tids-
måling, ikke pilotens bedste-sag-en, for at finde.
```

## Forbindelse til softwareudvikling

Dette er, hvor [AI-produktivitet-i-den-offentlige-sektor](../ai-productivity-in-the-public-sector/) og dette emne mødes: ingeniørTeams, der bygger AI-funktioner ind i offentlige tjenester, ejer instrumenteringen, der gør "den rigtige" figur i det gennemregnede eksempel mulig — at logge faktisk gennemGangs-tid, redigerings-distance mellem udKast og sendt svar, og eskalerings-rate, snarere end at stole på pilotens demo-betingelser. AI-funktioner bør vurderes mod [digital tjenesteStandard](../digital-service-standard/) punkt 9 (sikker tjeneste, bruger-privatHed) og tvær-refereret med [statslig cybersikkerhedsVærdi](../public-sector-cybersecurity-value/), hvor redskabet rører borgerData, og ethvert AI-system med en signifikant indflydelse på beslutninger om individer behøver en ATRS-post, før det kan betragtes som vurderings-klart, på samme måde en tjeneste behøver en bestået [digital tjenesteStandard](../digital-service-standard/)-vurdering før lancering.

## Faldgruber

- **AI-hvidvaskning.** At omMærke eksisterende regel-baseret automation som "AI" for at tilgå finansiering eller opMærksomhed øremærket for AI-adoption, uden akkuratheds- eller bias-risikoerne, der faktisk retfærdiggør rammens ekstra granskning.
- **At måle pilot-produktivitet, ikke produktions-produktivitet.** Piloter kører på kuraterede test-sager med engagerede, opMærksomme gennemGåere; produktion kører på det fulde rodede sagsBlanding med gennemGåere, der over tid udvikler automations-bias og underKontrollerer output — begge fordrejer den ærlige tilsyns-kostpris-figur.
- **At springe ATRS-registrering over, fordi redskabet "ikke rigtig er automatiseret beslutningsTagning".** Standardens tærskel er signifikant indflydelse på en beslutning om et individ, hvilket de fleste borgerVendte AI-udKast- eller triage-redskaber møder, selv når en menneske teknisk skriver under.
- **At ignorere distributionel impact af fejl.** Et AI-systems fejlRate gennemsnitsBeregnet over alle brugere kan skjule en meget højere fejl- eller bias-rate for specifikke grupper; [distributionsVægtning](../distributional-weighting/) bør anvendes på den risiko-justerede skade-term, ikke blot den aggregerede akkurathed-figur.

## Kilder

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
