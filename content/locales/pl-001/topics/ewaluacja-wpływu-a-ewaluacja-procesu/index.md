# Ewaluacja wpływu a ewaluacja procesu

Ewaluacja wpływu pyta, czy program spowodował zamierzone rezultaty. Ewaluacja procesu pyta, czy program został faktycznie zrealizowany zgodnie z projektem — komu, w jakiej dawce i z jakimi barierami lub ułatwieniami po drodze. To różne pytania wymagające różnych metod, a Magenta Book HM Treasury uznaje zlecanie obu razem za standardową praktykę, ponieważ słaby lub zerowy wynik wpływu jest sam w sobie niemożliwy do zinterpretowania: nie powie ci, czy leżąca u podstaw teoria programu była błędna, czy dobra teoria po prostu nigdy nie została właściwie zrealizowana.

## Dlaczego to ważne

Ewaluacje rządowe wielokrotnie nie stwierdzały mierzalnego efektu programu, nie mając ewaluacji procesu, która wyjaśniłaby dlaczego — pozostawiając zamawiających niezdolnymi do odróżnienia „ten pomysł nie działa” (porażka teorii) od „ten pomysł nigdy nie był właściwie wypróbowany” (porażka wdrożenia). Wytyczne Medical Research Council dotyczące ewaluacji procesu złożonych interwencji, opublikowane w BMJ w 2015 roku i szeroko cytowane obok Magenta Book, sformalizowały wierność (fidelity), dawkę i zasięg jako podstawowe rzeczy, które ewaluacja procesu musi mierzyć. Zlecenie ewaluacji wpływu bez ewaluacji procesu grozi porzuceniem naprawdę solidnego projektu programu, bo został dostarczony połowie zamierzonej populacji w ułamku zamierzonej intensywności — błędem, któremu budowniczy systemów jest dobrze przygotowany zapobiec, ponieważ wierność dostarczenia to dokładnie to, co systemy danych operacyjnych mogą rejestrować niemal w czasie rzeczywistym.

## Matematyka

```
Ewaluacja procesu pyta:
 - Czy dostarczono ją populacji docelowej, w planowanej dawce/intensywności?
 - Czy realizacja odpowiadała projektowi modelu logicznego / teorii zmiany?
 - Jakie bariery lub ułatwienia wpłynęły na realizację?
 Metody: kontrole wierności względem wcześniej określonych progów, studia przypadków,
         wywiady, administracyjne dane o realizacji.

Ewaluacja wpływu pyta:
 - Co się zmieniło i jaka część tej zmiany jest przypisywalna programowi?
 Metody: RCT, DiD, PSM, RDD — zob. impact-evaluation-methods — względem kontrfaktu.

Łączna diagnoza:
 Brak efektu  + wysoka wierność  → porażka teorii: sam model nie wytworzył rezultatu
 Brak efektu  + niska wierność   → porażka wdrożenia: model nigdy nie został właściwie przetestowany
 Znaleziony efekt + wysoka wierność → powtórz z pewnością
 Znaleziony efekt + niska wierność  → zbadaj dalej: efekt może być kruchy lub specyficzny dla miejsca
```

## Przykład obliczeniowy

**Samorząd lokalny (program rodzicielski)**: ewaluacja wpływu z użyciem różnicy różnic stwierdza zmianę +2 punkty procentowe w mierze dobrostanu dziecka — nieistotną statystycznie. Ewaluacja procesu, prowadzona równolegle, stwierdza, że program dotarł tylko do 210 z 500 docelowych rodzin (zasięg 42%), a z nich tylko 95 spełniło wcześniej określony próg wierności 75%+ obecności na sesjach — 19% pierwotnie planowanego zasięgu. Wniosek: słaby wynik wpływu jest spójny z porażką wdrożenia, a nie dowodem, że model programu nie działa; odpowiednią reakcją jest naprawa ścieżki skierowań, która spowodowała 58% odpadu, a nie porzucenie projektu programu.

**Organizacja charytatywna (program umiejętności cyfrowych)**: ewaluacja wpływu stwierdza silny efekt (+18 punktów procentowych na wyniku pewności cyfrowej), a równoległa ewaluacja procesu potwierdza 92% wierności planowanemu programowi nauczania na wszystkich 12 miejscach realizacji. Łącznie fundator może skalować program z pewnością, bo efekt okazuje się utrzymywać konsekwentnie, a nie być produktem jednego wyjątkowo dobrego miejsca.

## Związek z inżynierią oprogramowania

Dane ewaluacji procesu to dokładnie to, co systemy dostarczania są dobrze przygotowane rejestrować: obecność względem planu, dawkowanie sesji i odpad na każdym etapie lejka skierowań lub zapisów — ta sama analityka lejka, którą inżynierowie już budują dla funkcji produktu, zastosowana zamiast tego do potoku realizacji programu społecznego. Przekazywanie metryk wierności i zasięgu kierownikom programu niemal w czasie rzeczywistym, zamiast czekania na ewaluację na koniec grantu, pozwala naprawić zepsutą ścieżkę skierowań w trakcie programu, zamiast odkrywać ją dopiero po zakończeniu okresu finansowania. Zob. [metody ewaluacji wpływu](../metody-ewaluacji-wpływu/) dla projektów przyczynowych, z którymi paruje się ewaluacja procesu, [teoria zmiany](../teoria-zmiany/) i [model logiczny](../model-logiczny/) dla projektu, względem którego ewaluacja procesu sprawdza wierność, oraz [realizacja korzyści](../realizacja-korzyści/) dla śledzenia realizacji aż do obiecanych rezultatów.

## Pułapki

- **Zlecanie samej ewaluacji wpływu.** Zerowy lub słaby wynik nie może wtedy być zinterpretowany jako porażka teorii czy porażka wdrożenia, co jest dokładnie rozróżnieniem, które ma znaczenie przy decydowaniu, co robić dalej.
- **Traktowanie ewaluacji procesu jako miękkiego dodatku.** Potrzebuje tej samej rygorystyczności i wcześniej określonych kryteriów wierności co projekt wpływu, inaczej zapada się w anegdotę, gdy przychodzą wyniki.
- **Mylenie „na czas i w budżecie” z „zrealizowano zgodnie z projektem”.** Ewaluacja procesu sprawdza wierność modelowi — dawkę, grupę docelową, treść — a nie status RAG zarządzania projektem.
- **Brak wcześniejszej rejestracji progów wierności.** Decydowanie po fakcie, co liczy się jako „wystarczająca dawka”, sprawia, że każde wyjaśnienie rozczarowującego wyniku wpływu wygląda na wymówkę post hoc.

## Źródła

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
