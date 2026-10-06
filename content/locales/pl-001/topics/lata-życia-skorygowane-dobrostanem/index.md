# Lata życia skorygowane dobrostanem (WELLBY)

WELLBY to jeden dodatkowy punkt satysfakcji z życia na standardowej skali dobrostanu 0–10, dla jednej osoby przez jeden rok. To strukturalny analog QALY używanego w ekonomii zdrowia — pojedynczej jednostki, która pozwala porównywać interwencje, których rezultaty nie mają niczego innego wspólnego — ale zbudowany na subiektywnym dobrostanie, a nie klinicznych stanach zdrowia, i określony w „Wellbeing guidance for appraisal: supplementary Green Book guidance” HM Treasury (2021).

## Dlaczego to ważne

Ocena kosztów i korzyści potrzebuje wspólnej jednostki, by porównać grant dla klubu młodzieżowego z programem bezpieczeństwa drogowego i z usługą zdrowia psychicznego, z których żadne nie dzielą miary rezultatu. Ekonomia zdrowia rozwiązała to dla interwencji klinicznych za pomocą QALY: roku życia skorygowanego jakością, ważonego od 0 (zgon) do 1 (pełne zdrowie). Wytyczne dobrostanu HM Treasury rozszerzają tę samą logikę na wydatki publiczne niezwiązane ze zdrowiem, używając zharmonizowanego pytania o satysfakcję z życia ONS („Ogólnie, jak bardzo jest Pan/Pani dziś zadowolony/a ze swojego życia?”, odpowiedź 0–10) jako drabiny rezultatów zamiast indeksu stanów zdrowia. WELLBY równy 1 oznacza wzrost satysfakcji z życia jednej osoby o pełny punkt na rok (lub równoważnie wzrost satysfakcji dziesięciu osób o 0,1 punktu każda na rok — WELLBY sumują się w populacji tak, jak QALY). Wytyczne HM Treasury ustalają poglądową wartość pieniężną WELLBY (około 13 000 £, ceny 2019/20), wyprowadzoną przez uzgodnienie danych o subiektywnym dobrostanie z innymi podejściami do wartości roku życia, dając oceniającym sposób wyceny rezultatów — zmniejszenia samotności, spójności wspólnoty, dostępu do zieleni — które techniki [wyceny dobrostanu](../wycena-dobrostanu/) mogły wcześniej tylko opisywać, a nie porównywać na wspólnym gruncie z wydatkami na zdrowie czy bezpieczeństwo.

## Matematyka

```
WELLBY = Δ satysfakcja z życia (skala 0–10) × liczba lat, przez które zmiana się utrzymuje
         (sumowane po wszystkich osobach, których to dotyczy)

Wyceniona pieniężnie korzyść dobrostanu = wygenerowane WELLBY × wartość za WELLBY (wartość referencyjna HMT)

krs. QALY = Δ użyteczność stanu zdrowia (skala 0–1) × lata przeżyte w tym stanie
```

Skala satysfakcji 0–10 i skala użyteczności QALY 0–1 nie są zamienne bez kroku przeliczenia; wytyczne HM Treasury omawiają uzgodnienie obu, tak aby na przykład interwencja zdrowotna oceniana w QALY i interwencja społeczna oceniana w WELLBY nie były po cichu liczone podwójnie ani nie pozostawały nieporównywalne w ramach tej samej [oceny według Green Book](../ocena-według-green-book/).

## Przykład obliczeniowy

**Usługa samorządu lokalnego przeciw samotności**: program towarzyszenia obsługuje 400 odizolowanych starszych mieszkańców. Badania kontrolne pokazują, że średnia satysfakcja z życia rośnie z 5,2 do 6,0 (zysk 0,8 punktu), a efekt ma się utrzymywać przez 2 lata przed wygasaniem.

```
WELLBY = 400 osób × 0,8 punktu × 2 lata = 640 WELLBY

Wartość pieniężna = 640 × 13 000 £ = 8 320 000 £
```

Wobec rocznego kosztu programu 300 000 £ (600 000 £ w ciągu 2 lat) wskaźnik korzyści do kosztów wynosi mniej więcej 8 320 000 / 600 000 ≈ **13,9:1** — liczba, która może teraz znaleźć się w tej samej tabeli oceny co koszt na uniknięty QALY programu zdrowotnego czy oszczędności czasu przejazdu programu transportowego.

**Organizacja charytatywna, mniejsza skala**: program sztuki wspólnotowej dociera do 50 uczestników ze zmierzonym zyskiem satysfakcji 0,3 punktu, trwającym 1 rok.

```
WELLBY = 50 × 0,3 × 1 = 15 WELLBY
Wartość pieniężna = 15 × 13 000 £ = 195 000 £
```

## Związek z inżynierią oprogramowania

- Każda usługa dla obywateli, która już zbiera pytanie o satysfakcję z życia lub dobrostan (wiele platform samorządowych i zdrowia i opieki to robi, idąc za czterema standardowymi pytaniami ONS o dobrostan), może obliczać WELLBY wprost z istniejących potoków danych, zamiast zlecać indywidualną ocenę ekonomiczną dla każdej zmiany usługi.
- WELLBY dają zespołom inżynierskim budującym raportowanie dla [ustawy o wartości społecznej](../ustawa-o-wartości-społecznej/) lub [społecznego zwrotu z inwestycji](../społeczny-zwrot-z-inwestycji/) krajowo ustandaryzowany, zatwierdzony przez HM Treasury mianownik, unikając mnożenia się indywidualnych „wyników wpływu”, których nie da się porównać między umowami lub dostawcami.
- Ponieważ WELLBY są addytywne po osobach i czasie, składają się czysto w rodzaj śledzenia rezultatów na poziomie populacji używanego w systemach [rozliczalności opartej na rezultatach](../rozliczalność-oparta-na-rezultatach/) — pulpit usługi może raportować łączne WELLBY wygenerowane na kwartał tak, jak system zdrowia raportuje zyskane QALY.

## Pułapki

- **Zakładanie, że samoopisowe zyski satysfakcji są w całości przypisywalne interwencji** — bez kontrfaktu (grupa porównawcza lub projekt przed/po z kontrolami) nie można oddzielić zysku WELLBY od ogólnych trendów; zob. [analiza kontrfaktyczna](../analiza-kontrfaktyczna/).
- **Mieszanie WELLBY i QALY w jednej sumie bez uzgodnienia** — wytyczne HM Treasury jasno mówią, że oba używają różnych skal i różnych leżących u podstaw teorii wartości; naiwne sumowanie podwójnie liczy nakładający się dobrostan.
- **Bezkrytyczne używanie referencyjnej wartości pieniężnej** — liczba £ za WELLBY to krajowy szacunek średni z realnymi pasmami niepewności; wytyczne HM Treasury zalecają analizę wrażliwości, a nie traktowanie jej jako stałego kursu wymiany.

## Źródła

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
