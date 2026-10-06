# Adiționalitate și efect de inerție (deadweight)

Adiționalitatea întreabă dacă o intervenție a cauzat un rezultat care altfel nu s-ar fi produs. Efectul de inerție (deadweight) este oglinda ei: partea dintr-un rezultat care s-ar fi produs oricum, chiar fără programul, grantul sau subvenția. Aproape orice afirmație de impact a unui program guvernamental sau a unei organizații caritabile îi exagerează efectul până când se scade efectul de inerție, motiv pentru care ghidurile britanice de evaluare îl tratează ca prima și cea mai importantă ajustare a oricărei cifre de titlu.

## De ce contează

„Am sprijinit 500 de afaceri să crească” sună ca o realizare, dar dacă 300 dintre acele afaceri ar fi crescut oricum — pentru că economia locală își revenea, pentru că aveau alte căi de finanțare, pentru că erau deja pe o traiectorie de creștere înainte de începerea programului — contribuția adițională reală a programului este 200, nu 500. Magenta Book al HM Treasury și îndelungatul „Additionality Guide” HM Treasury/BIS (dezvoltat inițial pentru programe de dezvoltare regională și regenerare și utilizat pe larg de atunci în evaluarea guvernamentală britanică) formalizează efectul de inerție ca ajustare de pornire în secvența standard a impactului net: efect brut minus efect de inerție, minus deplasare, minus scurgere, ajustat pentru efecte multiplicatoare, egal cu impact net adițional. Omiterea acestui pas este cea mai frecventă cale prin care afirmațiile de impact din sectorul public și social sunt umflate, deliberat sau nu — un program de granturi care măsoară doar rezultatele brute ale participanților, fără un grup de comparație, nu poate distinge propriul efect de ceea ce s-ar fi întâmplat oricum.

Efectul de inerție nu este un procent fix; depinde în întregime de contrafactualul pentru populația și intervenția specifice (vezi [analiza contrafactuală](../analiza-contrafactuală/)). Evaluările dezvoltării regionale englezești de sub fostele Agenții de Dezvoltare Regională au găsit frecvent rate ale efectului de inerție în intervalul 20–60%, în funcție de tipul de sprijin pentru afaceri, motiv pentru care evaluările credibile ale programelor raportează un interval ajustat pentru efectul de inerție în loc de o singură cifră presupusă, și motiv pentru care finanțatori precum National Lottery Community Fund și Big Society Capital cer beneficiarilor să abordeze explicit efectul de inerție în raportarea rezultatelor, în loc să raporteze numere brute de participanți.

## Matematica

Secvența standard de ajustare a impactului net, așa cum este prevăzută în ghidurile britanice de evaluare (Magenta Book; HM Treasury/BIS Additionality Guide; ghiduri de evaluare ESIF și fonduri structurale):

```
Rezultat brut
  − Efect de inerție (ce s-ar fi întâmplat oricum)
  − Deplasare        (activitate/beneficiu mutat din altă parte, nu creat — vezi
                       displacement-and-attribution)
  − Scurgere         (beneficiu ajuns în afara grupului/zonei țintă)
  × Multiplicator    (activitate economică indirectă/indusă suplimentară, unde este pozitivă)
  = Impact net adițional
```

Rata efectului de inerție ca proporție:

```
Rata efectului de inerție = rezultate care s-ar fi produs fără intervenție
                            / total rezultate brute observate

Rezultate nete adiționale = Rezultate brute × (1 − Rata efectului de inerție)
```

## Exemplu lucrat

**Program de granturi pentru sprijinul afacerilor**: o schemă regională de granturi raportează că 500 de afaceri sprijinite și-au crescut numărul de angajați în anul următor, în medie cu 3 locuri de muncă fiecare — o afirmație brută de 1.500 de locuri de muncă.

Un grup de comparație potrivit de afaceri similare nesprijinite (vezi [analiza contrafactuală](../analiza-contrafactuală/)) arată că 40% din creșterea angajărilor afacerilor sprijinite s-ar fi produs oricum, pe baza performanței grupului potrivit în aceeași perioadă.

```
Rata efectului de inerție = 40%
Locuri de muncă nete adiționale = 1.500 × (1 − 0,40) = 900 de locuri
```

Realizarea raportabilă onest a programului este de 900 de locuri de muncă, nu 1.500 — o reducere de 40% numai din ajustarea pentru efectul de inerție, înainte de a lua în considerare deplasarea sau scurgerea.

**Program de ocupare al unei organizații caritabile**: o organizație caritabilă plasează 200 de șomeri pe termen lung în locuri de muncă la un cost de 600.000 £ (3.000 £ per plasare, brut). Datele naționale ale pieței muncii arată că, în absența oricărei intervenții, aproximativ 15% dintr-o cohortă comparabilă de șomeri pe termen lung găsește de lucru în aceeași perioadă prin mișcarea firească a pieței muncii.

```
Rata efectului de inerție = 15%
Plasări nete adiționale = 200 × (1 − 0,15) = 170
Costul real per plasare adițională = 600.000 £ / 170 ≈ 3.529 £
```

Cifra brută a costului per plasare (3.000 £) subestimează costul real al contribuției adiționale a organizației caritabile cu aproximativ 15%.

## Legătura cu ingineria software

Adiționalitatea și efectul de inerție contează direct pentru oricine construiește software de măsurare a impactului sau de gestionare a granturilor pentru sectorul public sau social:

- Sistemele de raportare a rezultatelor ar trebui să capteze din proiectare un grup de comparație sau de referință, nu doar rezultatele participanților — adăugarea ulterioară a unui contrafactual după lansarea unui sistem fără el este mult mai grea decât încorporarea captării de la început (vezi [analiza contrafactuală](../analiza-contrafactuală/)).
- Tablourile de bord care raportează doar numere brute de participanți vor supraestima sistematic impactul în fața finanțatorilor și organismelor de supraveghere; unde există estimări ale efectului de inerție (din literatura de evaluare sau dintr-un grup de comparație), software-ul ar trebui să afișeze cifra netă de efectul de inerție alături de cea brută, nu în locul ei.
- Aceasta se leagă direct de [rentabilitatea socială a investiției](../rentabilitatea-socială-a-investiției/), al cărei raport SROI este credibil numai după ce efectul de inerție (și deplasarea) au fost scăzute din rezultatele brute afirmate — un calculator SROI care omite acest pas va produce rapoarte umflate care nu rezistă controlului.

## Capcane

- **Raportarea rezultatelor brute ca și cum toate ar fi adiționale.** Aceasta este cea mai frecventă eroare de măsurare a impactului în raportarea granturilor și programelor; întrebați întotdeauna „s-ar fi întâmplat oricum?” înainte de a publica o cifră de titlu.
- **Presupunerea că un singur procent al efectului de inerție se aplică peste tot.** Efectul de inerție variază enorm în funcție de sector, populație și condițiile economice locale; folosiți un grup de comparație sau dovezi specifice sectorului în loc să reutilizați o cifră dintr-o evaluare fără legătură.
- **Confundarea efectului de inerție cu deplasarea.** Efectul de inerție privește rezultatele contrafactuale pentru aceiași participanți; deplasarea privește efectele asupra altor persoane sau locuri — vezi [deplasarea și atribuirea](../deplasare-și-atribuire/). Confundarea celor două duce la dublă numărare sau la subnumărare a ajustării.
- **Efect de inerție autoraportat de participanți.** A întreba beneficiarii „s-ar fi întâmplat aceasta fără ajutorul nostru?” produce estimări sistematic scăzute ale efectului de inerție (participanții tind să atribuie meritul programului); un grup de comparație independent este mult mai fiabil.

## Surse

- HM Treasury, „The Magenta Book: Central Government Guidance on Evaluation” (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, „Additionality Guide: A Standard Approach to Assessing the Additional Impact of Interventions” (ediția a 3-a), dezvoltat inițial cu English Partnerships și Housing Corporation.
- Comisia Europeană, „Evalsed: The Resource for the Evaluation of Socio-Economic Development” — ghid privind efectul de inerție, deplasarea și scurgerea în evaluarea fondurilor structurale.
- National Lottery Community Fund, „Guidance on Outcomes and Impact Reporting.” <https://www.tnlcommunityfund.org.uk/>
