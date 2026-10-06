# Distributionsmæssig vægtning

Distributionsmæssig vægtning justerer den monetære værdi af en kostpris eller fordel afhængigt af, hvem der modtager den, på princippet om, at en ekstra krone er værd mere for en fattig husstand end for en rig. HM Treasurys Green Book leverer en explicit metode til at anvende denne vægtning, bygget på den aftagende marginalnytte af indkomst, så vurderinger ikke stiltiende behandler en krone optjent af den rigeste decil som lig i værdi med en krone optjent af den fattigste.

## Hvorfor det betyder noget

Standard cost-benefit-analyse summerer kroner uden at spørge, hvis kroner de er, hvilket implicit antager, at en krone er værd det samme for alle — en antagelse, økonomer længe har vidst er falsk. En husstand, der tjener £15.000/år, oplever en gevinst på £1.000 meget anderledes end en husstand, der tjener £150.000/år, fordi marginalnytten af indkomst falder, når indkomsten stiger. Uden vægtning favoriserer standardvurdering systematisk interventioner, der gavner rigere, allerede bedre stillede grupper, fordi deres højere købekraft opblæser den monetære værdisætning af fordele, der når dem (en parkopgradering nær dyr bolig "viser" en større ejendomsværdifordel end samme opgradering nær billig bolig, rent fordi priserne er højere, ikke fordi velfærdsgevinsten er større).

Green Books supplerende vejledning om distributionsanalyse, styrket efter Treasurys 2020-gennemgang reagerede på kritik, om at vurderingsmetodologien systematisk favoriserede London og Sydøst, fastsætter en formel vægtningsmetode baseret på en antaget elasticitet af marginalnytte af indkomst omkring 1,3 — hvilket betyder, at en fordobling af indkomst nogenlunde halverer (specifikt, 2^-1,3 ≈ 0,41 gange) den marginale værdi af en yderligere krone. Dette er ikke en afrundingsjustering: at anvende det kan ændre, hvilket af to konkurrerende programmer der viser den højere nettonutidsværdi, især når man sammenligner en intervention koncentreret i et udsat område med en spredt over den generelle befolkning.

## Beregningen

Green Books distributionsmæssige vægt for en krones fordel, der tilfalder en husstand ved indkomstniveau y, relativt til en krone ved den nationale gennemsnitsindkomst ȳ:

```
Vægt(y) = (ȳ / y)^e

hvor:
  y  = husstandsindkomst (eller indkomst for den berørte
       gruppe)
  ȳ  = gennemsnitlig (reference) husstandsindkomst
  e  = elasticitet af marginalnytte af indkomst (Green Book:
       cirka 1,3)
```

Anvendelse af vægte på nettofordele:

```
Vægtet fordel = Σ [uvægtet fordel til gruppe i × Vægt(y_i)]
```

En gruppe, der tjener halvdelen af det nationale gennemsnit (y = 0,5ȳ), får en vægt på (1/0,5)^1,3 = 2^1,3 ≈ 2,46 — hver krones fordel til denne gruppe tælles som værd omkring 2,46 gange en krone til en husstand med gennemsnitsindkomst.

## Gennemregnet eksempel

**Two konkurrerende lokale programmer**, hver med en uvægtet nettofordel på £2 millioner/år, konkurrerende om samme regionale vækstfond:

- *Program A*: en erhvervsstøtteordning i en velstående by, gennemsnitlig husstandsindkomst £45.000 (omkring 1,3× det antagede nationale gennemsnit på £35.000).
- *Program B*: et kvalifikationsprogram i et udsat distrikt, gennemsnitlig husstandsindkomst £18.000 (omkring 0,51× det nationale gennemsnit).

```
Vægt(A) = (35.000 / 45.000)^1,3 = (0,778)^1,3 ≈ 0,72
Vægt(B) = (35.000 / 18.000)^1,3 = (1,944)^1,3 ≈ 2,53

Vægtet fordel A = £2.000.000 × 0,72 = £1,44 millioner
Vægtet fordel B = £2.000.000 × 2,53 = £5,06 millioner
```

Uvægtet er de to programmer lige. Vægtet for distributionsmæssig effekt er Program Bs fordel mere end tre gange større — et resultat, der vender finansieringsanbefalingen om og afspejler Green Books explicitte formål med at kræve, at vægtningen skal vises, ikke blot det uvægtede fordel-kostforhold.

**Fordeling af velgørenhedsbevilling**: en finansierer, der sammenligner en bevilling på £500.000, der når 1.000 lavindkomsthusstande (vægt ≈ 2,0, vægtet værdi tilsvarende £1 million) mod samme £500.000, der når 1.000 middelindkomsthusstande (vægt ≈ 1,0, vægtet værdi tilsvarende £500.000), bør vise den distributionsmæssige sag explicit i sit bestyrelsespapir, ikke lade den blive udledt.

## Forbindelse til softwareudvikling

Distributionsmæssig vægtning dukker sjældent direkte op i softwareleveringsmålinger, men det bør forme, hvordan teknik- og dataTeams designer måling og målretning:

- Når man bygger et effektdashboard eller fordelsberegner, eksponér indkomst- eller fattigdomsprofilen for de berørte, ikke blot et samlet fordelstotal — samlede tal uden distributionsmæssig opdeling skjuler netop den omvending, der vises ovenfor.
- Forbind målretningslogik i tjenestedesign til samme fattigdomsdata, Green Book bruger — se [indeks for multiple deprivation](../index-of-multiple-deprivation/) — så en digital tjenestes rækkevidde kan vurderes for lighed, ikke blot effektivitet (den omstridte fjerde E i [value for money](../value-for-money/)).
- Når en algoritme allokerer en sparsom ressource (aftaletider, sagsbehandlertid, en subsidie), vil en uvægtet "maksimér total fordel"-målfunktion, ved konstruktion, reproducere netop den bias, Green Books vægtning eksisterer for at korrigere — flag dette explicit til politikansvarlige før optimering.

## Faldgruber

- **At anvende distributionsmæssige vægte inkonsekvent på tværs af en portefølje.** At vægte et programs fordele, men ikke dets sammenligningsgrundlags, producerer en biased, ikke en mere fair, sammenligning; Green Book kræver sammenlignelig behandling.
- **At bruge ejendoms- eller markedsværdier som en proxy for velfærd uden justering.** Markedspriser er selv fordrejede af eksisterende indkomstulighed, hvilket netop er, hvad distributionsmæssig vægtning er beregnet til at korrigere for — at bruge ujusterede markedsværdier kan dobbelttælle biasen.
- **At ignorere variation inden i gruppen.** At vægte efter områdegennemsnitlig indkomst (f.eks. en indeks for multiple deprivation-decil) kan fejlrepræsentere individer, der ikke matcher deres områdes gennemsnit; brug den mest finkornede indkomstdata rimeligt tilgængelig.
- **At behandle elasticiteten 1,3 som en universel konstant.** Green Book selv bemærker, dette er et estimat med et plausibelt interval; sensitivitetstest større beslutninger mod alternative elasticiteter snarere end at behandle 1,3 som eksakt.

## Kilder

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
