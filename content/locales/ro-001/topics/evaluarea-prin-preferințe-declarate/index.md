# Evaluarea prin preferințe declarate

Metodele preferințelor declarate estimează valoarea unui bun non-piață întrebând direct oamenii cât ar fi dispuși să plătească pentru el sau ce compensație ar accepta pentru a renunța la el, de obicei printr-un sondaj structurat care descrie un scenariu ipotetic. Evaluarea contingentă (contingent valuation) este cea mai cunoscută tehnică din această familie.

## De ce contează

Anexa 2 a Green Book (îndrumări suplimentare privind evaluarea impacturilor non-piață) aprobă metodele preferințelor declarate pentru bunurile care nu au nicio tranzacție de piață observabilă din care să se deducă valoarea — calitatea aerului, biodiversitatea, protecția împotriva inundațiilor, valoarea de existență a unui peisaj pe care cineva poate să nu-l viziteze niciodată (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Defra a publicat propriile îndrumări de preferințe declarate pentru evaluarea mediului tocmai pentru că atât de multă valoare de mediu (conservarea habitatelor, calitatea apei) nu are nicio piață-proxy, spre deosebire de, să zicem, zgomot, care măcar se corelează cu prețurile observabile ale locuințelor (vezi [evaluarea prin preferințe relevate](../evaluarea-prin-preferințe-relevate/)).

Atracția centrală a preferințelor declarate — pot evalua literalmente orice, inclusiv bunuri cu care nimeni nu a tranzacționat vreodată — este și sursa problemei lor de credibilitate. Deoarece respondenții nu cheltuiesc de fapt bani, sondajele de evaluare contingentă sunt vulnerabile la părtinire ipotetică (oamenii supraestimează disponibilitatea de a plăti când nu există o restricție bugetară reală), efecte de încorporare (același bun este evaluat diferit în funcție de ce altceva se află în sondaj) și părtinire de punct de pornire în proiectările de tip joc de licitație. Panelul NOAA din 1993 privind evaluarea contingentă, convocat după litigiile legate de deversarea de petrol Exxon Valdez, a stabilit standarde de proiectare — un format de referendum binar „ați plăti X £, da/nu” în loc de licitație deschisă și reamintiri obligatorii ale restricției bugetare reale a respondentului — care rămân standardul de referință pentru sondajele apărabile.

## Matematica

```
Evaluare contingentă (format referendum):
  Prezentați o alegere binară: „ați plăti X £ pe an pentru rezultatul Y? da/nu”
  Variați X aleatoriu între respondenți.
  Ajustați disponibilitatea de a plăti ca funcție a ratei de răspunsuri da/nu la fiecare X.

WTP medie = aria de sub curba cererii estimate
Valoare agregată = WTP medie × populația afectată

Varianta experiment de alegere (modelare a alegerii discrete):
  Prezentați respondenților alegeri repetate între pachete de atribute
  (inclusiv un atribut de cost), estimați prețuri implicite pentru fiecare
  atribut non-cost din compromisurile pe care le dezvăluie respondenții.
```

Varianta experimentului de alegere este în general preferată în practica britanică actuală față de evaluarea contingentă cu o singură întrebare, deoarece obligarea respondenților să pună în balanță repetat mai multe atribute față de cost produce estimări mai consistente intern și mai greu de manipulat decât o singură întrebare da/nu.

## Exemplu lucrat

**Guvern național**: Defra comandă un sondaj de evaluare contingentă pentru a evalua un program de îmbunătățire a calității apei unui râu. Un sondaj în format referendum pe 2.000 de gospodării constată că 62% ar plăti 40 £/an printr-un supliment ipotetic la factura de apă, iar curba cererii estimate dă o disponibilitate medie de a plăti de 28 £/an per gospodărie.

```
WTP medie = 28 £/gospodărie/an
Gospodării în bazinul hidrografic = 340.000
Valoare anuală agregată = 28 £ × 340.000 = 9,52 mil. £/an

Pe o perioadă de evaluare de 20 de ani la o rată de actualizare de 3,5% (factor de anuitate ≈ 14,2):
PV(beneficiu) ≈ 9,52 mil. £ × 14,2 ≈ 135 mil. £
```

Această cifră agregată este apoi comparată cu partea de costuri a [analizei cost-beneficiu sociale](../analiza-cost-beneficiu-socială/) a programului. Green Book cere ca acest tip de dovezi de preferințe declarate să fie raportat alături de intervalul de încredere și metodologia sondajului, nu ca o estimare punctuală goală, tocmai pentru că numărul de bază este mai fragil decât un preț de piață.

**Organizație caritabilă**: un trust de patrimoniu sondează vizitatori și nevizitatori despre disponibilitatea de a plăti pentru a preveni închiderea unei clădiri istorice pe care niciunul dintre grupuri nu o vizitează neapărat (valoarea ei de existență). Deoarece nevizitatorii care nu vor vedea niciodată clădirea raportează totuși o WTP pozitivă, sondajul captează valoarea de existență și de legat moștenire pe care o simplă numărare a veniturilor din taxele vizitatorilor (un proxy de preferințe relevate) ar rata complet — arătând avantajul real al preferințelor declarate acolo unde nu există nicio tranzacție de piață care să releve valoarea.

## Legătura cu ingineria software

Metodele preferințelor declarate se aplică rareori direct muncii de inginerie software, dar inginerii care construiesc platforme de consultare a cetățenilor, instrumente de buget participativ sau infrastructură de sondaje publice construiesc adesea chiar instrumentul de care depinde economia. Corectitudinea detaliilor de proiectare a sondajului — sume de ofertă randomizate, încadrare de referendum binar în locul întrebărilor deschise, reamintiri explicite ale restricției bugetare — nu este o fineță de UX, ci ceea ce face evaluarea rezultată apărabilă la control; un sondaj prost proiectat în aplicație poate invalida luni de analiză economică ulterioară. Vezi [metricile de satisfacție a cetățenilor](../metrici-de-satisfacție-a-cetățenilor/) pentru disciplina mai generală de obținere a datelor de opinie publică care vor suporta greutate analitică.

## Capcane

- **Întrebări deschise de tipul „cât ați plăti?”.** Sunt mult mai predispuse la părtinire strategică și de ancorare decât încadrarea în referendum binar; recomandarea panelului NOAA de a folosi un format de referendum există tocmai pentru că elicitarea deschisă se comportă prost.
- **Lipsa reamintirii restricției bugetare reale a respondentului.** Fără ea, WTP declarată depășește în mod obișnuit ce ar plăti aceiași oameni când este în joc un compromis bugetar real — părtinire ipotetică.
- **Efecte de încorporare ignorate.** Același bun evaluat singur față de evaluat ca parte a unui pachet mai mare produce estimări WTP diferite; raportați ce altceva, dacă e cazul, se afla în cadrul sondajului.
- **Tratarea estimării punctuale a unui singur sondaj ca definitivă.** Practica Green Book se așteaptă la un interval și la o discuție a părtinirilor cunoscute, nu la un număr gol purtat în tabelul cost-beneficiu ca și cum ar fi un preț de piață.

## Surse

- HM Treasury. „The Green Book,” Anexa 2: evaluarea impacturilor non-piață. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. „Valuing environmental impacts: practical guidelines” (îndrumări privind evaluarea contingentă și experimentele de alegere). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. „Report of the NOAA Panel on Contingent Valuation.” Federal Register, 1993.
- Mitchell RC, Carson RT. „Using Surveys to Value Public Goods: The Contingent Valuation Method.” Resources for the Future, 1989.
