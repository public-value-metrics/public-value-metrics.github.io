# DORA-mælikvarðar fyrir opinbert verðmæti

DORA-mælikvarðarnir (DevOps Research and Assessment) — tíðni útgáfa, leiðtími breytinga, hlutfall misheppnaðra breytinga og tími til endurheimtar þjónustu, auk áreiðanleika sem fimmta — eru best sannprófuðu viðmið hugbúnaðargeirans um afhendingarárangur. Færðir yfir í hugtök ábyrgðar í opinbera geiranum er hver og einn beinn staðgengill þess hve hratt, og hve örugglega, opinbert verðmæti nær til borgara.

## Hvers vegna það skiptir máli

Áratugar rannsóknir DORA, birtar árlega sem *Accelerate State of DevOps Report* (aðferðafræði Forsgren, Humble og Kim, nú rekin af Google Cloud), flokka teymi í afburða-, há-, miðlungs- og lágframmistöðu. Afburðateymi gefa út eftir þörfum, þurfa innan við dag frá innfærslu til framleiðslu, mistakast í um 5% breytinga og jafna sig á innan við klukkustund; lágframmistöðuteymi gefa út mánaðarlega eða sjaldnar, þurfa mánuði, mistakast í um 40% breytinga og jafna sig á vikum. Hjá hinu opinbera eru þetta ekki hégómamælikvarðar verkfræðinga: Service Standard hjá Government Digital Service krefst þess að teymi „þrói og bæti oft“ og geti brugðist hratt við þörf notenda, og ráðuneyti sem ekki geta gefið út örugglega og oft eru byggingarlega ófær um að uppfylla þann staðal, hvað sem notendarannsóknir þeirra segja. Eigið starf Cabinet Office um stafræna skilvirkni leiddi í ljós að það er dýrt að ýta borgara úr misheppnaðri eða hægri stafrænni færslu yfir í síma- eða pappírsleið — Digital Efficiency Report frá GDS 2012 mat að sumar stafrænar færslur kostuðu allt niður í 20 pens á móti símasamskiptum eða samskiptum á staðnum sem kostuðu allt að 8,62 £ — svo breytingabilun í þjónustu sem snýr að almenningi kostar ekki aðeins verkfræðitíma, hún ýtir raunverulegum pundum yfir á fjárhagsáætlun símavers (sjá [sparnaður af tilfærslu milli þjónustuleiða](../sparnaður-af-tilfærslu-milli-þjónustuleiða/)).

## Stærðfræðin

```
Tíðni útgáfa           = útgáfur í framleiðslu / tími
Leiðtími breytinga     = t(útgáfa) − t(innfærsla), miðgildi
Hlutfall misheppnaðra breytinga = misheppnaðar breytingar / allar breytingar × 100
Tími til endurheimtar (MTTR) = t(endurheimt) − t(bilun), miðgildi
Áreiðanleiki           = uppfylling SLO (aðgengi, svartími, réttleiki)
```

Þýðing yfir í opinbert verðmæti:

```
Leiðtími          → vikur í ferlinu × CoD, sjá cost-of-delay-in-public-programmes
Bilunarhlutfall   → atvikahlutfall sem snýr að borgurum: CFR × kostnaður á hvert
                    endurbeint símtal í símaver (eða á hverja misheppnaða lögbundna færslu)
Endurheimtartími  → skaði vegna þjónusturofs: MTTR × (umsóknir sem lokast
                    á klukkustund) × kostnaður síðar eða velferðartap á einingu
Áreiðanleiki      → ávinningsafsláttur: þjónusta með 99% aðgengi skilar
                    ≈ 0,99 af líkönuðum ávinningi sínum — afhendingarígildi
                    þess að nýting eða fylgni sé undir markmiði
```

## Dæmi útreiknað

Teymi gáttar fyrir bótaumsóknir hjá sveitarfélagi, fyrir og eftir fjárfestingu í afhendingarverkfræði:

```
                    Fyrir       Eftir
Útgáfur             mánaðarlega vikulega
Leiðtími            8 vikur     5 dagar
CFR                 30%         10%
MTTR                3 dagar     4 klukkustundir
```

Teymið afhendir um 25 endurbætur á ári, meðalverðmæti 8.000 £/viku ([kostnaður við tafir](../kostnaður-við-tafir-í-opinberum-áætlunum/)). Að stytta leiðtíma um það bil 7,3 vikur færir ávinningsstraum hverrar endurbótar fram: 25 × 7,3 × 8.000 ≈ **1.460.000 £/ár** af verðmæti sem afhent er fyrr. Hvað varðar bilunarhlutfall: 25 × (0,30 − 0,10) = 5 færri misheppnaðar breytingar á ári; hver misheppnuð breyting á opinberri gátt endurbeinir venjulega áætluðum 2.000 borgurum í símaleiðina á 8,62 £ á móti 20 pensum, nettókostnaður um 8,42 £ × 2.000 ≈ 16.840 £ á hvert atvik, svo að forðast 5 atvik sparar ≈ **84.200 £/ár**. Fjárfestingin í afhendingarverkfræði er metin í sama gjaldmiðli og hvert annað tilvik um opinbert verðmæti.

## Dæmi útreiknað, framhald: áreiðanleiki

Ef gáttin keyrir á 97% aðgengi frekar en markmiðið 99,5%, og hvert prósentustig af niðritíma er líkanað sem 2% umsókna tapaðra vegna brottfalls, skilar þjónustan um það bil 0,975 af líkönuðum ávinningi sínum upp á 2 milljónir £/ár — ávinningsafslætti upp á 50.000 £/ár sem hrein mælaborð um uppitíma sýna aldrei.

## Tengsl við hugbúnaðarverkfræði

DORA-mælikvarðar eru rekstrarmælikvarðar opinberrar þjónustu í öðrum klæðum: leiðtími samsvarar [þjónustustaðlar og færslumælikvarðar](../þjónustustaðlar-og-færslumælikvarðar/); hlutfall misheppnaðra breytinga samsvarar endurvinnslu- og kvörtunarhlutfalli; MTTR samsvarar því hve lengi lögbundin þjónusta er óaðgengileg umsækjendum. Umbótaaðferðir flytjast í báðar áttir því báðar eru biðraðakerfi undir ábyrgðartakmörkunum — sjá [flæðismælikvarðar í afhendingu hins opinbera](../flæðismælikvarðar-í-afhendingu-hins-opinbera/) fyrir undirliggjandi biðraðastærðfræði. Athugaðu einnig niðurstöðu DORA 2025 um að innleiðing gervigreindar fylgi meiri afköstum en *verri* stöðugleika — inngrip með bæði virkni og aukaverkanir, sem er einmitt nettóávinningsgreiningin sem efnið um [framleiðni gervigreindar í opinbera geiranum](../framleiðni-gervigreindar-í-opinbera-geiranum/) í þessum hópi vinnur úr.

## Gildrur

- **Hagræðing mælikvarða**: að blása upp fjölda útgáfa með tómum útgáfum, eða útiloka bráðaleiðréttingar frá talningu misheppnaðra breytinga. Skilgreindu atburði jafn nákvæmlega og lögbundinn þjónustustaðall skilgreinir „árangursríka færslu“.
- **Röðunartöflur milli ráðuneyta**: DORA-flokkar bera saman afhendingarhætti, ekki þjónustur með ólík áhættusnið; skattgreiðslukerfi sem metið er „hátt“ getur verið rétt afstaða þar sem „afburða“ væri ábyrgðarlaust miðað við kröfur um tryggingu.
- **Að bestað sé aðeins einn mælikvarði**: hraði án hlutfalls misheppnaðra breytinga er klassíska málamiðlunin milli afkasta og óstöðugleika — tilkynntu alla fjóra saman, ekki sem eina einkunn.

## Heimildir

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
