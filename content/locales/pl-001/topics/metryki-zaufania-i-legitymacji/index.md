# Metryki zaufania i legitymacji

Legitymacja i poparcie to jedno z trzech ramion „trójkąta strategicznego” Marka Moore’a z *Creating Public Value* (1995) — obok samej wartości publicznej i zdolności operacyjnej — i to ramię najczęściej pozostawiane niezmierzone, bo w przeciwieństwie do budżetu czy liczby produktów, legitymacja nie ma oczywistej pojedynczej liczby. Metryki zaufania i legitymacji to rodzina miar zastępczych, których rządy używają, by wypełnić tę lukę: badania zaufania instytucjonalnego, oceny zaufania organów nadzoru, dane o skargach i odwołaniach oraz wskaźniki poparcia politycznego/ustawodawczego.

## Dlaczego to ważne

Argument Moore’a jest taki, że menedżer publiczny, który dostarcza realną wartość, ale traci polityczną i publiczną legitymację, w końcu straci środowisko autoryzujące potrzebne do dalszego dostarczania — finansowanie jest cięte, mandaty zawężane, a usługa jest głodzona niezależnie od tego, jak dobre są jej rezultaty. Legitymacja nie jest więc dodatkiem do karty wyników dostarczania, doklejonym dla public relations; to nośne wejście do tego, czy misja może w ogóle trwać, i dlatego zajmuje w [karcie wyników wartości publicznej](../karta-wyników-wartości-publicznej/) współrzędną perspektywę, a nie przypis. Program badań OECD „Trust in Government” to wiodąca ponadnarodowa próba kwantyfikacji tego: śledzi odsetek obywateli w państwach członkowskich OECD, którzy mówią, że mają zaufanie do rządu krajowego, a jego długoterminowe dane pokazują, że zaufanie jest bardzo wrażliwe na szoki — zarówno kryzys finansowy 2008 roku, jak i pandemia COVID-19 wywołały ostre wahania na poziomie krajowym, po których często następowała tylko częściowa odbudowa, a analiza OECD konsekwentnie stwierdza, że postrzegana *kompetencja* (czy rząd dostarcza to, co obiecuje) i postrzegana *sprawiedliwość/uczciwość* (czy rząd jest postrzegany jako działający bez korupcji i faworyzowania) to dwa najsilniejsze czynniki napędzające liczbę zaufania, odrębne od satysfakcji z jakiejkolwiek pojedynczej transakcji. Rządy coraz częściej próbują operacjonalizować legitymację też na bardziej szczegółowym poziomie — brytyjskie niezależne organy regulacyjne i inspektoraty (National Audit Office, Parliamentary and Health Service Ombudsman, regulatorzy sektorowi jak Ofsted i Care Quality Commission) pełnią funkcję zinstytucjonalizowanych kontroli legitymacji, przekształcając „czy opinia publiczna nadal ufa tej usłudze” w audytowalne oceny.

## Matematyka

Zaufanie i legitymacja to temat w kształcie ramy, którego użyteczne ilościowe zastępniki to:

```
Indeks zaufania instytucjonalnego (w stylu OECD)
  = % respondentów odpowiadających „tak” na pytanie o zaufanie do rządu,
    śledzony w czasie, rozbity według grupy demograficznej

Zestaw zastępników legitymacji (żadna pojedyncza liczba nie zastępuje konstruktu):
  - Uwzględnione skargi na 1000 użytkowników usługi (dane rzecznika lub wewnętrzne dane o skargach)
  - Wskaźnik sukcesu kontroli sądowej / odwołań od decyzji organu
  - Ocena niezależnego regulatora/inspektoratu (np. pasma od „wybitny” do „niewystarczający”)
  - Głosowania zaufania komisji ustawodawczej/nadzorczej lub częstość krytycznych raportów
  - Wolumen wniosków o informację publiczną i wskaźnik ujawnienia/odmowy, jako zastępnik
    postrzeganej przejrzystości

Legitymacja jest potwierdzana, a nie obliczana: obronna ocena legitymacji
stosuje triangulację kilku z powyższych, zamiast polegać na jakimkolwiek pojedynczym zastępniku.
```

## Przykład obliczeniowy

**Krajowy organ podatkowy**: triangulacja legitymacji do rocznego raportu wartości publicznej.

```
Zastępnik zaufania w stylu OECD (badanie zaufania specyficzne dla resortu):
  58% respondentów mówi, że ufa organowi, że „potraktuje mnie sprawiedliwie” (spadek
  z 64% dwa lata wcześniej)

Dane o skargach:
  Uwzględnione skargi: 4,2 na 1000 interakcji z podatnikami (w górę z 3,1 na 1000)

Skierowania do rzecznika:
  Skierowania do niezależnego Adjudicator's Office: 1850 w roku, z czego
  61% uwzględnionych w całości lub części na niekorzyść organu (w górę z 48% rok wcześniej)

Czytając wszystkie trzy razem: zaufanie spada, uwzględnione skargi rosną, a niezależne
ustalenia rzecznika coraz częściej stają po stronie przeciwnej organowi — trzy niezależne
sygnały zbiegające w tym samym kierunku, co czyni to wiarygodnym ustaleniem
legitymacji, a nie szumem w jakimkolwiek pojedynczym szeregu.
```

Ruch pojedynczej z tych liczb byłby słabym dowodem; trzy niezależne miary poruszające się razem w tym samym okresie to wzorzec, który czyni twierdzenie o legitymacji obronnym.

## Związek z inżynierią oprogramowania

Metryki legitymacji są rzadko wytwarzane przez pulpit pojedynczego zespołu, co samo w sobie jest lekcją projektową: buduj potoki raportowania zdolne przyjmować i uzgadniać dane z niezależnych źródeł zewnętrznych (systemy obsługi spraw rzecznika, kanały ocen regulatorów, dostawcy badań) zamiast projektować raportowanie legitymacji jako metrykę wyłącznie wewnętrzną, bo wewnętrznie pozyskiwane twierdzenia o legitymacji („oceniamy się jako wiarygodni”) niosą niewielką wagę dowodową — ten sam problem niezależności odnotowany dla perspektywy legitymacji w [karcie wyników wartości publicznej](../karta-wyników-wartości-publicznej/). Potoki danych o skargach i odwołaniach zasługują na tę samą rygorystyczność jakości danych co każdy potok rezultatów zasilający umowy [płatności za wyniki](../płatność-za-wyniki-i-obligacje-wpływu-społecznego/), ponieważ niedoraportowany lub źle skategoryzowany zbiór skarg po cichu zaniża problem legitymacji, zanim stanie się widoczny w badaniu zaufania rok później. Zob. [metryki satysfakcji obywateli](../metryki-satysfakcji-obywateli/) dla odpowiednika tej miary na poziomie instytucji na poziomie transakcji oraz [wartość publiczna](../wartość-publiczna/) dla pełnej ramy trójkąta strategicznego Moore’a, do której należy to ramię.

## Pułapki

- **Traktowanie satysfakcji jako zastępnika legitymacji**: obywatel może być zadowolony z interfejsu pojedynczej transakcji, nie ufając instytucji jako całości (lub odwrotnie) — zob. [metryki satysfakcji obywateli](../metryki-satysfakcji-obywateli/), dlaczego oba muszą być raportowane osobno.
- **Poleganie na pojedynczej samoopisowej metryce**: wewnętrznie prowadzone badanie zaufania bez niezależnego potwierdzenia (dane rzecznika, oceny regulatora) łatwo odrzucić jako samoocenę; zastosuj triangulację.
- **Ignorowanie zróżnicowania demograficznego**: zagregowane krajowe liczby zaufania mogą maskować ostro rozbieżną legitymację wśród konkretnych grup (według wieku, pochodzenia etnicznego, dochodu lub regionu) — publikacje OECD Trust in Government same rozbijają dane właśnie z tego powodu.
- **Odczytywanie pojedynczego spadku wywołanego szokiem jako trwałego trendu**: liczby zaufania gwałtownie się poruszają wokół kryzysów (krachy finansowe, pandemie, głośne skandale) i częściowo się odbudowują; pojedynczego punktu danych po szoku nie należy ekstrapolować na długoterminowy spadek bez większej liczby danych.

## Źródła

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
