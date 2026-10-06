# Contrafeitelijke analyse

Een contrafeitelijke situatie is een schatting van wat zou zijn gebeurd bij afwezigheid van een interventie. Zonder één kan een waargenomen verandering na de lancering van een programma niet worden onderscheiden van een verandering die toch zou hebben plaatsgevonden — geen contrafeitelijke situatie, geen bewijs van effect, hoe overtuigend de voor-en-na-cijfers er ook uitzien. Het Magenta Book van HM Treasury behandelt het construeren van een geloofwaardige contrafeitelijke situatie als de centrale methodologische taak van impactevaluatie, belangrijker dan elke andere afzonderlijke ontwerpkeuze.

## Waarom het ertoe doet

"De criminaliteit daalde met 15% in het jaar na de invoering van het programma" is geen bewijs dat het programma werkte, tenzij je weet wat er zonder zou zijn gebeurd met de criminaliteit — de criminaliteit had toch met 20% kunnen dalen door niet-verwante economische of demografische trends, wat betekent dat het programma de zaken relatief tot de contrafeitelijke situatie feitelijk verergerde, ondanks dat het ruwe cijfer verbeterde. Dit is de meest voorkomende analytische fout in impactbeweringen van de publieke en maatschappelijke sector: een voor/na-vergelijking aanzien voor bewijs van causaliteit. Het Magenta Book is expliciet dat impactevaluatie bestaat om een contrafeitelijke vraag te beantwoorden — "welk verschil heeft deze interventie gemaakt?" — en dat het beantwoorden ervan vereist dat men de wereld die niet plaatsvond schat, niet slechts beschrijft.

Verschillende methoden construeren de contrafeitelijke situatie met verschillende graden van vertrouwen, en overheidsevaluatierichtlijnen rangschikken ze dienovereenkomstig. Gerandomiseerde gecontroleerde studies (RCT's), waarbij individuen of gebieden willekeurig worden toegewezen om een interventie te ontvangen of niet, produceren de sterkste contrafeitelijke situatie omdat randomisatie ervoor zorgt dat de behandel- en controlegroep gemiddeld alleen verschillen doordat zij de interventie ontvingen. Het Cabinet Office en het What Works Network bevorderen RCT's binnen het Britse overheidsbeleid sinds het rapport "Test, Learn, Adapt" van het Behavioural Insights Team uit 2012, precies omdat zwakkere ontwerpen kwetsbaar zijn voor verstorende factoren — het waargenomen verschil kan weerspiegelen wie ervoor koos deel te nemen, niet het effect van het programma. Waar randomisatie onpraktisch of onethisch is (zoals vaak het geval is voor programma's met een wettelijk recht, of voor beleidswijzigingen voor de gehele bevolking), stelt het Magenta Book een expliciete hiërarchie van zwakkere maar nog steeds nuttige alternatieven vast: gematchte vergelijkingsgroepen, differences-in-differences-ontwerpen, regressiediscontinuïteit rond geschiktheidsdrempels, en als laatste redmiddel, eenvoudige voor/na-vergelijking — duidelijk gemarkeerd als de zwakste vorm van bewijs, gevoelig voor het verwarren van het effect van het programma met het effect van alles anders dat in dezelfde periode veranderde.

## De berekening

De contrafeitelijke kadering, toepasbaar over alle methoden:

```
Geschatte impact = Uitkomst（met interventie） − Uitkomst
                  （contrafeitelijk: zonder interventie）

NIET:
Geschatte impact ≠ Uitkomst（na） − Uitkomst（voor）
                  ［verwart tijd met behandeling］
```

Differences-in-differences, een van de meest voorkomende quasi-experimentele ontwerpen in overheidsevaluatie, isoleert het behandelingseffect door de eigen voor/na-verandering van de vergelijkingsgroep af te trekken:

```
DiD-schatting = ［Uitkomst（behandeld, na） − Uitkomst
               （behandeld, voor）］
             − ［Uitkomst（vergelijking, na） − Uitkomst
               （vergelijking, voor）］
```

Dit verwijdert elke trend die beide groepen gemeen hebben (bijv. een nationale economische verschuiving die iedereen treft), en laat alleen de differentiële verandering over die aan de interventie kan worden toegeschreven.

## Uitgewerkt voorbeeld

**Werkgelegenheidsprogramma, voor/na (zwak ontwerp)**: een werkondersteuningsregeling rapporteert dat de werkgelegenheid van deelnemers steeg van 40% naar 55% over een jaar — een naïeve conclusie van "+15 procentpunten dankzij het programma".

**Hetzelfde programma, differences-in-differences (sterker ontwerp)**: een gematchte vergelijkingsgroep van soortgelijke niet-deelnemers, afkomstig uit dezelfde lokale arbeidsmarkt, toont dat de werkgelegenheid steeg van 38% naar 47% over hetzelfde jaar (een nationaal economisch herstel was aan de gang).

```
Verandering behandelde groep:  55% − 40% = +15
                              procentpunten
Verandering vergelijkingsgroep: 47% − 38% = +9
                               procentpunten

DiD-schatting （werkelijk programma-effect） = 15 − 9 = +6
                                              procentpunten
```

De eerlijke toeschrijfbare effect is 6 procentpunten, niet 15 — meer dan de helft van de schijnbare voor/na-verbetering zou toch hebben plaatsgevonden, gedreven door hetzelfde economische herstel dat de vergelijkingsgroep optilde.

**Regressiediscontinuïteit, geschiktheidsdrempel**: een subsidieregeling is alleen beschikbaar voor bedrijven met minder dan 50 werknemers. Het vergelijken van uitkomsten voor bedrijven net onder de drempel (45–49 werknemers, geschikt) met bedrijven net erboven (50–54 werknemers, niet geschikt) biedt een geloofwaardige contrafeitelijke situatie omdat bedrijven aan weerszijden van een willekeurige administratieve grens verder gelijkaardig zijn — de drempel, niet een onderliggend bedrijfskenmerk, bepaalt geschiktheid. Een gemiddeld uitkomstverschil van £2.000 tussen de twee groepen, alleen waargenomen bij de drempel, kan met veel meer vertrouwen aan de subsidie worden toegeschreven dan een eenvoudige vergelijking van alle geschikte versus alle niet-geschikte bedrijven (die systematisch verschillen in omvang).

## Verband met softwareontwikkeling

Contrafeitelijk denken moet bepalen hoe impacttrackingsystemen en evaluatiepijplijnen voor overheids- en maatschappelijke-sectorsoftware worden ontworpen:

- Bouw vastlegging van een vergelijkingsgroep vanaf het begin in een systeem — door vast te leggen wie geschikt was maar niet ingeschreven, of een gematchte niet-deelnemende cohort — in plaats van dit achteraf toe te voegen nadat een programma al is uitgevoerd en alleen voor/na-gegevens bestaan.
- Waar randomisatie haalbaar is (een gefaseerde uitrol, een digitale dienst geactiveerd voor sommige gebruikers voordat andere), instrumenteer het systeem om de willekeurige toewijzing te bewaren als een opvraagbaar veld; een gefaseerde uitrol vernietigt per ongeluk zijn eigen evaluatiewaarde als de toewijzingsvolgorde niet wordt gelogd.
- Dit is de fundamentele methode achter [methoden voor impactevaluatie](../methoden-voor-impactevaluatie/) en is wat het onderscheidt van [impactevaluatie versus procesevaluatie](../impactevaluatie-versus-procesevaluatie/), waarbij de laatste vraagt of een programma werd geleverd zoals bedoeld in plaats van of het een effect veroorzaakte.
- [Additionaliteit en deadweight](../additionaliteit-en-deadweight/) en [verdringing en toeschrijving](../verdringing-en-toeschrijving/) zijn allebei, in de grond, contrafeitelijke vragen — deadweight is "wat zou deze specifieke uitkomst zijn geweest zonder de interventie", toegepast op correctieniveau in plaats van volledig evaluatieontwerp.

## Valkuilen

- **Voor/na behandelen als bewijs van causaliteit.** Dit is de meest voorkomende en meest gevolgrijke fout in impactrapportage van de publieke en maatschappelijke sector; een voor/na-verandering verwart het effect van het programma met alles anders dat in dezelfde periode veranderde.
- **Een vergelijkingsgroep gebruiken die systematisch verschilt van de behandelde groep.** Een gematchte vergelijkingsgroep moet werkelijk gelijkaardig zijn op relevante kenmerken (zie de methodehiërarchie voor contrafeitelijke analyse in het Magenta Book); programmadeelnemers (die instapten, en vaak meer gemotiveerd zijn) vergelijken met niet-deelnemers (die dat niet deden) riskeert selectiebias vermomd als programma-effect.
- **Randomisatiekansen vernietigen door slecht leveringsontwerp.** Een gefaseerde of gerandomiseerde uitrol behoudt zijn evaluatiewaarde alleen als de toewijzing werkelijk willekeurig is en geregistreerd — lokale managers laten kiezen wie eerst gaat, ondermijnt het doel.
- **Precisie overschatten vanuit een zwak ontwerp.** Een voor/na-schatting moet worden gepresenteerd als indicatief, niet als een gemeten effectgrootte; de bewijshiërarchie van het Magenta Book bestaat zodat de sterkte van een bewering overeenkomt met de sterkte van het ontwerp dat het produceerde.

## Bronnen

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
