# Alternative al PIL

Le alternative al PIL sono metriche costruite per catturare ciò che il Prodotto Interno Bruto strutturalmente ignora: lavoro di cura non pagato, esaurimento ambientale, distribuzione del reddito, e se la crescita effettivamente migliori le vite. Le più conosciute sono il Genuine Progress Indicator (GPI) e l'Indice di Felicità Interna Bruta (GNH) del Bhutan; il caso per prenderle sul serio è stato fatto più influentemente dalla Commissione Stiglitz-Sen-Fitoussi del 2009. Per gli ingegneri che costruiscono dashboard governativi o sistemi KPI, "quale numero conta come progresso" è una decisione di design con conseguenze reali per cosa viene finanziato.

## Perché è importante

Simon Kuznets, che ha costruito i conti nazionali statunitensi negli anni '30, ha avvertito il Congresso nel 1934 che "il benessere di una nazione può a malapena essere inferito da una misurazione del reddito nazionale" — un avvertimento che la cifra ha superato quasi immediatamente. Il PIL conta la pulizia di una fuoriuscita di petrolio come crescita e la cura infantile non pagata di un genitore come niente; non distingue la spesa che costruisce benessere durevole dalla spesa che semplicemente compensa un danno già fatto. La Commissione Stiglitz-Sen-Fitoussi, convocata dal Presidente francese Nicolas Sarkozy e presieduta da Joseph Stiglitz, Amartya Sen, e Jean-Paul Fitoussi, ha riportato nel 2009 che i sistemi statistici dovrebbero spostare l'enfasi "dalla misurazione della produzione economica alla misurazione del benessere delle persone," e che la sostenibilità dovrebbe essere tracciata separatamente dal benessere attuale piuttosto che fusa in un numero. Le alternative al PIL operazionalizzano quella raccomandazione. Il GPI, sviluppato dal think tank Redefining Progress negli anni '90 e costruendo sulla Measure of Economic Welfare del 1972 di William Nordhaus e James Tobin, inizia dal consumo personale (come fa il PIL) e poi aggiunge beneficî non di mercato che il PIL omette (lavoro domestico, volontariato) mentre sottrae costi defensivi e di esaurimento (crimine, inquinamento, spostamenti, prelievo di risorse) che il PIL erroneamente conta come positivi. L'Indice GNH del Bhutan, amministrato dal GNH Centre Bhutan (<https://www.gnhcentre.bt/>), va ancora oltre, sostituendo la crescita come obiettivo costituzionale dichiarato del paese: aggrega 33 indicatori attraverso 9 domini — benessere psicologico, salute, istruzione, uso del tempo, diversità culturale, governance, vitalità comunitaria, diversità ecologica, e standard di vita — in un singolo punteggio basato sulla sufficienza usato direttamente per filtrare le proposte di politica governativa.

## Il calcolo

```
GPI = spesa di consumo personale
      + beneficî non di mercato (lavoro domestico,
        volontariato, istruzione superiore)
      − costi defensivi e sociali (crimine, inquinamento,
        spostamenti, rottura familiare)
      − esaurimento del capitale naturale e sociale
        (prelievo di risorse, perdita di terreno agricolo)

Punteggio di sufficienza GNH, per dominio:
  una persona è "sufficiente" in un dominio una volta che
  supera la sua soglia su ogni indicatore
  Indice di Felicità = (% di popolazione sufficiente in ≥ 6
                        di 9 domini) + (carenza media
                        pesata della minoranza "non-ancora-
                        felice")
```

## Esempio pratico

**Regione, GPI**: il consumo personale è $50 miliardi. Aggiungi il valore stimato del lavoro domestico e volontario di $12 miliardi (tassi salariali di costo di sostituzione — vedi [valore del tempo del volontario](../volunteer-time-value/)). Sottrai costi annuali stimati di congestione dei pendolari ($3 miliardi), crimine ($4 miliardi), ed esaurimento di risorse di lungo periodo ($6 miliardi):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($mld)
```

Se il PIL è cresciuto da $50 miliardi a $55 miliardi quell'anno (+10%), ma i costi defensivi e di esaurimento sono cresciuti più velocemente del consumo, il GPI può scendere anche mentre il PIL sale — l'"ipotesi della soglia" che i ricercatori GPI citano per le economie ad alto reddito da circa gli anni '70, quando la crescita continuava a salire mentre il GPI si stabilizzava.

**Cittadino, GNH**: un intervistato supera la soglia di sufficienza in 7 di 9 domini (salute, istruzione, standard di vita, vitalità comunitaria, diversità culturale, diversità ecologica, uso del tempo) ma manca su benessere psicologico e governance. Poiché 7 ≥ 6, viene contato "felice" nel conteggio; l'indice separatamente traccia la profondità delle sue due carenze così che un passaggio marginale non sia indistinguibile da uno comodo.

## Collegamento con lo sviluppo software

- Un dashboard KPI modellato solo sul throughput o la spesa (il pattern PIL) sistematicamente mancherà il danno fatto nel generare quel throughput — il volume di ticket di supporto trattato come "engagement" piuttosto che "disagio dell'utente" è la versione dell'erogazione software di contare una fuoriuscita di petrolio come crescita.
- La contabilità in stile GPI è un pattern di audit utile per qualsiasi suite di [KPI del settore pubblico](../public-sector-kpis/): per ogni metrica di output principale, chiedi quale costo defensivo stia silenziosamente sostenendo (rilavoro, risposta agli incidenti, burnout) e nettizzalo, nel modo in cui il GPI nettizza la spesa defensiva dal consumo.
- Il metodo di sufficienza di dominio del GNH — superato/fallito per dimensione, poi aggregato — è strutturalmente la stessa tecnica dell'[analisi decisionale multi-criterio](../multi-criteria-decision-analysis/) e vale la pena riutilizzarlo ovunque un singolo punteggio scalare nasconderebbe una dimensione di fallimento critica.

## Insidie

- **Trattare il GPI come un conto nazionale preciso** — a differenza del PIL, il GPI non ha una singola metodologia standardizzata; studi diversi pesano i costi dei pendolari, il tempo del volontario, o l'esaurimento delle risorse diversamente, quindi i confronti GPI tra studi sono molto meno affidabili dei confronti PIL tra paesi.
- **Importare il GNH interamente in una cultura politica diversa** — i suoi pesi di dominio e soglie di sufficienza sono stati fissati tramite consultazione bhutanese; copiare il numero senza il processo di consultazione sottostante produce una metrica vuota di cui nessuno si fida.
- **Assumere che un'alternativa al PIL sostituisca la valutazione costo-beneficio** — questi sono indicatori diagnostici, a livello dell'intera economia, non strumenti decisionali per un singolo programma; usa invece l'[analisi costo-beneficio sociale](../social-cost-benefit-analysis/) per questo.

## Fonti

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
