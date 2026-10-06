# Wypieranie i przypisanie

Wypieranie (displacement) występuje, gdy pozorna korzyść programu jest osiągana przez odebranie działalności lub korzyści skądinąd, zamiast stworzenia czegoś nowego — twój zysk jest czyjąś stratą. Przypisanie (attribution) to pokrewne pytanie, jaką część zaobserwowanego rezultatu twoja interwencja może rzeczywiście sobie przypisać, gdy przyczyniły się też inne podmioty i czynniki. Oba są standardowymi korektami w brytyjskich wytycznych ewaluacyjnych sektora publicznego, obok efektu jałowego i przecieku, i oba rutynowo pomija się w twierdzeniach o wpływie, które wyglądają na znacznie mocniejsze, niż są.

## Dlaczego to ważne

Program grantowy samorządu dla firm, który pomaga 50 sklepom przenieść się do strefy rewitalizacji, może zaraportować „wsparto 50 firm, stworzono 200 miejsc pracy” — ale jeśli te firmy po prostu przeniosły się z sąsiedniej ulicy handlowej zamiast się rozwijać, miejsca pracy zostały wyparte, a nie stworzone, a efekt netto w skali gminy (lub regionu) może być bliski zeru. Magenta Book HM Treasury i od dawna obowiązujący Additionality Guide traktują wypieranie jako wymagane odliczenie właśnie dlatego, że lokalne historie sukcesu są częste nawet wtedy, gdy nie dają żadnej korzyści netto w skali kraju czy regionu — wartość po prostu się przesunęła, często ze szkodą dla obszaru lub podmiotów, które ją utraciły. Wytyczne ewaluacji funduszy strukturalnych (stosowane do dawnych programów Europejskiego Funduszu Rozwoju Regionalnego i ich krajowych następców, takich jak UK Shared Prosperity Fund) formalizują to w trzech skalach przestrzennych: wypieranie lokalne (w obrębie miasta), regionalne (w obrębie regionu) i krajowe (w całym Zjednoczonym Królestwie), ponieważ interwencja może być dodatkowa w jednej skali, a stanowić czyste wypieranie w szerszej — program zatrudnienia, który przyciąga pracowników z sąsiedniego miasta, jest krajowo neutralny, nawet jeśli wygląda na lokalny sukces.

Przypisanie jest bliźniaczym problemem w realizacji opartej na partnerstwach, co stało się normą w sektorze społecznym i międzyresortowych usługach publicznych. Gdy trzy organizacje wspólnie prowadzą usługę zapobiegania bezdomności, raport roczny każdej z nich może niezależnie przypisywać sobie zasługę za tę samą redukcję liczby osób śpiących na ulicy — zsumowane we wszystkich raportach, deklarowany wpływ może przekraczać zaobserwowaną zmianę w świecie rzeczywistym, czasem kilkukrotnie. Wytyczne Magenta Book dotyczące analizy wkładu istnieją właśnie dlatego, że losowe przypisanie do jednego podmiotu jest w realizacji międzyresortowej często niemożliwe, a uczciwa odpowiedź brzmi zwykle „przyczyniliśmy się do tego rezultatu”, a nie „spowodowaliśmy ten rezultat”.

## Matematyka

Wypieranie jako część standardowej sekwencji wpływu netto (pełny łańcuch zob. [dodatkowość i efekt jałowy](../dodatkowość-i-efekt-jałowy/)):

```
Dodatkowy wpływ netto = Rezultat brutto − Efekt jałowy − Wypieranie − Przeciek, × Mnożnik

Stopa wypierania = korzyść/działalność odciągnięta skądinąd
                    / całkowita zaobserwowana korzyść/działalność brutto
```

Przypisanie, gdy wiele podmiotów przyczynia się do jednego rezultatu, wyraża się zwykle jako udział wkładu, a nie dokładny odsetek, ponieważ zazwyczaj nie da się go zmierzyć z taką samą rygorystycznością jak wypieranie:

```
Przypisywalny udział ≈ f(siła wkładu przyczynowego, wkłady innych podmiotów,
                         czynniki zewnętrzne/kontekstowe)

Deklarowany wpływ nigdy nie powinien przekraczać:
  Σ (przypisywalny udział każdego partnera) ≤ 100% całkowitego zaobserwowanego rezultatu
```

## Przykład obliczeniowy

**Grant rewitalizacyjny**: program grantowy rady dla głównej ulicy handlowej raportuje 200 nowych miejsc pracy w handlu detalicznym w finansowanej strefie. Badanie ankietowe uzupełniające wykazuje, że 60 z tych miejsc pracy pochodziło z firm przenoszących się z sąsiedniej, niefinansowanej ulicy handlowej w tej samej gminie, a kolejne 30 z sieci ogólnokrajowych otwierających oddziały, które i tak zostałyby otwarte gdzieś w regionie niezależnie od grantu.

```
Zadeklarowane miejsca pracy brutto = 200
Wypieranie lokalne = 60 (przeniesione w obrębie gminy)
Wypieranie regionalne = 30 (i tak zostałyby otwarte w regionie)

Dodatkowe miejsca pracy netto (poziom gminy) = 200 − 60 = 140
Dodatkowe miejsca pracy netto (poziom regionu) = 200 − 60 − 30 = 110
```

Uczciwy nagłówek zależy od skali geograficznej, na której zależy fundatorowi — uzasadnienie biznesowe Treasury oceniane na poziomie krajowym lub regionalnym powinno używać 110, a nie 140 z poziomu gminy, a już na pewno nie surowych 200.

**Wielopodmiotowa usługa przeciwdziałania bezdomności**: trzy organizacje partnerskie (rada, organizacja charytatywna zajmująca się mieszkalnictwem i fundacja zdrowia) wspólnie prowadzą usługę redukcji liczby osób śpiących na ulicy. Liczba osób śpiących na ulicy w obszarze spadła w ciągu roku o 30. Raport roczny każdej organizacji twierdzi „zmniejszyliśmy liczbę osób śpiących na ulicy o 30” — zsumowane, trzy raporty twierdzą, że pomoc otrzymało 90 osób, trzy razy więcej niż rzeczywisty spadek. Analiza wkładu przypisująca każdemu partnerowi udział (powiedzmy 40% rada, 35% organizacja charytatywna, 25% fundacja zdrowia, na podstawie udokumentowanej roli i niezależnej oceny) wykazałaby odpowiednio 12, 10,5 i 7,5, sumując się poprawnie do zaobserwowanych 30.

## Związek z inżynierią oprogramowania

Wypieranie i przypisanie kształtują sposób, w jaki systemy śledzenia wpływu i raportowania rezultatów powinny być projektowane dla realizacji wielolokalizacyjnej lub wielopartnerskiej:

- Zakres geograficzny i organizacyjny powinien być jawnym, pierwszorzędnym polem w każdym pulpicie wpływu — liczba raportowana „dla gminy” i ta sama liczba raportowana „dla regionu” to różne liczby, a system, który je myli, wytworzy liczby niemożliwe do uzgodnienia na poziomie portfela.
- Gdy wielu partnerów realizuje wspólnie, system rezultatów powinien rejestrować udziały wkładu (lub co najmniej oznaczać wspólne przypisanie), zamiast pozwalać modułowi raportowania każdego partnera niezależnie przypisywać sobie 100% wspólnego rezultatu — inaczej zestawienia na poziomie portfela zawyżą całkowity wpływ, czasem znacznie.
- To łączy się ze [społecznym zwrotem z inwestycji](../społeczny-zwrot-z-inwestycji/) i [raportowaniem rezultatów grantów](../raportowanie-rezultatów-grantów/): obliczenie SROI lub IRIS+, które ignoruje wypieranie lub nadmiernie przypisuje wspólne rezultaty, da zawyżony wskaźnik, który nie przetrwa audytu ani replikacji.

## Pułapki

- **Raportowanie lokalnego sukcesu bez sprawdzenia szerszego wypierania.** Program może wyglądać na bardzo udany w najmniejszej skali raportowania, a być neutralny, a nawet ujemny w szerszej; zawsze podawaj skalę geograficzną, której dotyczy liczba netto.
- **Pozwalanie każdemu partnerowi wspólnej realizacji na przypisanie sobie pełnej zasługi.** O ile udziały wkładu nie są uzgodnione i udokumentowane, zestawienia raportowe między partnerami zawyżą całkowity wpływ — sprawdź, czy deklaracje na poziomie partnerów sumują się do nie więcej niż zaobserwowanej całości.
- **Traktowanie przypisania jako dokładnego odsetka, gdy w istocie jest osądem.** Analiza wkładu, w odróżnieniu od losowego kontrfaktu, daje szacunek do obrony, a nie zmierzony fakt; przedstaw ją z odpowiednią niepewnością, a nie z fałszywą precyzją.
- **Ignorowanie wypierania w interwencjach skierowanych na rynek.** Wsparcie biznesu, programy zatrudnienia i rewitalizacja zorientowana na miejsce to klasyczne kategorie o wysokim wypieraniu; traktuj kontrole wypierania jako obowiązkowe dla nich, a nie opcjonalne.

## Źródła

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
