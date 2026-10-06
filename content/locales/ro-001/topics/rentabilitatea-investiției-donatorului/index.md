# Rentabilitatea investiției donatorului

Rentabilitatea investiției donatorului este ceea ce cumpără efectiv în rezultate lira unui anumit donator — nu rapoartele operaționale ale organizației caritabile și nici propria rentabilitate a organizației caritabile pe întregul ei buget. Reîncadrează ROI din perspectiva organizației (cât de eficient funcționăm) în perspectiva donatorului (ce schimbă contribuția mea marginală), iar cele două numere sunt în mod curent, și greșit, tratate ca același lucru.

## De ce contează

„ROI”-ul propriu al unei organizații caritabile, în măsura în care expresia este folosită, descrie de obicei ceva precum [costul per beneficiar](../costul-per-beneficiar/) sau [raportul cheltuielilor generale ale organizațiilor caritabile](../raportul-cheltuielilor-generale-ale-organizațiilor-caritabile/) — măsuri de eficiență organizațională. ROI-ul unui donator este o cu totul altă întrebare: dat fiind că această organizație caritabilă are deja alte venituri, ce adaugă la margine banii *acestui* donator? Dacă o organizație caritabilă ar livra același program cu sau fără un anumit dar de 10.000 £ — pentru că are rezerve amplu sau pentru că alt finanțator ar fi umplut lacuna — ROI-ul donatorului pentru acel dar este aproape de zero, oricât de bun ar arăta raportul overhead general sau costul per rezultat al organizației.

Este aceeași întrebare de adiționalitate care stă la baza evaluării [valorii pentru bani](../valoarea-pentru-bani/) în cheltuielile publice britanice și a [adiționalității și efectului de inerție](../adiționalitate-și-efect-de-inerție/) în evaluarea programelor: valoarea creată este atribuibilă unui finanțator doar în măsura în care nu s-ar fi întâmplat oricum. Marile platforme cu fonduri consiliate de donatori și organizațiile de dăruire eficientă (Giving What We Can, GiveWell) își construiesc recomandările explicit în jurul acestei distincții, întrebând nu „este aceasta o organizație caritabilă bună”, ci „are această organizație caritabilă loc nefinanțat pentru mai multă finanțare astfel încât darul meu să fie adițional”.

## Matematica

```
ROI-ul donatorului ≠ Eficiența operațională a organizației caritabile

ROI donator  ≈  (Rezultat obținut cu darul) − (Rezultat care s-ar fi produs
                 fără el, adică contrafactualul)
               ─────────────────────────────────────────────────
                                Mărimea darului

Inputuri cheie:
  - Loc pentru mai multă finanțare (este organizația limitată de finanțare la margine?)
  - Funging (ar fi umplut alt donator lacuna?)
  - Cost-eficacitate marginală la nivelul specific de finanțare (costurile cresc adesea
    pe măsură ce o intervenție se extinde dincolo de populația ei cea mai ușor de atins)
```

Vezi [cost-eficacitatea în altruismul eficient](../cost-eficacitatea-în-altruismul-eficient/) pentru modul în care GiveWell operaționalizează întrebarea „locului pentru mai multă finanțare” și [analiza contrafactuală](../analiza-contrafactuală/) pentru metoda generală.

## Exemplu lucrat

Un donator alege între două daruri de 5.000 £:

- **Organizația C**: are un program de bază complet finanțat cu rezerve de 2 milioane £ și o listă de așteptare de finanțatori; cele 5.000 £ marginale se adaugă probabil la rezerve sau la o activitate cu prioritate mai mică. Rezultat estimat adițional pentru donator: minim — banii nu schimbă în mod evident ce se întâmplă.
- **Organizația D**: un program mic, susținut de dovezi, care a declarat public că va trebui să refuze 200 de persoane trimestrul următor fără încă 50.000 £ și a strâns 42.000 £ din ei. Cele 5.000 £ marginale vor finanța foarte probabil livrare adițională reală — să zicem, 20 de persoane servite suplimentar, la costul per beneficiar declarat de organizația însăși de 250 £.

Aceeași mărime a darului, același donator, ROI al donatorului radical diferit — nu pentru că Organizația C ar fi o organizație mai slabă (ar putea avea o cifră mai bună de cost per rezultat în general), ci pentru că deficitul ei marginal de finanțare este deja acoperit.

## Legătura cu ingineria software

Platformele pentru donatori și instrumentele de recomandare a dăruirii afișează prea des doar metrici de eficiență la nivel de organizație (raport overhead, cost per beneficiar), deoarece acestea sunt ceea ce organizațiile caritabile publică în rapoartele anuale și ceea ce este cel mai ușor de tras într-un tabel comparativ. Reprezentarea corectă a ROI-ului donatorului cere un alt punct de date, mai greu de procurat: deficitul curent de finanțare declarat al unei organizații sau „locul pentru mai multă finanțare”, care se schimbă pe parcursul anului și rareori este date structurate. Platformele care vor să sprijine un raționament autentic de ROI al donatorului au nevoie fie de un flux direct din dezvăluirile deficitului de finanțare (așa cum GiveWell îl întreține manual pentru organizațiile sale recomandate), fie de o declinare explicită că un tabel comparativ arată eficiență organizațională, nu adiționalitatea donatorului. Vezi [raportul cheltuielilor generale ale organizațiilor caritabile](../raportul-cheltuielilor-generale-ale-organizațiilor-caritabile/) pentru metrica cu care ROI-ul donatorului este cel mai des, și greșit, confundat.

## Capcane

- **Confundarea eficienței organizației caritabile cu adiționalitatea donatorului.** O organizație caritabilă bine condusă, cu overhead scăzut, poate avea totuși un ROI marginal al donatorului aproape de zero dacă nu este limitată de finanțare.
- **Ignorarea fungingului.** Dacă un mare finanțator instituțional ar fi acoperit oricum lacuna, darul unui donator individual înlocuiește banii acelui finanțator în loc să adauge livrare nouă.
- **Presupunerea cost-eficacității liniare la scară.** Beneficiarii cei mai ieftin de atins sunt adesea serviți primii; costul marginal per rezultat crește frecvent pe măsură ce un program se extinde, deci ROI-ul următoarei lire nu este același cu ROI-ul lirei medii deja cheltuite.
- **Niciun deficit de finanțare declarat.** O organizație caritabilă sau o platformă care nu poate spune ce ar finanța următorii X £ nu poate susține o afirmație autentică de ROI al donatorului, doar una de cost mediu.

## Surse

- Giving What We Can, despre deficitele de finanțare și cost-eficacitate în deciziile de donație. <https://www.givingwhatwecan.org/>
- GiveWell, „Our criteria” (locul pentru mai multă finanțare ca criteriu explicit). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
