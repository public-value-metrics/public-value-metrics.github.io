# Valutazione d'impatto contro valutazione di processo

La valutazione d'impatto chiede se un programma ha causato i suoi risultati previsti. La valutazione di processo chiede se il programma è stato effettivamente erogato come progettato — a chi, a quale dose, e con quali barriere o facilitatori lungo il percorso. Queste sono domande diverse che richiedono metodi diversi, e il Magenta Book del HM Treasury tratta il commissionare entrambe insieme come pratica standard, perché un risultato di impatto debole o nullo è non interpretabile da solo: non può dirti se la teoria sottostante del programma era sbagliata, o se una buona teoria semplicemente non è mai stata erogata correttamente.

## Perché è importante

Le valutazioni governative hanno ripetutamente trovato nessun effetto misurabile da un programma senza avere alcuna valutazione di processo per spiegare perché — lasciando i commissari incapaci di distinguere "questa idea non funziona" (fallimento della teoria) da "questa idea non è mai stata effettivamente provata correttamente" (fallimento dell'implementazione). La guida del Medical Research Council sulla valutazione di processo di interventi complessi, pubblicata sul BMJ nel 2015 e ampiamente citata insieme al Magenta Book, ha formalizzato fedeltà, dose, e portata come le cose principali che una valutazione di processo deve misurare. Commissionare una valutazione d'impatto senza una valutazione di processo rischia di abbandonare un design di programma genuinamente solido perché è stato erogato a metà della popolazione prevista a una frazione dell'intensità prevista — un errore che chi costruisce sistemi è ben posizionato a prevenire, perché la fedeltà di erogazione è esattamente ciò che i sistemi di dati operativi possono catturare quasi in tempo reale.

## Il calcolo

```
La valutazione di processo chiede:
 - È stato erogato alla popolazione target, alla
   dose/intensità pianificata?
 - L'erogazione ha corrisposto al design del modello
   logico / teoria del cambiamento?
 - Quali barriere o facilitatori hanno influenzato
   l'erogazione?
 Metodi: controlli di fedeltà contro soglie pre-specificate,
         casi di studio, interviste, dati amministrativi di
         erogazione.

La valutazione d'impatto chiede:
 - Cosa è cambiato, e quanto di quel cambiamento è
   attribuibile al programma?
 Metodi: RCT, DiD, PSM, RDD — vedi metodi di valutazione
         d'impatto — contro un controfattuale.

Diagnosi combinata:
 Nessun effetto + alta fedeltà  → fallimento della teoria: il
                                  modello stesso non ha
                                  prodotto il risultato
 Nessun effetto + bassa fedeltà → fallimento
                                  dell'implementazione: il
                                  modello non è mai stato
                                  testato correttamente
 Effetto trovato + alta fedeltà → replica con fiducia
 Effetto trovato + bassa fedeltà → investiga ulteriormente:
                                   l'effetto potrebbe essere
                                   fragile o specifico al sito
```

## Esempio pratico

**Autorità locale (programma di genitorialità)**: una valutazione d'impatto che usa la differenza nelle differenze trova un cambiamento di +2 punti percentuali in una misura di benessere infantile — non statisticamente significativo. La valutazione di processo, eseguita in parallelo, trova che il programma ha raggiunto solo 210 delle 500 famiglie target (42% di portata), e di quelle, solo 95 hanno completato la soglia di fedeltà pre-specificata del 75%+ di sessioni frequentate — 19% della portata originale pianificata. Conclusione: il debole risultato di impatto è coerente con un fallimento dell'implementazione, non evidenza che il modello del programma non funzioni; la risposta appropriata è riparare il percorso di segnalazione che ha causato il calo del 58%, non abbandonare il design del programma.

**Organizzazione benefica (programma di alfabetizzazione digitale)**: una valutazione d'impatto trova un effetto forte (+18 punti percentuali su un punteggio di confidenza digitale), e una valutazione di processo parallela confirma il 92% di fedeltà al curriculum pianificato attraverso tutti i 12 siti di erogazione. Combinati, il finanziatore può scalare il programma con fiducia, perché l'effetto si dimostra tenere costantemente piuttosto che essere il prodotto di un sito insolitamente buono.

## Collegamento con lo sviluppo software

I dati della valutazione di processo sono esattamente ciò che i sistemi di erogazione sono ben posizionati a catturare: presenza contro piano, dosaggio delle sessioni, e calo a ogni fase di un funnel di segnalazione o iscrizione — la stessa analitica di funnel che gli ingegneri già costruiscono per le funzionalità di prodotto, applicata invece alla pipeline di erogazione di un programma sociale. Alimentare le metriche di fedeltà e portata ai responsabili del programma quasi in tempo reale, piuttosto che aspettare una valutazione di fine sovvenzione, permette che un percorso di segnalazione rotto venga riparato a metà programma invece di essere scoperto solo una volta terminato il periodo di finanziamento. Vedi [metodi di valutazione d'impatto](../metodi-di-valutazione-dimpatto/) per i design causali con cui la valutazione di processo è abbinata, [teoria del cambiamento](../teoria-del-cambiamento/) e [modello logico](../modello-logico/) per il design contro cui la valutazione di processo controlla la fedeltà, e [realizzazione dei benefici](../realizzazione-dei-benefici/) per tracciare l'erogazione fino ai risultati che erano stati promessi.

## Insidie

- **Commissionare solo la valutazione d'impatto.** Un risultato nullo o debole allora non può essere interpretato come fallimento della teoria o fallimento dell'implementazione, che è precisamente la distinzione che conta per decidere cosa fare dopo.
- **Trattare la valutazione di processo come un'aggiunta leggera.** Ha bisogno dello stesso rigore e dei criteri di fedeltà pre-specificati del design di impatto, o collassa in aneddoto quando arrivano i risultati.
- **Confondere "in tempo e nel budget" con "erogato come progettato".** La valutazione di processo controlla la fedeltà al modello — dose, gruppo target, contenuto — non lo stato RAG della gestione del progetto.
- **Non pre-registrare le soglie di fedeltà.** Decidere a posteriori cosa conta come "dose sufficiente" fa sembrare qualsiasi spiegazione di un risultato di impatto deludente una scusa post-hoc.

## Fonti

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
