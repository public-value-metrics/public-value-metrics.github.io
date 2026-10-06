# Metode de evaluare a impactului

Metodele de evaluare a impactului sunt proiectările statistice și experimentale folosite pentru a estima ce a cauzat de fapt o politică sau un program, spre deosebire de ce s-ar fi întâmplat oricum — studiile controlate randomizate (RCT), diferența-în-diferențe, potrivirea după scorul de propensiune și proiectarea cu discontinuitate de regresie sunt cele patru folosite cel mai des în politicile publice britanice. Există deoarece majoritatea intervențiilor guvernamentale nu pot fi testate într-un laborator: nu puteți randomiza ce oraș primește o nouă linie de autobuz așa cum puteți randomiza ce pacient primește un medicament, așa că aceste metode împrumută aceeași logică cauzală fără a cere întotdeauna alocare aleatorie.

## De ce contează

Magenta Book al HM Treasury, Anexa A despre metodele cvasi-experimentale, este ghidul canonic al guvernului britanic pentru alegerea între aceste proiectări, iar organisme precum Education Endowment Foundation și What Works Centre for Local Economic Growth instituționalizează o ierarhie a dovezilor construită în jurul lor — RCT-uri unde randomizarea este fezabilă și etică, proiectări cvasi-experimentale unde nu este. Alegerea metodei nu este un detaliu tehnic ulterior: determină dacă o evaluare poate răspunde la „a cauzat programul aceasta?” sau doar la „s-a întâmplat aceasta după ce a început programul?”, aceeași întrebare pe care [analiza contrafactuală](../analiza-contrafactuală/) este construită să-i oblige pe practicieni să o pună înainte ca orice evaluare să fie comandată.

## Matematica

```
RCT:
  Impact = medie(rezultat | grup de tratament) − medie(rezultat | grup de control)
  (valid deoarece alocarea la tratament este aleatorie)

Diferență-în-diferențe (DiD):
  Impact = [rezultat_după(tratat) − rezultat_înainte(tratat)]
         − [rezultat_după(control) − rezultat_înainte(control)]
  (cere o ipoteză de „tendințe paralele”: grupurile tratat și de control s-ar fi
   mișcat împreună în absența intervenției)

Potrivire după scorul de propensiune (PSM):
  1. Estimați P(tratament = 1 | covariate X) pentru fiecare unitate → scor de propensiune
  2. Potriviți unitățile tratate cu unități netratate cu scoruri de propensiune similare
  3. Impact = medie(rezultat | tratat) − medie(rezultat | control potrivit)

Proiectare cu discontinuitate de regresie (RDD):
  Impact = saltul rezultatului observat la pragul de eligibilitate,
           comparând unitățile imediat deasupra cu cele imediat sub limită
```

## Exemplu lucrat

**Autoritate locală (diferență-în-diferențe pentru un program pentru familii în dificultate)**: rezultatul este frecvența școlară. Zona tratată trece de la 84% la 89% frecvență (+5 puncte procentuale) pe perioada programului; o zonă comparabilă, dar netratată, trece de la 85% la 87% (+2 puncte procentuale) în aceeași perioadă. Estimarea impactului DiD: 5 − 2 = +3 puncte procentuale atribuibile programului. Aplicat unei cohorte de 2.000 de elevi din zona tratată, aceasta este în concordanță cu aproximativ 60 de elevi suplimentari (3% × 2.000) care ating categoria superioară de frecvență, o extrapolare care ar trebui raportată cu avertismentul tendințelor paralele, nu ca un număr precis de persoane.

**Organizație caritabilă (potrivire după scorul de propensiune pentru o organizație de angajabilitate)**: 300 de participanți la program sunt potriviți cu 300 de persoane dintr-un set de date administrative mai mare folosind scoruri de propensiune construite din vârstă, istoric anterior de angajare și nivel de calificare. Rata de ocupare la douăsprezece luni: grup tratat potrivit 46%, grup de comparație potrivit 33%. Estimarea impactului PSM: 46% − 33% = +13 puncte procentuale atribuibile programului, condiționat de absența unui confundant neobservat (precum motivația) care să determine atât participarea, cât și rezultatul.

## Legătura cu ingineria software

Dacă oricare dintre aceste proiectări este fezabilă mai târziu depinde în mare măsură de deciziile de inginerie a datelor luate devreme. RDD are nevoie de o variabilă de rulare înregistrată corect și de un prag de eligibilitate cu adevărat curat; DiD are nevoie de date panel comparabile în timp atât pentru zonele tratate, cât și pentru cele de comparație, ceea ce înseamnă joncțiuni consistente între sisteme și ani; PSM are nevoie de date bogate de covariate de bază captate înainte de tratament, nu reconstruite ulterior. Un model de date proiectat de la început alături de o [teorie a schimbării](../teoria-schimbării/) și un [model logic](../modelul-logic/) — captând covariate de bază, date și înregistrări eligibile pentru grupul de comparație — este ceea ce face posibilă mai târziu o evaluare riguroasă a impactului, în loc de o alergătură costisitoare post-hoc. Vezi [evaluarea impactului versus evaluarea procesului](../evaluarea-impactului-versus-evaluarea-procesului/) pentru întrebarea complementară la care aceste metode nu răspund singure.

## Capcane

- **Forțarea unui RCT acolo unde este infezabil sau lipsit de etică**, sau, invers, a nu lua niciodată în considerare o proiectare cvasi-experimentală când exista o oportunitate reală pentru ea — un prag de politică, o lansare în etape — rămasă nefolosită.
- **Ignorarea ipotezei tendințelor paralele în DiD.** Dacă zona de comparație diverga deja de zona tratată înainte de intervenție, comparația în două puncte este contaminată; verificați pre-tendințele, nu doar înainte/după.
- **Potrivirea numai după covariate observate în PSM.** Selecția neobservată, precum motivația participanților, poate părtini estimarea chiar și când covariatele observate sunt bine echilibrate.
- **Manipularea variabilei de rulare în RDD.** Dacă oamenii își pot influența scorul pentru a cădea imediat înăuntrul unui prag de eligibilitate, discontinuitatea nu mai izolează un efect cauzal.

## Surse

- HM Treasury, Magenta Book (2020), Anexa A: Metode cvasi-experimentale. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, metodologia analizei dovezilor. <https://whatworksgrowth.org/>
- Education Endowment Foundation, îndrumări de evaluare. <https://educationendowmentfoundation.org.uk/>
