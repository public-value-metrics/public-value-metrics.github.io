# Metryki DORA dla wartości publicznej

Metryki DORA (DevOps Research and Assessment) — częstotliwość wdrożeń, czas realizacji zmian, wskaźnik niepowodzeń zmian i czas przywrócenia usługi, plus niezawodność jako piąta — to najlepiej zwalidowane punkty odniesienia wydajności dostarczania w branży oprogramowania. Przełożone na terminy rozliczalności sektora publicznego, każda z nich jest bezpośrednim zastępnikiem tego, jak szybko i jak bezpiecznie wartość publiczna dociera do obywatela.

## Dlaczego to ważne

Dekada badań DORA, publikowanych co roku jako *Accelerate State of DevOps Report* (metodologia Forsgren, Humble i Kima, obecnie prowadzona przez Google Cloud), grupuje zespoły w elitarne, wysokie, średnie i niskie. Zespoły elitarne wdrażają na żądanie, potrzebują poniżej dnia od commitu do produkcji, zawodzą w około 5% zmian i regenerują się w mniej niż godzinę; zespoły niskie wdrażają co miesiąc lub rzadziej, potrzebują miesięcy, zawodzą w około 40% zmian i regenerują się w tygodniach. W administracji nie są to próżne metryki inżynierskie: Service Standard Government Digital Service wymaga od zespołów „iterowania i ulepszania często” oraz zdolności szybkiego reagowania na potrzeby użytkowników, a resorty, które nie potrafią wdrażać bezpiecznie i często, są strukturalnie niezdolne spełnić ten standard, cokolwiek mówią ich badania użytkowników. Własna praca Cabinet Office nad cyfrową sprawnością stwierdziła, że popchnięcie obywatela z nieudanej lub wolnej transakcji cyfrowej do kanału telefonicznego lub papierowego jest kosztowne — Digital Efficiency Report GDS z 2012 roku oszacował, że niektóre transakcje cyfrowe kosztują zaledwie 20 pensów wobec kontaktów telefonicznych lub osobistych kosztujących do 8,62 £ — więc niepowodzenie zmiany w usłudze skierowanej do publiczności kosztuje nie tylko czas inżynierów, ale przesuwa realne funty na budżet centrum kontaktu (zob. [oszczędności z przesunięcia kanałów](../oszczędności-z-przesunięcia-kanałów/)).

## Matematyka

```
Częstotliwość wdrożeń           = wdrożenia na produkcję / czas
Czas realizacji zmian           = t(wdrożenie) − t(commit), mediana
Wskaźnik niepowodzeń zmian      = nieudane zmiany / wszystkie zmiany × 100
Czas przywrócenia (MTTR)        = t(przywrócono) − t(awaria), mediana
Niezawodność                    = osiągnięcie SLO (dostępność, opóźnienie, poprawność)
```

Przekłady na wartość publiczną:

```
Czas realizacji → tygodnie w potoku × CoD, zob. cost-of-delay-in-public-programmes
Wskaźnik niepowodzeń → wskaźnik incydentów skierowanych do obywateli: CFR × koszt na
                 przekierowane połączenie do centrum kontaktu (lub na nieudaną
                 transakcję ustawową)
Czas przywrócenia → szkoda z przerwy w usłudze: MTTR × (zablokowane wnioski/zgłoszenia
                 na godzinę) × dalszy koszt lub strata dobrostanu na jednostkę
Niezawodność    → dyskonto korzyści: usługa o 99% dostępności dostarcza
                 ≈ 0,99 swojej modelowanej korzyści — odpowiednik w dostarczaniu
                 niedoboru wykorzystania lub zgodności
```

## Przykład obliczeniowy

Zespół portalu wniosków o świadczenia samorządu lokalnego, przed i po inwestycji w inżynierię dostarczania:

```
                    Przed       Po
Wdrożenia           miesięczne  tygodniowe
Czas realizacji     8 tygodni   5 dni
CFR                 30%         10%
MTTR                3 dni       4 godziny
```

Zespół dostarcza około 25 usprawnień rocznie, średnia wartość 8000 £/tydzień ([koszt opóźnienia](../koszt-opóźnienia-w-programach-publicznych/)). Skrócenie czasu realizacji o mniej więcej 7,3 tygodnia przyspiesza strumień korzyści każdego usprawnienia: 25 × 7,3 × 8000 ≈ **1 460 000 £/rok** wartości dostarczonej wcześniej. Przy wskaźniku niepowodzeń: 25 × (0,30 − 0,10) = 5 mniej nieudanych zmian rocznie; każda nieudana zmiana na publicznym portalu zwykle przekierowuje szacunkowo 2000 obywateli do kanału telefonicznego po 8,62 £ wobec 20 pensów, koszt netto mniej więcej 8,42 £ × 2000 ≈ 16 840 £ na incydent, więc uniknięcie 5 incydentów oszczędza ≈ **84 200 £/rok**. Inwestycja w inżynierię dostarczania jest wyceniona w tej samej walucie co każdy inny przypadek wartości publicznej.

## Przykład obliczeniowy – ciąg dalszy: niezawodność

Jeśli portal działa na poziomie 97% dostępności zamiast docelowych 99,5%, a każdy punkt procentowy przestoju jest modelowany jako 2% wniosków utraconych przez porzucenie, usługa dostarcza mniej więcej 0,975 swojej modelowanej korzyści 2 mln £/rok — dyskonto korzyści 50 000 £/rok, którego czysty pulpit czasu działania nigdy nie ujawnia.

## Związek z inżynierią oprogramowania

Metryki DORA to metryki operacyjne usługi publicznej w innych ubraniach: czas realizacji odwzorowuje się na [standardy usług i metryki transakcji](../standardy-usług-i-metryki-transakcji/); wskaźnik niepowodzeń zmian odwzorowuje się na wskaźniki przeróbek i skarg; MTTR odwzorowuje się na to, jak długo usługa ustawowa jest niedostępna dla wnioskodawców. Techniki usprawniania przenoszą się w obie strony, bo oba to systemy kolejkowe pod ograniczeniami rozliczalności — zob. [metryki przepływu w dostarczaniu rządowym](../metryki-przepływu-w-dostarczaniu-rządowym/) dla leżącej u podstaw matematyki kolejek. Zwróć też uwagę na ustalenie DORA z 2025 roku, że przyjęcie AI koreluje z wyższą przepustowością, ale *gorszą* stabilnością — interwencja zarówno ze skutecznością, jak i skutkami ubocznymi, co jest dokładnie analizą korzyści netto, którą przechodzi temat [produktywności AI](../produktywność-ai-w-sektorze-publicznym/) w tym rozdziale.

## Pułapki

- **Manipulowanie metrykami**: zawyżanie liczby wdrożeń pustymi wydaniami lub wykluczanie poprawek awaryjnych z liczenia niepowodzeń zmian. Definiuj zdarzenia tak precyzyjnie, jak ustawowy standard usługi definiuje „udaną transakcję”.
- **Tabele rankingowe między resortami**: klastry DORA porównują praktyki dostarczania, a nie usługi o różnych profilach ryzyka; system płatności podatków oceniony jako „wysoki” może być właściwą postawą, gdzie „elitarny” byłby nierozważny, biorąc pod uwagę wymogi zapewnienia jakości.
- **Optymalizowanie tylko jednej metryki**: szybkość bez wskaźnika niepowodzeń zmian to klasyczny kompromis przepustowość–niestabilność — raportuj wszystkie cztery razem, a nie jako jeden wynik.

## Źródła

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
