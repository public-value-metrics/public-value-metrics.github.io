# Databáze jednotkových nákladů

Databáze jednotkových nákladů je knihovna předem zpracovaných, důkazy podložených finančních zástupných ukazatelů pro sociální výsledky — hodnota přechodu z nezaměstnanosti do zaměstnání, snížené osamělosti, stabilního nájmu — která praktikům umožňuje peněžně vyjádřit výsledek, aniž by museli pokaždé zadávat zakázkový výzkum oceňování. Existují proto, aby malá charita píšící žádost o financování mohla uplatnit stejnou přísnost jako dobře vybavená poradenská firma, a to opětovným použitím zástupného ukazatele, který již někdo jiný odvodil a zveřejnil.

## Proč na tom záleží

UK Social Value Bank organizace HACT, vyvinutá s ekonomem Danielem Fujiwarou metodami oceňování blahobytu, a Global Value Exchange, otevřená, crowdsourcovaná databáze finančních zástupných ukazatelů, jsou dvě nejrozšířenější v britském třetím a veřejném sektoru. Obě existují, protože podkladová práce na oceňování — [oceňování blahobytu](../oceňování-blahobytu/) a [oceňování na základě deklarovaných preferencí](../oceňování-na-základě-deklarovaných-preferencí/) — je nákladná, metodicky náročná a pomalá, pokud se provádí od nuly pro každý projekt. Sdílená, zveřejněná knihovna zástupných ukazatelů mění to, co by bylo vícemesíční výzkumné cvičení, na vyhledání, a právě proto jsou důležité jak pro výpočty [sociální návratnosti investice](../sociální-návratnost-investice/), tak pro hodnocení nabídek podle [Social Value Act](../zákon-o-sociální-hodnotě/): bez nich by přísné peněžní vyjádření bylo dostupné jen organizacím dostatečně velkým na to, aby si zadaly vlastní studie.

## Matematika

Databáze jednotkových nákladů sama nic nepočítá; dodává jeden vstup do výpočtu prováděného jinde:

```
Hodnota finančního zástupného ukazatele = tržní cena, NEBO stínová cena, NEBO ocenění blahobytu,
                         NEBO hodnota z deklarovaných preferencí
                         pro definovanou jednotku změny výsledku
                         (např. „na osobu přecházející z nezaměstnanosti do zaměstnání, za rok“)

Uplatněná hodnota = počet dosažených výsledků × jednotková hodnota zástupného ukazatele
```

Viz [stínové ceny](../stínové-ceny/), jak se zástupný ukazatel konstruuje, když neexistuje tržní cena, a [sociální návratnost investice](../sociální-návratnost-investice/), jak uplatněná hodnota následně vstupuje do poměru po úpravách o mrtvou váhu a přisouzení.

## Praktický příklad

**Charita (SROI služby přátelství)**: položka databáze jednotkových nákladů pro „snížení osamělosti“ udává ilustrativní zástupný ukazatel 1 100 £ na osobu a rok. Uplatněno na 80 příjemců: 80 × 1 100 £ = 88 000 £ hrubé hodnoty. Pokud má stejná databáze také zástupný ukazatel pro „zlepšený duševní blahobyt“, který čerpá z překrývající se položky průzkumu blahobytu, naskládání obou zástupných ukazatelů pro stejných 80 lidí by dvakrát započítalo část téže podkladové změny — databáze dodá číslo, ale vyhnout se tomuto překrytí je odpovědnost analytika.

**Místní úřad (SROI klubu práce)**: položka databáze jednotkových nákladů pro „přechod z nezaměstnanosti do trvalého zaměstnání“ je uplatněna na 45 účastníků při ilustrativním zástupném ukazateli 8 500 £ na osobu a rok: 45 × 8 500 £ = 382 500 £ hrubé hodnoty, před úpravami o mrtvou váhu a přisouzení uvedenými v [sociální návratnosti investice](../sociální-návratnost-investice/).

## Souvislost s softwarovým inženýrstvím

Týmy budující nástroje pro výkaznictví pro charity či zadavatele těží z interního „katalogu výsledků“ — tabulky mapující každý výsledek, který může produkt nebo služba věrohodně tvrdit, na pojmenovaný zástupný ukazatel, jeho zdrojovou databázi, datum zveřejnění a identifikátor verze — aby různé týmy napříč organizací nevybíraly každý mírně odlišné hodnoty pro tentýž výsledek. Zabalení otevřených dat Global Value Exchange za vyhledávací službu, přičemž zdroj a datum jsou vždy zobrazeny vedle čísla, udržuje zástupný ukazatel auditovatelný, a ne jako magické číslo pohřbené v tabulce. Viz [sociální návratnost investice](../sociální-návratnost-investice/) a [Social Value Act](../zákon-o-sociální-hodnotě/) pro dvě hlavní místa, kde se tyto zástupné ukazatele spotřebovávají.

## Úskalí

- **Zacházení se zástupnými ukazateli jako s přesnými.** Většina zveřejněných zástupných ukazatelů jsou modelované průměry ze studií oceňování blahobytu se širokými intervaly spolehlivosti; citovat jeden na libru přesně nadhodnocuje přesnost, kterou podkladový výzkum podporuje.
- **Dvojí započtení překrývajících se zástupných ukazatelů.** Kombinování zástupných ukazatelů (např. „snížená osamělost“ a „zlepšený duševní blahobyt“) odvozených z překrývajících se konstruktů průzkumu oceňuje tutéž podkladovou změnu dvakrát.
- **Použití zástupného ukazatele z jiného kontextu bez úpravy.** Zástupný ukazatel kalibrovaný na jednu národní populaci a rok, uplatněný jinde bez úpravy o inflaci či kontext, mlčky zkresluje hodnotu.
- **Nekontrolování původu.** Global Value Exchange je otevřená a crowdsourcovaná, takže kvalita položek se mezi přispěvateli liší; před citováním čísla v žádosti o financování nebo zadávací nabídce ověřte podkladový zdroj.

## Zdroje

- HACT, „UK Social Value Bank.“ <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., „The Social Impact of Housing Providers“ (HACT, 2013) — metodický základ UK Social Value Bank.
- Social Value UK, „A Guide to Social Return on Investment,“ část o finančních zástupných ukazatelích.
