# Logikmodel

En logikModel er et lineært diagram, der forbinder input, aktiviteter, output, resultater, og effekt for et program, læst fra venstre til højre som en ansvarlighedsKæde: ressourcer går ind, aktiviteter sker, output produceres, resultater ændrer sig for modtagere, og effekt tilfalder på en bredere eller længere tidsskala. Det er den standardStruktur, finansierer og revisorer forventer, et program kan rapporteres mod, og den fremadskuende modpart til en baglæns-kortlagt [forandringsTeori](../forandringsteori/).

## Hvorfor det betyder noget

HM Treasurys Magenta Book specificerer logikModellen som et krævet element af programEvalueringsDesign, og finansierer som National Lottery Community Fund bygger deres ansøgnings- og rapporteringsSkabeloner omkring netop denne femKolonne-kæde. Dens værdi er, at den tvinger et program til at angive, i et diagram, hvad det vil bruge, hvad det vil gøre med det, hvad det vil producere, og — kritisk — hvad bør ændre sig som et resultat, på et specificitetsNiveau, en afsnit af prosa har tendens til at tilsløre. En logikModel med en udfyldt input- og aktiviteterKolonne, men en tom eller vag resultatKolonne, er diagnosticerbar med et blik, hvilket netop er, hvorfor finansierer beder om en.

## Beregningen

LogikModellen er en strukturel kæde snarere end en formel:

```
Input            Aktiviteter       Output                Resultater             Effekt
(ressourcer       (hvad gøres       (direkte,              (ændring for           (langsigtet,
 forpligtet)        med dem)         optællelige             modtagere)             befolknings-
                                     produkter)                                      niveau eller
                                                                                      systemisk
                                                                                      ændring)
```

Hver kolonne bør være mere specifik end den sidste: input er, hvad du bruger, aktiviteter er, hvad du gør, output er, hvad leveres uanset effekt, resultater er, hvad ændrer sig som et resultat — distinktionen dækket fuldt ud i [resultater versus output](../resultater-versus-output/) — og effekt er den varige, ofte kun-delvist-tilskrivbare, langsigtede ændring.

## Gennemregnet eksempel

**Lokal myndighed (digital gældsrådgivningsTjeneste)**:

- Input: £180.000 årligt budget, 4,0 fuldtidsansatte rådgivere, et sagsStyringsSystem.
- Aktiviteter: opsøgende sessioner, en-til-en gældsrådgivningsAftaler.
- Output: 900 aftaler leveret; 750 gælds- og ydelsesPlaner udstedt.
- Resultater: af klienter, der nåer en 6-måneders opfølgning, rapporterer 60% (450 af 750) reducerede restancer, i gennemsnit en reduktion på £1.200 pr. klient — £540.000 i samlet restanceReduktion.
- Effekt: et målbart fald i hjemløshedsAnsøgninger fra tjenestens klientBase over to år, kun delvist tilskrivbart denne tjeneste sammen med andre interventioner (se [kontrafaktisk analyse](../kontrafaktisk-analyse/)).

**Velgørenhedsorganisation (fødevarebank-henvisningsPartnerskab)**:

- Input: £45.000, 1,5 fuldtidsansat koordinator, partnerskabsAftaler med 12 henvisningsAgenturer.
- Aktiviteter: henvisningsTriage, pakkePakning og -distribution.
- Output: 5.000 fødevarePakker distribueret til 1.100 husstande.
- Resultater: 68% af undersøgte husstande (748 af 1.100) rapporterer forbedret fødevareSikkerhed ved et 4-ugers opfølgningsOpkald.
- Effekt: bidrag til reduceret lokal krisetjeneste-efterspørgsel, kun dokumenteret i samlede områdeStatistikker, ikke tilskrivbart denne velgørenhedsOrganisation alene.

## Forbindelse til softwareudvikling

LogikModellen er tæt på en litterær dataModel for et resultatSystem: input og aktiviteter er operationelle data, du allerede har (udgift, personale, sessionsLogge); output er let at instrumentere, fordi de tælles ved leveringsPunktet; resultater kræver bevidst designet opfølgningsDataSamling (undersøgelser, administrativ dataLinkage), der ikke vil eksistere, med mindre nogen bygger det; effekt kræver normalt linkede, longitudinelle, eller befolkningsNiveauData ud over noget enkelt programs systemer. Ingeniører, der bygger rapporteringsredskaber, bør presse ordregivere til at definere resultat- og effektIndikatorer ved designTidspunkt, snarere end at standardisere til et output-kun-dashboard, fordi det er, hvad transaktionsDataene allerede understøtter. Se [socialt afkast på investering](../socialt-afkast-på-investering/) for en metode, der værdisætter resultat- og effektKolonnerne specifikt, og [fordelsRealisering](../fordelsrealisering/) for sporing af, om effektKolonnen faktisk blev leveret.

## Faldgruber

- **At stoppe ved output.** Et dashboard, der rapporterer leverede aftaler eller distribuerede pakker og antyder fordel, rapporterer aktivitet, ikke resultater — se [resultater versus output](../resultater-versus-output/).
- **Ingen angivet kausal forbindelse mellem kolonner.** En logikModel angiver kæden, men ikke hvorfor aktiviteter bør producere output, der bør producere resultater; den begrundelse hører til en [forandringsTeori](../forandringsteori/), og en logikModel uden en bag sig er utestet.
- **At behandle den som et engangs-ansøgningsDokument.** LogikModeller produceret kun for at tilfredsstille en finansieringsAnsøgning og aldrig opdateret stopper med at afspejle, hvad programmet faktisk gør.
- **TilskrivningsKryb ved effektKolonnen.** At påstå befolkningsNiveau-ændring som forårsaget udelukkende af et program, uden en kontrafaktual, overdriver, hvad evidensen understøtter.

## Kilder

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
