# Productivitatea IA în sectorul public

Metricile a ceea ce face de fapt asistența IA la programare cu rezultatul ingineriei — ratele de acceptare a sugestiilor, accelerările din studii controlate, debitul de PR-uri și reținerea codului — poartă o bază de dovezi cu adevărat contradictorie chiar înainte de adăugarea constrângerilor sectorului public: clasificarea datelor limitează ce părți ale unui patrimoniu moștenit poate atinge deloc o unealtă de IA, ciclurile de achiziție înseamnă că unealta evaluată este adesea cu o generație de model în urma capacității actuale, iar cerințele de autorizare de securitate guvernează cine o poate folosi și pentru ce.

## De ce contează

Cele două studii controlate cele mai citate indică în direcții opuse. RCT-ul GitHub Copilot al lui Peng et al. din 2023 a constatat că dezvoltatorii au finalizat o sarcină de server HTTP de la zero cu 55,8% mai repede cu Copilot (1h11m față de 2h41m, n=95). RCT-ul METR din 2025 a constatat că dezvoltatori open-source experimentați care lucrau pe *propriile lor repository-uri mature* erau cu 19% mai lenți cu uneltele de IA de la începutul lui 2025, crezând totodată că sunt cu aproximativ 20% mai rapizi. Ambele studii sunt solide; contradicția este constatarea — eficacitatea la sarcini de la zero nu se transferă la eficacitatea într-o bază de cod matură, iar o mare parte din ingineria guvernamentală este muncă pe baze de cod mature, în patrimonii mai vechi și mai idiosincratice decât repository-ul comercial median. Generative AI Framework for HMG al Central Digital and Data Office (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) stabilește principii pentru adoptarea responsabilă tocmai pentru că această bază de dovezi nu poate fi pur și simplu importată din demonstrațiile furnizorilor; se așteaptă ca departamentele să evalueze uneltele față de propriile cerințe de tratare a datelor și de securitate înainte de implementare.

## Matematica

```
Rata de acceptare  = sugestii acceptate / sugestii afișate
Rata de reținere   = cod IA care supraviețuiește până la merge / cod IA acceptat
Accelerare         = (t_control − t_IA) / t_control  (DOAR din comparație controlată)
Delta debit        = Δ PR-uri integrate/dezvoltator/săptămână

Factor de acoperire pentru sectorul public:
  cota eligibilă a bazei de cod = LOC pe sisteme unde clasificarea
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) permite deloc unealta

Model de valoare = dezvoltatori × acoperire eligibilă × timp economisit × tarif încărcat × utilizare
                  — fiecare termen cere măsurare locală, iar factorul de acoperire
                  nu are echivalent în sectorul privat
```

## Exemplu lucrat

Un departament guvernamental pilotează un asistent de IA la programare pe 300 de dezvoltatori, dar numai sistemele clasificate OFFICIAL sunt eligibile pentru folosirea uneltei — 70% din patrimoniu după alocarea efectivului, cei 30% rămași (sisteme cu clasificare superioară) fiind excluși complet.

```
Dezvoltatori eligibili = 300 × 0,70 = 210

Rezultatul pilotului: timp economisit autoraportat 40 min/zi;
                      economie măsurată la nivel de sarcină 12 min/zi (0,2 h)
                      — decalajul de percepție METR, reprodus în practică

Evaluăm numărul MĂSURAT:
  210 × 0,2 h × 220 zile × 55 £/h încărcat × 0,6 utilizare
  = 210 × 44 ore × 55 £ × 0,6
  = 9.240 ore × 55 £ × 0,6 ≈ 304.920 £/an de capacitate

Cost: 210 locuri licențiate × 22 £/lună × 12 ≈ 55.440 £/an

Raport net de capacitate ≈ 304.920 / 55.440 ≈ 5,5:1
```

Finanțabil la aproximativ o treime din beneficiul autoraportat, și numai după aplicarea plafonului de clasificare — licențierea tuturor celor 300 de dezvoltatori pe baza cifrei autoraportate ar fi supraestimat atât populația eligibilă, cât și economia reală.

## Legătura cu ingineria software

Disciplinele care se transferă direct: rulați **studii pragmatice** pe baza de cod proprie a departamentului și pe tichete reale, nu pe sarcini demonstrative ale furnizorilor, deoarece rezultatul METR este în mod specific o constatare despre baze de cod mature; tratați **rata de acceptare ca proxy, nu ca rezultat** — acceptarea ridicată cu reținere scăzută este echivalentul software al supradiagnosticării; asociați fiecare afirmație de debit cu o **verificare a stabilității**, deoarece raportul DORA din 2025 a constatat că adoptarea IA crește debitul, dar degradează stabilitatea modificărilor, exact analiza beneficiului net pe care o rulează [metricile DORA pentru valoarea publică](../metricile-dora-pentru-valoarea-publică/); și fiți onești că uneltele de IA pot lărgi, nu îngusta, decalajul în patrimoniile moștenite încărcate de [datorie tehnică](../datoria-tehnică-ca-eroziune-a-valorii-publice/), deoarece datele de antrenare subreprezintă COBOL, 4GL și codul mainframe la comandă comun în guvern, deci calitatea sugestiilor tocmai pe sistemele care au cea mai mare nevoie de ajutor este adesea cea mai slabă. Aceasta stă alături de întrebarea mai largă a [valorii IA în guvern](../valoarea-ia-în-guvern/) și ar trebui guvernată de aceleași constrângeri de [valoare a securității cibernetice a sectorului public](../valoarea-securității-cibernetice-a-sectorului-public/) care limitează unde poate vedea cod sau date orice unealtă a unui terț.

## Capcane

- **Transplantul studiilor furnizorilor**: aplicarea accelerărilor RCT de la zero la munca de integrare moștenită este exact eroarea pe care a expus-o studiul METR.
- **Autoraportarea ca măsurare**: un decalaj de 20 de puncte procentuale între percepție și măsurat este cea mai mare părtinire cunoscută din această literatură și umflă cazurile de afaceri care se bazează doar pe sondaje ale dezvoltatorilor.
- **Ignorarea plafonului de clasificare**: modelele de licențiere și de valoare construite pe efectivul total în loc de submulțimea eligibilă, autorizată prin clasificare, supraestimează sistematic atât cost-eficacitatea, cât și acoperirea realizabilă.
- **Decalajul ciclului de achiziție**: achiziția de unelte prin acorduri-cadru poate însemna că un pilot evaluează o generație de model cu 12–18 luni în urma celei disponibile public până la momentul implementării complete, făcând ipoteza accelerării din cazul de afaceri original depășită înainte de lansare.

## Surse

- Peng S, et al., „The Impact of AI on Developer Productivity: Evidence from GitHub Copilot”, 2023. <https://arxiv.org/abs/2302.06590>
- METR, „Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity”, 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, raportul 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
