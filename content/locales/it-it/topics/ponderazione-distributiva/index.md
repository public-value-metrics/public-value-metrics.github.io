# Ponderazione distributiva

La ponderazione distributiva aggiusta il valore monetario di un costo o beneficio in base a chi lo riceve, sul principio che una sterlina extra vale più per una famiglia povera che per una ricca. Il Green Book del HM Treasury fornisce un metodo esplicito per applicare questa ponderazione, costruito sull'utilità marginale decrescente del reddito, così che le valutazioni non trattino silenziosamente una sterlina guadagnata dal decile più ricco come uguale in valore a una sterlina guadagnata dal più povero.

## Perché è importante

L'analisi costo-beneficio standard somma sterline senza chiedere di chi sono, il che assume implicitamente che una sterlina valga lo stesso per tutti — un'assunzione che gli economisti sanno da tempo essere falsa. Una famiglia che guadagna £15.000/anno vive un guadagno di £1.000 in modo molto diverso da una famiglia che guadagna £150.000/anno, perché l'utilità marginale del reddito diminuisce al crescere del reddito. Lasciata non ponderata, la valutazione standard favorisce sistematicamente interventi che beneficiano gruppi più ricchi e già avvantaggiati, perché il loro maggiore potere di spesa gonfia la valutazione monetaria dei benefici che li raggiungono (un miglioramento di un parco vicino a case costose "mostra" un beneficio di valore immobiliare maggiore dello stesso miglioramento vicino a case economiche, puramente perché i prezzi sono più alti, non perché il guadagno di benessere sia maggiore).

La guida supplementare del Green Book sull'analisi distributiva, rafforzata dopo la revisione del 2020 del Treasury in risposta alle critiche secondo cui la metodologia di valutazione favoriva sistematicamente Londra e il Sud-Est, stabilisce un approccio di ponderazione formale basato su un'elasticità assunta dell'utilità marginale del reddito di circa 1,3 — il che significa che un raddoppio del reddito riduce approssimativamente a metà (specificamente, 2^-1,3 ≈ 0,41 volte) il valore marginale di una sterlina aggiuntiva. Questo non è un aggiustamento di arrotondamento: applicarlo può cambiare quale di due programmi concorrenti mostri il più alto valore attuale netto, particolarmente quando si confronta un intervento concentrato in un'area deprivata con uno distribuito sulla popolazione generale.

## Il calcolo

Il peso distributivo del Green Book per una sterlina di beneficio che va a una famiglia al livello di reddito y, rispetto a una sterlina al livello di reddito medio nazionale ȳ:

```
Peso(y) = (ȳ / y)^e

dove:
  y  = reddito familiare (o reddito del gruppo interessato)
  ȳ  = reddito familiare medio (di riferimento)
  e  = elasticità dell'utilità marginale del reddito (Green
       Book: circa 1,3)
```

Applicare i pesi ai beneficio netti:

```
Beneficio ponderato = Σ [beneficio non ponderato al gruppo i
                      × Peso(y_i)]
```

Un gruppo che guadagna metà della media nazionale (y = 0,5ȳ) riceve un peso di (1/0,5)^1,3 = 2^1,3 ≈ 2,46 — ogni sterlina di beneficio a quel gruppo conta come se valesse circa 2,46 volte una sterlina a una famiglia di reddito medio.

## Esempio pratico

**Due programmi locali concorrenti**, ciascuno con un beneficio netto non ponderato di £2 milioni/anno, in competizione per lo stesso fondo di crescita regionale:

- *Programma A*: uno schema di supporto alle imprese in una città prospera, reddito familiare medio £45.000 (circa 1,3× la media nazionale assunta di £35.000).
- *Programma B*: un programma di competenze in un quartiere deprivato, reddito familiare medio £18.000 (circa 0,51× la media nazionale).

```
Peso(A) = (35.000 / 45.000)^1,3 = (0,778)^1,3 ≈ 0,72
Peso(B) = (35.000 / 18.000)^1,3 = (1,944)^1,3 ≈ 2,53

Beneficio ponderato A = £2.000.000 × 0,72 = £1,44 milioni
Beneficio ponderato B = £2.000.000 × 2,53 = £5,06 milioni
```

Non ponderati, i due programmi sono pari. Ponderato per impatto distributivo, il beneficio del Programma B è più di tre volte maggiore — un risultato che ribalta la raccomandazione di finanziamento e riflette lo scopo esplicito del Green Book nel richiedere che la ponderazione sia mostrata, non solo il rapporto beneficio-costo non ponderato.

**Allocazione di sovvenzioni benefiche**: un finanziatore che confronta una sovvenzione di £500.000 che raggiunge 1.000 famiglie a basso reddito (peso ≈ 2,0, valore ponderato equivalente a £1 milione) con gli stessi £500.000 che raggiungono 1.000 famiglie a reddito medio (peso ≈ 1,0, valore ponderato equivalente a £500.000) dovrebbe mostrare il caso distributivo esplicitamente nel suo documento del board, non lasciarlo da inferire.

## Collegamento con lo sviluppo software

La ponderazione distributiva raramente appare direttamente nelle metriche di erogazione software, ma dovrebbe plasmare come i team ingegneristici e dati progettano misurazione e targeting:

- Quando si costruisce una dashboard di impatto o un calcolatore di benefici, esponi il profilo di reddito o deprivazione di chi è interessato, non solo un totale di beneficio aggregato — le cifre aggregate senza scomposizione distributiva nascondono precisamente l'inversione mostrata sopra.
- Collega la logica di targeting nella progettazione del servizio agli stessi dati di deprivazione che usa il Green Book — vedi [Indice di deprivazione multipla](../indice-di-deprivazione-multipla/) — così che la portata di un servizio digitale possa essere valutata per equità, non solo efficienza (la contestata quarta E in [value for money](../valore-per-il-denaro/)).
- Quando un algoritmo alloca una risorsa scarsa (slot di appuntamento, tempo degli operatori, un sussidio), una funzione obiettivo non ponderata di "massimizzare il beneficio totale" riprodurrà, per costruzione, lo stesso bias che la ponderazione del Green Book esiste per correggere — segnala esplicitamente questo ai responsabili delle politiche prima di ottimizzare.

## Insidie

- **Applicare pesi distributivi incoerentemente in un portafoglio.** Ponderare i benefici di un programma ma non del suo comparatore produce un confronto distorto, non più equo; il Green Book richiede un trattamento paritario.
- **Usare valori immobiliari o di mercato come proxy per il benessere senza aggiustamento.** I prezzi di mercato sono essi stessi distorti dalla disuguaglianza di reddito esistente, che è precisamente ciò che la ponderazione distributiva è intesa a correggere — usare valori di mercato non aggiustati può duplicare il bias.
- **Ignorare la variazione all'interno del gruppo.** Pesare per reddito medio dell'area (es. un decile dell'Indice di deprivazione multipla) può misrappresentare individui che non corrispondono alla media della loro area; usa i dati di reddito più granulari ragionevolmente disponibili.
- **Trattare l'elasticità 1,3 come una costante universale.** Il Green Book stesso nota che si tratta di una stima con un intervallo plausibile; testa la sensibilità delle decisioni principali contro elasticità alternative piuttosto che trattare 1,3 come esatto.

## Fonti

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
