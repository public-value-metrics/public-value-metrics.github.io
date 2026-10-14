# Valutazione della preferenza dichiarata

I metodi di preferenza dichiarata stimano il valore di un bene non di mercato chiedendo direttamente alle persone quanto sarebbero disposte a pagare per esso, o disposte ad accettare come compensazione per rinunciarci, tipicamente tramite un'indagine strutturata che descrive uno scenario ipotetico. La valutazione contingente è la tecnica più conosciuta della famiglia.

## Perché è importante

L'Annex 2 del Green Book (guida supplementare sulla valutazione degli impatti non di mercato) approva i metodi di preferenza dichiarata per beni che non hanno alcuna transazione di mercato osservabile da cui inferire il valore — qualità dell'aria, biodiversità, protezione dalle inondazioni, il valore di esistenza di un paesaggio che qualcuno potrebbe non visitare mai (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Il Defra ha pubblicato la propria guida sulla preferenza dichiarata per la valutazione ambientale specificamente perché così tanto del valore ambientale (conservazione dell'habitat, qualità dell'acqua) non ha alcun mercato proxy, a differenza, diciamo, del rumore, che almeno correla con i prezzi delle case osservabili (vedi [valutazione della preferenza rivelata](../valutazione-della-preferenza-rivelata/)).

L'attrattiva centrale della preferenza dichiarata — può valutare letteralmente qualsiasi cosa, incluso beni in cui nessuno ha mai transato — è anche la fonte del suo problema di credibilità. Poiché i rispondenti non stanno effettivamente spendendo denaro, le indagini di valutazione contingente sono vulnerabili al bias ipotetico (le persone esagerano la disponibilità a pagare quando non c'è un vero vincolo di bilancio), effetti di embedding (lo stesso bene viene valutato diversamente a seconda di cosa altro è nell'indagine), e bias del punto di partenza nei design di gioco di offerta. Il panel NOAA del 1993 sulla valutazione contingente, convocato dopo il contenzioso sulla fuoriuscita di petrolio Exxon Valdez, ha stabilito standard di design — un formato referendum binario "pagheresti £X, sì/no" piuttosto che un'offerta aperta, e promemoria obbligatori del vero vincolo di bilancio del rispondente — che rimangono lo standard di riferimento per indagini defendibili.

## Il calcolo

```
Valutazione contingente (formato referendum):
  Presenta una scelta binaria: "pagheresti £X all'anno per
  il risultato Y? sì/no"
  Varia X casualmente tra i rispondenti.
  Adatta la disponibilità a pagare come funzione del tasso
  di risposta sì/no a ciascun X.

DAP media = area sotto la curva di domanda stimata
Valore aggregato = DAP media × popolazione interessata

Variante dell'esperimento di scelta (modellazione a scelta
discreta):
  Presenta ai rispondenti scelte ripetute tra bundle di
  attributi (incluso un attributo di costo), stima i
  prezzi implicit per ogni attributo non-costo dai
  compromessi che i rispondenti rivelano.
```

La variante dell'esperimento di scelta è generalmente preferita nella pratica britannica attuale rispetto alla valutazione contingente a domanda singola perché costringere i rispondenti a scambiare diversi attributi contro il costo ripetutamente produce stime internamente più coerenti e più difficili da manipolare di una singola domanda sì/no.

## Esempio pratico

**Governo nazionale**: il Defra commissiona un'indagine di valutazione contingente per valutare un programma di miglioramento della qualità dell'acqua di un fiume. Un'indagine in formato referendum su 2.000 famiglie trova che il 62% pagherebbe £40/anno tramite un ipotetico supplemento sulla bolletta dell'acqua, e la curva di domanda stimata dà una disponibilità a pagare media di £28/anno per famiglia.

```
DAP media = £28/famiglia/anno
Famiglie nel bacino = 340.000
Valore annuale aggregato = £28 × 340.000 = £9,52m/anno

Su un periodo di valutazione di 20 anni al tasso di sconto
del 3,5% (fattore di rendita ≈ 14,2):
VA(beneficio) ≈ £9,52m × 14,2 ≈ £135m
```

Questa cifra aggregata viene poi confrontata con il lato costo dell'[analisi costo-beneficio sociale](../analisi-costo-beneficio-sociale/) del programma. Il Green Book richiede che questo tipo di evidenza di preferenza dichiarata venga riportato insieme al suo intervallo di confidenza e metodologia di indagine, non come una nuda stima puntuale, precisamente perché il numero sottostante è più fragile di un prezzo di mercato.

**Organizzazione benefica**: un trust del patrimonio indaga visitatori e non-visitatori sulla disponibilità a pagare per prevenire la chiusura di un edificio storico che nessuno dei due gruppi necessariamente visita (il suo valore di esistenza). Poiché i non-visitatori che non vedranno mai l'edificio riportano ancora una DAP positiva, l'indagine cattura il valore di esistenza e di eredità che un semplice conteggio di ricavi da biglietto dei visitatori (un proxy di preferenza rivelata) perderebbe completamente — mostrando il genuino vantaggio della preferenza dichiarata dove non esiste alcuna transazione di mercato di alcun tipo per rivelare il valore.

## Collegamento con lo sviluppo software

I metodi di preferenza dichiarata raramente si applicano direttamente al lavoro di sviluppo software, ma gli ingegneri che costruiscono piattaforme di consultazione dei cittadini, strumenti di partecipazione al bilancio, o infrastrutture di indagine pubblica spesso stanno costruendo lo strumento da cui l'economia dipende. Ottenere corretti i dettagli di design dell'indagine — importi di offerta randomizzati, framing referendum binario piuttosto che domande aperte, promemoria espliciti del vincolo di bilancio — non è una gentilezza UX, è ciò che rende defendibile la valutazione risultante sotto controllo; un'indagine in-app mal progettata può invalidare mesi di successiva analisi economica. Vedi [metriche di satisfazione del cittadino](../metriche-di-satisfazione-del-cittadino/) per la disciplina più generale di estrarre dati di opinione pubblica che porteranno peso analitico.

## Insidie

- **Domande aperte "quanto pagheresti?".** Queste sono molto più propense a bias strategici e di ancoraggio del framing referendum binario; la raccomandazione del panel NOAA di usare un formato referendum esiste precisamente perché l'elicitazione aperta performa male.
- **Nessun promemoria del vero vincolo di bilancio del rispondente.** Senza di esso, la DAP dichiarata regolarmente eccede ciò che le stesse persone pagherebbero quando è in gioco un vero compromesso di bilancio — bias ipotetico.
- **Effetti di embedding ignorati.** Lo stesso bene valutato da solo contro valutato come parte di un bundle più ampio produce stime di DAP diverse; riporta cosa altro, se qualcosa, era nel frame dell'indagine.
- **Trattare la stima puntuale di una singola indagine come definitiva.** La pratica del Green Book si aspetta un intervallo e una discussione dei bias conosciuti, non un nudo numero portato avanti nella tabella costo-beneficio come se fosse un prezzo di mercato.

## Fonti

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
