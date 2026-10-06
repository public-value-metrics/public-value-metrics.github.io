# Analiza cost-eficacitate în guvern

Analiza cost-eficacitate (CEA) compară costurile unor modalități alternative de a atinge *același* rezultat, exprimat în unități naturale — cost per persoană fără adăpost cazată, cost per elev adus la standardul așteptat, cost per tonă de CO2 redus — fără a converti rezultatul însuși în bani.

## De ce contează

Green Book tratează CEA ca metodă de rezervă atunci când cerința [analizei cost-beneficiu sociale](../analiza-cost-beneficiu-socială/) de a monetiza fiecare beneficiu devine nu doar dificilă, ci necinstită — acolo unde atribuirea unui preț credibil rezultatului ar cere ipoteze pe care nimeni nu le susține de fapt (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Capitolul 5, despre evaluarea opțiunilor unde rezultatele nu sunt ușor monetizabile). CEA este metoda preluată cel mai direct din economia sănătății — este structural identică cu felul în care NICE compară tratamentele folosind costul per An de Viață Ajustat pentru Calitate (QALY) — dar aplicată programelor publice non-sănătate: intervenții educaționale per punct de rezultat al elevului, programe de locuințe per gospodărie ferită de lipsa adăpostului, programe de ocupare per rezultat de angajare susținută.

Motivul pentru care CEA își merită locul alături de SCBA în loc să fie absorbită de ea este că a impune o valoare monetară unor rezultate produce un număr suficient de precis pentru a părea autoritar și suficient de contestat pentru a fi fără valoare într-o dezbatere publică — stabilirea unui preț pentru „un copil care citește la standardul așteptat” invită exact tipul de contestare care deraiază un caz de afaceri la o comisie parlamentară. CEA ocolește disputa refuzând să o poarte: ierarhizează opțiunile după cost per unitate de *rezultat însuși*, lăsând judecata politică separată dacă rezultatul merită urmărit cazului strategic.

## Matematica

```
Raport cost-eficacitate (mediu) = Cost total / Total unități de rezultat obținute

Raport incremental cost-eficacitate (ICER), comparând opțiunea A cu opțiunea B:
ICER = (Cost_A − Cost_B) / (Rezultat_A − Rezultat_B)

Procedură:
1. Fixați unitatea de rezultat și metoda de măsurare pentru toate opțiunile comparate.
2. Evaluați fiecare opțiune ca cost pe aceeași bază (vezi ../green-book-appraisal/, cazul financiar)
   pe același orizont de timp.
3. Eliminați opțiunile dominate: orice opțiune care costă mai mult per unitate decât o
   alternativă mai ieftină care atinge același rezultat sau unul mai bun este abandonată.
4. Ordonați opțiunile rămase după raportul cost-eficacitate incremental, nu mediu.
```

CEA nu poate, singură, spune dacă un program merită finanțat deloc — doar care dintre mai multe abordări ale aceluiași obiectiv este cea mai ieftină per unitate. Decizia dacă obiectivul însuși merită cheltuiala cere fie conversia înapoi în SCBA (dacă există o evaluare credibilă), fie o judecată politică/strategică în afara matematicii. Acolo unde rezultatele nu pot fi cu adevărat reduse la o singură unitate — deoarece un program produce mai multe rezultate care contează în moduri diferite — folosiți în schimb [analiza decizională multicriterială](../analiza-decizională-multicriterială/).

## Exemplu lucrat

**Autoritate locală**: un consiliu compară trei abordări pentru reducerea numărului persoanelor care dorm pe stradă, fiecare evaluată ca cost pe un an față de rezultatul „persoane mutate în locuințe stabile pentru 6+ luni”:

```
Opțiune                            Cost       Rezultate obținute  CER mediu
Housing First (intensiv)           900.000 £  60                  15.000 £/rezultat
Cămin + sprijin la ieșire          600.000 £  50                  12.000 £/rezultat
Outreach + sector privat închiriat 350.000 £  20                  17.500 £/rezultat

ICER, Cămin vs Outreach:     (600k−350k)/(50−20) = 8.333 £ per rezultat suplimentar
ICER, Housing First vs Cămin: (900k−600k)/(60−50) = 30.000 £ per rezultat suplimentar
```

Outreach este dominat ca cost mediu de Cămin, dar pasul *incremental* de la Outreach la Cămin costă doar 8.333 £ per persoană cazată suplimentar — ieftin față de pasul către Housing First, care costă 30.000 £ pentru fiecare persoană suplimentară peste ceea ce obține Căminul. O autoritate cu buget limitat care își extinde activitatea ar trebui să prefere extinderea Căminului înaintea lui Housing First, chiar dacă Housing First arată mai bine pe propriul raport mediu.

**Guvern național**: un program de recuperare a lecturii este comparat între trei modele de livrare pe „cost per elev care atinge standardul de lectură corespunzător vârstei”: meditații individuale (1.800 £/elev), meditații în grupuri mici (700 £/elev) și intervenție doar digitală (150 £/elev, dar doar 40% din rata rezultatului meditațiilor în grupuri mici per elev înscris, după ajustarea pentru abandon). Odată ajustat pentru finalizarea efectivă, doar digitalul costă 375 £ per elev care atinge standardul — tot cel mai ieftin, dar CEA nu poate spune dacă numărul absolut mai mic de elevi ajutați de doar digital, la același buget ca grupurile mici, este un compromis acceptabil față de a ajunge la mai puțini elevi mai în profunzime; aceasta este o judecată distributivă pe care CEA o returnează factorilor de decizie.

## Legătura cu ingineria software

CEA este cadrul potrivit ori de câte ori echipele de inginerie evaluează abordări de livrare pentru *același* rezultat de serviciu — cost per identitate verificată cu succes la trei furnizori de verificare a identității, cost per caz triat corect la două proiectări de automatizare a lucrului cu cazuri, cost per defect de accesibilitate rezolvat între remediere internă versus contractată. Disciplina pe care o importă direct: definiți unitatea de rezultat înainte de a compara costurile (nu „tichete închise” — o realizare — ci „nevoia utilizatorului efectiv rezolvată”) și calculați întotdeauna raportul incremental între sistemul în funcțiune și un înlocuitor propus, nu costul mediu al fiecărui sistem izolat. Vezi [rezultate versus realizări](../rezultate-versus-realizări/) și [costul per rezultat](../costul-per-rezultat/).

## Capcane

- **Compararea rapoartelor medii, nu incrementale, la decizia unei extinderi.** După cum arată exemplul persoanelor care dorm pe stradă, opțiunea cu cel mai bun raport mediu nu este întotdeauna următoarea unitate de rezultat cea mai ieftină de cumpărat.
- **Alegerea unei unități de rezultat care este de fapt o realizare.** „Trimiteri făcute” sau „sesiuni livrate” măsoară activitate, nu rezultatul pentru care există programul; CEA pe realizări produce un număr cu aer sigur care răspunde la întrebarea greșită.
- **Compararea între rezultate cu adevărat diferite.** CEA este validă doar când fiecare opțiune vizează același rezultat măsurat în același mod; compararea „cost per persoană fără adăpost cazată” cu „cost per tânăr ieșit din îngrijire în locuință stabilă” cere o măsură generică de rezultat sau [analiză decizională multicriterială](../analiza-decizională-multicriterială/), nu CEA.
- **Ignorarea durabilității rezultatului.** O opțiune mai ieftină care produce rezultate ce nu persistă (un elev care regresează după încheierea intervenției) nu este de fapt mai cost-eficace odată măsurată pe un orizont comparabil; potriviți perioada de urmărire între opțiunile comparate.

## Surse

- HM Treasury. „The Green Book: appraisal and evaluation in central government.” 2022, Capitolul 5. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. „Developing NICE guidelines: the manual” — metoda de cost-eficacitate din care se inspiră această adaptare guvernamentală. <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Dovezi de cost-eficacitate privind intervențiile împotriva lipsei de adăpost. <https://whatworks-homelessness.org.uk/>
