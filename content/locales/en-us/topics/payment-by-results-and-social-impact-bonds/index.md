# Payment by Results and Social Impact Bonds (PbR/SIBs)

Payment by results (PbR) pays a provider based on verified outcomes achieved, not activities
performed. A social impact bond (SIB) is a specific PbR financing structure in which private or
philanthropic investors fund service delivery up front and are repaid — with a return — by a
government commissioner only if independently measured outcomes hit agreed thresholds, shifting
the delivery risk from the taxpayer to the investor.

## Why it matters

The world's first SIB launched at HMP Peterborough in September 2010: Social Finance raised
£5 million from 17 investors to fund the "One Service," working with short-sentence prisoners
(under 12 months) to cut reoffending, with the Ministry of Justice and the Big Lottery Fund agreeing
to repay investors only if reconviction events fell by at least 7.5% against a matched national
comparison cohort. The final cohort of the Peterborough pilot recorded an 9.7% reduction in
reconvictions, comfortably above the threshold, and investors were repaid with a return. The
mechanism mattered because it solved a specific commissioning problem: government wanted to pay for
outcomes rather than inputs, but couldn't absorb the financial risk of an intervention that might
not work, so the SIB structure moved that risk onto investors willing to underwrite it. The
Government Outcomes Lab (GO Lab) at Oxford's Blavatnik School of Government now maintains the most
complete public evidence base on PbR and SIB performance worldwide, tracking well over 200 impact
bonds globally and publishing the research on what design features correlate with success or
failure. The lesson the evidence base repeatedly returns to is that the *outcome metric chosen*, and
who bears the risk of missing it, determines almost everything else about how a PbR contract
actually behaves in practice.

## The math

```
PbR payment = base payment (if any) + Σ (outcome achieved × unit price per outcome)

Social impact bond investor return:
  Investor outlay   = upfront capital funding service delivery
  Outcome payment   = commissioner pays only if outcome ≥ threshold, scaled by
                       how far above threshold performance lands
  Investor return   = outcome payments received − investor outlay
                       (a rate of return, often capped, reflecting risk taken)

Key design parameters that determine the whole contract's behaviour:
  Outcome metric        — must be an outcome, not an output (see outcomes-vs-outputs)
  Comparison/counterfactual — usually a matched cohort (see counterfactual-analysis)
  Payment threshold      — minimum improvement before any payment triggers
  Payment curve           — linear, stepped, or capped above the threshold
  Attribution/deadweight discount — see additionality-and-deadweight
```

## Worked example

**Peterborough One Service** (illustrative figures drawn from published evaluations):

```
Investor capital raised:         £5,000,000
Cohort:                          ~3,000 short-sentence male prisoners over two cohorts
Threshold:                       ≥7.5% reduction in reconviction events vs matched
                                  national comparison group, or no payment
Cohort 1 result:                 8.4% reduction — below the contractual bar for that
                                  cohort alone under the original rules
Combined/final cohort result:    9.7% reduction — above threshold
Outcome payment:                 government (Ministry of Justice / Big Lottery Fund)
                                  pays per percentage point above threshold, funding
                                  investor repayment plus a return
```

**Local authority PbR contract (illustrative)**: a family-intervention service is commissioned at
£4,000 per family referred (activity payment) plus £6,000 per family with no further child
protection referral 12 months after closure (outcome payment). 200 families referred, 150 cases
closed, 96 remain referral-free at 12 months:

```
Activity payment  = 200 × £4,000 = £800,000
Outcome payment   = 96 × £6,000  = £576,000
Total contract cost = £1,376,000 for 96 confirmed sustained outcomes
Cost per confirmed outcome ≈ £14,333 (see cost-per-outcome)
```

## Software engineering connection

Payment by results is an incentive-alignment problem before it is a data problem, and the data
system is where that alignment either holds or breaks. Independent, tamper-evident outcome
verification is the whole game: the commissioner and provider have opposing incentives on how an
ambiguous case gets coded, so the system recording outcomes needs an audit trail, a data-sharing
agreement with the independent verifier (often a different body from the provider, sometimes an
official statistics body matching against police or benefits records), and immutable versioning of
the outcome definition — the PbR equivalent of the "redefining the metric" pitfall in
[public sector KPIs](../public-sector-kpis/). Attribution calculations depend on
[counterfactual-analysis](../counterfactual-analysis/) matched-cohort methods, which need
reproducible, auditable code, not a one-off spreadsheet. And the metric itself must be a genuine
outcome, not a proxy activity — see [outcomes vs outputs](../outcomes-vs-outputs/) — because a PbR
contract paying for an output just relabels business-as-usual funding with extra transaction cost.
Where a SIB's social return is being modeled prospectively, that appraisal typically borrows
directly from [social return on investment](../social-return-on-investment/) methodology.

## Pitfalls

- **Paying for an easily-gamed proxy outcome**: "attendance at sessions" is an activity dressed as
  an outcome; insist on a measure that reflects the actual change sought (reoffending, employment,
  housing stability).
- **No credible counterfactual**: without a matched comparison group, an improvement could be
  regression to the mean or a wider trend, not the program's effect — see
  [counterfactual-analysis](../counterfactual-analysis/) and
  [additionality-and-deadweight](../additionality-and-deadweight/).
- **Underestimating transaction and evaluation costs**: independent verification, data linkage, and
  contract administration for PbR/SIB schemes routinely run into double digits as a percentage of
  contract value — GO Lab's evidence base documents this as a recurring driver of scheme
  discontinuation.
- **Cherry-picking or "parking"**: providers paid per outcome have a direct incentive to prioritize
  clients most likely to succeed anyway and deprioritize the hardest cases — design payment tiers
  or case-mix adjustment to counter it.

## Sources

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
