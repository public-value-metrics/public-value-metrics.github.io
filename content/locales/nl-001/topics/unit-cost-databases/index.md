# Databanken voor eenheidskosten

Een databank voor eenheidskosten is een bibliotheek van vooraf onderzochte, op bewijs gebaseerde financiële proxy's voor sociale uitkomsten — de waarde van de overgang van werkloosheid naar werk, van verminderde eenzaamheid, van een stabiele huurovereenkomst — die een beoefenaar in staat stellen een uitkomst te monetariseren zonder elke keer op maat gemaakt waarderingsonderzoek te laten uitvoeren. Ze bestaan zodat een klein goed doel dat een subsidieaanvraag schrijft, dezelfde rigueur kan toepassen als een goed toegeruste adviesbureau, door een proxy te herbruiken die iemand anders al heeft afgeleid en gepubliceerd.

## Waarom het ertoe doet

De UK Social Value Bank van HACT, ontwikkeld met econoom Daniel Fujiwara met behulp van welzijnswaarderingsmethoden, en Global Value Exchange, een open, crowdgesourcte databank van financiële proxy's, zijn de twee meest gebruikte in de Britse vrijwilligerssector en publieke sector. Beide bestaan omdat het onderliggende waarderingswerk — [welzijnswaardering](../wellbeing-valuation/) en [stated-preference-waardering](../stated-preference-valuation/) — duur is, methodologisch veeleisend, en traag om vanaf nul uit te voeren voor elk project. Een gedeelde, gepubliceerde proxybibliotheek verandert wat een meermaandenonderzoek zou zijn in een opzoekactie, wat precies is waarom ze ertoe doen voor zowel [sociaal rendement op investering](../social-return-on-investment/)-berekeningen als [Social Value Act](../social-value-act/)-biedevaluaties: zonder hen zou rigoureuze monetarisatie alleen betaalbaar zijn voor organisaties groot genoeg om hun eigen studies te laten uitvoeren.

## De berekening

Een databank voor eenheidskosten berekent zelf niets; het levert één invoer voor een berekening die elders wordt gedaan:

```
Financiële proxywaarde = marktprijs, OF schaduwprijs, OF
                         welzijnswaardering, OF
                         stated-preference-waarde
                         voor een gedefinieerde eenheid
                         uitkomstverandering
                         (bijv. "per persoon die overgaat
                         van werkloosheid naar werk, per jaar")

Toegepaste waarde = aantal behaalde uitkomsten × eenheids-
                    proxywaarde
```

Zie [schaduwprijzen](../shadow-pricing/) voor hoe een proxy wordt geconstrueerd wanneer geen marktprijs bestaat, en [sociaal rendement op investering](../social-return-on-investment/) voor hoe de toegepaste waarde vervolgens invoert in een verhouding na deadweight- en toeschrijvingscorrecties.

## Uitgewerkt voorbeeld

**Goed doel (SROI van maatjesdienst)**: een databankvermelding voor "vermindering van eenzaamheid" geeft een illustratieve proxy van £1.100 per persoon per jaar. Toegepast op 80 begunstigden: 80 × £1.100 = £88.000 brutowaarde. Als dezelfde databank ook een proxy heeft voor "verbeterd mentaal welzijn" die put uit een overlappend welzijnsenquête-item, zou het stapelen van beide proxy's voor dezelfde 80 mensen een deel van dezelfde onderliggende verandering dubbel tellen — de databank levert het getal, maar het vermijden van deze overlap is de verantwoordelijkheid van de analist.

**Gemeente (SROI van banenclub)**: een databankvermelding voor "overgang van werkloosheid naar duurzame werkgelegenheid" wordt toegepast op 45 deelnemers tegen een illustratieve proxy van £8.500 per persoon per jaar: 45 × £8.500 = £382.500 brutowaarde, vóór de deadweight- en toeschrijvingscorrecties weergegeven in [sociaal rendement op investering](../social-return-on-investment/).

## Verband met softwareontwikkeling

Teams die rapportagetools bouwen voor goede doelen of opdrachtgevers hebben baat bij een interne "uitkomstencatalogus" — een tabel die elke uitkomst die een product of dienst plausibel kan claimen, koppelt aan een genoemde proxy, zijn bron-databank, zijn publicatiedatum, en een versie-identificatie — zodat verschillende teams binnen een organisatie niet elk iets andere waarden kiezen voor dezelfde uitkomst. Het inkapselen van de open data van Global Value Exchange achter een opzoekdienst, met de bron en datum altijd naast het cijfer weergegeven, houdt de proxy controleerbaar in plaats van een magisch getal verstopt in een spreadsheet. Zie [sociaal rendement op investering](../social-return-on-investment/) en [social value act](../social-value-act/) voor de twee belangrijkste plaatsen waar deze proxy's worden gebruikt.

## Valkuilen

- **Proxy's behandelen als precies.** De meeste gepubliceerde proxy's zijn gemodelleerde gemiddelden uit welzijnswaarderingsstudies met brede betrouwbaarheidsintervallen; één tot op het pond citeren overdrijft de precisie die het onderliggende onderzoek ondersteunt.
- **Dubbel tellen van overlappende proxy's.** Het combineren van proxy's (bijv. "verminderde eenzaamheid" en "verbeterd mentaal welzijn") die zijn afgeleid van overlappende enquêteconstructen, waardeert dezelfde onderliggende verandering tweemaal.
- **Een proxy buiten context ongewijzigd gebruiken.** Een proxy gecalibreerd op één nationale populatie en jaar, elders toegepast zonder inflatie- of contextaanpassing, geeft stilzwijgend een verkeerde waarde aan.
- **Herkomst niet controleren.** Global Value Exchange is open en crowdgesourced, dus de kwaliteit van vermeldingen varieert per bijdrager; controleer de onderliggende bron voordat je een cijfer citeert in een subsidieaanvraag of aanbestedingsinschrijving.

## Bronnen

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — methodologische basis van de
  UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," sectie over financiële proxy's.
