# Incluziunea digitală

Incluziunea digitală este disciplina care se asigură că „digital în mod implicit” nu devine „doar digital” — că serviciile publice proiectate în jurul celui mai ieftin canal continuă să funcționeze pentru cetățenii care nu îl pot sau nu vor să-l folosească fără asistență. GDS a inventat mecanismul specific de livrare, „asistența digitală” (assisted digital), ca o cerință obligatorie pentru fiecare serviciu digital guvernamental, nu ca un adaos opțional.

## De ce contează

Government Digital Strategy din 2012 a stabilit simplu ambiția: serviciile digitale ar trebui construite digitale în mod implicit, dar strategia însăși a recunoscut că circa 10% dintre adulții din Regatul Unit nu le vor putea folosi fără ajutor și a angajat departamentele să ofere sprijin de asistență digitală — o cale mediată de om, prin telefon, în persoană sau printr-un intermediar — ca parte a serviciului, nu ca o rezervă separată atașată mai târziu. Acest angajament este acum punctul 5 din [standardul serviciilor digitale](../standardul-serviciilor-digitale/), „asigurați-vă că toată lumea poate folosi serviciul”. Amploarea excluderii continue este urmărită de UK Consumer Digital Index anual al Lloyds Banking Group: ediția 2024 a constatat că aproximativ 1,6 milioane de persoane din Regatul Unit rămân offline și că acest grup înclină puternic spre persoane de 70–79 de ani, cei cu venituri sub 35.000 £ și cei pensionați sau șomeri — exact populația cel mai probabil să depindă de serviciile publice care sunt reproiectate. Același raport a constatat că doar 48% din forța de muncă din Regatul Unit putea îndeplini toate cele 20 de sarcini ale cadrului Essential Digital Skills, ceea ce înseamnă că excluderea nu este conectivitate binară, ci un spectru de competențe, încredere și încredere pe care o simplă metrică „are internet în bandă largă” o ratează complet.

## Matematica

Incluziunea digitală este un cadru și o verificare a echității, mai degrabă decât o singură formulă, dar se compune cu evaluarea valorii cantitative prin [ponderarea distributivă](../ponderarea-distributivă/):

```
Valoare naivă a mutării canalului:
  valoare = volum mutat × (cost_vechi − cost_digital)     [vezi channel-shift-savings]

Valoare ajustată pentru incluziune:
  valoare = (volum mutat × economie neponderată)
        − (utilizatori excluși × costul furnizării asistenței digitale)
        − (ajustare a ponderii distributive pentru prejudiciul adus grupurilor
           excluse care pierd accesul sau se confruntă cu o calitate degradată a serviciului)

Asistența digitală nu este costul rezidual al eșecului — este un canal proiectat
cu propriul [cost per tranzacție](../costul-per-tranzacție/),
de obicei mult mai mare per tranzacție decât autoservirea digitală, dar totuși
de obicei mai ieftin decât canalul vechi pe care îl înlocuiește parțial.
```

## Exemplu lucrat

**Serviciu național de beneficii în stil Universal Credit**: 2,5 milioane de cereri/an, evaluat ca având nevoie de sprijin de asistență digitală pentru circa 10% dintre solicitanți conform ipotezei de planificare din Government Digital Strategy.

```
Cohorta exclusă/de asistență digitală = 2.500.000 × 10% = 250.000 de cereri/an

Costul canalului de asistență digitală (sprijin telefonic + față în față,
dotat cu personal pentru a gestiona vulnerabilitatea și complexitatea) ≈ 9,50 £/cerere
  = 250.000 × 9,50 £ = 2.375.000 £/an

Costul autoservirii digitale pentru ceilalți 90% ≈ 0,40 £/cerere
  = 2.250.000 × 0,40 £ = 900.000 £/an

Cost mixt per tranzacție = (2.375.000 + 900.000) / 2.500.000
  = 1,31 £/cerere

Un design care omite asistența digitală pentru a atinge un cost per
tranzacție de titlu mai mic (ex. 0,40 £ mixt, ignorând cei 250.000
de solicitanți excluși) nu elimină acel cost de 2,375 mil. £ — îl
transformă în drepturi nerevendicate, contestații și cerere din aval pentru
servicii de criză care cade pe un buget cu totul diferit.
```

## Legătura cu ingineria software

Asistența digitală este un canal proiectat, ceea ce înseamnă că are interfețe, SLA-uri și instrumentare ca orice altul: un instrument pentru lucrători pe bază de telefon, un portal de intermediere pentru Citizens Advice sau o autoritate locală sau un flux de kiosc în persoană. Tratarea ei ca un gând ulterior — un număr de telefon cu litere mici în loc de un canal luat în considerare de la descoperire — este cea mai frecventă cale prin care serviciile pică punctul 5 din [standardul serviciilor digitale](../standardul-serviciilor-digitale/) la evaluare. Incluziunea digitală este lentila de echitate pentru orice alt subiect din acest grup: plafonează cât de agresiv pot fi realizate [economiile din mutarea canalelor](../economii-din-mutarea-canalelor/), este o linie ce trebuie inclusă onest în [costul per tranzacție](../costul-per-tranzacție/) și este aplicarea directă a [ponderării distributive](../ponderarea-distributivă/) într-un context de servicii digitale — o economie care cade disproporționat pe oameni deja excluși digital și economic ar trebui ponderată în jos, nu tratată ca echivalentă cu o economie răspândită uniform în populație.

## Capcane

- **„Digital în mod implicit” citit ca „doar digital”**: închiderea liniei telefonice sau a ghișeului odată ce adoptarea digitală trece un prag, fără verificarea că cohorta rămasă are o alternativă cu adevărat utilizabilă.
- **Măsurarea incluziunii prin conectivitate binară**: „are internet în bandă largă” sau „deține un smartphone” este un proxy slab pentru capacitatea de a finaliza o tranzacție specifică — decalajul Essential Digital Skills (doar 48% din forța de muncă din Regatul Unit îndeplinește toate cele 20 de sarcini, conform Lloyds 2024) arată că competențele și încrederea contează la fel de mult ca accesul.
- **Costarea asistenței digitale ca o eroare de rotunjire**: bugetarea ei ca o mică linie de contingență în loc de un canal propriu-zis cu propriul [cost per tranzacție](../costul-per-tranzacție/), apoi surprinderea că este subfinanțată și cu personal insuficient la lansare.
- **Sondarea doar a celor care au finalizat cu succes digital**: cercetarea de satisfacție și utilizabilitate rulată în întregime în cadrul serviciului ratează oamenii care nu au ajuns niciodată atât de departe, exact populația pe care munca de incluziune digitală este menită s-o protejeze.

## Surse

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, punctul 5: asigurați-vă că toată lumea poate folosi serviciul. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, revizuirea excluziunii digitale. <https://www.ofcom.org.uk/>
