# Indicele Deprivării Multiple (IMD)

IMD este măsura oficială a deprivării relative pentru zonele mici din Anglia, clasând fiecare dintre cele 32.844 de zone de nivel inferior (Lower-layer Super Output Areas, LSOA, fiecare cu circa 1.500 de rezidenți) de la 1 (cea mai deprivată) la 32.844 (cea mai puțin deprivată). Este publicat de actualul Ministry of Housing, Communities and Local Government (MHCLG, fost MHCLG/DCLG), cel mai recent ca English Indices of Deprivation 2019, și direcționează direct finanțarea guvernului central, prioritizarea sănătății publice și eligibilitatea pentru zeci de scheme locale.

## De ce contează

Deprivarea nu este un singur lucru — o zonă poate fi săracă ca venit, dar sigură, sau cu venit adecvat, dar suferind de rezultate slabe de sănătate și locuințe proaste. Indicii predecesori ai IMD (care datează din indicatorii de deprivare ai Department of the Environment din anii 1970) au evoluat în modelul actual cu șapte domenii tocmai pentru că țintirea după un singur indicator (rata șomajului singură, să zicem) rata în mod curent zone deprivate în alte feluri. IMD 2019 combină venitul, ocuparea, educația, sănătatea, criminalitatea, barierele în calea locuințelor și serviciilor și mediul de viață într-un singur rang compus per LSOA, fiecare domeniu construit din propriul coș de indicatori și ponderat conform metodologiei MHCLG. Deoarece operează la nivel de zonă mică (LSOA), nu de autoritate locală, scoate la iveală buzunare de deprivare ascunse în districte altfel prospere — motivul pentru care IMD, nu venitul mediu al autorității locale, este ceea ce folosesc efectiv NHS England, pupil premium al Department for Education și zeci de formule de finanțare ale autorităților locale. Software-ul care stabilește eligibilitatea, prioritizează acțiunile de outreach sau raportează impactul pe zone în Anglia ar trebui să trateze decila sau rangul IMD ca input de primă clasă, nu ca un gând ulterior — iar acolo unde un program vizează deliberat cele mai deprivate zone, evaluarea sa ar trebui să aplice [ponderarea distributivă](../ponderarea-distributivă/) consecventă cu acea țintire, în loc să evalueze o liră de beneficiu la fel indiferent unde ajunge.

## Matematica

```
7 domenii, ponderate:
  Venit                                   22,5%
  Ocupare                                 22,5%
  Educație, competențe și formare         13,5%
  Deprivarea sănătății și dizabilitate    13,5%
  Criminalitate                            9,3%
  Bariere în calea locuințelor și serviciilor  9,3%
  Mediul de viață                          9,3%

Scorul fiecărui domeniu: indicatorii sunt standardizați (clasați, apoi transformați
spre o distribuție normală) și combinați prin transformare exponențială
astfel încât deprivarea ridicată la oricare indicator să nu poată fi pe deplin
anulată de deprivarea scăzută la alții din cadrul acelui domeniu.

Scor compus IMD (LSOA) = Σ (scor domeniu × pondere domeniu)
Clasarea LSOA după scorul compus → 1 (cea mai deprivată) la 32.844 (cea mai puțin deprivată)
Decile: rang ÷ 3.284 (aprox.), decila 1 = cele mai deprivate 10% LSOA
```

## Exemplu lucrat

**Scor compus LSOA**, folosind scoruri standardizate ilustrative ale domeniilor (0 = niciun semnal de deprivare, mai mare = mai deprivat):

```
Venit                  0,35 × 0,225 = 0,07875
Ocupare                0,30 × 0,225 = 0,06750
Educație               0,20 × 0,135 = 0,02700
Sănătate               0,15 × 0,135 = 0,02025
Criminalitate          0,10 × 0,093 = 0,00930
Bariere locuințe       0,05 × 0,093 = 0,00465
Mediul de viață        0,08 × 0,093 = 0,00744

Scor compus = 0,07875 + 0,06750 + 0,02700 + 0,02025
            + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Acest scor compus este apoi clasat față de scorurile tuturor celor 32.844 de LSOA. Dacă plasează LSOA pe rangul 2.950, se încadrează în decila 1 (2.950 ÷ 3.284 ≈ 0,9, adică în cele mai deprivate 10% dintre cartierele din Anglia) — ceea ce pentru multe formule de finanțare este pragul care deblochează eligibilitatea, indiferent cum se clasează în medie autoritatea locală înconjurătoare.

## Legătura cu ingineria software

- Orice serviciu care geocodează utilizatorii la cod poștal sau LSOA poate uni tabelul de corespondență IMD publicat (un CSV gratuit, versionat, de la MHCLG) pentru a adăuga decila de deprivare ca o covariată — pentru țintirea acțiunilor de outreach, prioritizarea volumului de cazuri sau raportarea rezultatelor pe benzi de deprivare fără a colecta date personale noi.
- Decila IMD este o verificare standard a echității pentru serviciile digitale publice: tabularea încrucișată a utilizării serviciului, a abandonului sau a satisfacției după decila IMD scoate la iveală lacune de acces pe care o metrică agregată le ascunde — vezi [incluziunea digitală](../incluziunea-digitală/) și [metricile de satisfacție a cetățenilor](../metrici-de-satisfacție-a-cetățenilor/).
- Deoarece rangul IMD este relativ (însumează mereu un set fix de ranguri în Anglia), nu poate arăta dacă deprivarea la nivel național crește sau scade în timp — doar ce zone se clasează unde una față de alta în acea ediție; nu construiți tablouri de bord de tendințe absolute doar pe rangul IMD brut.

## Capcane

- **Compararea rangurilor IMD între ediții (2015 vs. 2019) ca tendință în timp** — indicatorii de bază, geografiile și metodologia se schimbă toate între ediții; MHCLG sfătuiește explicit împotriva folosirii schimbărilor de rang ca dovadă că o zonă a devenit mai mult sau mai puțin deprivată.
- **Aplicarea IMD la nivel de LSOA persoanelor individuale** — o LSOA din decila 1 conține totuși gospodării nedeprivate, iar o LSOA din decila 10 conține totuși gospodării deprivate; IMD descrie zone, nu oameni, iar folosirea lui ca proxy de eligibilitate individuală clasifică greșit în ambele direcții.
- **Ignorarea detaliului la nivel de domeniu în favoarea rangului compus** — două LSOA cu scoruri compuse identice pot avea profiluri de domenii complet diferite (una deprivată în sănătate, alta în criminalitate); o schemă de țintire orientată spre o problemă ar trebui să folosească scorul domeniului relevant, nu compusul amestecat.

## Surse

- Ministry of Housing, Communities and Local Government. „English Indices of Deprivation 2019.” <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. „The English Indices of Deprivation 2019: Technical Report.”
