# Analiza decizională multicriterială (MCDA)

MCDA notează și ponderează opțiunile în raport cu mai multe criterii distincte, ponderate, simultan, producând o comparație ierarhizată fără a forța fiecare criteriu pe o singură scală monetară sau în unități naturale. Este metoda de evaluare pentru deciziile în care rezultatele care contează nu pot fi cu adevărat reduse la un singur număr.

## De ce contează

Green Book sancționează explicit MCDA (apendicele său cu studii de caz din Caseta 2 și Anexa A o discută direct) pentru evaluările în care beneficiile sunt „cu adevărat incomensurabile” — unde convertirea tuturor în bani prin [analiza cost-beneficiu socială](../analiza-cost-beneficiu-socială/), sau într-un singur rezultat prin [analiza cost-eficacitate](../analiza-cost-eficacitate-în-guvern/), ar denatura decizia în loc s-o clarifice (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Alegerea amplasamentului pentru o nouă închisoare, de exemplu, echilibrează costul de capital cu impactul asupra comunității, conectivitatea de transport, efectul asupra mediului și capacitatea de recrutare a personalului — criterii care nu au o unitate comună și unde forțarea unei unități comune (de obicei banii) ar strecura o judecată de valoare despre importanța relativă a, să zicem, impactului asupra mediului față de cost, îmbrăcată în aritmetică obiectivă.

Onestitatea MCDA este și principala ei vulnerabilitate: deoarece ponderile sunt atribuite de cine conduce evaluarea (sau de un panel), metoda este legitimă doar cât este procesul de ponderare. Îndrumările Green Book sunt explicite că criteriile și ponderile trebuie convenite și publicate *înainte* de notarea opțiunilor, tocmai pentru a împiedica un recenzent să lucreze invers, de la o opțiune preferată la ponderile care o justifică.

## Matematica

```
Pentru fiecare opțiune i și criteriu j:
  Scor_ij   = performanța opțiunii în raport cu acel criteriu (adesea 0-100
              sau 1-10, din dovezi, judecată de expert sau notare de către părțile interesate)
  Pondere_j = importanța relativă a criteriului j, ponderile însumează 1 (sau 100)

Scor ponderat al opțiunii i = Σ_j (Scor_ij × Pondere_j)

Procedură:
1. Conveniți setul de criterii și ponderile ÎNAINTE de a nota vreo opțiune (swing
   weighting sau comparație pe perechi, ex. AHP, sunt metode uzuale de elicitare).
2. Notați fiecare opțiune în raport cu fiecare criteriu pe o scală comună,
   din dovezi acolo unde este posibil.
3. Calculați totalurile ponderate; ordonați opțiunile.
4. Testați sensibilitatea ponderilor: rezistă ierarhia unui dezacord plauzibil
   despre cât ar trebui să conteze fiecare criteriu?
```

MCDA nu produce o valoare absolută apărabilă precum valoarea actualizată netă a SCBA — produce doar o ierarhie condiționată de ponderile convenite. Aceasta este o calitate când decizia privește cu adevărat compromisul între bunuri incomensurabile și o povară dacă este folosită pentru a evita munca mai grea a monetizării acolo unde monetizarea era de fapt posibilă.

## Exemplu lucrat

**Autoritate locală**: un consiliu care alege o locație pentru un nou centru de reciclare a deșeurilor menajere notează trei amplasamente după patru criterii, ponderate de un panel interdepartamental înainte de orice vizită pe teren:

```
Criterii (pondere):       Cost de capital (30%)  Acces transport (25%)
                           Impact asupra comunității (25%)  Impact asupra mediului (20%)

Scoruri ale amplasamentelor (0-100, mai mare = mai bine):
Amplasament A: cost 80, acces 60, comunitate 40, mediu 70
Amplasament B: cost 60, acces 90, comunitate 70, mediu 50
Amplasament C: cost 90, acces 50, comunitate 80, mediu 60

Totaluri ponderate:
A = 80(,30) + 60(,25) + 40(,25) + 70(,20) = 24+15+10+14 = 63
B = 60(,30) + 90(,25) + 70(,25) + 50(,20) = 18+22,5+17,5+10 = 68
C = 90(,30) + 50(,25) + 80(,25) + 60(,20) = 27+12,5+20+12 = 71,5
```

Amplasamentul C se clasează cel mai sus. O rulare de sensibilitate care mută ponderea impactului asupra comunității de la 25% la 35% (luând 10 puncte de la costul de capital) schimbă totalul amplasamentului C la 71,5 − 3 + 8 = 76,5 și pe cel al lui B la 68 − 6 + 7 = 69 — C încă conduce, deci ierarhia rezistă acelui dezacord plauzibil despre ponderare, exact verificarea pe care Green Book se așteaptă s-o vadă raportată.

**Organizație caritabilă**: o fundație care acordă granturi și alege între finanțarea unui serviciu de consiliere în datorii, a unei rețele de bănci de alimente și a unui program de educație financiară folosește MCDA în loc de SROI (vezi [rentabilitatea socială a investiției](../rentabilitatea-socială-a-investiției/)) tocmai pentru că administratorii nu sunt de acord, cu bună-credință, dacă ajutorul în criză sau prevenirea ar trebui să cântărească mai mult — MCDA le permite să convină asupra *formei* dezacordului (un interval de ponderi) în loc să pretindă că un singur raport SROI îl rezolvă.

## Legătura cu ingineria software

MCDA este instrumentul natural pentru selecția furnizorilor și a arhitecturii când criteriile intră cu adevărat în conflict — alegerea între un sistem de gestionare a cazurilor găzduit în cloud și unul on-premises echilibrează costul, riscul suveranității datelor, accesibilitatea și viteza de livrare în moduri care nu se reduc la un singur număr. Liderii de inginerie ar trebui să insiste ca ponderarea să aibă loc înainte de notarea opțiunilor, exact cum cere Green Book, deoarece un exercițiu de ponderare efectuat după vederea listei scurte alunecă în mod fiabil către orice opțiune pe care încăperea o prefera deja. Vezi [a construi sau a cumpăra în guvern](../a-construi-sau-a-cumpăra-în-guvern/) pentru o aplicare frecventă a MCDA și [tabloul de scor al valorii publice](../tabloul-de-scor-al-valorii-publice/) pentru un instrument conex de notare structurată folosit după decizie, nu înainte de ea.

## Capcane

- **Stabilirea ponderilor după vederea opțiunilor.** Aceasta este cea mai frecventă cale prin care MCDA este manipulată, intenționat sau nu; publicați ponderile înainte de notare și înregistrați cine le-a stabilit.
- **Tratarea totalului ponderat ca număr ferm.** Un scor de 71,5 față de 68 nu este o diferență semnificativă statistic decât dacă analiza de sensibilitate confirmă că ierarhia este stabilă; raportați intervale, nu precizie falsă.
- **Folosirea MCDA pentru a evita o monetizare care era de fapt fezabilă.** Dacă majoritatea criteriilor ar putea fi evaluate credibil în bani, trecerea implicită la MCDA în loc de [SCBA](../analiza-cost-beneficiu-socială/) aruncă informații pe care evaluarea le-ar fi putut folosi.
- **Lăsarea unei singure părți interesate dominante să stabilească toate ponderile singură.** Buna practică Green Book se așteaptă ca ponderile să fie elicitate de la un panel reprezentativ, nu de la directorul sponsor, pentru a evita ca evaluarea să rederive pur și simplu ceea ce acea persoană își dorea deja.

## Surse

- HM Treasury. „The Green Book: appraisal and evaluation in central government.” 2022, Anexa A (analiza decizională multicriterială) și studiile de caz din Caseta 2. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. „Multi-criteria analysis: a manual.” 2009. <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. „Multiple Criteria Decision Analysis: An Integrated Approach.” Kluwer, 2002.
