# Afgeleide-voorkeurwaardering

Methoden van afgeleide voorkeur leiden de waarde van een niet-marktgoed af uit waarneembaar gedrag op een verwante markt, in plaats van mensen direct te vragen. Hedonische prijsstelling en de reiskostenmethode zijn de twee werkpaardtechnieken: beide gaan uit van een echte transactie en rekenen een impliciete prijs terug voor iets dat nooit direct werd verkocht.

## Waarom het ertoe doet

Waar methoden van [betalingsbereidheid](../stated-preference-valuation/) een hypothetische vraag stellen, observeren methoden van afgeleide voorkeur waarvoor mensen daadwerkelijk hebben betaald, wat het Green Book over het algemeen als geloofwaardiger bewijs behandelt, ceteris paribus, omdat het niet onderhevig is aan hypothetische bias — respondenten in een hedonische huizenprijsstudie betaalden werkelijk de premie of korting die wordt gemeten (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, bijlage 2). Hedonische prijsstelling ontleedt een marktprijs — meestal huizenprijzen — in impliciete prijzen voor elk attribuut van het goed, waardoor analisten bijvoorbeeld de prijspremie kunnen isoleren die huishoudens daadwerkelijk betalen om ergens rustiger of met betere luchtkwaliteit te wonen, statistisch gecorrigeerd voor elk ander attribuut dat de huizenprijs ook beïnvloedt (grootte, locatie, schoolgebied). De reiskostenmethode doet het analoge voor recreatiegebieden zonder toegangsprijs: de tijd en het geld die mensen besteden om naar een locatie te reizen, onthullen een ondergrens voor wat de locatie voor hen waard is, omdat niemand kosten maakt die het bezoek voor hen waard overschrijden.

Beide methoden delen een structurele beperking: zij kunnen alleen waarderen wat is ingebed in een bestaande markttransactie. Lawaai nabij een landingsbaan duikt op in huizenprijzen omdat mensen die zich zorgen maken over lawaai zich sorteren naar stillere woningen; de bestaanswaarde van een soort die niemand bezoekt of nabij woont, duikt helemaal niet op in enige transactie, wat precies de lacune is die methoden van [betalingsbereidheid](../stated-preference-valuation/) bestaan om te vullen.

## De berekening

```
Hedonische prijsstelling:
  Huizenprijs = f（structurele attributen,
              locatieattributen, het interessante
              milieuattribuut, ...）
  Geschat via regressie; de coëfficiënt op het
  milieuattribuut （met al het andere constant） is zijn
  impliciete prijs.

  Impliciete prijs van attribuut X = ∂（Huizenprijs） / ∂X

Reiskostenmethode:
  Bezoekfrequentie （bezoeken per hoofd vanaf zone i）
                  = f（reiskosten vanaf zone i,
                    substituutlocaties, sociaaleconomische
                    controles）
  Schat een vraagcurve voor bezoeken als functie van
  reiskosten.
  Consumentenoverschot = oppervlakte onder de geschatte
                        vraagcurve
                       = waarde van de locatie voor
                        bezoekers
```

Beide methoden vereisen een statistisch degelijke controleset — het weglaten van een storend attribuut (hedonisch) of een nabije substituutlocatie (reiskosten) vertekent de impliciete prijs in een richting die niet altijd vooraf duidelijk is, wat de reden is dat bijlage 2 van het Green Book vereist dat de regressiespecificatie en controles worden gerapporteerd, niet alleen de koptekstcoëfficiënt.

## Uitgewerkt voorbeeld

**Rijksoverheid**: de eigen schaduwprijsmethodologie voor koolstof van het Green Book put deels uit hedonisch bewijs, maar een eenvoudiger illustratief geval is vliegtuiglawaai. Een hedonische studie die huisverkoopprijzen in een vluchtpadgebied regresseert tegen afstandsgewogen lawaaiblootstelling, gecorrigeerd voor grootte, leeftijd, en schoolgebied, vindt dat elke stijging van 1 decibel in gemiddelde lawaaiblootstelling geassocieerd is met een daling van 0,5% in huizenprijs. Voor een typisch huis van £280.000 in het getroffen gebied:

```
Impliciete prijs per decibel = £280.000 × 0,5% = £1.400 per
                              huishouden
Huishoudens getroffen door een stijging van 3dB door een
nieuwe landingsbaan = 18.000
Geaggregeerde impliciete kost van de lawaaistijging
= £1.400 × 3 × 18.000 = £75,6m
```

Dit is een eenmalige gekapitaliseerde kost (ingebed in huizenprijs), waarbij de beoordeling erop moet letten dit niet dubbel te tellen tegen een afzonderlijk geschatte jaarlijkse kostenstroom voor lawaaihinder.

**Goed doel**: een milieugoed doel gebruikt de reiskostenmethode om een gratis toegankelijk natuurreservaat te waarderen. Enquêtegegevens over bezoekerspostcodes geven gemiddelde reiskosten heen en terug (tijd gewaardeerd tegen de door het Green Book aanbevolen niet-werktijdwaarde, plus brandstof) van £14 per bezoek, met 40.000 bezoeken per jaar. De geschatte vraagcurve — bezoekfrequentie dalend naarmate reiskosten vanaf een zone stijgen — impliceert een consumentenoverschot per bezoek, boven de daadwerkelijk uitgegeven £14, van ongeveer £9.

```
Totale jaarlijkse waarde = 40.000 bezoeken × （£14 uitgegeven
                          + £9 consumentenoverschot）
                          = 40.000 × £23 ≈ £920.000/jaar
```

Dit overschaduwt de nul-inkomsten van het reservaat uit toegangsprijs en geeft de bestuursleden van het goede doel een verdedigbaar cijfer voor de recreatiewaarde van de locatie bij het pleiten voor financiers.

## Verband met softwareontwikkeling

Denken in termen van afgeleide voorkeur duikt vaker op in productanalyse van de publieke sector dan beoefenaars realiseren: gebruiksgegevens van een gratis digitale overheidsdienst zijn zelf bewijs van afgeleide voorkeur voor waarde (frequentie, sessieduur, en — meest onthullend — herhaald versus eenmalig gebruikspatroon kunnen worden geanalyseerd op dezelfde manier waarop een reiskostenmodel bezoekfrequentie tegen afstand behandelt). Waar een dienst echte substituten heeft (een papieren kanaal, een telefoonlijn), kunnen de "kosten" die burgers maken om in plaats daarvan het digitale kanaal te gebruiken (tijd, data, een toestel) worden geschat en vergeleken met gebruik, wat de reiskostenlogica rechtstreeks weerspiegelt. Zie [digitale dienstenstandaard](../digital-service-standard/) en [waarde van open data](../open-data-value/), die precies dit waarderingsprobleem tegenkomen voor een goed zonder directe marktprijs.

## Valkuilen

- **Weggelaten-variabele-bias in hedonische modellen.** Het weglaten van een gecorreleerd attribuut (schoolkwaliteit die correleert met zowel huizenprijs als het interessante milieuattribuut) vertekent de impliciete prijsschatting; specificatie moet worden gerapporteerd en onderzocht, niet alleen het resultaat.
- **Substituutlocaties negeren in reiskostenstudies.** De afgeleide waarde van een bezoeker voor een locatie wordt onderschat als een nabijer substituut bestaat en er niet voor wordt gecontroleerd — zij bezoeken mogelijk vooral omdat het gratis is, niet omdat het uniek waardevol is.
- **Afgeleide voorkeur toepassen op een goed zonder marktecho überhaupt.** Bestaanswaarde, optiewaarde, en erfwaarde duiken niet op in enige transactie en kunnen niet worden teruggewonnen via hedonische of reiskostenmethoden — die lacune hoort bij [betalingsbereidheidswaardering](../stated-preference-valuation/).
- **Gekapitaliseerde (eenmalige) waarde verwarren met een jaarlijkse stroom.** Hedonische huizenprijseffecten zijn meestal eenmalige gekapitaliseerde waarden; ze behandelen als een jaarlijkse batenstroom blaast de beoordeling op.

## Bronnen

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
