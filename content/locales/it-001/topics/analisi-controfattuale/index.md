# Analisi controfattuale

Un controfattuale è una stima di ciò che sarebbe accaduto in assenza di un intervento. Senza uno, un cambiamento osservato dopo il lancio di un programma non può essere distinto da un cambiamento che sarebbe avvenuto comunque — nessun controfattuale, nessuna evidenza di effetto, per quanto convincenti sembrino i numeri prima-e-dopo. Il Magenta Book del HM Treasury tratta la costruzione di un controfattuale credibile come il compito metodologico centrale della valutazione d'impatto, più importante di qualsiasi altra singola scelta di design.

## Perché è importante

"La criminalità è diminuita del 15% nell'anno dopo l'introduzione del programma" non è evidenza che il programma abbia funzionato a meno che non si sappia cosa sarebbe successo alla criminalità senza di esso — la criminalità potrebbe essere diminuita del 20% comunque a causa di tendenze economiche o demografiche non correlate, il che significa che il programma ha effettivamente peggiorato le cose rispetto al controfattuale, nonostante il numero grezzo stia migliorando. Questo è l'errore analitico più comune nelle rivendicazioni di impatto del settore pubblico e sociale: confondere un confronto prima/dopo con evidenza di causalità. Il Magenta Book è esplicito che la valutazione d'impatto esiste per rispondere a una domanda controfattuale — "che differenza ha fatto questo intervento?" — e che rispondervi richiede stimare, non solo descrivere, il mondo che non è accaduto.

Metodi diversi costruiscono il controfattuale con diversi gradi di confidenza, e la guida alla valutazione governativa li classifica di conseguenza. Gli studi randomizzati controllati (RCT), dove individui o aree sono assegnati casualmente a ricevere un intervento o no, producono il controfattuale più forte perché la randomizzazione assicura che i gruppi trattamento e controllo differiscano, in media, solo nel ricevere l'intervento. Il Cabinet Office e il What Works Network hanno promosso gli RCT nella politica pubblica britannica dal rapporto "Test, Learn, Adapt" del 2012 del Behavioural Insights Team, precisamente perché i design più debole sono vulnerabili a fattori confondenti — la differenza osservata potrebbe riflettere chi ha scelto di partecipare, non l'effetto del programma. Dove la randomizzazione è impraticabile o non etica (come spesso è per programmi con un diritto statutario, o per cambiamenti di politica a livello di intera popolazione), il Magenta Book stabilisce una gerarchia esplicita di alternative più debole ma ancora utili: gruppi di confronto abbinati, design differenze-nelle-differenze, discontinuità di regressione attorno a soglie di eleggibilità, e, come ultima risorsa, semplice confronto prima/dopo — chiaramente segnalato come la forma più debole di evidenza, incline a confondere l'effetto del programma con l'effetto di tutto il resto che è cambiato nello stesso momento.

## Il calcolo

L'inquadramento controfattuale, applicabile a tutti i metodi:

```
Impatto stimato = Risultato(con intervento) −
                  Risultato(controfattuale: senza
                  intervento)

NON:
Impatto stimato ≠ Risultato(dopo) − Risultato(prima)
                  [confonde il tempo con il trattamento]
```

Le differenze-nelle-differenze, uno dei design quasi-sperimentali più comuni nella valutazione governativa, isola l'effetto del trattamento sottraendo il proprio cambiamento prima/dopo del gruppo di confronto:

```
Stima DiD = [Risultato(trattati, dopo) −
            Risultato(trattati, prima)] −
            [Risultato(confronto, dopo) −
            Risultato(confronto, prima)]
```

Questo rimuove qualsiasi tendenza comune a entrambi i gruppi (es. un cambiamento economico nazionale che colpisce tutti), lasciando solo il cambiamento differenziale attribuibile all'intervento.

## Esempio pratico

**Programma occupazionale, prima/dopo (design debole)**: uno schema di supporto al lavoro riporta che l'occupazione dei partecipanti è salita dal 40% al 55% in un anno — una conclusione ingenua di "+15 punti percentuali grazie al programma."

**Stesso programma, differenze-nelle-differenze (design più forte)**: un gruppo di confronto abbinato di non-partecipanti simili, tratto dallo stesso mercato del lavoro locale, mostra l'occupazione salire dal 38% al 47% nello stesso anno (era in corso una ripresa economica nazionale).

```
Cambiamento gruppo trattato:    55% − 40% = +15 punti
                                percentuali
Cambiamento gruppo confronto:   47% − 38% = +9 punti
                                percentuali

Stima DiD (vero effetto programma) = 15 − 9 = +6 punti
                                     percentuali
```

Il vero effetto attribuibile è 6 punti percentuali, non 15 — più della metà del miglioramento prima/dopo apparente sarebbe avvenuto indipendentemente dal programma, guidato dalla stessa ripresa economica che ha sollevato il gruppo di confronto.

**Discontinuità di regressione, soglia di eleggibilità**: uno schema di sovvenzioni è disponibile solo per aziende con meno di 50 dipendenti. Confrontare i risultati per aziende appena sotto la soglia (45-49 dipendenti, eleggibili) con aziende appena sopra (50-54 dipendenti, non eleggibili) fornisce un controfattuale credibile perché le aziende da entrambe le parti di un limite amministrativo arbitrario sono altrimenti simili — la soglia, non alcuna caratteristica aziendale sottostante, determina l'eleggibilità. Una differenza di risultato media di £2.000 tra i due gruppi, osservata solo alla soglia, è attribuibile alla sovvenzione con molta più confidenza di un semplice confronto di tutte le aziende eleggibili contro tutte quelle non eleggibili (che differiscono sistematicamente in dimensione).

## Collegamento con lo sviluppo software

Il pensiero controfattuale dovrebbe plasmare come sono progettati i sistemi di tracciamento dell'impatto e le pipeline di valutazione per il software governativo e del settore sociale:

- Costruisci la cattura del gruppo di confronto in un sistema dall'inizio — registrando chi era eleggibile ma non iscritto, o una coorte abbinata di non-partecipanti — piuttosto che ritrattarla dopo che un programma è già stato eseguito e solo i dati prima/dopo esistono.
- Dove la randomizzazione è possibile (un lancio graduale, un servizio digitale attivato per alcuni utenti prima di altri), strumenta il sistema per preservare l'assegnazione casuale come un campo interrogabile; un lancio graduale distrugge accidentalmente il proprio valore di valutazione se l'ordine di assegnazione non viene registrato.
- Questo è il metodo fondamentale dietro [metodi di valutazione d'impatto](../metodi-di-valutazione-dimpatto/) ed è ciò che lo separa da [valutazione d'impatto contro valutazione di processo](../valutazione-dimpatto-contro-valutazione-di-processo/), quest'ultima chiede se un programma è stato erogato come previsto piuttosto che se ha causato un effetto.
- [Addizionalità e peso morto](../addizionalità-e-peso-morto/) e [spostamento e attribuzione](../spostamento-e-attribuzione/) sono entrambi, alla radice, domande controfattuali — il peso morto è "quale sarebbe stato questo specifico risultato senza l'intervento", applicato a livello di aggiustamento piuttosto che design completo di valutazione.

## Insidie

- **Trattare prima/dopo come evidenza di causalità.** Questo è l'errore più comune e più consequenziale nel reporting dell'impatto pubblico e del settore sociale; un cambiamento prima/dopo confonde l'effetto del programma con tutto il resto che è cambiato nello stesso periodo.
- **Usare un gruppo di confronto che differisce sistematicamente dal gruppo trattato.** Un gruppo di confronto abbinato deve essere genuinamente simile su caratteristiche rilevanti (vedi la gerarchia di metodi di [analisi controfattuale](../analisi-controfattuale/) nel Magenta Book); confrontare partecipanti al programma (che hanno scelto di aderire, e sono spesso più motivati) con non-partecipanti (che non l'hanno fatto) rischia un bias di selezione che si maschera da effetto del programma.
- **Distruggere opportunità di randomizzazione attraverso una progettazione dell'erogazione scadente.** Un lancio graduale o randomizzato preserva il suo valore di valutazione solo se l'assegnazione è genuinamente casuale e registrata — lasciare che i manager locali scelgano chi va prima sconfigge lo scopo.
- **Sovra-rivendicare precisione da un design debole.** Una stima prima/dopo dovrebbe essere presentata come indicativa, non come una dimensione di effetto misurata; la gerarchia di evidenza del Magenta Book esiste affinché la forza di una rivendicazione corrisponda alla forza del design che l'ha prodotta.

## Fonti

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
