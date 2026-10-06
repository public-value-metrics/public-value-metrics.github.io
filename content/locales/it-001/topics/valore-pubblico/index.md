# Valore pubblico

Il valore pubblico è il valore che un governo o un'organizzazione del settore sociale crea per i cittadini collettivamente — non solo i risultati che produce o il denaro che spende, ma se la società è migliore perché l'organizzazione esiste e ha agito come ha agito. Il "triangolo strategico" di Mark Moore del 1995 è il test standard: un'iniziativa pubblica è giustificata solo quando è *legittima e supportata*, *sostanzialmente valida*, e *operativamente realizzabile*, tutte e tre contemporaneamente.

## Perché è importante

Il valore nel settore privato è relativamente facile da prezzare: ricavi meno costi, giudicati da clienti che possono andarsene. Il valore pubblico non ha un segnale di mercato equivalente. Un servizio carcerario, un'autorità fiscale, e un team di protezione dell'infanzia producono tutti cose che i cittadini non possono semplicemente rifiutare di acquistare, e il "cliente" (il contribuente, il reo, il bambino) è spesso una persona diversa dal principale politico che autorizza il bilancio. *Creating Public Value: Strategic Management in Government* di Moore (Harvard University Press, 1995) fornisce la disciplina mancante: un manager dovrebbe essere in grado di dichiarare (1) quale valore pubblico crea la sua iniziativa, (2) da dove viene la sua legittimità e il finanziamento per perseguirlo — un ministro, un consiglio, un mandato, una sovvenzione — e (3) se la sua organizzazione può effettivamente realizzarlo con le persone, la tecnologia, e i processi a disposizione. Un programma che ottiene un buon punteggio solo su uno o due lati del triangolo non è ancora giustificato, per quanto bene intenzionato.

Questo conta praticamente perché la maggior parte dei fallimenti software nel settore pubblico non sono fallimenti tecnologici. Un sistema può essere tecnicamente eccellente e operativamente realizzabile e comunque fallire perché nessuno nell'ambiente legittimante — ministri, comitati di controllo, il pubblico — voleva effettivamente la cosa per cui ottimizza. Il servizio digitale Universal Credit e l'NHS National Programme for IT sono entrambi citati nella letteratura britannica sull'amministrazione pubblica come casi in cui i lati operativo e di legittimità del triangolo erano sfasati rispetto al lato della missione.

## Il calcolo

Il valore pubblico è un framework, non una formula, ma struttura casi di investimento altrimenti vaghi in tre domande verificabili:

```
Test del triangolo strategico — procedi solo se tutti e tre
sono validi:

1. Legittimità e supporto: Chi ha autorizzato questo, e
   l'ambiente autorizzante (parlamento, ministro, consiglio,
   board, opinione pubblica) lo supporta ancora mentre le
   risorse vengono impegnate?

2. Valore pubblico: Quale bene specifico e descrivibile
   produce questo per i cittadini o la società — sicurezza,
   salute, opportunità, fiducia, equità — e per chi?

3. Capacità operativa: Può l'organizzazione effettivamente
   realizzarlo con il personale, la tecnologia, i partner, e
   l'autorità legale attuali — o un piano credibile per
   acquisirli?
```

Un'iniziativa debole tipicamente fallisce almeno un lato: tecnicamente realizzabile ma senza mandato (un progetto pilota di condivisione dati che nessuno ha approvato); popolare ma non realizzabile (un servizio digitale promesso senza capacità ingegneristica); o autorizzato e realizzabile ma vuoto di valore (una dashboard che nessuno usa).

## Esempio pratico

**Autorità locale**: un team digitale comunale propone uno strumento AI di triage per le richieste di sussidio abitativo.

- *Legittimità*: il gabinetto del comune ha approvato una strategia digital-first, ma i membri eletti responsabili della sicurezza sociale non hanno approvato specificamente il processo decisionale automatizzato — un vuoto, non un via libera.
- *Valore pubblico*: l'elaborazione più rapida (beneficio dichiarato: da 10 giorni a 2 giorni) è un valore reale solo se i richiedenti non vengono respinti erroneamente; la dichiarazione di valore deve includere la precisione, non solo la velocità.
- *Capacità operativa*: il comune ha un solo data scientist e nessun processo di monitoraggio del modello, quindi il tempo di risposta dichiarato di 2 giorni non è attualmente realizzabile al tasso di errore dichiarato.

Due lati su tre falliscono. Il framework di Moore dice: non procedere con questo scope — prima assicura un'autorizzazione esplicita per le decisioni automatizzate e costruisci capacità di monitoraggio, o il "valore pubblico" dichiarato nel caso aziendale è fittizio.

**Governo centrale**: il servizio di dichiarazione online di un'autorità fiscale ha una forte legittimità (mandato statutario) e una forte capacità operativa (un team esistente che lavora in modo affidabile) ma un valore pubblico debole se l'adozione è bassa perché gli esclusi digitali — vedi [inclusione digitale](../inclusione-digitale/) — vengono spinti in un canale che non possono usare. Il triangolo espone ciò che una dashboard solo-erogazione nasconderebbe.

## Collegamento con lo sviluppo software

Il valore pubblico è il concetto ombrello sotto cui si trova tutto questo repository: [value for money](../value-for-money/) fornisce il test economia/efficienza/efficacia per se le risorse sono state usate bene; [costo opportunità nella spesa pubblica](../costo-opportunità-nella-spesa-pubblica/) prezza cosa altro avrebbero potuto fare i soldi; e [addizionalità e peso morto](../addizionalità-e-peso-morto/), [spostamento e attribuzione](../spostamento-e-attribuzione/), e [analisi controfattuale](../analisi-controfattuale/) insieme testano se il valore dichiarato è reale piuttosto che assunto. Per gli ingegneri, il triangolo strategico è un utile pre-mortem per qualsiasi decisione di prodotto nel settore pubblico:

- Prima di definire una funzionalità, chiedi chi l'ha autorizzata e se quell'autorizzazione è ancora valida — una funzionalità costruita per un ministro che è poi cambiato potrebbe aver silenziosamente perso il suo lato di legittimità.
- Tratta "possiamo costruirlo" e "dovremmo costruirlo" come domande genuinamente separate; la capacità ingegneristica risponde solo al terzo lato del triangolo.
- I documenti dei requisiti di prodotto per i servizi pubblici dovrebbero dichiarare esplicitamente la rivendicazione di valore pubblico, non solo la user story, perché il valore utente e il valore pubblico non sono sempre la stessa cosa (vedi [risultati contro output](../risultati-contro-output/)).

## Insidie

- **Trattare la capacità operativa come giustificazione sufficiente.** "Possiamo costruirlo" risponde solo a un lato del triangolo; i team con forte capacità di erogazione spediscono regolarmente cose che nessuno ha autorizzato a volere e che non creano alcun bene pubblico descrivibile.
- **Confondere legittimità con legalità.** Un programma può essere legale e ancora mancare del supporto politico e pubblico necessario per sostenerlo attraverso una fase di erogazione difficile; la copertura legale non è lo stesso di un mandato.
- **Assumere che il valore pubblico sia qualunque cosa il dipartimento committente dica che sia.** Il modello di Moore richiede che la rivendicazione di valore sia verificabile contro gli interessi effettivi dei cittadini, non semplicemente asserita dal finanziatore — altrimenti il framework collassa in autocertificazione.

## Fonti

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press,
  1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
