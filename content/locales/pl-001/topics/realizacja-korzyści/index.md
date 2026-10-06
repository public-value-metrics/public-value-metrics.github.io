# Realizacja korzyści

Zarządzanie realizacją korzyści (benefits realization management) to dyscyplina identyfikowania, ustalania punktu odniesienia, śledzenia i *dokumentowania*, że korzyści obiecane w uzasadnieniu biznesowym faktycznie zmaterializowały się po uruchomieniu. W brytyjskich inwestycjach publicznych mieści się w Modelu Pięciu Przypadków Green Book HM Treasury i dedykowanych wytycznych zarządzania korzyściami Infrastructure and Projects Authority; bez niej „system zaoszczędził pracownikom trzydzieści minut na wniosek” pozostaje na zawsze nieaudytowanym twierdzeniem.

## Dlaczego to ważne

Uzasadnienia biznesowe to obietnice; realizacja korzyści to audyt. Green Book wymaga, by każdy przypadek wydatku przeszedł pięć testów — strategiczny, ekonomiczny, handlowy, finansowy i zarządczy — a przypadek zarządczy musi określać, jak korzyści zostaną zrealizowane *przed zatwierdzeniem*: wskazani właściciele, uchwycone punkty odniesienia i ustalone daty pomiarów. Przewodnik Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects* (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>), istnieje, ponieważ własne raportowanie portfelowe IPA dotyczące Government Major Projects Portfolio wielokrotnie stwierdzało pewność dostarczania i realizację korzyści jako powracające słabości w dużych programach. Projekt może zamknąć się „na czas i w budżecie” względem kamieni milowych dostarczania, wciąż nie realizując korzyści, które w pierwszej kolejności uzasadniały wydanie pieniędzy — rozróżnienie, które wytyczne IPA traktują jako cały sens tej dyscypliny.

## Matematyka

```
Wskaźnik realizacji = zrealizowane korzyści / prognozowane korzyści   (na korzyść, na okres)

Mechanika czyniąca to obliczalnym:
  punkt odniesienia uchwycony PRZED uruchomieniem (inaczej różnica jest niemierzalna)
  każda korzyść: wskazany właściciel, metryka, źródło danych, harmonogram pomiarów
  prognoza skorygowana o optimism bias przy ocenie (wymóg Green Book)
  korzyści sklasyfikowane jako uwalniające gotówkę / uwalniające zdolność / jakościowe,
  śledzone i raportowane osobno
```

## Przykład obliczeniowy

**Samorząd lokalny**: uzasadnienie biznesowe cyfrowego portalu wniosków planistycznych obiecywało rocznie: 300 000 £ redukcji kosztów druku i poczty (gotówka), 4500 uwolnionych godzin pracy urzędników (zdolność) i poprawioną satysfakcję wnioskodawców (jakościowo). Dwanaście miesięcy po uruchomieniu:

```
Korzyść             Prognoza    Zrealizowane   Wskaźnik   Dowód
Oszczędności gotów. 300 000 £   210 000 £      70%        księga finansowa wobec roku bazowego
Godziny urzędników  4500        3200           71%        próba zegarowo-ruchowa
Satysfakcja         +8 pp       +11 pp         138%       dane ankiety wnioskodawców

Działania z przeglądu (sens realizacji korzyści):
niedobór gotówki wyśledzony do dwóch obszarów usług, które nadal przetwarzają
wnioski papierowe w drodze wyjątku → zamknij ścieżkę wyjątku;
korekta optimism bias następnego uzasadnienia biznesowego podniesiona z 10% do 25%
na podstawie błędu prognozy tego przypadku.
```

70% wskaźnik realizacji nie jest porażką — to wiedza, która pozwala lepiej skalibrować następną prognozę. Niezmierzony przypadek twierdziłby 100% na zawsze, a dział finansów nie miałby podstaw, by to zakwestionować.

## Związek z inżynierią oprogramowania

Organizacje inżynierskie rutynowo zatwierdzają inwestycje w platformy i narzędzia na podstawie prognozowanej korzyści i niemal nigdy ich potem nie audytują — dokładnie ta patologia, którą zarządzanie realizacją korzyści ma naprawiać. Lekka adaptacja: każda propozycja powyżej progu istotności wskazuje właściciela korzyści, bazową metrykę i ustaloną datę przeglądu (zwykle sześć miesięcy po uruchomieniu), a wskaźniki realizacji z poprzednich propozycji powinny dyskontować to, jak bardzo organizacja ufa następnej prognozie zespołu lub dostawcy. To zamyka pętlę z powrotem do [oceny według Green Book](../ocena-według-green-book/), która ustala prognozę audytowaną przez tę dyscyplinę, i jest tą samą logiką, która stoi za szeroko raportowanym ustaleniem, że zdecydowana większość pilotaży generatywnej AI nie wykazuje mierzalnego zwrotu — zob. [produktywność AI w sektorze publicznym](../produktywność-ai-w-sektorze-publicznym/) — ponieważ pilotaże, które *dały* wartość, były niemal bez wyjątku tymi, które od początku miały wskazaną, śledzalną pozycję korzyści. Zależy też od odróżnienia tego, co faktycznie dostarczono, od tego, co faktycznie zrealizowano — zob. [rezultaty a produkty](../rezultaty-a-produkty/).

## Pułapki

- **Brak punktu odniesienia sprzed uruchomienia**: śmiertelne, nienaprawialne pominięcie — bez niego żaden wskaźnik realizacji nie może być nigdy obliczony, tylko zadeklarowany.
- **Sieroctwo korzyści**: korzyść bez wskazanego właściciela nie ma nikogo zbierającego dane, a każdy przegląd portfela raportuje ją domyślnie jako „ogólnie na dobrej drodze”.
- **Podwójnie liczone korzyści w portfelu programów**: dwa projekty oba twierdzące tę samą uwolnioną zdolność pracowników jako swoją korzyść — utrzymuj jeden rejestr korzyści w całym portfelu, by to wychwycić.
- **Teatr realizacji**: mierzenie i raportowanie łatwych zysków jakościowych na widoku, podczas gdy pozycje gotówkowe i zdolnościowe po cichu pozostają niezbadane.
- **Mylenie dostarczenia z realizacją**: projekt zamykający kamienie milowe „na czas i w budżecie” nic nie mówi o tym, czy prognozowana korzyść kiedykolwiek faktycznie wystąpiła — wytyczne IPA traktują to jako dwa odrębne pytania z dwoma odrębnymi śladami dowodowymi.

## Źródła

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
