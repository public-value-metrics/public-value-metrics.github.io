# Costo-efficacia dell'altruismo efficace

Il ragionamento di costo-efficacia dell'altruismo efficace (EA) classifica gli interventi caritatevoli per la quantità di bene — più spesso espressa come vite salvate, o salute guadagnata, per dollaro spesso — e indirizza il denaro verso qualunque intervento compri più bene al margine. GiveWell è il professionista più influente del campo: pubblica stime esplicite e aggiornate di costo-per-vita-salvata e costo-per-risultato per una piccola lista di "organizzazioni benefiche top," e raccomanda ai donatori di dare a qualunque attualmente abbia spazio per più finanziamento al tasso migliore.

## Perché è importante

GiveWell dichiara la costo-efficacia come il criterio principale nella sua metodologia pubblicata: cerca interventi supportati da evidenza, stima la loro costo-efficacia in un'unità comune, e classifica attraverso cause completamente non correlate — zanzariere contro la malaria, supplementazione di vitamina A, trasferimenti in contanti, pagamenti di incentivo per vaccini — su quel singolo asse. Questo è un'importazione diretta del ragionamento in stile QALY/DALY dall'economia sanitaria nella filantropia: proprio come un sistema sanitario chiede "quanti QALY per sterlina al margine," GiveWell chiede "quante vite, o anni di vita, per dollaro al margine," e tratta le cause come sostituibili una volta convertite in quell'unità comune. Vedi [analisi costo-efficacia nel governo](../analisi-costo-efficacia-nel-governo/) per il cugino del settore pubblico di questo quadro di ragionamento.

La cifra di GiveWell più citata riguarda l'Against Malaria Foundation (AMF), che distribuisce zanzariere trattate con insetticida. Nell'esempio pratico pubblicato di GiveWell (tratto da dati di finanziamento del 2020), circa $4.500 hanno finanziato zanzariere sufficienti per evitare una morte, dopo aver contabilizzato l'uso imperfetto delle zanzariere, la mortalità di baseline senza zanzariere, e l'aggiustamento per il funging — la possibilità che AMF avrebbe ricevuto parte di quel finanziamento da altri donatori comunque. GiveWell è esplicito che questa cifra si muove nel tempo e attraverso le geografie mentre la prevalenza della malaria, i costi delle zanzariere, e i vuoti di finanziamento cambiano, e che il costo per salvare una vita è generalmente previsto salire nel tempo mentre le opportunità più economiche vengono prese prima; è un'illustrazione pratica del metodo, non un prezzo fisso.

## Il calcolo

```
Costo-efficacia = Costo dell'intervento / Unità di bene
                  prodotto
                  (es. $ per vita salvata, $ per DALY evitato,
                  $ per QALY)

Catena di GiveWell per un programma di zanzariere,
illustrativamente:
  $ per zanzariera acquistata e consegnata
    ÷ quota di zanzariere effettivamente usate
    ÷ persone protette per zanzariera
    × mortalità annuale di baseline senza zanzariere
    × riduzione nella mortalità attribuibile all'uso della
      zanzariera (da evidenza RCT)
    × anni di protezione per zanzariera
    ÷ aggiustamento per funging (denaro che spiazza il
      finanziamento di altri donatori)
  = $ per vita salvata (netto degli effetti di finanziamento
    controfattuale)
```

Questa catena conta perché ogni passo è un punto dove le stime di costo-efficacia comunemente vanno storte — vedi le insidie sotto — e perché rende esplicito che "costo per vita salvata" non è mai un prezzo grezzo osservato; è una stima modellata costruita da diversi input separatamente incerti.

## Esempio pratico

Due interventi ipotetici, entrambi supportati da evidenza, che competono per lo stesso £100.000 marginale:

- **Zanzariere (stile AMF)**: circa $4.500 per vita salvata nell'esempio pratico pubblicato di GiveWell tratto da dati del 2020, cioè molto approssimativamente 20 vite salvate per £100.000 a seconda del tasso di cambio e dell'anno usato.
- **Programma di sverminazione**: nessun plausibile beneficio di mortalità, ma forte evidenza di guadagni di reddito di lungo periodo dalla sverminazione infantile; GiveWell lo valuta in termini di guadagno di reddito, non vite salvate, il che lo rende difficile da confrontare direttamente contro le zanzariere senza un'unità condivisa. GiveWell usa un quadro esplicito di "pesi morali" per convertire entrambi in un'unità interna per la classifica.

La disciplina del metodo EA è forzare questo confronto in aperto piuttosto che finanziare entrambi perché entrambi "suonano bene." Vedi [ritorno sociale sull'investimento](../ritorno-sociale-sullinvestimento/) per la funzione di forzatura equivalente usata dalle imprese sociali britanniche e dai commissari locali, che pone la stessa domanda — qual è il miglior rendimento per sterlina — in un idioma di valore monetizzato piuttosto che un idioma di vite/DALY.

## Collegamento con lo sviluppo software

Gli ingegneri che costruiscono piattaforme per donatori, strumenti di matching delle sovvenzioni, o dashboard di impatto per finanziatori allineati all'EA (Open Philanthropy, GiveWell stessa, piattaforme di donazione efficace come Giving What We Can) devono rappresentare le stime di costo-efficacia come intervalli con assunzioni dichiarate, non numeri singoli — il modello sottostante ha diversi input incerti moltiplicativi, e far collassare questo a una singola cifra su un dashboard misrappresenta la confidenza che GiveWell stessa dichiara. Versiona ogni stima per data di pubblicazione; GiveWell rivede i suoi numeri, talvolta sostanzialmente, mentre arriva nuova evidenza RCT o dati sul vuoto di finanziamento, e una piattaforma che memorizza una vecchia cifra silenziosamente diventa sbagliata.

## Insidie

- **Trattare una stima di costo-efficacia come un prezzo fisso.** È un output di modello con diversi input incerti moltiplicativi (tassi di uso, mortalità di baseline, aggiustamento per funging); dichiara la data e la versione.
- **Ignorare il funging/spiazzamento.** Finanziare un'organizzazione che avrebbe ricevuto il denaro da un altro donatore comunque compra meno bene controfattuale di quanto il titolo suggerisca — vedi [addizionalità e peso morto](../addizionalità-e-peso-morto/) e [spiazzamento e attribuzione](../spostamento-e-attribuzione/).
- **Confrontare attraverso unità incompatibili senza conversione.** "Vite salvate" e "reddito guadagnato" non sono direttamente comparabili senza un quadro esplicito di pesi morali; presentarli fianco a fianco come se lo fossero è un errore di categoria.
- **Visione a tunnel dell'area di causa.** Classificare solo all'interno di un'area di causa (es. solo organizzazioni benefiche di salute globale) e chiamare il vincitore "l'organizzazione benefica più costo-efficace" sopravvaluta la rivendicazione; la classifica incrociata di GiveWell è deliberatamente stretta (salute e benessere globale), non universale.

## Fonti

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
