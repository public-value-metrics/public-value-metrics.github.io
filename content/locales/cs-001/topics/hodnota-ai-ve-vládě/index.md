# Hodnota AI ve vládě

Hodnota AI ve vládě je požadavek, aby systém AI používaný ve veřejné službě překonal stejnou laťku hodnoty za peníze a veřejné hodnoty jako jakékoli jiné rozhodnutí o výdajích — nikoli nižší, protože je nový, a nikoli vyšší, protože se ho obávají. Je to otázka, na kterou musí být dodávací tým schopen odpovědět před, a nikoli po vydání funkce AI: přináší to více hodnoty, než stojí, když jsou náklady na záruky, dohled a riziko poctivě oceněny?

## Proč na tom záleží

Britský Central Digital and Data Office (CDDO) zveřejnil v roce 2024 Generative AI Framework for Government, navazující na dřívější prozatímní pokyny z června 2023, a strukturoval jej kolem deseti principů pokrývajících, co je generativní AI, její etické důsledky, bezpečnost nástrojů, kontroly zajištění kvality, řízení celého životního cyklu generativní AI, identifikaci skutečných případů užití, meziresortní spolupráci, transparentnost, dovednosti a správu. Naléhání rámce na „smysluplnou lidskou kontrolu“ a řízení celého životního cyklu existuje proto, že byznys případy projektů AI mají specifický způsob selhání, který jiné IT výdaje nemají: titulkové číslo produktivity pilotu se snadno vyrobí a snadno nadsadí, protože se měří před zohledněním zátěže ověřování, oprav a dohledu, kterou nástroj vytváří. Vedle rámce Algorithmic Transparency Recording Standard (ATRS) vyžaduje od veřejných orgánů zveřejnění standardizovaného záznamu — účel, použitá data, výkonnost, testování spravedlnosti, uspořádání lidského dohledu — pro algoritmické nástroje, které mají významný vliv na rozhodnutí o jednotlivcích, což činí náklady na zajištění systému AI věcí veřejného záznamu, a nikoli interním odhadem, který může tým tiše přeskočit.

## Matematika

Přijetí AI se hodnotí jako doplněk, nikoli náhrada standardního hodnocení [hodnoty za peníze](../hodnota-za-peníze/), s výslovnými členy specifickými pro AI, a nikoli sbalenými do jediného čísla „zisku produktivity“:

```
Čistá hodnota systému AI =
    zisk produktivity (ušetřený čas × zatížená cena personálu)
  − náklady na licenci/výpočty
  − náklady na lidské ověřování a dohled (kontrola výstupu AI, než se podle něj
    jedná — nesmršťuje se na nulu ani u zralých nástrojů)
  − náklady na dokumentaci ATRS a průběžné monitorování
  − rizikově upravené náklady újmy z chyb, zkreslení nebo halucinací,
    vážené podle toho, kdo tuto újmu nese (distribuční vážení)

Údaj o produktivitě pilotu, který vynechává člen dohledu, není srovnatelný
se základní linií nákladů běžného provozu, která již ekvivalentní lidskou
kontrolu zahrnuje — viz ai-productivity-in-the-public-sector pro úplnější
disciplínu měření produktivity, ze které toto čerpá.
```

## Praktický příklad

**Místní úřad používá nástroj generativní AI k sestavování prvních odpovědí na rutinní dotazy k dani z nemovitosti**: 25 000 dotazů ročně, dříve zpracovávaných výhradně pracovníky v průměru 14 minut na dotaz, zatížená cena personálu 34 £/hod.

```
Základní náklady (bez AI):
  25 000 × (14/60) × 34 £ = 198 333 £/rok

Titulkové tvrzení pilotu: AI sestaví odpověď za 90 sekund,
pracovník „jen zkontroluje a odešle“ — deklarovaný nový čas 3 minuty
  25 000 × (3/60) × 34 £ = 42 500 £/rok
  → deklarovaná úspora 155 833 £/rok (vypadá transformačně)

Plně zatížené číslo, měřené po 3 měsících ostrého provozu, nikoli na ručně
vybraných testovacích případech pilotu:
  Skutečný čas kontroly + opravy na odpověď: 6 minut (čtení vyžaduje
  skutečnou editaci pro složité nebo emocionálně citlivé dotazy)
  25 000 × (6/60) × 34 £ = 85 000 £/rok
  Náklady na licenci/výpočty: 38 000 £/rok
  Dokumentace ATRS a čtvrtletní monitorování zkreslení/kvality: 14 000 £/rok
  Celkové náklady = 85 000 + 38 000 + 14 000 = 137 000 £/rok

Skutečná úspora = 198 333 − 137 000 = 61 333 £/rok — skutečná a stojí
za zachování, ale výrazně pod polovinou titulkového tvrzení pilotu,
a k jejímu nalezení bylo zapotřebí poctivého měření času dohledu, nikoli
nejlepšího scénáře pilotu.
```

## Souvislost s softwarovým inženýrstvím

Zde se potkávají [produktivita AI ve veřejném sektoru](../produktivita-ai-ve-veřejném-sektoru/) a toto téma: inženýrské týmy, které vestavují funkce AI do veřejných služeb, vlastní instrumentaci, která umožňuje „skutečné“ číslo z praktického příkladu — zaznamenávání skutečného času kontroly, editační vzdálenosti mezi konceptem a odeslanou odpovědí a míry eskalace, místo důvěry v demonstrační podmínky pilotu. Funkce AI by měly být hodnoceny podle bodu 9 [standardu digitální služby](../standard-digitální-služby/) (bezpečná služba, soukromí uživatelů) a křížově odkazovat na [hodnotu kybernetické bezpečnosti veřejného sektoru](../hodnota-kybernetické-bezpečnosti-veřejného-sektoru/), kde nástroj zasahuje do dat občanů, a každý systém AI s významným vlivem na rozhodnutí o jednotlivcích potřebuje záznam ATRS, než může být považován za připravený k hodnocení, stejně jako služba potřebuje úspěšné hodnocení [standardu digitální služby](../standard-digitální-služby/) před spuštěním.

## Úskalí

- **AI-washing**: přeznačení stávající automatizace založené na pravidlech jako „AI“ za účelem přístupu k financování nebo pozornosti vyhrazené pro přijetí AI, bez rizik přesnosti nebo zkreslení, která skutečně ospravedlňují dodatečnou kontrolu rámce.
- **Měření produktivity pilotu, nikoli produktivity v provozu**: piloty běží na vybraných testovacích případech se zapojenými, pozornými recenzenty; provoz běží na celé nepořádné směsi případů s recenzenty, kteří časem vyvíjejí zkreslení automatizace a podkontrolovávají výstupy — obojí zkresluje poctivé číslo nákladů dohledu.
- **Přeskočení registrace ATRS, protože nástroj „není ve skutečnosti automatizované rozhodování“**: práh standardu je významný vliv na rozhodnutí o jednotlivci, který většina nástrojů AI pro koncepty nebo třídění zaměřených na občany splňuje, i když člověk formálně podepisuje.
- **Ignorování distribučního dopadu chyb**: míra chyb systému AI zprůměrovaná napříč všemi uživateli může skrývat mnohem vyšší míru chyb nebo zkreslení u konkrétních skupin; [distribuční vážení](../distribuční-vážení/) by se mělo aplikovat na rizikově upravený člen újmy, nikoli jen na souhrnné číslo přesnosti.

## Zdroje

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
