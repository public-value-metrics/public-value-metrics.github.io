# Produktivita veřejných služeb

Produktivita veřejných služeb měří, jak efektivně veřejné výdaje přeměňují vstupy (zaměstnance, kapitál, zboží a služby) na výstupy upravené o kvalitu, u služeb — zdravotnictví, školství, policie, sociální péče — které nemají tržní cenu, a tedy ani údaj o příjmech, kterým by se náklady daly dělit. Britský Office for National Statistics tuto řadu zveřejňuje od poloviny 2000. let a zůstává metodologicky nejrozvinutějším národním pokusem odpovědět na otázku „daří se vládě přeměňovat peníze na veřejné služby lépe, nebo hůře?“

## Proč na tom záleží

Na trhu je produktivita (hodnota výstupu) / (náklady vstupu) a hodnota výstupu je pozorovatelná, protože za ni někdo platí. Náhrada kyčelního kloubu, školní místo a policejní hlídka nemají prodejní cenu, takže naivně lze měřit jen *vstupy* (co bylo utraceno) — což svádí komentátory k tomu, aby rostoucí veřejné výdaje automaticky považovali za špatné, protože více vstupu při plochém titulkovém objemu aktivity vypadá jako klesající produktivita. Metodika ONS, uvedená v jeho publikacích „Sources and Methods“ k produktivitě veřejných služeb, to řeší konstrukcí indexu *výstupu* z objemů aktivity (provedené operace, vyučení žáci, vyšetřované trestné činy) a následnou *úpravou kvality* tohoto indexu výstupu — pro zdravotnictví zahrnutím míry přežití a čekacích dob; pro školství zahrnutím dosaženého vzdělání; pro policii zahrnutím výsledků jako vyřešení případů — takže služba, která provede stejný počet operací, ale dosáhne lepších měr přežití, se registruje jako produktivnější, nikoli jen jako dražší. Titulkové zjištění, které se opakuje napříč vydáními ONS, je pro sektor střízlivé: produktivita britských veřejných služeb prudce klesla během pandemie COVID-19 a podle vlastních vydání ONS z poloviny 2020. let se v několika podsektorech včetně zdravotnictví stále nevrátila na úroveň roku 2019, a to i při rostoucích výdajích — mezera, která přerámuje „více financování“ a „více produktivity“ jako dvě zcela samostatné otázky.

## Matematika

```
Index výstupu (objem) = Σ (aktivita_i × váha relativních jednotkových nákladů_i), vážený
                          základním rokem napříč všemi aktivitami služby (např. operace kyčle,
                          operace šedého zákalu, konzultace praktických lékařů), analogicky
                          k objemovému indexu Laspeyres/Paasche

Úprava o kvalitu       = index výstupu × faktor úpravy o kvalitu
                          (např. zahrnutí změny míry přežití, čekacích dob,
                          dosaženého vzdělání či recidivy jako multiplikátoru surového objemu)

Index vstupů           = Σ (hodiny práce × váha nákladů práce) + (náklady zboží/služeb,
                          deflované) + (spotřeba kapitálu)

Růst celkové faktorové produktivity = % změna indexu výstupu upraveného o kvalitu
                                       − % změna indexu vstupů
```

## Praktický příklad

**Ilustrativní výpočet produktivity akutního sektoru NHS** (struktura sleduje metodiku ONS):

```
Rok 1: index objemu výstupu = 100,0 (základní rok), index vstupů = 100,0
       → index produktivity = 100,0

Rok 2: objem aktivity roste o 3,0 % (více operací, více schůzek)
       ale průměrná čekací doba se zhoršuje, aplikace slevy úpravy
       o kvalitu −1,0 %
       Index výstupu upravený o kvalitu = 100 × 1,030 × 0,990 = 101,97

       Vstupy rostou: počet zaměstnanců +4,0 %, ostatní náklady (deflované) +1,5 %,
       vážený index vstupů = 100 × 1,032 = 103,2

Růst produktivity = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                   = 1,97 % − 3,2 % = −1,23 procentního bodu

Interpretace: aktivita vzrostla, ale vstupy rostly rychleji a kvalita mírně
klesla, takže produktivita — výstup na jednotku vstupu — poklesla, přestože
„bylo poskytnuto více péče“.
```

Je to přesně ten vzorec, který vydání ONS opakovaně hlásila pro části NHS po pandemii: rostoucí výdaje a rostoucí surová aktivita koexistující s klesající měřenou produktivitou, jakmile se zohlední úprava o kvalitu i růst vstupů.

## Souvislost s softwarovým inženýrstvím

Produktivita veřejných služeb je populační analog debat o inženýrské produktivitě (dodané story pointy versus [metriky DORA](../metriky-dora-pro-veřejnou-hodnotu/) versus [metriky toku](../metriky-toku-v-dodávání-vlády/)): surová propustnost bez úpravy o kvalitu je v nemocnici přesně tak zavádějící jako „dodané řádky kódu“ v softwarovém týmu. Týmy budující datová potrubí výkonnosti pro resorty by měly s úpravou kvality zacházet jako s plnohodnotnou, verzovanou transformační fází, nikoli poznámkou pod čarou — protože důvěryhodnost samotného ONS stojí na tom, že je tato úprava transparentní, reprodukovatelná a revidovaná, jak přicházejí lepší data o kvalitě (ONS revidují odhady produktivity minulých let, když jsou podkladová data o kvalitě — např. míry přežití — finalizována, takže jakýkoli navazující systém spotřebovávající tyto statistiky musí zvládat zpětné revize, nejen připojovat nová období). Také se přímo protíná s [celkovými náklady vlastnictví](../celkové-náklady-vlastnictví-ve-vládním-it/) a [produktivitou AI ve veřejném sektoru](../produktivita-ai-ve-veřejném-sektoru/): systém, který zvyšuje surový objem aktivity bez zlepšení nebo udržení kvality, není podle vlastní definice ONS zlepšením produktivity.

## Úskalí

- **Zacházení s růstem vstupů jako s růstem produktivity**: více výdajů financujících více zaměstnanců produkuje více *aktivity*, nikoli více *produktivity*, pokud neroste také výstup na jednotku vstupu — obojí se v politických komentářích rutinně zaměňuje.
- **Úplné ignorování úpravy o kvalitu**: index výstupu postavený jen ze surových počtů aktivit ukáže „zisky produktivity“ z dělání více něčeho méně hodnotného nebo nižší kvality; úprava o kvalitu ONS existuje právě proto, aby to zachytila.
- **Porovnávání indexů produktivity napříč podsektory bez shody ročníku metodiky**: produktivita zdravotnictví, školství a policie je každá postavena z jiných zdrojů dat o aktivitě a kvalitě v odlišných revizních cyklech — naivní mezisektorové srovnání porovnává nesloučitelné nástroje.
- **Čtení poklesu produktivity jednoho roku jako trvalého trendu**: čísla produktivity z doby pandemie a po ní vykazovala významnou meziroční volatilitu, jak se samotná data o kvalitě (např. čekací listiny, obnova plánované péče) posouvala; ONS soustavně varuje před nadměrnou interpretací pohybů jednoho roku.

## Zdroje

- Office for National Statistics, série „Public Service Productivity“. <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, „Public Service Productivity: Total, UK — Sources and Methods.“ <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
