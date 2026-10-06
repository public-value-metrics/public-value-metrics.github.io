# Costul per beneficiar

Costul per beneficiar este costul total al programului împărțit la numărul de persoane unice care au primit un serviciu — oricine a fost atins, indiferent dacă circumstanțele sale s-au schimbat efectiv. Este cel mai rapid număr de eficiență pe care îl poate produce o organizație, deoarece „cui am servit” este aproape întotdeauna deja în sistemul de gestionare a cazurilor, în timp ce „cine a fost ajutat” de obicei nu este.

## De ce contează

Finanțatorii cer costul per beneficiar în permanență, din motive apărabile: este disponibil imediat, este comparabil într-un portofoliu de programe foarte diferite și este onest despre acoperire într-un mod în care afirmațiile despre rezultate — mai lungi de verificat și mai ușor de exagerat — nu sunt. Charities SORP (Statement of Recommended Practice) din Regatul Unit, care guvernează modul în care organizațiile caritabile raportează conform FRS 102, cere ca rapoartele anuale ale administratorilor să descrie realizările față de obiective, dar majoritatea conturilor de gestiune ale organizațiilor caritabile mai mici revin încă la costuri unitare bazate pe acoperire, deoarece sunt ieftin de produs și prietenoase cu auditul.

Pericolul este tratarea costului per beneficiar ca și cum ar răspunde la întrebarea la care nu poate răspunde: dacă banii au funcționat. Vezi [costul per rezultat](../costul-per-rezultat/) pentru metrica ce răspunde de fapt la aceasta și [rezultate versus realizări](../rezultate-versus-realizări/) pentru distincția de bază. Costul per beneficiar este o metrică legitimă de triere și acoperire — spune unui finanțator cât de departe se întind banii — dar un cost scăzut per beneficiar poate însemna fie eficiență autentică, fie un serviciu atât de subțire încât nu schimbă nimic.

## Matematica

```
Cost per beneficiar = Costul total al programului / Numărul de persoane unice servite

Contrast:
Cost per rezultat    = Costul total al programului / Numărul de persoane care ating rezultatul definit

Costul per beneficiar este întotdeauna ≤ costul per rezultat, deoarece populația rezultatului este o submulțime
(adesea mică) a populației de beneficiari.
```

## Exemplu lucrat

**Bancă de alimente, același an ca în exemplul costului per rezultat**:

- Costul total al programului: 450.000 £
- Gospodării unice servite (trei sau mai multe pachete): 1.800

```
Cost per beneficiar = 450.000 £ / 1.800 = 250 £ per gospodărie servită
```

Comparați cele două metrici una lângă alta:

| Metrică | Numitor | Rezultat |
|---|---|---|
| Cost per beneficiar | 1.800 de gospodării servite | 250 £ |
| Cost per rezultat | 630 de gospodării care ating securitatea alimentară | 714 £ |

Un finanțator care vede doar 250 £ ar putea concluziona că aceasta este o organizație caritabilă foarte eficientă. Un finanțator care vede ambele cifre poate pune întrebarea mai utilă: este decalajul dintre acoperire (1.800) și rezultat (630) un decalaj de colectare a datelor, un decalaj de proiectare sau o reflectare onestă a cât de greu este să atingi securitatea alimentară doar prin ajutor alimentar?

**Organizație caritabilă de formare profesională, ilustrativ**: cost per beneficiar (înscris) = 2.000 £; cost per rezultat (angajare susținută la 6 luni) = 11.000 £, deoarece doar 18% dintre cei înscriși finalizează programul și găsesc muncă stabilă. Divergența celor două numere de un factor de cinci este frecventă oriunde ratele de finalizare sau durabilitate sunt scăzute — o organizație de formare și o bancă de alimente sunt structural identice aici.

## Legătura cu ingineria software

Costul per beneficiar este metrica implicită în software-ul pentru organizații non-profit, deoarece este metrica care rezultă dintr-o înregistrare de beneficiar fără nicio muncă suplimentară: creați un caz, înregistrați un serviciu, numărați rândurile. Construirea unui sistem care suportă și costul per rezultat înseamnă adăugarea deliberată a unei a doua entități de primă clasă — un eveniment de rezultat, datat și definit independent de livrarea serviciului — și rezistarea tentației de a lăsa „caz închis” să țină locul lui „rezultat obținut”. Când delimitați o platformă de gestionare a granturilor sau un CRM, întrebați care dintre cele două metrici o arată de fapt fiecare tablou de bord și etichetați în consecință; confundarea lor într-o singură dală de „impact” este una dintre cele mai frecvente cauze, la nivel de software, ale capcanelor de mai jos. Vezi [bazele de date de costuri unitare](../baze-de-date-de-costuri-unitare/) pentru compararea oricărei metrici odată etichetată corect.

## Capcane

- **Prezentarea costului per beneficiar ca impact.** Măsoară acoperirea, nu schimbarea. Etichetați tablourile de bord și rapoartele „cost per persoană servită”, nu „cost per persoană ajutată”.
- **Numărare dublă între programe.** O persoană care primește atât pachete alimentare, cât și consiliere în datorii de la aceeași organizație caritabilă este un singur beneficiar, nu doi, dacă numitorul trebuie să descrie acoperirea unică; decideți și documentați ce convenție se folosește.
- **Tratarea unui număr mai mic ca întotdeauna mai bun.** Un club de prânz fără programare va bate întotdeauna un serviciu intensiv de gestionare a cazurilor la costul per beneficiar, deoarece costă mai puțin să atingi pe cineva ușor. Aceasta nu spune nimic despre care produce o schimbare mai durabilă pe liră.
- **Schimbarea tacită a numitorilor între rapoarte.** O cifră a costului per beneficiar citată într-un raport anual față de „înscriși” și în următorul față de „finalizat” nu este comparabilă de la an la an; declarați numitorul de fiecare dată.

## Surse

- Charity Commission for England and Wales, îndrumări privind raportarea organizațiilor caritabile. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), „Four Pillar Approach.” <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
