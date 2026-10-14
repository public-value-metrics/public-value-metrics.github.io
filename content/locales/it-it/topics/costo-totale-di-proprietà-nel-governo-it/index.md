# Costo totale di proprietà (TCO) nel governo IT

Il costo totale di proprietà è il costo del ciclo di vita completo di un sistema — acquisizione più ogni anno di gestirlo — scontato a una data comune. Nel governo IT, l'errore di previsione singolo più affidabile è confrontare fornitori o opzioni solo sul prezzo di acquisizione, quando le operazioni e la manutenzione tipicamente contano tra metà e quattro-quinti della bolletta a vita intera.

## Perché è importante

Il Green Book del HM Treasury richiede che il caso finanziario in qualsiasi caso aziendale Five Case Model copra i costi a vita intera, non solo la spesa di capitale — eppure il National Audit Office ha ripetutamente trovato dipartimenti che approvano investimenti IT contro una previsione di costo operativo incompleta od ottimistica, solo per scoprire il vero costo operativo una volta che il sistema è in produzione e la linea di budget di capitale è chiusa. Il Technology Code of Practice del Government Digital Service e del Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) spinge i dipartimenti verso l'hosting cloud e commodity in parte perché rende visibile e comparabile il costo continuo, piuttosto che sepolto dentro una singola cifra di appalto di capitale che sembra attraentemente bassa all'approvazione e costosamente sbagliata tre anni dopo.

## Il calcolo

```
TCO = Costo di acquisizione + Σ(t=1..N) Costo operativo
      annuale_t / (1+r)^t − valore residuo (scontato)

r = tasso di sconto sociale standard del Green Book del HM
    Treasury, 3,5%/anno (programma a tasso decrescente per
    orizzonti oltre 30 anni)

Componenti del costo operativo: hosting/licenze, supporto e
manutenzione, patching di sicurezza e conformità, tempo del
personale, aggiornamento/migrazione pianificati
```

Vedi il [tasso di sconto sociale](../tasso-di-sconto-sociale/) per perché il fattore di sconto conta su una tipica vita di sistema di 5-10 anni, e [costruire vs comprare nel governo](../costruire-vs-comprare-nel-governo/) per come il TCO alimenta una decisione costruisci/compra.

## Esempio pratico

Un dipartimento confronta due sistemi di gestione dei casi su un orizzonte di 5 anni al tasso di sconto del 3,5% del Green Book.

```
Sistema A: capex £3.500.000, opex £250.000/anno
Sistema B: capex £1.800.000 (sembra più economico), opex
           £650.000/anno (onere di supporto fornitore e
           integrazione più pesante)

Confronto ingenuo sul solo capex: B vince, £1,8M < £3,5M.

Somma del fattore di sconto, 5 anni al 3,5%:
0,966+0,934+0,902+0,871+0,842 ≈ 4,515

TCO_A = 3.500.000 + 250.000 × 4,515 = 3.500.000 + 1.128.750
      = £4.628.750
TCO_B = 1.800.000 + 650.000 × 4,515 = 1.800.000 + 2.934.750
      = £4.734.750
```

Il TCO inverte la decisione ingenua: il Sistema B è marginalmente più costoso su cinque anni una volta che il costo operativo è scontato e sommato, perché la sua quota opex del costo a vita intera è il 62% (2.934.750 / 4.734.750) contro il 24% del Sistema A — un'istanza concreta della scoperta "la manutenzione è la maggioranza della bolletta", nascosta interamente confrontando i prezzi di listino.

## Collegamento con lo sviluppo software

Il TCO è il numero che dovrebbe disciplinare ogni decisione di [costruire vs comprare](../costruire-vs-comprare-nel-governo/) e ogni caso di pagamento del [debito tecnico](../debito-tecnico-come-erosione-del-valore-pubblico/), perché l'interesse del debito e la manutenzione differita sono entrambi linee di costo operativo che appartengono allo stesso totale scontato, indipendentemente da se qualcuno le abbia mai tracciate. Gli ingegneri che propongono una scelta di piattaforma o fornitore dovrebbero presentare la tabella TCO completa, non il prezzo di appalto, perché il prezzo di appalto è precisamente il numero su cui il caso finanziario del Green Book è stato progettato per impedire ai dipartimenti di basarsi da solo. Il TCO è anche il denominatore onesto per i giudizi di [value for money](../valore-per-il-denaro/) — il VFM confronta beneficio a costo, e una linea di costo sottocontata gonfia ogni rapporto VFM nel caso aziendale.

## Insidie

- **Confronto solo-capex**: l'errore di appalto singolo più comune — confrontare i prezzi di listino dei fornitori senza una previsione di costo operativo abbinata per ogni opzione.
- **Escludere i costi di uscita e migrazione**: l'estrazione dei dati a fine contratto, il re-platforming, e le penali di lock-in del fornitore sono linee TCO reali che raramente appaiono nel caso aziendale originale.
- **Escludere il costo di sicurezza e conformità**: la cadenza di patching, il rinnovo dell'accreditamento, e il costo di audit scalano con l'età e la complessità del sistema — vedi [valore della cybersicurezza del settore pubblico](../valore-della-cybersicurezza-del-settore-pubblico/) — e vengono abitualmente lasciati fuori dalla previsione opex.
- **Confronto non scontato attraverso opzioni con profili di costo diversi**: confrontare un'opzione pesante-di-capex con una pesante-di-opex senza scontare favorisce sistematicamente qualunque opzione capiti di differire più costo negli anni successivi.

## Fonti

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
