# Social Value Act

Il Public Services (Social Value) Act 2012 è un obbligo statutario britannico che richiede alle autorità pubbliche in Inghilterra e Galles di considerare come ciò che viene appaltato potrebbe migliorare il benessere economico, sociale, e ambientale dell'area rilevante, e di considerare la consultazione su questo, prima di iniziare un processo di appalto per contratti di servizi pubblici. È entrato in vigore nel gennaio 2013 come un obbligo relativamente leggero di "tenere in considerazione", ed è stato sostanzialmente rafforzato dalla Procurement Policy Note (PPN) 06/20 nel gennaio 2021, che richiede ai contratti del governo centrale di valutare esplicitamente — non semplicemente considerare — il valore sociale, con una ponderazione minima nei criteri di aggiudicazione.

## Perché è importante

Prima della PPN 06/20, "considerare" il valore sociale poteva essere soddisfatto da un commissario che notava di averci pensato, senza alcun requisito che influenzasse la decisione di aggiudicazione — un obbligo facile da assolvere sulla carta e ignorare nella pratica. La PPN 06/20 ha chiuso quel vuoto per gli appalti del governo centrale: impone che il valore sociale venga valutato come parte della valutazione dell'offerta, organizzato attorno a cinque temi prioritari nazionali — recupero COVID-19, affrontare la disuguaglianza economica, combattere il cambiamento climatico, pari opportunità, e benessere — e comunemente misurato usando il quadro National TOMs (Themes, Outcomes, Measures) mantenuto dal Social Value Portal. Per un ingegnere software che costruisce strumenti di appalto, gestione contratti, o supporto alle offerte per il settore pubblico, questa è la base legale contro cui il tuo cliente è obbligato a costruire, non un piacevole extra opzionale.

## Il calcolo

Il valore sociale è un argomento modellato su un quadro; la sua "matematica" è la struttura di punteggio che la maggior parte delle autorità usa:

```
Punteggio totale dell'offerta = Ponderazione prezzo/costo +
                                Ponderazione qualità +
                                Ponderazione valore sociale

PPN 06/20 (governo centrale): ponderazione del valore sociale
                              ≥ 10% del punteggio totale

Temi del valore sociale (PPN 06/20):
 1. Recupero COVID-19
 2. Affrontare la disuguaglianza economica
 3. Combattere il cambiamento climatico
 4. Pari opportunità
 5. Benessere
```

Gli offerenti tipicamente monetizzano i loro impegni contro questi temi usando [database dei costi unitari](../database-dei-costi-unitari/), e la stessa logica di monetizzazione usata nel [ritorno sociale sull'investimento](../ritorno-sociale-sullinvestimento/) si applica: un impegno dovrebbe essere comprovato, attribuibile al contratto, e non contato doppiamente contro altro finanziamento.

## Esempio pratico

**Contratto IT di un'autorità locale**: un contratto di £2 milioni su 3 anni è valutato 60% qualità, 30% prezzo, 10% valore sociale. L'Offerente A si impegna a 2 apprendistati, £150.000 di spesa di subappalto locale, e 200 ore di formazione pro bono sulle competenze digitali per una scuola locale, monetizzati usando proxy da un database dei costi unitari a un totale combinato di £90.000 di valore sociale aggiuntivo. L'Offerente B si impegna a un pacchetto più piccolo monetizzato a £40.000. Se l'autorità valuta il valore sociale proporzionalmente contro l'offerta più forte, l'Offerente A riceve i 10 punti pieni; l'Offerente B riceve 10 × (£40.000 ÷ £90.000) = 4,4 punti — un divario di 5,6 punti che può decidere il contratto anche dove qualità e prezzo sono vicini.

**Offerente del settore volontario**: una piccola VCSE (voluntary, community and social enterprise) che fa un'offerta per un contratto di manutenzione del verde contro un concorrente commerciale non può competere sul solo prezzo unitario, ma usa i proxy di Global Value Exchange per monetizzare i suoi impegni esistenti di occupazione comunitaria e volontariato, facendo un caso di valore sociale comprovato che vale la pena valutare insieme a prezzo e qualità.

## Collegamento con lo sviluppo software

Vincere un'offerta con impegni di valore sociale monetizzati crea un obbligo di comprovare l'erogazione contro di essi tramite la gestione contrattuale — strumenti che registrano l'inizio di apprendistati, la spesa locale, e le ore di formazione contro gli impegni specifici valutati all'offerta, alimentando le riunioni di revisione del contratto piuttosto che essere dimenticati una volta firmato il contratto. Gli elenchi G-Cloud e Digital Marketplace richiedono sempre più dichiarazioni di valore sociale al punto dell'elenco. Vedi [ritorno sociale sull'investimento](../ritorno-sociale-sullinvestimento/) per il metodo di valutazione dietro gli impegni, [database dei costi unitari](../database-dei-costi-unitari/) per i proxy su cui gli offerenti si basano, e [risultati contro output](../risultati-contro-output/) per assicurarsi che gli impegni erogati siano risultati, non solo conteggi di attività.

## Insidie

- **Offerte di lavaggio sociale.** Impegni vaghi ("supportiamo la comunità locale") che non possono essere misurati o rispettati durante la gestione contrattuale valutano bene ma non erogano nulla di verificabile.
- **Trattare il valore sociale come uno spareggio.** La PPN 06/20 richiede che il valore sociale sia valutato esplicitamente all'interno dei criteri di aggiudicazione, non usato informalmente per rompere un pareggio tra offerte altrimenti uguali.
- **Nessun seguito nella gestione contrattuale.** Gli impegni valutati all'offerta frequentemente non vengono mai tracciati durante l'erogazione — vedi [realizzazione dei benefici](../realizzazione-dei-benefici/).
- **Quadri di misurazione incoerenti attraverso i contratti.** Usare fonti di proxy diverse per impegni simili su contratti diversi rende il confronto a livello di portfolio privo di significato, che è il motivo per cui esistono quadri comuni come National TOMs e database di costi unitari condivisi.

## Fonti

- Public Services (Social Value) Act 2012. <https://www.legislation.gov.uk/ukpga/2012/3/contents>
- Cabinet Office, Procurement Policy Note 06/20, "Taking Account of Social Value in the Award of
  Central Government Contracts." <https://www.gov.uk/government/publications/procurement-policy-note-0620-taking-account-of-social-value-in-the-award-of-central-government-contracts>
- Social Value Portal, National TOMs Framework. <https://socialvalueportal.com/national-toms/>
