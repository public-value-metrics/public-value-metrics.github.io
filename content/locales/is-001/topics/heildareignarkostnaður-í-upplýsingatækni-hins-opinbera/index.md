# Heildareignarkostnaður í upplýsingatækni hins opinbera (TCO)

Heildareignarkostnaður (total cost of ownership) er allur lífsferilskostnaður kerfis — kaup auk hvers árs í rekstri — núvirtur að sameiginlegri dagsetningu. Í upplýsingatækni hins opinbera er áreiðanlegasta einstaka spávillan að bera saman seljendur eða valkosti eingöngu á kaupverði, þegar rekstur og viðhald nema yfirleitt einhvers staðar á milli helmings og fjögurra fimmtu hluta af líftímareikningnum.

## Hvers vegna það skiptir máli

Green Book hjá HM Treasury krefst þess að fjárhagslega tilvikið í hverjum viðskiptarökum fimm-tilvika líkansins nái yfir kostnað yfir allan líftímann, ekki aðeins fjárfestingarútgjöld — en National Audit Office hefur ítrekað fundið ráðuneyti samþykkja upplýsingatæknifjárfestingar gegn ófullkominni eða bjartsýnni spá um rekstrarkostnað, aðeins til að uppgötva raunverulegan rekstrarkostnað þegar kerfið er í notkun og fjárfestingarlína fjárlaga hefur lokast. Technology Code of Practice hjá Government Digital Service og Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) ýtir ráðuneytum í átt að skýjalausnum og staðlaðri hýsingu að hluta vegna þess að það gerir áframhaldandi kostnað sýnilegan og sambærilegan, í stað þess að vera grafinn inni í einni fjárfestingarinnkaupatölu sem lítur aðlaðandi lág út við samþykki og dýrkeypt röng þremur árum síðar.

## Stærðfræðin

```
TCO = Kaupkostnaður + Σ(t=1..N) Árlegur rekstrarkostnaður_t / (1+r)^t
      − eftirstöðvarvirði (núvirt)

r = staðlaður samfélagslegur afsláttarstuðull Green Book frá HM Treasury, 3,5%/ár
    (lækkandi stuðlaáætlun fyrir tímaskeið umfram 30 ár)

Þættir rekstrarkostnaðar: hýsing/leyfi, stuðningur og viðhald,
öryggislagfæringar og fylgni, starfsmannatími, fyrirhuguð endurnýjun/flutningur
```

Sjá [samfélagslegur afsláttarstuðull](../samfélagslegur-afsláttarstuðull/) fyrir hvers vegna núvirðingarstuðullinn skiptir máli yfir dæmigerðan 5–10 ára líftíma kerfis, og [smíða eða kaupa hjá hinu opinbera](../smíða-eða-kaupa-hjá-hinu-opinbera/) fyrir hvernig TCO nærir ákvörðun um að smíða eða kaupa.

## Dæmi útreiknað

Ráðuneyti ber saman tvö málastjórnunarkerfi á 5 ára tímaskeiði á 3,5% afsláttarstuðli Green Book.

```
Kerfi A: fjárfesting 3.500.000 £, rekstur 250.000 £/ár
Kerfi B: fjárfesting 1.800.000 £ (lítur ódýrara út), rekstur 650.000 £/ár
         (þyngri stuðningur seljanda og samþættingarbyrði)

Barnalegur samanburður á fjárfestingu einni: B vinnur, 1,8 m£ < 3,5 m£.

Summa núvirðingarstuðla, 5 ár á 3,5%: 0,966+0,934+0,902+0,871+0,842 ≈ 4,515

TCO_A = 3.500.000 + 250.000 × 4,515 = 3.500.000 + 1.128.750 = 4.628.750 £
TCO_B = 1.800.000 + 650.000 × 4,515 = 1.800.000 + 2.934.750 = 4.734.750 £
```

TCO snýr barnalegri ákvörðun við: Kerfi B er lítillega dýrara yfir fimm ár þegar rekstrarkostnaður er núvirtur og lagður saman, því rekstrarhlutfall þess af líftímakostnaði er 62% (2.934.750 / 4.734.750) á móti 24% hjá Kerfi A — áþreifanlegt dæmi um niðurstöðuna „viðhald er meirihluti reikningsins“, falin algerlega með því að bera saman límmiðaverð.

## Tengsl við hugbúnaðarverkfræði

TCO er talan sem ætti að aga sérhverja ákvörðun um [smíða eða kaupa](../smíða-eða-kaupa-hjá-hinu-opinbera/) og sérhver rök um niðurgreiðslu [tæknilegrar skuldar](../tæknileg-skuld-sem-rýrnun-opinbers-verðmætis/), því vextir skuldar og frestað viðhald eru bæði rekstrarkostnaðarliðir sem eiga heima í sömu núvirtu heildinni, hvort sem einhver hefur verið að rekja þá eða ekki. Verkfræðingar sem leggja til val á vettvangi eða seljanda ættu að sýna fulla TCO-töflu, ekki innkaupaverðið, því innkaupaverðið er einmitt talan sem fjárhagslega tilvik Green Book var hannað til að stöðva ráðuneyti í að treysta eingöngu á. TCO er líka heiðarlegi nefnarinn fyrir mat á [hagkvæmni útgjalda (VFM)](../hagkvæmni-útgjalda/) — VFM ber ávinning saman við kostnað, og vantalin kostnaðarlína blæs upp hvert VFM-hlutfall í viðskiptarökunum.

## Gildrur

- **Samanburður á fjárfestingu einni**: algengustu innkaupamistökin — að bera saman listaverð seljenda án samsvarandi spár um rekstrarkostnað fyrir hvern valkost.
- **Að útiloka útgöngu- og flutningskostnað**: gagnaútdráttur við samningslok, endurvörpun á nýjan vettvang og refsingar vegna innilokunar hjá seljanda eru raunverulegar TCO-línur sem sjaldan koma fyrir í upprunalegu viðskiptarökunum.
- **Að útiloka öryggis- og fylgnikostnað**: lagfæringatíðni, endurnýjun vottunar og endurskoðunarkostnaður vaxa með aldri og flækju kerfis — sjá [verðmæti netöryggis í opinbera geiranum](../verðmæti-netöryggis-í-opinbera-geiranum/) — og eru reglulega skilin eftir utan spár um rekstrarkostnað.
- **Ónúvirtur samanburður milli valkosta með ólík kostnaðarsnið**: að bera saman valkost með mikla fjárfestingu og valkost með mikinn rekstur án núvirðingar ívilnar kerfisbundið þeim valkosti sem frestar meiri kostnaði til síðari ára.

## Heimildir

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
