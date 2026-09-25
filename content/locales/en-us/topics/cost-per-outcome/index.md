# Cost per Outcome

Cost per outcome is total program spend divided by the number of people who achieve a defined,
meaningful change in their circumstances — not the number who merely received a service. It is
the sharpest efficiency metric a funder or delivery team can use, because it forces a prior
question that most charities avoid: what, precisely, counts as success?

## Why it matters

A food bank can report two very different numbers from the same year's accounts. Cost per food
parcel distributed might be £15. Cost per household that goes on to achieve food security — no
longer needing emergency food aid, verified at a follow-up point — might be £340. Both are true.
Only one tells a funder whether the money is working. The gap between them is the gap between an
output and an outcome: a parcel handed over is an output; a household no longer in crisis is an
outcome. See [outcomes vs outputs](../outcomes-vs-outputs/).

The UK third sector has spent two decades building infrastructure to force this distinction.
New Philanthropy Capital's "four pillar approach" to charity effectiveness explicitly asks
organizations to state their outcomes before their outputs, and Inspiring Impact — the UK
funder-backed impact measurement collaborative — publishes an Outcomes Matrix that many grant
applications now require charities to complete. The Trussell Trust's annual "State of Hunger"
research program, run with Heriot-Watt University, exists precisely because parcel counts alone
say nothing about whether people escape food insecurity.

Cost per outcome only means something once you have fixed the counterfactual: an outcome achieved
"anyway" is not an outcome the program bought. See [counterfactual analysis](../counterfactual-analysis/)
and [displacement and attribution](../displacement-and-attribution/).

## The math

```
Cost per outcome = Total program cost / Number of beneficiaries achieving the defined outcome

where:
  Total program cost   = direct delivery cost + fair share of overhead
  Defined outcome        = a pre-specified, measurable state change
                            (e.g. "food secure at 6-month follow-up",
                            not "received a food parcel")
```

Compare against [unit cost databases](../unit-cost-databases/) (e.g. sector-specific unit cost
benchmarks) to judge whether a given cost per outcome is good, average, or poor relative to
comparable interventions.

## Worked example

**Food bank, one year**:

- Total program cost: £450,000
- Parcels distributed: 30,000
- Cost per parcel (an output metric): £450,000 / 30,000 = **£15**

The charity also runs a six-month follow-up survey with a sample of households, finding that 35%
of households who received three or more parcels report no longer needing emergency food aid and
score above the food-security threshold on a standard food-security survey module. Of 1,800
households receiving three-plus parcels that year, 630 achieve that outcome.

```
Cost per outcome = £450,000 / 630 = £714 per household achieving food security
```

That £714 figure is the one a funder comparing this charity to a cash-transfer pilot or a
debt-advice service should use — not £15. If a comparable cash-transfer program in the same
region achieves food security at £500 per household, the food bank is not obviously the more
efficient route to the same outcome, even though its per-parcel cost looks cheap.

## Software engineering connection

Most case-management systems are built to log outputs, because outputs are what happens inside
the transaction (a parcel is handed over, a form is submitted). Outcomes usually happen later,
often outside the system's normal capture window, and require a deliberate design decision: build
a follow-up mechanism (a survey trigger, a re-contact workflow, a data-linkage exercise) as a
first-class feature, not an afterthought bolted on for an annual report. Engineers building grant
management or case management platforms for the sector should treat "what is the outcome event,
and how do we observe it" as a requirements question asked before the data model is fixed — it is
far harder to retrofit an outcome field than an output counter. See [outcomes vs outputs](../outcomes-vs-outputs/)
and [logic model](../logic-model/) for how to structure that requirements conversation, and
[cost per beneficiary](../cost-per-beneficiary/) for the faster, cruder metric teams reach for when
outcome tracking is not yet built.

## Pitfalls

- **Reporting outputs dressed as outcomes.** "People reached" is not "people helped." If the metric
  can be produced by a system log with no follow-up contact, it is almost certainly an output.
- **Denominator gaming.** Narrowing the outcome population to "those who completed the program"
  quietly drops the people who dropped out — often the hardest cases — and inflates the apparent
  rate. State the denominator as everyone who started, not everyone who finished.
- **No counterfactual.** Counting anyone who achieved the outcome, including those who would have
  anyway, overstates what the program bought. See [counterfactual analysis](../counterfactual-analysis/).
- **Comparing across incompatible outcome definitions.** "Food secure" measured by a validated
  survey module is not comparable to "food secure" self-reported in a satisfaction form; a
  cost-per-outcome league table is only honest when the outcome definitions match.

## Sources

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research program. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
