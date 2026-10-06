# Logický model

Logický model je lineární diagram propojující vstupy, aktivity, výstupy, výsledky a dopad programu, čtený zleva doprava jako řetězec odpovědnosti: zdroje vstupují, aktivity se dějí, výstupy jsou produkovány, výsledky se mění pro příjemce a dopad se projevuje v širším nebo delším časovém měřítku. Je to standardní struktura, vůči níž poskytovatelé a auditoři očekávají, že bude program vykazovatelný, a dopředu zaměřený protějšek zpětně mapované [teorie změny](../teorie-změny/).

## Proč na tom záleží

Magenta Book ministerstva financí (HM Treasury) určuje logický model jako povinný prvek návrhu hodnocení programu a poskytovatelé jako National Lottery Community Fund staví své šablony žádostí a výkaznictví přesně kolem tohoto pětisloupcového řetězce. Jeho hodnota spočívá v tom, že nutí program vyjádřit v jediném diagramu, co utratí, co s tím udělá, co vyprodukuje a — kriticky — co by se mělo změnit v důsledku, na úrovni specifičnosti, kterou odstavec prózy má tendenci zastírat. Logický model s vyplněnými sloupci vstupů a aktivit, ale prázdným nebo vágním sloupcem výsledků je diagnostikovatelný na první pohled, což je přesně důvod, proč jej poskytovatelé žádají.

## Matematika

Logický model je strukturální řetězec, nikoli vzorec:

```
Vstupy          Aktivity          Výstupy              Výsledky              Dopad
(vázané         (co se s nimi     (přímé, spočitatelné  (změna pro            (dlouhodobá změna
 zdroje)         dělá)             produkty)            příjemce)             na úrovni populace
                                                                              nebo systému)
```

Každý sloupec by měl být specifičtější než předchozí: vstupy jsou to, co utratíte, aktivity jsou to, co děláte, výstupy jsou to, co se dodá bez ohledu na účinek, výsledky jsou to, co se v důsledku změní — rozdíl plně probraný v [výsledcích versus výstupech](../výsledky-versus-výstupy/) — a dopad je trvalá, často jen zčásti přisouditelná dlouhodobá změna.

## Praktický příklad

**Místní úřad (digitální poradenská služba pro dluhy)**:

- Vstupy: roční rozpočet 180 000 £, 4,0 FTE poradců, systém pro správu případů.
- Aktivity: osvětová sezení, individuální poradenské schůzky o dluzích.
- Výstupy: 900 uskutečněných schůzek; 750 vydaných plánů dluhů a dávek.
- Výsledky: z klientů dosahujících 6měsíčního sledování 60 % (450 ze 750) hlásí snížené nedoplatky, průměrně o 1 200 £ na klienta — 540 000 £ souhrnného snížení nedoplatků.
- Dopad: měřitelný pokles žádostí o ubytování pro bezdomovce z klientské základny služby po dva roky, jen zčásti přisouditelný této službě vedle jiných intervencí (viz [kontrafaktuální analýza](../kontrafaktuální-analýza/)).

**Charita (partnerství pro doporučování do potravinové banky)**:

- Vstupy: 45 000 £, 1,5 FTE koordinátor, dohody o partnerství s 12 doporučujícími agenturami.
- Aktivity: třídění doporučení, balení a distribuce balíčků.
- Výstupy: 5 000 potravinových balíčků distribuovaných 1 100 domácnostem.
- Výsledky: 68 % dotázaných domácností (748 z 1 100) hlásí zlepšenou potravinovou jistotu při telefonátu po 4 týdnech.
- Dopad: příspěvek ke snížené poptávce po místních krizových službách, doložený jen v souhrnných statistikách oblasti, nepřisouditelný samotné této charitě.

## Souvislost s softwarovým inženýrstvím

Logický model je blízký doslovnému datovému modelu systému výsledků: vstupy a aktivity jsou provozní data, která již držíte (výdaje, personální obsazení, záznamy sezení); výstupy se snadno instrumentují, protože se počítají v místě dodání; výsledky vyžadují záměrně navržený sběr následných dat (průzkumy, propojení administrativních dat), který nebude existovat, pokud ho někdo nevybuduje; dopad obvykle vyžaduje propojená, longitudinální nebo populační data přesahující systémy jednoho programu. Inženýři budující nástroje pro výkaznictví by měli tlačit na zadavatele, aby definovali ukazatele výsledků a dopadu při návrhu, místo aby se vrátili k dashboardu jen s výstupy, protože to podporují transakční data. Viz [sociální návratnost investice](../sociální-návratnost-investice/) pro metodu, která oceňuje konkrétně sloupce výsledků a dopadu, a [realizaci přínosů](../realizace-přínosů/) pro sledování, zda byl sloupec dopadu skutečně dodán.

## Úskalí

- **Zastavení u výstupů.** Dashboard, který hlásí uskutečněné schůzky či distribuované balíčky a naznačuje přínos, vykazuje aktivitu, nikoli výsledky — viz [výsledky versus výstupy](../výsledky-versus-výstupy/).
- **Žádná uvedená kauzální vazba mezi sloupci.** Logický model uvádí řetězec, ale ne proč mají aktivity produkovat výstupy, které mají produkovat výsledky; toto zdůvodnění patří do [teorie změny](../teorie-změny/) a logický model bez ní je neotestovaný.
- **Zacházení s ním jako s jednorázovým dokumentem k žádosti.** Logické modely vytvořené jen k uspokojení žádosti o financování a nikdy neaktualizované přestávají odrážet, co program skutečně dělá.
- **Plížící se přisuzování ve sloupci dopadu.** Tvrzení, že změna na úrovni populace je způsobena výhradně jedním programem, bez kontrafaktuálu, nadhodnocuje to, co důkazy podporují.

## Zdroje

- HM Treasury, Magenta Book (2020), kapitola 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, pokyny k logickému modelu. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, „Logic Model Development Guide“ (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
