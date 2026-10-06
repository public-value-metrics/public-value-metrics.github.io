# Value for Money (VFM)

Value for money è il test formale del settore pubblico britannico sul fatto che la spesa raggiunga il miglior equilibrio disponibile tra costo e beneficio. Il Green Book del HM Treasury lo inquadra attraverso tre "E" — economia, efficienza, ed efficacia — con l'equità sempre più discussa come una contestata quarta E. Ogni caso aziendale del settore pubblico che supera il controllo deve rispondere esplicitamente a tutte e tre, non semplicemente affermare che la spesa "ne vale la pena".

## Perché è importante

VFM non è un sinonimo di "economico". Il Green Book (edizione HM Treasury, 2022) è esplicito che acquistare l'opzione a costo più basso (economia) senza verificare che produca i risultati previsti (efficacia) è un errore comune e costoso — un appalto che fa risparmiare il 10% sul costo unitario ma produce il 40% di impatto in meno è un valore peggiore, non migliore. Il framework delle tre E costringe un caso aziendale a separare tre modalità di fallimento genuinamente diverse: pagare troppo per gli input, sprecare input nella conversione in output, e produrre output che non si traducono in risultati che qualcuno voleva. I controlli di spesa del governo britannico — punti di approvazione del Treasury, studi value-for-money del National Audit Office (NAO), e valutazioni dei funzionari contabili dipartimentali — sono costruiti attorno a questo test a tre parti, quindi un caso aziendale ingegneristico che affronta solo il costo (economia) fallirà il controllo anche se la tecnologia è solida.

La "quarta E", l'equità, è contestata precisamente perché può entrare in conflitto con le altre tre: il modo più efficiente per erogare un servizio a livello nazionale è raramente il più equo, poiché concentrare l'erogazione dove è più economico raggiungere i cittadini spesso significa sottoservire chi è più difficile da raggiungere. La revisione del 2020 del Green Book ha risposto alle critiche (incluse quelle del Treasury Select Committee 2020 e dell'IPPR North) secondo cui i rapporti costo-beneficio puri favorivano sistematicamente le regioni già prospere, richiedendo che le valutazioni affrontino esplicitamente l'impatto distributivo — vedi [ponderazione distributiva](../ponderazione-distributiva/).

## Il calcolo

VFM non è un singolo rapporto ma una diagnostica a tre parti (o quattro parti), applicata in sequenza:

```
Economia:       Gli input sono acquistati al costo
                ragionevole più basso per la qualità
                richiesta? (£ per unità di input)

Efficienza:      Quanto bene gli input sono convertiti in
                output? (output / input, es. casi elaborati
                per ora-operatore)

Efficacia:       Gli output producono effettivamente i
                risultati previsti? (risultati raggiunti /
                risultati previsti)

[Equità]:        I costi e i benefici sono distribuiti
                equamente nella popolazione, o concentrati
                su chi ne ha meno bisogno?
```

Un fallimento VFM può verificarsi in qualsiasi fase indipendentemente: approvvigionamento economico con erogazione inefficiente; erogazione efficiente dell'output sbagliato; risultati efficaci acquistati a costo eccessivo. Vedi [KPI del settore pubblico](../kpi-del-settore-pubblico/) per come questi si traducono in indicatori misurabili, e [analisi costo-efficacia nel governo](../analisi-costo-efficacia-nel-governo/) per il metodo di confronto formale.

## Esempio pratico

**Centro contatti di un'autorità locale**: un comune confronta due opzioni per un nuovo sistema di gestione dei casi.

- *Opzione A*: licenza £600.000 (la più economica disponibile), ma gli operatori impiegano in media 22 minuti per caso perché il flusso di lavoro richiede la ridigitazione manuale tra i sistemi — l'efficienza è scarsa.
- *Opzione B*: licenza £900.000, flusso di lavoro integrato, gli operatori impiegano in media 9 minuti per caso.

L'economia da sola favorisce A (£300.000 più economica). Ma a 40.000 casi/anno, A costa 40.000 × 22/60 = 14.667 ore-personale; B costa 40.000 × 9/60 = 6.000 ore-personale. A un costo del personale completamente caricato di £28/ora, A costa £410.667/anno in tempo del personale contro i £168.000/anno di B — un divario di efficienza di £242.667/anno che supera la differenza di economia iniziale di £300.000 entro 14 mesi. Il VFM favorisce B una volta contata l'efficienza, non A.

**Sovvenzione di erogazione di un'organizzazione benefica**: un finanziatore confronta una sovvenzione di £50.000 che ottiene 200 collocamenti lavorativi riusciti (£250/collocamento — economia apparentemente eccellente) contro una sovvenzione di £120.000 che ottiene 350 collocamenti che persistono per oltre 12 mesi, rispetto ai collocamenti della prima sovvenzione, metà dei quali decadono entro 3 mesi. L'efficacia — risultati duraturi — inverte la classifica VFM apparente: il costo vero per collocamento *duraturo* è £250 ÷ 0,5 = £500 per la prima sovvenzione, contro £120.000/350 ≈ £343 per la seconda.

## Collegamento con lo sviluppo software

VFM fornisce ai team ingegneristici una disciplina per inquadrare i casi aziendali tecnologici nel modo in cui le funzioni finanziarie e di audit effettivamente li leggeranno:

- Dichiara economia, efficienza, ed efficacia come voci separate in un caso aziendale, non un singolo numero di "valore" misto — un revisore formato sul Green Book chiederà esattamente questa scomposizione.
- Attenzione a ottimizzare il costo di approvvigionamento (economia) a scapito dell'efficienza di integrazione e flusso di lavoro, un risparmio falso molto comune nell'IT governativo (vedi [costo totale di proprietà nell'IT governativo](../costo-totale-di-proprietà-nel-governo-it/) e [costruire vs comprare nel governo](../costruire-vs-comprare-nel-governo/)).
- L'efficacia richiede dati sui risultati, non solo conteggi di output — collega le metriche di erogazione a [risultati contro output](../risultati-contro-output/) e alla valutazione reale tramite [analisi controfattuale](../analisi-controfattuale/) piuttosto che assumere che gli output implichino risultati.
- Quando un sistema serve in modo irregolare tra regioni o demografie, la questione dell'equità è un'obiezione VFM legittima, non un separato "sarebbe bello" — vedi [inclusione digitale](../inclusione-digitale/).

## Insidie

- **Equiparare VFM al prezzo più basso.** L'economia è un terzo (o un quarto) del test; il Green Book avverte esplicitamente contro regole di approvvigionamento "al costo più basso" che ignorano efficienza ed efficacia.
- **Misurare output e chiamarli risultati.** Il throughput dei casi (efficienza) non è lo stesso dei casi risolti bene (efficacia); vedi [risultati contro output](../risultati-contro-output/).
- **Trattare l'equità come opzionale.** Dall'aggiornamento 2020 del Green Book, l'impatto distributivo deve essere valutato insieme alle tradizionali tre E, non aggiunto successivamente; ritrattarlo dopo l'approvazione di un caso aziendale è molto più difficile che includerlo dall'inizio.
- **Confrontare opzioni a volumi diversi senza normalizzare.** Un confronto VFM per unità tra opzioni che servono popolazioni diverse deve controllare la scala, altrimenti il confronto di efficienza è privo di significato.

## Fonti

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  edition). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" and VFM study methodology.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the
  Treasury Select Committee's 2020 review of the Green Book's regional bias).
