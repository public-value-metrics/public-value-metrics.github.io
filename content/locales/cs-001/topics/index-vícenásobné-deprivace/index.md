# Index vícenásobné deprivace (IMD)

IMD je oficiální míra relativní deprivace pro malé oblasti v Anglii, která řadí každou z 32 844 oblastí nižší úrovně (Lower-layer Super Output Areas, LSOA, každá s přibližně 1 500 obyvateli) od 1 (nejvíce deprivovaná) do 32 844 (nejméně deprivovaná). Zveřejňuje jej dnešní Ministry of Housing, Communities and Local Government (MHCLG, dříve MHCLG/DCLG), naposledy jako English Indices of Deprivation 2019, a přímo směruje financování centrální vlády, prioritizaci veřejného zdraví a nárok na desítky místních schémat.

## Proč na tom záleží

Deprivace není jedna věc — čtvrť může být chudá na příjem, ale bezpečná, nebo mít dostatečný příjem, ale trpět špatnými zdravotními výsledky a špatným bydlením. Předchůdci IMD (sahající k ukazatelům deprivace Department of the Environment ze 70. let) se vyvinuli v dnešní model o sedmi doménách právě proto, že cílení podle jediného ukazatele (řekněme samotné míry nezaměstnanosti) rutinně míjelo oblasti deprivované jinými způsoby. IMD 2019 kombinuje příjem, zaměstnanost, vzdělání, zdraví, kriminalitu, bariéry k bydlení a službám a životní prostředí do jediného složeného pořadí na LSOA, přičemž každá doména je postavena z vlastního koše ukazatelů a vážena podle metodiky MHCLG. Protože funguje na úrovni malých oblastí (LSOA), a nikoli místní správy, odhaluje ostrůvky deprivace skryté uvnitř jinak zámožných okresů — což je důvod, proč právě IMD, a nikoli průměrný příjem místní správy, je tím, o co se skutečně opírají NHS England, pupil premium ministerstva školství a desítky vzorců financování místní správy. Software, který určuje způsobilost, prioritizuje oslovení nebo vykazuje dopad podle oblasti v Anglii, by měl decil nebo pořadí IMD považovat za plnohodnotný vstup, nikoli dodatek — a kde program záměrně cílí na nejvíce deprivované oblasti, jeho hodnocení by mělo aplikovat [distribuční vážení](../distribuční-vážení/) konzistentní s tímto cílením, místo aby oceňovalo libru přínosu stejně bez ohledu na to, kam dopadne.

## Matematika

```
7 domén, vážených:
  Příjem                                   22,5 %
  Zaměstnanost                             22,5 %
  Vzdělání, dovednosti a školení           13,5 %
  Deprivace zdraví a zdravotní postižení   13,5 %
  Kriminalita                               9,3 %
  Bariéry k bydlení a službám               9,3 %
  Životní prostředí                         9,3 %

Skóre každé domény: ukazatele jsou standardizovány (seřazeny, poté transformovány
k normálnímu rozdělení) a kombinovány exponenciální transformací,
takže vysoká deprivace u kteréhokoli jediného ukazatele nemůže být plně
vyvážena nízkou deprivací u jiných v téže doméně.

Složené skóre IMD (LSOA) = Σ (skóre domény × váha domény)
Seřazení LSOA podle složeného skóre → 1 (nejvíce deprivovaná) do 32 844 (nejméně deprivovaná)
Decily: pořadí ÷ 3 284 (přibližně), decil 1 = nejvíce deprivovaných 10 % LSOA
```

## Praktický příklad

**Složené skóre LSOA**, s ilustrativními standardizovanými skóre domén (0 = žádný signál deprivace, vyšší = více deprivovaná):

```
Příjem                  0,35 × 0,225 = 0,07875
Zaměstnanost            0,30 × 0,225 = 0,06750
Vzdělání                0,20 × 0,135 = 0,02700
Zdraví                  0,15 × 0,135 = 0,02025
Kriminalita             0,10 × 0,093 = 0,00930
Bariéry k bydlení       0,05 × 0,093 = 0,00465
Životní prostředí       0,08 × 0,093 = 0,00744

Složené skóre = 0,07875 + 0,06750 + 0,02700 + 0,02025
              + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Toto složené skóre se pak řadí vůči skóre všech 32 844 LSOA. Pokud zařadí LSOA na pořadí 2 950, spadá do decilu 1 (2 950 ÷ 3 284 ≈ 0,9, tedy do nejvíce deprivovaných 10 % čtvrtí v Anglii) — což je pro mnoho vzorců financování práh, který odemyká nárok, bez ohledu na to, jak v průměru skóruje okolní místní správa.

## Souvislost s softwarovým inženýrstvím

- Jakákoli služba, která geokóduje uživatele na PSČ nebo LSOA, může připojit zveřejněnou vyhledávací tabulku IMD (bezplatný verzovaný CSV od MHCLG) a přidat decil deprivace jako kovariátu — pro cílení oslovení, prioritizaci zátěže případů nebo vykazování výsledků podle pásem deprivace bez sběru nových osobních údajů.
- Decil IMD je standardní kontrola rovnosti pro veřejné digitální služby: křížová tabulka využití služby, odpadu nebo spokojenosti podle decilu IMD odhaluje mezery v přístupu, které souhrnná metrika skrývá — viz [digitální inkluze](../digitální-inkluze/) a [metriky spokojenosti občanů](../metriky-spokojenosti-občanů/).
- Protože je pořadí IMD relativní (vždy se sčítá na pevnou sadu pořadí napříč Anglií), nemůže ukázat, zda deprivace na národní úrovni roste nebo klesá v čase — jen které oblasti se v daném vydání řadí kde vůči sobě navzájem; nestavte dashboardy absolutních trendů jen na surovém pořadí IMD.

## Úskalí

- **Porovnávání pořadí IMD mezi vydáními (2015 versus 2019) jako časového trendu** — podkladové ukazatele, geografie a metodika se mezi vydáními všechny mění; MHCLG výslovně radí nepoužívat změny pořadí jako důkaz, že se oblast stala více či méně deprivovanou.
- **Aplikace IMD na úrovni LSOA na jednotlivce** — LSOA v decilu 1 stále obsahuje nedeprivované domácnosti a LSOA v decilu 10 stále obsahuje deprivované; IMD popisuje oblasti, nikoli lidi, a jeho použití jako zástupce individuální způsobilosti chybně klasifikuje oběma směry.
- **Ignorování detailu na úrovni domén ve prospěch složeného pořadí** — dvě LSOA se shodnými složenými skóre mohou mít zcela odlišné profily domén (jedna deprivovaná zdravím, druhá kriminalitou); schéma cílení zaměřené na jeden problém by mělo používat příslušné skóre domény, nikoli smíšené složené.

## Zdroje

- Ministry of Housing, Communities and Local Government. „English Indices of Deprivation 2019.“ <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. „The English Indices of Deprivation 2019: Technical Report.“
