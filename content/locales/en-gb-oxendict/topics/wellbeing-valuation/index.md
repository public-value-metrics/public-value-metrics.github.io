# Wellbeing Valuation (WELLBY)

Wellbeing valuation prices a policy's effect directly in life-satisfaction terms, using the WELLBY
(wellbeing-adjusted life year) as its unit — one WELLBY equals a one-point change on a 0–10
life-satisfaction scale, sustained for one year. It is HM Treasury's officially sanctioned
alternative to monetizing every benefit through willingness-to-pay.

## Why it matters

HM Treasury's "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021,
<https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>)
formally brought subjective wellbeing data into central government appraisal, giving analysts a
route to value outcomes — social connection, mental health, safety, civic participation — that
[stated preference](../stated-preference-valuation/) and [revealed preference](../revealed-preference-valuation/)
methods struggle to price convincingly, because people are often poor forecasters of how much a
good will actually affect their satisfaction with life. The guidance, developed jointly with the
What Works Centre for Wellbeing, sets a recommended monetary value per WELLBY — £13,000 (2021
prices, revised periodically) — derived from the relationship observed in large wellbeing surveys
(principally the ONS's Annual Population Survey, which has asked the four ONS4 wellbeing questions
since 2011) between income and life satisfaction, giving analysts a conversion rate back into
pounds when a monetized comparison against other Green Book appraisals is needed.

The method matters because it inverts the usual valuation logic: rather than asking what people
would pay for an outcome (stated preference) or inferring value from a related market transaction
(revealed preference), it measures the outcome's effect on reported life satisfaction directly,
sidestepping the gap between what people say they want and what actually makes them better off.
This is also its central limitation — self-reported life satisfaction is affected by adaptation
and framing effects that a careful practitioner must control for.

## The maths

```
WELLBY = 1 life-satisfaction point (0-10 scale) sustained for 1 person for 1 year

Total WELLBYs from a policy =
  Σ (change in life satisfaction score) × (number of people affected)
    × (duration in years, discounted at the social discount rate)

Monetized value = Total WELLBYs × value per WELLBY
  (HM Treasury recommended value: £13,000 per WELLBY, 2021 prices,
   subject to periodic revision — check current guidance before use)
```

This differs from the health-economics
[wellbeing-adjusted life year](../wellbeing-adjusted-life-years/), which is typically anchored to
health-related quality of life scales (EQ-5D and similar) rather than general life satisfaction;
the two are related but not interchangeable, and Green Book appraisals should be explicit about
which scale and elicitation method underlies a reported WELLBY figure.

## Worked example

**Local authority**: a council runs a community befriending scheme for isolated older residents,
serving 400 people. A before/after wellbeing survey using the ONS4 life-satisfaction question shows
participants' average score rising from 5.8 to 6.5 — a 0.7-point gain — sustained for the
programme's 2-year funded duration.

```
WELLBYs generated = 400 people × 0.7 points × 2 years = 560 WELLBYs
Monetized value = 560 × £13,000 = £7.28m
Programme cost = £450,000 over 2 years

Benefit-cost ratio ≈ £7.28m / £0.45m ≈ 16:1
```

A ratio this high should prompt scrutiny rather than celebration — the Green Book wellbeing
guidance explicitly warns against taking small-sample self-reported gains at face value without
checking for selection effects (did only the most sociable, most-likely-to-improve residents join
the scheme?) and without a comparison group; a well-designed evaluation would net off a
counterfactual change observed in non-participants, see [counterfactual analysis](../counterfactual-analysis/).

**National government**: comparing two employment programmes using WELLBYs rather than earnings
alone captures that unemployment carries a wellbeing cost beyond lost income — UK wellbeing
research consistently finds unemployment reduces life satisfaction by more than the income loss
alone would predict, because of the non-pecuniary effects of losing structure, purpose, and social
contact. A programme evaluated on earnings gain alone would understate its value relative to one
evaluated additionally on WELLBYs.

## Software engineering connection

Wellbeing valuation rarely reaches engineering teams directly, but it shapes what "success" gets
defined as for social-sector and public-service products — a digital befriending platform, a
mental-health triage tool, or a community platform for isolated residents should expect its impact
to eventually be measured this way, which means product analytics need to capture *who* is
reached and for *how long*, not just usage counts. Build wellbeing survey instrumentation (ONS4 or
validated equivalents) into service evaluation from the start rather than bolting it on
retrospectively; retrofitting a wellbeing baseline after a service has launched loses the pre/post
comparison entirely. See [outcomes vs outputs](../outcomes-vs-outputs/) and
[impact evaluation methods](../impact-evaluation-methods/).

## Pitfalls

- **No counterfactual or comparison group.** A pre/post wellbeing gain with no control for what
  would have happened anyway overstates the programme's effect; see
  [counterfactual analysis](../counterfactual-analysis/) and
  [additionality and deadweight](../additionality-and-deadweight/).
- **Small, self-selected samples.** Wellbeing surveys of programme participants who opted in are
  prone to selection bias — the people who joined and stayed were plausibly already trending
  upward.
- **Treating the £-per-WELLBY conversion as precise.** The monetized value is a policy convention
  derived from income-wellbeing regressions, not a market price; use it for comparability across
  Green Book appraisals, not as a claim about what wellbeing "is worth."
- **Conflating WELLBYs with health-related QALYs.** The two measure different constructs on
  different scales; see [wellbeing-adjusted life years](../wellbeing-adjusted-life-years/) for the
  health-economics variant and do not average the two together.

## Sources

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
