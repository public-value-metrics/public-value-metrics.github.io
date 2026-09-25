# Benefits Realization

Benefits realization management is the discipline of identifying, baselining, tracking, and *evidencing* that the benefits promised in a business case actually materialized after go-live. In UK public investment it lives inside HM Treasury's Green Book Five Case Model and the Infrastructure and Projects Authority's dedicated benefits management guidance; without it, "the system saved caseworkers thirty minutes a claim" remains an unaudited assertion forever.

## Why it matters

Business cases are promises; benefits realization is the audit. The Green Book requires every spending case to pass five tests — strategic, economic, commercial, financial, and management — and the management case must set out how benefits will be realized *before approval*: owners named, baselines captured, and measurement dates fixed. The Infrastructure and Projects Authority's guide, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects* (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>), exists because the IPA's own portfolio reporting on the Government Major Projects Portfolio has repeatedly found delivery confidence and benefits realization cited as recurring weaknesses across major programs. A project can close "on time and on budget" against its delivery milestones while still failing to realize the benefits that justified spending the money in the first place — a distinction the IPA's guidance treats as the entire point of the discipline.

## The math

```
Realization rate = benefits realized / benefits forecast   (per benefit, per period)

Mechanics that make it computable:
  baseline captured BEFORE go-live (else the delta is unmeasurable)
  each benefit: named owner, metric, data source, measurement schedule
  forecast adjusted for optimism bias at appraisal (Green Book mandate)
  benefits classed cash-releasing / capacity-freed / qualitative,
  tracked and reported separately
```

## Worked example

**Local authority**: a digital planning-application portal business case promised, per year: £300,000 in printing and postage overhead reduction (cash), 4,500 officer hours freed (capacity), and improved applicant satisfaction (qualitative). Twelve months post go-live:

```
Benefit           Forecast   Realized   Rate   Evidence
Cash savings      £300,000   £210,000   70%    finance ledger vs baseline year
Officer hours     4,500      3,200      71%    time-motion sample
Satisfaction      +8pp       +11pp      138%   applicant survey data

Actions from the review (the point of benefits realization):
cash shortfall traced to two service areas still processing paper
applications by exception → close the exception route;
next business case's optimism-bias correction raised from 10% to 25%
based on this case's forecasting error.
```

A 70% realization rate is not a failure — it is knowledge that lets the next forecast be better calibrated. An unmeasured case would have claimed 100% forever, and the finance team would have had no basis to challenge it.

## Software engineering connection

Engineering organizations routinely approve platform and tooling investments on forecast benefit and almost never audit them afterwards — exactly the pathology benefits realization management exists to fix. The lightweight port: every proposal above a materiality threshold names a benefit owner, a baseline metric, and a fixed review date (typically six months post go-live), and realization rates from past proposals should discount how much the organization trusts a team's or vendor's next forecast. This closes the loop back to [Green Book appraisal](../green-book-appraisal/), which sets the forecast this discipline audits, and it is the same logic behind the widely reported finding that a large majority of generative-AI pilots show no measurable return — see [AI productivity in the public sector](../ai-productivity-in-the-public-sector/) — because the pilots that *did* return value were, almost without exception, the ones with a named, trackable benefit line from the start. It also depends on distinguishing what was actually delivered from what was actually realized — see [outcomes vs outputs](../outcomes-vs-outputs/).

## Pitfalls

- **No pre-go-live baseline**: the fatal, unfixable omission — without it, no realization rate can ever be computed, only asserted.
- **Benefit orphanhood**: a benefit with no named owner has no one collecting the data, and every portfolio review reports it as "broadly on track" by default.
- **Double-counted benefits across a program portfolio**: two projects both claiming the same freed caseworker capacity as their benefit — keep a single benefit register across the portfolio to catch this.
- **Realization theater**: measuring and reporting the easy qualitative wins prominently while the cash and capacity lines go quietly unexamined.
- **Confusing delivery with realization**: a project closing its milestones "on time and on budget" says nothing about whether the forecast benefit ever actually occurred — the IPA's guidance treats these as two separate questions with two separate evidence trails.

## Sources

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
