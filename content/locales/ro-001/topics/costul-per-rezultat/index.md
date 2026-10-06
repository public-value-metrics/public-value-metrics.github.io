# Costul per rezultat

Costul per rezultat este cheltuiala totală a programului împărțită la numărul de persoane care ating o schimbare definită, semnificativă, a circumstanțelor lor — nu la numărul celor care au primit doar un serviciu. Este cea mai ascuțită metrică de eficiență pe care o poate folosi un finanțator sau o echipă de livrare, deoarece forțează o întrebare prealabilă pe care majoritatea organizațiilor caritabile o evită: ce anume se consideră succes, mai exact?

## De ce contează

O bancă de alimente poate raporta două numere foarte diferite din conturile aceluiași an. Costul per pachet alimentar distribuit poate fi 15 £. Costul per gospodărie care ajunge apoi la securitate alimentară — nu mai are nevoie de ajutor alimentar de urgență, verificat la un punct de urmărire — poate fi 340 £. Ambele sunt adevărate. Doar unul spune finanțatorului dacă banii funcționează. Decalajul dintre ele este decalajul dintre o realizare și un rezultat: un pachet înmânat este o realizare; o gospodărie ieșită din criză este un rezultat. Vezi [rezultate versus realizări](../rezultate-versus-realizări/).

Sectorul terț britanic a petrecut două decenii construind infrastructură pentru a impune această distincție. „Abordarea celor patru piloni” a New Philanthropy Capital privind eficacitatea organizațiilor caritabile cere explicit organizațiilor să-și declare rezultatele înaintea realizărilor, iar Inspiring Impact — colaborarea britanică de măsurare a impactului susținută de finanțatori — publică o Matrice a Rezultatelor (Outcomes Matrix) pe care multe cereri de granturi le cer acum organizațiilor caritabile s-o completeze. Programul anual de cercetare „State of Hunger” al Trussell Trust, rulat cu Heriot-Watt University, există tocmai pentru că numărătorile de pachete nu spun nimic despre dacă oamenii ies din insecuritatea alimentară.

Costul per rezultat înseamnă ceva doar după ce ați fixat contrafactualul: un rezultat obținut „oricum” nu este un rezultat pe care programul l-a cumpărat. Vezi [analiza contrafactuală](../analiza-contrafactuală/) și [deplasarea și atribuirea](../deplasare-și-atribuire/).

## Matematica

```
Cost per rezultat = Costul total al programului / Numărul de beneficiari care ating rezultatul definit

unde:
  Costul total al programului = cost direct de livrare + cota corectă de regie
  Rezultat definit             = o schimbare de stare prestabilită, măsurabilă
                                 (ex. „securizat alimentar la urmărirea de la 6 luni”,
                                 nu „a primit un pachet alimentar”)
```

Comparați cu [bazele de date de costuri unitare](../baze-de-date-de-costuri-unitare/) (ex. repere de costuri unitare specifice sectorului) pentru a judeca dacă un anumit cost per rezultat este bun, mediu sau slab relativ la intervenții comparabile.

## Exemplu lucrat

**Bancă de alimente, un an**:

- Costul total al programului: 450.000 £
- Pachete distribuite: 30.000
- Cost per pachet (o metrică de realizare): 450.000 £ / 30.000 = **15 £**

Organizația efectuează și un sondaj de urmărire la șase luni pe un eșantion de gospodării, constatând că 35% dintre gospodăriile care au primit trei sau mai multe pachete raportează că nu mai au nevoie de ajutor alimentar de urgență și obțin un scor peste pragul de securitate alimentară pe un modul standard de sondaj de securitate alimentară. Din 1.800 de gospodării care au primit trei sau mai multe pachete în acel an, 630 ating acest rezultat.

```
Cost per rezultat = 450.000 £ / 630 = 714 £ per gospodărie care atinge securitatea alimentară
```

Acea cifră de 714 £ este cea pe care ar trebui s-o folosească un finanțator care compară această organizație cu un pilot de transfer de numerar sau cu un serviciu de consiliere în datorii — nu 15 £. Dacă un program comparabil de transfer de numerar din aceeași regiune obține securitate alimentară cu 500 £ per gospodărie, banca de alimente nu este în mod evident calea mai eficientă către același rezultat, chiar dacă costul ei per pachet pare ieftin.

## Legătura cu ingineria software

Majoritatea sistemelor de gestionare a cazurilor sunt construite pentru a înregistra realizări, deoarece realizările sunt ceea ce se întâmplă în interiorul tranzacției (un pachet este predat, un formular este trimis). Rezultatele au loc de obicei mai târziu, adesea în afara ferestrei normale de captare a sistemului, și cer o decizie de proiectare deliberată: construiți un mecanism de urmărire (un declanșator de sondaj, un flux de recontactare, un exercițiu de legare a datelor) ca funcționalitate de primă clasă, nu ca adaos atașat pentru un raport anual. Inginerii care construiesc platforme de gestionare a granturilor sau a cazurilor pentru sector ar trebui să trateze „care este evenimentul de rezultat și cum îl observăm” ca o întrebare de cerințe pusă înainte ca modelul de date să fie fixat — este mult mai greu să adaugi ulterior un câmp de rezultat decât un contor de realizări. Vezi [rezultate versus realizări](../rezultate-versus-realizări/) și [modelul logic](../modelul-logic/) pentru modul de structurare a acelei conversații despre cerințe și [costul per beneficiar](../costul-per-beneficiar/) pentru metrica mai rapidă, mai grosieră, la care recurg echipele când urmărirea rezultatelor nu este încă construită.

## Capcane

- **Raportarea realizărilor deghizate în rezultate.** „Persoane atinse” nu înseamnă „persoane ajutate”. Dacă metrica poate fi produsă dintr-un jurnal de sistem fără contact de urmărire, este aproape sigur o realizare.
- **Manipularea numitorului.** Îngustarea populației de rezultat la „cei care au finalizat programul” elimină tacit persoanele care au abandonat — adesea cazurile cele mai grele — și umflă rata aparentă. Declarați numitorul ca toți cei care au început, nu toți cei care au terminat.
- **Niciun contrafactual.** Numărarea oricui a atins rezultatul, inclusiv a celor care l-ar fi atins oricum, supraestimează ce a cumpărat programul. Vezi [analiza contrafactuală](../analiza-contrafactuală/).
- **Compararea între definiții incompatibile ale rezultatului.** „Securizat alimentar” măsurat printr-un modul de sondaj validat nu este comparabil cu „securizat alimentar” autoraportat într-un formular de satisfacție; un clasament al costului per rezultat este onest doar când definițiile rezultatului coincid.

## Surse

- New Philanthropy Capital (NPC), „Four Pillar Approach” privind eficacitatea organizațiilor caritabile. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix și resurse de măsurare a impactului. <https://inspiringimpact.org/>
- Trussell Trust și Heriot-Watt University, programul de cercetare „State of Hunger”. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, „Our criteria” (cost-eficacitatea ca principal criteriu pentru recomandarea organizațiilor caritabile). <https://www.givewell.org/how-we-work/our-criteria>
