# Mezigenerační spravedlnost a diskontování udržitelnosti

Diskontování budoucích nákladů a přínosů na současnou hodnotu je standardní praxe ve veřejném hodnocení — viz [sociální diskontní sazba](../sociální-diskontní-sazba/) — ale jakákoli kladná diskontní sazba, složená po desetiletí či staletí, zmenšuje vzdálenou budoucnost k nule v dnešních termínech. U rozhodnutí s důsledky o století či více vpřed — změna klimatu, jaderný odpad, ztráta biodiverzity, udržitelnost penzí — se tento matematický fakt stává etickým: standardní diskontování může způsobit, že katastrofální škoda budoucím generacím vypadá, v termínech současné hodnoty, sotva hodna odvrácení.

## Proč na tom záleží

Ramseyho rovnice, odvozená Frankem Ramseym v roce 1928, rozkládá diskontní sazbu na dvě složky: čistou časovou preferenci (δ, nakolik prostě dáváme přednost nynějšku před později, nezávisle na bohatství) a efekt růstu bohatství (η×g, nakolik diskontujeme, protože se očekává, že budoucí generace budou bohatší, takže pro ně další libra znamená méně). Standardní dlouhodobá diskontní sazba britského Green Booku je postavena na této rovnici a sleduje *klesající* schéma, nikoli pevnou sazbu — návrh zakořeněný v práci Martina Weitzmana o „gama diskontování“, která ukazuje, že když je sama budoucí diskontní sazba nejistá, ekvivalent jistoty, který byste měli aplikovat, matematicky klesá s časem, protože scénáře nízké sazby začnou dominovat, čím dále se dívá. Sternova zpráva o ekonomice změny klimatu (Stern Review, 2006) pod vedením sira Nicholase Sterna posunula etickou debatu dále: Stern tvrdil, že čistá časová preference by měla být nastavena blízko nuly (použil δ ≈ 0,1 %, odrážející pouze malou pravděpodobnost katastrofy ukončující civilizaci, nikoli skutečnou preferenci přítomnosti před budoucností), což vedlo k mnohem nižší efektivní diskontní sazbě než konvenční praxe Green Booku a odpovídajícím způsobem k mnohem většímu argumentu dneška pro klimatické jednání. Kritici (zejména William Nordhaus) tvrdili, že Sternova téměř nulová sazba je eticky obhajitelná, ale v rozporu se skutečně pozorovaným chováním úspor a investic. Neshoda není technická poznámka pod čarou — je to jediný největší důvod, proč dva stejně důslední ekonomové mohou dospět k divoce odlišným závěrům o tom, kolik by měla současná generace obětovat pro budoucnost, a důvod, proč software podporující dlouhohorizontové hodnocení veřejných investic musí vystavit své předpoklady diskontování, místo aby je pohřbil ve výchozí hodnotě tabulky.

## Matematika

```
Ramseyho rovnice:   r = δ + η × g

  r = sociální diskontní sazba
  δ = čistá časová preference (míra netrpělivosti, nezávislá na bohatství)
  η = elasticita mezní užitečnosti spotřeby (klesající hodnota dodatečné
      spotřeby, jak lidé bohatnou)
  g = očekávané tempo růstu spotřeby na obyvatele

Klesající dlouhodobé schéma Green Booku (přibližně, aktuální zveřejněná pásma):
  Roky 0–30:    3,5 %
  Roky 31–75:   3,0 %
  Roky 76–125:  2,5 %
  Roky 126–200: 2,0 %
  Roky 201–300: 1,5 %
  Roky 301+:    1,0 %

Parametry Stern Review: δ ≈ 0,1 %, η = 1, g ≈ 1,3 %  → r ≈ 1,4 %
```

## Praktický příklad

**Dnešní hodnota 1 £ odvrácené škody za 100 let**, při třech režimech diskontování:

```
Pevná krátkodobá sazba Green Booku (3,5 %, konstantní po 100 let):
  PV = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ 0,032 £   (3,2 pence)

Klesající schéma Green Booku (3,5 % pro roky 1–30, 3,0 % pro roky 31–75,
2,5 % pro roky 76–100):
  faktor(1–30)   = 1,035^30  ≈ 2,807
  faktor(31–75)  = 1,03^45   ≈ 3,782
  faktor(76–100) = 1,025^25  ≈ 1,854
  celkový faktor ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  PV = 1 / 19,68 ≈ 0,051 £   (5,1 pence)

Téměř nulová čistá časová preference ve stylu Sterna (r ≈ 1,4 % pevná):
  PV = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ 0,250 £   (25,0 pence)
```

Tatáž 1 £ odvrácené škody za století vpřed má dnes hodnotu 3,2 p, 5,1 p nebo 25 p podle toho, jaká konvence diskontování se použije — téměř osminásobný rozsah, který rozhoduje o tom, zda projekt zmírnění změny klimatu s vysokými počátečními náklady a výnosem za století vůbec překročí laťku kladné NPV. Toto je mechanismus za ústředním varováním kapitoly: při jakékoli podstatně kladné pevné sazbě je dostatečně vzdálená budoucí škoda aritmeticky vymazána z hodnocení, bez ohledu na její skutečnou závažnost.

## Souvislost s softwarovým inženýrstvím

- Jakýkoli nástroj dlouhohorizontového hodnocení nebo byznys případu (infrastruktura, klimatická adaptace, modelování penzí) by měl implementovat *klesající* schéma Green Booku, nikoli jedinou pevnou sazbu — výchozí pevná sazba tiše zakódovává mnohem silnější předsudek proti budoucnosti, než stanovují aktuální pokyny britské vlády.
- Diskontní sazba a horizont by měly být vždy vystaveny jako viditelné, auditovatelné parametry v hodnoticím softwaru, s explicitním zobrazením citlivosti výpočtu na ně (jako v praktickém příkladu výše) — pohřbení sazby v konfiguračním souboru vyzývá právě ten „skrytý etický výběr“, před nímž debata Stern–Nordhaus varuje; to se pojí s tezí transparentnosti v [účetnictví přírodního kapitálu](../účetnictví-přírodního-kapitálu/) a leží v základu tématu [sociální diskontní sazby](../sociální-diskontní-sazba/) obecně.
- Kde jsou přínosy programu výslovně mezigenerační (protipovodňová ochrana, obnova přírodního kapitálu, dlouhodobá digitální infrastruktura), měla by [sociální analýza nákladů a přínosů](../sociální-analýza-nákladů-a-přínosů/) vykazovat výsledky alespoň při dvou předpokladech diskontování (standard Green Booku a případ citlivosti nízké sazby), a nikoli jediným bodovým odhadem, aby rozhodovatelé viděli, jak samotná volba diskontní sazby posouvá odpověď.

## Úskalí

- **Prezentace jediné diskontované NPV bez rozmezí citlivosti** — vzhledem k tomu, jak moc sama diskontní sazba mění odpověď u dlouhohorizontových projektů, NPV při jediné sazbě podstatně nadsazuje přesnost; vždy uvádějte rozmezí zahrnující alespoň standard Green Booku a scénář nízké sazby.
- **Aplikace krátkodobé pevné sazby (3,5 %) na hodnocení na několik staletí** — vlastní pokyn Green Booku stanoví klesající schéma právě proto, že pevná sazba byla po zhruba 30 letech shledána nevhodnou; její použití přesto podhodnocuje dlouhodobé náklady.
- **Zacházení s δ (čistou časovou preferencí) jako s čistě technickým parametrem** — téměř nulová hodnota Sterna i vyšší implicitní hodnota Green Booku jsou obhajitelné pouze jako etické postoje k tomu, kolik váhy dluží přítomnost budoucnosti, nikoli empiricky „správná“ či „nesprávná“ čísla; software by měl učinit předpoklad viditelným, místo aby jedno číslo prezentoval jako objektivně správné.

## Zdroje

- Stern N. „The Economics of Climate Change: The Stern Review.“ Cambridge University Press, 2006.
- Ramsey FP. „A Mathematical Theory of Saving.“ The Economic Journal, 1928.
- Weitzman ML. „Gamma Discounting.“ American Economic Review, 2001.
- HM Treasury. „The Green Book: Central Government Guidance on Appraisal and Evaluation“ (příloha 6, schéma diskontní sazby).
- Nordhaus WD. „A Review of the Stern Review on the Economics of Climate Change.“ Journal of Economic Literature, 2007.
