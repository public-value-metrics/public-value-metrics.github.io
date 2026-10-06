# Wartość otwartych danych

Wartość otwartych danych to problem szacowania, ile warte są dane rządowe i publiczne, gdy nie mają ceny: nie są sprzedawane, więc nie ma pozycji przychodów, a jednak ich udostępnienie (zapisy pogodowe, rozkłady jazdy, granice kodów pocztowych, rejestry spółek) w widoczny sposób generuje aktywność ekonomiczną i społeczną w dół strumienia. Dobre wycenienie ma znaczenie, ponieważ „udostępnienie jest darmowe” i „to jest bezwartościowe” są oba błędne, a inżynier oprogramowania decydujący, czy otworzyć API lub zbiór danych, potrzebuje lepszego argumentu niż każdy z nich.

## Dlaczego to ważne

Najczęściej cytowany szacunek odgórny pochodzi z raportu McKinsey Global Institute z 2013 roku „Open data: Unlocking innovation and performance with liquid information”, który określił potencjalną roczną wartość otwartych danych w siedmiu dziedzinach — edukacji, transporcie, produktach konsumenckich, energii elektrycznej, ropie i gazie, opiece zdrowotnej i finansach konsumenckich — na 3 do 5 bilionów $ rocznie globalnie, poprzez mechanizmy obejmujące zwiększoną przejrzystość, sprawniejsze dopasowanie podaży do popytu oraz umożliwienie nowych produktów i usług budowanych na danych. Ta liczba jest szacunkiem scenariuszowym, a nie zmierzonym wynikiem, i bywa rutynowo błędnie cytowana tak, jakby były to przychody, które rząd mógłby przechwycić bezpośrednio, podczas gdy wartość narasta głównie u osób trzecich — firm, badaczy, obywateli — korzystających z danych, co jest dokładnie sensem ich otwierania zamiast sprzedawania. Open Data Institute z Wielkiej Brytanii, współzałożony przez Sir Tima Bernersa-Lee i Sir Nigela Shadbolta w 2012 roku, zbudował od tego czasu zbiór bardziej szczegółowych, oddolnych studiów przypadków — sektor po sektorze, zbiór danych po zbiorze danych — które są znacznie użyteczniejsze dla prawdziwego uzasadnienia biznesowego niż nagłówkowa liczba McKinsey, bo pokazują mechanizm tworzenia wartości, a nie tylko jej łączną wielkość.

## Matematyka

Otwarte dane nie mają ceny rynkowej, więc jej miejsce zajmują metody wyceny; powracają trzy podejścia, a żadne nie jest wystarczające samo:

```
1. Metoda unikniętego kosztu / kosztu zastąpienia:
   wartość ≈ ile użytkownicy zapłaciliby za samodzielne wytworzenie lub
   licencjonowanie równoważnych danych — dolna granica, ignoruje wartość tworzoną
   przez zastosowania, których pierwotny wytwórca nigdy nie przewidział

2. Metoda analogu rynkowego / aktywności w dół strumienia:
   wartość ≈ przychody lub oszczędności generowane przez firmy/usługi zbudowane
   na danych (np. aplikacje nawigacyjne zbudowane na otwartych danych mapowych
   i o ruchu) — uchwytuje realną aktywność gospodarczą, ale trudno ją czysto
   przypisać samemu udostępnieniu danych (zob. additionality-and-deadweight)

3. Metoda warunkowa/preferencji deklarowanych:
   wartość ≈ ile użytkownicy mówią, że zapłaciliby, lub czas, który ich zdaniem
   im to oszczędza — zob. stated-preference-valuation dla ogólnej
   metody i jej błędów

Żadna z nich nie daje liczby tak czystej jak cena rynkowa; wiarygodne uzasadnienia
biznesowe otwartych danych triangulują co najmniej dwie i jasno mówią,
który mechanizm wykonuje pracę.
```

## Przykład obliczeniowy

**Poglądowe udostępnienie krajowych danych mapowych/adresowych** (metodologia według studiów przypadków w stylu ODI, liczby poglądowo ilustrują skalę, jaką takie badania zazwyczaj stwierdzają):

```
Szacunek unikniętego kosztu:
  Firmy, które w przeciwnym razie licencjonowałyby równoważne dane
  do dopasowywania adresów komercyjnie, przy szacowanym średnim koszcie
  licencji 4000 £/rok, w szacowanych 15 000 MŚP korzystających teraz
  z bezpłatnego otwartego zbioru danych
  = 15 000 × 4000 £ = 60 000 000 £/rok samego unikniętego licencjonowania

Szacunek aktywności w dół strumienia (bardziej spekulatywny, wymaga kontrfaktu):
  Nowe produkty do rotowania dostaw i logistyki zbudowane na otwartych danych,
  które nie istniałyby lub byłyby istotnie gorsze bez nich — wymaga porównania
  z kontrfaktem pozostania danych zamkniętymi lub komercyjnie licencjonowanymi
  (counterfactual-analysis), bo część tej aktywności zaszłaby i tak na płatnych
  danych po wyższej cenie, co jest efektem jałowym w sensie „wartość stworzona
  przez otwarcie”

Obronne uzasadnienie biznesowe raportuje liczbę unikniętego kosztu jako solidną
dolną granicę, a liczbę aktywności w dół strumienia traktuje jako scenariusz
górnej granicy, a nie fakt.
```

## Związek z inżynierią oprogramowania

Dla inżynierów praktyczne pytanie o wartość otwartych danych jest zwykle węższe niż krajowe nagłówkowe liczby: czy otwarcie tego konkretnego API lub zbioru danych (zamiast trzymania go za umową partnerską) zwiększa ponowne użycie na tyle, by uzasadnić bieżący koszt dokumentowania, wersjonowania i wspierania go jako publicznego interfejsu? Ten koszt utrzymania jest realny i jest odpowiednikiem ekonomii zbuduj-raz-używaj-często z [rządu jako platformy](../rząd-jako-platforma/) — oba tematy są bliskimi kuzynami, jeden o współdzielonym kodzie i infrastrukturze, drugi o współdzielonych danych. Każde twierdzenie o wartości otwartych danych powinno być sprawdzone względem [dodatkowości i efektu jałowego](../dodatkowość-i-efekt-jałowy/), zanim trafi do uzasadnienia biznesowego: aktywność, która zaszłaby i tak, na komercyjnie licencjonowanych danych, nie jest wartością stworzoną przez *otwarcie*.

## Pułapki

- **Cytowanie liczby 3–5 bilionów $ McKinsey jako specyficznej dla Wielkiej Brytanii lub jako udziału tego zbioru danych**: to globalny, siedmiosektorowy szacunek scenariuszowy z 2013 roku — użycie go jako dokładnego mnożnika dla pojedynczego krajowego zbioru danych przekłamuje, czym ta liczba jest.
- **Brak kontrfaktu**: przypisywanie sobie zasługi za całą aktywność ekonomiczną w dół strumienia zbudowaną na otwartych danych, bez pytania, jaka jej część zaszłaby i tak na płatnych lub licencjonowanych danych po wyższej cenie (zob. [dodatkowość i efekt jałowy](../dodatkowość-i-efekt-jałowy/) oraz [analiza kontrfaktyczna](../analiza-kontrfaktyczna/)).
- **Mylenie kosztu wytworzenia z wytworzoną wartością**: zbiór danych, którego zebranie było drogie, nie jest automatycznie wartościowy do udostępnienia, a tani nie jest automatycznie mało wartościowy — wartość podąża za użyciem w dół strumienia, a nie za kosztem w górę strumienia.
- **Ignorowanie bieżącego kosztu utrzymania „otwartości”**: opublikowanie jednorazowego wyciągu CSV nie jest tym samym zobowiązaniem co prowadzenie udokumentowanego, wersjonowanego, wspieranego otwartego API — niedofinansowanie tego drugiego po ogłoszeniu uruchomienia to częsty tryb awarii.

## Źródła

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
