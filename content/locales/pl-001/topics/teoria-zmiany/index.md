# Teoria zmiany

Teoria zmiany (theory of change) to jawna, mapowana wstecz ścieżka przyczynowa od długoterminowego celu do warunków wstępnych i działań, które muszą istnieć, by go osiągnąć, wraz z założeniami łączącymi każde ogniwo. Buduje się ją, zaczynając od pożądanego rezultatu i wielokrotnie pytając „co musi być prawdą bezpośrednio przed tym, aby to się stało?”, aż dojdzie się do działań, które naprawdę można dostarczyć — co jest przeciwnym kierunkiem niż w [modelu logicznym](../model-logiczny/) i dlatego oba są komplementarne, a nie zamienne.

## Dlaczego to ważne

Metodę mapowania wstecz sformalizowali Center for Theory of Change i ActKnowledge, opierając się na pracy ewaluatorki Carol Weiss nad uczynieniem założeń programu jawnymi, tak aby można je było testować zamiast przyjmować na wiarę. Brytyjska ewaluacja grantów wchłonęła to wprost: Magenta Book HM Treasury traktuje teorię zmiany jako punkt wyjścia każdego projektu ewaluacji, a fundatorzy tacy jak National Lottery Community Fund wymagają od wnioskodawców jej sformułowania, zanim sfinansują propozycję. Powód, dla którego ma to znaczenie dla inżyniera oprogramowania, jest taki, że teoria zmiany to dokument, który powinien określać, co twój system musi mierzyć — jeśli łańcuch przyczynowy mówi „korzystanie ze świadczeń zależy od tego, że wnioskodawcy otrzymują spersonalizowane obliczenie”, jest to testowalne twierdzenie, które produkt można oprzyrządować, by udokumentować lub obalić.

## Matematyka

Teoria zmiany jest strukturalna, a nie liczbowa. Każde ogniwo powinno nieść zarówno założenie, jak i wskaźnik, który mógłby pokazać, że założenie jest fałszywe:

```
Długoterminowy rezultat (cel)
  ↑ warunek wstępny + założenie + wskaźnik
Rezultat pośredni N
  ↑ warunek wstępny + założenie + wskaźnik
  ...
Rezultat pośredni 1
  ↑ warunek wstępny + założenie + wskaźnik
Działania / interwencje
  ↑ zaangażowane zasoby
Nakłady
```

Ta struktura zasila bezpośrednio [metody ewaluacji wpływu](../metody-ewaluacji-wpływu/), które istnieją po to, by testować, czy założenia w każdym ogniwie faktycznie się sprawdzają, oraz [analizę kontrfaktyczną](../analiza-kontrfaktyczna/), która testuje, czy długoterminowy rezultat zaszedłby i tak.

## Przykład obliczeniowy

**Samorząd lokalny (zapobieganie bezdomności)**: długoterminowy rezultat to utrzymane najmy po 12 miesiącach dla gospodarstw zagrożonych eksmisją.

- Warunek wstępny: gospodarstwa mają realistyczny, przystępny plan spłaty zaległości. Założenie: plany negocjowane przez pracowników socjalnych są trwalsze niż nakazane sądowo. Wskaźnik: % planów nadal aktywnych po 6 miesiącach.
- Warunek wstępny: gospodarstwa wnioskują o świadczenia, do których mają prawo. Założenie: cyfrowy kalkulator świadczeń zwiększa liczbę poprawnych wniosków w porównaniu z formularzami papierowymi. Wskaźnik: wskaźnik trafności wniosków, porównany przed/po wdrożeniu narzędzia.
- Działania: segregacja przez pracownika socjalnego, cyfrowy kalkulator świadczeń, negocjacje zaległości.

W pilotażowej kohorcie 120 gospodarstw założenie o kalkulatorze świadczeń sprawdziło się dla 102 gospodarstw (85%), które następnie poprawnie wnioskowały, co potwierdziła późniejsza ewaluacja procesu — dając zespołowi programu dowód dla tego konkretnego ogniwa, a nie pojedyncze twierdzenie end-to-end o zapobiegniętej bezdomności.

**Organizacja charytatywna (mentoring młodzieży)**: długoterminowy rezultat to mniejsza liczba wykluczeń ze szkoły. Mapowane wstecz warunki wstępne: lepsza regulacja emocji → zaufana relacja jeden na jeden z mentorem → stały cotygodniowy kontakt przez dwa semestry. Teoria jasno stwierdza, że brak warunku „stały cotygodniowy kontakt” (powiedzmy z powodu rotacji mentorów) przewiduje, że rezultat nie nastąpi, co jest testowalnym, obalalnym twierdzeniem, a nie nadzieją.

## Związek z inżynierią oprogramowania

Teoria zmiany powinna kształtować model danych produktu, zanim powstanie choćby jeden pulpit: zidentyfikuj, które ogniwa potrzebują wskaźnika, i oprzyrządowuj właśnie je, zamiast domyślnie rejestrować to, co najłatwiej. Dyscyplinuje też rozmowy o mapie drogowej — funkcja, która nie odpowiada żadnemu ogniwu łańcucha, nie jest oczywiście warta budowania. Zob. [model logiczny](../model-logiczny/) dla zorientowanego w przód łańcucha rozliczalności budowanego po uzgodnieniu teorii, [społeczny zwrot z inwestycji](../społeczny-zwrot-z-inwestycji/) dla metody, która zależy od teorii zmiany przy określaniu zakresu rezultatów do wyceny, oraz [rezultaty a produkty](../rezultaty-a-produkty/) dla rozróżnienia, od którego zależą ogniwa rezultatów pośrednich.

## Pułapki

- **Mylenie jej z modelem logicznym.** Teoria zmiany jest przyczynowa i wyjaśniająca (dlaczego wierzymy, że to działa); model logiczny jest sekwencyjny i opisowy (co dzieje się w jakiej kolejności). Wytworzenie tylko jednego zostawia brak albo „dlaczego”, albo śladu rozliczalności.
- **Pozostawianie założeń domyślnych.** Cała wartość mapowania wstecz polega na wydobyciu testowalnych założeń; teoria zmiany, która tylko wylicza pola i strzałki, nie nazywając, co mogłoby sprawić, że każde ogniwo jest fałszywe, jest dekoracją.
- **Zbudowanie jej raz i odłożenie na półkę.** Teoria zmiany napisana na potrzeby wniosku o finansowanie i nigdy nie rewidowana przestaje być użyteczna w chwili, gdy dowody zaczynają zaprzeczać ogniwu.
- **Pomijanie wkładu interesariuszy.** Teoria zmiany zbudowana w całości przez zamawiających, bez wkładu pracowników pierwszej linii czy beneficjentów, ma skłonność do kodowania założeń, w które nikt realizujący usługę naprawdę nie wierzy.

## Źródła

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
