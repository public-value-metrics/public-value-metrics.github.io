# Counterfactual Analysis

A counterfactual is an estimate of what would have happened in the absence of an intervention.
Without one, an observed change after a program launches cannot be distinguished from a change that
would have happened anyway — no counterfactual, no evidence of effect, however compelling the
before-and-after numbers look. HM Treasury's Magenta Book treats constructing a credible counterfactual
as the central methodological task of impact evaluation, more important than any other single design
choice.

## Why it matters

"Crime fell 15% in the year after we introduced the program" is not evidence the program worked
unless you know what would have happened to crime without it — crime might have fallen 20% anyway due
to unrelated economic or demographic trends, meaning the program actually made things worse relative
to the counterfactual, despite the raw number improving. This is the single most common analytical
error in public-sector and social-sector impact claims: mistaking a before/after comparison for
evidence of causation. The Magenta Book is explicit that impact evaluation exists to answer a
counterfactual question — "what difference did this intervention make?" — and that answering it
requires estimating, not just describing, the world that did not happen.

Different methods construct the counterfactual with different degrees of confidence, and government
evaluation guidance ranks them accordingly. Randomized controlled trials (RCTs), where individuals or
areas are randomly assigned to receive an intervention or not, produce the strongest counterfactual
because randomization ensures the treatment and control groups differ, on average, only in receiving
the intervention. The Cabinet Office and What Works Network have promoted RCTs across UK public
policy since the 2012 "Test, Learn, Adapt" report by the Behavioural Insights Team, precisely because
weaker designs are vulnerable to confounding — the observed difference may reflect who chose to
participate, not the effect of the program. Where randomization is impractical or unethical (as it
often is for programs with a statutory entitlement, or for whole-population policy changes), the
Magenta Book sets out an explicit hierarchy of weaker but still useful alternatives: matched
comparison groups, difference-in-differences designs, regression discontinuity around eligibility
thresholds, and, as a last resort, simple before/after comparison — clearly flagged as the weakest
form of evidence, prone to confusing the effect of the program with the effect of everything else
that changed at the same time.

## The math

The counterfactual framing, applicable across all methods:

```
Estimated impact = Outcome(with intervention) − Outcome(counterfactual: without intervention)

NOT:
Estimated impact ≠ Outcome(after) − Outcome(before)   [confounds time with treatment]
```

Difference-in-differences, one of the most common quasi-experimental designs in government
evaluation, isolates the treatment effect by subtracting the comparison group's own before/after
change:

```
DiD estimate = [Outcome(treated, after) − Outcome(treated, before)]
             − [Outcome(comparison, after) − Outcome(comparison, before)]
```

This removes any trend common to both groups (e.g. a national economic shift affecting everyone),
leaving only the differential change attributable to the intervention.

## Worked example

**Employment program, before/after (weak design)**: a job-support scheme reports that participant
employment rose from 40% to 55% over a year — a naïve conclusion of "+15 percentage points due to the
program."

**Same program, difference-in-differences (stronger design)**: a matched comparison group of similar
non-participants, drawn from the same local labor market, shows employment rising from 38% to 47%
over the same year (a national economic recovery was underway).

```
Treated group change:    55% − 40% = +15 percentage points
Comparison group change: 47% − 38% = +9 percentage points

DiD estimate (true program effect) = 15 − 9 = +6 percentage points
```

The honest attributable effect is 6 percentage points, not 15 — more than half of the apparent
before/after improvement would have happened regardless of the program, driven by the same economic
recovery lifting the comparison group.

**Regression discontinuity, eligibility threshold**: a grant scheme is available only to businesses
with fewer than 50 employees. Comparing outcomes for businesses just below the threshold (45–49
employees, eligible) against businesses just above it (50–54 employees, ineligible) provides a
credible counterfactual because businesses on either side of an arbitrary administrative cut-off are
otherwise similar — the threshold, not any underlying business characteristic, determines eligibility.
A £2,000 average outcome difference between the two groups, observed only at the threshold, is
attributable to the grant with far more confidence than a simple comparison of all eligible versus all
ineligible businesses (who differ systematically in size).

## Software engineering connection

Counterfactual thinking should shape how impact-tracking systems and evaluation pipelines for
government and social-sector software are designed:

- Build comparison-group capture into a system from the outset — recording who was eligible but not
  enrolled, or a matched non-participant cohort — rather than retrofitting it after a program has
  already run and only before/after data exists.
- Where randomization is feasible (a phased rollout, a digital service enabled for some users before
  others), instrument the system to preserve random assignment as a queryable field; a phased
  rollout accidentally destroys its own evaluation value if the assignment order is not logged.
- This is the foundational method behind [impact evaluation methods](../impact-evaluation-methods/)
  and is what separates it from [impact evaluation vs process evaluation](../impact-evaluation-vs-process-evaluation/),
  the latter of which asks whether a program was delivered as intended rather than whether it
  caused an effect.
- [Additionality and deadweight](../additionality-and-deadweight/) and
  [displacement and attribution](../displacement-and-attribution/) are both, at root, counterfactual
  questions — deadweight is "what would this specific outcome have been without the intervention",
  applied at the level of adjustment rather than full evaluation design.

## Pitfalls

- **Treating before/after as evidence of causation.** This is the most common and most consequential
  error in public and social-sector impact reporting; a before/after change confounds the program's
  effect with every other thing that changed over the same period.
- **Using a comparison group that differs systematically from the treated group.** A matched
  comparison group must be genuinely similar on relevant characteristics (see
  [counterfactual analysis](../counterfactual-analysis/) methods hierarchy in the Magenta Book);
  comparing program participants (who opted in, and are often more motivated) against non-
  participants (who did not) risks selection bias masquerading as program effect.
- **Destroying randomization opportunities through poor delivery design.** A phased or randomized
  rollout only preserves its evaluation value if assignment is genuinely random and recorded — letting
  local managers choose who goes first defeats the purpose.
- **Over-claiming precision from a weak design.** A before/after estimate should be presented as
  indicative, not as a measured effect size; the Magenta Book's evidence hierarchy exists so that the
  strength of a claim matches the strength of the design that produced it.

## Sources

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
