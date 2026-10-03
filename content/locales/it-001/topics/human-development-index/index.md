# Indice di sviluppo umano (HDI)

L'HDI è l'alternativa principale dell'ONU al classificare i paesi solo per reddito: combina aspettativa di vita, istruzione, e reddito in un singolo numero tra 0 e 1, sulla premessa — argomentata dall'economista Amartya Sen e sviluppata per l'ONU da Mahbub ul Haq — che lo sviluppo riguardi l'espansione di ciò che le persone possono fare ed essere, non solo quanto guadagnano. È stato pubblicato annualmente nel Human Development Report del Programma di Sviluppo delle Nazioni Unite dal 1990.

## Perché è importante

Prima dell'HDI, lo "sviluppo" era misurato quasi interamente dal GNP pro capite, che non dice nulla su se la crescita raggiunga la salute o l'istruzione delle persone comuni. L'approccio delle capacità di Sen ha ridefinito lo sviluppo come l'espansione delle libertà reali, e ul Haq ha trasformato quello in un indice pubblicabile con cui l'UNDP potesse classificare ogni paese, costringendo i governi che si sono arricchiti solo di reddito ma hanno trascurato salute o istruzione a confrontarsi con una classifica peggiore di quanto il loro PIL suggerisse (gli stati petroliferi del Golfo e alcune economie estrattive sono gli esempi standard). La struttura a tre vie dell'HDI è anche l'antenato metodologico diretto dell'[Indice di Povertà Multidimensionale](../multidimensional-poverty-index/): entrambi rifiutano di lasciare che una dimensione riscatti una carenza in un'altra, usando una media geometrica piuttosto che aritmetica. L'UNDP pubblica note tecniche complete e i dati sottostanti per ogni edizione (<https://hdr.undp.org/data-center/human-development-index>), che è la fonte canonica per chiunque costruisca sull'indice piuttosto che ri-derivarlo.

## Il calcolo

```
Indice di Aspettativa di Vita (LEI) = (LE − 20) / (85 − 20)

Indice Anni Medi di Istruzione      = anni medi di
                                      istruzione / 15
Indice Anni Attesi di Istruzione    = anni attesi di
                                      istruzione / 18
Indice di Istruzione (EI)           = (Indice Anni Medi +
                                       Indice Anni Attesi) / 2

Indice di Reddito (II)              = (ln(RNL pro capite) −
                                       ln(100)) /
                                       (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [media geometrica dei tre
                                   sotto-indici]
```

La media geometrica è deliberata: perché moltiplica piuttosto che mediare, un punteggio molto alto in una dimensione non può compensare completamente un punteggio molto basso in un'altra — un design che l'UNDP ha adottato nel 2010 specificamente per penalizzare lo squilibrio, sostituendo la formula a media aritmetica precedente.

## Esempio pratico

**Paese a reddito medio**: aspettativa di vita 72 anni, anni medi di istruzione 8, anni attesi di istruzione 13, RNL pro capite $12.000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
IAM = 8 / 15                                         = 0,533
IAA = 13 / 18                                        = 0,722
EI = (0,533 + 0,722) / 2                             = 0,628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

Un HDI di 0,713 cade nella fascia di "sviluppo umano alto" dell'UNDP (0,700-0,799); "molto alto" inizia a 0,800. Nota quanto sia sensibile il risultato al sotto-indice più debole: se gli anni medi di istruzione fossero 4 invece di 8 (IAM = 0,267, EI = 0,494), l'HDI scende a (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639 — scendendo di una fascia intera — anche se nulla altro è cambiato.

## Collegamento con lo sviluppo software

- Il pattern della media geometrica è direttamente riutilizzabile per qualsiasi punteggio composito di servizio o prodotto dove non vuoi che una dimensione forte mascheri una critica debole — es. combinare punteggi di accessibilità, performance, e affidabilità per un servizio digitale pubblico moltiplicativamente piuttosto che per media pesata, così che un servizio che è rapido ma inaccessibile non possa segnare "buono".
- La trasformazione logaritmica del reddito dell'HDI (valore marginale decrescente di una sterlina extra) è la stessa logica dietro la [ponderazione distributiva](../distributional-weighting/) nella valutazione: $1.000 extra significa molto più per una famiglia povera che per una ricca, e trattare entrambe linearmente mispreza l'impatto.
- Qualsiasi dashboard che riporta un singolo punteggio fuso di "inclusione digitale" o "risultati del cittadino" dovrebbe documentare la sua formula di aggregazione tanto esplicitamente quanto fanno le note tecniche dell'UNDP — vedi [KPI del settore pubblico](../public-sector-kpis/) e [scorecard del valore pubblico](../public-value-scorecard/).

## Insidie

- **Mediare invece di usare la media geometrica** — una media aritmetica permette al reddito alto di mascherare completamente salute o istruzione scarse; l'intero punto del cambiamento metodologico del 2010 era fermare quella sostituzione.
- **Confrontare l'HDI anno su anno come se fosse PIL aggiustato per inflazione** — l'UNDP ri-basa periodicamente l'indice (nuovi limiti minimo/massimo, limiti di istruzione rivisti), quindi un cambiamento di classifica può riflettere un aggiornamento metodologico, non un cambiamento reale; controlla sempre da quale edizione HDR proviene una cifra.
- **Trattare l'HDI come una misura di povertà** — è una media nazionale e non dice nulla sulla distribuzione all'interno di un paese; per quello, usa l'[Indice di Povertà Multidimensionale](../multidimensional-poverty-index/) o l'HDI aggiustato per inequità separato dell'UNDP.

## Fonti

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
