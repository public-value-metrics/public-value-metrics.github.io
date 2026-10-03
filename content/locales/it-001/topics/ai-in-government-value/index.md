# Valore dell'IA nel governo

Il valore dell'IA nel governo è il requisito che un sistema IA usato in un servizio pubblico superi la stessa barra di value-for-money e valore pubblico di qualsiasi altra decisione di spesa — non una più bassa perché è nuovo, e non una più alta perché è temuto. È la domanda a cui un team di erogazione deve essere in grado di rispondere prima, non dopo, che una funzionalità IA venga rilasciata: questo produce più valore di quanto costi, una volta che assicurazione, controllo, e rischio sono prezzati onestamente?

## Perché è importante

Il Central Digital and Data Office (CDDO) britannico ha pubblicato il suo Generative AI Framework for Government nel 2024, costruendo sulla guida interinale precedente di giugno 2023, e lo ha strutturato attorno a dieci principi che coprono cos'è l'IA generativa, le sue implicazioni etiche, la sicurezza degli strumenti, i controlli di assicurazione della qualità, la gestione del ciclo di vita completo dell'IA generativa, l'identificazione di casi d'uso genuini, la collaborazione intergovernativa, la trasparenza, le competenze, e la governance. L'insistenza del quadro sul "controllo umano significativo" e la gestione del ciclo di vita completo esiste perché i casi aziendali dei progetti IA hanno una modalità di fallimento specifica che altra spesa IT non ha: il numero di produttività principale di un pilota è facile da produrre e facile da sopravvalutare, perché viene misurato prima che l'onere di verifica, correzione, e controllo che lo strumento crea venga contabilizzato. Insieme al quadro, l'Algorithmic Transparency Recording Standard (ATRS) richiede agli enti pubblici di pubblicare un record standardizzato — scopo, dati usati, performance, test di equità, accordi di controllo umano — per gli strumenti algoritmici che hanno un'influenza significativa sulle decisioni sugli individui, il che rende il costo di assicurazione di un sistema IA una questione di registro pubblico, non una stima interna che un team può silenziosamente saltare.

## Il calcolo

L'adozione dell'IA viene valutata come un'aggiunta a, non un sostituto di, la valutazione standard di [value for money](../value-for-money/), con i termini specifici dell'IA rese esplicite piuttosto che fuse in un singolo numero di "guadagno di produttività":

```
Valore netto di un sistema IA =
    guadagno di produttività (tempo risparmiato × costo del
    personale caricato)
  − costo di licenza/calcolo
  − costo di verifica e controllo umano (controllare
    l'output dell'IA prima che si agisca su di esso — questo
    non si riduce a zero nemmeno per strumenti maturi)
  − costo di documentazione ATRS e monitoraggio continuo
  − costo aggiustato per il rischio del danno da errori,
    bias, o allucinazione, pesato da chi porta quel danno
    (ponderazione-distributiva)

Una cifra di produttività pilota che omette il termine di
controllo non è comparabile a una baseline di costo
business-as-usual che già include revisione umana
equivalente — vedi produttività-dell'IA-nel-settore-pubblico
per la disciplina di misurazione della produttività più
completa da cui questo prende in prestito.
```

## Esempio pratico

**Un'autorità locale che usa uno strumento IA generativo per bozzare prime risposte a richieste di routine sulla tassa comunale**: 25.000 richieste/anno, precedentemente gestite interamente da caseworker a una media di 14 minuti/richiesta, costo del personale caricato £34/ora.

```
Costo di baseline (nessuna IA):
  25.000 × (14/60) × £34 = £198.333/anno

Rivendicazione principale del pilota: l'IA bozza una
risposta in 90 secondi, il caseworker "semplicemente
revisiona e invia" — il nuovo tempo rivendicato è 3 minuti
  25.000 × (3/60) × £34 = £42.500/anno
  → risparmio rivendicato £155.833/anno (sembra
    trasformazionale)

Cifra completamente caricata, misurata dopo 3 mesi in
produzione piuttosto che nei casi di test selezionati a
mano del pilota:
  Tempo effettivo di revisione + correzione per risposta:
  6 minuti (le bozze necessitano editing reale per
  richieste complesse o emotivamente sensibili)
  25.000 × (6/60) × £34 = £85.000/anno
  Costo di licenza/calcolo: £38.000/anno
  Documentazione ATRS e monitoraggio trimestrale di
  bias/qualità: £14.000/anno
  Costo totale = 85.000 + 38.000 + 14.000 = £137.000/anno

Risparmio reale = 198.333 − 137.000 = £61.333/anno —
genuino e vale la pena mantenere, ma ben sotto la metà
della rivendicazione principale del pilota, e ha richiesto
una misurazione onesta del tempo di controllo, non quella
di miglior-caso del pilota, per trovarlo.
```

## Collegamento con lo sviluppo software

Questo è dove la [produttività dell'IA nel settore pubblico](../ai-productivity-in-the-public-sector/) e questo argomento si incontrano: i team ingegneristici che costruiscono funzionalità IA nei servizi pubblici possiedono la strumentazione che rende possibile la cifra "reale" nell'esempio pratico — registrando il tempo di revisione effettivo, la distanza di editing tra la bozza e la risposta inviata, e il tasso di escalation, piuttosto che fidarsi delle condizioni demo del pilota. Le funzionalità IA dovrebbero essere valutate contro il punto 9 dello [standard dei servizi digitali](../digital-service-standard/) (servizio sicuro, privacy dell'utente) e incrociate con il [valore della cybersicurezza del settore pubblico](../public-sector-cybersecurity-value/) dove lo strumento tocca dati dei cittadini, e qualsiasi sistema IA con un'influenza significativa sulle decisioni sugli individui necessita di un record ATRS prima di poter essere considerato pronto per la valutazione, nello stesso modo in cui un servizio necessita di una valutazione superata dello [standard dei servizi digitali](../digital-service-standard/) prima di andare in produzione.

## Insidie

- **Lavaggio IA**: rietichettare l'automazione basata su regole esistente come "IA" per accedere a finanziamento o attenzione destinati all'adozione dell'IA, senza i rischi di accuratezza o bias che effettivamente giustificano il controllo extra del quadro.
- **Misurare la produttività del pilota, non la produttività di produzione**: i piloti vengono eseguiti su casi di test curati con revisori impegnati e attenti; la produzione viene eseguita sul mix completo e disordinato di casi con revisori che, nel tempo, sviluppano bias di automazione e sotto-controllano gli output — entrambi distorcono la cifra onesta di costo di controllo.
- **Saltare la registrazione ATRS perché lo strumento "non è davvero un processo decisionale automatizzato"**: la soglia dello standard è un'influenza significativa su una decisione su un individuo, che la maggior parte degli strumenti IA di bozzatura o triage rivolti ai cittadini soddisfano anche quando un umano tecnicamente firma l'approvazione.
- **Ignorare l'impatto distributivo degli errori**: il tasso di errore di un sistema IA mediato attraverso tutti gli utenti può nascondere un tasso di errore o bias molto più alto per gruppi specifici; la [ponderazione distributiva](../distributional-weighting/) dovrebbe essere applicata al termine di danno aggiustato per il rischio, non solo alla cifra di accuratezza aggregata.

## Fonti

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
