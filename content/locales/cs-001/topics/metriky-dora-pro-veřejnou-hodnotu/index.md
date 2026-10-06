# Metriky DORA pro veřejnou hodnotu

Metriky DORA (DevOps Research and Assessment) — frekvence nasazení, doba průběhu změn, míra selhání změn a doba obnovy služby, plus spolehlivost jako pátá — jsou nejvalidovanějšími měřítky výkonnosti dodání v softwarovém průmyslu. Převedeny do termínů odpovědnosti veřejného sektoru je každá z nich přímým zástupcem toho, jak rychle a jak bezpečně se veřejná hodnota dostává k občanovi.

## Proč na tom záleží

Desetiletí výzkumu DORA, zveřejňovaného každoročně jako *Accelerate State of DevOps Report* (metodika Forsgrenové, Humblea a Kima, nyní provozovaná Google Cloud), shlukuje týmy na elitní, vysoce, středně a nízce výkonné. Elitní týmy nasazují na vyžádání, potřebují méně než den od commitu do produkce, selhává jim zhruba 5 % změn a obnovují se za méně než hodinu; nízko výkonné nasazují měsíčně či méně často, potřebují měsíce, selhává jim kolem 40 % změn a obnovují se týdny. Ve vládě to nejsou inženýrské metriky marnosti: Service Standard Government Digital Service vyžaduje, aby týmy „často iterovaly a zlepšovaly“ a uměly rychle reagovat na potřeby uživatelů, a resorty, které nemohou nasazovat bezpečně a často, jsou strukturálně neschopné tomuto standardu vyhovět, ať říkají jejich výzkumy uživatelů cokoli. Vlastní práce Cabinet Office na digitální efektivitě zjistila, že odsunutí občana z neúspěšné nebo pomalé digitální transakce do telefonního či papírového kanálu je drahé — zpráva GDS o digitální efektivitě z roku 2012 odhadla, že některé digitální transakce stojí jen 20 pencí oproti telefonním nebo osobním kontaktům až za 8,62 £ — takže selhání změny ve službě zaměřené na veřejnost nestojí jen inženýrský čas, ale přesouvá skutečné libry na rozpočet kontaktního centra (viz [úspory z přesunu kanálů](../úspory-z-přesunu-kanálů/)).

## Matematika

```
Frekvence nasazení    = produkční nasazení / čas
Doba průběhu změn     = t(nasazení) − t(commit), medián
Míra selhání změn     = neúspěšné změny / všechny změny × 100
Doba obnovy (MTTR)    = t(obnoveno) − t(selhání), medián
Spolehlivost          = dosažení SLO (dostupnost, latence, správnost)
```

Překlady do veřejné hodnoty:

```
Doba průběhu   → týdny v potrubí × CoD, viz cost-of-delay-in-public-programmes
Míra selhání   → míra incidentů viditelných občanům: CFR × náklady na přesměrovaný
                 hovor do kontaktního centra (nebo na neúspěšnou zákonnou transakci)
Doba obnovy    → škoda z výpadku služby: MTTR × (žádosti/podání blokované za
                 hodinu) × navazující náklady nebo ztráta blahobytu na jednotku
Spolehlivost   → sleva přínosu: služba s dostupností 99 % dodává
                 ≈ 0,99 svého modelovaného přínosu — dodávací analog
                 nedostatečného využití nebo souladu
```

## Praktický příklad

Tým portálu žádostí o dávky místního úřadu před investicí do dodávacího inženýrství a po ní:

```
                    Před        Po
Nasazení            měsíčně     týdně
Doba průběhu        8 týdnů     5 dní
CFR                 30 %        10 %
MTTR                3 dny       4 hodiny
```

Tým dodává zhruba 25 zlepšení ročně, průměrná hodnota 8 000 £/týden ([náklady zpoždění](../náklady-zpoždění-ve-veřejných-programech/)). Zkrácení doby průběhu zhruba o 7,3 týdne přibližuje tok přínosů každého zlepšení: 25 × 7,3 × 8 000 ≈ **1 460 000 £/rok** hodnoty dodané dříve. K míře selhání: 25 × (0,30 − 0,10) = 5 méně neúspěšných změn ročně; každá neúspěšná změna na veřejném portálu typicky přesměruje odhadem 2 000 občanů do telefonního kanálu za 8,62 £ oproti 20 p, čistý náklad zhruba 8,42 £ × 2 000 ≈ 16 840 £ na incident, takže odvrácení 5 incidentů ušetří ≈ **84 200 £/rok**. Investice do dodávacího inženýrství je oceněna ve stejné měně jako jakýkoli jiný případ veřejné hodnoty.

## Praktický příklad, pokračování: spolehlivost

Pokud portál běží s dostupností 97 % místo cílových 99,5 % a každý procentní bod výpadku je modelován jako 2 % žádostí ztracených opuštěním, služba dodává zhruba 0,975 svého modelovaného přínosu 2 mil. £/rok — sleva přínosu 50 000 £/rok, kterou čistý dashboard doby běhu nikdy neodhalí.

## Souvislost s softwarovým inženýrstvím

Metriky DORA jsou provozní metriky veřejné služby v jiném oblečení: doba průběhu se mapuje na [standardy služeb a metriky transakcí](../standardy-služeb-a-metriky-transakcí/); míra selhání změn na míry přepracování a stížností; MTTR na to, jak dlouho je zákonná služba nedostupná žadatelům. Zlepšovací techniky se přenášejí oběma směry, protože obojí jsou systémy front pod omezeními odpovědnosti — viz [metriky toku v dodávání vlády](../metriky-toku-v-dodávání-vlády/) pro podkladovou matematiku front. Všimněte si také zjištění DORA z roku 2025, že přijetí AI koreluje s vyšší propustností, ale *horší* stabilitou — intervence s účinností i vedlejšími účinky, přesně ten druh analýzy čistého přínosu, kterou rozebírá téma [produktivity AI](../produktivita-ai-ve-veřejném-sektoru/) této kapitoly.

## Úskalí

- **Manipulace s metrikami**: nafukování počtu nasazení prázdnými vydáními nebo vylučování nouzových oprav z počtu selhání změn. Definujte události stejně přesně, jako zákonný standard služby definuje „úspěšnou transakci“.
- **Meziresortní žebříčky**: shluky DORA srovnávají praxi dodání, nikoli služby s různými rizikovými profily; systém platby daní hodnocený jako „vysoký“ může být správným postojem tam, kde by „elitní“ bylo vzhledem k požadavkům na záruky nezodpovědné.
- **Optimalizace jediné metriky**: rychlost bez míry selhání změn je klasický kompromis propustnost–nestabilita — vykazujte všechny čtyři společně, nikoli jako jediné skóre.

## Zdroje

- Výzkum DORA a každoroční *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, zpráva 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
