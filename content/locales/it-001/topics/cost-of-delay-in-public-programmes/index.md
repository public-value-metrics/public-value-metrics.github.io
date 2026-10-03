# Costo del ritardo nei programmi pubblici (CoD)

Il costo del ritardo è il valore pubblico perso per unità di tempo in cui un programma, servizio, o cambiamento di sistema *non* è ancora erogato. È la metrica ponte principale di questo capitolo: converte "il go-live è slittato di sei mesi" in sterline a settimana, o in WELLBY a settimana, così che il ritardo possa essere discusso nella stessa valuta del caso aziendale stesso.

## Perché è importante

La regola di Reinertsen — "se quantifichi solo una cosa, quantifica il Cost of Delay" — viaggia nel governo quasi invariata, perché i programmi pubblici sono inusualmente esposti a esso: i casi aziendali vengono approvati contro un flusso di beneficio previsto, ma il flusso inizia a scorrere solo al go-live, ed ogni settimana di slittamento è una settimana di valore rinunciato che nessuno prezza nel registro dei rischi. Il controllo ripetuto del National Audit Office del rollout di Universal Credit (vedi i suoi report "Rolling Out Universal Credit", <https://www.nao.org.uk/>) illustra il pattern: lo slittamento del programma veniva tracciato e riportato, ma il costo in sterline-a-settimana del *non ancora* erogare il sistema riformato alla prossima tranche di richiedenti era raramente dichiarato come una cifra principale, anche se è il numero che avrebbe dovuto guidare la prioritizzazione e l'escalation. Senza una cifra CoD, un programma ritardato sembra un problema di programma per il comitato di erogazione; con una, è un problema di erosione del valore per il funzionario contabile.

## Il calcolo

```
CoD = beneficio per unità di tempo rinunciato mentre non
     erogato   (£/settimana o WELLBY/settimana)

Perdita totale da ritardo = CoD × durata del ritardo

Flussi di beneficio da sommare per programmi pubblici:
  risparmi che liberano contanti (riduzione frode/errore,
  costi temporanei evitati)
+ capacità non-contante liberata (ore di caseworker/
  funzionario × costo caricato)
+ beneficio di benessere (WELLBY × £13.000/WELLBY, guida
  supplementare sul benessere del Green Book HMT, prezzi
  2019)
```

Per i servizi rivolti ai cittadini, denomina sia in benessere sia in denaro — vedi gli [anni di vita aggiustati per il benessere](../wellbeing-adjusted-life-years/) per l'unità sottostante, e il [costo opportunità nella spesa pubblica](../opportunity-cost-in-public-spending/) per cosa la sterlina ritardata avrebbe altrimenti potuto finanziare.

## Esempio pratico

**Autorità locale**: un aggiornamento del sistema di benefici abitativi riduce l'errore di sovrapagamento di £150/richiesta/anno attraverso 20.000 richieste attive.

```
Beneficio annuale = 150 × 20.000 = £3.000.000/anno
CoD = 3.000.000 / 52 ≈ £57.700/settimana
Un ritardo di implementazione di 12 mesi costa 52 ×
  57.700 ≈ £3.000.000 in errore evitabile.
```

**Agenzia del governo centrale**: un servizio di valutazione dei benefici per disabilità, erogato sei mesi (26 settimane) più tardi del previsto, significa che 200.000 richiedenti/anno attendono in media tre settimane più a lungo per una decisione. Ogni settimana extra di incertezza finanziaria è modellata come un effetto di −0,0018 WELLBY (punto di satisfazione di vita):

```
Perdita WELLBY per richiedente = 3 × 0,0018 = 0,0054
Perdita WELLBY annuale = 200.000 × 0,0054 = 1.080
  WELLBY/anno
CoD_benessere = 1.080 / 52 ≈ 20,8 WELLBY/settimana
CoD_denaro = 20,8 × £13.000 ≈ £270.000/settimana di
  valore di benessere
```

Un ritardo di 26 settimane quindi "costa" circa 540 WELLBY — valutati a circa £7 milioni alla valutazione del benessere del Green Book — riformulando una data di go-live mancata come un evento di benessere del cittadino, non una nota a piè di pagina di gestione progetto.

## Collegamento con lo sviluppo software

Il CoD è ciò che rende [metriche DORA](../dora-metrics-for-public-value/) e [metriche di flusso](../flow-metrics-in-government-delivery/) finanziariamente leggibili: il tempo di consegna nella pipeline × CoD è denaro (o benessere) bruciato in code prima che raggiunga mai un cittadino. Concretamente:

- **Prioritizzazione**: classifica un backlog per CoD ÷ durata piuttosto che per seniorità dello stakeholder — l'analogo ingegneristico software del requisito del Green Book di valutare le opzioni sul valore, non su chi stia chiedendo.
- **Appalto**: un ciclo di appalto a framework di 12-18 mesi ha un CoD; prezzarlo cambia il caso di urgenza per percorsi accelerati, e alimenta direttamente le decisioni di [costruire vs comprare](../build-vs-buy-in-government/) dove il tempo-al-valore è un motore decisionale.
- **Caso dei benefici**: ogni cifra CoD citata all'approvazione dovrebbe riapparire alla [realizzazione dei benefici](../benefits-realization/) — se il costo del ritardo era reale, il beneficio accelerato dovrebbe essere misurabile dopo il go-live.

## Insidie

- **Assumere un CoD lineare**: alcuni servizi pubblici hanno valore a forma di scadenza (una data di conformità statutaria — il CoD salta a livelli di rischio di applicazione dopo la data, vicino a zero prima) piuttosto che un tasso settimanale uniforme. Classifica il profilo di urgenza prima di moltiplicare.
- **CoD su output di cui nessuno ha bisogno**: il ritardo ha un costo solo se la cosa non erogata ha valore; un sistema che nessuno userà ha CoD zero indipendentemente da quanto sia tardivo.
- **Conteggio doppio di ritardo e sconto**: il [tasso di sconto sociale](../social-discount-rate/) già prezza il tempo su orizzonti di valutazione multi-anno; il CoD è la versione operativa, entro-orizzonte, per settimane e mesi. Usa il CoD per lo slittamento del programma, lo spostamento del VAN per la ri-fasatura multi-anno.

## Fonti

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
