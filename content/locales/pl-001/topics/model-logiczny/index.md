# Model logiczny

Model logiczny (logic model) to liniowy diagram łączący nakłady, działania, produkty, rezultaty i wpływ programu, czytany od lewej do prawej jako łańcuch rozliczalności: zasoby wchodzą, działania się odbywają, produkty są wytwarzane, rezultaty zmieniają się dla beneficjentów, a wpływ narasta w szerszej lub dłuższej skali czasu. To standardowa struktura, względem której fundatorzy i audytorzy oczekują, że program będzie raportowalny, oraz zorientowany w przód odpowiednik mapowanej wstecz [teorii zmiany](../teoria-zmiany/).

## Dlaczego to ważne

Magenta Book HM Treasury określa model logiczny jako wymagany element projektu ewaluacji programu, a fundatorzy tacy jak National Lottery Community Fund budują swoje szablony wniosków i raportowania wokół dokładnie tego pięciokolumnowego łańcucha. Jego wartość polega na tym, że zmusza program do określenia na jednym diagramie, ile wyda, co z tym zrobi, co wytworzy i — krytycznie — co powinno się zmienić w rezultacie, na poziomie szczegółowości, który akapit prozy zwykle zaciemnia. Model logiczny z wypełnionymi kolumnami nakładów i działań, ale pustą lub niejasną kolumną rezultatów, jest rozpoznawalny na pierwszy rzut oka, i właśnie dlatego fundatorzy o niego proszą.

## Matematyka

Model logiczny to łańcuch strukturalny, a nie wzór:

```
Nakłady         Działania         Produkty             Rezultaty             Wpływ
(zaangażowane   (co się z nimi    (bezpośrednie,       (zmiana dla           (długoterminowa
 zasoby)         robi)             policzalne wyniki)   beneficjentów)        zmiana na poziomie
                                                                              populacji lub
                                                                              systemowa)
```

Każda kolumna powinna być bardziej szczegółowa niż poprzednia: nakłady to to, co wydajesz, działania to to, co robisz, produkty to to, co zostaje dostarczone niezależnie od efektu, rezultaty to to, co zmienia się w skutek — rozróżnienie omówione w całości w [rezultatach a produktach](../rezultaty-a-produkty/) — a wpływ to trwała, często tylko częściowo przypisywalna, długoterminowa zmiana.

## Przykład obliczeniowy

**Samorząd lokalny (cyfrowa usługa doradztwa zadłużeniowego)**:

- Nakłady: roczny budżet 180 000 £, 4,0 etatów doradców, system obsługi spraw.
- Działania: sesje informacyjne, indywidualne wizyty doradztwa zadłużeniowego.
- Produkty: 900 przeprowadzonych wizyt; 750 wydanych planów zadłużeniowych i świadczeniowych.
- Rezultaty: spośród klientów docierających do 6-miesięcznej obserwacji, 60% (450 z 750) zgłasza zmniejszone zaległości, średnio zmniejszenie o 1200 £ na klienta — 540 000 £ łącznego zmniejszenia zaległości.
- Wpływ: mierzalny spadek wniosków o pomoc dla bezdomnych w bazie klientów usługi w ciągu dwóch lat, tylko częściowo przypisywalny tej usłudze obok innych interwencji (zob. [analiza kontrfaktyczna](../analiza-kontrfaktyczna/)).

**Organizacja charytatywna (partnerstwo skierowań do banku żywności)**:

- Nakłady: 45 000 £, 1,5 etatu koordynatora, umowy partnerskie z 12 instytucjami kierującymi.
- Działania: segregacja skierowań, pakowanie i dystrybucja paczek.
- Produkty: 5000 paczek żywnościowych rozdanych 1100 gospodarstwom.
- Rezultaty: 68% ankietowanych gospodarstw (748 z 1100) zgłasza poprawę bezpieczeństwa żywnościowego podczas rozmowy kontrolnej po 4 tygodniach.
- Wpływ: wkład w zmniejszenie lokalnego zapotrzebowania na usługi kryzysowe, udokumentowany tylko w zagregowanych statystykach obszaru, nieprzypisywalny samej tej organizacji.

## Związek z inżynierią oprogramowania

Model logiczny jest bliski dosłownemu modelowi danych dla systemu rezultatów: nakłady i działania to dane operacyjne, które już posiadasz (wydatki, personel, dzienniki sesji); produkty łatwo oprzyrządować, bo są liczone w punkcie dostarczenia; rezultaty wymagają celowo zaprojektowanego zbierania danych kontrolnych (ankiety, powiązanie danych administracyjnych), które nie będzie istnieć, dopóki ktoś go nie zbuduje; wpływ zwykle wymaga powiązanych, podłużnych lub populacyjnych danych poza systemami jakiegokolwiek pojedynczego programu. Inżynierowie budujący narzędzia raportowe powinni naciskać na zamawiających, by definiowali wskaźniki rezultatów i wpływu na etapie projektowania, zamiast domyślnie wybierać pulpit wyłącznie produktów, bo to wspierają już dane transakcyjne. Zob. [społeczny zwrot z inwestycji](../społeczny-zwrot-z-inwestycji/) dla metody, która wycenia konkretnie kolumny rezultatów i wpływu, oraz [realizację korzyści](../realizacja-korzyści/) dla śledzenia, czy kolumna wpływu została faktycznie dostarczona.

## Pułapki

- **Zatrzymywanie się na produktach.** Pulpit raportujący przeprowadzone wizyty lub rozdane paczki i sugerujący korzyść raportuje działalność, a nie wyniki — zob. [rezultaty a produkty](../rezultaty-a-produkty/).
- **Brak wyrażonego związku przyczynowego między kolumnami.** Model logiczny podaje łańcuch, ale nie dlaczego działania miałyby dawać produkty, które miałyby dawać rezultaty; to uzasadnienie należy do [teorii zmiany](../teoria-zmiany/), a model logiczny bez niej jest nieprzetestowany.
- **Traktowanie go jako jednorazowego dokumentu wniosku.** Modele logiczne stworzone wyłącznie dla spełnienia wniosku o finansowanie i nigdy nieaktualizowane przestają odzwierciedlać to, co program faktycznie robi.
- **Pełzanie przypisania w kolumnie wpływu.** Twierdzenie, że zmiana na poziomie populacji została spowodowana wyłącznie przez jeden program, bez kontrfaktu, przecenia to, co wspierają dowody.

## Źródła

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
