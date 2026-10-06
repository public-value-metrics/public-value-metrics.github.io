# Additionaliteit en deadweight

Additionaliteit vraagt of een interventie een uitkomst veroorzaakte die anders niet zou hebben plaatsgevonden. Deadweight is het spiegelbeeld: het aandeel van een uitkomst dat toch zou hebben plaatsgevonden, zelfs zonder het programma, de subsidie of de toeslag. Bijna elke impactbewering van een overheidsprogramma of goed doel overdrijft het effect totdat deadweight is afgetrokken, wat de reden is waarom Britse evaluatierichtlijnen dit behandelen als de eerste en belangrijkste correctie op elk koptekstcijfer.

## Waarom het ertoe doet

"We hebben 500 bedrijven geholpen te groeien" klinkt als een prestatie, maar als 300 van die bedrijven toch zouden zijn gegroeid — omdat de lokale economie herstelde, omdat zij andere financieringsroutes hadden, omdat zij al op een groeipad zaten voordat het programma begon — is de werkelijke additionele bijdrage van het programma 200, niet 500. Het Magenta Book van HM Treasury en de langdurige "Additionality Guide" van HM Treasury/BIS (oorspronkelijk ontwikkeld voor regionale ontwikkelings- en herstructureringsprogramma's, en sindsdien breed gebruikt binnen Britse overheidsevaluatie) formaliseren deadweight als de eerste correctie in de standaardvolgorde voor nettoeffect: brutoeffect minus deadweight, minus verdringing, minus lekkage, gecorrigeerd voor multipliereffecten, is gelijk aan netto additionele impact. Deze stap overslaan is de meest voorkomende manier waarop impactbeweringen van de publieke en maatschappelijke sector worden opgeblazen, al dan niet bewust — een subsidieprogramma dat alleen bruto deelnemersuitkomsten meet, zonder vergelijkingsgroep, kan zijn eigen effect niet onderscheiden van wat toch zou zijn gebeurd.

Deadweight is geen vast percentage; het hangt volledig af van de contrafeitelijke situatie voor de specifieke populatie en interventie (zie [contrafeitelijke analyse](../contrafeitelijke-analyse/)). Engelse regionale ontwikkelingsevaluaties onder de voormalige Regional Development Agencies vonden gewoonlijk deadweightniveaus in het bereik van 20–60% afhankelijk van het type bedrijfsondersteuning, wat de reden is dat geloofwaardige programma-evaluaties een deadweight-gecorrigeerd bereik rapporteren in plaats van een enkel aangenomen cijfer, en waarom financiers zoals het National Lottery Community Fund en Big Society Capital van subsidieontvangers vereisen dat zij deadweight expliciet behandelen in uitkomstrapportage in plaats van bruto deelnemersaantallen te rapporteren.

## De berekening

De standaardvolgorde voor netto-effectcorrectie, zoals uiteengezet in Britse evaluatierichtlijnen (Magenta Book; Additionality Guide van HM Treasury/BIS; ESIF- en structuurfondsevaluatierichtlijnen):

```
Bruto-uitkomst
  − Deadweight       （wat toch zou zijn gebeurd）
  − Verdringing      （activiteit/baat verplaatst van
                      elders, niet gecreëerd — zie
                      displacement-and-attribution）
  − Lekkage          （baat die buiten de doelgroep/het
                      doelgebied toevalt）
  × Multiplier        （additionele indirecte/geïnduceerde
                      economische activiteit, indien
                      positief）
  = Netto additionele impact
```

Deadweightniveau als aandeel:

```
Deadweightniveau = uitkomsten die zonder de interventie
                   zouden hebben plaatsgevonden / totaal
                   waargenomen bruto-uitkomsten

Netto additionele uitkomsten = Bruto-uitkomsten × (1 −
                              Deadweightniveau)
```

## Uitgewerkt voorbeeld

**Bedrijfsondersteuningsprogramma**: een regionale subsidieregeling rapporteert dat 500 ondersteunde bedrijven het volgende jaar de werkgelegenheid verhoogden, gemiddeld 3 banen elk — een brutobewering van 1.500 banen.

Een gematchte vergelijkingsgroep van soortgelijke niet-ondersteunde bedrijven (zie [contrafeitelijke analyse](../contrafeitelijke-analyse/)) toont dat 40% van de werkgelegenheidsgroei van de ondersteunde bedrijven toch zou hebben plaatsgevonden, gebaseerd op hoe de gematchte groep presteerde in dezelfde periode.

```
Deadweightniveau = 40%
Netto additionele banen = 1.500 × (1 − 0,40) = 900 banen
```

De eerlijk rapporteerbare prestatie van het programma is 900 banen, niet 1.500 — een daling van 40% puur door de deadweight-correctie, voordat verdringing of lekkage zelfs worden overwogen.

**Goed doel voor werkgelegenheid**: een goed doel plaatst 200 langdurig werklozen in banen tegen een kost van £600.000 (£3.000 per plaatsing, bruto). Nationale arbeidsmarktgegevens tonen dat, zonder enige interventie, ongeveer 15% van een vergelijkbare langdurig werkloze cohort binnen dezelfde periode werk vindt door natuurlijke arbeidsmarktdoorstroming.

```
Deadweightniveau = 15%
Netto additionele plaatsingen = 200 × (1 − 0,15) = 170
Werkelijke kosten per additionele plaatsing = £600.000 / 170
                                             ≈ £3.529
```

Het bruto cijfer voor kosten per plaatsing (£3.000) onderschat de werkelijke kosten van de additionele bijdrage van het goede doel met ongeveer 15%.

## Verband met softwareontwikkeling

Additionaliteit en deadweight zijn rechtstreeks relevant voor iedereen die impactmeet- of subsidiebeheersoftware bouwt voor de publieke of maatschappelijke sector:

- Uitkomstrapportagesystemen moeten door ontwerp een vergelijkings- of basislijngroep vastleggen, niet alleen deelnemersuitkomsten — een contrafeitelijke situatie achteraf toevoegen na de lancering van een systeem zonder deze is veel moeilijker dan de vastlegging vanaf het begin inbouwen (zie [contrafeitelijke analyse](../contrafeitelijke-analyse/)).
- Dashboards die alleen bruto deelnemersaantallen rapporteren, zullen systematisch impact overdrijven voor financiers en toezichthoudende organen; waar deadweightschattingen bestaan (uit evaluatieliteratuur of een vergelijkingsgroep) moet de software het netto-van-deadweight-cijfer naast, niet in plaats van, het brutocijfer tonen.
- Dit koppelt rechtstreeks aan [sociaal rendement op investering](../sociaal-rendement-op-investering/), waarvan de SROI-verhouding alleen geloofwaardig is zodra deadweight (en verdringing) zijn afgetrokken van de beweerde bruto-uitkomsten — een SROI-calculator die deze stap weglaat, zal opgeblazen verhoudingen produceren die toetsing niet doorstaan.

## Valkuilen

- **Bruto-uitkomsten rapporteren alsof ze allemaal additioneel zijn.** Dit is de meest voorkomende impactmeetfout in subsidie- en programmarapportage; vraag altijd "zou dit toch zijn gebeurd?" voordat een koptekstcijfer wordt gepubliceerd.
- **Aannemen dat één deadweightpercentage overal van toepassing is.** Deadweight varieert enorm per sector, populatie en lokale economische omstandigheden; gebruik een vergelijkingsgroep of sectorspecifiek bewijs in plaats van een cijfer uit een niet-verwante evaluatie te herhalen.
- **Deadweight verwarren met verdringing.** Deadweight gaat over contrafeitelijke uitkomsten voor dezelfde deelnemers; verdringing gaat over effecten op andere mensen of plaatsen — zie [verdringing en toeschrijving](../verdringing-en-toeschrijving/). Deze twee samenvoegen leidt tot dubbele of onderrekening van de correctie.
- **Zelfgerapporteerde deadweight van deelnemers.** Begunstigden vragen "zou dit zonder onze hulp zijn gebeurd?" levert systematisch lage deadweightschattingen op (deelnemers hebben de neiging het programma de eer te geven); een onafhankelijke vergelijkingsgroep is veel betrouwbaarder.

## Bronnen

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on deadweight, displacement, and leakage in structural-funds evaluation.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting."
  <https://www.tnlcommunityfund.org.uk/>
