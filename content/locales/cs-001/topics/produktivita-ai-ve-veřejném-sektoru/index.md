# Produktivita AI ve veřejném sektoru

Metriky toho, co asistence AI při programování skutečně dělá s inženýrským výstupem — míry přijetí návrhů, zrychlení v kontrolovaných studiích, propustnost PR a udržení kódu — mají skutečně rozporuplnou základnu důkazů ještě před přidáním omezení veřejného sektoru: klasifikace dat omezuje, kterých částí staršího prostředí se nástroj AI vůbec smí dotknout, zadávací cykly znamenají, že hodnocený nástroj často zaostává o generaci modelu za aktuálními možnostmi, a požadavky bezpečnostní prověrky určují, kdo jej smí na čem používat.

## Proč na tom záleží

Dvě nejcitovanější kontrolované studie ukazují opačnými směry. RCT GitHub Copilot od Penga a kol. z roku 2023 zjistilo, že vývojáři dokončili úlohu HTTP serveru od nuly o 55,8 % rychleji s Copilotem (1 h 11 min vs. 2 h 41 min, n=95). RCT od METR z roku 2025 zjistilo, že zkušení vývojáři open-source pracující na *svých vlastních zralých repozitářích* byli o 19 % pomalejší s nástroji AI z počátku roku 2025, přičemž věřili, že jsou o zhruba 20 % rychlejší. Obě studie jsou zdravé; rozpor je zjištění — účinnost na úlohách od nuly se nepřenáší na účinnost ve zralé kódové základně a velká část vládního inženýrství je práce na zralé kódové základně v prostředích starších a svéráznějších než medián komerčního repozitáře. Generative AI Framework for HMG od Central Digital and Data Office (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) stanoví principy odpovědného přijetí právě proto, že tuto základnu důkazů nelze jednoduše importovat z ukázek dodavatelů; od resortů se očekává, že nástroje před nasazením ohodnotí vůči vlastním požadavkům na zacházení s daty a bezpečnost.

## Matematika

```
Míra přijetí      = přijaté návrhy / zobrazené návrhy
Míra udržení      = kód AI přežívající do sloučení / přijatý kód AI
Zrychlení         = (t_kontrola − t_AI) / t_kontrola  (POUZE z kontrolovaného srovnání)
Delta propustnosti = Δ sloučených PR/vývojář/týden

Koeficient pokrytí veřejného sektoru:
  způsobilý podíl kódové základny = LOC na systémech, kde klasifikace
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) nástroj vůbec dovoluje

Model hodnoty = vývojáři × způsobilé pokrytí × ušetřený čas × zatížená sazba × využití
               — každý člen potřebuje místní měření a koeficient pokrytí
               nemá v soukromém sektoru ekvivalent
```

## Praktický příklad

Vládní resort pilotuje asistenta AI pro programování u 300 vývojářů, ale použití nástroje je způsobilé jen pro systémy klasifikované jako OFFICIAL — 70 % prostředí podle rozdělení personálu, zbylých 30 % (systémy vyšší klasifikace) je zcela vyloučeno.

```
Způsobilí vývojáři = 300 × 0,70 = 210

Výsledek pilotu: sebehlášený ušetřený čas 40 min/den;
                 naměřená úspora na úrovni úkolu 12 min/den (0,2 h)
                 — rozdíl vnímání METR, reprodukovaný v praxi

Oceňujeme NAMĚŘENÉ číslo:
  210 × 0,2 h × 220 dní × 55 £/h zatížená × 0,6 využití
  = 210 × 44 hodin × 55 £ × 0,6
  = 9 240 hodin × 55 £ × 0,6 ≈ 304 920 £/rok kapacity

Náklady: 210 licencovaných míst × 22 £/měsíc × 12 ≈ 55 440 £/rok

Čistý poměr kapacity ≈ 304 920 / 55 440 ≈ 5,5 : 1
```

Financovatelné při zhruba třetině sebehlášeného přínosu, a to až po aplikaci stropu klasifikace — licencování všech 300 vývojářů na základě sebehlášeného údaje by nadsadilo jak způsobilou populaci, tak skutečnou úsporu.

## Souvislost s softwarovým inženýrstvím

Disciplíny, které se přenášejí přímo: provádějte **pragmatická zkoušení** na vlastní kódové základně resortu a skutečných tiketech, nikoli na demonstračních úlohách dodavatelů, protože výsledek METR je konkrétně zjištěním o zralé kódové základně; berte **míru přijetí jako zástup, nikoli výsledek** — vysoké přijetí s nízkým udržením je softwarovým ekvivalentem nadměrné diagnostiky; spárujte každé tvrzení o propustnosti s **kontrolou stability**, protože zpráva DORA z roku 2025 zjistila, že přijetí AI zvyšuje propustnost, ale zhoršuje stabilitu změn, což je přesně ta analýza čistého přínosu, na jejíž provedení jsou postaveny [metriky DORA pro veřejnou hodnotu](../metriky-dora-pro-veřejnou-hodnotu/); a buďte upřímní, že nástroje AI mohou rozšiřovat, nikoli zužovat mezeru ve starších prostředích zatížených [technickým dluhem](../technický-dluh-jako-eroze-veřejné-hodnoty/), protože trénovací data nedostatečně zastupují COBOL, 4GL a zakázkový kód mainframů běžný ve vládě, takže kvalita návrhů právě na systémech, které pomoc nejvíce potřebují, bývá nejslabší. Toto stojí vedle širší otázky [hodnoty AI ve vládě](../hodnota-ai-ve-vládě/) a mělo by se řídit týmiž omezeními [hodnoty kybernetické bezpečnosti veřejného sektoru](../hodnota-kybernetické-bezpečnosti-veřejného-sektoru/), která omezují, kde jakýkoli nástroj třetí strany vůbec smí vidět kód nebo data.

## Úskalí

- **Transplantace studií dodavatelů**: aplikace zrychlení z RCT na úlohách od nuly na práci s integrací starších systémů je přesně ta chyba, kterou studie METR odhalila.
- **Sebehlášení jako měření**: rozdíl 20 procentních bodů mezi vnímáním a naměřeným je největší známé zkreslení v této literatuře a nafukuje byznys případy, které se opírají jen o průzkumy vývojářů.
- **Ignorování stropu klasifikace**: modely licencování a hodnoty postavené na celkovém počtu zaměstnanců místo na způsobilé podmnožině schválené klasifikací systematicky nadhodnocují jak nákladovou efektivitu, tak dosažitelné pokrytí.
- **Zpoždění zadávacího cyklu**: zadávání nástrojů přes rámce může znamenat, že pilot hodnotí generaci modelu, která je v době plného nasazení o 12–18 měsíců za tím, co je veřejně dostupné, čímž je předpoklad zrychlení v původním byznys případu zastaralý ještě před spuštěním.

## Zdroje

- Peng S, et al., „The Impact of AI on Developer Productivity: Evidence from GitHub Copilot“, 2023. <https://arxiv.org/abs/2302.06590>
- METR, „Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity“, 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, zpráva 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
