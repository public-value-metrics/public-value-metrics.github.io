# Evaluarea impactului versus evaluarea procesului

Evaluarea impactului întreabă dacă un program și-a cauzat rezultatele intenționate. Evaluarea procesului întreabă dacă programul a fost efectiv livrat așa cum a fost proiectat — cui, în ce doză și cu ce bariere sau facilitatori pe parcurs. Sunt întrebări diferite care cer metode diferite, iar Magenta Book al HM Treasury tratează comandarea ambelor împreună ca practică standard, deoarece un rezultat de impact slab sau nul este neinterpretabil de unul singur: nu poate spune dacă teoria de bază a programului era greșită sau dacă o teorie bună pur și simplu nu a fost niciodată livrată corespunzător.

## De ce contează

Evaluările guvernamentale au constatat în repetate rânduri niciun efect măsurabil al unui program fără a avea o evaluare de proces care să explice de ce — lăsând comisarii incapabili să distingă „această idee nu funcționează” (eșec al teoriei) de „această idee nu a fost niciodată încercată corespunzător” (eșec al implementării). Îndrumările Medical Research Council privind evaluarea procesului intervențiilor complexe, publicate în BMJ în 2015 și citate pe larg alături de Magenta Book, au formalizat fidelitatea, doza și acoperirea drept elementele de bază pe care o evaluare de proces trebuie să le măsoare. Comandarea unei evaluări de impact fără evaluare de proces riscă abandonarea unui design de program solid pentru că a fost livrat la jumătate din populația intenționată la o fracțiune din intensitatea intenționată — o greșeală pe care un constructor de sisteme este bine plasat s-o prevină, deoarece fidelitatea livrării este exact ceea ce sistemele de date operaționale pot capta în timp aproape real.

## Matematica

```
Evaluarea procesului întreabă:
 - A fost livrat populației țintă, la doza/intensitatea planificată?
 - A corespuns livrarea proiectării modelului logic / teoriei schimbării?
 - Ce bariere sau facilitatori au afectat livrarea?
 Metode: verificări de fidelitate față de praguri prestabilite, studii de caz, interviuri,
         date administrative de livrare.

Evaluarea impactului întreabă:
 - Ce s-a schimbat și cât din acea schimbare este atribuibilă programului?
 Metode: RCT, DiD, PSM, RDD — vezi impact-evaluation-methods — față de un contrafactual.

Diagnostic combinat:
 Niciun efect  + fidelitate ridicată → eșec al teoriei: modelul însuși nu a produs rezultatul
 Niciun efect  + fidelitate scăzută  → eșec al implementării: modelul nu a fost testat corect niciodată
 Efect găsit + fidelitate ridicată   → replicați cu încredere
 Efect găsit + fidelitate scăzută    → investigați mai departe: efectul poate fi fragil sau specific locului
```

## Exemplu lucrat

**Autoritate locală (program de parentalitate)**: o evaluare de impact folosind diferența-în-diferențe constată o schimbare de +2 puncte procentuale într-o măsură a bunăstării copilului — nesemnificativă statistic. Evaluarea de proces, rulată alături, constată că programul a ajuns la doar 210 din cele 500 de familii vizate (acoperire de 42%) și, dintre acestea, doar 95 au atins pragul de fidelitate prestabilit de 75%+ din sesiuni participate — 19% din acoperirea planificată inițial. Concluzie: rezultatul de impact slab este în concordanță cu un eșec al implementării, nu cu o dovadă că modelul programului nu funcționează; răspunsul potrivit este repararea căii de trimitere care a cauzat abandonul de 58%, nu abandonarea designului programului.

**Organizație caritabilă (program de alfabetizare digitală)**: o evaluare de impact constată un efect puternic (+18 puncte procentuale la un scor de încredere digitală), iar o evaluare de proces paralelă confirmă 92% fidelitate față de curriculumul planificat în toate cele 12 situri de livrare. Combinat, finanțatorul poate scala programul cu încredere, deoarece se arată că efectul se menține consecvent, nefiind produsul unui singur sit neobișnuit de bun.

## Legătura cu ingineria software

Datele evaluării procesului sunt exact ceea ce sistemele de livrare sunt bine plasate să capteze: prezența față de plan, doza sesiunilor și abandonul la fiecare etapă a unui pâlniei de trimitere sau înscriere — aceeași analiză de pâlnie pe care inginerii o construiesc deja pentru funcționalitățile de produs, aplicată în schimb fluxului de livrare al unui program social. Transmiterea metricilor de fidelitate și acoperire către managerii de program în timp aproape real, în loc de a aștepta o evaluare de la sfârșitul grantului, permite remedierea unei căi de trimitere defecte la mijlocul programului în loc să fie descoperită abia după încheierea perioadei de finanțare. Vezi [metodele de evaluare a impactului](../metode-de-evaluare-a-impactului/) pentru proiectările cauzale cu care este asociată evaluarea procesului, [teoria schimbării](../teoria-schimbării/) și [modelul logic](../modelul-logic/) pentru designul față de care evaluarea procesului verifică fidelitatea și [realizarea beneficiilor](../realizarea-beneficiilor/) pentru urmărirea livrării până la rezultatele promise.

## Capcane

- **Comandarea doar a evaluării impactului.** Un rezultat nul sau slab nu poate fi atunci interpretat ca eșec al teoriei sau eșec al implementării, exact distincția care contează pentru a decide ce să faceți mai departe.
- **Tratarea evaluării procesului ca un adaos moale.** Are nevoie de aceeași rigoare și de criterii de fidelitate prestabilite ca proiectarea impactului, altfel se prăbușește în anecdotă când vin rezultatele.
- **Confundarea „la timp și în buget” cu „livrat așa cum a fost proiectat”.** Evaluarea procesului verifică fidelitatea față de model — doză, grup țintă, conținut — nu starea RAG a managementului de proiect.
- **Neînregistrarea prealabilă a pragurilor de fidelitate.** Decizia ulterioară despre ce se consideră „doză suficientă” face ca orice explicație a unui rezultat de impact dezamăgitor să semene cu o scuză post-hoc.

## Surse

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., „Process evaluation of complex interventions: Medical Research Council guidance.” BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, rapoarte de evaluare a programelor. <https://www.nao.org.uk/>
