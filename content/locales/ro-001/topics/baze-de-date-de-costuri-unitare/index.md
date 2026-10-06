# Baze de date de costuri unitare

O bază de date de costuri unitare este o bibliotecă de proxy-uri financiare pre-cercetate, bazate pe dovezi, pentru rezultate sociale — valoarea trecerii din șomaj în angajare, a singurătății reduse, a unei chirii stabile — care permite unui practician să monetizeze un rezultat fără a comanda de fiecare dată cercetare de evaluare la comandă. Există pentru ca o mică organizație caritabilă care scrie o cerere de finanțare să poată aplica aceeași rigoare ca un consultant bine dotat, reutilizând un proxy pe care altcineva l-a derivat și publicat deja.

## De ce contează

UK Social Value Bank al HACT, dezvoltat cu economistul Daniel Fujiwara folosind metode de evaluare a bunăstării, și Global Value Exchange, o bază de date deschisă, de tip crowdsourcing, de proxy-uri financiare, sunt cele mai răspândite două în sectorul terț și public din Regatul Unit. Ambele există deoarece munca de evaluare de bază — [evaluarea bunăstării](../evaluarea-bunăstării/) și [evaluarea prin preferințe declarate](../evaluarea-prin-preferințe-declarate/) — este costisitoare, solicitantă metodologic și lentă de rulat de la zero pentru fiecare proiect. O bibliotecă partajată, publicată, de proxy-uri transformă ceea ce ar fi un exercițiu de cercetare de mai multe luni într-o căutare, exact motivul pentru care contează atât pentru calculele de [rentabilitate socială a investiției](../rentabilitatea-socială-a-investiției/), cât și pentru evaluările ofertelor conform [Social Value Act](../legea-valorii-sociale/): fără ele, monetizarea riguroasă ar fi accesibilă doar organizațiilor suficient de mari pentru a-și comanda propriile studii.

## Matematica

O bază de date de costuri unitare nu calculează nimic singură; furnizează un input pentru un calcul făcut în altă parte:

```
Valoarea proxy-ului financiar = preț de piață, SAU preț umbră, SAU evaluare a bunăstării,
                                SAU valoare din preferințe declarate
                                pentru o unitate definită de schimbare a rezultatului
                                (ex. „per persoană care trece din șomaj în angajare, pe an”)

Valoare aplicată = numărul de rezultate obținute × valoarea unitară a proxy-ului
```

Vezi [prețurile umbră](../prețuri-umbră/) pentru modul în care se construiește un proxy când nu există preț de piață și [rentabilitatea socială a investiției](../rentabilitatea-socială-a-investiției/) pentru modul în care valoarea aplicată intră apoi într-un raport după ajustările pentru efectul de inerție și atribuire.

## Exemplu lucrat

**Organizație caritabilă (SROI pentru un serviciu de prietenie)**: o intrare din baza de date de costuri unitare pentru „reducerea singurătății” dă un proxy ilustrativ de 1.100 £ per persoană pe an. Aplicat la 80 de beneficiari: 80 × 1.100 £ = 88.000 £ valoare brută. Dacă aceeași bază de date are și un proxy pentru „bunăstare mintală îmbunătățită” care se sprijină pe un item de sondaj de bunăstare suprapus, suprapunerea ambelor proxy-uri pentru aceleași 80 de persoane ar număra de două ori o parte din aceeași schimbare de fond — baza de date furnizează numărul, dar evitarea acestei suprapuneri este responsabilitatea analistului.

**Autoritate locală (SROI pentru un club de căutare a locurilor de muncă)**: o intrare din baza de date de costuri unitare pentru „trecerea din șomaj în angajare susținută” este aplicată la 45 de participanți la un proxy ilustrativ de 8.500 £ per persoană pe an: 45 × 8.500 £ = 382.500 £ valoare brută, înainte de ajustările pentru efectul de inerție și atribuire arătate în [rentabilitatea socială a investiției](../rentabilitatea-socială-a-investiției/).

## Legătura cu ingineria software

Echipele care construiesc instrumente de raportare pentru organizații caritabile sau comisari beneficiază de un „catalog de rezultate” intern — un tabel care mapează fiecare rezultat pe care un produs sau serviciu îl poate revendica în mod plauzibil la un proxy numit, baza lui de date sursă, data publicării și un identificator de versiune — astfel încât echipe diferite dintr-o organizație să nu aleagă fiecare valori ușor diferite pentru același rezultat. Împachetarea datelor deschise ale Global Value Exchange în spatele unui serviciu de căutare, cu sursa și data afișate mereu lângă cifră, păstrează proxy-ul auditabil în loc să fie un număr magic îngropat într-o foaie de calcul. Vezi [rentabilitatea socială a investiției](../rentabilitatea-socială-a-investiției/) și [Social Value Act](../legea-valorii-sociale/) pentru cele două locuri principale în care sunt consumate aceste proxy-uri.

## Capcane

- **Tratarea proxy-urilor ca precise.** Majoritatea proxy-urilor publicate sunt medii modelate din studii de evaluare a bunăstării cu intervale de încredere largi; citarea unuia la liră exact supraestimează precizia pe care o susține cercetarea de bază.
- **Numărarea dublă a proxy-urilor suprapuse.** Combinarea proxy-urilor (ex. „singurătate redusă” și „bunăstare mintală îmbunătățită”) derivate din constructe de sondaj suprapuse evaluează de două ori aceeași schimbare de fond.
- **Folosirea unui proxy din alt context fără ajustare.** Un proxy calibrat pe o populație și un an naționale, aplicat în altă parte fără ajustare pentru inflație sau context, denaturează tacit valoarea.
- **Neverificarea proveniței.** Global Value Exchange este deschis și de tip crowdsourcing, deci calitatea intrărilor variază după contribuitor; verificați sursa de bază înainte de a cita o cifră într-o cerere de finanțare sau o ofertă de achiziție.

## Surse

- HACT, „UK Social Value Bank.” <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., „The Social Impact of Housing Providers” (HACT, 2013) — baza metodologică a UK Social Value Bank.
- Social Value UK, „A Guide to Social Return on Investment,” secțiunea despre proxy-uri financiare.
