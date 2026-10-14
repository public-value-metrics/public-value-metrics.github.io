# Valutazione della preferenza rivelata

I metodi di preferenza rivelata inferiscono il valore di un bene non di mercato dal comportamento osservabile in un mercato correlato, piuttosto che chiedere direttamente alle persone. Il prezzo hedonico e il metodo del costo di viaggio sono le due tecniche di lavoro: entrambe partono da una transazione reale ed estraggono un prezzo implicit per la cosa che non è mai stata venduta direttamente.

## Perché è importante

Dove i metodi di [preferenza dichiarata](../valutazione-della-preferenza-dichiarata/) chiedono una domanda ipotetica, i metodi di preferenza rivelata osservano cosa le persone hanno effettivamente pagato, cosa che il Green Book tratta come evidenza generalmente più credibile, a parità di altre condizioni, perché non è soggetta a bias ipotetico — i rispondenti in uno studio di prezzo hedonico sulle case hanno genuinamente pagato il premio o lo sconto che viene misurato (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Annex 2). Il prezzo hedonico decompone un prezzo di mercato — tipicamente i prezzi delle case — in prezzi implicit per ciascun attributo del bene, permettendo agli analisti di isolare, per esempio, il premio di prezzo che le famiglie effettivamente pagano per vivere da qualche parte più tranquillo o con migliore qualità dell'aria, controllando statisticamente per ogni altro attributo che influenza anche il prezzo della casa (dimensione, posizione, bacino scolastico). Il metodo del costo di viaggio fa la cosa analoga per siti ricreativi senza tariffa di ingresso: il tempo e il denaro che le persone spendono per viaggiare verso un sito rivela un limite inferiore su quanto il sito vale per loro, perché nessuno sostiene un costo superiore a quanto la visita vale per loro.

Entrambi i metodi condividono una limitazione strutturale: possono valutare solo ciò che è incorporato in una transazione di mercato esistente. Il rumore vicino a una pista di decollo appare nei prezzi delle case perché le persone a cui importa del rumore si auto-selezionano in alloggi più tranquilli; il valore di esistenza di una specie che nessuno visita o vicino alla quale nessuno vive non appare in alcuna transazione, che è esattamente il vuoto che i metodi di [preferenza dichiarata](../valutazione-della-preferenza-dichiarata/) esistono per colmare.

## Il calcolo

```
Prezzo hedonico:
  Prezzo casa = f(attributi strutturali, attributi di
                posizione, attributo ambientale di
                interesse, ...)
  Stima tramite regressione; il coefficiente sull'attributo
  ambientale (mantenendo tutto il resto costante) è il suo
  prezzo implicit.

  Prezzo implicit dell'attributo X = ∂(Prezzo casa) / ∂X

Metodo del costo di viaggio:
  Tasso di visita (visite pro capite dalla zona i) = f(costo
                di viaggio dalla zona i, siti sostitutivi,
                controlli socioeconomici)
  Stima una curva di domanda per le visite in funzione del
  costo di viaggio.
  Surplus del consumatore = area sotto la curva di domanda
                stimata = valore del sito per i visitatori
```

Entrambi i metodi richiedono un set di controllo statisticamente solido — omettere un attributo confondente (hedonico) o un sito sostitutivo vicino (costo di viaggio) distorce il prezzo implicit in una direzione che non è sempre ovvia in anticipo, motivo per cui l'Annex 2 del Green Book richiede che la specificazione di regressione e i controlli vengano riportati, non solo il coefficiente principale.

## Esempio pratico

**Governo nazionale**: la metodologia del prezzo ombra del carbonio del Green Book stesso si basa in parte su evidenza hedonica, ma un caso illustrativo più semplice è il rumore degli aerei. Uno studio hedonico che regredisce i prezzi di vendita delle case in un'area sotto rotta di volo contro l'esposizione al rumore pesata per distanza, controllando per dimensione, età, e bacino scolastico, trova che ogni aumento di 1 decibel nell'esposizione media al rumore è associato a una riduzione del 0,5% nel prezzo della casa. Per una casa tipica di £280.000 nell'area interessata:

```
Prezzo implicit per decibel = £280.000 × 0,5% = £1.400 per
                              famiglia
Famiglie interessate da un aumento di 3dB da una nuova
pista = 18.000
Costo implicito aggregato dell'aumento del rumore =
£1.400 × 3 × 18.000 = £75,6m
```

Questo è un costo capitalizzato una tantum (incorporato nel prezzo della casa), che la valutazione deve essere attenta a non contare doppiamente contro un flusso di costo di disturbo del rumore stimato separatamente.

**Organizzazione benefica**: un'organizzazione benefica ambientale usa il metodo del costo di viaggio per valutare una riserva naturale a ingresso libero. I dati dell'indagine sui codici postali dei visitatori danno un costo di viaggio medio di andata e ritorno (tempo valutato al valore del tempo non lavorativo raccomandato dal Green Book, più carburante) di £14 per visita, con 40.000 visite all'anno. La curva di domanda stimata — i tassi di visita che diminuiscono quando il costo di viaggio dalla zona aumenta — implica un surplus del consumatore per visita, sopra i £14 effettivamente spesi, di circa £9.

```
Valore annuale totale = 40.000 visite × (£14 spesi + £9
                        surplus del consumatore)
                      = 40.000 × £23 ≈ £920.000/anno
```

Questo supera di gran lunga il ricavo nullo da tariffa di ingresso della riserva e dà ai fiduciari dell'organizzazione benefica una cifra defendibile per il valore ricreativo del sito quando si fa il caso ai finanziatori.

## Collegamento con lo sviluppo software

Il pensiero della preferenza rivelata appare nell'analitica di prodotto del settore pubblico più spesso di quanto i professionisti si rendano conto: i dati di utilizzo da un servizio digitale governativo gratuito sono essi stessi evidenza di preferenza rivelata del valore (frequenza, durata della sessione, e — più significativamente — i pattern di utilizzo ripetuto-contro-unico possono essere analizzati nello stesso modo in cui un modello del costo di viaggio tratta la frequenza di visita contro la distanza). Dove un servizio ha genuini sostituti (un canale cartaceo, una linea telefonica), il "costo" che i cittadini sostengono per usare invece il canale digitale (tempo, dati, un dispositivo) può essere stimato e confrontato con l'utilizzo, riecheggiando direttamente la logica del costo di viaggio. Vedi [standard dei servizi digitali](../standard-dei-servizi-digitali/) e [valore dei dati aperti](../valore-dei-dati-aperti/), che affronta esattamente questo problema di valutazione per un bene senza prezzo di mercato diretto.

## Insidie

- **Bias di variabile omessa nei modelli hedonici.** Omettere un attributo correlato (la qualità della scuola che correla sia con il prezzo della casa sia con la variabile ambientale di interesse) distorce la stima del prezzo implicit; la specificazione deve essere riportata e scrutinata, non solo il risultato.
- **Ignorare siti sostitutivi negli studi del costo di viaggio.** Il valore rivelato di un visitatore per un sito è sottostimato se esiste un sostituto più vicino e non viene controllato — potrebbero visitare principalmente perché è gratuito, non perché è unicamente di valore.
- **Applicare la preferenza rivelata a un bene senza alcuna eco di mercato.** Il valore di esistenza, il valore di opzione, e il valore di eredità non appaiono in alcuna transazione e non possono essere recuperati tramite metodi hedonici o del costo di viaggio — quel vuoto appartiene alla [valutazione della preferenza dichiarata](../valutazione-della-preferenza-dichiarata/).
- **Confondere il valore capitalizzato (una tantum) con un flusso annuale.** Gli effetti hedonici sui prezzi delle case sono tipicamente valori capitalizzati una tantum; trattarli come un flusso di beneficio annuale gonfia la valutazione.

## Fonti

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
