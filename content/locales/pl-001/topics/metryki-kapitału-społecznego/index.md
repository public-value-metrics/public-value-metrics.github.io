# Metryki kapitału społecznego

Metryki kapitału społecznego kwantyfikują sieci, zaufanie i uczestnictwo obywatelskie, które pozwalają społecznościom i instytucjom sprawnie funkcjonować — „tkankę łączną”, która nie ma pozycji w żadnym bilansie, ale widocznie zwija koszty i tarcie, gdy jest obecna, i widocznie je podnosi, gdy jej brakuje. Nowoczesne ujęcie pochodzi z „Bowling Alone” Roberta Putnama (2000), które odróżniło kapitał wiążący (więzi w obrębie podobnej grupy) od kapitału pomostowego (więzi między różnymi grupami); brytyjski Office for National Statistics zbudował od tego czasu stały zestaw wskaźników do śledzenia go w skali krajowej.

## Dlaczego to ważne

Centralne twierdzenie empiryczne Putnama — udokumentowane spadkiem członkostwa w amerykańskich stowarzyszeniach obywatelskich, frekwencji w kościele i uczestnictwa w związkach zawodowych pod koniec XX wieku — było takie, że kapitał społeczny przewiduje rezultaty, które konwencjonalna ekonomia z trudem wyjaśnia: niższą przestępczość, lepszy dobrostan dzieci, skuteczniejszą administrację lokalną, szybszą odbudowę gospodarczą po szokach. Kapitał wiążący (silne więzi w ciasnej grupie) jest dobry dla wzajemnego wsparcia, ale może skostnieć w zamknięcie; kapitał pomostowy (słabsze więzi między różnymi grupami) jest tym, co zwykle koreluje z dostępem do szans, przepływem informacji i zaufaniem instytucjonalnym. ONS potraktował to na tyle poważnie, by zbudować krajowe ramy wskaźników — jego seria „Social Capital in the UK” (<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>) śledzi cztery filary: relacje osobiste, wsparcie sieci społecznej, zaangażowanie obywatelskie oraz zaufanie i normy współpracy, każdy zbudowany z ugruntowanych pytań ankietowych (Community Life Survey, Understanding Society). Dla publicznych usług cyfrowych kapitał społeczny jest podwójnie istotny: jest zarówno rezultatem, który niektóre programy próbują budować (finansowanie odporności społeczności, recepty społeczne), jak i wejściem, które określa, jak dobrze usługa faktycznie zostanie przyjęta — usługa wprowadzona do społeczności o wysokim zaufaniu i dobrze powiązanej będzie rozchodzić się pocztą pantoflową w sposób, w jaki identyczna usługa w obszarze niskiego zaufania nie będzie.

## Matematyka

```
Czterofilarowe ramy ONS (wskaźniki, poglądowo):

Relacje osobiste:           % mających kogoś, na kim można polegać w kryzysie
Wsparcie sieci społecznej:  % mogących pożyczyć pieniądze od przyjaciół/rodziny w razie potrzeby
Zaangażowanie obywatelskie: % którzy w ostatnich 12 miesiącach byli wolontariuszami lub podjęli działanie obywatelskie
Zaufanie i normy współpracy: % zgadzających się, że „większości ludzi można ufać”

Żaden pojedynczy złożony wynik ONS nie jest publikowany — filary są raportowane
osobno, celowo, ponieważ agregowanie ich w jeden indeks ukryłoby, który
konkretny filar jest słaby.

Podział Putnama na wiążący/pomostowy (rama, a nie wzór):
  kapitał wiążący ≈ gęstość więzi w obrębie jednorodnej grupy
  kapitał pomostowy ≈ częstotliwość/siła więzi między odrębnymi grupami
```

## Przykład obliczeniowy

**Migawka kapitału społecznego okolicy**: sondaż w stylu Community Life Survey w lokalnym obszarze stwierdza, że 78% ma kogoś, na kim może polegać w kryzysie (relacje osobiste), 61% mogłoby pożyczyć pieniądze w razie potrzeby (wsparcie sieci), 24% było wolontariuszami w ostatnim roku (zaangażowanie obywatelskie), a 41% zgadza się, że „większości ludzi można ufać” (zaufanie i normy) — wobec średnich krajowych mniej więcej 85%, 70%, 30% i 45% odpowiednio (poglądowo, skalibruj względem aktualnego biuletynu ONS). Obszar wypada poniżej średniej w każdym filarze, ale najostrzej w zaufaniu (41% wobec 45% krajowych, luka 4 punktów) i zaangażowaniu obywatelskim (24% wobec 30%, luka 6 punktów) — wskazując zaangażowanie obywatelskie, a nie zaufanie, jako największy względny niedobór wart celowanej inwestycji (powiedzmy programu grantów dla społeczności), a nie ogólnej inicjatywy „buduj zaufanie”.

**Wiążący a pomostowy, projektowanie usług**: program pracy w ciasnej społeczności stwierdza, że skierowania krążą szybko w obrębie społeczności (wysoki kapitał wiążący: słowo rozchodzi się w ciągu dni), ale program z trudem dociera do mieszkańców poza tą siecią (niski kapitał pomostowy: wykorzystanie poza rdzeniową społecznością jest bliskie zeru po miesiącach). Implikowaną poprawką nie jest „więcej marketingu”, lecz celowe budowanie więzi pomostowych — partnerstwo z organizacjami, które znajdują się *poza* istniejącą siecią, ponieważ sam kapitał wiążący nie może rozwiązać problemu kapitału pomostowego.

## Związek z inżynierią oprogramowania

- Platformy cyfrowe kierujące wzajemną pomoc, wolontariat lub granty społeczności (na przykład usługa „lokalnego łącznika”) dosłownie budują infrastrukturę kapitału pomostowego; ich metryką sukcesu powinna być różnorodność sieciowa nawiązanych połączeń, a nie tylko liczba transakcji — zob. [rząd jako platforma](../rząd-jako-platforma/) dla szerszego wzorca infrastruktury, na której inni budują wartość.
- Tam, gdzie teoria zmiany programu wyraźnie targetuje kapitał społeczny jako rezultat (fundusz odporności społeczności, usługa recept społecznych), jego [teoria zmiany](../teoria-zmiany/) i [model logiczny](../model-logiczny/) powinny nazywać konkretny filar (zaufanie, zaangażowanie obywatelskie, wsparcie sieci), który oczekuje ruszyć, zamiast niezróżnicowanego rezultatu „buduj wspólnotę”, którego nie da się zmierzyć względem punktu odniesienia ONS.
- Wskaźniki kapitału społecznego są użyteczną soczewką równości obok [Indeksu Wielokrotnej Deprywacji](../indeks-wielokrotnej-deprywacji/): obszar może być deprywowany dochodowo, ale bogaty społecznie, lub odwrotnie, i oba wskazują na bardzo różne interwencje.

## Pułapki

- **Zwijanie czterech filarów ONS do jednego złożonego wyniku** — ONS celowo tego nie robi; pojedyncza liczba ukrywa, który konkretny filar napędza niski odczyt, a uśrednianie maskuje społeczność o wysokim zaufaniu, ale obywatelsko niezaangażowaną, wobec takiej, która jest odwrotna.
- **Zakładanie, że kapitał społeczny jest zawsze dobry** — gęsty kapitał wiążący w zamkniętej grupie może aktywnie opierać się zewnętrznym instytucjom (w tym usługom rządowym); własna analiza Putnama traktuje kapitał wiążący i pomostowy jako różne dobra o różnych, czasem sprzecznych, skutkach.
- **Używanie ankietowych miar kapitału społecznego jako operacyjnej metryki w czasie rzeczywistym** — leżące u podstaw ankiety (Community Life Survey, Understanding Society) są prowadzone co roku lub rzadziej; traktuj dane o kapitale społecznym jako wolno zmieniający się wskaźnik kontekstowy, a nie coś, co pulpit usługi może aktualizować co tydzień.

## Źródła

- Putnam RD. "Bowling Alone: The Collapse and Revival of American Community." Simon & Schuster,
  2000.
- ONS. "Social capital in the UK: bulletins."
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. "Community Life Survey" (annual).
