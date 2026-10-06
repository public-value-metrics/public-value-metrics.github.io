# Wycena metodą preferencji ujawnionych

Metody preferencji ujawnionych wnioskują o wartości dobra pozarynkowego z obserwowalnego zachowania na powiązanym rynku, zamiast pytać ludzi wprost. Wycena hedoniczna i metoda kosztu podróży to dwie podstawowe techniki: obie wychodzą od rzeczywistej transakcji i wyprowadzają niejawną cenę tego, co nigdy nie było sprzedawane bezpośrednio.

## Dlaczego to ważne

Podczas gdy metody [preferencji deklarowanych](../wycena-metodą-preferencji-deklarowanych/) zadają pytanie hipotetyczne, metody preferencji ujawnionych obserwują, za co ludzie faktycznie zapłacili, co Green Book traktuje jako zasadniczo bardziej wiarygodny dowód, przy innych warunkach równych, ponieważ nie podlega błędowi hipotetycznemu — respondenci w hedonicznym badaniu cen domów rzeczywiście zapłacili mierzoną premię lub zniżkę (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Załącznik 2). Wycena hedoniczna rozkłada cenę rynkową — zwykle ceny domów — na niejawne ceny każdego atrybutu dobra, pozwalając analitykom wyodrębnić na przykład premię cenową, jaką gospodarstwa domowe faktycznie płacą za mieszkanie w cichszym miejscu lub z lepszą jakością powietrza, kontrolując statystycznie każdy inny atrybut, który także wpływa na cenę domu (wielkość, lokalizacja, rejon szkolny). Metoda kosztu podróży robi analogiczną rzecz dla miejsc rekreacji bez opłaty za wstęp: czas i pieniądze, które ludzie wydają na dotarcie do miejsca, ujawniają dolną granicę tego, ile to miejsce jest dla nich warte, bo nikt nie ponosi kosztu przewyższającego wartość wizyty dla niego.

Obie metody mają wspólne ograniczenie strukturalne: mogą wyceniać tylko to, co jest osadzone w istniejącej transakcji rynkowej. Hałas przy pasie startowym pojawia się w cenach domów, ponieważ ludzie, którym zależy na ciszy, sortują się do cichszych mieszkań; wartość istnienia gatunku, którego nikt nie odwiedza ani przy którym nie mieszka, nie pojawia się w żadnej transakcji, co jest dokładnie luką, którą mają wypełnić metody [preferencji deklarowanych](../wycena-metodą-preferencji-deklarowanych/).

## Matematyka

```
Wycena hedoniczna:
  Cena domu = f(atrybuty strukturalne, atrybuty lokalizacji,
                atrybut środowiskowy będący przedmiotem zainteresowania, ...)
  Oszacuj regresją; współczynnik przy atrybucie środowiskowym
  (przy innych warunkach stałych) jest jego ceną niejawną.

  Cena niejawna atrybutu X = ∂(Cena domu) / ∂X

Metoda kosztu podróży:
  Wskaźnik wizyt (wizyty na mieszkańca ze strefy i) = f(koszt podróży ze strefy i,
                   miejsca zastępcze, kontrole społeczno-ekonomiczne)
  Oszacuj krzywą popytu na wizyty jako funkcję kosztu podróży.
  Nadwyżka konsumenta = pole pod oszacowaną krzywą popytu
                       = wartość miejsca dla odwiedzających
```

Obie metody wymagają statystycznie solidnego zestawu kontroli — pominięcie zakłócającego atrybutu (hedoniczna) lub pobliskiego miejsca zastępczego (koszt podróży) zniekształca cenę niejawną w kierunku, który nie zawsze jest z góry oczywisty, dlatego Załącznik 2 do Green Book wymaga raportowania specyfikacji regresji i kontroli, a nie tylko nagłówkowego współczynnika.

## Przykład obliczeniowy

**Rząd krajowy**: metodologia ceny cieniowej węgla samego Green Book częściowo opiera się na dowodach hedonicznych, ale prostszym poglądowym przypadkiem jest hałas lotniczy. Badanie hedoniczne regresujące ceny sprzedaży domów w obszarze ścieżki przelotu względem ważonej odległością ekspozycji na hałas, z kontrolą wielkości, wieku i rejonu szkolnego, stwierdza, że każdy 1 decybel wzrostu średniej ekspozycji na hałas wiąże się z 0,5% spadkiem ceny domu. Dla typowego domu za 280 000 £ w dotkniętej okolicy:

```
Cena niejawna za decybel = 280 000 £ × 0,5% = 1400 £ na gospodarstwo
Gospodarstwa dotknięte wzrostem o 3 dB z nowego pasa = 18 000
Zagregowany implikowany koszt wzrostu hałasu = 1400 £ × 3 × 18 000 = 75,6 mln £
```

To jednorazowy skapitalizowany koszt (osadzony w cenie domu), którego ocena musi uważnie nie liczyć podwójnie względem osobno oszacowanego rocznego strumienia kosztów uciążliwości hałasu.

**Organizacja charytatywna**: organizacja ekologiczna używa metody kosztu podróży do wyceny rezerwatu przyrody o wolnym wstępie. Dane ankietowe o kodach pocztowych odwiedzających dają średni koszt podróży w obie strony (czas wyceniony według zalecanej przez Green Book wartości czasu poza pracą, plus paliwo) 14 £ za wizytę, przy 40 000 wizyt rocznie. Oszacowana krzywa popytu — wskaźniki wizyt spadające wraz ze wzrostem kosztu podróży ze strefy — implikuje nadwyżkę konsumenta na wizytę, ponad faktycznie wydane 14 £, wynoszącą około 9 £.

```
Całkowita wartość roczna = 40 000 wizyt × (14 £ wydane + 9 £ nadwyżki konsumenta)
                         = 40 000 × 23 £ ≈ 920 000 £/rok
```

To zdecydowanie przewyższa zerowe przychody rezerwatu z opłat za wstęp i daje powiernikom organizacji charytatywnej obronną liczbę wartości rekreacyjnej miejsca przy przekonywaniu fundatorów.

## Związek z inżynierią oprogramowania

Myślenie w kategoriach preferencji ujawnionych pojawia się w analityce produktów sektora publicznego częściej, niż praktycy zdają sobie sprawę: dane o użyciu bezpłatnej rządowej usługi cyfrowej same są dowodem wartości w postaci preferencji ujawnionych (częstotliwość, długość sesji i — najbardziej wymownie — wzorce powtórnego versus jednorazowego użycia można analizować tak, jak model kosztu podróży traktuje częstotliwość wizyt względem odległości). Tam, gdzie usługa ma prawdziwe substytuty (kanał papierowy, linia telefoniczna), „koszt”, jaki obywatele ponoszą, by zamiast tego korzystać z kanału cyfrowego (czas, dane, urządzenie), można oszacować i porównać z użyciem, co wprost odzwierciedla logikę kosztu podróży. Zob. [standard usług cyfrowych](../standard-usług-cyfrowych/) i [wartość otwartych danych](../wartość-otwartych-danych/), które mierzą się z dokładnie takim problemem wyceny dobra bez bezpośredniej ceny rynkowej.

## Pułapki

- **Błąd pominiętej zmiennej w modelach hedonicznych.** Pominięcie skorelowanego atrybutu (jakość szkoły korelująca zarówno z ceną domu, jak i ze zmienną środowiskową będącą przedmiotem zainteresowania) zniekształca oszacowanie ceny niejawnej; specyfikację trzeba raportować i poddawać analizie, a nie tylko wynik.
- **Ignorowanie miejsc zastępczych w badaniach kosztu podróży.** Ujawniona wartość miejsca dla odwiedzającego jest zaniżona, jeśli istnieje bliższy substytut i nie jest kontrolowany — odwiedzający mogą przychodzić głównie dlatego, że jest bezpłatne, a nie dlatego, że jest wyjątkowo wartościowe.
- **Stosowanie preferencji ujawnionych do dobra bez żadnego rynkowego echa.** Wartość istnienia, wartość opcji i wartość dziedziczenia nie pojawiają się w żadnej transakcji i nie da się ich odzyskać metodami hedonicznymi ani kosztu podróży — ta luka należy do [wyceny metodą preferencji deklarowanych](../wycena-metodą-preferencji-deklarowanych/).
- **Mylenie skapitalizowanej (jednorazowej) wartości ze strumieniem rocznym.** Hedoniczne efekty cen domów są zwykle jednorazowymi skapitalizowanymi wartościami; traktowanie ich jako rocznego strumienia korzyści zawyża ocenę.

## Źródła

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
