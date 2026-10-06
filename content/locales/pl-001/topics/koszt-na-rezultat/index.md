# Koszt na rezultat

Koszt na rezultat to całkowite wydatki programu podzielone przez liczbę osób, które osiągają zdefiniowaną, znaczącą zmianę w swojej sytuacji — a nie liczbę tych, którzy jedynie otrzymali usługę. To najostrzejsza metryka sprawności, jakiej może użyć fundator lub zespół realizujący, bo wymusza wcześniejsze pytanie, którego unika większość organizacji charytatywnych: co dokładnie liczy się jako sukces?

## Dlaczego to ważne

Bank żywności może z rachunków tego samego roku zaraportować dwie bardzo różne liczby. Koszt na rozdaną paczkę żywnościową może wynosić 15 £. Koszt na gospodarstwo domowe, które następnie osiąga bezpieczeństwo żywnościowe — już nie potrzebuje doraźnej pomocy żywnościowej, zweryfikowane w punkcie kontrolnym — może wynosić 340 £. Obie są prawdziwe. Tylko jedna mówi fundatorowi, czy pieniądze działają. Luka między nimi to luka między produktem a rezultatem: wręczona paczka to produkt; gospodarstwo już nie w kryzysie to rezultat. Zob. [rezultaty a produkty](../rezultaty-a-produkty/).

Brytyjski trzeci sektor spędził dwie dekady, budując infrastrukturę wymuszającą to rozróżnienie. „Podejście czterech filarów” New Philanthropy Capital do skuteczności organizacji charytatywnych wyraźnie prosi organizacje o wskazanie rezultatów przed produktami, a Inspiring Impact — wspierana przez fundatorów brytyjska współpraca w zakresie pomiaru wpływu — publikuje Macierz Rezultatów (Outcomes Matrix), którą wiele wniosków grantowych wymaga obecnie od organizacji charytatywnych wypełnić. Roczny program badań „State of Hunger” Trussell Trust, prowadzony z Heriot-Watt University, istnieje właśnie dlatego, że same liczby paczek nic nie mówią o tym, czy ludzie wychodzą z niepewności żywnościowej.

Koszt na rezultat ma znaczenie dopiero po ustaleniu kontrfaktu: rezultat osiągnięty „i tak” nie jest rezultatem, który program kupił. Zob. [analiza kontrfaktyczna](../analiza-kontrfaktyczna/) i [wypieranie i przypisanie](../wypieranie-i-przypisanie/).

## Matematyka

```
Koszt na rezultat = Całkowity koszt programu / Liczba beneficjentów osiągających zdefiniowany rezultat

gdzie:
  Całkowity koszt programu = bezpośredni koszt realizacji + sprawiedliwa część kosztów ogólnych
  Zdefiniowany rezultat    = wcześniej określona, mierzalna zmiana stanu
                             (np. „bezpieczeństwo żywnościowe w 6-miesięcznej obserwacji”,
                             a nie „otrzymał paczkę żywnościową”)
```

Porównaj z [bazami kosztów jednostkowych](../bazy-kosztów-jednostkowych/) (np. sektorowe wzorce kosztów jednostkowych), aby ocenić, czy dany koszt na rezultat jest dobry, przeciętny czy słaby w stosunku do porównywalnych interwencji.

## Przykład obliczeniowy

**Bank żywności, jeden rok**:

- Całkowity koszt programu: 450 000 £
- Rozdane paczki: 30 000
- Koszt na paczkę (metryka produktu): 450 000 £ / 30 000 = **15 £**

Organizacja przeprowadza też sześciomiesięczne badanie kontrolne na próbie gospodarstw, stwierdzając, że 35% gospodarstw, które otrzymały trzy lub więcej paczek, zgłasza, że nie potrzebuje już doraźnej pomocy żywnościowej i uzyskuje wynik powyżej progu bezpieczeństwa żywnościowego w standardowym module ankiety bezpieczeństwa żywnościowego. Z 1800 gospodarstw otrzymujących trzy lub więcej paczek w tym roku 630 osiąga ten rezultat.

```
Koszt na rezultat = 450 000 £ / 630 = 714 £ na gospodarstwo osiągające bezpieczeństwo żywnościowe
```

To liczba 714 £ jest tą, której powinien użyć fundator porównujący tę organizację z pilotażem transferów gotówkowych lub usługą doradztwa zadłużeniowego — nie 15 £. Jeśli porównywalny program transferów gotówkowych w tym samym regionie osiąga bezpieczeństwo żywnościowe za 500 £ na gospodarstwo, bank żywności nie jest oczywiście bardziej efektywną drogą do tego samego rezultatu, mimo że jego koszt na paczkę wygląda tanio.

## Związek z inżynierią oprogramowania

Większość systemów obsługi spraw jest budowana, by rejestrować produkty, ponieważ produkty to to, co dzieje się wewnątrz transakcji (paczka zostaje wręczona, formularz zostaje wysłany). Rezultaty zazwyczaj zachodzą później, często poza normalnym oknem rejestracji systemu, i wymagają świadomej decyzji projektowej: zbuduj mechanizm kontrolny (wyzwalacz ankiety, przepływ ponownego kontaktu, ćwiczenie powiązania danych) jako pierwszorzędną funkcję, a nie dodatek doklejony na potrzeby raportu rocznego. Inżynierowie budujący platformy zarządzania grantami lub obsługi spraw dla sektora powinni traktować „jakie jest zdarzenie rezultatu i jak je obserwujemy” jako pytanie o wymagania zadawane przed ustaleniem modelu danych — o wiele trudniej dołożyć pole rezultatu niż licznik produktów. Zob. [rezultaty a produkty](../rezultaty-a-produkty/) i [model logiczny](../model-logiczny/), jak ustrukturyzować tę rozmowę o wymaganiach, oraz [koszt na beneficjenta](../koszt-na-beneficjenta/) dla szybszej, bardziej zgrubnej metryki, po którą sięgają zespoły, gdy śledzenie rezultatów nie jest jeszcze zbudowane.

## Pułapki

- **Raportowanie produktów przebranych za rezultaty.** „Osoby, do których dotarto” to nie „osoby, którym pomożono”. Jeśli metrykę można wytworzyć z dziennika systemowego bez kontaktu kontrolnego, jest to niemal na pewno produkt.
- **Manipulacja mianownikiem.** Zawężenie populacji rezultatu do „tych, którzy ukończyli program” po cichu odrzuca osoby, które odpadły — często najtrudniejsze przypadki — i zawyża pozorny wskaźnik. Podaj mianownik jako wszystkich, którzy zaczęli, a nie wszystkich, którzy skończyli.
- **Brak kontrfaktu.** Liczenie każdego, kto osiągnął rezultat, w tym tych, którzy i tak by go osiągnęli, przecenia to, co program kupił. Zob. [analiza kontrfaktyczna](../analiza-kontrfaktyczna/).
- **Porównywanie między niezgodnymi definicjami rezultatu.** „Bezpieczeństwo żywnościowe” mierzone zwalidowanym modułem ankiety nie jest porównywalne z „bezpieczeństwem żywnościowym” zgłoszonym samodzielnie w formularzu satysfakcji; tabela rankingowa kosztu na rezultat jest uczciwa tylko wtedy, gdy definicje rezultatu się zgadzają.

## Źródła

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
