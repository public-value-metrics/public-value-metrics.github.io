# Karta skóre veřejné hodnoty

Karta skóre veřejné hodnoty přizpůsobuje vyváženou kartu skóre (balanced scorecard) Roberta Kaplana a Davida Nortona z roku 1992 — vytvořenou pro firmy optimalizující zisk napříč finanční, zákaznickou, interně-procesní perspektivou a perspektivou učení a růstu — organizacím, jejichž spodní řádek je poslání, nikoli marže. Nutí veřejný orgán vykazovat výkonnost napříč několika nesloučitelnými dimenzemi najednou, místo aby se vše zhroutilo do jediného čísla, které skrývá kompromisy.

## Proč na tom záleží

Původní argument Kaplana a Nortona v Harvard Business Review byl, že jediná finanční metrika je zpožděným ukazatelem, který neříká nic o tom, *proč* se výkonnost změní příští čtvrtletí. V soukromém sektoru byla opravou čtyři propojené perspektivy. Ve vládě poskytuje ekvivalentní strukturu „strategický trojúhelník“ Marka Moorea (z *Creating Public Value*, 1995): služba musí současně dodávat **veřejnou hodnotu** (výsledek poslání), udržovat **legitimitu a podporu** (politickou a veřejnou podporu) a být **provozně proveditelná** (dodatelná se skutečně dostupnými zdroji a schopnostmi). *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies* (2003) Paula Nivena je praktická příručka pro převedení čtyř rámečků Kaplana a Nortona na tento trojúhelník — typicky přejmenováním „finanční“ na „správu zdrojů“, umístěním „poslání“ nahoru místo „hodnoty pro akcionáře“ dole a zacházením s perspektivami zákazníka a zúčastněných stran jako rovnocennými, nikoli podřízenými zisku. Důvod, proč na tom záleží dodávacímu týmu, je, že veřejná digitální služba posuzovaná jen finanční nebo efektivnostní metrikou (řekněme náklady na transakci) bude systematicky nedostatečně investovat do dimenzí legitimity a výsledků, které finanční metrika nevidí.

## Matematika

Karta skóre veřejné hodnoty je rámec, nikoli vzorec, ale její struktura je pevná a stojí za přesné reprodukování:

```
Perspektiva          Otázka veřejného sektoru                  Příklad ukazatele
--------------------------------------------------------------------------------
Poslání / výsledky    Dosahujeme veřejné hodnoty, kterou        Míra výsledku populace
                       jsme založeni vytvářet?                  (viz outcomes-vs-outputs)
Správa zdrojů         Využíváme veřejné peníze efektivně        Náklady na výsledek, odchylka
                       a v rámci povolených limitů?             rozpočtu
Zákazník / uživatel   Mohou uživatelé a občané službu          Míra dokončení, spokojenost
                       využít a mít z ní prospěch?
Legitimita / podpora  Stojí za námi stále političtí             Metriky důvěry, zjištění auditu,
                       zadavatelé, kontrolní orgány a veřejnost? oprávněné stížnosti
Interní proces /      Máme schopnost a proces, abychom se       Fluktuace zaměstnanců, doba cyklu,
  učení                stále zlepšovali?                         stáří nedodělků

Obhajitelná karta skóre vykazuje 3–5 ukazatelů na perspektivu, zvolených tak,
aby žádnou perspektivu nešlo zmanipulovat, aniž by se škoda projevila v jiné.
```

## Praktický příklad

**Odbor sociální péče o dospělé místního úřadu**: karta skóre pro službu reablementace (krátkodobá podpora, která pomáhá lidem znovu získat nezávislost po pobytu v nemocnici) vykazuje:

```
Poslání:       68 % uživatelů služby již nepotřebuje trvalou péči po 6 týdnech (cíl 65 %)
Správa zdrojů: náklady na dokončenou epizodu reablementace = 1 850 £ (rozpočtový předpoklad 2 000 £)
Zákazník:      spokojenost uživatelů 82 %, průměrné čekání na zahájení služby 4,1 dne
Legitimita:    3 oprávněné stížnosti na 1 000 epizod; rada pro ochranu dospělých hodnotí
               službu jako „dobrou“
Proces:        míra neobsazených míst 14 %, průměrná zátěž případů 23 (bezpečný strop zátěže: 25)
```

Čteno izolovaně vypadají čísla poslání a správy zdrojů jako přímočarý příběh úspěchu: pod rozpočtem a nad cílem výsledku. Čteno společně s řádkem procesu ukazuje míra neobsazenosti 14 % proti stropu zátěže 25, že dobrý výsledek je kupován provozem blízko nebezpečných úrovní personálního obsazení — varování, které by samotné číslo poslání nikdy neodhalilo, a přesně ten způsob selhání, který jednoperspektivní KPI (viz [KPI veřejného sektoru](../kpi-veřejného-sektoru/)) vyvolává.

## Souvislost s softwarovým inženýrstvím

Pro tým budující interní nebo veřejný dashboard je karta skóre přímým argumentem proti jedinému widgetu „skóre zdraví“: sestavte jeden panel na perspektivu a odolejte tlaku produktu je syntetizovat do semaforu, protože právě krok syntézy ničí informace o kompromisech. Také se čistě mapuje na struktury OKR produktových týmů: OKR poslání bez spárovaného OKR správy zdrojů nebo procesu reprodukuje způsob selhání jediné metriky, proti kterému Kaplan a Norton v roce 1992 psali. Viz [veřejnou hodnotu](../veřejná-hodnota/) pro Moorovu základní teorii toho, co by rámeček „poslání“ měl skutečně obsahovat, a [metriky důvěry a legitimity](../metriky-důvěry-a-legitimity/) pro to, jak naplnit perspektivu legitimity skutečnými, zdrojovanými ukazateli místo zástupného ukazatele, který nikdo nemůže obhájit.

## Úskalí

- **Sbalení karty skóre do jediného skóre**: průměrování čtyř perspektiv do jediného čísla znovu zavádí přesně ten problém — špatné skóre legitimity zamaskované dobrým skóre správy zdrojů — který karta skóre existuje, aby zabránila.
- **Kopírování „finanční“ perspektivy soukromého sektoru beze změny**: perspektiva správy zdrojů veřejného orgánu je o setrvání v povolených, často vázaných rozpočtech, nikoli o maximalizaci příjmů — Nivenovo přejmenování není kosmetické.
- **Výběr ukazatelů, které tým vlastnící kartu skóre může jednostranně posunout**: ukazatel legitimity pocházející od téhož týmu, který posuzuje (např. samovykazované vyřizování stížností), není nezávislým důkazem.
- **Jednorázové sestavení karty skóre a nikdy nepřehodnocení vah ani ukazatelů**: Kaplan a Norton měli na mysli každoroční přezkum strategie; karta skóre zmrazená na roky se vzdaluje od poslání, které měla sledovat.

## Zdroje

- Robert S. Kaplan and David P. Norton, „The Balanced Scorecard: Measures That Drive Performance,“ *Harvard Business Review*, January–February 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley, 2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University Press, 1995.
