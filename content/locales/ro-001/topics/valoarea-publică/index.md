# Valoarea publică

Valoarea publică este valoarea pe care o creează un guvern sau o organizație din sectorul social pentru cetățeni în ansamblu — nu doar rezultatele directe pe care le produce sau banii pe care îi cheltuiește, ci dacă societatea se află într-o situație mai bună pentru că organizația există și a acționat așa cum a acționat. „Triunghiul strategic” al lui Mark Moore din 1995 este testul standard: o inițiativă publică este justificată numai atunci când este *legitimă și susținută*, *valoroasă în substanță* și *realizabilă operațional*, toate trei în același timp.

## De ce contează

Valoarea din sectorul privat este relativ ușor de evaluat: venituri minus costuri, hotărâte de clienți care pot pleca. Valoarea publică nu are un semnal de piață echivalent. Un serviciu penitenciar, o autoritate fiscală și o echipă de protecție a copilului produc lucruri pe care cetățenii nu pot pur și simplu să refuze să le cumpere, iar „clientul” (contribuabilul, infractorul, copilul) nu este adesea aceeași persoană cu mandantul politic care autorizează bugetul. Lucrarea lui Moore *Creating Public Value: Strategic Management in Government* (Harvard University Press, 1995) oferă disciplina lipsă: un manager ar trebui să poată spune (1) ce valoare publică creează inițiativa sa, (2) de unde provin legitimitatea și finanțarea de care dispune — un ministru, un consiliu, un mandat, un grant — și (3) dacă organizația sa o poate livra efectiv cu oamenii, tehnologia și procesele disponibile. Un program care stă bine doar pe unul sau două dintre brațele triunghiului nu este încă justificat, oricât de bune i-ar fi intențiile.

Aceasta contează practic deoarece majoritatea eșecurilor de software din sectorul public nu sunt eșecuri tehnologice. Un sistem poate fi excelent din punct de vedere tehnic și realizabil operațional și totuși să eșueze, pentru că nimeni din mediul care conferă legitimitate — miniștri, comisii de supraveghere, public — nu și-a dorit de fapt lucrul pentru care optimizează. Serviciul digital Universal Credit și programul național NHS pentru IT (National Programme for IT) sunt citate în literatura britanică despre administrația publică drept cazuri în care brațul operațional și brațul legitimității nu erau aliniate cu brațul misiunii.

## Matematica

Valoarea publică este un cadru, nu o formulă, dar structurează cazuri de investiții altfel vagi în trei întrebări verificabile:

```
Testul triunghiului strategic — continuați doar dacă se verifică toate trei:

1. Legitimitate și sprijin: Cine a autorizat aceasta și mai susține mediul
   autorizant (legislativ, ministru, consiliu, board, opinia publică) inițiativa
   pe măsură ce se angajează resurse?

2. Valoare publică: Ce bine specific, descriptibil produce aceasta pentru
   cetățeni sau societate — siguranță, sănătate, oportunități, încredere,
   corectitudine — și pentru cine?

3. Capacitate operațională: Poate organizația să o livreze efectiv cu
   personalul, tehnologia, partenerii și autoritatea legală actuale — sau
   cu un plan credibil de a le obține?
```

O inițiativă slabă eșuează de obicei pe cel puțin un braț: livrabilă tehnic, dar fără mandat (un pilot de partajare a datelor pe care nimeni nu l-a aprobat); populară, dar nelivrabilă (un serviciu digital promis fără capacitate de inginerie); sau autorizată și livrabilă, dar fără valoare (un tablou de bord pe care nu-l folosește nimeni).

## Exemplu lucrat

**Autoritate locală**: o echipă digitală a consiliului propune un instrument de triere cu IA pentru cererile de ajutor pentru locuință.

- *Legitimitate*: cabinetul consiliului a aprobat o strategie digital-first, dar aleșii responsabili de securitatea socială nu au aprobat în mod specific luarea automată a deciziilor — o lacună, nu un semnal verde.
- *Valoare publică*: procesarea mai rapidă (beneficiu declarat: de la 10 zile la 2 zile) este valoare reală doar dacă solicitanții nu sunt respinși pe nedrept; afirmația de valoare trebuie să includă acuratețea, nu doar viteza.
- *Capacitate operațională*: consiliul are un singur specialist în date și niciun proces de monitorizare a modelului, deci termenul declarat de 2 zile nu este în prezent livrabil la rata de eroare indicată.

Două din trei brațe eșuează. Cadrul lui Moore spune: nu continuați în forma propusă — mai întâi obțineți autorizarea explicită pentru deciziile automate și construiți capacitatea de monitorizare, altfel „valoarea publică” invocată în cazul de afaceri este fictivă.

**Guvern central**: serviciul online de depunere al unei autorități fiscale are legitimitate puternică (mandat legal) și capacitate operațională puternică (o echipă existentă livrează fiabil), dar valoare publică slabă dacă adoptarea este scăzută, deoarece cei excluși digital — vezi [incluziunea digitală](../incluziunea-digitală/) — sunt împinși către un canal pe care nu îl pot folosi. Triunghiul scoate la iveală ceea ce un tablou de bord centrat doar pe livrare ar ascunde.

## Legătura cu ingineria software

Valoarea publică este conceptul-umbrelă sub care se află întregul acest depozit: [valoarea pentru bani](../valoarea-pentru-bani/) oferă testul de economicitate/eficiență/eficacitate pentru a stabili dacă resursele au fost bine folosite; [costul de oportunitate în cheltuielile publice](../costul-de-oportunitate-în-cheltuielile-publice/) evaluează ce altceva ar fi putut face banii; iar [adiționalitatea și efectul de inerție](../adiționalitate-și-efect-de-inerție/), [deplasarea și atribuirea](../deplasare-și-atribuire/) și [analiza contrafactuală](../analiza-contrafactuală/) testează împreună dacă valoarea invocată este reală, nu presupusă. Pentru ingineri, triunghiul strategic este un pre-mortem util pentru orice decizie de produs din sectorul public:

- Înainte de a delimita o funcționalitate, întrebați cine a autorizat-o și dacă acea autorizare mai este valabilă — o funcționalitate construită pentru un ministru care între timp a plecat poate să-și fi pierdut în tăcere brațul legitimității.
- Tratați „putem să o construim” și „ar trebui să o construim” ca întrebări cu adevărat separate; capacitatea de inginerie răspunde doar celui de-al treilea braț al triunghiului.
- Documentele de cerințe de produs pentru serviciile publice ar trebui să enunțe explicit afirmația de valoare publică, nu doar povestea utilizatorului, deoarece valoarea pentru utilizator și valoarea publică nu sunt întotdeauna același lucru (vezi [rezultate versus realizări](../rezultate-versus-realizări/)).

## Capcane

- **Tratarea capacității operaționale ca justificare suficientă.** „Putem să o construim” răspunde doar unui braț al triunghiului; echipele cu capacitate puternică de livrare livrează în mod curent lucruri pe care nimeni nu a autorizat că le dorește și care nu creează niciun bine public descriptibil.
- **Confundarea legitimității cu legalitatea.** Un program poate fi legal și totuși să nu aibă sprijinul politic și public necesar pentru a-l susține printr-o fază grea de livrare; acoperirea juridică nu este același lucru cu un mandat.
- **Presupunerea că valoarea publică este orice spune departamentul care comandă.** Modelul lui Moore cere ca afirmația de valoare să poată fi testată în raport cu interesele reale ale cetățenilor, nu doar afirmată de finanțator — altfel cadrul se prăbușește în autocertificare.

## Surse

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press, 1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, „The Green Book: Central Government Guidance on Appraisal and Evaluation” (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
