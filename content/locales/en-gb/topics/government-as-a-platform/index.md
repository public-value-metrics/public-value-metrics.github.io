# Government as a Platform (GaaP)

Government as a Platform is the strategy of building shared, reusable components — a notifications service, a payments service, an identity service — once, centrally, so hundreds of individual government services consume them rather than each building their own. It reframes public digital infrastructure as a platform economics problem: the value isn't in any one integration, it's in the marginal cost of the *next* team that adopts it approaching zero.

## Why it matters

GDS set out the strategy formally in its 2015 "Government as a Platform" publication, arguing that government had been building the same capabilities — payment taking, user notification, identity verification, address lookup — separately in service after service, each carrying its own procurement, security assessment, and ongoing support burden. The alternative was a small number of shared platforms, built to a high standard once and reused everywhere: GOV.UK Notify for sending emails, text messages and letters, GOV.UK Pay for taking online payments, and GOV.UK One Login (successor to the earlier GOV.UK Verify identity programme) for identity verification. The scale these platforms have reached is the clearest evidence the strategy worked: GOV.UK Pay has processed over £10 billion in transactions across around 1,800 individual services — and where it took roughly four years to process its first £1 billion, it now processes that much in around five months — while GOV.UK Notify has sent more than 9 billion messages on behalf of over 1,500 government organisations. Every one of those adopting services avoided building, securing and maintaining its own payment gateway or messaging pipeline.

## The maths

```
Build cost per service (no platform) = N services × cost to build,
  secure-assess, and run one payment/notification/identity system

Platform cost = fixed platform build cost
              + marginal cost per adopting service (integration,
                configuration, ongoing platform-team support)

Reuse breaks even once:
  platform build cost < N × (per-service build cost − marginal
  integration cost)

For a mature platform, marginal cost per additional adopter approaches
the transaction/message fee alone — the fixed cost is amortized across
the whole government estate, not one department's budget, which is
why GaaP components are usually funded centrally rather than charged
at full cost-recovery to early adopters.
```

## Worked example

**Local authority adopting GOV.UK Pay instead of building a payment gateway**:

```
Build-your-own estimate:
  PCI-DSS compliance work + integration + ongoing maintenance
  ≈ £85,000 build + £22,000/year maintenance

GOV.UK Pay adoption:
  Integration effort ≈ £12,000 (developer time)
  Transaction fees: government-to-citizen card payments typically
  charged at a small percentage + fixed fee per transaction, no
  separate PCI-DSS burden carried by the council
  ≈ £12,000 one-off, ongoing cost variable with volume, not fixed

First-year saving ≈ £85,000 − £12,000 = £73,000, before counting the
avoided £22,000/year maintenance and the avoided compliance risk of
holding card data in a council-run system at all — this second
category is the security value covered in
public-sector-cybersecurity-value.
```

Scale that £73,000 across the roughly 1,800 services now using GOV.UK Pay and the aggregate avoided-build cost across government is in the hundreds of millions — the platform economics, not any single integration, is where the strategy's value actually sits.

## Software engineering connection

Government as a Platform is a direct argument for [build-vs-buy-in-government](../build-vs-buy-in-government/): when a shared, assessed, well-run component exists, building a bespoke equivalent is very rarely the better [value-for-money](../value-for-money/) choice, and it fails [digital-service-standard](../digital-service-standard/) point 13 ("use and contribute to open standards, common components and patterns") almost by definition. It also changes the shape of [total-cost-of-ownership-in-government-it](../total-cost-of-ownership-in-government-it/): platform adoption trades a large capital and maintenance line for a smaller, usage-linked operating cost, which is easier to forecast and easier to defund if a service is decommissioned. Open reuse of components has a cousin in [open-data-value](../open-data-value/) — both are strategies for treating something government produces once as shared infrastructure rather than a departmental asset.

## Pitfalls

- **Shadow rebuilding**: teams quietly build their own payment or notification integration because the platform's onboarding process is slower than doing it themselves — a governance friction problem, not a technology one, and it silently erodes the reuse economics the whole strategy depends on.
- **Underfunding the platform team relative to the value it creates**: value accrues to consuming departments while cost sits with the platform team, creating a chronic underinvestment risk unless funding is centralized and protected — a version of the tragedy of the commons.
- **Measuring platform success by usage alone**: adoption numbers (services onboarded, messages sent) are a leading indicator, not proof of value; the real test is the avoided-build-cost and avoided-risk arithmetic above.
- **Treating "platform" as synonymous with "monolith"**: GaaP components succeed because each does one thing well with a narrow, stable interface — bundling unrelated capabilities into one "platform" recreates the bespoke-build problem at a different scale.

## Sources

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
