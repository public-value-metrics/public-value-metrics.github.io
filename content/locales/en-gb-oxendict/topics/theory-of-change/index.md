# Theory of Change

A theory of change is an explicit, backward-mapped causal pathway from a long-term goal to the
preconditions and activities that must exist for it to be achieved, along with the assumptions
connecting each link. It is built by starting at the outcome you want and asking "what has to be
true immediately before this, for this to happen?", repeatedly, until you reach activities you can
actually deliver — which is the opposite direction to a [logic model](../logic-model/), and why the
two are complementary rather than interchangeable.

## Why it matters

The backward-mapping method was formalized by the Center for Theory of Change and ActKnowledge,
building on evaluator Carol Weiss's work on making programme assumptions explicit so they could be
tested rather than taken on faith. UK grant evaluation has absorbed this directly: HM Treasury's
Magenta Book treats a theory of change as the starting point for any evaluation design, and funders
such as the National Lottery Community Fund require applicants to articulate one before they will
fund a proposal. The reason it matters to a software engineer is that a theory of change is the
document that should determine what your system needs to measure — if the causal chain says
"benefits take-up depends on claimants receiving a personalized calculation", that is a testable
claim your product can be instrumented to evidence, or refute.

## The maths

A theory of change is structural rather than numeric. Each link should carry both an assumption and
an indicator that could show the assumption is false:

```
Long-term outcome (the goal)
  ↑ precondition + assumption + indicator
Intermediate outcome N
  ↑ precondition + assumption + indicator
  ...
Intermediate outcome 1
  ↑ precondition + assumption + indicator
Activities / interventions
  ↑ resources committed
Inputs
```

This structure feeds directly into [impact evaluation methods](../impact-evaluation-methods/),
which exist to test whether the assumptions at each link actually hold, and into
[counterfactual analysis](../counterfactual-analysis/), which tests whether the long-term outcome
would have happened anyway.

## Worked example

**Local authority (homelessness prevention)**: long-term outcome is sustained tenancies at 12
months for households at risk of eviction.

- Precondition: households have a realistic, affordable repayment plan for arrears.
  Assumption: caseworker-negotiated plans are more sustainable than court-ordered ones.
  Indicator: % of plans still active at 6 months.
- Precondition: households claim the benefits they are entitled to.
  Assumption: a digital benefits calculator increases correct claims versus paper forms.
  Indicator: claim accuracy rate, compared pre/post tool rollout.
- Activities: caseworker triage, digital benefits calculator, arrears negotiation.

In a pilot cohort of 120 households, the benefits-calculator assumption held for 102 households
(85%) who went on to claim correctly, evidenced by a subsequent process evaluation — giving the
programme team evidence for that specific link rather than a single end-to-end claim about
homelessness prevented.

**Charity (youth mentoring)**: long-term outcome is reduced school exclusion. Backward-mapped
preconditions: improved emotional regulation → trusted one-to-one relationship with a mentor →
consistent weekly contact over two terms. The theory makes explicit that missing the "consistent
weekly contact" precondition (say, due to mentor turnover) predicts the outcome will not follow,
which is a testable, falsifiable claim rather than a hope.

## Software engineering connection

A theory of change should shape a product's data model before a single dashboard is built:
identify which links need an indicator, and instrument for those specifically, rather than
defaulting to whatever is easiest to log. It also disciplines roadmap conversations — a feature
that does not map to any link in the chain is not obviously worth building. See
[logic model](../logic-model/) for the forward-facing accountability chain built once the theory is
agreed, [social return on investment](../social-return-on-investment/) for a method that depends on
a theory of change to scope which outcomes to value, and
[outcomes vs outputs](../outcomes-vs-outputs/) for the distinction the intermediate-outcome links
depend on.

## Pitfalls

- **Confusing it with a logic model.** A theory of change is causal and explanatory (why we
  believe this works); a logic model is sequential and descriptive (what happens in what order).
  Producing only one leaves either the "why" or the accountability trail missing.
- **Leaving assumptions implicit.** The whole value of backward mapping is surfacing testable
  assumptions; a theory of change that just lists boxes and arrows without naming what could make
  each link false is decoration.
- **Building it once and shelving it.** A theory of change written for a funding bid and never
  revisited stops being useful the moment evidence starts contradicting a link.
- **Skipping stakeholder input.** A theory of change built entirely by commissioners without input
  from frontline staff or beneficiaries tends to encode assumptions nobody delivering the service
  actually believes.

## Sources

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
