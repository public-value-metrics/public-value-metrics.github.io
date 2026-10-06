# Platba za výsledky a dluhopisy sociálního dopadu (PbR/SIB)

Platba za výsledky (PbR) platí poskytovateli na základě ověřených dosažených výsledků, nikoli provedených aktivit. Dluhopis sociálního dopadu (SIB) je specifická finanční struktura PbR, v níž soukromí či filantropičtí investoři financují poskytování služby předem a jsou splaceni — s výnosem — vládním zadavatelem pouze tehdy, pokud nezávisle měřené výsledky dosáhnou dohodnutých prahů, čímž se riziko dodání přesouvá z daňového poplatníka na investora.

## Proč na tom záleží

První SIB na světě byl spuštěn ve věznici HMP Peterborough v září 2010: Social Finance získala 5 milionů £ od 17 investorů na financování „One Service“, pracující s vězni s krátkými tresty (pod 12 měsíců) s cílem snížit recidivu, přičemž Ministry of Justice a Big Lottery Fund souhlasily se splacením investorů pouze tehdy, pokud události opětovného odsouzení klesnou nejméně o 7,5 % oproti spárované národní srovnávací kohortě. Poslední kohorta peterboroughského pilotu zaznamenala 9,7% snížení opětovných odsouzení, pohodlně nad prahem, a investoři byli splaceni s výnosem. Mechanismus byl důležitý, protože řešil konkrétní zadávací problém: vláda chtěla platit za výsledky, nikoli za vstupy, ale nemohla absorbovat finanční riziko intervence, která nemusí fungovat, takže struktura SIB přesunula toto riziko na investory ochotné je převzít. Government Outcomes Lab (GO Lab) na Blavatnik School of Government v Oxfordu nyní udržuje nejkompletnější veřejnou základnu důkazů o výkonnosti PbR a SIB na světě, sleduje výrazně přes 200 dluhopisů dopadu globálně a zveřejňuje výzkum o tom, které návrhové prvky korelují s úspěchem či selháním. Poučení, ke kterému se základna důkazů opakovaně vrací, je, že *zvolená metrika výsledku* a to, kdo nese riziko jejího nedosažení, určuje téměř vše ostatní o tom, jak se smlouva PbR v praxi chová.

## Matematika

```
Platba PbR = základní platba (pokud existuje) + Σ (dosažený výsledek × jednotková cena za výsledek)

Výnos investora dluhopisu sociálního dopadu:
  Výdaj investora    = předem poskytnutý kapitál financující poskytování služby
  Platba za výsledek = zadavatel platí pouze pokud výsledek ≥ práh, škálováno tím,
                        jak daleko nad prahem výkonnost skončí
  Výnos investora    = přijaté platby za výsledek − výdaj investora
                        (míra výnosu, často omezená, odrážející podstoupené riziko)

Klíčové návrhové parametry určující chování celé smlouvy:
  Metrika výsledku         — musí být výsledkem, nikoli výstupem (viz outcomes-vs-outputs)
  Srovnání/kontrafaktuál   — obvykle spárovaná kohorta (viz counterfactual-analysis)
  Práh platby              — minimální zlepšení před spuštěním jakékoli platby
  Křivka platby            — lineární, schodovitá nebo omezená nad prahem
  Sleva přisouzení/mrtvé váhy — viz additionality-and-deadweight
```

## Praktický příklad

**Peterborough One Service** (ilustrativní údaje čerpané ze zveřejněných hodnocení):

```
Získaný kapitál investorů:        5 000 000 £
Kohorta:                          ~3 000 mužských vězňů s krátkými tresty ve dvou kohortách
Práh:                             ≥7,5% snížení událostí opětovného odsouzení oproti spárované
                                  národní srovnávací skupině, jinak žádná platba
Výsledek kohorty 1:               8,4% snížení — pod smluvní laťkou pro tuto
                                  kohortu samostatně podle původních pravidel
Kombinovaný/konečný výsledek kohorty: 9,7% snížení — nad prahem
Platba za výsledek:               vláda (Ministry of Justice / Big Lottery Fund)
                                  platí za procentní bod nad prahem, financuje
                                  splacení investorů plus výnos
```

**Smlouva PbR místního úřadu (ilustrativně)**: služba rodinné intervence je zadána za 4 000 £ za doporučenou rodinu (platba za aktivitu) plus 6 000 £ za rodinu bez dalšího doporučení k ochraně dětí 12 měsíců po uzavření (platba za výsledek). Doporučeno 200 rodin, uzavřeno 150 případů, 96 zůstává bez doporučení po 12 měsících:

```
Platba za aktivitu = 200 × 4 000 £ = 800 000 £
Platba za výsledek = 96 × 6 000 £  = 576 000 £
Celkové náklady smlouvy = 1 376 000 £ za 96 potvrzených trvalých výsledků
Náklady na potvrzený výsledek ≈ 14 333 £ (viz cost-per-outcome)
```

## Souvislost s softwarovým inženýrstvím

Platba za výsledky je problém sladění motivací dříve, než je problém dat, a datový systém je místem, kde sladění buď drží, nebo se rozpadá. Nezávislé, proti manipulaci odolné ověřování výsledků je celá hra: zadavatel a poskytovatel mají protichůdné motivace, jak se nejednoznačný případ kóduje, takže systém zaznamenávající výsledky potřebuje auditní stopu, dohodu o sdílení dat s nezávislým ověřovatelem (často jiným subjektem než poskytovatelem, někdy orgánem oficiální statistiky párujícím proti záznamům policie či dávek) a neměnné verzování definice výsledku — ekvivalent PbR úskalí „předefinování metriky“ z [KPI veřejného sektoru](../kpi-veřejného-sektoru/). Výpočty přisouzení závisí na metodách spárované kohorty z [kontrafaktuální analýzy](../kontrafaktuální-analýza/), které potřebují reprodukovatelný, auditovatelný kód, nikoli jednorázovou tabulku. A samotná metrika musí být skutečným výsledkem, nikoli zástupnou aktivitou — viz [výsledky versus výstupy](../výsledky-versus-výstupy/) — protože smlouva PbR platící za výstup jen přejmenuje běžné financování s dodatečnými transakčními náklady. Kde se sociální návratnost SIB modeluje prospektivně, toto hodnocení typicky přímo čerpá z metodiky [sociální návratnosti investice](../sociální-návratnost-investice/).

## Úskalí

- **Platba za snadno zmanipulovatelný zástupný výsledek**: „účast na sezeních“ je aktivita převlečená za výsledek; trvejte na míře, která odráží skutečně sledovanou změnu (recidiva, zaměstnanost, stabilita bydlení).
- **Žádný věrohodný kontrafaktuál**: bez spárované srovnávací skupiny může být zlepšení regresí k průměru nebo širším trendem, nikoli účinkem programu — viz [kontrafaktuální analýza](../kontrafaktuální-analýza/) a [dodatečnost a mrtvá váha](../dodatečnost-a-mrtvá-váha/).
- **Podcenění transakčních nákladů a nákladů na hodnocení**: nezávislé ověřování, propojení dat a administrace smluv pro schémata PbR/SIB rutinně dosahují dvouciferných procent hodnoty smlouvy — základna důkazů GO Lab to dokumentuje jako opakující se důvod ukončení schémat.
- **Výběr „třešniček“ nebo „parkování“**: poskytovatelé placení za výsledek mají přímou motivaci upřednostňovat klienty, kteří by uspěli tak či tak, a odsouvat nejtěžší případy — navrhněte platební úrovně nebo úpravu o skladbu případů, abyste tomu čelili.

## Zdroje

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government. <https://golab.bsg.ox.ac.uk/>
- Social Finance, souhrny hodnocení „Peterborough Social Impact Bond“. <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, „Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results for the Peterborough Social Impact Bond.“
