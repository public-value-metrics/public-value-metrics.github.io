# Analiza contrafactuală

Un contrafactual este o estimare a ceea ce s-ar fi întâmplat în absența unei intervenții. Fără el, o schimbare observată după lansarea unui program nu poate fi deosebită de o schimbare care s-ar fi produs oricum — fără contrafactual, nu există dovadă a unui efect, oricât de convingătoare ar părea cifrele dinainte și de după. Magenta Book al HM Treasury consideră construirea unui contrafactual credibil sarcina metodologică centrală a evaluării impactului, mai importantă decât orice altă alegere individuală de proiectare.

## De ce contează

„Criminalitatea a scăzut cu 15% în anul de după introducerea programului” nu este o dovadă că programul a funcționat decât dacă știți ce s-ar fi întâmplat cu criminalitatea fără el — criminalitatea ar fi putut scădea oricum cu 20% din cauza unor tendințe economice sau demografice fără legătură, ceea ce ar însemna că programul a înrăutățit de fapt lucrurile față de contrafactual, deși cifra brută s-a îmbunătățit. Aceasta este cea mai frecventă eroare analitică în afirmațiile de impact din sectorul public și social: confundarea unei comparații înainte/după cu o dovadă de cauzalitate. Magenta Book spune explicit că evaluarea impactului există pentru a răspunde unei întrebări contrafactuale — „ce diferență a făcut această intervenție?” — și că a răspunde cere estimarea, nu doar descrierea, lumii care nu s-a întâmplat.

Metode diferite construiesc contrafactualul cu grade diferite de încredere, iar ghidurile guvernamentale de evaluare le ierarhizează în consecință. Studiile controlate randomizate (RCT), în care indivizii sau zonele sunt alocate aleatoriu pentru a primi sau nu o intervenție, produc cel mai puternic contrafactual, deoarece randomizarea asigură că grupul de tratament și cel de control diferă, în medie, doar prin primirea intervenției. Cabinet Office și What Works Network au promovat RCT-urile în politicile publice britanice de la raportul „Test, Learn, Adapt” al Behavioural Insights Team din 2012, tocmai pentru că proiectările mai slabe sunt vulnerabile la confuzie (confounding) — diferența observată poate reflecta cine a ales să participe, nu efectul programului. Acolo unde randomizarea este nepractică sau lipsită de etică (cum este adesea cazul programelor cu drept legal sau al modificărilor de politică la nivelul întregii populații), Magenta Book stabilește o ierarhie explicită de alternative mai slabe, dar totuși utile: grupuri de comparație potrivite, proiectări diferență-în-diferențe, discontinuitate de regresie în jurul pragurilor de eligibilitate și, ca ultimă soluție, simpla comparație înainte/după — clar semnalată ca cea mai slabă formă de dovadă, predispusă să confunde efectul programului cu efectul a tot ce s-a mai schimbat în același timp.

## Matematica

Încadrarea contrafactuală, aplicabilă tuturor metodelor:

```
Impact estimat = Rezultat(cu intervenție) − Rezultat(contrafactual: fără intervenție)

NU:
Impact estimat ≠ Rezultat(după) − Rezultat(înainte)   [confundă timpul cu tratamentul]
```

Diferența-în-diferențe, una dintre cele mai frecvente proiectări cvasi-experimentale în evaluarea guvernamentală, izolează efectul tratamentului scăzând propria schimbare înainte/după a grupului de comparație:

```
Estimare DiD = [Rezultat(tratat, după) − Rezultat(tratat, înainte)]
             − [Rezultat(comparație, după) − Rezultat(comparație, înainte)]
```

Aceasta elimină orice tendință comună ambelor grupuri (ex. o schimbare economică națională care afectează pe toată lumea), lăsând doar schimbarea diferențială atribuibilă intervenției.

## Exemplu lucrat

**Program de ocupare, înainte/după (proiectare slabă)**: o schemă de sprijin pentru angajare raportează că ocuparea participanților a crescut de la 40% la 55% într-un an — o concluzie naivă de „+15 puncte procentuale datorită programului”.

**Același program, diferență-în-diferențe (proiectare mai puternică)**: un grup de comparație potrivit de neparticipanți similari, din aceeași piață locală a muncii, arată o creștere a ocupării de la 38% la 47% în același an (era în curs o redresare economică națională).

```
Schimbarea grupului tratat:       55% − 40% = +15 puncte procentuale
Schimbarea grupului de comparație: 47% − 38% = +9 puncte procentuale

Estimare DiD (efectul real al programului) = 15 − 9 = +6 puncte procentuale
```

Efectul atribuibil onest este de 6 puncte procentuale, nu 15 — mai mult de jumătate din îmbunătățirea aparentă înainte/după s-ar fi produs oricum, indiferent de program, determinată de aceeași redresare economică ce a ridicat grupul de comparație.

**Discontinuitate de regresie, prag de eligibilitate**: o schemă de granturi este disponibilă doar afacerilor cu mai puțin de 50 de angajați. Compararea rezultatelor pentru afacerile imediat sub prag (45–49 de angajați, eligibile) cu cele imediat peste (50–54 de angajați, neeligibile) oferă un contrafactual credibil, deoarece afacerile de o parte și de alta a unui prag administrativ arbitrar sunt altfel similare — pragul, nu vreo caracteristică de fond a afacerii, determină eligibilitatea. O diferență medie de rezultat de 2.000 £ între cele două grupuri, observată doar la prag, este atribuibilă grantului cu mult mai multă încredere decât o simplă comparație între toate afacerile eligibile și toate cele neeligibile (care diferă sistematic ca mărime).

## Legătura cu ingineria software

Gândirea contrafactuală ar trebui să modeleze felul în care sunt proiectate sistemele de urmărire a impactului și fluxurile de evaluare pentru software-ul guvernamental și al sectorului social:

- Încorporați captarea grupului de comparație într-un sistem de la început — înregistrând cine a fost eligibil dar nu s-a înscris, sau o cohortă potrivită de neparticipanți — în loc să o adăugați după ce un program a rulat deja și există doar date înainte/după.
- Acolo unde randomizarea este fezabilă (o lansare în etape, un serviciu digital activat pentru unii utilizatori înaintea altora), instrumentați sistemul pentru a păstra alocarea aleatorie ca un câmp interogabil; o lansare în etape își distruge accidental propria valoare de evaluare dacă ordinea de alocare nu este înregistrată.
- Aceasta este metoda fundamentală din spatele [metodelor de evaluare a impactului](../metode-de-evaluare-a-impactului/) și este ceea ce o separă de [evaluarea impactului versus evaluarea procesului](../evaluarea-impactului-versus-evaluarea-procesului/), a doua întrebând dacă un program a fost livrat așa cum s-a intenționat, nu dacă a cauzat un efect.
- [Adiționalitatea și efectul de inerție](../adiționalitate-și-efect-de-inerție/) și [deplasarea și atribuirea](../deplasare-și-atribuire/) sunt, în esență, ambele întrebări contrafactuale — efectul de inerție este „care ar fi fost acest rezultat specific fără intervenție”, aplicat la nivelul unei ajustări, nu al unei proiectări complete de evaluare.

## Capcane

- **Tratarea înainte/după ca dovadă de cauzalitate.** Aceasta este cea mai frecventă și mai gravă eroare din raportarea impactului în sectorul public și social; o schimbare înainte/după confundă efectul programului cu tot ce s-a mai schimbat în aceeași perioadă.
- **Folosirea unui grup de comparație care diferă sistematic de grupul tratat.** Un grup de comparație potrivit trebuie să fie cu adevărat similar în privința caracteristicilor relevante (vezi ierarhia metodelor de [analiză contrafactuală](../analiza-contrafactuală/) din Magenta Book); compararea participanților la program (care s-au înscris și sunt adesea mai motivați) cu neparticipanții (care nu) riscă o părtinire de selecție deghizată în efect al programului.
- **Distrugerea oportunităților de randomizare prin proiectare slabă a livrării.** O lansare în etape sau randomizată își păstrează valoarea de evaluare doar dacă alocarea este cu adevărat aleatorie și înregistrată — a lăsa managerii locali să aleagă cine merge primul anulează scopul.
- **Pretinderea unei precizii excesive dintr-o proiectare slabă.** O estimare înainte/după ar trebui prezentată ca orientativă, nu ca o mărime măsurată a efectului; ierarhia dovezilor din Magenta Book există pentru ca forța unei afirmații să corespundă forței proiectării care a produs-o.

## Surse

- HM Treasury, „The Magenta Book: Central Government Guidance on Evaluation” (2020), și ghidul său suplimentar privind metodele cvasi-experimentale. <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, „Test, Learn, Adapt: Developing Public Policy with Randomized Controlled Trials” (2012).
- What Works Network, ghid privind standardele de dovezi. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton University Press, 2009 (referință standard pentru metodele diferență-în-diferențe și discontinuitate de regresie).
