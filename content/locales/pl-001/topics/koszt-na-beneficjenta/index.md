# Koszt na beneficjenta

Koszt na beneficjenta to całkowity koszt programu podzielony przez liczbę unikalnych osób, które otrzymały usługę — każdego, kogo dotknięto, niezależnie od tego, czy ich sytuacja faktycznie się zmieniła. To najszybsza liczba sprawności, jaką organizacja może wytworzyć, ponieważ „komu służyliśmy” jest niemal zawsze już w systemie obsługi spraw, podczas gdy „komu pomogliśmy” zwykle nie jest.

## Dlaczego to ważne

Fundatorzy nieustannie proszą o koszt na beneficjenta i mają ku temu obronne powody: jest dostępny od razu, jest porównywalny w portfelu bardzo różnych programów i jest uczciwy co do zasięgu w sposób, w jaki twierdzenia o rezultatach — dłuższe do weryfikacji i łatwiejsze do przeszacowania — nie są. Brytyjski Charities SORP (Statement of Recommended Practice), który reguluje, jak organizacje charytatywne raportują zgodnie z FRS 102, wymaga, by roczne sprawozdania powierników opisywały osiągnięcia względem celów, ale większość rachunków zarządczych mniejszych organizacji charytatywnych nadal domyślnie stosuje koszty jednostkowe oparte na zasięgu, bo są tanie w wytworzeniu i przyjazne dla audytu.

Niebezpieczeństwem jest traktowanie kosztu na beneficjenta tak, jakby odpowiadał na pytanie, na które nie może odpowiedzieć: czy pieniądze zadziałały. Zob. [koszt na rezultat](../koszt-na-rezultat/) dla metryki, która faktycznie na to odpowiada, oraz [rezultaty a produkty](../rezultaty-a-produkty/) dla leżącego u podstaw rozróżnienia. Koszt na beneficjenta jest prawomocną metryką selekcji i zasięgu — mówi fundatorowi, jak daleko sięgają pieniądze — ale niski koszt na beneficjenta może oznaczać albo prawdziwą sprawność, albo usługę tak cienką, że niczego nie zmienia.

## Matematyka

```
Koszt na beneficjenta = Całkowity koszt programu / Liczba unikalnych osób obsłużonych

Kontrast:
Koszt na rezultat      = Całkowity koszt programu / Liczba osób osiągających zdefiniowany rezultat

Koszt na beneficjenta jest zawsze ≤ koszt na rezultat, ponieważ populacja rezultatu jest
podzbiorem (często małym) populacji beneficjentów.
```

## Przykład obliczeniowy

**Bank żywności, ten sam rok co w przykładzie kosztu na rezultat**:

- Całkowity koszt programu: 450 000 £
- Unikalne obsłużone gospodarstwa domowe (trzy lub więcej paczek): 1800

```
Koszt na beneficjenta = 450 000 £ / 1800 = 250 £ na obsłużone gospodarstwo
```

Porównaj dwie metryki obok siebie:

| Metryka | Mianownik | Wynik |
|---|---|---|
| Koszt na beneficjenta | 1800 obsłużonych gospodarstw | 250 £ |
| Koszt na rezultat | 630 gospodarstw osiągających bezpieczeństwo żywnościowe | 714 £ |

Fundator, który widzi tylko 250 £, mógłby uznać, że to wysoce efektywna organizacja charytatywna. Fundator, który widzi obie liczby, może zadać bardziej użyteczne pytanie: czy luka między zasięgiem (1800) a rezultatem (630) to luka w zbieraniu danych, luka projektowa, czy uczciwe odzwierciedlenie tego, jak trudno osiągnąć bezpieczeństwo żywnościowe samą pomocą żywnościową?

**Organizacja charytatywna szkoląca do pracy, poglądowo**: koszt na beneficjenta (zapisanego) = 2000 £; koszt na rezultat (trwałe zatrudnienie po 6 miesiącach) = 11 000 £, ponieważ tylko 18% zapisanych kończy program i znajduje trwałą pracę. Rozjazd tych dwóch liczb o czynnik pięć jest częsty wszędzie tam, gdzie wskaźniki ukończenia lub trwałości są niskie — organizacja szkoląca i bank żywności są tu strukturalnie identyczne.

## Związek z inżynierią oprogramowania

Koszt na beneficjenta jest domyślną metryką w oprogramowaniu organizacji non-profit, ponieważ to metryka, która wypada z rekordu beneficjenta bez dalszej pracy: utwórz sprawę, zaloguj usługę, policz wiersze. Zbudowanie systemu, który wspiera także koszt na rezultat, oznacza celowe dodanie drugiej pierwszorzędnej encji — zdarzenia rezultatu, datowanego i zdefiniowanego niezależnie od świadczenia usługi — i opieranie się pokusie, by „sprawa zamknięta” zastępowało „rezultat osiągnięty”. Przy określaniu zakresu platformy zarządzania grantami lub CRM zapytaj, którą z dwóch metryk faktycznie pokazuje każdy pulpit, i odpowiednio ją oznacz; mieszanie ich w jednym kafelku „wpływu” to jedna z najczęstszych przyczyn na poziomie oprogramowania poniższych pułapek. Zob. [bazy kosztów jednostkowych](../bazy-kosztów-jednostkowych/) dla porównywania którejkolwiek metryki po jej prawidłowym oznaczeniu.

## Pułapki

- **Przedstawianie kosztu na beneficjenta jako wpływu.** Mierzy zasięg, a nie zmianę. Oznacz pulpity i raporty „koszt na osobę obsłużoną”, a nie „koszt na osobę, której pomogliśmy”.
- **Podwójne liczenie w programach.** Osoba otrzymująca zarówno paczki żywnościowe, jak i doradztwo zadłużeniowe od tej samej organizacji jest jednym beneficjentem, a nie dwoma, jeśli mianownik ma opisywać unikalny zasięg; zdecyduj i udokumentuj, której konwencji używasz.
- **Traktowanie niższej liczby jako zawsze lepszej.** Otwarty klub obiadowy zawsze pokona intensywną usługę obsługi spraw pod względem kosztu na beneficjenta, bo mniej kosztuje lekkie dotknięcie kogoś. To nic nie mówi o tym, co daje bardziej trwałą zmianę na funta.
- **Po cichu zamieniane mianowniki między raportami.** Liczba kosztu na beneficjenta zacytowana w jednym raporcie rocznym względem „zapisanych”, a w następnym względem „ukończyło” nie jest porównywalna rok do roku; podawaj mianownik za każdym razem.

## Źródła

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
