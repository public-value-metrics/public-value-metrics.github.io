# Technický dluh jako eroze veřejné hodnoty

Technický dluh je metafora Warda Cunninghama z roku 1992 pro implicitní budoucí náklady vyhovujících minulých rozhodnutí o kódu: **jistina** (nápravná práce, která je dlužná) a **úrok** (průběžné brzdění dodání, které vyvíjí). Ve starším vládním IT prostředí je tento úrok placen přímo z veřejné hodnoty — pomalejším dodáváním zákonných změn, vyšší mírou selhání služeb určených občanům a zmenšujícím se okruhem lidí, kteří se systému mohou vůbec bezpečně dotknout.

## Proč na tom záleží

Starší mainframy a systémy doby COBOLu napříč resorty britské vlády — HMRC a DWP mezi nejcitovanějšími — nesou dobře zdokumentované a narůstající riziko, na které National Audit Office opakovaně upozorňoval, včetně zprávy *Digital Transformation in Government* (<https://www.nao.org.uk/>): stárnoucí platformy, drahé na změnu, stále hůře zabezpečitelné a závislé na specializovaném personálu, který odchází do důchodu rychleji, než je nahrazován. Na rozdíl od nedodělků soukromého sektoru tento dluh stojí přímo mezi občany a jejich zákonnými nároky — motor výpočtu dávek, který nelze bezpečně měnit, je omezením realizace politiky, nikoli pouze inženýrskou nepříjemností. Restart IT programu Universal Credit v roce 2013, kdy National Audit Office zjistil, že původní vývoj nepřinese hodnotu za peníze a značnou část softwarového aktiva bylo nutno odepsat, je kanonickým příkladem neoceněného technického dluhu, který dohání živý, ministry viditelný veřejný program.

## Matematika

```
Jistina SQALE = Σ přes porušení (čas nápravy) × sazba nákladů vývojáře
Poměr technického dluhu (TDR) = náklady nápravy / náklady na přepracování × 100
                    (známky SonarQube: A ≤5 %, B ≤10 %, C ≤20 %, D ≤50 %)

Úrok (číslo, které ospravedlňuje splácení):
  úrok/rok = Δ rychlosti dodání × hodnota za jednotku rychlosti
            + Δ míry incidentů viditelných občanům × náklady na incident
            + prémie za vzácné dovednosti × počet dotčeného personálu
Případ splacení = PV(odvrácený úrok za horizont) − náklady nápravy
                  (diskontováno sociální diskontní sazbou Green Booku, viz
                  social-discount-rate.md)
```

Jistina uvádí závazek; úrok je to, co staví investiční argument před výborem pro veřejné účty.

## Praktický příklad

Motor zpracování žádostí o 250 000 řádcích napsaný ve starším 4GL. S použitím měřítka CAST Appmarq zhruba 3,61 $ jistiny technického dluhu na řádek kódu (≈2,85 £ při typickém převodu):

```
Jistina ≈ 250 000 × 2,85 £ ≈ 712 500 £
TDR ≈ 16 % (známka C)
```

Změřený úrok: resort si udržuje tři specializované dodavatele za denní sazby o 40 % vyšší než standardní sazby starších inženýrů, protože interní dovednosti zanikly — dodatečných 180 000 £ ročně na šestičlenný tým. Systém také způsobuje čtyři velké výpadky zpracování ročně, z nichž každý pozastaví rozhodování pro zhruba 5 000 žadatelů a přesměruje je do kontaktního centra za zhruba 25 £ na hovor:

```
Úrok ≈ 180 000 £ (prémie za dovednosti)
     + 4 × 5 000 × 25 £ = 500 000 £ (náklady přesměrovaných kontaktů)
     ≈ 680 000 £/rok
```

Cílená náprava nejhůře fungujících modulů stojí 1 200 000 £ a podle modelu snižuje úrok o 70 %:

```
Snížení úroku = 0,70 × 680 000 = 476 000 £/rok
Návratnost ≈ 1 200 000 / 476 000 ≈ 2,5 roku
```

Cílení záleží: náprava zřídka dotčeného kódu nekoupí nic, protože úrok se koncentruje tam, kde frekvence změn i hustota dluhu dosahují vrcholu.

## Souvislost s softwarovým inženýrstvím

Rámec veřejné hodnoty, který povyšuje případ technického dluhu nad „kód je starý“: vyjádřete starší prostředí jako inventář míst, kde je soustředěna ztracená kapacita dodání, a výslovně jej propojte s [celkovými náklady vlastnictví](../celkové-náklady-vlastnictví-ve-vládním-it/), neboť úrok je operační náklad, který patří do řádku TCO, ať o něj finanční oddělení kdy požádalo, nebo ne. Systémy zatížené dluhem také nesou neúměrnou expozici [kybernetické bezpečnosti](../hodnota-kybernetické-bezpečnosti-veřejného-sektoru/), protože kadence záplat a hustota dluhu korelují — nezáplatovatelný starší systém je technický dluh, jehož úrok se platí rizikem incidentů, nikoli librami. A každý kompromis nápravy versus funkce je sám rozhodnutím o [nákladech zpoždění](../náklady-zpoždění-ve-veřejných-programech/): splácení dluhu zdržuje další zákonnou změnu, která má vlastní CoD, jenž se musí zvážit proti ušetřenému úroku.

## Úskalí

- **Výkaznictví pouze jistiny**: velký, děsivý odhad nápravy bez čísla úroku nic neospravedlní před schvalovatelem výdajů.
- **Doslovné přijetí čísel dluhu vygenerovaných nástrojem**: skenery ve stylu SQALE počítají porušení pravidel; míjejí drahý druh dluhu — architektonická rozhodnutí a nezdokumentovaná obchodní pravidla starších systémů — a přitom označují drobnosti.
- **„Přepsání se tomu všemu vyhne“**: programy nahrazení musí projít stejnou disciplínou jako jakýkoli jiný byznys případ — kontrafaktuální náklady, pravděpodobnost úspěchu a diskontování — nikoli výjimkou z ní, jak ukázal restart Universal Credit z roku 2013.
- **Utopismus nulového dluhu**: optimální úroveň dluhu není nulová; dluh je páka, která koupila dřívější dodání. Živou otázkou je vždy sazba úroku, nikoli zda dluh vůbec existuje.

## Zdroje

- Cunningham W, „The WyCash Portfolio Management System“, zpráva OOPSLA, 1992.
- CAST, odhad technického dluhu (měřítko Appmarq). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* a zprávy o Universal Credit. <https://www.nao.org.uk/>
