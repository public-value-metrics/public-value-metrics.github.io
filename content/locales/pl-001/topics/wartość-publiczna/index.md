# Wartość publiczna

Wartość publiczna to wartość, którą rząd lub organizacja sektora społecznego tworzy dla obywateli zbiorowo — nie tylko wytworzone produkty czy wydane pieniądze, lecz to, czy społeczeństwo ma się lepiej dlatego, że organizacja istnieje i działała tak, jak działała. Standardowym testem jest „trójkąt strategiczny” Marka Moore’a z 1995 roku: inicjatywa publiczna jest uzasadniona tylko wtedy, gdy jest *legitymizowana i wspierana*, *merytorycznie wartościowa* i *operacyjnie wykonalna* — wszystko naraz.

## Dlaczego to ważne

Wartość w sektorze prywatnym wycenia się stosunkowo łatwo: przychody minus koszty, rozstrzygane przez klientów, którzy mogą odejść. Wartość publiczna nie ma odpowiednika takiego sygnału rynkowego. Służba więzienna, urząd skarbowy i zespół ochrony dzieci wytwarzają rzeczy, których obywatele nie mogą po prostu odmówić kupna, a „klient” (podatnik, skazany, dziecko) bywa inną osobą niż polityczny zleceniodawca, który zatwierdza budżet. Książka Moore’a *Creating Public Value: Strategic Management in Government* (Harvard University Press, 1995) dostarcza brakującej dyscypliny: menedżer powinien umieć wskazać (1) jaką wartość publiczną tworzy jego inicjatywa, (2) skąd bierze się jego legitymacja i finansowanie — minister, rada, mandat, grant — oraz (3) czy jego organizacja jest w stanie ją rzeczywiście dostarczyć przy posiadanych ludziach, technologii i procesach. Program, który spełnia tylko jedno lub dwa ramiona trójkąta, nie jest jeszcze uzasadniony, choćby był najlepiej zamierzony.

Ma to praktyczne znaczenie, ponieważ większość porażek oprogramowania w sektorze publicznym nie jest porażkami technologii. System może być technicznie znakomity i operacyjnie wykonalny, a mimo to zawieść, bo nikt w otoczeniu legitymizującym — ministrowie, komisje nadzorcze, opinia publiczna — nie chciał tego, pod co jest zoptymalizowany. Cyfrowa usługa Universal Credit i brytyjski National Programme for IT w NHS są w brytyjskiej literaturze administracji publicznej wskazywane jako przypadki, w których ramiona operacyjne i legitymacyjne rozjechały się z ramieniem misji.

## Matematyka

Wartość publiczna jest ramą, a nie wzorem, ale porządkuje mgliste uzasadnienia inwestycji w trzy testowalne pytania:

```
Test trójkąta strategicznego — kontynuuj tylko, jeśli spełnione są wszystkie trzy:

1. Legitymacja i poparcie: Kto to zatwierdził i czy środowisko
   autoryzujące (władza ustawodawcza, minister, rada, zarząd, opinia
   publiczna) nadal to popiera w miarę angażowania zasobów?

2. Wartość publiczna: Jakie konkretne, dające się opisać dobro
   to przynosi obywatelom lub społeczeństwu — bezpieczeństwo, zdrowie,
   szanse, zaufanie, sprawiedliwość — i dla kogo?

3. Zdolność operacyjna: Czy organizacja może to realnie dostarczyć
   przy obecnym personelu, technologii, partnerach i uprawnieniach
   prawnych — albo ma wiarygodny plan ich pozyskania?
```

Słaba inicjatywa zwykle zawodzi na co najmniej jednym ramieniu: technicznie wykonalna, lecz bez mandatu (pilotaż udostępniania danych, którego nikt nie zatwierdził); popularna, lecz niewykonalna (obiecana usługa cyfrowa bez zaplecza inżynierskiego); albo zatwierdzona i wykonalna, lecz pozbawiona wartości (pulpit, z którego nikt nie korzysta).

## Przykład obliczeniowy

**Samorząd lokalny**: zespół cyfrowy urzędu proponuje narzędzie do wstępnej selekcji wniosków o dodatek mieszkaniowy oparte na AI.

- *Legitymacja*: gabinet rady zatwierdził strategię „cyfrowo w pierwszej kolejności”, ale wybrani członkowie odpowiedzialni za pomoc społeczną nie zatwierdzili konkretnie zautomatyzowanego podejmowania decyzji — to luka, a nie zielone światło.
- *Wartość publiczna*: szybsze rozpatrywanie (deklarowana korzyść: z 10 dni do 2) jest realną wartością tylko wtedy, gdy wnioskodawcy nie są błędnie odrzucani; twierdzenie o wartości musi uwzględniać trafność, nie tylko szybkość.
- *Zdolność operacyjna*: urząd ma jednego analityka danych i nie ma procesu monitorowania modelu, więc deklarowane 2 dni nie są obecnie osiągalne przy zakładanym poziomie błędów.

Dwa z trzech ramion zawodzą. Rama Moore’a mówi: nie kontynuować w obecnym zakresie — najpierw uzyskać wyraźną autoryzację zautomatyzowanych decyzji i zbudować zdolność monitorowania, bo inaczej „wartość publiczna” deklarowana w uzasadnieniu biznesowym jest fikcyjna.

**Administracja centralna**: internetowa usługa składania deklaracji organu podatkowego ma silną legitymację (ustawowy mandat) i silną zdolność operacyjną (istniejący zespół wdraża niezawodnie), lecz słabą wartość publiczną, jeśli korzystanie jest niskie, ponieważ osoby wykluczone cyfrowo są wypychane do kanału, z którego nie mogą korzystać — zob. [włączenie cyfrowe](../włączenie-cyfrowe/). Trójkąt ujawnia to, co pulpit mierzący wyłącznie dostarczanie by ukrył.

## Związek z inżynierią oprogramowania

Wartość publiczna jest pojęciem nadrzędnym, pod którym mieści się całe to repozytorium: [wartość za pieniądze](../wartość-za-pieniądze/) daje test ekonomii/sprawności/skuteczności dla oceny, czy zasoby wykorzystano dobrze; [koszt alternatywny w wydatkach publicznych](../koszt-alternatywny-w-wydatkach-publicznych/) wycenia, co jeszcze mogły zrobić te pieniądze; a [dodatkowość i efekt jałowy](../dodatkowość-i-efekt-jałowy/), [wypieranie i przypisanie](../wypieranie-i-przypisanie/) oraz [analiza kontrfaktyczna](../analiza-kontrfaktyczna/) razem sprawdzają, czy deklarowana wartość jest realna, a nie założona. Dla inżynierów trójkąt strategiczny jest użyteczną analizą przedpogrzebową każdej decyzji produktowej w sektorze publicznym:

- Przed zakresowaniem funkcji zapytaj, kto ją zatwierdził i czy to zatwierdzenie nadal obowiązuje — funkcja zbudowana dla ministra, który od tego czasu odszedł, mogła po cichu utracić ramię legitymacji.
- Traktuj „czy możemy to zbudować” i „czy powinniśmy to zbudować” jako naprawdę osobne pytania; zdolność inżynierska odpowiada tylko na trzecie ramię trójkąta.
- Dokumenty wymagań produktowych dla usług publicznych powinny wprost określać tezę o wartości publicznej, a nie tylko historię użytkownika, bo wartość dla użytkownika i wartość publiczna nie zawsze są tym samym (zob. [rezultaty a produkty](../rezultaty-a-produkty/)).

## Pułapki

- **Uznawanie zdolności operacyjnej za wystarczające uzasadnienie.** „Możemy to zbudować” odpowiada tylko na jedno ramię trójkąta; zespoły o silnych zdolnościach dostarczania rutynowo wypuszczają rzeczy, których nikt nie autoryzował i które nie tworzą żadnego dającego się opisać dobra publicznego.
- **Mylenie legitymacji z legalnością.** Program może być zgodny z prawem, a mimo to brakować mu politycznego i publicznego poparcia potrzebnego, by przetrwać trudną fazę realizacji; ochrona prawna to nie to samo co mandat.
- **Zakładanie, że wartość publiczna to to, co powie resort zlecający.** Model Moore’a wymaga, by teza o wartości była testowalna względem rzeczywistych interesów obywateli, a nie jedynie głoszona przez finansującego — w przeciwnym razie rama zapada się w samocertyfikację.

## Źródła

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press,
  1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
