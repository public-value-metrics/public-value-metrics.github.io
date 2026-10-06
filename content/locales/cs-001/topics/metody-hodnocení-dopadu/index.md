# Metody hodnocení dopadu

Metody hodnocení dopadu jsou statistické a experimentální návrhy používané k odhadu toho, co politika nebo program skutečně způsobily, na rozdíl od toho, co by se stalo tak či tak — randomizované kontrolované pokusy (RCT), rozdíl rozdílů, párování podle skóre sklonu a návrh regresní diskontinuity jsou čtyři nejčastěji používané v britské veřejné politice. Existují proto, že většinu vládních intervencí nelze testovat v laboratoři: nelze randomizovat, které město dostane novou autobusovou linku, tak jako lze randomizovat, který pacient dostane lék, a proto tyto metody přejímají stejnou kauzální logiku, aniž vždy vyžadují náhodné přiřazení.

## Proč na tom záleží

Magenta Book ministerstva financí (HM Treasury), příloha A o kvazi-experimentálních metodách, je kanonickým pokynem britské vlády k volbě mezi těmito návrhy a orgány jako Education Endowment Foundation a What Works Centre for Local Economic Growth institucionalizují hierarchii důkazů postavenou kolem nich — RCT, kde je randomizace proveditelná a etická, kvazi-experimentální návrhy, kde není. Volba metody není technický dodatek: určuje, zda hodnocení může odpovědět na „způsobil to program?“, nebo jen na „stalo se to poté, co program začal?“, což je táž otázka, kterou je [kontrafaktuální analýza](../kontrafaktuální-analýza/) postavena nutit praktiky klást dříve, než je zadáno jakékoli hodnocení.

## Matematika

```
RCT:
  Dopad = průměr(výsledek | léčená skupina) − průměr(výsledek | kontrolní skupina)
  (platné, protože přiřazení k léčbě je náhodné)

Rozdíl rozdílů (DiD):
  Dopad = [výsledek_po(léčení) − výsledek_před(léčení)]
        − [výsledek_po(kontrola) − výsledek_před(kontrola)]
  (vyžaduje předpoklad „paralelních trendů“: léčená a kontrolní skupina by se
   bez intervence vyvíjely společně)

Párování podle skóre sklonu (PSM):
  1. Odhadněte P(léčba = 1 | kovariáty X) pro každou jednotku → skóre sklonu
  2. Spárujte léčené jednotky s neléčenými jednotkami s podobným skóre sklonu
  3. Dopad = průměr(výsledek | léčení) − průměr(výsledek | spárovaná kontrola)

Návrh regresní diskontinuity (RDD):
  Dopad = skok ve výsledku pozorovaný na prahu způsobilosti,
          porovnáním jednotek těsně nad a těsně pod hranicí
```

## Praktický příklad

**Místní úřad (rozdíl rozdílů pro program problémových rodin)**: výsledkem je školní docházka. Léčená oblast se posune z 84 % na 89 % docházky (+5 procentních bodů) během období programu; srovnatelná, ale neléčená oblast se posune z 85 % na 87 % (+2 procentní body) ve stejném období. Odhad dopadu DiD: 5 − 2 = +3 procentní body přisouditelné programu. Aplikováno na kohortu 2 000 žáků v léčené oblasti to odpovídá zhruba 60 dalším žákům (3 % × 2 000) dosahujícím vyšší kategorie docházky, extrapolace, která by měla být uvedena s výhradou paralelních trendů, nikoli jako přesný počet.

**Charita (párování podle skóre sklonu pro charitu zaměřenou na zaměstnatelnost)**: 300 účastníků programu je spárováno s 300 jednotlivci z většího administrativního souboru dat pomocí skóre sklonu vytvořených z věku, předchozí historie zaměstnání a úrovně kvalifikace. Míra zaměstnanosti po dvanácti měsících: spárovaná léčená skupina 46 %, spárovaná srovnávací skupina 33 %. Odhad dopadu PSM: 46 % − 33 % = +13 procentních bodů přisouditelných programu, za podmínky, že žádný nepozorovaný zavádějící faktor (jako motivace) neřídí účast i výsledek.

## Souvislost s softwarovým inženýrstvím

Zda je kterýkoli z těchto návrhů později proveditelný, silně závisí na datově-inženýrských rozhodnutích učiněných brzy. RDD potřebuje přesně zaznamenanou běžící proměnnou a skutečně čistý práh způsobilosti; DiD potřebuje srovnatelná panelová data v čase pro léčené i srovnávací oblasti, což znamená konzistentní spojení napříč systémy a roky; PSM potřebuje bohatá data základních kovariát zachycená před léčbou, nikoli rekonstruovaná poté. Datový model navržený od začátku vedle [teorie změny](../teorie-změny/) a [logického modelu](../logický-model/) — zachycující základní kovariáty, data a záznamy způsobilé pro srovnávací skupinu — je to, co umožňuje přísné hodnocení dopadu později, místo nákladného dodatečného shánění. Viz [hodnocení dopadu versus hodnocení procesu](../hodnocení-dopadu-versus-hodnocení-procesu/) pro doplňkovou otázku, na kterou tyto metody samy neodpovídají.

## Úskalí

- **Vynucování RCT tam, kde je neproveditelné nebo neetické**, nebo naopak nikdy nezvažování kvazi-experimentálního návrhu, když byla k dispozici skutečná příležitost — politická hranice, postupné zavádění — a zůstala nevyužita.
- **Ignorování předpokladu paralelních trendů v DiD.** Pokud se srovnávací oblast již před intervencí odchylovala od léčené, je srovnání dvou bodů kontaminováno; kontrolujte předchozí trendy, nejen před/po.
- **Párování pouze podle pozorovaných kovariát v PSM.** Nepozorovaná selekce, jako je motivace účastníků, může zkreslit odhad i tehdy, když jsou pozorované kovariáty dobře vyvážené.
- **Manipulace s běžící proměnnou v RDD.** Pokud lidé mohou ovlivnit své skóre tak, aby spadlo těsně dovnitř prahu způsobilosti, diskontinuita již neizoluje kauzální účinek.

## Zdroje

- HM Treasury, Magenta Book (2020), příloha A: Kvazi-experimentální metody. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, metodika přehledu důkazů. <https://whatworksgrowth.org/>
- Education Endowment Foundation, pokyny k hodnocení. <https://educationendowmentfoundation.org.uk/>
