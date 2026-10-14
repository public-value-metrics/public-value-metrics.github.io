# Mælikvarðar á ánægju borgara

Mælikvarðar á ánægju borgara mæla hvernig fólk metur beina reynslu sína af opinberri þjónustu — aðgreint frá trausti á stofnunum almennt, og aðgreint frá því hvort þjónustan náði í raun góðri útkomu. Þjónusta getur verið vinsæl og árangurslaus, eða árangursrík og illa liðin; bilið þar á milli er sjálft greiningarupplýsingar sem afhendingarteymi ætti að fylgjast með.

## Hvers vegna það skiptir máli

Ánægja er mæld í tveimur ólíkum hæðum sem reglulega er ruglað saman. Á þjónustustigi krefjast hin aflagða Performance Platform í Bretlandi og núverandi GOV.UK service manual könnunar á ánægju fyrir hverja þjónustu (venjulega fimm punkta kvarði frá „mjög ánægð(ur)“ til „mjög óánægð(ur)“, framkvæmd þegar færslan fer fram) sem eins af fjórum lögboðnum lykilmælikvörðum þjónustu — sjá [þjónustustaðlar og færslumælikvarðar](../þjónustustaðlar-og-færslumælikvarðar/). Á stofnanastigi mælir Civil Service People Survey í Bretlandi þátttöku og reynslu starfsfólks í hverju ráðuneyti ríkisins árlega, og sérstaklega kannar „Trust in Government“ verkefni OECD traust almennings á landsstjórn í aðildarríkjum og rekur langtímamynstur hnignunar og endurheimtar sem krísur móta mjög (fjármálakreppan 2008 og COVID-19 faraldurinn ollu báðar skörpum, sýnilegum hreyfingum í tölum OECD um traust). Ástæðan fyrir því að verkfræðingar sem smíða þjónustu sem snýr að borgurum þurfa að halda ánægju og útkomu aðskildum er þekktur bilunarháttur í þjónustuhönnun: fallega hannað, auðvelt í notkun stafrænt eyðublað fyrir bótaumsókn getur fengið mjög háa ánægju á meðan undirliggjandi stefna — skilyrði fyrir rétti, afgreiðslubakslög, upphæðir bóta — skilur umsækjandann ekki betur settan. Ánægja mælir viðmótið; hún mælir ekki verðmætið sem er afhent að baki því.

## Stærðfræðin

```
Nettóánægja = % ánægð(ur) (eða mjög ánægð(ur)) − % óánægð(ur) (eða mjög óánægð(ur))
                    (hlutlaus svör/engin skoðun er sleppt úr báðum liðum en talin
                    í svargrunninum þegar hvert hlutfall er reiknað)

Bil ánægju og útkomu = ánægjueinkunn − útkomueinkunn
                    (hvort tveggja stillt 0–100; stórt jákvætt bil gefur til kynna
                    þjónustu sem „líður vel“ en skilar of litlu í efnisatriðum)

Traustsvísitala (að hætti OECD) = % svarenda sem svara „já“ við
                    „berðu traust til [landsstjórnar]?“
                    rakið sem tímaröð, venjulega sundurliðað eftir
                    aldri, tekjum og menntun
```

## Dæmi útreiknað

**Rafræn innheimta útsvars hjá sveitarfélagi**: ánægjukönnun þegar færsla tekst sýnir 2.400 svarendur: 1.650 ánægðir/mjög ánægðir, 250 óánægðir/mjög óánægðir, 500 hlutlausir.

```
Nettóánægja = (1.650/2.400 × 100) − (250/2.400 × 100)
                  = 68,75% − 10,42%
                  = +58,3 nettóánægja
```

Þetta lítur sterkt út eitt og sér. En könnunin er aðeins sýnd notendum sem *tókst* að ljúka færslunni — þekkt mælingaskekkja (sjá gildrur hér að neðan). Að para hana við mælikvarðann um lokahlutfall úr [þjónustustaðlar og færslumælikvarðar](../þjónustustaðlar-og-færslumælikvarðar/) sýnir að lokahlutfallið er aðeins 71%, sem þýðir:

```
Raunveruleg ánægja þýðisins er ómæld hjá þeim 29% sem hættu við ferðalagið —
sennilega óánægðasti hópurinn, því að hætta við er sjálft sterkt neikvætt
merki sem könnunin nær aldrei.
```

**Dæmi á landsvísu (uppbygging traustsraðar að hætti OECD)**: traust á landsstjórn tilkynnt 42% á ári 1, fellur í 34% á ári 2 (krísuár) og nær sér í 39% á ári 3 — ferill sem er dæmigerður fyrir áfalla-og-hlutaendurheimtar mynstrið sem OECD skjalfestir í aðildarríkjum eftir stórar krísur.

## Tengsl við hugbúnaðarverkfræði

Mældu ánægju við hvern þýðingarmikinn útgönguhluta notendaferðalags, ekki aðeins þegar því lýkur með góðum árangri — algengustu einstöku verkfræðimistökin á þessu sviði, og þau breyta ánægjumælikvarða hljóðlega í hégómamælikvarða með lifendaskekkju. Þar sem unnt er, para ánægjueinkunnina við lokahlutfalls- eða útkomumælikvarða á sama mælaborði svo teymi geti ekki fagnað vaxandi ánægju á meðan lokahlutfall fellur hljóðlega (sjá [kostnaður á hverja færslu](../kostnaður-á-hverja-færslu/) og [stafræn þátttaka](../stafræn-þátttaka/) fyrir hverjir eru útilokaðir úr stafrænu ánægjuúrtaki í upphafi — notendur utan nets og notendur með aðstoð eru kerfisbundið undirfulltrúar í könnunum innan þjónustu). Ánægju- og traustsgögn nýtast einnig beint í lögmætisarm [stefnumótandi þríhyrnings Moore](../opinbert-verðmæti/), og eiga heima í sjónarhornum „viðskiptavinur“ og „lögmæti“ í [stigakort opinbers verðmætis](../stigakort-opinbers-verðmætis/) — sjá [mælikvarðar á traust og lögmæti](../mælikvarðar-á-traust-og-lögmæti/) fyrir hliðstæðuna á stofnanastigi við þennan mælikvarða á þjónustustigi.

## Gildrur

- **Lifendaskekkja í könnunum við lok ferlis**: notendur sem hætta við ferðalag sjá aldrei könnunina, svo há ánægjueinkunn innan þjónustu getur samræmst lágu lokahlutfalli og stórum ósýnilegum hópi óánægðra sem ljúka ekki.
- **Að líta á ánægju sem staðgengil útkomu**: vel hannað viðmót fyrir illa hannaða stefnu fær góða ánægju og slæma útkomu — tilkynntu alltaf hvort tveggja, aldrei annað í stað hins.
- **Lítil, ófulltrúaleg úrtök tilkynnt með falskri nákvæmni**: ánægjueinkunn frá nokkur hundruð sjálfvöldum svarendum gefin upp með einum aukastaf gefur til kynna öryggi sem úrtaksstærðin getur ekki staðið undir.
- **Að hunsa sundurliðun eftir þýði**: tölur um traust og ánægju á landsvísu sem ekki eru sundurliðaðar eftir aldri, tekjum, fötlun eða stafrænum aðgangi geta falið mjög ólíka reynslu hópa — mynstur sem útgáfur OECD um Trust in Government sundurliða sérstaklega.

## Heimildir

- OECD, „Trust in Government.“ <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, „Civil Service People Survey“ results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, „Measuring Success.“ <https://www.gov.uk/service-manual/measuring-success>
