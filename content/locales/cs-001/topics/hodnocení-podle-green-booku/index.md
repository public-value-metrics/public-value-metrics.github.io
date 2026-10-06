# Hodnocení podle Green Booku (model pěti případů)

Green Book je závazný pokyn ministerstva financí (HM Treasury) pro hodnocení a evaluaci návrhů výdajů britské vlády. Jeho ústřední nástroj, model pěti případů, nutí byznys případ odpovědět na pět samostatných otázek — je to dobrý nápad, přináší to hodnotu, lze to pořídit, lze si to dovolit a lze to dodat — místo aby se vše zhroutilo do jediného čísla, které ministr jen mávnutím schválí.

## Proč na tom záleží

Každý návrh výdajů centrální vlády Spojeného království nad limity delegované pravomoci resortu musí projít hodnocením podle Green Booku, než jsou uvolněny prostředky, a Green Book Review 2020 ministerstva financí (zveřejněný po kritice, že proces byl zkreslený v neprospěch chudších regionů, viz <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) zpřísnil požadavek, aby varianty byly porovnávány se skutečným výchozím stavem „minimum“ a aby byla strategická shoda prokázána ještě před posouzením hodnoty za peníze. Model pěti případů sám předchází Green Book — vznikl v Office of Government Commerce jako standardní struktura byznys případu — ale vydání Green Booku 2022 jej zakotvuje jako povinnou podobu každého byznys případu usilujícího o schválení Treasury: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Smysl rozdělení případu na pět částí je, že návrh může selhat v kterékoli dimenzi bez ohledu na ostatní. Strategicky zdravá, nákladově efektivní replatformizace IT může stále selhat v obchodním případu, pokud ji může dodat jen jeden dodavatel (rizikové zadání jedinému dodavateli), nebo selhat v případu řízení, pokud resort nemá žádné zkušenosti s dodáváním programů takové velikosti. Jediné skóre „hodnoty za peníze“ skrývá právě tento druh způsobu selhání.

## Matematika

Model pěti případů je struktura, nikoli vzorec, ale každý případ má svůj vlastní kvantitativní nebo důkazní test:

```
1. Strategický případ
   Důkazy o cíli výdajů navázaném na strategii organizace.
   Test: existuje vůbec důvod ke změně? („nedělat nic“ je vždy možnost.)

2. Ekonomický případ
   Hodnocení variant proti výchozímu stavu „minimum“ pomocí
   sociální analýzy nákladů a přínosů nebo analýzy nákladové efektivity.
   Test: která varianta maximalizuje čistou veřejnou hodnotu?
   Viz ../social-cost-benefit-analysis/ a ../cost-effectiveness-analysis-in-government/

3. Obchodní případ
   Zapojení trhu, způsob zadání, alokace rizik mezi kupujícího a dodavatele.
   Test: lze preferovanou variantu pořídit za přijatelných podmínek?

4. Finanční případ
   Dostupnost v rámci rozpočtových limitů resortu, zdroj financování,
   rozvahové zacházení.
   Test: můžeme si to dovolit letos i v každém dalším roce?

5. Případ řízení
   Řízení, plán projektu, plán realizace přínosů, registr rizik.
   Test: dokáže to tato organizace skutečně dodat?
   Viz ../benefits-realization/
```

Ekonomický případ je místem, kde žije kvantitativní hodnocení: varianty se porovnávají na bázi čisté současné hodnoty upravené [sociální diskontní sazbou](../sociální-diskontní-sazba/) metodou [sociální analýzy nákladů a přínosů](../sociální-analýza-nákladů-a-přínosů/), nebo, kde přínosy nelze poctivě peněžně vyjádřit, prostřednictvím [analýzy nákladové efektivity](../analýza-nákladové-efektivity-ve-vládě/) či [vícekriteriální analýzy rozhodování](../vícekriteriální-analýza-rozhodování/).

## Praktický příklad

**Místní úřad**: město hodnotící IT systém oprav bytů za 12 milionů £ projde pět případů takto. Strategický případ: nedodělky oprav porušují zákonný standard slušného bydlení do 18 měsíců bez zásahu. Ekonomický případ: tři varianty oceněné na 10leté hodnoticí období při diskontní sazbě 3,5 % (podle standardní sociální míry časové preference Green Booku 2022) — „minimum“ (záplatovat starší systém, NPV −4,1 mil. £), „koupit“ (platforma COTS, NPV +2,3 mil. £), „postavit“ (zakázková platforma, NPV +0,6 mil. £ po uplatnění 40% zkreslení optimismem pro vývoj softwaru na nediskontované kapitálové náklady, podle přílohy A Green Booku). Koupě vyhrává ekonomický případ. Obchodní případ: existují dva životaschopní dodavatelé, soutěžní zadání je proveditelné — splněno. Finanční případ: kapitál je dostupný od Public Works Loan Board, provozní náklady se vejdou do střednědobého finančního plánu — splněno. Případ řízení: město dodalo dva srovnatelné systémy za posledních pět let — splněno. Návrh pokračuje variantou „koupit“.

**Resort centrální vlády**: návrh se silným ekonomickým případem (NPV +40 mil. £), kde příslušnou akreditaci drží jen jeden dodavatel, neprojde obchodním případem z hlediska konkurenčního napětí, což vynutí buď výjimku pro zadání jedinému dodavateli (s vlastní zátěží kontroly), nebo přepracování specifikace tak, aby se trh otevřel — to by samotný ekonomický případ nikdy neodhalil.

## Souvislost s softwarovým inženýrstvím

Inženýrské týmy uvnitř vlády či grantem financovaných organizací obvykle vidí jen ekonomický případ, protože právě tu část má produktové a inženýrské vedení ospravedlnit („jaká je návratnost této migrace?“). Ale byznys případ, který projde Treasury nebo grantovou komisí, potřebuje všech pět, a inženýři jsou často nejlépe umístěni k zodpovězení obchodního případu (lze to skutečně pořídit, nebo nás to uzamkne do proprietárního formátu jednoho dodavatele?) a případu řízení (máme schopnost dodání, nebo to závisí na tom, že tři konkrétní lidé neodejdou?). Požadavek na „jen čísla byznys případu“ berte jako požadavek na jednu pětinu skutečného rozhodnutí. Viz [hodnotu za peníze](../hodnota-za-peníze/) pro to, jak se výstup ekonomického případu obvykle shrnuje, a [celkové náklady vlastnictví](../celkové-náklady-vlastnictví-ve-vládním-it/) pro obvyklé kvantitativní jádro finančního případu.

## Úskalí

- **Psaní ekonomického případu jako prvního a strategického případu podle něj.** Green Book Review 2020 zjistil, že právě tento způsob selhání vedl zkreslení hodnocení směrem k místům a odvětvím, která již byla dobře doložena, a upevňoval regionální nerovnost; strategický případ by měl stanovit cíl dříve, než se porovnávají varianty.
- **Zacházení s „minimem“ jako s „nic nedělat“.** Správným výchozím stavem je nejlevnější varianta, která stále splňuje minimální zákonné nebo bezpečnostní povinnosti, nikoli fantazie o nulových výdajích — srovnání s doslovnou nulou nafukuje zdánlivou hodnotu každé varianty.
- **Přeskakování obchodního a řídicího případu, protože ekonomický případ je silný.** Návrh s vysokou NPV, který nelze soutěžně pořídit nebo který nedokáže dodat zadávající organizace, není financovatelný návrh; recenzenti Treasury běžně zamítají z těchto důvodů i při přesvědčivém ekonomickém případu.
- **Aplikace modelu pěti případů jen jednou, na začátku.** Green Book vyžaduje, aby byl případ znovu projednán v každé následující schvalovací bráně (strategický nástin, rámcový byznys případ, plný byznys případ), jak se náklady a důkazy zpřesňují — případ zmrazený ve fázi nástinu přehlédne růst nákladů, který by pozdější brána zachytila.

## Zdroje

- HM Treasury. „The Green Book: appraisal and evaluation in central government.“ 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. „Green Book Review 2020: findings and response.“ 2020. <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. „Guide to developing the project business case.“ <https://www.gov.uk/government/publications/project-business-case-guide>
