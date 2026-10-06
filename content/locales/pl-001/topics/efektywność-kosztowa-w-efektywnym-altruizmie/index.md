# Efektywność kosztowa w efektywnym altruizmie

Rozumowanie o efektywności kosztowej w efektywnym altruizmie (effective altruism, EA) szereguje interwencje charytatywne według ilości dobra — najczęściej wyrażonego jako uratowane życia lub zyskane zdrowie na wydany dolar — i kieruje pieniądze ku interwencji, która kupuje najwięcej dobra na marginesie. GiveWell to najbardziej wpływowy praktyk w tej dziedzinie: publikuje jawne, aktualizowane szacunki kosztu na uratowane życie i kosztu na rezultat dla niewielkiej listy „najlepszych organizacji charytatywnych” i zaleca darczyńcom, by wspierali tę, która aktualnie ma miejsce na więcej finansowania w najlepszej proporcji.

## Dlaczego to ważne

GiveWell określa efektywność kosztową jako wiodące kryterium w swojej opublikowanej metodologii: szuka interwencji popartych dowodami, szacuje ich efektywność kosztową we wspólnej jednostce i szereguje przez zupełnie niepowiązane przyczyny — moskitiery przeciw malarii, suplementacja witaminą A, transfery gotówkowe, płatności motywacyjne za szczepienia — na tej jednej osi. To bezpośredni import rozumowania w stylu QALY/DALY z ekonomii zdrowia do filantropii: tak jak system zdrowia pyta „ile QALY na funta na marginesie”, GiveWell pyta „ile żyć lub lat życia na dolara na marginesie” i traktuje przyczyny jako wymienne po przeliczeniu na tę wspólną jednostkę. Zob. [analiza efektywności kosztowej w administracji](../analiza-efektywności-kosztowej-w-administracji/) dla kuzyna sektora publicznego tej ramy rozumowania.

Najczęściej cytowana liczba GiveWell dotyczy Against Malaria Foundation (AMF), która dystrybuuje moskitiery nasączone środkiem owadobójczym. W opublikowanym przez GiveWell przykładzie obliczeniowym (z danych o finansowaniu z 2020 roku) około 4500 $ sfinansowało wystarczająco dużo moskitier, by zapobiec jednemu zgonowi, po uwzględnieniu niedoskonałego użycia moskitier, bazowej śmiertelności bez moskitier i korekty o funging — możliwość, że AMF i tak otrzymałaby część tego finansowania od innych darczyńców. GiveWell wyraźnie podkreśla, że ta liczba zmienia się w czasie i między geografiami w miarę zmian w rozpowszechnieniu malarii, kosztach moskitier i lukach finansowych, oraz że koszt uratowania życia zwykle ma rosnąć w czasie, gdy najtańsze możliwości zostaną wykorzystane jako pierwsze; to ilustracja metody, a nie stała cena.

## Matematyka

```
Efektywność kosztowa = Koszt interwencji / Jednostki wytworzonego dobra
                      (np. $ na uratowane życie, $ na uniknięty DALY, $ na QALY)

Łańcuch GiveWell dla programu moskitier, poglądowo:
  $ na zakupioną i dostarczoną moskitierę
    ÷ udział moskitier faktycznie używanych
    ÷ osoby chronione na moskitierę
    × bazowa roczna śmiertelność bez moskitier
    × redukcja śmiertelności przypisywalna użyciu moskitier (z dowodów RCT)
    × lata ochrony na moskitierę
    ÷ korekta o funging (pieniądze wypierające finansowanie innych darczyńców)
  = $ na uratowane życie (po uwzględnieniu kontrfaktycznych efektów finansowania)
```

Ten łańcuch ma znaczenie, ponieważ każdy krok jest miejscem, gdzie szacunki efektywności kosztowej często zawodzą — zob. pułapki poniżej — i ponieważ jasno pokazuje, że „koszt na uratowane życie” nigdy nie jest surową zaobserwowaną ceną; to modelowane oszacowanie zbudowane z kilku osobno niepewnych wejść.

## Przykład obliczeniowy

Dwie hipotetyczne interwencje, obie poparte dowodami, konkurujące o te same marginalne 100 000 £:

- **Moskitiery (w stylu AMF)**: około 4500 $ na uratowane życie według opublikowanego przykładu obliczeniowego GiveWell z danych z 2020 roku, tzn. bardzo z grubsza 20 uratowanych żyć na 100 000 £ w zależności od używanego kursu walutowego i roku.
- **Program odrobaczania**: żadnej wiarygodnej korzyści w śmiertelności, ale silne dowody długoterminowych zysków dochodowych z odrobaczania w dzieciństwie; GiveWell wycenia go w kategoriach zysku dochodowego, a nie uratowanych żyć, co utrudnia bezpośrednie porównanie z moskitierami bez wspólnej jednostki. GiveWell używa jawnej ramy „wag moralnych”, by przeliczyć oba na jedną wewnętrzną jednostkę do szeregowania.

Dyscypliną metody EA jest wymuszenie, by to porównanie wyszło na jaw, zamiast finansowania obu, bo oba „brzmią dobrze”. Zob. [społeczny zwrot z inwestycji](../społeczny-zwrot-z-inwestycji/) dla równoważnej funkcji wymuszającej używanej przez brytyjskie przedsiębiorstwa społeczne i lokalnych zamawiających, która zadaje to samo pytanie — jaki jest najlepszy zwrot na funta — w idiomie wartości pieniężnej, a nie w idiomie żyć/DALY.

## Związek z inżynierią oprogramowania

Inżynierowie budujący platformy dla darczyńców, narzędzia dopasowywania grantów lub pulpity wpływu dla fundatorów zgodnych z EA (Open Philanthropy, sam GiveWell, platformy efektywnego dawania takie jak Giving What We Can) muszą przedstawiać szacunki efektywności kosztowej jako zakresy z podanymi założeniami, a nie pojedyncze liczby — leżący u podstaw model ma kilka mnożnikowych niepewnych wejść, a zwinięcie tego do jednej liczby na pulpicie przekłamuje pewność, którą sam GiveWell deklaruje. Wersjonuj każdy szacunek według daty publikacji; GiveWell rewiduje swoje liczby, czasem istotnie, gdy pojawiają się nowe dowody z RCT lub dane o lukach finansowych, a platforma, która buforuje starą liczbę, po cichu staje się błędna.

## Pułapki

- **Traktowanie szacunku efektywności kosztowej jako stałej ceny.** To wynik modelu z kilkoma niepewnymi wejściami mnożnikowymi (wskaźniki użycia, bazowa śmiertelność, korekta funging); podaj datę i wersję.
- **Ignorowanie funging/wypierania.** Finansowanie organizacji, która i tak otrzymałaby pieniądze od innego darczyńcy, kupuje mniej kontrfaktycznego dobra, niż sugeruje nagłówek — zob. [dodatkowość i efekt jałowy](../dodatkowość-i-efekt-jałowy/) oraz [wypieranie i przypisanie](../wypieranie-i-przypisanie/).
- **Porównywanie między niezgodnymi jednostkami bez przeliczenia.** „Uratowane życia” i „zyskany dochód” nie są bezpośrednio porównywalne bez jawnej ramy wag moralnych; przedstawianie ich obok siebie tak, jakby były, to błąd kategorii.
- **Tunelowe widzenie obszaru przyczyny.** Szeregowanie tylko w obrębie obszaru przyczyny (np. tylko organizacji globalnego zdrowia) i nazywanie zwycięzcy „najbardziej efektywną kosztowo organizacją charytatywną” przecenia twierdzenie; ranking GiveWell między przyczynami jest celowo wąski (globalne zdrowie i dobrostan), a nie uniwersalny.

## Źródła

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
