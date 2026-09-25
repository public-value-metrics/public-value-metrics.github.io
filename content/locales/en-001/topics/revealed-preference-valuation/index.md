# Revealed Preference Valuation

Revealed preference methods infer the value of a non-market good from observable behaviour in a
related market, rather than asking people directly. Hedonic pricing and the travel-cost method are
the two workhorse techniques: both start from a real transaction and back out an implicit price for
the thing that was never directly sold.

## Why it matters

Where [stated preference](../stated-preference-valuation/) methods ask a hypothetical question,
revealed preference methods observe what people actually paid for, which the Green Book treats as
generally more credible evidence, all else equal, because it is not subject to hypothetical bias —
respondents in a hedonic house-price study genuinely paid the premium or discount being measured
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Annex 2). Hedonic pricing decomposes a market price — typically house prices — into implicit prices
for each attribute of the good, letting analysts isolate, for example, the price premium households
actually pay to live somewhere quieter or with better air quality, controlling statistically for
every other attribute that also affects house price (size, location, school catchment). The
travel-cost method does the analogous thing for recreational sites with no entry fee: the time and
money people spend travelling to a site reveals a lower bound on what the site is worth to them,
because nobody incurs a cost exceeding what the visit is worth to them.

Both methods share a structural limitation: they can only value what is embedded in an existing
market transaction. Noise near a runway shows up in house prices because people who care about
noise sort into quieter housing; the existence value of a species nobody visits or lives near does
not show up in any transaction at all, which is exactly the gap [stated preference](../stated-preference-valuation/)
methods exist to fill.

## The maths

```
Hedonic pricing:
  House price = f(structural attributes, location attributes,
                   environmental attribute of interest, ...)
  Estimate via regression; the coefficient on the environmental
  attribute (holding all else constant) is its implicit price.

  Implicit price of attribute X = ∂(House price) / ∂X

Travel-cost method:
  Visit rate (visits per capita from zone i) = f(travel cost from zone i,
                   substitute sites, socioeconomic controls)
  Estimate a demand curve for visits as a function of travel cost.
  Consumer surplus = area under the estimated demand curve
                    = value of the site to visitors
```

Both methods require a statistically sound control set — omitting a confounding attribute
(hedonic) or a nearby substitute site (travel-cost) biases the implicit price in a direction that
is not always obvious in advance, which is why Green Book Annex 2 requires the regression
specification and controls to be reported, not just the headline coefficient.

## Worked example

**National government**: the Green Book's own shadow price of carbon methodology draws in part on
hedonic evidence, but a simpler illustrative case is aircraft noise. A hedonic study regressing
house sale prices in a flight-path area against distance-weighted noise exposure, controlling for
size, age, and school catchment, finds each 1 decibel increase in average noise exposure is
associated with a 0.5% reduction in house price. For a typical £280,000 house in the affected area:

```
Implicit price per decibel = £280,000 × 0.5% = £1,400 per household
Households affected by a 3dB increase from a new runway = 18,000
Aggregate implied cost of the noise increase = £1,400 × 3 × 18,000 = £75.6m
```

This is a one-off capitalized cost (embedded in house price), which the appraisal must be careful
not to double-count against a separately estimated annual noise-annoyance cost stream.

**Charity**: an environmental charity uses the travel-cost method to value a free-to-enter nature
reserve. Survey data on visitor postcodes gives average round-trip travel cost (time valued at the
Green Book's recommended non-work time value, plus fuel) of £14 per visit, with 40,000 visits per
year. The estimated demand curve — visit rates falling as travel cost from a zone rises — implies a
consumer surplus per visit, above the £14 actually spent, of roughly £9.

```
Total annual value = 40,000 visits × (£14 spent + £9 consumer surplus)
                    = 40,000 × £23 ≈ £920,000/year
```

This dwarfs the reserve's zero entry-fee revenue and gives the charity's trustees a defensible
figure for the site's recreational value when making the case to funders.

## Software engineering connection

Revealed preference thinking shows up in public-sector product analytics more often than
practitioners realise: usage data from a free government digital service is itself
revealed-preference evidence of value (frequency, session length, and — most tellingly —
repeat-versus-one-off usage patterns can be analysed the same way a travel-cost model treats visit
frequency against distance). Where a service has genuine substitutes (a paper channel, a phone
line), the "cost" citizens incur to use the digital channel instead (time, data, a device) can be
estimated and compared to usage, echoing the travel-cost logic directly. See
[digital service standard](../digital-service-standard/) and
[open data value](../open-data-value/), which faces exactly this valuation problem for a good with
no direct market price.

## Pitfalls

- **Omitted variable bias in hedonic models.** Leaving out a correlated attribute (school quality
  correlating with both house price and the environmental variable of interest) biases the implicit
  price estimate; specification needs to be reported and scrutinised, not just the result.
- **Ignoring substitute sites in travel-cost studies.** A visitor's revealed value for a site is
  understated if a closer substitute exists and is not controlled for — they may be visiting mainly
  because it's free, not because it's uniquely valuable.
- **Applying revealed preference to a good with no market echo at all.** Existence value, option
  value, and bequest value do not show up in any transaction and cannot be recovered by hedonic or
  travel-cost methods — that gap belongs to [stated preference valuation](../stated-preference-valuation/).
- **Confusing capitalized (one-off) value with an annual flow.** Hedonic house-price effects are
  typically one-off capitalized values; treating them as an annual benefit stream inflates the
  appraisal.

## Sources

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
