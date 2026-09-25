# Public Value

Public value is the worth that a government or social-sector organization creates for citizens
collectively — not just the outputs it produces or the money it spends, but whether society is
better off because the organization exists and acted as it did. Mark Moore's 1995 "strategic
triangle" is the standard test: a public initiative is justified only when it is *legitimate and
supported*, *substantively valuable*, and *operationally deliverable*, all three at once.

## Why it matters

Private-sector value is relatively easy to price: revenue minus cost, adjudicated by customers who
can walk away. Public value has no equivalent market signal. A prison service, a tax authority, and
a child-protection team all produce things citizens cannot simply decline to buy, and the "customer"
(the taxpayer, the offender, the child) is often not the same person as the political principal who
authorizes the budget. Moore's *Creating Public Value: Strategic Management in Government* (Harvard
University Press, 1995) supplies the missing discipline: a manager should be able to state (1) what
public value their initiative creates, (2) where their legitimacy and funding to pursue it comes
from — a minister, a council, a mandate, a grant — and (3) whether their organization can actually
deliver it with the people, technology, and processes at hand. A program that scores well on only
one or two legs of the triangle is not yet justified, however well-intentioned.

This matters practically because most public-sector software failures are not technology failures.
A system can be technically excellent and operationally deliverable and still fail because nobody
in the legitimizing environment — ministers, oversight committees, the public — actually wanted the
thing it optimizes for. The Universal Credit digital service and the NHS National Program for IT
are both cited in UK public-administration literature as cases where operational and legitimacy
legs of the triangle were out of step with the mission leg.

## The math

Public value is a framework, not a formula, but it structures otherwise-vague investment cases into
three testable questions:

```
Strategic triangle test — proceed only if all three hold:

1. Legitimacy and support: Who has authorized this, and does the authorizing
   environment (legislature, minister, council, board, public opinion) still
   back it as resources are committed?

2. Public value: What specific, describable good does this produce for
   citizens or society — safety, health, opportunity, trust, fairness —
   and for whom?

3. Operational capacity: Can the organization actually deliver it with
   current staff, technology, partners, and legal authority — or a
   credible plan to acquire them?
```

A weak initiative typically fails at least one leg: technically deliverable but with no mandate
(a data-sharing pilot nobody signed off); popular but undeliverable (a promised digital service with
no engineering capacity); or authorized and deliverable but value-empty (a dashboard nobody uses).

## Worked example

**Local authority**: a council digital team proposes an AI triage tool for housing benefit claims.

- *Legitimacy*: the council's cabinet has approved a digital-first strategy, but the elected members
  responsible for social security have not signed off automated decision-making specifically — a gap,
  not a green light.
- *Public value*: faster processing (claimed benefit: 10 days to 2 days) is real value only if
  claimants are not wrongly refused; the value claim must include accuracy, not just speed.
- *Operational capacity*: the council has one data scientist and no model-monitoring process, so the
  claimed 2-day turnaround is not currently deliverable at the stated error rate.

Two of three legs fail. Moore's framework says: do not proceed as scoped — first secure explicit
authorization for automated decisions and build monitoring capacity, or the "public value" claimed
in the business case is fictional.

**Central government**: a tax authority's online filing service has strong legitimacy (statutory
mandate) and strong operational capacity (an existing team ships reliably) but weak public value if
uptake is low because the digitally excluded — see [digital inclusion](../digital-inclusion/) —
are pushed into a channel they cannot use. The triangle exposes what a delivery-only dashboard would
hide.

## Software engineering connection

Public value is the umbrella concept this whole repository sits under: [value for money](../value-for-money/)
gives the economy/efficiency/effectiveness test for whether resources were well used;
[opportunity cost in public spending](../opportunity-cost-in-public-spending/) prices what else the
money could have done; and [additionality and deadweight](../additionality-and-deadweight/),
[displacement and attribution](../displacement-and-attribution/), and
[counterfactual analysis](../counterfactual-analysis/) together test whether the claimed value is
real rather than assumed. For engineers, the strategic triangle is a useful pre-mortem for any
public-sector product decision:

- Before scoping a feature, ask who authorized it and whether that authorization still holds — a
  feature built for a minister who has since moved on may have silently lost its legitimacy leg.
- Treat "can we build it" and "should we build it" as genuinely separate questions; engineering
  capacity answers only the third leg of the triangle.
- Product requirements documents for public services should state the public value claim explicitly,
  not just the user story, because user value and public value are not always the same thing (see
  [outcomes vs outputs](../outcomes-vs-outputs/)).

## Pitfalls

- **Treating operational capacity as sufficient justification.** "We can build it" answers only one
  leg of the triangle; teams with strong delivery capability routinely ship things nobody authorized
  wanting and that create no describable public good.
- **Conflating legitimacy with legality.** A program can be lawful and still lack the political and
  public support needed to sustain it through a difficult delivery phase; legal cover is not the same
  as a mandate.
- **Assuming public value is whatever the commissioning department says it is.** Moore's model
  requires the value claim to be testable against citizens' actual interests, not merely asserted by
  the funder — otherwise the framework collapses into self-certification.

## Sources

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press,
  1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
