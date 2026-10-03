# Costruire vs comprare nel governo

Costruisci-contro-compra è un confronto strutturato e aggiustato per il rischio dello sviluppo su misura contro l'acquisizione commerciale o commodity, confrontato sul [costo totale di proprietà](../total-cost-of-ownership-in-government-it/) scontato, sul tempo-al-valore, e sul rischio. Il governo è strutturalmente un settore che compra — il Technology Code of Practice fissa una presunzione verso soluzioni commodity e cloud — eppure i team ingegneristici all'interno dei dipartimenti ancora impostano come predefinito costruire, per le stesse ragioni per cui lo fanno i costruttori ovunque.

## Perché è importante

Il Technology Code of Practice del Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>) e la guida accompagnante del Service Manual su decidere se costruire o comprare spingono i dipartimenti a giustificare lo sviluppo su misura contro una presunzione che la capacità commodity dovrebbe essere comprata, non costruita, e che solo la capacità genuinamente nuova e differenziante della missione giustifica codice su misura. La guida supplementare sul bias dell'ottimismo al Green Book del HM Treasury, tratta dalla revisione Mott MacDonald del 2002 dei grandi appalti pubblici, dà ai progetti IT la gamma di aumento più ampia di qualsiasi categoria valutata — le stime di costo di capitale raccomandate per un aumento del 10% all'estremità bassa e fino al 200% all'estremità alta prima di essere usate nella valutazione, riflettendo quanto male le costruzioni software siano state storicamente sottostimate attraverso l'appalto pubblico. L'analisi costruisci-contro-compra esiste precisamente per forzare quell'aggiustamento del rischio sul tavolo prima dell'approvazione, piuttosto che lasciarlo emergere come una richiesta di sovraspesa infra-annuale.

## Il calcolo

```
Confronta sullo stesso orizzonte di 3-5 anni, scontato al
tasso di sconto sociale del Green Book (vedi
tasso-di-sconto-sociale.md):

VAN_opzione = VA(beneficî, spostati per tempo-al-valore) −
              VA(TCO)

Aggiustamenti di rischio (pattern di bias dell'ottimismo
del Green Book):
  costo di costruzione × 1,1-3,0    (gamma di aumento del
                                     progetto IT, Mott
                                     MacDonald)
  tempo-al-valore di costruzione + 40-60% (prior di ritardo
                                            di deployment)
  compra: aggiungi invece il controllo di realtà
          dell'integrazione e i costi di uscita dal
          contratto

Motori decisionali, nell'ordine in cui di solito decidono:
  1. differenziazione — questa capacità è la missione, o
     tubature?
  2. tempo-al-valore × costo del ritardo (vedi
     costo-del-ritardo-nei-programmi-pubblici.md)
  3. costo totale di proprietà aggiustato per il rischio
```

## Esempio pratico

Un'autorità locale necessita di un sistema di gestione dei casi per l'assistenza sociale agli adulti. Compra: SaaS a £180.000/anno, in produzione in 4 mesi. Costruisci: stimato £900.000 più £150.000/anno di manutenzione, in produzione in 14 mesi.

```
Costo di costruzione aggiustato per il rischio =
  900.000 × 1,4 = £1.260.000
TCO su 5 anni:
  compra     = 180.000 × 5 = £900.000
  costruisci = 1.260.000 + 150.000 × 5 = £2.010.000

Termine del ritardo: il sistema evita £40.000/mese in
valutazioni duplicate; la costruzione arriva 10 mesi più
tardi della compra.
CoD = 10 × 40.000 = £400.000

Confronto effettivo: £900.000 (compra) contro
2.010.000 + 400.000 = £2.410.000 (costruisci)
```

Comprare vince per circa £1,5 milioni su cinque anni, e la singola linea più grande dopo la stima di costruzione stessa è il costo del ritardo che un confronto solo-capex non avrebbe mai fatto emergere.

## Collegamento con lo sviluppo software

Le discipline che si trasferiscono direttamente da questa analisi alla pratica di erogazione: **aggiustamento del rischio basato su prior** — l'aumento Mott MacDonald è l'equivalente software del bias dell'ottimismo del Green Book applicato meccanicamente, quindi i team dovrebbero argomentare per eccezioni a esso piuttosto che assumere che la loro stima sia l'eccezione; **onestà del comparatore** — l'alternativa alla costruzione è la migliore opzione di acquisto disponibile, non "nulla", che si collega direttamente al [costo opportunità nella spesa pubblica](../opportunity-cost-in-public-spending/); e **confronto TCO onesto** — ogni proposta di costruzione dovrebbe essere confrontata contro il [costo totale di proprietà](../total-cost-of-ownership-in-government-it/) completo di un'opzione di acquisto, non il suo prezzo di listino. Dove la costruzione genuinamente vince, il [costo del ritardo](../cost-of-delay-in-public-programmes/) del tempo di costruzione aggiuntivo dovrebbe essere prezzato esplicitamente nel caso aziendale, non lasciato come un'assunzione non dichiarata che il tempo non conti.

## Insidie

- **Confrontare il prezzo di listino del fornitore con una stima di costruzione non aggiustata per il rischio**: questo lusinga la costruzione due volte, una sul costo e una sul programma.
- **Lavoro interno a prezzo zero**: il tempo ingegneristico del civil service viene trattato come "gratuito" perché è già nel budget del personale dipartimentale, il che nasconde il suo vero costo opportunità contro altro lavoro che quel team potrebbe fare.
- **Lock-in non prezzato in entrambe le direzioni**: i costi di uscita del fornitore e di portabilità dei dati sono reali, ma lo è anche il fattore-bus di una costruzione su misura e la sua dipendenza dal mantenere un piccolo team interno difficile da sostituire per tutta la sua vita.
- **Differenziazione della missione rivendicata per le tubature**: "questo è centrale per noi" asserito su middleware di integrazione o un archivio documenti — testalo contro se un cittadino o caseworker noterebbe mai quale sia in esecuzione sotto.

## Fonti

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
