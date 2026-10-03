# Analisi costo-beneficio sociale (SCBA)

L'analisi costo-beneficio sociale convertE ogni costo e beneficio di una politica o programma — di mercato e non di mercato — in un'unità monetaria comune, sconta i flussi futuri al valore attuale, e li nettizza per produrre un singolo numero: questa proposta rende la società migliore, e di quanto?

## Perché è importante

La SCBA è il metodo quantitativo predefinito nel caso economico della [valutazione Green Book](../green-book-appraisal/): la guida del HM Treasury richiede che le proposte dimostrino un valore sociale netto attuale (VSNA) positivo ovunque i benefici possano essere monetizzati credibilmente, usando la disponibilità a pagare come principio di valutazione base per i beni non di mercato (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Capitolo 5). La disciplina che impone è che l'analisi costo-beneficio "sociale" non è lo stesso esercizio di una valutazione di investimento del settore privato: deve includere costi e benefici che cadono su terze parti che non sono parte della transazione (esternalità), deve usare il [tasso di sconto sociale](../social-discount-rate/) piuttosto che un costo di capitale commerciale, e dovrebbe applicare la [ponderazione distributiva](../distributional-weighting/) dove una sterlina conta più per una famiglia più povera che per una più ricca.

Dove la SCBA si rompe è esattamente dove i suoi critici si aspettano: beni senza analogo di mercato — aria pulita, coesione sociale, il valore di una vita salvata — devono essere monetizzati usando metodi di [preferenza dichiarata](../stated-preference-valuation/) o [preferenza rivelata](../revealed-preference-valuation/), o un [prezzo ombra](../shadow-pricing/) deve essere costruito. Quando la monetizzazione è contestata piuttosto che semplicemente difficile, il Green Book stesso raccomanda di ricadere su [analisi costo-efficacia](../cost-effectiveness-analysis-in-government/) o [analisi decisionale multi-criterio](../multi-criteria-decision-analysis/) piuttosto che forzare un numero in cui nessuno crede.

## Il calcolo

```
VSNA = Σ [t=0 a T] (Beneficio_t − Costo_t) / (1 + r)^t

dove:
  Beneficio_t = tutti i benefici monetizzati nell'anno t,
                inclusi i beni non di mercato valutati
                tramite preferenza dichiarata/rivelata o
                prezzo ombra
  Costo_t     = tutti i costi monetizzati nell'anno t,
                incluso il costo opportunità delle risorse
                (vedi ../opportunity-cost-in-public-spending/)
  r           = tasso di sconto sociale (HM Treasury fissa
                3,5% decrescente a tassi più bassi oltre
                l'anno 30, secondo il Green Book Annex A)
  T           = periodo di valutazione

Rapporto costo-beneficio (BCR) = Σ VA(Benefici) / Σ
                                 VA(Costi)
```

Un BCR superiore a 1 (o VSNA superiore a zero) indica valore sociale netto. Le categorie value-for-money del Green Book (usate nella valutazione di trasporti e infrastrutture) etichettano intervalli di BCR: sotto 1,0 è scarso value for money, 1,0-1,5 è basso, 1,5-2,0 è medio, 2,0-4,0 è alto, e sopra 4,0 è molto alto. L'analisi di sensibilità — ricalcolare il VSNA sotto assunzioni pessimistiche e ottimistiche — è obbligatoria, non opzionale, perché i benefici non di mercato monetizzati portano ampie bande di incertezza.

## Esempio pratico

**Autorità locale**: un comune valuta un investimento di £3m in una nuova rete ciclabile e pedonale su un periodo di valutazione di 20 anni a un tasso di sconto del 3,5%.

```
Costi: £3m capitale nell'anno 0, £50.000/anno manutenzione
(anni 1-20)
VA(manutenzione) ≈ £50.000 × 14,2 (fattore di rendita a 20
anni al 3,5%) ≈ £710.000
VA totale(costi) ≈ £3,71m

Benefici (tutti monetizzati tramite strumenti di
valutazione pubblicati DfT/WHO):
  Beneficio sanitario da attività fisica aumentata:
  £180.000/anno
  Riduzione dell'assenteismo: £40.000/anno
  Decongestione (meno viaggi in auto): £60.000/anno
  Flusso totale di beneficio: £280.000/anno
VA(benefici) ≈ £280.000 × 14,2 ≈ £3,98m

VSNA = £3,98m − £3,71m = +£0,27m
BCR = 3,98 / 3,71 = 1,07 → value for money "basso"
```

Lo schema supera la barra ma solo appena; un'esecuzione di sensibilità con una stima del beneficio sanitario inferiore del 20% (riflettendo la genuina incertezza nella valutazione dell'attività fisica) fa scendere il BCR sotto 1,0, che è esattamente perché il Green Book richiede che la tabella di sensibilità venga pubblicata insieme al numero principale, non solo la stima centrale.

**Organizzazione benefica**: un programma di prevenzione della mortalità infantile che costa £500.000/anno viene valutato usando il valore di una vita statistica (VSL) — un prezzo ombra, non un prezzo di mercato osservato — di circa £2,1m (cifra aggiornata al 2023 del HM Treasury, essa stessa derivata da studi di preferenza dichiarata). Evitare una morte infantile all'anno contro un costo di £500.000 dà un BCR di 4,2, comodamente value for money "molto alto" — ma l'intero risultato riposa sulla cifra VSL, motivo per cui qualsiasi SCBA che usa il VSL deve rivelarlo come un'assunzione, non un fatto.

## Collegamento con lo sviluppo software

La SCBA è il quadro naturale per le decisioni di investimento in piattaforme e infrastrutture nel software governativo — confrontare una piattaforma di identità condivisa con soluzioni dipartimentali puntuali, per esempio, richiede monetizzare benefici come costo di onboarding duplicato ridotto, frode ridotta, e tempo-al-servizio più veloce che non hanno prezzo di mercato da soli. Gli ingegneri che costruiscono il servizio sottostante dovrebbero aspettarsi che i responsabili del programma chiedano input per questa analisi: costi unitari delle transazioni (vedi [costo per transazione](../cost-per-transaction/)), volumi previsti, e costi di degradazione/inattività. La disciplina più importante da importare: scontare i benefici futuri, nominare esplicitamente la baseline controfattuale (vedi [analisi controfattuale](../counterfactual-analysis/)), e non presentare mai una singola stima puntuale senza il suo intervallo di sensibilità.

## Insidie

- **Doppio conteggio dei benefici.** Contare sia "tempo risparmiato" che "produttività guadagnata da quel tempo" come voci di beneficio separate esagera il caso; il tempo risparmiato è il beneficio, il suo uso successivo non è aggiuntivo a meno che non sia evidenziato indipendentemente.
- **Omettere costi spostati.** Uno schema che sposta la congestione da una strada a un'altra, o sposta la frode da un canale a un altro, non ha creato il beneficio netto che il suo VSNA principale implica — vedi [spostamento e attribuzione](../displacement-and-attribution/).
- **Usare un tasso di sconto privato.** Applicare un costo di capitale commerciale (diciamo 8-10%) invece del tasso di sconto sociale sottovaluta sistematicamente i benefici pubblici a lungo orizzonte come i guadagni sanitari e ambientali — vedi [tasso di sconto sociale](../social-discount-rate/).
- **Monetizzare il non contestato e minimizzare il contestato.** Se due terzi del beneficio di una proposta sono un risparmio di efficienza monetizzato con sicurezza e un terzo è un guadagno di benessere monetizzato in modo incerto, il VSNA principale mescola silenziosamente un numero solido con uno debole; riportali separatamente.

## Fonti

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
