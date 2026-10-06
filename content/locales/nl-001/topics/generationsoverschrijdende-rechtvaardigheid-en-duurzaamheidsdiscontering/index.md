# Generationsoverschrijdende rechtvaardigheid en duurzaamheidsdiscontering

Het disconteren van toekomstige kosten en baten terug naar contante waarde is standaardpraktijk in publieke beoordeling — zie de [maatschappelijke discontovoet](../maatschappelijke-discontovoet/) — maar elke positieve discontovoet, samengesteld over decennia of eeuwen, krimpt de verre toekomst richting nul in huidige termen. Voor besluiten met gevolgen een eeuw of meer verwijderd — klimaatverandering, kernafval, biodiversiteitsverlies, pensioenduurzaamheid — wordt dat wiskundige feit een ethisch feit: standaarddiscontering kan catastrofale schade aan toekomstige generaties laten lijken, in contante-waarde-termen, nauwelijks de moeite waard om te vermijden.

## Waarom het ertoe doet

De Ramsey-vergelijking, afgeleid door Frank Ramsey in 1928, ontleedt de discontovoet in twee componenten: pure tijdvoorkeur (δ, hoeveel we simpelweg nu verkiezen boven later, onafhankelijk van rijkdom) en het rijkdomsgroei-effect (η×g, hoeveel we disconteren omdat toekomstige generaties verwacht worden rijker te zijn, zodat een extra pond minder voor hen betekent). De standaard langetermijndiscontovoet van het Britse Green Book is gebouwd op deze vergelijking en volgt een *dalend* schema in plaats van een vlak tarief — een ontwerp geworteld in het werk van Martin Weitzman over "gamma-discontering", dat toont dat wanneer de toekomstige discontovoet zelf onzeker is, het zekerheids-equivalente tarief dat je zou moeten toepassen wiskundig daalt in de tijd, omdat laag-tarief-scenario's gaan domineren hoe verder je kijkt. De Stern Review on the Economics of Climate Change (2006), geleid door Sir Nicholas Stern, nam het ethische debat verder: Stern beargumenteerde dat pure tijdvoorkeur bijna nul zou moeten worden gesteld (hij gebruikte δ ≈ 0,1%, wat alleen de kleine kans op beschavingsbeëindigende catastrofe weerspiegelt, geen echte voorkeur voor het heden boven de toekomst), wat een veel lager effectief discontotarief produceerde dan conventionele Green Book-praktijk en, overeenkomstig, een veel grotere heden-zaak voor klimaatactie. Critici (met name William Nordhaus) beargumenteerden dat het bijna-nul-tarief van Stern ethisch verdedigbaar was maar inconsistent met daadwerkelijk geobserveerd spaar- en investeringsgedrag. Het meningsverschil is geen technische voetnoot — het is de enkele grootste reden dat twee even rigoureuze economen tot wild verschillende conclusies kunnen komen over hoeveel de huidige generatie zou moeten opofferen voor de toekomst, en het is de reden dat software die langetermijnhorizon-publieke-investeringsbeoordeling ondersteunt zijn disconteringsaannames moet blootleggen in plaats van ze te verstoppen in een spreadsheet-standaard.

## De berekening

```
Ramsey-vergelijking:   r = δ + η × g

  r = maatschappelijke discontovoet
  δ = pure tijdvoorkeur (ongeduldpercentage, onafhankelijk van
      rijkdom)
  η = elasticiteit van marginaal nut van consumptie (afnemende
      waarde van extra consumptie naarmate mensen rijker
      worden)
  g = verwacht groeipercentage van consumptie per hoofd

Green-Book-dalend-langetermijnschema (ongeveer, huidige
gepubliceerde banden):
  Jaren 0-30:    3,5%
  Jaren 31-75:   3,0%
  Jaren 76-125:  2,5%
  Jaren 126-200: 2,0%
  Jaren 201-300: 1,5%
  Jaren 301+:    1,0%

Stern Review-parameters: δ ≈ 0,1%, η = 1, g ≈ 1,3% → r ≈ 1,4%
```

## Uitgewerkt voorbeeld

**Waarde vandaag van £1 vermeden schade in 100 jaar**, onder drie discontoregimes:

```
Vlak Green-Book-kortetermijntarief (3,5%, constant gehouden
voor 100 jaar):
  CW = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ £0,032   (3,2 pence)

Green-Book-dalend schema (3,5% voor jr 1-30, 3,0% voor jr
31-75, 2,5% voor jr 76-100):
  factor(1-30)  = 1,035^30  ≈ 2,807
  factor(31-75) = 1,03^45   ≈ 3,782
  factor(76-100)= 1,025^25  ≈ 1,854
  totale factor ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  CW = 1 / 19,68 ≈ £0,051   (5,1 pence)

Stern-achtige bijna-nul pure tijdvoorkeur (r ≈ 1,4% vlak):
  CW = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ £0,250   (25,0 pence)
```

Dezelfde £1 schade vermeden een eeuw vanaf nu is vandaag 3,2p, 5,1p, of 25p waard puur afhankelijk van welke discontoconventie wordt gebruikt — een bijna-achtvoudig bereik dat stuurt of een klimaatmitigatieproject met hoge vooraf-kosten en uitbetaling een eeuw verwijderd überhaupt een positieve-NPV-lat haalt. Dit is het mechanisme achter de centrale waarschuwing van het hoofdstuk: bij elk betekenisvol positief vlak tarief wordt voldoende verre toekomstige schade rekenkundig uitgewist uit de beoordeling, ongeacht zijn echte ernst.

## Verband met softwareontwikkeling

- Elk langetermijnhorizon-beoordelings- of businesscase-hulpmiddel (infrastructuur, klimaataanpassing, pensioenmodellering) zou het *dalende* schema van het Green Book moeten implementeren, geen enkel vlak tarief — een vlak-tarief-standaard bedt stilzwijgend een veel sterkere anti-toekomstbias in dan huidige Britse overheidsrichtlijn specificeert.
- Discontovoet en horizon zouden altijd moeten worden blootgelegd als zichtbare, controleerbare parameters in beoordelingssoftware, met de gevoeligheid van de berekening ervoor expliciet getoond (zoals in het uitgewerkte voorbeeld hierboven) — het tarief verstoppen in een configuratiebestand nodigt precies uit tot de "verborgen ethische keuze" waartegen het Stern-Nordhaus-debat waarschuwt; dit koppelt met het transparantiepunt gemaakt in [natuurlijk-kapitaalboekhouding](../natuurlijk-kapitaalboekhouding/) en ligt ten grondslag aan het [maatschappelijke-discontovoet](../maatschappelijke-discontovoet/)-onderwerp in het algemeen.
- Waar de baten van een programma expliciet generationsoverschrijdend zijn (overstromingsverdediging, natuurlijk-kapitaalherstel, langetermijn-digitale-infrastructuur), zou een [sociale-kosten-batenanalyse](../maatschappelijke-kosten-batenanalyse/) resultaten moeten rapporteren onder ten minste twee discontoaannames (Green-Book-standaard en een laag-tarief-gevoeligheidsgeval) in plaats van een enkele puntschatting, zodat besluitvormers zien hoe discontovoetkeuze alleen het antwoord beweegt.

## Valkuilen

- **Een enkele gedisconteerde NPV presenteren zonder een gevoeligheidsbereik** — gegeven hoeveel de discontovoet alleen het antwoord verandert voor langetermijnhorizon-projecten, overdrijft een enkel-tarief-NPV materieel de precisie; rapporteer altijd een bereik dat ten minste de Green-Book-standaard en een laag-tarief-scenario omspant.
- **Het kortetermijn-vlak-tarief (3,5%) toepassen op een multi-eeuw-beoordeling** — de eigen richtlijn van het Green Book specificeert het dalende schema precies omdat het vlakke tarief werd beoordeeld als ongeschikt na ongeveer 30 jaar; het toch gebruiken onderschat langetermijnkosten.
- **δ (pure tijdvoorkeur) behandelen als een puur technische parameter** — de bijna-nul-waarde van Stern en de hogere impliciete waarde van het Green Book zijn beide alleen verdedigbaar als ethische posities over hoeveel gewicht het heden aan de toekomst verschuldigd is, geen empirisch "correcte" of "incorrecte" cijfers; software zou de aanname zichtbaar moeten maken in plaats van één cijfer objectief juist te presenteren.

## Bronnen

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
