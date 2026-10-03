# Valore dei dati aperti

Il valore dei dati aperti è il problema di stimare cosa valgono i dati governativi e pubblici quando non hanno un prezzo: non vengono venduti, quindi non c'è una linea di ricavo, eppure rilasciarli (record meteorologici, orari dei trasporti, confini dei codici postali, registri delle aziende) genera dimostrabilmente attività economica e sociale a valle. Valutarli bene conta perché "è gratuito rilasciarlo" e "non vale nulla" sono entrambi sbagliati, e un ingegnere software che decide se aprire un'API o un dataset ha bisogno di un argomento migliore di entrambi.

## Perché è importante

La stima top-down più citata viene dal report del 2013 del McKinsey Global Institute "Open data: Unlocking innovation and performance with liquid information", che ha posto il valore annuale potenziale dei dati aperti attraverso sette domini — istruzione, trasporti, prodotti di consumo, elettricità, petrolio e gas, salute, e finanza al consumo — a $3 trilioni a $5 trilioni all'anno globalmente, attraverso meccanismi inclusa maggiore trasparenza, abbinamento di offerta e domanda più efficientemente, e permettere nuovi prodotti e servizi costruiti sui dati. Quella cifra è una stima di scenario, non un risultato misurato, ed è abitualmente citata erroneamente come se fosse ricavo che il governo potrebbe catturare direttamente, quando il valore si accumula principalmente a terze parti — aziende, ricercatori, cittadini — che usano i dati, che è precisamente il punto di aprirli piuttosto che venderli. L'Open Data Institute britannico, co-fondato da Sir Tim Berners-Lee e Sir Nigel Shadbolt nel 2012, ha da allora costruito un corpo di casi di studio più granulari, bottom-up — settore per settore, dataset per dataset — che sono molto più utili per un vero caso aziendale della cifra principale di McKinsey, perché mostrano il meccanismo di creazione di valore, non solo la sua dimensione aggregata.

## Il calcolo

I dati aperti non hanno un prezzo di mercato, quindi i metodi di valutazione ne sostituiscono uno; tre approcci ricorrono, e nessuno è sufficiente da solo:

```
1. Metodo del costo evitato / costo di sostituzione:
   valore ≈ ciò che gli utenti avrebbero pagato per
   produrre o licenziare essi stessi i dati equivalenti —
   un limite inferiore, ignora il valore creato da usi che
   il produttore originale non ha mai anticipato

2. Metodo analogo di mercato / attività a valle:
   valore ≈ ricavo o risparmi generati da aziende/servizi
   costruiti sui dati (es. app satnav costruite su mappe e
   dati di traffico aperti) — cattura attività economica
   reale ma è difficile attribuire nettamente al rilascio
   dei dati stesso (vedi addizionalità-e-peso-morto)

3. Metodo contingente/preferenza-dichiarata:
   valore ≈ ciò che gli utenti dicono che pagherebbero, o
   il tempo che dicono che risparmia loro — vedi
   valutazione-della-preferenza-dichiarata per il metodo
   generale e i suoi bias

Nessuno di questi produce una cifra così netta quanto un
prezzo di mercato; casi aziendali di dati aperti credibili
triangolano attraverso due o più, e sono espliciti su
quale meccanismo stia facendo il lavoro.
```

## Esempio pratico

**Rilascio illustrativo di dati di mappatura/indirizzi nazionali** (metodologia secondo casi di studio in stile ODI, cifre illustrative della scala che tali studi tipicamente trovano):

```
Stima del costo evitato:
  Aziende che altrimenti licenzierebbero commercialmente
  dati equivalenti di abbinamento degli indirizzi, a un
  costo di licenza medio stimato di £4.000/anno, attraverso
  circa 15.000 PMI stimate che ora usano il dataset aperto
  gratuito = 15.000 × £4.000 = £60.000.000/anno nel solo
  costo di licenza evitato

Stima dell'attività a valle (più speculativa, necessita di
un controfattuale):
  Nuovi prodotti di instradamento di consegne e logistica
  costruiti sui dati aperti che non esisterebbero, o
  sarebbero materialmente peggiori, senza di essi —
  richiede un confronto contro il controfattuale dei dati
  che rimangono chiusi o licenziati commercialmente
  (analisi-controfattuale), perché parte di quell'attività
  accadrebbe comunque su dati pagati a un prezzo più alto,
  che è peso morto nel senso "valore creato aprendolo"

Un caso aziendale defendibile riporta la cifra del costo
evitato come il solido limite inferiore, e tratta la cifra
dell'attività a valle come uno scenario di limite superiore,
non un fatto.
```

## Collegamento con lo sviluppo software

Per gli ingegneri, la domanda pratica del valore dei dati aperti è di solito più stretta delle cifre principali nazionali: aprire questa specifica API o dataset (piuttosto che tenerlo dietro un accordo di partner) aumenta il riutilizzo abbastanza da giustificare il costo continuo di documentarlo, versionarlo, e supportarlo come interfaccia pubblica? Quel costo di manutenzione è reale ed è la controparte dell'economia costruisci-una-volta-riusa-spesso del [governo come piattaforma](../government-as-a-platform/) — i due argomenti sono cugini stretti, uno riguarda codice e infrastruttura condivisi, l'altro dati condivisi. Qualsiasi rivendicazione di valore dei dati aperti dovrebbe essere controllata contro l'[addizionalità e peso morto](../additionality-and-deadweight/) prima di entrare in un caso aziendale: attività che sarebbe accaduta comunque, su dati licenziati commercialmente, non è valore che l'*apertura* ha creato.

## Insidie

- **Citare la cifra McKinsey di $3-5 trilioni come specifica del Regno Unito o come la quota di questo dataset**: è una stima di scenario globale a sette settori del 2013 — usarla come moltiplicatore preciso per un singolo dataset nazionale misrappresenta cosa sia il numero.
- **Nessun controfattuale**: rivendicare credito per tutta l'attività economica a valle costruita sui dati aperti, senza chiedere quanta di essa sarebbe accaduta comunque su dati pagati o licenziati a un prezzo più alto (vedi [addizionalità e peso morto](../additionality-and-deadweight/) e [analisi controfattuale](../counterfactual-analysis/)).
- **Confondere il costo di produzione con il valore creato**: un dataset che era costoso da raccogliere non è automaticamente di valore da rilasciare, e uno economico non è automaticamente di basso valore — il valore segue l'uso a valle, non il costo a monte.
- **Ignorare il costo di manutenzione continuo di "aperto"**: pubblicare un'estrazione CSV una tantum non è lo stesso impegno di gestire un'API aperta documentata, versionata, e supportata — sotto-finanziare la seconda dopo l'annuncio del lancio è una modalità di fallimento comune.

## Fonti

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
