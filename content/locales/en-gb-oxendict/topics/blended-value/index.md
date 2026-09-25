# Blended Value

Blended value is Jed Emerson's proposition that all organisational and investment activity
simultaneously creates value along three lines — economic, social, and environmental — and that
these are not three separate returns to be traded against each other but a single, inseparable
value proposition. There is no such thing, in Emerson's framing, as a purely financial return or a
purely social one; every pound spent, invested, or granted produces some blend of all three.

## Why it matters

Emerson set out the idea in "The Blended Value Proposition: Integrating Social and Financial
Returns" (California Management Review, 2003), written directly against the twentieth-century
convention of sorting capital into two silos — philanthropy, which was expected to produce social
return and forgive financial return entirely, and investment, which was expected to produce
financial return and treat social or environmental effects as an externality. Emerson's argument
was that this sorting was always a fiction: a grant that funds a poorly run organization destroys
value along all three lines, and a profitable business that pollutes a river destroys value along
all three lines too, whatever its shareholders' return looks like on paper.

The idea runs parallel to John Elkington's "triple bottom line" (people, planet, profit), coined
in 1994 and developed in his 1997 book "Cannibals with Forks," which pushed corporations to report
against social and environmental performance alongside financial performance. Blended value pushed
the same logic further into capital allocation itself, and it is the intellectual ancestor of the
impact investing field: the Global Impact Investing Network (GIIN), founded in 2009, exists
specifically to build the infrastructure — including the IRIS+ metrics catalogue, see
[grant outcomes reporting](../grant-outcomes-reporting/) — that lets an investor actually measure
the blend rather than assert it.

## The maths

Blended value is a framework, not a formula, and Emerson explicitly warned against reducing it to
simple addition of three scores. The structure it proposes:

```
Every unit of capital deployed (grant, investment, contract, purchase) produces:
  - an economic effect      (financial return, cost saved, revenue generated)
  - a social effect         (wellbeing, capability, equity change for people)
  - an environmental effect (natural capital protected, degraded, or restored)

These are not separately optimized and then summed. A decision that maximizes
the economic line while destroying the social line is not "blended value plus
a cost" — it is a net value-destroying decision, full stop.
```

In practice, organizations approximate the blend with a scorecard: named indicators against each
line, reported together, not netted into one number. This is the same instinct behind
[social return on investment](../social-return-on-investment/) (which does attempt monetized
netting) and [natural capital accounting](../natural-capital-accounting/) (which does the same
for the environmental line) — both are partial, single-line answers to the question blended value
poses in full.

## Worked example

An impact investor is choosing between two £500,000 loans:

- **Loan A**: to a social enterprise running a job-training café for ex-offenders, at 2% interest
  (below the 6% market rate for equivalent-risk lending), expected to place 40 people/year into
  sustained work.
- **Loan B**: a market-rate loan at 6% to a conventional retail business with no stated social or
  environmental objective.

A purely financial lens prefers B (6% > 2%). A blended value lens asks the investor to state all
three lines for both:

| | Economic (annual) | Social (annual) | Environmental |
|---|---|---|---|
| Loan A | £10,000 interest | 40 people placed into work; each place-year carries a plausible avoided-reoffending saving to the state, drawn from Ministry of Justice reoffending cost analyses | Neutral |
| Loan B | £30,000 interest | None stated | Neutral |

Loan A's blended return plainly dominates once the social line is priced, even though its
financial line alone loses to Loan B by £20,000 a year. Blended value does not tell the investor
to ignore the £20,000 gap — it tells them not to pretend it is the only number that exists.

## Software engineering connection

Reporting or portfolio-management software for foundations, impact funds, or local authority
commissioning teams is frequently built with a financial ledger as the primary data model and
social or environmental fields bolted on as free-text notes. Blended value implies the opposite
design: three first-class, equally structured value streams attached to every transaction or grant
record, each with its own unit, source, and confidence level, displayed together rather than
netted into a single misleadingly precise score. See
[social return on investment](../social-return-on-investment/) and
[public value scorecard](../public-value-scorecard/) for two structured ways to build that display
without collapsing the blend.

## Pitfalls

- **Summing the three lines into one number.** Emerson's own writing warns against this; a single
  blended figure hides which line is actually doing the work and invites cherry-picking.
- **Blend-washing.** Asserting a strong social or environmental line with no named indicator or
  measurement method, to justify a below-market financial return that would otherwise look like
  underperformance.
- **Ignoring negative blends.** A financially successful programme can have a negative social or
  environmental line; blended value requires reporting bad news on any line, not just good news on
  one.

## Sources

- Emerson J. "The Blended Value Proposition: Integrating Social and Financial Returns." California Management Review, 2003;45(4). <https://www.blendedvalue.org/>
- Elkington J. "Cannibals with Forks: The Triple Bottom Line of 21st Century Business." Capstone, 1997.
- Global Impact Investing Network (GIIN), About IRIS+. <https://iris.thegiin.org/about/>
