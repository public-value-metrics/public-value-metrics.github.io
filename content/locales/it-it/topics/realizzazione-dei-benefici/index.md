# Realizzazione dei benefici

La gestione della realizzazione dei benefici è la disciplina di identificare, stabilire la baseline, tracciare, e *comprovare* che i benefici promessi in un caso aziendale si siano effettivamente materializzati dopo il go-live. Nell'investimento pubblico britannico vive dentro il Five Case Model del Green Book del HM Treasury e la guida dedicata di gestione dei benefici dell'Infrastructure and Projects Authority; senza di essa, "il sistema ha risparmiato ai caseworker trenta minuti a richiesta" rimane un'asserzione non verificata per sempre.

## Perché è importante

I casi aziendali sono promesse; la realizzazione dei benefici è l'audit. Il Green Book richiede che ogni caso di spesa superi cinque test — strategico, economico, commerciale, finanziario, e di gestione — e il caso di gestione deve esporre come i benefici verranno realizzati *prima dell'approvazione*: proprietari nominati, baseline catturate, e date di misurazione fissate. La guida dell'Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects* (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>), esiste perché il reporting di portfolio della stessa IPA sul Government Major Projects Portfolio ha ripetutamente trovato la confidenza di erogazione e la realizzazione dei benefici citate come debolezze ricorrenti attraverso i programmi maggiori. Un progetto può chiudere "in tempo e nel budget" contro le sue milestone di erogazione mentre ancora fallisce nel realizzare i benefici che giustificavano spendere il denaro in primo luogo — una distinzione che la guida dell'IPA tratta come l'intero punto della disciplina.

## Il calcolo

```
Tasso di realizzazione = benefici realizzati / benefici
                         previsti   (per beneficio, per
                         periodo)

Meccaniche che lo rendono calcolabile:
  baseline catturata PRIMA del go-live (altrimenti il
  delta è non misurabile)
  ogni beneficio: proprietario nominato, metrica, fonte
  dati, programma di misurazione
  previsione aggiustata per bias dell'ottimismo alla
  valutazione (mandato Green Book)
  benefici classificati liberatori-di-contanti /
  capacità-liberata / qualitativi, tracciati e riportati
  separatamente
```

## Esempio pratico

**Autorità locale**: un caso aziendale di un portale digitale di domande di pianificazione prometteva, per anno: £300.000 in riduzione dell'overhead di stampa e affrancatura (contanti), 4.500 ore di funzionario liberate (capacità), e satisfazione del richiedente migliorata (qualitativo). Dodici mesi dopo il go-live:

```
Beneficio            Previsto   Realizzato   Tasso   Evidenza
Risparmi in contanti  £300.000   £210.000    70%     libro
                                                      contabile
                                                      finanziario
                                                      contro
                                                      l'anno
                                                      baseline
Ore di funzionario    4.500      3.200       71%     campione
                                                      di tempo-
                                                      movimento
Satisfazione          +8pp       +11pp       138%    dati
                                                      indagine
                                                      richiedenti

Azioni dalla revisione (il punto della realizzazione dei
benefici):
la carenza di contanti è stata tracciata a due aree di
servizio che ancora elaborano domande di carta per
eccezione → chiudi la via di eccezione;
la correzione del bias dell'ottimismo del prossimo caso
aziendale è stata aumentata dal 10% al 25% basata sull'
errore di previsione di questo caso.
```

Un tasso di realizzazione del 70% non è un fallimento — è conoscenza che permette alla prossima previsione di essere calibrata meglio. Un caso non misurato avrebbe rivendicato il 100% per sempre, e il team finanziario non avrebbe avuto alcuna base per contestarlo.

## Collegamento con lo sviluppo software

Le organizzazioni ingegneristiche abitualmente approvano investimenti in piattaforme e strumenti sul beneficio previsto e quasi mai li verificano dopo — esattamente la patologia che la gestione della realizzazione dei benefici esiste per correggere. La trasposizione leggera: ogni proposta sopra una soglia di materialità nomina un proprietario del beneficio, una metrica di baseline, e una data di revisione fissa (tipicamente sei mesi dopo il go-live), e i tassi di realizzazione dalle proposte passate dovrebbero scontare quanto l'organizzazione si fidi della prossima previsione di un team o fornitore. Questo chiude il cerchio verso la [valutazione Green Book](../valutazione-green-book/), che fissa la previsione che questa disciplina verifica, ed è la stessa logica dietro la scoperta ampiamente riportata che una grande maggioranza dei piloti di IA generativa non mostra alcun ritorno misurabile — vedi [produttività dell'IA nel settore pubblico](../produttività-dellia-nel-settore-pubblico/) — perché i piloti che *hanno* restituito valore erano, quasi senza eccezione, quelli con una linea di beneficio nominata e tracciabile dall'inizio. Dipende anche dal distinguere ciò che è stato effettivamente erogato da ciò che è stato effettivamente realizzato — vedi [risultati contro output](../risultati-contro-output/).

## Insidie

- **Nessuna baseline pre-go-live**: l'omissione fatale e non risolvibile — senza di essa, nessun tasso di realizzazione può mai essere calcolato, solo asserito.
- **Orfanità del beneficio**: un beneficio senza proprietario nominato non ha nessuno che raccolga i dati, e ogni revisione di portfolio lo riporta come "generalmente in linea" per impostazione predefinita.
- **Benefici contati doppiamente attraverso un portfolio di programma**: due progetti entrambi che rivendicano la stessa capacità di caseworker liberata come il loro beneficio — mantieni un singolo registro di beneficio attraverso il portfolio per catturare questo.
- **Teatro di realizzazione**: misurare e riportare prominentemente le facili vittorie qualitative mentre le linee di contanti e capacità rimangono silenziosamente non esaminate.
- **Confondere l'erogazione con la realizzazione**: un progetto che chiude le sue milestone "in tempo e nel budget" non dice nulla su se il beneficio previsto sia effettivamente mai accaduto — la guida dell'IPA tratta queste come due domande separate con due tracce di evidenza separate.

## Fonti

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
