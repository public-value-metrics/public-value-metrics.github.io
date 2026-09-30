# Multicriteria-analyse (MCA)

MCA scoort en weegt opties tegen verschillende afzonderlijke, gewogen criteria gelijktijdig, wat een gerangschikte vergelijking oplevert zonder elk criterium te dwingen tot één monetaire of natuurlijke-eenheidsschaal. Het is de beoordelingsmethode voor beslissingen waar de belangrijke uitkomsten werkelijk niet tot één getal kunnen worden herleid.

## Waarom het ertoe doet

Het Green Book sanctioneert MCA expliciet (zijn bijlage met casestudies in kader 2 en Annex A behandelen het beide rechtstreeks) voor beoordelingen waarbij baten "werkelijk onvergelijkbaar" zijn — waar alles omzetten in geld via [maatschappelijke kosten-batenanalyse](../social-cost-benefit-analysis/), of naar één uitkomst via [kosteneffectiviteitsanalyse](../cost-effectiveness-analysis-in-government/), de beslissing zou vervormen in plaats van verduidelijken (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Een locatiekeuze voor een nieuwe gevangenis bijvoorbeeld weegt kapitaalkosten af tegen impact op de gemeenschap, transportverbinding, milieueffect, en de mogelijkheid personeel te werven — criteria die geen gemeenschappelijke eenheid delen en waar het afdwingen van een gedeelde eenheid (meestal geld) een waardeoordeel zou binnensmuggelen over het relatieve belang van, zeg, milieueffect versus kosten, vermomd als objectieve rekenkunde.

De eerlijkheid van MCA is ook zijn belangrijkste zwakte: omdat wegingen worden toegekend door wie de beoordeling uitvoert (of door een panel), is de methode slechts zo legitiem als het wegingsproces. De richtlijn van het Green Book is duidelijk dat criteria en wegingen moeten worden overeengekomen en gepubliceerd *voordat* opties worden gescoord, precies om te voorkomen dat een beoordelaar achterwaarts werkt van een voorkeursoptie naar de wegingen die deze rechtvaardigen.

## De berekening

```
Voor elke optie i en criterium j:
  Score_ij   = de prestatie van de optie tegen dat criterium
              （vaak 0-100 of 1-10, uit bewijs, deskundig
              oordeel, of belanghebbende-scoring）
  Weging_j   = relatief belang van criterium j, wegingen
              tellen op tot 1 （of 100）

Gewogen score van optie i = Σ_j (Score_ij × Weging_j)

Procedure:
1. Kom criteriaset en wegingen overeen VOORDAT enige optie
   wordt gescoord （swing-weging of paarsgewijze
   vergelijking, bijv. AHP, zijn gangbare
   verzamelingsmethoden）.
2. Score elke optie tegen elk criterium op een
   gemeenschappelijke schaal, uit bewijs waar mogelijk.
3. Berekening gewogen totalen; rangschik opties.
4. Gevoeligheidstest de wegingen: overleeft de rangschikking
   plausibele meningsverschillen over hoeveel elk criterium
   zou moeten meewegen?
```

MCA produceert geen verdedigbare absolute waarde zoals de netto contante waarde van SCBA dat doet — het produceert alleen een rangschikking, voorwaardelijk aan de overeengekomen wegingen. Dit is een kenmerk wanneer de beslissing werkelijk gaat over het afwegen van onvergelijkbare goederen, en een aansprakelijkheid als het wordt gebruikt om het moeilijkere werk van monetarisatie te vermijden waar monetarisatie eigenlijk haalbaar was.

## Uitgewerkt voorbeeld

**Gemeente**: een gemeente die een locatie kiest voor een nieuw recyclingcentrum voor huishoudelijk afval, scoort drie locaties tegen vier criteria, gewogen door een interdepartementaal panel voordat enig locatiebezoek plaatsvindt:

```
Criteria （weging）:        Kapitaalkosten （30%）
                           Transporttoegang （25%）
                           Impact gemeenschap （25%）
                           Milieueffect （20%）

Locatiescores （0-100, hoger = beter）:
Locatie A: kosten 80, toegang 60, gemeenschap 40, milieu 70
Locatie B: kosten 60, toegang 90, gemeenschap 70, milieu 50
Locatie C: kosten 90, toegang 50, gemeenschap 80, milieu 60

Gewogen totalen:
Locatie A = 80(.30) + 60(.25) + 40(.25) + 70(.20)
          = 24+15+10+14 = 63
Locatie B = 60(.30) + 90(.25) + 70(.25) + 50(.20)
          = 18+22,5+17,5+10 = 68
Locatie C = 90(.30) + 50(.25) + 80(.25) + 60(.20)
          = 27+12,5+20+12 = 71,5
```

Locatie C rangschikt hoogst. Een gevoeligheidsberekening die de weging voor impact gemeenschap verschuift van 25% naar 35% (en 10 punten weghaalt van kapitaalkosten) verandert het totaal van Locatie C naar 71,5 − 3 + 8 = 76,5 en dat van Locatie B naar 68 − 6 + 7 = 69 — Locatie C blijft leiden, dus de rangschikking is robuust tegen dat plausibele meningsverschil over weging, wat precies de controle is die het Green Book verwacht gerapporteerd te zien.

**Goed doel**: een subsidieverlenende stichting die kiest tussen het financieren van een schuldhulpdienst, een voedselbanknetwerk, en een financiëlegeletterdheidsprogramma gebruikt MCA in plaats van SROI (zie [sociaal rendement op investering](../social-return-on-investment/)) precies omdat de bestuursleden in goed vertrouwen van mening verschillen over of crisisverlichting of preventie zwaarder zou moeten wegen — MCA laat hen de *vorm* van het meningsverschil overeenkomen (een wegingsbereik) in plaats van te doen alsof een enkele SROI-verhouding het oplost.

## Verband met softwareontwikkeling

MCA is het natuurlijke instrument voor leveranciers- en architectuurkeuze wanneer criteria werkelijk conflicteren — kiezen tussen een cloud-gehost en een lokaal zaaksysteem weegt kosten, risico voor datasoevereiniteit, toegankelijkheid, en leveringssnelheid af op manieren die niet tot één getal herleiden. Technische leiders moeten erop aandringen dat weging plaatsvindt voordat opties worden gescoord, precies zoals het Green Book vereist, omdat een wegingsoefening uitgevoerd na het zien van de shortlist betrouwbaar drijft richting welke optie de kamer al voorkeur gaf. Zie [bouwen versus kopen binnen de overheid](../build-vs-buy-in-government/) voor een veelvoorkomende MCA-toepassing, en [scorekaart voor publieke waarde](../public-value-scorecard/) voor een verwant gestructureerd scoringsinstrument gebruikt na de beslissing in plaats van erv oor.

## Valkuilen

- **Wegingen vastleggen nadat de opties zijn gezien.** Dit is de meest voorkomende manier waarop MCA wordt gemanipuleerd, bewust of niet; publiceer wegingen voor scoring, en registreer wie ze vaststelde.
- **De gewogen totaal behandelen als een hard getal.** Een score van 71,5 tegenover 68 is geen statistisch betekenisvol verschil tenzij de gevoeligheidsanalyse bevestigt dat de rangschikking stabiel is; rapporteer bereiken, geen valse precisie.
- **MCA gebruiken om monetarisatie te vermijden die eigenlijk haalbaar was.** Als de meeste criteria geloofwaardig konden worden geprijsd, verwerpt standaard teruggrijpen naar MCA in plaats van [SCBA](../social-cost-benefit-analysis/) informatie die de beoordeling had kunnen gebruiken.
- **Één dominante belanghebbende alle wegingen alleen laten vaststellen.** Goede praktijk van het Green Book verwacht dat wegingen worden verzameld van een representatief panel, niet van de sponsorende directeur, om te voorkomen dat de beoordeling eenvoudigweg herleidt wat die persoon al wilde.

## Bronnen

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
