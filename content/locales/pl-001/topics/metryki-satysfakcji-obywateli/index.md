# Metryki satysfakcji obywateli

Metryki satysfakcji obywateli mierzą, jak ludzie oceniają swoje bezpośrednie doświadczenie usługi publicznej — odrębnie od zaufania do instytucji w ogóle i odrębnie od tego, czy usługa faktycznie osiągnęła dobry rezultat. Usługa może być lubiana i nieskuteczna albo skuteczna i nielubiana; luka między nimi sama w sobie jest informacją diagnostyczną, którą zespół realizujący powinien obserwować.

## Dlaczego to ważne

Satysfakcję mierzy się na dwóch różnych wysokościach, które rutynowo się miesza. Na poziomie usługi, niedziałająca już brytyjska Performance Platform i dzisiejszy podręcznik usług GOV.UK wymagają ankiety satysfakcji dla każdej usługi (zwykle pięciostopniowa skala od „bardzo zadowolony” do „bardzo niezadowolony”, przeprowadzana w punkcie transakcji) jako jednego z czterech obowiązkowych KPI usługi — zob. [standardy usług i metryki transakcji](../standardy-usług-i-metryki-transakcji/). Na poziomie instytucjonalnym brytyjskie badanie Civil Service People Survey mierzy zaangażowanie i doświadczenia pracowników w każdym resorcie administracji centralnej rocznie, a osobno program OECD „Trust in Government” bada zaufanie publiczne do rządu krajowego w państwach członkowskich, śledząc długofalowy wzorzec spadku i odbudowy silnie kształtowany przez kryzysy (kryzys finansowy 2008 roku i pandemia COVID-19 wywołały ostre, widoczne ruchy w liczbach zaufania OECD). Powód, dla którego inżynierowie budujący usługi dla obywateli muszą trzymać satysfakcję i rezultat osobno, to znany tryb awarii w projektowaniu usług: pięknie zaprojektowany, łatwy w użyciu formularz cyfrowy wniosku o świadczenie może uzyskać bardzo wysoką satysfakcję, podczas gdy leżąca u podstaw polityka — zasady uprawnień, zaległości w przetwarzaniu, kwoty przyznawane — nie poprawia sytuacji wnioskodawcy. Satysfakcja mierzy interfejs; nie mierzy wartości dostarczonej za nim.

## Matematyka

```
Satysfakcja netto = % zadowolonych (lub bardzo zadowolonych) − % niezadowolonych (lub bardzo niezadowolonych)
                    (odpowiedzi neutralne/bez opinii wykluczone z obu składników, ale policzone
                    w bazie odpowiedzi do obliczenia każdego procentu)

Luka satysfakcja–rezultat = wynik satysfakcji − wynik osiągnięcia rezultatu
                    (oba znormalizowane do 0–100; duża dodatnia luka sygnalizuje usługę,
                    która „dobrze się czuje”, ale niedostarcza w istocie)

Indeks zaufania (w stylu OECD) = % respondentów odpowiadających „tak” na pytanie
                    „czy ma Pan/Pani zaufanie do [rządu krajowego]?”
                    śledzony jako szereg czasowy, zwykle ze zróżnicowaniem według
                    wieku, dochodu i wykształcenia
```

## Przykład obliczeniowy

**Usługa e-faktur podatku od nieruchomości samorządu lokalnego**: badanie satysfakcji w punkcie udanej transakcji pokazuje 2400 respondentów: 1650 zadowolonych/bardzo zadowolonych, 250 niezadowolonych/bardzo niezadowolonych, 500 neutralnych.

```
Satysfakcja netto = (1650/2400 × 100) − (250/2400 × 100)
                  = 68,75% − 10,42%
                  = +58,3 satysfakcji netto
```

W izolacji wygląda to mocno. Ale ankieta jest pokazywana tylko użytkownikom, którzy *pomyślnie* ukończyli transakcję — znane skrzywienie pomiaru (zob. pułapki poniżej). Zestawienie jej z metryką wskaźnika ukończenia ze [standardów usług i metryk transakcji](../standardy-usług-i-metryki-transakcji/) pokazuje, że ukończenie wynosi tylko 71%, co oznacza:

```
Prawdziwa satysfakcja populacji jest niezmierzona dla 29%, którzy porzucili ścieżkę —
prawdopodobnie najbardziej niezadowolonej kohorty, ponieważ porzucenie samo w sobie
jest silnym negatywnym sygnałem, którego ankieta nigdy nie uchwyci.
```

**Ilustracja na poziomie krajowym (struktura szeregu zaufania w stylu OECD)**: zaufanie do rządu krajowego raportowane na 42% w roku 1, spadające do 34% w roku 2 (rok kryzysu) i odbudowujące się do 39% w roku 3 — trajektoria typowa dla wzorca szoku i częściowej odbudowy, który OECD dokumentuje w państwach członkowskich po poważnych kryzysach.

## Związek z inżynierią oprogramowania

Oprzyrządowuj ankiety satysfakcji w każdym znaczącym punkcie wyjścia ścieżki użytkownika, a nie tylko przy pomyślnym ukończeniu — najczęstszy błąd inżynierski w tej przestrzeni i taki, który po cichu przekształca metrykę satysfakcji w metrykę próżności skrzywioną przez przeżywalność. Gdy to możliwe, sparuj wynik satysfakcji z metryką ukończenia lub rezultatu na tym samym pulpicie, aby zespół nie mógł świętować rosnącej satysfakcji, gdy ukończenie po cichu spada (zob. [koszt na transakcję](../koszt-na-transakcję/) i [włączenie cyfrowe](../włączenie-cyfrowe/) dla tego, kto jest wykluczany z cyfrowego próbkowania satysfakcji już na starcie — użytkownicy niecyfrowi i z asystą cyfrową są systematycznie niedoreprezentowani w ankietach w trakcie usługi). Dane o satysfakcji i zaufaniu zasilają też bezpośrednio ramię legitymacji [trójkąta strategicznego Moore’a](../wartość-publiczna/) i należą do perspektyw „klient” i „legitymacja” [karty wyników wartości publicznej](../karta-wyników-wartości-publicznej/) — zob. [metryki zaufania i legitymacji](../metryki-zaufania-i-legitymacji/) dla instytucjonalnego odpowiednika tej metryki na poziomie usługi.

## Pułapki

- **Skrzywienie przeżywalności w ankietach w punkcie ukończenia**: użytkownicy, którzy porzucają ścieżkę, nigdy nie widzą ankiety, więc wysoki wynik satysfakcji w trakcie usługi może współistnieć z niskim wskaźnikiem ukończenia i dużą niewidoczną populacją niezadowolonych nieukończających.
- **Traktowanie satysfakcji jako zastępnika rezultatu**: dobrze zaprojektowany interfejs dla źle zaprojektowanej polityki dobrze punktuje w satysfakcji i źle w rezultacie — zawsze raportuj oba, nigdy jednego jako zastępstwo drugiego.
- **Małe, niereprezentatywne próby raportowane z fałszywą precyzją**: wynik satysfakcji z kilkuset samodzielnie dobranych respondentów raportowany do jednego miejsca po przecinku implikuje pewność, której wielkość próby nie może podeprzeć.
- **Ignorowanie zróżnicowania demograficznego**: krajowe liczby zaufania i satysfakcji, które nie są rozbite według wieku, dochodu, niepełnosprawności czy dostępu cyfrowego, mogą maskować ostro rozbieżne doświadczenia między grupami — wzorzec, który publikacje OECD Trust in Government same wyraźnie rozbijają.

## Źródła

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
