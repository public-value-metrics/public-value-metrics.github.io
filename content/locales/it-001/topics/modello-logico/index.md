# Modello logico

Un modello logico è un diagramma lineare che collega input, attività, output, risultati, e impatto per un programma, letto da sinistra a destra come una catena di responsabilità: le risorse entrano, le attività accadono, gli output vengono prodotti, i risultati cambiano per i beneficiari, e l'impatto si accumula su una scala temporale più ampia o più lunga. È la struttura standard contro cui i finanziatori e i revisori si aspettano che un programma sia rendicontabile, e la controparte rivolta al futuro di una [teoria del cambiamento](../teoria-del-cambiamento/) mappata all'indietro.

## Perché è importante

Il Magenta Book del HM Treasury specifica il modello logico come un elemento richiesto del design di valutazione del programma, e finanziatori come il National Lottery Community Fund costruiscono i loro modelli di domanda e reporting esattamente attorno a questa catena a cinque colonne. Il suo valore è che costringe un programma a dichiarare, in un diagramma, cosa spenderà, cosa farà con esso, cosa produrrà, e — criticamente — cosa dovrebbe cambiare come risultato, a un livello di specificità che un paragrafo di prosa tende a oscurare. Un modello logico con una colonna di input e attività popolata ma una colonna di risultati vuota o vaga è diagnosticabile a colpo d'occhio, che è precisamente perché i finanziatori ne chiedono uno.

## Il calcolo

Il modello logico è una catena strutturale piuttosto che una formula:

```
Input          Attività          Output              Risultati            Impatto
(risorse       (cosa viene       (prodotti diretti,   (cambiamento per     (cambiamento di
 impegnate)     fatto con esse)   contabili)           i beneficiari)       lungo termine, a
                                                                             livello di
                                                                             popolazione o
                                                                             sistemico)
```

Ogni colonna dovrebbe essere più specifica dell'ultima: gli input sono ciò che spendi, le attività sono ciò che fai, gli output sono ciò che viene erogato indipendentemente dall'effetto, i risultati sono ciò che cambia come risultato — la distinzione trattata per intero in [risultati contro output](../risultati-contro-output/) — e l'impatto è il cambiamento durevole, spesso attribuibile solo in parte, di lungo periodo.

## Esempio pratico

**Autorità locale (servizio digitale di consulenza sul debito)**:

- Input: budget annuale di £180.000, 4,0 FTE di consulenti, un sistema di gestione dei casi.
- Attività: sessioni di outreach, appuntamenti di consulenza sul debito uno-a-uno.
- Output: 900 appuntamenti erogati; 750 piani di debito e benefici emessi.
- Risultati: dei clienti che raggiungono un follow-up a 6 mesi, il 60% (450 di 750) riporta arretrati ridotti, con una media di riduzione di £1.200 per cliente — £540.000 in riduzione aggregata degli arretrati.
- Impatto: un calo misurabile nelle domande di senzatetto dalla base clienti del servizio su due anni, solo parzialmente attribuibile a questo servizio insieme ad altri interventi (vedi [analisi controfattuale](../analisi-controfattuale/)).

**Organizzazione benefica (partnership di segnalazione a banco alimentare)**:

- Input: £45.000, 1,5 FTE di coordinatore, accordi di partnership con 12 agenzie di segnalazione.
- Attività: triage delle segnalazioni, imballaggio e distribuzione dei pacchi.
- Output: 5.000 pacchi alimentari distribuiti a 1.100 famiglie.
- Risultati: il 68% delle famiglie intervistate (748 di 1.100) riporta sicurezza alimentare migliorata a una chiamata di follow-up a 4 settimane.
- Impatto: contributo alla domanda ridotta di servizi di crisi locali, comprovato solo in statistiche aggregate dell'area, non attribuibile a questa organizzazione benefica da sola.

## Collegamento con lo sviluppo software

Il modello logico è vicino a un modello di dati letterale per un sistema di risultati: input e attività sono dati operativi che già possiedi (spesa, personale, log delle sessioni); gli output sono facili da strumentare perché vengono contati al punto di erogazione; i risultati richiedono una raccolta di dati di follow-up deliberatamente progettata (indagini, collegamento di dati amministrativi) che non esisterà a meno che qualcuno non la costruisca; l'impatto solitamente richiede dati collegati, longitudinali, o a livello di popolazione oltre i sistemi di un singolo programma. Gli ingegneri che costruiscono strumenti di reporting dovrebbero spingere i commissari a definire indicatori di risultato e impatto al momento del design, piuttosto che impostare come predefinito un dashboard solo-output perché è ciò che i dati transazionali già supportano. Vedi [ritorno sociale sull'investimento](../ritorno-sociale-sullinvestimento/) per un metodo che valuta specificamente le colonne di risultati e impatto, e [realizzazione dei benefici](../realizzazione-dei-benefici/) per tracciare se la colonna dell'impatto è stata effettivamente erogata.

## Insidie

- **Fermarsi agli output.** Un dashboard che riporta appuntamenti erogati o pacchi distribuiti e implica beneficio sta riportando attività, non risultati — vedi [risultati contro output](../risultati-contro-output/).
- **Nessun collegamento causale dichiarato tra le colonne.** Un modello logico dichiara la catena ma non perché le attività dovrebbero produrre output che dovrebbero produrre risultati; quel ragionamento appartiene a una [teoria del cambiamento](../teoria-del-cambiamento/), e un modello logico senza una dietro è non testato.
- **Trattarlo come un documento di proposta una tantum.** I modelli logici prodotti solo per soddisfare una domanda di finanziamento e mai aggiornati smettono di rispecchiare ciò che il programma effettivamente fa.
- **Deriva di attribuzione alla colonna dell'impatto.** Rivendicare il cambiamento a livello di popolazione come causato esclusivamente da un programma, senza un controfattuale, sopravvaluta ciò che l'evidenza supporta.

## Fonti

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
