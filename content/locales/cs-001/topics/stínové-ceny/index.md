# Stínové ceny

Stínová cena je odhadnutá hodnota přiřazená statku, zdroji nebo externalitě, která nemá pozorovatelnou tržní cenu nebo jejíž tržní cena je zkreslená a neodráží její skutečnou společenskou hodnotu. Vládní hodnocení se opírá o malou sadu oficiálních stínových cen — uhlík, nepracovní čas, nezaměstnaná pracovní síla — zveřejňovaných centrálně, aby každý resort používal totéž číslo.

## Proč na tom záleží

Stínové ceny existují, protože [sociální analýza nákladů a přínosů](../sociální-analýza-nákladů-a-přínosů/) nemůže fungovat bez peněžní hodnoty každého nákladu a přínosu a několik z nejvýznamnějších — emitovaná tuna uhlíku, hodina času dojíždějícího, hodina jinak nezaměstnané pracovní síly — nemá žádnou tržní cenu, nebo tržní cenu, která zkresluje jejich skutečné společenské náklady. Ministerstvo financí (HM Treasury) a Department for Energy Security and Net Zero společně zveřejňují stínovou cenu uhlíku používanou v celém britském vládním hodnocení (<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>), odvozenou nikoli z jakékoli tržní ceny uhlíku, ale z přístupu konzistentního s cílem: hodnota uhlíku je stanovena na mezní náklady na snížení emisí potřebné k dosažení zákonem stanovených britských uhlíkových rozpočtů, což je zásadně odlišná logika od pozorování toho, za kolik se uhlík skutečně obchoduje na unijním či britském systému obchodování s emisemi.

Stínová mzdová sazba sleduje podobnou logiku na straně práce. Zaměstnání někoho, kdo by jinak byl nezaměstnaný, nestojí společnost jeho plnou mzdu — část mzdy je převod z ušlých dávek a ztraceného volného času/času hledání práce, spíše než čisté nové čerpání zdrojů společnosti — takže pokyny Green Booku stanoví stínovou cenu pod tržní mzdou pro práci čerpanou z nezaměstnanosti, odrážející skutečné náklady obětované příležitosti této práce (viz [náklady obětované příležitosti ve veřejných výdajích](../náklady-obětované-příležitosti-ve-veřejných-výdajích/)) spíše než její tržní cenu.

## Matematika

```
Stínová cena uhlíku (ilustrativní struktura, aktuální hodnoty z oficiálního
nástroje uhlíkových hodnot BEIS/DESNZ — nepoužívejte zastaralé údaje):
  Hodnota obchodovaného sektoru: informována trajektoriemi cen povolenek ETS
  Hodnota neobchodovaného sektoru (konzistentní s cílem): stanovena na mezní
    náklady na snížení emisí potřebné ke splnění zákonných uhlíkových rozpočtů,
    rostoucí v čase, jak se vyčerpávají snazší možnosti snížení
  Aplikace: £/tuna CO2e × tuny emitované či odvrácené variantou,
    diskontované sociální diskontní sazbou pro budoucí roky

Stínová mzdová sazba (SWR):
  SWR = Tržní mzda − (hodnota ušetřeného volného času/času hledání práce
                       + hodnota již nevyplácených sociálních dávek)
  Typicky vyjádřena jako zlomek tržní mzdy (např. SWR = 0,6
    × tržní mzda v oblasti s vysokou nezaměstnaností, podle pokynů přílohy A
    Green Booku k trhům práce s volnou kapacitou)
```

Obě čísla jsou politické konvence stanovené centrálně, nikoli empirická pozorování trhu — celý smysl stínové ceny je nahradit chybějící nebo zkreslený trh, takže hodnocení, které ji používá, musí citovat aktuální oficiální zdroj, místo aby odvozovalo vlastní číslo, právě aby hodnocení všech resortů byla srovnatelná.

## Praktický příklad

**Národní vláda**: hodnocení protipovodňového projektu odhaduje, že odvrací 400 tun emisí CO2e ročně (sníženým používáním nouzové techniky a sníženým vázaným uhlíkem z odvrácené rekonstrukce) po 30leté hodnoticí období vůči výchozímu stavu „minimum“.

```
Ilustrativní stínová cena uhlíku: 280 £/tunu CO2e (rok 1, rostoucí
  během hodnoticího období podle oficiálního harmonogramu hodnot neobchodovaného uhlíku)
Přínos uhlíku v roce 1 = 400 × 280 £ = 112 000 £
```

Protože oficiální harmonogram má hodnotu uhlíku *rostoucí* během hodnoticího období (odrážející zpřísňující se uhlíkové rozpočty), musí analytik pro každý rok 30letého toku použít správnou hodnotu specifickou pro daný rok, nikoli pevnou sazbu — použití hodnoty roku 1 po celou dobu by podhodnotilo pozdější přínosy a zkreslilo řazení vůči alternativním protipovodňovým návrhům s odlišnými uhlíkovými profily.

**Místní úřad**: program podpory zaměstnanosti města pro dlouhodobě nezaměstnané obyvatele umístí 150 lidí na místa placená 11 £/hodinu. Ocenění pomocí plné tržní mzdy by programu připsalo 11 £ × odpracované hodiny jako společenský přínos, ale přístup stínové mzdové sazby uznává, že nešlo o pracovníky čerpané z jiných míst — skutečné náklady obětované příležitosti jejich práce před programem byly nízké.

```
Tržní mzda: 11,00 £/hodinu
Stínová mzdová sazba (ilustrativně, vysoká místní nezaměstnanost): 0,6 × tržní mzda = 6,60 £/hodinu
Čistý společenský přínos připsatelný na odpracovanou hodinu ≈ 11,00 £ − 6,60 £ = 4,40 £/hodinu
  („navíc“ vytvořená hodnota přesunem skutečně nečinné práce do výroby,
   odlišná od samotné mzdy, která je z velké části převodem)
```

Proto mohou hodnocení zaměstnaneckých programů v oblastech s vysokou nezaměstnaností ukázat kladnou čistou společenskou hodnotu, i když by tentýž program provozovaný v oblasti plné zaměstnanosti, kde by vytěsněná práce byla jednoduše čerpána z jiných míst, neukázal.

## Souvislost s softwarovým inženýrstvím

Stínové ceny se dodávky softwaru přímo dotýkají zřídka, ale jsou důležité kdykoli byznys případ tvrdí uhlíkový nebo společenský přínos z IT změny — konsolidace datových center tvrdící úspory uhlíku nebo bezpapírová služba tvrdící odvrácený uhlík z tisku a poštovného musí použít aktuální oficiální stínovou cenu uhlíku, nikoli vymyšlené číslo, a musí aplikovat správný harmonogram po letech, nikoli pevnou sazbu, přesně jako u jakéhokoli jiného vstupu hodnocení podle Green Booku. Viz [celkové náklady vlastnictví ve vládním IT](../celkové-náklady-vlastnictví-ve-vládním-it/) a [hodnotu kybernetické bezpečnosti veřejného sektoru](../hodnota-kybernetické-bezpečnosti-veřejného-sektoru/), které obě často potřebují stínovou cenu pro těžko oceněný vstup (riziko průniku, výpadky) vedle přímo oceněných položek.

## Úskalí

- **Použití zastaralého údaje o uhlíku nebo mzdě.** Obě hodnoty jsou pravidelně revidovány centrálními pokyny; hodnocení postavené na překonaném údaji neobstojí v kontrole Treasury.
- **Aplikace pevné stínové ceny uhlíku napříč víceleté hodnocení.** Oficiální harmonogram v čase roste; použití hodnoty roku 1 po celou dobu zkresluje profil přínosů či nákladů.
- **Záměna stínové mzdy se slevou z faktické mzdy pracovníka.** Stínová mzdová sazba upravuje *oceňování* pracovního vstupu v hodnocení, nikoli mzdu, kterou je pracovník skutečně placen — jejich záměna svádí (nesprávně) k ospravedlňování mzdy pod tržní úrovní.
- **Odvozování vlastní stínové ceny místo použití oficiální.** Stínové ceny jsou politické konvence právě proto, aby byla hodnocení napříč resorty srovnatelná; místně vymyšlené číslo, jakkoli dobře odůvodněné, tuto srovnatelnost ruší.

## Zdroje

- HM Treasury / Department for Energy Security and Net Zero. „Valuing greenhouse gas emissions in policy appraisal.“ <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. „The Green Book: appraisal and evaluation in central government,“ příloha A (stínová cena práce, hodnoty nepracovního času). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. „Project Appraisal and Planning for Developing Countries.“ Heinemann, 1974 (základní metodologie stínových cen).
