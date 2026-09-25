# Impact Evaluation vs Process Evaluation

Impact evaluation asks whether a program caused its intended outcomes. Process evaluation asks
whether the program was actually delivered as designed — to whom, at what dose, and with what
barriers or facilitators along the way. These are different questions requiring different methods,
and HM Treasury's Magenta Book treats commissioning both together as standard practice, because a
weak or null impact result is uninterpretable on its own: it cannot tell you whether the
program's underlying theory was wrong, or whether a good theory was simply never properly
delivered.

## Why it matters

Government evaluations have repeatedly found no measurable effect from a program while having no
process evaluation to explain why — leaving commissioners unable to distinguish "this idea doesn't
work" (theory failure) from "this idea was never actually tried properly" (implementation failure).
The Medical Research Council's guidance on process evaluation of complex interventions, published in
the BMJ in 2015 and widely cited alongside the Magenta Book, formalized fidelity, dose, and reach as
the core things a process evaluation must measure. Commissioning an impact evaluation without a
process evaluation risks abandoning a genuinely sound program design because it was delivered to
half the intended population at a fraction of the intended intensity — a mistake that a systems
builder is well placed to prevent, because delivery fidelity is exactly what operational data
systems can capture in near-real time.

## The math

```
Process evaluation asks:
 - Was it delivered to the target population, at the planned dose/intensity?
 - Did delivery match the logic model / theory of change design?
 - What barriers or facilitators affected delivery?
 Methods: fidelity checks against pre-specified thresholds, case studies, interviews,
          administrative delivery data.

Impact evaluation asks:
 - What changed, and how much of that change is attributable to the program?
 Methods: RCT, DiD, PSM, RDD — see impact-evaluation-methods — against a counterfactual.

Combined diagnosis:
 No effect  + high fidelity  → theory failure: the model itself did not produce the outcome
 No effect  + low fidelity   → implementation failure: the model was never properly tested
 Effect found + high fidelity → replicate with confidence
 Effect found + low fidelity  → investigate further: the effect may be fragile or site-specific
```

## Worked example

**Local authority (parenting program)**: an impact evaluation using difference-in-differences
finds a +2 percentage point change in a child wellbeing measure — not statistically significant.
The process evaluation, run alongside it, finds the program reached only 210 of the 500 families
targeted (42% reach), and of those, only 95 completed the pre-specified fidelity threshold of 75%+
of sessions attended — 19% of the original planned reach. Conclusion: the weak impact result is
consistent with an implementation failure, not evidence the program model doesn't work; the
appropriate response is fixing the referral pathway that caused the 58% drop-off, not abandoning
the program design.

**Charity (digital literacy program)**: an impact evaluation finds a strong effect (+18 percentage
points on a digital confidence score), and a parallel process evaluation confirms 92% fidelity to
the planned curriculum across all 12 delivery sites. Combined, the funder can scale the program
with confidence, because the effect is shown to hold consistently rather than being the product of
one unusually good site.

## Software engineering connection

Process evaluation data is exactly what delivery systems are well placed to capture: attendance
against plan, session dosage, and drop-off at each stage of a referral or enrollment funnel — the
same funnel analytics engineers already build for product features, applied to a social
program's delivery pipeline instead. Feeding fidelity and reach metrics to program managers in
near-real time, rather than waiting for an end-of-grant evaluation, lets a broken referral pathway
get fixed mid-program instead of being discovered only once the funding period has ended. See
[impact evaluation methods](../impact-evaluation-methods/) for the causal designs process
evaluation is paired with, [theory of change](../theory-of-change/) and
[logic model](../logic-model/) for the design the process evaluation checks fidelity against, and
[benefits realization](../benefits-realization/) for tracking delivery through to the outcomes
that were promised.

## Pitfalls

- **Commissioning impact evaluation alone.** A null or weak result then cannot be interpreted as
  theory failure or implementation failure, which is precisely the distinction that matters for
  deciding what to do next.
- **Treating process evaluation as a soft add-on.** It needs the same rigour and pre-specified
  fidelity criteria as the impact design, or it collapses into anecdote when the results come in.
- **Confusing "on time and on budget" with "delivered as designed".** Process evaluation checks
  fidelity to the model — dose, target group, content — not project management RAG status.
- **Not pre-registering fidelity thresholds.** Deciding after the fact what counts as "sufficient
  dose" makes any explanation of a disappointing impact result look like post-hoc excuse-making.

## Sources

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, program evaluation reports. <https://www.nao.org.uk/>
