# Rząd jako platforma (GaaP)

Rząd jako platforma (Government as a Platform) to strategia budowania współdzielonych, wielokrotnego użytku komponentów — usługi powiadomień, usługi płatności, usługi tożsamości — raz, centralnie, tak aby setki indywidualnych usług rządowych z nich korzystały, zamiast budować własne. Przeramowuje publiczną infrastrukturę cyfrową jako problem ekonomii platform: wartość nie leży w żadnej pojedynczej integracji, lecz w tym, że marginalny koszt *następnego* zespołu, który ją przyjmuje, zbliża się do zera.

## Dlaczego to ważne

GDS formalnie przedstawiło strategię w publikacji „Government as a Platform” z 2015 roku, argumentując, że rząd budował te same zdolności — przyjmowanie płatności, powiadamianie użytkowników, weryfikację tożsamości, wyszukiwanie adresów — osobno w usłudze po usłudze, a każda z nich niosła własny zakup, ocenę bezpieczeństwa i bieżące obciążenie wsparciem. Alternatywą była niewielka liczba współdzielonych platform, zbudowanych raz według wysokiego standardu i używanych wszędzie: GOV.UK Notify do wysyłania e-maili, SMS-ów i listów, GOV.UK Pay do przyjmowania płatności online oraz GOV.UK One Login (następca wcześniejszego programu tożsamości GOV.UK Verify) do weryfikacji tożsamości. Skala, jaką te platformy osiągnęły, jest najjaśniejszym dowodem, że strategia zadziałała: GOV.UK Pay przetworzył ponad 10 miliardów £ transakcji w około 1800 indywidualnych usługach — a podczas gdy przetworzenie pierwszego miliarda £ zajęło mu mniej więcej cztery lata, teraz tyle samo przetwarza w około pięć miesięcy — podczas gdy GOV.UK Notify wysłał ponad 9 miliardów wiadomości w imieniu ponad 1500 organizacji rządowych. Każda z tych usług przyjmujących uniknęła budowania, zabezpieczania i utrzymywania własnej bramki płatności lub potoku wiadomości.

## Matematyka

```
Koszt budowy na usługę (bez platformy) = N usług × koszt budowy,
  oceny bezpieczeństwa i prowadzenia jednego systemu płatności/powiadomień/tożsamości

Koszt platformy = stały koszt budowy platformy
                + marginalny koszt na przyjmującą usługę (integracja,
                  konfiguracja, bieżące wsparcie zespołu platformy)

Ponowne użycie wychodzi na zero, gdy:
  koszt budowy platformy < N × (koszt budowy na usługę − marginalny
  koszt integracji)

Dla dojrzałej platformy marginalny koszt na dodatkowego przyjmującego zbliża się
do samej opłaty za transakcję/wiadomość — koszt stały jest amortyzowany w całym
zasobie rządowym, a nie w budżecie jednego resortu, dlatego komponenty GaaP są
zwykle finansowane centralnie, a nie obciążane pełnym odzyskiem kosztów
wobec wczesnych użytkowników.
```

## Przykład obliczeniowy

**Samorząd lokalny przyjmujący GOV.UK Pay zamiast budowania bramki płatności**:

```
Szacunek własnej budowy:
  praca nad zgodnością PCI-DSS + integracja + bieżące utrzymanie
  ≈ 85 000 £ budowa + 22 000 £/rok utrzymanie

Przyjęcie GOV.UK Pay:
  Wysiłek integracji ≈ 12 000 £ (czas programisty)
  Opłaty transakcyjne: płatności kartą od rządu do obywatela zwykle
  naliczane jako mały procent + stała opłata za transakcję, bez
  osobnego obciążenia PCI-DSS dla rady
  ≈ 12 000 £ jednorazowo, bieżący koszt zmienny z wolumenem, a nie stały

Oszczędność pierwszego roku ≈ 85 000 £ − 12 000 £ = 73 000 £, przed policzeniem
unikniętego utrzymania 22 000 £/rok i uniknięcia ryzyka zgodności związanego
z w ogóle przechowywaniem danych kart w systemie prowadzonym przez radę — ta druga
kategoria to wartość bezpieczeństwa omówiona w public-sector-cybersecurity-value.
```

Przeskaluj te 73 000 £ na około 1800 usług korzystających obecnie z GOV.UK Pay, a zagregowany uniknięty koszt budowy w całym rządzie sięga setek milionów — ekonomia platformy, a nie jakakolwiek pojedyncza integracja, jest miejscem, gdzie faktycznie leży wartość strategii.

## Związek z inżynierią oprogramowania

Rząd jako platforma jest bezpośrednim argumentem za [budować czy kupować w administracji](../budować-czy-kupować-w-administracji/): gdy istnieje współdzielony, oceniony, dobrze prowadzony komponent, zbudowanie ekwiwalentu na zamówienie jest bardzo rzadko lepszym wyborem pod względem [wartości za pieniądze](../wartość-za-pieniądze/) i niemal z definicji nie spełnia punktu 13 [standardu usług cyfrowych](../standard-usług-cyfrowych/) („używaj i wnoś wkład w otwarte standardy, wspólne komponenty i wzorce”). Zmienia też kształt [całkowitego kosztu posiadania w IT administracji](../całkowity-koszt-posiadania-w-it-administracji/): przyjęcie platformy zamienia dużą pozycję kapitałową i utrzymaniową na mniejszy koszt operacyjny powiązany z użyciem, który jest łatwiejszy do prognozowania i łatwiejszy do pozbawienia finansowania, jeśli usługa jest likwidowana. Otwarte ponowne użycie komponentów ma kuzyna w [wartości otwartych danych](../wartość-otwartych-danych/) — oba są strategiami traktowania czegoś, co rząd wytwarza raz, jako współdzielonej infrastruktury, a nie aktywa resortowego.

## Pułapki

- **Cicha odbudowa**: zespoły po cichu budują własną integrację płatności lub powiadomień, bo proces wdrażania platformy jest wolniejszy niż zrobienie tego samodzielnie — problem tarcia zarządczego, a nie technologii, który po cichu podkopuje ekonomię ponownego użycia, od której zależy cała strategia.
- **Niedofinansowanie zespołu platformy względem wartości, którą tworzy**: wartość narasta u resortów korzystających, podczas gdy koszt leży po stronie zespołu platformy, tworząc chroniczne ryzyko niedoinwestowania, o ile finansowanie nie jest zcentralizowane i chronione — wersja tragedii wspólnego pastwiska.
- **Mierzenie sukcesu platformy samym użyciem**: liczby przyjęcia (wdrożone usługi, wysłane wiadomości) to wskaźnik wiodący, a nie dowód wartości; prawdziwym testem jest powyższa arytmetyka unikniętego kosztu budowy i unikniętego ryzyka.
- **Traktowanie „platformy” jako synonimu „monolitu”**: komponenty GaaP odnoszą sukces, ponieważ każdy robi jedną rzecz dobrze z wąskim, stabilnym interfejsem — pakowanie niepowiązanych zdolności do jednej „platformy” odtwarza problem budowy na zamówienie w innej skali.

## Źródła

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
