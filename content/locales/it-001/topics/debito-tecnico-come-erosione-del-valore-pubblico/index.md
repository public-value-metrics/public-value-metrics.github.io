# Debito tecnico come erosione del valore pubblico

Il debito tecnico è la metafora del 1992 di Ward Cunningham per il costo futuro implicito di decisioni di codifica passate opportunistiche: un **capitale** (il lavoro di rimedio dovuto) e un **interesse** (il freno continuo che esercita sull'erogazione). In un patrimonio IT governativo legacy, quell'interesse viene pagato direttamente dal valore pubblico — erogazione più lenta dei cambiamenti statutari, tassi di fallimento più alti sui servizi rivolti ai cittadini, e un pool in restringimento di persone che possono toccare il sistema in sicurezza affatto.

## Perché è importante

I sistemi mainframe legacy e dell'era COBOL attraverso i dipartimenti del governo britannico — HMRC e DWP tra i più citati — portano un rischio ben documentato e in escalation che il National Audit Office ha segnalato ripetutamente, incluso nel suo report *Digital Transformation in Government* (<https://www.nao.org.uk/>): piattaforme che invecchiano, costose da cambiare, sempre più difficili da proteggere, e dipendenti da una forza lavoro specialistica che si ritira più velocemente di quanto venga rimpiazzata. A differenza di un arretrato del settore privato, questo debito si trova direttamente tra i cittadini e i loro diritti statutari — un motore di calcolo dei benefici che non può essere cambiato in sicurezza è un vincolo di erogazione delle politiche, non solo un inconveniente ingegneristico. Il riavvio del 2013 del programma IT Universal Credit, quando il National Audit Office ha trovato che la costruzione originale non avrebbe erogato value for money e una parte sostanziale dell'asset software ha dovuto essere svalutata, è un esempio canonico di debito tecnico non prezzato che raggiunge un programma pubblico attivo e visibile ministerialmente.

## Il calcolo

```
Capitale SQALE = Σ sulle violazioni (tempo di rimedio) ×
                 tasso di costo dello sviluppatore
Rapporto di debito tecnico (TDR) = costo di rimedio / costo
                    di riscostruzione × 100
                    (classi SonarQube: A ≤5%, B ≤10%,
                    C ≤20%, D ≤50%)

Interesse (il numero che giustifica il pagamento):
  interesse/anno = Δ velocità di erogazione × valore per
                   unità di velocità
                 + Δ tasso di incidente rivolto al
                   cittadino × costo per incidente
                 + premio di competenze specialistiche ×
                   personale affetto
Caso di pagamento = VA(interesse evitato sull'orizzonte) −
                    costo di rimedio
                    (scontato al tasso di sconto sociale
                    del Green Book, vedi
                    tasso-di-sconto-sociale.md)
```

Il capitale dichiara la responsabilità; l'interesse è ciò che fa il caso di investimento a un comitato di conti pubblici.

## Esempio pratico

Un motore di elaborazione delle richieste di 250.000 righe scritto in un 4GL legacy. Usando il benchmark CAST Appmarq di circa $3,61 di capitale di debito tecnico per riga di codice (≈£2,85 alla conversione tipica):

```
Capitale ≈ 250.000 × £2,85 ≈ £712.500
TDR ≈ 16% (classe C)
```

Interesse misurato: il dipartimento mantiene tre contrattisti specialistici a un premio di tasso giornaliero del 40% sopra i tassi standard di ingegnere senior perché le competenze interne si sono erose — un extra di £180.000/anno su un team di sei persone. Il sistema causa anche quattro interruzioni di elaborazione maggiori/anno, ciascuna sospendendo le decisioni per circa 5.000 richiedenti e reindirizzandoli al contact centre a circa £25/chiamata:

```
Interesse ≈ £180.000 (premio competenze)
          + 4 × 5.000 × £25 = £500.000 (costo di contatto
            reindirizzato)
          ≈ £680.000/anno
```

Il rimedio mirato dei moduli con le performance peggiori costa £1.200.000 ed è modellato per tagliare l'interesse del 70%:

```
Riduzione dell'interesse = 0,70 × 680.000 = £476.000/anno
Ripagamento ≈ 1.200.000 / 476.000 ≈ 2,5 anni
```

Il mirino conta: rimediare codice raramente toccato non compra nulla, perché l'interesse si concentra dove la frequenza di cambiamento e la densità di debito entrambe raggiungono il picco.

## Collegamento con lo sviluppo software

L'inquadramento di valore pubblico che aggiorna un caso di debito tecnico oltre "il codice è vecchio": esprimi il patrimonio legacy come un inventario di dove la capacità di erogazione perduta si concentra, e collegalo esplicitamente al [costo totale di proprietà](../costo-totale-di-proprietà-nel-governo-it/), perché l'interesse è un costo operativo che appartiene alla linea TCO indipendentemente da se la finanza l'abbia mai richiesto. I sistemi carichi di debito portano anche un'esposizione di [cybersicurezza](../valore-della-cybersicurezza-del-settore-pubblico/) disproporzionata, perché la cadenza di patching e la densità di debito sono correlate — un sistema legacy non-patchabile è debito tecnico il cui interesse viene pagato in rischio di incidente piuttosto che in sterline. E ogni compromesso rimedio-contro-funzionalità è esso stesso una decisione di [costo del ritardo](../costo-del-ritardo-nei-programmi-pubblici/): pagare il debito ritarda il prossimo cambiamento statutario, che ha il proprio CoD che deve essere pesato contro l'interesse risparmiato.

## Insidie

- **Reporting solo-capitale**: una stima di rimedio grande e spaventosa senza una cifra di interesse non giustifica nulla a un approvatore di spesa.
- **Cifre di debito generate da strumenti prese letteralmente**: gli scanner in stile SQALE contano violazioni di regole; perdono il tipo costoso di debito — decisioni architetturali e regole di business legacy non documentate — mentre segnalano banalità.
- **"La riscrittura evita tutto"**: i programmi di sostituzione devono superare la stessa disciplina di qualsiasi altro caso aziendale — costo controfattuale, probabilità di successo, e sconto — non un'esenzione da essa, come ha dimostrato il riavvio di Universal Credit del 2013.
- **Utopismo debito-zero**: il livello di debito ottimale non è zero; il debito è leva che ha comprato erogazione precedente. La domanda viva è sempre il tasso di interesse, non se il debito esista affatto.

## Fonti

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
