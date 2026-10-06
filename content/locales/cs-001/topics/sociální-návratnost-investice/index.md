# Sociální návratnost investice (SROI)

Sociální návratnost investice je rámec pro měření, peněžní vyjádření a účtování širokého pojetí hodnoty — sociální, environmentální a ekonomické — a její vyjádření jako poměru vůči vloženým zdrojům, například „1,44 £ sociální hodnoty na každou investovanou 1 £“. Byl navržen k rozšíření logiky finančního účetnictví na výsledky, které trhy neoceňují, aniž by se ztratila disciplína účetnictví: každé číslo v SROI musí být vysledovatelné k výsledku definovanému zúčastněnými stranami, k základně důkazů a k výslovné úpravě o to, co by se stalo tak či tak.

## Proč na tom záleží

SROI udržují Social Value UK a Social Value International, nástupnické orgány SROI Network, jejichž „A Guide to Social Return on Investment“ (2012) zůstává referenční metodikou. Rámec stojí na sedmi principech — zapojte zúčastněné strany, pochopte, co se mění, oceňte věci, na nichž záleží, zahrňte jen to, co je podstatné, nepřeceňujte, buďte transparentní a ověřte výsledek — a právě na pátém principu, „nepřeceňujte“, selhává většina zpráv SROI v praxi. Poměr získaný přeskočením úprav o mrtvou váhu a přisouzení není SROI; je to marketingové číslo v kostýmu SROI. Softwaroví inženýři budující nástroje pro výkaznictví pro charity, sociální podniky či zadavatele musí znát rozdíl, protože nástroj buď disciplínu vynutí, nebo usnadní její obcházení.

## Matematika

SROI závisí na [teorii změny](../teorie-změny/) k určení, které výsledky jsou v rozsahu, a vyjadřuje je týmž řetězcem odpovědnosti jako [logický model](../logický-model/):

```
Poměr SROI = Současná hodnota výsledků / Hodnota vstupů

Postup:
 1. Stanovte rozsah a určete zúčastněné strany, jejichž výsledky se budou měřit
 2. Zmapujte výsledky (teorie změny doložená se zúčastněnými stranami, nikoli předpokládaná)
 3. Doložte výsledky a oceňte je pomocí finančních zástupných ukazatelů
 4. Stanovte dopad: hrubá hodnota − mrtvá váha − přisouzení − vytěsnění, poté aplikujte pokles
 5. Spočtěte SROI: čistá současná hodnota dopadu ÷ hodnota vstupů
 6. Vykazujte, používejte a zakotvěte — poměr je komunikační nástroj, nikoli cíl
```

Mrtvá váha, přisouzení a vytěsnění jsou popsány v [dodatečnosti a mrtvé váze](../dodatečnost-a-mrtvá-váha/) a [vytěsnění a přisouzení](../vytěsnění-a-přisouzení/); všechny tři existují k izolování skutečného [kontrafaktuálního](../kontrafaktuální-analýza/) dopadu od hrubého výsledku.

## Praktický příklad

**Zaměstnanecký program místního úřadu**: roční vstupní náklady 250 000 £. Šedesát účastníků přejde do trvalého zaměstnání; finanční zástupný ukazatel pro tento výsledek (zvýšení blahobytu, snížená závislost na dávkách a daňové příjmy dohromady) činí 8 500 £ na osobu za první rok — viz [databáze jednotkových nákladů](../databáze-jednotkových-nákladů/), odkud takové zástupné ukazatele pocházejí.

- Hrubá hodnota výsledku: 60 × 8 500 £ = 510 000 £
- Minus mrtvá váha (40 % by pravděpodobně našlo práci i bez programu): 510 000 £ × 0,60 = 306 000 £
- Minus přisouzení (30 % zbývající změny je způsobeno podporou jiných agentur): 306 000 £ × 0,70 = 214 200 £
- Výsledek 2. roku při 30% poklesu: 214 200 £ × 0,70 = 149 940 £, diskontováno 3,5 %/rok (viz [sociální diskontní sazba](../sociální-diskontní-sazba/)): 149 940 £ ÷ 1,035 = 144 870 £
- Celková současná hodnota dopadu: 214 200 £ + 144 870 £ = 359 070 £
- **Poměr SROI: 359 070 £ ÷ 250 000 £ = 1,44**, uváděno jako „1,44 £ sociální hodnoty na každou investovanou 1 £“

**Charita**: služba přátelství za 60 000 £ snižuje osamělost 80 starších osob, oceněnou zástupným ukazatelem 1 100 £/osobu/rok. Hrubá hodnota 88 000 £; po 35% mrtvé váze a 15% přisouzení je čistý dopad 88 000 £ × 0,65 × 0,85 = 48 620 £, poměr SROI 0,81 — pod bodem zvratu, což je legitimní a užitečné zjištění, nikoli selhání při psaní zprávy.

## Souvislost s softwarovým inženýrstvím

Kalkulačka SROI, která uživateli umožňuje zadat počty výsledků a hodnoty zástupných ukazatelů, ale nemá povinné pole pro mrtvou váhu, přisouzení ani propojenou teorii změny, bude ve výchozím stavu vytvářet nafouknuté poměry, protože vynechání úprav je cestou nejmenšího odporu. Zabudujte disciplínu do schématu: každý řádek výsledku by měl odkazovat na skupinu zúčastněných stran, doložené množství, finanční zástupný ukazatel s uvedeným zdrojem a nepovinná pole mrtvé váhy/přisouzení by neměla existovat. Viz [výsledky versus výstupy](../výsledky-versus-výstupy/) pro rozlišení, na němž mapování výsledků SROI závisí, a [logický model](../logický-model/) pro řetězec, který by měl nástroj zrcadlit ve svém datovém modelu.

## Úskalí

- **Přeskočení mrtvé váhy a přisouzení.** Titulkový poměr bez těchto úprav je hrubý údaj, nikoli údaj o čistém dopadu, a principy Social Value UK výslovně vyžadují obojí.
- **Porovnávání poměrů mezi organizacemi.** Poměr SROI závisí na rozsahu a volbách zástupných ukazatelů provedených případ od případu; pokládat poměr 4:1 z jedné zprávy za „lepší“ než 2:1 z jiné ignoruje, že předpoklady nejsou standardizovány jako finanční účetní poměr.
- **Dvojí započtení překrývajících se zástupných ukazatelů.** Naskládání zástupného ukazatele „snížená osamělost“ na „zlepšený duševní blahobyt“ pro tytéž příjemce může dvakrát ocenit jednu podkladovou změnu.
- **Přeskočení zapojení zúčastněných stran.** První princip vyžaduje, aby výsledky byly definovány s lidmi, kteří je prožívají, nikoli předpokládány analytikem budujícím model.

## Zdroje

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, „A Guide to Social Return on Investment“ (2012).
- Social Value International, „The Principles of Social Value.“ <https://www.socialvalueint.org/principles>
