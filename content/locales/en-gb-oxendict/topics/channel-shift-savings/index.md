# Channel Shift Savings

Channel shift savings are the projected cost reduction from moving transaction volume out of expensive channels — phone, face-to-face counters, paper post — into cheap digital self-service. It is the financial engine behind "digital by default", and also the line item in the business case most likely to be wrong, because the assumption it rests on — that offline channels shrink as digital take-up rises — is only sometimes true.

## Why it matters

The arithmetic looks unarguable using the [cost-per-transaction](../cost-per-transaction/) figures from the Digital Efficiency Report: shift a million transactions from an £8.62 face-to-face visit to a £0.15 digital one and the saving is over £8 million. But a saving only becomes cash released for redeployment if the shrinking channel's *fixed capacity* is actually decommissioned — the call centre seats, the counter staff, the phone contract minutes — and local government digital programmes have repeatedly found that total contact volume does not fall in line with digital take-up. Research from local authority digital transformation programmes and bodies such as Socitm and the Local Government Association has documented a recurring pattern: digital channels attract genuinely new contact (citizens who wouldn't have phoned or visited now do, because it's easier), and a meaningful share of "digital" transactions fail partway through and generate a phone call anyway — so phone volume falls by far less than the digital take-up percentage would suggest, sometimes not falling at all in absolute terms even as its *share* of total contact declines.

## The maths

```
Gross channel-shift saving = shifted volume × (cost_old_channel − cost_digital)

Net (realized) saving = gross saving
                       − new/shadow demand created by the easier channel
                       − failure-demand cost (digital failures that
                         still generate a phone call or counter visit)
                       − cost of unretired fixed capacity (a call
                         centre can only shed staff in discrete units;
                         a 15% volume drop rarely lets you cut 15% of
                         headcount)

Realization threshold: savings are only bankable once volume drops
below the level the old channel can staff at its next-smaller discrete
capacity step (e.g. losing one full shift, one full desk, one
contracted headcount band)
```

## Worked example

**County council blue badge renewal service**: 60,000 renewals/year, previously 100% phone/paper at £6.40 per transaction. A new digital service launches and reaches 65% digital take-up within a year, at £0.30 per digital transaction.

```
Naive (gross) saving calculation:
  39,000 shifted × (£6.40 − £0.30) = £237,900/year

What actually happened, per the council's contact-centre data:
  Phone volume fell from 60,000/year to 46,000/year (−23%, not −65%)
  because: 9,000 digital journeys failed and generated a follow-up call
           (failure-demand leakage), and 4,000 people who previously
           didn't renew at all now do, having found it easy online
           (shadow demand — a genuine access improvement, but not a
           saving)

  Phone contact centre is staffed in bands of 8,000 calls/FTE;
  a 14,000-call drop (60,000 → 46,000) releases 1.75 FTE, rounded
  down in practice to 1 FTE actually redeployed = £34,000/year

Realized saving = £34,000/year plus the digital-channel build/run
  cost avoided on 39,000 transactions ≈ £34,000 + (39,000 × £0.30
  digital cost already counted) — a fraction of the £237,900 headline,
  though the service is still unambiguously better for users.
```

## Software engineering connection

The engineering lesson is that channel shift savings are realized by *operational* decisions (rostering, decommissioning, contract renegotiation), not by the software shipping — a team can hit every [digital-service-standard](../digital-service-standard/) point and still deliver zero net saving if nobody retires the old channel's fixed capacity. Instrumenting failure demand (where in the digital journey users abandon and what they do next) is a solvable funnel-analytics problem and the single highest-leverage thing an engineering team can do to protect the savings case; it is also the direct link to [cost-per-transaction](../cost-per-transaction/), which failure demand quietly inflates. See [benefits-realization](../benefits-realization/) for the wider discipline of checking a business case's savings actually land, and [digital-inclusion](../digital-inclusion/) for why the offline channel usually cannot, and should not, be fully retired.

## Pitfalls

- **Assuming 1:1 channel substitution**: modelling digital take-up as a direct subtraction from phone/counter volume, ignoring shadow demand and failure-demand leakage documented in local government channel-shift research.
- **Booking gross savings before decommissioning**: counting the saving in the business case the year take-up rises, not the year (if ever) the old channel's capacity is actually cut.
- **Ignoring the step-function nature of staffing costs**: a 20% volume drop rarely converts to a 20% cost drop, because contact centres and counters are staffed in discrete bands, not continuously.
- **Treating shadow demand as waste**: new contact from previously-excluded or previously-deterred users is a real increase in [public value](../public-value/), not a modelling error — it should be reported as an access outcome, not netted off as noise.

## Sources

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
