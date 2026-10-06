# Dodatkowość i efekt jałowy

Dodatkowość (additionality) pyta, czy interwencja spowodowała rezultat, który inaczej by nie zaszedł. Efekt jałowy (deadweight) jest jej lustrzanym odbiciem: udziałem rezultatu, który zaszedłby i tak, nawet bez programu, grantu czy dotacji. Niemal każde twierdzenie o wpływie programu rządowego lub organizacji charytatywnej przecenia jego skutek, dopóki nie odejmie się efektu jałowego, dlatego brytyjskie wytyczne ewaluacyjne traktują go jako pierwszą i najważniejszą korektę każdej nagłówkowej liczby.

## Dlaczego to ważne

„Wsparliśmy rozwój 500 firm” brzmi jak osiągnięcie, ale jeśli 300 z tych firm rozwinęłoby się i tak — bo lokalna gospodarka się odradzała, bo miały inne źródła finansowania, bo już przed startem programu były na ścieżce wzrostu — prawdziwy dodatkowy wkład programu wynosi 200, a nie 500. Magenta Book HM Treasury oraz od dawna obowiązujący „Additionality Guide” HM Treasury/BIS (opracowany pierwotnie dla programów rozwoju regionalnego i rewitalizacji i od tego czasu szeroko używany w brytyjskich ewaluacjach rządowych) formalizują efekt jałowy jako początkową korektę w standardowej sekwencji wpływu netto: efekt brutto minus efekt jałowy, minus wypieranie, minus przeciek, skorygowany o efekty mnożnikowe, równa się dodatkowemu wpływowi netto. Pominięcie tego kroku to najczęstszy sposób zawyżania twierdzeń o wpływie w sektorze publicznym i społecznym, umyślny lub nie — program grantowy, który mierzy tylko brutto rezultaty uczestników, bez grupy porównawczej, nie potrafi odróżnić własnego skutku od tego, co zaszłoby tak czy inaczej.

Efekt jałowy nie jest stałym odsetkiem; zależy całkowicie od kontrfaktu dla konkretnej populacji i interwencji (zob. [analiza kontrfaktyczna](../analiza-kontrfaktyczna/)). Angielskie ewaluacje rozwoju regionalnego w czasach dawnych Regional Development Agencies zwykle wykazywały stopy efektu jałowego w przedziale 20–60% zależnie od rodzaju wsparcia biznesu, dlatego wiarygodne ewaluacje programów podają zakres skorygowany o efekt jałowy, a nie pojedynczą założoną liczbę, oraz dlatego fundatorzy tacy jak National Lottery Community Fund i Big Society Capital wymagają od grantobiorców jawnego uwzględnienia efektu jałowego w raportowaniu rezultatów zamiast podawania brutto liczby uczestników.

## Matematyka

Standardowa sekwencja korekt wpływu netto, jak ją określają brytyjskie wytyczne ewaluacyjne (Magenta Book; HM Treasury/BIS Additionality Guide; wytyczne ewaluacji ESIF i funduszy strukturalnych):

```
Rezultat brutto
  − Efekt jałowy     (co zaszłoby i tak)
  − Wypieranie       (działalność/korzyść przesunięta skądinąd, a nie stworzona — zob.
                       displacement-and-attribution)
  − Przeciek         (korzyść trafiająca poza grupę/obszar docelowy)
  × Mnożnik          (dodatkowa pośrednia/indukowana działalność gospodarcza, jeśli dodatnia)
  = Dodatkowy wpływ netto
```

Stopa efektu jałowego jako proporcja:

```
Stopa efektu jałowego = rezultaty, które wystąpiłyby bez interwencji
                        / całkowite zaobserwowane rezultaty brutto

Dodatkowe rezultaty netto = Rezultaty brutto × (1 − Stopa efektu jałowego)
```

## Przykład obliczeniowy

**Program grantowy wsparcia biznesu**: regionalny program grantowy podaje, że 500 wspartych firm zwiększyło zatrudnienie w następnym roku, średnio o 3 miejsca pracy każda — twierdzenie brutto o 1500 miejsc pracy.

Dopasowana grupa porównawcza podobnych niewspartych firm (zob. [analiza kontrfaktyczna](../analiza-kontrfaktyczna/)) pokazuje, że 40% wzrostu zatrudnienia wspartych firm zaszłoby i tak, na podstawie tego, jak dopasowana grupa radziła sobie w tym samym okresie.

```
Stopa efektu jałowego = 40%
Dodatkowe miejsca pracy netto = 1500 × (1 − 0,40) = 900 miejsc pracy
```

Uczciwie raportowalne osiągnięcie programu to 900 miejsc pracy, a nie 1500 — redukcja o 40% wyłącznie z korekty o efekt jałowy, zanim w ogóle weźmie się pod uwagę wypieranie czy przeciek.

**Charytatywny program zatrudnienia**: organizacja charytatywna umieszcza 200 długotrwale bezrobotnych w pracy kosztem 600 000 £ (3000 £ za umieszczenie, brutto). Krajowe dane o rynku pracy pokazują, że bez żadnej interwencji około 15% porównywalnej kohorty długotrwale bezrobotnych znajduje pracę w tym samym okresie dzięki naturalnej rotacji na rynku pracy.

```
Stopa efektu jałowego = 15%
Dodatkowe umieszczenia netto = 200 × (1 − 0,15) = 170
Prawdziwy koszt dodatkowego umieszczenia = 600 000 £ / 170 ≈ 3529 £
```

Brutto koszt na umieszczenie (3000 £) zaniża rzeczywisty koszt dodatkowego wkładu organizacji o około 15%.

## Związek z inżynierią oprogramowania

Dodatkowość i efekt jałowy mają bezpośrednie znaczenie dla każdego, kto buduje oprogramowanie do pomiaru wpływu lub zarządzania grantami dla sektora publicznego lub społecznego:

- Systemy raportowania rezultatów powinny z założenia rejestrować grupę porównawczą lub bazową, a nie tylko rezultaty uczestników — dołożenie kontrfaktu po uruchomieniu systemu bez niego jest znacznie trudniejsze niż wbudowanie rejestracji od początku (zob. [analiza kontrfaktyczna](../analiza-kontrfaktyczna/)).
- Pulpity raportujące tylko brutto liczby uczestników będą systematycznie zawyżać wpływ wobec fundatorów i organów nadzoru; tam, gdzie istnieją szacunki efektu jałowego (z literatury ewaluacyjnej lub grupy porównawczej), oprogramowanie powinno pokazywać liczbę netto po odjęciu efektu jałowego obok liczby brutto, a nie zamiast niej.
- To łączy się bezpośrednio ze [społecznym zwrotem z inwestycji](../społeczny-zwrot-z-inwestycji/), którego wskaźnik SROI jest wiarygodny dopiero po odjęciu efektu jałowego (i wypierania) od brutto deklarowanych rezultatów — kalkulator SROI, który pomija ten krok, wytworzy zawyżone wskaźniki, które nie przetrwają kontroli.

## Pułapki

- **Raportowanie rezultatów brutto tak, jakby wszystkie były dodatkowe.** To najczęstszy błąd pomiaru wpływu w raportowaniu grantów i programów; zawsze pytaj „czy to zaszłoby i tak?” przed opublikowaniem nagłówkowej liczby.
- **Zakładanie, że jeden odsetek efektu jałowego obowiązuje wszędzie.** Efekt jałowy bardzo się różni w zależności od sektora, populacji i lokalnych warunków gospodarczych; użyj grupy porównawczej lub dowodów specyficznych dla sektora zamiast ponownie używać liczby z niepowiązanej ewaluacji.
- **Mylenie efektu jałowego z wypieraniem.** Efekt jałowy dotyczy kontrfaktycznych rezultatów dla tych samych uczestników; wypieranie dotyczy skutków dla innych osób lub miejsc — zob. [wypieranie i przypisanie](../wypieranie-i-przypisanie/). Pomieszanie obu prowadzi do podwójnego liczenia lub niedoszacowania korekty.
- **Efekt jałowy deklarowany przez uczestników.** Pytanie beneficjentów „czy to zaszłoby bez naszej pomocy?” daje systematycznie niskie szacunki efektu jałowego (uczestnicy skłaniają się do przypisywania zasług programowi); niezależna grupa porównawcza jest znacznie bardziej wiarygodna.

## Źródła

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on deadweight, displacement, and leakage in structural-funds evaluation.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
