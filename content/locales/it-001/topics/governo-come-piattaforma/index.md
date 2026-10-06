# Governo come piattaforma (GaaP)

Governo come piattaforma è la strategia di costruire componenti condivisi e riutilizzabili — un servizio di notifiche, un servizio di pagamenti, un servizio di identità — una volta, centralmente, così che centinaia di singoli servizi governativi li consumino piuttosto che ciascuno costruisca il proprio. Ridefinisce l'infrastruttura digitale pubblica come un problema di economia di piattaforma: il valore non è in nessuna singola integrazione, è nel costo marginale del *prossimo* team che la adotta che si approssima a zero.

## Perché è importante

Il GDS ha esposto formalmente la strategia nella sua pubblicazione "Government as a Platform" del 2015, argomentando che il governo aveva costruito le stesse capacità — accettazione di pagamenti, notifica all'utente, verifica dell'identità, ricerca dell'indirizzo — separatamente servizio dopo servizio, ciascuno portando il proprio appalto, valutazione di sicurezza, e onere di supporto continuo. L'alternativa era un piccolo numero di piattaforme condivise, costruite a uno standard alto una volta e riutilizzate ovunque: GOV.UK Notify per inviare email, messaggi di testo, e lettere, GOV.UK Pay per accettare pagamenti online, e GOV.UK One Login (successore del precedente programma di identità GOV.UK Verify) per la verifica dell'identità. La scala che queste piattaforme hanno raggiunto è l'evidenza più chiara che la strategia ha funzionato: GOV.UK Pay ha elaborato oltre £10 miliardi in transazioni attraverso circa 1.800 singoli servizi — e dove ci sono voluti circa quattro anni per elaborare il suo primo £1 miliardo, ora elabora tanto in circa cinque mesi — mentre GOV.UK Notify ha inviato più di 9 miliardi di messaggi per conto di oltre 1.500 organizzazioni governative. Ognuno di quei servizi adottanti ha evitato di costruire, proteggere, e mantenere il proprio gateway di pagamento o pipeline di messaggistica.

## Il calcolo

```
Costo di costruzione per servizio (nessuna piattaforma) = N
  servizi × costo per costruire, valutare per sicurezza, e
  gestire un sistema di pagamento/notifica/identità

Costo della piattaforma = costo fisso di costruzione della
  piattaforma + costo marginale per servizio adottante
  (integrazione, configurazione, supporto continuo del team
  di piattaforma)

Il riutilizzo raggiunge il pareggio una volta che:
  costo di costruzione della piattaforma < N × (costo di
  costruzione per servizio − costo di integrazione marginale)

Per una piattaforma matura, il costo marginale per
adottante aggiuntivo si approssima alla sola tariffa di
transazione/messaggio — il costo fisso è ammortizzato
attraverso l'intero patrimonio governativo, non il budget
di un dipartimento, che è il motivo per cui i componenti
GaaP sono di solito finanziati centralmente piuttosto che
addebitati a recupero completo dei costi agli adottanti
precoci.
```

## Esempio pratico

**Un'autorità locale che adotta GOV.UK Pay invece di costruire un gateway di pagamento**:

```
Stima costruisci-da-solo:
  Lavoro di conformità PCI-DSS + integrazione +
  manutenzione continua
  ≈ £85.000 costruzione + £22.000/anno manutenzione

Adozione di GOV.UK Pay:
  Sforzo di integrazione ≈ £12.000 (tempo dello
  sviluppatore)
  Tariffe di transazione: i pagamenti con carta governo-a-
  cittadino sono tipicamente addebitati a una piccola
  percentuale + tariffa fissa per transazione, nessun
  onere PCI-DSS separato portato dal comune
  ≈ £12.000 una tantum, costo continuo variabile con il
  volume, non fisso

Risparmio del primo anno ≈ £85.000 − £12.000 = £73.000,
prima di contare la manutenzione evitata di £22.000/anno e
il rischio di conformità evitato di detenere dati di carta
in un sistema gestito dal comune affatto — questa seconda
categoria è il valore di sicurezza trattato nel valore-
della-cybersicurezza-del-settore-pubblico.
```

Scala quei £73.000 attraverso i circa 1.800 servizi che ora usano GOV.UK Pay e il costo di costruzione evitato aggregato attraverso il governo è nelle centinaia di milioni — l'economia di piattaforma, non alcuna singola integrazione, è dove il valore della strategia effettivamente risiede.

## Collegamento con lo sviluppo software

Governo come piattaforma è un argomento diretto per [costruire vs comprare nel governo](../costruire-vs-comprare-nel-governo/): quando esiste un componente condiviso, valutato, e ben gestito, costruire un equivalente su misura è molto raramente la scelta migliore di [value for money](../valore-per-il-denaro/), e fallisce il punto 13 dello [standard dei servizi digitali](../standard-dei-servizi-digitali/) ("usa e contribuisci a standard aperti, componenti comuni e pattern") quasi per definizione. Cambia anche la forma del [costo totale di proprietà nel governo IT](../costo-totale-di-proprietà-nel-governo-it/): l'adozione della piattaforma scambia una grande voce di capitale e manutenzione per un costo operativo più piccolo, legato all'uso, che è più facile da prevedere e più facile da definanziare se un servizio viene smantellato. Il riutilizzo aperto dei componenti ha un cugino nel [valore dei dati aperti](../valore-dei-dati-aperti/) — entrambi sono strategie per trattare qualcosa che il governo produce una volta come infrastruttura condivisa piuttosto che un asset dipartimentale.

## Insidie

- **Ricostruzione ombra**: i team costruiscono silenziosamente la propria integrazione di pagamento o notifica perché il processo di onboarding della piattaforma è più lento che farlo da soli — un problema di attrito di governance, non tecnologico, e silenziosamente erode l'economia di riutilizzo da cui dipende l'intera strategia.
- **Sotto-finanziare il team della piattaforma rispetto al valore che crea**: il valore si accumula ai dipartimenti consumatori mentre il costo risiede con il team della piattaforma, creando un rischio cronico di sotto-investimento a meno che il finanziamento non sia centralizzato e protetto — una versione della tragedia dei beni comuni.
- **Misurare il successo della piattaforma solo dall'uso**: i numeri di adozione (servizi onboardati, messaggi inviati) sono un indicatore guida, non prova di valore; il vero test è l'aritmetica di costo-di-costruzione-evitato e rischio-evitato sopra.
- **Trattare "piattaforma" come sinonimo di "monolite"**: i componenti GaaP hanno successo perché ognuno fa una cosa bene con un'interfaccia stretta e stabile; raggruppare capacità non correlate in una "piattaforma" ricrea il problema di costruzione su misura a una scala diversa.

## Fonti

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
