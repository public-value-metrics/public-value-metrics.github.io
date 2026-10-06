# Wielokryterialna analiza decyzyjna (MCDA)

MCDA punktuje i waży opcje względem kilku odrębnych, ważonych kryteriów naraz, dając uszeregowane porównanie bez wciskania każdego kryterium w jedną skalę pieniężną lub jednostek naturalnych. To metoda oceny dla decyzji, w których rezultatów, które mają znaczenie, naprawdę nie da się zredukować do jednej liczby.

## Dlaczego to ważne

Green Book wyraźnie dopuszcza MCDA (omawiają ją wprost jego załącznik z studiami przypadków Box 2 i Załącznik A) dla ocen, w których korzyści są „naprawdę niewspółmierne” — gdzie przeliczenie wszystkiego na pieniądze przez [analizę kosztów i korzyści społecznych](../analiza-kosztów-i-korzyści-społecznych/) lub na jeden rezultat przez [analizę efektywności kosztowej](../analiza-efektywności-kosztowej-w-administracji/) przekłamałoby decyzję zamiast ją wyjaśnić (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Wybór lokalizacji nowego więzienia na przykład równoważy koszt kapitałowy z wpływem na społeczność, połączeniami transportowymi, skutkiem środowiskowym i możliwością rekrutacji personelu — kryteria, które nie mają wspólnej jednostki, a wymuszenie wspólnej jednostki (zwykle pieniądza) przemyciłoby osąd wartości o względnej ważności, powiedzmy, wpływu na środowisko versus kosztu, przebrany za obiektywną arytmetykę.

Uczciwość MCDA jest zarazem jej główną podatnością: ponieważ wagi przypisuje ten, kto prowadzi ocenę (lub panel), metoda jest tak prawomocna, jak proces ważenia. Wytyczne Green Book wyraźnie wymagają, by kryteria i wagi były uzgodnione i opublikowane *przed* punktowaniem opcji, właśnie po to, by zapobiec temu, że recenzent cofa się od preferowanej opcji do wag, które ją uzasadniają.

## Matematyka

```
Dla każdej opcji i i kryterium j:
  Punkty_ij  = wynik opcji względem tego kryterium (często 0–100 lub 1–10,
               na podstawie dowodów, osądu eksperckiego lub punktacji interesariuszy)
  Waga_j     = względna ważność kryterium j, wagi sumują się do 1 (lub 100)

Ważona punktacja opcji i = Σ_j (Punkty_ij × Waga_j)

Procedura:
1. Uzgodnij zestaw kryteriów i wagi PRZED punktowaniem jakiejkolwiek opcji
   (ważenie swing lub porównanie parami, np. AHP, to częste metody pozyskiwania).
2. Punktuj każdą opcję względem każdego kryterium na wspólnej skali, w miarę
   możliwości na podstawie dowodów.
3. Oblicz sumy ważone; uszereguj opcje.
4. Przetestuj wagi na wrażliwość: czy ranking przetrwa wiarygodne
   różnice zdań co do tego, jak ważne ma być każde kryterium?
```

MCDA nie daje obronnej wartości bezwzględnej, jak bieżąca wartość netto w SCBA — daje tylko ranking warunkowy względem uzgodnionych wag. To zaleta, gdy decyzja naprawdę dotyczy wymiany niewspółmiernych dóbr, i obciążenie, jeśli używana jest do uniknięcia trudniejszej pracy wyceny pieniężnej tam, gdzie wycena była faktycznie możliwa.

## Przykład obliczeniowy

**Samorząd lokalny**: rada wybierająca lokalizację nowego punktu recyklingu odpadów komunalnych punktuje trzy lokalizacje względem czterech kryteriów, ważonych przez panel międzywydziałowy przed jakąkolwiek wizytą w terenie:

```
Kryteria (waga):          Koszt kapitałowy (30%)  Dostęp transportowy (25%)
                           Wpływ na społeczność (25%)  Wpływ na środowisko (20%)

Punkty lokalizacji (0–100, wyżej = lepiej):
Lokalizacja A: koszt 80, dostęp 60, społeczność 40, środowisko 70
Lokalizacja B: koszt 60, dostęp 90, społeczność 70, środowisko 50
Lokalizacja C: koszt 90, dostęp 50, społeczność 80, środowisko 60

Sumy ważone:
A = 80(0,30) + 60(0,25) + 40(0,25) + 70(0,20) = 24+15+10+14 = 63
B = 60(0,30) + 90(0,25) + 70(0,25) + 50(0,20) = 18+22,5+17,5+10 = 68
C = 90(0,30) + 50(0,25) + 80(0,25) + 60(0,20) = 27+12,5+20+12 = 71,5
```

Lokalizacja C zajmuje najwyższe miejsce. Przebieg wrażliwości, który przesuwa wagę wpływu na społeczność z 25% do 35% (zabierając 10 punktów od kosztu kapitałowego), zmienia sumę C na 71,5 − 3 + 8 = 76,5, a sumę B na 68 − 6 + 7 = 69 — C nadal prowadzi, więc ranking jest odporny na tę wiarygodną różnicę zdań co do ważenia, co jest dokładnie kontrolą, którą Green Book oczekuje zobaczyć w raporcie.

**Organizacja charytatywna**: fundacja grantowa wybierająca między sfinansowaniem usługi doradztwa zadłużeniowego, sieci banków żywności i programu edukacji finansowej używa MCDA zamiast SROI (zob. [społeczny zwrot z inwestycji](../społeczny-zwrot-z-inwestycji/)) właśnie dlatego, że powiernicy w dobrej wierze różnią się co do tego, czy pomoc kryzysowa czy zapobieganie powinny ważyć więcej — MCDA pozwala im uzgodnić *kształt* nieporozumienia (zakres wag), zamiast udawać, że pojedynczy wskaźnik SROI je rozstrzyga.

## Związek z inżynierią oprogramowania

MCDA to naturalne narzędzie do wyboru dostawcy i architektury, gdy kryteria naprawdę się ze sobą kłócą — wybór między systemem obsługi spraw hostowanym w chmurze a lokalnym równoważy koszt, ryzyko suwerenności danych, dostępność i szybkość dostarczania w sposób, który nie redukuje się do jednej liczby. Liderzy inżynierii powinni nalegać, by ważenie odbyło się przed punktowaniem opcji, dokładnie tak, jak wymaga Green Book, bo ćwiczenie ważenia przeprowadzone po zobaczeniu krótkiej listy niezawodnie dryfuje ku opcji, którą sala już faworyzowała. Zob. [budować czy kupować w administracji](../budować-czy-kupować-w-administracji/) dla częstego zastosowania MCDA oraz [kartę wyników wartości publicznej](../karta-wyników-wartości-publicznej/) dla pokrewnego narzędzia ustrukturyzowanej punktacji używanego po decyzji, a nie przed nią.

## Pułapki

- **Ustalanie wag po zobaczeniu opcji.** To najczęstszy sposób manipulowania MCDA, umyślny lub nie; publikuj wagi przed punktowaniem i zapisz, kto je ustalił.
- **Traktowanie sumy ważonej jako twardej liczby.** Wynik 71,5 wobec 68 nie jest statystycznie znaczącą różnicą, o ile analiza wrażliwości nie potwierdzi stabilności rankingu; raportuj zakresy, a nie fałszywą precyzję.
- **Używanie MCDA do uniknięcia wyceny pieniężnej, która była w istocie wykonalna.** Jeśli większość kryteriów dałoby się wiarygodnie wycenić, domyślne sięgnięcie po MCDA zamiast [SCBA](../analiza-kosztów-i-korzyści-społecznych/) odrzuca informacje, których ocena mogła użyć.
- **Pozwalanie jednemu dominującemu interesariuszowi na samodzielne ustalenie wszystkich wag.** Dobra praktyka Green Book oczekuje, że wagi będą pozyskiwane od reprezentatywnego panelu, a nie od dyrektora sponsorującego, aby ocena nie odtwarzała po prostu tego, czego ta osoba już chciała.

## Źródła

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
