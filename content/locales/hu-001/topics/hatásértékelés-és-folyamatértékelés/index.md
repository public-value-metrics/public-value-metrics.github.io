# Hatásértékelés és folyamatértékelés

A hatásértékelés azt kérdezi, hogy a program okozta-e a szándékolt eredményeket. A folyamatértékelés azt kérdezi, hogy a programot ténylegesen a tervek szerint szállították-e — kinek, milyen dózisban, és milyen akadályokkal vagy segítő tényezőkkel útközben. Ezek különböző kérdések, amelyek különböző módszereket igényelnek, és a HM Treasury Magenta Bookja a kettő együttes megrendelését standard gyakorlatnak tekinti, mert a gyenge vagy nulla hatásredmény önmagában értelmezhetetlen: nem mondja meg, hogy a program mögöttes elmélete volt-e téves, vagy egy jó elméletet egyszerűen soha nem szállítottak megfelelően.

## Miért fontos

A kormányzati értékelések ismételten nem találtak mérhető hatást egy programtól, miközben nem volt folyamatértékelés, amely megmagyarázta volna, miért — így a megrendelők nem tudták megkülönböztetni a „ez az ötlet nem működik” (elméleti kudarc) esetet a „ezt az ötletet soha nem próbálták ki rendesen” (megvalósítási kudarc) esettől. A Medical Research Council összetett beavatkozások folyamatértékeléséről szóló, 2015-ben a BMJ-ben közzétett útmutatója, amelyet a Magenta Book mellett széles körben idéznek, a hűséget (fidelity), a dózist és az elérést (reach) formalizálta a folyamatértékelés alapvető mérendő elemeiként. A hatásértékelés folyamatértékelés nélküli megrendelése azzal a kockázattal jár, hogy egy valóban megalapozott programtervet elvetnek, mert azt a tervezett népesség felének, a tervezett intenzitás töredékével szállították — olyan hibát, amelynek megelőzésére a rendszerépítő jó helyzetben van, mert a szállítási hűség éppen az, amit az operatív adatrendszerek közel valós időben rögzíteni tudnak.

## A matematika

```
A folyamatértékelés azt kérdezi:
 - A célnépességnek szállították-e, a tervezett dózissal/intenzitással?
 - Megfelelt-e a szállítás a logikai modell / változáselmélet tervének?
 - Milyen akadályok vagy segítő tényezők befolyásolták a szállítást?
 Módszerek: előre meghatározott küszöbökhöz mért hűségellenőrzések, esettanulmányok, interjúk,
            adminisztratív szállítási adatok.

A hatásértékelés azt kérdezi:
 - Mi változott, és ebből mennyi tulajdonítható a programnak?
 Módszerek: RCT, DiD, PSM, RDD — lásd impact-evaluation-methods — kontrafaktuálissal szemben.

Együttes diagnózis:
 Nincs hatás   + magas hűség  → elméleti kudarc: maga a modell nem hozta létre az eredményt
 Nincs hatás   + alacsony hűség → megvalósítási kudarc: a modellt soha nem tesztelték rendesen
 Van hatás     + magas hűség  → magabiztosan replikálható
 Van hatás     + alacsony hűség → további vizsgálat: a hatás törékeny vagy helyspecifikus lehet
```

## Kidolgozott példa

**Helyi önkormányzat (szülői képességfejlesztő program)**: a különbségek különbségét használó hatásértékelés +2 százalékpontos változást talál egy gyermeki jóléti mutatóban — statisztikailag nem szignifikáns. A mellette futó folyamatértékelés azt találja, hogy a program a megcélzott 500 családból csak 210-et ért el (42% elérés), és ezek közül csak 95 teljesítette az előre meghatározott 75%+ alkalomnyi részvételi hűségküszöböt — az eredeti tervezett elérés 19%-a. Következtetés: a gyenge hatásredmény megvalósítási kudarccal összeegyeztethető, nem bizonyíték arra, hogy a programmodell nem működik; a megfelelő válasz az 58%-os lemorzsolódást okozó beutalási útvonal javítása, nem a programterv feladása.

**Jótékonysági szervezet (digitális írástudási program)**: a hatásértékelés erős hatást talál (+18 százalékpont egy digitális magabiztossági pontszámon), és egy párhuzamos folyamatértékelés mind a 12 szállítási helyen 92%-os hűséget igazol a tervezett tantervhez. Együtt véve a finanszírozó magabiztosan skálázhatja a programot, mert a hatás bizonyítottan következetesen fennáll, nem egyetlen szokatlanul jó helyszín terméke.

## Kapcsolat a szoftverfejlesztéssel

A folyamatértékelési adatok éppen azok, amelyeket a szállítási rendszerek jól rögzítenek: a tervhez mért részvétel, az alkalmankénti dózis és a lemorzsolódás a beutalási vagy beiratkozási tölcsér minden szakaszában — ugyanaz a tölcsér-analitika, amelyet a mérnökök már termékfunkciókhoz építenek, itt egy társadalmi program szállítási csővezetékére alkalmazva. A hűségi és elérési mutatók közel valós idejű továbbítása a programvezetőknek, a támogatási időszak végi értékelés megvárása helyett, lehetővé teszi, hogy egy hibás beutalási útvonalat program közben javítsanak, ne csak a finanszírozási időszak lezárultával fedezzenek fel. A folyamatértékeléssel párosított ok-okozati tervekről lásd a [hatásértékelési módszereket](../hatásértékelési-módszerek/), azokról a tervekről, amelyekhez a folyamatértékelés a hűséget méri, a [változáselméletet](../változáselmélet/) és a [logikai modellt](../logikai-modell/), a szállítás ígért eredményekig követéséről pedig a [haszonmegvalósítást](../haszonmegvalósítás/).

## Buktatók

- **Csak hatásértékelés megrendelése.** Egy nulla vagy gyenge eredmény ekkor nem értelmezhető sem elméleti, sem megvalósítási kudarcként, pedig éppen ez a különbségtétel számít a következő lépés eldöntéséhez.
- **A folyamatértékelés puha kiegészítőként kezelése.** Ugyanolyan szigort és előre meghatározott hűségkritériumokat igényel, mint a hatásterv, különben anekdotává esik szét, amikor az eredmények megérkeznek.
- **A „határidőre és költségvetésen belül” összekeverése a „tervezett módon szállítva” fogalmával.** A folyamatértékelés a modellhez való hűséget ellenőrzi — dózis, célcsoport, tartalom —, nem a projektmenedzsment RAG-státuszát.
- **A hűségküszöbök előzetes rögzítésének hiánya.** Ha utólag döntik el, mi számít „elegendő dózisnak”, az egy kiábrándító hatásredmény bármilyen magyarázatát utólagos kifogásnak láttatja.

## Források

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., „Process evaluation of complex interventions: Medical Research Council
  guidance.” BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programértékelési jelentések. <https://www.nao.org.uk/>
