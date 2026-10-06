# Építeni vagy venni a kormányzatban

Az építeni-vagy-venni (build-vs-buy) az egyedi fejlesztés és a kereskedelmi vagy hétköznapi beszerzés strukturált, kockázattal korrigált összehasonlítása, diszkontált [teljes birtoklási költség](../teljes-birtoklási-költség-a-kormányzati-it-ban/), értékhez jutási idő és kockázat alapján. A kormányzat szerkezetileg vevő szektor — a Technology Code of Practice vélelmet állít fel a hétköznapi és felhős megoldások mellett —, a tárcákon belüli mérnöki csapatok mégis alapértelmezetten építenek, ugyanazokból az okokból, mint az építők mindenütt.

## Miért fontos

A Government Digital Service Technology Code of Practice-e (<https://www.gov.uk/guidance/the-technology-code-of-practice>) és a kísérő Service Manual útmutató az építeni vagy venni döntésről arra kényszeríti a tárcákat, hogy az egyedi fejlesztést egy olyan vélelemmel szemben indokolják, hogy a hétköznapi képességet venni kell, nem építeni, és hogy csak a valóban újszerű, küldetést megkülönböztető képesség indokol egyedi kódot. A HM Treasury Green Book optimizmus-torzítási kiegészítő útmutatója, amely a nagy közbeszerzések 2002-es Mott MacDonald-felülvizsgálatából származik, az IT-projekteknek adja az értékelt kategóriák közül a legszélesebb korrekciós tartományt — a tőkeköltség-becsléseket az értékelésben való használat előtt alsó határon 10%-kal, felső határon akár 200%-kal ajánlott megemelni, tükrözve, mennyire alulbecsülték történelmileg a szoftverépítéseket a közbeszerzésekben. Az építeni-vagy-venni elemzés éppen azért létezik, hogy ezt a kockázati korrekciót a jóváhagyás előtt az asztalra kényszerítse, ahelyett hogy évközi túlköltekezési kérelemként bukkanjon fel.

## A matematika

```
Ugyanazon 3–5 éves horizonton hasonlítsák össze, a Green Book társadalmi
diszkontrátájával diszkontálva (lásd social-discount-rate.md):

NPV_változat = PV(hasznok, az értékhez jutási idővel eltolva) − PV(TCO)

Kockázati korrekciók (Green Book optimizmus-torzítási minta):
  építési költség × 1,1–3,0        (IT-projekt korrekciós tartomány, Mott MacDonald)
  építési értékhez jutási idő + 40–60% (bevezetési késedelem előzetes)
  vétel: ehelyett adjanak hozzá integrációs valóságellenőrzést és szerződéskilépési költségeket

Döntési tényezők, abban a sorrendben, ahogy általában döntenek:
  1. megkülönböztetés — ez a képesség a küldetés, vagy csővezeték?
  2. értékhez jutási idő × késedelem költsége (lásd cost-of-delay-in-public-programmes.md)
  3. kockázattal korrigált teljes birtoklási költség
```

## Kidolgozott példa

Egy helyi önkormányzatnak felnőtt szociális gondozási ügykezelő rendszerre van szüksége. Vétel: SaaS 180 000 £/év, 4 hónap alatt él. Építés: becsült 900 000 £ plusz 150 000 £/év karbantartás, 14 hónap alatt él.

```
Kockázattal korrigált építési költség = 900 000 × 1,4 = 1 260 000 £
5 éves TCO:
  vétel  = 180 000 × 5 = 900 000 £
  építés = 1 260 000 + 150 000 × 5 = 2 010 000 £

Késedelmi tag: a rendszer havi 40 000 £ duplikált értékelést kerül el;
az építés 10 hónappal később érkezik, mint a vétel.
CoD = 10 × 40 000 = 400 000 £

Tényleges összehasonlítás: 900 000 £ (vétel) vs 2 010 000 £ + 400 000 £ = 2 410 000 £ (építés)
```

A vétel nagyjából 1,5 millió £-dal nyer öt év alatt, és az építési becslés után a legnagyobb egyedi tétel a késedelmi költség, amelyet egy tisztán tőke-összehasonlítás soha nem hozott volna felszínre.

## Kapcsolat a szoftverfejlesztéssel

Azok a fegyelmek, amelyek ebből az elemzésből közvetlenül átmennek a szállítási gyakorlatba: **előzetes alapú kockázati korrekció** — a Mott MacDonald-korrekció a Green Book optimizmus-torzításának szoftveres megfelelője, mechanikusan alkalmazva, így a csapatoknak a kivételekért kell érvelniük, nem feltételezniük, hogy az ő becslésük a kivétel; **összehasonlítási őszinteség** — az építés alternatívája a legjobb elérhető vétel, nem a „semmi”, ami közvetlenül az [alternatívaköltség a közkiadásokban](../alternatívaköltség-a-közkiadásokban/) témához kapcsolódik; és **őszinte TCO-összehasonlítás** — minden építési javaslatot egy vételi változat teljes [birtoklási költségéhez](../teljes-birtoklási-költség-a-kormányzati-it-ban/) kell hasonlítani, nem a listaárához. Ahol az építés valóban nyer, a további építési idő [késedelmi költségét](../a-késedelem-költsége-a-közprogramokban/) kifejezetten be kell árazni az üzleti esetben, nem kimondatlan feltevésként hagyni, hogy az idő nem számít.

## Buktatók

- **A szállítói listaár összehasonlítása egy kockázattal nem korrigált építési becsléssel**: ez az építést kétszeresen hízelegi, egyszer a költségen, egyszer az ütemezésen.
- **Nulla áron számolt belső munka**: a köztisztviselői mérnöki időt „ingyenesként” kezelik, mert már a tárcai létszámköltségvetésen van, ami elrejti valódi alternatívaköltségét más munkákkal szemben, amelyeket az a csapat végezhetne.
- **Beárazatlan bezártság mindkét irányban**: a szállítóváltás és az adathordozhatóság költségei valódiak, de egy egyedi építés busz-faktora is az, valamint az, hogy az élettartama alatt egy kis, nehezen pótolható belső csapat megtartásától függ.
- **Küldetést megkülönböztetőként állított csővezeték**: „ez a lényegünk” kijelentés az integrációs köztesrétegről vagy egy dokumentumtárról — tesztelik, hogy egy állampolgár vagy ügyintéző valaha észrevenné-e, melyik fut alatta.

## Források

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, annak eldöntése, hogy technológiát építsenek vagy vegyenek. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book kiegészítő útmutató az optimizmus-torzításról. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
