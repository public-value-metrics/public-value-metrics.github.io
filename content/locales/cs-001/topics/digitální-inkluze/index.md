# Digitální inkluze

Digitální inkluze je disciplína, která zajišťuje, aby se „digitální ve výchozím stavu“ nestalo „pouze digitálním“ — aby veřejné služby navržené kolem nejlevnějšího kanálu nadále fungovaly pro občany, kteří ho nemohou nebo nechtějí používat bez pomoci. GDS zavedl konkrétní mechanismus dodání, „digitální asistenci“ (assisted digital), jako povinný požadavek na každou vládní digitální službu, nikoli volitelný doplněk.

## Proč na tom záleží

Government Digital Strategy 2012 stanovila ambici jasně: digitální služby mají být budovány digitální ve výchozím stavu, ale strategie sama uznala, že asi 10 % britských dospělých je nebude schopno používat bez pomoci, a zavázala resorty poskytovat podporu digitální asistence — cestu zprostředkovanou člověkem, telefonicky, osobně nebo přes prostředníka — jako součást služby, nikoli samostatnou zálohu přidanou později. Tento závazek je nyní bodem 5 [standardu digitální služby](../standard-digitální-služby/), „zajistěte, aby službu mohl používat každý“. Rozsah trvajícího vyloučení sleduje každoroční UK Consumer Digital Index od Lloyds Banking Group: vydání 2024 zjistilo, že asi 1,6 milionu lidí ve Spojeném království zůstává offline a že tato skupina je silně nakloněna k lidem ve věku 70–79 let, těm s příjmem pod 35 000 £ a těm, kdo jsou v důchodu nebo nezaměstnaní — přesně populaci, která nejpravděpodobněji závisí na veřejných službách, jež se přepracovávají. Tatáž zpráva zjistila, že jen 48 % britské pracovní síly dokázalo splnit všech 20 úkolů rámce Essential Digital Skills, což znamená, že vyloučení není binární konektivita, ale spektrum dovedností, jistoty a důvěry, které jednoduchá metrika „má širokopásmový internet“ zcela míjí.

## Matematika

Digitální inkluze je rámec a kontrola rovnosti spíše než jediný vzorec, ale skládá se s kvantitativním hodnocením hodnoty prostřednictvím [distribučního vážení](../distribuční-vážení/):

```
Naivní hodnota přesunu kanálu:
  hodnota = přesunutý objem × (náklad_starý − náklad_digitální)     [viz channel-shift-savings]

Hodnota upravená o inkluzi:
  hodnota = (přesunutý objem × nevážená úspora)
        − (vyloučení uživatelé × náklady na poskytování digitální asistence)
        − (úprava distribuční váhy za škodu vyloučeným skupinám,
           které ztrácejí přístup nebo čelí zhoršené kvalitě služby)

Digitální asistence není zbytkovým nákladem selhání — je to navržený kanál
s vlastními [náklady na transakci](../náklady-na-transakci/),
typicky mnohem vyššími na transakci než digitální samoobsluha, ale stále
obvykle levnějšími než starší kanál, který částečně nahrazuje.
```

## Praktický příklad

**Národní služba dávek ve stylu Universal Credit**: 2,5 milionu žádostí ročně, odhadováno, že asi 10 % žadatelů potřebuje podporu digitální asistence podle plánovacího předpokladu Government Digital Strategy.

```
Vyloučená kohorta / kohorta digitální asistence = 2 500 000 × 10 % = 250 000 žádostí/rok

Náklady kanálu digitální asistence (telefonická + osobní podpora,
obsazená pro zvládnutí zranitelnosti a složitosti) ≈ 9,50 £/žádost
  = 250 000 × 9,50 £ = 2 375 000 £/rok

Náklady digitální samoobsluhy pro zbylých 90 % ≈ 0,40 £/žádost
  = 2 250 000 × 0,40 £ = 900 000 £/rok

Smíšené náklady na transakci = (2 375 000 + 900 000) / 2 500 000
  = 1,31 £/žádost

Návrh, který přeskočí digitální asistenci kvůli nižším titulkovým
nákladům na transakci (např. 0,40 £ smíšených, ignorujících 250 000
vyloučených žadatelů), neodstraní těchto 2,375 mil. £ nákladů — mění je
na nenárokované dávky, odvolání a navazující poptávku po krizových
službách, která dopadá na zcela jiný rozpočet.
```

## Souvislost s softwarovým inženýrstvím

Digitální asistence je navržený kanál, což znamená, že má rozhraní, SLA a instrumentaci jako každý jiný: nástroj pro pracovníka telefonické podpory, portál prostředníka pro Citizens Advice nebo místní úřad nebo tok osobního kiosku. Zacházení s ní jako s dodatečnou myšlenkou — telefonní číslo drobným písmem místo kanálu uvažovaného od discovery — je nejběžnějším způsobem, jak služby při hodnocení nesplní bod 5 [standardu digitální služby](../standard-digitální-služby/). Digitální inkluze je optika rovnosti pro každé jiné téma této kapitoly: omezuje, jak agresivně lze realizovat [úspory z přesunu kanálů](../úspory-z-přesunu-kanálů/), je to položka, která musí být poctivě zahrnuta do [nákladů na transakci](../náklady-na-transakci/), a je to přímá aplikace [distribučního vážení](../distribuční-vážení/) na kontext digitálních služeb — úspora, která dopadá neúměrně na lidi, kteří jsou již digitálně a ekonomicky vyloučeni, by měla být vážena dolů, nikoli považována za ekvivalentní úspoře rovnoměrně rozložené po populaci.

## Úskalí

- **„Digitální ve výchozím stavu“ čtené jako „pouze digitální“**: uzavření telefonní linky nebo přepážky, jakmile digitální využití překročí práh, bez ověření, že zbývající kohorta má skutečně použitelnou alternativu.
- **Měření inkluze binární konektivitou**: „má širokopásmový internet“ nebo „vlastní smartphone“ je špatným zástupcem schopnosti dokončit konkrétní transakci — mezera Essential Digital Skills (jen 48 % britské pracovní síly splňuje všech 20 úkolů podle Lloyds 2024) ukazuje, že dovednosti a jistota záleží stejně jako přístup.
- **Oceňování digitální asistence jako zaokrouhlovací chyby**: rozpočtování jako malé rezervní položky místo řádného kanálu s vlastními [náklady na transakci](../náklady-na-transakci/), a následné překvapení, že je na spuštění poddimenzovaná a podobsazená.
- **Průzkum jen úspěšných digitálních dokončivších**: výzkum spokojenosti a použitelnosti prováděný zcela během služby míjí lidi, kteří se nikdy tak daleko nedostali, což je přesně populace, kterou má digitální inkluze chránit.

## Zdroje

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, bod 5: zajistěte, aby službu mohl používat každý. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, přezkum digitálního vyloučení. <https://www.ofcom.org.uk/>
