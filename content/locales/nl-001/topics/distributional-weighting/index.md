# Distributieve weging

Distributieve weging past de monetaire waarde van een kost of baat aan naargelang wie deze ontvangt, volgens het principe dat een extra pond meer waard is voor een arm huishouden dan voor een rijk huishouden. Het Green Book van HM Treasury biedt een expliciete methode om deze weging toe te passen, gebaseerd op het dalende marginale nut van inkomen, zodat beoordelingen niet stilzwijgend een pond gewonnen door het rijkste deciel gelijkstellen aan een pond gewonnen door het armste.

## Waarom het ertoe doet

Standaard kosten-batenanalyse telt ponden op zonder te vragen van wie die ponden zijn, wat impliciet aanneemt dat een pond voor iedereen dezelfde waarde heeft — een aanname die economen al lang als onwaar kennen. Een huishouden dat £15.000/jaar verdient, ervaart een winst van £1.000 heel anders dan een huishouden dat £150.000/jaar verdient, omdat het marginale nut van inkomen daalt naarmate het inkomen stijgt. Zonder weging bevoordeelt standaardbeoordeling systematisch interventies die rijkere, al beter bedeelde groepen ten goede komen, omdat hun hogere bestedingskracht de monetaire waardering van baten die hen bereikt opblaast (een parkverbetering nabij duur onroerend goed "toont" een grotere onroerendgoedwaardebaat dan dezelfde verbetering nabij goedkoop onroerend goed, puur omdat de prijzen hoger zijn, niet omdat de welzijnswinst groter is).

De aanvullende richtlijn van het Green Book over distributieanalyse, versterkt na de herziening van de Treasury in 2020 die reageerde op kritiek dat de beoordelingsmethodiek systematisch Londen en het zuidoosten bevoordeelde, stelt een formele wegingsaanpak vast gebaseerd op een aangenomen elasticiteit van het marginale nut van inkomen van ongeveer 1,3 — wat betekent dat een verdubbeling van het inkomen de marginale waarde van een extra pond ongeveer halveert (specifiek, 2^-1,3 ≈ 0,41 maal). Dit is geen afrondingscorrectie: het toepassen ervan kan veranderen welk van twee concurrerende programma's de hogere netto contante waarde vertoont, in het bijzonder bij het vergelijken van een interventie geconcentreerd in een achtergesteld gebied met een interventie verspreid over de algemene bevolking.

## De berekening

De distributieve weging van het Green Book voor een pond baat die toevalt aan een huishouden op inkomensniveau y, ten opzichte van een pond op het nationale gemiddelde inkomensniveau ȳ:

```
Weging(y) = (ȳ / y)^e

waarbij:
  y  = huishoudinkomen （of inkomen van de betrokken groep）
  ȳ  = gemiddeld （referentie） huishoudinkomen
  e  = elasticiteit van het marginale nut van inkomen
       （Green Book: ongeveer 1,3）
```

Wegingen toepassen op netto baten:

```
Gewogen baat = Σ ［ongewogen baat voor groep i × Weging(y_i)］
```

Een groep die de helft van het nationale gemiddelde verdient (y = 0,5ȳ) krijgt een weging van (1/0,5)^1,3 = 2^1,3 ≈ 2,46 — elke pond baat voor die groep telt als ongeveer 2,46 maal een pond voor een huishouden met gemiddeld inkomen.

## Uitgewerkt voorbeeld

**Twee concurrerende lokale programma's**, elk met een ongewogen netto baat van £2 miljoen/jaar, die concurreren om hetzelfde regionale groeifonds:

- *Programma A*: een bedrijfsondersteuningsregeling in een welvarende stad, gemiddeld huishoudinkomen £45.000 (ongeveer 1,3× het aangenomen nationale gemiddelde van £35.000).
- *Programma B*: een vaardighedenprogramma in een achtergesteld district, gemiddeld huishoudinkomen £18.000 (ongeveer 0,51× het nationale gemiddelde).

```
Weging(A) = (35.000 / 45.000)^1,3 = (0,778)^1,3 ≈ 0,72
Weging(B) = (35.000 / 18.000)^1,3 = (1,944)^1,3 ≈ 2,53

Gewogen baat A = £2.000.000 × 0,72 = £1,44 miljoen
Gewogen baat B = £2.000.000 × 2,53 = £5,06 miljoen
```

Ongewogen zijn de twee programma's gelijk. Gewogen voor distributie-effect is de baat van Programma B meer dan drie keer zo groot — een resultaat dat de financieringsaanbeveling omkeert en het expliciete doel van het Green Book weerspiegelt om de weging te tonen, niet alleen de ongewogen baten-kostenverhouding.

**Toewijzing van subsidies aan goede doelen**: een financier die een subsidie van £500.000 die 1.000 huishoudens met een laag inkomen bereikt (weging ≈ 2,0, gewogen waarde gelijk aan £1 miljoen) vergelijkt met dezelfde £500.000 die 1.000 huishoudens met een gemiddeld inkomen bereikt (weging ≈ 1,0, gewogen waarde gelijk aan £500.000), moet de distributieve zaak expliciet in zijn bestuursnota tonen, niet laten afleiden.

## Verband met softwareontwikkeling

Distributieve weging komt zelden direct voor in maatstaven voor softwarelevering, maar moet bepalen hoe technische en data-teams meting en gerichtheid ontwerpen:

- Bij het bouwen van een impactdashboard of batencalculator, toon het inkomens- of achterstandsprofiel van wie wordt beïnvloed, niet alleen een geaggregeerd batentotaal — geaggregeerde cijfers zonder distributieve uitsplitsing verbergen precies de omkering hierboven getoond.
- Koppel gerichtheidslogica in dienstontwerp aan dezelfde achterstandsgegevens die het Green Book gebruikt — zie [index van meervoudige achterstand](../index-of-multiple-deprivation/) — zodat het bereik van een digitale dienst kan worden beoordeeld op rechtvaardigheid, niet alleen op efficiëntie (het omstreden vierde E in [waarde voor geld](../value-for-money/)).
- Wanneer een algoritme een schaarse middel toewijst (afsprakenmomenten, casemanager-tijd, een subsidie), zal een ongewogen doelfunctie "maximaliseer totale baat" per constructie dezelfde vertekening reproduceren die de weging van het Green Book beoogt te corrigeren — signaleer dit expliciet aan beleidseigenaren voordat wordt geoptimaliseerd.

## Valkuilen

- **Distributieve wegingen inconsistent toepassen binnen een portefeuille.** De baten van het ene programma wegen maar niet die van zijn vergelijkingsobject, levert een vertekende, geen rechtvaardigere, vergelijking op; het Green Book vereist gelijke behandeling.
- **Onroerend goed- of marktwaarden als proxy voor welzijn gebruiken zonder aanpassing.** Marktprijzen zijn zelf vertekend door bestaande inkomensongelijkheid, wat precies is waarvoor distributieve weging beoogt te corrigeren — het gebruik van ongecorrigeerde marktwaarden kan de vertekening dubbel tellen.
- **Variatie binnen groepen negeren.** Weging op basis van het gebiedsgemiddelde inkomen (bijv. een deciel van de index van meervoudige achterstand) kan individuen die niet overeenkomen met het gemiddelde van hun gebied verkeerd vertegenwoordigen; gebruik de meest fijnmazige inkomensgegevens die redelijkerwijs beschikbaar zijn.
- **De elasticiteit van 1,3 als universele constante behandelen.** Het Green Book zelf merkt op dat dit een schatting is met een plausibel bereik; voer gevoeligheidstests uit voor belangrijke besluiten tegen alternatieve elasticiteiten in plaats van 1,3 als exact te behandelen.

## Bronnen

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
