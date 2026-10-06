# Oceňování na základě deklarovaných preferencí

Metody deklarovaných preferencí odhadují hodnotu netržního statku tím, že se lidí přímo ptají, kolik by byli ochotni za něj zaplatit, nebo jakou kompenzaci by byli ochotni přijmout za to, že se ho vzdají, typicky prostřednictvím strukturovaného průzkumu popisujícího hypotetický scénář. Podmíněné oceňování (contingent valuation) je nejznámější technikou této rodiny.

## Proč na tom záleží

Příloha 2 Green Booku (doplňující pokyny k oceňování netržních dopadů) schvaluje metody deklarovaných preferencí pro statky, u nichž neexistuje žádná pozorovatelná tržní transakce, z níž by se dala hodnota odvodit — kvalita ovzduší, biodiverzita, ochrana před povodněmi, existenční hodnota krajiny, kterou někdo možná nikdy nenavštíví (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Defra zveřejnila vlastní pokyny k deklarovaným preferencím pro environmentální hodnocení právě proto, že velká část environmentální hodnoty (ochrana stanovišť, kvalita vody) nemá žádný zástupný trh, na rozdíl například od hluku, který alespoň koreluje s pozorovatelnými cenami domů (viz [oceňování na základě odhalených preferencí](../oceňování-na-základě-odhalených-preferencí/)).

Hlavní přitažlivost deklarovaných preferencí — mohou ocenit doslova cokoli, včetně statků, s nimiž nikdo nikdy neobchodoval — je zároveň zdrojem problému s jejich věrohodností. Protože respondenti ve skutečnosti neutrácejí peníze, jsou průzkumy podmíněného oceňování zranitelné vůči hypotetickému zkreslení (lidé nadhodnocují ochotu platit, když neexistuje skutečné rozpočtové omezení), efektům vnoření (tentýž statek je oceněn odlišně podle toho, co dalšího je v průzkumu) a zkreslení výchozím bodem v návrzích nabídkových her. Panel NOAA z roku 1993 k podmíněnému oceňování, svolaný po soudních sporech kolem úniku ropy z tankeru Exxon Valdez, stanovil návrhové standardy — binární formát referenda „zaplatili byste X £, ano/ne“ místo otevřeného nabízení a povinné připomenutí skutečného rozpočtového omezení respondenta — které zůstávají referenčním standardem pro obhajitelné průzkumy.

## Matematika

```
Podmíněné oceňování (formát referenda):
  Předložte binární volbu: „zaplatili byste X £ ročně za výsledek Y? ano/ne“
  Náhodně měňte X mezi respondenty.
  Proložte ochotu platit jako funkci míry odpovědí ano/ne při každém X.

Průměrná WTP = plocha pod odhadnutou křivkou poptávky
Souhrnná hodnota = Průměrná WTP × dotčená populace

Varianta volebního experimentu (modelování diskrétní volby):
  Předložte respondentům opakované volby mezi svazky atributů
  (včetně atributu nákladů), odhadněte implicitní ceny každého
  nenákladového atributu z kompromisů, které respondenti odhalí.
```

Varianta volebního experimentu je v současné britské praxi obecně preferována před podmíněným oceňováním jednou otázkou, protože nutit respondenty opakovaně vyvažovat několik atributů proti nákladům vytváří vnitřně konzistentnější a hůře zmanipulovatelné odhady než jediná otázka ano/ne.

## Praktický příklad

**Národní vláda**: Defra zadává průzkum podmíněného oceňování pro ocenění programu zlepšení kvality říční vody. Průzkum ve formátu referenda u 2 000 domácností zjistí, že 62 % by zaplatilo 40 £ ročně prostřednictvím hypotetického příplatku k vodnému a odhadnutá křivka poptávky dává průměrnou ochotu platit 28 £ ročně na domácnost.

```
Průměrná WTP = 28 £/domácnost/rok
Domácnosti ve spádové oblasti = 340 000
Souhrnná roční hodnota = 28 £ × 340 000 = 9,52 mil. £/rok

Za 20leté hodnoticí období při diskontní sazbě 3,5 % (anuitní faktor ≈ 14,2):
PV(přínos) ≈ 9,52 mil. £ × 14,2 ≈ 135 mil. £
```

Tato souhrnná hodnota se pak porovnává s nákladovou stranou programu v [sociální analýze nákladů a přínosů](../sociální-analýza-nákladů-a-přínosů/). Green Book vyžaduje, aby byl tento druh důkazů z deklarovaných preferencí uváděn společně s intervalem spolehlivosti a metodikou průzkumu, nikoli jako holý bodový odhad, právě proto, že podkladové číslo je křehčí než tržní cena.

**Charita**: památkový trust se ptá návštěvníků i nenávštěvníků na ochotu platit za zabránění zavření historické budovy, kterou ani jedna skupina nutně nenavštěvuje (její existenční hodnota). Protože i nenávštěvníci, kteří budovu nikdy neuvidí, vykazují kladnou WTP, průzkum zachytí existenční a odkazovou hodnotu, kterou by prosté započtení příjmů z poplatků návštěvníků (zástupný ukazatel odhalených preferencí) zcela minulo — což ukazuje skutečnou výhodu deklarovaných preferencí tam, kde neexistuje žádná tržní transakce, která by hodnotu odhalila.

## Souvislost s softwarovým inženýrstvím

Metody deklarovaných preferencí se na práci softwarových inženýrů vztahují přímo jen zřídka, ale inženýři budující platformy pro konzultace s občany, nástroje participativního rozpočtu nebo infrastrukturu veřejných průzkumů často budují právě ten nástroj, na němž ekonomie závisí. Správné dotažení detailů návrhu průzkumu — náhodné nabízené částky, binární rámování referenda před otevřenými otázkami, výslovná připomenutí rozpočtového omezení — není UX jemnůstka, nýbrž to, co činí výsledné ocenění obhajitelným před kontrolou; špatně navržený průzkum v aplikaci může zneplatnit měsíce následné ekonomické analýzy. Viz [metriky spokojenosti občanů](../metriky-spokojenosti-občanů/) pro obecnější disciplínu získávání dat o veřejném mínění, která unesou analytickou váhu.

## Úskalí

- **Otevřené otázky „kolik byste zaplatili?“** Jsou mnohem náchylnější ke strategickému zkreslení a zkreslení ukotvením než binární rámování referenda; doporučení panelu NOAA použít formát referenda existuje právě proto, že otevřené zjišťování funguje špatně.
- **Žádné připomenutí skutečného rozpočtového omezení respondenta.** Bez něj deklarovaná WTP běžně přesahuje to, co by tytéž osoby zaplatily při skutečném rozpočtovém kompromisu — hypotetické zkreslení.
- **Ignorované efekty vnoření.** Tentýž statek oceněný samostatně versus jako součást většího svazku dává různé odhady WTP; uveďte, co dalšího, pokud něco, bylo v rámci průzkumu.
- **Považování bodového odhadu jediného průzkumu za ustálený.** Praxe Green Booku očekává rozmezí a diskusi o známých zkresleních, nikoli holé číslo přenesené do tabulky nákladů a přínosů, jako by šlo o tržní cenu.

## Zdroje

- HM Treasury. „The Green Book,“ příloha 2: oceňování netržních dopadů. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. „Valuing environmental impacts: practical guidelines“ (pokyny k podmíněnému oceňování a volebním experimentům). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. „Report of the NOAA Panel on Contingent Valuation.“ Federal Register, 1993.
- Mitchell RC, Carson RT. „Using Surveys to Value Public Goods: The Contingent Valuation Method.“ Resources for the Future, 1989.
