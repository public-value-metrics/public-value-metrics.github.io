# Cost Per Transaction

Cost per transaction is the headline unit-economics metric for a government digital service: total cost to deliver a channel, divided by the number of transactions completed through it. It was the flagship figure on the old GOV.UK Performance Platform, and it is the number that funded a decade of "digital by default" investment — which is exactly why it is also the metric most prone to being gamed.

## Why it matters

The Cabinet Office's 2012 Digital Efficiency Report put the channel-cost comparison in terms that stuck: digital transactions were found to cost around 20 times less than by phone and around 50 times less than face-to-face, with illustrative local-government figures of roughly £0.15 per web transaction against £2.83 by phone and £8.62 face-to-face. That single comparison became the justification for redesigning the 25 exemplar services named in the Government Digital Strategy, and for every departmental business case that has cited channel-shift savings since. The figure is genuinely useful as an order-of-magnitude signal, but the ratio depends entirely on what is counted on each side: a fair phone-channel cost includes the call center's staff, telephony contract, training and estate; a fair digital cost includes hosting, ongoing product-team salaries, support desk time for failed journeys, and the assisted-digital channel required by [digital-service-standard](../digital-service-standard/) point 5. Strip enough of those out of the digital side and any service looks cheap.

## The math

```
Cost per transaction = total allocated channel cost / completed transactions

Total allocated channel cost should include:
  + hosting and infrastructure
  + product/engineering/support team cost (amortized)
  + content and service design cost (amortized)
  + assisted-digital / accessibility support cost
  + failure-demand cost (users who fail digital and fall back to phone)
  − one-off build cost is amortized over expected service life, not
    expensed entirely into year one

The common accounting trick:
  "Marginal cost per transaction" (hosting only, once built) is quoted
  as if it were "average cost per transaction" (total cost including
  the team that keeps building and running it). The two can differ by
  10x or more for a service with a large, active delivery team.
```

## Worked example

**Vehicle tax renewal service**: 4 million transactions/year.

```
Marginal-only figure (the trick):
  Hosting + payment processing only = £180,000/year
  Cost per transaction = 180,000 / 4,000,000 = £0.045
  → headline figure quoted in a business case

Fully-loaded figure (the honest one):
  Hosting + payment                    £180,000
  Product/engineering team (8 FTE)     £720,000
  Support desk (failed/queried txns)   £310,000
  Assisted-digital phone line          £140,000
  Total                                £1,350,000
  Cost per transaction = 1,350,000 / 4,000,000 = £0.3375

The fully-loaded figure is still roughly 8x cheaper than the £2.83
phone-channel comparator from the Digital Efficiency Report — a real
and defensible saving — but 7.5x higher than the marginal-only figure
quoted in the shortcut version. Both numbers are "true"; only one is
comparable to the phone-channel cost it's being set against.
```

## Software engineering connection

Cost per transaction is where architecture decisions become a finance number: a service that auto-scales cleanly and needs little manual intervention drives this figure down over time; one that generates high support-ticket volume from confusing error states drives it up regardless of hosting efficiency. It is the natural companion metric to [digital-service-standard](../digital-service-standard/) point 10 ("define what success looks like, and publish performance data") and to [service-standards-and-transaction-metrics](../service-standards-and-transaction-metrics/), which sets out the fuller KPI set this figure sits inside. It also feeds directly into [channel-shift-savings](../channel-shift-savings/) calculations and should be reconciled against [total-cost-of-ownership-in-government-it](../total-cost-of-ownership-in-government-it/) so that platform and shared-service overheads aren't silently dropped.

## Pitfalls

- **Marginal cost dressed as average cost**: quoting hosting-only cost once a service is built, omitting the ongoing team that maintains, iterates and supports it — see the worked example above.
- **Excluding assisted-digital cost**: a channel isn't "digital by default" compliant, and its true cost isn't captured, if the phone/paper fallback required by [digital-inclusion](../digital-inclusion/) is costed separately or ignored.
- **Ignoring failure demand**: transactions that start digital and fail, generating a phone call or a paper form anyway, are a cost of the digital channel, not the channel that catches the failure.
- **Comparing transactions of different complexity across channels**: phone calls disproportionately handle the hard cases (multiple dependents, error correction, vulnerable applicants); comparing an average phone cost to an average digital cost overstates the ratio unless the transaction mix is matched.

## Sources

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
