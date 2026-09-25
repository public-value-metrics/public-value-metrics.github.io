# Technical Debt as Public Value Erosion

Technical debt is Ward Cunningham's 1992 metaphor for the implied future cost of expedient past coding decisions: a **principal** (the remediation work owed) and an **interest** (the ongoing drag it exerts on delivery). In a legacy government IT estate, that interest is paid directly out of public value — slower statutory-change delivery, higher failure rates on citizen-facing services, and a shrinking pool of people who can safely touch the system at all.

## Why it matters

Legacy mainframe and COBOL-era systems across UK government departments — HMRC and DWP among the most cited — carry a well-documented and escalating risk that the National Audit Office has flagged repeatedly, including in its report *Digital Transformation in Government* (<https://www.nao.org.uk/>): ageing platforms that are expensive to change, increasingly hard to secure, and dependent on a specialist workforce that is retiring faster than it is being replaced. Unlike a private-sector backlog, this debt sits directly between citizens and their statutory entitlements — a benefit calculation engine that cannot be safely changed is a policy-delivery constraint, not just an engineering inconvenience. The 2013 restart of the Universal Credit IT programme, when the National Audit Office found the original build would not deliver value for money and a substantial part of the software asset had to be written off, is a canonical example of unpriced technical debt catching up with a live, ministerially visible public programme.

## The maths

```
SQALE principal = Σ over violations (remediation time) × developer cost rate
Technical debt ratio (TDR) = remediation cost / redevelopment cost × 100
                    (SonarQube grades: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Interest (the number that justifies paydown):
  interest/year = Δ delivery velocity × value per unit velocity
                + Δ citizen-facing incident rate × cost per incident
                + specialist-skills premium × affected headcount
Paydown case = PV(interest avoided over horizon) − remediation cost
               (discounted at the Green Book social discount rate, see
               social-discount-rate.md)
```

Principal states the liability; interest is what makes the investment case to a public accounts committee.

## Worked example

A 250,000-line claims-processing engine written in a legacy 4GL. Using the CAST Appmarq benchmark of roughly $3.61 of technical-debt principal per line of code (≈£2.85 at typical conversion):

```
Principal ≈ 250,000 × £2.85 ≈ £712,500
TDR ≈ 16% (grade C)
```

Measured interest: the department retains three specialist contractors at a 40% day-rate premium over standard senior engineer rates because in-house skills have attrited — an extra £180,000/year on a six-person team. The system also causes four major processing outages/year, each suspending decisions for around 5,000 claimants and redirecting them to the contact centre at roughly £25/call:

```
Interest ≈ £180,000 (skills premium)
         + 4 × 5,000 × £25 = £500,000 (redirected-contact cost)
         ≈ £680,000/year
```

Targeted remediation of the worst-performing modules costs £1,200,000 and is modelled to cut interest by 70%:

```
Interest reduction = 0.70 × 680,000 = £476,000/year
Payback ≈ 1,200,000 / 476,000 ≈ 2.5 years
```

The targeting matters: remediating rarely-touched code buys nothing, because interest concentrates where change frequency and debt density both peak.

## Software engineering connection

The public-value framing that upgrades a technical-debt case beyond "the code is old": express the legacy estate as an inventory of where lost delivery capacity is concentrated, and connect it explicitly to [total cost of ownership](../total-cost-of-ownership-in-government-it/), since interest is an operating cost that belongs in the TCO line whether or not finance has ever asked for it. Debt-laden systems also carry disproportionate [cybersecurity](../public-sector-cybersecurity-value/) exposure, because patching cadence and debt density are correlated — an unpatchable legacy system is technical debt whose interest is paid in incident risk rather than pounds. And every remediation-versus-feature trade-off is itself a [cost-of-delay](../cost-of-delay-in-public-programmes/) decision: paying down debt delays the next statutory change, which has its own CoD that must be weighed against the interest saved.

## Pitfalls

- **Principal-only reporting**: a large, frightening remediation estimate with no interest figure justifies nothing to a spending approver.
- **Tool-generated debt figures taken literally**: SQALE-style scanners count rule violations; they miss the expensive kind of debt — architectural decisions and undocumented legacy business rules — while flagging trivia.
- **"The rewrite avoids all of it"**: replacement programmes must clear the same discipline as any other business case — counterfactual cost, probability of success, and discounting — not an exemption from it, as the 2013 Universal Credit restart demonstrated.
- **Debt-zero utopianism**: the optimal debt level is not zero; debt is leverage that bought earlier delivery. The live question is always the interest rate, not whether debt exists at all.

## Sources

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
