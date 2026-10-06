# Modelul logic

Un model logic este o diagramă liniară care leagă intrările, activitățile, realizările, rezultatele și impactul unui program, citită de la stânga la dreapta ca un lanț de responsabilitate: resursele intră, activitățile au loc, realizările sunt produse, rezultatele se schimbă pentru beneficiari, iar impactul se acumulează pe o scară de timp mai largă sau mai lungă. Este structura standard față de care finanțatorii și auditorii se așteaptă ca un program să poată fi raportat și contrapartea orientată spre viitor a [teoriei schimbării](../teoria-schimbării/) cartografiate înapoi.

## De ce contează

Magenta Book al HM Treasury specifică modelul logic ca element obligatoriu al proiectării evaluării unui program, iar finanțatori precum National Lottery Community Fund își construiesc șabloanele de cerere și raportare exact în jurul acestui lanț de cinci coloane. Valoarea lui este că obligă un program să declare, într-o singură diagramă, ce va cheltui, ce va face cu aceasta, ce va produce și — critic — ce ar trebui să se schimbe în consecință, la un nivel de specificitate pe care un paragraf de proză tinde să-l ascundă. Un model logic cu coloanele de intrări și activități completate, dar cu coloana de rezultate goală sau vagă, poate fi diagnosticat dintr-o privire, exact motivul pentru care finanțatorii cer unul.

## Matematica

Modelul logic este un lanț structural, nu o formulă:

```
Intrări         Activități        Realizări            Rezultate             Impact
(resurse        (ce se face       (produse directe,    (schimbare pentru     (schimbare pe termen
 angajate)       cu ele)           numărabile)          beneficiari)          lung, la nivel de
                                                                              populație sau sistem)
```

Fiecare coloană ar trebui să fie mai specifică decât precedenta: intrările sunt ce cheltuiți, activitățile sunt ce faceți, realizările sunt ce se livrează indiferent de efect, rezultatele sunt ce se schimbă în consecință — distincția tratată pe larg în [rezultate versus realizări](../rezultate-versus-realizări/) — iar impactul este schimbarea durabilă, adesea doar parțial atribuibilă, pe termen lung.

## Exemplu lucrat

**Autoritate locală (serviciu digital de consiliere în datorii)**:

- Intrări: buget anual de 180.000 £, 4,0 FTE consilieri, un sistem de gestionare a cazurilor.
- Activități: sesiuni de outreach, programări individuale de consiliere în datorii.
- Realizări: 900 de programări livrate; 750 de planuri de datorii și beneficii emise.
- Rezultate: dintre clienții care ajung la urmărirea de la 6 luni, 60% (450 din 750) raportează restanțe reduse, în medie cu 1.200 £ per client — 540.000 £ reducere agregată a restanțelor.
- Impact: o scădere măsurabilă a cererilor de locuință pentru persoane fără adăpost din baza de clienți a serviciului pe doi ani, doar parțial atribuibilă acestui serviciu alături de alte intervenții (vezi [analiza contrafactuală](../analiza-contrafactuală/)).

**Organizație caritabilă (parteneriat de trimitere către banca de alimente)**:

- Intrări: 45.000 £, 1,5 FTE coordonator, acorduri de parteneriat cu 12 agenții de trimitere.
- Activități: triere trimiteri, ambalare și distribuire pachete.
- Realizări: 5.000 de pachete alimentare distribuite la 1.100 de gospodării.
- Rezultate: 68% din gospodăriile chestionate (748 din 1.100) raportează securitate alimentară îmbunătățită la un telefon de urmărire după 4 săptămâni.
- Impact: contribuție la cererea redusă de servicii locale de criză, dovedită doar în statistici agregate ale zonei, neatribuibilă acestei organizații caritabile singure.

## Legătura cu ingineria software

Modelul logic este aproape un model de date literal pentru un sistem de rezultate: intrările și activitățile sunt date operaționale pe care le dețineți deja (cheltuieli, personal, jurnale de sesiuni); realizările sunt ușor de instrumentat deoarece sunt numărate în punctul de livrare; rezultatele cer o colectare de date de urmărire proiectată deliberat (sondaje, legarea datelor administrative) care nu va exista dacă nu o construiește cineva; impactul cere de obicei date legate, longitudinale sau la nivel de populație, dincolo de sistemele oricărui program. Inginerii care construiesc instrumente de raportare ar trebui să împingă comisarii să definească indicatori de rezultat și impact la momentul proiectării, în loc să recurgă implicit la un tablou de bord doar de realizări pentru că aceasta este ceea ce susțin datele tranzacționale. Vezi [rentabilitatea socială a investiției](../rentabilitatea-socială-a-investiției/) pentru o metodă care evaluează specific coloanele de rezultate și impact și [realizarea beneficiilor](../realizarea-beneficiilor/) pentru a urmări dacă coloana de impact a fost efectiv livrată.

## Capcane

- **Oprirea la realizări.** Un tablou de bord care raportează programări livrate sau pachete distribuite și lasă să se înțeleagă beneficiu raportează activitate, nu rezultate — vezi [rezultate versus realizări](../rezultate-versus-realizări/).
- **Nicio legătură cauzală declarată între coloane.** Un model logic enunță lanțul, dar nu de ce activitățile ar trebui să producă realizări care ar trebui să producă rezultate; acel raționament aparține unei [teorii a schimbării](../teoria-schimbării/), iar un model logic fără una în spate este netestat.
- **Tratarea lui ca document unic de ofertă.** Modelele logice produse doar pentru a satisface o cerere de finanțare și niciodată actualizate încetează să mai reflecte ceea ce face efectiv programul.
- **Alunecare de atribuire la coloana de impact.** Revendicarea schimbării la nivel de populație ca fiind cauzată exclusiv de un singur program, fără un contrafactual, supraestimează ceea ce susțin dovezile.

## Surse

- HM Treasury, Magenta Book (2020), Capitolul 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, îndrumări privind modelul logic. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, „Logic Model Development Guide” (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
