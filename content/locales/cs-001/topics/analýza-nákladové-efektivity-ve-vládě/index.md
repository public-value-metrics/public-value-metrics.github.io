# Analýza nákladové efektivity ve vládě

Analýza nákladové efektivity (CEA) porovnává náklady alternativních způsobů dosažení *téhož* výsledku, vyjádřeného v přirozených jednotkách — náklady na jednoho ubytovaného bezdomovce spícího na ulici, náklady na žáka dovedeného na očekávanou úroveň, náklady na tunu odvrácených emisí CO2 — aniž by se samotný výsledek převáděl na peníze.

## Proč na tom záleží

Green Book považuje CEA za záložní metodu, když požadavek [sociální analýzy nákladů a přínosů](../sociální-analýza-nákladů-a-přínosů/) peněžně vyjádřit každý přínos nejen obtížný, ale nepoctivý — kde by věrohodné ocenění výsledku vyžadovalo předpoklady, které nikdo skutečně nezastává (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, kapitola 5, o hodnocení variant, kde výsledky nelze snadno peněžně vyjádřit). CEA je metoda přejatá nejpřímočařeji ze zdravotnické ekonomie — je strukturálně totožná s tím, jak NICE porovnává léčby pomocí nákladů na rok života upravený o kvalitu (QALY) — ale aplikovaná na nezdravotnické veřejné programy: vzdělávací intervence na bod výsledku žáka, bytové programy na domácnost uchráněnou před bezdomovectvím, zaměstnanecké programy na udržitelný pracovní výsledek.

Důvod, proč si CEA zaslouží místo vedle SCBA a není jí pohlcena, je, že vynucení peněžní hodnoty u některých výsledků vytváří číslo dostatečně přesné, aby vypadalo autoritativně, a dostatečně sporné, aby bylo ve veřejné debatě bezcenné — stanovení ceny „dítěte čtoucího na očekávané úrovni“ vyzývá právě k takové výzvě, která na parlamentním výboru vykolejí byznys případ. CEA se sporu vyhne tím, že ho odmítne vést: řadí varianty podle nákladů na jednotku *samotného výsledku* a oddělený politický úsudek o tom, zda stojí výsledek vůbec za sledování, ponechává strategickému případu.

## Matematika

```
Poměr nákladové efektivity (průměrný) = Celkové náklady / Celkové dosažené jednotky výsledku

Inkrementální poměr nákladové efektivity (ICER), porovnání varianty A s variantou B:
ICER = (Náklad_A − Náklad_B) / (Výsledek_A − Výsledek_B)

Postup:
1. Stanovte jednotku výsledku a metodu měření shodně pro všechny porovnávané varianty.
2. Oceňte každou variantu na stejném základě (viz ../green-book-appraisal/, finanční případ)
   za stejný časový horizont.
3. Vyřaďte dominované varianty: každá varianta, která stojí na jednotku víc než
   levnější alternativa dosahující stejného či lepšího výsledku, se vypouští.
4. Zbývající varianty řaďte podle inkrementálního, nikoli průměrného poměru nákladové efektivity.
```

CEA sama o sobě nemůže říct, zda stojí program vůbec za financování — jen která z několika cest ke stejnému cíli je na jednotku nejlevnější. K rozhodnutí, zda cíl sám stojí za výdaj, je třeba buď převést zpět na SCBA (pokud existuje věrohodné ocenění), nebo politický/strategický úsudek mimo matematiku. Kde výsledky skutečně nelze zredukovat na jednu jednotku — protože program produkuje několik výsledků, jež záleží různými způsoby — použijte místo toho [vícekriteriální analýzu rozhodování](../vícekriteriální-analýza-rozhodování/).

## Praktický příklad

**Místní úřad**: město porovnává tři přístupy ke snižování počtu lidí spících na ulici, každý oceněný na jeden rok vůči výsledku „jednotlivci přestěhovaní do stabilního ubytování na 6+ měsíců“:

```
Varianta                          Náklady    Dosažené výsledky   Prům. CER
Housing First (intenzivní)        900 000 £  60                  15 000 £/výsledek
Ubytovna + podpora při odchodu    600 000 £  50                  12 000 £/výsledek
Terénní práce + soukromé nájmy    350 000 £  20                  17 500 £/výsledek

ICER, Ubytovna vs. Terénní práce:  (600k−350k)/(50−20) = 8 333 £ na dodatečný výsledek
ICER, Housing First vs. Ubytovna:  (900k−600k)/(60−50) = 30 000 £ na dodatečný výsledek
```

Terénní práce je v průměrných nákladech dominována ubytovnou, ale *inkrementální* krok od terénní práce k ubytovně stojí jen 8 333 £ na každého dodatečně ubytovaného — levně vzhledem ke kroku k Housing First, který stojí 30 000 £ za každého dalšího člověka nad rámec toho, čeho dosahuje ubytovna. Úřad s omezeným rozpočtem při rozšiřování by měl preferovat rozšíření ubytovny před Housing First, přestože Housing First vypadá lépe ve svém vlastním průměrném poměru.

**Národní vláda**: program doháněcí výuky čtení se porovnává ve třech modelech dodání podle „nákladů na žáka dosahujícího věkem očekávané úrovně čtení“: individuální doučování (1 800 £/žák), doučování v malých skupinách (700 £/žák) a pouze digitální intervence (150 £/žák, ale jen 40 % míry výsledku doučování v malých skupinách na zapsaného žáka po úpravě o pokles zapojení). Po úpravě o skutečné dokončení stojí pouze digitální 375 £ na žáka dosahujícího úrovně — stále nejlevnější, ale CEA nemůže říct, zda je menší absolutní počet žáků, jimž pomůže pouze digitální řešení, při stejném rozpočtu jako malé skupiny přijatelným kompromisem proti oslovení menšího počtu žáků do větší hloubky; to je distribuční úsudek, který CEA vrací rozhodovatelům.

## Souvislost s softwarovým inženýrstvím

CEA je správný rámec, kdykoli inženýrské týmy hodnotí přístupy dodání pro *tentýž* výsledek služby — náklady na úspěšně ověřenou identitu u tří dodavatelů ověřování identity, náklady na správně roztříděný případ u dvou návrhů automatizace práce s případy, náklady na vyřešenou vadu přístupnosti u vlastní versus zakázané nápravy. Disciplína, kterou přímo importuje: definujte jednotku výsledku před porovnáním nákladů (ne „uzavřené tikety“ — výstup — ale „skutečně vyřešená potřeba uživatele“) a vždy počítejte inkrementální poměr mezi provozovaným systémem a navrhovanou náhradou, nikoli průměrné náklady každého systému izolovaně. Viz [výsledky versus výstupy](../výsledky-versus-výstupy/) a [náklady na výsledek](../náklady-na-výsledek/).

## Úskalí

- **Porovnávání průměrných, nikoli inkrementálních poměrů při rozhodování o rozšíření.** Jak ukazuje příklad spaní na ulici, varianta s nejlepším průměrným poměrem není vždy nejlevnější další jednotkou výsledku k nákupu.
- **Volba jednotky výsledku, která je ve skutečnosti výstupem.** „Provedená doporučení“ či „poskytnutá sezení“ měří aktivitu, nikoli výsledek, kvůli kterému program existuje; CEA na výstupech vytváří sebejistě vypadající číslo, které odpovídá na špatnou otázku.
- **Porovnávání napříč skutečně odlišnými výsledky.** CEA je platná jen tehdy, když každá varianta cílí na tentýž výsledek měřený stejným způsobem; srovnání „náklady na ubytovaného bezdomovce“ s „náklady na mladého opouštějícího péči ve stabilním nájmu“ potřebuje generickou míru výsledku nebo [vícekriteriální analýzu rozhodování](../vícekriteriální-analýza-rozhodování/), nikoli CEA.
- **Ignorování trvanlivosti výsledku.** Levnější varianta, která vytváří výsledky, jež nepřetrvávají (žák, který po skončení intervence regreduje), není ve skutečnosti nákladově efektivnější, měřeno za srovnatelný horizont; sladte období následného sledování napříč porovnávanými variantami.

## Zdroje

- HM Treasury. „The Green Book: appraisal and evaluation in central government.“ 2022, kapitola 5. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. „Developing NICE guidelines: the manual“ — metoda nákladové efektivity, z níž tato vládní adaptace čerpá. <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Důkazy o nákladové efektivitě intervencí proti bezdomovectví. <https://whatworks-homelessness.org.uk/>
