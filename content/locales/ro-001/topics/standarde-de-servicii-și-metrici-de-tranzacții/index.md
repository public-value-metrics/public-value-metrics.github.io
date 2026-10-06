# Standarde de servicii și metrici de tranzacții

GOV.UK Service Standard este lista de verificare în 14 puncte a guvernului britanic pentru construirea și operarea unui serviciu digital public și vine în pereche cu un set mic, obligatoriu, de metrici cantitative de tranzacții — cost per tranzacție, rata de finalizare, adoptarea digitală și satisfacția utilizatorilor — pe care echipele trebuie să le publice pentru fiecare serviciu activ al guvernului central. Împreună, standardul și metricile sunt specializarea operațională, de zi cu zi, a cadrelor mai largi de valoare publică și KPI din acest depozit, orientată direct spre echipele de livrare software.

## De ce contează

Service Standard, întreținut în manualul de servicii GOV.UK, cere ca fiecare evaluare punctuală (alfa, beta, live) a unui serviciu digital guvernamental să demonstreze — printre cele 14 puncte ale sale — că echipa înțelege nevoile utilizatorilor, lucrează într-o echipă multidisciplinară, iterează și se îmbunătățește frecvent și *evaluează instrumentele, sistemele și modurile de lucru*. Istoric, aceasta stătea alături de un Performance Platform public unde fiecare serviciu activ își publica deschis datele tranzacțiilor; acea platformă a fost între timp retrasă, dar obligația de bază de a măsura și publica aceste patru metrici principale persistă prin îndrumările „measuring success” ale manualului de servicii. Motivul pentru care aceasta diferă de un tablou de bord KPI software generic este că aceste metrici au fost proiectate explicit ca un singur model economic legat, nu patru scoruri independente: întregul argument al economiilor pentru guvernul digital — Digital Efficiency Report al Government Digital Service a constatat tranzacții digitale de aproximativ 20 de ori mai ieftine decât cele telefonice și de circa 50 de ori mai ieftine decât cele față în față pentru servicii comparabile ale administrației locale — se materializează doar dacă rata de finalizare rămâne ridicată și adoptarea digitală crește cu adevărat, nu doar adaugă un canal ieftin alături de unul scump neschimbat.

## Matematica

```
Cost per tranzacție   = costul total de rulare al serviciului / numărul de tranzacții finalizate
Rata de finalizare    = tranzacții finalizate / tranzacții începute × 100
Adoptare digitală     = tranzacții pe canalul digital / tranzacții pe toate canalele × 100
Satisfacția utilizatorilor = % mulțumiți + foarte mulțumiți, sondaj în 5 puncte în cadrul serviciului

Economie din mutarea canalelor = volum de tranzacții × schimbarea adoptării × (cost per tranzacție
                                  pe canalul vechi − cost per tranzacție digital)

Cost al cererii generate de eșec = (1 − rata de finalizare) × tranzacții încercate digital ×
                                    costul canalului de rezervă pe care acei utilizatori îl folosesc în schimb
```

## Exemplu lucrat

**Serviciu ilustrativ de reînnoire a licențelor al guvernului central**, 2 milioane de tranzacții/an, în prezent 65% telefon (3,00 £/tranzacție) și 35% digital (0,30 £/tranzacție), rata de finalizare 80%. O reproiectare conform Service Standard în 14 puncte ridică adoptarea digitală la 60% și finalizarea la 92%:

```
Economie din schimbarea adoptării = 2.000.000 × 0,25 × (3,00 − 0,30) = 1.350.000 £/an

Cost al cererii generate de eșec, înainte:
  2.000.000 × 0,35 × (1 − 0,80) × 3,00 £ = 420.000 £/an (cei care abandonează revin la telefon)

Cost al cererii generate de eșec, după:
  2.000.000 × 0,60 × (1 − 0,92) × 3,00 £ = 288.000 £/an

Economie netă din cererea generată de eșec = 420.000 £ − 288.000 £ = 132.000 £/an

Economie anuală totală ≈ 1.350.000 £ + 132.000 £ = 1.482.000 £/an
```

Aritmetica face explicit de ce rata de finalizare nu este o metrică secundară: fără îmbunătățirea de la 80% la 92%, economia din schimbarea adoptării ar fi parțial recuperată de cererea generată de eșec care redirecționează utilizatorii digitali frustrați direct înapoi spre canalul telefonic scump.

## Legătura cu ingineria software

Aceste patru metrici sunt un exemplu funcțional de tablou de bord cost-consecințe: o singură metrică de cost ținută separat de trei metrici de rezultat/calitate, deliberat niciodată prăbușite într-un singur scor — aceeași disciplină susținută în [KPI-urile sectorului public](../kpi-urile-sectorului-public/). Pentru ingineri, aceasta se descompune în muncă concretă, cu proprietar: rata de finalizare este o problemă de instrumentare a pâlniei, iar fiecare punct de abandon din parcurs este, în principiu, localizabil și reparabil; costul per tranzacție cere contabilitate autentică a costurilor unitare, inclusiv costurile canalelor asistate de personal și pe hârtie, nu doar cheltuielile de găzduire în cloud (vezi [costul per tranzacție](../costul-per-tranzacție/) și [costul total de proprietate în IT-ul guvernamental](../costul-total-de-proprietate-în-it-ul-guvernamental/)); iar adoptarea digitală este o metrică de echitate în costum de eficiență — cetățenii care nu pot sau nu vor să schimbe canalul sunt disproporționat în vârstă, cu dizabilități sau excluși digital, deci închiderea agresivă a canalelor transformă o „economie” într-un prejudiciu de acces (vezi [incluziunea digitală](../incluziunea-digitală/) și [economiile din mutarea canalelor](../economii-din-mutarea-canalelor/)). Standardul în 14 puncte este el însuși specificația de proces din spatele acestor numere — vezi [standardul serviciilor digitale](../standardul-serviciilor-digitale/) pentru standardul complet și [metricile de satisfacție a cetățenilor](../metrici-de-satisfacție-a-cetățenilor/) pentru modul în care cifra de satisfacție de aici se raportează la măsurarea mai largă a încrederii.

## Capcane

- **Adoptare obținută prin închiderea canalului alternativ**: închiderea unei linii telefonice ridică aritmetic procentul adoptării digitale în timp ce aruncă cererea generată de eșec pe orice canal rămâne (adesea o cale mai scumpă cu asistență digitală sau față în față); măsurați întotdeauna costul întregului sistem, nu doar raportul.
- **Măsurarea ratei de finalizare de la pasul doi al pâlniei**: începerea numărătorii „începute” după primul punct real de abandon flatează rata de finalizare și ascunde cea mai mare pierdere remediabilă.
- **Cost per tranzacție care exclude sprijinul de asistență digitală**: un cost unitar doar digital care ignoră timpul de personal petrecut ajutând utilizatorii care nu se pot autoservi subestimează costul real al canalului.
- **Publicarea metricilor fără o definiție comună între servicii**: „tranzacție” și „finalizată” înseamnă lucruri diferite în echipe de servicii diferite dacă definițiile nu sunt standardizate și versionate, ceea ce face comparația între servicii nesigură.

## Surse

- GOV.UK Service Manual, „The Service Standard.” <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, „Measuring Success — Data You Must Publish.” <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, „Digital Efficiency Report.” <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
