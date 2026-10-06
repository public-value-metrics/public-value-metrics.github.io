# KPI sektora publicznego

Kluczowy wskaźnik efektywności (KPI) to wybrana, śledzona miara, która zastępuje odpowiedź na pytanie, czy usługa publiczna dobrze wykonuje swoją pracę. W administracji wybór KPI nigdy nie jest neutralny: ponieważ KPI wiążą się z budżetami, tabelami rankingowymi i karierami, sam akt wyboru jednego z nich kształtuje zachowanie wszystkich za nim podążających, często bardziej niż polityka, która stworzyła usługę.

## Dlaczego to ważne

Obserwacja Charlesa Goodharta z 1975 roku o polityce pieniężnej — później spopularyzowana przez Marilyn Strathern jako „gdy miara staje się celem, przestaje być dobrą miarą” — to najważniejsza etykieta ostrzegawcza w zarządzaniu wynikami sektora publicznego. KPI wybrany, by *opisywać* system, zaczyna ten system *zniekształcać* w chwili, gdy zasoby, wynagrodzenia lub polityczne przetrwanie zostaną z nim powiązane. Klasyczną ilustracją są czasy reakcji karetek NHS: gdy ośmiominutowy cel reakcji Kategorii A stał się wiążący, wykazano, że niektóre trusty „stosowały” karetki tuż poza zegarem czasu reakcji lub przeklasyfikowywały wezwania, by trafić w liczbę bez zmiany wyników leczenia pacjentów. Wytyczne brytyjskiego National Audit Office dotyczące wyboru i stosowania wskaźników efektywności — zawarte w jego raportach wartości za pieniądze oraz w „Performance Measurement by Regulators” i ramach „Choosing the Right FABRIC” (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) — istnieją właśnie dlatego, że resorty wciąż wybierały wskaźniki łatwe do raportowania zamiast wskaźników trudnych do manipulowania. Inżynier oprogramowania, który wypuszcza pulpit, według którego będzie oceniany minister lub dyrektor, chcąc czy nie, projektuje strukturę zachęt instytucji publicznej.

## Matematyka

Projektowanie KPI to temat w kształcie ramy, ale *ocena* kandydata na KPI to powtarzalna lista kontrolna, a nie wzór:

```
Dla każdego kandydata na KPI oceń względem:
  Dopasowany do celu — czy mierzy rezultat, czy zastępnik oddalony o kilka kroków?
  Odpowiedni         — czy należy do ludzi, którzy rzeczywiście mogą na niego wpływać?
  Zrównoważony       — czy jest sparowany z kontr-metryką wychwytującą manipulację?
  Odporny            — czy przetrwa audyt, czy jest samoopisowy i niezweryfikowalny?
  Zintegrowany       — czy pasuje do szerszego zestawu, czy kłóci się z innym KPI?
  Opłacalny          — czy jego zbieranie kosztuje więcej niż decyzja, którą informuje?

Podział na wiodące i opóźnione:
  Wskaźnik wiodący   → przewiduje przyszły rezultat, ale często manipulowalny (np. połączenia odebrane <60 s)
  Wskaźnik opóźniony → potwierdza, że rezultat nastąpił, ale przychodzi za późno, by sterować
                       (np. roczne badanie satysfakcji)
  Obronny zestaw KPI paruje co najmniej po jednym z każdego na cel.
```

## Przykład obliczeniowy

**Trust pogotowia**: trust raportuje KPI czasu reakcji Kategorii A (zagrożenie życia) „75% wezwań obsłużonych w ciągu 8 minut”. W jednym kwartale przychodzi 6000 wezwań Kategorii A; 4500 jest spełnionych w ciągu 8 minut, co daje 75,0% — pozornie na celu.

```
Nagłówkowy KPI = 4500 / 6000 × 100 = 75,0%  (spełnia próg 75%)
```

Ale audyt Goodharta dodaje kontr-metrykę: średni czas reakcji dla najwolniejszych 10% wezwań.

```
Średnia reakcja najwolniejszego decyla = 34 minuty (w porównaniu z 19 minutami dwa lata wcześniej)
```

Trust trafia w cel, podczas gdy ogon — wezwania najbardziej prawdopodobnie naprawdę zagrażające życiu, gdy segregacja jest niedoskonała — znacznie się pogorszył, ponieważ zespoły są kierowane ku wezwaniom bliskim 8-minutowej krawędzi klifu, a nie ku pilności klinicznej. Pojedynczy KPI opowiedział fałszywą historię; sparowany KPI opowiedział prawdziwą.

## Związek z inżynierią oprogramowania

Inżynierowie budujący pulpity wydajności dla administracji funkcjonalnie projektują API zachęt organizacji. Praktyczne implikacje: oprzyrządowuj *mianownik* równie rygorystycznie jak licznik (KPI raportowany jako goły procent zaprasza manipulację mianownikiem — zob. [koszt na transakcję](../koszt-na-transakcję/) dla tej samej pułapki w usługach cyfrowych); wbuduj kontr-metryki w ten sam pulpit zamiast w osobny raport, którego nikt nie czyta, aby manipulacja była widoczna w punkcie decyzji; i wersjonuj definicję KPI, bo cicha redefinicja (zmiana tego, co liczy się jako „połączenie”, „sprawa” czy „ukończenie”) funkcjonalnie równa się zmianie celu bez ogłoszenia. [Karta wyników wartości publicznej](../karta-wyników-wartości-publicznej/) to jeden ze zorganizowanych sposobów, by powstrzymać odczytywanie pojedynczego KPI w izolacji, a [rozliczalność oparta na rezultatach](../rozliczalność-oparta-na-rezultatach/) to dyscyplina wyboru KPI na poziomie populacji, których pojedynczy zespół nie może jednostronnie zniekształcić.

## Pułapki

- **Wybór łatwej do zebrania metryki zamiast znaczącej**: czas odbioru połączenia jest trywialny do zalogowania; czy połączenie rozwiązało problem obywatela — nie — ale tylko to drugie jest rezultatem. Opieraj się domyślnemu wyborowi tego, co system już emituje.
- **Brak kontr-metryki**: każdy KPI powiązany z pieniędzmi lub reputacją będzie na marginesie manipulowany; dostarcz go ze sparowaną metryką wychwytującą prawdopodobny wektor manipulacji przed opublikowaniem.
- **Redefiniowanie metryki bez dziennika zmian**: zamiana „połączeń otrzymanych” na „połączenia odebrane”, by upiększyć trend, niszczy wiarygodność szeregu czasowego w chwili odkrycia — zawsze publikuj dziennik zmian definicji obok liczb.
- **Mylenie działania z rezultatem**: liczenie ukończonych inspekcji to produkt; liczenie obiektów doprowadzonych do zgodności jest bliższe rezultatowi (zob. [rezultaty a produkty](../rezultaty-a-produkty/)).

## Źródła

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
