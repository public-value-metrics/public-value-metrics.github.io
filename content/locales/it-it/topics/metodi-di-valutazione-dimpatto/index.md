# Metodi di valutazione d'impatto

I metodi di valutazione d'impatto sono i design statistici e sperimentali usati per stimare cosa una politica o un programma ha effettivamente causato, distinto da ciò che sarebbe accaduto comunque — gli esperimenti controllati randomizzati (RCT), la differenza nelle differenze, il matching per punteggio di propensione, e il design di discontinuità della regressione sono i quattro più comunemente usati nella politica pubblica britannica. Esistono perché la maggior parte degli interventi governativi non può essere testata in un laboratorio: non puoi randomizzare quale città ottiene una nuova linea di autobus nel modo in cui puoi randomizzare quale paziente ottiene un farmaco, quindi questi metodi prendono in prestito la stessa logica causale senza richiedere sempre un'assegnazione casuale.

## Perché è importante

Il Magenta Book del HM Treasury, Annex A sui metodi quasi-sperimentali, è la guida canonica del governo britannico su come scegliere tra questi design, e organismi come l'Education Endowment Foundation e il What Works Centre for Local Economic Growth istituzionalizzano una gerarchia di evidenza costruita attorno a essi — RCT dove la randomizzazione è praticabile ed etica, design quasi-sperimentali dove non lo è. La scelta del metodo non è un ripensamento tecnico: determina se una valutazione può rispondere a "il programma ha causato questo?" o solo a "questo è accaduto dopo che il programma è iniziato?", che è la stessa domanda che l'[analisi controfattuale](../analisi-controfattuale/) è costruita per forzare i professionisti a porsi prima che qualsiasi valutazione venga commissionata.

## Il calcolo

```
RCT:
  Impatto = media(risultato | gruppo trattamento) −
            media(risultato | gruppo controllo)
  (valido perché l'assegnazione al trattamento è casuale)

Differenza nelle differenze (DiD):
  Impatto = [risultato_dopo(trattati) −
             risultato_prima(trattati)]
          − [risultato_dopo(controllo) −
             risultato_prima(controllo)]
  (richiede un'assunzione di "tendenze parallele": trattati e
   controllo si sarebbero mossi insieme in assenza
   dell'intervento)

Matching per punteggio di propensione (PSM):
  1. Stima P(trattamento = 1 | covariate X) per ogni unità →
     punteggio di propensione
  2. Abbina unità trattate a unità non trattate con punteggi
     di propensione simili
  3. Impatto = media(risultato | trattati) −
     media(risultato | controllo abbinato)

Design di discontinuità della regressione (RDD):
  Impatto = salto nel risultato osservato alla soglia di
            eligibilità, confrontando unità appena sopra
            contro appena sotto il punto di cutoff
```

## Esempio pratico

**Autorità locale (differenza nelle differenze per un programma di famiglie in difficoltà)**: il risultato è la presenza scolastica. L'area trattata passa dall'84% all'89% di presenza (+5 punti percentuali) durante il periodo del programma; un'area comparabile ma non trattata passa dall'85% all'87% (+2 punti percentuali) nello stesso periodo. Stima dell'impatto DiD: 5 − 2 = +3 punti percentuali attribuibili al programma. Applicato a una coorte di 2.000 alunni nell'area trattata, questo è coerente con circa 60 alunni aggiuntivi (3% × 2.000) che raggiungono la categoria di presenza più alta, un'estrapolazione che dovrebbe essere riportata con la sua avvertenza sulle tendenze parallele, non come un conteggio preciso.

**Organizzazione benefica (matching per punteggio di propensione per un'organizzazione benefica per l'occupabilità)**: 300 partecipanti al programma vengono abbinati a 300 individui da un dataset amministrativo più ampio usando punteggi di propensione costruiti da età, storia occupazionale precedente, e livello di qualificazione. Tasso di occupazione a dodici mesi: gruppo trattato abbinato 46%, gruppo di confronto abbinato 33%. Stima dell'impatto PSM: 46% − 33% = +13 punti percentuali attribuibili al programma, condizionata all'assenza di un fattore confondente non osservato (come la motivazione) che guida sia la partecipazione sia il risultato.

## Collegamento con lo sviluppo software

Se uno di questi design sarà praticabile più avanti dipende fortemente da decisioni di ingegneria dei dati prese in anticipo. L'RDD necessita di una variabile continua registrata accuratamente e un punto di cutoff di eligibilità genuinamente netto; il DiD necessita di dati panel comparabili nel tempo sia per le aree trattate sia per quelle di confronto, il che significa join coerenti attraverso sistemi e anni; il PSM necessita di dati di covariate di baseline ricchi catturati prima del trattamento, non ricostruiti successivamente. Un modello di dati progettato insieme a una [teoria del cambiamento](../teoria-del-cambiamento/) e un [modello logico](../modello-logico/) dall'inizio — catturando covariate di baseline, date, e record eligibili per il gruppo di confronto — è ciò che rende possibile una valutazione d'impatto rigorosa più avanti, invece di una costosa corsa affannosa a posteriori. Vedi [valutazione d'impatto contro valutazione di processo](../valutazione-dimpatto-contro-valutazione-di-processo/) per la domanda complementare che questi metodi non rispondono da soli.

## Insidie

- **Forzare un RCT dove non praticabile o non etico**, o al contrario non considerare mai un design quasi-sperimentale quando una genuina opportunità per uno — un punto di cutoff politico, un lancio graduale — era disponibile e non usata.
- **Ignorare l'assunzione di tendenze parallele nel DiD.** Se l'area di confronto stava già divergendo dall'area trattata prima dell'intervento, il confronto tra due punti è contaminato; controlla le tendenze pre-intervento, non solo il prima/dopo.
- **Abbinare solo su covariate osservate nel PSM.** La selezione non osservata, come la motivazione del partecipante, può distorcere la stima anche quando le covariate osservate sono ben bilanciate.
- **Manipolazione della variabile continua nell'RDD.** Se le persone possono influenzare il loro punteggio per cadere appena dentro una soglia di eligibilità, la discontinuità non isola più un effetto causale.

## Fonti

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
