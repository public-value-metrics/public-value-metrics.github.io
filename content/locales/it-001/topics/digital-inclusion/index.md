# Inclusione digitale

L'inclusione digitale è la disciplina di assicurarsi che "digital by default" non diventi "solo digitale" — che i servizi pubblici progettati attorno al canale più economico funzionino ancora per i cittadini che non possono o non vogliono usarlo senza assistenza. Il GDS ha coniato il meccanismo di erogazione specifico, "digitale assistito", come un requisito obbligatorio per ogni servizio digitale governativo, non un extra opzionale.

## Perché è importante

La Government Digital Strategy del 2012 ha fissato l'ambizione chiaramente: i servizi digitali dovrebbero essere costruiti digital by default, ma la strategia stessa ha riconosciuto che circa il 10% degli adulti britannici non sarebbe stato in grado di usarli senza aiuto, e ha impegnato i dipartimenti a fornire supporto digitale assistito — una via mediata umanamente, per telefono, in persona, o tramite un intermediario — come parte del servizio, non un fallback separato avvitato più tardi. Quell'impegno è ora il punto 5 dello [standard dei servizi digitali](../digital-service-standard/), "assicurati che tutti possano usare il servizio". La scala dell'esclusione continua è tracciata dall'UK Consumer Digital Index annuale di Lloyds Banking Group: l'edizione 2024 ha trovato che circa 1,6 milioni di persone nel Regno Unito rimangono offline, e che questo gruppo pende pesantemente verso persone tra 70-79 anni, quelle che guadagnano sotto £35.000, e quelle in pensione o disoccupate — precisamente la popolazione più probabile a dipendere dai servizi pubblici che vengono riprogettati. Lo stesso report ha trovato che solo il 48% della forza lavoro britannica poteva completare tutti i 20 compiti del quadro Essential Digital Skills, il che significa che l'esclusione non è connettività binaria, è uno spettro di competenza, confidenza, e fiducia che una semplice metrica "ha banda larga" perde interamente.

## Il calcolo

L'inclusione digitale è un quadro e controllo di equità piuttosto che una singola formula, ma si compone con la valutazione quantitativa del valore tramite la [ponderazione distributiva](../distributional-weighting/):

```
Valore ingenuo da spostamento di canale:
  valore = volume spostato × (costo_vecchio − costo_digitale)
         [vedi risparmi-da-spostamento-di-canale]

Valore aggiustato per inclusione:
  valore = (volume spostato × risparmio non pesato)
         − (utenti esclusi × costo della fornitura
            digitale assistita)
         − (aggiustamento di peso distributivo per il
            danno ai gruppi esclusi che perdono accesso o
            affrontano qualità di servizio degradata)

Il digitale assistito non è il costo residuo del
fallimento — è un canale progettato con il proprio
[costo per transazione](../cost-per-transaction/),
tipicamente molto più alto per transazione del
self-service digitale ma di solito ancora più economico
del canale legacy che parzialmente sostituisce.
```

## Esempio pratico

**Servizio di benefici nazionali in stile Universal Credit**: 2,5 milioni di domande/anno, valutato come necessitante supporto digitale assistito per una stima del 10% dei richiedenti secondo l'assunzione di pianificazione della Government Digital Strategy.

```
Coorte esclusa/digitale-assistita = 2.500.000 × 10% =
                                    250.000 domande/anno

Costo del canale digitale assistito (supporto telefonico
+ faccia-a-faccia, dotato di personale per gestire
vulnerabilità e complessità) ≈ £9,50/domanda
  = 250.000 × £9,50 = £2.375.000/anno

Costo digitale self-service per l'altro 90% ≈
                                    £0,40/domanda
  = 2.250.000 × £0,40 = £900.000/anno

Costo per transazione misto = (2.375.000 + 900.000) /
                              2.500.000 = £1,31/domanda

Un design che salta il digitale assistito per raggiungere
un costo-per-transazione principale più basso (es. £0,40
misto, ignorando i 250.000 richiedenti esclusi) non
elimina quel costo di £2,375m — lo converte in
diritti non richiesti, appelli, e domanda di servizi di
crisi a valle che finisce su un budget interamente diverso.
```

## Collegamento con lo sviluppo software

Il digitale assistito è un canale progettato, il che significa che ha interfacce, SLA, e strumentazione come qualsiasi altro: uno strumento di caseworker basato su telefono, un portale intermediario per Citizens Advice o un'autorità locale, o un flusso di chiosco in persona. Trattarlo come un ripensamento — un numero di telefono in piccolo piuttosto che un canale considerato dalla discovery — è il modo singolo più comune in cui i servizi falliscono il punto 5 dello [standard dei servizi digitali](../digital-service-standard/) alla valutazione. L'inclusione digitale è la lente di equità su ogni altro argomento in questo capitolo: limita quanto aggressivamente i [risparmi da spostamento di canale](../channel-shift-savings/) possono essere realizzati, è una voce di bilancio che deve essere inclusa onestamente nel [costo per transazione](../cost-per-transaction/), ed è l'applicazione diretta della [ponderazione distributiva](../distributional-weighting/) a un contesto di servizi digitali — un risparmio che cade disproporzionatamente su persone già digitalmente ed economicamente escluse dovrebbe essere pesato verso il basso, non trattato come equivalente a un risparmio distribuito uniformemente attraverso la popolazione.

## Insidie

- **"Digital by default" letto come "solo digitale"**: chiudere la linea telefonica o lo sportello una volta che l'adozione digitale supera una soglia, senza verificare che la coorte rimanente abbia un'alternativa genuinamente usabile.
- **Misurare l'inclusione per connettività binaria**: "ha banda larga" o "possiede uno smartphone" è un proxy scarso per la capacità di completare una specifica transazione — il divario Essential Digital Skills (solo il 48% della forza lavoro britannica completa tutti i 20 compiti, secondo Lloyds 2024) mostra che competenza e confidenza contano tanto quanto l'accesso.
- **Costare il digitale assistito come un errore di arrotondamento**: bilanciarlo come una piccola voce di contingenza piuttosto che un canale proprio con il suo [costo per transazione](../cost-per-transaction/), poi essere sorpresi quando è sotto-finanziato e sotto-dotato di personale al lancio.
- **Indagare solo i completatori digitali riusciti**: la ricerca di satisfazione e usabilità eseguita interamente in-servizio perde le persone che non sono mai arrivate così lontano, che è esattamente la popolazione che il lavoro di inclusione digitale è pensato per proteggere.

## Fonti

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
