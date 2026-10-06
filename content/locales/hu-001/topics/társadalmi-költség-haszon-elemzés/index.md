# Társadalmi költség-haszon elemzés (SCBA)

A társadalmi költség-haszon elemzés egy politika vagy program minden költségét és hasznát — piacit és nem piacit — közös pénzegységre váltja, a jövőbeli áramlásokat jelenértékre diszkontálja, és egymással szembeállítva egyetlen számot állít elő: jobb helyzetbe hozza-e a társadalmat ez a javaslat, és mennyivel?

## Miért fontos

Az SCBA a [Green Book-értékelés](../green-book-értékelés/) gazdasági esetének alapértelmezett mennyiségi módszere: a HM Treasury útmutatója pozitív nettó társadalmi jelenértéket (NPSV) kér a javaslatoktól mindenütt, ahol a hasznok hitelesen pénzre válthatók, a fizetési hajlandóságot használva a nem piaci javak alapvető értékelési elveként (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, 5. fejezet). A fegyelem, amelyet érvényesít, az, hogy a „társadalmi” költség-haszon elemzés nem ugyanaz a gyakorlat, mint egy magánszektorbeli befektetés-értékelés: tartalmaznia kell a tranzakcióban nem részt vevő harmadik feleket érintő költségeket és hasznokat (externáliák), a kereskedelmi tőkeköltség helyett a [társadalmi diszkontrátát](../társadalmi-diszkontráta/) kell használnia, és [elosztási súlyozást](../elosztási-súlyozás/) kell alkalmaznia, ahol egy font többet számít egy szegényebb háztartásnak, mint egy gazdagabbnak.

Az SCBA ott törik meg, ahol a kritikusai várják: a piaci analógia nélküli javakat — tiszta levegő, társadalmi kohézió, egy megmentett élet értéke — [kinyilvánított preferenciás](../kinyilvánított-preferenciákon-alapuló-értékelés/) vagy [feltárt preferenciás](../feltárt-preferenciákon-alapuló-értékelés/) módszerekkel kell pénzre váltani, vagy [árnyékárat](../árnyékárazás/) kell szerkeszteni. Ha a pénzre váltás nem pusztán nehéz, hanem vitatott, maga a Green Book azt javasolja, hogy térjenek vissza a [költséghatékonysági elemzéshez](../költséghatékonysági-elemzés-a-kormányzatban/) vagy a [többszempontú döntéselemzéshez](../többszempontú-döntéselemzés/), ahelyett hogy olyan számot erőltetnének, amelyben senki nem hisz.

## A matematika

```
NPSV = Σ [t=0-tól T-ig] (Haszon_t − Költség_t) / (1 + r)^t

ahol:
  Haszon_t = az összes pénzre váltott haszon a t évben, beleértve a kinyilvánított/
             feltárt preferenciával vagy árnyékárral értékelt nem piaci javakat
  Költség_t = az összes pénzre váltott költség a t évben, beleértve az erőforrások
              alternatívaköltségét (lásd ../opportunity-cost-in-public-spending/)
  r        = társadalmi diszkontráta (a HM Treasury 3,5%-ot ír elő, a 30. év után
             alacsonyabb ráták felé csökkenve, a Green Book A. melléklete szerint)
  T        = az értékelési időszak

Haszon-költség arány (BCR) = Σ PV(Hasznok) / Σ PV(Költségek)
```

A BCR 1 felett (vagy az NPSV nulla felett) nettó társadalmi értéket jelez. A Green Book érték a pénzért kategóriái (a közlekedési és infrastruktúra-értékelésben használatosak) címkézik a BCR-tartományokat: 1,0 alatt gyenge érték a pénzért, 1,0–1,5 alacsony, 1,5–2,0 közepes, 2,0–4,0 magas és 4,0 felett nagyon magas. Az érzékenységvizsgálat — az NPSV újrafuttatása pesszimista és optimista feltevésekkel — kötelező, nem opcionális, mert a pénzre váltott nem piaci hasznok széles bizonytalansági sávokat hordoznak.

## Kidolgozott példa

**Helyi önkormányzat**: egy tanács 3 millió £-os befektetést értékel egy új kerékpáros és gyalogos hálózatba, 20 éves értékelési időszakkal és 3,5%-os diszkontrátával.

```
Költségek: 3 M£ tőke a 0. évben, 50 000 £/év karbantartás (1–20. év)
PV(karbantartás) ≈ 50 000 £ × 14,2 (20 éves annuitási tényező 3,5%-nál) ≈ 710 000 £
Teljes PV(költségek) ≈ 3,71 M£

Hasznok (mind a közzétett DfT/WHO értékelőeszközökkel pénzre váltva):
  Egészségügyi haszon a megnövekedett fizikai aktivitásból: 180 000 £/év
  Hiányzás csökkenése: 40 000 £/év
  Torlódáscsökkenés (kevesebb autóút): 60 000 £/év
  Teljes haszonáram: 280 000 £/év
PV(hasznok) ≈ 280 000 £ × 14,2 ≈ 3,98 M£

NPSV = 3,98 M£ − 3,71 M£ = +0,27 M£
BCR = 3,98 / 3,71 = 1,07 → „alacsony” érték a pénzért
```

A program átlépi a küszöböt, de csak éppen; egy 20%-kal alacsonyabb egészségügyi haszonbecslésű érzékenységi futás (a fizikai aktivitás értékelésének valódi bizonytalanságát tükrözve) a BCR-t 1,0 alá viszi, éppen ezért követeli a Green Book az érzékenységi táblázat közzétételét a főszám mellett, nem csak a központi becslést.

**Jótékonysági szervezet**: egy évi 500 000 £-ba kerülő csecsemőhalandóság-megelőzési programot a statisztikai élet értékével (VSL) értékelnek — árnyékár, nem megfigyelt piaci ár — nagyjából 2,1 M£ (a HM Treasury 2023-ban frissített adata, amelyet maga is kinyilvánított preferenciás tanulmányokból vezettek le). Évente egy csecsemőhalál elkerülése 500 000 £ költséggel szemben 4,2-es BCR-t ad, kényelmesen „nagyon magas” érték a pénzért — de a teljes eredmény a VSL-adaton nyugszik, ezért minden VSL-t használó SCBA-nak feltevésként, nem tényként kell közölnie.

## Kapcsolat a szoftverfejlesztéssel

Az SCBA a természetes keret a kormányzati szoftverekben a platform- és infrastruktúra-befektetési döntésekhez — egy közös személyazonosság-platform összehasonlítása tárcai pontmegoldásokkal például olyan hasznok pénzre váltását kívánja, mint a csökkent duplikált beléptetési költség, csökkent csalás és gyorsabb szolgáltatáselérési idő, amelyeknek önmagukban nincs piaci áruk. Az alapul szolgáló szolgáltatást építő mérnököknek számítaniuk kell arra, hogy a programvezetők bemeneteket kérnek ehhez az elemzéshez: a tranzakciók egységköltségét (lásd [tranzakciónkénti költség](../tranzakciónkénti-költség/)), a várt mennyiségeket és a leromlási/állásidő-költségeket. A legfontosabb átveendő fegyelem: diszkontálják a jövőbeli hasznokat, nevezzék meg kifejezetten a kontrafaktuális alapszintet (lásd [kontrafaktuális elemzés](../kontrafaktuális-elemzés/)), és soha ne mutassanak be egyetlen pontbecslést az érzékenységi tartománya nélkül.

## Buktatók

- **Hasznok kétszeri számítása.** Mind az „megtakarított idő”, mind a „az időből nyert termelékenység” külön hasznokként való számítása felfújja az esetet; a megtakarított idő a haszon, további felhasználása nem újabb haszon, hacsak nem önállóan bizonyított.
- **Kiszorított költségek elhagyása.** Egy program, amely a torlódást egyik útról a másikra, vagy a csalást egyik csatornáról a másikra viszi, nem hozta létre azt a nettó hasznot, amelyet főcím-NPSV-je sugall — lásd [kiszorítás és tulajdonítás](../kiszorítás-és-tulajdonítás/).
- **Magán diszkontráta használata.** Kereskedelmi tőkeköltség (mondjuk 8–10%) alkalmazása a társadalmi diszkontráta helyett rendszerszerűen alulértékeli a hosszú horizontú közhasznokat, például az egészségügyi és környezeti nyereségeket — lásd [társadalmi diszkontráta](../társadalmi-diszkontráta/).
- **A vitathatatlan pénzre váltása és a vitatott elintézése kézlegyintéssel.** Ha egy javaslat hasznának kétharmada magabiztosan pénzre váltott hatékonysági megtakarítás és egyharmada bizonytalanul pénzre váltott jóléti nyereség, a főcím-NPSV csendben keveri a kemény számot a puhával; jelentsék őket külön.

## Források

- HM Treasury. „The Green Book: appraisal and evaluation in central government.” 2022, 5. fejezet. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. „Green Book supplementary guidance: value of a statistical life.” 2023. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. „TAG unit A1.1: cost-benefit analysis.” Transport Analysis Guidance. <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
