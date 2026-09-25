# Wellbeing-adjusted life years (WELLBY)

A WELLBY is one additional point of life satisfaction, on the standard 0–10 wellbeing scale, for
one person for one year. It is the structural analogue of the QALY used in health economics — a
single unit that lets you compare interventions whose outcomes have nothing else in common — but
built on subjective wellbeing rather than clinical health states, and set out in HM Treasury's
"Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021).

## Why it matters

Cost-benefit appraisal needs a common unit to compare a youth-club grant against a road-safety
scheme against a mental-health service, none of which share an outcome measure. Health economics
solved this for clinical interventions with the QALY: a quality-adjusted year of life, weighted
from 0 (dead) to 1 (full health). HM Treasury's wellbeing guidance extends the same logic to
non-health public spending, using the ONS's harmonized life-satisfaction question ("Overall, how
satisfied are you with your life nowadays?", answered 0–10) as the outcome ladder instead of a
health-state index. A WELLBY of 1 means one person's life satisfaction rising by one full point for
one year (or, equivalently, ten people's satisfaction rising by 0.1 point each for a year — WELLBYs
sum across a population the way QALYs do). HM Treasury's guidance sets an illustrative monetary
value per WELLBY (around £13,000, 2019/20 prices) derived by reconciling subjective-wellbeing data
with other approaches to the value of a life year, giving appraisers a way to monetise outcomes —
loneliness reduction, community cohesion, green-space access — that [wellbeing valuation](../wellbeing-valuation/)
techniques could previously only describe, not compare on a common footing with health or safety
spending.

## The maths

```
WELLBY = Δ life satisfaction (0–10 scale) × number of years the change persists
        (summed across all people affected)

Monetised wellbeing benefit = WELLBYs generated × value per WELLBY (HMT reference value)

cf. QALY = Δ health-state utility (0–1 scale) × years lived in that state
```

The 0–10 satisfaction scale and the 0–1 QALY utility scale are not interchangeable without a
conversion step; HM Treasury's guidance discusses reconciling the two so that, for example, a
health intervention appraised in QALYs and a social intervention appraised in WELLBYs are not
silently double-counted or left incomparable within the same [Green Book appraisal](../green-book-appraisal/).

## Worked example

**Local authority loneliness service**: a befriending scheme serves 400 isolated older residents.
Follow-up surveys show average life satisfaction rises from 5.2 to 6.0 (a gain of 0.8 points), and
the effect is estimated to persist for 2 years before fading.

```
WELLBYs = 400 people × 0.8 points × 2 years = 640 WELLBYs

Monetised value = 640 × £13,000 = £8,320,000
```

Against an annual programme cost of £300,000 (£600,000 over 2 years), the benefit-cost ratio is
roughly 8,320,000 / 600,000 ≈ **13.9:1** — a figure that can now sit in the same appraisal table as
a health scheme's cost-per-QALY-averted or a transport scheme's journey-time savings.

**Charity, smaller scale**: a community arts programme reaches 50 participants with a measured
satisfaction gain of 0.3 points, lasting 1 year.

```
WELLBYs = 50 × 0.3 × 1 = 15 WELLBYs
Monetised value = 15 × £13,000 = £195,000
```

## Software engineering connection

- Any citizen-facing service that already collects a life-satisfaction or wellbeing survey item
  (many local-authority and health-and-care platforms do, following ONS's four standard wellbeing
  questions) can compute WELLBYs directly from existing data pipelines rather than commissioning
  bespoke economic evaluation for every service change.
- WELLBYs give engineering teams building for [social value act](../social-value-act/) reporting or
  [social return on investment](../social-return-on-investment/) a nationally standardised,
  HM-Treasury-endorsed denominator, avoiding the proliferation of bespoke "impact scores" that
  can't be compared across contracts or suppliers.
- Because WELLBYs are additive across people and time, they compose cleanly into the kind of
  population-level outcome tracking used in [outcomes-based accountability](../outcomes-based-accountability/)
  systems — a service dashboard can report cumulative WELLBYs generated per quarter the way a
  health system reports QALYs gained.

## Pitfalls

- **Assuming self-reported satisfaction gains are entirely attributable to the intervention** —
  without a counterfactual (comparison group or before/after design with controls), you cannot
  separate the WELLBY gain from general trends; see [counterfactual analysis](../counterfactual-analysis/).
- **Mixing WELLBYs and QALYs in one total without reconciliation** — HM Treasury's guidance is
  explicit that the two use different scales and different underlying theories of value; summing
  them naively double-counts overlapping welfare.
- **Using the reference monetary value uncritically** — the £-per-WELLBY figure is a national
  average estimate with real uncertainty bands; HM Treasury guidance recommends sensitivity
  analysis, not treating it as a fixed exchange rate.

## Sources

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
