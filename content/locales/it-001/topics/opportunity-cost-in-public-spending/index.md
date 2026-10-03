# Costo opportunità nella spesa pubblica

Il costo opportunità è il valore della migliore alternativa rinunciata quando un ente pubblico impegna denaro, tempo del personale, o capitale politico in un'opzione invece di un'altra. In un dipartimento con un bilancio fisso, ogni sterlina spesa in un programma è una sterlina che non può essere spesa nel prossimo miglior programma — il vero costo di una decisione non è ciò che spende, ma ciò che spiazza.

## Perché è importante

I bilanci pubblici hanno un limite di cassa all'interno di un periodo di revisione della spesa, quindi — a differenza di un'azienda privata in crescita — un dipartimento governativo non può semplicemente "trovare più soldi" per una buona idea; finanziarla significa definanziare qualcos'altro. Il Green Book del HM Treasury tratta questo come fondamentale: ogni valutazione è tenuta a confrontare un intervento con una baseline "do minimum" *e* con usi alternativi realistici della stessa risorsa, precisamente perché la vera domanda che un team di spesa del Treasury si pone non è mai "questo è buono?" ma "è meglio di cosa altro potrebbero comprare questi soldi?" Il principio fondamentale di valutazione del Green Book — che le risorse pubbliche dovrebbero fluire verso l'intervento con il più alto valore sociale netto per sterlina — è il costo opportunità dichiarato come politica.

Questo è facile da dichiarare e difficile da applicare perché la "migliore alternativa successiva" è raramente visibile in un singolo caso aziendale. Un programma di sovvenzioni di £2 milioni per l'occupazione giovanile viene confrontato, nel caso aziendale, con il non fare nulla — ma il confronto onesto è il prossimo miglior intervento per l'occupazione giovanile, o anzi il prossimo miglior uso di £2 milioni ovunque nel portafoglio, inclusa la spesa non legata all'occupazione. Il Magenta Book (HM Treasury, 2020) avverte esplicitamente che le valutazioni che confrontano "con intervento" a "senza intervento" sottostimano la barra che un intervento deve superare, perché "senza questo intervento" non è lo stesso di "senza nulla" — il denaro rilasciato finanzia qualcos'altro.

## Il calcolo

```
Costo opportunità della scelta di A = valore della migliore
                                      alternativa B rinunciata

Valore pubblico netto di A = valore(A) − valore(B), non
                             valore(A) − 0
```

Non esiste una formula universale perché l'alternativa rinunciata è specifica al contesto, ma la disciplina si generalizza: identifica il realistico prossimo miglior uso della stessa voce di bilancio (non un idealizzato "non fare nulla"), valutalo sulla stessa base (monetizzato dove possibile, secondo [analisi costo-beneficio sociale](../social-cost-benefit-analysis/)), e sottrai.

## Esempio pratico

**Voce di bilancio dipartimentale**: un fondo di trasformazione digitale di £5 milioni può finanziare esattamente una di due proposte in questo anno fiscale.

- *Opzione A*: una nuova piattaforma di gestione dei casi, beneficio monetizzato £7,2 milioni in 5 anni (risparmi di efficienza più risoluzione più rapida dei casi).
- *Opzione B*: un servizio di verifica dell'identità condiviso tra tre dipartimenti, beneficio monetizzato £6,4 milioni in 5 anni.

Un caso aziendale ingenuo per A confronta £7,2 milioni di beneficio con £5 milioni di costo e riporta un rapporto beneficio-costo di 1,44:1 — apparentemente forte. Ma poiché A e B competono per gli stessi £5 milioni, il costo opportunità della scelta di A è il beneficio rinunciato di £6,4 milioni di B. Il caso *netto* per A rispetto all'alternativa realistica è solo £7,2m − £6,4m = £0,8 milioni, non l'intera cifra di £7,2 milioni. Se una terza opzione, C, offrisse £7,5 milioni di beneficio per gli stessi £5 milioni, finanziare A invece di C distruggerebbe £0,3 milioni di valore pubblico anche se il caso aziendale di A sembra completamente giustificato isolatamente.

**Tempo del personale di un'autorità locale**: il team dati di tre persone di un comune può costruire una dashboard per le liste di attesa degli alloggi (stimata per far risparmiare 400 ore-funzionario/anno, valutate a £28/ora = £11.200/anno) o uno strumento di triage per le frodi sui sussidi (stimato per prevenire £85.000/anno in pagamenti errati). Costruire la dashboard ha un costo opportunità di £85.000/anno rinunciati, non semplicemente il costo salariale del team dati — il vero costo della costruzione interna "gratuita" è il beneficio molto più grande che il team avrebbe potuto produrre altrove.

## Collegamento con lo sviluppo software

La capacità ingegneristica all'interno di un ente pubblico è essa stessa un bilancio vincolato — capacità di sprint, non sterline — e si applica direttamente la stessa disciplina:

- Nomina sempre il comparatore: il caso aziendale di una funzionalità dovrebbe dichiarare cosa altro le stesse settimane-team potrebbero fornire, non solo il proprio ritorno.
- Tratta "abbiamo capacità ingegneristica libera" come l'inizio di un'analisi del costo opportunità, non la fine — la capacità libera ha ancora un miglior uso alternativo, anche se quell'uso è il rimborso del debito tecnico (vedi [debito tecnico come erosione del valore pubblico](../technical-debt-as-public-value-erosion/)).
- Collega questo direttamente a [value for money](../value-for-money/): il test "economia" del VFM è privo di significato senza un onesto comparatore di costo opportunità, e a [costo del ritardo nei programmi pubblici](../cost-of-delay-in-public-programmes/), che prezza la dimensione temporale della stessa logica dell'alternativa rinunciata.

## Insidie

- **Confrontare con "non fare nulla" invece della prossima miglior alternativa.** Il Green Book richiede una baseline "do minimum" precisamente perché il vero costo opportunità è raramente zero; un caso aziendale che supera solo la barra del "non fare nulla" non ha dimostrato di battere l'alternativa realistica.
- **Ignorare la competizione tra dipartimenti per lo stesso fondo.** Le voci di bilancio che sembrano protette all'interno di una direzione spesso competono a un livello superiore (una revisione della spesa, un programma di capitale) dove si realizza il vero costo opportunità.
- **Assumere che il tempo del personale liberato abbia valore ulteriore zero.** Il tempo "risparmiato" crea valore solo se rimpiegato in qualcosa di valore; se l'uso alternativo non esiste, il risparmio è nominale.

## Fonti

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — the canonical empirical demonstration of opportunity cost as
  a binding constraint in a fixed public budget. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
