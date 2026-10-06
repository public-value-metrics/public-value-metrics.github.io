# Anni di vita aggiustati per il benessere (WELLBY)

Un WELLBY è un punto aggiuntivo di satisfazione di vita, sulla scala di benessere standard 0-10, per una persona per un anno. È l'analogo strutturale del QALY usato nell'economia sanitaria — una singola unità che ti permette di confrontare interventi i cui risultati non hanno altro in comune — ma costruito su benessere soggettivo piuttosto che stati di salute clinici, ed esposto nella guida "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021) del HM Treasury.

## Perché è importante

La valutazione costo-beneficio necessita di un'unità comune per confrontare una sovvenzione a un club giovanile contro uno schema di sicurezza stradale contro un servizio di salute mentale, nessuno dei quali condivide una misura di risultato. L'economia sanitaria ha risolto questo per gli interventi clinici con il QALY: un anno di vita aggiustato per qualità, pesato da 0 (morto) a 1 (salute piena). La guida sul benessere del HM Treasury estende la stessa logica alla spesa pubblica non sanitaria, usando la domanda armonizzata sulla satisfazione di vita dell'ONS ("Nel complesso, quanto sei satisfatto della tua vita al momento?", risposta 0-10) come scala di risultato invece di un indice di stato di salute. Un WELLBY di 1 significa che la satisfazione di vita di una persona sale di un punto intero per un anno (o, equivalentemente, la satisfazione di dieci persone sale di 0,1 punti ciascuna per un anno — i WELLBY si somano attraverso una popolazione nel modo in cui fanno i QALY). La guida del HM Treasury fissa un valore monetario illustrativo per WELLBY (circa £13.000, prezzi 2019/20) derivato riconciliando i dati di benessere soggettivo con altri approcci al valore di un anno di vita, dando ai valutatori un modo per monetizzare risultati — riduzione della solitudine, coesione comunitaria, accesso agli spazi verdi — che le tecniche di [valutazione del benessere](../valutazione-del-benessere/) precedentemente potevano solo descrivere, non confrontare su base comune con la spesa sanitaria o di sicurezza.

## Il calcolo

```
WELLBY = Δ satisfazione di vita (scala 0-10) × numero di
        anni in cui il cambiamento persiste
        (somato attraverso tutte le persone interessate)

Beneficio di benessere monetizzato = WELLBY generati ×
                                     valore per WELLBY
                                     (valore di riferimento
                                     HMT)

cfr. QALY = Δ utilità dello stato di salute (scala 0-1) ×
            anni vissuti in quello stato
```

La scala di satisfazione 0-10 e la scala di utilità QALY 0-1 non sono intercambiabili senza un passo di conversione; la guida del HM Treasury discute la riconciliazione dei due così che, per esempio, un intervento sanitario valutato in QALY e un intervento sociale valutato in WELLBY non vengano silenziosamente contati doppiamente o lasciati non comparabili all'interno della stessa [valutazione Green Book](../valutazione-green-book/).

## Esempio pratico

**Servizio di solitudine di un'autorità locale**: uno schema di amicizia serve 400 residenti anziani isolati. Le indagini di follow-up mostrano la satisfazione di vita media salire da 5,2 a 6,0 (un guadagno di 0,8 punti), e l'effetto è stimato persistere per 2 anni prima di dissolversi.

```
WELLBY = 400 persone × 0,8 punti × 2 anni = 640 WELLBY

Valore monetizzato = 640 × £13.000 = £8.320.000
```

Contro un costo annuale del programma di £300.000 (£600.000 su 2 anni), il rapporto beneficio-costo è circa 8.320.000 / 600.000 ≈ **13,9:1** — una cifra che ora può sedere nella stessa tabella di valutazione del costo-per-QALY-evitato di uno schema sanitario o dei risparmi di tempo di viaggio di uno schema di trasporto.

**Organizzazione benefica, scala più piccola**: un programma di arti comunitarie raggiunge 50 partecipanti con un guadagno di satisfazione misurato di 0,3 punti, che dura 1 anno.

```
WELLBY = 50 × 0,3 × 1 = 15 WELLBY
Valore monetizzato = 15 × £13.000 = £195.000
```

## Collegamento con lo sviluppo software

- Qualsiasi servizio rivolto ai cittadini che già raccoglie un elemento di indagine sulla satisfazione di vita o benessere (molte piattaforme di autorità locali e di salute e assistenza lo fanno, seguendo le quattro domande di benessere standard dell'ONS) può calcolare WELLBY direttamente dalle pipeline di dati esistenti piuttosto che commissionare una valutazione economica su misura per ogni cambiamento di servizio.
- I WELLBY danno ai team ingegneristici che costruiscono per il reporting del [social value act](../legge-sul-valore-sociale/) o del [ritorno sociale sull'investimento](../ritorno-sociale-sullinvestimento/) un denominatore standardizzato a livello nazionale, approvato dal HM Treasury, evitando la proliferazione di "punteggi di impatto" su misura che non possono essere confrontati attraverso contratti o fornitori.
- Perché i WELLBY sono additivi attraverso persone e tempo, si compongono nettamente nel tipo di tracciamento di risultati a livello di popolazione usato nei sistemi di [responsabilità basata sui risultati](../responsabilità-basata-sui-risultati/) — un dashboard di servizio può riportare WELLBY cumulativi generati per trimestre nel modo in cui un sistema sanitario riporta QALY guadagnati.

## Insidie

- **Assumere che i guadagni di satisfazione autoriportati siano interamente attribuibili all'intervento** — senza un controfattuale (gruppo di confronto o design prima/dopo con controlli), non puoi separare il guadagno WELLBY dalle tendenze generali; vedi [analisi controfattuale](../analisi-controfattuale/).
- **Mescolare WELLBY e QALY in un totale senza riconciliazione** — la guida del HM Treasury è esplicita che i due usano scale diverse e teorie di valore sottostanti diverse; sommarli ingenuamente conta doppiamente il benessere sovrapposto.
- **Usare il valore monetario di riferimento senza critica** — la cifra £-per-WELLBY è una stima media nazionale con bande di incertezza reali; la guida del HM Treasury raccomanda l'analisi di sensibilità, non trattarla come un tasso di cambio fisso.

## Fonti

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
