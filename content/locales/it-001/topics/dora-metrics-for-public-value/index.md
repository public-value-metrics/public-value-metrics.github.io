# Metriche DORA per il valore pubblico

Le metriche DORA (DevOps Research and Assessment) — frequenza di deployment, tempo di consegna per i cambiamenti, tasso di fallimento dei cambiamenti, e tempo di ripristino del servizio, più l'affidabilità come quinta — sono i benchmark di performance di erogazione più validati dell'industria software. Tradotta in termini di responsabilità del settore pubblico, ognuna è un proxy diretto di quanto velocemente, e quanto sicuramente, il valore pubblico raggiunge un cittadino.

## Perché è importante

Il decennio di ricerca del DORA, pubblicato annualmente come l'*Accelerate State of DevOps Report* (metodologia di Forsgren, Humble e Kim, ora gestita da Google Cloud), raggruppa i team in performer elite, alti, medi, e bassi. I team elite rilasciano su richiesta, impiegano meno di un giorno dal commit alla produzione, falliscono circa il 5% dei cambiamenti, e recuperano in meno di un'ora; i performer bassi rilasciano mensilmente o meno, impiegano mesi, falliscono circa il 40% dei cambiamenti, e recuperano in settimane. Nel governo queste non sono metriche vanità ingegneristiche: il Service Standard del Government Digital Service richiede ai team di "iterare e migliorare frequentemente" e di essere in grado di rispondere rapidamente ai bisogni dell'utente, e i dipartimenti che non possono rilasciare in sicurezza e spesso sono strutturalmente incapaci di soddisfare quello standard, qualunque cosa dica la loro ricerca utente. Il lavoro di efficienza digitale dello stesso Cabinet Office ha trovato che spingere un cittadino da una transazione digitale fallita o lenta in un canale telefonico o di carta è costoso — il Digital Efficiency Report del 2012 del GDS ha stimato che alcune transazioni digitali costano quanto poco 20p contro contatti telefonici o faccia-a-faccia che costano fino a £8,62 — quindi un fallimento di cambiamento in un servizio rivolto al pubblico non costa solo tempo ingegneristico, spinge sterline reali sul budget del contact centre (vedi [risparmi da spostamento di canale](../channel-shift-savings/)).

## Il calcolo

```
Frequenza di deployment  = deployment in produzione / tempo
Tempo di consegna per i  = t(deploy) − t(commit), mediano
cambiamenti
Tasso di fallimento      = cambiamenti falliti /
dei cambiamenti            cambiamenti totali × 100
Tempo di ripristino      = t(ripristinato) − t(fallimento),
(MTTR)                     mediano
Affidabilità              = raggiungimento SLO
                           (disponibilità, latenza,
                           correttezza)
```

Traduzioni in valore pubblico:

```
Tempo di consegna    → settimane nella pipeline × CoD, vedi
                       costo-del-ritardo-nei-programmi-
                       pubblici
Tasso di fallimento  → tasso di incidente rivolto al
                       cittadino: CFR × costo per chiamata
                       del contact centre reindirizzata (o
                       per transazione statutaria fallita)
Tempo di recupero    → danno di interruzione del servizio:
                       MTTR × (richieste/domande bloccate
                       per ora) × costo a valle o perdita
                       di benessere per unità
Affidabilità         → sconto del beneficio: un servizio al
                       99% di disponibilità eroga ≈ 0,99
                       del suo beneficio modellato —
                       l'analogo di erogazione della
                       carenza di adozione o conformità
```

## Esempio pratico

Il team di un portale di richieste di benefici di un'autorità locale, prima e dopo un investimento di ingegneria di erogazione:

```
                    Prima       Dopo
Rilasci             mensile     settimanale
Tempo di consegna   8 settimane 5 giorni
CFR                 30%         10%
MTTR                3 giorni    4 ore
```

Il team rilascia circa 25 miglioramenti/anno, valore medio £8.000/settimana ([costo del ritardo](../cost-of-delay-in-public-programmes/)). Tagliare il tempo di consegna di circa 7,3 settimane porta avanti il flusso di beneficio di ogni miglioramento: 25 × 7,3 × 8.000 ≈ **£1.460.000/anno** di valore erogato prima. Sul tasso di fallimento: 25 × (0,30 − 0,10) = 5 cambiamenti falliti in meno/anno; ogni cambiamento fallito su un portale pubblico tipicamente reindirizza una stima di 2.000 cittadini al canale telefonico a £8,62 contro 20p, un costo netto di circa £8,42 × 2.000 ≈ £16.840 per incidente, quindi evitare 5 incidenti risparmia ≈ **£84.200/anno**. L'investimento di ingegneria di erogazione viene valutato nella stessa valuta di qualsiasi altro caso di valore pubblico.

## Esempio pratico continuato: affidabilità

Se il portale opera al 97% di disponibilità piuttosto che un obiettivo del 99,5%, e ogni punto percentuale di tempo di inattività è modellato come 2% di richieste perse per abbandono, il servizio sta erogando circa 0,975 del suo beneficio modellato di £2M/anno — uno sconto di beneficio di £50.000/anno che un dashboard di sola disponibilità non fa mai emergere.

## Collegamento con lo sviluppo software

Le metriche DORA sono le metriche operative di un servizio pubblico vestite diversamente: il tempo di consegna si mappa agli [standard dei servizi e metriche di transazione](../service-standards-and-transaction-metrics/); il tasso di fallimento dei cambiamenti si mappa ai tassi di rilavoro e reclamo; il MTTR si mappa a quanto tempo un servizio statutario è non disponibile ai richiedenti. Le tecniche di miglioramento si trasferiscono in entrambe le direzioni perché entrambi sono sistemi di code sotto vincoli di responsabilità — vedi [metriche di flusso nell'erogazione governativa](../flow-metrics-in-government-delivery/) per la matematica delle code sottostante. Nota anche la scoperta del 2025 del DORA che l'adozione dell'IA correla con un throughput più alto ma stabilità *peggiore* — un intervento con sia efficacia sia effetti collaterali, che è esattamente l'analisi di beneficio netto attraverso cui lavora l'argomento della [produttività dell'IA](../ai-productivity-in-the-public-sector/) di questo capitolo.

## Insidie

- **Manipolazione delle metriche**: gonfiare i conteggi di deployment con rilasci no-op, o escludere gli hotfix dal conteggio dei fallimenti di cambiamento. Definisci gli eventi tanto precisamente quanto uno standard di servizio statutario definisce una "transazione riuscita".
- **Classifiche tra dipartimenti**: i cluster DORA confrontano pratiche di erogazione, non servizi con profili di rischio diversi; un sistema di pagamento fiscale valutato "alto" potrebbe essere la postura giusta dove "elite" sarebbe incosciente dati i requisiti di assicurazione.
- **Ottimizzare una sola metrica**: velocità senza tasso di fallimento dei cambiamenti è il classico compromesso throughput-instabilità — riporta tutti i quattro insieme, non come un singolo punteggio.

## Fonti

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
