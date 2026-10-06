# Teoria schimbării

O teorie a schimbării este o cale cauzală explicită, cartografiată înapoi, de la un obiectiv pe termen lung la precondițiile și activitățile care trebuie să existe pentru a-l atinge, împreună cu ipotezele care leagă fiecare verigă. Se construiește pornind de la rezultatul pe care îl doriți și întrebând „ce trebuie să fie adevărat imediat înainte de aceasta, pentru ca aceasta să se întâmple?”, repetat, până ajungeți la activități pe care le puteți livra efectiv — direcția opusă unui [model logic](../modelul-logic/), motiv pentru care cele două sunt complementare, nu interschimbabile.

## De ce contează

Metoda cartografierii înapoi a fost formalizată de Center for Theory of Change și ActKnowledge, pe baza muncii evaluatoarei Carol Weiss privind explicitarea ipotezelor programelor, astfel încât acestea să poată fi testate, nu luate pe încredere. Evaluarea granturilor din Regatul Unit a absorbit aceasta direct: Magenta Book al HM Treasury tratează o teorie a schimbării ca punct de plecare al oricărei proiectări a evaluării, iar finanțatori precum National Lottery Community Fund cer solicitanților să articuleze una înainte de a finanța o propunere. Motivul pentru care contează pentru un inginer software este că o teorie a schimbării este documentul care ar trebui să determine ce trebuie să măsoare sistemul dumneavoastră — dacă lanțul cauzal spune „adoptarea beneficiilor depinde de faptul că solicitanții primesc un calcul personalizat”, aceasta este o afirmație testabilă pe care produsul dumneavoastră poate fi instrumentat s-o dovedească sau s-o infirme.

## Matematica

O teorie a schimbării este structurală, nu numerică. Fiecare verigă ar trebui să poarte atât o ipoteză, cât și un indicator care ar putea arăta că ipoteza este falsă:

```
Rezultat pe termen lung (obiectivul)
  ↑ precondiție + ipoteză + indicator
Rezultat intermediar N
  ↑ precondiție + ipoteză + indicator
  ...
Rezultat intermediar 1
  ↑ precondiție + ipoteză + indicator
Activități / intervenții
  ↑ resurse angajate
Intrări
```

Această structură alimentează direct [metodele de evaluare a impactului](../metode-de-evaluare-a-impactului/), care există pentru a testa dacă ipotezele de la fiecare verigă se verifică în fapt, și [analiza contrafactuală](../analiza-contrafactuală/), care testează dacă rezultatul pe termen lung s-ar fi produs oricum.

## Exemplu lucrat

**Autoritate locală (prevenirea lipsei de adăpost)**: rezultatul pe termen lung este închirieri susținute la 12 luni pentru gospodăriile expuse riscului de evacuare.

- Precondiție: gospodăriile au un plan de rambursare realist și accesibil pentru restanțe. Ipoteză: planurile negociate de lucrători sunt mai sustenabile decât cele impuse de instanță. Indicator: % din planuri încă active la 6 luni.
- Precondiție: gospodăriile solicită beneficiile la care au dreptul. Ipoteză: un calculator digital de beneficii crește numărul cererilor corecte față de formularele pe hârtie. Indicator: rata de acuratețe a cererilor, comparată înainte/după lansarea instrumentului.
- Activități: triere de către lucrători, calculator digital de beneficii, negocierea restanțelor.

Într-o cohortă pilot de 120 de gospodării, ipoteza calculatorului de beneficii s-a verificat pentru 102 gospodării (85%) care au depus ulterior cereri corecte, dovedit de o evaluare de proces ulterioară — oferind echipei programului dovezi pentru acea verigă specifică, nu o singură afirmație de la un capăt la altul despre lipsa de adăpost prevenită.

**Organizație caritabilă (mentorat pentru tineri)**: rezultatul pe termen lung este excluderea școlară redusă. Precondiții cartografiate înapoi: reglare emoțională îmbunătățită → relație de încredere unu-la-unu cu un mentor → contact săptămânal constant pe durata a două trimestre. Teoria face explicit că lipsa precondiției „contact săptămânal constant” (să zicem, din cauza fluctuației mentorilor) prezice că rezultatul nu va urma, ceea ce este o afirmație testabilă, falsificabilă, nu o speranță.

## Legătura cu ingineria software

O teorie a schimbării ar trebui să modeleze modelul de date al unui produs înainte de a fi construit un singur tablou de bord: identificați care verigi au nevoie de un indicator și instrumentați specific pentru acestea, în loc să recurgeți implicit la ce este cel mai ușor de înregistrat. Disciplinează și discuțiile despre foaia de parcurs — o funcționalitate care nu se mapează pe nicio verigă a lanțului nu merită în mod evident construită. Vezi [modelul logic](../modelul-logic/) pentru lanțul de responsabilitate orientat spre viitor construit după ce teoria este convenită, [rentabilitatea socială a investiției](../rentabilitatea-socială-a-investiției/) pentru o metodă care depinde de o teorie a schimbării pentru a delimita ce rezultate să evalueze și [rezultate versus realizări](../rezultate-versus-realizări/) pentru distincția de care depind verigile rezultatelor intermediare.

## Capcane

- **Confundarea cu un model logic.** O teorie a schimbării este cauzală și explicativă (de ce credem că funcționează); un model logic este secvențial și descriptiv (ce se întâmplă în ce ordine). Producerea doar a unuia lasă fie „de ce”-ul, fie traseul de responsabilitate lipsă.
- **Lăsarea ipotezelor implicite.** Toată valoarea cartografierii înapoi este scoaterea la iveală a ipotezelor testabile; o teorie a schimbării care doar înșiră casete și săgeți fără a numi ce ar putea face fiecare verigă falsă este decor.
- **Construirea ei o dată și punerea la păstrare.** O teorie a schimbării scrisă pentru o cerere de finanțare și niciodată reluată încetează să mai fie utilă în clipa în care dovezile încep să contrazică o verigă.
- **Omiterea contribuției părților interesate.** O teorie a schimbării construită în întregime de comisari fără contribuția personalului din prima linie sau a beneficiarilor tinde să codifice ipoteze în care nimeni care livrează serviciul nu crede de fapt.

## Surse

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Capitolul 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, îndrumări privind teoria schimbării. <https://www.tnlcommunityfund.org.uk/>
