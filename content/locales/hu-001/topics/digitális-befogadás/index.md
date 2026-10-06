# Digitális befogadás

A digitális befogadás (digital inclusion) annak a fegyelme, hogy a „digital by default” ne váljon „csak digitálissá” — hogy a legolcsóbb csatorna köré tervezett közszolgáltatások azoknak az állampolgároknak is működjenek, akik nem tudják vagy nem akarják segítség nélkül használni. A GDS alkotta meg a konkrét szállítási mechanizmust, a „támogatott digitális” (assisted digital) megoldást, minden kormányzati digitális szolgáltatás kötelező követelményeként, nem opcionális extraként.

## Miért fontos

A 2012-es Government Digital Strategy világosan kimondta az ambíciót: a digitális szolgáltatásokat „digital by default” módon kell építeni, de maga a stratégia elismerte, hogy az Egyesült Királyság felnőtt lakosságának nagyjából 10%-a segítség nélkül nem tudja használni őket, és arra kötelezte a tárcákat, hogy a szolgáltatás részeként nyújtsanak támogatott digitális segítséget — emberközvetített útvonalat telefonon, személyesen vagy közvetítőn keresztül —, nem utólag hozzácsavarozott külön tartalékot. Ez a kötelezettség ma a [digitális szolgáltatási szabvány](../digitális-szolgáltatási-szabvány/) 5. pontja, „gondoskodjon arról, hogy mindenki használhassa a szolgáltatást”. A folyamatos kirekesztés mértékét a Lloyds Banking Group éves UK Consumer Digital Indexe követi: a 2024-es kiadás szerint az Egyesült Királyságban nagyjából 1,6 millió ember marad offline, és ez a csoport erősen a 70–79 évesek, a 35 000 £ alatt keresők, valamint a nyugdíjasok vagy munkanélküliek felé tolódik — éppen azon népesség felé, amely a legvalószínűbben függ az újratervezett közszolgáltatásoktól. Ugyanez a jelentés megállapította, hogy az Egyesült Királyság munkaerejének csak 48%-a tudta elvégezni az Essential Digital Skills keretrendszer mind a 20 feladatát, vagyis a kirekesztés nem bináris kapcsolódás kérdése, hanem készség, magabiztosság és bizalom spektruma, amelyet az egyszerű „van szélessávú internete” mutató teljesen elnéz.

## A matematika

A digitális befogadás keretrendszer és méltányossági ellenőrzés, nem egyetlen képlet, de az [elosztási súlyozáson](../elosztási-súlyozás/) keresztül kapcsolódik a kvantitatív értékeléshez:

```
Naiv csatornaváltási érték:
  érték = áthelyezett volumen × (költség_régi − költség_digitális)     [lásd channel-shift-savings]

Befogadással korrigált érték:
  érték = (áthelyezett volumen × súlyozatlan megtakarítás)
        − (kirekesztett felhasználók × a támogatott digitális ellátás költsége)
        − (elosztási súly-korrekció azoknak a kirekesztett csoportoknak a kárára,
           amelyek elvesztik a hozzáférést vagy leromlott szolgáltatásminőséggel szembesülnek)

A támogatott digitális nem a kudarc maradék költsége — tervezett csatorna, saját
[tranzakciónkénti költséggel](../tranzakciónkénti-költség/), jellemzően tranzakciónként
jóval magasabb, mint az önkiszolgáló digitális, de általában még mindig olcsóbb,
mint az örökölt csatorna, amelyet részben helyettesít.
```

## Kidolgozott példa

**Universal Credit-stílusú országos ellátási szolgáltatás**: évi 2,5 millió igénylés, amelynél a Government Digital Strategy tervezési feltevése szerint az igénylők becsült 10%-ának van szüksége támogatott digitális segítségre.

```
Kirekesztett/támogatott digitális kohorsz = 2 500 000 × 10% = 250 000 igénylés/év

Támogatott digitális csatorna költsége (telefonos + személyes támogatás,
sérülékenység és összetettség kezelésére beosztva) ≈ 9,50 £/igénylés
  = 250 000 × 9,50 £ = 2 375 000 £/év

Önkiszolgáló digitális költség a többi 90%-ra ≈ 0,40 £/igénylés
  = 2 250 000 × 0,40 £ = 900 000 £/év

Vegyes tranzakciónkénti költség = (2 375 000 + 900 000) / 2 500 000
  = 1,31 £/igénylés

Az a terv, amely kihagyja a támogatott digitális megoldást, hogy alacsonyabb főcím-
tranzakciónkénti költséget érjen el (pl. 0,40 £ vegyes, a 250 000 kirekesztett
igénylőt figyelmen kívül hagyva), nem szünteti meg azt a 2,375 millió £-os költséget —
átalakítja fel nem vett jogosultságokká, fellebbezésekké és utólagos válságszolgáltatási
kereslet, amely egy teljesen másik költségvetésre hárul.
```

## Kapcsolat a szoftverfejlesztéssel

A támogatott digitális tervezett csatorna, vagyis vannak felületei, SLA-i és műszerezése, mint bármely másiknak: egy telefonos ügyintézői eszköz, egy közvetítői portál a Citizens Advice vagy egy helyi önkormányzat számára, vagy egy személyes kioszk-folyamat. Ha utólagos gondolatként kezelik — egy telefonszám az apró betűs részben, nem a felfedezéstől számolt csatorna —, az a legáltalánosabb módja annak, hogy a szolgáltatások megbuknak a [digitális szolgáltatási szabvány](../digitális-szolgáltatási-szabvány/) 5. pontján az értékelésen. A digitális befogadás a méltányossági lencse a témacsoport minden másik témáján: korlátozza, mennyire agresszíven valósíthatók meg a [csatornaváltási megtakarítások](../csatornaváltási-megtakarítások/), olyan tétel, amelyet őszintén bele kell foglalni a [tranzakciónkénti költségbe](../tranzakciónkénti-költség/), és az [elosztási súlyozás](../elosztási-súlyozás/) közvetlen alkalmazása a digitális szolgáltatások kontextusára — az a megtakarítás, amely aránytalanul olyan embereken csapódik le, akik már eleve digitálisan és gazdaságilag kirekesztettek, lefelé súlyozandó, nem a lakosságon egyenletesen elosztott megtakarítással egyenértékűként kezelendő.

## Buktatók

- **A „digital by default” olvasása „csak digitálisként”**: a telefonvonal vagy a pult bezárása, amint a digitális igénybevétel átlép egy küszöböt, annak ellenőrzése nélkül, hogy a megmaradó kohorsznak van-e valóban használható alternatívája.
- **A befogadás mérése bináris kapcsolódással**: a „van szélessávú internete” vagy „van okostelefonja” gyenge helyettesítő egy konkrét tranzakció elvégzésének képességére — az Essential Digital Skills rés (az Egyesült Királyság munkaerejének csak 48%-a végzi el mind a 20 feladatot, Lloyds 2024) mutatja, hogy a készségek és a magabiztosság ugyanannyit számítanak, mint a hozzáférés.
- **A támogatott digitális megoldás kerekítési hibaként költségezése**: kis tartalék-tételként költségvetésezni valódi, saját [tranzakciónkénti költséggel](../tranzakciónkénti-költség/) rendelkező csatorna helyett, majd meglepődni, amikor indulásra alulfinanszírozott és létszámhiányos.
- **Csak a sikeres digitális befejezők felmérése**: a teljes egészében a szolgáltatáson belül futtatott elégedettségi és használhatósági kutatás kihagyja azokat, akik odáig el sem jutottak, pedig a digitális befogadási munka éppen ezt a népességet hivatott védeni.

## Források

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, 5. pont: gondoskodjon arról, hogy mindenki használhassa a szolgáltatást. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digitális kirekesztettségi felülvizsgálat. <https://www.ofcom.org.uk/>
