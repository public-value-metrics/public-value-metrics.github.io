# Equità intergenerazionale e sconto di sostenibilità

Scontare i costi e beneficî futuri a valore attuale è pratica standard nella valutazione pubblica — vedi il [tasso di sconto sociale](../tasso-di-sconto-sociale/) — ma qualsiasi tasso di sconto positivo, composto su decenni o secoli, restringe il futuro lontano verso zero in termini odierni. Per decisioni con conseguenze un secolo o più avanti — cambiamento climatico, scorie nucleari, perdita di biodiversità, sostenibilità delle pensioni — quel fatto matematico diventa uno etico: lo sconto standard può far sembrare un danno catastrofico alle generazioni future, in termini di valore attuale, appena degno di essere evitato.

## Perché è importante

L'equazione di Ramsey, derivata da Frank Ramsey nel 1928, decompone il tasso di sconto in due componenti: la pura preferenza temporale (δ, quanto semplicemente preferiamo ora a dopo, indipendentemente dalla ricchezza) e l'effetto di crescita della ricchezza (η×g, quanto scontiamo perché le generazioni future sono previste essere più ricche, così una sterlina extra conta meno per loro). Il tasso di sconto di lungo termine standard del Green Book britannico è costruito su questa equazione e segue un programma *decrescente* piuttosto che un tasso fisso — un design radicato nel lavoro di Martin Weitzman sullo "sconto gamma," che mostra che quando il tasso di sconto futuro stesso è incerto, il tasso equivalente-certo che dovresti applicare matematicamente decresce nel tempo, perché gli scenari a tasso basso arrivano a dominare quanto più lontano guardi. Lo Stern Review on the Economics of Climate Change (2006), guidato da Sir Nicholas Stern, ha portato il dibattito etico più avanti: Stern ha argomentato che la pura preferenza temporale dovrebbe essere fissata vicino a zero (ha usato δ ≈ 0,1%, riflettendo solo la piccola probabilità di catastrofe che pone fine alla civiltà, non una genuina preferenza per il presente sul futuro), producendo un tasso di sconto effettivo molto più basso della pratica convenzionale del Green Book e, corrispondentemente, un caso odierno molto più grande per l'azione climatica. I critici (notevolmente William Nordhaus) hanno argomentato che il tasso quasi-zero di Stern era defendibile eticamente ma inconsistente con il comportamento di risparmio e investimento effettivamente osservato. Il disaccordo non è una nota a piè di pagina tecnica — è il singolo motivo più grande per cui due economisti ugualmente rigorosi possono raggiungere conclusioni selvaggiamente diverse su quanto la generazione presente dovrebbe sacrificare per il futuro, ed è il motivo per cui il software che supporta la valutazione di investimenti pubblici a orizzonte lungo deve esporre le sue assunzioni di sconto piuttosto che nasconderle in un predefinito di foglio di calcolo.

## Il calcolo

```
Equazione di Ramsey:   r = δ + η × g

  r = tasso di sconto sociale
  δ = pura preferenza temporale (tasso di impazienza,
      indipendente dalla ricchezza)
  η = elasticità dell'utilità marginale del consumo (valore
      decrescente del consumo extra mentre le persone
      diventano più ricche)
  g = tasso di crescita atteso del consumo pro capite

Programma decrescente di lungo termine del Green Book
(approssimativo, fasce pubblicate attuali):
  Anni 0-30:    3,5%
  Anni 31-75:   3,0%
  Anni 76-125:  2,5%
  Anni 126-200: 2,0%
  Anni 201-300: 1,5%
  Anni 301+:    1,0%

Parametri dello Stern Review: δ ≈ 0,1%, η = 1, g ≈ 1,3% →
                              r ≈ 1,4%
```

## Esempio pratico

**Valore oggi di £1 di danno evitato in 100 anni**, sotto tre regimi di sconto:

```
Tasso fisso di breve termine del Green Book (3,5%, tenuto
costante per 100 anni):
  VA = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ £0,032   (3,2 pence)

Programma decrescente del Green Book (3,5% per anni 1-30,
3,0% per anni 31-75, 2,5% per anni 76-100):
  fattore(1-30)  = 1,035^30  ≈ 2,807
  fattore(31-75) = 1,03^45   ≈ 3,782
  fattore(76-100)= 1,025^25  ≈ 1,854
  fattore totale ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  VA = 1 / 19,68 ≈ £0,051   (5,1 pence)

Pura preferenza temporale quasi-zero in stile Stern (r ≈
1,4% fisso):
  VA = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ £0,250   (25,0 pence)
```

Lo stesso £1 di danno evitato un secolo da ora vale 3,2p, 5,1p, o 25p oggi dipendendo puramente da quale convenzione di sconto viene usata — una gamma quasi otto volte più ampia che determina se un progetto di mitigazione climatica con alto costo iniziale e ritorno un secolo dopo supera affatto una barra di VAN positivo. Questo è il meccanismo dietro l'avvertimento centrale del capitolo: a qualsiasi tasso fisso significativamente positivo, il danno futuro sufficientemente distante viene aritmeticamente cancellato dalla valutazione, indipendentemente dalla sua vera severità.

## Collegamento con lo sviluppo software

- Qualsiasi strumento di valutazione o caso aziendale a orizzonte lungo (infrastruttura, adattamento climatico, modellazione delle pensioni) dovrebbe implementare il programma *decrescente* del Green Book, non un singolo tasso fisso — un predefinito a tasso fisso silenziosamente incorpora un bias anti-futuro molto più forte di quanto specifichi la guida attuale del governo britannico.
- Il tasso di sconto e l'orizzonte dovrebbero sempre essere esposti come parametri visibili e verificabili nel software di valutazione, con la sensibilità del calcolo a essi mostrata esplicitamente (come nell'esempio pratico sopra) — nascondere il tasso in un file di configurazione invita esattamente la "scelta etica nascosta" contro cui avvisa il dibattito Stern-Nordhaus; questo si abbina al punto di trasparenza fatto nella [contabilità del capitale naturale](../contabilità-del-capitale-naturale/) e sottostà all'argomento del [tasso di sconto sociale](../tasso-di-sconto-sociale/) in generale.
- Dove i beneficî di un programma sono esplicitamente intergenerazionali (difesa dalle inondazioni, ripristino del capitale naturale, infrastruttura digitale di lungo termine), un'[analisi costo-beneficio sociale](../analisi-costo-beneficio-sociale/) dovrebbe riportare risultati sotto almeno due assunzioni di sconto (standard Green Book e un caso di sensibilità a tasso basso) piuttosto che una singola stima puntuale, così che i decisori vedano quanto la sola scelta del tasso di sconto muova la risposta.

## Insidie

- **Presentare un singolo VAN scontato senza una gamma di sensibilità** — dato quanto il solo tasso di sconto cambi la risposta per progetti a orizzonte lungo, un VAN a tasso singolo sopravvaluta materialmente la precisione; riporta sempre una gamma che copra almeno lo standard Green Book e uno scenario a tasso basso.
- **Applicare il tasso fisso di breve termine (3,5%) a una valutazione multi-secolare** — la guida stessa del Green Book specifica il programma decrescente precisamente perché il tasso fisso è stato giudicato inappropriato oltre circa 30 anni; usarlo comunque sottostima i costi di lungo termine.
- **Trattare δ (pura preferenza temporale) come un parametro puramente tecnico** — il valore quasi-zero di Stern e il valore implicito più alto del Green Book sono entrambi defendibili solo come posizioni etiche su quanto peso il presente deve al futuro, non numeri empiricamente "corretti" o "scorretti"; il software dovrebbe rendere visibile l'assunzione piuttosto che presentare una cifra come oggettivamente giusta.

## Fonti

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
