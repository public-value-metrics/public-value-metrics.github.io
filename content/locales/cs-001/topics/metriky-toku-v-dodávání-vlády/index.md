# Metriky toku v dodávání vlády

Metriky toku — Littleův zákon, limity rozpracované práce (WIP) a efektivita toku — popisují, jak rychle se práce pohybuje systémem s omezenou kapacitou. Sprintová tabule je jedním takovým systémem; fronta žádostí o dávky, rejstřík stavebních žádostí nebo nedodělky vízových případů jsou přesně stejná matematika v jiné uniformě.

## Proč na tom záleží

Vládní agendy případů jsou systémy front a systémy front se řídí zákony front, ať je někdo měří, nebo ne. Zákonné lhůty pro rozhodnutí to činí výslovným: podle režimu Town and Country Planning má většina drobných stavebních žádostí zákonnou cílovou lhůtu rozhodnutí 8 týdnů a velké žádosti 13 týdnů — závazek doby cyklu zapsaný přímo v zákoně. Nedodělky případů azylu na Home Office, opakovaně zkoumané National Audit Office a Home Affairs Select Committee, jsou dobře zdokumentovaným případem veřejného systému, kde rozpracovaná práce rostla rychleji než propustnost po delší dobu, což tlačilo doby cyklu daleko za jakákoli zákonná či servisní očekávání. Metriky toku dávají inženýrům i vedoucím práce s případy sdílený, kvantitativní slovník právě pro tento způsob selhání, místo aby ho ponechaly jako kvalitativní „problém nedodělků“.

## Matematika

```
Littleův zákon:  WIP = Propustnost × Doba cyklu
             →   Doba cyklu = WIP / Propustnost

Efektivita toku = aktivní (dotykový) čas / celková doba cyklu   (Vacanti)

Efekt limitu WIP: při pevné propustnosti zmenšení WIP na polovinu zhruba
zkrátí průměrnou dobu cyklu na polovinu (Littleův zákon v přeuspořádaném
tvaru) — páka dostupná bez přidávání personálu.
```

Viz [metriky DORA pro veřejnou hodnotu](../metriky-dora-pro-veřejnou-hodnotu/) pro ekvivalentní matematiku aplikovanou na softwarová potrubí nasazení místo práce s případy.

## Praktický příklad

**Stavební odbor místního úřadu**: 400 žádostí otevřených v kterémkoli okamžiku (WIP), tým vyřeší 50 žádostí týdně (propustnost).

```
Doba cyklu = WIP / Propustnost = 400 / 50 = 8 týdnů
```

To přistane přesně na zákonné cílové lhůtě 8 týdnů pro drobné žádosti — bez rezervy, což znamená, že jakákoli proměnlivost příchozí poptávky nebo doby odpovědi konzultovaných stran tlačí rozhodnutí za zákonný termín.

**Efektivita toku**: z těchto 8 týdnů (56 kalendářních dní) má žádost typicky kolem 6 hodin skutečného času zpracování pracovníkem.

```
Efektivita toku = 6 hodin / (56 dní × 8 pracovních hodin/den)
                = 6 / 448 ≈ 1,3 %
```

Měřítko Vacantiho pro softwarové týmy udává typickou efektivitu toku 15–20 %; vládní práce s případy, s mnoha zákonnými předáními konzultovaným stranám a okny veřejných konzultací, často běží o řád níže. Těch 98,7 % času „čekání“ je místem, kam osm týdnů skutečně odchází — nikoli v kapacitě pracovníků.

**Zásah limitu WIP**: omezení otevřených žádostí na pracovníka na 15 místo neomezených 25 (při zachování propustnosti) posune WIP ze 400 na zhruba 240 napříč 16členným týmem:

```
Nová doba cyklu = 240 / 50 = 4,8 týdne
```

Téměř poloviční doba cyklu ze změny politiky, nikoli zvýšení personálu — táž páka, kterou táhnou dodávací týmy ve stylu DORA, když omezují WIP sprintu.

## Souvislost s softwarovým inženýrstvím

Metriky toku jsou sdíleným jazykem mezi kanbanovou tabulí dodávacího týmu a kancelářskou podlahou práce s případy, pro kterou staví software: fronta pracovníka a fronta pull requestů se obě řídí Littleovým zákonem a obě překračují cíle doby cyklu stejným způsobem — příliš mnoho WIP vůči propustnosti. To přímo záleží pro [náklady zpoždění ve veřejných programech](../náklady-zpoždění-ve-veřejných-programech/): doba cyklu × CoD jsou libry stojící ve frontě v kterémkoli okamžiku, a pro [standardy služeb a metriky transakcí](../standardy-služeb-a-metriky-transakcí/), kde je zveřejněný cíl doby vyřízení závazkem doby cyklu, který při nesplnění mohou diagnostikovat jen metriky toku. Software systému práce s případy by měl vystavit WIP a dobu cyklu jako plnohodnotné provozní metriky, a nikoli je pohřbít uvnitř systému správy případů, který nikdo nedotazuje.

## Úskalí

- **Přidávání limitů WIP bez opravy skutečného úzkého hrdla**: pokud je omezením doba odpovědi externí zákonné konzultované strany, omezení WIP pracovníků jen posune frontu proti proudu, nezkrátí ji.
- **Zacházení s efektivitou toku jako s cílem k manipulaci**: spěchání 1,3 % aktivního času sotva pohne dobou cyklu; páka je téměř vždy ve stavech čekání, což obvykle znamená přepracování procesu, nikoli rychlost pracovníků.
- **Ignorování variability**: Littleův zákon popisuje průměry; agenda s vysokou rozptylovostí poptávky potřebuje rezervní kapacitu, nejen přísnější limit WIP, jinak se zákonné lhůty budou stále míjet na nestálém chvostu, i když se průměr zlepší.
- **Nekonzistentní měření WIP**: případ „otevřený“ v systému záznamu, ale ve skutečnosti zastavený v očekávání třetí strany, je stále WIP; jeho vyloučení lichotí číslům, aniž by změnilo realitu viditelnou občanům.

## Zdroje

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, zákonné lhůty stavebních žádostí. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, zprávy o případech azylu a ubytování Home Office. <https://www.nao.org.uk/>
