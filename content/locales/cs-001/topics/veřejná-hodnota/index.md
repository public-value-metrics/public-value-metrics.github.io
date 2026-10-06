# Veřejná hodnota

Veřejná hodnota je přínos, který vláda nebo organizace sociálního sektoru vytváří pro občany jako celek — nejen výstupy, které produkuje, nebo peníze, které utrácí, ale to, zda je společnost na tom lépe, protože organizace existuje a jednala tak, jak jednala. „Strategický trojúhelník“ Marka Moorea z roku 1995 je standardním testem: veřejná iniciativa je oprávněná jen tehdy, když je *legitimní a podporovaná*, *věcně hodnotná* a *provozně proveditelná*, a to všechno současně.

## Proč na tom záleží

Hodnotu v soukromém sektoru lze poměrně snadno ocenit: příjmy minus náklady, o nichž rozhodují zákazníci, kteří mohou odejít. Veřejná hodnota takový tržní signál nemá. Vězeňská služba, daňový úřad i tým na ochranu dětí produkují věci, které občané nemohou jednoduše odmítnout koupit, a „zákazník“ (daňový poplatník, pachatel, dítě) často není stejná osoba jako politický zadavatel, který rozpočet schvaluje. Moorova kniha *Creating Public Value: Strategic Management in Government* (Harvard University Press, 1995) dodává chybějící disciplínu: manažer by měl umět uvést (1) jakou veřejnou hodnotu jeho iniciativa vytváří, (2) odkud pochází jeho legitimita a financování — ministr, zastupitelstvo, mandát, grant — a (3) zda ji jeho organizace dokáže skutečně dodat s lidmi, technologiemi a procesy, které má k dispozici. Program, který obstojí jen na jednom či dvou ramenech trojúhelníku, ještě není ospravedlněn, ať jsou jeho úmysly sebelepší.

Prakticky to záleží proto, že většina selhání softwaru ve veřejném sektoru nejsou selhání technologií. Systém může být technicky vynikající a provozně proveditelný a přesto selhat, protože nikdo z legitimizujícího prostředí — ministři, kontrolní výbory, veřejnost — vlastně nechtěl to, co optimalizuje. Digitální služba Universal Credit a britský národní program NHS pro IT (National Programme for IT) jsou v britské literatuře o veřejné správě oba uváděny jako případy, kdy provozní rameno a rameno legitimity byly v nesouladu s ramenem poslání.

## Matematika

Veřejná hodnota je rámec, nikoli vzorec, ale strukturuje jinak vágní investiční případy do tří ověřitelných otázek:

```
Test strategického trojúhelníku — pokračujte, jen pokud platí všechny tři:

1. Legitimita a podpora: Kdo to schválil a stojí schvalující prostředí
   (zákonodárný sbor, ministr, zastupitelstvo, správní rada, veřejné mínění)
   stále za tím, když se zdroje vynakládají?

2. Veřejná hodnota: Jaké konkrétní, popsatelné dobro to přináší občanům
   nebo společnosti — bezpečí, zdraví, příležitosti, důvěru, spravedlnost —
   a pro koho?

3. Provozní kapacita: Dokáže organizace toto skutečně dodat se stávajícími
   zaměstnanci, technologiemi, partnery a právními pravomocemi — nebo
   s věrohodným plánem, jak je získat?
```

Slabá iniciativa typicky selhává alespoň na jednom rameni: technicky dodatelná, ale bez mandátu (pilotní sdílení dat, které nikdo neschválil); populární, ale nedodatelná (slíbená digitální služba bez inženýrské kapacity); nebo schválená a dodatelná, ale bez hodnoty (dashboard, který nikdo nepoužívá).

## Praktický příklad

**Místní úřad**: digitální tým města navrhuje nástroj s umělou inteligencí pro třídění žádostí o příspěvek na bydlení.

- *Legitimita*: radní schválili strategii „digitálně především“, ale zvolení členové odpovědní za sociální zabezpečení neschválili konkrétně automatizované rozhodování — to je mezera, nikoli zelená.
- *Veřejná hodnota*: rychlejší zpracování (deklarovaný přínos: z 10 dnů na 2 dny) je skutečnou hodnotou jen tehdy, pokud žadatelé nejsou neprávem odmítáni; tvrzení o hodnotě musí zahrnovat přesnost, nejen rychlost.
- *Provozní kapacita*: město má jednoho datového vědce a žádný proces monitorování modelu, takže deklarovaná dvoudenní lhůta při uvedené chybovosti dnes dodatelná není.

Dvě ze tří ramen selhávají. Moorův rámec říká: nepokračujte v navrženém rozsahu — nejprve získejte výslovné schválení automatizovaných rozhodnutí a vybudujte kapacitu pro monitorování, jinak je „veřejná hodnota“ uváděná v byznys případu fiktivní.

**Centrální vláda**: online podávací služba daňového úřadu má silnou legitimitu (zákonný mandát) i silnou provozní kapacitu (stávající tým dodává spolehlivě), ale slabou veřejnou hodnotu, pokud je využití nízké, protože digitálně vyloučení — viz [digitální inkluze](../digitální-inkluze/) — jsou tlačeni do kanálu, který nemohou používat. Trojúhelník odhalí to, co by dashboard zaměřený jen na dodání skryl.

## Souvislost s softwarovým inženýrstvím

Veřejná hodnota je zastřešující pojem, pod nímž celý tento repozitář stojí: [hodnota za peníze](../hodnota-za-peníze/) dává test hospodárnosti, efektivnosti a účinnosti, zda byly zdroje dobře využity; [náklady obětované příležitosti ve veřejných výdajích](../náklady-obětované-příležitosti-ve-veřejných-výdajích/) oceňují, co jiného mohly peníze udělat; a [dodatečnost a mrtvá váha](../dodatečnost-a-mrtvá-váha/), [vytěsnění a přisouzení](../vytěsnění-a-přisouzení/) a [kontrafaktuální analýza](../kontrafaktuální-analýza/) společně testují, zda je tvrzená hodnota skutečná, a ne pouze předpokládaná. Pro inženýry je strategický trojúhelník užitečnou pre-mortem pro jakékoli produktové rozhodnutí ve veřejném sektoru:

- Před vymezením funkce se ptejte, kdo ji schválil a zda toto schválení stále platí — funkce vytvořená pro ministra, který mezitím odešel, mohla tiše ztratit rameno legitimity.
- Berte „můžeme to postavit“ a „máme to postavit“ jako skutečně oddělené otázky; inženýrská kapacita odpovídá jen na třetí rameno trojúhelníku.
- Dokumenty s požadavky na produkt pro veřejné služby by měly výslovně uvádět tvrzení o veřejné hodnotě, nejen uživatelský příběh, protože hodnota pro uživatele a veřejná hodnota nejsou vždy totéž (viz [výsledky versus výstupy](../výsledky-versus-výstupy/)).

## Úskalí

- **Považovat provozní kapacitu za dostatečné ospravedlnění.** „Umíme to postavit“ odpovídá jen na jedno rameno trojúhelníku; týmy se silnou schopností dodávat běžně vypouštějí věci, které nikdo nechtěl schválit a které nevytvářejí žádné popsatelné veřejné dobro.
- **Zaměňovat legitimitu se zákonností.** Program může být zákonný a přesto postrádat politickou a veřejnou podporu potřebnou k jeho udržení v náročné fázi dodávky; právní krytí není totéž co mandát.
- **Předpokládat, že veřejná hodnota je to, co řekne zadávající resort.** Moorův model vyžaduje, aby tvrzení o hodnotě bylo ověřitelné vůči skutečným zájmům občanů, a nikoli pouze prohlášené financujícím — jinak se rámec zhroutí v sebecertifikaci.

## Zdroje

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press, 1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, „The Green Book: Central Government Guidance on Appraisal and Evaluation“ (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
