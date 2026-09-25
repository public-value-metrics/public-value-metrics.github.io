# Multi-Criteria Decision Analysis (MCDA)

MCDA scores and weighs options against several distinct, weighted criteria at once, producing a
ranked comparison without forcing every criterion into one monetary or natural-unit scale. It is
the appraisal method for decisions where the outcomes that matter genuinely cannot be reduced to a
single number.

## Why it matters

The Green Book explicitly sanctions MCDA (its Box 2 case-study appendix and Annex A both discuss
it directly) for appraisals where benefits are "genuinely incommensurable" — where converting
everything to money via [social cost-benefit analysis](../social-cost-benefit-analysis/), or to one
outcome via [cost-effectiveness analysis](../cost-effectiveness-analysis-in-government/), would
misrepresent the decision rather than clarify it
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
A site selection for a new prison, for instance, trades off capital cost against community impact,
transport connectivity, environmental effect, and staff recruitability — criteria that do not share
a common unit and where forcing a shared unit (typically money) would smuggle in a value judgement
about the relative importance of, say, environmental impact versus cost, dressed up as objective
arithmetic.

MCDA's honesty is also its main vulnerability: because weights are assigned by whoever runs the
appraisal (or by a panel), the method is only as legitimate as the weighting process. Green Book
guidance is explicit that criteria and weights must be agreed and published *before* options are
scored, precisely to prevent a reviewer working backwards from a preferred option to the weights
that justify it.

## The maths

```
For each option i and criterion j:
  Score_ij   = the option's performance against that criterion (often 0-100
               or 1-10, from evidence, expert judgement, or stakeholder scoring)
  Weight_j   = relative importance of criterion j, weights sum to 1 (or 100)

Weighted score of option i = Σ_j (Score_ij × Weight_j)

Procedure:
1. Agree the criteria set and weights BEFORE scoring any option (swing
   weighting or pairwise comparison, e.g. AHP, are common elicitation methods).
2. Score every option against every criterion on a common scale, from
   evidence where possible.
3. Compute weighted totals; rank options.
4. Sensitivity-test the weights: does the ranking survive plausible
   disagreement about how much each criterion should matter?
```

MCDA does not produce a defensible absolute value the way SCBA's net present value does — it only
produces a ranking conditional on the agreed weights. This is a feature when the decision is
genuinely about trading off incommensurable goods, and a liability if used to dodge the harder work
of monetization where monetization was actually possible.

## Worked example

**Local authority**: a council selecting a location for a new household waste recycling centre
scores three sites against four criteria, weighted by a cross-department panel before any site
visit:

```
Criteria (weight):        Capital cost (30%)  Transport access (25%)
                           Community impact (25%)  Environmental impact (20%)

Site scores (0-100, higher = better):
Site A: cost 80, access 60, community 40, environment 70
Site B: cost 60, access 90, community 70, environment 50
Site C: cost 90, access 50, community 80, environment 60

Weighted totals:
Site A = 80(.30) + 60(.25) + 40(.25) + 70(.20) = 24+15+10+14 = 63
Site B = 60(.30) + 90(.25) + 70(.25) + 50(.20) = 18+22.5+17.5+10 = 68
Site C = 90(.30) + 50(.25) + 80(.25) + 60(.20) = 27+12.5+20+12 = 71.5
```

Site C ranks highest. A sensitivity run that shifts the community-impact weight from 25% to 35%
(taking 10 points from capital cost) changes Site C's total to 71.5 − 3 + 8 = 76.5 and Site B's to
68 − 6 + 7 = 69 — Site C still leads, so the ranking is robust to that plausible disagreement about
weighting, which is exactly the check the Green Book expects to see reported.

**Charity**: a grant-making foundation choosing between funding a debt-advice service, a food bank
network, and a financial-literacy programme uses MCDA rather than SROI (see
[social return on investment](../social-return-on-investment/)) precisely because the trustees
disagree, in good faith, about whether crisis relief or prevention should weigh more heavily — MCDA
lets them agree the disagreement's *shape* (a weight range) rather than pretend a single SROI
ratio resolves it.

## Software engineering connection

MCDA is the natural tool for vendor and architecture selection when criteria genuinely conflict —
choosing between a cloud-hosted and an on-premises case management system trades off cost,
data-sovereignty risk, accessibility, and delivery speed in ways that do not reduce to one number.
Engineering leads should insist the weighting happen before the options are scored, exactly as the
Green Book requires, because a weighting exercise run after seeing the shortlist reliably drifts
towards whichever option the room already favoured. See
[build vs buy in government](../build-vs-buy-in-government/) for a common MCDA application, and
[public value scorecard](../public-value-scorecard/) for a related structured-scoring tool used
post-decision rather than pre-decision.

## Pitfalls

- **Setting weights after seeing the options.** This is the single most common way MCDA is gamed,
  intentionally or not; publish weights before scoring, and record who set them.
- **Treating the weighted total as a hard number.** A score of 71.5 versus 68 is not a
  statistically meaningful gap unless the sensitivity analysis confirms the ranking is stable;
  report ranges, not false precision.
- **Using MCDA to avoid monetization that was actually feasible.** If most criteria could be
  credibly priced, defaulting to MCDA instead of [SCBA](../social-cost-benefit-analysis/) discards
  information the appraisal could have used.
- **Letting one dominant stakeholder set all the weights alone.** Green Book good practice expects
  weights to be elicited from a representative panel, not the sponsoring director, to avoid the
  appraisal simply re-deriving what that person already wanted.

## Sources

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
