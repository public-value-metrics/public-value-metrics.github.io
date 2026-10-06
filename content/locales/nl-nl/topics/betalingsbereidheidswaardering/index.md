# Betalingsbereidheidswaardering

Methoden voor betalingsbereidheid schatten de waarde van een niet-marktgoed door mensen direct te vragen wat zij ervoor zouden willen betalen, of wat zij zouden accepteren als compensatie om het af te staan, doorgaans via een gestructureerde enquête die een hypothetisch scenario beschrijft. Contingentwaardering is de bekendste techniek in de familie.

## Waarom het ertoe doet

Bijlage 2 van het Green Book (aanvullende richtlijn over de waardering van niet-marktimpacts) onderschrijft methoden van betalingsbereidheid voor goederen die helemaal geen waarneembare markttransactie hebben om waarde uit af te leiden — luchtkwaliteit, biodiversiteit, overstromingsbescherming, de bestaanswaarde van een landschap dat iemand mogelijk nooit bezoekt (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Defra heeft zijn eigen richtlijn voor betalingsbereidheid gepubliceerd voor milieubeoordeling specifiek omdat zoveel milieuwaarde (habitatbehoud, waterkwaliteit) helemaal geen proxymarkt heeft, anders dan bijvoorbeeld lawaai, dat tenminste correleert met waarneembare huizenprijzen (zie [afgeleide-voorkeurwaardering](../afgeleide-voorkeurwaardering/)).

De kernaantrekkingskracht van betalingsbereidheid — het kan letterlijk alles waarderen, inclusief goederen waarin niemand ooit heeft getransigeerd — is ook de bron van zijn geloofwaardigheidsprobleem. Omdat respondenten niet daadwerkelijk geld uitgeven, zijn contingentwaarderingsenquêtes gevoelig voor hypothetische bias (mensen overdrijven betalingsbereidheid wanneer er geen echte budgetbeperking is), inbeddingseffecten (hetzelfde goed wordt anders gewaardeerd afhankelijk van wat er anders in de enquête staat), en startpuntbias in biedspelontwerpen. Het NOAA-panel over contingentwaardering uit 1993, samengeroepen na de rechtszaak over de olieramp van de Exxon Valdez, stelde ontwerpnormen vast — een binair "zou u £X per jaar betalen? ja/nee"-referendumformaat in plaats van open-einde bieden, en verplichte herinneringen aan de werkelijke budgetbeperking van de respondent — die de referentienorm blijven voor verdedigbare enquêtes.

## De berekening

```
Contingentwaardering （referendumformaat）:
  Presenteer een binaire keuze: "zou u £X per jaar betalen
  voor uitkomst Y? ja/nee"
  Varieer X willekeurig over respondenten.
  Pas betalingsbereidheid aan als een functie van het
  ja/nee-antwoordpercentage bij elke X.

Gemiddelde betalingsbereidheid = oppervlakte onder de
                                 geschatte vraagcurve
Geaggregeerde waarde = Gemiddelde betalingsbereidheid ×
                       betrokken populatie

Keuze-experiment （discrete keuzemodellering） variant:
  Presenteer respondenten met herhaalde keuzes tussen
  bundels van attributen （inclusief een kostenattribuut）,
  schat impliciete prijzen voor elk niet-kostenattribuut uit
  de afwegingen die respondenten onthullen.
```

De keuze-experimentvariant wordt in de huidige Britse praktijk over het algemeen verkozen boven contingentwaardering met een enkele vraag omdat het herhaaldelijk dwingen van respondenten om verschillende attributen tegen kosten af te wegen, meer intern consistente, moeilijker te manipuleren schattingen oplevert dan een enkele ja/nee-vraag.

## Uitgewerkt voorbeeld

**Rijksoverheid**: Defra bestelt een contingentwaarderingsenquête om een programma voor verbeterde waterkwaliteit van een rivier te waarderen. Een enquête in referendumformaat van 2.000 huishoudens vindt dat 62% £40/jaar zou betalen via een hypothetische toeslag op de waterrekening, en de geschatte vraagcurve geeft een gemiddelde betalingsbereidheid van £28/jaar per huishouden.

```
Gemiddelde betalingsbereidheid = £28/huishouden/jaar
Huishoudens in stroomgebied = 340.000
Geaggregeerde jaarlijkse waarde = £28 × 340.000 = £9,52m/jaar

Over een beoordelingsperiode van 20 jaar bij een
discontovoet van 3,5% （annuïteitsfactor ≈ 14,2）:
HW（baat） ≈ £9,52m × 14,2 ≈ £135m
```

Dit geaggregeerde cijfer wordt vervolgens vergeleken met de kostenzijde van de [maatschappelijke kosten-batenanalyse](../maatschappelijke-kosten-batenanalyse/) van het programma. Het Green Book vereist dat dit soort bewijs van betalingsbereidheid wordt gerapporteerd samen met het betrouwbaarheidsinterval en de enquêtemethodologie, niet als een blote puntschatting, precies omdat het onderliggende cijfer fragieler is dan een marktprijs.

**Goed doel**: een erfgoedstichting onderzoekt bezoekers en niet-bezoekers over betalingsbereidheid om de sluiting te voorkomen van een historisch gebouw dat geen van beide groepen noodzakelijkerwijs bezoekt (de bestaanswaarde). Omdat niet-bezoekers die het gebouw nooit zullen zien nog steeds positieve betalingsbereidheid rapporteren, vangt de enquête bestaans- en erfwaarde die een eenvoudige telling van bezoekerstariefinkomsten (een afgeleide-voorkeurproxy) volledig zou missen — wat het echte voordeel van betalingsbereidheid toont waar geen markttransactie van welke soort ook bestaat om waarde te onthullen.

## Verband met softwareontwikkeling

Methoden van betalingsbereidheid zijn zelden rechtstreeks van toepassing op softwareontwikkelingswerk, maar engineers die burgerraadplegingsplatforms, budgetparticipatietools, of infrastructuur voor publieke enquêtes bouwen, bouwen vaak het instrument waarvan de economie afhankelijk is. De details van het enquêteontwerp goed krijgen — willekeurige biedbedragen, binaire referendumraming boven open-einde-vragen, expliciete herinneringen aan budgetbeperking — is geen UX-fijnigheid, het is wat de resulterende waardering verdedigbaar maakt onder toetsing; een slecht ontworpen enquête in de app kan maanden van daaropvolgende economische analyse ongeldig maken. Zie [maatstaven voor burgertevredenheid](../burgertevredenheidsmaatstaven/) voor de meer algemene discipline om opiniegegevens te verzamelen die analytisch gewicht zullen dragen.

## Valkuilen

- **Open-einde "hoeveel zou u betalen?"-vragen.** Deze zijn veel gevoeliger voor strategische en verankeringsbias dan binaire referendumraming; de aanbeveling van het NOAA-panel om een referendumformaat te gebruiken, bestaat precies omdat open-einde verzameling slecht presteert.
- **Geen herinnering aan de werkelijke budgetbeperking van de respondent.** Zonder deze overtreft de opgegeven betalingsbereidheid routinematig wat dezelfde mensen zouden betalen wanneer een echte budgetafweging in het spel is — hypothetische bias.
- **Inbeddingseffecten genegeerd.** Hetzelfde goed alleen gewaardeerd versus gewaardeerd als onderdeel van een grotere bundel produceert verschillende betalingsbereidheidschattingen; rapporteer wat er anders, indien iets, in het enquêtekader zat.
- **De puntschatting van een enkele enquête behandelen als vastgesteld.** De praktijk van het Green Book verwacht een bereik en een discussie over bekende biases, geen bloot getal dat wordt meegenomen in de kosten-batentabel alsof het een marktprijs was.

## Bronnen

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
