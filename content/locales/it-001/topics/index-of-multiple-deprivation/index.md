# Indice di deprivazione multipla (IMD)

L'IMD è la misura ufficiale di deprivazione relativa per piccole aree in Inghilterra, classificando ognuna delle 32.844 Lower-layer Super Output Areas (LSOA, ciascuna circa 1.500 residenti) del paese da 1 (più deprivata) a 32.844 (meno deprivata). È pubblicato da quello che è ora il Ministry of Housing, Communities and Local Government (MHCLG, precedentemente MHCLG/DCLG), più recentemente come English Indices of Deprivation 2019, e instrada direttamente il finanziamento del governo centrale, la prioritizzazione della salute pubblica, e l'eligibilità per decine di schemi locali.

## Perché è importante

La deprivazione non è una cosa singola — un quartiere può essere povero di reddito ma sicuro, o adeguato di reddito ma soffrire di risultati di salute scarsi e cattivo alloggio. Gli indici predecessori dell'IMD (risalenti agli indicatori di deprivazione del Department of the Environment degli anni '70) si sono evoluti nel modello a sette domini di oggi precisamente perché il mirino a singolo indicatore (solo il tasso di disoccupazione, diciamo) abitualmente perdeva aree deprivate in altri modi. L'IMD 2019 combina reddito, occupazione, istruzione, salute, crimine, barriere all'alloggio e ai servizi, e ambiente di vita in una singola classifica composita per LSOA, ciascun dominio costruito dal proprio paniere di indicatori e pesato dalla metodologia dell'MHCLG. Perché opera a livello di piccola area (LSOA) piuttosto che di autorità locale, espone sacche di deprivazione nascoste all'interno di distretti altrimenti prosperi — il motivo per cui l'IMD, non il reddito medio dell'autorità locale, è ciò su cui NHS England, il pupil premium del Department for Education, e decine di formule di finanziamento di autorità locali effettivamente si basano. Il software che determina l'eligibilità, prioritizza l'outreach, o riporta l'impatto per area in Inghilterra dovrebbe trattare il decile o la classifica IMD come un input di prima classe, non un ripensamento — e dove un programma deliberatamente mira alle aree più deprivate, la sua valutazione dovrebbe applicare la [ponderazione distributiva](../distributional-weighting/) coerente con quel mirino, piuttosto che valutare una sterlina di beneficio allo stesso modo indipendentemente da dove cade.

## Il calcolo

```
7 domini, pesati:
  Reddito                              22,5%
  Occupazione                          22,5%
  Istruzione, Competenze e Formazione  13,5%
  Deprivazione di Salute e Disabilità  13,5%
  Crimine                               9,3%
  Barriere all'Alloggio e ai Servizi    9,3%
  Ambiente di Vita                      9,3%

Punteggio di ogni dominio: indicatori standardizzati
(classificati, poi trasformati verso una distribuzione
normale) e combinati per trasformazione esponenziale così
che l'alta deprivazione su un indicatore non possa essere
completamente cancellata dalla bassa deprivazione su altri
all'interno di quel dominio.

Punteggio composito IMD (LSOA) = Σ (punteggio del dominio ×
                                   peso del dominio)
Classifica le LSOA per punteggio composito → 1 (più
deprivata) a 32.844 (meno deprivata)
Decili: classifica ÷ 3.284 (circa), decile 1 = 10% più
deprivato delle LSOA
```

## Esempio pratico

**Punteggio composito LSOA**, usando punteggi di dominio standardizzati illustrativi (0 = nessun segnale di deprivazione, più alto = più deprivato):

```
Reddito                  0,35 × 0,225 = 0,07875
Occupazione              0,30 × 0,225 = 0,06750
Istruzione               0,20 × 0,135 = 0,02700
Salute                   0,15 × 0,135 = 0,02025
Crimine                  0,10 × 0,093 = 0,00930
Barriere all'Alloggio    0,05 × 0,093 = 0,00465
Ambiente di Vita         0,08 × 0,093 = 0,00744

Punteggio composito = 0,07875 + 0,06750 + 0,02700 +
                      0,02025 + 0,00930 + 0,00465 +
                      0,00744 = 0,21489
```

Quel punteggio composito viene poi classificato contro i punteggi di tutte le 32.844 LSOA. Se posiziona la LSOA alla classifica 2.950, cade nel decile 1 (2.950 ÷ 3.284 ≈ 0,9, cioè all'interno del 10% più deprivato dei quartieri in Inghilterra) — che per molte formule di finanziamento è la soglia che sblocca l'eligibilità, indipendentemente da come l'autorità locale circostante classifica in media.

## Collegamento con lo sviluppo software

- Qualsiasi servizio che geocodifica gli utenti al codice postale o alla LSOA può unire la tabella di lookup IMD pubblicata (un CSV gratuito e versionato dall'MHCLG) per aggiungere il decile di deprivazione come covariata — per mirare l'outreach, prioritizzare il carico di casi, o riportare risultati per fascia di deprivazione senza raccogliere nuovi dati personali.
- Il decile IMD è un controllo di equità standard per i servizi digitali pubblici: tabulare incrociatamente l'adozione del servizio, l'abbandono, o la satisfazione per decile IMD fa emergere divari di accesso che una metrica aggregata nasconde — vedi [inclusione digitale](../digital-inclusion/) e [metriche di satisfazione del cittadino](../citizen-satisfaction-metrics/).
- Perché la classifica IMD è relativa (somma sempre a un set fisso di classifiche attraverso l'Inghilterra), non può mostrare se la deprivazione nazionalmente sta salendo o scendendo nel tempo — solo quali aree si classificano dove relativamente le une alle altre in quell'edizione; non costruire dashboard di tendenza assoluta sulla sola classifica IMD grezza.

## Insidie

- **Confrontare le classifiche IMD attraverso le edizioni (2015 contro 2019) come una tendenza temporale** — gli indicatori sottostanti, le geografie, e la metodologia tutti cambiano tra le edizioni; l'MHCLG esplicitamente avvisa contro l'uso dei cambiamenti di classifica come evidenza che un'area sia diventata più o meno deprivata.
- **Applicare l'IMD a livello LSOA agli individui** — una LSOA nel decile 1 ancora contiene famiglie non deprivate, e una LSOA nel decile 10 ancora contiene famiglie deprivate; l'IMD descrive aree, non persone, e usarlo come proxy di eligibilità individuale classifica erroneamente entrambe le direzioni.
- **Ignorare il dettaglio a livello di dominio in favore della classifica composita** — due LSOA con punteggi compositi identici possono avere profili di dominio completamente diversi (una deprivata di salute, una deprivata di crimine); uno schema di mirino puntato a un problema dovrebbe usare il punteggio di dominio rilevante, non il composito misto.

## Fonti

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
