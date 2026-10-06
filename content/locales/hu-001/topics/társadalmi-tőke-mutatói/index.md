# Társadalmi tőke mutatói

A társadalmi tőke mutatói számszerűsítik azokat a hálózatokat, bizalmat és állampolgári részvételt, amelyek lehetővé teszik a közösségek és intézmények hatékony működését — a „kötőszövetet”, amelynek egyetlen mérlegben sincs sora, de amely láthatóan csökkenti a költségeket és a súrlódást, ha jelen van, és láthatóan növeli, ha hiányzik. A modern keretezés Robert Putnam „Bowling Alone” (2000) művéből származik, amely megkülönböztette a kötő tőkét (egy hasonló csoporton belüli kötelékek) az áthidaló tőkétől (különböző csoportok közötti kötelékek); az Egyesült Királyság Office for National Statistics szervezete azóta állandó mutatókészletet épített ennek nemzeti követésére.

## Miért fontos

Putnam központi empirikus állítása — amelyet az amerikai civil egyesületi tagság, a templomlátogatás és a szakszervezeti részvétel csökkenése dokumentált a huszadik század végén — az volt, hogy a társadalmi tőke olyan eredményeket jósol, amelyeket a hagyományos közgazdaságtan nehezen magyaráz: alacsonyabb bűnözés, jobb gyermekjólét, hatékonyabb helyi önkormányzás, gyorsabb gazdasági helyreállás sokkok után. A kötő tőke (szoros kapcsolatok egy szorosan összetartó csoporton belül) jó a kölcsönös támogatáshoz, de bezárkózássá merevedhet; az áthidaló tőke (gyengébb kapcsolatok különböző csoportok között) az, amely jellemzően a lehetőségekhez való hozzáféréssel, az információáramlással és az intézményi bizalommal korrelál. Az ONS elég komolyan vette ezt ahhoz, hogy nemzeti mutatókeretrendszert építsen — „Social Capital in the UK” sorozata (<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>) négy pillért követ: személyes kapcsolatok, társadalmi hálózati támogatás, állampolgári részvétel, valamint bizalom és együttműködési normák, mindegyik megalapozott felmérési kérdésekből építve (Community Life Survey, Understanding Society). A közszolgáltatási digitális szolgáltatások számára a társadalmi tőke kétszeresen releváns: egyszerre eredmény, amelyet egyes programok építeni próbálnak (közösségi ellenálló képesség finanszírozása, társas receptírás), és bemenet, amely meghatározza, mennyire fogják ténylegesen átvenni a szolgáltatást — egy magas bizalmú, jól hálózatozott közösségbe bevezetett szolgáltatás szájról szájra terjed úgy, ahogy egy azonos szolgáltatás egy alacsony bizalmú területen nem.

## A matematika

```
ONS négypilléres keretrendszer (mutatók, szemléltetően):

Személyes kapcsolatok:        a %, akinek van kire számítania válság esetén
Társadalmi hálózati támogatás: a %, aki szükség esetén kölcsönkérhetne pénzt barátoktól/családtól
Állampolgári részvétel:       a %, aki az elmúlt 12 hónapban önkéntes volt vagy állampolgári cselekvést tett
Bizalom és együttműködési normák: a %, aki egyetért azzal, hogy „a legtöbb emberben meg lehet bízni”

Az ONS nem tesz közzé egyetlen összetett pontszámot — a pillérek külön jelentettek,
szándékosan, mert egyetlen indexbe aggregálásuk elrejtené, melyik pillér gyenge.

Putnam kötő/áthidaló felosztása (keretrendszer, nem képlet):
  kötő tőke ≈ a kapcsolatok sűrűsége egy homogén csoporton belül
  áthidaló tőke ≈ a kapcsolatok gyakorisága/ereje különböző csoportok között
```

## Kidolgozott példa

**Környéki társadalmi tőke pillanatkép**: egy Community Life Survey-stílusú helyi felmérés szerint a válaszadók 78%-ának van kire számítania válság esetén (személyes kapcsolatok), 61% kölcsönkérhetne pénzt szükség esetén (hálózati támogatás), 24% önkéntes volt az elmúlt évben (állampolgári részvétel), és 41% egyetért azzal, hogy „a legtöbb emberben meg lehet bízni” (bizalom és normák) — a nemzeti átlagok nagyjából 85%, 70%, 30% és 45% (szemléltető, az aktuális ONS-bulletinhez kalibrálják). A terület minden pillérnél alulmarad, de leginkább az állampolgári részvételben (24% vs. 30%, 6 pontos rés) és a bizalomban (41% vs. 45%, 4 pontos rés) — az állampolgári részvételt, nem a bizalmat jelölve a legnagyobb relatív hiányként, amely célzott befektetést (például közösségi támogatási programot) érdemel egy általános „építsünk bizalmat” kezdeményezés helyett.

**Kötő vs. áthidaló, szolgáltatástervezés**: egy szorosan összetartó közösségben egy munkaerőpiaci program azt találja, hogy a beutalások gyorsan terjednek a közösségen belül (magas kötő tőke: a hír napokon belül elterjed), de a program nehezen éri el a hálózaton kívüli lakosokat (alacsony áthidaló tőke: a magközösségen kívüli igénybevétel hónapok után is nulla közeli). A javítás nem a „több marketing”, hanem az áthidaló kapcsolatok tudatos építése — a meglévő hálózaton *kívül* álló szervezetekkel való partnerség, mert a kötő tőke önmagában nem oldhat meg áthidalótőke-problémát.

## Kapcsolat a szoftverfejlesztéssel

- Azok a digitális platformok, amelyek kölcsönös segítséget, önkéntességet vagy közösségi támogatásokat közvetítenek (például egy „helyi összekötő” szolgáltatás), szó szerint áthidalótőke-infrastruktúrát építenek; sikermutatójuk a létrehozott kapcsolatok hálózati sokszínűsége legyen, nem csupán a tranzakciószám — a tágabb mintáról, amelyben mások építenek értéket az infrastruktúrán, lásd a [kormányzat mint platform](../kormányzat-mint-platform/) témát.
- Ahol egy program változáselmélete kifejezetten a társadalmi tőkét célozza eredményként (közösségi ellenálló képesség alap, társas receptírási szolgáltatás), a [változáselméletnek](../változáselmélet/) és a [logikai modellnek](../logikai-modell/) meg kell neveznie a konkrét pillért (bizalom, állampolgári részvétel, hálózati támogatás), amelynek mozdítását várja, egy megkülönböztethetetlen „közösségépítés” eredmény helyett, amely nem mérhető az ONS-alapszinthez képest.
- A társadalmi tőke mutatói hasznos méltányossági lencsét adnak a [Többszörös Hátrányos Helyzet Indexe](../többszörös-hátrányos-helyzet-indexe/) mellett: egy terület lehet jövedelmi értelemben hátrányos, de társadalmilag gazdag, vagy fordítva, és a kettő nagyon eltérő beavatkozásokra mutat.

## Buktatók

- **Az ONS négy pillérének egyetlen összetett pontszámba sűrítése** — az ONS szándékosan nem teszi ezt; az egyetlen szám elrejti, melyik pillér okozza az alacsony értéket, és az átlagolás elfedi azt a közösséget, amely magas bizalmú, de állampolgárilag nem aktív, szemben a fordítottjával.
- **Annak feltételezése, hogy a társadalmi tőke mindig jó** — egy bezárkózó csoport sűrű kötő tőkéje aktívan ellenállhat a külső intézményeknek (a kormányzati szolgáltatásokat is beleértve); Putnam saját elemzése a kötő és az áthidaló tőkét különböző javaknak tekinti, különböző, néha ütköző hatásokkal.
- **Felmérésalapú társadalmi tőke mérések használata valós idejű működési mutatóként** — a mögöttes felmérések (Community Life Survey, Understanding Society) évente vagy ritkábban futnak; a társadalmi tőke adatait lassan mozgó kontextuális mutatóként kezeljék, nem olyasmiként, amit egy szolgáltatási irányítópult hetente frissíthet.

## Források

- Putnam RD. „Bowling Alone: The Collapse and Revival of American Community.” Simon & Schuster,
  2000.
- ONS. „Social capital in the UK: bulletins.”
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. „Community Life Survey” (éves).
