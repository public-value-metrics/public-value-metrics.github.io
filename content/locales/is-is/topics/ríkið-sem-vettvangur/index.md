# Ríkið sem vettvangur (GaaP)

Ríkið sem vettvangur (Government as a Platform) er sú stefna að smíða sameiginlega, endurnýtanlega íhluti — tilkynningaþjónustu, greiðsluþjónustu, auðkennisþjónustu — einu sinni, miðlægt, svo hundruð einstakra opinberra þjónusta nýti þá í stað þess að hver smíði sína eigin. Hún endurrammar opinbera stafræna innviði sem vandamál í hagfræði vettvanga: verðmætið liggur ekki í neinni einni samþættingu, heldur í því að jaðarkostnaður *næsta* teymis sem tekur þá upp nálgast núll.

## Hvers vegna það skiptir máli

GDS setti stefnuna formlega fram í ritinu „Government as a Platform“ frá 2015, með þeim rökum að ríkið hefði verið að smíða sömu getu — greiðslumóttöku, tilkynningar til notenda, sannprófun auðkenna, uppflettingu heimilisfanga — sérstaklega í hverri þjónustunni á fætur annarri, hver með eigin innkaup, öryggismat og viðvarandi stuðningsbyrði. Valkosturinn var lítill fjöldi sameiginlegra vettvanga, smíðaðir á háum gæðastaðli einu sinni og endurnýttir alls staðar: GOV.UK Notify til að senda tölvupóst, textaskilaboð og bréf, GOV.UK Pay til að taka við netgreiðslum og GOV.UK One Login (arftaki fyrra auðkenningarverkefnisins GOV.UK Verify) til sannprófunar auðkenna. Umfangið sem þessir vettvangar hafa náð er skýrasta sönnun þess að stefnan virkaði: GOV.UK Pay hefur afgreitt yfir 10 milljarða £ í færslum yfir um það bil 1.800 einstakar þjónustur — og þar sem það tók um fjögur ár að afgreiða fyrsta milljarðinn afgreiðir það nú slíka upphæð á um fimm mánuðum — á meðan GOV.UK Notify hefur sent yfir 9 milljarða skilaboða fyrir meira en 1.500 opinberar stofnanir. Hver einasta þessara þjónusta sparaði sér að smíða, tryggja og viðhalda eigin greiðslugátt eða skilaboðaleiðslu.

## Stærðfræðin

```
Smíðakostnaður á þjónustu (enginn vettvangur) = N þjónustur × kostnaður við að smíða,
  öryggismeta og reka eitt greiðslu-/tilkynninga-/auðkenniskerfi

Kostnaður vettvangs = fastur smíðakostnaður vettvangs
                    + jaðarkostnaður á hverja þjónustu sem tekur upp (samþætting,
                      stillingar, viðvarandi stuðningur vettvangsteymis)

Endurnýting borgar sig þegar:
  smíðakostnaður vettvangs < N × (smíðakostnaður á þjónustu − jaðarkostnaður
  við samþættingu)

Fyrir þroskaðan vettvang nálgast jaðarkostnaður á hvern viðbótarnotanda
aðeins færslu-/skilaboðagjaldið — fasti kostnaðurinn er afskrifaður yfir
allt kerfissafn ríkisins, ekki fjárhagsáætlun eins ráðuneytis, sem er ástæðan
fyrir því að GaaP-íhlutir eru yfirleitt fjármagnaðir miðlægt frekar en
innheimtir á fullum kostnaðarendurheimtum hjá fyrstu notendum.
```

## Dæmi útreiknað

**Sveitarfélag tekur upp GOV.UK Pay í stað þess að smíða greiðslugátt**:

```
Áætlun um að smíða sjálft:
  PCI-DSS fylgnivinna + samþætting + viðvarandi viðhald
  ≈ 85.000 £ smíði + 22.000 £/ár viðhald

Innleiðing GOV.UK Pay:
  Samþættingarvinna ≈ 12.000 £ (tími forritara)
  Færslugjöld: kortagreiðslur frá borgurum til ríkisins eru venjulega
  gjaldfærðar með lágu hlutfalli + föstu gjaldi á hverja færslu, engin
  sérstök PCI-DSS-byrði fyrir sveitarfélagið
  ≈ 12.000 £ einskiptis, viðvarandi kostnaður breytilegur eftir umfangi, ekki fastur

Sparnaður á fyrsta ári ≈ 85.000 £ − 12.000 £ = 73.000 £, áður en talinn er afstýrður
22.000 £/ár viðhaldskostnaður og afstýrð fylgniáhætta af því að geyma kortagögn í
kerfi sem sveitarfélagið rekur yfirhöfuð — þessi síðari flokkur er öryggisverðmætið
sem fjallað er um í public-sector-cybersecurity-value.
```

Margfaldaðu þessar 73.000 £ yfir þær um það bil 1.800 þjónustur sem nú nota GOV.UK Pay og samanlagður afstýrður smíðakostnaður yfir ríkið skiptir hundruðum milljóna — hagfræði vettvangsins, ekki nein ein samþætting, er þar sem verðmæti stefnunnar liggur í raun.

## Tengsl við hugbúnaðarverkfræði

Ríkið sem vettvangur er bein röksemd fyrir [smíða eða kaupa hjá hinu opinbera](../smíða-eða-kaupa-hjá-hinu-opinbera/): þegar sameiginlegur, úttekinn og vel rekinn íhlutur er til er sjaldan betri kostur hvað varðar [hagkvæmni útgjalda](../hagkvæmni-útgjalda/) að smíða sérsmíðaðan jafngildi hans, og það fellur á lið 13 í [staðli um stafræna þjónustu](../staðall-um-stafræna-þjónustu/) („notaðu og leggðu til opna staðla, sameiginlega íhluti og mynstur“) nánast samkvæmt skilgreiningu. Það breytir líka lögun [heildareignarkostnaður í upplýsingatækni hins opinbera (TCO)](../heildareignarkostnaður-í-upplýsingatækni-hins-opinbera/): innleiðing vettvangs skiptir stórum fjárfestingar- og viðhaldslið út fyrir minni, notkunartengdan rekstrarkostnað, sem er auðveldara að spá fyrir um og auðveldara að afleggja fjármögnun á ef þjónusta er lögð niður. Opin endurnýting íhluta á frænda í [verðmæti opinna gagna](../verðmæti-opinna-gagna/) — hvort tveggja eru aðferðir til að meðhöndla það sem ríkið framleiðir einu sinni sem sameiginlega innviði frekar en eign ráðuneytis.

## Gildrur

- **Skuggasmíði**: teymi smíða hljóðlega eigin greiðslu- eða tilkynningasamþættingu því innleiðingarferli vettvangsins er hægara en að gera það sjálf — stjórnarháttavandi, ekki tæknilegur, sem grefur hljóðlega undan hagfræði endurnýtingar sem öll stefnan byggir á.
- **Að vanfjármagna vettvangsteymið miðað við verðmætið sem það skapar**: verðmæti safnast hjá ráðuneytum sem nota vettvanginn á meðan kostnaðurinn situr hjá vettvangsteyminu, sem skapar króníska hættu á vanfjárfestingu nema fjármögnun sé miðlæg og vernduð — útgáfa af harmleik almenninganna.
- **Að mæla árangur vettvangs eingöngu með notkun**: tölur um innleiðingu (þjónustur skráðar, skilaboð send) eru leiðandi vísir, ekki sönnun verðmætis; raunverulega prófið er reikningsdæmið um afstýrðan smíðakostnað og afstýrða áhættu hér að ofan.
- **Að líta á „vettvang“ sem samheiti við „risaeðlu“ (monolith)**: GaaP-íhlutir heppnast því hver gerir eitt vel með þröngu, stöðugu viðmóti — að pakka saman óskyldri getu í einn „vettvang“ endurskapar sérsmíðavandann á öðru stigi.

## Heimildir

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, „GOV.UK Pay at 10: how it started and how it's going“. <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
