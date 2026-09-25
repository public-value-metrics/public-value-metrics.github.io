# Social Value Act

The Public Services (Social Value) Act 2012 is a UK statutory duty requiring public authorities in
England and Wales to consider how what is being procured might improve the economic, social, and
environmental wellbeing of the relevant area, and to consider consulting on this, before starting a
procurement process for public services contracts. It came into force in January 2013 as a
relatively light-touch "have regard to" duty, and was substantially strengthened by Procurement
Policy Note (PPN) 06/20 in January 2021, which requires central government contracts to explicitly
evaluate — not merely consider — social value, with a minimum weighting in the award criteria.

## Why it matters

Before PPN 06/20, "considering" social value could be satisfied by a commissioner noting they had
thought about it, with no requirement that it affect the award decision — a duty easy to discharge
on paper and ignore in practice. PPN 06/20 closed that gap for central government procurement: it
mandates social value be scored as part of the tender evaluation, organized around five national
priority themes — COVID-19 recovery, tackling economic inequality, fighting climate change, equal
opportunity, and wellbeing — and commonly measured using the National TOMs (Themes, Outcomes,
Measures) framework maintained by the Social Value Portal. For a software engineer building
procurement, contract management, or bid-support tools for the public sector, this is the legal
basis your client is required to build against, not an optional nice-to-have.

## The maths

Social value is a framework-shaped topic; its "maths" is the scoring structure most authorities use:

```
Total tender score = Price/cost weighting + Quality weighting + Social value weighting

PPN 06/20 (central government): social value weighting ≥ 10% of total score

Social value themes (PPN 06/20):
 1. COVID-19 recovery
 2. Tackling economic inequality
 3. Fighting climate change
 4. Equal opportunity
 5. Wellbeing
```

Bidders typically monetize their commitments against these themes using
[unit cost databases](../unit-cost-databases/), and the same monetization logic used in
[social return on investment](../social-return-on-investment/) applies: a commitment should be
evidenced, attributable to the contract, and not double-counted against other funding.

## Worked example

**Local authority IT contract**: a £2 million, 3-year contract is scored 60% quality, 30% price,
10% social value. Bidder A commits to 2 apprenticeships, £150,000 of local subcontracting spend,
and 200 hours of pro bono digital-skills training for a local school, monetized using proxies from a
unit cost database at a combined £90,000 of additional social value. Bidder B commits to a smaller
package monetized at £40,000. If the authority scores social value proportionally against the
strongest bid, Bidder A receives the full 10 points; Bidder B receives 10 × (£40,000 ÷ £90,000) =
4.4 points — a 5.6-point gap that can decide the contract even where quality and price are close.

**Voluntary sector bidder**: a small VCSE (voluntary, community and social enterprise) bidding for a
grounds maintenance contract against a commercial competitor cannot compete on unit price alone, but
uses Global Value Exchange proxies to monetize its existing community employment and volunteering
commitments, making an evidenced social value case worth scoring alongside price and quality.

## Software engineering connection

Winning a bid with monetized social value commitments creates an obligation to evidence delivery
against them through contract management — tools that log apprenticeship starts, local spend, and
training hours against the specific commitments scored at tender, feeding into contract review
meetings rather than being forgotten once the contract is signed. G-Cloud and Digital Marketplace
listings increasingly require social value statements at the point of listing. See
[social return on investment](../social-return-on-investment/) for the valuation method behind the
commitments, [unit cost databases](../unit-cost-databases/) for the proxies bidders draw on, and
[outcomes vs outputs](../outcomes-vs-outputs/) for making sure delivered commitments are outcomes,
not just activity counts.

## Pitfalls

- **Social-washing bids.** Vague commitments ("we support the local community") that cannot be
  measured or held to during contract management score well but deliver nothing verifiable.
- **Treating social value as a tie-breaker.** PPN 06/20 requires social value to be explicitly
  evaluated within the award criteria, not used informally to break a tie between otherwise equal
  bids.
- **No contract management follow-through.** Commitments scored at tender are frequently never
  tracked during delivery — see [benefits realization](../benefits-realization/).
- **Inconsistent measurement frameworks across contracts.** Using different proxy sources for
  similar commitments on different contracts makes portfolio-level comparison meaningless, which is
  why common frameworks like National TOMs and shared unit cost databases exist.

## Sources

- Public Services (Social Value) Act 2012. <https://www.legislation.gov.uk/ukpga/2012/3/contents>
- Cabinet Office, Procurement Policy Note 06/20, "Taking Account of Social Value in the Award of
  Central Government Contracts." <https://www.gov.uk/government/publications/procurement-policy-note-0620-taking-account-of-social-value-in-the-award-of-central-government-contracts>
- Social Value Portal, National TOMs Framework. <https://socialvalueportal.com/national-toms/>
