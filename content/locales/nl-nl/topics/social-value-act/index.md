# Social Value Act

De Public Services (Social Value) Act 2012 is een Britse wettelijke verplichting die publieke instanties in Engeland en Wales verplicht te overwegen hoe wat wordt aangeschaft het economische, sociale, en milieuwelzijn van het relevante gebied zou kunnen verbeteren, en te overwegen hierover te raadplegen, voordat een aanbestedingsproces voor publieke-dienstencontracten wordt gestart. Het trad in januari 2013 in werking als een relatief lichte "houd rekening met"-verplichting, en werd aanzienlijk versterkt door Procurement Policy Note (PPN) 06/20 in januari 2021, die vereist dat centrale overheidscontracten sociale waarde expliciet evalueren — niet alleen overwegen — met een minimale weging in de toekenningscriteria.

## Waarom het ertoe doet

Voor PPN 06/20 kon "overwegen" van sociale waarde worden vervuld door een opdrachtgever die noteerde dat hij erover had nagedacht, zonder eis dat het de toekenningsbeslissing beïnvloedde — een verplichting gemakkelijk te vervullen op papier en te negeren in de praktijk. PPN 06/20 dichtte die lacune voor aanbestedingen van de centrale overheid: het verplicht dat sociale waarde wordt gescoord als onderdeel van de aanbestedingsevaluatie, georganiseerd rond vijf nationale prioritaire thema's — covid-19-herstel, aanpakken van economische ongelijkheid, bestrijden van klimaatverandering, gelijke kansen, en welzijn — en doorgaans gemeten met het National TOMs (Themes, Outcomes, Measures)-raamwerk, onderhouden door het Social Value Portal. Voor een softwareingenieur die aanbestedings-, contractbeheer-, of biedondersteuningstools bouwt voor de publieke sector, is dit de wettelijke basis waartegen jouw klant verplicht is te bouwen, geen optionele meevaller.

## De berekening

Sociale waarde is een raamwerkgevormd onderwerp; zijn "berekening" is de scoringsstructuur die de meeste instanties gebruiken:

```
Totale biedscore = Prijs/kostenweging + Kwaliteitsweging +
                  Sociale-waardeweging

PPN 06/20 （centrale overheid）: sociale-waardeweging ≥ 10%
                                van totale score

Thema's van sociale waarde （PPN 06/20）:
 1. Covid-19-herstel
 2. Aanpakken van economische ongelijkheid
 3. Bestrijden van klimaatverandering
 4. Gelijke kansen
 5. Welzijn
```

Bieders monetariseren hun toezeggingen tegen deze thema's doorgaans met behulp van [databanken voor eenheidskosten](../unit-cost-databases/), en dezelfde monetarisatielogica gebruikt in [sociaal rendement op investering](../social-return-on-investment/) geldt: een toezegging moet worden bewezen, toeschrijfbaar aan het contract, en niet dubbel geteld tegen andere financiering.

## Uitgewerkt voorbeeld

**Gemeentelijk IT-contract**: een contract van £2 miljoen voor 3 jaar wordt gescoord 60% kwaliteit, 30% prijs, 10% sociale waarde. Bieder A verbindt zich tot 2 leerlingplaatsen, £150.000 aan lokale onderaannemersuitgaven, en 200 uur pro bono digitale-vaardighedentraining voor een lokale school, gemonetariseerd met behulp van proxy's uit een databank voor eenheidskosten tot gecombineerd £90.000 aan extra sociale waarde. Bieder B verbindt zich tot een kleiner pakket gemonetariseerd op £40.000. Als de instantie sociale waarde proportioneel scoort tegen het sterkste bod, ontvangt Bieder A de volledige 10 punten; Bieder B ontvangt 10 × (£40.000 ÷ £90.000) = 4,4 punten — een kloof van 5,6 punten die het contract kan bepalen, zelfs wanneer kwaliteit en prijs dicht bij elkaar liggen.

**Bieder uit de vrijwilligerssector**: een kleine VCSE (vrijwillige, gemeenschaps- en sociale onderneming) die biedt op een terreinonderhoudscontract tegen een commerciële concurrent, kan niet concurreren op eenheidsprijs alleen, maar gebruikt Global Value Exchange-proxy's om zijn bestaande toezeggingen aan gemeenschapswerkgelegenheid en vrijwilligerswerk te monetariseren, waardoor een bewezen zaak voor sociale waarde ontstaat die het waard is samen met prijs en kwaliteit te worden gescoord.

## Verband met softwareontwikkeling

Het winnen van een bod met gemonetariseerde toezeggingen voor sociale waarde creëert een verplichting om levering tegen hen te bewijzen via contractbeheer — tools die inschrijvingen van leerlingplaatsen, lokale uitgaven, en trainingsuren loggen tegen de specifieke toezeggingen gescoord bij aanbesteding, en die invoeren in contractbeoordelingsvergaderingen in plaats van vergeten te worden zodra het contract is ondertekend. G-Cloud- en Digital Marketplace-vermeldingen vereisen steeds vaker verklaringen over sociale waarde op het moment van vermelding. Zie [sociaal rendement op investering](../social-return-on-investment/) voor de waarderingsmethode achter de toezeggingen, [databanken voor eenheidskosten](../unit-cost-databases/) voor de proxy's waar bieders op putten, en [uitkomsten versus output](../outcomes-vs-outputs/) om ervoor te zorgen dat geleverde toezeggingen uitkomsten zijn, geen louter activiteitentellingen.

## Valkuilen

- **Sociaal-wittende biedingen.** Vage toezeggingen ("we ondersteunen de lokale gemeenschap") die niet kunnen worden gemeten of verantwoord tijdens contractbeheer, scoren goed maar leveren niets verifieerbaars.
- **Sociale waarde behandelen als een tiebreaker.** PPN 06/20 vereist dat sociale waarde expliciet wordt geëvalueerd binnen de toekenningscriteria, niet informeel gebruikt om een gelijkspel te breken tussen anderszins gelijke biedingen.
- **Geen contractbeheer-opvolging.** Toezeggingen gescoord bij aanbesteding worden vaak nooit getraceerd tijdens levering — zie [batenrealisatie](../benefits-realization/).
- **Inconsistente meetraamwerken tussen contracten.** Het gebruik van verschillende proxybronnen voor soortgelijke toezeggingen op verschillende contracten maakt vergelijking op portefeuilleniveau betekenisloos, wat de reden is dat gemeenschappelijke raamwerken zoals National TOMs en gedeelde databanken voor eenheidskosten bestaan.

## Bronnen

- Public Services (Social Value) Act 2012. <https://www.legislation.gov.uk/ukpga/2012/3/contents>
- Cabinet Office, Procurement Policy Note 06/20, "Taking Account of Social Value in the Award of
  Central Government Contracts."
  <https://www.gov.uk/government/publications/procurement-policy-note-0620-taking-account-of-social-value-in-the-award-of-central-government-contracts>
- Social Value Portal, National TOMs Framework. <https://socialvalueportal.com/national-toms/>
