# Rezultate versus realizări

O realizare (output) este produsul direct, numărabil al unei activități — există din clipa în care are loc livrarea, indiferent ce efect are. Un rezultat (outcome) este schimbarea care urmează pentru oamenii, locul sau sistemul implicat. „500 de persoane au participat la un atelier de căutare a unui loc de muncă” este o realizare: este adevărată chiar dacă niciuna dintre ele nu găsește de lucru. „Perspectivele de angajare ale a 500 de persoane s-au îmbunătățit” este o afirmație de rezultat și cere dovada schimbării, nu doar dovada prezenței — confuzia care produce mai multe rapoarte de granturi înșelătoare decât aproape orice altă greșeală de măsurare din sector.

## De ce contează

Magenta Book al HM Treasury și finanțatori precum National Lottery Community Fund cer ambii raportarea rezultatelor tocmai pentru că realizările sunt ceea ce raportează programele implicit: sunt ieftin de numărat, mereu disponibile și arată mereu pozitiv. O numărătoare de realizări nu poate literalmente niciodată să scadă ca urmare a eșecului programului — mai multe sesiuni livrate înseamnă mereu „mai mult”, în timp ce un rezultat poate dezvălui că un program nu funcționează. National Audit Office a criticat în repetate rânduri programe guvernamentale pentru raportarea nivelurilor de activitate ca și cum ar fi dovezi de succes; un sistem software care face ușoară raportarea doar a realizărilor întărește aceasta implicit, deoarece realizările nu cer nicio colectare de date de urmărire, iar rezultatele da.

## Matematica

Nu există formulă, dar există un test fiabil pentru clasificarea unei metrici:

```
Testul realizării:  este numărabilă în punctul de livrare, adevărată chiar dacă beneficiarul nu este afectat?
Testul rezultatului: cere o comparație înainte/după sau cu/fără pentru a avea sens?

Dacă un număr poate fi adevărat cu beneficiu zero pentru oricine, este o realizare.
```

Aceasta se află în interiorul lanțului mai larg al [modelului logic](../modelul-logic/) și depinde de verigile de rezultat definite într-o [teorie a schimbării](../teoria-schimbării/); transformarea unui rezultat în bani folosește metodele din [rentabilitatea socială a investiției](../rentabilitatea-socială-a-investiției/).

## Exemplu lucrat

**Autoritate locală (sprijin pentru ocupare)**: realizare — 500 de persoane au participat la ateliere de căutare a unui loc de muncă. Rezultat — la urmărirea de la 12 luni, 140 din acele 500 (28%) au un loc de muncă stabil (6+ luni). Un grup de comparație cu caracteristici similare, dar fără acces la program, are o rată de ocupare de bază de 15% în aceeași perioadă. Creșterea netă a rezultatului: 28% − 15% = 13 puncte procentuale, deci se estimează că 500 × 0,13 = 65 de persoane în plus lucrează care altfel nu ar fi lucrat — rezultatul atribuibil, distinct atât de cifra de participare de 500, cât și de numărătoarea brută a angajării de 140.

**Organizație caritabilă (organizație pentru alfabetizare)**: realizare — 1.200 de sesiuni de lectură livrate la 300 de copii. Rezultat — vârsta medie de lectură s-a îmbunătățit cu 8 luni pe o perioadă de 6 luni, față de o progresie naturală așteptată de bază de 6 luni. Câștig net de rezultat: 8 − 6 = 2 luni de îmbunătățire suplimentară a vârstei de lectură per copil atribuibilă programului, nu cifra întreagă de 8 luni.

## Legătura cu ingineria software

Jurnalele de evenimente și sistemele tranzacționale instrumentează realizările aproape automat — vizualizări de pagină, sesiuni, tichete închise, programări făcute — deoarece sunt generate de sistemul care își face treaba. Rezultatele cer un model de date care surprinde același individ într-un moment ulterior în raport cu o bază de referință sau o comparație, ceea ce trebuie proiectat deliberat: sondaje de urmărire, înregistrări administrative legate sau o cohortă de comparație. Un instrument de raportare care îl suportă doar pe primul va orienta pe nesimțite o organizație spre raportarea doar a realizărilor, indiferent ce a cerut finanțatorul. Vezi [modelul logic](../modelul-logic/) pentru locul rezultatelor în lanțul de responsabilitate, [costul per rezultat](../costul-per-rezultat/) pentru transformarea acestei distincții într-o metrică de cost unitar și [KPI-urile sectorului public](../kpi-urile-sectorului-public/) pentru tiparul mai larg de selecție a metricilor.

## Capcane

- **Raportarea realizărilor ca și cum ar fi rezultate.** „500 de persoane au participat” sugerează beneficiu fără a-l demonstra; etichetați explicit prezența ca realizare.
- **Fără bază de referință sau grup de comparație.** O cifră de rezultat fără contrafactual — vezi [analiza contrafactuală](../analiza-contrafactuală/) — nu poate separa efectul programului de ceea ce s-ar fi întâmplat oricum.
- **Optimizarea pentru metrica finanțată.** Când finanțarea este legată de volumul realizărilor, echipele de livrare maximizează în mod rațional prezența în detrimentul schimbării durabile, un mod de eșec al legii lui Goodhart.
- **Spălarea rezultatelor.** Reetichetarea unei metrici de realizare cu limbaj care sună a rezultat („rezultate de implicare: 500 de participanți”) fără nicio măsurare de urmărire în spate.

## Surse

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, îndrumări privind raportarea rezultatelor. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, metodologia rapoartelor de valoare pentru bani. <https://www.nao.org.uk/>
