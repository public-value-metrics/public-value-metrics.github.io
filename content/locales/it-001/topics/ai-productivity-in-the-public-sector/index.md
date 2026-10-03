# Produttività dell'IA nel settore pubblico

Le metriche per cosa l'assistenza di codifica IA effettivamente fa all'output ingegneristico — tassi di accettazione dei suggerimenti, velocità da studi controllati, throughput di PR, e ritenzione del codice — portano una base di evidenza genuinamente contraddittoria anche prima che vengano aggiunti i vincoli del settore pubblico: la classificazione dei dati limita quali parti di un patrimonio legacy uno strumento IA possa toccare affatto, i cicli di appalto significano che lo strumento sotto valutazione è spesso una generazione di modello indietro rispetto alla capacità attuale, e i requisiti di nulla osta di sicurezza governano chi possa usarlo su cosa.

## Perché è importante

I due studi controllati più citati puntano in direzioni opposte. L'RCT del 2023 di Peng et al. su GitHub Copilot ha trovato sviluppatori che completavano un compito di server HTTP greenfield il 55,8% più velocemente con Copilot (1h11m contro 2h41m, n=95). L'RCT del 2025 di METR ha trovato sviluppatori open-source esperti che lavoravano sui *propri repository maturi* essere il 19% più lenti con gli strumenti IA di inizio 2025, mentre credevano di essere circa il 20% più veloci. Entrambi gli studi sono solidi; la contraddizione è la scoperta — l'efficacia su compiti greenfield non si trasferisce all'efficacia su codebase maturi, e molto dell'ingegneria governativa è lavoro su codebase maturi su patrimoni più vecchi e più idiosincratici del repository commerciale mediano. Il Generative AI Framework for HMG (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) del Central Digital and Data Office espone principi per l'adozione responsabile precisamente perché questa base di evidenza non può essere semplicemente importata da demo dei fornitori; i dipartimenti sono tenuti a valutare gli strumenti contro i propri requisiti di gestione dati e sicurezza prima del rollout.

## Il calcolo

```
Tasso di accettazione = suggerimenti accettati /
                        suggerimenti mostrati
Tasso di ritenzione   = codice IA che sopravvive al merge /
                        codice IA accettato
Velocità              = (t_controllo − t_IA) / t_controllo
                        (SOLO da confronto controllato)
Delta di throughput   = Δ PR mergiate/sviluppatore/settimana

Fattore di copertura del settore pubblico:
  quota di codebase eligibile = LOC su sistemi dove la
    classificazione (OFFICIAL, OFFICIAL-SENSITIVE,
    SECRET) permette affatto lo strumento

Modello di valore = sviluppatori × copertura-eligibile ×
                    tempo risparmiato × tasso caricato ×
                    utilizzo
             — ogni termine necessita di misurazione
               locale, e il fattore di copertura non ha
               equivalente nel settore privato
```

## Esempio pratico

Un dipartimento governativo pilota un assistente di codifica IA attraverso 300 sviluppatori, ma solo i sistemi classificati OFFICIAL sono eligibili per l'uso dello strumento — il 70% del patrimonio per allocazione di personale, con il restante 30% (sistemi a classificazione più alta) escluso interamente.

```
Sviluppatori eligibili = 300 × 0,70 = 210

Risultato del pilota: tempo risparmiato autoriportato 40
                      min/giorno;
                      risparmio misurato a livello di
                      compito 12 min/giorno (0,2h) — il
                      divario di percezione METR,
                      riprodotto nel mondo reale

Valuta il numero MISURATO:
  210 × 0,2h × 220 giorni × £55/ora caricato × 0,6
  utilizzo
  = 210 × 44 ore × £55 × 0,6
  = 9.240 ore × £55 × 0,6 ≈ £304.920/anno di capacità

Costo: 210 posti con licenza × £22/mese × 12 ≈
  £55.440/anno

Rapporto di capacità netta ≈ 304.920 / 55.440 ≈ 5,5:1
```

Finanziabile a circa un terzo del beneficio autoriportato, e solo dopo che il soffitto di classificazione viene applicato — licenziare tutti i 300 sviluppatori sulla forza della cifra autoriportata avrebbe sopravvalutato sia la popolazione eligibile sia il vero risparmio.

## Collegamento con lo sviluppo software

Le discipline che si trasferiscono direttamente: esegui **esperimenti pragmatici** sulla codebase propria del dipartimento e su ticket reali, non compiti demo del fornitore, perché il risultato METR è specificamente una scoperta su codebase maturi; tratta il **tasso di accettazione come un proxy, non un risultato** — alta accettazione con bassa ritenzione è l'equivalente software della sovradiagnosi; abbina ogni rivendicazione di throughput con un **controllo di stabilità**, poiché il report 2025 del DORA ha trovato che l'adozione dell'IA solleva il throughput ma degrada la stabilità dei cambiamenti, che è esattamente l'analisi di beneficio netto per cui sono costruite le [metriche DORA per il valore pubblico](../dora-metrics-for-public-value/); e sii onesto che gli strumenti IA possono ampliare, non restringere, il divario sui patrimoni legacy pesanti di [debito tecnico](../technical-debt-as-public-value-erosion/), perché i dati di addestramento sotto-rappresentano il codice COBOL, 4GL, e mainframe su misura comune nel governo, quindi la qualità dei suggerimenti esattamente sui sistemi che più hanno bisogno di aiuto è spesso la più debole. Questo si inserisce insieme alla domanda più ampia del [valore dell'IA nel governo](../ai-in-government-value/) e dovrebbe essere governato dagli stessi vincoli del [valore della cybersicurezza del settore pubblico](../public-sector-cybersecurity-value/) che limitano dove qualsiasi strumento di terze parti possa vedere codice o dati affatto.

## Insidie

- **Trapianto di studio del fornitore**: applicare le velocità RCT greenfield al lavoro di integrazione legacy è precisamente l'errore che lo studio METR ha esposto.
- **Autoreport come misurazione**: un divario di percezione-contro-misurato di 20 punti percentuali è il più grande bias conosciuto in questa letteratura, e gonfia i casi aziendali che si basano solo su indagini di sviluppatori.
- **Ignorare il soffitto di classificazione**: i modelli di licenza e valore costruiti sul personale totale piuttosto che sul sottoinsieme eligibile e sicurezza-verificato sistematicamente sopravvalutano sia la costo-efficacia sia la copertura raggiungibile.
- **Ritardo del ciclo di appalto**: l'appalto di strumenti basato su framework può significare che un pilota valuta una generazione di modello che è 12-18 mesi indietro rispetto a ciò che è pubblicamente disponibile al momento del rollout completo, rendendo l'assunzione di velocità del caso aziendale originale obsoleta prima del go-live.

## Fonti

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
