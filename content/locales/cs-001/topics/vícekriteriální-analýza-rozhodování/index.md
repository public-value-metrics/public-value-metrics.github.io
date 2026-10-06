# Vícekriteriální analýza rozhodování (MCDA)

MCDA hodnotí a váží varianty podle několika odlišných, vážených kritérií najednou a vytváří seřazené srovnání, aniž by nutila každé kritérium do jediné peněžní nebo přirozené jednotkové škály. Je to hodnoticí metoda pro rozhodnutí, kde výsledky, na nichž záleží, skutečně nelze zredukovat na jediné číslo.

## Proč na tom záleží

Green Book MCDA výslovně schvaluje (jeho příloha s případovými studiemi v rámečku 2 i příloha A ji přímo probírají) pro hodnocení, kde jsou přínosy „skutečně nesouměřitelné“ — kde by převedení všeho na peníze prostřednictvím [sociální analýzy nákladů a přínosů](../sociální-analýza-nákladů-a-přínosů/) nebo na jeden výsledek prostřednictvím [analýzy nákladové efektivity](../analýza-nákladové-efektivity-ve-vládě/) rozhodnutí spíše překroutilo, než objasnilo (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Výběr místa pro nové vězení například vyvažuje kapitálové náklady proti dopadu na komunitu, dopravní dostupnosti, vlivu na životní prostředí a náboru personálu — kritéria, která nesdílejí společnou jednotku a kde by vynucení sdílené jednotky (typicky peněz) propašovalo hodnotový úsudek o relativní důležitosti například environmentálního dopadu versus nákladů, převlečený za objektivní aritmetiku.

Poctivost MCDA je zároveň její hlavní zranitelností: protože váhy přiděluje ten, kdo hodnocení provádí (nebo panel), je metoda jen tak legitimní jako proces vážení. Pokyny Green Booku jsou výslovné, že kritéria a váhy musí být dohodnuty a zveřejněny *před* bodováním variant, právě aby recenzent nemohl pracovat zpětně od preferované varianty k vahám, které ji ospravedlňují.

## Matematika

```
Pro každou variantu i a kritérium j:
  Skóre_ij  = výkon varianty vůči tomuto kritériu (často 0–100
              nebo 1–10, z důkazů, odborného úsudku nebo bodování zúčastněných stran)
  Váha_j    = relativní důležitost kritéria j, váhy se sčítají na 1 (nebo 100)

Vážené skóre varianty i = Σ_j (Skóre_ij × Váha_j)

Postup:
1. Dohodněte sadu kritérií a váhy PŘED bodováním jakékoli varianty (swing
   weighting nebo párové porovnání, např. AHP, jsou běžné metody získávání vah).
2. Ohodnoťte každou variantu vůči každému kritériu na společné škále,
   kde je to možné z důkazů.
3. Spočtěte vážené součty; seřaďte varianty.
4. Otestujte citlivost vah: přežije pořadí věrohodný nesouhlas o tom,
   kolik by měl každé kritérium znamenat?
```

MCDA nevytváří obhajitelnou absolutní hodnotu, jako čistá současná hodnota SCBA — vytváří jen pořadí podmíněné dohodnutými vahami. To je přednost, když rozhodnutí skutečně spočívá ve vyvažování nesouměřitelných statků, a nevýhoda, pokud se používá k obejití těžší práce peněžního vyjádření, kde bylo peněžní vyjádření ve skutečnosti možné.

## Praktický příklad

**Místní úřad**: město vybírající lokalitu pro nové recyklační centrum domácího odpadu bodovalo tři místa podle čtyř kritérií, vážených mezirezortním panelem před jakoukoli návštěvou míst:

```
Kritéria (váha):          Kapitálové náklady (30 %)  Dopravní dostupnost (25 %)
                           Dopad na komunitu (25 %)  Dopad na životní prostředí (20 %)

Skóre míst (0–100, vyšší = lepší):
Místo A: náklady 80, dostupnost 60, komunita 40, prostředí 70
Místo B: náklady 60, dostupnost 90, komunita 70, prostředí 50
Místo C: náklady 90, dostupnost 50, komunita 80, prostředí 60

Vážené součty:
Místo A = 80(,30) + 60(,25) + 40(,25) + 70(,20) = 24+15+10+14 = 63
Místo B = 60(,30) + 90(,25) + 70(,25) + 50(,20) = 18+22,5+17,5+10 = 68
Místo C = 90(,30) + 50(,25) + 80(,25) + 60(,20) = 27+12,5+20+12 = 71,5
```

Místo C je řazeno nejvýše. Běh citlivosti, který posune váhu dopadu na komunitu z 25 % na 35 % (a odebere 10 bodů z kapitálových nákladů), změní součet místa C na 71,5 − 3 + 8 = 76,5 a místa B na 68 − 6 + 7 = 69 — místo C stále vede, takže pořadí je odolné vůči tomuto věrohodnému nesouhlasu o vahách, což je přesně kontrola, kterou Green Book očekává ve zprávě.

**Charita**: grantová nadace vybírající mezi financováním poradny pro dluhy, sítě potravinových bank a programu finanční gramotnosti používá MCDA místo SROI (viz [sociální návratnost investice](../sociální-návratnost-investice/)) právě proto, že se správci v dobré víře neshodnou, zda má mít větší váhu krizová pomoc, nebo prevence — MCDA jim umožňuje dohodnout *tvar* nesouhlasu (rozmezí vah), místo aby předstírali, že jediný poměr SROI věc rozhodne.

## Souvislost s softwarovým inženýrstvím

MCDA je přirozený nástroj pro výběr dodavatele a architektury, když kritéria skutečně kolidují — volba mezi cloudově hostovaným a lokálním systémem pro správu případů vyvažuje náklady, riziko datové suverenity, přístupnost a rychlost dodání způsoby, které se na jediné číslo nezredukují. Inženýrští vedoucí by měli trvat na tom, aby vážení proběhlo před bodováním variant, přesně jak to vyžaduje Green Book, protože cvičení vážení provedené po spatření užšího seznamu spolehlivě sklouzne ke kterékoli variantě, kterou už místnost preferovala. Viz [stavět, nebo koupit ve vládě](../stavět-nebo-koupit-ve-vládě/) pro běžné použití MCDA a [kartu skóre veřejné hodnoty](../karta-skóre-veřejné-hodnoty/) pro související nástroj strukturovaného bodování používaný po rozhodnutí, nikoli před ním.

## Úskalí

- **Stanovení vah po spatření variant.** Je to nejběžnější způsob, jak se MCDA zneužívá, záměrně či ne; zveřejněte váhy před bodováním a zaznamenejte, kdo je stanovil.
- **Zacházení s váženým součtem jako s tvrdým číslem.** Skóre 71,5 versus 68 není statisticky smysluplný rozdíl, pokud analýza citlivosti nepotvrdí, že je pořadí stabilní; uvádějte rozmezí, ne falešnou přesnost.
- **Používání MCDA k vyhnutí se peněžnímu vyjádření, které bylo ve skutečnosti proveditelné.** Pokud lze většinu kritérií věrohodně ocenit, přechod na MCDA místo [SCBA](../sociální-analýza-nákladů-a-přínosů/) zahazuje informace, které mohlo hodnocení využít.
- **Nechat jediného dominantního zúčastněného stanovit všechny váhy samostatně.** Dobrá praxe Green Booku očekává, že váhy se získávají od reprezentativního panelu, nikoli od zadávajícího ředitele, aby hodnocení pouze znovu neodvodilo to, co tato osoba již chtěla.

## Zdroje

- HM Treasury. „The Green Book: appraisal and evaluation in central government.“ 2022, příloha A (vícekriteriální analýza rozhodování) a případové studie v rámečku 2. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. „Multi-criteria analysis: a manual.“ 2009. <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. „Multiple Criteria Decision Analysis: An Integrated Approach.“ Kluwer, 2002.
