# Nákladová efektivita v efektivním altruismu

Uvažování o nákladové efektivitě v efektivním altruismu (EA) řadí charitativní intervence podle množství dobra — nejčastěji vyjádřeného jako zachráněné životy nebo získané zdraví na utracený dolar — a směřuje peníze k té intervenci, která na hranici koupí nejvíce dobra. GiveWell je nejvlivnějším praktikem oboru: zveřejňuje výslovné, aktualizované odhady nákladů na zachráněný život a nákladů na výsledek pro malý seznam „špičkových charit“ a doporučuje dárcům přispívat té, která má aktuálně prostor pro další financování za nejlepší sazbu.

## Proč na tom záleží

GiveWell uvádí nákladovou efektivitu jako hlavní kritérium ve své zveřejněné metodice: hledá intervence podložené důkazy, odhaduje jejich nákladovou efektivitu ve společné jednotce a řadí napříč zcela nesouvisejícími příčinami — moskytiéry proti malárii, suplementace vitaminu A, peněžní převody, platby za podněty k očkování — na této jediné ose. Je to přímý import uvažování ve stylu QALY/DALY ze zdravotnické ekonomie do filantropie: tak jako se zdravotní systém ptá „kolik QALY na libru na hranici“, ptá se GiveWell „kolik životů nebo let života na dolar na hranici“ a zachází s příčinami jako se zaměnitelnými, jakmile jsou převedeny do této společné jednotky. Viz [analýza nákladové efektivity ve vládě](../analýza-nákladové-efektivity-ve-vládě/) pro veřejnosektorového bratrance tohoto rámce uvažování.

Nejcitovanější číslo GiveWell se týká Against Malaria Foundation (AMF), která distribuuje moskytiéry ošetřené insekticidem. V publikovaném příkladu GiveWell (čerpajícím z údajů o financování z roku 2020) financovalo zhruba 4 500 $ dostatek sítí k odvrácení jednoho úmrtí po zohlednění nedokonalého používání sítí, základní úmrtnosti bez sítí a úpravy o zaměnitelnost financování (funging) — možnost, že by AMF část tohoto financování obdržela od jiných dárců tak či tak. GiveWell výslovně uvádí, že toto číslo se v čase a napříč geografiemi mění s tím, jak se mění výskyt malárie, náklady sítí a mezery ve financování, a že se obecně očekává, že náklady na záchranu života s časem porostou, protože nejlevnější příležitosti jsou využity jako první; je to ilustrace metody, nikoli pevná cena.

## Matematika

```
Nákladová efektivita = Náklady intervence / Jednotky vytvořeného dobra
                      (např. $ na zachráněný život, $ na odvrácený DALY, $ na QALY)

Řetězec GiveWell pro program moskytiér, ilustrativně:
  $ na zakoupenou a dodanou síť
    ÷ podíl sítí skutečně používaných
    ÷ lidí chráněných jednou sítí
    × základní roční úmrtnost bez sítí
    × snížení úmrtnosti přisouditelné používání sítí (z důkazů RCT)
    × roky ochrany na síť
    ÷ úprava o funging (peníze vytlačující financování jiných dárců)
  = $ na zachráněný život (očištěno o kontrafaktuální efekty financování)
```

Tento řetězec je důležitý, protože každý krok je místem, kde odhady nákladové efektivity běžně chybují — viz úskalí níže — a protože činí výslovným, že „náklady na zachráněný život“ nejsou nikdy surová pozorovaná cena; jsou to modelovaný odhad postavený z několika samostatně nejistých vstupů.

## Praktický příklad

Dvě hypotetické intervence, obě podložené důkazy, soutěžící o týchž marginálních 100 000 £:

- **Moskytiéry (ve stylu AMF)**: zhruba 4 500 $ na zachráněný život podle publikovaného příkladu GiveWell čerpajícího z údajů z roku 2020, tj. velmi zhruba 20 zachráněných životů na 100 000 £ v závislosti na použitém směnném kurzu a roce.
- **Program odčervení**: žádný věrohodný přínos pro úmrtnost, ale silné důkazy dlouhodobého růstu příjmů z dětského odčervení; GiveWell jej oceňuje v pojmech růstu příjmů, nikoli zachráněných životů, což ztěžuje přímé srovnání s moskytiérami bez sdílené jednotky. GiveWell používá výslovný rámec „morálních vah“ k převedení obojího do jedné interní jednotky pro řazení.

Disciplínou metody EA je vynutit toto srovnání na světlo místo financování obou, protože obě „znějí dobře“. Viz [sociální návratnost investice](../sociální-návratnost-investice/) pro ekvivalentní vynucovací funkci používanou britskými sociálními podniky a místními zadavateli, která klade tutéž otázku — jaký je nejlepší výnos na libru — v idiomu peněžní hodnoty místo idiomu životů/DALY.

## Souvislost s softwarovým inženýrstvím

Inženýři budující dárcovské platformy, nástroje pro párování grantů nebo dashboardy dopadu pro poskytovatele zarovnané s EA (Open Philanthropy, samotný GiveWell, platformy efektivního dávání jako Giving What We Can) musí zobrazovat odhady nákladové efektivity jako rozmezí s uvedenými předpoklady, nikoli jednotlivá čísla — podkladový model má několik multiplikativních nejistých vstupů a sbalení do jednoho čísla na dashboardu zkresluje důvěru, kterou sám GiveWell uvádí. Verzujte každý odhad datem zveřejnění; GiveWell své hodnoty revidoval, někdy podstatně, když přicházejí nové důkazy RCT nebo data o mezerách financování, a platforma, která si ukládá staré číslo do mezipaměti, se mlčky stává nesprávnou.

## Úskalí

- **Zacházení s odhadem nákladové efektivity jako s pevnou cenou.** Je to výstup modelu s několika nejistými multiplikativními vstupy (míry používání, základní úmrtnost, úprava o funging); uveďte datum a verzi.
- **Ignorování funging/vytěsnění.** Financování organizace, která by peníze obdržela od jiného dárce tak či tak, koupí méně kontrafaktuálního dobra, než naznačuje titulek — viz [dodatečnost a mrtvá váha](../dodatečnost-a-mrtvá-váha/) a [vytěsnění a přisouzení](../vytěsnění-a-přisouzení/).
- **Porovnávání napříč nekompatibilními jednotkami bez převodu.** „Zachráněné životy“ a „získaný příjem“ nejsou přímo srovnatelné bez výslovného rámce morálních vah; jejich prezentace vedle sebe, jako by byly srovnatelné, je kategorická chyba.
- **Tunelové vidění oblasti příčin.** Řazení pouze v rámci oblasti příčin (např. jen charity globálního zdraví) a nazývání vítěze „nejnákladověji efektivní charitou“ nadsazuje tvrzení; mezipříčinné řazení GiveWell je záměrně úzké (globální zdraví a blahobyt), nikoli univerzální.

## Zdroje

- GiveWell, „Our criteria.“ <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, „How Much Does It Cost to Save a Life?“ (verze z února 2024). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, přehled Against Malaria Foundation. <https://www.givewell.org/charities/amf>
- Giving What We Can, o nákladové efektivitě napříč příčinami. <https://www.givingwhatwecan.org/>
