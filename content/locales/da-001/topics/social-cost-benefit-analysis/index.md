# Samfundsøkonomisk cost-benefit-analyse (SCBA)

Samfundsøkonomisk cost-benefit-analyse konverterer hver kostpris og fordel af en politik eller et program — marked og ikke-marked — til en fælles monetær enhed, diskonterer fremtidige flows til nutidsværdi, og nettofører dem til at producere et enkelt tal: gør dette forslag samfundet bedre stillet, og med hvor meget?

## Hvorfor det betyder noget

SCBA er standardkvantitativmetoden i den økonomiske sag i [Green Book-vurdering](../green-book-appraisal/): HM Treasurys vejledning kræver, at forslag demonstrerer en positiv netto nutids samfundsværdi (NPSV), hvor fordele troværdigt kan pengegøres, ved brug af betalingsvillighed som det grundlæggende vurderingsprincip for ikke-marked goder (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Kapitel 5). Disciplinen, det tvinger, er, at "samfundsøkonomisk" cost-benefit-analyse ikke er samme øvelse som en privat sektors investeringsvurdering: den skal inkludere kostpriser og fordele, der falder på tredjeparter, som ikke er part i transaktionen (eksternaliteter), den skal bruge [samfundsmæssig diskonteringsrate](../social-discount-rate/) snarere end en kommerciel kapitalkostpris, og den bør anvende [distributionsmæssig vægtning](../distributional-weighting/), hvor en krone betyder mere for en fattigere husstand end en rigere.

Hvor SCBA bryder sammen er netop, hvor dens kritikere forventer: goder uden markedsanalog — ren luft, social kohæsion, værdien af et reddet liv — skal pengegøres ved brug af [stated preference](../stated-preference-valuation/) eller [revealed preference](../revealed-preference-valuation/)-metoder, eller en [skyggepris](../shadow-pricing/) skal konstrueres. Når pengegørelse er omstridt snarere end blot svær, anbefaler Green Book selv at falde tilbage på [kosteffektivitetsanalyse](../cost-effectiveness-analysis-in-government/) eller [multikriterie-beslutningsanalyse](../multi-criteria-decision-analysis/) snarere end at tvinge et tal, ingen tror på.

## Beregningen

```
NPSV = Σ [t=0 til T] (Fordel_t − Kostpris_t) / (1 + r)^t

hvor:
  Fordel_t = alle pengegjorte fordele i år t, inklusive
             ikke-marked goder værdisat via stated/revealed
             preference eller skyggepris
  Kostpris_t = alle pengegjorte kostpriser i år t, inklusive
               alternativkostning af ressourcer (se
               ../opportunity-cost-in-public-spending/)
  r = samfundsmæssig diskonteringsrate (HM Treasury sætter
      3,5% faldende til lavere rater efter år 30, i henhold
      til Green Book Annex A)
  T = vurderingsperiode

Fordel-kostforhold (BCR) = Σ NV(Fordele) / Σ NV(Kostpriser)
```

En BCR over 1 (eller NPSV over nul) indikerer netto samfundsværdi. Green Books value-for-money-kategorier (som brugt i transport- og infrastrukturvurdering) mærker BCR-intervaller: under 1,0 er dårlig value for money, 1,0–1,5 er lav, 1,5–2,0 er middel, 2,0–4,0 er høj, og over 4,0 er meget høj. Sensitivitetsanalyse — genkøring af NPSV under pessimistiske og optimistiske antagelser — er obligatorisk, ikke valgfri, fordi pengegjorte ikke-marked fordele bærer brede usikkerhedsbånd.

## Gennemregnet eksempel

**Lokal myndighed**: en kommune vurderer en investering på £3m i et nyt cykel- og gangnetværk over en 20-årig vurderingsperiode ved en 3,5% diskonteringsrate.

```
Kostpriser: £3m kapital i år 0, £50.000/år vedligeholdelse
(år 1-20)
NV(vedligeholdelse) ≈ £50.000 × 14,2 (20-årig annuitetsfaktor
ved 3,5%) ≈ £710.000
Samlet NV(kostpriser) ≈ £3,71m

Fordele (alle pengegjort via offentliggjorte DfT/WHO-
værdisætningsredskaber):
  Sundhedsfordel fra øget fysisk aktivitet: £180.000/år
  Fraværsreduktion: £40.000/år
  Trafikaflastning (færre bilture): £60.000/år
  Samlet fordelsflow: £280.000/år
NV(fordele) ≈ £280.000 × 14,2 ≈ £3,98m

NPSV = £3,98m − £3,71m = +£0,27m
BCR = 3,98 / 3,71 = 1,07 → "lav" value for money
```

Ordningen rydder barren, men kun lige; en sensitivitetskørsel ved et 20% lavere sundhedsfordelsestimat (afspejlende genuin usikkerhed i fysisk-aktivitetsvurdering) vender BCR under 1,0, hvilket netop er, hvorfor Green Book kræver, at sensitivitetstabellen offentliggøres sammen med overskriftstallet, ikke blot det centrale estimat.

**Velgørenhedsorganisation**: et program til forebyggelse af spædbarnsdødelighed, der koster £500.000/år, evalueres ved brug af værdien af et statistisk liv (VSL) — en skyggepris, ikke en observeret markedspris — på omkring £2,1m (HM Treasurys 2023-opdaterede tal, selv udledt fra stated-preference-studier). At afværge en spædbarnsdød pr. år mod en kostpris på £500.000 giver en BCR på 4,2, komfortabelt "meget høj" value for money — men hele resultatet hviler på VSL-tallet, hvilket er, hvorfor enhver SCBA, der bruger VSL, skal afsløre det som en antagelse, ikke en fakta.

## Forbindelse til softwareudvikling

SCBA er den naturlige ramme for platform- og infrastrukturinvesteringsbeslutninger i statslig software — at sammenligne en delt identitetsplatform mod departementale punktløsninger, for eksempel, kræver pengegørelse af fordele som reduceret dobbelt onboarding-omkostning, reduceret svindel, og hurtigere tid-til-tjeneste, der ikke har nogen markedspris i sig selv. Ingeniører, der bygger den underliggende tjeneste, bør forvente, at programledere spørger om input til denne analyse: enhedsomkostninger af transaktioner (se [kostpris pr. transaktion](../cost-per-transaction/)), forventede volumener, og degradations-/nedetidskostpriser. Disciplinen, der betyder mest at importere: diskontér fremtidige fordele, navngiv den kontrafaktiske baseline explicit (se [kontrafaktisk analyse](../counterfactual-analysis/)), og præsentér aldrig et enkelt punktestimat uden dets sensitivitetsinterval.

## Faldgruber

- **Dobbelttælling af fordele.** At tælle både "sparet tid" og "produktivitet opnået fra den tid" som separate fordelslinjer overdriver sagen; sparet tid er fordelen, dens nedstrøms anvendelse er ikke en additionel en, med mindre uafhængigt dokumenteret.
- **At udelade forskudte kostpriser.** En ordning, der flytter trængsel fra en vej til en anden, eller flytter svindel fra en kanal til en anden, har ikke skabt den nettofordel, dens overskrift-NPSV antyder — se [forskydning og tilskrivning](../displacement-and-attribution/).
- **At bruge en privat diskonteringsrate.** At anvende en kommerciel kapitalkostpris (sig 8–10%) i stedet for den samfundsmæssige diskonteringsrate underdriver systematisk langsigtede offentlige fordele som sundheds- og miljøgevinster — se [samfundsmæssig diskonteringsrate](../social-discount-rate/).
- **At pengegøre det uomstridte og vifte af det omstridte.** Hvis to tredjedele af et forslags fordel er en selvsikkert pengegjort effektivitetsbesparelse og en tredjedel er en usikkert pengegjort velfærdsgevinst, blander overskrift-NPSV stiltiende et hårdt tal med et blødt; rapportér dem separat.

## Kilder

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
