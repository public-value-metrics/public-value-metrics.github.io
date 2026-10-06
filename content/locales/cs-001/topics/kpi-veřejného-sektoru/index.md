# KPI veřejného sektoru

Klíčový ukazatel výkonnosti (KPI) je zvolená, sledovaná míra, která zastupuje to, zda veřejná služba dobře plní svůj úkol. Ve vládě není volba KPI nikdy neutrální: protože se KPI vážou na rozpočty, žebříčky a kariéry, akt jejich výběru formuje chování všech, kdo se za ním nacházejí, často více než politika, která službu vytvořila.

## Proč na tom záleží

Pozorování Charlese Goodharta o měnové politice z roku 1975 — později zpopularizované Marilyn Strathernovou jako „když se míra stane cílem, přestane být dobrou mírou“ — je jediným nejdůležitějším varovným štítkem v řízení výkonnosti veřejného sektoru. KPI zvolený k *popisu* systému začne tento systém *zkreslovat* v okamžiku, kdy je na něj vázáno zdroje, odměňování nebo politické přežití. Kanonickou ilustrací jsou doby odezvy sanitek NHS: když se osmiminutový cíl odezvy kategorie A stal závazným, ukázalo se, že některé trusty „stohovaly“ sanitky těsně mimo hodiny doby odezvy nebo překlasifikovávaly hovory, aby číslo splnily, aniž by změnily výsledky pacientů. Pokyny britského National Audit Office k výběru a používání ukazatelů výkonnosti — uvedené napříč jeho zprávami o hodnotě za peníze a jeho rámci „Performance Measurement by Regulators“ a „Choosing the Right FABRIC“ (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) — existují právě proto, že resorty stále vybíraly ukazatele, které se snadno vykazují, nikoli ukazatele, které se těžko zmanipulují. Softwarový inženýr, který dodá dashboard, podle kterého bude posuzován ministr nebo ředitel, navrhuje — ať chce, nebo ne — motivační strukturu veřejné instituce.

## Matematika

Návrh KPI je téma ve tvaru rámce, ale *hodnocení* kandidátního KPI je opakovatelný kontrolní seznam, nikoli vzorec:

```
Pro každý kandidátní KPI ohodnoťte vůči:
  Fit for purpose  — měří výsledek, nebo zástupný ukazatel o několik kroků vzdálený?
  Appropriate      — patří lidem, kteří ho skutečně mohou ovlivnit?
  Balanced         — je spárován s protimetrikou, která zachytí manipulaci?
  Robust           — přežije audit, nebo je hlášen sám a neověřitelný?
  Integrated       — zapadá do širší sady, nebo tlačí proti jinému KPI?
  Cost-effective   — nestojí jeho sběr více než rozhodnutí, které informuje?

Rozdělení na předstihové a zpožděné:
  Předstihový ukazatel → předpovídá budoucí výsledek, ale často zmanipulovatelný (např. hovory vyřízené <60 s)
  Zpožděný ukazatel    → potvrzuje, že výsledek nastal, ale přichází příliš pozdě k řízení
                          (např. roční průzkum spokojenosti)
  Obhajitelná sada KPI spáruje alespoň jeden z každého na cíl.
```

## Praktický příklad

**Záchranná služba**: trust vykazuje KPI doby odezvy kategorie A (ohrožení života) „75 % hovorů obslouženo do 8 minut“. V jednom čtvrtletí přijde 6 000 hovorů kategorie A; 4 500 je splněno do 8 minut, což dává 75,0 % — zdánlivě v cíli.

```
Titulkový KPI = 4 500 / 6 000 × 100 = 75,0 %  (splňuje práh 75 %)
```

Ale audit podle Goodharta přidá protimetriku: průměrná doba odezvy nejpomalejších 10 % hovorů.

```
Průměrná odezva nejpomalejšího decilu = 34 minut (nárůst z 19 minut před dvěma lety)
```

Trust plní cíl, zatímco chvost — hovory, které nejpravděpodobněji ohrožují život, když je třídění nedokonalé — se výrazně zhoršil, protože posádky jsou směrovány k hovorům blízkým osmiminutovému útesu spíše než podle klinické naléhavosti. Jediný KPI vyprávěl falešný příběh; spárovaný KPI řekl pravdu.

## Souvislost s softwarovým inženýrstvím

Inženýři budující výkonnostní dashboardy pro vládu funkčně navrhují motivační API organizace. Praktické důsledky: instrumentujte *jmenovatele* stejně důsledně jako čitatele (KPI vykazovaný jako holé procento zve k manipulaci jmenovatele — viz [náklady na transakci](../náklady-na-transakci/) pro stejnou past v digitálních službách); zabudujte protimetriky do téhož dashboardu místo do samostatné zprávy, kterou nikdo nečte, aby byla manipulace viditelná v místě rozhodnutí; a verzujte definici KPI, protože tichá předefinování (změna toho, co se počítá jako „hovor“, „případ“ nebo „dokončení“) je funkčně ekvivalentní změně cíle bez oznámení. [Karta skóre veřejné hodnoty](../karta-skóre-veřejné-hodnoty/) je jedním strukturovaným způsobem, jak zabránit čtení jediného KPI izolovaně, a [odpovědnost založená na výsledcích](../odpovědnost-založená-na-výsledcích/) je disciplína výběru KPI na úrovni populace, které jediný tým nemůže jednostranně zkreslit.

## Úskalí

- **Výběr snadno sbíraného ukazatele před smysluplným**: čas vyřízení hovoru je triviální zaznamenat; zda hovor vyřešil problém občana, není — ale jen druhé je výsledek. Odolejte výchozímu přístupu k tomu, co systém již vysílá.
- **Žádná protimetrika**: jakýkoli KPI vázaný na peníze nebo reputaci bude na okraji zmanipulován; dodejte jej s párovým ukazatelem, který zachytí pravděpodobný vektor manipulace, před zveřejněním.
- **Předefinování metriky bez protokolu změn**: záměna „přijatých hovorů“ za „vyřízené hovory“ k vylepšení trendu ničí věrohodnost časové řady ve chvíli, kdy je objevena — vždy zveřejňujte protokol změn definic vedle čísel.
- **Záměna aktivity s výsledkem**: počet dokončených inspekcí je výstup; počet prostor uvedených do souladu je blíže výsledku (viz [výsledky versus výstupy](../výsledky-versus-výstupy/)).

## Zdroje

- National Audit Office, „Choosing the Right FABRIC: A Framework for Performance Information.“ <https://www.nao.org.uk/>
- Marilyn Strathern, „‚Improving Ratings‘: Audit in the British University System,“ *Social Anthropology*, 1997 (formulace Goodhartova zákona, jak se běžně cituje).
- National Audit Office, šetření výkaznictví výkonnosti záchranných služeb NHS. <https://www.nao.org.uk/>
