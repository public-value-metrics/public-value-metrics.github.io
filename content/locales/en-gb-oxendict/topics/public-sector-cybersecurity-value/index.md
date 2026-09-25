# Public Sector Cybersecurity Value

Public sector cybersecurity value is the discipline of pricing risk reduction: what is it worth to make a breach of citizen data less likely, given that security spending produces no visible output when it works and a very visible one when it fails? For a service holding benefits records, health data, or tax records, that "invisible when working" property is exactly why it needs an explicit value argument, not just a compliance tick.

## Why it matters

The UK National Cyber Security Centre's Cyber Assessment Framework (CAF) gives public sector organizations a structured way to make security an assessable, outcome-based discipline rather than a checklist: it defines four high-level objectives (managing security risk, protecting against cyber attack, detecting cyber security events, and minimizing the impact of incidents) broken into contributing outcomes that a system owner can be assessed against, in the same spirit as the [digital-service-standard](../digital-service-standard/)'s point 9 ("create a secure service which protects users' privacy"). What CAF assessment protects against has a documented price tag: IBM's Cost of a Data Breach Report tracks average breach cost by sector, and has consistently found the public sector toward the lower end of the range compared with finance or healthcare — recent editions put the public sector average around $2.6–2.9 million per breach — but "lower than finance" is not "low", and government breaches carry costs the report's figures don't fully capture: loss of citizen trust in digital channels, which depresses the [digital take-up](../channel-shift-savings/) that channel-shift business cases depend on, and the political and legal cost of exposing data the state compelled citizens to hand over in the first place.

## The maths

Security investment is valued the way any risk-reduction spending is valued: as an expected-loss reduction, using the classic risk-management identity.

```
Annualized Loss Expectancy (ALE) = Single Loss Expectancy (SLE)
                                  × Annualized Rate of Occurrence (ARO)

Value of a security control =
  ALE_before_control − ALE_after_control − annual cost of the control

A control is worth funding when:
  (ALE_before − ALE_after) > annual cost of the control

CAF assessment doesn't directly output a probability, but a service's
CAF outcome profile (which contributing outcomes are "achieved",
"partially achieved", or "not achieved") is a reasonable proxy input
to estimate ARO — a system with unmanaged privileged access or no
tested incident response plan has a materially higher realistic ARO
than one with both in place.
```

## Worked example

**County council case-management system holding social care records for 40,000 residents**:

```
Single Loss Expectancy (breach cost), using a public-sector-sector
average from a recent IBM Cost of a Data Breach Report ≈ £2.1m
(converted, order-of-magnitude figure — always re-derive from the
current report edition rather than reusing a fixed number)

Current ARO (unmanaged privileged access, no tested incident
response, per an internal CAF self-assessment showing multiple
"not achieved" outcomes) ≈ estimated 8% per year
  ALE_before = £2.1m × 0.08 = £168,000/year

Proposed control: privileged access management + tested incident
response plan, moving the relevant CAF outcomes to "achieved",
estimated to cut ARO to 3%/year
  ALE_after = £2.1m × 0.03 = £63,000/year

Annual cost of the control (tooling + process + testing) = £45,000

Value of the control = (168,000 − 63,000) − 45,000 = £60,000/year
  net positive — fund it. The arithmetic also shows the control
  would still be worth funding at nearly triple the cost, which is
  the kind of sensitivity check that should accompany any ALE figure
  built on estimated probabilities.
```

## Software engineering connection

Engineers own most of the levers in the ALE equation: access control design, dependency and patch hygiene, logging and detection coverage, and incident response tooling all move the ARO term directly, which is why CAF assessment reads like a technical architecture review as much as a policy audit. This is [technical-debt-as-public-value-erosion](../technical-debt-as-public-value-erosion/) in its most acute form — unpatched, unmonitored, poorly-access-controlled systems are debt whose interest payment is tail risk, not a steady drag — and it should be reconciled against [total-cost-of-ownership-in-government-it](../total-cost-of-ownership-in-government-it/) so security spend isn't treated as separate from the system's real running cost. It is also a direct input to [value-for-money](../value-for-money/) assessments under the Green Book: risk-adjusted cost is part of the "cost" side of any options appraisal, not an afterthought bolted on at the end.

## Pitfalls

- **Treating CAF self-assessment as security itself**: a completed assessment describes a security posture; it doesn't create one — the value is in the outcomes achieved, not the document.
- **Using global average breach costs as a local estimate without adjustment**: IBM's figures are averages across large, varied samples; a small local authority's realistic single loss expectancy is rarely the same as a national government department's.
- **Ignoring tail-risk psychology in investment decisions**: a low annual probability makes security spend easy to defer indefinitely, right up until the year it doesn't — sensitivity-testing the ALE calculation against a range of AROs, as in the worked example, counters this.
- **Only counting the IBM-style breach cost, not the trust cost**: a breach that depresses citizen willingness to use digital channels erodes the [channel-shift-savings](../channel-shift-savings/) case for years afterward, a cost rarely included in breach-cost estimates.

## Sources

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
