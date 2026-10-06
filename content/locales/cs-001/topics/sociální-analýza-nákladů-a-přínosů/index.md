# Sociální analýza nákladů a přínosů (SCBA)

Sociální analýza nákladů a přínosů převádí každý náklad a přínos politiky či programu — tržní i netržní — na společnou peněžní jednotku, diskontuje budoucí toky na současnou hodnotu a vzájemně je vyrovnává, aby vznikla jediná hodnota: činí tento návrh společnost lépe situovanou, a o kolik?

## Proč na tom záleží

SCBA je výchozí kvantitativní metodou v ekonomickém případu [hodnocení podle Green Booku](../hodnocení-podle-green-booku/): pokyny ministerstva financí (HM Treasury) vyžadují, aby návrhy prokázaly kladnou čistou současnou sociální hodnotu (NPSV) všude, kde lze přínosy věrohodně peněžně vyjádřit, s použitím ochoty platit jako základního oceňovacího principu pro netržní statky (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, kapitola 5). Disciplína, kterou prosazuje, je, že „sociální“ analýza nákladů a přínosů není totéž cvičení jako hodnocení soukromé investice: musí zahrnout náklady a přínosy dopadající na třetí strany, které nejsou stranami transakce (externality), musí používat [sociální diskontní sazbu](../sociální-diskontní-sazba/) místo komerčních nákladů kapitálu a měla by aplikovat [distribuční vážení](../distribuční-vážení/), kde má libra větší význam pro chudší domácnost než pro bohatší.

SCBA selhává právě tam, kde to její kritici očekávají: statky bez tržního analogu — čistý vzduch, sociální soudržnost, hodnota zachráněného života — je nutno peněžně vyjádřit metodami [deklarovaných preferencí](../oceňování-na-základě-deklarovaných-preferencí/) či [odhalených preferencí](../oceňování-na-základě-odhalených-preferencí/), nebo musí být zkonstruována [stínová cena](../stínové-ceny/). Když je peněžní vyjádření sporné, nikoli pouze obtížné, doporučuje sám Green Book ustoupit k [analýze nákladové efektivity](../analýza-nákladové-efektivity-ve-vládě/) nebo [vícekriteriální analýze rozhodování](../vícekriteriální-analýza-rozhodování/), místo aby se vynucovalo číslo, kterému nikdo nevěří.

## Matematika

```
NPSV = Σ [t=0 až T] (Přínos_t − Náklad_t) / (1 + r)^t

kde:
  Přínos_t = všechny peněžně vyjádřené přínosy v roce t, včetně netržních
             statků oceněných deklarovanými/odhalenými preferencemi nebo stínovou cenou
  Náklad_t = všechny peněžně vyjádřené náklady v roce t, včetně nákladů
             obětované příležitosti zdrojů (viz ../opportunity-cost-in-public-spending/)
  r        = sociální diskontní sazba (HM Treasury stanoví 3,5 % klesající
             na nižší sazby po roce 30, podle přílohy A Green Booku)
  T        = hodnoticí období

Poměr přínosů a nákladů (BCR) = Σ PV(Přínosy) / Σ PV(Náklady)
```

BCR nad 1 (nebo NPSV nad nulou) značí čistou společenskou hodnotu. Kategorie hodnoty za peníze Green Booku (používané při hodnocení dopravy a infrastruktury) označují rozmezí BCR: pod 1,0 je špatná hodnota za peníze, 1,0–1,5 nízká, 1,5–2,0 střední, 2,0–4,0 vysoká a nad 4,0 velmi vysoká. Analýza citlivosti — opakování NPSV za pesimistických a optimistických předpokladů — je povinná, nikoli volitelná, protože peněžně vyjádřené netržní přínosy nesou široké pásy nejistoty.

## Praktický příklad

**Místní úřad**: město hodnotí investici 3 mil. £ do nové sítě pro cyklisty a chodce na 20leté hodnoticí období při diskontní sazbě 3,5 %.

```
Náklady: 3 mil. £ kapitál v roce 0, 50 000 £/rok údržba (roky 1–20)
PV(údržba) ≈ 50 000 £ × 14,2 (20letý anuitní faktor při 3,5 %) ≈ 710 000 £
Celkové PV(náklady) ≈ 3,71 mil. £

Přínosy (všechny peněžně vyjádřeny zveřejněnými nástroji DfT/WHO):
  Zdravotní přínos ze zvýšené fyzické aktivity: 180 000 £/rok
  Snížení absence: 40 000 £/rok
  Snížení dopravní zácpy (méně jízd autem): 60 000 £/rok
  Celkový tok přínosů: 280 000 £/rok
PV(přínosy) ≈ 280 000 £ × 14,2 ≈ 3,98 mil. £

NPSV = 3,98 mil. £ − 3,71 mil. £ = +0,27 mil. £
BCR = 3,98 / 3,71 = 1,07 → „nízká“ hodnota za peníze
```

Schéma laťku sotva překoná; běh citlivosti při o 20 % nižším odhadu zdravotního přínosu (odrážející skutečnou nejistotu v ocenění fyzické aktivity) srazí BCR pod 1,0, což je přesně důvod, proč Green Book vyžaduje zveřejnění tabulky citlivosti vedle titulkového čísla, nejen centrálního odhadu.

**Charita**: program prevence kojenecké úmrtnosti za 500 000 £ ročně se hodnotí s využitím hodnoty statistického života (VSL) — stínové, nikoli pozorované tržní ceny — zhruba 2,1 mil. £ (údaj HM Treasury aktualizovaný v roce 2023, sám odvozený ze studií deklarovaných preferencí). Odvrácení jednoho úmrtí kojence ročně vůči nákladům 500 000 £ dává BCR 4,2, pohodlně „velmi vysokou“ hodnotu za peníze — ale celý výsledek spočívá na údaji VSL, a proto musí každá SCBA používající VSL uvést jej jako předpoklad, nikoli jako fakt.

## Souvislost s softwarovým inženýrstvím

SCBA je přirozeným rámcem pro rozhodování o investicích do platforem a infrastruktury ve vládním softwaru — porovnání sdílené platformy identity s resortními bodovými řešeními například vyžaduje peněžně vyjádřit přínosy, jako jsou snížené náklady na duplicitní onboarding, snížený podvod a rychlejší čas do služby, které samy o sobě nemají tržní cenu. Inženýři budující podkladovou službu by měli očekávat, že vedoucí programu budou žádat vstupy do této analýzy: jednotkové náklady transakcí (viz [náklady na transakci](../náklady-na-transakci/)), očekávané objemy a náklady na degradaci/výpadky. Disciplína, kterou je nejdůležitější převzít: diskontujte budoucí přínosy, pojmenujte výslovně kontrafaktuální výchozí stav (viz [kontrafaktuální analýza](../kontrafaktuální-analýza/)) a nikdy nepředkládejte jediný bodový odhad bez jeho rozmezí citlivosti.

## Úskalí

- **Dvojí započtení přínosů.** Započítat jak „ušetřený čas“, tak „produktivitu získanou z tohoto času“ jako samostatné řádky přínosů nadhodnocuje případ; přínosem je ušetřený čas, jeho následné využití není dodatečným přínosem, pokud není nezávisle doloženo.
- **Vynechání vytěsněných nákladů.** Schéma, které přesune zácpu z jedné silnice na druhou nebo přesune podvod z jednoho kanálu do druhého, nevytvořilo čistý přínos, který naznačuje jeho titulkové NPSV — viz [vytěsnění a přisouzení](../vytěsnění-a-přisouzení/).
- **Použití soukromé diskontní sazby.** Aplikace komerčních nákladů kapitálu (řekněme 8–10 %) místo sociální diskontní sazby systematicky podhodnocuje dlouhodobé veřejné přínosy, jako jsou zdravotní a environmentální zisky — viz [sociální diskontní sazba](../sociální-diskontní-sazba/).
- **Peněžní vyjádření nesporného a mávnutí rukou nad sporným.** Pokud dvě třetiny přínosu návrhu tvoří sebejistě peněžně vyjádřená úspora efektivnosti a třetinu nejistě oceněný zisk blahobytu, titulkové NPSV mlčky mísí tvrdé číslo s měkkým; uvádějte je odděleně.

## Zdroje

- HM Treasury. „The Green Book: appraisal and evaluation in central government.“ 2022, kapitola 5. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. „Green Book supplementary guidance: value of a statistical life.“ 2023. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. „TAG unit A1.1: cost-benefit analysis.“ Transport Analysis Guidance. <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
