# Náklady na transakci

Náklady na transakci jsou titulkovou metrikou jednotkové ekonomiky vládní digitální služby: celkové náklady na provoz kanálu dělené počtem transakcí dokončených jeho prostřednictvím. Byla to vlajková loď staré Performance Platform GOV.UK a číslo, které financovalo desetiletí investic do „digitálního ve výchozím stavu“ — což je přesně důvod, proč je to také metrika nejnáchylnější k manipulaci.

## Proč na tom záleží

Zpráva Cabinet Office o digitální efektivitě (Digital Efficiency Report) z roku 2012 vyjádřila srovnání nákladů kanálů způsobem, který se uchytil: digitální transakce vycházely zhruba 20krát levněji než telefonické a zhruba 50krát levněji než osobní, s ilustrativními čísly místní správy zhruba 0,15 £ za webovou transakci proti 2,83 £ telefonicky a 8,62 £ osobně. Toto jediné srovnání se stalo zdůvodněním přepracování 25 vzorových služeb jmenovaných v Government Digital Strategy a každého resortního byznys případu, který od té doby citoval úspory z přesunu kanálů. Číslo je skutečně užitečné jako signál řádu velikosti, ale poměr zcela závisí na tom, co se na každé straně počítá: férové náklady telefonního kanálu zahrnují zaměstnance kontaktního centra, telefonní smlouvu, školení a prostory; férové digitální náklady zahrnují hosting, průběžné platy produktového týmu, čas podpory pro neúspěšné cesty a kanál s digitální asistencí, který vyžaduje bod 5 [standardu digitální služby](../standard-digitální-služby/). Vyřaďte z digitální strany dost z toho a jakákoli služba vypadá levně.

## Matematika

```
Náklady na transakci = celkové přidělené náklady kanálu / dokončené transakce

Celkové přidělené náklady kanálu by měly zahrnovat:
  + hosting a infrastrukturu
  + náklady produktového/inženýrského týmu a podpory (amortizované)
  + náklady na obsah a návrh služby (amortizované)
  + náklady na digitální asistenci / podporu přístupnosti
  + náklady poptávky ze selhání (uživatelé, kteří selžou digitálně a vrátí se k telefonu)
  − jednorázové náklady na vývoj se amortizují po očekávanou životnost služby,
    nikoli zcela odepisují do prvního roku

Běžný účetní trik:
  „Mezní náklady na transakci“ (pouze hosting po dokončení) se uvádějí,
  jako by šlo o „průměrné náklady na transakci“ (celkové náklady včetně
  týmu, který službu dále vyvíjí a provozuje). Obě čísla se mohou lišit
  10krát i více u služby s velkým aktivním dodávacím týmem.
```

## Praktický příklad

**Služba obnovy silniční daně**: 4 miliony transakcí ročně.

```
Pouze mezní údaj (trik):
  Pouze hosting + zpracování plateb = 180 000 £/rok
  Náklady na transakci = 180 000 / 4 000 000 = 0,045 £
  → titulkový údaj uvedený v byznys případu

Plně zatížený údaj (poctivý):
  Hosting + platby                          180 000 £
  Produktový/inženýrský tým (8 FTE)         720 000 £
  Podpora (neúspěšné/sporné transakce)      310 000 £
  Telefonní linka digitální asistence       140 000 £
  Celkem                                  1 350 000 £
  Náklady na transakci = 1 350 000 / 4 000 000 = 0,3375 £

Plně zatížený údaj je stále zhruba 8krát levnější než telefonní komparátor
2,83 £ ze zprávy o digitální efektivitě — skutečná a obhajitelná úspora —
ale 7,5krát vyšší než pouze mezní údaj uvedený ve zkrácené verzi. Obě čísla
jsou „pravdivá“; srovnatelné s náklady telefonního kanálu, vůči nimž se staví,
je jen jedno.
```

## Souvislost s softwarovým inženýrstvím

Náklady na transakci jsou místem, kde se architektonická rozhodnutí stávají finančním číslem: služba, která se čistě automaticky škáluje a vyžaduje málo ručního zásahu, tuto hodnotu časem snižuje; služba, která generuje velký objem tiketů podpory ze zmatených chybových stavů, ji zvyšuje bez ohledu na efektivitu hostingu. Je to přirozená doprovodná metrika k bodu 10 [standardu digitální služby](../standard-digitální-služby/) („definujte, jak vypadá úspěch, a zveřejňujte údaje o výkonnosti“) a ke [standardům služeb a metrikám transakcí](../standardy-služeb-a-metriky-transakcí/), které uvádějí úplnější sadu KPI, v níž toto číslo sedí. Také přímo vstupuje do výpočtů [úspor z přesunu kanálů](../úspory-z-přesunu-kanálů/) a mělo by být sladěno s [celkovými náklady vlastnictví ve vládním IT](../celkové-náklady-vlastnictví-ve-vládním-it/), aby se režie platformy a sdílených služeb mlčky neztrácely.

## Úskalí

- **Mezní náklady vydávané za průměrné**: uvádění nákladů pouze hostingu po vybudování služby s vynecháním průběžného týmu, který ji udržuje, iteruje a podporuje — viz praktický příklad výše.
- **Vyloučení nákladů na digitální asistenci**: kanál není v souladu s „digitálním ve výchozím stavu“ a jeho skutečné náklady nejsou zachyceny, pokud je telefonní/papírová záloha vyžadovaná [digitální inkluzí](../digitální-inkluze/) oceněna samostatně nebo ignorována.
- **Ignorování poptávky ze selhání**: transakce, které začnou digitálně a selžou, a vyvolají tak telefonát nebo papírový formulář, jsou náklady digitálního kanálu, nikoli kanálu, který selhání zachytí.
- **Srovnávání transakcí různé složitosti napříč kanály**: telefonní hovory neúměrně zpracovávají těžké případy (více vyživovaných osob, opravy chyb, zranitelní žadatelé); srovnání průměrných telefonních nákladů s průměrnými digitálními nadhodnocuje poměr, pokud není skladba transakcí sladěna.

## Zdroje

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, bod 10: definujte, jak vypadá úspěch. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
