# Analiza kontrfaktyczna

Kontrfakt (counterfactual) to oszacowanie tego, co stałoby się przy braku interwencji. Bez niego zaobserwowanej zmiany po uruchomieniu programu nie da się odróżnić od zmiany, która zaszłaby i tak — brak kontrfaktu oznacza brak dowodu skutku, choćby liczby „przed i po” wyglądały najbardziej przekonująco. Magenta Book HM Treasury traktuje skonstruowanie wiarygodnego kontrfaktu jako centralne zadanie metodologiczne ewaluacji wpływu, ważniejsze niż jakikolwiek inny pojedynczy wybór projektowy.

## Dlaczego to ważne

„Przestępczość spadła o 15% w roku po wprowadzeniu programu” nie jest dowodem, że program zadziałał, dopóki nie wiesz, co stałoby się z przestępczością bez niego — przestępczość mogła spaść o 20% i tak z powodu niezwiązanych trendów ekonomicznych lub demograficznych, co oznaczałoby, że program w istocie pogorszył sytuację względem kontrfaktu, mimo że surowa liczba się poprawiła. To najczęstszy błąd analityczny w twierdzeniach o wpływie w sektorze publicznym i społecznym: branie porównania przed/po za dowód związku przyczynowego. Magenta Book wyraźnie stwierdza, że ewaluacja wpływu istnieje, by odpowiedzieć na pytanie kontrfaktyczne — „jaką różnicę zrobiła ta interwencja?” — i że odpowiedź wymaga oszacowania, a nie tylko opisania świata, który się nie zdarzył.

Różne metody konstruują kontrfakt z różnym stopniem pewności, a rządowe wytyczne ewaluacyjne szeregują je odpowiednio. Randomizowane badania kontrolowane (RCT), w których osoby lub obszary są losowo przydzielane do otrzymania interwencji lub nie, dają najsilniejszy kontrfakt, bo randomizacja zapewnia, że grupy leczona i kontrolna różnią się, średnio, tylko otrzymaniem interwencji. Cabinet Office i What Works Network promują RCT w brytyjskiej polityce publicznej od raportu „Test, Learn, Adapt” Behavioural Insights Team z 2012 roku, właśnie dlatego, że słabsze projekty są podatne na zakłócenia — zaobserwowana różnica może odzwierciedlać to, kto zdecydował się uczestniczyć, a nie skutek programu. Tam, gdzie randomizacja jest niepraktyczna lub nieetyczna (jak często w przypadku programów z ustawowym uprawnieniem lub zmian polityki dotyczących całej populacji), Magenta Book określa jawną hierarchię słabszych, ale wciąż użytecznych alternatyw: dopasowane grupy porównawcze, projekty różnicy różnic, nieciągłość regresji wokół progów uprawnień oraz, jako ostateczność, proste porównanie przed/po — wyraźnie oznaczone jako najsłabsza forma dowodu, skłonna mylić skutek programu ze skutkiem wszystkiego innego, co zmieniło się w tym samym czasie.

## Matematyka

Rama kontrfaktyczna, stosowalna we wszystkich metodach:

```
Szacowany wpływ = Rezultat(z interwencją) − Rezultat(kontrfakt: bez interwencji)

NIE:
Szacowany wpływ ≠ Rezultat(po) − Rezultat(przed)   [myli czas z leczeniem]
```

Różnica różnic, jeden z najczęstszych projektów quasi-eksperymentalnych w ewaluacji rządowej, wyodrębnia efekt leczenia przez odjęcie własnej zmiany przed/po grupy porównawczej:

```
Oszacowanie DiD = [Rezultat(leczeni, po) − Rezultat(leczeni, przed)]
                − [Rezultat(porównawcza, po) − Rezultat(porównawcza, przed)]
```

To usuwa każdy trend wspólny dla obu grup (np. krajową zmianę gospodarczą dotykającą wszystkich), pozostawiając tylko zróżnicowaną zmianę przypisywalną interwencji.

## Przykład obliczeniowy

**Program zatrudnienia, przed/po (słaby projekt)**: program wsparcia pracy raportuje, że zatrudnienie uczestników wzrosło z 40% do 55% w ciągu roku — naiwny wniosek „+15 punktów procentowych dzięki programowi”.

**Ten sam program, różnica różnic (silniejszy projekt)**: dopasowana grupa porównawcza podobnych nieuczestników z tego samego lokalnego rynku pracy pokazuje wzrost zatrudnienia z 38% do 47% w tym samym roku (trwało krajowe ożywienie gospodarcze).

```
Zmiana grupy leczonej:        55% − 40% = +15 punktów procentowych
Zmiana grupy porównawczej:    47% − 38% = +9 punktów procentowych

Oszacowanie DiD (prawdziwy skutek programu) = 15 − 9 = +6 punktów procentowych
```

Uczciwy przypisywalny skutek to 6 punktów procentowych, a nie 15 — ponad połowa pozornej poprawy przed/po zaszłaby niezależnie od programu, napędzana tym samym ożywieniem gospodarczym, które podniosło grupę porównawczą.

**Nieciągłość regresji, próg uprawnień**: program grantowy jest dostępny tylko dla firm zatrudniających mniej niż 50 osób. Porównanie rezultatów firm tuż poniżej progu (45–49 pracowników, uprawnione) z firmami tuż powyżej (50–54 pracowników, nieuprawnione) daje wiarygodny kontrfakt, ponieważ firmy po obu stronach arbitralnego administracyjnego progu są poza tym podobne — o uprawnieniu decyduje próg, a nie jakakolwiek leżąca u podstaw cecha firmy. Średnia różnica rezultatów 2000 £ między dwiema grupami, obserwowana tylko na progu, jest przypisywalna grantowi ze znacznie większą pewnością niż proste porównanie wszystkich uprawnionych z wszystkimi nieuprawnionymi firmami (które systematycznie różnią się wielkością).

## Związek z inżynierią oprogramowania

Myślenie kontrfaktyczne powinno kształtować sposób projektowania systemów śledzenia wpływu i potoków ewaluacji dla oprogramowania rządowego i sektora społecznego:

- Wbuduj rejestrację grupy porównawczej w system od początku — rejestrując, kto był uprawniony, ale się nie zapisał, lub dopasowaną kohortę nieuczestników — zamiast dokładać ją po tym, jak program już działał i istnieją tylko dane przed/po.
- Tam, gdzie randomizacja jest możliwa (wdrożenie etapowe, usługa cyfrowa włączona dla niektórych użytkowników przed innymi), oprzyrządowuj system tak, by zachować losowe przypisanie jako pole dostępne do zapytań; wdrożenie etapowe przypadkowo niszczy własną wartość ewaluacyjną, jeśli kolejność przypisania nie jest rejestrowana.
- To fundamentalna metoda stojąca za [metodami ewaluacji wpływu](../metody-ewaluacji-wpływu/) i to ona odróżnia je od [ewaluacji wpływu a ewaluacji procesu](../ewaluacja-wpływu-a-ewaluacja-procesu/), z których ta druga pyta, czy program został zrealizowany zgodnie z zamierzeniem, a nie czy wywołał skutek.
- [Dodatkowość i efekt jałowy](../dodatkowość-i-efekt-jałowy/) oraz [wypieranie i przypisanie](../wypieranie-i-przypisanie/) są u podstaw pytaniami kontrfaktycznymi — efekt jałowy to „jaki byłby ten konkretny rezultat bez interwencji”, zastosowane na poziomie korekty, a nie pełnego projektu ewaluacji.

## Pułapki

- **Traktowanie przed/po jako dowodu związku przyczynowego.** To najczęstszy i najbardziej brzemienny w skutki błąd w raportowaniu wpływu w sektorze publicznym i społecznym; zmiana przed/po myli skutek programu ze wszystkim innym, co zmieniło się w tym samym okresie.
- **Używanie grupy porównawczej, która systematycznie różni się od grupy leczonej.** Dopasowana grupa porównawcza musi być naprawdę podobna pod względem istotnych cech (zob. hierarchia metod w Magenta Book dla [analizy kontrfaktycznej](../analiza-kontrfaktyczna/)); porównywanie uczestników programu (którzy sami się zgłosili i często są bardziej zmotywowani) z nieuczestnikami (którzy się nie zgłosili) grozi tym, że błąd selekcji będzie udawał skutek programu.
- **Niszczenie możliwości randomizacji przez złe projektowanie realizacji.** Wdrożenie etapowe lub randomizowane zachowuje wartość ewaluacyjną tylko wtedy, gdy przypisanie jest naprawdę losowe i zapisane — pozwolenie lokalnym menedżerom na wybór, kto idzie pierwszy, przekreśla cel.
- **Przesadne twierdzenia o precyzji ze słabego projektu.** Oszacowanie przed/po należy przedstawiać jako orientacyjne, a nie jako zmierzoną wielkość efektu; hierarchia dowodów w Magenta Book istnieje po to, by siła twierdzenia odpowiadała sile projektu, który je wytworzył.

## Źródła

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
