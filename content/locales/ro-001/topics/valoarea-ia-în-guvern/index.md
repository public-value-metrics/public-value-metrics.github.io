# Valoarea IA în guvern

Valoarea IA în guvern este cerința ca un sistem de IA folosit într-un serviciu public să treacă aceeași ștachetă de valoare pentru bani și valoare publică ca orice altă decizie de cheltuire — nu una mai joasă pentru că este nou și nu una mai înaltă pentru că este temut. Este întrebarea la care o echipă de livrare trebuie să poată răspunde înainte, nu după lansarea unei funcționalități de IA: produce aceasta mai multă valoare decât costă, odată ce asigurarea, supravegherea și riscul sunt evaluate onest?

## De ce contează

Central Digital and Data Office (CDDO) din Regatul Unit a publicat în 2024 Generative AI Framework for Government, pe baza îndrumărilor interimare anterioare din iunie 2023, și l-a structurat în jurul a zece principii care acoperă ce este IA generativă, implicațiile ei etice, securitatea uneltelor, controalele de asigurare a calității, gestionarea întregului ciclu de viață al IA generative, identificarea cazurilor de utilizare autentice, colaborarea interguvernamentală, transparența, competențele și guvernanța. Insistența cadrului asupra „controlului uman semnificativ” și gestionării întregului ciclu de viață există deoarece cazurile de afaceri ale proiectelor de IA au un mod specific de eșec pe care alte cheltuieli IT nu-l au: cifra de productivitate de titlu a unui pilot este ușor de produs și ușor de exagerat, deoarece este măsurată înainte de a fi luată în calcul povara de verificare, corectare și supraveghere pe care o creează instrumentul. Alături de cadru, Algorithmic Transparency Recording Standard (ATRS) cere organismelor publice să publice o înregistrare standardizată — scop, date folosite, performanță, testare de echitate, aranjamente de supraveghere umană — pentru uneltele algoritmice care au o influență semnificativă asupra deciziilor privind persoane, ceea ce face ca costul de asigurare al unui sistem de IA să fie un fapt de evidență publică, nu o estimare internă pe care o echipă o poate sări discret.

## Matematica

Adoptarea IA este evaluată ca adaos la, nu înlocuitor al, evaluării standard a [valorii pentru bani](../valoarea-pentru-bani/), cu termenii specifici IA făcuți explicit în loc să fie îngropați într-un singur număr de „câștig de productivitate”:

```
Valoarea netă a unui sistem de IA =
    câștig de productivitate (timp economisit × cost de personal încărcat)
  − cost de licență/calcul
  − cost de verificare și supraveghere umană (verificarea ieșirii IA înainte de a se
    acționa pe baza ei — nu se reduce la zero nici pentru unelte mature)
  − cost de documentare ATRS și monitorizare continuă
  − costul ajustat la risc al prejudiciului din erori, părtinire sau halucinații,
    ponderat după cine suportă acel prejudiciu (ponderare distributivă)

O cifră de productivitate a unui pilot care omite termenul de supraveghere nu este
comparabilă cu o linie de bază de cost a activității curente care include deja
o revizuire umană echivalentă — vezi ai-productivity-in-the-public-sector
pentru disciplina mai completă de măsurare a productivității din care se împrumută.
```

## Exemplu lucrat

**Autoritate locală care folosește un instrument de IA generativă pentru a redacta primele răspunsuri la întrebări de rutină despre impozitul local**: 25.000 de întrebări/an, anterior tratate integral de lucrători în medie în 14 minute/întrebare, cost de personal încărcat 34 £/oră.

```
Costul de bază (fără IA):
  25.000 × (14/60) × 34 £ = 198.333 £/an

Afirmația de titlu a pilotului: IA redactează un răspuns în 90 de secunde,
lucrătorul „doar verifică și trimite” — timp nou declarat 3 minute
  25.000 × (3/60) × 34 £ = 42.500 £/an
  → economie declarată 155.833 £/an (pare transformațională)

Cifra complet încărcată, măsurată după 3 luni de funcționare reală, nu pe
cazurile de test alese de mână ale pilotului:
  Timp real de verificare + corectare per răspuns: 6 minute (ciornele
  cer editare reală pentru întrebări complexe sau sensibile emoțional)
  25.000 × (6/60) × 34 £ = 85.000 £/an
  Cost de licență/calcul: 38.000 £/an
  Documentare ATRS și monitorizare trimestrială a părtinirii/calității: 14.000 £/an
  Cost total = 85.000 + 38.000 + 14.000 = 137.000 £/an

Economie reală = 198.333 − 137.000 = 61.333 £/an — autentică și merită păstrată,
dar mult sub jumătate din afirmația de titlu a pilotului, și a fost nevoie
de o măsurare onestă a timpului de supraveghere, nu de cea mai bună variantă
a pilotului, pentru a o găsi.
```

## Legătura cu ingineria software

Aici se întâlnesc [productivitatea IA în sectorul public](../productivitatea-ia-în-sectorul-public/) și acest subiect: echipele de inginerie care construiesc funcționalități de IA în serviciile publice dețin instrumentarea care face posibilă cifra „reală” din exemplul lucrat — jurnalizarea timpului real de verificare, a distanței de editare între ciornă și răspunsul trimis și a ratei de escaladare, în loc să se încreadă în condițiile demonstrative ale pilotului. Funcționalitățile de IA ar trebui evaluate față de punctul 9 din [standardul serviciilor digitale](../standardul-serviciilor-digitale/) (serviciu sigur, confidențialitatea utilizatorilor) și referite încrucișat cu [valoarea securității cibernetice a sectorului public](../valoarea-securității-cibernetice-a-sectorului-public/) acolo unde instrumentul atinge date ale cetățenilor, iar orice sistem de IA cu influență semnificativă asupra deciziilor privind persoane are nevoie de o înregistrare ATRS înainte de a putea fi considerat pregătit pentru evaluare, la fel cum un serviciu are nevoie de o evaluare trecută a [standardului serviciilor digitale](../standardul-serviciilor-digitale/) înainte de a intra în funcțiune.

## Capcane

- **Spălarea cu IA (AI-washing)**: reetichetarea automatizării existente bazate pe reguli ca „IA” pentru a accesa finanțare sau atenție rezervate adoptării IA, fără riscurile de acuratețe sau părtinire care justifică de fapt controlul suplimentar al cadrului.
- **Măsurarea productivității pilotului, nu a productivității în producție**: pilotele rulează pe cazuri de test curate, cu recenzenți angajați, atenți; producția rulează pe întregul amestec dezordonat de cazuri, cu recenzenți care, în timp, dezvoltă părtinire de automatizare și verifică insuficient ieșirile — ambele distorsionează cifra onestă a costului de supraveghere.
- **Omiterea înregistrării ATRS pentru că instrumentul „nu este de fapt luare automată a deciziilor”**: pragul standardului este influența semnificativă asupra unei decizii privind o persoană, pe care o îndeplinesc majoritatea uneltelor de IA pentru redactare sau triere orientate spre cetățeni, chiar și când un om semnează formal.
- **Ignorarea impactului distributiv al erorilor**: rata de eroare a unui sistem de IA mediată peste toți utilizatorii poate ascunde o rată de eroare sau de părtinire mult mai mare pentru grupuri specifice; [ponderarea distributivă](../ponderarea-distributivă/) ar trebui aplicată termenului de prejudiciu ajustat la risc, nu doar cifrei agregate de acuratețe.

## Surse

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
