# Vytěsnění a přisouzení

K vytěsnění (displacement) dochází, když se zdánlivého přínosu programu dosáhne tím, že se aktivita nebo přínos odeberou odjinud, místo aby se vytvořilo něco nového — váš zisk je něčí ztráta. Přisouzení (attribution) je související otázka, kolik z pozorovaného výsledku si vaše intervence může skutečně připsat, když přispěli i jiní aktéři a faktory. Obojí jsou standardní úpravy v britských evaluačních pokynech pro veřejný sektor, vedle mrtvé váhy a úniku, a obojí jsou rutinně přeskakovány tvrzeními o dopadu, která vypadají mnohem silněji, než jsou.

## Proč na tom záleží

Grantové schéma místního úřadu pro podniky, které pomůže 50 obchodům přestěhovat se do regenerační zóny, může uvádět „50 podpořených firem, 200 vytvořených pracovních míst“ — ale pokud se tyto firmy jednoduše přestěhovaly ze sousední hlavní ulice místo rozšíření, byla pracovní místa vytěsněna, nikoli vytvořena, a čistý efekt v celé čtvrti (nebo regionu) může být blízko nule. Magenta Book ministerstva financí (HM Treasury) a dlouholetý Additionality Guide považují vytěsnění za povinný odpočet právě proto, že místní příběhy úspěchu jsou běžné i tehdy, když nevytvářejí žádný čistý národní či regionální přínos — hodnota se pouze přesunula, často v neprospěch oblasti či aktérů, kteří ji ztratili. Evaluační pokyny pro strukturální fondy (používané pro bývalé programy Evropského fondu pro regionální rozvoj a jejich domácí nástupce, jako je UK Shared Prosperity Fund) to formalizují na třech prostorových úrovních: místní vytěsnění (v rámci města), regionální vytěsnění (v rámci regionu) a národní vytěsnění (napříč Spojeným královstvím), protože intervence může být dodatečná na jedné úrovni a přitom čistým vytěsněním na širší — program zaměstnanosti, který přitahuje pracovníky ze sousedního města, je národně neutrální, i když vypadá jako místní úspěch.

Přisouzení je sourozenecký problém v dodávce silně založené na partnerstvích, což je nyní norma v práci sociálního sektoru a mezirezortních veřejných služeb. Když tři organizace společně poskytují službu prevence bezdomovectví, může zpráva každé organizace nezávisle tvrdit zásluhu za tentýž pokles spaní na ulici — sečteno napříč zprávami může tvrzený dopad přesáhnout pozorovanou změnu v reálném světě, někdy několikanásobně. Pokyny Magenta Booku k analýze příspěvku (contribution analysis) existují právě proto, že randomizované přisouzení jedinému aktérovi je v mezirezortní dodávce často nemožné a poctivou odpovědí je často „přispěli jsme k tomuto výsledku“ spíše než „způsobili jsme tento výsledek“.

## Matematika

Vytěsnění jako součást standardní posloupnosti čistého dopadu (úplný řetězec viz [dodatečnost a mrtvá váha](../dodatečnost-a-mrtvá-váha/)):

```
Čistý dodatečný dopad = Hrubý výsledek − Mrtvá váha − Vytěsnění − Únik, × Multiplikátor

Míra vytěsnění = přínos/aktivita odkloněná odjinud
                  / celkový pozorovaný hrubý přínos/aktivita
```

Přisouzení, kde k jednomu výsledku přispívá více aktérů, se obvykle vyjadřuje jako podíl příspěvku, nikoli přesné procento, protože ho zpravidla nelze měřit se stejnou přísností jako vytěsnění:

```
Přisouditelný podíl ≈ f(síla kauzálního příspěvku, příspěvky ostatních aktérů,
                         vnější/kontextové faktory)

Tvrzený dopad nikdy nesmí přesáhnout:
  Σ (přisouditelný podíl každého partnera) ≤ 100 % celkového pozorovaného výsledku
```

## Praktický příklad

**Regenerační grant**: grantové schéma hlavní ulice městského úřadu hlásí 200 nových maloobchodních pracovních míst ve financované zóně. Následný průzkum zjistí, že 60 z těchto míst pochází od firem přestěhovaných ze sousední nefinancované hlavní ulice téže čtvrti a dalších 30 od národních řetězců, které by otevřely pobočky někde v regionu bez ohledu na grant.

```
Tvrzená hrubá pracovní místa = 200
Místní vytěsnění = 60 (přesun v rámci čtvrti)
Regionální vytěsnění = 30 (regionálně by se otevřela tak či tak)

Čistá dodatečná místa (úroveň čtvrti) = 200 − 60 = 140
Čistá dodatečná místa (regionální úroveň) = 200 − 60 − 30 = 110
```

Poctivé titulkové číslo závisí na geografické úrovni, na níž poskytovateli záleží — byznys případ Treasury hodnocený na národní či regionální úrovni by měl použít 110, nikoli 140 na úrovni čtvrti a už vůbec ne surových 200.

**Mezirezortní služba pro bezdomovce**: tři partnerské organizace (úřad, charita bydlení a zdravotnický trust) společně poskytují službu snižování spaní na ulici. Počet lidí spících na ulici v oblasti za rok klesl o 30. Zpráva každé organizace tvrdí „snížili jsme spaní na ulici o 30“ — sečteno tři zprávy tvrdí 90 pomocných lidí, trojnásobek skutečného poklesu. Analýza příspěvku přiřazující každému partnerovi podíl (řekněme 40 % úřad, 35 % charita, 25 % zdravotnický trust, na základě zdokumentované role a nezávislého posouzení) by uvedla 12, 10,5 a 7,5, což se správně sčítá na pozorovaných 30.

## Souvislost s softwarovým inženýrstvím

Vytěsnění a přisouzení formují, jak mají být navrženy systémy sledování dopadu a výkaznictví výsledků pro dodávku na více místech či s více partnery:

- Geografický a organizační rozsah by měl být v každém dashboardu dopadu výslovným, plnohodnotným polem — číslo uvedené „pro čtvrť“ a totéž číslo uvedené „pro region“ jsou různá čísla a systém, který je zaměňuje, vyprodukuje čísla, jež nelze na úrovni portfolia sladit.
- Kde dodávají společně vícero partnerů, měl by systém výsledků zaznamenávat podíly příspěvku (nebo alespoň označit společné přisouzení), místo aby nechal modul výkaznictví každého partnera nezávisle tvrdit 100 % sdíleného výsledku — jinak souhrny na úrovni portfolia nadhodnotí celkový dopad, někdy značně.
- To souvisí se [sociální návratností investice](../sociální-návratnost-investice/) a [výkaznictvím výsledků grantů](../výkaznictví-výsledků-grantů/): výpočet SROI či IRIS+, který ignoruje vytěsnění nebo nadměrně přisuzuje sdílené výsledky, vyprodukuje nafouklý poměr, který neobstojí v auditu ani replikaci.

## Úskalí

- **Uvádění místního úspěchu bez kontroly širšího vytěsnění.** Program může na nejmenší úrovni výkaznictví vypadat vysoce úspěšně, zatímco je na širší neutrální nebo dokonce záporný; vždy uveďte geografickou úroveň, na niž se čisté číslo vztahuje.
- **Nechat každého partnera ve společné dodávce tvrdit plnou zásluhu.** Pokud nejsou podíly příspěvku dohodnuty a zdokumentovány, souhrnné výkaznictví napříč partnery nadhodnotí celkový dopad — ověřte, že tvrzení na úrovni partnerů nedávají v součtu víc než pozorovaný celek.
- **Považování přisouzení za přesné procento, když je to ve skutečnosti úsudek.** Analýza příspěvku na rozdíl od randomizovaného kontrafaktuálu poskytuje obhajitelný odhad, nikoli změřený fakt; prezentujte ji s odpovídající nejistotou místo falešné přesnosti.
- **Ignorování vytěsnění u intervencí zaměřených na trh.** Podpora podnikání, programy zaměstnanosti a místně zaměřená regenerace jsou klasické kategorie s vysokým vytěsněním; kontroly vytěsnění berte pro ně jako povinné, nikoli volitelné.

## Zdroje

- HM Treasury, „The Magenta Book: Central Government Guidance on Evaluation“ (2020), včetně pokynů k analýze příspěvku. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, „Additionality Guide: A Standard Approach to Assessing the Additional Impact of Interventions“ (3. vydání).
- Evropská komise, „Evalsed: The Resource for the Evaluation of Socio-Economic Development“ — pokyny k místním, regionálním a národním úrovním vytěsnění.
- Mayne J. „Contribution Analysis: An Approach to Exploring Cause and Effect.“ ILAC Brief No. 16, 2008.
