# Zwrot z inwestycji darczyńcy

Zwrot z inwestycji darczyńcy to to, co funt konkretnego darczyńcy faktycznie kupuje w rezultatach — nie wskaźniki operacyjne organizacji charytatywnej i nie jej własny zwrot z całego budżetu. Przeramowuje ROI z perspektywy organizacji (jak sprawnie działamy) na perspektywę darczyńcy (co zmienia mój marginalny wkład), a obie liczby są rutynowo i błędnie traktowane jako to samo.

## Dlaczego to ważne

Własne „ROI” organizacji charytatywnej, o ile fraza jest w ogóle używana, zwykle opisuje coś w rodzaju [kosztu na beneficjenta](../koszt-na-beneficjenta/) lub [wskaźnika kosztów ogólnych organizacji charytatywnych](../wskaźnik-kosztów-ogólnych-organizacji-charytatywnych/) — miar sprawności organizacyjnej. ROI darczyńcy to zupełnie inne pytanie: zważywszy, że ta organizacja ma już inne dochody, co dodają pieniądze *tego* darczyńcy na marginesie? Jeśli organizacja dostarczyłaby ten sam program z konkretnym darem 10 000 £ lub bez niego — bo ma obfite rezerwy albo bo inny fundator wypełniłby lukę — ROI darczyńcy tego daru jest bliskie zeru, jakkolwiek dobrze wygląda ogólny wskaźnik kosztów ogólnych organizacji czy jej koszt na rezultat.

To to samo pytanie o dodatkowość, które leży u podstaw oceny [wartości za pieniądze](../wartość-za-pieniądze/) w brytyjskich wydatkach publicznych i [dodatkowości i efektu jałowego](../dodatkowość-i-efekt-jałowy/) w ewaluacji programów: stworzona wartość jest przypisywalna fundatorowi tylko w takim stopniu, w jakim zaszłaby inaczej. Główne platformy z doradztwem dla darczyńców i organizacje efektywnego dawania (Giving What We Can, GiveWell) budują swoje rekomendacje wprost wokół tego rozróżnienia, pytając nie „czy to dobra organizacja charytatywna”, lecz „czy ta organizacja ma niewypełnione miejsce na więcej finansowania, tak że mój dar jest dodatkowy”.

## Matematyka

```
ROI darczyńcy ≠ Sprawność operacyjna organizacji charytatywnej

ROI darczyńcy  ≈  (Rezultat osiągnięty z darem) − (Rezultat, który zaszedłby
                   bez niego, tzn. kontrfakt)
                 ─────────────────────────────────────────────────
                                  Wielkość daru

Kluczowe wejścia:
  - Miejsce na więcej finansowania (czy organizacja jest ograniczona finansowo na marginesie?)
  - Funging (czy inny darczyńca wypełniłby lukę?)
  - Marginalna efektywność kosztowa na konkretnym poziomie finansowania (koszty często
    rosną, gdy interwencja skaluje się poza najłatwiejszą do osiągnięcia populację)
```

Zob. [efektywność kosztowa w efektywnym altruizmie](../efektywność-kosztowa-w-efektywnym-altruizmie/), jak GiveWell operacjonalizuje pytanie o „miejsce na więcej finansowania”, oraz [analiza kontrfaktyczna](../analiza-kontrfaktyczna/) dla ogólnej metody.

## Przykład obliczeniowy

Darczyńca wybiera między dwoma darami po 5000 £:

- **Organizacja C**: ma w pełni sfinansowany podstawowy program z rezerwami 2 miliony £ i listą oczekujących fundatorów; marginalne 5000 £ prawdopodobnie zostaną dodane do rezerw lub mniej priorytetowej działalności. Szacowany rezultat dodatkowy dla darczyńcy: minimalny — pieniądze nie zmieniają oczywiście tego, co się dzieje.
- **Organizacja D**: mały, poparty dowodami program, który publicznie oświadczył, że w następnym kwartale będzie musiał odmówić 200 osobom bez dodatkowych 50 000 £, i zebrał z tego 42 000 £. Marginalne 5000 £ bardzo prawdopodobnie sfinansuje realne dodatkowe świadczenie — powiedzmy 20 dodatkowych obsłużonych osób, przy własnym deklarowanym przez organizację koszcie na beneficjenta 250 £.

Ta sama wielkość daru, ten sam darczyńca, radykalnie różne ROI darczyńcy — nie dlatego, że Organizacja C jest gorszą organizacją (może mieć lepszy ogólny koszt na rezultat), lecz dlatego, że jej marginalna luka finansowa jest już zamknięta.

## Związek z inżynierią oprogramowania

Platformy dla darczyńców i narzędzia rekomendacji dawania zbyt często pokazują tylko metryki sprawności na poziomie organizacji (wskaźnik kosztów ogólnych, koszt na beneficjenta), bo to one są publikowane przez organizacje w raportach rocznych i najłatwiej je wciągnąć do tabeli porównawczej. Właściwe przedstawienie ROI darczyńcy wymaga innego, trudniejszego do pozyskania punktu danych: deklarowanej aktualnej luki finansowej organizacji lub „miejsca na więcej finansowania”, która zmienia się w ciągu roku i rzadko jest danymi ustrukturyzowanymi. Platformy, które chcą wspierać prawdziwe rozumowanie o ROI darczyńcy, potrzebują albo bezpośredniego kanału z ujawnień luk finansowych (jak GiveWell utrzymuje ręcznie dla swoich rekomendowanych organizacji), albo jawnego zastrzeżenia, że tabela porównawcza pokazuje sprawność organizacyjną, a nie dodatkowość darczyńcy. Zob. [wskaźnik kosztów ogólnych organizacji charytatywnych](../wskaźnik-kosztów-ogólnych-organizacji-charytatywnych/) dla metryki, z którą ROI darczyńcy jest najczęściej, i błędnie, mylone.

## Pułapki

- **Mylenie sprawności organizacji charytatywnej z dodatkowością darczyńcy.** Dobrze prowadzona, niskokosztowa organizacja charytatywna może nadal mieć bliskie zeru marginalne ROI darczyńcy, jeśli nie jest ograniczona finansowo.
- **Ignorowanie fungingu.** Jeśli duży fundator instytucjonalny i tak pokryłby lukę, dar indywidualnego darczyńcy wypiera pieniądze tego fundatora, zamiast dodawać nowe świadczenie.
- **Zakładanie liniowej efektywności kosztowej w skali.** Beneficjenci najtańsi do osiągnięcia są często obsługiwani jako pierwsi; marginalny koszt na rezultat często rośnie w miarę rozszerzania się programu, więc ROI następnego funta nie jest takie samo jak ROI przeciętnego funta już wydanego.
- **Brak deklarowanej luki finansowej.** Organizacja lub platforma, która nie potrafi powiedzieć, co sfinansuje następne X £, nie może poprzeć prawdziwego twierdzenia o ROI darczyńcy, tylko o koszcie przeciętnym.

## Źródła

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
