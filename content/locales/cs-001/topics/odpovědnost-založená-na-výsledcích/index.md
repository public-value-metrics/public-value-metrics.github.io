# Odpovědnost založená na výsledcích (OBA)

Odpovědnost založená na výsledcích (Outcomes-Based Accountability), nazývaná také Results-Based Accountability (RBA), je rámec Marka Friedmana pro oddělení dvou otázek, které výkaznictví veřejného sektoru obvykle slévá dohromady: „daří se populaci dobře?“ (odpovědnost za populaci) a „daří se dobře tomuto konkrétnímu programu?“ (odpovědnost za výkonnost). Záměna obou je podle Friedmana nejběžnějším důvodem, proč jsou dobře řízené programy obviňovány z populačních trendů, které nikdy neměly moc ovlivnit.

## Proč na tom záleží

Friedman rámec vyložil v *Trying Hard Is Not Good Enough* (2005) s argumentem, že většina veřejného výkaznictví buď topí rozhodovatele v populačních statistikách, které žádná jednotlivá agentura neovládá (míra dospívajících těhotenství, míra nezaměstnanosti, naděje dožití), nebo je topí v počtech aktivit na úrovni programu (obsloužení klienti, provedená doporučení), které nic neříkají o tom, zda se něčí život zlepšil. Přínosem RBA je malý, disciplinovaný slovník, který je udržuje od sebe: populační výsledky (podmínky blahobytu celé populace, například „děti se rodí zdravé“) nepatří žádné jednotlivé agentuře a vyžadují, aby se pohybovalo mnoho partnerů společně; míry výkonnosti (jak dobře konkrétní program slouží svým konkrétním klientům) patří jedné agentuře a měly by být posuzovány pouze vůči tomu, co tato agentura může skutečně ovlivnit. Friedmanovy „tři otázky výkonnosti“ — kolik jsme udělali, jak dobře jsme to udělali a je někdo na tom lépe? — jsou nyní zabudovány napříč zadáváním lidských služeb ve státech a okresech USA a prostřednictvím poradenské firmy a sady nástrojů Clear Impact sladěné s RBA široce používány v britském a commonwealthovém zadávání místní správy. Praktické sázky jsou smluvní: bytový program by neměl přijít o financování proto, že míra bezdomovectví ve městě vzrostla z makroekonomických příčin mimo jeho dosah, ale rozhodně by o něj měl přijít, pokud jeho vlastní klienti nejsou ubytováni.

## Matematika

```
Odpovědnost za populaci („velký obraz“ sdílený komunitou, regionem či národem):
  Výsledek     — podmínka blahobytu (např. „obyvatelé jsou ekonomicky zabezpečeni“)
  Ukazatel(e)  — míra této podmínky (např. míra nezaměstnanosti, medián příjmu domácnosti)
  → žádný jednotlivý program ukazatel nevlastní; pohyb vyžaduje mnoho přispěvatelů

Odpovědnost za výkonnost (za co odpovídá jeden program):
  Kolik jsme udělali?       — objem aktivity (obsloužení klienti, dodané jednotky)
  Jak dobře jsme to udělali? — kvalita/efektivnost (% dokončujících program, náklady na klienta)
  Je někdo na tom lépe?     — výsledek, na kterém záleží (% zaměstnaných 6 měsíců po
                               programu, před/po nebo vůči srovnávací skupině)

Program je posuzován podle třetí otázky výkonnosti, nikdy přímo podle populačního
ukazatele, pokud by jej jeho rozsah a návrh nemohly věrohodně pohnout samy.
```

## Praktický příklad

**Městem financovaný program podpory zaměstnanosti**, 500 účastníků ročně, kontrahovaný místním úřadem v rámci výkonnostního rámce ve stylu RBA:

```
Populační ukazatel (kontext, nikoli karta skóre programu):
  Městská míra nezaměstnanosti: 6,2 % (nárůst z 5,8 % předchozího roku, způsobený zavřením továrny
  mimo kontrolu programu)

Míry výkonnosti (skutečná odpovědnost programu):
  Kolik:       500 zapsaných účastníků (cíl 480) — splněno
  Jak dobře:   78% míra dokončení; náklady na dokončujícího = 340 000 £ / 390 dokončivších ≈ 872 £
  Lépe:        z 390 dokončivších 260 ve stabilním zaměstnání po 6 měsících = 66,7 %
               oproti 41 % spárované srovnávací skupiny (viz counterfactual-analysis)
```

Při čtení odpovědnosti za populaci vypadá program, že selhává — městská míra nezaměstnanosti za jeho dohledu vzrostla. Při čtení odpovědnosti za výkonnost podle RBA program uspívá: splnil cíl objemu, držel kvalitu stabilní a vyprodukoval výsledek zaměstnanosti o 25,7 procentního bodu nad spárovanou srovnávací skupinou, zatímco populační ukazatel se pohnul z důvodů (zavření továrny) zcela mimo kontrolu programu.

## Souvislost s softwarovým inženýrstvím

RBA se mapuje přímo na známé rozlišení SRE: populační ukazatele jsou jako byznysové metriky „Polárky“, které žádný jednotlivý inženýrský tým nevlastní od začátku do konce (tržby společnosti, tržní podíl), zatímco míry výkonnosti jsou jako vlastní SLO týmu — věci, které rozhodnutí návrhu tohoto týmu skutečně hýbou. Dashboard, který vykazuje obojí bez označení, které je které, vyzývá přesně k chybnému přisouzení, jemuž měla RBA zabránit: pohotovostní inženýr obviňovaný za metriku, kterou ovládá závislý tým. Při zadávání nebo budování nástrojů pro výkaznictví pro výsledkové smlouvy zabudujte triádu „kolik / jak dobře / lépe“ jako plnohodnotná, samostatně filtrovatelná pole místo jediného smíšeného KPI — je to táž disciplína jako oddělení předstihových a zpožděných ukazatelů v [KPI veřejného sektoru](../kpi-veřejného-sektoru/). RBA je také logikou odpovědnosti pod [platbou za výsledky a dluhopisy sociálního dopadu](../platba-za-výsledky-a-dluhopisy-sociálního-dopadu/): smlouva PbR může spravedlivě platit jen za míru výkonnosti „lépe“, nikdy za populační ukazatel, pokud intervence není skutečně jeho dominantním hybatelem.

## Úskalí

- **Placení nebo trestání programu vůči populačnímu ukazateli, který nemůže ovládat**: je to jediná chyba, které má RBA zabránit; vždy vysledujte, zda je program hlavním či vedlejším přispěvatelem k populačnímu výsledku, než k němu připojíte následky.
- **Vykazování „kolik“ jako „lépe“**: počty aktivit (obsloužení klienti) jsou nejsnáze sbíraná a nejméně informativní data; trvejte na tom, aby otázka „je někdo na tom lépe“ byla zodpovězena skutečnými daty o výsledcích, ideálně vůči kontrafaktuálu (viz [kontrafaktuální analýza](../kontrafaktuální-analýza/)).
- **Zacházení s ukazateli RBA jako s navždy pevnými**: Friedmanova metoda je výslovně iterativní — cyklus „data, příběh, co funguje, akční plán“ — nikoli jednorázové cvičení návrhu karty skóre.
- **Žádná srovnávací skupina pro „lépe“**: změna před/po bez kontrafaktuálu zaměňuje účinek programu s trendem, který by populace ukázala tak či tak.

## Zdroje

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, „What is Results-Based Accountability?“ <https://clearimpact.com/results-based-accountability/>
