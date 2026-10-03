# Multikriterie-beslutningsanalyse (MCDA)

MCDA scorer og vægter muligheder mod flere distinkte, vægtede kriterier samtidigt, hvilket producerer en rangeret sammenligning uden at tvinge hvert kriterium ind i en monetær eller naturlig-enheds skala. Det er vurderingsmetoden til beslutninger, hvor de resultater, der betyder noget, genuint ikke kan reduceres til et enkelt tal.

## Hvorfor det betyder noget

Green Book sanktionerer explicit MCDA (dens Box 2-casestudie-appendiks og Annex A diskuterer begge det direkte) for vurderinger, hvor fordele er "genuint ikke-sammenlignelige" — hvor konvertering af alt til penge via [samfundsøkonomisk cost-benefit-analyse](../social-cost-benefit-analysis/), eller til et resultat via [kosteffektivitetsanalyse](../cost-effectiveness-analysis-in-government/), ville fejlrepræsentere beslutningen snarere end at klargøre den (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Et placeringsvalg til et nyt fængsel, for eksempel, afvejer kapitalkostpris mod samfundseffekt, transportforbindelser, miljøeffekt, og personalerekrutterbarhed — kriterier, der ikke deler en fælles enhed, og hvor at tvinge en delt enhed (typisk penge) ville smugle et værdiskøn ind om den relative vigtighed af, sig, miljøeffekt versus kostpris, forklædt som objektiv aritmetik.

MCDA's ærlighed er også dens hovedSårbarhed: fordi vægte tildeles af hvem der kører vurderingen (eller af et panel), er metoden kun så legitim som vægtningsprocessen. Green Book-vejledning er explicit om, at kriterier og vægte skal aftales og offentliggøres *før* muligheder scores, netop for at forhindre en anmelder i at arbejde baglæns fra en foretrukken mulighed til vægtene, der retfærdiggør den.

## Beregningen

```
For hver mulighed i og kriterium j:
  Score_ij   = mulighedens præstation mod det kriterium
              (ofte 0-100 eller 1-10, fra evidens,
              ekspertvurdering, eller interessentscoring)
  Vægt_j     = relativ vigtighed af kriterium j, vægte
              summer til 1 (eller 100)

Vægtet score for mulighed i = Σ_j (Score_ij × Vægt_j)

Procedure:
1. Aftal kriteriesættet og vægtene FØR scoring af nogen
   mulighed (swing-vægtning eller parvis sammenligning,
   f.eks. AHP, er almindelige elicitationsmetoder).
2. Scor hver mulighed mod hvert kriterium på en fælles
   skala, fra evidens hvor muligt.
3. Beregn vægtede totaler; rangér muligheder.
4. Sensitivitetstest vægtene: overlever rangeringen plausibel
   uenighed om, hvor meget hvert kriterium bør betyde?
```

MCDA producerer ikke en forsvarlig absolut værdi på den måde, SCBA's nettonutidsværdi gør — den producerer kun en rangering betinget af de aftalte vægte. Dette er en funktion, når beslutningen genuint handler om at afveje ikke-sammenlignelige goder, og en forpligtelse, hvis brugt til at undgå det sværere arbejde med pengegørelse, hvor pengegørelse faktisk var muligt.

## Gennemregnet eksempel

**Lokal myndighed**: en kommune, der vælger en placering til et nyt husholdningsgenbrugscenter, scorer tre steder mod fire kriterier, vægtet af et tværdepartementalt panel før ethvert stedsbesøg:

```
Kriterier (vægt):        Kapitalkostpris (30%)
                         Transportadgang (25%)
                         Samfundseffekt (25%)
                         Miljøeffekt (20%)

Stedscorer (0-100, højere = bedre):
Sted A: kostpris 80, adgang 60, samfund 40, miljø 70
Sted B: kostpris 60, adgang 90, samfund 70, miljø 50
Sted C: kostpris 90, adgang 50, samfund 80, miljø 60

Vægtede totaler:
Sted A = 80(.30) + 60(.25) + 40(.25) + 70(.20) =
24+15+10+14 = 63
Sted B = 60(.30) + 90(.25) + 70(.25) + 50(.20) =
18+22,5+17,5+10 = 68
Sted C = 90(.30) + 50(.25) + 80(.25) + 60(.20) =
27+12,5+20+12 = 71,5
```

Sted C rangerer højest. En sensitivitetskørsel, der flytter samfundseffektsvægten fra 25% til 35% (tager 10 point fra kapitalkostpris), ændrer Sted Cs total til 71,5 − 3 + 8 = 76,5 og Sted Bs til 68 − 6 + 7 = 69 — Sted C fører stadig, så rangeringen er robust mod den plausible uenighed om vægtning, hvilket netop er kontrollen, Green Book forventer at se rapporteret.

**Velgørenhedsorganisation**: en bevillingsgivende fond, der vælger mellem at finansiere en gældsrådgivningstjeneste, et fødevarebanknetværk, og et finansielt kompetenceprogram, bruger MCDA snarere end SROI (se [social afkast på investering](../social-return-on-investment/)) netop fordi bestyrelsesmedlemmerne er uenige, i god tro, om hvorvidt krisehjælp eller forebyggelse bør vægte tungere — MCDA lader dem aftale uenighedens *form* (et vægtinterval) snarere end at foregive, at et enkelt SROI-forhold løser det.

## Forbindelse til softwareudvikling

MCDA er det naturlige redskab til leverandør- og arkitekturvalg, når kriterier genuint konflikter — at vælge mellem et cloud-hostet og et on-premises sagsstyringssystem afvejer kostpris, datasuverænitetsrisiko, tilgængelighed, og leveringshastighed på måder, der ikke reducerer til et tal. Tekniske ledere bør insistere på, at vægtning sker før muligheder scores, netop som Green Book kræver, fordi en vægtningsøvelse kørt efter at have set den korte liste pålideligt driver mod hvilken mulighed rummet allerede foretrak. Se [byg versus køb i regeringen](../build-vs-buy-in-government/) for en almindelig MCDA-anvendelse, og [offentlig værdi scorecard](../public-value-scorecard/) for et relateret struktureret scoring-redskab brugt efter-beslutning snarere end før-beslutning.

## Faldgruber

- **At sætte vægte efter at have set mulighederne.** Dette er den enkelte mest almindelige måde MCDA manipuleres, forsætligt eller ikke; offentliggør vægte før scoring, og registrér hvem der satte dem.
- **At behandle den vægtede total som et hårdt tal.** En score på 71,5 versus 68 er ikke en statistisk meningsfuld kløft, med mindre sensitivitetsanalysen bekræfter, at rangeringen er stabil; rapportér intervaller, ikke falsk præcision.
- **At bruge MCDA til at undgå pengegørelse, der faktisk var muligt.** Hvis de fleste kriterier troværdigt kunne prissættes, kasserer standardvalg til MCDA i stedet for [SCBA](../social-cost-benefit-analysis/) information, vurderingen kunne have brugt.
- **At lade en dominerende interessent sætte alle vægtene alene.** Green Book god praksis forventer, at vægte eliciteres fra et repræsentativt panel, ikke den sponsorerende direktør, for at undgå, at vurderingen simpelthen genudleder, hvad den person allerede ønskede.

## Kilder

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
