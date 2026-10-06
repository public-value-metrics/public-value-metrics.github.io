# Dług techniczny jako erozja wartości publicznej

Dług techniczny to metafora Warda Cunninghama z 1992 roku dla domyślnego przyszłego kosztu doraźnych decyzji programistycznych z przeszłości: **kapitał** (dług do naprawienia) i **odsetki** (bieżące obciążenie, jakie wywiera na dostarczanie). W starszym zasobie IT administracji te odsetki są płacone wprost z wartości publicznej — wolniejsze dostarczanie zmian ustawowych, wyższe wskaźniki awarii w usługach skierowanych do obywateli i kurcząca się pula ludzi, którzy w ogóle mogą bezpiecznie dotykać systemu.

## Dlaczego to ważne

Starsze systemy mainframe i z ery COBOL w brytyjskich resortach rządowych — HMRC i DWP wśród najczęściej cytowanych — niosą dobrze udokumentowane i narastające ryzyko, które National Audit Office wielokrotnie sygnalizował, w tym w raporcie *Digital Transformation in Government* (<https://www.nao.org.uk/>): starzejące się platformy kosztowne w zmianie, coraz trudniejsze do zabezpieczenia i zależne od wyspecjalizowanej siły roboczej, która odchodzi na emeryturę szybciej, niż jest zastępowana. W odróżnieniu od zaległości w sektorze prywatnym ten dług stoi bezpośrednio między obywatelami a ich ustawowymi uprawnieniami — silnik obliczania świadczeń, którego nie można bezpiecznie zmienić, jest ograniczeniem realizacji polityki, a nie tylko niewygodą inżynierską. Restart programu IT Universal Credit w 2013 roku, gdy National Audit Office stwierdził, że pierwotna budowa nie zapewni wartości za pieniądze, a znaczna część aktywa oprogramowania musiała zostać spisana, jest kanonicznym przykładem niewycenionego długu technicznego, który dogania żywy, widoczny dla ministrów program publiczny.

## Matematyka

```
Kapitał SQALE = Σ po naruszeniach (czas naprawy) × stawka kosztu programisty
Wskaźnik długu technicznego (TDR) = koszt naprawy / koszt ponownego opracowania × 100
                    (stopnie SonarQube: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Odsetki (liczba, która uzasadnia spłatę):
  odsetki/rok = Δ prędkość dostarczania × wartość na jednostkę prędkości
              + Δ wskaźnik incydentów skierowanych do obywateli × koszt na incydent
              + premia za wyspecjalizowane umiejętności × dotknięci pracownicy
Argument za spłatą = PV(uniknięte odsetki w horyzoncie) − koszt naprawy
               (zdyskontowane społeczną stopą dyskontową Green Book, zob.
               social-discount-rate.md)
```

Kapitał określa zobowiązanie; odsetki są tym, co tworzy argument inwestycyjny przed komisją rachunków publicznych.

## Przykład obliczeniowy

250-tysięczny silnik przetwarzania wniosków napisany w starszym 4GL. Używając wzorca CAST Appmarq z mniej więcej 3,61 $ kapitału długu technicznego na linię kodu (≈2,85 £ przy typowym przeliczeniu):

```
Kapitał ≈ 250 000 × 2,85 £ ≈ 712 500 £
TDR ≈ 16% (stopień C)
```

Zmierzone odsetki: resort zatrzymuje trzech wyspecjalizowanych wykonawców z 40% premią do dziennej stawki ponad standardowe stawki starszych inżynierów, bo umiejętności wewnętrzne się wykruszyły — dodatkowe 180 000 £ rocznie w sześcioosobowym zespole. System powoduje też cztery duże przerwy w przetwarzaniu rocznie, każda zawiesza decyzje dla około 5000 wnioskodawców i przekierowuje ich do centrum kontaktu za mniej więcej 25 £/połączenie:

```
Odsetki ≈ 180 000 £ (premia za umiejętności)
        + 4 × 5000 × 25 £ = 500 000 £ (koszt przekierowanego kontaktu)
        ≈ 680 000 £/rok
```

Celowana naprawa najgorzej działających modułów kosztuje 1 200 000 £ i jest modelowana na obniżenie odsetek o 70%:

```
Redukcja odsetek = 0,70 × 680 000 = 476 000 £/rok
Zwrot ≈ 1 200 000 / 476 000 ≈ 2,5 roku
```

Celowanie ma znaczenie: naprawa rzadko dotykanego kodu nic nie kupuje, ponieważ odsetki koncentrują się tam, gdzie zarówno częstotliwość zmian, jak i gęstość długu osiągają szczyt.

## Związek z inżynierią oprogramowania

Ujęcie wartości publicznej, które podnosi argument za długiem technicznym ponad „kod jest stary”: wyraź starszy zasób jako inwentarz miejsc, gdzie skoncentrowana jest utracona zdolność dostarczania, i powiąż go jawnie z [całkowitym kosztem posiadania](../całkowity-koszt-posiadania-w-it-administracji/), ponieważ odsetki to koszt operacyjny, który należy do pozycji TCO, czy finanse kiedykolwiek o to prosiły, czy nie. Systemy obciążone długiem niosą też nieproporcjonalną ekspozycję na [cyberbezpieczeństwo](../wartość-cyberbezpieczeństwa-sektora-publicznego/), ponieważ tempo poprawek i gęstość długu są skorelowane — niedający się załatać starszy system to dług techniczny, którego odsetki są płacone w ryzyku incydentów, a nie funtach. I każdy kompromis naprawa-kontra-funkcja sam jest decyzją [kosztu opóźnienia](../koszt-opóźnienia-w-programach-publicznych/): spłacanie długu opóźnia następną zmianę ustawową, która ma własny CoD, który trzeba zważyć względem zaoszczędzonych odsetek.

## Pułapki

- **Raportowanie samego kapitału**: duży, przerażający szacunek naprawy bez liczby odsetek nie uzasadnia niczego przed zatwierdzającym wydatki.
- **Dosłowne traktowanie liczb długu generowanych przez narzędzia**: skanery w stylu SQALE liczą naruszenia reguł; pomijają drogi rodzaj długu — decyzje architektoniczne i nieudokumentowane starsze reguły biznesowe — oznaczając drobiazgi.
- **„Przepisanie unika tego wszystkiego”**: programy zastępcze muszą przejść tę samą dyscyplinę co każde inne uzasadnienie biznesowe — koszt kontrfaktyczny, prawdopodobieństwo sukcesu i dyskontowanie — a nie być od niej wyłączone, jak pokazał restart Universal Credit w 2013 roku.
- **Utopijność zerowego długu**: optymalny poziom długu nie jest zerem; dług to dźwignia, która kupiła wcześniejsze dostarczanie. Żywym pytaniem jest zawsze stopa odsetek, a nie to, czy dług w ogóle istnieje.

## Źródła

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
