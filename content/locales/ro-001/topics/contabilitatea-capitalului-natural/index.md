# Contabilitatea capitalului natural

Contabilitatea capitalului natural pune mediul pe același plan cu orice alt activ național sau organizațional: măsoară stocul de resurse naturale (păduri, soluri, râuri, zone umede, atmosfera) și fluxul de servicii pe care le produc (sechestrarea carbonului, protecția împotriva inundațiilor, recreere, hrană), atât în termeni fizici, cât și monetari, astfel încât epuizarea mediului să apară în luarea deciziilor așa cum ar apărea consumarea capitalului financiar. Regatul Unit este unul dintre cele mai avansate guverne în a face aceasta sistematic, condus de Planul de 25 de ani pentru mediu (2018) și implementat prin conturile de capital natural ale ONS din Regatul Unit și îndrumările suplimentare Green Book ale HM Treasury.

## De ce contează

Contabilitatea convențională — corporativă și guvernamentală deopotrivă — tratează o pădure ca fără valoare până când este tăiată și vândută ca lemn, moment în care devine PIB. Contabilitatea capitalului natural există pentru a închide această lacună: Planul de 25 de ani pentru mediu al Regatului Unit a angajat guvernul să încorporeze gândirea capitalului natural în toate politicile, enunțând explicit ambiția de a fi „prima generație care lasă mediul într-o stare mai bună decât l-am găsit”. ONS publică de atunci conturi anuale de capital natural ale Regatului Unit (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>) care estimează valoarea monetară a serviciilor ecosistemice — de la recreerea în pădure la beneficiile pentru sănătate ale spațiilor verzi urbane și stocarea carbonului în turbării — folosind același cadru al Conturilor Naționale folosit pentru capitalul produs, astfel încât capitalul natural să poată sta în cele din urmă în același bilanț cu drumurile, clădirile și echipamentele. Îndrumările HM Treasury Enabling a Natural Capital Approach (ENCA), suplimentare la Green Book (<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>), stabilesc cum ar trebui evaluatorii să evalueze costurile și beneficiile de mediu în cazurile de afaceri, astfel încât o schemă rutieră care distruge o pădure seculară sau o schemă anti-inundații care restaurează o zonă umedă să poată fi comparate în termeni monetari consecvenți, în loc ca una să aibă un număr și cealaltă un paragraf de rezerve.

## Matematica

```
Valoarea activului de servicii ecosistemice = VAN a fluxului de servicii pe care le oferă activul

Valoarea activului = Σ (t = 1 la T) [valoarea fluxului anual de servicii_t / (1 + r)^t]

unde:
  valoarea fluxului de servicii_t = cantitatea de serviciu în anul t × valoare unitară
                          (ex. vizite recreaționale × valoare per vizită;
                           tone de carbon sechestrat × preț al carbonului)
  r = rata de actualizare (rata de actualizare socială Green Book — vezi
      [rata de actualizare socială](../rata-de-actualizare-socială/))
  T = orizontul de timp pe care activul este așteptat să furnizeze serviciul
```

Aceasta este structura identică a valorii actualizate nete folosită pentru a evalua capitalul produs sau a evalua orice investiție publică conform [evaluării Green Book](../evaluarea-green-book/) — contribuția contabilității capitalului natural este furnizarea de cantități fizice credibile și valori unitare pentru servicii care erau anterior prețuite la zero.

## Exemplu lucrat

**Pădure urbană, valoare recreațională**: o pădure de 50 de hectare primește estimat 80.000 de vizite recreaționale pe an, fiecare evaluată (prin metoda costului de călătorie sau a preferințelor declarate — vezi [evaluarea prin preferințe relevate](../evaluarea-prin-preferințe-relevate/) și [evaluarea prin preferințe declarate](../evaluarea-prin-preferințe-declarate/)) la 3 £ per vizită. Pădurea este așteptată să continue să furnizeze acest serviciu 50 de ani, evaluată la o rată de actualizare de 3,5%.

```
Valoare recreațională anuală = 80.000 × 3 £ = 240.000 £/an

VAN pe 50 de ani la 3,5% ≈ 240.000 £ × factor de anuitate(3,5%, 50 de ani)
factor de anuitate(3,5%, 50) ≈ 21,4

Valoarea activului ≈ 240.000 £ × 21,4 ≈ 5.136.000 £
```

**Adăugarea stocării carbonului**: aceeași pădure sechestrează estimat 400 de tone de CO2 pe an, evaluate la prețul guvernamental al carbonului netranzacționat de aproximativ 75 £/tonă (ilustrativ — folosiți valorile carbonului publicate curent de BEIS/DESNZ pentru o evaluare reală).

```
Valoare anuală a carbonului = 400 × 75 £ = 30.000 £/an
VAN pe 50 de ani la 3,5% ≈ 30.000 £ × 21,4 ≈ 642.000 £

Valoarea totală a activului pădure (recreere + carbon) ≈ 5.136.000 £ + 642.000 £
                                                       ≈ 5.778.000 £
```

Aceasta este înainte de a adăuga reținerea apelor de inundație, biodiversitatea sau serviciile de calitate a aerului pe care îndrumările ENCA cer și ele evaluatorilor să le ia în considerare — totalul este deliberat o limită inferioară, nu una superioară.

## Legătura cu ingineria software

- Sistemele de gestionare a mediului și a activelor pentru autoritățile locale și agenții (parcuri, șosele, corpuri de apă) pot atașa un registru de capital natural alături de registrul activelor fizice, folosind același tipar flux-de-servicii-înmulțit-cu-valoare-unitară ca orice altă [bază de date de costuri unitare](../baze-de-date-de-costuri-unitare/) pe care o întreține organizația.
- Deoarece VAN a capitalului natural este sensibilă la rata de actualizare (vezi factorul de anuitate din exemplul lucrat), orice instrument care o calculează ar trebui să expună rata și orizontul ca inputuri vizibile, nu să le îngroape — același principiu de transparență tratat în [echitatea intergenerațională și actualizarea pentru sustenabilitate](../echitatea-intergenerațională-și-actualizarea-pentru-sustenabilitate/).
- Conturile de capital natural sunt tot mai des un input obligatoriu în secțiunile de impact asupra mediului ale unui caz de afaceri [evaluare Green Book](../evaluarea-green-book/); o echipă de livrare care construiește instrumente pentru cazuri de afaceri ar trebui să trateze conturile ONS și valorile unitare ENCA ca date de referință de integrat, nu ca ceva ce evaluatorii recalculează de la zero de fiecare dată.

## Capcane

- **Numărarea dublă a serviciilor ecosistemice suprapuse** — valoarea recreațională și valoarea biodiversității aceluiași sit pot împărți date de bază de disponibilitate de a plăti; îndrumările ENCA avertizează explicit împotriva însumării evaluărilor derivate din instrumente de sondaj suprapuse.
- **Tratarea valorii unui activ de capital natural ca statică** — fluxurile de servicii se schimbă cu clima, gestionarea și presiunea utilizării terenurilor; valoarea carbonului și a reținerii inundațiilor unei păduri în acest deceniu nu este o proprietate permanentă a sitului.
- **Folosirea valorilor unitare medii naționale pentru o decizie foarte locală** — un hectar de pădure urbană accesibilă și un hectar de zonă montană îndepărtată au o valoare recreațională foarte diferită; îndrumările ENCA recomandă valori locale sau specifice sitului acolo unde sunt disponibile, în loc să se recurgă implicit la medii naționale.

## Surse

- ONS. „UK natural capital accounts.” <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. „A Green Future: Our 25 Year Plan to Improve the Environment.” (2018)
- HM Treasury / Defra. „Enabling a Natural Capital Approach (ENCA): guidance.” <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
