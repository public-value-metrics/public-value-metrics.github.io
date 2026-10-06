# Analiza efektywności kosztowej w administracji

Analiza efektywności kosztowej (CEA) porównuje koszty alternatywnych sposobów osiągnięcia *tego samego* rezultatu, wyrażonego w jednostkach naturalnych — koszt na osobę bezdomną zakwaterowaną, koszt na ucznia doprowadzonego do oczekiwanego standardu, koszt na tonę zredukowanego CO2 — bez przeliczania samego rezultatu na pieniądze.

## Dlaczego to ważne

Green Book traktuje CEA jako metodę zapasową, gdy wymóg [analizy kosztów i korzyści społecznych](../analiza-kosztów-i-korzyści-społecznych/) wyceny pieniężnej każdej korzyści staje się nie tylko trudny, ale nieuczciwy — gdy nadanie rezultatowi wiarygodnej ceny wymagałoby założeń, których nikt naprawdę nie podziela (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, rozdział 5, o ocenie opcji, gdy rezultatów nie da się łatwo wycenić pieniężnie). CEA to metoda zapożyczona najbardziej wprost z ekonomii zdrowia — strukturalnie jest identyczna z tym, jak NICE porównuje terapie za pomocą kosztu na rok życia skorygowany jakością — ale zastosowana do programów publicznych niezwiązanych ze zdrowiem: interwencje edukacyjne na punkt rezultatu ucznia, programy mieszkaniowe na gospodarstwo domowe uchronione przed bezdomnością, programy zatrudnienia na trwały rezultat zatrudnienia.

Powód, dla którego CEA zasługuje na miejsce obok SCBA, a nie jest przez nią pochłaniana, jest taki, że wymuszanie wartości pieniężnej dla niektórych rezultatów daje liczbę dość precyzyjną, by wyglądać autorytatywnie, i dość spornej, by być bezwartościową w debacie publicznej — wycena „dziecka czytającego na oczekiwanym poziomie” prowokuje dokładnie ten rodzaj zakwestionowania, który wykolejał uzasadnienie biznesowe przed komisją parlamentarną. CEA omija spór, odmawiając jego prowadzenia: szereguje opcje według kosztu na jednostkę *samego rezultatu*, pozostawiając odrębny osąd polityczny, czy rezultat w ogóle warto osiągać, przypadkowi strategicznemu.

## Matematyka

```
Współczynnik efektywności kosztowej (średni) = Całkowity koszt / Łączna liczba jednostek rezultatu

Inkrementalny współczynnik efektywności kosztowej (ICER), porównujący opcję A z opcją B:
ICER = (Koszt_A − Koszt_B) / (Rezultat_A − Rezultat_B)

Procedura:
1. Ustal jednostkę rezultatu i metodę pomiaru dla wszystkich porównywanych opcji.
2. Wyceń każdą opcję na tej samej podstawie (zob. ../green-book-appraisal/, przypadek finansowy)
   w tym samym horyzoncie czasowym.
3. Odrzuć opcje zdominowane: każda opcja kosztująca więcej na jednostkę niż tańsza
   alternatywa osiągająca ten sam lub lepszy rezultat jest odrzucana.
4. Uszereguj pozostałe opcje według inkrementalnego, a nie średniego, współczynnika
   efektywności kosztowej.
```

CEA sama nie może powiedzieć, czy program w ogóle warto finansować — tylko które z kilku podejść do tego samego celu jest najtańsze na jednostkę. Rozstrzygnięcie, czy sam cel jest wart wydatku, wymaga albo powrotu do SCBA (jeśli istnieje wiarygodna wycena), albo osądu politycznego/strategicznego poza matematyką. Tam, gdzie rezultatów naprawdę nie da się zredukować do jednej jednostki — bo program wytwarza kilka rezultatów, które liczą się na różne sposoby — użyj zamiast tego [wielokryterialnej analizy decyzyjnej](../wielokryterialna-analiza-decyzyjna/).

## Przykład obliczeniowy

**Samorząd lokalny**: rada porównuje trzy podejścia do redukcji liczby osób śpiących na ulicy, każde wycenione na rok względem rezultatu „osoby przeniesione do stałego zakwaterowania na 6+ miesięcy”:

```
Opcja                             Koszt       Osiągnięte rezultaty   Średni CER
Housing First (intensywny)        900 000 £   60                     15 000 £/rezultat
Schronisko + wsparcie wyjścia     600 000 £   50                     12 000 £/rezultat
Streetworking + prywatny najem    350 000 £   20                     17 500 £/rezultat

ICER, Schronisko vs Streetworking:  (600k−350k)/(50−20) = 8333 £ za dodatkowy rezultat
ICER, Housing First vs Schronisko:  (900k−600k)/(60−50) = 30 000 £ za dodatkowy rezultat
```

Streetworking jest zdominowany pod względem średniego kosztu przez Schronisko, ale *inkrementalny* krok od Streetworkingu do Schroniska kosztuje tylko 8333 £ na dodatkową zakwaterowaną osobę — tanio w porównaniu z krokiem do Housing First, który kosztuje 30 000 £ za każdą dodatkową osobę ponad to, co osiąga Schronisko. Ograniczony budżetem samorząd, który skaluje, powinien woleć rozbudowę Schroniska przed Housing First, mimo że Housing First wygląda lepiej według własnego współczynnika średniego.

**Rząd krajowy**: program nadrabiania zaległości w czytaniu jest porównywany w trzech modelach realizacji pod względem „kosztu na ucznia osiągającego oczekiwany dla wieku standard czytania”: korepetycje jeden na jeden (1800 £/uczeń), korepetycje w małych grupach (700 £/uczeń) i interwencja wyłącznie cyfrowa (150 £/uczeń, ale tylko 40% wskaźnika rezultatu korepetycji w małych grupach na zapisanego ucznia po korekcie o spadek zaangażowania). Po korekcie o rzeczywiste ukończenie interwencja wyłącznie cyfrowa kosztuje 375 £ na ucznia osiągającego standard — nadal najtańsza, ale CEA nie może powiedzieć, czy mniejsza bezwzględna liczba uczniów, którym pomoże interwencja wyłącznie cyfrowa, jeśli zrealizowana przy tym samym budżecie co małe grupy, jest akceptowalnym kompromisem wobec dotarcia do mniejszej liczby uczniów z większą głębią; to osąd dystrybucyjny, który CEA zwraca decydentom.

## Związek z inżynierią oprogramowania

CEA jest właściwą ramą, ilekroć zespoły inżynierskie oceniają podejścia do realizacji dla *tego samego* rezultatu usługi — koszt na pomyślnie zweryfikowaną tożsamość u trzech dostawców weryfikacji tożsamości, koszt na poprawnie zsegregowaną sprawę przy dwóch projektach automatyzacji obsługi spraw, koszt na rozwiązany defekt dostępności przy naprawie własnymi siłami versus zleconej. Dyscyplina, którą importuje bezpośrednio: zdefiniuj jednostkę rezultatu przed porównaniem kosztów (nie „zamknięte zgłoszenia” — produkt — lecz „faktycznie zaspokojona potrzeba użytkownika”) i zawsze obliczaj inkrementalny współczynnik między działającym systemem a proponowanym zamiennikiem, a nie średni koszt każdego systemu w izolacji. Zob. [rezultaty a produkty](../rezultaty-a-produkty/) i [koszt na rezultat](../koszt-na-rezultat/).

## Pułapki

- **Porównywanie współczynników średnich, a nie inkrementalnych, przy decyzji o rozbudowie.** Jak pokazuje przykład osób śpiących na ulicy, opcja z najlepszym średnim współczynnikiem nie zawsze jest najtańszą następną jednostką rezultatu do kupienia.
- **Wybór jednostki rezultatu, która w istocie jest produktem.** „Dokonane skierowania” czy „przeprowadzone sesje” mierzą działalność, a nie rezultat, dla którego program istnieje; CEA na produktach daje pewnie wyglądającą liczbę odpowiadającą na złe pytanie.
- **Porównywanie między naprawdę różnymi rezultatami.** CEA jest ważna tylko wtedy, gdy każda opcja celuje w ten sam rezultat mierzony w ten sam sposób; porównywanie „kosztu na zakwaterowaną osobę bezdomną” z „kosztem na osobę opuszczającą opiekę w stabilnym najmie” wymaga ogólnej miary rezultatu lub [wielokryterialnej analizy decyzyjnej](../wielokryterialna-analiza-decyzyjna/), a nie CEA.
- **Ignorowanie trwałości rezultatu.** Tańsza opcja dająca rezultaty, które nie utrzymują się (uczeń, który się cofa po zakończeniu interwencji), nie jest w istocie bardziej opłacalna po zmierzeniu w porównywalnym horyzoncie; dopasuj okres obserwacji między porównywanymi opcjami.

## Źródła

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
