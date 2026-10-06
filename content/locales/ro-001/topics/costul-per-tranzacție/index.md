# Costul per tranzacție

Costul per tranzacție este metrica de titlu a economiei unitare pentru un serviciu digital guvernamental: costul total al livrării unui canal, împărțit la numărul de tranzacții finalizate prin el. A fost cifra emblematică din vechiul Performance Platform GOV.UK și numărul care a finanțat un deceniu de investiții „digital în mod implicit” — exact motivul pentru care este și metrica cea mai predispusă la manipulare.

## De ce contează

Digital Efficiency Report din 2012 al Cabinet Office a pus comparația costurilor canalelor în termeni care au rămas: s-a constatat că tranzacțiile digitale costă de aproximativ 20 de ori mai puțin decât cele telefonice și de circa 50 de ori mai puțin decât cele față în față, cu cifre ilustrative ale administrației locale de aproximativ 0,15 £ per tranzacție web față de 2,83 £ prin telefon și 8,62 £ față în față. Acea singură comparație a devenit justificarea reproiectării celor 25 de servicii exemplare numite în Government Digital Strategy și a fiecărui caz de afaceri departamental care a citat de atunci economii din mutarea canalelor. Cifra este cu adevărat utilă ca semnal de ordin de mărime, dar raportul depinde în întregime de ce se numără de ambele părți: un cost corect al canalului telefonic include personalul centrului de apel, contractul de telefonie, formarea și spațiile; un cost digital corect include găzduirea, salariile continue ale echipei de produs, timpul biroului de suport pentru parcursurile eșuate și canalul cu asistență digitală cerut de punctul 5 din [standardul serviciilor digitale](../standardul-serviciilor-digitale/). Eliminați destul din acestea din partea digitală și orice serviciu pare ieftin.

## Matematica

```
Cost per tranzacție = costul total alocat al canalului / tranzacții finalizate

Costul total alocat al canalului ar trebui să includă:
  + găzduire și infrastructură
  + costul echipei de produs/inginerie/suport (amortizat)
  + costul conținutului și designului serviciului (amortizat)
  + costul asistenței digitale / suportului de accesibilitate
  + costul cererii generate de eșec (utilizatori care eșuează digital și revin la telefon)
  − costul unic de construire este amortizat pe durata de viață așteptată a serviciului,
    nu cheltuit integral în primul an

Trucul contabil comun:
  „Costul marginal per tranzacție” (doar găzduire, odată construit) este citat
  ca și cum ar fi „costul mediu per tranzacție” (costul total, inclusiv
  echipa care continuă să-l construiască și să-l ruleze). Cele două pot
  diferi de 10 ori sau mai mult pentru un serviciu cu o echipă de livrare mare, activă.
```

## Exemplu lucrat

**Serviciu de reînnoire a taxei auto**: 4 milioane de tranzacții/an.

```
Cifra doar marginală (trucul):
  Doar găzduire + procesarea plăților = 180.000 £/an
  Cost per tranzacție = 180.000 / 4.000.000 = 0,045 £
  → cifra de titlu citată într-un caz de afaceri

Cifra complet încărcată (cea onestă):
  Găzduire + plăți                        180.000 £
  Echipă de produs/inginerie (8 FTE)       720.000 £
  Suport (tranzacții eșuate/contestate)    310.000 £
  Linie telefonică de asistență digitală   140.000 £
  Total                                  1.350.000 £
  Cost per tranzacție = 1.350.000 / 4.000.000 = 0,3375 £

Cifra complet încărcată este tot de aproximativ 8 ori mai ieftină decât
comparatorul telefonic de 2,83 £ din Digital Efficiency Report — o economie reală
și apărabilă — dar de 7,5 ori mai mare decât cifra doar marginală citată în versiunea
prescurtată. Ambele numere sunt „adevărate”; doar unul este comparabil cu costul
canalului telefonic față de care este pus.
```

## Legătura cu ingineria software

Costul per tranzacție este locul unde deciziile de arhitectură devin un număr financiar: un serviciu care se scalează automat curat și cere puțină intervenție manuală coboară această cifră în timp; unul care generează un volum mare de tichete de suport din stări de eroare confuze o ridică indiferent de eficiența găzduirii. Este metrica însoțitoare naturală a punctului 10 din [standardul serviciilor digitale](../standardul-serviciilor-digitale/) („definiți cum arată succesul și publicați datele de performanță”) și a [standardelor de servicii și metricilor de tranzacții](../standarde-de-servicii-și-metrici-de-tranzacții/), care expun setul KPI mai complet în care se încadrează această cifră. Alimentează direct și calculele [economiilor din mutarea canalelor](../economii-din-mutarea-canalelor/) și ar trebui reconciliată cu [costul total de proprietate în IT-ul guvernamental](../costul-total-de-proprietate-în-it-ul-guvernamental/) astfel încât costurile generale ale platformei și serviciilor partajate să nu fie omise în tăcere.

## Capcane

- **Cost marginal deghizat în cost mediu**: citarea costului doar de găzduire după ce un serviciu este construit, omițând echipa continuă care îl întreține, îl iterează și îl susține — vezi exemplul lucrat de mai sus.
- **Excluderea costului asistenței digitale**: un canal nu este conform „digital în mod implicit”, iar costul său real nu este captat, dacă rezerva telefonică/pe hârtie cerută de [incluziunea digitală](../incluziunea-digitală/) este costată separat sau ignorată.
- **Ignorarea cererii generate de eșec**: tranzacțiile care încep digital și eșuează, generând oricum un apel telefonic sau un formular pe hârtie, sunt un cost al canalului digital, nu al canalului care prinde eșecul.
- **Compararea tranzacțiilor de complexitate diferită între canale**: apelurile telefonice gestionează disproporționat cazurile dificile (mai mulți dependenți, corectarea erorilor, solicitanți vulnerabili); compararea unui cost telefonic mediu cu un cost digital mediu supraestimează raportul dacă mixul de tranzacții nu este potrivit.

## Surse

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, punctul 10: definiți cum arată succesul. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
