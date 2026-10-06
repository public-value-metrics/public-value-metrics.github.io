# Metrici de satisfacție a cetățenilor

Metricile de satisfacție a cetățenilor măsoară cum își evaluează oamenii experiența directă cu un serviciu public — distinct de încrederea în instituții în general și distinct de dacă serviciul a obținut efectiv un rezultat bun. Un serviciu poate fi plăcut și ineficient, sau eficient și neplăcut; decalajul dintre cele două este el însuși informație de diagnostic pe care o echipă de livrare ar trebui s-o urmărească.

## De ce contează

Satisfacția este măsurată la două altitudini diferite care sunt confundate în mod curent. La nivel de serviciu, Performance Platform al Regatului Unit, acum retras, și manualul de servicii GOV.UK de azi cer un sondaj de satisfacție per serviciu (de obicei o scală în cinci puncte de la „foarte mulțumit” la „foarte nemulțumit”, administrată în punctul tranzacției) ca unul dintre cei patru KPI obligatorii ai serviciului — vezi [standardele de servicii și metricile de tranzacții](../standarde-de-servicii-și-metrici-de-tranzacții/). La nivel instituțional, UK Civil Service People Survey măsoară implicarea și experiența angajaților în fiecare departament al guvernului central anual, iar separat programul „Trust in Government” al OECD sondează încrederea publicului în guvernul național din statele membre, urmărind un tipar pe termen lung de declin și redresare format puternic de crize (criza financiară din 2008 și pandemia COVID-19 au produs ambele mișcări bruște, vizibile în cifrele de încredere ale OECD). Motivul pentru care inginerii care construiesc servicii pentru cetățeni trebuie să țină separat satisfacția și rezultatul este un mod de eșec cunoscut în proiectarea serviciilor: un formular digital frumos proiectat, ușor de folosit, pentru o cerere de beneficii poate obține o satisfacție foarte mare în timp ce politica de fond — regulile de eligibilitate, restanțele de procesare, sumele acordate — nu-l lasă pe solicitant mai bine. Satisfacția măsoară interfața; nu măsoară valoarea livrată în spatele ei.

## Matematica

```
Satisfacție netă = % mulțumiți (sau foarte mulțumiți) − % nemulțumiți (sau foarte nemulțumiți)
                   (răspunsurile neutre/fără opinie sunt excluse din ambii termeni, dar numărate
                   în baza de răspunsuri pentru calcularea fiecărui procent)

Decalaj satisfacție-rezultat = scor de satisfacție − scor de realizare a rezultatului
                   (ambele normalizate 0–100; un decalaj pozitiv mare semnalează un serviciu
                   care „se simte bine” dar nu livrează în substanță)

Indice de încredere (în stil OECD) = % din respondenții sondajului care răspund „da” la
                   „aveți încredere în [guvernul național]?”
                   urmărit ca serie de timp, de obicei dezagregat după
                   vârstă, venit și educație
```

## Exemplu lucrat

**Serviciu de facturare electronică a impozitului local al unei autorități locale**: un sondaj de satisfacție în punctul tranzacției reușite arată 2.400 de respondenți: 1.650 mulțumiți/foarte mulțumiți, 250 nemulțumiți/foarte nemulțumiți, 500 neutri.

```
Satisfacție netă = (1.650/2.400 × 100) − (250/2.400 × 100)
                 = 68,75% − 10,42%
                 = +58,3 satisfacție netă
```

Pare puternic izolat. Dar sondajul este arătat doar utilizatorilor care finalizează tranzacția *cu succes* — o părtinire de măsurare cunoscută (vezi capcanele de mai jos). Asocierea lui cu metrica ratei de finalizare din [standardele de servicii și metricile de tranzacții](../standarde-de-servicii-și-metrici-de-tranzacții/) arată că finalizarea este de doar 71%, ceea ce înseamnă:

```
Satisfacția reală a populației este nemăsurată pentru cei 29% care au abandonat parcursul —
plauzibil cea mai nemulțumită cohortă, deoarece abandonul este el însuși un semnal negativ
puternic pe care sondajul nu-l captează niciodată.
```

**Ilustrație la nivel național (structura unei serii de încredere în stil OECD)**: încrederea în guvernul național raportată la 42% în anul 1, scăzând la 34% în anul 2 (an de criză) și revenind la 39% în anul 3 — o traiectorie tipică pentru tiparul de șoc și redresare parțială pe care OECD îl documentează în statele membre după crize majore.

## Legătura cu ingineria software

Instrumentați sondajele de satisfacție la fiecare punct de ieșire semnificativ al unui parcurs al utilizatorului, nu doar la finalizarea reușită — cea mai frecventă greșeală de inginerie în acest domeniu și una care transformă pe nesimțite o metrică de satisfacție într-o metrică de vanitate părtinită de supraviețuire. Acolo unde este posibil, asociați scorul de satisfacție cu o metrică de finalizare sau de rezultat pe același tablou de bord, astfel încât o echipă să nu poată sărbători o satisfacție în creștere în timp ce finalizarea scade pe tăcute (vezi [costul per tranzacție](../costul-per-tranzacție/) și [incluziunea digitală](../incluziunea-digitală/) pentru cine este exclus de la început din eșantionarea satisfacției digitale — utilizatorii nedigitali și cei cu asistență digitală sunt sistematic subreprezentați în sondajele din cadrul serviciului). Datele de satisfacție și încredere alimentează direct și brațul legitimității din [triunghiul strategic al lui Moore](../valoarea-publică/) și aparțin perspectivelor „client” și „legitimitate” ale unui [tablou de scor al valorii publice](../tabloul-de-scor-al-valorii-publice/) — vezi [metricile de încredere și legitimitate](../metrici-de-încredere-și-legitimitate/) pentru contrapartea la nivel instituțional a acestei metrici la nivel de serviciu.

## Capcane

- **Părtinire de supraviețuire în sondajele din punctul finalizării**: utilizatorii care abandonează un parcurs nu văd niciodată sondajul, deci un scor ridicat de satisfacție din cadrul serviciului poate coexista cu o rată scăzută de finalizare și o populație invizibilă mare de nefinalizatori nemulțumiți.
- **Tratarea satisfacției ca proxy pentru rezultat**: o interfață bine proiectată pentru o politică prost proiectată obține scoruri bune la satisfacție și proaste la rezultat — raportați întotdeauna ambele, niciodată una ca înlocuitor al celeilalte.
- **Eșantioane mici, nereprezentative, raportate cu precizie falsă**: un scor de satisfacție de la câteva sute de respondenți autoselectați, raportat cu o zecimală, implică o încredere pe care mărimea eșantionului nu o poate susține.
- **Ignorarea dezagregării demografice**: cifrele naționale de încredere și satisfacție care nu sunt defalcate după vârstă, venit, dizabilitate sau acces digital pot masca experiențe puternic divergente între grupuri — un tipar pe care publicațiile OECD Trust in Government îl dezagregă explicit.

## Surse

- OECD, „Trust in Government.” <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, rezultatele „Civil Service People Survey”. <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, „Measuring Success.” <https://www.gov.uk/service-manual/measuring-success>
