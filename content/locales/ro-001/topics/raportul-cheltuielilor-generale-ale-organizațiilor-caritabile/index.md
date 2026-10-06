# Raportul cheltuielilor generale ale organizațiilor caritabile

Raportul cheltuielilor generale (overhead) ale unei organizații caritabile reprezintă cheltuielile administrative și de strângere de fonduri exprimate ca procent din cheltuielile totale. Este cel mai solicitat număr din dăruirea caritabilă — folosit de donatori, organisme de supraveghere și chiar unii finanțatori ca proxy pentru eficiență — și este totodată una dintre cele mai temeinic discreditate metrici de eficiență din sector, organizațiile care l-au popularizat dezicându-se public de el în 2013.

## De ce contează

La 17 iunie 2013, GuideStar, BBB Wise Giving Alliance și Charity Navigator — cele mai mari trei organisme americane de evaluare și informare a sectorului non-profit, ale căror evaluări istorice proprii au contribuit la înrădăcinarea raportului overhead ca prescurtare a calității unei organizații caritabile — au publicat o scrisoare deschisă comună către donatorii americani, „The Overhead Myth”, declarând explicit că raportul overhead este o măsură slabă a performanței unei organizații caritabile și îndemnând donatorii să se uite în schimb la transparență, guvernanță și rezultate. A fost o inversare directă din partea acelorași instituții care construiseră un deceniu cultura donatorilor în jurul raportului.

Problema de fond este structurală, nu doar de imagine: un raport overhead scăzut poate fi atins subinvestind în exact lucrurile care fac o organizație caritabilă eficace — un sistem decent de gestionare a cazurilor, personal instruit, monitorizare și evaluare — deoarece acestea sunt adesea înregistrate ca cost „administrativ” în loc de „de program”. O organizație caritabilă care își înfometează back-office-ul pentru a raporta 5% overhead poate fi mai puțin capabilă să obțină rezultate decât una care cheltuiește 20% pe o operațiune dotată corespunzător. În Anglia și Țara Galilor, îndrumările Charity Commission către administratori se îndepărtează de un singur procent overhead ca test de eficiență, cerând în schimb administratorilor să raporteze ce a realizat organizația față de obiectivele sale — vezi cerințele de raportare SORP discutate în [costul per beneficiar](../costul-per-beneficiar/).

## Matematica

```
Raport overhead = (Cost administrativ + Cost de strângere de fonduri) / Cheltuieli totale

Variante uzuale:
  Raport de program     = Cheltuieli de program (direct caritabile) / Cheltuieli totale
                        = 1 − raport overhead
  Eficiența strângerii de fonduri = Cost de strângere de fonduri / Fonduri strânse
```

Niciuna dintre aceste formule nu conține informații despre rezultatele obținute. O organizație caritabilă poate minimiza fiecare dintre ele și totuși să dezamăgească fiecare beneficiar; vezi [costul per rezultat](../costul-per-rezultat/) pentru metrica ce abordează efectiv dacă banii au funcționat.

## Exemplu lucrat

Două organizații caritabile, aceleași cheltuieli totale:

- **Organizația A**: 1.000.000 £ cheltuieli totale, 80.000 £ admin + strângere de fonduri → raport overhead 8%. Nu are funcție de monitorizare și evaluare, un singur funcționar financiar supraîncărcat și niciun sistem de gestionare a cazurilor; fluctuația personalului este mare, iar datele de rezultat nu sunt colectate.
- **Organizația B**: 1.000.000 £ cheltuieli totale, 220.000 £ admin + strângere de fonduri → raport overhead 22%. Finanțează o echipă mică de evaluare, un sistem de gestionare a cazurilor care captează urmărirea rezultatelor și instruire adecvată în domeniul protecției.

Un donator care selectează exclusiv după raportul overhead o alege pe A și o respinge pe B — opusul a ceea ce ar arăta probabil dovezile [costului per rezultat](../costul-per-rezultat/), deoarece B este singura din cele două în poziția de a demonstra sau îmbunătăți rezultatele ei reale.

## Legătura cu ingineria software

Software-ul financiar și de raportare a granturilor pentru sector codifică adesea împărțirea overhead/program ca un câmp categoric pe fiecare linie de cost, deoarece asta cer încă reglementatorii și unii finanțatori în declarațiile statutare. Inginerii care construiesc aceste sisteme ar trebui să trateze acea cerință ca obligație de conformitate, nu ca semnal de proiectare că raportul overhead este metrica care merită afișată proeminent pe un tablou de bord; asociați-l, oriunde este arătat, cu o metrică bazată pe rezultate pentru ca un privitor să nu poată citi raportul overhead izolat. Vezi [rentabilitatea investiției donatorului](../rentabilitatea-investiției-donatorului/) pentru metrica ce ar trebui să stea alături de el și [valoarea pentru bani](../valoarea-pentru-bani/) pentru argumentul echivalent din sectorul public împotriva proxy-urilor de eficiență cu un singur raport.

## Capcane

- **Folosirea raportului overhead ca prag de selecție.** Respingerea oricărei organizații caritabile peste un prag arbitrar (ex. „nu mai mult de 15% overhead”) penalizează sistematic organizațiile dotate corespunzător, bine evaluate, și recompensează subinvestiția.
- **Încadrarea greșită a costului de livrare directă ca overhead**, sau invers — convențiile contabile privind ce se consideră „program” față de „administrație” variază atât de mult între organizații caritabile încât rapoartele nu sunt adesea nici măcar comparabile la prima vedere.
- **Presupunerea că overhead scăzut implică impact ridicat.** Cele două sunt, în cel mai bun caz, necorelate; vezi afirmația centrală a scrisorii Overhead Myth din 2013.
- **Ignorarea faptului că unele strategii legitime cer overhead mai mare pe termen scurt.** O fază de consolidare a capacității sau de dezvoltare organizațională ridică intenționat cheltuielile administrative pentru a îmbunătăți livrarea ulterioară.

## Surse

- GuideStar, BBB Wise Giving Alliance și Charity Navigator, scrisoarea deschisă „The Overhead Myth”, 17 iunie 2013. <https://learn.guidestar.org/news/news-releases/2013/2013-06-17-overhead-myth>
- Charity Navigator, resurse ale campaniei „Overhead Myth”. <https://www.charitynavigator.org/>
- Charity Commission for England and Wales, îndrumări privind raportarea organizațiilor caritabile (SORP). <https://www.gov.uk/government/organizations/charity-commission>
