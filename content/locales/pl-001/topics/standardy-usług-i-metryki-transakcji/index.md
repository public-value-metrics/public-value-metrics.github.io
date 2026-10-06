# Standardy usług i metryki transakcji

GOV.UK Service Standard to 14-punktowa lista kontrolna rządu brytyjskiego do budowania i prowadzenia publicznej usługi cyfrowej, a towarzyszy mu niewielki, obowiązkowy zestaw ilościowych metryk transakcji — koszt na transakcję, wskaźnik ukończenia, cyfrowe wykorzystanie i satysfakcja użytkowników — które zespoły muszą publikować dla każdej działającej usługi administracji centralnej. Razem standard i metryki są operacyjną, codzienną specjalizacją szerszych ram wartości publicznej i KPI z tego repozytorium, skierowaną wprost do zespołów dostarczających oprogramowanie.

## Dlaczego to ważne

Service Standard, utrzymywany w podręczniku usług GOV.UK, wymaga, by każda ocena w danym momencie (alfa, beta, produkcyjna) rządowej usługi cyfrowej wykazała — wśród swoich 14 punktów — że zespół rozumie potrzeby użytkowników, pracuje w zespole multidyscyplinarnym, iteruje i ulepsza często oraz *ocenia narzędzia, systemy i sposoby pracy*. Historycznie stało to obok publicznej Performance Platform, gdzie każda działająca usługa jawnie publikowała dane o transakcjach; ta platforma została od tego czasu zlikwidowana, ale leżący u jej podstaw obowiązek mierzenia i publikowania tych czterech podstawowych metryk utrzymuje się dzięki wytycznym podręcznika usług „measuring success”. Powód, dla którego różni się to od ogólnego pulpitu KPI oprogramowania, jest taki, że te metryki zostały wyraźnie zaprojektowane jako jeden powiązany model ekonomiczny, a nie cztery niezależne wyniki: cały argument oszczędnościowy dla cyfrowej administracji — Digital Efficiency Report Government Digital Service stwierdził, że transakcje cyfrowe są mniej więcej 20 razy tańsze niż telefoniczne i około 50 razy tańsze niż osobiste dla porównywalnych usług samorządowych — materializuje się tylko wtedy, gdy wskaźnik ukończenia pozostaje wysoki, a cyfrowe wykorzystanie naprawdę rośnie, zamiast po prostu dodawać tani kanał obok niezmienionego drogiego.

## Matematyka

```
Koszt na transakcję      = całkowity koszt prowadzenia usługi / liczba ukończonych transakcji
Wskaźnik ukończenia      = transakcje ukończone / transakcje rozpoczęte × 100
Cyfrowe wykorzystanie    = transakcje w kanale cyfrowym / transakcje we wszystkich kanałach × 100
Satysfakcja użytkowników = % zadowolonych + bardzo zadowolonych, 5-stopniowa ankieta w trakcie usługi

Oszczędność z przesunięcia kanału = wolumen transakcji × przesunięcie wykorzystania × (koszt na
                                    transakcję w starym kanale − koszt na transakcję cyfrowo)

Koszt popytu z niepowodzeń = (1 − wskaźnik ukończenia) × transakcje próbowane cyfrowo ×
                              koszt kanału zapasowego, którego ci użytkownicy używają zamiast
```

## Przykład obliczeniowy

**Poglądowa usługa odnowienia licencji administracji centralnej**, 2 miliony transakcji rocznie, obecnie 65% telefon (3,00 £/transakcję) i 35% cyfrowo (0,30 £/transakcję), wskaźnik ukończenia 80%. Przeprojektowanie względem 14-punktowego Service Standard podnosi cyfrowe wykorzystanie do 60%, a ukończenie do 92%:

```
Oszczędność z przesunięcia wykorzystania = 2 000 000 × 0,25 × (3,00 − 0,30) = 1 350 000 £/rok

Koszt popytu z niepowodzeń, przed:
  2 000 000 × 0,35 × (1 − 0,80) × 3,00 £ = 420 000 £/rok (porzucający wracają do telefonu)

Koszt popytu z niepowodzeń, po:
  2 000 000 × 0,60 × (1 − 0,92) × 3,00 £ = 288 000 £/rok

Oszczędność netto z popytu z niepowodzeń = 420 000 £ − 288 000 £ = 132 000 £/rok

Łączna roczna oszczędność ≈ 1 350 000 £ + 132 000 £ = 1 482 000 £/rok
```

Arytmetyka jasno pokazuje, dlaczego wskaźnik ukończenia nie jest metryką drugorzędną: bez poprawy z 80% do 92% oszczędność z przesunięcia wykorzystania byłaby częściowo odebrana przez popyt z niepowodzeń kierujący sfrustrowanych użytkowników cyfrowych prosto z powrotem do drogiego kanału telefonicznego.

## Związek z inżynierią oprogramowania

Te cztery metryki są działającym przykładem pulpitu koszt–konsekwencje: jedna metryka kosztu trzymana osobno od trzech metryk rezultatu/jakości, celowo nigdy niezwijana do pojedynczego wyniku — ta sama dyscyplina, o której mowa w [KPI sektora publicznego](../kpi-sektora-publicznego/). Dla inżynierów rozbija się to na konkretną, możliwą do objęcia pracę: wskaźnik ukończenia to problem oprzyrządowania lejka, a każdy punkt porzucenia na ścieżce jest, w zasadzie, możliwy do zlokalizowania i naprawienia; koszt na transakcję wymaga prawdziwej rachunkowości kosztów jednostkowych, w tym kosztów kanałów obsługiwanych przez personel i papierowych, a nie tylko wydatków na hosting w chmurze (zob. [koszt na transakcję](../koszt-na-transakcję/) i [całkowity koszt posiadania w IT administracji](../całkowity-koszt-posiadania-w-it-administracji/)); a cyfrowe wykorzystanie to metryka równości w kostiumie sprawności — obywatele, którzy nie mogą lub nie chcą zmieniać kanału, są nieproporcjonalnie starsi, niepełnosprawni lub wykluczeni cyfrowo, więc agresywne zamykanie kanałów zamienia „oszczędność” w szkodę dostępu (zob. [włączenie cyfrowe](../włączenie-cyfrowe/) i [oszczędności z przesunięcia kanałów](../oszczędności-z-przesunięcia-kanałów/)). Sam 14-punktowy standard jest specyfikacją procesu stojącą za tymi liczbami — zob. [standard usług cyfrowych](../standard-usług-cyfrowych/) dla pełnego standardu oraz [metryki satysfakcji obywateli](../metryki-satysfakcji-obywateli/) dla tego, jak liczba satysfakcji tutaj odnosi się do szerszego pomiaru zaufania.

## Pułapki

- **Wykorzystanie zyskane przez zamknięcie alternatywnego kanału**: zamknięcie linii telefonicznej podnosi arytmetycznie procent cyfrowego wykorzystania, zrzucając popyt z niepowodzeń na jakikolwiek pozostały kanał (często droższą ścieżkę z asystą cyfrową lub osobistą); zawsze mierz koszt całego systemu, a nie sam wskaźnik.
- **Mierzenie wskaźnika ukończenia od drugiego kroku lejka**: rozpoczęcie liczby „rozpoczętych” po pierwszym prawdziwym punkcie odpadu upiększa wskaźnik ukończenia i ukrywa największą naprawialną stratę.
- **Koszt na transakcję z pominięciem wsparcia z asystą cyfrową**: jednostkowy koszt wyłącznie cyfrowy, który ignoruje czas personelu poświęcony pomocy użytkownikom niezdolnym do samoobsługi, zaniża prawdziwy koszt kanału.
- **Publikowanie metryk bez wspólnej definicji w usługach**: „transakcja” i „ukończona” znaczą różne rzeczy w różnych zespołach usług, o ile definicje nie są ustandaryzowane i wersjonowane, co czyni porównanie między usługami niewiarygodnym.

## Źródła

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
