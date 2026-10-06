# Természeti tőke számvitel

A természeti tőke számvitel a környezetet ugyanarra az alapra helyezi, mint bármely más nemzeti vagy szervezeti eszközt: méri a természeti erőforrások állományát (erdők, talajok, folyók, vizes élőhelyek, a légkör) és az általuk előállított szolgáltatások áramlását (szén-dioxid-megkötés, árvízvédelem, rekreáció, élelmiszer), fizikai és pénzbeli értelemben egyaránt, hogy a környezeti kimerülés úgy jelenjen meg a döntéshozatalban, ahogy a pénzügyi tőke elfogyasztása. Az Egyesült Királyság a kormányok közül az egyik legelőrehaladottabb ennek szisztematikus elvégzésében, a 25 Year Environment Plan (2018) által hajtva, és az ONS UK Natural Capital számláin és a HM Treasury Green Book kiegészítő útmutatóján keresztül megvalósítva.

## Miért fontos

A hagyományos számvitel — vállalati és kormányzati egyaránt — egy erdőt értéktelennek kezel, amíg ki nem vágják és fűrészáruként el nem adják, és ekkor válik GDP-vé. A természeti tőke számvitel azért létezik, hogy ezt a rést bezárja: az Egyesült Királyság 25 Year Environment Plan-je arra kötelezte a kormányt, hogy ágyazza be a természeti tőke gondolkodását a szakpolitikákba, kifejezetten kimondva az ambíciót, hogy „az első nemzedék legyünk, amely jobb állapotban hagyja a környezetet, mint ahogy találta”. Az ONS azóta éves UK Natural Capital számlákat tesz közzé (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>), amelyek az ökoszisztéma-szolgáltatások pénzbeli értékét becslik — az erdei rekreációtól a városi zöldterületek egészségügyi hasznán át a tőzeglápok szén-dioxid-tárolásáig —, ugyanazt a Nemzeti Számlák keretrendszert használva, mint az előállított tőkénél, hogy a természeti tőke végül ugyanabba a mérlegbe kerülhessen, mint az utak, épületek és berendezések. A HM Treasury Enabling a Natural Capital Approach (ENCA) útmutatója, amely a Green Book kiegészítése (<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>), kifejti, hogyan kell az értékelőknek a környezeti költségeket és hasznokat az üzleti esetekben értékelniük, hogy egy ősi erdőt elpusztító útprogram vagy egy vizes élőhelyet helyreállító árvízvédelmi program következetes pénzbeli alapon összehasonlítható legyen, ne az egyiknek legyen száma, a másiknak pedig egy bekezdésnyi fenntartás.

## A matematika

```
Ökoszisztéma-szolgáltatás eszközérték = az eszköz által nyújtott szolgáltatások áramlásának NPV-je

Eszközérték = Σ (t = 1-től T-ig) [éves szolgáltatási áramlás értéke_t / (1 + r)^t]

ahol:
  szolgáltatási áramlás értéke_t = a szolgáltatás mennyisége a t évben × egységérték
                                   (pl. rekreációs látogatások × érték látogatásonként;
                                    megkötött tonna szén-dioxid × széndioxid-ár)
  r = diszkontráta (Green Book társadalmi diszkontráta — lásd
      [társadalmi diszkontráta](../társadalmi-diszkontráta/))
  T = az az időhorizont, amelyen az eszköz várhatóan nyújtja a szolgáltatást
```

Ez azonos nettó jelenérték-szerkezet, mint amelyet az előállított tőke értékelésére vagy bármely közberuházás [Green Book-értékelése](../green-book-értékelés/) során használnak — a természeti tőke számvitel hozzájárulása hiteles fizikai mennyiségek és egységértékek szállítása olyan szolgáltatásokra, amelyeket korábban nullára árazták.

## Kidolgozott példa

**Városi erdő, rekreációs érték**: egy 50 hektáros erdő becsült évi 80 000 rekreációs látogatást fogad, mindegyiket (utazási költség vagy kinyilvánított preferencia módszerrel — lásd [feltárt preferenciákon alapuló értékelés](../feltárt-preferenciákon-alapuló-értékelés/) és [kinyilvánított preferenciákon alapuló értékelés](../kinyilvánított-preferenciákon-alapuló-értékelés/)) látogatásonként 3 £-ra értékelve. Az erdő várhatóan 50 évig nyújtja ezt a szolgáltatást, 3,5%-os diszkontrátával értékelve.

```
Éves rekreációs érték = 80 000 × 3 £ = 240 000 £/év

NPV 50 évre 3,5%-on ≈ 240 000 £ × annuitási tényező(3,5%, 50 év)
annuitási tényező(3,5%, 50) ≈ 21,4

Eszközérték ≈ 240 000 £ × 21,4 ≈ 5 136 000 £
```

**Szén-dioxid-tárolás hozzáadása**: ugyanez az erdő becsült évi 400 tonna CO2-t köt meg, a kormány nem kereskedett szén-dioxid-árán, nagyjából 75 £/tonna értéken értékelve (szemléltető — élő értékeléshez a jelenlegi BEIS/DESNZ közzétett szénértékeket használják).

```
Éves szénérték = 400 × 75 £ = 30 000 £/év
NPV 50 évre 3,5%-on ≈ 30 000 £ × 21,4 ≈ 642 000 £

Az erdő teljes eszközértéke (rekreáció + szén) ≈ 5 136 000 £ + 642 000 £
                                                 ≈ 5 778 000 £
```

Ez az árvízi tározás, biodiverzitás vagy levegőminőségi szolgáltatások hozzáadása előtti érték, amelyeket az ENCA-útmutató szintén kér az értékelőktől figyelembe venni — az összeg szándékosan alsó határ, nem felső.

## Kapcsolat a szoftverfejlesztéssel

- A helyi önkormányzatok és ügynökségek környezeti és vagyonkezelő rendszerei (parkok, autópályák, víztestek) természeti tőke nyilvántartást csatolhatnak a fizikai vagyonnyilvántartásuk mellé, ugyanazt a szolgáltatási áramlás-szorozva-egységértékkel mintát használva, mint a szervezet által fenntartott bármely más [egységköltség-adatbázis](../egységköltség-adatbázisok/).
- Mivel a természeti tőke NPV-je érzékeny a diszkontrátára (lásd a kidolgozott példa annuitási tényezőjét), minden, ezt kiszámító eszköznek láthatóan fel kell tárnia a rátát és a horizontot bemenetként, nem eltemetnie őket — ugyanaz az átláthatósági elv, amelyet a [nemzedékek közötti méltányosság és fenntarthatósági diszkontálás](../nemzedékek-közötti-méltányosság-és-fenntarthatósági-diszkontálás/) tárgyal.
- A természeti tőke számlák egyre inkább kötelező bemenetei egy [Green Book-értékelés](../green-book-értékelés/) üzleti eset környezeti hatás szakaszainak; az üzleti eset eszközöket építő szállító csapatnak az ONS-számlákat és az ENCA-egységértékeket integrálandó referenciaadatként kell kezelnie, nem olyasmiként, amit az értékelők minden alkalommal nulláról újraszámolnak.

## Buktatók

- **Átfedő ökoszisztéma-szolgáltatások kétszeres számítása** — ugyanannak a helyszínnek a rekreációs és biodiverzitási értéke közös mögöttes fizetési hajlandósági adatokon osztozhat; az ENCA-útmutató kifejezetten óv az átfedő felmérési eszközökből származó értékelések összegzésétől.
- **A természeti tőke eszközérték statikusként kezelése** — a szolgáltatási áramlások változnak az éghajlattal, a kezeléssel és a területhasználati nyomással; egy erdő szén-dioxid- és árvízvédelmi értéke ebben az évtizedben nem a helyszín állandó tulajdonsága.
- **Nemzeti átlagos egységértékek használata nagyon helyi döntéshez** — egy hektár hozzáférhető városi erdő és egy hektár távoli felföld nagyon eltérő rekreációs értékű; az ENCA-útmutató helyi vagy helyszínspecifikus értékeket javasol, ahol elérhetők, nem alapértelmezetten nemzeti átlagokat.

## Források

- ONS. „UK natural capital accounts.”
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. „A Green Future: Our 25 Year Plan to Improve the Environment.” (2018)
- HM Treasury / Defra. „Enabling a Natural Capital Approach (ENCA): guidance.”
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
