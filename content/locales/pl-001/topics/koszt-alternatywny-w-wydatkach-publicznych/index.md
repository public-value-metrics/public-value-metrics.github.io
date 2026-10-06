# Koszt alternatywny w wydatkach publicznych

Koszt alternatywny to wartość najlepszej odrzuconej alternatywy, gdy podmiot publiczny angażuje pieniądze, czas pracowników lub kapitał polityczny w jedną opcję zamiast innej. W resorcie o stałym budżecie każdy funt wydany na jeden program to funt, którego nie można wydać na kolejny najlepszy program — prawdziwy koszt decyzji to nie to, co wydaje, lecz to, co wypiera.

## Dlaczego to ważne

Budżety publiczne są ograniczone gotówkowo w okresie przeglądu wydatków, więc — inaczej niż rosnąca firma prywatna — resort rządowy nie może po prostu „znaleźć więcej pieniędzy” na dobry pomysł; sfinansowanie go oznacza zdjęcie finansowania z czegoś innego. Green Book HM Treasury traktuje to jako fundament: każda ocena musi porównywać interwencję z bazowym scenariuszem „zrób minimum” *oraz* z realistycznymi alternatywnymi zastosowaniami tych samych zasobów, właśnie dlatego, że rzeczywiste pytanie zespołu wydatków Treasury nigdy nie brzmi „czy to dobre?”, lecz „czy to lepsze od tego, co jeszcze mogłyby kupić te pieniądze?”. Podstawowa zasada oceny w Green Book — że zasoby publiczne powinny trafiać do interwencji o najwyższej netto wartości społecznej na funta — to koszt alternatywny wyrażony jako polityka.

Łatwo to powiedzieć, trudno zastosować, bo „kolejna najlepsza alternatywa” rzadko jest widoczna w pojedynczym uzasadnieniu biznesowym. Program grantowy na zatrudnienie młodzieży za 2 miliony £ jest w uzasadnieniu porównywany z niczym nierobieniem — ale uczciwym punktem odniesienia jest kolejna najlepsza interwencja na rzecz zatrudnienia młodzieży, a w istocie kolejne najlepsze użycie 2 milionów £ gdziekolwiek w portfelu, w tym na wydatki niezwiązane z zatrudnieniem. Magenta Book (HM Treasury, 2020) wyraźnie ostrzega, że ewaluacje porównujące „z interwencją” z „bez interwencji” zaniżają poprzeczkę, którą interwencja musi pokonać, ponieważ „bez tej interwencji” to nie to samo co „z niczym” — uwolnione pieniądze finansują coś innego.

## Matematyka

```
Koszt alternatywny wyboru A = wartość najlepszej odrzuconej alternatywy B

Netto wartość publiczna A = wartość(A) − wartość(B), a nie wartość(A) − 0
```

Nie ma uniwersalnego wzoru, bo odrzucona alternatywa zależy od kontekstu, ale dyscyplina się uogólnia: wskaż realistyczne kolejne najlepsze zastosowanie tej samej pozycji budżetowej (nie wyidealizowane „nic nie rób”), wyceń je na tej samej podstawie (w miarę możliwości sparametryzowane pieniężnie, zgodnie z [analizą kosztów i korzyści społecznych](../analiza-kosztów-i-korzyści-społecznych/)) i odejmij.

## Przykład obliczeniowy

**Pozycja budżetowa resortu**: fundusz transformacji cyfrowej o wartości 5 milionów £ może w tym roku finansowym sfinansować dokładnie jedną z dwóch propozycji.

- *Opcja A*: nowa platforma obsługi spraw, skwantyfikowana korzyść 7,2 miliona £ w ciągu 5 lat (oszczędności sprawności plus szybsze rozstrzyganie spraw).
- *Opcja B*: usługa weryfikacji tożsamości współdzielona przez trzy resorty, skwantyfikowana korzyść 6,4 miliona £ w ciągu 5 lat.

Naiwne uzasadnienie dla A porównuje 7,2 miliona £ korzyści z 5 milionami £ kosztów i podaje wskaźnik korzyści do kosztów 1,44:1 — pozornie mocny. Ale ponieważ A i B konkurują o te same 5 milionów £, koszt alternatywny wyboru A to odrzucona korzyść B wynosząca 6,4 miliona £. *Netto* argument za A wobec realistycznej alternatywy to tylko 7,2 mln £ − 6,4 mln £ = 0,8 miliona £, a nie cały nagłówkowy 7,2 miliona £. Gdyby trzecia opcja, C, oferowała 7,5 miliona £ korzyści za te same 5 milionów £, sfinansowanie A zamiast C zniszczyłoby 0,3 miliona £ wartości publicznej, mimo że uzasadnienie samego A wygląda w izolacji na w pełni uzasadnione.

**Czas pracowników samorządu lokalnego**: trzyosobowy zespół danych urzędu może zbudować albo pulpit listy oczekujących na mieszkania (szacunkowo oszczędza 400 godzin pracy urzędnika rocznie, wycenionych po 28 £/godz. = 11 200 £ rocznie), albo narzędzie do selekcji nadużyć w świadczeniach (szacunkowo zapobiega 85 000 £ błędnych wypłat rocznie). Zbudowanie pulpitu ma koszt alternatywny w postaci odrzuconych 85 000 £ rocznie, a nie tylko koszt wynagrodzeń zespołu danych — rzeczywisty koszt „darmowej” wewnętrznej budowy to znacznie większa korzyść, którą zespół mógłby wytworzyć gdzie indziej.

## Związek z inżynierią oprogramowania

Zdolności inżynierskie wewnątrz podmiotu publicznego same są ograniczonym budżetem — pojemnością sprintów, a nie funtami — i ta sama dyscyplina stosuje się wprost:

- Zawsze nazywaj punkt odniesienia: uzasadnienie biznesowe funkcji powinno określać, co jeszcze mogłyby dostarczyć te same tygodnie pracy zespołu, a nie tylko własny zwrot.
- Traktuj „mamy wolne moce inżynierskie” jako początek analizy kosztu alternatywnego, a nie jej koniec — wolne moce nadal mają najlepsze alternatywne zastosowanie, nawet jeśli jest nim spłata długu technicznego (zob. [dług techniczny jako erozja wartości publicznej](../dług-techniczny-jako-erozja-wartości-publicznej/)).
- Powiąż to bezpośrednio z [wartością za pieniądze](../wartość-za-pieniądze/): test „ekonomii” VFM jest bez znaczenia bez uczciwego punktu odniesienia kosztu alternatywnego, oraz z [kosztem opóźnienia w programach publicznych](../koszt-opóźnienia-w-programach-publicznych/), który wycenia wymiar czasowy tej samej logiki odrzuconej alternatywy.

## Pułapki

- **Porównywanie z „nicnierobieniem” zamiast z kolejną najlepszą alternatywą.** Green Book wymaga bazowego scenariusza „zrób minimum” właśnie dlatego, że prawdziwy koszt alternatywny rzadko jest zerowy; uzasadnienie biznesowe, które pokonuje tylko poprzeczkę „nic nie rób”, nie wykazało, że bije realistyczną alternatywę.
- **Ignorowanie międzyresortowej konkurencji o tę samą pulę.** Pozycje budżetowe, które wyglądają na zarezerwowane w jednej dyrekcji, często konkurują na wyższym poziomie (przegląd wydatków, program kapitałowy), gdzie realizuje się rzeczywisty koszt alternatywny.
- **Zakładanie, że uwolniony czas pracowników nie ma dalszej wartości.** „Zaoszczędzony” czas tworzy wartość tylko wtedy, gdy zostanie przesunięty do czegoś wartościowego; jeśli alternatywne zastosowanie nie istnieje, oszczędność jest umowna.

## Źródła

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — the canonical empirical demonstration of opportunity cost as
  a binding constraint in a fixed public budget. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
