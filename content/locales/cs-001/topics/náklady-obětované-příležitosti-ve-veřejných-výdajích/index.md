# Náklady obětované příležitosti ve veřejných výdajích

Náklady obětované příležitosti jsou hodnota nejlepší alternativy, které se veřejný orgán vzdá, když vynaloží peníze, pracovní čas nebo politický kapitál na jednu variantu místo jiné. V resortu s pevným rozpočtem je každá libra utracená za jeden program librou, kterou nelze utratit za další nejlepší program — skutečnou cenou rozhodnutí není to, co utratí, ale to, co vytlačí.

## Proč na tom záleží

Veřejné rozpočty jsou v rámci období hodnocení výdajů peněžně omezené, takže — na rozdíl od rostoucí soukromé firmy — vládní resort nemůže jednoduše „najít další peníze“ pro dobrý nápad; jeho financování znamená odepřít financování něčemu jinému. Green Book ministerstva financí (HM Treasury) to považuje za základní: každé hodnocení musí porovnat intervenci s výchozím stavem „minimum“ *a* s realistickými alternativními využitími téhož zdroje, právě proto, že skutečná otázka, kterou si klade rozpočtový tým Treasury, nikdy nezní „je to dobré?“, ale „je to lepší než to, co jiného by za tyto peníze šlo koupit?“. Základní hodnoticí zásada Green Booku — veřejné zdroje mají směřovat k intervenci s nejvyšší čistou společenskou hodnotou na libru — je náklad obětované příležitosti vyjádřený jako politika.

Snadno se to řekne a těžko aplikuje, protože „další nejlepší alternativa“ je v jediném byznys případu zřídka viditelná. Grantový program za 2 miliony £ na zaměstnanost mladých se v byznys případu porovnává s nicneděláním — ale poctivým komparátorem je další nejlepší intervence na zaměstnanost mladých, nebo vlastně další nejlepší využití 2 milionů £ kdekoli v portfoliu, včetně výdajů mimo zaměstnanost. Magenta Book (HM Treasury, 2020) výslovně varuje, že hodnocení porovnávající „s intervencí“ a „bez intervence“ podhodnocují laťku, kterou musí intervence překonat, protože „bez této intervence“ není totéž co „s úplně ničím“ — uvolněné peníze financují něco jiného.

## Matematika

```
Náklad obětované příležitosti volby A = hodnota nejlepší opuštěné alternativy B

Čistá veřejná hodnota A = hodnota(A) − hodnota(B), nikoli hodnota(A) − 0
```

Neexistuje univerzální vzorec, protože opuštěná alternativa je závislá na kontextu, ale disciplína se zobecňuje: určete realistické další nejlepší využití téže rozpočtové položky (nikoli idealizované „nic nedělat“), oceňte je na stejném základě (peněžně, kde je to možné, podle [sociální analýzy nákladů a přínosů](../sociální-analýza-nákladů-a-přínosů/)) a odečtěte.

## Praktický příklad

**Rozpočtová položka resortu**: fond digitální transformace za 5 milionů £ může tento finanční rok financovat přesně jeden ze dvou návrhů.

- *Varianta A*: nová platforma pro správu případů, peněžně vyjádřený přínos 7,2 milionu £ za 5 let (úspory efektivnosti plus rychlejší řešení případů).
- *Varianta B*: služba ověřování totožnosti sdílená třemi resorty, peněžně vyjádřený přínos 6,4 milionu £ za 5 let.

Naivní byznys případ pro A porovnává 7,2 milionu £ přínosu s 5 miliony £ nákladů a uvádí poměr přínosů a nákladů 1,44 : 1 — zdánlivě silný. Ale protože A a B soupeří o stejných 5 milionů £, je nákladem obětované příležitosti volby A opuštěný přínos B ve výši 6,4 milionu £. *Čistý* případ pro A oproti realistické alternativě je pouze 7,2 − 6,4 = 0,8 milionu £, nikoli celých 7,2 milionu £ z titulku. Kdyby třetí varianta C nabízela 7,5 milionu £ přínosu za týchž 5 milionů £, financování A místo C by zničilo 0,3 milionu £ veřejné hodnoty, přestože vlastní byznys případ A vypadá samostatně plně opodstatněně.

**Pracovní čas zaměstnanců místního úřadu**: tříčlenný datový tým města může vytvořit buď dashboard pořadníku bydlení (odhadovaná úspora 400 hodin úředníků ročně, oceněno 28 £/hodinu = 11 200 £ ročně), nebo nástroj pro třídění podvodů s dávkami (odhadovaně předejde 85 000 £ ročně na nesprávných výplatách). Vytvoření dashboardu má náklad obětované příležitosti 85 000 £ ročně, nikoli jen mzdové náklady datového týmu — skutečnou cenou „bezplatného“ interního vývoje je mnohem větší přínos, který mohl tým vytvořit jinde.

## Souvislost s softwarovým inženýrstvím

Inženýrská kapacita uvnitř veřejného orgánu je sama omezeným rozpočtem — kapacita sprintů, nikoli libry — a stejná disciplína platí přímo:

- Vždy pojmenujte komparátor: byznys případ funkce má uvést, co jiného by mohly dodat tytéž týdny práce týmu, nejen její vlastní návratnost.
- Berte „máme volnou inženýrskou kapacitu“ jako začátek analýzy nákladů obětované příležitosti, nikoli její konec — volná kapacita má stále nejlepší alternativní využití, i kdyby to bylo splácení technického dluhu (viz [technický dluh jako eroze veřejné hodnoty](../technický-dluh-jako-eroze-veřejné-hodnoty/)).
- Propojte to přímo s [hodnotou za peníze](../hodnota-za-peníze/): test „hospodárnosti“ VFM je bez poctivého komparátoru nákladů obětované příležitosti bezpředmětný, a s [náklady zpoždění ve veřejných programech](../náklady-zpoždění-ve-veřejných-programech/), které oceňují časový rozměr téže logiky opuštěné alternativy.

## Úskalí

- **Srovnávání s „nic nedělat“ místo další nejlepší alternativy.** Green Book vyžaduje výchozí stav „minimum“ právě proto, že skutečný náklad obětované příležitosti je zřídka nulový; byznys případ, který překoná jen laťku „nic nedělat“, neprokázal, že překonává realistickou alternativu.
- **Ignorování meziresortní soutěže o stejný balík.** Rozpočtové položky, které vypadají v rámci jednoho odboru jako vyhrazené, často soutěží na vyšší úrovni (hodnocení výdajů, kapitálový program), kde se skutečný náklad obětované příležitosti realizuje.
- **Předpoklad, že uvolněný pracovní čas nemá žádnou další hodnotu.** „Ušetřený“ čas vytváří hodnotu jen tehdy, je-li přesunut k něčemu hodnotnému; pokud alternativní využití neexistuje, je úspora jen fiktivní.

## Zdroje

- HM Treasury, „The Green Book: Central Government Guidance on Appraisal and Evaluation“ (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, „The Magenta Book: Central Government Guidance on Evaluation“ (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. „Methods for the estimation of the NICE cost-effectiveness threshold.“ Health Technology Assessment, 2015;19(14) — kanonická empirická demonstrace nákladů obětované příležitosti jako závazného omezení v pevném veřejném rozpočtu. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
