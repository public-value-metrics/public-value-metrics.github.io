# Impactevaluatie versus procesevaluatie

Impactevaluatie vraagt of een programma zijn beoogde uitkomsten heeft veroorzaakt. Procesevaluatie vraagt of het programma daadwerkelijk werd geleverd zoals ontworpen — aan wie, in welke dosis, en met welke barrières of bevorderende factoren onderweg. Dit zijn verschillende vragen die verschillende methoden vereisen, en het Magenta Book van HM Treasury behandelt het aanvragen van beide samen als standaardpraktijk, omdat een zwak of nul-impactresultaat op zichzelf niet interpreteerbaar is: het kan je niet vertellen of de onderliggende theorie van het programma verkeerd was, of dat een goede theorie eenvoudigweg nooit goed werd geleverd.

## Waarom het ertoe doet

Overheidsevaluaties hebben herhaaldelijk geen meetbaar effect van een programma gevonden zonder procesevaluatie om uit te leggen waarom — waardoor opdrachtgevers niet konden onderscheiden "dit idee werkt niet" (theoriefalen) van "dit idee werd nooit daadwerkelijk goed geprobeerd" (implementatiefalen). De richtlijn van de Medical Research Council over procesevaluatie van complexe interventies, gepubliceerd in de BMJ in 2015 en breed geciteerd naast het Magenta Book, formaliseerde getrouwheid, dosis, en bereik als de kerndingen die een procesevaluatie moet meten. Het aanvragen van een impactevaluatie zonder procesevaluatie riskeert het opgeven van een werkelijk gezond programmaontwerp omdat het werd geleverd aan de helft van de beoogde populatie tegen een fractie van de beoogde intensiteit — een fout die een systeembouwer goed gepositioneerd is om te voorkomen, omdat leveringsgetrouwheid precies is wat operationele gegevenssystemen in bijna-realtime kunnen vastleggen.

## De berekening

```
Procesevaluatie vraagt:
 - Werd het geleverd aan de doelpopulatie, tegen de geplande
   dosis/intensiteit?
 - Kwam de levering overeen met het logisch model / de theorie-
   van-verandering-ontwerp?
 - Welke barrières of bevorderende factoren beïnvloedden de
   levering?
 Methoden: getrouwheidscontroles tegen vooraf gespecificeerde
           drempels, casestudies, interviews, administratieve
           leveringsgegevens.

Impactevaluatie vraagt:
 - Wat veranderde, en hoeveel van die verandering is toe te
   schrijven aan het programma?
 Methoden: RCT, DiD, PSM, RDD — zie methoden voor
           impactevaluatie — tegen een contrafeitelijke situatie.

Gecombineerde diagnose:
 Geen effect  + hoge getrouwheid  → theoriefalen: het model zelf
                                    produceerde de uitkomst niet
 Geen effect  + lage getrouwheid  → implementatiefalen: het model
                                    werd nooit goed getest
 Effect gevonden + hoge getrouwheid → herhaal met vertrouwen
 Effect gevonden + lage getrouwheid → verder onderzoeken: het
                                      effect kan fragiel of
                                      locatiespecifiek zijn
```

## Uitgewerkt voorbeeld

**Gemeente (opvoedingsprogramma)**: een impactevaluatie met behulp van difference-in-differences vindt een verandering van +2 procentpunten in een kindwelzijnsmaatstaf — niet statistisch significant. De procesevaluatie, ernaast uitgevoerd, vindt dat het programma slechts 210 van de 500 beoogde gezinnen bereikte (42% bereik), en van die, voltooiden slechts 95 de vooraf gespecificeerde getrouwheidsdrempel van 75%+ bijgewoonde sessies — 19% van het oorspronkelijk gepland bereik. Conclusie: het zwakke impactresultaat is consistent met een implementatiefalen, geen bewijs dat het programmamodel niet werkt; het passende antwoord is het repareren van het verwijzingstraject dat de uitval van 58% veroorzaakte, niet het opgeven van het programmaontwerp.

**Goed doel (digitale-geletterdheidsprogramma)**: een impactevaluatie vindt een sterk effect (+18 procentpunten op een digitale-vertrouwensscore), en een parallelle procesevaluatie bevestigt 92% getrouwheid aan het geplande curriculum over alle 12 leveringslocaties. Samen kan de financier het programma met vertrouwen opschalen, omdat het effect blijkt consistent stand te houden in plaats van het product te zijn van één ongewoon goede locatie.

## Verband met softwareontwikkeling

Procesevaluatiegegevens zijn precies wat leveringssystemen goed gepositioneerd zijn om vast te leggen: aanwezigheid tegen plan, sessiedosering, en uitval bij elke fase van een verwijzings- of inschrijvingsfunnel — dezelfde funnelanalyse die ingenieurs al bouwen voor productfuncties, toegepast op de leveringspijplijn van een sociaal programma in plaats daarvan. Getrouwheids- en bereikmaatstaven in bijna-realtime aan programmamanagers voeren, in plaats van te wachten op een evaluatie aan het einde van de subsidie, laat een gebroken verwijzingstraject halverwege het programma repareren in plaats van pas ontdekt te worden zodra de financieringsperiode is beëindigd. Zie [methoden voor impactevaluatie](../impact-evaluation-methods/) voor de causale ontwerpen waarmee procesevaluatie wordt gekoppeld, [theorie van verandering](../theory-of-change/) en [logisch model](../logic-model/) voor het ontwerp waaraan de procesevaluatie getrouwheid toetst, en [batenrealisatie](../benefits-realization/) voor het traceren van levering tot en met de beloofde uitkomsten.

## Valkuilen

- **Alleen impactevaluatie aanvragen.** Een nul- of zwak resultaat kan dan niet worden geïnterpreteerd als theoriefalen of implementatiefalen, wat precies het onderscheid is dat ertoe doet bij het beslissen wat vervolgens te doen.
- **Procesevaluatie behandelen als een zachte toevoeging.** Het heeft dezelfde rigueur en vooraf gespecificeerde getrouwheidscriteria nodig als het impactontwerp, anders stort het in tot anekdote wanneer de resultaten binnenkomen.
- **"Op tijd en binnen budget" verwarren met "geleverd zoals ontworpen".** Procesevaluatie toetst getrouwheid aan het model — dosis, doelgroep, inhoud — niet de RAG-status van projectbeheer.
- **Getrouwheidsdrempels niet vooraf registreren.** Achteraf beslissen wat telt als "voldoende dosis" laat elke uitleg van een teleurstellend impactresultaat eruitzien als achteraf-excuses.

## Bronnen

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
