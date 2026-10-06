# Koszt opóźnienia w programach publicznych (CoD)

Koszt opóźnienia (Cost of Delay) to wartość publiczna tracona na jednostkę czasu, w której program, usługa lub zmiana systemu *nie* została jeszcze dostarczona. To główna metryka pomostowa tego rozdziału: przekłada „uruchomienie przesunęło się o sześć miesięcy” na funty tygodniowo lub na WELLBY tygodniowo, tak aby o opóźnieniu można było spierać się w tej samej walucie co samo uzasadnienie biznesowe.

## Dlaczego to ważne

Reguła Reinertsena — „jeśli kwantyfikujesz tylko jedną rzecz, kwantyfikuj Koszt Opóźnienia” — przenosi się do administracji niemal bez zmian, ponieważ programy publiczne są na niego niezwykle narażone: uzasadnienia biznesowe są zatwierdzane względem prognozowanego strumienia korzyści, ale strumień zaczyna płynąć dopiero w momencie uruchomienia, a każdy tydzień poślizgu to tydzień utraconej wartości, której nikt nie wycenia w rejestrze ryzyka. Powtarzane kontrole przez National Audit Office wdrożenia Universal Credit (zob. jego raporty „Rolling Out Universal Credit”, <https://www.nao.org.uk/>) ilustrują wzorzec: poślizg harmonogramu był śledzony i raportowany, ale koszt w funtach tygodniowo *jeszcze niedostarczenia* zreformowanego systemu kolejnej transzy wnioskodawców rzadko był podawany jako liczba nagłówkowa, mimo że to liczba, która powinna była kierować priorytetyzacją i eskalacją. Bez liczby CoD opóźniony program wygląda na problem harmonogramu dla rady realizacji; z nią jest problemem erozji wartości dla urzędnika rozliczającego.

## Matematyka

```
CoD = korzyść na jednostkę czasu utracona, gdy niedostarczona   (£/tydzień lub WELLBY/tydzień)

Całkowita strata z opóźnienia = CoD × czas trwania opóźnienia

Strumienie korzyści do zsumowania dla programów publicznych:
  oszczędności uwalniające gotówkę   (redukcja nadużyć/błędów, uniknięte koszty tymczasowe)
+ uwolniona zdolność niegotówkowa    (godziny pracowników socjalnych/urzędników × pełny koszt)
+ korzyść dobrostanu                 (WELLBY × 13 000 £/WELLBY, uzupełniające wytyczne dobrostanu
                                      Green Book HMT, ceny z 2019 roku)
```

Dla usług skierowanych do obywateli wyrażaj w dobrostanie oraz w pieniądzach — zob. [lata życia skorygowane dobrostanem](../lata-życia-skorygowane-dobrostanem/) dla leżącej u podstaw jednostki oraz [koszt alternatywny w wydatkach publicznych](../koszt-alternatywny-w-wydatkach-publicznych/), co opóźniony funt mógłby w przeciwnym razie sfinansować.

## Przykład obliczeniowy

**Samorząd lokalny**: modernizacja systemu dodatków mieszkaniowych zmniejsza błąd nadpłaty o 150 £ na wniosek rocznie w 20 000 aktywnych wniosków.

```
Roczna korzyść = 150 × 20 000 = 3 000 000 £/rok
CoD = 3 000 000 / 52 ≈ 57 700 £/tydzień
12-miesięczne opóźnienie wdrożenia kosztuje 52 × 57 700 ≈ 3 000 000 £ unikniętego błędu.
```

**Agencja administracji centralnej**: usługa oceny świadczeń niepełnosprawności, dostarczona sześć miesięcy (26 tygodni) później niż planowano, oznacza, że 200 000 wnioskodawców rocznie czeka średnio trzy tygodnie dłużej na decyzję. Każdy dodatkowy tydzień niepewności finansowej jest modelowany jako efekt −0,0018 WELLBY (punkt satysfakcji z życia):

```
Strata WELLBY na wnioskodawcę = 3 × 0,0018 = 0,0054
Roczna strata WELLBY = 200 000 × 0,0054 = 1080 WELLBY/rok
CoD_dobrostan = 1080 / 52 ≈ 20,8 WELLBY/tydzień
CoD_pieniądze = 20,8 × 13 000 £ ≈ 270 000 £/tydzień wartości dobrostanu
```

26-tygodniowe opóźnienie „kosztuje” więc mniej więcej 540 WELLBY — warte około 7 milionów £ według wyceny dobrostanu Green Book — przeramowując przekroczoną datę uruchomienia jako zdarzenie dobrostanu obywateli, a nie przypis zarządzania projektem.

## Związek z inżynierią oprogramowania

CoD to to, co czyni [metryki DORA](../metryki-dora-dla-wartości-publicznej/) i [metryki przepływu](../metryki-przepływu-w-dostarczaniu-rządowym/) finansowo czytelnymi: czas realizacji w potoku × CoD to pieniądze (lub dobrostan) spalone w kolejkach, zanim kiedykolwiek dotrą do obywatela. Konkretnie:

- **Priorytetyzacja**: szereguj zaległości według CoD ÷ czas trwania, a nie według starszeństwa interesariusza — inżynierski odpowiednik wymogu Green Book, by oceniać opcje według wartości, a nie według tego, kto prosi.
- **Zamówienia**: 12–18-miesięczny cykl zamówienia w ramach umowy ramowej ma CoD; jego wycena zmienia argument pilności dla przyspieszonych ścieżek i zasila wprost decyzje [budować czy kupować](../budować-czy-kupować-w-administracji/), gdzie czas do wartości jest czynnikiem decyzyjnym.
- **Uzasadnienie korzyści**: każda liczba CoD cytowana przy zatwierdzeniu powinna pojawić się ponownie w [realizacji korzyści](../realizacja-korzyści/) — jeśli koszt opóźnienia był realny, przyspieszona korzyść powinna być mierzalna po uruchomieniu.

## Pułapki

- **Zakładanie liniowego CoD**: niektóre usługi publiczne mają wartość w kształcie terminu (ustawowa data zgodności — CoD skacze do poziomów ryzyka egzekucji po dacie, bliskich zeru przed nią), a nie gładką stawkę tygodniową. Sklasyfikuj profil pilności przed pomnożeniem.
- **CoD na produktach, których nikt nie potrzebuje**: opóźnienie ma koszt tylko wtedy, gdy niedostarczona rzecz ma wartość; system, z którego nikt nie skorzysta, ma zerowy CoD, bez względu na to, jak późno.
- **Podwójne liczenie opóźnienia i dyskontowania**: [społeczna stopa dyskontowa](../społeczna-stopa-dyskontowa/) już wycenia czas na wieloletnich horyzontach oceny; CoD to wersja operacyjna w obrębie horyzontu, dla tygodni i miesięcy. Używaj CoD dla poślizgu harmonogramu, przesunięcia NPV dla wieloletniego przeplanowania.

## Źródła

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
