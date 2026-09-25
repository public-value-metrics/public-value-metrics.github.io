# Public Value Scorecard

The public value scorecard adapts Robert Kaplan and David Norton's 1992 balanced scorecard —
built for firms optimizing profit across financial, customer, internal-process, and
learning-and-growth perspectives — to organizations whose bottom line is a mission, not a margin.
It forces a public body to report performance across several irreducible dimensions at once,
rather than collapsing everything into one number that hides trade-offs.

## Why it matters

Kaplan and Norton's original argument, in the Harvard Business Review, was that a single financial
metric is a lagging indicator that tells you nothing about *why* performance will change next
quarter. In the private sector the fix was four linked perspectives. In government, Mark Moore's
"strategic triangle" (from *Creating Public Value*, 1995) supplies the equivalent structure:
a service must simultaneously deliver **public value** (the mission outcome), maintain
**legitimacy and support** (political and public backing), and be **operationally feasible**
(deliverable with the resources and capability actually available). Paul Niven's *Balanced
Scorecard: Step-by-Step for Government and Nonprofit Agencies* (2003) is the practitioner's manual
for translating Kaplan and Norton's four boxes into this triangle — typically re-labelling
"financial" as "stewardship of resources," putting "mission" at the top instead of "shareholder
value" at the bottom, and treating customer and stakeholder perspectives as co-equal rather than
subordinate to profit. The reason this matters to a delivery team is that a public digital service
judged only on a financial or efficiency metric (cost per transaction, say) will systematically
under-invest in the legitimacy and outcome dimensions that the financial metric cannot see.

## The math

The public value scorecard is a framework, not a formula, but its structure is fixed and worth
reproducing exactly:

```
Perspective          Public-sector question                    Example indicator
--------------------------------------------------------------------------------
Mission / outcomes    Are we achieving the public value we      Population outcome measure
                       exist to create?                         (see outcomes-vs-outputs)
Stewardship of        Are we using public money efficiently     Cost per outcome, budget
  resources            and within authorized limits?             variance
Customer / user        Are users and citizens able to access    Completion rate, satisfaction
                        and benefit from the service?
Legitimacy / support    Do political principals, oversight       Trust metrics, audit findings,
                        bodies, and the public still back us?    complaints upheld
Internal process /      Do we have the capability and process   Staff turnover, cycle time,
  learning              to keep improving?                       backlog age

A defensible scorecard reports 3–5 indicators per perspective, chosen so that
no single perspective can be gamed without the damage showing up in another.
```

## Worked example

**Local authority adult social care department**: a scorecard for a reablement service (short-term
support to help people regain independence after a hospital stay) reports:

```
Mission:       68% of service users no longer need ongoing care after 6 weeks (target 65%)
Stewardship:   cost per completed reablement episode = £1,850 (budget assumption £2,000)
Customer:      user satisfaction 82%, average wait for service start 4.1 days
Legitimacy:    3 upheld complaints per 1,000 episodes; adult safeguarding board rates
               service "good"
Process:       staff vacancy rate 14%, average caseload 23 (safe caseload ceiling: 25)
```

Read in isolation, the mission and stewardship numbers look like a straightforward success story:
under budget and above the outcome target. Read together with the process row, the vacancy rate of
14% against a caseload ceiling of 25 shows the good outcome is being bought by running close to
unsafe staffing levels — a warning the mission number alone would never surface, and exactly the
failure mode a single-perspective KPI (see [public sector KPIs](../public-sector-kpis/)) invites.

## Software engineering connection

For a team building an internal or public-facing dashboard, the scorecard is a direct argument
against a single "health score" widget: build one panel per perspective, and resist product
pressure to synthesize them into a traffic light, because the synthesis step is exactly where the
trade-off information gets destroyed. It also maps cleanly onto product-team OKR structures: a
mission OKR without a paired stewardship or process OKR reproduces the single-metric failure mode
Kaplan and Norton were writing against in 1992. See [public value](../public-value/) for Moore's
underlying theory of what the "mission" box should actually contain, and
[trust-and-legitimacy-metrics](../trust-and-legitimacy-metrics/) for how to populate the
legitimacy perspective with real, sourced indicators rather than a proxy nobody can defend.

## Pitfalls

- **Collapsing the scorecard into one score**: averaging four perspectives into a single number
  reintroduces the exact problem — a bad legitimacy score masked by a good stewardship score — that
  the scorecard exists to prevent.
- **Copying the private-sector "financial" perspective unchanged**: a public body's stewardship
  perspective is about staying within authorized, often ring-fenced, budgets, not about maximizing
  revenue — Niven's relabelling is not cosmetic.
- **Choosing indicators the team that owns the scorecard can unilaterally move**: a legitimacy
  indicator sourced from the same team it judges (self-reported complaints handling, for instance)
  is not independent evidence.
- **Building the scorecard once and never revisiting weights or indicators**: Kaplan and Norton
  intended an annual strategy review; a scorecard frozen for years drifts from the mission it was
  built to track.

## Sources

- Robert S. Kaplan and David P. Norton, "The Balanced Scorecard: Measures That Drive Performance,"
  *Harvard Business Review*, January–February 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
