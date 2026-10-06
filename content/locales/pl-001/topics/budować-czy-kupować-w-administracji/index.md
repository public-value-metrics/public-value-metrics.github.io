# Budować czy kupować w administracji

Budować-czy-kupować to ustrukturyzowane, skorygowane o ryzyko porównanie rozwoju na zamówienie z komercyjnym lub towarowym nabyciem, porównywane według zdyskontowanego [całkowitego kosztu posiadania](../całkowity-koszt-posiadania-w-it-administracji/), czasu do wartości i ryzyka. Administracja jest strukturalnie sektorem kupującym — Technology Code of Practice ustanawia domniemanie na rzecz rozwiązań towarowych i chmurowych — a jednak zespoły inżynierskie wewnątrz resortów nadal domyślnie budują, z tych samych powodów co budowniczowie wszędzie.

## Dlaczego to ważne

Technology Code of Practice Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>) i towarzyszące wytyczne Service Manual dotyczące decyzji budować czy kupować popychają resorty do uzasadniania rozwoju na zamówienie względem domniemania, że zdolność towarową należy kupować, a nie budować, i że tylko naprawdę nowatorska zdolność odróżniająca misję uzasadnia kod na zamówienie. Uzupełniające wytyczne HM Treasury do Green Book o optymizmie (optimism bias), oparte na przeglądzie Mott MacDonald z 2002 roku dużych zamówień publicznych, dają projektom IT najszerszy zakres podwyżki ze wszystkich ocenianych kategorii — szacunki kosztów kapitałowych zaleca się podnieść o 10% na dolnym końcu i do 200% na górnym, zanim zostaną użyte w ocenie, co odzwierciedla, jak źle oprogramowanie było historycznie niedoszacowane w zamówieniach publicznych. Analiza budować-czy-kupować istnieje właśnie po to, by wymusić tę korektę ryzyka na stół przed zatwierdzeniem, zamiast pozwalać jej wypłynąć jako wniosek o przekroczenie w trakcie roku.

## Matematyka

```
Porównuj w tym samym 3–5-letnim horyzoncie, zdyskontowane społeczną stopą
dyskontową Green Book (zob. social-discount-rate.md):

NPV_opcja = PV(korzyści, przesunięte o czas do wartości) − PV(TCO)

Korekty ryzyka (wzorzec optimism bias Green Book):
  koszt budowy × 1,1–3,0         (zakres podwyżki projektów IT, Mott MacDonald)
  budowa: czas do wartości + 40–60% (wcześniejsze opóźnienie wdrożenia)
  kupno: zamiast tego dodaj sprawdzenie integracji z rzeczywistością i koszty wyjścia z umowy

Czynniki decyzyjne, w kolejności, w jakiej zwykle rozstrzygają:
  1. odróżnianie — czy ta zdolność jest misją, czy instalacją?
  2. czas do wartości × koszt opóźnienia (zob. cost-of-delay-in-public-programmes.md)
  3. skorygowany o ryzyko całkowity koszt posiadania
```

## Przykład obliczeniowy

Samorząd lokalny potrzebuje systemu obsługi spraw dla opieki społecznej dla dorosłych. Kupno: SaaS za 180 000 £/rok, na produkcji w 4 miesiące. Budowa: szacowane 900 000 £ plus 150 000 £/rok utrzymania, na produkcji w 14 miesięcy.

```
Skorygowany o ryzyko koszt budowy = 900 000 × 1,4 = 1 260 000 £
5-letni TCO:
  kupno  = 180 000 × 5 = 900 000 £
  budowa = 1 260 000 + 150 000 × 5 = 2 010 000 £

Człon opóźnienia: system unika 40 000 £/miesiąc zdublowanych ocen;
budowa przychodzi 10 miesięcy później niż kupno.
CoD = 10 × 40 000 = 400 000 £

Efektywne porównanie: 900 000 £ (kupno) wobec 2 010 000 £ + 400 000 £ = 2 410 000 £ (budowa)
```

Kupno wygrywa o mniej więcej 1,5 mln £ w ciągu pięciu lat, a największa pojedyncza pozycja po samym szacunku budowy to koszt opóźnienia, którego czyste porównanie wydatków kapitałowych nigdy by nie ujawniło.

## Związek z inżynierią oprogramowania

Dyscypliny przenoszące się wprost z tej analizy do praktyki dostarczania: **korekta ryzyka oparta na wcześniejszych danych** — podwyżka Mott MacDonald to programowy odpowiednik optimism bias Green Book zastosowanego mechanicznie, więc zespoły powinny argumentować za wyjątkami od niej, a nie zakładać, że ich szacunek jest wyjątkiem; **uczciwość punktu odniesienia** — alternatywą dla budowania jest najlepsza dostępna opcja kupna, a nie „nic”, co wiąże się bezpośrednio z [kosztem alternatywnym w wydatkach publicznych](../koszt-alternatywny-w-wydatkach-publicznych/); oraz **uczciwe porównanie TCO** — każda propozycja budowy powinna być porównana z pełnym [całkowitym kosztem posiadania](../całkowity-koszt-posiadania-w-it-administracji/) opcji kupna, a nie z jej ceną katalogową. Tam, gdzie budowa naprawdę wygrywa, [koszt opóźnienia](../koszt-opóźnienia-w-programach-publicznych/) dodatkowego czasu budowy powinien być jawnie wyceniony w uzasadnieniu biznesowym, a nie pozostawiony jako niewypowiedziane założenie, że czas nie ma znaczenia.

## Pułapki

- **Porównywanie ceny katalogowej dostawcy ze szacunkiem budowy niekorygowanym o ryzyko**: to podwójnie schlebia budowie, raz w koszcie i raz w harmonogramie.
- **Wyceniona na zero praca wewnętrzna**: czas inżynierów służby cywilnej jest traktowany jako „darmowy”, bo jest już w budżecie kadrowym resortu, co ukrywa jego prawdziwy koszt alternatywny względem innej pracy, jaką ten zespół mógłby wykonywać.
- **Niewycenione uwiązanie w obu kierunkach**: koszty wyjścia od dostawcy i przenośności danych są realne, ale tak samo jest ze ryzykiem „współczynnika autobusu” w budowie na zamówienie i jej zależnością od utrzymania małego, trudnego do zastąpienia zespołu wewnętrznego przez cały jej okres życia.
- **Odróżnianie misji deklarowane dla instalacji**: „to jest dla nas rdzeniem” twierdzone o oprogramowaniu pośredniczącym integracji lub magazynie dokumentów — przetestuj to względem tego, czy obywatel lub pracownik kiedykolwiek zauważyłby, który działa pod spodem.

## Źródła

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
