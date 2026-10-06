# KPI-urile sectorului public

Un indicator-cheie de performanță (KPI) este o măsură aleasă, urmărită, care reprezintă dacă un serviciu public își face bine treaba. În guvern, alegerea unui KPI nu este niciodată neutră: deoarece KPI-urile se leagă de bugete, clasamente și cariere, actul de a selecta unul modelează comportamentul tuturor celor din aval, adesea mai mult decât politica care a creat serviciul.

## De ce contează

Observația lui Charles Goodhart din 1975 despre politica monetară — popularizată ulterior de Marilyn Strathern ca „când o măsură devine țintă, încetează să mai fie o măsură bună” — este cea mai importantă etichetă de avertizare din managementul performanței sectorului public. Un KPI ales să *descrie* un sistem începe să *distorsioneze* acel sistem în clipa în care resursele, salarizarea sau supraviețuirea politică sunt legate de el. Ilustrarea canonică este timpul de răspuns al ambulanțelor NHS: când ținta de opt minute pentru răspunsul de Categoria A a devenit obligatorie, unele trusturi s-a dovedit că „stivuiau” ambulanțe chiar în afara ceasului timpului de răspuns sau reclasificau apeluri, pentru a atinge cifra fără a schimba rezultatele pacienților. Îndrumările National Audit Office al Regatului Unit privind alegerea și utilizarea indicatorilor de performanță — expuse în rapoartele sale de valoare pentru bani și în cadrul său „Performance Measurement by Regulators” și „Choosing the Right FABRIC” (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) — există tocmai pentru că departamentele alegeau în continuare indicatori ușor de raportat în loc de indicatori greu de manipulat. Un inginer software care livrează tabloul de bord după care va fi judecat un ministru sau un director proiectează, vrând-nevrând, structura de stimulente a unei instituții publice.

## Matematica

Proiectarea KPI-urilor este un subiect în formă de cadru, dar *evaluarea* unui KPI candidat este o listă de verificare repetabilă, nu o formulă:

```
Pentru fiecare KPI candidat, notați în raport cu:
  Fit for purpose  — măsoară rezultatul sau un proxy aflat la câțiva pași distanță?
  Appropriate      — aparține celor care îl pot influența efectiv?
  Balanced         — este asociat cu o contra-metrică care prinde manipularea?
  Robust           — poate supraviețui unui audit sau este autoraportat și neverificabil?
  Integrated       — se potrivește cu setul mai larg sau împinge împotriva altui KPI?
  Cost-effective   — nu costă colectarea lui mai mult decât decizia pe care o informează?

Împărțirea în conducător vs. întârziat:
  Indicator conducător (leading)  → prezice rezultatul viitor, dar adesea manipulabil
                                    (ex. apeluri răspunse <60 s)
  Indicator întârziat (lagging)   → confirmă că rezultatul s-a produs, dar vine prea târziu
                                    pentru a conduce (ex. sondaj anual de satisfacție)
  Un set de KPI apărabil asociază cel puțin unul din fiecare per obiectiv.
```

## Exemplu lucrat

**Trust de ambulanțe**: un trust raportează un KPI de timp de răspuns Categoria A (cu pericol pentru viață) de „75% din apeluri răspunse în 8 minute”. Într-un trimestru, intră 6.000 de apeluri de Categoria A; 4.500 sunt îndeplinite în 8 minute, dând 75,0% — aparent la țintă.

```
KPI de titlu = 4.500 / 6.000 × 100 = 75,0%  (îndeplinește pragul de 75%)
```

Dar un audit Goodhart adaugă o contra-metrică: timpul mediu de răspuns pentru cele mai lente 10% dintre apeluri.

```
Timp mediu de răspuns pentru ultima decilă = 34 de minute (de la 19 minute acum doi ani)
```

Trustul atinge ținta în timp ce coada — apelurile cel mai probabil să fie cu adevărat amenințătoare de viață atunci când trierea este imperfectă — s-a înrăutățit mult, pentru că echipajele sunt prioritizate spre apeluri apropiate de marginea de 8 minute în loc de urgența clinică. KPI-ul unic a spus o poveste falsă; KPI-ul asociat a spus-o pe cea adevărată.

## Legătura cu ingineria software

Inginerii care construiesc tablouri de bord de performanță pentru guvern proiectează, funcțional, API-ul de stimulente al organizației. Implicații practice: instrumentați *numitorul* la fel de riguros ca numărătorul (un KPI raportat ca procent gol invită la manipularea numitorului — vezi [costul per tranzacție](../costul-per-tranzacție/) pentru aceeași capcană în serviciile digitale); încorporați contra-metrici în același tablou de bord în loc de un raport separat pe care nu-l citește nimeni, astfel încât manipularea să fie vizibilă în punctul deciziei; și versionați definiția KPI, deoarece o redefinire tăcută (schimbarea a ceea ce se consideră „apel”, „caz” sau „finalizare”) este funcțional echivalentă cu schimbarea țintei fără anunț. Un [tablou de scor al valorii publice](../tabloul-de-scor-al-valorii-publice/) este o modalitate structurată de a împiedica citirea izolată a unui singur KPI, iar [responsabilitatea bazată pe rezultate](../responsabilitatea-bazată-pe-rezultate/) este disciplina alegerii KPI-urilor la nivel de populație pe care o singură echipă nu le poate distorsiona unilateral.

## Capcane

- **Alegerea metricii ușor de colectat în detrimentul celei semnificative**: timpul de răspuns la apel este trivial de înregistrat; dacă apelul a rezolvat problema cetățeanului nu este — dar doar al doilea este rezultatul. Rezistați tentației de a vă baza pe ce emite deja sistemul.
- **Nicio contra-metrică**: orice KPI atașat de bani sau reputație va fi manipulat la margine; livrați-l cu o metrică asociată care prinde probabilul vector de manipulare înainte de a-l publica.
- **Redefinirea metricii fără jurnal de modificări**: schimbarea „apeluri primite” cu „apeluri răspunse” pentru a flata o tendință distruge credibilitatea seriei de timp în clipa în care este descoperită — publicați întotdeauna un jurnal de modificări ale definițiilor alături de cifre.
- **Confundarea activității cu rezultatul**: numărarea inspecțiilor finalizate este o realizare; numărarea spațiilor aduse în conformitate este mai aproape de rezultat (vezi [rezultate versus realizări](../rezultate-versus-realizări/)).

## Surse

- National Audit Office, „Choosing the Right FABRIC: A Framework for Performance Information.” <https://www.nao.org.uk/>
- Marilyn Strathern, „‚Improving Ratings’: Audit in the British University System,” *Social Anthropology*, 1997 (formularea legii lui Goodhart așa cum este citată frecvent).
- National Audit Office, investigații privind raportarea performanței serviciilor de ambulanță NHS. <https://www.nao.org.uk/>
