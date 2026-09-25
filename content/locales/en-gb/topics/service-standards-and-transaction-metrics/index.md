# Service Standards and Transaction Metrics

The GOV.UK Service Standard is the UK government's 14-point checklist for building and running a
public digital service, and it comes paired with a small, mandatory set of quantitative transaction
metrics — cost per transaction, completion rate, digital take-up, and user satisfaction — that
teams must publish for every live central-government service. Together the standard and the
metrics are the operational, day-to-day specialisation of the broader public value and KPI
frameworks in this repository, aimed squarely at software delivery teams.

## Why it matters

The Service Standard, maintained in GOV.UK's service manual, requires every point-in-time
assessment (alpha, beta, live) of a government digital service to demonstrate — among its 14
points — that the team understands users' needs, works in a multidisciplinary team, iterates and
improves frequently, and *evaluates tools, systems, and ways of working*. Historically this sat
alongside a public Performance Platform where every live service published its transaction data
openly; that platform has since been retired, but the underlying obligation to measure and publish
these four core metrics persists through the service manual's "measuring success" guidance. The
reason this differs from a generic software KPI dashboard is that these metrics were explicitly
designed as one linked economic model, not four independent scores: the entire savings case for
digital government — the Government Digital Service's Digital Efficiency Report found digital
transactions roughly 20 times cheaper than by phone and around 50 times cheaper than face-to-face
for comparable local-government services — only materialises if completion rate stays high and
digital take-up genuinely rises, rather than merely adding a cheap channel alongside an unchanged
expensive one.

## The maths

```
Cost per transaction = total service running cost / number of completed transactions
Completion rate       = transactions completed / transactions started × 100
Digital take-up       = digital-channel transactions / all-channel transactions × 100
User satisfaction     = % satisfied + very satisfied, in-service 5-point survey

Channel-shift saving = transaction volume × take-up shift × (cost per transaction on
                        the old channel − cost per transaction digitally)

Failure-demand cost = (1 − completion rate) × transactions attempted digitally ×
                        cost of the fallback channel those users then use instead
```

## Worked example

**Illustrative central-government licence-renewal service**, 2 million transactions/year,
currently 65% phone (£3.00/transaction) and 35% digital (£0.30/transaction), completion rate 80%.
A redesign against the 14-point Service Standard lifts digital take-up to 60% and completion to
92%:

```
Take-up shift saving = 2,000,000 × 0.25 × (3.00 − 0.30) = £1,350,000/year

Failure-demand cost, before:
  2,000,000 × 0.35 × (1 − 0.80) × £3.00 = £420,000/year (abandoners fall back to phone)

Failure-demand cost, after:
  2,000,000 × 0.60 × (1 − 0.92) × £3.00 = £288,000/year

Net failure-demand saving = £420,000 − £288,000 = £132,000/year

Total annual saving ≈ £1,350,000 + £132,000 = £1,482,000/year
```

The arithmetic makes explicit why completion rate is not a secondary metric: without the
improvement from 80% to 92%, the take-up shift saving would be partly clawed back by failure
demand routing frustrated digital users straight back to the expensive phone channel.

## Software engineering connection

These four metrics are a working example of a cost-consequence dashboard: one cost metric held
apart from three outcome/quality metrics, deliberately never collapsed into a single score — the
same discipline argued for in [public sector KPIs](../public-sector-kpis/). For engineers this
breaks into concrete, ownable work: completion rate is a funnel-instrumentation problem, and every
abandonment point in the journey is, in principle, locatable and fixable; cost per transaction
requires genuine unit-cost accounting including staff-assisted and paper-channel costs, not just
cloud hosting spend (see [cost per transaction](../cost-per-transaction/) and
[total cost of ownership in government IT](../total-cost-of-ownership-in-government-it/)); and
digital take-up is an equity metric wearing an efficiency costume — the citizens who cannot or will
not shift channel are disproportionately older, disabled, or digitally excluded, so aggressive
channel closure converts a "saving" into an access harm (see
[digital inclusion](../digital-inclusion/) and [channel shift savings](../channel-shift-savings/)).
The 14-point standard itself is the process specification behind these numbers — see
[digital service standard](../digital-service-standard/) for the standard in full, and
[citizen satisfaction metrics](../citizen-satisfaction-metrics/) for how the satisfaction figure
here relates to broader trust measurement.

## Pitfalls

- **Take-up gained by closing the alternative channel**: shutting a phone line lifts the digital
  take-up percentage arithmetically while dumping failure demand onto whatever channel remains
  (often a more expensive assisted-digital or face-to-face route); always measure total-system
  cost, not the ratio alone.
- **Measuring completion rate from step two of the funnel**: starting the "started" count after the
  first genuine drop-off point flatters the completion rate and hides the biggest fixable loss.
- **Cost per transaction excluding assisted-digital support**: a digital-only unit cost that ignores
  the staff time spent helping users who can't self-serve understates the true cost of the channel.
- **Publishing metrics without a shared definition across services**: "transaction" and "completed"
  mean different things across different service teams unless the definitions are standardised and
  versioned, making cross-service comparison unreliable.

## Sources

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
