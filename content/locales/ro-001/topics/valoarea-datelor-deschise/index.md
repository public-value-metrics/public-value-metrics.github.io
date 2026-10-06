# Valoarea datelor deschise

Valoarea datelor deschise este problema estimării cât valorează datele guvernamentale și publice atunci când nu au preț: nu sunt vândute, deci nu există o linie de venituri, dar publicarea lor (înregistrări meteorologice, orare de transport, limite poștale, registre ale companiilor) generează în mod demonstrabil activitate economică și socială în aval. Evaluarea corectă contează deoarece „este gratuit de publicat” și „nu valorează nimic” sunt ambele greșite, iar un inginer software care decide dacă să deschidă un API sau un set de date are nevoie de un argument mai bun decât oricare dintre ele.

## De ce contează

Cea mai citată estimare de sus în jos provine din raportul McKinsey Global Institute din 2013 „Open data: Unlocking innovation and performance with liquid information”, care a estimat valoarea anuală potențială a datelor deschise în șapte domenii — educație, transport, produse de consum, electricitate, petrol și gaze, sănătate și finanțe de consum — la **3 până la 5 trilioane de dolari pe an** la nivel global, prin mecanisme care includ transparență crescută, potrivirea mai eficientă a ofertei cu cererea și permiterea unor produse și servicii noi construite pe date. Cifra este o estimare de scenariu, nu un rezultat măsurat, și este citată în mod curent greșit ca și cum ar fi venit pe care guvernul l-ar putea capta direct, când valoarea revine în mare parte terților — afaceri, cercetători, cetățeni — care folosesc datele, exact rostul deschiderii lor în loc de vânzare. Open Data Institute din Regatul Unit, co-fondat de Sir Tim Berners-Lee și Sir Nigel Shadbolt în 2012, a construit de atunci un corp de studii de caz mai granulare, de jos în sus — sector cu sector, set de date cu set de date — mult mai utile pentru un caz de afaceri real decât cifra de titlu McKinsey, deoarece arată mecanismul creării de valoare, nu doar mărimea ei agregată.

## Matematica

Datele deschise nu au preț de piață, deci metodele de evaluare îl înlocuiesc; trei abordări revin, iar niciuna nu este suficientă singură:

```
1. Metoda costului evitat / a costului de înlocuire:
   valoare ≈ cât ar fi plătit utilizatorii pentru a produce sau licenția
   singuri datele echivalente — o limită inferioară, ignoră valoarea creată
   de utilizări pe care producătorul inițial nu le-a anticipat niciodată

2. Metoda analogului de piață / a activității din aval:
   valoare ≈ venituri sau economii generate de afaceri/servicii construite
   pe date (ex. aplicații de navigație construite pe date deschise de hartă și trafic)
   — surprinde activitate economică reală, dar este greu de atribuit curat
   publicării datelor în sine (vezi additionality-and-deadweight)

3. Metoda contingentă/a preferințelor declarate:
   valoare ≈ cât spun utilizatorii că ar plăti sau timpul pe care spun că li-l
   economisește — vezi stated-preference-valuation pentru metoda generală
   și părtinirile ei

Niciuna nu produce o cifră la fel de curată ca un preț de piață; cazurile
de afaceri credibile pentru date deschise triangulează cel puțin două și
sunt explicite despre care mecanism face treaba.
```

## Exemplu lucrat

**Publicarea ilustrativă a datelor naționale de cartografie/adrese** (metodologie după studii de caz în stil ODI, cifre ilustrative pentru scara pe care o găsesc de obicei asemenea studii):

```
Estimare a costului evitat:
  Afaceri care altfel ar licenția comercial date echivalente de potrivire a adreselor,
  la un cost mediu estimat al licenței de 4.000 £/an, în rândul a circa 15.000 de IMM-uri
  estimate care folosesc acum setul de date deschis gratuit
  = 15.000 × 4.000 £ = 60.000.000 £/an doar în costuri de licențiere evitate

Estimare a activității din aval (mai speculativă, cere un contrafactual):
  Produse noi de rutare a livrărilor și logistică construite pe datele deschise
  care nu ar exista, sau ar fi sensibil mai slabe, fără ele —
  cere o comparație cu contrafactualul în care datele rămân închise sau licențiate
  comercial ([analiza contrafactuală](../analiza-contrafactuală/)), deoarece o parte
  din acea activitate s-ar produce oricum pe date plătite la un preț mai mare,
  ceea ce este efect de inerție în sensul „valorii create prin deschidere”

Un caz de afaceri apărabil raportează cifra costului evitat ca limită
inferioară solidă și tratează cifra activității din aval ca un scenariu
de limită superioară, nu ca un fapt.
```

## Legătura cu ingineria software

Pentru ingineri, întrebarea practică a valorii datelor deschise este de obicei mai îngustă decât cifrele de titlu naționale: deschiderea acestui API sau set de date anume (în loc de a-l ține în spatele unui acord cu un partener) crește reutilizarea suficient pentru a justifica costul continuu de documentare, versionare și suport ca interfață publică? Acel cost de întreținere este real și este contrapartea economiei „construiește o dată, reutilizează des” a [guvernului ca platformă](../guvernul-ca-platformă/) — cele două subiecte sunt veri apropiați, unul despre cod și infrastructură partajate, celălalt despre date partajate. Orice afirmație despre valoarea datelor deschise ar trebui verificată față de [adiționalitate și efect de inerție](../adiționalitate-și-efect-de-inerție/) înainte de a intra într-un caz de afaceri: activitatea care s-ar fi produs oricum, pe date licențiate comercial, nu este valoare creată de *deschidere*.

## Capcane

- **Citarea cifrei McKinsey de 3–5 trilioane $ ca specifică Regatului Unit sau ca cotă a acestui set de date**: este o estimare de scenariu globală, pe șapte sectoare, din 2013 — folosirea ei ca multiplicator precis pentru un singur set de date național denaturează ce este numărul.
- **Niciun contrafactual**: revendicarea meritului pentru toată activitatea economică din aval construită pe date deschise, fără a întreba cât din ea s-ar fi produs oricum pe date plătite sau licențiate la un preț mai mare (vezi [adiționalitatea și efectul de inerție](../adiționalitate-și-efect-de-inerție/) și [analiza contrafactuală](../analiza-contrafactuală/)).
- **Confundarea costului de producție cu valoarea creată**: un set de date costisitor de colectat nu este automat valoros de publicat, iar unul ieftin nu este automat de valoare mică — valoarea urmărește utilizarea din aval, nu costul din amonte.
- **Ignorarea costului continuu de întreținere al „deschiderii”**: publicarea unui extras CSV unic nu este același angajament ca rularea unui API deschis documentat, versionat, suportat — subfinanțarea celui din urmă după anunțul lansării este un mod de eșec frecvent.

## Surse

- McKinsey Global Institute, „Open data: Unlocking innovation and performance with liquid information” (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
