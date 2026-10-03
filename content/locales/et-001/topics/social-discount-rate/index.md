# Sotsiaalne diskontomäär

Sotsiaalne diskontomäär konverteerib tulevased kulud ja kasud tänapäeva väärtusteks, nii et programme, mille tasuvus levib üle aastakümnete, saab võrrelda ühisel alusel. HM Treasury Green Book kohustab langevat skeemi, mis on ankurdatud 3,5%-le esimeseks 30 aastaks, mis põhineb Ramsey formulal — konkreetne, tsiteeritav number, millest on saanud elav poliitiline ja eetiline argument, kui seda rakendatakse pikaHorisondiliste kohustuste, nagu kliimaPoliitika või infrastruktuur, suhtes.

## Miks see on oluline

Naela kasu, mis saadakse 30 aasta pärast, ei ole väärt naela kasu, mis saadakse täna, osaliselt puhta ajaPreferentsi pärast (inimesed ja ühiskonnad eelistavad head asjad varem) ja osaliselt kasvu pärast (tuleviku ühiskond eeldatavasti rikkam, nii et nael loeb talle marginaalis vähem). Green Booki Lisa 6 tuletab Ühendkuningriigi standardse diskontomäära Ramsey formulast, kombineerides puhta ajaPreferentsi määra tarbimise oodatava kasvuMääraga ja tarbimise marginaalse kasulikkuse elastsusega, tootes avaldatud määra 3,5% aastas aastateks 0-30, langedes avaldatud skeemis aastaks 31 ja edasi (kuni 1%-le aastateks 301+). See skeem eksisteerib täpselt sellepärast, et konstantne 3,5% liitKasv üle sajandi muudaks peaaegu iga pikaHorisondilise kasu — üleujutuskaitse, mis päästab elusid 80 aasta pärast, süsinikuVähendus, mis väldib kahju 100 aasta pärast — tähtsusetuks näivaks tänapäeva-väärtuse-mõttes, mida Treasury pidas ebausutavaks eetiliseks järeldusEks tegelikult pikaealise infrastruktuuri ja keskkonnaOtsuste jaoks.

DiskontomäärI on vaieldav täpselt sellepärast, et valik ei ole neutraalne tehniline parameeter: see kodeerib hinnangu, kui palju ühiskond peaks täna ohverdama veel-mittesündinud inimeste jaoks. Stern Review on the Economics of Climate Change (2006) kasutas nulli-lähedast diskontomäärA (puhas ajaPreferents ligi 0,1%), argumenteerides, et tuleviku põlvkondade heaolu diskonteerimine turuMäärade sarnasel tasemel on eetiliselt kaitsmatu, kui kahju (katastroofilised kliimaMuutused) on pöördumatu. Kriitikud — eriti William Nordhaus — argumenteerisid, et Sterni nulliLähedane määr ülehindas vahetu kliimaKulutuse juhtumit, muutes peaaegu iga praeguse kulu õigustatuks napilt-diskonteeritud tuleviku-kasu vastu. Vaidlus ei olnud matemaatika pärast; see oli selle pärast, kelle eetiline raamistik peaks määra seadma, ja see jääb standardIllustratsiooniks, miks diskontomäär on poliitikaValik, mitte ainult kindlustusMatemaatiline sisend.

## Arvutus

Ramsey formula, mis on Green Booki määra aluseks:

```
r = ρ + η·g

kus:
  r = sotsiaalne diskontomäär
  ρ = puhta ajaPreferentsi määr (kärsitus + katastroofiRisk)
  η = tarbimise marginaalse kasulikkuse elastsus
  g = elaniku-kohase tarbimise oodatav aastaKasvuMäär
```

Green Booki langev skeem (Lisa 6, illustreeriv — kontrolli praegust väljaannet täpse avaldatud tabeli jaoks):

```
Aastad 0-30:    3,5%
Aastad 31-75:   3,0%
Aastad 76-125:  2,5%
Aastad 126-200: 2,0%
Aastad 201-300: 1,5%
Aastad 301+:    1,0%
```

Tuleviku summa tänapäeva väärtus:

```
PV = FV / (1 + r)^t
```

## Läbitöötatud näide

**ÜleujutuskaitseSkeem**: projekt annab 10 miljonit naela välditud üleujutuseKahju aastal 40.

Kasutades flat 3,5% määra: PV = 10 000 000 / (1,035)^40 ≈ 2,52 miljonit naela — kasu näeb väike välja.

Kasutades Green Booki langevat skeemi (3,5% aastateks 0-30, 3,0% pärast seda), liitKasvab arvutus 3,5% juures esimesed 30 aastat ja 3,0% juures aastateks 31-40:

```
PV = 10 000 000 / [(1,035)^30 × (1,03)^10]
   = 10 000 000 / [2,807 × 1,344]
   ≈ 10 000 000 / 3,773
   ≈ 2,65 miljonit naela
```

Langev skeem tõstab mõõdukalt pikaHorisondiliste kasude tänapäeva väärtust võrreldes flat kõrge määraga — skeemi selgeSõnaline eesmärk, kuna flat 3,5% sajandi jooksul diskonteeriks 100 miljoni naela kasu aastal 100 alla 3,3 miljoni naela.

**Digitaalne infrastruktuur**: valitsuse pilve-migratsioon, mis maksab nüüd 4 miljonit naela, eeldatavasti väldib 500 000 £/aastas legacy-hoolduskulusid 15 aastaks. 3,5% juures on selle annuiteedi tänapäeva väärtus ligikaudu 500 000 £ × 11,52 (15-aastane annuiteediFaktor 3,5% juures) ≈ 5,76 miljonit naela — mugavalt ületades 4 miljoni naela kulu, positiivne neto-tänapäeva-väärtuse juhtum, mis näeks märkimisväärselt nõrgem välja naiivselt valitud kõrgema määra juures (7% juures langeb sama annuiteediFaktor ligikaudu 9,11-le, andes 4,56 miljonit naela, endiselt positiivne, kuid palju õhema margina juures).

## Seos tarkvaraarendusega

Enamik tarkvaraÄriJuhtumeid kestab 3-5 aastat, hästi flat 3,5% vahemiku sees, nii et langev skeem harva otseselt mõjutab — kuid aluseks olev distsipliin on oluline igale valitsuse tehnoloogiaInvesteeringule pika varaElueaga (riiklik platvorm, andmeInfrastruktuuriProgramm, mitme-dekaadiline lepingut):

- Kasuta Green Booki avaldatud määrA, mitte sisemist "lati määrA" eraFinantsidest laenatud; audiitorid ja Treasury retsensendid eeldavad standardSkeemi.
- Kasudele, mis realiseeruvad palju aastaid hiljem (platvormi pikaAjalised hoolduseSäästud, avatudAndmete-ekoSüsteemi liitKasvav väärtus — vaata [avatud andmete väärtus](../open-data-value/)), võib diskonteerimisValik ümber pöörata äriJuhtumi positiivsest negatiivseks; muuda määr ja horisont selgeSõnalisteks eeldusteks, mitte maetud vaikeVäärtusteks.
- See annab sisendi otse [Green Book hinnangusse](../green-book-appraisal/), viie-juhtumi mudelisse, mis formaalselt nõuab diskonteeritud rahaVoogu, ja [heaoluHindamisesse](../wellbeing-valuation/), kus samaLaadne diskonteerimisKüsimus tekib mitte-rahaliste heaoluKasude jaoks.
- Vaata ka [põlvkondadevaheline õiglus ja jätkusuutlikkuse diskonteerimine](../intergenerational-equity-and-sustainability-discounting/) Stern-versus-Nordhaus-vaidluse jaoks, mis rakendub konkreetselt keskkonna- ja kliimaTehnoloogia investeeringutele.

## Lõksud

- **Flat määra kasutamine väga pikkade horisontide jaoks.** Green Booki langev skeem eksisteerib täpselt sellepärast, et konstantne määr alaHindab tegelikult pikaealisi kasusid; kontrolli, milline vahemik kehtib, mitte vaiki 3,5%-le läbivalt.
- **DiskontomäärA käsitlemine eetiliselt neutraalsena.** Stern-Nordhause vaidlus näitab, et määr kodeerib väärtusHinnangu tuleviku põlvkondade kohta; selle muutmine muudab, millised programmid näivad õigustatud, nii et see peaks olema sõnastatud ja kaitstud, mitte peidetud arvutusTabeli vaikeVäärtusesse.
- **Sotsiaalse diskontomäärA segiAjamine erakapitaliKuluga.** Valitsuse laenamisKulud ja eraSektori lati-määrAd on erinevad kontseptsioonid Ramsey-tuletatud sotsiaalsest määrAst, ja ühe asendamine teisega avalikus hinnangus moonutab tüüpiliselt tulemust lühiaegsete tulude soosimise suunas.
- **Reaalsete ja nominaalsete rahaVoogude ebakonsistentne diskonteerimine.** Green Booki määr on reaalMäär (inflatsioonikohandatud); nominaalsete rahaVoogude diskonteerimine sellega alaHindab oluliselt tänapäeva väärtuseId.

## Allikad

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
