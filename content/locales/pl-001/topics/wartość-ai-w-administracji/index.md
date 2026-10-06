# Wartość AI w administracji

Wartość AI w administracji to wymaganie, aby system AI używany w usłudze publicznej przekraczał tę samą poprzeczkę wartości za pieniądze i wartości publicznej co każda inna decyzja wydatkowa — nie niższą, bo jest nowy, i nie wyższą, bo budzi obawy. To pytanie, na które zespół realizujący musi umieć odpowiedzieć przed, a nie po wypuszczeniu funkcji AI: czy to wytwarza więcej wartości, niż kosztuje, gdy zapewnienie jakości, nadzór i ryzyko zostaną uczciwie wycenione?

## Dlaczego to ważne

Brytyjskie Central Digital and Data Office (CDDO) opublikowało w 2024 roku Generative AI Framework for Government, budując na wcześniejszych tymczasowych wytycznych z czerwca 2023 roku, i ustrukturyzowało go wokół dziesięciu zasad obejmujących to, czym jest generatywna AI, jej implikacje etyczne, bezpieczeństwo narzędzi, kontrole zapewnienia jakości, zarządzanie pełnym cyklem życia generatywnej AI, identyfikowanie prawdziwych przypadków użycia, współpracę ponadresortową, przejrzystość, umiejętności i zarządzanie. Nacisk ramy na „znaczącą kontrolę ludzką” i zarządzanie pełnym cyklem życia istnieje, ponieważ uzasadnienia biznesowe projektów AI mają szczególny tryb awarii, którego inne wydatki na IT nie mają: nagłówkową liczbę produktywności pilotażu łatwo wytworzyć i łatwo przeszacować, bo jest mierzona, zanim obciążenie weryfikacją, korektą i nadzorem tworzone przez narzędzie zostanie uwzględnione. Obok ramy Algorithmic Transparency Recording Standard (ATRS) wymaga od organów publicznych publikowania ustandaryzowanego zapisu — cel, użyte dane, wydajność, testy sprawiedliwości, ustalenia nadzoru ludzkiego — dla narzędzi algorytmicznych mających istotny wpływ na decyzje dotyczące jednostek, co czyni koszt zapewnienia jakości systemu AI sprawą publicznego zapisu, a nie wewnętrznym szacunkiem, który zespół może po cichu pominąć.

## Matematyka

Wdrożenie AI jest oceniane jako dodatek do standardowej oceny [wartości za pieniądze](../wartość-za-pieniądze/), a nie jej zamiennik, z jawnymi członami specyficznymi dla AI zamiast zwiniętymi w jedną liczbę „zysku produktywności”:

```
Wartość netto systemu AI =
    zysk produktywności (zaoszczędzony czas × pełny koszt personelu)
  − koszt licencji/obliczeń
  − koszt weryfikacji i nadzoru ludzkiego (sprawdzanie wyniku AI, zanim
    się na nim działa — nie spada do zera nawet dla dojrzałych narzędzi)
  − dokumentacja ATRS i bieżący koszt monitorowania
  − skorygowany o ryzyko koszt szkody z błędów, uprzedzeń lub halucynacji,
    ważony tym, kto tę szkodę ponosi (distributional-weighting)

Liczba produktywności pilotażu, która pomija człon nadzoru, nie jest
porównywalna z bazowym kosztem zwykłej działalności, który już zawiera
równoważny przegląd ludzki — zob. ai-productivity-in-the-public-sector
dla pełniejszej dyscypliny pomiaru produktywności, z której to zapożycza.
```

## Przykład obliczeniowy

**Samorząd lokalny używający narzędzia generatywnej AI do przygotowywania pierwszych odpowiedzi na rutynowe zapytania o podatek od nieruchomości**: 25 000 zapytań rocznie, wcześniej obsługiwanych w całości przez pracowników socjalnych w średnio 14 minut/zapytanie, pełny koszt personelu 34 £/godz.

```
Koszt bazowy (bez AI):
  25 000 × (14/60) × 34 £ = 198 333 £/rok

Nagłówkowe twierdzenie pilotażu: AI przygotowuje odpowiedź w 90 sekund,
pracownik „tylko przegląda i wysyła” — deklarowany nowy czas to 3 minuty
  25 000 × (3/60) × 34 £ = 42 500 £/rok
  → deklarowana oszczędność 155 833 £/rok (wygląda na przełomową)

Liczba w pełni obciążona, zmierzona po 3 miesiącach na żywo, a nie na ręcznie
dobranych przypadkach testowych pilotażu:
  Faktyczny czas przeglądu + korekty na odpowiedź: 6 minut (szkice wymagają
  realnej edycji dla złożonych lub emocjonalnie wrażliwych zapytań)
  25 000 × (6/60) × 34 £ = 85 000 £/rok
  Koszt licencji/obliczeń: 38 000 £/rok
  Dokumentacja ATRS i kwartalne monitorowanie uprzedzeń/jakości: 14 000 £/rok
  Całkowity koszt = 85 000 + 38 000 + 14 000 = 137 000 £/rok

Realna oszczędność = 198 333 − 137 000 = 61 333 £/rok — prawdziwa i warta
zachowania, ale dobrze poniżej połowy nagłówkowego twierdzenia pilotażu, a jej
znalezienie wymagało uczciwego pomiaru czasu nadzoru, a nie pomiaru
z najlepszego przypadku pilotażu.
```

## Związek z inżynierią oprogramowania

Tu spotykają się [produktywność AI w sektorze publicznym](../produktywność-ai-w-sektorze-publicznym/) i ten temat: zespoły inżynierskie wbudowujące funkcje AI w usługi publiczne posiadają oprzyrządowanie, które umożliwia „realną” liczbę z przykładu obliczeniowego — rejestrowanie faktycznego czasu przeglądu, odległości edycji między szkicem a wysłaną odpowiedzią i wskaźnika eskalacji, zamiast zaufania warunkom demonstracyjnym pilotażu. Funkcje AI powinny być oceniane względem punktu 9 [standardu usług cyfrowych](../standard-usług-cyfrowych/) (bezpieczna usługa, prywatność użytkownika) i krzyżowo odniesione do [wartości cyberbezpieczeństwa sektora publicznego](../wartość-cyberbezpieczeństwa-sektora-publicznego/), gdy narzędzie dotyka danych obywateli, a każdy system AI o istotnym wpływie na decyzje dotyczące jednostek potrzebuje zapisu ATRS, zanim można go uznać za gotowy do oceny, tak samo jak usługa potrzebuje przejść ocenę [standardu usług cyfrowych](../standard-usług-cyfrowych/) przed uruchomieniem.

## Pułapki

- **Pranie AI**: przemianowanie istniejącej automatyzacji opartej na regułach na „AI”, by uzyskać dostęp do finansowania lub uwagi zarezerwowanej dla wdrażania AI, bez ryzyk dokładności czy uprzedzeń, które faktycznie uzasadniają dodatkową kontrolę ramy.
- **Mierzenie produktywności pilotażu, a nie produkcji**: pilotaże działają na wyselekcjonowanych przypadkach testowych z zaangażowanymi, uważnymi recenzentami; produkcja działa na pełnej bałaganiarskiej mieszance przypadków z recenzentami, którzy z czasem rozwijają uprzedzenie automatyzacji i niedosprawdzają wyników — oba zniekształcają uczciwą liczbę kosztu nadzoru.
- **Pomijanie rejestracji ATRS, bo narzędzie „nie jest naprawdę zautomatyzowanym podejmowaniem decyzji”**: próg standardu to istotny wpływ na decyzję dotyczącą jednostki, który większość narzędzi AI do przygotowywania odpowiedzi lub segregacji skierowanych do obywateli spełnia, nawet gdy człowiek formalnie zatwierdza.
- **Ignorowanie dystrybucyjnego wpływu błędów**: wskaźnik błędów systemu AI uśredniony po wszystkich użytkownikach może ukrywać znacznie wyższy wskaźnik błędów lub uprzedzeń dla określonych grup; [ważenie dystrybucyjne](../ważenie-dystrybucyjne/) powinno być zastosowane do członu szkody skorygowanej o ryzyko, a nie tylko do zagregowanej liczby dokładności.

## Źródła

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
