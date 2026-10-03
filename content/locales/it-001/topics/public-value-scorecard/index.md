# Scorecard del valore pubblico

La scorecard del valore pubblico adatta la balanced scorecard del 1992 di Robert Kaplan e David Norton — costruita per aziende che ottimizzano il profitto attraverso le prospettive finanziaria, cliente, processo-interno, e apprendimento-e-crescita — a organizzazioni la cui linea di fondo è una missione, non un margine. Costringe un ente pubblico a riportare la performance attraverso diverse dimensioni irriducibili contemporaneamente, piuttosto che far collassare tutto in un singolo numero che nasconde i compromessi.

## Perché è importante

L'argomento originale di Kaplan e Norton, nella Harvard Business Review, era che una singola metrica finanziaria è un indicatore ritardato che non ti dice nulla sul *perché* la performance cambierà il prossimo trimestre. Nel settore privato la soluzione erano quattro prospettive collegate. Nel governo, il "triangolo strategico" di Mark Moore (da *Creating Public Value*, 1995) fornisce la struttura equivalente: un servizio deve simultaneamente erogare **valore pubblico** (il risultato della missione), mantenere **legittimità e supporto** (sostegno politico e pubblico), ed essere **operativamente praticabile** (erogabile con le risorse e la capacità effettivamente disponibili). Il *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies* (2003) di Paul Niven è il manuale del professionista per tradurre le quattro caselle di Kaplan e Norton in questo triangolo — tipicamente rietichettando "finanziario" come "gestione delle risorse," mettendo la "missione" in cima invece del "valore per gli azionisti" in fondo, e trattando le prospettive del cliente e dello stakeholder come coequali piuttosto che subordinate al profitto. Il motivo per cui questo conta per un team di erogazione è che un servizio digitale pubblico giudicato solo su una metrica finanziaria o di efficienza (costo per transazione, diciamo) sotto-investirà sistematicamente nelle dimensioni di legittimità e risultato che la metrica finanziaria non può vedere.

## Il calcolo

La scorecard del valore pubblico è un quadro, non una formula, ma la sua struttura è fissa e vale la pena riprodurla esattamente:

```
Prospettiva          Domanda del settore pubblico           Indicatore di esempio
-------------------------------------------------------------------------------------
Missione / risultati  Stiamo raggiungendo il valore          Misura di risultato della
                       pubblico che esistiamo a creare?       popolazione (vedi
                                                               risultati-contro-output)
Gestione delle        Stiamo usando il denaro pubblico        Costo per risultato,
  risorse              efficientemente e nei limiti           varianza del budget
                       autorizzati?
Cliente / utente       Gli utenti e i cittadini possono       Tasso di completamento,
                        accedere e beneficiare dal             satisfazione
                        servizio?
Legittimità / supporto  I principali politici, gli organismi  Metriche di fiducia, risultati
                        di controllo, e il pubblico ci         di audit, reclami accolti
                        supportano ancora?
Processo interno /      Abbiamo la capacità e il processo     Turnover del personale, tempo
  apprendimento         per continuare a migliorare?           di ciclo, età del backlog

Una scorecard defendibile riporta 3-5 indicatori per
prospettiva, scelti affinché nessuna singola prospettiva
possa essere manipolata senza che il danno emerga in un'altra.
```

## Esempio pratico

**Dipartimento di assistenza sociale per adulti di un'autorità locale**: una scorecard per un servizio di reablement (supporto a breve termine per aiutare le persone a riacquisire indipendenza dopo un soggiorno ospedaliero) riporta:

```
Missione:      68% degli utenti del servizio non ha più bisogno
               di assistenza continuativa dopo 6 settimane
               (obiettivo 65%)
Gestione:      costo per episodio di reablement completato =
               £1.850 (assunzione di budget £2.000)
Cliente:       satisfazione dell'utente 82%, attesa media per
               l'inizio del servizio 4,1 giorni
Legittimità:   3 reclami accolti per 1.000 episodi; il comitato
               di salvaguardia degli adulti valuta il servizio
               "buono"
Processo:      tasso di posti vacanti del personale 14%, carico
               di casi medio 23 (soffitto di carico sicuro: 25)
```

Letti in isolamento, i numeri della missione e della gestione sembrano una storia di successo semplice: sotto budget e sopra l'obiettivo di risultato. Letti insieme alla riga del processo, il tasso di posti vacanti del 14% contro un soffitto di carico di casi di 25 mostra che il buon risultato viene comprato correndo vicino a livelli di personale non sicuri — un avvertimento che il numero della missione da solo non farebbe mai emergere, ed esattamente la modalità di fallimento che un KPI a singola prospettiva (vedi [KPI del settore pubblico](../public-sector-kpis/)) invita.

## Collegamento con lo sviluppo software

Per un team che costruisce un dashboard interno o pubblico, la scorecard è un argomento diretto contro un singolo widget "punteggio di salute": costruisci un pannello per prospettiva, e resisti alla pressione di prodotto di sintetizzarli in un semaforo, perché il passo di sintesi è esattamente dove viene distrutta l'informazione sul compromesso. Si mappa anche in modo netto sulle strutture OKR dei team di prodotto: un OKR di missione senza un OKR di gestione o processo abbinato riproduce la modalità di fallimento a singola metrica contro cui Kaplan e Norton scrivevano nel 1992. Vedi [valore pubblico](../public-value/) per la teoria sottostante di Moore su cosa la casella "missione" dovrebbe effettivamente contenere, e [metriche di fiducia e legittimità](../trust-and-legitimacy-metrics/) per come popolare la prospettiva di legittimità con indicatori reali e con fonte, piuttosto che un proxy che nessuno può defendere.

## Insidie

- **Far collassare la scorecard in un singolo punteggio**: mediare quattro prospettive in un singolo numero reintroduce esattamente il problema — un punteggio di legittimità scarso mascherato da un buon punteggio di gestione — che la scorecard esiste per prevenire.
- **Copiare la prospettiva "finanziaria" del settore privato invariata**: la prospettiva di gestione di un ente pubblico riguarda il rimanere entro budget autorizzati, spesso vincolati, non massimizzare i ricavi — la rietichettatura di Niven non è cosmetica.
- **Scegliere indicatori che il team che possiede la scorecard può muovere unilateralmente**: un indicatore di legittimità ottenuto dallo stesso team che giudica (gestione dei reclami autoriportata, per esempio) non è evidenza indipendente.
- **Costruire la scorecard una volta e non rivisitare mai pesi o indicatori**: Kaplan e Norton intendevano una revisione strategica annuale; una scorecard congelata per anni deriva dalla missione che era stata costruita per tracciare.

## Fonti

- Robert S. Kaplan and David P. Norton, "The Balanced Scorecard: Measures That Drive Performance,"
  *Harvard Business Review*, January–February 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
