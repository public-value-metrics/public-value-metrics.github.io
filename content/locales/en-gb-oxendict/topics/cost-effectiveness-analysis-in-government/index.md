# Cost-Effectiveness Analysis in Government

Cost-effectiveness analysis (CEA) compares the costs of alternative ways of achieving the *same*
outcome, expressed in natural units — cost per rough sleeper housed, cost per pupil brought up to
the expected standard, cost per tonne of CO2 abated — without converting the outcome itself into
money.

## Why it matters

The Green Book treats CEA as the fallback method when [social cost-benefit analysis](../social-cost-benefit-analysis/)'s
requirement to monetize every benefit becomes not just difficult but dishonest — where putting a
credible price on the outcome would require assumptions nobody actually holds
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Chapter 5, on options appraisal where outcomes are not readily monetisable). CEA is the method
borrowed most directly from health economics — it is structurally identical to how NICE compares
treatments using cost per Quality-Adjusted Life Year — but applied to non-health public programmes:
education interventions per pupil-outcome-point, housing programmes per household prevented from
homelessness, employment programmes per sustained job outcome.

The reason CEA earns its place alongside SCBA rather than being subsumed by it is that forcing a
monetary value onto some outcomes produces a number precise enough to look authoritative and
contested enough to be worthless in a public debate — putting a price on "a child reading at the
expected standard" invites exactly the kind of challenge that derails a business case at select
committee. CEA sidesteps the argument by refusing to have it: it ranks options on cost per unit of
the *outcome itself*, leaving the separate political judgement of whether the outcome is worth
pursuing at all to the strategic case.

## The maths

```
Cost-effectiveness ratio (average) = Total cost / Total outcome units achieved

Incremental cost-effectiveness ratio (ICER), comparing option A to option B:
ICER = (Cost_A − Cost_B) / (Outcome_A − Outcome_B)

Procedure:
1. Fix the outcome unit and measurement method across all options being compared.
2. Cost every option on the same basis (see ../green-book-appraisal/, financial case)
   over the same time horizon.
3. Discard dominated options: any option costing more per unit than a cheaper
   alternative achieving the same or better outcome is dropped.
4. Rank remaining options by incremental, not average, cost-effectiveness ratio.
```

CEA cannot, by itself, say whether a programme is worth funding at all — only which of several
approaches to the same goal is cheapest per unit. Deciding whether the goal itself is worth the
spend requires either converting back to SCBA (if a credible valuation exists) or a political/
strategic judgement outside the maths. Where outcomes genuinely cannot be reduced to one unit —
because a programme produces several outcomes that matter in different ways — use
[multi-criteria decision analysis](../multi-criteria-decision-analysis/) instead.

## Worked example

**Local authority**: a council compares three approaches to reducing rough sleeping, each costed
over one year against the outcome "individuals moved into settled accommodation for 6+ months":

```
Option                          Cost       Outcomes achieved   Avg CER
Housing First (intensive)       £900,000   60                  £15,000/outcome
Hostel + move-on support        £600,000   50                  £12,000/outcome
Outreach + private rented sector £350,000  20                  £17,500/outcome

ICER, Hostel vs Outreach:  (600k−350k)/(50−20) = £8,333 per additional outcome
ICER, Housing First vs Hostel: (900k−600k)/(60−50) = £30,000 per additional outcome
```

Outreach is dominated on average cost by Hostel, but the *incremental* step from Outreach to
Hostel costs only £8,333 per additional person housed — cheap relative to the Housing First step,
which costs £30,000 for each additional person beyond what Hostel achieves. A budget-constrained
authority scaling up should prefer expanding Hostel before Housing First, even though Housing
First looks better on its own average ratio.

**National government**: a literacy catch-up programme is compared across three delivery models on
"cost per pupil reaching age-expected reading standard": one-to-one tutoring (£1,800/pupil),
small-group tutoring (£700/pupil), and digital-only intervention (£150/pupil, but only 40% of the
outcome rate of small-group tutoring per pupil enrolled once adjusted for engagement drop-off).
Once adjusted for actual completion, digital-only costs £375 per pupil reaching standard — still
the cheapest, but the CEA cannot say whether the smaller absolute number of pupils helped by
digital-only, if delivered at the same budget as small-group, is an acceptable trade against
reaching fewer pupils at greater depth; that is a distributional judgement CEA hands back to
decision-makers.

## Software engineering connection

CEA is the right frame whenever engineering teams evaluate delivery approaches for the *same*
service outcome — cost per successfully verified identity across three identity-verification
vendors, cost per case correctly triaged across two casework automation designs, cost per
accessibility defect resolved across in-house versus contracted remediation. The discipline it
imports directly: define the outcome unit before comparing costs (not "tickets closed" — an
output — but "user need actually resolved"), and always compute the incremental ratio between the
live system and a proposed replacement, not each system's average cost in isolation. See
[outcomes vs outputs](../outcomes-vs-outputs/) and [cost per outcome](../cost-per-outcome/).

## Pitfalls

- **Comparing average, not incremental, ratios when deciding on an expansion.** As the rough
  sleeping example shows, the option with the best average ratio is not always the cheapest next
  unit of outcome to buy.
- **Choosing an outcome unit that is really an output.** "Referrals made" or "sessions delivered"
  measure activity, not the outcome the programme exists to produce; CEA on outputs produces a
  confident-looking number that answers the wrong question.
- **Comparing across genuinely different outcomes.** CEA is only valid when every option targets
  the same outcome measured the same way; comparing "cost per rough sleeper housed" against "cost
  per care leaver in stable tenancy" needs a generic outcome measure or
  [multi-criteria decision analysis](../multi-criteria-decision-analysis/), not CEA.
- **Ignoring outcome durability.** A cheaper option that produces outcomes that don't persist (a
  pupil who regresses after the intervention ends) is not actually more cost-effective once
  measured over a comparable horizon; match the follow-up period across options being compared.

## Sources

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
