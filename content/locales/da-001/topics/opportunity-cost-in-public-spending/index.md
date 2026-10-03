# Alternativkostning i offentlige udgifter

Alternativkostning er værdien af det bedste alternativ, der opgives, når et offentligt organ forpligter penge, personaletid, eller politisk kapital til én mulighed i stedet for en anden. I et departement med et fast budget er hver krone brugt på et program en krone, der ikke kan bruges på det næstbedste program — den sande kostpris for en beslutning er ikke, hvad den bruger, men hvad den fortrænger.

## Hvorfor det betyder noget

Offentlige budgetter er pengebegrænsede inden for en udgiftsgennemgangsperiode, så — i modsætning til en voksende privat virksomhed — kan et statsligt departement ikke blot "finde flere penge" til en god idé; at finansiere det betyder at af-finansiere noget andet. HM Treasurys Green Book behandler dette som fundamentalt: hver vurdering kræves at sammenligne en intervention mod en "gør minimum"-baseline *og* mod realistiske alternative anvendelser af samme ressource, netop fordi det virkelige spørgsmål, et Treasury-udgiftsteam stiller, aldrig er "er dette godt?", men "er dette bedre end hvad andet disse penge kunne købe?" Green Books kerneprincip for vurdering — at offentlige ressourcer bør flyde til interventionen med den højeste nettosamfundsværdi pr. krone — er alternativkostning angivet som politik.

Dette er let at udtale og svært at anvende, fordi det "næstbedste alternativ" sjældent er synligt i en enkelt businesscase. Et ungdomsbeskæftigelsesprogram til £2 millioner sammenlignes, i businesscasen, med at gøre ingenting — men den ærlige sammenligning er det næstbedste ungdomsbeskæftigelsesinitiativ, eller faktisk den næstbedste anvendelse af £2 millioner hvor som helst i porteføljen, inklusive ikke-beskæftigelsesudgifter. Magenta Book (HM Treasury, 2020) advarer explicit, at evalueringer, der sammenligner "med intervention" med "uden intervention", underdriver den bar, en intervention skal rydde, fordi "uden denne intervention" ikke er det samme som "med ingenting overhovedet" — frigjorte penge finansierer noget andet.

## Beregningen

```
Alternativkostning ved at vælge A = værdien af det bedste
                                    opgivne alternativ B

Netto offentlig værdi af A = værdi(A) − værdi(B), ikke
                             værdi(A) − 0
```

Der er ingen universel formel, fordi det opgivne alternativ er kontekstspecifikt, men disciplinen generaliserer: identificer den realistiske næstbedste anvendelse af samme budgetlinje (ikke en idealiseret "gør ingenting"), værdisæt det på samme basis (pengegjort hvor muligt, i henhold til [samfundsøkonomisk cost-benefit-analyse](../social-cost-benefit-analysis/)), og træk fra.

## Gennemregnet eksempel

**Departementsbudgetlinje**: en digital transformationsfond på £5 millioner kan finansiere præcis et af to forslag dette finansår.

- *Mulighed A*: en ny sagsstyringsplatform, pengegjort fordel £7,2 millioner over 5 år (effektivitetsbesparelser plus hurtigere sagsafslutning).
- *Mulighed B*: en identitetsverifikationstjeneste delt mellem tre departementer, pengegjort fordel £6,4 millioner over 5 år.

En naiv businesscase for A sammenligner £7,2 millioner fordel mod £5 millioner kostpris og rapporterer et fordel-kostforhold på 1,44:1 — tilsyneladende stærkt. Men fordi A og B konkurrerer om samme £5 millioner, er alternativkostningen ved at vælge A Bs £6,4 millioner opgivne fordel. Den *netto* sag for A over det realistiske alternativ er kun £7,2m − £6,4m = £0,8 millioner, ikke de fulde £7,2 millioner i overskriften. Hvis en tredje mulighed, C, tilbød £7,5 millioner i fordel for samme £5 millioner, ville finansiering af A over C destruere £0,3 millioner i offentlig værdi, selv om As egen businesscase ser fuldt berettiget ud isoleret.

**Lokal myndigheds personaletid**: en kommunes treperson-dataTeam kan bygge enten et boligventeliste-dashboard (estimeret at spare 400 sagsbehandlertimer/år, værdisat til £28/time = £11.200/år) eller et triageværktøj til tilskudssvindel (estimeret at forhindre £85.000/år i ukorrekte betalinger). At bygge dashboardet har en alternativkostning på £85.000/år opgivet, ikke blot lønomkostningen for dataTeamet — den virkelige kostpris for den "gratis" interne byggeri er den langt større fordel, teamet kunne have produceret andetsteds.

## Forbindelse til softwareudvikling

Teknisk kapacitet inden i et offentligt organ er i sig selv et begrænset budget — sprintkapacitet, ikke kroner — og samme disciplin gælder direkte:

- Angiv altid sammenligningen: en funktions businesscase bør angive, hvad andet de samme teamuger kunne levere, ikke kun dens egen afkast.
- Behandl "vi har reserveteknisk kapacitet" som starten på en alternativkostningsanalyse, ikke slutningen — reservekapacitet har stadig en bedste alternativ anvendelse, selv hvis den anvendelse er afbetaling af teknisk gæld (se [teknisk gæld som erosion af offentlig værdi](../technical-debt-as-public-value-erosion/)).
- Forbind dette direkte til [value for money](../value-for-money/): VFMs "økonomi"-test er meningsløs uden en ærlig alternativkostningssammenligning, og til [kostpris ved forsinkelse i offentlige programmer](../cost-of-delay-in-public-programmes/), der prissætter tidsdimensionen af samme opgivet-alternativ-logik.

## Faldgruber

- **At sammenligne mod "gør ingenting" i stedet for det næstbedste alternativ.** Green Book kræver en "gør minimum"-baseline netop fordi sand alternativkostning sjældent er nul; en businesscase, der kun rydder "gør ingenting"-bar, har ikke vist, den overgår det realistiske alternativ.
- **At ignorere tværdepartemental konkurrence om samme pulje.** Budgetlinjer, der ser hegnede ud inden i et direktorat, konkurrerer ofte på et højere niveau (en udgiftsgennemgang, et kapitalprogram), hvor den virkelige alternativkostning realiseres.
- **At antage, at frigjort personaletid har nulyderligere værdi.** Tid "sparet" skaber kun værdi, hvis den omplaceres til noget værdifuldt; hvis den alternative anvendelse ikke eksisterer, er besparelsen nominel.

## Kilder

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — the canonical empirical demonstration of opportunity cost as
  a binding constraint in a fixed public budget. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
