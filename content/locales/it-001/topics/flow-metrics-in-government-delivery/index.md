# Metriche di flusso nell'erogazione governativa

Le metriche di flusso — la Legge di Little, i limiti di lavoro-in-corso (WIP), e l'efficienza di flusso — descrivono quanto velocemente il lavoro si muove attraverso un sistema con capacità limitata. Una board di sprint è uno di tali sistemi; una coda di richieste di benefici, un registro di domande di pianificazione, o un arretrato di casework di visti è esattamente la stessa matematica che indossa un'uniforme diversa.

## Perché è importante

I carichi di casi governativi sono sistemi di coda, e i sistemi di coda obbediscono alle leggi di coda indipendentemente da se qualcuno li misuri. I periodi di determinazione statutari rendono questo esplicito: sotto il regime Town and Country Planning, la maggior parte delle domande di pianificazione minori portano un obiettivo di determinazione statutario di 8 settimane e le domande maggiori 13 settimane — un impegno di tempo di ciclo cotto direttamente nella legge. L'arretrato di casework dell'asilo del Home Office, controllato ripetutamente dal National Audit Office e dal Home Affairs Select Committee, è un caso ben documentato di un sistema pubblico dove il lavoro-in-corso è cresciuto più velocemente del throughput per un periodo sostenuto, guidando i tempi di ciclo ben oltre qualsiasi aspettativa statutaria o di servizio. Le metriche di flusso danno agli ingegneri e ai manager di casework insieme un vocabolario condiviso e quantitativo per esattamente questa modalità di fallimento, piuttosto che lasciarlo come un "problema di arretrato" qualitativo.

## Il calcolo

```
Legge di Little:  WIP = Throughput × Tempo di ciclo
              →   Tempo di ciclo = WIP / Throughput

Efficienza di flusso = tempo attivo (di contatto) / tempo
                       di ciclo totale   (Vacanti)

Effetto del limite WIP: per throughput fisso, dimezzare il
WIP approssimativamente dimezza il tempo di ciclo medio
(Legge di Little riarrangiata) — la leva disponibile senza
aggiungere personale.
```

Vedi [metriche DORA per il valore pubblico](../dora-metrics-for-public-value/) per la matematica equivalente applicata alle pipeline di deployment software piuttosto che al casework.

## Esempio pratico

**Dipartimento di pianificazione di un'autorità locale**: 400 domande aperte in qualsiasi momento (WIP), il team risolve 50 domande/settimana (throughput).

```
Tempo di ciclo = WIP / Throughput = 400 / 50 = 8 settimane
```

Questo cade esattamente all'obiettivo statutario di 8 settimane per le domande minori — senza margine, il che significa che qualsiasi variabilità nella domanda in arrivo o nel tempo di risposta del consultato spinge le determinazioni oltre la scadenza legale.

**Efficienza di flusso**: di quelle 8 settimane (56 giorni di calendario), una domanda tipicamente ha circa 6 ore di tempo di elaborazione effettivo del caseworker.

```
Efficienza di flusso = 6 ore / (56 giorni × 8 ore
                       lavorative/giorno)
                     = 6 / 448 ≈ 1,3%
```

Il benchmark di Vacanti per i team software pone l'efficienza di flusso tipica al 15-20%; il casework governativo, con molteplici passaggi di consultati statutari e finestre di consultazione pubblica, spesso opera a un ordine di grandezza più basso. Il 98,7% del tempo di "attesa" è dove le otto settimane effettivamente vanno — non nella capacità del caseworker.

**Intervento di limite WIP**: limitare le domande aperte per caseworker a 15 invece di un 25 non limitato (mantenendo il throughput costante) sposta il WIP da 400 a circa 240 attraverso un team di 16 persone:

```
Nuovo tempo di ciclo = 240 / 50 = 4,8 settimane
```

Un quasi-dimezzamento del tempo di ciclo da un cambiamento di politica, non un aumento di personale — la stessa leva che i team di erogazione in stile DORA tirano quando limitano il WIP dello sprint.

## Collegamento con lo sviluppo software

Le metriche di flusso sono la lingua condivisa tra la board Kanban di un team di erogazione e il piano di casework per cui sta costruendo software: la coda di un caseworker e una coda di pull-request sono entrambe governate dalla Legge di Little, ed entrambe fanno saltare i loro obiettivi di tempo di ciclo nello stesso modo — troppo WIP relativo al throughput. Questo conta direttamente per il [costo del ritardo nei programmi pubblici](../cost-of-delay-in-public-programmes/): tempo di ciclo × CoD sono le sterline sedute nella coda in qualsiasi momento, e conta per gli [standard dei servizi e metriche di transazione](../service-standards-and-transaction-metrics/), dove un obiettivo di turnaround pubblicato è un impegno di tempo di ciclo che solo le metriche di flusso possono diagnosticare quando viene mancato. Il software di un sistema di casework dovrebbe esporre il WIP e il tempo di ciclo come metriche operative di prima classe, non nasconderle dentro un sistema di gestione dei casi che nessuno interroga.

## Insidie

- **Aggiungere limiti WIP senza fissare il vero collo di bottiglia**: se il vincolo è il tempo di risposta di un consultato statutario esterno, limitare il WIP del caseworker sposta semplicemente la coda a monte piuttosto che abbreviarla.
- **Trattare l'efficienza di flusso come un obiettivo da manipolare**: affrettare l'1,3% del tempo attivo muove appena il tempo di ciclo; la leva è quasi sempre negli stati di attesa, che di solito significa riprogettazione del processo, non velocità del caseworker.
- **Ignorare la variabilità**: la Legge di Little descrive medie; un carico di casi con alta varianza di domanda necessita capacità di buffer, non solo un limite WIP più stretto, o le scadenze statutarie verranno ancora mancate sulla coda volatile anche mentre la media migliora.
- **Misurare il WIP in modo incoerente**: un caso "aperto" nel sistema di registro ma effettivamente bloccato in attesa di una terza parte è ancora WIP; escluderlo lusinga i numeri senza cambiare la realtà rivolta al cittadino.

## Fonti

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
