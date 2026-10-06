# A construi sau a cumpăra în guvern

„A construi sau a cumpăra” este o comparație structurată, ajustată la risc, între dezvoltarea la comandă și achiziția comercială sau de tip comoditate, comparată pe [costul total de proprietate](../costul-total-de-proprietate-în-it-ul-guvernamental/) actualizat, timpul până la valoare și risc. Guvernul este structural un sector care cumpără — Technology Code of Practice stabilește o prezumție în favoarea soluțiilor de tip comoditate și din cloud — totuși echipele de inginerie din departamente încă construiesc implicit, din aceleași motive ca orice constructori.

## De ce contează

Technology Code of Practice al Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>) și îndrumările însoțitoare din Service Manual privind decizia de a construi sau a cumpăra împing departamentele să justifice dezvoltarea la comandă față de prezumția că o capabilitate de tip comoditate ar trebui cumpărată, nu construită, și că doar o capabilitate cu adevărat nouă, diferențiatoare de misiune, justifică cod la comandă. Îndrumările suplimentare ale Green Book al HM Treasury privind părtinirea de optimism, extrase din revizuirea Mott MacDonald din 2002 a marilor achiziții publice, dau proiectelor IT cel mai larg interval de majorare din orice categorie evaluată — estimările costului de capital recomandate să fie majorate cu 10% la capătul de jos și cu până la 200% la capătul de sus înainte de a fi folosite în evaluare, reflectând cât de prost au fost subestimate istoric construcțiile software în achizițiile publice. Analiza a construi-sau-a-cumpăra există tocmai pentru a forța această ajustare la risc pe masă înainte de aprobare, în loc să o lase să iasă la iveală ca o cerere de acoperire a depășirii în cursul anului.

## Matematica

```
Comparați pe același orizont de 3–5 ani, actualizat la rata de actualizare socială
Green Book (vezi social-discount-rate.md):

VAN_opțiune = PV(beneficii, deplasate cu timpul până la valoare) − PV(TCO)

Ajustări la risc (tiparul de părtinire de optimism Green Book):
  cost de construire × 1,1–3,0       (intervalul de majorare pentru proiecte IT, Mott MacDonald)
  timp până la valoare la construire + 40–60%  (întârziere anterioară de implementare)
  cumpărare: adăugați verificarea realității integrării și costurile de ieșire din contract

Factori de decizie, în ordinea în care decid de obicei:
  1. diferențierea — este această capabilitate misiunea sau instalațiile?
  2. timpul până la valoare × costul întârzierii (vezi cost-of-delay-in-public-programmes.md)
  3. costul total de proprietate ajustat la risc
```

## Exemplu lucrat

O autoritate locală are nevoie de un sistem de gestionare a cazurilor pentru asistența socială a adulților. Cumpărare: SaaS la 180.000 £/an, în funcțiune în 4 luni. Construire: estimat 900.000 £ plus 150.000 £/an întreținere, în funcțiune în 14 luni.

```
Cost de construire ajustat la risc = 900.000 × 1,4 = 1.260.000 £
TCO pe 5 ani:
  cumpărare = 180.000 × 5 = 900.000 £
  construire = 1.260.000 + 150.000 × 5 = 2.010.000 £

Termenul de întârziere: sistemul evită 40.000 £/lună în evaluări duplicate;
construirea ajunge cu 10 luni mai târziu decât cumpărarea.
CoD = 10 × 40.000 = 400.000 £

Comparație efectivă: 900.000 £ (cumpărare) față de 2.010.000 £ + 400.000 £ = 2.410.000 £ (construire)
```

Cumpărarea câștigă cu aproximativ 1,5 milioane £ pe cinci ani, iar cea mai mare linie individuală după estimarea construirii însăși este costul întârzierii pe care o comparație pur pe capex nu l-ar fi scos niciodată la iveală.

## Legătura cu ingineria software

Disciplinele care se transferă direct din această analiză în practica de livrare: **ajustarea la risc pe bază de prior** — majorarea Mott MacDonald este echivalentul software al părtinirii de optimism Green Book aplicat mecanic, deci echipele ar trebui să argumenteze excepții de la ea în loc să presupună că estimarea lor este excepția; **onestitatea comparatorului** — alternativa la construire este cea mai bună opțiune de cumpărare disponibilă, nu „nimic”, ceea ce se leagă direct de [costul de oportunitate în cheltuielile publice](../costul-de-oportunitate-în-cheltuielile-publice/); și **compararea onestă a TCO** — fiecare propunere de construire ar trebui comparată cu [costul total de proprietate](../costul-total-de-proprietate-în-it-ul-guvernamental/) complet al unei opțiuni de cumpărare, nu cu prețul ei de listă. Acolo unde construirea câștigă cu adevărat, [costul întârzierii](../costul-întârzierii-în-programele-publice/) al timpului suplimentar de construire ar trebui prețuit explicit în cazul de afaceri, nu lăsat ca ipoteză nedeclarată că timpul nu contează.

## Capcane

- **Compararea prețului de listă al furnizorului cu o estimare de construire neajustată la risc**: aceasta flatează dublu construirea, o dată la cost și o dată la grafic.
- **Muncă internă evaluată la zero**: timpul de inginerie al funcției publice este tratat ca „gratuit” deoarece este deja în bugetul de efectiv al departamentului, ceea ce ascunde costul real de oportunitate față de altă muncă pe care acea echipă ar putea-o face.
- **Blocare neprețuită în ambele direcții**: ieșirea de la furnizor și costurile de portabilitate a datelor sunt reale, dar la fel este și „factorul autobuz” al unei construcții la comandă și dependența sa de păstrarea unei echipe interne mici, greu de înlocuit, pe durata ei de viață.
- **Diferențiere de misiune revendicată pentru instalații**: „aceasta este esențială pentru noi” afirmat despre middleware de integrare sau un depozit de documente — testați față de dacă un cetățean sau un lucrător ar observa vreodată care dintre ele rulează dedesubt.

## Surse

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, decizia de a construi sau a cumpăra tehnologie. <https://www.gov.uk/service-manual>
- HM Treasury, îndrumări suplimentare Green Book privind părtinirea de optimism. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
