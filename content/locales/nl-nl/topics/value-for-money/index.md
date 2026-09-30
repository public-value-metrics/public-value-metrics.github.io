# Waarde voor geld (Value for Money, VFM)

Waarde voor geld is de formele toets van de Britse publieke sector of uitgaven de best mogelijke balans tussen kosten en baten bereiken. Het Green Book van HM Treasury kadert dit via drie "E's" — zuinigheid (economy), efficiëntie (efficiency) en doelmatigheid (effectiveness) — waarbij rechtvaardigheid (equity) steeds vaker wordt aangevoerd als een omstreden vierde. Elke business case in de publieke sector die de toetsing doorstaat, moet alle drie expliciet beantwoorden, niet alleen beweren dat de uitgave "de moeite waard is".

## Waarom het ertoe doet

VFM is geen synoniem voor "goedkoop". Het Green Book (HM Treasury, editie 2022) is expliciet dat het kopen van de goedkoopste optie (zuinigheid) zonder te controleren of deze de bedoelde resultaten oplevert (doelmatigheid) een veelvoorkomende en kostbare fout is — een aanbesteding die 10% bespaart op eenheidskosten maar 40% minder effect levert, is minder waarde, niet meer. Het raamwerk van drie E's dwingt een business case drie werkelijk verschillende faalwijzen te onderscheiden: te veel betalen voor input, input verspillen bij omzetting naar output, en output produceren die niet vertaalt naar uitkomsten die iemand wilde. Britse overheidsuitgavencontroles — goedkeuringspunten van de Treasury, VFM-studies van het National Audit Office (NAO), en beoordelingen van de rekenplichtige ambtenaren van departementen — zijn rond deze drieledige toets gebouwd, zodat een technische business case die alleen kosten (zuinigheid) behandelt, de toetsing niet doorstaat, ook al is de technologie gedegen.

Het "vierde E", rechtvaardigheid, is omstreden precies omdat het in conflict kan komen met de andere drie: de meest efficiënte manier om een dienst landelijk te leveren is zelden de meest rechtvaardige, omdat het concentreren van levering waar het goedkoopst is om burgers te bereiken vaak betekent dat de moeilijkst bereikbaren onderbediend worden. De herziening van het Green Book in 2020 reageerde op kritiek (onder meer van het Treasury Select Committee in 2020 en IPPR North) dat zuivere kosten-batenverhoudingen systematisch al welvarende regio's begunstigden, door te vereisen dat beoordelingen distributie-effecten expliciet behandelen — zie [distributieve weging](../distributional-weighting/).

## De berekening

VFM is geen enkele ratio maar een drie- (of vier-)delige diagnose, in volgorde toegepast:

```
Zuinigheid:     Worden inputs gekocht tegen de laagst
                redelijke kosten voor de vereiste kwaliteit?
                （£ per inputeenheid）

Efficiëntie:    Hoe goed worden inputs omgezet in output?
                （output / input, bijv. zaken behandeld per
                casemanager-uur）

Doelmatigheid:  Leveren de output daadwerkelijk de bedoelde
                uitkomsten op? （behaalde uitkomsten /
                bedoelde uitkomsten）

［Rechtvaardigheid］: Worden kosten en baten rechtvaardig
                verdeeld over de bevolking, of geconcentreerd
                bij wie het minst nodig heeft?
```

Een VFM-mislukking kan onafhankelijk op elke fase optreden: zuinige aanbesteding met inefficiënte levering; efficiënte levering van het verkeerde resultaat; doelmatige uitkomsten gekocht tegen buitensporige kosten. Zie [kerncijfers publieke sector](../public-sector-kpis/) voor hoe deze zich vertalen naar meetbare indicatoren, en [kosteneffectiviteitsanalyse binnen de overheid](../cost-effectiveness-analysis-in-government/) voor de formele vergelijkingsmethode.

## Uitgewerkt voorbeeld

**Gemeentelijk contactcentrum**: een gemeente vergelijkt twee opties voor een nieuw zaaksysteem.

- *Optie A*: licentie van £600.000 (goedkoopst beschikbaar), maar medewerkers doen gemiddeld 22 minuten per zaak omdat de workflow handmatige herinvoer tussen systemen vereist — de efficiëntie is slecht.
- *Optie B*: licentie van £900.000, geïntegreerde workflow, medewerkers doen gemiddeld 9 minuten per zaak.

Zuinigheid alleen begunstigt A (£300.000 goedkoper). Maar bij 40.000 zaken/jaar kost A 40.000 × 22/60 = 14.667 personeelsuren; B kost 40.000 × 9/60 = 6.000 personeelsuren. Bij een volledig belaste personeelskost van £28/uur kost A £410.667/jaar aan personeelstijd tegenover £168.000/jaar voor B — een efficiëntiekloof van £242.667/jaar die het initiële zuinigheidsverschil van £300.000 binnen 14 maanden overtreft. VFM begunstigt B zodra efficiëntie wordt meegerekend, niet A.

**Subsidie aan een goed doel**: een financier vergelijkt een subsidie van £50.000 die 200 succesvolle werkplaatsingen oplevert (£250/plaatsing — ogenschijnlijk uitstekende zuinigheid) tegenover een subsidie van £120.000 die 350 plaatsingen oplevert die meer dan 12 maanden standhouden, vergeleken met de plaatsingen van de eerste subsidie, waarvan de helft binnen 3 maanden verloren gaat. Doelmatigheid — duurzame uitkomsten — keert de schijnbare VFM-rangschikking om: de werkelijke kosten per *duurzame* plaatsing zijn 250 ÷ 0,5 = £500 voor de eerste subsidie, tegenover £120.000/350 ≈ £343 voor de tweede.

## Verband met softwareontwikkeling

VFM geeft technische teams een discipline om technische business cases te kaderen op de manier waarop financiële en auditfuncties ze daadwerkelijk zullen lezen:

- Vermeld zuinigheid, efficiëntie en doelmatigheid als afzonderlijke posten in een business case, niet als één samengevoegd "waarde"-cijfer — een beoordelaar die getraind is op het Green Book zal precies om deze uitsplitsing vragen.
- Wees op je hoede voor het optimaliseren van aanbestedingskosten (zuinigheid) ten koste van integratie- en workflow-efficiëntie, een zeer gangbare valse besparing binnen overheids-IT (zie [totale eigendomskosten binnen overheids-IT](../total-cost-of-ownership-in-government-it/) en [bouwen versus kopen binnen de overheid](../build-vs-buy-in-government/)).
- Doelmatigheid vereist uitkomstgegevens, niet alleen output-aantallen — koppel leveringsmaatstaven aan [uitkomsten versus output](../outcomes-vs-outputs/) en aan echte evaluatie via [contrafeitelijke analyse](../counterfactual-analysis/) in plaats van aan te nemen dat output uitkomsten impliceert.
- Wanneer een systeem ongelijk dient over regio's of bevolkingsgroepen, is de rechtvaardigheidsvraag een legitiem VFM-bezwaar, geen los "leuk om te hebben" — zie [digitale inclusie](../digital-inclusion/).

## Valkuilen

- **VFM gelijkstellen aan de laagste prijs.** Zuinigheid is een derde (of een kwart) van de toets; het Green Book waarschuwt expliciet tegen aanbestedingsregels voor "laagste kosten" die efficiëntie en doelmatigheid negeren.
- **Output meten en dit uitkomsten noemen.** Zaakdoorstroom (efficiëntie) is niet hetzelfde als zaken goed afgehandeld (doelmatigheid); zie [uitkomsten versus output](../outcomes-vs-outputs/).
- **Rechtvaardigheid als optioneel behandelen.** Sinds de update van het Green Book in 2020 moeten distributie-effecten samen met de traditionele drie E's worden beoordeeld, niet achteraf toegevoegd; dit later alsnog inbouwen na goedkeuring van een business case is veel moeilijker dan het van begin af aan meenemen.
- **Opties met verschillende volumes vergelijken zonder normalisatie.** Een VFM-vergelijking per eenheid tussen opties die verschillende populaties bedienen moet corrigeren voor schaal, anders is de efficiëntievergelijking betekenisloos.

## Bronnen

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" and VFM study methodology.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the
  Treasury Select Committee's 2020 review of the Green Book's regional bias).
