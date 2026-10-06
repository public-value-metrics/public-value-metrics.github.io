# Roky života upravené o blahobyt (WELLBY)

WELLBY je jeden dodatečný bod životní spokojenosti na standardní škále blahobytu 0–10 pro jednu osobu po dobu jednoho roku. Je to strukturální analog QALY používaného ve zdravotnické ekonomii — jediná jednotka, která umožňuje porovnávat intervence, jejichž výsledky nemají nic jiného společného — ale postavený na subjektivním blahobytu místo klinických zdravotních stavů a vyložený v „Wellbeing guidance for appraisal: supplementary Green Book guidance“ (2021) ministerstva financí (HM Treasury).

## Proč na tom záleží

Analýza nákladů a přínosů potřebuje společnou jednotku, aby mohla porovnat grant mládežnickému klubu, program bezpečnosti silničního provozu a službu duševního zdraví, z nichž žádné nesdílí míru výsledku. Zdravotnická ekonomie to vyřešila pro klinické intervence pomocí QALY: rok života upravený o kvalitu, vážený od 0 (mrtvý) do 1 (plné zdraví). Pokyn ministerstva financí k blahobytu rozšiřuje stejnou logiku na nezdravotní veřejné výdaje a používá harmonizovanou otázku ONS o životní spokojenosti („Celkově, jak jste dnes se svým životem spokojeni?“, odpověď 0–10) jako žebřík výsledku místo indexu zdravotních stavů. WELLBY rovné 1 znamená zvýšení životní spokojenosti jedné osoby o jeden celý bod po dobu jednoho roku (nebo ekvivalentně zvýšení spokojenosti deseti lidí o 0,1 bodu každého po dobu roku — WELLBY se napříč populací sčítají stejně jako QALY). Pokyn ministerstva financí stanoví ilustrativní peněžní hodnotu za WELLBY (kolem 13 000 £, ceny 2019/20) odvozenou sladěním dat subjektivního blahobytu s jinými přístupy k hodnotě roku života, což dává hodnotitelům způsob, jak peněžně vyjádřit výsledky — snížení osamělosti, soudržnost komunity, přístup k zelené ploše —, které metody [oceňování blahobytu](../oceňování-blahobytu/) dříve mohly jen popsat, nikoli porovnat na společném základě s výdaji na zdraví či bezpečnost.

## Matematika

```
WELLBY = Δ životní spokojenosti (škála 0–10) × počet let, po které změna přetrvává
        (sečteno přes všechny dotčené osoby)

Peněžně vyjádřený přínos blahobytu = vygenerované WELLBY × hodnota za WELLBY (referenční hodnota HMT)

srov. QALY = Δ užitku zdravotního stavu (škála 0–1) × roky prožité v tomto stavu
```

Škála spokojenosti 0–10 a škála užitku QALY 0–1 nejsou zaměnitelné bez kroku převodu; pokyn ministerstva financí probírá sladění obou tak, aby například zdravotnická intervence hodnocená v QALY a sociální intervence hodnocená ve WELLBY nebyly mlčky dvakrát započteny nebo ponechány nesrovnatelné v rámci téhož [hodnocení podle Green Booku](../hodnocení-podle-green-booku/).

## Praktický příklad

**Služba místního úřadu proti osamělosti**: program přátelství obsluhuje 400 izolovaných starších obyvatel. Následné průzkumy ukazují, že průměrná životní spokojenost roste z 5,2 na 6,0 (zisk 0,8 bodu) a odhaduje se, že účinek přetrvává 2 roky, než odezní.

```
WELLBY = 400 osob × 0,8 bodu × 2 roky = 640 WELLBY

Peněžně vyjádřená hodnota = 640 × 13 000 £ = 8 320 000 £
```

Proti ročním nákladům programu 300 000 £ (600 000 £ za 2 roky) je poměr přínosů a nákladů zhruba 8 320 000 / 600 000 ≈ **13,9 : 1** — číslo, které nyní může stát ve stejné tabulce hodnocení jako náklady na odvrácený QALY zdravotnického programu nebo úspory času cestou dopravního programu.

**Charita, menší měřítko**: komunitní umělecký program oslovuje 50 účastníků s naměřeným ziskem spokojenosti 0,3 bodu, trvajícím 1 rok.

```
WELLBY = 50 × 0,3 × 1 = 15 WELLBY
Peněžně vyjádřená hodnota = 15 × 13 000 £ = 195 000 £
```

## Souvislost s softwarovým inženýrstvím

- Jakákoli služba pro občany, která již sbírá položku průzkumu o životní spokojenosti nebo blahobytu (mnoho platforem místní správy a zdravotní a sociální péče to dělá podle čtyř standardních otázek ONS o blahobytu), může WELLBY počítat přímo ze stávajících datových potrubí, místo aby zadávala zakázkové ekonomické hodnocení pro každou změnu služby.
- WELLBY dávají inženýrským týmům budujícím pro výkaznictví podle [Social Value Act](../zákon-o-sociální-hodnotě/) nebo [sociální návratnosti investice](../sociální-návratnost-investice/) národně standardizovaného, ministerstvem financí schváleného jmenovatele, čímž se vyhnou rozmnožování zakázkových „skóre dopadu“, která nelze porovnat napříč smlouvami či dodavateli.
- Protože jsou WELLBY aditivní přes osoby a čas, čistě se skládají do sledování výsledků na úrovni populace používaného systémy [odpovědnosti založené na výsledcích](../odpovědnost-založená-na-výsledcích/) — dashboard služby může vykazovat kumulativní WELLBY vygenerované za čtvrtletí, tak jak zdravotní systém vykazuje získané QALY.

## Úskalí

- **Předpoklad, že hlášené zisky spokojenosti jsou zcela přisouditelné intervenci** — bez kontrafaktuálu (srovnávací skupiny nebo návrhu před/po s kontrolami) nelze oddělit zisk WELLBY od obecných trendů; viz [kontrafaktuální analýza](../kontrafaktuální-analýza/).
- **Míchání WELLBY a QALY v jednom součtu bez sladění** — pokyn ministerstva financí je výslovný, že oba používají různé škály a různé podkladové teorie hodnoty; jejich naivní sčítání dvakrát započítává překrývající se blahobyt.
- **Nekritické používání referenční peněžní hodnoty** — číslo £ za WELLBY je národní průměrný odhad se skutečnými pásy nejistoty; pokyn ministerstva financí doporučuje analýzu citlivosti, nikoli zacházení s ním jako s pevným směnným kurzem.

## Zdroje

- HM Treasury. „Wellbeing guidance for appraisal: supplementary Green Book guidance.“ (2021) <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. „Personal well-being user guidance“ (čtyři standardní otázky o blahobytu). <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. „The Green Book: Central Government Guidance on Appraisal and Evaluation.“
