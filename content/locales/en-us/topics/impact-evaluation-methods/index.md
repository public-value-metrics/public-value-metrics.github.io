# Impact Evaluation Methods

Impact evaluation methods are the statistical and experimental designs used to estimate what a
policy or program actually caused, as distinct from what would have happened anyway — randomized
controlled trials (RCTs), difference-in-differences, propensity score matching, and regression
discontinuity design are the four most commonly used in UK public policy. They exist because most
government interventions cannot be tested in a laboratory: you cannot randomize which town gets a
new bus route in the way you can randomize which patient gets a drug, so these methods borrow the
same causal logic without always requiring random assignment.

## Why it matters

HM Treasury's Magenta Book, Annex A on quasi-experimental methods, is the UK government's canonical
guidance on choosing between these designs, and bodies such as the Education Endowment Foundation
and the What Works Center for Local Economic Growth institutionalize an evidence hierarchy built
around them — RCTs where randomization is feasible and ethical, quasi-experimental designs where it
is not. The choice of method is not a technical afterthought: it determines whether an evaluation
can answer "did the program cause this?" or only "did this happen after the program started?",
which is the same question [counterfactual analysis](../counterfactual-analysis/) is built to
force practitioners to ask before any evaluation is commissioned.

## The math

```
RCT:
  Impact = mean(outcome | treatment group) − mean(outcome | control group)
  (valid because assignment to treatment is random)

Difference-in-differences (DiD):
  Impact = [outcome_after(treated) − outcome_before(treated)]
         − [outcome_after(control) − outcome_before(control)]
  (requires a "parallel trends" assumption: treated and control would have moved together
   absent the intervention)

Propensity score matching (PSM):
  1. Estimate P(treatment = 1 | covariates X) for every unit → propensity score
  2. Match treated units to untreated units with similar propensity scores
  3. Impact = mean(outcome | treated) − mean(outcome | matched control)

Regression discontinuity design (RDD):
  Impact = jump in outcome observed at the eligibility threshold,
           comparing units just above vs just below the cutoff
```

## Worked example

**Local authority (difference-in-differences for a troubled families program)**: outcome is
school attendance. The treated area moves from 84% to 89% attendance (+5 percentage points) over
the program period; a comparable but untreated area moves from 85% to 87% (+2 percentage points)
over the same period. DiD impact estimate: 5 − 2 = +3 percentage points attributable to the
program. Applied to a cohort of 2,000 pupils in the treated area, this is consistent with roughly
60 additional pupils (3% × 2,000) reaching the higher attendance category, an extrapolation that
should be reported with its parallel-trends caveat, not as a precise headcount.

**Charity (propensity score matching for an employability charity)**: 300 program participants
are matched to 300 individuals from a larger administrative dataset using propensity scores built
from age, prior employment history, and qualification level. Twelve-month employment rate: matched
treated group 46%, matched comparison group 33%. PSM impact estimate: 46% − 33% = +13 percentage
points attributable to the program, conditional on no unobserved confounder (such as motivation)
driving both participation and outcome.

## Software engineering connection

Whether any of these designs is feasible later depends heavily on data engineering decisions made
early. RDD needs an accurately recorded running variable and a genuinely clean eligibility cutoff;
DiD needs comparable panel data over time for both treated and comparison areas, which means
consistent joins across systems and years; PSM needs rich baseline covariate data captured before
treatment, not reconstructed afterward. A data model designed alongside a
[theory of change](../theory-of-change/) and [logic model](../logic-model/) from the start —
capturing baseline covariates, dates, and comparison-group-eligible records — is what makes a
rigorous impact evaluation possible later, instead of an expensive post-hoc scramble. See
[impact evaluation vs process evaluation](../impact-evaluation-vs-process-evaluation/) for the
complementary question these methods do not answer on their own.

## Pitfalls

- **Forcing an RCT where infeasible or unethical**, or conversely never considering a
  quasi-experimental design when a genuine opportunity for one — a policy cutoff, a phased
  rollout — was available and unused.
- **Ignoring the parallel-trends assumption in DiD.** If the comparison area was already
  diverging from the treated area before the intervention, the two-point comparison is
  contaminated; check pre-trends, not just before/after.
- **Matching only on observed covariates in PSM.** Unobserved selection, such as participant
  motivation, can bias the estimate even when observed covariates are well balanced.
- **Running variable manipulation in RDD.** If people can influence their score to fall just
  inside an eligibility threshold, the discontinuity no longer isolates a causal effect.

## Sources

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Center for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
