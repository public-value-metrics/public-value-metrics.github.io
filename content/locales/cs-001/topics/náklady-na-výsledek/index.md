# Náklady na výsledek

Náklady na výsledek jsou celkové výdaje programu dělené počtem lidí, kteří dosáhnou definované, smysluplné změny ve svých okolnostech — nikoli počtem těch, kdo službu pouze obdrželi. Je to nejostřejší metrika efektivity, kterou může poskytovatel nebo dodávací tým použít, protože vynucuje předchozí otázku, které se většina charit vyhýbá: co přesně se počítá jako úspěch?

## Proč na tom záleží

Potravinová banka může z účetnictví téhož roku vykázat dvě velmi odlišná čísla. Náklady na distribuovaný potravinový balíček mohou být 15 £. Náklady na domácnost, která následně dosáhne potravinové jistoty — již nepotřebuje nouzovou potravinovou pomoc, ověřeno v následném bodě — mohou být 340 £. Obojí je pravda. Jen jedno říká poskytovateli, zda peníze fungují. Rozdíl mezi nimi je rozdíl mezi výstupem a výsledkem: předaný balíček je výstup; domácnost, která již není v krizi, je výsledek. Viz [výsledky versus výstupy](../výsledky-versus-výstupy/).

Britský třetí sektor strávil dvě desetiletí budováním infrastruktury k vynucení tohoto rozlišení. „Čtyřpilířový přístup“ New Philanthropy Capital k efektivitě charit výslovně žádá organizace, aby uváděly výsledky před výstupy, a Inspiring Impact — britská spolupráce v měření dopadu podporovaná poskytovateli — zveřejňuje Matici výsledků (Outcomes Matrix), kterou nyní mnoho žádostí o grant žádá charity vyplnit. Roční výzkumný program „State of Hunger“ organizace Trussell Trust, provozovaný s Heriot-Watt University, existuje právě proto, že samotné počty balíčků neříkají nic o tom, zda lidé unikají z potravinové nejistoty.

Náklady na výsledek mají smysl až poté, co je stanoven kontrafaktuál: výsledek dosažený „tak či tak“ není výsledek, který program koupil. Viz [kontrafaktuální analýza](../kontrafaktuální-analýza/) a [vytěsnění a přisouzení](../vytěsnění-a-přisouzení/).

## Matematika

```
Náklady na výsledek = Celkové náklady programu / Počet příjemců dosahujících definovaného výsledku

kde:
  Celkové náklady programu = přímé náklady dodání + spravedlivý podíl režie
  Definovaný výsledek      = předem stanovená, měřitelná změna stavu
                              (např. „potravinově zabezpečen při 6měsíčním sledování“,
                              nikoli „obdržel potravinový balíček“)
```

Porovnejte s [databázemi jednotkových nákladů](../databáze-jednotkových-nákladů/) (např. odvětvově specifické srovnávací jednotkové náklady), abyste posoudili, zda jsou dané náklady na výsledek dobré, průměrné nebo špatné vůči srovnatelným intervencím.

## Praktický příklad

**Potravinová banka, jeden rok**:

- Celkové náklady programu: 450 000 £
- Distribuované balíčky: 30 000
- Náklady na balíček (metrika výstupu): 450 000 £ / 30 000 = **15 £**

Charita také provádí šestiměsíční následný průzkum se vzorkem domácností a zjišťuje, že 35 % domácností, které obdržely tři nebo více balíčků, hlásí, že již nepotřebují nouzovou potravinovou pomoc, a skórují nad prahem potravinové jistoty ve standardním modulu průzkumu potravinové jistoty. Z 1 800 domácností, které obdržely tři a více balíčků toho roku, dosáhne tohoto výsledku 630.

```
Náklady na výsledek = 450 000 £ / 630 = 714 £ na domácnost dosahující potravinové jistoty
```

Právě toto číslo 714 £ by měl použít poskytovatel porovnávající tuto charitu s pilotem peněžních převodů nebo poradnou pro dluhy — nikoli 15 £. Pokud srovnatelný program peněžních převodů ve stejném regionu dosáhne potravinové jistoty za 500 £ na domácnost, potravinová banka není zjevně efektivnější cestou ke stejnému výsledku, přestože její náklady na balíček vypadají levně.

## Souvislost s softwarovým inženýrstvím

Většina systémů pro správu případů je vytvořena k zaznamenávání výstupů, protože výstupy jsou to, co se děje uvnitř transakce (balíček se předá, formulář se odešle). Výsledky obvykle nastávají později, často mimo běžné okno zachycení systému, a vyžadují záměrné rozhodnutí o návrhu: vybudujte mechanismus následného sledování (spouštěč průzkumu, pracovní postup opětovného kontaktu, cvičení propojení dat) jako plnohodnotnou funkci, nikoli dodatek připojený pro výroční zprávu. Inženýři budující platformy pro správu grantů či případů pro sektor by měli otázku „co je událost výsledku a jak ji pozorujeme“ brát jako požadavkovou otázku kladenou dříve, než je datový model pevný — mnohem těžší je dodatečně přidat pole výsledku než čítač výstupů. Viz [výsledky versus výstupy](../výsledky-versus-výstupy/) a [logický model](../logický-model/) pro strukturování této diskuse o požadavcích a [náklady na příjemce](../náklady-na-příjemce/) pro rychlejší, hrubší metriku, po které týmy sáhnou, když sledování výsledků ještě není vybudováno.

## Úskalí

- **Vykazování výstupů převlečených za výsledky.** „Oslovení lidé“ nejsou „lidé, kterým bylo pomoženo“. Pokud lze metriku vytvořit ze systémového logu bez následného kontaktu, je to téměř jistě výstup.
- **Manipulace jmenovatele.** Zúžení populace výsledku na „ty, kdo program dokončili“ tiše vypouští ty, kdo odpadli — často nejtěžší případy — a nafukuje zdánlivou míru. Uvádějte jmenovatele jako všechny, kdo začali, nikoli všechny, kdo skončili.
- **Žádný kontrafaktuál.** Počítání každého, kdo dosáhl výsledku, včetně těch, kdo by ho dosáhli tak či tak, nadhodnocuje, co program koupil. Viz [kontrafaktuální analýza](../kontrafaktuální-analýza/).
- **Porovnávání napříč nekompatibilními definicemi výsledku.** „Potravinově zabezpečený“ měřený ověřeným modulem průzkumu není srovnatelný s „potravinově zabezpečený“ hlášeným sám ve formuláři spokojenosti; žebříček nákladů na výsledek je poctivý jen tehdy, když definice výsledků odpovídají.

## Zdroje

- New Philanthropy Capital (NPC), „Four Pillar Approach“ k efektivitě charit. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix a zdroje k měření dopadu. <https://inspiringimpact.org/>
- Trussell Trust a Heriot-Watt University, výzkumný program „State of Hunger“. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, „Our criteria“ (nákladová efektivita jako hlavní kritérium pro doporučení charit). <https://www.givewell.org/how-we-work/our-criteria>
