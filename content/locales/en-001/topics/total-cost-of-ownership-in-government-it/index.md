# Total Cost of Ownership (TCO) in Government IT

Total cost of ownership is the full lifecycle cost of a system — acquisition plus every year of running it — discounted to a common date. In government IT, the single most reliable forecasting error is comparing suppliers or options on acquisition price alone, when operations and maintenance typically account for somewhere between half and four-fifths of the lifetime bill.

## Why it matters

HM Treasury's Green Book requires the financial case in any Five Case Model business case to cover whole-life costs, not just capital expenditure — yet the National Audit Office has repeatedly found departments approving IT investments against an incomplete or optimistic running-cost forecast, only to discover the true operating cost once the system is live and the capital budget line has closed. The Government Digital Service and Central Digital and Data Office's Technology Code of Practice (<https://www.gov.uk/guidance/the-technology-code-of-practice>) pushes departments toward cloud and commodity hosting partly because it makes the ongoing cost visible and comparable, rather than buried inside a single capital procurement figure that looks attractively low at approval and expensively wrong three years later.

## The maths

```
TCO = Acquisition cost + Σ(t=1..N) Annual operating cost_t / (1+r)^t
      − residual value (discounted)

r = HM Treasury Green Book standard social discount rate, 3.5%/year
    (declining rate schedule for horizons beyond 30 years)

Operating cost components: hosting/licensing, support and maintenance,
security patching and compliance, staff time, planned refresh/migration
```

See [social discount rate](../social-discount-rate/) for why the discount factor matters over a typical 5–10 year system lifetime, and [build vs buy in government](../build-vs-buy-in-government/) for how TCO feeds a build/buy decision.

## Worked example

A department compares two case-management systems on a 5-year horizon at the Green Book's 3.5% discount rate.

```
System A: capex £3,500,000, opex £250,000/year
System B: capex £1,800,000 (looks cheaper), opex £650,000/year
          (heavier vendor support and integration burden)

Naive comparison on capex alone: B wins, £1.8M < £3.5M.

Discount factor sum, 5 years at 3.5%: 0.966+0.934+0.902+0.871+0.842 ≈ 4.515

TCO_A = 3,500,000 + 250,000 × 4.515 = 3,500,000 + 1,128,750 = £4,628,750
TCO_B = 1,800,000 + 650,000 × 4.515 = 1,800,000 + 2,934,750 = £4,734,750
```

TCO flips the naive decision: System B is marginally more expensive over five years once operating cost is discounted and summed, because its opex share of lifetime cost is 62% (2,934,750 / 4,734,750) against System A's 24% — a concrete instance of the "maintenance is the majority of the bill" finding, hidden entirely by comparing sticker prices.

## Software engineering connection

TCO is the number that should discipline every [build vs buy](../build-vs-buy-in-government/) decision and every [technical debt](../technical-debt-as-public-value-erosion/) paydown case, because debt interest and deferred maintenance are both operating-cost lines that belong in the same discounted total, whether or not anyone has been tracking them. Engineers proposing a platform or vendor choice should present the full TCO table, not the procurement price, because the procurement price is precisely the number the Green Book's financial case was designed to stop departments relying on alone. TCO is also the honest denominator for [value for money](../value-for-money/) judgements — VFM compares benefit to cost, and an undercounted cost line inflates every VFM ratio in the business case.

## Pitfalls

- **Capex-only comparison**: the single most common procurement error — comparing supplier list prices without a matched operating-cost forecast for each option.
- **Excluding exit and migration costs**: contract-end data extraction, re-platforming, and vendor lock-in penalties are real TCO lines that rarely appear in the original business case.
- **Excluding security and compliance cost**: patching cadence, accreditation renewal, and audit cost scale with system age and complexity — see [public-sector cybersecurity value](../public-sector-cybersecurity-value/) — and are routinely left out of the opex forecast.
- **Undiscounted comparison across options with different cost profiles**: comparing a capex-heavy option to an opex-heavy one without discounting systematically favours whichever option happens to defer more cost into later years.

## Sources

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
