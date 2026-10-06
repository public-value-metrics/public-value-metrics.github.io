# Index lidského rozvoje (HDI)

HDI je hlavní alternativou OSN k řazení zemí pouze podle příjmu: kombinuje naději dožití, vzdělání a příjem do jediného čísla mezi 0 a 1, na základě tvrzení — které prosazoval ekonom Amartya Sen a pro OSN rozvinul Mahbub ul Haq —, že rozvoj je o rozšiřování toho, co lidé mohou dělat a čím mohou být, nikoli jen o tom, co vydělávají. Je každoročně publikován v Zprávě o lidském rozvoji Rozvojového programu OSN od roku 1990.

## Proč na tom záleží

Před HDI se „rozvoj“ měřil téměř zcela HNP na obyvatele, což neříká nic o tom, zda růst dosahuje zdraví nebo vzdělání běžných lidí. Senův přístup založený na schopnostech přerámoval rozvoj jako rozšiřování skutečných svobod a ul Haq z něj udělal publikovatelný index, podle kterého mohl UNDP řadit každou zemi, čímž donutil vlády, které zbohatly jen na příjmu, ale zanedbaly zdraví či školní docházku, čelit horšímu pořadí, než naznačoval jejich HDP (standardními příklady jsou státy Perského zálivu bohaté na ropu a některé extrakční ekonomiky). Třístranná struktura HDI je také přímým metodologickým předkem [Vícerozměrného indexu chudoby](../vícerozměrný-index-chudoby/): oba odmítají nechat jeden rozměr vykoupit deficit v jiném, přičemž používají geometrický, nikoli aritmetický průměr. UNDP zveřejňuje úplné technické poznámky a podkladová data každého vydání (<https://hdr.undp.org/data-center/human-development-index>), což je kanonický zdroj pro každého, kdo staví na indexu, místo aby jej odvozoval znovu.

## Matematika

```
Index naděje dožití (LEI)         = (LE − 20) / (85 − 20)

Index průměrných let školní docházky  = průměrné roky školní docházky / 15
Index očekávaných let školní docházky = očekávané roky školní docházky / 18
Index vzdělání (EI)                   = (Index průměrných let + Index očekávaných let) / 2

Index příjmu (II)                 = (ln(HND na obyvatele) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [geometrický průměr tří podindexů]
```

Geometrický průměr je zvolen záměrně: protože násobí místo průměrování, velmi vysoké skóre v jednom rozměru nemůže plně vyvážit velmi nízké skóre v jiném — návrh, který UNDP přijalo v roce 2010 konkrétně k penalizaci nerovnováhy, čímž nahradilo předchozí vzorec aritmetického průměru.

## Praktický příklad

**Země se středním příjmem**: naděje dožití 72 let, průměrné roky školní docházky 8, očekávané roky školní docházky 13, HND na obyvatele 12 000 $.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
MYSI = 8 / 15                                        = 0,533
EYSI = 13 / 18                                       = 0,722
EI = (0,533 + 0,722) / 2                             = 0,628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

HDI 0,713 spadá do pásma „vysokého lidského rozvoje“ UNDP (0,700–0,799); „velmi vysoký“ začíná na 0,800. Všimněte si, jak citlivý je výsledek na nejslabší podindex: kdyby průměrné roky školní docházky byly 4 místo 8 (MYSI = 0,267, EI = 0,494), HDI by klesl na (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639 — o celé pásmo — přestože se nic jiného nezměnilo.

## Souvislost s softwarovým inženýrstvím

- Vzorec geometrického průměru je přímo znovu použitelný pro každé složené skóre služby nebo produktu, u něhož nechcete, aby jeden silný rozměr zakryl kriticky slabý — např. kombinace skóre přístupnosti, výkonu a spolehlivosti veřejné digitální služby multiplikativně místo váženým průměrem, aby rychlá, ale nepřístupná služba nemohla skórovat „dobře“.
- Logaritmická transformace příjmu v HDI (klesající mezní hodnota dodatečné libry) je táž logika, která stojí za [distribučním vážením](../distribuční-vážení/) v hodnocení: dodatečných 1 000 $ znamená mnohem více pro chudou domácnost než pro bohatou a lineární zacházení s oběma špatně oceňuje dopad.
- Každý dashboard vykazující jediné smíšené skóre „digitální inkluze“ nebo „výsledků občanů“ by měl dokumentovat svůj vzorec agregace stejně výslovně jako technické poznámky UNDP — viz [KPI veřejného sektoru](../kpi-veřejného-sektoru/) a [karta skóre veřejné hodnoty](../karta-skóre-veřejné-hodnoty/).

## Úskalí

- **Průměrování místo geometrického průměru** — aritmetický průměr nechává vysoký příjem zcela zakrýt špatné zdraví nebo vzdělání; celý smysl změny metodiky z roku 2010 bylo zastavit tuto záměnu.
- **Porovnávání HDI meziročně, jako by šlo o HDP očištěný o inflaci** — UNDP pravidelně přenastavuje index (nové minimální/maximální meze, revidované stropy školní docházky), takže změna pořadí může odrážet aktualizaci metodiky, nikoli skutečný posun; vždy ověřte, z kterého vydání HDR číslo pochází.
- **Zacházení s HDI jako s mírou chudoby** — je to národní průměr a neříká nic o rozdělení uvnitř země; k tomu použijte [Vícerozměrný index chudoby](../vícerozměrný-index-chudoby/) nebo samostatný Index lidského rozvoje upravený o nerovnost od UNDP.

## Zdroje

- UNDP. „Human Development Index (HDI)“ technické poznámky a data. <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (zavedení indexu).
- Sen A. „Development as Freedom.“ Oxford University Press, 1999.
