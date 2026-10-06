# Vícerozměrný index chudoby (MPI)

MPI měří chudobu jako překrývající se deprivace, které člověk zažívá současně — ve zdraví, vzdělání a životní úrovni — a nikoli jako samotný příjem klesající pod hranici. Vyvinula jej Oxfordská iniciativa pro chudobu a lidský rozvoj (OPHI) ve spolupráci se Sabinou Alkire a Jamesem Fosterem a je publikován společně s UNDP v každé Zprávě o lidském rozvoji od roku 2010, vedle [Indexu lidského rozvoje](../index-lidského-rozvoje/).

## Proč na tom záleží

Hranice chudoby podle příjmu míjejí lidi, kteří mají dostatečný hotovostní příjem, ale postrádají čistou vodu, školní docházku nebo přežili smrt dítěte — a míjejí skutečnost, že deprivace se shlukují: domácnost bez elektřiny nepřiměřeně pravděpodobně postrádá také sanitaci a má podvyživené dítě. Metoda Alkire–Foster, na níž je MPI postaven, počítá deprivace každého člověka napříč deseti ukazateli seskupenými do tří stejně vážených rozměrů — zdraví, vzdělání, životní úroveň — a řadí někoho mezi „chudé podle MPI“ jen tehdy, pokud jeho vážené skóre deprivace překročí pevný práh, čímž zachycuje překrytí, které sada samostatných jednoukazatelových statistik zachytit nemůže. OPHI zveřejňuje úplnou metodiku a data za země na <https://ophi.org.uk/multidimensional-poverty-index/>; globální MPI, které udržuje společně s UNDP, nyní pokrývá přes 110 zemí. Pro software vytvořený pro programy boje proti chudobě — peněžní převody, třídění sociální péče, cílení pomoci — je sada ukazatelů MPI často nejblíže standardizovanému schématu deprivace, již ověřenému desítkami národních statistických úřadů.

## Matematika

```
10 ukazatelů, 3 rozměry, každý rozměr váží 1/3:

Zdraví (1/3):             výživa (1/6), dětská úmrtnost (1/6)
Vzdělání (1/3):           roky školní docházky (1/6), docházka do školy (1/6)
Životní úroveň (1/3):     palivo na vaření, sanitace, pitná voda,
                           elektřina, bydlení, majetek (po 1/18)

skóre deprivace (c) = součet vah ukazatelů, u nichž je osoba deprivovaná

osoba je „chudá podle MPI“, pokud c ≥ 1/3 (hranice chudoby, k = 33 %)

H (míra výskytu) = počet chudých podle MPI / celková populace
A (intenzita)    = průměrné skóre deprivace pouze mezi chudými podle MPI

MPI = H × A
```

Protože MPI násobí *podíl* chudých tím, *jak* jsou chudí, mohou mít dvě oblasti se stejnou mírou výskytu velmi odlišná skóre MPI, pokud jsou deprivace v jedné závažnější — táž logika „žádné substituce mezi rozměry“, která stojí za geometrickým průměrem HDI.

## Praktický příklad

**Národní průzkum 1 000 osob**: 350 je identifikováno jako vícerozměrně chudých (skóre deprivace ≥ 33 %). Mezi samotnými těmito 350 chudými osobami je průměrné skóre deprivace 45 %.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Porovnání dvou okresů se stejnou mírou výskytu**: okres A má H = 0,30 a A = 0,40 (mnoho chudých, mírně deprivovaných); okres B má H = 0,30 a A = 0,60 (stejný počet chudých, ale závažněji deprivovaných — postrádajících současně elektřinu *a* sanitaci *a* docházku do školy).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Stejná míra výskytu, o 50 % vyšší MPI v okrese B — systém cílení založený jen na míře výskytu chudoby by oba okresy seřadil stejně a minul by, že okres B potřebuje hlubší intervenci.

## Souvislost s softwarovým inženýrstvím

- Systémy pro správu případů a určování nároků pro sociální programy již často ukládají několik z deseti ukazatelů (bydlení, docházka do školy, zdravotní markery) v oddělených sílech; metoda počítání Alkire–Foster je hotové schéma pro jejich sloučení do jednoho skóre deprivace místo budování zakázkového skórovacího modelu od nuly.
- Rozdělení míry výskytu/intenzity (H × A) je obecně užitečný vzor pro každý dashboard vykazující „kolik jich je zasaženo“ vedle „jak vážně“ — sbalení obou do jednoho čísla, jak to dělají surové statistiky prevalence, skrývá přesně ten případ, který potřebuje nejvíce zdrojů.
- Dashboardy ukazatelů ve stylu MPI se přirozeně spárují s výkaznictvím [nákladů na příjemce](../náklady-na-příjemce/) pro programy boje proti chudobě: náklady na bod snížení MPI jsou obhajitelnou jednotkou pro srovnání velmi odlišných intervencí (peněžní převod versus infrastruktura sanitace).

## Úskalí

- **Zacházení s deseti ukazateli jako s univerzálními** — globální ukazatele MPI od OPHI jsou kalibrovány pro mezinárodní srovnatelnost; národní MPI (mnoho zemí, včetně několika v jižní Asii a Africe, zveřejňuje vlastní) přizpůsobují ukazatele a váhy místnímu kontextu a obě nejsou přímo srovnatelná.
- **Vykazování samotného H** — míra výskytu zcela ignoruje intenzitu; vždy vykazujte nebo počítejte A vedle ní, nebo samotný MPI.
- **Předpoklad, že chudí podle MPI a chudí podle příjmu jsou táž populace** — vlastní přehledy OPHI za země typicky ukazují jen částečné překrytí mezi nimi; program cílící jen na chudé podle příjmu systematicky mine významný podíl vícerozměrně chudých.

## Zdroje

- Oxford Poverty and Human Development Initiative. „Multidimensional Poverty Index.“ <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. „Counting and Multidimensional Poverty Measurement.“ Journal of Public Economics, 2011.
- UNDP & OPHI. „Global Multidimensional Poverty Index“ (výroční zpráva).
