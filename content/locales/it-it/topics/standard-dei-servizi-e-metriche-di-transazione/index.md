# Standard dei servizi e metriche di transazione

Il GOV.UK Service Standard è la checklist a 14 punti del governo britannico per costruire e gestire un servizio digitale pubblico, e viene abbinato a un piccolo set obbligatorio di metriche di transazione quantitative — costo per transazione, tasso di completamento, adozione digitale, e satisfazione dell'utente — che i team devono pubblicare per ogni servizio del governo centrale in produzione. Insieme lo standard e le metriche sono la specializzazione operativa, quotidiana, dei quadri più ampi del valore pubblico e dei KPI in questo repository, mirata esattamente ai team di erogazione software.

## Perché è importante

Il Service Standard, mantenuto nel manuale di servizio GOV.UK, richiede che ogni valutazione puntuale (alpha, beta, live) di un servizio digitale governativo dimostri — tra i suoi 14 punti — che il team comprende i bisogni degli utenti, lavora in un team multidisciplinare, itera e migliora frequentemente, e *valuta strumenti, sistemi, e modi di lavorare*. Storicamente questo si inseriva insieme a una Performance Platform pubblica dove ogni servizio in produzione pubblicava i suoi dati di transazione apertamente; quella piattaforma è stata da allora ritirata, ma l'obbligo sottostante di misurare e pubblicare queste quattro metriche principali persiste tramite la guida "measuring success" del manuale di servizio. Il motivo per cui questo differisce da un dashboard KPI software generico è che queste metriche sono state esplicitamente progettate come un singolo modello economico collegato, non quattro punteggi indipendenti: l'intero caso di risparmio per il governo digitale — il Digital Efficiency Report del Government Digital Service ha trovato le transazioni digitali circa 20 volte più economiche del telefono e circa 50 volte più economiche del faccia-a-faccia per servizi comparabili del governo locale — si materializza solo se il tasso di completamento rimane alto e l'adozione digitale genuinamente sale, piuttosto che semplicemente aggiungere un canale economico insieme a uno costoso invariato.

## Il calcolo

```
Costo per transazione = costo operativo totale del servizio /
                        numero di transazioni completate
Tasso di completamento = transazioni completate /
                         transazioni iniziate × 100
Adozione digitale      = transazioni del canale digitale /
                         transazioni di tutti i canali × 100
Satisfazione utente    = % satisfatti + molto satisfatti,
                         indagine a 5 punti in-servizio

Risparmio da spostamento di canale = volume di transazioni ×
                        spostamento di adozione × (costo per
                        transazione sul vecchio canale − costo
                        per transazione digitalmente)

Costo della domanda di fallimento = (1 − tasso di
                        completamento) × transazioni tentate
                        digitalmente × costo del canale di
                        fallback che quegli utenti poi usano
                        invece
```

## Esempio pratico

**Servizio illustrativo di rinnovo licenza del governo centrale**, 2 milioni di transazioni/anno, attualmente 65% telefono (£3,00/transazione) e 35% digitale (£0,30/transazione), tasso di completamento 80%. Una riprogettazione contro il Service Standard a 14 punti solleva l'adozione digitale al 60% e il completamento al 92%:

```
Risparmio da spostamento di adozione =
  2.000.000 × 0,25 × (3,00 − 0,30) = £1.350.000/anno

Costo della domanda di fallimento, prima:
  2.000.000 × 0,35 × (1 − 0,80) × £3,00 = £420.000/anno
  (gli abbandonanti ricadono sul telefono)

Costo della domanda di fallimento, dopo:
  2.000.000 × 0,60 × (1 − 0,92) × £3,00 = £288.000/anno

Risparmio netto della domanda di fallimento =
  £420.000 − £288.000 = £132.000/anno

Risparmio annuale totale ≈ £1.350.000 + £132.000 =
  £1.482.000/anno
```

L'aritmetica rende esplicito perché il tasso di completamento non è una metrica secondaria: senza il miglioramento dall'80% al 92%, il risparmio da spostamento di adozione verrebbe parzialmente recuperato dalla domanda di fallimento che reindirizza gli utenti digitali frustrati direttamente di nuovo al costoso canale telefonico.

## Collegamento con lo sviluppo software

Queste quattro metriche sono un esempio funzionante di un dashboard costo-conseguenza: una metrica di costo tenuta separata da tre metriche di risultato/qualità, deliberatamente mai collassate in un singolo punteggio — la stessa disciplina argomentata nei [KPI del settore pubblico](../kpi-del-settore-pubblico/). Per gli ingegneri questo si scompone in lavoro concreto e possedibile: il tasso di completamento è un problema di strumentazione del funnel, e ogni punto di abbandono nel percorso è, in principio, localizzabile e risolvibile; il costo per transazione richiede una contabilità dei costi unitari genuina che includa i costi assistiti da personale e del canale di carta, non solo la spesa di hosting cloud (vedi [costo per transazione](../costo-per-transazione/) e [costo totale di proprietà nel governo IT](../costo-totale-di-proprietà-nel-governo-it/)); e l'adozione digitale è una metrica di equità vestita da costume di efficienza — i cittadini che non possono o non vogliono spostare canale sono disproporzionatamente anziani, disabili, o digitalmente esclusi, quindi la chiusura aggressiva dei canali converte un "risparmio" in un danno di accesso (vedi [inclusione digitale](../inclusione-digitale/) e [risparmi da spostamento di canale](../risparmi-da-spostamento-di-canale/)). Lo standard a 14 punti stesso è la specifica di processo dietro questi numeri — vedi [standard dei servizi digitali](../standard-dei-servizi-digitali/) per lo standard per intero, e [metriche di satisfazione del cittadino](../metriche-di-satisfazione-del-cittadino/) per come la cifra di satisfazione qui si relaziona alla misurazione di fiducia più ampia.

## Insidie

- **Adozione guadagnata chiudendo il canale alternativo**: chiudere una linea telefonica solleva la percentuale di adozione digitale aritmeticamente mentre riversa la domanda di fallimento su qualunque canale rimanga (spesso una via assistita-digitale o faccia-a-faccia più costosa); misura sempre il costo del sistema totale, non solo il rapporto.
- **Misurare il tasso di completamento dal secondo passo del funnel**: iniziare il conteggio "iniziati" dopo il primo punto di abbandono genuino lusinga il tasso di completamento e nasconde la perdita più grande risolvibile.
- **Costo per transazione che esclude il supporto assistito-digitale**: un costo unitario solo-digitale che ignora il tempo del personale spesso ad aiutare gli utenti che non possono auto-servirsi sottostima il vero costo del canale.
- **Pubblicare metriche senza una definizione condivisa attraverso i servizi**: "transazione" e "completata" significano cose diverse attraverso diversi team di servizio a meno che le definizioni non siano standardizzate e versionate, rendendo il confronto tra servizi non affidabile.

## Fonti

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
