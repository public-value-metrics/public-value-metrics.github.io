# Úspory z přesunu kanálů

Úspory z přesunu kanálů jsou předpokládané snížení nákladů přesunem objemu transakcí z drahých kanálů — telefon, osobní přepážky, papírová pošta — na levné digitální samoobsluhy. Je to finanční motor „digitálního ve výchozím stavu“ a zároveň položka v byznys případu, která je nejpravděpodobněji chybná, protože předpoklad, na kterém stojí — že offline kanály se zmenšují s růstem digitálního využití — je pravdivý jen někdy.

## Proč na tom záleží

Aritmetika vypadá nezpochybnitelně při použití čísel [nákladů na transakci](../náklady-na-transakci/) ze zprávy o digitální efektivitě: přesuňte milion transakcí z osobní návštěvy za 8,62 £ na digitální za 0,15 £ a úspora je přes 8 milionů. Ale úspora se stává hotovostí uvolněnou k přerozdělení, jen pokud je *pevná kapacita* zmenšujícího se kanálu skutečně vyřazena — místa v kontaktním centru, personál přepážek, minuty telefonní smlouvy — a digitální programy místní správy opakovaně zjišťovaly, že celkový objem kontaktů neklesá v souladu s digitálním využitím. Výzkum programů digitální transformace místních úřadů a orgánů jako Socitm a Local Government Association zdokumentoval opakující se vzorec: digitální kanály přitahují skutečně nové kontakty (občané, kteří by nevolali ani nenavštívili, nyní činí, protože je to snazší) a významný podíl „digitálních“ transakcí selže na půli cesty a stejně vyvolá telefonát — takže telefonní objem klesá mnohem méně, než by naznačovalo procento digitálního využití, někdy v absolutním vyjádření neklesá vůbec, přestože jeho *podíl* na celkovém kontaktu klesá.

## Matematika

```
Hrubá úspora z přesunu kanálu = přesunutý objem × (náklad_starý_kanál − náklad_digitální)

Čistá (realizovaná) úspora = hrubá úspora
                       − nová/stínová poptávka vytvořená snazším kanálem
                       − náklady poptávky ze selhání (digitální selhání, která
                         stále vyvolají telefonát nebo návštěvu přepážky)
                       − náklady nevyřazené pevné kapacity (kontaktní centrum
                         může snižovat personál jen v diskrétních jednotkách;
                         pokles objemu o 15 % jen zřídka umožní snížit 15 %
                         počtu zaměstnanců)

Práh realizace: úspory lze zahrnout do rozpočtu až poté, co objem klesne
pod úroveň, kterou starý kanál dokáže personálně pokrýt při dalším
menším diskrétním kroku kapacity (např. ztráta jedné celé směny,
jednoho celého stolu, jednoho smluvního pásma počtu zaměstnanců)
```

## Praktický příklad

**Služba obnovy parkovacího průkazu pro osoby se zdravotním postižením krajské rady**: 60 000 obnov ročně, dříve 100 % telefonicky/papírově za 6,40 £ na transakci. Nová digitální služba je spuštěna a během roku dosáhne 65 % digitálního využití při 0,30 £ na digitální transakci.

```
Naivní (hrubý) výpočet úspory:
  39 000 přesunutých × (6,40 £ − 0,30 £) = 237 900 £/rok

Co se skutečně stalo podle dat kontaktního centra rady:
  Telefonní objem klesl z 60 000/rok na 46 000/rok (−23 %, nikoli −65 %)
  protože: 9 000 digitálních cest selhalo a vyvolalo následný hovor
           (únik poptávky ze selhání) a 4 000 lidí, kteří dříve vůbec
           neobnovovali, nyní obnovuje, protože to online shledali snadným
           (stínová poptávka — skutečné zlepšení přístupu, ale ne úspora)

  Telefonní kontaktní centrum je obsazeno v pásmech po 8 000 hovorech/FTE;
  pokles o 14 000 hovorů (60 000 → 46 000) uvolní 1,75 FTE, v praxi
  zaokrouhleno dolů na 1 FTE skutečně přesunuté = 34 000 £/rok

Realizovaná úspora = 34 000 £/rok plus ušetřené náklady na vývoj/provoz digitálního kanálu
  na 39 000 transakcích ≈ 34 000 £ + (39 000 × 0,30 £ digitálních
  nákladů již započtených) — zlomek titulkových 237 900 £, i když je služba
  pro uživatele stále jednoznačně lepší.
```

## Souvislost s softwarovým inženýrstvím

Inženýrské poučení je, že úspory z přesunu kanálů se realizují *provozními* rozhodnutími (rozvrhy směn, vyřazování, přejednání smluv), nikoli vydáním softwaru — tým může splnit každý bod [standardu digitální služby](../standard-digitální-služby/) a přesto nedodat nulovou čistou úsporu, pokud nikdo nevyřadí pevnou kapacitu starého kanálu. Instrumentace poptávky ze selhání (kde v digitální cestě uživatelé odcházejí a co dělají dál) je řešitelný problém analytiky trychtýře a jediná nejpůsobivější věc, kterou může inženýrský tým udělat k ochraně případu úspor; je to také přímý odkaz na [náklady na transakci](../náklady-na-transakci/), které poptávka ze selhání tiše nafukuje. Viz [realizace přínosů](../realizace-přínosů/) pro širší disciplínu ověřování, zda úspory byznys případu skutečně nastanou, a [digitální inkluze](../digitální-inkluze/), proč offline kanál obvykle nemůže a neměl by být zcela vyřazen.

## Úskalí

- **Předpoklad substituce kanálů 1:1**: modelování digitálního využití jako přímého odečtu od telefonního/přepážkového objemu, s ignorováním stínové poptávky a úniku poptávky ze selhání zdokumentovaných ve výzkumu přesunu kanálů místní správy.
- **Zahrnutí hrubých úspor před vyřazením**: započtení úspory do byznys případu v roce, kdy využití vzroste, a nikoli v roce (pokud vůbec), kdy je kapacita starého kanálu skutečně snížena.
- **Ignorování schodovité povahy nákladů na personál**: pokles objemu o 20 % se jen zřídka promění v pokles nákladů o 20 %, protože kontaktní centra a přepážky jsou obsazena diskrétními pásmy, nikoli spojitě.
- **Zacházení se stínovou poptávkou jako s plýtváním**: nové kontakty od dříve vyloučených nebo odrazených uživatelů jsou skutečným zvýšením [veřejné hodnoty](../veřejná-hodnota/), nikoli chybou modelování — mělo by se o nich vykazovat jako o výsledku přístupu, nikoli odečítat jako šum.

## Zdroje

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, zdroje k digitální transformaci a přesunu kanálů. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, výzkum digitálního náhledu místních veřejných služeb. <https://www.socitm.net/>
