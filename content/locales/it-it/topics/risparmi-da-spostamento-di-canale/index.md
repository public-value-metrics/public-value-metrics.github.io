# Risparmi da spostamento di canale

I risparmi da spostamento di canale sono la riduzione di costo proiettata dallo spostare volume di transazioni fuori da canali costosi — telefono, sportelli faccia-a-faccia, posta cartacea — verso un auto-servizio digitale economico. È il motore finanziario dietro "digital by default", ed è anche la voce di bilancio nel caso aziendale più probabile a essere sbagliata, perché l'assunzione su cui riposa — che i canali offline si restringano mentre l'adozione digitale sale — è solo talvolta vera.

## Perché è importante

L'aritmetica sembra indiscutibile usando le cifre del [costo per transazione](../costo-per-transazione/) dal Digital Efficiency Report: sposta un milione di transazioni da una visita faccia-a-faccia di £8,62 a una digitale di £0,15 e il risparmio è oltre £8 milioni. Ma un risparmio diventa denaro liberato per la ridistribuzione solo se la *capacità fissa* del canale che si restringe viene effettivamente smantellata — i posti del call centre, il personale dello sportello, i minuti del contratto telefonico — e i programmi di trasformazione digitale del governo locale hanno ripetutamente trovato che il volume di contatto totale non scende in linea con l'adozione digitale. La ricerca dai programmi di trasformazione digitale delle autorità locali e organismi come Socitm e la Local Government Association ha documentato un pattern ricorrente: i canali digitali attraggono contatto genuinamente nuovo (cittadini che non avrebbero telefonato o visitato ora lo fanno, perché è più facile), e una quota significativa delle transazioni "digitali" falliscono a metà strada e generano una chiamata telefonica comunque — quindi il volume telefonico scende per molto meno della percentuale di adozione digitale suggerirebbe, talvolta non scendendo affatto in termini assoluti anche mentre la sua *quota* del contatto totale declina.

## Il calcolo

```
Risparmio grezzo da spostamento di canale = volume spostato ×
                        (costo_vecchio_canale − costo_digitale)

Risparmio netto (realizzato) = risparmio grezzo
                       − nuova domanda/domanda ombra creata
                         dal canale più facile
                       − costo della domanda di fallimento
                         (fallimenti digitali che generano
                         comunque una chiamata telefonica o
                         una visita allo sportello)
                       − costo della capacità fissa non
                         ritirata (un call centre può solo
                         liberare personale in unità
                         discrete; un calo di volume del 15%
                         raramente permette di tagliare il
                         15% del personale)

Soglia di realizzazione: i risparmi sono incassabili solo
una volta che il volume scende sotto il livello a cui il
vecchio canale può essere dotato di personale al suo
prossimo passo di capacità discreto più piccolo (es.
perdere un intero turno, un'intera postazione, una fascia
di personale contrattato)
```

## Esempio pratico

**Servizio di rinnovo del contrassegno disabili della contea**: 60.000 rinnovi/anno, precedentemente 100% telefono/carta a £6,40 per transazione. Un nuovo servizio digitale viene lanciato e raggiunge il 65% di adozione digitale entro un anno, a £0,30 per transazione digitale.

```
Calcolo del risparmio ingenuo (grezzo):
  39.000 spostati × (£6,40 − £0,30) = £237.900/anno

Cosa è effettivamente accaduto, secondo i dati del
contact-centre del comune:
  Il volume telefonico è sceso da 60.000/anno a 46.000/anno
  (−23%, non −65%) perché: 9.000 percorsi digitali sono
  falliti e hanno generato una chiamata di follow-up
  (perdita da domanda di fallimento), e 4.000 persone che
  precedentemente non rinnovavano affatto ora lo fanno,
  avendolo trovato facile online (domanda ombra — un
  genuino miglioramento di accesso, ma non un risparmio)

  Il contact centre telefonico è dotato di personale in
  fasce di 8.000 chiamate/FTE; un calo di 14.000 chiamate
  (60.000 → 46.000) libera 1,75 FTE, arrotondato in basso
  nella pratica a 1 FTE effettivamente ridistribuito =
  £34.000/anno

Risparmio realizzato = £34.000/anno più il costo di
  costruzione/gestione del canale digitale evitato su
  39.000 transazioni ≈ £34.000 + (39.000 × £0,30 costo
  digitale già contato) — una frazione dei £237.900 del
  titolo, sebbene il servizio sia ancora inequivocabilmente
  migliore per gli utenti.
```

## Collegamento con lo sviluppo software

La lezione ingegneristica è che i risparmi da spostamento di canale vengono realizzati da decisioni *operative* (pianificazione dei turni, smantellamento, rinegoziazione del contratto), non dal rilascio del software — un team può raggiungere ogni punto dello [standard dei servizi digitali](../standard-dei-servizi-digitali/) e ancora erogare zero risparmio netto se nessuno ritira la capacità fissa del vecchio canale. Strumentare la domanda di fallimento (dove nel percorso digitale gli utenti abbandonano e cosa fanno dopo) è un problema di analitica di funnel risolvibile e la singola cosa a leva più alta che un team ingegneristico può fare per proteggere il caso dei risparmi; è anche il collegamento diretto al [costo per transazione](../costo-per-transazione/), che la domanda di fallimento silenziosamente gonfia. Vedi [realizzazione dei benefici](../realizzazione-dei-benefici/) per la disciplina più ampia di verificare che i risparmi di un caso aziendale effettivamente si materializzino, e [inclusione digitale](../inclusione-digitale/) per perché il canale offline di solito non può, e non dovrebbe, essere interamente ritirato.

## Insidie

- **Assumere una sostituzione di canale 1:1**: modellare l'adozione digitale come una sottrazione diretta dal volume telefono/sportello, ignorando la domanda ombra e la perdita da domanda di fallimento documentate nella ricerca sullo spostamento di canale del governo locale.
- **Contabilizzare i risparmi grezzi prima dello smantellamento**: contare il risparmio nel caso aziendale l'anno in cui l'adozione sale, non l'anno (se mai) in cui la capacità del vecchio canale viene effettivamente tagliata.
- **Ignorare la natura a funzione a scalini dei costi del personale**: un calo di volume del 20% raramente si converte in un calo di costo del 20%, perché i contact centre e gli sportelli sono dotati di personale in fasce discrete, non continuamente.
- **Trattare la domanda ombra come spreco**: nuovo contatto da utenti precedentemente esclusi o precedentemente dissuasi è un reale aumento del [valore pubblico](../valore-pubblico/), non un errore di modellazione — dovrebbe essere riportato come un risultato di accesso, non nettizzato come rumore.

## Fonti

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
