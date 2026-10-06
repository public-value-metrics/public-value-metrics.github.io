# Åben-data-værdi

Åben-data-værdi er problemet med at estimere, hvad statslig og offentlig data er værd, når det ikke har nogen pris: det sælges ikke, så der er ingen indtægtsLinje, men dog genererer offentliggørelse af det (vejrRegistre, transportTidsPlaner, postNummer-grænser, firmaRegistre) demonstrabelt økonomisk og social aktivitet nedStrøms. At værdiSætte det godt betyder noget, fordi "det er frit at offentliggøre" og "det er værdiLøst" begge er forkerte, og en softwareIngeniør, der beslutter om at åbne en API eller et dataset, behøver et bedre argument end begge.

## Hvorfor det betyder noget

Den mest citerede top-down-estimering kommer fra McKinsey Global Institutes 2013-rapport "Open data: Unlocking innovation and performance with liquid information," som satte den potentielle årlige værdi af åben data over syv domæner — uddannelse, transport, forbrugerProdukter, elektricitet, olie og gas, sundhedsVæsen, og forbrugerFinans — til $3 billioner til $5 billioner om året globalt, gennem mekanismer inklusive øget transparens, mere effektivt matchende udbud til efterspørgsel, og muliggørende nye produkter og tjenester bygget på dataen. Den figur er et scenarie-estimat, ikke et målt udFald, og den citeres routinemæssigt forkert, som var det indtægt, regeringen kunne indFange direkte, hvor værdien largely påLøber til tredjePart — forretninger, forskere, borgere — der bruger dataen, hvilket er netop pointen med at åbne det snarere end at sælge det. Storbritanniens Open Data Institute, med-grundlagt af Sir Tim Berners-Lee og Sir Nigel Shadbolt i 2012, har siden bygget en krop af mere granulære, bottom-up casestudier — sektor for sektor, dataset for dataset — der er langt mere nyttige for en rigtig business-case end McKinsey-overskrifts-tallet, fordi de viser mekanismen af værdiSkabelse, ikke blot dens aggregerede størrelse.

## Beregningen

Åben data har ingen markedsPris, så værdiSætnings-metoder substituerer for en; tre tilgange gentager sig, og ingen er tilstrækkelig alene:

```
1. Undgået-kostpris-/genAnskaffelsesKostpris-metode:
   værdi ≈ hvad brugere ville have betalt for at producere
   eller licensere den ækvivalente data selv — en lavere
   grænse, ignorerer værdi skabt af brug, den oprindelige
   producent aldrig forventede

2. MarkedsAnalog-/nedStrøms-aktivitet-metode:
   værdi ≈ indtægt eller besparelser genereret af
   forretninger/tjenester bygget på dataen (f.eks. satNav-
   apps bygget på åben kort- og trafikData) — fanger rigtig
   økonomisk aktivitet men er svær at tilskrive rent til
   data-udgivelsen selv (se tilskrivning-og-dødvægt)

3. Kontingent-/stated-preference-metode:
   værdi ≈ hvad brugere siger de ville betale, eller tiden
   de siger det sparer dem — se stated-preference-vurdering
   for den generelle metode og dens bias

Ingen af disse producerer en figur så ren som en markedsPris;
troværdige åben-data-business-cases trianguler over to eller
flere, og er explicit om, hvilken mekanisme gør arbejdet.
```

## Gennemregnet eksempel

**Illustrativ national kort-/adresse-data-udgivelse** (metodologi efter ODI-stil-casestudier, figurer illustrative af skalaen, sådanne studier typisk finder):

```
Undgået-kostpris-estimat:
  Forretninger, der ellers ville licensere ækvivalent adresse-
  matchnings-data kommercielt, ved en estimeret gennemsnitlig
  licens-kostpris på £4.000/år, over et estimeret 15.000 SMV'er
  nu brugende det frie åbne dataset
  = 15.000 × £4.000 = £60.000.000/år i undgået licensering-
  kostpris alene

NedStrøms-aktivitet-estimat (mere spekulativt, behøver en
kontrafaktual):
  Nye leverings-rutnings- og logistik-produkter bygget på den
  åbne data, der ikke ville eksistere, eller ville være
  materielt værre, uden den — kræver en sammenligning mod
  kontrafaktualen af dataen forblivende lukket eller
  kommercielt licenseret (kontrafaktisk-analyse), fordi noget
  af den aktivitet ville ske alligevel på betalt data ved en
  højere pris, hvilket er dødVægt i "værdi skabt ved at åbne
  det"-forstanden

En forsvarlig business-case rapporterer undgået-kostpris-
figuren som den solide lavere grænse, og behandler nedStrøms-
aktivitet-figuren som et øvre-grænse-scenarie, ikke en
fakt.
```

## Forbindelse til softwareudvikling

For ingeniører er det praktiske åben-data-værdi-spørgsmål normalt smallere end de nationale overskrifts-figurer: øger det at åbne denne specifikke API eller dataset (snarere end at holde det bag en partner-aftale) genBrug nok til at retfærdiggøre den løbende kostpris ved at dokumentere, versionere, og supportere det som et offentligt interface? Den vedligeholdelses-kostpris er rigtig og er modparten til byg-en-gang-genBrug-ofte-økonomien af [regering-som-en-platform](../regering-som-en-platform/) — de to emner er tætte kusiner, en om delt kode og infrastruktur, den anden om delt data. Enhver åben-data-værdi-påstand bør kontrolleres mod [tilskrivning og dødvægt](../additionalitet-og-dødvægt/), før den går i en business-case: aktivitet, der ville have sket alligevel, på kommercielt licenseret data, er ikke værdi, *åbningen* skabte.

## Faldgruber

- **At citere McKinsey-$3-5-billion-figuren som UK-specifik eller som dette datasets andel.** Det er en global, syv-sektor-scenarie-estimering fra 2013 — at bruge den som en præcis multiplikator for et enkelt nationalt dataset misRepræsenterer, hvad tallet er.
- **Ingen kontrafaktual.** At kræve kredit for al nedStrøms-økonomisk-aktivitet bygget på åben data, uden at spørge, hvor meget af det ville have sket alligevel på betalt eller licenseret data ved en højere pris (se [tilskrivning og dødvægt](../additionalitet-og-dødvægt/) og [kontrafaktisk analyse](../kontrafaktisk-analyse/)).
- **At forveksle produktionsKostpris med skabt værdi.** Et dataset, der var dyrt at indsamle, er ikke automatisk værdifuldt at offentliggøre, og et billigt er ikke automatisk lav-værdi — værdi følger nedStrøms-brug, ikke opStrøms-kostpris.
- **At ignorere den løbende vedligeholdelses-kostpris af "åben".** At offentliggøre et enkeltstående CSV-udtrak er ikke samme forpligtelse som at køre en dokumenteret, versioneret, supporteret åben API — at underFinansiere den sidste efter lancerings-annonceringen er en almindelig fejlTilstand.

## Kilder

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
