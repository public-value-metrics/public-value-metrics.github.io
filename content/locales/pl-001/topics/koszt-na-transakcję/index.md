# Koszt na transakcję

Koszt na transakcję to nagłówkowa metryka ekonomii jednostkowej rządowej usługi cyfrowej: całkowity koszt dostarczenia kanału podzielony przez liczbę transakcji ukończonych przez ten kanał. Była flagową liczbą dawnej GOV.UK Performance Platform i jest liczbą, która sfinansowała dekadę inwestycji „domyślnie cyfrowo” — co jest dokładnie powodem, dla którego jest też metryką najbardziej skłonną do manipulacji.

## Dlaczego to ważne

Digital Efficiency Report Cabinet Office z 2012 roku przedstawił porównanie kosztów kanałów w terminach, które zapadły w pamięć: stwierdzono, że transakcje cyfrowe kosztują około 20 razy mniej niż telefoniczne i około 50 razy mniej niż osobiste, przy poglądowych liczbach samorządowych wynoszących mniej więcej 0,15 £ na transakcję internetową wobec 2,83 £ telefonicznie i 8,62 £ osobiście. To pojedyncze porównanie stało się uzasadnieniem przeprojektowania 25 wzorcowych usług wymienionych w Government Digital Strategy i każdego resortowego uzasadnienia biznesowego, które od tego czasu powołuje się na oszczędności z przesunięcia kanału. Liczba jest naprawdę użyteczna jako sygnał rzędu wielkości, ale stosunek zależy całkowicie od tego, co jest liczone po każdej stronie: uczciwy koszt kanału telefonicznego obejmuje personel centrum obsługi, umowę telefoniczną, szkolenia i nieruchomości; uczciwy koszt cyfrowy obejmuje hosting, bieżące wynagrodzenia zespołu produktu, czas biura wsparcia dla nieudanych ścieżek i kanał z asystą cyfrową wymagany przez punkt 5 [standardu usług cyfrowych](../standard-usług-cyfrowych/). Wyrzuć z cyfrowej strony dość z tego, a każda usługa wygląda tanio.

## Matematyka

```
Koszt na transakcję = całkowity przypisany koszt kanału / ukończone transakcje

Całkowity przypisany koszt kanału powinien obejmować:
  + hosting i infrastrukturę
  + koszt zespołu produktu/inżynierii/wsparcia (amortyzowany)
  + koszt projektowania treści i usługi (amortyzowany)
  + koszt wsparcia z asystą cyfrową / dostępności
  + koszt popytu z niepowodzeń (użytkownicy, którzy zawiedli cyfrowo i wracają do telefonu)
  − jednorazowy koszt budowy jest amortyzowany przez oczekiwany okres życia usługi,
    a nie w całości zaksięgowany w pierwszym roku

Częsty trik rachunkowy:
  „Koszt krańcowy na transakcję” (sam hosting, po zbudowaniu) jest cytowany
  tak, jakby był „kosztem przeciętnym na transakcję” (całkowitym kosztem
  łącznie z zespołem, który wciąż buduje i prowadzi usługę). Oba mogą
  się różnić 10-krotnie lub więcej dla usługi z dużym, aktywnym zespołem realizacji.
```

## Przykład obliczeniowy

**Usługa odnowienia podatku od pojazdu**: 4 miliony transakcji rocznie.

```
Liczba tylko krańcowa (trik):
  Tylko hosting + przetwarzanie płatności = 180 000 £/rok
  Koszt na transakcję = 180 000 / 4 000 000 = 0,045 £
  → nagłówkowa liczba cytowana w uzasadnieniu biznesowym

Liczba w pełni obciążona (uczciwa):
  Hosting + płatności                      180 000 £
  Zespół produktu/inżynierii (8 EPC)       720 000 £
  Biuro wsparcia (nieudane/zapytania)      310 000 £
  Linia telefoniczna z asystą cyfrową      140 000 £
  Razem                                  1 350 000 £
  Koszt na transakcję = 1 350 000 / 4 000 000 = 0,3375 £

W pełni obciążona liczba jest nadal mniej więcej 8 razy tańsza niż punkt
odniesienia kanału telefonicznego 2,83 £ z Digital Efficiency Report —
realna i obronna oszczędność — ale 7,5 razy wyższa niż liczba tylko krańcowa
cytowana w wersji skrótowej. Obie liczby są „prawdziwe”; tylko jedna jest
porównywalna z kosztem kanału telefonicznego, do którego jest przykładana.
```

## Związek z inżynierią oprogramowania

Koszt na transakcję to miejsce, gdzie decyzje architektoniczne stają się liczbą finansową: usługa, która czysto się autoskaluje i wymaga niewielkiej ręcznej interwencji, obniża tę liczbę z czasem; taka, która generuje duży wolumen zgłoszeń wsparcia z mylących stanów błędów, podnosi ją niezależnie od sprawności hostingu. To naturalna metryka towarzysząca punktowi 10 [standardu usług cyfrowych](../standard-usług-cyfrowych/) („określ, jak wygląda sukces, i publikuj dane o wydajności”) oraz [standardom usług i metrykom transakcji](../standardy-usług-i-metryki-transakcji/), które przedstawiają pełniejszy zestaw KPI, w którym ta liczba się mieści. Zasila też bezpośrednio obliczenia [oszczędności z przesunięcia kanałów](../oszczędności-z-przesunięcia-kanałów/) i powinna być uzgodniona z [całkowitym kosztem posiadania w IT administracji](../całkowity-koszt-posiadania-w-it-administracji/), aby koszty ogólne platformy i usług współdzielonych nie zostały po cichu pominięte.

## Pułapki

- **Koszt krańcowy przebrany za koszt przeciętny**: cytowanie samego kosztu hostingu po zbudowaniu usługi, z pominięciem trwającego zespołu, który ją utrzymuje, iteruje i wspiera — zob. przykład obliczeniowy powyżej.
- **Wykluczanie kosztu asysty cyfrowej**: kanał nie jest zgodny z „domyślnie cyfrowo”, a jego prawdziwy koszt nie jest uchwycony, jeśli zapasowy telefon/papier wymagany przez [włączenie cyfrowe](../włączenie-cyfrowe/) jest wyceniany osobno lub ignorowany.
- **Ignorowanie popytu z niepowodzeń**: transakcje, które zaczynają się cyfrowo i kończą niepowodzeniem, generując mimo to telefon lub formularz papierowy, są kosztem kanału cyfrowego, a nie kanału, który wychwytuje niepowodzenie.
- **Porównywanie transakcji o różnej złożoności między kanałami**: połączenia telefoniczne nieproporcjonalnie obsługują trudne przypadki (wielu pozostających na utrzymaniu, korekta błędów, wnioskodawcy w trudnej sytuacji); porównywanie przeciętnego kosztu telefonicznego z przeciętnym cyfrowym zawyża stosunek, o ile struktura transakcji nie jest dopasowana.

## Źródła

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
