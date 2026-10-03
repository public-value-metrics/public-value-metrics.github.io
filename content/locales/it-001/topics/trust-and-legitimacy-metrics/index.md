# Metriche di fiducia e legittimità

La legittimità e il supporto è una delle tre gambe del "triangolo strategico" di Mark Moore in *Creating Public Value* (1995) — insieme al valore pubblico stesso e alla capacità operativa — ed è la gamba più spesso lasciata non misurata, perché a differenza di un budget o un conteggio di output, la legittimità non ha un singolo numero ovvio attaccato a essa. Le metriche di fiducia e legittimità sono la famiglia di misure proxy che i governi usano per riempire quel vuoto: indagini di fiducia istituzionale, valutazioni di confidenza di organismi di controllo, dati di reclami e appelli, e indicatori di supporto politico/legislativo.

## Perché è importante

L'argomento di Moore è che un manager pubblico che eroga vero valore ma perde legittimità politica e pubblica alla fine perderà l'ambiente autorizzante necessario per continuare a erogarlo — il finanziamento viene tagliato, i mandati vengono ristretti, e il servizio viene affamato indipendentemente da quanto buoni siano i suoi risultati. La legittimità non è quindi un ripensamento di pubbliche relazioni avvitato a una scorecard di erogazione; è un input portante per se la missione possa continuare affatto, che è il motivo per cui si inserisce come prospettiva coequale in una [scorecard del valore pubblico](../public-value-scorecard/) piuttosto che una nota a piè di pagina. Il programma di indagine "Trust in Government" dell'OCSE è il tentativo cross-nazionale principale di quantificare questo: traccia la quota di cittadini attraverso gli stati membri dell'OCSE che dicono di avere fiducia nel loro governo nazionale, e i suoi dati di lungo periodo mostrano che la fiducia è altamente sensibile agli shock — sia la crisi finanziaria del 2008 sia la pandemia COVID-19 hanno prodotto oscillazioni nette a livello nazionale, spesso seguite solo da un recupero parziale, con l'analisi dell'OCSE che trova costantemente che la *competenza* percepita (il governo eroga ciò che dice che farà) e l'*equità/integrità* percepita (il governo è visto agire senza corruzione o favoritismo) sono i due motori più forti della cifra di fiducia, distinti dalla satisfazione con qualsiasi singola transazione. I governi provano sempre più a operazionalizzare la legittimità anche a un livello più granulare — i regolatori e gli ispettorati indipendenti britannici (il National Audit Office, il Parliamentary and Health Service Ombudsman, regolatori settoriali come Ofsted e la Care Quality Commission) funzionano come controlli di legittimità istituzionalizzati, convertendo "il pubblico si fida ancora di questo servizio" in valutazioni verificabili.

## Il calcolo

La fiducia e legittimità è un argomento modellato su un quadro i cui proxy quantitativi usabili sono:

```
Indice di fiducia istituzionale (stile OCSE)
  = % di intervistati che rispondono "sì" a una domanda di
    confidenza-nel-governo, tracciato nel tempo, disaggregato
    per gruppo demografico

Set di proxy di legittimità (nessun singolo numero sostituisce
il costrutto):
  - Reclami accolti per 1.000 utenti del servizio (dati
    dell'ombudsman o reclami interni)
  - Tasso di successo di revisione giudiziaria / appelli
    contro le decisioni dell'ente
  - Valutazione del regolatore/ispettorato indipendente (es.
    fasce da "eccezionale" a "inadeguato")
  - Voti di confidenza del comitato legislativo/di controllo
    o frequenza di report critici
  - Volume delle richieste di libertà di informazione e
    tasso di divulgazione/rifiuto, come proxy per la
    trasparenza percepita

La legittimità è corroborata, non calcolata: una valutazione
di legittimità defendibile triangola diversi di quelli sopra
piuttosto che basarsi su un singolo proxy.
```

## Esempio pratico

**Autorità fiscale nazionale**: triangolazione di legittimità per un report annuale di valore pubblico.

```
Proxy di fiducia in stile OCSE (indagine di confidenza
specifica del dipartimento):
  58% degli intervistati dice di fidarsi dell'autorità per
  "trattarmi equamente" (in calo dal 64% due anni prima)

Dati sui reclami:
  Reclami accolti: 4,2 per 1.000 interazioni con i
  contribuenti (in aumento da 3,1 per 1.000)

Segnalazioni all'ombudsman:
  Segnalazioni all'Adjudicator's Office indipendente: 1.850
  nell'anno, di cui il 61% accolte in pieno o in parte contro
  l'autorità (in aumento dal 48% dell'anno precedente)

Leggendo tutti e tre insieme: la fiducia sta scendendo, i
reclami accolti stanno salendo, e i risultati dell'ombudsman
indipendente si schierano sempre più contro l'autorità — tre
segnali indipendenti che convergono nella stessa direzione,
che è ciò che rende questa una scoperta di legittimità
credibile piuttosto che rumore in una singola serie.
```

Una singola di queste cifre che si muove sarebbe un'evidenza debole; tre misure indipendenti che si muovono insieme nello stesso periodo è il pattern che rende defendibile una rivendicazione di legittimità.

## Collegamento con lo sviluppo software

Le metriche di legittimità sono raramente prodotte dal dashboard di un singolo team, che è esso stesso la lezione di design: costruisci pipeline di reporting che possano acquisire e riconciliare dati da fonti esterne indipendenti (sistemi di gestione casi dell'ombudsman, feed di valutazioni del regolatore, fornitori di indagini) piuttosto che architettare il reporting di legittimità come una metrica solo-interna, perché le rivendicazioni di legittimità ottenute internamente ("ci valutiamo come affidabili") portano poco peso probatorio — lo stesso problema di indipendenza notato per la prospettiva di legittimità in una [scorecard del valore pubblico](../public-value-scorecard/). Le pipeline di dati di reclami e appelli meritano lo stesso rigore di qualità dei dati di qualsiasi pipeline di risultato che alimenta contratti di [pagamento a risultati](../payment-by-results-and-social-impact-bonds/), poiché un dataset di reclami sotto-riportato o mal categorizzato sottostima silenziosamente un problema di legittimità prima che diventi visibile in un'indagine di fiducia un anno dopo. Vedi [metriche di satisfazione del cittadino](../citizen-satisfaction-metrics/) per la controparte a livello di transazione di questa misura a livello istituzionale, e [valore pubblico](../public-value/) per il quadro completo del triangolo strategico di Moore a cui questa gamba appartiene.

## Insidie

- **Trattare la satisfazione come un proxy per la legittimità**: un cittadino può essere satisfatto dell'interfaccia di una singola transazione mentre non si fida dell'istituzione nel complesso (o viceversa) — vedi [metriche di satisfazione del cittadino](../citizen-satisfaction-metrics/) per perché i due devono essere riportati separatamente.
- **Basarsi su una singola metrica autoriportata**: un'indagine di fiducia gestita internamente senza corroborazione indipendente (dati dell'ombudsman, valutazioni del regolatore) è facile da respingere come auto-valutazione; triangola.
- **Ignorare la disaggregazione demografica**: le cifre di fiducia nazionali aggregate possono mascherare legittimità marcatamente divergente tra gruppi specifici (per età, etnicità, reddito, o regione) — i rilasci "Trust in Government" dell'OCSE stessi disaggregano esattamente per questo motivo.
- **Leggere un singolo calo guidato da uno shock come una tendenza permanente**: le cifre di fiducia si muovono nettamente attorno alle crisi (crolli finanziari, pandemie, scandali di alto profilo) e recuperano parzialmente; un singolo punto di dati post-shock non dovrebbe essere estrapolato in un declino di lungo periodo senza più dati.

## Fonti

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
