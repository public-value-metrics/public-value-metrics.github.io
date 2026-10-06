# Wartość za pieniądze (VFM)

Wartość za pieniądze (value for money) to formalny test brytyjskiego sektora publicznego, czy wydatki zapewniają najlepszą dostępną równowagę kosztów i korzyści. Green Book HM Treasury ujmuje ją przez trzy „E” — ekonomię (economy), sprawność (efficiency) i skuteczność (effectiveness) — przy czym równość (equity) bywa coraz częściej wskazywana jako sporne czwarte E. Każde uzasadnienie biznesowe w sektorze publicznym, które przetrwa kontrolę, musi wprost odpowiedzieć na wszystkie trzy, a nie tylko twierdzić, że wydatek „się opłaca”.

## Dlaczego to ważne

VFM nie jest synonimem „taniości”. Green Book (HM Treasury, wydanie 2022) wyraźnie stwierdza, że kupowanie opcji o najniższym koszcie (ekonomia) bez sprawdzenia, czy daje zamierzone rezultaty (skuteczność), jest częstym i kosztownym błędem — zamówienie, które oszczędza 10% na koszcie jednostkowym, ale dostarcza o 40% mniej efektu, ma gorszą, a nie lepszą wartość. Rama trzech E zmusza uzasadnienie biznesowe do rozdzielenia trzech naprawdę różnych rodzajów porażek: przepłacania za nakłady, marnowania nakładów w przekształcaniu ich w produkty oraz wytwarzania produktów, które nie przekładają się na rezultaty, jakich ktokolwiek chciał. Brytyjskie mechanizmy kontroli wydatków rządowych — punkty zatwierdzania Treasury, badania wartości za pieniądze National Audit Office (NAO) i oceny departamentalnych urzędników rozliczających — są zbudowane wokół tego trójczłonowego testu, więc inżynierskie uzasadnienie biznesowe, które dotyczy wyłącznie kosztu (ekonomii), nie przejdzie kontroli, nawet jeśli technologia jest rozsądna.

„Czwarte E”, równość, jest sporne właśnie dlatego, że może kolidować z pozostałymi trzema: najsprawniejszy sposób świadczenia usługi w skali kraju rzadko bywa najbardziej sprawiedliwy, ponieważ koncentrowanie świadczenia tam, gdzie obywateli najtaniej dotrzeć, często oznacza niedoobsłużenie tych najtrudniejszych do osiągnięcia. Rewizja Green Book z 2020 roku odpowiedziała na krytykę (w tym ze strony Treasury Select Committee w 2020 roku i IPPR North), że czyste wskaźniki koszty–korzyści systematycznie faworyzowały regiony już zamożne, wymagając, by oceny wprost uwzględniały wpływ dystrybucyjny — zob. [ważenie dystrybucyjne](../ważenie-dystrybucyjne/).

## Matematyka

VFM to nie pojedynczy wskaźnik, lecz trzy- (lub cztero-) częściowa diagnostyka stosowana po kolei:

```
Ekonomia:      Czy nakłady kupowane są po najniższym rozsądnym koszcie
               przy wymaganej jakości?  (£ na jednostkę nakładu)

Sprawność:     Jak dobrze nakłady są przekształcane w produkty?
               (produkty / nakłady, np. sprawy rozpatrzone na roboczogodzinę urzędnika)

Skuteczność:   Czy produkty rzeczywiście dają zamierzone rezultaty?
               (osiągnięte rezultaty / zamierzone rezultaty)

[Równość]:     Czy koszty i korzyści są rozłożone sprawiedliwie w populacji,
               czy skoncentrowane na tych, którzy potrzebują najmniej?
```

Porażka VFM może wystąpić na dowolnym etapie niezależnie: ekonomiczny zakup z niesprawnym świadczeniem; sprawne dostarczanie niewłaściwego produktu; skuteczne rezultaty kupione za nadmierną cenę. O tym, jak przekładają się one na mierzalne wskaźniki, zob. [KPI sektora publicznego](../kpi-sektora-publicznego/), a o formalnej metodzie porównania — [analizę efektywności kosztowej w administracji](../analiza-efektywności-kosztowej-w-administracji/).

## Przykład obliczeniowy

**Centrum kontaktu samorządu lokalnego**: urząd porównuje dwie opcje nowego systemu obsługi spraw.

- *Opcja A*: licencja za 600 000 £ (najtańsza dostępna), ale pracownicy nadal poświęcają średnio 22 minuty na sprawę, ponieważ przepływ pracy wymaga ręcznego przepisywania danych między systemami — sprawność jest słaba.
- *Opcja B*: licencja za 900 000 £, zintegrowany przepływ pracy, pracownicy poświęcają średnio 9 minut na sprawę.

Sama ekonomia faworyzuje A (o 300 000 £ taniej). Ale przy 40 000 spraw rocznie A kosztuje 40 000 × 22/60 = 14 667 godzin pracy; B kosztuje 40 000 × 9/60 = 6 000 godzin pracy. Przy pełnym koszcie pracownika 28 £/godz. A kosztuje 410 667 £ rocznie w czasie pracy, wobec 168 000 £ rocznie dla B — różnica sprawności 242 667 £ rocznie, która w ciągu 14 miesięcy przewyższa początkową różnicę ekonomii wynoszącą 300 000 £. Po uwzględnieniu sprawności VFM faworyzuje B, a nie A.

**Grant na realizację programu charytatywnego**: fundator porównuje grant 50 000 £, który daje 200 udanych zatrudnień (250 £ na zatrudnienie — pozornie doskonała ekonomia), z grantem 120 000 £, który daje 350 zatrudnień utrzymujących się ponad 12 miesięcy, podczas gdy w przypadku pierwszego grantu połowa zatrudnień wygasa w ciągu 3 miesięcy. Skuteczność — trwałe rezultaty — odwraca pozorny ranking VFM: prawdziwy koszt na *trwałe* zatrudnienie to 250 £ ÷ 0,5 = 500 £ dla pierwszego grantu, wobec 120 000 £/350 ≈ 343 £ dla drugiego.

## Związek z inżynierią oprogramowania

VFM daje zespołom inżynierskim dyscyplinę ujmowania uzasadnień biznesowych technologii w sposób, w jaki faktycznie przeczytają je działy finansów i audytu:

- Przedstawiaj ekonomię, sprawność i skuteczność jako osobne pozycje w uzasadnieniu biznesowym, a nie jedną uśrednioną liczbę „wartości” — recenzent wyszkolony na Green Book poprosi dokładnie o takie rozbicie.
- Uważaj na optymalizowanie kosztu zakupu (ekonomii) kosztem integracji i sprawności przepływu pracy, co jest bardzo częstą fałszywą oszczędnością w IT rządowym (zob. [całkowity koszt posiadania w IT administracji](../całkowity-koszt-posiadania-w-it-administracji/) i [budować czy kupować w administracji](../budować-czy-kupować-w-administracji/)).
- Skuteczność wymaga danych o rezultatach, a nie tylko liczby produktów — powiąż metryki dostarczania z [rezultatami a produktami](../rezultaty-a-produkty/) i z rzeczywistą ewaluacją przez [analizę kontrfaktyczną](../analiza-kontrfaktyczna/), zamiast zakładać, że produkty implikują rezultaty.
- Gdy system obsługuje nierówno regiony lub grupy demograficzne, kwestia równości jest zasadnym zarzutem VFM, a nie odrębnym „miło by było” — zob. [włączenie cyfrowe](../włączenie-cyfrowe/).

## Pułapki

- **Utożsamianie VFM z najniższą ceną.** Ekonomia to jedna trzecia (lub jedna czwarta) testu; Green Book wyraźnie ostrzega przed zasadami zamówień „najniższego kosztu”, które ignorują sprawność i skuteczność.
- **Mierzenie produktów i nazywanie ich rezultatami.** Przepustowość spraw (sprawność) to nie to samo co sprawy dobrze załatwione (skuteczność); zob. [rezultaty a produkty](../rezultaty-a-produkty/).
- **Traktowanie równości jako opcjonalnej.** Od aktualizacji Green Book z 2020 roku wpływ dystrybucyjny ma być oceniany obok tradycyjnych trzech E, a nie dołączany później; dołożenie go po zatwierdzeniu uzasadnienia biznesowego jest znacznie trudniejsze niż uwzględnienie od początku.
- **Porównywanie opcji o różnych wolumenach bez normalizacji.** Porównanie VFM na jednostkę dla opcji obsługujących różne populacje musi kontrolować skalę, inaczej porównanie sprawności jest bez znaczenia.

## Źródła

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  edition). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" and VFM study methodology.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the
  Treasury Select Committee's 2020 review of the Green Book's regional bias).
