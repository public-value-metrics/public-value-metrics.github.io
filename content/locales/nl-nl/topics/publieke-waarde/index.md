# Publieke waarde

Publieke waarde is de waarde die een overheids- of maatschappelijke organisatie gezamenlijk voor burgers creëert — niet alleen de resultaten die zij produceert of het geld dat zij uitgeeft, maar of de samenleving beter af is doordat de organisatie bestaat en handelde zoals zij deed. Mark Moores "strategische driehoek" uit 1995 is de standaardtoets: een publiek initiatief is alleen gerechtvaardigd wanneer het *legitiem is en steun heeft*, *substantieel waardevol* is, en *operationeel uitvoerbaar* is, alle drie tegelijk.

## Waarom het ertoe doet

Waarde in de private sector is relatief eenvoudig te prijzen: omzet minus kosten, beoordeeld door klanten die kunnen weglopen. Publieke waarde heeft geen equivalent marktsignaal. Een gevangenisdienst, een belastingdienst en een kinderbeschermingsteam produceren allemaal zaken die burgers niet eenvoudigweg kunnen weigeren te "kopen", en de "klant" (de belastingbetaler, de dader, het kind) is vaak niet dezelfde persoon als de politieke opdrachtgever die het budget goedkeurt. Moores *Creating Public Value: Strategic Management in Government* (Harvard University Press, 1995) biedt de ontbrekende discipline: een manager moet kunnen aangeven (1) welke publieke waarde hun initiatief creëert, (2) waar hun legitimiteit en financiering om dit te nastreven vandaan komt — een minister, een gemeenteraad, een mandaat, een subsidie — en (3) of hun organisatie het daadwerkelijk kan leveren met de mensen, technologie en processen die voorhanden zijn. Een programma dat slechts op één of twee poten van de driehoek goed scoort, is nog niet gerechtvaardigd, hoe goedbedoeld ook.

Dit doet er praktisch toe omdat de meeste mislukkingen van software in de publieke sector geen technische mislukkingen zijn. Een systeem kan technisch uitstekend en operationeel uitvoerbaar zijn en toch mislukken omdat niemand in de legitimerende omgeving — ministers, toezichthoudende commissies, het publiek — daadwerkelijk wilde wat het optimaliseert. De Universal Credit-digitale dienst en het NHS National Programme for IT worden beide aangehaald in de Britse bestuurskundige literatuur als gevallen waarin de operationele en legitimiteitspoten van de driehoek niet aansloten bij de missiepoot.

## De berekening

Publieke waarde is een raamwerk, geen formule, maar het structureert anderszins vage investeringscases tot drie toetsbare vragen:

```
Toets van de strategische driehoek — ga alleen door als alle
drie standhouden:

1. Legitimiteit en steun: Wie heeft dit geautoriseerd, en
   steunt de autoriserende omgeving (wetgever, minister,
   gemeenteraad, bestuur, publieke opinie) dit nog steeds
   terwijl middelen worden ingezet?

2. Publieke waarde: Welk specifiek, beschrijfbaar goed
   produceert dit voor burgers of de samenleving — veiligheid,
   gezondheid, kansen, vertrouwen, rechtvaardigheid — en voor
   wie?

3. Operationele capaciteit: Kan de organisatie het daadwerkelijk
   leveren met het huidige personeel, technologie, partners en
   wettelijke bevoegdheid — of een geloofwaardig plan om die te
   verwerven?
```

Een zwak initiatief faalt doorgaans op minstens één poot: technisch uitvoerbaar maar zonder mandaat (een datadeelpilot die niemand heeft goedgekeurd); populair maar niet uitvoerbaar (een beloofde digitale dienst zonder technische capaciteit); of geautoriseerd en uitvoerbaar maar waardeloos (een dashboard dat niemand gebruikt).

## Uitgewerkt voorbeeld

**Gemeente**: een gemeentelijk digitaal team stelt een AI-triage-tool voor huurtoeslagaanvragen voor.

- *Legitimiteit*: het gemeentebestuur heeft een digital-first-strategie goedgekeurd, maar de gekozen raadsleden die verantwoordelijk zijn voor sociale zekerheid hebben geautomatiseerde besluitvorming specifiek niet goedgekeurd — een lacune, geen groen licht.
- *Publieke waarde*: snellere verwerking (beweerd voordeel: 10 dagen naar 2 dagen) is alleen echte waarde als aanvragers niet ten onrechte worden afgewezen; de waardebewering moet nauwkeurigheid omvatten, niet alleen snelheid.
- *Operationele capaciteit*: de gemeente heeft één datawetenschapper en geen modelbewakingsproces, dus de beweerde doorlooptijd van 2 dagen is momenteel niet uitvoerbaar bij het opgegeven foutpercentage.

Twee van de drie poten falen. Moores raamwerk zegt: ga niet verder zoals afgebakend — zorg eerst voor expliciete autorisatie voor geautomatiseerde besluitvorming en bouw bewakingscapaciteit op, anders is de "publieke waarde" die in de business case wordt beweerd fictief.

**Rijksoverheid**: de online aangiftedienst van een belastingdienst heeft sterke legitimiteit (wettelijk mandaat) en sterke operationele capaciteit (een bestaand team levert betrouwbaar) maar zwakke publieke waarde als het gebruik laag is omdat de digitaal uitgeslotenen — zie [digitale inclusie](../digitale-inclusie/) — in een kanaal worden geduwd dat zij niet kunnen gebruiken. De driehoek onthult wat een puur leveringsgericht dashboard zou verbergen.

## Verband met softwareontwikkeling

Publieke waarde is het overkoepelende concept waaronder dit hele archief valt: [waarde voor geld](../waarde-voor-geld/) geeft de zuinigheid/efficiëntie/doelmatigheid-toets voor of middelen goed zijn gebruikt; [alternatieve kosten in publieke uitgaven](../alternatieve-kosten-in-publieke-uitgaven/) prijst wat het geld anders had kunnen doen; en [additionaliteit en deadweight](../additionaliteit-en-deadweight/), [verdringing en toeschrijving](../verdringing-en-toeschrijving/), en [contrafeitelijke analyse](../contrafeitelijke-analyse/) toetsen samen of de beweerde waarde echt is in plaats van aangenomen. Voor engineers is de strategische driehoek een nuttige vooranalyse voor elke productbeslissing in de publieke sector:

- Vraag, voordat je een functie afbakent, wie deze heeft geautoriseerd en of die autorisatie nog steeds geldt — een functie gebouwd voor een minister die inmiddels is vertrokken, kan stilletjes haar legitimiteitspoot hebben verloren.
- Behandel "kunnen we het bouwen" en "moeten we het bouwen" als echt afzonderlijke vragen; technische capaciteit beantwoordt alleen de derde poot van de driehoek.
- Productvereistendocumenten voor publieke diensten moeten de publieke-waardebewering expliciet vermelden, niet alleen het gebruikersverhaal, omdat gebruikerswaarde en publieke waarde niet altijd hetzelfde zijn (zie [uitkomsten versus output](../uitkomsten-versus-output/)).

## Valkuilen

- **Operationele capaciteit als voldoende rechtvaardiging behandelen.** "We kunnen het bouwen" beantwoordt slechts één poot van de driehoek; teams met sterke leveringscapaciteit leveren routinematig dingen op die niemand heeft geautoriseerd te willen en die geen beschrijfbaar publiek goed creëren.
- **Legitimiteit met wettigheid verwarren.** Een programma kan wettig zijn en toch de politieke en publieke steun missen die nodig is om een moeilijke uitvoeringsfase te doorstaan; juridische dekking is niet hetzelfde als een mandaat.
- **Aannemen dat publieke waarde is wat de opdrachtgevende afdeling zegt dat het is.** Moores model vereist dat de waardebewering toetsbaar is aan de werkelijke belangen van burgers, niet louter beweerd door de financier — anders stort het raamwerk in tot zelfcertificering.

## Bronnen

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press,
  1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
