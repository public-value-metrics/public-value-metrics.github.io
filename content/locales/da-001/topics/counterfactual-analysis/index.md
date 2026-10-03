# Kontrafaktisk analyse

En kontrafaktual er et estimat af, hvad der ville have fundet sted i absence af en intervention. Uden en kan en observeret ændring efter et program lanceres ikke skelnes fra en ændring, der ville have fundet sted alligevel — ingen kontrafaktual, ingen evidens for effekt, uanset hvor overbevisende før-og-efter-tallene ser ud. HM Treasurys Magenta Book behandler konstruktion af en troværdig kontrafaktual som den centrale metodologiske opgave i effektevaluering, vigtigere end noget andet enkelt designvalg.

## Hvorfor det betyder noget

"Kriminalitet faldt 15% i året efter vi introducerede programmet" er ikke evidens for, at programmet virkede, med mindre du ved, hvad der ville have sket med kriminalitet uden det — kriminalitet kunne være faldet 20% alligevel på grund af urelaterede økonomiske eller demografiske tendenser, hvilket betyder, at programmet faktisk gjorde tingene værre relativt til kontrafaktualen, trods det rå tal forbedredes. Dette er den enkelte mest almindelige analytiske fejl i offentlige og sociale sektorers effektpåstande: at fejltage en før/efter-sammenligning for evidens for kausalitet. Magenta Book er explicit om, at effektevaluering eksisterer for at besvare et kontrafaktisk spørgsmål — "hvilken forskel gjorde denne intervention?" — og at besvare det kræver at estimere, ikke blot beskrive, den verden, der ikke fandt sted.

Forskellige metoder konstruerer kontrafaktualen med forskellige grader af tillid, og statslig evalueringsvejledning rangerer dem tilsvarende. Randomiserede kontrollerede forsøg (RCT'er), hvor individer eller områder tilfældigt tildeles at modtage en intervention eller ikke, producerer den stærkeste kontrafaktual, fordi randomisering sikrer, at behandlings- og kontrolgrupperne i gennemsnit kun adskiller sig i at modtage interventionen. Cabinet Office og What Works Network har promoveret RCT'er over hele britisk offentlig politik siden "Test, Learn, Adapt"-rapporten fra 2012 af Behavioural Insights Team, netop fordi svagere design er sårbare for confounding — den observerede forskel kan afspejle, hvem der valgte at deltage, ikke effekten af programmet. Hvor randomisering er upraktisk eller uetisk (som det ofte er for programmer med en lovfæstet ret, eller for hele-befolkning-politikændringer), fastsætter Magenta Book et explicit hierarki af svagere men stadig nyttige alternativer: matchede sammenligningsgrupper, difference-in-differences-design, regressionsdiskontinuitet omkring berettigelsestærskler, og, som en sidste udvej, simpel før/efter-sammenligning — klart markeret som den svageste form for evidens, tilbøjelig til at forveksle programmets effekt med effekten af alt andet, der ændrede sig på samme tid.

## Beregningen

Den kontrafaktiske indramning, anvendelig på tværs af alle metoder:

```
Estimeret effekt = Resultat(med intervention) −
                   Resultat(kontrafaktual: uden intervention)

IKKE:
Estimeret effekt ≠ Resultat(efter) − Resultat(før)
                   [forveksler tid med behandling]
```

Difference-in-differences, et af de mest almindelige kvasi-eksperimentelle design i statslig evaluering, isolerer behandlingseffekten ved at trække sammenligningsgruppens egen før/efter-ændring fra:

```
DiD-estimat = [Resultat(behandlet, efter) −
              Resultat(behandlet, før)]
            − [Resultat(sammenligning, efter) −
              Resultat(sammenligning, før)]
```

Dette fjerner enhver tendens fælles for begge grupper (f.eks. et nationalt økonomisk skift, der påvirker alle), hvilket kun efterlader den differentielle ændring, der kan tilskrives interventionen.

## Gennemregnet eksempel

**Beskæftigelsesprogram, før/efter (svagt design)**: en jobstøtteordning rapporterer, at deltagerbeskæftigelsen steg fra 40% til 55% over et år — en naiv konklusion på "+15 procentpoint på grund af programmet."

**Samme program, difference-in-differences (stærkere design)**: en matchet sammenligningsgruppe af lignende ikke-deltagere, hentet fra samme lokale arbejdsmarked, viser beskæftigelsen stige fra 38% til 47% over samme år (et nationalt økonomisk opsving var i gang).

```
Behandlet gruppes ændring:   55% − 40% = +15 procentpoint
Sammenligningsgruppes ændring: 47% − 38% = +9 procentpoint

DiD-estimat (sand programmeffekt) = 15 − 9 = +6 procentpoint
```

Den ærlige tilskrivbare effekt er 6 procentpoint, ikke 15 — mere end halvdelen af den tilsyneladende før/efter-forbedring ville have fundet sted uanset programmet, drevet af samme økonomiske opsving, der hæver sammenligningsgruppen.

**Regressionsdiskontinuitet, berettigelsestærskel**: en bevillingsordning er kun tilgængelig for virksomheder med færre end 50 ansatte. At sammenligne resultater for virksomheder lige under tærsklen (45–49 ansatte, berettigede) mod virksomheder lige over den (50–54 ansatte, ikke-berettigede) giver en troværdig kontrafaktual, fordi virksomheder på begge sider af en arbitrær administrativ afskæring ellers er ligeartede — tærsklen, ikke nogen underliggende virksomhedskarakteristik, bestemmer berettigelse. En gennemsnitlig resultatforskel på £2.000 mellem de to grupper, kun observeret ved tærsklen, kan tilskrives bevillingen med langt større tillid end en simpel sammenligning af alle berettigede versus alle ikke-berettigede virksomheder (som adskiller sig systematisk i størrelse).

## Forbindelse til softwareudvikling

Kontrafaktisk tænkning bør forme, hvordan effektsporingssystemer og evalueringspipelines for statslig og social sektors software designes:

- Byg sammenligningsgruppefangst ind i et system fra starten — registrering af, hvem var berettiget men ikke tilmeldt, eller en matchet ikke-deltagerkohorte — snarere end at eftermontere det efter et program allerede har kørt og kun før/efter-data eksisterer.
- Hvor randomisering er muligt (en faset udrulning, en digital tjeneste aktiveret for nogle brugere før andre), instrumentér systemet til at bevare tilfældig tildeling som et forespørgselbart felt; en faset udrulning ødelægger ved et uheld sin egen evalueringsværdi, hvis tildelingsordenen ikke logges.
- Dette er den fundamentale metode bag [effektevalueringsmetoder](../impact-evaluation-methods/) og er det, der adskiller det fra [effektevaluering versus procesevaluering](../impact-evaluation-vs-process-evaluation/), hvor den sidste spørger, om et program blev leveret som tilsigtet snarere end om det forårsagede en effekt.
- [Additionalitet og dødvægt](../additionality-and-deadweight/) og [forskydning og tilskrivning](../displacement-and-attribution/) er begge, i kernen, kontrafaktiske spørgsmål — dødvægt er "hvad ville dette specifikke resultat have været uden interventionen", anvendt på justeringsniveau snarere end fuldt evalueringsdesign.

## Faldgruber

- **At behandle før/efter som evidens for kausalitet.** Dette er den mest almindelige og mest konsekvensfulde fejl i offentlig og social sektors effektrapportering; en før/efter-ændring forveksler programmets effekt med alt andet, der ændrede sig over samme periode.
- **At bruge en sammenligningsgruppe, der systematisk adskiller sig fra den behandlede gruppe.** En matchet sammenligningsgruppe skal være genuint ligeartet på relevante karakteristika (se [kontrafaktisk analyse](../counterfactual-analysis/)-metodehierarkiet i Magenta Book); at sammenligne programdeltagere (som opted in, og ofte er mere motiverede) mod ikke-deltagere (som ikke gjorde) risikerer selektionsbias forklædt som programmeffekt.
- **At ødelægge randomiseringsmuligheder gennem dårligt leveringsdesign.** En faset eller randomiseret udrulning bevarer kun sin evalueringsværdi, hvis tildeling er genuint tilfældig og registreret — at lade lokale ledere vælge, hvem der går først, besejrer formålet.
- **At overpåstå præcision fra et svagt design.** Et før/efter-estimat bør præsenteres som indikativt, ikke som en målt effektstørrelse; Magenta Books evidenshierarki eksisterer, så styrken af en påstand matcher styrken af det design, der producerede den.

## Kilder

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
