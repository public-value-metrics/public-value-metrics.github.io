# Rapporto di overhead delle organizzazioni benefiche

Il rapporto di overhead delle organizzazioni benefiche è la spesa amministrativa e di raccolta fondi espressa come percentuale della spesa totale. È il numero più richiesto nella donazione caritatevole — usato da donatori, organismi di controllo, e persino alcuni finanziatori come proxy per l'efficienza — ed è anche una delle metriche di efficienza più completamente screditate nel settore, con le organizzazioni che l'hanno popolarizzata che pubblicamente la hanno rinnegata nel 2013.

## Perché è importante

Il 17 giugno 2013, GuideStar, la BBB Wise Giving Alliance, e Charity Navigator — i tre organismi di valutazione e informazione non profit più grandi degli Stati Uniti, le cui stesse valutazioni storiche avevano aiutato a radicare il rapporto di overhead come scorciatoia per la qualità delle organizzazioni benefiche — hanno pubblicato una lettera aperta congiunta ai donatori americani, "The Overhead Myth," dichiarando esplicitamente che il rapporto di overhead è una misura scarsa della performance di un'organizzazione benefica e esortando i donatori a guardare invece alla trasparenza, alla governance, e ai risultati. Questa è stata un'inversione diretta dalle stesse istituzioni che avevano costruito la cultura del donatore attorno al rapporto per un decennio.

Il problema sottostante è strutturale, non solo di immagine: un rapporto di overhead basso può essere raggiunto sotto-investendo esattamente nelle cose che rendono un'organizzazione benefica efficace — un sistema di gestione dei casi decente, personale formato, monitoraggio e valutazione — perché queste spesso vengono registrate come "amministrazione" piuttosto che costo di "programma." Un'organizzazione benefica che affama il suo back office per riportare il 5% di overhead potrebbe essere meno capace di erogare risultati di una che spende il 20% su un'operazione adeguatamente risorsata. In Inghilterra e Galles, la guida della Charity Commission ai fiduciari si allontana da una singola percentuale di overhead come test di efficienza, chiedendo invece ai fiduciari di riportare su ciò che l'organizzazione benefica ha raggiunto contro i suoi obiettivi — vedi i requisiti di reporting SORP discussi in [costo per beneficiario](../costo-per-beneficiario/).

## Il calcolo

```
Rapporto di overhead = (Costo amministrativo + Costo di
                       raccolta fondi) / Spesa totale

Varianti comuni:
  Rapporto di programma   = Spesa di programma (caritatevole
                            diretta) / Spesa totale
                          = 1 − rapporto di overhead
  Efficienza di raccolta  = Costo di raccolta fondi / Fondi
  fondi                    raccolti
```

Nessuna di queste formule contiene alcuna informazione sui risultati raggiunti. Un'organizzazione benefica può minimizzare ognuna di esse e ancora fallire ogni beneficiario; vedi [costo per risultato](../costo-per-risultato/) per la metrica che effettivamente si impegna con se il denaro ha funzionato.

## Esempio pratico

Due organizzazioni benefiche, stessa spesa totale:

- **Organizzazione benefica A**: £1.000.000 di spesa totale, £80.000 amministrazione + raccolta fondi → rapporto di overhead 8%. Non ha funzione di monitoraggio e valutazione, un funzionario finanziario sovraccaricato, e nessun sistema di gestione dei casi; il turnover del personale è alto e i dati di risultato non vengono raccolti.
- **Organizzazione benefica B**: £1.000.000 di spesa totale, £220.000 amministrazione + raccolta fondi → rapporto di overhead 22%. Finanzia un piccolo team di valutazione, un sistema di gestione dei casi che cattura il follow-up dei risultati, e formazione adeguata sulla salvaguardia.

Un donatore che seleziona puramente sul rapporto di overhead sceglie A e rigetta B — l'opposto di ciò che l'evidenza del [costo per risultato](../costo-per-risultato/) probabilmente mostrerebbe, perché B è l'unica delle due posizionata per dimostrare, o migliorare, i suoi risultati effettivi.

## Collegamento con lo sviluppo software

Il software di finanza e reporting delle sovvenzioni per il settore spesso codifica rigidamente la divisione overhead/programma come un campo categorico su ogni riga di costo, perché questo è ciò che i regolatori e alcuni finanziatori ancora richiedono nei ritorni statutari. Gli ingegneri che costruiscono questi sistemi dovrebbero trattare quel requisito come un obbligo di conformità, non un segnale di design che il rapporto di overhead sia la metrica che vale la pena mostrare prominentemente su un dashboard; abbinalo, ovunque sia mostrato, con una metrica basata sui risultati così che un visualizzatore non possa leggere il rapporto di overhead in isolamento. Vedi [ritorno sull'investimento del donatore](../ritorno-sullinvestimento-del-donatore/) per la metrica che dovrebbe sedere accanto a esso, e [value for money](../valore-per-il-denaro/) per l'argomento equivalente del settore pubblico contro i proxy di efficienza a rapporto singolo.

## Insidie

- **Usare il rapporto di overhead come soglia di screening.** Rigettare qualsiasi organizzazione benefica sopra una soglia arbitraria (es. "non più del 15% di overhead") sistematicamente penalizza organizzazioni adeguatamente risorsate e ben valutate e premia il sotto-investimento.
- **Categorizzare erroneamente il costo di erogazione diretta come overhead**, o viceversa — le convenzioni contabili per cosa conta come "programma" contro "amministrazione" variano abbastanza tra le organizzazioni benefiche che i rapporti spesso non sono nemmeno comparabili a prima vista.
- **Assumere che overhead basso implichi impatto alto.** I due sono, nel migliore dei casi, non correlati; vedi la rivendicazione centrale della lettera Overhead Myth del 2013.
- **Ignorare che alcune strategie legittime richiedono overhead a breve termine più alto.** Una fase di sviluppo di capacità o organizzativo intenzionalmente aumenta la spesa amministrativa per migliorare l'erogazione successiva.

## Fonti

- GuideStar, BBB Wise Giving Alliance, and Charity Navigator, "The Overhead Myth" open letter, 17 June 2013. <https://learn.guidestar.org/news/news-releases/2013/2013-06-17-overhead-myth>
- Charity Navigator, "Overhead Myth" campaign resources. <https://www.charitynavigator.org/>
- Charity Commission for England and Wales, guidance on charity reporting (SORP). <https://www.gov.uk/government/organizations/charity-commission>
