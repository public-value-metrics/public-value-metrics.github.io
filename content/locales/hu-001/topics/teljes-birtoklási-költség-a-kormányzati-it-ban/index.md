# Teljes birtoklási költség (TCO) a kormányzati IT-ban

A teljes birtoklási költség (total cost of ownership) egy rendszer teljes életciklus-költsége — a beszerzés plusz az üzemeltetés minden éve —, közös időpontra diszkontálva. A kormányzati IT-ban a legmegbízhatóbb előrejelzési hiba az, hogy a szállítókat vagy változatokat csak a beszerzési ár alapján hasonlítják össze, miközben az üzemeltetés és a karbantartás jellemzően az élettartam-számla felét és négyötödét között adja.

## Miért fontos

A HM Treasury Green Bookja megköveteli, hogy a Five Case Model üzleti eset pénzügyi esete a teljes élettartam-költségeket fedje le, ne csak a tőkekiadást — mégis a National Audit Office ismételten azt találta, hogy a tárcák IT-beruházásokat hagynak jóvá hiányos vagy optimista üzemeltetési költség-előrejelzés alapján, és csak az éles üzem után, a tőkeköltségvetési sor lezárulta után fedezik fel a valódi működési költséget. A Government Digital Service és a Central Digital and Data Office Technology Code of Practice-e (<https://www.gov.uk/guidance/the-technology-code-of-practice>) részben azért tereli a tárcákat a felhő és a hétköznapi tárhely felé, mert láthatóvá és összehasonlíthatóvá teszi a folyamatos költséget, ahelyett hogy egyetlen tőkebeszerzési számba temetné, amely jóváhagyáskor vonzóan alacsonynak látszik, három évvel később pedig drágán téves.

## A matematika

```
TCO = Beszerzési költség + Σ(t=1..N) Éves üzemeltetési költség_t / (1+r)^t
      − maradványérték (diszkontálva)

r = HM Treasury Green Book standard társadalmi diszkontráta, 3,5%/év
    (csökkenő ráta-ütemterv a 30 évet meghaladó horizontokra)

Üzemeltetési költség-összetevők: tárhely/licencelés, támogatás és karbantartás,
biztonsági javítás és megfelelőség, munkatársi idő, tervezett frissítés/migráció
```

Lásd a [társadalmi diszkontrátát](../társadalmi-diszkontráta/), hogy miért számít a diszkonttényező egy tipikus 5–10 éves rendszerélettartam alatt, és az [építeni vagy venni a kormányzatban](../építeni-vagy-venni-a-kormányzatban/) témát, hogyan táplálja a TCO az építeni/venni döntést.

## Kidolgozott példa

Egy tárca két ügykezelő rendszert hasonlít össze 5 éves horizonton a Green Book 3,5%-os diszkontrátájával.

```
A rendszer: tőke 3 500 000 £, üzemeltetés 250 000 £/év
B rendszer: tőke 1 800 000 £ (olcsóbbnak látszik), üzemeltetés 650 000 £/év
            (nagyobb szállítói támogatási és integrációs teher)

Naiv összehasonlítás csak a tőkén: B nyer, 1,8 M£ < 3,5 M£.

Diszkonttényező-összeg, 5 év 3,5%-on: 0,966+0,934+0,902+0,871+0,842 ≈ 4,515

TCO_A = 3 500 000 + 250 000 × 4,515 = 3 500 000 + 1 128 750 = 4 628 750 £
TCO_B = 1 800 000 + 650 000 × 4,515 = 1 800 000 + 2 934 750 = 4 734 750 £
```

A TCO megfordítja a naiv döntést: a B rendszer öt év alatt, a működési költség diszkontálása és összegzése után, kissé drágább, mert üzemeltetési költségének részaránya az élettartam-költségen belül 62% (2 934 750 / 4 734 750) az A rendszer 24%-ával szemben — a „a karbantartás a számla többsége” megállapítás konkrét példája, amelyet teljesen elrejt a címkeárak összehasonlítása.

## Kapcsolat a szoftverfejlesztéssel

A TCO az a szám, amelynek minden [építeni vagy venni](../építeni-vagy-venni-a-kormányzatban/) döntést és minden [technikai adósság](../technikai-adósság-mint-közérték-erózió/) törlesztési esetet fegyelmeznie kell, mert az adósságkamat és a halasztott karbantartás egyaránt olyan üzemeltetési költségsor, amely ugyanabba a diszkontált összegbe tartozik, akár követte őket valaki, akár nem. A platform- vagy szállítóválasztást javasló mérnököknek a teljes TCO-táblázatot kell bemutatniuk, nem a beszerzési árat, mert a beszerzési ár éppen az a szám, amelyre való kizárólagos támaszkodást a Green Book pénzügyi esete megakadályozni hivatott. A TCO az őszinte nevező az [érték a pénzért](../érték-a-pénzért/) ítéletekhez is — a VFM a hasznot a költséghez hasonlítja, és egy alulszámolt költségsor az üzleti eset minden VFM-arányát felfújja.

## Buktatók

- **Csak tőke-összehasonlítás**: a leggyakoribb beszerzési hiba — a szállítói listaárak összehasonlítása minden változathoz illesztett üzemeltetési költség-előrejelzés nélkül.
- **A kilépési és migrációs költségek kizárása**: a szerződés végi adatkinyerés, az újraplatformálás és a szállítói bezárási büntetések valódi TCO-sorok, amelyek ritkán jelennek meg az eredeti üzleti esetben.
- **A biztonsági és megfelelőségi költség kizárása**: a javítási ütem, az akkreditáció megújítása és az auditköltség a rendszer korával és összetettségével nő — lásd [a közszféra kiberbiztonságának értéke](../a-közszféra-kiberbiztonságának-értéke/) — és rutinszerűen kimarad az üzemeltetési előrejelzésből.
- **Diszkontálatlan összehasonlítás eltérő költségprofilú változatok között**: egy tőkeigényes és egy üzemeltetésigényes változat diszkontálás nélküli összehasonlítása rendszerszerűen azt a változatot részesíti előnyben, amely véletlenül több költséget halaszt későbbi évekre.

## Források

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
