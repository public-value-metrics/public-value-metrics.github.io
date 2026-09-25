# Flow Metrics in Government Delivery

Flow metrics — Little's Law, work-in-progress (WIP) limits, and flow efficiency — describe how quickly work moves through a system with limited capacity. A sprint board is one such system; a benefit-claims queue, a planning-application register, or a visa casework backlog is exactly the same mathematics wearing a different uniform.

## Why it matters

Government caseloads are queueing systems, and queueing systems obey queueing laws whether or not anyone measures them. Statutory determination periods make this explicit: under the Town and Country Planning regime, most minor planning applications carry an 8-week statutory determination target and major applications 13 weeks — a cycle-time commitment baked directly into law. The Home Office's asylum casework backlog, scrutinised repeatedly by the National Audit Office and the Home Affairs Select Committee, is a well-documented case of a public system where work-in-progress grew faster than throughput for a sustained period, driving cycle times far beyond any statutory or service expectation. Flow metrics give engineers and caseworking managers alike a shared, quantitative vocabulary for exactly this failure mode, rather than leaving it as a qualitative "backlog problem".

## The maths

```
Little's Law:  WIP = Throughput × Cycle Time
           →   Cycle Time = WIP / Throughput

Flow efficiency = active (touch) time / total cycle time   (Vacanti)

WIP limit effect: for fixed throughput, halving WIP roughly halves
average cycle time (Little's Law rearranged) — the lever available
without adding headcount.
```

See [DORA metrics for public value](../dora-metrics-for-public-value/) for the equivalent maths applied to software deployment pipelines rather than casework.

## Worked example

**Local authority planning department**: 400 applications open at any time (WIP), the team resolves 50 applications/week (throughput).

```
Cycle time = WIP / Throughput = 400 / 50 = 8 weeks
```

That lands exactly at the statutory 8-week target for minor applications — with no slack, meaning any variability in incoming demand or consultee response time pushes determinations over the legal deadline.

**Flow efficiency**: of those 8 weeks (56 calendar days), an application typically has around 6 hours of actual caseworker processing time.

```
Flow efficiency = 6 hours / (56 days × 8 working hours/day)
                = 6 / 448 ≈ 1.3%
```

Vacanti's benchmark for software teams puts typical flow efficiency at 15–20%; government casework, with multiple statutory consultee handoffs and public consultation windows, often runs an order of magnitude lower. The 98.7% of "wait" time is where the eight weeks actually goes — not in caseworker capacity.

**WIP-limit intervention**: capping open applications per caseworker at 15 instead of an unbounded 25 (holding throughput constant) shifts WIP from 400 to roughly 240 across a 16-person team:

```
New cycle time = 240 / 50 = 4.8 weeks
```

A near-halving of cycle time from a policy change, not a staffing increase — the same lever DORA-style delivery teams pull when they cap sprint WIP.

## Software engineering connection

Flow metrics are the shared language between a delivery team's Kanban board and the casework floor it is building software for: a caseworker's queue and a pull-request queue are both governed by Little's Law, and both blow their cycle-time targets the same way — too much WIP relative to throughput. This matters directly for [cost of delay in public programmes](../cost-of-delay-in-public-programmes/): cycle time × CoD is the pounds sitting in the queue at any moment, and it matters for [service standards and transaction metrics](../service-standards-and-transaction-metrics/), where a published turnaround target is a cycle-time commitment that only flow metrics can diagnose when it is missed. A casework system's software should expose WIP and cycle time as first-class operational metrics, not bury them inside a case-management system nobody queries.

## Pitfalls

- **Adding WIP limits without fixing the real bottleneck**: if the constraint is an external statutory consultee's response time, capping caseworker WIP just moves the queue upstream rather than shortening it.
- **Treating flow efficiency as a target to game**: rushing the 1.3% of active time barely moves cycle time; the leverage is almost always in the wait states, which usually means process redesign, not caseworker speed.
- **Ignoring variability**: Little's Law describes averages; a caseload with high demand variance needs buffer capacity, not just a tighter WIP limit, or statutory deadlines will still be missed on the volatile tail even as the average improves.
- **Measuring WIP inconsistently**: a case "open" in the system of record but actually stalled awaiting a third party is still WIP; excluding it flatters the numbers without changing citizen-facing reality.

## Sources

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
