# Raportarea rezultatelor granturilor (IRIS+)

Raportarea rezultatelor granturilor este practica prin care beneficiarii de granturi raportează înapoi finanțatorilor metrici de rezultat standardizate, comparabile — spre deosebire de situația în care fiecare finanțator își inventează propriul șablon de raportare la comandă. IRIS+, întreținut de Global Impact Investing Network (GIIN), este cel mai larg adoptat astfel de standard: un catalog de metrici de performanță socială, de mediu și financiară predefinite pe care investitorii cu impact și, tot mai mult, fundațiile care acordă granturi le cer sau le recomandă beneficiarilor.

## De ce contează

Înaintea raportării standardizate, fiecare fundație cerea beneficiarilor un set diferit de indicatori într-un format diferit, iar o organizație caritabilă de mărime medie cu zece finanțatori putea rula zece procese de raportare paralele pentru muncă suprapusă — un factor bine documentat al poverii de raportare pe care standardizarea rezultatelor granturilor există s-o reducă. IRIS+ abordează aceasta oferind finanțatorilor și beneficiarilor un vocabular comun: Seturi de metrici de bază (Core Metrics Sets) grupate pe teme (ex. locuințe accesibile, acces la energie curată, incluziune financiară), fiecare metrică definită suficient de precis încât „locuri de muncă create” sau „gospodării servite” să însemne același lucru indiferent cine raportează, și aliniate cu Obiectivele de Dezvoltare Durabilă ale ONU, astfel încât un finanțator să poată agrega datele la nivel de beneficiar într-o narațiune ODD la nivel de portofoliu. GIIN raportează că metricile IRIS sunt folosite de aproximativ jumătate dintre investitorii cu impact și de marea majoritate a managerilor de fonduri, băncilor și instituțiilor de finanțare a dezvoltării active în domeniu.

Standardizarea contează cel mai mult acolo unde interacționează cu [rezultate versus realizări](../rezultate-versus-realizări/): IRIS+ împinge raportarea către metrici definite de rezultat și impact în loc de orice jurnalizează întâmplător sistemul existent de gestionare a cazurilor al unui beneficiar, exact lacuna pe care o descriu [costul per rezultat](../costul-per-rezultat/) față de [costul per beneficiar](../costul-per-beneficiar/).

## Matematica

Raportarea rezultatelor granturilor este un cadru și un proces, nu o formulă:

```
1. Finanțatorul selectează un Set de metrici de bază relevant pentru tema grantului
   (ex. IRIS+ „Incluziune financiară” sau „Agricultură sustenabilă”)
2. Fiecare metrică are o definiție, o unitate și o metodă de calcul fixe
   publicate de GIIN — nu inventate pentru fiecare finanțator
3. Beneficiarul raportează față de aceleași definiții de metrici către toți
   finanțatorii săi care folosesc acel standard, reducând efortul duplicat de raportare
4. Finanțatorul agregă metricile la nivel de beneficiar în raportare la nivel de portofoliu,
   comparabilă de la an la an și între beneficiari care folosesc aceeași metrică
```

Câștigul de eficiență este combinatoriu: standardizarea a N finanțatori × M beneficiari pe un singur vocabular comun transformă N×M relații de raportare la comandă în aproximativ N+M mapări față de un singur standard.

## Exemplu lucrat

**Un beneficiar cu trei finanțatori, înainte de standardizare**: raportează „persoane servite” către Finanțatorul 1 folosind o definiție de numărare a persoanelor, „beneficiari atinși” către Finanțatorul 2 folosind o definiție de gospodărie și „persoane afectate” către Finanțatorul 3 folosind o definiție de episod de serviciu (astfel încât o persoană care vizitează de două ori se numără de două ori). Trei rapoarte, trei numere, niciunul comparabil și niciunul comparabil cu numerele altui beneficiar nici măcar în portofoliul aceluiași finanțator.

**Același beneficiar sub IRIS+**: raportează față de o metrică IRIS+ definită de persoane atinse, alături de o metrică de rezultat definită din Setul de metrici de bază relevant, folosind metodologia de calcul publicată de GIIN pentru ambele. Toți trei finanțatorii primesc acum același număr, calculat la fel, și pot compara costul per unitate definită IRIS+ al acestui beneficiar cu alți beneficiari din portofoliul lor folosind metrica identică — echivalentul, la scară de infrastructură de raportare, al existenței unei [baze de date de costuri unitare](../baze-de-date-de-costuri-unitare/) partajate.

## Legătura cu ingineria software

Platformele de gestionare a granturilor ar trebui să trateze identificatorii de metrici IRIS+ ca o cheie externă, nu ca text liber: stocarea codului publicat al metricii alături de valoarea raportată a unui beneficiar (în loc de un câmp inventat local numit „beneficiari”) este ceea ce face posibilă mai târziu agregarea între finanțatori și între portofolii fără un proiect de curățare a datelor. Acolo unde o platformă trebuie să-i susțină pe finanțatorii care nu au adoptat IRIS+, designul pragmatic este să se permită ca o metrică locală să fie mapată la cea mai apropiată definiție IRIS+ în loc să se forțeze fiecare finanțator pe standard imediat — comparabilitatea se îmbunătățește treptat pe măsură ce mai mult din graf se mapează pe identificatori partajați. Vezi subiectul înrudit [costul per rezultat](../costul-per-rezultat/) pentru ce ar trebui folosite numerele raportate să calculeze odată colectate.

## Capcane

- **Tratarea adoptării IRIS+ ca comparabilitate automată.** Doi beneficiari pot raporta ambii față de aceeași metrică IRIS+ și totuși să nu fie comparabili dacă calitatea datelor de bază sau ipotezele lor contrafactuale diferă; standardul fixează definiții, nu rigoarea măsurării.
- **Metrici „aliniate IRIS” inventate de finanțator.** O metrică doar inspirată din limbajul IRIS+, dar nu din definiția publicată reală, reintroduce fragmentarea pe care standardul există s-o rezolve.
- **Oboseală de raportare din supraselectare.** A cere unui beneficiar să raporteze față de un întreg Set de metrici de bază când doar două-trei metrici sunt relevante pentru decizie recreează problema poverii într-un ambalaj standardizat.
- **Nicio metrică de rezultat deloc.** IRIS+ include multe metrici pure de realizare (ex. numărători de persoane servite); selectarea doar a acestora, și a niciuneia dintre metricile de nivel de rezultat, produce raportare în formă de [cost per beneficiar](../costul-per-beneficiar/) sub eticheta raportării rezultatelor.

## Surse

- GIIN, sistemul IRIS+. <https://iris.thegiin.org/>
- GIIN, catalogul de metrici IRIS+. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
