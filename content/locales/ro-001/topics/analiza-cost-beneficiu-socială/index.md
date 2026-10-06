# Analiza cost-beneficiu socială (SCBA)

Analiza cost-beneficiu socială convertește fiecare cost și beneficiu al unei politici sau al unui program — de piață și non-piață — într-o unitate monetară comună, actualizează fluxurile viitoare la valoarea prezentă și le compensează între ele pentru a produce un singur număr: face această propunere societatea mai bine situată și cu cât?

## De ce contează

SCBA este metoda cantitativă implicită din cazul economic al [evaluării Green Book](../evaluarea-green-book/): îndrumările HM Treasury cer propunerilor să demonstreze o valoare socială actualizată netă (NPSV) pozitivă oriunde beneficiile pot fi monetizate credibil, folosind disponibilitatea de a plăti ca principiu de bază al evaluării bunurilor non-piață (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Capitolul 5). Disciplina pe care o impune este că analiza cost-beneficiu „socială” nu este același exercițiu ca o evaluare de investiție din sectorul privat: trebuie să includă costurile și beneficiile care cad pe terți ce nu sunt parte la tranzacție (externalități), trebuie să folosească [rata de actualizare socială](../rata-de-actualizare-socială/) și nu un cost comercial al capitalului și ar trebui să aplice [ponderarea distributivă](../ponderarea-distributivă/) acolo unde o liră contează mai mult pentru o gospodărie mai săracă decât pentru una mai bogată.

SCBA cedează exact acolo unde se așteaptă criticii ei: bunurile fără analog de piață — aer curat, coeziune socială, valoarea unei vieți salvate — trebuie monetizate folosind metode de [preferințe declarate](../evaluarea-prin-preferințe-declarate/) sau [preferințe relevate](../evaluarea-prin-preferințe-relevate/), ori trebuie construit un [preț umbră](../prețuri-umbră/). Când monetizarea este contestată, nu doar dificilă, Green Book însuși recomandă revenirea la [analiza cost-eficacitate](../analiza-cost-eficacitate-în-guvern/) sau [analiza decizională multicriterială](../analiza-decizională-multicriterială/), în loc să se forțeze un număr în care nimeni nu crede.

## Matematica

```
NPSV = Σ [t=0 la T] (Beneficiu_t − Cost_t) / (1 + r)^t

unde:
  Beneficiu_t = toate beneficiile monetizate în anul t, inclusiv bunurile
                non-piață evaluate prin preferințe declarate/relevate sau preț umbră
  Cost_t      = toate costurile monetizate în anul t, inclusiv costul de oportunitate
                al resurselor (vezi ../opportunity-cost-in-public-spending/)
  r           = rata de actualizare socială (HM Treasury stabilește 3,5%, scăzând la
                rate mai mici după anul 30, conform Anexei A din Green Book)
  T           = perioada de evaluare

Raport beneficiu-cost (BCR) = Σ PV(Beneficii) / Σ PV(Costuri)
```

Un BCR peste 1 (sau un NPSV peste zero) indică valoare socială netă. Categoriile de valoare pentru bani ale Green Book (folosite în evaluarea transporturilor și infrastructurii) etichetează intervalele BCR: sub 1,0 este valoare slabă pentru bani, 1,0–1,5 este scăzută, 1,5–2,0 medie, 2,0–4,0 ridicată și peste 4,0 foarte ridicată. Analiza de sensibilitate — reluarea NPSV în ipoteze pesimiste și optimiste — este obligatorie, nu opțională, deoarece beneficiile non-piață monetizate poartă benzi largi de incertitudine.

## Exemplu lucrat

**Autoritate locală**: un consiliu evaluează o investiție de 3 milioane £ într-o nouă rețea pentru ciclism și mers pe jos pe o perioadă de evaluare de 20 de ani la o rată de actualizare de 3,5%.

```
Costuri: 3 mil. £ capital în anul 0, 50.000 £/an întreținere (anii 1–20)
PV(întreținere) ≈ 50.000 £ × 14,2 (factorul de anuitate pe 20 de ani la 3,5%) ≈ 710.000 £
PV total(costuri) ≈ 3,71 mil. £

Beneficii (toate monetizate prin instrumentele publicate de DfT/OMS):
  Beneficiu pentru sănătate din activitate fizică crescută: 180.000 £/an
  Reducerea absenteismului: 40.000 £/an
  Decongestionare (mai puține deplasări cu mașina): 60.000 £/an
  Flux total de beneficii: 280.000 £/an
PV(beneficii) ≈ 280.000 £ × 14,2 ≈ 3,98 mil. £

NPSV = 3,98 mil. £ − 3,71 mil. £ = +0,27 mil. £
BCR = 3,98 / 3,71 = 1,07 → valoare pentru bani „scăzută”
```

Schema depășește pragul, dar abia; o rulare de sensibilitate cu o estimare a beneficiului pentru sănătate cu 20% mai mică (reflectând incertitudinea reală în evaluarea activității fizice) coboară BCR sub 1,0, exact motivul pentru care Green Book cere ca tabelul de sensibilitate să fie publicat alături de cifra de titlu, nu doar estimarea centrală.

**Organizație caritabilă**: un program de prevenire a mortalității infantile care costă 500.000 £/an este evaluat folosind valoarea unei vieți statistice (VSL) — un preț umbră, nu un preț de piață observat — de aproximativ 2,1 milioane £ (cifra HM Treasury actualizată în 2023, ea însăși derivată din studii de preferințe declarate). Evitarea unui deces infantil pe an față de un cost de 500.000 £ dă un BCR de 4,2, valoare pentru bani confortabil „foarte ridicată” — dar întregul rezultat se sprijină pe cifra VSL, motiv pentru care orice SCBA care folosește VSL trebuie să o dezvăluie ca ipoteză, nu ca fapt.

## Legătura cu ingineria software

SCBA este cadrul natural pentru deciziile de investiții în platforme și infrastructură în software-ul guvernamental — compararea unei platforme partajate de identitate cu soluții punctuale departamentale, de exemplu, cere monetizarea unor beneficii precum costul redus al înrolării duplicate, fraudei reduse și timpului mai scurt până la serviciu, care nu au un preț de piață propriu. Inginerii care construiesc serviciul de bază ar trebui să se aștepte ca liderii de program să ceară inputuri pentru această analiză: costurile unitare ale tranzacțiilor (vezi [costul per tranzacție](../costul-per-tranzacție/)), volumele așteptate și costurile de degradare/nefuncționare. Disciplina cea mai importantă de preluat: actualizați beneficiile viitoare, numiți explicit linia de bază contrafactuală (vezi [analiza contrafactuală](../analiza-contrafactuală/)) și nu prezentați niciodată o estimare punctuală fără intervalul ei de sensibilitate.

## Capcane

- **Numărarea dublă a beneficiilor.** Numărarea atât a „timpului economisit”, cât și a „productivității câștigate din acel timp” ca linii de beneficiu separate supraestimează cazul; timpul economisit este beneficiul, utilizarea lui ulterioară nu este un beneficiu suplimentar decât dacă este dovedită independent.
- **Omiterea costurilor deplasate.** O schemă care mută congestia de pe un drum pe altul, sau fraudă dintr-un canal în altul, nu a creat beneficiul net pe care îl implică NPSV-ul ei de titlu — vezi [deplasarea și atribuirea](../deplasare-și-atribuire/).
- **Folosirea unei rate de actualizare private.** Aplicarea unui cost comercial al capitalului (să zicem 8–10%) în loc de rata de actualizare socială subevaluează sistematic beneficiile publice pe orizont lung, precum câștigurile pentru sănătate și mediu — vezi [rata de actualizare socială](../rata-de-actualizare-socială/).
- **Monetizarea necontestatului și eludarea contestatului.** Dacă două treimi din beneficiul unei propuneri sunt o economie de eficiență monetizată cu încredere și o treime un câștig de bunăstare monetizat nesigur, NPSV-ul de titlu amestecă tacit un număr ferm cu unul slab; raportați-le separat.

## Surse

- HM Treasury. „The Green Book: appraisal and evaluation in central government.” 2022, Capitolul 5. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. „Green Book supplementary guidance: value of a statistical life.” 2023. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. „TAG unit A1.1: cost-benefit analysis.” Transport Analysis Guidance. <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
