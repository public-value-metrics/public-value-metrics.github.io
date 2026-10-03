# Costo per beneficiario

Il costo per beneficiario è il costo totale del programma diviso per il numero di persone uniche che hanno ricevuto un servizio — chiunque sia stato toccato, indipendentemente da se le sue circostanze siano effettivamente cambiate. È il numero di efficienza più rapido che un'organizzazione possa produrre, perché "chi abbiamo servito" è quasi sempre già nel sistema di gestione dei casi, mentre "chi è stato aiutato" di solito non lo è.

## Perché è importante

I finanziatori chiedono costantemente il costo per beneficiario, e per ragioni defendibili: è disponibile immediatamente, è comparabile attraverso un portfolio di programmi molto diversi, ed è onesto sulla portata in un modo in cui le rivendicazioni di risultato — che richiedono più tempo per essere verificate e sono più facili da sopravvalutare — non lo sono. Il Charities SORP (Statement of Recommended Practice) britannico, che governa come le organizzazioni benefiche riportano sotto FRS 102, richiede che i report annuali dei fiduciari descrivano i risultati contro gli obiettivi, ma la maggior parte dei conti di gestione delle organizzazioni benefiche più piccole ancora impostano come predefiniti i costi unitari basati sulla portata perché sono economici da produrre e favorevoli all'audit.

Il pericolo è trattare il costo per beneficiario come se rispondesse alla domanda che non può rispondere: se il denaro ha funzionato. Vedi [costo per risultato](../cost-per-outcome/) per la metrica che effettivamente risponde a quello, e [risultati contro output](../outcomes-vs-outputs/) per la distinzione sottostante. Il costo per beneficiario è una metrica legittima di triage e portata — dice a un finanziatore quanto lontano si estende il denaro — ma un costo per beneficiario basso può significare sia genuina efficienza sia un servizio così sottile che non cambia nulla.

## Il calcolo

```
Costo per beneficiario = Costo totale del programma / Numero
                         di persone uniche servite

Confronto:
Costo per risultato     = Costo totale del programma /
                          Numero di persone che raggiungono
                          il risultato definito

Il costo per beneficiario è sempre ≤ costo per risultato,
perché la popolazione del risultato è un sottoinsieme (spesso
piccolo) della popolazione dei beneficiari.
```

## Esempio pratico

**Banco alimentare, stesso anno dell'esempio del costo per risultato**:

- Costo totale del programma: £450.000
- Famiglie uniche servite (tre o più pacchi): 1.800

```
Costo per beneficiario = £450.000 / 1.800 = £250 per famiglia
                         servita
```

Confronta le due metriche fianco a fianco:

| Metrica | Denominatore | Risultato |
|---|---|---|
| Costo per beneficiario | 1.800 famiglie servite | £250 |
| Costo per risultato | 630 famiglie che raggiungono la sicurezza alimentare | £714 |

Un finanziatore che vede solo £250 potrebbe concludere che questa è un'organizzazione benefica altamente efficiente. Un finanziatore che vede entrambi i numeri può fare la domanda più utile: il divario tra portata (1.800) e risultato (630) è un divario di raccolta dati, un divario di design, o un riflesso onesto di quanto sia difficile raggiungere la sicurezza alimentare con il solo aiuto alimentare?

**Organizzazione benefica di formazione professionale, illustrativo**: costo per beneficiario (iscritto) = £2.000; costo per risultato (occupazione sostenuta a 6 mesi) = £11.000, perché solo il 18% degli iscritti completa il programma e trova lavoro sostenuto. I due numeri che divergono per un fattore di cinque sono comuni ovunque i tassi di completamento o durabilità siano bassi — un'organizzazione benefica di formazione e un banco alimentare sono strutturalmente identici qui.

## Collegamento con lo sviluppo software

Il costo per beneficiario è la metrica predefinita nel software del settore non profit perché è la metrica che emerge da un record di beneficiario senza ulteriore lavoro: crea un caso, registra un servizio, conta le righe. Costruire un sistema che supporta anche il costo per risultato significa aggiungere deliberatamente una seconda entità di prima classe — un evento di risultato, datato e definito indipendentemente dall'erogazione del servizio — e resistere alla tentazione di lasciare che "caso chiuso" sostituisca "risultato raggiunto." Quando si definisce l'ambito di una piattaforma di gestione sovvenzioni o CRM, chiedi quale delle due metriche ogni dashboard stia effettivamente mostrando, ed etichettala di conseguenza; confonderle in un singolo riquadro "impatto" è una delle cause più comuni a livello software delle insidie sotto. Vedi [database dei costi unitari](../unit-cost-databases/) per il benchmarking di entrambe le metriche una volta correttamente etichettate.

## Insidie

- **Presentare il costo per beneficiario come impatto.** Misura la portata, non il cambiamento. Etichetta i dashboard e i report "costo per persona servita," non "costo per persona aiutata."
- **Conteggio doppio attraverso i programmi.** Una persona che riceve sia pacchi alimentari sia consulenza sul debito dalla stessa organizzazione benefica è un beneficiario, non due, se il denominatore intende descrivere la portata unica; decidi e documenta quale convenzione viene usata.
- **Trattare un numero più basso come sempre migliore.** Un club pranzo drop-in batterà sempre un servizio di gestione dei casi intensivo sul costo per beneficiario, perché costa meno toccare qualcuno leggermente. Questo non dice nulla su quale produca cambiamento più durevole per sterlina.
- **Scambiare silenziosamente i denominatori tra i report.** Una cifra di costo per beneficiario citata in un report annuale contro "iscritti" e nel successivo contro "completati" non è comparabile anno su anno; dichiara il denominatore ogni volta.

## Fonti

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
