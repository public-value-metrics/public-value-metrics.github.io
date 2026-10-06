# Wycena dobrostanu (WELLBY)

Wycena dobrostanu wycenia skutek polityki bezpośrednio w kategoriach satysfakcji z życia, używając jako jednostki WELLBY (rok życia skorygowany dobrostanem) — jeden WELLBY równa się zmianie o jeden punkt na skali satysfakcji z życia 0–10, utrzymanej przez rok. To oficjalnie usankcjonowana przez HM Treasury alternatywa dla wyceny pieniężnej każdej korzyści przez gotowość do zapłaty.

## Dlaczego to ważne

„Wellbeing guidance for appraisal: supplementary Green Book guidance” HM Treasury (2021, <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) formalnie wprowadziło dane o subiektywnym dobrostanie do oceny administracji centralnej, dając analitykom drogę do wyceny rezultatów — więzi społecznych, zdrowia psychicznego, bezpieczeństwa, uczestnictwa obywatelskiego — które metody [preferencji deklarowanych](../wycena-metodą-preferencji-deklarowanych/) i [ujawnionych](../wycena-metodą-preferencji-ujawnionych/) mają trudności z przekonującym wycenieniem, ponieważ ludzie bywają słabymi prognostami tego, jak bardzo dane dobro faktycznie wpłynie na ich satysfakcję z życia. Wytyczne, opracowane wspólnie z What Works Centre for Wellbeing, ustalają zalecaną wartość pieniężną WELLBY — 13 000 £ (ceny z 2021 roku, okresowo rewidowane) — wyprowadzoną z zależności obserwowanej w dużych badaniach dobrostanu (głównie Annual Population Survey ONS, która zadaje cztery pytania o dobrostan ONS4 od 2011 roku) między dochodem a satysfakcją z życia, dając analitykom przelicznik z powrotem na funty, gdy potrzebne jest porównanie wyrażone pieniężnie z innymi ocenami Green Book.

Metoda ma znaczenie, ponieważ odwraca zwykłą logikę wyceny: zamiast pytać, ile ludzie zapłaciliby za rezultat (preferencje deklarowane) lub wnioskować o wartości z powiązanej transakcji rynkowej (preferencje ujawnione), mierzy bezpośrednio wpływ rezultatu na raportowaną satysfakcję z życia, omijając lukę między tym, czego ludzie mówią, że chcą, a tym, co faktycznie poprawia ich sytuację. To także jej główne ograniczenie — samoopisowa satysfakcja z życia podlega efektom adaptacji i kadrowania, które staranny praktyk musi kontrolować.

## Matematyka

```
WELLBY = 1 punkt satysfakcji z życia (skala 0–10) utrzymany dla 1 osoby przez 1 rok

Łączna liczba WELLBY z polityki =
  Σ (zmiana wyniku satysfakcji z życia) × (liczba osób, których to dotyczy)
    × (czas trwania w latach, zdyskontowany społeczną stopą dyskontową)

Wartość pieniężna = Łączna liczba WELLBY × wartość za WELLBY
  (zalecana wartość HM Treasury: 13 000 £ za WELLBY, ceny z 2021 roku,
   podlega okresowej rewizji — przed użyciem sprawdź aktualne wytyczne)
```

Różni się to od [roku życia skorygowanego dobrostanem](../lata-życia-skorygowane-dobrostanem/) z ekonomii zdrowia, który zwykle jest zakotwiczony w skalach jakości życia związanej ze zdrowiem (EQ-5D i podobnych), a nie w ogólnej satysfakcji z życia; oba są powiązane, ale nie zamienne, a oceny Green Book powinny jawnie wskazywać, jaka skala i metoda pozyskiwania leżą u podstaw raportowanej liczby WELLBY.

## Przykład obliczeniowy

**Samorząd lokalny**: rada prowadzi wspólnotowy program towarzyszenia dla odizolowanych starszych mieszkańców, obejmujący 400 osób. Badanie dobrostanu przed/po z użyciem pytania o satysfakcję z życia ONS4 pokazuje, że średni wynik uczestników rośnie z 5,8 do 6,5 — zysk 0,7 punktu — utrzymany przez dwuletni okres finansowania programu.

```
Wygenerowane WELLBY = 400 osób × 0,7 punktu × 2 lata = 560 WELLBY
Wartość pieniężna = 560 × 13 000 £ = 7,28 mln £
Koszt programu = 450 000 £ w ciągu 2 lat

Wskaźnik korzyści do kosztów ≈ 7,28 mln £ / 0,45 mln £ ≈ 16:1
```

Tak wysoki wskaźnik powinien wywołać dociekliwość, a nie świętowanie — wytyczne Green Book dotyczące dobrostanu wyraźnie ostrzegają przed przyjmowaniem zysków samoopisowych z małych prób za dobrą monetę bez sprawdzenia efektów selekcji (czy do programu dołączyli tylko najbardziej towarzyscy mieszkańcy z największym potencjałem poprawy?) i bez grupy porównawczej; dobrze zaprojektowana ewaluacja odjęłaby kontrfaktyczną zmianę zaobserwowaną u nieuczestników, zob. [analiza kontrfaktyczna](../analiza-kontrfaktyczna/).

**Rząd krajowy**: porównanie dwóch programów zatrudnienia z użyciem WELLBY zamiast samych zarobków oddaje to, że bezrobocie niesie koszt dobrostanu ponad utracony dochód — brytyjskie badania dobrostanu konsekwentnie wskazują, że bezrobocie obniża satysfakcję z życia bardziej, niż przewidywałaby sama utrata dochodu, z powodu pozamaterialnych skutków utraty struktury, celu i kontaktów społecznych. Program oceniony tylko pod kątem wzrostu zarobków zaniżyłby swoją wartość względem takiego, który oceniono dodatkowo w WELLBY.

## Związek z inżynierią oprogramowania

Wycena dobrostanu rzadko dociera bezpośrednio do zespołów inżynierskich, ale kształtuje to, jak definiuje się „sukces” dla produktów sektora społecznego i usług publicznych — cyfrowa platforma towarzyszenia, narzędzie segregacji w zdrowiu psychicznym czy platforma społecznościowa dla odizolowanych mieszkańców powinny się spodziewać, że ich wpływ w końcu będzie mierzony w ten sposób, co oznacza, że analityka produktu musi rejestrować, *kogo* się dociera i *jak długo*, a nie tylko liczby użycia. Wbuduj instrumentarium badań dobrostanu (ONS4 lub zwalidowane odpowiedniki) w ewaluację usługi od początku, zamiast dokładać je z perspektywy czasu; dołożenie bazowego pomiaru dobrostanu po uruchomieniu usługi całkowicie traci porównanie przed/po. Zob. [rezultaty a produkty](../rezultaty-a-produkty/) i [metody ewaluacji wpływu](../metody-ewaluacji-wpływu/).

## Pułapki

- **Brak kontrfaktu lub grupy porównawczej.** Zysk dobrostanu przed/po bez kontroli tego, co zaszłoby i tak, zawyża skutek programu; zob. [analiza kontrfaktyczna](../analiza-kontrfaktyczna/) i [dodatkowość i efekt jałowy](../dodatkowość-i-efekt-jałowy/).
- **Małe, samodzielnie dobrane próby.** Badania dobrostanu uczestników programu, którzy sami się zgłosili, są podatne na błąd selekcji — ludzie, którzy dołączyli i zostali, prawdopodobnie już wcześniej mieli tendencję wzrostową.
- **Traktowanie przelicznika £ na WELLBY jako dokładnego.** Wartość pieniężna jest konwencją polityczną wyprowadzoną z regresji dochód–dobrostan, a nie ceną rynkową; używaj jej dla porównywalności między ocenami Green Book, a nie jako twierdzenia o tym, ile dobrostan „jest wart”.
- **Mieszanie WELLBY z QALY związanymi ze zdrowiem.** Oba mierzą różne konstrukty na różnych skalach; zob. [lata życia skorygowane dobrostanem](../lata-życia-skorygowane-dobrostanem/) dla wariantu z ekonomii zdrowia i nie uśredniaj ich ze sobą.

## Źródła

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
