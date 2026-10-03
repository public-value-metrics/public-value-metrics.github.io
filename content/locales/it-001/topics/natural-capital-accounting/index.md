# Contabilità del capitale naturale

La contabilità del capitale naturale pone l'ambiente sulla stessa base di qualsiasi altro asset nazionale od organizzativo: misura lo stock di risorse naturali (boschi, suoli, fiumi, zone umide, l'atmosfera) e il flusso di servizi che producono (sequestro di carbonio, protezione dalle inondazioni, ricreazione, cibo), sia in termini fisici sia monetari, così che l'esaurimento ambientale emerga nel processo decisionale nel modo in cui lo farebbe esaurire il capitale finanziario. Il Regno Unito è uno dei governi più avanzati nel fare questo sistematicamente, guidato dal 25 Year Environment Plan (2018) e implementato tramite i conti UK Natural Capital dell'ONS e la guida supplementare del Green Book del HM Treasury.

## Perché è importante

La contabilità convenzionale — aziendale e governativa allo stesso modo — tratta una foresta come priva di valore finché non viene abbattuta e venduta come legname, nel qual momento diventa PIL. La contabilità del capitale naturale esiste per chiudere quel vuoto: il 25 Year Environment Plan del Regno Unito ha impegnato il governo a incorporare il pensiero del capitale naturale attraverso la politica, dichiarando esplicitamente l'ambizione di essere "la prima generazione a lasciare l'ambiente in uno stato migliore di come l'abbiamo trovato." L'ONS ha da allora pubblicato conti UK Natural Capital annuali (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>) che stimano il valore monetario dei servizi ecosistemici — dalla ricreazione boschiva ai benefici sanitari degli spazi verdi urbani allo stoccaggio di carbonio delle torbiere — usando lo stesso quadro dei National Accounts usato per il capitale prodotto, così che il capitale naturale possa eventualmente sedere nello stesso bilancio di strade, edifici, e attrezzature. La guida Enabling a Natural Capital Approach (ENCA) del HM Treasury, supplementare al Green Book (<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>), espone come i valutatori dovrebbero valutare i costi e beneficî ambientali nei casi aziendali, così che uno schema stradale che distrugge un bosco antico o uno schema di inondazione che ripristina una zona umida possano essere confrontati in termini monetari coerenti piuttosto che uno avere un numero e l'altro un paragrafo di avvertenze.

## Il calcolo

```
Valore dell'asset di servizio ecosistemico = VAN del flusso
  di servizi che l'asset fornisce

Valore dell'asset = Σ (t = 1 a T) [valore del flusso di
                    servizio annuale_t / (1 + r)^t]

dove:
  valore del flusso di servizio_t = quantità di servizio
    nell'anno t × valore unitario (es. visite ricreative ×
    valore per visita; tonnellate di carbonio sequestrate ×
    prezzo del carbonio)
  r = tasso di sconto (tasso di sconto sociale del Green
      Book — vedi [tasso di sconto sociale](../social-discount-rate/))
  T = orizzonte temporale su cui l'asset è previsto fornire
      il servizio
```

Questa è la struttura identica di valore attuale netto usata per valutare il capitale prodotto o valutare qualsiasi investimento pubblico sotto la [valutazione Green Book](../green-book-appraisal/) — il contributo della contabilità del capitale naturale è fornire quantità fisiche credibili e valori unitari per servizi che erano precedentemente prezzati a zero.

## Esempio pratico

**Boschetto urbano, valore ricreativo**: un boschetto di 50 ettari riceve una stima di 80.000 visite ricreative all'anno, ciascuna valutata (tramite il metodo del costo di viaggio o della preferenza dichiarata — vedi [valutazione della preferenza rivelata](../revealed-preference-valuation/) e [valutazione della preferenza dichiarata](../stated-preference-valuation/)) a £3 per visita. Il boschetto è previsto continuare a fornire questo servizio per 50 anni, valutato a un tasso di sconto del 3,5%.

```
Valore ricreativo annuale = 80.000 × £3 = £240.000/anno

VAN su 50 anni al 3,5% ≈ £240.000 × fattore di rendita
                          (3,5%, 50 anni)
fattore di rendita(3,5%, 50) ≈ 21,4

Valore dell'asset ≈ £240.000 × 21,4 ≈ £5.136.000
```

**Aggiungendo lo stoccaggio di carbonio**: lo stesso boschetto sequestra una stima di 400 tonnellate di CO2 all'anno, valutato al prezzo del carbonio non scambiato del governo di circa £75/tonnellata (illustrativo — usa i valori del carbonio pubblicati attuali da BEIS/DESNZ per una valutazione in produzione).

```
Valore del carbonio annuale = 400 × £75 = £30.000/anno
VAN su 50 anni al 3,5% ≈ £30.000 × 21,4 ≈ £642.000

Valore totale dell'asset del boschetto (ricreazione +
carbonio) ≈ £5.136.000 + £642.000 ≈ £5.778.000
```

Questo è prima di aggiungere l'attenuazione delle inondazioni, la biodiversità, o i servizi di qualità dell'aria che la guida ENCA chiede anche ai valutatori di considerare — il totale è deliberatamente un pavimento, non un soffitto.

## Collegamento con lo sviluppo software

- I sistemi di gestione ambientale e degli asset per autorità locali e agenzie (parchi, strade, corpi d'acqua) possono attaccare un registro del capitale naturale insieme al loro registro degli asset fisici, usando lo stesso pattern flusso-di-servizio-per-valore-unitario di qualsiasi altro [database dei costi unitari](../unit-cost-databases/) che l'organizzazione mantiene.
- Perché il VAN del capitale naturale è sensibile al tasso di sconto (vedi il fattore di rendita dell'esempio pratico), qualsiasi strumento che lo calcola dovrebbe esporre il tasso e l'orizzonte come input visibili, non nasconderli — lo stesso principio di trasparenza trattato sotto [equità intergenerazionale e sconto di sostenibilità](../intergenerational-equity-and-sustainability-discounting/).
- I conti del capitale naturale sono sempre più un input richiesto alle sezioni di impatto ambientale di un caso aziendale di [valutazione Green Book](../green-book-appraisal/); un team di erogazione che costruisce strumenti per casi aziendali dovrebbe trattare i conti ONS e i valori unitari ENCA come dati di riferimento da integrare, non qualcosa che i valutatori ricalcolano da zero ogni volta.

## Insidie

- **Conteggio doppio di servizi ecosistemici sovrapposti** — il valore ricreativo e il valore della biodiversità per lo stesso sito possono condividere dati di disponibilità a pagare sottostanti; la guida ENCA avvisa esplicitamente contro il sommare valutazioni derivate da strumenti di indagine sovrapposti.
- **Trattare il valore di un asset di capitale naturale come statico** — i flussi di servizio cambiano con il clima, la gestione, e la pressione dell'uso del suolo; il valore di carbonio e attenuazione delle inondazioni di un boschetto in questo decennio non è una proprietà permanente del sito.
- **Usare valori unitari medi nazionali per una decisione altamente locale** — un ettaro di boschetto urbano accessibile e un ettaro di altopiano remoto hanno valori ricreativi molto diversi; la guida ENCA raccomanda valori locali o specifici del sito dove disponibili piuttosto che impostare come predefinite le medie nazionali.

## Fonti

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
