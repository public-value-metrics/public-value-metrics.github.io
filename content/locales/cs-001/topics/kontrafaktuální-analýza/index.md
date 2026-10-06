# Kontrafaktuální analýza

Kontrafaktuál je odhad toho, co by se stalo bez intervence. Bez něj nelze pozorovanou změnu po spuštění programu odlišit od změny, která by nastala tak či tak — žádný kontrafaktuál, žádný důkaz účinku, ať jsou čísla před a po sebelákavější. Magenta Book ministerstva financí (HM Treasury) považuje konstrukci věrohodného kontrafaktuálu za ústřední metodický úkol hodnocení dopadu, důležitější než jakékoli jiné jednotlivé designové rozhodnutí.

## Proč na tom záleží

„Kriminalita klesla o 15 % v roce po zavedení programu“ není důkazem, že program fungoval, dokud nevíte, co by se s kriminalitou stalo bez něj — kriminalita mohla klesnout o 20 % tak či tak kvůli nesouvisejícím ekonomickým či demografickým trendům, což by znamenalo, že program ve skutečnosti věci zhoršil vzhledem ke kontrafaktuálu, přestože surové číslo se zlepšilo. To je nejběžnější analytická chyba v tvrzeních o dopadu ve veřejném a sociálním sektoru: zaměnit srovnání před a po za důkaz kauzality. Magenta Book výslovně uvádí, že hodnocení dopadu existuje, aby odpovědělo na kontrafaktuální otázku — „jaký rozdíl tato intervence způsobila?“ — a že odpověď vyžaduje odhadnout, nejen popsat, svět, který nenastal.

Různé metody konstruují kontrafaktuál s různou mírou jistoty a vládní evaluační pokyny je podle toho řadí. Randomizované kontrolované pokusy (RCT), kde jsou jednotlivci nebo oblasti náhodně přiřazeni k obdržení intervence či nikoli, vytvářejí nejsilnější kontrafaktuál, protože randomizace zajišťuje, že se léčená a kontrolní skupina liší v průměru jen tím, že dostaly intervenci. Cabinet Office a What Works Network prosazují RCT napříč britskou veřejnou politikou od zprávy „Test, Learn, Adapt“ od Behavioural Insights Team z roku 2012 právě proto, že slabší návrhy jsou zranitelné vůči zavádějícím vlivům (confounding) — pozorovaný rozdíl může odrážet to, kdo se rozhodl účastnit, nikoli účinek programu. Kde je randomizace nepraktická nebo neetická (jak tomu často je u programů se zákonným nárokem či změn politiky pro celou populaci), stanoví Magenta Book výslovnou hierarchii slabších, ale stále užitečných alternativ: spárované srovnávací skupiny, návrhy rozdílu rozdílů (difference-in-differences), regresní diskontinuita kolem prahů způsobilosti a jako poslední možnost prosté srovnání před a po — jasně označené jako nejslabší forma důkazu, náchylná k záměně účinku programu s účinkem všeho ostatního, co se současně změnilo.

## Matematika

Kontrafaktuální rámování, použitelné napříč všemi metodami:

```
Odhadovaný dopad = Výsledek(s intervencí) − Výsledek(kontrafaktuál: bez intervence)

NIKOLI:
Odhadovaný dopad ≠ Výsledek(po) − Výsledek(před)   [zaměňuje čas s léčbou]
```

Rozdíl rozdílů, jeden z nejběžnějších kvazi-experimentálních návrhů ve vládním hodnocení, izoluje účinek léčby odečtením vlastní změny před/po u srovnávací skupiny:

```
Odhad DiD = [Výsledek(léčení, po) − Výsledek(léčení, před)]
          − [Výsledek(srovnání, po) − Výsledek(srovnání, před)]
```

Tím se odstraní jakýkoli trend společný oběma skupinám (např. národní ekonomický posun ovlivňující všechny), takže zbude jen rozdílová změna přisouditelná intervenci.

## Praktický příklad

**Zaměstnanecký program, před/po (slabý návrh)**: program podpory zaměstnání hlásí, že zaměstnanost účastníků vzrostla ze 40 % na 55 % za rok — naivní závěr „+15 procentních bodů díky programu“.

**Tentýž program, rozdíl rozdílů (silnější návrh)**: spárovaná srovnávací skupina podobných neúčastníků ze stejného místního trhu práce ukazuje nárůst zaměstnanosti z 38 % na 47 % za týž rok (probíhalo celostátní hospodářské oživení).

```
Změna léčené skupiny:      55 % − 40 % = +15 procentních bodů
Změna srovnávací skupiny:  47 % − 38 % = +9 procentních bodů

Odhad DiD (skutečný účinek programu) = 15 − 9 = +6 procentních bodů
```

Poctivě přisouditelný účinek je 6 procentních bodů, nikoli 15 — více než polovina zdánlivého zlepšení před/po by nastala bez ohledu na program, poháněna tímtéž ekonomickým oživením, které zvedlo srovnávací skupinu.

**Regresní diskontinuita, práh způsobilosti**: grantové schéma je dostupné jen podnikům s méně než 50 zaměstnanci. Srovnání výsledků podniků těsně pod prahem (45–49 zaměstnanců, způsobilé) s podniky těsně nad ním (50–54 zaměstnanců, nezpůsobilé) poskytuje věrohodný kontrafaktuál, protože podniky na obou stranách svévolné administrativní hranice jsou jinak podobné — práh, nikoli nějaká podkladová charakteristika podniku, určuje způsobilost. Rozdíl průměrných výsledků 2 000 £ mezi oběma skupinami, pozorovaný jen na prahu, je přisouditelný grantu s mnohem větší jistotou než prosté srovnání všech způsobilých a všech nezpůsobilých podniků (které se systematicky liší velikostí).

## Souvislost s softwarovým inženýrstvím

Kontrafaktuální myšlení by mělo formovat návrh systémů pro sledování dopadu a evaluačních potrubí pro vládní a sociální software:

- Zabudujte zachycování srovnávací skupiny do systému od začátku — zaznamenejte, kdo byl způsobilý, ale nebyl zapsán, nebo spárovanou kohortu neúčastníků — místo dodatečného doplnění poté, co program již proběhl a existují jen data před/po.
- Kde je randomizace proveditelná (postupné zavádění, digitální služba zapnutá některým uživatelům dříve než jiným), vybavte systém tak, aby zachoval náhodné přiřazení jako dotazovatelné pole; postupné zavádění nešťastně ničí vlastní evaluační hodnotu, pokud se pořadí přiřazení nezaznamenává.
- Je to základní metoda stojící za [metodami hodnocení dopadu](../metody-hodnocení-dopadu/) a odlišuje ji od [hodnocení dopadu versus hodnocení procesu](../hodnocení-dopadu-versus-hodnocení-procesu/), z nichž druhé se ptá, zda byl program dodán, jak bylo zamýšleno, spíše než zda způsobil účinek.
- [Dodatečnost a mrtvá váha](../dodatečnost-a-mrtvá-váha/) a [vytěsnění a přisouzení](../vytěsnění-a-přisouzení/) jsou v jádru obě kontrafaktuální otázky — mrtvá váha je „jaký by byl tento konkrétní výsledek bez intervence“, aplikovaná na úrovni úpravy spíše než plného návrhu hodnocení.

## Úskalí

- **Považování před/po za důkaz kauzality.** Je to nejběžnější a nejdůsledněji závažná chyba ve veřejném a sociálním výkaznictví dopadu; změna před/po zaměňuje účinek programu se vším ostatním, co se za stejné období změnilo.
- **Používání srovnávací skupiny, která se systematicky liší od léčené.** Spárovaná srovnávací skupina musí být skutečně podobná v relevantních charakteristikách (viz hierarchie metod [kontrafaktuální analýzy](../kontrafaktuální-analýza/) v Magenta Booku); srovnávání účastníků programu (kteří se přihlásili a bývají motivovanější) s neúčastníky (kteří ne) riskuje selekční zkreslení maskované jako účinek programu.
- **Ničení příležitostí k randomizaci špatným návrhem dodávky.** Postupné či randomizované zavádění zachovává evaluační hodnotu jen tehdy, je-li přiřazení skutečně náhodné a zaznamenané — nechat místní manažery vybrat, kdo půjde první, maří účel.
- **Přehánění přesnosti ze slabého návrhu.** Odhad před/po by měl být prezentován jako orientační, nikoli jako změřená velikost účinku; hierarchie důkazů Magenta Booku existuje proto, aby síla tvrzení odpovídala síle návrhu, který ho vytvořil.

## Zdroje

- HM Treasury, „The Magenta Book: Central Government Guidance on Evaluation“ (2020) a jeho doplňující příručka ke kvazi-experimentálním metodám. <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, „Test, Learn, Adapt: Developing Public Policy with Randomized Controlled Trials“ (2012).
- What Works Network, pokyny ke standardům důkazů. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton University Press, 2009 (standardní reference pro metody rozdílu rozdílů a regresní diskontinuity).
