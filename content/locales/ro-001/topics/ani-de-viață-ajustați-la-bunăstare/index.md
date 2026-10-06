# Ani de viață ajustați la bunăstare (WELLBY)

Un WELLBY este un punct suplimentar de satisfacție în viață, pe scala standard de bunăstare 0–10, pentru o persoană timp de un an. Este analogul structural al QALY folosit în economia sănătății — o singură unitate care permite compararea intervențiilor ale căror rezultate nu au nimic altceva în comun — dar construit pe bunăstare subiectivă în loc de stări clinice de sănătate și expus în „Wellbeing guidance for appraisal: supplementary Green Book guidance” (2021) al HM Treasury.

## De ce contează

Analiza cost-beneficiu are nevoie de o unitate comună pentru a compara un grant pentru un club de tineret cu o schemă de siguranță rutieră și cu un serviciu de sănătate mintală, dintre care niciunul nu împarte o măsură de rezultat. Economia sănătății a rezolvat aceasta pentru intervențiile clinice cu QALY: un an de viață ajustat la calitate, ponderat de la 0 (decedat) la 1 (sănătate deplină). Îndrumările HM Treasury privind bunăstarea extind aceeași logică la cheltuielile publice non-sănătate, folosind întrebarea armonizată a ONS despre satisfacția în viață („În general, cât de mulțumit sunteți de viața dumneavoastră în prezent?”, răspuns 0–10) ca scară de rezultat în loc de un indice de stări de sănătate. Un WELLBY de 1 înseamnă satisfacția în viață a unei persoane crescând cu un punct întreg timp de un an (sau, echivalent, satisfacția a zece persoane crescând cu 0,1 puncte fiecare timp de un an — WELLBY se însumează pe populație așa cum se însumează QALY). Îndrumările HM Treasury stabilesc o valoare monetară ilustrativă per WELLBY (în jur de 13.000 £, prețuri 2019/20) derivată prin reconcilierea datelor de bunăstare subiectivă cu alte abordări ale valorii unui an de viață, oferind evaluatorilor o cale de a monetiza rezultate — reducerea singurătății, coeziunea comunității, accesul la spații verzi — pe care tehnicile de [evaluare a bunăstării](../evaluarea-bunăstării/) le puteau anterior doar descrie, nu compara pe o bază comună cu cheltuielile de sănătate sau siguranță.

## Matematica

```
WELLBY = Δ satisfacție în viață (scala 0–10) × numărul de ani în care schimbarea persistă
        (însumat peste toate persoanele afectate)

Beneficiu de bunăstare monetizat = WELLBY generați × valoare per WELLBY (valoarea de referință HMT)

cf. QALY = Δ utilitate a stării de sănătate (scala 0–1) × ani trăiți în acea stare
```

Scala satisfacției 0–10 și scala utilității QALY 0–1 nu sunt interschimbabile fără un pas de conversie; îndrumările HM Treasury discută reconcilierea celor două astfel încât, de exemplu, o intervenție de sănătate evaluată în QALY și o intervenție socială evaluată în WELLBY să nu fie numărate dublu în tăcere sau lăsate incomparabile în cadrul aceleiași [evaluări Green Book](../evaluarea-green-book/).

## Exemplu lucrat

**Serviciu al unei autorități locale împotriva singurătății**: o schemă de prietenie deservește 400 de rezidenți vârstnici izolați. Sondajele de urmărire arată că satisfacția medie în viață crește de la 5,2 la 6,0 (un câștig de 0,8 puncte), iar efectul este estimat să persiste 2 ani înainte de a se estompa.

```
WELLBY = 400 persoane × 0,8 puncte × 2 ani = 640 WELLBY

Valoare monetizată = 640 × 13.000 £ = 8.320.000 £
```

Față de un cost anual al programului de 300.000 £ (600.000 £ în 2 ani), raportul beneficiu-cost este aproximativ 8.320.000 / 600.000 ≈ **13,9:1** — o cifră care poate sta acum în același tabel de evaluare cu costul per QALY evitat al unei scheme de sănătate sau economiile de timp de călătorie ale unei scheme de transport.

**Organizație caritabilă, scară mai mică**: un program de artă comunitar ajunge la 50 de participanți cu un câștig de satisfacție măsurat de 0,3 puncte, durând 1 an.

```
WELLBY = 50 × 0,3 × 1 = 15 WELLBY
Valoare monetizată = 15 × 13.000 £ = 195.000 £
```

## Legătura cu ingineria software

- Orice serviciu pentru cetățeni care colectează deja un item de sondaj despre satisfacția în viață sau bunăstare (multe platforme ale administrației locale și de sănătate și asistență socială o fac, urmând cele patru întrebări standard de bunăstare ale ONS) poate calcula WELLBY direct din conductele de date existente în loc să comande o evaluare economică la comandă pentru fiecare schimbare de serviciu.
- WELLBY oferă echipelor de inginerie care construiesc pentru raportarea conform [Social Value Act](../legea-valorii-sociale/) sau [rentabilității sociale a investiției](../rentabilitatea-socială-a-investiției/) un numitor standardizat național, aprobat de HM Treasury, evitând proliferarea unor „scoruri de impact” la comandă care nu pot fi comparate între contracte sau furnizori.
- Deoarece WELLBY sunt aditivi peste persoane și timp, se compun curat în tipul de urmărire a rezultatelor la nivel de populație folosit în sistemele de [responsabilitate bazată pe rezultate](../responsabilitatea-bazată-pe-rezultate/) — un tablou de bord al unui serviciu poate raporta WELLBY cumulați generați pe trimestru așa cum un sistem de sănătate raportează QALY câștigați.

## Capcane

- **Presupunerea că câștigurile autoraportate de satisfacție sunt în întregime atribuibile intervenției** — fără un contrafactual (grup de comparație sau proiectare înainte/după cu controale), nu puteți separa câștigul de WELLBY de tendințele generale; vezi [analiza contrafactuală](../analiza-contrafactuală/).
- **Amestecarea WELLBY și QALY într-un singur total fără reconciliere** — îndrumările HM Treasury sunt explicite că cei doi folosesc scale diferite și teorii de bază ale valorii diferite; însumarea lor naivă numără dublu bunăstarea suprapusă.
- **Folosirea necritică a valorii monetare de referință** — cifra £-per-WELLBY este o estimare medie națională cu benzi reale de incertitudine; îndrumările HM Treasury recomandă analiză de sensibilitate, nu tratarea ei ca un curs de schimb fix.

## Surse

- HM Treasury. „Wellbeing guidance for appraisal: supplementary Green Book guidance.” (2021) <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. „Personal well-being user guidance” (cele patru întrebări standard de bunăstare). <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. „The Green Book: Central Government Guidance on Appraisal and Evaluation.”
