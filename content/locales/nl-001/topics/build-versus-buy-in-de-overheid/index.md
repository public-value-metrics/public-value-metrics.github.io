# Build versus buy in de overheid

Build-versus-buy is een gestructureerde, risicogecorrigeerde vergelijking van op-maat-gemaakte ontwikkeling tegen commerciële of commodity-acquisitie, vergeleken op verdisconteerde [totale eigendomskosten](../totale-eigendomskosten-in-overheids-it/), tijd-tot-waarde, en risico. De overheid is structureel een kopende sector — de Technology Code of Practice zet een vermoeden richting commodity- en cloud-oplossingen — toch gaan engineeringteams binnen departementen nog steeds standaard naar bouwen, om dezelfde redenen dat bouwers overal dat doen.

## Waarom het ertoe doet

De Technology Code of Practice van de Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>) en de bijbehorende Service-Manual-richtlijn over het beslissen om te bouwen of te kopen duwen departementen om op-maat-gemaakte ontwikkeling te rechtvaardigen tegen een vermoeden dat commodity-capaciteit zou moeten worden gekocht, niet gebouwd, en dat alleen echt nieuwe, missie-differentiërende capaciteit op-maat-gemaakte code rechtvaardigt. De optimismebias-aanvullende-richtlijn van HM Treasury bij het Green Book, ontleend aan de Mott MacDonald-herziening van 2002 van grote publieke aanbestedingen, geeft IT-projecten het breedste opwaarderingsbereik van elke beoordeelde categorie — kapitaalkostenschattingen aanbevolen voor opwaardering met 10% aan de lage kant en tot 200% aan de hoge kant voordat ze worden gebruikt in beoordeling, wat weerspiegelt hoe slecht softwarebouwen historisch onderschat is over publieke aanbesteding. Build-versus-buy-analyse bestaat precies om die risicoaanpassing op tafel te dwingen voor goedkeuring, in plaats van het te laten opduiken als een binnen-jaar-overschrijdingsverzoek.

## De berekening

```
Vergelijk over dezelfde horizon van 3-5 jaar, verdisconteerd
tegen de Green-Book-maatschappelijke-discontovoet (zie
maatschappelijke-discontovoet.md):

NPV_optie = CW(baten, verschoven door tijd-tot-waarde) −
           CW(TCO)

Risicoaanpassingen (Green-Book-optimismebias-patroon):
  bouwkosten × 1,1-3,0        (IT-projectopwaardering-bereik,
                              Mott MacDonald)
  bouw-tijd-tot-waarde + 40-60% (deploymentvertragingsprior)
  kopen: voeg integratie-realiteitscontrole en
  contractuittredingskosten toe in plaats daarvan

Besluitaandrijvers, in de volgorde waarin ze meestal beslissen:
  1. differentiatie — is deze capaciteit de missie, of
     leidingwerk?
  2. tijd-tot-waarde × kosten van vertraging (zie kosten-van-
     vertraging-in-overheidsprogramma's.md)
  3. risicogecorrigeerde totale eigendomskosten
```

## Uitgewerkt voorbeeld

Een gemeente heeft een casemanagementsysteem nodig voor volwassenenzorg. Kopen: SaaS tegen £180.000/jaar, live binnen 4 maanden. Bouwen: geschat £900.000 plus £150.000/jaar onderhoud, live binnen 14 maanden.

```
Risicogecorrigeerde bouwkosten = 900.000 × 1,4 = £1.260.000
TCO 5 jaar:
  kopen = 180.000 × 5 = £900.000
  bouwen = 1.260.000 + 150.000 × 5 = £2.010.000

Vertragingsterm: het systeem vermijdt £40.000/maand aan
gedupliceerde beoordelingen; bouwen arriveert 10 maanden
later dan kopen.
CoD = 10 × 40.000 = £400.000

Effectieve vergelijking: £900.000 (kopen) vs 2.010.000 +
400.000 = £2.410.000 (bouwen)
```

Kopen wint met ruwweg £1,5 miljoen over vijf jaar, en de grootste enkele regel na de bouwschatting zelf is de vertragingskost die een pure-capex-vergelijking nooit zou hebben blootgelegd.

## Verband met softwareontwikkeling

De disciplines die direct overgaan van deze analyse naar leveringspraktijk: **prior-gebaseerde risicoaanpassing** — de Mott-MacDonald-opwaardering is het softwareequivalent van Green-Book-optimismebias mechanisch toegepast, dus teams zouden moeten argumenteren voor uitzonderingen erop in plaats van aan te nemen dat hun schatting de uitzondering is; **comparator-eerlijkheid** — het alternatief voor bouwen is de beste beschikbare kooptie, geen "niets", wat direct koppelt met [opportuniteitskosten-in-publieke-uitgaven](../alternatieve-kosten-in-publieke-uitgaven/); en **eerlijke TCO-vergelijking** — elk bouwvoorstel zou moeten worden vergeleken tegen de volledige [totale eigendomskosten](../totale-eigendomskosten-in-overheids-it/) van een kooptie, niet zijn lijstprijs. Waar bouwen echt wint, zouden de [kosten-van-vertraging](../kosten-van-vertraging-in-overheidsprogrammas/) van de extra bouwtijd expliciet moeten worden geprijsd in de businesscase, niet achtergelaten als een onvermelde aanname dat tijd er niet toe doet.

## Valkuilen

- **Leverancierslijstprijs vergelijken met een niet-risicogecorrigeerde bouwschatting**: dit vleit bouwen tweemaal, eenmaal op kosten en eenmaal op schema.
- **Nul-geprijsde interne arbeid**: ambtenarij-engineeringtijd wordt behandeld als "gratis" omdat het al op het departementale personeelsbudget staat, wat zijn echte opportuniteitskost verhult tegen ander werk dat dat team zou kunnen doen.
- **Ongeprijsde gebondenheid in beide richtingen**: leveranciersuittreding en gegevensportabiliteitskosten zijn echt, maar dat is ook de bus-factor van een op-maat-gemaakte bouw en zijn afhankelijkheid van het behouden van een klein, moeilijk te vervangen intern team over zijn levensduur.
- **Missiedifferentiatie beweerd voor leidingwerk**: "dit is kernonderdeel voor ons" beweerd over integratiemiddleware of een documentopslag — test het tegen of een burger of casebehandelaar er ooit iets van zou merken welke draait erachter.

## Bronnen

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
