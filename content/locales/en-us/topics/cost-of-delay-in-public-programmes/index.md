# Cost of Delay in Public Programs (CoD)

Cost of Delay is the public value lost per unit time that a program, service, or system change is *not* yet delivered. It is the master bridge metric of this chapter: it converts "the go-live slipped six months" into pounds per week, or into WELLBYs per week, so that delay can be argued about in the same currency as the business case itself.

## Why it matters

Reinertsen's rule — "if you only quantify one thing, quantify the Cost of Delay" — travels into government almost unchanged, because public programs are unusually exposed to it: business cases are approved against a forecast benefit stream, but the stream only starts flowing at go-live, and every week of slippage is a week of forgone value that nobody prices on the risk register. The National Audit Office's repeated scrutiny of Universal Credit's rollout (see its "Rolling Out Universal Credit" reports, <https://www.nao.org.uk/>) illustrates the pattern: schedule slippage was tracked and reported, but the pounds-per-week cost of *not yet* delivering the reformed system to the next tranche of claimants was rarely stated as a headline figure, even though it is the number that should have driven prioritization and escalation. Without a CoD figure, a delayed program looks like a schedule problem for the delivery board; with one, it is a value-erosion problem for the accounting officer.

## The math

```
CoD = benefit per unit time forgone while undelivered   (£/week or WELLBYs/week)

Total delay loss = CoD × delay duration

Benefit streams to sum for public programs:
  cash-releasing savings   (fraud/error reduction, avoided temporary costs)
+ non-cash capacity freed  (caseworker/officer hours × loaded cost)
+ wellbeing benefit        (WELLBYs × £13,000/WELLBY, HMT Green Book
                             wellbeing supplementary guidance, 2019 prices)
```

For citizen-facing services, denominate in wellbeing as well as money — see [wellbeing-adjusted life years](../wellbeing-adjusted-life-years/) for the underlying unit, and [opportunity cost in public spending](../opportunity-cost-in-public-spending/) for what the delayed pound could otherwise have funded.

## Worked example

**Local authority**: a housing-benefit system upgrade cuts overpayment error by £150/claim/year across 20,000 live claims.

```
Annual benefit = 150 × 20,000 = £3,000,000/year
CoD = 3,000,000 / 52 ≈ £57,700/week
A 12-month implementation delay costs 52 × 57,700 ≈ £3,000,000 in avoidable error.
```

**Central government agency**: a disability-benefit assessment service, delivered six months (26 weeks) later than planned, means 200,000 claimants/year wait an average three weeks longer for a decision. Each extra week of financial uncertainty is modeled as a −0.0018 WELLBY (life-satisfaction point) effect:

```
WELLBY loss per claimant = 3 × 0.0018 = 0.0054
Annual WELLBY loss = 200,000 × 0.0054 = 1,080 WELLBYs/year
CoD_wellbeing = 1,080 / 52 ≈ 20.8 WELLBYs/week
CoD_money = 20.8 × £13,000 ≈ £270,000/week of wellbeing value
```

A 26-week delay therefore "costs" roughly 540 WELLBYs — worth about £7 million at the Green Book's wellbeing valuation — reframing a missed go-live date as a citizen-welfare event, not a project-management footnote.

## Software engineering connection

CoD is what makes [DORA metrics](../dora-metrics-for-public-value/) and [flow metrics](../flow-metrics-in-government-delivery/) financially legible: lead time in the pipeline × CoD is money (or wellbeing) burned in queues before it ever reaches a citizen. Concretely:

- **Prioritization**: rank a backlog by CoD ÷ duration rather than by stakeholder seniority — the software engineering analog of the Green Book's requirement to appraise options on value, not on who is asking.
- **Procurement**: a 12–18 month framework procurement cycle has a CoD; pricing it changes the urgency case for accelerated routes, and feeds directly into [build vs buy](../build-vs-buy-in-government/) decisions where time-to-value is a decision driver.
- **Benefits case**: every CoD figure quoted at approval should reappear at [benefits realization](../benefits-realization/) — if the delay cost was real, the accelerated benefit should be measurable after go-live.

## Pitfalls

- **Assuming linear CoD**: some public services have deadline-shaped value (a statutory compliance date — CoD jumps to enforcement-risk levels after the date, near zero before) rather than a smooth weekly rate. Classify the urgency profile before multiplying.
- **CoD on outputs nobody needs**: delay only has a cost if the undelivered thing has value; a system nobody will use has zero CoD regardless of how late it is.
- **Double-counting delay and discounting**: the [social discount rate](../social-discount-rate/) already prices time on multi-year appraisal horizons; CoD is the within-horizon, operational version for weeks and months. Use CoD for schedule slippage, NPV shift for multi-year re-phasing.

## Sources

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
