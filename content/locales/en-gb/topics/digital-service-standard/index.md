# Digital Service Standard

The GOV.UK Service Standard is the gate every central government digital service must pass before it can go live: 14 published points, assessed by an independent panel at the end of each delivery phase. It is the mechanism that turns "build good public services" from a slogan into a pass/fail decision with a paper trail — and the direct descendant of the 2012 Government Digital Strategy's "digital by default" mandate.

## Why it matters

Before the Service Standard existed, government IT failure was rarely visible until launch, and rarely attributable to a decision anyone could point to. The 2012 Government Digital Strategy committed departments to redesigning the 25 highest-volume public-facing transactional services as "digital by default", and backed the commitment with a compliance mechanism: services could not go live on GOV.UK without clearing a service assessment against what was then a 26-point standard (consolidated to 18 in 2019, and now the 14-point standard in force today, covering three groups — understanding user needs, providing a good service, and using the right technology). A service assessment is a real event: a panel of GDS or departmental assessors reviews evidence, questions the team, and issues a verdict of pass, fail or "not met" against each point, published on the service's assessment page. Failing an assessment blocks the service moving from private beta to public beta, or from beta to live — it is a genuine gate, not a review.

## The maths

The Service Standard is a framework, not a formula, but it functions as a stage-gated decision structure:

```
Discovery  → Alpha assessment  → Beta assessment  → Live assessment
             (not mandatory     (mandatory before   (mandatory before
              for all services,  public beta launch) removing "beta" tag
              but recommended)                       and closing old channel)

Each assessment: evidence + team interview → panel verdict per point
  Met / Partially met / Not met
Overall outcome: Pass / Pass with conditions / Fail (re-assessment required)

Cost of a fail ≈ cost of the next sprint cycle to remediate
              + delay to the [channel-shift-savings](../channel-shift-savings/)
                the service was funded to deliver
```

Point 10 ("define what success looks like, and publish performance data") is what feeds [cost-per-transaction](../cost-per-transaction/) and [service-standards-and-transaction-metrics](../service-standards-and-transaction-metrics/) — the Standard mandates the measurement, not just the service.

## Worked example

**Local authority housing application service**: a council team reaches its beta assessment with a service that meets 11 of 14 points but fails point 5 ("make sure everyone can use the service") because no assisted-digital route exists for applicants without internet access, and fails point 9 because personal data is logged in plaintext application error traces.

```
Direct cost of the fail:
  Re-assessment slot: 6–8 week wait for the next available panel
  Remediation sprint: 2 developers × 3 weeks × £550/day ≈ £34,650
  Assisted-digital channel design: 1 researcher × 2 weeks ≈ £5,000

Delay cost: service was forecast to shift 40% of 18,000/year housing
enquiries from £8.50 phone calls to £0.20 digital transactions
  = 7,200 × (£8.50 − £0.20) = £59,760/year foregone, pro-rated for the
    ~2-month delay ≈ £9,960

Total cost of the failed assessment ≈ £49,610
```

The point of the arithmetic is not the precision — it is that a failed assessment has a real, calculable price, which is exactly why the gate has teeth.

## Software engineering connection

For engineers, the Standard reads as an architecture and delivery checklist as much as a policy document: point 11 ("choose the right tools and technology") and point 12 ("make new source code open") are direct engineering decisions, and point 14 ("operate a reliable service") requires the same SLOs and incident processes any production system needs. It is the umbrella framework for this chapter — [cost-per-transaction](../cost-per-transaction/) and [channel-shift-savings](../channel-shift-savings/) are what the Standard is trying to protect financially, [digital-inclusion](../digital-inclusion/) is what point 5 exists to guarantee, and [government-as-a-platform](../government-as-a-platform/) components (GOV.UK Notify, Pay, One Login) satisfy point 13 ("use and contribute to open standards, common components and patterns") largely by default. See also [build-vs-buy-in-government](../build-vs-buy-in-government/) for how the "right tools" point plays out in procurement decisions.

## Pitfalls

- **Treating assessment as a launch-day compliance checkbox**: teams that first read the 14 points a week before their beta assessment fail predictably; the Standard is meant to shape decisions from discovery onward, not audit them retrospectively.
- **Assessing the prototype, not the service**: a slick demo can pass a review that the live, assisted-digital-inclusive, incident-managed version of the service would fail — assessors are meant to probe for this gap, but self-certified minor services often skip it.
- **No reassessment before scaling**: a service assessed at 5% rollout does not automatically remain compliant at 100% — load, failure demand, and edge-case users all change.
- **Confusing the Service Standard with a design system**: GOV.UK Design System components satisfy some points (consistency, accessibility) but the Standard also covers team structure, agile practice, and data ethics — a well-styled service can still fail on points 2, 6 or 9.

## Sources

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
