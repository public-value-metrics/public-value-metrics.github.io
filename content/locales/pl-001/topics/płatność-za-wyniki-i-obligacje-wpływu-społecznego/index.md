# Płatność za wyniki i obligacje wpływu społecznego (PbR/SIB)

Płatność za wyniki (payment by results, PbR) płaci dostawcy na podstawie zweryfikowanych osiągniętych rezultatów, a nie wykonanych działań. Obligacja wpływu społecznego (social impact bond, SIB) to szczególna struktura finansowania PbR, w której prywatni lub filantropijni inwestorzy finansują świadczenie usług z góry i są spłacani — ze zwrotem — przez rządowego zamawiającego tylko wtedy, gdy niezależnie zmierzone rezultaty osiągną uzgodnione progi, przenosząc ryzyko realizacji z podatnika na inwestora.

## Dlaczego to ważne

Pierwsza na świecie SIB została uruchomiona w HMP Peterborough we wrześniu 2010 roku: Social Finance zebrało 5 milionów £ od 17 inwestorów na sfinansowanie „One Service”, pracującego z więźniami o krótkich wyrokach (poniżej 12 miesięcy), by ograniczyć recydywę, a Ministry of Justice i Big Lottery Fund zgodziły się spłacić inwestorów tylko wtedy, gdy zdarzenia ponownych skazań spadną o co najmniej 7,5% względem dopasowanej krajowej kohorty porównawczej. Ostatnia kohorta pilotażu w Peterborough zarejestrowała 9,7% redukcję ponownych skazań, z zapasem powyżej progu, a inwestorzy zostali spłaceni ze zwrotem. Mechanizm miał znaczenie, bo rozwiązał konkretny problem zamawiania: rząd chciał płacić za rezultaty, a nie nakłady, ale nie mógł wchłonąć ryzyka finansowego interwencji, która mogła nie zadziałać, więc struktura SIB przeniosła to ryzyko na inwestorów gotowych je objąć. Government Outcomes Lab (GO Lab) w Blavatnik School of Government w Oksfordzie utrzymuje obecnie najpełniejszą publiczną bazę dowodową o wynikach PbR i SIB na świecie, śledząc ponad 200 obligacji wpływu globalnie i publikując badania, które cechy projektowe korelują z sukcesem lub porażką. Lekcja, do której baza dowodowa wielokrotnie wraca, jest taka, że *wybrana metryka rezultatu* i to, kto ponosi ryzyko jej chybienia, determinują niemal wszystko inne w tym, jak umowa PbR faktycznie zachowuje się w praktyce.

## Matematyka

```
Płatność PbR = płatność bazowa (jeśli jest) + Σ (osiągnięty rezultat × cena jednostkowa za rezultat)

Zwrot inwestora w obligację wpływu społecznego:
  Nakład inwestora   = kapitał z góry finansujący świadczenie usług
  Płatność za wynik  = zamawiający płaci tylko, jeśli rezultat ≥ próg, skalowana
                       tym, jak daleko powyżej progu ląduje wynik
  Zwrot inwestora    = otrzymane płatności za wyniki − nakład inwestora
                       (stopa zwrotu, często ograniczona, odzwierciedlająca podjęte ryzyko)

Kluczowe parametry projektowe, które określają zachowanie całej umowy:
  Metryka rezultatu     — musi być rezultatem, a nie produktem (zob. outcomes-vs-outputs)
  Porównanie/kontrfakt  — zwykle dopasowana kohorta (zob. counterfactual-analysis)
  Próg płatności        — minimalna poprawa przed wyzwoleniem jakiejkolwiek płatności
  Krzywa płatności      — liniowa, schodkowa lub ograniczona powyżej progu
  Dyskonto przypisania/efektu jałowego — zob. additionality-and-deadweight
```

## Przykład obliczeniowy

**Peterborough One Service** (poglądowe liczby z opublikowanych ewaluacji):

```
Zebrany kapitał inwestorów:      5 000 000 £
Kohorta:                         ~3000 mężczyzn z krótkimi wyrokami w dwóch kohortach
Próg:                            ≥7,5% redukcji zdarzeń ponownych skazań wobec dopasowanej
                                  krajowej grupy porównawczej, albo brak płatności
Wynik kohorty 1:                 8,4% redukcji — poniżej umownej poprzeczki dla samej tej
                                  kohorty według pierwotnych zasad
Wynik łączny/końcowej kohorty:   9,7% redukcji — powyżej progu
Płatność za wynik:               rząd (Ministry of Justice / Big Lottery Fund) płaci
                                  za punkt procentowy powyżej progu, finansując
                                  spłatę inwestorów plus zwrot
```

**Umowa PbR samorządu lokalnego (poglądowa)**: usługa interwencji rodzinnej jest zamawiana za 4000 £ za skierowaną rodzinę (płatność za działanie) plus 6000 £ za rodzinę bez dalszego skierowania do ochrony dzieci 12 miesięcy po zamknięciu (płatność za rezultat). Skierowano 200 rodzin, zamknięto 150 spraw, 96 pozostaje bez skierowań po 12 miesiącach:

```
Płatność za działanie = 200 × 4000 £ = 800 000 £
Płatność za rezultat  = 96 × 6000 £  = 576 000 £
Całkowity koszt umowy = 1 376 000 £ za 96 potwierdzonych trwałych rezultatów
Koszt na potwierdzony rezultat ≈ 14 333 £ (zob. cost-per-outcome)
```

## Związek z inżynierią oprogramowania

Płatność za wyniki jest problemem uzgodnienia zachęt, zanim stanie się problemem danych, a system danych jest miejscem, w którym to uzgodnienie albo trzyma, albo pęka. Niezależna, odporna na manipulacje weryfikacja rezultatów to cała gra: zamawiający i dostawca mają przeciwstawne zachęty co do tego, jak kodowany jest niejednoznaczny przypadek, więc system rejestrujący rezultaty potrzebuje śladu audytu, umowy o udostępnianiu danych z niezależnym weryfikatorem (często innym podmiotem niż dostawca, czasem organem statystyki oficjalnej dopasowującym do rejestrów policji lub świadczeń) i niezmienialnego wersjonowania definicji rezultatu — odpowiednik PbR pułapki „redefiniowania metryki” z [KPI sektora publicznego](../kpi-sektora-publicznego/). Obliczenia przypisania zależą od metod dopasowanej kohorty z [analizy kontrfaktycznej](../analiza-kontrfaktyczna/), które potrzebują powtarzalnego, audytowalnego kodu, a nie jednorazowego arkusza. A sama metryka musi być prawdziwym rezultatem, a nie zastępczym działaniem — zob. [rezultaty a produkty](../rezultaty-a-produkty/) — bo umowa PbR płacąca za produkt po prostu przemianowuje zwykłe finansowanie z dodatkowym kosztem transakcyjnym. Gdy społeczny zwrot SIB jest modelowany prospektywnie, ta ocena zazwyczaj zapożycza wprost z metodologii [społecznego zwrotu z inwestycji](../społeczny-zwrot-z-inwestycji/).

## Pułapki

- **Płacenie za łatwo manipulowalny zastępczy rezultat**: „obecność na sesjach” to działanie przebrane za rezultat; nalegaj na miarę odzwierciedlającą faktycznie poszukiwaną zmianę (recydywa, zatrudnienie, stabilność mieszkaniowa).
- **Brak wiarygodnego kontrfaktu**: bez dopasowanej grupy porównawczej poprawa mogła być regresją do średniej lub szerszym trendem, a nie skutkiem programu — zob. [analiza kontrfaktyczna](../analiza-kontrfaktyczna/) i [dodatkowość i efekt jałowy](../dodatkowość-i-efekt-jałowy/).
- **Niedoszacowanie kosztów transakcyjnych i ewaluacji**: niezależna weryfikacja, powiązanie danych i administracja umową dla programów PbR/SIB rutynowo sięgają dwucyfrowych wartości jako procent wartości umowy — baza dowodowa GO Lab dokumentuje to jako powtarzający się czynnik zaprzestania programów.
- **Selekcja lub „parkowanie”**: dostawcy płaceni za rezultat mają bezpośrednią zachętę, by w pierwszej kolejności obsługiwać klientów, którzy i tak najpewniej odniosą sukces, a najtrudniejsze przypadki odsuwać na dalszy plan — zaprojektuj progi płatności lub korektę struktury przypadków, by temu przeciwdziałać.

## Źródła

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
