# Zákon o sociální hodnotě (Social Value Act)

Zákon o veřejných službách (sociální hodnota) z roku 2012 (Public Services (Social Value) Act 2012) je britská zákonná povinnost vyžadující, aby veřejné orgány v Anglii a Walesu zvážily, jak by to, co se zadává, mohlo zlepšit ekonomický, sociální a environmentální blahobyt dotčené oblasti, a aby zvážily konzultace k tomu, před zahájením zadávacího řízení na zakázky veřejných služeb. V platnost vstoupil v lednu 2013 jako poměrně nenáročná povinnost „přihlížet“ a byl podstatně posílen Procurement Policy Note (PPN) 06/20 v lednu 2021, který vyžaduje, aby zakázky centrální vlády výslovně hodnotily — nikoli pouze zvažovaly — sociální hodnotu, s minimální váhou v kritériích pro zadání.

## Proč na tom záleží

Před PPN 06/20 mohlo „zvažování“ sociální hodnoty být splněno tím, že zadavatel poznamenal, že o tom přemýšlel, bez požadavku, aby to ovlivnilo rozhodnutí o zadání — povinnost snadno splnitelná na papíře a v praxi ignorovaná. PPN 06/20 tuto mezeru pro zakázky centrální vlády uzavřel: ukládá, aby byla sociální hodnota bodována jako součást hodnocení nabídek, organizována kolem pěti národních prioritních témat — oživení po COVID-19, řešení ekonomické nerovnosti, boj proti změně klimatu, rovné příležitosti a blahobyt — a běžně měřena pomocí rámce National TOMs (Themes, Outcomes, Measures), který udržuje Social Value Portal. Pro softwarového inženýra budujícího nástroje pro zadávání, správu smluv nebo podporu nabídek pro veřejný sektor je to právní základ, vůči němuž musí váš klient stavět, nikoli volitelný doplněk.

## Matematika

Sociální hodnota je téma ve tvaru rámce; její „matematika“ je struktura bodování, kterou většina orgánů používá:

```
Celkové skóre nabídky = Váha ceny/nákladů + Váha kvality + Váha sociální hodnoty

PPN 06/20 (centrální vláda): váha sociální hodnoty ≥ 10 % celkového skóre

Témata sociální hodnoty (PPN 06/20):
 1. Oživení po COVID-19
 2. Řešení ekonomické nerovnosti
 3. Boj proti změně klimatu
 4. Rovné příležitosti
 5. Blahobyt
```

Uchazeči své závazky vůči těmto tématům typicky peněžně vyjadřují pomocí [databází jednotkových nákladů](../databáze-jednotkových-nákladů/) a platí tatáž logika peněžního vyjádření jako v [sociální návratnosti investice](../sociální-návratnost-investice/): závazek by měl být doložen, přisouditelný smlouvě a nezapočítaný dvakrát vůči jinému financování.

## Praktický příklad

**IT zakázka místního úřadu**: zakázka za 2 miliony £ na 3 roky je bodována 60 % kvalita, 30 % cena, 10 % sociální hodnota. Uchazeč A se zavazuje ke 2 učňovským místům, 150 000 £ místních subdodávek a 200 hodinám bezplatného školení digitálních dovedností pro místní školu, peněžně vyjádřeno pomocí zástupných ukazatelů z databáze jednotkových nákladů na souhrnných 90 000 £ dodatečné sociální hodnoty. Uchazeč B se zavazuje k menšímu balíčku oceněnému na 40 000 £. Pokud úřad boduje sociální hodnotu úměrně k nejsilnější nabídce, získá uchazeč A plných 10 bodů; uchazeč B získá 10 × (40 000 £ ÷ 90 000 £) = 4,4 bodu — rozdíl 5,6 bodu, který může rozhodnout o zakázce, i když jsou kvalita a cena blízké.

**Uchazeč z dobrovolnického sektoru**: malý VCSE (dobrovolnický, komunitní a sociální podnik) ucházející se o zakázku na údržbu pozemků proti komerčnímu konkurentovi nemůže konkurovat samotnou jednotkovou cenou, ale používá zástupné ukazatele Global Value Exchange k peněžnímu vyjádření svých stávajících závazků komunitního zaměstnávání a dobrovolnictví, čímž vytvoří doložený případ sociální hodnoty, který stojí za bodování vedle ceny a kvality.

## Souvislost s softwarovým inženýrstvím

Vítězství v nabídce s peněžně vyjádřenými závazky sociální hodnoty vytváří povinnost doložit jejich plnění správou smlouvy — nástroje, které zaznamenávají nástupy učňů, místní výdaje a hodiny školení vůči konkrétním závazkům bodovaným při zadání, vstupují do schůzek o přezkumu smlouvy místo toho, aby byly zapomenuty po podpisu smlouvy. Seznamy G-Cloud a Digital Marketplace stále častěji vyžadují prohlášení o sociální hodnotě v okamžiku zařazení. Viz [sociální návratnost investice](../sociální-návratnost-investice/) pro metodu oceňování za závazky, [databáze jednotkových nákladů](../databáze-jednotkových-nákladů/) pro zástupné ukazatele, ze kterých uchazeči čerpají, a [výsledky versus výstupy](../výsledky-versus-výstupy/) pro zajištění, že dodané závazky jsou výsledky, nejen počty aktivit.

## Úskalí

- **Sociální praní nabídek.** Vágní závazky („podporujeme místní komunitu“), které nelze měřit ani vymáhat při správě smlouvy, bodují dobře, ale neposkytují nic ověřitelného.
- **Zacházení se sociální hodnotou jako s rozhodčím při shodě.** PPN 06/20 vyžaduje, aby byla sociální hodnota výslovně hodnocena v rámci kritérií zadání, nikoli neformálně použita k rozhodnutí mezi jinak shodnými nabídkami.
- **Žádné pokračování ve správě smlouvy.** Závazky bodované při zadání se během dodávky často nikdy nesledují — viz [realizace přínosů](../realizace-přínosů/).
- **Nekonzistentní měřicí rámce napříč smlouvami.** Používání různých zdrojů zástupných ukazatelů pro podobné závazky u různých smluv činí srovnání na úrovni portfolia bezvýznamným, a proto existují společné rámce jako National TOMs a sdílené databáze jednotkových nákladů.

## Zdroje

- Public Services (Social Value) Act 2012. <https://www.legislation.gov.uk/ukpga/2012/3/contents>
- Cabinet Office, Procurement Policy Note 06/20, „Taking Account of Social Value in the Award of Central Government Contracts.“ <https://www.gov.uk/government/publications/procurement-policy-note-0620-taking-account-of-social-value-in-the-award-of-central-government-contracts>
- Social Value Portal, National TOMs Framework. <https://socialvalueportal.com/national-toms/>
