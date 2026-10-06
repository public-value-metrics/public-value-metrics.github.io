# Teorie změny

Teorie změny je výslovná, zpětně mapovaná kauzální cesta od dlouhodobého cíle k předpokladům a aktivitám, které musí existovat, aby ho bylo možné dosáhnout, spolu s předpoklady spojujícími každý článek. Vytváří se tak, že se začne u výsledku, který chcete, a opakovaně se ptáte „co musí platit bezprostředně před tím, aby se to stalo?“, dokud nedojdete k aktivitám, které můžete skutečně dodat — což je opačný směr než u [logického modelu](../logický-model/) a proto jsou oba komplementární, nikoli zaměnitelné.

## Proč na tom záleží

Metodu zpětného mapování formalizovali Center for Theory of Change a ActKnowledge na základě práce evaluátorky Carol Weissové o zviditelnění předpokladů programů, aby mohly být testovány místo přijímány na víru. Britské hodnocení grantů to přímo absorbovalo: Magenta Book ministerstva financí (HM Treasury) považuje teorii změny za výchozí bod jakéhokoli návrhu hodnocení a poskytovatelé jako National Lottery Community Fund vyžadují od žadatelů její formulaci, než návrh financují. Důvod, proč na tom záleží softwarovému inženýrovi, je, že teorie změny je dokument, který by měl určovat, co váš systém potřebuje měřit — pokud kauzální řetězec říká „využití dávek závisí na tom, že žadatelé obdrží personalizovaný výpočet“, je to testovatelné tvrzení, které lze v produktu instrumentovat tak, aby bylo buď doloženo, nebo vyvráceno.

## Matematika

Teorie změny je spíše strukturální než numerická. Každý článek by měl nést jak předpoklad, tak ukazatel, který by mohl ukázat, že předpoklad je nepravdivý:

```
Dlouhodobý výsledek (cíl)
  ↑ předpoklad (precondition) + domněnka (assumption) + ukazatel
Střednědobý výsledek N
  ↑ předpoklad + domněnka + ukazatel
  ...
Střednědobý výsledek 1
  ↑ předpoklad + domněnka + ukazatel
Aktivity / intervence
  ↑ vázané zdroje
Vstupy
```

Tato struktura přímo vstupuje do [metod hodnocení dopadu](../metody-hodnocení-dopadu/), které existují k testování, zda domněnky u každého článku skutečně platí, a do [kontrafaktuální analýzy](../kontrafaktuální-analýza/), která testuje, zda by dlouhodobý výsledek nastal tak či tak.

## Praktický příklad

**Místní úřad (prevence bezdomovectví)**: dlouhodobým výsledkem jsou udržitelné nájmy po 12 měsících pro domácnosti ohrožené vystěhováním.

- Předpoklad: domácnosti mají realistický, dostupný splátkový plán dluhů. Domněnka: splátkové plány vyjednané pracovníkem jsou udržitelnější než soudně nařízené. Ukazatel: % plánů stále aktivních po 6 měsících.
- Předpoklad: domácnosti uplatňují dávky, na které mají nárok. Domněnka: digitální kalkulačka dávek zvyšuje podíl správných žádostí oproti papírovým formulářům. Ukazatel: míra přesnosti žádostí, porovnaná před/po zavedení nástroje.
- Aktivity: třídění pracovníkem, digitální kalkulačka dávek, vyjednávání o dluzích.

V pilotní kohortě 120 domácností platila domněnka o kalkulačce dávek pro 102 domácností (85 %), které následně žádaly správně, což dokládá následné hodnocení procesu — a dává týmu programu důkazy pro tento konkrétní článek místo jediného tvrzení od začátku do konce o odvrácení bezdomovectví.

**Charita (mentoring mládeže)**: dlouhodobým výsledkem je snížené vylučování ze škol. Zpětně mapované předpoklady: zlepšená emoční regulace → důvěryhodný vztah jeden na jednoho s mentorem → pravidelný týdenní kontakt po dobu dvou semestrů. Teorie činí výslovným, že absence předpokladu „pravidelný týdenní kontakt“ (řekněme kvůli fluktuaci mentorů) předpovídá, že výsledek nenastane, což je testovatelné, vyvratitelné tvrzení, nikoli naděje.

## Souvislost s softwarovým inženýrstvím

Teorie změny by měla formovat datový model produktu dříve, než vznikne jediný dashboard: určete, které články potřebují ukazatel, a instrumentujte právě pro ně, místo abyste se spokojili s tím, co se nejsnáze loguje. Také disciplinuje diskuse o roadmapě — funkce, která se nemapuje na žádný článek řetězce, očividně nestojí za vybudování. Viz [logický model](../logický-model/) pro řetězec odpovědnosti zaměřený dopředu, budovaný po dohodnutí teorie, [sociální návratnost investice](../sociální-návratnost-investice/) pro metodu, která závisí na teorii změny při vymezení, které výsledky ocenit, a [výsledky versus výstupy](../výsledky-versus-výstupy/) pro rozlišení, na němž články střednědobých výsledků závisejí.

## Úskalí

- **Záměna s logickým modelem.** Teorie změny je kauzální a vysvětlující (proč věříme, že to funguje); logický model je sekvenční a popisný (co se děje v jakém pořadí). Vytvoření jen jednoho zanechává buď chybějící „proč“, nebo chybějící stopu odpovědnosti.
- **Ponechání domněnek implicitních.** Veškerá hodnota zpětného mapování spočívá ve zviditelnění testovatelných domněnek; teorie změny, která jen vypisuje rámečky a šipky bez pojmenování toho, co by mohlo každý článek vyvrátit, je dekorace.
- **Jednorázové vytvoření a odložení do šuplíku.** Teorie změny napsaná pro žádost o financování a nikdy již neprověřovaná přestává být užitečná ve chvíli, kdy důkazy začnou odporovat některému článku.
- **Přeskočení vstupu zúčastněných stran.** Teorie změny vytvořená zcela zadavateli bez vstupu pracovníků v první linii nebo příjemců má tendenci kódovat domněnky, kterým nikdo, kdo službu poskytuje, nevěří.

## Zdroje

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), kapitola 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, pokyny k teorii změny. <https://www.tnlcommunityfund.org.uk/>
