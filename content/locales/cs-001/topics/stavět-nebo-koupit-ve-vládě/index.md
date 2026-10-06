# Stavět, nebo koupit ve vládě

„Stavět, nebo koupit“ je strukturované, rizikově upravené srovnání zakázkového vývoje s komerčním nebo komoditním pořízením, porovnávané podle diskontovaných [celkových nákladů vlastnictví](../celkové-náklady-vlastnictví-ve-vládním-it/), času do hodnoty a rizika. Vláda je strukturálně nakupujícím sektorem — Technology Code of Practice stanoví presumpci ve prospěch komoditních a cloudových řešení — přesto inženýrské týmy uvnitř resortů stále ve výchozím stavu staví, ze stejných důvodů, jako stavitelé všude.

## Proč na tom záleží

Technology Code of Practice od Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>) a doprovodný pokyn Service Manual k rozhodování, zda stavět nebo koupit, tlačí resorty k odůvodnění zakázkového vývoje vůči presumpci, že komoditní schopnosti se mají kupovat, nikoli stavět, a že zakázkový kód ospravedlňují jen skutečně nové schopnosti odlišující poslání. Doplňující pokyn Green Booku ministerstva financí (HM Treasury) k zkreslení optimismem, odvozený z přezkumu velkých veřejných zakázek Mott MacDonald z roku 2002, dává IT projektům nejširší rozsah navýšení ze všech hodnocených kategorií — odhady kapitálových nákladů doporučené k navýšení o 10 % v dolním konci a až o 200 % v horním konci, než se použijí v hodnocení, což odráží, jak špatně byly softwarové vývoje historicky podhodnocovány napříč veřejnými zakázkami. Analýza „stavět, nebo koupit“ existuje právě proto, aby vynutila toto rizikové přizpůsobení na stůl před schválením, místo aby se objevilo jako žádost o pokrytí překročení v průběhu roku.

## Matematika

```
Porovnávejte na stejném 3–5letém horizontu, diskontovaném sociální diskontní
sazbou Green Booku (viz social-discount-rate.md):

NPV_varianty = PV(přínosy, posunuté o čas do hodnoty) − PV(TCO)

Rizikové úpravy (vzor zkreslení optimismem podle Green Booku):
  náklady na vývoj × 1,1–3,0         (rozsah navýšení pro IT projekty, Mott MacDonald)
  čas do hodnoty při vývoji + 40–60 %  (apriorní zpoždění nasazení)
  koupě: přidejte kontrolu reality integrace a náklady ukončení smlouvy

Rozhodovací faktory, v pořadí, v jakém obvykle rozhodují:
  1. odlišení — je tato schopnost posláním, nebo instalatérstvím?
  2. čas do hodnoty × náklady zpoždění (viz cost-of-delay-in-public-programmes.md)
  3. rizikově upravené celkové náklady vlastnictví
```

## Praktický příklad

Místní úřad potřebuje systém pro správu případů sociální péče o dospělé. Koupě: SaaS za 180 000 £/rok, spuštění za 4 měsíce. Vývoj: odhad 900 000 £ plus 150 000 £/rok údržby, spuštění za 14 měsíců.

```
Rizikově upravené náklady na vývoj = 900 000 × 1,4 = 1 260 000 £
5letý TCO:
  koupě   = 180 000 × 5 = 900 000 £
  vývoj   = 1 260 000 + 150 000 × 5 = 2 010 000 £

Člen zpoždění: systém ušetří 40 000 £/měsíc duplicitních posouzení;
vývoj přichází o 10 měsíců později než koupě.
CoD = 10 × 40 000 = 400 000 £

Efektivní srovnání: 900 000 £ (koupě) versus 2 010 000 £ + 400 000 £ = 2 410 000 £ (vývoj)
```

Koupě vyhrává zhruba o 1,5 milionu £ za pět let a největší jednotlivou položkou po samotném odhadu vývoje jsou náklady zpoždění, které by čisté srovnání kapvýdajů nikdy neodhalilo.

## Souvislost s softwarovým inženýrstvím

Disciplíny, které se z této analýzy přenášejí přímo do praxe dodání: **apriorní rizikové přizpůsobení** — navýšení Mott MacDonald je softwarovým ekvivalentem zkreslení optimismem Green Booku aplikovaným mechanicky, takže týmy by měly obhajovat výjimky z něj, spíše než předpokládat, že jejich odhad je výjimkou; **poctivost komparátoru** — alternativou ke stavbě je nejlepší dostupná varianta koupě, nikoli „nic“, což se přímo pojí s [náklady obětované příležitosti ve veřejných výdajích](../náklady-obětované-příležitosti-ve-veřejných-výdajích/); a **poctivé srovnání TCO** — každý návrh stavby by měl být porovnán s úplnými [celkovými náklady vlastnictví](../celkové-náklady-vlastnictví-ve-vládním-it/) varianty koupě, nikoli s její ceníkovou cenou. Kde stavba skutečně vyhrává, [náklady zpoždění](../náklady-zpoždění-ve-veřejných-programech/) dodatečného času stavby by měly být v byznys případu výslovně oceněny, a nikoli ponechány jako nevyslovený předpoklad, že čas nezáleží.

## Úskalí

- **Porovnávání ceníkové ceny dodavatele s nekorigovaným odhadem vývoje**: dvojnásobně to lichotí vývoji, jednou v nákladech a jednou v harmonogramu.
- **Nulové ocenění interní práce**: inženýrský čas státní služby je považován za „zdarma“, protože už je v rozpočtu početního stavu resortu, což skrývá jeho skutečné náklady obětované příležitosti vůči jiné práci, kterou by tento tým mohl dělat.
- **Neoceněná závislost v obou směrech**: odchod od dodavatele a náklady přenositelnosti dat jsou skutečné, ale skutečný je i „autobusový faktor“ zakázkového vývoje a jeho závislost na udržení malého, těžko nahraditelného interního týmu po celou dobu životnosti.
- **Odlišení poslání tvrzené pro instalatérství**: „toto je pro nás klíčové“ tvrzené o integračním middlewaru nebo úložišti dokumentů — ověřte, zda by si občan nebo pracovník někdy všiml, který z nich běží pod povrchem.

## Zdroje

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, rozhodování o vývoji nebo koupi technologie. <https://www.gov.uk/service-manual>
- HM Treasury, doplňující pokyn Green Booku ke zkreslení optimismem. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
