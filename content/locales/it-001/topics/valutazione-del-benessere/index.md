# Valutazione del benessere (WELLBY)

La valutazione del benessere prezza l'effetto di una politica direttamente in termini di satisfazione di vita, usando il WELLBY (anno di vita aggiustato per il benessere) come sua unità — un WELLBY equivale a un cambiamento di un punto su una scala di satisfazione di vita 0-10, sostenuto per un anno. È l'alternativa ufficialmente sancita dal HM Treasury alla monetizzazione di ogni beneficio tramite la disponibilità a pagare.

## Perché è importante

La guida "Wellbeing guidance for appraisal: supplementary Green Book guidance" del HM Treasury (2021, <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) ha formalmente portato i dati di benessere soggettivo nella valutazione del governo centrale, dando agli analisti una via per valutare risultati — connessione sociale, salute mentale, sicurezza, partecipazione civica — che i metodi di [preferenza dichiarata](../valutazione-della-preferenza-dichiarata/) e [preferenza rivelata](../valutazione-della-preferenza-rivelata/) faticano a prezzare convincentemente, perché le persone sono spesso cattivi previsori di quanto un bene influenzerà effettivamente la loro satisfazione di vita. La guida, sviluppata congiuntamente con il What Works Centre for Wellbeing, fissa un valore monetario raccomandato per WELLBY — £13.000 (prezzi 2021, rivisti periodicamente) — derivato dalla relazione osservata in grandi indagini sul benessere (principalmente l'Annual Population Survey dell'ONS, che ha posto le quattro domande sul benessere ONS4 dal 2011) tra reddito e satisfazione di vita, dando agli analisti un tasso di conversione in sterline quando è necessario un confronto monetizzato contro altre valutazioni Green Book.

Il metodo è importante perché inverte la logica di valutazione usuale: piuttosto che chiedere cosa le persone pagherebbero per un risultato (preferenza dichiarata) o inferire il valore da una transazione di mercato correlata (preferenza rivelata), misura l'effetto del risultato sulla satisfazione di vita riportata direttamente, evitando il divario tra ciò che le persone dicono di volere e ciò che effettivamente le rende migliori. Questo è anche la sua limitazione centrale — la satisfazione di vita autoriportata è influenzata da effetti di adattamento e framing che un professionista attento deve controllare.

## Il calcolo

```
WELLBY = 1 punto di satisfazione di vita (scala 0-10)
        sostenuto per 1 persona per 1 anno

WELLBY totali da una politica =
  Σ (cambiamento nel punteggio di satisfazione di vita) ×
  (numero di persone interessate) × (durata in anni,
  scontata al tasso di sconto sociale)

Valore monetizzato = WELLBY totali × valore per WELLBY
  (valore raccomandato dal HM Treasury: £13.000 per WELLBY,
   prezzi 2021, soggetto a revisione periodica — verifica
   la guida corrente prima dell'uso)
```

Questo differisce dall'[anno di vita aggiustato per il benessere](../anni-di-vita-aggiustati-per-il-benessere/) dell'economia sanitaria, che è tipicamente ancorato a scale di qualità di vita relative alla salute (EQ-5D e simili) piuttosto che alla satisfazione di vita generale; i due sono correlati ma non intercambiabili, e le valutazioni Green Book dovrebbero essere esplicite su quale scala e metodo di elicitazione sottostà a una cifra WELLBY riportata.

## Esempio pratico

**Autorità locale**: un comune gestisce uno schema di amicizia comunitaria per residenti anziani isolati, servendo 400 persone. Un'indagine sul benessere prima/dopo usando la domanda di satisfazione di vita ONS4 mostra il punteggio medio dei partecipanti salire da 5,8 a 6,5 — un guadagno di 0,7 punti — sostenuto per la durata finanziata di 2 anni del programma.

```
WELLBY generati = 400 persone × 0,7 punti × 2 anni = 560
                  WELLBY
Valore monetizzato = 560 × £13.000 = £7,28m
Costo del programma = £450.000 su 2 anni

Rapporto costo-beneficio ≈ £7,28m / £0,45m ≈ 16:1
```

Un rapporto così alto dovrebbe suscitare controllo piuttosto che celebrazione — la guida sul benessere del Green Book avverte esplicitamente contro il prendere guadagni autoriportati a campione piccolo al valore nominale senza controllare effetti di selezione (si sono uniti allo schema solo i residenti più socievoli, più probabili a migliorare?) e senza un gruppo di confronto; una valutazione ben progettata nettizzerebbe un cambiamento controfattuale osservato nei non-partecipanti, vedi [analisi controfattuale](../analisi-controfattuale/).

**Governo nazionale**: confrontare due programmi occupazionali usando i WELLBY piuttosto che il solo reddito cattura che la disoccupazione porta un costo di benessere oltre il reddito perso — la ricerca britannica sul benessere trova costantemente che la disoccupazione riduce la satisfazione di vita più di quanto la sola perdita di reddito predirebbe, a causa degli effetti non pecuniari della perdita di struttura, scopo, e contatto sociale. Un programma valutato solo sul guadagno di reddito sottostimerebbe il suo valore rispetto a uno valutato anche sui WELLBY.

## Collegamento con lo sviluppo software

La valutazione del benessere raramente raggiunge direttamente i team ingegneristici, ma plasma ciò che viene definito "successo" per i prodotti del settore sociale e dei servizi pubblici — una piattaforma di amicizia digitale, uno strumento di triage per la salute mentale, o una piattaforma comunitaria per residenti isolati dovrebbero aspettarsi che il loro impatto venga eventualmente misurato in questo modo, il che significa che l'analitica di prodotto deve catturare *chi* viene raggiunto e per *quanto tempo*, non solo conteggi di utilizzo. Costruisci la strumentazione dell'indagine sul benessere (ONS4 o equivalenti validati) nella valutazione del servizio dall'inizio piuttosto che aggiungerla retrospettivamente; ritrattare una baseline di benessere dopo che un servizio è stato lanciato perde completamente il confronto pre/post. Vedi [risultati contro output](../risultati-contro-output/) e [metodi di valutazione d'impatto](../metodi-di-valutazione-dimpatto/).

## Insidie

- **Nessun controfattuale o gruppo di confronto.** Un guadagno di benessere pre/post senza controllo per ciò che sarebbe accaduto comunque esagera l'effetto del programma; vedi [analisi controfattuale](../analisi-controfattuale/) e [addizionalità e peso morto](../addizionalità-e-peso-morto/).
- **Campioni piccoli e auto-selezionati.** Le indagini sul benessere di partecipanti al programma che hanno scelto di aderire sono soggette a bias di selezione — le persone che si sono unite e sono rimaste erano plausibilmente già in tendenza positiva.
- **Trattare la conversione £-per-WELLBY come precisa.** Il valore monetizzato è una convenzione politica derivata da regressioni reddito-benessere, non un prezzo di mercato; usala per comparabilità tra valutazioni Green Book, non come una rivendicazione su cosa il benessere "vale."
- **Confondere i WELLBY con i QALY relativi alla salute.** I due misurano costrutti diversi su scale diverse; vedi [anni di vita aggiustati per il benessere](../anni-di-vita-aggiustati-per-il-benessere/) per la variante dell'economia sanitaria e non mediare i due insieme.

## Fonti

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
