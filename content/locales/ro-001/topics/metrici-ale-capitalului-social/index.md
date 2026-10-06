# Metrici ale capitalului social

Metricile capitalului social cuantifică rețelele, încrederea și participarea civică care permit comunităților și instituțiilor să funcționeze eficient — „țesutul conjunctiv” care nu are linie în niciun bilanț, dar care reduce vizibil costurile și frecarea când este prezent și le crește vizibil când lipsește. Încadrarea modernă vine din „Bowling Alone” al lui Robert Putnam (2000), care a distins capitalul de legătură (bonding — relații în interiorul unui grup similar) de capitalul de punte (bridging — relații între grupuri diferite); Office for National Statistics din Regatul Unit a construit de atunci un set permanent de indicatori pentru urmărirea lui la nivel național.

## De ce contează

Afirmația empirică centrală a lui Putnam — documentată prin scăderea numărului de membri ai asociațiilor civice, a participării la biserică și a participării la sindicate din SUA în a doua parte a secolului XX — a fost că capitalul social prezice rezultate pe care economia convențională le explică greu: criminalitate mai mică, bunăstare mai bună a copiilor, administrație locală mai eficientă, redresare economică mai rapidă după șocuri. Capitalul de legătură (relații puternice în interiorul unui grup unit) este bun pentru sprijin reciproc, dar se poate osifica în izolare; capitalul de punte (relații mai slabe între grupuri diferite) este ceea ce se corelează de obicei cu accesul la oportunități, fluxul de informații și încrederea instituțională. ONS a luat aceasta suficient de în serios pentru a construi un cadru național de indicatori — seria sa „Social Capital in the UK” (<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>) urmărește patru piloni: relații personale, sprijin din rețeaua socială, implicare civică și încredere și norme de cooperare, fiecare construit din întrebări de sondaj consacrate (Community Life Survey, Understanding Society). Pentru serviciile digitale publice, capitalul social este dublu relevant: este atât un rezultat pe care unele programe încearcă să-l construiască (finanțare pentru reziliența comunității, prescripție socială), cât și un input care determină cât de bine va fi efectiv adoptat un serviciu — un serviciu lansat într-o comunitate cu încredere ridicată și rețele bune se va răspândi din gură în gură într-un fel în care un serviciu identic într-o zonă cu încredere scăzută nu o va face.

## Matematica

```
Cadrul ONS în patru piloni (indicatori, ilustrativ):

Relații personale:           % care au pe cineva pe care se pot baza într-o criză
Sprijin din rețeaua socială: % care ar putea împrumuta bani de la prieteni/familie la nevoie
Implicare civică:            % care au făcut voluntariat sau acțiune civică în ultimele 12 luni
Încredere și norme de cooperare: % care sunt de acord că „majorității oamenilor li se poate acorda încredere”

ONS nu publică un singur scor compus — pilonii sunt raportați
separat, deliberat, deoarece agregarea lor într-un singur indice ar
ascunde care pilon anume este slab.

Distincția legătură/punte a lui Putnam (cadru, nu formulă):
  capital de legătură ≈ densitatea relațiilor în interiorul unui grup omogen
  capital de punte    ≈ frecvența/forța relațiilor între grupuri distincte
```

## Exemplu lucrat

**Instantaneu al capitalului social al unui cartier**: un sondaj în stil Community Life Survey într-o zonă locală constată că 78% au pe cineva pe care se pot baza într-o criză (relații personale), 61% ar putea împrumuta bani la nevoie (sprijin din rețea), 24% au făcut voluntariat în ultimul an (implicare civică) și 41% sunt de acord că „majorității oamenilor li se poate acorda încredere” (încredere și norme) — față de medii naționale de aproximativ 85%, 70%, 30% și respectiv 45% (ilustrativ, calibrați față de buletinul ONS curent). Zona rămâne sub medie pe fiecare pilon, dar cel mai puternic la încredere (41% vs. 45% național, o diferență de 4 puncte) și implicare civică (24% vs. 30%, o diferență de 6 puncte) — semnalând implicarea civică, nu încrederea, ca cel mai mare deficit relativ care merită o investiție țintită (un program de granturi comunitare, să zicem) mai degrabă decât o inițiativă generică „construiți încredere”.

**Legătură vs. punte, proiectarea serviciilor**: un program de ocupare dintr-o comunitate unită constată că trimiterile circulă repede în interiorul comunității (capital de legătură ridicat: vestea se răspândește în câteva zile), dar programul se străduiește să ajungă la rezidenții din afara acelei rețele (capital de punte scăzut: adoptarea în afara comunității de bază este aproape zero după luni). Remediul implicat nu este „mai mult marketing”, ci construirea deliberată de punți — parteneriate cu organizații situate *în afara* rețelei existente, deoarece capitalul de legătură singur nu poate rezolva o problemă de capital de punte.

## Legătura cu ingineria software

- Platformele digitale care direcționează ajutorul reciproc, voluntariatul sau granturile comunitare (un serviciu „conector local”, de exemplu) construiesc literal infrastructură de capital de punte; metrica lor de succes ar trebui să fie diversitatea de rețea a conexiunilor făcute, nu doar numărul de tranzacții — vezi [guvernul ca platformă](../guvernul-ca-platformă/) pentru tiparul mai larg al infrastructurii pe care alții construiesc valoare.
- Acolo unde teoria schimbării unui program vizează explicit capitalul social ca rezultat (un fond pentru reziliența comunității, un serviciu de prescripție socială), [teoria schimbării](../teoria-schimbării/) și [modelul logic](../modelul-logic/) ale acestuia ar trebui să numească pilonul specific (încredere, implicare civică, sprijin din rețea) pe care se așteaptă să-l miște, în loc de un rezultat nediferențiat „construirea comunității” care nu poate fi măsurat față de linia de bază ONS.
- Indicatorii capitalului social sunt o lentilă utilă de echitate alături de [Indicele Deprivării Multiple](../indicele-deprivării-multiple/): o zonă poate fi deprivată ca venit, dar bogată social, sau invers, iar cele două indică intervenții foarte diferite.

## Capcane

- **Prăbușirea celor patru piloni ONS într-un singur scor compus** — ONS nu face asta în mod deliberat; un singur număr ascunde care pilon anume determină o valoare scăzută, iar medierea maschează o comunitate cu încredere ridicată dar dezangajată civic față de una opusă.
- **Presupunerea că capitalul social este întotdeauna bun** — capitalul de legătură dens într-un grup izolat poate rezista activ instituțiilor din exterior (inclusiv serviciilor guvernamentale); propria analiză a lui Putnam tratează legătura și puntea ca bunuri diferite, cu efecte diferite, uneori conflictuale.
- **Folosirea măsurilor de capital social bazate pe sondaj ca metrică operațională în timp real** — sondajele de bază (Community Life Survey, Understanding Society) rulează anual sau mai rar; tratați datele de capital social ca un indicator contextual cu mișcare lentă, nu ca ceva ce un tablou de bord al unui serviciu poate actualiza săptămânal.

## Surse

- Putnam RD. „Bowling Alone: The Collapse and Revival of American Community.” Simon & Schuster, 2000.
- ONS. „Social capital in the UK: bulletins.” <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. „Community Life Survey” (anual).
