# Indice di povertà multidimensionale (MPI)

L'MPI misura la povertà come privazioni sovrapposte che una persona vive allo stesso tempo — in salute, istruzione, e standard di vita — piuttosto che come solo reddito che scende sotto una linea. È stato sviluppato dall'Oxford Poverty and Human Development Initiative (OPHI) con Sabina Alkire e James Foster, ed è stato pubblicato congiuntamente con l'UNDP in ogni Human Development Report dal 2010, insieme all'[Indice di sviluppo umano](../indice-di-sviluppo-umano/).

## Perché è importante

Le linee di povertà di reddito perdono le persone che hanno abbastanza reddito in contanti ma manca loro acqua pulita, istruzione, o sopravvivono alla morte di un figlio — e perdono il fatto che le privazioni si raggruppano: una famiglia senza elettricità è disproporzionatamente probabile anche mancare di servizi igienici e avere un bambino malnutrito. Il metodo Alkire-Foster, su cui è costruito l'MPI, conta le privazioni di ogni persona attraverso dieci indicatori raggruppati in tre dimensioni equamente pesate — salute, istruzione, standard di vita — e classifica qualcuno come "povero MPI" solo se il suo punteggio di privazione pesato supera una soglia fissa, catturando la sovrapposizione che un set di statistiche a singolo indicatore separate non può. L'OPHI pubblica la metodologia completa e i dati dei paesi a <https://ophi.org.uk/multidimensional-poverty-index/>; l'MPI globale che mantiene congiuntamente con l'UNDP ora copre oltre 110 paesi. Per il software costruito per programmi anti-povertà — trasferimenti in contanti, triage dell'assistenza sociale, indirizzamento degli aiuti — il set di indicatori dell'MPI è spesso la cosa più vicina a uno schema di privazione standardizzato già validato attraverso decine di uffici statistici nazionali.

## Il calcolo

```
10 indicatori, 3 dimensioni, ciascuna dimensione pesata 1/3:

Salute (1/3):              nutrizione (1/6), mortalità
                            infantile (1/6)
Istruzione (1/3):          anni di istruzione (1/6),
                            presenza scolastica (1/6)
Standard di vita (1/3):    combustibile per cucinare,
                            servizi igienici, acqua
                            potabile, elettricità, alloggio,
                            beni (1/18 ciascuno)

punteggio di privazione (c) = somma dei pesi degli
                              indicatori in cui una persona
                              è privata

la persona è "povera MPI" se c ≥ 1/3 (il punto di cutoff
                                      della povertà, k = 33%)

H (rapporto di conteggio) = numero di poveri MPI /
                            popolazione totale
A (intensità)             = punteggio di privazione medio
                            tra i soli poveri MPI

MPI = H × A
```

Perché l'MPI moltiplica la *quota* di poveri per *quanto* sono poveri, due regioni con lo stesso rapporto di conteggio possono avere punteggi MPI molto diversi se le privazioni sono più severe in una — la stessa logica di "nessuna sostituzione tra dimensioni" dietro la media geometrica dell'HDI.

## Esempio pratico

**Indagine nazionale su 1.000 persone**: 350 sono identificate come multidimensionalmente povere (punteggio di privazione ≥ 33%). Tra quei soli 350 individui poveri, il punteggio di privazione medio è 45%.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Confrontando due distretti con conteggio uguale**: il Distretto A ha H = 0,30 e A = 0,40 (molti poveri, moderatamente privati); il Distretto B ha H = 0,30 e A = 0,60 (lo stesso numero povero, ma più severamente privato — mancanti di elettricità *e* servizi igienici *e* presenza scolastica simultaneamente).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Stesso rapporto di conteggio, MPI 50% più alto nel Distretto B — un sistema di indirizzamento basato solo sul conteggio di povertà classificherebbe i due distretti identicamente e perderebbe che il Distretto B necessita di intervento più profondo.

## Collegamento con lo sviluppo software

- I sistemi di gestione dei casi e eligibilità per i programmi sociali spesso già memorizzano diversi dei dieci indicatori (alloggio, presenza scolastica, marcatori di salute) in silos separati; il metodo di conteggio Alkire-Foster è uno schema pronto per combinarli in un singolo punteggio di privazione invece di costruire un modello di punteggio su misura da zero.
- La divisione conteggio/intensità (H × A) è un pattern generalmente utile per qualsiasi dashboard che riporta "quanti sono affetti" insieme a "quanto gravemente" — far collassare entrambi in un numero, come fanno le statistiche di prevalenza grezza, nasconde esattamente il caso che necessita più risorsa.
- I dashboard di indicatori in stile MPI si abbinano naturalmente al reporting del [costo per beneficiario](../costo-per-beneficiario/) per programmi anti-povertà: il costo per punto di riduzione MPI è un'unità defendibile per confrontare interventi molto diversi (trasferimento in contanti contro infrastruttura igienica).

## Insidie

- **Trattare i dieci indicatori come universali** — gli indicatori MPI globali dell'OPHI sono calibrati per comparabilità tra paesi; gli MPI nazionali (molti paesi, inclusi diversi nell'Asia meridionale e in Africa, pubblicano i propri) adattano indicatori e pesi al contesto locale, e i due non sono direttamente comparabili.
- **Riportare solo H** — il rapporto di conteggio ignora interamente l'intensità; riporta o calcola sempre A insieme a esso, o l'MPI stesso.
- **Assumere che poveri-MPI e poveri-di-reddito siano la stessa popolazione** — i rapporti sui paesi dell'OPHI stessi tipicamente mostrano solo sovrapposizione parziale tra i due; un programma che mira solo ai poveri-di-reddito sistematicamente mancherà una quota significativa dei multidimensionalmente poveri.

## Fonti

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
