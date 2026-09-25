# Social Discount Rate

The social discount rate converts future costs and benefits into present-day values so that
programmes with payoffs spread across decades can be compared on a common basis. HM Treasury's Green
Book mandates a declining schedule anchored at 3.5% for the first 30 years, based on the Ramsey
formula — a specific, citable number that has become a live political and ethical argument whenever
it is applied to long-horizon commitments such as climate policy or infrastructure.

## Why it matters

A pound of benefit received in 30 years is not worth a pound of benefit received today, for reasons
that are partly about pure time preference (people and societies prefer good things sooner) and
partly about growth (a future society is expected to be richer, so a pound matters less to it at the
margin). The Green Book's Annex 6 derives the UK's standard discount rate from the Ramsey formula,
combining a rate of pure time preference with the expected growth rate of consumption and the
elasticity of marginal utility of consumption, producing the published rate of 3.5% per year for
years 0–30, declining in a published schedule for years 31 and beyond (down to 1% for years 301+).
This schedule exists precisely because a constant 3.5% compounded over a century would make virtually
any long-horizon benefit — a flood defence saving lives in 80 years, a carbon reduction avoiding
harm in 100 years — appear negligible in present-value terms, which the Treasury judged to be an
implausible ethical conclusion for genuinely long-lived infrastructure and environmental decisions.

The discount rate is contested precisely because the choice is not a neutral technical parameter: it
encodes a judgement about how much a society should sacrifice today for people not yet born. The
Stern Review on the Economics of Climate Change (2006) used a discount rate close to zero (a pure
time preference near 0.1%), arguing that discounting future generations' welfare at anything like
market rates is ethically indefensible when the harm (catastrophic climate change) is irreversible.
Critics — notably William Nordhaus — argued Stern's near-zero rate overstated the case for immediate
climate spending by making almost any present cost look justified against a barely-discounted future
benefit. The disagreement was not about the maths; it was about whose ethical framework should set
the rate, and it remains the standard illustration of why the discount rate is a policy choice, not
just an actuarial input.

## The maths

The Ramsey formula underlying the Green Book's rate:

```
r = ρ + η·g

where:
  r = social discount rate
  ρ = rate of pure time preference (impatience + catastrophe risk)
  η = elasticity of marginal utility of consumption
  g = expected annual growth rate of per-capita consumption
```

The Green Book's declining schedule (Annex 6, illustrative — check the current edition for the exact
published table):

```
Years 0–30:    3.5%
Years 31–75:   3.0%
Years 76–125:  2.5%
Years 126–200: 2.0%
Years 201–300: 1.5%
Years 301+:    1.0%
```

Present value of a future sum:

```
PV = FV / (1 + r)^t
```

## Worked example

**Flood defence scheme**: a project delivers £10 million of avoided flood damage in year 40.

Using a flat 3.5% rate: PV = 10,000,000 / (1.035)^40 ≈ £2.52 million — the benefit looks small.

Using the Green Book's declining schedule (3.5% for years 0–30, 3.0% thereafter), the calculation
compounds at 3.5% for the first 30 years and 3.0% for years 31–40:

```
PV = 10,000,000 / [(1.035)^30 × (1.03)^10]
   = 10,000,000 / [2.807 × 1.344]
   ≈ 10,000,000 / 3.773
   ≈ £2.65 million
```

The declining schedule modestly raises the present value of long-horizon benefits relative to a flat
high rate — the explicit purpose of the schedule, since a flat 3.5% for a century would discount a
£100 million benefit in year 100 to under £3.3 million.

**Digital infrastructure**: a government cloud migration costing £4 million now is expected to avoid
£500,000/year in legacy maintenance costs for 15 years. At 3.5%, the present value of that annuity is
approximately £500,000 × 11.52 (the 15-year annuity factor at 3.5%) ≈ £5.76 million — comfortably
exceeding the £4 million cost, a positive net present value case that would look markedly weaker at
a naively chosen higher rate (at 7%, the same annuity factor drops to about 9.11, giving £4.56 million,
still positive but with a much thinner margin).

## Software engineering connection

Most software business cases run over 3–5 years, well inside the flat 3.5% band, so the declining
schedule rarely bites directly — but the underlying discipline matters for any government technology
investment with a long asset life (a national platform, a data infrastructure programme, a
multi-decade contract):

- Use the Green Book's published rate rather than an internal "hurdle rate" borrowed from private
  finance; auditors and Treasury reviewers will expect the standard schedule.
- For benefits realised many years out (a platform's long-term maintenance savings, an open-data
  ecosystem's compounding value — see [open data value](../open-data-value/)), the discounting
  choice can flip a business case from positive to negative; make the rate and horizon explicit
  assumptions, not buried defaults.
- This feeds directly into [green-book-appraisal](../green-book-appraisal/), the five-case model
  that formally requires a discounted cash flow, and into
  [wellbeing-valuation](../wellbeing-valuation/), where the same discounting question arises for
  non-monetary wellbeing benefits.
- See also [intergenerational equity and sustainability discounting](../intergenerational-equity-and-sustainability-discounting/)
  for the Stern-versus-Nordhaus debate applied specifically to environmental and climate technology
  investment.

## Pitfalls

- **Using a flat rate for very long horizons.** The Green Book's declining schedule exists
  specifically because a constant rate understates genuinely long-lived benefits; check which band
  applies rather than defaulting to 3.5% throughout.
- **Treating the discount rate as ethically neutral.** The Stern-Nordhaus dispute shows the rate
  encodes a value judgement about future generations; changing it changes which programmes look
  justified, so it should be stated and defended, not hidden in a spreadsheet default.
- **Confusing the social discount rate with a private cost of capital.** Government borrowing costs
  and private-sector hurdle rates are different concepts from the Ramsey-derived social rate, and
  substituting one for the other in a public appraisal will typically distort the result in the
  direction of favouring short-term returns.
- **Discounting real and nominal cash flows inconsistently.** The Green Book rate is a real (inflation-
  adjusted) rate; discounting nominal cash flows with it materially understates present values.

## Sources

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
