# Economii din mutarea canalelor

Economiile din mutarea canalelor sunt reducerea proiectată a costurilor prin mutarea volumului de tranzacții din canale scumpe — telefon, ghișee față în față, poștă pe hârtie — în autoservire digitală ieftină. Este motorul financiar al „digital în mod implicit” și, totodată, linia din cazul de afaceri cel mai probabil să fie greșită, deoarece ipoteza pe care se sprijină — că canalele offline se micșorează pe măsură ce adoptarea digitală crește — este adevărată doar uneori.

## De ce contează

Aritmetica pare incontestabilă folosind cifrele de [cost per tranzacție](../costul-per-tranzacție/) din Digital Efficiency Report: mutați un milion de tranzacții de la o vizită față în față de 8,62 £ la una digitală de 0,15 £ și economia depășește 8 milioane. Dar o economie devine numerar eliberat pentru redistribuire doar dacă *capacitatea fixă* a canalului în scădere este efectiv scoasă din funcțiune — locurile din centrul de apel, personalul de la ghișee, minutele din contractul telefonic — iar programele digitale ale administrației locale au constatat în repetate rânduri că volumul total de contacte nu scade în pas cu adoptarea digitală. Cercetări din programele de transformare digitală ale autorităților locale și organisme precum Socitm și Local Government Association au documentat un tipar recurent: canalele digitale atrag contact cu adevărat nou (cetățeni care n-ar fi telefonat sau vizitat acum o fac, pentru că este mai ușor), iar o parte semnificativă dintre tranzacțiile „digitale” eșuează pe parcurs și generează oricum un apel telefonic — astfel încât volumul telefonic scade cu mult mai puțin decât ar sugera procentul adoptării digitale, uneori nescăzând deloc în termeni absoluți chiar dacă *ponderea* sa în contactul total scade.

## Matematica

```
Economie brută din mutarea canalului = volum mutat × (cost_canal_vechi − cost_digital)

Economie netă (realizată) = economie brută
                       − cerere nouă/din umbră creată de canalul mai ușor
                       − costul cererii generate de eșec (eșecuri digitale care
                         tot generează un apel telefonic sau o vizită la ghișeu)
                       − costul capacității fixe neretrase (un centru de apel
                         poate reduce personal doar în unități discrete;
                         o scădere de volum de 15% rareori permite tăierea a 15%
                         din efectiv)

Pragul de realizare: economiile pot fi bugetate doar odată ce volumul scade
sub nivelul pe care canalul vechi îl poate asigura cu personal la următorul
pas discret de capacitate mai mic (ex. pierderea unei ture întregi,
a unui birou întreg, a unei benzi de efectiv contractate)
```

## Exemplu lucrat

**Serviciu de reînnoire a cardului albastru (parcare pentru persoane cu dizabilități) al unui consiliu de comitat**: 60.000 de reînnoiri/an, anterior 100% telefon/hârtie la 6,40 £ per tranzacție. Un nou serviciu digital se lansează și atinge 65% adoptare digitală într-un an, la 0,30 £ per tranzacție digitală.

```
Calcul naiv (brut) al economiei:
  39.000 mutate × (6,40 £ − 0,30 £) = 237.900 £/an

Ce s-a întâmplat de fapt, conform datelor centrului de contact al consiliului:
  Volumul telefonic a scăzut de la 60.000/an la 46.000/an (−23%, nu −65%)
  pentru că: 9.000 de parcursuri digitale au eșuat și au generat un apel
             de urmărire (scurgere de cerere generată de eșec), iar 4.000 de persoane
             care anterior nu reînnoiau deloc o fac acum, găsind că este ușor online
             (cerere din umbră — o îmbunătățire reală a accesului, dar nu o economie)

  Centrul de apel telefonic este încadrat în benzi de 8.000 de apeluri/FTE;
  o scădere de 14.000 de apeluri (60.000 → 46.000) eliberează 1,75 FTE,
  în practică rotunjit în jos la 1 FTE efectiv redistribuit = 34.000 £/an

Economie realizată = 34.000 £/an plus costul de construire/rulare a canalului digital evitat
  pe 39.000 de tranzacții ≈ 34.000 £ + (39.000 × 0,30 £ cost
  digital deja numărat) — o fracțiune din cele 237.900 £ de titlu,
  deși serviciul este în continuare fără echivoc mai bun pentru utilizatori.
```

## Legătura cu ingineria software

Lecția de inginerie este că economiile din mutarea canalelor se realizează prin decizii *operaționale* (planificarea turelor, scoaterea din funcțiune, renegocierea contractelor), nu prin livrarea software-ului — o echipă poate atinge fiecare punct din [standardul serviciilor digitale](../standardul-serviciilor-digitale/) și totuși să nu livreze nicio economie netă dacă nimeni nu retrage capacitatea fixă a canalului vechi. Instrumentarea cererii generate de eșec (unde în parcursul digital abandonează utilizatorii și ce fac apoi) este o problemă rezolvabilă de analiză a pâlniei și cel mai valoros lucru pe care îl poate face o echipă de inginerie pentru a proteja cazul economiilor; este și legătura directă cu [costul per tranzacție](../costul-per-tranzacție/), pe care cererea generată de eșec îl umflă pe tăcute. Vezi [realizarea beneficiilor](../realizarea-beneficiilor/) pentru disciplina mai largă de verificare că economiile unui caz de afaceri chiar se materializează și [incluziunea digitală](../incluziunea-digitală/) pentru motivul pentru care canalul offline de obicei nu poate, și nu ar trebui, să fie retras complet.

## Capcane

- **Presupunerea substituției de canal 1:1**: modelarea adoptării digitale ca o scădere directă din volumul telefonic/de ghișeu, ignorând cererea din umbră și scurgerea cererii generate de eșec documentate în cercetarea mutării canalelor din administrația locală.
- **Înregistrarea economiilor brute înainte de scoaterea din funcțiune**: numărarea economiei în cazul de afaceri în anul în care adoptarea crește, nu în anul (dacă vreodată) în care capacitatea canalului vechi este efectiv tăiată.
- **Ignorarea naturii în trepte a costurilor de personal**: o scădere de volum de 20% rareori se convertește într-o scădere de cost de 20%, deoarece centrele de contact și ghișeele sunt încadrate în benzi discrete, nu continuu.
- **Tratarea cererii din umbră ca risipă**: contactul nou din partea utilizatorilor anterior excluși sau descurajați este o creștere reală a [valorii publice](../valoarea-publică/), nu o eroare de modelare — ar trebui raportat ca rezultat de acces, nu scăzut ca zgomot.

## Surse

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, resurse despre transformare digitală și mutarea canalelor. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, cercetări de perspectivă digitală pentru serviciile publice locale. <https://www.socitm.net/>
