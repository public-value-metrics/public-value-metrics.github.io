# DORA Metrics for Public Value

The DORA (DevOps Research and Assessment) metrics — deployment frequency, lead time for changes, change failure rate, and time to restore service, plus reliability as a fifth — are the software industry's most validated delivery-performance benchmarks. Translated into public-sector accountability terms, each one is a direct proxy for how fast, and how safely, public value reaches a citizen.

## Why it matters

DORA's decade of research, published annually as the *Accelerate State of DevOps Report* (Forsgren, Humble and Kim's methodology, now run by Google Cloud), clusters teams into elite, high, medium and low performers. Elite teams deploy on demand, take under a day from commit to production, fail roughly 5% of changes, and recover in under an hour; low performers deploy monthly or less, take months, fail around 40% of changes, and recover in weeks. In government these are not engineering vanity metrics: the Government Digital Service's Service Standard requires teams to "iterate and improve frequently" and to be able to respond quickly to user need, and departments that cannot deploy safely and often are structurally unable to meet that standard, whatever their user research says. The Cabinet Office's own digital efficiency work found that pushing a citizen from a failed or slow digital transaction into a phone or paper channel is expensive — GDS's 2012 Digital Efficiency Report estimated some digital transactions cost as little as 20p against phone or face-to-face contacts costing up to £8.62 — so a change failure in a public-facing service does not just cost engineering time, it pushes real pounds onto the contact-centre budget (see [channel shift savings](../channel-shift-savings/)).

## The maths

```
Deployment frequency  = production deployments / time
Lead time for changes = t(deploy) − t(commit), median
Change failure rate   = failed changes / total changes × 100
Time to restore (MTTR) = t(restored) − t(failure), median
Reliability            = SLO attainment (availability, latency, correctness)
```

Public-value translations:

```
Lead time      → weeks in the pipeline × CoD, see cost-of-delay-in-public-programmes
Failure rate   → citizen-facing incident rate: CFR × cost per redirected
                 contact-centre call (or per failed statutory transaction)
Recovery time  → service outage harm: MTTR × (claims/applications blocked
                 per hour) × downstream cost or wellbeing loss per unit
Reliability    → benefit discount: a service at 99% availability delivers
                 ≈ 0.99 of its modelled benefit — the delivery analogue
                 of take-up or compliance shortfall
```

## Worked example

A local authority's benefits-claims portal team, before and after a delivery-engineering investment:

```
                    Before      After
Deploys             monthly     weekly
Lead time           8 weeks     5 days
CFR                 30%         10%
MTTR                3 days      4 hours
```

The team ships around 25 improvements/year, average value £8,000/week ([cost of delay](../cost-of-delay-in-public-programmes/)). Cutting lead time by roughly 7.3 weeks pulls each improvement's benefit stream forward: 25 × 7.3 × 8,000 ≈ **£1,460,000/year** of value delivered sooner. On failure rate: 25 × (0.30 − 0.10) = 5 fewer failed changes/year; each failed change on a public portal typically redirects an estimated 2,000 citizens to the phone channel at £8.62 versus 20p, a net cost of roughly £8.42 × 2,000 ≈ £16,840 per incident, so avoiding 5 incidents saves ≈ **£84,200/year**. The delivery-engineering investment is valued in the same currency as any other public-value case.

## Worked example continued: reliability

If the portal runs at 97% availability rather than a target 99.5%, and each percentage point of downtime is modelled as 2% of claims lost to abandonment, the service is delivering roughly 0.975 of its modelled £2M/year benefit — a £50,000/year benefit discount that a pure uptime dashboard never surfaces.

## Software engineering connection

DORA metrics are a public service's operational metrics wearing different clothes: lead time maps to [service standards and transaction metrics](../service-standards-and-transaction-metrics/); change failure rate maps to rework and complaint rates; MTTR maps to how long a statutory service is unavailable to claimants. Improvement techniques transfer in both directions because both are queueing systems under accountability constraints — see [flow metrics in government delivery](../flow-metrics-in-government-delivery/) for the underlying queueing maths. Note also DORA's 2025 finding that AI adoption correlates with higher throughput but *worse* stability — an intervention with both efficacy and side effects, which is exactly the net-benefit analysis this chapter's [AI productivity](../ai-productivity-in-the-public-sector/) topic works through.

## Pitfalls

- **Metric gaming**: inflating deployment counts with no-op releases, or excluding hotfixes from the change-failure count. Define events as precisely as a statutory service standard defines a "successful transaction".
- **Cross-department league tables**: DORA clusters compare delivery practices, not services with different risk profiles; a tax-payment system rated "high" may be the right posture where "elite" would be reckless given assurance requirements.
- **Optimising one metric alone**: speed without change failure rate is the classic throughput-instability trade-off — report all four together, not as a single score.

## Sources

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
