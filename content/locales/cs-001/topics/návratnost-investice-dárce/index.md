# Návratnost investice dárce

Návratnost investice dárce je to, co libra konkrétního dárce skutečně koupí ve výsledcích — nikoli provozní poměry charity a nikoli vlastní návratnost charity na celý její rozpočet. Přerámuje ROI z pohledu organizace (jak efektivně fungujeme) na pohled dárce (co mění můj marginální příspěvek) a tato dvě čísla se rutinně a chybně považují za totéž.

## Proč na tom záleží

Vlastní „ROI“ charity, pokud se tento výraz vůbec používá, obvykle popisuje něco jako [náklady na příjemce](../náklady-na-příjemce/) nebo [poměr režijních nákladů charit](../poměr-režijních-nákladů-charit/) — míry organizační efektivity. ROI dárce je zcela jiná otázka: vzhledem k tomu, že tato charita již má jiné příjmy, co *tyto* dárcovy peníze přidávají na hranici? Pokud by charita dodala stejný program s konkrétním darem 10 000 £ nebo bez něj — protože má dostatečné rezervy, nebo protože by jiný poskytovatel mezeru zaplnil — je ROI dárce tohoto daru blízké nule, ať už vypadá celkový poměr režie nebo náklady na výsledek charity sebelépe.

Je to táž otázka dodatečnosti, která stojí v základu hodnocení [hodnoty za peníze](../hodnota-za-peníze/) v britských veřejných výdajích a [dodatečnosti a mrtvé váhy](../dodatečnost-a-mrtvá-váha/) v hodnocení programů: vytvořená hodnota je poskytovateli připsatelná jen do té míry, v jaké by se nestala tak či tak. Velké platformy dárcovských fondů a organizace efektivního dávání (Giving What We Can, GiveWell) staví svá doporučení výslovně na tomto rozlišení a ptají se nikoli „je to dobrá charita“, ale „má tato charita nezaplněný prostor pro další financování, takže můj dar je dodatečný“.

## Matematika

```
ROI dárce ≠ Provozní efektivita charity

ROI dárce ≈ (Výsledek dosažený s darem) − (Výsledek, který by nastal
             bez něj, tj. kontrafaktuál)
           ─────────────────────────────────────────────────
                            Velikost daru

Klíčové vstupy:
  - Prostor pro další financování (je charita na hranici omezena financováním?)
  - Funging (zaplnil by mezeru jiný dárce?)
  - Marginální nákladová efektivita na konkrétní úrovni financování (náklady často
    rostou, jakmile intervence škáluje za svou nejsnáze dosažitelnou populaci)
```

Viz [nákladová efektivita v efektivním altruismu](../nákladová-efektivita-v-efektivním-altruismu/), jak GiveWell operacionalizuje otázku „prostoru pro další financování“, a [kontrafaktuální analýza](../kontrafaktuální-analýza/) pro obecnou metodu.

## Praktický příklad

Dárce volí mezi dvěma dary po 5 000 £:

- **Charita C**: má plně financovaný základní program s rezervami 2 miliony £ a pořadníkem poskytovatelů; marginálních 5 000 £ se pravděpodobně přidá do rezerv nebo méně prioritní aktivity. Odhadovaný výsledek dodatečný pro dárce: minimální — peníze zjevně nemění to, co se děje.
- **Charita D**: malý program podložený důkazy, který veřejně uvedl, že bude muset příští čtvrtletí odmítnout 200 lidí bez dalších 50 000 £, a vybrala z toho 42 000 £. Marginálních 5 000 £ velmi pravděpodobně financuje skutečné dodatečné dodání — řekněme 20 dalších obsloužených osob při vlastních uváděných nákladech charity na příjemce 250 £.

Stejná velikost daru, stejný dárce, radikálně odlišné ROI dárce — nikoli proto, že charita C je horší organizace (celkově může mít lepší číslo nákladů na výsledek), ale protože její marginální mezera ve financování je již uzavřena.

## Souvislost s softwarovým inženýrstvím

Dárcovské platformy a nástroje doporučení dárcovství příliš často zobrazují jen metriky efektivity na úrovni organizace (poměr režie, náklady na příjemce), protože právě ty charity publikují ve výročních zprávách a ty se nejsnáze vtáhnou do srovnávací tabulky. Správné zobrazení ROI dárce vyžaduje jiný, hůře získatelný datový bod: uváděnou aktuální mezeru ve financování charity neboli „prostor pro další financování“, který se v průběhu roku mění a jen zřídka je strukturovanými daty. Platformy, které chtějí podporovat skutečné uvažování o ROI dárce, potřebují buď přímý zdroj z oznámení o mezerách ve financování (jak GiveWell ručně udržuje pro své doporučené charity), nebo výslovné prohlášení, že srovnávací tabulka ukazuje organizační efektivitu, nikoli dodatečnost dárce. Viz [poměr režijních nákladů charit](../poměr-režijních-nákladů-charit/) pro metriku, se kterou je ROI dárce nejčastěji, a chybně, zaměňováno.

## Úskalí

- **Záměna efektivity charity s dodatečností dárce.** Dobře vedená charita s nízkou režií může mít přesto téměř nulové marginální ROI dárce, pokud není omezena financováním.
- **Ignorování fungingu.** Pokud by velký institucionální poskytovatel mezeru zaplnil tak či tak, dar jednotlivého dárce vytěsňuje peníze tohoto poskytovatele, místo aby přidal nové dodání.
- **Předpoklad lineární nákladové efektivity při škálování.** Příjemci nejlevnější k dosažení bývají obslouženi jako první; marginální náklady na výsledek často rostou, jak se program rozšiřuje, takže ROI další libry není totéž co ROI průměrné již utracené libry.
- **Žádná uvedená mezera ve financování.** Charita nebo platforma, která nedokáže říct, co by financovalo dalších X £, nemůže podpořit skutečné tvrzení o ROI dárce, jen o průměrných nákladech.

## Zdroje

- Giving What We Can, o mezerách ve financování a nákladové efektivitě v rozhodnutích o darování. <https://www.givingwhatwecan.org/>
- GiveWell, „Our criteria“ (prostor pro další financování jako výslovné kritérium). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
