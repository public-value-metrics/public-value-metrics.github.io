# Multidimensional Poverty Index (MPI)

The MPI measures poverty as overlapping deprivations a person experiences at the same time — in
health, education, and living standards — rather than as income alone falling below a line. It was
developed by the Oxford Poverty and Human Development Initiative (OPHI) with Sabina Alkire and
James Foster, and has been published jointly with UNDP in every Human Development Report since
2010, alongside the [Human Development Index](../human-development-index/).

## Why it matters

Income poverty lines miss people who have enough cash income but lack clean water, schooling, or
survive a child's death — and they miss the fact that deprivations cluster: a household without
electricity is disproportionately likely to also lack sanitation and have a malnourished child.
The Alkire-Foster method, on which the MPI is built, counts each person's deprivations across ten
indicators grouped into three equally weighted dimensions — health, education, living standards —
and only classes someone as "MPI poor" if their weighted deprivation score crosses a fixed
threshold, capturing overlap that a set of separate single-indicator statistics cannot. OPHI
publishes the full methodology and country data at
<https://ophi.org.uk/multidimensional-poverty-index/>; the global MPI it maintains jointly with
UNDP now covers over 110 countries. For software built for anti-poverty programmes — cash
transfers, social care triage, aid targeting — the MPI's indicator set is often the closest thing
to a standardised deprivation schema already validated across dozens of national statistical
offices.

## The maths

```
10 indicators, 3 dimensions, each dimension weighted 1/3:

Health (1/3):            nutrition (1/6), child mortality (1/6)
Education (1/3):         years of schooling (1/6), school attendance (1/6)
Living standards (1/3):  cooking fuel, sanitation, drinking water,
                          electricity, housing, assets (1/18 each)

deprivation score (c) = sum of weights of indicators a person is deprived in

person is "MPI poor" if c ≥ 1/3 (the poverty cut-off, k = 33%)

H (headcount ratio) = number of MPI poor / total population
A (intensity)        = average deprivation score among the MPI poor only

MPI = H × A
```

Because MPI multiplies the *share* who are poor by *how* poor they are, two regions with the same
headcount ratio can have very different MPI scores if deprivations are more severe in one — the
same "no substitution across dimensions" logic behind the HDI's geometric mean.

## Worked example

**National survey of 1,000 people**: 350 are identified as multidimensionally poor (deprivation
score ≥ 33%). Among just those 350 poor individuals, the average deprivation score is 45%.

```
H = 350 / 1000                = 0.350
A = 0.45
MPI = H × A = 0.350 × 0.45    = 0.1575
```

**Comparing two districts with equal headcount**: District A has H = 0.30 and A = 0.40 (many poor,
moderately deprived); District B has H = 0.30 and A = 0.60 (same number poor, but more severely
deprived — lacking electricity *and* sanitation *and* school attendance simultaneously).

```
MPI_A = 0.30 × 0.40 = 0.120
MPI_B = 0.30 × 0.60 = 0.180
```

Same headcount ratio, 50% higher MPI in District B — a targeting system based on headcount poverty
alone would rank the two districts identically and miss that District B needs deeper intervention.

## Software engineering connection

- Case-management and eligibility systems for social programmes often already store several of
  the ten indicators (housing, school attendance, health markers) in separate silos; the
  Alkire-Foster counting method is a ready-made schema for combining them into one deprivation
  score instead of building a bespoke scoring model from scratch.
- The headcount/intensity split (H × A) is a generally useful pattern for any dashboard reporting
  "how many are affected" alongside "how badly" — collapsing both into one number, as raw
  prevalence statistics do, hides exactly the case that needs the most resource.
- MPI-style indicator dashboards pair naturally with [cost per beneficiary](../cost-per-beneficiary/)
  reporting for anti-poverty programmes: cost per point of MPI reduction is a defensible unit for
  comparing very different interventions (cash transfer vs. sanitation infrastructure).

## Pitfalls

- **Treating the ten indicators as universal** — OPHI's global MPI indicators are calibrated for
  cross-country comparability; national MPIs (many countries, including several in South Asia and
  Africa, publish their own) adapt indicators and weights to local context, and the two are not
  directly comparable.
- **Reporting H alone** — headcount ratio ignores intensity entirely; always report or compute A
  alongside it, or the MPI itself.
- **Assuming MPI-poor and income-poor are the same population** — OPHI's own country briefs
  typically show only partial overlap between the two; a programme targeting only the income-poor
  will systematically miss a meaningful share of the multidimensionally poor.

## Sources

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
