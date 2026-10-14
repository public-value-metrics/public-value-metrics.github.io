# Prezzo ombra

Un prezzo ombra è un valore stimato assegnato a un bene, risorsa, o esternalità che non ha un prezzo di mercato osservabile, o il cui prezzo di mercato è distorto e non riflette il suo vero valore sociale. La valutazione governativa si basa su un piccolo set di prezzi ombra ufficiali — carbonio, tempo non lavorativo, lavoro disoccupato — pubblicati centralmente affinché ogni dipartimento usi lo stesso numero.

## Perché è importante

I prezzi ombra esistono perché l'[analisi costo-beneficio sociale](../analisi-costo-beneficio-sociale/) non può funzionare senza un valore monetario per ogni costo e beneficio, e diversi tra i più consequenziali — una tonnellata di carbonio emessa, un'ora del tempo di un pendolare, un'ora di lavoro altrimenti disoccupato — non hanno alcun prezzo di mercato, o un prezzo di mercato che misrappresenta il loro vero costo sociale. Il HM Treasury e il Department for Energy Security and Net Zero pubblicano congiuntamente il prezzo ombra del carbonio usato in tutta la valutazione del governo britannico (<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>), derivato non da alcun prezzo di mercato del carbonio ma da un approccio coerente con l'obiettivo: il valore del carbonio è fissato al costo di abbattimento marginale necessario per raggiungere i budget di carbonio legislati del Regno Unito, il che è una logica fondamentalmente diversa dall'osservare per cosa il carbonio effettivamente si scambia sull'Emissions Trading Scheme dell'UE o del Regno Unito.

Il tasso del salario ombra segue una logica simile sul lato del lavoro. Impiegare qualcuno che altrimenti sarebbe stato disoccupato non costa alla società il suo salario pieno — parte di quel salario è un trasferimento da pagamenti di benefici rinunciati e tempo di tempo libero/ricerca perso piuttosto che un nuovo prelievo netto sulle risorse della società — quindi la guida del Green Book fissa un prezzo ombra sotto il salario di mercato per il lavoro tratto dalla disoccupazione, riflettendo il vero costo opportunità di quel lavoro (vedi [costo opportunità nella spesa pubblica](../costo-opportunità-nella-spesa-pubblica/)) piuttosto che il suo prezzo di mercato.

## Il calcolo

```
Prezzo ombra del carbonio (struttura illustrativa, valori attuali dallo
strumento ufficiale dei valori del carbonio BEIS/DESNZ — non usare
cifre obsolete):
  Valore del settore scambiato: informato dalle traiettorie del prezzo
    delle quote ETS
  Valore del settore non scambiato (coerente con l'obiettivo): fissato
    al costo marginale di abbattimento necessario per raggiungere i
    budget di carbonio legislati, in aumento nel tempo mentre le
    opzioni di abbattimento più facili si esauriscono
  Applicato come: £/tonnellata CO2e × tonnellate emesse o abbattute
    dall'opzione, scontate al tasso di sconto sociale per gli anni
    futuri

Tasso del salario ombra (TSO):
  TSO = Salario di mercato − (valore del tempo libero/ricerca
                               rinunciato risparmiato + valore dei
                               pagamenti di welfare non più pagati)
  Tipicamente espresso come una frazione del salario di mercato (es.
    TSO = 0,6 × salario di mercato in un'area ad alta disoccupazione,
    secondo la guida dell'Annex A del Green Book sui mercati del
    lavoro con capacità di riserva)
```

Entrambe le cifre sono convenzioni politiche fissate centralmente, non osservazioni di mercato empiriche — l'intero punto di un prezzo ombra è sostituire un mercato mancante o distorto, quindi una valutazione che ne usa uno deve citare la fonte ufficiale corrente piuttosto che derivare la propria cifra, precisamente affinché la valutazione di ogni dipartimento sia comparabile.

## Esempio pratico

**Governo nazionale**: la valutazione di uno schema di difesa dalle inondazioni stima che eviti 400 tonnellate di emissioni di CO2e all'anno (tramite ridotto uso di impianti di emergenza e ridotto carbonio incorporato da ricostruzione evitata) su una vita di valutazione di 30 anni, confrontata contro una baseline "fai il minimo".

```
Prezzo ombra illustrativo del carbonio: £280/tonnellata CO2e (anno 1,
  in aumento durante il periodo di valutazione secondo il programma
  ufficiale dei valori del carbonio non scambiato)
Beneficio del carbonio dell'anno 1 = 400 × £280 = £112.000
```

Poiché il programma ufficiale fa *aumentare* il valore del carbonio durante il periodo di valutazione (riflettendo budget di carbonio che si restringono), l'analista deve applicare il valore corretto specifico per anno per ogni anno del flusso di 30 anni, non un tasso fisso — usare il valore dell'anno 1 per tutto il periodo sottostimerebbe i beneficî degli anni successivi e distorcerebbe la classifica contro design alternativi di difesa dalle inondazioni con profili di carbonio diversi.

**Autorità locale**: il programma di supporto all'occupazione di un comune per residenti disoccupati di lungo termine colloca 150 persone in lavori pagati £11/ora. Valutare questo usando il salario di mercato pieno accrediterebbe al programma £11 × ore lavorate come beneficio sociale, ma l'approccio del tasso del salario ombra riconosce che questi non erano lavoratori tratti da altri lavori — il vero costo opportunità del loro lavoro prima del programma era basso.

```
Salario di mercato: £11,00/ora
Tasso del salario ombra (illustrativo, alta disoccupazione locale):
  0,6 × salario di mercato = £6,60/ora
Beneficio sociale netto attribuibile per ora lavorata ≈
  £11,00 − £6,60 = £4,40/ora
  (il valore "extra" creato muovendo lavoro genuinamente inattivo
   nella produzione, distinto dal salario stesso, che è
   largamente un trasferimento)
```

Questo è il motivo per cui le valutazioni dei programmi occupazionali in aree ad alta disoccupazione possono mostrare un valore sociale netto positivo anche quando lo stesso programma, eseguito in un'area a piena occupazione dove il lavoro spiazzato sarebbe semplicemente tratto da altri lavori, non lo farebbe.

## Collegamento con lo sviluppo software

Il prezzo ombra raramente tocca direttamente l'erogazione software, ma conta ogni volta che un caso aziendale rivendica un beneficio di carbonio o sociale da un cambiamento IT — un consolidamento di data center che rivendica risparmi di carbonio, o un servizio senza carta che rivendica stampa e affrancatura di carbonio evitate, deve usare il prezzo ombra ufficiale corrente del carbonio piuttosto che una cifra inventata, e deve applicare il programma corretto anno-per-anno piuttosto che un tasso fisso, esattamente come con qualsiasi altro input di valutazione del Green Book. Vedi [costo totale di proprietà nel governo IT](../costo-totale-di-proprietà-nel-governo-it/) e [valore della cybersicurezza del settore pubblico](../valore-della-cybersicurezza-del-settore-pubblico/), entrambi i quali spesso necessitano di un prezzo ombra per un input difficile da monetizzare (rischio di violazione, tempo di inattività) insieme a elementi costati direttamente.

## Insidie

- **Usare una cifra obsoleta del carbonio o del salario.** Entrambi i valori sono rivisti periodicamente dalla guida centrale; una valutazione costruita su una cifra superata non sopravviverà al controllo del Treasury.
- **Applicare un prezzo ombra del carbonio fisso attraverso una valutazione multi-decennale.** Il programma ufficiale aumenta nel tempo; usare il valore dell'anno 1 per tutto il periodo misrappresenta il profilo di beneficî o costi.
- **Confondere il salario ombra con uno sconto sulla paga effettiva del lavoratore.** Il tasso del salario ombra aggiusta la valutazione *della valutazione stessa* dell'input di lavoro, non il salario che il lavoratore è effettivamente pagato — confondere i due invita a (incorrettamente) giustificare paga sotto il mercato.
- **Derivare un prezzo ombra su misura invece di usare quello ufficiale.** I prezzi ombra sono convenzioni politiche precisamente affinché le valutazioni siano comparabili attraverso i dipartimenti; una cifra inventata localmente, per quanto ben ragionata, rompe quella comparabilità.

## Fonti

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
