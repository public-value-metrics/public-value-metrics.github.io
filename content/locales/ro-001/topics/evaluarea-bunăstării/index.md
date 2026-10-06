# Evaluarea bunăstării (WELLBY)

Evaluarea bunăstării prețuiește direct efectul unei politici în termeni de satisfacție în viață, folosind WELLBY (an de viață ajustat la bunăstare) ca unitate — un WELLBY este egal cu o schimbare de un punct pe o scală de satisfacție în viață de la 0 la 10, susținută timp de un an. Este alternativa sancționată oficial de HM Treasury la monetizarea fiecărui beneficiu prin disponibilitatea de a plăti.

## De ce contează

„Wellbeing guidance for appraisal: supplementary Green Book guidance” al HM Treasury (2021, <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) a adus formal datele de bunăstare subiectivă în evaluarea guvernului central, oferind analiștilor o cale de a evalua rezultate — conexiune socială, sănătate mintală, siguranță, participare civică — pe care metodele de [preferințe declarate](../evaluarea-prin-preferințe-declarate/) și [preferințe relevate](../evaluarea-prin-preferințe-relevate/) abia le pot prețui convingător, deoarece oamenii sunt adesea slabi în a prezice cât de mult va afecta un bun satisfacția lor în viață. Îndrumarul, elaborat împreună cu What Works Centre for Wellbeing, stabilește o valoare monetară recomandată per WELLBY — 13.000 £ (prețuri 2021, revizuită periodic) — derivată din relația observată în sondajele mari de bunăstare (în principal Annual Population Survey al ONS, care pune cele patru întrebări de bunăstare ONS4 din 2011) între venit și satisfacția în viață, oferind analiștilor un curs de conversie înapoi în lire când este necesară o comparație monetizată cu alte evaluări Green Book.

Metoda contează deoarece inversează logica obișnuită a evaluării: în loc să întrebe ce ar plăti oamenii pentru un rezultat (preferințe declarate) sau să deducă valoarea dintr-o tranzacție de piață conexă (preferințe relevate), măsoară direct efectul rezultatului asupra satisfacției raportate în viață, ocolind decalajul dintre ce spun oamenii că își doresc și ce îi face efectiv mai bine. Aceasta este și limita ei centrală — satisfacția în viață autoraportată este afectată de efecte de adaptare și de încadrare pe care un practician atent trebuie să le controleze.

## Matematica

```
WELLBY = 1 punct de satisfacție în viață (scala 0-10) susținut pentru 1 persoană timp de 1 an

Total WELLBY dintr-o politică =
  Σ (schimbarea scorului de satisfacție în viață) × (numărul de persoane afectate)
    × (durata în ani, actualizată la rata de actualizare socială)

Valoare monetizată = Total WELLBY × valoare per WELLBY
  (valoarea recomandată de HM Treasury: 13.000 £ per WELLBY, prețuri 2021,
   supusă revizuirii periodice — verificați îndrumarul curent înainte de utilizare)
```

Aceasta diferă de [anul de viață ajustat la bunăstare](../ani-de-viață-ajustați-la-bunăstare/) din economia sănătății, care este de obicei ancorat în scale ale calității vieții legate de sănătate (EQ-5D și similare), nu în satisfacția generală în viață; cele două sunt înrudite, dar nu interschimbabile, iar evaluările Green Book ar trebui să fie explicite cu privire la ce scală și metodă de elicitare stă la baza unei cifre WELLBY raportate.

## Exemplu lucrat

**Autoritate locală**: un consiliu desfășoară o schemă comunitară de prietenie pentru rezidenți vârstnici izolați, deservind 400 de persoane. Un sondaj de bunăstare înainte/după folosind întrebarea de satisfacție în viață ONS4 arată că scorul mediu al participanților crește de la 5,8 la 6,5 — un câștig de 0,7 puncte — susținut pe durata finanțată a programului de 2 ani.

```
WELLBY generați = 400 persoane × 0,7 puncte × 2 ani = 560 WELLBY
Valoare monetizată = 560 × 13.000 £ = 7,28 mil. £
Costul programului = 450.000 £ pe 2 ani

Raport beneficiu-cost ≈ 7,28 mil. £ / 0,45 mil. £ ≈ 16:1
```

Un raport atât de mare ar trebui să stârnească verificare, nu sărbătoare — îndrumarul Green Book pentru bunăstare avertizează explicit împotriva luării ca atare a câștigurilor autoraportate din eșantioane mici fără verificarea efectelor de selecție (s-au alăturat schemei doar cei mai sociabili rezidenți, cu cele mai mari șanse de îmbunătățire?) și fără un grup de comparație; o evaluare bine proiectată ar scădea o schimbare contrafactuală observată la neparticipanți, vezi [analiza contrafactuală](../analiza-contrafactuală/).

**Guvern național**: compararea a două programe de ocupare folosind WELLBY în loc doar de câștiguri surprinde faptul că șomajul poartă un cost de bunăstare dincolo de venitul pierdut — cercetarea britanică privind bunăstarea constată constant că șomajul reduce satisfacția în viață mai mult decât ar prezice doar pierderea de venit, din cauza efectelor nepecuniare ale pierderii structurii, scopului și contactului social. Un program evaluat doar pe câștigul de venit și-ar subestima valoarea față de unul evaluat suplimentar pe WELLBY.

## Legătura cu ingineria software

Evaluarea bunăstării ajunge rar direct la echipele de inginerie, dar modelează ce este definit drept „succes” pentru produsele sectorului social și ale serviciilor publice — o platformă digitală de prietenie, un instrument de triere a sănătății mintale sau o platformă comunitară pentru rezidenți izolați ar trebui să se aștepte ca impactul ei să fie în cele din urmă măsurat astfel, ceea ce înseamnă că analiza produsului trebuie să surprindă *cine* este atins și *cât timp*, nu doar numărători de utilizare. Încorporați instrumentarea sondajelor de bunăstare (ONS4 sau echivalente validate) în evaluarea serviciului de la început, în loc să o atașați retroactiv; adăugarea ulterioară a unei linii de bază de bunăstare după lansarea unui serviciu pierde complet comparația înainte/după. Vezi [rezultate versus realizări](../rezultate-versus-realizări/) și [metodele de evaluare a impactului](../metode-de-evaluare-a-impactului/).

## Capcane

- **Fără contrafactual sau grup de comparație.** Un câștig de bunăstare înainte/după fără control pentru ce s-ar fi întâmplat oricum supraestimează efectul programului; vezi [analiza contrafactuală](../analiza-contrafactuală/) și [adiționalitatea și efectul de inerție](../adiționalitate-și-efect-de-inerție/).
- **Eșantioane mici, autoselectate.** Sondajele de bunăstare ale participanților la program care s-au înscris voluntar sunt predispuse la părtinire de selecție — oamenii care s-au alăturat și au rămas aveau probabil deja o tendință ascendentă.
- **Tratarea conversiei £-per-WELLBY ca precisă.** Valoarea monetizată este o convenție de politică derivată din regresii venit-bunăstare, nu un preț de piață; folosiți-o pentru comparabilitate între evaluările Green Book, nu ca afirmație despre „cât valorează” bunăstarea.
- **Confundarea WELLBY cu QALY legați de sănătate.** Cei doi măsoară constructe diferite pe scale diferite; vezi [anii de viață ajustați la bunăstare](../ani-de-viață-ajustați-la-bunăstare/) pentru varianta din economia sănătății și nu îi mediați împreună.

## Surse

- HM Treasury. „Wellbeing guidance for appraisal: supplementary Green Book guidance.” 2021. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. „Personal well-being in the UK” (măsurile ONS4). <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. „Wellbeing Valuation: A Nascent Field?” Rezumate de cercetare LSE / Simetrica.
