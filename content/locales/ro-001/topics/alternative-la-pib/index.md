# Alternative la PIB

Alternativele la PIB sunt metrici construite pentru a surprinde ceea ce produsul intern brut ignoră structural: munca neplătită de îngrijire, epuizarea mediului, distribuția veniturilor și dacă creșterea îmbunătățește efectiv vieți. Cele mai cunoscute sunt Indicatorul Progresului Real (Genuine Progress Indicator, GPI) și Indicele Fericirii Naționale Brute (Gross National Happiness, GNH) al Bhutanului; argumentul pentru luarea lor în serios a fost făcut cel mai influent de Comisia Stiglitz-Sen-Fitoussi din 2009. Pentru inginerii care construiesc tablouri de bord guvernamentale sau sisteme KPI, „care număr se consideră progres” este o decizie de proiectare cu consecințe reale asupra a ceea ce se finanțează.

## De ce contează

Simon Kuznets, care a construit conturile naționale ale SUA în anii 1930, a avertizat Congresul în 1934 că „bunăstarea unei națiuni poate fi greu dedusă din măsurarea venitului național” — o rezervă pe care cifra a depășit-o aproape imediat. PIB-ul numără curățarea după o deversare de petrol drept creștere și îngrijirea neplătită a copiilor de către un părinte drept nimic; nu distinge cheltuielile care construiesc bunăstare durabilă de cele care doar compensează un prejudiciu deja produs. Comisia Stiglitz-Sen-Fitoussi, convocată de președintele francez Nicolas Sarkozy și prezidată de Joseph Stiglitz, Amartya Sen și Jean-Paul Fitoussi, a raportat în 2009 că sistemele statistice ar trebui să mute accentul „de la măsurarea producției economice la măsurarea bunăstării oamenilor” și că durabilitatea ar trebui urmărită separat de bunăstarea curentă, nu comasată într-un singur număr. Alternativele la PIB operaționalizează această recomandare. GPI, dezvoltat de think tank-ul Redefining Progress în anii 1990 și construit pe Measure of Economic Welfare al lui William Nordhaus și James Tobin din 1972, pornește de la consumul personal (ca PIB-ul) și apoi adaugă beneficiile non-piață pe care PIB-ul le omite (munca în gospodărie, voluntariatul) scăzând costurile defensive și de epuizare (criminalitate, poluare, navetă, retragerea resurselor) pe care PIB-ul le numără greșit ca pozitive. Indicele GNH al Bhutanului, administrat de GNH Centre Bhutan (<https://www.gnhcentre.bt/>), merge și mai departe, înlocuind creșterea ca obiectiv constituțional declarat al țării: agregă 33 de indicatori în 9 domenii — bunăstare psihologică, sănătate, educație, utilizarea timpului, diversitate culturală, guvernanță, vitalitatea comunității, diversitate ecologică și nivel de trai — într-un singur scor bazat pe suficiență, folosit direct pentru a filtra propunerile de politici guvernamentale.

## Matematica

```
GPI = cheltuieli de consum personal
      + beneficii non-piață (muncă în gospodărie, voluntariat, învățământ superior)
      − costuri defensive și sociale (criminalitate, poluare, navetă, destrămarea familiei)
      − epuizarea capitalului natural și social (retragerea resurselor, pierderea terenurilor agricole)

Scor de suficiență GNH, per domeniu:
  o persoană este „suficientă” într-un domeniu odată ce depășește pragul acestuia pentru fiecare indicator
  Indice de fericire = (% din populație suficientă în ≥ 6 din 9 domenii)
                       + (deficitul mediu ponderat al minorității „încă nefericite”)
```

## Exemplu lucrat

**Regiune, GPI**: consumul personal este 50 mld. $. Adăugăm valoarea estimată a muncii în gospodărie și a voluntariatului de 12 mld. $ (tarife salariale de cost de înlocuire — vezi [valoarea timpului voluntarilor](../valoarea-timpului-voluntarilor/)). Scădem costurile anuale estimate ale congestiei din navetă (3 mld. $), criminalității (4 mld. $) și epuizării resurselor pe termen lung (6 mld. $):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 (mld. $)
```

Dacă PIB-ul a crescut de la 50 mld. $ la 55 mld. $ în acel an (+10%), dar costurile defensive și de epuizare au crescut mai repede decât consumul, GPI poate scădea chiar și când PIB-ul crește — „ipoteza pragului” pe care cercetătorii GPI o citează pentru economiile cu venituri mari de aproximativ din anii 1970, când creșterea a continuat să urce în timp ce GPI a stagnat.

**Cetățean, GNH**: un respondent depășește pragul de suficiență în 7 din 9 domenii (sănătate, educație, nivel de trai, vitalitatea comunității, diversitate culturală, diversitate ecologică, utilizarea timpului), dar nu atinge în bunăstarea psihologică și guvernanță. Deoarece 7 ≥ 6, este numărat „fericit” în numărătoare; indicele urmărește separat adâncimea celor două deficite ale sale, astfel încât o trecere la limită să nu fie de nedistins de una confortabilă.

## Legătura cu ingineria software

- Un tablou de bord KPI modelat doar după debit sau cheltuieli (tiparul PIB) va rata sistematic prejudiciul produs în generarea acelui debit — volumul de tichete de suport tratat ca „angajament” în loc de „suferința utilizatorilor” este versiunea din livrarea software a numărării unei deversări de petrol ca creștere.
- Contabilitatea în stil GPI este un tipar de audit util pentru orice set de [KPI-uri ale sectorului public](../kpi-urile-sectorului-public/): pentru fiecare metrică de realizare de titlu, întrebați ce cost defensiv suportă pe tăcute (refacere, răspuns la incidente, epuizare profesională) și scădeți-l, așa cum GPI scade cheltuielile defensive din consum.
- Metoda suficienței pe domenii a GNH — admis/respins per dimensiune, apoi agregare — este structural aceeași tehnică cu [analiza decizională multicriterială](../analiza-decizională-multicriterială/) și merită refolosită oriunde un scor scalar unic ar ascunde o dimensiune critică eșuată.

## Capcane

- **Tratarea GPI ca un cont național precis** — spre deosebire de PIB, GPI nu are o metodologie unică standardizată; studii diferite ponderează diferit costurile navetei, timpul voluntarilor sau epuizarea resurselor, deci comparațiile GPI între studii sunt mult mai puțin fiabile decât comparațiile PIB între țări.
- **Importul GNH în bloc într-o altă cultură politică** — ponderile domeniilor și pragurile de suficiență au fost stabilite prin consultare bhutaneză; copierea numărului fără procesul de consultare de bază produce o metrică goală în care nu are încredere nimeni.
- **Presupunerea că o alternativă la PIB înlocuiește analiza cost-beneficiu** — sunt indicatori diagnostici, la nivelul întregii economii, nu instrumente de decizie pentru un singur program; folosiți pentru aceasta [analiza cost-beneficiu socială](../analiza-cost-beneficiu-socială/).

## Surse

- Stiglitz JE, Sen A, Fitoussi J-P. „Report by the Commission on the Measurement of Economic Performance and Social Progress.” (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. „The Genuine Progress Indicator: A Tool for Sustainable Development.”
- Nordhaus WD, Tobin J. „Is Growth Obsolete?” (1972), NBER.
