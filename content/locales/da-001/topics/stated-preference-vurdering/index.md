# Stated preference-vurdering

Stated preference-metoder estimerer værdien af et ikke-marked gode ved direkte at spørge mennesker, hvad de ville være villige til at betale for det, eller villige til at acceptere i kompensation for at opgive det, typisk gennem en struktureret undersøgelse, der beskriver et hypotetisk scenarie. Contingent valuation er den bedst kendte teknik i familien.

## Hvorfor det betyder noget

Green Book Annex 2 (supplerende vejledning om vurdering af ikke-marked effekter) godkender stated preference-metoder for goder, der ikke har nogen observerbar markedstransaktion at udlede værdi fra overhovedet — luftkvalitet, biodiversitet, oversvømmelsesbeskyttelse, eksistensværdien af et landskab, nogen aldrig måske besøger (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Defra har offentliggjort sin egen stated-preference-vejledning til miljøvurdering specifikt fordi så meget af miljøværdi (habitatBevaring, vandkvalitet) ikke har noget proxy-marked overhovedet, i modsætning til, sig, støj, som i det mindste korrelerer med observerbare huspriser (se [revealed preference-vurdering](../revealed-preference-vurdering/)).

Stated preference's kerneappel — den kan værdisætte stort set hvad som helst, inklusive goder ingen nogensinde har handlet med — er også kilden til dens troværdighedsProblem. Fordi respondenter ikke faktisk bruger penge, er contingent valuation-undersøgelser sårbare for hypotetisk bias (mennesker overdriver betalingsvillighed, når der ikke er nogen reel budgetBegrænsning), indlejringsEffekter (samme gode værdisættes forskelligt afhængigt af, hvad andet er i undersøgelsen), og startpunktsbias i bud-spil-design. 1993 NOAA-panelet om contingent valuation, indkaldt efter Exxon Valdez-oliespildssagen, fastsatte designStandarder — et binært "ville du betale £X, ja/nej"-folkeafstemningsformat snarere end åbent bud, og obligatoriske påmindelser om respondentens faktiske budgetBegrænsning — der forbliver referencestandarden for forsvarlige undersøgelser.

## Beregningen

```
Contingent valuation (folkeafstemningsformat):
  Præsentér et binært valg: "ville du betale £X pr. år for
  resultat Y? ja/nej"
  Variér X tilfældigt over respondenter.
  Tilpas betalingsvillighed som en funktion af ja/nej-
  svarraten ved hver X.

Gennemsnitlig WTP = areal under den estimerede efterspørgsels-
                    kurve
Samlet værdi = Gennemsnitlig WTP × berørt befolkning

Valgeksperiment (diskret valgmodellering)-variant:
  Præsentér respondenter med gentagne valg mellem bundter af
  attributter (inklusive en kostpris-attribut), estimér
  implicitte priser for hver ikke-kostpris-attribut fra de
  afvejninger, respondenter afslører.
```

Valgeksperiment-varianten er generelt foretrukket i nuværende britisk praksis over single-spørgsmål contingent valuation, fordi at tvinge respondenter til at afveje flere attributter mod kostpris gentagne gange producerer mere internt konsistente, sværere-at-manipulere estimater end et enkelt ja/nej-spørgsmål.

## Gennemregnet eksempel

**National regering**: Defra bestiller en contingent valuation-undersøgelse til at værdisætte et flodVandkvalitetsForbedringsprogram. En folkeafstemningsformat-undersøgelse af 2.000 husstande finder, at 62% ville betale £40/år via et hypotetisk vandregningstillæg, og den estimerede efterspørgselskurve giver en gennemsnitlig betalingsvillighed på £28/år pr. husstand.

```
Gennemsnitlig WTP = £28/husstand/år
Husstande i oplandet = 340.000
Samlet årlig værdi = £28 × 340.000 = £9,52m/år

Over en 20-årig vurderingsperiode ved 3,5% diskonteringsrate
(annuitetsfaktor ≈ 14,2):
NV(fordel) ≈ £9,52m × 14,2 ≈ £135m
```

Dette samlede tal sammenlignes derefter med [samfundsøkonomisk cost-benefit-analyse](../samfundsøkonomisk-cost-benefit-analyse/)-kostprissiden af programmet. Green Book kræver, at denne type stated-preference-evidens rapporteres sammen med dens konfidensinterval og undersøgelsesmetodologi, ikke som et bart punktestimat, netop fordi det underliggende tal er mere skrøbeligt end en markedspris.

**Velgørenhedsorganisation**: en kulturarvsTrust undersøger besøgende og ikke-besøgende om betalingsvillighed for at forhindre lukningen af en historisk bygning, ingen af grupperne nødvendigvis besøger (dens eksistensværdi). Fordi ikke-besøgende, der aldrig vil se bygningen, stadig rapporterer positiv WTP, fanger undersøgelsen eksistens- og arveværdi, som en simpel besøgsgebyr-indtægtstælling (en revealed-preference-proxy) fuldstændigt ville gå glip af — hvilket viser stated preferences genuine fordel, hvor ingen markedstransaktion af nogen art eksisterer for at afsløre værdi.

## Forbindelse til softwareudvikling

Stated preference-metoder anvendes sjældent direkte på tekniske arbejdsopgaver, men ingeniører, der bygger borgerKonsultationsplatforme, budgetDeltagelsesRedskaber, eller offentlig undersøgelsesInfrastruktur, bygger ofte instrumentet, økonomien afhænger af. At få undersøgelsesdesigndetaljerne rigtige — tilfældige budbeløb, binær folkeafstemningsindramning over åbne spørgsmål, explicitte budgetBegrænsningspåmindelser — er ikke en UX-finesse, det er det, der gør den resulterende vurdering forsvarlig under granskning; en dårligt designet in-app-undersøgelse kan ugyldiggøre måneders efterfølgende økonomisk analyse. Se [borgertilfredshedsMålinger](../borgertilfredshedsmålinger/) for den mere generelle disciplin ved at elicitere offentlig meningsdata, der vil bære analytisk vægt.

## Faldgruber

- **Åbne "hvor meget ville du betale?"-spørgsmål.** Disse er langt mere tilbøjelige til strategisk og forankrende bias end binær folkeafstemningsindramning; NOAA-panelets anbefaling om at bruge et folkeafstemningsformat eksisterer netop fordi åben elicitation performer dårligt.
- **Ingen påmindelse om respondentens faktiske budgetBegrænsning.** Uden den overstiger angivet WTP rutinemæssigt, hvad samme mennesker ville betale, når en reel budgetAfvejning er på spil — hypotetisk bias.
- **Indlejringseffekter ignoreret.** Samme gode værdisat alene versus værdisat som del af et større bundt producerer forskellige WTP-estimater; rapportér, hvad andet, hvis noget, var i undersøgelsesrammen.
- **At behandle en enkelt undersøgelses punktestimat som afgjort.** Green Book-praksis forventer et interval og en diskussion af kendte bias, ikke et bart tal ført frem ind i cost-benefit-tabellen, som om det var en markedspris.

## Kilder

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
