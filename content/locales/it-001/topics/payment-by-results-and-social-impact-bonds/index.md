# Pagamento a risultati e bond di impatto sociale (PbR/SIB)

Il pagamento a risultati (PbR) paga un fornitore in base ai risultati verificati raggiunti, non alle attività eseguite. Un bond di impatto sociale (SIB) è una struttura di finanziamento PbR specifica in cui investitori privati o filantropici finanziano l'erogazione del servizio in anticipo e vengono rimborsati — con un rendimento — da un commissario governativo solo se i risultati misurati indipendentemente raggiungono soglie concordate, spostando il rischio di erogazione dal contribuente all'investitore.

## Perché è importante

Il primo SIB al mondo è stato lanciato all'HMP Peterborough nel settembre 2010: Social Finance ha raccolto £5 milioni da 17 investitori per finanziare il "One Service," lavorando con detenuti a breve pena (sotto i 12 mesi) per ridurre la recidiva, con il Ministry of Justice e il Big Lottery Fund che hanno concordato di rimborsare gli investitori solo se gli eventi di riconvizione fossero scesi di almeno il 7,5% contro una coorte di confronto nazionale abbinata. La coorte finale del progetto pilota di Peterborough ha registrato una riduzione del 9,7% nelle riconvizioni, comodamente sopra la soglia, e gli investitori sono stati rimborsati con un rendimento. Il meccanismo contava perché risolveva uno specifico problema di commissionamento: il governo voleva pagare per i risultati piuttosto che per gli input, ma non poteva assorbire il rischio finanziario di un intervento che potrebbe non funzionare, quindi la struttura SIB spostava quel rischio su investitori disposti a sottoscriverlo. Il Government Outcomes Lab (GO Lab) alla Blavatnik School of Government di Oxford mantiene ora la base di evidenza pubblica più completa sulla performance PbR e SIB nel mondo, tracciando ben oltre 200 bond di impatto globalmente e pubblicando la ricerca su quali caratteristiche di design correlano con successo o fallimento. La lezione a cui la base di evidenza ritorna ripetutamente è che la *metrica di risultato scelta*, e chi porta il rischio di mancarla, determina quasi tutto il resto su come un contratto PbR effettivamente si comporta nella pratica.

## Il calcolo

```
Pagamento PbR = pagamento base (se presente) +
                Σ (risultato raggiunto × prezzo unitario per
                   risultato)

Rendimento dell'investitore nel bond di impatto sociale:
  Esborso dell'investitore = capitale anticipato che finanzia
                             l'erogazione del servizio
  Pagamento di risultato    = il commissario paga solo se il
                              risultato ≥ soglia, scalato da
                              quanto sopra la soglia la
                              performance si posiziona
  Rendimento dell'investitore = pagamenti di risultato
                                 ricevuti − esborso
                                 dell'investitore (un tasso di
                                 rendimento, spesso limitato,
                                 che riflette il rischio preso)

Parametri di design chiave che determinano il comportamento
dell'intero contratto:
  Metrica di risultato         — deve essere un risultato, non
                                  un output (vedi
                                  risultati-contro-output)
  Confronto/controfattuale     — di solito una coorte abbinata
                                  (vedi analisi-controfattuale)
  Soglia di pagamento          — miglioramento minimo prima che
                                  qualsiasi pagamento si attivi
  Curva di pagamento           — lineare, a gradini, o limitata
                                  sopra la soglia
  Sconto di attribuzione/peso  — vedi
    morto                        addizionalità-e-peso-morto
```

## Esempio pratico

**Peterborough One Service** (cifre illustrative tratte da valutazioni pubblicate):

```
Capitale investitore raccolto:   £5.000.000
Coorte:                          ~3.000 detenuti maschi a breve
                                  pena su due coorti
Soglia:                          ≥7,5% riduzione negli eventi di
                                  riconvizione contro un gruppo
                                  di confronto nazionale
                                  abbinato, o nessun pagamento
Risultato della coorte 1:        riduzione dell'8,4% — sotto la
                                  barra contrattuale per quella
                                  sola coorte sotto le regole
                                  originali
Risultato della coorte            riduzione del 9,7% — sopra la
combinata/finale:                 soglia
Pagamento di risultato:           il governo (Ministry of
                                   Justice / Big Lottery Fund)
                                   paga per punto percentuale
                                   sopra la soglia, finanziando
                                   il rimborso dell'investitore
                                   più un rendimento
```

**Contratto PbR di un'autorità locale (illustrativo)**: un servizio di intervento familiare è commissionato a £4.000 per famiglia segnalata (pagamento di attività) più £6.000 per famiglia senza ulteriore segnalazione di protezione infantile 12 mesi dopo la chiusura (pagamento di risultato). 200 famiglie segnalate, 150 casi chiusi, 96 rimangono libere da segnalazioni a 12 mesi:

```
Pagamento di attività  = 200 × £4.000 = £800.000
Pagamento di risultato = 96 × £6.000  = £576.000
Costo totale del contratto = £1.376.000 per 96 risultati
                             sostenuti confermati
Costo per risultato confermato ≈ £14.333 (vedi
                                 costo-per-risultato)
```

## Collegamento con lo sviluppo software

Il pagamento a risultati è un problema di allineamento degli incentivi prima di essere un problema di dati, e il sistema di dati è dove quell'allineamento tiene o si rompe. La verifica indipendente e a prova di manomissione dei risultati è l'intero gioco: il commissario e il fornitore hanno incentivi opposti su come un caso ambiguo viene codificato, quindi il sistema che registra i risultati necessita di una traccia di audit, un accordo di condivisione dati con il verificatore indipendente (spesso un organismo diverso dal fornitore, talvolta un organismo di statistiche ufficiali che abbina contro record di polizia o benefici), e versionamento immutabile della definizione del risultato — l'equivalente PbR dell'insidia "ridefinire la metrica" nei [KPI del settore pubblico](../public-sector-kpis/). I calcoli di attribuzione dipendono dai metodi di coorte abbinata dell'[analisi-controfattuale](../counterfactual-analysis/), che necessitano di codice riproducibile e verificabile, non di un foglio di calcolo una tantum. E la metrica stessa deve essere un genuino risultato, non un'attività proxy — vedi [risultati contro output](../outcomes-vs-outputs/) — perché un contratto PbR che paga per un output semplicemente rietichetta il finanziamento business-as-usual con costo di transazione extra. Dove il ritorno sociale di un SIB viene modellato prospetticamente, quella valutazione tipicamente prende in prestito direttamente dalla metodologia del [ritorno sociale sull'investimento](../social-return-on-investment/).

## Insidie

- **Pagare per un risultato proxy facilmente manipolabile**: "presenza alle sessioni" è un'attività vestita da risultato; insisti su una misura che rifletta il cambiamento effettivo cercato (recidiva, occupazione, stabilità abitativa).
- **Nessun controfattuale credibile**: senza un gruppo di confronto abbinato, un miglioramento potrebbe essere regressione alla media o una tendenza più ampia, non l'effetto del programma — vedi [analisi-controfattuale](../counterfactual-analysis/) e [addizionalità-e-peso-morto](../additionality-and-deadweight/).
- **Sottostimare i costi di transazione e valutazione**: la verifica indipendente, il collegamento dei dati, e l'amministrazione del contratto per gli schemi PbR/SIB routinariamente arrivano a doppie cifre come percentuale del valore del contratto — la base di evidenza del GO Lab documenta questo come un motore ricorrente della discontinuazione degli schemi.
- **Selezione selettiva o "parcheggio"**: i fornitori pagati per risultato hanno un incentivo diretto a prioritizzare i clienti più probabili di avere successo comunque e deprioritizzare i casi più difficili — progetta livelli di pagamento o aggiustamento del mix di casi per contrastarlo.

## Fonti

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
