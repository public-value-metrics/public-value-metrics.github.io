# Human Development Index (HDI)

The HDI is the UN's headline alternative to ranking countries by income alone: it combines life
expectancy, education, and income into a single number between 0 and 1, on the premise — argued by
economist Amartya Sen and developed for the UN by Mahbub ul Haq — that development is about
expanding what people can do and be, not just what they earn. It has been published annually in
the UN Development Programme's Human Development Report since 1990.

## Why it matters

Before the HDI, "development" was measured almost entirely by GNP per capita, which says nothing
about whether growth reaches ordinary people's health or education. Sen's capability approach
reframed development as the expansion of real freedoms, and ul Haq turned that into a publishable
index the UNDP could rank every country by, forcing governments that grew rich on income alone but
neglected health or schooling to confront a worse rank than their GDP suggested (the Gulf oil
states and some extractive economies are the standard examples). The HDI's three-way structure is
also the direct methodological ancestor of the
[Multidimensional Poverty Index](../multidimensional-poverty-index/): both refuse to let one
dimension buy back a shortfall in another, using a geometric rather than arithmetic mean. UNDP
publishes full technical notes and the underlying data for every edition
(<https://hdr.undp.org/data-center/human-development-index>), which is the canonical source for
anyone building on the index rather than re-deriving it.

## The maths

```
Life Expectancy Index (LEI)     = (LE − 20) / (85 − 20)

Mean Years Schooling Index      = mean years of schooling / 15
Expected Years Schooling Index  = expected years of schooling / 18
Education Index (EI)            = (Mean Years Index + Expected Years Index) / 2

Income Index (II)               = (ln(GNI per capita) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [geometric mean of the three sub-indices]
```

The geometric mean is deliberate: because it multiplies rather than averages, a very high score in
one dimension cannot fully offset a very low score in another — a design UNDP adopted in 2010
specifically to penalize imbalance, replacing the previous arithmetic-mean formula.

## Worked example

**Middle-income country**: life expectancy 72 years, mean years of schooling 8, expected years of
schooling 13, GNI per capita $12,000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0.800
MYSI = 8 / 15                                        = 0.533
EYSI = 13 / 18                                       = 0.722
EI = (0.533 + 0.722) / 2                             = 0.628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9.393 − 4.605) / (11.225 − 4.605)
   = 4.788 / 6.620                                   = 0.723

HDI = (0.800 × 0.628 × 0.723) ^ (1/3)
    = (0.363) ^ (1/3)                                ≈ 0.713
```

An HDI of 0.713 falls in UNDP's "high human development" band (0.700–0.799); "very high" starts at
0.800. Note how sensitive the result is to the weakest sub-index: if mean years of schooling were
4 instead of 8 (MYSI = 0.267, EI = 0.494), HDI falls to (0.800 × 0.494 × 0.723)^(1/3) ≈ 0.639 —
dropping a full band — even though nothing else changed.

## Software engineering connection

- The geometric-mean pattern is directly reusable for any composite service or product score you
  don't want one strong dimension to paper over a critical weak one — e.g. combining accessibility,
  performance, and reliability scores for a public digital service multiplicatively rather than
  by weighted average, so a service that is fast but inaccessible cannot score "good".
- HDI's log-transform of income (diminishing marginal value of an extra pound) is the same logic
  behind [distributional weighting](../distributional-weighting/) in appraisal: an extra $1,000
  means far more to a poor household than a rich one, and treating both linearly misprices impact.
- Any dashboard that reports a single blended "digital inclusion" or "citizen outcomes" score
  should document its aggregation formula as explicitly as UNDP's technical notes do — see
  [public sector KPIs](../public-sector-kpis/) and [public value scorecard](../public-value-scorecard/).

## Pitfalls

- **Averaging instead of using the geometric mean** — an arithmetic mean lets high income mask
  poor health or education entirely; the whole point of the 2010 methodology change was to stop
  that substitution.
- **Comparing HDI year-on-year as if it were inflation-adjusted GDP** — UNDP periodically rebases
  the index (new minimum/maximum bounds, revised schooling caps), so a rank change can reflect a
  methodology update, not a real shift; always check which HDR edition a figure comes from.
- **Treating HDI as a poverty measure** — it is a national average and says nothing about
  distribution within a country; for that, use the
  [Multidimensional Poverty Index](../multidimensional-poverty-index/) or the UNDP's separate
  Inequality-adjusted HDI.

## Sources

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
