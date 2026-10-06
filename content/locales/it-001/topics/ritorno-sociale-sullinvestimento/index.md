# Ritorno sociale sull'investimento (SROI)

Il ritorno sociale sull'investimento è un quadro per misurare, monetizzare, e contabilizzare un concetto ampio di valore — sociale, ambientale, ed economico — ed esprimerlo come un rapporto contro le risorse investite, per esempio "£1,44 di valore sociale per ogni £1 investita". È stato progettato per estendere la logica della contabilità finanziaria a risultati che i mercati non prezzano, senza perdere la disciplina della contabilità: ogni numero in un SROI deve essere tracciabile a un risultato definito dagli stakeholder, una base di evidenza, e un aggiustamento esplicito per ciò che sarebbe accaduto comunque.

## Perché è importante

L'SROI è mantenuto da Social Value UK e Social Value International, organismi successori della SROI Network, la cui "A Guide to Social Return on Investment" (2012) è ancora la metodologia di riferimento. Il quadro si basa su sette principi — coinvolgere gli stakeholder, capire cosa cambia, valutare le cose che contano, includere solo ciò che è materiale, non sopravvalutare, essere trasparenti, e verificare il risultato — ed è il principio cinque, "non sopravvalutare", che la maggior parte dei report SROI nel mondo reale fallisce. Un rapporto prodotto saltando gli aggiustamenti per peso morto e attribuzione non è un SROI; è un numero di marketing che indossa i vestiti di un SROI. Gli ingegneri software che costruiscono strumenti di reporting per organizzazioni benefiche, imprese sociali, o commissari devono conoscere la differenza, perché lo strumento imporrà la disciplina o renderà facile saltarla.

## Il calcolo

L'SROI dipende da una [teoria del cambiamento](../teoria-del-cambiamento/) per identificare quali risultati sono nello scopo, e li esprime usando la stessa catena di responsabilità di un [modello logico](../modello-logico/):

```
Rapporto SROI = Valore attuale dei risultati / Valore degli input

Processo:
 1. Stabilisci lo scopo e identifica gli stakeholder i cui
    risultati verranno misurati
 2. Mappa i risultati (una teoria del cambiamento, comprovata
    con gli stakeholder, non assunta)
 3. Comprova i risultati e dai loro un valore usando proxy
    finanziari
 4. Stabilisci l'impatto: valore grezzo − peso morto −
    attribuzione − spiazzamento, poi applica il decadimento
 5. Calcola l'SROI: valore attuale netto dell'impatto ÷ valore
    degli input
 6. Riporta, usa, e incorpora — il rapporto è un dispositivo di
    comunicazione, non il punto finale
```

Il peso morto, l'attribuzione, e lo spiazzamento sono trattati in [addizionalità e peso morto](../addizionalità-e-peso-morto/) e [spiazzamento e attribuzione](../spostamento-e-attribuzione/); tutti e tre esistono per isolare il genuino impatto [controfattuale](../analisi-controfattuale/) dal risultato grezzo.

## Esempio pratico

**Programma occupazionale di un'autorità locale**: costo di input annuale £250.000. Sessanta partecipanti si spostano in occupazione sostenuta; un proxy finanziario per quel risultato (aumento del benessere, ridotta dipendenza dai benefici, e entrate fiscali combinate) è £8.500 per persona per il primo anno — vedi [database dei costi unitari](../database-dei-costi-unitari/) per dove provengono tali proxy.

- Valore del risultato grezzo: 60 × £8.500 = £510.000
- Meno peso morto (il 40% avrebbe probabilmente trovato lavoro senza il programma): £510.000 × 0,60 = £306.000
- Meno attribuzione (il 30% del cambiamento rimanente è dovuto al supporto di altre agenzie): £306.000 × 0,70 = £214.200
- Risultato dell'anno 2 con decadimento del 30%: £214.200 × 0,70 = £149.940, scontato al 3,5%/anno (vedi [tasso di sconto sociale](../tasso-di-sconto-sociale/)): £149.940 ÷ 1,035 = £144.870
- Valore attuale totale dell'impatto: £214.200 + £144.870 = £359.070
- **Rapporto SROI: £359.070 ÷ £250.000 = 1,44**, riportato come "£1,44 di valore sociale per ogni £1 investita"

**Organizzazione benefica**: un servizio di amicizia da £60.000 riduce la solitudine per 80 persone anziane, valutato a un proxy di £1.100/persona/anno. Valore grezzo £88.000; dopo il 35% di peso morto e il 15% di attribuzione, l'impatto netto è £88.000 × 0,65 × 0,85 = £48.620, un rapporto SROI di 0,81 — sotto il pareggio, che è una scoperta legittima e utile, non un fallimento da non riportare.

## Collegamento con lo sviluppo software

Un calcolatore SROI che permette a un utente di inserire conteggi di risultati e valori proxy ma non ha un campo richiesto per peso morto, attribuzione, o una teoria del cambiamento collegata produrrà rapporti gonfiati per impostazione predefinita, perché omettere gli aggiustamenti è il percorso di minore resistenza. Costruisci la disciplina nello schema: ogni riga di risultato dovrebbe fare riferimento a un gruppo di stakeholder, una quantità comprovata, un proxy finanziario con la sua fonte, e campi di peso morto/attribuzione non opzionali. Vedi [risultati contro output](../risultati-contro-output/) per la distinzione da cui dipende la mappatura dei risultati SROI, e [modello logico](../modello-logico/) per la catena che lo strumento dovrebbe rispecchiare nel suo modello di dati.

## Insidie

- **Saltare il peso morto e l'attribuzione.** Il rapporto principale senza questi aggiustamenti è una cifra grezza, non una cifra di impatto netto, e i principi di Social Value UK richiedono esplicitamente entrambi.
- **Confrontare rapporti attraverso organizzazioni.** Un rapporto SROI dipende da scelte di scopo e proxy fatte caso per caso; trattare un rapporto 4:1 di un report come "migliore" di un rapporto 2:1 di un altro ignora che le assunzioni non sono standardizzate come un rapporto di contabilità finanziaria.
- **Conteggio doppio di proxy sovrapposti.** Impilare un proxy "solitudine ridotta" con un proxy "benessere mentale migliorato" per gli stessi beneficiari può valutare doppiamente un singolo cambiamento sottostante.
- **Saltare il coinvolgimento degli stakeholder.** Il principio uno richiede che i risultati siano definiti con le persone che li vivono, non assunti dall'analista che costruisce il modello.

## Fonti

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
