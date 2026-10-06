# Produktywność usług publicznych

Produktywność usług publicznych mierzy, jak sprawnie wydatki publiczne przekształcają nakłady (personel, kapitał, towary i usługi) w produkty skorygowane o jakość, dla usług — zdrowia, edukacji, policji, opieki społecznej — które nie mają ceny rynkowej, a więc nie mają liczby przychodów, przez którą można by podzielić koszty. Brytyjski Office for National Statistics publikuje tę serię od połowy lat 2000 i pozostaje ona najbardziej metodologicznie rozwiniętą krajową próbą odpowiedzi na pytanie „czy rząd staje się lepszy czy gorszy w przekształcaniu pieniędzy w usługi publiczne?”.

## Dlaczego to ważne

Na rynku produktywność to (wartość produktu) / (koszt nakładu), a wartość produktu jest obserwowalna, bo ktoś za nią płaci. Endoprotezoplastyka biodra, miejsce w szkole i patrol policji nie mają ceny sprzedaży, więc naiwnie można mierzyć tylko *nakłady* (co wydano) — co kusi komentatorów, by traktować rosnące wydatki publiczne jako automatycznie złe, ponieważ więcej nakładów przy płaskiej nagłówkowej aktywności wygląda jak spadająca produktywność. Metodologia ONS, określona w jego publikacjach „Sources and Methods” dla produktywności usług publicznych, rozwiązuje to, budując indeks *produktu* z wolumenów działań (wykonane operacje, nauczani uczniowie, wyjaśnione przestępstwa), a następnie *korygując go o jakość* — dla zdrowia uwzględniając wskaźniki przeżycia i czasy oczekiwania; dla edukacji uwzględniając osiągnięcia; dla policji uwzględniając rezultaty takie jak rozstrzygnięcie spraw — tak aby usługa, która wykonuje tyle samo operacji, ale osiąga lepsze wskaźniki przeżycia, rejestrowała się jako bardziej produktywna, a nie tylko jako droższa. Nagłówkowe ustalenie powtarzające się w publikacjach ONS jest dla sektora otrzeźwiające: produktywność brytyjskich usług publicznych gwałtownie spadła w czasie pandemii COVID-19 i według własnych publikacji ONS z połowy lat 2020 w kilku podsektorach, w tym w opiece zdrowotnej, nie wróciła jeszcze do poziomów z 2019 roku, mimo wzrostu wydatków — luka, która przeramowuje „więcej finansowania” i „więcej produktywności” jako dwa całkowicie odrębne pytania.

## Matematyka

```
Indeks produktu (wolumen) = Σ (działanie_i × względna waga kosztu jednostkowego_i), ważony
                            rokiem bazowym po wszystkich działaniach usługi (np. operacje
                            bioder, operacje zaćmy, konsultacje lekarza rodzinnego),
                            analogicznie do indeksu wolumenu Laspeyresa/Paaschego

Korekta jakości           = indeks produktu × czynnik korekty jakości
                            (np. uwzględniający zmianę wskaźników przeżycia, czasów
                            oczekiwania, osiągnięć lub recydywy jako mnożnik na surowy wolumen)

Indeks nakładów           = Σ (godziny pracy × waga kosztu pracy) + (koszt towarów/usług,
                            zdeflowany) + (zużycie kapitału)

Wzrost produktywności całkowitej = % zmiana indeksu produktu skorygowanego o jakość
                                   − % zmiana indeksu nakładów
```

## Przykład obliczeniowy

**Poglądowe obliczenie produktywności ostrego sektora NHS** (struktura zgodna z metodologią ONS):

```
Rok 1: indeks wolumenu produktu = 100,0 (rok bazowy), indeks nakładów = 100,0
       → indeks produktywności = 100,0

Rok 2: wolumen działań rośnie o 3,0% (więcej operacji, więcej wizyt)
       ale średni czas oczekiwania się pogarsza, stosując dyskonto korekty jakości
       −1,0%
       Indeks produktu skorygowany o jakość = 100 × 1,030 × 0,990 = 101,97

       Nakłady rosną: liczba personelu +4,0%, inne koszty (zdeflowane) +1,5%,
       ważony indeks nakładów = 100 × 1,032 = 103,2

Wzrost produktywności = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                      = 1,97% − 3,2% = −1,23 punktu procentowego

Interpretacja: działania wzrosły, ale nakłady wzrosły szybciej, a jakość nieco
spadła, więc produktywność — produkt na jednostkę nakładu — spadła, mimo że
„dostarczono więcej opieki”.
```

To dokładnie wzorzec, który publikacje ONS wielokrotnie raportowały dla części NHS po pandemii: rosnące wydatki i rosnąca surowa aktywność współistniejące ze spadającą zmierzoną produktywnością, gdy uwzględni się zarówno korektę jakości, jak i wzrost nakładów.

## Związek z inżynierią oprogramowania

Produktywność usług publicznych jest odpowiednikiem na poziomie populacji debat o produktywności inżynierii (dostarczone story pointy kontra [metryki DORA](../metryki-dora-dla-wartości-publicznej/) kontra [metryki przepływu](../metryki-przepływu-w-dostarczaniu-rządowym/)): surowa przepustowość bez korekty jakości wprowadza w błąd w szpitalu dokładnie tak, jak „dostarczone linie kodu” w zespole oprogramowania. Zespoły budujące potoki danych o wydajności dla resortów powinny traktować korektę jakości jako pierwszorzędny, wersjonowany etap transformacji, a nie przypis — bo wiarygodność samego ONS opiera się na tym, że ta korekta jest przejrzysta, powtarzalna i rewidowana w miarę napływu lepszych danych o jakości (ONS rewiduje szacunki produktywności z poprzednich lat, gdy leżące u podstaw dane o jakości — np. wskaźniki przeżycia — są finalizowane, więc każdy system końcowy konsumujący te statystyki musi obsługiwać wsteczne rewizje, a nie tylko dopisywać nowe okresy). Przecina się to też bezpośrednio z [całkowitym kosztem posiadania](../całkowity-koszt-posiadania-w-it-administracji/) i [produktywnością AI w sektorze publicznym](../produktywność-ai-w-sektorze-publicznym/): system, który zwiększa surowy wolumen działań bez poprawy lub utrzymania jakości, nie jest, według własnej definicji ONS, poprawą produktywności.

## Pułapki

- **Traktowanie wzrostu nakładów jako wzrostu produktywności**: więcej wydatków finansujących więcej personelu produkuje więcej *działań*, a nie więcej *produktywności*, chyba że rośnie też produkt na jednostkę nakładu — oba są rutynowo mylone w komentarzach politycznych.
- **Całkowite ignorowanie korekty jakości**: indeks produktu zbudowany tylko z surowych liczb działań pokaże „zyski produktywności” z robienia więcej czegoś o niższej wartości lub jakości; korekta jakości ONS istnieje właśnie po to, by to wychwycić.
- **Porównywanie indeksów produktywności między podsektorami bez dopasowania rocznika metodologii**: produktywność zdrowia, edukacji i policji są zbudowane z różnych źródeł danych o działaniach i jakości w różnych cyklach rewizji — naiwne porównanie międzysektorowe porównuje niekompatybilne instrumenty.
- **Odczytywanie spadku produktywności z jednego roku jako trwałego trendu**: liczby produktywności z czasów pandemii i po niej wykazywały znaczną zmienność rok do roku, gdy same dane o jakości (np. listy oczekujących, odbudowa zabiegów planowych) się przesuwały; ONS konsekwentnie przestrzega przed nadinterpretacją ruchów z jednego roku.

## Źródła

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
