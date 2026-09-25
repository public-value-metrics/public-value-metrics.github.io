# Index of Multiple Deprivation (IMD)

The IMD is the official measure of relative deprivation for small areas in England, ranking every
one of the country's 32,844 Lower-layer Super Output Areas (LSOAs, each roughly 1,500 residents)
from 1 (most deprived) to 32,844 (least deprived). It is published by what is now the Ministry of
Housing, Communities and Local Government (MHCLG, formerly MHCLG/DCLG), most recently as the
English Indices of Deprivation 2019, and it directly routes central-government funding, public
health prioritization, and eligibility for dozens of local schemes.

## Why it matters

Deprivation is not one thing — a neighbourhood can be income-poor but safe, or income-adequate but
suffer from poor health outcomes and bad housing. The IMD's predecessor indices (dating back to
the 1970s Department of the Environment deprivation indicators) evolved into today's seven-domain
model precisely because single-indicator targeting (unemployment rate alone, say) routinely missed
areas deprived in other ways. The IMD 2019 combines income, employment, education, health, crime,
barriers to housing and services, and living environment into one composite rank per LSOA, each
domain built from its own basket of indicators and weighted by MHCLG's methodology. Because it
operates at small-area (LSOA) rather than local-authority level, it exposes pockets of deprivation
hidden inside otherwise affluent districts — the reason the IMD, not average local-authority
income, is what NHS England, the Department for Education's pupil premium, and dozens of local
authority funding formulae actually key off. Software that determines eligibility, prioritizes
outreach, or reports impact by area in England should treat IMD decile or rank as a first-class
input, not an afterthought — and where a programme deliberately targets the most deprived areas,
its appraisal should apply [distributional weighting](../distributional-weighting/) consistent
with that targeting, rather than valuing a pound of benefit the same regardless of where it lands.

## The maths

```
7 domains, weighted:
  Income                              22.5%
  Employment                          22.5%
  Education, Skills and Training      13.5%
  Health Deprivation and Disability   13.5%
  Crime                                9.3%
  Barriers to Housing and Services     9.3%
  Living Environment                   9.3%

Each domain score: indicators standardized (ranked, then transformed
towards a normal distribution) and combined by exponential transformation
so that high deprivation on any one indicator cannot be fully cancelled
out by low deprivation on others within that domain.

IMD composite score (LSOA) = Σ (domain score × domain weight)
Rank LSOAs by composite score → 1 (most deprived) to 32,844 (least deprived)
Deciles: rank ÷ 3,284 (approx.), decile 1 = most deprived 10% of LSOAs
```

## Worked example

**LSOA composite score**, using illustrative standardized domain scores (0 = no deprivation
signal, higher = more deprived):

```
Income               0.35 × 0.225 = 0.07875
Employment           0.30 × 0.225 = 0.06750
Education            0.20 × 0.135 = 0.02700
Health               0.15 × 0.135 = 0.02025
Crime                0.10 × 0.093 = 0.00930
Barriers to Housing  0.05 × 0.093 = 0.00465
Living Environment   0.08 × 0.093 = 0.00744

Composite score = 0.07875 + 0.06750 + 0.02700 + 0.02025
                + 0.00930 + 0.00465 + 0.00744  = 0.21489
```

That composite score is then ranked against all 32,844 LSOAs' scores. If it places the LSOA at
rank 2,950, it falls in decile 1 (2,950 ÷ 3,284 ≈ 0.9, i.e. within the most deprived 10% of
neighbourhoods in England) — which for many funding formulae is the threshold that unlocks
eligibility, regardless of how the surrounding local authority scores on average.

## Software engineering connection

- Any service that geocodes users to postcode or LSOA can join the published IMD lookup table
  (a free, versioned CSV from MHCLG) to add deprivation decile as a covariate — for targeting
  outreach, prioritizing case load, or reporting outcomes by deprivation band without collecting
  new personal data.
- IMD decile is a standard equity check for public digital services: cross-tabulating service
  uptake, drop-off, or satisfaction by IMD decile surfaces access gaps that an aggregate metric
  hides — see [digital inclusion](../digital-inclusion/) and [citizen satisfaction metrics](../citizen-satisfaction-metrics/).
- Because IMD rank is relative (it always sums to a fixed set of ranks across England), it cannot
  show whether deprivation nationally is rising or falling over time — only which areas rank where
  relative to each other in that edition; don't build absolute-trend dashboards on raw IMD rank
  alone.

## Pitfalls

- **Comparing IMD ranks across editions (2015 vs. 2019) as a time trend** — the underlying
  indicators, geographies, and methodology all change between editions; MHCLG explicitly advises
  against using rank changes as evidence an area got more or less deprived.
- **Applying LSOA-level IMD to individuals** — an LSOA in decile 1 still contains non-deprived
  households, and a decile-10 LSOA still contains deprived ones; IMD describes areas, not people,
  and using it as an individual eligibility proxy misclassifies both directions.
- **Ignoring domain-level detail in favour of the composite rank** — two LSOAs with identical
  composite scores can have completely different domain profiles (one health-deprived, one
  crime-deprived); a targeting scheme aimed at one problem should use the relevant domain score,
  not the blended composite.

## Sources

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
