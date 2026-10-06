# Výkaznictví výsledků grantů (IRIS+)

Výkaznictví výsledků grantů je praxe, kdy příjemci grantů hlásí poskytovatelům standardizované, srovnatelné metriky výsledků — na rozdíl od situace, kdy si každý poskytovatel vymýšlí vlastní zakázkovou šablonu výkaznictví. IRIS+, udržovaný Global Impact Investing Network (GIIN), je nejširší přijímaný takový standard: katalog předem definovaných sociálních, environmentálních a finančních metrik výkonnosti, které dopadoví investoři a stále častěji i grantové nadace vyžadují nebo doporučují příjemcům používat.

## Proč na tom záleží

Před standardizovaným výkaznictvím žádala každá nadace od příjemců jinou sadu ukazatelů v jiném formátu a středně velká charita s deseti poskytovateli mohla vést deset paralelních procesů výkaznictví pro překrývající se práci — dobře zdokumentovaný hybatel zátěže výkaznictví, kterou má standardizace výsledků grantů snižovat. IRIS+ to řeší tím, že dává poskytovatelům a příjemcům sdílený slovník: Základní sady metrik (Core Metrics Sets) seskupené podle tématu (např. dostupné bydlení, přístup k čisté energii, finanční inkluze), každá metrika definovaná dostatečně přesně, aby „vytvořená pracovní místa“ nebo „obsloužené domácnosti“ znamenaly totéž, ať je vykazuje kdokoli, a sladěné s Cíli udržitelného rozvoje OSN, aby poskytovatel mohl data na úrovni příjemce sloučit do narativu SDG na úrovni portfolia. GIIN uvádí, že metriky IRIS používá zhruba polovina dopadových investorů a velká většina správců fondů, bank a rozvojových finančních institucí aktivních v oboru.

Standardizace je nejdůležitější tam, kde interaguje s [výsledky versus výstupy](../výsledky-versus-výstupy/): IRIS+ tlačí výkaznictví k definovaným metrikám výsledků a dopadu místo čehokoli, co stávající systém pro správu případů příjemce náhodou zaznamenává, což je přesně mezera, kterou popisuje [náklady na výsledek](../náklady-na-výsledek/) versus [náklady na příjemce](../náklady-na-příjemce/).

## Matematika

Výkaznictví výsledků grantů je rámec a proces, nikoli vzorec:

```
1. Poskytovatel vybere Základní sadu metrik relevantní pro téma grantu
   (např. IRIS+ „Finanční inkluze“ nebo „Udržitelné zemědělství“)
2. Každá metrika má pevnou definici, jednotku a metodu výpočtu
   zveřejněnou GIIN — ne vymyšlenou pro každého poskytovatele
3. Příjemce vykazuje vůči týmž definicím metrik napříč všemi
   svými poskytovateli používajícími tento standard, čímž se snižuje duplicitní úsilí o výkaznictví
4. Poskytovatel agreguje metriky na úrovni příjemců do výkaznictví na úrovni portfolia,
   srovnatelného meziročně a napříč příjemci používajícími tutéž metriku
```

Zisk efektivity je kombinatorický: standardizace N poskytovatelů × M příjemců na jeden sdílený slovník mění N×M zakázkových vztahů výkaznictví na zhruba N+M mapování vůči jednomu standardu.

## Praktický příklad

**Příjemce se třemi poskytovateli, před standardizací**: hlásí „obsloužené osoby“ poskytovateli 1 podle definice počtu hlav, „oslovené příjemce“ poskytovateli 2 podle definice domácnosti a „zasažené jednotlivce“ poskytovateli 3 podle definice epizody služby (takže jedna osoba navštěvující dvakrát se počítá dvakrát). Tři zprávy, tři čísla, žádné nesrovnatelné, a žádné nesrovnatelné s čísly jiného příjemce ani v rámci portfolia téhož poskytovatele.

**Tentýž příjemce pod IRIS+**: vykazuje vůči definované metrice IRIS+ oslovených jednotlivců spolu s definovanou metrikou výsledku z příslušné Základní sady metrik, s použitím zveřejněné metodiky výpočtu GIIN pro obojí. Všichni tři poskytovatelé nyní dostávají totéž číslo vypočtené stejným způsobem a mohou porovnat náklady tohoto příjemce na jednotku definovanou v IRIS+ s jinými příjemci ve svém portfoliu pomocí identické metriky — ekvivalent, v měřítku infrastruktury výkaznictví, sdílené [databáze jednotkových nákladů](../databáze-jednotkových-nákladů/).

## Souvislost s softwarovým inženýrstvím

Platformy pro správu grantů by měly s identifikátory metrik IRIS+ zacházet jako s cizím klíčem, nikoli volným textem: uložení zveřejněného kódu metriky vedle hlášené hodnoty příjemce (místo lokálně vymyšleného pole zvaného „příjemci“) umožňuje pozdější agregaci napříč poskytovateli a portfolii bez projektu čištění dat. Kde musí platforma podporovat poskytovatele, kteří IRIS+ nepřijali, pragmatickým návrhem je nechat lokální metriku namapovat na nejbližší definici IRIS+ místo nucení každého poskytovatele k okamžitému přechodu na standard — srovnatelnost se zlepšuje postupně, jak se více grafu mapuje na sdílené identifikátory. Viz příbuzné téma [náklady na výsledek](../náklady-na-výsledek/), k čemu by měla být hlášená čísla použita po jejich shromáždění.

## Úskalí

- **Zacházení s přijetím IRIS+ jako s automatickou srovnatelností.** Dva příjemci mohou oba vykazovat vůči téže metrice IRIS+ a přesto nebýt srovnatelní, pokud se liší jejich podkladová kvalita dat nebo kontrafaktuální předpoklady; standard fixuje definice, nikoli přísnost měření.
- **Metriky „sladěné s IRIS“ vymyšlené poskytovatelem.** Metrika, která je pouze inspirovaná jazykem IRIS+, ale nikoli skutečnou zveřejněnou definicí, znovu zavádí fragmentaci, kterou má standard řešit.
- **Únava z výkaznictví z nadměrného výběru.** Vyžadování, aby příjemce vykazoval vůči celé Základní sadě metrik, když jsou pro rozhodování relevantní jen dvě až tři metriky, znovu vytváří problém zátěže ve standardizovaném obalu.
- **Žádná metrika výsledku vůbec.** IRIS+ obsahuje mnoho čistých metrik výstupů (např. počty obsloužených osob); výběr jen těch, a žádné z metrik úrovně výsledků, vytváří výkaznictví ve tvaru [nákladů na příjemce](../náklady-na-příjemce/) pod označením výkaznictví výsledků.

## Zdroje

- GIIN, systém IRIS+. <https://iris.thegiin.org/>
- GIIN, katalog metrik IRIS+. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
