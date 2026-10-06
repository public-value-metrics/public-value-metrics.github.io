# Offentlig værdi

Offentlig værdi er den værdi, som en regering eller en organisation i den sociale sektor skaber for borgerne samlet set — ikke blot de outputs, den producerer, eller de penge, den bruger, men om samfundet er bedre stillet, fordi organisationen eksisterer og handlede, som den gjorde. Mark Moores "strategiske trekant" fra 1995 er standardtesten: et offentligt initiativ er kun berettiget, når det er *legitimt og støttet*, *substantielt værdifuldt*, og *operationelt leveringsdueligt*, alle tre på samme tid.

## Hvorfor det betyder noget

Værdi i den private sektor er relativt let at prissætte: indtægter minus kostpris, afgjort af kunder, der kan gå deres vej. Offentlig værdi har intet tilsvarende markedssignal. En fængselsmyndighed, en skattemyndighed, og et børnebeskyttelsesteam producerer alle ting, borgerne ikke blot kan afvise at købe, og "kunden" (skatteyderen, gerningsmanden, barnet) er ofte ikke den samme person som den politiske principal, der godkender budgettet. Moores *Creating Public Value: Strategic Management in Government* (Harvard University Press, 1995) leverer den manglende disciplin: en leder bør kunne angive (1) hvilken offentlig værdi deres initiativ skaber, (2) hvorfra deres legitimitet og finansiering til at forfølge det kommer — en minister, et råd, et mandat, en bevilling — og (3) om deres organisation faktisk kan levere det med de mennesker, teknologi, og processer, der er til hånde. Et program, der scorer godt på kun én eller to ben af trekanten, er endnu ikke berettiget, uanset hvor velmenende det er.

Dette har praktisk betydning, fordi de fleste softwaresvigt i den offentlige sektor ikke er teknologisvigt. Et system kan være teknisk fremragende og operationelt leveringsdueligt og stadig mislykkes, fordi ingen i det legitimerende miljø — ministre, tilsynsudvalg, offentligheden — faktisk ønskede den ting, det optimerer for. Den digitale Universal Credit-tjeneste og NHS National Programme for IT citeres begge i britisk offentlig forvaltningslitteratur som tilfælde, hvor de operationelle og legitimitetsmæssige ben af trekanten var ude af trit med missionsbenet.

## Beregningen

Offentlig værdi er en ramme, ikke en formel, men den strukturerer ellers vage investeringssager til tre testbare spørgsmål:

```
Test af den strategiske trekant — fortsæt kun, hvis alle tre
holder:

1. Legitimitet og støtte: Hvem har godkendt dette, og
   bakker det legitimerende miljø (lovgivende forsamling,
   minister, råd, bestyrelse, offentlig mening) stadig op om
   det, mens ressourcer forpligtes?

2. Offentlig værdi: Hvilket specifikt, beskriveligt gode
   producerer dette for borgere eller samfundet — sikkerhed,
   sundhed, mulighed, tillid, retfærdighed — og for hvem?

3. Operationel kapacitet: Kan organisationen faktisk levere
   det med nuværende personale, teknologi, partnere, og
   juridisk bemyndigelse — eller en troværdig plan for at
   opnå dem?
```

Et svagt initiativ fejler typisk mindst et ben: teknisk leveringsdueligt, men uden mandat (et datadelingspilotprojekt, ingen har godkendt); populært, men ikke leveringsdueligt (en lovet digital tjeneste uden teknisk kapacitet); eller godkendt og leveringsdueligt, men værditomt (et dashboard, ingen bruger).

## Gennemregnet eksempel

**Lokal myndighed**: et kommunalt digitalt team foreslår et AI-triageværktøj til boligtilskudsansøgninger.

- *Legitimitet*: kommunens kabinet har godkendt en digital-først-strategi, men de valgte medlemmer med ansvar for social sikkerhed har ikke specifikt godkendt automatiseret beslutningstagning — et hul, ikke et grønt lys.
- *Offentlig værdi*: hurtigere behandling (påstået fordel: fra 10 dage til 2 dage) er kun reel værdi, hvis ansøgere ikke fejlagtigt afvises; værdipåstanden skal omfatte nøjagtighed, ikke kun hastighed.
- *Operationel kapacitet*: kommunen har én dataforsker og ingen modelovervågningsproces, så den påståede 2-dages gennemløbstid er ikke leveringsdueligt lige nu ved den angivne fejlrate.

To ud af tre ben fejler. Moores ramme siger: fortsæt ikke som afgrænset — sikr først explicit godkendelse til automatiserede beslutninger og byg overvågningskapacitet, eller den "offentlige værdi", der påstås i businesscasen, er fiktiv.

**Central regering**: en skattemyndigheds digitale indberetningstjeneste har stærk legitimitet (lovfæstet mandat) og stærk operationel kapacitet (et eksisterende team leverer pålideligt), men svag offentlig værdi, hvis anvendelsen er lav, fordi de digitalt udelukkede — se [digital inklusion](../digital-inklusion/) — skubbes ind i en kanal, de ikke kan bruge. Trekanten afslører, hvad et rent leveringsdashboard ville skjule.

## Forbindelse til softwareudvikling

Offentlig værdi er det overordnede koncept, hele dette repository befinder sig under: [value for money](../værdi-for-pengene/) giver økonomi-/effektivitets-/effektivitetstesten for, om ressourcer blev brugt godt; [alternativkostning i offentlige udgifter](../alternativkostning-i-offentlige-udgifter/) prissætter, hvad pengene ellers kunne have gjort; og [additionalitet og dødvægt](../additionalitet-og-dødvægt/), [forskydning og tilskrivning](../forskydning-og-tilskrivning/), og [kontrafaktisk analyse](../kontrafaktisk-analyse/) tester sammen, om den påståede værdi er reel snarere end antaget. For ingeniører er den strategiske trekant en nyttig præ-mortem for enhver produktbeslutning i den offentlige sektor:

- Før man afgrænser en funktion, spørg hvem der godkendte den, og om denne godkendelse stadig holder — en funktion bygget til en minister, der siden er flyttet videre, kan stiltiende have tabt sit legitimitetsben.
- Behandl "kan vi bygge det" og "bør vi bygge det" som genuint separate spørgsmål; teknisk kapacitet besvarer kun det tredje ben af trekanten.
- Produktkravsdokumenter for offentlige tjenester bør angive den offentlige værdipåstand explicit, ikke kun brugerhistorien, fordi brugerværdi og offentlig værdi ikke altid er den samme ting (se [resultater versus output](../resultater-versus-output/)).

## Faldgruber

- **At behandle operationel kapacitet som tilstrækkelig berettigelse.** "Vi kan bygge det" besvarer kun ét ben af trekanten; teams med stærk leveringskapacitet leverer rutinemæssigt ting, ingen godkendte at ville have, og som ikke skaber noget beskriveligt offentligt gode.
- **At forveksle legitimitet med lovlighed.** Et program kan være lovligt og stadig mangle den politiske og offentlige støtte, der er nødvendig for at bære det gennem en svær leveringsfase; juridisk dækning er ikke det samme som et mandat.
- **At antage, at offentlig værdi er, hvad det bestillende departement siger, den er.** Moores model kræver, at værdipåstanden kan testes mod borgernes faktiske interesser, ikke blot hævdes af finansieren — ellers kollapser rammen til selvcertificering.

## Kilder

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press,
  1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
