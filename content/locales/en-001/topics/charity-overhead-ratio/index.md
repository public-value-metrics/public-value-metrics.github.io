# Charity Overhead Ratio

The charity overhead ratio is administrative and fundraising expenditure expressed as a percentage
of total spend. It is the single most requested number in charitable giving — used by donors,
watchdogs, and even some funders as a proxy for efficiency — and it is also one of the most
thoroughly discredited efficiency metrics in the sector, with the organisations that popularised
it publicly disowning it in 2013.

## Why it matters

On 17 June 2013, GuideStar, the BBB Wise Giving Alliance, and Charity Navigator — the three
largest US nonprofit rating and information bodies, whose own historical ratings had helped
entrench overhead ratio as a shorthand for charity quality — published a joint open letter to
American donors, "The Overhead Myth," stating explicitly that overhead ratio is a poor measure of
a charity's performance and urging donors to look instead at transparency, governance, and
results. This was a direct reversal by the very institutions that had built donor culture around
the ratio for a decade.

The underlying problem is structural, not just about optics: a low overhead ratio can be achieved
by underinvesting in exactly the things that make a charity effective — a decent case management
system, trained staff, monitoring and evaluation — because those often get booked as "admin"
rather than "programme" cost. A charity that starves its back office to report 5% overhead may be
less capable of delivering outcomes than one that spends 20% on a properly resourced operation. In
England and Wales, the Charity Commission's guidance to trustees steers away from a single
overhead percentage as an efficiency test, instead asking trustees to report on what the charity
achieved against its objectives — see the SORP reporting requirements discussed in
[cost per beneficiary](../cost-per-beneficiary/).

## The maths

```
Overhead ratio = (Administrative cost + Fundraising cost) / Total expenditure

Common variants:
  Programme ratio        = Programme (direct charitable) spend / Total expenditure
                          = 1 − overhead ratio
  Fundraising efficiency  = Fundraising cost / Funds raised
```

None of these formulas contains any information about outcomes achieved. A charity can minimise
every one of them and still fail every beneficiary; see [cost per outcome](../cost-per-outcome/)
for the metric that actually engages with whether the money worked.

## Worked example

Two charities, same total spend:

- **Charity A**: £1,000,000 total spend, £80,000 admin + fundraising → overhead ratio 8%. It has
  no monitoring and evaluation function, one overworked finance officer, and no case management
  system; staff turnover is high and outcome data is not collected.
- **Charity B**: £1,000,000 total spend, £220,000 admin + fundraising → overhead ratio 22%. It
  funds a small evaluation team, a case management system that captures outcome follow-up, and
  proper safeguarding training.

A donor screening purely on overhead ratio picks A and rejects B — the opposite of what
[cost per outcome](../cost-per-outcome/) evidence would likely show, because B is the only one of
the two positioned to demonstrate, or improve, its actual results.

## Software engineering connection

Finance and grant-reporting software for the sector often hard-codes the overhead/programme split
as a categorical field on every cost line, because that is what regulators and some funders still
require in statutory returns. Engineers building these systems should treat that requirement as a
compliance obligation, not a design signal that overhead ratio is the metric worth surfacing
prominently on a dashboard; pair it, wherever it is shown, with an outcome-based metric so a viewer
cannot read overhead ratio in isolation. See [donor return on investment](../donor-return-on-investment/)
for the metric that should sit next to it, and [value for money](../value-for-money/) for the
public-sector equivalent argument against single-ratio efficiency proxies.

## Pitfalls

- **Using overhead ratio as a screening cut-off.** Rejecting any charity above an arbitrary
  threshold (e.g. "no more than 15% overhead") systematically penalizes properly resourced,
  well-evaluated organisations and rewards underinvestment.
- **Miscategorising direct-delivery cost as overhead**, or vice versa — accounting conventions for
  what counts as "programme" versus "admin" vary enough between charities that ratios are often
  not even comparable at face value.
- **Assuming low overhead implies high impact.** The two are, at best, uncorrelated; see the 2013
  Overhead Myth letter's core claim.
- **Ignoring that some legitimate strategies require higher near-term overhead.** A
  capacity-building or organisational-development phase intentionally raises admin spend to
  improve later delivery.

## Sources

- GuideStar, BBB Wise Giving Alliance, and Charity Navigator, "The Overhead Myth" open letter, 17 June 2013. <https://learn.guidestar.org/news/news-releases/2013/2013-06-17-overhead-myth>
- Charity Navigator, "Overhead Myth" campaign resources. <https://www.charitynavigator.org/>
- Charity Commission for England and Wales, guidance on charity reporting (SORP). <https://www.gov.uk/government/organisations/charity-commission>
