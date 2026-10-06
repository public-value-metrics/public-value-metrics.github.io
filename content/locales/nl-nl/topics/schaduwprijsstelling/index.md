# Schaduwprijsstelling

Een schaduwprijs is een geschatte waarde toegekend aan een goed, hulpbron, of externaliteit die geen waarneembare marktprijs heeft, of waarvan de marktprijs vertekend is en de werkelijke maatschappelijke waarde niet weerspiegelt. Overheidsbeoordeling vertrouwt op een kleine set officiële schaduwprijzen — koolstof, niet-werktijd, werkloze arbeid — centraal gepubliceerd zodat elk departement hetzelfde getal gebruikt.

## Waarom het ertoe doet

Schaduwprijzen bestaan omdat [maatschappelijke kosten-batenanalyse](../maatschappelijke-kosten-batenanalyse/) niet kan functioneren zonder een monetaire waarde voor elke kost en baat, en verschillende van de meest ingrijpende — een ton uitgestoten koolstof, een uur van de tijd van een pendelaar, een uur van anderszins werkloze arbeid — helemaal geen marktprijs hebben, of een marktprijs die hun werkelijke maatschappelijke kost verkeerd weergeeft. HM Treasury en het Department for Energy Security and Net Zero publiceren gezamenlijk de schaduwprijs van koolstof die wordt gebruikt in alle Britse overheidsbeoordeling (<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>), niet afgeleid van enige koolstofmarktprijs maar van een doelconsistente benadering: de koolstofwaarde wordt vastgesteld op de marginale reductiekost die nodig is om de wettelijk vastgelegde koolstofbudgetten van het VK te halen, wat een fundamenteel andere logica is dan observeren waarvoor koolstof daadwerkelijk wordt verhandeld op het EU- of VK-emissiehandelssysteem.

Het schaduwloon volgt een soortgelijke logica aan de arbeidszijde. Iemand in dienst nemen die anders werkloos zou zijn geweest, kost de samenleving niet het volle loon — een deel van dat loon is een overdracht van misgelopen uitkeringen en verloren vrijetijds-/zoektijd in plaats van een netto nieuwe aanslag op de middelen van de samenleving — dus stelt de richtlijn van het Green Book een schaduwprijs vast onder het marktloon voor arbeid geput uit werkloosheid, wat de werkelijke alternatieve kosten van die arbeid weerspiegelt (zie [alternatieve kosten in publieke uitgaven](../alternatieve-kosten-in-publieke-uitgaven/)) in plaats van zijn marktprijs.

## De berekening

```
Schaduwprijs van koolstof （illustratieve structuur, actuele
waarden uit het officiële BEIS/DESNZ-instrument voor
koolstofwaarden — gebruik geen verouderde cijfers）:
  Verhandelde-sectorwaarde: geïnformeerd door ETS-
    emissierechtenprijstrajecten
  Niet-verhandelde sector （doelconsistente） waarde: vastgesteld
    op de marginale reductiekost nodig om wettelijk
    vastgelegde koolstofbudgetten te halen, stijgend over tijd
    naarmate eenvoudiger reductieopties uitgeput raken
  Toegepast als: £/ton CO2e × tonnen uitgestoten of
    gereduceerd door de optie, verdisconteerd tegen de
    maatschappelijke discontovoet voor toekomstige jaren

Schaduwloontarief （SLT）:
  SLT = Marktloon − （waarde van gespaarde verloren
                    vrijetijd/zoektijd ＋ waarde van niet
                    langer betaalde uitkeringen）
  Doorgaans uitgedrukt als een fractie van het marktloon
    （bijv. SLT = 0,6 × marktloon in een gebied met hoge
    werkloosheid, volgens de Green Book Annex A-richtlijn
    over arbeidsmarkten met onbenutte capaciteit）
```

Beide cijfers zijn centraal vastgestelde beleidsconventies, geen empirische marktwaarnemingen — het hele punt van een schaduwprijs is het vervangen van een ontbrekende of vertekende markt, dus een beoordeling die er een gebruikt, moet de huidige officiële bron citeren in plaats van een eigen cijfer af te leiden, precies zodat elke departementale beoordeling vergelijkbaar is.

## Uitgewerkt voorbeeld

**Rijksoverheid**: een beoordeling van een overstromingsbeschermingsplan schat dat het 400 ton CO2e-uitstoot per jaar voorkomt (door verminderd gebruik van noodapparatuur en verminderde ingebedde koolstof van voorkomen wederopbouw) over een beoordelingslevensduur van 30 jaar, vergeleken met een "doe-minimum"-basislijn.

```
Illustratieve schaduwprijs van koolstof: £280/ton CO2e （jaar
1, stijgend over de beoordelingsperiode volgens het
officiële schema voor niet-verhandelde koolstofwaarden）
Koolstofbaat jaar 1 = 400 × £280 = £112.000
```

Omdat het officiële schema de koolstofwaarde *stijgend* heeft over de beoordelingsperiode (wat aangescherpte koolstofbudgetten weerspiegelt), moet de analist de correcte jaarspecifieke waarde toepassen voor elk jaar van de stroom van 30 jaar, geen vaste voet — het gebruik van de waarde van jaar 1 door de hele periode zou latere-jaar-baten onderschatten en de rangschikking vertekenen tegen alternatieve overstromingsbeschermingsontwerpen met verschillende koolstofprofielen.

**Gemeente**: het werkgelegenheidsondersteuningsprogramma van een gemeente voor langdurig werkloze inwoners plaatst 150 mensen in banen die £11/uur betalen. Dit waarderen met het volledige marktloon zou het programma crediteren met £11 × gewerkte uren als maatschappelijke baat, maar de schaduwloonbenadering erkent dat dit geen werknemers waren geput uit andere banen — de werkelijke alternatieve kosten van hun arbeid voordat het programma plaatsvond, waren laag.

```
Marktloon: £11,00/uur
Schaduwloontarief （illustratief, hoge lokale werkloosheid）:
  0,6 × marktloon = £6,60/uur
Netto maatschappelijke baat toeschrijfbaar per gewerkt uur
  ≈ £11,00 − £6,60 = £4,40/uur
  （de "extra" waarde gecreëerd door werkelijk werkeloze
   arbeid naar productie te verplaatsen, te onderscheiden
   van het loon zelf, dat grotendeels een overdracht is）
```

Dit is waarom beoordelingen van werkgelegenheidsprogramma's in gebieden met hoge werkloosheid een positieve netto maatschappelijke waarde kunnen tonen, zelfs wanneer hetzelfde programma, uitgevoerd in een gebied met volledige werkgelegenheid waar verdrongen arbeid simpelweg zou worden geput uit andere banen, dat niet zou doen.

## Verband met softwareontwikkeling

Schaduwprijsstelling raakt zelden direct softwarelevering, maar het doet er toe wanneer een business case een koolstof- of maatschappelijke baat beweert van een IT-verandering — een datacenterconsolidatie die koolstofbesparingen beweert, of een papierloze dienst die voorkomen druk- en verzendkoolstof beweert, moet de huidige officiële schaduwprijs van koolstof gebruiken in plaats van een verzonnen cijfer, en moet het correcte jaar-op-jaar-schema toepassen in plaats van een vaste voet, precies zoals bij elke andere Green Book-beoordelingsinput. Zie [totale eigendomskosten binnen overheids-IT](../totale-eigendomskosten-in-overheids-it/) en [cybersecuritywaarde publieke sector](../cyberbeveiligingswaarde-publieke-sector/), die beide vaak een schaduwprijs nodig hebben voor een moeilijk te monetariseren input (inbreukrisico, uitvaltijd) samen met direct berekende posten.

## Valkuilen

- **Een verouderd koolstof- of loonccijfer gebruiken.** Beide waarden worden periodiek herzien door centrale richtlijnen; een beoordeling gebouwd op een verouderd cijfer zal de toetsing van de Treasury niet doorstaan.
- **Een vaste schaduwkoolstofprijs toepassen over een meerdecennia-beoordeling.** Het officiële schema stijgt over tijd; het gebruik van de waarde van jaar 1 door de hele periode geeft het profiel van baten of kosten verkeerd weer.
- **Het schaduwloon verwarren met een korting op de werkelijke betaling van de werknemer.** Het schaduwloontarief past de *waardering van de beoordeling* van de arbeidsinput aan, niet het loon dat de werknemer daadwerkelijk ontvangt — de twee samenvoegen nodigt uit tot (onjuist) rechtvaardigen van betaling onder markttarief.
- **Een op maat gemaakte schaduwprijs afleiden in plaats van de officiële te gebruiken.** Schaduwprijzen zijn beleidsconventies precies zodat beoordelingen vergelijkbaar zijn tussen departementen; een lokaal verzonnen cijfer, hoe goed beredeneerd ook, verbreekt die vergelijkbaarheid.

## Bronnen

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
