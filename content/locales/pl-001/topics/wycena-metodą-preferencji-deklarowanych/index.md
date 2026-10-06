# Wycena metodą preferencji deklarowanych

Metody preferencji deklarowanych szacują wartość dobra pozarynkowego, pytając ludzi wprost, ile byliby gotowi za nie zapłacić lub jaką rekompensatę byliby gotowi przyjąć za rezygnację z niego, zwykle w ustrukturyzowanej ankiecie opisującej hipotetyczny scenariusz. Wycena warunkowa jest najbardziej znaną techniką w tej rodzinie.

## Dlaczego to ważne

Załącznik 2 do Green Book (uzupełniające wytyczne dotyczące wyceny skutków pozarynkowych) popiera metody preferencji deklarowanych dla dóbr, dla których w ogóle nie ma obserwowalnej transakcji rynkowej, z której można by wnioskować o wartości — jakość powietrza, bioróżnorodność, ochrona przeciwpowodziowa, wartość istnienia krajobrazu, którego ktoś może nigdy nie odwiedzić (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Defra opublikowała własne wytyczne preferencji deklarowanych do oceny środowiskowej właśnie dlatego, że tak duża część wartości środowiskowej (zachowanie siedlisk, jakość wody) nie ma w ogóle rynku zastępczego, w przeciwieństwie do, powiedzmy, hałasu, który przynajmniej koreluje z obserwowalnymi cenami domów (zob. [wycena metodą preferencji ujawnionych](../wycena-metodą-preferencji-ujawnionych/)).

Podstawowa zaleta preferencji deklarowanych — mogą wycenić dosłownie wszystko, także dobra, którymi nikt nigdy nie handlował — jest zarazem źródłem ich problemu z wiarygodnością. Ponieważ respondenci faktycznie nie wydają pieniędzy, ankiety wyceny warunkowej są podatne na błąd hipotetyczny (ludzie zawyżają gotowość do zapłaty, gdy nie ma realnego ograniczenia budżetowego), efekty osadzenia (to samo dobro jest wyceniane inaczej w zależności od tego, co jeszcze jest w ankiecie) oraz błąd punktu wyjścia w projektach gier licytacyjnych. Panel NOAA z 1993 roku o wycenie warunkowej, zwołany po sporach sądowych w sprawie wycieku ropy z Exxon Valdez, ustalił standardy projektowe — binarny format referendum „czy zapłaciłbyś X £, tak/nie” zamiast otwartych licytacji oraz obowiązkowe przypomnienia o faktycznym ograniczeniu budżetowym respondenta — które pozostają standardem odniesienia dla obronnych ankiet.

## Matematyka

```
Wycena warunkowa (format referendum):
  Przedstaw wybór binarny: „czy zapłaciłbyś X £ rocznie za rezultat Y? tak/nie”
  Zmieniaj X losowo wśród respondentów.
  Dopasuj gotowość do zapłaty jako funkcję odsetka odpowiedzi tak/nie przy każdym X.

Średnia WTP = pole pod oszacowaną krzywą popytu
Wartość zagregowana = Średnia WTP × populacja, której to dotyczy

Wariant eksperymentu wyboru (modelowanie wyborów dyskretnych):
  Przedstaw respondentom powtarzane wybory między pakietami atrybutów
  (w tym atrybutem kosztu), oszacuj ceny niejawne każdego atrybutu
  niekosztowego z kompromisów, które respondenci ujawniają.
```

Wariant eksperymentu wyboru jest w obecnej praktyce brytyjskiej zazwyczaj preferowany nad wyceną warunkową jednopytaniową, ponieważ zmuszanie respondentów do wielokrotnego równoważenia kilku atrybutów względem kosztu daje bardziej wewnętrznie spójne, trudniejsze do manipulowania oszacowania niż pojedyncze pytanie tak/nie.

## Przykład obliczeniowy

**Rząd krajowy**: Defra zleca ankietę wyceny warunkowej do wyceny programu poprawy jakości wody w rzece. Ankieta w formacie referendum wśród 2000 gospodarstw domowych stwierdza, że 62% zapłaciłoby 40 £ rocznie przez hipotetyczny dodatek do rachunku za wodę, a oszacowana krzywa popytu daje średnią gotowość do zapłaty 28 £ rocznie na gospodarstwo.

```
Średnia WTP = 28 £/gospodarstwo/rok
Gospodarstwa w zlewni = 340 000
Zagregowana wartość roczna = 28 £ × 340 000 = 9,52 mln £/rok

W 20-letnim okresie oceny przy stopie dyskontowej 3,5% (współczynnik renty ≈ 14,2):
PV(korzyść) ≈ 9,52 mln £ × 14,2 ≈ 135 mln £
```

Ta zagregowana liczba jest następnie porównywana ze stroną kosztową [analizy kosztów i korzyści społecznych](../analiza-kosztów-i-korzyści-społecznych/) programu. Green Book wymaga, by tego rodzaju dowody preferencji deklarowanych były raportowane wraz z przedziałem ufności i metodologią ankiety, a nie jako goły szacunek punktowy, właśnie dlatego, że leżąca u podstaw liczba jest bardziej krucha niż cena rynkowa.

**Organizacja charytatywna**: fundacja dziedzictwa bada odwiedzających i nieodwiedzających na temat gotowości do zapłaty za zapobieżenie zamknięciu zabytkowego budynku, którego żadna z grup niekoniecznie odwiedza (jego wartość istnienia). Ponieważ nieodwiedzający, którzy nigdy nie zobaczą budynku, nadal deklarują dodatnią WTP, ankieta uchwytuje wartość istnienia i dziedziczenia, którą prosty rachunek przychodów z opłat od zwiedzających (zastępnik preferencji ujawnionych) całkowicie by pominął — pokazując prawdziwą przewagę preferencji deklarowanych tam, gdzie nie istnieje żadna transakcja rynkowa, która mogłaby ujawnić wartość.

## Związek z inżynierią oprogramowania

Metody preferencji deklarowanych rzadko stosują się wprost do pracy inżynierii oprogramowania, ale inżynierowie budujący platformy konsultacji z obywatelami, narzędzia budżetu partycypacyjnego czy infrastrukturę ankiet publicznych często budują instrument, od którego zależy ekonomia. Dopracowanie szczegółów projektu ankiety — losowych kwot ofert, binarnego kadrowania referendum zamiast pytań otwartych, jawnych przypomnień o ograniczeniu budżetowym — to nie subtelność UX, lecz to, co czyni wynikową wycenę obronną pod kontrolą; źle zaprojektowana ankieta w aplikacji może unieważnić miesiące późniejszej analizy ekonomicznej. Zob. [metryki satysfakcji obywateli](../metryki-satysfakcji-obywateli/) dla bardziej ogólnej dyscypliny pozyskiwania danych o opinii publicznej, które mają unieść ciężar analityczny.

## Pułapki

- **Otwarte pytania „ile byś zapłacił?”.** Są znacznie bardziej podatne na stronniczość strategiczną i kotwiczenia niż binarne kadrowanie referendum; zalecenie panelu NOAA, by używać formatu referendum, istnieje właśnie dlatego, że otwarte pozyskiwanie działa słabo.
- **Brak przypomnienia o faktycznym ograniczeniu budżetowym respondenta.** Bez niego deklarowana WTP rutynowo przewyższa to, co ci sami ludzie zapłaciliby przy realnym kompromisie budżetowym — błąd hipotetyczny.
- **Pominięte efekty osadzenia.** To samo dobro wyceniane osobno i jako część większego pakietu daje różne szacunki WTP; raportuj, co jeszcze, o ile cokolwiek, było w ramie ankiety.
- **Traktowanie szacunku punktowego z jednej ankiety jako rozstrzygniętego.** Praktyka Green Book oczekuje zakresu i omówienia znanych błędów, a nie gołej liczby przenoszonej do tabeli kosztów i korzyści tak, jakby była ceną rynkową.

## Źródła

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
