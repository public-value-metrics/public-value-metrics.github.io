# Intergenerational equity and sustainability discounting

Discounting future costs and benefits back to present value is standard practice in public
appraisal — see the [social discount rate](../social-discount-rate/) — but any positive discount
rate, compounded over decades or centuries, shrinks the far future towards zero in today's terms.
For decisions with consequences a century or more out — climate change, nuclear waste, biodiversity
loss, pension sustainability — that mathematical fact becomes an ethical one: standard discounting
can make catastrophic harm to future generations appear, in present-value terms, barely worth
avoiding.

## Why it matters

The Ramsey equation, derived by Frank Ramsey in 1928, decomposes the discount rate into two
components: pure time preference (δ, how much we simply prefer now to later, independent of
wealth) and the wealth-growth effect (η×g, how much we discount because future generations are
expected to be richer, so an extra pound matters less to them). The UK Green Book's standard
long-term discount rate is built on this equation and follows a *declining* schedule rather than a
flat rate — a design rooted in Martin Weitzman's work on "gamma discounting," which shows that when
the future discount rate itself is uncertain, the certainty-equivalent rate you should apply
mathematically declines over time, because low-rate scenarios come to dominate the further out you
look. The Stern Review on the Economics of Climate Change (2006), led by Sir Nicholas Stern, took
the ethical debate further: Stern argued that pure time preference should be set near zero (he used
δ ≈ 0.1%, reflecting only the small probability of civilisation-ending catastrophe, not a genuine
preference for the present over the future), producing a far lower effective discount rate than
conventional Green Book practice and, correspondingly, a far larger present-day case for climate
action. Critics (notably William Nordhaus) argued Stern's near-zero rate was ethically defensible
but inconsistent with actual observed savings and investment behaviour. The disagreement is not a
technical footnote — it is the single largest reason two equally rigorous economists can reach
wildly different conclusions about how much the present generation should sacrifice for the
future, and it is the reason software supporting long-horizon public investment appraisal must
expose its discounting assumptions rather than bury them in a spreadsheet default.

## The maths

```
Ramsey equation:   r = δ + η × g

  r = social discount rate
  δ = pure time preference (rate of impatience, independent of wealth)
  η = elasticity of marginal utility of consumption (diminishing value of
      extra consumption as people get richer)
  g = expected growth rate of per-capita consumption

Green Book declining long-term schedule (approximate, current published bands):
  Years 0–30:    3.5%
  Years 31–75:   3.0%
  Years 76–125:  2.5%
  Years 126–200: 2.0%
  Years 201–300: 1.5%
  Years 301+:    1.0%

Stern Review parameters: δ ≈ 0.1%, η = 1, g ≈ 1.3%  → r ≈ 1.4%
```

## Worked example

**Value today of £1 of avoided harm in 100 years**, under three discounting regimes:

```
Flat Green Book short-term rate (3.5%, held constant for 100 years):
  PV = 1 / (1.035)^100 ≈ 1 / 31.19 ≈ £0.032   (3.2 pence)

Green Book declining schedule (3.5% for yrs 1–30, 3.0% for yrs 31–75,
2.5% for yrs 76–100):
  factor(1–30)  = 1.035^30  ≈ 2.807
  factor(31–75) = 1.03^45   ≈ 3.782
  factor(76–100)= 1.025^25  ≈ 1.854
  total factor ≈ 2.807 × 3.782 × 1.854 ≈ 19.68
  PV = 1 / 19.68 ≈ £0.051   (5.1 pence)

Stern-style near-zero pure time preference (r ≈ 1.4% flat):
  PV = 1 / (1.014)^100 ≈ 1 / 3.997 ≈ £0.250   (25.0 pence)
```

The same £1 of harm avoided a century from now is worth 3.2p, 5.1p, or 25p today depending purely
on which discounting convention is used — a near-eightfold range that drives whether a climate
mitigation project with high upfront cost and payoff a century out clears a positive-NPV bar at
all. This is the mechanism behind the chapter's central warning: at any meaningfully positive flat
rate, sufficiently distant future harm is arithmetically erased from the appraisal, regardless of
its real severity.

## Software engineering connection

- Any long-horizon appraisal or business-case tool (infrastructure, climate adaptation, pension
  modelling) should implement the Green Book's *declining* schedule, not a single flat rate — a
  flat-rate default silently embeds a much stronger anti-future bias than current UK government
  guidance specifies.
- Discount-rate and horizon should always be exposed as visible, auditable parameters in appraisal
  software, with the calculation's sensitivity to them shown explicitly (as in the worked example
  above) — burying the rate in a config file invites exactly the "hidden ethical choice" the
  Stern-Nordhaus debate warns about; this pairs with the transparency point made in
  [natural capital accounting](../natural-capital-accounting/) and underlies the
  [social discount rate](../social-discount-rate/) topic generally.
- Where a programme's benefits are explicitly intergenerational (flood defence, natural capital
  restoration, long-term digital infrastructure), a
  [social cost-benefit analysis](../social-cost-benefit-analysis/) should report results under at
  least two discounting assumptions (Green Book standard and a low-rate sensitivity case) rather
  than a single point estimate, so decision-makers see how discount-rate choice alone moves the
  answer.

## Pitfalls

- **Presenting a single discounted NPV without a sensitivity range** — given how much the discount
  rate alone changes the answer for long-horizon projects, a single-rate NPV materially overstates
  precision; always report a range spanning at least the Green Book standard and a low-rate
  scenario.
- **Applying the short-term flat rate (3.5%) to a multi-century appraisal** — the Green Book's own
  guidance specifies the declining schedule precisely because the flat rate was judged
  inappropriate beyond about 30 years; using it anyway understates long-term costs.
- **Treating δ (pure time preference) as a purely technical parameter** — Stern's near-zero value
  and the Green Book's higher implicit value are both defensible only as ethical positions about
  how much weight the present owes the future, not empirically "correct" or "incorrect" numbers;
  software should make the assumption visible rather than presenting one figure as objectively
  right.

## Sources

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
