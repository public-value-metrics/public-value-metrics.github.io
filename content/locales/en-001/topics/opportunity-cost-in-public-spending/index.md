# Opportunity Cost in Public Spending

Opportunity cost is the value of the best alternative forgone when a public body commits money,
staff time, or political capital to one option instead of another. In a department with a fixed
budget, every pound spent on one programme is a pound that cannot be spent on the next-best
programme — the true cost of a decision is not what it spends, but what it displaces.

## Why it matters

Public budgets are cash-limited within a spending review period, so — unlike a growing private firm
— a government department cannot simply "find more money" for a good idea; funding it means
un-funding something else. HM Treasury's Green Book treats this as foundational: every appraisal is
required to compare an intervention against a "do minimum" baseline *and* against realistic
alternative uses of the same resource, precisely because the real question a Treasury spending team
asks is never "is this good?" but "is this better than what else this money could buy?" The Green
Book's core appraisal principle — that public resources should flow to the intervention with the
highest net social value per pound — is opportunity cost stated as policy.

This is easy to state and hard to apply because the "next-best alternative" is rarely visible in a
single business case. A £2 million grant programme for youth employment is compared, in the business
case, against doing nothing — but the honest comparator is the next-best youth employment
intervention, or indeed the next-best use of £2 million anywhere in the portfolio, including
non-employment spending. The Magenta Book (HM Treasury, 2020) warns explicitly that evaluations
comparing "with intervention" to "without intervention" understate the bar an intervention must
clear, because "without this intervention" is not the same as "with nothing at all" — money released
funds something else.

## The maths

```
Opportunity cost of choosing A = value of the best forgone alternative B

Net public value of A = value(A) − value(B), not value(A) − 0
```

There is no universal formula because the forgone alternative is context-specific, but the
discipline generalises: identify the realistic next-best use of the same budget line (not an
idealized "do nothing"), value it on the same basis (monetised where possible, per
[social cost-benefit analysis](../social-cost-benefit-analysis/)), and subtract.

## Worked example

**Department budget line**: a £5 million digital-transformation fund can finance exactly one of two
proposals this financial year.

- *Option A*: a new case-management platform, monetised benefit £7.2 million over 5 years
  (efficiency savings plus faster case resolution).
- *Option B*: an identity-verification service shared across three departments, monetised benefit
  £6.4 million over 5 years.

A naïve business case for A compares £7.2 million of benefit against £5 million of cost and reports
a 1.44:1 benefit-cost ratio — apparently strong. But because A and B compete for the same £5 million,
the opportunity cost of choosing A is B's £6.4 million forgone benefit. The *net* case for A over the
realistic alternative is only £7.2m − £6.4m = £0.8 million, not the full £7.2 million headline. If a
third option, C, offered £7.5 million of benefit for the same £5 million, funding A over C would
destroy £0.3 million of public value even though A's own business case looks fully justified in
isolation.

**Local authority staff time**: a council's three-person data team can build either a housing-waitlist
dashboard (estimated to save 400 officer-hours/year, valued at £28/hour = £11,200/year) or a
benefits-fraud triage tool (estimated to prevent £85,000/year in incorrect payments). Building the
dashboard has an opportunity cost of £85,000/year forgone, not merely the salary cost of the data
team — the real cost of the "free" internal build is the far larger benefit the team could have
produced elsewhere.

## Software engineering connection

Engineering capacity inside a public body is itself a constrained budget — sprint capacity, not
pounds — and the same discipline applies directly:

- Always name the comparator: a feature's business case should state what else the same team-weeks
  could deliver, not just its own return.
- Treat "we have engineering capacity spare" as the start of an opportunity-cost analysis, not the
  end — spare capacity still has a best alternative use, even if that use is technical-debt paydown
  (see [technical debt as public value erosion](../technical-debt-as-public-value-erosion/)).
- Connect this directly to [value for money](../value-for-money/): VFM's "economy" test is
  meaningless without an honest opportunity-cost comparator, and to
  [cost of delay in public programmes](../cost-of-delay-in-public-programmes/), which prices the
  time dimension of the same forgone-alternative logic.

## Pitfalls

- **Comparing against "do nothing" instead of the next-best alternative.** The Green Book requires a
  "do minimum" baseline precisely because true opportunity cost is rarely zero; a business case that
  only clears the "do nothing" bar has not shown it beats the realistic alternative.
- **Ignoring cross-departmental competition for the same pot.** Budget lines that look ring-fenced
  within one directorate often compete at a higher level (a spending review, a capital programme)
  where the real opportunity cost is realised.
- **Assuming staff time released has zero further value.** Time "saved" only creates value if
  redeployed to something valuable; if the alternative use does not exist, the saving is notional.

## Sources

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — the canonical empirical demonstration of opportunity cost as
  a binding constraint in a fixed public budget. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
