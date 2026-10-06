# Technikai adósság mint közérték-erózió

A technikai adósság Ward Cunningham 1992-es metaforája a múltbeli kényelmi kódolási döntések implicit jövőbeli költségére: egy **tőke** (a tartozott javítási munka) és egy **kamat** (a szállításra gyakorolt folyamatos teher). Egy örökölt kormányzati IT-állományban ez a kamat közvetlenül a közértékből fizetendő — lassabb törvényi változás-szállítás, magasabb hibaarány az állampolgárokkal szembeni szolgáltatásokon, és egyre kisebb azoknak az embereknek a köre, akik egyáltalán biztonságosan hozzáérhetnek a rendszerhez.

## Miért fontos

Az örökölt mainframe- és COBOL-korszakbeli rendszerek az egyesült királysági kormányzati tárcáknál — a HMRC és a DWP a leggyakrabban idézettek — jól dokumentált és eszkalálódó kockázatot hordoznak, amelyet a National Audit Office ismételten jelzett, többek között a *Digital Transformation in Government* jelentésében (<https://www.nao.org.uk/>): öregedő platformok, amelyek drágák változtatni, egyre nehezebben biztosíthatók, és olyan szakértői munkaerőtől függenek, amely gyorsabban nyugdíjba megy, mint ahogy pótolják. A magánszektorbeli hátralékkal ellentétben ez az adósság közvetlenül az állampolgárok és törvényi jogosultságaik között ül — egy biztonságosan nem módosítható ellátásszámítási motor szakpolitika-szállítási korlát, nem csupán mérnöki kellemetlenség. A Universal Credit IT-program 2013-as újraindítása, amikor a National Audit Office megállapította, hogy az eredeti építés nem hoz értéket a pénzért, és a szoftvereszköz jelentős részét le kellett írni, a beárazatlan technikai adósság kanonikus példája, amely utolérte az élő, miniszteri szinten látható közprogramot.

## A matematika

```
SQALE-tőke = Σ a szabálysértések felett (javítási idő) × fejlesztői költségráta
Technikai adósság arány (TDR) = javítási költség / újrafejlesztési költség × 100
                    (SonarQube-osztályok: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Kamat (a szám, amely a törlesztést indokolja):
  kamat/év = Δ szállítási sebesség × érték egységnyi sebességre
           + Δ állampolgári incidensráta × költség incidensenként
           + szakértői készség prémium × érintett létszám
Törlesztési eset = PV(az időhorizonton elkerült kamat) − javítási költség
                   (a Green Book társadalmi diszkontrátával diszkontálva, lásd
                   social-discount-rate.md)
```

A tőke állítja a kötelezettséget; a kamat az, ami a beruházási esetet egy közszámlabizottság elé viszi.

## Kidolgozott példa

Egy 250 000 soros ellátásfeldolgozó motor, amelyet egy örökölt 4GL-ben írtak. A CAST Appmarq viszonyítási értéket használva, nagyjából 3,61 dollár technikai adósság-tőkével soronként (≈2,85 £ tipikus átváltással):

```
Tőke ≈ 250 000 × 2,85 £ ≈ 712 500 £
TDR ≈ 16% (C osztály)
```

Mért kamat: a tárca három szakértő vállalkozót tart meg a szabványos senior mérnöki díjaknál 40%-kal magasabb napidíj-prémiummal, mert a belső készségek elkoptak — egy hatfős csapatnál évi további 180 000 £. A rendszer évente négy nagy feldolgozási kiesést is okoz, mindegyik nagyjából 5000 igénylő döntéseit függeszti fel, és őket a kapcsolattartó központba irányítja nagyjából 25 £/hívás költséggel:

```
Kamat ≈ 180 000 £ (készségprémium)
      + 4 × 5000 × 25 £ = 500 000 £ (átirányított kapcsolatfelvételi költség)
      ≈ 680 000 £/év
```

A legrosszabbul teljesítő modulok célzott javítása 1 200 000 £-ba kerül, és a modell szerint 70%-kal csökkenti a kamatot:

```
Kamatcsökkenés = 0,70 × 680 000 = 476 000 £/év
Megtérülés ≈ 1 200 000 / 476 000 ≈ 2,5 év
```

A célzás számít: a ritkán érintett kód javítása semmit nem vásárol, mert a kamat ott koncentrálódik, ahol a változtatási gyakoriság és az adósságsűrűség egyaránt csúcsra ér.

## Kapcsolat a szoftverfejlesztéssel

A közérték-keretezés, amely egy technikai adósság-esetet a „a kód régi” fölé emel: az örökölt állományt úgy kell kifejezni, mint a szállítási kapacitásvesztés koncentrációjának leltárát, és kifejezetten a [teljes birtoklási költséghez](../teljes-birtoklási-költség-a-kormányzati-it-ban/) kapcsolni, mert a kamat működési költség, amely a TCO-sorba tartozik, akár kérte valaha a pénzügy, akár nem. Az adósságterhes rendszerek aránytalan [kiberbiztonsági](../a-közszféra-kiberbiztonságának-értéke/) kitettséget is hordoznak, mert a javítási ütem és az adósságsűrűség korrelál — a javíthatatlan örökölt rendszer olyan technikai adósság, amelynek kamatát incidenskockázatban, nem fontban fizetik. És minden javítás-versus-funkció kompromisszum maga is [késedelem költsége](../a-késedelem-költsége-a-közprogramokban/) döntés: az adósság törlesztése késlelteti a következő törvényi változtatást, amelynek saját CoD-je van, és amelyet a megtakarított kamattal szemben mérlegelni kell.

## Buktatók

- **Csak tőkejelentés**: egy nagy, ijesztő javítási becslés kamatszám nélkül semmit nem indokol egy költés-jóváhagyónak.
- **Az eszközök által generált adósságszámok szó szerinti vétele**: az SQALE-stílusú szkennerek szabálysértéseket számolnak; elmulasztják a drága fajta adósságot — az architekturális döntéseket és a dokumentálatlan örökölt üzleti szabályokat —, miközben apróságokat jeleznek.
- **„Az újraírás mindettől megment”**: a helyettesítő programoknak ugyanazt a fegyelmet kell kiállniuk, mint bármely más üzleti esetnek — kontrafaktuális költség, a siker valószínűsége és diszkontálás —, nem mentességet kapni alóla, ahogy a 2013-as Universal Credit-újraindítás bemutatta.
- **Nulla-adósság utópizmus**: az optimális adósságszint nem nulla; az adósság tőkeáttétel, amely korábbi szállítást vásárolt. Az élő kérdés mindig a kamatláb, nem az, hogy létezik-e adósság egyáltalán.

## Források

- Cunningham W, „The WyCash Portfolio Management System”, OOPSLA tapasztalati jelentés, 1992.
- CAST, technikai adósság becslés (Appmarq viszonyítási érték). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* és jelentések a Universal Credit-ről. <https://www.nao.org.uk/>
