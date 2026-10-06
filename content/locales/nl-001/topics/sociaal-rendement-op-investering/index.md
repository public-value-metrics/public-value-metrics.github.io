# Sociaal rendement op investering (SROI)

Sociaal rendement op investering is een raamwerk voor het meten, monetariseren, en verantwoorden van een breed waardebegrip — sociaal, milieutechnisch, en economisch — en het uitdrukken ervan als een verhouding tegen de geïnvesteerde middelen, bijvoorbeeld "£1,44 aan sociale waarde voor elke geïnvesteerde £1". Het was ontworpen om financiële boekhoudlogica uit te breiden naar uitkomsten die markten niet prijzen, zonder de discipline van boekhouding te verliezen: elk getal in een SROI moet traceerbaar zijn tot een door belanghebbenden gedefinieerde uitkomst, een bewijsbasis, en een expliciete correctie voor wat toch zou zijn gebeurd.

## Waarom het ertoe doet

SROI wordt onderhouden door Social Value UK en Social Value International, opvolgers van het SROI Network, waarvan de "A Guide to Social Return on Investment" (2012) nog steeds de referentiemethodologie is. Het raamwerk rust op zeven principes — betrek belanghebbenden, begrijp wat er verandert, waardeer wat ertoe doet, neem alleen op wat materieel is, overdrijf niet, wees transparant, en verifieer het resultaat — en het is principe vijf, "overdrijf niet", waar de meeste SROI-rapporten in het wild op falen. Een verhouding geproduceerd door deadweight- en toeschrijvingscorrecties over te slaan, is geen SROI; het is een marketingcijfer in de kleren van een SROI. Softwareingenieurs die rapportagetools bouwen voor goede doelen, sociale ondernemingen, of opdrachtgevers, moeten het verschil kennen, omdat het instrument de discipline zal afdwingen of het gemakkelijk zal maken om deze over te slaan.

## De berekening

SROI hangt af van een [theorie van verandering](../theorie-van-verandering/) om te identificeren welke uitkomsten binnen de scope liggen, en drukt ze uit met dezelfde verantwoordingsketen als een [logisch model](../logisch-model/):

```
SROI-verhouding = Contante waarde van uitkomsten / Waarde
                 van inputs

Proces:
 1. Stel de scope vast en identificeer belanghebbenden
    waarvan de uitkomsten worden gemeten
 2. Breng uitkomsten in kaart （een theorie van verandering,
    bewezen met belanghebbenden, niet aangenomen）
 3. Bewijs uitkomsten en geef ze een waarde met behulp van
    financiële proxy's
 4. Stel impact vast: bruto waarde − deadweight −
    toeschrijving − verdringing, pas vervolgens afname toe
 5. Berekening de SROI: netto contante waarde van impact ÷
    waarde van inputs
 6. Rapporteer, gebruik, en verankere — de verhouding is
    een communicatiemiddel, geen eindpunt
```

Deadweight, toeschrijving, en verdringing worden behandeld in [additionaliteit en deadweight](../additionaliteit-en-deadweight/) en [verdringing en toeschrijving](../verdringing-en-toeschrijving/); alle drie bestaan om de werkelijke [contrafeitelijke](../contrafeitelijke-analyse/) impact te isoleren van de bruto-uitkomst.

## Uitgewerkt voorbeeld

**Gemeentelijk werkgelegenheidsprogramma**: jaarlijkse inputkost £250.000. Zestig deelnemers stromen door naar duurzame werkgelegenheid; een financiële proxy voor die uitkomst (welzijnstoename, verminderde afhankelijkheid van uitkeringen, en belastinginkomsten gecombineerd) is £8.500 per persoon voor het eerste jaar — zie [databanken voor eenheidskosten](../databanken-voor-eenheidskosten/) voor waar zulke proxy's vandaan komen.

- Bruto-uitkomstwaarde: 60 × £8.500 = £510.000
- Min deadweight (40% zou waarschijnlijk toch werk hebben gevonden zonder het programma): £510.000 × 0,60 = £306.000
- Min toeschrijving (30% van de resterende verandering is te wijten aan ondersteuning van andere instanties): £306.000 × 0,70 = £214.200
- Uitkomst jaar 2 bij 30% afname: £214.200 × 0,70 = £149.940, verdisconteerd tegen 3,5%/jaar (zie [maatschappelijke discontovoet](../maatschappelijke-discontovoet/)): £149.940 ÷ 1,035 = £144.870
- Totale contante waarde van impact: £214.200 + £144.870 = £359.070
- **SROI-verhouding: £359.070 ÷ £250.000 = 1,44**, gerapporteerd als "£1,44 aan sociale waarde voor elke geïnvesteerde £1"

**Goed doel**: een maatjesdienst van £60.000 vermindert eenzaamheid voor 80 oudere mensen, gewaardeerd op een proxy van £1.100/persoon/jaar. Bruto waarde £88.000; na 35% deadweight en 15% toeschrijving is de netto-impact £88.000 × 0,65 × 0,85 = £48.620, een SROI-verhouding van 0,81 — onder het break-even punt, wat een legitieme en nuttige bevinding is, geen mislukking om te melden.

## Verband met softwareontwikkeling

Een SROI-calculator die een gebruiker toelaat uitkomstaantallen en proxywaarden in te voeren maar geen verplicht veld heeft voor deadweight, toeschrijving, of een gekoppelde theorie van verandering, zal standaard opgeblazen verhoudingen produceren, omdat correcties weglaten de weg van de minste weerstand is. Bouw de discipline in het schema: elke uitkomstrij moet verwijzen naar een belanghebbendegroep, een bewezen hoeveelheid, een financiële proxy met zijn bron, en niet-optionele velden voor deadweight/toeschrijving. Zie [uitkomsten versus output](../uitkomsten-versus-output/) voor het onderscheid waarop de uitkomstkartering van SROI berust, en [logisch model](../logisch-model/) voor de keten die het instrument moet weerspiegelen in zijn datamodel.

## Valkuilen

- **Deadweight en toeschrijving overslaan.** De koptekstverhouding zonder deze correcties is een brutocijfer, geen nettoimpactcijfer, en de principes van Social Value UK vereisen expliciet beide.
- **Verhoudingen tussen organisaties vergelijken.** Een SROI-verhouding hangt af van scope- en proxykeuzes die van geval tot geval worden gemaakt; een verhouding van 4:1 uit één rapport als "beter" behandelen dan een verhouding van 2:1 uit een ander, negeert dat de aannames niet zijn gestandaardiseerd zoals een financiële boekhoudratio.
- **Overlappende proxy's dubbel tellen.** Een "verminderde eenzaamheid"-proxy stapelen met een "verbeterd mentaal welzijn"-proxy voor dezelfde begunstigden kan één onderliggende verandering dubbel waarderen.
- **Betrokkenheid van belanghebbenden overslaan.** Principe één vereist dat uitkomsten worden gedefinieerd samen met de mensen die ze ervaren, niet aangenomen door de analist die het model bouwt.

## Bronnen

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
