# Effective Altruism Cost-Effectiveness

Effective altruism (EA) cost-effectiveness reasoning ranks charitable interventions by the amount
of good — most often expressed as lives saved, or health gained, per dollar spent — and directs
money toward whichever intervention buys the most good at the margin. GiveWell is the field's most
influential practitioner: it publishes explicit, updated cost-per-life-saved and cost-per-outcome
estimates for a small list of "top charities," and recommends donors give to whichever currently
has room for more funding at the best rate.

## Why it matters

GiveWell states cost-effectiveness as the leading criterion in its published methodology: it looks
for evidence-backed interventions, estimates their cost-effectiveness in a common unit, and ranks
across completely unrelated causes — bednets against malaria, vitamin A supplementation, cash
transfers, vaccine incentive payments — on that single axis. This is a direct import of
QALY/DALY-style reasoning from health economics into philanthropy: just as a health system asks
"how many QALYs per pound at the margin," GiveWell asks "how many lives, or life-years, per dollar
at the margin," and treats causes as substitutable once converted into that common unit. See
[cost-effectiveness analysis in government](../cost-effectiveness-analysis-in-government/) for the
public-sector cousin of this reasoning framework.

The most cited GiveWell figure concerns the Against Malaria Foundation (AMF), which distributes
insecticide-treated bednets. In GiveWell's published worked example (drawn from 2020 funding
data), roughly $4,500 funded enough nets to avert one death, after accounting for imperfect net
usage, baseline mortality without nets, and adjustment for funging — the possibility that AMF
would have received some of that funding from other donors regardless. GiveWell is explicit that
this figure moves over time and across geographies as malaria prevalence, net costs, and funding
gaps change, and that the cost to save a life is generally expected to rise over time as the
cheapest opportunities are taken up first; it is a worked illustration of the method, not a fixed
price.

## The maths

```
Cost-effectiveness = Cost of intervention / Units of good produced
                    (e.g. $ per life saved, $ per DALY averted, $ per QALY)

GiveWell's chain for a bednet programme, illustratively:
  $ per net purchased and delivered
    ÷ share of nets actually used
    ÷ people protected per net
    × baseline annual mortality without nets
    × reduction in mortality attributable to net use (from RCT evidence)
    × years of protection per net
    ÷ adjustment for funging (money displacing other donors' funding)
  = $ per life saved (net of counterfactual funding effects)
```

This chain matters because each step is a place cost-effectiveness estimates commonly go wrong —
see the pitfalls below — and because it makes explicit that "cost per life saved" is never a raw
observed price; it is a modelled estimate built from several separately uncertain inputs.

## Worked example

Two hypothetical interventions, both evidence-backed, competing for the same marginal £100,000:

- **Bednets (AMF-style)**: roughly $4,500 per life saved on GiveWell's published worked example
  drawn from 2020 data, i.e. very roughly 20 lives saved per £100,000 depending on the exchange
  rate and year used.
- **Deworming programme**: no plausible mortality benefit at all, but strong evidence of long-run
  income gains from childhood deworming; GiveWell values it in income-gain terms, not lives saved,
  which makes it hard to compare directly against bednets without a shared unit. GiveWell uses an
  explicit "moral weights" framework to convert both into one internal unit for ranking.

The EA method's discipline is forcing this comparison into the open rather than funding both
because both "sound good." See [social return on investment](../social-return-on-investment/) for
the equivalent forcing function used by UK social enterprises and local commissioners, which asks
the same question — what is the best return per pound — in a monetised-value idiom rather than a
lives/DALYs idiom.

## Software engineering connection

Engineers building donor platforms, grant-matching tools, or impact dashboards for EA-aligned
funders (Open Philanthropy, GiveWell itself, effective giving platforms such as Giving What We
Can) need to represent cost-effectiveness estimates as ranges with stated assumptions, not single
numbers — the underlying model has several multiplicative uncertain inputs, and collapsing that to
one figure on a dashboard misrepresents the confidence GiveWell itself states. Version each
estimate by publication date; GiveWell revises its numbers, sometimes substantially, as new RCT
evidence or funding-gap data arrives, and a platform that caches an old figure silently becomes
wrong.

## Pitfalls

- **Treating a cost-effectiveness estimate as a fixed price.** It is a model output with several
  uncertain multiplicative inputs (usage rates, baseline mortality, funging adjustment); state the
  date and version.
- **Ignoring funging/displacement.** Funding an organisation that would have received the money
  from another donor anyway buys less counterfactual good than the headline suggests — see
  [additionality and deadweight](../additionality-and-deadweight/) and
  [displacement and attribution](../displacement-and-attribution/).
- **Comparing across incompatible units without conversion.** "Lives saved" and "income gained"
  are not directly comparable without an explicit moral-weights framework; presenting them side by
  side as if they were is a category error.
- **Cause-area tunnel vision.** Ranking only within a cause area (e.g. only global health charities)
  and calling the winner "the most cost-effective charity" overstates the claim; GiveWell's
  cross-cause ranking is deliberately narrow (global health and wellbeing), not universal.

## Sources

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
