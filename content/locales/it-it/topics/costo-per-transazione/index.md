# Costo per transazione

Il costo per transazione è la metrica principale di economia unitaria per un servizio digitale governativo: il costo totale per erogare un canale, diviso per il numero di transazioni completate attraverso esso. Era la cifra di punta sulla vecchia GOV.UK Performance Platform, ed è il numero che ha finanziato un decennio di investimento "digital by default" — che è esattamente perché è anche la metrica più propensa a essere manipolata.

## Perché è importante

Il Digital Efficiency Report del Cabinet Office del 2012 ha posto il confronto di costo del canale in termini che sono rimasti: le transazioni digitali sono state trovate costare circa 20 volte meno del telefono e circa 50 volte meno del faccia-a-faccia, con cifre illustrative del governo locale di circa £0,15 per transazione web contro £2,83 per telefono e £8,62 per faccia-a-faccia. Quel singolo confronto è diventato la giustificazione per riprogettare i 25 servizi esemplari nominati nella Government Digital Strategy, e per ogni caso aziendale dipartimentale che ha citato i risparmi da spostamento di canale da allora. La cifra è genuinamente utile come segnale di ordine di grandezza, ma il rapporto dipende interamente da cosa viene contato su ogni lato: un costo equo del canale telefonico include il personale del call centre, il contratto di telefonia, la formazione e la struttura; un costo digitale equo include l'hosting, gli stipendi continui del team di prodotto, il tempo del supporto per i percorsi falliti, e il canale assistito-digitale richiesto dal punto 5 dello [standard dei servizi digitali](../standard-dei-servizi-digitali/). Rimuovi abbastanza di quelli dal lato digitale e qualsiasi servizio sembra economico.

## Il calcolo

```
Costo per transazione = costo totale allocato del canale /
                        transazioni completate

Il costo totale allocato del canale dovrebbe includere:
  + hosting e infrastruttura
  + costo del team di prodotto/ingegneria/supporto
    (ammortizzato)
  + costo di design del contenuto e del servizio (ammortizzato)
  + costo di supporto assistito-digitale / accessibilità
  + costo della domanda di fallimento (utenti che falliscono
    digitalmente e ricadono sul telefono)
  − il costo di costruzione una tantum è ammortizzato sulla
    vita attesa del servizio, non spesato interamente
    nell'anno uno

Il trucco contabile comune:
  Il "costo marginale per transazione" (solo hosting, una
  volta costruito) viene citato come se fosse il "costo
  medio per transazione" (costo totale incluso il team che
  continua a costruirlo e gestirlo). I due possono differire
  per 10x o più per un servizio con un team di erogazione
  grande e attivo.
```

## Esempio pratico

**Servizio di rinnovo della tassa automobilistica**: 4 milioni di transazioni/anno.

```
Cifra solo-marginale (il trucco):
  Solo hosting + elaborazione pagamenti = £180.000/anno
  Costo per transazione = 180.000 / 4.000.000 = £0,045
  → cifra principale citata in un caso aziendale

Cifra completamente caricata (quella onesta):
  Hosting + pagamento                    £180.000
  Team di prodotto/ingegneria (8 FTE)    £720.000
  Desk di supporto (transazioni          £310.000
  fallite/interrogate)
  Linea telefonica assistita-digitale    £140.000
  Totale                                 £1.350.000
  Costo per transazione = 1.350.000 / 4.000.000 = £0,3375

La cifra completamente caricata è ancora circa 8 volte più
economica del comparatore del canale telefonico di £2,83 dal
Digital Efficiency Report — un risparmio reale e defendibile
— ma 7,5 volte più alta della cifra solo-marginale citata
nella versione scorciatoia. Entrambi i numeri sono "veri";
solo uno è comparabile al costo del canale telefonico contro
cui viene posto.
```

## Collegamento con lo sviluppo software

Il costo per transazione è dove le decisioni architetturali diventano un numero finanziario: un servizio che scala automaticamente in modo netto e necessita di poco intervento manuale fa scendere questa cifra nel tempo; uno che genera alto volume di ticket di supporto da stati di errore confusi la fa salire indipendentemente dall'efficienza di hosting. È la metrica compagna naturale del punto 10 dello [standard dei servizi digitali](../standard-dei-servizi-digitali/) ("definisci come appare il successo, e pubblica dati di performance") e degli [standard dei servizi e metriche di transazione](../standard-dei-servizi-e-metriche-di-transazione/), che espone il set più completo di KPI in cui questa cifra si inserisce. Alimenta anche direttamente i calcoli dei [risparmi da spostamento di canale](../risparmi-da-spostamento-di-canale/) e dovrebbe essere riconciliato contro il [costo totale di proprietà nel governo IT](../costo-totale-di-proprietà-nel-governo-it/) così che gli overhead di piattaforma e servizio condiviso non vengano silenziosamente eliminati.

## Insidie

- **Costo marginale vestito da costo medio**: citare il costo solo-hosting una volta che un servizio è costruito, omettendo il team continuo che lo mantiene, itera, e supporta — vedi l'esempio pratico sopra.
- **Escludere il costo assistito-digitale**: un canale non è conforme a "digital by default", e il suo vero costo non è catturato, se il fallback telefono/carta richiesto dall'[inclusione digitale](../inclusione-digitale/) viene costato separatamente o ignorato.
- **Ignorare la domanda di fallimento**: le transazioni che iniziano digitalmente e falliscono, generando comunque una chiamata telefonica o un modulo di carta, sono un costo del canale digitale, non del canale che cattura il fallimento.
- **Confrontare transazioni di complessità diversa attraverso i canali**: le chiamate telefoniche gestiscono disproporzionatamente i casi difficili (dipendenti multipli, correzione di errori, richiedenti vulnerabili); confrontare un costo telefonico medio con un costo digitale medio sopravvaluta il rapporto a meno che il mix di transazioni non sia abbinato.

## Fonti

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
