# Metriky spokojenosti občanů

Metriky spokojenosti občanů měří, jak lidé hodnotí svou přímou zkušenost s veřejnou službou — odlišně od důvěry v instituce obecně a odlišně od toho, zda služba skutečně dosáhla dobrého výsledku. Služba může být oblíbená a neúčinná, nebo účinná a neoblíbená; rozdíl mezi nimi je sám o sobě diagnostickou informací, kterou by měl dodávací tým sledovat.

## Proč na tom záleží

Spokojenost se měří ve dvou různých výškách, které se rutinně zaměňují. Na úrovni služby vyžaduje nyní zrušená britská Performance Platform i dnešní příručka služeb GOV.UK průzkum spokojenosti pro každou službu (typicky pětibodová škála od „velmi spokojen“ po „velmi nespokojen“, administrovaná v místě transakce) jako jeden ze čtyř povinných KPI služby — viz [standardy služeb a metriky transakcí](../standardy-služeb-a-metriky-transakcí/). Na institucionální úrovni britský Civil Service People Survey měří zapojení a zkušenost zaměstnanců napříč všemi ústředními vládními resorty ročně a samostatně program OECD „Trust in Government“ zjišťuje veřejnou důvěru v národní vládu napříč členskými státy, sledující dlouhodobý vzorec poklesu a zotavení silně formovaný krizemi (finanční krize 2008 i pandemie COVID-19 obě způsobily prudké, viditelné pohyby v číslech důvěry OECD). Důvod, proč inženýři budující služby pro občany musí držet spokojenost a výsledek odděleně, je známý způsob selhání v návrhu služeb: krásně navržený, snadno použitelný digitální formulář pro žádost o dávku může dosáhnout velmi vysoké spokojenosti, zatímco podkladová politika — pravidla způsobilosti, nedodělky ve zpracování, výše přiznaných částek — nechává žadatele bez zlepšení. Spokojenost měří rozhraní; neměří hodnotu dodanou za ním.

## Matematika

```
Čistá spokojenost = % spokojených (nebo velmi spokojených) − % nespokojených (nebo velmi nespokojených)
                    (neutrální/bez názoru odpovědi vyloučeny z obou členů, ale započteny
                    do základny odpovědí při výpočtu každého procenta)

Rozdíl spokojenost–výsledek = skóre spokojenosti − skóre dosažení výsledku
                    (obojí normalizováno 0–100; velký kladný rozdíl signalizuje službu,
                    která „působí dobře“, ale nedodává na podstatě)

Index důvěry (ve stylu OECD) = % respondentů průzkumu odpovídajících „ano“ na
                    „máte důvěru v [národní vládu]?“
                    sledováno jako časová řada, typicky rozdělené podle
                    věku, příjmu a vzdělání
```

## Praktický příklad

**Služba elektronického vyúčtování daně z nemovitosti místního úřadu**: průzkum spokojenosti v místě úspěšné transakce ukazuje 2 400 respondentů: 1 650 spokojených/velmi spokojených, 250 nespokojených/velmi nespokojených, 500 neutrálních.

```
Čistá spokojenost = (1 650/2 400 × 100) − (250/2 400 × 100)
                   = 68,75 % − 10,42 %
                   = +58,3 čisté spokojenosti
```

Izolovaně to vypadá silně. Ale průzkum se zobrazuje jen uživatelům, kteří transakci *úspěšně* dokončí — známé zkreslení měření (viz úskalí níže). Spárování s metrikou míry dokončení ze [standardů služeb a metrik transakcí](../standardy-služeb-a-metriky-transakcí/) ukazuje, že dokončení je jen 71 %, což znamená:

```
Skutečná spokojenost populace je neměřená u 29 %, kteří cestu opustili —
věrohodně nejnespokojenější kohorty, protože opuštění je samo o sobě silný
negativní signál, který průzkum nikdy nezachytí.
```

**Národní ilustrace (struktura řady důvěry ve stylu OECD)**: důvěra v národní vládu hlášena na 42 % v roce 1, klesající na 34 % v roce 2 (krizový rok) a zotavující se na 39 % v roce 3 — trajektorie typická pro vzorec šoku a částečného zotavení, který OECD dokumentuje napříč členskými státy po velkých krizích.

## Souvislost s softwarovým inženýrstvím

Instrumentujte průzkumy spokojenosti v každém smysluplném bodě odchodu z cesty uživatele, nejen při úspěšném dokončení — nejběžnější inženýrská chyba v této oblasti, která mlčky mění metriku spokojenosti v metriku marnivosti zkreslenou přežitím. Kde je to možné, spárujte skóre spokojenosti s metrikou dokončení nebo výsledku na tomtéž dashboardu, aby tým nemohl slavit rostoucí spokojenost, zatímco dokončení tiše klesá (viz [náklady na transakci](../náklady-na-transakci/) a [digitální inkluze](../digitální-inkluze/) pro to, kdo je z digitálního vzorkování spokojenosti vyloučen hned na začátku — nedigitální a digitálně asistovaní uživatelé jsou v průzkumech během služby systematicky nedostatečně zastoupeni). Data o spokojenosti a důvěře také přímo vstupují do ramene legitimity [Moorova strategického trojúhelníku](../veřejná-hodnota/) a patří do perspektiv „zákazník“ a „legitimita“ [karty skóre veřejné hodnoty](../karta-skóre-veřejné-hodnoty/) — viz [metriky důvěry a legitimity](../metriky-důvěry-a-legitimity/) pro institucionální protějšek této metriky na úrovni služby.

## Úskalí

- **Zkreslení přežitím v průzkumech v místě dokončení**: uživatelé, kteří cestu opustí, průzkum nikdy neuvidí, takže vysoké skóre spokojenosti během služby může koexistovat s nízkou mírou dokončení a velkou neviditelnou populací nespokojených nedokončivších.
- **Zacházení se spokojeností jako se zástupcem výsledku**: dobře navržené rozhraní pro špatně navrženou politiku skóruje dobře ve spokojenosti a špatně ve výsledku — vždy uvádějte obojí, nikdy jedno jako náhradu druhého.
- **Malé, nereprezentativní vzorky vykazované s falešnou přesností**: skóre spokojenosti z několika set samovolně vybraných respondentů vykazované na jedno desetinné místo implikuje jistotu, kterou velikost vzorku nemůže podpořit.
- **Ignorování demografického členění**: národní údaje o důvěře a spokojenosti, které nejsou rozděleny podle věku, příjmu, zdravotního postižení či digitálního přístupu, mohou maskovat ostře odlišné zkušenosti napříč skupinami — vzorec, který vlastní vydání OECD Trust in Government výslovně rozdělují.

## Zdroje

- OECD, „Trust in Government.“ <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, výsledky „Civil Service People Survey“. <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, „Measuring Success.“ <https://www.gov.uk/service-manual/measuring-success>
