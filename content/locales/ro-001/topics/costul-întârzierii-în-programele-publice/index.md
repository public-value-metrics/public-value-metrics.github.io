# Costul întârzierii în programele publice (CoD)

Costul întârzierii (Cost of Delay) este valoarea publică pierdută pe unitate de timp cât un program, un serviciu sau o schimbare de sistem *nu* a fost încă livrat. Este metrica-punte principală a acestui grup de subiecte: convertește „lansarea a alunecat cu șase luni” în lire pe săptămână sau în WELLBY pe săptămână, astfel încât despre întârziere să se poată discuta în aceeași monedă ca și despre cazul de afaceri însuși.

## De ce contează

Regula lui Reinertsen — „dacă cuantificați un singur lucru, cuantificați costul întârzierii” — se transferă în guvern aproape neschimbată, deoarece programele publice sunt neobișnuit de expuse la el: cazurile de afaceri sunt aprobate față de un flux de beneficii prognozat, dar fluxul începe să curgă doar la lansare, iar fiecare săptămână de alunecare este o săptămână de valoare pierdută pe care nimeni nu o prețuiește în registrul de riscuri. Controlul repetat al National Audit Office asupra implementării Universal Credit (vezi rapoartele sale „Rolling Out Universal Credit”, <https://www.nao.org.uk/>) ilustrează tiparul: alunecarea graficului era urmărită și raportată, dar costul în lire pe săptămână al faptului că sistemul reformat *nu era încă* livrat următoarei tranșe de solicitanți era rareori enunțat ca o cifră de titlu, deși este numărul care ar fi trebuit să determine prioritizarea și escaladarea. Fără o cifră CoD, un program întârziat arată ca o problemă de grafic pentru consiliul de livrare; cu una, este o problemă de erodare a valorii pentru ordonatorul de credite.

## Matematica

```
CoD = beneficiu pe unitate de timp pierdut cât nu este livrat   (£/săptămână sau WELLBY/săptămână)

Pierderea totală din întârziere = CoD × durata întârzierii

Fluxuri de beneficii de însumat pentru programele publice:
  economii care eliberează numerar  (reducerea fraudei/erorilor, costuri temporare evitate)
+ capacitate nenumerar eliberată    (ore de lucrători/funcționari × cost încărcat)
+ beneficiu de bunăstare            (WELLBY × 13.000 £/WELLBY, îndrumări suplimentare
                                      HMT Green Book privind bunăstarea, prețuri 2019)
```

Pentru serviciile destinate cetățenilor, denominați în bunăstare la fel ca în bani — vezi [anii de viață ajustați la bunăstare](../ani-de-viață-ajustați-la-bunăstare/) pentru unitatea de bază și [costul de oportunitate în cheltuielile publice](../costul-de-oportunitate-în-cheltuielile-publice/) pentru ce ar fi putut finanța altfel lira amânată.

## Exemplu lucrat

**Autoritate locală**: o modernizare a sistemului de ajutor pentru locuință reduce eroarea de supraplată cu 150 £/cerere/an pe 20.000 de cereri active.

```
Beneficiu anual = 150 × 20.000 = 3.000.000 £/an
CoD = 3.000.000 / 52 ≈ 57.700 £/săptămână
O întârziere de implementare de 12 luni costă 52 × 57.700 ≈ 3.000.000 £ în erori evitabile.
```

**Agenție a guvernului central**: un serviciu de evaluare a beneficiilor de dizabilitate, livrat cu șase luni (26 de săptămâni) mai târziu decât planificat, înseamnă că 200.000 de solicitanți/an așteaptă în medie cu trei săptămâni mai mult o decizie. Fiecare săptămână suplimentară de incertitudine financiară este modelată ca un efect de −0,0018 WELLBY (punct de satisfacție în viață):

```
Pierdere WELLBY per solicitant = 3 × 0,0018 = 0,0054
Pierdere anuală WELLBY = 200.000 × 0,0054 = 1.080 WELLBY/an
CoD_bunăstare = 1.080 / 52 ≈ 20,8 WELLBY/săptămână
CoD_bani = 20,8 × 13.000 £ ≈ 270.000 £/săptămână de valoare de bunăstare
```

O întârziere de 26 de săptămâni „costă” deci aproximativ 540 WELLBY — valorând circa 7 milioane £ la evaluarea bunăstării din Green Book — reîncadrând o dată de lansare ratată ca eveniment de bunăstare a cetățenilor, nu o notă de subsol a managementului de proiect.

## Legătura cu ingineria software

CoD este ceea ce face [metricile DORA](../metricile-dora-pentru-valoarea-publică/) și [metricile de flux](../metrici-de-flux-în-livrarea-guvernamentală/) lizibile financiar: timpul de așteptare în conductă × CoD înseamnă bani (sau bunăstare) arși în cozi înainte să ajungă vreodată la un cetățean. Concret:

- **Prioritizare**: ordonați un backlog după CoD ÷ durată, nu după senioritatea părții interesate — analogul de inginerie software al cerinței Green Book de a evalua opțiunile pe valoare, nu pe cine cere.
- **Achiziții**: un ciclu de achiziție prin acord-cadru de 12–18 luni are un CoD; prețuirea lui schimbă argumentul de urgență pentru căile accelerate și alimentează direct deciziile [a construi sau a cumpăra](../a-construi-sau-a-cumpăra-în-guvern/) unde timpul până la valoare este un factor de decizie.
- **Cazul beneficiilor**: fiecare cifră CoD citată la aprobare ar trebui să reapară la [realizarea beneficiilor](../realizarea-beneficiilor/) — dacă costul întârzierii a fost real, beneficiul accelerat ar trebui să fie măsurabil după lansare.

## Capcane

- **Presupunerea unui CoD liniar**: unele servicii publice au valoare în formă de termen-limită (o dată legală de conformitate — CoD sare la niveluri de risc de aplicare după dată, aproape zero înainte) în loc de o rată săptămânală netedă. Clasificați profilul de urgență înainte de a înmulți.
- **CoD pe realizări de care nu are nevoie nimeni**: întârzierea are un cost doar dacă lucrul nelivrat are valoare; un sistem pe care nu-l va folosi nimeni are CoD zero indiferent cât de târziu este.
- **Numărarea dublă a întârzierii și actualizării**: [rata de actualizare socială](../rata-de-actualizare-socială/) prețuiește deja timpul pe orizonturi de evaluare multianuale; CoD este versiunea operațională, în interiorul orizontului, pentru săptămâni și luni. Folosiți CoD pentru alunecarea graficului, deplasarea VAN pentru refazarea multianuală.

## Surse

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, îndrumări suplimentare Green Book: bunăstare. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, rapoarte privind implementarea Universal Credit. <https://www.nao.org.uk/>
