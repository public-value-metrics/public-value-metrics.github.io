# Volunteer Time Value

Volunteer time value is the monetary estimate assigned to unpaid labor, most often used to state
a charity's true economic footprint — its accounts plus the labor it did not have to pay for — or
to make the case that a given intervention is more cost-effective than its cash budget alone
suggests. Two national methodologies dominate: the United States' Independent Sector estimate and
the United Kingdom's Office for National Statistics / NCVO approach, and they price the same hour
of labor quite differently.

## Why it matters

Every year, Independent Sector, working with the University of Maryland's Do Good Institute,
publishes a national hourly value of volunteer time, built from Bureau of Labor Statistics wage
data — specifically the average hourly earnings of production and non-supervisory workers on
private non-farm payrolls, plus a fringe-benefit adjustment — and broken out by US state. Its most
recent release put the value at **$36.14 per hour for 2025**, up 3.9% on the prior year, with
state-level values ranging from over $50 in Washington, DC to under $20 in Puerto Rico. In the UK,
the Office for National Statistics has separately estimated the replacement cost of formal
volunteering at **£14.43 per hour** (2017 estimate), and NCVO's UK Civil Society Almanac 2024 uses
volunteering participation data — around 14.2 million people formally volunteering in 2021–22 — to
estimate the sector's total volunteering contribution at roughly **£18 billion**, about 0.8% of UK
GDP.

The reason this matters beyond accounting cosmetics: a program that relies heavily on volunteer
labor can look dramatically cheaper on a pure cash [cost per outcome](../cost-per-outcome/) basis
than one relying on paid staff, even where the true resource cost — what it would cost to replace
that labor — is similar or higher. Funders and evaluators who ignore volunteer time value
systematically undercount the true cost of volunteer-heavy delivery models, which distorts
efficiency comparisons against paid-staff models delivering the same outcome.

## The math

```
Value of volunteer time = Volunteer hours contributed × hourly rate

Rate choice matters and changes the answer:
  - Replacement cost approach: the wage of a paid worker who would do the
    same task (e.g. a replacement-cost rate for a qualified youth worker,
    not a generic average wage) — most defensible for task-specific valuation
  - Opportunity cost approach: the volunteer's own forgone wage — most
    defensible for valuing what the volunteer gave up
  - National average approach: Independent Sector's or ONS's single
    blended rate — most defensible for headline, cross-sector comparability
```

The three approaches can differ by a large multiple for the same hour (a solicitor volunteering as
a board trustee has a very different opportunity-cost rate from a national-average rate), so any
reported figure needs to state which method produced it.

## Worked example

**UK charity, national-average approach**: 5,000 volunteer hours in a year, valued at £14.43/hour
(ONS replacement-cost estimate):

```
Value = 5,000 × £14.43 = £72,150
```

If the charity's cash spend that year was £300,000, its true resource cost — cash plus volunteer
labor — is £372,150, roughly 24% higher than the cash figure alone suggests. A cost-per-outcome
calculation using only the £300,000 cash figure understates true cost by the same margin.

**US charity, national-average approach**: 2,000 volunteer hours valued at $36.14/hour (Independent
Sector, 2025 release):

```
Value = 2,000 × $36.14 = $72,280
```

**Same US charity, opportunity-cost approach**: if the volunteers are disproportionately retired
professionals whose prior earnings averaged $60/hour, the opportunity-cost valuation would be
$120,000 — two-thirds higher than the national-average figure, illustrating why the method must be
stated.

## Software engineering connection

Systems that log volunteer hours (shift-scheduling tools, volunteer management platforms) should
capture hours at the task or role level, not just a total, so that a replacement-cost rate can be
applied per role rather than one blanket national-average rate across a mixed volunteer workforce
(a trustee's hour and a stewarding hour are not economically equivalent). Storing the rate and
methodology used alongside the computed value — not just the final currency figure — lets
downstream reporting (annual accounts, [social return on investment](../social-return-on-investment/)
calculations, funder reports) reproduce or challenge the number later rather than treating it as an
opaque constant. See [cost per outcome](../cost-per-outcome/) for why omitting volunteer time value
systematically understates true delivery cost.

## Pitfalls

- **Using a single blanket rate for structurally different roles.** A national average wage rate
  applied to a professional pro bono hour (legal, financial, clinical) drastically undervalues it;
  match the rate to the replaced role wherever the task is skilled.
- **Double counting against paid staff cost.** If volunteers substitute for work that would
  otherwise be paid, ensure the valuation is additive to cash spend, not layered on top of an
  already-inflated staffing estimate.
- **Citing a stale rate without a date.** Independent Sector's and ONS's rates change annually (or
  are only periodically re-estimated, in the ONS case); an undated volunteer-time figure in a
  report is close to meaningless for comparison.
- **Treating volunteer time value as a fundraising asset.** It is a cost-accounting adjustment for
  understanding true resource cost, not new money a charity can spend; conflating the two misleads
  a board reading the accounts.

## Sources

- Independent Sector and the Do Good Institute (University of Maryland), "Value of Volunteer Time." <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, Value of Volunteer Time methodology. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, volunteering valuation estimate, as cited in NCVO analysis. <https://www.ncvo.org.uk/>
