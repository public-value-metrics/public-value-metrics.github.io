# Open-datawaarde

Open-datawaarde is het probleem van het schatten van wat overheids- en publieke gegevens waard zijn wanneer ze geen prijs hebben: ze worden niet verkocht, dus er is geen omzetregel, maar het vrijgeven ervan (weerrecords, vervoersroosters, postcodegrenzen, bedrijfsregisters) genereert aantoonbaar economische en sociale activiteit stroomafwaarts. Het goed waarderen ervan doet ertoe omdat "het is gratis om vrij te geven" en "het is waardeloos" beide verkeerd zijn, en een softwareingenieur die beslist of hij een API of een dataset moet openen, heeft een beter argument nodig dan een van beide.

## Waarom het ertoe doet

De meest geciteerde top-down-schatting komt uit het rapport "Open data: Unlocking innovation and performance with liquid information" van het McKinsey Global Institute uit 2013, dat de potentiële jaarlijkse waarde van open data over zeven domeinen — onderwijs, transport, consumentenproducten, elektriciteit, olie en gas, gezondheidszorg, en consumentenfinanciën — schatte op $3 biljoen tot $5 biljoen per jaar wereldwijd, via mechanismen waaronder verhoogde transparantie, aanbod efficiënter matchen met vraag, en het mogelijk maken van nieuwe producten en diensten gebouwd op de gegevens. Dat cijfer is een scenarioschatting, geen gemeten uitkomst, en het wordt routinematig verkeerd geciteerd alsof het omzet was die de overheid direct zou kunnen vastleggen, terwijl de waarde vooral toekomt aan derde partijen — bedrijven, onderzoekers, burgers — die de gegevens gebruiken, wat precies het punt is van het openen ervan in plaats van het verkopen. Het Britse Open Data Institute, medeopgericht door Sir Tim Berners-Lee en Sir Nigel Shadbolt in 2012, heeft sindsdien een lichaam van meer granulaire, bottom-up-casestudies gebouwd — sector voor sector, dataset voor dataset — die veel nuttiger zijn voor een echte businesscase dan het McKinsey-koptekstcijfer, omdat ze het mechanisme van waardecreatie tonen, niet alleen zijn geaggregeerde omvang.

## De berekening

Open data heeft geen marktprijs, dus waarderingsmethoden vervangen er een; drie benaderingen keren terug, en geen is alleen voldoende:

```
1. Vermeden-kosten-/vervangingskostenmethode:
   waarde ≈ wat gebruikers zouden hebben betaald om de
   equivalente gegevens zelf te produceren of te licentiëren —
   een ondergrens, negeert waarde gecreëerd door gebruiken die
   de oorspronkelijke producent nooit anticipeerde

2. Marktanaloog-/stroomafwaartse-activiteitsmethode:
   waarde ≈ omzet of besparingen gegenereerd door bedrijven/
   diensten gebouwd op de gegevens (bijv. navigatie-apps
   gebouwd op open kaart- en verkeersgegevens) — legt echte
   economische activiteit vast maar is moeilijk netjes toe te
   schrijven aan de gegevensvrijgave zelf (zie additionaliteit-
   en-deadweight)

3. Contingente/stated-preference-methode:
   waarde ≈ wat gebruikers zeggen te zullen betalen, of de tijd
   die ze zeggen het hen bespaart — zie stated-preference-
   waardering voor de algemene methode en zijn biases

Geen van deze produceert een cijfer zo schoon als een marktprijs;
geloofwaardige open-data-businesscases trianguleren over twee
of meer, en zijn expliciet over welk mechanisme het werk doet.
```

## Uitgewerkt voorbeeld

**Illustratieve nationale kaart-/adresgegevensvrijgave** (methodologie naar ODI-achtige casestudies, cijfers illustratief van de schaal die zulke studies typisch vinden):

```
Vermeden-kosten-schatting:
  Bedrijven die anders equivalente adresmatching-gegevens
  commercieel zouden licentiëren, tegen een geschatte
  gemiddelde licentiekost van £4.000/jaar, over een geschatte
  15.000 KMO's die nu de gratis open dataset gebruiken
  = 15.000 × £4.000 = £60.000.000/jaar aan alleen vermeden
  licentiekosten

Stroomafwaartse-activiteitsschatting (meer speculatief, heeft
een contrafeitelijke situatie nodig):
  Nieuwe leverroutering- en logistiekproducten gebouwd op de
  open gegevens die niet zouden bestaan, of materieel slechter
  zouden zijn, zonder die — vereist een vergelijking tegen de
  contrafeitelijke situatie van de gegevens die gesloten of
  commercieel gelicentieerd blijven (contrafeitelijke-analyse),
  omdat een deel van die activiteit toch zou gebeuren op
  betaalde gegevens tegen een hogere prijs, wat deadweight is
  in de zin van "waarde gecreëerd door het te openen"

Een verdedigbare businesscase rapporteert het
vermeden-kosten-cijfer als de solide ondergrens, en behandelt
het stroomafwaartse-activiteitscijfer als een
bovengrens-scenario, geen feit.
```

## Verband met softwareontwikkeling

Voor ingenieurs is de praktische open-data-waardevraag meestal nauwer dan de nationale koptekstcijfers: verhoogt het openen van deze specifieke API of dataset (in plaats van het achter een partnerovereenkomst te houden) herbruik genoeg om de doorlopende kosten van het documenteren, versioneren, en ondersteunen ervan als een publieke interface te rechtvaardigen? Die onderhoudskost is echt en is de tegenhanger van de bouw-eenmaal-herbruik-vaak-economie van [overheid-als-platform](../overheid-als-platform/) — de twee onderwerpen zijn nauwe neven, één over gedeelde code en infrastructuur, de andere over gedeelde gegevens. Elke open-data-waardebewering zou moeten worden gecontroleerd tegen [additionaliteit-en-deadweight](../additionaliteit-en-deadweight/) voordat het in een businesscase komt: activiteit die toch zou zijn gebeurd, op commercieel gelicentieerde gegevens, is geen waarde die het *openen* creëerde.

## Valkuilen

- **Het McKinsey-cijfer van $3-5 biljoen citeren als VK-specifiek of als het aandeel van deze dataset**: het is een globale, zeven-sector-scenarioschatting uit 2013 — het gebruiken als een precieze multiplier voor een enkele nationale dataset geeft een verkeerde weergave van wat het cijfer is.
- **Geen contrafeitelijke situatie**: krediet claimen voor alle stroomafwaartse economische activiteit gebouwd op open data, zonder te vragen hoeveel ervan toch zou zijn gebeurd op betaalde of gelicentieerde gegevens tegen een hogere prijs (zie [additionaliteit-en-deadweight](../additionaliteit-en-deadweight/) en [contrafeitelijke-analyse](../contrafeitelijke-analyse/)).
- **Productiekosten verwarren met gecreëerde waarde**: een dataset die duur was om te verzamelen is niet automatisch waardevol om vrij te geven, en een goedkope is niet automatisch laagwaardig — waarde volgt stroomafwaarts gebruik, niet stroomopwaartse kosten.
- **De doorlopende onderhoudskost van "open" negeren**: het publiceren van een eenmalige CSV-extractie is niet dezelfde verplichting als het draaien van een gedocumenteerde, versioneerde, ondersteunde open API — het onderfinancieren van de laatste na de lanceringsaankondiging is een veelvoorkomend faalpatroon.

## Bronnen

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
