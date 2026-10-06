# Sociální diskontní sazba

Sociální diskontní sazba převádí budoucí náklady a přínosy na dnešní hodnoty, aby bylo možné programy s výnosy rozloženými na desetiletí porovnávat na společném základě. Green Book ministerstva financí (HM Treasury) předepisuje klesající schéma ukotvené na 3,5 % pro prvních 30 let, vycházející z Ramseyho vzorce — konkrétní, citovatelné číslo, které se stalo živým politickým a etickým sporem všude, kde se aplikuje na dlouhodobé závazky, jako je klimatická politika či infrastruktura.

## Proč na tom záleží

Libra přínosu získaná za 30 let nemá stejnou hodnotu jako libra přínosu získaná dnes, a to z důvodů, které jsou zčásti o čisté časové preferenci (lidé a společnosti dávají přednost dobrým věcem dříve) a zčásti o růstu (očekává se, že budoucí společnost bude bohatší, takže pro ni libra na okraji znamená méně). Příloha 6 Green Booku odvozuje standardní britskou diskontní sazbu z Ramseyho vzorce, kombinací míry čisté časové preference s očekávaným tempem růstu spotřeby a elasticitou mezní užitečnosti spotřeby, což dává zveřejněnou sazbu 3,5 % ročně pro roky 0–30, klesající podle zveřejněného schématu pro roky 31 a dále (až na 1 % pro roky 301+). Toto schéma existuje právě proto, že konstantních 3,5 % složených po století by učinilo prakticky jakýkoli dlouhodobý přínos — protipovodňovou ochranu zachraňující životy za 80 let, snížení emisí uhlíku odvracející škody za 100 let — v současné hodnotě zanedbatelným, což Treasury posoudilo jako nevěrohodný etický závěr pro skutečně dlouhověké infrastrukturní a environmentální rozhodnutí.

Diskontní sazba je sporná právě proto, že její volba není neutrální technický parametr: kóduje úsudek o tom, kolik by společnost měla obětovat dnes pro lidi, kteří se ještě nenarodili. Sternova zpráva o ekonomice změny klimatu (Stern Review, 2006) použila diskontní sazbu blízkou nule (čistá časová preference kolem 0,1 %) s argumentem, že diskontovat blahobyt budoucích generací na úrovni něčeho podobného tržním sazbám je eticky neobhajitelné, je-li škoda (katastrofická změna klimatu) nevratná. Kritici — zejména William Nordhaus — namítali, že Sternova téměř nulová sazba přeháněla argument pro okamžité výdaje na klima tím, že téměř jakýkoli dnešní náklad činí ospravedlnitelným vůči sotva diskontovanému budoucímu přínosu. Spor nebyl o matematice; byl o tom, čí etický rámec má sazbu stanovit, a zůstává standardní ilustrací, proč je diskontní sazba politickou volbou, nikoli jen pojistně matematickým vstupem.

## Matematika

Ramseyho vzorec stojící za sazbou Green Booku:

```
r = ρ + η·g

kde:
  r = sociální diskontní sazba
  ρ = míra čisté časové preference (netrpělivost + riziko katastrofy)
  η = elasticita mezní užitečnosti spotřeby
  g = očekávané roční tempo růstu spotřeby na obyvatele
```

Klesající schéma Green Booku (příloha 6, ilustrativní — přesnou zveřejněnou tabulku ověřte v aktuálním vydání):

```
Roky 0–30:    3,5 %
Roky 31–75:   3,0 %
Roky 76–125:  2,5 %
Roky 126–200: 2,0 %
Roky 201–300: 1,5 %
Roky 301+:    1,0 %
```

Současná hodnota budoucí částky:

```
PV = FV / (1 + r)^t
```

## Praktický příklad

**Protipovodňový projekt**: projekt přinese 10 milionů £ odvrácených povodňových škod v roce 40.

Při pevné sazbě 3,5 %: PV = 10 000 000 / (1,035)^40 ≈ 2,52 milionu £ — přínos vypadá malý.

Při klesajícím schématu Green Booku (3,5 % pro roky 0–30, poté 3,0 %) se výpočet skládá při 3,5 % prvních 30 let a při 3,0 % pro roky 31–40:

```
PV = 10 000 000 / [(1,035)^30 × (1,03)^10]
   = 10 000 000 / [2,807 × 1,344]
   ≈ 10 000 000 / 3,773
   ≈ 2,65 milionu £
```

Klesající schéma mírně zvyšuje současnou hodnotu dlouhodobých přínosů oproti pevné vysoké sazbě — což je výslovný účel schématu, neboť pevných 3,5 % po století by diskontovalo přínos 100 milionů £ v roce 100 na méně než 3,3 milionu £.

**Digitální infrastruktura**: vládní migrace do cloudu za 4 miliony £ nyní má odvrátit 500 000 £ ročně nákladů na údržbu starších systémů po dobu 15 let. Při 3,5 % je současná hodnota této anuity přibližně 500 000 £ × 11,52 (15letý anuitní faktor při 3,5 %) ≈ 5,76 milionu £ — s pohodlným přesahem nad náklady 4 miliony £, případ s kladnou čistou současnou hodnotou, který by při naivně zvolené vyšší sazbě vypadal výrazně slaběji (při 7 % klesne tentýž anuitní faktor na zhruba 9,11, tedy 4,56 milionu £, stále kladné, ale s mnohem užší rezervou).

## Souvislost s softwarovým inženýrstvím

Většina softwarových byznys případů běží na 3–5 let, hluboko uvnitř pásma pevných 3,5 %, takže klesající schéma zřídka působí přímo — ale podkladová disciplína je důležitá pro každou vládní technologickou investici s dlouhou životností aktiva (národní platforma, program datové infrastruktury, vícedekádová smlouva):

- Používejte zveřejněnou sazbu Green Booku, nikoli interní „hurdle rate“ vypůjčenou ze soukromých financí; auditoři a recenzenti Treasury budou očekávat standardní schéma.
- U přínosů realizovaných mnoho let po spuštění (dlouhodobé úspory na údržbě platformy, narůstající hodnota ekosystému otevřených dat — viz [hodnota otevřených dat](../hodnota-otevřených-dat/)) může volba diskontování změnit byznys případ z kladného na záporný; učiňte sazbu a horizont explicitními předpoklady, nikoli skrytými výchozími hodnotami.
- To přímo vstupuje do [hodnocení podle Green Booku](../hodnocení-podle-green-booku/), modelu pěti případů, který formálně vyžaduje diskontovaný peněžní tok, a do [oceňování blahobytu](../oceňování-blahobytu/), kde se tatáž otázka diskontování objevuje u nepeněžních přínosů blahobytu.
- Viz také [mezigenerační spravedlnost a diskontování udržitelnosti](../mezigenerační-spravedlnost-a-diskontování-udržitelnosti/) pro spor Stern versus Nordhaus aplikovaný konkrétně na investice do environmentálních a klimatických technologií.

## Úskalí

- **Použití pevné sazby pro velmi dlouhé horizonty.** Klesající schéma Green Booku existuje právě proto, že konstantní sazba podhodnocuje skutečně dlouhodobé přínosy; ověřte, které pásmo platí, místo abyste všude používali výchozích 3,5 %.
- **Považování diskontní sazby za eticky neutrální.** Spor Stern–Nordhaus ukazuje, že sazba kóduje hodnotový úsudek o budoucích generacích; její změna mění, které programy vypadají ospravedlnitelně, takže by měla být uvedena a obhájena, nikoli skryta ve výchozí hodnotě tabulky.
- **Zaměňování sociální diskontní sazby se soukromými kapitálovými náklady.** Vládní náklady na půjčky a soukromé požadované výnosy jsou jiné pojmy než sociální sazba odvozená z Ramseyho vzorce a jejich záměna ve veřejném hodnocení typicky zkreslí výsledek ve prospěch krátkodobých výnosů.
- **Nekonzistentní diskontování reálných a nominálních peněžních toků.** Sazba Green Booku je reálná (očištěná od inflace); diskontování nominálních peněžních toků touto sazbou podstatně podhodnocuje současné hodnoty.

## Zdroje

- HM Treasury, „The Green Book: Central Government Guidance on Appraisal and Evaluation“, příloha 6 (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. „The Economics of Climate Change: The Stern Review.“ HM Treasury, 2006.
- Nordhaus WD. „A Review of the Stern Review on the Economics of Climate Change.“ Journal of Economic Literature, 2007;45(3):686–702.
- Ramsey FP. „A Mathematical Theory of Saving.“ Economic Journal, 1928;38(152):543–559.
