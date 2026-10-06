# Oceňování na základě odhalených preferencí

Metody odhalených preferencí odvozují hodnotu netržního statku z pozorovatelného chování na souvisejícím trhu, místo aby se lidí ptaly přímo. Hedonické oceňování a metoda cestovních nákladů jsou dvě tahouni: obě začínají ze skutečné transakce a dopočítávají implicitní cenu věci, která nebyla nikdy přímo prodávána.

## Proč na tom záleží

Zatímco metody [deklarovaných preferencí](../oceňování-na-základě-deklarovaných-preferencí/) kladou hypotetickou otázku, metody odhalených preferencí pozorují, za co lidé skutečně zaplatili, což Green Book považuje za obecně věrohodnější důkaz, ceteris paribus, protože nepodléhá hypotetickému zkreslení — respondenti v hedonické studii cen domů skutečně zaplatili přirážku nebo slevu, která se měří (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, příloha 2). Hedonické oceňování rozkládá tržní cenu — typicky cenu domů — na implicitní ceny jednotlivých atributů statku, což analytikům umožňuje izolovat například cenovou přirážku, kterou domácnosti skutečně platí za bydlení v tišším místě nebo s lepší kvalitou ovzduší, při statistické kontrole všech ostatních atributů, které rovněž ovlivňují cenu domu (velikost, poloha, spádová škola). Metoda cestovních nákladů dělá obdobnou věc u rekreačních míst bez vstupného: čas a peníze, které lidé vynaloží na cestu na místo, odhalují dolní mez toho, kolik místo pro ně stojí, protože nikdo nevynaloží náklad převyšující hodnotu návštěvy pro něj.

Obě metody sdílejí strukturální omezení: mohou ocenit jen to, co je zakotveno v existující tržní transakci. Hluk poblíž ranveje se projeví v cenách domů, protože lidé, kterým hluk vadí, se třídí do tišších domů; existenční hodnota druhu, který nikdo nenavštěvuje ani poblíž nežije, se neprojeví v žádné transakci vůbec, což je přesně mezera, kterou mají zaplnit metody [deklarovaných preferencí](../oceňování-na-základě-deklarovaných-preferencí/).

## Matematika

```
Hedonické oceňování:
  Cena domu = f(strukturální atributy, atributy polohy,
                 sledovaný environmentální atribut, ...)
  Odhad regresí; koeficient u environmentálního atributu
  (při držení všeho ostatního konstantního) je jeho implicitní cena.

  Implicitní cena atributu X = ∂(Cena domu) / ∂X

Metoda cestovních nákladů:
  Míra návštěv (návštěvy na hlavu ze zóny i) = f(cestovní náklady ze zóny i,
                   náhradní místa, socioekonomické kontroly)
  Odhadněte křivku poptávky po návštěvách jako funkci cestovních nákladů.
  Přebytek spotřebitele = plocha pod odhadnutou křivkou poptávky
                         = hodnota místa pro návštěvníky
```

Obě metody vyžadují statisticky zdravou sadu kontrol — vynechání zavádějícího atributu (hedonická) nebo blízkého náhradního místa (cestovní náklady) zkresluje implicitní cenu směrem, který není vždy předem zřejmý, a proto příloha 2 Green Booku vyžaduje, aby se uváděla specifikace regrese a kontroly, nejen titulkový koeficient.

## Praktický příklad

**Národní vláda**: metodika stínové ceny uhlíku samotného Green Booku částečně čerpá z hedonických důkazů, ale jednodušším ilustrativním případem je hluk letadel. Hedonická studie regresí cen prodeje domů v oblasti letových tras na vzdálenostně vážené expozici hluku, s kontrolou na velikost, stáří a spádovou školu, zjišťuje, že každé zvýšení průměrné expozice hluku o 1 decibel souvisí s poklesem ceny domu o 0,5 %. Pro typický dům za 280 000 £ v dotčené oblasti:

```
Implicitní cena za decibel = 280 000 £ × 0,5 % = 1 400 £ na domácnost
Domácnosti dotčené nárůstem o 3 dB od nové ranveje = 18 000
Souhrnný implikovaný náklad nárůstu hluku = 1 400 £ × 3 × 18 000 = 75,6 mil. £
```

Je to jednorázový kapitalizovaný náklad (zakotvený v ceně domu), který hodnocení musí pečlivě nezapočítat dvakrát proti samostatně odhadnutému toku ročních nákladů obtěžování hlukem.

**Charita**: environmentální charita používá metodu cestovních nákladů k ocenění přírodní rezervace s volným vstupem. Průzkumná data o PSČ návštěvníků dávají průměrné cestovní náklady tam a zpět (čas oceněný doporučenou hodnotou nepracovního času Green Booku plus palivo) 14 £ na návštěvu při 40 000 návštěvách ročně. Odhadnutá křivka poptávky — míra návštěv klesající s rostoucími cestovními náklady ze zóny — implikuje přebytek spotřebitele na návštěvu, nad rámec skutečně vynaložených 14 £, zhruba 9 £.

```
Celková roční hodnota = 40 000 návštěv × (14 £ vynaloženo + 9 £ přebytek spotřebitele)
                       = 40 000 × 23 £ ≈ 920 000 £/rok
```

To převyšuje nulový příjem rezervace ze vstupného a dává správcům charity obhajitelné číslo pro rekreační hodnotu místa při žádostech u poskytovatelů.

## Souvislost s softwarovým inženýrstvím

Myšlení odhalených preferencí se v produktové analytice veřejného sektoru objevuje častěji, než si odborníci uvědomují: data o používání bezplatné vládní digitální služby jsou sama důkazem odhalených preferencí o hodnotě (frekvenci, délku relace a — nejvýmluvněji — vzorce opakovaného versus jednorázového používání lze analyzovat stejně, jako cestovní model zachází s frekvencí návštěv vůči vzdálenosti). Kde má služba skutečné náhrady (papírový kanál, telefonní linka), lze „náklad“, který občané vynakládají na použití digitálního kanálu místo nich (čas, data, zařízení), odhadnout a porovnat s používáním, což přímo opakuje logiku cestovních nákladů. Viz [standard digitální služby](../standard-digitální-služby/) a [hodnotu otevřených dat](../hodnota-otevřených-dat/), které čelí právě tomuto problému oceňování u statku bez přímé tržní ceny.

## Úskalí

- **Zkreslení vynechanou proměnnou v hedonických modelech.** Vynechání korelovaného atributu (kvalita školy korelující s cenou domu i se sledovanou environmentální proměnnou) zkresluje odhad implicitní ceny; specifikace musí být uvedena a prozkoumána, nejen výsledek.
- **Ignorování náhradních míst ve studiích cestovních nákladů.** Odhalená hodnota místa pro návštěvníka je podhodnocena, pokud existuje bližší náhrada a není kontrolována — může místo navštěvovat hlavně proto, že je zdarma, ne proto, že je jedinečně hodnotné.
- **Aplikace odhalených preferencí na statek bez jakéhokoli tržního ohlasu.** Existenční hodnota, opční hodnota a odkazová hodnota se neprojevují v žádné transakci a nelze je získat hedonickými ani cestovně-nákladovými metodami — tato mezera patří [oceňování na základě deklarovaných preferencí](../oceňování-na-základě-deklarovaných-preferencí/).
- **Záměna kapitalizované (jednorázové) hodnoty s ročním tokem.** Hedonické efekty cen domů jsou typicky jednorázové kapitalizované hodnoty; zacházet s nimi jako s ročním tokem přínosů nafukuje hodnocení.

## Zdroje

- HM Treasury. „The Green Book,“ příloha 2: oceňování netržních dopadů. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Studie oceňování hluku letadel používané při hodnocení letišť. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. „Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition.“ Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. „Economics of Outdoor Recreation.“ Johns Hopkins University Press, 1966 (původ metody cestovních nákladů).
