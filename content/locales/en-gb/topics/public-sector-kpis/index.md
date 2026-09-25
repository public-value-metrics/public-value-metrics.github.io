# Public Sector KPIs

A key performance indicator (KPI) is a chosen, tracked measure that stands in for whether a public
service is doing its job well. In government the choice of KPI is never neutral: because KPIs
attach to budgets, league tables, and careers, the act of selecting one shapes the behaviour of
everyone downstream of it, often more than the policy that created the service.

## Why it matters

Charles Goodhart's 1975 observation on monetary policy — later popularised by Marilyn Strathern as
"when a measure becomes a target, it ceases to be a good measure" — is the single most important
warning label in public-sector performance management. A KPI chosen to *describe* a system starts
to *distort* that system the moment resourcing, pay, or political survival is tied to it. The
canonical illustration is NHS ambulance response times: when the eight-minute Category A response
target became binding, some trusts were shown to have "stacked" ambulances just outside the
response-time clock, or reclassified calls, to hit the number without changing patient outcomes.
The UK National Audit Office's guidance on choosing and using performance indicators — set out
across its value-for-money reports and its "Performance Measurement by Regulators" and "Choosing
the Right FABRIC" framework (Fit for purpose, Appropriate, Balanced, Robust, Integrated,
Cost-effective) — exists precisely because departments kept picking indicators that were easy to
report rather than indicators that were hard to game. A software engineer who ships the dashboard
that a minister or director will be judged against is, whether they intend it or not, designing the
incentive structure of a public institution.

## The maths

KPI design is a framework-shaped topic, but the *evaluation* of a candidate KPI is a repeatable
checklist, not a formula:

```
For each candidate KPI, score against:
  Fit for purpose  — does it measure the outcome, or a proxy several steps removed?
  Appropriate      — does it belong to the people who can actually influence it?
  Balanced         — is it paired with a counter-metric that catches gaming?
  Robust           — can it survive audit, or is it self-reported and unverifiable?
  Integrated       — does it fit the wider set, or push against another KPI?
  Cost-effective   — does collecting it cost more than the decision it informs?

Leading vs lagging split:
  Leading indicator  → predicts future outcome, but often gameable (e.g. calls answered <60s)
  Lagging indicator  → confirms the outcome happened, but arrives too late to steer (e.g. annual
                        satisfaction survey)
  A defensible KPI set pairs at least one of each per objective.
```

## Worked example

**Ambulance trust**: a trust reports a Category A (life-threatening) response-time KPI of "75% of
calls responded to within 8 minutes." In one quarter, 6,000 Category A calls come in; 4,500 are met
within 8 minutes, giving 75.0% — apparently on target.

```
Headline KPI = 4,500 / 6,000 × 100 = 75.0%  (meets the 75% threshold)
```

But a Goodhart audit adds a counter-metric: mean response time for the slowest 10% of calls.

```
Slowest decile mean response = 34 minutes (up from 19 minutes two years earlier)
```

The trust is hitting the target while the tail — the calls most likely to be genuinely
life-threatening once triage is imperfect — has got much worse, because crews are being
prioritised toward calls close to the 8-minute cliff-edge rather than toward clinical urgency. The
single KPI told a false story; the paired KPI told the true one.

## Software engineering connection

Engineers building performance dashboards for government are, functionally, designing the incentive
API of the organisation. Practical implications: instrument the *denominator* as rigorously as the
numerator (a KPI reported as a bare percentage invites denominator gaming — see
[cost-per-transaction](../cost-per-transaction/) for the same trap in digital services); build
counter-metrics into the same dashboard rather than a separate report nobody reads, so gaming is
visible at the point of decision; and version the KPI definition, because a silent redefinition
(changing what counts as a "call," a "case," or a "completion") is functionally equivalent to
changing the target without announcing it. A [public value scorecard](../public-value-scorecard/)
is one structured way to stop a single KPI from being read in isolation, and
[outcomes-based accountability](../outcomes-based-accountability/) is the discipline of choosing
population-level KPIs that a single team cannot unilaterally distort.

## Pitfalls

- **Picking the easy-to-collect metric over the meaningful one**: call-answer time is trivial to
  log; whether the call solved the citizen's problem is not — but only the second one is the
  outcome. Resist defaulting to what the system already emits.
- **No counter-metric**: any KPI attached to money or reputation will be gamed at the margin;
  ship it with a paired metric that catches the likely gaming vector before publishing it.
- **Redefining the metric without a changelog**: swapping "calls received" for "calls answered" to
  flatter a trend destroys the time series' credibility the moment it's discovered — always
  publish a definitions changelog alongside the numbers.
- **Confusing activity with result**: counting inspections completed is an output; counting
  premises brought into compliance is closer to the outcome (see
  [outcomes vs outputs](../outcomes-vs-outputs/)).

## Sources

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
