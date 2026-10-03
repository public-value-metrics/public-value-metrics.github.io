# Costo per risultato

Il costo per risultato è la spesa totale del programma divisa per il numero di persone che raggiungono un cambiamento definito e significativo nelle loro circostanze — non il numero di quelle che hanno semplicemente ricevuto un servizio. È la metrica di efficienza più acuta che un finanziatore o un team di erogazione può usare, perché costringe una domanda preliminare che la maggior parte delle organizzazioni benefiche evita: cosa, precisamente, conta come successo?

## Perché è importante

Un banco alimentare può riportare due numeri molto diversi dai conti dello stesso anno. Il costo per pacco alimentare distribuito potrebbe essere £15. Il costo per famiglia che poi raggiunge la sicurezza alimentare — non più bisognosa di aiuto alimentare di emergenza, verificato a un punto di follow-up — potrebbe essere £340. Entrambi sono veri. Solo uno dice a un finanziatore se il denaro sta funzionando. Il divario tra i due è il divario tra un output e un risultato: un pacco consegnato è un output; una famiglia non più in crisi è un risultato. Vedi [risultati contro output](../outcomes-vs-outputs/).

Il terzo settore britannico ha passato due decenni costruendo infrastruttura per forzare questa distinzione. Il "four pillar approach" di New Philanthropy Capital all'efficacia delle organizzazioni benefiche chiede esplicitamente alle organizzazioni di dichiarare i loro risultati prima dei loro output, e Inspiring Impact — il collaborativo di misurazione dell'impatto supportato dai finanziatori britannici — pubblica una Outcomes Matrix che molte domande di sovvenzione ora richiedono alle organizzazioni benefiche di completare. Il programma di ricerca annuale "State of Hunger" del Trussell Trust, eseguito con la Heriot-Watt University, esiste precisamente perché i conteggi dei pacchi da soli non dicono nulla su se le persone scappino dall'insicurezza alimentare.

Il costo per risultato significa qualcosa solo una volta che hai fissato il controfattuale: un risultato raggiunto "comunque" non è un risultato che il programma ha comprato. Vedi [analisi controfattuale](../counterfactual-analysis/) e [spiazzamento e attribuzione](../displacement-and-attribution/).

## Il calcolo

```
Costo per risultato = Costo totale del programma / Numero di
                      beneficiari che raggiungono il risultato
                      definito

dove:
  Costo totale del programma = costo di erogazione diretto +
                               quota equa di overhead
  Risultato definito          = un cambiamento di stato
                                pre-specificato e misurabile
                                (es. "sicuro alimentarmente a
                                un follow-up di 6 mesi," non
                                "ha ricevuto un pacco
                                alimentare")
```

Confronta contro i [database dei costi unitari](../unit-cost-databases/) (es. benchmark di costo unitario specifici del settore) per giudicare se un dato costo per risultato sia buono, medio, o scarso rispetto a interventi comparabili.

## Esempio pratico

**Banco alimentare, un anno**:

- Costo totale del programma: £450.000
- Pacchi distribuiti: 30.000
- Costo per pacco (una metrica di output): £450.000 / 30.000 = **£15**

L'organizzazione benefica gestisce anche un'indagine di follow-up a sei mesi con un campione di famiglie, trovando che il 35% delle famiglie che hanno ricevuto tre o più pacchi riportano di non aver più bisogno di aiuto alimentare di emergenza e segnano sopra la soglia di sicurezza alimentare su un modulo di indagine standard sulla sicurezza alimentare. Di 1.800 famiglie che ricevono tre o più pacchi quell'anno, 630 raggiungono quel risultato.

```
Costo per risultato = £450.000 / 630 = £714 per famiglia che
                      raggiunge la sicurezza alimentare
```

Quella cifra di £714 è quella che un finanziatore che confronta questa organizzazione benefica con un progetto pilota di trasferimento in contanti o un servizio di consulenza sul debito dovrebbe usare — non £15. Se un programma comparabile di trasferimento in contanti nella stessa regione raggiunge la sicurezza alimentare a £500 per famiglia, il banco alimentare non è ovviamente la via più efficiente allo stesso risultato, anche se il suo costo per pacco sembra economico.

## Collegamento con lo sviluppo software

La maggior parte dei sistemi di gestione dei casi sono costruiti per registrare output, perché gli output sono ciò che accade dentro la transazione (un pacco viene consegnato, un modulo viene sottomesso). I risultati di solito accadono più tardi, spesso fuori dalla finestra di catturazione normale del sistema, e richiedono una decisione di design deliberata: costruisci un meccanismo di follow-up (un trigger di indagine, un workflow di ri-contatto, un esercizio di collegamento dati) come una funzionalità di prima classe, non un ripensamento avvitato per un report annuale. Gli ingegneri che costruiscono piattaforme di gestione sovvenzioni o gestione casi per il settore dovrebbero trattare "qual è l'evento di risultato, e come lo osserviamo" come una domanda di requisiti posta prima che il modello di dati sia fissato — è molto più difficile retrofittare un campo di risultato che un contatore di output. Vedi [risultati contro output](../outcomes-vs-outputs/) e [modello logico](../logic-model/) per come strutturare quella conversazione di requisiti, e [costo per beneficiario](../cost-per-beneficiary/) per la metrica più rapida e grezza a cui i team ricorrono quando il tracciamento dei risultati non è ancora costruito.

## Insidie

- **Riportare output vestiti da risultati.** "Persone raggiunte" non è "persone aiutate." Se la metrica può essere prodotta da un log di sistema senza contatto di follow-up, è quasi certamente un output.
- **Manipolazione del denominatore.** Restringere la popolazione del risultato a "quelli che hanno completato il programma" silenziosamente elimina le persone che hanno abbandonato — spesso i casi più difficili — e gonfia il tasso apparente. Dichiara il denominatore come tutti quelli che hanno iniziato, non tutti quelli che hanno finito.
- **Nessun controfattuale.** Contare chiunque abbia raggiunto il risultato, incluso chi lo avrebbe raggiunto comunque, sopravvaluta ciò che il programma ha comprato. Vedi [analisi controfattuale](../counterfactual-analysis/).
- **Confrontare attraverso definizioni di risultato incompatibili.** "Sicuro alimentarmente" misurato da un modulo di indagine validato non è comparabile a "sicuro alimentarmente" autoriportato in un modulo di satisfazione; una classifica di costo-per-risultato è onesta solo quando le definizioni di risultato corrispondono.

## Fonti

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
