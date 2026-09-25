# Social Cost-Benefit Analysis (SCBA)

Social cost-benefit analysis converts every cost and benefit of a policy or program — market and
non-market — into a common monetary unit, discounts future flows to present value, and nets them
off to produce a single number: does this proposal make society better off, and by how much?

## Why it matters

SCBA is the default quantitative method in the economic case of
[Green Book appraisal](../green-book-appraisal/): HM Treasury's guidance requires proposals to
demonstrate a positive net present social value (NPSV) wherever benefits can be credibly monetized,
using willingness-to-pay as the basic valuation principle for non-market goods
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Chapter 5). The discipline it enforces is that "social" cost-benefit analysis is not the same
exercise as a private-sector investment appraisal: it must include costs and benefits that fall on
third parties who are not party to the transaction (externalities), it must use the
[social discount rate](../social-discount-rate/) rather than a commercial cost of capital, and it
should apply [distributional weighting](../distributional-weighting/) where a pound matters more to
a poorer household than a richer one.

Where SCBA breaks down is exactly where its critics expect: goods with no market analog — clean
air, social cohesion, the value of a life saved — have to be monetized using
[stated preference](../stated-preference-valuation/) or [revealed preference](../revealed-preference-valuation/)
methods, or a [shadow price](../shadow-pricing/) has to be constructed. When monetization is
contested rather than merely difficult, the Green Book itself recommends falling back to
[cost-effectiveness analysis](../cost-effectiveness-analysis-in-government/) or
[multi-criteria decision analysis](../multi-criteria-decision-analysis/) rather than forcing a
number that nobody believes.

## The math

```
NPSV = Σ [t=0 to T] (Benefit_t − Cost_t) / (1 + r)^t

where:
  Benefit_t = all monetized benefits in year t, including non-market
              goods valued via stated/revealed preference or shadow price
  Cost_t    = all monetized costs in year t, including opportunity cost
              of resources (see ../opportunity-cost-in-public-spending/)
  r         = social discount rate (HM Treasury sets 3.5% declining to
              lower rates beyond year 30, per Green Book Annex A)
  T         = appraisal period

Benefit-cost ratio (BCR) = Σ PV(Benefits) / Σ PV(Costs)
```

A BCR above 1 (or NPSV above zero) indicates net social value. The Green Book's value-for-money
categories (as used in transport and infrastructure appraisal) label BCR ranges: below 1.0 is poor
value for money, 1.0–1.5 is low, 1.5–2.0 is medium, 2.0–4.0 is high, and above 4.0 is very high.
Sensitivity analysis — re-running the NPSV under pessimistic and optimistic assumptions — is
mandatory, not optional, because monetized non-market benefits carry wide uncertainty bands.

## Worked example

**Local authority**: a council appraises a £3m investment in a new cycling and walking network
over a 20-year appraisal period at a 3.5% discount rate.

```
Costs: £3m capital in year 0, £50,000/year maintenance (years 1-20)
PV(maintenance) ≈ £50,000 × 14.2 (20-year annuity factor at 3.5%) ≈ £710,000
Total PV(costs) ≈ £3.71m

Benefits (all monetized via published DfT/WHO valuation tools):
  Health benefit from increased physical activity: £180,000/year
  Absenteeism reduction: £40,000/year
  Decongestion (fewer car trips): £60,000/year
  Total benefit stream: £280,000/year
PV(benefits) ≈ £280,000 × 14.2 ≈ £3.98m

NPSV = £3.98m − £3.71m = +£0.27m
BCR = 3.98 / 3.71 = 1.07 → "low" value for money
```

The scheme clears the bar but only just; a sensitivity run at a 20% lower health-benefit estimate
(reflecting genuine uncertainty in physical-activity valuation) flips the BCR below 1.0, which is
exactly why the Green Book requires the sensitivity table to be published alongside the headline
number, not just the central estimate.

**Charity**: an infant-mortality prevention program costing £500,000/year is evaluated using the
value of a statistical life (VSL) — a shadow price, not an observed market price — of roughly
£2.1m (HM Treasury's 2023-updated figure, itself derived from stated-preference studies). Averting
one infant death per year against a £500,000 cost gives a BCR of 4.2, comfortably "very high" value
for money — but the entire result rests on the VSL figure, which is why any SCBA using VSL must
disclose it as an assumption, not a fact.

## Software engineering connection

SCBA is the natural frame for platform and infrastructure investment decisions in government
software — comparing a shared identity platform against departmental point solutions, for
instance, requires monetizing benefits like reduced duplicate onboarding cost, reduced fraud, and
faster time-to-service that have no market price on their own. Engineers building the underlying
service should expect program leads to ask for inputs to this analysis: unit costs of
transactions (see [cost per transaction](../cost-per-transaction/)), expected volumes, and
degradation/downtime costs. The discipline that matters most to import: discount future benefits,
name the counterfactual baseline explicitly (see [counterfactual analysis](../counterfactual-analysis/)),
and never present a single point estimate without its sensitivity range.

## Pitfalls

- **Double-counting benefits.** Counting both "time saved" and "productivity gained from that
  time" as separate benefit lines overstates the case; time saved is the benefit, its downstream
  use is not an additional one unless independently evidenced.
- **Omitting displaced costs.** A scheme that moves congestion from one road to another, or moves
  fraud from one channel to another, has not created the net benefit its headline NPSV implies —
  see [displacement and attribution](../displacement-and-attribution/).
- **Using a private discount rate.** Applying a commercial cost of capital (say 8–10%) instead of
  the social discount rate systematically undervalues long-horizon public benefits like health and
  environmental gains — see [social discount rate](../social-discount-rate/).
- **Monetizing the uncontested and hand-waving the contested.** If two-thirds of a proposal's
  benefit is a confidently monetized efficiency saving and one-third is a shakily monetized
  wellbeing gain, the headline NPSV silently blends a hard number with a soft one; report them
  separately.

## Sources

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
