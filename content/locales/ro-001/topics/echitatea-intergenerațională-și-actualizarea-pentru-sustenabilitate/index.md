# Echitatea intergenerațională și actualizarea pentru sustenabilitate

Actualizarea costurilor și beneficiilor viitoare la valoarea prezentă este practică standard în evaluarea publică — vezi [rata de actualizare socială](../rata-de-actualizare-socială/) — dar orice rată de actualizare pozitivă, capitalizată pe decenii sau secole, micșorează viitorul îndepărtat către zero în termenii de azi. Pentru deciziile cu consecințe la un secol sau mai mult — schimbările climatice, deșeurile nucleare, pierderea biodiversității, sustenabilitatea pensiilor — acest fapt matematic devine unul etic: actualizarea standard poate face ca un prejudiciu catastrofal adus generațiilor viitoare să pară, în termeni de valoare prezentă, abia vrednic de evitat.

## De ce contează

Ecuația Ramsey, derivată de Frank Ramsey în 1928, descompune rata de actualizare în două componente: preferința pură pentru timp (δ, cât preferăm pur și simplu prezentul viitorului, independent de bogăție) și efectul creșterii bogăției (η×g, cât actualizăm pentru că se așteaptă ca generațiile viitoare să fie mai bogate, deci o liră în plus contează mai puțin pentru ele). Rata standard de actualizare pe termen lung din Green Book-ul britanic este construită pe această ecuație și urmează un program *descrescător*, nu o rată fixă — un design înrădăcinat în munca lui Martin Weitzman privind „actualizarea gamma”, care arată că atunci când rata viitoare de actualizare este ea însăși incertă, rata echivalentă-certitudine pe care ar trebui s-o aplicați scade matematic în timp, deoarece scenariile cu rată mică ajung să domine cu cât te uiți mai departe. Stern Review on the Economics of Climate Change (2006), condus de Sir Nicholas Stern, a dus dezbaterea etică mai departe: Stern a argumentat că preferința pură pentru timp ar trebui stabilită aproape de zero (a folosit δ ≈ 0,1%, reflectând doar mica probabilitate a unei catastrofe care pune capăt civilizației, nu o preferință autentică pentru prezent în fața viitorului), producând o rată de actualizare efectivă mult mai joasă decât practica convențională Green Book și, în consecință, un argument mult mai mare în prezent pentru acțiune climatică. Criticii (în special William Nordhaus) au susținut că rata aproape nulă a lui Stern era defensabilă etic, dar incompatibilă cu comportamentul observat real de economisire și investiție. Dezacordul nu este o notă de subsol tehnică — este cel mai mare motiv pentru care doi economiști la fel de riguroși pot ajunge la concluzii dramatic diferite despre cât ar trebui să sacrifice generația prezentă pentru viitor și este motivul pentru care software-ul care susține evaluarea investițiilor publice pe orizont lung trebuie să-și expună ipotezele de actualizare în loc să le îngroape într-o valoare implicită de foaie de calcul.

## Matematica

```
Ecuația Ramsey:   r = δ + η × g

  r = rata de actualizare socială
  δ = preferința pură pentru timp (rata nerăbdării, independentă de bogăție)
  η = elasticitatea utilității marginale a consumului (valoarea descrescătoare a
      consumului suplimentar pe măsură ce oamenii se îmbogățesc)
  g = rata de creștere așteptată a consumului pe cap de locuitor

Programul descrescător pe termen lung Green Book (aproximativ, benzile publicate curent):
  Anii 0–30:    3,5%
  Anii 31–75:   3,0%
  Anii 76–125:  2,5%
  Anii 126–200: 2,0%
  Anii 201–300: 1,5%
  Anii 301+:    1,0%

Parametrii Stern Review: δ ≈ 0,1%, η = 1, g ≈ 1,3%  → r ≈ 1,4%
```

## Exemplu lucrat

**Valoarea de azi a 1 £ de prejudiciu evitat peste 100 de ani**, sub trei regimuri de actualizare:

```
Rata fixă pe termen scurt Green Book (3,5%, constantă timp de 100 de ani):
  PV = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ 0,032 £   (3,2 pence)

Programul descrescător Green Book (3,5% pentru anii 1–30, 3,0% pentru anii 31–75,
2,5% pentru anii 76–100):
  factor(1–30)   = 1,035^30  ≈ 2,807
  factor(31–75)  = 1,03^45   ≈ 3,782
  factor(76–100) = 1,025^25  ≈ 1,854
  factor total ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  PV = 1 / 19,68 ≈ 0,051 £   (5,1 pence)

Preferință pură pentru timp aproape nulă în stil Stern (r ≈ 1,4% fixă):
  PV = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ 0,250 £   (25,0 pence)
```

Aceeași liră de prejudiciu evitat peste un secol valorează 3,2 p, 5,1 p sau 25 p astăzi în funcție exclusiv de convenția de actualizare folosită — un interval de aproape opt ori care determină dacă un proiect de atenuare a schimbărilor climatice, cu cost inițial ridicat și câștig peste un secol, depășește măcar o ștachetă de VAN pozitivă. Acesta este mecanismul din spatele avertismentului central al subiectului: la orice rată fixă semnificativ pozitivă, prejudiciul viitor suficient de îndepărtat este șters aritmetic din evaluare, indiferent de gravitatea lui reală.

## Legătura cu ingineria software

- Orice instrument de evaluare sau de caz de afaceri pe orizont lung (infrastructură, adaptare climatică, modelare a pensiilor) ar trebui să implementeze programul *descrescător* al Green Book, nu o singură rată fixă — o valoare implicită de rată fixă încorporează tacit o părtinire anti-viitor mult mai puternică decât specifică îndrumările actuale ale guvernului Regatului Unit.
- Rata de actualizare și orizontul ar trebui mereu expuse ca parametri vizibili, auditabili, în software-ul de evaluare, cu sensibilitatea calculului la ei arătată explicit (ca în exemplul lucrat de mai sus) — îngroparea ratei într-un fișier de configurare invită exact „alegerea etică ascunsă” despre care avertizează dezbaterea Stern-Nordhaus; aceasta se asociază cu punctul de transparență din [contabilitatea capitalului natural](../contabilitatea-capitalului-natural/) și stă la baza subiectului [ratei de actualizare sociale](../rata-de-actualizare-socială/) în general.
- Acolo unde beneficiile unui program sunt explicit intergeneraționale (apărare împotriva inundațiilor, restaurarea capitalului natural, infrastructură digitală pe termen lung), o [analiză cost-beneficiu socială](../analiza-cost-beneficiu-socială/) ar trebui să raporteze rezultatele sub cel puțin două ipoteze de actualizare (standardul Green Book și un caz de sensibilitate cu rată mică) în loc de o singură estimare punctuală, astfel încât factorii de decizie să vadă cum alegerea ratei de actualizare singură mută răspunsul.

## Capcane

- **Prezentarea unui singur VAN actualizat fără un interval de sensibilitate** — dat fiind cât schimbă răspunsul rata de actualizare singură pentru proiectele pe orizont lung, un VAN la o singură rată supraestimează sensibil precizia; raportați întotdeauna un interval care cuprinde cel puțin standardul Green Book și un scenariu cu rată mică.
- **Aplicarea ratei fixe pe termen scurt (3,5%) unei evaluări pe mai multe secole** — propriile îndrumări ale Green Book specifică programul descrescător tocmai pentru că rata fixă a fost judecată necorespunzătoare după aproximativ 30 de ani; folosirea ei oricum subestimează costurile pe termen lung.
- **Tratarea lui δ (preferința pură pentru timp) ca parametru pur tehnic** — valoarea aproape nulă a lui Stern și valoarea implicită mai mare a Green Book sunt ambele apărabile doar ca poziții etice despre cât de multă greutate datorează prezentul viitorului, nu ca numere „corecte” sau „incorecte” empiric; software-ul ar trebui să facă ipoteza vizibilă în loc să prezinte o cifră ca fiind obiectiv corectă.

## Surse

- Stern N. „The Economics of Climate Change: The Stern Review.” Cambridge University Press, 2006.
- Ramsey FP. „A Mathematical Theory of Saving.” The Economic Journal, 1928.
- Weitzman ML. „Gamma Discounting.” American Economic Review, 2001.
- HM Treasury. „The Green Book: Central Government Guidance on Appraisal and Evaluation” (Anexa 6, programul ratei de actualizare).
- Nordhaus WD. „A Review of the Stern Review on the Economics of Climate Change.” Journal of Economic Literature, 2007.
