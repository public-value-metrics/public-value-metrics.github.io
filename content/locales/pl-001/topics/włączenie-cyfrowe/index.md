# Włączenie cyfrowe

Włączenie cyfrowe to dyscyplina zapewniania, że „domyślnie cyfrowo” nie staje się „wyłącznie cyfrowo” — że usługi publiczne zaprojektowane wokół najtańszego kanału nadal działają dla obywateli, którzy nie mogą lub nie chcą z niego korzystać bez pomocy. GDS ukuło konkretny mechanizm realizacji, „asystę cyfrową” (assisted digital), jako obowiązkowe wymaganie dla każdej rządowej usługi cyfrowej, a nie opcjonalny dodatek.

## Dlaczego to ważne

Government Digital Strategy z 2012 roku jasno określiła ambicję: usługi cyfrowe należy budować domyślnie cyfrowo, ale sama strategia przyznawała, że około 10% dorosłych w Wielkiej Brytanii nie będzie mogło z nich korzystać bez pomocy, i zobowiązała resorty do zapewnienia wsparcia z asystą cyfrową — ścieżki z udziałem człowieka, telefonicznie, osobiście lub przez pośrednika — jako części usługi, a nie osobnego zapasowego rozwiązania doklejonego później. To zobowiązanie jest teraz punktem 5 [standardu usług cyfrowych](../standard-usług-cyfrowych/), „upewnij się, że każdy może korzystać z usługi”. Skalę trwającego wykluczenia śledzi coroczny UK Consumer Digital Index Lloyds Banking Group: wydanie z 2024 roku stwierdziło, że około 1,6 miliona osób w Wielkiej Brytanii pozostaje offline, a ta grupa jest silnie przechylona ku osobom w wieku 70–79 lat, zarabiającym poniżej 35 000 £ oraz będącym na emeryturze lub bezrobotnym — dokładnie populacji najbardziej prawdopodobnie zależnej od przeprojektowywanych usług publicznych. Ten sam raport stwierdził, że tylko 48% brytyjskiej siły roboczej potrafiło wykonać wszystkie 20 zadań z ramy Essential Digital Skills, co oznacza, że wykluczenie to nie binarna łączność, lecz spektrum umiejętności, pewności i zaufania, które prosta metryka „ma szerokopasmowy internet” całkowicie pomija.

## Matematyka

Włączenie cyfrowe jest ramą i kontrolą równości, a nie pojedynczym wzorem, ale łączy się z ilościową oceną wartości przez [ważenie dystrybucyjne](../ważenie-dystrybucyjne/):

```
Naiwna wartość przesunięcia kanału:
  wartość = przesunięty wolumen × (koszt_stary − koszt_cyfrowy)     [zob. channel-shift-savings]

Wartość skorygowana o włączenie:
  wartość = (przesunięty wolumen × nieważona oszczędność)
          − (wykluczeni użytkownicy × koszt zapewnienia asysty cyfrowej)
          − (korekta wag dystrybucyjnych za szkodę dla wykluczonych
             grup, które tracą dostęp lub spotykają się z pogorszoną jakością usługi)

Asysta cyfrowa nie jest resztkowym kosztem porażki — to zaprojektowany
kanał z własnym [kosztem na transakcję](../koszt-na-transakcję/),
zwykle znacznie wyższym na transakcję niż samoobsługa cyfrowa, ale
nadal zwykle tańszym niż dawny kanał, który częściowo zastępuje.
```

## Przykład obliczeniowy

**Krajowa usługa świadczeń w stylu Universal Credit**: 2,5 miliona wniosków rocznie, oceniona jako wymagająca wsparcia z asystą cyfrową dla szacowanych 10% wnioskodawców zgodnie z założeniem planistycznym Government Digital Strategy.

```
Kohorta wykluczona/z asystą cyfrową = 2 500 000 × 10% = 250 000 wniosków/rok

Koszt kanału z asystą cyfrową (telefon + wsparcie osobiste, obsadzone
do obsługi trudnej sytuacji i złożoności) ≈ 9,50 £/wniosek
  = 250 000 × 9,50 £ = 2 375 000 £/rok

Koszt samoobsługi cyfrowej dla pozostałych 90% ≈ 0,40 £/wniosek
  = 2 250 000 × 0,40 £ = 900 000 £/rok

Zmieszany koszt na transakcję = (2 375 000 + 900 000) / 2 500 000
  = 1,31 £/wniosek

Projekt, który pomija asystę cyfrową, by osiągnąć niższy nagłówkowy
koszt na transakcję (np. 0,40 £ zmieszany, ignorując 250 000
wykluczonych wnioskodawców), nie eliminuje tych 2,375 mln £ kosztu —
zamienia je w niezgłoszone uprawnienia, odwołania i dalszy popyt na usługi
kryzysowe, który ląduje na zupełnie innym budżecie.
```

## Związek z inżynierią oprogramowania

Asysta cyfrowa jest zaprojektowanym kanałem, co oznacza, że ma interfejsy, SLA i oprzyrządowanie jak każdy inny: telefoniczne narzędzie pracownika socjalnego, portal pośrednika dla Citizens Advice lub samorządu albo przepływ kiosku osobistego. Traktowanie jej jako rzeczy dodanej na końcu — numer telefonu drobnym drukiem zamiast kanału rozważanego od odkrywania — to najczęstszy pojedynczy sposób, w jaki usługi nie spełniają punktu 5 [standardu usług cyfrowych](../standard-usług-cyfrowych/) podczas oceny. Włączenie cyfrowe jest soczewką równości dla każdego innego tematu w tym rozdziale: ogranicza, jak agresywnie można realizować [oszczędności z przesunięcia kanałów](../oszczędności-z-przesunięcia-kanałów/), jest pozycją, którą trzeba uczciwie uwzględnić w [koszcie na transakcję](../koszt-na-transakcję/), i jest bezpośrednim zastosowaniem [ważenia dystrybucyjnego](../ważenie-dystrybucyjne/) do kontekstu usług cyfrowych — oszczędność, która spada nieproporcjonalnie na osoby już wykluczone cyfrowo i ekonomicznie, powinna być ważona w dół, a nie traktowana jako równoważna oszczędności rozłożonej równomiernie w populacji.

## Pułapki

- **„Domyślnie cyfrowo” odczytywane jako „wyłącznie cyfrowo”**: zamknięcie linii telefonicznej lub okienka po przekroczeniu progu cyfrowego wykorzystania, bez weryfikacji, że pozostała kohorta ma naprawdę używalną alternatywę.
- **Mierzenie włączenia binarną łącznością**: „ma szerokopasmowy internet” lub „posiada smartfon” to słaby zastępnik zdolności do ukończenia konkretnej transakcji — luka Essential Digital Skills (tylko 48% brytyjskiej siły roboczej wykonuje wszystkie 20 zadań, według Lloyds 2024) pokazuje, że umiejętności i pewność znaczą tyle co dostęp.
- **Wycenianie asysty cyfrowej jako błędu zaokrąglenia**: zabudżetowanie jej jako małej pozycji rezerwowej zamiast właściwego kanału z własnym [kosztem na transakcję](../koszt-na-transakcję/), a potem zaskoczenie, że jest niedofinansowana i niedoobsadzona przy uruchomieniu.
- **Badanie tylko pomyślnych cyfrowych kończących**: badania satysfakcji i użyteczności prowadzone w całości w trakcie usługi pomijają ludzi, którzy nigdy nie zaszli tak daleko, co jest dokładnie populacją, którą praca nad włączeniem cyfrowym ma chronić.

## Źródła

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
