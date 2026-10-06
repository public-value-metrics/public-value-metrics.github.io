# Tabloul de scor al valorii publice

Tabloul de scor al valorii publice adaptează tabloul de scor echilibrat (balanced scorecard) al lui Robert Kaplan și David Norton din 1992 — construit pentru firme care optimizează profitul pe perspectivele financiară, a clientului, a proceselor interne și a învățării și creșterii — la organizații al căror rezultat final este o misiune, nu o marjă. Obligă un organism public să raporteze performanța pe mai multe dimensiuni ireductibile simultan, în loc să prăbușească totul într-un singur număr care ascunde compromisurile.

## De ce contează

Argumentul original al lui Kaplan și Norton, în Harvard Business Review, era că o singură metrică financiară este un indicator întârziat care nu spune nimic despre *de ce* se va schimba performanța trimestrul următor. În sectorul privat remediul au fost patru perspective legate. În guvern, „triunghiul strategic” al lui Mark Moore (din *Creating Public Value*, 1995) oferă structura echivalentă: un serviciu trebuie să livreze simultan **valoare publică** (rezultatul misiunii), să mențină **legitimitate și sprijin** (susținere politică și publică) și să fie **fezabil operațional** (livrabil cu resursele și capacitatea efectiv disponibile). *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies* (2003) al lui Paul Niven este manualul practicianului pentru traducerea celor patru casete ale lui Kaplan și Norton în acest triunghi — de obicei redenumind „financiar” ca „administrarea resurselor”, punând „misiunea” în vârf în loc de „valoarea pentru acționari” la bază și tratând perspectivele clientului și ale părților interesate ca egale, nu subordonate profitului. Motivul pentru care contează pentru o echipă de livrare este că un serviciu digital public judecat doar pe o metrică financiară sau de eficiență (cost per tranzacție, să zicem) va subinvesti sistematic în dimensiunile de legitimitate și rezultat pe care metrica financiară nu le vede.

## Matematica

Tabloul de scor al valorii publice este un cadru, nu o formulă, dar structura sa este fixă și merită reprodusă exact:

```
Perspectivă           Întrebarea sectorului public               Indicator exemplu
--------------------------------------------------------------------------------
Misiune / rezultate    Obținem valoarea publică pentru care       Măsură de rezultat la nivel de
                       existăm?                                    populație (vezi outcomes-vs-outputs)
Administrarea          Folosim banii publici eficient și în        Cost per rezultat, abatere
  resurselor           limitele autorizate?                         bugetară
Client / utilizator    Pot utilizatorii și cetățenii accesa        Rata de finalizare, satisfacție
                       serviciul și beneficia de el?
Legitimitate / sprijin Ne mai susțin mandanții politici,          Metrici de încredere, constatări
                       organismele de supraveghere și publicul?    de audit, plângeri întemeiate
Proces intern /        Avem capacitatea și procesul pentru a       Fluctuația personalului, timp
  învățare             continua să ne îmbunătățim?                  de ciclu, vechimea restanțelor

Un tablou de scor apărabil raportează 3–5 indicatori per perspectivă, aleși astfel
încât nicio perspectivă să nu poată fi manipulată fără ca prejudiciul să apară în alta.
```

## Exemplu lucrat

**Departamentul de îngrijire socială pentru adulți al unei autorități locale**: un tablou de scor pentru un serviciu de reabilitare (sprijin pe termen scurt pentru a ajuta oamenii să-și recapete independența după o spitalizare) raportează:

```
Misiune:        68% dintre utilizatorii serviciului nu mai au nevoie de îngrijire continuă după 6 săptămâni (țintă 65%)
Administrare:   cost per episod de reabilitare finalizat = 1.850 £ (ipoteză bugetară 2.000 £)
Client:         satisfacția utilizatorilor 82%, așteptare medie pentru începerea serviciului 4,1 zile
Legitimitate:   3 plângeri întemeiate la 1.000 de episoade; consiliul de protecție a adulților
                evaluează serviciul drept „bun”
Proces:         rata posturilor vacante 14%, volum mediu de cazuri 23 (plafon sigur de volum: 25)
```

Citite izolat, cifrele de misiune și administrare arată ca o poveste simplă de succes: sub buget și peste ținta de rezultat. Citite împreună cu rândul de proces, rata posturilor vacante de 14% față de un plafon de 25 de cazuri arată că rezultatul bun este cumpărat funcționând aproape de niveluri nesigure de personal — un avertisment pe care cifra de misiune singură nu l-ar scoate niciodată la iveală și exact modul de eșec pe care îl invită un KPI cu o singură perspectivă (vezi [KPI-urile sectorului public](../kpi-urile-sectorului-public/)).

## Legătura cu ingineria software

Pentru o echipă care construiește un tablou de bord intern sau orientat spre public, tabloul de scor este un argument direct împotriva unui singur widget „scor de sănătate”: construiți câte un panou pentru fiecare perspectivă și rezistați presiunii produsului de a le sintetiza într-un semafor, deoarece pasul de sinteză este exact locul unde informația despre compromisuri este distrusă. Se mapează și curat pe structurile OKR ale echipelor de produs: un OKR de misiune fără un OKR asociat de administrare sau proces reproduce modul de eșec al metricii unice împotriva căruia scriau Kaplan și Norton în 1992. Vezi [valoarea publică](../valoarea-publică/) pentru teoria de fond a lui Moore despre ce ar trebui să conțină de fapt caseta „misiune” și [metricile de încredere și legitimitate](../metrici-de-încredere-și-legitimitate/) pentru modul de a popula perspectiva legitimității cu indicatori reali, cu sursă, în loc de un proxy pe care nimeni nu-l poate apăra.

## Capcane

- **Prăbușirea tabloului de scor într-un singur scor**: medierea a patru perspective într-un singur număr reintroduce exact problema — un scor prost de legitimitate mascat de un scor bun de administrare — pe care tabloul de scor există să o prevină.
- **Copierea neschimbată a perspectivei „financiare” a sectorului privat**: perspectiva de administrare a unui organism public privește respectarea bugetelor autorizate, adesea cu destinație fixă, nu maximizarea veniturilor — redenumirea lui Niven nu este cosmetică.
- **Alegerea indicatorilor pe care echipa care deține tabloul de scor îi poate muta unilateral**: un indicator de legitimitate provenit de la aceeași echipă pe care o judecă (tratarea plângerilor autoraportată, de exemplu) nu este o dovadă independentă.
- **Construirea tabloului de scor o dată și niciodată reluarea ponderilor sau a indicatorilor**: Kaplan și Norton au intenționat o revizuire anuală a strategiei; un tablou de scor înghețat ani de zile se îndepărtează de misiunea pe care a fost construit s-o urmărească.

## Surse

- Robert S. Kaplan și David P. Norton, „The Balanced Scorecard: Measures That Drive Performance,” *Harvard Business Review*, ianuarie–februarie 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley, 2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University Press, 1995.
