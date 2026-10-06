# Costul total de proprietate (TCO) în IT-ul guvernamental

Costul total de proprietate este costul complet al ciclului de viață al unui sistem — achiziția plus fiecare an de rulare — actualizat la o dată comună. În IT-ul guvernamental, cea mai fiabilă eroare de prognoză este compararea furnizorilor sau a opțiunilor doar după prețul de achiziție, când operarea și întreținerea reprezintă de obicei undeva între jumătate și patru cincimi din factura pe întreaga durată.

## De ce contează

Green Book al HM Treasury cere ca cazul financiar din orice caz de afaceri construit pe modelul celor cinci cazuri să acopere costurile pe întreg ciclul de viață, nu doar cheltuielile de capital — totuși National Audit Office a constatat în repetate rânduri departamente care aprobă investiții IT față de o prognoză incompletă sau optimistă a costurilor de rulare, doar pentru a descoperi costul operațional real odată ce sistemul este în funcțiune și linia bugetului de capital s-a închis. Technology Code of Practice al Government Digital Service și al Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) împinge departamentele spre găzduire în cloud și de tip comoditate parțial pentru că face costul continuu vizibil și comparabil, în loc să fie îngropat într-o singură cifră de achiziție de capital care arată atrăgător de mică la aprobare și scump greșită trei ani mai târziu.

## Matematica

```
TCO = Cost de achiziție + Σ(t=1..N) Cost operațional anual_t / (1+r)^t
      − valoare reziduală (actualizată)

r = rata de actualizare socială standard Green Book a HM Treasury, 3,5%/an
    (program descrescător de rate pentru orizonturi peste 30 de ani)

Componentele costului operațional: găzduire/licențiere, suport și întreținere,
patch-uri de securitate și conformitate, timp de personal, reîmprospătare/migrare planificată
```

Vezi [rata de actualizare socială](../rata-de-actualizare-socială/) pentru motivul pentru care factorul de actualizare contează pe durata tipică de viață a unui sistem de 5–10 ani și [a construi sau a cumpăra în guvern](../a-construi-sau-a-cumpăra-în-guvern/) pentru felul în care TCO alimentează o decizie de construire/cumpărare.

## Exemplu lucrat

Un departament compară două sisteme de gestionare a cazurilor pe un orizont de 5 ani la rata de actualizare Green Book de 3,5%.

```
Sistemul A: capex 3.500.000 £, opex 250.000 £/an
Sistemul B: capex 1.800.000 £ (pare mai ieftin), opex 650.000 £/an
            (suport mai greu din partea furnizorului și povară de integrare)

Comparația naivă doar pe capex: câștigă B, 1,8 mil. £ < 3,5 mil. £.

Suma factorilor de actualizare, 5 ani la 3,5%: 0,966+0,934+0,902+0,871+0,842 ≈ 4,515

TCO_A = 3.500.000 + 250.000 × 4,515 = 3.500.000 + 1.128.750 = 4.628.750 £
TCO_B = 1.800.000 + 650.000 × 4,515 = 1.800.000 + 2.934.750 = 4.734.750 £
```

TCO inversează decizia naivă: Sistemul B este marginal mai scump pe cinci ani odată ce costul operațional este actualizat și însumat, deoarece ponderea opex în costul său pe durata de viață este 62% (2.934.750 / 4.734.750) față de 24% la Sistemul A — o instanță concretă a constatării „întreținerea este majoritatea facturii”, ascunsă complet de compararea prețurilor de listă.

## Legătura cu ingineria software

TCO este numărul care ar trebui să disciplineze fiecare decizie [a construi sau a cumpăra](../a-construi-sau-a-cumpăra-în-guvern/) și fiecare caz de rambursare a [datoriei tehnice](../datoria-tehnică-ca-eroziune-a-valorii-publice/), deoarece dobânda datoriei și întreținerea amânată sunt ambele linii de cost operațional care aparțin aceluiași total actualizat, indiferent dacă le-a urmărit cineva. Inginerii care propun o alegere de platformă sau furnizor ar trebui să prezinte tabelul complet TCO, nu prețul de achiziție, deoarece prețul de achiziție este exact numărul pe care cazul financiar Green Book a fost conceput să împiedice departamentele să se bazeze doar pe el. TCO este și numitorul onest pentru judecățile de [valoare pentru bani](../valoarea-pentru-bani/) — VFM compară beneficiul cu costul, iar o linie de cost subnumărată umflă fiecare raport VFM din cazul de afaceri.

## Capcane

- **Compararea doar pe capex**: cea mai frecventă greșeală de achiziție — compararea prețurilor de listă ale furnizorilor fără o prognoză corespunzătoare a costurilor de operare pentru fiecare opțiune.
- **Excluderea costurilor de ieșire și migrare**: extragerea datelor la sfârșitul contractului, reorientarea pe altă platformă și penalizările de blocare la furnizor sunt linii reale de TCO care apar rareori în cazul de afaceri inițial.
- **Excluderea costurilor de securitate și conformitate**: cadența patch-urilor, reînnoirea acreditărilor și costul auditului cresc cu vârsta și complexitatea sistemului — vezi [valoarea securității cibernetice a sectorului public](../valoarea-securității-cibernetice-a-sectorului-public/) — și sunt omise în mod curent din prognoza opex.
- **Comparație neactualizată între opțiuni cu profiluri de cost diferite**: compararea unei opțiuni grele în capex cu una grea în opex fără actualizare favorizează sistematic opțiunea care amână mai mult cost în anii ulteriori.

## Surse

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
