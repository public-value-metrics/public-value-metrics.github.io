# Shadow Pricing

A shadow price is an estimated value assigned to a good, resource, or externality that has no
observable market price, or whose market price is distorted and does not reflect its true social
value. Government appraisal relies on a small set of official shadow prices — carbon, non-work
time, unemployed labour — published centrally so every department uses the same number.

## Why it matters

Shadow prices exist because [social cost-benefit analysis](../social-cost-benefit-analysis/)
cannot function without a monetary value for every cost and benefit, and several of the most
consequential ones — a tonne of carbon emitted, an hour of a commuter's time, an hour of otherwise
unemployed labour — have no market price at all, or a market price that misrepresents their true
social cost. HM Treasury and the Department for Energy Security and Net Zero jointly publish the
shadow price of carbon used across all UK government appraisal
(<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>),
derived not from any carbon market price but from a target-consistent approach: the carbon value is
set at the marginal abatement cost needed to hit the UK's legislated carbon budgets, which is a
fundamentally different logic from observing what carbon actually trades for on the EU or UK
Emissions Trading Scheme.

The shadow wage rate follows a similar logic on the labour side. Employing someone who would
otherwise have been unemployed does not cost society their full wage — part of that wage is a
transfer from foregone benefits payments and lost leisure/search time rather than a net new draw on
society's resources — so Green Book guidance sets a shadow price below the market wage for labour
drawn from unemployment, reflecting the true opportunity cost of that labour (see
[opportunity cost in public spending](../opportunity-cost-in-public-spending/)) rather than its
market price.

## The maths

```
Shadow price of carbon (illustrative structure, current values from the
official BEIS/DESNZ carbon values tool — do not use stale figures):
  Traded sector value: informed by ETS allowance price trajectories
  Non-traded sector (target-consistent) value: set to the marginal cost
    of abatement needed to meet legislated carbon budgets, rising over
    time as easier abatement options are exhausted
  Applied as: £/tonne CO2e × tonnes emitted or abated by the option,
    discounted at the social discount rate for future years

Shadow wage rate (SWR):
  SWR = Market wage − (value of foregone leisure/search time saved
                        + value of welfare payments no longer paid)
  Typically expressed as a fraction of the market wage (e.g. SWR = 0.6
    × market wage in a high-unemployment area, per Green Book Annex A
    guidance on labour markets with spare capacity)
```

Both figures are policy conventions set centrally, not empirical market observations — the whole
point of a shadow price is to substitute for a missing or distorted market, so an appraisal using
one must cite the current official source rather than deriving its own figure, precisely so every
department's appraisal is comparable.

## Worked example

**National government**: a flood defence scheme appraisal estimates it avoids 400 tonnes of CO2e
emissions per year (through reduced use of emergency plant and reduced embodied carbon from
avoided reconstruction) over a 30-year appraisal life, compared against a "do minimum" baseline.

```
Illustrative shadow price of carbon: £280/tonne CO2e (year 1, rising over
  the appraisal period per the official non-traded carbon values schedule)
Year 1 carbon benefit = 400 × £280 = £112,000
```

Because the official schedule has the carbon value *rising* over the appraisal period (reflecting
tightening carbon budgets), the analyst must apply the correct year-specific value for each year of
the 30-year stream, not a flat rate — using the year 1 value throughout would understate later-year
benefits and distort the ranking against alternative flood defence designs with different carbon
profiles.

**Local authority**: a council's employment support programme for long-term unemployed residents
places 150 people into jobs paying £11/hour. Valuing this using the full market wage would credit
the programme with £11 × hours worked as a social benefit, but the shadow wage rate approach
recognizes that these were not workers drawn from other jobs — the true opportunity cost of their
labour before the programme was low.

```
Market wage: £11.00/hour
Shadow wage rate (illustrative, high local unemployment): 0.6 × market wage = £6.60/hour
Net social benefit attributable per hour worked ≈ £11.00 − £6.60 = £4.40/hour
  (the "extra" value created by moving genuinely idle labour into production,
   as distinct from the wage itself, which is largely a transfer)
```

This is why appraisals of employment programmes in high-unemployment areas can show a positive net
social value even when the same programme, run in a full-employment area where displaced labour
would simply be drawn from other jobs, would not.

## Software engineering connection

Shadow pricing rarely touches software delivery directly, but it matters whenever a business case
claims a carbon or social benefit from an IT change — a data-centre consolidation claiming carbon
savings, or a paperless-service claiming avoided printing and postage carbon, must use the current
official shadow price of carbon rather than an invented figure, and must apply the correct
year-by-year schedule rather than a flat rate, exactly as with any other Green Book appraisal input.
See [total cost of ownership in government IT](../total-cost-of-ownership-in-government-it/) and
[public sector cybersecurity value](../public-sector-cybersecurity-value/), both of which often
need a shadow price for a hard-to-monetize input (breach risk, downtime) alongside directly costed
items.

## Pitfalls

- **Using a stale carbon or wage figure.** Both values are revised periodically by central
  guidance; an appraisal built on a superseded figure will not survive Treasury scrutiny.
- **Applying a flat shadow carbon price across a multi-decade appraisal.** The official schedule
  rises over time; using year 1's value throughout misstates the profile of benefits or costs.
- **Confusing the shadow wage with a discount on the worker's actual pay.** The shadow wage rate
  adjusts the *appraisal's* valuation of the labour input, not the wage the worker is actually
  paid — conflating the two invites (incorrectly) justifying below-market pay.
- **Deriving a bespoke shadow price instead of using the official one.** Shadow prices are policy
  conventions precisely so appraisals are comparable across departments; a locally invented figure,
  however well-reasoned, breaks that comparability.

## Sources

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
