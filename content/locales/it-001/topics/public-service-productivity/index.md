# Produttività dei servizi pubblici

La produttività dei servizi pubblici misura quanto efficientemente la spesa pubblica converte gli input (personale, capitale, beni e servizi) in output aggiustati per qualità, per servizi — salute, istruzione, polizia, assistenza sociale — che non hanno un prezzo di mercato e quindi nessuna cifra di ricavo in cui dividere i costi. L'Office for National Statistics britannico pubblica questa serie dalla metà degli anni 2000 e rimane il tentativo nazionale metodologicamente più sviluppato di rispondere a "il governo sta diventando migliore o peggiore nel convertire denaro in servizi pubblici?"

## Perché è importante

In un mercato, la produttività è (valore dell'output) / (costo dell'input), e il valore dell'output è osservabile perché qualcuno lo paga. Una protesi d'anca, un posto scolastico, e una patuglia di polizia non hanno un prezzo di vendita, quindi ingenuamente puoi misurare solo gli *input* (cosa è stato spesso) — il che tenta i commentatori a trattare la spesa pubblica in aumento come automaticamente negativa, poiché più input con attività principale piatta sembra produttività in calo. La metodologia dell'ONS, esposta nelle sue pubblicazioni "Sources and Methods" per la produttività dei servizi pubblici, risolve questo costruendo un indice di *output* da volumi di attività (operazioni eseguite, alunni insegnati, crimini investigati) e poi *aggiustando per qualità* quell'indice di output — per la salute, incorporando tassi di sopravvivenza e tempi di attesa; per l'istruzione, incorporando il rendimento; per la polizia, incorporando risultati come la risoluzione dei casi — così che un servizio che fa lo stesso numero di operazioni ma raggiunge migliori tassi di sopravvivenza si registra come più produttivo, non semplicemente come più costoso. La scoperta principale che ricorre attraverso i rilasci dell'ONS è sobria per il settore: la produttività dei servizi pubblici britannici è caduta bruscamente durante la pandemia COVID-19 e secondo gli stessi rilasci dell'ONS della metà degli anni 2020 non si era ancora recuperata ai livelli del 2019 in diversi sotto-settori inclusa la sanità, anche mentre la spesa saliva — un divario che riformula "più finanziamento" e "più produttività" come due domande interamente separate.

## Il calcolo

```
Indice di output (volume) = Σ (attività_i × peso di costo
                              unitario relativo_i), pesato
                              per anno base attraverso tutte
                              le attività di servizio (es.
                              operazioni d'anca, operazioni
                              di cataratta, consultazioni dal
                              medico di famiglia), analogo a
                              un indice di volume
                              Laspeyres/Paasche

Aggiustamento per qualità = indice di output × fattore di
                            aggiustamento qualità (es.
                            incorporando un cambiamento nei
                            tassi di sopravvivenza, tempi di
                            attesa, rendimento, o recidiva
                            come un moltiplicatore sul volume
                            grezzo)

Indice di input = Σ (ore di lavoro × peso del costo del
                   lavoro) + (costo di beni/servizi,
                   deflazionato) + (consumo di capitale)

Crescita della produttività totale dei fattori = % di
  cambiamento nell'indice di output aggiustato per qualità
  − % di cambiamento nell'indice di input
```

## Esempio pratico

**Calcolo illustrativo della produttività del settore acuto del NHS** (la struttura segue la metodologia ONS):

```
Anno 1: indice di volume di output = 100,0 (anno base),
        indice di input = 100,0 → indice di produttività = 100,0

Anno 2: il volume di attività sale del 3,0% (più operazioni,
        più appuntamenti) ma il tempo medio di attesa
        peggiora, applicando uno sconto di aggiustamento
        qualità di −1,0%
        Indice di output aggiustato per qualità =
          100 × 1,030 × 0,990 = 101,97

        Gli input salgono: numero di personale +4,0%, altri
        costi (deflazionati) +1,5%, indice di input pesato =
          100 × 1,032 = 103,2

Crescita della produttività = (101,97 / 100 − 1) −
                               (103,2 / 100 − 1)
                             = 1,97% − 3,2% = −1,23 punti
                               percentuali

Interpretazione: l'attività è salita, ma gli input sono saliti
più velocemente e la qualità è leggermente scesa, quindi la
produttività — output per unità di input — è diminuita anche
se "più cura è stata erogata."
```

Questo è esattamente il pattern che i rilasci dell'ONS hanno ripetutamente riportato per parti del NHS post-pandemia: spesa in aumento e attività grezza in aumento che coesistono con produttività misurata in calo una volta contabilizzati sia l'aggiustamento per qualità sia la crescita degli input.

## Collegamento con lo sviluppo software

La produttività dei servizi pubblici è l'analogo a livello di popolazione dei dibattiti sulla produttività ingegneristica (story point rilasciati contro [metriche DORA](../dora-metrics-for-public-value/) contro [metriche di flusso](../flow-metrics-in-government-delivery/)): il throughput grezzo senza un aggiustamento per qualità è esattamente così fuorviante in un ospedale quanto "righe di codice rilasciate" lo è in un team software. I team che costruiscono pipeline di dati di performance per i dipartimenti dovrebbero trattare l'aggiustamento per qualità come uno stadio di trasformazione di prima classe e versionato, non una nota a piè di pagina — perché la credibilità stessa dell'ONS riposa su quell'aggiustamento essere trasparente, riproducibile, e rivisto mentre arrivano dati di qualità migliori (l'ONS rivede le stime di produttività degli anni passati mentre i dati di qualità sottostanti — es. tassi di sopravvivenza — vengono finalizzati, quindi qualsiasi sistema a valle che consuma queste statistiche deve gestire revisioni retrodatate, non solo aggiungere nuovi periodi). Si interseca anche direttamente con il [costo totale di proprietà](../total-cost-of-ownership-in-government-it/) e la [produttività dell'IA nel settore pubblico](../ai-productivity-in-the-public-sector/): un sistema che aumenta il volume di attività grezza senza migliorare o mantenere la qualità non è, secondo la definizione stessa dell'ONS, un miglioramento di produttività.

## Insidie

- **Trattare la crescita degli input come crescita di produttività**: più spesa che finanzia più personale produce più *attività*, non più *produttività*, a meno che anche l'output per unità di input non salga — i due sono abitualmente confusi nel commento politico.
- **Ignorare interamente l'aggiustamento per qualità**: un indice di output costruito solo da conteggi di attività grezzi mostrerà "guadagni di produttività" dal fare più di qualcosa di valore o qualità inferiore; l'aggiustamento per qualità dell'ONS esiste specificamente per catturare questo.
- **Confrontare indici di produttività attraverso sotto-settori senza abbinare la generazione metodologica**: la produttività della salute, istruzione, e polizia sono ciascuna costruite da fonti di dati di attività e qualità diverse su cicli di revisione diversi — un confronto incrociato ingenuo confronta strumenti incompatibili.
- **Leggere il calo di produttività di un singolo anno come una tendenza permanente**: le cifre di produttività dell'era pandemica e post-pandemica hanno mostrato significativa volatilità anno-su-anno mentre i dati di qualità stessi (es. liste d'attesa, recupero elettivo) cambiavano; l'ONS avvisa costantemente contro la sovra-interpretazione di movimenti di un singolo anno.

## Fonti

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
