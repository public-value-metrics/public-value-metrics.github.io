# AI in Government Value

AI in government value is the requirement that an AI system used in a public service clear the same value-for-money and public-value bar as any other spending decision — not a lower one because it's novel, and not a higher one because it's feared. It is the question a delivery team must be able to answer before, not after, an AI feature ships: does this produce more value than it costs, once assurance, oversight and risk are priced in honestly?

## Why it matters

The UK Central Digital and Data Office (CDDO) published its Generative AI Framework for Government in 2024, building on earlier interim guidance from June 2023, and structured it around ten principles covering what generative AI is, its ethical implications, tool security, quality assurance controls, managing the full generative AI lifecycle, identifying genuine use cases, cross-government collaboration, transparency, skills, and governance. The framework's insistence on "meaningful human control" and full lifecycle management exists because AI project business cases have a specific failure mode other IT spending doesn't: a pilot's headline productivity number is easy to produce and easy to overstate, because it's measured before the verification, correction and oversight burden the tool creates is accounted for. Alongside the framework, the Algorithmic Transparency Recording Standard (ATRS) requires public bodies to publish a standardised record — purpose, data used, performance, fairness testing, human oversight arrangements — for algorithmic tools that have a significant influence on decisions about individuals, which makes the assurance cost of an AI system a matter of public record, not an internal estimate a team can quietly skip.

## The maths

AI adoption is assessed as an addition to, not a replacement for, standard [value-for-money](../value-for-money/) appraisal, with the AI-specific terms made explicit rather than folded into a single "productivity gain" number:

```
Net value of an AI system =
    productivity gain (time saved × loaded staff cost)
  − licence/compute cost
  − human verification and oversight cost (checking AI output before
    it's acted on — this does not shrink to zero even for mature tools)
  − ATRS documentation and ongoing monitoring cost
  − risk-adjusted cost of harm from errors, bias, or hallucination,
    weighted by who bears that harm (distributional-weighting)

A pilot productivity figure that omits the oversight term is not
comparable to a business-as-usual cost baseline that already includes
equivalent human review — see ai-productivity-in-the-public-sector
for the fuller productivity-measurement discipline this borrows from.
```

## Worked example

**Local authority using a generative AI tool to draft first responses to routine council tax enquiries**: 25,000 enquiries/year, previously handled entirely by caseworkers at an average 14 minutes/enquiry, loaded staff cost £34/hour.

```
Baseline (no AI) cost:
  25,000 × (14/60) × £34 = £198,333/year

Pilot headline claim: AI drafts a response in 90 seconds,
caseworker "just reviews and sends" — claimed new time is 3 minutes
  25,000 × (3/60) × £34 = £42,500/year
  → claimed saving £155,833/year (looks transformational)

Fully-loaded figure, measured after 3 months live rather than in the
pilot's hand-picked test cases:
  Actual review + correction time per response: 6 minutes (drafts
  need real editing for complex or emotionally sensitive enquiries)
  25,000 × (6/60) × £34 = £85,000/year
  Licence/compute cost: £38,000/year
  ATRS documentation and quarterly bias/quality monitoring: £14,000/year
  Total cost = 85,000 + 38,000 + 14,000 = £137,000/year

Real saving = 198,333 − 137,000 = £61,333/year — genuine and worth
keeping, but well under half the pilot's headline claim, and it
required an honest oversight-time measurement, not the pilot's
best-case one, to find.
```

## Software engineering connection

This is where [ai-productivity-in-the-public-sector](../ai-productivity-in-the-public-sector/) and this topic meet: engineering teams building AI features into public services own the instrumentation that makes the "real" figure in the worked example possible — logging actual review time, edit distance between draft and sent response, and escalation rate, rather than trusting the pilot's demo conditions. AI features should be assessed against [digital-service-standard](../digital-service-standard/) point 9 (secure service, user privacy) and cross-referenced with [public-sector-cybersecurity-value](../public-sector-cybersecurity-value/) where the tool touches citizen data, and any AI system with a significant influence on decisions about individuals needs an ATRS record before it can be considered assessment-ready, in the same way a service needs a passed [digital-service-standard](../digital-service-standard/) assessment before going live.

## Pitfalls

- **AI-washing**: relabelling existing rules-based automation as "AI" to access funding or attention earmarked for AI adoption, without the accuracy or bias risks that actually justify the framework's extra scrutiny.
- **Measuring pilot productivity, not production productivity**: pilots run on curated test cases with engaged, attentive reviewers; production runs on the full messy case mix with reviewers who, over time, develop automation bias and under-check outputs — both distort the honest oversight-cost figure.
- **Skipping ATRS registration because the tool "isn't really automated decision-making"**: the standard's threshold is significant influence on a decision about an individual, which most citizen-facing AI drafting or triage tools meet even when a human technically signs off.
- **Ignoring distributional impact of errors**: an AI system's error rate averaged across all users can hide a much higher error or bias rate for specific groups; [distributional-weighting](../distributional-weighting/) should be applied to the risk-adjusted harm term, not just the aggregate accuracy figure.

## Sources

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
