# Raportowanie rezultatów grantów (IRIS+)

Raportowanie rezultatów grantów to praktyka, w której grantobiorcy raportują fundatorom ustandaryzowane, porównywalne metryki rezultatów — w przeciwieństwie do sytuacji, gdy każdy fundator wymyśla własny szablon raportowania. IRIS+, utrzymywany przez Global Impact Investing Network (GIIN), jest najszerzej przyjętym takim standardem: katalogiem wcześniej zdefiniowanych metryk wyników społecznych, środowiskowych i finansowych, których użycia przez grantobiorców wymagają lub zalecają inwestorzy wpływowi i, coraz częściej, fundacje grantodawcze.

## Dlaczego to ważne

Przed ustandaryzowanym raportowaniem każda fundacja prosiła grantobiorców o inny zestaw wskaźników w innym formacie, a średniej wielkości organizacja charytatywna z dziesięcioma fundatorami mogła prowadzić dziesięć równoległych procesów raportowania dla nakładającej się pracy — dobrze udokumentowany czynnik obciążenia raportowego, które standaryzacja rezultatów grantów ma zmniejszyć. IRIS+ rozwiązuje to, dając fundatorom i grantobiorcom wspólny słownik: Zestawy Metryk Podstawowych pogrupowane według tematu (np. dostępne mieszkalnictwo, dostęp do czystej energii, włączenie finansowe), każda metryka zdefiniowana na tyle precyzyjnie, że „utworzone miejsca pracy” czy „obsłużone gospodarstwa domowe” znaczy to samo bez względu na to, kto raportuje, i powiązana z Celami Zrównoważonego Rozwoju ONZ, tak aby fundator mógł zebrać dane na poziomie grantobiorców do portfelowej narracji SDG. GIIN podaje, że metryki IRIS są używane przez mniej więcej połowę inwestorów wpływowych i zdecydowaną większość zarządzających funduszami, banków i instytucji finansowania rozwoju aktywnych w tej dziedzinie.

Standaryzacja ma największe znaczenie tam, gdzie wchodzi w interakcję z [rezultatami a produktami](../rezultaty-a-produkty/): IRIS+ popycha raportowanie ku zdefiniowanym metrykom rezultatów i wpływu, a nie temu, co akurat loguje istniejący system obsługi spraw grantobiorcy, co jest dokładnie luką, którą opisują [koszt na rezultat](../koszt-na-rezultat/) kontra [koszt na beneficjenta](../koszt-na-beneficjenta/).

## Matematyka

Raportowanie rezultatów grantów to rama i proces, a nie wzór:

```
1. Fundator wybiera Zestaw Metryk Podstawowych istotny dla tematu grantu
   (np. IRIS+ „Włączenie finansowe” lub „Zrównoważone rolnictwo”)
2. Każda metryka ma stałą definicję, jednostkę i metodę obliczeń
   opublikowane przez GIIN — a nie wymyślane przez fundatora
3. Grantobiorca raportuje względem tych samych definicji metryk wobec wszystkich
   swoich fundatorów korzystających z tego standardu, ograniczając podwójny wysiłek raportowania
4. Fundator agreguje metryki na poziomie grantobiorców do raportowania na poziomie portfela,
   porównywalnego rok do roku i między grantobiorcami używającymi tej samej metryki
```

Zysk sprawności jest kombinatoryczny: ustandaryzowanie N fundatorów × M grantobiorców na jeden wspólny słownik zamienia N×M indywidualnych relacji raportowania w mniej więcej N+M odwzorowań względem jednego standardu.

## Przykład obliczeniowy

**Grantobiorca z trzema fundatorami, przed standaryzacją**: raportuje „obsłużone osoby” Fundatorowi 1 według definicji liczby osób, „beneficjenci, do których dotarto” Fundatorowi 2 według definicji gospodarstwa domowego, a „osoby, na które wpłynięto” Fundatorowi 3 według definicji epizodu usługi (więc jedna osoba odwiedzająca dwa razy liczy się dwa razy). Trzy raporty, trzy liczby, żadna nieporównywalna, i żadna nieporównywalna z liczbami innego grantobiorcy nawet w portfelu tego samego fundatora.

**Ten sam grantobiorca pod IRIS+**: raportuje względem zdefiniowanej metryki IRIS+ dotarcia do osób wraz ze zdefiniowaną metryką rezultatu z odpowiedniego Zestawu Metryk Podstawowych, używając opublikowanej metodologii obliczeń GIIN dla obu. Wszyscy trzej fundatorzy otrzymują teraz tę samą liczbę, obliczoną tak samo, i mogą porównać koszt na jednostkę zdefiniowaną przez IRIS+ tego grantobiorcy z innymi grantobiorcami w swoim portfelu, używając identycznej metryki — odpowiednik, w skali infrastruktury raportowania, posiadania współdzielonej [bazy kosztów jednostkowych](../bazy-kosztów-jednostkowych/).

## Związek z inżynierią oprogramowania

Platformy zarządzania grantami powinny traktować identyfikatory metryk IRIS+ jako klucz obcy, a nie wolny tekst: przechowywanie opublikowanego kodu metryki obok raportowanej wartości grantobiorcy (zamiast lokalnie wymyślonego pola o nazwie „beneficjenci”) pozwala później na agregację między fundatorami i portfelami bez projektu czyszczenia danych. Tam, gdzie platforma musi wspierać fundatorów, którzy nie przyjęli IRIS+, pragmatycznym projektem jest pozwolenie, by lokalna metryka została odwzorowana na najbliższą definicję IRIS+, zamiast zmuszania każdego fundatora do standardu od razu — porównywalność poprawia się stopniowo w miarę jak więcej grafu odwzorowuje się na współdzielone identyfikatory. Zob. temat siostrzany [koszt na rezultat](../koszt-na-rezultat/), do czego raportowane liczby powinny być używane po zebraniu.

## Pułapki

- **Traktowanie przyjęcia IRIS+ jako automatycznej porównywalności.** Dwóch grantobiorców może raportować względem tej samej metryki IRIS+ i nadal nie być porównywalnych, jeśli różnią się jakość danych lub założenia kontrfaktyczne; standard ustala definicje, a nie rygorystyczność pomiaru.
- **Metryki „zgodne z IRIS” wymyślone przez fundatora.** Metryka jedynie zainspirowana językiem IRIS+, ale nie faktyczną opublikowaną definicją, przywraca fragmentację, którą standard ma rozwiązać.
- **Zmęczenie raportowaniem z nadmiernego wyboru.** Wymaganie od grantobiorcy raportowania względem całego Zestawu Metryk Podstawowych, gdy tylko dwie lub trzy metryki mają znaczenie decyzyjne, odtwarza problem obciążenia w ustandaryzowanym opakowaniu.
- **Brak jakiejkolwiek metryki rezultatu.** IRIS+ zawiera wiele czystych metryk produktów (np. liczby obsłużonych osób); wybranie tylko ich i żadnej z metryk poziomu rezultatu daje raportowanie w kształcie [kosztu na beneficjenta](../koszt-na-beneficjenta/) pod etykietą raportowania rezultatów.

## Źródła

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
