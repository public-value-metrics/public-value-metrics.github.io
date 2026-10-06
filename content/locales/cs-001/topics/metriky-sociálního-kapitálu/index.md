# Metriky sociálního kapitálu

Metriky sociálního kapitálu kvantifikují sítě, důvěru a občanskou účast, které umožňují komunitám a institucím efektivně fungovat — „pojivovou tkáň“, která nemá řádek v žádné rozvaze, ale viditelně snižuje náklady a tření, když je přítomna, a viditelně je zvyšuje, když chybí. Moderní rámování pochází z knihy „Bowling Alone“ Roberta Putnama (2000), která rozlišila pojivý kapitál (vazby uvnitř podobné skupiny) od mostního kapitálu (vazby napříč různými skupinami); britský Office for National Statistics od té doby vybudoval stálou sadu ukazatelů k jeho národnímu sledování.

## Proč na tom záleží

Putnamovo ústřední empirické tvrzení — doložené poklesem členství v amerických občanských sdruženích, návštěvnosti kostelů a účasti v odborech během pozdního dvacátého století — bylo, že sociální kapitál předpovídá výsledky, které konvenční ekonomie obtížně vysvětluje: nižší kriminalitu, lepší blaho dětí, efektivnější místní správu, rychlejší ekonomické zotavení po šocích. Pojivý kapitál (silné vazby uvnitř semknuté skupiny) je dobrý pro vzájemnou podporu, ale může zkostnatět v uzavřenost; mostní kapitál (slabší vazby napříč různými skupinami) je to, co typicky koreluje s přístupem k příležitostem, tokem informací a institucionální důvěrou. ONS to vzalo dostatečně vážně, aby vybudovalo národní rámec ukazatelů — jeho řada „Social Capital in the UK“ (<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>) sleduje čtyři pilíře: osobní vztahy, podpora sociální sítě, občanské zapojení a důvěra a kooperativní normy, každý postavený na zavedených otázkách průzkumů (Community Life Survey, Understanding Society). Pro veřejné digitální služby je sociální kapitál dvojnásobně relevantní: je to jak výsledek, který se některé programy snaží budovat (financování odolnosti komunit, sociální preskripce), tak vstup, který určuje, jak dobře bude služba skutečně přijata — služba zavedená do komunity s vysokou důvěrou a dobrými sítěmi se bude šířit ústním podáním způsobem, jakým se identická služba v oblasti s nízkou důvěrou šířit nebude.

## Matematika

```
Čtyřpilířový rámec ONS (ukazatele, ilustrativně):

Osobní vztahy:               % těch, kdo mají na koho spolehnout v krizi
Podpora sociální sítě:       % těch, kdo by si mohli půjčit peníze od přátel/rodiny, je-li třeba
Občanské zapojení:           % těch, kdo za posledních 12 měsíců dobrovolničili nebo podnikli občanskou akci
Důvěra a kooperativní normy: % těch, kdo souhlasí, že „většině lidí lze důvěřovat“

ONS nezveřejňuje žádné jediné složené skóre — pilíře se vykazují
samostatně, záměrně, protože jejich agregace do jednoho indexu by
skryla, který konkrétní pilíř je slabý.

Putnamovo rozlišení pojivý/mostní (rámec, nikoli vzorec):
  pojivý kapitál ≈ hustota vazeb uvnitř homogenní skupiny
  mostní kapitál ≈ četnost/síla vazeb napříč odlišnými skupinami
```

## Praktický příklad

**Snímek sociálního kapitálu čtvrti**: průzkum ve stylu Community Life Survey místní oblasti zjišťuje, že 78 % má na koho se spolehnout v krizi (osobní vztahy), 61 % by si mohlo půjčit peníze, je-li třeba (podpora sítě), 24 % dobrovolničilo za poslední rok (občanské zapojení) a 41 % souhlasí, že „většině lidí lze důvěřovat“ (důvěra a normy) — oproti národním průměrům zhruba 85 %, 70 %, 30 % a 45 % (ilustrativně, kalibrujte podle aktuálního bulletinu ONS). Oblast zaostává ve všech pilířích, ale nejostřeji v důvěře (41 % vs. 45 % národně, rozdíl 4 body) a občanském zapojení (24 % vs. 30 %, rozdíl 6 bodů) — což ukazuje na občanské zapojení, nikoli důvěru, jako největší relativní deficit stojící za cílenou investici (řekněme program komunitních grantů), spíše než obecnou iniciativu „budovat důvěru“.

**Pojivý versus mostní, návrh služby**: program zaměstnanosti v semknuté komunitě zjišťuje, že doporučení se uvnitř komunity šíří rychle (vysoký pojivý kapitál: zvěsti se šíří během dnů), ale program se potýká s oslovením obyvatel mimo tuto síť (nízký mostní kapitál: využití mimo jádro komunity je po měsících téměř nulové). Naznačená oprava není „více marketingu“, ale záměrné budování mostních vazeb — partnerství s organizacemi, které stojí *mimo* stávající síť, protože samotný pojivý kapitál nemůže vyřešit problém mostního kapitálu.

## Souvislost s softwarovým inženýrstvím

- Digitální platformy, které směrují vzájemnou pomoc, dobrovolnictví nebo komunitní granty (například služba „místního propojovatele“), doslova budují infrastrukturu mostního kapitálu; jejich metrikou úspěchu by měla být síťová rozmanitost vytvořených spojení, nikoli jen počet transakcí — viz [vláda jako platforma](../vláda-jako-platforma/) pro širší vzor infrastruktury, na níž ostatní budují hodnotu.
- Kde teorie změny programu výslovně cílí na sociální kapitál jako výsledek (fond odolnosti komunit, služba sociální preskripce), jeho [teorie změny](../teorie-změny/) a [logický model](../logický-model/) by měly pojmenovat konkrétní pilíř (důvěra, občanské zapojení, podpora sítě), který očekává, že pohne, spíše než nediferencovaný výsledek „budovat komunitu“, jejž nelze měřit vůči základní linii ONS.
- Ukazatele sociálního kapitálu jsou užitečnou optikou rovnosti vedle [Indexu vícenásobné deprivace](../index-vícenásobné-deprivace/): oblast může být deprivovaná na příjem, ale sociálně bohatá, nebo naopak, a obě vedou k velmi odlišným intervencím.

## Úskalí

- **Sbalení čtyř pilířů ONS do jediného složeného skóre** — ONS to záměrně nedělá; jediné číslo skrývá, který konkrétní pilíř způsobuje nízkou hodnotu, a průměrování maskuje komunitu s vysokou důvěrou, ale občansky odtažitou, oproti komunitě opačné.
- **Předpoklad, že sociální kapitál je vždy dobrý** — hustý pojivý kapitál v uzavřené skupině může aktivně odolávat vnějším institucím (včetně vládních služeb); Putnamova vlastní analýza zachází s pojivým a mostním jako s různými statky s různými, někdy konfliktními účinky.
- **Používání průzkumových měr sociálního kapitálu jako provozní metriky v reálném čase** — podkladové průzkumy (Community Life Survey, Understanding Society) probíhají ročně nebo méně často; zacházejte s daty o sociálním kapitálu jako s pomalu se měnícím kontextovým ukazatelem, ne s něčím, co může dashboard služby aktualizovat týdně.

## Zdroje

- Putnam RD. „Bowling Alone: The Collapse and Revival of American Community.“ Simon & Schuster, 2000.
- ONS. „Social capital in the UK: bulletins.“ <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. „Community Life Survey“ (každoročně).
