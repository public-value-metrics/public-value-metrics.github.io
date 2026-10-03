# Analisi decisionale multi-criterio (ADMC)

L'ADMC valuta e pesa le opzioni contro diversi criteri distinti e pesati contemporaneamente, producendo un confronto classificato senza forzare ogni criterio in una singola scala monetaria o di unità naturale. È il metodo di valutazione per decisioni dove i risultati che contano genuinamente non possono essere ridotti a un singolo numero.

## Perché è importante

Il Green Book sanziona esplicitamente l'ADMC (il suo appendice di casi studio Box 2 e l'Annex A ne discutono entrambi direttamente) per valutazioni dove i benefici sono "genuinamente incommensurabili" — dove convertire tutto in denaro tramite [analisi costo-beneficio sociale](../social-cost-benefit-analysis/), o in un risultato tramite [analisi costo-efficacia](../cost-effectiveness-analysis-in-government/), misrappresenterebbe la decisione piuttosto che chiarirla (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). La selezione del sito per una nuova prigione, per esempio, scambia il costo di capitale contro l'impatto sulla comunità, la connettività dei trasporti, l'effetto ambientale, e la reclutabilità del personale — criteri che non condividono un'unità comune e dove forzare un'unità condivisa (tipicamente il denaro) introdurrebbe di nascosto un giudizio di valore sull'importanza relativa, diciamo, dell'impatto ambientale rispetto al costo, vestito da aritmetica oggettiva.

L'onestà dell'ADMC è anche la sua principale vulnerabilità: perché i pesi sono assegnati da chiunque esegua la valutazione (o da un panel), il metodo è legittimo solo quanto il processo di ponderazione. La guida del Green Book è esplicita che criteri e pesi devono essere concordati e pubblicati *prima* che le opzioni vengano valutate, precisamente per prevenire un revisore che lavora a ritroso da un'opzione preferita ai pesi che la giustificano.

## Il calcolo

```
Per ogni opzione i e criterio j:
  Punteggio_ij = la performance dell'opzione contro quel
                criterio (spesso 0-100 o 1-10, da evidenza,
                giudizio esperto, o valutazione degli
                stakeholder)
  Peso_j       = importanza relativa del criterio j, i
                pesi sommano a 1 (o 100)

Punteggio pesato dell'opzione i = Σ_j (Punteggio_ij × Peso_j)

Procedura:
1. Concorda il set di criteri e i pesi PRIMA di valutare
   qualsiasi opzione (la ponderazione swing o il confronto
   a coppie, es. AHP, sono metodi di elicitazione comuni).
2. Valuta ogni opzione contro ogni criterio su una scala
   comune, da evidenza dove possibile.
3. Calcola i totali pesati; classifica le opzioni.
4. Testa la sensibilità dei pesi: la classifica sopravvive
   a un disaccordo plausibile su quanto ogni criterio
   dovrebbe contare?
```

L'ADMC non produce un valore assoluto defendibile come fa il valore attuale netto della SCBA — produce solo una classifica condizionata ai pesi concordati. Questo è una caratteristica quando la decisione riguarda genuinamente lo scambio di beni incommensurabili, e una responsabilità se usata per evitare il lavoro più difficile della monetizzazione dove la monetizzazione era effettivamente possibile.

## Esempio pratico

**Autorità locale**: un comune che seleziona una posizione per un nuovo centro di riciclaggio dei rifiuti domestici valuta tre siti contro quattro criteri, pesati da un panel inter-dipartimentale prima di qualsiasi visita del sito:

```
Criteri (peso):         Costo di capitale (30%)  Accesso
                        ai trasporti (25%)
                        Impatto sulla comunità (25%)
                        Impatto ambientale (20%)

Punteggi dei siti (0-100, più alto = migliore):
Sito A: costo 80, accesso 60, comunità 40, ambiente 70
Sito B: costo 60, accesso 90, comunità 70, ambiente 50
Sito C: costo 90, accesso 50, comunità 80, ambiente 60

Totali pesati:
Sito A = 80(.30) + 60(.25) + 40(.25) + 70(.20) = 24+15+10+14
       = 63
Sito B = 60(.30) + 90(.25) + 70(.25) + 50(.20)
       = 18+22,5+17,5+10 = 68
Sito C = 90(.30) + 50(.25) + 80(.25) + 60(.20)
       = 27+12,5+20+12 = 71,5
```

Il Sito C si classifica più alto. Un'esecuzione di sensibilità che sposta il peso dell'impatto sulla comunità dal 25% al 35% (prendendo 10 punti dal costo di capitale) cambia il totale del Sito C a 71,5 − 3 + 8 = 76,5 e quello del Sito B a 68 − 6 + 7 = 69 — il Sito C rimane in testa, quindi la classifica è robusta a quel plausibile disaccordo sulla ponderazione, che è esattamente il controllo che il Green Book si aspetta di vedere riportato.

**Organizzazione benefica**: una fondazione erogatrice che sceglie tra finanziare un servizio di consulenza sul debito, una rete di banchi alimentari, e un programma di alfabetizzazione finanziaria usa l'ADMC piuttosto che l'SROI (vedi [ritorno sociale sull'investimento](../social-return-on-investment/)) precisamente perché i fiduciari sono in buona fede in disaccordo su se il soccorso in crisi o la prevenzione dovrebbero pesare più pesantemente — l'ADMC gli permette di concordare la *forma* del disaccordo (un intervallo di peso) piuttosto che fingere che un singolo rapporto SROI lo risolva.

## Collegamento con lo sviluppo software

L'ADMC è lo strumento naturale per la selezione di fornitori e architettura quando i criteri genuinamente entrano in conflitto — scegliere tra un sistema di gestione dei casi ospitato nel cloud e uno on-premises scambia costo, rischio di sovranità dei dati, accessibilità, e velocità di erogazione in modi che non si riducono a un numero. I responsabili ingegneristici dovrebbero insistere che la ponderazione avvenga prima che le opzioni vengano valutate, esattamente come richiede il Green Book, perché un esercizio di ponderazione eseguito dopo aver visto la shortlist deriva in modo affidabile verso qualsiasi opzione la stanza già favorisse. Vedi [costruire vs comprare nel governo](../build-vs-buy-in-government/) per un'applicazione ADMC comune, e [scorecard del valore pubblico](../public-value-scorecard/) per uno strumento di punteggio strutturato correlato usato post-decisione piuttosto che pre-decisione.

## Insidie

- **Impostare i pesi dopo aver visto le opzioni.** Questo è il modo più comune in cui l'ADMC viene manipolata, intenzionalmente o no; pubblica i pesi prima della valutazione, e registra chi li ha impostati.
- **Trattare il totale pesato come un numero solido.** Un punteggio di 71,5 contro 68 non è un divario statisticamente significativo a meno che l'analisi di sensibilità non confermi che la classifica è stabile; riporta intervalli, non falsa precisione.
- **Usare l'ADMC per evitare una monetizzazione che era effettivamente fattibile.** Se la maggior parte dei criteri potesse essere prezzata credibilmente, impostare come predefinita l'ADMC invece della [SCBA](../social-cost-benefit-analysis/) scarta informazioni che la valutazione avrebbe potuto usare.
- **Lasciare che un singolo stakeholder dominante imposti tutti i pesi da solo.** La buona pratica del Green Book si aspetta che i pesi siano estratti da un panel rappresentativo, non dal direttore sponsorizzante, per evitare che la valutazione ri-derivi semplicemente ciò che quella persona già voleva.

## Fonti

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
