# Productivitatea serviciilor publice

Productivitatea serviciilor publice măsoară cât de eficient convertesc cheltuielile publice intrările (personal, capital, bunuri și servicii) în realizări ajustate la calitate, pentru servicii — sănătate, educație, poliție, îngrijire socială — care nu au preț de piață și deci nici cifră de venituri la care să se raporteze costurile. Office for National Statistics din Regatul Unit publică această serie de la mijlocul anilor 2000 și rămâne cea mai dezvoltată metodologic încercare națională de a răspunde la „devine guvernul mai bun sau mai slab în a converti banii în servicii publice?”.

## De ce contează

Pe o piață, productivitatea este (valoarea realizării) / (costul intrării), iar valoarea realizării este observabilă deoarece cineva o plătește. O înlocuire de șold, un loc la școală și o patrulă de poliție nu au preț de vânzare, așa că în mod naiv nu puteți măsura decât *intrările* (ce s-a cheltuit) — ceea ce îi ispitește pe comentatori să trateze cheltuielile publice în creștere ca fiind automat rele, deoarece mai multe intrări cu activitate de titlu constantă par o productivitate în scădere. Metodologia ONS, expusă în publicațiile sale „Sources and Methods” privind productivitatea serviciilor publice, rezolvă aceasta construind un indice al *realizărilor* din volume de activitate (operații efectuate, elevi instruiți, infracțiuni investigate) și apoi *ajustând la calitate* acel indice — pentru sănătate, încorporând ratele de supraviețuire și timpii de așteptare; pentru educație, încorporând rezultatele școlare; pentru poliție, încorporând rezultate precum rezolvarea cazurilor — astfel încât un serviciu care efectuează același număr de operații, dar obține rate de supraviețuire mai bune, se înregistrează ca mai productiv, nu doar mai scump. Constatarea de titlu care revine în publicațiile ONS este sobră pentru sector: productivitatea serviciilor publice britanice a scăzut brusc în timpul pandemiei COVID-19 și, conform propriilor publicații ONS de la mijlocul anilor 2020, încă nu se redresase la nivelurile din 2019 în mai multe subsectoare, inclusiv sănătatea, chiar și cu cheltuielile în creștere — o diferență care reîncadrează „mai multă finanțare” și „mai multă productivitate” ca două întrebări cu totul separate.

## Matematica

```
Indice al realizărilor (volum) = Σ (activitate_i × pondere relativă a costului unitar_i), ponderat
                                 pe anul de bază peste toate activitățile serviciului (ex. operații
                                 de șold, operații de cataractă, consultații la medicul de familie),
                                 analog unui indice de volum Laspeyres/Paasche

Ajustare la calitate           = indice al realizărilor × factor de ajustare la calitate
                                 (ex. încorporând o schimbare a ratelor de supraviețuire, timpilor de
                                 așteptare, rezultatelor școlare sau recidivei ca multiplicator al volumului brut)

Indice al intrărilor           = Σ (ore de muncă × pondere a costului muncii) + (costul bunurilor/serviciilor,
                                 deflatat) + (consumul de capital)

Creșterea productivității totale a factorilor = % schimbare a indicelui realizărilor ajustat la calitate
                                                − % schimbare a indicelui intrărilor
```

## Exemplu lucrat

**Calcul ilustrativ al productivității sectorului acut al NHS** (structura urmează metodologia ONS):

```
Anul 1: indice al volumului realizărilor = 100,0 (an de bază), indice al intrărilor = 100,0
        → indice de productivitate = 100,0

Anul 2: volumul de activitate crește cu 3,0% (mai multe operații, mai multe programări)
        dar timpul mediu de așteptare se înrăutățește, aplicând o reducere de
        ajustare la calitate de −1,0%
        Indice al realizărilor ajustat la calitate = 100 × 1,030 × 0,990 = 101,97

        Intrările cresc: numărul de angajați +4,0%, alte costuri (deflatate) +1,5%,
        indice ponderat al intrărilor = 100 × 1,032 = 103,2

Creșterea productivității = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                           = 1,97% − 3,2% = −1,23 puncte procentuale

Interpretare: activitatea a crescut, dar intrările au crescut mai repede, iar calitatea a
scăzut ușor, deci productivitatea — realizare per unitate de intrare — a scăzut, deși
„s-a livrat mai multă îngrijire”.
```

Acesta este exact tiparul pe care publicațiile ONS l-au raportat în mod repetat pentru părți din NHS după pandemie: cheltuieli în creștere și activitate brută în creștere coexistând cu o productivitate măsurată în scădere odată ce atât ajustarea la calitate, cât și creșterea intrărilor sunt luate în calcul.

## Legătura cu ingineria software

Productivitatea serviciilor publice este analogul la nivel de populație al dezbaterilor privind productivitatea ingineriei (story points livrate versus [metrici DORA](../metricile-dora-pentru-valoarea-publică/) versus [metrici de flux](../metrici-de-flux-în-livrarea-guvernamentală/)): debitul brut fără ajustare la calitate este la fel de înșelător într-un spital precum „liniile de cod livrate” într-o echipă software. Echipele care construiesc conducte de date de performanță pentru departamente ar trebui să trateze ajustarea la calitate ca o etapă de transformare de primă clasă, versionată, nu ca o notă de subsol — deoarece credibilitatea ONS însuși se sprijină pe faptul că acea ajustare este transparentă, reproductibilă și revizuită pe măsură ce sosesc date mai bune despre calitate (ONS revizuiește estimările de productivitate din anii trecuți pe măsură ce datele de calitate de bază — ex. ratele de supraviețuire — sunt finalizate, deci orice sistem din aval care consumă aceste statistici trebuie să gestioneze revizuiri retroactive, nu doar să adauge perioade noi). Se intersectează direct și cu [costul total de proprietate](../costul-total-de-proprietate-în-it-ul-guvernamental/) și [productivitatea IA în sectorul public](../productivitatea-ia-în-sectorul-public/): un sistem care crește volumul brut de activitate fără a îmbunătăți sau menține calitatea nu este, după propria definiție a ONS, o îmbunătățire a productivității.

## Capcane

- **Tratarea creșterii intrărilor ca creștere a productivității**: mai multe cheltuieli care finanțează mai mult personal produc mai multă *activitate*, nu mai multă *productivitate*, cu excepția cazului în care crește și realizarea per unitate de intrare — cele două sunt confundate în mod curent în comentariul politic.
- **Ignorarea completă a ajustării la calitate**: un indice al realizărilor construit doar din numărători brute de activitate va arăta „câștiguri de productivitate” din a face mai mult din ceva cu valoare sau calitate mai mică; ajustarea la calitate a ONS există tocmai pentru a prinde aceasta.
- **Compararea indicilor de productivitate între subsectoare fără potrivirea vintage-ului metodologiei**: productivitatea sănătății, educației și poliției este construită din surse diferite de date de activitate și calitate, pe cicluri de revizuire diferite — o comparație naivă între sectoare compară instrumente incompatibile.
- **Citirea scăderii de productivitate dintr-un singur an ca tendință permanentă**: cifrele de productivitate din perioada pandemiei și de după au arătat o volatilitate semnificativă de la an la an pe măsură ce datele de calitate în sine (ex. listele de așteptare, recuperarea intervențiilor planificate) s-au deplasat; ONS avertizează constant împotriva supra-interpretării mișcărilor dintr-un singur an.

## Surse

- Office for National Statistics, seria „Public Service Productivity”. <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, „Public Service Productivity: Total, UK — Sources and Methods.” <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
