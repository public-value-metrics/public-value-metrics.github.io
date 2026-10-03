# Addizionalità e peso morto

L'addizionalità chiede se un intervento ha causato un risultato che altrimenti non si sarebbe verificato. Il peso morto è il suo speculare: la quota di un risultato che si sarebbe verificata comunque, anche senza il programma, la sovvenzione, o il sussidio. Quasi ogni rivendicazione di impatto da un programma governativo o un'organizzazione benefica esagera il suo effetto finché il peso morto non viene sottratto, motivo per cui la guida britannica alla valutazione lo tratta come il primo e più importante aggiustamento a qualsiasi numero principale.

## Perché è importante

"Abbiamo supportato 500 aziende a crescere" suona come un risultato, ma se 300 di quelle aziende sarebbero crescite comunque — perché l'economia locale si stava riprendendo, perché avevano altre vie di finanziamento, perché erano già su una traiettoria di crescita prima dell'inizio del programma — il vero contributo aggiuntivo del programma è 200, non 500. Il Magenta Book del HM Treasury e la longeva "Additionality Guide" HM Treasury/BIS (sviluppata originariamente per i programmi di sviluppo regionale e rigenerazione, e ampiamente usata nella valutazione governativa britannica da allora) formalizzano il peso morto come l'aggiustamento iniziale nella sequenza standard di impatto netto: effetto grezzo meno peso morto, meno spostamento, meno dispersione, aggiustato per effetti moltiplicatori, uguale impatto netto aggiuntivo. Saltare questo passo è il modo più comune in cui le rivendicazioni di impatto pubblico e del settore sociale vengono gonfiate, deliberatamente o no — un programma di sovvenzioni che misura solo i risultati grezzi dei partecipanti, senza gruppo di confronto, non può distinguere il proprio effetto da ciò che sarebbe accaduto comunque.

Il peso morto non è una percentuale fissa; dipende interamente dal controfattuale per la specifica popolazione e intervento (vedi [analisi controfattuale](../counterfactual-analysis/)). Le valutazioni di sviluppo regionale inglese sotto le precedenti Regional Development Agencies hanno comunemente trovato tassi di peso morto nell'intervallo 20-60% a seconda del tipo di supporto alle imprese, motivo per cui valutazioni di programma credibili riportano un intervallo aggiustato per il peso morto piuttosto che una singola cifra assunta, e per cui finanziatori come il National Lottery Community Fund e Big Society Capital richiedono ai beneficiari di affrontare esplicitamente il peso morto nel reporting dei risultati piuttosto che riportare conteggi grezzi dei partecipanti.

## Il calcolo

La sequenza standard di aggiustamento dell'impatto netto, come stabilita nella guida britannica alla valutazione (Magenta Book; HM Treasury/BIS Additionality Guide; guida alla valutazione ESIF e dei fondi strutturali):

```
Risultato grezzo
  − Peso morto        (ciò che sarebbe accaduto comunque)
  − Spostamento       (attività/beneficio spostato da altrove,
                        non creato — vedi spostamento-e-
                        attribuzione)
  − Dispersione       (beneficio che va fuori dal gruppo/area
                        target)
  × Moltiplicatore     (attività economica indiretta/indotta
                        aggiuntiva, dove positiva)
  = Impatto netto aggiuntivo
```

Tasso di peso morto come proporzione:

```
Tasso di peso morto = risultati che si sarebbero verificati
                      senza l'intervento / risultati grezzi
                      totali osservati

Risultati netti aggiuntivi = Risultati grezzi × (1 − Tasso
                             di peso morto)
```

## Esempio pratico

**Programma di sovvenzioni per il supporto alle imprese**: uno schema di sovvenzioni regionale riporta che 500 aziende supportate hanno aumentato l'occupazione nell'anno successivo, in media 3 posti ciascuna — una rivendicazione grezza di 1.500 posti.

Un gruppo di confronto abbinato di aziende simili non supportate (vedi [analisi controfattuale](../counterfactual-analysis/)) mostra che il 40% della crescita occupazionale delle aziende supportate sarebbe avvenuta comunque, basandosi su come si è comportato il gruppo abbinato nello stesso periodo.

```
Tasso di peso morto = 40%
Posti netti aggiuntivi = 1.500 × (1 − 0,40) = 900 posti
```

Il risultato onestamente riportabile del programma è 900 posti, non 1.500 — una riduzione del 40% puramente dall'aggiustamento del peso morto, prima che spostamento o dispersione siano anche considerati.

**Programma occupazionale di un'organizzazione benefica**: un'organizzazione benefica colloca 200 disoccupati di lungo periodo in lavori a un costo di £600.000 (£3.000 per collocamento, grezzo). I dati nazionali del mercato del lavoro mostrano che, in assenza di qualsiasi intervento, circa il 15% di una coorte comparabile di disoccupati di lungo periodo trova lavoro nello stesso periodo attraverso il normale turnover del mercato del lavoro.

```
Tasso di peso morto = 15%
Collocamenti netti aggiuntivi = 200 × (1 − 0,15) = 170
Vero costo per collocamento aggiuntivo = £600.000 / 170
                                        ≈ £3.529
```

La cifra grezza di costo-per-collocamento (£3.000) sottostima il vero costo del contributo aggiuntivo dell'organizzazione benefica di circa il 15%.

## Collegamento con lo sviluppo software

Addizionalità e peso morto sono importanti direttamente per chiunque costruisca software di misurazione dell'impatto o gestione delle sovvenzioni per il settore pubblico o sociale:

- I sistemi di reporting dei risultati dovrebbero catturare un gruppo di confronto o baseline per progettazione, non solo i risultati dei partecipanti — ritrattare un controfattuale dopo che un sistema è stato lanciato senza uno è molto più difficile che costruire la cattura dall'inizio (vedi [analisi controfattuale](../counterfactual-analysis/)).
- Le dashboard che riportano solo conteggi grezzi dei partecipanti esagereranno sistematicamente l'impatto verso finanziatori e organi di controllo; dove esistono stime del peso morto (dalla letteratura di valutazione o un gruppo di confronto), il software dovrebbe esporre la cifra netta-del-peso-morto insieme a quella grezza, non invece di essa.
- Questo si collega direttamente a [ritorno sociale sull'investimento](../social-return-on-investment/), il cui rapporto SROI è credibile solo una volta che il peso morto (e lo spostamento) sono stati sottratti dai risultati grezzi rivendicati — un calcolatore SROI che omette questo passo produrrà rapporti gonfiati che non sopravvivono al controllo.

## Insidie

- **Riportare risultati grezzi come se fossero tutti aggiuntivi.** Questo è l'errore di misurazione dell'impatto più comune nel reporting di sovvenzioni e programmi; chiedi sempre "questo sarebbe accaduto comunque?" prima di pubblicare un numero principale.
- **Assumere che una singola percentuale di peso morto si applichi ovunque.** Il peso morto varia enormemente per settore, popolazione, e condizioni economiche locali; usa un gruppo di confronto o evidenza specifica del settore piuttosto che riutilizzare una cifra da una valutazione non correlata.
- **Confondere peso morto con spostamento.** Il peso morto riguarda i risultati controfattuali per gli stessi partecipanti; lo spostamento riguarda gli effetti su altre persone o luoghi — vedi [spostamento e attribuzione](../displacement-and-attribution/). Confondere i due porta a doppio conteggio o sottoconteggio dell'aggiustamento.
- **Peso morto autoriportato dai partecipanti.** Chiedere ai beneficiari "questo sarebbe accaduto senza il nostro aiuto?" produce sistematicamente stime basse di peso morto (i partecipanti tendono ad accreditare il programma); un gruppo di confronto indipendente è molto più affidabile.

## Fonti

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on deadweight, displacement, and leakage in structural-funds evaluation.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
