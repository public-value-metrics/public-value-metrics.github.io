# Outcomes-Based Accountability (OBA)

Outcomes-Based Accountability, also called Results-Based Accountability (RBA), is Mark Friedman's
framework for separating two questions that public-sector reporting habitually blurs together: "is
the population doing well?" (population accountability) and "is this specific programme doing
well?" (performance accountability). Conflating the two is, in Friedman's telling, the single most
common reason well-run programmes get blamed for population trends they never had the power to
move.

## Why it matters

Friedman set the framework out in *Trying Hard Is Not Good Enough* (2005), arguing that most
public reporting either drowns decision-makers in population-level statistics no single agency
controls (teen pregnancy rate, unemployment rate, life expectancy) or drowns them in
programme-level activity counts (clients seen, referrals made) that say nothing about whether
anyone's life improved. RBA's contribution is a small, disciplined vocabulary that keeps the two
apart: population results (conditions of wellbeing for a whole population, like "children are born
healthy") belong to no single agency and require many partners moving together; performance
measures (how well a specific programme serves its specific clients) belong to one agency and
should be judged only against what that agency can actually influence. Friedman's "three
performance questions" — how much did we do, how well did we do it, and is anyone better off? — is
now embedded across US state and county human-services contracting and, via the RBA-aligned
consultancy and toolkit Clear Impact, widely used in UK and Commonwealth local-government
commissioning. The practical stakes are contractual: a housing programme should not be defunded
because the city's homelessness rate rose from macroeconomic causes outside its reach, but it
absolutely should be defunded if its own clients aren't being housed.

## The maths

```
Population accountability (the "big picture" a community, region, or nation shares):
  Result       — a condition of wellbeing (e.g. "residents are economically secure")
  Indicator(s) — a measure of that condition (e.g. unemployment rate, median household income)
  → no single programme owns the indicator; movement requires many contributors

Performance accountability (what one programme is responsible for):
  How much did we do?      — activity volume (clients served, units delivered)
  How well did we do it?   — quality/efficiency (% completing programme, cost per client)
  Is anyone better off?    — the outcome that matters (% in employment 6 months after
                              programme, before/after or against a comparison group)

A programme is judged on the third performance question, never on the population
indicator directly, unless its scale and design could plausibly move it alone.
```

## Worked example

**City-funded employment support programme**, 500 participants/year, contracted by a local
authority under an RBA-style performance framework:

```
Population indicator (context, not the programme's scorecard):
  City unemployment rate: 6.2% (up from 5.8% the prior year, driven by a factory closure
  outside the programme's control)

Performance measures (the programme's actual accountability):
  How much:   500 participants enrolled (target 480) — met
  How well:   78% completion rate; cost per completer = £340,000 / 390 completers ≈ £872
  Better off: of 390 completers, 260 in sustained employment at 6 months = 66.7%
              versus a matched comparison group's 41% (see counterfactual-analysis)
```

Under a population-accountability read, the programme looks like it is failing — the city's
unemployment rate went up on its watch. Under RBA's performance-accountability read, the programme
is succeeding: it hit its volume target, held quality steady, and produced an employment outcome
25.7 percentage points above a matched comparison group, while the population indicator moved for
reasons (a factory closure) entirely outside the programme's control.

## Software engineering connection

RBA maps directly onto a familiar SRE distinction: population indicators are like business-level
North Star metrics that no single engineering team owns end to end (company revenue, market share),
while performance measures are like a team's own SLOs — the things that team's design decisions
actually move. A dashboard that reports both without labelling which is which invites exactly the
misattribution RBA was built to prevent: an on-call engineer getting blamed for a metric a
dependency team controls. When commissioning or building reporting tools for outcomes contracts,
build the "how much / how well / better off" triad as first-class, separately-filterable fields
rather than a single blended KPI — it is the same discipline as separating leading and lagging
indicators in [public sector KPIs](../public-sector-kpis/). RBA is also the accountability logic
underneath [payment by results and social impact bonds](../payment-by-results-and-social-impact-bonds/):
a PbR contract can only fairly pay on the "better off" performance measure, never on the population
indicator, unless the intervention is genuinely the dominant driver of it.

## Pitfalls

- **Paying or penalizing a programme against a population indicator it cannot control**: this is
  the single mistake RBA exists to prevent; always trace whether the programme is a major or minor
  contributor to the population result before attaching consequences to it.
- **Reporting "how much" as if it were "better off"**: activity counts (clients seen) are the
  easiest data to collect and the least informative; insist the "is anyone better off" question is
  answered with real outcome data, ideally against a counterfactual (see
  [counterfactual-analysis](../counterfactual-analysis/)).
- **Treating RBA indicators as fixed forever**: Friedman's method is explicitly iterative — a
  "data, story, what works, action plan" cycle — not a one-off scorecard design exercise.
- **No comparison group for "better off"**: a before/after change with no counterfactual conflates
  programme effect with the trend the population would have shown anyway.

## Sources

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
