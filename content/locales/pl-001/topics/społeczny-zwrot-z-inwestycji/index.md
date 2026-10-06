# Społeczny zwrot z inwestycji (SROI)

Społeczny zwrot z inwestycji to rama mierzenia, wyceniania pieniężnie i rozliczania szerokiego pojęcia wartości — społecznej, środowiskowej i ekonomicznej — i wyrażania go jako wskaźnika względem zainwestowanych zasobów, na przykład „1,44 £ wartości społecznej na każdy zainwestowany 1 £”. Zaprojektowano go, by rozszerzyć logikę rachunkowości finansowej na rezultaty, których rynki nie wyceniają, nie tracąc dyscypliny rachunkowości: każda liczba w SROI musi dać się prześledzić do rezultatu zdefiniowanego przez interesariuszy, bazy dowodowej i jawnej korekty o to, co zaszłoby i tak.

## Dlaczego to ważne

SROI jest utrzymywany przez Social Value UK i Social Value International, organizacje następcze SROI Network, którego „A Guide to Social Return on Investment” (2012) nadal jest metodologią referencyjną. Rama opiera się na siedmiu zasadach — angażuj interesariuszy, zrozum, co się zmienia, wyceniaj to, co ma znaczenie, uwzględniaj tylko to, co istotne, nie przeceniaj, bądź przejrzysty i zweryfikuj wynik — a to zasada piąta, „nie przeceniaj”, jest tą, której nie spełnia większość raportów SROI w praktyce. Wskaźnik uzyskany przez pominięcie korekt efektu jałowego i przypisania nie jest SROI; to liczba marketingowa w ubraniu SROI. Inżynierowie oprogramowania budujący narzędzia raportowe dla organizacji charytatywnych, przedsiębiorstw społecznych czy zamawiających muszą znać różnicę, bo narzędzie albo wymusi dyscyplinę, albo ułatwi jej pominięcie.

## Matematyka

SROI zależy od [teorii zmiany](../teoria-zmiany/) do określenia, które rezultaty są w zakresie, i wyraża je za pomocą tego samego łańcucha rozliczalności co [model logiczny](../model-logiczny/):

```
Wskaźnik SROI = Wartość bieżąca rezultatów / Wartość nakładów

Proces:
 1. Ustal zakres i zidentyfikuj interesariuszy, których rezultaty będą mierzone
 2. Zmapuj rezultaty (teoria zmiany, uzasadniona z interesariuszami, a nie założona)
 3. Udokumentuj rezultaty i nadaj im wartość za pomocą zastępników finansowych
 4. Ustal wpływ: wartość brutto − efekt jałowy − przypisanie − wypieranie, następnie zastosuj spadek
 5. Oblicz SROI: bieżąca wartość netto wpływu ÷ wartość nakładów
 6. Raportuj, używaj i wbuduj — wskaźnik jest narzędziem komunikacji, a nie punktem końcowym
```

Efekt jałowy, przypisanie i wypieranie omawiają [dodatkowość i efekt jałowy](../dodatkowość-i-efekt-jałowy/) oraz [wypieranie i przypisanie](../wypieranie-i-przypisanie/); wszystkie trzy istnieją po to, by wyodrębnić prawdziwy [kontrfaktyczny](../analiza-kontrfaktyczna/) wpływ z rezultatu brutto.

## Przykład obliczeniowy

**Program zatrudnienia samorządu lokalnego**: roczny koszt nakładów 250 000 £. Sześćdziesięciu uczestników przechodzi do trwałego zatrudnienia; zastępnik finansowy tego rezultatu (łącznie wzrost dobrostanu, mniejsza zależność od świadczeń i wpływy podatkowe) wynosi 8500 £ na osobę za pierwszy rok — zob. [bazy kosztów jednostkowych](../bazy-kosztów-jednostkowych/), skąd biorą się takie zastępniki.

- Wartość rezultatu brutto: 60 × 8500 £ = 510 000 £
- Minus efekt jałowy (40% prawdopodobnie znalazłoby pracę bez programu): 510 000 £ × 0,60 = 306 000 £
- Minus przypisanie (30% pozostałej zmiany wynika z pomocy innych instytucji): 306 000 £ × 0,70 = 214 200 £
- Rezultat w roku 2 przy spadku 30%: 214 200 £ × 0,70 = 149 940 £, zdyskontowany 3,5%/rok (zob. [społeczna stopa dyskontowa](../społeczna-stopa-dyskontowa/)): 149 940 £ ÷ 1,035 = 144 870 £
- Całkowita wartość bieżąca wpływu: 214 200 £ + 144 870 £ = 359 070 £
- **Wskaźnik SROI: 359 070 £ ÷ 250 000 £ = 1,44**, raportowany jako „1,44 £ wartości społecznej na każdy zainwestowany 1 £”

**Organizacja charytatywna**: usługa towarzyszenia za 60 000 £ zmniejsza samotność 80 starszych osób, wycenioną zastępnikiem 1100 £/osobę/rok. Wartość brutto 88 000 £; po 35% efektu jałowego i 15% przypisania wpływ netto to 88 000 £ × 0,65 × 0,85 = 48 620 £, wskaźnik SROI 0,81 — poniżej progu rentowności, co jest zasadnym i użytecznym ustaleniem, a nie porażką do przemilczenia.

## Związek z inżynierią oprogramowania

Kalkulator SROI, który pozwala użytkownikowi wpisać liczby rezultatów i wartości zastępników, ale nie ma wymaganego pola dla efektu jałowego, przypisania ani powiązanej teorii zmiany, domyślnie wytworzy zawyżone wskaźniki, bo pomijanie korekt to ścieżka najmniejszego oporu. Wbuduj dyscyplinę w schemat: każdy wiersz rezultatu powinien odwoływać się do grupy interesariuszy, udokumentowanej ilości, zastępnika finansowego z jego źródłem oraz nieopcjonalnych pól efektu jałowego/przypisania. Zob. [rezultaty a produkty](../rezultaty-a-produkty/) dla rozróżnienia, od którego zależy mapowanie rezultatów SROI, oraz [model logiczny](../model-logiczny/) dla łańcucha, który narzędzie powinno odzwierciedlać w swoim modelu danych.

## Pułapki

- **Pomijanie efektu jałowego i przypisania.** Nagłówkowy wskaźnik bez tych korekt to liczba brutto, a nie liczba wpływu netto, a zasady Social Value UK wyraźnie wymagają obu.
- **Porównywanie wskaźników między organizacjami.** Wskaźnik SROI zależy od zakresu i wyborów zastępników dokonywanych w każdym przypadku z osobna; traktowanie wskaźnika 4:1 z jednego raportu jako „lepszego” niż 2:1 z innego ignoruje to, że założenia nie są ustandaryzowane jak wskaźnik rachunkowości finansowej.
- **Podwójne liczenie nakładających się zastępników.** Nałożenie zastępnika „zmniejszona samotność” na zastępnik „poprawiony dobrostan psychiczny” dla tych samych beneficjentów może podwójnie wycenić jedną leżącą u podstaw zmianę.
- **Pomijanie zaangażowania interesariuszy.** Zasada pierwsza wymaga, by rezultaty były definiowane z osobami, które ich doświadczają, a nie zakładane przez analityka budującego model.

## Źródła

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
