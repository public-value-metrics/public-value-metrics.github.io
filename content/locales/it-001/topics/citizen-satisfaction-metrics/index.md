# Metriche di satisfazione del cittadino

Le metriche di satisfazione del cittadino misurano come le persone valutano la loro esperienza diretta di un servizio pubblico — distinte dalla fiducia nelle istituzioni in generale, e distinte da se il servizio abbia effettivamente raggiunto un buon risultato. Un servizio può essere ben apprezzato e inefficace, o efficace e sgradito; il divario tra i due è esso stesso informazione diagnostica che un team di erogazione dovrebbe osservare.

## Perché è importante

La satisfazione viene misurata a due altitudini diverse che vengono abitualmente confuse. A livello di servizio, la Performance Platform britannica ora ritirata e l'attuale manuale di servizio GOV.UK richiedono un'indagine di satisfazione per servizio (tipicamente una scala a cinque punti da "molto satisfatto" a "molto insatisfatto," amministrata al punto della transazione) come uno dei quattro KPI di servizio obbligatori — vedi [standard dei servizi e metriche di transazione](../service-standards-and-transaction-metrics/). A livello istituzionale, la UK Civil Service People Survey misura l'engagement e l'esperienza dei dipendenti attraverso ogni dipartimento del governo centrale annualmente, e separatamente il programma "Trust in Government" dell'OCSE indaga la fiducia pubblica nel governo nazionale attraverso gli stati membri, tracciando un pattern di declino e recupero di lungo periodo plasmato pesantemente da crisi (sia la crisi finanziaria del 2008 sia la pandemia COVID-19 hanno prodotto movimenti netti e visibili nelle cifre di fiducia dell'OCSE). Il motivo per cui gli ingegneri che costruiscono servizi rivolti ai cittadini devono tenere separati satisfazione e risultato è una modalità di fallimento conosciuta nel design dei servizi: un modulo digitale bellamente progettato e facile da usare per una richiesta di benefici può registrare satisfazione molto alta mentre la politica sottostante — regole di eligibilità, arretrati di elaborazione, importi del premio — lascia il richiedente non meglio di prima. La satisfazione misura l'interfaccia; non misura il valore erogato dietro di essa.

## Il calcolo

```
Satisfazione netta = % satisfatti (o molto satisfatti) −
                      % insatisfatti (o molto insatisfatti)
                      (risposte neutre/senza-opinione escluse
                      da entrambi i termini, ma contate nella
                      base di risposta per calcolare ogni
                      percentuale)

Divario satisfazione-risultato = punteggio di satisfazione −
                      punteggio di raggiungimento del risultato
                      (entrambi normalizzati 0-100; un grande
                      divario positivo segnala un servizio che
                      "si sente bene" ma sotto-erogano sulla
                      sostanza)

Indice di fiducia (stile OCSE) = % di intervistati che
                      rispondono "sì" a
                      "hai fiducia nel [governo nazionale]?"
                      tracciato come serie temporale,
                      tipicamente disaggregato per età,
                      reddito, e istruzione
```

## Esempio pratico

**Servizio di e-fatturazione della tassa comunale di un'autorità locale**: un'indagine di satisfazione al punto di transazione riuscita mostra 2.400 intervistati: 1.650 satisfatti/molto satisfatti, 250 insatisfatti/molto insatisfatti, 500 neutri.

```
Satisfazione netta = (1.650/2.400 × 100) − (250/2.400 × 100)
                    = 68,75% − 10,42%
                    = +58,3 satisfazione netta
```

Questo sembra forte in isolamento. Ma l'indagine viene mostrata solo agli utenti che completano *con successo* la transazione — un bias di misurazione conosciuto (vedi insidie sotto). Abbinarlo con la metrica del tasso di completamento da [standard dei servizi e metriche di transazione](../service-standards-and-transaction-metrics/) mostra che il completamento è solo il 71%, il che significa:

```
La vera satisfazione della popolazione è non misurata per il
29% che ha abbandonato il percorso — plausibilmente la coorte
più insatisfatta, poiché l'abbandono stesso è un forte segnale
negativo che l'indagine non catturerà mai.
```

**Illustrazione a livello nazionale (struttura di una serie di fiducia in stile OCSE)**: la fiducia nel governo nazionale riportata al 42% nell'anno 1, scesa al 34% nell'anno 2 (un anno di crisi) e recuperata al 39% nell'anno 3 — una traiettoria tipica del pattern di shock-e-recupero-parziale che l'OCSE documenta attraverso gli stati membri dopo crisi maggiori.

## Collegamento con lo sviluppo software

Strumenta le indagini di satisfazione a ogni punto di uscita significativo di un percorso utente, non solo al completamento riuscito — l'errore ingegneristico singolo più comune in questo spazio, e uno che silenziosamente converte una metrica di satisfazione in una metrica vanità con bias di sopravvivenza. Dove possibile, abbina il punteggio di satisfazione con una metrica di completamento o risultato sullo stesso dashboard così un team non può celebrare la satisfazione in aumento mentre il completamento silenziosamente scende (vedi [costo per transazione](../cost-per-transaction/) e [inclusione digitale](../digital-inclusion/) per chi viene escluso dal campionamento della satisfazione digitale fin dall'inizio — gli utenti non-digitali e digitali-assistiti sono sistematicamente sotto-rappresentati nelle indagini in-servizio). I dati di satisfazione e fiducia alimentano anche direttamente la gamba di legittimità del [triangolo strategico di Moore](../public-value/), e appartengono alle prospettive "cliente" e "legittimità" di una [scorecard del valore pubblico](../public-value-scorecard/) — vedi [metriche di fiducia e legittimità](../trust-and-legitimacy-metrics/) per la controparte a livello istituzionale di questa metrica a livello di servizio.

## Insidie

- **Bias di sopravvivenza nelle indagini al punto di completamento**: gli utenti che abbandonano un percorso non vedono mai l'indagine, quindi un punteggio di satisfazione in-servizio alto può coesistere con un tasso di completamento basso e una grande popolazione invisibile di non-completatori insatisfatti.
- **Trattare la satisfazione come un proxy per il risultato**: un'interfaccia ben progettata per una politica mal progettata valuta bene sulla satisfazione e male sul risultato — riporta sempre entrambi, mai uno come sostituto dell'altro.
- **Campioni piccoli e non rappresentativi riportati con falsa precisione**: un punteggio di satisfazione da poche centinaia di intervistati auto-selezionati riportato a una cifra decimale implica una confidenza che la dimensione del campione non può supportare.
- **Ignorare la disaggregazione demografica**: le cifre di fiducia e satisfazione nazionali che non sono suddivise per età, reddito, disabilità, o accesso digitale possono mascherare esperienze marcatamente divergenti attraverso i gruppi — un pattern per cui i rilasci "Trust in Government" dell'OCSE stessi disaggregano esplicitamente.

## Fonti

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
