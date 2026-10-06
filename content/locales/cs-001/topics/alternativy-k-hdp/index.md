# Alternativy k HDP

Alternativy k HDP jsou metriky vytvořené k zachycení toho, co hrubý domácí produkt strukturálně ignoruje: neplacená pečovatelská práce, vyčerpávání životního prostředí, rozdělení příjmů a to, zda růst skutečně zlepšuje životy. Nejznámější jsou Indikátor skutečného pokroku (Genuine Progress Indicator, GPI) a Index hrubého národního štěstí (Gross National Happiness, GNH) Bhútánu; argumenty pro jejich vážné vzetí nejvlivněji vyložila Komise Stiglitz–Sen–Fitoussi v roce 2009. Pro inženýry budující vládní dashboardy nebo systémy KPI je „které číslo se počítá jako pokrok“ návrhovým rozhodnutím se skutečnými důsledky pro to, co se financuje.

## Proč na tom záleží

Simon Kuznets, který v 30. letech 20. století vybudoval národní účty USA, varoval Kongres v roce 1934, že „blahobyt národa lze sotva vyvodit z měření národního důchodu“ — varování, které toto číslo téměř okamžitě přerostlo. HDP počítá úklid po úniku ropy jako růst a neplacenou péči rodiče o dítě jako nic; nerozlišuje výdaje, které budují trvalý blahobyt, od výdajů, které jen kompenzují už způsobenou škodu. Komise Stiglitz–Sen–Fitoussi, svolaná francouzským prezidentem Nicolasem Sarkozym a vedená Josephem Stiglitzem, Amartyou Senem a Jean-Paulem Fitoussim, v roce 2009 oznámila, že statistické systémy by měly posunout důraz „od měření ekonomické produkce k měření blahobytu lidí“ a že udržitelnost by se měla sledovat odděleně od aktuálního blahobytu, a nikoli sbalit do jednoho čísla. Alternativy k HDP toto doporučení operacionalizují. GPI, vyvinutý think tankem Redefining Progress v 90. letech a stavějící na Míře ekonomického blahobytu Williama Nordhause a Jamese Tobina z roku 1972, začíná od osobní spotřeby (jako HDP) a poté přidává netržní přínosy, které HDP vynechává (domácí práce, dobrovolnictví), a odečítá obranné náklady a náklady vyčerpání (kriminalita, znečištění, dojíždění, čerpání zdrojů), které HDP mylně počítá jako kladné. Index GNH Bhútánu, spravovaný GNH Centre Bhutan (<https://www.gnhcentre.bt/>), jde ještě dále a nahrazuje růst jako deklarovaný ústavní cíl země: agreguje 33 ukazatelů v 9 doménách — psychologický blahobyt, zdraví, vzdělání, využití času, kulturní rozmanitost, vládnutí, vitalita komunity, ekologická rozmanitost a životní úroveň — do jediného skóre založeného na dostatečnosti, používaného přímo k prověřování návrhů vládní politiky.

## Matematika

```
GPI = osobní spotřební výdaje
      + netržní přínosy (domácí práce, dobrovolnictví, vysokoškolské vzdělání)
      − obranné a sociální náklady (kriminalita, znečištění, dojíždění, rozpad rodiny)
      − vyčerpání přírodního a sociálního kapitálu (čerpání zdrojů, ztráta zemědělské půdy)

Skóre dostatečnosti GNH, za doménu:
  osoba je v doméně „dostatečná“, jakmile překoná její práh u každého ukazatele
  Index štěstí = (% populace dostatečné alespoň v 6 z 9 domén)
                 + (vážený průměrný deficit menšiny „ještě ne šťastných“)
```

## Praktický příklad

**Region, GPI**: osobní spotřeba činí 50 mld. $. Přidáme odhadovanou hodnotu domácí a dobrovolnické práce 12 mld. $ (mzdové sazby náhradních nákladů — viz [hodnota času dobrovolníků](../hodnota-času-dobrovolníků/)). Odečteme odhadované roční náklady zácp z dojíždění (3 mld. $), kriminality (4 mld. $) a dlouhodobého vyčerpání zdrojů (6 mld. $):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 (mld. $)
```

Pokud HDP vzrostl z 50 mld. $ na 55 mld. $ toho roku (+10 %), ale obranné náklady a náklady vyčerpání rostly rychleji než spotřeba, GPI může klesnout, i když HDP roste — „hypotéza prahu“, kterou výzkumníci GPI uvádějí pro ekonomiky s vysokými příjmy zhruba od 70. let, kdy růst dál stoupal, zatímco GPI se ustálilo.

**Občan, GNH**: respondent překoná práh dostatečnosti v 7 z 9 domén (zdraví, vzdělání, životní úroveň, vitalita komunity, kulturní rozmanitost, ekologická rozmanitost, využití času), ale nedosáhne v psychologickém blahobytu a vládnutí. Protože 7 ≥ 6, je v počtu zařazen mezi „šťastné“; index odděleně sleduje hloubku jeho dvou deficitů, aby úzké splnění nebylo nerozlišitelné od pohodlného.

## Souvislost s softwarovým inženýrstvím

- Dashboard KPI modelovaný pouze podle propustnosti nebo výdajů (vzorec HDP) bude systematicky míjet škodu způsobenou při generování této propustnosti — objem tiketů podpory zacházený jako „zapojení“ místo „nouze uživatelů“ je softwarová verze započtení úniku ropy jako růstu.
- Účetnictví ve stylu GPI je užitečný auditní vzor pro jakoukoli sadu [KPI veřejného sektoru](../kpi-veřejného-sektoru/): u každé titulkové metriky výstupu se ptejte, jaký obranný náklad tiše nese (přepracování, reakce na incidenty, vyhoření), a odečtěte ho, tak jako GPI odečítá obranné výdaje od spotřeby.
- Metoda dostatečnosti domén GNH — prošel/neprošel za dimenzi, poté agregace — je strukturálně táž technika jako [vícekriteriální analýza rozhodování](../vícekriteriální-analýza-rozhodování/) a stojí za opakované použití všude, kde by jediné skalární skóre skrylo kriticky selhávající dimenzi.

## Úskalí

- **Zacházení s GPI jako s přesným národním účtem** — na rozdíl od HDP nemá GPI jedinou standardizovanou metodiku; různé studie různě váží náklady dojíždění, čas dobrovolníků nebo vyčerpání zdrojů, takže srovnání GPI napříč studiemi jsou mnohem méně spolehlivá než srovnání HDP napříč zeměmi.
- **Přenesení GNH celého do jiné politické kultury** — jeho váhy domén a prahy dostatečnosti byly stanoveny bhútánskými konzultacemi; kopírování čísla bez podkladového konzultačního procesu vytváří dutou metriku, které nikdo nevěří.
- **Předpoklad, že alternativa k HDP nahrazuje analýzu nákladů a přínosů** — jsou to diagnostické, celoekonomické ukazatele, nikoli rozhodovací nástroje pro jednotlivý program; k tomu použijte [sociální analýzu nákladů a přínosů](../sociální-analýza-nákladů-a-přínosů/).

## Zdroje

- Stiglitz JE, Sen A, Fitoussi J-P. „Report by the Commission on the Measurement of Economic Performance and Social Progress.“ (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. „The Genuine Progress Indicator: A Tool for Sustainable Development.“
- Nordhaus WD, Tobin J. „Is Growth Obsolete?“ (1972), NBER.
