# DORA-mutatók a közértékért

A DORA (DevOps Research and Assessment) mutatók — telepítési gyakoriság, a változtatások átfutási ideje, változási hibaarány és a szolgáltatás helyreállítási ideje, plusz ötödikként a megbízhatóság — a szoftveripar legjobban validált szállítási teljesítmény-viszonyítási értékei. Közszféra-elszámoltathatósági nyelvre fordítva mindegyik közvetlen helyettesítője annak, milyen gyorsan és milyen biztonságosan jut el a közérték egy állampolgárhoz.

## Miért fontos

A DORA évtizednyi kutatása, amelyet évente tesznek közzé az *Accelerate State of DevOps Report* formájában (Forsgren, Humble és Kim módszertana, amelyet ma a Google Cloud vezet), a csapatokat elit, magas, közepes és alacsony teljesítményűekbe csoportosítja. Az elit csapatok igény szerint telepítenek, a commit és az éles üzem között egy napnál kevesebbet vesznek igénybe, a változtatások nagyjából 5%-án buknak el, és egy órán belül helyreállnak; az alacsony teljesítményűek havonta vagy ritkábban telepítenek, hónapokat vesznek igénybe, a változtatások nagyjából 40%-án buknak el, és hetek alatt állnak helyre. A kormányzatban ezek nem mérnöki hiúsági mutatók: a Government Digital Service Service Standardja megköveteli a csapatoktól, hogy „gyakran iteráljanak és fejlődjenek”, és gyorsan reagálni tudjanak a felhasználói szükségletre, és azok a tárcák, amelyek nem tudnak biztonságosan és gyakran telepíteni, szerkezetileg képtelenek teljesíteni ezt a szabványt, bármit mutasson is a felhasználókutatásuk. A Cabinet Office saját digitális hatékonysági munkája azt találta, hogy az állampolgár sikertelen vagy lassú digitális tranzakcióból telefon- vagy papírcsatornára terelése drága — a GDS 2012-es Digital Efficiency Reportja szerint egyes digitális tranzakciók mindössze 20 pennybe kerültek, míg a telefonos vagy személyes kapcsolatfelvételek akár 8,62 £-ba — így egy nyilvános felületű szolgáltatás változtatási hibája nem csak mérnöki időbe kerül, hanem valódi fontokat tol a kapcsolattartó központ költségvetésére (lásd [csatornaváltási megtakarítások](../csatornaváltási-megtakarítások/)).

## A matematika

```
Telepítési gyakoriság   = éles telepítések / idő
Változtatások átfutási ideje = t(telepítés) − t(commit), medián
Változási hibaarány     = sikertelen változtatások / összes változtatás × 100
Helyreállítási idő (MTTR) = t(helyreállítva) − t(hiba), medián
Megbízhatóság           = SLO-teljesülés (elérhetőség, késleltetés, helyesség)
```

Közérték-átültetések:

```
Átfutási idő     → a csővezetékben töltött hetek × CoD, lásd cost-of-delay-in-public-programmes
Hibaarány        → állampolgári incidensráta: CFR × átirányított kapcsolattartóközponti
                   hívás (vagy sikertelen törvényi tranzakció) költsége
Helyreállítási idő → szolgáltatáskiesési kár: MTTR × (óránként blokkolt igénylések/kérelmek)
                   × egységenkénti downstream költség vagy jóléti veszteség
Megbízhatóság    → haszonleszámítás: a 99%-os elérhetőségű szolgáltatás a modellezett
                   hasznának ≈ 0,99-ét szállítja — az igénybevételi vagy megfelelési
                   hiány szállítási megfelelője
```

## Kidolgozott példa

Egy helyi önkormányzat ellátásigénylő portáljának csapata egy szállítás-mérnöki befektetés előtt és után:

```
                    Előtte      Utána
Telepítések         havonta     hetente
Átfutási idő        8 hét       5 nap
CFR                 30%         10%
MTTR                3 nap       4 óra
```

A csapat évente nagyjából 25 fejlesztést szállít, átlagos értéke 8000 £/hét ([késedelem költsége](../a-késedelem-költsége-a-közprogramokban/)). Az átfutási idő nagyjából 7,3 héttel való csökkentése előrehozza minden fejlesztés haszonáramát: 25 × 7,3 × 8000 ≈ **1 460 000 £/év** korábban szállított érték. A hibaarányon: 25 × (0,30 − 0,10) = évente 5-tel kevesebb sikertelen változtatás; egy nyilvános portálon egy sikertelen változtatás jellemzően becslések szerint 2000 állampolgárt irányít át a telefoncsatornára 8,62 £-ért a 20 pennyvel szemben, nettó nagyjából 8,42 £ × 2000 ≈ 16 840 £ incidensenként, így 5 incidens elkerülése ≈ **84 200 £/év** megtakarítást jelent. A szállítás-mérnöki befektetést ugyanabban a valutában értékelik, mint bármely más közérték-esetet.

## Kidolgozott példa folytatása: megbízhatóság

Ha a portál a célzott 99,5% helyett 97%-os elérhetőséggel fut, és az állásidő minden százalékpontját a kérelmek 2%-ának lemorzsolódás miatti elvesztéseként modellezik, a szolgáltatás a modellezett évi 2 millió £ haszon nagyjából 0,975-ét szállítja — évi 50 000 £ haszonleszámítás, amelyet egy tisztán rendelkezésre állási irányítópult soha nem hoz felszínre.

## Kapcsolat a szoftverfejlesztéssel

A DORA-mutatók egy közszolgáltatás működési mutatói más ruhában: az átfutási idő a [szolgáltatási szabványok és tranzakciós mutatókra](../szolgáltatási-szabványok-és-tranzakciós-mutatók/) képezhető le; a változási hibaarány az újramunkálási és panaszarányokra; az MTTR arra, mennyi ideig elérhetetlen egy törvényi szolgáltatás az igénylők számára. A fejlesztési technikák mindkét irányban átvihetők, mert mindkettő elszámoltathatósági korlátok alatt álló sorbanállási rendszer — az alapul szolgáló sorbanállási matematikáról lásd az [áramlási mutatókat a kormányzati szállításban](../áramlási-mutatók-a-kormányzati-szállításban/). Jegyezzék meg a DORA 2025-ös megállapítását is, hogy az MI-bevezetés magasabb áteresztőképességgel, de *rosszabb* stabilitással korrelál — olyan beavatkozás, amelynek hatásossága és mellékhatásai is vannak, ami éppen az a nettó haszon-elemzés, amelyet ennek a csoportnak az [MI-termelékenység](../mi-termelékenység-a-közszférában/) témája végigvezet.

## Buktatók

- **Mutatójáték**: a telepítésszámok felfújása üres kiadásokkal, vagy a sürgősségi javítások kihagyása a változási hibaszámból. Az eseményeket olyan pontosan határozzák meg, ahogy egy törvényi szolgáltatási szabvány a „sikeres tranzakciót”.
- **Tárcák közötti ranglisták**: a DORA-klaszterek szállítási gyakorlatokat hasonlítanak össze, nem eltérő kockázati profilú szolgáltatásokat; egy „magas” besorolású adófizetési rendszer lehet a helyes tartás ott, ahol az „elit” a biztosítási követelmények miatt meggondolatlan lenne.
- **Csak egy mutató optimalizálása**: a sebesség változási hibaarány nélkül a klasszikus áteresztőképesség–instabilitás kompromisszum — mind a négyet együtt jelentsék, ne egyetlen pontszámként.

## Források

- DORA kutatás és az éves *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
