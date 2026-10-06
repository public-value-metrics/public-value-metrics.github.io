# Datoria tehnică ca eroziune a valorii publice

Datoria tehnică este metafora lui Ward Cunningham din 1992 pentru costul viitor implicit al unor decizii de codare oportuniste din trecut: un **capital** (munca de remediere datorată) și o **dobândă** (frâna continuă pe care o exercită asupra livrării). Într-un patrimoniu IT guvernamental moștenit, această dobândă este plătită direct din valoarea publică — livrare mai lentă a schimbărilor legale, rate de eșec mai mari ale serviciilor destinate cetățenilor și un grup tot mai restrâns de oameni care pot atinge sistemul în siguranță.

## De ce contează

Sistemele moștenite de tip mainframe și din era COBOL din departamentele guvernului britanic — HMRC și DWP printre cele mai citate — poartă un risc bine documentat și în creștere pe care National Audit Office l-a semnalat în repetate rânduri, inclusiv în raportul său *Digital Transformation in Government* (<https://www.nao.org.uk/>): platforme îmbătrânite, scumpe de schimbat, tot mai greu de securizat și dependente de o forță de muncă specializată care se pensionează mai repede decât este înlocuită. Spre deosebire de o restanță din sectorul privat, această datorie stă direct între cetățeni și drepturile lor legale — un motor de calcul al beneficiilor care nu poate fi schimbat în siguranță este o constrângere de livrare a politicii, nu doar o inconveniență de inginerie. Repornirea din 2013 a programului IT Universal Credit, când National Audit Office a constatat că construcția originală nu ar livra valoare pentru bani și o parte substanțială a activului software a trebuit scoasă din evidență, este un exemplu canonic de datorie tehnică neprețuită care ajunge din urmă un program public activ, vizibil la nivel ministerial.

## Matematica

```
Capital SQALE = Σ pe încălcări (timp de remediere) × tarif de cost al dezvoltatorului
Raportul datoriei tehnice (TDR) = cost de remediere / cost de redezvoltare × 100
                    (note SonarQube: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Dobânda (numărul care justifică rambursarea):
  dobândă/an = Δ viteză de livrare × valoare per unitate de viteză
             + Δ rată a incidentelor vizibile cetățenilor × cost per incident
             + primă pentru competențe rare × număr de angajați afectați
Cazul rambursării = PV(dobânda evitată pe orizont) − cost de remediere
                    (actualizat la rata de actualizare socială Green Book, vezi
                    social-discount-rate.md)
```

Capitalul enunță datoria; dobânda este ceea ce face cazul investițional în fața unei comisii de conturi publice.

## Exemplu lucrat

Un motor de procesare a cererilor de 250.000 de linii scris într-un 4GL moștenit. Folosind reperul CAST Appmarq de aproximativ 3,61 $ capital de datorie tehnică per linie de cod (≈2,85 £ la o conversie tipică):

```
Capital ≈ 250.000 × 2,85 £ ≈ 712.500 £
TDR ≈ 16% (nota C)
```

Dobândă măsurată: departamentul reține trei contractori specializați la o primă de 40% peste tarifele zilnice standard ale inginerilor seniori deoarece competențele interne s-au pierdut — încă 180.000 £/an pe o echipă de șase persoane. Sistemul provoacă și patru întreruperi majore de procesare pe an, fiecare suspendând deciziile pentru circa 5.000 de solicitanți și redirecționându-i către centrul de contact la aproximativ 25 £/apel:

```
Dobândă ≈ 180.000 £ (prima pentru competențe)
        + 4 × 5.000 × 25 £ = 500.000 £ (costul contactelor redirecționate)
        ≈ 680.000 £/an
```

Remedierea țintită a celor mai slab performante module costă 1.200.000 £ și este modelată să reducă dobânda cu 70%:

```
Reducerea dobânzii = 0,70 × 680.000 = 476.000 £/an
Recuperare ≈ 1.200.000 / 476.000 ≈ 2,5 ani
```

Țintirea contează: remedierea codului rareori atins nu cumpără nimic, deoarece dobânda se concentrează acolo unde frecvența schimbărilor și densitatea datoriei ating ambele un maxim.

## Legătura cu ingineria software

Încadrarea de valoare publică ce ridică un caz de datorie tehnică dincolo de „codul este vechi”: exprimați patrimoniul moștenit ca inventar al locurilor unde este concentrată capacitatea de livrare pierdută și conectați-l explicit la [costul total de proprietate](../costul-total-de-proprietate-în-it-ul-guvernamental/), deoarece dobânda este un cost operațional care aparține liniei TCO indiferent dacă finanțele au cerut-o vreodată. Sistemele încărcate cu datorie poartă și o expunere disproporționată de [securitate cibernetică](../valoarea-securității-cibernetice-a-sectorului-public/), deoarece cadența patch-urilor și densitatea datoriei se corelează — un sistem moștenit care nu poate fi patch-uit este datorie tehnică a cărei dobândă se plătește în risc de incident, nu în lire. Iar fiecare compromis remediere-versus-funcționalitate este el însuși o decizie de [cost al întârzierii](../costul-întârzierii-în-programele-publice/): rambursarea datoriei amână următoarea schimbare legală, care are propriul CoD ce trebuie cântărit față de dobânda economisită.

## Capcane

- **Raportarea doar a capitalului**: o estimare mare, înspăimântătoare, de remediere fără cifră de dobândă nu justifică nimic în fața unui aprobator de cheltuieli.
- **Luarea literală a cifrelor de datorie generate de unelte**: scanerele în stil SQALE numără încălcări de reguli; ratează tipul scump de datorie — deciziile arhitecturale și regulile de afaceri moștenite nedocumentate — în timp ce semnalează fleacuri.
- **„Rescrierea evită tot acest lucru”**: programele de înlocuire trebuie să treacă aceeași disciplină ca orice alt caz de afaceri — cost contrafactual, probabilitate de succes și actualizare — nu o scutire de la ea, după cum a demonstrat repornirea Universal Credit din 2013.
- **Utopismul datoriei zero**: nivelul optim al datoriei nu este zero; datoria este pârghie care a cumpărat livrare mai devreme. Întrebarea vie este mereu rata dobânzii, nu dacă există datorie deloc.

## Surse

- Cunningham W, „The WyCash Portfolio Management System”, raport de experiență OOPSLA, 1992.
- CAST, estimarea datoriei tehnice (reperul Appmarq). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* și rapoarte privind Universal Credit. <https://www.nao.org.uk/>
