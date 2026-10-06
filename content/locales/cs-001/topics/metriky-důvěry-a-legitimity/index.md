# Metriky důvěry a legitimity

Legitimita a podpora je jedním ze tří ramen „strategického trojúhelníku“ Marka Moorea v *Creating Public Value* (1995) — vedle samotné veřejné hodnoty a provozní kapacity — a je to rameno nejčastěji ponechávané neměřené, protože na rozdíl od rozpočtu nebo počtu výstupů nemá legitimita žádné zřejmé jediné číslo. Metriky důvěry a legitimity jsou rodina zástupných měr, které vlády používají k vyplnění této mezery: průzkumy institucionální důvěry, hodnocení důvěry kontrolních orgánů, data o stížnostech a odvoláních a ukazatele politické/legislativní podpory.

## Proč na tom záleží

Moorův argument je, že veřejný manažer, který dodává skutečnou hodnotu, ale ztrácí politickou a veřejnou legitimitu, nakonec ztratí schvalující prostředí potřebné k dalšímu dodávání — financování se škrtá, mandáty se zužují a služba je vyhladověna bez ohledu na to, jak dobré jsou její výsledky. Legitimita proto není dodatkem vztahů s veřejností připojeným ke kartě skóre dodávky; je nosným vstupem k tomu, zda může poslání vůbec pokračovat, a proto stojí jako rovnocenná perspektiva v [kartě skóre veřejné hodnoty](../karta-skóre-veřejné-hodnoty/), a nikoli jako poznámka pod čarou. Průzkumný program OECD „Trust in Government“ je přední mezinárodní pokus o jejich kvantifikaci: sleduje podíl občanů napříč členskými státy OECD, kteří uvádějí, že mají důvěru ve svou národní vládu, a jeho dlouhodobá data ukazují, že důvěra je vysoce citlivá na šoky — finanční krize 2008 i pandemie COVID-19 vyvolaly prudké výkyvy na národní úrovni, často následované jen částečným zotavením, přičemž analýza OECD soustavně zjišťuje, že vnímaná *kompetence* (dodává vláda to, co slibuje) a vnímaná *spravedlnost/integrita* (jedná vláda podle vnímání bez korupce a zvýhodňování) jsou dva nejsilnější hybatelé čísla důvěry, odlišné od spokojenosti s jakoukoli jednotlivou transakcí. Vlády se také stále častěji snaží operacionalizovat legitimitu na podrobnější úrovni — britské nezávislé regulátory a inspektoráty (National Audit Office, Parliamentary and Health Service Ombudsman, odvětvoví regulátoři jako Ofsted a Care Quality Commission) fungují jako institucionalizované kontroly legitimity a převádějí „důvěřuje veřejnost této službě stále“ na auditovatelná hodnocení.

## Matematika

Důvěra a legitimita je téma ve tvaru rámce, jehož použitelné kvantitativní zástupné ukazatele jsou:

```
Index institucionální důvěry (ve stylu OECD)
  = % respondentů průzkumu odpovídajících „ano“ na otázku o důvěře ve vládu,
    sledováno v čase, rozdělené podle demografické skupiny

Sada zástupných ukazatelů legitimity (žádné jediné číslo konstrukt nenahradí):
  - Oprávněné stížnosti na 1 000 uživatelů služby (data ombudsmana nebo interních stížností)
  - Míra úspěšnosti soudního přezkumu / odvolání proti rozhodnutím orgánu
  - Hodnocení nezávislého regulátora/inspektorátu (např. pásma od „vynikající“ po „nedostatečné“)
  - Hlasování o důvěře legislativního/kontrolního výboru nebo frekvence kritických zpráv
  - Objem žádostí o svobodný přístup k informacím a míra zpřístupnění/odmítnutí jako zástup
    za vnímanou transparentnost

Legitimita se potvrzuje, nepočítá: obhajitelné posouzení legitimity
triangulací několika z výše uvedeného, a nespoléhá se na žádný jediný zástupný ukazatel.
```

## Praktický příklad

**Národní daňový úřad**: triangulace legitimity pro roční zprávu o veřejné hodnotě.

```
Zástupný ukazatel důvěry ve stylu OECD (průzkum důvěry specifický pro úřad):
  58 % respondentů říká, že úřadu důvěřují, že se „ke mně bude chovat spravedlivě“ (pokles
  z 64 % před dvěma lety)

Data o stížnostech:
  Oprávněné stížnosti: 4,2 na 1 000 interakcí s poplatníky (nárůst z 3,1 na 1 000)

Odkazy na ombudsmana:
  Odkazy na nezávislý Adjudicator's Office: 1 850 za rok, z nichž
  61 % bylo uznáno zcela či zčásti proti úřadu (nárůst z 48 % předchozího roku)

Čteno napříč všemi třemi: důvěra klesá, oprávněné stížnosti rostou a
nezávislá zjištění ombudsmana se stále častěji staví proti úřadu —
tři nezávislé signály konvergující ke stejnému směru, což činí z tohoto
věrohodné zjištění o legitimitě, a nikoli šum v jediné řadě.
```

Pohyb jediného z těchto čísel by byl slabým důkazem; tři nezávislé míry pohybující se společně za stejné období jsou vzorcem, který činí tvrzení o legitimitě obhajitelným.

## Souvislost s softwarovým inženýrstvím

Metriky legitimity jsou zřídka produkovány dashboardem jediného týmu, což je samo o sobě poučením o návrhu: budujte potrubí pro výkaznictví, která dokážou přijímat a sladit data z nezávislých externích zdrojů (systémy zpracování případů ombudsmana, zdroje hodnocení regulátorů, dodavatelé průzkumů), místo aby architektura výkaznictví legitimity byla čistě interní metrikou, protože interně získaná tvrzení o legitimitě („hodnotíme se jako důvěryhodní“) mají malou důkazní váhu — tentýž problém nezávislosti, který je zmíněn pro perspektivu legitimity v [kartě skóre veřejné hodnoty](../karta-skóre-veřejné-hodnoty/). Potrubí dat o stížnostech a odvoláních si zaslouží stejnou přísnost kvality dat jako jakékoli potrubí výsledků napájející smlouvy [platby za výsledky](../platba-za-výsledky-a-dluhopisy-sociálního-dopadu/), protože nedostatečně hlášený nebo špatně kategorizovaný soubor stížností mlčky podhodnocuje problém legitimity dříve, než se stane viditelným v průzkumu důvěry o rok později. Viz [metriky spokojenosti občanů](../metriky-spokojenosti-občanů/) pro protějšek této míry na úrovni instituce na úrovni transakce a [veřejnou hodnotu](../veřejná-hodnota/) pro Moorův úplný rámec strategického trojúhelníku, do kterého toto rameno patří.

## Úskalí

- **Zacházení se spokojeností jako se zástupcem legitimity**: občan může být spokojen s rozhraním jedné transakce a přitom nedůvěřovat instituci jako celku (nebo naopak) — viz [metriky spokojenosti občanů](../metriky-spokojenosti-občanů/), proč musí být obojí vykazováno odděleně.
- **Spoléhání na jedinou samovykazovanou metriku**: interně provedený průzkum důvěry bez nezávislého potvrzení (data ombudsmana, hodnocení regulátorů) lze snadno odmítnout jako sebehodnocení; triangulujte.
- **Ignorování demografického členění**: souhrnná národní čísla důvěry mohou maskovat ostře odlišnou legitimitu u konkrétních skupin (podle věku, etnicity, příjmu či regionu) — vlastní vydání OECD Trust in Government členění provádějí právě z tohoto důvodu.
- **Čtení jediného poklesu způsobeného šokem jako trvalého trendu**: čísla důvěry se kolem krizí (finanční krachy, pandemie, hlasité skandály) prudce pohybují a částečně se zotavují; jediný datový bod po šoku by neměl být extrapolován na dlouhodobý pokles bez dalších dat.

## Zdroje

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University Press, 1995.
- OECD, „Trust in Government.“ <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, roční statistiky případů. <https://www.ombudsman.org.uk/>
