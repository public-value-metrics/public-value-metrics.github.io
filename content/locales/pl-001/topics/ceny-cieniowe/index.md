# Ceny cieniowe

Cena cieniowa to szacunkowa wartość przypisana dobru, zasobowi lub efektowi zewnętrznemu, które nie mają obserwowalnej ceny rynkowej albo których cena rynkowa jest zniekształcona i nie odzwierciedla ich prawdziwej wartości społecznej. Ocena rządowa opiera się na niewielkim zestawie oficjalnych cen cieniowych — węgiel, czas poza pracą, praca bezrobotnych — publikowanych centralnie, tak aby każdy resort używał tej samej liczby.

## Dlaczego to ważne

Ceny cieniowe istnieją, ponieważ [analiza kosztów i korzyści społecznych](../analiza-kosztów-i-korzyści-społecznych/) nie może działać bez wartości pieniężnej każdego kosztu i każdej korzyści, a kilka z najbardziej doniosłych — tona wyemitowanego węgla, godzina czasu osoby dojeżdżającej, godzina pracy osoby, która w przeciwnym razie byłaby bezrobotna — nie ma w ogóle ceny rynkowej albo ma cenę rynkową, która przekłamuje ich prawdziwy koszt społeczny. HM Treasury i Department for Energy Security and Net Zero wspólnie publikują cenę cieniową węgla używaną w całej ocenie rządu brytyjskiego (<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>), wyprowadzoną nie z żadnej ceny rynku węgla, lecz z podejścia zgodnego z celem: wartość węgla ustalana jest na poziomie krańcowego kosztu redukcji potrzebnego do osiągnięcia ustawowych budżetów węglowych Wielkiej Brytanii, co jest zasadniczo inną logiką niż obserwowanie, za ile węgiel faktycznie handluje się w unijnym lub brytyjskim systemie handlu uprawnieniami do emisji.

Cieniowa stopa płac jest oparta na podobnej logice po stronie pracy. Zatrudnienie kogoś, kto w przeciwnym razie byłby bezrobotny, nie kosztuje społeczeństwa jego pełnej płacy — część tej płacy to transfer z utraconych wypłat świadczeń i utraconego czasu wolnego/poszukiwania pracy, a nie netto nowe czerpanie z zasobów społeczeństwa — więc wytyczne Green Book ustalają cenę cieniową poniżej płacy rynkowej dla pracy pochodzącej z bezrobocia, odzwierciedlającą prawdziwy koszt alternatywny tej pracy (zob. [koszt alternatywny w wydatkach publicznych](../koszt-alternatywny-w-wydatkach-publicznych/)), a nie jej cenę rynkową.

## Matematyka

```
Cena cieniowa węgla (struktura poglądowa, aktualne wartości z oficjalnego
narzędzia wartości węgla BEIS/DESNZ — nie używaj nieaktualnych liczb):
  Wartość sektora objętego handlem: oparta na trajektoriach cen uprawnień ETS
  Wartość sektora nieobjętego handlem (zgodna z celem): ustalona na krańcowym
    koszcie redukcji potrzebnym do spełnienia ustawowych budżetów węglowych,
    rosnąca z czasem w miarę wyczerpywania łatwiejszych opcji redukcji
  Stosowanie: £/tonę CO2e × tony wyemitowane lub zredukowane przez opcję,
    dyskontowane społeczną stopą dyskontową dla lat przyszłych

Cieniowa stopa płac (SWR):
  SWR = Płaca rynkowa − (wartość utraconego czasu wolnego/poszukiwania pracy,
                         który zaoszczędzono + wartość wypłat świadczeń, które
                         już nie są wypłacane)
  Zwykle wyrażana jako ułamek płacy rynkowej (np. SWR = 0,6 × płaca rynkowa
    w obszarze o wysokim bezrobociu, według wytycznych Załącznika A do Green Book
    dotyczących rynków pracy z wolnymi mocami)
```

Obie liczby są konwencjami politycznymi ustalanymi centralnie, a nie empirycznymi obserwacjami rynkowymi — cały sens ceny cieniowej polega na zastąpieniu brakującego lub zniekształconego rynku, więc ocena z nią związana musi powoływać się na aktualne oficjalne źródło, a nie wyprowadzać własną liczbę, właśnie po to, by oceny wszystkich resortów były porównywalne.

## Przykład obliczeniowy

**Rząd krajowy**: ocena programu ochrony przeciwpowodziowej szacuje, że unika on 400 ton emisji CO2e rocznie (dzięki mniejszemu użyciu sprzętu awaryjnego i mniejszemu wbudowanemu węglowi z uniknięcia odbudowy) w 30-letnim okresie życia oceny, w porównaniu ze scenariuszem bazowym „zrób minimum”.

```
Poglądowa cena cieniowa węgla: 280 £/tonę CO2e (rok 1, rosnąca w okresie oceny
  zgodnie z oficjalnym harmonogramem wartości węgla dla sektora nieobjętego handlem)
Korzyść węglowa w roku 1 = 400 × 280 £ = 112 000 £
```

Ponieważ oficjalny harmonogram ma wartość węgla *rosnącą* w okresie oceny (odzwierciedlając zaostrzające się budżety węglowe), analityk musi zastosować poprawną wartość właściwą dla danego roku w każdym roku 30-letniego strumienia, a nie stałą stopę — użycie wartości z roku 1 przez cały czas zaniżyłoby korzyści z późniejszych lat i zniekształciło ranking względem alternatywnych projektów ochrony przeciwpowodziowej o innych profilach węglowych.

**Samorząd lokalny**: program wsparcia zatrudnienia rady dla długotrwale bezrobotnych mieszkańców umieszcza 150 osób w pracach płatnych 11 £/godz. Wycena tego z użyciem pełnej płacy rynkowej przypisałaby programowi jako korzyść społeczną 11 £ × przepracowane godziny, ale podejście cieniowej stopy płac uznaje, że nie byli to pracownicy odciągnięci z innych prac — prawdziwy koszt alternatywny ich pracy przed programem był niski.

```
Płaca rynkowa: 11,00 £/godz.
Cieniowa stopa płac (poglądowa, wysokie bezrobocie lokalne): 0,6 × płaca rynkowa = 6,60 £/godz.
Przypisywalna korzyść społeczna netto na przepracowaną godzinę ≈ 11,00 £ − 6,60 £ = 4,40 £/godz.
  („dodatkowa” wartość stworzona przez przesunięcie naprawdę bezczynnej pracy do produkcji,
   w odróżnieniu od samej płacy, która jest w dużej mierze transferem)
```

Dlatego oceny programów zatrudnienia w obszarach o wysokim bezrobociu mogą wykazywać dodatnią wartość społeczną netto, nawet jeśli ten sam program, prowadzony w obszarze pełnego zatrudnienia, gdzie wypierana praca byłaby po prostu odciągana z innych prac, by jej nie wykazywał.

## Związek z inżynierią oprogramowania

Ceny cieniowe rzadko dotykają bezpośrednio dostarczania oprogramowania, ale mają znaczenie, ilekroć uzasadnienie biznesowe twierdzi korzyść węglową lub społeczną ze zmiany w IT — konsolidacja centrum danych deklarująca oszczędności węgla czy usługa bezpapierowa deklarująca uniknięty węgiel druku i poczty musi użyć aktualnej oficjalnej ceny cieniowej węgla zamiast wymyślonej liczby oraz zastosować poprawny harmonogram rok po roku zamiast stałej stopy, dokładnie jak przy każdym innym wkładzie do oceny Green Book. Zob. [całkowity koszt posiadania w IT administracji](../całkowity-koszt-posiadania-w-it-administracji/) i [wartość cyberbezpieczeństwa sektora publicznego](../wartość-cyberbezpieczeństwa-sektora-publicznego/), które oba często potrzebują ceny cieniowej dla trudno wycenialnego wkładu (ryzyko naruszenia, przestoje) obok bezpośrednio wycenionych pozycji.

## Pułapki

- **Używanie nieaktualnej liczby dla węgla lub płac.** Obie wartości są okresowo rewidowane przez centralne wytyczne; ocena zbudowana na uchylonej liczbie nie przetrwa kontroli Treasury.
- **Stosowanie stałej cieniowej ceny węgla w wielodekadowej ocenie.** Oficjalny harmonogram rośnie z czasem; użycie wartości z roku 1 przez cały czas przekłamuje profil korzyści lub kosztów.
- **Mylenie cieniowej stopy płac z obniżką faktycznej płacy pracownika.** Cieniowa stopa płac koryguje wycenę wkładu pracy w *ocenie*, a nie płacę, którą pracownik faktycznie otrzymuje — pomieszanie obu zaprasza do (błędnego) usprawiedliwiania płac poniżej rynkowych.
- **Wyprowadzanie własnej ceny cieniowej zamiast użycia oficjalnej.** Ceny cieniowe są konwencjami politycznymi właśnie po to, by oceny były porównywalne między resortami; lokalnie wymyślona liczba, choćby najlepiej uzasadniona, łamie tę porównywalność.

## Źródła

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
