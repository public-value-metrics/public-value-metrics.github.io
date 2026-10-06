# Uitkomsten versus output

Een output is het directe, telbare product van een activiteit — het bestaat op het moment dat levering plaatsvindt, ongeacht welk effect het heeft. Een uitkomst is de verandering die volgt voor de betrokken mensen, plaats, of systeem. "500 mensen woonden een sollicitatieworkshop bij" is een output: het is waar zelfs als geen van hen werk vindt. "De arbeidskansen van 500 mensen verbeterden" is een uitkomstbewering, en het vereist bewijs van verandering, niet alleen bewijs van aanwezigheid — de verwarring die meer misleidende subsidierapporten produceert dan bijna elke andere meetfout in de sector.

## Waarom het ertoe doet

Het Magenta Book van HM Treasury en financiers zoals het National Lottery Community Fund vereisen beide uitkomstrapportage specifiek omdat outputs zijn wat programma's standaard rapporteren: ze zijn goedkoop te tellen, altijd beschikbaar, en zien er altijd positief uit. Een outputtelling kan letterlijk nooit dalen als resultaat van het falen van een programma — meer geleverde sessies is altijd "meer", terwijl een uitkomst kan onthullen dat een programma niet werkt. Het National Audit Office heeft overheidsprogramma's herhaaldelijk gekritiseerd voor het rapporteren van activiteitsniveaus alsof ze bewijs van succes waren; een softwaresysteem dat alleen outputs gemakkelijk te rapporteren maakt, versterkt dit standaard, omdat outputs geen follow-upgegevensverzameling vereisen terwijl uitkomsten dat wel doen.

## De berekening

Er is geen formule, maar er is een betrouwbare toets om een maatstaf te classificeren:

```
Outputtoets:    is het telbaar op het leveringspunt, waar
               zelfs als de ontvanger onaangedaan is?
Uitkomsttoets:  vereist het een voor/na- of met/zonder-
               vergelijking om betekenisvol te zijn?

Als een getal waar kan zijn met nul baat voor iemand, is het
een output.
```

Dit zit binnen de bredere [logisch model](../logisch-model/)-keten en hangt af van de uitkomstschakels gedefinieerd in een [theorie van verandering](../theorie-van-verandering/); het omzetten van een uitkomst in geld gebruikt de methoden in [sociaal rendement op investering](../sociaal-rendement-op-investering/).

## Uitgewerkt voorbeeld

**Gemeente (werkgelegenheidsondersteuning)**: output — 500 mensen woonden sollicitatieworkshops bij. Uitkomst — bij follow-up na 12 maanden zijn 140 van die 500 (28%) in duurzame werkgelegenheid (6+ maanden). Een vergelijkingsgroep met soortgelijke kenmerken maar zonder programmatoegang heeft een basislijn-werkgelegenheidspercentage van 15% over dezelfde periode. Netto uitkomsttoename: 28% − 15% = 13 procentpunten, dus naar schatting 500 × 0,13 = 65 extra mensen zijn aan het werk die dat anders niet zouden zijn geweest — de toeschrijfbare uitkomst, onderscheiden van zowel het aanwezigheidscijfer van 500 als de ruwe werkgelegenheidstelling van 140.

**Goed doel (geletterdheidsgoed doel)**: output — 1.200 leessessies geleverd aan 300 kinderen. Uitkomst — gemiddelde leesleeftijd verbeterde met 8 maanden over een periode van 6 maanden, tegen een verwachte natuurlijke progressiebasislijn van 6 maanden. Netto uitkomstwinst: 8 − 6 = 2 maanden extra verbetering in leesleeftijd per kind toeschrijfbaar aan het programma, niet het volledige cijfer van 8 maanden.

## Verband met softwareontwikkeling

Gebeurtenislogboeken en transactiesystemen instrumenteren outputs bijna automatisch — paginaweergaven, sessies, gesloten tickets, geboekte afspraken — omdat ze worden gegenereerd door het systeem dat zijn werk doet. Uitkomsten vereisen een datamodel dat dezelfde individu op een later tijdstip vastlegt tegen een basislijn of vergelijking, wat bewust moet worden ontworpen: follow-upenquêtes, gekoppelde administratieve records, of een vergelijkingscohort. Een rapportagetool die alleen de eerste ondersteunt, zal een organisatie stilzwijgend sturen naar alleen-output-rapportage, ongeacht wat de financier vroeg. Zie [logisch model](../logisch-model/) voor waar uitkomsten zitten in de verantwoordingsketen, [kosten per uitkomst](../kosten-per-uitkomst/) voor het omzetten van dit onderscheid in een eenheidskostenmaatstaf, en [kerncijfers publieke sector](../kerncijfers-publieke-sector/) voor het bredere patroon van maatstafselectie.

## Valkuilen

- **Outputs rapporteren alsof ze uitkomsten waren.** "500 mensen woonden bij" impliceert baat zonder het aan te tonen; markeer aanwezigheid expliciet als een output.
- **Geen basislijn of vergelijkingsgroep.** Een uitkomstcijfer zonder contrafeitelijke situatie — zie [contrafeitelijke analyse](../contrafeitelijke-analyse/) — kan het programma-effect niet scheiden van wat toch zou zijn gebeurd.
- **Optimaliseren voor de gefinancierde maatstaf.** Wanneer financiering gekoppeld is aan outputvolume, maximaliseren leveringsteams rationeel aanwezigheid boven duurzame verandering, een faalwijze van de wet van Goodhart.
- **Uitkomstwitwassen.** Een outputmaatstaf herbenoemen met uitkomstachtige taal ("betrokkenheidsuitkomsten: 500 deelnemers") zonder enige follow-upmeting daarachter.

## Bronnen

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance.
  <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
