# Value for Money (VFM)

Value for money is the UK public sector's formal test of whether spending achieves the best
available balance of cost and benefit. HM Treasury's Green Book frames it through three "E"s —
economy, efficiency, and effectiveness — with equity increasingly argued as a contested fourth.
Every public-sector business case that survives scrutiny has to answer all three explicitly, not
just claim the spending is "worth it".

## Why it matters

VFM is not a synonym for "cheap". The Green Book (HM Treasury, 2022 edition) is explicit that
buying the lowest-cost option (economy) without checking it produces the intended outcomes
(effectiveness) is a common and expensive mistake — a procurement that saves 10% on unit cost but
delivers 40% less impact is worse value, not better. The three-E framework forces a business case to
separate three genuinely different failure modes: paying too much for inputs, wasting inputs in
conversion to outputs, and producing outputs that do not translate into outcomes anyone wanted. UK
government spending controls — Treasury approval points, National Audit Office (NAO) value-for-money
studies, and departmental accounting officer assessments — are built around this three-part test, so
an engineering business case that only addresses cost (economy) will fail scrutiny even if the
technology is sound.

The "fourth E", equity, is contested precisely because it can conflict with the other three: the
most efficient way to deliver a service nationally is rarely the most equitable, since concentrating
delivery where it is cheapest to reach citizens often means under-serving the hardest-to-reach. The
Green Book's 2020 revision responded to criticism (including from the 2020 Treasury Select
Committee and IPPR North) that pure cost-benefit ratios systematically favoured already-prosperous
regions, by requiring appraisals to address distributional impact explicitly — see
[distributional weighting](../distributional-weighting/).

## The math

VFM is not a single ratio but a three-part (or four-part) diagnostic, applied in sequence:

```
Economy:       Are inputs purchased at the lowest reasonable cost for the
               required quality?  (£ per unit of input)

Efficiency:    How well are inputs converted into outputs?
               (outputs / inputs, e.g. cases processed per caseworker-hour)

Effectiveness: Do the outputs actually produce the intended outcomes?
               (outcomes achieved / outcomes intended)

[Equity]:      Are costs and benefits distributed fairly across the
               population, or concentrated on those least in need?
```

A VFM failure can occur at any stage independently: economical procurement with inefficient
delivery; efficient delivery of the wrong output; effective outcomes bought at excessive cost. See
[public-sector KPIs](../public-sector-kpis/) for how these translate into measurable indicators,
and [cost-effectiveness analysis in government](../cost-effectiveness-analysis-in-government/)
for the formal comparison method.

## Worked example

**Local authority contact center**: a council compares two options for a new case-management system.

- *Option A*: £600,000 license (cheapest available), but agents still average 22 minutes per case
  because the workflow requires manual re-keying between systems — efficiency is poor.
- *Option B*: £900,000 license, integrated workflow, agents average 9 minutes per case.

Economy alone favours A (£300,000 cheaper). But at 40,000 cases/year, A costs 40,000 × 22/60 =
14,667 staff-hours; B costs 40,000 × 9/60 = 6,000 staff-hours. At a fully loaded staff cost of £28/hour,
A costs £410,667/year in staff time versus B's £168,000/year — a £242,667/year efficiency gap that
swamps the £300,000 up-front economy difference within 14 months. VFM favours B once efficiency is
counted, not A.

**Charity delivery grant**: a funder compares a £50,000 grant achieving 200 successful job placements
(£250/placement — apparently excellent economy) against a £120,000 grant achieving 350 placements
that persist for over 12 months versus the first grant's placements, half of which lapse within
3 months. Effectiveness — durable outcomes — reverses the apparent VFM ranking: the true cost per
*durable* placement is £250 ÷ 0.5 = £500 for the first grant, versus £120,000/350 ≈ £343 for the
second.

## Software engineering connection

VFM gives engineering teams a discipline for framing technology business cases the way finance and
audit functions will actually read them:

- State economy, efficiency, and effectiveness as separate line items in a business case, not one
  blended "value" number — a reviewer trained on the Green Book will ask for exactly this breakdown.
- Beware optimizing procurement cost (economy) at the expense of integration and workflow efficiency,
  a very common false saving in government IT (see
  [total cost of ownership in government IT](../total-cost-of-ownership-in-government-it/) and
  [build vs buy in government](../build-vs-buy-in-government/)).
- Effectiveness requires outcome data, not just output counts — connect delivery metrics to
  [outcomes vs outputs](../outcomes-vs-outputs/) and to real evaluation via
  [counterfactual analysis](../counterfactual-analysis/) rather than assuming outputs imply outcomes.
- When a system serves unevenly across regions or demographics, the equity question is a legitimate
  VFM objection, not a separate "nice to have" — see [digital inclusion](../digital-inclusion/).

## Pitfalls

- **Equating VFM with lowest price.** Economy is one-third (or one-quarter) of the test; the Green
  Book explicitly warns against "lowest cost" procurement rules that ignore efficiency and
  effectiveness.
- **Measuring outputs and calling them outcomes.** Case throughput (efficiency) is not the same as
  cases resolved well (effectiveness); see [outcomes vs outputs](../outcomes-vs-outputs/).
- **Treating equity as optional.** Since the Green Book's 2020 update, distributional impact is
  meant to be assessed alongside the traditional three Es, not bolted on afterwards; retrofitting it
  after a business case is approved is far harder than including it from the start.
- **Comparing options at different volumes without normalizing.** A per-unit VFM comparison across
  options serving different populations must control for scale, or the efficiency comparison is
  meaningless.

## Sources

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  edition). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programs and projects" and VFM study methodology.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the
  Treasury Select Committee's 2020 review of the Green Book's regional bias).
