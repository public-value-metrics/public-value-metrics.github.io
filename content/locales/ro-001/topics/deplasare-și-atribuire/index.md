# Deplasare și atribuire

Deplasarea apare atunci când beneficiul aparent al unui program este obținut luând activitate sau beneficiu din altă parte, în loc să creeze ceva nou — câștigul tău este pierderea altcuiva. Atribuirea este întrebarea conexă despre cât dintr-un rezultat observat își poate revendica în mod real intervenția ta, când au contribuit și alți actori și factori. Ambele sunt ajustări standard în ghidurile britanice de evaluare din sectorul public, alături de efectul de inerție și scurgere, și ambele sunt omise în mod curent de afirmațiile de impact care par mult mai solide decât sunt.

## De ce contează

O schemă de granturi pentru afaceri a unei autorități locale care ajută 50 de magazine să se mute într-o zonă de regenerare poate raporta „50 de afaceri sprijinite, 200 de locuri de muncă create” — dar dacă acele afaceri s-au mutat pur și simplu de pe o stradă comercială vecină în loc să se extindă, locurile de muncă au fost deplasate, nu create, iar efectul net la nivelul întregului district (sau al regiunii) poate fi aproape de zero. Magenta Book al HM Treasury și îndelungatul Additionality Guide tratează deplasarea ca o deducere obligatorie tocmai pentru că poveștile locale de succes sunt frecvente chiar și când nu produc niciun beneficiu net național sau regional — valoarea s-a mutat pur și simplu, adesea în dezavantajul zonei sau al actorilor care au pierdut-o. Ghidul de evaluare a fondurilor structurale (folosit pentru fostele programe ale Fondului European de Dezvoltare Regională și succesorii lor interni, precum UK Shared Prosperity Fund) formalizează aceasta la trei scări spațiale: deplasare locală (în interiorul unui oraș), deplasare regională (în interiorul unei regiuni) și deplasare națională (în tot Regatul Unit), deoarece o intervenție poate fi adițională la o scară și deplasare pură la una mai largă — un program de ocupare care atrage lucrători dintr-un oraș vecin este neutru la nivel național chiar dacă pare un succes local.

Atribuirea este problema soră în livrarea bazată intens pe parteneriate, care este acum norma în activitatea sectorului social și a serviciilor publice interinstituționale. Când trei organizații livrează împreună un serviciu de prevenire a lipsei de adăpost, raportul anual al fiecărei organizații poate revendica independent meritul pentru aceeași reducere a persoanelor care dorm pe stradă — însumate între rapoarte, impactul revendicat poate depăși schimbarea reală observată, uneori de câteva ori. Îndrumările Magenta Book privind analiza contribuției există tocmai pentru că atribuirea randomizată unui singur actor este adesea imposibilă în livrarea interinstituțională, iar răspunsul onest este frecvent „am contribuit la acest rezultat”, nu „am cauzat acest rezultat”.

## Matematica

Deplasarea ca parte a secvenței standard a impactului net (vezi [adiționalitate și efect de inerție](../adiționalitate-și-efect-de-inerție/) pentru lanțul complet):

```
Impact net adițional = Rezultat brut − Efect de inerție − Deplasare − Scurgere, × Multiplicator

Rata deplasării = beneficiu/activitate deviată din altă parte
                  / total beneficiu/activitate brută observată
```

Atribuirea, atunci când mai mulți actori contribuie la un rezultat, se exprimă de obicei ca o cotă de contribuție, nu ca un procent precis, deoarece de regulă nu poate fi măsurată cu aceeași rigoare ca deplasarea:

```
Cota atribuibilă ≈ f(puterea contribuției cauzale, contribuțiile celorlalți actori,
                      factori externi/contextuali)

Impactul revendicat nu trebuie să depășească niciodată:
  Σ (cota atribuibilă a fiecărui partener) ≤ 100% din rezultatul total observat
```

## Exemplu lucrat

**Grant de regenerare**: schema de granturi pentru strada principală a unui consiliu raportează 200 de noi locuri de muncă în comerț create în zona finanțată. Cercetarea prin sondaj ulterioară constată că 60 dintre aceste locuri provin de la afaceri mutate de pe o stradă principală vecină, nefinanțată, din același district, iar alte 30 de la lanțuri naționale care ar fi deschis sucursale undeva în regiune indiferent de grant.

```
Locuri de muncă brute revendicate = 200
Deplasare locală = 60 (mutate în interiorul districtului)
Deplasare regională = 30 (s-ar fi deschis oricum în regiune)

Locuri de muncă nete adiționale (nivel district) = 200 − 60 = 140
Locuri de muncă nete adiționale (nivel regional) = 200 − 60 − 30 = 110
```

Cifra de titlu onestă depinde de scara geografică pe care o urmărește finanțatorul — un caz de afaceri al Trezoreriei evaluat la nivel național sau regional ar trebui să folosească 110, nu 140 de la nivelul districtului și cu siguranță nu cei 200 bruți.

**Serviciu interinstituțional pentru persoane fără adăpost**: trei organizații partenere (un consiliu, o organizație caritabilă pentru locuințe și un trust de sănătate) livrează împreună un serviciu de reducere a persoanelor care dorm pe stradă. Numărul persoanelor care dorm pe stradă în zonă a scăzut cu 30 pe parcursul anului. Raportul anual individual al fiecărei organizații revendică „am redus numărul persoanelor care dorm pe stradă cu 30” — însumate, cele trei rapoarte revendică 90 de persoane ajutate, de trei ori reducerea reală. O analiză a contribuției care atribuie fiecărui partener o cotă (să zicem 40% consiliu, 35% organizație caritabilă, 25% trust de sănătate, pe baza rolului documentat și a evaluării independente) ar raporta 12, 10,5 și respectiv 7,5, însumând corect la cele 30 observate.

## Legătura cu ingineria software

Deplasarea și atribuirea modelează felul în care ar trebui proiectate sistemele de urmărire a impactului și de raportare a rezultatelor pentru livrarea multi-site sau multi-partener:

- Sfera geografică și organizațională ar trebui să fie câmpuri explicite, de primă clasă, în orice tablou de bord de impact — o cifră raportată „pentru district” și aceeași cifră raportată „pentru regiune” sunt numere diferite, iar un sistem care le confundă va produce numere care nu pot fi reconciliate la nivel de portofoliu.
- Acolo unde mai mulți parteneri livrează împreună, un sistem de rezultate ar trebui să înregistreze cotele de contribuție (sau cel puțin să marcheze atribuirea comună), în loc să lase modulul de raportare al fiecărui partener să revendice independent 100% dintr-un rezultat partajat — altfel agregările la nivel de portofoliu vor supraestima impactul total, uneori grav.
- Aceasta se leagă de [rentabilitatea socială a investiției](../rentabilitatea-socială-a-investiției/) și [raportarea rezultatelor granturilor](../raportarea-rezultatelor-granturilor/): un calcul SROI sau IRIS+ care ignoră deplasarea sau supra-atribuie rezultatele partajate va produce un raport umflat care nu rezistă la audit sau replicare.

## Capcane

- **Raportarea succesului local fără verificarea deplasării mai ample.** Un program poate părea foarte reușit la cea mai mică scară de raportare, fiind neutru sau chiar negativ la una mai largă; indicați întotdeauna scara geografică la care se aplică cifra netă.
- **Lăsarea fiecărui partener dintr-o livrare comună să revendice meritul întreg.** Dacă cotele de contribuție nu sunt convenite și documentate, raportarea agregată între parteneri va supraestima impactul total — verificați că revendicările la nivel de partener nu însumează mai mult decât totalul observat.
- **Tratarea atribuirii ca procent precis când este de fapt o judecată.** Analiza contribuției, spre deosebire de un contrafactual randomizat, produce o estimare apărabilă, nu un fapt măsurat; prezentați-o cu incertitudinea corespunzătoare, nu cu precizie falsă.
- **Ignorarea deplasării în intervențiile orientate spre piață.** Sprijinul pentru afaceri, schemele de ocupare și regenerarea bazată pe loc sunt categoriile clasice cu deplasare ridicată; tratați verificările de deplasare ca obligatorii pentru acestea, nu opționale.

## Surse

- HM Treasury, „The Magenta Book: Central Government Guidance on Evaluation” (2020), inclusiv îndrumările privind analiza contribuției. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, „Additionality Guide: A Standard Approach to Assessing the Additional Impact of Interventions” (ediția a 3-a).
- Comisia Europeană, „Evalsed: The Resource for the Evaluation of Socio-Economic Development” — ghid privind scările de deplasare locală, regională și națională.
- Mayne J. „Contribution Analysis: An Approach to Exploring Cause and Effect.” ILAC Brief No. 16, 2008.
