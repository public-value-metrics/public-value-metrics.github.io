# Avslöjad preferensvärdering

Metoder för avslöjad preferens härleder värdet av en icke-marknadsvara från observerbart beteende på en relaterad marknad, snarare än att fråga människor direkt. Hedonisk prissättning och resekostnadsmetoden är de två arbetshästtekniker: båda utgår från en verklig transaktion och räknar ut ett implicit pris för det som aldrig direkt sålts.

## Varför det spelar roll

Där metoder för [betalningsvilja](../stated-preference-valuation/) ställer en hypotetisk fråga observerar metoder för avslöjad preferens vad människor faktiskt betalade för, vilket Green Book behandlar som generellt mer trovärdig bevisning, allt annat lika, eftersom det inte är föremål för hypotetisk bias — respondenter i en hedonisk husprisstudie betalade genuint den premie eller rabatt som mäts (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Annex 2). Hedonisk prissättning dekomponerar ett marknadspris — typiskt huspriser — till implicita priser för varje attribut hos varan, vilket låter analytiker isolera, till exempel, den prispremie hushåll faktiskt betalar för att bo någonstans tystare eller med bättre luftkvalitet, statistiskt kontrollerat för varje annat attribut som också påverkar huspriset (storlek, läge, skolupptagningsområde). Resekostnadsmetoden gör motsvarande för rekreationsplatser utan inträdesavgift: tiden och pengarna människor spenderar på att resa till en plats avslöjar en nedre gräns för vad platsen är värd för dem, eftersom ingen ådrar sig en kostnad som överstiger vad besöket är värt för dem.

Båda metoderna delar en strukturell begränsning: de kan endast värdera det som är inbäddat i en befintlig marknadstransaktion. Buller nära en landningsbana syns i huspriser eftersom människor som bryr sig om buller sorterar sig i tystare bostäder; existensvärdet av en art som ingen besöker eller bor nära syns inte i någon transaktion alls, vilket är precis den lucka metoder för [betalningsvilja](../stated-preference-valuation/) existerar för att fylla.

## Beräkningen

```
Hedonisk prissättning:
  Huspris = f（strukturella attribut, lägesattribut, det
            intressanta miljöattributet, ...）
  Uppskattas via regression; koefficienten på miljöattributet
  （med allt annat konstant） är dess implicita pris.

  Implicit pris för attribut X = ∂（Huspris） / ∂X

Resekostnadsmetoden:
  Besöksfrekvens （besök per capita från zon i） = f（resekostnad
                    från zon i, substitutplatser,
                    socioekonomiska kontroller）
  Uppskatta en efterfrågekurva för besök som en funktion av
  resekostnad.
  Konsumentöverskott = ytan under den uppskattade
                       efterfrågekurvan
                     = platsens värde för besökare
```

Båda metoderna kräver en statistiskt sund kontrollmängd — att utelämna ett störande attribut (hedonisk) eller en närliggande substitutplats (resekostnad) snedvrider det implicita priset i en riktning som inte alltid är uppenbar i förväg, vilket är varför Green Book Annex 2 kräver att regressionsspecifikationen och kontrollerna rapporteras, inte bara rubrikkoefficienten.

## Genomräknat exempel

**Statlig myndighet**: Green Books egen skuggprismetodik för koldioxid bygger delvis på hedonisk evidens, men ett enklare illustrativt fall är flygplansbuller. En hedonisk studie som regresserar husförsäljningspriser i ett flygstråksområde mot avståndsviktad bullerexponering, kontrollerat för storlek, ålder och skolupptagningsområde, finner att varje 1 decibels ökning i genomsnittlig bullerexponering är associerad med en minskning på 0,5% i huspris. För ett typiskt hus på 280 000 £ i det berörda området:

```
Implicit pris per decibel = 280 000£ × 0,5% = 1 400£ per hushåll
Hushåll berörda av en ökning på 3dB från en ny landningsbana
  = 18 000
Aggregerad implicit kostnad av bullerökningen
  = 1 400£ × 3 × 18 000 = 75,6m£
```

Detta är en engångskapitaliserad kostnad (inbäddad i huspris), som bedömningen måste vara noga med att inte dubbelräkna mot en separat uppskattad årlig kostnadsström för bullerirritation.

**Ideell organisation**: en miljöorganisation använder resekostnadsmetoden för att värdera ett gratis naturreservat. Enkätdata om besökares postnummer ger en genomsnittlig resekostnad tur och retur (tid värderad till Green Books rekommenderade värde för icke-arbetstid, plus bränsle) på 14 £ per besök, med 40 000 besök per år. Den uppskattade efterfrågekurvan — besöksfrekvens som sjunker när resekostnaden från en zon stiger — antyder ett konsumentöverskott per besök, utöver de 14 £ som faktiskt spenderades, på ungefär 9 £.

```
Totalt årligt värde = 40 000 besök × (14£ spenderat + 9£
                     konsumentöverskott)
                     = 40 000 × 23£ ≈ 920 000£/år
```

Detta överskuggar reservatets nollintäkter från inträdesavgift och ger organisationens styrelse en försvarbar siffra för platsens rekreationsvärde när argument förs till finansiärer.

## Koppling till mjukvaruutveckling

Avslöjat preferenstänkande dyker upp i offentliga sektorns produktanalys oftare än praktiker inser: användningsdata från en gratis statlig digital tjänst är i sig avslöjad preferensbevis på värde (frekvens, sessionslängd och — mest talande — upprepad kontra engångsanvändningsmönster kan analyseras på samma sätt som en resekostnadsmodell behandlar besöksfrekvens mot avstånd). Där en tjänst har genuina substitut (en pappersbaserad kanal, en telefonlinje) kan den "kostnad" medborgare ådrar sig för att istället använda den digitala kanalen (tid, data, en enhet) uppskattas och jämföras med användning, vilket direkt speglar resekostnadslogiken. Se [digital tjänstestandard](../digital-service-standard/) och [värdet av öppna data](../open-data-value/), som möter precis detta värderingsproblem för en vara utan direkt marknadspris.

## Fallgropar

- **Utelämnad variabelbias i hedoniska modeller.** Att utelämna ett korrelerat attribut (skolkvalitet som korrelerar med både huspris och det intressanta miljöattributet) snedvrider den implicita prisuppskattningen; specifikationen behöver rapporteras och granskas, inte bara resultatet.
- **Att ignorera substitutplatser i resekostnadsstudier.** En besökares avslöjade värde för en plats underskattas om ett närmare substitut existerar och inte kontrolleras för — de kanske besöker huvudsakligen eftersom det är gratis, inte för att det är unikt värdefullt.
- **Att tillämpa avslöjad preferens på en vara utan marknadseko alls.** Existensvärde, optionsvärde och arvsvärde syns inte i någon transaktion och kan inte återvinnas genom hedoniska eller resekostnadsmetoder — den luckan hör till [betalningsviljevärdering](../stated-preference-valuation/).
- **Att förväxla kapitaliserat (engångs-) värde med ett årligt flöde.** Hedoniska husprisseffekter är typiskt engångskapitaliserade värden; att behandla dem som en årlig nyttoström blåser upp bedömningen.

## Källor

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
