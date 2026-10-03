# Spostamento e attribuzione

Lo spostamento si verifica quando il beneficio apparente di un programma viene raggiunto togliendo attività o beneficio da altrove, piuttosto che creando qualcosa di nuovo — la tua vittoria è la perdita di qualcun altro. L'attribuzione è la questione correlata di quanto di un risultato osservato il tuo intervento possa genuinamente rivendicare come merito, quando anche altri attori e fattori hanno contribuito. Entrambi sono aggiustamenti standard nella guida britannica alla valutazione del settore pubblico, insieme a peso morto e dispersione, ed entrambi vengono regolarmente saltati da rivendicazioni di impatto che sembrano molto più forti di quanto siano.

## Perché è importante

Uno schema di sovvenzioni alle imprese di un'autorità locale che aiuta 50 negozi a trasferirsi in una zona di rigenerazione può riportare "50 aziende supportate, 200 posti di lavoro creati" — ma se quelle aziende si sono semplicemente spostate da una via commerciale vicina piuttosto che espandersi, i posti di lavoro sono stati spostati, non creati, e l'effetto netto a livello di distretto (o regionale) potrebbe essere vicino a zero. Il Magenta Book del HM Treasury e la longeva Additionality Guide trattano lo spostamento come una deduzione richiesta precisamente perché le storie di successo locale sono comuni anche quando non producono alcun beneficio netto nazionale o regionale — il valore si è semplicemente spostato, spesso a svantaggio dell'area o degli attori che lo hanno perso. La guida alla valutazione dei fondi strutturali (usata per i precedenti programmi del Fondo Europeo di Sviluppo Regionale e i loro successori nazionali, come lo UK Shared Prosperity Fund) formalizza questo a tre scale spaziali: spostamento locale (all'interno di una città), spostamento regionale (all'interno di una regione), e spostamento nazionale (attraverso il Regno Unito), perché un intervento può essere aggiuntivo a una scala mentre è puro spostamento a una più ampia — un programma occupazionale che attira lavoratori da una città vicina è neutro a livello nazionale anche se sembra un successo locale.

L'attribuzione è il problema gemello nell'erogazione ricca di partnership, che è ora la norma nel lavoro del settore sociale e tra agenzie. Quando tre organizzazioni erogano congiuntamente un servizio di prevenzione del senzatetto, il rapporto annuale di ciascuna organizzazione può indipendentemente rivendicare il merito per la stessa riduzione del dormire in strada — somma tra i rapporti, l'impatto rivendicato può superare il cambiamento reale osservato, a volte di diversi multipli. La guida del Magenta Book sull'analisi del contributo esiste specificamente perché l'attribuzione casuale a un singolo attore è spesso impossibile nell'erogazione multi-agenzia, e la risposta onesta è frequentemente "abbiamo contribuito a questo risultato" piuttosto che "abbiamo causato questo risultato."

## Il calcolo

Lo spostamento come parte della sequenza standard di impatto netto (vedi [addizionalità e peso morto](../additionality-and-deadweight/) per la catena completa):

```
Impatto netto aggiuntivo = Risultato grezzo − Peso morto −
                          Spostamento − Dispersione, ×
                          Moltiplicatore

Tasso di spostamento = beneficio/attività dirottato da
                       altrove / beneficio/attività grezzo
                       totale osservato
```

L'attribuzione, dove più attori contribuiscono a un risultato, è tipicamente espressa come una quota di contributo piuttosto che una percentuale precisa, perché di solito non può essere misurata con lo stesso rigore dello spostamento:

```
Quota attribuibile ≈ f(forza del contributo causale,
                      contributi di altri attori, fattori
                      esterni/contestuali)

L'impatto rivendicato non dovrebbe mai superare:
  Σ (quota attribuibile di ogni partner) ≤ 100% del
  risultato totale osservato
```

## Esempio pratico

**Sovvenzione di rigenerazione**: lo schema di sovvenzioni per la via commerciale di un comune riporta 200 nuovi posti di lavoro al dettaglio creati nella zona finanziata. La ricerca di follow-up trova che 60 di quei posti sono venuti da aziende che si sono trasferite da una via commerciale vicina, non finanziata, all'interno dello stesso distretto, e altri 30 sono venuti da catene nazionali che aprivano filiali che si sarebbero aperte da qualche parte nella regione indipendentemente dalla sovvenzione.

```
Posti grezzi rivendicati = 200
Spostamento locale = 60 (spostati all'interno del distretto)
Spostamento regionale = 30 (si sarebbero aperti a livello
                        regionale comunque)

Posti netti aggiuntivi (livello distretto) = 200 − 60 = 140
Posti netti aggiuntivi (livello regionale) = 200 − 60 − 30
                                            = 110
```

Il numero principale onesto dipende dalla scala geografica a cui il finanziatore è interessato — un caso aziendale del Treasury valutato a livello nazionale o regionale dovrebbe usare 110, non il 140 a livello distrettuale, e certamente non il grezzo 200.

**Servizio multi-agenzia per il senzatetto**: tre organizzazioni partner (un comune, un'organizzazione benefica per gli alloggi, e un'azienda sanitaria) erogano congiuntamente un servizio di riduzione del dormire in strada. Il dormire in strada nell'area è diminuito di 30 persone nell'anno. Il rapporto annuale individuale di ciascuna organizzazione rivendica "abbiamo ridotto il dormire in strada di 30" — somma, i tre rapporti rivendicano 90 persone aiutate, tre volte la riduzione effettiva. Un'analisi del contributo che assegna a ciascun partner una quota (diciamo, 40% comune, 35% organizzazione benefica, 25% azienda sanitaria, basata su ruolo documentato e valutazione indipendente) riporterebbe rispettivamente 12, 10,5, e 7,5, sommando correttamente ai 30 osservati.

## Collegamento con lo sviluppo software

Spostamento e attribuzione plasmano come i sistemi di tracciamento dell'impatto e reporting dei risultati dovrebbero essere progettati per l'erogazione multi-sito o multi-partner:

- L'ambito geografico e organizzativo dovrebbe essere esplicito, un campo di prima classe in qualsiasi dashboard di impatto — una cifra riportata "per il distretto" e la stessa cifra riportata "per la regione" sono numeri diversi, e un sistema che li confonde produrrà numeri che non possono essere riconciliati a livello di portafoglio.
- Dove più partner erogano congiuntamente, un sistema di risultati dovrebbe registrare le quote di contributo (o come minimo segnalare l'attribuzione congiunta) piuttosto che lasciare che il modulo di reporting di ciascun partner rivendichi indipendentemente il 100% di un risultato condiviso — altrimenti i riepiloghi a livello di portafoglio esagereranno l'impatto totale, a volte gravemente.
- Questo si collega a [ritorno sociale sull'investimento](../social-return-on-investment/) e [reporting dei risultati delle sovvenzioni](../grant-outcomes-reporting/): un calcolo SROI o IRIS+ che ignora lo spostamento o sovra-attribuisce risultati condivisi produrrà un rapporto gonfiato che non sopravvive ad audit o replicazione.

## Insidie

- **Riportare il successo locale senza verificare lo spostamento più ampio.** Un programma può sembrare altamente riuscito alla scala di reporting più piccola essendo neutro o addirittura negativo a una più ampia; dichiara sempre la scala geografica a cui si applica la cifra netta.
- **Lasciare che ogni partner in un'erogazione congiunta rivendichi pieno merito.** A meno che le quote di contributo non siano concordate e documentate, il reporting riepilogativo tra partner esagererà l'impatto totale — verifica che le rivendicazioni a livello di partner sommino a non più del totale osservato.
- **Trattare l'attribuzione come una percentuale precisa quando è realmente un giudizio.** L'analisi del contributo, a differenza di un controfattuale randomizzato, produce una stima defendibile, non un fatto misurato; presentala con incertezza appropriata piuttosto che falsa precisione.
- **Ignorare lo spostamento in interventi orientati al mercato.** Il supporto alle imprese, gli schemi occupazionali, e la rigenerazione basata sul luogo sono le classiche categorie ad alto spostamento; tratta i controlli di spostamento come obbligatori per questi, non opzionali.

## Fonti

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
