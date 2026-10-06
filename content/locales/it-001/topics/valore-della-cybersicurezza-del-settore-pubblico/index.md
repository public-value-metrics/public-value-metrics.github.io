# Valore della cybersicurezza del settore pubblico

Il valore della cybersicurezza del settore pubblico è la disciplina di prezzare la riduzione del rischio: cosa vale rendere meno probabile una violazione dei dati dei cittadini, dato che la spesa di sicurezza non produce output visibile quando funziona e uno molto visibile quando fallisce? Per un servizio che detiene record di benefici, dati sanitari, o record fiscali, quella proprietà "invisibile quando funziona" è esattamente perché necessita di un argomento di valore esplicito, non solo una casella di conformità.

## Perché è importante

Il Cyber Assessment Framework (CAF) del UK National Cyber Security Centre dà alle organizzazioni del settore pubblico un modo strutturato di rendere la sicurezza una disciplina valutabile e basata sui risultati piuttosto che una checklist: definisce quattro obiettivi di alto livello (gestire il rischio di sicurezza, proteggere contro attacchi cyber, rilevare eventi di cybersicurezza, e minimizzare l'impatto degli incidenti) scomposti in risultati contributivi contro cui un proprietario di sistema può essere valutato, nello stesso spirito del punto 9 dello [standard dei servizi digitali](../standard-dei-servizi-digitali/) ("crea un servizio sicuro che protegga la privacy degli utenti"). Ciò contro cui la valutazione CAF protegge ha un prezzo documentato: il Cost of a Data Breach Report di IBM traccia il costo medio di violazione per settore, e ha costantemente trovato il settore pubblico verso l'estremità più bassa della gamma rispetto alla finanza o alla sanità — edizioni recenti pongono la media del settore pubblico intorno a $2,6-2,9 milioni per violazione — ma "più basso della finanza" non è "basso", e le violazioni governative portano costi che le cifre del report non catturano completamente: perdita di fiducia del cittadino nei canali digitali, che deprime l'[adozione digitale](../risparmi-da-spostamento-di-canale/) da cui dipendono i casi aziendali di spostamento di canale, e il costo politico e legale di esporre dati che lo stato ha costretto i cittadini a consegnare in primo luogo.

## Il calcolo

L'investimento in sicurezza viene valutato nel modo in cui qualsiasi spesa di riduzione del rischio viene valutata: come una riduzione della perdita attesa, usando l'identità classica di gestione del rischio.

```
Perdita attesa annualizzata (ALE) = Perdita attesa singola
                                    (SLE) × Tasso annualizzato
                                    di occorrenza (ARO)

Valore di un controllo di sicurezza =
  ALE_prima_del_controllo − ALE_dopo_il_controllo − costo
  annuale del controllo

Un controllo vale la pena di essere finanziato quando:
  (ALE_prima − ALE_dopo) > costo annuale del controllo

La valutazione CAF non produce direttamente una
probabilità, ma il profilo di risultato CAF di un servizio
(quali risultati contributivi sono "raggiunti",
"parzialmente raggiunti", o "non raggiunti") è un proxy
ragionevole per stimare l'ARO — un sistema con accesso
privilegiato non gestito o nessun piano di risposta agli
incidenti testato ha un ARO realistico materialmente più
alto di uno con entrambi in atto.
```

## Esempio pratico

**Sistema di gestione dei casi della contea che detiene record di assistenza sociale per 40.000 residenti**:

```
Perdita attesa singola (costo di violazione), usando una
media del settore pubblico da un recente Cost of a Data
Breach Report di IBM ≈ £2,1m (cifra convertita, ordine di
grandezza — rideriva sempre dall'edizione attuale del
report piuttosto che riusare un numero fisso)

ARO attuale (accesso privilegiato non gestito, nessuna
risposta agli incidenti testata, secondo un'auto-
valutazione CAF interna che mostra diversi risultati "non
raggiunti") ≈ stimato 8% all'anno
  ALE_prima = £2,1m × 0,08 = £168.000/anno

Controllo proposto: gestione dell'accesso privilegiato +
piano di risposta agli incidenti testato, spostando i
risultati CAF rilevanti a "raggiunto", stimato a tagliare
l'ARO al 3%/anno
  ALE_dopo = £2,1m × 0,03 = £63.000/anno

Costo annuale del controllo (strumenti + processo +
test) = £45.000

Valore del controllo = (168.000 − 63.000) − 45.000 =
  £60.000/anno netto positivo — finanzialo. L'aritmetica
  mostra anche che il controllo varrebbe ancora la pena
  di essere finanziato a quasi il triplo del costo, che è
  il tipo di controllo di sensibilità che dovrebbe
  accompagnare qualsiasi cifra ALE costruita su
  probabilità stimate.
```

## Collegamento con lo sviluppo software

Gli ingegneri possiedono la maggior parte delle leve nell'equazione ALE: il design del controllo degli accessi, l'igiene delle dipendenze e delle patch, la copertura di logging e rilevamento, e gli strumenti di risposta agli incidenti tutti muovono direttamente il termine ARO, che è il motivo per cui la valutazione CAF si legge tanto come una revisione dell'architettura tecnica quanto come un audit politico. Questo è il [debito tecnico come erosione del valore pubblico](../debito-tecnico-come-erosione-del-valore-pubblico/) nella sua forma più acuta — sistemi non corretti, non monitorati, mal controllati negli accessi sono debito il cui pagamento di interesse è rischio di coda, non un drenaggio costante — e dovrebbe essere riconciliato contro il [costo totale di proprietà nel governo IT](../costo-totale-di-proprietà-nel-governo-it/) così che la spesa di sicurezza non sia trattata come separata dal vero costo operativo del sistema. È anche un input diretto alle valutazioni di [value for money](../value-for-money/) sotto il Green Book: il costo aggiustato per il rischio è parte del lato "costo" di qualsiasi valutazione delle opzioni, non un ripensamento avvitato alla fine.

## Insidie

- **Trattare l'auto-valutazione CAF come la sicurezza stessa**: una valutazione completata descrive una postura di sicurezza; non ne crea una — il valore è nei risultati raggiunti, non nel documento.
- **Usare i costi medi globali di violazione come stima locale senza aggiustamento**: le cifre di IBM sono medie attraverso campioni grandi e vari; la perdita attesa singola realistica di una piccola autorità locale raramente è la stessa di un dipartimento del governo nazionale.
- **Ignorare la psicologia del rischio di coda nelle decisioni di investimento**: una bassa probabilità annuale rende facile differire indefinitamente la spesa di sicurezza, fino proprio all'anno in cui non lo è — testare la sensibilità del calcolo ALE contro una gamma di ARO, come nell'esempio pratico, contrasta questo.
- **Contare solo il costo di violazione in stile IBM, non il costo di fiducia**: una violazione che deprime la volontà del cittadino di usare i canali digitali erode il caso dei [risparmi da spostamento di canale](../risparmi-da-spostamento-di-canale/) per anni dopo, un costo raramente incluso nelle stime del costo di violazione.

## Fonti

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
