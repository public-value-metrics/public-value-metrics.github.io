# Standard usług cyfrowych

GOV.UK Service Standard to brama, którą musi przejść każda cyfrowa usługa administracji centralnej, zanim wejdzie na produkcję: 14 opublikowanych punktów, ocenianych przez niezależny panel na końcu każdej fazy realizacji. To mechanizm, który zamienia „budujmy dobre usługi publiczne” ze sloganu w decyzję zdał/nie zdał ze śladem papierowym — i bezpośredni potomek mandatu „domyślnie cyfrowo” z Government Digital Strategy z 2012 roku.

## Dlaczego to ważne

Zanim istniał Service Standard, porażka IT rządowego była rzadko widoczna do uruchomienia i rzadko przypisywalna decyzji, na którą ktokolwiek mógłby wskazać. Government Digital Strategy z 2012 roku zobowiązała resorty do przeprojektowania 25 usług transakcyjnych dla publiczności o największym wolumenie jako „domyślnie cyfrowych” i poparła zobowiązanie mechanizmem zgodności: usługi nie mogły wejść na produkcję w GOV.UK bez przejścia oceny usługi względem tego, co było wówczas standardem 26-punktowym (skonsolidowanym do 18 w 2019 roku, a teraz 14-punktowym standardem obowiązującym obecnie, obejmującym trzy grupy — zrozumienie potrzeb użytkowników, świadczenie dobrej usługi i użycie właściwej technologii). Ocena usługi to realne wydarzenie: panel oceniających z GDS lub resortu przegląda dowody, przepytuje zespół i wydaje werdykt zdał, nie zdał lub „niespełnione” względem każdego punktu, publikowany na stronie oceny usługi. Niezdanie oceny blokuje przejście usługi z prywatnej bety do publicznej bety lub z bety do produkcji — to prawdziwa brama, a nie przegląd.

## Matematyka

Service Standard jest ramą, a nie wzorem, ale działa jako etapowa struktura decyzyjna z bramkami:

```
Odkrywanie → Ocena alfa      → Ocena beta         → Ocena produkcyjna
             (niewymagana    (wymagana przed       (wymagana przed
              dla wszystkich  uruchomieniem         usunięciem etykiety „beta”
              usług, ale      publicznej bety)      i zamknięciem starego kanału)
              zalecana)

Każda ocena: dowody + wywiad z zespołem → werdykt panelu na punkt
  Spełniony / Częściowo spełniony / Niespełniony
Wynik ogólny: Zdał / Zdał z warunkami / Nie zdał (wymagana ponowna ocena)

Koszt niezdania ≈ koszt kolejnego cyklu sprintu na naprawę
                + opóźnienie [oszczędności z przesunięcia kanału](../oszczędności-z-przesunięcia-kanałów/),
                  które usługa miała dostarczyć
```

Punkt 10 („określ, jak wygląda sukces, i publikuj dane o wydajności”) zasila [koszt na transakcję](../koszt-na-transakcję/) i [standardy usług i metryki transakcji](../standardy-usług-i-metryki-transakcji/) — Standard zobowiązuje do pomiaru, a nie tylko do usługi.

## Przykład obliczeniowy

**Usługa wniosków mieszkaniowych samorządu lokalnego**: zespół rady dociera do oceny beta z usługą, która spełnia 11 z 14 punktów, ale nie spełnia punktu 5 („upewnij się, że każdy może korzystać z usługi”), bo nie istnieje ścieżka z asystą cyfrową dla wnioskodawców bez dostępu do internetu, i nie spełnia punktu 9, bo dane osobowe są zapisywane w jawnym tekście w śladach błędów aplikacji.

```
Bezpośredni koszt niezdania:
  Termin ponownej oceny: 6–8 tygodni oczekiwania na następny dostępny panel
  Sprint naprawczy: 2 programistów × 3 tygodnie × 550 £/dzień ≈ 34 650 £
  Projekt kanału z asystą cyfrową: 1 badacz × 2 tygodnie ≈ 5000 £

Koszt opóźnienia: usługa miała przesunąć 40% z 18 000 rocznie zapytań
mieszkaniowych z połączeń telefonicznych po 8,50 £ do transakcji cyfrowych po 0,20 £
  = 7200 × (8,50 £ − 0,20 £) = 59 760 £/rok utracone, proporcjonalnie do
    ~2-miesięcznego opóźnienia ≈ 9960 £

Całkowity koszt niezdanej oceny ≈ 49 610 £
```

Sens arytmetyki nie leży w precyzji — chodzi o to, że niezdana ocena ma realną, wyliczalną cenę, co jest dokładnie powodem, dla którego brama ma zęby.

## Związek z inżynierią oprogramowania

Dla inżynierów Standard czyta się równie dobrze jako listę kontrolną architektury i realizacji, co jako dokument polityki: punkt 11 („wybierz właściwe narzędzia i technologię”) i punkt 12 („upublicznij nowy kod źródłowy”) to bezpośrednie decyzje inżynierskie, a punkt 14 („prowadź niezawodną usługę”) wymaga tych samych SLO i procesów incydentowych, których potrzebuje każdy system produkcyjny. To nadrzędna rama tego rozdziału — [koszt na transakcję](../koszt-na-transakcję/) i [oszczędności z przesunięcia kanałów](../oszczędności-z-przesunięcia-kanałów/) są tym, co Standard próbuje chronić finansowo, [włączenie cyfrowe](../włączenie-cyfrowe/) jest tym, co punkt 5 istnieje, by zagwarantować, a komponenty [rządu jako platformy](../rząd-jako-platforma/) (GOV.UK Notify, Pay, One Login) spełniają punkt 13 („używaj i wnoś wkład w otwarte standardy, wspólne komponenty i wzorce”) w dużej mierze domyślnie. Zob. także [budować czy kupować w administracji](../budować-czy-kupować-w-administracji/), jak punkt „właściwych narzędzi” sprawdza się w decyzjach zakupowych.

## Pułapki

- **Traktowanie oceny jako pola wyboru zgodności w dniu uruchomienia**: zespoły, które po raz pierwszy czytają 14 punktów na tydzień przed oceną beta, przewidywalnie nie zdają; Standard ma kształtować decyzje od odkrywania wzwyż, a nie audytować je z perspektywy czasu.
- **Ocenianie prototypu, a nie usługi**: efektowne demo może przejść przegląd, którego nie przeszłaby produkcyjna, włączająca cyfrowo z asystą, zarządzana pod kątem incydentów wersja usługi — oceniający mają szukać tej luki, ale usługi drugorzędne ocenione samodzielnie często ją pomijają.
- **Brak ponownej oceny przed skalowaniem**: usługa oceniona przy 5% wdrożeniu nie pozostaje automatycznie zgodna przy 100% — zmieniają się obciążenie, popyt z niepowodzeń i użytkownicy przypadków skrajnych.
- **Mylenie Service Standard z systemem projektowym**: komponenty GOV.UK Design System spełniają niektóre punkty (spójność, dostępność), ale Standard obejmuje też strukturę zespołu, praktykę zwinną i etykę danych — dobrze ostylowana usługa może nadal nie spełnić punktów 2, 6 lub 9.

## Źródła

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
