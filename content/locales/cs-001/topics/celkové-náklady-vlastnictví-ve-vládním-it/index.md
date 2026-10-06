# Celkové náklady vlastnictví (TCO) ve vládním IT

Celkové náklady vlastnictví jsou plné náklady životního cyklu systému — pořízení plus každý rok jeho provozu — diskontované k společnému datu. Ve vládním IT je nejspolehlivější prognostickou chybou porovnávání dodavatelů nebo variant pouze podle ceny pořízení, když provoz a údržba typicky tvoří někde mezi polovinou a čtyřmi pětinami účtu za celou dobu.

## Proč na tom záleží

Green Book ministerstva financí (HM Treasury) vyžaduje, aby finanční případ v jakémkoli byznys případu podle modelu pěti případů zahrnoval náklady celého životního cyklu, nikoli jen kapitálové výdaje — přesto National Audit Office opakovaně zjišťoval, že resorty schvalují IT investice podle neúplné nebo optimistické prognózy provozních nákladů, aby pak odhalily skutečné provozní náklady, až když je systém v provozu a řádek kapitálového rozpočtu je uzavřen. Technology Code of Practice od Government Digital Service a Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) tlačí resorty k cloudovému a komoditnímu hostingu zčásti proto, že činí průběžné náklady viditelnými a srovnatelnými, místo aby byly pohřbeny uvnitř jediného kapitálového zadávacího čísla, které vypadá při schválení lákavě nízko a o tři roky později draze chybně.

## Matematika

```
TCO = Náklady na pořízení + Σ(t=1..N) Roční provozní náklady_t / (1+r)^t
      − zbytková hodnota (diskontovaná)

r = standardní sociální diskontní sazba Green Booku HM Treasury, 3,5 %/rok
    (klesající schéma sazeb pro horizonty přes 30 let)

Složky provozních nákladů: hosting/licencování, podpora a údržba,
bezpečnostní záplaty a soulad, čas personálu, plánovaná obnova/migrace
```

Viz [sociální diskontní sazba](../sociální-diskontní-sazba/), proč diskontní faktor záleží během typické 5–10leté životnosti systému, a [stavět, nebo koupit ve vládě](../stavět-nebo-koupit-ve-vládě/), jak TCO vstupuje do rozhodnutí stavět/koupit.

## Praktický příklad

Resort porovnává dva systémy pro správu případů na 5letém horizontu při diskontní sazbě Green Booku 3,5 %.

```
Systém A: kapvýdaje 3 500 000 £, opvýdaje 250 000 £/rok
Systém B: kapvýdaje 1 800 000 £ (vypadá levněji), opvýdaje 650 000 £/rok
          (těžší podpora dodavatele a zátěž integrace)

Naivní srovnání jen podle kapvýdajů: vítězí B, 1,8 mil. £ < 3,5 mil. £.

Součet diskontních faktorů, 5 let při 3,5 %: 0,966+0,934+0,902+0,871+0,842 ≈ 4,515

TCO_A = 3 500 000 + 250 000 × 4,515 = 3 500 000 + 1 128 750 = 4 628 750 £
TCO_B = 1 800 000 + 650 000 × 4,515 = 1 800 000 + 2 934 750 = 4 734 750 £
```

TCO obrací naivní rozhodnutí: Systém B je za pět let o něco dražší, když jsou provozní náklady diskontovány a sečteny, protože jeho podíl opvýdajů na nákladech za celou dobu je 62 % (2 934 750 / 4 734 750) oproti 24 % u Systému A — konkrétní případ zjištění „údržba je většina účtu“, zcela skrytý srovnáním cenovek.

## Souvislost s softwarovým inženýrstvím

TCO je číslo, které by mělo disciplinovat každé rozhodnutí [stavět, nebo koupit](../stavět-nebo-koupit-ve-vládě/) a každý případ splácení [technického dluhu](../technický-dluh-jako-eroze-veřejné-hodnoty/), protože úrok dluhu a odložená údržba jsou obojí řádky provozních nákladů, které patří do téhož diskontovaného celku, ať je někdo sledoval, nebo ne. Inženýři navrhující volbu platformy nebo dodavatele by měli předložit úplnou tabulku TCO, nikoli zadávací cenu, protože zadávací cena je přesně to číslo, na které finanční případ Green Booku byl navržen, aby se resorty nespoléhaly samy. TCO je také poctivým jmenovatelem pro posudky [hodnoty za peníze](../hodnota-za-peníze/) — VFM porovnává přínos s náklady a podhodnocený řádek nákladů nafukuje každý poměr VFM v byznys případu.

## Úskalí

- **Srovnání jen podle kapvýdajů**: nejběžnější zadávací chyba — porovnávání ceníkových cen dodavatelů bez odpovídající prognózy provozních nákladů pro každou variantu.
- **Vyloučení nákladů na ukončení a migraci**: extrakce dat na konci smlouvy, přesun na jinou platformu a penále za závislost na dodavateli jsou skutečné řádky TCO, které se v původním byznys případu zřídka objeví.
- **Vyloučení nákladů na bezpečnost a soulad**: kadence záplat, obnova akreditace a náklady auditu rostou s věkem a složitostí systému — viz [hodnota kybernetické bezpečnosti veřejného sektoru](../hodnota-kybernetické-bezpečnosti-veřejného-sektoru/) — a rutinně se vynechávají z prognózy opvýdajů.
- **Nediskontované srovnání variant s odlišnými profily nákladů**: srovnání kapitálově náročné varianty s opvýdajově náročnou bez diskontování systematicky zvýhodňuje tu variantu, která náhodou odkládá více nákladů do pozdějších let.

## Zdroje

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
