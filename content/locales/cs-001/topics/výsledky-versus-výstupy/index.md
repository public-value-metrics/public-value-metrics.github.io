# Výsledky versus výstupy

Výstup je přímý, spočitatelný produkt aktivity — existuje ve chvíli, kdy dojde k dodání, bez ohledu na to, jaký má účinek. Výsledek je změna, která následuje pro dotčené lidi, místo nebo systém. „500 lidí se zúčastnilo workshopu hledání práce“ je výstup: je pravdivý, i kdyby práci nenašel nikdo z nich. „Vyhlídky na zaměstnání 500 lidí se zlepšily“ je tvrzení o výsledku a vyžaduje důkaz změny, nikoli jen důkaz účasti — záměna, která vytváří více zavádějících zpráv o grantech než téměř jakákoli jiná chyba měření v sektoru.

## Proč na tom záleží

Magenta Book ministerstva financí (HM Treasury) i poskytovatelé jako National Lottery Community Fund vyžadují výkaznictví výsledků právě proto, že výstupy jsou to, co programy vykazují ve výchozím stavu: je levné je počítat, jsou vždy k dispozici a vždy vypadají pozitivně. Počet výstupů nemůže doslova nikdy klesnout v důsledku selhání programu — více dodaných sezení je vždy „více“, zatímco výsledek může odhalit, že program nefunguje. National Audit Office opakovaně kritizoval vládní programy za vykazování úrovní aktivity, jako by byly důkazem úspěchu; softwarový systém, který usnadňuje jen vykazování výstupů, to ve výchozím nastavení posiluje, protože výstupy nevyžadují žádný následný sběr dat a výsledky ano.

## Matematika

Neexistuje vzorec, ale existuje spolehlivý test k zařazení metriky:

```
Test výstupu:  je spočitatelný v místě dodání, pravdivý i tehdy, když se příjemce nezměnil?
Test výsledku: vyžaduje srovnání před/po nebo s/bez, aby měl smysl?

Pokud číslo může být pravdivé při nulovém přínosu pro kohokoli, je to výstup.
```

To spadá do širšího řetězce [logického modelu](../logický-model/) a závisí na článcích výsledků definovaných v [teorii změny](../teorie-změny/); převedení výsledku na peníze využívá metody ze [sociální návratnosti investice](../sociální-návratnost-investice/).

## Praktický příklad

**Místní úřad (podpora zaměstnanosti)**: výstup — 500 lidí se zúčastnilo workshopů hledání práce. Výsledek — při 12měsíčním sledování je 140 z těchto 500 (28 %) ve stabilním zaměstnání (6+ měsíců). Srovnávací skupina s podobnými charakteristikami, ale bez přístupu k programu, má výchozí míru zaměstnanosti 15 % za stejné období. Čisté zvýšení výsledku: 28 % − 15 % = 13 procentních bodů, takže se odhaduje, že 500 × 0,13 = 65 dalších lidí je zaměstnáno, kteří by jinak nebyli — přisouditelný výsledek, odlišný jak od údaje o účasti 500, tak od surového počtu zaměstnaných 140.

**Charita (charita pro čtenářskou gramotnost)**: výstup — 1 200 čtenářských sezení dodaných 300 dětem. Výsledek — průměrný čtenářský věk se zlepšil o 8 měsíců za 6měsíční období, oproti očekávané přirozené progresi výchozího stavu 6 měsíců za 6 měsíců. Čistý zisk výsledku: 8 − 6 = 2 měsíce dodatečného zlepšení čtenářského věku na dítě přisouditelné programu, nikoli celých 8 měsíců.

## Souvislost s softwarovým inženýrstvím

Záznamy událostí a transakční systémy instrumentují výstupy téměř automaticky — zobrazení stránek, sezení, uzavřené tikety, rezervované schůzky — protože jsou generovány systémem při plnění jeho úkolu. Výsledky vyžadují datový model, který zachycuje téhož jednotlivce později v čase vůči základní hodnotě nebo srovnání, což musí být navrženo záměrně: následné průzkumy, propojené administrativní záznamy nebo srovnávací kohorta. Nástroj pro výkaznictví, který podporuje jen to první, nenápadně navádí organizaci k výkaznictví jen o výstupech bez ohledu na to, co poskytovatel požadoval. Viz [logický model](../logický-model/) pro to, kde výsledky v řetězci odpovědnosti sedí, [náklady na výsledek](../náklady-na-výsledek/) pro převedení tohoto rozlišení na metriku jednotkových nákladů a [KPI veřejného sektoru](../kpi-veřejného-sektoru/) pro širší vzorec výběru metrik.

## Úskalí

- **Vykazování výstupů, jako by byly výsledky.** „500 lidí se zúčastnilo“ naznačuje přínos, aniž by ho prokazovalo; označte účast výslovně jako výstup.
- **Žádná základní hodnota ani srovnávací skupina.** Údaj o výsledku bez kontrafaktuálu — viz [kontrafaktuální analýza](../kontrafaktuální-analýza/) — nedokáže oddělit účinek programu od toho, co by se stalo tak či tak.
- **Optimalizace pro financovanou metriku.** Když je financování vázáno na objem výstupů, dodávající týmy racionálně maximalizují účast na úkor trvalé změny — způsob selhání podle Goodhartova zákona.
- **Praní výsledků.** Přeznačení metriky výstupu jazykem znějícím jako výsledek („výsledky zapojení: 500 účastníků“) bez jakéhokoli následného měření za ním.

## Zdroje

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, pokyny k výkaznictví výsledků. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, metodika zpráv o hodnotě za peníze. <https://www.nao.org.uk/>
