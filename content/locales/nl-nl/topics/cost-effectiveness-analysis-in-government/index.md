# Kosteneffectiviteitsanalyse binnen de overheid

Kosteneffectiviteitsanalyse (KEA) vergelijkt de kosten van alternatieve manieren om *dezelfde* uitkomst te bereiken, uitgedrukt in natuurlijke eenheden — kosten per dakloze in huisvesting, kosten per leerling op het verwachte niveau gebracht, kosten per ton CO2 gereduceerd — zonder de uitkomst zelf om te zetten in geld.

## Waarom het ertoe doet

Het Green Book behandelt KEA als de terugvalmethode wanneer de vereiste van [maatschappelijke kosten-batenanalyse](../social-cost-benefit-analysis/) om elke baat te monetariseren niet alleen moeilijk maar oneerlijk wordt — waar het zetten van een geloofwaardige prijs op de uitkomst aannames zou vereisen die niemand werkelijk aanhoudt (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, hoofdstuk 5, over optiebeoordeling waarbij uitkomsten niet eenvoudig te monetariseren zijn). KEA is de methode die het meest rechtstreeks is geleend van gezondheidseconomie — het is structureel identiek aan hoe NICE behandelingen vergelijkt met kosten per kwaliteitsgecorrigeerd levensjaar — maar toegepast op niet-gezondheidsgerelateerde overheidsprogramma's: onderwijsinterventies per leerling-uitkomstpunt, huisvestingsprogramma's per huishouden dat dakloosheid voorkomt, werkgelegenheidsprogramma's per duurzame werkgelegenheidsuitkomst.

De reden dat KEA zijn plaats naast SCBA verdient in plaats van erdoor te worden opgeslokt, is dat het afdwingen van een monetaire waarde op sommige uitkomsten een getal produceert dat precies genoeg is om gezaghebbend te lijken en omstreden genoeg om waardeloos te zijn in een publiek debat — een prijs zetten op "een kind dat leest op het verwachte niveau" nodigt precies de soort uitdaging uit die een business case in een selectcommissie doet ontsporen. KEA vermijdt de discussie door hem te weigeren: het rangschikt opties op kosten per eenheid van de *uitkomst zelf*, en laat het afzonderlijke politieke oordeel of de uitkomst het nastreven waard is überhaupt over aan de strategische zaak.

## De berekening

```
Kosteneffectiviteitsverhouding （gemiddeld） = Totale kosten /
                                             Totaal aantal
                                             bereikte
                                             uitkomsteenheden

Incrementele kosteneffectiviteitsverhouding （ICEV）,
vergelijking van optie A met optie B:
ICEV = (Kosten_A − Kosten_B) / (Uitkomst_A − Uitkomst_B)

Procedure:
1. Leg de uitkomsteenheid en meetmethode vast over alle
   vergeleken opties.
2. Bereken elke optie op dezelfde grondslag （zie
   ../green-book-appraisal/, financiële zaak） over
   dezelfde tijdshorizon.
3. Verwerp gedomineerde opties: elke optie die meer kost
   per eenheid dan een goedkoper alternatief dat dezelfde
   of betere uitkomst bereikt, wordt weggelaten.
4. Rangschik overgebleven opties op incrementele, niet
   gemiddelde, kosteneffectiviteitsverhouding.
```

KEA kan op zichzelf niet zeggen of een programma überhaupt de moeite waard is om te financieren — alleen welke van verschillende benaderingen van hetzelfde doel het goedkoopst per eenheid is. Beslissen of het doel zelf de uitgave waard is, vereist ofwel terugkoppeling naar SCBA (als een geloofwaardige waardering bestaat) of een politiek/strategisch oordeel buiten de berekening. Waar uitkomsten werkelijk niet tot één eenheid kunnen worden herleid — omdat een programma verschillende uitkomsten produceert die op verschillende manieren belangrijk zijn — gebruik in plaats daarvan [multicriteria-analyse](../multi-criteria-decision-analysis/).

## Uitgewerkt voorbeeld

**Gemeente**: een gemeente vergelijkt drie benaderingen om straatdakloosheid te verminderen, elk berekend over één jaar tegen de uitkomst "individuen verhuisd naar vaste huisvesting voor 6+ maanden":

```
Optie                           Kosten    Bereikte      Gem.
                                          uitkomsten    KEV
Housing First （intensief）     £900.000  60            £15.000/
                                                        uitkomst
Opvang ＋ doorstroom-           £600.000  50            £12.000/
ondersteuning                                          uitkomst
Outreach ＋ particuliere        £350.000  20            £17.500/
huursector                                             uitkomst

ICEV, opvang vs outreach:  (600k−350k)/(50−20)
                          = £8.333 per extra uitkomst
ICEV, Housing First vs opvang: (900k−600k)/(60−50)
                              = £30.000 per extra uitkomst
```

Outreach wordt gedomineerd in gemiddelde kosten door opvang, maar de *incrementele* stap van outreach naar opvang kost slechts £8.333 per extra gehuisveste persoon — goedkoop in vergelijking met de Housing First-stap, die £30.000 kost voor elke extra persoon boven wat opvang bereikt. Een budgetbeperkte instantie die opschaalt, moet opvang verkiezen boven Housing First voordat ze uitbreidt, ook al ziet Housing First er beter uit op zijn eigen gemiddelde verhouding.

**Rijksoverheid**: een leesachterstandsprogramma wordt vergeleken over drie leveringsmodellen op "kosten per leerling die het leeftijdsverwachte leesniveau bereikt": één-op-één-bijles (£1.800/leerling), kleine-groepsbijles (£700/leerling), en uitsluitend digitale interventie (£150/leerling, maar slechts 40% van het uitkomstpercentage van kleine-groepsbijles per ingeschreven leerling zodra gecorrigeerd voor uitval bij betrokkenheid). Eenmaal gecorrigeerd voor werkelijke voltooiing, kost uitsluitend digitaal £375 per leerling die het niveau bereikt — nog steeds het goedkoopst, maar de KEA kan niet zeggen of het kleinere absolute aantal leerlingen dat wordt geholpen door uitsluitend digitaal, indien geleverd met hetzelfde budget als kleine-groepsbijles, een aanvaardbare afweging is tegen het bereiken van minder leerlingen met grotere diepgang; dat is een distributief oordeel dat KEA teruggeeft aan beslissers.

## Verband met softwareontwikkeling

KEA is het juiste kader wanneer technische teams leveringsbenaderingen evalueren voor *dezelfde* dienstuitkomst — kosten per succesvol geverifieerde identiteit over drie identiteitsverificatieleveranciers, kosten per correct getrieerde zaak over twee ontwerpen voor zaakautomatisering, kosten per opgelost toegankelijkheidsdefect over interne versus gecontracteerde herstel. De discipline die het rechtstreeks importeert: definieer de uitkomsteenheid voordat kosten worden vergeleken (niet "gesloten tickets" — een output — maar "werkelijk opgeloste gebruikersbehoefte"), en bereken altijd de incrementele verhouding tussen het bestaande systeem en een voorgesteld vervangingssysteem, niet de gemiddelde kosten van elk systeem geïsoleerd. Zie [uitkomsten versus output](../outcomes-vs-outputs/) en [kosten per uitkomst](../cost-per-outcome/).

## Valkuilen

- **Gemiddelde, niet incrementele, verhoudingen vergelijken bij beslissingen over uitbreiding.** Zoals het voorbeeld van straatdakloosheid toont, is de optie met de beste gemiddelde verhouding niet altijd de goedkoopste volgende uitkomsteenheid om te koopen.
- **Een uitkomsteenheid kiezen die eigenlijk een output is.** "Gedane verwijzingen" of "gehouden sessies" meten activiteit, niet de uitkomst waarvoor het programma bestaat om te produceren; KEA op outputs produceert een zelfverzekerd uitziend getal dat de verkeerde vraag beantwoordt.
- **Vergelijken over werkelijk verschillende uitkomsten.** KEA is alleen geldig wanneer elke optie zich richt op dezelfde uitkomst, op dezelfde manier gemeten; "kosten per dakloze in huisvesting" vergelijken met "kosten per jongere die zorg verlaat in stabiele huisvesting" vereist een generieke uitkomstmaat of [multicriteria-analyse](../multi-criteria-decision-analysis/), geen KEA.
- **De duurzaamheid van de uitkomst negeren.** Een goedkopere optie die uitkomsten produceert die niet blijven bestaan (een leerling die terugvalt nadat de interventie stopt) is niet werkelijk kosteneffectiever zodra gemeten over een vergelijkbare horizon; stem de follow-upperiode af over vergeleken opties.

## Bronnen

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
