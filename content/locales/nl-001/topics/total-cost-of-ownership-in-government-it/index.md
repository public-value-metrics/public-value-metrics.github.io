# Totale eigendomskosten (TCO) in overheids-IT

Totale eigendomskosten zijn de volledige levenscycluskosten van een systeem — acquisitie plus elk jaar van het draaien ervan — verdisconteerd naar een gemeenschappelijke datum. In overheids-IT is de enkele meest betrouwbare voorspellingsfout het vergelijken van leveranciers of opties op acquisitieprijs alleen, terwijl operaties en onderhoud typisch tussen de helft en vier vijfde van de levensduurrekening uitmaken.

## Waarom het ertoe doet

Het Green Book van HM Treasury vereist dat de financiële zaak in elke Five-Case-Model-businesscase gehele-levensduurkosten dekt, niet alleen kapitaaluitgaven — toch heeft het National Audit Office herhaaldelijk departementen gevonden die IT-investeringen goedkeurden tegen een incomplete of optimistische draaikostenvoorspelling, om vervolgens de echte operationele kost te ontdekken zodra het systeem live is en de kapitaalbudgetregel gesloten is. De Technology Code of Practice van de Government Digital Service en het Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) duwt departementen naar cloud- en commodity-hosting deels omdat het de doorlopende kost zichtbaar en vergelijkbaar maakt, in plaats van verstopt in een enkel kapitaalaanbestedingscijfer dat aantrekkelijk laag lijkt bij goedkeuring en duur verkeerd drie jaar later.

## De berekening

```
TCO = Acquisitiekosten + Σ(t=1..N) Jaarlijkse operationele
     kosten_t / (1+r)^t − restwaarde (verdisconteerd)

r = HM-Treasury-Green-Book-standaard-maatschappelijke-
    discontovoet, 3,5%/jaar (dalend-tarief-schema voor
    horizonten na 30 jaar)

Operationele-kostencomponenten: hosting/licentiëring,
ondersteuning en onderhoud, beveiligingspatching en
compliance, personeelstijd, geplande vernieuwing/migratie
```

Zie [maatschappelijke discontovoet](../social-discount-rate/) voor waarom de discontofactor ertoe doet over een typische levensduur van een systeem van 5-10 jaar, en [build-versus-buy-in-de-overheid](../build-vs-buy-in-government/) voor hoe TCO invoert in een build/buy-beslissing.

## Uitgewerkt voorbeeld

Een departement vergelijkt twee casemanagementsystemen op een horizon van 5 jaar tegen de discontovoet van 3,5% van het Green Book.

```
Systeem A: capex £3.500.000, opex £250.000/jaar
Systeem B: capex £1.800.000 (ziet goedkoper uit), opex
           £650.000/jaar (zwaardere leveranciersondersteuning
           en integratielast)

Naïeve vergelijking op capex alleen: B wint, £1,8M < £3,5M.

Discontofactorsom, 5 jaar tegen 3,5%: 0,966+0,934+0,902+
0,871+0,842 ≈ 4,515

TCO_A = 3.500.000 + 250.000 × 4,515 = 3.500.000 + 1.128.750 =
£4.628.750
TCO_B = 1.800.000 + 650.000 × 4,515 = 1.800.000 + 2.934.750 =
£4.734.750
```

TCO draait de naïeve beslissing om: Systeem B is marginaal duurder over vijf jaar zodra operationele kosten worden verdisconteerd en opgeteld, omdat zijn opex-aandeel van levensduurkosten 62% is (2.934.750 / 4.734.750) tegen het aandeel van 24% van Systeem A — een concreet voorbeeld van de "onderhoud is de meerderheid van de rekening"-bevinding, volledig verborgen door prijskaartjes te vergelijken.

## Verband met softwareontwikkeling

TCO is het cijfer dat elke [build-versus-buy](../build-vs-buy-in-government/)-beslissing en elke [technische-schuld](../technical-debt-as-public-value-erosion/)-afbouwzaak zou moeten disciplineren, omdat schuldrente en uitgesteld onderhoud beide operationele-kostenregels zijn die bij hetzelfde verdisconteerde totaal behoren, ongeacht of iemand ze heeft bijgehouden. Ingenieurs die een platform- of leverancierskeuze voorstellen zouden de volledige TCO-tabel moeten presenteren, niet de aanbestedingsprijs, omdat de aanbestedingsprijs precies het cijfer is waarop het Green Book de financiële zaak ontworpen heeft om departementen tegen te houden zich alleen erop te baseren. TCO is ook de eerlijke noemer voor [value-for-money](../value-for-money/)-oordelen — VFM vergelijkt baat met kosten, en een ondertelde kostenregel blaast elke VFM-verhouding in de businesscase op.

## Valkuilen

- **Alleen-capex-vergelijking**: de enkele meest voorkomende aanbestedingsfout — leverancierlijstprijzen vergelijken zonder een overeenkomende operationele-kostenvoorspelling voor elke optie.
- **Exit- en migratiekosten uitsluiten**: gegevensextractie bij contracteinde, herplatformering, en leveranciersgebondenheidsboetes zijn echte TCO-regels die zelden verschijnen in de oorspronkelijke businesscase.
- **Beveiligings- en compliancekosten uitsluiten**: patch-cadans, accreditatievernieuwing, en auditkosten schalen met systeemleeftijd en complexiteit — zie [cyberbeveiligingswaarde-publieke-sector](../public-sector-cybersecurity-value/) — en worden routinematig weggelaten uit de opex-voorspelling.
- **Ongedisconteerde vergelijking tussen opties met verschillende kostenprofielen**: het vergelijken van een capex-zware optie met een opex-zware zonder discontering bevoordeelt systematisch welke optie dan ook toevallig meer kosten uitstelt naar latere jaren.

## Bronnen

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
