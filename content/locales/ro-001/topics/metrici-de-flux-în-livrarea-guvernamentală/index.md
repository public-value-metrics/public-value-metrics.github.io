# Metrici de flux în livrarea guvernamentală

Metricile de flux — legea lui Little, limitele de lucru în desfășurare (WIP) și eficiența fluxului — descriu cât de repede se mișcă munca printr-un sistem cu capacitate limitată. O tablă de sprint este un astfel de sistem; o coadă de cereri de beneficii, un registru de cereri de urbanism sau un volum de dosare de vize sunt exact aceeași matematică într-o altă uniformă.

## De ce contează

Volumele de dosare guvernamentale sunt sisteme de cozi, iar sistemele de cozi se supun legilor cozilor indiferent dacă le măsoară cineva. Termenele legale de soluționare fac aceasta explicit: conform regimului Town and Country Planning, majoritatea cererilor minore de urbanism au o țintă legală de soluționare de 8 săptămâni, iar cele majore 13 săptămâni — un angajament de timp de ciclu înscris direct în lege. Restanța dosarelor de azil de la Home Office, controlată în repetate rânduri de National Audit Office și Home Affairs Select Committee, este un caz bine documentat al unui sistem public în care munca în desfășurare a crescut mai repede decât debitul o perioadă susținută, împingând timpii de ciclu mult peste orice așteptare legală sau de serviciu. Metricile de flux oferă atât inginerilor, cât și managerilor de lucru cu dosare un vocabular comun, cantitativ, pentru exact acest mod de eșec, în loc să-l lase o „problemă de restanță” calitativă.

## Matematica

```
Legea lui Little:  WIP = Debit × Timp de ciclu
              →    Timp de ciclu = WIP / Debit

Eficiența fluxului = timp activ (de atingere) / timp total de ciclu   (Vacanti)

Efectul limitei WIP: la debit fix, înjumătățirea WIP înjumătățește aproximativ
timpul mediu de ciclu (legea lui Little rearanjată) — pârghia disponibilă
fără a adăuga personal.
```

Vezi [metricile DORA pentru valoarea publică](../metricile-dora-pentru-valoarea-publică/) pentru matematica echivalentă aplicată conductelor de implementare software în loc de lucrul cu dosare.

## Exemplu lucrat

**Departament de urbanism al unei autorități locale**: 400 de cereri deschise în orice moment (WIP), echipa soluționează 50 de cereri/săptămână (debit).

```
Timp de ciclu = WIP / Debit = 400 / 50 = 8 săptămâni
```

Aceasta cade exact pe ținta legală de 8 săptămâni pentru cererile minore — fără marjă, ceea ce înseamnă că orice variabilitate a cererii primite sau a timpului de răspuns al consultaților împinge soluționările peste termenul legal.

**Eficiența fluxului**: din acele 8 săptămâni (56 de zile calendaristice), o cerere are de obicei circa 6 ore de timp real de procesare de către un lucrător.

```
Eficiența fluxului = 6 ore / (56 zile × 8 ore lucrătoare/zi)
                   = 6 / 448 ≈ 1,3%
```

Reperul lui Vacanti pentru echipele software plasează eficiența tipică a fluxului la 15–20%; munca guvernamentală cu dosare, cu multiple predări către consultați legali și ferestre de consultare publică, rulează adesea cu un ordin de mărime mai jos. Cele 98,7% din timpul de „așteptare” sunt locul unde se duc de fapt cele opt săptămâni — nu în capacitatea lucrătorilor.

**Intervenția cu limită WIP**: plafonarea cererilor deschise per lucrător la 15 în loc de 25 nelimitate (menținând debitul constant) mută WIP de la 400 la aproximativ 240 pe o echipă de 16 persoane:

```
Timp nou de ciclu = 240 / 50 = 4,8 săptămâni
```

O reducere aproape la jumătate a timpului de ciclu dintr-o schimbare de politică, nu dintr-o creștere de personal — aceeași pârghie pe care o trag echipele de livrare în stil DORA când plafonează WIP-ul sprintului.

## Legătura cu ingineria software

Metricile de flux sunt limbajul comun dintre tabla Kanban a unei echipe de livrare și podeaua de lucru cu dosare pentru care construiește software: coada unui lucrător și coada de pull request-uri sunt ambele guvernate de legea lui Little și amândouă își depășesc țintele de timp de ciclu în același fel — prea mult WIP față de debit. Aceasta contează direct pentru [costul întârzierii în programele publice](../costul-întârzierii-în-programele-publice/): timpul de ciclu × CoD sunt lirele aflate în coadă în orice moment, și pentru [standardele de servicii și metricile de tranzacții](../standarde-de-servicii-și-metrici-de-tranzacții/), unde o țintă publicată de timp de răspuns este un angajament de timp de ciclu pe care doar metricile de flux îl pot diagnostica atunci când este ratat. Software-ul unui sistem de lucru cu dosare ar trebui să expună WIP și timpul de ciclu ca metrici operaționale de primă clasă, nu să le îngroape într-un sistem de gestionare a cazurilor pe care nu-l interoghează nimeni.

## Capcane

- **Adăugarea limitelor WIP fără remedierea adevăratului blocaj**: dacă restricția este timpul de răspuns al unui consultat legal extern, plafonarea WIP-ului lucrătorilor doar mută coada în amonte în loc s-o scurteze.
- **Tratarea eficienței fluxului ca țintă de manipulat**: grăbirea celor 1,3% de timp activ abia mișcă timpul de ciclu; pârghia este aproape mereu în stările de așteptare, ceea ce înseamnă de obicei reproiectarea procesului, nu viteza lucrătorilor.
- **Ignorarea variabilității**: legea lui Little descrie medii; un volum de dosare cu varianță mare a cererii are nevoie de capacitate tampon, nu doar de o limită WIP mai strictă, altfel termenele legale vor fi în continuare ratate pe coada volatilă chiar și când media se îmbunătățește.
- **Măsurarea inconsistentă a WIP**: un caz „deschis” în sistemul de evidență dar de fapt blocat în așteptarea unui terț este în continuare WIP; excluderea lui flatează cifrele fără a schimba realitatea vizibilă cetățenilor.

## Surse

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, termene legale pentru cererile de urbanism. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, rapoarte privind dosarele de azil și cazarea la Home Office. <https://www.nao.org.uk/>
