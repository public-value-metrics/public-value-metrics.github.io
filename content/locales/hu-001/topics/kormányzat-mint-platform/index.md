# Kormányzat mint platform (GaaP)

A Government as a Platform az a stratégia, hogy megosztott, újrahasznosítható komponenseket — értesítési szolgáltatást, fizetési szolgáltatást, azonosítási szolgáltatást — egyszer, központilag építenek meg, hogy kormányzati szolgáltatások százai ezeket fogyasszák, ahelyett hogy mindegyik a sajátját építené. A közszféra digitális infrastruktúráját platformgazdasági problémaként keretezi újra: az érték nem egyetlen integrációban rejlik, hanem abban, hogy a *következő* csapat határköltsége, amely átveszi, nullához közelít.

## Miért fontos

A GDS a stratégiát hivatalosan a 2015-ös „Government as a Platform” kiadványában fektette le, azzal érvelve, hogy a kormányzat ugyanazokat a képességeket — fizetésfogadás, felhasználói értesítés, személyazonosság-ellenőrzés, címkeresés — külön-külön építette meg szolgáltatásról szolgáltatásra, mindegyik saját beszerzési, biztonsági értékelési és folyamatos támogatási terhet cipelve. Az alternatíva néhány megosztott platform volt, egyszer magas színvonalon megépítve és mindenhol újrahasznosítva: a GOV.UK Notify e-mailek, szöveges üzenetek és levelek küldéséhez, a GOV.UK Pay online fizetések fogadásához és a GOV.UK One Login (a korábbi GOV.UK Verify azonosítási program utódja) a személyazonosság-ellenőrzéshez. A platformok elért mérete a legegyértelműbb bizonyíték arra, hogy a stratégia működött: a GOV.UK Pay több mint 10 milliárd £ tranzakciót dolgozott fel nagyjából 1800 egyedi szolgáltatásban — és míg az első 1 milliárd £ feldolgozása nagyjából négy évig tartott, ma ugyanennyit nagyjából öt hónap alatt dolgoz fel —, a GOV.UK Notify pedig több mint 9 milliárd üzenetet küldött több mint 1500 kormányzati szervezet nevében. E szolgáltatások mindegyike elkerülte saját fizetési átjárójának vagy üzenetküldő csővezetékének megépítését, biztosítását és fenntartását.

## A matematika

```
Építési költség szolgáltatásonként (platform nélkül) = N szolgáltatás × egy fizetési/értesítési/
  azonosítási rendszer megépítésének, biztonsági értékelésének és üzemeltetésének költsége

Platformköltség = fix platform-építési költség
                + az egyes csatlakozó szolgáltatások határköltsége (integráció,
                  konfiguráció, folyamatos platformcsapat-támogatás)

Az újrahasznosítás akkor térül meg, ha:
  platform-építési költség < N × (szolgáltatásonkénti építési költség − határ-integrációs költség)

Egy érett platformnál a további csatlakozó határköltsége a tranzakciós/üzenetdíj
közelébe csökken — a fix költség a teljes kormányzati állományra amortizálódik,
nem egyetlen tárca költségvetésére, ezért a GaaP-komponenseket általában központilag
finanszírozzák, nem teljes költségmegtérítéssel terhelik a korai csatlakozókat.
```

## Kidolgozott példa

**Helyi önkormányzat a GOV.UK Pay-t használja saját fizetési átjáró építése helyett**:

```
Saját építés becslése:
  PCI-DSS megfelelőségi munka + integráció + folyamatos karbantartás
  ≈ 85 000 £ építés + 22 000 £/év karbantartás

GOV.UK Pay bevezetése:
  Integrációs ráfordítás ≈ 12 000 £ (fejlesztői idő)
  Tranzakciós díjak: a kormány–állampolgár kártyás fizetéseket jellemzően kis százalék
  plusz tranzakciónkénti fix díj terheli, a tanácsnak nincs külön PCI-DSS terhe
  ≈ 12 000 £ egyszeri, a folyamatos költség a volumentől függ, nem fix

Első évi megtakarítás ≈ 85 000 £ − 12 000 £ = 73 000 £, az elkerült 22 000 £/év
karbantartás és a kártyaadatok tanács által üzemeltetett rendszerben való tárolásának
elkerült megfelelőségi kockázata előtt — ez utóbbi a biztonsági érték, amelyet a
public-sector-cybersecurity-value tárgyal.
```

A 73 000 £-ot a GOV.UK Pay-t ma használó nagyjából 1800 szolgáltatásra skálázva az elkerült építési költség összesen a kormányzatban több száz millió £ — a stratégia értéke a platformgazdaságtanban rejlik, nem egyetlen integrációban.

## Kapcsolat a szoftverfejlesztéssel

A Government as a Platform közvetlen érv az [építeni vagy venni a kormányzatban](../építeni-vagy-venni-a-kormányzatban/) mellett: ha létezik megosztott, értékelt, jól működtetett komponens, egyedi egyenértékű építése nagyon ritkán a jobb [érték a pénzért](../érték-a-pénzért/) választás, és szinte definíció szerint megbukik a [digitális szolgáltatási szabvány](../digitális-szolgáltatási-szabvány/) 13. pontján („használjon és járuljon hozzá nyílt szabványokhoz, közös komponensekhez és mintákhoz”). Megváltoztatja a [teljes birtoklási költség a kormányzati IT-ban](../teljes-birtoklási-költség-a-kormányzati-it-ban/) alakját is: a platform bevezetése egy nagy tőke- és karbantartási tételt kisebb, használathoz kötött működési költségre cserél, amelyet könnyebb előrejelezni és könnyebb megvágni, ha egy szolgáltatást megszüntetnek. A komponensek nyílt újrahasznosításának rokona a [nyílt adatok értéke](../nyílt-adatok-értéke/) — mindkettő olyan stratégia, amely valamit, amit a kormányzat egyszer állít elő, megosztott infrastruktúraként kezel, nem tárcai vagyonként.

## Buktatók

- **Árnyék-újraépítés**: a csapatok csendben saját fizetési vagy értesítési integrációt építenek, mert a platform bevezetési folyamata lassabb, mint maguk megcsinálni — irányítási súrlódás probléma, nem technológiai, és csendben rombolja az újrahasznosítási gazdaságtant, amelyre az egész stratégia épül.
- **A platformcsapat alulfinanszírozása az általa létrehozott értékhez képest**: az érték a fogyasztó tárcáknál halmozódik, a költség a platformcsapatnál, krónikus alulbefektetési kockázatot teremtve, hacsak a finanszírozást nem központosítják és nem védik — a közlegelők tragédiájának egy változata.
- **A platform sikerének mérése csak a használattal**: az elfogadási számok (bevezetett szolgáltatások, elküldött üzenetek) előrejelző mutatók, nem az érték bizonyítékai; az igazi próba a fenti elkerült építési költség és elkerült kockázat számtana.
- **A „platform” azonosítása a „monolittal”**: a GaaP-komponensek azért sikeresek, mert mindegyik egy dolgot csinál jól, szűk, stabil felülettel — össze nem tartozó képességek egyetlen „platformba” csomagolása máshol, más léptékben újrateremti az egyedi építés problémáját.

## Források

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, „GOV.UK Pay at 10: how it started and how it's going”. <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
