# Metriche del capitale sociale

Le metriche del capitale sociale quantificano le reti, la fiducia, e la partecipazione civica che permettono alle comunità e alle istituzioni di funzionare efficientemente — il "tessuto connettivo" che non ha alcuna linea su alcun bilancio ma che visibilmente abbatte costo e attrito quando presente, e visibilmente lo aumenta quando assente. L'inquadramento moderno viene da "Bowling Alone" (2000) di Robert Putnam, che distingueva il capitale di legame (bonding, legami all'interno di un gruppo simile) dal capitale di ponte (bridging, legami attraverso gruppi diversi); l'Office for National Statistics britannico ha da allora costruito un set di indicatori permanente per tracciarlo nazionalmente.

## Perché è importante

La rivendicazione empirica centrale di Putnam — documentata attraverso il declino dell'appartenenza alle associazioni civiche statunitensi, la presenza in chiesa, e la partecipazione sindacale nel tardo ventesimo secolo — era che il capitale sociale predice risultati che l'economia convenzionale fatica a spiegare: crimine più basso, migliore benessere infantile, governo locale più efficace, recupero economico più rapido dopo gli shock. Il capitale di legame (legami forti all'interno di un gruppo coeso) è buono per il supporto reciproco ma può calcificarsi in insularità; il capitale di ponte (legami più debili attraverso gruppi diversi) è ciò che tipicamente correla con l'accesso all'opportunità, il flusso di informazione, e la fiducia istituzionale. L'ONS ha preso questo sul serio abbastanza da costruire un quadro di indicatori nazionale — la sua serie "Social Capital in the UK" (<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>) traccia quattro pilastri: relazioni personali, supporto della rete sociale, engagement civico, e fiducia e norme cooperative, ciascuno costruito da domande di indagine stabilite (Community Life Survey, Understanding Society). Per i servizi digitali del settore pubblico, il capitale sociale è doppiamente rilevante: è sia un risultato che alcuni programmi stanno cercando di costruire (finanziamento di resilienza comunitaria, prescrizione sociale) sia un input che determina quanto bene un servizio verrà effettivamente adottato — un servizio lanciato in una comunità ad alta fiducia e bene collegata si diffonderà per parola passata in un modo in cui un servizio identico in un'area a bassa fiducia non lo farà.

## Il calcolo

```
Quadro a quattro pilastri dell'ONS (indicatori,
illustrativi):

Relazioni personali:   % con qualcuno su cui contare in una
                       crisi
Supporto della rete    % che potrebbero prestare soldi da
sociale:                amici/famiglia se necessario
Engagement civico:     % che hanno fatto volontariato o
                       azione civica negli ultimi 12 mesi
Fiducia e norme        % che concordano "la maggior parte
cooperative:            delle persone può essere fidata"

Nessun singolo punteggio composito ONS viene pubblicato —
i pilastri vengono riportati separatamente,
deliberatamente, perché aggregarli in un indice
nasconderebbe quale pilastro specifico sia debole.

Divisione legame/ponte di Putnam (quadro, non una formula):
  capitale di legame ≈ densità di legami all'interno di un
                       gruppo omogeneo
  capitale di ponte   ≈ frequenza/forza dei legami
                       attraverso gruppi distinti
```

## Esempio pratico

**Istantanea del capitale sociale di un quartiere**: un sondaggio in stile Community Life Survey di un'area locale trova il 78% con qualcuno su cui contare in una crisi (relazioni personali), il 61% che potrebbero prestare soldi se necessario (supporto della rete), il 24% che hanno fatto volontariato nell'anno passato (engagement civico), e il 41% che concorda "la maggior parte delle persone può essere fidata" (fiducia e norme) — contro medie nazionali di circa 85%, 70%, 30%, e 45% rispettivamente (illustrativo, calibra contro il bollettino ONS attuale). L'area è sotto-indicizzata su ogni pilastro ma più nettamente sulla fiducia (41% contro 45% nazionale, un divario di 4 punti) e l'engagement civico (24% contro 30%, un divario di 6 punti) — segnalando l'engagement civico, non la fiducia, come il deficit relativo più grande che vale un investimento mirato (un programma di sovvenzioni comunitarie, diciamo) piuttosto che un'iniziativa generica "costruisci fiducia".

**Legame contro ponte, design di servizio**: un programma di lavoro in una comunità coesa trova che le segnalazioni viaggiano velocemente all'interno della comunità (alto capitale di legame: la voce si diffonde entro giorni) ma il programma fatica a raggiungere residenti fuori da quella rete (basso capitale di ponte: l'adozione fuori dalla comunità centrale è vicina a zero dopo mesi). La soluzione implicata non è "più marketing" ma costruire deliberatamente legami di ponte — collaborando con organizzazioni che si trovano *fuori* dalla rete esistente, perché il capitale di legame da solo non può risolvere un problema di capitale di ponte.

## Collegamento con lo sviluppo software

- Le piattaforme digitali che instradano aiuto reciproco, volontariato, o sovvenzioni comunitarie (un servizio "connettore locale", per esempio) stanno letteralmente costruendo infrastruttura di capitale di ponte; la loro metrica di successo dovrebbe essere la diversità di rete delle connessioni fatte, non solo il conteggio delle transazioni — vedi [governo come piattaforma](../governo-come-piattaforma/) per il pattern più ampio di infrastruttura su cui altri costruiscono valore.
- Dove la teoria del cambiamento di un programma mira esplicitamente al capitale sociale come risultato (un fondo di resilienza comunitaria, un servizio di prescrizione sociale), la sua [teoria del cambiamento](../teoria-del-cambiamento/) e [modello logico](../modello-logico/) dovrebbero nominare il pilastro specifico (fiducia, engagement civico, supporto della rete) che si aspetta di muovere, piuttosto che un risultato indifferenziato di "costruisci comunità" che non può essere misurato contro la baseline dell'ONS.
- Gli indicatori di capitale sociale sono una lente di equità utile insieme all'[Indice di deprivazione multipla](../indice-di-deprivazione-multipla/): un'area può essere deprivata di reddito ma socialmente ricca, o viceversa, e i due puntano a interventi molto diversi.

## Insidie

- **Far collassare i quattro pilastri ONS in un punteggio composito** — l'ONS deliberatamente non fa questo; un singolo numero nasconde quale pilastro specifico stia guidando una lettura bassa, e mediare maschera una comunità che è ad alta fiducia ma civicamente disimpegnata contro una che è il contrario.
- **Assumere che il capitale sociale sia sempre buono** — il capitale di legame denso in un gruppo insulare può attivamente resistere alle istituzioni esterne (incluso i servizi governativi); l'analisi stessa di Putnam tratta legame e ponte come beni diversi con effetti diversi, talvolta in conflitto.
- **Usare le misure di capitale sociale basate su indagine come metrica operativa in tempo reale** — le indagini sottostanti (Community Life Survey, Understanding Society) vengono eseguite annualmente o meno spesso; tratta i dati del capitale sociale come un indicatore contestuale a movimento lento, non qualcosa che un dashboard di servizio può aggiornare settimanalmente.

## Fonti

- Putnam RD. "Bowling Alone: The Collapse and Revival of American Community." Simon & Schuster,
  2000.
- ONS. "Social capital in the UK: bulletins."
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. "Community Life Survey" (annual).
