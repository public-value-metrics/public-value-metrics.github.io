# Analiza kosztów i korzyści społecznych (SCBA)

Analiza kosztów i korzyści społecznych przelicza każdy koszt i każdą korzyść polityki lub programu — rynkowe i pozarynkowe — na wspólną jednostkę pieniężną, dyskontuje przyszłe przepływy do wartości bieżącej i saldują je, aby uzyskać jedną liczbę: czy ta propozycja poprawia sytuację społeczeństwa i o ile?

## Dlaczego to ważne

SCBA jest domyślną metodą ilościową w przypadku ekonomicznym [oceny według Green Book](../ocena-według-green-book/): wytyczne HM Treasury wymagają, by wnioski wykazywały dodatnią bieżącą wartość społeczną netto (NPSV) wszędzie tam, gdzie korzyści można wiarygodnie wycenić pieniężnie, przy użyciu gotowości do zapłaty jako podstawowej zasady wyceny dóbr pozarynkowych (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, rozdział 5). Dyscyplina, jaką narzuca, polega na tym, że „społeczna” analiza kosztów i korzyści to nie to samo ćwiczenie co ocena inwestycji w sektorze prywatnym: musi obejmować koszty i korzyści spadające na osoby trzecie, które nie są stroną transakcji (efekty zewnętrzne), musi używać [społecznej stopy dyskontowej](../społeczna-stopa-dyskontowa/) zamiast komercyjnego kosztu kapitału i powinna stosować [ważenie dystrybucyjne](../ważenie-dystrybucyjne/) tam, gdzie funt znaczy więcej dla biedniejszego gospodarstwa domowego niż bogatszego.

SCBA zawodzi dokładnie tam, gdzie spodziewają się tego jej krytycy: dobra bez rynkowego odpowiednika — czyste powietrze, spójność społeczna, wartość uratowanego życia — trzeba wyceniać metodami [preferencji deklarowanych](../wycena-metodą-preferencji-deklarowanych/) lub [ujawnionych](../wycena-metodą-preferencji-ujawnionych/) albo trzeba skonstruować [cenę cieniową](../ceny-cieniowe/). Gdy wycena pieniężna jest sporna, a nie tylko trudna, sam Green Book zaleca powrót do [analizy efektywności kosztowej](../analiza-efektywności-kosztowej-w-administracji/) lub [wielokryterialnej analizy decyzyjnej](../wielokryterialna-analiza-decyzyjna/), zamiast wymuszać liczbę, w którą nikt nie wierzy.

## Matematyka

```
NPSV = Σ [t=0 do T] (Korzyść_t − Koszt_t) / (1 + r)^t

gdzie:
  Korzyść_t = wszystkie wycenione pieniężnie korzyści w roku t, w tym dobra
              pozarynkowe wycenione przez preferencje deklarowane/ujawnione
              lub cenę cieniową
  Koszt_t   = wszystkie wycenione pieniężnie koszty w roku t, w tym koszt
              alternatywny zasobów (zob. ../opportunity-cost-in-public-spending/)
  r         = społeczna stopa dyskontowa (HM Treasury ustala 3,5% malejące do
              niższych stóp po roku 30, zgodnie z Załącznikiem A do Green Book)
  T         = okres oceny

Wskaźnik korzyści do kosztów (BCR) = Σ PV(Korzyści) / Σ PV(Kosztów)
```

BCR powyżej 1 (lub NPSV powyżej zera) wskazuje na netto wartość społeczną. Kategorie wartości za pieniądze Green Book (stosowane w ocenie transportu i infrastruktury) oznaczają zakresy BCR: poniżej 1,0 to słaba wartość za pieniądze, 1,0–1,5 niska, 1,5–2,0 średnia, 2,0–4,0 wysoka, a powyżej 4,0 bardzo wysoka. Analiza wrażliwości — ponowne obliczenie NPSV przy pesymistycznych i optymistycznych założeniach — jest obowiązkowa, a nie opcjonalna, ponieważ wycenione pieniężnie korzyści pozarynkowe niosą szerokie pasma niepewności.

## Przykład obliczeniowy

**Samorząd lokalny**: rada ocenia inwestycję 3 mln £ w nową sieć rowerową i pieszą w 20-letnim okresie oceny przy stopie dyskontowej 3,5%.

```
Koszty: 3 mln £ kapitału w roku 0, 50 000 £ rocznie utrzymania (lata 1–20)
PV(utrzymanie) ≈ 50 000 £ × 14,2 (20-letni współczynnik renty przy 3,5%) ≈ 710 000 £
Całkowite PV(koszty) ≈ 3,71 mln £

Korzyści (wszystkie wycenione opublikowanymi narzędziami wyceny DfT/WHO):
  Korzyść zdrowotna ze zwiększonej aktywności fizycznej: 180 000 £ rocznie
  Redukcja absencji: 40 000 £ rocznie
  Odkorkowanie (mniej przejazdów samochodem): 60 000 £ rocznie
  Całkowity strumień korzyści: 280 000 £ rocznie
PV(korzyści) ≈ 280 000 £ × 14,2 ≈ 3,98 mln £

NPSV = 3,98 mln £ − 3,71 mln £ = +0,27 mln £
BCR = 3,98 / 3,71 = 1,07 → „niska” wartość za pieniądze
```

Program ledwo przekracza poprzeczkę; przebieg wrażliwości przy szacunku korzyści zdrowotnych niższym o 20% (odzwierciedlającym realną niepewność wyceny aktywności fizycznej) obniża BCR poniżej 1,0, i właśnie dlatego Green Book wymaga publikowania tabeli wrażliwości obok nagłówkowej liczby, a nie tylko szacunku centralnego.

**Organizacja charytatywna**: program zapobiegania śmiertelności niemowląt kosztujący 500 000 £ rocznie jest oceniany przy użyciu wartości statystycznego życia (VSL) — ceny cieniowej, a nie zaobserwowanej ceny rynkowej — wynoszącej około 2,1 mln £ (zaktualizowana w 2023 roku liczba HM Treasury, sama wyprowadzona z badań preferencji deklarowanych). Zapobieżenie jednej śmierci niemowlęcia rocznie przy koszcie 500 000 £ daje BCR 4,2, z zapasem „bardzo wysoką” wartość za pieniądze — ale cały wynik opiera się na liczbie VSL, dlatego każda SCBA używająca VSL musi ujawnić ją jako założenie, a nie fakt.

## Związek z inżynierią oprogramowania

SCBA jest naturalną ramą dla decyzji inwestycyjnych w platformy i infrastrukturę w oprogramowaniu rządowym — porównanie współdzielonej platformy tożsamości z resortowymi rozwiązaniami punktowymi wymaga na przykład wyceny pieniężnej korzyści takich jak niższy koszt zdublowanego wdrażania, mniej nadużyć i szybszy czas do usługi, które same w sobie nie mają ceny rynkowej. Inżynierowie budujący leżącą u podstaw usługę powinni spodziewać się próśb kierowników programów o dane wejściowe do tej analizy: jednostkowe koszty transakcji (zob. [koszt na transakcję](../koszt-na-transakcję/)), oczekiwane wolumeny i koszty degradacji/przestojów. Dyscyplina, którą warto importować najbardziej: dyskontuj przyszłe korzyści, jawnie nazwij kontrfaktyczny punkt odniesienia (zob. [analiza kontrfaktyczna](../analiza-kontrfaktyczna/)) i nigdy nie przedstawiaj pojedynczej estymaty punktowej bez zakresu wrażliwości.

## Pułapki

- **Podwójne liczenie korzyści.** Liczenie zarówno „zaoszczędzonego czasu”, jak i „produktywności zyskanej z tego czasu” jako osobnych linii korzyści zawyża argument; korzyścią jest zaoszczędzony czas, jego dalsze wykorzystanie nie jest dodatkowe, o ile nie jest niezależnie udokumentowane.
- **Pomijanie wypartych kosztów.** Program, który przenosi korki z jednej drogi na inną lub nadużycia z jednego kanału na inny, nie stworzył korzyści netto sugerowanej przez nagłówkowe NPSV — zob. [wypieranie i przypisanie](../wypieranie-i-przypisanie/).
- **Używanie prywatnej stopy dyskontowej.** Zastosowanie komercyjnego kosztu kapitału (powiedzmy 8–10%) zamiast społecznej stopy dyskontowej systematycznie zaniża długoterminowe korzyści publiczne, takie jak zdrowotne i środowiskowe — zob. [społeczna stopa dyskontowa](../społeczna-stopa-dyskontowa/).
- **Wycenianie pieniężne tego, co bezsporne, i przemilczanie tego, co sporne.** Jeśli dwie trzecie korzyści wniosku to pewnie wyceniona oszczędność sprawności, a jedna trzecia to chwiejnie wyceniony zysk dobrostanu, nagłówkowe NPSV po cichu miesza twardą liczbę z miękką; raportuj je osobno.

## Źródła

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
