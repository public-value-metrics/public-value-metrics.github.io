# Reporting dei risultati delle sovvenzioni (IRIS+)

Il reporting dei risultati delle sovvenzioni è la pratica dei beneficiari di sovvenzioni di riportare metriche di risultato standardizzate e comparabili ai finanziatori — in contrasto con ogni finanziatore che inventa il proprio modello di reporting su misura. IRIS+, mantenuto dal Global Impact Investing Network (GIIN), è lo standard più ampiamente adottato di questo tipo: un catalogo di metriche di performance sociale, ambientale, e finanziaria pre-definite che gli investitori d'impatto e, sempre più, le fondazioni erogatrici di sovvenzioni richiedono o raccomandano ai beneficiari di usare.

## Perché è importante

Prima del reporting standardizzato, ogni fondazione chiedeva ai beneficiari un set diverso di indicatori in un formato diverso, e un'organizzazione benefica di medie dimensioni con dieci finanziatori poteva gestire dieci processi di reporting paralleli per lavoro sovrapposto — un motore ben documentato dell'onere di reporting che la standardizzazione dei risultati delle sovvenzioni esiste per ridurre. IRIS+ affronta questo dando a finanziatori e beneficiari un vocabolario condiviso: Core Metrics Set raggruppati per tema (es. alloggi economici, accesso all'energia pulita, inclusione finanziaria), ogni metrica definita con precisione sufficiente che "posti di lavoro creati" o "famiglie servite" significhi la stessa cosa indipendentemente da chi la riporti, e allineata agli Obiettivi di Sviluppo Sostenibile delle Nazioni Unite così che un finanziatore possa aggregare i dati a livello di beneficiario in una narrazione SDG a livello di portfolio. Il GIIN riporta che le metriche IRIS sono usate da circa metà degli investitori d'impatto e dalla grande maggioranza dei gestori di fondi, banche, e istituzioni di finanza per lo sviluppo attivi nel campo.

La standardizzazione conta più dove interagisce con [risultati contro output](../risultati-contro-output/): IRIS+ spinge il reporting verso metriche di risultato e impatto definite piuttosto che qualunque cosa il sistema di gestione dei casi esistente di un beneficiario registri, che è esattamente il divario che [costo per risultato](../costo-per-risultato/) contro [costo per beneficiario](../costo-per-beneficiario/) descrive.

## Il calcolo

Il reporting dei risultati delle sovvenzioni è un quadro e processo, non una formula:

```
1. Il finanziatore seleziona un Core Metrics Set rilevante
   al tema della sovvenzione (es. "Financial Inclusion" o
   "Sustainable Agriculture" di IRIS+)
2. Ogni metrica ha una definizione fissa, unità, e metodo di
   calcolo pubblicati dal GIIN — non inventati per
   finanziatore
3. Il beneficiario riporta contro le stesse definizioni di
   metrica attraverso tutti i suoi finanziatori usando quello
   standard, riducendo lo sforzo di reporting duplicato
4. Il finanziatore aggrega le metriche a livello di
   beneficiario in reporting a livello di portfolio,
   comparabile anno su anno e attraverso i beneficiari usando
   la stessa metrica
```

Il guadagno di efficienza è combinatorio: standardizzare N finanziatori × M beneficiari su un vocabolario condiviso trasforma N×M relazioni di reporting su misura in approssimativamente N+M mappature contro uno standard.

## Esempio pratico

**Un beneficiario con tre finanziatori, prima della standardizzazione**: riporta "persone servite" al Finanziatore 1 usando una definizione di conteggio di persone, "beneficiari raggiunti" al Finanziatore 2 usando una definizione di famiglia, e "individui impattati" al Finanziatore 3 usando una definizione di episodio di servizio (così una persona che visita due volte conta due volte). Tre report, tre numeri, nessuno comparabile, e nessuno comparabile ai numeri di un altro beneficiario nemmeno all'interno del portfolio dello stesso finanziatore.

**Lo stesso beneficiario sotto IRIS+**: riporta contro una metrica definita di individui-raggiunti IRIS+ insieme a una metrica di risultato definita dal Core Metrics Set rilevante, usando la metodologia di calcolo pubblicata dal GIIN per entrambe. Tutti e tre i finanziatori ora ricevono lo stesso numero, calcolato nello stesso modo, e possono confrontare il costo per unità definita IRIS+ di questo beneficiario contro altri beneficiari nel loro portfolio usando la metrica identica — l'equivalente, a scala di infrastruttura di reporting, di avere un [database dei costi unitari](../database-dei-costi-unitari/) condiviso.

## Collegamento con lo sviluppo software

Le piattaforme di gestione sovvenzioni dovrebbero trattare gli identificatori di metrica IRIS+ come una chiave esterna, non testo libero: memorizzare il codice di metrica pubblicato insieme al valore riportato di un beneficiario (piuttosto che un campo inventato localmente chiamato "beneficiari") è ciò che rende possibile l'aggregazione tra finanziatori e tra portfolio più avanti senza un progetto di pulizia dati. Dove una piattaforma deve supportare finanziatori che non hanno adottato IRIS+, il design pragmatico è permettere che una metrica locale venga mappata alla definizione IRIS+ più vicina piuttosto che forzare ogni finanziatore sullo standard immediatamente — la comparabilità migliora incrementalmente mentre più del grafo si mappa su identificatori condivisi. Vedi l'argomento gemello [costo per risultato](../costo-per-risultato/) per cosa i numeri riportati dovrebbero essere usati a calcolare una volta raccolti.

## Insidie

- **Trattare l'adozione di IRIS+ come comparabilità automatica.** Due beneficiari possono entrambi riportare contro la stessa metrica IRIS+ e ancora non essere comparabili se la loro qualità dei dati sottostante o le assunzioni controfattuali differiscono; lo standard fissa le definizioni, non il rigore della misurazione.
- **Metriche "allineate a IRIS" inventate dal finanziatore.** Una metrica che è solo inspirata dal linguaggio IRIS+ ma non la definizione effettivamente pubblicata reintroduce la frammentazione che lo standard esiste per risolvere.
- **Fatica di reporting da sovra-selezione.** Richiedere a un beneficiario di riportare contro un intero Core Metrics Set quando solo due o tre metriche sono rilevanti per la decisione ricrea il problema dell'onere in un involucro standardizzato.
- **Nessuna metrica di risultato affatto.** IRIS+ include molte metriche di output puro (es. conteggi di persone servite); selezionare solo quelle, e nessuna delle metriche di livello-risultato, produce reporting a forma di [costo-per-beneficiario](../costo-per-beneficiario/) sotto un'etichetta di reporting-dei-risultati.

## Fonti

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
