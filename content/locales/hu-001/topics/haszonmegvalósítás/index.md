# Haszonmegvalósítás

A haszonmegvalósítás-kezelés (benefits realization management) annak a fegyelme, hogy azonosítsák, alapszinthez kössék, nyomon kövessék és *igazolják*, hogy az üzleti esetben ígért hasznok az élesbe lépés után ténylegesen megvalósultak. Az egyesült királysági közberuházásban a HM Treasury Green Book Five Case Modelében és az Infrastructure and Projects Authority dedikált haszonkezelési útmutatójában él; enélkül az „a rendszer igénylésenként harminc percet takarított meg az ügyintézőknek” állítás örökre ellenőrizetlen állítás marad.

## Miért fontos

Az üzleti esetek ígéretek; a haszonmegvalósítás az audit. A Green Book megköveteli, hogy minden kiadási eset öt próbán menjen át — stratégiai, gazdasági, kereskedelmi, pénzügyi és irányítási —, és az irányítási esetnek *jóváhagyás előtt* ki kell fejtenie, hogyan valósulnak meg a hasznok: megnevezett felelősök, rögzített alapszintek és rögzített mérési dátumok. Az Infrastructure and Projects Authority *Benefits Management: A Guide to Realizing Benefits for Government Major Projects* útmutatója (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>) azért létezik, mert az IPA saját portfólió-jelentése a Government Major Projects Portfolióról ismételten azt találta, hogy a szállítási bizalom és a haszonmegvalósítás visszatérő gyengeségként szerepel a nagy programokban. Egy projekt „időben és költségvetésen belül” zárulhat a szállítási mérföldköveihez képest, miközben mégsem valósítja meg azokat a hasznokat, amelyek eleve indokolták a pénz elköltését — az IPA útmutatója ezt a megkülönböztetést a fegyelem egész lényegének tekinti.

## A matematika

```
Megvalósítási arány = megvalósult hasznok / előrejelzett hasznok   (hasznonként, időszakonként)

A számíthatóvá tevő mechanika:
  az alapszint rögzítése az élesbe lépés ELŐTT (különben a különbség mérhetetlen)
  minden haszon: megnevezett felelős, mutató, adatforrás, mérési ütemterv
  az előrejelzés optimizmus-torzítással korrigálva az értékeléskor (Green Book előírás)
  a hasznok készpénzt felszabadító / kapacitást felszabadító / minőségi kategóriákba sorolva,
  külön követve és jelentve
```

## Kidolgozott példa

**Helyi önkormányzat**: egy digitális tervezési kérelmi portál üzleti esete évente a következőt ígérte: 300 000 £ nyomtatási és postázási rezsicsökkenés (készpénz), 4500 felszabadított ügyintézői óra (kapacitás) és javuló kérelmezői elégedettség (minőségi). Tizenkét hónappal az élesbe lépés után:

```
Haszon            Előrejelzés  Megvalósult  Arány  Bizonyíték
Készpénz-megtakarítás 300 000 £ 210 000 £    70%    pénzügyi főkönyv vs alapév
Ügyintézői órák   4500         3200         71%    idő-mozgás minta
Elégedettség      +8 szp       +11 szp      138%   kérelmezői felmérési adatok

A felülvizsgálatból levont lépések (a haszonmegvalósítás lényege):
a készpénz-elmaradás két szolgáltatási területre vezethető vissza, amelyek kivételként
még papíralapú kérelmeket dolgoznak fel → a kivételes útvonal lezárása;
a következő üzleti eset optimizmus-torzítási korrekcióját 10%-ról 25%-ra emelték
az ennek az esetnek az előrejelzési hibája alapján.
```

A 70%-os megvalósítási arány nem kudarc — tudás, amely lehetővé teszi, hogy a következő előrejelzés jobban kalibrált legyen. Egy nem mért eset örökre 100%-ot állított volna, és a pénzügyi csapatnak nem lett volna alapja megkérdőjelezni.

## Kapcsolat a szoftverfejlesztéssel

A mérnöki szervezetek rutinszerűen hagynak jóvá platform- és eszközbefektetéseket előrejelzett haszon alapján, és szinte soha nem auditálják őket utólag — pontosan az a patológia, amelynek javítására a haszonmegvalósítás-kezelés létezik. A könnyű átvétel: minden lényegességi küszöb feletti javaslat megnevez egy haszonfelelőst, egy alapszint-mutatót és egy rögzített felülvizsgálati dátumot (jellemzően hat hónappal az élesbe lépés után), és a korábbi javaslatok megvalósítási arányai csökkentsék, mennyire bízik a szervezet egy csapat vagy szállító következő előrejelzésében. Ez bezárja a kört a [Green Book-értékeléshez](../green-book-értékelés/), amely az előrejelzést állítja, amelyet ez a fegyelem auditál, és ugyanez a logika áll amögött a széles körben jelentett megállapítás mögött, hogy a generatív MI-kísérletek nagy többsége nem mutat mérhető megtérülést — lásd [MI-termelékenység a közszférában](../mi-termelékenység-a-közszférában/) — mert azok a kísérletek, amelyek *hoztak* értéket, szinte kivétel nélkül azok voltak, amelyeknek az elejétől megnevezett, nyomon követhető haszonsoruk volt. Függ attól is, hogy különbséget tegyenek aközött, amit ténylegesen leszállítottak, és amit ténylegesen megvalósítottak — lásd [eredmények és kibocsátások](../eredmények-és-kibocsátások/).

## Buktatók

- **Nincs élesbe lépés előtti alapszint**: a végzetes, kijavíthatatlan mulasztás — enélkül soha nem számítható megvalósítási arány, csak állítható.
- **Haszon-árvaság**: a megnevezett felelős nélküli haszonnak nincs, aki az adatokat gyűjtse, és minden portfólió-felülvizsgálat alapértelmezetten „nagyjából a terv szerint” jelenti.
- **Haszonok kétszeri számítása egy programportfólióban**: két projekt, amelyek ugyanazt a felszabadított ügyintézői kapacitást állítják hasznukként — tartsanak egyetlen haszonnyilvántartást a portfólióban ennek elkapására.
- **Megvalósítási színház**: a könnyű minőségi nyereségek kiemelt mérése és jelentése, miközben a készpénz- és kapacitássorok csendben vizsgálatlanul maradnak.
- **A szállítás összekeverése a megvalósítással**: egy projekt, amely „időben és költségvetésen belül” zárja mérföldköveit, semmit nem mond arról, hogy az előrejelzett haszon valaha ténylegesen bekövetkezett-e — az IPA útmutatója ezeket két külön kérdésként kezeli két külön bizonyítéknyomvonallal.

## Források

- HM Treasury, Green Book és Five Case Model útmutató. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
