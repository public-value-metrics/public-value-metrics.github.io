# Účetnictví přírodního kapitálu

Účetnictví přírodního kapitálu staví životní prostředí na stejnou úroveň jako jakékoli jiné národní nebo organizační aktivum: měří zásobu přírodních zdrojů (lesy, půdy, řeky, mokřady, atmosféra) a tok služeb, které produkují (pohlcování uhlíku, protipovodňová ochrana, rekreace, potraviny), ve fyzickém i peněžním vyjádření, aby se vyčerpávání životního prostředí projevilo v rozhodování tak, jak by se projevilo proplýtvání finančního kapitálu. Spojené království je jednou z nejpokročilejších vlád v systematickém provádění tohoto, poháněnou 25letým plánem pro životní prostředí (2018) a uplatňovanou prostřednictvím účtů přírodního kapitálu UK od ONS a doplňujících pokynů Green Booku ministerstva financí.

## Proč na tom záleží

Konvenční účetnictví — korporátní i vládní — považuje les za bezcenný, dokud není pokácen a prodán jako dřevo, v kterémžto okamžiku se stává HDP. Účetnictví přírodního kapitálu existuje, aby tuto mezeru uzavřelo: 25letý plán pro životní prostředí Spojeného království zavázal vládu zakotvit myšlení přírodního kapitálu napříč politikou, výslovně uvádějící ambici být „první generací, která zanechá životní prostředí v lepším stavu, než jsme je našli“. ONS od té doby zveřejňuje roční účty přírodního kapitálu UK (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>), které odhadují peněžní hodnotu ekosystémových služeb — od lesní rekreace přes zdravotní přínosy městské zeleně po ukládání uhlíku v rašeliništích — s použitím téhož rámce národních účtů, který se používá pro vyrobený kapitál, aby mohl přírodní kapitál nakonec stát ve stejné rozvaze jako silnice, budovy a vybavení. Pokyn HM Treasury Enabling a Natural Capital Approach (ENCA), doplňující Green Book (<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>), stanoví, jak mají hodnotitelé oceňovat environmentální náklady a přínosy v byznys případech, aby bylo možné srovnat silniční projekt ničící prastarý les nebo protipovodňový projekt obnovující mokřad na konzistentním peněžním základě, místo aby jeden měl číslo a druhý odstavec výhrad.

## Matematika

```
Hodnota aktiva ekosystémových služeb = NPV toku služeb, které aktivum poskytuje

Hodnota aktiva = Σ (t = 1 až T) [hodnota ročního toku služeb_t / (1 + r)^t]

kde:
  hodnota toku služeb_t = množství služby v roce t × jednotková hodnota
                          (např. rekreační návštěvy × hodnota za návštěvu;
                           tuny pohlceného uhlíku × cena uhlíku)
  r = diskontní sazba (sociální diskontní sazba Green Booku — viz
      [sociální diskontní sazba](../sociální-diskontní-sazba/))
  T = časový horizont, po který se očekává, že aktivum bude službu poskytovat
```

Je to identická struktura čisté současné hodnoty používaná k ocenění vyrobeného kapitálu nebo hodnocení jakékoli veřejné investice podle [hodnocení podle Green Booku](../hodnocení-podle-green-booku/) — příspěvkem účetnictví přírodního kapitálu je dodávání věrohodných fyzických množství a jednotkových hodnot pro služby, které byly dříve oceněny nulou.

## Praktický příklad

**Městský les, rekreační hodnota**: 50hektarový les přijímá odhadem 80 000 rekreačních návštěv ročně, každá oceněná (metodou cestovních nákladů nebo deklarovaných preferencí — viz [oceňování na základě odhalených preferencí](../oceňování-na-základě-odhalených-preferencí/) a [oceňování na základě deklarovaných preferencí](../oceňování-na-základě-deklarovaných-preferencí/)) na 3 £ za návštěvu. Očekává se, že les bude tuto službu poskytovat 50 let, hodnoceno při diskontní sazbě 3,5 %.

```
Roční rekreační hodnota = 80 000 × 3 £ = 240 000 £/rok

NPV za 50 let při 3,5 % ≈ 240 000 £ × anuitní faktor(3,5 %, 50 let)
anuitní faktor(3,5 %, 50) ≈ 21,4

Hodnota aktiva ≈ 240 000 £ × 21,4 ≈ 5 136 000 £
```

**Přidání ukládání uhlíku**: tentýž les pohlcuje odhadem 400 tun CO2 ročně, oceněných vládní cenou neobchodovaného uhlíku zhruba 75 £/tunu (ilustrativně — pro živé hodnocení použijte aktuální zveřejněné uhlíkové hodnoty BEIS/DESNZ).

```
Roční hodnota uhlíku = 400 × 75 £ = 30 000 £/rok
NPV za 50 let při 3,5 % ≈ 30 000 £ × 21,4 ≈ 642 000 £

Celková hodnota aktiva lesa (rekreace + uhlík) ≈ 5 136 000 £ + 642 000 £
                                                ≈ 5 778 000 £
```

To je před přidáním protipovodňového zadržování, biodiverzity nebo služeb kvality ovzduší, které pokyn ENCA také žádá hodnotitele zvážit — celek je záměrně spodní, nikoli horní mez.

## Souvislost s softwarovým inženýrstvím

- Systémy správy životního prostředí a aktiv pro místní správy a agentury (parky, silnice, vodní plochy) mohou vedle registru fyzických aktiv připojit registr přírodního kapitálu, s použitím téhož vzoru „tok služeb × jednotková hodnota“ jako jakákoli jiná [databáze jednotkových nákladů](../databáze-jednotkových-nákladů/), kterou organizace udržuje.
- Protože je NPV přírodního kapitálu citlivá na diskontní sazbu (viz anuitní faktor v praktickém příkladu), měl by každý nástroj, který ji počítá, vystavit sazbu a horizont jako viditelné vstupy, a nikoli je pohřbít — týž princip transparentnosti probraný v [mezigenerační spravedlnosti a diskontování udržitelnosti](../mezigenerační-spravedlnost-a-diskontování-udržitelnosti/).
- Účty přírodního kapitálu jsou stále častěji povinným vstupem do environmentálních částí byznys případu [hodnocení podle Green Booku](../hodnocení-podle-green-booku/); dodávací tým budující nástroje pro byznys případy by měl účty ONS a jednotkové hodnoty ENCA brát jako referenční data k integraci, nikoli něco, co hodnotitelé pokaždé přepočítávají od nuly.

## Úskalí

- **Dvojí započtení překrývajících se ekosystémových služeb** — rekreační hodnota a hodnota biodiverzity téže lokality mohou sdílet podkladová data o ochotě platit; pokyn ENCA výslovně varuje před sčítáním ocenění odvozených z překrývajících se průzkumných nástrojů.
- **Zacházení s hodnotou aktiva přírodního kapitálu jako se statickou** — toky služeb se mění s klimatem, hospodařením a tlakem využití půdy; hodnota uhlíku a protipovodňového zadržování lesa tohoto desetiletí není trvalou vlastností lokality.
- **Používání národních průměrných jednotkových hodnot pro velmi místní rozhodnutí** — hektar dostupného městského lesa a hektar odlehlé vrchoviny mají velmi odlišnou rekreační hodnotu; pokyn ENCA doporučuje místní nebo pro lokalitu specifické hodnoty, kde jsou dostupné, místo výchozích národních průměrů.

## Zdroje

- ONS. „UK natural capital accounts.“ <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. „A Green Future: Our 25 Year Plan to Improve the Environment.“ (2018)
- HM Treasury / Defra. „Enabling a Natural Capital Approach (ENCA): guidance.“ <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
