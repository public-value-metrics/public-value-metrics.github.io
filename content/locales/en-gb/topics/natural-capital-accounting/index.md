# Natural capital accounting

Natural capital accounting puts the environment on the same footing as any other national or
organisational asset: it measures the stock of natural resources (woodlands, soils, rivers,
wetlands, the atmosphere) and the flow of services they produce (carbon sequestration, flood
protection, recreation, food), in both physical and monetary terms, so environmental depletion
shows up in decision-making the way running down financial capital would. The UK is one of the
furthest advanced governments in doing this systematically, driven by the 25 Year Environment
Plan (2018) and implemented through the ONS's UK Natural Capital accounts and HM Treasury's Green
Book supplementary guidance.

## Why it matters

Conventional accounting — corporate and governmental alike — treats a forest as worthless until it
is felled and sold as timber, at which point it becomes GDP. Natural capital accounting exists to
close that gap: the UK's 25 Year Environment Plan committed government to embedding natural
capital thinking across policy, explicitly stating the ambition to be "the first generation to
leave the environment in a better state than we found it." The ONS has since published annual UK
Natural Capital accounts (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>)
that estimate the monetary value of ecosystem services — from woodland recreation to urban green
space's health benefits to peatland carbon storage — using the same National Accounts framework
used for produced capital, so natural capital can eventually sit in the same balance sheet as
roads, buildings, and equipment. HM Treasury's Enabling a Natural Capital Approach (ENCA) guidance,
supplementary to the Green Book
(<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>),
sets out how appraisers should value environmental costs and benefits in business cases, so a road
scheme that destroys ancient woodland or a flood scheme that restores wetland can be compared on
consistent monetary terms rather than one having a number and the other a paragraph of caveats.

## The maths

```
Ecosystem service asset value = NPV of the flow of services the asset provides

Asset value = Σ (t = 1 to T) [annual service flow value_t / (1 + r)^t]

where:
  service flow value_t = quantity of service in year t × unit value
                          (e.g. recreational visits × value per visit;
                           tonnes of carbon sequestered × carbon price)
  r = discount rate (Green Book social discount rate — see
      [social discount rate](../social-discount-rate/))
  T = time horizon over which the asset is expected to provide the service
```

This is the identical net-present-value structure used to value produced capital or appraise any
public investment under [Green Book appraisal](../green-book-appraisal/) — natural capital
accounting's contribution is supplying credible physical quantities and unit values for services
that were previously priced at zero.

## Worked example

**Urban woodland, recreational value**: a 50-hectare woodland receives an estimated 80,000
recreational visits per year, each valued (via the travel-cost or stated-preference method — see
[revealed preference valuation](../revealed-preference-valuation/) and
[stated preference valuation](../stated-preference-valuation/)) at £3 per visit. The woodland is
expected to keep providing this service for 50 years, appraised at a 3.5% discount rate.

```
Annual recreational value = 80,000 × £3 = £240,000/year

NPV over 50 years at 3.5% ≈ £240,000 × annuity factor(3.5%, 50 years)
annuity factor(3.5%, 50) ≈ 21.4

Asset value ≈ £240,000 × 21.4 ≈ £5,136,000
```

**Adding carbon storage**: the same woodland sequesters an estimated 400 tonnes of CO2 per year,
valued at the government's non-traded carbon price of roughly £75/tonne (illustrative — use the
current BEIS/DESNZ published carbon values for a live appraisal).

```
Annual carbon value = 400 × £75 = £30,000/year
NPV over 50 years at 3.5% ≈ £30,000 × 21.4 ≈ £642,000

Total woodland asset value (recreation + carbon) ≈ £5,136,000 + £642,000
                                                   ≈ £5,778,000
```

This is before adding flood attenuation, biodiversity, or air-quality services the ENCA guidance
also asks appraisers to consider — the total is deliberately a floor, not a ceiling.

## Software engineering connection

- Environmental and asset-management systems for local authorities and agencies (parks, highways,
  water bodies) can attach a natural capital register alongside their physical asset register,
  using the same service-flow-times-unit-value pattern as any other [unit cost database](../unit-cost-databases/)
  the organisation maintains.
- Because natural capital NPV is sensitive to the discount rate (see the worked example's annuity
  factor), any tool computing it should expose the rate and horizon as visible inputs, not bury
  them — the same transparency principle covered under
  [intergenerational equity and sustainability discounting](../intergenerational-equity-and-sustainability-discounting/).
- Natural capital accounts are increasingly a required input to environmental impact sections of a
  [green-book-appraisal](../green-book-appraisal/) business case; a delivery team building
  business-case tooling should treat the ONS accounts and ENCA unit values as reference data to
  integrate, not something appraisers recompute from scratch each time.

## Pitfalls

- **Double-counting overlapping ecosystem services** — recreational value and biodiversity value
  for the same site can share underlying willingness-to-pay data; ENCA guidance warns explicitly
  against summing valuations derived from overlapping survey instruments.
- **Treating a natural capital asset value as static** — service flows change with climate,
  management, and land-use pressure; a woodland's carbon and flood-attenuation value this decade
  is not a permanent property of the site.
- **Using national average unit values for a highly local decision** — a hectare of accessible
  urban woodland and a hectare of remote upland have very different recreational value; ENCA
  guidance recommends local or site-specific values where available rather than defaulting to
  national averages.

## Sources

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
