# Trust and Legitimacy Metrics

Legitimacy and support is one of the three legs of Mark Moore's "strategic triangle" in
*Creating Public Value* (1995) — alongside public value itself and operational capacity — and it
is the leg most often left unmeasured, because unlike a budget or an output count, legitimacy has
no obvious single number attached to it. Trust and legitimacy metrics are the family of proxy
measures governments use to fill that gap: institutional trust surveys, oversight-body confidence
ratings, complaint and appeals data, and political/legislative support indicators.

## Why it matters

Moore's argument is that a public manager who delivers real value but loses political and public
legitimacy will eventually lose the authorizing environment needed to keep delivering it — funding
gets cut, mandates get narrowed, and the service is starved regardless of how good its outcomes
are. Legitimacy is therefore not a public-relations afterthought bolted onto a delivery
scorecard; it is a load-bearing input to whether the mission can continue at all, which is why it
sits as a co-equal perspective in a [public value scorecard](../public-value-scorecard/) rather
than a footnote. The OECD's "Trust in Government" survey program is the leading cross-national
attempt to quantify this: it tracks the share of citizens across OECD member states who say they
have confidence in their national government, and its long-run data shows trust is highly
sensitive to shocks — both the 2008 financial crisis and the COVID-19 pandemic produced sharp
national-level swings, often followed by only partial recovery, with the OECD's analysis
consistently finding that perceived *competence* (does government deliver what it says it will)
and perceived *fairness/integrity* (is government seen to act without corruption or favouritism)
are the two strongest drivers of the trust figure, distinct from satisfaction with any single
transaction. Governments increasingly try to operationalize legitimacy at a more granular level
too — the UK's independent regulators and inspectorates (the National Audit Office, the
Parliamentary and Health Service Ombudsman, sector regulators like Ofsted and the Care Quality
Commission) function as institutionalized legitimacy checks, converting "does the public still
trust this service" into auditable ratings.

## The math

Trust and legitimacy is a framework-shaped topic whose usable quantitative proxies are:

```
Institutional trust index (OECD-style)
  = % of survey respondents answering "yes" to a confidence-in-government question,
    tracked over time, disaggregated by demographic group

Legitimacy proxy set (no single number substitutes for the construct):
  - Upheld complaints per 1,000 service users (ombudsman or internal complaints data)
  - Judicial review / appeals success rate against the body's decisions
  - Independent regulator/inspectorate rating (e.g. "outstanding" to "inadequate" bands)
  - Legislative/oversight committee confidence votes or critical report frequency
  - Freedom of information request volume and disclosure/refusal rate, as a proxy
    for perceived transparency

Legitimacy is corroborated, not calculated: a defensible legitimacy assessment
triangulates several of the above rather than relying on any single proxy.
```

## Worked example

**National tax authority**: legitimacy triangulation for an annual public value report.

```
OECD-style trust proxy (department-specific confidence survey):
  58% of respondents say they trust the authority to "treat me fairly" (down from
  64% two years prior)

Complaints data:
  Upheld complaints: 4.2 per 1,000 taxpayer interactions (up from 3.1 per 1,000)

Ombudsman referrals:
  Referrals to the independent Adjudicator's Office: 1,850 in the year, of which
  61% upheld in full or part against the authority (up from 48% the prior year)

Reading across all three: trust is falling, upheld complaints are rising, and
independent ombudsman findings are increasingly siding against the authority —
three independent signals converging on the same direction, which is what makes
this a credible legitimacy finding rather than noise in any one series.
```

A single one of these figures moving would be weak evidence; three independent measures moving
together over the same period is the pattern that makes a legitimacy claim defensible.

## Software engineering connection

Legitimacy metrics are rarely produced by a single team's dashboard, which is itself the design
lesson: build reporting pipelines that can ingest and reconcile data from independent external
sources (ombudsman casework systems, regulator ratings feeds, survey vendors) rather than
architecting legitimacy reporting as an internal-only metric, because internally-sourced
legitimacy claims ("we rate ourselves as trustworthy") carry little evidential weight — the same
independence problem noted for the legitimacy perspective in a
[public value scorecard](../public-value-scorecard/). Complaints and appeals data pipelines
deserve the same data-quality rigour as any outcome pipeline feeding
[payment by results](../payment-by-results-and-social-impact-bonds/) contracts, since an
under-reported or poorly-categorized complaints dataset silently understates a legitimacy problem
before it becomes visible in a trust survey a year later. See
[citizen satisfaction metrics](../citizen-satisfaction-metrics/) for the transaction-level
counterpart to this institution-level measure, and [public value](../public-value/) for Moore's
full strategic-triangle framework this leg belongs to.

## Pitfalls

- **Treating satisfaction as a proxy for legitimacy**: a citizen can be satisfied with a single
  transaction's interface while distrusting the institution overall (or vice versa) — see
  [citizen satisfaction metrics](../citizen-satisfaction-metrics/) for why the two must be reported
  separately.
- **Relying on a single self-reported metric**: an internally-run trust survey with no independent
  corroboration (ombudsman data, regulator ratings) is easy to dismiss as self-marking; triangulate.
- **Ignoring demographic disaggregation**: aggregate national trust figures can mask sharply
  diverging legitimacy among specific groups (by age, ethnicity, income, or region) — the OECD's
  own Trust in Government releases disaggregate for exactly this reason.
- **Reading a single shock-driven dip as a permanent trend**: trust figures move sharply around
  crises (financial crashes, pandemics, high-profile scandals) and partially recover; a single
  post-shock data point should not be extrapolated into a long-run decline without more data.

## Sources

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
