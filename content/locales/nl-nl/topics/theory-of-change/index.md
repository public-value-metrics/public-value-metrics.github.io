# Theorie van verandering

Een theorie van verandering is een expliciet, achterwaarts in kaart gebracht causaal pad van een langetermijndoel naar de voorwaarden en activiteiten die moeten bestaan voor het te bereiken, samen met de aannames die elke schakel verbinden. Het wordt gebouwd door te beginnen bij de gewenste uitkomst en herhaaldelijk te vragen "wat moet onmiddellijk daarvoor waar zijn, om dit te laten gebeuren?", totdat je activiteiten bereikt die je daadwerkelijk kunt leveren — wat de tegenovergestelde richting is van een [logisch model](../logic-model/), en waarom de twee elkaar aanvullen in plaats van uitwisselbaar zijn.

## Waarom het ertoe doet

De methode van achterwaartse kartering werd geformaliseerd door het Center for Theory of Change en ActKnowledge, bouwend op het werk van evaluator Carol Weiss om programma-aannames expliciet te maken zodat ze konden worden getest in plaats van op vertrouwen worden aangenomen. Britse subsidie-evaluatie heeft dit rechtstreeks overgenomen: het Magenta Book van HM Treasury behandelt een theorie van verandering als het startpunt voor elk evaluatieontwerp, en financiers zoals het National Lottery Community Fund vereisen dat aanvragers er één formuleren voordat zij een voorstel financieren. De reden dat dit ertoe doet voor een softwareingenieur, is dat een theorie van verandering het document is dat zou moeten bepalen wat jouw systeem moet meten — als de causale keten zegt "toeslagopname hangt af van aanvragers die een gepersonaliseerde berekening ontvangen", is dat een testbaar beweren dat jouw product kan worden geïnstrumenteerd om te bewijzen, of te weerleggen.

## De berekening

Een theorie van verandering is structureel in plaats van numeriek. Elke schakel moet zowel een aanname als een indicator dragen die zou kunnen aantonen dat de aanname vals is:

```
Langetermijnuitkomst （het doel）
  ↑ voorwaarde ＋ aanname ＋ indicator
Tussenliggende uitkomst N
  ↑ voorwaarde ＋ aanname ＋ indicator
  ...
Tussenliggende uitkomst 1
  ↑ voorwaarde ＋ aanname ＋ indicator
Activiteiten / interventies
  ↑ toegewezen middelen
Inputs
```

Deze structuur voedt rechtstreeks in [methoden voor impactevaluatie](../impact-evaluation-methods/), die bestaan om te testen of de aannames bij elke schakel daadwerkelijk standhouden, en in [contrafeitelijke analyse](../counterfactual-analysis/), die test of de langetermijnuitkomst toch zou hebben plaatsgevonden.

## Uitgewerkt voorbeeld

**Gemeente (preventie van dakloosheid)**: de langetermijnuitkomst is duurzame huurcontracten na 12 maanden voor huishoudens met risico op uitzetting.

- Voorwaarde: huishoudens hebben een realistisch, betaalbaar terugbetalingsplan voor achterstallen. Aanname: door casemanagers onderhandelde plannen zijn duurzamer dan door de rechter opgelegde plannen. Indicator: % plannen nog actief na 6 maanden.
- Voorwaarde: huishoudens vragen de toeslagen aan waarop zij recht hebben. Aanname: een digitale toeslagencalculator verhoogt correcte aanvragen ten opzichte van papieren formulieren. Indicator: aanvraagnauwkeurigheid, vergeleken voor/na de uitrol van het instrument.
- Activiteiten: triage door casemanagers, digitale toeslagencalculator, onderhandeling over achterstallen.

In een pilotcohort van 120 huishoudens hield de aanname van de toeslagencalculator stand voor 102 huishoudens (85%) die vervolgens correct aanvroegen, bewezen door een daaropvolgende procesevaluatie — wat het programmateam bewijs geeft voor precies die schakel in plaats van één enkele van-begin-tot-eind-bewering over voorkomen dakloosheid.

**Goed doel (jeugdmentorschap)**: de langetermijnuitkomst is verminderde schooluitsluiting. Achterwaarts in kaart gebrachte voorwaarden: verbeterde emotieregulering ← betrouwbare één-op-één-relatie met een mentor ← consistent wekelijks contact over twee termijnen. De theorie maakt expliciet dat het missen van de voorwaarde "consistent wekelijks contact" (zeg, door verloop van mentoren) voorspelt dat de uitkomst niet zal volgen, wat een testbare, falsifieerbare bewering is in plaats van een hoop.

## Verband met softwareontwikkeling

Een theorie van verandering moet het datamodel van een product vormgeven voordat een enkel dashboard wordt gebouwd: identificeer welke schakels een indicator nodig hebben, en instrumenteer specifiek daarvoor, in plaats van standaard te doen wat het gemakkelijkst te loggen is. Het disciplineert ook roadmapgesprekken — een functie die niet in kaart wordt gebracht naar enige schakel in de keten, is niet duidelijk de moeite waard om te bouwen. Zie [logisch model](../logic-model/) voor de voorwaartse verantwoordingsketen gebouwd zodra de theorie is overeengekomen, [sociaal rendement op investering](../social-return-on-investment/) voor een methode die afhankelijk is van een theorie van verandering om te bepalen welke uitkomsten te waarderen, en [uitkomsten versus output](../outcomes-vs-outputs/) voor het onderscheid waarop de tussenliggende-uitkomstschakels berusten.

## Valkuilen

- **Het verwarren met een logisch model.** Een theorie van verandering is causaal en verklarend (waarom we geloven dat dit werkt); een logisch model is sequentieel en beschrijvend (wat er gebeurt in welke volgorde). Slechts één produceren laat ofwel het "waarom" of het verantwoordingsspoor ontbreken.
- **Aannames impliciet laten.** De hele waarde van achterwaartse kartering is het blootleggen van testbare aannames; een theorie van verandering die alleen vakjes en pijlen weergeeft zonder te benoemen wat elke schakel vals zou kunnen maken, is decoratie.
- **Het eenmaal bouwen en op de plank leggen.** Een theorie van verandering geschreven voor een financieringsaanvraag en nooit herzien, stopt nuttig te zijn op het moment dat bewijs een schakel begint te weerspreken.
- **Input van belanghebbenden overslaan.** Een theorie van verandering volledig gebouwd door opdrachtgevers zonder input van frontlijnpersoneel of begunstigden, codeert vaak aannames waarin niemand die de dienst levert werkelijk gelooft.

## Bronnen

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
