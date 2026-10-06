# Evaluarea Green Book (modelul celor cinci cazuri)

Green Book este ghidul obligatoriu al HM Treasury pentru evaluarea și aprecierea propunerilor de cheltuieli ale guvernului britanic. Instrumentul său central, modelul celor cinci cazuri, obligă un caz de afaceri să răspundă la cinci întrebări separate — este o idee bună, oferă valoare, poate fi achiziționat, poate fi suportat financiar și poate fi livrat — în loc să prăbușească totul într-un singur număr pe care un ministru îl poate aproba din condei.

## De ce contează

Fiecare propunere de cheltuieli a guvernului central britanic peste limitele delegate ale departamentului trebuie să treacă prin evaluarea Green Book înainte ca fondurile să fie eliberate, iar Green Book Review 2020 al HM Treasury (publicat după critici că procesul era părtinitor împotriva regiunilor mai sărace, vezi <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) a înăsprit cerința ca opțiunile să fie comparate cu o linie de bază autentică „minimum” și ca potrivirea strategică să fie demonstrată înainte chiar de evaluarea valorii pentru bani. Modelul celor cinci cazuri precede Green Book — a apărut la Office of Government Commerce ca structură standard a cazului de afaceri — dar ediția Green Book din 2022 îl încorporează ca formă obligatorie pentru orice caz de afaceri care caută aprobarea Trezoreriei: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Rostul împărțirii cazului în cinci este că o propunere poate eșua pe oricare dimensiune indiferent de celelalte. O replatformare IT solidă strategic și eficientă ca cost poate totuși eșua la cazul comercial dacă o poate livra un singur furnizor (creând risc de achiziție dintr-o singură sursă) sau poate eșua la cazul de management dacă departamentul nu are experiență în livrarea unor programe de o asemenea dimensiune. Un singur scor de „valoare pentru bani” ascunde exact acest tip de mod de eșec.

## Matematica

Modelul celor cinci cazuri este o structură, nu o formulă, dar fiecare caz are propriul test cantitativ sau probatoriu:

```
1. Cazul strategic
   Dovezi ale unui obiectiv de cheltuieli legat de strategia organizației.
   Test: există un motiv de schimbare? („a nu face nimic” este întotdeauna o opțiune.)

2. Cazul economic
   Evaluarea opțiunilor în raport cu o linie de bază „minimum”, folosind
   analiza cost-beneficiu socială sau analiza cost-eficacitate.
   Test: care opțiune maximizează valoarea publică netă?
   Vezi ../social-cost-benefit-analysis/ și ../cost-effectiveness-analysis-in-government/

3. Cazul comercial
   Angajarea pieței, calea de achiziție, alocarea riscurilor între
   cumpărător și furnizor.
   Test: poate fi opțiunea preferată achiziționată în condiții acceptabile?

4. Cazul financiar
   Suportabilitatea în limitele bugetare ale departamentului, sursa de
   finanțare, tratamentul în bilanț.
   Test: ne permitem, anul acesta și în fiecare an următor?

5. Cazul de management
   Guvernanță, plan de proiect, plan de realizare a beneficiilor, registrul riscurilor.
   Test: poate această organizație să o livreze efectiv?
   Vezi ../benefits-realization/
```

Cazul economic este locul unde se află evaluarea cantitativă: opțiunile sunt comparate pe baza valorii actualizate nete ajustate cu [rata de actualizare socială](../rata-de-actualizare-socială/), folosind metoda [analizei cost-beneficiu sociale](../analiza-cost-beneficiu-socială/) sau, unde beneficiile nu pot fi monetizate onest, prin [analiza cost-eficacitate](../analiza-cost-eficacitate-în-guvern/) ori [analiza decizională multicriterială](../analiza-decizională-multicriterială/).

## Exemplu lucrat

**Autoritate locală**: un consiliu care evaluează un sistem IT de reparații locative de 12 milioane £ parcurge cele cinci cazuri astfel. Cazul strategic: restanța de reparații încalcă standardul legal de locuințe decente în 18 luni fără intervenție. Cazul economic: trei opțiuni evaluate pe o perioadă de apreciere de 10 ani la o rată de actualizare de 3,5% (conform ratei standard a preferinței sociale pentru timp din Green Book 2022) — „minimum” (reparat sistemul vechi, VAN −4,1 mil. £), „cumpărare” (platformă COTS, VAN +2,3 mil. £), „construire” (platformă la comandă, VAN +0,6 mil. £ după aplicarea unei părtiniri de optimism de 40% pentru dezvoltarea de software asupra costului de capital neactualizat, conform Anexei A din Green Book). Cumpărarea câștigă cazul economic. Cazul comercial: există doi furnizori viabili, licitația competitivă este fezabilă — trece. Cazul financiar: capitalul este disponibil de la Public Works Loan Board, costurile de venituri se încadrează în planul financiar pe termen mediu — trece. Cazul de management: consiliul a livrat două sisteme comparabile în ultimii cinci ani — trece. Propunerea continuă cu „cumpărare”.

**Departament al guvernului central**: o propunere cu un caz economic puternic (VAN +40 mil. £), dar în care doar un furnizor deține acreditarea relevantă, pică testul cazului comercial privind tensiunea competitivă, forțând fie o derogare de achiziție dintr-o singură sursă (cu propria povară de control), fie reproiectarea specificației pentru a deschide piața — cazul economic singur nu ar fi scos niciodată aceasta la iveală.

## Legătura cu ingineria software

Echipele de inginerie din guvern sau din organizații finanțate prin granturi nu văd de obicei decât cazul economic, pentru că aceasta este partea pe care conducerea de produs și inginerie este rugată s-o justifice („care este ROI-ul acestei migrări?”). Dar un caz de afaceri care trece de Trezorerie sau de o comisie de granturi are nevoie de toate cinci, iar inginerii sunt adesea cei mai bine plasați să răspundă la cazul comercial (poate fi achiziționat cu adevărat sau ne blochează în formatul proprietar al unui singur furnizor?) și la cazul de management (avem capacitatea de livrare sau depinde de faptul că trei persoane anume nu pleacă?). Tratați o cerere pentru „doar cifrele cazului de afaceri” ca pe o cerere pentru o cincime din decizia reală. Vezi [valoarea pentru bani](../valoarea-pentru-bani/) pentru modul în care rezultatul cazului economic este de obicei rezumat și [costul total de proprietate](../costul-total-de-proprietate-în-it-ul-guvernamental/) pentru nucleul cantitativ obișnuit al cazului financiar.

## Capcane

- **Scrierea cazului economic mai întâi și a cazului strategic pe măsura lui.** Green Book Review 2020 a constatat că tocmai acest mod de eșec a condus părtinirea evaluărilor către locuri și sectoare deja bine documentate, consolidând inegalitatea regională; cazul strategic ar trebui să stabilească obiectivul înainte de compararea opțiunilor.
- **Tratarea „minimum” ca „a nu face nimic”.** Linia de bază corectă este opțiunea cu cel mai mic cost care încă îndeplinește obligațiile legale sau de siguranță minime, nu o fantezie a cheltuielilor zero — compararea cu zero literal umflă valoarea aparentă a fiecărei opțiuni.
- **Omiterea cazurilor comercial și de management pentru că cazul economic este puternic.** O propunere cu VAN mare care nu poate fi achiziționată competitiv sau livrată de organizația sponsor nu este o propunere finanțabilă; recenzenții Trezoreriei resping în mod curent din aceste motive chiar și cu un caz economic convingător.
- **Aplicarea modelului celor cinci cazuri o singură dată, la început.** Green Book cere reluarea cazului la fiecare poartă de aprobare ulterioară (cazul strategic schițat, cazul de afaceri schițat, cazul de afaceri complet) pe măsură ce costurile și dovezile se consolidează — un caz înghețat în faza de schiță ratează escaladarea costurilor pe care o poartă ulterioară ar fi prins-o.

## Surse

- HM Treasury. „The Green Book: appraisal and evaluation in central government.” 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. „Green Book Review 2020: findings and response.” 2020. <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. „Guide to developing the project business case.” <https://www.gov.uk/government/publications/project-business-case-guide>
