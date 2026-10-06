# Ocena według Green Book (model pięciu przypadków)

Green Book to obowiązkowe wytyczne HM Treasury dotyczące oceny i ewaluacji brytyjskich wniosków o wydatki rządowe. Jego centralne narzędzie, model pięciu przypadków, zmusza uzasadnienie biznesowe do odpowiedzi na pięć odrębnych pytań — czy to dobry pomysł, czy zapewnia wartość, czy można to zakupić, czy można to sfinansować i czy można to zrealizować — zamiast zwijać wszystko do jednej liczby, którą minister może przepuścić.

## Dlaczego to ważne

Każdy wniosek o wydatki brytyjskiej administracji centralnej powyżej limitów delegowanych resortowi musi przejść ocenę według Green Book przed uwolnieniem finansowania, a Green Book Review 2020 HM Treasury (opublikowany po krytyce, że proces faworyzował zamożniejsze regiony kosztem biedniejszych, zob. <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) zaostrzył wymóg porównywania opcji z prawdziwym scenariuszem bazowym „zrób minimum” oraz wykazywania zgodności strategicznej, zanim w ogóle oceni się wartość za pieniądze. Sam model pięciu przypadków poprzedza Green Book — powstał w Office of Government Commerce jako standardowa struktura uzasadnienia biznesowego — ale wydanie Green Book z 2022 roku osadza go jako obowiązkowy kształt każdego uzasadnienia biznesowego ubiegającego się o zatwierdzenie Treasury: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Sens podziału uzasadnienia na pięć części polega na tym, że wniosek może zawieść w którymkolwiek wymiarze niezależnie od pozostałych. Strategicznie rozsądna, opłacalna kosztowo migracja platformy IT może nadal zawieść w przypadku handlowym, jeśli dostarczyć ją może tylko jeden dostawca (tworząc ryzyko zamówienia z wolnej ręki), lub zawieść w przypadku zarządczym, jeśli resort nie ma doświadczenia w realizacji programów tej wielkości. Pojedyncza ocena „wartości za pieniądze” ukrywa dokładnie ten rodzaj trybu awarii.

## Matematyka

Model pięciu przypadków to struktura, a nie wzór, ale każdy przypadek ma własny test ilościowy lub dowodowy:

```
1. Przypadek strategiczny
   Dowód celu wydatkowania powiązanego ze strategią organizacji.
   Test: czy w ogóle jest uzasadnienie zmiany? („nic nie rób” to zawsze opcja.)

2. Przypadek ekonomiczny
   Ocena opcji względem scenariusza bazowego „zrób minimum”, z użyciem
   analizy kosztów i korzyści społecznych lub analizy efektywności kosztowej.
   Test: która opcja maksymalizuje netto wartość publiczną?
   Zob. ../social-cost-benefit-analysis/ i ../cost-effectiveness-analysis-in-government/

3. Przypadek handlowy
   Zaangażowanie rynku, ścieżka zamówienia, podział ryzyka między
   nabywcę a dostawcę.
   Test: czy preferowaną opcję można zakupić na akceptowalnych warunkach?

4. Przypadek finansowy
   Przystępność w granicach budżetu resortu, źródło finansowania,
   ujęcie w bilansie.
   Test: czy nas na to stać, w tym roku i w każdym kolejnym?

5. Przypadek zarządczy
   Zarządzanie, plan projektu, plan realizacji korzyści, rejestr ryzyka.
   Test: czy ta organizacja naprawdę może to zrealizować?
   Zob. ../benefits-realization/
```

W przypadku ekonomicznym mieści się ocena ilościowa: opcje porównuje się na podstawie bieżącej wartości netto skorygowanej o [społeczną stopę dyskontową](../społeczna-stopa-dyskontowa/), metodą [analizy kosztów i korzyści społecznych](../analiza-kosztów-i-korzyści-społecznych/) lub, gdy korzyści nie da się uczciwie wycenić pieniężnie, przez [analizę efektywności kosztowej](../analiza-efektywności-kosztowej-w-administracji/) albo [wielokryterialną analizę decyzyjną](../wielokryterialna-analiza-decyzyjna/).

## Przykład obliczeniowy

**Samorząd lokalny**: rada oceniająca system IT do napraw mieszkaniowych za 12 milionów £ przeprowadza pięć przypadków następująco. Przypadek strategiczny: zaległość napraw narusza ustawowy standard przyzwoitych mieszkań w ciągu 18 miesięcy bez interwencji. Przypadek ekonomiczny: trzy opcje wycenione w 10-letnim okresie oceny przy stopie dyskontowej 3,5% (według standardowej stopy społecznej preferencji czasowej Green Book z 2022 roku) — „zrób minimum” (załataj stary system, NPV −4,1 mln £), „kup” (platforma COTS, NPV +2,3 mln £), „zbuduj” (platforma na zamówienie, NPV +0,6 mln £ po zastosowaniu 40% optymizmu dla rozwoju oprogramowania względem niezdyskontowanego kosztu kapitałowego, według Załącznika A do Green Book). „Kup” wygrywa przypadek ekonomiczny. Przypadek handlowy: istnieje dwóch wiarygodnych dostawców, przetarg konkurencyjny jest możliwy — przechodzi. Przypadek finansowy: kapitał dostępny z Public Works Loan Board, koszty bieżące mieszczą się w średnioterminowym planie finansowym — przechodzi. Przypadek zarządczy: rada zrealizowała dwa porównywalne systemy w ciągu ostatnich pięciu lat — przechodzi. Wniosek idzie dalej z opcją „kup”.

**Resort administracji centralnej**: wniosek z silnym przypadkiem ekonomicznym (NPV +40 mln £), ale w którym odpowiednią akredytację ma tylko jeden dostawca, nie przechodzi testu przypadku handlowego pod kątem konkurencyjnego napięcia, co wymusza albo odstępstwo od zamówienia z wolnej ręki (z własnym ciężarem kontroli), albo przeprojektowanie specyfikacji w celu otwarcia rynku — sam przypadek ekonomiczny nigdy by tego nie ujawnił.

## Związek z inżynierią oprogramowania

Zespoły inżynierskie w organizacjach rządowych lub finansowanych z grantów zwykle widzą tylko przypadek ekonomiczny, ponieważ to część, którą kierownictwo produktu i inżynierii proszone jest uzasadnić („jaki jest ROI tej migracji?”). Ale uzasadnienie biznesowe, które przechodzi przez Treasury lub komitet grantowy, potrzebuje wszystkich pięciu, a inżynierowie są często najlepiej ulokowanymi osobami do odpowiedzi na przypadek handlowy (czy to naprawdę da się zakupić, czy uwiązuje nas do zastrzeżonego formatu jednego dostawcy?) i przypadek zarządczy (czy mamy zdolność realizacji, czy to zależy od tego, że trzy konkretne osoby nie odejdą?). Traktuj prośbę o „same liczby uzasadnienia biznesowego” jako prośbę o jedną piątą faktycznej decyzji. Zob. [wartość za pieniądze](../wartość-za-pieniądze/), jak wynik przypadku ekonomicznego jest zwykle podsumowywany, oraz [całkowity koszt posiadania](../całkowity-koszt-posiadania-w-it-administracji/) dla zwykłego ilościowego rdzenia przypadku finansowego.

## Pułapki

- **Pisanie najpierw przypadku ekonomicznego, a przypadku strategicznego pod niego.** Green Book Review 2020 stwierdził, że właśnie ten tryb awarii napędzał stronniczość oceny w kierunku miejsc i sektorów, które były już dobrze udokumentowane, utrwalając nierówności regionalne; przypadek strategiczny powinien ustalać cel, zanim porówna się opcje.
- **Traktowanie „zrób minimum” jako „nic nie rób”.** Prawidłowy punkt odniesienia to opcja o najniższym koszcie, która nadal spełnia minimalne zobowiązania prawne lub bezpieczeństwa, a nie fantazja o zerowym wydatku — porównywanie z dosłownym zerem zawyża pozorną wartość każdej opcji.
- **Pomijanie przypadków handlowego i zarządczego, bo przypadek ekonomiczny jest silny.** Wniosek o wysokim NPV, którego nie da się konkurencyjnie zakupić lub zrealizować przez organizację sponsorującą, nie jest wnioskiem do sfinansowania; recenzenci Treasury rutynowo odrzucają z tych powodów nawet przy przekonującym przypadku ekonomicznym.
- **Stosowanie modelu pięciu przypadków tylko raz, na początku.** Green Book wymaga, by przypadek był ponownie rozpatrywany na każdej kolejnej bramce zatwierdzania (strategiczny przypadek wstępny, wstępne uzasadnienie biznesowe, pełne uzasadnienie biznesowe) w miarę utrwalania się kosztów i dowodów — przypadek zamrożony na etapie wstępnym pomija eskalację kosztów, którą wyłapałaby późniejsza bramka.

## Źródła

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
