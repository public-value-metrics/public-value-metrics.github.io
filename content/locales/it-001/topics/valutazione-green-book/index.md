# Valutazione Green Book (modello a cinque casi)

Il Green Book è la guida obbligatoria del HM Treasury per valutare e valutare le proposte di spesa del governo britannico. Il suo strumento centrale, il modello a cinque casi, costringe un caso aziendale a rispondere a cinque domande separate — è una buona idea, fornisce valore, può essere acquistato, è sostenibile, e può essere erogato — piuttosto che collassare tutto in un singolo numero che un ministro può approvare con un gesto.

## Perché è importante

Ogni proposta di spesa del governo centrale britannico sopra i limiti delegati dipartimentali deve passare attraverso la valutazione Green Book prima che il finanziamento venga rilasciato, e la Green Book Review 2020 del HM Treasury (pubblicata dopo critiche secondo cui il processo era distorto contro le regioni più povere, vedi <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) ha rafforzato il requisito che le opzioni siano confrontate con una genuina baseline "do minimum" e che l'adattamento strategico sia dimostrato prima ancora che il value for money venga valutato. Il modello a cinque casi stesso precede il Green Book — ha avuto origine con l'Office of Government Commerce come struttura standard del caso aziendale — ma l'edizione 2022 del Green Book lo incorpora come la forma obbligatoria per qualsiasi caso aziendale che cerca l'approvazione del Treasury: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Il punto di dividere il caso in cinque modi è che una proposta può fallire su qualsiasi dimensione indipendentemente dalle altre. Una riconversione IT strategicamente solida e conveniente può ancora fallire il caso commerciale se solo un fornitore può erogarla (creando un rischio di gara unica), o fallire il caso di gestione se il dipartimento non ha precedenti nell'erogare programmi di quella dimensione. Un singolo punteggio di "value for money" nasconde esattamente questo tipo di modalità di fallimento.

## Il calcolo

Il modello a cinque casi è una struttura, non una formula, ma ciascun caso ha il proprio test quantitativo o evidenziale:

```
1. Caso strategico
   Evidenza di un obiettivo di spesa collegato alla
   strategia organizzativa.
   Test: esiste un caso per il cambiamento? ("non fare
   nulla" è sempre un'opzione.)

2. Caso economico
   Valutazione delle opzioni contro una baseline "do
   minimum", usando analisi costo-beneficio sociale o
   analisi costo-efficacia.
   Test: quale opzione massimizza il valore pubblico netto?
   Vedi ../social-cost-benefit-analysis/ e
   ../cost-effectiveness-analysis-in-government/

3. Caso commerciale
   Impegno di mercato, via di approvvigionamento,
   allocazione del rischio tra acquirente e fornitore.
   Test: l'opzione preferita è acquistabile a termini
   accettabili?

4. Caso finanziario
   Sostenibilità entro i limiti di bilancio dipartimentale,
   fonte di finanziamento, trattamento del bilancio.
   Test: possiamo permettercelo, quest'anno e ogni anno
   successivo?

5. Caso di gestione
   Governance, piano di progetto, piano di realizzazione
   dei benefici, registro dei rischi.
   Test: questa organizzazione può effettivamente erogarlo?
   Vedi ../benefits-realization/
```

Il caso economico è dove vive la valutazione quantitativa: le opzioni sono confrontate su una base di valore attuale netto aggiustato per il [tasso di sconto sociale](../tasso-di-sconto-sociale/), usando il metodo di [analisi costo-beneficio sociale](../analisi-costo-beneficio-sociale/), o, dove i benefici non possono essere onestamente monetizzati, tramite [analisi costo-efficacia](../analisi-costo-efficacia-nel-governo/) o [analisi decisionale multi-criterio](../analisi-decisionale-multi-criterio/).

## Esempio pratico

**Autorità locale**: un comune che valuta un sistema IT di riparazioni abitative da £12 milioni esegue i cinque casi come segue. Caso strategico: l'arretrato di riparazioni violerà lo standard statutario di case decenti entro 18 mesi senza intervento. Caso economico: tre opzioni costate su un periodo di valutazione di 10 anni a un tasso di sconto del 3,5% (secondo il tasso standard di preferenza temporale sociale del Green Book 2022) — "do minimum" (riparare il sistema legacy, VAN −£4,1m), "comprare" (piattaforma COTS, VAN +£2,3m), "costruire" (piattaforma su misura, VAN +£0,6m una volta applicato un bias di ottimismo del 40% per lo sviluppo software contro il costo di capitale non scontato, secondo il Green Book Annex A). "Comprare" vince il caso economico. Caso commerciale: esistono due fornitori validi, la gara competitiva è fattibile — supera. Caso finanziario: capitale disponibile dal Public Works Loan Board, i costi di esercizio rientrano nel piano finanziario di medio termine — supera. Caso di gestione: il comune ha erogato due sistemi comparabili negli ultimi cinque anni — supera. La proposta procede con "comprare."

**Dipartimento del governo centrale**: una proposta con un forte caso economico (VAN +£40m) ma dove solo un fornitore possiede l'accreditamento rilevante fallisce il test del caso commerciale per tensione competitiva, costringendo a una rinuncia a gara unica (con il proprio onere di controllo) o a una riprogettazione della specifica per aprire il mercato — il caso economico da solo non avrebbe mai fatto emergere questo.

## Collegamento con lo sviluppo software

I team ingegneristici all'interno del governo o delle organizzazioni finanziate da sovvenzioni di solito vedono solo il caso economico, perché è la parte che il prodotto e la leadership ingegneristica sono chiamati a giustificare ("qual è il ROI di questa migrazione?"). Ma un caso aziendale che supera il Treasury o un comitato di sovvenzioni ha bisogno di tutti e cinque, e gli ingegneri sono spesso le persone meglio posizionate per rispondere al caso commerciale (questo può effettivamente essere acquistato, o ci blocca nel formato proprietario di un fornitore?) e al caso di gestione (abbiamo la capacità di erogazione, o dipende dal fatto che tre persone specifiche non se ne vadano?). Tratta una richiesta per "solo i numeri del caso aziendale" come una richiesta per un quinto della decisione effettiva. Vedi [value for money](../value-for-money/) per come l'output del caso economico viene solitamente riassunto, e [costo totale di proprietà](../costo-totale-di-proprietà-nel-governo-it/) per il nucleo quantitativo abituale del caso finanziario.

## Insidie

- **Scrivere prima il caso economico e il caso strategico per farlo corrispondere.** La Green Book Review 2020 ha trovato esattamente questa modalità di fallimento che guidava il bias di valutazione verso luoghi e settori già ben documentati, radicando la disuguaglianza regionale; il caso strategico dovrebbe stabilire l'obiettivo prima che le opzioni vengano confrontate.
- **Trattare "do minimum" come "non fare nulla".** La baseline corretta è l'opzione a costo più basso che soddisfa ancora gli obblighi legali o di sicurezza minimi, non una fantasia di spesa zero — confrontare contro zero letterale gonfia il valore apparente di ogni opzione.
- **Saltare i casi commerciale e di gestione perché il caso economico è forte.** Una proposta con alto VAN che non può essere acquistata competitivamente o erogata dall'organizzazione sponsorizzante non è una proposta finanziabile; i revisori del Treasury respingono regolarmente su queste basi anche con un caso economico convincente.
- **Applicare il modello a cinque casi una sola volta, all'inizio.** Il Green Book richiede che il caso venga rivisitato a ciascun successivo punto di approvazione (caso strategico sommario, caso aziendale sommario, caso aziendale completo) mentre costi ed evidenze si consolidano — un caso congelato alla fase sommaria perde l'escalation dei costi che un punto successivo avrebbe colto.

## Fonti

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
