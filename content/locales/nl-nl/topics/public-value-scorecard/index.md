# Public value scorecard

De public value scorecard past de balanced scorecard van Robert Kaplan en David Norton uit 1992 aan — gebouwd voor bedrijven die winst optimaliseren over financiële, klant-, interne-proces-, en leer-en-groei-perspectieven — voor organisaties waarvan de bottom line een missie is, geen marge. Het dwingt een publiek lichaam om prestaties over verschillende onherleidbare dimensies gelijktijdig te rapporteren, in plaats van alles samen te persen in één getal dat afwegingen verbergt.

## Waarom het ertoe doet

Het oorspronkelijke argument van Kaplan en Norton, in de Harvard Business Review, was dat een enkele financiële maatstaf een achterblijvende indicator is die je niets vertelt over *waarom* prestaties volgend kwartaal zullen veranderen. In de private sector was de oplossing vier gekoppelde perspectieven. In de overheid levert de "strategische driehoek" van Mark Moore (uit *Creating Public Value*, 1995) de equivalente structuur: een dienst moet gelijktijdig **public value** (de missie-uitkomst) leveren, **legitimiteit en steun** (politieke en publieke rugdekking) behouden, en **operationeel haalbaar** zijn (leverbaar met de middelen en capaciteit die daadwerkelijk beschikbaar zijn). Het boek *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies* (2003) van Paul Niven is het handboek van de beoefenaar voor het vertalen van de vier vakjes van Kaplan en Norton naar deze driehoek — typisch door "financieel" te herbenoemen tot "rentmeesterschap van middelen", "missie" boven te plaatsen in plaats van "aandeelhouderswaarde" onderaan, en klant- en belanghebbendeperspectieven als gelijkwaardig te behandelen in plaats van ondergeschikt aan winst. De reden dat dit ertoe doet voor een leveringsteam, is dat een publieke digitale dienst die alleen wordt beoordeeld op een financiële of efficiëntiemaatstaf (kosten per transactie, bijvoorbeeld) systematisch zal onderinvesteren in de legitimiteits- en uitkomstdimensies die de financiële maatstaf niet kan zien.

## De berekening

De public value scorecard is een raamwerk, geen formule, maar zijn structuur is vast en het is de moeite waard om precies te reproduceren:

```
Perspectief            Vraag publieke sector              Voorbeeldindicator
--------------------------------------------------------------------------------
Missie / uitkomsten     Bereiken we de public value die    Populatie-uitkomstmaatstaf
                         we bestaan om te creëren?          (zie uitkomsten-versus-output)
Rentmeesterschap van     Gebruiken we publiek geld          Kosten per uitkomst,
  middelen               efficiënt en binnen geautori-      budgetafwijking
                         seerde grenzen?
Klant / gebruiker        Kunnen gebruikers en burgers de    Voltooiingspercentage,
                         dienst benaderen en er baat        tevredenheid
                         bij hebben?
Legitimiteit / steun     Steunen politieke opdracht-        Vertrouwensmaatstaven,
                         gevers, toezichthoudende           auditbevindingen, gehonoreerde
                         instanties, en het publiek         klachten
                         ons nog?
Interne processen /      Hebben we de capaciteit en het     Personeelsverloop, cyclustijd,
  leren                  proces om te blijven verbeteren?   achterstandsleeftijd

Een verdedigbare scorecard rapporteert 3-5 indicatoren per perspectief,
gekozen zodat geen enkel perspectief kan worden gemanipuleerd zonder
dat de schade in een ander perspectief zichtbaar wordt.
```

## Uitgewerkt voorbeeld

**Afdeling volwassenenzorg van een gemeente**: een scorecard voor een reablement-dienst (kortetermijnondersteuning om mensen te helpen onafhankelijkheid te herwinnen na een ziekenhuisverblijf) rapporteert:

```
Missie:          68% van de gebruikers heeft geen doorlopende zorg
                 meer nodig na 6 weken (doel 65%)
Rentmeesterschap: kosten per voltooide reablement-episode = £1.850
                 (budgetaanname £2.000)
Klant:           gebruikerstevredenheid 82%, gemiddelde wachttijd
                 voor start dienst 4,1 dagen
Legitimiteit:    3 gehonoreerde klachten per 1.000 episodes;
                 raad voor bescherming volwassenen beoordeelt
                 dienst als "goed"
Proces:          personeelsvacatiegraad 14%, gemiddelde caseload
                 23 (veilige caseload-plafond: 25)
```

Geïsoleerd gelezen, zien de missie- en rentmeesterschapscijfers uit als een eenvoudig succesverhaal: onder budget en boven het uitkomstdoel. Samen met de procesregel gelezen, toont de vacatiegraad van 14% tegen een caseload-plafond van 25 dat de goede uitkomst wordt gekocht door dicht bij onveilige personeelsniveaus te opereren — een waarschuwing die het missiecijfer alleen nooit zou tonen, en precies het faalpatroon dat een enkel-perspectief-KPI (zie [kerncijfers publieke sector](../public-sector-kpis/)) uitnodigt.

## Verband met softwareontwikkeling

Voor een team dat een intern of publiek-gericht dashboard bouwt, is de scorecard een direct argument tegen een enkele "gezondheidsscore"-widget: bouw één paneel per perspectief, en weersta productdruk om ze samen te vatten tot een stoplicht, omdat de samenvattingsstap precies is waar de afwegingsinformatie wordt vernietigd. Het past ook netjes op productteam-OKR-structuren: een missie-OKR zonder gekoppelde rentmeesterschaps- of proces-OKR reproduceert het enkele-maatstaf-faalpatroon waartegen Kaplan en Norton schreven in 1992. Zie [public value](../public-value/) voor de onderliggende theorie van Moore over wat het "missie"-vakje daadwerkelijk zou moeten bevatten, en [vertrouwens- en legitimiteitsmaatstaven](../trust-and-legitimacy-metrics/) voor het invullen van het legitimiteitsperspectief met echte, verantwoorde indicatoren in plaats van een proxy die niemand kan verdedigen.

## Valkuilen

- **De scorecard samenpersen tot één score**: het gemiddelde nemen van vier perspectieven naar een enkel getal herintroduceert precies het probleem — een slechte legitimiteitsscore verhuld door een goede rentmeesterschapsscore — dat de scorecard bestaat om te voorkomen.
- **Het private-sector "financiële" perspectief ongewijzigd kopiëren**: het rentmeesterschapsperspectief van een publiek lichaam gaat over binnen geautoriseerde, vaak afgeschermde, budgetten blijven, niet over het maximaliseren van omzet — de herbenoeming van Niven is niet cosmetisch.
- **Indicatoren kiezen die het team dat de scorecard bezit eenzijdig kan bewegen**: een legitimiteitsindicator afkomstig van hetzelfde team dat het beoordeelt (zelfgerapporteerde klachtenafhandeling, bijvoorbeeld) is geen onafhankelijk bewijs.
- **De scorecard eenmaal bouwen en gewichten of indicatoren nooit herzien**: Kaplan en Norton bedoelden een jaarlijkse strategieherziening; een scorecard bevroren voor jaren drift weg van de missie die het bedoeld was te volgen.

## Bronnen

- Robert S. Kaplan en David P. Norton, "The Balanced Scorecard: Measures That Drive Performance,"
  *Harvard Business Review*, januari–februari 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
