# Multidimensionale Armoede-Index (MPI)

De MPI meet armoede als overlappende deprivaties die een persoon gelijktijdig ervaart — in gezondheid, onderwijs, en levensstandaarden — in plaats van als inkomen alleen dat onder een lijn valt. Het werd ontwikkeld door het Oxford Poverty and Human Development Initiative (OPHI) met Sabina Alkire en James Foster, en wordt sinds 2010 gezamenlijk gepubliceerd met UNDP in elk Human Development Report, naast de [Human Development Index](../index-voor-menselijke-ontwikkeling/).

## Waarom het ertoe doet

Inkomensarmoedelijnen missen mensen die genoeg contant inkomen hebben maar schoon water, scholing, missen, of de dood van een kind overleven — en ze missen het feit dat deprivaties clusteren: een huishouden zonder elektriciteit heeft disproportioneel waarschijnlijk ook geen sanitatie en een ondervoed kind. De Alkire-Foster-methode, waarop de MPI is gebouwd, telt de deprivaties van elke persoon over tien indicatoren gegroepeerd in drie gelijk gewogen dimensies — gezondheid, onderwijs, levensstandaarden — en classificeert iemand alleen als "MPI-arm" als zijn gewogen deprivatiescore een vaste drempel overschrijdt, wat overlap vastlegt die een set afzonderlijke enkele-indicator-statistieken niet kan. OPHI publiceert de volledige methodologie en landgegevens op <https://ophi.org.uk/multidimensional-poverty-index/>; de globale MPI die het gezamenlijk onderhoudt met UNDP dekt nu meer dan 110 landen. Voor software gebouwd voor anti-armoedeprogramma's — cash-transfers, sociale-zorgtriage, hulpdoelgerichtheid — is de indicatorset van de MPI vaak het dichtstbijzijnde bij een gestandaardiseerd deprivatieschema al gevalideerd over tientallen nationale statistiekbureaus.

## De berekening

```
10 indicatoren, 3 dimensies, elke dimensie gewogen 1/3:

Gezondheid (1/3):           voeding (1/6), kindermortaliteit
                            (1/6)
Onderwijs (1/3):             schooljaren (1/6), schoolbezoek
                            (1/6)
Levensstandaarden (1/3):     kookbrandstof, sanitatie,
                            drinkwater, elektriciteit,
                            huisvesting, activa (1/18 elk)

deprivatiescore (c) = som van gewichten van indicatoren
                      waarin een persoon deprivatie ervaart

persoon is "MPI-arm" als c ≥ 1/3 (de armoedeafkapwaarde, k =
33%)

H (hoofdtellingsratio) = aantal MPI-arme / totale populatie
A (intensiteit)         = gemiddelde deprivatiescore alleen
                         onder de MPI-arme

MPI = H × A
```

Omdat MPI het *aandeel* dat arm is vermenigvuldigt met *hoe* arm het is, kunnen twee regio's met dezelfde hoofdtellingsratio zeer verschillende MPI-scores hebben als deprivaties ernstiger zijn in één — dezelfde "geen substitutie tussen dimensies"-logica achter het geometrisch gemiddelde van de HDI.

## Uitgewerkt voorbeeld

**Nationale enquête van 1.000 mensen**: 350 worden geïdentificeerd als multidimensionaal arm (deprivatiescore ≥ 33%). Onder alleen die 350 arme individuen is de gemiddelde deprivatiescore 45%.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Twee districten met gelijke hoofdtelling vergelijken**: District A heeft H = 0,30 en A = 0,40 (velen arm, matig deprivatie); District B heeft H = 0,30 en A = 0,60 (zelfde aantal arm, maar ernstiger deprivatie — geen elektriciteit *en* geen sanitatie *en* geen schoolbezoek gelijktijdig).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Zelfde hoofdtellingsratio, 50% hogere MPI in District B — een doelgerichtheidssysteem gebaseerd op hoofdtellingsarmoede alleen zou de twee districten identiek rangschikken en missen dat District B diepere interventie nodig heeft.

## Verband met softwareontwikkeling

- Casemanagement- en subsidiabiliteitssystemen voor sociale programma's slaan vaak al verschillende van de tien indicatoren op (huisvesting, schoolbezoek, gezondheidsmarkers) in afzonderlijke silo's; de Alkire-Foster-telmethode is een klaargemaakt schema voor het combineren ervan in één deprivatiescore in plaats van een op-maat-gemaakt scoremodel vanaf nul te bouwen.
- De hoofdtelling/intensiteit-splitsing (H × A) is een algemeen nuttig patroon voor elk dashboard dat "hoeveel worden getroffen" naast "hoe erg" rapporteert — beide samenpersen in één getal, zoals ruwe prevalentiestatistieken doen, verhult precies het geval dat de meeste middelen nodig heeft.
- MPI-achtige indicatordashboards koppelen natuurlijk met [kosten per begunstigde](../kosten-per-begunstigde/)-rapportage voor anti-armoedeprogramma's: kosten per punt MPI-reductie is een verdedigbare eenheid voor het vergelijken van zeer verschillende interventies (cash-transfer versus sanitatie-infrastructuur).

## Valkuilen

- **De tien indicatoren behandelen als universeel** — de globale MPI-indicatoren van OPHI zijn gecalibreerd voor cross-landvergelijkbaarheid; nationale MPI's (veel landen, inclusief verschillende in Zuid-Azië en Afrika, publiceren hun eigen) passen indicatoren en gewichten aan aan lokale context, en de twee zijn niet direct vergelijkbaar.
- **Alleen H rapporteren** — hoofdtellingsratio negeert intensiteit volledig; rapporteer of berekend altijd A ernaast, of de MPI zelf.
- **Aannemen dat MPI-arm en inkomen-arm dezelfde populatie zijn** — de eigen landbriefings van OPHI tonen typisch slechts partiële overlap tussen de twee; een programma dat alleen de inkomen-arme richt, zal systematisch een betekenisvol aandeel van de multidimensionaal arme missen.

## Bronnen

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
