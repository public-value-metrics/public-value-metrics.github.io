# Valoarea securității cibernetice a sectorului public

Valoarea securității cibernetice a sectorului public este disciplina evaluării reducerii riscului: cât valorează reducerea probabilității unei breșe a datelor cetățenilor, dat fiind că cheltuielile de securitate nu produc niciun rezultat vizibil când funcționează și unul foarte vizibil când eșuează? Pentru un serviciu care deține înregistrări de beneficii, date medicale sau înregistrări fiscale, această proprietate de „invizibil când funcționează” este exact motivul pentru care are nevoie de un argument explicit de valoare, nu doar de o bifă de conformitate.

## De ce contează

Cyber Assessment Framework (CAF) al National Cyber Security Centre din Regatul Unit oferă organizațiilor din sectorul public un mod structurat de a face din securitate o disciplină evaluabilă, bazată pe rezultate, în loc de o listă de verificare: definește patru obiective de nivel înalt (gestionarea riscului de securitate, protecția împotriva atacurilor cibernetice, detectarea evenimentelor de securitate cibernetică și minimizarea impactului incidentelor) împărțite în rezultate contributive față de care poate fi evaluat un proprietar de sistem, în același spirit ca punctul 9 din [standardul serviciilor digitale](../standardul-serviciilor-digitale/) („creați un serviciu sigur care protejează confidențialitatea utilizatorilor”). Împotriva a ceea ce protejează evaluarea CAF există o etichetă de preț documentată: raportul IBM Cost of a Data Breach urmărește costul mediu al unei breșe pe sectoare și a constatat constant sectorul public spre capătul inferior al intervalului comparativ cu finanțele sau sănătatea — edițiile recente plasează media sectorului public în jur de 2,6–2,9 milioane de dolari per breșă — dar „mai mic decât finanțele” nu înseamnă „mic”, iar breșele guvernamentale poartă costuri pe care cifrele raportului nu le surprind pe deplin: pierderea încrederii cetățenilor în canalele digitale, care deprimă [adoptarea digitală](../economii-din-mutarea-canalelor/) de care depind cazurile de afaceri ale mutării canalelor, și costul politic și juridic al expunerii datelor pe care statul i-a obligat pe cetățeni să le dea.

## Matematica

Investiția în securitate este evaluată în felul în care este evaluată orice cheltuială de reducere a riscului: ca reducere a pierderii așteptate, folosind identitatea clasică a managementului riscului.

```
Pierdere anuală așteptată (ALE) = Pierdere unică așteptată (SLE)
                                 × Rata anuală de apariție (ARO)

Valoarea unui control de securitate =
  ALE_înainte_de_control − ALE_după_control − costul anual al controlului

Un control merită finanțat când:
  (ALE_înainte − ALE_după) > costul anual al controlului

Evaluarea CAF nu produce direct o probabilitate, dar profilul de rezultate CAF al unui
serviciu (ce rezultate contributive sunt „atinse”, „parțial atinse” sau „neatinse”) este
un input proxy rezonabil pentru estimarea ARO — un sistem cu acces privilegiat negestionat
sau fără un plan de răspuns la incidente testat are un ARO realist sensibil mai mare decât
unul care le are pe amândouă.
```

## Exemplu lucrat

**Sistem de gestionare a cazurilor al unui consiliu de comitat care deține înregistrări de îngrijire socială pentru 40.000 de rezidenți**:

```
Pierdere unică așteptată (cost al breșei), folosind o medie a sectorului public
dintr-un raport recent IBM Cost of a Data Breach ≈ 2,1 mil. £
(cifră convertită, de ordin de mărime — recalculați întotdeauna din ediția
curentă a raportului în loc să refolosiți un număr fix)

ARO curent (acces privilegiat negestionat, răspuns la incidente netestat,
conform unei autoevaluări CAF interne cu mai multe rezultate
„neatinse”) ≈ estimat 8% pe an
  ALE_înainte = 2,1 mil. £ × 0,08 = 168.000 £/an

Control propus: gestionarea accesului privilegiat + plan testat de răspuns la
incidente, mutând rezultatele CAF relevante la „atins”,
estimat să reducă ARO la 3%/an
  ALE_după = 2,1 mil. £ × 0,03 = 63.000 £/an

Costul anual al controlului (unelte + proces + testare) = 45.000 £

Valoarea controlului = (168.000 − 63.000) − 45.000 = 60.000 £/an
  net pozitivă — finanțați. Aritmetica arată și că controlul ar merita în continuare
  finanțat la un cost aproape triplu, genul de verificare de sensibilitate care
  ar trebui să însoțească orice cifră ALE construită pe probabilități estimate.
```

## Legătura cu ingineria software

Inginerii dețin majoritatea pârghiilor din ecuația ALE: proiectarea controlului accesului, igiena dependențelor și a patch-urilor, acoperirea cu jurnalizare și detecție și uneltele de răspuns la incidente mută direct termenul ARO, motiv pentru care evaluarea CAF se citește ca o revizuire de arhitectură tehnică la fel de mult ca un audit de politică. Aceasta este [datoria tehnică ca eroziune a valorii publice](../datoria-tehnică-ca-eroziune-a-valorii-publice/) în forma ei cea mai acută — sisteme nepatch-uite, nemonitorizate, prost controlate la acces sunt datorie a cărei dobândă se plătește în risc de coadă, nu într-o frână constantă — și ar trebui reconciliată cu [costul total de proprietate în IT-ul guvernamental](../costul-total-de-proprietate-în-it-ul-guvernamental/) astfel încât cheltuielile de securitate să nu fie tratate separat de costul real de rulare al sistemului. Este și un input direct în evaluările de [valoare pentru bani](../valoarea-pentru-bani/) conform Green Book: costul ajustat la risc face parte din partea de „cost” a oricărei evaluări a opțiunilor, nu un adaos atașat la sfârșit.

## Capcane

- **Tratarea autoevaluării CAF ca securitatea în sine**: o evaluare completată descrie o postură de securitate; nu o creează — valoarea este în rezultatele obținute, nu în document.
- **Folosirea costurilor medii globale de breșă ca estimare locală fără ajustare**: cifrele IBM sunt medii pe eșantioane mari, variate; pierderea unică așteptată realistă a unei mici autorități locale este rareori aceeași cu cea a unui departament al guvernului național.
- **Ignorarea psihologiei riscurilor de coadă în deciziile de investiții**: o probabilitate anuală scăzută face ușor de amânat la nesfârșit cheltuielile de securitate, exact până în anul în care nu se mai poate — testarea de sensibilitate a calculului ALE față de un interval de ARO, ca în exemplul lucrat, contracarează aceasta.
- **Numărarea doar a costului breșei în stil IBM, nu și a costului încrederii**: o breșă care deprimă dorința cetățenilor de a folosi canalele digitale erodează cazul [economiilor din mutarea canalelor](../economii-din-mutarea-canalelor/) ani de zile după aceea, un cost rareori inclus în estimările costului breșei.

## Surse

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, punctul 9: creați un serviciu sigur care protejează confidențialitatea utilizatorilor. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
