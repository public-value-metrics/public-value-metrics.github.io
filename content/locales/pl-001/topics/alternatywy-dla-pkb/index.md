# Alternatywy dla PKB

Alternatywy dla PKB to metryki zbudowane, by uchwycić to, co Produkt Krajowy Brutto strukturalnie ignoruje: niepłatną pracę opiekuńczą, wyczerpywanie środowiska, rozkład dochodów i to, czy wzrost faktycznie poprawia życie. Najbardziej znane są Genuine Progress Indicator (GPI) i Indeks Narodowego Szczęścia Brutto (GNH) Bhutanu; argumenty za ich poważnym traktowaniem najbardziej wpływowo przedstawiła w 2009 roku Komisja Stiglitza–Sena–Fitoussiego. Dla inżynierów budujących rządowe pulpity lub systemy KPI „która liczba liczy się jako postęp” jest decyzją projektową z realnymi konsekwencjami dla tego, co zostanie sfinansowane.

## Dlaczego to ważne

Simon Kuznets, który zbudował amerykańskie rachunki narodowe w latach 30., ostrzegł Kongres w 1934 roku, że „dobrobyt narodu może być z trudem wnioskowany z pomiaru dochodu narodowego” — zastrzeżenie, z którego liczba niemal natychmiast wyrosła. PKB liczy sprzątanie po wycieku ropy jako wzrost, a niepłatną opiekę rodzica nad dzieckiem jako nic; nie odróżnia wydatków budujących trwały dobrostan od wydatków jedynie równoważących szkodę już wyrządzoną. Komisja Stiglitza–Sena–Fitoussiego, zwołana przez francuskiego prezydenta Nicolasa Sarkozy’ego i kierowana przez Josepha Stiglitza, Amartyę Sena i Jean-Paula Fitoussiego, w 2009 roku zaraportowała, że systemy statystyczne powinny przesunąć akcent „z mierzenia produkcji gospodarczej na mierzenie dobrostanu ludzi” oraz że zrównoważony rozwój należy śledzić osobno od bieżącego dobrostanu, zamiast zwijać do jednej liczby. Alternatywy dla PKB operacjonalizują to zalecenie. GPI, opracowany przez think tank Redefining Progress w latach 90. i bazujący na Measure of Economic Welfare Williama Nordhausa i Jamesa Tobina z 1972 roku, zaczyna od konsumpcji osobistej (jak PKB), a następnie dodaje pozarynkowe korzyści, które PKB pomija (praca domowa, wolontariat), odejmując koszty obronne i wyczerpywania (przestępczość, zanieczyszczenie, dojazdy, uszczuplanie zasobów), które PKB błędnie liczy jako dodatnie. Indeks GNH Bhutanu, zarządzany przez GNH Centre Bhutan (<https://www.gnhcentre.bt/>), idzie jeszcze dalej, zastępując wzrost jako deklarowany cel konstytucyjny kraju: agreguje 33 wskaźniki w 9 dziedzinach — dobrostan psychologiczny, zdrowie, edukacja, wykorzystanie czasu, różnorodność kulturowa, zarządzanie, żywotność wspólnoty, różnorodność ekologiczna i standard życia — w jeden wynik oparty na wystarczalności, używany bezpośrednio do przesiewania propozycji polityk rządowych.

## Matematyka

```
GPI = wydatki na konsumpcję osobistą
      + korzyści pozarynkowe (praca domowa, wolontariat, szkolnictwo wyższe)
      − koszty obronne i społeczne (przestępczość, zanieczyszczenie, dojazdy, rozpad rodziny)
      − wyczerpywanie kapitału naturalnego i społecznego (uszczuplanie zasobów, utrata gruntów rolnych)

Wynik wystarczalności GNH, na dziedzinę:
  osoba jest „wystarczająca” w dziedzinie, gdy przekracza jej próg dla każdego wskaźnika
  Indeks szczęścia = (% populacji wystarczającej w ≥ 6 z 9 dziedzin)
                     + (ważony średni niedobór mniejszości „jeszcze nie szczęśliwych”)
```

## Przykład obliczeniowy

**Region, GPI**: konsumpcja osobista wynosi 50 mld $. Dodaj szacowaną wartość pracy domowej i wolontariackiej 12 mld $ (stawki płac kosztu zastąpienia — zob. [wartość czasu wolontariuszy](../wartość-czasu-wolontariuszy/)). Odejmij szacowane roczne koszty zatłoczenia dojazdów (3 mld $), przestępczości (4 mld $) i długoterminowego wyczerpywania zasobów (6 mld $):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 (mld $)
```

Jeśli PKB wzrósł z 50 mld $ do 55 mld $ w tym roku (+10%), ale koszty obronne i wyczerpywania rosły szybciej niż konsumpcja, GPI może spaść, podczas gdy PKB rośnie — „hipoteza progu”, którą badacze GPI przytaczają dla gospodarek o wysokich dochodach od mniej więcej lat 70., gdy wzrost wciąż się piął, a GPI osiągał plateau.

**Obywatel, GNH**: respondent przekracza próg wystarczalności w 7 z 9 dziedzin (zdrowie, edukacja, standard życia, żywotność wspólnoty, różnorodność kulturowa, różnorodność ekologiczna, wykorzystanie czasu), ale nie dociąga w dobrostanie psychologicznym i zarządzaniu. Ponieważ 7 ≥ 6, jest liczony jako „szczęśliwy” w liczbie osób; indeks osobno śledzi głębokość jego dwóch niedoborów, aby wąskie zaliczenie nie było nieodróżnialne od komfortowego.

## Związek z inżynierią oprogramowania

- Pulpit KPI modelowany wyłącznie na przepustowości lub wydatkach (wzorzec PKB) będzie systematycznie pomijał szkodę wyrządzoną przy generowaniu tej przepustowości — wolumen zgłoszeń wsparcia traktowany jako „zaangażowanie”, a nie „cierpienie użytkowników”, to wersja dostarczania oprogramowania liczenia wycieku ropy jako wzrostu.
- Rachunkowość w stylu GPI jest użytecznym wzorcem audytu dla każdego zestawu [KPI sektora publicznego](../kpi-sektora-publicznego/): dla każdej nagłówkowej metryki produktu zapytaj, jaki koszt obronny po cichu ponosi (przeróbki, reakcja na incydenty, wypalenie), i go odejmij, tak jak GPI odejmuje wydatki obronne od konsumpcji.
- Metoda wystarczalności dziedzin GNH — zaliczenie/niezaliczenie na wymiar, potem agregacja — jest strukturalnie tą samą techniką co [wielokryterialna analiza decyzyjna](../wielokryterialna-analiza-decyzyjna/) i warto ją ponownie wykorzystać wszędzie tam, gdzie pojedynczy wynik skalarny ukryłby krytycznie zawodzący wymiar.

## Pułapki

- **Traktowanie GPI jako dokładnego rachunku narodowego** — w przeciwieństwie do PKB, GPI nie ma jednej ustandaryzowanej metodologii; różne badania różnie ważą koszty dojazdów, czas wolontariuszy czy wyczerpywanie zasobów, więc porównania GPI między badaniami są znacznie mniej wiarygodne niż porównania PKB między krajami.
- **Importowanie GNH w całości do innej kultury politycznej** — jego wagi dziedzin i progi wystarczalności zostały ustalone w drodze bhutańskich konsultacji; kopiowanie liczby bez leżącego u jej podstaw procesu konsultacji daje pustą metrykę, której nikt nie ufa.
- **Zakładanie, że alternatywa dla PKB zastępuje ocenę kosztów i korzyści** — to diagnostyczne wskaźniki obejmujące całą gospodarkę, a nie narzędzia decyzyjne dla pojedynczego programu; do tego użyj zamiast tego [analizy kosztów i korzyści społecznych](../analiza-kosztów-i-korzyści-społecznych/).

## Źródła

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
