# Metrici de încredere și legitimitate

Legitimitatea și sprijinul reprezintă unul dintre cele trei brațe ale „triunghiului strategic” al lui Mark Moore din *Creating Public Value* (1995) — alături de valoarea publică propriu-zisă și capacitatea operațională — și este brațul cel mai des lăsat nemăsurat, deoarece spre deosebire de un buget sau o numărătoare de realizări, legitimitatea nu are un singur număr evident atașat. Metricile de încredere și legitimitate sunt familia de măsuri proxy pe care guvernele le folosesc pentru a umple această lacună: sondaje de încredere instituțională, evaluări de încredere ale organismelor de supraveghere, date despre plângeri și contestații și indicatori de sprijin politic/legislativ.

## De ce contează

Argumentul lui Moore este că un manager public care livrează valoare reală, dar pierde legitimitatea politică și publică, va pierde în cele din urmă mediul autorizant necesar pentru a continua să livreze — finanțarea este tăiată, mandatele sunt restrânse, iar serviciul este înfometat indiferent cât de bune sunt rezultatele sale. Legitimitatea nu este deci un adaos de relații publice atașat unui tablou de scor al livrării; este un input portant pentru faptul dacă misiunea poate continua deloc, motiv pentru care stă ca perspectivă egală într-un [tablou de scor al valorii publice](../tabloul-de-scor-al-valorii-publice/) și nu ca notă de subsol. Programul de sondaje „Trust in Government” al OECD este principala încercare transnațională de a cuantifica aceasta: urmărește ponderea cetățenilor din statele membre OECD care spun că au încredere în guvernul lor național, iar datele sale pe termen lung arată că încrederea este foarte sensibilă la șocuri — atât criza financiară din 2008, cât și pandemia COVID-19 au produs oscilații bruște la nivel național, adesea urmate doar de o redresare parțială, analiza OECD constatând constant că *competența* percepută (livrează guvernul ce promite) și *corectitudinea/integritatea* percepută (este văzut guvernul acționând fără corupție sau favoritism) sunt cei doi factori cei mai puternici ai cifrei de încredere, distincți de satisfacția față de vreo singură tranzacție. Guvernele încearcă tot mai mult să operaționalizeze legitimitatea și la un nivel mai granular — regulatorii și inspectoratele independente ale Regatului Unit (National Audit Office, Parliamentary and Health Service Ombudsman, regulatori sectoriali precum Ofsted și Care Quality Commission) funcționează ca verificări instituționalizate ale legitimității, convertind „mai are publicul încredere în acest serviciu” în evaluări auditabile.

## Matematica

Încrederea și legitimitatea este un subiect în formă de cadru ai cărui proxy cantitativi utilizabili sunt:

```
Indice de încredere instituțională (în stil OECD)
  = % din respondenții sondajului care răspund „da” la o întrebare de încredere în guvern,
    urmărit în timp, dezagregat după grup demografic

Set de proxy-uri ale legitimității (niciun număr singur nu înlocuiește constructul):
  - Plângeri întemeiate la 1.000 de utilizatori ai serviciului (date ale ombudsmanului sau interne)
  - Rata de succes a controlului judiciar / contestațiilor împotriva deciziilor organismului
  - Evaluare a regulatorului/inspectoratului independent (ex. benzi de la „remarcabil” la „inadecvat”)
  - Voturi de încredere ale comisiei legislative/de supraveghere sau frecvența rapoartelor critice
  - Volumul cererilor de acces la informații publice și rata de dezvăluire/refuz, ca proxy
    pentru transparența percepută

Legitimitatea este coroborată, nu calculată: o evaluare apărabilă a legitimității
triangulează mai multe dintre cele de mai sus în loc să se bazeze pe un singur proxy.
```

## Exemplu lucrat

**Autoritate fiscală națională**: triangularea legitimității pentru un raport anual de valoare publică.

```
Proxy de încredere în stil OECD (sondaj de încredere specific departamentului):
  58% dintre respondenți spun că au încredere în autoritate că „mă va trata corect” (în scădere
  de la 64% cu doi ani în urmă)

Date despre plângeri:
  Plângeri întemeiate: 4,2 la 1.000 de interacțiuni cu contribuabilii (în creștere de la 3,1 la 1.000)

Trimiteri către ombudsman:
  Trimiteri către Adjudicator's Office independent: 1.850 în an, dintre care
  61% întemeiate integral sau parțial împotriva autorității (în creștere de la 48% anul precedent)

Citind toate trei împreună: încrederea scade, plângerile întemeiate cresc, iar
constatările independente ale ombudsmanului se plasează tot mai des împotriva autorității —
trei semnale independente care converg în aceeași direcție, ceea ce face din aceasta
o constatare credibilă de legitimitate, nu zgomot într-o singură serie.
```

Mișcarea uneia singure dintre aceste cifre ar fi o dovadă slabă; trei măsuri independente care se mișcă împreună în aceeași perioadă este tiparul care face apărabilă o afirmație de legitimitate.

## Legătura cu ingineria software

Metricile de legitimitate sunt rareori produse de tabloul de bord al unei singure echipe, ceea ce este în sine lecția de proiectare: construiți conducte de raportare care pot ingera și reconcilia date din surse externe independente (sisteme de gestionare a cazurilor ale ombudsmanului, fluxuri de evaluări ale regulatorilor, furnizori de sondaje) în loc să arhitectați raportarea legitimității ca metrică exclusiv internă, deoarece afirmațiile de legitimitate cu sursă internă („ne evaluăm ca demni de încredere”) au o greutate probatorie mică — aceeași problemă de independență notată pentru perspectiva legitimității într-un [tablou de scor al valorii publice](../tabloul-de-scor-al-valorii-publice/). Conductele de date despre plângeri și contestații merită aceeași rigoare a calității datelor ca orice conductă de rezultate care alimentează contractele de [plată pe bază de rezultate](../plata-pe-bază-de-rezultate-și-obligațiunile-cu-impact-social/), deoarece un set de date de plângeri subraportat sau prost categorizat subestimează tacit o problemă de legitimitate înainte să devină vizibilă într-un sondaj de încredere peste un an. Vezi [metricile de satisfacție a cetățenilor](../metrici-de-satisfacție-a-cetățenilor/) pentru contrapartea la nivel de tranzacție a acestei măsuri la nivel de instituție și [valoarea publică](../valoarea-publică/) pentru cadrul complet al triunghiului strategic al lui Moore căruia îi aparține acest braț.

## Capcane

- **Tratarea satisfacției ca proxy pentru legitimitate**: un cetățean poate fi mulțumit de interfața unei singure tranzacții în timp ce nu are încredere în instituție în ansamblu (sau invers) — vezi [metricile de satisfacție a cetățenilor](../metrici-de-satisfacție-a-cetățenilor/) pentru motivul pentru care cele două trebuie raportate separat.
- **Bazarea pe o singură metrică autoraportată**: un sondaj de încredere rulat intern, fără coroborare independentă (date ale ombudsmanului, evaluări ale regulatorilor), este ușor de respins ca autonotare; triangulați.
- **Ignorarea dezagregării demografice**: cifrele naționale agregate de încredere pot masca o legitimitate puternic divergentă în rândul unor grupuri specifice (după vârstă, etnie, venit sau regiune) — publicațiile OECD Trust in Government dezagregă tocmai din acest motiv.
- **Citirea unei singure scăderi provocate de un șoc ca tendință permanentă**: cifrele de încredere se mișcă brusc în jurul crizelor (prăbușiri financiare, pandemii, scandaluri de mare profil) și își revin parțial; un singur punct de date de după un șoc nu ar trebui extrapolat într-un declin pe termen lung fără mai multe date.

## Surse

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University Press, 1995.
- OECD, „Trust in Government.” <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, statistici anuale ale cazurilor. <https://www.ombudsman.org.uk/>
