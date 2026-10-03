# Intergenerationel lighed og bæredygtighedsdiskontering

At diskontere fremtidige kostpriser og fordele tilbage til nutidsVærdi er standard praksis i offentlig vurdering — se [social diskonteringsRate](../social-discount-rate/) — men enhver positiv diskonteringsRate, sammenSat over decennier eller århundreder, skrumper den fjerne fremtid mod nul i nutidens termer. For beslutninger med konsekvenser et århundrede eller mere fremme — klimaForandring, nuklearAfFald, bioDiversitets-tab, pensions-bæreDygtighed — bliver den matematiske fakt til en etisk en: standard diskontering kan gøre katastroFisk skade til fremtidige generationer se ud, i nutidsVærdi-termer, næsten ikke værd at undgå.

## Hvorfor det betyder noget

Ramsey-ligningen, udLedt af Frank Ramsey i 1928, dekomponerer diskonteringsRaten ind i to komponenter: ren tidsPræference (δ, hvor meget vi simpelthen foretrækker nu til senere, uafhængigt af velstand) og velstands-vækst-effekten (η×g, hvor meget vi diskonterer, fordi fremtidige generationer forventes at være rigere, så en ekstra krone betyder mindre for dem). UK Green Books standard-langSigtede-diskonteringsRate er bygget på denne ligning og følger en *faldende* skema snarere end en flad rate — et design rodfæstet i Martin Weitzmans arbejde om "gamma-diskontering," som viser, at når den fremtidige diskonteringsRate selv er uSikker, falder den sikkerheds-ækvivalente rate, du bør anvende, matematisk over tid, fordi lav-rate-scenarier kommer til at dominere, længere du kigger. Stern Review on the Economics of Climate Change (2006), ledet af Sir Nicholas Stern, tog den etiske debat videre: Stern argumenterede, at ren tidsPræference bør sættes nær nul (han brugte δ ≈ 0,1%, reflekterende kun den lille sandsynlighed af civilisations-endende katastrofe, ikke en genuin præference for nutiden over fremtiden), producerende en langt lavere effektiv diskonteringsRate end konventionel Green-Book-praksis og, korresponderende, en langt større nutids-sag for klima-handling. Kritikere (navnLig William Nordhaus) argumenterede, Sterns nær-nul-rate var etisk forsvarlig men inkonsistent med faktisk observeret opSparing- og investerings-adfærd. UOverEnsStemmelsen er ikke en teknisk fodnote — det er den enkelte største grund til, to lige stringente økonomer kan nå vildt forskellige konklusioner om, hvor meget den nuværende generation bør sacrifice for fremtiden, og det er grunden til, software, der støtter lang-horisont-offentlig-investerings-vurdering, skal eksponere sine diskonterings-antagelser snarere end at begrave dem i et regneark-default.

## Beregningen

```
Ramsey-ligning:   r = δ + η × g

  r = social diskonteringsRate
  δ = ren tidsPræference (rate af utålmodighed, uafhængigt af
      velstand)
  η = elasticitet af marginal nytte af forbrug (faldende
      værdi af ekstra forbrug, da mennesker bliver rigere)
  g = forventet vækstRate af pr.-indbygger-forbrug

Green-Book-faldende-langSigtet-skema (approksimativt, aktuelle
offentliggjorte bånd):
  År 0-30:    3,5%
  År 31-75:   3,0%
  År 76-125:  2,5%
  År 126-200: 2,0%
  År 201-300: 1,5%
  År 301+:    1,0%

Stern-Review-parametre: δ ≈ 0,1%, η = 1, g ≈ 1,3%  → r ≈ 1,4%
```

## Gennemregnet eksempel

**Værdi i dag af £1 af undgået skade om 100 år**, under tre diskonterings-regimer:

```
Flad Green-Book-kortSigtet-rate (3,5%, holdt konstant for
100 år):
  PV = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ £0,032   (3,2 pence)

Green-Book-faldende-skema (3,5% for år 1-30, 3,0% for år
31-75, 2,5% for år 76-100):
  faktor(1-30)  = 1,035^30  ≈ 2,807
  faktor(31-75) = 1,03^45   ≈ 3,782
  faktor(76-100)= 1,025^25  ≈ 1,854
  samlet faktor ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  PV = 1 / 19,68 ≈ £0,051   (5,1 pence)

Stern-stil-nær-nul-ren-tidsPræference (r ≈ 1,4% flad):
  PV = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ £0,250   (25,0 pence)
```

Samme £1 af skade undgået et århundrede fra nu er værd 3,2p, 5,1p, eller 25p i dag, afhængigt rent af, hvilken diskonterings-konvention bruges — et næsten-otte-gange interval, der driver, om et klimaMildnings-projekt med høj forhånds-kostpris og udBetaling et århundrede fremme klarer en positiv-NPV-bar overHovedet. Dette er mekanismen bag kapitlets centrale advarsel: ved enhver meningsfuldt positiv flad rate udSlettes tilstrækkeligt fjern fremtidig skade aritmetisk fra vurderingen, uanset dens rigtige alvorlighed.

## Forbindelse til softwareudvikling

- Ethvert lang-horisont-vurderings- eller business-case-redskab (infrastruktur, klimaAdaptation, pensions-modellering) bør implementere Green Books *faldende* skema, ikke en enkelt flad rate — en flad-rate-default indBygger stille en langt stærkere anti-fremtid-bias end aktuel britisk statslig vejledning specificerer.
- DiskonteringsRate og horisont bør altid eksponeres som synlige, revisible parametre i vurderings-software, med beregningens sensitivitet til dem vist explicit (som i det gennemregnede eksempel ovenfor) — at begrave raten i en konfig-fil inviterer netop den "skjulte-etiske-valg"-situation Stern-Nordhaus-debatten advarer om; dette kobler med transparens-pointen gjort i [naturKapital-regnskab](../natural-capital-accounting/) og underbygger [social diskonteringsRate](../social-discount-rate/)-emnet generelt.
- Hvor et programs fordele er explicit intergenerationelle (oversvømmelses-forsvar, naturKapital-genOprettelse, langSigtet digital infrastruktur), bør en [social kostpris-fordel-analyse](../social-cost-benefit-analysis/) rapportere resultater under mindst to diskonterings-antagelser (Green-Book-standard og en lav-rate-sensitivitets-sag) snarere end et enkelt punkt-estimat, så beslutningsTagere ser, hvordan diskonterings-rate-valg alene flytter svaret.

## Faldgruber

- **At præsentere en enkelt diskonteret NPV uden et sensitivitets-interval.** Givet, hvor meget diskonterings-raten alene ændrer svaret for lang-horisont-projekter, overVurderer en enkelt-rate-NPV materielt præcision; rapporter altid et interval, der spænder mindst Green-Book-standarden og et lav-rate-scenarie.
- **At anvende den kortSigtede flade rate (3,5%) på en multi-århundrede-vurdering.** Green Books egen vejledning specificerer den faldende skema netop fordi den flade rate blev bedømt uApproPriat forbi omkring 30 år; at bruge den alligevel underVurderer langSigtede kostpriser.
- **At behandle δ (ren tidsPræference) som en rent teknisk parameter.** Sterns nær-nul-værdi og Green Books højere implicitte værdi er begge forsvarlige kun som etiske positioner om, hvor meget vægt nutiden skylder fremtiden, ikke empirisk "korrekte" eller "forkerte" tal; software bør gøre antagelsen synlig snarere end at præsentere et tal som objektivt rigtigt.

## Kilder

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
