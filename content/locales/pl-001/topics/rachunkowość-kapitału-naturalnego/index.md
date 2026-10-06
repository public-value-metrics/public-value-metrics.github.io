# Rachunkowość kapitału naturalnego

Rachunkowość kapitału naturalnego stawia środowisko na tym samym poziomie co każde inne aktywo krajowe lub organizacyjne: mierzy zasób zasobów naturalnych (lasy, gleby, rzeki, mokradła, atmosfera) i przepływ usług, które wytwarzają (sekwestracja węgla, ochrona przeciwpowodziowa, rekreacja, żywność), zarówno w ujęciu fizycznym, jak i pieniężnym, tak aby wyczerpywanie środowiska pojawiało się w podejmowaniu decyzji tak, jak uszczuplanie kapitału finansowego. Wielka Brytania jest jednym z najbardziej zaawansowanych rządów w robieniu tego systematycznie, napędzana 25-letnim planem środowiskowym (2018) i wdrażana poprzez rachunki UK Natural Capital ONS oraz uzupełniające wytyczne HM Treasury do Green Book.

## Dlaczego to ważne

Konwencjonalna rachunkowość — zarówno korporacyjna, jak i rządowa — traktuje las jako bezwartościowy, dopóki nie zostanie ścięty i sprzedany jako drewno, w którym to momencie staje się PKB. Rachunkowość kapitału naturalnego istnieje, by zamknąć tę lukę: 25-letni plan środowiskowy Wielkiej Brytanii zobowiązał rząd do osadzenia myślenia o kapitale naturalnym w całej polityce, wyraźnie stwierdzając ambicję bycia „pierwszym pokoleniem, które pozostawia środowisko w lepszym stanie, niż je zastało”. ONS opublikował od tego czasu roczne rachunki UK Natural Capital (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>), które szacują pieniężną wartość usług ekosystemowych — od rekreacji leśnej przez zdrowotne korzyści miejskiej zieleni po magazynowanie węgla w torfowiskach — używając tych samych ram Rachunków Narodowych stosowanych dla kapitału wytworzonego, tak aby kapitał naturalny mógł w końcu znaleźć się w tym samym bilansie co drogi, budynki i sprzęt. Wytyczne Enabling a Natural Capital Approach (ENCA) HM Treasury, uzupełniające do Green Book (<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>), określają, jak oceniający powinni wyceniać koszty i korzyści środowiskowe w uzasadnieniach biznesowych, tak aby program drogowy niszczący pradawny las lub program przeciwpowodziowy odtwarzający mokradła można było porównać na spójnych terminach pieniężnych, zamiast jednego mającego liczbę, a drugiego akapit zastrzeżeń.

## Matematyka

```
Wartość aktywa usługi ekosystemowej = NPV przepływu usług, które aktywo zapewnia

Wartość aktywa = Σ (t = 1 do T) [roczna wartość przepływu usług_t / (1 + r)^t]

gdzie:
  wartość przepływu usług_t = ilość usługi w roku t × wartość jednostkowa
                              (np. wizyty rekreacyjne × wartość za wizytę;
                               tony zsekwestrowanego węgla × cena węgla)
  r = stopa dyskontowa (społeczna stopa dyskontowa Green Book — zob.
      [społeczna stopa dyskontowa](../społeczna-stopa-dyskontowa/))
  T = horyzont czasowy, w którym aktywo ma świadczyć usługę
```

To identyczna struktura bieżącej wartości netto używana do wyceny kapitału wytworzonego lub oceny dowolnej inwestycji publicznej w ramach [oceny według Green Book](../ocena-według-green-book/) — wkładem rachunkowości kapitału naturalnego jest dostarczenie wiarygodnych ilości fizycznych i wartości jednostkowych dla usług, które wcześniej wyceniano na zero.

## Przykład obliczeniowy

**Las miejski, wartość rekreacyjna**: 50-hektarowy las przyjmuje szacunkowo 80 000 wizyt rekreacyjnych rocznie, każda wyceniona (metodą kosztu podróży lub preferencji deklarowanych — zob. [wycena metodą preferencji ujawnionych](../wycena-metodą-preferencji-ujawnionych/) i [wycena metodą preferencji deklarowanych](../wycena-metodą-preferencji-deklarowanych/)) na 3 £ za wizytę. Las ma świadczyć tę usługę przez 50 lat, oceniane przy stopie dyskontowej 3,5%.

```
Roczna wartość rekreacyjna = 80 000 × 3 £ = 240 000 £/rok

NPV w ciągu 50 lat przy 3,5% ≈ 240 000 £ × współczynnik renty(3,5%, 50 lat)
współczynnik renty(3,5%, 50) ≈ 21,4

Wartość aktywa ≈ 240 000 £ × 21,4 ≈ 5 136 000 £
```

**Dodanie magazynowania węgla**: ten sam las sekwestruje szacunkowo 400 ton CO2 rocznie, wycenione rządową ceną węgla spoza handlu wynoszącą mniej więcej 75 £/tonę (poglądowo — do żywej oceny użyj aktualnych opublikowanych wartości węgla BEIS/DESNZ).

```
Roczna wartość węgla = 400 × 75 £ = 30 000 £/rok
NPV w ciągu 50 lat przy 3,5% ≈ 30 000 £ × 21,4 ≈ 642 000 £

Całkowita wartość aktywa lasu (rekreacja + węgiel) ≈ 5 136 000 £ + 642 000 £
                                                   ≈ 5 778 000 £
```

To przed dodaniem tłumienia powodzi, bioróżnorodności czy usług jakości powietrza, które wytyczne ENCA także proszą oceniających o rozważenie — suma jest celowo dolną granicą, a nie górną.

## Związek z inżynierią oprogramowania

- Systemy środowiskowe i zarządzania aktywami dla samorządów lokalnych i agencji (parki, autostrady, zbiorniki wodne) mogą dołączyć rejestr kapitału naturalnego obok rejestru aktywów fizycznych, używając tego samego wzorca przepływ usług razy wartość jednostkowa co każda inna [baza kosztów jednostkowych](../bazy-kosztów-jednostkowych/), którą organizacja utrzymuje.
- Ponieważ NPV kapitału naturalnego jest wrażliwa na stopę dyskontową (zob. współczynnik renty w przykładzie obliczeniowym), każde narzędzie ją obliczające powinno ujawniać stopę i horyzont jako widoczne wejścia, a nie je chować — ta sama zasada przejrzystości omówiona w [równości międzypokoleniowej i dyskontowaniu zrównoważonego rozwoju](../równość-międzypokoleniowa-i-dyskontowanie-zrównoważonego-rozwoju/).
- Rachunki kapitału naturalnego są coraz częściej wymaganym wejściem do sekcji wpływu środowiskowego uzasadnienia biznesowego [oceny według Green Book](../ocena-według-green-book/); zespół realizujący budujący narzędzia uzasadnień biznesowych powinien traktować rachunki ONS i wartości jednostkowe ENCA jako dane referencyjne do integracji, a nie coś, co oceniający za każdym razem przeliczają od nowa.

## Pułapki

- **Podwójne liczenie nakładających się usług ekosystemowych** — wartość rekreacyjna i wartość bioróżnorodności dla tego samego miejsca mogą dzielić leżące u podstaw dane o gotowości do zapłaty; wytyczne ENCA wyraźnie ostrzegają przed sumowaniem wycen wyprowadzonych z nakładających się instrumentów ankietowych.
- **Traktowanie wartości aktywa kapitału naturalnego jako statycznej** — przepływy usług zmieniają się z klimatem, zarządzaniem i presją zagospodarowania gruntów; wartość węgla i tłumienia powodzi lasu w tej dekadzie nie jest trwałą właściwością miejsca.
- **Używanie krajowych średnich wartości jednostkowych dla bardzo lokalnej decyzji** — hektar dostępnego lasu miejskiego i hektar odległej wyżyny mają bardzo różną wartość rekreacyjną; wytyczne ENCA zalecają wartości lokalne lub specyficzne dla miejsca, gdy są dostępne, zamiast domyślnie sięgać po średnie krajowe.

## Źródła

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
