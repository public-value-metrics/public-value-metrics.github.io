# Indicele Dezvoltării Umane (HDI)

HDI este alternativa de bază a ONU la clasarea țărilor doar după venit: combină speranța de viață, educația și venitul într-un singur număr între 0 și 1, pe premisa — susținută de economistul Amartya Sen și dezvoltată pentru ONU de Mahbub ul Haq — că dezvoltarea înseamnă extinderea a ceea ce pot face și a ceea ce pot fi oamenii, nu doar a ceea ce câștigă. Este publicat anual în Raportul Dezvoltării Umane al Programului Națiunilor Unite pentru Dezvoltare din 1990.

## De ce contează

Înainte de HDI, „dezvoltarea” era măsurată aproape în întregime prin PNB pe cap de locuitor, care nu spune nimic despre dacă creșterea ajunge la sănătatea sau educația oamenilor obișnuiți. Abordarea capabilităților a lui Sen a reîncadrat dezvoltarea ca extindere a libertăților reale, iar ul Haq a transformat aceasta într-un indice publicabil după care PNUD putea clasa fiecare țară, obligând guvernele care s-au îmbogățit doar prin venit, dar au neglijat sănătatea sau școlarizarea, să se confrunte cu un loc mai slab decât sugera PIB-ul lor (statele petroliere din Golf și unele economii extractive sunt exemplele standard). Structura în trei părți a HDI este și strămoșul metodologic direct al [Indicelui Sărăciei Multidimensionale](../indicele-sărăciei-multidimensionale/): ambele refuză să lase o dimensiune să răscumpere un deficit din alta, folosind o medie geometrică, nu aritmetică. PNUD publică note tehnice complete și datele de bază pentru fiecare ediție (<https://hdr.undp.org/data-center/human-development-index>), sursa canonică pentru oricine construiește pe indice în loc să-l rederive.

## Matematica

```
Indicele speranței de viață (LEI)    = (LE − 20) / (85 − 20)

Indicele anilor medii de școlarizare   = ani medii de școlarizare / 15
Indicele anilor așteptați de școlarizare = ani așteptați de școlarizare / 18
Indicele educației (EI)                = (Indicele anilor medii + Indicele anilor așteptați) / 2

Indicele venitului (II)                = (ln(VNB pe cap de locuitor) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [media geometrică a celor trei subindici]
```

Media geometrică este aleasă deliberat: deoarece înmulțește în loc să facă media, un scor foarte mare într-o dimensiune nu poate compensa pe deplin un scor foarte mic în alta — un design pe care PNUD l-a adoptat în 2010 specific pentru a penaliza dezechilibrul, înlocuind formula anterioară a mediei aritmetice.

## Exemplu lucrat

**Țară cu venit mediu**: speranța de viață 72 de ani, ani medii de școlarizare 8, ani așteptați de școlarizare 13, VNB pe cap de locuitor 12.000 $.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
MYSI = 8 / 15                                        = 0,533
EYSI = 13 / 18                                       = 0,722
EI = (0,533 + 0,722) / 2                             = 0,628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

Un HDI de 0,713 se încadrează în banda PNUD de „dezvoltare umană ridicată” (0,700–0,799); „foarte ridicată” începe de la 0,800. Observați cât de sensibil este rezultatul la cel mai slab subindice: dacă anii medii de școlarizare ar fi 4 în loc de 8 (MYSI = 0,267, EI = 0,494), HDI ar scădea la (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639 — o bandă întreagă — deși nimic altceva nu s-a schimbat.

## Legătura cu ingineria software

- Tiparul mediei geometrice este direct refolosibil pentru orice scor compus de serviciu sau produs la care nu doriți ca o dimensiune puternică să acopere una critic slabă — ex. combinarea scorurilor de accesibilitate, performanță și fiabilitate ale unui serviciu digital public multiplicativ, nu prin medie ponderată, astfel încât un serviciu rapid, dar inaccesibil, să nu poată obține „bine”.
- Transformarea logaritmică a venitului în HDI (valoare marginală descrescătoare a unei lire în plus) este aceeași logică din spatele [ponderării distributive](../ponderarea-distributivă/) în evaluare: 1.000 $ în plus înseamnă mult mai mult pentru o gospodărie săracă decât pentru una bogată, iar tratarea liniară a ambelor prețuiește greșit impactul.
- Orice tablou de bord care raportează un singur scor amestecat de „incluziune digitală” sau „rezultate pentru cetățeni” ar trebui să-și documenteze formula de agregare la fel de explicit ca notele tehnice ale PNUD — vezi [KPI-urile sectorului public](../kpi-urile-sectorului-public/) și [tabloul de scor al valorii publice](../tabloul-de-scor-al-valorii-publice/).

## Capcane

- **Medierea în loc de a folosi media geometrică** — o medie aritmetică lasă venitul ridicat să mascheze complet sănătatea sau educația slabă; tot rostul schimbării de metodologie din 2010 a fost oprirea acestei substituții.
- **Compararea HDI de la an la an ca și cum ar fi PIB ajustat la inflație** — PNUD rebazează periodic indicele (noi limite minime/maxime, plafoane revizuite pentru școlarizare), deci o schimbare de rang poate reflecta o actualizare a metodologiei, nu o schimbare reală; verificați întotdeauna din ce ediție HDR provine o cifră.
- **Tratarea HDI ca măsură a sărăciei** — este o medie națională și nu spune nimic despre distribuția în interiorul unei țări; pentru aceasta folosiți [Indicele Sărăciei Multidimensionale](../indicele-sărăciei-multidimensionale/) sau HDI-ul ajustat la inegalitate separat al PNUD.

## Surse

- UNDP. „Human Development Index (HDI)” note tehnice și date. <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (introducerea indicelui).
- Sen A. „Development as Freedom.” Oxford University Press, 1999.
