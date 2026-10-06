# Produktywność AI w sektorze publicznym

Metryki tego, co pomoc AI w kodowaniu faktycznie robi z wynikami inżynierii — wskaźniki akceptacji sugestii, przyspieszenia z kontrolowanych badań, przepustowość PR i utrzymanie kodu — niosą naprawdę sprzeczną bazę dowodową, zanim jeszcze dodać ograniczenia sektora publicznego: klasyfikacja danych ogranicza, których części starszego zasobu narzędzie AI w ogóle może dotykać, cykle zamówień oznaczają, że oceniane narzędzie często jest o generację modelu za obecnymi możliwościami, a wymogi poświadczeń bezpieczeństwa regulują, kto może go do czego używać.

## Dlaczego to ważne

Dwa najczęściej cytowane kontrolowane badania wskazują w przeciwnych kierunkach. RCT GitHub Copilot Penga i współpracowników z 2023 roku stwierdziło, że programiści ukończyli zadanie serwera HTTP od zera o 55,8% szybciej z Copilotem (1g11m wobec 2g41m, n=95). RCT METR z 2025 roku stwierdziło, że doświadczeni programiści open source pracujący nad *własnymi dojrzałymi repozytoriami* byli o 19% wolniejsi z narzędziami AI z początku 2025 roku, wierząc, że są o około 20% szybsi. Oba badania są solidne; sprzeczność jest ustaleniem — skuteczność zadań od zera nie przenosi się na skuteczność w dojrzałym kodzie, a duża część inżynierii rządowej to praca na dojrzałym kodzie w zasobach starszych i bardziej specyficznych niż mediana komercyjnego repozytorium. Generative AI Framework for HMG Central Digital and Data Office (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) określa zasady odpowiedzialnego wdrażania właśnie dlatego, że tej bazy dowodowej nie da się po prostu zaimportować z demonstracji dostawców; od resortów oczekuje się oceny narzędzi względem ich własnych wymagań dotyczących przetwarzania danych i bezpieczeństwa przed wdrożeniem.

## Matematyka

```
Wskaźnik akceptacji    = zaakceptowane sugestie / pokazane sugestie
Wskaźnik utrzymania    = kod AI dożywający do scalenia / zaakceptowany kod AI
Przyspieszenie         = (t_kontrola − t_AI) / t_kontrola  (WYŁĄCZNIE z kontrolowanego porównania)
Różnica przepustowości = Δ scalone PR/programista/tydzień

Czynnik pokrycia w sektorze publicznym:
  uprawniony udział kodu = LOC w systemach, w których klasyfikacja
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) w ogóle dopuszcza narzędzie

Model wartości = programiści × uprawnione-pokrycie × zaoszczędzony czas × pełna stawka × wykorzystanie
                — każdy człon wymaga lokalnego pomiaru, a czynnik pokrycia
                nie ma odpowiednika w sektorze prywatnym
```

## Przykład obliczeniowy

Resort rządowy pilotuje asystenta kodowania AI wśród 300 programistów, ale do użycia narzędzia uprawnione są tylko systemy sklasyfikowane jako OFFICIAL — 70% zasobu według przydziału etatów, a pozostałe 30% (systemy wyższej klasyfikacji) jest wyłączone całkowicie.

```
Uprawnieni programiści = 300 × 0,70 = 210

Wynik pilotażu: samoopisowy zaoszczędzony czas 40 min/dzień;
                zmierzona oszczędność na poziomie zadania 12 min/dzień (0,2 godz.)
                — luka percepcji METR, odtworzona w terenie

Wyceń ZMIERZONĄ liczbę:
  210 × 0,2 godz. × 220 dni × 55 £/godz. pełnej stawki × 0,6 wykorzystania
  = 210 × 44 godz. × 55 £ × 0,6
  = 9240 godz. × 55 £ × 0,6 ≈ 304 920 £/rok zdolności

Koszt: 210 licencjonowanych miejsc × 22 £/miesiąc × 12 ≈ 55 440 £/rok

Wskaźnik netto zdolności ≈ 304 920 / 55 440 ≈ 5,5:1
```

Do sfinansowania przy mniej więcej jednej trzeciej samoopisowej korzyści i tylko po zastosowaniu pułapu klasyfikacji — licencjonowanie wszystkich 300 programistów na podstawie samoopisowej liczby przeceniłoby zarówno uprawnioną populację, jak i prawdziwą oszczędność.

## Związek z inżynierią oprogramowania

Dyscypliny przenoszące się wprost: prowadź **pragmatyczne próby** na własnym kodzie resortu i prawdziwych zgłoszeniach, a nie na zadaniach demonstracyjnych dostawców, bo wynik METR jest konkretnie ustaleniem dla dojrzałego kodu; traktuj **wskaźnik akceptacji jako zastępnik, a nie rezultat** — wysoka akceptacja z niskim utrzymaniem to programowy odpowiednik nadmiernej diagnostyki; paruj każde twierdzenie o przepustowości z **kontrolą stabilności**, ponieważ raport DORA z 2025 roku stwierdził, że przyjęcie AI podnosi przepustowość, ale pogarsza stabilność zmian, co jest dokładnie analizą korzyści netto, którą [metryki DORA dla wartości publicznej](../metryki-dora-dla-wartości-publicznej/) są zbudowane przeprowadzać; i bądź szczery, że narzędzia AI mogą poszerzać, a nie zwężać lukę w starszych zasobach obciążonych [długiem technicznym](../dług-techniczny-jako-erozja-wartości-publicznej/), ponieważ dane treningowe niedostatecznie reprezentują kod COBOL, 4GL i mainframe na zamówienie powszechny w administracji, więc jakość sugestii w dokładnie tych systemach, które najbardziej potrzebują pomocy, jest często najsłabsza. To sąsiaduje z szerszym pytaniem o [wartość AI w administracji](../wartość-ai-w-administracji/) i powinno podlegać tym samym ograniczeniom [wartości cyberbezpieczeństwa sektora publicznego](../wartość-cyberbezpieczeństwa-sektora-publicznego/), które ograniczają, gdzie jakiekolwiek narzędzie strony trzeciej może w ogóle widzieć kod lub dane.

## Pułapki

- **Przeszczepianie badań dostawców**: stosowanie przyspieszeń z RCT od zera do pracy nad integracją starszych systemów to dokładnie błąd, który ujawniło badanie METR.
- **Samoopis jako pomiar**: 20-punktowa luka percepcji i zmierzenia to największe znane skrzywienie w tej literaturze i zawyża uzasadnienia biznesowe oparte wyłącznie na ankietach programistów.
- **Ignorowanie pułapu klasyfikacji**: modele licencji i wartości zbudowane na całkowitej liczbie etatów, a nie na uprawnionym, dopuszczonym klasyfikacją podzbiorze, systematycznie przeceniają zarówno efektywność kosztową, jak i osiągalne pokrycie.
- **Opóźnienie cyklu zamówień**: zakupy narzędzi w ramach umów ramowych mogą oznaczać, że pilotaż ocenia generację modelu o 12–18 miesięcy za tym, co jest publicznie dostępne w momencie pełnego wdrożenia, czyniąc założenie przyspieszenia pierwotnego uzasadnienia biznesowego nieaktualnym przed uruchomieniem.

## Źródła

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
