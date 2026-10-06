# Oceňování blahobytu (WELLBY)

Oceňování blahobytu přímo oceňuje účinek politiky z hlediska životní spokojenosti, přičemž jako jednotku používá WELLBY (rok života upravený o blahobyt) — jeden WELLBY odpovídá změně o jeden bod na škále životní spokojenosti 0–10, udržované po dobu jednoho roku. Je to oficiálně schválená alternativa ministerstva financí (HM Treasury) k peněžnímu vyjádření každého přínosu pomocí ochoty platit.

## Proč na tom záleží

„Wellbeing guidance for appraisal: supplementary Green Book guidance“ ministerstva financí (2021, <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) formálně zavedla data o subjektivním blahobytu do hodnocení centrální vlády, čímž dala analytikům cestu k ocenění výsledků — sociální kontakt, duševní zdraví, bezpečí, občanská účast — které metody [deklarovaných preferencí](../oceňování-na-základě-deklarovaných-preferencí/) a [odhalených preferencí](../oceňování-na-základě-odhalených-preferencí/) obtížně přesvědčivě oceňují, protože lidé jsou často špatnými předpovídateli toho, jak moc určitý statek skutečně ovlivní jejich spokojenost se životem. Pokyn, vypracovaný společně s What Works Centre for Wellbeing, stanoví doporučenou peněžní hodnotu za WELLBY — 13 000 £ (ceny 2021, pravidelně revidováno) — odvozenou ze vztahu pozorovaného ve velkých průzkumech blahobytu (zejména Annual Population Survey ONS, které od roku 2011 klade čtyři otázky o blahobytu ONS4) mezi příjmem a životní spokojeností, čímž dává analytikům převodní kurz zpět na libry, když je potřeba peněžně vyjádřené srovnání s jinými hodnoceními podle Green Booku.

Metoda je důležitá, protože obrací obvyklou logiku oceňování: místo aby se ptala, kolik by lidé za výsledek zaplatili (deklarované preference), nebo aby odvozovala hodnotu ze související tržní transakce (odhalené preference), měří přímo vliv výsledku na hlášenou životní spokojenost a obchází propast mezi tím, co lidé říkají, že chtějí, a tím, co je skutečně činí lépe situovanými. To je také její ústřední omezení — hlášená životní spokojenost je ovlivněna adaptací a efekty rámování, které musí pečlivý odborník kontrolovat.

## Matematika

```
WELLBY = 1 bod životní spokojenosti (škála 0–10) udržovaný u 1 osoby po dobu 1 roku

Celkový počet WELLBY z politiky =
  Σ (změna skóre životní spokojenosti) × (počet dotčených osob)
    × (trvání v letech, diskontované sociální diskontní sazbou)

Peněžní hodnota = Celkový počet WELLBY × hodnota za WELLBY
  (doporučená hodnota HM Treasury: 13 000 £ za WELLBY, ceny 2021,
   podléhá pravidelné revizi — před použitím ověřte aktuální pokyny)
```

Liší se od zdravotně-ekonomického [roku života upraveného o blahobyt](../roky-života-upravené-o-blahobyt/), který je typicky ukotven ve škálách kvality života související se zdravím (EQ-5D a podobné), nikoli v obecné životní spokojenosti; oba pojmy spolu souvisejí, ale nejsou zaměnitelné a hodnocení podle Green Booku by mělo být výslovné, která škála a metoda zjišťování jsou základem uváděné hodnoty WELLBY.

## Praktický příklad

**Místní úřad**: město provozuje komunitní program přátelství pro izolované starší obyvatele, obsluhující 400 lidí. Průzkum blahobytu před/po s otázkou na životní spokojenost ONS4 ukazuje růst průměrného skóre účastníků z 5,8 na 6,5 — zisk 0,7 bodu — udržovaný po 2 roky financovaného trvání programu.

```
Vygenerované WELLBY = 400 osob × 0,7 bodu × 2 roky = 560 WELLBY
Peněžní hodnota = 560 × 13 000 £ = 7,28 mil. £
Náklady programu = 450 000 £ za 2 roky

Poměr přínosů a nákladů ≈ 7,28 mil. £ / 0,45 mil. £ ≈ 16:1
```

Takto vysoký poměr by měl vyvolat zkoumání spíše než oslavy — pokyny Green Booku k blahobytu výslovně varují před přijímáním malovzorkových hlášených zisků za bernou minci bez kontroly selekčních efektů (připojili se jen nejspolečenštější, nejpravděpodobněji se zlepšující obyvatelé?) a bez srovnávací skupiny; dobře navržené hodnocení by odečetlo kontrafaktuální změnu pozorovanou u neúčastníků, viz [kontrafaktuální analýza](../kontrafaktuální-analýza/).

**Národní vláda**: porovnání dvou zaměstnaneckých programů pomocí WELLBY spíše než samotných výdělků zachycuje, že nezaměstnanost nese náklady na blahobyt nad rámec ztraceného příjmu — britský výzkum blahobytu soustavně zjišťuje, že nezaměstnanost snižuje životní spokojenost více, než by předpovídala samotná ztráta příjmu, kvůli nepeněžním účinkům ztráty struktury, smyslu a sociálního kontaktu. Program hodnocený jen podle růstu výdělků by podhodnotil svou hodnotu oproti tomu, který je hodnocen dodatečně i pomocí WELLBY.

## Souvislost s softwarovým inženýrstvím

Oceňování blahobytu se k inženýrským týmům přímo dostává zřídka, ale formuje, co se definuje jako „úspěch“ pro produkty sociálního sektoru a veřejných služeb — digitální platforma přátelství, nástroj pro třídění duševního zdraví nebo komunitní platforma pro izolované obyvatele by měla očekávat, že její dopad bude nakonec takto měřen, což znamená, že produktová analytika musí zachytit, *kdo* je oslovený a *jak dlouho*, nikoli jen počty použití. Zabudujte instrumentaci průzkumu blahobytu (ONS4 nebo ověřené ekvivalenty) do hodnocení služby od začátku, místo abyste ji přidávali zpětně; dodatečné doplnění výchozí hodnoty blahobytu po spuštění služby ztrácí srovnání před/po úplně. Viz [výsledky versus výstupy](../výsledky-versus-výstupy/) a [metody hodnocení dopadu](../metody-hodnocení-dopadu/).

## Úskalí

- **Žádný kontrafaktuál ani srovnávací skupina.** Zisk blahobytu před/po bez kontroly toho, co by se stalo tak či tak, nadhodnocuje účinek programu; viz [kontrafaktuální analýza](../kontrafaktuální-analýza/) a [dodatečnost a mrtvá váha](../dodatečnost-a-mrtvá-váha/).
- **Malé, samovolně vybrané vzorky.** Průzkumy blahobytu účastníků programu, kteří se přihlásili, jsou náchylné k selekčnímu zkreslení — lidé, kteří se připojili a zůstali, již pravděpodobně trendově stoupali.
- **Zacházení s převodem £ na WELLBY jako s přesným.** Peněžní hodnota je politická konvence odvozená z regresí příjem–blahobyt, nikoli tržní cena; používejte ji pro srovnatelnost napříč hodnoceními podle Green Booku, nikoli jako tvrzení o tom, „kolik blahobyt stojí“.
- **Záměna WELLBY se zdravotními QALY.** Měří odlišné konstrukty na odlišných škálách; viz [roky života upravené o blahobyt](../roky-života-upravené-o-blahobyt/) pro zdravotně-ekonomickou variantu a oba je neprůměrujte dohromady.

## Zdroje

- HM Treasury. „Wellbeing guidance for appraisal: supplementary Green Book guidance.“ 2021. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. „Personal well-being in the UK“ (míry ONS4). <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. „Wellbeing Valuation: A Nascent Field?“ Souhrny výzkumu LSE / Simetrica.
