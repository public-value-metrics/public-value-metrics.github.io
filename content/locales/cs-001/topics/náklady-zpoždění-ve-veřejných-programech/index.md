# Náklady zpoždění ve veřejných programech (CoD)

Náklady zpoždění (Cost of Delay) jsou veřejná hodnota ztracená za jednotku času, kdy program, služba nebo systémová změna *ještě nebyly* dodány. Je to hlavní mostní metrika této kapitoly: převádí „spuštění se zpozdilo o šest měsíců“ na libry za týden nebo na WELLBY za týden, aby se o zpoždění dalo diskutovat ve stejné měně jako o samotném byznys případu.

## Proč na tom záleží

Reinertsenovo pravidlo — „pokud kvantifikujete jen jednu věc, kvantifikujte náklady zpoždění“ — se do vlády přenáší téměř beze změny, protože veřejné programy jsou jemu neobvykle vystaveny: byznys případy se schvalují vůči předpokládanému toku přínosů, ale tok začíná téct až při spuštění a každý týden zpoždění je týdnem ztracené hodnoty, kterou nikdo v registru rizik neoceňuje. Opakované zkoumání zavádění Universal Credit ze strany National Audit Office (viz jeho zprávy „Rolling Out Universal Credit“, <https://www.nao.org.uk/>) ilustruje vzorec: zpoždění harmonogramu bylo sledováno a vykazováno, ale náklad v librách za týden z toho, že reformovaný systém *ještě nebyl* dodán další skupině žadatelů, byl jen zřídka uváděn jako titulkové číslo, přestože je to číslo, které mělo řídit prioritizaci a eskalaci. Bez čísla CoD vypadá zpožděný program jako problém harmonogramu pro dodávací radu; s ním je to problém eroze hodnoty pro odpovědného úředníka.

## Matematika

```
CoD = přínos za jednotku času ztracený, dokud není dodáno   (£/týden nebo WELLBY/týden)

Celková ztráta ze zpoždění = CoD × délka zpoždění

Toky přínosů k sečtení u veřejných programů:
  úspory uvolňující hotovost  (snížení podvodů/chyb, ušetřené dočasné náklady)
+ uvolněná nehotovostní kapacita (hodiny pracovníků/úředníků × zatížené náklady)
+ přínos blahobytu           (WELLBY × 13 000 £/WELLBY, doplňující pokyn HMT
                                Green Book k blahobytu, ceny 2019)
```

U služeb pro občany denominujte v blahobytu stejně jako v penězích — viz [roky života upravené o blahobyt](../roky-života-upravené-o-blahobyt/) pro podkladovou jednotku a [náklady obětované příležitosti ve veřejných výdajích](../náklady-obětované-příležitosti-ve-veřejných-výdajích/) pro to, co by odložená libra mohla jinak financovat.

## Praktický příklad

**Místní úřad**: modernizace systému příspěvku na bydlení snižuje chybu přeplatků o 150 £/žádost/rok napříč 20 000 platnými žádostmi.

```
Roční přínos = 150 × 20 000 = 3 000 000 £/rok
CoD = 3 000 000 / 52 ≈ 57 700 £/týden
12měsíční zpoždění implementace stojí 52 × 57 700 ≈ 3 000 000 £ odvratitelné chyby.
```

**Agentura centrální vlády**: služba posuzování dávky na invaliditu dodaná o šest měsíců (26 týdnů) později, než bylo plánováno, znamená, že 200 000 žadatelů ročně čeká v průměru o tři týdny déle na rozhodnutí. Každý dodatečný týden finanční nejistoty je modelován jako účinek −0,0018 WELLBY (bod životní spokojenosti):

```
Ztráta WELLBY na žadatele = 3 × 0,0018 = 0,0054
Roční ztráta WELLBY = 200 000 × 0,0054 = 1 080 WELLBY/rok
CoD_blahobyt = 1 080 / 52 ≈ 20,8 WELLBY/týden
CoD_peníze = 20,8 × 13 000 £ ≈ 270 000 £/týden hodnoty blahobytu
```

26týdenní zpoždění tedy „stojí“ zhruba 540 WELLBY — v hodnotě asi 7 milionů £ podle ocenění blahobytu Green Booku — čímž se zmeškané datum spuštění přerámuje jako událost blahobytu občanů, nikoli poznámka pod čarou projektového řízení.

## Souvislost s softwarovým inženýrstvím

CoD je to, co činí [metriky DORA](../metriky-dora-pro-veřejnou-hodnotu/) a [metriky toku](../metriky-toku-v-dodávání-vlády/) finančně čitelnými: doba průběhu v potrubí × CoD jsou peníze (nebo blahobyt) spálené ve frontách, než se kdy dostanou k občanovi. Konkrétně:

- **Prioritizace**: řaďte backlog podle CoD ÷ doba trvání, nikoli podle seniority zúčastněné strany — softwarový analog požadavku Green Booku hodnotit varianty podle hodnoty, nikoli podle toho, kdo žádá.
- **Zadávání**: 12–18měsíční cyklus rámcového zadávání má CoD; jeho ocenění mění argument naléhavosti pro zrychlené cesty a přímo vstupuje do rozhodnutí [stavět, nebo koupit](../stavět-nebo-koupit-ve-vládě/), kde je čas do hodnoty rozhodovacím faktorem.
- **Případ přínosů**: každé číslo CoD uvedené při schválení by se mělo znovu objevit při [realizaci přínosů](../realizace-přínosů/) — pokud byly náklady zpoždění skutečné, měl by být zrychlený přínos po spuštění měřitelný.

## Úskalí

- **Předpoklad lineárního CoD**: některé veřejné služby mají hodnotu ve tvaru lhůty (zákonné datum souladu — CoD po datu vyskočí na úrovně rizika vynucení, před ním téměř nula), nikoli plynulou týdenní sazbu. Klasifikujte profil naléhavosti, než začnete násobit.
- **CoD u výstupů, které nikdo nepotřebuje**: zpoždění má cenu jen tehdy, má-li nedodaná věc hodnotu; systém, který nikdo nebude používat, má nulové CoD bez ohledu na to, jak je pozdě.
- **Dvojí započtení zpoždění a diskontování**: [sociální diskontní sazba](../sociální-diskontní-sazba/) již oceňuje čas na víceletých horizontech hodnocení; CoD je operační verze v rámci horizontu pro týdny a měsíce. Používejte CoD pro zpoždění harmonogramu, posun NPV pro víceleté přefázování.

## Zdroje

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, doplňující pokyn Green Book: blahobyt. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, zprávy o zavádění Universal Credit. <https://www.nao.org.uk/>
