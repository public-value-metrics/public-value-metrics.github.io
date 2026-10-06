# Hodnota kybernetické bezpečnosti veřejného sektoru

Hodnota kybernetické bezpečnosti veřejného sektoru je disciplína oceňování snížení rizika: čeho je hodno učinit únik dat občanů méně pravděpodobným, vzhledem k tomu, že výdaje na bezpečnost nevytvářejí žádný viditelný výstup, když fungují, a velmi viditelný, když selžou? Pro službu uchovávající záznamy o dávkách, zdravotní data nebo daňové záznamy je tato vlastnost „neviditelnosti, když funguje“ přesně důvodem, proč potřebuje výslovný argument hodnoty, nejen zaškrtnutí souladu.

## Proč na tom záleží

Cyber Assessment Framework (CAF) britského National Cyber Security Centre dává organizacím veřejného sektoru strukturovaný způsob, jak z bezpečnosti učinit hodnotitelnou disciplínu založenou na výsledcích, a nikoli kontrolní seznam: definuje čtyři obecné cíle (řízení bezpečnostních rizik, ochrana před kybernetickými útoky, detekce událostí kybernetické bezpečnosti a minimalizace dopadu incidentů) rozdělené na přispívající výsledky, vůči nimž lze vlastníka systému hodnotit, v témže duchu jako bod 9 [standardu digitální služby](../standard-digitální-služby/) („vytvořte bezpečnou službu, která chrání soukromí uživatelů“). Před čím hodnocení CAF chrání, má zdokumentovaný cenovku: zpráva IBM Cost of a Data Breach Report sleduje průměrné náklady úniku podle odvětví a soustavně zjišťuje, že veřejný sektor leží ke spodnímu konci rozsahu ve srovnání s financemi nebo zdravotnictvím — nedávná vydání uvádějí průměr veřejného sektoru zhruba 2,6–2,9 milionu dolarů na únik — ale „nižší než finance“ neznamená „nízké“ a úniky ve vládě nesou náklady, které čísla zprávy plně nezachycují: ztrátu důvěry občanů v digitální kanály, která snižuje [digitální využití](../úspory-z-přesunu-kanálů/), na němž závisejí byznys případy přesunu kanálů, a politické a právní náklady odhalení dat, která stát občany přinutil předat.

## Matematika

Investice do bezpečnosti se oceňují tak, jako jakékoli výdaje na snížení rizika: jako snížení očekávané ztráty, podle klasické identity řízení rizik.

```
Roční očekávaná ztráta (ALE) = Očekávaná jednotková ztráta (SLE)
                              × Roční četnost výskytu (ARO)

Hodnota bezpečnostní kontroly =
  ALE_před_kontrolou − ALE_po_kontrole − roční náklady kontroly

Kontrola stojí za financování, když:
  (ALE_před − ALE_po) > roční náklady kontroly

Hodnocení CAF přímo nevydává pravděpodobnost, ale profil výsledků CAF služby
(které přispívající výsledky jsou „dosaženy“, „částečně dosaženy“ nebo
„nedosaženy“) je rozumným zástupným vstupem pro odhad ARO — systém s nespravovaným
privilegovaným přístupem nebo bez otestovaného plánu reakce na incidenty má
podstatně vyšší reálné ARO než ten, který má obojí zavedeno.
```

## Praktický příklad

**Systém pro správu případů krajské rady uchovávající záznamy sociální péče pro 40 000 obyvatel**:

```
Očekávaná jednotková ztráta (náklady úniku), s použitím průměru veřejného
sektoru z nedávné zprávy IBM Cost of a Data Breach ≈ 2,1 mil. £
(převedená, řádově orientační cifra — vždy přepočítejte z aktuálního
vydání zprávy, místo abyste používali pevné číslo)

Současné ARO (nespravovaný privilegovaný přístup, netestovaná reakce na
incidenty, podle interního samohodnocení CAF s několika
„nedosaženými“ výsledky) ≈ odhadem 8 % ročně
  ALE_před = 2,1 mil. £ × 0,08 = 168 000 £/rok

Navrhovaná kontrola: správa privilegovaného přístupu + otestovaný plán
reakce na incidenty, převádějící příslušné výsledky CAF na „dosaženo“,
odhadem snižující ARO na 3 %/rok
  ALE_po = 2,1 mil. £ × 0,03 = 63 000 £/rok

Roční náklady kontroly (nástroje + proces + testování) = 45 000 £

Hodnota kontroly = (168 000 − 63 000) − 45 000 = 60 000 £/rok
  čistě kladná — financovat. Aritmetika také ukazuje, že kontrola by
  stále stála za financování při téměř trojnásobných nákladech, což je
  druh kontroly citlivosti, který by měl doprovázet každé číslo ALE
  postavené na odhadovaných pravděpodobnostech.
```

## Souvislost s softwarovým inženýrstvím

Inženýři vlastní většinu pák v rovnici ALE: návrh řízení přístupu, hygiena závislostí a záplat, pokrytí logováním a detekcí a nástroje reakce na incidenty — vše přímo posouvá člen ARO, což je důvod, proč se hodnocení CAF čte jako technický přezkum architektury stejně jako audit politiky. Je to [technický dluh jako eroze veřejné hodnoty](../technický-dluh-jako-eroze-veřejné-hodnoty/) v nejakutnější podobě — nezáplatované, nemonitorované, špatně přístupově kontrolované systémy jsou dluh, jehož úrok se platí rizikem chvostu, nikoli stálým brzděním — a mělo by být sladěno s [celkovými náklady vlastnictví ve vládním IT](../celkové-náklady-vlastnictví-ve-vládním-it/), aby výdaje na bezpečnost nebyly považovány za oddělené od skutečných provozních nákladů systému. Je to také přímý vstup do hodnocení [hodnoty za peníze](../hodnota-za-peníze/) podle Green Booku: náklady upravené o riziko jsou součástí strany „nákladů“ každého hodnocení variant, nikoli dodatek připojený na konci.

## Úskalí

- **Zacházení se samohodnocením CAF jako se samotnou bezpečností**: dokončené hodnocení popisuje bezpečnostní postoj, ale nevytváří ho — hodnota je v dosažených výsledcích, nikoli v dokumentu.
- **Používání globálních průměrných nákladů úniku jako místního odhadu bez úpravy**: čísla IBM jsou průměry napříč velkými, různorodými vzorky; reálné očekávání jednotkové ztráty malého místního úřadu se jen zřídka rovná národnímu vládnímu resortu.
- **Ignorování psychologie chvostových rizik v investičních rozhodnutích**: nízká roční pravděpodobnost usnadňuje odkládat výdaje na bezpečnost donekonečna, až do roku, kdy se nestane — testování citlivosti výpočtu ALE vůči rozsahu ARO, jako v praktickém příkladu, tomu čelí.
- **Započítání jen nákladů úniku ve stylu IBM, nikoli nákladů důvěry**: únik, který snižuje ochotu občanů používat digitální kanály, eroduje případ [úspor z přesunu kanálů](../úspory-z-přesunu-kanálů/) po léta, náklad, který je v odhadech nákladů úniku zřídka zahrnut.

## Zdroje

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, bod 9: vytvořte bezpečnou službu, která chrání soukromí uživatelů. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
