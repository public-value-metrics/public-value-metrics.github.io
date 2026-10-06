# Oszczędności z przesunięcia kanałów

Oszczędności z przesunięcia kanałów to przewidywane obniżenie kosztów z przeniesienia wolumenu transakcji z drogich kanałów — telefon, osobiste okienka, poczta papierowa — do taniej cyfrowej samoobsługi. To finansowy silnik „domyślnie cyfrowo” i zarazem pozycja w uzasadnieniu biznesowym najbardziej narażona na błąd, ponieważ założenie, na którym się opiera — że kanały offline kurczą się wraz ze wzrostem cyfrowego wykorzystania — jest prawdziwe tylko czasami.

## Dlaczego to ważne

Arytmetyka wygląda niepodważalnie przy użyciu liczb [kosztu na transakcję](../koszt-na-transakcję/) z Digital Efficiency Report: przesuń milion transakcji z wizyty osobistej za 8,62 £ do cyfrowej za 0,15 £, a oszczędność wynosi ponad 8 milionów £. Ale oszczędność staje się gotówką uwolnioną do przeniesienia tylko wtedy, gdy *stała zdolność* kurczącego się kanału jest faktycznie likwidowana — fotele w centrum obsługi, personel okienek, minuty umowy telefonicznej — a samorządowe programy cyfrowe wielokrotnie stwierdzały, że całkowity wolumen kontaktów nie spada zgodnie z cyfrowym wykorzystaniem. Badania z programów transformacji cyfrowej samorządów i instytucji takich jak Socitm i Local Government Association udokumentowały powtarzający się wzorzec: kanały cyfrowe przyciągają naprawdę nowy kontakt (obywatele, którzy by nie dzwonili ani nie odwiedzali, teraz to robią, bo jest łatwiej), a znaczny odsetek transakcji „cyfrowych” zawodzi w połowie i mimo to generuje telefon — więc wolumen telefoniczny spada o wiele mniej, niż sugerowałby procent cyfrowego wykorzystania, czasem w ogóle nie spada w wartościach bezwzględnych, nawet gdy jego *udział* w całkowitym kontakcie maleje.

## Matematyka

```
Brutto oszczędność z przesunięcia kanału = przesunięty wolumen × (koszt_starego_kanału − koszt_cyfrowy)

Netto (zrealizowana) oszczędność = oszczędność brutto
                                   − nowy/cieniowy popyt stworzony przez łatwiejszy kanał
                                   − koszt popytu z niepowodzeń (cyfrowe niepowodzenia, które
                                     nadal generują telefon lub wizytę przy okienku)
                                   − koszt niewycofanej stałej zdolności (centrum obsługi może
                                     zredukować personel tylko w dyskretnych jednostkach;
                                     15% spadek wolumenu rzadko pozwala ciąć 15% etatów)

Próg realizacji: oszczędności są do zbankowania dopiero, gdy wolumen spada poniżej
poziomu, który stary kanał może obsadzić w następnym mniejszym dyskretnym kroku
zdolności (np. utrata jednej pełnej zmiany, jednego pełnego biurka, jednego
zakontraktowanego pasma etatów)
```

## Przykład obliczeniowy

**Usługa odnowienia karty parkingowej dla niepełnosprawnych rady hrabstwa**: 60 000 odnowień rocznie, wcześniej 100% telefon/papier po 6,40 £ za transakcję. Nowa usługa cyfrowa startuje i w ciągu roku osiąga 65% cyfrowego wykorzystania, po 0,30 £ za transakcję cyfrową.

```
Naiwne (brutto) obliczenie oszczędności:
  39 000 przesuniętych × (6,40 £ − 0,30 £) = 237 900 £/rok

Co faktycznie się stało, według danych centrum obsługi rady:
  Wolumen telefoniczny spadł z 60 000/rok do 46 000/rok (−23%, a nie −65%)
  ponieważ: 9000 cyfrowych ścieżek zawiodło i wygenerowało telefon kontrolny
            (wyciek popytu z niepowodzeń), a 4000 osób, które wcześniej w ogóle
            nie odnawiało, teraz odnawia, uznawszy to za łatwe online
            (popyt cieniowy — realna poprawa dostępu, ale nie oszczędność)

  Telefoniczne centrum obsługi jest obsadzone w pasmach po 8000 połączeń/EPC;
  spadek o 14 000 połączeń (60 000 → 46 000) uwalnia 1,75 EPC, w praktyce zaokrąglone
  w dół do 1 EPC faktycznie przeniesionego = 34 000 £/rok

Zrealizowana oszczędność = 34 000 £/rok plus uniknięty koszt budowy/prowadzenia kanału
  cyfrowego przy 39 000 transakcjach ≈ 34 000 £ + (39 000 × 0,30 £ kosztu
  cyfrowego już policzonego) — ułamek nagłówkowych 237 900 £, mimo że usługa
  jest dla użytkowników nadal jednoznacznie lepsza.
```

## Związek z inżynierią oprogramowania

Lekcja inżynierska jest taka, że oszczędności z przesunięcia kanałów są realizowane przez decyzje *operacyjne* (grafiki, likwidacja, renegocjacja umów), a nie przez wydanie oprogramowania — zespół może spełnić każdy punkt [standardu usług cyfrowych](../standard-usług-cyfrowych/) i mimo to dostarczyć zerową oszczędność netto, jeśli nikt nie wycofa stałej zdolności starego kanału. Oprzyrządowanie popytu z niepowodzeń (gdzie na cyfrowej ścieżce użytkownicy porzucają i co robią dalej) to rozwiązywalny problem analityki lejka i najbardziej dźwigniowa pojedyncza rzecz, jaką zespół inżynierski może zrobić, by chronić argument oszczędnościowy; to także bezpośrednie połączenie z [kosztem na transakcję](../koszt-na-transakcję/), który popyt z niepowodzeń po cichu zawyża. Zob. [realizacja korzyści](../realizacja-korzyści/) dla szerszej dyscypliny sprawdzania, czy oszczędności z uzasadnienia biznesowego faktycznie się materializują, oraz [włączenie cyfrowe](../włączenie-cyfrowe/), dlaczego kanał offline zwykle nie może i nie powinien być całkowicie wycofany.

## Pułapki

- **Zakładanie podstawienia kanałów 1:1**: modelowanie cyfrowego wykorzystania jako bezpośredniego odjęcia od wolumenu telefonu/okienka, z pominięciem popytu cieniowego i wycieku popytu z niepowodzeń udokumentowanych w samorządowych badaniach przesunięcia kanałów.
- **Księgowanie oszczędności brutto przed likwidacją**: liczenie oszczędności w uzasadnieniu biznesowym w roku, gdy rośnie wykorzystanie, a nie w roku (jeśli w ogóle), gdy zdolność starego kanału jest faktycznie ścinana.
- **Ignorowanie schodkowej natury kosztów personelu**: 20% spadek wolumenu rzadko przekłada się na 20% spadek kosztów, ponieważ centra obsługi i okienka są obsadzane w dyskretnych pasmach, a nie w sposób ciągły.
- **Traktowanie popytu cieniowego jako marnotrawstwa**: nowy kontakt od użytkowników wcześniej wykluczonych lub zniechęconych jest realnym wzrostem [wartości publicznej](../wartość-publiczna/), a nie błędem modelowania — należy go raportować jako rezultat dostępu, a nie saldować jako szum.

## Źródła

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
