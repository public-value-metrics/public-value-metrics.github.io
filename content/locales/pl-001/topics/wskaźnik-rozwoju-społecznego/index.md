# Wskaźnik Rozwoju Społecznego (HDI)

HDI to nagłówkowa alternatywa ONZ dla szeregowania krajów wyłącznie według dochodu: łączy oczekiwaną długość życia, edukację i dochód w jedną liczbę między 0 a 1, przy założeniu — argumentowanym przez ekonomistę Amartyę Sena i opracowanym dla ONZ przez Mahbuba ul Haqa — że rozwój polega na rozszerzaniu tego, co ludzie mogą robić i kim mogą być, a nie tylko tego, ile zarabiają. Jest publikowany co roku w Human Development Report Programu Narodów Zjednoczonych ds. Rozwoju od 1990 roku.

## Dlaczego to ważne

Przed HDI „rozwój” był mierzony niemal wyłącznie PNB na mieszkańca, co nic nie mówi o tym, czy wzrost dociera do zdrowia czy edukacji zwykłych ludzi. Podejście zdolności Sena przeramowało rozwój jako rozszerzanie realnych wolności, a ul Haq zamienił to w publikowalny indeks, według którego UNDP mógł szeregować każdy kraj, zmuszając rządy, które wzbogaciły się wyłącznie dochodem, ale zaniedbały zdrowie czy szkolnictwo, do zmierzenia się z gorszą pozycją, niż sugerowało ich PKB (państwa naftowe Zatoki i niektóre gospodarki wydobywcze są standardowymi przykładami). Trójczłonowa struktura HDI jest też bezpośrednim metodologicznym przodkiem [Wielowymiarowego Wskaźnika Ubóstwa](../wielowymiarowy-wskaźnik-ubóstwa/): oba odmawiają pozwolenia, by jeden wymiar odkupił niedobór w innym, używając średniej geometrycznej zamiast arytmetycznej. UNDP publikuje pełne noty techniczne i dane źródłowe dla każdej edycji (<https://hdr.undp.org/data-center/human-development-index>), co jest kanonicznym źródłem dla każdego, kto buduje na indeksie, zamiast wyprowadzać go od nowa.

## Matematyka

```
Wskaźnik Oczekiwanej Długości Życia (LEI)  = (LE − 20) / (85 − 20)

Wskaźnik Średnich Lat Nauki                 = średnie lata nauki / 15
Wskaźnik Oczekiwanych Lat Nauki             = oczekiwane lata nauki / 18
Wskaźnik Edukacji (EI)                      = (Wskaźnik Średnich Lat + Wskaźnik Oczekiwanych Lat) / 2

Wskaźnik Dochodu (II)                       = (ln(DNB na mieszkańca) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [średnia geometryczna trzech podwskaźników]
```

Średnia geometryczna jest zamierzona: ponieważ mnoży, a nie uśrednia, bardzo wysoki wynik w jednym wymiarze nie może w pełni zrównoważyć bardzo niskiego wyniku w innym — projekt, który UNDP przyjął w 2010 roku specjalnie po to, by karać brak równowagi, zastępując poprzedni wzór średniej arytmetycznej.

## Przykład obliczeniowy

**Kraj o średnich dochodach**: oczekiwana długość życia 72 lata, średnie lata nauki 8, oczekiwane lata nauki 13, DNB na mieszkańca 12 000 $.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
MYSI = 8 / 15                                        = 0,533
EYSI = 13 / 18                                       = 0,722
EI = (0,533 + 0,722) / 2                             = 0,628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

HDI 0,713 mieści się w paśmie UNDP „wysoki rozwój społeczny” (0,700–0,799); „bardzo wysoki” zaczyna się od 0,800. Zwróć uwagę, jak wrażliwy jest wynik na najsłabszy podwskaźnik: gdyby średnie lata nauki wynosiły 4 zamiast 8 (MYSI = 0,267, EI = 0,494), HDI spada do (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639 — spadek o pełne pasmo — mimo że nic innego się nie zmieniło.

## Związek z inżynierią oprogramowania

- Wzorzec średniej geometrycznej jest bezpośrednio wykorzystywalny dla każdego złożonego wyniku usługi lub produktu, w którym nie chcesz, by jeden mocny wymiar przykrył krytycznie słaby — np. łączenie wyników dostępności, wydajności i niezawodności dla publicznej usługi cyfrowej mnożeniowo zamiast średnią ważoną, tak aby usługa szybka, ale niedostępna, nie mogła uzyskać „dobrego” wyniku.
- Transformacja logarytmiczna dochodu w HDI (malejąca krańcowa wartość dodatkowego funta) to ta sama logika, która stoi za [ważeniem dystrybucyjnym](../ważenie-dystrybucyjne/) w ocenie: dodatkowe 1000 $ znaczy znacznie więcej dla biednego gospodarstwa niż dla bogatego, a traktowanie obu liniowo przekłamuje wycenę wpływu.
- Każdy pulpit raportujący pojedynczy zmieszany wynik „włączenia cyfrowego” czy „rezultatów obywateli” powinien dokumentować swój wzór agregacji tak jawnie, jak noty techniczne UNDP — zob. [KPI sektora publicznego](../kpi-sektora-publicznego/) i [kartę wyników wartości publicznej](../karta-wyników-wartości-publicznej/).

## Pułapki

- **Uśrednianie zamiast średniej geometrycznej** — średnia arytmetyczna pozwala wysokiemu dochodowi całkowicie zamaskować słabe zdrowie lub edukację; całym sensem zmiany metodologii z 2010 roku było powstrzymanie tej substytucji.
- **Porównywanie HDI rok do roku tak, jakby to było PKB urealnione o inflację** — UNDP okresowo przebazowuje indeks (nowe granice minimum/maksimum, zrewidowane pułapy szkolnictwa), więc zmiana pozycji może odzwierciedlać aktualizację metodologii, a nie realne przesunięcie; zawsze sprawdzaj, z której edycji HDR pochodzi liczba.
- **Traktowanie HDI jako miary ubóstwa** — to średnia krajowa, która nic nie mówi o rozkładzie wewnątrz kraju; do tego użyj [Wielowymiarowego Wskaźnika Ubóstwa](../wielowymiarowy-wskaźnik-ubóstwa/) lub odrębnego Wskaźnika Rozwoju Społecznego skorygowanego o nierówności UNDP.

## Źródła

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
