# Indeks Wielokrotnej Deprywacji (IMD)

IMD to oficjalna miara względnej deprywacji dla małych obszarów w Anglii, szeregująca każdy z 32 844 Obszarów Super Wyjściowych Niższego Poziomu kraju (LSOA, każdy około 1500 mieszkańców) od 1 (najbardziej deprywowany) do 32 844 (najmniej deprywowany). Jest publikowany przez to, co obecnie jest Ministry of Housing, Communities and Local Government (MHCLG, dawniej MHCLG/DCLG), ostatnio jako English Indices of Deprivation 2019, i bezpośrednio kieruje finansowaniem administracji centralnej, priorytetyzacją zdrowia publicznego i uprawnieniami do dziesiątek lokalnych programów.

## Dlaczego to ważne

Deprywacja nie jest jedną rzeczą — okolica może być uboga dochodowo, ale bezpieczna, albo dochodowo wystarczająca, ale cierpieć z powodu słabych wyników zdrowotnych i złych warunków mieszkaniowych. Poprzedzające IMD indeksy (sięgające wskaźników deprywacji Departamentu Środowiska z lat 70.) ewoluowały w dzisiejszy model siedmiu dziedzin właśnie dlatego, że targetowanie jednowskaźnikowe (powiedzmy samą stopą bezrobocia) rutynowo pomijało obszary deprywowane na inne sposoby. IMD 2019 łączy dochód, zatrudnienie, edukację, zdrowie, przestępczość, bariery mieszkaniowe i usługowe oraz środowisko życia w jedną złożoną pozycję na LSOA, każda dziedzina zbudowana z własnego koszyka wskaźników i ważona metodologią MHCLG. Ponieważ działa na poziomie małych obszarów (LSOA), a nie samorządu lokalnego, ujawnia kieszenie deprywacji ukryte w poza tym zamożnych okręgach — dlatego to IMD, a nie średni dochód samorządu lokalnego, jest tym, wokół czego faktycznie kręcą się NHS England, premia uczniowska Departamentu Edukacji i dziesiątki formuł finansowania samorządów lokalnych. Oprogramowanie, które określa uprawnienia, priorytetyzuje zasięg lub raportuje wpływ według obszaru w Anglii, powinno traktować decyl lub pozycję IMD jako pierwszorzędne wejście, a nie dodatek — a tam, gdzie program celowo targetuje najbardziej deprywowane obszary, jego ocena powinna stosować [ważenie dystrybucyjne](../ważenie-dystrybucyjne/) zgodne z tym targetowaniem, zamiast wyceniać funt korzyści tak samo bez względu na to, gdzie ląduje.

## Matematyka

```
7 dziedzin, ważonych:
  Dochód                                 22,5%
  Zatrudnienie                           22,5%
  Edukacja, umiejętności i szkolenia     13,5%
  Deprywacja zdrowotna i niepełnosprawność 13,5%
  Przestępczość                           9,3%
  Bariery mieszkaniowe i usługowe         9,3%
  Środowisko życia                        9,3%

Wynik każdej dziedziny: wskaźniki standaryzowane (szeregowane, a następnie
przekształcone ku rozkładowi normalnemu) i łączone transformacją wykładniczą,
tak aby wysoka deprywacja w którymkolwiek wskaźniku nie mogła być w pełni
zniwelowana niską deprywacją w innych w obrębie tej dziedziny.

Złożony wynik IMD (LSOA) = Σ (wynik dziedziny × waga dziedziny)
Szereguj LSOA według złożonego wyniku → 1 (najbardziej deprywowany) do 32 844 (najmniej deprywowany)
Decyle: pozycja ÷ 3284 (w przybliżeniu), decyl 1 = najbardziej deprywowane 10% LSOA
```

## Przykład obliczeniowy

**Złożony wynik LSOA**, z użyciem poglądowych standaryzowanych wyników dziedzin (0 = brak sygnału deprywacji, wyżej = bardziej deprywowany):

```
Dochód                 0,35 × 0,225 = 0,07875
Zatrudnienie           0,30 × 0,225 = 0,06750
Edukacja               0,20 × 0,135 = 0,02700
Zdrowie                0,15 × 0,135 = 0,02025
Przestępczość          0,10 × 0,093 = 0,00930
Bariery mieszkaniowe   0,05 × 0,093 = 0,00465
Środowisko życia       0,08 × 0,093 = 0,00744

Złożony wynik = 0,07875 + 0,06750 + 0,02700 + 0,02025
              + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Ten złożony wynik jest następnie szeregowany względem wyników wszystkich 32 844 LSOA. Jeśli umieszcza LSOA na pozycji 2950, wpada do decyla 1 (2950 ÷ 3284 ≈ 0,9, tzn. w obrębie najbardziej deprywowanych 10% okolic w Anglii) — co dla wielu formuł finansowania jest progiem otwierającym uprawnienia, bez względu na to, jak otaczający samorząd lokalny wypada średnio.

## Związek z inżynierią oprogramowania

- Każda usługa, która geokoduje użytkowników do kodu pocztowego lub LSOA, może dołączyć opublikowaną tabelę wyszukiwania IMD (bezpłatny, wersjonowany CSV z MHCLG), aby dodać decyl deprywacji jako zmienną towarzyszącą — do targetowania zasięgu, priorytetyzowania obciążenia sprawami lub raportowania rezultatów według pasma deprywacji bez zbierania nowych danych osobowych.
- Decyl IMD to standardowa kontrola równości dla publicznych usług cyfrowych: krzyżowe zestawienie wykorzystania usługi, odpadu lub satysfakcji według decyla IMD ujawnia luki w dostępie, które zagregowana metryka ukrywa — zob. [włączenie cyfrowe](../włączenie-cyfrowe/) i [metryki satysfakcji obywateli](../metryki-satysfakcji-obywateli/).
- Ponieważ pozycja IMD jest względna (zawsze sumuje się do ustalonego zbioru pozycji w całej Anglii), nie może pokazać, czy deprywacja krajowa rośnie czy maleje w czasie — tylko które obszary zajmują jakie pozycje względem siebie w danej edycji; nie buduj pulpitów trendów bezwzględnych na samej surowej pozycji IMD.

## Pułapki

- **Porównywanie pozycji IMD między edycjami (2015 vs. 2019) jako trend w czasie** — leżące u podstaw wskaźniki, geografie i metodologia zmieniają się między edycjami; MHCLG wyraźnie odradza używanie zmian pozycji jako dowodu, że obszar stał się bardziej lub mniej deprywowany.
- **Stosowanie IMD na poziomie LSOA do jednostek** — LSOA w decylu 1 nadal zawiera gospodarstwa niedeprywowane, a LSOA w decylu 10 nadal zawiera deprywowane; IMD opisuje obszary, a nie ludzi, i używanie go jako zastępnika uprawnień indywidualnych błędnie klasyfikuje w obu kierunkach.
- **Ignorowanie szczegółów na poziomie dziedzin na rzecz złożonej pozycji** — dwa LSOA o identycznych złożonych wynikach mogą mieć zupełnie różne profile dziedzin (jeden deprywowany zdrowotnie, drugi przestępczością); program targetowania skierowany na jeden problem powinien używać odpowiedniego wyniku dziedziny, a nie zmieszanego wyniku złożonego.

## Źródła

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
