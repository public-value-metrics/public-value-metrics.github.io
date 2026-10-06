# Valoarea pentru bani (VFM)

Valoarea pentru bani este testul formal al sectorului public din Regatul Unit pentru a stabili dacă cheltuielile ating cel mai bun echilibru disponibil între cost și beneficiu. Green Book al HM Treasury o încadrează prin trei „E” — economy (economicitate), efficiency (eficiență) și effectiveness (eficacitate) — iar echitatea (equity) este tot mai des susținută ca un al patrulea, contestat. Fiecare caz de afaceri din sectorul public care supraviețuiește controlului trebuie să răspundă explicit la toate trei, nu doar să pretindă că cheltuiala „merită”.

## De ce contează

VFM nu este un sinonim pentru „ieftin”. Green Book (HM Treasury, ediția 2022) afirmă explicit că achiziția opțiunii cu cel mai mic cost (economicitate) fără a verifica dacă produce rezultatele intenționate (eficacitate) este o greșeală frecventă și costisitoare — o achiziție care economisește 10% la costul unitar, dar oferă cu 40% mai puțin impact, este o valoare mai slabă, nu mai bună. Cadrul celor trei E obligă un caz de afaceri să separe trei moduri de eșec cu adevărat diferite: plata prea mare pentru intrări, risipa de intrări în conversia lor în realizări și producerea unor realizări care nu se traduc în rezultate dorite de cineva. Controalele cheltuielilor guvernamentale din Regatul Unit — punctele de aprobare ale Trezoreriei, studiile de valoare pentru bani ale National Audit Office (NAO) și evaluările funcționarilor responsabili ai departamentelor — sunt construite în jurul acestui test în trei părți, astfel încât un caz de afaceri de inginerie care abordează doar costul (economicitatea) va eșua la control chiar dacă tehnologia este solidă.

Al „patrulea E”, echitatea, este contestat tocmai pentru că poate intra în conflict cu celelalte trei: cea mai eficientă modalitate de a livra un serviciu la nivel național este rareori cea mai echitabilă, deoarece concentrarea livrării acolo unde este cel mai ieftin să ajungi la cetățeni înseamnă adesea deservirea insuficientă a celor mai greu de atins. Revizuirea din 2020 a Green Book a răspuns criticilor (inclusiv ale Treasury Select Committee din 2020 și ale IPPR North) potrivit cărora rapoartele pure cost-beneficiu au favorizat sistematic regiunile deja prospere, cerând ca evaluările să abordeze explicit impactul distributiv — vezi [ponderarea distributivă](../ponderarea-distributivă/).

## Matematica

VFM nu este un singur raport, ci un diagnostic în trei (sau patru) părți, aplicat în secvență:

```
Economicitate: Sunt intrările achiziționate la cel mai mic cost rezonabil
               pentru calitatea cerută?  (£ per unitate de intrare)

Eficiență:     Cât de bine sunt convertite intrările în realizări?
               (realizări / intrări, ex. cazuri procesate pe oră-lucrător)

Eficacitate:   Produc realizările efectiv rezultatele intenționate?
               (rezultate obținute / rezultate intenționate)

[Echitate]:    Sunt costurile și beneficiile distribuite echitabil în
               populație, sau concentrate la cei care au cea mai mică nevoie?
```

Un eșec VFM poate apărea independent în orice etapă: achiziție economicoasă cu livrare ineficientă; livrare eficientă a realizării greșite; rezultate eficace cumpărate la un cost excesiv. Vezi [KPI-urile sectorului public](../kpi-urile-sectorului-public/) pentru felul în care acestea se traduc în indicatori măsurabili și [analiza cost-eficacitate în guvern](../analiza-cost-eficacitate-în-guvern/) pentru metoda formală de comparare.

## Exemplu lucrat

**Centru de contact al unei autorități locale**: un consiliu compară două opțiuni pentru un nou sistem de gestionare a cazurilor.

- *Opțiunea A*: licență de 600.000 £ (cea mai ieftină disponibilă), dar agenții continuă să petreacă în medie 22 de minute pe caz deoarece fluxul de lucru cere reintroducere manuală între sisteme — eficiența este slabă.
- *Opțiunea B*: licență de 900.000 £, flux de lucru integrat, agenții petrec în medie 9 minute pe caz.

Economicitatea singură favorizează A (cu 300.000 £ mai ieftină). Dar la 40.000 de cazuri/an, A costă 40.000 × 22/60 = 14.667 ore de personal; B costă 40.000 × 9/60 = 6.000 de ore de personal. La un cost de personal complet încărcat de 28 £/oră, A costă 410.667 £/an în timp de personal față de 168.000 £/an pentru B — o diferență de eficiență de 242.667 £/an care o depășește pe cea inițială de economicitate de 300.000 £ în 14 luni. VFM favorizează B odată ce eficiența este luată în calcul, nu A.

**Grant de livrare pentru o organizație caritabilă**: un finanțator compară un grant de 50.000 £ care obține 200 de plasări reușite pe piața muncii (250 £/plasare — economicitate aparent excelentă) cu un grant de 120.000 £ care obține 350 de plasări ce durează peste 12 luni, în timp ce jumătate din plasările primului grant încetează în 3 luni. Eficacitatea — rezultate durabile — inversează clasamentul aparent VFM: costul real pe o plasare *durabilă* este 250 £ ÷ 0,5 = 500 £ pentru primul grant, față de 120.000/350 ≈ 343 £ pentru al doilea.

## Legătura cu ingineria software

VFM oferă echipelor de inginerie o disciplină pentru a încadra cazurile de afaceri tehnologice așa cum le vor citi efectiv funcțiile financiare și de audit:

- Enunțați economicitatea, eficiența și eficacitatea ca linii separate într-un caz de afaceri, nu ca un singur număr amestecat de „valoare” — un recenzent format pe Green Book va cere exact această defalcare.
- Feriți-vă de optimizarea costului de achiziție (economicitate) în detrimentul integrării și eficienței fluxului de lucru, o falsă economie foarte frecventă în IT-ul guvernamental (vezi [costul total de proprietate în IT-ul guvernamental](../costul-total-de-proprietate-în-it-ul-guvernamental/) și [a construi sau a cumpăra în guvern](../a-construi-sau-a-cumpăra-în-guvern/)).
- Eficacitatea cere date despre rezultate, nu doar numărători de realizări — legați metricile de livrare de [rezultate versus realizări](../rezultate-versus-realizări/) și de o evaluare reală prin [analiza contrafactuală](../analiza-contrafactuală/), în loc să presupuneți că realizările implică rezultate.
- Când un sistem servește inegal între regiuni sau grupuri demografice, întrebarea echității este o obiecție legitimă VFM, nu un „simplu plus” separat — vezi [incluziunea digitală](../incluziunea-digitală/).

## Capcane

- **Echivalarea VFM cu cel mai mic preț.** Economicitatea este o treime (sau un sfert) din test; Green Book avertizează explicit împotriva regulilor de achiziție „cel mai mic cost” care ignoră eficiența și eficacitatea.
- **Măsurarea realizărilor și numirea lor rezultate.** Debitul de cazuri (eficiență) nu este același lucru cu cazurile rezolvate bine (eficacitate); vezi [rezultate versus realizări](../rezultate-versus-realizări/).
- **Tratarea echității ca opțională.** De la actualizarea Green Book din 2020, impactul distributiv trebuie evaluat alături de cei trei E tradiționali, nu adăugat ulterior; adăugarea lui după aprobarea unui caz de afaceri este mult mai grea decât includerea sa de la început.
- **Compararea opțiunilor la volume diferite fără normalizare.** O comparație VFM pe unitate între opțiuni care servesc populații diferite trebuie să controleze scara, altfel comparația eficienței este lipsită de sens.

## Surse

- HM Treasury, „The Green Book: Central Government Guidance on Appraisal and Evaluation” (ediția 2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, „Framework to review programmes and projects” și metodologia studiilor VFM. <https://www.nao.org.uk/>
- HM Treasury, „The Magenta Book: Central Government Guidance on Evaluation” (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, „Transport Infrastructure Investment: Determining Value for Money” (probe prezentate pentru revizuirea din 2020 de către Treasury Select Committee a părtinirii regionale a Green Book).
