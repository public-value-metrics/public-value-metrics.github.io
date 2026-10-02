# Logisch model

Een logisch model is een lineair diagram dat inputs, activiteiten, outputs, uitkomsten, en impact verbindt voor een programma, van links naar rechts gelezen als een verantwoordingsketen: middelen gaan erin, activiteiten gebeuren, outputs worden geproduceerd, uitkomsten veranderen voor begunstigden, en impact valt toe op een breder of langer tijdsbestek. Het is de standaardstructuur waaraan financiers en auditors verwachten dat een programma rapporteerbaar is, en de voorwaartse tegenhanger van een achterwaarts in kaart gebrachte [theorie van verandering](../theory-of-change/).

## Waarom het ertoe doet

Het Magenta Book van HM Treasury specificeert het logische model als een verplicht element van programma-evaluatieontwerp, en financiers zoals het National Lottery Community Fund bouwen hun aanvraag- en rapportagesjablonen rond precies deze vijfkolomsketen. De waarde ervan is dat het een programma dwingt om in één diagram aan te geven wat het zal besteden, wat het ermee zal doen, wat het zal produceren, en — cruciaal — wat als resultaat zou moeten veranderen, op een specificiteitsniveau dat een alinea prosa doorgaans verduistert. Een logisch model met een gevulde input- en activiteitenkolom maar een lege of vage uitkomstkolom is in één oogopslag te diagnosticeren, wat precies is waarom financiers erom vragen.

## De berekening

Het logische model is een structurele keten in plaats van een formule:

```
Inputs          Activiteiten      Outputs             Uitkomsten
（toegewezen    （wat er mee      （directe,           （verandering
 middelen）      wordt gedaan）    telbare              voor
                                   producten）          begunstigden）

                                                        Impact
                                                        （langetermijn-,
                                                        verandering op
                                                        populatie- of
                                                        systeemniveau）
```

Elke kolom moet specifieker zijn dan de vorige: inputs zijn wat je besteedt, activiteiten zijn wat je doet, outputs zijn wat wordt geleverd ongeacht effect, uitkomsten zijn wat als resultaat verandert — het onderscheid volledig behandeld in [uitkomsten versus output](../outcomes-vs-outputs/) — en impact is de duurzame, vaak slechts deels toeschrijfbare, langetermijnverandering.

## Uitgewerkt voorbeeld

**Gemeente (digitale schuldhulpdienst)**:

- Inputs: £180.000 jaarlijks budget, 4,0 voltijdsadviseurs, een zaaksysteem.
- Activiteiten: outreachsessies, één-op-één-schuldhulpafspraken.
- Outputs: 900 afspraken geleverd; 750 schuld- en toeslagplannen uitgegeven.
- Uitkomsten: van klanten die een follow-up van 6 maanden bereiken, rapporteert 60% (450 van 750) verminderde achterstallen, gemiddeld een vermindering van £1.200 per klant — £540.000 in geaggregeerde achterstallenvermindering.
- Impact: een meetbare daling van dakloosheidsaanvragen van de klantenbasis van de dienst over twee jaar, slechts deels toeschrijfbaar aan deze dienst samen met andere interventies (zie [contrafeitelijke analyse](../counterfactual-analysis/)).

**Goed doel (voedselbankverwijzingspartnerschap)**:

- Inputs: £45.000, 1,5 voltijdscoördinator, partnerschapsovereenkomsten met 12 verwijzende instanties.
- Activiteiten: verwijzingstriage, verpakking en distributie van pakketten.
- Outputs: 5.000 voedselpakketten gedistribueerd aan 1.100 huishoudens.
- Uitkomsten: 68% van onderzochte huishoudens (748 van 1.100) rapporteert verbeterde voedselzekerheid bij een follow-upgesprek na 4 weken.
- Impact: bijdrage aan verminderde lokale vraag naar crisisdiensten, alleen bewezen in geaggregeerde gebiedsstatistieken, niet toeschrijfbaar aan dit goede doel alleen.

## Verband met softwareontwikkeling

Het logische model ligt dicht bij een letterlijk datamodel voor een uitkomstensysteem: inputs en activiteiten zijn operationele gegevens die je al hebt (uitgaven, bemanning, sessielogboeken); outputs zijn gemakkelijk te instrumenteren omdat ze worden geteld op het leveringspunt; uitkomsten vereisen bewust ontworpen verzameling van follow-upgegevens (enquêtes, koppeling van administratieve gegevens) die niet zullen bestaan tenzij iemand ze bouwt; impact vereist meestal gekoppelde, longitudinale, of populatieniveaugegevens buiten de systemen van één programma. Ingenieurs die rapportagetools bouwen, moeten opdrachtgevers aansporen uitkomst- en impactindicatoren te definiëren op ontwerptijdstip, in plaats van standaard een alleen-output-dashboard te bouwen omdat dat is wat de transactionele gegevens al ondersteunen. Zie [sociaal rendement op investering](../social-return-on-investment/) voor een methode die specifiek de uitkomsten- en impactkolommen waardeert, en [batenrealisatie](../benefits-realization/) voor het bijhouden of de impactkolom daadwerkelijk werd geleverd.

## Valkuilen

- **Stoppen bij outputs.** Een dashboard dat geleverde afspraken of gedistribueerde pakketten rapporteert en baat impliceert, rapporteert activiteit, geen resultaten — zie [uitkomsten versus output](../outcomes-vs-outputs/).
- **Geen vermeld causaal verband tussen kolommen.** Een logisch model vermeldt de keten maar niet waarom activiteiten outputs zouden moeten produceren die uitkomsten zouden moeten produceren; die redenering hoort bij een [theorie van verandering](../theory-of-change/), en een logisch model zonder één daarachter is ongetest.
- **Het behandelen als een eenmalig aanvraagdocument.** Logische modellen alleen geproduceerd om een financieringsaanvraag te voldoen en nooit bijgewerkt, stoppen te weerspiegelen wat het programma daadwerkelijk doet.
- **Toeschrijvingsverschuiving in de impactkolom.** Beweren dat verandering op populatieniveau uitsluitend werd veroorzaakt door één programma, zonder een contrafeitelijke situatie, overdrijft wat het bewijs ondersteunt.

## Bronnen

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004).
  <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
