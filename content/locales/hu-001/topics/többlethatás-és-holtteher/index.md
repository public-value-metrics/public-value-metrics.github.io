# Többlethatás és holtteher

A többlethatás (additionality) azt kérdezi, hogy egy beavatkozás okozott-e olyan eredményt, amely egyébként nem következett volna be. A holtteher (deadweight) a tükörképe: az eredménynek az a része, amely a program, támogatás vagy szubvenció nélkül is bekövetkezett volna. Egy kormányzati program vagy jótékonysági szervezet szinte minden hatásállítása felfújja a hatását, amíg a holtterhet le nem vonják, ezért kezelik a brit értékelési útmutatók bármely főszám első és legfontosabb korrekciójaként.

## Miért fontos

„500 vállalkozást támogattunk a növekedésben” teljesítménynek hangzik, de ha ebből 300 vállalkozás egyébként is nőtt volna — mert a helyi gazdaság éppen javult, mert más finanszírozási útjaik voltak, mert a program indulása előtt is növekedési pályán voltak —, akkor a program valódi többlet-hozzájárulása 200, nem 500. A HM Treasury Magenta Bookja és a régóta használt HM Treasury/BIS „Additionality Guide” (eredetileg regionális fejlesztési és megújítási programokhoz fejlesztették, és azóta széles körben használják a brit kormányzati értékelésben) a holtterhet a standard nettóhatás-sorozat kiindulási korrekciójaként formalizálják: bruttó hatás mínusz holtteher, mínusz kiszorítás, mínusz szivárgás, szorzóhatásokkal korrigálva, egyenlő a nettó többlethatással. E lépés kihagyása a leggyakoribb módja annak, hogy a közszféra és a társadalmi szektor hatásállításai felfúvódjanak, szándékosan vagy sem — egy támogatási program, amely csak a bruttó résztvevői eredményeket méri, összehasonlító csoport nélkül, nem tudja megkülönböztetni saját hatását attól, ami úgyis megtörtént volna.

A holtteher nem rögzített százalék; teljes mértékben az adott népességre és beavatkozásra vonatkozó kontrafaktuálistól függ (lásd [kontrafaktuális elemzés](../kontrafaktuális-elemzés/)). Az angol regionális fejlesztési értékelések a korábbi regionális fejlesztési ügynökségek alatt a vállalkozástámogatás típusától függően gyakran 20–60%-os holtteher-rátákat találtak, ezért a hiteles programértékelések holtteherrel korrigált tartományt jelentenek egyetlen feltételezett szám helyett, és ezért követelik meg az olyan finanszírozók, mint a National Lottery Community Fund és a Big Society Capital, hogy a kedvezményezettek kifejezetten kezeljék a holtterhet az eredményjelentésben, ahelyett hogy bruttó résztvevőszámokat jelentenének.

## A matematika

A standard nettóhatás-korrekciós sorozat, ahogy a brit értékelési útmutatók rögzítik (Magenta Book; HM Treasury/BIS Additionality Guide; ESIF és strukturális alapok értékelési útmutatói):

```
Bruttó eredmény
  − Holtteher     (ami úgyis megtörtént volna)
  − Kiszorítás    (máshonnan áthelyezett tevékenység/haszon, nem újonnan létrehozott — lásd
                    displacement-and-attribution)
  − Szivárgás     (a célcsoporton/területen kívülre jutó haszon)
  × Szorzó        (további közvetett/indukált gazdasági tevékenység, ahol pozitív)
  = Nettó többlethatás
```

A holtteher-ráta arányként:

```
Holtteher-ráta = a beavatkozás nélkül is bekövetkezett eredmények
                 / az összes megfigyelt bruttó eredmény

Nettó többlet-eredmények = Bruttó eredmények × (1 − Holtteher-ráta)
```

## Kidolgozott példa

**Vállalkozástámogatási program**: egy regionális támogatási program jelentése szerint 500 támogatott vállalkozás növelte a foglalkoztatást a következő évben, átlagosan egyenként 3 munkahellyel — 1500 munkahelyes bruttó állítás.

Hasonló, nem támogatott vállalkozások illesztett összehasonlító csoportja (lásd [kontrafaktuális elemzés](../kontrafaktuális-elemzés/)) azt mutatja, hogy a támogatott vállalkozások foglalkoztatásnövekedésének 40%-a úgyis megtörtént volna, az illesztett csoport ugyanazon időszaki teljesítménye alapján.

```
Holtteher-ráta = 40%
Nettó többlet-munkahelyek = 1500 × (1 − 0,40) = 900 munkahely
```

A program becsületesen jelenthető eredménye 900 munkahely, nem 1500 — 40%-os csökkenés pusztán a holtteher-korrekcióból, még mielőtt a kiszorítást vagy a szivárgást figyelembe vennék.

**Jótékonysági foglalkoztatási program**: egy jótékonysági szervezet 200 tartósan munkanélkülit helyez el munkába 600 000 £ költséggel (bruttó 3000 £ elhelyezésenként). Az országos munkaerőpiaci adatok szerint beavatkozás nélkül egy összehasonlítható, tartósan munkanélküli kohorsz nagyjából 15%-a talál munkát ugyanazon időszakban a természetes munkaerőpiaci mozgás révén.

```
Holtteher-ráta = 15%
Nettó többlet-elhelyezések = 200 × (1 − 0,15) = 170
A többlet-elhelyezés valós költsége = 600 000 £ / 170 ≈ 3529 £
```

A bruttó elhelyezésenkénti költség (3000 £) nagyjából 15%-kal alulbecsüli a szervezet többlet-hozzájárulásának valós költségét.

## Kapcsolat a szoftverfejlesztéssel

A többlethatás és a holtteher közvetlenül fontos mindenkinek, aki hatásmérő vagy támogatáskezelő szoftvert épít a közszféra vagy a társadalmi szektor számára:

- Az eredményjelentő rendszerek tervezésből kezeljenek összehasonlító vagy alapcsoportot, ne csak résztvevői eredményeket — a kontrafaktuális utólagos beépítése egy olyan rendszer indulása után, amely nélküle indult, sokkal nehezebb, mint a rögzítés beépítése az elejétől (lásd [kontrafaktuális elemzés](../kontrafaktuális-elemzés/)).
- Az olyan irányítópultok, amelyek csak bruttó résztvevőszámokat jelentenek, rendszerszerűen túlbecsülik a hatást a finanszírozók és felügyeleti szervek felé; ahol léteznek holtteher-becslések (az értékelési szakirodalomból vagy egy összehasonlító csoportból), a szoftver a holtteherrel csökkentett számot a bruttó mellett mutassa, ne helyette.
- Ez közvetlenül kapcsolódik a [társadalmi megtérüléshez](../társadalmi-megtérülés/), amelynek SROI-aránya csak akkor hiteles, ha a holtterhet (és a kiszorítást) levonták az állított bruttó eredményekből — az a SROI-kalkulátor, amely kihagyja ezt a lépést, felfújt arányokat termel, amelyek nem állják ki a vizsgálatot.

## Buktatók

- **A bruttó eredmények jelentése úgy, mintha mind többlet lenne.** Ez a leggyakoribb hatásmérési hiba a támogatás- és programjelentésekben; mindig kérdezzék meg „megtörtént volna-e úgyis?”, mielőtt főszámot közzétennének.
- **Annak feltételezése, hogy egyetlen holtteher-százalék mindenütt érvényes.** A holtteher ágazatonként, népességenként és helyi gazdasági feltételek szerint nagyon különbözik; összehasonlító csoportot vagy ágazatspecifikus bizonyítékot használjanak ahelyett, hogy egy független értékelés számát újrahasználnák.
- **A holtteher összetévesztése a kiszorítással.** A holtteher ugyanazon résztvevők kontrafaktuális eredményeiről szól; a kiszorítás más emberekre vagy helyekre gyakorolt hatásokról — lásd [kiszorítás és tulajdonítás](../kiszorítás-és-tulajdonítás/). A kettő keverése a korrekció kétszeri vagy elégtelen számításához vezet.
- **Résztvevők által jelentett holtteher.** A kedvezményezettek megkérdezése, hogy „megtörtént volna-e ez a segítségünk nélkül?”, rendszerszerűen alacsony holtteher-becsléseket ad (a résztvevők hajlamosak a programnak tulajdonítani az érdemet); egy független összehasonlító csoport sokkal megbízhatóbb.

## Források

- HM Treasury, „The Magenta Book: Central Government Guidance on Evaluation” (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, „Additionality Guide: A Standard Approach to Assessing the Additional Impact of Interventions” (3. kiadás), eredetileg az English Partnerships és a Housing Corporation közreműködésével.
- Európai Bizottság, „Evalsed: The Resource for the Evaluation of Socio-Economic Development” — útmutató a holtteherről, kiszorításról és szivárgásról a strukturális alapok értékelésében.
- National Lottery Community Fund, „Guidance on Outcomes and Impact Reporting.” <https://www.tnlcommunityfund.org.uk/>
