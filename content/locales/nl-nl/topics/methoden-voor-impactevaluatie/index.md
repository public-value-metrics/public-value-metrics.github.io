# Methoden voor impactevaluatie

Methoden voor impactevaluatie zijn de statistische en experimentele ontwerpen gebruikt om te schatten wat een beleid of programma daadwerkelijk heeft veroorzaakt, onderscheiden van wat toch zou zijn gebeurd — gerandomiseerde controleproeven (RCT's), difference-in-differences, propensity score matching, en regressiediscontinuïteitsontwerp zijn de vier meest gebruikte in Brits overheidsbeleid. Ze bestaan omdat de meeste overheidsinterventies niet in een laboratorium kunnen worden getest: je kunt niet randomiseren welke stad een nieuwe buslijn krijgt op de manier waarop je kunt randomiseren welke patiënt een medicijn krijgt, dus deze methoden lenen dezelfde causale logica zonder altijd willekeurige toewijzing te vereisen.

## Waarom het ertoe doet

Het Magenta Book van HM Treasury, Bijlage A over quasi-experimentele methoden, is de canonieke richtlijn van de Britse overheid voor het kiezen tussen deze ontwerpen, en instanties zoals de Education Endowment Foundation en het What Works Centre for Local Economic Growth institutionaliseren een bewijshiërarchie erop gebouwd — RCT's waar randomisatie haalbaar en ethisch is, quasi-experimentele ontwerpen waar dat niet het geval is. De keuze van methode is geen technische bijzaak: het bepaalt of een evaluatie "heeft het programma dit veroorzaakt?" kan beantwoorden of alleen "gebeurde dit nadat het programma begon?", wat dezelfde vraag is die [contrafeitelijke analyse](../contrafeitelijke-analyse/) is gebouwd om beoefenaars te dwingen te stellen voordat enige evaluatie wordt aangevraagd.

## De berekening

```
RCT:
  Impact = gemiddelde(uitkomst | behandelgroep) − gemiddelde(uitkomst
          | controlegroep)
  (geldig omdat toewijzing aan behandeling willekeurig is)

Difference-in-differences (DiD):
  Impact = [uitkomst_na(behandeld) − uitkomst_voor(behandeld)]
         − [uitkomst_na(controle) − uitkomst_voor(controle)]
  (vereist een "parallelle trends"-aanname: behandeld en controle
   zouden samen zijn bewogen zonder de interventie)

Propensity score matching (PSM):
 1. Schat P(behandeling = 1 | covariaten X) voor elke eenheid →
    propensityscore
 2. Koppel behandelde eenheden aan onbehandelde eenheden met
    soortgelijke propensityscores
 3. Impact = gemiddelde(uitkomst | behandeld) − gemiddelde(uitkomst
    | gekoppelde controle)

Regressiediscontinuïteitsontwerp (RDD):
  Impact = sprong in uitkomst waargenomen bij de subsidiabiliteits-
           drempel, vergelijking van eenheden net boven versus net
           onder de afkapwaarde
```

## Uitgewerkt voorbeeld

**Gemeente (difference-in-differences voor een programma voor problematische gezinnen)**: de uitkomst is schoolaanwezigheid. Het behandelde gebied gaat van 84% naar 89% aanwezigheid (+5 procentpunten) over de programmaperiode; een vergelijkbaar maar onbehandeld gebied gaat van 85% naar 87% (+2 procentpunten) over dezelfde periode. DiD-impactschatting: 5 − 2 = +3 procentpunten toeschrijfbaar aan het programma. Toegepast op een cohort van 2.000 leerlingen in het behandelde gebied, is dit consistent met ongeveer 60 extra leerlingen (3% × 2.000) die de hogere aanwezigheidscategorie bereiken, een extrapolatie die moet worden gerapporteerd met zijn parallelle-trends-voorbehoud, niet als een precieze hoofdtelling.

**Goed doel (propensity score matching voor een werkgelegenheidsgoed doel)**: 300 programmadeelnemers worden gekoppeld aan 300 individuen uit een grotere administratieve dataset met behulp van propensityscores opgebouwd uit leeftijd, eerdere arbeidsgeschiedenis, en kwalificatieniveau. Werkgelegenheidspercentage na twaalf maanden: gekoppelde behandelgroep 46%, gekoppelde vergelijkingsgroep 33%. PSM-impactschatting: 46% − 33% = +13 procentpunten toeschrijfbaar aan het programma, voorwaardelijk aan geen niet-geobserveerde confounder (zoals motivatie) die zowel deelname als uitkomst aanstuurt.

## Verband met softwareontwikkeling

Of een van deze ontwerpen later haalbaar is, hangt sterk af van vroeg genomen gegevenstechniekbeslissingen. RDD heeft een nauwkeurig geregistreerde lopende variabele nodig en een werkelijk schone subsidiabiliteitsafkapwaarde; DiD heeft vergelijkbare panelgegevens in de tijd nodig voor zowel behandelde als vergelijkingsgebieden, wat consistente koppelingen tussen systemen en jaren betekent; PSM heeft rijke basislijn-covariaatgegevens nodig vastgelegd voor behandeling, niet achteraf gereconstrueerd. Een datamodel ontworpen samen met een [theorie van verandering](../theorie-van-verandering/) en [logisch model](../logisch-model/) vanaf het begin — dat basislijncovariaten, data, en vergelijkingsgroep-subsidiabele records vastlegt — is wat een rigoureuze impactevaluatie later mogelijk maakt, in plaats van een dure achteraf-improvisatie. Zie [impactevaluatie versus procesevaluatie](../impactevaluatie-versus-procesevaluatie/) voor de complementaire vraag die deze methoden niet op zichzelf beantwoorden.

## Valkuilen

- **Een RCT afdwingen waar onhaalbaar of onethisch**, of omgekeerd nooit een quasi-experimenteel ontwerp overwegen wanneer een echte kans daarvoor — een beleidsafkapwaarde, een gefaseerde uitrol — beschikbaar was en ongebruikt bleef.
- **De parallelle-trends-aanname in DiD negeren.** Als het vergelijkingsgebied al afweek van het behandelde gebied vóór de interventie, is de tweepuntsvergelijking besmet; controleer voortrends, niet alleen voor/na.
- **Alleen matchen op geobserveerde covariaten in PSM.** Niet-geobserveerde selectie, zoals motivatie van deelnemers, kan de schatting vertekenen, zelfs wanneer geobserveerde covariaten goed in balans zijn.
- **Manipulatie van de lopende variabele in RDD.** Als mensen hun score kunnen beïnvloeden om net binnen een subsidiabiliteitsdrempel te vallen, isoleert de discontinuïteit niet langer een causaal effect.

## Bronnen

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
