# Valoarea timpului voluntarilor

Valoarea timpului voluntarilor este estimarea monetară atribuită muncii neplătite, folosită cel mai des pentru a exprima amprenta economică reală a unei organizații caritabile — conturile ei plus munca pe care nu a trebuit s-o plătească — sau pentru a susține că o anumită intervenție este mai cost-eficace decât sugerează doar bugetul ei în numerar. Domină două metodologii naționale: estimarea Independent Sector din Statele Unite și abordarea Office for National Statistics / NCVO din Regatul Unit, iar ele prețuiesc aceeași oră de muncă destul de diferit.

## De ce contează

În fiecare an, Independent Sector, în colaborare cu Do Good Institute al University of Maryland, publică o valoare orară națională a timpului voluntarilor, construită din datele salariale ale Bureau of Labor Statistics — în mod specific câștigurile medii orare ale lucrătorilor din producție și non-supraveghere din statele de plată private non-agricole, plus o ajustare pentru beneficii suplimentare — și defalcată pe state americane. Cea mai recentă publicare a stabilit valoarea la **36,14 $ pe oră pentru 2025**, în creștere cu 3,9% față de anul precedent, cu valori la nivel de stat de la peste 50 $ în Washington, DC la sub 20 $ în Puerto Rico. În Regatul Unit, Office for National Statistics a estimat separat costul de înlocuire al voluntariatului formal la **14,43 £ pe oră** (estimare din 2017), iar UK Civil Society Almanac 2024 al NCVO folosește date privind participarea la voluntariat — circa 14,2 milioane de persoane făceau voluntariat formal în 2021–22 — pentru a estima contribuția totală a sectorului prin voluntariat la aproximativ **18 miliarde £**, circa 0,8% din PIB-ul Regatului Unit.

Motivul pentru care contează dincolo de cosmetica contabilă: un program care se bazează intens pe munca voluntarilor poate părea dramatic mai ieftin pe o bază pur în numerar a [costului per rezultat](../costul-per-rezultat/) decât unul care se bazează pe personal plătit, chiar și când costul real al resurselor — cât ar costa înlocuirea acelei munci — este similar sau mai mare. Finanțatorii și evaluatorii care ignoră valoarea timpului voluntarilor subnumără sistematic costul real al modelelor de livrare cu mulți voluntari, ceea ce distorsionează comparațiile de eficiență cu modelele cu personal plătit care livrează același rezultat.

## Matematica

```
Valoarea timpului voluntarilor = Ore de voluntariat contribuite × tarif orar

Alegerea tarifului contează și schimbă răspunsul:
  - Abordarea costului de înlocuire: salariul unui lucrător plătit care ar face
    aceeași sarcină (ex. un tarif de cost de înlocuire pentru un lucrător calificat cu
    tineri, nu un salariu mediu generic) — cel mai apărabil pentru evaluarea specifică sarcinii
  - Abordarea costului de oportunitate: salariul pierdut al voluntarului însuși — cel mai
    apărabil pentru evaluarea a ceea ce voluntarul a sacrificat
  - Abordarea mediei naționale: tariful unic amestecat al Independent Sector sau ONS —
    cel mai apărabil pentru comparabilitatea de titlu, între sectoare
```

Cele trei abordări pot diferi cu un multiplu mare pentru aceeași oră (un avocat care face voluntariat ca administrator în consiliu are un tarif de cost de oportunitate foarte diferit de un tarif al mediei naționale), așa că orice cifră raportată trebuie să declare ce metodă a produs-o.

## Exemplu lucrat

**Organizație caritabilă din Regatul Unit, abordarea mediei naționale**: 5.000 de ore de voluntariat într-un an, evaluate la 14,43 £/oră (estimarea costului de înlocuire ONS):

```
Valoare = 5.000 × 14,43 £ = 72.150 £
```

Dacă cheltuiala în numerar a organizației în acel an a fost de 300.000 £, costul ei real al resurselor — numerar plus muncă voluntară — este 372.150 £, cu aproximativ 24% mai mare decât sugerează doar cifra în numerar. Un calcul al costului per rezultat care folosește doar cifra în numerar de 300.000 £ subestimează costul real cu aceeași marjă.

**Organizație caritabilă americană, abordarea mediei naționale**: 2.000 de ore de voluntariat evaluate la 36,14 $/oră (publicarea Independent Sector, 2025):

```
Valoare = 2.000 × 36,14 $ = 72.280 $
```

**Aceeași organizație caritabilă americană, abordarea costului de oportunitate**: dacă voluntarii sunt în proporție disproporționată profesioniști pensionați ale căror câștiguri anterioare au fost în medie 60 $/oră, evaluarea costului de oportunitate ar fi 120.000 $ — cu două treimi mai mare decât cifra mediei naționale, ilustrând de ce metoda trebuie declarată.

## Legătura cu ingineria software

Sistemele care înregistrează orele de voluntariat (instrumente de programare a turelor, platforme de gestionare a voluntarilor) ar trebui să capteze orele la nivel de sarcină sau rol, nu doar un total, astfel încât un tarif de cost de înlocuire să poată fi aplicat per rol, în loc de un singur tarif general al mediei naționale peste o forță de muncă voluntară mixtă (ora unui administrator și ora unui steward nu sunt echivalente economic). Stocarea tarifului și a metodologiei folosite alături de valoarea calculată — nu doar cifra finală în monedă — permite raportării din aval (conturi anuale, calcule de [rentabilitate socială a investiției](../rentabilitatea-socială-a-investiției/), rapoarte către finanțatori) să reproducă sau să conteste numărul mai târziu în loc să-l trateze ca pe o constantă opacă. Vezi [costul per rezultat](../costul-per-rezultat/) pentru motivul pentru care omiterea valorii timpului voluntarilor subestimează sistematic costul real al livrării.

## Capcane

- **Folosirea unui singur tarif general pentru roluri structural diferite.** Un tarif salarial mediu național aplicat unei ore pro bono profesionale (juridică, financiară, clinică) o subevaluează drastic; potriviți tariful cu rolul înlocuit oriunde sarcina este calificată.
- **Numărare dublă față de costul personalului plătit.** Dacă voluntarii înlocuiesc muncă ce ar fi fost altfel plătită, asigurați-vă că evaluarea este aditivă față de cheltuiala în numerar, nu suprapusă peste o estimare deja umflată a personalului.
- **Citarea unui tarif depășit fără dată.** Tarifele Independent Sector și ONS se schimbă anual (sau sunt reestimate doar periodic, în cazul ONS); o cifră a timpului voluntarilor fără dată într-un raport este aproape fără sens pentru comparație.
- **Tratarea valorii timpului voluntarilor ca activ de strângere de fonduri.** Este o ajustare de contabilitate a costurilor pentru înțelegerea costului real al resurselor, nu bani noi pe care o organizație caritabilă îi poate cheltui; confundarea celor două induce în eroare un consiliu care citește conturile.

## Surse

- Independent Sector și Do Good Institute (University of Maryland), „Value of Volunteer Time.” <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, metodologia Value of Volunteer Time. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, estimarea evaluării voluntariatului, așa cum este citată în analiza NCVO. <https://www.ncvo.org.uk/>
