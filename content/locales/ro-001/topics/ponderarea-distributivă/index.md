# Ponderarea distributivă

Ponderarea distributivă ajustează valoarea monetară a unui cost sau beneficiu în funcție de cine îl primește, pe principiul că o liră în plus valorează mai mult pentru o gospodărie săracă decât pentru una bogată. Green Book al HM Treasury oferă o metodă explicită de aplicare a acestei ponderări, construită pe utilitatea marginală descrescătoare a venitului, astfel încât evaluările să nu trateze în tăcere o liră câștigată de decila cea mai bogată ca având aceeași valoare cu o liră câștigată de cea mai săracă.

## De ce contează

Analiza cost-beneficiu standard adună lire fără a întreba ale cui sunt, ceea ce presupune implicit că o liră valorează la fel pentru toată lumea — o presupunere despre care economiștii știu de mult că este falsă. O gospodărie cu venit de 15.000 £/an trăiește un câștig de 1.000 £ foarte diferit față de o gospodărie cu venit de 150.000 £/an, deoarece utilitatea marginală a venitului scade pe măsură ce venitul crește. Lăsată neponderată, evaluarea standard favorizează sistematic intervențiile care avantajează grupuri mai bogate, deja mai bine situate, deoarece puterea lor de cumpărare mai mare umflă evaluarea monetară a beneficiilor care le ajung (o modernizare a unui parc lângă locuințe scumpe „arată” un beneficiu mai mare în valoarea proprietăților decât aceeași modernizare lângă locuințe ieftine, pur și simplu pentru că prețurile sunt mai mari, nu pentru că ar fi mai mare câștigul de bunăstare).

Îndrumările suplimentare ale Green Book privind analiza distributivă, întărite după ce revizuirea Trezoreriei din 2020 a răspuns criticilor că metodologia de evaluare a favorizat sistematic Londra și sud-estul, stabilesc o abordare formală de ponderare bazată pe o elasticitate presupusă a utilității marginale a venitului de aproximativ 1,3 — adică dublarea venitului reduce aproximativ la jumătate (mai exact, de 2^-1,3 ≈ 0,41 ori) valoarea marginală a unei lire suplimentare. Nu este o ajustare de rotunjire: aplicarea ei poate schimba care dintre două programe concurente arată valoarea actualizată netă mai mare, în special la compararea unei intervenții concentrate într-o zonă defavorizată cu una răspândită în populația generală.

## Matematica

Ponderea distributivă a Green Book pentru o liră de beneficiu ce revine unei gospodării cu nivel de venit y, relativ la o liră la nivelul venitului mediu național ȳ:

```
Pondere(y) = (ȳ / y)^e

unde:
  y  = venitul gospodăriei (sau venitul grupului afectat)
  ȳ  = venitul mediu (de referință) al gospodăriei
  e  = elasticitatea utilității marginale a venitului (Green Book: aproximativ 1,3)
```

Aplicarea ponderilor la beneficiile nete:

```
Beneficiu ponderat = Σ [beneficiu neponderat pentru grupul i × Pondere(y_i)]
```

Un grup cu jumătate din venitul mediu național (y = 0,5ȳ) primește o pondere de (1/0,5)^1,3 = 2^1,3 ≈ 2,46 — fiecare liră de beneficiu pentru acel grup valorează aproximativ 2,46 lire pentru o gospodărie cu venit mediu.

## Exemplu lucrat

**Două programe locale concurente**, fiecare cu un beneficiu net neponderat de 2 milioane £/an, care concurează pentru același fond regional de creștere:

- *Programul A*: o schemă de sprijin pentru afaceri într-un oraș prosper, venit mediu al gospodăriei 45.000 £ (aproximativ 1,3× media națională presupusă de 35.000 £).
- *Programul B*: un program de calificare într-un cartier defavorizat, venit mediu al gospodăriei 18.000 £ (aproximativ 0,51× media națională).

```
Pondere(A) = (35.000 / 45.000)^1,3 = (0,778)^1,3 ≈ 0,72
Pondere(B) = (35.000 / 18.000)^1,3 = (1,944)^1,3 ≈ 2,53

Beneficiu ponderat A = 2.000.000 £ × 0,72 = 1,44 milioane £
Beneficiu ponderat B = 2.000.000 £ × 2,53 = 5,06 milioane £
```

Neponderate, cele două programe sunt la egalitate. Ponderate pentru impactul distributiv, beneficiul Programului B este de peste trei ori mai mare — un rezultat care inversează recomandarea de finanțare și reflectă scopul explicit al Green Book de a cere ca ponderarea să fie arătată, nu doar raportul neponderat beneficiu-cost.

**Alocarea grantului unei organizații caritabile**: un finanțator care compară un grant de 500.000 £ ce ajunge la 1.000 de gospodării cu venituri mici (pondere ≈ 2,0, valoare ponderată echivalentă cu 1 milion £) cu aceiași 500.000 £ ajungând la 1.000 de gospodării cu venituri medii (pondere ≈ 1,0, valoare ponderată echivalentă cu 500.000 £) ar trebui să arate explicit argumentul distributiv în documentul său pentru consiliu, nu să-l lase de dedus.

## Legătura cu ingineria software

Ponderarea distributivă apare rar direct în metricile de livrare software, dar ar trebui să modeleze felul în care echipele de inginerie și de date proiectează măsurarea și țintirea:

- Când construiți un tablou de bord de impact sau un calculator de beneficii, expuneți profilul de venit sau de deprivare al celor afectați, nu doar un total agregat de beneficiu — cifrele agregate fără defalcare distributivă ascund exact inversarea arătată mai sus.
- Legați logica de țintire din proiectarea serviciilor de aceleași date de deprivare pe care le folosește Green Book — vezi [Indicele de deprivare multiplă](../indicele-deprivării-multiple/) — astfel încât acoperirea unui serviciu digital să poată fi evaluată din punct de vedere al echității, nu doar al eficienței (al patrulea E contestat din [valoarea pentru bani](../valoarea-pentru-bani/)).
- Când un algoritm alocă o resursă rară (intervale de programare, timp de lucrător social, o subvenție), o funcție obiectiv neponderată „maximizează beneficiul total” va reproduce, prin construcție, aceeași părtinire pe care ponderarea Green Book există ca s-o corecteze — semnalați aceasta explicit proprietarilor politicii înainte de optimizare.

## Capcane

- **Aplicarea inconsistentă a ponderilor distributive în cadrul unui portofoliu.** Ponderarea beneficiilor unui program dar nu și ale comparatorului său produce o comparație părtinitoare, nu mai echitabilă; Green Book cere tratament de la egal la egal.
- **Folosirea valorilor imobiliare sau de piață ca înlocuitor al bunăstării fără ajustare.** Prețurile de piață sunt ele însele distorsionate de inegalitatea de venit existentă, exact ceea ce ponderarea distributivă este menită să corecteze — folosirea valorilor de piață neajustate poate număra de două ori părtinirea.
- **Ignorarea variației în interiorul grupurilor.** Ponderarea după venitul mediu al zonei (ex. o decilă a Indicelui de deprivare multiplă) poate denatura situația indivizilor care nu corespund mediei zonei lor; folosiți cele mai fine date de venit disponibile în mod rezonabil.
- **Tratarea elasticității de 1,3 ca o constantă universală.** Green Book însuși notează că este o estimare cu un interval plauzibil; testați sensibilitatea deciziilor majore la elasticități alternative în loc să tratați 1,3 ca exact.

## Surse

- HM Treasury, „The Green Book: Central Government Guidance on Appraisal and Evaluation” și îndrumările suplimentare privind impacturile distributive (ediția 2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, „Green Book Review 2020: Findings and Response” (abordând critica părtinirii regionale). <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. „Valuation Techniques for Social Cost-Benefit Analysis.” HM Treasury/DWP, 2011 (context pentru estimările elasticității utilității marginale a venitului).
