# Tasso di sconto sociale

Il tasso di sconto sociale convertE costi e benefici futuri in valori attuali, così che programmi con ritorni distribuiti su decenni possano essere confrontati su una base comune. Il Green Book del HM Treasury impone uno schema decrescente ancorato al 3,5% per i primi 30 anni, basato sulla formula di Ramsey — un numero specifico e citabile che è diventato un argomento politico ed etico vivo ogni volta che viene applicato a impegni di lungo orizzonte come la politica climatica o le infrastrutture.

## Perché è importante

Una sterlina di beneficio ricevuta in 30 anni non vale una sterlina di beneficio ricevuta oggi, per ragioni che riguardano in parte la pura preferenza temporale (persone e società preferiscono cose buone prima) e in parte la crescita (una società futura si prevede sia più ricca, quindi una sterlina conta meno per essa al margine). L'Annex 6 del Green Book deriva il tasso di sconto standard britannico dalla formula di Ramsey, combinando un tasso di pura preferenza temporale con il tasso di crescita previsto del consumo e l'elasticità dell'utilità marginale del consumo, producendo il tasso pubblicato del 3,5% annuo per gli anni 0-30, decrescente secondo uno schema pubblicato per gli anni 31 e oltre (fino all'1% per gli anni 301+). Questo schema esiste precisamente perché un 3,5% costante composto su un secolo renderebbe virtualmente qualsiasi beneficio di lungo orizzonte — una difesa dalle inondazioni che salva vite in 80 anni, una riduzione di carbonio che evita danni in 100 anni — trascurabile in termini di valore attuale, cosa che il Treasury ha giudicato una conclusione eticamente implausibile per decisioni infrastrutturali e ambientali genuinamente di lunga durata.

Il tasso di sconto è contestato precisamente perché la scelta non è un parametro tecnico neutrale: codifica un giudizio su quanto una società dovrebbe sacrificare oggi per persone non ancora nate. La Stern Review on the Economics of Climate Change (2006) ha usato un tasso di sconto vicino allo zero (una pura preferenza temporale vicina allo 0,1%), sostenendo che scontare il benessere delle generazioni future a qualcosa come i tassi di mercato è eticamente indifendibile quando il danno (cambiamento climatico catastrofico) è irreversibile. I critici — in particolare William Nordhaus — hanno sostenuto che il tasso quasi zero di Stern esagerasse il caso per la spesa climatica immediata rendendo quasi ogni costo presente giustificato contro un beneficio futuro appena scontato. Il disaccordo non riguardava la matematica; riguardava quale framework etico dovesse fissare il tasso, e rimane l'illustrazione standard del perché il tasso di sconto è una scelta politica, non solo un input attuariale.

## Il calcolo

La formula di Ramsey sottostante al tasso del Green Book:

```
r = ρ + η·g

dove:
  r = tasso di sconto sociale
  ρ = tasso di pura preferenza temporale (impazienza +
      rischio di catastrofe)
  η = elasticità dell'utilità marginale del consumo
  g = tasso di crescita annuo previsto del consumo pro
      capite
```

Lo schema decrescente del Green Book (Annex 6, illustrativo — verifica l'edizione corrente per la tabella esattamente pubblicata):

```
Anni 0-30:    3,5%
Anni 31-75:   3,0%
Anni 76-125:  2,5%
Anni 126-200: 2,0%
Anni 201-300: 1,5%
Anni 301+:    1,0%
```

Valore attuale di una somma futura:

```
VA = VF / (1 + r)^t
```

## Esempio pratico

**Schema di difesa dalle inondazioni**: un progetto fornisce £10 milioni di danni da inondazione evitati nell'anno 40.

Usando un tasso piatto del 3,5%: VA = 10.000.000 / (1,035)^40 ≈ £2,52 milioni — il beneficio sembra piccolo.

Usando lo schema decrescente del Green Book (3,5% per gli anni 0-30, 3,0% successivamente), il calcolo si compone al 3,5% per i primi 30 anni e al 3,0% per gli anni 31-40:

```
VA = 10.000.000 / [(1,035)^30 × (1,03)^10]
   = 10.000.000 / [2,807 × 1,344]
   ≈ 10.000.000 / 3,773
   ≈ £2,65 milioni
```

Lo schema decrescente aumenta moderatamente il valore attuale dei benefici di lungo orizzonte rispetto a un tasso piatto alto — lo scopo esplicito dello schema, poiché un 3,5% piatto per un secolo sconterebbe un beneficio di £100 milioni nell'anno 100 a meno di £3,3 milioni.

**Infrastruttura digitale**: una migrazione cloud governativa che costa £4 milioni ora si prevede eviti £500.000/anno in costi di manutenzione legacy per 15 anni. Al 3,5%, il valore attuale di quella rendita è approssimativamente £500.000 × 11,52 (il fattore di rendita a 15 anni al 3,5%) ≈ £5,76 milioni — superando comodamente il costo di £4 milioni, un caso di valore attuale netto positivo che sembrerebbe notevolmente più debole a un tasso ingenuamente scelto più alto (al 7%, lo stesso fattore di rendita scende a circa 9,11, dando £4,56 milioni, ancora positivo ma con un margine molto più sottile).

## Collegamento con lo sviluppo software

La maggior parte dei casi aziendali software durano 3-5 anni, ben dentro la fascia piatta del 3,5%, quindi lo schema decrescente raramente morde direttamente — ma la disciplina sottostante è importante per qualsiasi investimento tecnologico governativo con una lunga vita dell'asset (una piattaforma nazionale, un programma di infrastrutture dati, un contratto pluri-decennale):

- Usa il tasso pubblicato del Green Book piuttosto che un "tasso soglia" interno preso in prestito dalla finanza privata; gli auditor e i revisori del Treasury si aspetteranno lo schema standard.
- Per i benefici realizzati molti anni dopo (i risparmi di manutenzione a lungo termine di una piattaforma, il valore composto di un ecosistema di dati aperti — vedi [valore dei dati aperti](../open-data-value/)), la scelta di sconto può far ribaltare un caso aziendale da positivo a negativo; rendi il tasso e l'orizzonte presupposti espliciti, non default sepolti.
- Questo si collega direttamente a [valutazione Green Book](../green-book-appraisal/), il modello a cinque casi che richiede formalmente un flusso di cassa scontato, e a [valutazione del benessere](../wellbeing-valuation/), dove la stessa questione di sconto si pone per i benefici di benessere non monetari.
- Vedi anche [equità intergenerazionale e sconto della sostenibilità](../intergenerational-equity-and-sustainability-discounting/) per il dibattito Stern-contro-Nordhaus applicato specificamente all'investimento tecnologico ambientale e climatico.

## Insidie

- **Usare un tasso piatto per orizzonti molto lunghi.** Lo schema decrescente del Green Book esiste specificamente perché un tasso costante sottostima benefici genuinamente di lunga durata; verifica quale fascia si applica piuttosto che impostare di default il 3,5% ovunque.
- **Trattare il tasso di sconto come eticamente neutrale.** La disputa Stern-Nordhaus mostra che il tasso codifica un giudizio di valore sulle generazioni future; cambiarlo cambia quali programmi sembrano giustificati, quindi dovrebbe essere dichiarato e difeso, non nascosto in un default di foglio di calcolo.
- **Confondere il tasso di sconto sociale con un costo del capitale privato.** I costi di prestito governativi e i tassi soglia del settore privato sono concetti diversi dal tasso sociale derivato da Ramsey, e sostituire uno con l'altro in una valutazione pubblica tipicamente distorce il risultato nella direzione di favorire i ritorni a breve termine.
- **Scontare flussi di cassa reali e nominali in modo incoerente.** Il tasso del Green Book è un tasso reale (corretto per l'inflazione); scontare flussi di cassa nominali con esso sottostima materialmente i valori attuali.

## Fonti

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
