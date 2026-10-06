# Costul de oportunitate în cheltuielile publice

Costul de oportunitate este valoarea celei mai bune alternative la care se renunță atunci când un organism public angajează bani, timp de personal sau capital politic într-o opțiune în loc de alta. Într-un departament cu buget fix, fiecare liră cheltuită pe un program este o liră care nu poate fi cheltuită pe următorul cel mai bun program — costul real al unei decizii nu este ceea ce cheltuiește, ci ceea ce înlocuiește.

## De ce contează

Bugetele publice sunt limitate în numerar în cadrul unei perioade de analiză a cheltuielilor, astfel că — spre deosebire de o firmă privată în creștere — un departament guvernamental nu poate pur și simplu „găsi mai mulți bani” pentru o idee bună; finanțarea ei înseamnă a nu finanța altceva. Green Book al HM Treasury tratează aceasta ca fundamentală: fiecare evaluare trebuie să compare o intervenție cu o linie de bază „minimum” *și* cu utilizări alternative realiste ale aceleiași resurse, tocmai pentru că întrebarea reală pe care o pune o echipă de cheltuieli a Trezoreriei nu este niciodată „este bine?”, ci „este mai bine decât ce altceva ar putea cumpăra acești bani?”. Principiul central de evaluare al Green Book — resursele publice ar trebui să meargă către intervenția cu cea mai mare valoare socială netă pe liră — este costul de oportunitate formulat ca politică.

Este ușor de enunțat și greu de aplicat, deoarece „cea mai bună alternativă următoare” este rareori vizibilă într-un singur caz de afaceri. Un program de granturi de 2 milioane £ pentru ocuparea tinerilor este comparat, în cazul de afaceri, cu a nu face nimic — dar comparatorul onest este următoarea cea mai bună intervenție pentru ocuparea tinerilor sau, de fapt, următoarea cea mai bună utilizare a 2 milioane £ oriunde în portofoliu, inclusiv cheltuieli care nu țin de ocupare. Magenta Book (HM Treasury, 2020) avertizează explicit că evaluările care compară „cu intervenție” cu „fără intervenție” subestimează ștacheta pe care trebuie să o depășească o intervenție, deoarece „fără această intervenție” nu este același lucru cu „fără nimic deloc” — banii eliberați finanțează altceva.

## Matematica

```
Costul de oportunitate al alegerii A = valoarea celei mai bune alternative B la care se renunță

Valoarea publică netă a lui A = valoare(A) − valoare(B), nu valoare(A) − 0
```

Nu există o formulă universală deoarece alternativa la care se renunță depinde de context, dar disciplina se generalizează: identificați următoarea utilizare realistă a aceleiași linii bugetare (nu un „a nu face nimic” idealizat), evaluați-o pe aceeași bază (monetizată unde este posibil, conform [analizei cost-beneficiu sociale](../analiza-cost-beneficiu-socială/)) și scădeți.

## Exemplu lucrat

**Linia bugetară a unui departament**: un fond de transformare digitală de 5 milioane £ poate finanța exact una dintre două propuneri în acest an financiar.

- *Opțiunea A*: o nouă platformă de gestionare a cazurilor, beneficiu monetizat de 7,2 milioane £ în 5 ani (economii de eficiență plus rezolvare mai rapidă a cazurilor).
- *Opțiunea B*: un serviciu de verificare a identității partajat între trei departamente, beneficiu monetizat de 6,4 milioane £ în 5 ani.

Un caz de afaceri naiv pentru A compară 7,2 milioane £ de beneficiu cu 5 milioane £ de cost și raportează un raport beneficiu-cost de 1,44:1 — aparent puternic. Dar fiindcă A și B concurează pentru aceiași 5 milioane £, costul de oportunitate al alegerii lui A este beneficiul de 6,4 milioane £ al lui B, la care se renunță. Cazul *net* pentru A față de alternativa realistă este doar 7,2 − 6,4 = 0,8 milioane £, nu cele 7,2 milioane £ din titlu. Dacă o a treia opțiune, C, ar oferi 7,5 milioane £ de beneficiu pentru aceiași 5 milioane £, finanțarea lui A în locul lui C ar distruge 0,3 milioane £ de valoare publică, chiar dacă propriul caz de afaceri al lui A pare pe deplin justificat izolat.

**Timpul personalului unei autorități locale**: echipa de date formată din trei persoane a unui consiliu poate construi fie un tablou de bord al listei de așteptare la locuințe (economii estimate de 400 de ore-funcționar/an, evaluate la 28 £/oră = 11.200 £/an), fie un instrument de triere a fraudei cu beneficii (estimat să prevină 85.000 £/an în plăți incorecte). Construirea tabloului de bord are un cost de oportunitate de 85.000 £/an la care se renunță, nu doar costul salarial al echipei de date — costul real al construcției interne „gratuite” este beneficiul mult mai mare pe care echipa l-ar fi putut produce în altă parte.

## Legătura cu ingineria software

Capacitatea de inginerie dintr-un organism public este ea însăși un buget constrâns — capacitate de sprint, nu lire — și aceeași disciplină se aplică direct:

- Numiți întotdeauna comparatorul: cazul de afaceri al unei funcționalități ar trebui să arate ce altceva ar putea livra aceleași săptămâni-echipă, nu doar propriul randament.
- Tratați „avem capacitate de inginerie disponibilă” ca începutul unei analize de cost de oportunitate, nu ca sfârșitul ei — capacitatea disponibilă are în continuare o cea mai bună utilizare alternativă, chiar dacă aceasta este rambursarea datoriei tehnice (vezi [datoria tehnică ca eroziune a valorii publice](../datoria-tehnică-ca-eroziune-a-valorii-publice/)).
- Legați aceasta direct de [valoarea pentru bani](../valoarea-pentru-bani/): testul de „economicitate” al VFM este lipsit de sens fără un comparator onest de cost de oportunitate, și de [costul întârzierii în programele publice](../costul-întârzierii-în-programele-publice/), care evaluează dimensiunea temporală a aceleiași logici a alternativei la care se renunță.

## Capcane

- **Compararea cu „a nu face nimic” în loc de următoarea cea mai bună alternativă.** Green Book cere o linie de bază „minimum” tocmai pentru că adevăratul cost de oportunitate este rareori zero; un caz de afaceri care depășește doar ștacheta „a nu face nimic” nu a arătat că depășește alternativa realistă.
- **Ignorarea concurenței interdepartamentale pentru același fond.** Liniile bugetare care par rezervate în cadrul unei direcții concurează adesea la un nivel superior (o analiză a cheltuielilor, un program de capital) unde se realizează costul real de oportunitate.
- **Presupunerea că timpul de personal eliberat nu are nicio valoare ulterioară.** Timpul „economisit” creează valoare doar dacă este redistribuit la ceva valoros; dacă utilizarea alternativă nu există, economia este doar nominală.

## Surse

- HM Treasury, „The Green Book: Central Government Guidance on Appraisal and Evaluation” (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, „The Magenta Book: Central Government Guidance on Evaluation” (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. „Methods for the estimation of the NICE cost-effectiveness threshold.” Health Technology Assessment, 2015;19(14) — demonstrația empirică canonică a costului de oportunitate ca restricție obligatorie într-un buget public fix. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
