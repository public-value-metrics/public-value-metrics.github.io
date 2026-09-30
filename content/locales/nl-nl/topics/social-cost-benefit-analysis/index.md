# Maatschappelijke kosten-batenanalyse (SCBA)

Maatschappelijke kosten-batenanalyse zet elke kost en baat van een beleid of programma — markt- en niet-marktgerelateerd — om in een gemeenschappelijke monetaire eenheid, verdisconteert toekomstige stromen naar huidige waarde, en verrekent ze om één getal te produceren: maakt dit voorstel de samenleving beter af, en met hoeveel?

## Waarom het ertoe doet

SCBA is de standaard kwantitatieve methode binnen de economische zaak van [Green Book-beoordeling](../green-book-appraisal/): de richtlijn van HM Treasury vereist dat voorstellen een positieve netto contante maatschappelijke waarde (NCMW) aantonen waar baten geloofwaardig kunnen worden gemonetariseerd, met gebruik van betalingsbereidheid als basiswaarderingsprincipe voor niet-marktgoederen (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, hoofdstuk 5). De discipline die het afdwingt, is dat "maatschappelijke" kosten-batenanalyse niet dezelfde oefening is als een private investeringsbeoordeling: het moet kosten en baten omvatten die toevallen aan derde partijen die geen partij zijn bij de transactie (externaliteiten), het moet de [maatschappelijke discontovoet](../social-discount-rate/) gebruiken in plaats van een commerciële kapitaalkost, en het moet [distributieve weging](../distributional-weighting/) toepassen waar een pond meer betekent voor een arm huishouden dan voor een rijk huishouden.

Waar SCBA faalt, is precies waar critici het verwachten: goederen zonder marktequivalent — schone lucht, sociale cohesie, de waarde van een gered leven — moeten worden gemonetariseerd met methoden van [betalingsbereidheid](../stated-preference-valuation/) of [afgeleide voorkeur](../revealed-preference-valuation/), of een [schaduwprijs](../shadow-pricing/) moet worden geconstrueerd. Wanneer monetarisatie omstreden is in plaats van louter moeilijk, raadt het Green Book zelf aan om terug te vallen op [kosteneffectiviteitsanalyse](../cost-effectiveness-analysis-in-government/) of [multicriteria-analyse](../multi-criteria-decision-analysis/) in plaats van een getal af te dwingen dat niemand gelooft.

## De berekening

```
NCMW = Σ ［t=0 tot T］ (Baat_t − Kost_t) / (1 + r)^t

waarbij:
  Baat_t = alle gemonetariseerde baten in jaar t, inclusief
           niet-marktgoederen gewaardeerd via betalings-
           bereidheid/afgeleide voorkeur of schaduwprijs
  Kost_t = alle gemonetariseerde kosten in jaar t, inclusief
           alternatieve kosten van middelen
           （zie ../opportunity-cost-in-public-spending/）
  r      = maatschappelijke discontovoet （HM Treasury
           stelt 3,5% vast, dalend naar lagere voeten na
           jaar 30, volgens Green Book Annex A）
  T      = beoordelingsperiode

Baten-kostenverhouding （BKV） = Σ HW（Baten） / Σ HW（Kosten）
```

Een BKV boven 1 (of NCMW boven nul) duidt op netto maatschappelijke waarde. De categorieën van het Green Book voor waarde voor geld (zoals gebruikt bij transport- en infrastructuurbeoordeling) benoemen BKV-bereiken: onder 1,0 is slechte waarde voor geld, 1,0–1,5 is laag, 1,5–2,0 is gemiddeld, 2,0–4,0 is hoog, en boven 4,0 is zeer hoog. Gevoeligheidsanalyse — het opnieuw uitvoeren van de NCMW onder pessimistische en optimistische aannames — is verplicht, niet optioneel, omdat gemonetariseerde niet-marktbaten brede onzekerheidsmarges dragen.

## Uitgewerkt voorbeeld

**Gemeente**: een gemeente beoordeelt een investering van £3m in een nieuw fiets- en wandelnetwerk over een beoordelingsperiode van 20 jaar bij een discontovoet van 3,5%.

```
Kosten: £3m kapitaal in jaar 0, £50.000/jaar onderhoud
（jaar 1-20）
HW（onderhoud） ≈ £50.000 × 14,2 （20-jarige
annuïteitsfactor bij 3,5%） ≈ £710.000
Totale HW（kosten） ≈ £3,71m

Baten （allemaal gemonetariseerd via gepubliceerde
DfT/WHO-waarderingsinstrumenten）:
  Gezondheidsbaat van meer fysieke activiteit: £180.000/jaar
  Vermindering ziekteverzuim: £40.000/jaar
  Vermindering opstopping （minder autoritten）: £60.000/jaar
  Totale batenstroom: £280.000/jaar
HW（baten） ≈ £280.000 × 14,2 ≈ £3,98m

NCMW = £3,98m − £3,71m = +£0,27m
BKV = 3,98 / 3,71 = 1,07 → "lage" waarde voor geld
```

Het plan haalt de lat maar net; een gevoeligheidsberekening met een 20% lagere gezondheidsbaatschatting (die de werkelijke onzekerheid in de waardering van fysieke activiteit weerspiegelt) keert de BKV om tot onder 1,0, wat precies de reden is waarom het Green Book vereist dat de gevoeligheidstabel wordt gepubliceerd samen met het koptekstcijfer, niet alleen de centrale schatting.

**Goed doel**: een programma ter preventie van kindersterfte dat £500.000/jaar kost, wordt geëvalueerd met behulp van de waarde van een statistisch leven (VSL) — een schaduwprijs, geen waargenomen marktprijs — van ongeveer £2,1m (HM Treasury's in 2023 bijgewerkte cijfer, zelf afgeleid uit betalingsbereidheidsstudies). Het voorkomen van één kindersterfte per jaar tegen een kost van £500.000 geeft een BKV van 4,2, comfortabel "zeer hoge" waarde voor geld — maar het gehele resultaat berust op het VSL-cijfer, wat de reden is dat elke SCBA die VSL gebruikt, dit moet openbaar maken als een aanname, geen feit.

## Verband met softwareontwikkeling

SCBA is het natuurlijke kader voor beslissingen over platform- en infrastructuurinvesteringen in overheidssoftware — het vergelijken van een gedeeld identiteitsplatform met departementale puntoplossingen vereist bijvoorbeeld het monetariseren van baten zoals verminderde dubbele onboardingkosten, verminderde fraude, en snellere tijd-tot-dienst die op zichzelf geen marktprijs hebben. Engineers die de onderliggende dienst bouwen, moeten verwachten dat programmaleiders om inputs voor deze analyse vragen: eenheidskosten van transacties (zie [kosten per transactie](../cost-per-transaction/)), verwachte volumes, en kosten van degradatie/downtime. De discipline die het meest belangrijk is om te importeren: verdisconteer toekomstige baten, benoem de contrafeitelijke basislijn expliciet (zie [contrafeitelijke analyse](../counterfactual-analysis/)), en presenteer nooit een enkele puntschatting zonder zijn gevoeligheidsbereik.

## Valkuilen

- **Baten dubbel tellen.** Zowel "bespaarde tijd" als "productiviteit gewonnen uit die tijd" tellen als afzonderlijke batenposten overdrijft de zaak; bespaarde tijd is de baat, het gebruik ervan stroomafwaarts is geen extra baat, tenzij onafhankelijk bewezen.
- **Verplaatste kosten weglaten.** Een regeling die opstopping van één weg naar een andere verplaatst, of fraude van één kanaal naar een ander, heeft niet de netto baat gecreëerd die zijn koptekst-NCMW impliceert — zie [verdringing en toeschrijving](../displacement-and-attribution/).
- **Een private discontovoet gebruiken.** Het toepassen van een commerciële kapitaalkost (zeg 8–10%) in plaats van de maatschappelijke discontovoet onderwaardeert systematisch langetermijn publieke baten zoals gezondheids- en milieuwinsten — zie [maatschappelijke discontovoet](../social-discount-rate/).
- **Het onomstredene monetariseren en het omstredene wegwuiven.** Als twee derde van de baat van een voorstel een vol vertrouwen gemonetariseerde efficiëntiebesparing is en een derde een wankel gemonetariseerde welzijnswinst, mengt het koptekst-NCMW stilzwijgend een hard getal met een zacht getal; rapporteer ze afzonderlijk.

## Bronnen

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
