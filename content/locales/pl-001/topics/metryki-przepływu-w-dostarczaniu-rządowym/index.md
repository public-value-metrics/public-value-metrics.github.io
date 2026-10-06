# Metryki przepływu w dostarczaniu rządowym

Metryki przepływu — prawo Little’a, limity pracy w toku (WIP) i sprawność przepływu — opisują, jak szybko praca przemieszcza się przez system o ograniczonej zdolności. Tablica sprintu jest jednym takim systemem; kolejka wniosków o świadczenia, rejestr wniosków planistycznych czy zaległość spraw wizowych to dokładnie ta sama matematyka w innym mundurze.

## Dlaczego to ważne

Obciążenie sprawami w administracji to systemy kolejkowe, a systemy kolejkowe podlegają prawom kolejek, niezależnie od tego, czy ktoś je mierzy. Ustawowe terminy rozstrzygania czynią to jawnym: w reżimie Town and Country Planning większość drobnych wniosków planistycznych niesie 8-tygodniowy ustawowy cel rozstrzygnięcia, a duże wnioski 13 tygodni — zobowiązanie czasu cyklu wpisane wprost w prawo. Zaległość spraw azylowych Home Office, wielokrotnie badana przez National Audit Office i Home Affairs Select Committee, jest dobrze udokumentowanym przypadkiem systemu publicznego, w którym praca w toku rosła szybciej niż przepustowość przez dłuższy czas, wypychając czasy cyklu daleko poza jakiekolwiek ustawowe lub usługowe oczekiwania. Metryki przepływu dają inżynierom i kierownikom obsługi spraw wspólny, ilościowy słownik dla dokładnie tego trybu awarii, zamiast zostawiania go jako jakościowego „problemu zaległości”.

## Matematyka

```
Prawo Little’a:  WIP = Przepustowość × Czas cyklu
             →   Czas cyklu = WIP / Przepustowość

Sprawność przepływu = czas aktywny (dotyku) / całkowity czas cyklu   (Vacanti)

Efekt limitu WIP: przy stałej przepustowości zmniejszenie WIP o połowę
mniej więcej zmniejsza o połowę średni czas cyklu (prawo Little’a
po przekształceniu) — dźwignia dostępna bez dodawania etatów.
```

Zob. [metryki DORA dla wartości publicznej](../metryki-dora-dla-wartości-publicznej/) dla równoważnej matematyki zastosowanej do potoków wdrożeniowych oprogramowania zamiast obsługi spraw.

## Przykład obliczeniowy

**Wydział planowania samorządu lokalnego**: 400 wniosków otwartych w dowolnym momencie (WIP), zespół rozstrzyga 50 wniosków tygodniowo (przepustowość).

```
Czas cyklu = WIP / Przepustowość = 400 / 50 = 8 tygodni
```

To ląduje dokładnie na ustawowym 8-tygodniowym celu dla drobnych wniosków — bez zapasu, co oznacza, że każda zmienność w napływającym popycie lub czasie odpowiedzi konsultowanych podmiotów przesuwa rozstrzygnięcia poza ustawowy termin.

**Sprawność przepływu**: z tych 8 tygodni (56 dni kalendarzowych) wniosek ma typowo około 6 godzin faktycznego czasu przetwarzania przez pracownika.

```
Sprawność przepływu = 6 godzin / (56 dni × 8 godzin roboczych/dzień)
                    = 6 / 448 ≈ 1,3%
```

Wzorzec Vacantiego dla zespołów oprogramowania podaje typową sprawność przepływu na 15–20%; obsługa spraw w administracji, z wieloma ustawowymi przekazaniami konsultowanym podmiotom i oknami konsultacji publicznych, często działa o rząd wielkości niżej. 98,7% czasu „oczekiwania” to miejsce, gdzie osiem tygodni faktycznie się podziewa — nie w zdolnościach pracowników.

**Interwencja limitu WIP**: ograniczenie otwartych wniosków na pracownika do 15 zamiast nieograniczonych 25 (przy stałej przepustowości) przesuwa WIP z 400 do mniej więcej 240 w 16-osobowym zespole:

```
Nowy czas cyklu = 240 / 50 = 4,8 tygodnia
```

Niemal dwukrotne skrócenie czasu cyklu dzięki zmianie polityki, a nie zwiększeniu zatrudnienia — ta sama dźwignia, za którą pociągają zespoły dostarczania w stylu DORA, gdy ograniczają WIP sprintu.

## Związek z inżynierią oprogramowania

Metryki przepływu to wspólny język między tablicą Kanban zespołu dostarczającego a podłogą obsługi spraw, dla której buduje oprogramowanie: kolejka pracownika i kolejka pull requestów są obie rządzone prawem Little’a i obie przekraczają cele czasu cyklu w ten sam sposób — za dużo WIP względem przepustowości. To ma bezpośrednie znaczenie dla [kosztu opóźnienia w programach publicznych](../koszt-opóźnienia-w-programach-publicznych/): czas cyklu × CoD to funty leżące w kolejce w danym momencie, i ma znaczenie dla [standardów usług i metryk transakcji](../standardy-usług-i-metryki-transakcji/), gdzie opublikowany cel czasu realizacji jest zobowiązaniem czasu cyklu, które tylko metryki przepływu mogą zdiagnozować, gdy jest chybione. Oprogramowanie systemu obsługi spraw powinno ujawniać WIP i czas cyklu jako pierwszorzędne metryki operacyjne, a nie chować ich wewnątrz systemu obsługi spraw, o który nikt nie pyta.

## Pułapki

- **Dodawanie limitów WIP bez naprawy prawdziwego wąskiego gardła**: jeśli ograniczeniem jest czas odpowiedzi zewnętrznego konsultowanego podmiotu, ograniczenie WIP pracowników tylko przesuwa kolejkę w górę strumienia, zamiast ją skracać.
- **Traktowanie sprawności przepływu jako celu do manipulowania**: przyspieszanie 1,3% czasu aktywnego ledwo rusza czas cyklu; dźwignia leży prawie zawsze w stanach oczekiwania, co zwykle oznacza przeprojektowanie procesu, a nie szybkość pracowników.
- **Ignorowanie zmienności**: prawo Little’a opisuje średnie; obciążenie sprawami o wysokiej wariancji popytu potrzebuje zdolności buforowej, a nie tylko ściślejszego limitu WIP, inaczej ustawowe terminy nadal będą chybiane na zmiennym ogonie, nawet gdy średnia się poprawia.
- **Niespójne mierzenie WIP**: sprawa „otwarta” w systemie ewidencji, ale faktycznie zablokowana w oczekiwaniu na stronę trzecią, nadal jest WIP; wykluczenie jej upiększa liczby, nie zmieniając rzeczywistości dla obywatela.

## Źródła

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
