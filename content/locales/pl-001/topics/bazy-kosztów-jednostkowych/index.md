# Bazy kosztów jednostkowych

Baza kosztów jednostkowych to biblioteka wcześniej zbadanych, opartych na dowodach zastępników finansowych dla rezultatów społecznych — wartości przejścia z bezrobocia do zatrudnienia, zmniejszonej samotności, stabilnego najmu — które pozwalają praktykowi wycenić rezultat pieniężnie bez każdorazowego zlecania badań wyceny na zamówienie. Istnieją po to, by mała organizacja charytatywna pisząca wniosek o finansowanie mogła zastosować tę samą rzetelność co dobrze wyposażona firma doradcza, ponownie używając zastępnika, który ktoś inny już wyprowadził i opublikował.

## Dlaczego to ważne

UK Social Value Bank HACT, opracowany z ekonomistą Danielem Fujiwarą z użyciem metod wyceny dobrostanu, oraz Global Value Exchange, otwarta, zbiorowo tworzona baza zastępników finansowych, to dwie najczęściej używane bazy w brytyjskim trzecim i publicznym sektorze. Obie istnieją, ponieważ leżąca u podstaw praca wyceny — [wycena dobrostanu](../wycena-dobrostanu/) i [wycena metodą preferencji deklarowanych](../wycena-metodą-preferencji-deklarowanych/) — jest kosztowna, wymagająca metodologicznie i powolna do przeprowadzenia od zera dla każdego projektu. Współdzielona, opublikowana biblioteka zastępników zamienia to, co byłoby wielomiesięcznym ćwiczeniem badawczym, w proste wyszukiwanie, co dokładnie sprawia, że mają znaczenie zarówno dla obliczeń [społecznego zwrotu z inwestycji](../społeczny-zwrot-z-inwestycji/), jak i ocen ofert zgodnie z [ustawą o wartości społecznej](../ustawa-o-wartości-społecznej/): bez nich rygorystyczna wycena pieniężna byłaby dostępna tylko dla organizacji dość dużych, by zlecić własne badania.

## Matematyka

Baza kosztów jednostkowych sama niczego nie oblicza; dostarcza jedną daną wejściową do obliczenia wykonywanego gdzie indziej:

```
Wartość zastępnika finansowego = cena rynkowa, LUB cena cieniowa, LUB wycena dobrostanu,
                                 LUB wartość preferencji deklarowanych
                                 dla zdefiniowanej jednostki zmiany rezultatu
                                 (np. „na osobę przechodzącą z bezrobocia do zatrudnienia, rocznie”)

Wartość zastosowana = liczba osiągniętych rezultatów × jednostkowa wartość zastępnika
```

Zob. [ceny cieniowe](../ceny-cieniowe/), jak konstruuje się zastępnik, gdy nie istnieje cena rynkowa, oraz [społeczny zwrot z inwestycji](../społeczny-zwrot-z-inwestycji/), jak wartość zastosowana zasila następnie wskaźnik po korektach efektu jałowego i przypisania.

## Przykład obliczeniowy

**Organizacja charytatywna (SROI usługi towarzyszenia)**: wpis w bazie kosztów jednostkowych dla „zmniejszenia samotności” daje poglądowy zastępnik 1100 £ na osobę rocznie. Zastosowany do 80 beneficjentów: 80 × 1100 £ = 88 000 £ wartości brutto. Jeśli ta sama baza ma także zastępnik dla „poprawionego dobrostanu psychicznego”, który czerpie z nakładającego się pytania z ankiety dobrostanu, nałożenie obu zastępników dla tych samych 80 osób podwójnie policzyłoby część tej samej leżącej u podstaw zmiany — baza dostarcza liczbę, ale unikanie tego nakładania się jest obowiązkiem analityka.

**Samorząd lokalny (SROI klubu pracy)**: wpis w bazie kosztów jednostkowych dla „przejścia z bezrobocia do trwałego zatrudnienia” jest zastosowany do 45 uczestników przy poglądowym zastępniku 8500 £ na osobę rocznie: 45 × 8500 £ = 382 500 £ wartości brutto, przed korektami efektu jałowego i przypisania pokazanymi w [społecznym zwrocie z inwestycji](../społeczny-zwrot-z-inwestycji/).

## Związek z inżynierią oprogramowania

Zespoły budujące narzędzia raportowe dla organizacji charytatywnych lub zamawiających zyskują na wewnętrznym „katalogu rezultatów” — tabeli odwzorowującej każdy rezultat, który produkt lub usługa może wiarygodnie deklarować, na nazwany zastępnik, jego bazę źródłową, datę publikacji i identyfikator wersji — tak aby różne zespoły w organizacji nie wybierały nieco różnych wartości dla tego samego rezultatu. Opakowanie otwartych danych Global Value Exchange za usługą wyszukiwania, z źródłem i datą zawsze wyświetlanymi obok liczby, utrzymuje zastępnik audytowalnym, a nie magiczną liczbą pogrzebaną w arkuszu kalkulacyjnym. Zob. [społeczny zwrot z inwestycji](../społeczny-zwrot-z-inwestycji/) i [ustawa o wartości społecznej](../ustawa-o-wartości-społecznej/) dla dwóch głównych miejsc, gdzie te zastępniki są wykorzystywane.

## Pułapki

- **Traktowanie zastępników jako dokładnych.** Większość opublikowanych zastępników to modelowane średnie z badań wyceny dobrostanu o szerokich przedziałach ufności; podanie jednego z dokładnością do funta przecenia precyzję, którą wspierają leżące u podstaw badania.
- **Podwójne liczenie nakładających się zastępników.** Łączenie zastępników (np. „zmniejszona samotność” i „poprawiony dobrostan psychiczny”) wyprowadzonych z nakładających się konstruktów ankietowych wycenia tę samą leżącą u podstaw zmianę dwa razy.
- **Używanie zastępnika oderwanego od kontekstu bez korekty.** Zastępnik skalibrowany dla jednej populacji krajowej i roku, zastosowany gdzie indziej bez korekty o inflację lub kontekst, po cichu przekłamuje wartość.
- **Niesprawdzanie pochodzenia.** Global Value Exchange jest otwarty i zbiorowo tworzony, więc jakość wpisu zależy od autora; sprawdź leżące u podstaw źródło przed zacytowaniem liczby we wniosku o finansowanie lub zgłoszeniu zamówienia.

## Źródła

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — methodological basis of the
  UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," section on financial proxies.
