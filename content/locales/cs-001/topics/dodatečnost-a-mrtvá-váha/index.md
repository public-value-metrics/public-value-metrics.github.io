# Dodatečnost a mrtvá váha

Dodatečnost (additionality) se ptá, zda intervence způsobila výsledek, který by jinak nenastal. Mrtvá váha (deadweight) je její zrcadlo: podíl výsledku, který by nastal i bez programu, grantu nebo dotace. Téměř každé tvrzení o dopadu vládního programu či charity nadsazuje jeho účinek, dokud se mrtvá váha neodečte, a proto ji britské evaluační pokyny považují za první a nejdůležitější úpravu jakéhokoli titulkového čísla.

## Proč na tom záleží

„Podpořili jsme 500 firem k růstu“ zní jako úspěch, ale pokud by 300 z těchto firem rostlo tak či tak — protože se místní ekonomika zotavovala, protože měly jiné zdroje financování, protože už před začátkem programu byly na růstové trajektorii — pak je skutečný dodatečný přínos programu 200, nikoli 500. Magenta Book ministerstva financí (HM Treasury) a dlouholetý „Additionality Guide“ HM Treasury/BIS (původně vyvinutý pro programy regionálního rozvoje a regenerace a od té doby široce používaný v britském vládním hodnocení) formalizují mrtvou váhu jako počáteční úpravu ve standardní posloupnosti čistého dopadu: hrubý účinek minus mrtvá váha, minus vytěsnění, minus únik, upravený o multiplikační efekty, se rovná čistému dodatečnému dopadu. Přeskočení tohoto kroku je nejběžnější způsob, jak jsou tvrzení o dopadu ve veřejném a sociálním sektoru nafukována, ať záměrně či ne — grantový program, který měří jen hrubé výsledky účastníků, bez srovnávací skupiny, nedokáže odlišit vlastní účinek od toho, co by se stalo tak či tak.

Mrtvá váha není pevné procento; zcela závisí na kontrafaktuálu pro konkrétní populaci a intervenci (viz [kontrafaktuální analýza](../kontrafaktuální-analýza/)). Hodnocení regionálního rozvoje v Anglii za dřívějších regionálních rozvojových agentur běžně nacházela míry mrtvé váhy v rozmezí 20–60 % podle typu podpory podnikání, a proto věrohodná hodnocení programů uvádějí rozmezí upravené o mrtvou váhu místo jediného předpokládaného čísla a proto poskytovatelé jako National Lottery Community Fund a Big Society Capital vyžadují, aby příjemci řešili mrtvou váhu výslovně ve výkaznictví výsledků, místo aby uváděli hrubé počty účastníků.

## Matematika

Standardní posloupnost úprav čistého dopadu, jak je stanovena v britských evaluačních pokynech (Magenta Book; HM Treasury/BIS Additionality Guide; pokyny pro hodnocení ESIF a strukturálních fondů):

```
Hrubý výsledek
  − Mrtvá váha       (co by se stalo tak či tak)
  − Vytěsnění        (aktivita/přínos přesunutý odjinud, nikoli vytvořený — viz
                       displacement-and-attribution)
  − Únik             (přínos připadající mimo cílovou skupinu/oblast)
  × Multiplikátor    (další nepřímá/indukovaná ekonomická aktivita, kde je kladná)
  = Čistý dodatečný dopad
```

Míra mrtvé váhy jako podíl:

```
Míra mrtvé váhy = výsledky, které by nastaly bez intervence
                   / celkové pozorované hrubé výsledky

Čisté dodatečné výsledky = Hrubé výsledky × (1 − Míra mrtvé váhy)
```

## Praktický příklad

**Grantový program podpory podnikání**: regionální grantové schéma hlásí, že 500 podpořených firem zvýšilo v následujícím roce zaměstnanost, průměrně o 3 pracovní místa každá — hrubé tvrzení o 1 500 pracovních místech.

Spárovaná srovnávací skupina podobných nepodpořených firem (viz [kontrafaktuální analýza](../kontrafaktuální-analýza/)) ukazuje, že 40 % růstu zaměstnanosti podpořených firem by nastalo tak či tak, na základě toho, jak si spárovaná skupina vedla ve stejném období.

```
Míra mrtvé váhy = 40 %
Čistá dodatečná pracovní místa = 1 500 × (1 − 0,40) = 900 míst
```

Poctivě uvedený úspěch programu je 900 míst, nikoli 1 500 — 40% snížení čistě z úpravy o mrtvou váhu, ještě před zvážením vytěsnění či úniku.

**Zaměstnanecký program charity**: charita umístí 200 dlouhodobě nezaměstnaných do práce za 600 000 £ (3 000 £ na umístění, hrubě). Národní data trhu práce ukazují, že bez jakékoli intervence najde práci ve stejném období zhruba 15 % srovnatelné kohorty dlouhodobě nezaměstnaných přirozenou fluktuací na trhu práce.

```
Míra mrtvé váhy = 15 %
Čistá dodatečná umístění = 200 × (1 − 0,15) = 170
Skutečné náklady na dodatečné umístění = 600 000 £ / 170 ≈ 3 529 £
```

Hrubý údaj nákladů na umístění (3 000 £) podhodnocuje skutečné náklady dodatečného přínosu charity zhruba o 15 %.

## Souvislost s softwarovým inženýrstvím

Dodatečnost a mrtvá váha jsou důležité přímo pro každého, kdo staví software pro měření dopadu či správu grantů pro veřejný nebo sociální sektor:

- Systémy pro výkaznictví výsledků by měly z návrhu zachycovat srovnávací nebo výchozí skupinu, nejen výsledky účastníků — dodatečné doplnění kontrafaktuálu po spuštění systému bez něj je mnohem těžší než zabudování zachycování od začátku (viz [kontrafaktuální analýza](../kontrafaktuální-analýza/)).
- Dashboardy, které uvádějí jen hrubé počty účastníků, budou systematicky nadhodnocovat dopad vůči poskytovatelům a kontrolním orgánům; kde odhady mrtvé váhy existují (z evaluační literatury nebo srovnávací skupiny), měl by software zobrazit údaj po odečtu mrtvé váhy vedle hrubého, nikoli místo něj.
- To přímo souvisí se [sociální návratností investice](../sociální-návratnost-investice/), jejíž poměr SROI je věrohodný až tehdy, když byla z tvrzených hrubých výsledků odečtena mrtvá váha (a vytěsnění) — kalkulačka SROI, která tento krok vynechá, vyprodukuje nadsazené poměry, které neobstojí před kontrolou.

## Úskalí

- **Uvádění hrubých výsledků, jako by byly všechny dodatečné.** Je to nejběžnější chyba měření dopadu ve výkaznictví grantů a programů; vždy se ptejte „stalo by se to tak či tak?“, než zveřejníte titulkové číslo.
- **Předpoklad, že jediné procento mrtvé váhy platí všude.** Mrtvá váha se velmi liší podle odvětví, populace a místních ekonomických podmínek; používejte srovnávací skupinu nebo důkazy specifické pro odvětví místo opětovného použití čísla z nesouvisejícího hodnocení.
- **Zaměňování mrtvé váhy s vytěsněním.** Mrtvá váha se týká kontrafaktuálních výsledků pro tytéž účastníky; vytěsnění se týká účinků na jiné lidi či místa — viz [vytěsnění a přisouzení](../vytěsnění-a-přisouzení/). Záměna obou vede k dvojímu započtení nebo podhodnocení úpravy.
- **Mrtvá váha hlášená samotnými účastníky.** Ptát se příjemců „stalo by se to bez naší pomoci?“ vede k systematicky nízkým odhadům mrtvé váhy (účastníci mají tendenci připisovat zásluhu programu); nezávislá srovnávací skupina je mnohem spolehlivější.

## Zdroje

- HM Treasury, „The Magenta Book: Central Government Guidance on Evaluation“ (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, „Additionality Guide: A Standard Approach to Assessing the Additional Impact of Interventions“ (3. vydání), původně vyvinutý s English Partnerships a Housing Corporation.
- Evropská komise, „Evalsed: The Resource for the Evaluation of Socio-Economic Development“ — pokyny k mrtvé váze, vytěsnění a úniku v hodnocení strukturálních fondů.
- National Lottery Community Fund, „Guidance on Outcomes and Impact Reporting.“ <https://www.tnlcommunityfund.org.uk/>
