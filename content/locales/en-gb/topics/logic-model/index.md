# Logic Model

A logic model is a linear diagram connecting inputs, activities, outputs, outcomes, and impact for
a programme, read left to right as an accountability chain: resources go in, activities happen,
outputs get produced, outcomes change for beneficiaries, and impact accrues at a wider or longer
timescale. It is the standard structure funders and auditors expect a programme to be reportable
against, and the forward-facing counterpart to a backward-mapped
[theory of change](../theory-of-change/).

## Why it matters

HM Treasury's Magenta Book specifies the logic model as a required element of programme evaluation
design, and funders such as the National Lottery Community Fund build their application and
reporting templates around exactly this five-column chain. Its value is that it forces a programme
to state, in one diagram, what it will spend, what it will do with it, what it will produce, and —
critically — what should change as a result, at a level of specificity that a paragraph of prose
tends to obscure. A logic model with a populated inputs and activities column but an empty or vague
outcomes column is diagnosable at a glance, which is precisely why funders ask for one.

## The maths

The logic model is a structural chain rather than a formula:

```
Inputs          Activities        Outputs             Outcomes              Impact
(resources      (what is done     (direct, countable   (change for           (long-term,
 committed)      with them)        products)            beneficiaries)        population-level
                                                                               or systemic change)
```

Each column should be more specific than the last: inputs are what you spend, activities are what
you do, outputs are what gets delivered regardless of effect, outcomes are what changes as a
result — the distinction covered in full in
[outcomes vs outputs](../outcomes-vs-outputs/) — and impact is the durable, often attributable-only-
in-part, long-run change.

## Worked example

**Local authority (digital debt advice service)**:

- Inputs: £180,000 annual budget, 4.0 FTE advisers, a case management system.
- Activities: outreach sessions, one-to-one debt advice appointments.
- Outputs: 900 appointments delivered; 750 debt and benefit plans issued.
- Outcomes: of clients reaching a 6-month follow-up, 60% (450 of 750) report reduced arrears,
  averaging a £1,200 reduction per client — £540,000 in aggregate arrears reduction.
- Impact: a measurable fall in homelessness applications from the service's client base over two
  years, only partly attributable to this service alongside other interventions (see
  [counterfactual analysis](../counterfactual-analysis/)).

**Charity (food bank referral partnership)**:

- Inputs: £45,000, 1.5 FTE coordinator, partnership agreements with 12 referral agencies.
- Activities: referral triage, parcel packing and distribution.
- Outputs: 5,000 food parcels distributed to 1,100 households.
- Outcomes: 68% of surveyed households (748 of 1,100) report improved food security at a 4-week
  follow-up call.
- Impact: contribution to reduced local crisis-service demand, evidenced only in aggregate area
  statistics, not attributable to this charity alone.

## Software engineering connection

The logic model is close to a literal data model for an outcomes system: inputs and activities are
operational data you already hold (spend, staffing, session logs); outputs are easy to instrument
because they are counted at the point of delivery; outcomes require deliberately designed follow-up
data collection (surveys, admin data linkage) that will not exist unless someone builds it; impact
usually requires linked, longitudinal, or population-level data beyond any one programme's systems.
Engineers building reporting tools should push commissioners to define outcome and impact
indicators at design time, rather than defaulting to an outputs-only dashboard because that is what
the transactional data already supports. See
[social return on investment](../social-return-on-investment/) for a method that values the
outcomes and impact columns specifically, and
[benefits realisation](../benefits-realisation/) for tracking whether the impact column was
actually delivered.

## Pitfalls

- **Stopping at outputs.** A dashboard that reports appointments delivered or parcels distributed
  and implies benefit is reporting activity, not results — see
  [outcomes vs outputs](../outcomes-vs-outputs/).
- **No stated causal link between columns.** A logic model states the chain but not why activities
  should produce outputs which should produce outcomes; that reasoning belongs in a
  [theory of change](../theory-of-change/), and a logic model without one behind it is untested.
- **Treating it as a one-off bid document.** Logic models produced only to satisfy a funding
  application and never updated stop reflecting what the programme actually does.
- **Attribution creep at the impact column.** Claiming population-level change as caused solely by
  one programme, without a counterfactual, overstates what the evidence supports.

## Sources

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
