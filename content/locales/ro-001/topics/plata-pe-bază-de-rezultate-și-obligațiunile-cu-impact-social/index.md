# Plata pe bază de rezultate și obligațiunile cu impact social (PbR/SIB)

Plata pe bază de rezultate (PbR) plătește un furnizor în funcție de rezultatele verificate obținute, nu de activitățile desfășurate. O obligațiune cu impact social (SIB) este o structură specifică de finanțare PbR în care investitori privați sau filantropici finanțează în avans livrarea serviciului și sunt rambursați — cu un randament — de un comisar guvernamental doar dacă rezultatele măsurate independent ating pragurile convenite, mutând riscul de livrare de la contribuabil la investitor.

## De ce contează

Prima SIB din lume a fost lansată la HMP Peterborough în septembrie 2010: Social Finance a strâns 5 milioane £ de la 17 investitori pentru a finanța „One Service”, care lucra cu deținuți cu pedepse scurte (sub 12 luni) pentru a reduce recidiva, Ministry of Justice și Big Lottery Fund fiind de acord să ramburseze investitorii doar dacă evenimentele de recondamnare scădeau cu cel puțin 7,5% față de o cohortă națională de comparație potrivită. Ultima cohortă a pilotului Peterborough a înregistrat o reducere de 9,7% a recondamnărilor, confortabil peste prag, iar investitorii au fost rambursați cu un randament. Mecanismul a contat deoarece a rezolvat o problemă specifică de comisionare: guvernul voia să plătească pentru rezultate în loc de intrări, dar nu putea absorbi riscul financiar al unei intervenții care ar fi putut să nu funcționeze, așa că structura SIB a mutat acel risc către investitori dispuși să-l garanteze. Government Outcomes Lab (GO Lab) de la Blavatnik School of Government din Oxford întreține acum cea mai completă bază publică de dovezi privind performanța PbR și SIB din lume, urmărind cu mult peste 200 de obligațiuni de impact la nivel global și publicând cercetări despre ce caracteristici de proiectare se corelează cu succesul sau eșecul. Lecția la care baza de dovezi revine în mod repetat este că *metrica de rezultat aleasă* și cine suportă riscul ratării ei determină aproape tot restul despre cum se comportă efectiv un contract PbR în practică.

## Matematica

```
Plată PbR = plată de bază (dacă există) + Σ (rezultat obținut × preț unitar per rezultat)

Randamentul investitorului într-o obligațiune cu impact social:
  Cheltuiala investitorului = capital avansat care finanțează livrarea serviciului
  Plata pe rezultat         = comisarul plătește doar dacă rezultat ≥ prag, scalat în funcție
                              de cât de mult peste prag ajunge performanța
  Randamentul investitorului = plăți pe rezultat primite − cheltuiala investitorului
                              (o rată de randament, adesea plafonată, reflectând riscul asumat)

Parametri cheie de proiectare care determină comportamentul întregului contract:
  Metrica de rezultat      — trebuie să fie un rezultat, nu o realizare (vezi outcomes-vs-outputs)
  Comparație/contrafactual — de obicei o cohortă potrivită (vezi counterfactual-analysis)
  Pragul de plată          — îmbunătățirea minimă înainte de declanșarea oricărei plăți
  Curba de plată           — liniară, în trepte sau plafonată peste prag
  Reducere pentru atribuire/efect de inerție — vezi additionality-and-deadweight
```

## Exemplu lucrat

**Peterborough One Service** (cifre ilustrative extrase din evaluări publicate):

```
Capital strâns de la investitori: 5.000.000 £
Cohortă:                          ~3.000 de deținuți bărbați cu pedepse scurte, în două cohorte
Prag:                             ≥7,5% reducere a evenimentelor de recondamnare față de un grup
                                  național de comparație potrivit, altfel nicio plată
Rezultat cohorta 1:               reducere de 8,4% — sub bara contractuală pentru acea
                                  cohortă singură conform regulilor originale
Rezultat combinat/final:          reducere de 9,7% — peste prag
Plata pe rezultat:                guvernul (Ministry of Justice / Big Lottery Fund)
                                  plătește pe punct procentual peste prag, finanțând
                                  rambursarea investitorilor plus un randament
```

**Contract PbR al unei autorități locale (ilustrativ)**: un serviciu de intervenție pentru familii este comisionat la 4.000 £ per familie trimisă (plată pentru activitate) plus 6.000 £ per familie fără nicio altă trimitere către protecția copilului la 12 luni după închidere (plată pentru rezultat). 200 de familii trimise, 150 de cazuri închise, 96 rămân fără trimiteri la 12 luni:

```
Plată pentru activitate = 200 × 4.000 £ = 800.000 £
Plată pentru rezultat   = 96 × 6.000 £  = 576.000 £
Cost total al contractului = 1.376.000 £ pentru 96 de rezultate susținute confirmate
Cost per rezultat confirmat ≈ 14.333 £ (vezi cost-per-outcome)
```

## Legătura cu ingineria software

Plata pe bază de rezultate este o problemă de aliniere a stimulentelor înainte de a fi o problemă de date, iar sistemul de date este locul unde acea aliniere fie ține, fie se rupe. Verificarea independentă, rezistentă la manipulare, a rezultatelor este tot jocul: comisarul și furnizorul au stimulente opuse privind felul în care este codificat un caz ambiguu, deci sistemul care înregistrează rezultatele are nevoie de o pistă de audit, un acord de partajare a datelor cu verificatorul independent (adesea un organism diferit de furnizor, uneori un organism de statistică oficială care potrivește cu înregistrări ale poliției sau ale beneficiilor) și versionare imuabilă a definiției rezultatului — echivalentul PbR al capcanei „redefinirii metricii” din [KPI-urile sectorului public](../kpi-urile-sectorului-public/). Calculele de atribuire depind de metodele de cohortă potrivită din [analiza contrafactuală](../analiza-contrafactuală/), care au nevoie de cod reproductibil, auditabil, nu de o foaie de calcul unică. Iar metrica însăși trebuie să fie un rezultat autentic, nu o activitate proxy — vezi [rezultate versus realizări](../rezultate-versus-realizări/) — deoarece un contract PbR care plătește pentru o realizare pur și simplu reetichetează finanțarea obișnuită cu un cost de tranzacție suplimentar. Acolo unde rentabilitatea socială a unei SIB este modelată prospectiv, acea evaluare împrumută de regulă direct din metodologia [rentabilității sociale a investiției](../rentabilitatea-socială-a-investiției/).

## Capcane

- **Plata pentru un rezultat proxy ușor de manipulat**: „prezența la sesiuni” este o activitate deghizată în rezultat; insistați pe o măsură care reflectă schimbarea reală căutată (recidivă, angajare, stabilitate locativă).
- **Niciun contrafactual credibil**: fără un grup de comparație potrivit, o îmbunătățire poate fi o revenire la medie sau o tendință mai largă, nu efectul programului — vezi [analiza contrafactuală](../analiza-contrafactuală/) și [adiționalitatea și efectul de inerție](../adiționalitate-și-efect-de-inerție/).
- **Subestimarea costurilor de tranzacție și de evaluare**: verificarea independentă, legarea datelor și administrarea contractelor pentru schemele PbR/SIB ajung în mod curent la procente de două cifre din valoarea contractului — baza de dovezi GO Lab documentează aceasta ca factor recurent al întreruperii schemelor.
- **Selectarea avantajoasă sau „parcarea”**: furnizorii plătiți per rezultat au un stimulent direct să prioritizeze clienții cel mai probabil să reușească oricum și să amâne cazurile cele mai grele — proiectați niveluri de plată sau ajustări ale mixului de cazuri pentru a contracara.

## Surse

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government. <https://golab.bsg.ox.ac.uk/>
- Social Finance, rezumate de evaluare „Peterborough Social Impact Bond”. <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, „Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results for the Peterborough Social Impact Bond.”
