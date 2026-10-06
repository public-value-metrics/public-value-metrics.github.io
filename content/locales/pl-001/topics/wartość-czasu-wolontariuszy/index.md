# Wartość czasu wolontariuszy

Wartość czasu wolontariuszy to pieniężne oszacowanie przypisane niepłatnej pracy, najczęściej używane do określenia prawdziwego śladu ekonomicznego organizacji charytatywnej — jej rachunków plus pracy, za którą nie musiała płacić — lub do wykazania, że dana interwencja jest bardziej opłacalna kosztowo, niż sugeruje sam budżet gotówkowy. Dominują dwie metodologie krajowe: szacunek Independent Sector w Stanach Zjednoczonych oraz podejście Office for National Statistics / NCVO w Zjednoczonym Królestwie, i wyceniają tę samą godzinę pracy dość różnie.

## Dlaczego to ważne

Co roku Independent Sector, we współpracy z Do Good Institute Uniwersytetu Maryland, publikuje krajową godzinową wartość czasu wolontariuszy, zbudowaną z danych o płacach Bureau of Labor Statistics — konkretnie ze średnich godzinowych zarobków pracowników produkcyjnych i niebędących kierownikami w prywatnych listach płac poza rolnictwem, plus korekta o świadczenia dodatkowe — i rozbitą według stanów USA. Jego najnowsza publikacja ustaliła wartość na **36,14 $ za godzinę w 2025 roku**, o 3,9% więcej niż rok wcześniej, przy wartościach na poziomie stanów od ponad 50 $ w Waszyngtonie (DC) do poniżej 20 $ w Portoryko. W Wielkiej Brytanii Office for National Statistics osobno oszacował koszt zastąpienia formalnego wolontariatu na **14,43 £ za godzinę** (szacunek z 2017 roku), a UK Civil Society Almanac 2024 NCVO wykorzystuje dane o uczestnictwie w wolontariacie — około 14,2 miliona osób formalnie wolontariuszy w latach 2021–22 — by oszacować całkowity wkład sektora w wolontariat na mniej więcej **18 miliardów £**, około 0,8% PKB Wielkiej Brytanii.

Powód, dla którego ma to znaczenie poza kosmetyką rachunkową: program silnie opierający się na pracy wolontariuszy może wyglądać dramatycznie taniej w ujęciu gotówkowym [kosztu na rezultat](../koszt-na-rezultat/) niż taki, który opiera się na płatnym personelu, nawet jeśli prawdziwy koszt zasobów — ile kosztowałoby zastąpienie tej pracy — jest podobny lub wyższy. Fundatorzy i ewaluatorzy, którzy ignorują wartość czasu wolontariuszy, systematycznie zaniżają prawdziwy koszt modeli realizacji ciężko opartych na wolontariacie, co zniekształca porównania sprawności z modelami z płatnym personelem dostarczającymi ten sam rezultat.

## Matematyka

```
Wartość czasu wolontariuszy = Wniesione godziny wolontariackie × stawka godzinowa

Wybór stawki ma znaczenie i zmienia odpowiedź:
  - Podejście kosztu zastąpienia: płaca płatnego pracownika, który wykonałby to samo
    zadanie (np. stawka kosztu zastąpienia dla wykwalifikowanego pracownika młodzieżowego,
    a nie ogólna średnia płaca) — najbardziej obronne dla wyceny specyficznej dla zadania
  - Podejście kosztu alternatywnego: własna utracona płaca wolontariusza — najbardziej
    obronne dla wyceny tego, z czego wolontariusz zrezygnował
  - Podejście średniej krajowej: pojedyncza zmieszana stawka Independent Sector lub ONS —
    najbardziej obronne dla nagłówkowej, międzysektorowej porównywalności
```

Trzy podejścia mogą się różnić o duży mnożnik dla tej samej godziny (adwokat będący wolontariuszem jako powiernik zarządu ma bardzo inną stawkę kosztu alternatywnego niż stawka średniej krajowej), więc każda raportowana liczba musi wskazywać, która metoda ją wytworzyła.

## Przykład obliczeniowy

**Brytyjska organizacja charytatywna, podejście średniej krajowej**: 5000 godzin wolontariackich w roku, wycenione po 14,43 £/godz. (szacunek kosztu zastąpienia ONS):

```
Wartość = 5000 × 14,43 £ = 72 150 £
```

Jeśli gotówkowe wydatki organizacji w tym roku wyniosły 300 000 £, jej prawdziwy koszt zasobów — gotówka plus praca wolontariuszy — wynosi 372 150 £, około 24% więcej, niż sugeruje sama liczba gotówkowa. Obliczenie kosztu na rezultat używające tylko liczby gotówkowej 300 000 £ zaniża prawdziwy koszt o ten sam margines.

**Amerykańska organizacja charytatywna, podejście średniej krajowej**: 2000 godzin wolontariackich wycenionych po 36,14 $/godz. (publikacja Independent Sector, 2025):

```
Wartość = 2000 × 36,14 $ = 72 280 $
```

**Ta sama amerykańska organizacja, podejście kosztu alternatywnego**: jeśli wolontariusze to nieproporcjonalnie emerytowani profesjonaliści, których wcześniejsze zarobki wynosiły średnio 60 $/godz., wycena kosztu alternatywnego wyniosłaby 120 000 $ — o dwie trzecie więcej niż liczba średniej krajowej, ilustrując, dlaczego metoda musi być podana.

## Związek z inżynierią oprogramowania

Systemy rejestrujące godziny wolontariuszy (narzędzia do planowania zmian, platformy zarządzania wolontariuszami) powinny rejestrować godziny na poziomie zadania lub roli, a nie tylko sumę, tak aby stawkę kosztu zastąpienia można było zastosować na rolę, a nie jedną ogólną stawkę średniej krajowej na mieszaną siłę roboczą wolontariuszy (godzina powiernika i godzina stewarda nie są ekonomicznie równoważne). Przechowywanie stawki i użytej metodologii obok obliczonej wartości — nie tylko końcowej liczby w walucie — pozwala dalszemu raportowaniu (rachunki roczne, obliczenia [społecznego zwrotu z inwestycji](../społeczny-zwrot-z-inwestycji/), raporty dla fundatorów) odtworzyć lub zakwestionować liczbę później, zamiast traktować ją jako nieprzezroczystą stałą. Zob. [koszt na rezultat](../koszt-na-rezultat/), dlaczego pominięcie wartości czasu wolontariuszy systematycznie zaniża prawdziwy koszt realizacji.

## Pułapki

- **Używanie jednej ogólnej stawki dla strukturalnie różnych ról.** Stawka płacy średniej krajowej zastosowana do profesjonalnej godziny pro bono (prawnej, finansowej, klinicznej) drastycznie ją niedowartościowuje; dopasuj stawkę do zastępowanej roli wszędzie tam, gdzie zadanie jest wykwalifikowane.
- **Podwójne liczenie względem kosztu płatnego personelu.** Jeśli wolontariusze zastępują pracę, która w przeciwnym razie byłaby płatna, upewnij się, że wycena jest addytywna wobec wydatków gotówkowych, a nie nałożona na już zawyżony szacunek zatrudnienia.
- **Cytowanie nieaktualnej stawki bez daty.** Stawki Independent Sector i ONS zmieniają się rocznie (lub są tylko okresowo ponownie szacowane, w przypadku ONS); liczba czasu wolontariuszy bez daty w raporcie jest niemal bezużyteczna do porównań.
- **Traktowanie wartości czasu wolontariuszy jako aktywa fundraisingowego.** To korekta rachunku kosztów do zrozumienia prawdziwego kosztu zasobów, a nie nowe pieniądze, które organizacja charytatywna może wydać; pomieszanie obu wprowadza w błąd zarząd czytający rachunki.

## Źródła

- Independent Sector and the Do Good Institute (University of Maryland), "Value of Volunteer Time." <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, Value of Volunteer Time methodology. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, volunteering valuation estimate, as cited in NCVO analysis. <https://www.ncvo.org.uk/>
