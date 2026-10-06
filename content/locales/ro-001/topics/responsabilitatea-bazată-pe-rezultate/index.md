# Responsabilitatea bazată pe rezultate (OBA)

Responsabilitatea bazată pe rezultate (Outcomes-Based Accountability), numită și Results-Based Accountability (RBA), este cadrul lui Mark Friedman pentru separarea a două întrebări pe care raportarea din sectorul public le confundă în mod obișnuit: „se descurcă bine populația?” (responsabilitate la nivel de populație) și „se descurcă bine acest program anume?” (responsabilitate de performanță). Confundarea celor două este, în relatarea lui Friedman, cel mai frecvent motiv pentru care programele bine conduse sunt învinuite pentru tendințe populaționale pe care nu au avut niciodată puterea să le mute.

## De ce contează

Friedman a expus cadrul în *Trying Hard Is Not Good Enough* (2005), argumentând că majoritatea raportărilor publice fie îneacă factorii de decizie în statistici la nivel de populație pe care nicio agenție singură nu le controlează (rata sarcinilor la adolescente, rata șomajului, speranța de viață), fie îi îneacă în numărători de activitate la nivel de program (clienți văzuți, trimiteri făcute) care nu spun nimic despre dacă viața cuiva s-a îmbunătățit. Contribuția RBA este un vocabular mic, disciplinat, care le ține separat: rezultatele populaționale (condiții de bunăstare pentru o întreagă populație, precum „copiii se nasc sănătoși”) nu aparțin niciunei agenții și cer mulți parteneri care se mișcă împreună; măsurile de performanță (cât de bine servește un program anume clienții săi anume) aparțin unei agenții și ar trebui judecate doar în raport cu ceea ce acea agenție poate efectiv influența. „Cele trei întrebări de performanță” ale lui Friedman — cât am făcut, cât de bine am făcut și este cineva mai bine? — sunt acum încorporate în contractarea serviciilor umane la nivel de stat și comitat în SUA și, prin firma de consultanță și setul de instrumente Clear Impact aliniat RBA, folosite pe larg în comisionarea administrației locale din Regatul Unit și Commonwealth. Mizele practice sunt contractuale: un program de locuințe nu ar trebui definanțat pentru că rata lipsei de adăpost a orașului a crescut din cauze macroeconomice în afara controlului său, dar absolut ar trebui definanțat dacă propriii clienți nu sunt locuiți.

## Matematica

```
Responsabilitate populațională („imaginea de ansamblu” împărtășită de o comunitate, regiune sau națiune):
  Rezultat     — o condiție de bunăstare (ex. „rezidenții sunt asigurați economic”)
  Indicator(i) — o măsură a acelei condiții (ex. rata șomajului, venitul median al gospodăriei)
  → niciun program singur nu deține indicatorul; mișcarea cere mulți contribuitori

Responsabilitate de performanță (pentru ce răspunde un program):
  Cât am făcut?        — volum de activitate (clienți serviți, unități livrate)
  Cât de bine am făcut? — calitate/eficiență (% care finalizează programul, cost per client)
  Este cineva mai bine? — rezultatul care contează (% angajați la 6 luni după program,
                          înainte/după sau față de un grup de comparație)

Un program este judecat pe a treia întrebare de performanță, niciodată direct pe
indicatorul populațional, cu excepția cazului în care scara și designul său l-ar putea mișca singur.
```

## Exemplu lucrat

**Program de sprijin pentru ocupare finanțat de oraș**, 500 de participanți/an, contractat de o autoritate locală sub un cadru de performanță în stil RBA:

```
Indicator populațional (context, nu tabloul de scor al programului):
  Rata șomajului în oraș: 6,2% (în creștere de la 5,8% anul precedent, determinată de
  închiderea unei fabrici în afara controlului programului)

Măsuri de performanță (responsabilitatea reală a programului):
  Cât:        500 de participanți înscriși (țintă 480) — îndeplinit
  Cât de bine: rată de finalizare 78%; cost per absolvent = 340.000 £ / 390 absolvenți ≈ 872 £
  Mai bine:   din 390 de absolvenți, 260 angajați stabil la 6 luni = 66,7%
              față de 41% pentru un grup de comparație potrivit (vezi counterfactual-analysis)
```

Într-o lectură de responsabilitate populațională, programul pare să eșueze — rata șomajului din oraș a crescut sub supravegherea sa. Într-o lectură de responsabilitate de performanță RBA, programul reușește: și-a atins ținta de volum, a menținut calitatea constantă și a produs un rezultat de angajare cu 25,7 puncte procentuale peste un grup de comparație potrivit, în timp ce indicatorul populațional s-a mișcat din motive (închiderea unei fabrici) complet în afara controlului programului.

## Legătura cu ingineria software

RBA se mapează direct pe o distincție SRE familiară: indicatorii populaționali sunt precum metricile „North Star” de nivel de afacere pe care nicio echipă de inginerie singură nu le deține de la un capăt la altul (veniturile companiei, cota de piață), în timp ce măsurile de performanță sunt precum SLO-urile propriei echipe — lucrurile pe care deciziile de proiectare ale echipei respective chiar le mișcă. Un tablou de bord care le raportează pe amândouă fără a eticheta care este care invită exact atribuirea greșită pe care RBA a fost construit s-o prevină: un inginer de gardă învinuit pentru o metrică pe care o controlează o echipă de dependență. Când comisionați sau construiți instrumente de raportare pentru contracte de rezultate, construiți tria „cât / cât de bine / mai bine” ca câmpuri de primă clasă, filtrabile separat, în loc de un singur KPI amestecat — este aceeași disciplină ca separarea indicatorilor conducători și întârziați din [KPI-urile sectorului public](../kpi-urile-sectorului-public/). RBA este și logica de responsabilitate de sub [plata pe bază de rezultate și obligațiunile cu impact social](../plata-pe-bază-de-rezultate-și-obligațiunile-cu-impact-social/): un contract PbR poate plăti în mod echitabil doar pe măsura de performanță „mai bine”, niciodată pe indicatorul populațional, cu excepția cazului în care intervenția este într-adevăr factorul dominant al acestuia.

## Capcane

- **Plata sau penalizarea unui program în raport cu un indicator populațional pe care nu-l poate controla**: aceasta este singura greșeală pe care RBA există s-o prevină; urmăriți întotdeauna dacă programul este un contribuitor major sau minor la rezultatul populațional înainte de a-i atașa consecințe.
- **Raportarea „cât” ca și cum ar fi „mai bine”**: numărătorile de activitate (clienți văzuți) sunt datele cel mai ușor de colectat și cele mai puțin informative; insistați ca întrebarea „este cineva mai bine” să primească răspuns cu date reale de rezultat, ideal în raport cu un contrafactual (vezi [analiza contrafactuală](../analiza-contrafactuală/)).
- **Tratarea indicatorilor RBA ca fixați pentru totdeauna**: metoda lui Friedman este explicit iterativă — un ciclu „date, poveste, ce funcționează, plan de acțiune” — nu un exercițiu unic de proiectare a unui tablou de scor.
- **Niciun grup de comparație pentru „mai bine”**: o schimbare înainte/după fără contrafactual confundă efectul programului cu tendința pe care populația ar fi arătat-o oricum.

## Surse

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, „What is Results-Based Accountability?” <https://clearimpact.com/results-based-accountability/>
