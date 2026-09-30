# Uitkomstgebaseerde verantwoording (OBA)

Uitkomstgebaseerde verantwoording, ook genoemd Results-Based Accountability (RBA), is het raamwerk van Mark Friedman voor het scheiden van twee vragen die publieke-sectorrapportage gewoonlijk samen vervaagt: "gaat het goed met de populatie?" (populatieverantwoording) en "gaat het goed met dit specifieke programma?" (prestatieverantwoording). Deze twee samenvoegen is, in de weergave van Friedman, de enkele meest voorkomende reden waarom goed geleide programma's de schuld krijgen van populatietrends die zij nooit de macht hadden te bewegen.

## Waarom het ertoe doet

Friedman zette het raamwerk uiteen in *Trying Hard Is Not Good Enough* (2005), met het argument dat de meeste publieke rapportage beslissers ofwel verdrinkt in populatieniveaustatistieken die geen enkele instantie beheert (tienerzwangerschapspercentage, werkloosheidspercentage, levensverwachting), ofwel hen verdrinkt in programmaniveauactivitentellingen (geziene cliënten, gemaakte verwijzingen) die niets zeggen over of iemands leven is verbeterd. De bijdrage van RBA is een kleine, gedisciplineerde woordenschat die de twee uit elkaar houdt: populatieresultaten (welzijnsvoorwaarden voor een hele populatie, zoals "kinderen worden gezond geboren") behoren tot geen enkele instantie en vereisen dat vele partners samen bewegen; prestatiemaatstaven (hoe goed een specifiek programma zijn specifieke cliënten bedient) behoren tot één instantie en zouden alleen moeten worden beoordeeld tegen wat die instantie daadwerkelijk kan beïnvloeden. De "drie prestatievragen" van Friedman — hoeveel deden we, hoe goed deden we het, en is iemand er beter van geworden? — zijn nu ingebed in de Amerikaanse staats- en gemeentelijke mensendienstencontractering en, via de RBA-uitgelijnde adviesbureau en toolkit Clear Impact, breed gebruikt in Britse en Commonwealth lokale-overheidsaanbesteding. De praktische inzet is contractueel: een huisvestingsprogramma zou niet ontfinancierd moeten worden omdat het daklooshpercentage van de stad steeg door macro-economische oorzaken buiten zijn bereik, maar het zou absoluut moeten worden ontfinancierd als zijn eigen cliënten niet worden gehuisvest.

## De berekening

```
Populatieverantwoording (het "grote plaatje" dat een gemeenschap,
regio, of natie deelt):
  Resultaat        — een welzijnsvoorwaarde (bijv. "inwoners
                     zijn economisch zeker")
  Indicator(en)     — een maatstaf van die voorwaarde (bijv.
                     werkloosheidspercentage, mediaan
                     huishoudinkomen)
  → geen enkel programma bezit de indicator; beweging vereist
    vele bijdragers

Prestatieverantwoording (waarvoor één programma verantwoordelijk is):
  Hoeveel deden we?         — activiteitsvolume (bediende
                              cliënten, geleverde eenheden)
  Hoe goed deden we het?    — kwaliteit/efficiëntie (%
                              voltooiing programma, kosten per
                              cliënt)
  Is iemand er beter van?   — de uitkomst die ertoe doet (%
                              in werk 6 maanden na programma,
                              voor/na of tegen een
                              vergelijkingsgroep)

Een programma wordt beoordeeld op de derde prestatievraag, nooit
direct op de populatie-indicator, tenzij zijn schaal en ontwerp
het plausibel alleen zouden kunnen bewegen.
```

## Uitgewerkt voorbeeld

**Door de stad gefinancierd werkgelegenheidsondersteuningsprogramma**, 500 deelnemers/jaar, gecontracteerd door een gemeente onder een RBA-achtig prestatieraamwerk:

```
Populatie-indicator (context, niet de scorecard van het
programma):
  Werkloosheidspercentage stad: 6,2% (omhoog van 5,8% vorig
  jaar, aangestuurd door een fabriekssluiting buiten het
  bereik van het programma)

Prestatiemaatstaven (de daadwerkelijke verantwoording van het
programma):
  Hoeveel:        500 deelnemers ingeschreven (doel 480) —
                  behaald
  Hoe goed:       78% voltooiingspercentage; kosten per
                  voltooier = £340.000 / 390 voltooiers ≈ £872
  Beter van:      van 390 voltooiers, 260 in duurzame
                  werkgelegenheid na 6 maanden = 66,7% versus
                  41% van een gekoppelde vergelijkingsgroep
                  (zie contrafeitelijke-analyse)
```

Onder een populatieverantwoordingslezing lijkt het programma te falen — het werkloosheidspercentage van de stad steeg tijdens zijn wacht. Onder de prestatieverantwoordingslezing van RBA slaagt het programma: het haalde zijn volumedoel, hield kwaliteit stabiel, en produceerde een werkgelegenheidsuitkomst 25,7 procentpunten boven een gekoppelde vergelijkingsgroep, terwijl de populatie-indicator bewoog om redenen (een fabriekssluiting) volledig buiten de controle van het programma.

## Verband met softwareontwikkeling

RBA past direct op een bekend SRE-onderscheid: populatie-indicatoren zijn als bedrijfsniveau-noordsterindicatoren die geen enkel engineeringteam end-to-end bezit (bedrijfsomzet, marktaandeel), terwijl prestatiemaatstaven zijn als de eigen SLO's van een team — de dingen die de ontwerpbeslissingen van dat team daadwerkelijk bewegen. Een dashboard dat beide rapporteert zonder te labelen welke welke is, nodigt precies uit tot de verkeerde toeschrijving die RBA is gebouwd om te voorkomen: een oproepdienstingenieur die de schuld krijgt van een maatstaf die een afhankelijkheidsteam beheert. Bij het aanvragen of bouwen van rapportagetools voor uitkomstencontracten, bouw de "hoeveel / hoe goed / beter van"-trias als eersteklas, afzonderlijk filterbare velden in plaats van een enkele vermengde KPI — het is dezelfde discipline als het scheiden van leidende en achterblijvende indicatoren in [kerncijfers publieke sector](../public-sector-kpis/). RBA is ook de verantwoordingslogica onder [betaling naar resultaat en sociale-impactobligaties](../payment-by-results-and-social-impact-bonds/): een PbR-contract kan alleen eerlijk betalen op de "beter van"-prestatiemaatstaf, nooit op de populatie-indicator, tenzij de interventie daadwerkelijk de dominante aandrijver ervan is.

## Valkuilen

- **Een programma betalen of straffen tegen een populatie-indicator die het niet kan controleren**: dit is de enkele fout die RBA bestaat om te voorkomen; traceer altijd of het programma een grote of kleine bijdrager is aan het populatieresultaat voordat je gevolgen erop plakt.
- **"Hoeveel" rapporteren alsof het "beter van" was**: activiteitentellingen (geziene cliënten) zijn de gemakkelijkste gegevens om te verzamelen en de minst informatieve; sta erop dat de "is iemand er beter van"-vraag wordt beantwoord met echte uitkomstgegevens, idealiter tegen een contrafeitelijke situatie (zie [contrafeitelijke analyse](../counterfactual-analysis/)).
- **RBA-indicatoren behandelen als voor altijd vast**: de methode van Friedman is expliciet iteratief — een "gegevens, verhaal, wat werkt, actieplan"-cyclus — geen eenmalige scorecardontwerpoefening.
- **Geen vergelijkingsgroep voor "beter van"**: een voor/na-verandering zonder contrafeitelijke situatie vermengt programma-effect met de trend die de populatie toch zou hebben getoond.

## Bronnen

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
