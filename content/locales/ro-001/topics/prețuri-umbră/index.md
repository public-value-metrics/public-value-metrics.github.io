# Prețuri umbră

Un preț umbră este o valoare estimată atribuită unui bun, unei resurse sau unei externalități care nu are un preț de piață observabil sau al cărei preț de piață este distorsionat și nu reflectă adevărata sa valoare socială. Evaluarea guvernamentală se sprijină pe un set mic de prețuri umbră oficiale — carbon, timp în afara muncii, forță de muncă șomeră — publicate central astfel încât fiecare departament să folosească același număr.

## De ce contează

Prețurile umbră există deoarece [analiza cost-beneficiu socială](../analiza-cost-beneficiu-socială/) nu poate funcționa fără o valoare monetară pentru fiecare cost și beneficiu, iar câteva dintre cele mai importante — o tonă de carbon emisă, o oră din timpul unui navetist, o oră de muncă altfel șomeră — nu au deloc preț de piață sau au un preț de piață care denaturează costul lor social real. HM Treasury și Department for Energy Security and Net Zero publică împreună prețul umbră al carbonului folosit în toată evaluarea guvernamentală britanică (<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>), derivat nu dintr-un preț de piață al carbonului, ci dintr-o abordare consecventă cu țintele: valoarea carbonului este stabilită la costul marginal de reducere necesar pentru a atinge bugetele de carbon legiferate ale Regatului Unit, o logică fundamental diferită de observarea cu cât se tranzacționează efectiv carbonul în schema UE sau britanică de comercializare a emisiilor.

Rata salarială umbră urmează o logică similară pe partea forței de muncă. Angajarea cuiva care altfel ar fi fost șomer nu costă societatea întregul său salariu — o parte din acel salariu este un transfer din plățile de beneficii și din timpul liber/de căutare pierdut, mai degrabă decât o nouă solicitare netă a resurselor societății — așa că îndrumările Green Book stabilesc un preț umbră sub salariul de piață pentru munca preluată din șomaj, reflectând adevăratul cost de oportunitate al acelei munci (vezi [costul de oportunitate în cheltuielile publice](../costul-de-oportunitate-în-cheltuielile-publice/)) mai degrabă decât prețul ei de piață.

## Matematica

```
Prețul umbră al carbonului (structură ilustrativă, valorile curente din instrumentul
oficial de valori ale carbonului BEIS/DESNZ — nu folosiți cifre depășite):
  Valoarea sectorului tranzacționat: informată de traiectoriile prețului certificatelor ETS
  Valoarea sectorului netranzacționat (consecventă cu ținta): stabilită la costul
    marginal de reducere necesar pentru a respecta bugetele de carbon legiferate,
    crescând în timp pe măsură ce opțiunile mai ușoare de reducere se epuizează
  Aplicare: £/tonă CO2e × tone emise sau reduse de opțiune,
    actualizate la rata de actualizare socială pentru anii viitori

Rata salarială umbră (SWR):
  SWR = Salariu de piață − (valoarea timpului liber/de căutare economisit
                            + valoarea plăților sociale care nu se mai plătesc)
  Exprimată de obicei ca fracție din salariul de piață (ex. SWR = 0,6
    × salariu de piață într-o zonă cu șomaj ridicat, conform îndrumărilor Anexei A
    din Green Book privind piețele muncii cu capacitate disponibilă)
```

Ambele cifre sunt convenții de politică stabilite central, nu observații empirice ale pieței — întregul rost al unui preț umbră este să înlocuiască o piață lipsă sau distorsionată, deci o evaluare care folosește unul trebuie să citeze sursa oficială curentă în loc să-și deriveze propria cifră, tocmai pentru ca evaluările fiecărui departament să fie comparabile.

## Exemplu lucrat

**Guvern național**: o evaluare a unei scheme de apărare împotriva inundațiilor estimează că evită 400 de tone de emisii CO2e pe an (prin utilizarea redusă a utilajelor de urgență și carbon încorporat redus din reconstrucția evitată) pe o durată de evaluare de 30 de ani, în comparație cu o linie de bază „minimum”.

```
Preț umbră ilustrativ al carbonului: 280 £/tonă CO2e (anul 1, crescând pe
  perioada de evaluare conform programului oficial al valorilor carbonului netranzacționat)
Beneficiu carbon anul 1 = 400 × 280 £ = 112.000 £
```

Deoarece programul oficial are valoarea carbonului *crescând* pe perioada de evaluare (reflectând înăsprirea bugetelor de carbon), analistul trebuie să aplice valoarea corectă specifică anului pentru fiecare an al fluxului de 30 de ani, nu o rată fixă — folosirea valorii din anul 1 pe tot parcursul ar subestima beneficiile din anii ulteriori și ar distorsiona clasamentul față de proiecte alternative de apărare împotriva inundațiilor cu profiluri de carbon diferite.

**Autoritate locală**: programul de sprijin pentru ocupare al unui consiliu, pentru rezidenți șomeri pe termen lung, plasează 150 de persoane în locuri de muncă plătite cu 11 £/oră. Evaluarea folosind salariul întreg de piață ar atribui programului 11 £ × orele lucrate ca beneficiu social, dar abordarea ratei salariale umbră recunoaște că aceștia nu erau lucrători preluați din alte locuri de muncă — adevăratul cost de oportunitate al muncii lor înainte de program era scăzut.

```
Salariu de piață: 11,00 £/oră
Rata salarială umbră (ilustrativ, șomaj local ridicat): 0,6 × salariu de piață = 6,60 £/oră
Beneficiu social net atribuibil per oră lucrată ≈ 11,00 £ − 6,60 £ = 4,40 £/oră
  (valoarea „în plus” creată prin mutarea forței de muncă cu adevărat inactive în producție,
   distinctă de salariul însuși, care este în mare parte un transfer)
```

De aceea evaluările programelor de ocupare din zonele cu șomaj ridicat pot arăta o valoare socială netă pozitivă chiar și când același program, desfășurat într-o zonă cu ocupare deplină unde munca deplasată ar fi pur și simplu preluată din alte locuri de muncă, nu ar arăta.

## Legătura cu ingineria software

Evaluarea prin prețuri umbră atinge rar direct livrarea de software, dar contează oricând un caz de afaceri revendică un beneficiu de carbon sau social dintr-o schimbare IT — o consolidare de centre de date care revendică economii de carbon sau un serviciu fără hârtie care revendică carbon de tipar și poștă evitat trebuie să folosească prețul umbră oficial curent al carbonului, nu o cifră inventată, și trebuie să aplice programul corect an cu an, nu o rată fixă, exact ca orice alt input al evaluării Green Book. Vezi [costul total de proprietate în IT-ul guvernamental](../costul-total-de-proprietate-în-it-ul-guvernamental/) și [valoarea securității cibernetice a sectorului public](../valoarea-securității-cibernetice-a-sectorului-public/), ambele având adesea nevoie de un preț umbră pentru un input greu de monetizat (riscul de breșă, nefuncționarea) alături de elemente costate direct.

## Capcane

- **Folosirea unei cifre depășite pentru carbon sau salariu.** Ambele valori sunt revizuite periodic de îndrumările centrale; o evaluare construită pe o cifră depășită nu va rezista controlului Trezoreriei.
- **Aplicarea unui preț umbră fix al carbonului pe o evaluare de mai multe decenii.** Programul oficial crește în timp; folosirea valorii din anul 1 pe tot parcursul denaturează profilul beneficiilor sau costurilor.
- **Confundarea salariului umbră cu o reducere a plății reale a lucrătorului.** Rata salarială umbră ajustează *evaluarea* de către evaluare a factorului muncă, nu salariul efectiv plătit lucrătorului — confundarea celor două invită (în mod incorect) la justificarea unei plăți sub nivelul pieței.
- **Derivarea unui preț umbră la comandă în loc de folosirea celui oficial.** Prețurile umbră sunt convenții de politică tocmai pentru ca evaluările să fie comparabile între departamente; o cifră inventată local, oricât de bine argumentată, rupe această comparabilitate.

## Surse

- HM Treasury / Department for Energy Security and Net Zero. „Valuing greenhouse gas emissions in policy appraisal.” <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. „The Green Book: appraisal and evaluation in central government,” Anexa A (prețul umbră al muncii, valori ale timpului în afara muncii). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. „Project Appraisal and Planning for Developing Countries.” Heinemann, 1974 (metodologia fundamentală a prețurilor umbră).
