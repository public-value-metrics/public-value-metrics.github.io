# Displacement and Attribution

Displacement occurs when a programme's apparent benefit is achieved by taking activity or benefit
away from somewhere else, rather than creating something new — your win is someone else's loss.
Attribution is the related question of how much of an observed outcome your intervention can
genuinely claim credit for, when other actors and factors contributed too. Both are standard
adjustments in UK public-sector evaluation guidance, alongside deadweight and leakage, and both are
routinely skipped by impact claims that look far stronger than they are.

## Why it matters

A local authority's business-grant scheme that helps 50 shops relocate into a regeneration zone can
report "50 businesses supported, 200 jobs created" — but if those businesses simply moved from a
neighbouring high street rather than expanding, the jobs were displaced, not created, and the
borough-wide (or region-wide) net effect could be close to zero. HM Treasury's Magenta Book and the
long-standing Additionality Guide treat displacement as a required deduction precisely because local
success stories are common even when they produce no net national or regional benefit — value has
simply moved, often to the disadvantage of the area or actors that lost it. Structural-funds
evaluation guidance (used for former EU Regional Development Fund programmes and their domestic
successors, such as the UK Shared Prosperity Fund) formalizes this at three spatial scales: local
displacement (within a town), regional displacement (within a region), and national displacement
(across the UK), because an intervention can be additional at one scale while being pure displacement
at a wider one — a jobs programme that draws workers from a neighbouring town is nationally neutral
even if it looks like a local success.

Attribution is the sibling problem in partnership-heavy delivery, which is now the norm in social-
sector and cross-agency public service work. When three organisations jointly deliver a
homelessness-prevention service, each organisation's annual report may independently claim credit
for the same reduction in rough sleeping — summed across reports, the claimed impact can exceed the
observed real-world change, sometimes by several multiples. The Magenta Book's guidance on
contribution analysis exists specifically because randomized attribution to a single actor is often
impossible in multi-agency delivery, and the honest answer is frequently "we contributed to this
outcome" rather than "we caused this outcome."

## The maths

Displacement as part of the standard net-impact sequence (see
[additionality and deadweight](../additionality-and-deadweight/) for the full chain):

```
Net additional impact = Gross outcome − Deadweight − Displacement − Leakage, × Multiplier

Displacement rate = benefit/activity diverted from elsewhere
                     / total gross benefit/activity observed
```

Attribution, where multiple actors contribute to one outcome, is typically expressed as a
contribution share rather than a precise percentage, because it cannot usually be measured with the
same rigour as displacement:

```
Attributable share ≈ f(strength of causal contribution, other actors' contributions,
                        external/contextual factors)

Claimed impact should never exceed:
  Σ (each partner's attributable share) ≤ 100% of the total observed outcome
```

## Worked example

**Regeneration grant**: a council's high-street grant scheme reports 200 new retail jobs created in
the funded zone. Follow-up survey research finds that 60 of those jobs came from businesses relocating
from a neighbouring, unfunded high street within the same borough, and a further 30 came from
national chains opening branches that would have opened somewhere in the region regardless of the
grant.

```
Gross jobs claimed = 200
Local displacement = 60 (moved within the borough)
Regional displacement = 30 (would have opened regionally anyway)

Net additional jobs (borough level) = 200 − 60 = 140
Net additional jobs (regional level) = 200 − 60 − 30 = 110
```

The honest headline depends on the geographic scale the funder cares about — a Treasury business case
evaluated at national or regional level should use 110, not the borough-level 140, and certainly not
the raw 200.

**Multi-agency homelessness service**: three partner organisations (a council, a housing charity, and
a health trust) jointly deliver a rough-sleeping reduction service. Rough sleeping in the area fell by
30 people over the year. Each organisation's individual annual report claims "we reduced rough
sleeping by 30" — summed, the three reports claim 90 people helped, three times the actual reduction.
A contribution analysis assigning each partner a share (say, 40% council, 35% charity, 25% health
trust, based on documented role and independent assessment) would report 12, 10.5, and 7.5 respectively,
summing correctly to the observed 30.

## Software engineering connection

Displacement and attribution shape how impact-tracking and outcomes-reporting systems should be
designed for multi-site or multi-partner delivery:

- Geographic and organisational scope should be explicit, first-class fields in any impact dashboard
  — a figure reported "for the borough" and the same figure reported "for the region" are different
  numbers, and a system that conflates them will produce numbers that cannot be reconciled at
  portfolio level.
- Where multiple partners deliver jointly, an outcomes system should record contribution shares (or
  at minimum flag joint attribution) rather than letting each partner's reporting module independently
  claim 100% of a shared outcome — otherwise portfolio-level roll-ups will overstate total impact,
  sometimes badly.
- This connects to [social return on investment](../social-return-on-investment/) and
  [grant outcomes reporting](../grant-outcomes-reporting/): an SROI or IRIS+ calculation that
  ignores displacement or over-attributes shared outcomes will produce an inflated ratio that does
  not survive audit or replication.

## Pitfalls

- **Reporting local success without checking wider displacement.** A programme can look highly
  successful at the smallest reporting scale while being neutral or even negative at a wider one;
  always state the geographic scale the net figure applies to.
- **Letting every partner in a joint delivery claim full credit.** Unless contribution shares are
  agreed and documented, roll-up reporting across partners will overstate total impact — check that
  partner-level claims sum to no more than the observed total.
- **Treating attribution as a precise percentage when it is really a judgement.** Contribution
  analysis, unlike a randomized counterfactual, produces a defensible estimate, not a measured fact;
  present it with appropriate uncertainty rather than false precision.
- **Ignoring displacement in market-facing interventions.** Business support, employment schemes, and
  place-based regeneration are the classic high-displacement categories; treat displacement checks as
  mandatory for these, not optional.

## Sources

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
