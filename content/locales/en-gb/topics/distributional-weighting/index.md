# Distributional Weighting

Distributional weighting adjusts the monetary value of a cost or benefit according to who receives
it, on the principle that an extra pound is worth more to a poor household than to a rich one. HM
Treasury's Green Book supplies an explicit method for applying this weighting, built on the
diminishing marginal utility of income, so that appraisals do not silently treat a pound gained by
the wealthiest decile as equal in value to a pound gained by the poorest.

## Why it matters

Standard cost-benefit analysis sums pounds without asking whose pounds they are, which implicitly
assumes that a pound is worth the same to everyone — an assumption economists have long known to be
false. A household earning £15,000/year experiences a £1,000 gain very differently from a household
earning £150,000/year, because the marginal utility of income falls as income rises. Left unweighted,
standard appraisal systematically favours interventions that benefit wealthier, already better-off
groups, because their higher spending power inflates the monetary valuation of benefits reaching
them (a park upgrade near expensive housing "shows" a larger property-value benefit than the same
upgrade near cheap housing, purely because prices are higher, not because the welfare gain is
greater).

The Green Book's supplementary guidance on distributional analysis, reinforced after the Treasury's
2020 review responded to criticism that appraisal methodology systematically favoured London and the
South East, sets out a formal weighting approach based on an assumed elasticity of marginal utility
of income of around 1.3 — meaning a doubling of income roughly halves (specifically, 2^-1.3 ≈ 0.41
times) the marginal value of an additional pound. This is not a rounding adjustment: applying it can
change which of two competing programmes shows the higher net present value, particularly when
comparing an intervention concentrated in a deprived area against one spread across the general
population.

## The maths

The Green Book's distributional weight for a pound of benefit accruing to a household at income
level y, relative to a pound at the national average income level ȳ:

```
Weight(y) = (ȳ / y)^e

where:
  y  = household income (or income of the affected group)
  ȳ  = average (reference) household income
  e  = elasticity of marginal utility of income (Green Book: approximately 1.3)
```

Applying weights to net benefits:

```
Weighted benefit = Σ [unweighted benefit to group i × Weight(y_i)]
```

A group earning half the national average (y = 0.5ȳ) gets a weight of (1/0.5)^1.3 = 2^1.3 ≈ 2.46 —
each pound of benefit to that group counts as worth roughly 2.46 times a pound to an average-income
household.

## Worked example

**Two competing local programmes**, each with an unweighted net benefit of £2 million/year, competing
for the same regional growth fund:

- *Programme A*: a business-support scheme in a prosperous town, average household income £45,000
  (roughly 1.3× the assumed national average of £35,000).
- *Programme B*: a skills programme in a deprived ward, average household income £18,000 (roughly
  0.51× the national average).

```
Weight(A) = (35,000 / 45,000)^1.3 = (0.778)^1.3 ≈ 0.72
Weight(B) = (35,000 / 18,000)^1.3 = (1.944)^1.3 ≈ 2.53

Weighted benefit A = £2,000,000 × 0.72 = £1.44 million
Weighted benefit B = £2,000,000 × 2.53 = £5.06 million
```

Unweighted, the two programmes are tied. Weighted for distributional impact, Programme B's benefit is
more than three times larger — a result that reverses the funding recommendation and reflects the
Green Book's explicit purpose in requiring the weighting to be shown, not just the unweighted
benefit-cost ratio.

**Charity grant allocation**: a funder comparing a £500,000 grant reaching 1,000 low-income
households (weight ≈ 2.0, weighted value £1 million-equivalent) against the same £500,000 reaching
1,000 middle-income households (weight ≈ 1.0, weighted value £500,000-equivalent) should show the
distributional case explicitly in its board paper, not leave it to be inferred.

## Software engineering connection

Distributional weighting rarely appears directly in software delivery metrics, but it should shape
how engineering and data teams design measurement and targeting:

- When building an impact dashboard or benefits calculator, expose the income or deprivation profile
  of who is affected, not just an aggregate benefit total — aggregate figures without distributional
  breakdown hide exactly the reversal shown above.
- Link targeting logic in service design to the same deprivation data the Green Book uses — see
  [Index of Multiple Deprivation](../index-of-multiple-deprivation/) — so that a digital service's
  reach can be assessed for equity, not just efficiency (the contested fourth E in
  [value for money](../value-for-money/)).
- When an algorithm allocates a scarce resource (appointment slots, caseworker time, a subsidy), an
  unweighted "maximise total benefit" objective function will, by construction, reproduce the same
  bias the Green Book's weighting exists to correct — flag this explicitly to policy owners before
  optimising.

## Pitfalls

- **Applying distributional weights inconsistently across a portfolio.** Weighting one programme's
  benefits but not its comparator's produces a biased, not a fairer, comparison; the Green Book
  requires like-for-like treatment.
- **Using property or market values as a proxy for welfare without adjustment.** Market prices are
  themselves distorted by existing income inequality, which is exactly what distributional weighting
  is meant to correct for — using unadjusted market values can double-count the bias.
- **Ignoring within-group variation.** Weighting by area-average income (e.g. an Index of Multiple
  Deprivation decile) can misrepresent individuals who do not match their area's average; use the
  finest-grained income data reasonably available.
- **Treating the 1.3 elasticity as a universal constant.** The Green Book itself notes this is an
  estimate with a plausible range; sensitivity-test major decisions against alternative elasticities
  rather than treating 1.3 as exact.

## Sources

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
