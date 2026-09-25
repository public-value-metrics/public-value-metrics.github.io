# Social capital metrics

Social capital metrics quantify the networks, trust, and civic participation that let communities
and institutions function efficiently — the "connective tissue" that has no line on any balance
sheet but that visibly collapses cost and friction when present, and visibly raises it when absent.
The modern framing comes from Robert Putnam's "Bowling Alone" (2000), which distinguished bonding
capital (ties within a similar group) from bridging capital (ties across different groups); the
UK's Office for National Statistics has since built a standing indicator set to track it
nationally.

## Why it matters

Putnam's central empirical claim — documented through declining US civic-association membership,
church attendance, and union participation across the late twentieth century — was that social
capital predicts outcomes conventional economics struggles to explain: lower crime, better
child welfare, more effective local government, faster economic recovery after shocks. Bonding
capital (strong ties within a tight-knit group) is good for mutual support but can calcify into
insularity; bridging capital (weaker ties across different groups) is what typically correlates
with access to opportunity, information flow, and institutional trust. The ONS took this
seriously enough to build a national indicator framework — its "Social Capital in the UK" series
(<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>)
tracks four pillars: personal relationships, social network support, civic engagement, and trust
and cooperative norms, each built from established survey questions (Community Life Survey,
Understanding Society). For public-sector digital services, social capital is doubly relevant: it
is both an outcome some programmes are trying to build (community resilience funding, social
prescribing) and an input that determines how well a service will actually be adopted — a service
rolled into a high-trust, well-networked community will spread through word of mouth in a way an
identical service in a low-trust area will not.

## The maths

```
ONS four-pillar framework (indicators, illustrative):

Personal relationships:      % with someone to rely on in a crisis
Social network support:      % who could borrow money from friends/family if needed
Civic engagement:            % who volunteered or took civic action in past 12 months
Trust and cooperative norms: % agreeing "most people can be trusted"

No single ONS composite score is published — the pillars are reported
separately, deliberately, because aggregating them into one index would
hide which specific pillar is weak.

Putnam's bonding/bridging split (framework, not a formula):
  bonding capital ≈ density of ties within a homogeneous group
  bridging capital ≈ frequency/strength of ties across distinct groups
```

## Worked example

**Neighbourhood social capital snapshot**: a Community Life Survey-style poll of a local area
finds 78% have someone to rely on in a crisis (personal relationships), 61% could borrow money if
needed (network support), 24% volunteered in the past year (civic engagement), and 41% agree "most
people can be trusted" (trust and norms) — versus national averages of roughly 85%, 70%, 30%, and
45% respectively (illustrative, calibrate against the current ONS bulletin). The area under-indexes
on every pillar but most sharply on trust (41% vs. 45% national, a 4-point gap) and civic
engagement (24% vs. 30%, a 6-point gap) — flagging civic engagement, not trust, as the largest
relative deficit worth targeted investment (a community grants programme, say) rather than a
generic "build trust" initiative.

**Bonding vs. bridging, service design**: a jobs programme in a tight-knit community finds referrals
travel fast within the community (high bonding capital: word spreads within days) but the
programme struggles to reach residents outside that network (low bridging capital: uptake outside
the core community is near zero after months). The fix implied is not "more marketing" but
deliberately building bridging ties — partnering with organisations that sit *outside* the
existing network, since bonding capital alone cannot solve a bridging-capital problem.

## Software engineering connection

- Digital platforms that route mutual aid, volunteering, or community grants (a "local
  connector" service, for instance) are literally building bridging-capital infrastructure; their
  success metric should be network diversity of connections made, not just transaction count — see
  [government-as-a-platform](../government-as-a-platform/) for the broader pattern of
  infrastructure that others build value on top of.
- Where a programme's theory of change explicitly targets social capital as an outcome (a
  community resilience fund, a social prescribing service), its [theory of change](../theory-of-change/)
  and [logic model](../logic-model/) should name the specific pillar (trust, civic engagement,
  network support) it expects to move, rather than an undifferentiated "build community" outcome
  that can't be measured against the ONS baseline.
- Social capital indicators are a useful equity lens alongside the
  [Index of Multiple Deprivation](../index-of-multiple-deprivation/): an area can be
  income-deprived but socially rich, or vice versa, and the two point to very different
  interventions.

## Pitfalls

- **Collapsing the four ONS pillars into one composite score** — ONS deliberately does not do
  this; a single number hides which specific pillar is driving a low reading, and averaging masks
  a community that is high-trust but civically disengaged versus one that is the reverse.
- **Assuming social capital is always good** — dense bonding capital in an insular group can
  actively resist outside institutions (including government services); Putnam's own analysis
  treats bonding and bridging as different goods with different, sometimes conflicting, effects.
- **Using survey-based social capital measures as a real-time operational metric** — the underlying
  surveys (Community Life Survey, Understanding Society) run annually or less often; treat social
  capital data as a slow-moving contextual indicator, not something a service dashboard can update
  weekly.

## Sources

- Putnam RD. "Bowling Alone: The Collapse and Revival of American Community." Simon & Schuster,
  2000.
- ONS. "Social capital in the UK: bulletins."
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. "Community Life Survey" (annual).
