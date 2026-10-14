# Responsabilità basata sui risultati (OBA)

La Responsabilità basata sui risultati (Outcomes-Based Accountability, OBA), chiamata anche Results-Based Accountability (RBA), è il quadro di Mark Friedman per separare due domande che il reporting del settore pubblico abitualmente fonde insieme: "la popolazione sta bene?" (responsabilità di popolazione) e "questo specifico programma sta andando bene?" (responsabilità di performance). Confondere le due è, nel racconto di Friedman, il singolo motivo più comune per cui programmi ben gestiti vengono accusati di tendenze di popolazione che non hanno mai avuto il potere di muovere.

## Perché è importante

Friedman ha esposto il quadro in *Trying Hard Is Not Good Enough* (2005), argomentando che la maggior parte del reporting pubblico o annega i decisori in statistiche a livello di popolazione che nessuna singola agenzia controlla (tasso di gravidanza adolescenziale, tasso di disoccupazione, aspettativa di vita) o li annega in conteggi di attività a livello di programma (clienti visti, segnalazioni fatte) che non dicono nulla su se la vita di qualcuno sia migliorata. Il contributo della RBA è un vocabolario piccolo e disciplinato che mantiene i due separati: i risultati di popolazione (condizioni di benessere per un'intera popolazione, come "i bambini nascono sani") non appartengono a nessuna singola agenzia e richiedono molti partner che si muovono insieme; le misure di performance (quanto bene un programma specifico serve i suoi clienti specifici) appartengono a un'agenzia e dovrebbero essere giudicate solo contro ciò che quell'agenzia può effettivamente influenzare. Le "tre domande di performance" di Friedman — quanto abbiamo fatto, quanto bene l'abbiamo fatto, e qualcuno sta meglio? — sono ora incorporate attraverso il contratto dei servizi umani statali e di contea negli Stati Uniti e, tramite la consulenza e il toolkit allineati alla RBA Clear Impact, ampiamente usate nel commissionamento del governo locale britannico e del Commonwealth. La posta in gioco pratica è contrattuale: un programma abitativo non dovrebbe essere definanziato perché il tasso di senzatetto della città è salito per cause macroeconomiche fuori dalla sua portata, ma dovrebbe assolutamente essere definanziato se i suoi stessi clienti non vengono alloggiati.

## Il calcolo

```
Responsabilità di popolazione (il "quadro più ampio" che una
comunità, regione, o nazione condivide):
  Risultato      — una condizione di benessere (es. "i
                   residenti sono economicamente sicuri")
  Indicatore(i)  — una misura di quella condizione (es. tasso
                   di disoccupazione, reddito familiare
                   mediano)
  → nessun singolo programma possiede l'indicatore; il
    movimento richiede molti contributori

Responsabilità di performance (di cosa è responsabile un
programma):
  Quanto abbiamo fatto?        — volume di attività (clienti
                                  serviti, unità erogate)
  Quanto bene l'abbiamo fatto? — qualità/efficienza (%
                                  completamento programma,
                                  costo per cliente)
  Qualcuno sta meglio?         — il risultato che conta (% in
                                  occupazione 6 mesi dopo il
                                  programma, prima/dopo o
                                  contro un gruppo di
                                  confronto)

Un programma è giudicato sulla terza domanda di performance,
mai direttamente sull'indicatore di popolazione, a meno che
la sua scala e design potessero plausibilmente muoverlo da
solo.
```

## Esempio pratico

**Programma di supporto all'occupazione finanziato dalla città**, 500 partecipanti/anno, commissionato da un'autorità locale sotto un quadro di performance in stile RBA:

```
Indicatore di popolazione (contesto, non la scorecard del
programma):
  Tasso di disoccupazione della città: 6,2% (in aumento dal
  5,8% dell'anno precedente, guidato dalla chiusura di una
  fabbrica fuori dal controllo del programma)

Misure di performance (la responsabilità effettiva del
programma):
  Quanto:       500 partecipanti iscritti (obiettivo 480) —
                raggiunto
  Quanto bene:  78% tasso di completamento; costo per
                completatore = £340.000 / 390 completatori ≈
                £872
  Sta meglio:   di 390 completatori, 260 in occupazione
                sostenuta a 6 mesi = 66,7% contro il 41% di un
                gruppo di confronto abbinato (vedi
                analisi-controfattuale)
```

Sotto una lettura di responsabilità di popolazione, il programma sembra fallire — il tasso di disoccupazione della città è salito sotto la sua vigilanza. Sotto la lettura di responsabilità di performance della RBA, il programma sta riuscendo: ha raggiunto il suo obiettivo di volume, ha mantenuto la qualità stabile, e ha prodotto un risultato occupazionale 25,7 punti percentuali sopra un gruppo di confronto abbinato, mentre l'indicatore di popolazione si è mosso per ragioni (una chiusura di fabbrica) interamente fuori dal controllo del programma.

## Collegamento con lo sviluppo software

La RBA si mappa direttamente su una distinzione SRE familiare: gli indicatori di popolazione sono come metriche North Star a livello aziendale che nessun singolo team ingegneristico possiede da capo a coda (ricavi dell'azienda, quota di mercato), mentre le misure di performance sono come gli SLO propri di un team — le cose che le decisioni di design di quel team effettivamente muovono. Un dashboard che riporta entrambi senza etichettare quale è quale invita esattamente la misattribuzione che la RBA è stata costruita per prevenire: un ingegnere di guardia che viene accusato per una metrica che un team dipendente controlla. Quando si commissiona o si costruiscono strumenti di reporting per contratti di risultati, costruisci la triade "quanto / quanto bene / sta meglio" come campi di prima classe, separatamente filtrabili, piuttosto che un singolo KPI fuso — è la stessa disciplina di separare indicatori guida e ritardati nei [KPI del settore pubblico](../kpi-del-settore-pubblico/). La RBA è anche la logica di responsabilità sottostante al [pagamento a risultati e bond di impatto sociale](../pagamento-a-risultati-e-bond-di-impatto-sociale/): un contratto PbR può equamente pagare solo sulla misura di performance "sta meglio," mai sull'indicatore di popolazione, a meno che l'intervento non sia genuinamente il motore dominante di esso.

## Insidie

- **Pagare o penalizzare un programma contro un indicatore di popolazione che non può controllare**: questo è il singolo errore che la RBA esiste per prevenire; traccia sempre se il programma sia un contributore maggiore o minore al risultato di popolazione prima di attaccarci conseguenze.
- **Riportare "quanto abbiamo fatto" come se fosse "sta meglio"**: i conteggi di attività (clienti visti) sono i dati più facili da raccogliere e i meno informativi; insisti che la domanda "qualcuno sta meglio" sia risposta con dati di risultato reali, idealmente contro un controfattuale (vedi [analisi-controfattuale](../analisi-controfattuale/)).
- **Trattare gli indicatori RBA come fissi per sempre**: il metodo di Friedman è esplicitamente iterativo — un ciclo "dati, storia, cosa funziona, piano d'azione" — non un esercizio di design della scorecard una tantum.
- **Nessun gruppo di confronto per "sta meglio"**: un cambiamento prima/dopo senza controfattuale confonde l'effetto del programma con la tendenza che la popolazione avrebbe mostrato comunque.

## Fonti

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
