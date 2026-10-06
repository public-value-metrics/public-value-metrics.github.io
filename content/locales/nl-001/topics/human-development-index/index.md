# Human Development Index (HDI)

De HDI is het koptekstalternatief van de VN voor het rangschikken van landen op inkomen alleen: het combineert levensverwachting, onderwijs, en inkomen in een enkel getal tussen 0 en 1, op de premisse — beargumenteerd door econoom Amartya Sen en ontwikkeld voor de VN door Mahbub ul Haq — dat ontwikkeling gaat over het uitbreiden van wat mensen kunnen doen en zijn, niet alleen wat ze verdienen. Het wordt sinds 1990 jaarlijks gepubliceerd in het Human Development Report van het VN-ontwikkelingsprogramma.

## Waarom het ertoe doet

Voor de HDI werd "ontwikkeling" bijna geheel gemeten door GNP per hoofd, wat niets zegt over of groei de gezondheid of het onderwijs van gewone mensen bereikt. De capability-benadering van Sen herkaderde ontwikkeling als de uitbreiding van echte vrijheden, en ul Haq veranderde dat in een publiceerbare index waarmee de UNDP elk land kon rangschikken, wat overheden die rijk werden op inkomen alleen maar gezondheid of scholing verwaarloosden, dwong te worden geconfronteerd met een slechtere rangschikking dan hun BBP suggereerde (de Golf-oliestaten en sommige extractieve economieën zijn de standaardvoorbeelden). De drieweg-structuur van de HDI is ook de directe methodologische voorloper van de [Multidimensionale Armoede-Index](../multidimensionale-armoede-index/): beide weigeren toe te laten dat één dimensie een tekort in een andere terugkoopt, met behulp van een geometrisch in plaats van rekenkundig gemiddelde. UNDP publiceert volledige technische notities en de onderliggende gegevens voor elke editie (<https://hdr.undp.org/data-center/human-development-index>), wat de canonieke bron is voor iedereen die op de index bouwt in plaats van hem opnieuw af te leiden.

## De berekening

```
Levensverwachtingsindex (LEI)   = (LE − 20) / (85 − 20)

Gemiddelde-schooljaren-index    = gemiddelde schooljaren / 15
Verwachte-schooljaren-index     = verwachte schooljaren / 18
Onderwijsindex (EI)             = (Gemiddelde-jaren-index +
                                   Verwachte-jaren-index) / 2

Inkomensindex (II)               = (ln(BNI per hoofd) −
                                   ln(100)) / (ln(75000) −
                                   ln(100))

HDI = (LEI × EI × II) ^ (1/3)  [geometrisch gemiddelde van de
                                drie subindices]
```

Het geometrisch gemiddelde is bewust: omdat het vermenigvuldigt in plaats van gemiddelt, kan een zeer hoge score in één dimensie een zeer lage score in een andere niet volledig compenseren — een ontwerp dat UNDP in 2010 aannam specifiek om onbalans te straffen, ter vervanging van de vorige rekenkundig-gemiddelde-formule.

## Uitgewerkt voorbeeld

**Middeninkomensland**: levensverwachting 72 jaar, gemiddelde schooljaren 8, verwachte schooljaren 13, BNI per hoofd $12.000.

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

Een HDI van 0,713 valt in de band "hoge menselijke ontwikkeling" van UNDP (0,700-0,799); "zeer hoog" begint bij 0,800. Merk op hoe gevoelig het resultaat is voor de zwakste subindex: als gemiddelde schooljaren 4 waren in plaats van 8 (MYSI = 0,267, EI = 0,494), daalt HDI naar (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639 — een volledige band dalend — ondanks dat niets anders veranderde.

## Verband met softwareontwikkeling

- Het geometrisch-gemiddelde-patroon is direct herbruikbaar voor elke samengestelde dienst- of productscore waarbij je niet wilt dat één sterke dimensie een kritische zwakke dimensie verhult — bijv. het combineren van toegankelijkheids-, prestatie-, en betrouwbaarheidsscores voor een publieke digitale dienst multiplicatief in plaats van door gewogen gemiddelde, zodat een dienst die snel is maar ontoegankelijk niet "goed" kan scoren.
- De log-transformatie van inkomen door HDI (afnemende marginale waarde van een extra pond) is dezelfde logica achter [verdelingsgewicht](../distributieve-weging/) in beoordeling: een extra $1.000 betekent veel meer voor een arm huishouden dan een rijk, en beide lineair behandelen prijst impact verkeerd.
- Elk dashboard dat een enkele vermengde "digitale inclusie"- of "burgeruitkomsten"-score rapporteert, zou zijn aggregatieformule net zo expliciet moeten documenteren als de technische notities van UNDP doen — zie [kerncijfers publieke sector](../kerncijfers-publieke-sector/) en [public value scorecard](../public-value-scorecard/).

## Valkuilen

- **Gemiddelden in plaats van het geometrisch gemiddelde gebruiken** — een rekenkundig gemiddelde laat hoog inkomen slechte gezondheid of onderwijs volledig verhullen; het hele punt van de methodologiewijziging van 2010 was om die substitutie te stoppen.
- **HDI jaar-op-jaar vergelijken alsof het inflatiegecorrigeerd BBP was** — UNDP herbasseert de index periodiek (nieuwe minimum-/maximumgrenzen, herziene schoolplafonds), dus een rangwisseling kan een methodologie-update weerspiegelen, geen echte verschuiving; controleer altijd van welke HDR-editie een cijfer komt.
- **HDI behandelen als een armoedemaatstaf** — het is een nationaal gemiddelde en zegt niets over verdeling binnen een land; gebruik daarvoor de [Multidimensionale Armoede-Index](../multidimensionale-armoede-index/) of de afzonderlijke Ongelijkheid-Gecorrigeerde HDI van UNDP.

## Bronnen

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
