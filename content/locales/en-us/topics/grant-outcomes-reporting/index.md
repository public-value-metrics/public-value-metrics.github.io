# Grant Outcomes Reporting (IRIS+)

Grant outcomes reporting is the practice of grantees reporting standardized, comparable outcome
metrics back to funders — as opposed to each funder inventing its own bespoke reporting template.
IRIS+, maintained by the Global Impact Investing Network (GIIN), is the most widely adopted such
standard: a catalog of pre-defined social, environmental, and financial performance metrics that
impact investors and, increasingly, grant-making foundations require or recommend grantees use.

## Why it matters

Before standardized reporting, every foundation asked grantees for a different set of indicators
in a different format, and a mid-sized charity with ten funders could be running ten parallel
reporting processes for overlapping work — a well-documented driver of the reporting burden that
grant-outcomes standardization exists to reduce. IRIS+ addresses this by giving funders and
grantees a shared vocabulary: Core Metrics Sets grouped by theme (e.g. affordable housing, clean
energy access, financial inclusion), each metric defined precisely enough that "jobs created" or
"households served" means the same thing whoever reports it, and aligned to the UN Sustainable
Development Goals so a funder can roll grantee-level data up to a portfolio-level SDG narrative.
GIIN reports that IRIS metrics are used by roughly half of impact investors and the large majority
of fund managers, banks, and development finance institutions active in the field.

The standardization matters most where it interacts with [outcomes vs outputs](../outcomes-vs-outputs/):
IRIS+ pushes reporting toward defined outcome and impact metrics rather than whatever a grantee's
existing case management system happens to log, which is exactly the gap
[cost per outcome](../cost-per-outcome/) versus [cost per beneficiary](../cost-per-beneficiary/)
describes.

## The math

Grant outcomes reporting is a framework and process, not a formula:

```
1. Funder selects a Core Metrics Set relevant to the grant's theme
   (e.g. IRIS+ "Financial Inclusion" or "Sustainable Agriculture")
2. Each metric has a fixed definition, unit, and calculation method
   published by GIIN — not invented per-funder
3. Grantee reports against the same metric definitions across all
   its funders using that standard, cutting duplicate reporting effort
4. Funder aggregates grantee-level metrics into portfolio-level reporting,
   comparable year over year and across grantees using the same metric
```

The efficiency gain is combinatorial: standardizing N funders × M grantees onto one shared
vocabulary turns N×M bespoke reporting relationships into roughly N+M mappings against one
standard.

## Worked example

**A grantee with three funders, before standardization**: reports "people served" to Funder 1
using a headcount definition, "beneficiaries reached" to Funder 2 using a household definition,
and "individuals impacted" to Funder 3 using a service-episode definition (so one person visiting
twice counts twice). Three reports, three numbers, none comparable, and none comparable to another
grantee's numbers even within the same funder's portfolio.

**The same grantee under IRIS+**: reports against a defined IRIS+ individuals-reached metric
alongside a defined outcome metric from the relevant Core Metrics Set, using GIIN's published
calculation methodology for both. All three funders now receive the same number, calculated the
same way, and can compare this grantee's cost per IRIS+-defined unit against other grantees in
their portfolio using the identical metric — the equivalent, at reporting-infrastructure scale, of
having a shared [unit cost database](../unit-cost-databases/).

## Software engineering connection

Grant management platforms should treat IRIS+ metric identifiers as a foreign key, not free text:
storing the published metric code alongside a grantee's reported value (rather than a locally
invented field named "beneficiaries") is what makes cross-funder and cross-portfolio aggregation
possible later without a data-cleaning project. Where a platform must support funders who have not
adopted IRIS+, the pragmatic design is to let a local metric be mapped to the nearest IRIS+
definition rather than forcing every funder onto the standard immediately — comparability improves
incrementally as more of the graph maps onto shared identifiers. See the sibling topic
[cost per outcome](../cost-per-outcome/) for what the reported numbers should be used to calculate
once collected.

## Pitfalls

- **Treating IRIS+ adoption as automatic comparability.** Two grantees can both report against the
  same IRIS+ metric and still not be comparable if their underlying data quality or counterfactual
  assumptions differ; the standard fixes definitions, not measurement rigour.
- **Funder-invented "IRIS-aligned" metrics.** A metric that is merely inspired by IRIS+ language
  but not the actual published definition reintroduces the fragmentation the standard exists to
  solve.
- **Reporting fatigue from over-selection.** Requiring a grantee to report against an entire Core
  Metrics Set when only two or three metrics are decision-relevant recreates the burden problem in
  a standardized wrapper.
- **No outcome metric at all.** IRIS+ includes many pure output metrics (e.g. counts of people
  served); selecting only those, and none of the outcome-tier metrics, produces
  [cost-per-beneficiary](../cost-per-beneficiary/)-shaped reporting under an outcomes-reporting
  label.

## Sources

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
