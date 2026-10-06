# Forandringsteori

En forandringsTeori er en explicit, baglæns-kortlagt kausal vej fra et langsigtet mål til de forudsætninger og aktiviteter, der skal eksistere for, det kan opnås, sammen med antagelserne, der forbinder hvert led. Den bygges ved at starte ved det resultat, du ønsker, og spørge "hvad skal være sandt umiddelbart før dette, for dette at ske?", gentagne gange, indtil du nårer aktiviteter, du faktisk kan levere — hvilket er den modsatte retning af en [logikModel](../logikmodel/), og hvorfor de to er komplementære snarere end udskiftelige.

## Hvorfor det betyder noget

BaglænsKortlægningMetoden blev formaliseret af Center for Theory of Change og ActKnowledge, bygget på evaluator Carol Weiss's arbejde med at gøre programAntagelser explicitte, så de kunne testes snarere end tages på tro. Britisk bevillingsEvaluering har absorberet dette direkte: HM Treasurys Magenta Book behandler en forandringsTeori som udgangspunktet for ethvert evalueringsDesign, og finansierer som National Lottery Community Fund kræver, at ansøgere artikulerer en, før de vil finansiere et forslag. Grunden til, det betyder noget for en softwareIngeniør, er, at en forandringsTeori er dokumentet, der bør bestemme, hvad dit system behøver at måle — hvis den kausale kæde siger "ydelsesOptag afhænger af, at ansøgere modtager en personaliseret beregning", er det en testbar påstand, dit produkt kan instrumenteres til at dokumentere, eller afvise.

## Beregningen

En forandringsTeori er strukturel snarere end numerisk. Hvert led bør bære både en antagelse og en indikator, der kunne vise, antagelsen er falsk:

```
Langsigtet resultat (målet)
  ↑ forudsætning + antagelse + indikator
Mellemliggende resultat N
  ↑ forudsætning + antagelse + indikator
  ...
Mellemliggende resultat 1
  ↑ forudsætning + antagelse + indikator
Aktiviteter / interventioner
  ↑ ressourcer forpligtet
Input
```

Denne struktur fødrer direkte ind i [effektEvalueringsMetoder](../effektevalueringsmetoder/), som eksisterer for at teste, om antagelserne ved hvert led faktisk holder, og ind i [kontrafaktisk analyse](../kontrafaktisk-analyse/), som tester, om det langsigtede resultat ville have fundet sted alligevel.

## Gennemregnet eksempel

**Lokal myndighed (hjemløshedsforebyggelse)**: langsigtet resultat er varige lejemål ved 12 måneder for husstande i risiko for udsættelse.

- Forudsætning: husstande har en realistisk, betalelig tilbagebetalingsplan for restancer.
  Antagelse: sagsbehandler-forhandlede planer er mere holdbare end dommer-beordrede.
  Indikator: % planer stadig aktive ved 6 måneder.
- Forudsætning: husstande ansøger om de ydelser, de er berettiget til.
  Antagelse: en digital ydelsesBeregner øger korrekte ansøgninger versus papirFormularer.
  Indikator: ansøgningsNøjagtighedsrate, sammenlignet før/efter redskabsLancering.
- Aktiviteter: sagsbehandler-triage, digital ydelsesBeregner, restanceForhandling.

I en pilotKohorte på 120 husstande holdt ydelsesBeregnerAntagelsen for 102 husstande (85%), der fortsatte med at ansøge korrekt, dokumenteret af en efterfølgende procesEvaluering — hvilket giver programTeamet evidens for det specifikke led snarere end en enkelt ende-til-ende-påstand om forhindret hjemløshed.

**Velgørenhedsorganisation (ungdomsmentorskab)**: langsigtet resultat er reduceret skoleUdvisning. BaglænsKortlagte forudsætninger: forbedret emotionel regulering ← pålidelig en-til-en-relation med en mentor ← konsistent ugentlig kontakt over to perioder. Teorien gør explicit, at manglende forudsætningen "konsistent ugentlig kontakt" (sig, på grund af mentorOmsætning) forudsiger, at resultatet ikke vil følge, hvilket er en testbar, falsificerbar påstand snarere end en forhåbning.

## Forbindelse til softwareudvikling

En forandringsTeori bør forme et produkts dataModel, før et enkelt dashboard bygges: identificér, hvilke led behøver en indikator, og instrumentér specifikt for dem, snarere end at standardisere til hvad er lettest at logge. Det disciplinerer også roadmap-samtaler — en funktion, der ikke kortlægger til noget led i kæden, er ikke åbenlyst værd at bygge. Se [logikModel](../logikmodel/) for den fremadskuende ansvarlighedsKæde bygget når teorien er aftalt, [socialt afkast på investering](../socialt-afkast-på-investering/) for en metode, der afhænger af en forandringsTeori for at afgrænse, hvilke resultater at værdisætte, og [resultater versus output](../resultater-versus-output/) for distinktionen, de mellemliggende-resultat-led afhænger af.

## Faldgruber

- **At forveksle det med en logikModel.** En forandringsTeori er kausal og forklarende (hvorfor vi tror, dette virker); en logikModel er sekventiel og beskrivende (hvad sker i hvilken orden). At producere kun en efterlader enten "hvorfor"et eller ansvarlighedsSporet manglende.
- **At lade antagelser være implicitte.** Hele værdien af baglæns kortlægning er at bringe testbare antagelser til overfladen; en forandringsTeori, der blot lister bokse og pile uden at nævne, hvad kunne gøre hvert led falsk, er dekoration.
- **At bygge det en gang og lægge det på hylden.** En forandringsTeori skrevet til en finansieringsAnsøgning og aldrig genbesøgt stopper med at være nyttig, det moment evidens begynder at modsige et led.
- **At springe interessentInput over.** En forandringsTeori bygget helt af ordregivere uden input fra frontlinjePersonale eller modtagere har tendens til at kode antagelser, ingen der leverer tjenesten faktisk tror på.

## Kilder

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
