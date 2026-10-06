# Wielowymiarowy Wskaźnik Ubóstwa (MPI)

MPI mierzy ubóstwo jako nakładające się deprywacje, których osoba doświadcza jednocześnie — w zdrowiu, edukacji i standardzie życia — a nie jako sam dochód spadający poniżej linii. Został opracowany przez Oxford Poverty and Human Development Initiative (OPHI) z Sabiną Alkire i Jamesem Fosterem i jest publikowany wspólnie z UNDP w każdym Human Development Report od 2010 roku, obok [Wskaźnika Rozwoju Społecznego](../wskaźnik-rozwoju-społecznego/).

## Dlaczego to ważne

Dochodowe linie ubóstwa pomijają ludzi, którzy mają dość dochodu gotówkowego, ale brakuje im czystej wody, szkolnictwa lub którzy przeżyli śmierć dziecka — i pomijają fakt, że deprywacje się skupiają: gospodarstwo bez elektryczności jest nieproporcjonalnie prawdopodobnie pozbawione także sanitariatów i ma niedożywione dziecko. Metoda Alkire–Foster, na której zbudowany jest MPI, liczy deprywacje każdej osoby w dziesięciu wskaźnikach pogrupowanych w trzy równo ważone wymiary — zdrowie, edukacja, standard życia — i klasyfikuje kogoś jako „ubogiego według MPI” tylko, jeśli jego ważony wynik deprywacji przekracza ustalony próg, uchwytując nakładanie się, którego zestaw osobnych statystyk jednowskaźnikowych nie potrafi. OPHI publikuje pełną metodologię i dane krajowe na <https://ophi.org.uk/multidimensional-poverty-index/>; globalny MPI, który utrzymuje wspólnie z UNDP, obejmuje obecnie ponad 110 krajów. Dla oprogramowania budowanego na potrzeby programów walki z ubóstwem — transfery gotówkowe, segregacja opieki społecznej, targetowanie pomocy — zestaw wskaźników MPI jest często najbliższą rzeczą do ustandaryzowanego schematu deprywacji już zwalidowanego w dziesiątkach krajowych urzędów statystycznych.

## Matematyka

```
10 wskaźników, 3 wymiary, każdy wymiar ważony 1/3:

Zdrowie (1/3):             odżywianie (1/6), śmiertelność dzieci (1/6)
Edukacja (1/3):            lata nauki (1/6), uczęszczanie do szkoły (1/6)
Standard życia (1/3):      paliwo do gotowania, sanitariaty, woda pitna,
                           elektryczność, mieszkanie, majątek (po 1/18)

wynik deprywacji (c) = suma wag wskaźników, w których osoba jest deprywowana

osoba jest „uboga według MPI”, jeśli c ≥ 1/3 (próg ubóstwa, k = 33%)

H (wskaźnik liczby osób) = liczba ubogich według MPI / całkowita populacja
A (intensywność)          = średni wynik deprywacji tylko wśród ubogich według MPI

MPI = H × A
```

Ponieważ MPI mnoży *udział* ubogich przez to, *jak bardzo* są ubodzy, dwa regiony o tym samym wskaźniku liczby osób mogą mieć bardzo różne wyniki MPI, jeśli deprywacje są poważniejsze w jednym — ta sama logika „braku substytucji między wymiarami” co za średnią geometryczną HDI.

## Przykład obliczeniowy

**Krajowe badanie 1000 osób**: 350 jest zidentyfikowanych jako ubodzy wielowymiarowo (wynik deprywacji ≥ 33%). Wśród samych tych 350 ubogich osób średni wynik deprywacji wynosi 45%.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Porównanie dwóch okręgów o równej liczbie osób**: Okręg A ma H = 0,30 i A = 0,40 (wielu ubogich, umiarkowanie deprywowanych); Okręg B ma H = 0,30 i A = 0,60 (ta sama liczba ubogich, ale poważniej deprywowanych — pozbawionych jednocześnie elektryczności *i* sanitariatów *i* uczęszczania do szkoły).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Ten sam wskaźnik liczby osób, o 50% wyższy MPI w Okręgu B — system targetowania oparty wyłącznie na ubóstwie mierzonym liczbą osób uszeregowałby oba okręgi identycznie i przeoczył, że Okręg B wymaga głębszej interwencji.

## Związek z inżynierią oprogramowania

- Systemy obsługi spraw i uprawnień dla programów społecznych często już przechowują kilka z dziesięciu wskaźników (mieszkanie, uczęszczanie do szkoły, wskaźniki zdrowia) w oddzielnych silosach; metoda liczenia Alkire–Foster to gotowy schemat łączenia ich w jeden wynik deprywacji zamiast budowania od zera własnego modelu punktacji.
- Podział na liczbę osób/intensywność (H × A) to ogólnie użyteczny wzorzec dla każdego pulpitu raportującego „ilu jest dotkniętych” obok „jak bardzo” — zwinięcie obu do jednej liczby, jak robią surowe statystyki rozpowszechnienia, ukrywa dokładnie przypadek wymagający najwięcej zasobów.
- Pulpity wskaźnikowe w stylu MPI naturalnie łączą się z raportowaniem [kosztu na beneficjenta](../koszt-na-beneficjenta/) dla programów walki z ubóstwem: koszt na punkt redukcji MPI to obronna jednostka do porównywania bardzo różnych interwencji (transfer gotówkowy a infrastruktura sanitarna).

## Pułapki

- **Traktowanie dziesięciu wskaźników jako uniwersalnych** — globalne wskaźniki MPI OPHI są kalibrowane dla porównywalności między krajami; krajowe MPI (wiele krajów, w tym kilka w Azji Południowej i Afryce, publikuje własne) dostosowują wskaźniki i wagi do kontekstu lokalnego, i oba nie są bezpośrednio porównywalne.
- **Raportowanie samego H** — wskaźnik liczby osób całkowicie ignoruje intensywność; zawsze raportuj lub oblicz obok niego A albo sam MPI.
- **Zakładanie, że ubodzy według MPI i ubodzy dochodowo to ta sama populacja** — własne zestawienia krajowe OPHI zwykle pokazują tylko częściowe nakładanie się obu; program targetujący wyłącznie ubogich dochodowo systematycznie pominie znaczący odsetek ubogich wielowymiarowo.

## Źródła

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
