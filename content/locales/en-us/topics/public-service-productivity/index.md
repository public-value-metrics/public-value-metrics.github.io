# Public Service Productivity

Public service productivity measures how efficiently public spending converts inputs (staff,
capital, goods and services) into quality-adjusted outputs, for services — health, education,
policing, social care — that have no market price and therefore no revenue figure to divide costs
into. The UK Office for National Statistics has published this series since the mid-2000s and it
remains the most methodologically developed national attempt to answer "is government getting
better or worse at converting money into public services?"

## Why it matters

In a market, productivity is (output value) / (input cost), and output value is observable because
someone pays for it. A hip replacement, a school place, and a police patrol have no sale price, so
naively you can only measure *inputs* (what was spent) — which tempts commentators into treating
rising public spending as automatically bad, since more input with flat headline activity looks
like falling productivity. The ONS methodology, set out in its "Sources and Methods" publications
for public service productivity, solves this by constructing an *output* index from activity
volumes (operations performed, pupils taught, crimes investigated) and then *quality-adjusting*
that output index — for health, incorporating survival rates and waiting times; for education,
incorporating attainment; for policing, incorporating outcomes like case resolution — so that a
service which does the same number of operations but achieves better survival rates registers as
more productive, not merely as more expensive. The headline finding that recurs across ONS releases
is sobering for the sector: UK public service productivity fell sharply during the COVID-19
pandemic and by the ONS's own mid-2020s releases had still not recovered to 2019 levels in several
sub-sectors including healthcare, even as spending rose — a gap that reframes "more funding" and
"more productivity" as two entirely separate questions.

## The math

```
Output index (volume) = Σ (activity_i × relative unit cost weight_i), base-year weighted
                          across all service activities (e.g. hip ops, cataract ops,
                          GP consultations), analogous to a Laspeyres/Paasche volume index

Quality adjustment    = output index × quality adjustment factor
                          (e.g. incorporating a change in survival rates, waiting times,
                          attainment, or reoffending as a multiplier on raw volume)

Input index           = Σ (labor hours × labor cost weight) + (goods/services cost,
                          deflated) + (capital consumption)

Total factor productivity growth = % change in quality-adjusted output index
                                    − % change in input index
```

## Worked example

**Illustrative NHS acute-sector productivity calculation** (structure follows ONS methodology):

```
Year 1: output volume index = 100.0 (base year), input index = 100.0
        → productivity index = 100.0

Year 2: activity volume rises 3.0% (more operations, more appointments)
        but average waiting time worsens, applying a quality-adjustment
        discount of −1.0%
        Quality-adjusted output index = 100 × 1.030 × 0.990 = 101.97

        Inputs rise: staff numbers +4.0%, other costs (deflated) +1.5%,
        weighted input index = 100 × 1.032 = 103.2

Productivity growth = (101.97 / 100 − 1) − (103.2 / 100 − 1)
                     = 1.97% − 3.2% = −1.23 percentage points

Interpretation: activity rose, but inputs rose faster and quality fell
slightly, so productivity — output per unit of input — declined even
though "more care was delivered."
```

This is the exact pattern ONS releases have repeatedly reported for parts of the NHS
post-pandemic: rising spend and rising raw activity coexisting with falling measured productivity
once quality adjustment and input growth are both accounted for.

## Software engineering connection

Public service productivity is the population-level analog of engineering productivity debates
(story points shipped versus [DORA metrics](../dora-metrics-for-public-value/) versus
[flow metrics](../flow-metrics-in-government-delivery/)): raw throughput without a quality
adjustment is exactly as misleading in a hospital as "lines of code shipped" is on a software team.
Teams building performance data pipelines for departments should treat quality adjustment as a
first-class, versioned transformation stage, not a footnote — because the ONS's own credibility
rests on that adjustment being transparent, reproducible, and revised as better quality data
arrives (ONS revises past years' productivity estimates as underlying quality data — e.g. survival
rates — is finalized, so any downstream system consuming these statistics must handle backdated
revisions, not just append new periods). It also intersects directly with
[total cost of ownership](../total-cost-of-ownership-in-government-it/) and
[AI productivity in the public sector](../ai-productivity-in-the-public-sector/): a system that
increases raw activity volume without improving or maintaining quality is not, on the ONS's own
definition, a productivity improvement.

## Pitfalls

- **Treating input growth as productivity growth**: more spending funding more staff produces more
  *activity*, not more *productivity*, unless output per unit of input also rises — the two are
  routinely conflated in political commentary.
- **Ignoring quality adjustment entirely**: an output index built only from raw activity counts
  will show "productivity gains" from doing more of something lower-value or lower-quality; ONS's
  quality adjustment exists specifically to catch this.
- **Comparing productivity indices across sub-sectors without matching methodology vintage**:
  health, education, and policing productivity are each built from different activity and quality
  data sources on different revision cycles — a naive cross-sector comparison compares
  incompatible instruments.
- **Reading a single year's productivity fall as a permanent trend**: pandemic-era and
  post-pandemic productivity figures have shown significant year-on-year volatility as quality data
  (e.g. waiting lists, elective recovery) itself shifted; ONS consistently cautions against
  over-interpreting single-year moves.

## Sources

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
