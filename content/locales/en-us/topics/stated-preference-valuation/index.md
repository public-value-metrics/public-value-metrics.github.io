# Stated Preference Valuation

Stated preference methods estimate the value of a non-market good by directly asking people what
they would be willing to pay for it, or willing to accept in compensation to give it up, typically
through a structured survey describing a hypothetical scenario. Contingent valuation is the
best-known technique in the family.

## Why it matters

Green Book Annex 2 (supplementary guidance on valuing non-market impacts) endorses stated
preference methods for goods that have no observable market transaction to infer value from at
all — air quality, biodiversity, flood protection, the existence value of a landscape someone may
never visit
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Defra has published its own stated-preference guidance for environmental appraisal specifically
because so much of environmental value (habitat preservation, water quality) has no proxy market
at all, unlike, say, noise, which at least correlates with observable house prices (see
[revealed preference valuation](../revealed-preference-valuation/)).

Stated preference's core appeal — it can value literally anything, including goods nobody has ever
transacted in — is also the source of its credibility problem. Because respondents are not
actually spending money, contingent valuation surveys are vulnerable to hypothetical bias
(people overstate willingness-to-pay when there is no real budget constraint), embedding effects
(the same good is valued differently depending on what else is in the survey), and starting-point
bias in bidding-game designs. The 1993 NOAA panel on contingent valuation, convened after the
Exxon Valdez oil spill litigation, set out design standards — a binary "would you pay £X, yes/no"
referendum format rather than open-ended bidding, and mandatory reminders of the respondent's
actual budget constraint — that remain the reference standard for defensible surveys.

## The math

```
Contingent valuation (referendum format):
  Present a binary choice: "would you pay £X per year for outcome Y? yes/no"
  Vary X randomly across respondents.
  Fit willingness-to-pay as a function of the yes/no response rate at each X.

Mean WTP = area under the estimated demand curve
Aggregate value = Mean WTP × affected population

Choice experiment (discrete choice modeling) variant:
  Present respondents with repeated choices between bundles of attributes
  (including a cost attribute), estimate implicit prices for each
  non-cost attribute from the trade-offs respondents reveal.
```

The choice-experiment variant is generally preferred in current UK practice over single-question
contingent valuation because forcing respondents to trade off several attributes against cost
repeatedly produces more internally consistent, harder-to-game estimates than a single yes/no
question.

## Worked example

**National government**: Defra commissions a contingent valuation survey to value a river
water-quality improvement program. A referendum-format survey of 2,000 households finds 62% would
pay £40/year via a hypothetical water bill supplement, and the estimated demand curve gives a mean
willingness-to-pay of £28/year per household.

```
Mean WTP = £28/household/year
Households in catchment = 340,000
Aggregate annual value = £28 × 340,000 = £9.52m/year

Over a 20-year appraisal period at 3.5% discount rate (annuity factor ≈ 14.2):
PV(benefit) ≈ £9.52m × 14.2 ≈ £135m
```

This aggregate figure is then compared against the program's [social cost-benefit analysis](../social-cost-benefit-analysis/)
cost side. The Green Book requires this kind of stated-preference evidence to be reported alongside
its confidence interval and survey methodology, not as a bare point estimate, precisely because the
underlying number is more fragile than a market price.

**Charity**: a heritage trust surveys visitors and non-visitors about willingness-to-pay to prevent
the closure of a historic building neither group necessarily visits (its existence value). Because
non-visitors who will never see the building still report positive WTP, the survey captures
existence and bequest value that a simple visitor-fee revenue count (a revealed-preference proxy)
would completely miss — showing stated preference's genuine advantage where no market transaction
of any kind exists to reveal value.

## Software engineering connection

Stated preference methods rarely apply directly to software engineering work, but engineers
building citizen consultation platforms, budget-participation tools, or public survey
infrastructure are often building the instrument the economics depends on. Getting the survey
design details right — randomized bid amounts, binary referendum framing over open-ended
questions, explicit budget-constraint reminders — is not a UX nicety, it is what makes the
resulting valuation defensible under scrutiny; a poorly designed in-app survey can invalidate
months of subsequent economic analysis. See [citizen satisfaction metrics](../citizen-satisfaction-metrics/)
for the more general discipline of eliciting public opinion data that will bear analytical weight.

## Pitfalls

- **Open-ended "how much would you pay?" questions.** These are far more prone to strategic and
  anchoring bias than binary referendum framing; the NOAA panel's recommendation to use a
  referendum format exists precisely because open-ended elicitation performs badly.
- **No reminder of the respondent's actual budget constraint.** Without it, stated WTP routinely
  exceeds what the same people would pay when a real budget trade-off is in play — hypothetical
  bias.
- **Embedding effects ignored.** The same good valued alone versus valued as part of a larger
  bundle produces different WTP estimates; report what else, if anything, was in the survey frame.
- **Treating a single survey's point estimate as settled.** Green Book practice expects a range and
  a discussion of known biases, not a bare number carried forward into the cost-benefit table as
  if it were a market price.

## Sources

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
