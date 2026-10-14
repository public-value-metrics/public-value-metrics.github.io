# KPI del settore pubblico

Un indicatore chiave di performance (KPI) è una misura scelta e tracciata che sta al posto di se un servizio pubblico stia facendo bene il suo lavoro. Nel governo la scelta di un KPI non è mai neutrale: perché i KPI si attaccano a budget, classifiche, e carriere, l'atto di selezionarne uno plasma il comportamento di tutti a valle di esso, spesso più della politica che ha creato il servizio.

## Perché è importante

L'osservazione di Charles Goodhart del 1975 sulla politica monetaria — più tardi popolarizzata da Marilyn Strathern come "quando una misura diventa un obiettivo, cessa di essere una buona misura" — è la singola etichetta di avvertimento più importante nella gestione della performance del settore pubblico. Un KPI scelto per *descrivere* un sistema inizia a *distorcere* quel sistema nel momento in cui il finanziamento, la paga, o la sopravvivenza politica vengono legati a esso. L'illustrazione canonica sono i tempi di risposta delle ambulanze del NHS: quando l'obiettivo di risposta Categoria A di otto minuti diventò vincolante, alcuni trust mostrarono di aver "accatastato" le ambulanze appena fuori dall'orologio del tempo di risposta, o riclassificato le chiamate, per raggiungere il numero senza cambiare i risultati dei pazienti. La guida del National Audit Office britannico sulla scelta e l'uso degli indicatori di performance — esposta nei suoi report sul value-for-money e nel suo quadro "Performance Measurement by Regulators" e "Choosing the Right FABRIC" (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) — esiste precisamente perché i dipartimenti continuavano a scegliere indicatori facili da riportare piuttosto che indicatori difficili da manipolare. Un ingegnere software che rilascia il dashboard contro cui un ministro o un direttore verrà giudicato stia, che lo intenda o no, progettando la struttura di incentivi di un'istituzione pubblica.

## Il calcolo

Il design dei KPI è un argomento modellato su un quadro, ma la *valutazione* di un KPI candidato è una checklist ripetibile, non una formula:

```
Per ogni KPI candidato, valuta contro:
  Adatto allo scopo — misura il risultato, o un proxy a
                      diversi passi di distanza?
  Appropriato       — appartiene alle persone che possono
                      effettivamente influenzarlo?
  Bilanciato        — è abbinato a una contro-metrica che
                      catturi la manipolazione?
  Robusto           — può sopravvivere all'audit, o è
                      autoriportato e non verificabile?
  Integrato         — si inserisce nel set più ampio, o
                      spinge contro un altro KPI?
  Costo-efficace    — raccoglierlo costa più della decisione
                      che informa?

Divisione guida contro ritardato:
  Indicatore guida      → predice il risultato futuro, ma
                           spesso manipolabile (es. chiamate
                           risposte in <60s)
  Indicatore ritardato  → confirma che il risultato è
                           accaduto, ma arriva troppo tardi
                           per guidare (es. indagine annuale
                           di satisfazione)
  Un set di KPI defendibile abbina almeno uno di ciascuno per
  obiettivo.
```

## Esempio pratico

**Trust di ambulanze**: un trust riporta un KPI di tempo di risposta Categoria A (pericolo di vita) di "75% delle chiamate risposto entro 8 minuti." In un trimestre, arrivano 6.000 chiamate Categoria A; 4.500 vengono soddisfatte entro 8 minuti, dando 75,0% — apparentemente in linea con l'obiettivo.

```
KPI principale = 4.500 / 6.000 × 100 = 75,0%  (soddisfa la
                                                soglia del 75%)
```

Ma un audit Goodhart aggiunge una contro-metrica: il tempo di risposta medio per il 10% più lento delle chiamate.

```
Media del decile più lento = 34 minuti (in aumento da 19
                                         minuti due anni prima)
```

Il trust sta raggiungendo l'obiettivo mentre la coda — le chiamate più probabili di essere genuinamente pericolose per la vita una volta che il triage è imperfetto — è peggiorata molto, perché gli equipaggi vengono prioritizzati verso le chiamate vicine al limite degli 8 minuti piuttosto che verso l'urgenza clinica. Il singolo KPI raccontava una storia falsa; il KPI abbinato raccontava quella vera.

## Collegamento con lo sviluppo software

Gli ingegneri che costruiscono dashboard di performance per il governo stanno, funzionalmente, progettando l'API di incentivi dell'organizzazione. Implicazioni pratiche: strumenta il *denominatore* tanto rigorosamente quanto il numeratore (un KPI riportato come una nuda percentuale invita la manipolazione del denominatore — vedi [costo per transazione](../costo-per-transazione/) per la stessa trappola nei servizi digitali); costruisci contro-metriche nello stesso dashboard piuttosto che in un report separato che nessuno legge, così la manipolazione è visibile al punto di decisione; e versiona la definizione del KPI, perché una ridefinizione silenziosa (cambiare cosa conta come una "chiamata," un "caso," o un "completamento") è funzionalmente equivalente a cambiare l'obiettivo senza annunciarlo. Una [scorecard del valore pubblico](../scorecard-del-valore-pubblico/) è un modo strutturato per impedire che un singolo KPI venga letto in isolamento, e la [responsabilità basata sui risultati](../responsabilità-basata-sui-risultati/) è la disciplina di scegliere KPI a livello di popolazione che un singolo team non può unilateralmente distorcere.

## Insidie

- **Scegliere la metrica facile da raccogliere sopra quella significativa**: il tempo di risposta alla chiamata è banale da registrare; se la chiamata ha risolto il problema del cittadino non lo è — ma solo la seconda è il risultato. Resisti all'impostazione predefinita verso ciò che il sistema già emette.
- **Nessuna contro-metrica**: qualsiasi KPI attaccato a denaro o reputazione verrà manipolato al margine; rilascialo con una metrica abbinata che catturi il probabile vettore di manipolazione prima di pubblicarlo.
- **Ridefinire la metrica senza un changelog**: scambiare "chiamate ricevute" con "chiamate risposte" per lusingare una tendenza distrugge la credibilità della serie temporale nel momento in cui viene scoperto — pubblica sempre un changelog delle definizioni insieme ai numeri.
- **Confondere l'attività con il risultato**: contare le ispezioni completate è un output; contare le proprietà portate in conformità è più vicino al risultato (vedi [risultati contro output](../risultati-contro-output/)).

## Fonti

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
