# GDP alternatives

GDP alternatives are metrics built to capture what Gross Domestic Product structurally ignores:
unpaid care work, environmental depletion, income distribution, and whether growth actually
improves lives. The best-known are the Genuine Progress Indicator (GPI) and Bhutan's Gross
National Happiness (GNH) Index; the case for taking them seriously was made most influentially by
the 2009 Stiglitz-Sen-Fitoussi Commission. For engineers building government dashboards or KPI
systems, "which number counts as progress" is a design decision with real consequences for what
gets funded.

## Why it matters

Simon Kuznets, who built the US national accounts in the 1930s, warned Congress in 1934 that "the
welfare of a nation can scarcely be inferred from a measurement of national income" — a caveat the
figure outgrew almost immediately. GDP counts an oil spill's clean-up as growth and a parent's
unpaid childcare as nothing; it does not distinguish spending that builds durable wellbeing from
spending that merely offsets harm already done. The Stiglitz-Sen-Fitoussi Commission, convened by
French President Nicolas Sarkozy and chaired by Joseph Stiglitz, Amartya Sen, and Jean-Paul
Fitoussi, reported in 2009 that statistical systems should shift emphasis "from measuring economic
production to measuring people's wellbeing," and that sustainability should be tracked separately
from current wellbeing rather than folded into one number. GDP alternatives operationalize that
recommendation. The GPI, developed by the thinktank Redefining Progress in the 1990s and building
on William Nordhaus and James Tobin's 1972 Measure of Economic Welfare, starts from personal
consumption (as GDP does) and then adds non-market benefits GDP omits (household labor,
volunteering) while subtracting defensive and depletion costs (crime, pollution, commuting,
resource drawdown) GDP wrongly counts as positive. Bhutan's GNH Index, administered by the GNH
Center Bhutan (<https://www.gnhcentre.bt/>), goes further still, replacing growth as the country's
stated constitutional objective: it aggregates 33 indicators across 9 domains — psychological
wellbeing, health, education, time use, cultural diversity, governance, community vitality,
ecological diversity, and living standards — into a single sufficiency-based score used directly to
screen government policy proposals.

## The math

```
GPI = personal consumption expenditure
      + non-market benefits (household labor, volunteering, higher education)
      − defensive and social costs (crime, pollution, commuting, family breakdown)
      − depletion of natural and social capital (resource drawdown, farmland loss)

GNH sufficiency score, per domain:
  a person is "sufficient" in a domain once they clear its threshold on each indicator
  Happiness Index = (% of population sufficient in ≥ 6 of 9 domains)
                    + (weighted average shortfall of the "not-yet-happy" minority)
```

## Worked example

**Region, GPI**: personal consumption is $50bn. Add estimated household and volunteer labor
value of $12bn (replacement-cost wage rates — see [volunteer time value](../volunteer-time-value/)).
Subtract estimated annual costs of commuting congestion ($3bn), crime ($4bn), and long-run
resource depletion ($6bn):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($bn)
```

If GDP grew from $50bn to $55bn that year (+10%), but defensive and depletion costs grew faster
than consumption, GPI can fall even as GDP rises — the "threshold hypothesis" GPI researchers cite
for high-income economies since roughly the 1970s, when growth kept climbing while GPI plateaued.

**Citizen, GNH**: a respondent clears the sufficiency threshold in 7 of 9 domains (health,
education, living standards, community vitality, cultural diversity, ecological diversity, time
use) but falls short on psychological wellbeing and governance. Because 7 ≥ 6, they are counted
"happy" in the headcount; the index separately tracks the depth of their two shortfalls so a
narrow pass isn't indistinguishable from a comfortable one.

## Software engineering connection

- A KPI dashboard modeled only on throughput or spend (the GDP pattern) will systematically miss
  harm done in generating that throughput — support-ticket volume treated as "engagement" rather
  than "user distress" is the software-delivery version of counting an oil spill as growth.
- GPI-style accounting is a useful audit pattern for any [public sector KPI](../public-sector-kpis/)
  suite: for every headline output metric, ask what defensive cost it is quietly incurring
  (rework, incident response, burnout) and net it out, the way GPI nets defensive spending out of
  consumption.
- GNH's domain-sufficiency method — pass/fail per dimension, then aggregate — is structurally the
  same technique as [multi-criteria decision analysis](../multi-criteria-decision-analysis/) and
  is worth reusing wherever a single scalar score would hide a critical failing dimension.

## Pitfalls

- **Treating GPI as a precise national account** — unlike GDP, GPI has no single standardized
  methodology; different studies weight commuting costs, volunteer time, or resource depletion
  differently, so cross-study GPI comparisons are far less reliable than cross-country GDP ones.
- **Importing GNH wholesale into a different policy culture** — its domain weights and sufficiency
  thresholds were set through Bhutanese consultation; copying the number without the underlying
  consultation process produces a hollow metric nobody trusts.
- **Assuming a GDP alternative replaces cost-benefit appraisal** — these are diagnostic,
  economy-wide indicators, not decision tools for a single program; use
  [social cost-benefit analysis](../social-cost-benefit-analysis/) for that instead.

## Sources

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Center Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
