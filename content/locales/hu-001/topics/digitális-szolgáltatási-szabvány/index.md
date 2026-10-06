# Digitális szolgáltatási szabvány

A GOV.UK Service Standard az a kapu, amelyen minden központi kormányzati digitális szolgáltatásnak át kell mennie, mielőtt élesbe léphet: 14 közzétett pont, amelyet egy független bizottság értékel minden szállítási fázis végén. Ez az a mechanizmus, amely a „építsünk jó közszolgáltatásokat” jelszót megfelelt/nem felelt meg döntéssé alakítja papírnyomvonallal — és a 2012-es Government Digital Strategy „digital by default” megbízásának közvetlen leszármazottja.

## Miért fontos

A Service Standard létezése előtt a kormányzati IT-kudarc ritkán vált láthatóvá az indulásig, és ritkán volt olyan döntésnek tulajdonítható, amelyre bárki rámutathatott. A 2012-es Government Digital Strategy arra kötelezte a tárcákat, hogy a 25 legnagyobb forgalmú, nyilvánosság felé forduló tranzakciós szolgáltatást „digital by default” módon tervezzék újra, és a kötelezettséget megfelelőségi mechanizmussal támasztotta alá: a szolgáltatások nem léphettek élesbe a GOV.UK-n anélkül, hogy kiállnának egy akkor 26 pontos szabvány szerinti szolgáltatásértékelést (amelyet 2019-ben 18 pontra vontak össze, és ma a hatályos 14 pontos szabvány, három csoportot lefedve — a felhasználói szükségletek megértése, jó szolgáltatás nyújtása és a megfelelő technológia használata). A szolgáltatásértékelés valódi esemény: a GDS vagy tárcai értékelők bizottsága átnézi a bizonyítékokat, kérdez a csapatot, és minden ponthoz megfelelt, nem felelt meg vagy „nem teljesült” ítéletet ad, amelyet a szolgáltatás értékelési oldalán közzétesznek. Az értékelés megbukása blokkolja, hogy a szolgáltatás a privát bétából a nyilvános bétába, vagy a bétából élesbe lépjen — valódi kapu, nem felülvizsgálat.

## A matematika

A Service Standard keretrendszer, nem képlet, de szakaszos döntési szerkezetként működik:

```
Felfedezés → Alfa értékelés → Béta értékelés → Éles értékelés
            (nem kötelező      (kötelező a        (kötelező a „béta”
             minden              nyilvános béta      címke eltávolítása
             szolgáltatásra,     indítása előtt)     és a régi csatorna
             de ajánlott)                            bezárása előtt)

Minden értékelés: bizonyíték + csapatinterjú → bizottsági ítélet pontonként
  Megfelelt / Részben megfelelt / Nem felelt meg
Összesített eredmény: Megfelelt / Feltételekkel megfelelt / Megbukott (újraértékelés szükséges)

A bukás költsége ≈ a javításhoz szükséges következő sprintciklus költsége
                   + a [csatornaváltási megtakarítások](../csatornaváltási-megtakarítások/)
                     késedelme, amelyek megvalósítására a szolgáltatást finanszírozták
```

A 10. pont („határozza meg, hogyan néz ki a siker, és tegyen közzé teljesítményadatokat”) táplálja a [tranzakciónkénti költséget](../tranzakciónkénti-költség/) és a [szolgáltatási szabványok és tranzakciós mutatók](../szolgáltatási-szabványok-és-tranzakciós-mutatók/) témát — a Szabvány a mérést írja elő, nem csupán a szolgáltatást.

## Kidolgozott példa

**Helyi önkormányzati lakhatási kérelmi szolgáltatás**: egy tanácsi csapat béta-értékelésére olyan szolgáltatással jut el, amely a 14 pontból 11-nek megfelel, de megbukik az 5. ponton („gondoskodjon arról, hogy mindenki használhassa a szolgáltatást”), mert nincs támogatott digitális útvonal az internet-hozzáférés nélküli kérelmezőknek, és a 9. ponton, mert a személyes adatokat egyszerű szövegben naplózzák az alkalmazáshiba-nyomkövetésekben.

```
A bukás közvetlen költsége:
  Újraértékelési időpont: 6–8 hét várakozás a következő elérhető bizottságra
  Javító sprint: 2 fejlesztő × 3 hét × 550 £/nap ≈ 34 650 £
  Támogatott digitális csatorna tervezése: 1 kutató × 2 hét ≈ 5000 £

Késedelmi költség: a szolgáltatás előrejelzés szerint az évi 18 000 lakhatási
érdeklődés 40%-át tolta volna át 8,50 £-os telefonhívásokról 0,20 £-os digitális
tranzakciókra
  = 7200 × (8,50 £ − 0,20 £) = 59 760 £/év elmaradt, a ~2 hónapos
    késedelemre arányosítva ≈ 9960 £

A megbukott értékelés teljes költsége ≈ 49 610 £
```

A számtan lényege nem a pontosság — hanem az, hogy a megbukott értékelésnek valódi, kiszámítható ára van, és éppen ezért van foga a kapunak.

## Kapcsolat a szoftverfejlesztéssel

A mérnökök számára a Szabvány ugyanannyira architektúra- és szállítási ellenőrzőlista, mint szakpolitikai dokumentum: a 11. pont („válassza a megfelelő eszközöket és technológiát”) és a 12. pont („tegye nyílttá az új forráskódot”) közvetlen mérnöki döntések, a 14. pont („működtessen megbízható szolgáltatást”) pedig ugyanazokat az SLO-kat és incidenskezelési folyamatokat követeli meg, mint bármely éles rendszer. Ez ennek a témacsoportnak az ernyőkeretrendszere — a [tranzakciónkénti költség](../tranzakciónkénti-költség/) és a [csatornaváltási megtakarítások](../csatornaváltási-megtakarítások/) azok, amelyeket a Szabvány pénzügyileg védeni próbál, a [digitális befogadás](../digitális-befogadás/) az, amit az 5. pont biztosítani hivatott, és a [kormányzat mint platform](../kormányzat-mint-platform/) komponensei (GOV.UK Notify, Pay, One Login) nagyrészt alapértelmezetten teljesítik a 13. pontot („használjon és járuljon hozzá nyílt szabványokhoz, közös komponensekhez és mintákhoz”). A „megfelelő eszközök” pont beszerzési döntésekben való megjelenéséről lásd még az [építeni vagy venni a kormányzatban](../építeni-vagy-venni-a-kormányzatban/) témát.

## Buktatók

- **Az értékelés kezelése indulási napi megfelelőségi pipálásként**: azok a csapatok, amelyek a béta-értékelésük előtt egy héttel olvassák el először a 14 pontot, kiszámíthatóan megbuknak; a Szabványnak a felfedezéstől kezdve kell alakítania a döntéseket, nem utólag auditálnia őket.
- **A prototípus értékelése a szolgáltatás helyett**: egy csillogó demó átmehet olyan felülvizsgálaton, amelyen a szolgáltatás éles, támogatott digitálisan befogadó, incidenskezelt változata megbukna — az értékelőknek ezt a rést kell vizsgálniuk, de az önigazolt kisebb szolgáltatások gyakran kihagyják.
- **Nincs újraértékelés a skálázás előtt**: az 5%-os bevezetésnél értékelt szolgáltatás nem marad automatikusan megfelelő 100%-nál — a terhelés, a hibakereslet és a szélsőséges esetek felhasználói mind változnak.
- **A Service Standard összekeverése egy tervezési rendszerrel**: a GOV.UK Design System komponensei teljesítenek néhány pontot (következetesség, akadálymentesség), de a Szabvány a csapatszerkezetet, az agilis gyakorlatot és az adatetikát is lefedi — egy jól stílusozott szolgáltatás is megbukhat a 2., 6. vagy 9. ponton.

## Források

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, 14. pont: működtessen megbízható szolgáltatást. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, szolgáltatásértékelések. <https://www.gov.uk/service-manual/service-assessments>
