# Metody ewaluacji wpływu

Metody ewaluacji wpływu to projekty statystyczne i eksperymentalne używane do szacowania, co polityka lub program faktycznie spowodował, w odróżnieniu od tego, co zaszłoby i tak — randomizowane badania kontrolowane (RCT), różnica różnic, dopasowanie wyniku skłonności i projekt nieciągłości regresji to cztery najczęściej stosowane w brytyjskiej polityce publicznej. Istnieją, ponieważ większości interwencji rządowych nie da się przetestować w laboratorium: nie można losowo wybrać, które miasto dostanie nową linię autobusową, tak jak można losowo wybrać, który pacjent dostanie lek, więc te metody pożyczają tę samą logikę przyczynową, nie zawsze wymagając losowego przydziału.

## Dlaczego to ważne

Magenta Book HM Treasury, Załącznik A o metodach quasi-eksperymentalnych, to kanoniczne wytyczne rządu brytyjskiego dotyczące wyboru między tymi projektami, a instytucje takie jak Education Endowment Foundation i What Works Centre for Local Economic Growth instytucjonalizują hierarchię dowodów zbudowaną wokół nich — RCT tam, gdzie randomizacja jest wykonalna i etyczna, projekty quasi-eksperymentalne tam, gdzie nie jest. Wybór metody nie jest technicznym dopowiedzeniem: determinuje, czy ewaluacja może odpowiedzieć na „czy program to spowodował?”, czy tylko na „czy to zaszło po rozpoczęciu programu?”, czyli to samo pytanie, które [analiza kontrfaktyczna](../analiza-kontrfaktyczna/) ma zmusić praktyków do zadania przed zleceniem jakiejkolwiek ewaluacji.

## Matematyka

```
RCT:
  Wpływ = średnia(rezultat | grupa leczona) − średnia(rezultat | grupa kontrolna)
  (ważne, ponieważ przydział do leczenia jest losowy)

Różnica różnic (DiD):
  Wpływ = [rezultat_po(leczeni) − rezultat_przed(leczeni)]
        − [rezultat_po(kontrola) − rezultat_przed(kontrola)]
  (wymaga założenia „równoległych trendów”: leczeni i kontrola poruszaliby się razem
   przy braku interwencji)

Dopasowanie wyniku skłonności (PSM):
  1. Oszacuj P(leczenie = 1 | zmienne towarzyszące X) dla każdej jednostki → wynik skłonności
  2. Dopasuj jednostki leczone do nieleczonych o podobnych wynikach skłonności
  3. Wpływ = średnia(rezultat | leczeni) − średnia(rezultat | dopasowana kontrola)

Projekt nieciągłości regresji (RDD):
  Wpływ = skok rezultatu zaobserwowany na progu uprawnień,
          porównując jednostki tuż powyżej i tuż poniżej punktu odcięcia
```

## Przykład obliczeniowy

**Samorząd lokalny (różnica różnic dla programu rodzin w trudnej sytuacji)**: rezultatem jest frekwencja szkolna. Obszar leczony przechodzi od 84% do 89% frekwencji (+5 punktów procentowych) w okresie programu; porównywalny, ale nieleczony obszar przechodzi od 85% do 87% (+2 punkty procentowe) w tym samym okresie. Oszacowanie wpływu DiD: 5 − 2 = +3 punkty procentowe przypisywalne programowi. Zastosowane do kohorty 2000 uczniów w obszarze leczonym, jest zgodne z około 60 dodatkowymi uczniami (3% × 2000) osiągającymi wyższą kategorię frekwencji, ekstrapolacja, którą należy raportować z zastrzeżeniem równoległych trendów, a nie jako dokładną liczbę osób.

**Organizacja charytatywna (dopasowanie wyniku skłonności dla organizacji wspierającej zatrudnialność)**: 300 uczestników programu jest dopasowanych do 300 osób z większego zbioru danych administracyjnych za pomocą wyników skłonności zbudowanych z wieku, wcześniejszej historii zatrudnienia i poziomu kwalifikacji. Dwunastomiesięczny wskaźnik zatrudnienia: dopasowana grupa leczona 46%, dopasowana grupa porównawcza 33%. Oszacowanie wpływu PSM: 46% − 33% = +13 punktów procentowych przypisywalnych programowi, pod warunkiem braku nieobserwowanego czynnika zakłócającego (jak motywacja) napędzającego zarówno udział, jak i rezultat.

## Związek z inżynierią oprogramowania

To, czy którykolwiek z tych projektów będzie później wykonalny, zależy w dużej mierze od decyzji inżynierii danych podjętych wcześnie. RDD potrzebuje dokładnie zarejestrowanej zmiennej biegnącej i naprawdę czystego progu uprawnień; DiD potrzebuje porównywalnych danych panelowych w czasie zarówno dla obszarów leczonych, jak i porównawczych, co oznacza spójne złączenia między systemami i latami; PSM potrzebuje bogatych bazowych danych o zmiennych towarzyszących zebranych przed leczeniem, a nie rekonstruowanych potem. Model danych zaprojektowany razem z [teorią zmiany](../teoria-zmiany/) i [modelem logicznym](../model-logiczny/) od początku — rejestrujący bazowe zmienne towarzyszące, daty i rekordy kwalifikujące się do grupy porównawczej — to właśnie to, co umożliwia później rygorystyczną ewaluację wpływu, zamiast kosztownej gorączkowej akcji post hoc. Zob. [ewaluacja wpływu a ewaluacja procesu](../ewaluacja-wpływu-a-ewaluacja-procesu/) dla komplementarnego pytania, na które te metody same nie odpowiadają.

## Pułapki

- **Wymuszanie RCT tam, gdzie niewykonalne lub nieetyczne**, lub odwrotnie, nigdy nieuwzględnianie projektu quasi-eksperymentalnego, gdy prawdziwa okazja do niego — próg polityki, wdrożenie etapowe — była dostępna i niewykorzystana.
- **Ignorowanie założenia równoległych trendów w DiD.** Jeśli obszar porównawczy już przed interwencją rozchodził się z obszarem leczonym, porównanie dwupunktowe jest skażone; sprawdź wstępne trendy, nie tylko przed/po.
- **Dopasowywanie tylko po obserwowanych zmiennych towarzyszących w PSM.** Nieobserwowana selekcja, taka jak motywacja uczestników, może zniekształcić oszacowanie nawet przy dobrze zrównoważonych obserwowanych zmiennych.
- **Manipulacja zmienną biegnącą w RDD.** Jeśli ludzie mogą wpływać na swój wynik tak, by wpaść tuż w obręb progu uprawnień, nieciągłość nie izoluje już efektu przyczynowego.

## Źródła

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
