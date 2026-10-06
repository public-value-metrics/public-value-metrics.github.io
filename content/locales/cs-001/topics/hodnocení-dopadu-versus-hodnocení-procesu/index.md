# Hodnocení dopadu versus hodnocení procesu

Hodnocení dopadu se ptá, zda program způsobil své zamýšlené výsledky. Hodnocení procesu se ptá, zda byl program skutečně dodán, jak byl navržen — komu, v jaké dávce a s jakými překážkami či usnadňujícími faktory po cestě. Jsou to různé otázky vyžadující různé metody a Magenta Book ministerstva financí (HM Treasury) považuje zadání obou současně za standardní praxi, protože slabý či nulový výsledek dopadu je sám o sobě neinterpretovatelný: nemůže říct, zda byla chybná základní teorie programu, nebo zda dobrá teorie prostě nikdy nebyla řádně dodána.

## Proč na tom záleží

Vládní hodnocení opakovaně nenašla žádný měřitelný účinek programu a neměla hodnocení procesu, které by vysvětlilo proč — což zanechalo zadavatele neschopné rozlišit „tento nápad nefunguje“ (selhání teorie) od „tento nápad nebyl nikdy řádně vyzkoušen“ (selhání implementace). Pokyny Medical Research Council k hodnocení procesu složitých intervencí, zveřejněné v BMJ v roce 2015 a široce citované vedle Magenta Booku, formalizovaly věrnost (fidelity), dávku a dosah jako základní věci, které hodnocení procesu musí měřit. Zadání hodnocení dopadu bez hodnocení procesu riskuje opuštění skutečně zdravého návrhu programu, protože byl dodán polovině zamýšlené populace při zlomku zamýšlené intenzity — chyba, které může tvůrce systémů dobře předejít, protože věrnost dodání je přesně to, co provozní datové systémy dokážou zachytit téměř v reálném čase.

## Matematika

```
Hodnocení procesu se ptá:
 - Bylo dodáno cílové populaci, v plánované dávce/intenzitě?
 - Odpovídalo dodání návrhu logického modelu / teorie změny?
 - Jaké překážky či usnadňující faktory ovlivnily dodání?
 Metody: kontroly věrnosti vůči předem stanoveným prahům, případové studie, rozhovory,
         administrativní data o dodání.

Hodnocení dopadu se ptá:
 - Co se změnilo a kolik z té změny je přisouditelné programu?
 Metody: RCT, DiD, PSM, RDD — viz impact-evaluation-methods — vůči kontrafaktuálu.

Kombinovaná diagnóza:
 Žádný účinek  + vysoká věrnost   → selhání teorie: model sám výsledek nevyprodukoval
 Žádný účinek  + nízká věrnost    → selhání implementace: model nebyl nikdy řádně otestován
 Zjištěn účinek + vysoká věrnost  → replikujte s důvěrou
 Zjištěn účinek + nízká věrnost   → prozkoumejte dále: účinek může být křehký nebo specifický pro lokalitu
```

## Praktický příklad

**Místní úřad (rodičovský program)**: hodnocení dopadu pomocí rozdílu rozdílů zjišťuje změnu +2 procentní body v míře dětského blahobytu — statisticky nevýznamnou. Hodnocení procesu, které běželo souběžně, zjišťuje, že program oslovil jen 210 z 500 cílových rodin (42% dosah) a z nich jen 95 splnilo předem stanovený práh věrnosti 75 %+ navštívených sezení — 19 % původně plánovaného dosahu. Závěr: slabý výsledek dopadu je konzistentní se selháním implementace, nikoli důkazem, že model programu nefunguje; vhodnou reakcí je oprava cesty doporučování, která způsobila 58% odpad, nikoli opuštění návrhu programu.

**Charita (program digitální gramotnosti)**: hodnocení dopadu zjišťuje silný účinek (+18 procentních bodů v skóre digitální důvěry) a souběžné hodnocení procesu potvrzuje 92% věrnost plánovanému kurikulu napříč všemi 12 místy dodání. Dohromady může poskytovatel program škálovat s důvěrou, protože se ukazuje, že účinek platí konzistentně, a není produktem jednoho neobvykle dobrého místa.

## Souvislost s softwarovým inženýrstvím

Data hodnocení procesu jsou přesně to, co dodávací systémy dobře zachycují: účast oproti plánu, dávka sezení a odpad v každé fázi trychtýře doporučení nebo zápisu — táž analytika trychtýře, kterou inženýři již budují pro produktové funkce, aplikovaná místo toho na dodávací potrubí sociálního programu. Předávání metrik věrnosti a dosahu manažerům programu téměř v reálném čase, místo čekání na hodnocení na konci grantu, umožňuje opravit rozbitou cestu doporučování uprostřed programu místo jejího objevení až po skončení období financování. Viz [metody hodnocení dopadu](../metody-hodnocení-dopadu/) pro kauzální návrhy, s nimiž je hodnocení procesu spárováno, [teorii změny](../teorie-změny/) a [logický model](../logický-model/) pro návrh, vůči němuž hodnocení procesu kontroluje věrnost, a [realizaci přínosů](../realizace-přínosů/) pro sledování dodání až k výsledkům, které byly slíbeny.

## Úskalí

- **Zadání samotného hodnocení dopadu.** Nulový nebo slabý výsledek pak nelze interpretovat jako selhání teorie nebo selhání implementace, což je přesně rozlišení, na kterém záleží při rozhodování o dalším postupu.
- **Zacházení s hodnocením procesu jako s měkkým doplňkem.** Potřebuje stejnou přísnost a předem stanovená kritéria věrnosti jako návrh dopadu, jinak se po příchodu výsledků zhroutí v anekdotu.
- **Záměna „včas a v rozpočtu“ s „dodáno, jak bylo navrženo“.** Hodnocení procesu kontroluje věrnost modelu — dávku, cílovou skupinu, obsah — nikoli projektový semafor.
- **Nepředregistrování prahů věrnosti.** Rozhodování dodatečně o tom, co je „dostatečná dávka“, způsobuje, že jakékoli vysvětlení zklamávajícího výsledku dopadu vypadá jako zpětné vymlouvání.

## Zdroje

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., „Process evaluation of complex interventions: Medical Research Council guidance.“ BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, zprávy o hodnocení programů. <https://www.nao.org.uk/>
