# Nemzedékek közötti méltányosság és fenntarthatósági diszkontálás

A jövőbeli költségek és hasznok jelenértékre diszkontálása a közszféra értékelésének standard gyakorlata — lásd a [társadalmi diszkontrátát](../társadalmi-diszkontráta/) —, de bármely pozitív diszkontráta, évtizedeken vagy évszázadokon át kamatoztatva, a távoli jövőt nullához közelire zsugorítja a mai értékben. Az olyan döntéseknél, amelyek következményei egy évszázad vagy több múlva jelentkeznek — éghajlatváltozás, nukleáris hulladék, biodiverzitás-vesztés, nyugdíjrendszerek fenntarthatósága —, ez a matematikai tény etikai kérdéssé válik: a standard diszkontálás a jövő nemzedékeket érő katasztrofális kárt jelenértékben alig érdemesnek az elkerülésre mutathatja.

## Miért fontos

A Ramsey-egyenlet, amelyet Frank Ramsey vezetett le 1928-ban, a diszkontrátát két összetevőre bontja: a tiszta időpreferenciára (δ, mennyire részesítjük egyszerűen előnyben a mostot a később, a vagyontól függetlenül) és a vagyonnövekedési hatásra (η×g, mennyire diszkontálunk azért, mert a jövő nemzedékek várhatóan gazdagabbak, így egy további font kevesebbet számít nekik). Az Egyesült Királyság Green Bookjának standard hosszú távú diszkontrátája erre az egyenletre épül, és *csökkenő* ütemtervet követ egy fix ráta helyett — ez a terv Martin Weitzman „gamma-diszkontálás” munkájában gyökerezik, amely megmutatja, hogy amikor maga a jövőbeli diszkontráta bizonytalan, az alkalmazandó bizonyossági ekvivalens ráta matematikailag idővel csökken, mert az alacsony rátájú forgatókönyvek dominálni kezdenek, minél messzebbre néznek. A Stern-jelentés az éghajlatváltozás közgazdaságtanáról (2006), amelyet Sir Nicholas Stern vezetett, tovább vitte az etikai vitát: Stern azzal érvelt, hogy a tiszta időpreferenciát nulla közelére kell állítani (δ ≈ 0,1%-ot használt, amely csak a civilizációt megsemmisítő katasztrófa kis valószínűségét tükrözi, nem a jelen valódi előnyben részesítését a jövővel szemben), jóval alacsonyabb effektív diszkontrátát eredményezve, mint a hagyományos Green Book-gyakorlat, és ennek megfelelően jóval nagyobb jelenkori érvet az éghajlati cselekvés mellett. A kritikusok (különösen William Nordhaus) azt állították, hogy Stern közel nulla rátája etikailag védhető, de nem összeegyeztethető a ténylegesen megfigyelt megtakarítási és befektetési viselkedéssel. A nézeteltérés nem műszaki lábjegyzet — ez az egyetlen legnagyobb oka annak, hogy két egyformán szigorú közgazdász vadul eltérő következtetésekre juthat azzal kapcsolatban, mennyit kell a jelenlegi nemzedéknek feláldoznia a jövőért, és ezért kell a hosszú horizontú közberuházás-értékelést támogató szoftvernek feltárnia diszkontálási feltevéseit, nem egy táblázat-alapértékbe temetnie azokat.

## A matematika

```
Ramsey-egyenlet:   r = δ + η × g

  r = társadalmi diszkontráta
  δ = tiszta időpreferencia (türelmetlenségi ráta, a vagyontól függetlenül)
  η = a fogyasztás határhaszon-rugalmassága (a további fogyasztás csökkenő értéke,
      ahogy az emberek gazdagodnak)
  g = az egy főre jutó fogyasztás várható növekedési üteme

Green Book csökkenő hosszú távú ütemterv (közelítő, jelenlegi közzétett sávok):
  0–30. év:    3,5%
  31–75. év:   3,0%
  76–125. év:  2,5%
  126–200. év: 2,0%
  201–300. év: 1,5%
  301. évtől:  1,0%

Stern-jelentés paraméterei: δ ≈ 0,1%, η = 1, g ≈ 1,3%  → r ≈ 1,4%
```

## Kidolgozott példa

**1 £ elkerült kár mai értéke 100 év múlva**, három diszkontálási rendszer alatt:

```
Fix Green Book rövid távú ráta (3,5%, 100 évig állandóan):
  PV = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ 0,032 £   (3,2 penny)

Green Book csökkenő ütemterv (3,5% az 1–30. évekre, 3,0% a 31–75. évekre,
2,5% a 76–100. évekre):
  tényező(1–30)   = 1,035^30  ≈ 2,807
  tényező(31–75)  = 1,03^45   ≈ 3,782
  tényező(76–100) = 1,025^25  ≈ 1,854
  teljes tényező ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  PV = 1 / 19,68 ≈ 0,051 £   (5,1 penny)

Stern-stílusú közel nulla tiszta időpreferencia (r ≈ 1,4% fix):
  PV = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ 0,250 £   (25,0 penny)
```

Ugyanaz az egy font kár, amelyet egy évszázad múlva kerülnek el, ma 3,2, 5,1 vagy 25 penny értékű, pusztán attól függően, melyik diszkontálási konvenciót használják — nagyjából nyolcszoros tartomány, amely eldönti, hogy egy magas előzetes költségű, száz évvel későbbi megtérülésű éghajlat-mérséklési projekt egyáltalán átlép-e egy pozitív NPV-sávot. Ez a téma központi figyelmeztetésének mechanizmusa: bármely érdemben pozitív fix rátánál a kellően távoli jövőbeli kárt számtanilag törlik az értékelésből, valódi súlyosságától függetlenül.

## Kapcsolat a szoftverfejlesztéssel

- Bármely hosszú horizontú értékelési vagy üzleti eset eszköznek (infrastruktúra, éghajlati alkalmazkodás, nyugdíjmodellezés) a Green Book *csökkenő* ütemtervét kell megvalósítania, nem egyetlen fix rátát — egy fix ráta alapértelmezés csendben sokkal erősebb jövő-ellenes torzítást épít be, mint a jelenlegi brit kormányzati útmutatás előír.
- A diszkontrátát és a horizontot mindig látható, auditálható paraméterként kell megjeleníteni az értékelő szoftverben, a számítás ezekre való érzékenységét kifejezetten megmutatva (mint a fenti kidolgozott példában) — a ráta konfigurációs fájlba temetése éppen azt a „rejtett etikai választást” hívja elő, amelyre a Stern–Nordhaus-vita figyelmeztet; ez a [természeti tőke számvitelnél](../természeti-tőke-számvitel/) tett átláthatósági ponttal párosul, és általánosan a [társadalmi diszkontráta](../társadalmi-diszkontráta/) téma alapja.
- Ahol egy program hasznai kifejezetten nemzedékek közöttiek (árvízvédelem, természeti tőke helyreállítása, hosszú távú digitális infrastruktúra), a [társadalmi költség-haszon elemzésnek](../társadalmi-költség-haszon-elemzés/) legalább két diszkontálási feltevés alatt kell jelentenie eredményeit (Green Book-standard és egy alacsony rátájú érzékenységi eset) egyetlen pontbecslés helyett, hogy a döntéshozók lássák, hogyan mozgatja a válaszadást a diszkontráta megválasztása önmagában.

## Buktatók

- **Egyetlen diszkontált NPV bemutatása érzékenységi tartomány nélkül** — mivel a diszkontráta önmagában mennyire megváltoztatja a választ hosszú horizontú projekteknél, az egyráta-NPV lényegesen túlbecsüli a pontosságot; mindig jelentsenek tartományt, amely legalább a Green Book-standardot és egy alacsony rátájú forgatókönyvet átfogja.
- **A rövid távú fix ráta (3,5%) alkalmazása többévszázados értékelésre** — a Green Book saját útmutatója éppen azért írja elő a csökkenő ütemtervet, mert a fix rátát nagyjából 30 éven túl nem találták megfelelőnek; mégis használata alábecsüli a hosszú távú költségeket.
- **A δ (tiszta időpreferencia) kezelése pusztán technikai paraméterként** — Stern közel nulla értéke és a Green Book magasabb implicit értéke egyaránt csak etikai álláspontként védhető arról, mennyi súllyal tartozik a jelen a jövőnek, nem empirikusan „helyes” vagy „helytelen” számokként; a szoftvernek láthatóvá kell tennie a feltevést, ahelyett hogy egy számot objektíven helyesként mutatna be.

## Források

- Stern N. „The Economics of Climate Change: The Stern Review.” Cambridge University Press, 2006.
- Ramsey FP. „A Mathematical Theory of Saving.” The Economic Journal, 1928.
- Weitzman ML. „Gamma Discounting.” American Economic Review, 2001.
- HM Treasury. „The Green Book: Central Government Guidance on Appraisal and Evaluation” (6. melléklet,
  diszkontráta-ütemterv).
- Nordhaus WD. „A Review of the Stern Review on the Economics of Climate Change.” Journal of
  Economic Literature, 2007.
