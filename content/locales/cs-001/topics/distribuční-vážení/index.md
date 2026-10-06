# Distribuční vážení

Distribuční vážení upravuje peněžní hodnotu nákladu nebo přínosu podle toho, kdo jej obdrží, na principu, že další libra má větší hodnotu pro chudou domácnost než pro bohatou. Green Book ministerstva financí (HM Treasury) poskytuje výslovnou metodu aplikace tohoto vážení, postavenou na klesající mezní užitečnosti příjmu, aby hodnocení tiše nezacházela s librou získanou nejbohatším decilem jako s librou stejné hodnoty jako s librou získanou nejchudším.

## Proč na tom záleží

Standardní analýza nákladů a přínosů sčítá libry, aniž by se ptala, čí libry to jsou, což implicitně předpokládá, že libra má pro všechny stejnou hodnotu — předpoklad, o jehož nepravdivosti ekonomové dávno vědí. Domácnost vydělávající 15 000 £ ročně prožívá zisk 1 000 £ zcela jinak než domácnost vydělávající 150 000 £ ročně, protože mezní užitečnost příjmu s růstem příjmu klesá. Bez vážení standardní hodnocení systematicky zvýhodňuje intervence, které prospívají bohatším, již lépe situovaným skupinám, protože jejich vyšší kupní síla nafukuje peněžní ocenění přínosů, které se k nim dostávají (modernizace parku poblíž drahého bydlení „ukazuje“ větší přínos v hodnotě nemovitostí než táž modernizace poblíž levného bydlení, čistě proto, že ceny jsou vyšší, nikoli proto, že zisk blahobytu je větší).

Doplňující pokyny Green Booku k distribuční analýze, posílené poté, co hodnocení Treasury z roku 2020 reagovalo na kritiku, že metodika hodnocení systematicky zvýhodňovala Londýn a jihovýchod, stanovují formální přístup k vážení založený na předpokládané elasticitě mezní užitečnosti příjmu kolem 1,3 — což znamená, že zdvojnásobení příjmu zhruba půlí (přesněji 2^-1,3 ≈ 0,41násobek) mezní hodnotu další libry. Nejde o zaokrouhlovací úpravu: její aplikace může změnit, který ze dvou konkurenčních programů ukáže vyšší čistou současnou hodnotu, zejména při srovnání intervence soustředěné v deprivované oblasti s intervencí rozloženou mezi běžnou populaci.

## Matematika

Distribuční váha Green Booku pro librou přínosu připadající domácnosti na úrovni příjmu y vzhledem k librou při národním průměrném příjmu ȳ:

```
Váha(y) = (ȳ / y)^e

kde:
  y  = příjem domácnosti (nebo příjem dotčené skupiny)
  ȳ  = průměrný (referenční) příjem domácnosti
  e  = elasticita mezní užitečnosti příjmu (Green Book: přibližně 1,3)
```

Aplikace vah na čisté přínosy:

```
Vážený přínos = Σ [nevážený přínos pro skupinu i × Váha(y_i)]
```

Skupina vydělávající polovinu národního průměru (y = 0,5ȳ) získá váhu (1/0,5)^1,3 = 2^1,3 ≈ 2,46 — každá libra přínosu pro tuto skupinu se počítá jako zhruba 2,46 libry pro domácnost s průměrným příjmem.

## Praktický příklad

**Dva konkurenční místní programy**, každý s nevážených čistým přínosem 2 miliony £ ročně, soupeřící o týž regionální rozvojový fond:

- *Program A*: podpora podnikání v prosperujícím městě, průměrný příjem domácnosti 45 000 £ (zhruba 1,3násobek předpokládaného národního průměru 35 000 £).
- *Program B*: program dovedností v deprivované čtvrti, průměrný příjem domácnosti 18 000 £ (zhruba 0,51násobek národního průměru).

```
Váha(A) = (35 000 / 45 000)^1,3 = (0,778)^1,3 ≈ 0,72
Váha(B) = (35 000 / 18 000)^1,3 = (1,944)^1,3 ≈ 2,53

Vážený přínos A = 2 000 000 £ × 0,72 = 1,44 milionu £
Vážený přínos B = 2 000 000 £ × 2,53 = 5,06 milionu £
```

Nevážené jsou oba programy nerozhodně. S vážením distribučního dopadu je přínos programu B více než třikrát větší — výsledek, který obrací doporučení k financování a odráží výslovný účel Green Booku, když vyžaduje, aby se vážení ukazovalo, nikoli jen nevážený poměr přínosů a nákladů.

**Alokace grantu charity**: poskytovatel porovnávající grant 500 000 £ zasahující 1 000 domácností s nízkými příjmy (váha ≈ 2,0, vážená hodnota ekvivalent 1 milionu £) s týmž grantem 500 000 £ zasahujícím 1 000 domácností se středními příjmy (váha ≈ 1,0, vážená hodnota ekvivalent 500 000 £) by měl distribuční argument výslovně uvést ve svém materiálu pro správní radu, nikoli ho nechat vyvodit.

## Souvislost s softwarovým inženýrstvím

Distribuční vážení se v metrikách dodání softwaru zřídka objevuje přímo, ale mělo by formovat, jak inženýrské a datové týmy navrhují měření a cílení:

- Při budování dashboardu dopadu nebo kalkulačky dávek zobrazte příjmový či deprivační profil dotčených, nejen souhrnný součet přínosu — souhrnná čísla bez distribučního rozpadu skrývají právě ten zvrat ukázaný výše.
- Propojte cílicí logiku v návrhu služby se stejnými deprivačními daty, která používá Green Book — viz [Index vícenásobné deprivace](../index-vícenásobné-deprivace/) — aby bylo možné dosah digitální služby posoudit z hlediska rovnosti, nejen efektivnosti (sporné čtvrté E v [hodnotě za peníze](../hodnota-za-peníze/)).
- Když algoritmus alokuje vzácný zdroj (termíny schůzek, čas pracovníka, dotaci), nevážená účelová funkce „maximalizovat celkový přínos“ bude ze své konstrukce reprodukovat tentýž předsudek, který má vážení Green Booku napravit — upozorněte na to výslovně vlastníky politiky před optimalizací.

## Úskalí

- **Nekonzistentní aplikace distribučních vah napříč portfoliem.** Vážení přínosů jednoho programu, ale ne jeho komparátoru, vede k předpojatému, nikoli spravedlivějšímu srovnání; Green Book vyžaduje zacházení srovnatelné s srovnatelným.
- **Používání hodnot nemovitostí či tržních hodnot jako zástupce blahobytu bez úpravy.** Tržní ceny jsou samy zkreslené existující příjmovou nerovností, což je právě to, co má distribuční vážení napravit — použití neupravených tržních hodnot může předsudek započítat dvakrát.
- **Ignorování variability uvnitř skupin.** Vážení podle plošného průměrného příjmu (např. decilu Indexu vícenásobné deprivace) může zkreslit jedince, kteří neodpovídají průměru své oblasti; používejte nejjemnější rozumně dostupná příjmová data.
- **Považování elasticity 1,3 za univerzální konstantu.** Sám Green Book uvádí, že jde o odhad s věrohodným rozpětím; významná rozhodnutí testujte na citlivost vůči alternativním elasticitám, místo abyste 1,3 brali jako přesné.

## Zdroje

- HM Treasury, „The Green Book: Central Government Guidance on Appraisal and Evaluation“ a doplňující pokyny k distribučním dopadům (vydání 2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, „Green Book Review 2020: Findings and Response“ (reagující na kritiku regionálního zkreslení). <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. „Valuation Techniques for Social Cost-Benefit Analysis.“ HM Treasury/DWP, 2011 (pozadí k odhadům elasticity mezní užitečnosti příjmu).
