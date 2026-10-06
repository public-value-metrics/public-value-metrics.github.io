# Bizalmi és legitimitási mutatók

A legitimitás és támogatás Mark Moore „stratégiai háromszögének” három szára közül az egyik a *Creating Public Value* (1995) című művében — a közérték maga és a működési képesség mellett —, és ez az a szár, amelyet a leggyakrabban hagynak mérés nélkül, mert a költségvetéstől vagy a kibocsátásszámtól eltérően a legitimitáshoz nincs nyilvánvaló egyetlen szám rendelve. A bizalmi és legitimitási mutatók azoknak a helyettesítő mérőszámoknak a családja, amelyekkel a kormányok ezt a rést betöltik: intézményi bizalmi felmérések, felügyeleti szervek bizalmi értékelései, panasz- és fellebbezési adatok, valamint politikai/törvényhozási támogatási mutatók.

## Miért fontos

Moore érve az, hogy az a közigazgatási vezető, aki valódi értéket szállít, de elveszíti a politikai és közlegitimitást, végül elveszíti azt az engedélyező környezetet, amely a szállítás folytatásához kell — a finanszírozást megvágják, a megbízásokat szűkítik, és a szolgáltatást kiéheztetik, bármilyen jók is az eredményei. A legitimitás ezért nem egy szállítási eredménylaphoz utólag hozzácsavarozott PR-gondolat; teherviselő bemenet ahhoz, hogy a küldetés egyáltalán folytatódhasson, ezért áll egyenrangú szempontként a [közérték-eredménylapon](../közérték-eredménylap/), nem lábjegyzetként. Az OECD „Trust in Government” felmérési programja a vezető országok közötti kísérlet ennek számszerűsítésére: azt követi, hogy az OECD-tagállamok állampolgárainak mekkora hányada mondja, hogy bízik nemzeti kormányában, és hosszú távú adatai azt mutatják, hogy a bizalom rendkívül érzékeny a sokkokra — mind a 2008-as pénzügyi válság, mind a COVID-19-világjárvány éles nemzeti szintű ingadozásokat okozott, amelyeket gyakran csak részleges helyreállás követett, az OECD elemzése pedig következetesen azt találja, hogy az észlelt *kompetencia* (azt szállítja-e a kormány, amit ígér) és az észlelt *méltányosság/integritás* (korrupció vagy kivételezés nélkül jár-e el a kormány) a bizalmi szám két legerősebb mozgatója, megkülönböztetve bármely egyedi tranzakcióval való elégedettségtől. A kormányok egyre inkább finomabb szinten is megpróbálják operacionalizálni a legitimitást — az Egyesült Királyság független szabályozói és felügyeleti szervei (a National Audit Office, a Parliamentary and Health Service Ombudsman, az olyan ágazati szabályozók, mint az Ofsted és a Care Quality Commission) intézményesített legitimitás-ellenőrzésként működnek, a „bízik-e még a nyilvánosság ebben a szolgáltatásban” kérdést auditálható értékelésekké alakítva.

## A matematika

A bizalom és legitimitás keretrendszer-jellegű téma, amelynek használható kvantitatív helyettesítői:

```
Intézményi bizalmi index (OECD-stílusú)
  = a felmérés válaszadóinak %-a, akik „igen”-nel válaszolnak egy kormányba vetett bizalmi kérdésre,
    időben követve, demográfiai csoportok szerint bontva

Legitimitási helyettesítő-készlet (egyetlen szám sem helyettesíti a konstruktumot):
  - Megalapozott panaszok 1000 szolgáltatás-igénybevevőre (ombudsman vagy belső panaszadat)
  - Bírósági felülvizsgálat / fellebbezések sikerességi aránya a szerv döntéseivel szemben
  - Független szabályozói/felügyeleti értékelés (pl. „kiemelkedő”-től „elégtelen”-ig sávok)
  - Törvényhozási/felügyeleti bizottsági bizalmi szavazatok vagy kritikus jelentések gyakorisága
  - Információszabadság-kérelmek volumene és a közzétételi/elutasítási arány, az észlelt
    átláthatóság helyettesítőjeként

A legitimitást megerősítik, nem kiszámítják: a védhető legitimitás-értékelés
több fentit háromszögel, nem támaszkodik egyetlen helyettesítőre.
```

## Kidolgozott példa

**Nemzeti adóhatóság**: legitimitási háromszögelés egy éves közérték-jelentéshez.

```
OECD-stílusú bizalmi helyettesítő (tárcaspecifikus bizalmi felmérés):
  a válaszadók 58%-a mondja, hogy bízik abban, hogy a hatóság „tisztességesen bánik velem”
  (két évvel korábbi 64%-ról)

Panaszadatok:
  Megalapozott panaszok: 4,2 1000 adófizetői interakcióra (3,1-ről 1000-re)

Ombudsman-beutalások:
  Beutalások a független Adjudicator's Office-hoz: 1850 az évben, ebből
  61% teljesen vagy részben megalapozott a hatósággal szemben (az előző évi 48%-ról)

Mindháromat együtt olvasva: a bizalom esik, a megalapozott panaszok nőnek, és
a független ombudsmani megállapítások egyre inkább a hatóság ellen döntenek —
három független jel konvergál ugyanabba az irányba, ami ezt hiteles legitimitási
megállapítássá teszi, nem pusztán zajjá egyetlen sorozatban.
```

E számok egyetlen mozgása gyenge bizonyíték lenne; három független mérőszám együttes mozgása ugyanabban az időszakban az a minta, amely a legitimitási állítást védhetővé teszi.

## Kapcsolat a szoftverfejlesztéssel

A legitimitási mutatókat ritkán állítja elő egyetlen csapat irányítópultja, ami maga a tervezési tanulság: olyan jelentési csővezetékeket építsenek, amelyek független külső forrásokból (ombudsmani ügykezelő rendszerek, szabályozói értékelési hírcsatornák, felmérési szolgáltatók) tudnak adatot felvenni és egyeztetni, ahelyett hogy a legitimitás-jelentést kizárólag belső mutatóként architektálnák, mert a belsőleg származtatott legitimitási állítások („megbízhatónak értékeljük magunkat”) kevés bizonyító erővel bírnak — ugyanaz a függetlenségi probléma, amelyet a [közérték-eredménylap](../közérték-eredménylap/) legitimitás-szempontjánál megjegyeztünk. A panasz- és fellebbezési adat-csővezetékek megérdemlik ugyanazt az adatminőségi szigort, mint bármely [eredményalapú fizetési](../eredményalapú-fizetés-és-társadalmi-hatású-kötvények/) szerződéseket tápláló eredmény-csővezeték, mert egy alulbejelentett vagy rosszul kategorizált panaszadatkészlet csendben alábecsüli a legitimitási problémát, mielőtt az egy évvel később egy bizalmi felmérésben láthatóvá válna. A tranzakciószintű megfelelőről lásd az [állampolgári elégedettségi mutatókat](../állampolgári-elégedettségi-mutatók/), ennek a szárnak a teljes stratégiai háromszög keretrendszeréről pedig a [közértéket](../közérték/).

## Buktatók

- **Az elégedettség kezelése a legitimitás helyettesítőjeként**: egy állampolgár elégedett lehet egyetlen tranzakció felületével, miközben általában nem bízik az intézményben (vagy fordítva) — lásd [állampolgári elégedettségi mutatók](../állampolgári-elégedettségi-mutatók/), miért kell a kettőt külön jelenteni.
- **Egyetlen önjelentett mutatóra támaszkodás**: egy belsőleg lefuttatott bizalmi felmérés független megerősítés (ombudsman-adatok, szabályozói értékelések) nélkül könnyen elintézhető önértékelésként; háromszögeljenek.
- **A demográfiai bontás figyelmen kívül hagyása**: az összesített nemzeti bizalmi számok elfedhetik az egyes csoportok (életkor, etnikai hovatartozás, jövedelem vagy régió szerint) élesen eltérő legitimitását — az OECD saját Trust in Government kiadványai éppen ezért bontanak.
- **Egyetlen sokk okozta visszaesés állandó trendként olvasása**: a bizalmi számok válságok (pénzügyi összeomlások, világjárványok, nagy horderejű botrányok) körül élesen mozognak és részben helyreállnak; egyetlen sokk utáni adatpontot nem szabad további adat nélkül hosszú távú csökkenéssé extrapolálni.

## Források

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, „Trust in Government.” <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, éves ügyviteli statisztikák.
  <https://www.ombudsman.org.uk/>
