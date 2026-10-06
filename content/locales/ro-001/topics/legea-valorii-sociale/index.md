# Legea valorii sociale (Social Value Act)

Public Services (Social Value) Act 2012 este o obligație legală britanică care cere autorităților publice din Anglia și Țara Galilor să ia în considerare cum ar putea ceea ce se achiziționează să îmbunătățească bunăstarea economică, socială și de mediu a zonei relevante și să ia în considerare consultarea pe această temă, înainte de a începe o procedură de achiziție pentru contracte de servicii publice. A intrat în vigoare în ianuarie 2013 ca o obligație relativ ușoară de „a ține seama”, iar în ianuarie 2021 a fost întărită substanțial de Procurement Policy Note (PPN) 06/20, care cere ca, în contractele guvernului central, valoarea socială să fie evaluată explicit — nu doar luată în considerare — cu o pondere minimă în criteriile de atribuire.

## De ce contează

Înainte de PPN 06/20, „luarea în considerare” a valorii sociale putea fi satisfăcută de un comisar care nota că se gândise la ea, fără nicio cerință ca aceasta să afecteze decizia de atribuire — o obligație ușor de îndeplinit pe hârtie și de ignorat în practică. PPN 06/20 a închis această lacună pentru achizițiile guvernului central: impune ca valoarea socială să fie punctată ca parte a evaluării ofertelor, organizată în jurul a cinci teme naționale prioritare — redresarea după COVID-19, combaterea inegalității economice, lupta împotriva schimbărilor climatice, egalitatea de șanse și bunăstarea — și măsurată frecvent folosind cadrul National TOMs (Themes, Outcomes, Measures) întreținut de Social Value Portal. Pentru un inginer software care construiește instrumente de achiziție, de gestionare a contractelor sau de susținere a ofertelor pentru sectorul public, aceasta este baza legală pe care clientul dumneavoastră este obligat să construiască, nu un plus opțional.

## Matematica

Valoarea socială este un subiect în formă de cadru; „matematica” sa este structura de punctare pe care o folosesc majoritatea autorităților:

```
Scor total ofertă = Ponderea prețului/costului + Ponderea calității + Ponderea valorii sociale

PPN 06/20 (guvern central): ponderea valorii sociale ≥ 10% din scorul total

Teme de valoare socială (PPN 06/20):
 1. Redresarea după COVID-19
 2. Combaterea inegalității economice
 3. Lupta împotriva schimbărilor climatice
 4. Egalitatea de șanse
 5. Bunăstarea
```

Ofertanții își monetizează de obicei angajamentele față de aceste teme folosind [baze de date de costuri unitare](../baze-de-date-de-costuri-unitare/), iar aceeași logică de monetizare folosită în [rentabilitatea socială a investiției](../rentabilitatea-socială-a-investiției/) se aplică: un angajament ar trebui să fie dovedit, atribuibil contractului și să nu fie numărat de două ori în raport cu alte finanțări.

## Exemplu lucrat

**Contract IT al unei autorități locale**: un contract de 2 milioane £ pe 3 ani este punctat 60% calitate, 30% preț, 10% valoare socială. Ofertantul A se angajează la 2 ucenicii, 150.000 £ de cheltuieli locale de subcontractare și 200 de ore de formare pro bono în competențe digitale pentru o școală locală, monetizate folosind proxy-uri dintr-o bază de date de costuri unitare la un total de 90.000 £ de valoare socială suplimentară. Ofertantul B se angajează la un pachet mai mic monetizat la 40.000 £. Dacă autoritatea punctează valoarea socială proporțional cu cea mai puternică ofertă, ofertantul A primește toate cele 10 puncte; ofertantul B primește 10 × (40.000 £ ÷ 90.000 £) = 4,4 puncte — o diferență de 5,6 puncte care poate decide contractul chiar și când calitatea și prețul sunt apropiate.

**Ofertant din sectorul voluntar**: o mică VCSE (organizație voluntară, comunitară și întreprindere socială) care licitează pentru un contract de întreținere a spațiilor verzi împotriva unui concurent comercial nu poate concura doar pe prețul unitar, dar folosește proxy-urile Global Value Exchange pentru a monetiza angajamentele sale existente de angajare comunitară și voluntariat, construind un caz de valoare socială dovedit care merită punctat alături de preț și calitate.

## Legătura cu ingineria software

Câștigarea unei oferte cu angajamente de valoare socială monetizate creează obligația de a dovedi livrarea lor prin gestionarea contractului — instrumente care înregistrează începuturile de ucenicii, cheltuielile locale și orele de formare în raport cu angajamentele specifice punctate la licitație, alimentând ședințele de revizuire a contractului în loc să fie uitate odată ce contractul este semnat. Listările G-Cloud și Digital Marketplace cer tot mai des declarații de valoare socială la momentul listării. Vezi [rentabilitatea socială a investiției](../rentabilitatea-socială-a-investiției/) pentru metoda de evaluare din spatele angajamentelor, [bazele de date de costuri unitare](../baze-de-date-de-costuri-unitare/) pentru proxy-urile din care se inspiră ofertanții și [rezultate versus realizări](../rezultate-versus-realizări/) pentru a ne asigura că angajamentele livrate sunt rezultate, nu doar numărători de activități.

## Capcane

- **Oferte cu spălare socială.** Angajamente vagi („sprijinim comunitatea locală”) care nu pot fi măsurate sau respectate în gestionarea contractului obțin scoruri bune, dar nu livrează nimic verificabil.
- **Tratarea valorii sociale ca departajare.** PPN 06/20 cere ca valoarea socială să fie evaluată explicit în cadrul criteriilor de atribuire, nu folosită informal pentru a departaja oferte altfel egale.
- **Fără urmărire în gestionarea contractului.** Angajamentele punctate la licitație nu sunt adesea niciodată urmărite în timpul livrării — vezi [realizarea beneficiilor](../realizarea-beneficiilor/).
- **Cadre de măsurare inconsistente între contracte.** Folosirea unor surse de proxy diferite pentru angajamente similare în contracte diferite face lipsită de sens comparația la nivel de portofoliu, motiv pentru care există cadre comune precum National TOMs și baze de date de costuri unitare partajate.

## Surse

- Public Services (Social Value) Act 2012. <https://www.legislation.gov.uk/ukpga/2012/3/contents>
- Cabinet Office, Procurement Policy Note 06/20, „Taking Account of Social Value in the Award of Central Government Contracts.” <https://www.gov.uk/government/publications/procurement-policy-note-0620-taking-account-of-social-value-in-the-award-of-central-government-contracts>
- Social Value Portal, National TOMs Framework. <https://socialvalueportal.com/national-toms/>
