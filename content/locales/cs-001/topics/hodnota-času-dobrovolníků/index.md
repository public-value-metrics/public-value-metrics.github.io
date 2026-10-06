# Hodnota času dobrovolníků

Hodnota času dobrovolníků je peněžní odhad přiřazený neplacené práci, nejčastěji používaný k vyjádření skutečné ekonomické stopy charity — jejího účetnictví plus práce, kterou nemusela platit — nebo k doložení, že daná intervence je nákladově efektivnější, než naznačuje samotný její hotovostní rozpočet. Dominují dvě národní metodiky: odhad Independent Sector ve Spojených státech a přístup Office for National Statistics / NCVO ve Spojeném království, a stejnou hodinu práce oceňují zcela odlišně.

## Proč na tom záleží

Independent Sector ve spolupráci s Do Good Institute University of Maryland každý rok zveřejňuje národní hodinovou hodnotu času dobrovolníků, sestavenou z dat o mzdách Bureau of Labor Statistics — konkrétně z průměrných hodinových výdělků výrobních a nedozorčích pracovníků v soukromých nezemědělských výplatních listinách plus úprava o vedlejší požitky — a rozdělenou podle států USA. Její nejnovější vydání stanovilo hodnotu na **36,14 $ za hodinu pro rok 2025**, o 3,9 % více než předchozí rok, s hodnotami na úrovni států od více než 50 $ ve Washingtonu, DC, po méně než 20 $ v Portoriku. Ve Spojeném království Office for National Statistics samostatně odhadl náhradní náklady formálního dobrovolnictví na **14,43 £ za hodinu** (odhad z roku 2017) a UK Civil Society Almanac 2024 organizace NCVO využívá data o účasti na dobrovolnictví — přibližně 14,2 milionu lidí se formálně věnovalo dobrovolnictví v letech 2021–22 — k odhadu celkového příspěvku sektoru z dobrovolnictví zhruba **18 miliard £**, asi 0,8 % britského HDP.

Důvod, proč to záleží nad rámec účetní kosmetiky: program, který silně spoléhá na práci dobrovolníků, může vypadat dramaticky levněji na čistě hotovostní bázi [nákladů na výsledek](../náklady-na-výsledek/) než program spoléhající na placený personál, i když jsou skutečné náklady zdrojů — kolik by stálo nahradit tuto práci — podobné nebo vyšší. Poskytovatelé a hodnotitelé, kteří ignorují hodnotu času dobrovolníků, systematicky podhodnocují skutečné náklady modelů dodání silně založených na dobrovolnících, což zkresluje srovnání efektivity s modely s placeným personálem dodávajícími tentýž výsledek.

## Matematika

```
Hodnota času dobrovolníků = Odpracované hodiny dobrovolníků × hodinová sazba

Volba sazby záleží a mění odpověď:
  - Přístup náhradních nákladů: mzda placeného pracovníka, který by vykonal
    stejný úkol (např. sazba náhradních nákladů kvalifikovaného pracovníka s mládeží,
    nikoli obecná průměrná mzda) — nejobhajitelnější pro ocenění specifické pro úkol
  - Přístup nákladů obětované příležitosti: vlastní ušlá mzda dobrovolníka — nejobhajitelnější
    pro ocenění toho, čeho se dobrovolník vzdal
  - Přístup národního průměru: jediná smíšená sazba Independent Sector nebo ONS —
    nejobhajitelnější pro titulkovou, mezisektorovou srovnatelnost
```

Tyto tři přístupy se mohou pro tutéž hodinu lišit o velký násobek (právník dobrovolně působící jako člen správní rady má velmi odlišnou sazbu nákladů obětované příležitosti než sazbu národního průměru), takže každé vykázané číslo musí uvést, která metoda jej vytvořila.

## Praktický příklad

**Britská charita, přístup národního průměru**: 5 000 hodin dobrovolníků za rok, oceněných na 14,43 £/hodinu (odhad náhradních nákladů ONS):

```
Hodnota = 5 000 × 14,43 £ = 72 150 £
```

Pokud byly hotovostní výdaje charity toho roku 300 000 £, její skutečné náklady zdrojů — hotovost plus práce dobrovolníků — jsou 372 150 £, zhruba o 24 % vyšší, než naznačuje samotné hotovostní číslo. Výpočet nákladů na výsledek používající jen hotovostní číslo 300 000 £ podhodnocuje skutečné náklady o stejnou míru.

**Americká charita, přístup národního průměru**: 2 000 hodin dobrovolníků oceněných na 36,14 $/hodinu (vydání Independent Sector 2025):

```
Hodnota = 2 000 × 36,14 $ = 72 280 $
```

**Tatáž americká charita, přístup nákladů obětované příležitosti**: pokud jsou dobrovolníci neúměrně často penzionovaní profesionálové, jejichž dřívější výdělky činily průměrně 60 $/hodinu, ocenění nákladů obětované příležitosti by činilo 120 000 $ — o dvě třetiny více než číslo národního průměru, což ilustruje, proč musí být metoda uvedena.

## Souvislost s softwarovým inženýrstvím

Systémy, které zaznamenávají hodiny dobrovolníků (nástroje pro plánování směn, platformy pro správu dobrovolníků), by měly zachycovat hodiny na úrovni úkolu nebo role, nejen celkový součet, aby bylo možné sazbu náhradních nákladů aplikovat na roli, a nikoli jednu plošnou sazbu národního průměru napříč smíšenou pracovní silou dobrovolníků (hodina člena správní rady a hodina stewarda nejsou ekonomicky ekvivalentní). Uložení sazby a použité metodiky vedle vypočtené hodnoty — nikoli jen konečného peněžního údaje — umožňuje navazujícímu výkaznictví (roční účetní závěrky, výpočty [sociální návratnosti investice](../sociální-návratnost-investice/), zprávy pro poskytovatele) číslo později reprodukovat nebo zpochybnit, místo aby bylo zacházeno s neprůhlednou konstantou. Viz [náklady na výsledek](../náklady-na-výsledek/), proč vynechání hodnoty času dobrovolníků systematicky podhodnocuje skutečné náklady dodání.

## Úskalí

- **Použití jediné plošné sazby pro strukturálně odlišné role.** Sazba národní průměrné mzdy aplikovaná na odbornou hodinu pro bono (právní, finanční, klinickou) ji drasticky podhodnocuje; přizpůsobte sazbu nahrazované roli všude, kde je úkol kvalifikovaný.
- **Dvojí započtení vůči nákladům placeného personálu.** Pokud dobrovolníci nahrazují práci, která by jinak byla placená, zajistěte, aby ocenění bylo aditivní k hotovostním výdajům, a nikoli navrstvené na již nafouknutý odhad personálních nákladů.
- **Citování zastaralé sazby bez data.** Sazby Independent Sector a ONS se mění ročně (nebo jsou jen periodicky přeodhadovány, v případě ONS); nedatované číslo hodnoty času dobrovolníků ve zprávě je pro srovnání téměř bezvýznamné.
- **Zacházení s hodnotou času dobrovolníků jako s fundraisingovým aktivem.** Je to úprava nákladového účetnictví pro pochopení skutečných nákladů zdrojů, nikoli nové peníze, které může charita utratit; záměna obou uvádí v omyl radu, která čte účetní závěrku.

## Zdroje

- Independent Sector a Do Good Institute (University of Maryland), „Value of Volunteer Time.“ <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, metodika Value of Volunteer Time. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, odhad ocenění dobrovolnictví, jak citováno v analýze NCVO. <https://www.ncvo.org.uk/>
