# Analisi costo-efficacia nel governo

L'analisi costo-efficacia (ACE) confronta i costi di modi alternativi per raggiungere lo *stesso* risultato, espressi in unità naturali — costo per persona senza fissa dimora alloggiata, costo per alunno portato allo standard previsto, costo per tonnellata di CO2 abbattuta — senza convertire il risultato stesso in denaro.

## Perché è importante

Il Green Book tratta l'ACE come il metodo di riserva quando il requisito della [analisi costo-beneficio sociale](../social-cost-benefit-analysis/) di monetizzare ogni beneficio diventa non solo difficile ma disonesto — dove mettere un prezzo credibile sul risultato richiederebbe assunzioni che nessuno effettivamente sostiene (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Capitolo 5, sulla valutazione delle opzioni dove i risultati non sono facilmente monetizzabili). L'ACE è il metodo preso in prestito più direttamente dall'economia sanitaria — è strutturalmente identico a come il NICE confronta i trattamenti usando il costo per Anno di Vita Aggiustato per Qualità — ma applicato a programmi pubblici non sanitari: interventi educativi per punto-risultato-alunno, programmi abitativi per famiglia prevenuta dal senzatetto, programmi occupazionali per risultato di lavoro sostenuto.

Il motivo per cui l'ACE guadagna il suo posto insieme alla SCBA piuttosto che essere assorbita da essa è che forzare un valore monetario su alcuni risultati produce un numero abbastanza preciso da sembrare autorevole e abbastanza contestato da essere inutile in un dibattito pubblico — mettere un prezzo su "un bambino che legge allo standard previsto" invita esattamente il tipo di sfida che fa deragliare un caso aziendale in un comitato selezionato. L'ACE evita l'argomento rifiutando di averlo: classifica le opzioni per costo per unità del *risultato stesso*, lasciando il giudizio politico separato sul fatto che il risultato valga la pena di essere perseguito al caso strategico.

## Il calcolo

```
Rapporto costo-efficacia (medio) = Costo totale / Unità
                                   totali di risultato
                                   raggiunto

Rapporto costo-efficacia incrementale (RCEI), confrontando
opzione A con opzione B:
RCEI = (Costo_A − Costo_B) / (Risultato_A − Risultato_B)

Procedura:
1. Fissa l'unità di risultato e il metodo di misurazione
   attraverso tutte le opzioni confrontate.
2. Costa ogni opzione sulla stessa base (vedi
   ../green-book-appraisal/, caso finanziario) sullo stesso
   orizzonte temporale.
3. Scarta le opzioni dominate: qualsiasi opzione che costa
   più per unità di un'alternativa più economica che
   raggiunge lo stesso risultato o migliore viene scartata.
4. Classifica le opzioni rimanenti per rapporto costo-
   efficacia incrementale, non medio.
```

L'ACE non può, da sola, dire se un programma vale la pena di essere finanziato — solo quale di diversi approcci allo stesso obiettivo sia più economico per unità. Decidere se l'obiettivo stesso valga la spesa richiede o riconvertire in SCBA (se esiste una valutazione credibile) o un giudizio politico/strategico fuori dalla matematica. Dove i risultati genuinamente non possono essere ridotti a un'unità — perché un programma produce diversi risultati che contano in modi diversi — usa invece [analisi decisionale multi-criterio](../multi-criteria-decision-analysis/).

## Esempio pratico

**Autorità locale**: un comune confronta tre approcci per ridurre il dormire in strada, ciascuno costato su un anno contro il risultato "individui trasferiti in alloggio stabile per 6+ mesi":

```
Opzione                           Costo       Risultati     RCE
                                              raggiunti     medio
Housing First (intensivo)         £900.000    60            £15.000/
                                                             risultato
Ostello + supporto al
trasferimento                     £600.000    50            £12.000/
                                                             risultato
Outreach + settore privato in
affitto                           £350.000    20            £17.500/
                                                             risultato

RCEI, Ostello vs Outreach:  (600k−350k)/(50−20) = £8.333 per
risultato aggiuntivo
RCEI, Housing First vs Ostello: (900k−600k)/(60−50) = £30.000
per risultato aggiuntivo
```

Outreach è dominato in media dall'Ostello, ma il passo *incrementale* da Outreach a Ostello costa solo £8.333 per persona aggiuntiva alloggiata — economico rispetto al passo Housing First, che costa £30.000 per ogni persona aggiuntiva oltre ciò che raggiunge l'Ostello. Un'autorità vincolata dal bilancio che scala dovrebbe preferire espandere l'Ostello prima di Housing First, anche se Housing First sembra migliore sul proprio rapporto medio.

**Governo nazionale**: un programma di recupero dell'alfabetizzazione viene confrontato attraverso tre modelli di erogazione su "costo per alunno che raggiunge lo standard di lettura previsto per l'età": tutoraggio uno-a-uno (£1.800/alunno), tutoraggio in piccolo gruppo (£700/alunno), e intervento solo-digitale (£150/alunno, ma solo il 40% del tasso di risultato del tutoraggio in piccolo gruppo per alunno iscritto una volta aggiustato per il calo di engagement). Una volta aggiustato per il completamento effettivo, il solo-digitale costa £375 per alunno che raggiunge lo standard — ancora il più economico, ma l'ACE non può dire se il numero assoluto minore di alunni aiutati dal solo-digitale, se erogato allo stesso bilancio del piccolo gruppo, sia uno scambio accettabile contro raggiungere meno alunni a maggiore profondità; questo è un giudizio distributivo che l'ACE rimanda ai decisori.

## Collegamento con lo sviluppo software

L'ACE è il quadro giusto ogni volta che i team ingegneristici valutano approcci di erogazione per lo *stesso* risultato di servizio — costo per identità verificata con successo attraverso tre fornitori di verifica dell'identità, costo per caso correttamente classificato attraverso due design di automazione del lavoro sui casi, costo per difetto di accessibilità risolto attraverso rimedio interno contro esterno. La disciplina che importa direttamente: definisci l'unità di risultato prima di confrontare i costi (non "ticket chiusi" — un output — ma "bisogno dell'utente effettivamente risolto"), e calcola sempre il rapporto incrementale tra il sistema attivo e un sostituto proposto, non il costo medio di ciascun sistema isolatamente. Vedi [risultati contro output](../outcomes-vs-outputs/) e [costo per risultato](../cost-per-outcome/).

## Insidie

- **Confrontare rapporti medi, non incrementali, quando si decide un'espansione.** Come mostra l'esempio del dormire in strada, l'opzione con il miglior rapporto medio non è sempre la prossima unità di risultato più economica da acquistare.
- **Scegliere un'unità di risultato che è realmente un output.** "Segnalazioni fatte" o "sessioni erogate" misurano l'attività, non il risultato che il programma esiste per produrre; l'ACE sugli output produce un numero che sembra sicuro ma risponde alla domanda sbagliata.
- **Confrontare attraverso risultati genuinamente diversi.** L'ACE è valida solo quando ogni opzione mira allo stesso risultato misurato nello stesso modo; confrontare "costo per persona senza fissa dimora alloggiata" con "costo per giovane che lascia l'affidamento in locazione stabile" ha bisogno di una misura di risultato generica o di [analisi decisionale multi-criterio](../multi-criteria-decision-analysis/), non ACE.
- **Ignorare la durata del risultato.** Un'opzione più economica che produce risultati che non persistono (un alunno che regredisce dopo la fine dell'intervento) non è effettivamente più costo-efficace una volta misurata su un orizzonte comparabile; abbina il periodo di follow-up tra le opzioni confrontate.

## Fonti

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Local Economic Growth. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworksgrowth.org/>
