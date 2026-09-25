# Cost per Beneficiary

Cost per beneficiary is total programme cost divided by the number of unique people who received
a service — anyone touched, regardless of whether their circumstances actually changed. It is the
fastest efficiency number an organization can produce, because "who did we serve" is almost always
already in the case management system, while "who was helped" usually is not.

## Why it matters

Funders ask for cost per beneficiary constantly, and for defensible reasons: it is available
immediately, it is comparable across a portfolio of very different programmes, and it is honest
about reach in a way that outcome claims — which take longer to verify and are easier to overstate
— are not. The UK Charities SORP (Statement of Recommended Practice), which governs how charities
report under FRS 102, requires trustees' annual reports to describe achievements against
objectives, but most smaller charities' management accounts still default to reach-based unit
costs because they are cheap to produce and audit-friendly.

The danger is treating cost per beneficiary as if it answered the question it cannot answer:
whether the money worked. See [cost per outcome](../cost-per-outcome/) for the metric that
actually answers that, and [outcomes vs outputs](../outcomes-vs-outputs/) for the underlying
distinction. Cost per beneficiary is a legitimate triage and reach metric — it tells a funder how
far money stretches — but a low cost per beneficiary can mean either genuine efficiency or a
service so thin it changes nothing.

## The maths

```
Cost per beneficiary = Total programme cost / Number of unique people served

Contrast:
Cost per outcome      = Total programme cost / Number of people achieving the defined outcome

Cost per beneficiary is always ≤ cost per outcome, because the outcome population is a subset
(often a small one) of the beneficiary population.
```

## Worked example

**Food bank, same year as the cost-per-outcome example**:

- Total programme cost: £450,000
- Unique households served (three-plus parcels): 1,800

```
Cost per beneficiary = £450,000 / 1,800 = £250 per household served
```

Compare the two metrics side by side:

| Metric | Denominator | Result |
|---|---|---|
| Cost per beneficiary | 1,800 households served | £250 |
| Cost per outcome | 630 households achieving food security | £714 |

A funder who only sees £250 might conclude this is a highly efficient charity. A funder who sees
both numbers can ask the more useful question: is the gap between reach (1,800) and outcome (630)
a data-collection gap, a design gap, or an honest reflection of how hard food security is to
achieve with food aid alone?

**Job-training charity, illustrative**: cost per beneficiary (enrolled) = £2,000; cost per outcome
(sustained employment at 6 months) = £11,000, because only 18% of enrolees complete the programme
and find sustained work. The two numbers diverging by a factor of five is common wherever
completion or durability rates are low — a training charity and a food bank are structurally
identical here.

## Software engineering connection

Cost per beneficiary is the default metric in nonprofit software because it is the metric that
falls out of a beneficiary record with no further work: create a case, log a service, count rows.
Building a system that also supports cost per outcome means deliberately adding a second
first-class entity — an outcome event, dated and defined independently of service delivery — and
resisting the temptation to let "case closed" stand in for "outcome achieved." When scoping a
grant management or CRM platform, ask which of the two metrics each dashboard is actually showing,
and label it accordingly; conflating them in a single "impact" tile is one of the most common
software-level causes of the pitfalls below. See [unit cost databases](../unit-cost-databases/)
for benchmarking either metric once it is correctly labelled.

## Pitfalls

- **Presenting cost per beneficiary as impact.** It measures reach, not change. Label dashboards
  and reports "cost per person served," not "cost per person helped."
- **Double counting across programmes.** A person receiving both food parcels and debt advice from
  the same charity is one beneficiary, not two, if the denominator is meant to describe unique
  reach; decide and document which convention is used.
- **Treating a lower number as always better.** A drop-in lunch club will always beat an intensive
  case-management service on cost per beneficiary, because it costs less to touch someone lightly.
  That says nothing about which produces more durable change per pound.
- **Silently swapping denominators between reports.** A cost-per-beneficiary figure quoted in one
  annual report against "enrolled" and in the next against "completed" is not comparable year on
  year; state the denominator every time.

## Sources

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
