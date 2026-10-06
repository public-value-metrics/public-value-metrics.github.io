# Społeczna stopa dyskontowa

Społeczna stopa dyskontowa przelicza przyszłe koszty i korzyści na wartości dzisiejsze, aby programy z korzyściami rozłożonymi na dziesięciolecia można było porównywać na wspólnej podstawie. Green Book HM Treasury nakazuje malejący harmonogram zakotwiczony na poziomie 3,5% dla pierwszych 30 lat, oparty na wzorze Ramseya — konkretna, cytowalna liczba, która stała się żywym sporem politycznym i etycznym, ilekroć stosuje się ją do długoterminowych zobowiązań, takich jak polityka klimatyczna czy infrastruktura.

## Dlaczego to ważne

Funt korzyści uzyskany za 30 lat nie jest wart tyle co funt korzyści uzyskany dziś, z powodów częściowo związanych z czystą preferencją czasową (ludzie i społeczeństwa wolą dobre rzeczy wcześniej), a częściowo ze wzrostem (przyszłe społeczeństwo ma być bogatsze, więc funt ma dla niego na marginesie mniejsze znaczenie). Załącznik 6 do Green Book wyprowadza standardową brytyjską stopę dyskontową ze wzoru Ramseya, łącząc stopę czystej preferencji czasowej z oczekiwaną stopą wzrostu konsumpcji i elastycznością użyteczności krańcowej konsumpcji, co daje opublikowaną stopę 3,5% rocznie dla lat 0–30, malejącą według opublikowanego harmonogramu dla lat 31 i dalszych (do 1% dla lat 301+). Harmonogram ten istnieje właśnie dlatego, że stałe 3,5% składane przez wiek sprawiłoby, że praktycznie każda długoterminowa korzyść — ochrona przeciwpowodziowa ratująca życie za 80 lat, redukcja emisji węgla zapobiegająca szkodom za 100 lat — wydawałaby się w wartości bieżącej znikoma, co Treasury uznał za niewiarygodny wniosek etyczny w przypadku naprawdę długowiecznej infrastruktury i decyzji środowiskowych.

Stopa dyskontowa jest sporna właśnie dlatego, że jej wybór nie jest neutralnym parametrem technicznym: koduje osąd o tym, ile społeczeństwo powinno poświęcić dziś dla ludzi, którzy jeszcze się nie narodzili. Raport Sterna o ekonomii zmian klimatu (2006) użył stopy dyskontowej bliskiej zeru (czysta preferencja czasowa około 0,1%), argumentując, że dyskontowanie dobrobytu przyszłych pokoleń według stóp zbliżonych do rynkowych jest etycznie nie do obrony, gdy szkoda (katastrofalna zmiana klimatu) jest nieodwracalna. Krytycy — zwłaszcza William Nordhaus — twierdzili, że niemal zerowa stopa Sterna przeceniała argumenty za natychmiastowymi wydatkami na klimat, sprawiając, że niemal każdy dzisiejszy koszt wydawał się uzasadniony wobec ledwo zdyskontowanej przyszłej korzyści. Spór nie dotyczył matematyki; dotyczył tego, czyja rama etyczna powinna ustalać stopę, i pozostaje standardową ilustracją tego, dlaczego stopa dyskontowa jest wyborem politycznym, a nie tylko aktuarialnym nakładem.

## Matematyka

Wzór Ramseya leżący u podstaw stopy z Green Book:

```
r = ρ + η·g

gdzie:
  r = społeczna stopa dyskontowa
  ρ = stopa czystej preferencji czasowej (niecierpliwość + ryzyko katastrofy)
  η = elastyczność użyteczności krańcowej konsumpcji
  g = oczekiwana roczna stopa wzrostu konsumpcji per capita
```

Malejący harmonogram z Green Book (Załącznik 6, poglądowo — dokładną opublikowaną tabelę sprawdź w aktualnym wydaniu):

```
Lata 0–30:    3,5%
Lata 31–75:   3,0%
Lata 76–125:  2,5%
Lata 126–200: 2,0%
Lata 201–300: 1,5%
Lata 301+:    1,0%
```

Wartość bieżąca przyszłej kwoty:

```
PV = FV / (1 + r)^t
```

## Przykład obliczeniowy

**Projekt ochrony przeciwpowodziowej**: projekt przynosi 10 milionów £ unikniętych szkód powodziowych w roku 40.

Przy stałej stopie 3,5%: PV = 10 000 000 / (1,035)^40 ≈ 2,52 miliona £ — korzyść wygląda na małą.

Przy malejącym harmonogramie Green Book (3,5% dla lat 0–30, potem 3,0%) obliczenie kapitalizuje przy 3,5% przez pierwsze 30 lat i 3,0% dla lat 31–40:

```
PV = 10 000 000 / [(1,035)^30 × (1,03)^10]
   = 10 000 000 / [2,807 × 1,344]
   ≈ 10 000 000 / 3,773
   ≈ 2,65 miliona £
```

Malejący harmonogram umiarkowanie podnosi wartość bieżącą długoterminowych korzyści w porównaniu ze stałą wysoką stopą — to jawny cel harmonogramu, ponieważ stałe 3,5% przez wiek zdyskontowałoby korzyść 100 milionów £ w roku 100 do poniżej 3,3 miliona £.

**Infrastruktura cyfrowa**: migracja rządowej chmury kosztująca teraz 4 miliony £ ma uniknąć 500 000 £ rocznie kosztów utrzymania starszych systemów przez 15 lat. Przy 3,5% wartość bieżąca tej renty to około 500 000 £ × 11,52 (15-letni współczynnik renty przy 3,5%) ≈ 5,76 miliona £ — z zapasem przewyższa koszt 4 miliony £, to przypadek dodatniej bieżącej wartości netto, który wyglądałby wyraźnie słabiej przy naiwnie wybranej wyższej stopie (przy 7% ten sam współczynnik renty spada do około 9,11, co daje 4,56 miliona £, nadal dodatnio, ale ze znacznie cieńszym marginesem).

## Związek z inżynierią oprogramowania

Większość uzasadnień biznesowych oprogramowania obejmuje 3–5 lat, dobrze mieszcząc się w stałym paśmie 3,5%, więc malejący harmonogram rzadko wpływa wprost — ale leżąca u podstaw dyscyplina ma znaczenie dla każdej rządowej inwestycji technologicznej o długim okresie życia aktywów (platforma krajowa, program infrastruktury danych, wieloletni kontrakt):

- Używaj opublikowanej stopy z Green Book zamiast wewnętrznej „stopy progowej” zapożyczonej z finansów prywatnych; audytorzy i recenzenci Treasury będą oczekiwać standardowego harmonogramu.
- W przypadku korzyści realizowanych wiele lat później (długoterminowe oszczędności na utrzymaniu platformy, narastająca wartość ekosystemu otwartych danych — zob. [wartość otwartych danych](../wartość-otwartych-danych/)) wybór dyskontowania może odwrócić uzasadnienie biznesowe z dodatniego na ujemne; uczyń stopę i horyzont jawnymi założeniami, a nie ukrytymi ustawieniami domyślnymi.
- To zasila bezpośrednio [ocenę według Green Book](../ocena-według-green-book/), model pięciu przypadków, który formalnie wymaga zdyskontowanych przepływów pieniężnych, oraz [wycenę dobrostanu](../wycena-dobrostanu/), gdzie to samo pytanie o dyskontowanie pojawia się dla niepieniężnych korzyści dobrostanu.
- Zob. także [równość międzypokoleniowa i dyskontowanie zrównoważonego rozwoju](../równość-międzypokoleniowa-i-dyskontowanie-zrównoważonego-rozwoju/) dla sporu Stern kontra Nordhaus zastosowanego konkretnie do inwestycji technologicznych w środowisko i klimat.

## Pułapki

- **Stosowanie stałej stopy dla bardzo długich horyzontów.** Malejący harmonogram z Green Book istnieje właśnie dlatego, że stała stopa zaniża naprawdę długowieczne korzyści; sprawdź, które pasmo ma zastosowanie, zamiast domyślnie używać 3,5% przez cały czas.
- **Traktowanie stopy dyskontowej jako etycznie neutralnej.** Spór Stern–Nordhaus pokazuje, że stopa koduje osąd wartości o przyszłych pokoleniach; jej zmiana zmienia to, które programy wydają się uzasadnione, więc powinna być przedstawiona i uzasadniona, a nie ukryta w domyślnych ustawieniach arkusza.
- **Mylenie społecznej stopy dyskontowej z prywatnym kosztem kapitału.** Koszty pożyczek rządu i prywatne stopy progowe to inne pojęcia niż stopa społeczna wyprowadzona z Ramseya, a podstawienie jednej za drugą w ocenie publicznej zazwyczaj zniekształca wynik w kierunku faworyzowania krótkoterminowych zwrotów.
- **Niespójne dyskontowanie przepływów realnych i nominalnych.** Stopa z Green Book jest stopą realną (urealnioną o inflację); dyskontowanie nią przepływów nominalnych istotnie zaniża wartości bieżące.

## Źródła

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
