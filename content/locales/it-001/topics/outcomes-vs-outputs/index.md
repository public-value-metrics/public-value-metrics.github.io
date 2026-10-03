# Risultati contro output

Un output è il prodotto diretto e contabile di un'attività — esiste nel momento in cui avviene l'erogazione, indipendentemente da quale effetto abbia. Un risultato è il cambiamento che segue per le persone, il luogo, o il sistema coinvolti. "500 persone hanno partecipato a un workshop di ricerca lavoro" è un output: è vero anche se nessuna di loro trova lavoro. "Le prospettive occupazionali di 500 persone sono migliorate" è una rivendicazione di risultato, e richiede evidenza di cambiamento, non solo evidenza di partecipazione — la confusione che produce più report di sovvenzione fuorvianti di quasi qualsiasi altro errore di misurazione nel settore.

## Perché è importante

Il Magenta Book del HM Treasury e finanziatori come il National Lottery Community Fund richiedono entrambi il reporting dei risultati specificamente perché gli output sono ciò che i programmi riportano per impostazione predefinita: sono economici da contare, sempre disponibili, e sembrano sempre positivi. Un conteggio di output non può letteralmente mai scendere come risultato di un fallimento del programma — più sessioni erogate è sempre "più", mentre un risultato può rivelare che un programma non funziona. Il National Audit Office ha ripetutamente criticato i programmi governativi per aver riportato livelli di attività come se fossero evidenza di successo; un sistema software che rende facile riportare solo gli output rinforza questo per impostazione predefinita, perché gli output non richiedono raccolta di dati di follow-up e i risultati sì.

## Il calcolo

Non c'è una formula, ma c'è un test affidabile per classificare una metrica:

```
Test dell'output:   è contabile al punto di erogazione, vero anche se
                    il destinatario non è influenzato?
Test del risultato: richiede un confronto prima/dopo o con/senza per
                    essere significativo?

Se un numero può essere vero con zero beneficio per chiunque, è un
output.
```

Questo si inserisce nella più ampia catena del [modello logico](../logic-model/) e dipende dai collegamenti di risultato definiti in una [teoria del cambiamento](../theory-of-change/); trasformare un risultato in denaro usa i metodi nel [ritorno sociale sull'investimento](../social-return-on-investment/).

## Esempio pratico

**Autorità locale (supporto all'occupazione)**: output — 500 persone hanno partecipato a workshop di ricerca lavoro. Risultato — a un follow-up di 12 mesi, 140 di quelle 500 (28%) sono in occupazione sostenuta (6+ mesi). Un gruppo di confronto con caratteristiche simili ma senza accesso al programma ha un tasso di occupazione di baseline del 15% sullo stesso periodo. Aumento netto del risultato: 28% − 15% = 13 punti percentuali, quindi si stima che 500 × 0,13 = 65 persone aggiuntive siano al lavoro che altrimenti non lo sarebbero state — il risultato attribuibile, distinto sia dalla cifra di partecipazione di 500 sia dal conteggio grezzo di occupazione di 140.

**Organizzazione benefica (organizzazione benefica di alfabetizzazione)**: output — 1.200 sessioni di lettura erogate a 300 bambini. Risultato — l'età di lettura media è migliorata di 8 mesi in un periodo di 6 mesi, contro una baseline di progressione naturale attesa a 6 mesi di 6 mesi. Guadagno netto del risultato: 8 − 6 = 2 mesi di miglioramento aggiuntivo dell'età di lettura per bambino attribuibile al programma, non la cifra completa di 8 mesi.

## Collegamento con lo sviluppo software

I log di eventi e i sistemi transazionali strumentano gli output quasi automaticamente — visualizzazioni di pagina, sessioni, ticket chiusi, appuntamenti prenotati — perché sono generati dal sistema che fa il suo lavoro. I risultati richiedono un modello di dati che catturi lo stesso individuo in un momento successivo contro una baseline o un confronto, che deve essere progettato deliberatamente: indagini di follow-up, record amministrativi collegati, o una coorte di confronto. Uno strumento di reporting che supporta solo il primo orienterà silenziosamente un'organizzazione verso il reporting solo-output indipendentemente da ciò che il finanziatore ha chiesto. Vedi [modello logico](../logic-model/) per dove i risultati si inseriscono nella catena di responsabilità, [costo per risultato](../cost-per-outcome/) per trasformare questa distinzione in una metrica di costo unitario, e [KPI del settore pubblico](../public-sector-kpis/) per il pattern più ampio di selezione delle metriche.

## Insidie

- **Riportare gli output come se fossero risultati.** "500 persone hanno partecipato" implica beneficio senza dimostrarlo; etichetta esplicitamente la partecipazione come un output.
- **Nessuna baseline o gruppo di confronto.** Una cifra di risultato senza controfattuale — vedi [analisi controfattuale](../counterfactual-analysis/) — non può separare l'effetto del programma da ciò che sarebbe accaduto comunque.
- **Ottimizzare per la metrica finanziata.** Quando il finanziamento è legato al volume di output, i team di erogazione razionalmente massimizzano la partecipazione sopra il cambiamento durevole, una modalità di fallimento della legge di Goodhart.
- **Lavaggio dei risultati.** Rietichettare una metrica di output con un linguaggio che suona come risultato ("risultati di engagement: 500 partecipanti") senza alcuna misurazione di follow-up dietro.

## Fonti

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
