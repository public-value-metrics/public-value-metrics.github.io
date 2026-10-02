# BBP-alternatieven

BBP-alternatieven zijn maatstaven gebouwd om vast te leggen wat Bruto Binnenlands Product structureel negeert: onbetaald zorgwerk, milieu-uitputting, inkomensverdeling, en of groei daadwerkelijk levens verbetert. De bekendste zijn de Genuine Progress Indicator (GPI) en de Gross National Happiness (GNH) Index van Bhutan; de zaak om ze serieus te nemen werd het meest invloedrijk gemaakt door de Stiglitz-Sen-Fitoussi-Commissie van 2009. Voor ingenieurs die overheidsdashboards of KPI-systemen bouwen, is "welk getal telt als voortgang" een ontwerpbeslissing met echte gevolgen voor wat wordt gefinancierd.

## Waarom het ertoe doet

Simon Kuznets, die de Amerikaanse nationale rekeningen bouwde in de jaren 1930, waarschuwde het Congres in 1934 dat "het welzijn van een natie nauwelijks kan worden afgeleid uit een meting van nationaal inkomen" — een voorbehoud dat het cijfer bijna onmiddellijk overgroeide. BBP telt de opruiming van een olielekkage als groei en de onbetaalde kinderzorg van een ouder als niets; het onderscheidt niet uitgaven die duurzaam welzijn opbouwen van uitgaven die slechts al gedane schade compenseren. De Stiglitz-Sen-Fitoussi-Commissie, bijeengeroepen door de Franse president Nicolas Sarkozy en voorgezeten door Joseph Stiglitz, Amartya Sen, en Jean-Paul Fitoussi, rapporteerde in 2009 dat statistische systemen de nadruk zouden moeten verschuiven "van het meten van economische productie naar het meten van het welzijn van mensen," en dat duurzaamheid afzonderlijk zou moeten worden bijgehouden van huidig welzijn in plaats van samengevoegd in één getal. BBP-alternatieven operationaliseren die aanbeveling. De GPI, ontwikkeld door de denktank Redefining Progress in de jaren 1990 en bouwend op de Measure of Economic Welfare van William Nordhaus en James Tobin uit 1972, begint vanaf persoonlijke consumptie (zoals BBP doet) en voegt vervolgens niet-marktvoordelen toe die BBP weglaat (huishoudelijke arbeid, vrijwilligerswerk) terwijl het defensieve en uitputtingskosten aftrekt (criminaliteit, vervuiling, woon-werkverkeer, hulpbronnenafname) die BBP ten onrechte als positief telt. De GNH-Index van Bhutan, beheerd door het GNH Centre Bhutan (<https://www.gnhcentre.bt/>), gaat nog verder, en vervangt groei als de vermelde grondwettelijke doelstelling van het land: het aggregeert 33 indicatoren over 9 domeinen — psychologisch welzijn, gezondheid, onderwijs, tijdgebruik, culturele diversiteit, bestuur, gemeenschapsvitaliteit, ecologische diversiteit, en levensstandaarden — tot een enkele voldoende-gebaseerde score direct gebruikt om overheidsbeleidsvoorstellen te screenen.

## De berekening

```
GPI = persoonlijke consumptie-uitgaven
      + niet-marktvoordelen (huishoudelijke arbeid,
        vrijwilligerswerk, hoger onderwijs)
      − defensieve en sociale kosten (criminaliteit,
        vervuiling, woon-werkverkeer, familieafbraak)
      − uitputting van natuurlijk en sociaal kapitaal
        (hulpbronnenafname, verlies landbouwgrond)

GNH-voldoendescore, per domein:
  een persoon is "voldoende" in een domein zodra hij zijn
  drempel haalt op elke indicator
  Geluksindex = (% populatie voldoende in ≥ 6 van 9 domeinen)
                + (gewogen gemiddelde tekort van de "nog-niet-
                gelukkige" minderheid)
```

## Uitgewerkt voorbeeld

**Regio, GPI**: persoonlijke consumptie is $50 miljard. Voeg geschatte huishoudelijke en vrijwilligersarbeidswaarde van $12 miljard toe (vervangingskostenlonen — zie [waarde van vrijwilligerstijd](../volunteer-time-value/)). Trek geschatte jaarlijkse kosten van woon-werkverkeeropstopping ($3 miljard), criminaliteit ($4 miljard), en langetermijn-hulpbronnenafname ($6 miljard) af:

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($mrd)
```

Als BBP dat jaar groeide van $50 miljard naar $55 miljard (+10%), maar defensieve en uitputtingskosten sneller groeiden dan consumptie, kan GPI dalen zelfs terwijl BBP stijgt — de "drempelhypothese" die GPI-onderzoekers citeren voor hoge-inkomenseconomieën sinds ruwweg de jaren 1970, toen groei bleef stijgen terwijl GPI afvlakte.

**Burger, GNH**: een respondent haalt de voldoendedrempel in 7 van 9 domeinen (gezondheid, onderwijs, levensstandaarden, gemeenschapsvitaliteit, culturele diversiteit, ecologische diversiteit, tijdgebruik) maar schiet tekort op psychologisch welzijn en bestuur. Omdat 7 ≥ 6, wordt hij geteld als "gelukkig" in de hoofdtelling; de index volgt afzonderlijk de diepte van zijn twee tekorten zodat een nauwe slaging niet ononderscheidbaar is van een comfortabele.

## Verband met softwareontwikkeling

- Een KPI-dashboard gemodelleerd alleen op doorvoer of uitgaven (het BBP-patroon) zal systematisch schade missen die ontstaat bij het genereren van die doorvoer — supportticketvolume behandeld als "betrokkenheid" in plaats van "gebruikersnood" is de softwareleveringsversie van het tellen van een olielekkage als groei.
- GPI-achtige boekhouding is een nuttig auditpatroon voor elke [kerncijfers-publieke-sector](../public-sector-kpis/)-suite: vraag voor elke kopteksoutputmaatstaf welke defensieve kost hij stilzwijgend maakt (herwerk, incidentrespons, burn-out) en saldeer deze weg, zoals GPI defensieve uitgaven wegsaldeert van consumptie.
- De domein-voldoendemethode van GNH — slagen/falen per dimensie, dan aggregeren — is structureel dezelfde techniek als [multicriteria-besluitanalyse](../multi-criteria-decision-analysis/) en is het herbruiken waard waar dan ook een enkele scalaire score een kritisch falende dimensie zou verhullen.

## Valkuilen

- **GPI behandelen als een precieze nationale rekening** — in tegenstelling tot BBP heeft GPI geen enkele gestandaardiseerde methodologie; verschillende studies wegen woon-werkverkeerkosten, vrijwilligerstijd, of hulpbronnenafname verschillend, dus cross-studie-GPI-vergelijkingen zijn veel minder betrouwbaar dan cross-land-BBP-vergelijkingen.
- **GNH integraal importeren in een andere beleidscultuur** — zijn domeingewichten en voldoendedrempels werden vastgesteld door Bhutanese raadpleging; het cijfer kopiëren zonder het onderliggende raadplegingsproces produceert een holle maatstaf die niemand vertrouwt.
- **Aannemen dat een BBP-alternatief kosten-batenbeoordeling vervangt** — dit zijn diagnostische, economie-brede indicatoren, geen besluitvormingsinstrumenten voor een enkel programma; gebruik [sociale-kosten-batenanalyse](../social-cost-benefit-analysis/) daarvoor in plaats daarvan.

## Bronnen

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
