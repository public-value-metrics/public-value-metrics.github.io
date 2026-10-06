# Rentabilitatea socială a investiției (SROI)

Rentabilitatea socială a investiției este un cadru pentru măsurarea, monetizarea și contabilizarea unui concept larg de valoare — socială, de mediu și economică — și exprimarea ei ca raport față de resursele investite, de exemplu „1,44 £ de valoare socială pentru fiecare 1 £ investită”. A fost conceput pentru a extinde logica contabilității financiare la rezultate pe care piețele nu le prețuiesc, fără a pierde disciplina contabilității: fiecare număr dintr-un SROI trebuie să poată fi urmărit până la un rezultat definit de părțile interesate, o bază de dovezi și o ajustare explicită pentru ceea ce s-ar fi întâmplat oricum.

## De ce contează

SROI este întreținut de Social Value UK și Social Value International, organisme succesoare ale SROI Network, al cărui „A Guide to Social Return on Investment” (2012) rămâne metodologia de referință. Cadrul se sprijină pe șapte principii — implicați părțile interesate, înțelegeți ce se schimbă, evaluați lucrurile care contează, includeți doar ce este material, nu supraevaluați, fiți transparenți și verificați rezultatul — iar principiul cinci, „nu supraevaluați”, este cel la care eșuează majoritatea rapoartelor SROI din practică. Un raport produs omițând ajustările pentru efectul de inerție și atribuire nu este un SROI; este un număr de marketing care poartă haine de SROI. Inginerii software care construiesc instrumente de raportare pentru organizații caritabile, întreprinderi sociale sau comisari trebuie să știe diferența, deoarece instrumentul fie va impune disciplina, fie va face ușoară omiterea ei.

## Matematica

SROI depinde de o [teorie a schimbării](../teoria-schimbării/) pentru a identifica ce rezultate intră în sferă și le exprimă folosind același lanț de responsabilitate ca un [model logic](../modelul-logic/):

```
Raport SROI = Valoarea actualizată a rezultatelor / Valoarea intrărilor

Proces:
 1. Stabiliți sfera și identificați părțile interesate ale căror rezultate vor fi măsurate
 2. Cartografiați rezultatele (o teorie a schimbării, dovedită cu părțile interesate, nu presupusă)
 3. Dovediți rezultatele și dați-le o valoare folosind proxy-uri financiare
 4. Stabiliți impactul: valoare brută − efect de inerție − atribuire − deplasare, apoi aplicați scăderea (drop-off)
 5. Calculați SROI: valoarea actualizată netă a impactului ÷ valoarea intrărilor
 6. Raportați, folosiți și încorporați — raportul este un instrument de comunicare, nu punctul final
```

Efectul de inerție, atribuirea și deplasarea sunt tratate în [adiționalitate și efect de inerție](../adiționalitate-și-efect-de-inerție/) și [deplasare și atribuire](../deplasare-și-atribuire/); toate trei există pentru a izola impactul [contrafactual](../analiza-contrafactuală/) real de rezultatul brut.

## Exemplu lucrat

**Program de ocupare al unei autorități locale**: costul anual al intrărilor 250.000 £. Șaizeci de participanți trec în angajare susținută; un proxy financiar pentru acest rezultat (creșterea bunăstării, dependență redusă de beneficii și venituri fiscale combinate) este 8.500 £ per persoană pentru primul an — vezi [bazele de date de costuri unitare](../baze-de-date-de-costuri-unitare/) pentru originea unor astfel de proxy-uri.

- Valoarea brută a rezultatului: 60 × 8.500 £ = 510.000 £
- Minus efectul de inerție (40% ar fi găsit probabil de lucru fără program): 510.000 £ × 0,60 = 306.000 £
- Minus atribuirea (30% din schimbarea rămasă se datorează sprijinului altor agenții): 306.000 £ × 0,70 = 214.200 £
- Rezultatul din anul 2 cu o scădere de 30%: 214.200 £ × 0,70 = 149.940 £, actualizat la 3,5%/an (vezi [rata de actualizare socială](../rata-de-actualizare-socială/)): 149.940 £ ÷ 1,035 = 144.870 £
- Valoarea actualizată totală a impactului: 214.200 £ + 144.870 £ = 359.070 £
- **Raport SROI: 359.070 £ ÷ 250.000 £ = 1,44**, raportat ca „1,44 £ de valoare socială pentru fiecare 1 £ investită”

**Organizație caritabilă**: un serviciu de prietenie de 60.000 £ reduce singurătatea a 80 de persoane în vârstă, evaluată la un proxy de 1.100 £/persoană/an. Valoare brută 88.000 £; după 35% efect de inerție și 15% atribuire, impactul net este 88.000 £ × 0,65 × 0,85 = 48.620 £, un raport SROI de 0,81 — sub pragul de rentabilitate, ceea ce este o constatare legitimă și utilă, nu un eșec de redactare.

## Legătura cu ingineria software

Un calculator SROI care permite utilizatorului să introducă numărători de rezultate și valori proxy, dar nu are câmp obligatoriu pentru efectul de inerție, atribuire sau o teorie a schimbării legată, va produce implicit rapoarte umflate, deoarece omiterea ajustărilor este calea cea mai puțin rezistentă. Încorporați disciplina în schemă: fiecare rând de rezultat ar trebui să trimită la un grup de părți interesate, o cantitate dovedită, un proxy financiar cu sursa lui și câmpuri neopționale pentru efectul de inerție/atribuire. Vezi [rezultate versus realizări](../rezultate-versus-realizări/) pentru distincția de care depinde cartografierea rezultatelor SROI și [modelul logic](../modelul-logic/) pentru lanțul pe care ar trebui să-l oglindească instrumentul în modelul său de date.

## Capcane

- **Omiterea efectului de inerție și a atribuirii.** Raportul de titlu fără aceste ajustări este o cifră brută, nu una de impact net, iar principiile Social Value UK cer explicit ambele.
- **Compararea rapoartelor între organizații.** Un raport SROI depinde de alegerile de sferă și de proxy făcute caz cu caz; a trata un raport de 4:1 dintr-un raport ca fiind „mai bun” decât unul de 2:1 din altul ignoră faptul că ipotezele nu sunt standardizate ca un raport contabil financiar.
- **Numărarea dublă a proxy-urilor suprapuse.** Suprapunerea unui proxy „singurătate redusă” cu unul „bunăstare mintală îmbunătățită” pentru aceiași beneficiari poate evalua de două ori o singură schimbare de fond.
- **Omiterea implicării părților interesate.** Principiul unu cere ca rezultatele să fie definite cu oamenii care le trăiesc, nu presupuse de analistul care construiește modelul.

## Surse

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, „A Guide to Social Return on Investment” (2012).
- Social Value International, „The Principles of Social Value.” <https://www.socialvalueint.org/principles>
