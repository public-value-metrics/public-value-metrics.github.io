# Citizen Satisfaction Metrics

Citizen satisfaction metrics measure how people rate their direct experience of a public service —
distinct from trust in institutions generally, and distinct from whether the service actually
achieved a good outcome. A service can be well-liked and ineffective, or effective and disliked; the
gap between the two is itself diagnostic information a delivery team should be watching.

## Why it matters

Satisfaction is measured at two different altitudes that get routinely conflated. At service level,
the UK's now-retired Performance Platform and today's GOV.UK service manual require a per-service
satisfaction survey (typically a five-point "very satisfied" to "very dissatisfied" scale,
administered at the point of transaction) as one of four mandatory service KPIs — see
[service standards and transaction metrics](../service-standards-and-transaction-metrics/). At
institutional level, the UK Civil Service People Survey measures employee engagement and experience
across every central government department annually, and separately the OECD's "Trust in
Government" programme surveys public trust in national government across member states, tracking a
long-run decline and recovery pattern shaped heavily by crises (the 2008 financial crisis and the
COVID-19 pandemic both produced sharp, visible movements in OECD trust figures). The reason
engineers building citizen-facing services need to hold satisfaction and outcome apart is a known
failure mode in service design: a beautifully designed, easy-to-use digital form for a benefit
claim can score very high satisfaction while the underlying policy — eligibility rules, processing
backlogs, award amounts — leaves the claimant no better off. Satisfaction measures the interface;
it does not measure the value delivered behind it.

## The maths

```
Net satisfaction = % satisfied (or very satisfied) − % dissatisfied (or very dissatisfied)
                    (neutral/no-opinion responses excluded from both terms, but counted
                    in the response base for calculating each percentage)

Satisfaction-to-outcome gap = satisfaction score − outcome achievement score
                    (both normalized 0–100; a large positive gap signals a service
                    that "feels good" but under-delivers on substance)

Trust index (OECD-style) = % of survey respondents answering "yes" to
                    "do you have confidence in [national government]?"
                    tracked as a time series, typically disaggregated by
                    age, income, and education
```

## Worked example

**Local authority council tax e-billing service**: a satisfaction survey at the point of successful
transaction shows 2,400 respondents: 1,650 satisfied/very satisfied, 250 dissatisfied/very
dissatisfied, 500 neutral.

```
Net satisfaction = (1,650/2,400 × 100) − (250/2,400 × 100)
                  = 68.75% − 10.42%
                  = +58.3 net satisfaction
```

This looks strong in isolation. But the survey is only shown to users who *successfully* complete
the transaction — a known measurement bias (see pitfalls below). Pairing it with the completion
rate metric from [service standards and transaction metrics](../service-standards-and-transaction-metrics/)
shows completion is only 71%, meaning:

```
True population satisfaction is unmeasured for the 29% who abandoned the journey —
plausibly the most dissatisfied cohort, since abandonment is itself a strong negative
signal the survey never captures.
```

**National-level illustration (structure of an OECD-style trust series)**: national government
trust reported at 42% in year 1, falling to 34% in year 2 (a crisis year) and recovering to 39% in
year 3 — a trajectory typical of the shock-and-partial-recovery pattern the OECD documents across
member states following major crises.

## Software engineering connection

Instrument satisfaction surveys at every meaningful exit point of a user journey, not only at
successful completion — the single most common engineering mistake in this space, and one that
silently converts a satisfaction metric into a survivorship-biased vanity metric. Where possible,
pair the satisfaction score with a completion or outcome metric on the same dashboard so a team
cannot celebrate rising satisfaction while completion quietly falls (see
[cost per transaction](../cost-per-transaction/) and
[digital inclusion](../digital-inclusion/) for who gets excluded from digital satisfaction
sampling in the first place — non-digital and assisted-digital users are systematically
under-represented in in-service surveys). Satisfaction and trust data also feed directly into the
legitimacy leg of [Moore's strategic triangle](../public-value/), and belong on the "customer" and
"legitimacy" perspectives of a [public value scorecard](../public-value-scorecard/) — see
[trust and legitimacy metrics](../trust-and-legitimacy-metrics/) for the institutional-level
counterpart to this service-level metric.

## Pitfalls

- **Survivorship bias in point-of-completion surveys**: users who abandon a journey never see the
  survey, so a high in-service satisfaction score can coexist with a low completion rate and a
  large invisible population of dissatisfied non-completers.
- **Treating satisfaction as a proxy for outcome**: a well-designed interface for a poorly designed
  policy scores well on satisfaction and badly on outcome — always report both, never one as a
  stand-in for the other.
- **Small, unrepresentative samples reported with false precision**: a satisfaction score from a
  few hundred self-selected respondents reported to one decimal place implies a confidence the
  sample size cannot support.
- **Ignoring demographic disaggregation**: national trust and satisfaction figures that aren't
  broken down by age, income, disability, or digital access can mask sharply divergent experiences
  across groups — a pattern the OECD's own Trust in Government releases explicitly disaggregate for.

## Sources

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
