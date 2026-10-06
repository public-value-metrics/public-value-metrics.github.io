# Változáselmélet

A változáselmélet (theory of change) egy hosszú távú céltól visszafelé feltérképezett, kifejezett ok-okozati útvonal azokig az előfeltételekig és tevékenységekig, amelyeknek léteznie kell a cél eléréséhez, az egyes láncszemeket összekötő feltevésekkel együtt. Úgy építik fel, hogy a kívánt eredményből indulnak ki, és újra meg újra megkérdezik: „minek kell igaznak lennie közvetlenül ez előtt, hogy ez megtörténhessen?”, amíg el nem érnek olyan tevékenységekhez, amelyeket ténylegesen szállítani tudnak — ez a [logikai modellel](../logikai-modell/) ellentétes irány, és ezért kiegészítik, nem helyettesítik egymást.

## Miért fontos

A visszafelé térképezés módszerét a Center for Theory of Change és az ActKnowledge formalizálta, Carol Weiss értékelő azon munkájára építve, hogy a programfeltevéseket kifejezetté kell tenni, hogy tesztelni lehessen őket, ne hit alapján fogadják el. A brit támogatásértékelés ezt közvetlenül átvette: a HM Treasury Magenta Bookja a változáselméletet minden értékelési terv kiindulópontjának tekinti, és az olyan finanszírozók, mint a National Lottery Community Fund, megkövetelik a pályázóktól, hogy megfogalmazzanak egyet, mielőtt egy javaslatot támogatnának. A szoftvermérnök számára azért fontos, mert a változáselmélet az a dokumentum, amelynek meg kell határoznia, mit kell a rendszerének mérnie — ha az ok-okozati lánc azt mondja, hogy „az ellátások igénybevétele azon múlik, hogy az igénylők személyre szabott számítást kapnak”, az tesztelhető állítás, amelynek igazolására vagy cáfolatára a termék műszerezhető.

## A matematika

A változáselmélet szerkezeti, nem numerikus. Minden láncszemnek hordoznia kell egy feltevést és egy olyan mutatót, amely megmutathatja, hogy a feltevés hamis:

```
Hosszú távú eredmény (a cél)
  ↑ előfeltétel + feltevés + mutató
N. köztes eredmény
  ↑ előfeltétel + feltevés + mutató
  ...
1. köztes eredmény
  ↑ előfeltétel + feltevés + mutató
Tevékenységek / beavatkozások
  ↑ lekötött erőforrások
Ráfordítások
```

Ez a szerkezet közvetlenül táplálja a [hatásértékelési módszereket](../hatásértékelési-módszerek/), amelyek azt tesztelik, hogy az egyes láncszemeknél a feltevések valóban fennállnak-e, és a [kontrafaktuális elemzést](../kontrafaktuális-elemzés/), amely azt teszteli, hogy a hosszú távú eredmény úgyis bekövetkezett volna-e.

## Kidolgozott példa

**Helyi önkormányzat (hajléktalanság-megelőzés)**: a hosszú távú eredmény a kilakoltatással fenyegetett háztartások tartós bérleti jogviszonya 12 hónap után.

- Előfeltétel: a háztartásoknak reális, megfizethető törlesztési tervük van a hátralékra.
  Feltevés: az ügyintéző által tárgyalt tervek fenntarthatóbbak, mint a bírósági úton elrendeltek.
  Mutató: a 6 hónap után is aktív tervek aránya.
- Előfeltétel: a háztartások igénybe veszik a nekik járó ellátásokat.
  Feltevés: a digitális ellátáskalkulátor növeli a helyes igénylések számát a papíralapú űrlapokhoz képest.
  Mutató: az igénylések pontossági aránya, az eszköz bevezetése előtt és után összehasonlítva.
- Tevékenységek: ügyintézői szűrés, digitális ellátáskalkulátor, hátralék-tárgyalás.

120 háztartásból álló kísérleti kohorszban az ellátáskalkulátor-feltevés 102 háztartásnál (85%) bizonyult igaznak, amelyek helyesen igényeltek, amit egy későbbi folyamatértékelés igazolt — így a programcsapatnak az adott láncszemre vonatkozó bizonyítéka van, nem egyetlen, végponttól végpontig tartó állítása a megelőzött hajléktalanságról.

**Jótékonysági szervezet (ifjúsági mentorálás)**: a hosszú távú eredmény a csökkent iskolai kizárás. Visszafelé feltérképezett előfeltételek: javuló érzelmi szabályozás → bizalmi egyéni kapcsolat egy mentorral → következetes heti kapcsolattartás két tanéven át. Az elmélet kifejezetten kimondja, hogy a „következetes heti kapcsolattartás” előfeltételének hiánya (mondjuk a mentorok fluktuációja miatt) azt jósolja, hogy az eredmény nem következik be, ami tesztelhető, megcáfolható állítás, nem reménykedés.

## Kapcsolat a szoftverfejlesztéssel

A változáselméletnek még az első irányítópult megépítése előtt alakítania kell a termék adatmodelljét: azonosítsák, mely láncszemekhez kell mutató, és kifejezetten azokra műszerezzenek, ne alapértelmezetten arra, amit a legkönnyebb naplózni. Ez a termékút-tervezési beszélgetéseket is fegyelmezi — egy funkció, amely a lánc egyetlen láncszemére sem képezhető le, nem nyilvánvalóan építendő. A megegyezés után épülő, előre néző elszámoltathatósági láncról lásd a [logikai modellt](../logikai-modell/), a változáselméletre támaszkodó, az értékelendő eredmények körét kijelölő módszerről a [társadalmi megtérülést](../társadalmi-megtérülés/), a köztes eredmény-láncszemek által feltételezett megkülönböztetésről pedig az [eredmények és kibocsátások](../eredmények-és-kibocsátások/) témát.

## Buktatók

- **Összetévesztés a logikai modellel.** A változáselmélet ok-okozati és magyarázó (miért hisszük, hogy működik); a logikai modell sorrendi és leíró (mi történik milyen sorrendben). Ha csak az egyiket készítik el, vagy a „miért”, vagy az elszámoltathatósági nyomvonal hiányzik.
- **A feltevések kimondatlanul hagyása.** A visszafelé térképezés egész értéke a tesztelhető feltevések felszínre hozása; az a változáselmélet, amely csak dobozokat és nyilakat sorol fel anélkül, hogy megnevezné, mi tehetné hamissá az egyes láncszemeket, puszta dekoráció.
- **Egyszeri megépítés és a fiókba süllyesztés.** A pályázathoz megírt, azóta soha át nem tekintett változáselmélet abban a pillanatban használhatatlanná válik, ahogy a bizonyítékok ellentmondani kezdenek valamelyik láncszemnek.
- **Az érintetti szempontok kihagyása.** A kizárólag megrendelők által, a frontvonalbeli munkatársak vagy kedvezményezettek bevonása nélkül épített változáselmélet hajlamos olyan feltevéseket kódolni, amelyekben a szolgáltatást nyújtók közül senki sem hisz.

## Források

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), 3. fejezet. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, a változáselméletről szóló útmutató. <https://www.tnlcommunityfund.org.uk/>
