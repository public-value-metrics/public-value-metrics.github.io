# Teoria del cambiamento

Una teoria del cambiamento è un percorso causale esplicito, mappato all'indietro, da un obiettivo di lungo termine alle precondizioni e attività che devono esistere affinché venga raggiunto, insieme alle assunzioni che collegano ogni collegamento. È costruita iniziando dal risultato che vuoi e chiedendo "cosa deve essere vero immediatamente prima di questo, affinché questo accada?", ripetutamente, finché non raggiungi attività che puoi effettivamente erogare — che è la direzione opposta di un [modello logico](../logic-model/), e perché i due sono complementari piuttosto che intercambiabili.

## Perché è importante

Il metodo di mappatura all'indietro è stato formalizzato dal Center for Theory of Change e ActKnowledge, costruendo sul lavoro della valutatrice Carol Weiss nel rendere esplicite le assunzioni del programma così che potessero essere testate piuttosto che prese per fede. La valutazione delle sovvenzioni nel Regno Unito ha assorbito questo direttamente: il Magenta Book del HM Treasury tratta una teoria del cambiamento come il punto di partenza per qualsiasi design di valutazione, e finanziatori come il National Lottery Community Fund richiedono ai candidati di articolarne una prima che finanzino una proposta. Il motivo per cui conta per un ingegnere software è che una teoria del cambiamento è il documento che dovrebbe determinare cosa il tuo sistema ha bisogno di misurare — se la catena causale dice "l'adozione dei benefici dipende dai richiedenti che ricevono un calcolo personalizzato", quella è una rivendicazione testabile che il tuo prodotto può essere strumentato per comprovare, o rifiutare.

## Il calcolo

Una teoria del cambiamento è strutturale piuttosto che numerica. Ogni collegamento dovrebbe portare sia un'assunzione sia un indicatore che potrebbe mostrare che l'assunzione è falsa:

```
Risultato di lungo termine (l'obiettivo)
  ↑ precondizione + assunzione + indicatore
Risultato intermedio N
  ↑ precondizione + assunzione + indicatore
  ...
Risultato intermedio 1
  ↑ precondizione + assunzione + indicatore
Attività / interventi
  ↑ risorse impegnate
Input
```

Questa struttura alimenta direttamente i [metodi di valutazione d'impatto](../impact-evaluation-methods/), che esistono per testare se le assunzioni a ogni collegamento effettivamente tengono, e l'[analisi controfattuale](../counterfactual-analysis/), che testa se il risultato di lungo termine sarebbe accaduto comunque.

## Esempio pratico

**Autorità locale (prevenzione del senzatetto)**: il risultato di lungo termine è l'affitto sostenuto a 12 mesi per famiglie a rischio di sfratto.

- Precondizione: le famiglie hanno un piano di rimborso realistico e sostenibile per gli arretrati.
  Assunzione: i piani negoziati dal caseworker sono più sostenibili di quelli ordinati dal tribunale.
  Indicatore: % di piani ancora attivi a 6 mesi.
- Precondizione: le famiglie richiedono i benefici a cui hanno diritto.
  Assunzione: un calcolatore digitale dei benefici aumenta le richieste corrette rispetto ai moduli di carta.
  Indicatore: tasso di accuratezza delle richieste, confrontato prima/dopo il lancio dello strumento.
- Attività: triage del caseworker, calcolatore digitale dei benefici, negoziazione degli arretrati.

In una coorte pilota di 120 famiglie, l'assunzione del calcolatore dei benefici ha tenuto per 102 famiglie (85%) che hanno poi fatto richieste corrette, comprovato da una successiva valutazione di processo — dando al team del programma evidenza per quel collegamento specifico piuttosto che una singola rivendicazione end-to-end sul senzatetto prevenuto.

**Organizzazione benefica (mentoring giovanile)**: il risultato di lungo termine è l'esclusione scolastica ridotta. Precondizioni mappate all'indietro: regolazione emotiva migliorata → relazione uno-a-uno fidata con un mentore → contatto settimanale coerente per due trimestri. La teoria rende esplicito che mancare la precondizione "contatto settimanale coerente" (diciamo, a causa del turnover dei mentori) predice che il risultato non seguirà, che è una rivendicazione testabile e falsificabile piuttosto che una speranza.

## Collegamento con lo sviluppo software

Una teoria del cambiamento dovrebbe plasmare il modello di dati di un prodotto prima che venga costruito un singolo dashboard: identifica quali collegamenti hanno bisogno di un indicatore, e strumenta specificamente per quelli, piuttosto che impostare come predefinito qualunque cosa sia più facile da registrare. Disciplina anche le conversazioni sulla roadmap — una funzionalità che non mappa a nessun collegamento nella catena non vale ovviamente la pena di essere costruita. Vedi [modello logico](../logic-model/) per la catena di responsabilità rivolta al futuro costruita una volta che la teoria è concordata, [ritorno sociale sull'investimento](../social-return-on-investment/) per un metodo che dipende da una teoria del cambiamento per definire lo scopo di quali risultati valutare, e [risultati contro output](../outcomes-vs-outputs/) per la distinzione da cui dipendono i collegamenti di risultato intermedio.

## Insidie

- **Confonderla con un modello logico.** Una teoria del cambiamento è causale ed esplicativa (perché crediamo che questo funzioni); un modello logico è sequenziale e descrittivo (cosa accade in quale ordine). Produrne solo uno lascia mancante il "perché" o la traccia di responsabilità.
- **Lasciare le assunzioni implicite.** L'intero valore della mappatura all'indietro è far emergere assunzioni testabili; una teoria del cambiamento che elenca solo caselle e freccie senza nominare cosa potrebbe rendere falso ogni collegamento è decorazione.
- **Costruirla una volta e archiviarla.** Una teoria del cambiamento scritta per una proposta di finanziamento e mai rivisitata smette di essere utile nel momento in cui l'evidenza inizia a contraddire un collegamento.
- **Saltare il contributo degli stakeholder.** Una teoria del cambiamento costruita interamente dai commissari senza contributo dal personale in prima linea o dai beneficiari tende a codificare assunzioni che nessuno che erogi effettivamente il servizio crede davvero.

## Fonti

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
