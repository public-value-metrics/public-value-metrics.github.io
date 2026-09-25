# Green Book Appraisal (Five-Case Model)

The Green Book is HM Treasury's mandatory guidance for appraising and evaluating UK government
spending proposals. Its central tool, the five-case model, forces a business case to answer five
separate questions — is it a good idea, does it deliver value, can it be procured, can it be
afforded, and can it be delivered — rather than collapsing everything into a single number a
minister can wave through.

## Why it matters

Every UK central government spending proposal above departmental delegated limits must go through
Green Book appraisal before funding is released, and HM Treasury's Green Book Review 2020
(published after criticism that the process was biased against poorer regions, see
<https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>)
tightened the requirement that options be compared against a genuine "do minimum" baseline and
that strategic fit be demonstrated before value for money is even assessed. The five-case model
itself predates the Green Book — it originated with the Office of Government Commerce as the
standard business case structure — but the 2022 Green Book edition embeds it as the mandatory
shape for any business case seeking Treasury approval:
<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

The point of splitting the case five ways is that a proposal can fail on any one dimension
regardless of the others. A strategically sound, cost-effective IT replatform can still fail the
commercial case if only one supplier can deliver it (creating single-tender risk), or fail the
management case if the department has no track record of delivering programmes of that size. A
single "value for money" score hides exactly this kind of failure mode.

## The maths

The five-case model is a structure, not a formula, but each case has its own quantitative or
evidential test:

```
1. Strategic case
   Evidence of a spending objective linked to organisational strategy.
   Test: is there a case for change at all? ("do nothing" is always an option.)

2. Economic case
   Options appraisal against a "do minimum" baseline, using
   social cost-benefit analysis or cost-effectiveness analysis.
   Test: which option maximizes net public value?
   See ../social-cost-benefit-analysis/ and ../cost-effectiveness-analysis-in-government/

3. Commercial case
   Market engagement, procurement route, risk allocation between
   buyer and supplier.
   Test: is the preferred option procurable on acceptable terms?

4. Financial case
   Affordability within departmental budget limits, funding source,
   balance sheet treatment.
   Test: can we afford it, this year and every year after?

5. Management case
   Governance, project plan, benefits realization plan, risk register.
   Test: can this organization actually deliver it?
   See ../benefits-realization/
```

The economic case is where the quantitative appraisal lives: options are compared on a
[social discount rate](../social-discount-rate/)-adjusted net present value basis, using the
[social cost-benefit analysis](../social-cost-benefit-analysis/) method, or, where benefits cannot
be honestly monetized, via [cost-effectiveness analysis](../cost-effectiveness-analysis-in-government/)
or [multi-criteria decision analysis](../multi-criteria-decision-analysis/).

## Worked example

**Local authority**: a council appraising a £12 million housing repairs IT system runs the five
cases as follows. Strategic case: repairs backlog breaches statutory decent-homes standard within
18 months without intervention. Economic case: three options costed over a 10-year appraisal
period at a 3.5% discount rate (per the 2022 Green Book's standard social time preference rate) —
"do minimum" (patch the legacy system, NPV −£4.1m), "buy" (COTS platform, NPV +£2.3m), "build"
(bespoke platform, NPV +£0.6m once optimism bias of 40% for software development is applied
against the undiscounted capital cost, per Green Book Annex A). Buy wins the economic case.
Commercial case: two viable suppliers exist, competitive tender is feasible — passes. Financial
case: capital available from the Public Works Loan Board, revenue costs fit within the medium-term
financial plan — passes. Management case: council has delivered two comparable systems in the last
five years — passes. The proposal proceeds with "buy."

**Central government department**: a proposal with a strong economic case (NPV +£40m) but where
only one supplier holds the relevant accreditation fails the commercial case test for competitive
tension, forcing either a single-tender waiver (with its own scrutiny burden) or a redesign of the
specification to open the market — the economic case alone would never have surfaced this.

## Software engineering connection

Engineering teams inside government or grant-funded organizations usually only ever see the
economic case, because that is the part product and engineering leadership are asked to justify
("what's the ROI of this migration?"). But a business case that clears Treasury or a grant
committee needs all five, and engineers are often the best-placed people to answer the commercial
case (can this actually be procured, or does it lock us into one vendor's proprietary format?) and
the management case (do we have the delivery capability, or does this depend on three specific
people not leaving?). Treat a request for "just the business case numbers" as a request for one
fifth of the actual decision. See [value for money](../value-for-money/) for how the economic
case's output is usually summarized, and [total cost of ownership](../total-cost-of-ownership-in-government-it/)
for the financial case's usual quantitative core.

## Pitfalls

- **Writing the economic case first and the strategic case to match it.** The Green Book Review
  2020 found this exact failure mode driving appraisal bias towards places and sectors that were
  already well-evidenced, entrenching regional inequality; the strategic case should establish the
  objective before options are compared.
- **Treating "do minimum" as "do nothing."** The correct baseline is the lowest-cost option that
  still meets minimum legal or safety obligations, not a fantasy of zero spend — comparing against
  literal zero inflates every option's apparent value.
- **Skipping the commercial and management cases because the economic case is strong.** A high
  NPV proposal that cannot be procured competitively or delivered by the sponsoring organization is
  not a fundable proposal; Treasury reviewers routinely reject on these grounds even with a
  compelling economic case.
- **Applying the five-case model once, at the start.** The Green Book requires the case to be
  revisited at each subsequent approval gate (strategic outline case, outline business case, full
  business case) as costs and evidence firm up — a case frozen at the outline stage misses cost
  escalation that a later gate would have caught.

## Sources

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
