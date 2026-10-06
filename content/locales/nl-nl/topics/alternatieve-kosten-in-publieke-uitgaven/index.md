# Alternatieve kosten in publieke uitgaven

Alternatieve kosten zijn de waarde van het beste alternatief dat wordt opgegeven wanneer een publiek orgaan geld, personeelstijd of politiek kapitaal aan de ene optie besteedt in plaats van aan een andere. In een departement met een vast budget is elk pond dat aan één programma wordt besteed een pond dat niet kan worden besteed aan het op één na beste programma — de werkelijke kosten van een besluit zijn niet wat het uitgeeft, maar wat het verdringt.

## Waarom het ertoe doet

Publieke budgetten zijn kasgelimiteerd binnen een bestedingsherzieningsperiode, dus — anders dan een groeiend privaat bedrijf — kan een overheidsdepartement niet zomaar "meer geld vinden" voor een goed idee; het financieren ervan betekent het defund maken van iets anders. Het Green Book van HM Treasury behandelt dit als fundamenteel: elke beoordeling moet een interventie vergelijken met een "doe-minimum"-basislijn *en* met realistische alternatieve toepassingen van dezelfde middelen, precies omdat de echte vraag die een uitgaventeam van de Treasury stelt nooit "is dit goed?" is, maar "is dit beter dan wat dit geld anders zou kunnen kopen?" Het kernbeoordelingsprincipe van het Green Book — dat publieke middelen moeten stromen naar de interventie met de hoogste netto sociale waarde per pond — is alternatieve kosten uitgedrukt als beleid.

Dit is gemakkelijk te stellen en moeilijk toe te passen omdat het "op één na beste alternatief" zelden zichtbaar is in een enkele business case. Een subsidieprogramma van £2 miljoen voor jeugdwerkgelegenheid wordt in de business case vergeleken met niets doen — maar de eerlijke vergelijking is de op één na beste jeugdwerkgelegenheidsinterventie, of zelfs de op één na beste toepassing van £2 miljoen waar dan ook in de portefeuille, inclusief niet-werkgelegenheidsuitgaven. Het Magenta Book (HM Treasury, 2020) waarschuwt expliciet dat evaluaties die "met interventie" vergelijken met "zonder interventie" de lat onderschatten die een interventie moet halen, omdat "zonder deze interventie" niet hetzelfde is als "met helemaal niets" — vrijgemaakt geld financiert iets anders.

## De berekening

```
Alternatieve kosten van het kiezen van A = waarde van het
                                          beste opgegeven
                                          alternatief B

Netto publieke waarde van A = waarde(A) − waarde(B), niet
                              waarde(A) − 0
```

Er is geen universele formule omdat het opgegeven alternatief contextspecifiek is, maar de discipline generaliseert: identificeer de realistische op één na beste toepassing van dezelfde begrotingspost (niet een geïdealiseerd "niets doen"), waardeer deze op dezelfde grondslag (gemonetariseerd waar mogelijk, volgens [maatschappelijke kosten-batenanalyse](../maatschappelijke-kosten-batenanalyse/)), en trek af.

## Uitgewerkt voorbeeld

**Begrotingspost van een departement**: een digitaal transformatiefonds van £5 miljoen kan dit begrotingsjaar precies één van twee voorstellen financieren.

- *Optie A*: een nieuw zaaksysteem, gemonetariseerd voordeel £7,2 miljoen over 5 jaar (efficiëntiebesparingen plus snellere zaakafhandeling).
- *Optie B*: een identiteitsverificatiedienst gedeeld door drie departementen, gemonetariseerd voordeel £6,4 miljoen over 5 jaar.

Een naïeve business case voor A vergelijkt £7,2 miljoen aan voordeel met £5 miljoen aan kosten en rapporteert een baten-kostenverhouding van 1,44:1 — ogenschijnlijk sterk. Maar omdat A en B concurreren om dezelfde £5 miljoen, zijn de alternatieve kosten van het kiezen van A het opgegeven voordeel van B van £6,4 miljoen. Het *netto*-argument voor A ten opzichte van het realistische alternatief is slechts £7,2m − £6,4m = £0,8 miljoen, niet de volledige £7,2 miljoen uit de koptekst. Als een derde optie, C, £7,5 miljoen aan voordeel zou bieden voor dezelfde £5 miljoen, zou het financieren van A boven C £0,3 miljoen aan publieke waarde vernietigen, ook al ziet A's eigen business case er geïsoleerd volledig gerechtvaardigd uit.

**Personeelstijd van een gemeente**: het driekoppige dataTeam van een gemeente kan ofwel een dashboard voor de wachtlijst voor huisvesting bouwen (geschat 400 ambtenaarsuren/jaar te besparen, gewaardeerd op £28/uur = £11.200/jaar) of een triagetool voor bijstandsfraude (geschat £85.000/jaar aan onjuiste betalingen te voorkomen). Het bouwen van het dashboard heeft alternatieve kosten van £85.000/jaar aan opgegeven voordeel, niet alleen de salariskosten van het dataTeam — de werkelijke kosten van de "gratis" interne bouw zijn het veel grotere voordeel dat het team elders had kunnen produceren.

## Verband met softwareontwikkeling

Technische capaciteit binnen een publiek orgaan is zelf een beperkt budget — sprintcapaciteit, geen ponden — en dezelfde discipline geldt rechtstreeks:

- Benoem altijd het vergelijkingspunt: de business case van een functie moet aangeven wat anders dezelfde teamweken zouden kunnen opleveren, niet alleen het eigen rendement.
- Behandel "we hebben technische capaciteit over" als het begin van een alternatieve-kostenanalyse, niet als het einde — overtollige capaciteit heeft nog steeds een beste alternatieve toepassing, ook al is die toepassing het afbetalen van technische schuld (zie [technische schuld als erosie van publieke waarde](../technische-schuld-als-public-value-erosie/)).
- Koppel dit rechtstreeks aan [waarde voor geld](../waarde-voor-geld/): de "zuinigheid"-toets van VFM is betekenisloos zonder een eerlijk alternatieve-kostenvergelijkingspunt, en aan [kosten van vertraging in publieke programma's](../kosten-van-vertraging-in-overheidsprogrammas/), die de tijdsdimensie van dezelfde opgegeven-alternatief-logica prijst.

## Valkuilen

- **Vergelijken met "niets doen" in plaats van het op één na beste alternatief.** Het Green Book vereist een "doe-minimum"-basislijn precies omdat de werkelijke alternatieve kosten zelden nul zijn; een business case die alleen de "niets doen"-lat haalt, heeft niet aangetoond dat het beter is dan het realistische alternatief.
- **Departementsoverschrijdende concurrentie om dezelfde pot negeren.** Begrotingsposten die binnen één directoraat afgeschermd lijken, concurreren vaak op een hoger niveau (een bestedingsherziening, een kapitaalprogramma) waar de werkelijke alternatieve kosten worden gerealiseerd.
- **Aannemen dat vrijgemaakte personeelstijd geen verdere waarde heeft.** "Bespaarde" tijd creëert alleen waarde als deze wordt heringezet naar iets waardevols; als de alternatieve toepassing niet bestaat, is de besparing nominaal.

## Bronnen

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — the canonical empirical demonstration of opportunity cost as
  a binding constraint in a fixed public budget. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
