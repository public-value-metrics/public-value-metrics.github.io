# Rezultaty a produkty

Produkt (output) to bezpośredni, policzalny wynik działania — istnieje w chwili, gdy dochodzi do dostarczenia, niezależnie od tego, jaki ma skutek. Rezultat (outcome) to zmiana, która następuje dla zaangażowanych ludzi, miejsca lub systemu. „500 osób wzięło udział w warsztacie poszukiwania pracy” to produkt: jest prawdą, nawet jeśli żadna z nich nie znajdzie pracy. „Perspektywy zatrudnienia 500 osób się poprawiły” to twierdzenie o rezultacie i wymaga dowodu zmiany, a nie tylko dowodu obecności — to pomieszanie, które produkuje więcej wprowadzających w błąd raportów z grantów niż niemal jakikolwiek inny błąd pomiaru w sektorze.

## Dlaczego to ważne

Magenta Book HM Treasury i fundatorzy tacy jak National Lottery Community Fund wymagają raportowania rezultatów właśnie dlatego, że produkty to to, co programy raportują domyślnie: są tanie w zliczaniu, zawsze dostępne i zawsze wyglądają pozytywnie. Liczba produktów dosłownie nigdy nie może spaść w wyniku porażki programu — więcej przeprowadzonych sesji to zawsze „więcej”, podczas gdy rezultat może ujawnić, że program nie działa. National Audit Office wielokrotnie krytykował programy rządowe za raportowanie poziomów aktywności tak, jakby były dowodem sukcesu; system oprogramowania, który ułatwia raportowanie tylko produktów, domyślnie to wzmacnia, bo produkty nie wymagają zbierania danych kontrolnych, a rezultaty tak.

## Matematyka

Nie ma wzoru, ale istnieje niezawodny test klasyfikacji metryki:

```
Test produktu:  czy da się to policzyć w punkcie dostarczenia, prawdziwe nawet jeśli odbiorca nie jest dotknięty?
Test rezultatu: czy wymaga porównania przed/po lub z/bez, aby miało sens?

Jeśli liczba może być prawdziwa przy zerowej korzyści dla kogokolwiek, jest produktem.
```

To mieści się w szerszym łańcuchu [modelu logicznego](../model-logiczny/) i zależy od ogniw rezultatów zdefiniowanych w [teorii zmiany](../teoria-zmiany/); przeliczenie rezultatu na pieniądze wykorzystuje metody ze [społecznego zwrotu z inwestycji](../społeczny-zwrot-z-inwestycji/).

## Przykład obliczeniowy

**Samorząd lokalny (wsparcie zatrudnienia)**: produkt — 500 osób wzięło udział w warsztatach poszukiwania pracy. Rezultat — w 12-miesięcznej obserwacji 140 z tych 500 (28%) jest w trwałym zatrudnieniu (6+ miesięcy). Grupa porównawcza o podobnych cechach, ale bez dostępu do programu, ma bazowy wskaźnik zatrudnienia 15% w tym samym okresie. Netto wzrost rezultatu: 28% − 15% = 13 punktów procentowych, więc szacunkowo 500 × 0,13 = 65 dodatkowych osób pracuje, które inaczej by nie pracowały — przypisywalny rezultat, różny zarówno od liczby 500 obecnych, jak i od surowej liczby 140 zatrudnionych.

**Organizacja charytatywna (organizacja na rzecz czytania)**: produkt — 1200 sesji czytania przeprowadzonych dla 300 dzieci. Rezultat — średni wiek czytelniczy poprawił się o 8 miesięcy w ciągu 6-miesięcznego okresu, przy oczekiwanym naturalnym postępie bazowym 6 miesięcy w 6 miesięcy. Netto zysk rezultatu: 8 − 6 = 2 miesiące dodatkowej poprawy wieku czytelniczego na dziecko przypisywalne programowi, a nie pełna liczba 8 miesięcy.

## Związek z inżynierią oprogramowania

Dzienniki zdarzeń i systemy transakcyjne oprzyrządowują produkty niemal automatycznie — odsłony stron, sesje, zamknięte zgłoszenia, umówione wizyty — bo są generowane przez system wykonujący swoją pracę. Rezultaty wymagają modelu danych, który rejestruje tę samą osobę w późniejszym czasie względem punktu bazowego lub porównania, co trzeba celowo zaprojektować: ankiety kontrolne, powiązane rejestry administracyjne lub kohorta porównawcza. Narzędzie raportowe, które wspiera tylko to pierwsze, po cichu skieruje organizację ku raportowaniu wyłącznie produktów, niezależnie od tego, o co prosił fundator. Zob. [model logiczny](../model-logiczny/), gdzie rezultaty mieszczą się w łańcuchu rozliczalności, [koszt na rezultat](../koszt-na-rezultat/) dla przekształcenia tego rozróżnienia w metrykę kosztu jednostkowego, oraz [KPI sektora publicznego](../kpi-sektora-publicznego/) dla szerszego wzorca wyboru metryk.

## Pułapki

- **Raportowanie produktów tak, jakby były rezultatami.** „500 osób wzięło udział” sugeruje korzyść bez jej wykazania; jawnie oznacz obecność jako produkt.
- **Brak punktu bazowego lub grupy porównawczej.** Liczba rezultatu bez kontrfaktu — zob. [analiza kontrfaktyczna](../analiza-kontrfaktyczna/) — nie może oddzielić skutku programu od tego, co zaszłoby i tak.
- **Optymalizowanie pod finansowaną metrykę.** Gdy finansowanie jest powiązane z wolumenem produktów, zespoły realizujące racjonalnie maksymalizują frekwencję kosztem trwałej zmiany, tryb awarii prawa Goodharta.
- **Pranie rezultatów.** Przemianowanie metryki produktu językiem brzmiącym jak rezultat („rezultaty zaangażowania: 500 uczestników”) bez żadnego pomiaru kontrolnego z tyłu.

## Źródła

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
