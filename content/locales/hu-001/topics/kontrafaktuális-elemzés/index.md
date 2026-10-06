# Kontrafaktuális elemzés

A kontrafaktuális (counterfactual) annak a becslése, hogy mi történt volna egy beavatkozás hiányában. Enélkül egy program indulása után megfigyelt változás nem különböztethető meg attól a változástól, amely úgyis bekövetkezett volna — nincs kontrafaktuális, nincs hatásbizonyíték, bármilyen meggyőzőek is az előtte-utána számok. A HM Treasury Magenta Bookja a hiteles kontrafaktuális megalkotását a hatásértékelés központi módszertani feladatának tekinti, fontosabbnak bármely más egyedi tervezési döntésnél.

## Miért fontos

„A bűnözés 15%-kal csökkent a program bevezetését követő évben” nem bizonyíték arra, hogy a program működött, hacsak nem tudjuk, mi történt volna a bűnözéssel nélküle — a bűnözés ettől független gazdasági vagy demográfiai trendek miatt úgyis 20%-kal csökkenhetett volna, ami azt jelentené, hogy a program valójában ronthatott a helyzeten a kontrafaktuálishoz képest, bár a nyers szám javult. Ez a legtöbb közszféra- és társadalmi szektorbeli hatásállítás leggyakoribb elemzési hibája: az előtte-utána összehasonlítás összetévesztése az ok-okozati bizonyítékkal. A Magenta Book kifejezetten kimondja, hogy a hatásértékelés egy kontrafaktuális kérdésre válaszol — „milyen különbséget okozott ez a beavatkozás?” — és a válasz megköveteli a meg nem történt világ becslését, nem csupán leírását.

A különböző módszerek különböző bizonyossági fokkal alkotják meg a kontrafaktuálist, és a kormányzati értékelési útmutatók ennek megfelelően rangsorolják őket. A randomizált kontrollált vizsgálatok (RCT), ahol az egyéneket vagy területeket véletlenszerűen osztják be a beavatkozás megkapására vagy meg nem kapására, adják a legerősebb kontrafaktuálist, mert a randomizálás biztosítja, hogy a kezelt és a kontrollcsoport átlagosan csak a beavatkozás megkapásában különbözik. A Cabinet Office és a What Works Network a Behavioural Insights Team 2012-es „Test, Learn, Adapt” jelentése óta támogatja az RCT-ket a brit közpolitikában, éppen mert a gyengébb tervek érzékenyek a zavaró tényezőkre (confounding) — a megfigyelt különbség azt tükrözheti, hogy ki választotta a részvételt, nem a program hatását. Ahol a randomizálás kivitelezhetetlen vagy etikátlan (ahogy az gyakran előfordul törvényi jogosultságú programoknál vagy az egész népességre kiterjedő szakpolitikai változtatásoknál), a Magenta Book kifejezett hierarchiát ad gyengébb, de még hasznos alternatívákról: illesztett összehasonlító csoportok, különbségek különbsége (difference-in-differences) tervek, regressziós diszkontinuitás a jogosultsági küszöbök körül, és végső esetben az egyszerű előtte-utána összehasonlítás — egyértelműen a bizonyíték leggyengébb formájaként megjelölve, amely hajlamos a program hatását összekeverni mindennel, ami ezzel egy időben megváltozott.

## A matematika

A kontrafaktuális keretezés, minden módszerre alkalmazható:

```
Becsült hatás = Eredmény(beavatkozással) − Eredmény(kontrafaktuális: beavatkozás nélkül)

NEM:
Becsült hatás ≠ Eredmény(utána) − Eredmény(előtte)   [az időt összekeveri a kezeléssel]
```

A különbségek különbsége, a kormányzati értékelés egyik leggyakoribb kvázikísérleti terve, a kezelés hatását úgy különíti el, hogy kivonja az összehasonlító csoport saját előtte-utána változását:

```
DiD-becslés = [Eredmény(kezelt, utána) − Eredmény(kezelt, előtte)]
            − [Eredmény(összehasonlító, utána) − Eredmény(összehasonlító, előtte)]
```

Ez kiküszöböli a mindkét csoportra közös trendet (pl. mindenkit érintő országos gazdasági elmozdulást), és csak a beavatkozásnak tulajdonítható differenciális változás marad.

## Kidolgozott példa

**Foglalkoztatási program, előtte-utána (gyenge terv)**: egy álláskeresést segítő program jelentése szerint a résztvevők foglalkoztatottsága egy év alatt 40%-ról 55%-ra nőtt — naiv következtetés: „+15 százalékpont a programnak köszönhetően”.

**Ugyanaz a program, különbségek különbsége (erősebb terv)**: hasonló nem résztvevők illesztett összehasonlító csoportja ugyanabból a helyi munkaerőpiacról ugyanabban az évben 38%-ról 47%-ra növekvő foglalkoztatottságot mutat (országos gazdasági fellendülés zajlott).

```
A kezelt csoport változása:        55% − 40% = +15 százalékpont
Az összehasonlító csoport változása: 47% − 38% = +9 százalékpont

DiD-becslés (a program valódi hatása) = 15 − 9 = +6 százalékpont
```

A becsületesen tulajdonítható hatás 6 százalékpont, nem 15 — a látszólagos előtte-utána javulás több mint fele a programtól függetlenül is bekövetkezett volna, ugyanazon gazdasági fellendülés hatására, amely az összehasonlító csoportot is emelte.

**Regressziós diszkontinuitás, jogosultsági küszöb**: egy támogatási program csak az 50-nél kevesebb alkalmazottat foglalkoztató vállalkozások számára érhető el. A küszöb alatti (45–49 alkalmazott, jogosult) és fölötti (50–54 alkalmazott, nem jogosult) vállalkozások eredményeinek összehasonlítása hiteles kontrafaktuálist ad, mert egy önkényes közigazgatási határ két oldalán a vállalkozások egyébként hasonlók — a küszöb, nem valamely mögöttes vállalkozási jellemző dönti el a jogosultságot. A két csoport között csak a küszöbön megfigyelt 2000 £-os átlagos eredménykülönbség jóval nagyobb biztonsággal tulajdonítható a támogatásnak, mint az összes jogosult és az összes nem jogosult (méretben szisztematikusan különböző) vállalkozás egyszerű összehasonlítása.

## Kapcsolat a szoftverfejlesztéssel

A kontrafaktuális gondolkodásnak alakítania kell, hogyan tervezik a hatáskövető rendszereket és értékelési folyamatokat a kormányzati és társadalmi szektorbeli szoftverekhez:

- Építsék be az összehasonlító csoport rögzítését a rendszerbe az elejétől — rögzítsék, ki volt jogosult, de nem iratkozott be, vagy egy illesztett nem résztvevő kohorszot — ahelyett hogy utólag pótolnák, amikor egy program már lezajlott és csak előtte-utána adat van.
- Ahol a randomizálás megvalósítható (fokozatos bevezetés, egyes felhasználóknak másoknál előbb engedélyezett digitális szolgáltatás), úgy műszerezzék a rendszert, hogy a véletlen beosztás lekérdezhető mezőként megmaradjon; a fokozatos bevezetés véletlenül megsemmisíti saját értékelési értékét, ha a beosztási sorrendet nem naplózzák.
- Ez az alapmódszer a [hatásértékelési módszerek](../hatásértékelési-módszerek/) mögött, és ez különbözteti meg a [hatásértékelést a folyamatértékeléstől](../hatásértékelés-és-folyamatértékelés/), amely utóbbi azt kérdezi, hogy a programot a tervek szerint szállították-e, nem azt, hogy okozott-e hatást.
- A [többlethatás és holtteher](../többlethatás-és-holtteher/), valamint a [kiszorítás és tulajdonítás](../kiszorítás-és-tulajdonítás/) gyökerében mindkettő kontrafaktuális kérdés — a holtteher az, hogy „mi lett volna ez a konkrét eredmény a beavatkozás nélkül”, korrekciós szinten alkalmazva, nem teljes értékelési tervként.

## Buktatók

- **Az előtte-utána kezelése ok-okozati bizonyítékként.** Ez a leggyakoribb és legsúlyosabb hiba a közszféra és társadalmi szektor hatásjelentésében; az előtte-utána változás összekeveri a program hatását mindennel, ami ugyanezen idő alatt megváltozott.
- **Olyan összehasonlító csoport használata, amely szisztematikusan különbözik a kezelttől.** Az illesztett összehasonlító csoportnak a releváns jellemzőkben valóban hasonlónak kell lennie (lásd a [kontrafaktuális elemzés](../kontrafaktuális-elemzés/) módszerhierarchiáját a Magenta Bookban); a programrésztvevők (akik jelentkeztek és gyakran motiváltabbak) összehasonlítása a nem résztvevőkkel (akik nem) a programhatásnak álcázott szelekciós torzítás kockázatát hordozza.
- **A randomizálási lehetőségek elpusztítása rossz szolgáltatástervezéssel.** A fokozatos vagy randomizált bevezetés csak akkor őrzi meg értékelési értékét, ha a beosztás valóban véletlenszerű és rögzített — ha helyi vezetők választják meg, ki kerül előre, az meghiúsítja a célt.
- **Gyenge tervből túlzott pontosság állítása.** Az előtte-utána becslést tájékoztató jellegűnek kell bemutatni, nem mért hatásmértékként; a Magenta Book bizonyítékhierarchiája azért létezik, hogy az állítás ereje megfeleljen az azt előállító terv erejének.

## Források

- HM Treasury, „The Magenta Book: Central Government Guidance on Evaluation” (2020) és a kvázikísérleti módszerekről szóló kiegészítő útmutatója. <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, „Test, Learn, Adapt: Developing Public Policy with Randomized Controlled Trials” (2012).
- What Works Network, a bizonyítékstandardokról szóló útmutató. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton University Press, 2009 (standard hivatkozás a különbségek különbsége és a regressziós diszkontinuitás módszereihez).
