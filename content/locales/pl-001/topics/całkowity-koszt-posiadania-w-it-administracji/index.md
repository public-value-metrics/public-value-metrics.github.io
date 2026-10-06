# Całkowity koszt posiadania (TCO) w IT administracji

Całkowity koszt posiadania to pełny koszt cyklu życia systemu — nabycie plus każdy rok jego prowadzenia — zdyskontowany do wspólnej daty. W IT administracji najbardziej niezawodnym pojedynczym błędem prognozowania jest porównywanie dostawców lub opcji wyłącznie według ceny nabycia, podczas gdy działanie i utrzymanie zwykle stanowią gdzieś między połową a czterema piątymi rachunku za cały okres życia.

## Dlaczego to ważne

Green Book HM Treasury wymaga, by przypadek finansowy w każdym uzasadnieniu biznesowym według Modelu Pięciu Przypadków obejmował koszty całego cyklu życia, a nie tylko wydatki kapitałowe — jednak National Audit Office wielokrotnie stwierdzał, że resorty zatwierdzają inwestycje IT względem niepełnej lub optymistycznej prognozy kosztów bieżących, by dopiero po uruchomieniu systemu i zamknięciu kapitałowej pozycji budżetowej odkryć prawdziwy koszt operacyjny. Technology Code of Practice Government Digital Service i Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) popycha resorty ku chmurze i hostingowi towarowemu po części dlatego, że czyni bieżący koszt widocznym i porównywalnym, zamiast ukrytym w pojedynczej kapitałowej liczbie zamówienia, która wygląda kusząco nisko przy zatwierdzeniu, a po trzech latach okazuje się kosztownie błędna.

## Matematyka

```
TCO = Koszt nabycia + Σ(t=1..N) Roczny koszt operacyjny_t / (1+r)^t
      − wartość rezydualna (zdyskontowana)

r = standardowa społeczna stopa dyskontowa Green Book HM Treasury, 3,5%/rok
    (malejący harmonogram stóp dla horyzontów powyżej 30 lat)

Składniki kosztu operacyjnego: hosting/licencjonowanie, wsparcie i utrzymanie,
poprawki bezpieczeństwa i zgodność, czas personelu, planowane odświeżenie/migracja
```

Zob. [społeczna stopa dyskontowa](../społeczna-stopa-dyskontowa/), dlaczego czynnik dyskontowy ma znaczenie w typowym 5–10-letnim okresie życia systemu, oraz [budować czy kupować w administracji](../budować-czy-kupować-w-administracji/), jak TCO zasila decyzję budować/kupować.

## Przykład obliczeniowy

Resort porównuje dwa systemy obsługi spraw w 5-letnim horyzoncie przy stopie dyskontowej 3,5% z Green Book.

```
System A: wydatki kapitałowe 3 500 000 £, operacyjne 250 000 £/rok
System B: wydatki kapitałowe 1 800 000 £ (wygląda taniej), operacyjne 650 000 £/rok
          (cięższe wsparcie dostawcy i obciążenie integracją)

Naiwne porównanie samych wydatków kapitałowych: wygrywa B, 1,8 mln £ < 3,5 mln £.

Suma czynników dyskontowych, 5 lat przy 3,5%: 0,966+0,934+0,902+0,871+0,842 ≈ 4,515

TCO_A = 3 500 000 + 250 000 × 4,515 = 3 500 000 + 1 128 750 = 4 628 750 £
TCO_B = 1 800 000 + 650 000 × 4,515 = 1 800 000 + 2 934 750 = 4 734 750 £
```

TCO odwraca naiwną decyzję: System B jest marginalnie droższy w ciągu pięciu lat po zdyskontowaniu i zsumowaniu kosztu operacyjnego, ponieważ jego udział kosztów operacyjnych w koszcie całego życia wynosi 62% (2 934 750 / 4 734 750) wobec 24% Systemu A — konkretny przykład ustalenia „utrzymanie to większość rachunku”, całkowicie ukryty przy porównywaniu cen z etykiet.

## Związek z inżynierią oprogramowania

TCO to liczba, która powinna dyscyplinować każdą decyzję [budować czy kupować](../budować-czy-kupować-w-administracji/) i każdy argument za spłatą [długu technicznego](../dług-techniczny-jako-erozja-wartości-publicznej/), ponieważ odsetki od długu i odroczone utrzymanie są obie pozycjami kosztów operacyjnych, które należą do tej samej zdyskontowanej sumy, niezależnie od tego, czy ktoś je śledził. Inżynierowie proponujący wybór platformy lub dostawcy powinni przedstawić pełną tabelę TCO, a nie cenę zamówienia, ponieważ cena zamówienia jest dokładnie tą liczbą, na której samej opieranie się przypadek finansowy Green Book miał powstrzymać resorty. TCO jest też uczciwym mianownikiem dla ocen [wartości za pieniądze](../wartość-za-pieniądze/) — VFM porównuje korzyść z kosztem, a niedoszacowana pozycja kosztu zawyża każdy wskaźnik VFM w uzasadnieniu biznesowym.

## Pułapki

- **Porównanie samych wydatków kapitałowych**: najczęstszy pojedynczy błąd zamówień — porównywanie cen katalogowych dostawców bez dopasowanej prognozy kosztów operacyjnych dla każdej opcji.
- **Wykluczanie kosztów wyjścia i migracji**: wyciąganie danych po zakończeniu umowy, ponowne platformowanie i kary za uwiązanie do dostawcy to realne pozycje TCO, które rzadko pojawiają się w pierwotnym uzasadnieniu biznesowym.
- **Wykluczanie kosztu bezpieczeństwa i zgodności**: tempo poprawek, odnowienie akredytacji i koszt audytu rosną wraz z wiekiem i złożonością systemu — zob. [wartość cyberbezpieczeństwa sektora publicznego](../wartość-cyberbezpieczeństwa-sektora-publicznego/) — i rutynowo są pomijane w prognozie kosztów operacyjnych.
- **Niezdyskontowane porównanie opcji o różnych profilach kosztów**: porównywanie opcji ciężkiej kapitałowo z ciężką operacyjnie bez dyskontowania systematycznie faworyzuje tę, która akurat przesuwa więcej kosztów na późniejsze lata.

## Źródła

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
