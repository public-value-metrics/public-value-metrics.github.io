# Równość międzypokoleniowa i dyskontowanie zrównoważonego rozwoju

Dyskontowanie przyszłych kosztów i korzyści z powrotem do wartości bieżącej jest standardową praktyką w ocenie publicznej — zob. [społeczna stopa dyskontowa](../społeczna-stopa-dyskontowa/) — ale każda dodatnia stopa dyskontowa, kapitalizowana przez dekady lub stulecia, kurczy odległą przyszłość ku zeru w dzisiejszych terminach. Dla decyzji z konsekwencjami sięgającymi stulecia lub więcej — zmiana klimatu, odpady jądrowe, utrata bioróżnorodności, zrównoważenie emerytur — ten matematyczny fakt staje się faktem etycznym: standardowe dyskontowanie może sprawić, że katastrofalna szkoda dla przyszłych pokoleń będzie w kategoriach wartości bieżącej ledwo warta uniknięcia.

## Dlaczego to ważne

Równanie Ramseya, wyprowadzone przez Franka Ramseya w 1928 roku, rozkłada stopę dyskontową na dwa składniki: czystą preferencję czasową (δ, jak bardzo po prostu wolimy teraz od później, niezależnie od bogactwa) oraz efekt wzrostu bogactwa (η×g, jak bardzo dyskontujemy, ponieważ przyszłe pokolenia mają być bogatsze, więc dodatkowy funt znaczy dla nich mniej). Standardowa długoterminowa stopa dyskontowa brytyjskiego Green Book jest zbudowana na tym równaniu i podąża za *malejącym* harmonogramem zamiast stałej stopy — projekt zakorzeniony w pracy Martina Weitzmana nad „dyskontowaniem gamma”, która pokazuje, że gdy sama przyszła stopa dyskontowa jest niepewna, stopa równoważna pewności, którą powinieneś stosować, matematycznie maleje z czasem, ponieważ scenariusze niskiej stopy zaczynają dominować, im dalej patrzysz. Raport Sterna o ekonomii zmian klimatu (2006), kierowany przez Sir Nicholasa Sterna, posunął debatę etyczną dalej: Stern argumentował, że czysta preferencja czasowa powinna być ustalona blisko zera (użył δ ≈ 0,1%, odzwierciedlając tylko małe prawdopodobieństwo katastrofy kończącej cywilizację, a nie prawdziwą preferencję teraźniejszości nad przyszłością), co daje znacznie niższą efektywną stopę dyskontową niż konwencjonalna praktyka Green Book i odpowiednio znacznie większy dzisiejszy argument za działaniem klimatycznym. Krytycy (zwłaszcza William Nordhaus) argumentowali, że niemal zerowa stopa Sterna jest etycznie do obrony, ale niespójna z faktycznie obserwowanym zachowaniem oszczędności i inwestycji. Spór nie jest technicznym przypisem — jest najważniejszym powodem, dla którego dwóch równie rygorystycznych ekonomistów może dojść do skrajnie różnych wniosków co do tego, ile obecne pokolenie powinno poświęcić dla przyszłości, i dlatego oprogramowanie wspierające ocenę inwestycji publicznych o długim horyzoncie musi ujawniać swoje założenia dyskontowania, a nie chować je w domyślnych ustawieniach arkusza.

## Matematyka

```
Równanie Ramseya:   r = δ + η × g

  r = społeczna stopa dyskontowa
  δ = czysta preferencja czasowa (stopa niecierpliwości, niezależna od bogactwa)
  η = elastyczność użyteczności krańcowej konsumpcji (malejąca wartość dodatkowej
      konsumpcji w miarę jak ludzie bogacą się)
  g = oczekiwana stopa wzrostu konsumpcji per capita

Malejący długoterminowy harmonogram Green Book (przybliżony, aktualne opublikowane pasma):
  Lata 0–30:     3,5%
  Lata 31–75:    3,0%
  Lata 76–125:   2,5%
  Lata 126–200:  2,0%
  Lata 201–300:  1,5%
  Lata 301+:     1,0%

Parametry Raportu Sterna: δ ≈ 0,1%, η = 1, g ≈ 1,3%  → r ≈ 1,4%
```

## Przykład obliczeniowy

**Dzisiejsza wartość 1 £ unikniętej szkody za 100 lat**, w trzech reżimach dyskontowania:

```
Stała krótkoterminowa stopa Green Book (3,5%, utrzymana stała przez 100 lat):
  PV = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ 0,032 £   (3,2 pensa)

Malejący harmonogram Green Book (3,5% dla lat 1–30, 3,0% dla lat 31–75,
2,5% dla lat 76–100):
  czynnik(1–30)   = 1,035^30  ≈ 2,807
  czynnik(31–75)  = 1,03^45   ≈ 3,782
  czynnik(76–100) = 1,025^25  ≈ 1,854
  łączny czynnik ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  PV = 1 / 19,68 ≈ 0,051 £   (5,1 pensa)

Niemal zerowa czysta preferencja czasowa w stylu Sterna (r ≈ 1,4% stała):
  PV = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ 0,250 £   (25,0 pensów)
```

Ten sam 1 £ szkody uniknięty za stulecie jest wart dziś 3,2 pensa, 5,1 pensa lub 25 pensów, w zależności wyłącznie od tego, której konwencji dyskontowania się użyje — niemal ośmiokrotny zakres, który decyduje, czy projekt łagodzenia klimatu z wysokim kosztem początkowym i zwrotem za stulecie w ogóle przekracza poprzeczkę dodatniego NPV. To mechanizm stojący za centralnym ostrzeżeniem rozdziału: przy jakiejkolwiek istotnie dodatniej stałej stopie wystarczająco odległa przyszła szkoda jest arytmetycznie wymazywana z oceny, bez względu na jej realną powagę.

## Związek z inżynierią oprogramowania

- Każde narzędzie oceny lub uzasadnienia biznesowego o długim horyzoncie (infrastruktura, adaptacja do klimatu, modelowanie emerytur) powinno implementować *malejący* harmonogram Green Book, a nie jedną stałą stopę — domyślna stała stopa po cichu osadza znacznie silniejsze uprzedzenie przeciw przyszłości, niż określają obecne wytyczne rządu brytyjskiego.
- Stopa dyskontowa i horyzont powinny być zawsze ujawniane jako widoczne, audytowalne parametry w oprogramowaniu oceny, z jawnie pokazaną wrażliwością obliczenia na nie (jak w przykładzie obliczeniowym powyżej) — schowanie stopy w pliku konfiguracyjnym zaprasza dokładnie „ukryty wybór etyczny”, przed którym ostrzega spór Stern–Nordhaus; to łączy się z punktem o przejrzystości w [rachunkowości kapitału naturalnego](../rachunkowość-kapitału-naturalnego/) i leży u podstaw tematu [społecznej stopy dyskontowej](../społeczna-stopa-dyskontowa/) ogólnie.
- Tam, gdzie korzyści programu są jawnie międzypokoleniowe (ochrona przeciwpowodziowa, odtwarzanie kapitału naturalnego, długoterminowa infrastruktura cyfrowa), [analiza kosztów i korzyści społecznych](../analiza-kosztów-i-korzyści-społecznych/) powinna raportować wyniki przy co najmniej dwóch założeniach dyskontowania (standard Green Book i scenariusz wrażliwości niskiej stopy), a nie jednym oszacowaniu punktowym, aby decydenci widzieli, jak sam wybór stopy dyskontowej przesuwa odpowiedź.

## Pułapki

- **Przedstawianie pojedynczego zdyskontowanego NPV bez zakresu wrażliwości** — biorąc pod uwagę, jak bardzo sama stopa dyskontowa zmienia odpowiedź dla projektów o długim horyzoncie, NPV przy jednej stopie istotnie przecenia precyzję; zawsze raportuj zakres obejmujący co najmniej standard Green Book i scenariusz niskiej stopy.
- **Stosowanie krótkoterminowej stałej stopy (3,5%) do wielostuletniej oceny** — własne wytyczne Green Book określają malejący harmonogram właśnie dlatego, że stałą stopę uznano za nieodpowiednią poza około 30 latami; jej użycie mimo to zaniża koszty długoterminowe.
- **Traktowanie δ (czystej preferencji czasowej) jako czysto technicznego parametru** — bliska zeru wartość Sterna i wyższa niejawna wartość Green Book są obie do obrony tylko jako stanowiska etyczne co do tego, ile wagi teraźniejszość jest winna przyszłości, a nie empirycznie „poprawne” lub „niepoprawne” liczby; oprogramowanie powinno uczynić założenie widocznym, zamiast przedstawiać jedną liczbę jako obiektywnie słuszną.

## Źródła

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
