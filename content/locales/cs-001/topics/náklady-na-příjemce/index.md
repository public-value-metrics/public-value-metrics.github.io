# Náklady na příjemce

Náklady na příjemce jsou celkové náklady programu dělené počtem jedinečných osob, které službu obdržely — kohokoli, koho se dotkla, bez ohledu na to, zda se jejich okolnosti skutečně změnily. Je to nejrychlejší číslo efektivity, které organizace dokáže vytvořit, protože „komu jsme sloužili“ je téměř vždy již v systému pro správu případů, zatímco „komu bylo pomoženo“ obvykle není.

## Proč na tom záleží

Poskytovatelé žádají o náklady na příjemce neustále, a to z obhajitelných důvodů: jsou k dispozici okamžitě, jsou srovnatelné napříč portfoliem velmi odlišných programů a jsou poctivé o dosahu způsobem, jakým tvrzení o výsledcích — jejichž ověření trvá déle a jsou snáze nadsazená — nejsou. Britský Charities SORP (Statement of Recommended Practice), který upravuje, jak charity vykazují podle FRS 102, vyžaduje, aby výroční zprávy správců popisovaly dosažené výsledky vůči cílům, ale většina menších charit se ve svém manažerském účetnictví stále ve výchozím stavu opírá o jednotkové náklady založené na dosahu, protože jsou levné na výrobu a přívětivé k auditu.

Nebezpečí spočívá v zacházení s náklady na příjemce, jako by odpovídaly na otázku, na kterou odpovědět nemohou: zda peníze fungovaly. Viz [náklady na výsledek](../náklady-na-výsledek/) pro metriku, která na to skutečně odpovídá, a [výsledky versus výstupy](../výsledky-versus-výstupy/) pro podkladové rozlišení. Náklady na příjemce jsou legitimní metrika třídění a dosahu — říkají poskytovateli, jak daleko peníze dosáhnou — ale nízké náklady na příjemce mohou znamenat buď skutečnou efektivitu, nebo službu tak tenkou, že nic nemění.

## Matematika

```
Náklady na příjemce = Celkové náklady programu / Počet jedinečných obsloužených osob

Kontrast:
Náklady na výsledek  = Celkové náklady programu / Počet osob dosahujících definovaného výsledku

Náklady na příjemce jsou vždy ≤ náklady na výsledek, protože populace výsledku je podmnožinou
(často malou) populace příjemců.
```

## Praktický příklad

**Potravinová banka, stejný rok jako v příkladu nákladů na výsledek**:

- Celkové náklady programu: 450 000 £
- Jedinečné obsloužené domácnosti (tři a více balíčků): 1 800

```
Náklady na příjemce = 450 000 £ / 1 800 = 250 £ na obsloužené domácnosti
```

Porovnejte obě metriky vedle sebe:

| Metrika | Jmenovatel | Výsledek |
|---|---|---|
| Náklady na příjemce | 1 800 obsloužených domácností | 250 £ |
| Náklady na výsledek | 630 domácností dosahujících potravinové jistoty | 714 £ |

Poskytovatel, který vidí jen 250 £, by mohl dojít k závěru, že jde o vysoce efektivní charitu. Poskytovatel, který vidí obě čísla, může položit užitečnější otázku: je rozdíl mezi dosahem (1 800) a výsledkem (630) mezerou ve sběru dat, mezerou v návrhu, nebo poctivým odrazem toho, jak těžké je samotnou potravinovou pomocí dosáhnout potravinové jistoty?

**Charita pro pracovní školení, ilustrativně**: náklady na příjemce (zapsané) = 2 000 £; náklady na výsledek (trvalé zaměstnání po 6 měsících) = 11 000 £, protože jen 18 % zapsaných program dokončí a najde trvalou práci. Rozchod těchto dvou čísel pětinásobně je běžný všude, kde jsou míry dokončení nebo trvanlivosti nízké — školicí charita a potravinová banka jsou zde strukturálně totožné.

## Souvislost s softwarovým inženýrstvím

Náklady na příjemce jsou výchozí metrikou v softwaru pro neziskové organizace, protože je to metrika, která vypadne ze záznamu příjemce bez další práce: vytvořit případ, zaznamenat službu, spočítat řádky. Vybudování systému, který podporuje i náklady na výsledek, znamená záměrné přidání druhé plnohodnotné entity — události výsledku, datované a definované nezávisle na poskytnutí služby — a odolání pokušení nechat „případ uzavřen“ zastupovat „výsledek dosažen“. Při vymezování platformy pro správu grantů nebo CRM se ptejte, kterou ze dvou metrik každý dashboard skutečně ukazuje, a podle toho jej označte; jejich záměna v jediné dlaždici „dopadu“ je jednou z nejběžnějších příčin úskalí níže na úrovni softwaru. Viz [databáze jednotkových nákladů](../databáze-jednotkových-nákladů/) pro srovnání kterékoli metriky, jakmile je správně označena.

## Úskalí

- **Prezentace nákladů na příjemce jako dopadu.** Měří dosah, nikoli změnu. Označte dashboardy a zprávy „náklady na obsloužené osoby“, nikoli „náklady na osoby, kterým bylo pomoženo“.
- **Dvojí započtení napříč programy.** Osoba, která od téže charity dostává potravinové balíčky i radu o dluzích, je jeden příjemce, nikoli dva, pokud má jmenovatel popisovat jedinečný dosah; rozhodněte a zdokumentujte, která konvence se používá.
- **Zacházení s nižším číslem jako s vždy lepším.** Otevřený klub obědů vždy porazí intenzivní službu správy případů v nákladech na příjemce, protože lehký dotek stojí méně. To neříká nic o tom, co vytváří trvanlivější změnu na libru.
- **Tiché střídání jmenovatelů mezi zprávami.** Údaj o nákladech na příjemce citovaný v jedné výroční zprávě vůči „zapsaným“ a v příští vůči „dokončivším“ není srovnatelný meziročně; uvádějte jmenovatele pokaždé.

## Zdroje

- Charity Commission for England and Wales, pokyny k výkaznictví charit. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), „Four Pillar Approach.“ <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
