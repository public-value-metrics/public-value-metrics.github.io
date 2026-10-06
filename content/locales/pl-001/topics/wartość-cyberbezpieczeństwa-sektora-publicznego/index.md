# Wartość cyberbezpieczeństwa sektora publicznego

Wartość cyberbezpieczeństwa sektora publicznego to dyscyplina wyceny redukcji ryzyka: ile warte jest zmniejszenie prawdopodobieństwa naruszenia danych obywateli, skoro wydatki na bezpieczeństwo nie dają widocznego wyniku, gdy działają, a bardzo widoczny, gdy zawodzą? Dla usługi przechowującej rejestry świadczeń, dane zdrowotne lub rejestry podatkowe ta właściwość „niewidoczności, gdy działa” jest dokładnie powodem, dla którego potrzebuje jawnego argumentu wartości, a nie tylko zaznaczenia zgodności.

## Dlaczego to ważne

Cyber Assessment Framework (CAF) brytyjskiego National Cyber Security Centre daje organizacjom sektora publicznego ustrukturyzowany sposób uczynienia bezpieczeństwa dyscypliną ocenianą i opartą na rezultatach zamiast listą kontrolną: definiuje cztery cele wysokiego poziomu (zarządzanie ryzykiem bezpieczeństwa, ochrona przed cyberatakiem, wykrywanie zdarzeń cyberbezpieczeństwa i minimalizowanie wpływu incydentów) rozbite na składowe rezultaty, względem których właściciel systemu może być oceniany, w tym samym duchu co punkt 9 [standardu usług cyfrowych](../standard-usług-cyfrowych/) („stwórz bezpieczną usługę, która chroni prywatność użytkowników”). To, przed czym ocena CAF chroni, ma udokumentowaną metkę z ceną: Cost of a Data Breach Report IBM śledzi średni koszt naruszenia według sektora i konsekwentnie stwierdza, że sektor publiczny znajduje się w dolnej części zakresu w porównaniu z finansami lub ochroną zdrowia — ostatnie wydania podają średnią sektora publicznego na około 2,6–2,9 miliona $ za naruszenie — ale „niższy niż finanse” to nie „niski”, a naruszenia rządowe niosą koszty, których liczby raportu nie w pełni uchwytują: utratę zaufania obywateli do kanałów cyfrowych, co obniża [cyfrowe wykorzystanie](../oszczędności-z-przesunięcia-kanałów/), od którego zależą uzasadnienia biznesowe przesunięcia kanałów, oraz polityczny i prawny koszt ujawnienia danych, które państwo zmusiło obywateli do przekazania w pierwszej kolejności.

## Matematyka

Inwestycje w bezpieczeństwo wycenia się tak, jak każde wydatki na redukcję ryzyka: jako redukcję oczekiwanej straty, używając klasycznej tożsamości zarządzania ryzykiem.

```
Roczna oczekiwana strata (ALE) = Oczekiwana strata jednostkowa (SLE)
                                × Roczny wskaźnik wystąpienia (ARO)

Wartość środka bezpieczeństwa =
  ALE_przed_środkiem − ALE_po_środku − roczny koszt środka

Środek warto sfinansować, gdy:
  (ALE_przed − ALE_po) > roczny koszt środka

Ocena CAF nie daje bezpośrednio prawdopodobieństwa, ale profil rezultatów CAF
usługi (które składowe rezultaty są „osiągnięte”, „częściowo osiągnięte” lub
„nieosiągnięte”) jest rozsądnym zastępczym wejściem do szacowania ARO — system
z niezarządzanym dostępem uprzywilejowanym lub bez przetestowanego planu reakcji
na incydenty ma istotnie wyższy realistyczny ARO niż taki, który ma jedno i drugie.
```

## Przykład obliczeniowy

**System obsługi spraw rady hrabstwa przechowujący rejestry opieki społecznej 40 000 mieszkańców**:

```
Oczekiwana strata jednostkowa (koszt naruszenia), używając średniej sektora
publicznego z niedawnego Cost of a Data Breach Report IBM ≈ 2,1 mln £
(przeliczone, rząd wielkości — zawsze wyprowadzaj od nowa z aktualnego
wydania raportu zamiast ponownie używać stałej liczby)

Obecny ARO (niezarządzany dostęp uprzywilejowany, brak przetestowanej reakcji
na incydenty, według wewnętrznej samooceny CAF pokazującej wiele „nieosiągniętych”
rezultatów) ≈ szacowane 8% rocznie
  ALE_przed = 2,1 mln £ × 0,08 = 168 000 £/rok

Proponowany środek: zarządzanie dostępem uprzywilejowanym + przetestowany plan
reakcji na incydenty, przesuwające odpowiednie rezultaty CAF na „osiągnięte”,
szacowane na obniżenie ARO do 3%/rok
  ALE_po = 2,1 mln £ × 0,03 = 63 000 £/rok

Roczny koszt środka (narzędzia + proces + testy) = 45 000 £

Wartość środka = (168 000 − 63 000) − 45 000 = 60 000 £/rok
  netto dodatnia — sfinansuj. Arytmetyka pokazuje też, że środek byłby nadal
  wart sfinansowania przy prawie trzykrotnym koszcie, co jest rodzajem kontroli
  wrażliwości, który powinien towarzyszyć każdej liczbie ALE zbudowanej
  na szacowanych prawdopodobieństwach.
```

## Związek z inżynierią oprogramowania

Inżynierowie posiadają większość dźwigni w równaniu ALE: projekt kontroli dostępu, higiena zależności i poprawek, pokrycie logowania i wykrywania oraz narzędzia reakcji na incydenty — wszystkie bezpośrednio poruszają człon ARO, dlatego ocena CAF czyta się jak techniczny przegląd architektury tak samo jak audyt polityki. To [dług techniczny jako erozja wartości publicznej](../dług-techniczny-jako-erozja-wartości-publicznej/) w najostrzejszej postaci — niezałatane, niemonitorowane, słabo kontrolowane pod względem dostępu systemy to dług, którego spłata odsetek to ryzyko ogonowe, a nie stałe obciążenie — i powinien być uzgodniony z [całkowitym kosztem posiadania w IT administracji](../całkowity-koszt-posiadania-w-it-administracji/), aby wydatki na bezpieczeństwo nie były traktowane jako oddzielne od prawdziwego kosztu prowadzenia systemu. To także bezpośrednie wejście do ocen [wartości za pieniądze](../wartość-za-pieniądze/) według Green Book: koszt skorygowany o ryzyko jest częścią strony „kosztów” każdej oceny opcji, a nie dodatkiem doklejonym na końcu.

## Pułapki

- **Traktowanie samooceny CAF jako samego bezpieczeństwa**: ukończona ocena opisuje postawę bezpieczeństwa; nie tworzy jej — wartość leży w osiągniętych rezultatach, a nie w dokumencie.
- **Używanie globalnych średnich kosztów naruszeń jako lokalnego szacunku bez korekty**: liczby IBM to średnie z dużych, zróżnicowanych prób; realistyczna oczekiwana strata jednostkowa małego samorządu rzadko jest taka sama jak krajowego resortu rządowego.
- **Ignorowanie psychologii ryzyka ogonowego w decyzjach inwestycyjnych**: niskie roczne prawdopodobieństwo ułatwia odkładanie wydatków na bezpieczeństwo w nieskończoność, aż do roku, w którym się nie odkłada — testowanie wrażliwości obliczenia ALE względem zakresu ARO, jak w przykładzie obliczeniowym, temu przeciwdziała.
- **Liczenie tylko kosztu naruszenia w stylu IBM, a nie kosztu zaufania**: naruszenie, które obniża gotowość obywateli do używania kanałów cyfrowych, podkopuje argument [oszczędności z przesunięcia kanałów](../oszczędności-z-przesunięcia-kanałów/) na lata, koszt rzadko uwzględniany w szacunkach kosztów naruszeń.

## Źródła

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
