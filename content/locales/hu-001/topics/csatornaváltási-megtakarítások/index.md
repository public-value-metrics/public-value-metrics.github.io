# Csatornaváltási megtakarítások

A csatornaváltási megtakarítások a drága csatornákról — telefon, személyes ügyfélszolgálati pult, papíralapú posta — az olcsó digitális önkiszolgálásra áthelyezett tranzakciós volumenből várható költségcsökkentés. Ez a „digital by default” pénzügyi motorja, és egyben az üzleti eset leginkább tévedésre hajlamos tétele is, mert a feltevés, amelyre épül — hogy az offline csatornák zsugorodnak, ahogy a digitális igénybevétel nő — csak néha igaz.

## Miért fontos

A számtan megcáfolhatatlannak látszik a Digital Efficiency Report [tranzakciónkénti költség](../tranzakciónkénti-költség/) adataival: egymillió tranzakció áthelyezése egy 8,62 £-os személyes látogatásról egy 0,15 £-os digitálisra több mint 8 millió £ megtakarítást ad. De a megtakarítás csak akkor válik átcsoportosításra felszabadított készpénzzé, ha a zsugorodó csatorna *fix kapacitását* ténylegesen megszüntetik — a call center helyeket, a pultos munkatársakat, a telefonszerződés perceit —, és a helyi önkormányzati digitális programok ismételten azt találták, hogy az összes kapcsolatfelvételi volumen nem esik a digitális igénybevétellel arányosan. A helyi önkormányzati digitális átalakítási programok kutatásai és az olyan szervezetek, mint a Socitm és a Local Government Association, visszatérő mintát dokumentáltak: a digitális csatornák valóban új kapcsolatfelvételt vonzanak (olyan állampolgárok, akik nem telefonáltak vagy látogattak volna, most megteszik, mert könnyebb), és a „digitális” tranzakciók jelentős hányada félúton elbukik és mégis telefonhívást generál — így a telefonvolumen jóval kevésbé esik, mint ahogy a digitális igénybevételi százalék sugallná, néha abszolút értelemben egyáltalán nem esik, még ha az összes kapcsolatfelvételen belüli *részaránya* csökken is.

## A matematika

```
Bruttó csatornaváltási megtakarítás = áthelyezett volumen × (költség_régi_csatorna − költség_digitális)

Nettó (realizált) megtakarítás = bruttó megtakarítás
                                − a könnyebb csatorna által létrehozott új/árnyék-kereslet
                                − hibakereslet-költség (a digitális hibák, amelyek
                                  mégis telefonhívást vagy pultlátogatást generálnak)
                                − a meg nem szüntetett fix kapacitás költsége
                                  (egy call center csak diszkrét egységekben
                                  csökkentheti a létszámot; egy 15%-os volumencsökkenés
                                  ritkán teszi lehetővé a létszám 15%-os csökkentését)

Realizálási küszöb: a megtakarítások csak akkor könyvelhetők el, ha a volumen a régi csatorna
következő kisebb diszkrét kapacitási lépcsőjét kiszolgáló szint alá esik (pl. egy teljes
műszak, egy teljes asztal, egy szerződéses létszámsáv elvesztése)
```

## Kidolgozott példa

**Megyei tanács kék jelzés (blue badge) megújítási szolgáltatás**: évi 60 000 megújítás, korábban 100%-ban telefonon/papíron, tranzakciónként 6,40 £-ért. Egy új digitális szolgáltatás indul, és egy éven belül 65%-os digitális igénybevételt ér el, digitális tranzakciónként 0,30 £-ért.

```
Naiv (bruttó) megtakarítás-számítás:
  39 000 áthelyezett × (6,40 £ − 0,30 £) = 237 900 £/év

Mi történt valójában a tanács kapcsolattartó központjának adatai szerint:
  A telefonvolumen évi 60 000-ről 46 000-re esett (−23%, nem −65%)
  mert: 9000 digitális út bukott el és generált utókövető hívást
        (hibakereslet-szivárgás), és 4000 ember, aki korábban egyáltalán
        nem újított, most megújít, mert online könnyűnek találta
        (árnyék-kereslet — valódi hozzáférés-javulás, de nem megtakarítás)

  A telefonos kapcsolattartó központ 8000 hívás/FTE sávokban van beosztva;
  egy 14 000 hívásos csökkenés (60 000 → 46 000) 1,75 FTE-t szabadít fel,
  a gyakorlatban lefelé kerekítve 1 ténylegesen átcsoportosított FTE = 34 000 £/év

Realizált megtakarítás = 34 000 £/év plusz az elkerült digitális csatorna építési/üzemeltetési
  költség 39 000 tranzakción ≈ 34 000 £ + (39 000 × 0,30 £ már beszámított digitális
  költség) — a 237 900 £-os főcímszám töredéke, bár a szolgáltatás a felhasználóknak
  egyértelműen jobb.
```

## Kapcsolat a szoftverfejlesztéssel

A mérnöki tanulság az, hogy a csatornaváltási megtakarításokat *működési* döntések (beosztás, megszüntetés, szerződés-újratárgyalás) realizálják, nem a szoftver kiszállítása — egy csapat teljesítheti a [digitális szolgáltatási szabvány](../digitális-szolgáltatási-szabvány/) minden pontját, és mégis nulla nettó megtakarítást hozhat, ha senki nem szünteti meg a régi csatorna fix kapacitását. A hibakereslet műszerezése (hol morzsolódnak le a felhasználók a digitális úton, és mit tesznek utána) megoldható tölcsér-analitikai probléma, és az az egyetlen legnagyobb hatású dolog, amit egy mérnöki csapat tehet a megtakarítási eset védelméért; ez egyben a közvetlen kapocs a [tranzakciónkénti költséghez](../tranzakciónkénti-költség/), amelyet a hibakereslet csendben felfúj. Az üzleti eset megtakarításai tényleges megvalósulásának ellenőrzésére vonatkozó tágabb fegyelemről lásd a [haszonmegvalósítást](../haszonmegvalósítás/), arról pedig, hogy az offline csatornát miért nem lehet, és nem is szabad teljesen megszüntetni, a [digitális befogadást](../digitális-befogadás/).

## Buktatók

- **1:1 csatornahelyettesítés feltételezése**: a digitális igénybevétel közvetlen kivonásként való modellezése a telefon-/pultvolumenből, figyelmen kívül hagyva a helyi önkormányzati csatornaváltási kutatásokban dokumentált árnyék-keresletet és hibakereslet-szivárgást.
- **Bruttó megtakarítások elkönyvelése a megszüntetés előtt**: a megtakarítás beszámítása az üzleti esetben abban az évben, amikor az igénybevétel emelkedik, nem abban az évben (ha egyáltalán), amikor a régi csatorna kapacitását ténylegesen megvágják.
- **A személyzeti költségek lépcsőfüggvény-jellegének figyelmen kívül hagyása**: egy 20%-os volumencsökkenés ritkán fordul 20%-os költségcsökkenésre, mert a kapcsolattartó központokat és pultokat diszkrét sávokban, nem folyamatosan látják el személyzettel.
- **Az árnyék-kereslet pazarlásként kezelése**: a korábban kirekesztett vagy korábban elrettentett felhasználóktól érkező új kapcsolatfelvétel a [közérték](../közérték/) valódi növekedése, nem modellezési hiba — hozzáférési eredményként kell jelenteni, nem zajként kivonni.

## Források

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digitális átalakítási és csatornaváltási források. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, helyi közszolgáltatások digitális betekintési kutatása. <https://www.socitm.net/>
