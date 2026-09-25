# Donor Return on Investment

Donor return on investment is what a specific donor's pound actually buys in outcomes — not the
charity's operating ratios, and not the charity's own return on its total budget. It reframes ROI
from the organization's perspective (how efficiently do we run) to the donor's perspective (what
does my marginal contribution change), and the two numbers are routinely, and wrongly, treated as
the same thing.

## Why it matters

A charity's own "ROI," to the extent the phrase is used at all, usually describes something like
[cost per beneficiary](../cost-per-beneficiary/) or [charity overhead ratio](../charity-overhead-ratio/)
— organisational efficiency measures. A donor's ROI is a different question entirely: given that
this charity already has other income, what does *this* donor's money add at the margin? If a
charity would deliver the same programme with or without a particular £10,000 gift — because it
has ample reserves, or because another funder would have filled the gap — that gift's donor ROI is
close to zero, however good the charity's overall overhead ratio or cost per outcome looks.

This is the same additionality question that underpins [value for money](../value-for-money/)
assessment in UK public spending and [additionality and deadweight](../additionality-and-deadweight/)
in programme evaluation: value created is only creditable to a funder to the extent it would not
have happened anyway. Major donor-advised platforms and effective-giving organizations (Giving
What We Can, GiveWell) build their recommendations explicitly around this distinction, asking not
"is this a good charity" but "does this charity have unfilled room for more funding such that my
gift is additional."

## The maths

```
Donor ROI ≠ Charity's operating efficiency

Donor ROI  ≈  (Outcome achieved with the gift) − (Outcome that would have
               occurred without it, i.e. the counterfactual)
             ─────────────────────────────────────────────────
                              Size of the gift

Key inputs:
  - Room for more funding (is the charity funding-constrained at the margin?)
  - Funging (would another donor have filled the gap?)
  - Marginal cost-effectiveness at the specific funding level (costs often
    rise as an intervention scales past its easiest-to-reach population)
```

See [effective altruism cost-effectiveness](../effective-altruism-cost-effectiveness/) for how
GiveWell operationalizes the "room for more funding" question, and
[counterfactual analysis](../counterfactual-analysis/) for the general method.

## Worked example

A donor is choosing between two £5,000 gifts:

- **Charity C**: has a fully funded core programme with £2 million in reserves and a waiting list
  of funders; the marginal £5,000 likely gets added to reserves or a lower-priority activity.
  Estimated donor-additional outcome: minimal — the money is not obviously changing what happens.
- **Charity D**: a small, evidence-backed programme that has publicly stated it will have to turn
  away 200 people next quarter without an additional £50,000, and has raised £42,000 of it. The
  marginal £5,000 is very likely to fund real additional delivery — say, 20 additional people
  served, at the charity's own stated cost per beneficiary of £250.

Same gift size, same donor, radically different donor ROI — not because Charity C is a worse
organization (it may have a better cost-per-outcome figure overall) but because its marginal
funding gap is already closed.

## Software engineering connection

Donor platforms and giving-recommendation tools too often surface only organization-level
efficiency metrics (overhead ratio, cost per beneficiary) because those are what charities publish
in annual reports and what's easiest to pull into a comparison table. Representing donor ROI
properly requires a different, harder-to-source data point: a charity's stated current funding
gap or "room for more funding," which changes throughout the year and is rarely structured data.
Platforms that want to support genuine donor-ROI reasoning need either a direct feed from
funding-gap disclosures (as GiveWell maintains manually for its recommended charities) or an
explicit disclaimer that a comparison table is showing organisational efficiency, not donor
additionality. See [charity overhead ratio](../charity-overhead-ratio/) for the metric donor ROI
is most often, and wrongly, conflated with.

## Pitfalls

- **Conflating charity efficiency with donor additionality.** A well-run, low-overhead charity can
  still have a near-zero marginal donor ROI if it is not funding-constrained.
- **Ignoring funging.** If a large institutional funder would have covered the gap regardless, an
  individual donor's gift displaces that funder's money rather than adding new delivery.
- **Assuming linear cost-effectiveness at scale.** The cheapest-to-reach beneficiaries are often
  served first; marginal cost per outcome frequently rises as a programme expands, so the ROI on
  the next pound is not the same as the ROI on the average pound already spent.
- **No stated funding gap.** A charity or platform that cannot say what the next £X would fund
  cannot support a genuine donor-ROI claim, only an average-cost one.

## Sources

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
