# Database dei costi unitari

Un database dei costi unitari è una libreria di proxy finanziari pre-ricercati e basati su evidenza per risultati sociali — il valore di passare dalla disoccupazione all'occupazione, della solitudine ridotta, di un affitto stabile — che permettono a un professionista di monetizzare un risultato senza commissionare una ricerca di valutazione su misura ogni volta. Esistono affinché una piccola organizzazione benefica che scrive una proposta di finanziamento possa applicare lo stesso rigore di una consulenza ben finanziata, riutilizzando un proxy che qualcun altro ha già derivato e pubblicato.

## Perché è importante

L'UK Social Value Bank di HACT, sviluppato con l'economista Daniel Fujiwara usando metodi di valutazione del benessere, e Global Value Exchange, un database aperto e crowdsourced di proxy finanziari, sono i due più ampiamente usati nel terzo settore e nel settore pubblico britannico. Entrambi esistono perché il lavoro di valutazione sottostante — [valutazione del benessere](../valutazione-del-benessere/) e [valutazione della preferenza dichiarata](../valutazione-della-preferenza-dichiarata/) — è costoso, metodologicamente esigente, e lento da eseguire da zero per ogni progetto. Una libreria di proxy condivisa e pubblicata trasforma quello che sarebbe un esercizio di ricerca di diversi mesi in una semplice ricerca, che è precisamente perché contano sia per i calcoli del [ritorno sociale sull'investimento](../ritorno-sociale-sullinvestimento/) sia per le valutazioni delle offerte del [Social Value Act](../legge-sul-valore-sociale/): senza di essi, la monetizzazione rigorosa sarebbe accessibile solo a organizzazioni grandi abbastanza da commissionare i propri studi.

## Il calcolo

Un database dei costi unitari non calcola nulla da solo; fornisce un input a un calcolo fatto altrove:

```
Valore del proxy finanziario = prezzo di mercato, OPPURE
                               prezzo ombra, OPPURE
                               valutazione del benessere, OPPURE
                               valore di preferenza dichiarata
                               per un'unità definita di
                               cambiamento del risultato
                               (es. "per persona che passa dalla
                               disoccupazione all'occupazione,
                               per anno")

Valore applicato = numero di risultati raggiunti × valore del
                   proxy unitario
```

Vedi [prezzo ombra](../prezzo-ombra/) per come viene costruito un proxy quando non esiste alcun prezzo di mercato, e [ritorno sociale sull'investimento](../ritorno-sociale-sullinvestimento/) per come il valore applicato poi alimenta un rapporto dopo gli aggiustamenti per peso morto e attribuzione.

## Esempio pratico

**Organizzazione benefica (SROI di un servizio di amicizia)**: una voce del database dei costi unitari per "riduzione della solitudine" dà un proxy illustrativo di £1.100 per persona per anno. Applicato a 80 beneficiari: 80 × £1.100 = £88.000 di valore grezzo. Se lo stesso database ha anche un proxy per "benessere mentale migliorato" che si basa su un elemento di indagine sul benessere sovrapposto, impilare entrambi i proxy per le stesse 80 persone conterebbe doppiamente parte dello stesso cambiamento sottostante — il database fornisce il numero, ma evitare questa sovrapposizione è responsabilità dell'analista.

**Autorità locale (SROI di un job club)**: una voce del database dei costi unitari per "passare dalla disoccupazione all'occupazione sostenuta" viene applicata a 45 partecipanti a un proxy illustrativo di £8.500 per persona per anno: 45 × £8.500 = £382.500 di valore grezzo, prima degli aggiustamenti per peso morto e attribuzione mostrati nel [ritorno sociale sull'investimento](../ritorno-sociale-sullinvestimento/).

## Collegamento con lo sviluppo software

I team che costruiscono strumenti di reporting per organizzazioni benefiche o commissari beneficiano di un "catalogo dei risultati" interno — una tabella che mappa ogni risultato che un prodotto o servizio può plausibilmente rivendicare a un proxy nominato, il suo database di origine, la sua data di pubblicazione, e un identificatore di versione — affinché team diversi in un'organizzazione non scelgano ciascuno valori leggermente diversi per lo stesso risultato. Avvolgere i dati aperti di Global Value Exchange dietro un servizio di ricerca, con la fonte e la data sempre visualizzate insieme alla cifra, mantiene il proxy verificabile piuttosto che un numero magico sepolto in un foglio di calcolo. Vedi [ritorno sociale sull'investimento](../ritorno-sociale-sullinvestimento/) e [social value act](../legge-sul-valore-sociale/) per i due luoghi principali dove questi proxy vengono consumati.

## Insidie

- **Trattare i proxy come precisi.** La maggior parte dei proxy pubblicati sono medie modellate da studi di valutazione del benessere con intervalli di confidenza ampi; citarne uno fino alla sterlina sopravvaluta la precisione che la ricerca sottostante supporta.
- **Conteggio doppio di proxy sovrapposti.** Combinare proxy (es. "solitudine ridotta" e "benessere mentale migliorato") che sono derivati da costrutti di indagine sovrapposti valuta due volte lo stesso cambiamento sottostante.
- **Usare un proxy fuori contesto senza aggiustamento.** Un proxy calibrato su una popolazione e anno nazionale, applicato altrove senza aggiustamento per inflazione o contesto, misrappresenta silenziosamente il valore.
- **Non controllare la provenienza.** Global Value Exchange è aperto e crowdsourced, quindi la qualità delle voci varia per contributore; controlla la fonte sottostante prima di citare una cifra in una proposta di finanziamento o una presentazione di appalto.

## Fonti

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — methodological basis of the
  UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," section on financial proxies.
