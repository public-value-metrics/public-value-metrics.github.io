# DORA-målinger for offentlig værdi

DORA (DevOps Research and Assessment)-målingerne — deployment-frekvens, ledeTid for ændringer, ændrings-fejlRate, og tid-til-genOpretning, plus pålidelighed som en femte — er software-industriens mest validerede leverings-præstations-benchmarks. Oversat til statslige ansvarligheds-termer er hver en direkte proxy for, hvor hurtigt, og hvor sikkert, offentlig værdi når en borger.

## Hvorfor det betyder noget

DORAs decennium af forskning, offentliggjort årligt som *Accelerate State of DevOps Report* (Forsgren, Humble, og Kims metodologi, nu kørt af Google Cloud), klyngeSamler teams ind i elite, høj, mellem, og lav-præstanter. Elite-teams deployer på forespørgsel, tager under en dag fra commit til produktion, fejler groft 5% af ændringer, og genOpretter i under en time; lav-præstanter deployer månedligt eller mindre, tager måneder, fejler omkring 40% af ændringer, og genOpretter i uger. I regeringen er disse ikke ingeniør-vanitets-målinger: Government Digital Services Service Standard kræver, teams "itererer og forbedrer frekvent" og kan respondere hurtigt til brugerBehov, og departementer, der ikke kan deploye sikkert og ofte, er strukturelt uI stand til at møde den standard, uanset hvad deres brugerForskning siger. Cabinet Offices eget digital-effektivitets-arbejde fandt, at at skubbe en borger fra en fejlet eller langsom digital transaktion ind i en telefon- eller papir-kanal er dyrt — GDS's 2012 Digital Efficiency Report estimerede nogle digitale transaktioner kostpris-satte så lidt som 20p mod telefon- eller ansigt-til-ansigt-kontakter kostpris-sat op til £8,62 — så en ændrings-fejl i en borgerVendt tjeneste kostpris-sætter ikke blot ingeniørTid, den skubber rigtige pund ind på kontaktCenter-budgettet (se [kanalSkift-besparelser](../channel-shift-savings/)).

## Beregningen

```
Deployment-frekvens  = produktions-deploys / tid
LedeTid for ændringer = t(deploy) − t(commit), median
Ændrings-fejlRate    = fejlede ændringer / samlede ændringer
                       × 100
Tid-til-genOpretning (MTTR) = t(genOprettet) − t(fejl), median
Pålidelighed          = SLO-opnåelse (tilgængelighed, latency,
                        korrekthed)
```

Offentlig-værdi-oversættelser:

```
LedeTid        → uger i pipeline × CoD, se kostpris-af-
                 forsinkelse-i-offentlige-programmer
FejlRate       → borgerVendt-incident-rate: CFR × kostpris
                 pr. redirecteret kontaktCenter-opkald (eller
                 pr. fejlet statutorisk transaktion)
GenOpretningsTid → tjeneste-udFald-skade: MTTR × (krav/
                 ansøgninger blokeret pr. time) × nedStrøms-
                 kostpris eller velvære-tab pr. enhed
Pålidelighed     → fordel-rabat: en tjeneste ved 99%
                 tilgængelighed leverer ≈ 0,99 af sin
                 modellerede fordel — leverings-analogen til
                 optagelse eller compliance-underSkud
```

## Gennemregnet eksempel

En lokal myndigheds ydelses-kravs-portal-team, før og efter en leverings-ingeniør-investering:

```
                    Før         Efter
Deploys             månedlig    ugentlig
LedeTid             8 uger      5 dage
CFR                 30%         10%
MTTR                3 dage      4 timer
```

Teamet leverer omkring 25 forbedringer/år, gennemsnitlig værdi £8.000/uge ([kostpris af forsinkelse](../cost-of-delay-in-public-programmes/)). At skære ledeTid med groft 7,3 uger trækker hver forbedrings fordelStrøm fremad: 25 × 7,3 × 8.000 ≈ **£1.460.000/år** af værdi leveret tidligere. På fejlRate: 25 × (0,30 − 0,10) = 5 færre fejlede ændringer/år; hver fejlet ændring på en offentlig portal redirecterer typisk et estimeret 2.000 borgere til telefon-kanalen ved £8,62 versus 20p, en netto kostpris af groft £8,42 × 2.000 ≈ £16.840 pr. incident, så at undgå 5 incidenter sparer ≈ **£84.200/år**. Leverings-ingeniør-investeringen værdiSættes i samme valuta som enhver anden offentlig-værdi-sag.

## Gennemregnet eksempel fortsat: pålidelighed

Hvis portalen kører ved 97% tilgængelighed snarere end en mål 99,5%, og hvert procentpoint af nedeTid modelleres som 2% af krav tabt til forladelse, leverer tjenesten groft 0,975 af sin modellerede £2M/år-fordel — en £50.000/år-fordel-rabat, et rent-uptime-dashboard aldrig eksponerer.

## Forbindelse til softwareudvikling

DORA-målinger er en offentlig tjenestes operationelle målinger i andre klæder: ledeTid kortlægger til [tjenesteStandarder og transaktionsMålinger](../service-standards-and-transaction-metrics/); ændrings-fejlRate kortlægger til genArbejde- og klage-rater; MTTR kortlægger til, hvor længe en statutorisk tjeneste er uTilgængelig for krævere. ForbedringsTekniker overFøres i begge retninger, fordi begge er kø-systemer under ansvarligheds-begrænsninger — se [flowMålinger i statslig levering](../flow-metrics-in-government-delivery/) for den underliggende kø-aritmetik. Bemærk også DORAs 2025-fund, at AI-adoption korrelerer med højere gennemStrømning men *værre* stabilitet — en intervention med både virkning og sideEffekter, hvilket er netop den netto-fordel-analyse, dette kapitels [AI-produktivitet](../ai-productivity-in-the-public-sector/)-emne arbejder igennem.

## Faldgruber

- **Målings-manipulation.** At inflatere deployment-tællinger med no-op-udgivelser, eller udeLukke hotFixes fra ændrings-fejl-tællingen. Definer begivenheder lige så præcist som en statutorisk tjenesteStandard definerer en "succesfuld transaktion."
- **Tvær-departement-liga-tabeller.** DORA-klynger sammenligner leverings-praksisser, ikke tjenester med forskellige risiko-profiler; et skatte-betalings-system vurderet "høj" kan være den rigtige position, hvor "elite" ville være hensynsLøs givet assurance-krav.
- **At optimere en måling alene.** Hastighed uden ændrings-fejlRate er den klassiske gennemStrømning-stabilitet-afVejning — rapporter alle fire sammen, ikke som et enkelt score.

## Kilder

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
