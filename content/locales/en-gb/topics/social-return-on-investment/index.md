# Social Return on Investment (SROI)

Social return on investment is a framework for measuring, monetising, and accounting for a broad
concept of value — social, environmental, and economic — and expressing it as a ratio against the
resources invested, for example "£1.44 of social value for every £1 invested". It was designed to
extend financial accounting logic to outcomes that markets do not price, without losing accounting's
discipline: every number in an SROI must be traceable to a stakeholder-defined outcome, an evidence
base, and an explicit adjustment for what would have happened anyway.

## Why it matters

SROI is maintained by Social Value UK and Social Value International, successor bodies to the SROI
Network, whose "A Guide to Social Return on Investment" (2012) is still the reference methodology.
The framework rests on seven principles — involve stakeholders, understand what changes, value the
things that matter, only include what is material, do not over-claim, be transparent, and verify
the result — and it is principle five, "do not over-claim", that most SROI reports in the wild
fail. A ratio produced by skipping deadweight and attribution adjustments is not an SROI; it is a
marketing number wearing an SROI's clothes. Software engineers building reporting tools for
charities, social enterprises, or commissioners need to know the difference, because the tool will
either enforce the discipline or make it easy to skip.

## The maths

SROI depends on a [theory of change](../theory-of-change/) to identify which outcomes are in
scope, and expresses them using the same accountability chain as a [logic model](../logic-model/):

```
SROI ratio = Present value of outcomes / Value of inputs

Process:
 1. Establish scope and identify stakeholders whose outcomes will be measured
 2. Map outcomes (a theory of change, evidenced with stakeholders, not assumed)
 3. Evidence outcomes and give them a value using financial proxies
 4. Establish impact: gross value − deadweight − attribution − displacement, then apply drop-off
 5. Calculate the SROI: net present value of impact ÷ value of inputs
 6. Report, use, and embed — the ratio is a communication device, not the endpoint
```

Deadweight, attribution, and displacement are covered in
[additionality and deadweight](../additionality-and-deadweight/) and
[displacement and attribution](../displacement-and-attribution/); all three exist to isolate the
genuine [counterfactual](../counterfactual-analysis/) impact from the gross outcome.

## Worked example

**Local authority employment programme**: annual input cost £250,000. Sixty participants move into
sustained employment; a financial proxy for that outcome (wellbeing uplift, reduced benefit
reliance, and tax revenue combined) is £8,500 per person for the first year — see
[unit cost databases](../unit-cost-databases/) for where such proxies come from.

- Gross outcome value: 60 × £8,500 = £510,000
- Less deadweight (40% would likely have found work without the programme): £510,000 × 0.60 = £306,000
- Less attribution (30% of the remaining change is due to other agencies' support): £306,000 × 0.70 = £214,200
- Year 2 outcome at 30% drop-off: £214,200 × 0.70 = £149,940, discounted at 3.5%/year (see
  [social discount rate](../social-discount-rate/)): £149,940 ÷ 1.035 = £144,870
- Total present value of impact: £214,200 + £144,870 = £359,070
- **SROI ratio: £359,070 ÷ £250,000 = 1.44**, reported as "£1.44 of social value for every £1 invested"

**Charity**: a £60,000 befriending service reduces loneliness for 80 older people, valued at a
proxy of £1,100/person/year. Gross value £88,000; after 35% deadweight and 15% attribution,
net impact is £88,000 × 0.65 × 0.85 = £48,620, an SROI ratio of 0.81 — below break-even, which is a
legitimate and useful finding, not a failure to write up.

## Software engineering connection

An SROI calculator that lets a user enter outcome counts and proxy values but has no required
field for deadweight, attribution, or a linked theory of change will produce inflated ratios by
default, because omitting adjustments is the path of least resistance. Build the discipline into
the schema: every outcome row should reference a stakeholder group, an evidenced quantity, a
financial proxy with its source, and non-optional deadweight/attribution fields. See
[outcomes vs outputs](../outcomes-vs-outputs/) for the distinction SROI outcome-mapping depends on,
and [logic model](../logic-model/) for the chain the tool should mirror in its data model.

## Pitfalls

- **Skipping deadweight and attribution.** The headline ratio without these adjustments is a gross
  figure, not a net impact figure, and Social Value UK's principles explicitly require both.
- **Comparing ratios across organisations.** An SROI ratio depends on scope and proxy choices made
  case by case; treating a 4:1 ratio from one report as "better" than a 2:1 ratio from another
  ignores that the assumptions are not standardised like a financial accounting ratio.
- **Double counting overlapping proxies.** Stacking a "reduced loneliness" proxy with an
  "improved mental wellbeing" proxy for the same beneficiaries can double-value one underlying
  change.
- **Skipping stakeholder engagement.** Principle one requires outcomes to be defined with the
  people experiencing them, not assumed by the analyst building the model.

## Sources

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
