# Evaluarea prin preferințe relevate

Metodele preferințelor relevate deduc valoarea unui bun non-piață din comportamentul observabil pe o piață conexă, în loc să întrebe direct oamenii. Prețurile hedonice și metoda costului de călătorie sunt cele două tehnici de bază: ambele pornesc de la o tranzacție reală și deduc un preț implicit pentru lucrul care nu a fost niciodată vândut direct.

## De ce contează

Acolo unde metodele de [preferințe declarate](../evaluarea-prin-preferințe-declarate/) pun o întrebare ipotetică, metodele de preferințe relevate observă ce au plătit oamenii de fapt, ceea ce Green Book tratează ca dovadă în general mai credibilă, ceteris paribus, deoarece nu este supusă părtinirii ipotetice — respondenții dintr-un studiu hedonic al prețurilor locuințelor au plătit cu adevărat prima sau reducerea care se măsoară (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Anexa 2). Prețurile hedonice descompun un preț de piață — de obicei prețul locuințelor — în prețuri implicite pentru fiecare atribut al bunului, permițând analiștilor să izoleze, de exemplu, prima de preț pe care gospodăriile o plătesc efectiv pentru a locui într-un loc mai liniștit sau cu aer mai bun, controlând statistic toate celelalte atribute care afectează și prețul locuinței (suprafață, locație, circumscripție școlară). Metoda costului de călătorie face lucrul analog pentru siturile recreaționale fără taxă de intrare: timpul și banii pe care oamenii îi cheltuiesc ajungând la un sit relevă o limită inferioară a valorii siturilor pentru ei, deoarece nimeni nu suportă un cost care să depășească valoarea vizitei pentru el.

Ambele metode au o limitare structurală: pot evalua doar ceea ce este încorporat într-o tranzacție de piață existentă. Zgomotul din apropierea unei piste apare în prețurile locuințelor pentru că oamenii cărora le pasă de zgomot se sortează în locuințe mai liniștite; valoarea de existență a unei specii pe care nimeni nu o vizitează și lângă care nu locuiește nu apare deloc în nicio tranzacție, tocmai lacuna pe care există să o umple metodele de [preferințe declarate](../evaluarea-prin-preferințe-declarate/).

## Matematica

```
Prețuri hedonice:
  Preț locuință = f(atribute structurale, atribute de locație,
                    atributul de mediu de interes, ...)
  Estimare prin regresie; coeficientul atributului de mediu
  (menținând constant restul) este prețul său implicit.

  Prețul implicit al atributului X = ∂(Preț locuință) / ∂X

Metoda costului de călătorie:
  Rata de vizitare (vizite per capita din zona i) = f(cost de călătorie din zona i,
                    situri substitut, controale socioeconomice)
  Estimați o curbă a cererii de vizite ca funcție a costului de călătorie.
  Surplusul consumatorului = aria de sub curba cererii estimate
                           = valoarea sitului pentru vizitatori
```

Ambele metode cer un set de control statistic sănătos — omiterea unui atribut confundant (hedonic) sau a unui sit substitut din apropiere (cost de călătorie) părtinește prețul implicit într-o direcție care nu este întotdeauna evidentă din start, motiv pentru care Anexa 2 din Green Book cere raportarea specificației de regresie și a controalelor, nu doar a coeficientului de titlu.

## Exemplu lucrat

**Guvern național**: metodologia prețului umbră al carbonului din Green Book se sprijină parțial pe dovezi hedonice, dar un caz ilustrativ mai simplu este zgomotul aeronavelor. Un studiu hedonic care regresează prețurile de vânzare ale locuințelor dintr-o zonă de pe traseul de zbor pe expunerea la zgomot ponderată cu distanța, controlând pentru suprafață, vechime și circumscripția școlară, constată că fiecare creștere de 1 decibel a expunerii medii la zgomot se asociază cu o scădere de 0,5% a prețului locuinței. Pentru o locuință tipică de 280.000 £ din zona afectată:

```
Preț implicit per decibel = 280.000 £ × 0,5% = 1.400 £ per gospodărie
Gospodării afectate de o creștere de 3 dB de la o pistă nouă = 18.000
Cost implicit agregat al creșterii zgomotului = 1.400 £ × 3 × 18.000 = 75,6 mil. £
```

Este un cost capitalizat unic (încorporat în prețul locuinței), pe care evaluarea trebuie să aibă grijă să nu-l numere de două ori în raport cu un flux anual de costuri de neplăcere cauzată de zgomot estimat separat.

**Organizație caritabilă**: o organizație caritabilă de mediu folosește metoda costului de călătorie pentru a evalua o rezervație naturală cu intrare liberă. Datele sondajului privind codurile poștale ale vizitatorilor dau un cost mediu de călătorie dus-întors (timp evaluat la valoarea recomandată de Green Book pentru timpul în afara muncii, plus combustibil) de 14 £ per vizită, cu 40.000 de vizite pe an. Curba cererii estimate — ratele de vizitare scăzând pe măsură ce crește costul de călătorie dintr-o zonă — implică un surplus al consumatorului per vizită, peste cei 14 £ cheltuiți efectiv, de aproximativ 9 £.

```
Valoare anuală totală = 40.000 vizite × (14 £ cheltuiți + 9 £ surplus al consumatorului)
                      = 40.000 × 23 £ ≈ 920.000 £/an
```

Aceasta depășește venitul zero din taxa de intrare a rezervației și oferă administratorilor organizației caritabile o cifră apărabilă pentru valoarea recreațională a sitului când fac cazul în fața finanțatorilor.

## Legătura cu ingineria software

Gândirea preferințelor relevate apare în analiza de produs din sectorul public mai des decât își dau seama practicienii: datele de utilizare ale unui serviciu digital guvernamental gratuit sunt ele însele dovezi de preferințe relevate despre valoare (frecvența, durata sesiunii și — cel mai grăitor — tiparele de utilizare repetată față de cea unică pot fi analizate în același mod în care un model de cost de călătorie tratează frecvența vizitelor în raport cu distanța). Acolo unde un serviciu are substituți reali (un canal pe hârtie, o linie telefonică), „costul” pe care cetățenii îl suportă ca să folosească în schimb canalul digital (timp, date, un dispozitiv) poate fi estimat și comparat cu utilizarea, reluând direct logica costului de călătorie. Vezi [standardul serviciilor digitale](../standardul-serviciilor-digitale/) și [valoarea datelor deschise](../valoarea-datelor-deschise/), care se confruntă cu exact această problemă de evaluare pentru un bun fără preț de piață direct.

## Capcane

- **Părtinire prin variabilă omisă în modelele hedonice.** Omiterea unui atribut corelat (calitatea școlii corelându-se atât cu prețul locuinței, cât și cu variabila de mediu de interes) părtinește estimarea prețului implicit; specificația trebuie raportată și analizată, nu doar rezultatul.
- **Ignorarea siturilor substitut în studiile costului de călătorie.** Valoarea relevată a unui sit pentru un vizitator este subestimată dacă există un substitut mai apropiat și nu este controlat — poate vizita situl mai ales pentru că este gratuit, nu pentru că este unic valoros.
- **Aplicarea preferințelor relevate unui bun fără niciun ecou de piață.** Valoarea de existență, valoarea de opțiune și valoarea de legat moștenire nu apar în nicio tranzacție și nu pot fi recuperate prin metode hedonice sau de cost de călătorie — acea lacună aparține [evaluării prin preferințe declarate](../evaluarea-prin-preferințe-declarate/).
- **Confundarea valorii capitalizate (unice) cu un flux anual.** Efectele hedonice asupra prețurilor locuințelor sunt de obicei valori capitalizate unice; tratarea lor ca flux anual de beneficii umflă evaluarea.

## Surse

- HM Treasury. „The Green Book,” Anexa 2: evaluarea impacturilor non-piață. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Studii de evaluare a zgomotului aeronavelor folosite în evaluarea aeroporturilor. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. „Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition.” Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. „Economics of Outdoor Recreation.” Johns Hopkins University Press, 1966 (originea metodei costului de călătorie).
