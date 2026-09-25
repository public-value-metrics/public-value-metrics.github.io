# Additionality and Deadweight

Additionality asks whether an intervention caused an outcome that would not otherwise have
happened. Deadweight is its mirror: the share of an outcome that would have occurred anyway, even
without the programme, grant, or subsidy. Almost every impact claim from a government programme or
charity overstates its effect until deadweight is subtracted, which is why UK evaluation guidance
treats it as the first and most important adjustment to any headline number.

## Why it matters

"We supported 500 businesses to grow" sounds like an achievement, but if 300 of those businesses
would have grown anyway — because the local economy was recovering, because they had other funding
routes, because they were already on a growth trajectory before the programme started — the
programme's true additional contribution is 200, not 500. HM Treasury's Magenta Book and the
long-standing HM Treasury/BIS "Additionality Guide" (developed originally for regional development
and regeneration programmes, and widely used across UK government evaluation since) formalize
deadweight as the starting adjustment in the standard net-impact sequence: gross effect minus
deadweight, minus displacement, minus leakage, adjusted for multiplier effects, equals net additional
impact. Skipping this step is the single most common way public and social-sector impact claims are
inflated, deliberately or not — a grant programme that only measures gross participant outcomes,
with no comparison group, cannot distinguish its own effect from what would have happened regardless.

Deadweight is not a fixed percentage; it depends entirely on the counterfactual for the specific
population and intervention (see [counterfactual analysis](../counterfactual-analysis/)). English
regional-development evaluations under the previous Regional Development Agencies commonly found
deadweight rates in the range of 20–60% depending on the type of business support, which is why
credible programme evaluations report a deadweight-adjusted range rather than a single assumed
figure, and why funders such as the National Lottery Community Fund and Big Society Capital require
grantees to address deadweight explicitly in outcomes reporting rather than reporting gross
participant counts.

## The maths

The standard net-impact adjustment sequence, as set out in UK evaluation guidance (Magenta Book;
HM Treasury/BIS Additionality Guide; ESIF and structural-funds evaluation guidance):

```
Gross outcome
  − Deadweight       (what would have happened anyway)
  − Displacement     (activity/benefit shifted from elsewhere, not created — see
                       displacement-and-attribution)
  − Leakage          (benefit accruing outside the target group/area)
  × Multiplier        (additional indirect/induced economic activity, where positive)
  = Net additional impact
```

Deadweight rate as a proportion:

```
Deadweight rate = outcomes that would have occurred without the intervention
                   / total gross outcomes observed

Net additional outcomes = Gross outcomes × (1 − Deadweight rate)
```

## Worked example

**Business-support grant programme**: a regional grant scheme reports 500 supported businesses
increased employment in the following year, an average of 3 jobs each — a gross claim of 1,500 jobs.

A matched comparison group of similar non-supported businesses (see
[counterfactual analysis](../counterfactual-analysis/)) shows that 40% of the supported businesses'
employment growth would have happened anyway, based on how the matched group performed over the same
period.

```
Deadweight rate = 40%
Net additional jobs = 1,500 × (1 − 0.40) = 900 jobs
```

The programme's honestly reportable achievement is 900 jobs, not 1,500 — a 40% reduction purely from
the deadweight adjustment, before displacement or leakage are even considered.

**Charity employment programme**: a charity places 200 long-term unemployed people into jobs at a
cost of £600,000 (£3,000 per placement, gross). National labour-market data shows that, absent any
intervention, roughly 15% of a comparable long-term unemployed cohort finds work within the same
period through natural job-market churn.

```
Deadweight rate = 15%
Net additional placements = 200 × (1 − 0.15) = 170
True cost per additional placement = £600,000 / 170 ≈ £3,529
```

The gross cost-per-placement figure (£3,000) understates the real cost of the charity's additional
contribution by roughly 15%.

## Software engineering connection

Additionality and deadweight matter directly for anyone building impact-measurement or grants-
management software for the public or social sector:

- Outcomes-reporting systems should capture a comparison or baseline group by design, not just
  participant outcomes — retrofitting a counterfactual after a system launches without one is far
  harder than building the capture in from the start (see
  [counterfactual analysis](../counterfactual-analysis/)).
- Dashboards that report only gross participant counts will systematically overstate impact to
  funders and oversight bodies; where deadweight estimates exist (from evaluation literature or a
  comparison group), the software should surface the net-of-deadweight figure alongside the gross
  one, not instead of it.
- This connects directly to [social return on investment](../social-return-on-investment/), whose
  SROI ratio is only credible once deadweight (and displacement) have been subtracted from the gross
  claimed outcomes — an SROI calculator that omits this step will produce inflated ratios that do not
  survive scrutiny.

## Pitfalls

- **Reporting gross outcomes as if they were all additional.** This is the single most common impact-
  measurement error in grant and programme reporting; always ask "would this have happened anyway?"
  before publishing a headline number.
- **Assuming a single deadweight percentage applies everywhere.** Deadweight varies hugely by sector,
  population, and local economic conditions; use a comparison group or sector-specific evidence
  rather than reusing a figure from an unrelated evaluation.
- **Confusing deadweight with displacement.** Deadweight is about counterfactual outcomes for the
  same participants; displacement is about effects on other people or places — see
  [displacement and attribution](../displacement-and-attribution/). Conflating the two leads to
  double-counting or under-counting the adjustment.
- **Self-reported deadweight from participants.** Asking beneficiaries "would this have happened
  without our help?" produces systematically low deadweight estimates (participants tend to credit
  the programme); an independent comparison group is far more reliable.

## Sources

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on deadweight, displacement, and leakage in structural-funds evaluation.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
