# AI-productiviteit in de publieke sector

Maatstaven voor wat AI-codeeringsassistentie daadwerkelijk doet met engineeringoutput — suggestieacceptatiepercentages, gecontroleerde-studie-versnellingen, PR-doorvoer, en coderetentie — dragen een echt contradictoire bewijsbasis zelfs voordat publieke-sectorbeperkingen worden toegevoegd: gegevensclassificatie beperkt welke delen van een legacy-bestand een AI-hulpmiddel überhaupt mag aanraken, aanbestedingscycli betekenen dat het geëvalueerde hulpmiddel vaak een modelgeneratie achter huidige capaciteit is, en veiligheidsmachtigingsvereisten bepalen wie het mag gebruiken op wat.

## Waarom het ertoe doet

De twee meest geciteerde gecontroleerde studies wijzen in tegengestelde richtingen. De GitHub-Copilot-RCT van Peng et al. uit 2023 vond dat ontwikkelaars een greenfield-HTTP-server-taak 55,8% sneller voltooiden met Copilot (1u11m vs 2u41m, n=95). De RCT van METR uit 2025 vond dat ervaren open-source-ontwikkelaars die aan *hun eigen volwassen repositories* werkten 19% langzamer waren met vroeg-2025-AI-hulpmiddelen, terwijl ze geloofden ongeveer 20% sneller te zijn. Beide studies zijn gedegen; de tegenspraak is de bevinding — greenfield-taak-werkzaamheid vertaalt zich niet naar volwassen-codebase-effectiviteit, en veel overheidsengineering is volwassen-codebase-werk op bestanden die ouder en idiosyncratischer zijn dan de mediane commerciële repository. Het Generative AI Framework for HMG (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) van het Central Digital and Data Office zet principes uiteen voor verantwoorde adoptie precies omdat deze bewijsbasis niet eenvoudig kan worden geïmporteerd uit leveranciersdemonstraties; departementen worden verwacht hulpmiddelen te evalueren tegen hun eigen gegevensverwerkings- en beveiligingsvereisten voor uitrol.

## De berekening

```
Acceptatiepercentage  = geaccepteerde suggesties / getoonde
                        suggesties
Retentiepercentage    = AI-code overlevend tot merge /
                        geaccepteerde AI-code
Versnelling           = (t_controle − t_AI) / t_controle
                        (alleen van gecontroleerde
                        vergelijking)
Doorvoerdelta          = Δ samengevoegde PR's/ontwikkelaar/week

Publieke-sector-dekkingsfactor:
  subsidiabel-codebase-aandeel = LOC op systemen waar de
    classificatie (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) het
    hulpmiddel überhaupt toelaat

Waardemodel = ontwikkelaars × subsidiabele-dekking ×
             bespaarde tijd × belast tarief × benutting
             — elke term heeft lokale meting nodig, en de
             dekkingsfactor heeft geen private-sectorequivalent
```

## Uitgewerkt voorbeeld

Een overheidsdepartement piloot een AI-codeeringsassistent over 300 ontwikkelaars, maar alleen systemen geclassificeerd OFFICIAL zijn subsidiabel voor hulpmiddelgebruik — 70% van het bestand naar personeelsaantaltoewijzing, met de resterende 30% (hogere-classificatie-systemen) volledig uitgesloten.

```
Subsidiabele ontwikkelaars = 300 × 0,70 = 210

Pilotresultaat: zelfgerapporteerde bespaarde tijd 40 min/dag;
              gemeten taakniveau-besparing 12 min/dag (0,2u)
              — de METR-perceptiekloof, gereproduceerd in het
              wild

Waardeer het GEMETEN cijfer:
  210 × 0,2u × 220 dagen × £55/u belast × 0,6 benutting
  = 210 × 44 uren × £55 × 0,6
  = 9.240 uren × £55 × 0,6 ≈ £304.920/jaar capaciteit

Kosten: 210 gelicentieerde plaatsen × £22/maand × 12 ≈
£55.440/jaar

Netto capaciteitsverhouding ≈ 304.920 / 55.440 ≈ 5,5:1
```

Financierbaar tegen ruwweg een derde van de zelfgerapporteerde baat, en alleen na het toepassen van het classificatieplafond — alle 300 ontwikkelaars licentiëren op de sterkte van het zelfgerapporteerde cijfer zou zowel de subsidiabele populatie als de echte besparing hebben overdreven.

## Verband met softwareontwikkeling

De disciplines die direct overgaan: draai **pragmatische proeven** op de eigen codebase en echte tickets van het departement, niet leveranciersdemonstratietaken, omdat het METR-resultaat specifiek een volwassen-codebase-bevinding is; behandel **acceptatiepercentage als een proxy, geen uitkomst** — hoge acceptatie met lage retentie is het softwareequivalent van overdiagnose; koppel elke doorvoerbewering aan een **stabiliteitscontrole**, omdat het rapport van DORA uit 2025 vond dat AI-adoptie doorvoer optilt maar wijzigingsstabiliteit degradeert, wat precies de netto-batenanalyse is die [DORA-metrics-voor-public-value](../dora-metrics-for-public-value/) gebouwd is om te draaien; en wees eerlijk dat AI-tooling de kloof kan verbreden, niet verkleinen, op [technische-schuld](../technical-debt-as-public-value-erosion/)-zware legacy-bestanden, omdat trainingsgegevens de COBOL, 4GL, en op-maat-gemaakte mainframe-code gebruikelijk in de overheid ondervertegenwoordigen, dus suggestiekwaliteit op precies de systemen die de meeste hulp nodig hebben is vaak het zwakst. Dit staat naast de bredere [AI-waarde-in-de-overheid](../ai-in-government-value/)-vraag en zou moeten worden geregeerd door dezelfde [cyberbeveiligingswaarde-publieke-sector](../public-sector-cybersecurity-value/)-beperkingen die beperken waar enig derde-partij-hulpmiddel überhaupt code of gegevens mag zien.

## Valkuilen

- **Leveranciersstudietransplantatie**: greenfield-RCT-versnellingen toepassen op legacy-integratiewerk is precies de fout die de METR-studie blootlegde.
- **Zelfrapportage als meting**: een perceptie-versus-gemeten-kloof van 20 procentpunten is de grootste bekende bias in deze literatuur, en het blaast businesscases op die alleen op ontwikkelaarsenquêtes vertrouwen.
- **Het classificatieplafond negeren**: licentie- en waardemodellen gebouwd op totaal personeelsaantal in plaats van de subsidiabele, classificatie-vrijgegeven deelverzameling overdrijven systematisch zowel kosteneffectiviteit als haalbare dekking.
- **Aanbestedingscyclusvertraging**: raamwerkgebaseerde hulpmiddelenaanbesteding kan betekenen dat een pilot een modelgeneratie evalueert die 12-18 maanden achter is op wat publiekelijk beschikbaar is tegen de tijd van volledige uitrol, waardoor de versnellingsaanname van de oorspronkelijke businesscase verouderd is voor lancering.

## Bronnen

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
