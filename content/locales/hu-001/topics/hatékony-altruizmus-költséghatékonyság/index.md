# Hatékony altruizmus: költséghatékonyság

A hatékony altruizmus (effective altruism, EA) költséghatékonysági gondolkodása a jótékonysági beavatkozásokat az általuk létrehozott jó mennyisége szerint rangsorolja — leggyakrabban megmentett életekben vagy nyert egészségben kifejezve elköltött dollárra vetítve — és a pénzt oda irányítja, ahol a határon a legtöbb jót lehet megvásárolni. A GiveWell a terület legbefolyásosabb gyakorlója: kifejezett, frissített költség-életmentésenkénti és költség-eredményenkénti becsléseket tesz közzé az „élvonalbeli jótékonysági szervezetek” kis listájára, és azt ajánlja az adományozóknak, hogy ahhoz adjanak, amelyiknek éppen van helye több finanszírozásra, a legjobb ráta mellett.

## Miért fontos

A GiveWell a költséghatékonyságot közzétett módszertanában vezető kritériumként állítja: bizonyítékokkal alátámasztott beavatkozásokat keres, közös egységben becsli költséghatékonyságukat, és teljesen egymástól független okok között — malária elleni szúnyoghálók, A-vitamin-pótlás, készpénzátutalások, oltási ösztönző kifizetések — rangsorol azon az egyetlen tengelyen. Ez a QALY/DALY-stílusú gondolkodás közvetlen átvétele az egészség-gazdaságtanból a jótékonykodásba: ahogy egy egészségügyi rendszer megkérdezi, „hány QALY fontonként a határon”, a GiveWell azt kérdezi, „hány élet vagy életév dollárként a határon”, és az okokat helyettesíthetőként kezeli, ha ebbe a közös egységbe átváltották őket. E gondolkodási keret közszférabeli rokonáról lásd a [költséghatékonysági elemzés a kormányzatban](../költséghatékonysági-elemzés-a-kormányzatban/) témát.

A leggyakrabban idézett GiveWell-szám az Against Malaria Foundationre (AMF) vonatkozik, amely rovarölő szerrel kezelt szúnyogháló-t oszt. A GiveWell közzétett kidolgozott példájában (2020-as finanszírozási adatokból) nagyjából 4500 dollár elegendő hálót finanszírozott egy haláleset megelőzéséhez, a hálók tökéletlen használatának, a hálók nélküli alap-halandóságnak és a „funging” korrekciójának — annak a lehetőségnek, hogy az AMF ennek a finanszírozásnak egy részét más adományozóktól is megkapta volna — figyelembevételével. A GiveWell kifejezetten kimondja, hogy ez a szám idővel és földrajzi területenként változik, ahogy a malária-prevalencia, a hálóköltségek és a finanszírozási hiányok változnak, és hogy az élet megmentésének költsége általában várhatóan emelkedik idővel, mert a legolcsóbb lehetőségeket veszik igénybe először; ez a módszer kidolgozott szemléltetése, nem rögzített ár.

## A matematika

```
Költséghatékonyság = A beavatkozás költsége / A létrehozott jó egységei
                     (pl. $ megmentett életenként, $ elkerült DALY-nként, $ QALY-nként)

A GiveWell lánca egy szúnyogháló-programra, szemléltetően:
  $ megvásárolt és kiszállított hálónként
    ÷ a ténylegesen használt hálók aránya
    ÷ hálónként védett személyek
    × a hálók nélküli alap éves halandóság
    × a háló használatának tulajdonítható halandóság-csökkenés (RCT-bizonyítékból)
    × hálónkénti védelem évei
    ÷ funging korrekciója (más adományozók finanszírozását kiszorító pénz)
  = $ megmentett életenként (a kontrafaktuális finanszírozási hatásokkal korrigálva)
```

Ez a lánc azért számít, mert minden lépés olyan hely, ahol a költséghatékonysági becslések gyakran tévednek — lásd lent a buktatókat —, és mert kifejezetté teszi, hogy a „költség megmentett életenként” soha nem nyers megfigyelt ár; több, külön bizonytalan bemenetből épített modellezett becslés.

## Kidolgozott példa

Két hipotetikus, bizonyítékokkal alátámasztott beavatkozás verseng ugyanazért a határ 100 000 £-ért:

- **Szúnyoghálók (AMF-stílusú)**: nagyjából 4500 dollár megmentett életenként a GiveWell 2020-as adatokból készült közzétett kidolgozott példája szerint, vagyis nagyon durván 20 megmentett élet 100 000 £-onként, a használt árfolyamtól és évtől függően.
- **Féregtelenítési program**: semmilyen hihető halandósági haszon, de erős bizonyíték a gyermekkori féregtelenítésből eredő hosszú távú jövedelemnövekedésre; a GiveWell jövedelemnövekedési értelemben értékeli, nem megmentett életekben, ami megnehezíti a közvetlen összehasonlítást a szúnyogháló-val közös egység nélkül. A GiveWell kifejezett „erkölcsi súlyok” keretrendszert használ, hogy mindkettőt egyetlen belső egységre váltsa a rangsoroláshoz.

Az EA-módszer fegyelme abban áll, hogy ezt az összehasonlítást a nyílt színre kényszeríti, ahelyett hogy mindkettőt finanszíroznák, mert mindkettő „jól hangzik”. Az egyenértékű, brit szociális vállalkozások és helyi megrendelők által használt kényszerítő funkcióról, amely ugyanazt a kérdést — mi a legjobb megtérülés fontonként — pénzre váltott érték nyelvén teszi fel, nem élet/DALY nyelvén, lásd a [társadalmi megtérülést](../társadalmi-megtérülés/).

## Kapcsolat a szoftverfejlesztéssel

Az EA-hoz igazodó finanszírozóknak (Open Philanthropy, maga a GiveWell, hatékony adományozási platformok, például a Giving What We Can) adományozói platformokat, támogatás-párosító eszközöket vagy hatás-irányítópultokat építő mérnököknek a költséghatékonysági becsléseket tartományokként kell ábrázolniuk kimondott feltevésekkel, nem egyetlen számként — a mögöttes modellnek több szorzódó bizonytalan bemenete van, és ennek egyetlen számra való összeomlasztása egy irányítópulton félrevezeti azt a bizonyosságot, amelyet maga a GiveWell kimond. Minden becslést verziózzanak közzétételi dátum szerint; a GiveWell felülvizsgálja számait, néha jelentősen, ahogy új RCT-bizonyíték vagy finanszírozási-hiány-adat érkezik, és az a platform, amely egy régi számot gyorsítótáraz, csendben hibássá válik.

## Buktatók

- **A költséghatékonysági becslés rögzített árként kezelése.** Modellkimenet, több bizonytalan szorzódó bemenettel (használati arányok, alap-halandóság, funging-korrekció); tüntessék fel a dátumot és a verziót.
- **A funging/kiszorítás figyelmen kívül hagyása.** Egy olyan szervezet finanszírozása, amely a pénzt úgyis megkapta volna egy másik adományozótól, kevesebb kontrafaktuális jót vásárol, mint a főcím sugallja — lásd [többlethatás és holtteher](../többlethatás-és-holtteher/) és [kiszorítás és tulajdonítás](../kiszorítás-és-tulajdonítás/).
- **Összeegyeztethetetlen egységek összehasonlítása átváltás nélkül.** A „megmentett életek” és a „nyert jövedelem” nem közvetlenül összehasonlíthatók kifejezett erkölcsi súlyok keretrendszer nélkül; egymás mellett bemutatni őket, mintha azok lennének, kategóriahiba.
- **Cause-area alagútlátás.** Csak egy cause-area-n (pl. csak globális egészségügyi jótékonysági szervezetek) belüli rangsorolás, és a győztest „a legköltséghatékonyabb jótékonysági szervezetnek” nevezni, túlzott állítás; a GiveWell okok közötti rangsora szándékosan szűk (globális egészség és jólét), nem univerzális.

## Források

- GiveWell, „Our criteria.” <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, „How Much Does It Cost to Save a Life?” (2024. februári verzió). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, az Against Malaria Foundation értékelése. <https://www.givewell.org/charities/amf>
- Giving What We Can, a költséghatékonyságról okok között. <https://www.givingwhatwecan.org/>
