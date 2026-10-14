# Standard dei servizi digitali

Il GOV.UK Service Standard è il cancello che ogni servizio digitale del governo centrale deve superare prima di poter andare in produzione: 14 punti pubblicati, valutati da un panel indipendente alla fine di ogni fase di erogazione. È il meccanismo che trasforma "costruisci buoni servizi pubblici" da uno slogan in una decisione pass/fail con una traccia cartacea — e il discendente diretto del mandato "digital by default" della Government Digital Strategy del 2012.

## Perché è importante

Prima che esistesse il Service Standard, il fallimento dell'IT governativo era raramente visibile fino al lancio, e raramente attribuibile a una decisione a cui chiunque potesse puntare. La Government Digital Strategy del 2012 ha impegnato i dipartimenti a riprogettare i 25 servizi transazionali rivolti al pubblico a più alto volume come "digital by default", e ha supportato l'impegno con un meccanismo di conformità: i servizi non potevano andare in produzione su GOV.UK senza superare una valutazione di servizio contro quello che allora era uno standard a 26 punti (consolidato a 18 nel 2019, e ora lo standard a 14 punti in vigore oggi, che copre tre gruppi — comprendere i bisogni degli utenti, fornire un buon servizio, e usare la tecnologia giusta). Una valutazione di servizio è un evento reale: un panel di valutatori GDS o dipartimentali revisiona l'evidenza, interroga il team, ed emette un verdetto di superato, fallito, o "non soddisfatto" contro ogni punto, pubblicato sulla pagina di valutazione del servizio. Fallire una valutazione blocca il servizio dal passare dalla beta privata alla beta pubblica, o dalla beta alla produzione — è un vero cancello, non una revisione.

## Il calcolo

Il Service Standard è un quadro, non una formula, ma funziona come una struttura decisionale a stadi:

```
Discovery  → Valutazione Alpha → Valutazione Beta →
             Valutazione Live
             (non obbligatoria   (obbligatoria       (obbligatoria
              per tutti i         prima del lancio    prima di
              servizi, ma         beta pubblico)       rimuovere
              raccomandata)                            l'etichetta
                                                        "beta" e
                                                        chiudere il
                                                        vecchio
                                                        canale)

Ogni valutazione: evidenza + intervista del team →
                  verdetto del panel per punto
  Soddisfatto / Parzialmente soddisfatto / Non soddisfatto
Risultato complessivo: Superato / Superato con condizioni /
                       Fallito (ri-valutazione richiesta)

Costo di un fallimento ≈ costo del prossimo ciclo di sprint
                        per rimediare + ritardo ai
                        [risparmi da spostamento di
                        canale](../risparmi-da-spostamento-di-canale/)
                        che il servizio era finanziato per
                        erogare
```

Il punto 10 ("definisci come appare il successo, e pubblica dati di performance") è ciò che alimenta il [costo per transazione](../costo-per-transazione/) e gli [standard dei servizi e metriche di transazione](../standard-dei-servizi-e-metriche-di-transazione/) — lo Standard impone la misurazione, non solo il servizio.

## Esempio pratico

**Servizio di domanda abitativa di un'autorità locale**: un team di comune raggiunge la sua valutazione beta con un servizio che soddisfa 11 su 14 punti ma fallisce il punto 5 ("assicurati che tutti possano usare il servizio") perché non esiste alcuna via assistita-digitale per i richiedenti senza accesso internet, e fallisce il punto 9 perché i dati personali vengono registrati in chiaro nelle tracce di errore dell'applicazione.

```
Costo diretto del fallimento:
  Slot di ri-valutazione: attesa di 6-8 settimane per il
    prossimo panel disponibile
  Sprint di rimedio: 2 sviluppatori × 3 settimane × £550/
    giorno ≈ £34.650
  Design del canale assistito-digitale: 1 ricercatore × 2
    settimane ≈ £5.000

Costo del ritardo: il servizio era previsto spostare il 40%
  di 18.000/anno richieste abitative da chiamate telefoniche
  da £8,50 a transazioni digitali da £0,20
  = 7.200 × (£8,50 − £0,20) = £59.760/anno mancati, pro-
    rateizzati per il ritardo di ~2 mesi ≈ £9.960

Costo totale della valutazione fallita ≈ £49.610
```

Il punto dell'aritmetica non è la precisione — è che una valutazione fallita ha un prezzo reale e calcolabile, che è esattamente perché il cancello ha i denti.

## Collegamento con lo sviluppo software

Per gli ingegneri, lo Standard si legge tanto come una checklist di architettura ed erogazione quanto come un documento politico: il punto 11 ("scegli gli strumenti e la tecnologia giusti") e il punto 12 ("rendi aperto il nuovo codice sorgente") sono decisioni ingegneristiche dirette, e il punto 14 ("gestisci un servizio affidabile") richiede gli stessi SLO e processi di incidente di cui qualsiasi sistema in produzione ha bisogno. È il quadro ombrello per questo capitolo — [costo per transazione](../costo-per-transazione/) e [risparmi da spostamento di canale](../risparmi-da-spostamento-di-canale/) sono ciò che lo Standard sta cercando di proteggere finanziariamente, l'[inclusione digitale](../inclusione-digitale/) è ciò che il punto 5 esiste per garantire, e i componenti del [governo come piattaforma](../governo-come-piattaforma/) (GOV.UK Notify, Pay, One Login) soddisfano il punto 13 ("usa e contribuisci a standard aperti, componenti comuni e pattern") largamente per impostazione predefinita. Vedi anche [costruire vs comprare nel governo](../costruire-vs-comprare-nel-governo/) per come il punto "strumenti giusti" si gioca nelle decisioni di appalto.

## Insidie

- **Trattare la valutazione come una casella di conformità del giorno di lancio**: i team che leggono per la prima volta i 14 punti una settimana prima della loro valutazione beta falliscono prevedibilmente; lo Standard è pensato per plasmare le decisioni dalla discovery in avanti, non per verificarle retrospettivamente.
- **Valutare il prototipo, non il servizio**: una demo elegante può superare una revisione che la versione in produzione, inclusiva-assistita-digitale, gestita per incidenti del servizio fallirebbe — i valutatori sono pensati per sondare questo divario, ma i servizi minori auto-certificati spesso lo saltano.
- **Nessuna ri-valutazione prima di scalare**: un servizio valutato al 5% di rollout non rimane automaticamente conforme al 100% — il carico, la domanda di fallimento, e gli utenti di caso limite tutti cambiano.
- **Confondere il Service Standard con un design system**: i componenti del GOV.UK Design System soddisfano alcuni punti (coerenza, accessibilità) ma lo Standard copre anche la struttura del team, la pratica agile, e l'etica dei dati — un servizio ben stilizzato può ancora fallire sui punti 2, 6 o 9.

## Fonti

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
