# Ritorno sull'investimento del donatore

Il ritorno sull'investimento del donatore è ciò che la sterlina di uno specifico donatore effettivamente compra in risultati — non i rapporti operativi dell'organizzazione benefica, e non il rendimento dell'organizzazione benefica stessa sul suo budget totale. Ridefinisce il ROI dalla perspettiva dell'organizzazione (quanto efficientemente operiamo) alla perspettiva del donatore (cosa cambia il mio contributo marginale), e i due numeri sono abitualmente, ed erroneamente, trattati come la stessa cosa.

## Perché è importante

Il "ROI" proprio di un'organizzazione benefica, nella misura in cui la frase viene usata affatto, di solito descrive qualcosa come il [costo per beneficiario](../cost-per-beneficiary/) o il [rapporto di overhead delle organizzazioni benefiche](../charity-overhead-ratio/) — misure di efficienza organizzativa. Il ROI di un donatore è una domanda interamente diversa: dato che questa organizzazione benefica ha già altro reddito, cosa aggiunge il denaro di *questo* donatore al margine? Se un'organizzazione benefica erogherebbe lo stesso programma con o senza un particolare regalo di £10.000 — perché ha riserve ampie, o perché un altro finanziatore avrebbe riempito il vuoto — il ROI del donatore di quel regalo è vicino a zero, per quanto buono sembri il rapporto di overhead complessivo o il costo per risultato dell'organizzazione benefica.

Questa è la stessa domanda di addizionalità che sottostà alla valutazione del [value for money](../value-for-money/) nella spesa pubblica britannica e all'[addizionalità e peso morto](../additionality-and-deadweight/) nella valutazione dei programmi: il valore creato è accreditabile a un finanziatore solo nella misura in cui non sarebbe accaduto comunque. Le principali piattaforme donor-advised e le organizzazioni di donazione efficace (Giving What We Can, GiveWell) costruiscono le loro raccomandazioni esplicitamente attorno a questa distinzione, chiedendo non "è questa una buona organizzazione benefica" ma "questa organizzazione benefica ha spazio non riempito per più finanziamento tale che il mio regalo sia addizionale."

## Il calcolo

```
ROI del donatore ≠ Efficienza operativa dell'organizzazione
                   benefica

ROI del donatore ≈ (Risultato raggiunto con il regalo) −
                    (Risultato che sarebbe accaduto senza di
                    esso, cioè il controfattuale)
                   ──────────────────────────────────────
                            Dimensione del regalo

Input chiave:
  - Spazio per più finanziamento (l'organizzazione benefica è
    vincolata dal finanziamento al margine?)
  - Funging (un altro donatore avrebbe riempito il vuoto?)
  - Costo-efficacia marginale al livello di finanziamento
    specifico (i costi spesso salgono mentre un intervento
    scala oltre la sua popolazione più facile da raggiungere)
```

Vedi [costo-efficacia dell'altruismo efficace](../effective-altruism-cost-effectiveness/) per come GiveWell operazionalizza la domanda "spazio per più finanziamento," e [analisi controfattuale](../counterfactual-analysis/) per il metodo generale.

## Esempio pratico

Un donatore sta scegliendo tra due regali di £5.000:

- **Organizzazione benefica C**: ha un programma centrale completamente finanziato con £2 milioni in riserve e una lista d'attesa di finanziatori; i £5.000 marginali probabilmente vengono aggiunti alle riserve o a un'attività a priorità più bassa. Risultato addizionale del donatore stimato: minimo — il denaro non sta ovviamente cambiando cosa accade.
- **Organizzazione benefica D**: un piccolo programma supportato da evidenza che ha dichiarato pubblicamente che dovrà rifiutare 200 persone il prossimo trimestre senza £50.000 aggiuntivi, e ne ha raccolti £42.000. I £5.000 marginali molto probabilmente finanziano erogazione aggiuntiva reale — diciamo, 20 persone aggiuntive servite, al costo per beneficiario dichiarato dall'organizzazione benefica stessa di £250.

Stessa dimensione del regalo, stesso donatore, ROI del donatore radicalmente diverso — non perché l'Organizzazione benefica C sia un'organizzazione peggiore (potrebbe avere una cifra di costo-per-risultato complessivamente migliore) ma perché il suo vuoto di finanziamento marginale è già chiuso.

## Collegamento con lo sviluppo software

Le piattaforme per donatori e gli strumenti di raccomandazione per la donazione troppo spesso mostrano solo metriche di efficienza a livello di organizzazione (rapporto di overhead, costo per beneficiario) perché quelle sono ciò che le organizzazioni benefiche pubblicano nei report annuali e ciò che è più facile da estrarre in una tabella di confronto. Rappresentare correttamente il ROI del donatore richiede un punto di dati diverso, più difficile da ottenere: il vuoto di finanziamento attuale dichiarato di un'organizzazione benefica o il suo "spazio per più finanziamento," che cambia durante l'anno ed è raramente dati strutturati. Le piattaforme che vogliono supportare un genuino ragionamento di ROI del donatore necessitano sia di un feed diretto dalle disclosure del vuoto di finanziamento (come GiveWell mantiene manualmente per le sue organizzazioni benefiche raccomandate) sia di una disclaimer esplicita che una tabella di confronto stia mostrando efficienza organizzativa, non addizionalità del donatore. Vedi [rapporto di overhead delle organizzazioni benefiche](../charity-overhead-ratio/) per la metrica con cui il ROI del donatore viene più spesso, ed erroneamente, confuso.

## Insidie

- **Confondere l'efficienza dell'organizzazione benefica con l'addizionalità del donatore.** Un'organizzazione benefica ben gestita e a basso overhead può ancora avere un ROI marginale del donatore vicino a zero se non è vincolata dal finanziamento.
- **Ignorare il funging.** Se un grande finanziatore istituzionale avrebbe coperto il vuoto comunque, il regalo di un donatore individuale spiazza il denaro di quel finanziatore piuttosto che aggiungere nuova erogazione.
- **Assumere costo-efficacia lineare su scala.** I beneficiari più economici da raggiungere sono spesso serviti primi; il costo marginale per risultato frequentemente sale mentre un programma si espande, quindi il ROI sulla prossima sterlina non è lo stesso del ROI sulla sterlina media già spesa.
- **Nessun vuoto di finanziamento dichiarato.** Un'organizzazione benefica o piattaforma che non può dire cosa finanzierebbero i prossimi £X non può supportare una genuina rivendicazione di ROI del donatore, solo una di costo medio.

## Fonti

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
