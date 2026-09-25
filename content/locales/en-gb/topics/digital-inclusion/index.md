# Digital Inclusion

Digital inclusion is the discipline of making sure "digital by default" doesn't become "digital only" — that public services designed around the cheapest channel still work for the citizens who can't or won't use it unassisted. GDS coined the specific delivery mechanism, "assisted digital", as a mandatory requirement for every government digital service, not an optional extra.

## Why it matters

The 2012 Government Digital Strategy set the ambition plainly: digital services should be built digital by default, but the strategy itself acknowledged that around 10% of UK adults would not be able to use them without help, and committed departments to providing assisted digital support — a human-mediated route, by phone, in person, or through an intermediary — as part of the service, not a separate fallback bolted on later. That commitment is now [digital-service-standard](../digital-service-standard/) point 5, "make sure everyone can use the service". The scale of continuing exclusion is tracked by Lloyds Banking Group's annual UK Consumer Digital Index: the 2024 edition found that around 1.6 million people in the UK remain offline, and that this group skews heavily toward people aged 70–79, those earning under £35,000, and those who are retired or unemployed — precisely the population most likely to depend on the public services being redesigned. The same report found only 48% of the UK workforce could complete all 20 tasks on the Essential Digital Skills framework, meaning exclusion isn't binary connectivity, it's a spectrum of skill, confidence and trust that a simple "has broadband" metric misses entirely.

## The maths

Digital inclusion is a framework and equity check rather than a single formula, but it composes with quantitative value assessment through [distributional-weighting](../distributional-weighting/):

```
Naive channel-shift value:
  value = volume shifted × (cost_old − cost_digital)     [see channel-shift-savings]

Inclusion-adjusted value:
  value = (volume shifted × unweighted saving)
        − (excluded users × cost of assisted-digital provision)
        − (distributional weight adjustment for harm to excluded
           groups who lose access or face degraded service quality)

Assisted digital is not the residual cost of failure — it is a
designed channel with its own [cost-per-transaction](../cost-per-transaction/),
typically far higher per-transaction than self-service digital but
still usually cheaper than the legacy channel it partially replaces.
```

## Worked example

**Universal Credit-style national benefit service**: 2.5 million claims/year, assessed as needing assisted digital support for an estimated 10% of claimants per the Government Digital Strategy planning assumption.

```
Excluded/assisted-digital cohort = 2,500,000 × 10% = 250,000 claims/year

Assisted-digital channel cost (phone + face-to-face support,
staffed to handle vulnerability and complexity) ≈ £9.50/claim
  = 250,000 × £9.50 = £2,375,000/year

Self-service digital cost for the other 90% ≈ £0.40/claim
  = 2,250,000 × £0.40 = £900,000/year

Blended cost per transaction = (2,375,000 + 900,000) / 2,500,000
  = £1.31/claim

A design that skips assisted digital to hit a lower headline
cost-per-transaction (e.g. £0.40 blended, ignoring the 250,000
excluded claimants) doesn't eliminate that £2.375m cost — it
converts it into unclaimed entitlements, appeals, and downstream
crisis-service demand that lands on a different budget entirely.
```

## Software engineering connection

Assisted digital is a designed channel, which means it has interfaces, SLAs and instrumentation like any other: a phone-based caseworker tool, an intermediary portal for Citizens Advice or a local authority, or an in-person kiosk flow. Treating it as an afterthought — a phone number in small print rather than a channel considered from discovery — is the single most common way services fail [digital-service-standard](../digital-service-standard/) point 5 at assessment. Digital inclusion is the equity lens on every other topic in this chapter: it caps how aggressively [channel-shift-savings](../channel-shift-savings/) can be realised, it is a line item that must be included honestly in [cost-per-transaction](../cost-per-transaction/), and it is the direct application of [distributional-weighting](../distributional-weighting/) to a digital services context — a saving that lands disproportionately on people who are already digitally and economically excluded should be weighted down, not treated as equivalent to a saving spread evenly across the population.

## Pitfalls

- **"Digital by default" read as "digital only"**: closing the phone line or counter once digital take-up crosses a threshold, without verifying the remaining cohort has a genuinely usable alternative.
- **Measuring inclusion by binary connectivity**: "has broadband" or "owns a smartphone" is a poor proxy for ability to complete a specific transaction — the Essential Digital Skills gap (only 48% of the UK workforce completes all 20 tasks, per Lloyds 2024) shows skills and confidence matter as much as access.
- **Costing assisted digital as a rounding error**: budgeting it as a small contingency line rather than a proper channel with its own [cost-per-transaction](../cost-per-transaction/), then being surprised when it's underfunded and understaffed at launch.
- **Surveying only successful digital completers**: satisfaction and usability research run entirely in-service misses the people who never got that far, which is exactly the population digital inclusion work is meant to protect.

## Sources

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
