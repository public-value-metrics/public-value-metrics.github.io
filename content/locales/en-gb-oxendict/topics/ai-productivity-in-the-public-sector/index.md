# AI Productivity in the Public Sector

Metrics for what AI coding assistance actually does to engineering output — suggestion acceptance rates, controlled-study speedups, PR throughput, and code retention — carry a genuinely contradictory evidence base even before public-sector constraints are added: data classification limits which parts of a legacy estate an AI tool may touch at all, procurement cycles mean the tool under evaluation is often a model generation behind current capability, and security clearance requirements govern who may use it on what.

## Why it matters

The two most-cited controlled studies point in opposite directions. Peng et al.'s 2023 GitHub Copilot RCT found developers completed a greenfield HTTP-server task 55.8% faster with Copilot (1h11m vs 2h41m, n=95). METR's 2025 RCT found experienced open-source developers working on *their own mature repositories* were 19% slower with early-2025 AI tools, while believing they were about 20% faster. Both studies are sound; the contradiction is the finding — greenfield-task efficacy does not transfer to mature-codebase effectiveness, and much of government engineering is mature-codebase work on estates that are older and more idiosyncratic than the median commercial repository. The Central Digital and Data Office's Generative AI Framework for HMG (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) sets out principles for responsible adoption precisely because this evidence base cannot simply be imported from vendor demonstrations; departments are expected to evaluate tools against their own data-handling and security requirements before rollout.

## The maths

```
Acceptance rate  = accepted suggestions / shown suggestions
Retention rate   = AI code surviving to merge / accepted AI code
Speedup          = (t_control − t_AI) / t_control  (from controlled comparison ONLY)
Throughput delta = Δ merged PRs/dev/week

Public-sector coverage factor:
  eligible codebase share = LOC on systems where the classification
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) permits the tool at all

Value model = devs × eligible-coverage × time saved × loaded rate × utilization
             — every term needs local measurement, and the coverage factor
             has no private-sector equivalent
```

## Worked example

A government department pilots an AI coding assistant across 300 developers, but only systems classified OFFICIAL are eligible for tool use — 70% of the estate by headcount allocation, with the remaining 30% (higher-classification systems) excluded entirely.

```
Eligible developers = 300 × 0.70 = 210

Pilot result: self-reported time saved 40 min/day;
              measured task-level saving 12 min/day (0.2h)
              — the METR perception gap, reproduced in the wild

Value the MEASURED number:
  210 × 0.2h × 220 days × £55/hr loaded × 0.6 utilization
  = 210 × 44 hours × £55 × 0.6
  = 9,240 hours × £55 × 0.6 ≈ £304,920/year capacity

Cost: 210 licensed seats × £22/month × 12 ≈ £55,440/year

Net capacity ratio ≈ 304,920 / 55,440 ≈ 5.5:1
```

Fundable at roughly one-third of the self-reported benefit, and only after the classification ceiling is applied — licensing all 300 developers on the strength of the self-reported figure would have overstated both the eligible population and the true saving.

## Software engineering connection

The disciplines that carry across directly: run **pragmatic trials** on the department's own codebase and real tickets, not vendor demonstration tasks, because the METR result is specifically a mature-codebase finding; treat **acceptance rate as a proxy, not an outcome** — high acceptance with low retention is the software equivalent of overdiagnosis; pair every throughput claim with a **stability check**, since DORA's 2025 report found AI adoption lifts throughput but degrades change stability, which is exactly the net-benefit analysis [DORA metrics for public value](../dora-metrics-for-public-value/) is built to run; and be honest that AI tooling can widen, not narrow, the gap on [technical debt](../technical-debt-as-public-value-erosion/)-heavy legacy estates, because training data under-represents the COBOL, 4GL, and bespoke mainframe code common in government, so suggestion quality on exactly the systems that most need help is often the weakest. This sits alongside the broader [AI in government value](../ai-in-government-value/) question and should be governed by the same [public-sector cybersecurity value](../public-sector-cybersecurity-value/) constraints that limit where any third-party tool may see code or data at all.

## Pitfalls

- **Vendor-study transplantation**: applying greenfield RCT speedups to legacy-integration work is precisely the error the METR study exposed.
- **Self-report as measurement**: a 20-percentage-point perception-versus-measured gap is the largest known bias in this literature, and it inflates business cases that rely on developer surveys alone.
- **Ignoring the classification ceiling**: licensing and value models built on total headcount rather than the eligible, classification-cleared subset systematically overstate both cost-effectiveness and achievable coverage.
- **Procurement-cycle lag**: framework-based tool procurement can mean a pilot evaluates a model generation that is 12–18 months behind what is publicly available by the time of full rollout, making the original business case's speedup assumption stale before go-live.

## Sources

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
