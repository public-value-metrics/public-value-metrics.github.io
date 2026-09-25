# Build vs Buy in Government

Build-vs-buy is a structured, risk-adjusted comparison of custom development against commercial or commodity acquisition, compared on discounted [total cost of ownership](../total-cost-of-ownership-in-government-it/), time-to-value, and risk. Government is structurally a buying sector — the Technology Code of Practice sets a presumption toward commodity and cloud solutions — yet engineering teams inside departments still default to building, for the same reasons builders everywhere do.

## Why it matters

The Government Digital Service's Technology Code of Practice (<https://www.gov.uk/guidance/the-technology-code-of-practice>) and the accompanying Service Manual guidance on deciding whether to build or buy push departments to justify bespoke development against a presumption that commodity capability should be bought, not built, and that only genuinely novel, mission-differentiating capability warrants custom code. HM Treasury's optimism bias supplementary guidance to the Green Book, drawn from the 2002 Mott MacDonald review of large public procurements, gives IT projects the widest uplift range of any category assessed — capital cost estimates recommended for uplift by 10% at the low end and by up to 200% at the high end before they are used in appraisal, reflecting how badly software builds have historically been underestimated across public procurement. Build-vs-buy analysis exists precisely to force that risk adjustment onto the table before approval, rather than letting it surface as an in-year overspend request.

## The maths

```
Compare over the same 3–5 year horizon, discounted at the Green Book
social discount rate (see social-discount-rate.md):

NPV_option = PV(benefits, shifted by time-to-value) − PV(TCO)

Risk adjustments (Green Book optimism bias pattern):
  build cost × 1.1–3.0        (IT project uplift range, Mott MacDonald)
  build time-to-value + 40–60% (deployment delay prior)
  buy: add integration reality-check and contract exit costs instead

Decision drivers, in the order they usually decide:
  1. differentiation — is this capability the mission, or plumbing?
  2. time-to-value × cost of delay (see cost-of-delay-in-public-programmes.md)
  3. risk-adjusted total cost of ownership
```

## Worked example

A local authority needs a case-management system for adult social care. Buy: SaaS at £180,000/year, live in 4 months. Build: estimated £900,000 plus £150,000/year maintenance, live in 14 months.

```
Risk-adjusted build cost = 900,000 × 1.4 = £1,260,000
5-year TCO:
  buy  = 180,000 × 5 = £900,000
  build = 1,260,000 + 150,000 × 5 = £2,010,000

Delay term: the system avoids £40,000/month in duplicated assessments;
build arrives 10 months later than buy.
CoD = 10 × 40,000 = £400,000

Effective comparison: £900,000 (buy) vs £2,010,000 + £400,000 = £2,410,000 (build)
```

Buy wins by roughly £1.5 million over five years, and the largest single line after the build estimate itself is the delay cost that a pure capex comparison would never have surfaced.

## Software engineering connection

The disciplines that transfer directly from this analysis into delivery practice: **prior-based risk adjustment** — the Mott MacDonald uplift is the software equivalent of Green Book optimism bias applied mechanically, so teams should argue for exceptions to it rather than assuming their estimate is the exception; **comparator honesty** — the alternative to building is the best available buy option, not "nothing", which ties directly to [opportunity cost in public spending](../opportunity-cost-in-public-spending/); and **honest TCO comparison** — every build proposal should be compared against a buy option's full [total cost of ownership](../total-cost-of-ownership-in-government-it/), not its list price. Where build genuinely wins, the [cost of delay](../cost-of-delay-in-public-programmes/) of the additional build time should be priced explicitly in the business case, not left as an unstated assumption that time doesn't matter.

## Pitfalls

- **Comparing vendor list price to an un-risk-adjusted build estimate**: this double-flatters build twice over, once on cost and once on schedule.
- **Zero-priced internal labour**: civil service engineering time is treated as "free" because it is already on the departmental headcount budget, which hides its true opportunity cost against other work that team could be doing.
- **Unpriced lock-in in both directions**: vendor exit and data-portability costs are real, but so is a bespoke build's bus-factor and its dependency on retaining a small, hard-to-replace in-house team over its life.
- **Mission-differentiation claimed for plumbing**: "this is core to us" asserted about integration middleware or a document store — test it against whether a citizen or caseworker would ever notice which one is running underneath.

## Sources

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
