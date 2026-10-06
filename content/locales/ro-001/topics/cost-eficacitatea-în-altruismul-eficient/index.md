# Cost-eficacitatea în altruismul eficient

Raționamentul de cost-eficacitate din altruismul eficient (EA) ierarhizează intervențiile caritabile după cantitatea de bine — cel mai des exprimată ca vieți salvate sau sănătate câștigată per dolar cheltuit — și direcționează banii către orice intervenție cumpără cel mai mult bine la margine. GiveWell este cel mai influent practician al domeniului: publică estimări explicite, actualizate, de cost per viață salvată și cost per rezultat pentru o listă scurtă de „organizații de top” și recomandă donatorilor să dea oricărei care are în prezent loc pentru mai multă finanțare la cea mai bună rată.

## De ce contează

GiveWell enunță cost-eficacitatea ca principal criteriu în metodologia sa publicată: caută intervenții susținute de dovezi, le estimează cost-eficacitatea într-o unitate comună și ierarhizează între cauze complet fără legătură — plase de țânțari împotriva malariei, suplimentarea cu vitamina A, transferuri de numerar, plăți de stimulente pentru vaccinare — pe această singură axă. Este un import direct al raționamentului în stil QALY/DALY din economia sănătății în filantropie: așa cum un sistem de sănătate întreabă „câți QALY per liră la margine”, GiveWell întreabă „câte vieți, sau ani de viață, per dolar la margine” și tratează cauzele ca substituibile odată convertite în acea unitate comună. Vezi [analiza cost-eficacitate în guvern](../analiza-cost-eficacitate-în-guvern/) pentru verișorul din sectorul public al acestui cadru de raționament.

Cea mai citată cifră a GiveWell privește Against Malaria Foundation (AMF), care distribuie plase de țânțari tratate cu insecticid. În exemplul lucrat publicat de GiveWell (extras din datele de finanțare din 2020), aproximativ 4.500 $ au finanțat suficiente plase pentru a evita un deces, după luarea în calcul a utilizării imperfecte a plaselor, a mortalității de bază fără plase și a ajustării pentru funging — posibilitatea ca AMF să fi primit oricum o parte din acea finanțare de la alți donatori. GiveWell este explicit că această cifră se mișcă în timp și între geografii pe măsură ce se schimbă prevalența malariei, costurile plaselor și decalajele de finanțare și că este de așteptat în general ca costul salvării unei vieți să crească în timp pe măsură ce cele mai ieftine oportunități sunt folosite primele; este o ilustrare lucrată a metodei, nu un preț fix.

## Matematica

```
Cost-eficacitate = Costul intervenției / Unități de bine produse
                   (ex. $ per viață salvată, $ per DALY evitat, $ per QALY)

Lanțul GiveWell pentru un program de plase de țânțari, ilustrativ:
  $ per plasă cumpărată și livrată
    ÷ ponderea plaselor efectiv folosite
    ÷ persoane protejate per plasă
    × mortalitatea anuală de bază fără plase
    × reducerea mortalității atribuibilă folosirii plaselor (din dovezi RCT)
    × ani de protecție per plasă
    ÷ ajustare pentru funging (bani care înlocuiesc finanțarea altor donatori)
  = $ per viață salvată (net de efectele contrafactuale ale finanțării)
```

Acest lanț contează deoarece fiecare pas este un loc în care estimările de cost-eficacitate greșesc de obicei — vezi capcanele de mai jos — și deoarece face explicit că „costul per viață salvată” nu este niciodată un preț observat brut; este o estimare modelată construită din mai multe inputuri incerte separat.

## Exemplu lucrat

Două intervenții ipotetice, ambele susținute de dovezi, concurând pentru aceleași 100.000 £ marginale:

- **Plase de țânțari (în stil AMF)**: aproximativ 4.500 $ per viață salvată conform exemplului lucrat publicat de GiveWell pe date din 2020, adică foarte aproximativ 20 de vieți salvate la 100.000 £, în funcție de cursul de schimb și anul folosit.
- **Program de deparazitare**: niciun beneficiu plauzibil de mortalitate, dar dovezi solide de câștiguri de venit pe termen lung din deparazitarea în copilărie; GiveWell o evaluează în termeni de câștig de venit, nu vieți salvate, ceea ce face dificilă compararea directă cu plasele fără o unitate comună. GiveWell folosește un cadru explicit de „ponderi morale” pentru a converti ambele într-o singură unitate internă pentru clasament.

Disciplina metodei EA este forțarea acestei comparații la lumină în loc de a finanța ambele pentru că ambele „sună bine”. Vezi [rentabilitatea socială a investiției](../rentabilitatea-socială-a-investiției/) pentru funcția de forțare echivalentă folosită de întreprinderile sociale britanice și comisarii locali, care pune aceeași întrebare — care este cel mai bun randament per liră — într-un idiom al valorii monetizate în loc de idiomul vieți/DALY.

## Legătura cu ingineria software

Inginerii care construiesc platforme pentru donatori, instrumente de potrivire a granturilor sau tablouri de bord de impact pentru finanțatori aliniați EA (Open Philanthropy, GiveWell însăși, platforme de dăruire eficientă precum Giving What We Can) trebuie să reprezinte estimările de cost-eficacitate ca intervale cu ipoteze declarate, nu ca numere unice — modelul de bază are mai multe inputuri multiplicative incerte, iar prăbușirea lui într-o singură cifră pe un tablou de bord denaturează încrederea pe care GiveWell însăși o declară. Versionați fiecare estimare după data publicării; GiveWell își revizuiește cifrele, uneori substanțial, pe măsură ce sosesc dovezi RCT noi sau date despre decalajele de finanțare, iar o platformă care păstrează în cache o cifră veche devine tacit greșită.

## Capcane

- **Tratarea unei estimări de cost-eficacitate ca preț fix.** Este rezultatul unui model cu mai multe inputuri multiplicative incerte (rate de utilizare, mortalitate de bază, ajustare pentru funging); declarați data și versiunea.
- **Ignorarea fungingului/deplasării.** Finanțarea unei organizații care ar fi primit oricum banii de la alt donator cumpără mai puțin bine contrafactual decât sugerează titlul — vezi [adiționalitatea și efectul de inerție](../adiționalitate-și-efect-de-inerție/) și [deplasarea și atribuirea](../deplasare-și-atribuire/).
- **Compararea între unități incompatibile fără conversie.** „Vieți salvate” și „venit câștigat” nu sunt direct comparabile fără un cadru explicit de ponderi morale; prezentarea lor alăturat ca și cum ar fi comparabile este o eroare de categorie.
- **Viziune în tunel pe domeniul cauzei.** Ierarhizarea doar în interiorul unui domeniu de cauză (ex. doar organizații caritabile de sănătate globală) și numirea câștigătorului „cea mai cost-eficace organizație caritabilă” exagerează afirmația; clasamentul inter-cauze al GiveWell este deliberat îngust (sănătate globală și bunăstare), nu universal.

## Surse

- GiveWell, „Our criteria.” <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, „How Much Does It Cost to Save a Life?” (versiunea din februarie 2024). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, recenzia Against Malaria Foundation. <https://www.givewell.org/charities/amf>
- Giving What We Can, despre cost-eficacitate între cauze. <https://www.givingwhatwecan.org/>
