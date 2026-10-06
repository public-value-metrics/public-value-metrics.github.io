# Ważenie dystrybucyjne

Ważenie dystrybucyjne koryguje pieniężną wartość kosztu lub korzyści w zależności od tego, kto je otrzymuje, zgodnie z zasadą, że dodatkowy funt jest wart więcej dla biednego gospodarstwa domowego niż dla bogatego. Green Book HM Treasury dostarcza jawnej metody stosowania tego ważenia, opartej na malejącej użyteczności krańcowej dochodu, tak aby oceny nie traktowały po cichu funta zyskanego przez najzamożniejszy decyl jako równego funtowi zyskanemu przez najuboższy.

## Dlaczego to ważne

Standardowa analiza kosztów i korzyści sumuje funty, nie pytając, czyje to funty, co domyślnie zakłada, że funt jest wart tyle samo dla wszystkich — założenie, o którym ekonomiści od dawna wiedzą, że jest fałszywe. Gospodarstwo domowe zarabiające 15 000 £ rocznie odczuwa zysk 1000 £ zupełnie inaczej niż gospodarstwo zarabiające 150 000 £ rocznie, ponieważ użyteczność krańcowa dochodu spada wraz ze wzrostem dochodu. Bez ważenia standardowa ocena systematycznie faworyzuje interwencje korzystne dla zamożniejszych, już lepiej sytuowanych grup, bo ich większa siła nabywcza zawyża pieniężną wycenę docierających do nich korzyści (modernizacja parku w pobliżu drogich domów „pokazuje” większą korzyść w wartości nieruchomości niż ta sama modernizacja w pobliżu tanich domów, wyłącznie dlatego, że ceny są wyższe, a nie dlatego, że zysk dobrobytu jest większy).

Uzupełniające wytyczne Green Book dotyczące analizy dystrybucyjnej, wzmocnione po przeglądzie Treasury z 2020 roku, który odpowiadał na krytykę, że metodologia oceny systematycznie faworyzowała Londyn i południowy wschód, określają formalne podejście do ważenia oparte na założonej elastyczności użyteczności krańcowej dochodu wynoszącej około 1,3 — co oznacza, że podwojenie dochodu z grubsza obniża (konkretnie do 2^-1,3 ≈ 0,41 razy) krańcową wartość dodatkowego funta. To nie jest korekta zaokrąglenia: jej zastosowanie może zmienić, który z dwóch konkurujących programów wykazuje wyższą bieżącą wartość netto, zwłaszcza przy porównywaniu interwencji skoncentrowanej w zaniedbanym obszarze z rozłożoną na ogólną populację.

## Matematyka

Waga dystrybucyjna Green Book dla funta korzyści trafiającego do gospodarstwa domowego o poziomie dochodu y, względem funta przy krajowym średnim poziomie dochodu ȳ:

```
Waga(y) = (ȳ / y)^e

gdzie:
  y  = dochód gospodarstwa domowego (lub dochód grupy, której to dotyczy)
  ȳ  = średni (referencyjny) dochód gospodarstwa domowego
  e  = elastyczność użyteczności krańcowej dochodu (Green Book: około 1,3)
```

Zastosowanie wag do korzyści netto:

```
Ważona korzyść = Σ [nieważona korzyść dla grupy i × Waga(y_i)]
```

Grupa zarabiająca połowę średniej krajowej (y = 0,5ȳ) otrzymuje wagę (1/0,5)^1,3 = 2^1,3 ≈ 2,46 — każdy funt korzyści dla tej grupy liczy się jako wart około 2,46 funta dla gospodarstwa o przeciętnym dochodzie.

## Przykład obliczeniowy

**Dwa konkurujące programy lokalne**, każdy z nieważoną korzyścią netto 2 miliony £ rocznie, konkurujące o ten sam regionalny fundusz rozwoju:

- *Program A*: program wsparcia biznesu w zamożnym mieście, średni dochód gospodarstwa domowego 45 000 £ (około 1,3× założonej średniej krajowej 35 000 £).
- *Program B*: program umiejętności w zaniedbanej dzielnicy, średni dochód gospodarstwa domowego 18 000 £ (około 0,51× średniej krajowej).

```
Waga(A) = (35 000 / 45 000)^1,3 = (0,778)^1,3 ≈ 0,72
Waga(B) = (35 000 / 18 000)^1,3 = (1,944)^1,3 ≈ 2,53

Ważona korzyść A = 2 000 000 £ × 0,72 = 1,44 miliona £
Ważona korzyść B = 2 000 000 £ × 2,53 = 5,06 miliona £
```

Bez ważenia oba programy remisują. Po zważeniu pod kątem wpływu dystrybucyjnego korzyść Programu B jest ponad trzykrotnie większa — wynik, który odwraca rekomendację finansowania i odzwierciedla jawny cel Green Book w wymaganiu, by pokazywać ważenie, a nie tylko nieważony wskaźnik korzyści do kosztów.

**Alokacja grantów charytatywnych**: fundator porównujący grant 500 000 £ docierający do 1000 gospodarstw o niskich dochodach (waga ≈ 2,0, wartość ważona odpowiadająca 1 milionowi £) z tymi samymi 500 000 £ docierającymi do 1000 gospodarstw o średnich dochodach (waga ≈ 1,0, wartość ważona odpowiadająca 500 000 £) powinien wprost pokazać argument dystrybucyjny w materiale dla zarządu, a nie zostawiać go do domyślenia się.

## Związek z inżynierią oprogramowania

Ważenie dystrybucyjne rzadko pojawia się wprost w metrykach dostarczania oprogramowania, ale powinno kształtować sposób, w jaki zespoły inżynierskie i danych projektują pomiar i targetowanie:

- Budując pulpit wpływu lub kalkulator świadczeń, pokazuj profil dochodowy lub ubóstwa osób, których to dotyczy, a nie tylko zbiorczą sumę korzyści — zbiorcze liczby bez rozbicia dystrybucyjnego ukrywają dokładnie odwrócenie pokazane powyżej.
- Powiąż logikę targetowania w projektowaniu usług z tymi samymi danymi o ubóstwie, których używa Green Book — zob. [Index of Multiple Deprivation](../indeks-wielokrotnej-deprywacji/) — aby zasięg usługi cyfrowej można było oceniać pod kątem równości, a nie tylko sprawności (sporne czwarte E w [wartości za pieniądze](../wartość-za-pieniądze/)).
- Gdy algorytm przydziela rzadki zasób (terminy wizyt, czas urzędników, dotację), nieważona funkcja celu „maksymalizuj całkowitą korzyść” z konstrukcji odtworzy to samo uprzedzenie, które ważenie Green Book ma korygować — zasygnalizuj to jawnie właścicielom polityki przed optymalizacją.

## Pułapki

- **Niespójne stosowanie wag dystrybucyjnych w portfelu.** Ważenie korzyści jednego programu, ale nie jego odniesienia, daje porównanie stronnicze, a nie sprawiedliwsze; Green Book wymaga jednolitego traktowania.
- **Używanie wartości nieruchomości lub rynkowych jako zastępnika dobrobytu bez korekty.** Ceny rynkowe same są zniekształcone przez istniejącą nierówność dochodów, którą ważenie dystrybucyjne ma korygować — użycie nieskorygowanych wartości rynkowych może podwójnie policzyć uprzedzenie.
- **Ignorowanie zróżnicowania wewnątrz grupy.** Ważenie według średniego dochodu obszaru (np. decylu Index of Multiple Deprivation) może zniekształcać obraz osób, które nie odpowiadają średniej swojego obszaru; używaj najdrobniejszych danych o dochodach, jakie są rozsądnie dostępne.
- **Traktowanie elastyczności 1,3 jako uniwersalnej stałej.** Sam Green Book zauważa, że jest to szacunek z wiarygodnym zakresem; testuj ważne decyzje na wrażliwość względem alternatywnych elastyczności, zamiast traktować 1,3 jako dokładną wartość.

## Źródła

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
