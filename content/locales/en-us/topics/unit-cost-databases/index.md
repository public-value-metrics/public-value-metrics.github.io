# Unit Cost Databases

A unit cost database is a library of pre-researched, evidence-based financial proxies for social
outcomes — the value of moving from unemployment into employment, of reduced loneliness, of a stable
tenancy — that let a practitioner monetize an outcome without commissioning bespoke valuation
research every time. They exist so a small charity writing a funding bid can apply the same
rigour as a well-resourced consultancy, by reusing a proxy someone else already derived and
published.

## Why it matters

HACT's UK Social Value Bank, developed with economist Daniel Fujiwara using wellbeing valuation
methods, and Global Value Exchange, an open, crowdsourced database of financial proxies, are the two
most widely used in the UK third and public sectors. Both exist because the underlying valuation
work — [wellbeing valuation](../wellbeing-valuation/) and
[stated preference valuation](../stated-preference-valuation/) — is expensive, methodologically
demanding, and slow to run from scratch for every project. A shared, published proxy library turns
what would be a multi-month research exercise into a lookup, which is precisely why they matter for
both [social return on investment](../social-return-on-investment/) calculations and
[Social Value Act](../social-value-act/) bid evaluations: without them, rigorous monetization would
be affordable only to organizations large enough to commission their own studies.

## The math

A unit cost database does not compute anything itself; it supplies one input to a calculation done
elsewhere:

```
Financial proxy value = market price, OR shadow price, OR wellbeing valuation,
                         OR stated-preference value
                         for a defined unit of outcome change
                         (e.g. "per person moving from unemployment to employment, per year")

Applied value = number of outcomes achieved × unit proxy value
```

See [shadow pricing](../shadow-pricing/) for how a proxy is constructed when no market price
exists, and [social return on investment](../social-return-on-investment/) for how the applied
value then feeds into a ratio after deadweight and attribution adjustments.

## Worked example

**Charity (befriending service SROI)**: a unit cost database entry for "reduction in loneliness"
gives an illustrative proxy of £1,100 per person per year. Applied to 80 beneficiaries: 80 ×
£1,100 = £88,000 gross value. If the same database also has a proxy for "improved mental
wellbeing" that draws on an overlapping wellbeing survey item, stacking both proxies for the same
80 people would double count part of the same underlying change — the database supplies the number,
but avoiding this overlap is the analyst's responsibility.

**Local authority (job club SROI)**: a unit cost database entry for "moving from unemployment into
sustained employment" is applied to 45 participants at an illustrative proxy of £8,500 per person
per year: 45 × £8,500 = £382,500 gross value, before the deadweight and attribution adjustments
shown in [social return on investment](../social-return-on-investment/).

## Software engineering connection

Teams building reporting tools for charities or commissioners benefit from an internal "outcome
catalog" — a table mapping each outcome a product or service can plausibly claim to a named proxy,
its source database, its publication date, and a version identifier — so that different teams
across an organization do not each pick slightly different values for the same outcome. Wrapping
Global Value Exchange's open data behind a lookup service, with the source and date always
displayed alongside the figure, keeps the proxy auditable rather than a magic number buried in a
spreadsheet. See [social return on investment](../social-return-on-investment/) and
[social value act](../social-value-act/) for the two main places these proxies get consumed.

## Pitfalls

- **Treating proxies as precise.** Most published proxies are modeled averages from wellbeing
  valuation studies with wide confidence intervals; quoting one to the pound overstates the
  precision the underlying research supports.
- **Double counting overlapping proxies.** Combining proxies (e.g. "reduced loneliness" and
  "improved mental wellbeing") that are derived from overlapping survey constructs values the same
  underlying change twice.
- **Using an out-of-context proxy unadjusted.** A proxy calibrated on one national population and
  year, applied elsewhere without inflation or context adjustment, silently mis-states value.
- **Not checking provenance.** Global Value Exchange is open and crowdsourced, so entry quality
  varies by contributor; check the underlying source before citing a figure in a funding bid or
  procurement submission.

## Sources

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — methodological basis of the
  UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," section on financial proxies.
