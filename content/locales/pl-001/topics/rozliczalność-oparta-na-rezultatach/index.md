# Rozliczalność oparta na rezultatach (OBA)

Rozliczalność oparta na rezultatach (Outcomes-Based Accountability), zwana też rozliczalnością opartą na wynikach (Results-Based Accountability, RBA), to rama Marka Friedmana do rozdzielania dwóch pytań, które raportowanie sektora publicznego nałogowo zaciera: „czy populacja ma się dobrze?” (rozliczalność populacyjna) i „czy ten konkretny program dobrze sobie radzi?” (rozliczalność wynikowa). Pomieszanie ich jest, według Friedmana, najczęstszym powodem, dla którego dobrze prowadzone programy są obwiniane za trendy populacyjne, których nigdy nie miały mocy ruszyć.

## Dlaczego to ważne

Friedman przedstawił ramę w *Trying Hard Is Not Good Enough* (2005), argumentując, że większość raportowania publicznego albo topi decydentów w statystykach na poziomie populacji, których żadna pojedyncza agencja nie kontroluje (wskaźnik ciąż nastolatek, bezrobocie, oczekiwana długość życia), albo topi ich w liczbach działań na poziomie programu (obsłużeni klienci, dokonane skierowania), które nic nie mówią o tym, czy czyjeś życie się poprawiło. Wkład RBA to mały, zdyscyplinowany słownik, który trzyma oba osobno: wyniki populacyjne (warunki dobrostanu dla całej populacji, jak „dzieci rodzą się zdrowe”) nie należą do żadnej pojedynczej agencji i wymagają wielu partnerów poruszających się razem; miary wynikowe (jak dobrze konkretny program służy swoim konkretnym klientom) należą do jednej agencji i powinny być oceniane tylko względem tego, na co ta agencja faktycznie może wpływać. „Trzy pytania wynikowe” Friedmana — ile zrobiliśmy, jak dobrze to zrobiliśmy i czy ktokolwiek ma się lepiej? — są obecnie osadzone w amerykańskim kontraktowaniu usług społecznych na poziomie stanów i hrabstw oraz, za pośrednictwem zgodnej z RBA firmy doradczej i zestawu narzędzi Clear Impact, szeroko używane w brytyjskim i wspólnotowym zamawianiu usług przez samorządy. Praktyczne stawki są umowne: program mieszkaniowy nie powinien tracić finansowania dlatego, że wskaźnik bezdomności w mieście wzrósł z przyczyn makroekonomicznych poza jego zasięgiem, ale absolutnie powinien je stracić, jeśli jego własni klienci nie są zakwaterowani.

## Matematyka

```
Rozliczalność populacyjna („szeroki obraz” współdzielony przez społeczność, region lub naród):
  Wynik        — warunek dobrostanu (np. „mieszkańcy są bezpieczni ekonomicznie”)
  Wskaźnik(i)  — miara tego warunku (np. stopa bezrobocia, mediana dochodu gospodarstwa domowego)
  → żaden pojedynczy program nie jest właścicielem wskaźnika; ruch wymaga wielu uczestników

Rozliczalność wynikowa (za co odpowiada jeden program):
  Ile zrobiliśmy?           — wolumen działań (obsłużeni klienci, dostarczone jednostki)
  Jak dobrze to zrobiliśmy? — jakość/sprawność (% kończących program, koszt na klienta)
  Czy ktoś ma się lepiej?   — rezultat, który ma znaczenie (% zatrudnionych 6 miesięcy po
                              programie, przed/po lub względem grupy porównawczej)

Program jest oceniany według trzeciego pytania wynikowego, nigdy bezpośrednio według
wskaźnika populacyjnego, chyba że jego skala i projekt mogłyby go wiarygodnie ruszyć samodzielnie.
```

## Przykład obliczeniowy

**Finansowany przez miasto program wsparcia zatrudnienia**, 500 uczestników rocznie, zakontraktowany przez samorząd lokalny w ramach struktury wyników w stylu RBA:

```
Wskaźnik populacyjny (kontekst, nie karta wyników programu):
  Stopa bezrobocia w mieście: 6,2% (w górę z 5,8% w poprzednim roku, spowodowane
  zamknięciem fabryki poza kontrolą programu)

Miary wynikowe (rzeczywista rozliczalność programu):
  Ile:           500 zapisanych uczestników (cel 480) — spełniony
  Jak dobrze:    78% wskaźnik ukończenia; koszt na kończącego = 340 000 £ / 390 kończących ≈ 872 £
  Czy lepiej:    z 390 kończących 260 w trwałym zatrudnieniu po 6 miesiącach = 66,7%
                 wobec 41% dopasowanej grupy porównawczej (zob. counterfactual-analysis)
```

Przy odczycie rozliczalności populacyjnej program wygląda na zawodzący — stopa bezrobocia w mieście wzrosła pod jego okiem. Przy odczycie rozliczalności wynikowej RBA program odnosi sukces: osiągnął cel wolumenu, utrzymał stabilną jakość i wytworzył rezultat zatrudnienia o 25,7 punktów procentowych wyższy niż dopasowana grupa porównawcza, podczas gdy wskaźnik populacyjny poruszył się z powodów (zamknięcie fabryki) całkowicie poza kontrolą programu.

## Związek z inżynierią oprogramowania

RBA odwzorowuje się wprost na znane rozróżnienie SRE: wskaźniki populacyjne są jak metryki Gwiazdy Polarnej na poziomie biznesu, których żaden pojedynczy zespół inżynierski nie posiada od początku do końca (przychody firmy, udział w rynku), podczas gdy miary wynikowe są jak własne SLO zespołu — rzeczy, które decyzje projektowe tego zespołu faktycznie poruszają. Pulpit raportujący oba bez oznaczenia, który jest którym, zaprasza dokładnie tę błędną atrybucję, której RBA miało zapobiegać: inżynier dyżurny obwiniany za metrykę kontrolowaną przez zespół zależny. Zamawiając lub budując narzędzia raportowe dla umów rezultatowych, zbuduj triadę „ile / jak dobrze / czy lepiej” jako pierwszorzędne, osobno filtrowalne pola zamiast pojedynczego zmieszanego KPI — to ta sama dyscyplina co rozdzielanie wskaźników wiodących i opóźnionych w [KPI sektora publicznego](../kpi-sektora-publicznego/). RBA to także logika rozliczalności leżąca pod [płatnością za wyniki i obligacjami wpływu społecznego](../płatność-za-wyniki-i-obligacje-wpływu-społecznego/): umowa PbR może sprawiedliwie płacić tylko według miary wynikowej „czy lepiej”, nigdy według wskaźnika populacyjnego, chyba że interwencja jest naprawdę dominującym czynnikiem napędzającym go.

## Pułapki

- **Nagradzanie lub karanie programu według wskaźnika populacyjnego, którego nie może kontrolować**: to jedyny błąd, któremu RBA ma zapobiegać; zawsze sprawdź, czy program jest głównym czy drugorzędnym współuczestnikiem wyniku populacyjnego, zanim dołączysz do niego konsekwencje.
- **Raportowanie „ile” tak, jakby to było „czy lepiej”**: liczby działań (obsłużeni klienci) to dane najłatwiejsze do zebrania i najmniej informacyjne; nalegaj, by na pytanie „czy ktoś ma się lepiej” odpowiadać prawdziwymi danymi o rezultatach, najlepiej względem kontrfaktu (zob. [analiza kontrfaktyczna](../analiza-kontrfaktyczna/)).
- **Traktowanie wskaźników RBA jako stałych na zawsze**: metoda Friedmana jest wyraźnie iteracyjna — cykl „dane, historia, co działa, plan działania” — a nie jednorazowe ćwiczenie projektowania karty wyników.
- **Brak grupy porównawczej dla „czy lepiej”**: zmiana przed/po bez kontrfaktu myli skutek programu z trendem, który populacja i tak by pokazała.

## Źródła

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
