# Effektevaluering versus procesevaluering

Effektevaluering spørger, om et program forårsagede dets tilsigtede resultater. ProcesEvaluering spørger, om programmet faktisk blev leveret som designet — til hvem, ved hvilken dosis, og med hvilke barrierer eller fremmende faktorer langs vejen. Disse er forskellige spørgsmål, der kræver forskellige metoder, og HM Treasurys Magenta Book behandler bestilling af begge sammen som standardPraksis, fordi et svagt eller nul-effektResultat er uforklarligt alene: det kan ikke sige dig, om programmets underliggende teori var forkert, eller om en god teori simpelthen aldrig blev ordentligt leveret.

## Hvorfor det betyder noget

Statslige evalueringer har gentagne gange fundet ingen målbar effekt fra et program, mens de ikke havde nogen procesEvaluering til at forklare hvorfor — hvilket efterlod ordregivere ude af stand til at skelne "denne idé fungerer ikke" (teoriSvigt) fra "denne idé blev aldrig faktisk prøvet ordentligt" (implementeringsSvigt). Medical Research Councils vejledning om procesEvaluering af komplekse interventioner, udgivet i BMJ i 2015 og bredt citeret sammen med Magenta Book, formaliserede troskab, dosis, og rækkevidde som de kerneTing en procesEvaluering skal måle. At bestille en effektEvaluering uden en procesEvaluering risikerer at opgive et genuint sundt programDesign, fordi det blev leveret til halvdelen af den tilsigtede befolkning ved en fraktion af den tilsigtede intensitet — en fejl en systemBygger er godt placeret til at forhindre, fordi leveringsTroskab er netop, hvad operationelle dataSystemer kan fange i næsten-realTid.

## Beregningen

```
ProcesEvaluering spørger:
 - Blev det leveret til målBefolkningen, ved den planlagte
   dosis/intensitet?
 - Matchede levering logikModel-/forandringsTeori-designet?
 - Hvilke barrierer eller fremmende faktorer påvirkede
   levering?
 Metoder: troskabsKontroller mod forHåndsSpecificerede
          tærskler, casestudier, interviews, administrative
          leveringsData.

EffektEvaluering spørger:
 - Hvad ændrede sig, og hvor meget af den ændring kan
   tilskrives programmet?
 Metoder: RCT, DiD, PSM, RDD — se effektevalueringsmetoder —
          mod en kontrafaktual.

Kombineret diagnose:
 Ingen effekt + høj troskab  → teoriSvigt: modellen selv
                               producerede ikke resultatet
 Ingen effekt + lav troskab  → implementeringsSvigt: modellen
                               blev aldrig ordentligt testet
 Effekt fundet + høj troskab → gentag med tillid
 Effekt fundet + lav troskab → undersøg yderligere: effekten
                               kan være skrøbelig eller
                               stedSpecifik
```

## Gennemregnet eksempel

**Lokal myndighed (forældreProgram)**: en effektEvaluering ved brug af difference-in-differences finder en ændring på +2 procentpoint i en børnevelfærdsMåling — ikke statistisk signifikant. ProcesEvalueringen, kørt sideløbende, finder, at programmet kun nåede 210 af de 500 målrettede familier (42% rækkevidde), og af dem fuldførte kun 95 den forHåndsSpecificerede troskabsTærskel på 75%+ sessioner deltaget — 19% af det oprindeligt planlagte rækkevidde. Konklusion: det svage effektResultat er konsistent med et implementeringsSvigt, ikke evidens for, at programModellen ikke fungerer; det passende svar er at fikse henvisningsVejen, der forårsagede 58%-faldet, ikke at opgive programDesignet.

**Velgørenhedsorganisation (digital kompetenceProgram)**: en effektEvaluering finder en stærk effekt (+18 procentpoint på en digital tillids-score), og en parallel procesEvaluering bekræfter 92% troskab mod det planlagte kursus over alle 12 leveringsSteder. Kombineret kan finansieren skalere programmet med tillid, fordi effekten viser sig at holde konsistent snarere end at være produktet af et usædvanligt godt sted.

## Forbindelse til softwareudvikling

ProcesEvalueringsData er netop, hvad leveringsSystemer er godt placeret til at fange: fremmøde mod plan, sessionsDosering, og dropfald ved hvert stadie af en henvisningsEller tilmeldingsTragt — samme tragtAnalytik ingeniører allerede bygger for produktFunktioner, anvendt på et socialt programs leveringsPipeline i stedet. At fødre troskabs- og rækkeviddeMålinger til programLedere i næsten-realTid, snarere end at vente på en slut-af-bevilling-evaluering, lader en brudt henvisningsVej fikses midt-i-programmet i stedet for kun at blive opdaget, når finansieringsPerioden er endt. Se [effektEvalueringsMetoder](../impact-evaluation-methods/) for de kausale design, procesEvaluering er koblet med, [forandringsTeori](../theory-of-change/) og [logikModel](../logic-model/) for designet, procesEvaluering kontrollerer troskab mod, og [fordelsRealisering](../benefits-realization/) for sporing af levering igennem til de resultater, der blev lovet.

## Faldgruber

- **At bestille effektEvaluering alene.** Et nul eller svagt resultat kan derefter ikke tolkes som teoriSvigt eller implementeringsSvigt, hvilket netop er den distinktion, der betyder noget for at beslutte, hvad der skal gøres næst.
- **At behandle procesEvaluering som en blød tilføjelse.** Den behøver samme stringens og forHåndsSpecificerede troskabsKriterier som effektDesignet, eller den kollapser til anekdote, når resultaterne kommer ind.
- **At forveksle "til tiden og inden for budget" med "leveret som designet".** ProcesEvaluering kontrollerer troskab mod modellen — dosis, målGruppe, indhold — ikke projektStyrings-RAG-status.
- **At ikke forHåndsRegistrere troskabsTærskler.** At beslutte efter faktum, hvad tæller som "tilstrækkelig dosis", gør enhver forklaring af et skuffende effektResultat til at se ud som efterfølgende undskyldninger.

## Kilder

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
