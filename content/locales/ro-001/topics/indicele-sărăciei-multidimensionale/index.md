# Indicele Sărăciei Multidimensionale (MPI)

MPI măsoară sărăcia ca deprivări suprapuse pe care o persoană le experimentează simultan — în sănătate, educație și nivel de trai — în loc de venit singur căzând sub o linie. A fost dezvoltat de Oxford Poverty and Human Development Initiative (OPHI) cu Sabina Alkire și James Foster și este publicat împreună cu PNUD în fiecare Raport al Dezvoltării Umane din 2010, alături de [Indicele Dezvoltării Umane](../indicele-dezvoltării-umane/).

## De ce contează

Liniile de sărăcie bazate pe venit ratează oamenii care au suficient venit în numerar, dar le lipsește apa curată, școlarizarea sau au supraviețuit decesului unui copil — și ratează faptul că deprivările se grupează: o gospodărie fără electricitate are în mod disproporționat șanse să-i lipsească și canalizarea și să aibă un copil subnutrit. Metoda Alkire-Foster, pe care este construit MPI, numără deprivările fiecărei persoane în zece indicatori grupați în trei dimensiuni cu pondere egală — sănătate, educație, nivel de trai — și clasifică pe cineva drept „sărac conform MPI” doar dacă scorul său ponderat de deprivare trece un prag fix, surprinzând suprapunerea pe care un set de statistici separate cu un singur indicator nu o poate surprinde. OPHI publică metodologia completă și datele pe țări la <https://ophi.org.uk/multidimensional-poverty-index/>; MPI-ul global pe care îl întreține împreună cu PNUD acoperă acum peste 110 țări. Pentru software construit pentru programe de combatere a sărăciei — transferuri de numerar, triere în asistența socială, țintirea ajutorului — setul de indicatori al MPI este adesea cel mai apropiat lucru de o schemă standardizată de deprivare deja validată de zeci de oficii naționale de statistică.

## Matematica

```
10 indicatori, 3 dimensiuni, fiecare dimensiune ponderată 1/3:

Sănătate (1/3):         nutriție (1/6), mortalitate infantilă (1/6)
Educație (1/3):         ani de școlarizare (1/6), frecvența școlară (1/6)
Nivel de trai (1/3):    combustibil de gătit, canalizare, apă potabilă,
                         electricitate, locuință, bunuri (câte 1/18 fiecare)

scor de deprivare (c) = suma ponderilor indicatorilor în care o persoană este deprivată

o persoană este „săracă conform MPI” dacă c ≥ 1/3 (pragul de sărăcie, k = 33%)

H (rata incidenței) = numărul celor săraci conform MPI / populația totală
A (intensitatea)    = scorul mediu de deprivare doar în rândul celor săraci conform MPI

MPI = H × A
```

Deoarece MPI înmulțește *ponderea* celor săraci cu *cât de săraci* sunt, două regiuni cu aceeași rată a incidenței pot avea scoruri MPI foarte diferite dacă deprivările sunt mai severe într-una — aceeași logică „fără substituție între dimensiuni” din spatele mediei geometrice a HDI.

## Exemplu lucrat

**Sondaj național pe 1.000 de persoane**: 350 sunt identificate ca sărace multidimensional (scor de deprivare ≥ 33%). Doar între acele 350 de persoane sărace, scorul mediu de deprivare este 45%.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Compararea a două districte cu incidență egală**: Districtul A are H = 0,30 și A = 0,40 (mulți săraci, moderat deprivați); Districtul B are H = 0,30 și A = 0,60 (același număr de săraci, dar mai sever deprivați — lipsiți simultan de electricitate *și* canalizare *și* frecvență școlară).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Aceeași rată a incidenței, MPI cu 50% mai mare în Districtul B — un sistem de țintire bazat doar pe sărăcia ca incidență ar clasa cele două districte identic și ar rata că Districtul B are nevoie de o intervenție mai profundă.

## Legătura cu ingineria software

- Sistemele de gestionare a cazurilor și de stabilire a eligibilității pentru programe sociale stochează adesea deja câțiva dintre cei zece indicatori (locuință, frecvență școlară, markeri de sănătate) în silozuri separate; metoda de numărare Alkire-Foster este o schemă gata făcută pentru combinarea lor într-un singur scor de deprivare în loc de a construi de la zero un model de scorare la comandă.
- Împărțirea incidență/intensitate (H × A) este un tipar generic util pentru orice tablou de bord care raportează „câți sunt afectați” alături de „cât de grav” — prăbușirea ambelor într-un singur număr, cum fac statisticile brute de prevalență, ascunde exact cazul care are nevoie de cele mai multe resurse.
- Tablourile de bord de indicatori în stil MPI se asociază natural cu raportarea [costului per beneficiar](../costul-per-beneficiar/) pentru programele de combatere a sărăciei: costul per punct de reducere a MPI este o unitate apărabilă pentru compararea unor intervenții foarte diferite (transfer de numerar versus infrastructură de canalizare).

## Capcane

- **Tratarea celor zece indicatori ca universali** — indicatorii MPI globali ai OPHI sunt calibrați pentru comparabilitate între țări; MPI-urile naționale (multe țări, inclusiv câteva din Asia de Sud și Africa, publică propriile) adaptează indicatorii și ponderile la contextul local, iar cele două nu sunt direct comparabile.
- **Raportarea doar a lui H** — rata incidenței ignoră complet intensitatea; raportați sau calculați întotdeauna A alături de ea, sau MPI însuși.
- **Presupunerea că săracii conform MPI și săracii conform venitului sunt aceeași populație** — notele de țară ale OPHI arată de obicei doar o suprapunere parțială între cele două; un program care vizează doar săracii conform venitului va rata sistematic o parte semnificativă a săracilor multidimensional.

## Surse

- Oxford Poverty and Human Development Initiative. „Multidimensional Poverty Index.” <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. „Counting and Multidimensional Poverty Measurement.” Journal of Public Economics, 2011.
- UNDP & OPHI. „Global Multidimensional Poverty Index” (raport anual).
